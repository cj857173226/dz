<template>
	<view class="releaseManage_page">
		<view class="house_list" v-if="listData.length>0">
			<view class="list_item" v-for="(item,index) in listData" :key="index" @tap.stop="previewHouse(item)">
				<view class="item_head">
					<view class="hous_local">
						<text class="iconfont icon-dizhi-01 "></text>
						{{item.xz_local}}
					</view>
					<button class="modify_local_btn" @tap="editLocal(item)" v-if="item.status== -1||item.status== 2">修改地址</button>
				</view>
				<view class="item_body">
					<img class="house_pic" v-if="item.titlepic" :src="host+item.titlepic" alt="">
					<view class="no_pic" v-if="!item.titlepic">无房源图片</view>
					<view class="rent-status">{{item.state}}</view>

				</view>
				<view class="item_foot">
					<view class="foot_left">
						<view class="no_title" v-if="item.title===''">未完成发布的房源</view>
						<view class="house_title" v-else>{{item.title}}</view>
						<view class="rent-type">
							<view v-if="item.leasetype == 1">整套出租</view>
							<view v-else-if="item.leasetype == 2">独立房间</view>
							<view v-else-if="item.leasetype == 3">合住房间</view>
						</view>
					</view>
					<button class="house-handle-btn upper-shelf-btn" v-if="item.status== 0||item.status== 1" @tap.stop="editHouseInfo(item)">查看房源</button>
					<button class="house-handle-btn house-update-btn" v-if="item.status== -1||item.status== 2" @tap.stop="editHouseInfo(item)">编辑房源</button>
				</view>
			</view>
		</view>
		<view class="no_list" v-if="listData.length===0">
			暂无房源
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import {
		request
	} from '../../common/request.js'
	import helper from 'common/helper.js'
	import {
		shortHttp
	} from '../../common/requestUrl.json'
	export default {
		data() {
			return {
				host: shortHttp,
				listData: [
					// 					{
					// 						title: '', //房屋标题
					// 						titlepic: '/static/images/landlordguide/banner1.jpg', // 标题配图
					// 						// titlepic: '',
					// 						xz_zb: '', //坐标,
					// 						xz_province: '', //省
					// 						xz_city: '', //市
					// 						xz_district: '', //区
					// 						xz_address: '', //详细地址
					// 						xz_number: '', //门牌号
					// 						xz_local: '北京市直辖市东城区', // 地址(全)
					// 						leasetype: 1, //出租类型：1：整套出租；2：独立房间；3：合住房间
					// 						tantnum: '', //宜居人数
					// 						roomtype_shi: '', //房屋类型，室
					// 						roomtype_ting: '', //房屋类型，厅
					// 						roomtype_wei: '', //房屋类型，卫
					// 						roomtype_chu: '', //房屋类型，厨
					// 						roomtype_yt: '', //房屋类型，阳台
					// 						area: '', //房屋面积
					// 						sameroom: 1, // 同类房源、床位、房间
					// 						toilet: '', // 卫生间：1，共用；2，独立
					// 						livetogether: '', // 是否和房东同居 1:同居 2:不同居
					// 						bed: '', // 床位信息
					// 						bedsheet: '', //被单更换：tenant，每客一换；day，每日一换
					// 						roomServiceIntro: '', //个性表述
					// 						roomRoominnerIntro: '', //内部情况
					// 						roomLocationIntro: '', //交通情况
					// 						roomAroundIntro: '', //周边情况
					// 						sb_list: [], //配套家具列表
					// 						dayrentprice: '', //每日租金
					// 						cashpledge: '', //押金
					// 						addtenant: '', // 是否允许附加租户
					// 						addtionalprice: '', // 加客附加收费说明
					// 						crvp: '', // 订金比
					// 						crvn: '', //下单后退款安全时间,
					// 						crva: '', //退款扣除订金天数
					// 						minday: '', //最少入住天数
					// 						maxday: '', //最大入住天数
					// 						foreigner: '', //是否接受海外用户
					// 						userule: '', //使用规则
					// 						hiddentips: '', //隐藏提示
					// 						pics: '', //图片信息
					// 						renzheng: '', //认证
					// 						addtenanttips: '', //加客费
					// 						status: -1, // 状态 -1待发布，0,待审核1上架2下架
					// 						daohang: '', //定位导航
					// 						is_complete: 0, //是否完成信息
					// 					}

				],
			};
		},
		onLoad(e) {
			this.getHouseLists();
		},
		onShow() {
			if (this.isEditReleaseInfo) {
				this.getHouseLists();
			}
			this.clearReleaseInfo();
			this.editReleaseInfoStatus(false);
		},

		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				// 清空创建房源的信息
				this.clearCreateHouseInfo();
				// 发布按钮
				uni.navigateTo({
					url: '/pages/releaseManage/local_set?type=add'
				})
			}
		},

		computed: {
			...mapState(['isEditReleaseInfo']),
		},
		methods: {
			...mapMutations(['editCreateHouseInfo', 'clearCreateHouseInfo', 'editReleaseInfo', 'clearReleaseInfo',
				'editReleaseInfoStatus',
			]),
			// 获取房源列表
			getHouseLists() {
				const _this = this;
				uni.showLoading({
					mask: true,
					title: '',
				})
				request({
					url: '/wap/api/fangdong.php?action=houseList',
					method: 'GET',
					success: (res) => {
						if (res.data.status === 'success') {
							let data = res.data.content;
							data.map((item, index, self) => {
								// 这里做地址(全)拼接
								self[index]['xz_local'] = item.xz_province + item.xz_city + item.xz_district + '\xa0\xa0' + item.xz_address +
									'\xa0\xa0' + item.xz_number;
							})
							_this.listData = data;

							uni.hideLoading();
						} else {
							helper.layer()
						}
					},
					complete: () => {

					}
				})
			},
			// 编辑地址
			editLocal(par) {
				this.clearReleaseInfo();
				this.editReleaseInfo(par);
				uni.navigateTo({
					url: '/pages/releaseManage/local_set?type=edit'
				})
			},
			// 修改房屋发布信息
			editHouseInfo(par) {
				this.clearReleaseInfo();
				// 带入当前要修改的房源信息
				this.editReleaseInfo(par);
				this.editReleaseInfoStatus(false);
				uni.navigateTo({
					url: '/pages/releaseManage/house_detail'
				})
			},
			// 预览房间
			previewHouse(item) {
				const _this = this;
				const status = item.status;
				const complete = item.is_complete;
				console.log(complete,typeof complete)
				if (complete === '0') {
					uni.showModal({
						title: '',
						content: '完善房源信息后才可预览',
						confirmText: '知道了',
						showCancel:false,
						success: function(res) {
							
						}
					});
				} else {
					this.clearReleaseInfo();
					// 带入当前要修改的房源信息
					this.editReleaseInfo(item);
					this.editReleaseInfoStatus(false);
					uni.navigateTo({
						url: '/pages/releaseManage/preview_house'
					})
				}
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
		height: 100%;

		.house_list {
			box-sizing: border-box;
			width: 100%;
			padding: 30upx 20upx;

			.list_item {
				padding: 30upx 20upx;
				position: relative;
				box-sizing: border-box;
				width: 100%;

				&::after {
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
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
						overflow: hidden;
						word-break: break-all;
						color: #999999;
						font-weight: 800;

						.iconfont {
							margin-right: 8upx;
							font-size: 40upx;
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
						min-width: 220upx;
						text-align: center;
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

					.foot_left {
						flex-grow: 1;
						width: 100%;

						.house_title {
							font-size: 36upx;
							color: $theme-color;
							margin-bottom: 10upx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.no_title {
							font-size: 36upx;
							color: #333333;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.rent-type {
							color: #aaaaaa;
							font-size: 28upx;
						}
					}

					.house-handle-btn {
						box-sizing: border-box;
						padding: 0;
						margin: 0 0 0 20upx;
						background: #FFFFFF;
						border: 1px solid $theme-color;
						width: 180upx;
						height: 60upx;
						line-height: 60upx;
						text-align: center;
						font-size: 28upx;
						color: $theme-color;
					}
				}
			}
		}

		.no_list {
			box-sizing: border-box;
			width: 100%;
			height: 40%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #cccccc;
			font-weight: 800;
			font-size: 36upx;
			letter-spacing: 8upx;
		}
	}
</style>
