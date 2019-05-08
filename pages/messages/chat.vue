<template>
	<view class="chat_page">
		<view class="main">
			<!-- 消息盒子 -->
			<scroll-view class="chat_box" :style="{height:style.contentViewHeight+'px'}" :scroll-top="scrollTop" scroll-y
			 :scroll-with-animation="scrollAnimation" :scroll-into-view="scrollToView">
				<view class="msg_list_wrap" v-if="msgList.length>0">
					<view class="msg_list" v-for="(item,i) in msgList" :key="i" :id="'msg'+item.id">
						<text class="date">{{item.date}}</text>
						<view class="msg_left" v-if="item.type === 'user'">
							<img :src="item.header?item.header:'/static/images/default_avatar.jpg'" class="avatar">
							<view class="msg_box" v-if="item.msg!==''">
								<view class="msg" v-html="item.msg"></view>
							</view>
						</view>
						<view class="msg_right" v-if="item.type === 'me'">
							<img :src="item.header?item.header:'/static/images/default_avatar.jpg'" class="avatar">
							<view class="msg_box" v-if="item.msg!==''">
								<view class="msg" v-html="item.msg"></view>
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
				host:shortHttp,
				scrollTop:0,
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0,
				},
				msgList:[
// 					{type:'user',header:'', id:1, msg:'你好你好',date:'2019-4-20 8:20'},
// 					{type:'me',header:'', id:2,msg:'大家好才是真的好,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',date:'2019-4-20 8:20'},
// 					{type:'user',header:'', id:3,msg:'你好你好',date:'2019-4-20 8:20'},
// 					{type:'me',header:'', id:4,msg:'大家好才是真的好,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',date:'2019-4-20 8:20'},
// 					{type:'user',header:'', id:5,msg:'你好你好',date:'2019-4-20 8:20'},
// 					{type:'me',header:'', id:6,msg:'大家好才是真的好,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',date:'2019-4-20 8:20'},
// 					{type:'user',header:'', id:7,msg:'你好你好',date:'2019-4-20 8:20'},
// 					{type:'me',header:'', id:8,msg:'大家好才是真的好,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',date:'2019-4-20 8:20'},
				],
				msg:'',
				scrollToView:'',
				scrollAnimation:false,
				meId:'',//自己的id
				toId:'',//聊天对象id
				meHead:'',//自己的头像
				userHead:'',//用户头像
				historyLoading:false,
			}
		},
		onLoad(e) {
			let param = JSON.parse(e.param);
			const _title = param.title;
			uni.setNavigationBarTitle({
				title: _title
			});
			const userInfo = uni.getStorageSync('dz_userInfo');
			this.toId = param.list_id;
			this.meId = userInfo.userid;
			this.meHead = userInfo.headImgurl?this.host+userInfo.headImgurl:'';
			this.userHead =param.userpic?this.host+param.userpic:'';
			// 获取设备信息
			const res = uni.getSystemInfoSync();
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100); //像素
			this.getChatHistory();
			this.$nextTick(function(){
				this.scrollTop =99999;
			});
			this.getMsg();
		},
		onShow() {
		
		},
		onBackPress(){
			this.getChatHistory();
		},
		computed: {
			...mapState(['socketOpen','chatList','socketError','socketLoading','socketObj'])
		},
		methods: {
			//  发送消息
			sendMsg(){
				if(this.msg==='') return;
				if(!this.socketOpen && !this.socketLoading){
					helper.layer('聊天室未响应,请返回消息页重连');
					return;
				} else if(this.socketLoading){
					helper.layer('正在重连聊天室,请稍等');
					return;
				}
				const _this = this;
				const _date = _this.getCurTime();
				let _id = _this.msgList.length
				this.scrollAnimation = true;
				let param = {
					type:'one',
					content: _this.msg,
					to_id: _this.toId,
				}
				
				_this.socketObj.send({
					data:JSON.stringify(param),
					success: (res) => {
						_this.msgList.push({type:'me',header:_this.meHead,id:_id,msg:_this.msg,date:_date});
						_this.handleMsg(_this.msgList[_this.msgList.length - 1]);
						this.msg = '';
					},
					fail: (res) => {
						helper.layer('发送消息失败')
					},
					complete: (res) => {}
				})
			},
			// 处理消息
			handleMsg(msgRow){
				this.$nextTick(function() {
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
				const s = this.dateFormat(date.getSeconds());
				return `${y}-${m}-${d} ${h}:${mu}:${s}`
			},
			// 时间格式化
			dateFormat(time){
				let _time = Number(time);
				return _time>=10? _time+'': '0'+ (_time+'');
			},
			// 获取历史聊天
			getChatHistory(){
				const _this = this;
				let param = {
					type:'history',
					to_id: _this.toId,
				}
				_this.socketObj.send({
					data:JSON.stringify(param),
					success: (res) => {
					},
					fail: (res) => {
					},
					complete: (res) => {}
				})
			},
			// 获取收到的消息
			getMsg(){
				const _this = this;
				_this.socketObj.onMessage(function(res){
					let _data = JSON.parse(res.data)
					if(_data.type === 'history'){
						let _list = _data.history?_data.history:[];
						if(_list.length>0){
							_list.map((item,index,self)=>{
								if(item.from_id == _this.meId){
									self[index]['type'] = 'me';
									self[index]['header'] = _this.meHead;
								}else{
									self[index]['type'] = 'user';
									self[index]['header'] = _this.userHead;
								}
								self[index]['id'] = index;
								self[index]['msg'] = item.content
								self[index]['date'] = item.time;
							})
							_this.msgList = _list;
							_this.handleMsg(_this.msgList[_this.msgList.length - 1])
						}
						// console.log(_list)
						

						
					}else if(_data.type === 'one'){
						const _msg =  _data.message;
						if(_msg.from_id == _this.toId){
							let _id = _this.msgList.length
							_this.msgList.push({type:'user',header:_this.userHead,id:_id,msg:_msg.content,date:_msg.time});
							_this.handleMsg(_this.msgList[_this.msgList.length - 1]);
						}
					}
				})
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
					overflow: hidden;
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
									display: block;
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
