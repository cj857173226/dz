<template>
	<view class="edit_address_page">
		<view class="edit_address_wrap">
			<view class="edit_address_form">
				<view class="form-item">
					<view class="label">姓名</view>
					<view class="input">
						<input type="text" placeholder-style="font-size:14px;color:#cccccc;" placeholder="收件人姓名" v-model.tirm="addressForm.truename">
					</view>
				</view>
				<view class="form-item">
					<view class="label">手机号</view>
					<view class="input">
						<input type="text" placeholder-style="font-size:14px;color:#cccccc;" placeholder="收件人手机号" v-model.tirm="addressForm.phone">
					</view>
				</view>
				<view class="form-item">
					<view class="label">所在地区</view>
					<view class="input" @click="showCityPicker">
						<span v-if="addressForm.local">{{addressForm.local}}</span>
						<span v-else style="font-size: 14px;color: #CCCCCC;">省-市-区</span>
					</view>
				</view>
				<view class="form-item">
					<view class="label">详细地址</view>
					<view class="input">
						<input type="text" placeholder-style="font-size:14px;color:#cccccc;" placeholder="详细地址" v-model.tirm="addressForm.address">
					</view>
				</view>
				<view class="form-item" v-if="isSetDefault">
					<view class="label">设为默认地址</view>
					<view class="input">
						<switch class="o-switch" color="#F05B72" :checked="addressForm.isdefault==='1'" @change="defaultSwitch" />
					</view>
				</view>
			</view>
			<view class="handle_btn_wrap">
				<button class="del-btn" @tap="delAddress">删除</button>
				<button class="save-btn" :class="{'dis_btn':isEditing}" @tap="editAddress">保存</button>
			</view>
		</view>
		<mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="addressForm.cityVlue" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>

</template>

<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import helper from '../../common/helper.js'
	import {
		request
	} from '../../common/request.js'
	export default {
		data() {
			return {
				isSetDefault: true,
				addressForm: {
					address: "",
					addressid: "",
					city: "",
					district: "",
					isdefault: '0',
					phone: "",
					province: "",
					truename: "",
					local: '',
					cityVlue: [0, 0, 1]
				},
				isEditing: false,//是否正在请求编辑
				isDeling: false, // 是否正在请求删除
			}
		},
		components: {
			mpvueCityPicker
		},
		computed: {
			...mapState(['isEditAddress'])
		},
		watch: {

		},
		onLoad(option) {
			const par = JSON.parse(option.param);
			this.isSetDefault = JSON.parse(option.param).isdefault === '1' ? false : true;
			let ctDefault_arr = par.province_code.split(',');
			ctDefault_arr.map((item, index, self) => {
				self[index] = Number(item);
			})
			par['cityVlue'] = ctDefault_arr;
			par['local'] = par.province + '-' + par.city + '-' + par.district;
			this.addressForm = par
		},
		onShow() {},
		onBackPress() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
				return true;
			}
		},
		methods: {
			...mapMutations(['addressEditStatus']),
			// 城市选择
			showCityPicker() {
				this.addressForm.cityVlue = this.addressForm.cityVlue.splice(0);
				this.$refs.mpvueCityPicker.show()
			},
			// 取消城市选择
			onCancel(e) {
				console.log(e)
			},
			onConfirm(e) {
				this.addressForm.cityVlue = e.value;
				this.addressForm.local = e.label;
				let localArr = e.label.split('-');
				this.addressForm.province = localArr[0];
				this.addressForm.city = localArr[1];
				this.addressForm.district = localArr[2];
				this.pickerText = JSON.stringify(e)
			},
			// 设置默认地址开关
			defaultSwitch(e) {
				this.addressForm.isdefault = e.detail.value ? '1' : '0';
			},
			// 添加收货地址
			editAddress() {
				if (this.isEditing) return;
				const _this = this;
				const id = this.addressForm.addressid;
				const name = _this.addressForm.truename;
				const phone = _this.addressForm.phone;
				const province = _this.addressForm.province;
				const city = _this.addressForm.city;
				const district = _this.addressForm.district;
				const address = _this.addressForm.address;
				const local = _this.addressForm.local;
				const isdefault = _this.addressForm.isdefault;
				const local_default = _this.addressForm.cityVlue.join(',');
				if (name === '') {
					helper.layer('请填写姓名')
				} else if (!helper.phoneReg(phone)) {
					helper.layer('请填写正确的手机号')
				} else if (local === '') {
					helper.layer('请选择地区')
				} else if (address === '') {
					helper.layer('请填写详细地址')
				} else {
					_this.isEditing = true;
					const param = {
						truename: name,
						province: province,
						city: city,
						district: district,
						address: address,
						phone: phone,
						isdefault: isdefault,
						province_code: local_default,
					}
					request({
						url: '/wap/api/my.php?action=UpdateAddress&addressid='+id,
						methods: 'POST',
						data: param,
						success: function(res) {
							if (res.data.status === 'success') {
								_this.addressEditStatus(true)
								uni.navigateBack({
									delta: 1
								});
							} else {
								helper.layer('修改失败')
							}
						},
						complete: function() {
							_this.isEditing = false;
						}
					})
				}
			},
			// 删除地址
			delAddress(){
				const _this = this;
				const id = _this.addressForm.addressid;
				uni.showModal({
					title: '',
					content: '是否删除该地址',
					confirmText: '删除',
					confirmColor: '#F05B72',
					success: function(res) {
						if (res.confirm) {
							_this.isDeling = true;
							console.log('用户点击确定');
							request({
								url: '/wap/api/my.php?action=DeleteAddress&addressid='+id,
								method: 'GET',
								success: function(res) {
									if (res.data.status === "success") {
										helper.layer('删除成功')
										_this.addressEditStatus(true);
										uni.navigateBack({
											delta: 1
										});
									} else {
										helper.layer('删除失败')
									}
								},
								complete: function() {
									_this.isDeling = false;
								}
							})
						}
					}
				});
			}
		}
	}
</script>
<style>
	page {
		height: 100%;
		background: #f5f6f8;
	}
</style>

<style lang="scss" scoped>
	$theme-color: #F05B72;
	$back-color:#f5f6f8;

	.edit_address_page {
		box-sizing: border-box;
		height: 100%;
		width: 100%;

		.edit_address_wrap {
			box-sizing: border-box;
			height: 100%;
			width: 100%;
			padding: 20upx 30upx;

			.edit_address_form {
				box-sizing: border-box;
				padding: 0upx 20upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				background: #ffffff;
				width: 100%;
				border-radius: 6px;

				.form-item {
					box-sizing: border-box;
					padding: 10upx 0;
					height: 100upx;
					border-bottom: 1px solid #eaeaea;
					display: flex;

					&:last-child {
						border-bottom: none;
					}

					.label {
						display: flex;
						align-items: center;
						width: 110px;
						overflow: hidden;
						text-overflow: ellipsis;
						text-align: right;
						font-size: 16px;
					}

					.input {
						display: flex;
						flex-grow: 1;
						align-items: center;
						flex-direction: row-reverse;
						font-size: 14px;

						& input {
							text-align: right;
							font-size: 14px;
						}
					}
				}
			}

			.handle_btn_wrap {
				margin-top: 40upx;
				box-sizing: border-box;
				width: 100%;
				display: flex;
				justify-content: space-between;
				padding: 20upx 20upx;

				button {
					height: 90upx;
					line-height: 90upx;
					width: 40%;
					font-size: 14px;
				}

				& .del-btn {
					background: #ffffff;
					color: #333333;

					&:active {
						background: #f5f5f5;
						color: #aaaaaa;
					}
				}

				& .save-btn {
					background: $theme-color;
					color: #FFFFFF;

					&:active {
						opacity: 0.8;
					}
				}
			}

		}

	}
</style>
