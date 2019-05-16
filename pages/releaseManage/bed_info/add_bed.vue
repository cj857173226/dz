<template>
	<view class="add_bed_page">
		<view class="title">
			选择床铺
		</view>
		<view class="bed-default-option" v-if="defaultBedOptions.length>0">
			<view class="option-item" :class="{'option-item-active':curActiveBedOption && curActiveBedOption.option == item.option}"
			 v-for="(item,index) in defaultBedOptions" @tap.stop="checkBedOption(item)" :key='index'>
				<view class="bed-type" v-text="item.type=='double'?'双人床':'单人床'"></view>
				<view class="bed-size">宽{{item.weight}}m长{{item.length}}m</view>
			</view>
		</view>
		<view class="add-other-bed" v-if="!CustomBedOption" @tap.stop="otherBed('add')">
			<text class="iconfont icon-jia">其他类型和尺寸</text>
		</view>
		<view class="bed-other-option" v-if="CustomBedOption" :class="{'option-item-active':curActiveBedOption && curActiveBedOption.option == CustomBedOption.option}"
		 @tap.stop="checkBedOption(CustomBedOption)">
			<view class="left">
				<view class="bed-type" v-if="CustomBedOption.type=='double'">双人床</view>
				<view class="bed-type" v-else-if="CustomBedOption.type=='single'">单人床</view>
				<view class="bed-type" v-else-if="CustomBedOption.type=='sofa'">沙发</view>
				<view class="bed-type" v-else-if="CustomBedOption.type=='canopy'">双层床</view>
				<view class="bed-type" v-else-if="CustomBedOption.type=='tatami'">榻榻米</view>
				<view class="bed-type" v-else-if="CustomBedOption.type=='other'">其他</view>
				<view class="bed-size">宽{{CustomBedOption.weight}}m长{{CustomBedOption.length}}m</view>
			</view>
			<view class="edit-other-type" @tap.stop="otherBed('edit', CustomBedOption)">编辑</view>

		</view>
		<view class="bed-number-wrap">
			<view class="main-box">
				<text>同规格床铺数</text>
				<view class="number-control">
					<view class="reduce-btn" :class="{'dis-num':bedNumber<=1}" @click.stop="checkBedNumber(0)"><text class="iconfont icon-jian"></text></view>
					<view class="bed-num"><text>{{bedNumber}}</text>张</view>
					<view class="add-btn" :class="{'dis-num':bedNumber>=99}" @click.stop="checkBedNumber(1)"><text class="iconfont icon-jia"></text></view>
				</view>
			</view>
			<view class="tips">
				如果有相同类型和尺寸的床铺,可以设置同规格床铺数而不需要重复添加.如无需要,请填写1张
			</view>
		</view>
		<button class="my-btn-block" :class="{'dis_btn':!curActiveBedOption}" style="margin-top: 40upx;" @tap="submitAddBed">
			确定
		</button>
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
				house_id:'',// 房源id
				defaultBedOptions: [{
						option: 1,
						length: "2.0",
						type: "double",
						weight: "1.8",
					},
					{
						option: 2,
						length: "2.0",
						type: "single",
						weight: "1.2",
					},
					{
						option: 3,
						length: "2.0",
						type: "double",
						weight: "1.8",
					},
					{
						option: 4,
						length: "1.8",
						type: "single",
						weight: "1.8",
					},
					{
						option: 5,
						length: "2.0",
						type: "double",
						weight: "1.5",
					},
					{
						option: 6,
						length: "1.8",
						type: "single",
						weight: "1.0",
					},
				],
				// 当前选择的床铺组合
				curActiveBedOption: null,
				// 自定义床铺组合
				CustomBedOption:null,
				// 选择床铺数量
				bedNumber: 1,
				isSubmiting:false,
			}
		},
		onLoad() {

		},
		onShow() {
			this.getCustomBed();
		},
		computed: {
			...mapState(['releaseObj', 'customBedOption','curBedOption']),
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus','eidtCurBedOption']),
			// 选择床铺
			checkBedOption(bed) {
				this.eidtCurBedOption(bed);
				this.curActiveBedOption = this.curBedOption;
			},
			// 改变床铺数量
			checkBedNumber(type) {
				if (type == 0) {
					if (this.bedNumber <= 1) {
						return
					}
					this.$set(this, 'bedNumber', Number(this.bedNumber) - 1)
				} else if (type == 1) {
					if (this.bedNumber >= 99) {
						return
					}
					this.$set(this, 'bedNumber', Number(this.bedNumber) + 1)
				}
			},
			// 提交添加床铺
			submitAddBed() {
				if(!this.curActiveBedOption || this.isSubmiting) return;
				const _this = this;
				const id = this.house_id;
				const _curbed = this.curActiveBedOption;
				let curBedList = this.releaseObj.bed?this.releaseObj.bed:[];
				let _bedInfo = {
					type:_curbed.type,
					length:_curbed.length,
					weight:_curbed.weight,
					num:_this.bedNumber
				}
				curBedList.unshift(_bedInfo);
				let bedParam = JSON.stringify(curBedList)
				_this.isSubmiting = true;
				uni.showLoading({
					title:'添加床铺..',
					mask:true,
				})
				request({
					url:'/wap/api/fangdong.php?action=improveHouse',
					method:'POST',
					data:{
						house_id:id,
						bed:bedParam,
					},
					success:(res)=>{
						if(res.data.status === 'success'){
							let _data = res.data.content;
							_this.editReleaseInfo(_data);
							_this.editReleaseInfoStatus(true);
							uni.hideLoading();
							uni.navigateBack({
								delta:1,
							})
							
						}else{
							helper.layer('添加失败')
						}
					},
					complete:()=>{
						_this.isSubmiting = false;
					}
				})
			},
			// 到添加或编辑其他尺寸床铺页面
			// handle 操作方式   add:添加  edit:编辑
			otherBed(handle, par) {
				let url = '';
				let params = '';
				if (par) {
					params = JSON.stringify(par);
				}
				if (handle === 'add') {
					url = '/pages/releaseManage/bed_info/other_bed?type=add'
				} else if (handle === 'edit') {
					url = '/pages/releaseManage/bed_info/other_bed?type=edit&param=' + params
				}
				uni.navigateTo({
					url: url
				})
			},
			// 获取当前床铺组合
			getCustomBed(){
				this.house_id = this.releaseObj.id;
				this.CustomBedOption = this.customBedOption;
				this.curActiveBedOption = this.curBedOption;
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

	.add_bed_page {
		box-sizing: border-box;
		min-height: 100%;
		width: 100%;
		padding: 30upx;

		.title {
			font-size: 32upx;
			color: #aaaaaa;
			margin-bottom: 30upx;

		}

		.bed-default-option {
			box-sizing: border-box;
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;

			.option-item {
				box-sizing: border-box;
				height: 100upx;
				line-height: 100upx;
				width: 48%;
				padding: 0 10upx;
				border: 1px dashed #cccccc;
				border-radius: 8upx;
				margin-bottom: 30upx;
				color: #aaaaaa;
				text-align: center;

				.bed-type {
					display: inline;
					font-size: 32upx;
					margin-right: 10upx;
				}

				.bed-size {
					display: inline;
					font-size: 28upx;
				}
			}



		}

		.add-other-bed {
			box-sizing: border-box;
			height: 100upx;
			line-height: 100upx;
			width: 100%;
			padding: 0 10upx;
			border: 1px dashed #cccccc;
			border-radius: 8upx;
			text-align: center;

			.iconfont {
				font-size: 32upx;
				color: #aaaaaa;
			}
		}

		.bed-other-option {
			box-sizing: border-box;
			border-radius: 8upx;
			height: 100upx;
			line-height: 100upx;
			width: 100%;
			padding: 0 20upx;
			border: 1px dashed #cccccc;
			display: flex;
			justify-content: space-between;
			color: #aaaaaa;

			.left {
				box-sizing: border-box;

				.bed-type {
					margin-right: 10upx;
					display: inline;
				}

				.bed-size {
					font-size: 28upx;
					display: inline;
				}
			}

			.edit-other-type {}
		}

		.option-item-active {
			border: 1px solid #000000 !important;
			color: #000000 !important;
		}

		.bed-number-wrap {
			margin-top: 40upx;
			box-sizing: border-box;
			width: 100%;
			padding: 30upx 0;
			border-top: 1px solid #cccccc;
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
	}
</style>
