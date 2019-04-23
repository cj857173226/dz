<template>
  <view class="contaniner">
    <view class="search-box">
      <text class="iconfont iconsearch">&#xe643;</text>
      <input class="input" value="" @blur="search" placeholder="位置/地名/房源" placeholder-style="color:#ccc;font-weight:800;" focus="true" confirm-type="搜索" />
    </view>
    <ss-select-city :hotCitys="hotCitys" v-model="value" @on-select="onSelect" />
  </view>
</template>
<script>
import {request} from '../../common/request.js';
import ssSelectCity from '@/components/ss-select-city/ss-select-city.vue' 
export default {
  components: {
    ssSelectCity
  },
  data() {
    return {
      val:"",
      hotCitys: ['杭州', '天津', '北京', '上海', '深圳', '广州', '成都', '重庆', '厦门'],
      value: '广州'
    };
  },
  methods: {
    search(e){
      console.log(e.detail.value);
      this.val = e.detail.value;
    },
    onSelect(city) {
      console.log(city)
    }
  },
  onLoad(){
    // 获取城市
    request({
      url:"/wap/api/search.php?action=city",
      success: function(res) {
        console.log("所有城市",res);
        
      }
    })
    
    request({
      url:"/wap/api/search.php?action=result",
      success: function(res) {
        console.log("目的地搜索",res);
        
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.contaniner{
  width: 100%;
  padding: 30upx;
  box-sizing: border-box;
  .search-box{
    width: 100%;
    height: 80upx;
    background: #EA516B;
    border-radius: 40upx;
    color: #fff;
    display: flex;
    align-items: center;
    .iconsearch{
      width: 80upx;
      height: 80upx;
      line-height: 80upx;
      text-align: center;
      font-size: 18px;
    }
    .input{
      width: 500upx;
    }
  }
}
</style>

