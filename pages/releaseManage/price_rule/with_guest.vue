<template>
	<view class="contanier">
		<view class="form_item">
			<view class="label">允许加客</view>
			<view class="radio_wrap">
				<view class="radio_item" :class="{'checked':isAddGuest==='1'}" @tap="addGuestCheck('1')">
					<view class="radio_btn">
						<text class="iconfont icon-gou" v-if="isAddGuest==='1'"></text>
					</view>
					<view class="r_label">是</view>
				</view>
				<view class="radio_item" :class="{'checked':isAddGuest==='0'}" @tap="addGuestCheck('0')">
					<view class="radio_btn">
						<text class="iconfont icon-gou" v-if="isAddGuest==='0'"></text>
					</view>
					<view class="r_label">否</view>
				</view>
			</view>
		</view>
		<view class="form_item" v-if="isAddGuest==='1'">
			<view class="label">加客费用</view>
			<view class="content_wrap">
				<input type="number" :disabled="houseStatus==1|| houseStatus ==0" placeholder-class="placeholder" placeholder="最高设置金额999" maxlength="3" v-model="money">
				<view class="unit">元/每位每晚</view>
			</view>
		</view>

		<view class="guest_desc_wrap" v-if="isAddGuest==='1'">
			<view class="tips">加客费用只做展示,请自行线下收取</view>
			<view class="desc_content">
				<textarea :disabled="houseStatus==1|| houseStatus ==0" placeholder="加客费用描述,可用于描述最大加客人数等(选填)" placeholder-class="placeholder" maxlength="100" v-model="desc" />
				<view class="number_control"><text style="color: #F05B72;" v-text="desc.length"></text>/100</view>
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
				isAddGuest: false,// 是否允许加客
				money:'',// 加客费用
				desc: '', // 加客描述
				isSubmiting: false,
				houseStatus:'', // 房屋状态
			}
		},
		onLoad() {
			this.getCurData()
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
			addGuestCheck(is){
				if(this.houseStatus == 0 || this.houseStatus == 1) return;
				this.isAddGuest = is;
			},
			// 保存加客设置
			save(){
				if(this.houseStatus == 0 || this.houseStatus == 1){
					helper.layer('无法编辑上架或者审核中的房源!');
					return;
				};
				if(this.isSubmiting) return;
				const _this = this;
				const id = _this.house_id;
				const isAddGuest = _this.isAddGuest;
				const money = _this.money;
				const desc = _this.desc;
				let param = {
					house_id: id,
				}
				if(isAddGuest==='1'){
					if(money!==''&&(!helper.intNumReg(money))){
						helper.layer('请填写0~999的整数');
						return;
					}else{
						param = Object.assign(param,{
							addtionalprice:money,
							addtenanttips:desc,
							addtenant:isAddGuest,
						})
					}
				}else{
					param = Object.assign(param,{
						addtionalprice:'',
						addtenanttips:'',
						addtenant:isAddGuest,
					})
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
			},
				//获取当前数据
			getCurData() {
				const _releaseObj = this.releaseObj;
				this.house_id = _releaseObj.id;
				this.houseStatus = _releaseObj.status;
				this.isAddGuest = _releaseObj.addtenant=== '1' ? '1' : '0';
				this.money = _releaseObj.addtionalprice ? _releaseObj.addtionalprice : '';
				this.desc = _releaseObj.addtenanttips?_releaseObj.addtenanttips:'';
			}
		}
	}
</script>
<style lang="scss" scoped>
	$theme-color: #F05B72;

	.contanier {
		box-sizing: border-box;
		width: 100%;

		.form_item {
			box-sizing: border-box;
			min-height: 90upx;
			padding: 20upx 30upx;
			width: 100%;
			border-bottom: 1px solid #eaeaea;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.radio_wrap {
				box-sizing: border-box;
				display: flex;

				.radio_item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-left: 60upx;

					.radio_btn {
						box-sizing: border-box;
						width: 36upx;
						height: 36upx;
						border: 1px solid #aaaaaa;
						border-radius: 50%;
						margin-right: 12upx;
						display: flex;
						justify-content: center;
						align-items: center;

						.iconfont {
							font-size: 32upx;
							color: $theme-color;
						}
					}

					.r_label {
						font-size: 32upx;
					}
				}

				.checked {
					.radio_btn {
						border: 1px solid #F05B72;
					}
				}
			}
			
			.content_wrap{
				display: flex;
				input{
					text-align: right;
					padding-right:16upx;
					font-size: 28upx;
				}
				.unit{
					font-size: 28upx;
					line-height: 52.5upx;
				}
			}
		}
		.guest_desc_wrap{
			box-sizing: border-box;
			padding: 20upx 30upx;
			.tips{
				font-size: 28upx;
			}
			.desc_content{
				position: relative;
				box-sizing: border-box;
				margin-top: 30upx;
				width: 100%;
				height: 400upx;
				border: 1px solid #cccccc;
				padding: 20upx;
				textarea{
					width: 100%;
					height: 100%;
					font-size: 28upx;
				}
				.number_control{
					position: absolute;
					right: 20upx;
					bottom: 20upx;
					font-size: 28upx;
					color: #aaaaaa;
				}
			}
		}

	}
</style>
