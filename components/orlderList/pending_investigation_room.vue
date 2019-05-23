<template>
  <scroll-view class="contanier" scroll-y="true">
    <view v-if="listData.length > 0">
      <view class="conter-box" v-for="(item,i) in listData" :key="i">
        <view class="img-box">
          <image class="obligation-img" @tap="clickDetails(i)" :src="item.lodgeUnitImageUrl===null ? '../../static/images/default.png' : shortHttp + item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName===null?'占无标题':item.lodgeUnitName}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>金额：共<text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元</view>
            <view>入住日期：{{item.startDate}}/{{item.endDate}}</view>
            <view>入住天数：<text>{{item.dayCount}}天</text></view>
          </view>
          <view style="text-align: right;">
            <text>等待查房</text>
            <view style="width:160upx;height:60upx;color:#fff;line-height:60upx;text-align:center;background-color:#1592C8;border-radius:10upx;margin-top:10upx;" @tap.stop="clickWorkRound(item.bookOrderId)">已查房</view>
          </view>
        </view>
      </view>
    </view>
    <view style="width:100%;height: 700upx;text-align: center;" v-else>
      <image style="width:100%;height: 700upx;" src="../../static/images/deault_list.png"></image>
      你暂时还没有相关的订单
    </view>
    <neil-modal 
      :show="show" 
      @close="closeModal"
      title="提示"
      align="center"
      @cancel="bindBtn('cancel')"
      @confirm="bindBtn('confirm')"
      >
        <view>
          是否需要修改退款金额
        </view>
        <view class="input-name">
          <view style="margin-left:40upx;">退还金额:</view>
          <view class="input-box">
            <input type="text" placeholder="请输入退款金额" @blur="blurInput" />
          </view>
          <text>元</text>
        </view>
    </neil-modal>
  </scroll-view>
</template>
<script>
import {request} from '../../common/request.js' // 封装的带有token的请求方法
import { shortHttp } from "../../common/requestUrl.json"; // 接口文件
import neilModal from '../neil-modal/neil-modal'; // 引入弹出框插件
export default {
  components: { neilModal },
  data () {
    return {
      listData:[], 
      shortHttp,
      content:'', // 弹出框里面的内容
      // title:'提示', // 弹出框的标题
      show:false, // 是否显示模态框
      id:'', // 订单id
      value:'', // 房东修改退款金额
    }
  },
  mounted () {
    this.pendRequert()
  },
  methods: {
    // 点击进入订单详情
    clickDetails(index) {
      this.$store.commit('orderDetailsFn',this.listData[index])
      uni.navigateTo({
        url:`/pages/orderList/order_details`
      })
    },
    pendRequert(){
      const _that = this;
      request({
        url:"/wap/api/order.php?action=landlordList&bizState=check",
        success: function(res) {
          console.log('带查房',res);
          if (res.data.status === 'success') {
            _that.listData = res.data.content.orders;
          } else {
            uni.showToast({
              title:res.data.errorMsg,
              icon:'none'
            })
          }
        }
      })
    },
    blurInput(e){
    this.value = e.detail.value
    },
    // 已查房
    clickWorkRound(id){
      console.log();
      this.id = id;
      this.show = true;
      this.content = '确认查房是否没有问题,如有物品损失可修改退款金额'
    },
    // 监听模态框
    closeModal() {
      this.show = false
    },
    // 监听房东的按键操作
    bindBtn(type){
      const _that = this;
      if (type === 'confirm') {
        request({
          url:'/wap/api/order.php?action=changeState',
          data:{id:_that.id,additional_money:_that.value},
          success: function(res) {
            if (res.data.status === 'success') {
              uni.showToast({
                title:'查房成功',
                icon:'none'
              });
              setTimeout(() => {
                _that.pendRequert()
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
    }
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
  height: calc(100% - 20upx);
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
    }
  }
}
.input-name{
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: center;
  height: 114upx;
}

</style>