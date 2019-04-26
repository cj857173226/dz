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
        </view>
        <view style="text-align: right;">
          <text>等待客户入住</text>
          <view>入住天数：<text>1天</text></view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  
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
    }
  }
}
</style>