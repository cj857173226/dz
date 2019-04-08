<template>
	<view class="container">
		<view class="box">
			<view class="location">
				<view class="list-box">
					<i class="iconfont icon-city">&#xec70;</i>
					<text class="city">{{city}}</text>
				</view>
				<view class="list-box" @tap="tapOrientation">
					<i class="iconfont icon-place">&#xe793;</i>
					<text class="my-place">{{city}}</text>
				</view>
			</view>
			<view class="calendar">
				<calendar @change="change"></calendar>
			</view>
			<view class="search" @tap="tapSelect">
				<view class="list-box">
					<i class="iconfont icon-city">&#xe611;</i>
					<text class="city">试试搜:花水湾</text>
				</view>
				<view>
					<i class="iconfont right">&#xe65e;</i>
				</view>
			</view>
		</view>
		<!-- <view class="btn-box"> -->
			<button @tap="clickSelect" class="btn" type="primary" >开始搜索</button>
		<!-- </view> -->
		
	</view>
</template>

<script>
	import calendar from './date-picker/date-picker.vue' //引入日期插件
	import amap from '../../common/amap-wx.js'  //高德微信sdk
	export default {
		components: {
			calendar
		},
		data () {
			return {
				lat:'',
				log:'',
				amapPlugin:null,
				key:'762ed8c71859b8e2ab587fcb3211fa14', //高德开放平台上申请的key
				addressName: '',  
        weather: {  
          hasData: false,  
          data: []  
				},
				city:''
			}
		},
		onLoad(){
		/* 	// 初始化高德小程序sdk的实例对象
			this.amapPlugin = new amap.AMapWX({
				key:this.key
			})
			// this.getRegeo()
			console.log("1:",this.amapPlugin) */
			plus.geolocation.getCurrentPosition(
			(p) => {
				console.log("postion",p.address.city);
				this.city = p.address.city
			}
		);
		},
		methods: {
			tapSelect:function(){
				console.log('111111')
			},
			change({choiceDate, dayCount})
			{
				//1.choiceDate 时间区间（开始时间和结束时间）
				//2.dayCount 共多少晚
				console.dir(choiceDate)
				console.log("入住从 "+ choiceDate[0].re + "  到 " + choiceDate[1].re + "  共 " + dayCount +" 晚");
			},
			// 点击按钮跳转到搜索页面
			clickSelect:function () {
				console.log('1111')
				uni.navigateTo({
					url:'/pages/selecteds/selecteds'
				})
			},
			
			// getRegeo() {  
      //       uni.showLoading({  
      //           title: '获取信息中'  
      //       });  
      //       this.amapPlugin.getRegeo({  
      //           success: (data) => {  
      //               console.log(data)  
      //               this.addressName = data[0].name;  
      //               uni.hideLoading();  
      //           }  
      //       });  
      //   }  
		}
	}
	
</script>
	
<style scoped>
	.container{
		width: 100%;
		height: 460upx;
		background-color: #ededed;
		box-sizing: border-box;
		padding: 30upx;
	}
	.box{
		/* margin-top: 60upx; */
		width: 100%;
		height: 280upx;
		padding: 0 46upx 0 46upx;
		background-color: #fff;
		box-sizing: border-box;
	}	
	.btn{
		background-color: #ef5b72;
		margin-top: 30upx;
	}
	.list-box{
		display: flex;
		align-items: center;
	}
	.location{
		height: 90upx;
		border-bottom: 1px solid #dedede;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.icon-city{
		font-size: 20px;
		color: #000;
	}
	.icon-place{
		font-size: 18px;
		color: #9d9d9d;
	}
	.my-place{
		color: #9d9d9d;
		font-size: 14px;
		margin-left: 20upx;
	}
	.city{
		margin-left: 20upx;
	}
	.calendar{
		height: 90upx;
		border-bottom: 1px solid #dedede;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}	
	.search{
		height: 90upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	uni-button{
		width: 100%;
		height: 90upx;
		background-color: #ef5b72;
		margin-top: 30upx;
	}
	.button-hover{
		opacity:0.8;
	}
	.right{
		color: #9d9d9d;
	}
</style>
