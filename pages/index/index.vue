<template>
  <view class="content">
    <Carousel :banner="contentArray"></Carousel>
    <Selects :GPS="city"></Selects>
    <Circum></Circum>
  </view>
</template>

<script>
// 引入自定义组件
import Carousel from "../../components/index/carousel.vue"; // 轮播组件
import Selects from "../../components/index/select.vue"; // 地区时间搜索组件
import Circum from "../../components/index/circum.vue"; // 周边推荐组件

import { shortHttp, banner, ambitus } from "../../common/requestUrl.json"; // 接口文件
export default {
  components: {
    //注册组件
    Carousel,
    Selects,
    Circum
  },
  data() {
    return {
      contentArray: null, //轮播图
      ambitusArray: null, //周边推荐
      city: "", // gps获取当前设备城市名
    };
  },
  onLoad() {
    this.cityGps(); //调用获取城市名
    console.log(1)
    // 判断用户是否登录
    let token = uni.getStorageSync("dz_token");
    if (!token) {
      setTimeout(function() {
        uni.reLaunch({
          url: "/pages/login/login"
        });
      }, 0);
    }
  },
  onReady() {
    this.bannerFn();
    this.recommended();
  },
  methods: {
    // 轮播图请求方法
    bannerFn: function() {
      const _that = this;
      uni.request({
        url: shortHttp + banner,
        method: "GET",
        success: res => {
          let array = res.data.content
          console.log(array);
          
          _that.contentArray = array;
        },
        fail: err => {
          console.log(err);
        }
      });
    },
    cityGps() {
      // 获取当前位置
      const _that = this;
      plus.geolocation.getCurrentPosition(p => {
        _that.city = p.address.city; //当前城市名
        console.log(_that.city)
      });
      
    },
    // 周边推荐
    async recommended() {
      // console.log(2);
      const _that = this;
      var [err,res] = await uni.request({
        url: shortHttp + ambitus,
        method: "GET",
        data: { cityName: "成都市" },  //*：有问题，无法拿到当前城市
        // success:res=>{
        //   console.log(res);
          
        // }
      });
     
      console.log("同步操作", res);
    }
  }
};
</script>
<style>
page {
  height: 100%;
}
</style>

<style lang="scss" scoped>
.content {
  width: 100%;
  background-color: #fff;
  min-height: 100%;
  box-sizing: border-box;
}
</style>
