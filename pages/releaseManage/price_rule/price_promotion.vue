<template>
  <view class="contenr">
    <radio-group class="top">
      <view class="radio-box">
        <view class="promotion">
          <radio class="ado" value="r1" color="#F93578"/>参与新房促销
        </view>
        <view class="explain">前3单入住的房客将享受8折促销。新房促销有助于提升您在众多房源中的竞争力,并增加房源的曝光度。</view>
      </view>
      <view class="radio-box">
        <view class="promotion">
          <radio class="ado" value="r2" color="#F93578"/>不参与新房促销
        </view>
        <view class="explain">较其他的新房源可能不具备有利的价格优势及足够的吸引力</view>
      </view>
    </radio-group>
    <view class="btn">确认</view>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
page {
  height: 100%;
}
</style>

<style lang="scss" scoped>

.contenr {
  width: 100%;
  height: 100%;
  padding: 30upx;
  box-sizing: border-box;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top {
    width: 100%;
    height: 240upx;
    .radio-box {
      margin-bottom: 30upx;
      .promotion {
        font-size: 14px;
        font-weight: 500;
        .ado {
          width: 28upx!important;
          height: 28upx!important;
          margin-right: 40upx;
        }
      }
      .explain {
        padding-left: 36px;
        color: #cacaca;
      }
    }
  }

  .btn {
    width: 100%;
    height: 80upx;
    background-color: #ea516b;
    color: #fff;
    text-align: center;
    font-size: 14px;
    border-radius: 10upx;
    line-height: 80upx;
    &:active {
      opacity: 0.5;
    }
  }
}
</style>
