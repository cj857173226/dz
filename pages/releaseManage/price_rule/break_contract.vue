<template>
	<view class="contanier">
		<view class="price-amount" @tap="fullRefund('sum')">
			<label class>全额退款天数</label>
			<view class="amout-box">
				<text>{{fullRefunds}}天</text>
				<text class="iconfont">&#xe65e;</text>
			</view>
		</view>
		<view class="price-amount" @tap="fullRefund('balance')">
			<label class>违约取消扣款天数</label>
			<view class="amout-box">
				<text>{{balanceRefund}}天</text>
				<text class="iconfont">&#xe65e;</text>
			</view>
		</view>
		<view class="step_wrap">
			<view class="step_item">
				<view class="title"><text class="iconfont icon-solid-time"></text></view>
				<view class="content">如果取消订单,定金全部退还</view>
			</view>
			<view class="step_item">
				<view class="title"><text class="iconfont icon-solid-time"></text>入住前{{fullRefunds}}天14:00</view>
				<view class="content">如取消订单,扣除前{{fullRefunds}}天的定金</view>
			</view>
			<view class="step_item">
				<view class="title"><text class="iconfont icon-solid-time"></text>入住当天14:00</view>
				<view class="content">如果提前退房,扣除未消费的前{{balanceRefund}}天的定金,定金不足以实际定金为准。(包括未入住和提前退房两类情况)</view>
			</view>
			<view class="step_item">
				<view class="title"><text class="iconfont icon-solid-time"></text>退房当天12:00</view>
			</view>
		</view>
		<mpvue-picker ref="similarPicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="similarConfirm" @onCancel="similarCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import {
		request
	} from '../../../common/request.js'
	import helper from '../../../common/helper.js'
	import mpvuePicker from "../../../components/mpvue-picker/mpvuePicker.vue";
	export default {
		components: {
			mpvuePicker
		},
		data() {
			return {
				house_id: '',
				fullRefunds: 1, //全额退款天数
				balanceRefund: 1, // 违约取消扣款天数
				//房源基本类型信息
				deepLength: 1,
				mode: "selector",
				pickerValueDefault: [0],
				pickerValueArray: [],
				similarType: "",
				isSubmiting: false,
			}
		},
		onLoad() {
			this.getCurData();
		},
		onShow() {
		
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.save();
			}
		},
		onBackPress() {
			if (this.$refs.similarPicker.showPicker) {
				this.$refs.similarPicker.pickerCancel();
				return true;
			}
		},
		computed:{
			...mapState(['releaseObj']),
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus']),
			fullRefund: function(type) {
				// console.log(type);
				this.similarType = type; // 接收参数复制给similarType
				let _data = [];
				let _defaultArr =[];
				for (let i = 1; i <= 7; i++) {
					_data.push({
						label: i + '天',
						value: i
					})
				}
				this.pickerValueArray = _data;
				if (this.similarType == "sum") {
					_defaultArr = this.fullRefunds <= 0? [0] : [Number(this.fullRefunds) - 1];
				} else if (this.similarType == "balance") {
					_defaultArr = this.balanceRefund <= 0? [0] : [Number(this.balanceRefund) - 1];
				}
				this.pickerValueDefault = _defaultArr;
				this.$refs.similarPicker.show(); //开启方法
			},
			similarConfirm: function(e) {
				const _val = e.value[0]
				//picker 组件点击确定时回调，返回选中的 label, value 和数组索引 index 的值
				if (this.similarType == "sum") {
					this.fullRefunds = _val;
				} else if (this.similarType == "balance") {
					this.balanceRefund = _val;
				}
			},
			similarCancel: function() {
				//picker 组件点击取消时回调，返回选中的 label, value 和数组索引 index 的值
			},
			// 保存入住天数
			save() {
				if (this.isSubmiting) return;
				const _this = this;
				const id = _this.house_id;
				const fullRefunds = _this.fullRefunds;
				const balanceRefund = _this.balanceRefund;
				let param = {
					house_id: id,
					crvn: fullRefunds,
					crva:balanceRefund,
				}
				_this.isSubmiting = true;
				request({
					url: '/wap/api/fangdong.php?action=improveHouse',
					method: 'POST',
					data: param,
					success: (res) => {
						if (res.data.status === 'success') {
							let _data = res.data.content;
							_this.editReleaseInfo(_data);
							_this.editReleaseInfoStatus(true);
							uni.navigateBack({
								delta: 1,
							})
						} else {
							helper.layer('保存失败')
						}
					},
					complete: () => {
						_this.isSubmiting = false;
					}
				})
			},
			//获取当前数据
			getCurData() {
				const _releaseObj = this.releaseObj;
				this.house_id = _releaseObj.id;
				this.fullRefunds = _releaseObj.crvn;
				this.balanceRefund = _releaseObj.crva;
			}
		},
	};
</script>
<style lang="scss" scoped>
	$theme-color: #F05B72;

	.contanier {
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;

		label {
			font-size: 32upx;
		}

		.price-amount {
			width: 100%;
			padding: 20upx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #f4f4f4;

			.amout-box {
				display: flex;
				align-items: center;

				.amount {
					text-align: right;
					width: 300upx;
				}

				.iconfont {
					padding-top: 4upx;
					display: block;
					font-size: 32upx;
					color: #cccccc;
				}
			}
		}

		.step_wrap {
			box-sizing: border-box;
			width: 100%;
			margin-top: 40upx;

			.step_item {
				box-sizing: border-box;
				width: 100%;
				min-height: 200upx;
				padding: 0 30upx 80upx;
				;
				border-left: 1px solid $theme-color;

				.title {
					position: relative;
					font-size: 28upx;
					color: #aaaaaa;
					height: 40upx;
					line-height: 40upx;
					margin-bottom: 30upx;


					.iconfont {
						position: absolute;
						font-size: 40upx;
						color: $theme-color;
						left: -50upx;
						top: -4upx;


					}

				}

				.content {
					padding: 20upx 16upx;
					background: #eaeaea;
					border-radius: 8upx;
				}

				&:first-child {
					border-left: 1px solid #5bdb9c;

					.title {
						.iconfont {
							color: #5bdb9c;
						}
					}
				}

				&:last-child {
					min-height: 0;
					padding-bottom: 0;
					border: none;

					.title {
						.iconfont {
							color: #cccccc;
						}
					}
				}


			}
		}
	}
</style>
