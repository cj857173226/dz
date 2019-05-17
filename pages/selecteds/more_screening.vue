<template>
  <view class="contanier">
    <view class="price-box">
      <view>价格<text style="margin-left:20upx;">不限</text></view>
      <view class="price-input">
        <view class="labes"><label>最低:</label><input :value="low" class="input" @blur="lowBulr" placeholder="请输入最低价格"  type="number"/>元</view>
        －
        <view class="labes"><label>最高:</label><input :value="tall" class="input" @blur="tallBulr" placeholder="请输入最高价格"  type="number"/>元</view>
      </view>
    </view>
    <view class="rent-out-box">
      <view>出租类型（多选）</view>
      <view class="rent-out">
        <view class="room-box" :class="item.pitch===false?'room-box':'room-boxs'" @tap="clickPitch(i)" v-for="(item,i) in iconList" :key="i">
          <view class="room" :class="item.pitch===false?'room':'rooms'">
            <text class="iconfont zhengtao" :class="item.icon" ></text>
          </view>
          {{item.title}}
        </view>
      </view>
    </view>
    <view class="max-livable-box">
      <view>最多宜居</view>
      <view class="radio-box">
        <radio-group class="radio-group-box" @change="radioChange">
          <view class="uni-list-cell" v-for="(item, index) in items" :key="item.value">
            <radio color="#f05b72" :value="item.value" :checked="index === current" /><text>{{item.name}}</text>
          </view>
        </radio-group>
      </view>
    </view>
    <view class="btn-box">
      <view class="btn" @click="clickConfirm">确定</view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      low:'', // 最低价格
      tall:'', // 最低价格
      iconList:[
        {title:'整套出租',icon:'icon-type_zhengtao',pitch:false},
        {title:'单间出租',icon:'icon-danjian',pitch:false},
        {title:'合租房间',icon:'icon-hezu',pitch:false},
      ],
      items: [{
        value: '0',
        name: '不限',
        checked: 'true'
      },
      {
        value: '1',
        name: '1人'
        
      },
      {
        value: '2',
        name: '2人'
      },
      {
        value: '3',
        name: '3人'
      },
      {
        value: '4',
        name: '4人'
      },
      {
        value: '5',
        name: '5人'
      },
      {
        value: '6',
        name: '6人'
      },
      {
        value: '7',
        name: '7人'
      },
      {
        value: '8',
        name: '8人'
      },
      {
        value: '9',
        name: '9人'
      },
      {
        value: '10',
        name: '10+'
      },
  ],
  current: 0
    }
  },
  methods: {
    // 点击切换样式
    clickPitch(index){
      this.iconList[index].pitch = !this.iconList[index].pitch;
    },
    // 最低的失焦事件
    lowBulr(e){
      this.low = e.detail.value;
    },
    // 最高的失焦事件
    tallBulr(e){
      this.tall = e.detail.value;
    },
    // 提交筛选条件
    clickConfirm(){
      const _this = this;
      let ary =this.iconList;
      for (let i = 0; i < ary.length; i++) {
        console.log(ary[i].pitch);
      }
    },
    radioChange(e){
      console.log(e);
      
    }
  }
}
</script>

<style lang="scss" scoped>
.contanier{
  width: 100%;
  height: 100%;
  font-size: 28upx;
  padding: 30upx 0;
  .price-box{
    width: 100%;
    padding: 30upx;
    box-sizing: border-box;
    background-color: #efefef;
    .price-input{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30upx;
      .labes{
        display: flex;
        align-items: center;
        .input{
          width: 200upx;
          margin-left: 10upx;
          margin-right: 10upx;
        }
      }
    }
  }
  .rent-out-box{
    width: 100%;
    padding: 30upx;
    box-sizing: border-box;
    .rent-out{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      margin-top: 30upx; 
      .room-box{
        width: 120upx;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-right: 30upx;
        .room{
          width: 80upx;
          height: 80upx;
          border: 2upx dashed #000;
          border-radius: 50%;
          text-align: center;
          line-height: 80upx;
          margin-bottom: 10upx;
          .zhengtao{
            font-size: 60upx;
          }
        }
      }
      .room-boxs{
        width: 120upx;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-right: 30upx;
        color: #f05b72;
        .rooms{
          width: 80upx;
          height: 80upx;
          border: 2upx solid #f05b72;
          border-radius: 50%;
          text-align: center;
          line-height: 80upx;
          margin-bottom: 10upx;
        }
      }
    }
  }
  .max-livable-box{
    width: 100%;
    background-color: #efefef;
    padding:30upx;
    box-sizing: border-box;
    .radio-box{
      width: 100%;
      margin-top: 30upx;
      .radio-group-box{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        .uni-list-cell{
          width: 136upx;
          height: 80upx;
          display: flex;
          align-items: center;
        }
      }
    }
  }
  .btn-box{
    width: 100%;
    height: 140upx;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 30upx;
    box-sizing: border-box;
    box-shadow: 0 -2upx 0 0  #b7b6b6;
    .btn{
      width: 100%;
      height: 80upx;
      background: #f05b72;
      color: #fff;
      text-align: center;
      line-height: 80upx;
      border-radius: 10upx;
    }
  }
}
</style>
