<template>
	<view class="my_information_page">
		<view class="head">
			<view class="avatar_wrap" @tap="chooseAvatar">
				<img class="avatar" :src="infoForm.avatar?infoForm.avatar:'/static/images/default_avatar.jpg'" alt="">
				<view class="img_icon">
					<text class="iconfont icon-xiangji"></text>
				</view>
			</view>
			<view class="nick-name">
				<input type="text" v-if="infoForm.nickname==='' || onfocus === true" placeholder-style="font-size:36upx;color:#cccccc;"
				 maxlength="16" placeholder="请输入用户名" v-model.trim="infoForm.nickname" @focus="onfocus = true" @blur="onfocus = false" >

				<view class="show_nickname" @tap="onfocus=true" v-if="infoForm.nickname!=='' && onfocus === false">
					{{infoForm.nickname}}
					<text class="iconfont icon-icon-edit edit-icon"></text>
				</view>
			</view>
		</view>
		<view class="info_form">
			<view class="form_item">
				<view class="label">真实姓名</view>
				<view class="ipt">
					<input type="text" placeholder-style="font-size:28upx;color:#cccccc;" placeholder="请填写" v-model.trim="infoForm.truename">
				</view>
				<view class="after_icon">
				</view>
			</view>
			<view class="form_item">
				<view class="label">身份证号</view>
				<view class="ipt">
					<input type="text" placeholder-style="font-size:28upx;color:#cccccc;" placeholder="请填写" v-model.trim="infoForm.idCard">
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
				<picker class="ipt" mode="date" :value="infoForm.date" :start="startDate" :end="endDate" @change="changeDate" >
					<view class="empty" v-if="infoForm.date === ''">请选择</view>
					<view class="data_box">{{infoForm.date}}</view>
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
		<mpvue-picker themeColor="#F05B72" ref="ciytPicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="localIndex"
		 @onConfirm="confirmLocal" @onCancel="cancelLocal" :pickerValueArray="cityData"></mpvue-picker>
	</view>
</template>

<script>
	import cityData from '../../common/city.data.js';
	import mpvuePicker from '../../components/mpvue-picker/mpvuePicker.vue';
	export default {
		components: {
			mpvuePicker
		},
		data() {
			return {
				infoForm: {
					avatar: '', // 用户头像
					nickname: '', //昵称
					truename: '', //真实姓名
					idCard: '', //身份证号
					passCard: '', //护照号
					sex: '', //性别
					local: '', //地区
					date: '', //出生日期
					education: '', //教育背景
					province: '', // 省
					city: '', //市
					localIndex: [0, 0],
				},
				// 选择器模式
				mode: 'selector',
				//地区数据
				cityData: cityData,
				//sexdata
				sexData: ['男', '女'],
				// 教育背景数据
				educationData: ['初中', '高中', '专科', '本科', '研究生', '博士'],
				deepLength: 2,
				localIndex: [0, 0], //地区索引
				onfocus: false,

			};
		},
		computed: {
			//日期选择开始时间
			startDate() {
				return this.getDate('start');
			},
			//日期选择结束时间
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad() {},
		onShow() {},
		onReachBottom() {

		},
		onBackPress() {
			if (this.$refs.ciytPicker.showPicker) {
				this.$refs.ciytPicker.pickerCancel();
				return true;
			}
		},
		methods: {
			// 选择头像
			chooseAvatar() {
				const _this = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						console.log(res.tempFiles)
						_this.infoForm.avatar = res.tempFiles[0].path;
						console.log(JSON.stringify(res.tempFilePaths));
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
				this.infoForm.date = e.target.value;
			},
			// 地区选择
			changeLocal() {
				// this.pickerValueDefault = [0, 0]
				this.mode = 'multiLinkageSelector'
				this.deepLength = 2;
				this.$refs.ciytPicker.show()
			},
			//确认城市选择
			confirmLocal(e) {
				const localArr = e.label.split('-');
				this.infoForm.province = localArr[0];
				this.infoForm.city = localArr[1];
				this.infoForm.localIndex = e.index;
				this.localIndex = e.index;
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
