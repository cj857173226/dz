<template>
	<view class="container">
		<view class="title-box">
			<view class=" line-left"></view>
			<text class="title-font">周边推荐</text>
			<view class="line-right"></view>
		</view>
		<view class="subtitle">体验不一样的旅行方式</view>
		<view class="recommend-box">
			<view class="list-box">
				<image @tap="clickDetails()" class="list-img" src="../../static/images/landlordguide/banner4.jpg"></image>
				<!-- 房户信息 -->
				<view class="username-box" >
					<view class="username-img-box" @tap="clickPhoto">
						<image class="username-img" src="../../static/images/landlordguide/banner4.jpg" ></image>
					</view>
					<view class="username-title-box">
						<view class="username-house-title">后海胡同里咖啡厅风格小白楼</view>
						<view class="comment">
							<view class="lightning-box">
								<i class="iconfont  lightning-icon">&#xe6b9;</i>
								<text>速顶</text>
							</view>
							<view class="comment-on-box">
								<i class="iconfont comment-on-icon">&#xe665;</i>
								<text>0条点评</text>
							</view>
						</view>
					</view>
				</view>
				<view class="price">
					&yen;<text class="specific-price">2199</text>起/晚
				</view>
				<view class="icon-box">
					<i class="iconfont love-icon">&#xe619;</i>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		onLoad(){
			console.log(1)
		},
		methods:{
			// 点击图片跳转页面查看房间详情
			clickDetails(){
				uni.navigateTo({
					url:'/pages/particulars/particulars'
				})
			},
			// 点击头像跳转到房东介绍
			clickPhoto(){
				uni.navigateTo({
					url:'/pages/landlord_introduced/landlord_introduced'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container{
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
			background-color: #9e9e9e;
			margin-top: 40upx;
			.list-box{
				width: 100%;
				height: 460upx;
				position: relative;
				.list-img{
					width: 100%;
					height: 100%;
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
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
					.username-title-box{
						margin-left: 34upx;
						.username-house-title{
							font-weight: bold;
						}
						.comment{
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
					bottom: 0;
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
					position: absolute;
					top: 30upx;
					right:30upx;
					.love-icon{
						font-size: 40upx;
						line-height: 60upx;
						text-align: 60upx;
					}
				}
			}
		}
	}
</style>
