<template>
  <!--我是房东介绍 -->
  <view class="contanier">
    <head_portrait/>
  </view>
</template>
<script>
import head_portrait from '../../components/landlord_introduced/head_portrait' // 房东头像组件
export default {
  components: {
    head_portrait
  }
}
</script>
<style lang="scss" scoped>
  .contanier{
    width: 100%;
  }
</style>


