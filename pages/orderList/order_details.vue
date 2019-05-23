<template>
  <view class="cantiner">
    <view class="picture-box"><image @click="clickRoom(data.luId)" class="picture" :src="data.lodgeUnitImageUrl===null?'../../static/images/meitu3.jpg':shortHttp+data.lodgeUnitImageUrl"></image></view>
    <view class="order-information">
      <view class="fontw">订单信息</view>
      <!-- <view class="btn-box">
        <view class="btn" v-if="data.state === '待付款'" @click="clickPay(data.bookOrderId)">支付</view>
        <view class="btn" @click="clickCheckOut(data.bookOrderId,'out')">退房</view>
        <view class="btn" v-if="data.state === '待入住'" @click="clickCancelOrder(data.bookOrderId,'cancelOrder')">取消订单</view>
        <view class="btn" v-if="data.state === '待入住'" @click="clickCheckIn(data.bookOrderId,'checkIn')">确认入住</view>
      </view> -->
    </view>
    <view class="order-box">
      <view class="information">
        <view>名称：<text>{{data.lodgeUnitName}}</text></view>
        <view>房间状态：<text>{{data.state}}</text></view>
        <view>订单金额：共<text style="color:#f05b72;margin-left:10upx;margin-right:10upx;">{{data.actualTotalPrice}}</text>元</view>
        <view>入住时间：<text>{{data.startDate}}</text>至<text style="margin-right:20upx;">{{data.endDate}}</text>共<text style="color:#f05b72">{{data.dayCount}}</text>晚</view>
      </view>
    </view>
    <view class="identity fontw">入住人身份信息</view>
    <view class="order-box">
      <view class="information">
        <view v-for="(item,i) in data.bookTenants" :key="i">名字：<text style="margin-right:30upx">{{item.name}}</text><text>身份证：{{item.idcardno}}</text></view>
        <view>联系人：<text style="margin-right:30upx">{{realname}}</text><text>联系电话：</text>{{phone}}</view>
      </view>
    </view>
    <view class="identity fontw">房东信息</view>
    <view class="order-box">
      <view class="information">
        <!-- <view v-for="(item,i) in data.bookTenants" :key="i">名字：<text style="margin-right:30upx">{{item.name}}</text><text>身份证：{{item.idcardno}}</text></view> -->
        <view>联系人：<text style="margin-right:30upx">{{data.landlordRealName}}</text><text>联系电话：</text>{{data.mobile}}</view>
      </view>
    </view>
  </view>
</template>
<script>
import {shortHttp} from "../../common/requestUrl.json"; // 接口文件
import {
		request
	} from '../../common/request.js' // 封装的带有token的请求方法
export default {
  data () {
    return {
      data:{},
      shortHttp,
      realname:'', // 联系人姓名
      phone:'', // 联系人电话
    }
  },
  onLoad(){
    this.data = this.$store.state.orderDetails
    uni.getStorage({
      key:'dz_userInfo',
      success: res => {
        console.log(res.data);
        this.realname = res.data.realname
        this.phone = res.data.phone
      }
    })
    console.log(this.$store.state.orderDetails);
  },
  methods: {
    // 进入房间详情
    clickRoom(id){
      console.log(id);
      uni.navigateTo({
        url:`/pages/particulars/particulars?id=${id}`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.cantiner{
  width: 100%;
  font-size: 28upx;
  .picture-box{
    width: 100%;
    background: #efefef;
    height: 460upx;
    display: flex;
    align-items: center;
    justify-content: center;
    .picture{
      width: 520upx;
      height: 400upx;
      border-radius: 50upx;
    }
  }
  .order-information{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30upx;
    box-sizing: border-box;
    .btn-box{
      display: flex;
      .btn{
        width: 120upx;
        height: 50upx;
        font-size: 24upx;
        border: 2upx solid #f05b72;
        border-radius: 10upx;
        text-align: center;
        line-height: 50upx;
        color: #f05b72;
        margin-left: 10upx;
        &:active{
          opacity: .5;
        }
      }
    }
  }
  .order-box{
    width: 100%;
    padding:0 30upx;
    box-sizing: border-box;
    .information{
      width: 100%;
      border-radius: 20upx;
      padding: 20upx;
      box-sizing: border-box;
      border: 2upx solid #c7c7c7;
    }
  }
  .identity{
    width: 100%;
    padding: 30upx;
    box-sizing: border-box;
  }
}
.fontw{
  font-weight: 700;
}
</style>
