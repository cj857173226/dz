<template>
	<scroll-view class="contanier" :scroll-y="!setMainPicShow">
		<view class="title">上传房源照片要求</view>
		<view class="demand-box">
			<text>1.无明显修改&nbsp;</text>
			<text>2.无拉伸变形 </text>
			<text>3.无水印 </text>
			<text>4.不能出现联系方式或品牌宣传&nbsp;</text>
			<view style="color:#F05B72;">5.卧室、卫生间必传,并且照片总数大于五张。</view>
			<view style="color:#F05B72;">6.图片大小不超过20M,尺寸800*800以上,必须是png/jpg格式!!!</view>
		</view>
		<view class="bedroom-box">
			<view class="top-bedroom">
				<text style="font-weight: 700;">首图</text>
			</view>
			<view class="hint-bedroom">
				<view style="color: #f66;margin-right: 10upx;">*必须设置(请先上传房源照片)</view>
				<text class="hint-bedroom-color">从上传的照片中选择一张<text style="color: #f66;margin:0 10upx;">横图</text>作为首图!</text>
			</view>
			<view class="image_wrap">
				<view class="img_item" v-if="mainPic!==''">
					<image :src="host+mainPic">
					</image>
					<view class="set_main" @tap.stop="MainPicModelShow()">
						<text>切换首图</text>
					</view>
				</view>

				<view class="choose_img" v-if="mainPic===''" @tap.stop="MainPicModelShow()">
					<text class="iconfont icon-jia"></text>
				</view>
			</view>
		</view>


		<view class="bedroom-box">
			<view class="top-bedroom">
				<text style="font-weight: 700;">卧室</text>
				<view class="example">
					范例
					<text class="iconfont">&#xe65e;</text>
				</view>
			</view>
			<view class="hint-bedroom">
				<text style="color: #f66;margin-right: 10upx;">*必须上传</text>请确保
				<text class="hint-bedroom-color">卧室、床铺、床单、枕头展示齐全</text>
			</view>
			<view class="image_wrap">
				<view class="img_item" v-if="pics.length>0 && item.type === 'bedroom'" v-for="(item,index) in pics" :key="index"
				 @tap.stop="previewPic(item)">
					<image :src="host+item.val">
					</image>
					<view class="del_img" @tap.stop="del_img(index)" v-if="houseStatus==-1|| houseStatus == 2">
						<text class="iconfont icon-duomeitiicon-"></text>
					</view>
					<!-- <view v-if="houseStatus==-1|| houseStatus == 2" class="set_main" @tap.stop="setMainPic(item,index)">
						<text  v-text="item.is_main===1? '首图':'设置为首图'"></text>
					</view>
					<view class="set_main" v-if="(houseStatus== 0|| houseStatus == 1) && item.is_main === 1">
						<text>首图</text>
					</view> -->
				</view>

				<!-- 临时缓存地址 -->
				<view class="img_item2" v-if="temporaryUpload.length>0 && isUploading&& curUploadType==='bedroom'" v-for="(item, index) in temporaryUpload"
				 :key="item.path">
					<image :src="item.path">
					</image>
					<view class="mask">
						<text class="progress" v-if="!uploadErrStatus[index]||uploadErrStatus[index]==false">
							<text class="num">{{progressAll[index]}}</text>%
						</text>
						<text class="err" v-if="uploadErrStatus[index] === true">{{errTips[index]}}</text>
					</view>
				</view>
				<view class="choose_img" v-if="houseStatus==-1|| houseStatus == 2" @tap.stop="chooseImg('bedroom')">
					<text class="iconfont icon-jia"></text>
				</view>
			</view>

		</view>
		<view class="bedroom-box">
			<view class="top-bedroom">
				<text style="font-weight: 700;">客厅</text>
				<view class="example">
					范例
					<text class="iconfont">&#xe65e;</text>
				</view>
			</view>
			<view class="hint-bedroom">
				建议上传。站在厅角拍摄，事业会更广阔。
			</view>
			<view class="image_wrap">
				<view class="img_item" v-if="pics.length>0 && item.type === 'liveroom'" v-for="(item,index) in pics" :key="index"
				 @tap.stop="previewPic(item)">
					<image :src="host+item.val">
					</image>
					<view class="del_img" v-if="houseStatus==-1|| houseStatus == 2" @tap.stop="del_img(index)">
						<text class="iconfont icon-duomeitiicon-"></text>
					</view>
				</view>

				<!-- 临时缓存地址 -->
				<view class="img_item2" v-if="temporaryUpload.length>0 && isUploading&& curUploadType==='liveroom'" v-for="(item, index) in temporaryUpload"
				 :key="item.path">
					<image :src="item.path">
					</image>
					<view class="mask">
						<text class="progress" v-if="!uploadErrStatus[index]||uploadErrStatus[index]==false">
							<text class="num">{{progressAll[index]}}</text>%
						</text>
						<text class="err" v-if="uploadErrStatus[index] === true">{{errTips[index]}}</text>
					</view>
				</view>
				<view class="choose_img" v-if="houseStatus==-1|| houseStatus == 2" @tap.stop="chooseImg('liveroom')">
					<text class="iconfont icon-jia"></text>
				</view>
			</view>
		</view>
		<view class="bedroom-box">
			<view class="top-bedroom">
				<text style="font-weight: 700;">卫生间</text>
				<view class="example">
					范例
					<text class="iconfont">&#xe65e;</text>
				</view>
			</view>
			<view class="hint-bedroom">
				<text style="color: #f66;margin-right: 10upx;">*必须上传</text>卫生间照片。请确保
				<text class="hint-bedroom-color">马桶卫浴、地面细节完整。</text>
			</view>
			<view class="image_wrap">
				<view class="img_item" v-if="pics.length>0 && item.type === 'toilet'" v-for="(item,index) in pics" :key="index"
				 @tap.stop="previewPic(item)">
					<image :src="host+item.val">
					</image>
					<view class="del_img" v-if="houseStatus==-1|| houseStatus == 2" @tap.stop="del_img(index)">
						<text class="iconfont icon-duomeitiicon-"></text>
					</view>
				</view>

				<!-- 临时缓存地址 -->
				<view class="img_item2" v-if="temporaryUpload.length>0 && isUploading&& curUploadType==='toilet'" v-for="(item, index) in temporaryUpload"
				 :key="item.path">
					<image :src="item.path">
					</image>
					<view class="mask">
						<text class="progress" v-if="!uploadErrStatus[index]||uploadErrStatus[index]==false">
							<text class="num">{{progressAll[index]}}</text>%
						</text>
						<text class="err" v-if="uploadErrStatus[index] === true">{{errTips[index]}}</text>
					</view>
				</view>
				<view class="choose_img" v-if="houseStatus==-1|| houseStatus == 2" @tap.stop="chooseImg('toilet')">
					<text class="iconfont icon-jia"></text>
				</view>
			</view>
		</view>
		<view class="bedroom-box">
			<view class="top-bedroom">
				<text style="font-weight: 700;">厨房</text>
				<view class="example">
					范例
					<text class="iconfont">&#xe65e;</text>
				</view>
			</view>
			<view class="hint-bedroom">
				建议上传。
			</view>
			<view class="image_wrap">
				<view class="img_item" v-if="pics.length>0 && item.type === 'kitchen'" v-for="(item,index) in pics" :key="index"
				 @tap.stop="previewPic(item)">
					<image :src="host+item.val">
					</image>
					<view class="del_img" v-if="houseStatus==-1|| houseStatus == 2" @tap.stop="del_img(index)">
						<text class="iconfont icon-duomeitiicon-"></text>
					</view>
				</view>

				<!-- 临时缓存地址 -->
				<view class="img_item2" v-if="temporaryUpload.length>0 && isUploading&& curUploadType==='kitchen'" v-for="(item, index) in temporaryUpload"
				 :key="item.path">
					<image :src="item.path">
					</image>
					<view class="mask">
						<text class="progress" v-if="!uploadErrStatus[index]||uploadErrStatus[index]==false">
							<text class="num">{{progressAll[index]}}</text>%
						</text>
						<text class="err" v-if="uploadErrStatus[index] === true">{{errTips[index]}}</text>
					</view>
				</view>
				<view class="choose_img" v-if="houseStatus==-1|| houseStatus == 2" @tap.stop="chooseImg('kitchen')">
					<text class="iconfont icon-jia"></text>
				</view>
			</view>
		</view>
		<view class="bedroom-box">
			<view class="top-bedroom">
				<text style="font-weight: 700;">其他</text>
				<view class="example">
					范例
					<text class="iconfont">&#xe65e;</text>
				</view>
			</view>
			<view class="hint-bedroom">
				建议上传。可以是其他室内空间、物件、小区周边环境等。更多的照片往往能吸引更多的房客。
			</view>
			<view class="image_wrap">
				<view class="img_item" v-if="pics.length>0 && item.type === 'other'" v-for="(item,index) in pics" :key="index"
				 @tap.stop="previewPic(item)">
					<image :src="host+item.val">
					</image>
					<view class="del_img" v-if="houseStatus==-1|| houseStatus == 2" @tap.stop="del_img(index)">
						<text class="iconfont icon-duomeitiicon-"></text>
					</view>
				</view>

				<!-- 临时缓存地址 -->
				<view class="img_item2" v-if="temporaryUpload.length>0 && isUploading&& curUploadType==='other'" v-for="(item, index) in temporaryUpload"
				 :key="item.path">
					<image :src="item.path">
					</image>
					<view class="mask">
						<text class="progress" v-if="!uploadErrStatus[index]||uploadErrStatus[index]==false">
							<text class="num">{{progressAll[index]}}</text>%
						</text>
						<text class="err" v-if="uploadErrStatus[index] === true">{{errTips[index]}}</text>
					</view>
				</view>
				<view class="choose_img" v-if="houseStatus==-1|| houseStatus == 2" @tap.stop="chooseImg('other')">
					<text class="iconfont icon-jia"></text>
				</view>
			</view>
		</view>
		<view class="main-pics-model" v-if="setMainPicShow">
			<scroll-view class="hengPics-wrap" scroll-y>
				<view class="title">请选择一张照片作为首图</view>
				<view class="hengPics-list">
					<view class="hengPics-item" v-for="(item,index) in hengPics" :key="index" v-if="item.is_transverse === 1"
					 @tap.stop="checkMainPic(index)">
						<image :src="host+item.val"></image>
						<view class="check-on" v-if="curCheckMain === index"><text class="iconfont icon-gou"></text></view>
					</view>
				</view>
				<button class="my-btn-block set-btn" :class="{'dis_btn':curCheckMain===''}" @tap.stop="setMainPic(curCheckMain)">设为首图</button>
				<text class="close-btn iconfont icon-quxiao" @tap.stop="MainPicModelHide()"></text>
			</scroll-view>
		</view>
	</scroll-view>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import {
		request
	} from '../../../common/request.js'
	import helper from '../../../common/helper.js'
	import {
		shortHttp
	} from '../../../common/requestUrl.json'
	export default {
		data() {
			return {
				host: shortHttp,
				house_id: '', //房源id
				pics: [], // 所有图片的集合
				bedRoomImages: [], //卧室
				liveRoomImages: [], //客厅
				toiletImages: [], //卫生间
				kitchenImages: [], //厨房
				otherImages: [], //其他
				// 图片临时存储
				temporaryUpload: [],
				isUploading: false, // 是否正在上传
				// 当前上传图片的类型
				curUploadType: '',
				// 正在上传图片进度条管理
				progressAll: [],
				// 正在上传图片错误状态
				uploadErrStatus: [],
				// 正在上传图片错误提示
				errTips: [],
				// 正在上传图片 是否成功的状态
				upLoadSuccessStatus: [],
				// 上传成功后的定时器
				successTimer: null,
				// 当前上传图片的总数
				uploadTotal: 0,
				// 当前上传了多少张图片
				curUploadNum: 0,
				// 是否当前所有图片都已上传
				uploadIsComplete: false,
				// 暂存已上传成功的图片
				uploadSuccessPic: [],
				// 是否正在删除图片
				isDeling: false,
				// 是否正在设置主图
				isSetMaining: false,
				houseStatus: '', // 房屋状态
				mainPic: '', // 主图
				setMainPicList: [], //选择主图的列表
				curCheckMain: '', // 当前选择的主图
				setMainPicShow: false,
				hengPics: [], // 横图列表
			}
		},
		onLoad() {
			this.getCurData();
		},
		onShow() {},
		onBackPress() {
			if (this.setMainPicShow) {
				this.MainPicModelHide();
				return true;
			} else if (this.isUploading) {
				uni.showModal({
					title: '提示',
					content: '图片上传中,禁止操作',
					showCancel:false,
					confirmText:'知道了',
					success: function(res) {
					}
				});
				return true;
			}
		},
		computed: {
			...mapState(['releaseObj']),
			// 获取不同类型照片列表
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus']),
			// 显示设置主图弹窗
			MainPicModelShow() {
				if (this.isUploading) {
					helper.layer('图片正在上传中..');
					return;
				} else if (this.isDeling || this.isSetMaining) {
					return;
				}
				const _this = this;
				let _flag = false;
				_this.hengPics.forEach((item) => {
					if (item.is_transverse === 1) {
						_flag = true;
					}
				})
				if (_flag) {
					this.setMainPicShow = true;
				} else {

				}
			},
			// 设置主图模态框隐藏
			MainPicModelHide() {
				this.setMainPicShow = false;
			},
			// 选择主图
			checkMainPic(i) {
				const _this = this;
				_this.curCheckMain = i;
			},


			// 选择照片
			// 现在上传图片为单线程 一次只能上传一种类型的图片  并且只有等待这次图片上传能完成才能进行第二次
			chooseImg(type) {
				if (this.isUploading) {
					helper.layer('图片正在上传中..');
					return;
				} else if (this.isDeling || this.isSetMaining) {
					return;
				}
				const _this = this;
				_this.init();
				uni.chooseImage({
					count: 9, //默认9
					sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						let _imgs = res.tempFiles;
						_this.uploadTotal = _imgs.length;
						_this.isUploading = true;
						_this.curUploadType = type;
						_this.temporaryUpload = _imgs;
						_imgs.forEach((item, i) => {
							let _img = item.path;
							_this.progressAll[i] = 0;
							_this.uploadErrStatus[i] = false;
							_this.upLoadSuccessStatus[i] = false;
							_this.uploadImg(_img, i, type);
						})

					}
				});
			},
			// 图片上传
			uploadImg(img, index, type) {
				const _this = this;
				const token = uni.getStorageSync('dz_token');
				const uploadTask = uni.uploadFile({
					url: 'http://dz.abontest.com/wap/api/upload.php', //仅为示例，非真实的接口地址
					filePath: img,
					name: 'file',
					header: {
						"Authorization": 'Bearer ' + token,
					},
					success: (uploadFileRes) => {
						const _data = JSON.parse(uploadFileRes.data);
						if (_data.status === 'success') {
							let result = Object.assign(_data.content, {
								index: index
							});
							_this.uploadSuccessPic.push(result);
						} else {
							_this.$set(_this.errTips, index, _data.errorMsg);
							_this.$set(_this.uploadErrStatus, index, true);
						}

					},
					fail: (err) => {
						_this.$set(_this.errTips, index, '上传发生异常');
						_this.$set(_this.uploadErrStatus, index, true);
						if (_this.curUploadNum === _this.uploadTotal) {
							_this.isUploading = false;
						}

					},
					complete: (res) => {
						_this.$set(_this.upLoadSuccessStatus, index, true);
						_this.$set(_this, 'curUploadNum', _this.curUploadNum + 1);
						// 当所有图片都上传完了 
						if (_this.curUploadNum === _this.uploadTotal) {
							let success_pics = _this.picsSort(type); // 返回已排好序的 图片
							_this.savePics(success_pics)

						}

					}
				});
				uploadTask.onProgressUpdate((res) => {
					_this.$set(_this.progressAll, index, res.progress)
				});
			},
			// 设置为主图
			setMainPic(i) {
				const _this = this;
				const pic = _this.hengPics[i];
				const id = _this.house_id;
				if (_this.isDeling || _this.isSetMaining) {
					return;
				} else if (_this.isUploading) {
					helper.layer('图片上传中,不能设置...');
					return;
				} else if (pic.is_main === 1) {
					_this.isSetMaining = true;
					return;
				} else {
					if (pic.is_transverse !== 1) {
						helper.layer('非横图,不能设置为首图');
					} else {
						let pics = JSON.parse(JSON.stringify(_this.pics));
						pics.map((item, index, slef) => {
							slef[index]['is_main'] = 0
						});
						pics[i].is_main = 1;
						_this.isSetMaining = true;
						let param = {
							house_id: id,
							pictures: JSON.stringify(pics),
						}
						_this.MainPicModelHide();
						request({
							url: '/wap/api/fangdong.php?action=improveHouse',
							method: 'POST',
							data: param,
							success: (res) => {
								if (res.data.status === 'success') {
									let _data = res.data.content;
									_this.editReleaseInfo(_data);
									_this.editReleaseInfoStatus(true);
								} else {
									helper.layer('设置失败!')
								}
							},
							complete: () => {
								_this.isSetMaining = false;
								_this.getCurData();
							}
						})
					}
				}
			},
			//图片预览
			previewPic(pic) {
				const _this = this;

				uni.previewImage({
					current: _this.host + pic.path,
					urls: [_this.host + pic.path]
				})
			},
			// 刪除图片 
			del_img(index) {
				const _this = this;
				const id = _this.house_id;
				if (_this.isDeling || _this.isSetMaining) {
					return;
				} else if (_this.isUploading) {
					helper.layer('图片上传中,不能进行删除操作...');
					return;
				} else {
					uni.showModal({
						title: '',
						content: '是否删除这张图片',
						confirmText: '删除',
						success: function(res) {
							if (res.confirm) {
								// 确定删除
								_this.isDeling = true;
								let curPics = _this.pics.slice();
								curPics.splice(index, 1);
								let param = {
									house_id: id,
									pictures: JSON.stringify(curPics),
								}
								uni.showLoading({
									title: '删除中...',
									mask: true
								})
								request({
									url: '/wap/api/fangdong.php?action=improveHouse',
									method: 'POST',
									data: param,
									success: (res) => {
										if (res.data.status === 'success') {
											let _data = res.data.content;
											_this.editReleaseInfo(_data);
											_this.editReleaseInfoStatus(true);
											_this.getCurData();
										} else {
											helper.layer('删除图片失败')
										}
									},
									complete: () => {
										_this.isDeling = false;
										uni.hideLoading();
									}
								})

							} else if (res.cancel) {}
						}
					});


				}
			},
			// 保存图片到该房源
			savePics(_pics) {
				const _this = this;
				if (!_pics || _pics.length === 0) {
					_this.successTimer = setTimeout(() => {
						_this.isUploading = false;
						clearTimeout(_this.successTimer);
						_this.successTimer = null;
						return;
					}, 1000);
				}
				let old_pics = _this.pics.slice(0);
				const id = _this.house_id;
				let save_pics = old_pics.concat(_pics);
				let param = {
					house_id: id,
					pictures: JSON.stringify(save_pics),
				}
				request({
					url: '/wap/api/fangdong.php?action=improveHouse',
					method: 'POST',
					data: param,
					success: (res) => {
						if (res.data.status === 'success') {
							let _data = res.data.content;
							_this.editReleaseInfo(_data);
							_this.editReleaseInfoStatus(true);
						} else {
							helper.layer('照片上传失败')
						}
					},
					complete: () => {
						_this.successTimer = setTimeout(() => {
							_this.isUploading = false;
							_this.getCurData();
							clearTimeout(_this.successTimer);
							_this.successTimer = null;
						}, 1000);
					}
				})
			},
			// 判断是否有主图
			hasMainPics() {
				const _this = this;
				const old_pics = _this.pics.slice(0);
				if (old_pics.length > 0) {
					for (let i = 0; i < old_pics.length; i++) {
						if (old_pics[i].is_main == 1) {
							return true
						}
					}
				}
				return false;
			},
			// 图片排序
			picsSort(type) {
				const _this = this;
				let _arr = _this.uploadSuccessPic;
				// 根据当前索引正序排列
				_arr.sort(function(a, b) {
					return a.index - b.index;
				})
				// 删除每一项index属性
				_arr.forEach((item) => {
					if (item.hasOwnProperty('index')) {
						item['is_main'] = 0;
						item['type'] = type;
						item['val'] = item.path;
						delete item.index;

					}
				})
				return _arr;
			},
			// 初始化
			init() {
				const _this = this;
				_this.progressAll = [];
				_this.temporaryUpload = [];
				_this.uploadErrStatus = [];
				_this.errTips = [];
				_this.upLoadSuccessStatus = [];
				_this.uploadIsComplete = false;
				_this.uploadTotal = 0;
				_this.curUploadNum = 0;
				_this.uploadSuccessPic = [];
				_this.success_pics = []
			},
			// 获取当前页面的数据
			getCurData() {
				const _this = this;
				const _releaseObj = this.releaseObj;
				this.house_id = _releaseObj.id;
				this.houseStatus = _releaseObj.status;
				const pics = _releaseObj.pics ? _releaseObj.pics : [];
				let _mainPic = '';
				this.pics = pics;
				pics.forEach((item, index) => {
					if (item.is_main === 1) {
						_mainPic = item.path;
						_this.curCheckMain = index;
					}
				})
				this.mainPic = _mainPic;
				this.hengPics = JSON.parse(JSON.stringify(pics));
				console.log(this.hengPics)
			}
			// 


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

	.dis-scroll {
		overflow: hidden;
	}

	.contanier {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;
		font-size: 14px;
		height: 100%;
		overflow: hidden;

		.title {
			text-align: center;
			padding: 30upx 0;
			box-sizing: border-box;
			font-size: 16px;
			font-weight: bold;
		}

		.demand-box {
			width: 520upx;
			padding: 30upx;
			box-sizing: border-box;
			background-color: #f1f1f1;
			border-radius: 10upx;
			margin: 0 auto;
		}

		.bedroom-box {
			margin-top: 40upx;
			border-bottom: 1px solid #efefef;

			.top-bedroom {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 10upx;

				.example {
					color: #acacac;
				}
			}

			.hint-bedroom {
				font-size: 12px;
				color: #acacac;

				.hint-bedroom-color {
					color: #000;
					font-weight: 700;
				}
			}

			.image_wrap {
				box-sizing: border-box;
				width: 100%;
				padding: 30upx 0;
				min-height: 260upx;
				display: inline-flex;
				flex-wrap: wrap;

				.img_item,
				.img_item2 {
					position: relative;
					box-sizing: border-box;
					display: inline-flex;
					height: 190upx;
					width: 190upx;
					margin-bottom: 20upx;
					margin-right: 16upx;

					image {
						height: 100%;
						width: 100%;
						border-radius: 8upx;
					}
				}

				.img_item {
					.del_img {
						position: absolute;
						top: 0;
						right: 0;
						color: #ffffff;
						width: 36upx;
						height: 36upx;
						display: flex;
						justify-content: center;
						align-items: center;
						background: #f66;
						border-radius: 8upx;

						.iconfont {
							font-size: 28upx;
						}
					}

					.set_main {
						position: absolute;
						font-size: 24upx;
						left: 0;
						right: 0;
						bottom: 0;
						color: #fff;
						text-align: center;
						padding: 8upx 0;
						background: rgba(0, 0, 0, 0.5);
						border-radius: 0 0 8upx 8upx;
					}
				}

				.img_item2 {
					.mask {
						position: absolute;
						box-sizing: border-box;
						padding: 20upx;
						height: 100%;
						width: 100%;
						border-radius: 8upx;
						top: 0;
						left: 0;
						background: rgba(114, 114, 114, 0.5);
						display: flex;
						justify-content: center;
						align-items: center;

						.progress {
							font-weight: 800;
							font-size: 24upx;
							color: #fff;
							text-align: center;
							word-break: break-all;

							.num {
								display: inline-block;
								width: 56upx;
								text-align: right;
							}
						}

						.err {
							font-size: 24upx;
							font-weight: 800;
							color: #fe7c4e;
							text-align: center;
							word-break: break-all;
						}
					}
				}

				.choose_img {
					box-sizing: border-box;
					display: inline-flex;
					justify-content: center;
					align-items: center;
					height: 200upx;
					width: 200upx;
					border: 1px solid #eaeaea;
					border-radius: 8upx;
					margin-bottom: 20upx;
					margin-right: 20upx;

					.iconfont {
						font-size: 80upx;
						color: #cccccc;
					}
				}
			}
		}

		.btn {
			width: 100%;
			height: 90upx;
			background-color: #ea516b;
			color: #fff;
			border-radius: 10upx;
			text-align: center;
			line-height: 90upx;
			margin-top: 40upx;

			&:active {
				opacity: 0.5;
			}
		}

		.main-pics-model {
			position: fixed;
			z-index: 1000;
			box-sizing: border-box;
			padding: 64px 30upx 64upx;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.3);

			.hengPics-wrap {
				position: relative;
				box-sizing: border-box;
				padding: 20upx 20upx 30upx;
				height: 100%;
				width: 100%;
				background: #fff;
				border-radius: 8upx;
				box-shadow: 0upx 6upx 10upx rgba(0, 0, 0, 0.3);

				.close-btn {
					position: absolute;
					font-size: 40upx;
					color: #a7a7a7;
					right: 6upx;
					top: 6upx;
					transition: all 0.2s ease;

					&:active {
						color: #F05B72;
					}
				}

				.hengPics-list {
					position: relative;
					box-sizing: border-box;
					width: 100%;

					.hengPics-item {
						position: relative;
						box-sizing: border-box;
						display: inline-flex;
						height: 190upx;
						width: 190upx;
						margin-bottom: 20upx;
						margin-right: 16upx;

						image {
							height: 100%;
							width: 100%;
							border-radius: 8upx;
						}

						.check-on {
							position: absolute;
							left: 0;
							right: 0;
							bottom: 0;
							color: #fff;
							text-align: center;
							background: rgba(240, 91, 114, 0.8);
							border-radius: 0 0 8upx 8upx;

							.iconfont {
								font-size: 40upx;
							}
						}
					}
				}

				.set-btn {
					position: absolute;
					bottom: 0;
					left: 0;
				}
			}
		}
	}
</style>
