<template>
	<view class="house_area_page">
		<view class="tips_wrap">
			<view class="one_line">请填写<text class="b_text">最适宜居住的人数</text></view>
			<view class="one_line">而不是最多入住人数</view>
			<view class="one_line" style="font-size: 28upx;">(如果需要,请在"加客设置"中填写)</view>
		</view>
		<view class="input_wrap">
			<input type="number" placeholder="请填写" placeholder-style="font-size:32upx; color:#ccc;" focus maxlength="2" v-model="number">
			<view class="unit">人</view>
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
				number: '',
				old_number:'',
				isSubmiting: false, // 是否正在提交
			}
		},
		onLoad() {

		},
		onShow() {
			this.getPeopleNumber();
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.submitPeopleNum();
			}
		},
		computed: {
			...mapState(['releaseObj']),
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus']),
			submitPeopleNum() {
				if(this.isSubmiting) return;
				const _this = this;
				const id = _this.releaseObj.id;
				const number = _this.number;
				const old_number = _this.old_number;
				const reg = /^\d*$/;
				if (Number(number) <= 0 || Number(number) > 99 || !reg.test(number)) {
					helper.layer('1~99的正整数');
				}else{
					if (number === old_number) {
						uni.navigateBack({
							delta: 1,
						})
					} else {
						_this.isSubmiting = true;
						request({
							url:'/wap/api/fangdong.php?action=improveHouse',
							method:'POST',
							data:{
								house_id:id,
								tantnum:number
							},
							success:(res)=>{
								if(res.data.status === 'success'){
									let _data = res.data.content;
									_this.editReleaseInfo(_data);
									_this.editReleaseInfoStatus(true);
									uni.navigateBack({
										delta:1,
									})
								}else{
									helper.layer('保存失败')
								}
							},
							complete:()=>{
								_this.isSubmiting = false;
							}
						})
					}
				}
			},
			// 获取房屋面积
			getPeopleNumber() {
				const _releaseObj = this.releaseObj;
				this.number = Number(_releaseObj.tantnum) <= 0 ? '' : _releaseObj.tantnum;
				this.old_number = Number(_releaseObj.tantnum) <= 0 ? '' : _releaseObj.tantnum;
			},
		},
	
	}
</script>

<style>
	page {
		height: 100%;
	}
</style>
<style lang="scss" scoped>
	.house_area_page {
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

		.input_wrap {
			margin: 0 auto;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 260upx;
			height: 100upx;
			border: 1px solid #cccccc;

			input {
				text-align: right;
				width: 120upx;
			}
		}
	}
</style>
