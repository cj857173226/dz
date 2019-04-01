<template>
	<view class="contaniers">
		<view class="img-box" @click="clickBenefit">
      为什么要成为房东？
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
    },
    methods: {
      clickBenefit:function(){
        console.log('112')
      }
    }
	}
</script>

<style lang="scss" scoped>
  .contaniers{
    width: 100%;
    .img-box{
      width: 100%;
      height: 250upx;
      color: #fff;
      text-align: center;
      line-height: 250upx;
      background-image: url('../../static/images/meitu.jpeg');
      background-size: 100% 100%;
    }
  }
</style>