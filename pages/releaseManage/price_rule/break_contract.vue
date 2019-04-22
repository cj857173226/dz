<template>
  <view class="contanier">
    <view class="price-amount" @tap="fullRefund('sum')">
      <label class>全额退款天数</label>
      <view class="amout-box">
        <text>{{fullRefunds}}</text>
        <text class="iconfont">&#xe65e;</text>
      </view>
    </view>
    <view class="price-amount" @tap="fullRefund('balance')">
      <label class>违约取消扣款天数</label>
      <view class="amout-box">
        <text>{{balanceRefund}}</text>
        <text class="iconfont">&#xe65e;</text>
      </view>
    </view>
    <uni-steps
      :data="list"
      direction="column"
      :active="2"
      active-color="#f05b72"
    ></uni-steps>
    <mpvue-picker
      ref="similarPicker"
      :mode="mode"
      :deepLength="deepLength"
      :pickerValueDefault="pickerValueDefault"
      @onConfirm="similarConfirm"
      @onCancel="similarCancel"
      :pickerValueArray="pickerValueArray"
    ></mpvue-picker>
  </view>
</template>
<script>
import mpvuePicker from "../../../components/mpvue-picker/mpvuePicker.vue";
import uniSteps from "../../../components/particulars/plug/uni-steps/uni-steps.vue" //第三方步骤插件
export default {
  components: { mpvuePicker,uniSteps },
  data() {
    return {
      fullRefunds: "1天", //全额退款天数
      balanceRefund: "1天", // 违约取消扣款天数
      //房源基本类型信息
      deepLength: 1,
      mode: "selector",
      pickerValueDefault: [0],
      pickerValueArray: [
        {
          label: "1天",
          value: 1
        },
        {
          label: "2天",
          value: 2
        },
        {
          label: "3天",
          value: 3
        },
        {
          label: "4天",
          value: 4
        },
        {
          label: "5天",
          value: 5
        },
        {
          label: "6天",
          value: 6
        },
        {
          label: "7天",
          value: 7
        }
      ],
      similarType: "",
      list:[
        {title:'预定成功',desc:'如取消订单，定金全部退返'},
        {title:'入住前一天 14:00前',desc:'如提前退房，扣除一天后订金'},
        {title:'入住当天 14:00前',desc:'如提前退房，扣除一天后订金'},
        {title:'退房当天 12:00 前',desc:''}]
    };
  },
  methods: {
    fullRefund: function(teyp) {
      //点击开启
      // console.log(teyp);
      this.similarType = teyp; // 接收参数复制给similarType
      this.$refs.similarPicker.show(); //开启方法
    },
    similarConfirm: function(e) {
      //picker 组件点击确定时回调，返回选中的 label, value 和数组索引 index 的值
      if (this.similarType == "sum") {
        this.fullRefunds = e.label;
      } else if (this.similarType == "balance") {
        this.balanceRefund = e.label;
      }
    },
    similarCancel: function() {
      //picker 组件点击取消时回调，返回选中的 label, value 和数组索引 index 的值
    }
  },
  onBackPress() {
    if (this.$refs.similarPicker.showPicker) {
      this.$refs.similarPicker.pickerCancel();
      return true;
    }
  }
};
</script>
<style lang="scss" scoped>
.contanier {
  width: 100%;
  padding: 0 30upx;
  box-sizing: border-box;
	label{
		font-size: 32upx;
	}
  .price-amount {
    width: 100%;
    padding: 20upx 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f4f4f4;
    .amout-box {
      display: flex;
			align-items: center;
      .amount {
        text-align: right;
        width: 300upx;
      }
			.iconfont{
				padding-top: 4upx;
				display: block;
				font-size: 32upx;
				color: #cccccc;
			}
    }
  }
}
</style>
