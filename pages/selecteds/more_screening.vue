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
        <view class="room-box" :class="item.pitch===false?'room-box':'room-boxs'" @tap="clickPitch(i,item.type)" v-for="(item,i) in iconList" :key="i">
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
        <view class="radio" v-for="(item,i) in items" :key="i">
          <view class="pitch" @click="radioChange(i,item.value)" ><text v-if="item.isShow" class="iconfont xuanzhong">&#xe64b;</text></view>
          {{item.name}}
        </view>
       <!--  <radio-group class="radio-group-box" @change="radioChange">
          <view class="uni-list-cell" v-for="(item, index) in items" :key="item.value">
            <radio color="#f05b72" :value="item.value" :checked="item.value === current" /><text>{{item.name}}</text>
          </view>
        </radio-group> -->
      </view>
    </view>
    <view class="btn-box">
      <view class="btn" @click="clickConfirm">确定</view>
    </view>
  </view>
</template>
<script>
import { request } from '../../common/request';
export default {
  data () {
    return {
      low:'', // 最低价格
      tall:'', // 最低价格
      ary:'', // 出租类型选择搜索的值
      livable:'',// 宜居
      // isShow:false,
      iconList:[
        {title:'整套出租',icon:'icon-type_zhengtao',pitch:false,type:'room'},
        {title:'单间出租',icon:'icon-danjian',pitch:false,type:'whole'},
        {title:'合租房间',icon:'icon-hezu',pitch:false,type:'share'},
      ],
      items: [
        {value: '0',name: '不限',isShow:true},
        {value: '1',name: '1人',isShow:false},
        {value: '2',name: '2人',isShow:false},
        {value: '3',name: '3人',isShow:false},
        {value: '4',name: '4人',isShow:false},
        {value: '5',name: '5人',isShow:false},
        {value: '6',name: '6人',isShow:false},
        {value: '7',name: '7人',isShow:false},
        {value: '8',name: '8人',isShow:false},
        {value: '9',name: '9人',isShow:false},
        {value: '10',name: '10+',isShow:false},
      ],
    // current: '0'
    }
  },
  // 有上角清楚事件
  onNavigationBarButtonTap(e){
    console.log('11111',e)
    this.low = ''; // 清空最低价
    this.tall = ''; // 清空最高价
    // 清空出租类型
    let array = this.iconList
    for (let i = 0; i < array.length; i++) {
      array[i].pitch = false
    }
    let ary = this.items;
      for (let i = 0; i < ary.length; i++) {
        ary[i].isShow = false;
      }
    this.items[0].isShow = true;
  },
  methods: {
    // 点击切换样式
    clickPitch(index,type){
      this.iconList[index].pitch = !this.iconList[index].pitch;
      let array = this.iconList;
      let genre = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i].pitch == true) {
          genre.push(array[i].type)
        }
      }
      this.ary = genre.join('|')
    },
    // 最低的失焦事件
    lowBulr(e){
      this.low = e.detail.value;
    },
    // 最高的失焦事件
    tallBulr(e){
      this.tall = e.detail.value;
    },
    // 最多宜居单选触发事件
    radioChange(index,type){
      // 判断type的值，如果是10和0则livable为空
      if (type != '10' && type != '0') {
        console.log('1');
        
        this.livable = type
      } else {
        console.log('2');
        this.livable = ''
      }
      let array = this.items;
      for (let i = 0; i < array.length; i++) {
        array[i].isShow = false;
      }
      // 修改当前点击的索引的isShow为true
      this.items[index].isShow = true;
    },
    // 提交筛选条件
    clickConfirm(){
      const _this = this;
      let lowPrice = _this.low; // 最低价
      let tallPrice = _this.tall; // 最高价
      let LeaseType = _this.ary; // 出租类型
      let livable = _this.livable; // 宜居人数
      uni.navigateTo({
        url:`/pages/selecteds/selecteds?mold=more&low=${lowPrice}&tall=${tallPrice}&lease=${LeaseType}&livable=${livable}`
      })
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .radio{
        display: flex;
        align-items: center;
        margin-top: 30upx;
        .pitch{
          width: 50upx;
          height: 50upx;
          border-radius: 50%;
          background-color: #fff;
          text-align: center;
          line-height: 50upx;
          margin-right: 20upx;
          .xuanzhong{
            font-size: 50upx;
            color: #f05b72;
          }
        }
      }
      /* .radio-group-box{
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
      } */
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
