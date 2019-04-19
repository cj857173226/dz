<template>
	<view class="bed_info_page">
		<view class="tips_wrap">
			<view class="one_line">为了保证房客体验,我们要求</view>
			<view class="one_line">床品<text class="b_text">至少每客一换</text></view>
		</view>
		<view class="bed_list" v-if="bedList.length>0">
			<view class="bed_item" v-for="(item,index) in bedList" :key="index" @tap="editBed(index)">
				<view class="del_btn_wrap" @tap.stop="deleteBed(index)">
					<view class="del_btn">
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
		<view class="no_list" v-if="bedList.length===0">
			赶紧去添加床铺吧~
		</view>
		<!-- <button class="add_bed my-btn-block" @tap="addBed">添加床铺</button> -->
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
				house_id: '', //房源ID
				bedList: [],
				isDeling: false, // 是否正在删除中
			}
		},
		components: {},
		onLoad() {

		},
		onNavigationBarButtonTap(e) {
			if(e.index===0){
				this.addBed()
			}
		},
		onShow() {
			this.getBedinfo()
		},
		computed: {
			...mapState(['releaseObj']),
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus','clearCustomBedOption','clearCurBedOption']),
			// 编辑床铺
			editBed(index) {
				uni.navigateTo({
					url: '/pages/releaseManage/bed_info/edit_bed?index=' + index
				})
			},
			// 删除床铺
			deleteBed(index) {
				if(this.isDeling) return;
				const _this = this;
				const id = _this.house_id;
				uni.showModal({
					title: '删除',
					content: '是否删除这个床铺',
					confirmText: '删除',
					confirmColor: '#F05B72',
					success: function(res) {
						if (res.confirm) {
							let curList = _this.bedList.slice();
							//这里分割一下数组
							curList.splice(index,1);
							let param = JSON.stringify(curList);
							_this.isDeling = true;
							uni.showLoading({
								title:'删除床铺...',
								mask:true,
							})
							request({
								url:'/wap/api/fangdong.php?action=improveHouse',
								method:'POST',
								data:{
									house_id:id,
									bed:param,
								},
								success:(res)=>{
									if(res.data.status === 'success'){
										let _data = res.data.content;
										_this.editReleaseInfo(_data);
										_this.editReleaseInfoStatus(true);
										uni.hideLoading();
									}else{
										helper.layer('删除失败')
									}
								},
								complete:()=>{
									_this.isDeling = false;
									_this.getBedinfo();
								}
							})
							console.log(param)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			// 跳转到添加床铺页面
			addBed() {
				//清空自定义床铺组合
				this.clearCustomBedOption();
				// 清空当前选择的床铺组合
				this.clearCurBedOption();
				uni.navigateTo({
					url: '/pages/releaseManage/bed_info/add_bed'
				})
			},
			getBedinfo() {
				const _releaseObj = this.releaseObj;
				let _bedList = _releaseObj.bed?JSON.parse(_releaseObj.bed):[];
				this.house_id = _releaseObj.id;
				this.bedList = _bedList;
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
		.no_list{
			box-sizing: border-box;
			width: 100%;
			height: 300upx;
			font-size: 32upx;
			color: #aaaaaa;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.add_bed {
			margin-top: 40upx;
		}
	}
</style>
