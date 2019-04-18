<template>
	<view class="house_basic_page">
		<view class="house_basic_form">
			<view class="form_item" @tap="setHouseType()">
				<view class="item_left">
					<view class="label">房屋类型</view>
					<view class="empty_data" v-if="houseType ===''">请选择</view>
					<view class="result" v-else>{{houseType}}</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="setHouseArea">
				<view class="item_left">
					<view class="label">出租面积</view>
					<view class="empty_data" v-if="houseArea==='0'">请选择</view>
					<view class="result" v-else>{{houseArea}}㎡</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="changeWeiType">
				<view class="item_left">
					<view class="label">卫生间类型</view>
					<view class="empty_data" v-if="weiType === ''">请选择</view>
					<view class="result" v-else>
						<text v-if="weiType==='1'">公共卫生间</text>
						<text v-if="weiType==='2'">独立卫生间</text>
					</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="isLiveTogether">
				<view class="item_left">
					<view class="label">与房东同居一套房间内</view>
					<view class="empty_data" v-if="cohabitation===''">请选择</view>
					<view class="result" v-else>
						<text v-if="cohabitation==='1'">是</text>
						<text v-if="cohabitation==='2'">否</text>
					</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="setPeopleNum()">
				<view class="item_left">
					<view class="label">宜居人数</view>
					<view class="empty_data" v-if="liveNumber===''">请选择</view>
					<view class="result" v-else>{{liveNumber}}人</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>

			<view class="form_item" @tap="similarChange">
				<view class="item_left">
					<view class="label">
						<text v-if="leasetype==='1'">同类房源数</text>
						<text v-if="leasetype==='2'">同类房间数</text>
						<text v-if="leasetype==='3'">同类床位数</text>
					</view>
					<view class="empty_data"></view>
					<view class="result">{{sameroom}}
						<text v-if="leasetype==='1'">套</text>
						<text v-if="leasetype==='2'">间</text>
						<text v-if="leasetype==='3'">位</text>
					</view>
					<view class="tips">你有相同
						<text v-if="leasetype==='1'">房源</text>
						<text v-if="leasetype==='2'">房间</text>
						<text v-if="leasetype==='3'">床位</text>
						吗</view>
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
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import {
		request
	} from '../../../common/request.js'
	import helper from '../../../common/helper.js'
	import {
		shortHttp
	} from '../../../common/requestUrl.json'
	import mpvuePicker from '../../../components/mpvue-picker/mpvuePicker.vue';
	export default {
		data() {
			return {
				leasetype: '', // 出租类型：1：整套出租；2：独立房间；3：合住房间
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
				// 是否与房东同居选择数据
				cohabitationData: [{
						value: '1',
						text: '是'
					},
					{
						value: '2',
						text: '否'
					}
				],
				house_id: '',
				roomtype_shi: '', //房屋类型，室
				roomtype_ting: '', //房屋类型，厅
				roomtype_wei: '', //房屋类型，卫
				roomtype_chu: '', //房屋类型，厨
				roomtype_yt: '', //房屋类型，阳台
				houseArea: '', //房源面积
				weiType: '', //卫生间类型
				cohabitation: '', // 是否和房东同居
				liveNumber: '', // 宜居人数
				sameroom: '', // 同类房源、床位、房间
				deepLength: 1, //picker 列数
				mode: 'selector', //picker类型
				pickerValueDefault: [0],
				pickerValueArray: [],

			}
		},
		onLoad() {

		},
		onShow() {
			this.getCurPageData();
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
			...mapState(['releaseObj']),
			houseType: {
				get() {
					if (this.roomtype_shi === '0' && this.roomtype_ting === '0' && this.roomtype_wei ===
						'0' && this.roomtype_chu === '0' && this.roomtype_yt === '0') {
						return '';
					} else {
						return this.roomtype_shi + '室 ' + this.roomtype_ting + '厅 ' + this.roomtype_wei + '卫 ' + this.roomtype_chu +
							'厨 ' + this.roomtype_yt + '阳台'
					}
				}
			}
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus']),
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
				const old_val = _this.releaseObj.toilet;
				const id = _this.house_id;
				uni.showActionSheet({
					itemList: ['公共卫生间', '独立卫生间'],
					success: function(res) {
						const _val = _this.weiTypes[res.tapIndex].value;
						if (old_val !== _val) {
							request({
								url: '/wap/api/fangdong.php?action=improveHouse',
								method: 'POST',
								data: {
									house_id: id,
									toilet: _val
								},
								success: (res) => {
									if (res.data.status === 'success') {
										let _data = res.data.content;
										_this.editReleaseInfo(_data);
										_this.editReleaseInfoStatus(true);
									} else {
										helper.layer('修改失败')
									}
								},
								complete: () => {
									_this.getCurPageData();
								}
							})
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			// 选择是否与房东同居
			isLiveTogether() {
				const _this = this;
				const old_val = _this.releaseObj.livetogether;
				const id = _this.house_id;
				uni.showActionSheet({
					itemList: ['与房东同居', '不与房东同居'],
					success: function(res) {
						const _val = _this.cohabitationData[res.tapIndex].value;
						if (old_val !== _val) {
							request({
								url: '/wap/api/fangdong.php?action=improveHouse',
								method: 'POST',
								data: {
									house_id: id,
									livetogether: _val
								},
								success: (res) => {
									if (res.data.status === 'success') {
										let _data = res.data.content;
										_this.editReleaseInfo(_data);
										_this.editReleaseInfoStatus(true);
									} else {
										helper.layer('修改失败')
									}
								},
								complete: () => {
									_this.getCurPageData();
								}
							})
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			// 选择同类房源\房间\床位数量
			// type: house房源  room房间  bed 床位
			similarChange() {
				const type = this.leasetype;
				let unit = '';
				let _data = [];
				let defaultArr = [];
				if (type === '1') {
					unit = '套';
				} else if (type === '2') {
					unit = '间';
				} else if (type === '3') {
					unit = '位';
				}
				for (let i = 1; i <= 99; i++) {
					_data.push({
						label: i + unit,
						value: i
					})
				}
				this.pickerValueArray = _data;
				this.pickerValueDefault = this.sameroom <= 0? [0] : [Number(this.sameroom) - 1];
				this.$refs.similarPicker.show();
			},
			//  确认同类房源\房间\床位数量选择
			similarConfirm(e) {
				const _this = this;
				const old_val = this.releaseObj.sameroom;
				const _val = e.value[0];
				const id = _this.house_id;
				_this.sameroom = _val;
				if(Number(old_val) !== _val){
						request({
						url: '/wap/api/fangdong.php?action=improveHouse',
						method: 'POST',
						data: {
							house_id: id,
							sameroom: _val
						},
						success: (res) => {
							if (res.data.status === 'success') {
								let _data = res.data.content;
								_this.editReleaseInfo(_data);
								_this.editReleaseInfoStatus(true);
							} else {
								helper.layer('修改失败')
							}
						},
						complete: () => {
							_this.getCurPageData();
						}
					})
				}
				
			},
			// 取消同类房源\房间\床位数量选择
			similarCancel() {

			},
			// 获取当前页面的信息
			getCurPageData() {
				let _houseInfo = this.releaseObj;
				this.house_id = _houseInfo.id;
				this.leasetype = _houseInfo.leasetype; //房屋出租类型
				this.roomtype_shi = _houseInfo.roomtype_shi;
				this.roomtype_ting = _houseInfo.roomtype_ting;
				this.roomtype_wei = _houseInfo.roomtype_wei;
				this.roomtype_chu = _houseInfo.roomtype_chu;
				this.roomtype_yt = _houseInfo.roomtype_yt;
				this.houseArea = _houseInfo.area; // 房屋面积
				this.weiType = _houseInfo.toilet; // 卫生间类型
				this.cohabitation = _houseInfo.livetogether; //是否与房东同居
				this.liveNumber = _houseInfo.tantnum; // 宜居人数
				this.sameroom = _houseInfo.sameroom; // 同类房源、床位、房间
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
