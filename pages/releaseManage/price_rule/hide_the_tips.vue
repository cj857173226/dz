<template>
	<view class="contanier">
		<view class="desc_wrap">
			<textarea placeholder-class="placeholder" placeholder="房客支付完成准备入住的时候才会看到隐藏说明，您可以在这里填写列如Wifi密码、备用联系电话、详细上门方式等不便在房源页面公开展示的内容。(选填)"
			 maxlength="100" v-mode="desc"></textarea>
			<view class="number_control"><text style="color: #F05B72;" v-text="desc.length"></text>/100</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				desc: '',

			}
		},
		onLoad() {

		},
		onShow() {

		},
		computed: {

		},
		methods: {}
	};
</script>
<style lang="scss" scoped>
	.contanier {
		width: 100%;
		box-sizing: border-box;
		padding: 20upx 30upx;

		.desc_wrap {
			position: relative;
			box-sizing: border-box;
			width: 100%;
			height: 500upx;
			border: 1px solid #ccc;
			padding: 20upx;
			font-size: 28upx;

			.number_control {
				position: absolute;
				right: 20upx;
				bottom: 20upx;
				font-size: 28upx;
				color: #aaaaaa;
			}
		}
	}
</style>
