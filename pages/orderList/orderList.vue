<template>
  <view class="contanier">
    <uni-segmented-control
      :current="current"
      :values="items"
      @clickItem="onClickItem"
      style-type="text"
      active-color="#ef5b72"
    ></uni-segmented-control>
    <scroll-view class="content" scroll-y="true" @scrolltolower="lower" @scrolltoupper="roof" @scroll="scroll">
      <!-- 内容 -->
      <view v-show="current === 0">
        <unclosed></unclosed>
      </view>
      <view v-show="current === 1">
        <over></over>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import uniSegmentedControl from "@/components/orlderList/uni-segmented-control.vue"; //选项卡
import unclosed from '@/components/orlderList/unclosed.vue' //进行中组件
import over from '@/components/orlderList/over.vue' //已结束组件
export default {
  components: { uniSegmentedControl,unclosed,over },
  data() {
    return {
      items: ["进行中", "已结束"],
      current: 0
    };
  },
  methods: {
    onClickItem(index) {
      if (this.current !== index) {
        this.current = index;
      }
    },
    roof:function(e){ //scroll-view触顶事件
      // console.log('到顶了',e)
    },
    lower:function(e){ //scroll-view触底事件
      // console.log('到底了',e)
    },
    scroll:function(e){ //scroll-view滚动事件(滚动触发)
      // console.log('scroll:',e)
    }
  }
};
</script>
<style>
 page{
   height: 100%;
 }
</style>

<style lang="scss" scoped>
  .contanier{
    width: 100%;
    height: 100%;
    padding: 30upx;
    box-sizing: border-box;
    .content{
      box-sizing: border-box;
      width: 100%;
      height: calc(100% - 92upx);
    }
  }
</style>
