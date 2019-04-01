<template>
  <view class="container">
    <view class="payment-method">
      <view class="zhifubao">
        <text class="iconfont zhububao-icon">&#xe65d;</text>
        <text>支付宝</text>
      </view>
      <view class="explain">
        <view>CNY(人民币)</view>
        <view>支持按订单结算、按日结算</view>
        <view>结算后即可到账</view>
      </view>
    </view>
    <view class="payment-method">
      <view class="zhifubao">
        <text class="iconfont zhububao-icon">&#xe65d;</text>
        <text>中国银联</text>
      </view>
      <view class="explain">
        <view>CNY(人民币)</view>
        <view>支持按订单结算、按日结算</view>
        <view>结算后即可到账</view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .container{
    width: 100%;
    padding: 0 30upx;
    box-sizing: border-box;
    .payment-method{
      width: 100%;
      height: 250upx;
      background-color: #2B9FFB;
      border-radius: 10upx;
      margin-top: 30upx;
      padding: 0 30upx;
      box-sizing: border-box;
      .zhifubao{
        width: 100%;
        padding: 20upx 0;
        box-sizing: border-box;
        font-weight: bold;
        color: #fff;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #E0E0E0;
        .zhububao-icon{
          font-size: 18px;
          margin-right: 10upx;
        }
      }
      .explain{
        color: #fff;
        font-size: 12px;
        line-height: 40upx;
        margin-top: 30upx;
      }
    }
  }
</style>

