<template>
  <view class="container">
	<view class="uni-padding-wrap">
	    <view class="page-section swiper">
	        <view class="page-section-spacing">
	            <swiper class="swiper"
				indicator-color="#EBEDF3"
				indicator-active-color="#fff"
				@change="changeIndicatorDots"
				>
	                <swiper-item v-for="(item,index) in detailsImg" :key="index" :item-id="(index+1)+''">
	                    <image class="banner" :src="http+item.bigImgUrl"></image>
	                </swiper-item>
				</swiper>
			</view>
		</view>
		<view class="price">
			&yen;<text class="specific-price">{{}}</text>起/晚
		</view>
		<view class="indexes-box">
			<text>{{numberIndex}}</text>/
			<!-- <text v-text="detailsImg.length"></text> -->
		</view>
	</view>
  </view>
</template>

<script>
import { shortHttp } from "../../common/requestUrl.json"; // 接口文件
	export default {
		data(){
			return{
				numberIndex:1,
				http:shortHttp
			}
		},
		props: ["detailsImg","prices"],
		methods: {
			
		},
		mounted () {
			console.log(this.detailsImg);
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
				width: 60upx;
				height: 60upx;
				background-color: rgba(0,0,0,.7);
				border-radius: 50%;
				text-align: center;
				line-height: 60upx;
				font-size: 12px;
				color: #fff;
				position: absolute;
				bottom: 10upx;
				right: 30upx;
			}
		}
	}
</style>
