<template>
	<view class="check_in_page">
		<view class="add_btn" @tap="handleCheck('add')"><text class="iconfont icon-icon-test"></text>添加入住人</view>
		<scroll-view class="check_list_wrap" scroll-y>
			<view class="check_list" v-if="listData.length>0">
				<view class="check_item" v-for="(item, index) in listData" :key="index"  @tap="handleCheck('edit', item)">
					<view class="user_info">
						<p class="name">{{item.name}}</p>
						<p class="id_card">身份证&nbsp;{{item.idcardno}}</p>
					</view>
					<view class="after_icon"><text class="iconfont icon-right"></text></view>
				</view>
			</view>

		</scroll-view>
	</view>
</template>


<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				listData: [{
						addtime: "0000-00-00 00:00:00",
						birth: "",
						bookorderid: "0",
						buyinsuranceyype: "no",
						id: "81",
						idcardauthstate: "wait",
						idcardno: "511502199509118434",
						mobile: "",
						mobilecode: "86",
						name: "阿斯达四大",
						nation: "0",
						oversea: "no",
						passportno: "",
						sex: "man",
						userid: "104",
					},
					{
						addtime: "0000-00-00 00:00:00",
						birth: "",
						bookorderid: "0",
						buyinsuranceyype: "no",
						id: "81",
						idcardauthstate: "wait",
						idcardno: "511502199509118434",
						mobile: "",
						mobilecode: "86",
						name: "阿斯达四大",
						nation: "0",
						oversea: "no",
						passportno: "",
						sex: "man",
						userid: "104",
					}
				]
			};
		},
		filters: {
			filterIdCard: function(value) {
				if (value) return;
			}
		},
		computed: {
			...mapState(['islogin', 'token', 'isEditCheckIn'])
		},
		onLoad(option) {},
		onShow() {},
		methods: {
			...mapMutations(['checkInEditStatus']),
			// 修改或者添加入住人信息页面
			// type ---> add : 添加   edit:修改
			handleCheck(type,par){
				this.checkInEditStatus(false)
				let url = '';
				if(type === 'add'){
					url = '/pages/check_in/edit_check_in?type=add';
				} else if (type === 'edit'){
					const params = JSON.stringify(par);
					url = '/pages/check_in/edit_check_in?type=edit&param=' + params
				}
				
				uni.navigateTo({
					url: url
				})
			},
		}
	}
</script>
<style>
	page {
		height: 100%;
		background: #f5f6f8;
	}
</style>
<style lang="scss" scoped>
	$theme-color: #F05B72;
	$back-color:#f5f6f8;

	.check_in_page {
		box-sizing: border-box;
		height: 100%;
		padding-top: 20upx;
		.add_btn {
			box-sizing: border-box;
			width: 100%;
			height: 100upx;
			background: #FFFFFF;
			line-height: 100upx;
			font-size: 16px;
			text-align: center;
			color: $theme-color;

			.iconfont {
				font-size: 16px;
				font-weight: 800;
				margin-right: 8upx;
			}

			&:active {
				color: #f4a9b5;
			}
		}

		.check_list_wrap {
			box-sizing: border-box;
			width: 100%;
			margin-top: 20upx;
			height: calc(100% - 140upx);

			.check_list {
				box-sizing: border-box;
				width: 100%;
				background: #FFFFFF;
				display: flex;
				flex-direction: column;

				.check_item {
					position: relative;
					box-sizing: border-box;
					width: 100%;
					padding: 20upx 30upx;
					height: 160upx;
					display: flex;
					flex-direction: row;


					.user_info {
						box-sizing: border-box;
						display: flex;
						flex-direction: column;
						flex-grow: 1;
						justify-content: space-around;

						.name {
							font-size: 16px;
						}

						.id_card {
							font-size: 14px;
							color: #aaaaaa;
						}
					}

					.after_icon {
						box-sizing: border-box;
						display: flex;
						justify-content: center;
						align-items: center;
						width: 60upx;

						.iconfont {
							font-size: 50upx;
							color: #aaaaaa;
						}
					}

					&:last-child {
						&::after {
							display: none;
						}
					}
					&::after {
						position: absolute;
						bottom: 0;
						left: 30upx;
						content: '';
						display: block;
						height: 1px;
						width: calc(100% - 60upx);
						background: #eaeaea;
					}
					&:active{
						background: #f5f5f5;
					}

				}
			}
		}
	}
</style>
