<template>
	<view class="container">
		<view class="uni-padding-wrap">
		    <view class="page-section swiper">
		        <view class="page-section-spacing">
		            <swiper class="swiper" 
					:indicator-dots="indicatorDots"
					:autoplay="autoplay" 
					:interval="interval" 
					:duration="duration"
					indicator-color="#EBEDF3"
					indicator-active-color="#E9516A"
					>
						
		                <swiper-item @tap="onDetails(item.luid)" v-for="(item,index) in banner" :key="index">
		                    <image class="banner" :src="shortHttp+item.mainimageurl"></image>
		                </swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { shortHttp } from "../../common/requestUrl.json"; // 接口文件
	export default {
    data() {
        return {
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
			duration: 500,
			shortHttp, //域名
        }
	},
	props: {
		banner:Array
	},
    methods: {
        onDetails(id){
			console.log('id:',id);
			uni.navigateTo({
				url: `/pages/particulars/particulars?id=${id}`
			})
		}
	},
	
}
	
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 500upx;
	}
	.swiper{
		width: 100%;
		height: 500upx;
	}
	.banner{
		width: 100%;
		height:500upx;
	}
</style>
