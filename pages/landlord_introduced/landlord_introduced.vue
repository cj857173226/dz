<template>
  <view class="contanier">
    <!--  -->
    <view class="photo-box">
      <image class="photo-img" :src="shortHttp+userpic"></image>
    </view>
    <!-- 用户名 认证 -->
    <view class="username-box">
      <view class="username">{{username}}</view>
      <view class="autonym">实名认证</view>
      <view class="verification">已验证：{{phone}}</view>
      <view class="box">
        <text>回复率96% | 平均确认14分钟 | 订单接受率40%</text>
      </view>
    </view>
    <!-- 点评操作 -->
    <view class="comment-box">
      <view class="remark-box">
        <text class="remark-title">{{count}}条点评</text>
        <!-- 星星评分组件 -->
        <uni-rate size="24" disabled="true" :value="badRate"></uni-rate>
      </view>
      <view class="btn-box">
        <button class="mini-btn" type="default" size="mini" @tap="clickBtnComment">更多点评</button>
      </view>
    </view>
    <!-- 评论信息 -->
    <view class="comment" v-if="Object.keys(lodger).length > 0">
      <view class="commentInfo" v-for="(item,i) in lodger" :key="i">
        <view class="commentInfo-username">{{item.user[0].realname}}</view>
        <view class="check-in-time">{{item.comment_time}}</view>
        <view class="commentIn-fo">{{item.comment}}</view>
      </view>
    </view>
    <view v-else>占无评论</view>
    <!-- 房源 -->
    <view class="property-id-box">
      <view class="property-id-title">{{listingCount}}个房源</view>
        <scroll-view class="scroll-view_H" scroll-x="true">
          <view class="scroll-view-item-box">
            <view class="scroll-view-item_H uni-bg-red" v-for="(item,i) in scrollList" :key="i" @tap="clickRoom(item.id)">
              <image class="property-id-img" :src="shortHttp+item.titlepic"></image>
              <view style="font-size:14px;font-weight: bold;margin-top:30upx;">{{item.title}}</view>
              <view class="lightning-comment">
                <view class="lightning"><text class="iconfont icon-lightningbshandian lightning-icon"></text>速订</view>
                <view class="comment"><text class="iconfont icon-pinglun1 comment-icon"></text>{{1}}评论</view>
              </view>
              <view class="price">{{item.dayrentprice}}起/晚</view>
            </view>
          </view>       
        </scroll-view>
    </view>
  </view>
</template>
<script>
// 引入第三方评分插件
import uniRate from '@/components/particulars/uni-rate/uni-rate'
import { shortHttp,portrait } from "../../common/requestUrl.json"; // 接口文件
import {request} from '../../common/request.js' // 封装的带有token的请求方法
export default {
  components: {
    uniRate
  },
  data(){
    return{
      shortHttp,
      userpic:'', //房东头像
      username:'', //房东名字
      phone:'', //验证信息
      listingCount:'', //多少房源
      scrollList:[], // 房源数据
      badRate: 0, // 评分
      lodger:[], // 评论数据
      count:'', // 评论条数
      id:''
    }
  },
  props: ["landlord"],
  methods: {
    // 更多点评
    clickBtnComment(){
      console.log(this.landlord);
      uni.navigateTo({
        url:`/pages/comment/comment?id=${this.landlord}`
      })
    },
    // 用户点击获取当前房源的唯一id，携带id并跳转页面
    clickRoom(teyp){
      uni.navigateTo({
        url:`/pages/particulars/particulars?id=${teyp}`
      })
    },
    httpRequerst(cb){
      const _this = this;
      request({
        url:portrait,
        data:{landlordId:_this.id},
        success: res => {
          console.log("房东详情：",res);
          if (res.data.status === 'success') {
            if (cb) {
              cb(res);
            }
            
            // _this.badRate = parseInt(res.data.content.comment.goodRate)
            // this.$set(this, 'badRate', parseInt(res.data.content.comment.goodRate))
            // Object.assign(this, {'badRate': 3});
            console.log('1',_this.badRate);
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
        },
        fail: function(err) {
          uni.showToast({
            title:'系统错误，请稍后再试',
            icon:'none'
          })
        }
      })
    }
  },
  onLoad (option) {
    // const _this = this
    this.id = option.landlord
    this.httpRequerst((res) => {
      console.log(res);
      this.userpic = res.data.content.landlordInfo.userpic
      this.username = res.data.content.landlordInfo.username
      let phone = res.data.content.landlordInfo.phone 
      if (!phone=="") {
        this.phone = "手机号"
      } else {
        this.phone = "未验证"
      }
      this.listingCount = res.data.content.listing_count
      this.scrollList = res.data.content.listing
      this.lodger = res.data.content.comment.content
      this.count = res.data.content.comment.count
      this.badRate = parseInt(res.data.content.comment.goodRate)
    })
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
      width: 100%;
      height: 100upx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .remark-box{
        display: flex;
        font-weight: bold;
        .remark-title{
          margin-right: 20upx;
        }
      }
      .btn-box{
        .mini-btn{
          background-color: #fff;
          border: 1px solid #ef5b72;
          color: #ef5b72;
          font-size: 14px;
          &:active{
            opacity: 0.8;
          }
        }
      }
    }
    .comment{
      width: 100%;
      .commentInfo{
        width: 100%;
        height: 232upx;
        border-radius: 20upx;
        background-color: #f4f4f4;
        line-height: 40upx;
        padding: 40upx;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        margin-bottom: 20upx;
        .commentInfo-username{
          font-size: 14px;
          font-weight: bold;
        }
        .check-in-time{
          font-size: 12px;
          color: #a5a5a5;
        }
        .commentIn-fo{
          font-size: 14px;
          margin-top: 10upx;
        }
      }
    }
    
    .property-id-box{
      width: 100%;
      margin-top: 50upx;
      .property-id-title{
        font-weight: bold;
        margin-bottom: 30upx;
      }
      .scroll-view_H{
        width: 100%;
        .scroll-view-item-box{
          width: 100%;
          height: 500upx;
          white-space: nowrap;
          .scroll-view-item_H{
            display: inline-block;
            width: 100%;
            position: relative;
            .price{
                width: 180upx;
                height: 80upx;
                background-color: rgba($color: #000000, $alpha: .5);
                color: #fff;
                font-size: 14px;
                text-align: center;
                line-height: 80upx;
                position: absolute;
                z-index: 1;
                left: 0;
                top: 260upx;
              }
            .property-id-img{
              width: 100%;
              height: 340upx;
              
            }
            .lightning-comment{
              display: flex;
              color: #a8a8a8;
              font-size: 14px;
              margin-top: 20upx;
              
              .lightning{
                margin-right: 10upx;
                .lightning-icon{
                  font-size: 18px;
                  color: #5bbfb5;
                }
              }
              .comment{
                .comment-icon{
                  font-size: 18px;
                  color: #d2d2d2;
                }
              }
            }
          }
        }
      }      
    }
  }
</style>


