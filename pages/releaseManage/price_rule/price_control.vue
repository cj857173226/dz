<template>
	<view class="center">
		<view class="price-amount">
			<view class="label">日价金额</view>
			<view class="amout-box">
				<input class="amount" placeholder="最高设置金额99999" placeholder-class="placeholder" type="number" maxlength="6"  v-model="money"/>
				<view class="unit">元/每晚</view>
			</view>
		</view>
		<text class="hint">日价的10%将作为服务费,请酌情考虑。</text>
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
				house_id:'', //房源id
				money:'',
				isSubmiting:false,
			}
		},
		onLoad() {
			this.getCurData();
		},
		onShow() {

		},
		onBackPress() {
		},
		onNavigationBarButtonTap(e){
			if(e.index === 0){
				this.save()
			}
		},
		computed: {
			...mapState(['releaseObj']),
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus']),
			// 保存日价设置
			save(){
				if(this.isSubmiting) return;
				const _this = this;
				const money = _this.money;
				const id = _this.house_id;
				if(money<=0 || money> 99999 || !helper.intNumReg(money)){
					helper.layer('请输入0~99999的正整数')
				}else{
					_this.isSubmiting = true;
					request({
						url:'/wap/api/fangdong.php?action=improveHouse',
						method:'POST',
						data:{
							house_id:id,
							dayrentprice:money,
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
			},
			//获取当前数据
			getCurData(){
				const _dayPrice = this.releaseObj.dayrentprice;
				this.house_id = this.releaseObj.id;
				console.log(_dayPrice)
				this.money = _dayPrice == '0'?'':_dayPrice;
			}
		}
	}
</script>
<style lang="scss" scoped>
	.center {
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;

		.label {
			height: 56upx;
			line-height: 56upx;
			font-size: 32upx;
		}

		.price-amount {
			width: 100%;
			padding: 20upx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #F4F4F4;
			margin-bottom: 20upx;

			.amout-box {
				height: 56upx;
				display: flex;

				.amount {
					height: 100%;
					text-align: right;
					width: 300upx;
				}

				.unit {
					height: 100%;
					margin-left: 8upx;
					line-height: 56upx;
					font-size: 28upx;
				}
			}
		}

		.hint {
			color: #cccccc;
			font-size: 28upx;
		}
	}
</style>
