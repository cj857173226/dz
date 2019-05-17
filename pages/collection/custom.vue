<template>
  <view class="contanier">
    <view class="housing-resource-box">
      <text style="font-weight:800;">{{numberHousing}}个房源</text>
      <view class="costom-box" v-for="(item,i) in dataArray" :key="i" @tap="clickDetailsRoom(item.luId)">
        <image class="costom-img" :src="shortHttp+(item.landlordheadimgurl)"></image>
        <view class="bottom-box">
          <image class="photn" :src="shortHttp+(item.luMainImageUrl)"></image>
          <view class="housing-title-box">
            <view class="title">{{item.luTitle}}</view>
            <view class="icon-box">
              <view><text class="iconfont color1">&#xe6b9;</text>速订</view>
              <view style="margin-left:12upx;"><text class="iconfont color2">&#xe665;</text>{{item.luComments}}评论</view>
            </view>
          </view>
        </view>
        <view class="price">{{item.showPrice.originalPrice}}<text style="font-size:12px;">起/晚</text></view>
        <view class="right-box"><text class="iconfont font20" @tap.stop="clickCancelTransfer(item.luId)">&#xe642;</text></view>
      </view> 
    </view>
    <mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
         @onConfirm="onConfirm" @onCancel="onCancel()" :pickerValueArray="pickerValueArray"></mpvue-picker>
  </view>
</template>
<script>
import mpvuePicker from '../../components/index/mpvue-picker/mpvuePicker';
import {request} from '../../common/request.js' // 封装的带有token的请求方法
import {shortHttp} from '../../common/requestUrl.json'
export default {
  components: {
    mpvuePicker
  },
  data () {
    return {
      dataArray:null,
      numberHousing:'',
      shortHttp,
      cId:'', //收藏夹ia
      cityPickerValueDefault: [0, 0, 1],
      themeColor: '#007AFF',
      mode: 'selector',
      deepLength: 1,
      pickerValueDefault: [0],
      pickerValueArray:[],
      id:'', //房源的id
    }
  },
  onLoad(option){
    const _that = this
    _that.cId = option.id
    // 动态设置导航标题
    uni.setNavigationBarTitle({
      title:option.title
    })
    this.httpRequest(); // 调用数据请求
  },
  onNavigationBarButtonTap(e) {
    const _that = this;
    if (e.index === 0) {
      uni.showActionSheet({
        itemList:["编辑分组"],
        success:function(res){
          if (res.tapIndex === 0) {
            uni.navigateTo({
              url:`/pages/collection/amend_group?id=${_that.cId}`
            })
          }
        }
      })
    }
	},
  methods: {
    // 跳转到房间详情
    clickDetailsRoom(id){
      uni.navigateTo({
        url:`/pages/particulars/particulars?id=${id}`
      })
    },
    httpRequest(){
      const _that = this;
      // 请求拿到的房源id请求数据
      request({
        url:'/wap/api/my.php?action=listFavorite',
        data:{classId:this.cId},
        success: function(res) {
          console.log(res);
          _that.dataArray = res.data.content.item
          _that.numberHousing = res.data.content.item.length
        }
      })
    },
    // 取消收藏和转移分组
    clickCancelTransfer(id){
      const _that = this;
      // id：收藏房源的id
      _that.id = id
      uni.showActionSheet({
        itemList:["转移分组","取消收藏"],
        success: function(res) {
          // console.log("取消分组",res,id);
          if (res.tapIndex === 0) {
            let pickerValueArray = []
            request({
              url:'/wap/api/my.php?action=favoriteClass',
              success: function(res) {	
                let array = res.data.content.item
                for (let i = 0; i < array.length; i++) {
                  pickerValueArray.push({
                    label:array[i].cname,
                    value:array[i].cid
                  })
                  _that.pickerValueArray = pickerValueArray 
                }		
              }
            })
            setTimeout(()=>{
              _that.$refs.mpvuePicker.show(); // 点击弹出mpvuePickerpicker
            },2000)
          } else if (res.tapIndex === 1) {
            request({
              url:'/wap/api/my.php?action=modifyFavorite',
              data:{luId:id,favAction:'del'},
              success: function(res) {
                console.log("取消分组",res);
                if (res.data.status === "success") {
                  uni.showToast({
                    title:'取消成功'
                  })
                  _that.httpRequest(); // 调用数据请求
                }
              }
            })
          }
        }
      })
    },
    // picker 组件点击确定时回调，返回选中的 label, value 和数组索引 index 的值
    onConfirm(e){
			// console.log("确认：",e);
      const _that = this;
      // console.log("我在这里：",_that.id);
      
			let value = e.value;
			let collectId;
			for (let index = 0; index < value.length; index++) {
				collectId = value[index];
			}
			request({
				url:'/wap/api/my.php?action=updateFavorite&type=id',
				data:{value:collectId,id:_that.id},
				success: res => {
					console.log("转移：",res);
					if (res.data.status == "success") {
						uni.showToast({
							title:"转移成功",
							duration:2000
            })
            _that.httpRequest(); // 调用数据请求
					} else {
						uni.showToast({
							title:"转移失败",
							duration:2000
						})
					}
				}
			})
    },
    // picker 组件点击取消时回调
    onCancel(e) {
			// console.log(this.i);
    },
  }
}
</script>
<style lang="scss" scoped>
.contanier{
  width: 100%;
  padding: 30upx;
  box-sizing: border-box;
  .costom-box{
    width: 100%;
    margin-top: 30upx;
    position: relative;
    .costom-img{
      width: 100%;
      height: 460upx;

    }
    .bottom-box{
      width: 100%;
      height: 174upx;
      display: flex;
      flex-direction: row;
      align-items: center;
      .photn{
        width: 80upx;
        height: 80upx;
        border-radius: 50%;
      }
      .housing-title-box{
        font-size: 14px;
        margin-left: 20upx;
        .title{
          font-weight: 600;
        }
        .icon-box{
          color: #9B9B9B;
          display: flex;
          flex-direction: row;
          align-items: center;
          .color1{
            color :#D1EDEA;
            font-size: 16px;
          }
          .color2{
            font-size: 16px;
            
          }
        }
      }
    }
    .price{
      width: 200upx;
      height: 60upx;
      font-size: 14px;
      color: #fff;
      background-color: rgba($color: #000000, $alpha: .5);
      text-align: center;
      line-height: 60upx;
      position: absolute;
      left: 0;
      bottom: 184upx;
    }
    .right-box{
      width: 80upx;
      height: 60upx;
      line-height: 60upx;
      text-align: center;
      color: #fff;
      background-color: rgba($color: #000000, $alpha: .5);
      border-radius: 5upx;
      position: absolute;
      top: 20upx;
      right: 20upx;
      // z-index: 999;
      .font20{
        font-size: 40upx;
      }
    }
  }
}
</style>

