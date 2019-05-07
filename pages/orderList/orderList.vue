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
          <unclosed ref="underway"></unclosed>
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
            <toBeConfirmed></toBeConfirmed>
          </div>
        </swiper-item>
        <swiper-item :key="3">
          <div class="bg-white padding margin text-center text-black">
            <toStayIn></toStayIn>
          </div>
        </swiper-item>
        <swiper-item :key="4">
          <div class="bg-white padding margin text-center text-black">
            <stayInThe></stayInThe>
          </div>
        </swiper-item>
        <swiper-item :key="5">
          <div class="bg-white padding margin text-center text-black">
            <offTheStocks></offTheStocks>
          </div>
        </swiper-item>
        <swiper-item :key="6">
          <div class="bg-white padding margin text-center text-black">
            <canceled></canceled>
          </div>
        </swiper-item>
        <swiper-item :key="7">
          <div class="bg-white padding margin text-center text-black">
            <hasRefusedTo></hasRefusedTo>
          </div>
        </swiper-item>
        <swiper-item :key="8">
          <div class="bg-white padding margin text-center text-black">
            <stale></stale>
          </div>
        </swiper-item>
        <swiper-item :key="9">
          <div class="bg-white padding margin text-center text-black">
            <pendingInvestigationRoom></pendingInvestigationRoom>
          </div>
        </swiper-item>
        <swiper-item :key="10">
          <div class="bg-white padding margin text-center text-black">
            <haveMoney></haveMoney>
          </div>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import uniSegmentedControl from "@/components/orlderList/uni-segmented-control.vue"; //选项卡
import WucTab from "@/components/orlderList/wuc-tab/wuc-tab.vue"; // 可滑动选项卡
import unclosed from '@/components/orlderList/unclosed.vue' //进行中组件
import over from '@/components/orlderList/over.vue'; //已结束组件
import completeAll from '@/components/orlderList/completeAll.vue'; // 全部订单组件
import obligation from '@/components/orlderList/obligation.vue'; // 待付款组件
import toStayIn from '@/components/orlderList/to_stay_in.vue'; // 待入住组件
import toBeConfirmed from '@/components/orlderList/to_be_confirmed.vue'; // 待确认组件
import stayInThe from '@/components/orlderList/stay_in_the.vue'; // 入住中组件
import offTheStocks from '@/components/orlderList/off_the_stocks.vue'; //已完成组件
import canceled from '@/components/orlderList/canceled'; // 已取消组件
import hasRefusedTo from '@/components/orlderList/has_refused_to.vue'; // 已拒绝组件
import stale from '@/components/orlderList/stale'; // 已过期组件
import pendingInvestigationRoom from '@/components/orlderList/pending_investigation_room';//带查房组件
import haveMoney from '@/components/orlderList/have_money'; // 已结款组件
import helper from '../../common/helper.js'
export default {
  components: { 
    uniSegmentedControl,
    unclosed,
    over,
    WucTab,
    completeAll,
    obligation,
    toStayIn,
    toBeConfirmed,
    stayInThe,
    offTheStocks,
    canceled,
    hasRefusedTo,
    stale,
    pendingInvestigationRoom,
    haveMoney
    },
  data() {
    return {
      items: ["进行中", "已结束"],
      tabList4: [
        { name: "全部" },
        { name: "待付款" },
        { name: "待确认" },
        { name: "待入住" },
        { name: "入住中" },
        { name: "已完成" },
        { name: "已取消" },
        { name: "拒绝订单" },
        { name: "已过期" },
        { name: "待查房" },
        { name: "已结款" },
      ],
      current: 0,
      reveal:true, //判断用户是房东还是房客
      TabCur4: 0,
    };
  },
	onLoad() {
		helper.isLogin();
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
      console.log('到底了',e)
    },
    scroll:function(e){ //scroll-view滚动事件(滚动触发)
      // console.log('scroll:',e)
    },
    /* ---------------------------------------------------------------------- */
    swiperChange4(e) {
      let { current } = e.target;
      this.TabCur4 = current;
    },
  },
  onPullDownRefresh(){
    console.log('正在下拉')
    this.$refs.underway.httpRequest(); // 调用子组件进行中的方法
    setTimeout(()=>{
      uni.stopPullDownRefresh();
    },2000)

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
      height: 100%;
      .content{
        box-sizing: border-box;
        width: 100%;
        height: calc(100% - 62upx);
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
  .bg-white{
    width: 100%;
    height: 100%;
  }
</style>
