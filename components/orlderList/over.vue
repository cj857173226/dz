<template>
  <view class="unclosed-contanier">
    <view v-if="dataList.length > 0">
      <view class="has-been-in-box" v-for="(item,i) in dataList" :key="i">
        <view class="has-been-in-img-box">
          <image class="has-been-in-img" @tap="clickDetails(i)" :src="item.lodgeUnitImageUrl === null ? '../../static/images/meitu3.jpg' : shortHttp+item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName === null ? '占无名称' : item.lodgeUnitName}}</view>
          <view class="state">{{item.state}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;width:440upx;">
            <view>
              金额：共
              <text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元
            </view>
            <view style="font-size:12px;margin:10upx 0;">入住日期：{{item.startDate}}/{{item.endDate}}</view>
            <!-- <view>剩余时间<text>30:00</text></view> -->
          </view>
          <view style="display: flex;flex-direction: column;justify-content:flex-end">
            <!-- <text>等待客户入住</text> -->
            <!-- <view class="check-out-btn" @tap="deleteOrder(item.bookOrderId)">删除</view> -->
            <view v-if="item.state === '已完成'" style="text-align:right;display: flex;justify-content: flex-end;flex-wrap: wrap;">
              <view>
                入住天数：
                <text>{{item.dayCount}}天</text>
              </view>
              <!-- <text class="iconfont pinglun">&#xe665;</text> -->
              <view class="btn" @tap.stop="comment(item.bookOrderId,item.luId)">评论</view>
            </view>
            <view v-else>
              入住天数：
              <text>{{item.dayCount}}天</text>
            </view>
            <!-- <view style="display: flex;flex-direction: row;">
            <view class="btn">取消</view>
            <view class="btn">支付</view>
            </view>-->
          </view>
        </view>
      </view>
    </view>
    <view style="width:100%;height: 700upx;text-align: center;" v-else>
      <image style="width:100%;height: 700upx;" src="../../static/images/deault_list.png"></image>
      你暂时还没有相关的订单
    </view>
  </view>
</template>
<script>
import { request } from "../../common/request.js"; // 封装的带有token的请求方法
import { shortHttp } from "../../common/requestUrl.json"; // 接口文件
export default {
  data() {
    return {
      shortHttp,
      dataList:[], 

    };
  },
  methods: {
    /* deleteOrder( orderId){
      console.log(orderId);
      
    } */
    // 进入订单详情
    clickDetails(index){
      console.log(this.dataList);
      
      this.$store.commit('orderDetailsFn',this.dataList[index])
      uni.navigateTo({
        url:`/pages/orderList/order_details`
      })
    },
    // 评论
    comment(orderId,roomId){
      // orderId：订单id  roomId：房源id  
      console.log(orderId,roomId);
      
      uni.navigateTo({
        url:`/pages/comment/comment_order?orderId=${orderId}&roomId=${roomId}`
      })
    },
    // 请求数据方法
    overRequest(){
      const _that = this;
      uni.showLoading({
        title:'加载中'
      })
      request({
        url: "/wap/api/order.php?action=list&bizState=closed",
        success: function(res) {
          uni.hideLoading()
          console.log("已结束：", res.data.content.orders);
          if (res.data.status === 'success') {
            _that.dataList = res.data.content.orders;
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
        },
        fail: function(err) {
          uni.showToast({
            title:err
          })
        }
      });
    }
  },
  mounted() {
    this.overRequest()
  }
};
</script>
<style lang="scss" scoped>
.unclosed-contanier {
  width: 100%;
  font-size: 14px;
  .has-been-in-box {
    width: 100%;
    margin-top: 30upx;
    border-bottom: 1px solid #adadad;
    .has-been-in-img-box {
      width: 100%;
      height: 460upx;
      padding: 40upx 80upx;
      box-sizing: border-box;
      background-color: #ececec;
      position: relative;
      .has-been-in-img {
        width: 100%;
        height: 100%;
        border-radius: 60upx;
      }
      .title {
        position: absolute;
        left: 30upx;
        bottom: 0;
      }
      .state {
        position: absolute;
        top: 0;
        right: 30upx;
      }
    }
    .price-endtiem-box {
      width: 100%;
      padding: 30upx;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .check-out-btn {
        width: 140upx;
        height: 60upx;
        color: #fff;
        background-color: #1592c8;
        border-radius: 10upx;
        text-align: center;
        line-height: 60upx;
        margin-bottom: 10upx;
        // position: absolute;
        // right: 0;
        // top: 0;
        &:active {
          opacity: 0.5;
          
        }
      }
    }
  }
}
.btn{
  width: 120upx;
  height: 60upx;
  background-color: #1592c8;
  border-radius: 10upx;
  text-align: center;
  line-height: 60upx;
  color: #fff;
  &:active{
    opacity: .5;
  }
}
</style>


