<template>
  <view class="contanier">
    <!--  -->
    <view class="photo-box">
      <image class="photo-img" src="../../static/images/landlordguide/banner4.jpg"></image>
    </view>
    <!-- 用户名 认证 -->
    <view class="username-box">
      <view class="username">niafuiag</view>
      <view class="autonym">实名认证</view>
      <view class="verification">已验证：手机号</view>
      <view class="box">
        <text>回复率96% | 平均确认14分钟 | 订单接受率40%</text>
      </view>
    </view>
    <!-- 点评 -->
    <view class="comment-box">
      <view>
        
      </view>
      <text>5条点评</text>
      <!-- 星星评分组件 -->
      <uni-rate size="20" value="4"></uni-rate>

    </view>
  </view>
</template>
<script>
// 引入第三方评分插件
import uniRate from '../particulars/uni-rate/uni-rate'
export default {
  components: {
    uniRate
  }
}
</script>
<style lang="scss" scoped>
  .contanier{
    width: 100%;
    padding: 30upx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .photo-box{
      width: 142upx;
      height: 142upx;
      border-radius: 50%;
      margin-top: 16upx;
      .photo-img{
        width: 142upx;
        height: 142upx;
        border-radius: 50%;
      }
    }
    .username-box{
      width: 100%;
      text-align: center;
      margin-top: 40upx;
      line-height: 50upx;
      .username{
        font-size: 14px;
        font-weight: bold;
      }
      .autonym{
        font-size: 14px;
        color: #c0c0c0;
      }
      .verification{
        font-size: 14px;
        color: #c0c0c0;
      }
      .box{
        width: 100%;
        height: 80upx;
        background-color: #fdeef1;
        color: #f6aeb8;
        line-height: 80upx;
        text-align: center;
				font-size: 12px;
				border-radius: 10upx;
        margin-top: 30upx;
      }
    }
    .comment-box{

    }
  }
</style>