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
						<span v-if="addressForm.address">{{addressForm.address}}</span>
						<span v-else style="font-size: 14px;color: #CCCCCC;">省-市-区</span>
					</view>
				</view>
				<view class="form-item">
					<view class="label">详细地址</view>
					<view class="input">
						<input type="text" placeholder-style="font-size:14px;color:#cccccc;" placeholder="详细地址" v-model.tirm="addressForm.address">
					</view>
				</view>
				<view class="form-item">
					<view class="label">设为默认地址</view>
					<view class="input">
						<switch class="o-switch" color="#F05B72" :checked="addressForm.district==='1'" @change="defaultSwitch" />
					</view>
				</view>
			</view>
			<view class="handle_btn_wrap">
				<button class="del-btn">删除</button>
				<button class="save-btn">保存</button>
			</view>
		</view>
		<mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>

</template>

<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				addressForm: {
					address: "",
					addressid: "",
					city: "",
					district: "",
					isdefault: 0,
					phone: "",
					province: "",
					truename: "",
					local: '',
					cityVlue: [0, 0, 1]
				},
				cityPickerValueDefault: [0, 0, 1],
			}
		},
		components: {
			mpvueCityPicker
		},
		computed: {
			...mapState(['islogin', 'token', 'isEditAddress'])
		},
		watch:{
		
		},
		onLoad(option) {
			const par = JSON.parse(option.param);
		},
		onShow() {},
		methods: {
			...mapMutations(['addressEditStatus']),
			// 城市选择
			showCityPicker() {
				this.$refs.mpvueCityPicker.show()
			},
			// 取消城市选择
			onCancel(e) {
				console.log(e)
			},
			onConfirm(e) {
				this.pickerText = JSON.stringify(e)
			},
			// 设置默认地址开关
			defaultSwitch(e) {
				console.log(e)
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
				button{
					height: 90upx;
					line-height: 90upx;
					width: 40%;
					font-size: 14px;
				}
				& .del-btn{
					background: #ffffff;
					color: #333333;
					&:active{
						background: #f5f5f5;
						color: #aaaaaa;
					}
				}
				& .save-btn{
					background: $theme-color;
					color: #FFFFFF;
					&:active{
						opacity: 0.8;
					}
				}
			}
			
		}

	}
</style>
