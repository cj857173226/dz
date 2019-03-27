<template>
	<view class="cantainer">
		<view class="title">房间描述</view>
		<view class="introduce">同学，祝贺你喜提彩蛋~
		或许你们还在犹豫是否加入，我会坦诚的告诉你我们超酷；
		在这里大家都用无人车代步，AI音箱不仅播放还可以交互；
		人工智能是发展的核心技术，做自己让未来不只领先几步；
		在这里做自己，欢迎来到百度！</view>
		<view class="btn-box">
			<button class="mini-btn btn-the-globe" type="primary" size="mini">
				查看全部描述
			</button>
		</view>
		<image class="meinv-img" src="../../static/images/landlordguide/meinv.jpg"></image>
		<view class="details-of-the-room-box">
			<view class="details-of-the-room-title">房间详情</view>
			<view class="operation-list-box">
				<view class="list-box" v-for="(item,index) in operationList" :key="index">
					<text class="left">{{item.left}}</text>
					<text class="right">{{item.right}}</text>
				</view>
			</view>
		</view>
		<view class="tenant-review-box">
			<view class="tenant-review">房客点评</view>
			<view class="grades-box">
				<view class="grades-contenr">
					<!-- 星星评分组件 -->
					<uni-rate size="20" value="4"></uni-rate>
				</view>
				<view class="discuss-box">
					<view v-for="(v,i) in commentList" :key="i" class="criticism">
						<view class="username-img-box">
							<view class="username-check">
								<view>{{v.username}}</view>
								<view class="check">{{v.check}}</view>
							</view>
							<img class="username-photo" :src="v.imgUrl" alt="用户头像">
						</view>
						<text style="font-size:14px;">
							{{v.text}}
						</text>
					</view>
					<view class="btn-box">
						<button class="mini-btn btn-the-globe" type="primary" size="mini">
							<!-- <i class="iconfont contact-the-landlord-icon">&#xe607;</i> -->
							查看全部评论
						</button>
					</view>
					<image class="show-img" src="../../static/images/landlordguide/banner4.jpg" alt="展示图片"></image>
				</view>
				
			</view>
		</view>
		<supportingFacility></supportingFacility>
		<unsubscribeRules></unsubscribeRules>
	</view>
</template>

<script>
	import uniRate from "./uni-rate/uni-rate.vue" //引用评分插件
	import supportingFacility from "./supporting-facility.vue" //引用配套设施插件
	import unsubscribeRules from './unsubscribe-rules' //房间详情组件
	export default{
		// 组成组件
		components: {uniRate,supportingFacility,unsubscribeRules},
		data(){
			return{
				operationList:[
					{left:'可租房态',right:'查看日历'},
					{left:'交易规则',right:'查看'},
					{left:'是否允许加客',right:'不允许'},
					{left:'在线收取押金',right:'￥300'},
					{left:'被单更换',right:'每客一换'},
					{left:'卫生间',right:'独立卫生间'},
					{left:'最少入住天数',right:'1'},
					{left:'最多入住天数',right:'不限'},
					{left:'是否接待境外人士',right:'接待'},
				],
				commentList:[
					{username:'nainjai',check:'2019.2入住',imgUrl:'../../static/images/landlordguide/banner4.jpg',text:'非常邦德房间，我的天呀，这是什么豪华逃禅'},
					{username:'nainjai',check:'2019.2入住',imgUrl:'../../static/images/landlordguide/banner7.jpg',text:'非常邦德房间，我的天呀，这是什么豪华逃禅'}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cantainer{
		width: 100%;
		margin-top: 10upx;
		background-color: #fff;
		.title{
			font-weight: bold;
			padding-top: 36upx;
			text-align: center;
		}
		.introduce{
			width: 610upx;
			height: 136upx;
			text-align: center;
			text-overflow: ellipsis; 
			overflow: hidden;
			padding: 44upx 46upx;
		}
		.btn-box{
			text-align: center;
			margin-top: 18upx;
			.mini-btn{
						height: 80upx;
						line-height: 80upx;
						background-color: #fff;
						font-size: 12px;
						border: 1px solid #ef5b72;
						color: #ef5b72;
						margin: 43upx 0 28upx 0;
						.contact-the-landlord-icon{
							font-size: 14px;
							color: #ef5b72;
							margin-right: 10upx;
						}
					}
		}
		.meinv-img{
			width: 100%;
			height: 364upx;
		}
		.details-of-the-room-box{
			width: 100%;
			margin-top: 48upx;
			.details-of-the-room-title{
				font-weight: bold;
				text-align: center;
			}
			.operation-list-box{
				width: 100%;
				padding: 40upx;
				box-sizing: border-box;
				.list-box{
					width: 100%;
					height: 65upx;
					font-size: 14px;
					border-bottom: 1px #ccc solid;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.left{
						color: #b9b9b9;
					}
					.right{
						color: #ef5b72;
					}
				}
			}
		}
		.tenant-review-box{
			width: 100%;
			.tenant-review{
				text-align: center;
				font-weight: bold;
			}
			.grades-box{
				width: 100%;
				box-sizing: border-box;
				padding: 40upx;
				.grades-contenr{
					width: 100%;
					height: 82upx;
					border-radius: 10upx;
					background-color: #fdf6e5;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.discuss-box{
					margin-top: 30upx;
					text-overflow: ellipsis; 
					overflow: hidden;
					.criticism{
						width: 100%;
						height: 184upx;
						border-bottom: 1px solid #ccc;
						.username-img-box{
							width: 100%;
							display: flex;
							justify-content: space-between;
							margin-bottom: 30upx;
							margin-top: 20upx;
							.username-photo{
								width: 76upx;
								height: 76upx;
								border-radius: 50%;
							}
							.username-check{
								font-size: 14px;
								.check{
									font-size: 12px;
									color: #d6d6d6;
								}
							}
						}
					}
					.btn-box{
			text-align: center;
			margin-top: 18upx;
			.show-img{
					width: 100%;
					height: 364upx;
				}
			.mini-btn{
						height: 80upx;
						line-height: 80upx;
						background-color: #fff;
						font-size: 12px;
						border: 1px solid #ef5b72;
						color: #ef5b72;
						.contact-the-landlord-icon{
							font-size: 14px;
							color: #ef5b72;
							margin-right: 10upx;
						}
					}
		}
				
				}
			}
		}
	}
</style>
