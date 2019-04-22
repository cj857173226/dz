<template>
	<view class="contanier">
		<view class="form_item">
			<view class="label">允许加客</view>
			<view class="radio_wrap">
				<view class="radio_item" :class="{'checked':isAddGuest===true}" @tap="addGuestCheck(true)">
					<view class="radio_btn">
						<text class="iconfont icon-gou" v-if="isAddGuest===true"></text>
					</view>
					<view class="r_label">是</view>
				</view>
				<view class="radio_item" :class="{'checked':isAddGuest===false}" @tap="addGuestCheck(false)">
					<view class="radio_btn">
						<text class="iconfont icon-gou" v-if="isAddGuest===false"></text>
					</view>
					<view class="r_label">否</view>
				</view>
			</view>
		</view>
		<view class="form_item" v-if="isAddGuest===true">
			<view class="label">加客费用</view>
			<view class="content_wrap">
				<input type="number" placeholder-class="placeholder" placeholder="最高设置金额999" maxlength="3" v-model="money">
				<view class="unit">元/每位每晚</view>
			</view>
		</view>
		
		<view class="guest_desc_wrap" v-if="isAddGuest===true">
			<view class="tips">加客费用只做展示,请自行线下收取</view>
			<view class="desc_content">
				<textarea placeholder="加客费用描述,可用于描述最大加客人数等(选填)" placeholder-class="placeholder" maxlength="100" v-model="desc"/>
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
				isAddGuest: false,// 是否允许加客
				money:'',// 加客费用
				desc: '', // 加客描述
				
			}
		},
		onLoad() {

		},
		onShow() {

		},
		computed: {

		},
		methods: {
			addGuestCheck(is){
				this.isAddGuest = is;
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
