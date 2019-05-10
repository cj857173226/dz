<template>
  <view class="contanier">
    <view v-if="roomData.length>0">
      <view class="comment-box" v-for="(item,i) in roomData" :key="i">
        <view class="top-box">
          <image class="userphoto" :src="shortHttp+item.user.userpic"></image>
          <view class="nickname-check-in-time">
            <view class="nickname">{{item.user.realname}}</view>
            <view class="check-in-time">{{item.comment_time}}</view>
          </view>
        </view>
        <view class="comment-content">
          <view style="font-size:14px;">{{item.comment}}</view>
          <view class="img-box" v-if="item.pictures.length>0">
            <image style="width:120upx;height:120upx;margin-left:14upx;" v-for="(items,index) in item.pictures" :key="index" :src="shortHttp+items.picture"></image>
          </view>
        </view>
      </view>
    </view>
    <view v-if="landlordData.length>0">
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
        </view>
      </view>
    </view>
    <view v-else>占无相关评论</view>
  </view>
</template>
<script>
import {request} from '../../common/request.js' // 封装的带有token的请求方法
import {shortHttp} from "../../common/requestUrl.json"; // 接口文件
export default {
  data () {
    return {
      shortHttp,
      roomData:[], //房间评论数据
      landlordData:[], //房东评论数据
    }
  },
  onLoad(option){
    uni.showLoading({
      title:'加载中'
    })
    console.log(option);
    const _this = this;
    if (option.roomId) {
      console.log('1111');
      request({
        url:'/wap/api/detail.php?action=comments',
        data:{id:option.roomId},
        success: function(res) {
          uni.hideLoading()
          if (res.data.status === 'success') {
            _this.roomData = res.data.content.content
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
          console.log(res)
        },
        fail: function(err) {
          uni.showToasr({
            title:'系统异常，请稍后加载',
            icon:'none'
          })
        }
      })
    } else {
      request({
        url:'/wap/api/detail.php?action=comments',
        data:{id:option.id},
        success: function(res) {
          uni.hideLoading()
          if (res.data.status === 'success') {
            _this.landlordData = res.data.content.content
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
          console.log(res)
        },
        fail: function(err) {
          uni.showToasr({
            title:'系统异常，请稍后加载',
            icon:'none'
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .contanier{
    width: 100%;
    padding: 0 30upx;
    box-sizing: border-box;
    font-size: 14px;
    .comment-box{
      border-bottom: 1px solid #efefef;
      margin-top: 30upx;
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
      .comment-content{
        margin-top: 10upx;
        text-indent: 56upx;
      }
    }
  }
</style>
