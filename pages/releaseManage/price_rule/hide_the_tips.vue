<template>
	<view class="contanier">
		<view class="desc_wrap">
			<textarea :disabled="houseStatus==1|| houseStatus ==0" placeholder-class="placeholder" placeholder="房客支付完成准备入住的时候才会看到隐藏说明，您可以在这里填写列如Wifi密码、备用联系电话、详细上门方式等不便在房源页面公开展示的内容。(选填)"
			 maxlength="100" v-model="desc"></textarea>
			<view class="number_control"><text style="color: #F05B72;" v-text="desc.length"></text>/100</view>
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
				house_id: '', // 房源id
				desc: '', //其他要求描述
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
				this.save();
			}
		},
		computed: {
			...mapState(['releaseObj']),
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus']),
			// 保存入住天数
			save() {
				if(this.houseStatus == 0 || this.houseStatus == 1){
					helper.layer('无法编辑上架或者审核中的房源!');
					return;
				};
				if (this.isSubmiting) return;
				const _this = this;
				const id = _this.house_id;
				const desc = _this.desc;
				let param = {
					house_id: id,
					hiddentips: desc,
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
				this.houseStatus = _releaseObj.status;
				this.desc = _releaseObj.hiddentips ? _releaseObj.hiddentips : '';
			}
		}
	}
</script>
<style lang="scss" scoped>
	.contanier {
		width: 100%;
		box-sizing: border-box;
		padding: 20upx 30upx;

		.desc_wrap {
			position: relative;
			box-sizing: border-box;
			width: 100%;
			height: 500upx;
			border: 1px solid #ccc;
			padding: 20upx;
			font-size: 28upx;

			textarea {
				width: 100%;
				height: 100%;
				font-size: 28upx;
			}

			.number_control {
				position: absolute;
				right: 20upx;
				bottom: 20upx;
				font-size: 28upx;
				color: #aaaaaa;
			}
		}
	}
</style>
