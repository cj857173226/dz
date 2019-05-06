<template>
	<view class="chat_page">
		<view class="main">
			<!-- 消息盒子 -->
			<scroll-view class="chat_box" :style="{height:style.contentViewHeight+'px'}" :scroll-top="scrollTop" scroll-y :scroll-with-animation="scrollAnimation"
			 :scroll-into-view="scrollToView">
				<view class="msg_list_wrap" v-if="msgList.length>0">
					<view class="msg_list" v-for="(item,i) in msgList" :key="i" :id="'msg'+item.id">
						<text class="date">{{item.date}}</text>
						<view class="msg_left" v-if="item.type === 'user'">
							<img :src="item.header?item.header:'/static/images/default_avatar.jpg'" class="avatar">
							<view class="msg_box" v-if="item.msg!==''">
								<view class="msg">{{item.msg}}</view>
							</view>
						</view>
						<view class="msg_right" v-if="item.type === 'me'">
							<img :src="item.header?item.header:'/static/images/default_avatar.jpg'" class="avatar">
							<view class="msg_box" v-if="item.msg!==''">
								<view class="msg">
									{{item.msg}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 消息发送 -->
		<view class="send_box">
			<!-- //auto-height -->
			<view class="cur_msg">
				<textarea v-model="msg" auto-height="true" />
				</view>
			<button class="send_btn" @tap.stop="sendMsg" :class="{'dis_btn':msg===''}">发送</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import {
		request
	} from '../../common/request.js'
	import helper from '../../common/helper.js'
	import {
		shortHttp	
	} from '../../common/requestUrl.json'
	export default {
		data() {
			return {
				scrollTop:0,
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0,
				},
				msgList:[
					{type:'user',header:'', id:1, msg:'你好你好',date:'2019-4-20 8:20'},
					{type:'me',header:'', id:2,msg:'大家好才是真的好,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',date:'2019-4-20 8:20'},
					{type:'user',header:'', id:3,msg:'你好你好',date:'2019-4-20 8:20'},
					{type:'me',header:'', id:4,msg:'大家好才是真的好,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',date:'2019-4-20 8:20'},
					{type:'user',header:'', id:5,msg:'你好你好',date:'2019-4-20 8:20'},
					{type:'me',header:'', id:6,msg:'大家好才是真的好,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',date:'2019-4-20 8:20'},
					{type:'user',header:'', id:7,msg:'你好你好',date:'2019-4-20 8:20'},
					{type:'me',header:'', id:8,msg:'大家好才是真的好,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',date:'2019-4-20 8:20'},
				],
				msg:'',
				scrollToView:'',
				scrollAnimation:false,
			}
		},
		onLoad(e) {
			const _title = e.title
			uni.setNavigationBarTitle({
				title: _title
			});
			const res = uni.getSystemInfoSync();
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100); //像素
			this.$nextTick(function(){
				this.scrollTop =999999;
			})
		},
		onShow() {
			
			
		},
		computed: {

		},
		methods: {
			//  发送消息
			sendMsg(){
				if(this.msg==='') return;
				const _this = this;
				const _date = _this.getCurTime();
				let _id = _this.msgList.length
				_this.msgList.push({type:'me',header:'',id:_id,msg:_this.msg,date:_date});
				this.msg = '';
				this.scrollAnimation = true;
				this.handleMsg(_this.msgList[_this.msgList.length - 1]);
			},
			// 处理消息
			handleMsg(msgRow){
				this.$nextTick(function() {
					// 滚动到底
					this.scrollToView = 'msg'+msgRow.id
				});
			},
			getCurTime(){
				const date = new Date;
				const y = date.getFullYear();
				const m = this.dateFormat(date.getMonth()+1);
				const d = this.dateFormat(date.getDate());
				const h = this.dateFormat(date.getHours());
				const mu = this.dateFormat(date.getMinutes());
				// const s = this.dateFormat(date.getSeconds());
				return `${y}-${m}-${d} ${h}:${mu}`
			},
			dateFormat(time){
				let _time = Number(time);
				return _time>=10? _time+'': '0'+ (_time+'');
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
	}
</style>
<style lang="scss" scoped>
	$theme-color: #F05B72;
	.chat_page{
		height: 100%;
		.main{
			box-sizing: border-box;
			// height: 100%;
			display: flex;
			flex-direction: column;
			.chat_box{
				background: #f2f2f2;
				width: 100%;
				display: flex;
				flex: 1;
				margin-bottom: 112upx;
				box-sizing: border-box;
				overflow-y: auto;
				.msg_list_wrap{
					.msg_list{
						box-sizing: border-box;
						padding: 20upx 0;
						width: 100%;
						padding: 30upx;
						.date{
							box-sizing: border-box;
							width: 100%;
							font-size: 24upx;
							display: inline-block;
							text-align: center;
							margin-bottom: 12upx;
							color: #bababa;
						}
						.msg_left,
						.msg_right{
							box-sizing: border-box;
							width: 100%;
							display: flex;
							.avatar{
								height: 80upx;
								width: 80upx;
								border-radius: 8upx;
							}
							.msg_box{
								max-width:calc(100% - 120upx);
								.msg{
									box-sizing: border-box;
									word-break: break-all;
									border-radius: 8upx;
									padding: 18upx 30upx;;
									min-height: 80upx;
									font-size: 32upx;
								}
							}
						}
						.msg_left{
							padding-right: 40upx;
							flex-direction: row;
							.avatar{
								margin-right: 30upx;
							}
							.msg_box{
								.msg{
									background: #ffffff;
									color: #000000;
								}
							}
						}
						.msg_right{
							padding-left: 40upx;
							flex-direction: row-reverse;
							.avatar{
								margin-left: 30upx;
							}
							.msg_box{
								.msg{
									background: #e76c7f;
									color: #ffffff;
								}
							}
						}
					}
					
				}
			}
		
		}
			.send_box{
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			box-sizing: border-box;
			padding: 16upx 20upx;
			// min-height: 152upx;
			min-height: 112upx;
			background: #e6e6e6;
			display: flex;
			align-items: center;
			transition: all .15s linear;
			.cur_msg{
				box-sizing: border-box;
				background: #ffffff;
				// height: 120upx;
				min-height: 72upx;
				width: calc(100% - 190upx);
				margin-right: 30upx;
				padding: 18upx;
				border-radius: 16upx;
				textarea{
					font-size: 28upx;
					box-sizing: border-box;
					width: 100%;
					// height: 100%;
				}
			}
			.send_btn{
				height: 72upx;
				line-height: 72upx;
				width: 160upx;
				padding: 0;
				font-size: 28upx;
				background: $theme-color;
				color: #ffffff;
				&:active{
					opacity: 0.8;
				}
				&:after{
					border: none;
				}
			}
		}
	}
	
</style>
