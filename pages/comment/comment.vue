<template>
  <view class="contanier">
    <!-- 房源评论 -->
    <view>
      <view v-if="roomData.length>0">
        <view class="comment-box" v-for="(item,i) in roomData" :key="i">
          <view class="top-box">
            <image class="userphoto" :src="shortHttp+item.userpic"></image>
            <view class="nickname-check-in-time">
              <view class="nickname">{{item.realname}}</view>
              <view class="check-in-time">{{item.comment_time}}</view>
            </view>
          </view>
          <view class="comment-content">
            <view style="font-size:14px;">{{item.comment}}</view>
            <view class="img-box" v-if="item.pictures.length>0">
              <image style="width:120upx;height:120upx;margin-left:14upx;" v-for="(items,index) in item.pictures" :key="index" :src="shortHttp+items.picture"></image>
            </view>
          </view>
          <view class="landlord-reply" v-if="item.recomment != null">
            <view class="landlord-reply-top">
              <view class="left-reply">
                <view class="sign"></view>
                <text>房东回复</text>
              </view>
              <view class="time">
                <text>{{item.re_comment_time}}</text>
              </view>
            </view>
            <view class="landlord-reply-center">{{item.recomment}}</view>
          </view>
        </view>
      </view>
    </view>
    <view>
      <view v-if="landlordData.length>0">
        <view class="comment-box" v-for="(item,i) in landlordData" :key="i">
          <view class="top-box">
            <image class="userphoto" :src="item.userpic===''?'../../static/images/meitu1.jpg':shortHttp+item.userpic"></image>
            <view class="nickname-check-in-time">
              <view class="nickname">{{item.realname}}</view>
              <view class="check-in-time">{{item.comment_time}}</view>
            </view>
          </view>
          <view class="comment-content">
            <view style="font-size:14px;text-algin:center">{{item.comment}}</view>
          </view>
          <view class="landlord-reply" v-if="item.recomment != null">
            <view class="landlord-reply-top">
              <view class="left-reply">
                <view class="sign"></view>
                <text>房东回复</text>
              </view>
              <view class="time">
                <text>{{item.re_comment_time}}</text>
              </view>
            </view>
            <view class="landlord-reply-center">{{item.recomment}}</view>
          </view>
        </view>
      </view>
    </view>
    
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
    // 判断option接收到的值是从哪个地方传过来的
    /* 
      roomId：房源id
      id：房东id
    */
    if (option.roomId) {
      request({
        url:'/wap/api/detail.php?action=comments',
        data:{id:option.roomId},
        success: function(res) {
          console.log('房源评论',res);
          
          uni.hideLoading()
          if (res.data.status === 'success') {
            _this.roomData = res.data.content
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
        url:'/wap/api/fangdong.php?action=comments',
        data:{id:option.id},
        success: function(res) {
          uni.hideLoading()
            console.log('房东评论',res)
          if (res.data.status === 'success') {
            _this.landlordData = res.data.content
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
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
      }
      .landlord-reply{
        width: 100%;
        padding: 20upx 30upx;
        box-sizing: border-box;
        .landlord-reply-top{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left-reply{
            display: flex;
            align-items: center;
            .sign{
              width: 6upx;
              height: 28upx;
              background: #f05b72;
              margin-right: 20upx;
            }
          }
          .time{
            font-size: 24upx;
            color: #888888;
          }
        }
        .landlord-reply-center{
          width: 100%;
          margin-top: 10upx;
          // border-bottom: 2upx solid #ccc;
          padding-bottom: 20upx;
        }
      }
    }
  }
</style>
