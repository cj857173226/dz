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
						
		                <swiper-item v-for="(item,index) in banner" :key="index">
		                    <image class="banner" :src="shortHttp+item.mainimageurl"></image>
		                </swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
    data() {
        return {
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
			duration: 500,
			shortHttp:"http://dz.cdabon.com" //域名
        }
	},
	props: {
		banner:Array
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
	},
	
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
