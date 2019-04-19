<template>
	<view class="house_facilities_page">
		<view class="facilities_check_group">
			<view class="check_wrap" v-for="(item,index) in checkList" :key="index">
				<view class="title" v-if="item.type===1">{{item.title}}</view>
				<view class="check_item" v-if="item.type===2" :class="{'check_item_on':item.checked}" @tap="facilitiesCheck(index)">
					<view class="check_icon">
						<text class="iconfont" :class="item.icon"></text>
					</view>
					<view class="label">
						{{item.label}}
					</view>
					<view class="check_box" :class="{'check_on':item.checked}">
						<text class="iconfont icon-gou" v-if="item.checked"></text>
					</view>
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
	} from '../../../common/request.js'
	import helper from '../../../common/helper.js'
	export default {
		data() {
			return {
				house_id: '', //房源id
				// 配套设施选项列表
				checkList: [{
						type: 1, // 1.标题 2.多选框
						title: '卫浴', //标题
					},
					{
						type: 2,
						label: '热水淋浴',
						checked: false,
						value: 'shower',
						icon: 'icon-reshui'
					},
					{
						type: 2,
						label: '浴缸',
						checked: false,
						value: 'hotbathtub',
						icon: 'icon-yugang'
					},
					{
						type: 2,
						label: '拖鞋',
						checked: false,
						value: 'slippers',
						icon: 'icon-tuoxie'
					},
					{
						type: 2,
						label: '手纸',
						checked: false,
						value: 'toiletpaper',
						icon: 'icon-weishengzhi_'
					},
					{
						type: 2,
						label: '牙具',
						checked: false,
						value: 'toothbrush',
						icon: 'icon-yaju'
					},
					{
						type: 2,
						label: '毛巾',
						checked: false,
						value: 'towel',
						icon: 'icon-maojin_'
					},
					{
						type: 2,
						label: '浴液 洗发水',
						checked: false,
						value: 'toiletries',
						icon: 'icon-muyulu'
					},
					{
						type: 2,
						label: '香皂',
						checked: false,
						value: 'soap',
						icon: 'icon-xiangzao_'
					},
					{
						type: 1, // 1.标题 2.多选框
						title: '电器', //标题
					},
					{
						type: 2,
						label: '空调',
						checked: false,
						value: 'aircondition',
						icon: 'icon-kongdiao'
					},
					{
						type: 2,
						label: '电视',
						checked: false,
						value: 'tv',
						icon: 'icon-dianshi'
					},
					{
						type: 2,
						label: '洗衣机',
						checked: false,
						value: 'washer',
						icon: 'icon-xiyiji'
					},
					{
						type: 2,
						label: '冰箱',
						checked: false,
						value: 'icebox',
						icon: 'icon-bingxiang'
					},
					{
						type: 2,
						label: '饮水设备',
						checked: false,
						value: 'drinking',
						icon: 'icon-yinshuiji'
					},
					{
						type: 1,
						title: '设施',
					},
					{
						type: 2,
						label: '无线网络',
						checked: false,
						value: 'wireless',
						icon: 'icon-wuxianwangluo'
					},
					{
						type: 2,
						label: '电梯',
						checked: false,
						value: 'elevator',
						icon: 'icon-icon_lift'
					},
					{
						type: 2,
						label: '门禁系统',
						checked: false,
						value: 'accesssys',
						icon: 'icon-webiconmenjinxitong'
					},
					{
						type: 2,
						label: '停车位',
						checked: false,
						value: 'parkingspace',
						icon: 'icon-tingche'
					},
					{
						type: 2,
						label: '暖气',
						checked: false,
						value: 'heater',
						icon: 'icon-nuanqi'
					},
					{
						type: 2,
						label: '有线网络',
						checked: false,
						value: 'wired',
						icon: 'icon-youxianwangluo'
					},
					{
						type: 1,
						title: '要求',
					},
					{
						type: 2,
						label: '允许做饭',
						checked: false,
						value: 'iscook',
						icon: 'icon-kezuofan'
					},
					{
						type: 2,
						label: '允许吸烟',
						checked: false,
						value: 'smoke',
						icon: 'icon-kexiyan'
					},
					{
						type: 2,
						label: '允许聚餐',
						checked: false,
						value: 'meet',
						icon: 'icon-faci_juhui'
					},
					{
						type: 2,
						label: '允许带宠物',
						checked: false,
						value: 'pet',
						icon: 'icon-yunxudaichongwu'
					}
				],
				checkedList: [],
				isSubmiting: false, // 是否在提交中

			}
		},
		onLoad() {
			this.getFacilitiesData();
		},
		onShow() {

		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.submitFacilities()
			}
		},
		computed: {
			...mapState(['releaseObj']),
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus', 'clearCustomBedOption',
				'clearCurBedOption'
			]),
			// 配套设施选择
			facilitiesCheck(index) {
				let _arr = [];
				this.checkList[index].checked = !this.checkList[index].checked;
				this.checkList.forEach(function(item, index) {
					if (item.type === 2 && item.checked) {
						_arr.push(item.value)
					}
				})
				this.checkedList = _arr;
			},
			// 提交配套设施
			submitFacilities() {
				if (this.isSubmiting) return;
				const _this = this;
				const id = _this.house_id;
				if (_this.checkedList.length <= 0) {
					uni.showToast({
						title: '请选择配套设施',
						duration: 1500,
						icon: 'none'
					});
				} else {
					_this.isSubmiting = true;
					let param = JSON.stringify(_this.checkedList)
					request({
						url: '/wap/api/fangdong.php?action=improveHouse',
						method: 'POST',
						data: {
							house_id: id,
							sb_list: param,
						},
						success: (res) => {
							if (res.data.status === 'success') {
								let _data = res.data.content;
								_this.editReleaseInfo(_data);
								_this.editReleaseInfoStatus(true);
								uni.navigateBack({
									delta: 1,
								})

							} else {
								helper.layer('设置失败')
							}
						},
						complete: () => {
							_this.isSubmiting = false;
						},
					})
				}
			},
			// 获取当前设施
			getFacilitiesData() {
				const _releaseObj = this.releaseObj;
				let curFacilities = _releaseObj.sb_list ? JSON.parse(_releaseObj.sb_list) : [];
				this.checkedList = curFacilities;
				this.house_id = _releaseObj.id;
				this.checkList.map((item,index,self)=>{
					if(item.type ===2 && curFacilities.indexOf(item.value)!= -1){
						self[index].checked = true;
					}
				})
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

	.house_facilities_page {
		box-sizing: border-box;
		width: 100%;
		min-height: 100%;

		.facilities_check_group {
			box-sizing: border-box;
			width: 100%;

			.check_wrap {
				box-sizing: border-box;
				width: 100%;

				.title {
					box-sizing: border-box;
					width: 100%;
					height: 90upx;
					line-height: 90upx;
					padding: 0 20upx;
					background: #eaeaea;
				}

				.check_item {
					box-sizing: border-box;
					width: 100%;
					padding: 0 20upx;
					height: 90upx;
					display: flex;
					flex-direction: row;
					align-items: center;
					color: #000;
					border-bottom: 1px solid #eaeaea;

					.check_icon {
						margin-right: 16upx;

						.iconfont {
							font-size: 34upx;
						}
					}

					.label {
						height: 100%;
						line-height: 90upx;
						flex-grow: 1;
					}

					.check_box {
						box-sizing: border-box;
						width: 36upx;
						height: 36upx;
						border: 1px solid #000;
						text-align: center;
						line-height: 36upx;

						.iconfont {
							font-size: 32upx;
							color: $theme-color;
						}
					}
				}

				.check_item_on {
					.check_icon {
						color: $theme-color;
					}

					.label {
						color: $theme-color;
					}

					.check_box {
						border: 1px solid $theme-color;
					}
				}
			}
		}

	}
</style>
