<template>
	<view class="contanier">
		<view class="group-box" @tap="cilckParticulars(item.cid,item.cname)" v-for="(item,i) in groupingList" :key="i">
			<image class="group-img" src="../../static/images/meitu.jpeg"></image>
			<view class="group-name">{{item.cname}}</view>
		</view>
	</view>
</template>

<script>
	import {request} from '../../common/request.js' // 封装的带有token的请求方法
	export default {
		data() {
			return {
				groupingList:null, // 分组列表
			};
		},
		onNavigationBarButtonTap(e){
			console.log('11111',e)
			uni.navigateTo({
				url:'/pages/collection/new_group'
			})
		},
		methods: {
			cilckParticulars:function(id,cname){
				//  id：房源id  cname：房源标题
				uni.navigateTo({
					url:`/pages/collection/custom?id=${id}&title=${cname}`
				})
			}
		},
		onLoad(){
			const _that = this
			// 获取分组列表
			request({
				url:"/wap/api/my.php?action=favoriteClass",
				success: function(res) {
					console.log("分组列表:",res);
					_that.groupingList = res.data.content.item;
				}
			})
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
		height: 540upx;
		border-bottom: 2upx solid #ccc;
		margin-bottom: 10upx;
		.group-img{
			width: 100%;
			height: 462upx;
		}
		.group-name{
			width: 100%;
			line-height: 60upx;
			font-size: 20px;
			font-weight: bold;
		}
	}
}
</style>
