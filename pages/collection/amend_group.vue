<template>
  <view class="contanier">
    <view class="title-box">
      <text class="title">标题</text>
      <view class="input-box">
        <input class="input" @input="blurValue" type="text" placeholder="起个名字吧" placeholder-style="font-size:12px">
        <view class="btn" @tap="clickSave">保存</view>
      </view>
    </view>
  </view>
</template>
<script>
import {request} from '../../common/request.js' // 封装的带有token的请求方法
export default {
  data () {
    return {
      value:'', // input框中的值
      id:''
    }
  },
  onLoad(option){
    console.log(option);
    this.id = option.id
  },
  methods: {
    // input组件的blur事件
    blurValue(e){
      this.value = e.detail.value
    },
    // 保存
    clickSave(){
      console.log(this.value);
      if (this.value == '') {
        uni.showToast({
          title:'不能为空'
        })
      } else {
        request({
          url:"/wap/api/my.php?action=updateFavorite&type=name",
          data:{value:this.value,id:this.id},
          success: function(res) {
            console.log(res);
            
            if(res.data.status == "success") {
              uni.showToast({
                title:'创建成功',
                duration:1000,
              })
              setTimeout(() => {
                uni.switchTab({
                  url:'/pages/collection/collection'
                })
              }, 2000);
              
            }
          }
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.contanier{
  width: 100%;
  padding: 30upx;
  box-sizing: border-box;
  font-size: 14px;
  .title-box{
    .title{
      font-weight: 700;
    }
    .input-box{
    border-bottom: 1px solid #efefef;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input{
      width: 500upx;
      height: 60upx;
    }
    .btn{
      width: 100upx;
      height: 50upx;
      color: #fff;
      background: rgb(240, 91, 114);
      border-radius: 10upx;
      text-align: center;
      line-height: 50upx;
      &:active{
        opacity: .5;
      }
    }
  }
  }
  
}
</style>


