<template>
	<view class="content">
		<Carousel></Carousel>
        <Selects></Selects>
		<Circum></Circum>
	</view>
</template>

<script>
	// 引入自定义组件
	import Carousel from '../../components/index/carousel.vue' // 轮播组件
	import Selects from '../../components/index/select.vue' // 地区时间搜索组件
	import Circum from '../../components/index/circum.vue' // 周边推荐组件
	export default {
		components:{ //注册组件
			Carousel,
			Selects,
			Circum
		}
		
	}
</script>
<style>
	page{
		height: 100%;
	}
</style>

<style lang="scss" scoped>
	.content{
		width: 100%;
		background-color: #fff;
		min-height: 100%;
		box-sizing: border-box;
	}
</style>
