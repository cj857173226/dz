<template>
	<view class="container">
		<!-- <srcolls :detailsImg="imgArray" :prices="price"></srcolls> -->
		<view class="container-box">
			<view class="uni-padding-wrap">
					<view class="page-section swiper">
							<view class="page-section-spacing">
									<swiper class="swiper"
						indicator-color="#EBEDF3"
						indicator-active-color="#fff"
						@change="changeIndicatorDots"
						>
											<swiper-item v-for="(item,index) in imgArray" :key="index" :item-id="(index+1)+''">
													<image class="banner" :src="http+item.bigImgUrl"></image>
											</swiper-item>
						</swiper>
					</view>
				</view>
				<view class="price">
					&yen;<text class="specific-price">{{price}}</text>起/晚
				</view>
				<view class="indexes-box">
					<text>{{numberIndex}}</text>/
					<text>{{imgArray.length}}</text>
				</view>
			</view>
  	</view>
		<contactRoomDoor/>
	</view>
</template>

<script>
	// import srcolls from '../../components/particulars/srcoll-view.vue' //滚动视图组件
	import contactRoomDoor from '../../components/particulars/Contact-room-door.vue' //联系房东组件
	import { shortHttp,room } from "../../common/requestUrl.json"; // 接口文件
	
	export default {
		components:{
			contactRoomDoor
		},
		data () {
			return {
				imgArray:null, // 图片的数据
				price:null, // 房间价格
				http:shortHttp, // 域名
				numberIndex:1, // 当前图片index
				price:null, //
				data:null
			}
		},
		methods: {
			changeIndicatorDots(e){
				console.log(e);
				
				this.numberIndex = e.detail.currentItemId
			}
		},
		onLoad(option) {
			// console.log(option.id);
			const _that = this;
			let id = option.id; //用户点击轮播图传过来的房间唯一id
			uni.request({
				url:shortHttp+room,
				data:{luId:id},
				success: res => {
					console.log("房间详情",res.data.content);
					let datas = res.data.content
					_that.imgArray = datas.images// 图片数组
					_that.price = datas.priceAndTips.displayPrice // 价格
					_that.data = datas
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 100%;
		background-color: #ededed;
		.container-box{
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
	}
</style>
