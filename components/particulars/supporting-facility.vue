<template>
  <view class="containers">
    <view class="title">配套设施</view>
    <view v-if="dataArray.length>0" class="supporting-box">
      <view class="box">
        <view class="icon-box" v-for="(v,i) in dataArray" :key="i">
            <text class="iconfont color-icon" :class="v.leftIcon"></text>
            <view style="font-size:12px;">{{v.leftText}}</view>
        </view>
      </view>
    </view>
    <view v-else class="else-supporting-box">
        占无，敬请等待房东上传...
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      dataArray: []
    };
  },
  props: ["facility"],
  mounted() {
    let data = this.facility; // 拿到从父组件穿过来的参数
    console.log(data);
    if (data != null) {
      // 循环
    data.forEach(element => {
      let allowName = element.name;
      switch (allowName) {
        case "牙具":
          this.dataArray.push({ leftText: "牙具", leftIcon: "icon-yaju" });
          break;
        case "香皂":
          this.dataArray.push({
            leftText: "香皂",
            leftIcon: "icon-xiangzao_"
          });
          break;
        case "毛巾":
          this.dataArray.push({ leftText: "毛巾", leftIcon: "icon-maojin_" });
          break;
        case "沐浴":
          this.dataArray.push({ leftText: "沐浴", leftIcon: "icon-muyulu" });
          break;
        case "手纸":
          this.dataArray.push({
            leftText: "手纸",
            leftIcon: "icon-weishengzhi_"
          });
          break;
        case "热水淋浴":
          this.dataArray.push({
            leftText: "热水淋浴",
            leftIcon: "icon-reshui"
          });
          break;
        case "浴缸":
          this.dataArray.push({ leftText: "浴缸", leftIcon: "icon-yugang" });
          break;
        case "拖鞋":
          this.dataArray.push({ leftText: "拖鞋", leftIcon: "icon-tuoxie" });
          break;
        case "电视":
          this.dataArray.push({ leftText: "电视", leftIcon: "icon-dianshi" });
          break;
        case "空调":
          this.dataArray.push({
            leftText: "空调",
            leftIcon: "icon-kongdiao"
          });
          break;
        case "冰箱":
          this.dataArray.push({ leftText: "冰箱", leftIcon: "icon-bingxiang" });
          break;
        case "饮水设备":
          this.dataArray.push({
            leftText: "饮水设备",
            leftIcon: "icon-yinshuiji"
          });
          break;
        case "洗衣机":
          this.dataArray.push({ leftText: "洗衣机", leftIcon: "icon-xiyiji" });
          break;
        case "有线网络":
          this.dataArray.push({
            leftText: "有线网络",
            leftIcon: "icon-youxianwangluo"
          });
          break;
        case "无线网络":
          this.dataArray.push({
            leftText: "无线网络",
            leftIcon: "icon-wuxianwangluo"
          });
          break;
        case "暖气":
          this.dataArray.push({ leftText: "暖气", leftIcon: "icon-nuanqi" });
          break;
        case "电梯":
          this.dataArray.push({ leftText: "电梯", leftIcon: "icon-icon_lift" });
          break;
        case "门禁系统":
          this.dataArray.push({
            leftText: "门禁系统",
            leftIcon: "icon-webiconmenjinxitong"
          });
          break;
        case "停车位":
          this.dataArray.push({
            leftText: "停车位",
            leftIcon: "icon-tingche"
          });
          break;
        case "允许带宠物":
          this.dataArray.push({
            leftText: "允许带宠物",
            leftIcon: "icon-yunxudaichongwu"
          });
          break;
        case "允许聚会":
          this.dataArray.push({
            leftText: "允许聚会",
            leftIcon: "icon-faci_juhui"
          });
          break;
        case "允许吸烟":
          this.dataArray.push({
            leftText: "允许吸烟",
            leftIcon: "icon-kexiyan"
          });
          break;
        case "允许做饭":
          this.dataArray.push({
            leftText: "允许做饭",
            leftIcon: "icon-kezuofan"
          });
          break;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.containers {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  .title {
    font-weight: bold;
    text-align: center;
  }
  .supporting-box {
    width: 100%;
    padding: 40upx;
    box-sizing: border-box;
    .box {
      width: 100%;
      color: #000;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      box-sizing: border-box;
      .icon-box {
        width: 152upx;
        height: 72upx;
        text-align: center;
        margin-bottom: 30upx;
        box-sizing: border-box;
          .color-icon {
            font-size: 20px;
          }
      }
    }
  }
  .else-supporting-box{
    width: 100%;
    padding: 40upx;
    box-sizing: border-box;
    text-align: center;
    font-size: 12px;
    color: #CFCFCF;
  }
}
</style>


