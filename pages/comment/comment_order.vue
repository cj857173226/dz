<template>
  <view class="container">
    <view class="landlord-information">
      <text>房东名字</text>
      <view class="photo"><image class="photo-img" src="../../static/images/meitu1.jpg"></image></view>
      <view class="btn">房东</view>
      <!-- 评分 -->
      <view class="grade-box">
        <view class="grade">
          <uni-rate margin=10 :value="goodRate" @change="changPoints"></uni-rate>
        </view>
      </view>
      <view class="comment-box">
        <textarea class="area" placeholder-style="text-algin:left;font-size:14px;" placeholder="说说哪里好，其他顾客都知道" />
      </view>
    </view>
  </view>
</template>
<script>
import uniRate from "../../components/particulars/uni-rate/uni-rate.vue" //评分插件
export default {
  components: {
    uniRate
  },
  data () {
    return {
      goodRate:'', // 评分星级，最高5
    }
  },
  methods: {
    // 评分事件
    changPoints(e){
      this.goodRate = e.value;
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  width: 100%;
  padding: 30upx;
  box-sizing: border-box;
  font-size: 14px;
  .landlord-information{
    width: 100%;
    text-align: center;
    .photo{
      width: 100upx;
      height: 100upx;
      border-radius: 50%;
      border: 1px solid #b5adad;
      margin: 20upx auto; 
      .photo-img{
        width: 100upx;
        height: 100upx;
        border-radius: 50%;
      }
    }
    .btn{
      width: 120upx;
      height: 60upx;
      border-radius: 10upx;
      background-color: #1592c8;
      color: #fff;
      text-align: center;
      line-height: 60upx;
      margin: 0 auto;
    }
    .grade-box{
      background: #f5d7d7;
      height: 80upx;
      border-radius: 10upx;
      display: flex;
      align-items: center;
      margin-top: 20upx;
      .grade{
        width: 360upx;
        margin: 0 auto;
      }
    }
    .comment-box{
      width: 100%;
      height:324upx;
      background: #efefef;
      margin-top: 20upx;
      padding: 12upx 12upx;
      box-sizing: border-box;
      .area{
        width: 100%;
        height: 300upx;
      }
    }
  }
}
</style>
