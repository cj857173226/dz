<template>
	<view class="contanier">
		<view class="group-box" @tap="cilckParticulars(item.cid,item.cname)" v-for="(item,i) in groupingList" :key="i">
			<image class="group-img" src="../../static/images/landlordguide/banner6.jpg"></image>
			<view class="group-name">{{item.cname}}</view>
		</view>
	</view>
</template>

<script>
	import {request} from '../../common/request.js' // 封装的带有token的请求方法
	import helper from '../../common/helper.js'
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
			},
			grouping(){
				const _that = this
				// 获取分组列表
				request({
					url:"/wap/api/my.php?action=favoriteClass",
					success: function(res) {
						console.log(res);
						
						if (res.data.status === "success") {
							_that.groupingList = res.data.content.item;
						} else {
							uni.showToast({
								title:res.data.errorMsg
							})
						};
					},
					fail:function(err){
						uni.showToast({
							title:err
						})
					}
				})
			}
		},
		onLoad(){
			helper.isLogin();
			this.grouping() // 调用请求获取数据的回调
		},
		onShow(){
			this.grouping() // 调用请求获取数据的回调
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
		height: 140upx;
		display: flex;
		box-shadow: 0 0 4upx #2d2c2c;
		margin-bottom: 20upx;
		.group-img{
			width: 280upx;
			height: 140upx;
		}
		.group-name{
			width: 100%;
			line-height: 60upx;
			font-size: 28upx;
			margin-left: 30upx;
		}
	}
}
</style>
