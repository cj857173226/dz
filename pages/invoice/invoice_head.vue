<template>
	<view class="invocie_head_page">
		<button class="my-btn-block add_btn" @tap="handleInvoiceHead('add')"><text class="iconfont icon-jia">&nbsp;添加</text></button>
		<scroll-view scroll-y class="invice_head_list_wrap" v-if="listData.length>0">
			<view class="invice_head_list">
				<view class="list_item" v-for="(item, index) in listData" :key="index">
					<view class="one_line type">发票类型:<text v-text="item.type==='common'?'电子普通发票':'专用发票'"></text></view>
					<view class="one_line company">公司全称:<text>{{item.company}}</text> </view>
					<view class="one_line number">纳税人识别号: <text>{{item.number}}</text></view>
					<view class="one_line email">电子邮箱:<text>{{item.email}}</text></view>
					<view class="hanle_wrap">
						<text class="iconfont icon-icon-edit edit_btn" @tap="handleInvoiceHead('edit',item)">编辑</text>
						<viwe class="default" v-if="item.is_default === '1'">默认抬头</viwe>
					</view>
				</view>
			</view>

		</scroll-view>
		<!-- <view class="no_data" v-if="listData.length<=0">
			还没有发票抬头
		</view> -->
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				listData: [{
						company: "公司",
						email: "123123@qq.com",
						id: "10",
						is_default: "1",
						number: "123123",
						type: "common",
						user_id: "104"
					},
					{
						company: "公司1",
						email: "123123@qq.com",
						id: "10",
						is_default: "0",
						number: "123123",
						type: "common",
						user_id: "104"
					}, {
						company: "公司2",
						email: "123123@qq.com",
						id: "10",
						is_default: "0",
						number: "123123",
						type: "common",
						user_id: "104"
					}, {
						company: "公司3",
						email: "123123@qq.com",
						id: "10",
						is_default: "0",
						number: "123123",
						type: "common",
						user_id: "104"
					}
				]
			};
		},
		onLoad() {},
		onShow() {},

		computed: {
			...mapState(['islogin', 'token', 'isEditInvoiceHead'])
		},
		methods: {
			...mapMutations(['invoiceHeadEditStatus']),
			// 新增或者是编辑发表抬头
			// type ---> add : 添加   edit:修改
			handleInvoiceHead(type, par) {
				this.invoiceHeadEditStatus(false);
				let url = '';
				if (type === 'add') {
					url = '/pages/invoice/edit_invoice_head?type=add'
				} else if (type === 'edit') {
					const params = JSON.stringify(par);
					url = '/pages/invoice/edit_invoice_head?type=edit&param='+ params;
				}
				
				uni.navigateTo({
					url: url
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

	.invocie_head_page {
		box-sizing: border-box;
		height: 100%;
		width: 100%;
		padding: 20upx 30upx;

		.add_btn {
			margin-top: 20upx;

			.iconfont {
				font-size: 32upx;
			}
		}

		.invice_head_list_wrap {
			box-sizing: border-box;
			margin-top: 20upx;
			height: calc(100% - 130upx);

			.invice_head_list {
				box-sizing: border-box;
				padding: 10upx 0;

				.list_item {
					box-sizing: border-box;
					margin-bottom: 20upx;
					padding: 20upx 30upx;
					width: 100%;
					display: flex;
					flex-direction: column;
					background: #FFFFFF;
					border-radius: 12upx;

					.one_line {
						font-size: 28upx;
						margin-bottom: 6upx;

						text {
							color: #aaaaaa;
							margin-left: 32upx;
						}
					}

					.hanle_wrap {
						box-sizing: border-box;
						width: 100%;
						display: flex;
						flex-direction: row-reverse;
						justify-content: space-between;
						align-items: center;

						.edit_btn {
							font-size: 28upx;
							color: #aaaaaa;
							padding: 8upx;

							&:active {
								color: #cccccc;
							}
						}

						.default {
							color: $theme-color;
							font-size: 28upx;
						}
					}
				}
			}
		}

		.no_data {
			box-sizing: border-box;
			height: calc(100% - 130upx);
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
