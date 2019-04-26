<template>
  <view class="contanier">
    <view class="top-box">
      <image class="top-caption-img" :src="shortHttp+ImageUrl"></image>
      <view class="title">{{title}}</view>
    </view>
    <view class="time-box">
      <view class="affirm-box" @click="onShowDatePicker('range')">
        <view class="week-box">
          <view class="week">{{startDay}}</view>
          <view class="date">{{startTime}}</view>
        </view>
        <text class="iconfont xiegang">&#xe67e;</text>
        <view class="week-box">
          <view class="week">{{endDay}}</view>
          <view class="date">{{endTime}}</view>
        </view>
      </view>
      <view class="check-time">
        <text>入住时段</text>
        <view>
          <text>{{day}}</text>
          <text class="iconfont">&#xe644;</text>
        </view>
      </view>
      <view></view>
      <view class="border"></view>
      <view v-if="listData.length > 0">
        <view class="check-person-box" v-for="(item,index) in listData" :key="index">
          <view class="name-box">
            <text class="name">{{item.name}}</text>
            <view class="icon-box">
              <text class="iconfont xiugai" @tap="clickAmend(item.name,item.idcardno,item.id)">&#xe645;</text>
              <text class="shanchu" @tap="clickDelete(index)">—</text>
            </view>
          </view>
          <view class="nformation-complete" >{{item.idcardno == "" ? "信息不完整" : "信息完整，免费获赠保险"}}</view>
        </view>
      </view>
      <view class="add-check-in" @tap="clickCheck">添加入住人</view>
      <view class="booking-people-box">
        <view class="booking-people">预订人:{{nickname}}</view>
        <view class="cell-phone-number">+86 {{phone}}</view>
      </view>
    </view>
    <view class="list-box">
      <view class="voucher">
        <text>代金券</text>
        <text style="color:rgb(191, 188, 188)">占代金券</text>
      </view>
      <view class="voucher">
        <text>开具发票</text>
        <text class="iconfont">&#xe65e;</text>
      </view>
      <view class="voucher">
        <text>押金</text>
        <text>{{cashplege != 0 ? cashplege : "不收取押金" }}</text>
      </view>
      <view class="online-payment-detail-box">
        <view class="online-payment-box">
          <text>需在线支付</text>
          <view class="price">{{orderPrice}}</view>
        </view>
        <view class="detail-box">
          <text>查看明细</text>
          <text class="iconfont">&#xe65e;</text>
        </view>
      </view>
    </view>
    <view class="rule-protocol-box">
      <view class="rule-box">
        <view class="unsubscribe-rules-box">
          <text class="unsubscribe-rules-title">退订规则</text>
          <view class="unsubscribe-rules-conter">根据房顶设置的交易规则你将不能享受无责取消权益。若退订将被扣除取消订单哪弄if糊弄if年全年富婆安防破案翻盘发票</view>
        </view>
        <view class="regulation-box">
          <text class="regulation-title">入住规定</text>
          <view class="regulation-conter">不允许做饭。不允许带宠物，不允许聚会。允许吸烟。不接待境外人士。入那就AVOK案破案破昂破案AV哪骗你破</view>
        </view>
      </view>
      <view class="contract-box">
        <label @click="checkedTorF">
          <radio :checked="choice" color="#EA516B" />
        </label>
        <view class="contract-conter">
          我同意<text style="color:#000">《小猪服务协议》</text><text style="color:#000">《房客规则》</text><text style="color:#000">《意外健康险保险告知书》</text><text style="color:#000">《无忧取消险保险告知书》</text>及房东规定的退订规则及入住要求
        </view>
      </view>
    </view>
    <view class="submit-btn">
      <view class="btn" @tap="clickSubmit">提交订单</view>
    </view>
    <mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="'入住'" :end-text="'离店'" color="#f05b72" :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
  </view>
</template>
<script>
import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue"; // 引入时间组件
import {request} from '../../common/request.js' // 封装的带有token的请求方法
import {shortHttp,room} from "../../common/requestUrl.json"; // 接口文件
// import {mapState,mapMutations} from 'vuex'
export default {
  components: {MxDatePicker},
  data () {
    return {
      shortHttp,
      choice:false, // radio组件是否勾选
      showPicker: false, // 是否显示时间组件  显示：true 不显示：false
      type: 'range',  //时间插件类型  可选值：date（日期）、time（时间）、datetime（日期时间）、range（日期范围）、rangetime（日期时间范围）
      value: '',
      day:null, //日历选择的天数,
      startTime:null,
      endTime:null,
      orderPrice:'', // 订单结算的价格
      luId:'', // 房源id
      endTime:'', // 结束时间
      startTime:'', // 开始时间
      startDay:'', // 开始时间星期几
      endDay:'', // 结束时间星期几
      day:'', // 总共几晚
      ImageUrl:null, // 图片地址
      title:'', // 标题
      cashplege:null, // 押金
      price:'', // 房间价格
      orderPrice:'', // 计算价格
      nickname:'', // 用户昵称
      phone:'', // 用户手机号
      listData:[],
    }
  },
  computed: {
		// ...mapState(['isEditCheck'])
	},
  onLoad(option){
    console.log(option);
    
    let whatDay = new Date(option.endTime).getDay();
    let whatsDay = new Date(option.startTime).getDay();
    this.luId = option.luId;
    this.endTime = option.endTime;
    this.startTime = option.startTime;
    this.day = option.day;
    this.price = option.price;
    this.orderPrice = option.orderPrice
    switch (whatsDay) {
      case 0:
        this.startDay = "星期日"
        break;
      case 1:
        this.startDay = "星期一"
        break;
      case 2:
        this.startDay = "星期二"
        break;
      case 3:
        this.startDay = "星期三"
        break;  
      case 4:
        this.startDay = "星期四"
        break;
      case 5:
        this.startDay = "星期五"
        break;
      case 6:
        this.startDay = "星期六"
        break;
    };
    switch (whatDay) {
      case 0:
        this.endDay = "星期日"
        break;
      case 1:
        this.endDay = "星期一"
        break;
      case 2:
        this.endDay = "星期二"
        break;
      case 3:
        this.endDay = "星期三"
        break;  
      case 4:
        this.endDay = "星期四"
        break;
      case 5:
        this.endDay = "星期五"
        break;
      case 6:
        this.endDay = "星期六"
        break;
    }
    this.particulars();
    // 获取本地储存的用户信息
    uni.getStorage({
      key:"dz_userInfo",
      success:res => {
        this.nickname = res.data.nickname
        this.phone = res.data.phone
      }
    })
  },
  methods: {
    // ...mapMutations(['checkIn']),
    // 调整时间
    onShowDatePicker(type){//显示
      this.type = type;
      this.showPicker = true;
      this.value = this[type];
    },
    onSelected(e) {//选择
      this.showPicker = false;
      if(e) {
        this[this.type] = e.value; 
        //选择的值
        console.log('value => '+ e.value+"");
        let tiem = e.value
        let arrayTime = tiem.slice(0,12);
        // // console.log("开始时间",startTime);
        let startTime,endTime;
        for (let index = 0; index < arrayTime.length; index++) {
          startTime = arrayTime[0];
          endTime = arrayTime[1];
        }
        // console.log("shenme"+startTime);
        this.startTime = startTime;
        this.endTime = endTime;
        let d1 = new Date(startTime);
        let d2 = new Date(endTime);
        let t = Math.abs((d1-d2) / 3600000 / 24);
        console.log(t);
        
        this.day = t + "晚";
        this.orderPrice = "￥" + this.price * t; // 拿到当前房源的价格乘于选定的天数得到总价格
        //原始的Date对象
        // console.log('date => ' + e.date);
      }
		},
    checkedTorF(){
      this.choice = !this.choice
    },
    clickSubmit(){
      const _that = this
      let data = JSON.stringify(_that.listData);
      console.log(data)
      if (_that.choice === false) {
        uni.showToast({
          title:"你未同意相关条款，不可下单",
          icon:"none"
        })
      } else if (_that.listData.length == 0) {
        uni.showToast({
          title:"请添加入住人",
          icon:"none"
        })
      } else {
        request({
          url:'/wap/api/book.php?action=submit',
          data:{luId:_that.luId,startDate:_that.startTime,endDate:_that.endTime,roomNum:'1',tenants:data},
          success:res => {
            console.log("提交订单：",res);
            if (res.data.status === "success") {
              uni.navigateTo({
                url:`/pages/particulars/pay?bookOrderId=${res.data.content.bookOrderId}`
              })
            } else {
              uni.showToast({
                title:res.data.errorMsg,
                icon:"none"
              })
            }
          },
          fail:function(err){
            uni.showToast({
              title:"系统错误",
            })
          }
        })
        
      }
    },
    particulars(){
      const _that = this;
      request({
        url:room,
        data:{luId:_that.luId},
        success: function(res) {
          // console.log('数据：'+res.data);
          let arrayImg = res.data.content.images;
          let img;
          for (let index = 0; index < arrayImg.length; index++) {
            img = arrayImg[0].bigImgUrl;
          };
          _that.ImageUrl = img;
          _that.title = res.data.content.luBase.lodgeUnitName;
          _that.cashplege = res.data.content.detail.cashplege;
        }
      })
    },
    clickDelete(type){
      // 删除回调函数
      let array = this.listData
      let a = array.indexOf(type);
      array.splice(a,1);
    }, 
    clickCheck(){ // 跳转到添加入住人页面
      uni.navigateTo({
        url:'/pages/particulars/selectors'
      })
    },
    clickAmend(name,idcardno,id){ // 编辑
      console.log(name,idcardno,id);
      uni.navigateTo({
        url:`/pages/particulars/editor_check_in?name=${name}&idcardno=${idcardno}&id=${id}&type=indent`
      })
    }
  },
  onShow(){
    let listData=[];
    let data = this.$store.state.addCheckin;
    this.listData = data
  }
}
</script>
<style lang="scss" scoped>
.contanier{
  width: 100%;
  .top-box{
    width: 100%;
    height: 180upx;
    padding: 30upx;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    border-bottom: 1px solid #efefef;
    .top-caption-img{
      width: 180upx;
      height: 120upx;
    }
    .title{
      font-weight: 600;
      margin-left: 30upx;
    }
  }
  .time-box{
    width: 100%;
    background-color: #efefef;
    padding: 30upx;
    box-sizing: border-box;
    font-size: 14px;
    .check-time{
      width: 100%;
      height: 80upx;
      background-color: #EA516B;
      border-radius: 10upx;
      line-height: 80upx;
      color: #fff;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 30upx;
      box-sizing: border-box;
      margin-top: 40upx;
    }
    .affirm-box{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .xiegang{
        font-size: 58px;
        color: #909090;
      }
      .week-box{
        &:nth-of-type(2){
          text-align: right;
        }
        .date{
          margin-top: 30upx;
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
    .border{
      height: 40upx;
      width: 100%;
      border-bottom: 2upx solid #b5b5b5;
    }
    .check-person-box{
      width: 100%;
      margin-top: 30upx;
      .name-box{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .name{
          font-size: 16px;
          font-weight: 600;
        }
        .icon-box{
          .xiugai{
            font-size: 14px;
            margin-right: 30upx;
          }
          .shanchu{
            font-size: 14px;
          }
        }
      }
      .nformation-complete{
        color: #969595;
      }
    }
    .add-check-in{
      width: 200upx;
      height: 60upx;
      border:1px solid #F83D74;
      color: #F83D74;
      text-align: center;
      line-height: 60upx;
      font-size: 14px;
      margin: 40upx 0;
    }
    .booking-people-box{
      font-size: 14px;
      .booking-people{
        font-weight: 600;
      }
      .cell-phone-number{
        color: #a09b9b;
      }
    }
  }
  .list-box{
    width: 100%;
    padding: 30upx;
    box-sizing: border-box;
    background-color: #efefef;
    margin-top: 30upx;
    .voucher{
      width: 100%;
      height: 80upx;
      background-color: #fff;
      border-radius: 8upx;
      border: 1px solid #d4cdcd;
      display: flex;
      align-items: center;
      line-height: 80upx;
      flex-direction: row;
      justify-content:space-between;
      font-size: 14px; 
      padding: 0 30upx;
      box-sizing: border-box;
      margin-bottom: 20upx;
    }
    .online-payment-detail-box{
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 10upx;
      font-size: 14px;
      padding: 0 30upx;
      box-sizing: border-box;
      .online-payment-box{
        color: #F83D74;
        .price{
          font-size: 16px;
          font-weight: 600;
        }
      }
      .detail-box{
        font-size: 12px;
        color: #000;
      }
    }
  }
  .rule-protocol-box{
    width: 100%;
    padding: 30upx;
    box-sizing: border-box;
    background-color: #efefef;
    margin-top: 30upx;
    .rule-box{
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .unsubscribe-rules-box{
        width: 335upx;
        height: 200upx;
        background-color: #eae4e6;
        font-size: 14;
        padding: 20upx;
        box-sizing: border-box;
        .unsubscribe-rules-conter{
          width: 100%;
          font-size: 12px;
          margin-top: 20upx;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          color: #969595;
        }
        .unsubscribe-rules-title{
          font-weight: 600;
          font-size: 14px;
        }
      }
      .regulation-box{
        width: 335upx;
        height: 200upx;
        background-color: #eae4e6;
        font-size: 14;
        padding: 20upx;
        box-sizing: border-box;
        .regulation-conter{
          width: 100%;
          font-size: 12px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          margin-top: 20upx;
          color: #969595;
        }
        .regulation-title{
          font-weight: 600;
          font-size: 14px;
        }
      }
    }
    .contract-box{
      width: 100%;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      margin-top: 30upx;
      margin-bottom: 140upx;
      .contract-conter{
        color: #969595;
      }
    }
  }
  .submit-btn{
    width: 100%;
    height: 140upx;
    padding: 30upx;
    box-sizing: border-box;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    .btn{
      width: 100%;
      height: 80upx;
      text-align: center;
      line-height: 80upx;
      color: #F83D74;
      border: 1px solid #f83d74;
      &:active{
        opacity: .5;
      }
    }
  }
}
</style>
