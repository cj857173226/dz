
<template>
  <view class="contanier">
    <view class="top">
      <view class="city" @click="clickCity">
        {{city}}
        <text class="iconfont icon-xiala- xiala"></text>
      </view>
      <view class="select-box">
        <mSearch value=""  :mode="2" button="inside" @search="search($event)"></mSearch>
      </view>
    </view>
    <view class="list-box">
      <view @click="onShowDatePicker('range')" class="tiem-data">
        <calendar @change="change" :beginDate="start" :endDate="end"></calendar>
        <text class="iconfont icon-xiasanjiaoxiangxiamianxing"></text>
      </view>
      <view @tap="showCalendar">
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
    <!-- 位置区域 -->
    <view class="place" :class="isShow ? 'show' : 'hide'" :animation="animationData">
      1212121212
    </view>
  </view>
</template>
<script>
import mSearch from "@/components/selected/mehaotian-search-revision/mehaotian-search-revision"; //引入第三方搜索组件
import calendar from '../../components/selected/date-picker/date-picker' //引入日期插件件
import checkboxGroup from "@/components/selected/checjbox/group/pages/checkbox-group/checkbox-group"; //引入第三方更多选框
// import popupView from '@/components/selected/'
import {request} from '../../common/request.js' // 封装的带有token的请求方法
export default {
  components: {
    mSearch,
    checkboxGroup,
    calendar
  },
  data() {
    return {
      showPicker: false,
      type: 'range',
      city:'', // 城市
      start:'',// 开始时间
      end:'', // 结束时间
      isShow:'',
      animation:null,
      animationData: {},
    };
  },
  onLoad(option){
    this.city = option.city;
    // this.start = option.start;
    // this.end = option.end;
  },
  onShow(){
    console.log('1',uni);
    console.log('2',uni.createAnimation);
    
    // 弹出层动画创建
		this.animation = uni.createAnimation({
			duration: 1000,
      timingFunction: 'ease',
    });
    this.animation.scale(2,2).rotate(45).step()
    this.animationData = animation.export()
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
    showCalendar: function() {
			//#ifndef H5
			// 设置动画内容为：使用绝对定位显示区域，高度变为100%
			this.animation
				.bottom('0px')
				.height('100%')
				.step();
			this.animationData = this.animation.export();
			//#endif

			///////////////////h5平台适配//////////////////
			//#ifdef H5
			this.isShow = true;
			//#endif
    },
    hideCalendar: function() {
			///////////////////非非非h5平台适配//////////////////
			//#ifndef H5
			// 设置动画内容为：使用绝对定位隐藏整个区域，高度变为0
			this.animation
				.bottom('-100%')
				.height('0upx')
				.step();
			this.animationData = this.animation.export();
			//#endif

			///////////////////h5平台适配//////////////////
			//#ifdef H5
			this.isShow = false;
			//#endif
		},
    change({choiceDate, dayCount}){
			//1.choiceDate 时间区间（开始时间和结束时间）
			//2.dayCount 共多少晚
			console.dir(choiceDate)
			console.log("入住从 "+ choiceDate[0].re + "  到 " + choiceDate[1].re + "  共 " + dayCount +" 晚");
			this.startTime = choiceDate[0].re;
			this.endTime = choiceDate[1].re;
		},
  }
  
};
</script>
<style>
page{
 height: 100%;
}
</style>

<style lang="scss" scoped>
.contanier {
  width: 100%;
  height: 100%;
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
        font-size: 14px;
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
    color: #000;
    justify-content: space-between;
    .tiem-data{
      display: flex;
      align-items: center;
    }
    text {
      color: #000;
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
  .place{
    position: fixed;
    left: 0;
    bottom: -100%;
    height: 0;
    width: 100%;
    overflow: hidden;
    z-index: 9999;
    &.show {
      bottom: 0;
      height: 100%;
      transition: bottom 0.4s;
    }

    //h5使用css3动画
    &.hide {
      bottom: -100%;
      height: 100%;
      transition: bottom 0.4s;
    }
  }
}
</style>

