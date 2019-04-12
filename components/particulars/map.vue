<template>
  <view class="containers-box">
    <view class="map-box">
      <map
        style="width: 100%; height: 100%;"
        :latitude="lat"
        :longitude="log"
        scale=16
        :markers="covers"
      ></map>
    </view>
    <view class="btn-box">
      <!-- <button class="mini-btn btn-the-globe" type="primary" size="mini" @tap='clickZoom'>
        <i class="iconfont contact-the-landlord-icon">&#xe607;</i>
        查看地图
      </button>
      <button class="mini-btn" type="primary" size="mini">
        <i class="iconfont contact-the-landlord-icon">&#xe603;</i>
        点击导航
      </button> -->
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "map",
      covers:[]
    };
  },
  props: ["lat","log"],
  methods: {
    // 点击查看地图
    clickZoom(){
      console.log('查看地图');
      console.log(this.lat);
      console.log(this.log);
    }
  },
  mounted () {
    this.covers.push({
      latitude:this.lat,
      longitude:this.log
    })
    // console.log(this.lat);
    // console.log(this.log);
  }
};
</script>

<style lang="scss" scoped>
.containers-box{
  width: 100%;
  height: 490upx;
  background-color: #fff;
  margin-top: 10upx;
  .map-box {
    width: 100%;
    height: 424upx;
    padding: 15upx;
    box-sizing: border-box;
  }
  .btn-box {
    // text-align: center;
    // margin-top: 18upx;
    // .mini-btn {
    //   height: 80upx;
    //   line-height: 80upx;
    //   background-color: #fff;
    //   font-size: 12px;
    //   border: 1px solid #ef5b72;
    //   color: #ef5b72;
    //   .contact-the-landlord-icon {
    //     font-size: 14px;
    //     color: #ef5b72;
    //     margin-right: 10upx;
    //   }
    // }
    // .btn-the-globe {
    //   margin-right: 26upx;
    // }
  }
}
.csssprite {
  display: none !important;
}
</style>
