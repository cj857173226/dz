<template>
	<view class="edite_check_page">
		<view class="head_title">
			身份证信息(必填)
		</view>
		<view class="check_form">
			<view class="form_item">
				<view class="label">姓名</view>
				<view class="ipt">
					<input type="text" placeholder-style="font-size:14px;color:#ccc;" placeholder="确保信息真实" maxlength="6" v-model.trim="checkForm.name">
				</view>
			</view>
			<view class="form_item">
				<view class="label">身份证</view>
				<view class="ipt">
					<input type="idcard" placeholder-style="font-size:14px;color:#ccc;" placeholder="确保信息真实" v-model.trim="checkForm.idcardno">
				</view>
			</view>
		</view>
		<view class="head_title">
			其他信息选填(选填)
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
			<button class="my-del-block" v-if="handleType==='edit'" @tap="delCheck">删除</button>
			<button class="my-btn-block" :class="{'dis_btn':isLoding}" v-text="handleType==='edit'?'保存':'添加'" @tap="submitCheck()"></button>
		</view>
	</view>
</template>

<script>
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
				},
				isLoding: false, //是否正在请求
				isDeling: false, // 是否正在删除
			};
		},
		computed: {
			...mapState(['isEditCheckIn'])
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
			// 提交添加或者修改常用入住人
			submitCheck() {
				if (this.isLoding) return;
				const _this = this;
				const type = _this.handleType;
				const id = _this.checkForm.id;
				const name = _this.checkForm.name;
				const idcard = _this.checkForm.idcardno;
				const mobile = _this.checkForm.mobile;
				const passportno = _this.checkForm.passportno;
				if (name === '' || !helper.nameRge(name)) {
					let msg = '';
					if (name === '') {
						msg = '请填写入住人姓名'
					} else {
						msg = '姓名只能为中文'
					}
					helper.layer(msg)
				} else if (idcard === '' || !helper.idCardReg(idcard)) {
					let msg = '';
					if (idcard === '') {
						msg = '请填写身份证'
					} else {
						msg = '身份证格式有误'
					}
					helper.layer(msg)

				} else if (mobile !== '' && !helper.phoneReg(mobile)) {
					helper.layer('手机号格式有误')
				} else {
					if (type === 'add') {
						//  这里是添加入住人请求
						_this.isLoding = true;
						const param = {
							name: name,
							mobile: mobile,
							idcardno: idcard,
							passportno: passportno
						}
						request({
							url: '/wap/api/my.php?action=SaveContact',
							method: 'GET',
							data: param,
							success: function(res) {
								if (res.data.status === "success") {
									helper.layer('添加成功')
									_this.checkInEditStatus(true);
									uni.navigateBack({
										delta: 1
									});
								} else {
									helper.layer(res.data.errorMsg)
								}
							},
							fail: function(err) {
								helper.layer('系统异常,请稍后再试')
							},
							complete: function() {
								_this.isLoding = false;
							}
						})
					} else if(type === 'edit'){
						// 这里是编辑联系人请求
						_this.isLoding = true;
						const param = {
							id:id,
							name: name,
							mobile: mobile,
							idcardno: idcard,
							passportno: passportno
						}
						request({
							url: '/wap/api/my.php?action=UpdateContact',
							method: 'GET',
							data: param,
							success: function(res) {
								if (res.data.status === "success") {
									helper.layer('修改成功')
									_this.checkInEditStatus(true);
									uni.navigateBack({
										delta: 1
									});
								} else {
									helper.layer(res.data.errorMsg)
								}
							},
							fail: function(err) {
								helper.layer('系统异常,请稍后再试')
							},
							complete: function() {
								_this.isLoding = false;
							}
						})
					}
				}
			},
			// 删除常住人
			delCheck() {
				if (this.isDeling) return;
				const _this = this;
				const id = _this.checkForm.id;
				uni.showModal({
					title: '',
					content: '是否删除该入住人',
					confirmText: '删除',
					confirmColor: '#F05B72',
					success: function(res) {
						if (res.confirm) {
							_this.isDeling = true;
							console.log('用户点击确定');
							request({
								url: '/wap/api/my.php?action=DeleteContact',
								method: 'GET',
								data: {
									id: id
								},
								success: function(res) {
									if (res.data.status === "success") {
										helper.layer('删除成功')
										_this.checkInEditStatus(true);
										uni.navigateBack({
											delta: 1
										});
									} else {
										helper.layer(res.data.errorMsg)
									}
								},
								fail: function(err) {
									helper.layer('系统异常,请稍后再试')
								},
								complete: function() {
									_this.isDeling = false;
								}
							})
						}
					}
				});
			}
		},

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

			.my-del-block {
				margin-bottom: 20upx;
			}
		}
	}
</style>
