<template>
	<view class="check_in_page">
		<view class="add_btn" @tap="handleCheck('add')"><text class="iconfont icon-icon-test"></text>添加入住人</view>
		<scroll-view class="check_list_wrap" scroll-y>
			<view class="check_list" v-if="listData.length>0">
				<view class="check_item" v-for="(item, index) in listData" :key="index" @tap="handleCheck('edit', item)">
					<view class="user_info">
						<p class="name">{{item.name}}</p>
						<p class="id_card">身份证&nbsp;{{item._idcard}}</p>
					</view>
					<view class="after_icon"><text class="iconfont icon-right"></text></view>
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
				listData: []
			};
		},
		computed: {
			...mapState(['isEditCheckIn'])
		},
		onLoad(option) {
			this.getChckList();
		},
		onShow() {
			console.log(this.isEditCheckIn)
			if(this.isEditCheckIn === true){
				this.getChckList();
			}
			this.checkInEditStatus(false)
		},
		methods: {
			...mapMutations(['checkInEditStatus']),
			// 修改或者添加入住人信息页面
			// type ---> add : 添加   edit:修改
			handleCheck(type, par) {
				this.checkInEditStatus(false)
				let url = '';
				if (type === 'add') {
					url = '/pages/check_in/edit_check_in?type=add';
				} else if (type === 'edit') {
					const params = JSON.stringify(par);
					url = '/pages/check_in/edit_check_in?type=edit&param=' + params
				}

				uni.navigateTo({
					url: url
				})
			},
			getChckList() {
				const _this = this;
				uni.showLoading({
					title: '加载中',
					mask: false,
				});
				request({
					url: '/wap/api/my.php?action=ContactList',
					method: 'GET',
					success: function(res) {
						if (res.data.status === 'success') {
							let list = res.data.content;
							if (list.length > 0) {
								list.map((item, index, self) => {
									self[index]['_idcard'] = helper.hideIdCard(item.idcardno)
								})
								_this.listData = list;
							} else {
								_this.listData = [];
							}
						} else {
							helper.layer(res.data.errorMsg)
						}
					},
					fail: function(err) {
						helper.layer('系统异常,请稍后再试')
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

	.check_in_page {
		box-sizing: border-box;
		height: 100%;
		padding-top: 20upx;

		.add_btn {
			box-sizing: border-box;
			width: 100%;
			height: 100upx;
			background: #FFFFFF;
			line-height: 100upx;
			font-size: 16px;
			text-align: center;
			color: $theme-color;

			.iconfont {
				font-size: 16px;
				font-weight: 800;
				margin-right: 8upx;
			}

			&:active {
				color: #f4a9b5;
			}
		}

		.check_list_wrap {
			box-sizing: border-box;
			width: 100%;
			margin-top: 20upx;
			height: calc(100% - 140upx);

			.check_list {
				box-sizing: border-box;
				width: 100%;
				background: #FFFFFF;
				display: flex;
				flex-direction: column;

				.check_item {
					position: relative;
					box-sizing: border-box;
					width: 100%;
					padding: 20upx 30upx;
					height: 160upx;
					display: flex;
					flex-direction: row;


					.user_info {
						box-sizing: border-box;
						display: flex;
						flex-direction: column;
						flex-grow: 1;
						justify-content: space-around;

						.name {
							font-size: 16px;
						}

						.id_card {
							font-size: 14px;
							color: #aaaaaa;
						}
					}

					.after_icon {
						box-sizing: border-box;
						display: flex;
						justify-content: center;
						align-items: center;
						width: 60upx;

						.iconfont {
							font-size: 50upx;
							color: #aaaaaa;
						}
					}

					&:last-child {
						&::after {
							display: none;
						}
					}

					&::after {
						position: absolute;
						bottom: 0;
						left: 30upx;
						content: '';
						display: block;
						height: 1px;
						width: calc(100% - 60upx);
						background: #eaeaea;
					}

					&:active {
						background: #f5f5f5;
					}

				}
			}
		}
	}
</style>
