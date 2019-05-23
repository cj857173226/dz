<template>
  <scroll-view class="contanier" scroll-y="true">
    <!-- 待支付 -->
    <view class="payment" v-if="payment.length > 0">
      <view class="conter-box" v-for="(item,i) in payment" :key="i">
        <view class="img-box">
          <image class="obligation-img" @tap="clickDetails(i)" :src="item.lodgeUnitImageUrl===null ? '../../static/images/default.png' : shortHttp + item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName===null?'占无标题':item.lodgeUnitName}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view style="margin-bottom:20upx;">金额：共<text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元</view>
            <view>入住天数：<text>{{item.dayCount}}天</text></view>
          </view>
          <view style="text-align: right;">
            <text>等待客户支付</text>
            <!-- <view>
              剩余时间
              <text style="margin-left:60upx;">30:00</text>
            </view> -->
            <!-- <view @tap="clickPay(item.)" style="width:160upx;height:60upx;color:#fff;line-height:60upx;text-align:center;background-color:#1592C8;border-radius:10upx;margin-top:10upx;">支付</view> -->
          </view>
        </view>
      </view>
    </view>
    <!-- 待确定 -->
    <view class="affirm" v-if="affirm.length > 0">
      <view class="conter-box" v-for="(item,i) in affirm" :key="i">
        <view class="img-box">
          <image class="obligation-img" @tap="clickDetails(i)" :src="item.lodgeUnitImageUrl === null ? '../../static/images/meitu3.jpg' : shortHttp+item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName === null ? '占无标题' : item.lodgeUnitName}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>
              金额：共
              <text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元
            </view>
            <view>入住日期：{{item.startDate}}/{{item.endDate}}</view>
            <view>
              入住天数：
              <text>{{item.dayCount}}天</text>
            </view>
          </view>
          <view class="btn-box">
            <view class="btn" @tap="clickNotarize(item.bookOrderId,'notarize')">确认</view>
            <view class="btn" @tap="clickReject(item.bookOrderId,'reject')">拒绝</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 待入住 -->
    <view class="check" v-if="check.length > 0">
      <view class="conter-box" v-for="(item,i) in check" :key="i">
        <view class="img-box">
          <image class="obligation-img" @tap="clickDetails(i)" :src="item.lodgeUnitImageUrl===null ? '../../static/images/default.png' : shortHttp + item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName===null?'占无标题':item.lodgeUnitName}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>金额：共<text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元</view>
            <view>入住日期：{{item.startDate}}/{{item.endDate}}</view>
          </view>
          <view style="text-align: right;">
            <text>等待客户入住</text>
            <view>入住天数：<text>{{item.dayCount}}天</text></view>
          </view>
        </view>
      </view>
    </view>
    <!-- 入住中 -->
    <view class="lived" v-if="lived.length > 0">
      <view class="conter-box" v-for="(item,i) in lived" :key="i">
        <view class="img-box">
          <image class="obligation-img" @tap="clickDetails(i)" :src="item.lodgeUnitImageUrl===null ? '../../static/images/default.png' : shortHttp + item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName===null?'占无标题':item.lodgeUnitName}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>金额：共<text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元</view>
            <view>入住日期：{{item.startDate}}/{{item.endDate}}</view>
          </view>
          <view style="text-align: right;">
            <text>客户入住中</text>
            <view>入住天数：<text>{{item.dayCount}}天</text></view>
          </view>
        </view>
      </view>
    </view>
    <!-- 已完成 -->
    <view class="accomplish" v-if="accomplish.length > 0">
      <view class="conter-box" v-for="(item,i) in accomplish" :key="i">
        <view class="img-box">
          <image class="obligation-img" @tap="clickDetails(i)" :src="item.lodgeUnitImageUrl===null ? '../../static/images/default.png' : shortHttp + item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName===null?'占无标题':item.lodgeUnitName}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>金额：共<text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元</view>
            <view>入住日期：{{item.startDate}}/{{item.endDate}}</view>
          </view>
          <view style="text-align: right;">
            <text>订单已完成</text>
            <view>入住天数：<text>{{item.dayCount}}天</text></view>
          </view>
        </view>
      </view>
    </view>
    <!-- 已取消 -->
    <view class="cancel" v-if="cancel.length > 0">
      <view class="conter-box" v-for="(item,i) in cancel" :key="i">
        <view class="img-box">
          <image class="obligation-img" @tap="clickDetails(i)" :src="item.lodgeUnitImageUrl===null ? '../../static/images/default.png' : shortHttp + item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName===null?'占无标题':item.lodgeUnitName}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>金额：共<text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元</view>
            <view>入住日期：{{item.startDate}}/{{item.endDate}}</view>
          </view>
          <view style="text-align: right;">
            <text>订单已取消</text>
            <view>入住天数：<text>{{item.dayCount}}天</text></view>
          </view>
        </view>
      </view>
    </view>
    <!-- 已拒绝 -->
    <view class="refuse" v-if="refuse.length > 0">
      <view class="conter-box" v-for="(item,i) in refuse" :key="i">
        <view class="img-box">
          <image class="obligation-img" @tap="clickDetails(i)" :src="item.lodgeUnitImageUrl===null ? '../../static/images/default.png' : shortHttp + item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName===null?'占无标题':item.lodgeUnitName}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>金额：共<text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元</view>
            <view>入住日期：{{item.startDate}}/{{item.endDate}}</view>
            
          </view>
          <view style="text-align: right;">
            <text>订单已拒绝</text>
            <view>入住天数：<text>{{item.dayCount}}天</text></view>
          </view>
        </view>
      </view>
    </view>
    <!-- 已过期 -->
    <view class="pastDue" v-if="pastDue.length > 0">
      <view class="conter-box" v-for="(item,i) in pastDue" :key="i">
        <view class="img-box">
          <image class="obligation-img" @tap="clickDetails(i)" :src="item.lodgeUnitImageUrl===null ? '../../static/images/default.png' : shortHttp + item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName===null?'占无标题':item.lodgeUnitName}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>金额：共<text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元</view>
            <view>入住日期：{{item.startDate}}/{{item.endDate}}</view>
          </view>
          <view style="text-align: right;">
            <text>订单已过期</text>
            <view>入住天数：<text>{{item.dayCount}}天</text></view>
          </view>
        </view>
      </view>
    </view>
    <!-- 待查房 -->
    <view class="wardRoundDoctor" v-if="wardRoundDoctor.length > 0">
      <view class="conter-box" v-for="(item,i) in wardRoundDoctor" :key="i">
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
            <view style="width:160upx;height:60upx;color:#fff;line-height:60upx;text-align:center;background-color:#1592C8;border-radius:10upx;margin-top:10upx;" @tap.stop="clickWorkRound(item.bookOrderId,'amend')">已查房</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 已结款 -->
    <view class="overMoney" v-if="overMoney.length > 0">
      <view class="conter-box" v-for="(item,i) in overMoney" :key="i">
        <view class="img-box">
          <image class="obligation-img" @tap="clickDetails(i)" :src="item.lodgeUnitImageUrl===null ? '../../static/images/default.png' : shortHttp + item.lodgeUnitImageUrl"/>
          <view class="title">{{item.lodgeUnitName===null?'占无标题':item.lodgeUnitName}}</view>
        </view>
        <view class="price-endtiem-box">
          <view style="text-align: left;">
            <view>金额：共<text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元</view>
          </view>
          <view style="text-align: right;">
            <view>结款日期：{{item.endDate}}</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 待退款 -->
    <view class="refund" v-if="refund.length > 0">
      <view class="conter-box" v-for="(item,i) in refund" :key="i">
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
            <text>等待退款</text>
            <view style="width:160upx;height:60upx;color:#fff;line-height:60upx;text-align:center;background-color:#1592C8;border-radius:10upx;margin-top:10upx;" @tap="clickRefund(item.bookOrderId,'refund')">确认退款</view>
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
      align="center" 
      :title="title"
      :content="content"
      @cancel="bindBtn('cancel')"
      @confirm="bindBtn('confirm')"
      >
    </neil-modal>
    <neil-modal 
      :show="show2" 
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
import { shortHttp } from "../../common/requestUrl.json"; // 接口文件
import { request } from "../../common/request.js"; // 封装的带有token的请求方法
import neilModal from '../neil-modal/neil-modal'; // 引入弹出框插件
export default {
  components: { neilModal },
  data() {
    return {
      shortHttp, // 请求接口域名
      payment: [], // 待支付
      affirm: [], // 待确认
      check:[], // 待入住
      lived:[], // 入住中
      accomplish: [], // 已完成
      cancel: [], // 已取消
      refuse: [], // 已拒绝
      pastDue: [], // 已过期
      wardRoundDoctor: [], // 待查房
      overMoney: [], // 已结款
      refund: [], // 待退款
      id:'', // 订单id
      title:'提示', // 弹出框的标题
      content:'', // 弹出框里面的内容
      show:false, // 是否显示模态框
      show2:false, // 
      confirmDeletion:'', // 根据confirmDeletion的值来做判断操作
      value:'', // 房东修改退款金额
      datas:[]
    };
  },
  methods: {
    // 点击进入订单详情
    clickDetails(index) {
      this.$store.commit('orderDetailsFn',this.datas[index])
      uni.navigateTo({
        url:`/pages/orderList/order_details`
      })
    },
    // 全部列表的数据请求方法
    allRequest() {
      const _that = this;
      request({
        url: "/wap/api/order.php?action=landlordList&bizState=all",
        success: function(res) {
          if (res.data.status === "success") {
            let data = res.data.content.orders;
            _that.datas = data
            let paymentData=[],
                affirmData=[],
                checkData=[],
                livedData=[],
                accomplishData=[],
                cancelData=[],
                refuseData=[],
                pastDueData=[],
                wardRoundDoctorData=[],
                overMoneyData=[],
                refundData=[];
            for (let i = 0; i < data.length; i++) {
              switch (data[i].state) {
                case "待确认":
                  affirmData.push(data[i])
                  break;
                case "已过期":
                  pastDueData.push(data[i])
                  break;
                case "待退款":
                  refundData.push(data[i])
                  break;
                case "待查房":
                  wardRoundDoctorData.push(data[i])
                  break;
                case "已拒绝":
                  refuseData.push(data[i])
                  break;
                case "已完成":
                  accomplishData.push(data[i])
                  break;
                case "已取消":
                  cancelData.push(data[i])
                  break;
                case "待付款":
                  paymentData.push(data[i])
                  break;
                case "待入住":
                  checkData.push(data[i])
                  break;
                case "入住中":
                  livedData.push(data[i])
                  break;
                case "已结算":
                  overMoneyData.push(data[i])
                  break;
              }
            };
            _that.affirm = affirmData;
            _that.pastDue = pastDueData;
            _that.refund = refundData;
            _that.wardRoundDoctor = wardRoundDoctorData;
            _that.refuse = refuseData;
            _that.accomplish = accomplishData;
            _that.cancel = cancelData;
            _that.payment = paymentData;
            _that.check = checkData;
            _that.lived = livedData;
            _that.overMoney = overMoneyData;
          } else {
            uni.showToast({
              title: res.data.errorMsg,
              icon: "none"
            });
          }
          console.log("全部订单", res);
        },
        fail: function(err) {
          uni.showToast({
            title: "系统错误，请稍后再试",
            icon: "none"
          });
        }
      });
    },
    // 点击确认订单弹出模态框让房东再次确认
    clickNotarize(id,type){
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
    // 已查房
    clickWorkRound(id,type){
      this.show2 = true; // 开启show2的模态框
      this.id = id;
      this.content = '确认查房是否没有问题,如有物品损失可修改退款金额';
      this.confirmDeletion = type;
    },
    // 修改金额的失焦事件
    blurInput(e){
      this.value = e.detail.value
    },
    // 待退款
    clickRefund(id,type){
      this.confirmDeletion = type;
      this.id = id;
      this.content = '金额无误，确认退款';
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
      amend:已查房
      refund:待退款
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
                  _that.allRequest()
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
                  _that.allRequest()
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
      } else if (_that.confirmDeletion === 'amend') {
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
                  _that.allRequest()
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
      } else if (_that.confirmDeletion === 'refund') {
        if (type === 'confirm') {
          request({
            url:'/wap/api/order.php?action=changeState',
            data:{id:_that.id},
            success: function(res) {
              if (res.data.status === 'success') {
                uni.showToast({
                  title:'退款成功',
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
  mounted() {
    this.allRequest();
  }
};
</script>
<style>
page {
  min-height: 100%;
}
</style>

<style lang="scss" scoped>
.contanier {
  width: 100%;
  height: calc(100% - 20upx);
  .affirm {
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
    // .conter-box {
    //   width: 100%;
    //   margin-top: 30upx;
    //   background-color: #e4e4e4;
    //   padding: 30upx;
    //   box-sizing: border-box;
    //   .all-img {
    //     width: 100%;
    //     height: 460upx;
    //   }
    // }
  }
  .payment {
    .conter-box {
      width: 100%;
      margin-top: 30upx;
      border-bottom: 1px solid #adadad;
      .img-box {
        width: 100%;
        height: 460upx;
        padding: 40upx 80upx;
        box-sizing: border-box;
        background-color: #ececec;
        position: relative;
        .obligation-img {
          width: 100%;
          height: 100%;
          border-radius: 60upx;
        }
        .title {
          position: absolute;
          left: 30upx;
          bottom: 0;
        }
      }

      .price-endtiem-box {
        width: 100%;
        padding: 30upx;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
  .check{
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
      }
    }
  }
  .lived{
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
      }
    }
  }
  .accomplish{
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
      }
    }
  }
  .cancel{
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
  .refuse{
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
  .pastDue{
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
  .wardRoundDoctor{
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
  .overMoney{
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
      }
    }
  }
  .refund{
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
      }
    }
  }
}
</style>

