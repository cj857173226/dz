<template>
  <view class="contanier">
    <view class="selectors-btn" @click="clickAddCheck">
      <text class="iconfont">&#xe632;</text>添加入住人
    </view>
    <scroll-view class="check_list_wrap" scroll-y>
      <view v-if="listData.length > 0">
        <view class="message-box" v-for="(item,i) in listData" :key="i">
          <checkbox-group class="checkbox-box" @change="checkboxChange">
            <label class="radio-box"> 
              <checkbox :value="item._val"  color="#ea516b"/>
            </label>
            <view class="right-box">
              <view class="name-box">
                <text class="name">{{item.name}}</text>
                <text class="iconfont jiantou" @click.stop="clickCompile(item.name,item.idcardno,item.id)">&#xe634;</text>
              </view>
              <view class="identity-card-box">
                <text class="identity-card">身份证</text>
                <text>{{item.idcardno | hideMiddle}}</text>
              </view>
            </view>
          </checkbox-group>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<script>
import { request } from "../../common/request.js"; // 封装的带有token的请求方法
import helper from '../../common/helper';
export default {
  data() {
    return {
      listData: [],
      indexes:[],
      dataArray:[],
    };
  },
  onNavigationBarButtonTap(e){
      console.log(e);
      // console.log(JSON.parse(this.indexes));
      let array = [];
      for (let index = 0; index < this.indexes.length; index++) {
        // console.log(this.indexes[index]);
        let data = JSON.parse(this.indexes[index])
        array.push(data)
      }
      console.log(array);
      
      if (this.indexes.length === 0) {
        uni.showToast({
          title:"请选择入住人",
          icon:'none'
        })
      } else {
        this.$store.commit('checkIn',array);
        uni.navigateBack({
          delta:1
        })
      }
  },
  methods: {
    clickAddCheck() {
      // 跳转添加入住人
      uni.navigateTo({
        url: "/pages/particulars/addition?type=add"
      });
    },
    checkboxChange(e){
      console.log(e);
      
      let index = e.detail.value[0];
      this.indexes.push(index);
    },
    clickCompile(name,idcardno,id) {
      // 跳转编辑页面
      uni.navigateTo({
        url:`/pages/particulars/editor_check_in?name=${name}&idcardno=${idcardno}&id=${id}&type=list`
      })
      console.log("再点击我呢");
    }
  },
  onLoad() {
    const _that = this
    // 获取常用人列表
    request({
      url: "/wap/api/my.php?action=ContactList",
      success: function(res) {
        console.log("入住人列表",);
        if(res.data.status === 'success'){
        console.log(res.data.content)
          let _data = res.data.content;
          if(_data.length>0){
            _data.map((item,index,self)=>{
              self[index]['_val'] = JSON.stringify(item);
            })
          }
        
        _that.listData = _data;
        console.log(_that.listData)

        }else{
          helper.layer('获取入住人失败')
        }
        
      }
    });
  },
  filters:{
    hideMiddle(val) {
      return `${val.substring(0,6)}********${val.substring(val.length-4)}`
    }
  }
};
</script>
<style>
page {
  height: 100%;
}
</style>
<style lang="scss" scoped>
.contanier {
  width: 100%;
  height: 100%;
  padding: 30upx;
  box-sizing: border-box;
  .selectors-btn {
    width: 100%;
    height: 80upx;
    background-color: #ea516b;
    color: #fff;
    line-height: 80upx;
    text-align: center;
    border-radius: 8upx;
    &:active {
      opacity: 0.5;
    }
  }
  .check_list_wrap {
    box-sizing: border-box;
    width: 100%;
    margin-top: 20upx;
    height: calc(100% - 100upx);
    .message-box {
      width: 100%;
      font-size: 14px;
      margin-top: 40upx;
      border-bottom: 1px solid #aba7a7;
      .checkbox-box{
        display: flex;
        flex-direction: row;
        .radio-box {
        margin-right: 20upx;
      }
      .right-box {
        width: 100%;
        .name-box {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .name {
            font-weight: 600;
          }
          .jiantou {
            color: #9a9797;
            font-size: 16px;
          }
        }
        .identity-card-box {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          color: #9a9797;
          margin-top: 20upx;
          margin-bottom: 20upx;
          font-size: 12px;
          .identity-card {
            margin-right: 16upx;
          }
        }
      }
      }
      
    }
  }
}
</style>
