<template>
  <view class="contanier">
    <!-- <view class="top-price">
      应付金额:369
    </view> -->
    <radio-group class="pay-box" @change="radioChange">
      <view class="zhifubao-box">
        <view class="left-box">
          <image class="icon-img" src="../../static/images/zhifubao.png"></image>
          <view style="margin-right:40upx;">
            <view>支付宝钱包支付</view>
            <view style="color:#B5B5B5;">推荐安装支付宝客户端的用户使用</view>
          </view>
        </view>
        <radio color="#EA516B" value="submitAliPay"/>
      </view>
      <view class="zhifubao-box">
        <view class="left-box">
          <image class="icon-img" src="../../static/images/weixin.png"></image>
          <view style="margin-right:40upx;">
            <view>微信支付</view>
            <view style="color:#B5B5B5;">推荐安装微信5.0及以上版本的用户使用</view>
          </view>
        </view>
        <radio  color="#EA516B" disabled="true" value="微信"/>
      </view>
    </radio-group>
    <button class="pay-btn" :disabled="WhetherDisable" @click="clickPayment">支付</button>
    <!-- <view v-if="from != null">{{from}}</view> -->
  </view>
</template>
<script>
import {request} from '../../common/request.js'
export default {
  data(){
    return {
      patternPayment:'', // 支付方式
      id:'',
      WhetherDisable:false,
    }
  },
  onLoad(option){
    this.id = option.bookOrderId;
    // uni.getProvider({
    //   service:'payment',
    //   success:function(res){
    //     console.warn(res.provider)
    //   }
    // })
  },
  methods: {
    radioChange(e){ // 获取用户选择的支付方式
      this.patternPayment = e.detail.value;
    },
    clickPayment(){
      const _that = this;
      // 判断patternPayment的值是否为空，如果为空提示用户，如果有值发起请求
      if (_that.patternPayment === '') {
        uni.showToast({
          title:'请选择一种支付方式',
          icon:'none'
        })
      } else {
        uni.showLoading({
          title: '加载中'
        });
        _that.WhetherDisable = true; // 用户点击一次之后按钮禁用不可在此点击
        setTimeout(()=>{
          _that.WhetherDisable = false;
        },2000);
        let payment = _that.patternPayment; // 支付方式
        // console.warn("订单id",_that.id)
        request({
          url:'/wap/api/pay.php',
          data:{action:payment,dd_id:_that.id},
          success:function(res) {
            uni.hideLoading();
            console.warn(res.data)
            if (payment === _that.patternPayment) {
              // document.write(res.data);
              uni.requestPayment({
                provider: "alipay", // 支付方式
                orderInfo: res.data, // 订单数据
                success: function(res) {
                  console.warn("uniapp",JSON.stringify(res))
                },
                fail: function(err) {
                  console.log('fail:' + JSON.stringify(err));
                }
              })
            }
          },
          fail: function(err) {
            console.log(err)
          }
        })
      }
      
      
      
    }
  }
}
</script>

<style lang="scss" scoped>
.contanier{
  width: 100%;
  height: 100%;
  font-size: 14px;
  .top-price{
    width: 100%;
    height: 100upx;
    background: #2CACA0;
    padding: 0 30upx;
    box-sizing: border-box;
    margin-top: 30upx;
    line-height: 100upx;
    color: #fff;
  }
  .pay-box{
    width:100%;
    padding: 0 30upx;
    box-sizing: border-box;
    .zhifubao-box{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items:center; 
      border-bottom: 1px #ccc solid;
      padding: 40upx 0;
      box-sizing: border-box;
      .left-box{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items:center; 
        .icon-img{
          width: 90upx;
          height: 90upx;
          margin-right: 20upx;
        }
      }
    }
  }
  .pay-btn{
    width: 80%;
    height: 80upx;
    margin: 0 auto;
    color: #fff;
    background: #EA516B;
    text-align: center;
    line-height: 80upx;
    border-radius: 10upx;
    margin-top: 30%;
    &:active{
      opacity: .5;
    }
  }
}
</style>
