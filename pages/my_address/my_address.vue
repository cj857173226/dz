<template>
	<view class="address-page">
		<scroll-view class="adress-list-wrap" scroll-y=true>
			<view class='adress-list' v-if="addressList.length>0">
				<view class="adress-item" v-for="(item,index) in addressList" :key="index">
					<view class="user-info">{{item.truename}}&nbsp;{{item.phone}}</view>
					<view class="loca-ifon">{{item.local}}</view>
					<view class="status-wrap">
						<text class="iconfont icon-icon-edit edit-btn" @tap="editAddress(item)">编辑</text>
						<view class="default-address" v-if="item.isdefault == 1">默认地址</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import helper from '../../common/helper.js'
	import {
		request
	} from '../../common/request.js'
	export default {
		data() {
			return {
				addressList: [{
						address: "走走走",
						addressid: "18",
						city: "呼和浩特市",
						district: "新城区",
						isdefault: "0",
						phone: "18280172253",
						province: "内蒙古",
						truename: "陈",
						local: '北京市 东城区',
					},
					{
						address: "走走走",
						addressid: "17",
						city: "呼和浩特市",
						district: "新城区",
						isdefault: "0",
						phone: "18280172253",
						province: "内蒙古",
						truename: "陈",
						local: '北京市 东城区',
					},
					{
						address: "走走走",
						addressid: "18",
						city: "呼和浩特市",
						district: "新城区",
						isdefault: "0",
						phone: "18280172253",
						province: "内蒙古",
						truename: "陈",
						local: '北京市 东城区',
					},
					{
						address: "走走走",
						addressid: "17",
						city: "呼和浩特市",
						district: "新城区",
						isdefault: "0",
						phone: "18280172253",
						province: "内蒙古",
						truename: "陈",
						local: '北京市 东城区',
					},
					{
						address: "走走走",
						addressid: "18",
						city: "呼和浩特市",
						district: "新城区",
						isdefault: "0",
						phone: "18280172253",
						province: "内蒙古",
						truename: "陈",
						local: '北京市 东城区',
					},
					{
						address: "走走走",
						addressid: "17",
						city: "呼和浩特市",
						district: "新城区",
						isdefault: "0",
						phone: "18280172253",
						province: "内蒙古",
						truename: "陈",
						local: '北京市 东城区',
					},
					{
						address: "走走走",
						addressid: "18",
						city: "呼和浩特市",
						district: "新城区",
						isdefault: "0",
						phone: "18280172253",
						province: "内蒙古",
						truename: "陈",
						local: '北京市 东城区',
					},
					{
						address: "走走走",
						addressid: "17",
						city: "呼和浩特市",
						district: "新城区",
						isdefault: "0",
						phone: "18280172253",
						province: "内蒙古",
						truename: "陈",
						local: '北京市 东城区',
					}
				],
			};
		},
		onLoad() {
			this.getAddressList()
		},
		onShow() {
			if(this.isEditAddress){
				this.getAddressList()
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.text === '添加') {
				this.addAddress()
			}
		},
		computed: {
			...mapState(['isEditAddress'])
		},
		methods: {
			...mapMutations(['addressEditStatus']),
			editAddress(par) {
				this.addressEditStatus(false)
				const params = JSON.stringify(par);
				uni.navigateTo({
					url: '/pages/my_address/edit_address?param=' + params
				})
			},
			addAddress() {
				this.addressEditStatus(false)
				uni.navigateTo({
					url: '/pages/my_address/add_address'
				})
			},
			// 获取收货地址列表
			getAddressList() {
				const _this = this;
				uni.showLoading({
					title: '加载中',
					mask: false,
				});
				request({
					url: '/wap/api/my.php?action=AddressesList',
					success: function(res) {
						if (res.data.status === 'success') {
							let list = res.data.content;
							if (list.length > 0) {
								_this.addressList = list;
							} else {
								_this.addressList = [];
							}
						} else {
							helper.layer(res.data.errorMsg)
						}
					},
					fail: function() {
					},
					complete: function(res) {
						if(res.data.status === 'success'){
							uni.hideLoading()
						} else{
							helper.layer('获取地址列表失败')
						}
					}
				})
			}
		}
	}
</script>
<style>
	page {
		height: 100%;
		background: #f5f6f8;
	}
</style>

<style lang="scss" scoped>
	$theme-color: #F05B72;
	$back-color:#f5f6f8;

	.address-page {
		box-sizing: border-box;
		padding: 30upx;
		height: 100%;

		.adress-list-wrap {
			height: calc(100%);

			.adress-list {
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				background: #ffffff;
				padding: 0 20upx;
				border-radius: 12upx;

				.adress-item {
					box-sizing: border-box;
					padding: 16upx 0;
					display: flex;
					flex-direction: column;
					border-bottom: 1px solid #eaeaea;

					.user-info {
						box-sizing: border-box;
						width: 100%;
						font-size: 16px;
						font-weight: 800;
						margin-bottom: 10upx;
						// 						overflow: hidden;
						// 						text-overflow: ellipsis;
						// 						white-space:nowrap;
					}

					.loca-ifon {
						width: 100%;
						font-size: 14px;
						color: #aaaaaa;
						margin-bottom: 10upx;
					}

					.status-wrap {
						width: 100%;
						display: flex;
						flex-direction: row-reverse;
						align-items: center;
						justify-content: space-between;
						font-size: 14px;

						.default-address {
							color: $theme-color;
						}

						.edit-btn {
							color: #aaaaaa;
							padding: 8upx;
							font-size: 28upx;

							&:active {
								color: #cccccc;
							}
						}
					}

					&:last-child {
						border-bottom: none;
					}
				}
			}
		}
	}
</style>
