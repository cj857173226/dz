<template>
	<view class="house_detail_page">
		<view class="house_status">
			未完成
		</view>
		<view class="house_detail_form">
			<view class="form_item" @tap="pageTo('house_basic_info/house_basic_info')">
				<view class="label">基本信息</view>
				<view class="ipt">
					<view class="empty">未完成</view>
					<view class="data_box"></view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="pageTo('bed_info/bed_info')">
				<view class="label">床铺信息</view>
				<view class="ipt">
					<view class="empty">未完成</view>
					<view class="data_box"></view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="pageTo('house_describe/house_describe')">
				<view class="label">房间描述</view>
				<view class="ipt">
					<view class="empty">未完成</view>
					<view class="data_box"></view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="pageTo('house_facilities/house_facilities')">
				<view class="label">配套设施</view>
				<view class="ipt">
					<view class="empty">未完成</view>
					<view class="data_box"></view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="pageTo('price_rule/price_rule')">
				<view class="label">价格规则</view>
				<view class="ipt">
					<view class="empty">未完成</view>
					<view class="data_box"></view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="pageTo('room_photograph/room_photograph')">
				<view class="label">房间照片</view>
				<view class="ipt">
					<view class="empty">未完成</view>
					<view class="data_box"></view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="label">出租类型</view>
				<view class="ipt">
					<view class="empty">未完成</view>
					<view class="data_box"></view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="label">房源地址</view>
				<view class="ipt">
					<view class="empty">未完成</view>
					<view class="data_box"></view>
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
					<switch class="o-switch" color="#F05B72" />
				</view>
			</view>
		</view>
		<view class="bottom_wrap">
			<view class="del_house">删除房源</view>
		</view>
		<button class="release_btn my-btn-block">发布按钮</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageType: '', // 页面进入的类型 add添加
			}
		},
		onLoad(e) {
			if (e.type) {
				this.pageType = e.type;
			}
		},
		onShow() {

		},
		onBackPress(options) {
		
		},
		computed: {

		},
		methods: {
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
			back() {
				uni.navigateBack({
					delta: 3
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
						font-size: 28upx;
						color: #333333;
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
			}
		}

		.release_btn {
			margin-top: 20upx;
		}
	}
</style>
