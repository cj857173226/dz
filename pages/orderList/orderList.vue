<template>
  <view class="contanier">
    <!-- 房客 -->
    <view v-if="reveal===true" class="client-box">
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
    <!-- 房东 -->
    <view v-else class="landlord-box">
      <wuc-tab
        :tab-list="tabList4"
        :tabCur.sync="TabCur4"
        select-class="text-red"
      ></wuc-tab>
      <swiper
        :current="TabCur4"
        class="swiper row"
        duration="1000"
        :circular="true"
        indicator-color="rgba(255,255,255,0)"
        indicator-active-color="rgba(255,255,255,0)"
        @change="swiperChange4"
      >
        <swiper-item :key="0">
          <div class="bg-white padding margin text-center text-black">
            <completeAll></completeAll>
          </div>
        </swiper-item>
        <swiper-item :key="1">
          <div class="bg-white padding margin text-center text-black">
            <obligation></obligation>
          </div>
        </swiper-item>
        <swiper-item :key="2">
          <div class="bg-white padding margin text-center text-black">
           3
          </div>
        </swiper-item>
        <swiper-item :key="3">
          <div class="bg-white padding margin text-center text-black">
            4
          </div>
        </swiper-item>
        <swiper-item :key="4">
          <div class="bg-white padding margin text-center text-black">
           5
          </div>
        </swiper-item>
        <swiper-item :key="5">
          <div class="bg-white padding margin text-center text-black">
            6
          </div>
        </swiper-item>
        <swiper-item :key="6">
          <div class="bg-white padding margin text-center text-black">
            7
          </div>
        </swiper-item>
        <swiper-item :key="7">
          <div class="bg-white padding margin text-center text-black">
            8
          </div>
        </swiper-item>
        <swiper-item :key="8">
          <div class="bg-white padding margin text-center text-black">
            9
          </div>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import uniSegmentedControl from "@/components/orlderList/uni-segmented-control.vue"; //选项卡
import WucTab from "@/components/orlderList/wuc-tab/wuc-tab.vue";
import unclosed from '@/components/orlderList/unclosed.vue' //进行中组件
import over from '@/components/orlderList/over.vue'; //已结束组件
import completeAll from '@/components/orlderList/completeAll.vue'; // 全部订单组件
import obligation from '@/components/orlderList/obligation.vue'; // 待付款组件
export default {
  components: { uniSegmentedControl,unclosed,over,WucTab,completeAll,obligation },
  data() {
    return {
      items: ["进行中", "已结束"],
      // listItem:["全部","待支付","待确认","待入住","入住中","已完成","已取消","已拒绝","已过期"],
      tabList4: [
        { name: "全部" },
        { name: "待付款" },
        { name: "待确认" },
        { name: "待入住" },
        { name: "入住中" },
        { name: "已完成" },
        { name: "已取消" },
        { name: "已拒绝" },
        { name: "已过期" }
      ],
      current: 0,
      reveal:false,
      TabCur4: 0,
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
    },
    /* ---------------------------------------------------------------------- */
    swiperChange4(e) {
      let { current } = e.target;
      this.TabCur4 = current;
    },
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
    .client-box{
      width: 100%;
      .content{
        box-sizing: border-box;
        width: 100%;
        height: calc(100% - 92upx);
      }
    }
    .landlord-box{
      font-size: 14px;
      width: 100%;
      height: 100%;
      .swiper{
        width: 100%;
        box-sizing: border-box;
        height: calc(100% - 92upx);
        // height: 500upx;
      }
    }
  }
</style>
