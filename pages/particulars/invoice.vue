<template>
  <view class="contanier">
    <view class="switch-box">
      <text>需要开发票</text>
      <switch @change="switchChange" color="#f05b72" />
    </view>
    <view>
      
    </view>
    <view class="btn-box">
      <view class="btn" @click="submitn">确认</view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      value:false, // 是否开发票  
    }
  },
  methods: {
    switchChange(e){
      console.log(e);
      this.value = e.detail.value;
    },
    submitn(){
      if (this.value === true) {
        this.$store.commit('invoiceFn',true)
      }
      uni.navigateBack({
        delta:1
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
  height: 100%;
  padding: 30upx;
  box-sizing: border-box;
  font-size: 28upx;
  .switch-box{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn-box{
    width: 100%;
    padding: 30upx;
    box-sizing: border-box;
    height: 132upx;
    position: fixed;
    bottom: 0;
    left:0;
    border-top: 2upx solid #efefef;
    .btn{
      width: 100%;
      height: 70upx;
      background: #f05b72;
      color: #fff;
      text-align: center;
      line-height: 70upx;
      border-radius: 10upx;
      &:active{
        opacity: .5;
      }
    }
  }
}
</style>

