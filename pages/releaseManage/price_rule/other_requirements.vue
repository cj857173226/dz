<template>
	<view class="contanier">
		<view class="desc_wrap">
			<textarea placeholder-class="placeholder" placeholder="房客使用您的房间需要遵守的规则 (如年龄段、性别、接待时间等) ,合理的要求可使您避免一些不可必要的麻烦 (请不要发布联系方式) " maxlength="2000" v-mode="desc"></textarea>
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
