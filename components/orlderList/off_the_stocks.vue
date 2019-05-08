<template>
  <scroll-view class="contanier" scroll-y="true">
    <view v-if="listData.length > 0">
      <view class="conter-box" v-for="(item,i) in listData" :key="i">
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
            <view>
              <text>订单已完成</text>
              <!-- <text class="iconfont">&#xe665;</text> -->
            </view>
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
import { shortHttp } from "../../common/requestUrl.json"; // 接口文件
export default {
  data () {
    return {
      listData:[], 
      shortHttp
    }
  },
  mounted () {
    this.stocksRequert()
  },
  methods: {
    stocksRequert(){
      const _that = this;
      request({
        url:"/wap/api/order.php?action=landlordList&bizState=finish",
        success: function(res) {
          console.log('已完成',res);
          if (res.data.status === 'success') {
            _that.listData = res.data.content.orders;
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
        }
      })
    }
  }
}
</script>
<style>
page{
  height: 100%;
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
// .btn{
//   width: 160upx;
//   height: 60upx;
//   background-color: #1592C8;
//   border-radius: 10upx;
//   color: #fff;
//   text-align: center;
//   line-height: 60upx;
//   &:active{
//     opacity: .5;
//   }
//   /* &:nth-of-type(2){
//     margin-top: 10upx;
//   } */
// }
</style>