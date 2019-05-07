<template>
  <scroll-view class="contanier" scroll-y="true">
    <view v-if="listData.length > 0">
      <view class="conter-box" v-for="(item,i) in listData" :key="i">
        <view class="img-box">
          <image class="obligation-img" :src="item.lodgeUnitImageUrl===null ? '../../static/images/default.png' : shortHttp + item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName===null?'占无标题':item.lodgeUnitName}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>金额：共<text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元</view>
            <view>入住日期：{{item.startDate}}/{{item.endDate}}</view>
            <view>入住天数：<text>{{item.dayCount}}天</text></view>
          </view>
          <view class="btn-box">
            <view class="btn" @tap="clickNotarize(item.bookOrderId,'notarize')">确认</view>
            <view class="btn" @tap="clickReject(item.bookOrderId,'reject')">拒绝</view>
          </view>
        </view>
      </view>
    </view>
    <view v-else>你暂时还没有相关的订单</view>
    <neil-modal 
      :show="show" 
      @close="closeModal"
      align="center" 
      :title="title"
      :content="content"
      @cancel="bindBtn('cancel')"
      @confirm="bindBtn('confirm')"
      >
    </neil-modal>
  </scroll-view>
</template>
<script>
import {request} from '../../common/request.js' // 封装的带有token的请求方法
import { shortHttp } from "../../common/requestUrl.json"; // 接口文件
import neilModal from '../neil-modal/neil-modal'; // 引入弹出框插件
export default {
  components: {
    neilModal
  },
  data () {
    return {
      shortHttp,
      listData:[], // 定确认的订单列表数据
      show:false, // 是否显示模态框
      id:'', // 订单id
      title:'提示', // 弹出框的标题
      content:'', // 弹出框里面的内容
      confirmDeletion:'', // 根据confirmDeletion的值来做判断操作
    }
  },
  methods: {
    // 获取数据
    affirmRequest(){
      const _that = this;
      request({
        url:"/wap/api/order.php?action=landlordList&bizState=wait-confirm",
        success: function(res) {
          console.log("房东确认",res)
          if (res.data.status === 'success') {
            _that.listData = res.data.content.orders;
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
        },
        fail: function(err) {
          uni.showToast({
            title:'系统错误，请稍后再试',
              icon:'none'
          })
        }
      })
    },
    // 点击确认订单弹出模态框让房东再次确认
    clickNotarize(id,type){
      // id = 订单id 
      // console.log(id)
      this.confirmDeletion = type;
      this.id = id;
      this.content = '是否确认接收订单';
      this.show = true; //开启模态框
    },
    // 点击拒绝订单弹出模态框让房东再次确认
    clickReject(id,type){
      // id的值为订单id
      this.confirmDeletion = type;
      this.id = id;
      this.content = '是否确认拒绝订单';
      this.show = true; //开启模态框
    },
    // 监听模态框
    closeModal() {
      this.show = false
    },
    // 监听房东的按键操作
    bindBtn(type) {
      const _that = this
      console.log('什么值',_that.confirmDeletion);
      /* 
      reject: 拒接订单
      notarize: 确认订单
      */
      //  判断confirmDeletion的值做不同的操作
      if(_that.confirmDeletion === 'reject'){
        if (type === 'confirm') {
          request({
            url:'/wap/api/order.php?action=refuse',
            data:{id:_that.id},
            success: function(res) {
              if (res.data.status === 'success') {
                uni.showToast({
                  title:'拒绝成功',
                  icon:'none'
                });
                setTimeout(() => {
                  _that.affirmRequest()
                }, 2000);
              } else {
                uni.showToast({
                  title:res.data.errorMsg,
                  icon:'none'
                })
              }
              console.log("取消订单",res);
            },
            fail: function(err) {
              uni.showToast({
                title:'系统异常，请稍后再试',
                icon:'none'
              })
            }
          })
        }
      } else if (_that.confirmDeletion === 'notarize') {
        if (type === 'confirm') {
          request({
            url:'/wap/api/order.php?action=changeState',
            data:{id:_that.id},
            success: function(res) {
              if (res.data.status === 'success') {
                uni.showToast({
                  title:'确认成功',
                  icon:'none'
                });
                setTimeout(() => {
                  _that.affirmRequest()
                },2000);
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
      
      // console.log(`点击了${type==='cancel'?'取消':'确定'}按钮`);
    }
  },
  mounted () {
    this.affirmRequest();
  }
}
</script>
<style>
page{
  height: 100%;
}
</style>

<style lang="scss" scoped>
.contanier{
  width: 100%;
  height: calc(100% - 100upx);
  .conter-box{
    width: 100%;
    margin-top: 30upx;
    border-bottom: 1px solid #adadad;
    .img-box{
      width: 100%;
      height: 460upx;
      padding: 40upx 80upx;
      box-sizing: border-box;
      background-color: #ececec;
      position: relative;
      .obligation-img{
        width: 100%;
        height: 100%;
        border-radius: 60upx;
      }
      .title{
        position: absolute;
        left: 30upx;
        bottom: 0;
      }
    }
    
    .price-endtiem-box{
      width: 100%;
      padding: 30upx;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .btn-box{
        .btn{
          width: 160upx;
          height: 60upx;
          background-color: #1592C8;
          border-radius: 10upx;
          color: #fff;
          text-align: center;
          line-height: 60upx;
          &:active{
            opacity: .5;
          }
          &:nth-of-type(2){
            margin-top: 10upx;
          }
        }
      }
    }
  }
}
</style>