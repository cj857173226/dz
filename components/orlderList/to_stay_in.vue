<template>
  <view class="contanier">
    <view v-if="stayInList.length > 0">
      <view class="conter-box">
        <view class="img-box">
          <image class="obligation-img" src="../../static/images/meitu3.jpg"/>
          <view class="title">名称</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>金额：共<text style="color:#ef5b72;margin-right:30upx;">1000.00</text>元</view>
            <view>入住日期：2019/4/9-2019/4/15</view>
          </view>
          <view style="text-align: right;">
            <text>等待客户入住</text>
            <view>入住天数：<text>1天</text></view>
          </view>
        </view>
      </view>
    </view>
    <view v-else style="text-align:center">占无相关订单</view>
  </view>
</template>
<script>
import {request} from '../../common/request.js' // 封装的带有token的请求方法
export default {
  data () {
    return {
      stayInList:[], // 待入住数据
    }
  },
  methods: {
    httpRequert(){
      request({
        url:'/wap/api/order.php?action=landlordList&bizState=wait-live',
        success: function(res) {
          // console.log('待入住',res);
          if (res.data.status === 'success') {
            
          }
        }
      })
    }
  },
  mounted () {
    this.httpRequert()
  }
}
</script>
<style lang="scss" scoped>
.contanier{
  width: 100%;
  .conter-box{
    width: 100%;
    margin-top: 30upx;
    border-bottom: 1px solid #adadad;
    .img-box{
      width: 100%;
      height: 460upx;
      padding: 40upx 80upx;
      box-sizing: border-box;
      background-color: #ececec;
      position: relative;
      .obligation-img{
        width: 100%;
        height: 100%;
        border-radius: 60upx;
      }
      .title{
        position: absolute;
        left: 30upx;
        bottom: 0;
      }
    }
    
    .price-endtiem-box{
      width: 100%;
      padding: 30upx;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>