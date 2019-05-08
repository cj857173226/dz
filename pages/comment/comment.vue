<template>
  <view class="contanier">
    <view class="comment-box">
      <view class="top-box">
        <image class="userphoto" src="../../static/images/meitu1.jpg"></image>
        <view class="nickname-check-in-time">
          <view class="nickname">昵称</view>
          <view class="check-in-time">入住时间</view>
        </view>
      </view>
      <view class="comment-content">
        <view style="font-size:14px;">每一次都在孤单中徘徊</view>
        <view class="img-box">
          <image style="width:120upx;height:120upx;margin-left:14upx;" src="../../static/images/meitu1.jpg"></image>
          <image style="width:120upx;height:120upx;margin-left:14upx;" src="../../static/images/meitu1.jpg"></image>
          <image style="width:120upx;height:120upx;margin-left:14upx;" src="../../static/images/meitu1.jpg"></image>
          <image style="width:120upx;height:120upx;margin-left:14upx;" src="../../static/images/meitu1.jpg"></image>
          <image style="width:120upx;height:120upx;margin-left:14upx;" src="../../static/images/meitu1.jpg"></image>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import {request} from '../../common/request.js' // 封装的带有token的请求方法
export default {
  data () {
    return {
      
    }
  },
  // mounted () {
  //   // request({
  //   //   url:''
  //   // })
  // }
  onLoad(option){
    console.log(option);
    request({
      url:'/wap/api/fangdong.php?action=comments',
      data:{id:option.id},
      success: function(res) {
        console.log(res)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .contanier{
    width: 100%;
    padding: 30upx;
    box-sizing: border-box;
    font-size: 14px;
    .comment-box{
      border-bottom: 1px solid #efefef;
      .top-box{
        width: 100%;
        display: flex;
        align-items: center;
        .userphoto{
          width: 80upx;
          height: 80upx;
          border-radius: 50%;
        }
        .nickname-check-in-time{
          margin-left: 20upx;
          .nickname{
            font-weight: 600;
          }
          .check-in-time{
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
</style>
