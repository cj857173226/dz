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
        <!-- <star :starNum="badRates"></star> -->
        <!-- <uni-rate size="20" disabled="false" :value="goodRate"></uni-rate> -->
        <!-- <sunui-star></sunui-star> -->
        <view class="star-phone" @click.stop="clickRating">
          <text v-for="(item, index) in startArr" :key="index">
              <text
                v-if="item.active"
                class="iconfont icon-xing"
                :data-index="index"
              ></text>
              <text
                v-if="!item.active"
                class="iconfont icon-xing1"
                :data-index="index"
              ></text>
          </text>  
        </view>
      </view>
      <view class="btn-box">
        <button class="mini-btn" type="default" size="mini" @tap="clickBtnComment">更多点评</button>
      </view>
    </view>
    <!-- 评论信息 -->
    <view class="comment" v-if="lodger.length > 0">
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
import uniIcon from '@/components/particulars/uni-icon/uni-icon.vue'
import uniRate from "../../components/particulars/uni-rate/uni-rate.vue"
import star from '@/components/landlord_introduced/star' // 自定义评分组件
import { shortHttp,portrait } from "../../common/requestUrl.json"; // 接口文件
import {request} from '../../common/request.js' // 封装的带有token的请求方法
export default {
  components: {
    uniRate,
    uniIcon
  },
  data(){
    return{
      shortHttp,
      userpic:'', //房东头像
      username:'', //房东名字
      phone:'', //验证信息
      listingCount:'', //多少房源
      scrollList:[], // 房源数据
      lodger:[], // 评论数据
      count:'', // 评论条数
      id:'',
      // isFill:true, //星星的类型，是否镂空
      // color:'#ececec', //星星的颜色
      // activeColor:'#ffca3e', //星星选中状态颜色
      // size:24 ,//星星的大小
      // rating:3,//当前评分
      // max:5, //最大评分
      // margin:0, //星星的间距
      // disabled:false, //是否可点击
      // starNum:5 ,// 星星的个数
      // outIndex:0,
      readOnly:false,
      startArr:[
        {active:false},
        {active:false},
        {active:false},
        {active:false},
        {active:false}
      ]
    }
  },
  methods: {
    // 更多点评
    clickBtnComment(){
      uni.navigateTo({
        url:`/pages/comment/comment?id=${this.id}`
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
    },
    isRating (len) {
      for(let i=0;i<len;i++){
        this.startArr[i].active = true;
      }
    },
    clickRating (ev) {
      if (this.readOnly) {
        return
      }

      let mark = parseInt(ev.target.dataset.index) + 1
      this.rating = mark
      // this.$emit('starMarkChange', mark, this.outIndex)
    },
  },
  onLoad (option) {
    console.log("onLoad");
    uni.getStorageSync
    // const _this = this
    this.id = option.landlord
    this.httpRequerst((res) => {
      try {
        
      } catch (error) {
        console.log(error);
      }
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
      
      let object = res.data.content.comment.content
      for (const key in object) {
        this.lodger.push(object[key])
      }
      this.count = res.data.content.comment.count
      this.rating = res.data.content.comment.goodRate
      this.isRating (res.data.content.comment.goodRate);
      console.log(this.rating);
      
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
        align-items: center;
        font-weight: bold;
        .remark-title{
          margin-right: 20upx;
        }
        .star-phone {
          line-height: 26px;
          -webkit-tap-highlight-color:transparent;
        }
        .icon-xing1{
          font-size: 40upx;
          color: #989895;
          margin-left: 10upx;
        }
        .icon-xing{
          font-size: 40upx;
          color: #ffd600;
          margin-left: 10upx;
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


