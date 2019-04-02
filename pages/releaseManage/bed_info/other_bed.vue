<template>
	<view class="edit_bed_page">
		<view class="edit_form">
			<view class="form_item" @tap = "changeBedType">
				<view class="label">床铺类型</view>
				<view class="content_wrap">
					<text class="content" v-if="otherBedForm.type!==''">
						<text v-if="otherBedForm.type==='double'">双人床</text>
						<text v-else-if="otherBedForm.type==='single'">单人床</text>
						<text v-else-if="otherBedForm.type==='sofa'">沙发</text>
						<text v-else-if="otherBedForm.type==='canopy'">双层床</text>
						<text v-else-if="otherBedForm.type==='tatami'">榻榻米</text>
						<text v-else-if="otherBedForm.type==='other'">其他</text>
					</text>
					<text v-if="otherBedForm.type===''" style="color: #CCCCCC;">请选择</text>
				</view>
				<view class="after-icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="label">宽度</view>
				<view class="content_wrap">
					<input class="ipt" type="number" placeholder-style="color:#ccc;" placeholder="0.1-10范围内的数字" maxlength="4" v-model="otherBedForm.weight">
				</view>
				<view class="unit">
					m
				</view>
			</view>
			<view class="form_item">
				<view class="label">长度</view>
				<view class="content_wrap">
					<input class="ipt" type="number" placeholder-style="color:#ccc;" placeholder="0.1-10范围内的数字" maxlength="4" v-model="otherBedForm.length">
				</view>
				<view class="unit">
					m
				</view>
			</view>
		</view>
		<button class="add_btn my-btn-block" :class="{'dis_btn': isAllowEdit}" @tap="submitEditBed()">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				handleType:'add',
				otherBedForm: {
					type: '',
					weight: '',
					length: '',
				}
			}
		},
		onLoad(opt) {
			this.handleType = opt.type;
			if (opt.param) {
				this.otherBedForm = JSON.parse(opt.param)
			}
		},
		onShow() {

		},
		computed: {
			isAllowEdit: {
				get: function() {
					// return this.firstName + ' ' + this.lastName
					if (Number(this.otherBedForm.weight) < 0.1 || Number(this.otherBedForm.weight) > 10 || Number(this.otherBedForm.length) < 0.1 || Number(this.otherBedForm.length) > 10) {
						return true
					} else {
						return false
					}
				}
			}
		},
		methods: {
			//确定修改床铺
			submitEditBed() {
				let type = this.otherBedForm.type;
				let length = (Number(this.otherBedForm.length)).toFixed(1);
				let weight = (Number(this.otherBedForm.weight)).toFixed(1);
				console.log( type, length, weight)
			},
			// 选择床铺类型
			changeBedType() {
				const _this = this;
				const bedData = ['double','single', 'sofa','canopy','tatami','other']
				uni.showActionSheet({
					itemList: ['双人床', '单人床', '沙发','双层床','榻榻米','其他'],
					success: function(res) {
						const index = res.tapIndex;
						_this.otherBedForm.type = bedData[index]
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

		.add_btn {
			margin-top: 40upx;
		}


	}
</style>
