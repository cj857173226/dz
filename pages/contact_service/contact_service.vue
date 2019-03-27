<template>
	<scroll-view class="contact_service_page" scroll-y=true>
		<view class="contact-type-list">
			<view class="contact-type">
				<view class="content-icon">
					<i class="iconfont icon-kefu"></i>
				</view>
				<view class="content-wrap">
					<text class="content-title">在线客服 (推荐)</text>
					<view class="note">立即解答,分分钟解决你的问题</view>
				</view>
				<view class="right-icon">
					<i class="iconfont icon-weibiaoti34"></i>
				</view>
			</view>
			<view class="contact-type" @tap="callPhone">
				<view class="content-icon">
					<i class="iconfont icon-dianhua3"></i>
				</view>
				<view class="content-wrap">
					<text class="content-title">客服电话</text>
					<view class="note">400-6565-06</view>
				</view>
				<view class="right-icon">
					<i class="iconfont icon-weibiaoti34"></i>
				</view>
			</view>
			<view class="contact-type">
				<view class="content-icon">
					<i class="iconfont icon-youxiang"></i>
				</view>
				<view class="content-wrap">
					<text class="content-title">客服邮箱</text>
					<view class="note">service@163.com</view>
				</view>
				<view class="right-icon">
					<i class="iconfont icon-weibiaoti34"></i>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				service_line:'400-6565-06', // 热线电话
			};
		},
		methods:{
			callPhone(){
				const that = this;
				uni.makePhoneCall({
					phoneNumber:that.service_line
				})
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
<style scoped>
	/*联系客服*/
	.contact_service_page {
		box-sizing: border-box;
		display: flex;
		padding: 30upx;
		flex-direction: column;
	}

	.contact-type-list .contact-type {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		min-height: 160upx;
		background: #ffffff;
		border-radius: 6px;
		margin-bottom: 30upx;
	}

	.contact-type-list .contact-type:last-child {
		margin-bottom: 0;
	}

	.contact-type-list .contact-type .content-icon {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80px;
		width: 240upx;
	}

	.contact-type-list .contact-type .right-icon {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80px;
		line-height: 80px;
		width: 120upx;
		text-align: center;
	}

	.contact-type-list .contact-type .content-icon .iconfont,
	.contact-type-list .contact-type .right-icon .iconfont {
		font-size: 30px;
		color: #b7b7b7;
	}

	.contact-type-list .contact-type .content-wrap .content-title {
		font-size: 16px;
		color: #f05b72;
	}

	.contact-type-list .contact-type .content-wrap .note {
		font-size: 12px;
		color: #cccccc;
		line-height: 24px;
	}

	.contact-type-list .contact-type .content-wrap {
		width: 100%;
	}
</style>
