<template>
	<view id="my-index">
		<div id="my-index-head" class="clearfix">
			<div>
				<img :src="userInfo.headimgurl?userInfo.headimgurl:'/static/images/landlordguide/pic1_1.png'" id="user-avatar" alt="">
			</div>
			<div class="avatar-right-wrap">
				<p id="user-cname" v-if="userInfo.username">{{userInfo.username}}</p>
				<p v-if="!userInfo.username" @click.stop="pageTo('/pages/login/login')" style="font: 14px;color: #f05b72;">请登录</p>
				<!--完善信息-->
				<p class="perfect-info">信息未完善,请完善信息 <text class="iconfont icon-weibiaoti34"></text></p>
			</div>
			<!--身份转换-->
			<div class="user-type" @click.stop="changeUserPower()">
				<text class="iconfont icon-zhuanhuan"></text>
				<span v-text="curPowerType == 'fk'? '房东': '房客'"></span>
			</div>
		</div>
		<div id="my-index-main">
			<!--基础信息-->
			<div class="basic-info">
				<p class="basic-title">基本信息</p>
				<div class="basic-info-item-wrap">
					<div class="basic-info-item">
						<div class="_box" @click.stop="pageTo('myAccount')">
							<i class="iconfont icon-qianbao"></i>
							<p class="name">我的账户</p>
						</div>
					</div>
					<div class="basic-info-item ">
						<div class="_box" @click.stop="pageTo('myInformation')">
							<i class="iconfont icon-shenfenzheng"></i>
							<p class="name">我的资料</p>
						</div>
					</div>
					<div class="basic-info-item" @click.stop="pageTo('releaseManage')" v-if="curPowerType==='fd' && userPower==='5'">
						<div class="_box">
							<i class="iconfont icon-fabu"></i>
							<p class="name">发布管理</p>
						</div>
					</div>
				</div>
			</div>
			<!--广告-->
			<div class="ad-wrap " id="slider">
				<swiper class="swiper" circular=true :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				 :duration="duration" :indicator-active-color="indicatorActiveColor">
					<swiper-item>
						<view class="swiper-item uni-bg-red" @click="a">
							<img src="/static/images/landlordguide/pic1_1.png" alt="">
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">
							<img src="/static/images/landlordguide/pic1_1.png" alt="">
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue">
							<img src="/static/images/landlordguide/pic1_1.png" alt="">
						</view>
					</swiper-item>
				</swiper>
			</div>
			<!--更多功能-->
			<div class="more-fun-wrap">
				<p class="more-fun-title">更多功能</p>
				<div class="more-fun-item-wrap">
					<div class="more-fun-item" @click.stop="pageTo('statistics')" v-if="curPowerType==='fd' && userPower==='5'">
						<div class="_box">
							<i class="iconfont icon-tongji1"></i>
							<p class="name">统计</p>
						</div>
					</div>
					<div class="more-fun-item">
						<div class="_box" @click.stop="pageTo('myInvoice')">
							<i class="iconfont icon-fapiao"></i>
							<p class="name">发票</p>
						</div>
					</div>
					<div class="more-fun-item ">
						<div class="_box" @click.stop="pageTo('checkIn')">
							<i class="iconfont icon-tuandui"></i>
							<p class="name">常用入住人</p>
						</div>
					</div>
					<div class="more-fun-item ">
						<div class="_box" @click.stop="pageTo('myAddress')">
							<i class="iconfont icon-dizhi-01"></i>
							<p class="name">收货地址</p>
						</div>
					</div>
					<div class="more-fun-item ">
						<div class="_box" @click.stop="pageTo('contactService')">
							<i class="iconfont icon-kefu"></i>
							<p class="name">联系客服</p>
						</div>
					</div>
					<div class="more-fun-item ">
						<div class="_box" @click.stop="pageTo('share')">
							<i class="iconfont icon-tianjiahaoyou"></i>
							<p class="name">邀请好友</p>
						</div>
					</div>
				</div>
			</div>
			<button id="change-fd" class="del-btn-block" v-if="userPower == '1'" @click.stop="pageTo('becomeLandlord')">成为房东</button>
		</div>
	</view>
</template>

<script>
	import helper from 'common/helper.js'
	export default {
		data() {
			return {
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
				userPower: '', // 用户权限
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
		onLoad(){
		},
		mounted() {
			// helper.isLogin()
			var that = this;
			this.$nextTick(function() {
				// 底部导航栏

			})
		},
		methods: {
			pageTo(url) {
				uni.navigateTo({
					url: url
				});
			}
		}
	}
</script>

<style>
	page {
		background: #eeeeee;
	}

	.swiper {
		height: 200upx;
	}

	.swiper .swiper-item {
		width: 100%;
		height: 100%;
	}

	.swiper .swiper-item img {
		width: 100%;
		height: 100%;
	}

	#my-index-head {
		position: relative;
		box-sizing: border-box;
		padding: 20upx 30upx;
		height: 160upx;
		width: 100%;
	}

	#my-index-head .user-type {
		position: absolute;
		box-sizing: border-box;
		padding: 0 30upx;
		height: 60upx;
		line-height: 60upx;
		font-weight: 800;
		font-size: 14px;
		right: 0;
		top: calc(160upx / 2 - 60upx / 2);
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

	#my-index-head .avatar-right-wrap {
		padding-top: 20upx;
		box-sizing: border-box;
		padding-left: 30upx;
		float: left;
		width: calc(100% - 260upx);
	}

	#user-avatar {
		box-sizing: border-box;
		float: left;
		width: 120upx;
		height: 120upx;
		border-radius: 100%;
		border: 2px solid rgba(255, 255, 255, .6);
	}

	#my-index-head .avatar-right-wrap #user-cname {
		font-size: 16px;
		color: #333;
		font-weight: 800;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
	}

	#my-index-head .avatar-right-wrap .perfect-info {
		line-height: 36upx;
		color: #a0a0a0;
		font-size: 12px;
	}

	#my-index-head .avatar-right-wrap .perfect-info .iconfont {
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
		color: #a0a0a0;
		box-sizing: border-box;
		width: 100%;
		padding: 0 30upx;
		font-size: 12px;
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
		margin-top: 15px;
		box-sizing: border-box;
		background: #FFFFFF;
		min-height: 100px;
		border-radius: 4px;
		padding: 10px;
	}

	#my-index-main .more-fun-wrap .more-fun-title {
		color: #a0a0a0;
		box-sizing: border-box;
		width: 100%;
		padding: 0 15px;
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

	#change-fd {
		margin-top: 15px;
		box-sizing: border-box;
		background: #FFFFFF;
		border-radius: 4px;
		text-align: center;
		border: none;
		height: 36px;
		width: 100%;
		font-size: 16px;
		color: #333;
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
