
<template>
  <view class="contanier">
    <view class="top">
      <view class="city" @click="clickCity">
        {{city}}
        <text class="iconfont icon-xiala- xiala"></text>
      </view>
      <view class="select-box">
        <mSearch :mode="2" button="inside" @search="search($event)"></mSearch>
      </view>
    </view>
    <view class="list-box">
      <view @click="onShowDatePicker('range')" style="color:#EA516B">
        <!-- <calendar @change="change"></calendar> -->
        {{range[0]}}-{{range[1]}}
        <text class="iconfont icon-xiasanjiaoxiangxiamianxing"></text>
      </view>
      <view>
        位置区域
        <text class="iconfont icon-xiasanjiaoxiangxiamianxing"></text>
      </view>
      <view>
        更多筛选
        <text class="iconfont icon-xiasanjiaoxiangxiamianxing"></text>
      </view>
      <view>
        排序筛选
        <text class="iconfont icon-xiasanjiaoxiangxiamianxing"></text>
      </view>
    </view>
    <checkboxGroup></checkboxGroup>
    <view class="housing-show">
      <view class="housing">
        <image class="housing-img" src="../../static/images/landlordguide/banner1.jpg"/>
        <view class="price">
          &yen;
          <text class="specific-price">2199</text>起/晚
        </view>
        <view class="icon-box">
          <i class="iconfont love-icon">&#xe619;</i>
        </view>
        <view class="bottom-username-box">
          <view class="username-box">
            <image class="username-photos" src="../../static/images/landlordguide/banner2.jpg"/>
          </view>
          <view class="lightning-comment">
            <view class="username-comment">
              <text style="font-size:14px;font-weight: bold;color:#000;margin-left:10upx;">我了个擦擦擦擦</text>
              <view class="lightning-comment-box">
                <view class="lightning">
                  <text class="iconfont icon-lightningbshandian lightning-icon"></text>速订
                </view>
                <view class="comment">
                  <text class="iconfont icon-pinglun1 comment-icon"></text>0条评论
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="'入住'" :end-text="'离店'" :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
  </view>
</template>
<script>
import mSearch from "@/components/selected/mehaotian-search-revision/mehaotian-search-revision"; //引入第三方搜索组件
import MxDatePicker from '@/components/mx-datepicker/mx-datepicker' //引入日期插件件
import calendar from '../../components/index/date-picker/date-picker' //引入日期插件件
import checkboxGroup from "@/components/selected/checjbox/group/pages/checkbox-group/checkbox-group"; //引入第三方更多选框
import {request} from '../../common/request.js' // 封装的带有token的请求方法
export default {
  components: {
    mSearch,
    checkboxGroup,
    MxDatePicker,
    calendar
  },
  data() {
    return {
      showPicker: false,
      value: '',
      type: 'range',
      city:'', // 城市
      range: ['1.1','1.6'],
    };
  },
  methods: {
    search(e, val) {
      console.log(e, val);
      this["val" + val] = e;
    },
    // 点击跳转页面
    clickCity(){
      uni.navigateTo({
        url:'/pages/index/searchCity'
      })
    },
    onShowDatePicker(type){//显示
      this.type = type;
      this.showPicker = true;
      this.value = this[type];
    },
    onSelected(e) {//选择
      this.showPicker = false;
      if(e) {
          this[this.type] = e.value; 
          //选择的值
          console.log('value => '+ e.value);
          //原始的Date对象
          console.log('date => ' + e.date);
      }
    },
    change({choiceDate, dayCount}){
			//1.choiceDate 时间区间（开始时间和结束时间）
			//2.dayCount 共多少晚
			console.dir(choiceDate)
			console.log("入住从 "+ choiceDate[0].re + "  到 " + choiceDate[1].re + "  共 " + dayCount +" 晚");
			this.startTime = choiceDate[0].re;
			this.endTime = choiceDate[1].re;
		},
  },
  onLoad(option){
    console.log(option);
    this.city = option.city;
    request({
      url:'/wap/api/search.php?action=result',
      data: { cityName: "广州" },
      success: function(res) {
        console.log(res);
      }
    })
  }
};
</script>
<style lang="scss" scoped>
.contanier {
  width: 100%;
  padding: 30upx;
  box-sizing: border-box;
  .top {
    width: 100%;
    display: flex;
    .city {
      width: 138upx;
      height: 80upx;
      color: #ef5f75;
      background-color: #f5f5f5;
      text-align: center;
      line-height: 80upx;
      border-radius: 10upx;
      font-size: 14px;
      .xiala {
        font-size: 16px;
        margin-left: 10upx;
      }
    }
    .select-box {
      width: 540upx;
      height: 80upx;
      background-color: #f5f5f5;
      border-radius: 10upx;
      display: flex;
      align-items: center;
      margin-left: 10upx;
    }
  }
  .list-box {
    width: 100%;
    font-size: 28upx;
    height: 80upx;
    display: flex;
    align-items: center;
    color: #858585;
    justify-content: space-between;
    text {
      color: #e1e1e1;
    }
  }
  .housing-show {
    .housing {
      position: relative;
      .housing-img {
        width: 100%;
        height: 460upx;
      }
      .price {
            width: 200upx;
            height: 60upx;
            line-height: 60upx;
            text-align: center;
            color: #fff;
            font-size: 14px;
            background-color: rgba(0, 0, 0, 0.7);
            position: absolute;
            bottom: 142upx;
            left: 0;
            .specific-price {
              font-size: 18px;
            }
          }
          .icon-box {
            width: 60upx;
            height: 60upx;
            color: #fff;
            line-height: 60upx;
            text-align: center;
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 50%;
            position: absolute;
            top: 30upx;
            right: 30upx;
            .love-icon {
              font-size: 40upx;
            }
          }
      .bottom-username-box {
        display: flex;
        align-items: center;
        margin-top: 30upx;
        .username-box {
          width: 104upx;
          height: 104upx;
          border-radius: 52upx;
          margin-right: 30upx;
          .username-photos {
            width: 104upx;
            height: 104upx;
            border-radius: 52upx;
          }
        }
        .lightning-comment {
          display: flex;
          color: #a8a8a8;
          font-size: 14px;
          margin-top: 20upx;
          align-items: center;
          .username-comment {
            text-align: left;
            .lightning-comment-box {
              display: flex;
              .lightning {
                margin-right: 10upx;
                .lightning-icon {
                  font-size: 18px;
                  color: #5bbfb5;
                }
              }
              .comment {
                .comment-icon {
                  font-size: 18px;
                  color: #d2d2d2;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

