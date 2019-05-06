<template>
	<scroll-view id="my-index" scroll-y=true>
		<view id="my-index-head" class="clearfix">
			<view class="avatar_wrap" @tap="editUserInfo">
				<img :src="userInfo.headImgurl? (host + userInfo.headImgurl):'/static/images/default_avatar.jpg'" id="user-avatar" alt="">
			</view>
			<view class="nickname-wrap">
				<p id="user-cname" v-if="userInfo.nickname">{{userInfo.nickname}}</p>
				<p v-if="!userInfo.token" @click.stop="pageTo('/pages/login/login')" style="font-size: 32upx;color: #f05b72;margin-bottom: 4px;">请登录</p>
				<!--完善信息-->
				<!-- <p class="perfect-info">信息未完善,请完善信息 <text class="iconfont icon-weibiaoti34"></text></p> -->
			</view>
			<!--身份转换-->
			<view class="user-type" @tap.stop="changeUserPower()">
				<text class="iconfont icon-zhuanhuan"></text>
				<span v-text="curPowerType == 'fk'? '房东': '房客'"></span>
			</view>
		</view>
		<view id="my-index-main">
			<!--基础信息-->
			<view class="basic-info">
				<p class="basic-title">基本信息</p>
				<view class="basic-info-item-wrap">
					<view class="basic-info-item">
						<view class="_box" @click.stop="pageTo('myAccount')">
							<text class="iconfont icon-qianbao"></text> 
							<p class="name">我的账户</p>
						</view>
					</view>
					<view class="basic-info-item ">
						<view class="_box" @tap.stop="editUserInfo">
							<text class="iconfont icon-shenfenzheng"></text> 
							<p class="name">我的资料</p>
						</view>
					</view>
					
					<view class="basic-info-item" @click.stop="pageTo('/pages/releaseManage/releaseManage')" v-if="curPowerType==='fd' && userInfo.isFangDong">
						<view class="_box">
							<text class="iconfont icon-fabu"></text> 
							<p class="name">发布管理</p>
						</view>
					</view>
				</view>
			</view>
			<!--广告-->
			<view class="ad-wrap " id="slider" v-if="adList.length!== 0">
				<swiper class="swiper" circular=true :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				 :duration="duration" :indicator-active-color="indicatorActiveColor">
					<swiper-item v-for="(item,index) in adList" :key="index">
						<view class="swiper-item" @tap="adDetail(item)">
							<img v-if="item.picture" :src="host+item.picture" alt="">
							<div v-if="!item.picture" class="no_img">
								广告{{index+1}}
							</div>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!--更多功能-->
			<view class="more-fun-wrap">
				<p class="more-fun-title">更多功能</p>
				<view class="more-fun-item-wrap">
					<view class="more-fun-item" @click.stop="pageTo('/pages/statistics/statistics')" v-if="curPowerType==='fd' && userInfo.isFangDong"> 
						<view class="_box">
							<text class="iconfont icon-tongji1"></text> 
							<p class="name">统计</p>
						</view>
					</view>
					<view class="more-fun-item">
						<view class="_box" @click.stop="pageTo('/pages/invoice/invoice')">
							<text class="iconfont icon-fapiao"></text> 
							<p class="name">发票</p>
						</view>
					</view>
					<view class="more-fun-item ">
						<view class="_box" @click.stop="pageTo('/pages/check_in/check_in')">
							<text class="iconfont icon-tuandui"></text> 
							<p class="name">常用入住人</p>
						</view>
					</view>
					<view class="more-fun-item ">
						<view class="_box" @click.stop="pageTo('/pages/my_address/my_address')">
							<text class="iconfont icon-dizhi-01"></text> 
							<p class="name">收货地址</p>
						</view>
					</view>
					<view class="more-fun-item ">
						<view class="_box" @click.stop="pageTo('/pages/contact_service/contact_service')">
							<text class="iconfont icon-kefu"></text> 
							<p class="name">联系客服</p>
						</view>
					</view>
					<view class="more-fun-item ">
						<view class="_box" @click.stop="pageTo('/pages/Invitation_code/Invitation_code')">
							<text class="iconfont icon-tianjiahaoyou"></text> 
							<p class="name">邀请好友</p>
						</view>
					</view>
				</view>
			</view>
			<button v-if="!userInfo.isFangDong" id="change-fd" class="change-fd my-del-block" @tap="pageTo('/pages/landlord/landlord')">成为房东</button>
		</view>
	</scroll-view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import {request} from '../../common/request.js'
	import {shortHttp} from '../../common/requestUrl.json'
	import helper from 'common/helper.js'
	export default {
		data() {
			return {
				host:shortHttp, // 域名
				userInfo: {}, // 用户信息
				infoData: {
					name: '',
					ID: '',
					passport: '',
					sex: '',
					local: '',
					date: '',
					education: '',
				}, //个人信息填写
				curPowerType: '', // 当前用户权限类别 'fd':'房东'  'fk'：'房客'
				userId: '', //用户id
				// 广告列表
				adList: [],
				initAdList: [],
				// 当前广告信息
				curAdInfo: null,
				// 广告 轮播
				// 显示指示灯
				indicatorDots: true,
				// 是否自动
				autoplay: true,
				// 切换时间
				interval: 5000,
				// 过渡时间
				duration: 500,
				// 当前指示灯颜色
				indicatorActiveColor: "#F05B72"
			}
		},
		computed:{
			...mapState(['isEditUserInfo'])
		},
		onLoad() {
			// 检测是否登录
			helper.isLogin();
			// 获取广告
			this.getAddList()
		},
		onShow() {
			// 判断个人资料是否修改
			if(this.isEditUserInfo){
				helper.layer('保存成功')
			}
			this.userInfo = uni.getStorageSync('dz_userInfo');
			// 获取当前房东权限
			this.curPowerType = this.userInfo.isFangDong?uni.getStorageSync('dz_curPower'):'fk' ;
			this.isUserInfoEditStatus(false);
		},
		onNavigationBarButtonTap(e){
			if(e.index === 0){
				this.pageTo('/pages/setting/setting')
			}
		},
		mounted() {
			// helper.isLogin()
			var that = this;
			this.$nextTick(function() {
				// 底部导航栏
				
			})
		},
		methods: {
			...mapMutations(['isUserInfoEditStatus']),
			pageTo(url) {
				uni.navigateTo({
					url: url
				});
			},
			// 到编辑个人资料页面
			editUserInfo(){
				this.isUserInfoEditStatus(false)
				uni.navigateTo({
					url: '/pages/my_information/my_information'
				});
				
			},
			// 获取广告接口
			getAddList(){
				console.log(1)
				const _this = this;
				request({
					url:'/wap/api/my.php?action=messageListAd ',
					success:(res)=>{
						if(res.data.status === 'success'){
							_this.adList = res.data.content;
						}
					},
					fail:()=>{
						
					},
					complete:()=>{
						
					}
				})
			},
			// 切换用户权限
			changeUserPower(){
				if(!this.userInfo.isFangDong){
					this.pageTo('/pages/landlord/landlord');
				}else{
					if(this.curPowerType === 'fk'){
						this.curPowerType = 'fd';
						uni.setStorageSync('dz_curPower','fd');
					}else{
						this.curPowerType = 'fk';
						uni.setStorageSync('dz_curPower','fk');
					}
				}
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
		height: 100%;
		background: #f5f6f8;
	}
</style>
<style scoped>
	#my-index{
		height: 100%;
	}
	.swiper {
		height: 240upx;
	}

	.swiper .swiper-item {
		width: 100%;
		height: 100%;
		border-radius: 8upx;
	}

	.swiper .swiper-item img {
		width: 100%;
		height: 100%;
		border-radius: 8upx;
	}
	
	.swiper .swiper-item .no_img{
		box-sizing: border-box;
		height: 100%;
		width: 100%;
		background: #AAAAAA;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40upx;
		color: #FFFFFF;
		border-radius: 8upx;
	}

	#my-index-head {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20upx 0upx 20upx 30upx;
		height: 160upx;
		width: 100%;
	}

	#my-index-head .user-type {
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30upx;
		height: 60upx;
		line-height: 60upx;
		font-weight: 800;
		font-size: 14px;
		border-radius: 60upx 0 0 60upx;
		background: #f9d260;
		text-align: right;
		width: 172upx;
	}

	#my-index-head .user-type span {
		font-size: 14px;
		font-weight: 800;
	}

	#my-index-head .user-type .iconfont {
		font-size: 14px;
	}

	#my-index-head .nickname-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		padding-left: 30upx;
		float: left;
		width: calc(100% - 300upx);
	}

	#user-avatar {
		box-sizing: border-box;
		float: left;
		width: 120upx;
		height: 120upx;
		border-radius: 100%;
		border: 2px solid rgba(255, 255, 255, .6);
	}

	#my-index-head .nickname-wrap #user-cname {
		font-size: 40upx;
		color: #333;
		width: 100%;
		font-weight: 800;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	#my-index-head .nickname-wrap .perfect-info {
		line-height: 36upx;
		color: #a0a0a0;
		font-size: 12px;
	}

	#my-index-head .nickname-wrap .perfect-info .iconfont {
		font-size: 12px;
		color: #cccccc;
	}

	#my-index-main {
		padding: 20upx 30upx;
	}

	#my-index-main .basic-info {
		box-sizing: border-box;
		background: #FFFFFF;
		min-height: 200upx;
		border-radius: 8upx;
		padding: 20upx;
	}

	#my-index-main .basic-info .basic-title,
	#my-index-main .more-fun-wrap .more-fun-title {
		color: #F05B72!important;
		box-sizing: border-box;
		width: 100%;
		padding: 0 40upx;
		font-size: 14px;
		margin-bottom: 20upx;
	}

	#my-index-main .basic-info .basic-info-item-wrap,
	#my-index-main .more-fun-wrap .more-fun-item-wrap {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}

	#my-index-main .basic-info .basic-info-item-wrap .basic-info-item {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		margin-bottom: 20upx;
		height: 120upx;
		text-align: center;
		width: calc(100% / 3);
	}

	#my-index-main .basic-info .basic-info-item-wrap .basic-info-item ._box,
	#my-index-main .more-fun-wrap .more-fun-item-wrap .more-fun-item ._box {
		display: inline-block;
	}

	#my-index-main .basic-info .basic-info-item-wrap .basic-info-item .iconfont,
	#my-index-main .more-fun-wrap .more-fun-item-wrap .more-fun-item .iconfont {
		display: inline-block;
		height: 92upx;
		width: 74upx;
		font-size: 36px;
		color: #b3b3b3;
	}

	#my-index-main .basic-info .basic-info-item-wrap .basic-info-item .name,
	#my-index-main .more-fun-wrap .more-fun-item-wrap .more-fun-item .name {
		font-weight: 800;
		font-size: 12px;
		color: #b3b3b3;
	}

	#my-index-main .ad-wrap {
		margin-top: 30upx;
		background: #ffffff;
		border-radius: 8upx;
	}

	#my-index-main .more-fun-wrap {
		margin-top: 30upx;
		box-sizing: border-box;
		background: #FFFFFF;
		min-height: 200upx;
		border-radius: 4px;
		padding: 20upx;
	}


	#my-index-main .more-fun-wrap .more-fun-item-wrap {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		justify-content: left;
	}

	#my-index-main .more-fun-wrap .more-fun-item-wrap .more-fun-item {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		height: 60px;
		text-align: center;
		width: calc(100% / 3);
		margin-bottom: 10px;
	}

	.change-fd{
		margin-top: 15px;
	}

	/*联系客服*/
	.contact-type-list .contact-type {
		position: relative;
		min-height: 80px;
		box-sizing: border-box;
		background: #ffffff;
		border-radius: 6px;
		padding: 20px 40px 20px 60px;
		margin-bottom: 10px;
	}

	.contact-type-list .contact-type:last-child {
		margin-bottom: 0;
	}

	.contact-type-list .contact-type .content-icon {
		position: absolute;
		display: inline-block;
		height: 80px;
		line-height: 80px;
		width: 60px;
		top: 0;
		left: 0;
		text-align: center;
	}

	.contact-type-list .contact-type .right-icon {
		position: absolute;
		display: inline-block;
		height: 80px;
		line-height: 80px;
		width: 40px;
		top: 0;
		right: 0;
		text-align: center;
	}

	.contact-type-list .contact-type .content-icon .iconfont,
	.contact-type-list .contact-type .right-icon .iconfont {
		font-size: 30px;
		color: #b7b7b7;
	}

	.contact-type-list .contact-type .content-wrap .content-title {
		font-size: 16px;
		color: #f05b72;
	}

	.contact-type-list .contact-type .content-wrap .note {
		font-size: 12px;
		color: #cccccc;
		line-height: 24px;
	}

	/*广告*/
	.ad-detail-wrap img {
		max-width: 100%;
	}

	.dis-send {
		pointer-events: none;
		background: #cccccc !important;
	}
</style>
