<template>
	<view class="add_bill_page">
		<view class="tab_wrap">
			<view class="tab_item" :class="{'tab-on':curTab=='out'}" @tap="changeBillTab('out')">成本</view>
			<view class="tab_item" :class="{'tab-on':curTab=='in'}" @tap="changeBillTab('in')">收入</view>
		</view>
		<view class="add_bill_form">
			<view class="form_item">
				<view class="icon">
					<text class="iconfont icon-jine"></text>
				</view>
				<view class="label">金额</view>
				<view class="content_wrap">
					<input type="number" placeholder="最高设置金额99999.99" placeholder-style="color:#ccc;" maxlength="10" v-model="billForm.money">
				</view>
				<view class="unit">元</view>
			</view>
			<view class="form_item" @tap="changeMoneyType">
				<view class="icon">
					<text class="iconfont icon-tongji6"></text>
				</view>
				<view class="label" v-text="curTab==='out'?'成本分类':'收入来源'"></view>
				<view class="content_wrap">
					<view class="no_data" v-if="!billForm.source">请选择</view>
					<view class="content" v-else>
						<text v-if="billForm.source==='1'">平台</text>
						<text v-if="billForm.source==='2'">其他</text>
					</view>
				</view>
				<view class="after-icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="editNote()">
				<view class="icon">
					<text class="iconfont icon-beizhu"></text>
				</view>
				<view class="label">备注</view>
				<view class="content_wrap">
					<view class="no_data" v-if="!billForm.note">请填写备注内容</view>
					<view class="content" v-else>{{billForm.note}}</view>
				</view>
				<view class="after-icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
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
	} from '../../common/request.js';
	import helper from '../../common/helper.js';
	export default {
		data() {
			return {
				curTab: 'out',
				billForm: {
					source: '',
					note: '',
					money: '',
				},
				defaultVal: [],
			}
		},
		components: {
		},
		onLoad() {
		},
		onShow() {

		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {}
		},
		onBackPress() {
		},
		computed: {

		},
		methods: {
			changeBillTab(type) {
				if (this.curBillTab === type) {
					return
				} else {
					this.curTab = type
				}
			},
			// 编辑备注
			editNote() {
				uni.navigateTo({
					url: '/pages/statistics/bill_note'
				})
			},
			// 选择金额类型
			changeMoneyType() {
				const _this = this;
				uni.showActionSheet({
					itemList: ['平台', '其他'],
					success: function(res) {
						_this.billForm.source = (res.tapIndex + 1).toString();
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
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
	$theme-color: #F05B72;

	.add_bill_page {
		box-sizing: border-box;
		width: 100%;

		.tab_wrap {
			box-sizing: border-box;
			width: 100%;
			display: flex;

			.tab_item {
				box-sizing: border-box;
				width: 50%;
				text-align: center;
				height: 80upx;
				line-height: 80upx;
				border-bottom: 1px solid #cccccc;
				font-size: 32upx;
			}

			.tab-on {
				border-bottom: 1px solid $theme-color;
				color: $theme-color;
			}
		}

		.add_bill_form {
			box-sizing: border-box;
			padding: 0 20upx;
			width: 100%;

			.form_item {
				box-sizing: border-box;
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #eaeaea;

				.icon {
					height: 100%;
					width: 60upx;
					color: #AAAAAA;
					display: flex;
					align-items: center;
					justify-content: center;

					.iconfont {
						font-size: 32upx;
					}
				}

				.label {
					height: 100%;
					width: 140upx;
					display: flex;
					align-items: center;
				}

				.content_wrap {
					box-sizing: border-box;
					width: calc(100% - 260upx);

					.no_data {
						text-align: right;
						color: #cccccc;
					}

					.content {
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						text-align: right
					}

					input {
						text-align: right;
					}
				}

				.unit,
				.after-icon {
					height: 100%;
					width: 60upx;
					text-align: center;
				}

				.unit {
					line-height: 86upx;
				}

				.after-icon {
					line-height: 90upx;

					.iconfont {
						display: inline-block;
						margin-top: 4upx;
						font-size: 32upx;
						color: #cccccc
					}
				}
			}
		}

	}
</style>
