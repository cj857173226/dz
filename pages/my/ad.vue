<template>
	<view class="ad_page">
		<view v-html="adDetail.html"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				adDetail: {}
			}
		},
		onLoad() {
			this.adDetail = uni.getStorageSync('dz_ad');
			uni.setNavigationBarTitle({
				title: this.adDetail.title
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
	.ad_page{
		box-sizing: border-box;
		width: 100%;
		img{
			max-width: 100%
		}
	}
</style>
