<template>
  <view class="contanier">
    <view class="box">
      <label style="font-weight: 500;">最少入住天数</label>
      <view class="right-box">
        <input class="day" value='' type="number" placeholder="最少可设置1"/>
        <label style="font-weight: 500;">晚</label>
      </view>
    </view>
    <view class="box">
      <label style="font-weight: 500;">最多入住天数</label>
      <view class="right-box">
        <input class="day" value='' type="number" placeholder="最多可设置500"/>
        <label style="font-weight: 500;">晚</label>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.contanier{
  width: 100%;
  padding: 0 30upx;
  box-sizing: border-box;
  font-size: 14px;
  .box{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    padding: 20upx 0;
    .right-box{
      display: flex;
      align-items: center;
      .day{
        width: 300upx;
        text-align: right;
        margin-right: 10upx;
      }
    }
  }
}
</style>
