<template>
  <view class="contanier">
    <label>允许加客</label>
    <radio-group>
      <label class="radio"><radio value="r1" color="#EA516B"/>是</label>
      <label><radio value="r2" color="#EA516B"/>否</label>
    </radio-group>
  </view>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.contanier{
  width: 100%;
  padding: 30upx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #CACACA;
  .radio{
    margin-right: 30upx;
  }
}
</style>
