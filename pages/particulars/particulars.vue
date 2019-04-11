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
		<!-- <contactRoomDoor/> -->
		<view class="container-contact-box">
		<view class="contact-box">
			<view class="title">{{lodgeUnitName}}</view>
			<view class="comment">
				<view class="lightning-box">
					<i class="iconfont  lightning-icon">&#xe6b9;</i>
					<text>速顶</text>
				</view>
				<view class="comment-on-box">
					<i class="iconfont comment-on-icon">&#xe665;</i>
					<text>{{score}}条点评</text>
				</view>
			</view>
			<view class="img-box">
				<image class="img" :src="http+usernamePhoto"></image>
			</view>
			<view class="autonym">
				<view class="name">{{username}}</view>
				<view class="attestation">{{attestation}}</view>
				<button class="mini-btn" type="primary" size="mini">
					<i class="iconfont contact-the-landlord-icon">&#xe612;</i>
					联系房东
				</button>
			</view>
		</view>
		<view class="housing-information-box">
			<view class="house-classifieds">
				<i class="iconfont house-icon">&#xe61b;</i>
				<view>{{leaseType}}</view>
				<view class="font-color">{{area}}</view>
				<view class="font-color">{{houseType}}</view>
			</view>
			<view class="house-classifieds">
				<i class="iconfont house-icon">&#xe606;</i>
				<view>宜住{{bedNum}}人</view>
			</view>
			<view class="house-classifieds">
				<i class="iconfont house-icon">&#xe61f;</i>
				<view>{{bedNumTip}}</view>
			</view>
		</view>
		<!-- 自定义组件 -->
		<house_map :lat="latitude" :lng="longitude"></house_map>
		<!-- <roomDescription></roomDescription> -->
		<view class="cantainer-description-box">
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
				<view class="list-box">
					<text class="left">可租房态</text>
					<text class="right">查看日历</text>
				</view>
				<view class="list-box">
					<text class="left">交易规则</text>
					<text class="right">查看</text>
				</view>
				<view class="list-box">
					<text class="left">是否允许加客</text>
					<text class="right" style="color:#B8B8B8">{{addTenant}}</text>
				</view>
				<view class="list-box">
					<text class="left">在线收取押金</text>
					<text class="right" style="color:#B8B8B8">{{cashplege}}</text>
				</view>
				<view class="list-box">
					<text class="left">被单更换</text>
					<text class="right" style="color:#B8B8B8">{{sheetChange}}</text>
				</view>
				<view class="list-box">
					<text class="left">卫生间</text>
					<text class="right" style="color:#B8B8B8">{{toilet}}</text>
				</view>
				<view class="list-box">
					<text class="left">最少入住天数</text>
					<text class="right" style="color:#B8B8B8">{{minDays}}</text>
				</view>
				<view class="list-box">
					<text class="left">最多入住天数</text>
					<text class="right" style="color:#B8B8B8">{{maxDays}}</text>
				</view>
				<view class="list-box">
					<text class="left">是否接待境外人士</text>
					<text class="right" style="color:#B8B8B8">{{foreigner}}</text>
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
								<view>{{v.user.realname}}</view>
								<view class="check">{{v.comment_time}}</view>
							</view>
							<img class="username-photo" :src="v.user.userpic?(http+v.user.userpic):'../../static/images/meitu3.jpg'" alt="用户头像">
							<!-- <img class="username-photo" v-else src="../../static/images/meitu3.jpg" alt="用户头像"> -->
						</view>
						<text style="font-size:14px;">
							{{v.comment}}
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
		<supportingFacility :facility="facility"></supportingFacility>
		<unsubscribeRules></unsubscribeRules>
		
	</view>
		<button class="mini-btn" type="primary">
				立即预定
		</button>
	</view>
	</view>
</template>

<script>
	import house_map from '../../components/particulars/map.vue' //地图组件
	import roomDescription from '../../components/particulars/room-description.vue' //房间详情组件
	import uniRate from "../../components/particulars/uni-rate/uni-rate.vue" //引用评分插件
	import supportingFacility from "../../components/particulars/supporting-facility.vue" //引用配套设施插件
	import unsubscribeRules from '../../components/particulars/unsubscribe-rules' 
	import { shortHttp,room } from "../../common/requestUrl.json"; // 接口文件
	
	export default {
		components:{house_map,uniRate,supportingFacility,unsubscribeRules},
		data () {
			return {
				commentList:null, //评论数据
				imgArray:null, // 图片的数据
				price:null, // 房间价格
				http:shortHttp, // 域名
				numberIndex:1, // 当前图片index
				lodgeUnitName:'', //房屋标题
				area:'', // 房屋面积
				bedNumTip:'', // 床
				bedNum:'', // 宜住多少人
				leaseType:'', //是否整套出租
				houseType:'', // 几室几厅
				username:'', // 房东名字
				usernamePhoto:'', // 房东头像
				score:'', // 多少点评
				latitude:null,
				longitude:null,
				attestation:'实名认证', // 是否实名认证
				facility:null, // 房间设备的数组
				addTenant:'', // 是否允许加客
				cashplege:'', // 押金
				sheetChange:'', // 被单更换情况
				toilet:'', // 卫生间
				minDays:'',//最少入住天数
				maxDays:'',//最多入住天数
				foreigner:'', //是否接待外客

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
					_that.lodgeUnitName = datas.luBase.lodgeUnitName // 房屋标题
					_that.area = datas.detail.area // 房屋面积
					_that.bedNumTip = datas.bed.bedNumTip // 床
					_that.bedNum = datas.bed.bedNum
					_that.leaseType = datas.detail.leaseType
					_that.houseType = datas.detail.houseType
					_that.latitude = datas.cityInfo.latitude
					_that.longitude = datas.cityInfo.longitude
					_that.usernamePhoto = datas.landlord.headImageUrl
					_that.username = datas.landlord.landlordName
					if (!datas.landlord.landlordPersonRole) {
						_that.attestation = '未实名认证'
					}
					_that.score = datas.landlord["-Score"]
					_that.facility = datas.facility
					_that.addTenant = datas.detail.addTenant
					_that.cashplege = datas.detail.cashplege
					_that.sheetChange = datas.detail.sheetChange
					_that.toilet = datas.detail.toilet
					_that.minDays = datas.detail.minDays
					_that.maxDays = datas.detail.maxDays
					_that.foreigner = datas.detail.foreigner
					_that.commentList = datas.comment.content
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
	.container-contact-box{
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
		.mini-btn{
			height: 80upx;
			line-height: 80upx;
			background-color: #ef5b72;
			font-size: 16px;
			border: 1px solid #ef5b72;
			color: #fff;
      margin-top: 30upx;
		}
	}
	.cantainer-description-box{
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
	}
</style>
