<template>
	<view class="chat_page">
		<view class="main">
			<!-- 消息盒子 -->
			<scroll-view class="chat_box" :scroll-top="scrollTop" scroll-y ref="xx">
				<view class="msg_list_wrap" v-if="msgList.length>0">
					<view class="msg_list" v-for="(item,i) in msgList" :key="i">
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
			<!-- 消息发送 -->
			<view class="send_box">
				<!-- //auto-height -->
				<view class="cur_msg">
					<textarea />
					</view>
				<button class="send_btn">发送</button>
			</view>
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
				msgList:[
					{type:'user',header:'',msg:'你好你好',date:'2019-4-20 8:20'},
					{type:'me',header:'',msg:'大家好才是真的好,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',date:'2019-4-20 8:20'},
					{type:'user',header:'',msg:'你好你好',date:'2019-4-20 8:20'},
					{type:'me',header:'',msg:'大家好才是真的好,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',date:'2019-4-20 8:20'},
					{type:'user',header:'',msg:'你好你好',date:'2019-4-20 8:20'},
					{type:'me',header:'',msg:'大家好才是真的好,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',date:'2019-4-20 8:20'},
					{type:'user',header:'',msg:'你好你好',date:'2019-4-20 8:20'},
					{type:'me',header:'',msg:'大家好才是真的好,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',date:'2019-4-20 8:20'},
				]
			}
		},
		onLoad(e) {
			const _title = e.title
			uni.setNavigationBarTitle({
				title: _title
			});
			this.$nextTick(function(){
				this.scrollTop =999999;
			})
		},
		onShow() {
			
		},
		computed: {

		},
		methods: {
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
			height: 100%;
			display: flex;
			flex-direction: column;
			
			.chat_box{
				background: #f2f2f2;
				width: 100%;
				box-sizing: border-box;
				height: calc(100% - 152upx);
				overflow-y: auto;
				.msg_list_wrap{
					box-sizing: border-box;
					width: 100%;
					padding: 30upx;
					.msg_list{
						box-sizing: border-box;
						padding: 20upx 0;
						width: 100%;
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
			.send_box{
				box-sizing: border-box;
				padding: 16upx 20upx;
				min-height: 152upx;
				background: #e6e6e6;
				display: flex;
				align-items: center;
				.cur_msg{
					box-sizing: border-box;
					background: #ffffff;
					height: 120upx;
					width: calc(100% - 190upx);
					margin-right: 30upx;
					padding: 16upx;
					border-radius: 16upx;
					textarea{
						font-size: 28upx;
						box-sizing: border-box;
						width: 100%;
						height: 100%;
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
				}
			}
		}
	}
	
</style>
