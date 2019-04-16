<template>
	<view class="statistics_page">
		<view class="date_choice">
			<button class="pre_month" :class="{'dis_btn':disPreMonthBtn}" @tap="jumpMonth('pre')">上个月</button>
			<view class="cur_month" @tap="pickDate">{{checkOnTime.year}}-{{checkOnTime.month}}</view>
			<button class="next_month" :class="{'dis_btn':disNextMonthBtn}" @tap="jumpMonth('next')">下个月</button>
		</view>
		<view class="canvasView">
			<mpvue-echarts :echarts="echarts" :onInit="pieInit" canvasId="pie" ref="pieChart" />
		</view>
		<view class="bill_wrap">
			<view class="bill_item">
				<view class="b_title"><text class="iconfont icon-dian" style="color:#f05b72;"></text>预计收入</view>
				<view class="b_money">￥{{billData.in}}</view>
			</view>
			<view class="bill_item">
				<view class="b_title"><text class="iconfont icon-dian" style="color:#06d7b5;"></text>成本</view>
				<view class="b_money">￥{{billData.out}}</view>
			</view>
			<view class="bill_item">
				<view class="b_title">预计利润</view>
				<view class="b_money">￥{{billData.profit}}</view>
			</view>
		</view>
		<scroll-view view class="bill_list_wrap" scroll-y>
			<view class="bill_list" v-if="billData.billList.length>0">
				<view class="list_item" v-for="(item,index) in billData.billList" :key="index" @tap="editbill(item)">
					<view class="left">
						<view class="l_title">
							<text v-text="item.type=='in'?'收入记录':'成本记录'"></text><text style="color: #AAAAAA;" v-if="item.remark!=''">-{{item.remark}}</text>
						</view>
						<!-- <view class="l_source" v-text="item.source=='1'?'来源平台':'来源其他'"></view> -->
						<view class="l_time">{{item._date}}</view>
					</view>
					<view class="l_money in" v-if="item.type=='in'">{{item.money}}</view>
					<view class="l_money out" v-if="item.type=='out'">{{item.money}}</view>
				</view>
			</view>
			<view class="no_list" v-if="billData.billList.length<=0">
				暂无本月账单
			</view>
		</scroll-view>
		<w-picker :mode="mode" :startYear="startYear" :endYear="endYear" :defaultVal="defaultVal" @confirm="onConfirm" ref="datePicker" />
	</view>
</template>

<script>
	import * as echarts from '@/components/echarts/echarts.simple.min.js';
	import mpvueEcharts from '@/components/mpvue-echarts/src/echarts.vue';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import {
		request
	} from '../../common/request.js';
	import helper from '../../common/helper.js';
	import wPicker from '../../components/w-picker/w-picker.vue';
	const cityList = [{
		value: 0,
		name: '收入'
	}, {
		value: 0,
		name: '成本'
	}];

	let pieOption = {
		animation: false,
		backgroundColor: '#FFFFFF',
		color: ['#F05B72', '#06d7b5'],
		series: [{
			label: {
				normal: {
					fontSize: 14
				}
			},
			type: 'pie',
			center: ['50%', '50%'],
			radius: [0, '80%'],
			data: [],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 2, 2, 0.3)'
				}
			}
		}]
	};


	export default {
		data() {
			return {
				echarts: echarts,
				updateStatus: false,
				mode: 'datem',
				curTime: {
					year: '',
					month: '',
					day: ''
				},
				// 当前选中的时间
				checkOnTime: {
					year: '',
					month: '',
				},
				startYear: '2012',
				endYear: helper.getCurTime().year,
				defaultVal: [0, 0], // 日期默认值
				billData: {
					// 总账单
					in: '0.00', //预计收入
					out: '0.00', //成本，
					profit: '0.00', //预计利润
					// 账单列表
					billList: []
				},
			}
		},
		components: {
			mpvueEcharts,
			wPicker
		},
		onLoad() {
			pieOption.series[0].data = cityList.slice(0);
			const timeObj = helper.getCurTime();
			// 当前时间
			this.curTime = timeObj;
			// 当前选中的时间
			this.checkOnTime.year = timeObj.year;
			this.checkOnTime.month = timeObj.month;
			// 获取时间选择器的初始值
			this.defaultVal = this.defaultDateVal();
			// 获取统计数据(全部)
			this.getStatisticsData();

		},
		onShow() {
			if (this.isEditStatistics) {
				this.getStatisticsData();
			}
			this.statisticsEditStatus(false)
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.addbill()
			}
		},
		onBackPress() {
			// 返回时判断时间picker是否已关闭
			if (this.$refs.datePicker.showPicker) {
				this.$refs.datePicker.hide();
				return true
			}
		},
		computed: {
			...mapState(['isEditStatistics']),
			//是否禁用上个月跳转按钮
			disPreMonthBtn: {
				get: function() {
					if (Number(this.checkOnTime.year) <= Number(this.startYear) && Number(this.checkOnTime.month) <= 1) {
						return true
					}
				}
			},
			//是否禁用下个月跳转按钮
			disNextMonthBtn: {
				get: function() {
					if (Number(this.checkOnTime.year) >= Number(this.curTime.year) && Number(this.checkOnTime.month) >= Number(this.curTime.month)) {
						return true
					}
				}
			},
		},
		methods: {
			...mapMutations(['statisticsEditStatus']),
			updatePie(In, out) {
				// 参考 mpvue-charts 的懒加载示例
				// https://github.com/F-loat/mpvue-echarts/blob/master/examples/lazyLoad.vue
				pieOption.series[0].data = [{
					value: In,
					name: '收入'
				}, {
					value: out,
					name: '成本'
				}]
				this.$refs.pieChart.init();
			},
			pieInit(canvas, width, height) {
				let pieChart = echarts.init(canvas, null, {
					width: width,
					height: height
				})
				canvas.setChart(pieChart)

				pieChart.setOption(pieOption)
				return pieChart
			},
			// 记录一笔
			addbill() {
				uni.navigateTo({
					url: '/pages/statistics/add_bill',
				});
				uni.setStorageSync('dz_billNote', '');
			},
			editbill(par) {
				const param = JSON.stringify(par)
				uni.navigateTo({
					url: '/pages/statistics/edit_bill?param=' + param,
				});
			},
			// 跳到上一个月或者下一个月
			jumpMonth(handle) {
				const Y = Number(this.curTime.year); // 当前的年份(固定)
				const M = Number(this.curTime.month); // 当前的月份(固定)
				const _y = Number(this.checkOnTime.year); //当前选中的年份
				const _m = Number(this.checkOnTime.month); // 当前选中的月份
				let cy = '', // 修改后的年份
					cm = ''; // 修改后的月份
				if (handle === 'pre') {
					if (_y <= Number(this.startYear) && _m <= 1) return;
					if (_m > 1) {
						cm = _m - 1;
						cy = _y;
					} else {
						cm = 12;
						cy = _y - 1;
					}
				} else if (handle === 'next') {
					if (_y >= Y && _m >= M) return;
					if (_m < 12) {
						cm = _m + 1;
						cy = _y;
					} else {
						cm = 1;
						cy = _y + 1;
					}
				}
				cm = cm >= 10 ? cm : '0' + cm;
				this.checkOnTime.year = cy.toString();
				this.checkOnTime.month = cm.toString();
				this.defaultVal = this.defaultDateVal();
				this.getStatisticsData();
			},
			// 日期选择
			pickDate() {
				this.$refs.datePicker.show();
			},
			//确定日期选择
			onConfirm(e) {
				const _oldY = this.checkOnTime.year;
				const _oldM = this.checkOnTime.month;
				this.checkOnTime.year = e[0];
				this.checkOnTime.month = e[1];
				this.defaultVal = this.defaultDateVal();
				if (_oldY !== e[0] || _oldM !== e[1]) {
					this.getStatisticsData();
				}
			},
			// 返回日期默认值
			defaultDateVal() {
				const y_val = Number(this.checkOnTime.year) - Number(this.startYear);
				const m_val = Number(this.checkOnTime.month) - 1;
				return [y_val, m_val]
			},
			// 获取统计数据
			//type:  statistics: '统计数据'  total: 获取总数    list: '获取列表'
			getStatisticsData() {
				const _this = this;
				const year = this.checkOnTime.year;
				const month = this.checkOnTime.month;
				uni.showLoading({
					title: '',
					mask: true,
				})
				request({
					url: '/wap/api/statistics.php?action=statistics',
					data: {
						date: year + '-' + month
					},
					success: function(res) {
						if (res.data.status === 'success') {
							let _data = res.data.content;
							const list = _data.billList;
							if (list.length > 0) {
								list.map((item, index, self) => {
									self[index]['_date'] = item.date.substr(5);
								})
							}
							_this.billData.billList = list;
							_this.billData.in = _data.in.toFixed(2);
							_this.billData.out = _data.out.toFixed(2);
							_this.billData.profit = _data.profit.toFixed(2);
							_this.updatePie(Number(_data.in), Number(_data.out))
						}
					},
					complete: function() {
						uni.hideLoading()
					}
				})
			},

		}
	}
</script>
<style>
	page {
		height: 100%;
	}
</style>
<style lang="scss" scoped>
	$theme-color: #F05B72;

	.statistics_page {
		box-sizing: border-box;
		height: 100%;

		.date_choice {
			box-sizing: border-box;
			width: 100%;
			display: flex;
			flex-direction: row;
			height: 80upx;

			.pre_month,
			.next_month {
				box-sizing: border-box;
				height: 80upx;
				background: $theme-color;
				color: #FFFFFF;
				padding: 0;
				margin: 0;
				text-align: center;
				line-height: 80upx;
				font-size: 28upx;
				width: 180upx;
				border-radius: 0;
				transition: all 0.2s;

				&::after {
					border: none;
				}

				&:active {
					opacity: 0.8;
				}
			}

			.cur_month {
				box-sizing: border-box;
				width: calc(100% - 360upx);
				text-align: center;
				height: 80upx;
				line-height: 80upx;
				border-bottom: 1px solid #eaeaea;
				border-top: 1px solid #eaeaea;
				color: $theme-color;
				font-size: 32upx;
			}
		}

		.canvasView {
			box-sizing: border-box;
			height: 400upx;
		}

		.bill_wrap {
			box-sizing: border-box;
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 30upx 0;
			height: 140upx;
			border-bottom: 1px solid #eaeaea;
			border-top: 1px solid #eaeaea;

			.bill_item {
				box-sizing: border-box;
				width: calc(100% / 3);
				display: flex;
				flex-direction: column;
				text-align: center;
				color: #333333;
				border-right: 1px solid #eaeaea;

				&:last-child {
					border-right: none;
				}

				.b_title {
					font-size: 32upx;

					.iconfont {
						font-size: 32upx;
					}
				}

				.b_money {
					box-sizing: border-box;
					padding: 0 10upx;
					font-size: 28upx;
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}

		.bill_list_wrap {
			box-sizing: border-box;
			width: 100%;
			height: calc(100% - 620upx);
			padding: 20upx;

			.bill_list {
				box-sizing: border-box;
				width: 100%;

				.list_item {
					box-sizing: border-box;
					display: flex;
					flex-direction: row;
					align-items: center;
					border-bottom: 1px solid #eaeaea;
					padding: 20upx 0;

					&:last-child {
						border-bottom: none;
					}

					.left {
						box-sizing: border-box;
						width: calc(100% - 180upx);

						.l_title {
							box-sizing: border-box;
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							font-size: 32upx;
							margin-bottom: 4upx;
						}

						.l_source {
							font-size: 28upx;
							color: #aaaaaa;
							margin-bottom: 4upx;
						}

						.l_time {
							font-size: 28upx;
							color: #cccccc;
						}
					}

					.l_money {
						width: 180upx;
						text-align: right;
					}

					.in {
						color: #F05B72;
					}

					.out {
						color: #06d7b5;
					}
				}

			}

			.no_list {
				display: flex;
				height: 200upx;
				;
				justify-content: center;
				align-items: center;
				color: #aaaaaa;
			}
		}
	}
</style>
