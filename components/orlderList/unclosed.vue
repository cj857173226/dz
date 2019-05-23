<template>
  <view class="unclosed-contanier">
    <view v-if="datas.length > 0">
      <!-- 待确定 -->
      <view v-if="affirm.length > 0">
        <view class="has-been-in-box" v-for="(item,i) in affirm" :key="i" >
          <view class="has-been-in-img-box">
            <image
              class="has-been-in-img"
              :src="item.lodgeUnitImageUrl === null ? '../../static/images/meitu3.jpg' : shortHttp+item.lodgeUnitImageUrl"
              @tap="clickDetails(i)"
            />
            <view class="title">{{item.lodgeUnitName === null ? '占无名称' : item.lodgeUnitName}}</view>
            <view class="state">{{item.state}}</view>
          </view>
          <view class="price-endtiem-box">
            <view style="text-align: left;">
              <view>
                金额：共
                <text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元
              </view>
              <view style="font-size:12px;margin:10upx 0;">入住日期：{{item.startDate}}/{{item.endDate}}</view>
              <!-- <view>剩余时间<text>30:00</text></view> -->
            </view>
            <view style="text-align: right;">
              <text>等待房东确认</text>
              <!-- <view class="check-out-btn">退房</view> -->
              <view>
                入住天数：
                <text>{{item.dayCount}}天</text>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!-- 待支付 -->
      <view v-if="waitingPayment.length > 0">
        <view class="conter-box" v-for="(item,i) in waitingPayment" :key="i" >
          <view class="img-box">
            <image class="obligation-img" @tap="clickDetails(i)" :src="item.lodgeUnitImageUrl === null ? '../../static/images/meitu3.jpg' : shortHttp+item.lodgeUnitImageUrl"/>
            <view class="title">{{item.lodgeUnitName === null ? '占无名称' : item.lodgeUnitName}}</view>
            <view class="state">{{item.state}}</view>
          </view>
          <view class="price-endtiem-box">
            <view style="text-align: left;">
              <view>
                金额：共
                <text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元
              </view>
              <view style="font-size:12px;margin:10upx 0;">入住日期：{{item.startDate}}/{{item.endDate}}</view>
              <!-- <view>
                剩余时间
                <text>30:00</text>
              </view> -->
            </view>
            <view style="text-align: right;">
              <!-- <text>等待客户入住</text> -->
              <view>等待支付</view>
              <view>
                入住天数：
                <text>{{item.dayCount}}天</text>
              </view>
              <view style="display: flex;flex-direction: row;">
                <!-- <view class="btn" @tap="clickCancel(item.bookOrderId)">取消订单</view> -->
                <view class="btn" @tap="clickPay(item.bookOrderId)">支付</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!-- 入住中 -->
      <view v-if="hasBeen.length > 0">
        <view class="has-been-in-box" v-for="(item,i) in hasBeen" :key="i">
          <view class="has-been-in-img-box">
            <image class="has-been-in-img" @tap="clickDetails(i)" :src="item.lodgeUnitImageUrl === null ? '../../static/images/meitu3.jpg' : shortHttp+item.lodgeUnitImageUrl" />
            <view class="title">{{item.lodgeUnitName === null ? '占无名称' : item.lodgeUnitName}}</view>
            <view class="state">{{item.state}}</view>
          </view>
          <view class="price-endtiem-box">
            <view style="text-align: left;">
              <view>
                金额：共
                <text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元
              </view>
              <view style="font-size:12px;margin:10upx 0;">入住日期：{{item.startDate}}/{{item.endDate}}</view>
            </view>
            <view style="text-align: right;">
              <!-- <text>等待客户入住</text> -->
              <view class="check-out-btn" @tap.stop="clickCheckOut(item.bookOrderId,'out')">退房</view>
              <view>
                入住天数：
                <text>{{item.dayCount}}天</text>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!-- 待退款 -->
      <view v-if="refund.length > 0">
        <view class="has-been-in-box" v-for="(item,i) in refund" :key="i" >
          <view class="has-been-in-img-box">
            <image
              class="has-been-in-img"
              :src="item.lodgeUnitImageUrl === null ? '../../static/images/meitu3.jpg' : shortHttp+item.lodgeUnitImageUrl"
              @tap="clickDetails(i)"
            />
            <view class="title">{{item.lodgeUnitName === null ? '占无名称' : item.lodgeUnitName}}</view>
            <view class="state">{{item.state}}</view>
          </view>
          <view class="price-endtiem-box">
            <view style="text-align: left;">
              <view>
                金额：共
                <text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元
              </view>
              <view style="font-size:12px;margin:10upx 0;">入住日期：{{item.startDate}}/{{item.endDate}}</view>
              <!-- <view>剩余时间<text>30:00</text></view> -->
            </view>
            <view style="text-align: right;">
              <text>等待房东确认</text>
              <!-- <view class="check-out-btn">退房</view> -->
              <view>
                入住天数：
                <text>{{item.dayCount}}天</text>
              </view>
              <!-- <view style="display: flex;flex-direction: row;">
              <view class="btn">取消</view>
              <view class="btn">支付</view>
              </view>-->
            </view>
          </view>
        </view>
      </view>
      <!-- 待入住 -->
      <view v-if="generationCheck.length > 0">
        <view
          class="has-been-in-box"
          v-for="(item,i) in generationCheck"
          :key="i"
        >
          <view class="has-been-in-img-box">
            <image
              class="has-been-in-img"
              :src="item.lodgeUnitImageUrl === null ? '../../static/images/meitu3.jpg' : shortHttp+item.lodgeUnitImageUrl"
              @tap="clickDetails(i)"
            />
            <view class="title">{{item.lodgeUnitName === null ? '占无名称' : item.lodgeUnitName}}</view>
            <view class="state">{{item.state}}</view>
          </view>
          <view class="price-endtiem-box">
            <view style="text-align: left;">
              <view>
                金额：共
                <text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元
              </view>
              <view style="font-size:12px;margin:10upx 0;">入住日期：{{item.startDate}}/{{item.endDate}}</view>
              <!-- <view>剩余时间<text>30:00</text></view> -->
            </view>
            <view style="text-align: right;">
              <view style="display: flex;flex-direction: row;">
                <view class="check-out-btn" @tap.stop="clickCancelOrder(item.bookOrderId,'cancelOrder')">取消订单</view> 
                <view class="check-out-btn" @tap.stop="clickCheckIn(item.bookOrderId,'checkIn')">确认入住</view>
              </view>
              <view>
                入住天数：
                <text>{{item.dayCount}}天</text>
              </view>
              <!-- <view style="display: flex;flex-direction: row;">
            <view class="btn">取消</view>
            <view class="btn">支付</view>
              </view>-->
            </view>
          </view>
        </view>
      </view>
      <!-- 待查房 -->
      <view v-if="wardRoundDoctor.length > 0">
        <view
          class="has-been-in-box"
          v-for="(item,i) in wardRoundDoctor"
          :key="i"
        >
          <view class="has-been-in-img-box">
            <image
              class="has-been-in-img"
              :src="item.lodgeUnitImageUrl === null ? '../../static/images/meitu3.jpg' : shortHttp+item.lodgeUnitImageUrl"
              @tap="clickDetails(i)"
            />
            <view class="title">{{item.lodgeUnitName === null ? '占无名称' : item.lodgeUnitName}}</view>
            <view class="state">{{item.state}}</view>
          </view>
          <view class="price-endtiem-box">
            <view style="text-align: left;">
              <view>
                金额：共
                <text style="color:#ef5b72;margin-right:30upx;">{{item.actualTotalPrice}}</text>元
              </view>
              <view style="font-size:12px;margin:10upx 0;">入住日期：{{item.startDate}}/{{item.endDate}}</view>
              <!-- <view>剩余时间<text>30:00</text></view> -->
            </view>
            <view style="text-align: right;">
              <text>等待房东查房...</text>
              <!-- <view class="check-out-btn">退房</view> -->
              <view>
                入住天数：
                <text>{{item.dayCount}}天</text>
              </view>
              <!-- <view style="display: flex;flex-direction: row;">
            <view class="btn">取消</view>
            <view class="btn">支付</view>
              </view>-->
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="countless" v-else>
      <image style="width:100%;height: 700upx;" src="../../static/images/deault_list.png" mode="scaleToFill"></image>
      你暂时还没有相关的订单
    </view>
    <neil-modal 
      :show="show" 
      @close="closeModal"
      align="center" 
      :content="content"
      @cancel="bindBtn('cancel')"
      @confirm="bindBtn('confirm')"
      >
    </neil-modal>
  </view>
</template>
<script>
import { request } from "../../common/request.js"; // 封装的带有token的请求方法
import { shortHttp, banner, ambitus } from "../../common/requestUrl.json"; // 接口文件
import neilModal from '../neil-modal/neil-modal'; // 引入弹出框插件
export default {
  components: {
    neilModal
  },
  data() {
    return {
      shortHttp,
      affirm: [], // 待确认
      generationCheck: [], // 带入住
      waitingPayment: [], // 等待支付
      // waitingCheck:[], 
      hasBeen: [], // 入住中
      refund: [], // 待退款
      wardRoundDoctor: [], // 待查房
      show:false, // 是否显示弹出框 *false为不显示 true为显示
      orderFromId:'', // 订单id
      content:'', // 提示信息
      status:'', // 状态
      datas:[],
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
    // 取消订单
    clickCancelOrder(id,type){
      const _that = this
      console.log(id);
      _that.show = true; // show改变为true 
      _that.orderFromId = id;
      _that.content = '是否确认取消订单';
      _that.status = type;
    },
    // 进入支付
    clickPay(id){
      console.log(id);
      uni.navigateTo({
        url:`/pages/particulars/pay?bookOrderId=${id}`
      })
    },
    // 列表数据请求
    httpRequest(){
      const _that = this;
      uni.showLoading({
        title: "加载中"
      });
      request({
        url: "/wap/api/order.php?action=list&bizState=ongoing",
        success: function(res) {
          uni.hideLoading();
          console.log("订单数据", res);
          if (res.data.status === "success") {
            let affirmData = []; // 待确认
            let generationCheckData = []; // 带入住
            let waitingPaymentData = []; // 待支付
            let hasBeenData = []; // 入住中
            let refundData = []; // 待退款
            let wardRoundDoctorData = []; // 待查房
            let dataList = res.data.content.orders;
            _that.datas = dataList
            for (let i = 0; i < dataList.length; i++) {
              let state = dataList[i].state;
              // 判断状态
              switch (state) {
                case "待确认":
                  affirmData.push(dataList[i]);
                  break;
                case "待退款":
                  refundData.push(dataList[i]);
                  break;
                case "待查房":
                  wardRoundDoctorData.push(dataList[i]);
                  break;
                case "入住中":
                  hasBeenData.push(dataList[i]);
                  break;
                case "待入住":
                  generationCheckData.push(dataList[i]);
                  break;
                case "待付款":
                  waitingPaymentData.push(dataList[i]);
                  break;
              }
            }
            _that.affirm = affirmData;
            _that.refund = refundData;
            _that.wardRoundDoctor = wardRoundDoctorData;
            _that.hasBeen = hasBeenData;
            _that.generationCheck = generationCheckData;
            _that.waitingPayment = waitingPaymentData;
          } else {
            uni.showToast({
              title: res.data.errorMsg,
              icon: "none"
            });
          }
        }
      });
    },
    // 确认入住
    clickCheckIn(id,type){
      console.log("确认入住",id,type);
      const _that =this;
      _that.show = true; // show改变为true 
      _that.orderFromId = id;
      _that.content = '是否确认入住';
      _that.status = type;
    },
    // 退房
    clickCheckOut(id,type){
      const _that =this;
      _that.show = true; // show改变为true 
      _that.orderFromId = id;
      _that.content = '是否确认退房，退房后等待房东查房完后，退返押金';
      _that.status = type;
    },
   /*  // 点击待支付取消按钮显示弹框
    clickCancel(id){
      const _that =this;
      _that.show = true; // show改变为true 
      _that.orderFromId = id;
    }, */
    closeModal() {
      console.log(`监听到close`)
      this.show = false
    },
    bindBtn(type) {
      const _that = this;
      /* 
      checkIn:确认入住标识
      cancelOrder:取消订单标识
      out:退房标识
       */
      if (_that.status === 'checkIn') {
        if (type ==='confirm') {
          request({
            url:'/wap/api/order.php?action=changeState&',
            data:{id:_that.orderFromId},
            success: function(res) {
              if (res.data.status === 'success') {
                console.log("确认入住",res);
                uni.showToast({
                  title:'入住成功',
                  icon:'none'
                });
                setTimeout(()=>{
                  _that.httpRequest()
                },2000)
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
      } else if (_that.status === 'cancelOrder') {
        if (type ==='confirm') {
          request({
            url:'/wap/api/order.php?action=changeState&status=cancle',
            data:{id:_that.orderFromId},
            success: function(res) {
              if (res.data.status === 'success') {
                console.log("取消订单",res);
                uni.showToast({
                  title:'取消成功',
                  icon:'none'
                });
                setTimeout(()=>{
                  _that.httpRequest()
                },2000)
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
      } else if (_that.status === 'out') { // 退房
        if (type ==='confirm') {
          request({
            url:'/wap/api/order.php?action=changeState',
            data:{id:_that.orderFromId},
            success: function(res) {
              if (res.data.status === 'success') {
                console.log("退房",res);
                uni.showToast({
                  title:'退房成功',
                  icon:'none'
                });
                setTimeout(()=>{
                  _that.httpRequest()
                },2000)
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
    }

  },
  mounted() {
    const _that = this;
    _that.httpRequest()
  }
};
</script>
<style>
page{
  height: 100%;
}
</style>

<style lang="scss" scoped>
.unclosed-contanier {
  width: 100%;
  height: 100%;
  font-size: 14px;
  position: relative;
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
      .state {
        position: absolute;
        top: 0;
        right: 30upx;
      }
    }

    .price-endtiem-box {
      width: 100%;
      padding: 30upx;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  .btn {
    width: 140upx;
    height: 60upx;
    background-color: #1592c8;
    border-radius: 10upx;
    text-align: center;
    line-height: 60upx;
    color: #fff;
    &:nth-of-type(2) {
      margin-left: 10upx;
    }
    &:active {
      opacity: 0.5;
    }
  }
  .has-been-in-box {
    width: 100%;
    margin-top: 30upx;
    border-bottom: 1px solid #adadad;
    .has-been-in-img-box {
      width: 100%;
      height: 460upx;
      padding: 40upx 80upx;
      box-sizing: border-box;
      background-color: #ececec;
      position: relative;
      .has-been-in-img {
        width: 100%;
        height: 100%;
        border-radius: 60upx;
      }
      .title {
        position: absolute;
        left: 30upx;
        bottom: 0;
      }
      .state {
        position: absolute;
        top: 0;
        right: 30upx;
      }
    }
    .price-endtiem-box {
      width: 100%;
      padding: 30upx;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .check-out-btn {
        font-size: 24upx;
        width: 132upx;
        height: 60upx;
        color: #fff;
        background-color: #1592c8;
        border-radius: 10upx;
        text-align: center;
        line-height: 60upx;
        margin-bottom: 10upx;
        &:nth-of-type(2){
          margin-left: 10upx;
        }
        &:active {
          opacity: 0.5;
        }
      }
    }
  }
  .refreshDisplay{
    position: absolute;
    top: -52upx;
    right: 20upx;
    color: #1592c8;
    .shuaxin{
      font-size: 30upx;
      margin-right: 20upx;
    }
    
  }
  .countless{
    width: 100%;
    height: 100%;
    background-color: #efefef;
  }
}
</style>

