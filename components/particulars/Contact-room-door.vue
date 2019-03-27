<template>
	<view class="container">
		<view class="contact-box">
			<view class="title">后海胡同里咖啡厅风格小白楼</view>
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
			<view class="img-box">
				<image class="img" src="../../static/images/landlordguide/touxiang.jpg"></image>
			</view>
			<view class="autonym">
				<view class="name">吴秀波</view>
				<view class="attestation">实名认证</view>
				<button class="mini-btn" type="primary" size="mini">
					<i class="iconfont contact-the-landlord-icon">&#xe612;</i>
					联系房东
				</button>
			</view>
		</view>
		<view class="housing-information-box">
			<view class="house-classifieds">
				<i class="iconfont house-icon">&#xe61b;</i>
				<view>整套出租</view>
				<view class="font-color">房屋面积：<text>25平米</text></view>
				<view class="font-color">2室1厅1卫1厨</view>
			</view>
			<view class="house-classifieds">
				<i class="iconfont house-icon">&#xe606;</i>
				<view>宜住4人</view>
			</view>
			<view class="house-classifieds">
				<i class="iconfont house-icon">&#xe61f;</i>
				<view>共2张</view>
			</view>
		</view>
		<!-- 自定义组件 -->
		<house_map></house_map>
		<roomDescription></roomDescription>
	</view>
</template>

<script>
	import house_map from './map.vue' //地图组件
	import roomDescription from './room-description.vue' //房间详情组件
	
	export default{
		components:{
			house_map,
			roomDescription
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		// height: 556upx;
		padding: 30upx;
		box-sizing: border-box;
		.contact-box{
			// height: 100%;
			height: 556upx;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			align-items: center;
			.title{
				margin-top: 42upx;
				font-weight: bold;
			}
			.comment{
				margin-top: 34upx;
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
			.img-box{
				width: 120upx;
				height: 120upx;
				border-radius: 50%;
				margin-top: 30upx;
				.img{
					width: 120upx;
					height: 120upx;
					border-radius: 50%;
				}
			}
			.autonym{
				text-align: center;
				margin-top: 20upx;
				.name{
					font-size: 14px;
					text-align: center;
				}
				.attestation{
					font-size: 12px;
					color: #a9a9a9;
					text-align: center;
					margin-bottom: 20upx;
				}
				.mini-btn{
					background-color: #fff;
					font-size: 18px;
					border: 1px solid #ef5b72;
					color: #ef5b72;
					.contact-the-landlord-icon{
						font-size: 18px;
						color: #ef5b72;
						margin-right: 10upx;
					}
				}
			}
		}
		.housing-information-box{
			width: 100%;
			height: 220upx;
			background-color: #fff;
			margin-top: 10upx;
			display: flex;
			justify-content: space-between;
			.house-classifieds{
				width: 230upx;
				font-size: 14px;
				text-align: center;
				margin-top: 30upx;
				.house-icon{
					font-size: 24px;
					color: #b8b8b8;
				}
				.font-color{
					color:#c8c8c8;
					font-size: 12px;
				}
			}
		}
	}
</style>
