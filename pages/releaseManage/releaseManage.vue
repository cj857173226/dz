<template>
	<view class="releaseManage_page">
		<view class="house_list" v-if="listData.length>0">
			<view class="list_item" v-for="(item,index) in listData" :key="index">
				<view class="item_head">
					<view class="hous_local">
						<text class="iconfont icon-dizhi-01 "></text>
						{{item.xz_local}}
					</view>
					<button class="modify_local_btn">修改地址</button>
				</view>
				<view class="item_body">
					<img class="house_pic" v-if="item.titlepic!==''" :src="item.titlepic" alt="">
					<view class="no_pic" v-if="item.titlepic===''">无房源图片</view>
					<view class="rent-status" v-if="item.is_complete== 0">未完成发布</view>
					<view class="rent-status" v-if="item.is_complete == 1">
						<view v-if="item.status== -1">待发布</view>
						<view v-else-if="item.status== 0">待审核</view>
						<view v-else-if="item.status== 1">已上架</view>
						<view v-else-if="item.status== 2">已下架</view>
					</view>
				</view>
				<view class="item_foot">
					<view class="foot_left">
						<view class="house_title">{{item.title}}</view>
						<view class="rent-type">
							<view v-if="item.leasetype == 1">整套出租</view>
							<view v-else-if="item.leasetype == 2">独立房间</view>
							<view v-else-if="item.leasetype == 3">合住房间</view>
						</view>
					</view>
					<button class="house-handle-btn lower-shelf-btn" v-if="item.is_complete ==1 && item.status== 1">下架</button>
					<button class="house-handle-btn upper-shelf-btn" v-if="item.is_complete ==0 && item.status== 2">上架</button>
					<button class="house-handle-btn house-update-btn" v-if="item.is_complete ==0 && item.status== -1" @tap.stop="houseDetail(item)">修改</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData: [{
					title: '这是一个大房子啊', //房屋标题
					titlepic: '/static/images/landlordguide/banner1.jpg', // 标题配图
					// titlepic: '',
					xz_zb: '', //坐标,
					xz_province: '', //省
					xz_city: '', //市
					xz_district: '', //区
					xz_address: '', //详细地址
					xz_number: '', //门牌号
					xz_local: '北京东城区某某街,200号', // 地址(全)
					leasetype: 1, //出租类型：1：整套出租；2：独立房间；3：合住房间
					tantnum: 10, //宜居人数
					roomtype_shi: 1, //房屋类型，室
					roomtype_ting: 1, //房屋类型，厅
					roomtype_wei: 1, //房屋类型，卫
					roomtype_chu: 1, //房屋类型，厨
					roomtype_yt: 1, //房屋类型，阳台
					area: 100, //房屋面积
					sameroom: 2, // 同类房源、床位、房间
					toilet: 1, // 卫生间：1，共用；2，独立
					livetogether: 1, // 是否和房东同居 1:同居 2:不同居
					bed: '', // 床位信息
					bedsheet: '', //被单更换：tenant，每客一换；day，每日一换
					roomServiceIntro: '', //个性表述
					roomRoominnerIntro: '', //内部情况
					roomLocationIntro: '', //交通情况
					roomAroundIntro: '', //周边情况
					sb_list: [], //配套家具列表
					dayrentprice: '', //每日租金
					cashpledge: '', //押金
					addtenant: '', // 是否允许附加租户
					addtionalprice: '', // 加客附加收费说明
					crvp: '', // 订金比
					crvn: '', //下单后退款安全时间,
					crva: '', //退款扣除订金天数
					minday: '', //最少入住天数
					maxday: '', //最大入住天数
					foreigner: '', //是否接受海外用户
					userule: '', //使用规则
					hiddentips: '', //隐藏提示
					pics: '', //图片信息
					renzheng: '', //认证
					addtenanttips: '', //加客费
					status: -1, // 状态
					daohang: '', //定位导航
					is_complete: 0, //是否完成信息
				}]
			};
		},
		onLoad() {
		
		},
		onShow() {
		
		},
		computed: {
		
		},
		methods: {
			houseDetail(par){
				const params = JSON.stringify(par);
				uni.navigateTo({
					url: '/pages/releaseManage/house_detail?param=' + params
				})
			}
		}
	}
</script>
<style>
	page {
		height: 100%;
	}
</style>
<style lang="scss" scoped>
	$theme-color: #F05B72;
	$back-color:#f5f6f8;

	.releaseManage_page {
		box-sizing: border-box;
		width: 100%;
		.house_list {
			box-sizing: border-box;
			width: 100%;
			padding: 30upx 20upx;
			.list_item {
				padding: 30upx 20upx;
				position: relative;
				box-sizing: border-box;
				width: 100%;
				&::after{
					position: absolute;
					content: '';
					display: block;
					height: 1px;
					left: 20upx;
					right: 20upx;
					bottom: 0;
					background: #eaeaea;
				}
				.item_head {
					box-sizing: border-box;
					width: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					margin-bottom: 20upx;

					.hous_local {
						box-sizing: border-box;
						font-size: 32upx;
						flex-grow: 1;
						width: 560upx;
						word-break: break-all;

						.iconfont {
							margin-right: 8upx;
							font-size: 32upx;
							font-weight: 800;
						}
					}

					.modify_local_btn {
						box-sizing: border-box;
						padding: 0;
						margin: 0 0 0 10upx;
						background: $theme-color;
						flex-grow: 1;
						width: 140upx;
						height: 60upx;
						line-height: 60upx;
						text-align: center;
						font-size: 24upx;
						color: #FFFFFF;

						&:active {
							opacity: 0.8;
						}
					}

				}

				.item_body {
					box-sizing: border-box;
					position: relative;
					width: 100%;
					min-height: 400upx;
					.house_pic {
						display: block;
						width: 100%;
					}

					.no_pic {
						width: 100%;
						height: 400upx;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 40upx;
						font-weight: 800;
						background: #eaeaea;
						color: #FFFFFF;
					}

					.rent-status {
						font-size: 32upx;
						position: absolute;
						bottom: 0;
						left: 0;
						padding: 20upx;
						background: rgba(0, 0, 0, 0.3);
						color: #FFFFFF;
					}
				}

				.item_foot {
					box-sizing: border-box;
					padding: 12upx 0;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.foot_left{
						flex-grow: 1;
						.house_title{
							font-size:36upx;
							color: $theme-color;
							margin-bottom: 10upx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.rent-type{
							color: #aaaaaa;
							font-size: 28upx;
						}
					}
					.house-handle-btn{
						box-sizing: border-box;
						padding: 0;
						margin: 0 0 0 20upx;
						background: #FFFFFF;
						border: 1px solid $theme-color;
						width: 140upx;
						height: 60upx;
						line-height: 60upx;
						text-align: center;
						font-size: 28upx;
						color: $theme-color;
					}
				}
			}
		}
	}
</style>
