<template>
	<view class="setting_page">
		<view class="setting_list"></view>
		<button class="logout_btn my-btn-block">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				setList: [{
					label: '退出登录',
					val: 'logout'
				}]
			}
		},
		onLoad() {

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
	.setting_page{
		position: relative;
		box-sizing: border-box;
		padding: 40upx 30upx;
		min-height: 100%;
		.logout_btn{
			width: inherit;
			position: absolute;
			bottom: 40upx;
			left: 30upx;
			right: 30upx;
		}
	}
</style>
