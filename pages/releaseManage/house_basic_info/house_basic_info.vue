<template>
	<view class="house_basic_page">
		<view class="house_basic_form">
			<view class="form_item" @tap="setHouseType()">
				<view class="item_left">
					<view class="label">房屋类型</view>
					<view class="empty_data">请选择</view>
					<view class="result"></view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="setHouseArea">
				<view class="item_left">
					<view class="label">出租面积</view>
					<view class="empty_data">请选择</view>
					<view class="result"></view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="item_left">
					<view class="label">卫生间类型</view>
					<view class="empty_data">请选择</view>
					<view class="result"></view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="item_left">
					<view class="label">与房东同居一套房间内</view>
					<view class="empty_data">请选择</view>
					<view class="result"></view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="setPeopleNum()">
				<view class="item_left">
					<view class="label">宜居人数</view>
					<view class="empty_data">请选择</view>
					<view class="result"></view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>

			<view class="form_item">
				<view class="item_left">
					<view class="label">同类房源数</view>
					<view class="empty_data"></view>
					<view class="result">1位</view>
					<view class="tips">你有相同房源吗</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="item_left">
					<view class="label">同类床位数</view>
					<view class="empty_data"></view>
					<view class="result">1位</view>
					<view class="tips">你有相同床位吗</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="item_left">
					<view class="label">同类房间数</view>
					<view class="empty_data"></view>
					<view class="result">1位</view>
					<view class="tips">你有相同房间吗</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		onShow() {

		},
		computed: {

		},
		methods: {
			// 设置房屋户型
			setHouseType() {
				uni.navigateTo({
					url: '/pages/releaseManage/house_basic_info/house_type'
				})
			},

			// 设置出租面积
			setHouseArea() {
				uni.navigateTo({
					url: '/pages/releaseManage/house_basic_info/house_area'
				})
			},
			// 设置宜居人数
			setPeopleNum() {
				uni.navigateTo({
					url: '/pages/releaseManage/house_basic_info/people_number'
				})
			},

		}
	}
</script>

<style>
	page {
		height: 100%;
	}
</style>
<style lang="scss" scoped>
	.house_basic_page {
		box-sizing: border-box;
		height: 100%;
		padding: 20upx 30upx;

		.house_basic_form {
			box-sizing: border-box;
			width: 100%;

			.form_item {
				box-sizing: border-box;
				width: 100%;
				padding: 20upx 0;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid #eaeaea;

				.item_left {
					box-sizing: border-box;
					width: calc(100% - 60upx);

					>view {
						margin-bottom: 4upx;
					}

					>view:last-child {
						margin-bottom: 0;
					}

					.label {
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						font-size: 32upx;
						color: #333333;
					}

					.empty_data {
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						font-size: 28upx;
						color: #cccccc;
					}

					.result {
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						font-size: 28upx;
						color: #333333;
					}

					.tips {
						color: #AAAAAA;
						font-size: 28upx;
						word-break: break-all;
					}
				}

				.after_icon {
					box-sizing: border-box;
					display: flex;
					flex-direction: row-reverse;
					justify-content: space-between;
					align-items: center;
					width: 60upx;

					.iconfont {
						font-size: 40upx;
						color: #AAAAAA;
					}
				}
			}
		}
	}
</style>
