<template>
  <view class="contanier">
    <!--  -->
    <view class="photo-box">
      <image class="photo-img" src="../../static/images/landlordguide/banner4.jpg"></image>
    </view>
    <!-- 用户名 认证 -->
    <view class="username-box">
      <view class="username">niafuiag</view>
      <view class="autonym">实名认证</view>
      <view class="verification">已验证：手机号</view>
      <view class="box">
        <text>回复率96% | 平均确认14分钟 | 订单接受率40%</text>
      </view>
    </view>
    <!-- 点评操作 -->
    <view class="comment-box">
      <view class="remark-box">
        <text class="remark-title">5条点评</text>
        <!-- 星星评分组件 -->
        <uni-rate size="20" value="4"></uni-rate>
      </view>
      <view class="btn-box">
        <button class="mini-btn" type="default" size="mini" @tap="clickBtnComment">更多点评</button>
      </view>
    </view>
    <!-- 评论信息 -->
    <view class="commentInfo">
      <view class="commentInfo-username">najigbau</view>
      <view class="check-in-time">2019.2入住</view>
      <view class="commentIn-fo">评论信息评论信息评论信息评论信息评论信息</view>
    </view>
    <!-- 房源 -->
    <view class="property-id-box">
      <view class="property-id-title">21个房源</view>
        <scroll-view class="scroll-view_H" scroll-x="true">
          <view class="scroll-view-item-box">
            <view class="scroll-view-item_H uni-bg-red" v-for="(item,i) in scrollList" :key="i">
              <image class="property-id-img" :src="item.imgUrl"></image>
              <view style="font-size:14px;font-weight: bold;margin-top:30upx;">{{item.title}}</view>
              <view class="lightning-comment">
                <view class="lightning"><text class="iconfont icon-lightningbshandian lightning-icon"></text>{{item.lightning}}</view>
                <view class="comment"><text class="iconfont icon-pinglun1 comment-icon"></text>{{item.comment}}</view>
              </view>
            </view>
          </view>       
        </scroll-view>
    </view>
  </view>
</template>
<script>
// 引入第三方评分插件
import uniRate from '../particulars/uni-rate/uni-rate'
export default {
  components: {
    uniRate
  },
  data(){
    return{
      scrollList:[
        {imgUrl:'../../static/images/landlordguide/banner2.jpg',title:'后海胡同里咖啡厅风格小白楼',lightning:'点评',comment:'0条评论'},
        {imgUrl:'../../static/images/landlordguide/banner3.jpg',title:'后海胡同里咖啡厅风格小白楼',lightning:'点评',comment:'0条评论'},
        {imgUrl:'../../static/images/landlordguide/banner4.jpg',title:'后海胡同里咖啡厅风格小白楼',lightning:'点评',comment:'0条评论'},
        {imgUrl:'../../static/images/landlordguide/banner5.jpg',title:'后海胡同里咖啡厅风格小白楼',lightning:'点评',comment:'0条评论'},
      ]
    }
  },
  methods: {
    // 更多点评
    clickBtnComment(){
      console.log("啊，被猪点了")
    }
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