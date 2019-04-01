<template>
	<view class="bed_info_page">
		<view class="tips_wrap">
			<view class="one_line">为了保证房客体验,我们要求</view>
			<view class="one_line">床品<text class="b_text">至少每客一换</text></view>
		</view>
		<view class="bed_list">
			<view class="bed_item" v-for="(item,index) in bedList" :key="index">
				<view class="del_btn_wrap">
					<view class="del_btn" @tap="deleteBed(item.id)">
						<text class="iconfont icon-jian"></text>
					</view>
				</view>
				<view class="bed_info">
					<view class="bed_type">
						<text v-if="item.type=== 'double'">双人床</text>
						<text v-else-if="item.type=== 'single'">单人床</text>
						<text v-else-if="item.type=== 'canopy'">双层床</text>
						<text v-else-if="item.type=== 'sofa'">沙发</text>
						<text v-else-if="item.type=== 'tatami'">榻榻米</text>
						<text v-else-if="item.type=== 'other'">其他</text>
					</view>
					<view class="bed_size">宽{{item.weight}}米长{{item.length}}米</view>
				</view>
				<view class="bed-number">
					{{item.num}}张
				</view>
				<view class="after-icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
		</view>
		<button class="add_bed my-btn-block" @tap="addBed">添加床铺</button>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				bedList: [{
						id: "23773886004",
						length: "2.0",
						num: "99",
						type: "double",
						weight: "1.8",
					},
					{
						id: "23773886004",
						length: "2.0",
						num: "1",
						type: "single",
						weight: "1.8",
					},
					{
						id: "23773886004",
						length: "2.0",
						num: "1",
						type: "canopy",
						weight: "1.8",
					},
					{
						id: "23773886004",
						length: "2.0",
						num: "1",
						type: "sofa",
						weight: "1.8",
					},
					{
						id: "23773886004",
						length: "2.0",
						num: "1",
						type: "tatami",
						weight: "1.8",
					},
					{
						id: "23773886004",
						length: "2.0",
						num: "1",
						type: "other",
						weight: "1.8",
					},
				],
				show: false,
				dialogConfig: {

					title: '',
					content: '',
				}
			}
		},
		components: {},
		onLoad() {

		},
		onShow() {

		},
		computed: {

		},
		methods: {
			// 删除床铺
			deleteBed(id) {
				console.log(id)
				uni.showModal({
					title: '删除',
					content: '是否删除这个床铺',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			// 跳转到添加床铺页面
			addBed(){
				uni.navigateTo({
					url:'/pages/releaseManage/bed_info/add_bed'
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
	$theme-color: #F05B72;

	.bed_info_page {
		box-sizing: border-box;
		padding: 40upx 30upx 20upx;

		.tips_wrap {
			box-sizing: border-box;
			width: 100%;
			font-size: 40upx;
			margin-bottom: 80upx;

			.one_line {
				box-sizing: border-box;
				width: 100%;
				font-size: 40upx;
				text-align: center;
				margin-bottom: 6upx;
				color: #888888;

				.b_text {
					color: #000000;
				}
			}
		}

		.bed_list {
			box-sizing: border-box;
			width: 100%;

			.bed_item {
				box-sizing: border-box;
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				height: 90upx;
				border-bottom: 1px solid #eaeaea;

				&:first-child {
					border-top: 1px solid #eaeaea;
				}

				.del_btn_wrap {
					box-sizing: border-box;
					width: 60upx;
					display: flex;
					align-items: center;

					.del_btn {
						width: 40upx;
						height: 40upx;
						background: #F66;
						color: #FFFFFF;
						border-radius: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
						transition: all 0.1s ease;

						.iconfont {
							margin-top: 4upx;
							font-size: 32upx;
							font-weight: 800;
						}

						&:active {
							opacity: 0.8;
						}
					}
				}

				.bed_info {
					box-sizing: border-box;
					display: flex;
					flex-direction: row;
					width: calc(100% - 180upx);

					.bed_type {
						width: 140upx;
					}
				}

				.bed-number {
					text-align: right;
					width: 80upx;
				}

				.after-icon {
					box-sizing: border-box;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					width: 40upx;
					color: #aaaaaa;

					.iconfont {
						margin-top: 4upx;
						font-size: 32upx;
					}
				}
			}
		}

		.add_bed {
			margin-top: 40upx;
		}
	}
</style>
