<template>
  <view class="contanier">
    <uni-segmented-control
      :current="current"
      :values="items"
      @clickItem="onClickItem"
      style-type="text"
      active-color="#ef5b72"
    ></uni-segmented-control>
    <scroll-view class="content" scroll-y="true">
      <!-- 内容 -->
      <view  v-show="current === 0">
        <view v-if="housingData.length>0">
          <view class="housing-comments" v-for="(item,index) in housingData" :key="index">
            <view class="head-portrait-box">
              <view class="portrait-box">
                <view class="portrait-img-box"><image class="img-portrait" :src="item.userpic===''?'../../../static/images/meitu5.jpg':shortHttp+item.userpic"></image></view>
                <text class="ursename">{{item.realname}}</text>
              </view>
              <view class="years-box">
                <view><text>{{item.comment_time}}</text></view>
                <text>{{item.recomment===null?'未回复':'已回复'}}</text>
              </view>
            </view>
            <view class="comments-content">
              {{item.comment}}
            </view>
            <view class="img-box" v-if="item.pictures.length>0">
              <image class="img-list" v-for="(value,key) in item.pictures" :key="key" :src="shortHttp+value.picture"></image>
            </view>
            <view class="btn-box">
              <view class="btn" @tap="cliakReply(item.id)">回复</view>
              <view class="btn" v-show="item.id===i" @tap="cliakCancel()">取消</view>
            </view>
            <view class="reply" v-show="item.id === i">
              <textarea @blur="blurTarea" class="reply-tarea" />
              <view class="notarize" @tap="clickNotarize(item.id)">确认</view>
            </view>
            <!-- 房东回复 -->
            <view class="landlord-reply" v-if="item.recomment != null">
              <view class="landlord-reply-top">
                <view class="left-reply">
                  <view class="sign"></view>
                  <text>房东回复</text>
                </view>
                <view class="time">
                  <text>{{item.re_comment_time}}</text>
                  <!-- <text style="margin-left:20upx;">08:00</text> -->
                </view>
              </view>
              <view class="landlord-reply-center">{{item.recomment}}</view>
            </view>
          </view>
        </view>
        <view v-else>占无相关评论</view>
      </view>
      <view v-show="current === 1">
        <view v-if="landlordData.length>0">
          <view class="landlord-comments">
            <view class="head-portrait-box">
              <view class="portrait-box">
                <view class="portrait-img-box"><image class="img-portrait" :src="item.user.userpic===''?'../../../static/images/meitu5.jpg':shortHttp+item.user.userpic"></image></view>
                <text class="ursename">{{item.user.realname}}</text>
              </view>
              <view class="years-box">
                <view><text>{{item.comment_time}}</text></view>
                <text>未回复</text>
              </view>
            </view>
            <view class="comments-content">
              {{item.comment}}
            </view>
            <!-- <view class="img-box" v-if="item.pictures.length>0">
              <image class="img-list" v-for="(value,key) in item.pictures" :key="key" :src="shortHttp+value.picture"></image>
            </view> -->
            <view class="btn-box">
              <view class="btn" @tap="cliakReply(item.id)">回复</view>
            </view>
            <view class="reply" v-show="item.id === i">
              <textarea @blur="blurTarea" class="reply-tarea" />
              <view class="notarize" @tap="clickNotarize(item.id)">确认</view>
            </view>
            <!-- 房东回复 -->
            <view class="landlord-reply">
              <view class="landlord-reply-top">
                <view class="left-reply">
                  <view class="sign"></view>
                  <text>房东回复</text>
                </view>
                <view class="time">
                  <text>2019/01/01</text>
                  <text style="margin-left:20upx;">08:00</text>
                </view>
              </view>
              <view class="landlord-reply-center">ghpahfahhfaiahfoaifjoa-jfoaijfighoi</view>
            </view>
          </view>
        </view>
        <view v-else>占无相关评论</view>
      </view>
    </scroll-view>
  </view>
</template>
<script>
import uniSegmentedControl from "@/components/orlderList/uni-segmented-control.vue"; //选项卡
import {request} from '../../../common/request.js' // 封装的带有token的请求方法
import {shortHttp} from "../../../common/requestUrl.json"; // 接口文件
export default {
  components: {
    uniSegmentedControl
  },
  data () {
    return {
      items: ["房源评论", "房东评论"],
      current: 0, // 默认选中
      shortHttp,
      housingData:[], // 房源数据
      landlordData:[], // 房东评论
      i:-1,
      roomId:'', // 房源id
      userId:'', // 房东id
      value:'', // 文本框内容
    }
  },
  methods: {
    // 切换选项卡事件
    onClickItem(index) {
      if (this.current !== index) {
        this.current = index;
      }
    },
    // 点击出现回复
    cliakReply(index){
      this.i = index
    },
    // 取消回复，隐藏取消按钮
    cliakCancel(){
      this.i = -1
    },
    // 文本框失焦事件
    blurTarea(e){
      this.value = e.detail.value;
    },
    // 确认提交回复评论
    clickNotarize(id){
      const _this = this;
      request({
        url:'/wap/api/detail.php?action=reComment',
        data:{
          type:'dd',
          comment:_this.value,
          comment_id:id
        },
        success:function (res) {
          console.log(res);
          if (res.data.status === 'success') {
            uni.showToast({
              title:res.data.content,
              icon:'none'
            });
            _this.i = -1;
            _this.roomRequest();
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
        },
        fail: function(err) {
          uni.showToast({
            url:err,
            icon:'none'  
          })
        }
      })
    },
    // 房源评论数据请求
    roomRequest(){
      uni.showLoading({
        title:'加载中'
      })
      const _this = this;
      request({
        url:'/wap/api/fangdong.php?action=houseComments',
        success: function(res) {
          uni.hideLoading();
          console.log('房源评论',res);
          if (res.data.status==='success') {
            _this.housingData = res.data.content;
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
        },
        fail: function(err) {
          uni.showToast({
            title:err,
            icon:'none'
          })
        }
      })
    },
    // 房东评论的数据请求
    landlordRequest(){
      uni.showLoading({
        title:'加载中'
      })
      const _this = this;
      request({
        url:'/wap/api/fangdong.php?action=comment',
        data:{id:_this.userId},
        success: function(res) {
          uni.hideLoading();
            console.log('房东评论',res);
          if (res.data.status==='success') {
            _this.landlordData = res.data.content.content;
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
        },
        fail: function(err) {
          uni.showToast({
            title:err,
            icon:'none'
          })
        }
      })
    }
  },
  onLoad(option){
    this.roomId = option.rid;
    this.userId = option.uid;
    this.roomRequest();
    this.landlordRequest()
  }
}
</script>
<style>
page{
  height: 100%;
}
</style>
<style lang="scss" scoped>
.contanier{
  width: 100%;
  height: 100%;
  font-size: 14px;
  .content{
    width: 100%;
    height: calc(100% - 62upx);
    .housing-comments{
      width: 100%;
      margin-bottom: 20upx;
      .head-portrait-box{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30upx;
        box-sizing: border-box;
        margin-top: 30upx;
        .portrait-box{
          display: flex;
          align-items: center;
          .portrait-img-box{
            width: 100upx;
            height: 100upx;
            border-radius: 50%;
            margin-right: 20upx;
            .img-portrait{
              width: 100upx;
              height: 100upx;
              border-radius: 50%;
            }
          }
          .ursename{
            font-weight: 800;
          }
        }
        .years-box{
          color: #888888;
          text-align: right;
        }
      }
      .comments-content{
        margin-top: 10upx;
        padding: 0 30upx;
        box-sizing:border-box;       
      }
      .img-box{
        width: 100%;
        height: 100%;
        padding: 20upx 30upx;
        box-sizing: border-box;
        .img-list{
          width: 152upx;
          height: 152upx;
          margin-right: 10upx;
          margin-left: 10upx;
        }
      }
      .btn-box{
        width: 100%;
        padding: 0 30upx;
        box-sizing: border-box;
        display: flex;
        flex-direction:row-reverse;
        .btn{
          width: 100upx;
          height: 40upx;
          border:2upx solid #f05b72;
          border-radius: 8upx;
          text-align: center;
          line-height: 40upx;
          color: #f05b72;
          font-size: 24upx;
          &:nth-of-type(2){
            margin-right: 20upx;
          }
          &:active{
            opacity: .5;
          }
        }
      }
      .reply{
        width: 100%;
        padding: 20upx 30upx;
        box-sizing: border-box;
        position: relative;
        .reply-tarea{
          width: 100%;
          height: 300upx;
          border: 2upx solid #ccc;
          padding: 10upx;
          box-sizing: border-box;
        }
        .notarize{
          position: absolute;
          bottom: 30upx;
          right: 40upx;
          width: 100upx;
          height: 40upx;
          border:2upx solid #f05b72;
          border-radius: 8upx;
          text-align: center;
          line-height: 40upx;
          color: #f05b72;
          font-size: 24upx;
          &:active{
            opacity: .5;
          }
        }
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
            color: #888888;
          }
        }
        .landlord-reply-center{
          width: 100%;
          margin-top: 10upx;
          border-bottom: 2upx solid #ccc;
          padding-bottom: 20upx;
        }
      }
    }
  }
}
</style>
