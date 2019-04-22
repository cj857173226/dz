<template>
	<view class="contenr">
		<view class="check_box">
			<view class="check_item" :class="{'checked':isJoin === true}" @tap="joinCheck(true)">
				<view class="check_btn">
				</view>
				<view class="content_box">
					<view class="content">参与新房促销</view>
					<view class="desc">新房上线后90天内8折促销,提升您再众多房源中的竞争力,并增加房源的曝光度。3笔订单享受此优惠后失效。</view>
				</view>
			</view>
			<view class="check_item" :class="{'checked':isJoin === false}" @tap="joinCheck(false)">
				<view class="check_btn">
				</view>
				<view class="content_box">
					<view class="content">不参与新房促销</view>
					<view class="desc">较其他的新房源可能不具备有利的价格优势及足够的吸引你</view>
				</view>
			</view>
		</view>
		<view class="bottom-box">
			<view class="my-btn-block">确认</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				isJoin: false,
			}
		},
		onLoad(){
			
		},
		onShow(){
			
		},
		computed:{
			
		},
		methods:{
			joinCheck(is){
				this.isJoin = is;
			}
		}
	};
</script>
<style>
	page {
		height: 100%;
	}
</style>

<style lang="scss" scoped>
	$theme-color: #F05B72;

	.contenr {
		box-sizing: border-box;
		min-height: 100%;
		width: 100%;

		.check_box {
			box-sizing: border-box;
			width: 100%;
			padding: 20upx 30upx;

			.check_item {
				box-sizing: border-box;
				width: 100%;
				display: flex;
				justify-content: space-between;

				.check_btn {
					box-sizing: border-box;
					width: 36upx;
					height: 36upx;
					border: 1px solid #333333;
					border-radius: 50%;
					margin-top: 4upx;
				}

				.content_box {
					box-sizing: border-box;
					width: calc(100% - 60upx);
					margin-bottom: 60upx;

					.content {
						font-size: 32upx;
						color: #000000;
						margin-bottom: 20upx;
					}

					.desc {
						font-size: 28upx;
						color: #aaaaaa;
					}
				}

			}

			.checked {
				.check_btn {
					border: 1px solid $theme-color;
					display: flex;
					justify-content: center;
					align-items: center;
					&::after{
						content: '';
						display: block;
						width: 20upx;
						height: 20upx;
						border-radius: 50%;
						background: $theme-color;
					}
				}
			}


		}

		.bottom-box {
			position: fixed;
			box-sizing: border-box;
			width: 100%;
			padding: 20upx 30upx;
			bottom: 0;
			left: 0;
		}
	}
</style>
