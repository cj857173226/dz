<template>
	<view class="content">
		<view class="list-box" @tap="tapDiscuss(item.id,item.userid)" v-for="(item,index) in listData" :key="index">
			<view class="img-box">
				<image class="housing-pictures" :src="item.titlepic===null?'../../../static/images/meitu1.jpg':shortHttp+item.titlepic"></image>
			</view>
			<view>{{item.title===''?'占无标题':item.title}}</view>
		</view>
	</view>
</template>

<script>
	import {request} from '../../../common/request.js' // 封装的带有token的请求方法
	import helper from '../../../common/helper.js'
	import {shortHttp} from "../../../common/requestUrl.json"; // 接口文件
	export default {
		data() {
			return {
				listData:[], // 房源列表数据
				shortHttp,
			};
		},
		methods: {
			// 房源列表数据请求方法
			httpRequest(){
				uni.showLoading({
					title:'加载中'
				})
				const _this = this;
				request({
					url:'/wap/api/fangdong.php?action=houseList',
					success: function(res) {
						uni.hideLoading()
						console.log('房源列表',res);
						if(res.data.status === 'success'){
							_this.listData = res.data.content
						}else{
							uni.showToast({
								title:res.data.errorMsg,
								icon:'none'
							})
						}
					},
					fail: function(err) {
						uni.showToast({
							title:err,
							icon:'none'
						})
					}
				})
			},
			// 跳转回复评论
			tapDiscuss(roomId,userId){
				uni.navigateTo({
					url:`/pages/my/comment/revert_comment?rid=${roomId}&uid=${userId}`
				})
			}
		},
		onLoad(){
			this.httpRequest(); // 调用请求
		}
	}
</script>

<style lang="scss" scoped>
.content{
	width: 100%;
	padding: 30upx;
	box-sizing: border-box;
	font-size: 28upx;
	.list-box{
		width: 100%;
		display: flex;
		box-shadow: 0 8upx 6upx 0 #dadada;
		margin-bottom: 20upx;
		.img-box{
			width: 180upx;
			height: 120upx;
			margin-right: 20upx;
			.housing-pictures{
				width: 180upx;
				height: 120upx;
			}
		}
		
	}
}
</style>
