<template>
	<view class="center">
		<view class="price-amount">
			<view class="label">日价金额</view>
			<view class="amout-box">
				<input class="amount" placeholder="最高设置金额9999" placeholder-class="placeholder" type="number" maxlength="5"/>
				<view class="unit">元/每晚</view>
			</view>
		</view>
		<text class="hint">日价的10%将作为服务费,请酌情考虑。</text>
	</view>
</template>
<script>
	export default {

	}
</script>
<style lang="scss" scoped>
	.center {
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;

		.label {
			height: 56upx;
			line-height: 56upx;
			font-size: 32upx;
		}

		.price-amount {
			width: 100%;
			padding: 20upx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #F4F4F4;
			margin-bottom: 20upx;

			.amout-box {
				height: 56upx;
				display: flex;

				.amount {
					height: 100%;
					text-align: right;
					width: 300upx;
				}

				.unit {
					height: 100%;
					margin-left: 8upx;
					line-height: 56upx;
					font-size: 28upx;
				}
			}
		}

		.hint {
			color: #cccccc;
			font-size: 28upx;
		}
	}
</style>
