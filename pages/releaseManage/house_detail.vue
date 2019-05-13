<template>
	<view class="house_detail_page">
		<view class="house_status">
			未完成
		</view>
		<view class="house_detail_form">
			<view class="form_item" @tap="pageTo('house_basic_info/house_basic_info')">
				<view class="label">基本信息</view>
				<view class="ipt">
					<view class="empty" v-if="!basicComplete">未完成</view>
					<view class="data_box" v-else>完成</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="pageTo('bed_info/bed_info')">
				<view class="label">床铺信息</view>
				<view class="ipt">
					<view class="empty" v-if="!bedComplete">未完成</view>
					<view class="data_box" v-else>完成</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="pageTo('house_describe/house_describe')">
				<view class="label">房间描述</view>
				<view class="ipt">
					<view class="empty" v-if="!houseDescComplete">未完成</view>
					<view class="data_box" v-else>完成</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="pageTo('house_facilities/house_facilities')">
				<view class="label">配套设施</view>
				<view class="ipt">
					<view class="empty" v-if="!facilitiesComplete">未完成</view>
					<view class="data_box" v-else>完成</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="pageTo('price_rule/price_rule')">
				<view class="label">价格规则</view>
				<view class="ipt">
					<view class="empty" v-if="!priceComplete">未完成</view>
					<view class="data_box" v-else>完成</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="pageTo('room_photograph/room_photograph')">
				<view class="label">房间照片</view>
				<view class="ipt">
					<view class="empty" v-if="!pictureComplete">未完成</view>
					<view class="data_box" v-else>完成</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="editRentType()">
				<view class="label">出租类型</view>
				<view class="ipt">
					<view class="empty" v-if="!houseInfo.leasetype">未完成</view>
					<view class="data_box" v-if="houseInfo.leasetype">
						<text v-if="houseInfo.leasetype==='1'">整套房屋</text>
						<text v-if="houseInfo.leasetype==='2'">独立房间</text>
						<text v-if="houseInfo.leasetype==='3'">合住房间</text>
					</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="editLocal()">
				<view class="label">房源地址</view>
				<view class="ipt">
					<view class="empty" v-if="!houseInfo.xz_local">未完成</view>
					<view class="data_box" v-else>完成</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="content">
					我已经阅读并同意
					<text>《房东规则》</text>
					<text>《房源上线标准》</text>
				</view>
				<view class="ipt">
					<switch class="o-switch" color="#F05B72" :checked="isAgree" @change="agreeChange"/>
				</view>
			</view>
		</view>
		<view class="bottom_wrap">
			<view class="del_house" @tap="deleteHouse()">删除房源</view>
		</view>	
		<button class="release_btn my-btn-block"  :class="{'dis_btn':!isReleaseHouse}">马上发布</button>
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
	import helper from '../../common/helper.js'
	import {
		shortHttp	
	} from '../../common/requestUrl.json'
	export default {
		data() {
			return {
				pageType: '', // 页面进入的类型 add添加
				houseInfo: {}, // 当前房屋的信息
				isDeling: false, // 是否正在删除房源
				isAgree: false, // 是否同意发布规章
				basicComplete: false, // 基本信息是否完成
				bedComplete:false, // 床铺信息是否完成
				houseDescComplete:false, // 房源描述是否完成
				facilitiesComplete:false, // 配套设施是否完成
				priceComplete:false,// 价格规则是否完成
				pictureComplete:false, // 房源图片是否完成
			}
		},
		onLoad(e) {
			if (e.type) {
				this.pageType = e.type;
			}
		},
		onShow() {
			this.houseInfo = this.releaseObj;
			this.checkoutHouseInfo();
		},
		onBackPress(options) {
		
			// console.log(options)
		},
		computed: {
			...mapState(['releaseObj','isEditReleaseInfo']),
			// 判断是否可以发布房源
			isReleaseHouse:{
				get(){
					if(!this.isAgree || !this.basicComplete || !this.bedComplete || !this.houseDescComplete || !this.facilitiesComplete || !this.priceComplete || !this.pictureComplete){
						return false;
					} else {
						return true;
					}
				}
			}
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus']),
			// 页面跳转
			pageTo(page, par) {
				let url = '';
				if (par) {
					const params = JSON.stringify(par);
					url = '/pages/releaseManage/' + page + '?param' + params;
				} else {
					url = '/pages/releaseManage/' + page;
				}
				uni.navigateTo({
					url: url
				})
			},
			// 切换是否同意发布规则
			agreeChange(e){
				this.isAgree = e.detail.value;
			},
			// 验证房源信息是否完整
			checkoutHouseInfo() {
				const id = this.releaseObj.id;
				const _this = this;
				request({
					url: '/wap/api/fangdong.php?action=checkHouseInfo&house_id=' + id,
					success: (res) => {
						if (res.data.status === 'success') {
							const _data = res.data.content;
							_this.basicComplete = _data.simple === 1?true:false;
							_this.bedComplete = _data.bed=== 1?true:false;
							_this.houseDescComplete = _data.description=== 1?true:false;
							_this.facilitiesComplete = _data.facilities=== 1?true:false;
							_this.priceComplete = _data.money=== 1?true:false;
							_this.pictureComplete = _data.picture=== 1?true:false;
						} else {
							helper.layer('验证房源信息失败')
						}
					},
					complete: () => {
					}
				})
			},
			// 编辑出租类型 
			editRentType() {
				uni.navigateTo({
					url: '/pages/releaseManage/rent_type?type=edit'
				})
			},
			// 编辑地址
			editLocal() {
				uni.navigateTo({
					url: '/pages/releaseManage/local_set?type=edit'
				})
			},

			// 删除房源
			deleteHouse() {
				if (this.isDeling) return;
				const _this = this;
				const id = _this.houseInfo.id;
				uni.showModal({
					title: '删除',
					content: '是否要删除该房源',
					confirmText: '删除',
					confirmColor: '#F05B72',
					success: function(res) {
						_this.isDeling = true;
						if (res.confirm) {
							uni.showLoading({
								mask: true,
								title: '删除中...'
							})
							request({
								url: '/wap/api/fangdong.php?action=destroyHouse&house_id=' + id,
								success: (res) => {
									if (res.data.status === 'success') {
										uni.hideLoading();
										_this.editReleaseInfoStatus(true);
										uni.navigateBack({
											delta: 1,
										})
									} else {
										helper.layer(res.data.errorMsg)
									}
								},
								complete: () => {
									_this.isDeling = false
								}
							})
						} else if (res.cancel) {

						}
					}
				});

			},
			// 获取信息完成状态

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

	.house_detail_page {
		box-sizing: border-box;
		padding: 20upx 30upx;
		min-height: 100%;

		.house_status {
			box-sizing: border-box;
			width: 100%;
			height: 100upx;
			line-height: 100upx;
			border-radius: 12upx;
			background: #ffeeee;
			color: #f05b72;
			font-size: 36upx;
			text-align: center;
		}

		.house_detail_form {
			box-sizing: border-box;
			background: #FFFFFF;
			margin-top: 20upx;

			.form_item {
				box-sizing: border-box;
				width: 100%;
				min-height: 100upx;
				display: flex;
				align-items: center;
				flex-direction: row;
				border-bottom: 1px solid #eaeaea;

				.label {
					font-size: 32upx;
				}

				.content {
					box-sizing: border-box;
					padding: 20upx 30upx 20upx 0;
					font-size: 28upx;
					color: #aaaaaa;

					>text {
						color: #333333;
					}
				}

				.ipt {
					box-sizing: border-box;
					height: 100%;
					flex-grow: 1;
					display: flex;
					flex-direction: row-reverse;
					align-items: center;
					font-size: 28upx;

					input {
						text-align: right;
						font-size: 28upx;
					}

					.empty {
						color: $theme-color;
						font-size: 32upx;
					}

					.data_box {
						font-size: 32upx;
						color: #444444;
					}
				}

				.after_icon {
					width: 30upx;
					display: flex;
					justify-content: center;
					align-items: center;

					.iconfont {
						font-size: 28upx;
						color: #cccccc;
					}
				}
			}
		}

		.bottom_wrap {
			box-sizing: border-box;
			width: 100%;
			height: 80upx;
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: center;

			.del_house {
				color: #aaaaaa;
				font-size: 28upx;
				transition: all 0.1s;

				&:active {
					color: #cccccc;
				}
			}
		}

		.release_btn {
			margin-top: 20upx;
		}
	}
</style>
