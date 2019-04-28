<template>
  <view class="contanier">
    <view class="conter-box">
      <image class="all-img" src="../../static/images/meitu3.jpg" />
      <view class="price-box">
        <view>
          <view>金额：共<text>1000.00</text>元</view>
          <view>剩余时间 &nbsp;&nbsp;&nbsp;&nbsp;<text>30:00</text></view>
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
    background-color: #e4e4e4;
    padding: 30upx;
    box-sizing: border-box;
    .all-img{
      width: 100%;
      height: 460upx;
    }
    .price-box{

    }
  }
}
</style>

