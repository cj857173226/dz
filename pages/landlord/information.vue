<template>
  <view class="centenr">
    <view class="china" v-if="show">
      <view class="identity-card">
        <label class="name">真实姓名</label>
        <input class="name-card" placeholder="请输入证件上的真实姓名" type="text"/>
      </view>
      <view class="identity-card">
        <label class="name">身份证号</label>
        <input class="name-card" placeholder="请输入身份证号码" type="idcard"/>
      </view>
      <view class="hint" @tap='onShow'>如你是非中国大陆地区用户，请点击这里▶</view>
    </view>
    <view class="china" v-else>
      <view class="identity-card">
        <label class="name">真实姓名</label>
        <input class="name-card" placeholder="请输入证件上的真实姓名" type="text"/>
      </view>
      <view class="identity-card">
        <label class="name">护照所属国家或地区</label>
        <view class="name-card">请选择<text class="iconfont">&#xe65e;</text></view>
      </view>
      <view class="identity-card">
        <label class="name">护照号</label>
        <input class="name-card" placeholder="请输入护照号" type="idcard"/>
      </view>
      <view class="hint" @tap='onShow'>如你是中国大陆地区用户，请点击这里填写▶</view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      show:true,
      // hidden:false
    }
  },
  methods: {
    // 切换是中国还是国外的填写信息
    onShow:function(){
      this.show=!this.show
    }
  }
};
</script>

<style lang="scss" scoped>
.centenr {
  width: 100%;
  padding: 0 30upx;
  box-sizing: border-box;
  .china {
    width: 100%;
    .identity-card {
      height: 40upx;
      padding: 20upx 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ececec;
      font-size: 14px;
      .name {
        font-weight: 600;
      }
      .name-card {
        width: 360upx;
        text-align: right;
        color: #777777;
      }
    }
    .hint{
      font-size: 12px;
      font-weight: bold;
      text-align: center;
      margin-top: 30upx;
    }
  }
}
</style>

