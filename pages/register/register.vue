<template>
	<view class="page_reg">
		<view class="reg_form">
			<view class="input">
				<view class="img">
					<text class="iconfont icon-dianhua3"></text>
				</view>
				<input type="text" v-model.trim="username" placeholder-style="color:#ccc;font-size:14px;" placeholder="请输入手机号" :focus="autoFocus">
			</view>
			<view class="line" />
			<view class="input">
				<view class="img">
					<text class="iconfont icon-yanzhengma"></text>
				</view>
				<input v-model.trim="regCode" placeholder-style="color:#ccc;font-size:14px;" placeholder="动态验证码" >
				<view class="get_code">
					<view class="get_code_btn" :class="{'dis_btn':codeDisable===true}" @tap.stop="getMsgCode">{{codeText}}</view>
				</view>
			</view>
			<view class="line" />
			<view class="input">
				<view class="img">
					<text class="iconfont icon-mima"></text>
				</view>
				<input :type="pwdType" :value="userpwd" @input="inputPwd" placeholder-style="color:#ccc;font-size:14px;" placeholder="请输入密码">
				<view class="img icon_pwd_switch" @tap="switchPwd">
					<text class="iconfont icon-yanjing" v-if="pwdType==='password'"></text>
					<text class="iconfont icon-yanjing1" v-if="pwdType==='text'"></text>
				</view>
			</view>
		</view>
		<button class="submit" @tap="submitRegsiter">注册</button>
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
				codeDisable: false,
				codeText: '获取验证码',
				codeTimer: null,
				codeLoad:false, // 是否正在发送验证码
				autoFocus:true,
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
				if (that.codeDisable || that.codeLoad) return;
				if (user === '' || !helper.phoneReg(user)) {
					uni.showToast({
						title: '请输入正的确手机号',
						duration: 1000,
						icon:'none'
					});
				} else {
// 					uni.request({
// 					url:"http://dz.cdabon.com/wap/api/global.php?action=CheckParams4H5&type=phone",
// 					method:'GET',
// 					data:{
// 						key:user,
// 						params:user
// 					},
// 					success:function(res){
// 						if(res.status == 200){
// 							
// 						}
// 					},
// 					fail:function(fail){
// 						
// 					},
// 					complete:function(){
// 						
// 					}
// 				})
					that.codeLoad = true;
					uni.request({
						url:"http://dz.cdabon.com/e/member/doaction.php",
						method:'GET',
						data:{
							enews: 'Rzsj',
							phone: user
						},
						success:function(res){
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
								duration: 1000,
								icon:'none'
							});
						},
						fail:function(){
							uni.showToast({
								title: '发送失败',
								duration: 1000,
								icon:'none'
							});
						},
						complete:function(){
							that.codeLoad = false;
						}
					})
				}
			},
			// 提交注册
			submitRegsiter() {
				const user = this.username;
				const psw = this.userpwd;
				const regCode = this.regCode;
				if (user === '') {
					uni.showToast({
						title: '请输入手机号',
						duration: 1000,
						icon:'none'
					});
				} else if(regCode === ''){
					uni.showToast({
						title: '请填写验证码',
						duration: 1000,
						icon:'none'
					});
				} else if (psw === ''){
					uni.showToast({
						title: '请设置密码',
						duration: 1000,
						icon:'none'
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
