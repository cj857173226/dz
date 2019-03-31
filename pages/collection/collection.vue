<template>
	<view class="contanier">
		<view class="group-box" @tap="cilckParticulars">
			<image class="group-img" src="../../static/images/meitu.jpeg"></image>
			<view class="group-name">我喜欢的房源</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onNavigationBarButtonTap(e){
			console.log('11111',e)
			uni.navigateTo({
				url:'/pages/collection/new_group'
			})
		},
		methods: {
			// cilckParticulars:function(){
			// 	uni.navigateTo({
			// 		url:'/pages/collection/new_group'
			// 	})
			// }
		}
	}
</script>

<style lang="scss" scoped>
.contanier{
	width: 100%;
	padding: 30upx;
	box-sizing: border-box;
	.group-box{
		width: 100%;
		height: 562upx;
		border-bottom: 2upx solid #ccc;
		.group-img{
			width: 100%;
			height: 462upx;
		}
		.group-name{
			width: 100%;
			height: 90upx;
			line-height: 80upx;
			font-size: 20px;
			font-weight: bold;
		}
	}
}
</style>
