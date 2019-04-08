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
		</view>
	</view>
</template>

<script>
	import {shortHttp,banner} from '../../common/requestUrl.json' // 接口文件
	console.log("网址",shortHttp+banner);
	// console.log("banner图地址",banner);
	export default {
    data() {
        return {
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500
        }
    },
    methods: {
        changeIndicatorDots(e) {
            this.indicatorDots = !this.indicatorDots
        },
        changeAutoplay(e) {
            this.autoplay = !this.autoplay
        },
        intervalChange(e) {
            this.interval = e.target.value
        },
        durationChange(e) {
            this.duration = e.target.value
		},
		// 轮播图请求方法
		banner:function() {
			uni.request({
				url:shortHttp+banner,
				method:'GET',
				dataType:'json',
				success: (res) => {
					console.log(res);					
				},
				fail: (err) => {
					console.log(err);
				}
			})
		}
	},
	onLoad:function(){
		console.log('onReady');
		this.banner();
	}
}
	
</script>

<style scoped>
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
