<template>
	<view class="message_ad">
		<view class="ad_list" v-if="adList.length>0">
			<view class="ad_item" v-for="(item,index) in adList" :key="index" @tap="adDetail(item)">
				<img class="ad_img" v-if="item.picture" :src="host+item.picture">
				<view class="no_img" v-else>广告{{index+1}}</view>
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
	} from '../../common/request.js'
	import helper from 'common/helper.js'
	import {shortHttp} from '../../common/requestUrl.json'
	export default {
		data() {
			return {
				host:shortHttp,
				adList:[],
			}
		},
		onLoad() {
			this.getAdList();
		},
		onShow() {

		},
		computed: {

		},
		methods: {
			// 获取广告列表
			getAdList() {
				const _this = this;
				uni.showLoading({
					title:'加载中..',
					mask:true,
				})
				request({
					url: '/wap/api/my.php?action=messageListAd',
					success: (res) => {
						if (res.data.status === 'success') {
							const _data = res.data.content;
							if (_data.length > 0) {
								console.log(_data)
								_this.adList = _data;
							}
						} else {
							helper.layer('获取优惠活动失败')
						}
					},
					fail: () => {
						helper.layer('获取优惠活动失败')
					},
					complete: () => {
						uni.hideLoading();
					}

				})
			},
			// 查看广告详情
			adDetail(par){
				uni.setStorageSync('dz_ad',par);
				uni.navigateTo({
					url:'/pages/my/ad'
				});
			},
		}
	}
</script>

<style>
	page {
		min-height: 100%;
	}
</style>
<style lang="scss" scoped>
	$theme-color: #F05B72;

	.message_ad {
		box-sizing: border-box;
		width: 100%;
		padding: 60upx 40upx;
		.ad_list{
			box-sizing: border-box;
			width: 100%;
			.ad_item{
				box-sizing: border-box;
				width: 100%;
				height: 340upx;
				margin-bottom: 60upx;
				.ad_img{
					box-sizing: border-box;
					width: 100%;
					height: 100%;
					border-radius: 12upx;
				}
				.no_img{
					box-sizing: border-box;
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					background:linear-gradient(#fdcaca, #ffecec);
					border-radius: 12upx;
					font-size: 40upx;
					color: #ffffff;
				}
				&:last-child{
					margin-bottom: 0;
				}
			}
		}
	}
</style>
