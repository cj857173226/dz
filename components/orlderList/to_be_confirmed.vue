<template>
  <view class="contanier">
    <view class="conter-box">
      <view class="img-box">
        <image class="obligation-img" src="../../static/images/meitu3.jpg"/>
        <view class="title">名称</view>
      </view>
      <view class="price-endtiem-box">
        <view style="text-align: left;">
          <view>金额：共<text style="color:#ef5b72;margin-right:30upx;">1000.00</text>元</view>
          <view>入住日期：2019/4/9-2019/4/15</view>
          <view>入住天数：<text>1天</text></view>
        </view>
        <view class="btn-box">
          <view class="btn">确认</view>
          <view class="btn">拒绝</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import {request} from '../../common/request.js' // 封装的带有token的请求方法
export default {
  mounted () {
    request({
      url:"/wap/api/order.php?action=landlordList&bizState=待确认",
      success: function(res) {
        console.log("房东确认",res)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.contanier{
  width: 100%;
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
      align-items: center;
      .btn-box{
        .btn{
          width: 160upx;
          height: 60upx;
          background-color: #1592C8;
          border-radius: 10upx;
          color: #fff;
          text-align: center;
          line-height: 60upx;
          &:active{
            opacity: .5;
          }
          &:nth-of-type(2){
            margin-top: 10upx;
          }
        }
      }
    }
  }
}
</style>