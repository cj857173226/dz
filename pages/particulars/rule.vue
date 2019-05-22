<template>
  <view class="contanier">
    <view class="box">{{datas}}</view>
  </view>
</template>
<script>
import {request} from '../../common/request.js' // 封装的带有token的请求方法
export default {
  data () {
    return {
      datas:'', // 规则数据
    }
  },
  onLoad(option){
    const _this = this;
    console.log(option);
    if (option.mold === 'unsubscribe') {
      uni.showLoading({
        title:'加载中'
      })
      uni.setNavigationBarTitle({
        title:'退订规则'
      })
      request({
        url:'/wap/api/order.php?action=rule',
        success: function(res) {
          uni.hideLoading()
          console.log(res);
          if (res.data.status === 'success') {
            _this.datas = res.data.content.cancel_rule
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
        },
        fail: function(err) {
          uni.showToast({
            title:'系统异常，请稍后再试',
            icon:'none'
          })
        }
      })
    } else if (option.mold === 'check') {
      uni.showLoading({
        title:'加载中'
      })
      uni.setNavigationBarTitle({
        title:'入住规定'
      })
      request({
        url:'/wap/api/order.php?action=rule',
        success: function(res) {
          uni.hideLoading()
          console.log(res);
          if (res.data.status === 'success') {
            _this.datas = res.data.content.check_in_rule
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
        },
        fail: function(err) {
          uni.showToast({
            title:'系统异常，请稍后再试',
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
  padding: 30upx;
  box-sizing: border-box;
  font-size: 28upx;
}
</style>
