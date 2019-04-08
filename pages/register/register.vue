<template>
	<view class="page_reg">
		<view class="reg_form">
			<view class="input">
				<view class="img">
					<text class="iconfont icon-dianhua3"></text>
				</view>
				<input type="text" v-model.trim="username" placeholder-style="color:#ccc;font-size:14px;" placeholder="请输入手机号"
				 :focus="autoFocus">
			</view>
			<view class="line" />
			<view class="input">
				<view class="img">
					<text class="iconfont icon-yanzhengma"></text>
				</view>
				<input v-model.trim="regCode" placeholder-style="color:#ccc;font-size:14px;" placeholder="动态验证码">
				<view class="get_code">
					<view class="get_code_btn" :class="{'dis_btn':codeDisable===true}" @tap.stop="getMsgCode">{{codeText}}</view>
				</view>
			</view>
			<view class="line" />
			<view class="input">
				<view class="img">
					<text class="iconfont icon-mima"></text>
				</view>
				<input :password="pwdType==='password'" :value="userpwd" @input="inputPwd" placeholder-style="color:#ccc;font-size:14px;"
				 placeholder="请设置密码">
				<view class="img icon_pwd_switch" @tap="switchPwd">
					<text class="iconfont icon-yanjing" v-if="pwdType==='password'"></text>
					<text class="iconfont icon-yanjing1" v-if="pwdType==='text'"></text>
				</view>
			</view>
		</view>
		<button class="submit" :class="{'dis_btn':registerLoad===true}" @tap="submitRegsiter">注册</button>
	</view>
</template>

<script>
	import helper from 'common/helper.js'
	export default {
		data() {
			return {
				username: '', //用户名
				userpwd: '', //密码
				regCode: '', //验证码
				pwdType: 'password',
				codeText: '获取验证码',
				codeDisable: false, // 验证按钮是否禁用
				codeTimer: null,
				codeLoad: false, // 是否正在发送验证码
				autoFocus: true,
				regPhoneLoad: false, // 是否正在验证手机
				registerLoad: false, // 是否正在注册中
			}
		},
		methods: {
			inputUsername(e) {
				this.username = e.target.value
			},
			inputPwd(e) {
				this.userpwd = e.target.value
			},
			switchPwd() {
				this.pwdType = this.pwdType === 'text' ? 'password' : 'text'
			},
			login() {
				console.log('username:' + this.username + ',pwd:' + this.userpwd)
			},
			getMsgCode() {
				const user = this.username;
				const that = this;
				let _time = 60;
				if (that.codeDisable || that.codeLoad || that.regPhoneLoad) return;
				if (user === '' || !helper.phoneReg(user)) {
					let _title = '';
					if(user === ''){
						_title = "手机号不能为空"
					} else if(!helper.phoneReg(user)){
						_title = "手机号格式有误"
					}
					uni.showToast({
						title: _title,
						duration: 1500,
						icon: 'none'
					});
				} else {
					that.regPhoneLoad = true;
					uni.request({
						url: "http://dz.cdabon.com/wap/api/global.php?action=CheckParams4H5&type=phone",
						method: 'GET',
						data: {
							key: user,
							params: user
						},
						success: function(res) {
							that.codeLoad = true;
							if (res.data.status === 'success') {
								uni.request({
									url: "http://dz.cdabon.com/e/member/doaction.php",
									method: 'GET',
									data: {
										enews: 'Rzsj',
										phone: user
									},
									success: function(r) {
										if (r.data.status === 'success') {
											that.codeDisable = true;
											that.codeTimer = setInterval(function() {
												if (_time <= 0) {
													clearInterval(that.codeTimer);
													that.codeTimer = null;
													that.codeText = '重新获取'
													that.codeDisable = false;
												} else {
													that.codeText = `${_time}s再获取`;
													_time -= 1;
												}
											}, 1000)
											uni.showToast({
												title: '已发送到手机',
												duration: 1500,
												icon: 'none'
											});
										} else {
											uni.showToast({
												title: r.data.errorMsg,
												duration: 1500,
												icon: 'none'
											});
										}


									},
									fail: function() {
										uni.showToast({
											title: '发送失败,请稍后重试',
											duration: 1000,
											icon: 'none'
										});
									},
									complete: function() {
										that.codeLoad = false;
									}
								})
							} else {
								uni.showToast({
									title: res.data.errorMsg,
									duration: 1500,
									icon: 'none'
								});
							}
						},
						fail: function() {
							uni.showToast({
								title: '系统异常,请稍后再试',
								duration: 1000,
								icon: 'none'
							});
						},
						complete: function() {
							that.regPhoneLoad = false;
						}
					})
				}
			},
			// 提交注册
			submitRegsiter() {
				const that = this;
				const user = this.username;
				const psw = this.userpwd;
				const regCode = this.regCode;
				if(that.registerLoad) return;
				if (user === '') {
					uni.showToast({
						title: '请输入手机号',
						duration: 1000,
						icon: 'none'
					});
				} else if (regCode === '') {
					uni.showToast({
						title: '请填写验证码',
						duration: 1500,
						icon: 'none'
					});
				} else if (psw === '') {
					uni.showToast({
						title: '请设置密码',
						duration: 1500,
						icon: 'none'
					});
				} else {
					that.registerLoad = true;
					uni.request({
						url: 'http://dz.cdabon.com/e/member/ajax/index.php?action=checkregister', //仅为示例，并非真实接口地址。
						method: "POST",
						data: {
							password: psw,
							phone: user,
							code: regCode
						},
						header: {
							"Content-Type": "application/x-www-form-urlencoded",
						},
						success: (res) => {
							if(res.data.status==='success'){
								uni.setStorageSync('dz_userInfo', res.data.content);
								uni.setStorageSync('dz_token', res.data.content.token);
								uni.reLaunch({
									url: "/pages/index/index"
								})
							}else{
								uni.showToast({
									title: res.data.msg,
									duration: 1500,
									icon: 'none'
								});
							}
						},
						fail: () => {

						},
						complete: () => {
							that.registerLoad = false;
						}
					});
				}
			},
		}
	}
</script>
<style>
	page {
		background-color: #f5f6f8;
	}
</style>

<style lang="scss">
	$logo-padding: 60px;
	$form-border-color: rgba(214, 214, 214, 1);
	$text-color: #B6B6B6;

	.page_reg {
		box-sizing: border-box;
		padding: 20px;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.reg_form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid $form-border-color;
		border-radius: 10px;

		.line {
			width: 100%;
			height: 1px;
			background-color: $form-border-color;
		}

		.input {
			box-sizing: border-box;
			width: 100%;
			max-height: 40px;
			display: flex;
			padding: 3px;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.img {
				min-width: 40px;
				min-height: 40px;
				display: flex;
				align-items: center;
				justify-content: center;

				.iconfont {
					font-size: 18px;
					color: #F05B72;
				}

			}

			.icon_del .iconfont,
			.icon_pwd_switch .iconfont {
				color: #A0A0A0;
			}

			.get_code {
				min-width: 90px;
				min-height: 40px;
				display: flex;
				align-items: center;

				.get_code_btn {
					height: 30px;
					width: 100%;
					line-height: 30px;
					text-align: center;
					color: #FFFFFF;
					background: #F05B72;
					border-radius: 8px;
					font-size: 14px;

					&:active {
						opacity: 0.8;
					}
				}
			}

			input {
				outline: none;
				height: 30px;
				width: 100%;
				font-size: 14px;

				&:focus {
					outline: none;
				}
			}
		}
	}

	.submit {
		box-sizing: border-box;
		width: 100%;
		height: 40px;
		line-height: 40px;
		margin: 30px 20px 10px 20px;
		color: white;
		background-color: #F05B72;
		-webkit-tap-highlight-color: #F05B72;

		&:active {
			opacity: 0.8
		}
	}
</style>
