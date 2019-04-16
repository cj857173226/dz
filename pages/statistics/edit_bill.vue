<template>
	<view class="edit_bill_page">
		<view class="edit_bill_form">
			<view class="form_item">
				<view class="icon">
					<text class="iconfont icon-tongji6"></text>
				</view>
				<view class="label">金额类型</view>
				<view class="content_wrap">
					<view class="content" v-text="detailForm.type==='in'?'收入':'成本'"></view>
				</view>
			</view>
			<view class="form_item">
				<view class="icon">
					<text class="iconfont icon-jine"></text>
				</view>
				<view class="label">金额</view>
				<view class="content_wrap">
					<view class="content">{{detailForm.money}}元</view>
				</view>
			</view>
			<view class="form_item">
				<view class="icon">
					<text class="iconfont icon-rili"></text>
				</view>
				<view class="label">日期</view>
				<view class="content_wrap">
					<view class="content">{{detailForm.date}}</view>
				</view>
			</view>
			<view class="note_item">

				<view class="label">
					<view class="icon"> <text class="iconfont icon-beizhu"></text></view>
					<text class="text">备注</text>
				</view>
				<view class="note">
					<view class="content">{{detailForm.remark}}</view>
				</view>

			</view>

		</view>
		<button class="del_btn my-del-block" @tap="delBill">删除</button>
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
				detailForm: {

				},
				isDeling:false,
			}
		},
		onLoad(opt) {
			const param = JSON.parse(opt.param);
			this.detailForm = param;
			console.log(param)
		},
		onShow() {

		},
		computed: {

		},
		methods: {
			...mapMutations(['statisticsEditStatus']),
			delBill(){
				if(this.isDeling) return;
				const _this = this;
				const id = _this.detailForm.id;
				uni.showModal({
					title: '',
					content: '是否删除该记录',
					confirmText: '删除',
					confirmColor: '#F05B72',
					success: function(res) {
						uni.showLoading({
							title:'删除中...'
						})
						if (res.confirm) {
							_this.isDeling = true;
							request({
								url: '/wap/api/statistics.php?action=destroy&id='+id,
								method: 'GET',
								success: function(res) {
									if (res.data.status === "success") {
										helper.layer('删除成功')
										_this.statisticsEditStatus(true);
										uni.navigateBack({
											delta: 1
										});
									} else {
										helper.layer('删除失败')
									}
								},
								complete: function() {
									_this.isDeling = false;
								}
							})
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

	.edit_bill_page {
		box-sizing: border-box;
		padding: 0 20upx;

		.edit_bill_form {
			box-sizing: border-box;
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
					width: calc(100% - 220upx);

					.no_data {
						text-align: right;
						color: #cccccc;
					}

					.content {
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						text-align: right;
						color: #AAAAAA;
					}

					input {
						text-align: right;
					}
				}

				.note {
					width: 100%;
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

			.note_item {
				box-sizing: border-box;
				width: 100%;
				padding: 20upx 0;

				.label {
					box-sizing: border-box;
					width: 100%;
					display: flex;
					align-items: center;
					.icon {
						width: 60upx;
						color: #AAAAAA;
						display: flex;
						align-items: center;
						justify-content: center;
					
						.iconfont {
							font-size: 32upx;
						}
					}
				}
				.note{
					box-sizing: border-box;
					padding:16upx;
					.content{
						box-sizing: border-box;
						width: 100%;
						min-height: 200upx;
						border: 1px solid #eaeaea;
						border-radius: 8upx;
						padding: 20upx;
						color: #AAAAAA;
					}
				}
			}
		}

		.del_btn {
			color: #AAAAAA;
			margin-top: 40upx;
		}
	}
</style>
