<template>
	<view class="contaniers">
		<view class="img-box" @tap="clickBenefit">
			<view class="backgroun-img">为什么要成为房东？</view>
		</view>
		<view class="landlord-box">
			<view class="box">
				<!-- 手机号 -->
				<view class="list-box">
					<text class="iconfont iphone">&#xe61a;</text>
					<view class="list-title-box">
						<view class="mobile-phone-box">
							<view class="mobile-phone">手机号</view>
							<view class="phone-number">
								<text v-if="phone===''">请填写</text>
								<text v-else>{{phone}}</text>
							</view>
						</view>
						<view class="off-the-stocks">
							<text v-text="phone===''?'未完成':'已完成'"></text>
							<text class="iconfont right">&#xe65e;</text>
						</view>
					</view>
				</view>
				<!-- 真实头像 -->
				<view class="list-box" @tap="chooseAvatar">
					<text class="iconfont iphone">&#xe60e;</text>
					<view class="list-title-box">
						<view class="mobile-phone-box">
							<view class="mobile-phone">真实头像</view>
							<view class="phone-number">
								<text v-text="headImgurl!==''?'已上传':'未上传'"></text>
							</view>
						</view>
						<view class="off-the-stocks">
							<text v-text="headImgurl!==''?'已完成':'未完成'"></text>
							<text class="iconfont right">&#xe65e;</text>
						</view>
					</view>
				</view>
				<!-- 真实身份 -->
				<view class="list-box" @tap="information">
					<text class="iconfont iphone">&#xe608;</text>
					<view class="list-title-box">
						<view class="mobile-phone-box">
							<view class="mobile-phone">真实身份</view>
							<view class="phone-number" v-text="identityIsOk?'已完善':'请完善真实身份'"></view>
						</view>
						<view class="off-the-stocks">
							<text v-text="identityIsOk?'已完成':'未完成'"></text>
							<text class="iconfont right">&#xe65e;</text>
						</view>
					</view>
				</view>
				<view class="list-box" @tap="changeLocal()">
					<text class="iconfont iphone">&#xe60d;</text>
					<view class="list-title-box">
						<view class="mobile-phone-box">
							<view class="mobile-phone">地区</view>
							<view class="phone-number">
								<text v-if="province===''||city===''">请选择</text>
								<text v-else>{{province}}-{{city}}</text>
							</view>
						</view>
						<view class="off-the-stocks">
							<text v-if="province===''||city===''">未完成</text>
							<text v-else>已完成</text>
							<text class="iconfont right">&#xe65e;</text>
						</view>
					</view>
				</view>
				<!-- 收款方式 -->
				<!-- <view class="list-box" @tap="payment">
					<text class="iconfont iphone">&#xe616;</text>
					<view class="list-title-box">
						<view class="mobile-phone-box">
							<view class="mobile-phone">收款方式</view>
							<view class="phone-number">请完善收款方式</view>
						</view>
						<view class="off-the-stocks">
							未完成
							<text class="iconfont right">&#xe65e;</text>
						</view>
					</view>
				</view> -->
				<view class="status_wrap">
					<view class="landlord_status">
						<text class="iconfont icon-dian" style="font-size: 32upx; color: #FFFFFF;"></text>
						<text v-if="curStatus===1 || curStatus===''">不是房东</text>
						<text v-if="curStatus===2">审核中</text>
						<text v-if="curStatus===3">审核失败</text>
						<text v-if="curStatus===4">审核成功</text>
							<text v-if="curStatus===5">已成为房东</text>
					</view>
				</view>
			</view>
			<view v-if="curStatus === 2" class="dis_btn my-btn-block">正在审核...</view>
			<view v-else-if="curStatus===1" class="my-btn-block" :class="{'dis_btn':isLoading}" @tap="applyLandlord()">申请成为房东</view>
			<view v-else-if="curStatus===3" class="my-btn-block" :class="{'dis_btn':isLoading}" @tap="reApplyLandlord()">重新申请</view>
			<view v-else-if="curStatus===4" class="my-btn-block" :class="{'dis_btn':isLoading}" @tap="becomeLandlord()">成为房东</view>
			<view v-else-if="curStatus===5" class="dis_btn my-btn-block">已成为房东</view>
			<view v-else class="dis_btn my-btn-block">等待检测...</view>

		</view>
		<!-- 地区选择 -->
		<mpvue-picker themeColor="#F05B72" ref="ciytPicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="defaultLocal"
		 @onConfirm="confirmLocal" @onCancel="cancelLocal" :pickerValueArray="cityData"></mpvue-picker>
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
	import cityData from '../../common/city.data.js';
	import mpvuePicker from '../../components/mpvue-picker/mpvuePicker.vue';
	import {
		shortHttp
	} from '../../common/requestUrl.json'
	export default {
		data() {
			return {
				phone: '', // 电话
				realname: '', //真实姓名
				idcard: '', // 身份证
				passCard: '', //护照号
				headImgurl: '', //头像
				province: '', // 省
				city: '', //市
				localIndex: '',
				mode: 'multiLinkageSelector', // picker类型
				cityData: cityData,
				deepLength: 2,
				defaultLocal: [0, 0], //地区索引
				isChangeCity: false, // 是否正在选择城市
				curStatus: '', // 当前申请房东的状态值
				isLoading: false,
			};
		},

		components: {
			mpvuePicker
		},
		onLoad() {
			console.log(this.identityIsOk)
			this.getCurData();
			this.testLandlord();
		},
		onShow() {
			if (this.isEditUserInfo) {
				const userInfo = uni.getStorageSync('dz_userInfo');
				this.phone = userInfo.phone;
				this.realname = userInfo.realname;
				this.idcard = userInfo.idcard;
				this.headImgurl = userInfo.headImgurl;
				this.localIndex = userInfo.province_code;
				this.province = userInfo.province;
				this.city = userInfo.city;
				this.testLandlord();
			}
			this.isUserInfoEditStatus(false);
		},
		onBackPress() {
			if (this.$refs.ciytPicker.showPicker) {
				this.$refs.ciytPicker.pickerCancel();
				return true;
			}
		},
		computed: {
			...mapState(['isEditUserInfo']),
			// 真实身份信息是否完成
			identityIsOk: {
				get() {
					if ((this.realname && this.passCard) || (this.realname && this.idcard)) {
						return true;
					} else {
						return false;
					}
				}
			}
		},
		methods: {
			...mapMutations(['isUserInfoEditStatus']),
			// 跳转事件
			clickBenefit: function() {
				uni.navigateTo({
					url: "/pages/landlord/landlord_benefit" //跳转到为什么成为房东页面
				});
			},
			clickIphone: function() {
				uni.navigateTo({
					url: "/pages/landlord/iphone" //跳转到手机号页面
				});
			},
			// 完善真实身份
			information: function() {
				uni.navigateTo({
					url: "/pages/landlord/information" //跳转到完善真实身份页面
				});
			},
			// 完善收款方式
			payment: function() {
				uni.navigateTo({
					url: "/pages/landlord/payment_term" //跳转到选择收款方式页面
				});
			},
			// 更换头像
			chooseAvatar() {
				const _this = this;
				const token = uni.getStorageSync('dz_token');
				let storageInfo = uni.getStorageSync('dz_userInfo');
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						let _avatar = res.tempFiles[0].path;
						// let fileType = _avatar.
						uni.uploadFile({
							url: 'http://dz.abontest.com/e/extend/uploadify/uploadify.php?dir=duanzu_head_no_mark&type=head_no_mark', //仅为示例，非真实的接口地址
							filePath: _avatar,
							name: 'Filedata',
							header: {
								"Authorization": 'Bearer ' + token,
							},
							success: (res) => {
								const data = JSON.parse(res.data)
								if (data.status === 'success') {
									storageInfo.headImgurl = data.content.url;
									uni.setStorageSync('dz_userInfo', storageInfo);
									helper.layer('上传成功');
									_this.testLandlord();
								} else {
									helper.layer('头像上传失败,请稍后再试');
								}
							},
							fail: () => {
								helper.layer('头像上传失败,请稍后再试');
							},
							complete: () => {

							}
						});
					}
				})
			},
			// 地区选择
			changeLocal() {
				let _arr;
				console.log(this.localIndex)
				if (this.localIndex === '') {
					_arr = [0, 0]
				} else {
					_arr = this.localIndex.split(',');
					_arr.map((item, index, self) => {
						self[index] = Number(item);
					})
				}
				this.defaultLocal = _arr.splice(0)
				this.mode = 'multiLinkageSelector'
				this.deepLength = 2;
				this.$refs.ciytPicker.show()
			},
			//确认城市选择
			confirmLocal(e) {
				if (this.isChangeCity) return;
				const _this = this;
				const localArr = e.label.split('-');
				let param = {
					province: localArr[0],
					city: localArr[1],
					province_code: e.index.join(','),
				}
				if (e.index.join(',') !== _this.localIndex) {
					_this.isChangeCity = true;
					request({
						url: '/wap/api/my.php?action=updateInfo',
						method: 'POST',
						data: param,
						success: (res) => {
							if (res.data.status === 'success') {
								console.log(res)
								let _uinfo = uni.getStorageSync('dz_userInfo');
								let _data = Object.assign(_uinfo, param);
								uni.setStorageSync('dz_userInfo', _data);
								helper.layer('修改成功');
								_this.testLandlord();
							} else {
								helper.layer('修改失败')
							}
						},
						complete: () => {
							_this.isChangeCity = false;
							_this.getCurData();
						}
					})
				}

			},
			//取消城市选择
			cancelLocal(e) {},

			// 判断成为房东的状态	
			testLandlord() {
				const _this = this;
				request({
					url: '/wap/api/my.php?action=tobeLandlord',
					method: 'GET',
					success: (res) => {
						if (res.data.status === 'success') {
							_this.curStatus = res.data.content.status;
						}
					},
					complete: () => {

					}
				})
			},

			// 申请成为房东
			applyLandlord() {
				if(this.isLoading) return;
				const _this = this;
				const param = {
					idcard: _this.idcard,
					passport: _this.passCard,
					phone: _this.phone,
					realname: _this.realname,
					userpic: _this.headImgurl,
					province: _this.province,
					city: _this.city
				}
				_this.isLoading = true;
				request({
					url: '/wap/api/my.php?action=tobeLandlord',
					method: 'POST',
					data: param,
					success: (res) => {
						if (res.data.status === 'success') {
							helper.layer(res.data.errorMsg);
							_this.testLandlord();
						} else {
							helper.layer(res.data.errorMsg);
						}
					},
					complete: () => {
						_this.isLoading = false;
					}
				})
			},
			// 重新申请成为房东
			reApplyLandlord() {
				if(this.isLoading) return;
				const _this = this;
				const param = {
					idcard: _this.idcard,
					passport: _this.passCard,
					phone: _this.phone,
					realname: _this.realname,
					userpic: _this.headImgurl,
					province: _this.province,
					city: _this.city
				}
				_this.isLoading = true;
				request({
					url: '/wap/api/my.php?action=tobeLandlord&post=next',
					method: 'POST',
					data: param,
					success: (res) => {
						if (res.data.status === 'success') {
							helper.layer(res.data.errorMsg);
							_this.testLandlord();
						} else {
							helper.layer(res.data.errorMsg);
						}
					},
					complete: () => {
						_this.isLoading = false;
					}
				})
			},

			// 立即成为房东
			becomeLandlord() {
				if(this.isLoading) return;
				const _this = this;
				let storageInfo = uni.getStorageSync('dz_userInfo');
				_this.isLoading = true;
				request({
					url: '/wap/api/my.php?action=beTheLandlord',
					method: 'POST',
					success: (res) => {
						if (res.data.status === 'success') {
							storageInfo.isFangDong = true;
							uni.setStorageSync('dz_userInfo', storageInfo);
								uni.navigateBack({
									delta:1,
								})
							_this.testLandlord();
						} else {
							helper.layer(res.data.errorMsg);
						}
					},
					complete: () => {
						_this.isLoading = false;
					}
				})
			},

			// 获取当前页面数据
			getCurData() {
				const userInfo = uni.getStorageSync('dz_userInfo');
				console.log(userInfo)
				this.phone = userInfo.phone;
				this.passCard = userInfo.passport;
				this.realname = userInfo.realname;
				this.idcard = userInfo.idcard;
				this.headImgurl = userInfo.headImgurl;
				this.localIndex = userInfo.province_code;
				this.province = userInfo.province;
				this.city = userInfo.city;
			}
		}
	};
</script>
<style>
	page {
		height: 100%;
	}
</style>

<style lang="scss" scoped>
	$theme-color: #F05B72;

	.contaniers {
		width: 100%;
		height: 100%;

		.img-box {
			width: 100%;
			height: 250upx;
			color: #fff;
			text-align: center;
			font-size: 20px;
			font-weight: bold;
			line-height: 250upx;
			background-image: url("../../static/images/meitu1.jpg");
			background-size: 100% 100%;
			position: relative;
			z-index: 1;

			&::after {
				content: "";
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background: inherit;
				filter: blur(2px);
				z-index: 2;
			}

			.backgroun-img {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				width: 100%;
				height: 250upx;
				text-align: center;
				z-index: 11;
			}
		}

		.landlord-box {
			width: 100%;
			height: calc(100% - 250upx);
			padding: 0 30upx 30upx 30upx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.box {
				.list-box {
					width: 100%;
					display: flex;
					align-items: center;
					margin-top: 10upx;

					.iphone {
						font-size: 30px;
						color: #76808a;
					}

					.list-title-box {
						padding: 16upx 0;
						display: flex;
						align-items: center;
						width: 100%;
						justify-content: space-between;
						border-bottom: 1px solid #c0c0c0;
						margin-left: 20upx;

						.mobile-phone-box {
							.mobile-phone {
								font-size: 32upx;
							}

							.phone-number {
								font-size: 28upx;
								font-weight: 300;
								color: #cccccc;
							}
						}

						.off-the-stocks {
							font-size: 32upx;

							.right {
								color: #cccccc;
								font-size: 32upx;
							}
						}
					}
				}

				.status_wrap {
					margin-top: 30upx;
					display: flex;
					flex-direction: row-reverse;

					.landlord_status {
						display: inline-block;
						box-sizing: border-box;
						padding: 8upx 14upx;
						border: 1px solid $theme-color;
						font-size: 28upx;
						border-radius: 8upx;
						color: $theme-color;
						background: #ffe3e3;
					}
				}
			}

			.btn {
				width: 100%;
				height: 76upx;
				background-color: #fa3679;
				color: #fff;
				font-weight: 300;
				text-align: center;
				line-height: 76upx;

				&:active {
					opacity: 0.5;
				}
			}
		}
	}
</style>
