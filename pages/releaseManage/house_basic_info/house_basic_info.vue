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
			<view class="form_item" @tap="changeWeiType">
				<view class="item_left">
					<view class="label">卫生间类型</view>
					<view class="empty_data">请选择</view>
					<view class="result"></view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="isLiveTogether">
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

			<view class="form_item" @tap="similarChange('house')">
				<view class="item_left">
					<view class="label">同类房源数</view>
					<view class="empty_data"></view>
					<view class="result">{{houseInfo.similarHouse}}套</view>
					<view class="tips">你有相同房源吗</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item"  @tap="similarChange('bed')">
				<view class="item_left">
					<view class="label">同类床位数</view>
					<view class="empty_data"></view>
					<view class="result">{{houseInfo.similarBed}}位</view>
					<view class="tips">你有相同床位吗</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="item_left"  @tap="similarChange('room')">
					<view class="label">同类房间数</view>
					<view class="empty_data"></view>
					<view class="result">{{houseInfo.similarRoom}}间</view>
					<view class="tips">你有相同房间吗</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>

		</view>
		<mpvue-picker ref="similarPicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="similarConfirm" @onCancel="similarCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
	</view>
</template>

<script>
	import mpvuePicker from '../../../components/mpvue-picker/mpvuePicker.vue';
	export default {
		data() {
			return {
				// 卫生间类型
				weiTypes: [{
						value: '1',
						text: '公共卫生间'
					},
					{
						value: '2',
						text: '独立卫生间'
					}
				],
				//房源基本类型信息
				houseInfo: {
					houseType: null, //房源类型
					houseArea: '', //房源面积
					weiType: '', //卫生间类型
					cohabitation: '', // 是否和房东同居
					liveNumber: '', // 宜居人数
					similarHouse: 1, // 同类房源数量
					similarBed: 1, //同类床位数量
					similarRoom: 1, //同类房间数量
					status: -1, // 发布状态
					is_complete: 0, // 是否完成信息
				},
				deepLength: 1,
				mode: 'selector',
				pickerValueDefault: [0],
				pickerValueArray: [],
				similarType: '',

			}
		},
		onLoad() {

		},
		onShow() {

		},
		onBackPress() {
			if (this.$refs.similarPicker.showPicker) {
				this.$refs.similarPicker.pickerCancel();
				return true;
			}

		},
		components: {
			mpvuePicker,
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
			// 选择卫生间类型
			changeWeiType() {
				const _this = this;
				uni.showActionSheet({
					itemList: ['公共卫生间', '独立卫生间'],
					success: function(res) {
						console.log(_this.weiTypes[res.tapIndex].value)
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			// 选择是否与房东同居
			isLiveTogether() {
				uni.showActionSheet({
					itemList: ['与房东同居', '不与房东同居'],
					success: function(res) {},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			// 选择同类房源\房间\床位数量
			// type: house房源  room房间  bed 床位
			similarChange(type) {
				this.similarType = type;
				let unit = '';
				let _data = [];
				let defaultArr = [];
				if (type === 'house') {
					unit = '套';
					defaultArr = [Number(this.houseInfo.similarHouse) - 1]
				} else if(type === 'bed'){
					unit = '位';
					defaultArr = [Number(this.houseInfo.similarBed) - 1]
				} else if(type === 'room'){
					unit = '间';
					defaultArr = [Number(this.houseInfo.similarRoom) - 1]
				}
				for (let i = 1; i <= 99; i++) {
					_data.push({
						label: i + unit,
						value: i
					})
				}
				this.pickerValueArray = _data;
				this.pickerValueDefault = defaultArr;
				this.$refs.similarPicker.show()
			},
			similarConfirm(e) {
				if(this.similarType ==='house'){
					this.houseInfo.similarHouse = e.value[0]
				} else if(this.similarType ==='bed'){
					this.houseInfo.similarBed = e.value[0]
				} else if (this.similarType ==='room'){
					this.houseInfo.similarRoom = e.value[0]
				}
			},
			similarCancel() {
				
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
