<template>
  <view class="contanier-box">
    <view class="advantage-box">
      <view class="subject-heading">成为房东的好处</view>
      <view class="subhead">分享闲置,赚钱交友:</view>
      <view class="content-a">小猪(xiaozhu.com)是国内知名的特色民宿和短租房预订平台，更是一个充满爱与人情味的社交住宿社区。</view>
      <view class="content-b">小猪短租在全球五大洲60个国家和地区，超过710座城市已突破50万套优质房源，包括别墅、民宿、树屋、花店、剧院等</view>
    </view>
    <view class="advantage-box">
      <view class="subject-heading">如何成为房东</view>
      <view class="subhead">免费发布你的房间:</view>
      <view class="content-a">无论你想出租的是整套房屋，独立单间还是你房间的一张气垫床，你都可以在小猪上免费发布你的房间。</view>
      <view class="content-b">小猪短租在全球五大洲60个国家和地区，超过710座城市已突破50万套优质房源，包括别墅、民宿、树屋、花店、剧院等</view>
    </view>
    <view class="landlord-guide-box">
      <view class="landlord-guide-img">房东指南</view>
    </view>
	</view>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.contanier-box{
	width: 100%;
  height: 100vh;
	padding: 30upx;
	box-sizing: border-box;
  background-color: #ECECEC;
  .advantage-box{
    width: 100%;
    height: 300upx;
    background-color: #fff;
    font-size: 14px;
    padding: 15upx;
    box-sizing: border-box; 
    border-radius: 10upx;
    margin-bottom: 20upx;
    .subject-heading{
      margin-bottom: 10upx;
    }
    .subhead{
      color: #D2D2D2;
      font-size: 12px;
      margin-bottom: 10upx;
    }
    .content-a{
      width: 100%;
      height: 80upx;
      text-indent: 14px;
      font-size: 12px;
      line-height: 40upx;
      overflow: hidden;
      // white-space: nowrap;
      text-overflow: ellipsis;
    }
    .content-b{
      text-indent: 14px;
      font-size: 12px;
      line-height: 44upx;
      width: 100%;
      height: 80upx;
      overflow: hidden;
      // white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .landlord-guide-box{
    width: 100%;
    height: 300upx;
    border-radius: 10upx;
    line-height: 300upx;
    text-align: center;
    background-image: url('../../static/images/meitu1.jpg');
    background-size: 100% 100%;
    position: relative;
    z-index: 1;
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: inherit;
      filter: blur(2px);
      z-index: 2;
    }
    .landlord-guide-img{
      color: #fff;
      font-size: 18px;
      font-weight: 800;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 300upx;
      text-align: center;
      z-index: 11;
    }
  }
}
</style>