<template>
  <view class="contanier">
    <view class="selectors-btn" @click="clickAddCheck">
      <text class="iconfont">&#xe632;</text>
      添加入住人
    </view>
    <view class="message-box">
      <label class="radio-box">
        <radio :checked="current" />
      </label>
      <view class="right-box">
        <view class="name-box">
          <text class="name">张三</text>
          <text class="iconfont jiantou">&#xe634;</text>
        </view>
        <view class="identity-card-box">
          <text class="identity-card">身份证</text>
          <text>51000000000000</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      current:false
    }
  },
  methods: {
    clickAddCheck(){
      // uni.navigateTo({
      //   url:''
      // })
    }
  }
}
</script>
<style lang="scss" scoped>
.contanier{
  width: 100%;
  padding: 30upx;
  box-sizing: border-box;
  .selectors-btn{
    width: 100%;
    height: 80upx;
    background-color: #EA516B;
    color: #fff;
    line-height: 80upx;
    text-align: center;
    border-radius: 8upx;
    &:active{
      opacity: .5;
    }
  }
  .message-box{
    width: 100%;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    margin-top: 40upx;
    .radio-box{
      margin-right: 20upx;
    }
    .right-box{
      width: 100%;
      .name-box{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .name{
          font-weight: 600;
        }
        .jiantou{
          color: #9a9797;
          font-size: 16px;
        }
      }
      .identity-card-box{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #9a9797;
        margin-top: 20upx;
        font-size: 12px;
        .identity-card{
          margin-right: 16upx;
        }
      }
    }
  }
}
</style>
