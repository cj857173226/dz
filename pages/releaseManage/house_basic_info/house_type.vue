<template>
	<view class="house_type_page">
		<view class="tips_wrap">
			<view class="one_line">请填写<text class="b_text">整套房屋的户型</text></view>
			<view class="one_line">而不只是房客可使用的户型范围</view>
		</view>
		<view class="house_type_set">
			<view class="set_item">
				<view class="reduce_btn" :class="{'dis-num':typeData.room <= 1}" @tap="numReduce('room')">
					<text class="iconfont icon-jian"></text>
				</view>
				<view class="type_box">
					<view class="num">{{typeData.room}}</view>
					<view class="unit">室</view>
				</view>
				<view class="add_btn" :class="{'dis-num': typeData.room >= 99}" @tap="numAdd('room')">
					<text class="iconfont icon-jia"></text>
				</view>
			</view>
			<view class="set_item">
				<view class="reduce_btn" :class="{'dis-num': typeData.office <= 0}" @tap="numReduce('office')">
					<text class="iconfont icon-jian"></text>
				</view>
				<view class="type_box">
					<view class="num">{{typeData.office}}</view>
					<view class="unit">厅</view>
				</view>
				<view class="add_btn" :class="{'dis-num': typeData.office >= 99}" @tap="numAdd('office')">
					<text class="iconfont icon-jia"></text>
				</view>
			</view>
			<view class="set_item">
				<view class="reduce_btn" :class="{'dis-num': typeData.wei <= 0}" @tap="numReduce('wei')">
					<text class="iconfont icon-jian"></text>
				</view>
				<view class="type_box">
					<view class="num">{{typeData.wei}}</view>
					<view class="unit">卫</view>
				</view>
				<view class="add_btn" :class="{'dis-num': typeData.wei >= 99}" @tap="numAdd('wei')">
					<text class="iconfont icon-jia"></text>
				</view>
			</view>
			<view class="set_item">
				<view class="reduce_btn" :class="{'dis-num': typeData.Kitchen <= 0}" @tap="numReduce('Kitchen')">
					<text class="iconfont icon-jian"></text>
				</view>
				<view class="type_box">
					<view class="num">{{typeData.Kitchen}}</view>
					<view class="unit">厨</view>
				</view>
				<view class="add_btn" :class="{'dis-num': typeData.Kitchen >= 99}" @tap="numAdd('Kitchen')">
					<text class="iconfont icon-jia"></text>
				</view>
			</view>
			<view class="set_item">
				<view class="reduce_btn" :class="{'dis-num': typeData.balcony <= 0}" @tap="numReduce('balcony')">
					<text class="iconfont icon-jian"></text>
				</view>
				<view class="type_box">
					<view class="num">{{typeData.balcony}}</view>
					<view class="unit">阳台</view>
				</view>
				<view class="add_btn" :class="{'dis-num': typeData.balcony >= 99}"  @tap="numAdd('balcony')">
					<text class="iconfont icon-jia"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeData: {
					room: 1, // 室
					office: 0, //厅
					wei: 0, // 卫
					Kitchen: 0, // 厨
					balcony: 0 // 阳台
				}
			}
		},
		onLoad() {

		},
		onShow() {

		},
		computed: {

		},
		methods: {
			// 房源类型数字减少按钮
			numReduce(key) {
				if (key == 'room' && this.typeData[key] <= 1) {
					return
				} else if (this.typeData[key] <= 0) {
					return
				} else {
					this.$set(this.typeData, key, this.typeData[key] -= 1)
				}
			},
			// 房源类型数字增加按钮
			numAdd(key) {
				if (this.typeData[key] >= 99) {
					return
				} else {
					this.$set(this.typeData, key, this.typeData[key] += 1)
				}
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
	.house_type_page {
		box-sizing: border-box;
		height: 100%;
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

		.house_type_set {
			box-sizing: border-box;
			width: 100%;
			.set_item {
				box-sizing: border-box;
				margin: 0 auto 60upx;
				width: 60%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.reduce_btn {
					box-sizing: border-box;
					border: 1px solid #333333;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 56upx;
					height: 56upx;
					.iconfont {
						font-size: 40upx;
					}
				}

				.add_btn {
					box-sizing: border-box;
					border: 1px solid #333333;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 56upx;
					height: 56upx;
					.iconfont {
						font-size: 40upx;
					}
				}

				.dis-num {
					border-color: #eaeaea !important;
					color: #eaeaea !important;
					pointer-events: none;
				}

				.type_box {
					box-sizing: border-box;
					display: flex;
					justify-items: center;
					align-items: center;

					.num {
						width: 60upx;
					}

					.unit {
						width: 80upx;
					}

				}


			}
		}
	}
</style>
