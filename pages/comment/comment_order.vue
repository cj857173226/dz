<template>
  <view class="container">
    <view class="landlord-information">
      <text>房东名字</text>
      <view class="photo"><image class="photo-img" src="../../static/images/meitu1.jpg"></image></view>
      <view class="btn">房东</view>
      <!-- 评分 -->
      <view class="grade-box">
        <view class="grade">
          <uni-rate margin=10 :value="goodRate" @change="changPoints"></uni-rate>
        </view>
      </view>
      <view class="comment-box">
        <textarea class="area" @input="buleInput" maxlength=200 placeholder-style="text-algin:left;font-size:14px;" placeholder="说说哪里好，其他顾客都知道" />
        <text class="number">{{number}}/200</text>
      </view>
    </view>
    <view class="list-box">
      <view class="left-img">
        <image class="title-img" src="../../static/images/meitu5.jpg"></image>
      </view>
      <view class="right-title">12113315</view>
    </view>
    <!-- 评分 -->
    <view class="grade-box">
      <view class="grade">
        <uni-rate margin=10 :value="indentRate"  @change="changindent"></uni-rate>
      </view>
    </view>
    <view class="comment-box">
      <textarea class="area" @input="buleInputOrder" maxlength=200 placeholder-style="text-algin:left;font-size:14px;" placeholder="说说哪里好，其他顾客都知道" />
      <text class="number">{{number2}}/200</text>
    </view>
    <view>
      <view @tap="clickAddPicture">添加照片</view>
      <view v-if="listPicture.length > 0">
        <view v-for="(item,i) in listPicture" :key="i">
          <image :src="item"></image>  
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import uniRate from "../../components/particulars/uni-rate/uni-rate.vue" //评分插件
export default {
  components: {
    uniRate
  },
  data () {
    return {
      goodRate:'', // 对房东的评分星级，最高5
      landlordValue:'', // 对房东的评论内容
      number:'0', // 对房东的评论字数限制
      indentRate:'', // 房客的评分，最高5
      number2:'0',
      orderValue:'',
      listPicture:[], // 图片上传的数组
    }
  },
  methods: {
    // 评分事件
    changPoints(e){
      this.goodRate = e.value;
    },
    changindent(e){
      this.indentRate = e.value;
    },
    // 文本輸入框
    buleInput(e){
      this.landlordValue = e.detail.value;
      this.number = e.detail.cursor;
    },
    buleInputOrder(e){
      this.orderValue = e.detail.value;
      this.number2 = e.detail.cursor;
    },
    clickAddPicture(){
      const _this = this;
      console.log('添加图片');
      uni.chooseImage({
        // 默认九张图片上传
        sizeType:['compressed'],
        sourceType:['album','camera'],
        success: function(res) {
          // console.log(JSON.stringify());
          let ary = res.tempFilePaths
          // array.push(res.tempFilePaths)
          for (let i = 0; i < ary.length; i++) {
            _this.listPicture.push(ary[i])
          }
        },
        fail: function(err) {
          console.log(err);
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  width: 100%;
  padding: 30upx;
  box-sizing: border-box;
  font-size: 14px;
  .landlord-information{
    width: 100%;
    text-align: center;
    .photo{
      width: 100upx;
      height: 100upx;
      border-radius: 50%;
      border: 1px solid #b5adad;
      margin: 20upx auto; 
      .photo-img{
        width: 100upx;
        height: 100upx;
        border-radius: 50%;
      }
    }
    .btn{
      width: 120upx;
      height: 60upx;
      border-radius: 10upx;
      background-color: #1592c8;
      color: #fff;
      text-align: center;
      line-height: 60upx;
      margin: 0 auto;
    }
    .grade-box{
      background: #f5d7d7;
      height: 80upx;
      border-radius: 10upx;
      display: flex;
      align-items: center;
      margin-top: 20upx;
      .grade{
        width: 360upx;
        margin: 0 auto;
      }
    }
    .comment-box{
      text-align: left;
      width: 100%;
      height:324upx;
      background: #efefef;
      margin-top: 20upx;
      padding: 12upx 12upx;
      box-sizing: border-box;
      position: relative;
      .area{
        width: 100%;
        height: 300upx;
      }
      .number{
        position: absolute;
        bottom: 20upx;
        right: 20upx;
      }
    }
  }
  .list-box{
    width: 100%;
    height: 120upx;
    background-color: #f3f3f3;
    display: flex;
    margin-top: 20upx;
    .left-img{
      width: 200upx;
      height: 120upx;
      .title-img{
        width: 200upx;
        height: 120upx;
      }
    }
    .right-title{
      font-weight: 600;
      margin-left: 20upx;
    }
  }
  .grade-box{
    background: #f5d7d7;
    height: 80upx;
    border-radius: 10upx;
    display: flex;
    align-items: center;
    margin-top: 20upx;
    .grade{
      width: 360upx;
      margin: 0 auto;
    }
  }
  .comment-box{
    text-align: left;
    width: 100%;
    height:324upx;
    background: #efefef;
    margin-top: 20upx;
    padding: 12upx 12upx;
    box-sizing: border-box;
    position: relative;
    .area{
      width: 100%;
      height: 300upx;
    }
    .number{
      position: absolute;
      bottom: 20upx;
      right: 20upx;
    }
  }
}
</style>
