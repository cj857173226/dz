<template>
  <scroll-view class="contanier" scroll-y="true">
    <view v-if="stayInList.length > 0">
      <view class="conter-box" v-for="(item,i) in stayInList" :key="i">
        <view class="img-box">
          <image class="obligation-img" :src="item.lodgeUnitImageUrl===null ? '../../static/images/default.png' : shortHttp + item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName===null?'占无标题':item.lodgeUnitName}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>金额：共<text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元</view>
            <view>入住日期：{{item.startDate}}/{{item.endDate}}</view>
          </view>
          <view style="text-align: right;">
            <text>等待客户入住</text>
            <view>入住天数：<text>{{item.dayCount}}天</text></view>
          </view>
        </view>
      </view>
    </view>
    <view v-else>
      <view style="width:100%;height: calc(100% - 100upx);text-align: center;"><image style="width:100%;height: 460upx;" src="../../static/images/deault_list.png" mode="aspectFit"></image></view>
      你暂时还没有相关的订单
    </view>
  </scroll-view>
</template>
<script>
import {request} from '../../common/request.js' // 封装的带有token的请求方法
export default {
  data () {
    return {
      stayInList:[], // 待入住数据
    }
  },
  methods: {
    httpRequert(){
      const _that = this;
      request({
        url:'/wap/api/order.php?action=landlordList&bizState=wait-live',
        success: function(res) {
          console.log('待入住',res);
          if (res.data.status === 'success') {
            _that.stayInList = res.data.content.orders;
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
    }
  },
  mounted () {
    this.httpRequert()
  }
}
</script>
<style>
page {
  min-height: 100%;
}
</style>
<style lang="scss" scoped>
.contanier{
  width: 100%;
  height: calc(100% - 20upx);
  .conter-box{
    width: 100%;
    margin-top: 30upx;
    border-bottom: 1px solid #adadad;
    .img-box{
      width: 100%;
      height: 460upx;
      padding: 40upx 80upx;
      box-sizing: border-box;
      background-color: #ececec;
      position: relative;
      .obligation-img{
        width: 100%;
        height: 100%;
        border-radius: 60upx;
      }
      .title{
        position: absolute;
        left: 30upx;
        bottom: 0;
      }
    }
    
    .price-endtiem-box{
      width: 100%;
      padding: 30upx;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>