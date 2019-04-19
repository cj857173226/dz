<template>
  <view class="contanier">
    <view class="title">退订规则</view>
    <view class="unsubscribe">
      <uni-steps :data="[
        {title:'预定成功',desc:'如取消订单，定金全部退返'},
        {title:'入住前一天 14:00前',desc:'如提前退房，扣除一天后订金'},
        {title:'入住当天 14:00前',desc:'如提前退房，扣除一天后订金'},
        {title:'退房当天 12:00 前',desc:''}]" 
        direction="column" 
        :active="4" 
        active-color="#f05b72"
        >
      </uni-steps>
      <view class="rule">本规则有房东定制</view>
    </view>
    
  </view>
</template>
<script>
import uniSteps from "./plug/uni-steps/uni-steps.vue" //第三方步骤插件
export default {
  components: {uniSteps}
}
</script>
<style lang="scss" scoped>
  .contanier{
    width: 100%;
    height: 600upx;
    padding:  0 40upx 0 40upx;
    box-sizing: border-box;
    .title{
      font-weight: bold;
      text-align: center;
    }
    .unsubscribe{
      width: 100%;
    }
    .rule{
      text-align: right;
    }
    
  }
</style>


