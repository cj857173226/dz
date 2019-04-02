<template>
  <view class="contanier">
    <textarea
      class="box"
      placeholder="房客使用您的房间需要遵守的规则(如年龄段、性别、接待时间等),合理的要求可使您避免一些不可必要的麻烦(请不要发布联系方式)"
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
