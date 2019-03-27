<template>
  <view class="container">
    <view class="title">配套设施</view>
    <view class="supporting-box">
      <view class="box" v-for="(v,i) in listData" :key="i">
        <text class="left">
          <text class="iconfont color-icon" :class="v.leftIcon"></text><text>{{v.leftText}}</text></text>
        <text class="right">
          <text class="iconfont color-icon" :class="v.rightIcon"></text><text>{{v.rightText}}</text>
        </text>
      </view>
    </view>
  </view>
</template>
<script>

export default {
  data(){
    return{
      listData:[
        {leftText:'牙具',rightText:'香皂',leftIcon:'icon-yaju',rightIcon:'icon-xiangzao_'},
        {leftText:'毛巾',rightText:'沐浴 洗发水',leftIcon:'icon-maojin_',rightIcon:'icon-muyulu'},
        {leftText:'手纸',rightText:'热水淋浴',leftIcon:'icon-weishengzhi_',rightIcon:'icon-reshui'},
        {leftText:'浴缸',rightText:'拖鞋',leftIcon:'icon-yugang',rightIcon:'icon-tuoxie'},
        {leftText:'电视',rightText:'空调',leftIcon:'icon-dianshi',rightIcon:'icon-kongdiao'},
        {leftText:'冰箱',rightText:'饮水设备',leftIcon:'icon-bingxiang',rightIcon:'icon-yinshuiji'},
        {leftText:'洗衣机',rightText:'有线网络',leftIcon:'icon-xiyiji',rightIcon:'icon-youxianwangluo'},
        {leftText:'无线网络',rightText:'暖气',leftIcon:'icon-wuxianwangluo',rightIcon:'icon-nuanqi'},
        {leftText:'电梯',rightText:'门禁系统',leftIcon:'icon-icon_lift',rightIcon:'icon-webiconmenjinxitong'},
        {leftText:'停车位',rightText:'允许带宠物',leftIcon:'icon-tingche',rightIcon:'icon-yunxudaichongwu'},
        {leftText:'允许聚会',rightText:'允许吸烟',leftIcon:'icon-faci_juhui',rightIcon:'icon-kexiyan'}

      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .container{
    width: 100%;
    box-sizing: border-box;
    .title{
      font-weight: bold;
      text-align: center;
    }
    .supporting-box{
      width: 100%;
      padding: 40upx;
      box-sizing: border-box;
      .box{
        width: 100%;
        height: 72upx;
        color:#a5a5a5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        .left{
          font-size: 14px;
          .color-icon{
            font-size: 18px;
          }
        }
        .right{
          font-size: 14px;
          .color-icon{
            font-size: 18px;
          }
        }
      }
    }
  }
</style>


