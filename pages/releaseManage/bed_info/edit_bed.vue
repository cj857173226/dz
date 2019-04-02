<template>
	<view class="edit_bed_page">
		<view class="edit_form">
			<view class="form_item" @tap = "changeBedType">
				<view class="label">床铺类型</view>
				<view class="content_wrap">
					<text class="content" v-if="modifyBedForm.type!=''">
						<text v-if="modifyBedForm.type=='double'">双人床</text>
						<text v-else-if="modifyBedForm.type=='single'">单人床</text>
						<text v-else-if="modifyBedForm.type=='sofa'">沙发</text>
						<text v-else-if="modifyBedForm.type=='canopy'">双层床</text>
						<text v-else-if="modifyBedForm.type=='tatami'">榻榻米</text>
						<text v-else-if="modifyBedForm.type=='other'">其他</text>
					</text>
				</view>
				<view class="after-icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="label">宽度</view>
				<view class="content_wrap">
					<input class="ipt" type="number" placeholder-style="color:#ccc;" placeholder="0.1-10范围内的数字" maxlength="4" v-model="modifyBedForm.weight">
				</view>
				<view class="unit">
					m
				</view>
			</view>
			<view class="form_item">
				<view class="label">长度</view>
				<view class="content_wrap">
					<input class="ipt" type="number" placeholder-style="color:#ccc;" placeholder="0.1-10范围内的数字" maxlength="4" v-model="modifyBedForm.length">
				</view>
				<view class="unit">
					m
				</view>
			</view>
		</view>
		<view class="bed-number-wrap">
			<view class="main-box">
				<text>同规格床铺数</text>
				<view class="number-control">
					<view class="reduce-btn" :class="{'dis-num':modifyBedForm.num<=1}" @click.stop="modifyBedNumber(0)"><text class="iconfont icon-jian"></text></view>
					<view class="bed-num"><text>{{modifyBedForm.num}}</text>张</view>
					<view class="add-btn" :class="{'dis-num':modifyBedForm.num>=99}" @click.stop="modifyBedNumber(1)"><text class="iconfont icon-jia"></text></view>
				</view>
			</view>
			<view class="tips">
				如果有相同类型和尺寸的床铺,可以设置同规格床铺数而不需要重复添加.如无需要,请填写1张
			</view>
		</view>
		<button class="add_btn my-btn-block" :class="{'dis_btn': isAllowEdit}" @tap="submitEditBed()">确定</button>
		<button class="del_btn my-del-block" @tap="deleteBed()">删除床铺</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modifyBedForm: {
					id: '',
					type: '',
					weight: '',
					length: '',
					num: 1,
				}
			}
		},
		onLoad(opt) {
			if (opt.param) {
				this.modifyBedForm = JSON.parse(opt.param)
			}
		},
		onShow() {

		},
		computed: {
			isAllowEdit: {
				get: function() {
					// return this.firstName + ' ' + this.lastName
					if (Number(this.modifyBedForm.weight) < 0.1 || Number(this.modifyBedForm.weight) > 10 || Number(this.modifyBedForm
							.length) < 0.1 || Number(this.modifyBedForm.length) > 10) {
						return true
					} else {
						return false
					}
				}
			}
		},
		methods: {
			// 修改床铺数量
			modifyBedNumber(type) {
				if (type == 0) {
					if (this.modifyBedForm.num <= 1) {
						return
					}
					this.$set(this.modifyBedForm, 'num', Number(this.modifyBedForm.num) - 1)
				} else if (type == 1) {
					if (this.modifyBedForm.num >= 99) {
						return
					}
					this.$set(this.modifyBedForm, 'num', Number(this.modifyBedForm.num) + 1)
				}
			},
			//确定修改床铺
			submitEditBed() {
				let id = this.modifyBedForm.id;
				let type = this.modifyBedForm.type;
				let length = (Number(this.modifyBedForm.length)).toFixed(1);
				let weight = (Number(this.modifyBedForm.weight)).toFixed(1);
				let num = this.modifyBedForm.num
				console.log(id, type, length, weight, num)
			},
			// 删除床铺
			deleteBed() {},
			// 选择床铺类型
			changeBedType() {
				const _this = this;
				const bedData = ['double','single', 'sofa','canopy','tatami','other']
				uni.showActionSheet({
					itemList: ['双人床', '单人床', '沙发','双层床','榻榻米','其他'],
					success: function(res) {
						const index = res.tapIndex;
						_this.modifyBedForm.type = bedData[index]
					},
					fail: function(res) {
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

	.edit_bed_page {
		box-sizing: border-box;
		width: 100%;
		min-height: 100%;
		padding: 40upx 30upx 20upx;

		.form_item {
			box-sizing: border-box;
			width: 100%;
			height: 90upx;
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 16upx 0;
			font-size: 32upx;
			border-bottom: 1px solid #EAEAEA;

			.content_wrap {
				box-sizing: border-box;
				display: flex;
				flex-direction: row-reverse;
				flex-grow: 1;

				.ipt {
					text-align: right;
				}
			}

			.after-icon {
				.iconfont {
					font-size: 32upx;
					color: #AAAAAA;
				}
			}

			.after-icon,
			.unit {
				margin-left: 10upx;
			}
		}

		.bed-number-wrap {
			box-sizing: border-box;
			width: 100%;
			padding: 30upx 0;
			border-bottom: 1px solid #cccccc;

			.main-box {
				box-sizing: border-box;
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.number-control {
					box-sizing: border-box;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					.reduce-btn,
					.add-btn {
						box-sizing: border-box;
						width: 40upx;
						height: 40upx;
						line-height: 40upx;
						text-align: center;
						border: 1px solid #000000;

						.iconfont {
							font-size: 32upx;
						}
					}

					.dis-num {
						pointer-events: none;
						color: #cccccc !important;
						border: 1px solid #EAEAEA !important;
					}

					.bed-num {
						box-sizing: border-box;
						padding: 0 10upx;
						width: 100upx;
						text-align: right;

						text {
							width: 40upx;
							display: inline-block;
						}
					}
				}
			}

			.tips {
				margin-top: 20upx;
				font-size: 28upx;
				color: #aaaaaa;
			}
		}

		.add_btn {
			margin-top: 40upx;
		}

		.del_btn {
			margin-top: 20upx;
			color: #AAAAAA;
		}

	}
</style>
