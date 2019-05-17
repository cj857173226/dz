<template>
	<view class="preview_house_page">
		<view class="title_pic">
			<img :src="host+releaseObj.titlepic" alt="">
			<view class="day_price">￥<text class="num">{{releaseObj.dayrentprice}}</text>元/晚</view>
		</view>
		<view class="container-contact-box">
			<view class="contact-box">
				<view class="title">{{releaseObj.title}}</view>
				<view class="rent-type">
					<text v-if="releaseObj.leasetype==='1'">整套房屋</text>
					<text v-if="releaseObj.leasetype==='2'">独立房间</text>
					<text v-if="releaseObj.leasetype==='3'">合住房间</text>
				</view>
				<view class="local">
					<text class="iconfont icon-dizhi-01"></text>{{local}}
				</view>
				<view class="comment">
					<view class="lightning-box">
						<i class="iconfont  lightning-icon">&#xe6b9;</i>
						<text>速顶</text>
					</view>
					<view class="comment-on-box">
						<i class="iconfont comment-on-icon">&#xe665;</i>
						<text>0条点评</text>
					</view>
				</view>
				<view class="img-box">
					<image class="img" :src="host+userInfo.headImgurl"></image>
				</view>
				<view class="autonym">
					<view class="name">{{userInfo.userInfo}}</view>
					<view class="attestation">实名认证</view>
				</view>
			</view>

			<!-- 房间基本信息 -->
			<view class="basic-info-box">
				<view class="title">基本信息</view>
				<view class="content-wrap">
					<view class="row">
						<view class="label">房屋类型</view>
						<view class="data-box">{{releaseObj.roomtype_shi}}室{{releaseObj.roomtype_ting}}厅{{releaseObj.roomtype_wei}}卫{{releaseObj.roomtype_chu}}厨{{releaseObj.roomtype_yt}}阳台</view>
					</view>
					<view class="row">
						<view class="label">出租面积</view>
						<view class="data-box">{{releaseObj.area}}㎡</view>
					</view>
					<view class="row">
						<view class="label">卫生间类型</view>
						<view class="data-box">
							<text v-if="releaseObj.toilet==='1'">公共卫生间</text>
							<text v-if="releaseObj.toilet==='2'">独立卫生间</text>
						</view>
					</view>
					<view class="row">
						<view class="label">与房东同居一套房内</view>
						<view class="data-box">
							<text v-if="releaseObj.livetogether==='1'">是</text>
							<text v-if="releaseObj.livetogether==='2'">否</text>
						</view>
					</view>
					<view class="row">
						<view class="label">宜居人数</view>
						<view class="data-box">{{releaseObj.tantnum}}人</view>
					</view>
					<view class="row">
						<view class="label">
							<text v-if="releaseObj.leasetype==='1'">同类房源数</text>
							<text v-if="releaseObj.leasetype==='2'">同类房间数</text>
							<text v-if="releaseObj.leasetype==='3'">同类床位数</text>
						</view>
						<view class="data-box">
							{{releaseObj.sameroom}}
							<text v-if="releaseObj.leasetype==='1'">套</text>
							<text v-if="releaseObj.leasetype==='2'">间</text>
							<text v-if="releaseObj.leasetype==='3'">位</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 床铺信息 -->
			<view class="bed-info-box">
				<view class="title">床铺信息</view>
				<view class="content-wrap">
					<view class="row" v-for="(item,index) in releaseObj.bed" :key="index">
						<view class="bed">
							<text v-if="item.type=== 'double'">双人床</text>
							<text v-else-if="item.type=== 'single'">单人床</text>
							<text v-else-if="item.type=== 'canopy'">双层床</text>
							<text v-else-if="item.type=== 'sofa'">沙发</text>
							<text v-else-if="item.type=== 'tatami'">榻榻米</text>
							<text v-else-if="item.type=== 'other'">其他</text>
							<text class="bed-size">宽{{item.weight}}米&nbsp;长{{item.length}}米</text>
						</view>
						<view class="number">{{item.num}}张</view>
					</view>
				</view>
			</view>
			<!-- 房间照片 -->
			<view class="house-pic-box">
				<view class="title">房屋照片</view>
				<view class="content-wrap">
					<view class="pics-type" v-if="bedroomPics.length>0">
						<view class="p-title">卧室</view>
						<view class="pics-box">
							<view class="img-item" v-for="(item,index) in bedroomPics" :key="index" @tap.stop="previewPic(item)">
								<image :src="host+item.path"></image>
							</view>
						</view>
					</view>
					<view class="pics-type" v-if="liverommPics.length>0">
						<view class="p-title">客厅</view>
						<view class="pics-box">
							<view class="img-item" v-for="(item,index) in liverommPics" :key="index" @tap.stop="previewPic(item)">
								<image :src="host+item.path"></image>
							</view>
						</view>
					</view>
					<view class="pics-type" v-if="toiletPics.length>0">
						<view class="p-title">卫生间</view>
						<view class="pics-box">
							<view class="img-item" v-for="(item,index) in toiletPics" :key="index" @tap.stop="previewPic(item)">
								<image :src="host+item.path"></image>
							</view>
						</view>
					</view>
					<view class="pics-type" v-if="kitchenPics.length>0">
						<view class="p-title">厨房</view>
						<view class="pics-box">
							<view class="img-item" v-for="(item,index) in kitchenPics" :key="index" @tap.stop="previewPic(item)">
								<image :src="host+item.path"></image>
							</view>
						</view>
					</view>
					<view class="pics-type" v-if="otherPics.length>0">
						<view class="p-title">其他</view>
						<view class="pics-box">
							<view class="img-item" v-for="(item,index) in otherPics" :key="index" @tap.stop="previewPic(item)">
								<image :src="host+item.path"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 配套设施 -->
			<view class="facilities-box">
				<view class="title">配套设施</view>
				<view class="content-wrap">
					<view class="sb-item" v-for="(item,index) in sbList" :key="index" v-if="item.type===2">
						<text class="sb-icon iconfont active" :class="item.icon" v-if="item.checked"></text>
						<text class="sb-icon iconfont" :class="item.icon" v-else></text>
						<text class="name" :class="{'name-on':item.checked}">{{item.label}}</text>
					</view>
				</view>
			</view>
			<!-- 房源描述 -->
			<view class="describe-info-box">
				<view class="title">房源描述</view>
				<view class="content-wrap">
					<view class="desc-box">
						<view class="d-title">内部情况</view>
						<view class="content" v-if="releaseObj.roomRoominnerIntro">
							{{releaseObj.roomRoominnerIntro}}
						</view>
						<view class="no-data" v-else>
							无内部情况描述
						</view>
					</view>
					<view class="desc-box">
						<view class="d-title">个性描述</view>
						<view class="content" v-if="releaseObj.roomServiceIntro">
							{{releaseObj.roomServiceIntro}}
						</view>
						<view class="no-data" v-else>
							无个性描述
						</view>
					</view>
					<view class="desc-box">
						<view class="d-title">交通情况</view>
						<view class="content" v-if="releaseObj.roomLocationIntro">
							{{releaseObj.roomLocationIntro}}
						</view>
						<view class="no-data" v-else>
							无交通情况描述
						</view>
					</view>
					<view class="desc-box">
						<view class="d-title">周边情况</view>
						<view class="content" v-if="releaseObj.roomAroundIntro">
							{{releaseObj.roomAroundIntro}}
						</view>
						<view class="no-data" v-else>
							无周边情况描述
						</view>
					</view>
				</view>
			</view>

			<!-- 价格规则 -->
			<view class="price-rule-box">
				<view class="title">价格规则</view>
				<view class="content-wrap">
					<view class="row">
						<view class="label">日价</view>
						<view class="content">{{releaseObj.dayrentprice}}元/每晚</view>
					</view>
					<view class="row">
						<view class="label">押金</view>
						<view class="content">
							<text v-if="cashpledge===''">不收取押金</text>
							<text v-else>{{cashpledge}}元</text>
						</view>
					</view>
					<view class="row">
						<view class="label">加客</view>
						<view class="content">
							<text v-if="addtenant==='0'">不允许加客</text>
							<text v-else>
								<text>允许加客</text>
								<text v-if="addtionalprice>0">,{{addtionalprice}}/每位每晚</text>
								<text v-if="addtenanttips!==''">,{{addtenanttips}}</text>
							</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 入住要求 -->
			<view class="price-rule-box">
				<view class="title">入住要求</view>
				<view class="content-wrap">
					<view class="row">
						<view class="label">入住天数限制</view>
						<view class="content">
							<text>最短{{releaseObj.minday}}晚,最多{{releaseObj.maxday}}晚</text>
						</view>

					</view>
					<view class="row">
						<view class="label">是否接待境外人士</view>
						<view class="content">
							<text v-text="foreigner ==='1'?'是':'否'"></text>
						</view>
					</view>
					<view class="row">
						<view class="label">其他要求</view>
						<view class="content" v-text="releaseObj.other?releaseObj.other:'无!'"></view>
					</view>
					<view class="row">
						<view class="label">隐藏贴士</view>
						<view class="content" v-text="releaseObj.hiddentips?releaseObj.hiddentips:'无!'"></view>
					</view>
				</view>
			</view>
			<!-- 交易规则 -->
			<view class="price-rule-box">
				<view class="title">交易规则</view>
				<view class="content-wrap">
					<view class="row">
						<view class="label">定金比</view>
						<view class="content">每日价格的{{releaseObj.crvp}}%,作为每日定金</view>
					</view>
					<view class="row">
						<view class="label">房客违约责任</view>
						<view class="content">全额退款天数为{{releaseObj.crvn}}天，违约取消扣款天数为{{releaseObj.crva}}天</view>
						<view class="step_wrap">
							<view class="step_item">
								<view class="s_title"><text class="iconfont icon-solid-time"></text></view>
								<view class="content">如果取消订单,定金全部退还</view>
							</view>
							<view class="step_item">
								<view class="s_title"><text class="iconfont icon-solid-time"></text>入住前{{releaseObj.crvn}}天14:00</view>
								<view class="content">如取消订单,扣除前{{releaseObj.crvn}}天的定金</view>
							</view>
							<view class="step_item">
								<view class="s_title"><text class="iconfont icon-solid-time"></text>入住当天14:00</view>
								<view class="content">如果提前退房,扣除未消费的前{{releaseObj.crva}}天的定金,定金不足以实际定金为准。(包括未入住和提前退房两类情况)</view>
							</view>
							<view class="step_item">
								<view class="s_title"><text class="iconfont icon-solid-time"></text>退房当天12:00</view>
							</view>
						</view>
					</view>
				</view>
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
	import {
		shortHttp
	} from '../../common/requestUrl.json'
	export default {
		data() {
			return {
				host: shortHttp, // 域名
				userInfo: {}, // 用户信息
				// 配套设施列表
				sbList: [{
						type: 1, // 1.标题 2.多选框
						title: '卫浴', //标题
					},
					{
						type: 2,
						label: '热水淋浴',
						checked: false,
						value: 'shower',
						icon: 'icon-reshui'
					},
					{
						type: 2,
						label: '浴缸',
						checked: false,
						value: 'hotbathtub',
						icon: 'icon-yugang'
					},
					{
						type: 2,
						label: '拖鞋',
						checked: false,
						value: 'slippers',
						icon: 'icon-tuoxie'
					},
					{
						type: 2,
						label: '手纸',
						checked: false,
						value: 'toiletpaper',
						icon: 'icon-weishengzhi_'
					},
					{
						type: 2,
						label: '牙具',
						checked: false,
						value: 'toothbrush',
						icon: 'icon-yaju'
					},
					{
						type: 2,
						label: '毛巾',
						checked: false,
						value: 'towel',
						icon: 'icon-maojin_'
					},
					{
						type: 2,
						label: '浴液 洗发水',
						checked: false,
						value: 'toiletries',
						icon: 'icon-muyulu'
					},
					{
						type: 2,
						label: '香皂',
						checked: false,
						value: 'soap',
						icon: 'icon-xiangzao_'
					},
					{
						type: 1, // 1.标题 2.多选框
						title: '电器', //标题
					},
					{
						type: 2,
						label: '空调',
						checked: false,
						value: 'aircondition',
						icon: 'icon-kongdiao'
					},
					{
						type: 2,
						label: '电视',
						checked: false,
						value: 'tv',
						icon: 'icon-dianshi'
					},
					{
						type: 2,
						label: '洗衣机',
						checked: false,
						value: 'washer',
						icon: 'icon-xiyiji'
					},
					{
						type: 2,
						label: '冰箱',
						checked: false,
						value: 'icebox',
						icon: 'icon-bingxiang'
					},
					{
						type: 2,
						label: '饮水设备',
						checked: false,
						value: 'drinking',
						icon: 'icon-yinshuiji'
					},
					{
						type: 1,
						title: '设施',
					},
					{
						type: 2,
						label: '无线网络',
						checked: false,
						value: 'wireless',
						icon: 'icon-wuxianwangluo'
					},
					{
						type: 2,
						label: '电梯',
						checked: false,
						value: 'elevator',
						icon: 'icon-icon_lift'
					},
					{
						type: 2,
						label: '门禁系统',
						checked: false,
						value: 'accesssys',
						icon: 'icon-webiconmenjinxitong'
					},
					{
						type: 2,
						label: '停车位',
						checked: false,
						value: 'parkingspace',
						icon: 'icon-tingche'
					},
					{
						type: 2,
						label: '暖气',
						checked: false,
						value: 'heater',
						icon: 'icon-nuanqi'
					},
					{
						type: 2,
						label: '有线网络',
						checked: false,
						value: 'wired',
						icon: 'icon-youxianwangluo'
					},
					{
						type: 1,
						title: '要求',
					},
					{
						type: 2,
						label: '允许做饭',
						checked: false,
						value: 'iscook',
						icon: 'icon-kezuofan'
					},
					{
						type: 2,
						label: '允许吸烟',
						checked: false,
						value: 'smoke',
						icon: 'icon-kexiyan'
					},
					{
						type: 2,
						label: '允许聚餐',
						checked: false,
						value: 'meet',
						icon: 'icon-faci_juhui'
					},
					{
						type: 2,
						label: '允许带宠物',
						checked: false,
						value: 'pet',
						icon: 'icon-yunxudaichongwu'
					}
				],
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync('dz_userInfo');
			this.getCheckedFacilities();
			console.log(this.releaseObj)
		},
		onShow() {

		},
		computed: {
			...mapState(['releaseObj']),
			// 地址
			local: {
				get() {
					return this.releaseObj.xz_province + this.releaseObj.xz_city + this.releaseObj.xz_district + '\xa0\xa0' + this.releaseObj
						.xz_address +
						'\xa0\xa0' + this.releaseObj.xz_number;
				}
			},
			// 押金
			cashpledge: {
				get() {
					return this.releaseObj.cashpledge == "0" ? "" : this.releaseObj.cashpledge;
				}
			},
			// 是否允许加客
			addtenant: {
				get() {
					return this.releaseObj.addtenant === '1' ? '1' : '0'; // 允许加客
				}
			},
			//加客费用
			addtionalprice: {
				get() {
					return this.releaseObj.addtionalprice ? this.releaseObj.addtionalprice : ""; // 允许加客
				}
			},
			foreigner: {
				get() {
					return this.releaseObj.foreigner === '1' ? '1' : '0';
				}
			},
			// 卧室照片
			bedroomPics: {
				get() {
					let pics = [];
					this.releaseObj['pics'].forEach((item) => {
						if (item.type === "bedroom") {
							pics.push(item)
						}
					})
					return pics;
				}
			},
			//客厅照片
			liverommPics: {
				get() {
					let pics = [];
					this.releaseObj['pics'].forEach((item) => {
						if (item.type === "liveroom") {
							pics.push(item)
						}
					})
					return pics;
				}
			},
			//卫生间照片
			toiletPics: {
				get() {
					let pics = [];
					this.releaseObj['pics'].forEach((item) => {
						if (item.type === "toilet") {
							pics.push(item)
						}
					})
					return pics;
				}
			},
			// 厨房照片
			kitchenPics: {
				get() {
					let pics = [];
					this.releaseObj['pics'].forEach((item) => {
						if (item.type === "kitchen") {
							pics.push(item)
						}
					})
					return pics;
				}
			},
			// 其他照片
			otherPics: {
				get() {
					let pics = [];
					this.releaseObj['pics'].forEach((item) => {
						if (item.type === "other") {
							pics.push(item)
						}
					})
					return pics;
				}
			},


		},
		methods: {
			previewPic(pic) {
				const _this = this;

				uni.previewImage({
					current: _this.host + pic.path,
					urls: [_this.host + pic.path]
				})
			},
			// 获取已经选中的 配套设施
			getCheckedFacilities() {
				const curFacilities = this.releaseObj.sb_list ? this.releaseObj.sb_list : [];
				this.sbList.map((item, index, self) => {
					if (item.type === 2 && curFacilities.indexOf(item.value) != -1) {
						self[index].checked = true;
					}
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		background: #ededed;
	}
</style>
<style lang="scss" scoped>
	$theme-color: #F05B72;

	.preview_house_page {
		box-sizing: border-box;
		width: 100%;

		.title_pic {
			box-sizing: border-box;
			width: 100%;
			position: relative;

			img {
				width: 100%;
				display: block;
			}

			.day_price {
				box-sizing: border-box;
				position: absolute;
				padding: 22upx;
				min-width: 240upx;
				text-align: center;
				left: 0;
				bottom: 0;
				color: #ffffff;
				font-size: 32upx;
				background: rgba(0, 0, 0, 0.5);

				.num {
					font-size: 36upx;
				}
			}
		}

		.container-contact-box {
			width: 100%;
			// height: 556upx;
			padding: 30upx;
			box-sizing: border-box;

			.contact-box {
				padding: 60upx 20upx 80upx;
				box-sizing: border-box;
				background-color: #fff;
				display: flex;
				flex-direction: column;
				align-items: center;
				border-radius: 8upx;
				box-shadow: 0 10upx 10upx rgba(192, 192, 192, 0.3);

				.title {
					text-align: center;
					font-weight: bold;
				}

				.rent-type {
					margin-top: 16upx;
					font-size: 28upx;
					color: #f05b72;
				}

				.local {
					margin-top: 16upx;
					font-size: 28upx;
					color: #919191;

					.iconfont {
						font-weight: 800;
						font-size: 32upx;
						margin-right: 10upx;
					}
				}

				.comment {
					margin-top: 20upx;
					display: flex;
					flex-direction: row;

					.lightning-box {
						margin-right: 20upx;
						color: #a4a4a4;

						.lightning-icon {
							color: #d5efec;
							font-size: 18px;
						}
					}

					.comment-on-box {
						color: #a4a4a4;

						.comment-on-icon {
							color: #cccccc;
							font-size: 18px;
						}
					}
				}

				.img-box {
					width: 120upx;
					height: 120upx;
					border-radius: 50%;
					margin-top: 30upx;

					.img {
						width: 120upx;
						height: 120upx;
						border-radius: 50%;
					}
				}

				.autonym {
					text-align: center;
					margin-top: 20upx;

					.name {
						font-size: 14px;
						text-align: center;
					}

					.attestation {
						font-size: 12px;
						color: #a9a9a9;
						text-align: center;
						// margin-bottom: 20upx;
					}
				}
			}

			.basic-info-box,
			.house-pic-box,
			.bed-info-box,
			.describe-info-box,
			.facilities-box,
			.price-rule-box {
				box-sizing: border-box;
				padding: 40upx 0upx;
				background: #ffffff;
				margin-top: 30upx;
				border-radius: 8upx;
				box-shadow: 0 10upx 10upx rgba(192, 192, 192, 0.3);

				.title {
					box-sizing: border-box;
					position: relative;
					display: flex;
					align-items: center;
					margin-bottom: 20upx;
					padding: 0 30upx;
					height: 44upx;
					font-size: 32upx;
					font-weight: 800;
					width: 100%;
					color: #8d8d8d;

					&::after {
						position: absolute;
						content: '';
						height: 100%;
						width: 10upx;
						left: 0;
						top: 0;
						background: $theme-color;
					}
				}

				.content-wrap {
					box-sizing: border-box;
					width: 100%;
					padding: 0 22upx;
				}
			}

			// 基本信息
			.basic-info-box {
				.content-wrap {
					.row {
						box-sizing: border-box;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						font-size: 28upx;
						margin-bottom: 20upx;

						.label {}

						.data-box {
							color: #a7a7a7;
						}
					}

				}
			}

			//  床铺信息
			.bed-info-box {
				.content-wrap {
					.row {
						box-sizing: border-box;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						font-size: 28upx;
						margin-bottom: 20upx;

						.bed {
							.bed-size {
								margin-left: 20upx;
							}
						}

						.number {
							color: #a7a7a7;
						}
					}

				}
			}

			// 房源照片
			.house-pic-box {
				.content-wrap {
					padding: 0;

					.pics-type {
						margin-bottom: 40upx;

						.p-title {
							margin-bottom: 20upx;
							text-align: center;
							font-size: 28upx;
							color: #b3b3b3;
							font-weight: 800;
						}

						.pics-box {
							box-sizing: border-box;
							width: 100%;
							display: inline-flex;
							flex-wrap: wrap;

							.img-item {
								display: inline-flex;
								height: 210upx;
								width: 210upx;
								padding: 10upx;

								image {
									height: 100%;
									width: 100%;
									border-radius: 8upx;
								}
							}

						}
					}
				}
			}

			// 配套设施
			.facilities-box {
				.content-wrap {
					display: flex;
					flex-wrap: wrap;

					.sb-item {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 160upx;
						margin-bottom: 40upx;

						.sb-icon {
							font-size: 50upx;
							color: #ececec;
							font-weight: 800;
						}

						.active {
							color: $theme-color;
						}

						.name {
							margin-top: 10upx;
							font-size: 24upx;
							color: #cccccc;
						}

						.name-on {
							color: $theme-color;
						}
					}
				}
			}

			// 房源描述
			.describe-info-box {
				.content-wrap {
					.desc-box {
						box-sizing: border-box;
						margin-bottom: 40upx;

						.d-title {
							margin-bottom: 20upx;
							font-size: 32upx;
							color: #efb0ba;
						}

						.content {
							color: #333;
							font-size: 28upx;
						}

						.no-data {
							color: #cccccc;
							font-size: 28upx;
						}
					}
				}
			}

			//价格规则
			.price-rule-box {
				.content-wrap {
					.row {
						box-sizing: border-box;
						width: 100%;
						margin-bottom: 20upx;

						.label {
							margin-bottom: 10upx;
						}

						.content {
							font-size: 28upx;
							color: #a7a7a7;
						}
					}

					.step_wrap {
						box-sizing: border-box;
						width: 100%;
						padding: 0 20upx;
						.step_item {
							box-sizing: border-box;
							width: 100%;
							min-height: 200upx;
							padding: 0 30upx 80upx;
							margin-top: 10upx;
							border-left: 1px solid $theme-color;

							.s_title {
								position: relative;
								font-size: 28upx;
								color: #aaaaaa;
								height: 40upx;
								line-height: 40upx;
								margin-bottom: 30upx;


								.iconfont {
									position: absolute;
									font-size: 40upx;
									color: $theme-color;
									left: -50upx;
									top: -4upx;


								}

							}

							.content {
								padding: 20upx 16upx;
								background: #eaeaea;
								border-radius: 8upx;
							}

							&:first-child {
								border-left: 1px solid #5bdb9c;

								.s_title {
									.iconfont {
										color: #5bdb9c;
									}
								}
							}

							&:last-child {
								min-height: 0;
								padding-bottom: 0;
								border: none;

								.s_title {
									.iconfont {
										color: #cccccc;
									}
								}
							}


						}
					}
				}
			}
		}
	}
</style>
