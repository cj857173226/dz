<template>
	<view class="house_area_page">
		<view class="tips_wrap">
			<view class="one_line">请填写<text class="b_text">房客独享房间的使用面积</text></view>
			<view class="one_line">而不是整套房屋的面积</view>
		</view>
		<view class="input_wrap">
			<input type="number" placeholder="请填写" placeholder-style="font-size:32upx; color:#ccc;" focus maxlength="4" v-model="area">
			<view class="unit">㎡</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				area: '',
				old_area: '',
			}
		},
		onLoad() {

		},
		onShow() {

		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.submitHouseArea()
			}
		},
		computed: {

		},
		methods: {
			submitHouseArea() {
				console.log(this.area)
				const reg = /^\d*$/;
				if (Number(this.area) <= 0 || Number(this.area) > 9999 || !reg.test(this.area)) {
					uni.showToast({
						title: '1~9999的正整数',
						duration: 1500,
						icon:'none'
					});
				}
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
	.house_area_page {
		box-sizing: border-box;
		height: 100%;
		padding: 40upx 30upx 20upx;

		.tips_wrap {
			box-sizing: border-box;
			width: 100%;
			font-size: 40upx;
			margin-bottom: 80upx;

			.one_line {
				box-sizing: border-box;
				width: 100%;
				font-size: 40upx;
				text-align: center;
				margin-bottom: 6upx;
				color: #888888;

				.b_text {
					color: #000000;
				}
			}
		}

		.input_wrap {
			margin: 0 auto;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 260upx;
			height: 100upx;
			border: 1px solid #cccccc;

			input {
				text-align: right;
				width: 120upx;
			}
		}
	}
</style>
