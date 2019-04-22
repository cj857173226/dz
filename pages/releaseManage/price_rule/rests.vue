<template>
	<view class="contanier">
		<view class="desc_wrap">
			<textarea placeholder-class="placeholder" placeholder="对水费、电费、燃气费、等其他费用由更多要求,请进行描述。(选填)" maxlength="2000" v-mode="desc"></textarea>
			<view class="number_control"><text style="color: #F05B72;" v-text="desc.length"></text>/2000</view>
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
		methods: {
		}
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
			.number_control{
				position: absolute;
				right: 20upx;
				bottom: 20upx;
				font-size: 28upx;
				color: #aaaaaa;
			}
		}
	}
</style>
