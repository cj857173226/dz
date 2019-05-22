<template>
  <view class="cantiner">
    <view class="picture-box"><image class="picture" src="../../static/images/landlordguide/banner1.jpg"></image></view>
    <view>
      <view>订单信息</view>
    </view>
    <view></view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      data:{}
    }
  },
  onLoad(){
    this.data = this.$store.state.orderDetails
  }
}
</script>
<style lang="scss" scoped>
.cantiner{
  width: 100%;
  font-size: 28upx;
  padding: 30upx;
  box-sizing: border-box;
  .picture-box{
    width: 100%;
    background: #efefef;
    height: 460upx;
    display: flex;
    align-items: center;
    justify-content: center;
    .picture{
      width: 520upx;
      height: 400upx;
      border-radius: 50upx;
    }
  }
}
</style>
