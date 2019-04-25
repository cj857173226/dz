<template>
	<view class="chat_page">
		<view class="main">
			<!-- 消息盒子 -->
			<scroll-view class="chat_box" :scroll-top="scrollTop" scroll-y>
				<view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view>
				<view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>a</view><view>b</view>
			</scroll-view>
			<!-- 消息发送 -->
			<view class="send_box">
				<textarea class="cur_msg"/>
				<button class="send_btn">发送</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop:9999999,
			}
		},
		onLoad(e) {
			const _title = e.title
			uni.setNavigationBarTitle({
				title: _title
			});
		},
		onShow() {

		},
		computed: {

		},
		methods: {

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
	.chat_page{
		height: 100%;
		.main{
			box-sizing: border-box;
			height: 100%;
			display: flex;
			flex-direction: column;
			
			.chat_box{
				box-sizing: border-box;
				height: calc(100% - 92upx);
				overflow-y: auto;
			}
			.send_box{
				box-sizing: border-box;
				height: 92upx;
				padding: 10upx 20upx;
				background: #eeeeee;
				display: flex;
				.cur_msg{
					box-sizing: border-box;
					background: #ffffff;
					height: 72upx;
					width: calc(100% - 190upx);
					margin-right: 30upx;
					font-size: 32upx;
					padding: 17upx 10upx;
					border-radius: 16upx;
				}
				.send_btn{
					height: 72upx;
					line-height: 72upx;
					width: 160upx;
					padding: 0;
					font-size: 28upx;
					background: $theme-color;
					color: #ffffff;
				}
			}
		}
	}
	
</style>
