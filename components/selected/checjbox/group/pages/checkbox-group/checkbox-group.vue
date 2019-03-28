<template>
  <view class="content">
    <checkbox-group @change="checkboxChange">
      <label :class="item.checked ?  'checkbox selectBox' : 'checkbox '" @click="labelBtn(item.value,index)" v-for="(item,index) in labelList" :key="item.value" >
        <checkbox :value="item.value" :checked="item.checked" v-show="false"/>{{item.name}}
      </label>
    </checkbox-group>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        labelName:'',
        labelDataList:'',
        labelList: [{
          name: '速订',
          value: '0',
          checked: false
        },
          {
            name: '先住后付',
            value: '1',
            checked: false
          },
          {
            name: '特价',
            value: '2',
            checked: false
          },
          {
            name: '优品',
            value: '3',
            checked: false
          },
          {
            name: '差旅首选',
            value: '4',
            checked: false
          }],
      };
    },
    methods:{
      labelBtn(name,index){
        console.log(name,index,"nameindex")
        this.labelName = name
        if(this.labelDataList.join(',').indexOf(name) >-1){
          this.labelList[index].checked = true
        }else{
          this.labelList[index].checked = false
        }
      },
      checkboxChange: function (e) {
        this.labelDataList = e.detail.value
        console.log(e)
        console.log('checkbox发生change事件，携带value值为：' + e.detail.value)
        console.log(this.labelDataList,"labelDataList")
      },
    }
  }
</script>

<style>
  .selectBox{
    background: #ef5b72!important;
    color: #fff!important;
  }
  .checkbox{
    padding: 5px;
    border: 1px solid #e1e1e1;
    margin-right: 24upx;
    border-radius: 7upx;
    color: #858585;
  }
  .content{
    margin: 30upx 0;
  }
</style>
