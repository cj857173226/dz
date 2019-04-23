<template>
	<view class="contanier">
		<view class="box">
			<view class="label">最少入住天数</view>
			<view class="right-box">
				<input class="day" type="number" placeholder="最少可设置1" placeholder-class="placeholder" maxlength="3" v-model="minday" />
				<view class="unit">晚</view>
			</view>
		</view>
		<view class="box">
			<view class="label">最多入住天数</view>
			<view class="right-box">
				<input class="day" type="number" placeholder="最多可设置500" placeholder-class="placeholder"  maxlength="3"  v-model="maxday" />
				<view class="unit">晚</view>
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
				house_id: '', // 房源id
				minday: '',
				maxday: '',
				isSubmiting: false,
			}
		},
		onLoad() {
			this.getCurData();
		},
		onShow() {

		},
		onNavigationBarButtonTap(e) {
			if(e.index === 0){
				this.save();
			}
		},
		computed: {
			...mapState(['releaseObj']),
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus']),
			// 保存入住天数
			save(){
				if(this.isSubmiting) return;
				const _this = this;
				const id = _this.house_id;
				const minday = _this.minday;
				const maxday = _this.maxday;
				if(!helper.intNumReg(minday)|| !helper.intNumReg(maxday) || minday<=0 || maxday<=0 || minday>500 || maxday>500){
					helper.layer('1~500的整数')
				} else if(maxday<=minday){
					helper.layer('最多天数不能小于最少天数')
				} else{
					let param  = {
						house_id:id,
						minday:minday,
						maxday:maxday
					}
					_this.isSubmiting = true;
					request({
						url:'/wap/api/fangdong.php?action=improveHouse',
						method:'POST',
						data:param,
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
			},
			//获取当前数据
			getCurData() {
				const _releaseObj = this.releaseObj;
				this.house_id = _releaseObj.id;
				this.minday = _releaseObj.minday;
				this.maxday = _releaseObj.maxday;
			}
		}
	}
</script>
<style lang="scss" scoped>
	.contanier {
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;

		.box {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #eaeaea;
			padding: 20upx 0;

			.label {
				font-size: 32upx;
			}

			.right-box {
				display: flex;
				align-items: center;
				font-size: 28upx;

				.day {
					display: flex;
					align-items: center;
					height: 58upx;
					width: 300upx;
					text-align: right;
					margin-right: 10upx;
				}

				.unit {
					height: 58upx;
					line-height: 58upx;
				}
			}
		}
	}
</style>
