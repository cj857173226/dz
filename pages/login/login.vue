<template>
	<view class="page_login">
		<!-- 登录form -->
		<view class="login_form">
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
					<text class="iconfont icon-mima"></text>
				</view>
				<input :type="pwdType" :value="userpwd" @input="inputPwd" placeholder-style="color:#ccc;font-size:14px;"
				 placeholder="请输入密码">
				<view class="img icon_pwd_switch" @tap="switchPwd">
					<text class="iconfont icon-yanjing" v-if="pwdType==='password'"></text>
					<text class="iconfont icon-yanjing1" v-if="pwdType==='text'"></text>
				</view>
			</view>
		</view>
		<!-- 登录提交 -->
		<button class="submit" :class="{'dis_btn':loginLoad===true}" @tap="login" v-text="loginLoad===true?'登录中...':'登录'"></button>
		<view class="opts">
			<text @tap="goReg" class="text">立即注册</text>
			<text @tap="quickLogin" class="text" style="color: #F05B72;">手机快速登录</text>
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
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			const isUni = typeof(uni) !== 'undefined'
			return {
				username: '',
				userpwd: '',
				pwdType: 'password',
				imgInfo: {
					qq: isUni ? '/static/qq.png' : require('./images/qq.png'),
					wechat: isUni ? '/static/wechat.png' : require('./images/wechat.png'),
					weibo: isUni ? '/static/weibo.png' : require('./images/weibo.png')
				},
				autoFocus: true,
				loginLoad: false,
			}
		},
		onLoad() {

		},
		computed: {
		},
		methods: {
			...mapMutations(['createChatSocket']),
			inputUsername(e) {
				this.username = e.target.value
			},
			inputPwd(e) {
				this.userpwd = e.target.value
			},
			delUser() {
				this.username = ''
			},
			switchPwd() {
				this.pwdType = this.pwdType === 'text' ? 'password' : 'text'
			},
			quickLogin() {
				uni.redirectTo({
					url: '/pages/quickLogin/quickLogin'
				})
			},
			goReg() {
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},
			thirdLogin(type) {
				console.log(type)
			},
			// 登录
			login() {
				if (this.loginLoad) return;
				const that = this;
				const username = that.username;
				const pws = that.userpwd;
				if (username === '') {
					uni.showToast({
						title: '账号不能为空',
						duration: 1500,
						icon: 'none'
					});
				} else if (pws === '') {
					uni.showToast({
						title: '密码不能为空',
						duration: 1500,
						icon: 'none'
					});
				} else {
					that.loginLoad = true;
					uni.request({
						url: 'http://dz.abontest.com/e/member/ajax/index.php?action=login',
						method: 'POST',
						header: {
							"Content-Type": "application/x-www-form-urlencoded",
						},
						data: {
							username: username,
							password: pws
						},
						success: function(res) {
							if (res.data.status === 'success') {
								uni.setStorageSync('dz_userInfo', res.data.content);
								uni.setStorageSync('dz_token', res.data.content.token);
								that.createChatSocket();
								uni.reLaunch({
									url: "/pages/index/index"
								})
								
							} else {
								uni.showToast({
									title: res.data.msg,
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
							that.loginLoad = false;
						}
					})
				}
			},
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

	.page_login {
		padding: 10px;
	}

	.login_form {
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
