<template>
  <view class="container">
    <view class="landlord-information">
      <text>{{landlordName}}</text>
      <view class="photo"><image class="photo-img" :src="shortHttp+headPortrait"></image></view>
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
      <view class="left-img" @tap="tapPreview">
        <image class="title-img" :src="shortHttp+roomUrl"></image>
      </view>
      <view class="right-title">{{roomTitle}}</view>
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
    <view class="add-picture-box">
      <view v-if="listPicture.length > 0" class="add-picture">
        <view v-for="(item,i) in listPicture" :key="i" class="add-picture-img-box">
          <image class="add-picture-img" :src="item" @tap.stop="uploadedPreview(item)"></image>
          <text class="iconfont chacha" @tap.stop="clickDelete(item)">&#xe664;</text>
        </view>
        <view  class="picture-box" @tap="clickAddPicture">
          <image class="picture-img" src="../../static/images/tinajia.png" mode="scaleToFill"></image>
        </view>
      </view>
      <!-- <view v-if="listPictureFake.length > 0" class="add-picture">
        <view v-for="(item,i) in listPictureFake" :key="i" class="add-picture-img-box">
          <image class="add-picture-img" :src="item" @tap.stop="uploadedPreview(item)"></image>
          <text class="iconfont chacha" @tap.stop="clickDelete(item)">&#xe664;</text>
          <view class="shade">100%</view>
        </view>
        <view  class="picture-box" @tap="clickAddPicture">
          <image class="picture-img" src="../../static/images/tinajia.png" mode="scaleToFill"></image>
        </view>
      </view> -->
      <view  v-else class="picture-box" @tap="clickAddPicture">
        <image class="picture-img" src="../../static/images/tinajia.png"></image>
      </view>
    </view>
    <!-- <view class="btn" @tap="clickPresent">提交评论</view> -->
    <!-- <neil-modal 
      :show="show" 
      @close="closeModal"
      align="center" 
      title="提示"
      content="添加房间环境图片，让更多朋友看到"
      @cancel="bindBtn('cancel')"
      @confirm="bindBtn('confirm')"
      >
    </neil-modal> -->
  </view>
</template>
<script>
import uniRate from "../../components/particulars/uni-rate/uni-rate.vue" //评分插件
// import neilModal from '../../components/neil-modal/neil-modal'; // 引入弹出框插件
import {request} from '../../common/request.js' // 封装的带有token的请求方法
import {shortHttp} from "../../common/requestUrl.json"; // 接口文件
export default {
  components: {
    uniRate
  },
  data () {
    return {
      shortHttp,
      goodRate:'', // 对房东的评分星级，最高5
      landlordValue:'', // 对房东的评论内容
      number:'0', // 对房东的评论字数限制
      indentRate:'', // 订单的评分，最高5
      number2:'0',
      orderValue:'', // 订单评论内容
      listPicture:[], // 图片上传的数组
      listPictureFake:[], // 图片上传进度
      show:false, // 是否开启弹出框
      orderId:'', // 订单id
      landlordName:'', // 房东账号名字
      headPortrait:'', // 房东头像
      roomUrl:'', // 展示图片地址
      previewAry:[], // 预览图片地址
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
    // 添加图片
    clickAddPicture(){
      const _this = this;
      const value = uni.getStorageSync('dz_token');
      console.log('token',value);
      uni.chooseImage({
        // 默认九张图片上传
        sizeType:['compressed'],
        sourceType:['album','camera'],
        success: function(res) {
          console.log(res);
          let ary = res.tempFilePaths;
          let _ary = [];
          for (let i = 0; i < ary.length; i++) {
            // _this.listPicture.push(ary[i])
            uni.uploadFile({
              url:`${shortHttp}/wap/api/upload.php?type=comment`,
              header: {
                "Authorization": 'Bearer ' + value,
              },
              fileType:'image',
              filePath:ary[i],
              name:'file',
              success:function(res) {
                console.log("上传",res);
                let response = JSON.parse(res.data);
                console.log("转换",response);
                if (response.status === 'success') {
                  _ary.push({url:response.content.content,index:i})
                } else {
                  uni.showToast({
                    title:'上传成功',
                    icon:'none'
                  })
                }
              },
              fail: function(err) {
                uni.showToast({
                  title:err,
                  icon:'none',
                })
              }
            })
          }
          console.log('_ary',_ary);
            
        },
        fail: function(err) {
          uni.showToast({
            title:err,
            icon:'none'
          })
        }
      })
    },
    // 删除图片
    clickDelete(i){
    this.listPicture.splice(i,1); // 根据索引删除指定元素 
    //   let index = this.listPicture.indexOf(i);
    //   if (index > -1) {this.listPicture.splice(index,1)};
    },
    // 提交评论
    clickPresent(){
      // 判断房东打分，房东评论，房间评论，房间打分是否为空
      const _this = this;
      if (_this.goodRate==='') {
        uni.showToast({
          title:'请为房东添加评分',
          icon:'none'
        })
      } else if (_this.landlordValue === '') {
        uni.showToast({
          title:'请为房东添加评价',
          icon:'none'
        })
      } else if (_this.indentRate === '') {
        uni.showToast({
          title:'请为房间添加评份',
          icon:'none'
        })
      } else if (_this.orderValue === '') {
        uni.showToast({
          title:'请为房间添加评论',
          icon:'none'
        })
      } else {
        let ary = _this.listPicture;
        if (ary.length > 0) {
          // for (let i = 0; i < ary.length; i++) {
          //   uni.uploadFile({
          //     url:'/wap/api/upload.php',
          //     fileType:'image',
          //     filePath:ary[i],
          //     name:'file',
          //     success:function(res) {
          //       console.log("上传",res);
                
          //     },
          //     fail: function(err) {
          //       uni.showToast({
          //         title:err,
          //         icon:'none',
          //       })
          //     }
          //   })
            
          // }
          
        } else {
          request({
            url:'/wap/api/detail.php?action=createComment',
            method:"POST",
            data:{
              dd_id:_this.orderId,
              dd_comment:_this.orderValue,
              landlord_comment:_this.landlordValue,
              dd_start:_this.indentRate,
              land_start:_this.goodRate
            },
            success: function(res) {
              console.log('提交订单',res);
              if (res.data.status === 'success') {
                uni.showToast({
                  title:'评论成功',
                  icon:'none'
                })
              } else {
                uni.showToast({
                  title:res.data.errorMsg,
                  icon:'none'
                })
              }
            },
            fail: function(err) {
              uni.showToast({
                title:'系统异常，请稍后再试',
                icon:'none'
              })
            }
          })
        }
        
      }
    },
    // 预览房源图片
    tapPreview(){
      const _this = this;
      uni.previewImage({
        indicator:'numbe',
        loop:true,
        urls:_this.previewAry
      })
    },
    // 预览上传图片
    uploadedPreview(type){
      uni.previewImage({
        indicator:'none',
        urls:[type]
      })
    }
  },
  onLoad(option){
    // console.log(option);
    const _this = this;
    _this.orderId = option.orderId;
    uni.showLoading({
      title:'加载中'
    })
    request({
      url:'/wap/api/detail.php?action=index',
      data:{ luId:option.roomId},
      success: function(res) {
        uni.hideLoading();
        console.log(res);
        if (res.data.status === 'success') {
          _this.landlordName = res.data.content.landlord.landlordName;
          _this.headPortrait = res.data.content.landlord.headImageUrl;
          _this.roomUrl = res.data.content.images[0].bigImgUrl;
          _this.roomTitle = res.data.content.detail.addPriceDesc;
          let array = [];
          let ary = res.data.content.images;
          for (let i = 0; i < ary.length; i++) {
            array.push(_this.shortHttp+ary[i].bigImgUrl);
          }
          _this.previewAry = array;
        } else {
          uni.showToast({
            title:res.data.errorMsg,
            icon:'none'
          })
        }
      },
      fail: function(err) {
        uni.showToast({
          title:'系统异常，稍后再试',
          icon:'none'
        })
      }
    })
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
      background-color: #f05b72;
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
  .add-picture-box{
    width: 100%;
    margin-top: 20upx;
    display: flex;
    .picture-box{
      width: 140upx;
      height: 140upx;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10upx;
      background-color: #f3f1f1;
      margin-left: 20upx;
      &:active{
        opacity: .5;
      }
      .picture-img{
        width: 120upx;
        height: 120upx;
      }
    }
    .add-picture{
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      .add-picture-img-box{
        width: 140upx;
        height: 140upx;
        border-radius:10upx; 
        margin-left: 28upx;
        margin-bottom: 20upx;
        position: relative;
        .add-picture-img{
          width: 140upx;
          height: 140upx;
          border-radius:10upx;
        }
        .chacha{
          position: absolute;
          right: 0;
          top: 0;
          color: rgba($color: #000, $alpha: .5);
          font-size: 20px;

        }
      }
    }
  }
  .btn{
    width: 100%;
    height: 80upx;
    background-color: #f05b72;
    color: #fff;
    border-radius: 10upx;
    line-height: 80upx;
    margin-top: 20upx;
    text-align: center;
    &:active{
      opacity: .5;
    }
  }
}
</style>
