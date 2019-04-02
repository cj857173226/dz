<template>
  <view class="contanier">
    <view class="title">为什么更多的</view>
    <view class="title">房东选择不收取押金?</view>
    <view class="the-same-security">同等保障</view>
    <view class="verbal-content">不收取押金,不代表失去保障;我们承诺无押金房源与押金房源享受同等赔付保障;我们会为房客垫付垫付押金以及支付您的损失。</view>
    <view class="the-same-security">流量翻倍</view>
    <view class="verbal-content border">无押金房源享受平台排名支持,增加曝光;同事提升房客好感度,可以获得更多订单</view>
    <view class="bottom-box">
      <view class="deposit">
        <label style="font-size:18px;font-weight:700;">收取押金</label>
        <label class="switch-box">
          <switch @change="switch1Change" color="#EA516B"/>
        </label>
      </view>
      <input v-show="show" placeholder="押金金额最高设置金额9999元" />
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      show:false
    }
  },
  methods: {
    switch1Change:function (e) {
      // console.log('switch1 发生 change 事件，携带值为', e.target.value);
      if (e.target.value === true) {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.contanier{
  width: 100%;
  padding: 30upx;
  box-sizing: border-box;
  font-size: 12px;
  .title{
    font-size: 20px;
    font-weight: bold;
    &:nth-of-type(2){
      margin-top: 10upx;
      margin-bottom: 40upx;
    }
  }
  .the-same-security{
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16upx;
  }
  .verbal-content{
    color: #C6C6C6;
    margin-bottom: 10upx;
  }
  .border{
    border-bottom: 1px solid rgb(228, 227, 227);
    padding-bottom: 30upx;
  }
  .bottom-box{
    margin-top: 20upx;
    .deposit{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .switch-box{
        .uni-switch-input{
          width: 100upx!important;
          height: 30upx!important;
        }
      }
    }
  }
}
</style>
