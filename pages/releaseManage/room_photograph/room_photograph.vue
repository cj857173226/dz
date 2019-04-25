<template>
	<view class="contanier">
		<view class="title">上传房源照片要求</view>
		<view class="demand-box">
			<text>1.无明显修改</text>
			<text>2.无拉伸变形</text>
			<text>3.无水印</text>
			<text>4.不能出现联系方式或品牌宣传</text>
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
				填写户型和床铺信息后将有更多要求处理。请确保
				<text class="hint-bedroom-color">卧室、床铺、床单、枕头展示齐全</text>
			</view>
			<view class="image_wrap">

				<view class="img_item" v-if="bedRoomImages.length>0" v-for="(item, index) in bedRoomImages" :key="index">
					<image src="/static/images/meitu1.jpg">
					</image>
					<view class="del_img">
						<text class="iconfont icon-duomeitiicon-"></text>
					</view>
				</view>
				<view class="choose_img" @tap.stop="chooseImg('bedroom')">
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
				<view class="img_item" v-if="liveRoomImages.length>0" v-for="(item, index) in liveRoomImages" :key="index">
					<image src="/static/images/meitu1.jpg">
					</image>
				</view>
				<view class="choose_img">
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
				必须上传卫生间照片。请确保
				<text class="hint-bedroom-color">马桶卫浴、地面细节完整。</text>
			</view>
			<view class="image_wrap">
				<view class="img_item" v-if="toiletImages.length>0" v-for="(item, index) in toiletImages" :key="index">
					<image src="/static/images/meitu1.jpg">
					</image>
				</view>
				<view class="choose_img">
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
				<view class="img_item" v-if="kitchenImages.length>0" v-for="(item, index) in kitchenImages" :key="index">
					<image src="/static/images/meitu1.jpg">
					</image>
				</view>
				<view class="choose_img">
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
				<view class="img_item" v-if="otherImages.length>0" v-for="(item, index) in otherImages" :key="index">
					<image src="/static/images/meitu1.jpg">
					</image>
				</view>
				<view class="choose_img">
					<text class="iconfont icon-jia"></text>
				</view>
			</view>
		</view>
		<view class="btn">保存</view>
	</view>
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
	export default {
		data() {
			return {
				house_id: '', //房源id
				pics: {}, // 所有图片的集合
			}
		},
		onLoad() {
			this.getCurData();
		},
		onShow() {

		},
		computed: {
			...mapState(['releaseObj']),
			// 获取不同类型照片列表
			// type---> bedroom 卧室   liveroom客厅  toilet卫生间  kitchen厨房  other 其他

			// 卧室照片
			bedRoomImages: {
				get() {
					let _pics = [];
					if (this.pics.bedroom && this.pics.bedroom.length > 0) {
						_pics = this.pics.bedroom;
					}
					return _pics;
				}
			},
			// 客厅照片
			liveRoomImages: {
				get() {
					let _pics = [];
					if (this.pics.liveroom && this.pics.liveroom.length > 0) {
						_pics = this.pics.liveroom;
					}
					return _pics;
				}
			},
			// 卫生间
			toiletImages: {
				get() {
					let _pics = [];
					if (this.pics.toilet && this.pics.toilet.length > 0) {
						_pics = this.pics.toilet;
					}
					return _pics;
				}
			},
			// 厨房
			kitchenImages: {
				get() {
					let _pics = [];
					if (this.pics.kitchen && this.pics.kitchen.length > 0) {
						_pics = this.pics.kitchen;
					}
					return _pics;
				}
			},
			// 其他
			otherImages: {
				get() {
					let _pics = [];
					if (this.pics.other && this.pics.other.length > 0) {
						_pics = this.pics.other;
					}
					return _pics;
				}
			},
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus']),
			// 选择照片
			chooseImg(type) {
				const _this =this;
				uni.chooseImage({
					count: 9, //默认9
					sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: function(res) {
						console.log(res);
						let _imgs =  res.tempFiles[0];
						console.log(_this.getImgInfo(_imgs))
					}
				});
			},
			getImgInfo(img){
				let _obj = {};
				uni.getImageInfo({
            src: img.path,
            success: function (image) {
                _obj = {
									width:image.width,
									height:image.height,
									path:image.path?image.path:'',
									size:img.size / 1024/ 1024,
								};
            }
        });
				return _obj
			},
			// 获取当前页面的数据
			getCurData() {
				const _releaseObj = this.releaseObj;
				this.house_id = _releaseObj.id;
				console.log(_releaseObj.pics)
				this.pics = _releaseObj.pics ? JSON.parse(_releaseObj.pics) : {};
			}
		}
	};
</script>
<style lang="scss" scoped>
	.contanier {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;
		font-size: 14px;

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

				.img_item {
					position: relative;
					box-sizing: border-box;
					display: inline-flex;
					height: 200upx;
					width: 200upx;
					margin-bottom: 20upx;
					margin-right: 20upx;

					image {
						height: 100%;
						width: 100%;
						border-radius: 8upx;
					}

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
						border-radius: 0 8upx 0 0;

						.iconfont {
							font-size: 28upx;
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
	}
</style>
