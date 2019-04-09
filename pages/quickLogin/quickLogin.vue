<template>
	<view class="page_quick_login">
		<!-- 登录form -->
		<view class="quick_login_form">
			<view class="input">
				<view class="img">
					<text class="iconfont icon-ziyuan"></text>
				</view>
				<input type="text" v-model.trim="username" placeholder-style="color:#ccc;font-size:14px;" placeholder="请输入手机号"
				 :focus="autoFocus">
				<view class="img icon_del" @tap="delUser" v-if="username">
					<text class="iconfont icon-quxiao"></text>
				</view>
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
		</view>
		<!-- 登录提交 -->
		<button class="submit" :class="{'dis_btn':loginLoad===true}" @tap="quickLogin" v-text="loginLoad?'登录中':'登录'"></button>
		<view class="opts">
			<text @tap="goReg" class="text">立即注册</text>
			<text @tap="usualLogin" class="text" style="color: #F05B72;">账号登录</text>
		</view>
		<view class="quick_login_line">
			<view class="line" />
			<text class="text">快速登录</text>
			<view class="line" />
		</view>
		<view class="quick_login_list">
			<image @tap="thirdLogin('qq')" class="item" :src="imgInfo.qq" />
			<image @tap="thirdLogin('wechat')" class="item" :src="imgInfo.wechat" />
			<image @tap="thirdLogin('weibo')" class="item" :src="imgInfo.weibo" />
		</view>
	</view>
</template>
<script>
	import {
		request
	} from '../../common/request.js'
	import helper from '../../common/helper.js'
	export default {
		data() {
			const isUni = typeof(uni) !== 'undefined'
			return {
				username: '', //账号
				regCode: '', // 动态验证码
				imgInfo: {
					qq: isUni ? '/static/qq.png' : require('./images/qq.png'),
					wechat: isUni ? '/static/wechat.png' : require('./images/wechat.png'),
					weibo: isUni ? '/static/weibo.png' : require('./images/weibo.png')
				},
				autoFocus: true,
				code_img: '', //图形验证码链接
				codeDisable: false, //是否可以获取验证码
				codeText: '获取验证码',
				codeTimer: null, //验证码定时器
				codeLoad: false, // 是否正在发送验证码
				loginLoad: false, // 是否在登录
			}
		},
		onLoad() {
		},
		methods: {
			inputUsername(e) {
				this.username = e.target.value
			},
			inputPwd(e) {
				this.userpwd = e.target.value
			},
			delUser() {
				this.username = ''
			},
			usualLogin() {
				uni.redirectTo({
					url: '/pages/login/login'
				})
			},
			goReg() {
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},
			// 获取动态验证码
			getMsgCode() {
				if (this.codeLoad) return;
				const _this = this;
				const user = _this.username;
				let _time = 60;
				if (user === '' || !helper.phoneReg(user)) {
					let _title = '';
					if (user === '') {
						_title = "手机号不能为空"
					} else if (!helper.phoneReg(user)) {
						_title = "手机号格式有误"
					}
					uni.showToast({
						title: _title,
						duration: 1500,
						icon: 'none'
					});
				} else {
					uni.request({
						url: "http://dz.cdabon.com/wap/api/global.php",
						method: 'GET',
						data: {
							action: 'QuickSendSmsCode',
							phone: user
						},
						success: function(r) {
							if (r.data.status === 'success') {
								_this.codeDisable = true;
								_this.codeTimer = setInterval(function() {
									if (_time <= 0) {
										clearInterval(_this.codeTimer);
										_this.codeTimer = null;
										_this.codeText = '重新获取'
										_this.codeDisable = false;
									} else {
										_this.codeText = `${_time}s再获取`;
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
									title: r.data.msg,
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
							_this.codeLoad = false;
						}
					})
				}
			},
			quickLogin() {
				
				const _this = this;
				const user = _this.username;
				const regCode = _this.regCode;
				if (user === '' || !helper.phoneReg(user)) {
					let _title = '';
					if (user === '') {
						_title = "手机号不能为空"
					} else if (!helper.phoneReg(user)) {
						_title = "手机号格式有误"
					}
					uni.showToast({
						title: _title,
						duration: 1500,
						icon: 'none'
					});
				} else if (regCode === '') {
					uni.showToast({
						title: '验证码不能为空',
						duration: 1500,
						icon: 'none'
					});
				} else {
					_this.loginLoad = true;
					uni.request({
						url: "http://dz.abontest.com/e/member/ajax/index.php?action=mobilelogin",
						method: 'GET',
						data: {
							code: regCode,
							username: user,
							nationName: 'CN',
							nationCode: '86'
						},
						success: function(res) {
							if (res.data.status === 'success') {
								uni.setStorageSync('dz_userInfo', res.data.content);
								uni.setStorageSync('dz_token', res.data.content.token);
								uni.reLaunch({
									url: "/pages/index/index"
								})
							} else {
								uni.showToast({
									title: res.data.errorMsg,
									duration: 1500,
									icon: 'none'
								});
							}
						},
						fail: function(err) {
							uni.showToast({
								title: '登录失败',
								duration: 1500,
								icon: 'none'
							});
						},
						complete: function() {
							_this.loginLoad = false;
						}
					})
				}

			},
			// 第三方快速登录
			thirdLogin(type) {
				console.log(type)
			}
		}
	}
</script>
<style>
	page {
		height: auto;
		min-height: 100%;
		background-color: #f5f6f8;
	}
</style>
<style lang="scss" scoped>
	$logo-padding: 60px;
	$form-border-color: rgba(214, 214, 214, 1);
	$text-color: #B6B6B6;

	.page_quick_login {
		padding: 10px;
	}

	.quick_login_form {
		display: flex;
		margin: 20px;
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

			.get_img_code {
				min-width: 60px;
				min-height: 40px;
				display: flex;
				align-items: center;

				.code_img {
					width: 60px;
					height: 30px
				}
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

			.icon_del .iconfont,
			.icon_pwd_switch .iconfont {
				color: #A0A0A0;
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

	.opts {
		margin-top: 5px;
		margin-left: 25px;
		margin-right: 25px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		.text {
			font-size: 14px;
			color: $text-color;
		}
	}

	.quick_login_line {
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		.line {
			height: 1px;
			width: 38%;
			background-color: rgba(211, 211, 213, 1);
		}

		.text {
			font-size: 13px;
			color: rgba(200, 200, 200, 1);
			margin: 2px;
		}
	}

	.quick_login_list {
		margin-top: 30px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		.item {
			width: 50px;
			height: 50px;
			margin: 20px;
		}
	}
</style>
