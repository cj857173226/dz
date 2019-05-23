<template>
  <view class="contanier">
    <view class="switch-box">
      <text>需要开发票</text>
      <switch @change="switchChange" color="#f05b72" />
    </view>
    <view v-show="isShow" class="invoice-title-box" @click="addInvoicTitle">
      <view class="invoice-title"><text>发票抬头</text><text class="iconfont jiantou">&#xe65e;</text></view>
      <view style="color:#868686">{{company===''?'你可以在入住完成10天内补全抬头':company}}</view>
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
      isShow:false, 
      company:'',
    }
  },
  methods: {
    switchChange(e){
      console.log(e);
      this.value = e.detail.value;
      if (e.detail.value === true) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    // 进入发票抬头
    addInvoicTitle(){
      uni.navigateTo({
        url:'/pages/invoice/invoice_head?mold=pay'
      })
    },
    submitn(){
      if (this.value === true) {
        this.$store.commit('invoiceFn',true)
      }
      uni.navigateBack({
        delta:1
      })
    }
  },
  onShow(){
    // console.log(this.$store.state.invoiceId)
    this.company = this.$store.state.invoiceCompany
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
    margin-bottom: 30upx;
    padding-bottom: 30upx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2upx solid #d4d4d4;
  }
  .invoice-title-box{
    width: 100%;
    padding-bottom: 30upx;
    border-bottom: 2upx solid #d4d4d4;
    .invoice-title{
      margin-bottom: 20upx;
      display: flex;
      justify-content: space-between;
      .jiantou{
        color: #868686;
      }
    }
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

