<template>
	<view class="content">
		<view class="container">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
						 indicator-color="#EBEDF3" indicator-active-color="#E9516A">
							<swiper-item @tap="onDetails(item.luid)" v-for="(item,index) in contentArray" :key="index">
								<image class="banner" :src="shortHttp+item.mainimageurl"></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>
		<view class="containers">
			<view class="box">
				<view class="location">
					<view class="list-box">
						<i class="iconfont icon-city">&#xec70;</i>
						<text class="city">{{addressName}}</text>
					</view>
					<view class="list-box" @tap="tapOrientation">
						<i class="iconfont icon-place">&#xe793;</i>
						<text class="my-place">{{city===""?'民宿':'我的附近'}}</text>
					</view>
				</view>
				<view class="calendar">
					<calendar ref="calen" @change="change"></calendar>
				</view>
				<view class="search" @tap="tapSelect">
					<view class="list-box">
						<i class="iconfont icon-city">&#xe611;</i>
						<text class="city">{{city===""?searchCity:city}}</text>
					</view>
					<view>
						<i class="iconfont right">&#xe65e;</i>
					</view>
				</view>
				<button @tap="clickSelect" class="btn" type="primary">开始搜索</button>
			</view>
		</view>
		<view class="circum-box">
			<view class="title-box">
				<view class=" line-left"></view>
				<text class="title-font">周边推荐</text>
				<view class="line-right"></view>
			</view>
			<view class="subtitle">体验不一样的旅行方式</view>
			<view class="recommend-box" v-for="(item,i) in ambitusArray" :key="i">
				<view class="list-box">
					<image @tap="clickDetails(item.luId)" class="list-img" :src="shortHttp+item.landlordheadimgurl"></image>
					<!-- 房户信息 -->
					<view class="username-box">
						<view class="username-img-box" @tap="clickPhoto(item.landlordId)">
							<image class="username-img" :src="shortHttp+item.luMainImageUrl"></image>
						</view>
						<view class="username-title-box">
							<view class="username-house-title">{{item.luTitle}}</view>
							<view class="comment">
								<view class="lightning-box">
									<i class="iconfont  lightning-icon">&#xe6b9;</i>
									<text>速顶</text>
								</view>
								<view class="comment-on-box">
									<i class="iconfont comment-on-icon">&#xe665;</i>
									<text>{{item.luComments}}条点评</text>
								</view>
							</view>
						</view>
					</view>
					<view class="price">
						&yen;<text class="specific-price">{{item.showPrice.price}}</text>起/晚
					</view>
					<view class="icon-box" @tap="onCollect(item.luId,i)">
						<i class="iconfont" :class="item.isFavorite?'love-icon-red':'love-icon'">&#xe63e;</i>
					</view>
				</view>

			</view>
		</view>
		<!-- <view>{{addressNames}}</view>
		<textarea style="width:100%;height:1000px;" :value="addressName" :maxlength="number" /> -->
		<!-- <view style="width:100%" v-for="(item,i) in addressName" :key="i">{{JSON.stringify(item) }}</view> -->
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirm" @onCancel="onCancel()" :pickerValueArray="pickerValueArray"></mpvue-picker>
	</view>
</template>

<script>
	import mpvuePicker from '../../components/index/mpvue-picker/mpvuePicker';
	import calendar from '../../components/index/date-picker/date-picker' //引入日期插件件
	import {
		request
	} from '../../common/request.js' // 封装的带有token的请求方法
	import helper from '../../common/helper.js'
	import {
		shortHttp,
		banner,
		ambitus
	} from "../../common/requestUrl.json"; // 接口文件
	import amap from '../../common/amap-wx.js' // 高德小程序sdk
	export default {
		components: {
			//注册组件
			calendar,
			mpvuePicker,
		},
		data() {
			return {
				number:-1,
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500,
				shortHttp, //域名
				addressName: '',  
				addressNames:'',
				weather: {  
						hasData: false,  
						data: []  
				} ,
				contentArray: null, //轮播图
				ambitusArray: null, //周边推荐
				i: null,
				luId: "", //房源id
				city: "", // gps获取当前设备城市名
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				mode: 'selector',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray: [],
				searchCity: '位置/地名/房源',
				startTime: '', // 开始时间
				endTime: '', // 结束时间
				collectIndex:null, // 收藏房源的索引
				amapPlugin: null,  
        key: 'ff60afce471bf105359e78dfc05feed4' // 高德小程序key
			};
		},
		onLoad() {
			this.amapPlugin = new amap.AMapWX({  
        key: this.key  
      });
			this.collectReqList(); // 收藏列表
			//判断是否登录
			helper.isLogin();
			this.cityGps(); //调用获取城市名
		},
		onReady() {
			this.bannerFn();
			this.recommended();
		},
		onShow(){
			this.collectReqList(); // 收藏列表
		},
		methods: {
			onDetails(id) {
				console.log('id:', id);
				uni.navigateTo({
					url: `/pages/particulars/particulars?id=${id}`
				})
			},
			// 轮播图请求方法
			bannerFn: function() {
				uni.showLoading({
					title: '加载中'
				})
				const _that = this;
				uni.request({
					url: shortHttp + banner,
					method: "GET",
					success: res => {
						if (res.data.status === 'success') {
							console.log("轮播图",res)
							uni.hideLoading()
							let array = res.data.content
							_that.contentArray = array;
						} else {
							uni.showToast({
								title: res.data.errorMsg,
								icon: 'none'
							})
						}
					},
					fail: err => {
						uni.showToast({
							title: err,
							icon: 'none'
						})
					}
				});
			},
			// 搜索城市
			tapSelect: function() {
				console.warn("城市", this.city)
				uni.navigateTo({
					url: "/pages/index/search_city"
				})

			},
			change({choiceDate,dayCount}) {
				//1.choiceDate 时间区间（开始时间和结束时间）
				//2.dayCount 共多少晚
				console.log("入住从 " + choiceDate[0].re + "  到 " + choiceDate[1].re + "  共 " + dayCount + " 晚");
				this.startTime = choiceDate[0].re;
				this.endTime = choiceDate[1].re;
			},
			// 点击按钮跳转到搜索页面
			clickSelect: function() {
				// let startTime = this.startTime;
				// let endTime = this.endTime;
				let ressCity = this.addressName;
				let site = this.city;
				console.warn(ressCity);
				
				uni.navigateTo({
					url: `/pages/selecteds/selecteds?city=${ressCity}&site=${site}`
				})
			},
			cityGps() {
				const _this = this;
				_this.amapPlugin.getRegeo({
					success: (data) => {  
						// console.warn('获取位置',JSON.stringify(data[0].name))
						_this.addressName = data[0].regeocodeData.addressComponent.city
					},
					fail:function(info){
						console.log(info);
					}
				});
			},
			// 点击获取当前位置
			tapOrientation(){
				const _this = this;
				_this.amapPlugin.getRegeo({
					success: (data) => {  
						_this.city = data[0].name
						// _this.addressName = data[0].regeocodeData.addressComponent.city
					},
					fail:function(info){
						console.log(info);
					}
				}); 
			},
			// 周边推荐
			recommended() {
				uni.showLoading({
					title: '加载中'
				})
				const _that = this;
				request({
					url: "/wap/api/search.php?action=index",
					data: {
						cityName: "广州"
					}, //*：有问题，无法拿到当前城市
					success: function(res) {
						// console.log(res);
						uni.hideLoading();
						_that.ambitusArray = res.data.content.item;
					}
				});
			},
			// 点击图片跳转页面查看房间详情
			clickDetails(id) {
				uni.navigateTo({
					url: `/pages/particulars/particulars?id=${id}`
				})
			},
			// 点击头像携带房东唯一id跳转到房东介绍
			clickPhoto(id) {
				console.log(id);
				uni.navigateTo({
					url: `/pages/landlord_introduced/landlord_introduced?id=${id}`
				})
			},
			// 收藏列表请求
			collectReqList(){
				const _this = this;
				let pickerValueArray = []
				request({
					url: '/wap/api/my.php?action=favoriteClass',
					success: function(res) {
						if (res.data.status === 'success') {
							let array = res.data.content.item
								for (let i = 0; i < array.length; i++) {
									pickerValueArray.push({
										label: array[i].cname,
										value: array[i].cid
									})
									_this.pickerValueArray = pickerValueArray
								}
							}
						}
				})
			},
			// 收藏
			onCollect(id, index) {
				// 判断pickerValueArray收藏列表的数组是否有数据
				if (this.pickerValueArray.length>0) {
					// 请求分组列表
					const _this = this;
					_this.collectIndex = index;
					_this.i = _this.ambitusArray[index]
					_this.luId = _this.ambitusArray[index].luId
					let coll = _this.ambitusArray[index].isFavorite
						console.log('索引',coll);
					if (coll===false) {
						_this.$refs.mpvuePicker.show() // 点击弹出mpvuePickerpicker
					} else {
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
									_this.$set(_this.ambitusArray[index],'isFavorite',false)
								}
							}
						})
					}
				} else {
						uni.showToast({
							title:'请先添加收藏分组',
							icon:'none'
						})
				}
			},
			// picker 组件点击取消时回调
			onCancel(e) {
				this.i.isFavorite = false
			},
			// picker 组件点击确定时回调，返回选中的 label, value 和数组索引 index 的值
			onConfirm(e) {
				const _that = this;
				let index = _that.collectIndex; // 收藏索引
				let value = e.value;
				let collectId;
				for (let index = 0; index < value.length; index++) {
					collectId = value[index];
				}
				request({
					url: '/wap/api/my.php?action=modifyFavorite',
					data: {
						luId: _that.luId, // 房源id
						classId: collectId, // 收藏的文件夹id
						favAction: "add"
					},
					success: res => {
						console.log("收藏：", res);
						if (res.data.status == "success") {
							uni.showToast({
								title: "收藏成功",
								duration: 2000
							})
							_that.$set(_that.ambitusArray[index], 'isFavorite', true) //更改
						} else {
							uni.showToast({
								title: "收藏失败",
								duration: 2000
							})
						}
					}
				})
			}
		},
		// 手机原生返回监控函数
		onBackPress() {
			
			if (this.$refs.mpvuePicker.showPicker) {
				this.$refs.mpvuePicker.pickerCancel();
				return true;
			}
		},
		onPullDownRefresh() { // 监听用户下拉事件
			console.log('refresh');
			this.bannerFn();
			this.recommended();
			setTimeout(()=> {
				uni.stopPullDownRefresh();  //停止下拉刷新动画
			},2000)
		},
	};
</script>
<style>
page {
  min-height: 100%;
}
</style>

<style lang="scss" scoped>
.circum-box {
  width: 100%;
  text-align: center;
  padding: 42upx 30upx 30upx 30upx;
  box-sizing: border-box;
  font-size: 28upx;

  .title-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .line-left {
      width: 80upx;
      height: 2upx;
      border-bottom: 1px solid #d7d7d7;
      margin-right: 40upx;
    }

    .line-right {
      width: 80upx;
      height: 2upx;
      border-bottom: 1px solid #d7d7d7;
      margin-left: 40upx;
    }

    .title-font {
      font-weight: bold;
      font-size: 20px;
    }
  }

  .subtitle {
    font-size: 12px;
    color: #9e9e9e;
    margin: 22upx;
  }

  .recommend-box {
    width: 100%;
    margin-top: 40upx;

    .list-box {
      width: 100%;
      height: 634upx;
      display: flex;
      flex-direction: column;
      position: relative;

      .list-img {
        width: 100%;
        height: 460upx;
      }

      .username-box {
        width: 100%;
        height: 174upx;
        padding: 0 30upx 0 30upx;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        .username-img-box {
          width: 104upx;
          height: 104upx;
          border-radius: 50%;

          .username-img {
            width: 104upx;
            height: 104upx;
            border-radius: 50%;
          }
        }

        .username-title-box {
          margin-left: 34upx;

          .username-house-title {
            font-size: 14px;
            text-align: left;
            font-weight: bold;
          }

          .comment {
            font-size: 14px;
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
        }
      }

      .price {
        width: 200upx;
        height: 60upx;
        line-height: 60upx;
        text-align: center;
        color: #fff;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;
        bottom: 174upx;
        left: 0;

        .specific-price {
          font-size: 18px;
        }
      }

      .icon-box {
        width: 60upx;
        height: 60upx;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
        line-height: 60upx;
        text-align: 60upx;
        position: absolute;
        top: 30upx;
        right: 30upx;

        .love-icon {
          font-size: 30upx;
        }

        .love-icon-red {
          font-size: 30upx;
          color: #f8070e;
        }
      }
    }
  }
}

.content {
  width: 100%;
  background-color: #fff;
  min-height: 100%;
  box-sizing: border-box;

  .container {
    width: 100%;
    height: 500upx;
  }

  .swiper {
    width: 100%;
    height: 500upx;
  }

  .banner {
    width: 100%;
    height: 500upx;
  }

  .containers {
    width: 100%;
    height: 432upx;
    background-color: #ededed;
    box-sizing: border-box;
    padding: 30upx;
  }

  .box {
    width: 100%;
    height: 372upx;
    padding: 0 46upx 0 46upx;
    background-color: #fff;
    box-sizing: border-box;
  }

  .btn {
    width: 360upx;
    height: 80upx;
    font-size: 14px;
    line-height: 80upx;
    background-color: #ef5b72;
  }

  .list-box {
    display: flex;
    align-items: center;
  }

  .location {
    font-size: 28upx;
    height: 90upx;
    border-bottom: 1px solid #dedede;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .icon-city {
    font-size: 20px;
    color: #000;
  }

  .icon-place {
    font-size: 18px;
    color: #9d9d9d;
  }

  .my-place {
    color: #9d9d9d;
    font-size: 28upx;
    margin-left: 20upx;
  }

  .city {
    margin-left: 20upx;
  }

  .calendar {
    height: 90upx;
    border-bottom: 1px solid #dedede;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .search {
    height: 90upx;
    font-size: 28upx;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  uni-button {
    width: 360upx;
    height: 60upx;
    line-height: 60upx;
    font-size: 14px;
    background-color: #ef5b72;
  }

  .button-hover {
    opacity: 0.8;
  }

  .right {
    color: #9d9d9d;
  }
}
</style>
