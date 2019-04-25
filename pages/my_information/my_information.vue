<template>
	<view class="my_information_page">
		<view class="head">
			<view class="avatar_wrap" @tap="chooseAvatar">
				<img class="avatar" :src="avatar?(host+avatar):'/static/images/default_avatar.jpg'" alt="">
				<view class="img_icon">
					<text class="iconfont icon-xiangji"></text>
				</view>
			</view>
			<view class="nick-name">
				<input type="text" ref="nickname" v-if="!infoForm.nickname || onfocus === true" placeholder-style="font-size:36upx;color:#cccccc;"
				 maxlength="16" placeholder="请输入用户名" v-model.trim="infoForm.nickname" @focus="onfocus = true" @blur="onfocus = false"
				 :focus="focus">

				<view class="show_nickname" @tap="nicknameFocus()" v-if="infoForm.nickname!=='' && onfocus === false">
					{{infoForm.nickname}}
					<text class="iconfont icon-icon-edit edit-icon"></text>
				</view>
			</view>
		</view>
		<view class="info_form">
			<view class="form_item">
				<view class="label">真实姓名</view>
				<view class="ipt">
					<input type="text" placeholder-style="font-size:28upx;color:#cccccc;" placeholder="请填写" maxlength="6" v-model.trim="infoForm.truename">
				</view>
				<view class="after_icon">
				</view>
			</view>
			<view class="form_item">
				<view class="label">身份证号</view>
				<view class="ipt">
					<input type="text" placeholder-style="font-size:28upx;color:#cccccc;" placeholder="请填写" maxlength="18"
					 v-model.trim="infoForm.idCard">
				</view>
				<view class="after_icon">
				</view>
			</view>
			<view class="form_item">
				<view class="label">护照号</view>
				<view class="ipt">
					<input type="text" placeholder-style="font-size:28upx;color:#cccccc;" placeholder="请填写" v-model.trim="infoForm.passCard">
				</view>
				<view class="after_icon">
				</view>

			</view>
			<view class="form_item" @tap="changeSex">
				<view class="label">性别</view>
				<view class="ipt">
					<view class="empty" v-if="infoForm.sex===''">请选择</view>
					<view class="data_box" v-else>{{infoForm.sex}}</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @click="changeLocal">
				<view class="label">地区</view>
				<view class="ipt">
					<view class="empty" v-if="infoForm.province===''&&infoForm.city===''">请选择</view>
					<view class="data_box" v-else>{{infoForm.province}}-{{infoForm.city}}</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="label">出生日期</view>
				<picker class="ipt" mode="date" :value="infoForm.birth" :start="startDate" :end="endDate" @change="changeDate">
					<view class="empty" v-if="infoForm.birth === ''">请选择</view>
					<view class="data_box">{{infoForm.birth}}</view>
				</picker>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="changeEducation">
				<view class="label">教育背景</view>
				<view class="ipt">
					<view class="empty" v-if="infoForm.education===''">请选择</view>
					<view class="data_box" v-else>{{infoForm.education}}</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
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
		components: {
			mpvuePicker
		},
		data() {
			return {
				host:shortHttp,
				token: '',
				storageInfo: {},
				avatar: '', // 用户头像
				infoForm: {
					nickname: '', //昵称
					truename: '', //真实姓名
					idCard: '', //身份证号
					passCard: '', //护照号
					sex: '', //性别
					birth: '', //出生日期
					education: '', //教育背景
					province: '', // 省
					city: '', //市
					localIndex: '',
					birth_code: null,
				},
				// 初始化用户数据  (用于对比是否别修改)
				initInfo: {},
				// 选择器模式
				mode: 'selector',
				//地区数据
				cityData: cityData,
				//sexdata
				sexData: ['男', '女'],
				// 教育背景数据
				educationData: ['初中', '高中', '专科', '本科', '研究生', '博士'],
				deepLength: 2,
				defaultLocal: [0, 0], //地区索引
				onfocus: false,
				focus: false,
				editStatus:0, //提交编辑状态  2表示2个请求完成
				idLoding:false, // 是否正在提交编辑
			};
		},
		computed: {
			...mapState(['isEditUserInfo']),
			//日期选择开始时间
			startDate() {
				return this.getDate('start');
			},
			//日期选择结束时间
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad() {
			let userInfo = uni.getStorageSync('dz_userInfo');
			this.storageInfo = userInfo;
			this.token = uni.getStorageSync('dz_token');
			// console.log(userInfo);
			this.avatar = userInfo.headImgurl;
			// 用户数据的深拷贝
			let _infoObj =  this.initUserInfo(userInfo)
			this.infoForm = helper.deepCopy(_infoObj);
			this.initInfo = helper.deepCopy(_infoObj);
			
		},
		onShow() {},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.submitInfo();
			}
		},
		onBackPress() {
			if (this.$refs.ciytPicker.showPicker) {
				this.$refs.ciytPicker.pickerCancel();
				return true;
			} else if (helper.isObjEqual(this.infoForm, this.initInfo) === false) {
				this.userInfoIsEdit();
				return true;
			}
		},
		methods: {
			...mapMutations(['isUserInfoEditStatus']),
			// 点击昵称 让输入框聚焦
			nicknameFocus() {
				const _this = this;
				_this.onfocus = true;
				_this.$nextTick(function() {
					_this.focus = true;
				})
			},
			// 选择头像
			chooseAvatar() {
				const _this = this;
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
								"Authorization": 'Bearer ' + _this.token,
							},
							success: (res) => {
								const data = JSON.parse(res.data)
								if (data.status === 'success') {
									_this.storageInfo.headImgurl = data.content.url;
									_this.avatar = data.content.url;
									uni.setStorageSync('dz_userInfo', _this.storageInfo);
									helper.layer('上传成功');
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
			//选择性别
			changeSex() {
				const _this = this;
				uni.showActionSheet({
					itemList: this.sexData,
					success: function(res) {
						_this.infoForm.sex = _this.sexData[res.tapIndex];
					},
					fail: function(err) {

					}
				});

			},
			//选择出生日期
			changeDate(e) {
				this.infoForm.birth = e.target.value;
			},
			// 地区选择
			changeLocal() {
				let _arr;
				if (this.infoForm.localIndex === '') {
					_arr = [0, 0]
				} else {
					_arr = this.infoForm.localIndex.split(',');
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
				const localArr = e.label.split('-');
				this.infoForm.province = localArr[0];
				this.infoForm.city = localArr[1];
				this.infoForm.localIndex = e.index.join(',');
			},
			//取消城市选择
			cancelLocal(e) {},
			//选择教育背景
			changeEducation() {
				const _this = this;
				uni.showActionSheet({
					itemList: this.educationData,
					success: function(res) {
						_this.infoForm.education = _this.educationData[res.tapIndex];
					},
					fail: function(err) {
					
					}
				});
			},
			//返回时间
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			// 选择器的默认值转换
			pickerDefultTrans(str) {
				let _arr = str.split(',');
				_arr.map((item, index, self) => {
					self[index] = Number(item);
				})
				return _arr
			},
			// 个人资料是否被修改
			userInfoIsEdit() {
				const _this = this;
				uni.showModal({
					title: '',
					content: '是否保存当前编辑',
					confirmText: '保存',
					confirmColor: '#F05B72',
					success: function(res) {
						if (res.confirm) {
							_this.submitInfo();
						} else if (res.cancel) {
							_this.infoForm = helper.deepCopy(_this.initInfo);
							uni.navigateBack({
								delta: 1
							})
						}
					}
				});
			},
			// 提交个人资料
			submitInfo() {
				if(this.idLoding) return;
				const _this = this;
				const nickname = _this.infoForm.nickname;
				const truename = _this.infoForm.truename;
				const idCard = _this.infoForm.idCard;
				const passCard = _this.infoForm.passCard;
				const sex = _this.infoForm.sex;
				const birth = _this.infoForm.birth;
				const education = _this.infoForm.education;
				const province = _this.infoForm.province;
				const city = _this.infoForm.city;
				const localIndex = _this.infoForm.localIndex;
				const birth_code = _this.infoForm.birth_code;
				if (nickname.trim() === '') {
					helper.layer('用户名不能为空')
				} else if (idCard.trim() !== '' && !helper.idCardReg(idCard)) {
					helper.layer('身份证格式有误')
				}  else if(truename.trim() !== '' && !helper.nameRge(truename)){
					helper.layer('姓名必须为中文')
				} else {
					this.idLoding = true;
					const param = {
						birth:birth,
						birth_code:birth_code,
						city:city,
						education:education,
						idcard:idCard,
						passport:passCard,
						province:province,
						province_code: localIndex,
						realname:truename,
						sex:sex,
						nickname:nickname
					}
					request({
						url: '/wap/api/my.php?action=updateInfo',
						method: 'POST',
						data:param,
						success: (res) => {
							if(res.data.status === 'success'){
								let _uinfo = uni.getStorageSync('dz_userInfo');
								let _data = Object.assign(_uinfo,param);
								uni.setStorageSync('dz_userInfo',_data);
								_this.initInfo = helper.deepCopy(_this.initUserInfo(_data)) 
								_this.isUserInfoEditStatus(true);
								uni.navigateBack({
									delta: 1
								})
								helper.layer('修改成功')
							}else{
								helper.layer('修改失败')
							}
						},
						complete: () => {
							this.idLoding = false;
						}
					})
				}
			},
			// 初始化个人信息
			initUserInfo(userInfo){
				let _infoObj = {};
				_infoObj['nickname'] = userInfo.nickname?userInfo.nickname:'';
				_infoObj['truename'] = userInfo.realname;
				_infoObj['idCard'] = userInfo.idcard;
				_infoObj['passCard'] = userInfo.passport;
				_infoObj['sex'] = userInfo.sex;
				_infoObj['birth'] = userInfo.birth;
				_infoObj['education'] = userInfo.education;
				_infoObj['province'] = userInfo.province;
				_infoObj['city'] = userInfo.city;
				_infoObj['localIndex'] = userInfo.province_code ? userInfo.province_code : '';
				_infoObj['birth_code'] = userInfo.birth_code ? userInfo.birth_code : '';
				return _infoObj
				
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
	$back-color:#f5f6f8;

	.my_information_page {
		box-sizing: border-box;

		.head {
			height: 360upx;
			caret-color: #F05B72;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.avatar_wrap {
				position: relative;
				border: 3px solid rgba(144, 144, 144, 0.1);
				height: 160upx;
				width: 160upx;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 30upx;

				.avatar {
					width: 156upx;
					height: 156upx;
					border-radius: 50%;
				}

				.img_icon {
					position: absolute;
					right: 0;
					bottom: 0;
					width: 40upx;
					height: 40upx;
					background: $theme-color;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;

					.iconfont {
						font-size: 24upx;
						color: #FFFFFF;
					}
				}
			}

			.nick-name {
				width: 480upx;
				height: 52upx;
				display: flex;
				justify-content: center;

				input {
					width: 480upx;
					text-align: center;
					caret-color: #F05B72;
					font-size: 36upx;
				}

				.show_nickname {
					display: inline;
					font-size: 36upx;
					height: 52upx;
					line-height: 52upx;
					text-align: center;

					.edit-icon {
						font-size: 32upx;
						color: $theme-color;
					}
				}
			}
		}

		.info_form {
			box-sizing: border-box;
			width: 100%;
			padding: 20upx 30upx;

			.form_item {
				box-sizing: border-box;
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;
				flex-direction: row;
				border-bottom: 1px solid #eaeaea;

				.label {
					font-size: 32upx;
				}

				.ipt {
					box-sizing: border-box;
					height: 100%;
					flex-grow: 1;
					display: flex;
					flex-direction: row-reverse;
					align-items: center;
					font-size: 28upx;

					input {
						text-align: right;
						font-size: 28upx;
					}

					.empty {
						font-size: 28upx;
						color: #cccccc;
					}

					.data_box {
						font-size: 28upx;
						color: #333333;
					}
				}

				.after_icon {
					width: 30upx;
					display: flex;
					justify-content: center;
					align-items: center;

					.iconfont {
						font-size: 28upx;
						color: #cccccc;
					}
				}
			}
		}

	}
</style>
