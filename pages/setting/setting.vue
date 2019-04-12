<template>
	<view class="setting_page">
		<view class="setting_list"></view>
		<button class="logout_btn my-btn-block" :class="{'dis_btn':isLogoutIng}" @tap="logout()">退出登录</button>
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
	export default {
		data() {
			return {
				setList: [{
					label: '退出登录',
					val: 'logout'
				}],
				isLogoutIng:false,
			}
		},
		onLoad() {

		},
		onShow() {

		},
		computed: {

		},
		methods: {
			// 退出登录
			logout() {
				if(this.isLogoutIng) return;
				this.isLogoutIng = true;
				request({
					url: '/wap/api/my.php?action=logout',
					success:(res)=>{
						console.log(res);
						if(res.data.status === 'success'){
							uni.clearStorageSync();
							uni.reLaunch({
								url: "/pages/login/login"
							})
						}else{
							helper.layer('退出失败')
						}
					},
					
					complete:()=>{
						this.isLogoutIng = false;
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

	.setting_page {
		position: relative;
		box-sizing: border-box;
		padding: 40upx 30upx;
		min-height: 100%;

		.logout_btn {
			width: inherit;
			position: absolute;
			bottom: 40upx;
			left: 30upx;
			right: 30upx;
		}
	}
</style>
