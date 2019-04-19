<template>
	<view class="rent_type_page">
		<view class="head">房客入住的<text class="key">空间类型</text>是?</view>
		<view class="type_check_wrap">
			<view class="check_item" @tap="changeLeaseType('1')">
				<view class="check_btn_wrap">
					<view class="check_btn" :class="{'check_on':leasetype === '1'}">
					</view>
				</view>
				<view class="check_content">
					<view class="type">整套房屋</view>
					<view class="desc">房客独享整个房屋</view>
				</view>
			</view>
			<view class="check_item" @tap="changeLeaseType('2')">
				<view class="check_btn_wrap">
					<view class="check_btn" :class="{'check_on':leasetype === '2'}">
					</view>
				</view>
				<view class="check_content">
					<view class="type">独立房间</view>
					<view class="desc">房客拥有一个独立的房间,但部分空间与他人分享</view>
				</view>
			</view>
			<view class="check_item" @tap="changeLeaseType('3')">
				<view class="check_btn_wrap">
					<view class="check_btn" :class="{'check_on':leasetype === '3'}">
					</view>
				</view>
				<view class="check_content">
					<view class="type">合住房间</view>
					<view class="desc">房客没有独立的卧室,使用公共空间内的一个床位、沙发、床垫、帐篷等</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<button class="my-btn-block" :class="{'dis_btn':leasetype ===''||submiting}" @tap="submit">
				<text v-if="!submiting">确认</text>
				<text v-if="leasetype!==''&& !submiting">
					选择
					<text v-if="leasetype === '1'">整套房屋</text>
					<text v-if="leasetype === '2'">独立房间</text>
					<text v-if="leasetype === '3'">合住房间</text>
				</text>
				<text v-if="submiting && type==='add'">创建中..</text>
				<text v-if="submiting && type==='edit'">保存中..</text>
			</button>
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
				type: '', // 页面编辑类型 add添加  edit 编辑
				leasetype: '', //出租类型：1：整套出租；2：独立房间；3：合住房间,
				submiting: false, //是否正在提交中
			}
		},
		onLoad(e) {
			if (e.type) {
				this.type = e.type;
			}
		},
		onShow() {
			if (this.type === 'add') {}
		},
		onBackPress() {
			if (this.type === 'add') {
				this.back();
				return true;
			}
		},
		computed: {
			...mapState(['releaseObj', 'createHouseInfo'])
		},
		methods: {
			...mapMutations(['editCreateHouseInfo', 'clearCreateHouseInfo', 'editReleaseInfo', 'clearReleaseInfo','editReleaseInfoStatus']),
			//切换出租类型
			changeLeaseType(type) {
				this.leasetype = type;
			},
			// 提交按钮
			submit() {
				if (this.leasetype === '' || this.submiting) return;
				const _this = this;
				const leasetype = _this.leasetype;
				if (this.type === 'add') {
					_this.submiting = true;
					_this.editCreateHouseInfo({
						leasetype: leasetype
					})
					const param = _this.createHouseInfo;
					request({
						url: '/wap/api/fangdong.php?action=createHouse',
						method: 'POST',
						data: param,
						success: (res) => {
							if (res.data.status === 'success') {
								let data = res.data.content;
								data['xz_local'] = data.xz_province + data.xz_city + data.xz_district + '\xa0\xa0' + data.xz_address +
									'\xa0\xa0' + data.xz_number;
								_this.clearReleaseInfo();
								// 带入当前要修改的房源信息
								_this.editReleaseInfo(data);
								_this.editReleaseInfoStatus(true);
								uni.redirectTo({
									url: '/pages/releaseManage/house_detail?type=add'
								})
							} else {
								helper.layer(res.data.errorMsg)
							}
						},
						complete: () => {
							_this.submiting = false;
						}
					})
				} else if (this.type === 'edit') {

				}

			},
			// 返回
			back() {
				const _this = this;
				uni.showModal({
					title: '提示',
					content: '是否放弃发布',
					success: function(res) {
						if (res.confirm) {
							_this.type = '';
							_this.clearCreateHouseInfo();
							uni.navigateBack({
								delta: 1
							})
						} else if (res.cancel) {

						}
					}
				});
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

	.rent_type_page {
		position: relative;
		box-sizing: border-box;
		min-height: 100%;
		padding: 0 30upx 160upx;

		.head {
			box-sizing: border-box;
			height: 280upx;
			border-bottom: 1px solid #eaeaea;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 36upx;
			color: #333333;

			.key {
				font-weight: 800;
				color: #000000;
			}
		}

		.type_check_wrap {
			box-sizing: border-box;
			width: 100%;

			.check_item {
				box-sizing: border-box;
				width: 100%;
				padding: 40upx 0 0;
				display: flex;
				flex-direction: row;

				.check_btn_wrap {
					width: 60upx;

					.check_btn {
						box-sizing: border-box;
						margin-top: 4upx;
						width: 40upx;
						height: 40upx;
						border-radius: 50%;
						border: 1px solid #000000;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.check_on {
						border: 1px solid $theme-color;

						&::after {
							content: '';
							display: block;
							width: 24upx;
							height: 24upx;
							background: $theme-color;
							border-radius: 50%;
						}
					}
				}

				.check_content {
					width: calc(100% - 60upx);
					padding-bottom: 40upx;
					border-bottom: 1px solid #eaeaea;

					.type {
						font-size: 36upx;
						margin-bottom: 20upx;
					}

					.desc {
						font-size: 32upx;
						color: #aaaaaa;
					}
				}
			}
		}

		.bottom {
			position: absolute;
			box-sizing: border-box;
			width: 100%;
			padding: 20upx 30upx;
			bottom: 0;
			left: 0;
		}
	}
</style>
