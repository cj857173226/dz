<template>
  <view class="center">
    <view class="price-amount">
      <label class="">日价金额</label>
      <view class="amout-box">
        <input class="amount" placeholder="最高设置金额9999" type="number" />
        <label>元/每晚</label>
      </view>
    </view>
    <text class="hint">日价的10%将作为服务费,请酌情考虑。</text>
  </view>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.center{
  width: 100%;
  padding: 0 30upx;
  box-sizing: border-box;
  font-size: 12px;
  .price-amount{
    width: 100%;
    padding: 20upx 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #F4F4F4;
    margin-bottom: 20upx;
    .amout-box{
      display: flex;
      align-items: center;
      .amount{
        text-align: right;
        width: 300upx;
      }
    }
  }
  .hint{
    color: #CACACA;
  }
}
</style>
