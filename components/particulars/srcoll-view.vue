<template>
  <view class="container">
	<view class="uni-padding-wrap">
	    <view class="page-section swiper">
	        <view class="page-section-spacing">
	            <swiper class="swiper"
				indicator-color="#EBEDF3"
				indicator-active-color="#fff"
				>
	                <swiper-item>
	                    <image class="banner" src="../../static/images/landlordguide/banner1.jpg"></image>
	                </swiper-item>
					<swiper-item>
					    <image class="banner" src="../../static/images/landlordguide/banner2.jpg"></image>
					</swiper-item>
					<swiper-item>
					    <image class="banner" src="../../static/images/landlordguide/banner3.jpg"></image>
					</swiper-item>
					<swiper-item>
					    <image class="banner" src="../../static/images/landlordguide/banner4.jpg"></image>
					</swiper-item>
					<swiper-item>
					    <image class="banner" src="../../static/images/landlordguide/banner5.jpg"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="price">
			&yen;<text class="specific-price">2199</text>起/晚
		</view>
		<view class="indexes-box">
			<text>1</text>/
			<text>5</text>
		</view>
	</view>
  </view>
</template>

<script>
	export default {
		data(){
			return{
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 500upx;
		.uni-padding-wrap{
			position: relative;
			.swiper{
				width: 100%;
				height: 500upx;
				.banner{
					width: 100%;
					height:500upx;
				}
			}
			.price{
				width: 200upx;
				height: 60upx;
				line-height: 60upx;
				text-align: center;
				color: #fff;
				font-size: 14px;
				background-color: rgba(0,0,0,.7);
				position: absolute;
				bottom: 0;
				left: 0;
				.specific-price{
					font-size: 18px;
				}
			}
			.indexes-box{
				color: #fff;
				position: absolute;
				bottom: 10upx;
				right: 30upx;
			}
		}
	}
</style>
