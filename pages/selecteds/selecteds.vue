
<template>
  <view class="contanier">
    <view class="top">
      <view class="city" @click="clickCity">
        {{city}}
        <text class="iconfont icon-xiala- xiala"></text>
      </view>
      <!-- 搜索 -->
      <view class="select-box">
        <input class="select-input" placeholder="位置/地名/房源" @focus="focusInput" @blur="blurInput" :value="place" />
        <view v-show="isShow" class="sousuo" @tap="clickSearch">搜索</view>
      </view>
    </view>
    <view class="list-box">
      <view @click="onShowDatePicker('range')" class="tiem-data">
        <calendar @change="change"></calendar>
        <text class="iconfont icon-xiasanjiaoxiangxiamianxing"></text>
      </view>
      <view @tap="clickCalendar">
        更多筛选
        <text class="iconfont icon-xiasanjiaoxiangxiamianxing"></text>
      </view>
      <view @click="clickShowPicker">
        {{sortingFilter}}
        <text class="iconfont icon-xiasanjiaoxiangxiamianxing"></text>
      </view>
    </view>
    <view class="housing-show">
      <view class="housing" v-for="(val,index) in datas" :key="index">
        <swiper class="housing-swiper">
          <swiper-item v-for="(item,j) in val.extImages" :key="j">
            <image class="swiper-item" @click="clickDetails(val.luId)" :src="shortHttp+item.val"></image>
          </swiper-item>
        </swiper>
        <view class="price">
          &yen;
          <text class="specific-price">{{val.showPrice.price}}</text>起/晚
        </view>
        <view class="icon-box" @click="clickCollect(val.luId,index)">
          <text class="iconfont" :class="val.isFavorite?'love-icon-red':'love-icon'">&#xe63e;</text>
        </view>
        <view class="bottom-username-box">
          <view class="username-box">
            <image class="username-photos" @click="clickHeadPortrait(val.landlordId)" :src="shortHttp+val.landlordheadimgurl"/>
          </view>
          <view class="lightning-comment">
            <view class="username-comment">
              <view style="width: 556upx;font-size:14px;font-weight:600;color:#000;margin-left:10upx;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{val.luTitle}}</view>
              <view class="lightning-comment-box">
                <view class="lightning">
                  <text class="iconfont icon-lightningbshandian lightning-icon"></text>速订
                </view>
                <view class="comment">
                  <text class="iconfont icon-pinglun1 comment-icon"></text>{{val.commentScore}}条评论
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- <textarea :value='addressName' maxlength="-1" /> -->
    <mpvue-picker :themeColor="themeColor" ref="mpvuePicker" mode="selector" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
    @onConfirm="onConfirm" @="" :pickerValueArray="pickerValueArray"></mpvue-picker>
    <mpvue-picker :themeColor="themeColor" ref="mpPicker" mode="selector" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
    @onConfirm="clickAffirm" @="" :pickerValueArray="pickerArray"></mpvue-picker>
  </view>
</template>
<script>
import calendar from '../../components/selected/date-picker/date-picker' //引入日期插件件
import checkboxGroup from "@/components/selected/checjbox/group/pages/checkbox-group/checkbox-group"; //引入第三方更多选框
import mpvuePicker from '../../components/index/mpvue-picker/mpvuePicker';
import {request} from '../../common/request.js' // 封装的带有token的请求方法
import {shortHttp} from "../../common/requestUrl.json"; // 接口文件
import amap from '../../common/amap-wx.js' // 高德小程序sdk
export default {
  components: {
    checkboxGroup,
    calendar,
    mpvuePicker
  },
  data() {
    return {
      shortHttp,
      showPicker: false,
      type: 'range',
      city:'', // 城市
      place:'', // 位置
      isShow:false, // 是否显示搜索按钮
      inputValue:'',//搜索框的value值
      sortingFilter:'排序筛选',
      pickerValueArray: [
        {
          label: '好评排序',
          value: 1
        },
        {
          label: '价格 高-低',
          value: 2
        },
        {
          label: '价格 低-高',
          value: 3
        },
        {
          label: '距离 近-远',
          value: 4
        }
      ], // 排序弹出框的内容
      pickerArray:[], // 收藏列表的内容
      pickerValueDefault: [0],
      deepLength:1,
      themeColor: '#007AFF',
      datas:[], // 使用地址返回的数据
      index:null, // 点击收藏的索引
      luId:'', // 房源id
      i:'',
      addressName: '',  
      weather: {  
          hasData: false,  
          data: []  
      } ,
      key: 'ff60afce471bf105359e78dfc05feed4' // 高德小程序key
    };
  },
  onLoad(option){
    this.amapPlugin = new amap.AMapWX({  
      key: this.key  
    });
    this.city = option.city;
    this.place = option.site;
    this.siteRequest();
  },
  onShow(){
    this.enshrineList(); // 收藏列表
  },
  methods: {
    // 获取收藏列表
    enshrineList(){
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
              _this.pickerArray = pickerValueArray
            }
          }
        }
      })
    },
    // 当输入框聚焦时显示搜索按钮
    focusInput(){
      this.isShow = true;
    },
    // 输入框失去焦点时把value拿到
    blurInput(e){
      this.inputValue = e.detail.value;
    },
    // 点击搜索按钮隐藏自己，并发起搜索请求
    clickSearch(){
      // console.log(this.inputValue);
      this.isShow = false;
    },
    // 点击跳转页面
    clickCity(){
      uni.navigateTo({
        url:'/pages/index/search_city'
      })
    },
    onShowDatePicker(type){//显示
      this.type = type;
      this.showPicker = true;
      // this.value = this[type];
    },
    // 跳转到筛选页面
    clickCalendar(){
      uni.navigateTo({
        url:'/pages/selecteds/more_screening'
      })
    },
    change({choiceDate, dayCount}){
			//1.choiceDate 时间区间（开始时间和结束时间）
			//2.dayCount 共多少晚
			console.dir(choiceDate)
			console.log("入住从 "+ choiceDate[0].re + "  到 " + choiceDate[1].re + "  共 " + dayCount +" 晚");
			// this.startTime = choiceDate[0].re;
			// this.endTime = choiceDate[1].re;
    },
    // 调用picker组件
    clickShowPicker() {
      console.log('点击');
      this.$refs.mpvuePicker.show();
    },
    // 更多筛选列表确认回调
    onConfirm(e) {
      const _this = this;
      // 判断label的值发起不同的请求
      if (e.label === '好评排序') {
        console.log('好评排序');
      } else if (e.label === '价格 高-低') {
        uni.showLoading({
          title:'加载中'
        })
        _this.sortingFilter = '价格 高-低';
        request({
          url:'/wap/api/search.php?action=result',
          data:{cityName:'成都',orderBy:'zuigui'},
          success: function(res) {
            console.log("高",res);
            uni.hideLoading()
            if (res.data.status === 'success') {
              _this.datas = res.data.content.item
            } else {
              uni.showToast({
                title:res.data.errorMsg,
                icon:'none'
              })
            }
          },
          fail: function(err) {
            uni.showToast({
              title:err,
              icon:'none'
            })
          }
        })
      } else if (e.label === '价格 低-高') {
        uni.showLoading({
          title:'加载中'
        })
        _this.sortingFilter = '价格 低-高';
        request({
          url:'/wap/api/search.php?action=result',
          data:{cityName:'成都',orderBy:'zuipianyi'},
          success: function(res) {
            console.log("低",res);
            uni.hideLoading()
            if (res.data.status === 'success') {
              _this.datas = res.data.content.item
            } else {
              uni.showToast({
                title:res.data.errorMsg,
                icon:'none'
              })
            }
          },
          fail: function(err) {
            uni.showToast({
              title:err,
              icon:'none'
            })
          }
        })
      } else if (e.label === '距离 近-远') {
        uni.showLoading({
          title:'加载中'
        })
        _this.sortingFilter = '距离 近-远'
        // 获取经纬度请求接口
        uni.getLocation({
          type:'gcj02',
          success: function (res) {
            console.log('近');
            request({
              url:'/wap/api/search.php?action=result',
              data:{cityName:'成都',lag:res.longitude,lng:res.latitude},
              success: function(res) {
                uni.hideLoading()
                if(res.data.status === 'success'){
                    _this.datas = res.data.content.item
                } else {
                  uni.showToast({
                    title:res.data.errorMsg,
                    icon:'none'
                  })
                }
              },
              fail: function(err) {
                uni.showToast({
                  title:err,
                  icon:'none'
                })
              }
            })
            console.log('当前位置的经度：' + res.longitude);
            console.log('当前位置的纬度：' + res.latitude);
          }
        })
        
      }
    },
    // onCancel(e) {
    //   console.log(e);
    // },
    // 地址数据请求
    siteRequest(){
      const _this = this;
      uni.showLoading({
        title:'加载中'
      })
      let city = _this.city.slice(0,2)
      console.log(city);
      request({
        url:'/wap/api/search.php?action=result',
        data:{cityName:'成都'},
        success: function(res) {
          uni.hideLoading();
          console.log('筛选',res);
          if (res.data.status === 'success') {
            _this.datas = res.data.content.item
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
        },
        fail: function(err) {
          uni.showToast({
            title:'系统错误，请稍后再试',
            icon:'none'
          })
        }
      })
    },
    // 点击进入房间详情
    clickDetails(id){
      uni.navigateTo({
        url:`/pages/particulars/particulars?id=${id}`
      })
    },
    // 进入房东详情
    clickHeadPortrait(landlordId){
      uni.navigateTo({
        url:`/pages/landlord_introduced/landlord_introduced?landlord=${landlordId}`
      })
    },
    // 点击开启收藏列表
    clickCollect(id,index){
      if (this.pickerValueArray.length>0) {
        // 请求分组列表
        const _this = this;
        _this.index = index;
        _this.i = _this.datas[index]
        _this.luId = _this.datas[index].luId
        let coll = _this.datas[index].isFavorite
          console.log('索引',coll);
        if (coll===false) {
          _this.$refs.mpPicker.show() // 点击弹出mpvuePickerpicker
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
                _this.$set(_this.datas[index],'isFavorite',false)
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
    // 点击收藏列表确认回调
    clickAffirm(e){
      const _that = this;
      let index = _that.index; // 收藏索引
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
            _that.$set(_that.datas[index], 'isFavorite', true) //更改
          } else {
            uni.showToast({
              title: "收藏失败",
              duration: 2000
            })
          }
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.contanier {
  width: 100%;
  .top {
    width: 100%;
    padding: 30upx;
    box-sizing: border-box;
    display: flex;
    .city {
      width: 138upx;
      height: 80upx;
      color: #ef5f75;
      background-color: #f5f5f5;
      text-align: center;
      line-height: 80upx;
      border-radius: 10upx;
      font-size: 14px;
      .xiala {
        font-size: 14px;
        margin-left: 10upx;
      }
    }
    .select-box {
      width: 540upx;
      height: 80upx;
      background-color: #f5f5f5;
      border-radius: 10upx;
      display: flex;
      align-items: center;
      justify-content:  space-between;
      margin-left: 10upx;
      padding-left: 20upx;
      font-size: 28upx;
      .select-input{
        width: 400upx;
      }
      .sousuo{
        width: 100upx;
        height: 60upx;
        background-color: #ef5f75;
        color: #fff;
        text-align: center;
        line-height: 60upx;
        border-radius: 30upx;
      }
    }
  }
  .list-box {
    width: 100%;
    padding: 30upx;
    box-sizing: border-box;
    font-size: 28upx;
    height: 80upx;
    display: flex;
    align-items: center;
    color: #000;
    justify-content: space-between;
    .tiem-data{
      display: flex;
      align-items: center;
    }
    text{
      color: #000;
    }
  }
  .housing-show {
    width: 100%;
    .housing {
      width: 100%;
      height: 636upx;
      position: relative;
      margin-top: 20upx;
      .housing-swiper {
        width: 100%;
        height: 460upx;
        .swiper-item{
          width: 100%;
          height: 460upx;
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
        bottom: 176upx;
        left: 0;
        .specific-price {
          font-size: 18px;
        }
      }
      .icon-box {
        width: 80upx;
        height: 80upx;
        color: #fff;
        line-height: 80upx;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
        position: absolute;
        top: 30upx;
        right: 30upx;
        text {
          font-size: 40upx;
        }
        .love-icon {
          font-size: 40upx;
        }

        .love-icon-red {
          font-size: 40upx;
          color: #f8070e;
        }
      }
      .bottom-username-box {
        display: flex;
        align-items: center;
        padding: 30upx;
        .username-box {
          width: 104upx;
          height: 104upx;
          border-radius: 52upx;
          margin-right: 30upx;
          .username-photos {
            width: 104upx;
            height: 104upx;
            border-radius: 52upx;
          }
        }
        .lightning-comment {
          display: flex;
          color: #a8a8a8;
          font-size: 14px;
          margin-top: 20upx;
          align-items: center;
          .username-comment {
            width: 100%;
            text-align: left;
            .lightning-comment-box {
              display: flex;
              .lightning {
                margin-right: 10upx;
                .lightning-icon {
                  font-size: 18px;
                  color: #5bbfb5;
                }
              }
              .comment {
                .comment-icon {
                  font-size: 18px;
                  color: #d2d2d2;
                }
              }
            }
          }
        }
      }
    }
  }
  .place{
    width: 100%;
    height: 100%;
    .box{
      width: 100%;
      background-color: #fff;
      font-size: 28upx;
      position: relative;
      .icon-box{
        font-size: 32upx;
        padding: 30upx;
        box-sizing: border-box;
        position: absolute;
        top: 40upx;
        left: 40upx;
      }
    }
  }
}
</style>

