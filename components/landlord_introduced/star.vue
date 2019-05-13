<template>
  <view class="star-phone" @click.stop="clickRating">
    <text
      v-for="(item, index) in starNum"
      :key="index"
      :class="isRating(index)"
      :data-index="index"
    ></text>
  </view>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    starNum: {
      // 星星的个数
      type: Number,
      default: 5,
    },
    defaultRating: {
      // 默认点亮的个数
      type: Number,
      default: 5,
    },
    outIndex: {
      // 外界传进来的一个标识
      type: Number,
      default: 0,
    },
    readOnly: {
      // 是否是只读，默认不是，拥有点击功能
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      rating: this.defaultRating, // 用于控制点亮星星的个数
    }
  },
  methods: {
    isRating (index) {
      ++index
      return index <= this.rating ? 'iconfont icon-xing' : 'iconfont icon-xing1'
    },
    clickRating (ev) {
      if (this.readOnly) {
        return
      }

      let mark = parseInt(ev.target.dataset.index) + 1
      this.rating = mark
      this.$emit('starMarkChange', mark, this.outIndex)
    },
  },
}
</script>

<style scoped lang="scss">
  .star-phone {
    position: relative;
    display: inline-block;
    line-height: 26px;
    -webkit-tap-highlight-color:transparent;
  }
  .star-item {
    display: inline-block;
    width: 26px;
    height: 26px;
    background-image: url('../../static/images/xingxing.png'); /* 换成图片真实路劲，图片在下面给出 */
    background-size: 100% 100%;
    cursor: pointer;
    vertical-align: bottom;
    white-space: nowrap;
    margin-left: 10upx;
  }
  .star-item:last-child {
    padding-right: 0;
  }
  .star-active {
    background-position: center 26px;
  }
  .icon-xing{
    color: red;
  }
</style> 