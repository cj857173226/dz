<template>
  <view class="centen">
    <view class="iphone-box">
      <view class="iphone-img-box">
        <text class="iconfont iphoneicon">&#xe61a;</text>
      </view>
      <view class='cell-phone-number'>
        <view class="cell-phone-number-box">
          <label class="phone-number">手机号</label>
          <view class="input-iphone-box">
            <input class="input-iphone" placeholder="请输入新的手机号码" type="number" v-model="iphone" />|
            <view style="width:140upx;padding:0 10upx;">
              +86
              <text class="iconfont">&#xe60a;</text>
            </view>
          </view>
        </view>
      </view>
      <view class='cell-phone-number1'>
        <view class="cell-phone-number-box">
          <label class="phone-number">验证码</label>
          <view class="input-iphone-box">
            <input class="input-iphone" placeholder="请输入验证码" type="number" />|
            <view style="font-size:12px;width:140upx;padding:0 10upx;color:#C0C0C0;">获取验证码</view>
          </view>
        </view>
      </view>
    </view>
    <view class="affirmBtn">确定</view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      iphone:'' //手机号
    }
  },
  onLond(){
    
  },
  methods: {
    
  },
};
</script>
<style>
page{
  height: 100%;
}
</style>

<style lang="scss" scoped>

.centen {
  width: 100%;
  height: 100%;
  padding: 30upx;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .iphone-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .iphone-img-box {
      width: 100upx;
      height: 100upx;
      background-color: #fa3679;
      border-radius: 50%;
      margin-top: 40upx;
      border: 1px solid #fff;
      text-align: center;
      line-height: 100upx;
      .iphoneicon {
        color: #fff;
        font-size: 40px;
      }
    }
    .cell-phone-number{
      width: 100%;
      margin-top: 60upx;
      .cell-phone-number-box{
        width: 100%;
        padding: 20upx 0;
        border-bottom: 1px solid #C0C0C0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .phone-number{
          font-size: 14px;
        }
        .input-iphone-box{
          display: flex;
          align-items: center;
          .input-iphone{
            font-size: 14px;
            margin-left: 40upx;
          }
        }
        
      }
    }
    .cell-phone-number1{
      width: 100%;
      .cell-phone-number-box{
        width: 100%;
        padding: 20upx 0;
        border-bottom: 1px solid #C0C0C0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .phone-number{
          font-size: 14px;
        }
        .input-iphone-box{
          display: flex;
          align-items: center;
          .input-iphone{
            font-size: 14px;
            margin-left: 40upx;
          }
        }
        
      }
    }
  }
  .affirmBtn{
    width: 100%;
    height: 80upx;
    background-color: #fa3679;
    color: #fff;
    line-height: 80upx;
    text-align: center;
    &:active{
      opacity: 0.5;
    }
  }
}
</style>


