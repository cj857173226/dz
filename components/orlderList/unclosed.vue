<template>
  <view class="unclosed-contanier">
    <view class="unclosed-box" v-for="(item,i) in list" :key="i" >
      <view class="unclosed-img-box">
        <image class="unclosed-img" :src="item.imgUrl"></image>
        <view class="whether-to-stay-in">{{item.whetherToStayIn}}</view>
      </view>
      <view class=" introduced">
        <view class="left-amount-box">
          <view class="title">{{item.title}}</view>
          <view class="amount-box">
            <text style="color:#000;margin-right:10upx;">金额</text>
            <text style="color:#ef5b72;margin-right:28upx;">{{item.amount}}</text>
            |<text style="color:#000;margin-right:10upx;margin-left:28upx;">剩余时间</text>
            <text style="color:#ef5b72">{{item.timeRemaining}}</text>
          </view>
        </view>
        <view class="btn">退房</view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      list:[
        {imgUrl:'../../static/images/meitu.jpeg',whetherToStayIn:'已入住',title:'后海胡同里咖啡厅风格小白楼',amount:'1000',timeRemaining:'15:00:00'},
        {imgUrl:'../../static/images/meitu1.jpg',whetherToStayIn:'未入住',title:'后海胡同里咖啡厅风格小白楼',amount:'1000',timeRemaining:'15:00:00'},
        {imgUrl:'../../static/images/meitu2.jpeg',whetherToStayIn:'已入住',title:'后海胡同里咖啡厅风格小白楼',amount:'1000',timeRemaining:'15:00:00'},
        {imgUrl:'../../static/images/meitu3.jpg',whetherToStayIn:'未入住',title:'后海胡同里咖啡厅风格小白楼',amount:'1000',timeRemaining:'15:00:00'},
        {imgUrl:'../../static/images/meitu4.jpeg',whetherToStayIn:'已入住',title:'后海胡同里咖啡厅风格小白楼',amount:'1000',timeRemaining:'15:00:00'},
        {imgUrl:'../../static/images/meitu5.jpg',whetherToStayIn:'未入住',title:'后海胡同里咖啡厅风格小白楼',amount:'1000',timeRemaining:'15:00:00'},
        {imgUrl:'../../static/images/meitu6.jpeg',whetherToStayIn:'已入住',title:'后海胡同里咖啡厅风格小白楼',amount:'1000',timeRemaining:'15:00:00'},
      ]
    }
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
.unclosed-contanier{
  width: 100%;
  .unclosed-box{
    width: 100%;
    height: 600upx;
    margin-top: 30upx;
    .unclosed-img-box{
      width: 100%;
      height: 460upx;
      position: relative;
      .unclosed-img{
      width: 100%;
      height: 100%;
      }
      .whether-to-stay-in{
      width: 130upx;
      height: 60upx;
      color: #fff;
      background-color: rgba(0, 0, 0, .5);
      text-align: center;
      line-height: 60upx;
      position: absolute;
      left: 0;
      bottom: 0;
      }
    }
    .introduced{
      width: 100%;
      height: 140upx;
      border-bottom: 2upx solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left-amount-box{
        .title{
          font-weight: bold;
        }
        .amount-box{
          font-size: 14px;
          color: #d3d3d3;
        }
      }
      .btn{
        width: 90upx;
        height: 76upx;
        border-radius: 10upx;
        background-color: #ef5b72;
        color: #fff;
        text-align: center;
        line-height: 76upx;
        &:active{
          opacity: 0.5;
        }
      }
    }
  }
}
</style>

