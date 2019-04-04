<template>
	<view class="statistics_page">
		<view class="date_choice">
			<button class="pre_month">上个月</button>
			<view class="cur_month">2017-10</view>
			<button class="next_month">下个月</button>
		</view>
		<view class="canvasView">
			<mpvue-echarts :echarts="echarts" :onInit="pieInit" canvasId="pie" ref="pieChart" />
		</view>
		<view class="bill_wrap">
			<view class="bill_item">
				<view class="b_title"><text class="iconfont icon-dian" style="color:#f05b72;"></text>预计收入</view>
				<view class="b_money">￥10.00</view>
			</view>
			<view class="bill_item">
				<view class="b_title"><text class="iconfont icon-dian" style="color:#06d7b5;"></text>成本</view>
				<view class="b_money">￥10.00</view>
			</view>
			<view class="bill_item">
				<view class="b_title">预计利润</view>
				<view class="b_money">￥10.000000000000000000000</view>
			</view>
		</view>
		<scroll-view view class="bill_list_wrap" scroll-y>
			<view class="bill_list">
				<view class="list_item" v-for="(item,index) in billData.billList" :key="index" @tap="editbill(item)">
					<view class="left">
						<view class="l_title">
							<text v-text="item.type=='in'?'收入记录':'成本记录'"></text><text v-if="item.note!=''">-{{item.note}}</text>
						</view>
						<view class="l_source" v-text="item.source=='1'?'来源平台':'来源其他'"></view>
						<view class="l_time">{{item.date}}</view>
					</view>
					<view class="l_money in" v-if="item.type=='in'">{{item.money}}</view>
					<view class="l_money out" v-if="item.type=='out'">{{item.money}}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import * as echarts from '@/components/echarts/echarts.simple.min.js';
	import mpvueEcharts from '@/components/mpvue-echarts/src/echarts.vue';

	const cityList = [{
		value: 55,
		name: '收入'
	}, {
		value: 38,
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
				billData: {
					// 总账单
					in: '', //预计收入
					out: '', //成本，
					profit: '', //预计利润
					totalin: [0, 0, 0, 0, 0], //最近五个月的总收入
					totalout: [0, 0, 0, 0, 0], // 最近五个月的总成本
					// 账单列表
					billList: [{
							id: '1',
							type: 'in',
							source: '1',
							date: '03-01',
							note: '今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿',
							money: '+99999.99'
						},
						{
							id: '2',
							type: 'out',
							source: '1',
							date: '03-02',
							note: '今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿',
							money: '-99999.99'
						},
						{
							id: '3',
							type: 'in',
							source: '2',
							date: '03-03',
							note: '今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿',
							money: '+99999.99'
						},
						{
							id: '3',
							type: 'in',
							source: '2',
							date: '03-03',
							note: '今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿',
							money: '+99999.99'
						},
						{
							id: '3',
							type: 'in',
							source: '2',
							date: '03-03',
							note: '今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿',
							money: '+99999.99'
						}, {
							id: '3',
							type: 'in',
							source: '2',
							date: '03-03',
							note: '今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿',
							money: '+99999.99'
						}, {
							id: '3',
							type: 'in',
							source: '2',
							date: '03-03',
							note: '今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿',
							money: '+99999.99'
						}, {
							id: '3',
							type: 'in',
							source: '2',
							date: '03-03',
							note: '今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿',
							money: '+99999.99'
						}, {
							id: '3',
							type: 'in',
							source: '2',
							date: '03-03',
							note: '今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿',
							money: '+99999.99'
						}, {
							id: '3',
							type: 'in',
							source: '2',
							date: '03-03',
							note: '今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿',
							money: '+99999.99'
						}, {
							id: '3',
							type: 'in',
							source: '2',
							date: '03-03',
							note: '今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿,今天买了个鸭儿',
							money: '+99999.99'
						}
					]
				},
			}
		},
		onLoad() {
			pieOption.series[0].data = cityList.slice(0);
		},
		onNavigationBarButtonTap(e){
			if(e.index === 0){
				this.addbill()
			}
		},
		methods: {
			updatePie() {
				// 参考 mpvue-charts 的懒加载示例
				// https://github.com/F-loat/mpvue-echarts/blob/master/examples/lazyLoad.vue

				if (this.updateStatus) {
					return;
				}
				pieOption.series[0].data = [{
					value: 100,
					name: '收入'
				}, {
					value: 38,
					name: '成本'
				}]
				this.$refs.pieChart.init();
				this.updateStatus = true;
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
			addbill(){
				uni.navigateTo({
					url: '/pages/statistics/add_bill',
				});
			},
			editbill(par){
				const param = JSON.stringify(par)
				uni.navigateTo({
					url: '/pages/statistics/edit_bill?param=' + param,
				});
			}
		},
		components: {
			mpvueEcharts
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

				&::after {
					border: none;
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
					&:last-child{
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
		}
	}
</style>
