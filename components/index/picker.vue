<template>
  <view v-show="isShow" class="picker-box">
    <view class="topSelect">
      <view class="cancel" @tap="clickCancel">取消</view>
      <view>新建分组</view>
    </view>
    <scroll-view class="scroll-y" scroll-y="true" @scroll="scroll">
      <view class="box">
        <view>
          <view class="live-housing">我喜欢的房源</view>
          <view class="housing">0个房源</view>
        </view>
        <view>
          <radio-group @change="radioChange">
            <radio :checked="positive" />
          </radio-group>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      isShow:true,
      positive:false
    }
  },
  props: {
    dataList:Array
  },
  methods: {
    clickCancel(){
      this.isShow = false;
    },
    scroll(e){
      console.log(e);
      
    },
    radioChange(eve){
      console.log("单选：",eve);
      this.positive = !this.positive
    }
  }
}
</script>
<style lang="scss" scoped>
.picker-box{
  width: 100%;
  padding: 30upx;
  box-sizing: border-box;
  height: 600upx;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 200;
  .topSelect{
    width: 100%;
    height: 60upx;
    border-bottom: 2upx solid #efefef;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    .cancel{
      color: #ccc;
    }
  }
  .scroll-y{
    width: 100%;
    height: 490upx;
    background-color: red;
    .box{
      width: 100%;
      height: 120upx;
      border-bottom: 1px solid #efefef;
      .live-housing{
        font-size: 14px;
        font-weight: 700;
      }
      .housing{
        font-size: 14px;
        color: #ccc;
      }
    }
  }
}
</style>
