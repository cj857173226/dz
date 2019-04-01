<template>
  <view class="contaniers">
    <view class="img-box" @click="clickBenefit">
      <view class="backgroun-img">为什么要成为房东？</view>
    </view>
    <view class="landlord-box">
      <view class="box">
        <!-- 手机号 -->
        <view class="list-box" @click="clickIphone">
          <text class="iconfont iphone">&#xe61a;</text>
          <view class="list-title-box">
            <view class="mobile-phone-box">
              <view class="mobile-phone">手机号</view>
              <view class="phone-number">18284220103</view>
            </view>
            <view class="off-the-stocks">
              已完成
              <text class="iconfont right">&#xe65e;</text>
            </view>
          </view>
        </view>
        <!-- 真实头像 -->
        <view class="list-box" @tap="chooseImage">
          <text class="iconfont iphone">&#xe60e;</text>
          <view class="list-title-box">
            <view class="mobile-phone-box">
              <view class="mobile-phone">真实头像</view>
              <view class="phone-number">以上传</view>
            </view>
            <view class="off-the-stocks">
              已完成
              <text class="iconfont right">&#xe65e;</text>
            </view>
          </view>
        </view>
        <!-- 真实身份 -->
        <view class="list-box" @tap="information">
          <text class="iconfont iphone">&#xe608;</text>
          <view class="list-title-box">
            <view class="mobile-phone-box">
              <view class="mobile-phone">真实身份</view>
              <view class="phone-number">请完善真实身份</view>
            </view>
            <view class="off-the-stocks">
              未完成
              <text class="iconfont right">&#xe65e;</text>
            </view>
          </view>
        </view>
        <!-- 收款方式 -->
        <view class="list-box" @tap="payment">
          <text class="iconfont iphone">&#xe616;</text>
          <view class="list-title-box">
            <view class="mobile-phone-box">
              <view class="mobile-phone">收款方式</view>
              <view class="phone-number">请完善收款方式</view>
            </view>
            <view class="off-the-stocks">
              未完成
              <text class="iconfont right">&#xe65e;</text>
            </view>
          </view>
        </view>
      </view>
      <view class="btn">开始发布房源</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 跳转事件
    clickBenefit: function() {
      uni.navigateTo({
        url: "/pages/landlord/landlord_benefit" //跳转到为什么成为房东页面
      });
    },
    clickIphone:function(){
      uni.navigateTo({
        url: "/pages/landlord/iphone" //跳转到手机号页面
      });
    },
    chooseImage:function(){ //调用相机和相册
      uni.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album','camera'], //从相册 相机选择
        success: function (res) {
          console.log(JSON.stringify(res.tempFilePaths));
        },
        fail:function(err){
          console.log(err)
        }
      })
    },
    information:function(){
      uni.navigateTo({
        url: "/pages/landlord/information" //跳转到完善真实身份页面
      });
    },
    payment:function(){
      uni.navigateTo({
        url: "/pages/landlord/payment_term" //跳转到选择收款方式页面
      });
    }
  }
};
</script>
<style>
page {
  height: 100%;
}
</style>


<style lang="scss" scoped>
.contaniers {
  width: 100%;
  height: 100%;
  .img-box {
    width: 100%;
    height: 250upx;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    line-height: 250upx;
    background-image: url("../../static/images/meitu1.jpg");
    background-size: 100% 100%;
    position: relative;
    z-index: 1;
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: inherit;
      filter: blur(2px);
      z-index: 2;
    }
    .backgroun-img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 250upx;
      text-align: center;
      z-index: 11;
    }
  }
  .landlord-box {
    width: 100%;
    height: calc(100% - 250upx);
    padding: 0 30upx 30upx 30upx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .box {
      .list-box {
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 10upx;
        .iphone {
          font-size: 30px;
          color: #76808a;
        }
        .list-title-box {
          padding: 16upx 0;
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: space-between;
          border-bottom: 1px solid #c0c0c0;
          margin-left: 20upx;
          .mobile-phone-box {
            .mobile-phone {
              font-size: 12px;
              font-weight: bold;
            }
            .phone-number {
              font-size: 12px;
              font-weight: 300;
              color: #a5a6a6;
            }
          }
          .off-the-stocks {
            font-size: 14px;
            font-weight: bold;
            .right {
              color: #a5a6a6;
            }
          }
        }
      }
    }
    .btn {
      width: 100%;
      height: 76upx;
      background-color: #fa3679;
      color: #fff;
      font-weight: 300;
      text-align: center;
      line-height: 76upx;
      &:active{
        opacity: 0.5;
      }
    }
  }
}
</style>
