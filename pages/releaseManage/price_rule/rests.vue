<template>
  <view class="contanier">
    <textarea
      class="box"
      placeholder="对水费、电费、燃气费等其他费用有更多要求,请进行描述。(选填)"
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
