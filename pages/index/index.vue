<template>
  <view class="content">
    <Carousel :banner="contentArray"></Carousel>
    <Selects></Selects>
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
    };
  },
  onLoad() {
    // uni.getLocation({
    //   type: "gcj02", //返回可以用于uni.openLocation的经纬度
    //   success: function(res) {
    //     const latitude = res.latitude;
    //     const longitude = res.longitude;
        
    //   }
		// });
		
    // 判断用户是否登录
    // let token = uni.getStorageSync("dz_token");
    // if (!token) {
    //   setTimeout(function() {
    //     uni.reLaunch({
    //       url: "/pages/login/login"
    //     });
    //   }, 0);
    // }
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
          _that.contentArray = res.data.content;
        },
        fail: err => {
          console.log(err);
        }
      });
    },
    recommended: function() {
      uni.request({
        url: shortHttp + ambitus,
        method: "GET",
        data: { cityName: "成都" },
        success: res => {
          // console.log(res);

          // _that.contentArray = res.data.content
        },
        fail: err => {
          console.log(err);
        }
      });
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
