<template>
	<view class="share_page">
		<view class="share-box">
			<view class="share-head">
				<p  style="font-weight: 800">为出行计划赞助住宿基金</p>
				<p>每成功邀请1位朋友注册,你们均可得300元</p>
			</view>
			<view class="share-code-box padding15-wrap">
				<p>我的邀请码</p>
				<p style="border-bottom: 2px solid #cccccc; font-size: 18px;font-weight: 800;line-height: 30px;height: 30px;">{{invitation_code}}</p>
			</view>
			<view class="padding15-wrap">
				<button class="my-btn-block">分享邀请</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				invitation_code:'a4144d', //邀请码
			};
		}
	}
</script>

<style scope>
.share-box .share-head{
    padding: 40px;
    background: #f05b72;
    color: #ffffff;
    font-size: 16px;
    border-radius:0 0 100% 100%/0 0 50px 50px;
    line-height: 30px;
    text-align: center;
}

 .share-box .share-code-box {
    margin: 10px 0;
    text-align: center;
    font-size: 16px;
    color: #333333;
}
.dis-send{
    pointer-events: none;
    background: #cccccc !important;
}
</style>
