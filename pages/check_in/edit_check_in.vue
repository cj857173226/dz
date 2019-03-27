<template>
	<view class="edite_check_page">
		<view class="head_title">
			身份证信息(必填)
		</view>
		<view class="check_form">
			<view class="form_item">
				<view class="label">姓名</view>
				<view class="ipt">
					<input type="text" placeholder-style="font-size:14px;color:#ccc;" placeholder="确保信息真实" v-model.trim="checkForm.name">
				</view>
			</view>
			<view class="form_item">
				<view class="label">身份证</view>
				<view class="ipt">
					<input type="text" placeholder-style="font-size:14px;color:#ccc;" placeholder="确保信息真实" v-model.trim="checkForm.idcardno">
				</view>
			</view>
		</view>
		<view class="head_title">
			其他信息选填(必填)
		</view>
		<view class="check_form">
			<view class="form_item">
				<view class="label">手机号</view>
				<view class="ipt">
					<input type="text" placeholder-style="font-size:14px;color:#ccc;" placeholder="确保信息真实" v-model.trim="checkForm.mobile">
				</view>
			</view>
			<view class="form_item">
				<view class="label">护照号</view>
				<view class="ipt">
					<input type="text" placeholder-style="font-size:14px;color:#ccc;" placeholder="确保信息真实" v-model.trim="checkForm.passportno">
				</view>
			</view>
		</view>

		<view class="handle_btn_wrap">
			<button class="my-del-block" v-if="handleType==='edit'">删除</button>
			<button class="my-btn-block" v-text="handleType==='edit'?'保存':'添加'"></button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				handleType: '', // 页面属于编辑还是添加  add/edit
				checkForm: {
					addtime: "",
					birth: "",
					bookorderid: "",
					buyinsuranceyype: "",
					id: "",
					idcardauthstate: "",
					idcardno: "",
					mobile: "",
					mobilecode: "",
					name: "",
					nation: "",
					oversea: "",
					passportno: "",
					sex: "",
					userid: "",
				}
			};
		},
		computed: {
			...mapState(['islogin', 'token', 'isEditCheckIn'])
		},
		onLoad(option) {
			this.handleType = option.type;
			if (option.type === 'add') {
				uni.setNavigationBarTitle({
					title: '添加入住人'
				});
			} else if (option.type === 'edit') {
				uni.setNavigationBarTitle({
					title: '编辑入住人'
				});
				this.checkForm = JSON.parse(option.param);
			}
		},
		onShow() {},
		methods: {
			...mapMutations(['checkInEditStatus']),
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

	.edite_check_page {
		box-sizing: border-box;
		height: 100%;

		.head_title {
			box-sizing: border-box;
			background: #ececec;
			padding: 0 30upx;
			height: 80upx;
			line-height: 80upx;
			font-size: 14px;
		}
		.check_form {
			box-sizing: border-box;
			background: #FFFFFF;
			padding: 0 30upx;
			.form_item {
				box-sizing: border-box;
				display: flex;
				flex-direction: row;
				height: 100upx;
				border-bottom: 1px solid #eaeaea;

				.label {
					box-sizing: border-box;
					height: 100upx;
					line-height: 100upx;
					font-size: 16px;
				}

				.ipt {
					box-sizing: border-box;
					flex-grow: 1;
					text-align: right;
					font-size: 14px;
					display: flex;
					flex-direction: row-reverse;
					align-items: center;

					&input {
						width: 100%;
					}
				}

				&:last-child {
					border-bottom: none;
				}
			}
		}

		.handle_btn_wrap {
			box-sizing: border-box;
			width: 100%;
			margin-top: 120upx;
			padding: 0 30upx;
			.my-del-block{
				margin-bottom: 20upx;
			}
		}
	}
</style>
