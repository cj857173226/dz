<template>
	<view class="container">
		<!-- <srcolls :detailsImg="imgArray" :prices="price"></srcolls> -->
		<view class="container-box">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" indicator-color="#EBEDF3" indicator-active-color="#fff" @change="changeIndicatorDots">
							<swiper-item v-for="(item,index) in imgArray" :key="index" :item-id="(index+1)+''">
								<image class="banner" :src="http+item.bigImgUrl"></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
				<view class="price">
					&yen;<text class="specific-price">{{price}}</text>起/晚
				</view>
				<view class="indexes-box">
					<text>{{numberIndex}}</text>/
					<text>{{imgArray.length}}</text>
				</view>
				<view class="icon-box" @tap="onCollect()">
					<i class="iconfont" :class="data.isFavorite?'love-icon-red':'love-icon'">&#xe63e;</i>
				</view>
			</view>
		</view>
		<!-- <contactRoomDoor/> -->
		<view class="container-contact-box">
			<view class="contact-box">
				<view class="title">{{lodgeUnitName}}</view>
				<view class="comment">
					<view class="lightning-box">
						<i class="iconfont  lightning-icon">&#xe6b9;</i>
						<text>速顶</text>
					</view>
					<view class="comment-on-box">
						<i class="iconfont comment-on-icon">&#xe665;</i>
						<text>{{score}}条点评</text>
					</view>
				</view>
				<view class="img-box" @tap="clickLandlord">
					<image class="img" :src="http+usernamePhoto"></image>
				</view>
				<view class="autonym">
					<view class="name">{{username}}</view>
					<view class="attestation">{{attestation}}</view>
					<button class="mini-btn" type="primary" size="mini" @tap.stop='toMessageDetail'>
						<i class="iconfont contact-the-landlord-icon">&#xe612;</i>
						联系房东
					</button>
				</view>
			</view>
		</view>
		<view class="tenant-review-box">
			<view class="grades1-box">
				<!-- <view class="grades-contenr"> -->
					<!-- 星星评分组件 -->
					<!-- <uni-rate size="20" disabled="true" :value="goodRate"></uni-rate>
				</view> -->
				<view class="house-classifieds">
					<i class="iconfont house-icon">&#xe61b;</i>
					<view class="black">{{leaseType}}</view>
					<view>{{area}}</view>
					<view>{{houseType}}</view>
				</view>
				<view class="house-classifieds">
					<i class="iconfont house-icon">&#xe606;</i>
					<view class="black">宜住{{bedNum}}人</view>
				</view>
				<view class="house-classifieds">
					<i class="iconfont house-icon">&#xe61f;</i>
					<view class="black">{{bedNumTip}}</view>
				</view>
			</view>
			<!-- 自定义组件 -->
			<house_map :lat="latitude" :log="longitude"></house_map>
			<!-- <roomDescription></roomDescription> -->
			<view class="cantainer-description-box">
				<view class="title">房间描述</view>
				<view class="introduce" :class="[isTrue?'introduce':'introduces']">{{roomInnerIntro}}</view>
				<view class="btn-box">
					<button class="mini-btn btn-the-globe" type="primary" size="mini" @tap="clickBtn">
						查看全部描述
					</button>
				</view>
				<image class="meinv-img" :src="http+headImageUrl"></image>
				<view class="details-of-the-room-box">
					<view class="details-of-the-room-title">房间详情</view>
					<view class="operation-list-box">
						<view class="list-box">
							<text class="left">可租房态</text>
							<text class="right" @click="onShowDatePicker('range')">查看日历</text>
						</view>
						<!-- <view class="list-box">
					<text class="left">交易规则</text>
					<text class="right">查看</text>
				</view> -->
						<view class="list-box">
							<text class="left">是否允许加客</text>
							<text class="right" style="color:#B8B8B8">{{addTenant}}</text>
						</view>
						<view class="list-box">
							<text class="left">在线收取押金</text>
							<text class="right" style="color:#B8B8B8">{{cashplege}}</text>
						</view>
						<view class="list-box">
							<text class="left">被单更换</text>
							<text class="right" style="color:#B8B8B8">{{sheetChange}}</text>
						</view>
						<view class="list-box">
							<text class="left">卫生间</text>
							<text class="right" style="color:#B8B8B8">{{toilet}}</text>
						</view>
						<view class="list-box">
							<text class="left">最少入住天数</text>
							<text class="right" style="color:#B8B8B8">{{minDays}}</text>
						</view>
						<view class="list-box">
							<text class="left">最多入住天数</text>
							<text class="right" style="color:#B8B8B8">{{maxDays}}</text>
						</view>
						<view class="list-box">
							<text class="left">是否接待境外人士</text>
							<text class="right" style="color:#B8B8B8">{{foreigner}}</text>
						</view>
					</view>
				</view>
				<view class="tenant-review-box">
					<view class="tenant-review">房客点评</view>
					<view class="grades-box">
						<view class="grades-contenr">
							<!-- 星星评分组件 -->
							<uni-rate size="20" disabled="false" :value="goodRate"></uni-rate>
						</view>
						<view v-if="commentList.length>0" class="discuss-box">
							<view v-for="(v,i) in commentList" :key="i" class="criticism">
								<view class="username-img-box">
									<view class="username-check">
										<view>{{v.user.realname}}</view>
										<view class="check">{{v.comment_time}}</view>
									</view>
									<img class="username-photo" :src="v.user.userpic?(http+v.user.userpic):'../../static/images/meitu3.jpg'" alt="用户头像">
								</view>
								<text style="font-size:14px;">
									{{v.comment}}
								</text>
							</view>
							<view class="btn-box">
								<button class="mini-btn btn-the-globe" type="primary" size="mini" @tap="clickDiscuss">
									全部评论({{count}})
								</button>
							</view>
							<image class="show-img" src="../../static/images/landlordguide/banner4.jpg" alt="展示图片"></image>
						</view>
						<view v-else class="discuss-box">
							<image class="show-img" src="../../static/images/meitu1.jpg" alt="展示图片"></image>
						</view>
					</view>
				</view>
				<supportingFacility :facility="facility"></supportingFacility>
				<view class="transaction-rules-box">
					<view class="transaction-rules-title">交易规则</view>
					<view class="bottom-transaction-rules">
						<view class="booking-way-box">
							<text class="iconfont iconyuding">&#xe6dd;</text>
							<view class="right-booking-way-box">
								<view class="top-title">预订方式</view>
								<view class="conten">下单即可入住，无需房东确认</view>
							</view>
						</view>
						<view class="booking-way-box">
							<text class="iconfont iconyuding">&#xe785;</text>
							<view class="right-booking-way-box">
								<view class="top-title">入住天数</view>
								<view class="conten">最少入住一天，最多入住不限</view>
							</view>
						</view>
						<view class="booking-way-box">
							<view class="right-booking-way-box1">
								<view class="top-title">在线订金比</view>
								<view class="conten">订单确认后，在线支付房款的100%作为订金</view>
							</view>
						</view>
						<view class="booking-way-box">
							<view class="right-booking-way-box1">
								<view class="top-title">押金</view>
								<view class="conten">￥600，小猪担保免押</view>
							</view>
						</view>
						<view class="booking-way-box">
							<view class="right-booking-way-box1">
								<view class="top-title">加客</view>
								<view class="conten">不允许加客</view>
							</view>
						</view>
						<view class="booking-way-box">
							<text class="iconfont iconyuding">&#xe63f;</text>
							<view class="right-booking-way-box">
								<view class="top-title">入住须知</view>
								<view class="conten">独立卫生间，允许做饭，允许吸烟，允许聚会，不允许带宠物、接待境外人士</view>
							</view>
						</view>
					</view>
				</view>
				<unsubscribeRules></unsubscribeRules>
			</view>
			<!-- <button class="mini-btn" type="primary">
					立即预定
			</button> -->
			<view class="reserve-box" @tap="reservations">
				<text style="font-weight:800;">{{orderPrice}}</text>
				<text style="font-size:14px;margin: 0 50upx;">{{day}}</text>
				<text>立即预定</text>
			</view>
		</view>
		<mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="'入住'" :end-text="'离店'"
		 color="#f05b72" :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirm" @onCancel="onCancel()" :pickerValueArray="pickerValueArray"></mpvue-picker>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import helper from '@/common/helper.js';
	import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
	import mpvuePicker from '../../components/index/mpvue-picker/mpvuePicker';
	import house_map from '../../components/particulars/map.vue' //地图组件
	import roomDescription from '../../components/particulars/room-description.vue' //房间详情组件
	import uniRate from "../../components/particulars/uni-rate/uni-rate.vue" //引用评分插件
	import supportingFacility from "../../components/particulars/supporting-facility.vue" //引用配套设施插件
	import unsubscribeRules from '../../components/particulars/unsubscribe-rules'
	import {
		shortHttp,
		room,
		fangDongDiscuss
	} from "../../common/requestUrl.json"; // 接口文件
	import {
		request
	} from '../../common/request.js' // 封装的带有token的请求方法
	export default {
		components: {
			house_map,
			uniRate,
			supportingFacility,
			unsubscribeRules,
			mpvuePicker,
			MxDatePicker
		},
		data() {
			return {
				isTrue: false,
				commentList: [], //评论数据
				count:'', // 全部评论条数
				imgArray: null, // 图片的数据
				price: null, // 房间价格
				http: shortHttp, // 域名
				numberIndex: 1, // 当前图片index
				lodgeUnitName: '', //房屋标题
				area: '', // 房屋面积
				bedNumTip: '', // 床
				bedNum: '', // 宜住多少人
				leaseType: '', //是否整套出租
				houseType: '', // 几室几厅
				username: '', // 房东名字
				usernamePhoto: '', // 房东头像
				score: '', // 多少点评
				latitude: null,
				longitude: null,
				attestation: '实名认证', // 是否实名认证
				facility: null, // 房间设备的数组
				addTenant: '', // 是否允许加客
				cashplege: '', // 押金
				sheetChange: '', // 被单更换情况
				toilet: '', // 卫生间
				minDays: '', //最少入住天数
				maxDays: '', //最多入住天数
				foreigner: '', //是否接待外客
				goodRate: '0', //评论星级
				count: null,
				headImageUrl: '',
				roomInnerIntro: '', // 房间描述
				landlordId: '', //房东唯一id
				data: null,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				mode: 'selector',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray: [],
				luId: '', // 房源id
				showPicker: false,
				type: 'range', //时间插件类型  可选值：date（日期）、time（时间）、datetime（日期时间）、range（日期范围）、rangetime（日期时间范围）
				value: '',
				day:'', //日历选择的天数,
				startTime:'',
				endTime:'',
				orderPrice:'', // 订单结算的价格
			}
		},
		computed: {
			...mapState(['socketOpen', 'chatList', 'socketError', 'socketLoading', 'socketObj']),
		},
		methods: {
			...mapMutations(['reconnectChat']),
			// 与房东联系
			toMessageDetail() {
				// let param = JSON.stringify(item);
				const _this = this;
				let param = {
					title: _this.username,
					list_id: _this.landlordId,
					userpic: _this.usernamePhoto,
				}
				param = JSON.stringify(param)
				if(_this.socketLoading){
					helper.layer('正在重连聊天室,请稍后..');
					return;
				}else if(!_this.socketLoading&&_this.socketError){
					helper.layer('与聊天室断开,正在重连...')
					_this.reconnectChat();
					return;
				}
				uni.navigateTo({
					url:'/pages/messages/chat?param='+param,
				})
			},
			//顶部图片反动的index
			changeIndicatorDots(e) {
				this.numberIndex = e.detail.currentItemId
			},
			// 是否查看全部描述
			clickBtn() {
				this.isTrue = !this.isTrue
			},
			// 携带房东唯一id跳转到房东详情
			clickLandlord() {
				uni.navigateTo({
					url: `/pages/landlord_introduced/landlord_introduced?landlord=${this.landlordId}`
				})
			},
			// 点击跳转页面查看房东所有描述
			clickDiscuss() {
				uni.navigateTo({
					url:`/pages/comment/comment?roomId=${this.luId}`
				})
			},
			onCollect() {
				const _this = this;
				let pickerValueArray = []
				request({
					url: '/wap/api/my.php?action=favoriteClass',
					success: function(res) {
						let array = res.data.content.item
						for (let i = 0; i < array.length; i++) {
							pickerValueArray.push({
								label: array[i].cname,
								value: array[i].cid
							})
							_this.pickerValueArray = pickerValueArray
						}
					}
				})
				let coll = !_this.data.isFavorite //获取原本的收藏值并取反
				_this.$set(_this.data, "isFavorite", coll); //更改
				// 判断
				if (coll === true) {
					setTimeout(() => {
						_this.$refs.mpvuePicker.show() // 点击弹出mpvuePickerpicker
					}, 2000)
				} else if (coll === false) {
					request({
						url: '/wap/api/my.php?action=modifyFavorite',
						data: {
							luId: _this.luId,
							favAction: "del"
						},
						success: res => {
							console.log('取消了:', res);
							if (res.data.status == "success") {
								uni.showToast({
									title: "取消收藏",
									duration: 2000
								})
							}
						}
					})
				}
			},
			// picker 组件点击取消时回调
			onCancel(e) {
				// console.log(this.i);

				this.data.isFavorite = false
			},
			// picker 组件点击确定时回调，返回选中的 label, value 和数组索引 index 的值
			onConfirm(e) {
				console.log("确认：", e.value);
				const _that = this;
				let value = e.value;
				let collectId;
				for (let index = 0; index < value.length; index++) {
					collectId = value[index];
				}
				request({
					url: '/wap/api/my.php?action=modifyFavorite',
					data: {
						luId: _that.luId,
						classId: collectId,
						favAction: "add"
					},
					success: res => {
						console.log("收藏：", res);
						if (res.data.status == "success") {
							uni.showToast({
								title: "收藏成功",
								duration: 2000
							})
						} else {
							uni.showToast({
								title: "收藏失败",
								duration: 2000
							})
						}
					}
				})
			},
			/* -----------------------------日期组件回调函数------------------------------- */
			onShowDatePicker(type) { //显示
				this.type = type;
				this.showPicker = true;
				this.value = this[type];
			},
			onSelected(e) { //选择
				this.showPicker = false;
				if (e) {
					this[this.type] = e.value;
					//选择的值
					console.log('value => ' + e.value + "");
					let tiem = e.value
					let arrayTime = tiem.slice(0, 12);
					// console.log("开始时间",startTime);
					let startTime, endTime;
					for (let index = 0; index < arrayTime.length; index++) {
						startTime = arrayTime[0];
						endTime = arrayTime[1];
					}
					console.log("shenme" + startTime);
					this.startTime = startTime;
					this.endTime = endTime;
					let d1 = new Date(startTime);
					let d2 = new Date(endTime);
					let t = Math.abs((d1 - d2) / 3600000 / 24);
					console.log(t);

					this.day = t + "晚";
					this.orderPrice = "￥" + this.price * t; // 拿到当前房源的价格乘于选定的天数得到总价格
					//原始的Date对象
					// console.log('date => ' + e.date);
				}
			},
			// 立即预定
			reservations(){
				const _that = this;
				if (_that.day === '' && _that.startTime === '' && _that.endTime === '') {
					_that.showPicker = true;
				} else {
					uni.navigateTo({
						url: `/pages/particulars/place_order?startTime=${_that.startTime}&endTime=${_that.endTime}&luId=${_that.luId}&day=${_that.day}&orderPrice=${_that.orderPrice}&price=${_that.price}`
					})
				}

			}
		},
		onLoad(option) {
			// console.log(option.id);
			const _that = this;
			let id = option.id; //房间唯一id
			_that.luId = id
			request({
				url: room,
				data: {
					luId: _that.luId
				},
				success: res => {
					let array=[];
					console.log("房间详情", res.data.content);
					let datas = res.data.content
					_that.data = datas
					_that.imgArray = datas.images // 图片数组
					_that.price = datas.priceAndTips.displayPrice // 价格
					_that.lodgeUnitName = datas.luBase.lodgeUnitName // 房屋标题
					_that.area = datas.detail.area // 房屋面积
					_that.bedNumTip = datas.bed.bedNumTip // 床
					_that.bedNum = datas.bed.bedNum
					_that.leaseType = datas.detail.leaseType
					_that.houseType = datas.detail.houseType
					_that.latitude = datas.cityInfo.latitude
					_that.longitude = datas.cityInfo.longitude
					_that.usernamePhoto = datas.landlord.headImageUrl
					_that.username = datas.landlord.landlordName
					if (!datas.landlord.landlordPersonRole) {
						_that.attestation = '未实名认证'
					}
					_that.score = datas.landlord["-Score"]
					_that.facility = datas.facility
					_that.addTenant = datas.detail.addTenant
					_that.cashplege = datas.detail.cashplege
					_that.sheetChange = datas.detail.sheetChange
					_that.toilet = datas.detail.toilet
					_that.minDays = datas.detail.minDays
					_that.maxDays = datas.detail.maxDays
					_that.foreigner = datas.detail.foreigner
					let commentList = datas.comment.content
					for (const i in commentList) {
						_that.commentList.push(commentList[i])
					}
					_that.count = datas.comment.count
					_that.goodRate = datas.comment.goodRate
					_that.count = datas.comment.count
					_that.headImageUrl = datas.landlord.headImageUrl
					_that.roomInnerIntro = datas.detail.roomInnerIntro
					_that.landlordId = datas.landlord.landlordId
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		height: 100%;
		background-color: #ededed;

		.container-box {
			width: 100%;
			height: 500upx;

			.uni-padding-wrap {
				position: relative;

				.swiper {
					width: 100%;
					height: 500upx;

					.banner {
						width: 100%;
						height: 500upx;
					}
				}

				.price {
					width: 200upx;
					height: 60upx;
					line-height: 60upx;
					text-align: center;
					color: #fff;
					font-size: 14px;
					background-color: rgba(0, 0, 0, .7);
					position: absolute;
					bottom: 0;
					left: 0;

					.specific-price {
						font-size: 18px;
					}
				}

				.indexes-box {
					width: 60upx;
					height: 60upx;
					background-color: rgba(0, 0, 0, .7);
					border-radius: 50%;
					text-align: center;
					line-height: 60upx;
					font-size: 12px;
					color: #fff;
					position: absolute;
					bottom: 10upx;
					right: 30upx;
				}

				.icon-box {
					width: 60upx;
					height: 60upx;
					color: #fff;
					background-color: rgba(0, 0, 0, .7);
					border-radius: 50%;
					line-height: 60upx;
					display: flex;
					justify-content: center;
					font-size: 30upx;
					position: absolute;
					top: 30upx;
					right: 30upx;

					.love-icon {
						font-size: 30upx;
					}

					.love-icon-red {
						font-size: 30upx;
						color: #F8070E;
					}
				}
			}
		}

		.container-contact-box {
			width: 100%;
			// height: 556upx;
			padding: 30upx;
			box-sizing: border-box;

			.contact-box {
				height: 600upx;
				padding: 0 20upx;
				box-sizing: border-box;
				background-color: #fff;
				display: flex;
				flex-direction: column;
				align-items: center;

				.title {
					margin-top: 42upx;
					text-align: center;
					font-weight: bold;
				}

				.comment {
					margin-top: 34upx;
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

					.mini-btn {
						background-color: #fff;
						font-size: 18px;
						border: 1px solid #ef5b72;
						color: #ef5b72;

						.contact-the-landlord-icon {
							font-size: 18px;
							color: #ef5b72;
							margin-right: 10upx;
						}
					}
				}
			}

			.housing-information-box {
				width: 100%;
				height: 220upx;
				background-color: #fff;
				margin-top: 10upx;
				display: flex;
				justify-content: space-between;

				.house-classifieds {
					width: 230upx;
					font-size: 14px;
					text-align: center;
					margin-top: 30upx;

					.house-icon {
						font-size: 24px;
						color: #b8b8b8;
					}

					.font-color {
						color: #c8c8c8;
						font-size: 12px;
					}
				}
			}

			.mini-btn {
				height: 80upx;
				line-height: 80upx;
				background-color: #ef5b72;
				font-size: 16px;
				border: 1px solid #ef5b72;
				color: #fff;
				margin-top: 30upx;
			}
		}

		.cantainer-description-box {
			width: 100%;
			margin-top: 10upx;
			background-color: #fff;

			.title {
				font-weight: bold;
				padding-top: 36upx;
				text-align: center;
			}

			.introduce {
				width: 610upx;
				height: 136upx;
				text-align: center;
				text-overflow: ellipsis;
				overflow: hidden;
				font-size: 14px;
				padding: 44upx 46upx;
			}

			.introduces {
				width: 610upx;
				height: 100%;
				font-size: 14px;
				padding: 44upx 46upx;
			}

			.btn-box {
				text-align: center;
				margin-top: 18upx;

				.mini-btn {
					height: 80upx;
					line-height: 80upx;
					background-color: #fff;
					font-size: 12px;
					border: 1px solid #ef5b72;
					color: #ef5b72;
					margin: 0upx 0 28upx 0;

					.contact-the-landlord-icon {
						font-size: 14px;
						color: #ef5b72;
						margin-right: 10upx;
					}
				}
			}

			.meinv-img {
				width: 100%;
				height: 364upx;
			}

			.details-of-the-room-box {
				width: 100%;
				margin-top: 48upx;

				.details-of-the-room-title {
					font-weight: bold;
					text-align: center;
				}

				.operation-list-box {
					width: 100%;
					padding: 40upx;
					box-sizing: border-box;

					.list-box {
						width: 100%;
						height: 65upx;
						font-size: 14px;
						border-bottom: 1px #ccc solid;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.left {
							color: #b9b9b9;
						}

						.right {
							color: #ef5b72;
						}
					}
				}
			}

			.tenant-review-box {
				width: 100%;

				.tenant-review {
					text-align: center;
					font-weight: bold;
				}

				.grades-box {
					width: 100%;
					box-sizing: border-box;
					padding: 40upx;

					.grades-contenr {
						width: 100%;
						height: 82upx;
						border-radius: 10upx;
						background-color: #fdf6e5;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.discuss-box {
						margin-top: 30upx;
						text-overflow: ellipsis;
						overflow: hidden;

						.criticism {
							width: 100%;
							height: 184upx;
							border-bottom: 1px solid #ccc;

							.username-img-box {
								width: 100%;
								display: flex;
								justify-content: space-between;
								margin-bottom: 30upx;
								margin-top: 20upx;

								.username-photo {
									width: 76upx;
									height: 76upx;
									border-radius: 50%;
								}

								.username-check {
									font-size: 14px;

									.check {
										font-size: 12px;
										color: #d6d6d6;
									}
								}
							}
						}

						.btn-box {
							text-align: center;
							margin-top: 18upx;

							.show-img {
								width: 100%;
								height: 364upx;
							}

							.mini-btn {
								height: 80upx;
								line-height: 80upx;
								background-color: #fff;
								font-size: 12px;
								border: 1px solid #ef5b72;
								color: #ef5b72;

								.contact-the-landlord-icon {
									font-size: 14px;
									color: #ef5b72;
									margin-right: 10upx;
								}
							}
						}
					}
				}
			}
		}

		.transaction-rules-box {
			width: 100%;
			padding: 40upx;
			box-sizing: border-box;

			.transaction-rules-title {
				width: 100%;
				text-align: center;
				color: #000;
				font-size: 14;
				font-weight: bold;
			}

			.bottom-transaction-rules {
				color: #626262;
				margin-top: 20upx;

				.booking-way-box {
					margin-top: 20upx;
					display: flex;

					.iconyuding {
						font-size: 16px;
					}

					.right-booking-way-box {
						font-size: 12px;
						margin-left: 30upx;

						.top-title {
							color: #000;
						}

						.conten {
							color: #d6d6d6;
						}
					}

					.right-booking-way-box1 {
						margin-left: 62upx;
						// margin-top: 20upx;
						font-size: 12px;

						.top-title {
							color: #000;
						}

						.conten {
							color: #d6d6d6;
						}
					}
				}
			}
		}

		.reserve-box {
			width: 100%;
			height: 90upx;
			background: #f05b72;
			border-radius: 10upx;
			color: #fff;
			line-height: 90upx;
			text-align: center;
			margin-top: 30upx;
			bottom: 0;
			left: 0;
			z-index: 999;

			&:active {
				opacity: .5;
			}
		}
	}
	.grades1-box{
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-size:14px;
		padding: 0 30upx 20upx 30upx;
		box-sizing: border-box;
		background-color: #fff;
		margin-bottom: 30upx;
		.house-classifieds{
			text-align: center;
			color: #a0a0a0;
			.house-icon{
				font-size: 30px;
			}
			.black{
				color: #000;
			}
		}
	}
</style>
