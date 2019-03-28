<template>
	<view class="my_information_page" :style="infoForm.avatar? headBgStyle: ''">
		<view class="head">
			<view class="avatar_wrap" @tap="chooseAvatar">
				<img class="avatar" :src="infoForm.avatar?infoForm.avatar:'/static/images/default_avatar.jpg'" alt="">
				<view class="img_icon">
					<text class="iconfont icon-tuxingyanzhengma"></text>
				</view>
			</view>
			<view class="nick-name">
				<input type="text" v-if="infoForm.nickname==='' || onfocus === true" placeholder-style="font-size:36upx;color:#cccccc;"
				 maxlength="16" placeholder="请输入用户名" v-model.trim="infoForm.nickname" @focus="onfocus = true" @blur="onfocus = false">

				<view class="show_nickname" @tap="onfocus=true" v-if="infoForm.nickname!=='' && onfocus === false">
					{{infoForm.nickname}}
					<text class="iconfont icon-icon-edit edit-icon"></text>
				</view>
			</view>
		</view>
		<view class="info_form">
			<view class="form_item">
				<view class="label">真实姓名</view>
				<view class="ipt">
					<input type="text" placeholder-style="font-size:28upx;color:#cccccc;" placeholder="请填写">
				</view>
				<view class="after_icon">
				</view>
			</view>
			<view class="form_item">
				<view class="label">身份证号</view>
				<view class="ipt">
					<input type="text" placeholder-style="font-size:28upx;color:#cccccc;" placeholder="请填写">
				</view>
				<view class="after_icon">
				</view>
			</view>
			<view class="form_item">
				<view class="label">护照号</view>
				<view class="ipt">
					<input type="text" placeholder-style="font-size:28upx;color:#cccccc;" placeholder="请填写">
				</view>
				<view class="after_icon">
				</view>
			</view>
			<view class="form_item">
				<view class="label">性别</view>
				<view class="ipt">
					<view class="empty">请选择</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="label">地区</view>
				<view class="ipt">
					<view class="empty">请选择</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="label">出生日期</view>
				<view class="ipt">
					<view class="empty">请选择</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="label">教育背景</view>
				<view class="ipt">
					<view class="empty">请选择</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoForm: {
					avatar: '', // 用户头像
					nickname: '', //昵称
					idCard: '', //身份证号
					passCard: '', //护照号
					sex: '', //性别
					local: '', //地区
					date: '', //出生日期
					education: '', //教育背景
				},
				onfocus: true,
				headBgStyle:{
					'background-img':''
				}
			};
		},
		onLoad() {},
		onShow() {},
		onReachBottom() {

		},
		methods: {
			chooseAvatar() {
				const _this = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: function(res) {
						console.log(res.tempFiles)
						_this.infoForm.avatar = res.tempFiles[0].path;
						_this.headBgStyle['background-img'] = res.tempFiles[0].path;
						console.log(JSON.stringify(res.tempFilePaths));
					}
				})
			}
		}
	}
</script>
<style>
	page {
		height: 100%;
	}
</style>
<style lang="scss" scoped>
	$theme-color: #F05B72;
	$back-color:#f5f6f8;

	.my_information_page {
		box-sizing: border-box;
		.head {
			height: 360upx;
			caret-color: #F05B72;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.avatar_wrap {
				position: relative;
				border: 3px solid rgba(144, 144, 144, 0.1);
				height: 160upx;
				width: 160upx;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 30upx;

				.avatar {
					width: 156upx;
					height: 156upx;
					border-radius: 50%;
				}

				.img_icon {
					position: absolute;
					right: 0;
					bottom: 0;
					width: 40upx;
					height: 40upx;
					background: $theme-color;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;

					.iconfont {
						font-size: 24upx;
						color: #FFFFFF;
					}
				}
			}

			.nick-name {
				width: 480upx;
				height: 52upx;
				display: flex;
				justify-content: center;

				input {
					width: 480upx;
					text-align: center;
					caret-color: #F05B72;
					font-size: 36upx;
				}

				.show_nickname {
					display: inline;
					font-size: 36upx;
					height: 52upx;
					line-height: 52upx;
					text-align: center;

					.edit-icon {
						font-size: 32upx;
						color: $theme-color;
					}
				}
			}
		}

		.info_form {
			box-sizing: border-box;
			width: 100%;
			padding:20upx 30upx;
			.form_item {
				box-sizing: border-box;
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;
				flex-direction: row;
				border-bottom: 1px solid #eaeaea;

				.label {
					font-size: 32upx;
				}

				.ipt {
					box-sizing: border-box;
					flex-grow: 1;
					display: flex;
					flex-direction: row-reverse;
					align-items: center;
					font-size: 28upx;

					input {
						text-align: right;
						font-size: 28upx;
					}

					.empty {
						font-size: 28upx;
						color: #cccccc;
					}
				}

				.after_icon {
					width: 30upx;
					display: flex;
					justify-content: center;
					align-items: center;

					.iconfont {
						font-size: 28upx;
						color: #cccccc;
					}
				}
			}
		}

	}
</style>
