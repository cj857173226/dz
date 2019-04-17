<template>
	<view class="container-box">
		<view class="title-box">
			<view class=" line-left"></view>
			<text class="title-font">周边推荐</text>
			<view class="line-right"></view>
		</view>
		<view class="subtitle">体验不一样的旅行方式</view>
		<view class="recommend-box" v-for="(item,i) in circumList" :key="i">
			<view class="list-box">
				<image @tap="clickDetails(item.luId)" class="list-img" :src="shortHttp+item.landlordheadimgurl"></image>
				<!-- 房户信息 -->
				<view class="username-box" >
					<view class="username-img-box" @tap="clickPhoto(item.landlordId)">
						<image class="username-img" :src="shortHttp+item.luMainImageUrl" ></image>
					</view>
					<view class="username-title-box">
						<view class="username-house-title">{{item.luTitle}}</view>
						<view class="comment">
							<view class="lightning-box">
								<i class="iconfont  lightning-icon">&#xe6b9;</i>
								<text>速顶</text>
							</view>
							<view class="comment-on-box">
								<i class="iconfont comment-on-icon">&#xe665;</i>
								<text>{{item.luComments}}条点评</text>
							</view>
						</view>
					</view>
				</view>
				<view class="price">
					&yen;<text class="specific-price">{{item.showPrice.price}}</text>起/晚
				</view>
				<view class="icon-box" @tap="onCollect(item.luId,i)">
					<i class="iconfont" :class="item.isFavorite?'love-icon-red':'love-icon'">&#xe63e;</i>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import mpvuePicker from './mpvue-picker/mpvuePicker';
import mpvueCityPicker from './components/mpvue-citypicker/mpvueCityPicker.vue'
import { shortHttp } from "../../common/requestUrl.json"; //引入接口文件
import {request} from '../../common/request.js' // 封装的带有token的请求方法
	export default{
		components: {
      mpvuePicker,
      mpvueCityPicker
  	},
		data () {
			return {
				shortHttp,
				pickerSingleArray: [{
                        label: '中国',
                        value: 1
                    },
                    {
                        label: '俄罗斯',
                        value: 2
                    },
                    {
                        label: '美国',
                        value: 3
                    },
                    {
                        label: '日本',
                        value: 4
                    }
								],
								mulLinkageTwoPicker: cityData,
                cityPickerValueDefault: [0, 0, 1],
                themeColor: '#007AFF',
                pickerText: '',
                mode: '',
                deepLength: 1,
                pickerValueDefault: [0],
                pickerValueArray:[]
			}
		},
		props: ["circumList"],
		methods:{
			// 点击图片跳转页面查看房间详情
			clickDetails(id){
				uni.navigateTo({
					url:`/pages/particulars/particulars?id=${id}`
				})
			},
			// 点击头像携带房东唯一id跳转到房东介绍
			clickPhoto(id){
				console.log(id);
				uni.navigateTo({
					url:`/pages/landlord_introduced/landlord_introduced?id=${id}`
				})
			},
			onCollect(id,index){
				// console.log("收藏:",id);
				// console.log("哪一个列表:",index);
				let coll = !this.circumList[index].isFavorite //获取原本的收藏值并取反
				this.$set(this.circumList[index],'isFavorite',coll) //更改
				console.log(request);
				request({
					url:'/wap/api/my.php?action=favoriteClass',
					success: function(res) {
						console.log("分组",res);
						
					}
				})
			},
			onCancel(e) {
                console.log(e)
            },
            // 单列
            showSinglePicker() {
                this.pickerValueArray = this.pickerSingleArray
                this.mode = 'selector'
                this.deepLength = 1
                this.pickerValueDefault = [0]
                this.$refs.mpvuePicker.show()
            },
		}
	}
</script>

<style scoped lang="scss">
	.container-box{
		width: 100%;
		text-align: center;
		padding: 42upx 30upx 30upx 30upx;
		box-sizing: border-box;
		.title-box{
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			.line-left{
				width: 80upx;
				height: 2upx;
				border-bottom: 1px solid #d7d7d7;
				margin-right: 40upx;
			}
			.line-right{
				width: 80upx;
				height: 2upx;
				border-bottom: 1px solid #d7d7d7;
				margin-left: 40upx;
			}
			.title-font{
				font-weight:bold; 
				font-size: 20px;
			}
		}
		.subtitle{
			font-size: 12px;
			color: #9e9e9e;
			margin: 22upx;
		}
		.recommend-box{
			width: 100%;
			margin-top: 40upx;
			.list-box{
				width: 100%;
				height: 634upx;
				position: relative;
				.list-img{
					width: 100%;
					height: 460upx;
				}
				.username-box{
					width: 100%;
					height: 174upx;
					padding: 0 30upx 0 30upx;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					.username-img-box{
						width: 104upx;
						height: 104upx;
						border-radius: 50%;
						.username-img{
							width: 104upx;
							height: 104upx;
							border-radius: 50%;
						}
					}
					.username-title-box{
						margin-left: 34upx;
						.username-house-title{
							font-size: 14px;
							text-align:left;
							font-weight: bold;
						}
						.comment{
							font-size: 14px;
							display: flex;
							flex-direction: row;
							.lightning-box{
								margin-right: 20upx;
								color: #a4a4a4;
								.lightning-icon{
									color: #d5efec;
									font-size: 18px;
								}
							}
							.comment-on-box{
								color: #a4a4a4;
								.comment-on-icon{
									color: #cccccc;
									font-size: 18px;
								}
							}
						}
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
					bottom: 174upx;
					left: 0;
					.specific-price{
						font-size: 18px;
					}
				}
				.icon-box{
					width: 60upx;
					height: 60upx;
					color: #fff;
					background-color: rgba(0,0,0,.7);
					border-radius: 50%;
					line-height: 60upx;
					text-align: 60upx;
					position: absolute;
					top: 30upx;
					right:30upx;
					.love-icon{
						font-size: 30upx;
					}
					.love-icon-red{
						font-size: 30upx;
						color: #F8070E;
					}
				}
			}
		}
	}
</style>
