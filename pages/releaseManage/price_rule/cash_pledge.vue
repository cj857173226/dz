<template>
	<view class="contanier">
		<view class="title">为什么更多的</view>
		<view class="title">房东选择不收取押金?</view>
		<view class="the-same-security">同等保障</view>
		<view class="verbal-content">不收取押金,不代表失去保障;我们承诺无押金房源与押金房源享受同等赔付保障;我们会为房客垫付垫付押金以及支付您的损失。</view>
		<view class="the-same-security">流量翻倍</view>
		<view class="verbal-content border">无押金房源享受平台排名支持,增加曝光;同事提升房客好感度,可以获得更多订单</view>
		<view class="bottom-box">
			<view class="deposit">
				<label style="font-size:32upx;">收取押金</label>
				<label class="switch-box">
					<switch :disabled="houseStatus==1|| houseStatus == 0" @change="switch1Change" :checked="show" color="#EA516B" />
				</label>
			</view>
			<input v-if="show" type="number" placeholder="押金金额最高设置金额9999元" placeholder-class="placeholder" style="font-size: 28upx;"
			 maxlength="5" v-model="money" />
		</view>
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
	export default {

		data() {
			return {
				house_id: '', //房源id
				show: false, // 是否收取押金
				money: '', //押金金额
				isSubmiting: false,
				houseStatus: '', // 房屋状态
			}
		},
		onLoad() {
			this.getCurData();
		},
		onShow() {

		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.save()
			}
		},
		computed: {
			...mapState(['releaseObj']),
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus']),
			switch1Change: function(e) {
				// console.log('switch1 发生 change 事件，携带值为', e.target.value);
				if (e.target.value === true) {
					this.show = true
				} else {
					this.money = '';
					this.show = false
				}
			},
			// 保存押金
			save() {
				if(this.houseStatus == 0 || this.houseStatus == 1){
					helper.layer('无法编辑上架或者审核中的房源!');
					return;
				};
				if (this.isSubmiting) return;
				const _this = this;
				const money = _this.money;
				const id = _this.house_id;
				let param = {
					house_id: id,
				}
				if (_this.show) {
					if (!helper.intNumReg(money) || money < 0 || money > 9999) {
						helper.layer('请输入0~9999的正整数')
						return;
					} else {
						let _money = money <= 0 ? '' : money;
						param = Object.assign(param, {
							cashpledge: _money
						})
					}
				} else {
					param = Object.assign(param, {
						cashpledge: ''
					})
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
				const _cashpledge = this.releaseObj.cashpledge;
				this.house_id = this.releaseObj.id;
				this.houseStatus = this.releaseObj.status;
				this.money = _cashpledge <= '0' ? '' : _cashpledge;
				if (_cashpledge > 0) {
					this.show = true;
				} else {
					this.show = false;
				}
			}
		}
	};
</script>
<style lang="scss" scoped>
	.contanier {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;

		.title {
			font-size: 20px;
			font-weight: bold;

			&:nth-of-type(2) {
				margin-top: 10upx;
				margin-bottom: 40upx;
			}
		}

		.the-same-security {
			font-size: 32upx;
			font-weight: 700;
			margin-bottom: 16upx;
		}

		.verbal-content {
			color: #C6C6C6;
			margin-bottom: 10upx;
			font-size: 28upx;
		}

		.border {
			border-bottom: 1px solid rgb(228, 227, 227);
			padding-bottom: 30upx;
		}

		.bottom-box {
			margin-top: 20upx;

			.deposit {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.switch-box {
					.uni-switch-input {
						width: 100upx !important;
						height: 30upx !important;
					}
				}
			}
		}
	}
</style>
