<template>
	<view class="contanier">
		<view class="box">
			<view class="label">最少入住天数</view>
			<view class="right-box">
				<input class="day" type="number" placeholder="最少可设置1" v-model="minDay"/>
				<view class="unit">晚</view>
			</view>
		</view>
		<view class="box">
			<view class="label">最多入住天数</view>
			<view class="right-box">
				<input class="day" type="number" placeholder="最多可设置500" v-model="maxDay"/>
				<view class="unit">晚</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				minDay:'',
				maxDay:'',
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
<style lang="scss" scoped>
	.contanier {
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;

		.box {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #eaeaea;
			padding: 20upx 0;

			.label {
				font-size: 32upx;
			}

			.right-box {
				display: flex;
				align-items: center;
				font-size: 28upx;

				.day {
					display: flex;
					align-items: center;
					height: 58upx;
					width: 300upx;
					text-align: right;
					margin-right: 10upx;
				}
				.unit{
					height: 58upx;
					line-height: 58upx;
				}
			}
		}
	}
</style>
