<template>
  <view class="unclosed-contanier">
    <view v-if="waitingPayment.length > 0">
      <view class="conter-box">
        <view class="img-box">
          <image class="obligation-img" src="../../static/images/meitu3.jpg"/>
          <view class="title">名称</view>
          <view class="state">待支付</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>
              金额：共
              <text style="color:#ef5b72;margin-right:30upx;">1000.00</text>元
            </view>
            <view style="font-size:12px;margin:10upx 0;">入住日期：2019/4/9-2019/4/15</view>
            <view>
              剩余时间
              <text>30:00</text>
            </view>
          </view>
          <view style="text-align: right;">
            <!-- <text>等待客户入住</text> -->
            <view>等待支付</view>
            <view>
              入住天数：
              <text>1天</text>
            </view>
            <view style="display: flex;flex-direction: row;">
              <view class="btn">取消</view>
              <view class="btn">支付</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view v-if="hasBeen.length > 0">
      <view class="has-been-in-box">
        <view class="has-been-in-img-box">
          <image class="has-been-in-img" src="../../static/images/meitu3.jpg"/>
          <view class="title">名称</view>
          <view class="state">已入住</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>
              金额：共
              <text style="color:#ef5b72;margin-right:30upx;">1000.00</text>元
            </view>
            <view style="font-size:12px;margin:10upx 0;">入住日期：2019/4/9-2019/4/15</view>
            <!-- <view>剩余时间<text>30:00</text></view> -->
          </view>
          <view style="text-align: right;">
            <!-- <text>等待客户入住</text> -->
            <view class="check-out-btn">退房</view>
            <view>
              入住天数：
              <text>1天</text>
            </view>
            <!-- <view style="display: flex;flex-direction: row;">
            <view class="btn">取消</view>
            <view class="btn">支付</view>
            </view>-->
          </view>
        </view>
      </view>
    </view>
    <view v-if="waitingCheck.length > 0">
      <view class="has-been-in-box">
        <view class="has-been-in-img-box">
          <image class="has-been-in-img" src="../../static/images/meitu3.jpg"/>
          <view class="title">名称</view>
          <view class="state">待入住</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>
              金额：共
              <text style="color:#ef5b72;margin-right:30upx;">1000.00</text>元
            </view>
            <view style="font-size:12px;margin:10upx 0;">入住日期：2019/4/9-2019/4/15</view>
            <!-- <view>剩余时间<text>30:00</text></view> -->
          </view>
          <view style="text-align: right;">
            <!-- <text>等待客户入住</text> -->
            <view class="check-out-btn">退房</view>
            <view>
              入住天数：
              <text>1天</text>
            </view>
            <!-- <view style="display: flex;flex-direction: row;">
            <view class="btn">取消</view>
            <view class="btn">支付</view>
            </view>-->
          </view>
        </view>
      </view>
    </view>
    <view v-if="affirm.length > 0">
      <view class="has-been-in-box" v-for="(item,i) in affirm" :key="i" @tap="clickDetails()">
        <view class="has-been-in-img-box">
          <image class="has-been-in-img" :src="item.lodgeUnitImageUrl === null ? '../../static/images/meitu3.jpg' : shortHttp+item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName === null ? '占无名称' : item.lodgeUnitName}}</view>
          <view class="state">{{item.state}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>
              金额：共
              <text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元
            </view>
            <view style="font-size:12px;margin:10upx 0;">入住日期：{{item.startDate}}/{{item.endDate}}</view>
            <!-- <view>剩余时间<text>30:00</text></view> -->
          </view>
          <view style="text-align: right;">
            <text>等待房东确认</text>
            <!-- <view class="check-out-btn">退房</view> -->
            <view>
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
    <view v-if="refund.length > 0">
      <view class="has-been-in-box" v-for="(item,i) in refund" :key="i" @tap="clickDetails()">
        <view class="has-been-in-img-box">
          <image class="has-been-in-img" :src="item.lodgeUnitImageUrl === null ? '../../static/images/meitu3.jpg' : shortHttp+item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName === null ? '占无名称' : item.lodgeUnitName}}</view>
          <view class="state">{{item.state}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>
              金额：共
              <text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元
            </view>
            <view style="font-size:12px;margin:10upx 0;">入住日期：{{item.startDate}}/{{item.endDate}}</view>
            <!-- <view>剩余时间<text>30:00</text></view> -->
          </view>
          <view style="text-align: right;">
            <text>等待房东确认</text>
            <!-- <view class="check-out-btn">退房</view> -->
            <view>
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
    <view v-else>你暂时还没有相关的订单</view>
  </view>
</template>
<script>
import { request } from "../../common/request.js"; // 封装的带有token的请求方法
import { shortHttp, banner, ambitus } from "../../common/requestUrl.json"; // 接口文件
export default {
  data() {
    return {
      shortHttp,
      affirm: [], // 待确认
      generationCheck: [], // 带入住
      waitingCheck: [], // 等待入住
      waitingPayment: [], // 等待支付
      hasBeen: [], // 已入住
      refund:[], // 待退款
    };
  },
  methods: {
    // 点击进入房间详情
    clickDetails(){
      console.log("点击进入房间详情");
      
    }
  },
  mounted() {
    const _that = this;
    uni.showLoading({
      title: "加载中"
    });
    request({
      url: "/wap/api/order.php?action=list&bizState=ongoing",
      success: function(res) {
        uni.hideLoading();
        console.log("订单数据", res);
        if (res.data.status === "success") {
          let affirmData = []; // 待确认
          let generationCheckData = []; // 带入住
          let waitingCheckData = []; // 等待入住
          let waitingPaymentData = []; // 等待支付
          let refundData = []
          let dataList = res.data.content.orders;
          for (let i = 0; i < dataList.length; i++) {
            let state = dataList[i].state;
            switch (state) {
              case "待确认":
                affirmData.push(dataList[i]);
                break;
              case "待退款":
                refundData.push(dataList[i]);
                break;
              // case "待查房":
              //   refundData.push(dataList[i]);
              //   break;
            }
          }
          _that.affirm = affirmData;
          _that.refund = refundData;
          console.log("push进去的", affirmData);
          console.log("push进去的", refundData);
        } else {
          uni.showToast({
            title: res.data.errorMsg,
            icon: "none"
          });
        }
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.unclosed-contanier {
  width: 100%;
  font-size: 14px;
  .conter-box {
    width: 100%;
    margin-top: 30upx;
    border-bottom: 1px solid #adadad;
    .img-box {
      width: 100%;
      height: 460upx;
      padding: 40upx 80upx;
      box-sizing: border-box;
      background-color: #ececec;
      position: relative;
      .obligation-img {
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
    }
  }
  .btn {
    width: 140upx;
    height: 60upx;
    background-color: #1592c8;
    border-radius: 10upx;
    text-align: center;
    line-height: 60upx;
    color: #fff;
    &:nth-of-type(2) {
      margin-left: 10upx;
    }
    &:active {
      opacity: 0.5;
    }
  }
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
        &:active {
          opacity: 0.5;
        }
      }
    }
  }
  /* .unclosed-box{
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
  } */
}
</style>

