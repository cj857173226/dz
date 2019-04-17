<template>
  <view class="contanier">
    <view class="housing-resource-box">
      <text>2个房源</text>
      <view>
        <image src="../../static/images/meitu5.jpg"></image>
        <view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import {request} from '../../common/request.js' // 封装的带有token的请求方法
export default {
  data () {
    return {
      
    }
  },
  onLoad(option){
    console.log(option);
    // 动态设置导航标题
    uni.setNavigationBarTitle({
      title:option.title
    })
    // 请求拿到的房源id请求数据
    request({
      url:'/wap/api/my.php?action=listFavorite',
      data:{classId:option.id},
      success: function(res) {
        console.log("收藏列表",res);
        
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.contanier{
  width: 100%;
  padding: 30upx;
  box-sizing: border-box;
}
</style>

