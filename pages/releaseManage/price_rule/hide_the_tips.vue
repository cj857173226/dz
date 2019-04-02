<template>
  <view class="contanier">
    <textarea
      class="box"
      placeholder="房客支付完成准备入住的时候才会看到隐藏说明，您可以在这里填写列如Wifi密码、备用联系电话、详细上门方式等不便在房源页面公开展示的内容。(选填)"
      placeholder-style="font-size:12px;"
      @blur="bindTextAreaBlur"
    ></textarea>
  </view>
</template>
<script>
export default {
  methods: {
    bindTextAreaBlur: function(e) {
      console.log(e.detail.value);
    }
  }
};
</script>
<style lang="scss" scoped>
.contanier {
  width: 100%;
  padding: 30upx;
  box-sizing: border-box;
  .box {
    width: 100%;
    height: 600upx;
    border-radius: 20upx;
    border: 1px solid #ccc;
    padding: 20upx;
    box-sizing: border-box;
    font-size: 14px;
  }
}
</style>
