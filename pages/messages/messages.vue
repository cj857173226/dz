<template>
	<view class="contanier">
		<!-- 广告 -->
		<view class="ad_box" @tap="goAdListPage()">
			<view class="icon">
				<text class="iconfont icon-huodong-"></text>
			</view>
			<view class="content_wrap">
				<view class="title">优惠活动</view>
				<view class="content" v-text="lastAd?lastAd.title:'暂无优惠活动'"></view>
			</view>

		</view>
		<wkiwi-swipe-action :options="options" :messagesList="messages" @></wkiwi-swipe-action>
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
	import wkiwiSwipeAction from "./lign-in/components/wkiwi-swipe-action";
	export default {
		components: {
			wkiwiSwipeAction
		},
		data() {
			return {
				focus: false,
				isShowView: true,
				options: [],
				//广告最后一项
				lastAd: null,
				isLoading: false,
				messages: [
// 					{
// 							title: "系统消息",
// 							url: "http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",
// 							message: "占无系统消息",
// 							time: "08:15",
// 							count: 0,
// 							stick: false, //是否为置顶状态
// 							disabled: false //是否禁止滑动
// 						},
// 						{
// 							title: "优惠活动",
// 							url: "http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",
// 							message: "占无活动",
// 							time: "08:15",
// 							count: 0,
// 							stick: false, //是否为置顶状态
// 							disabled: false //是否禁止滑动
// 						},
// 						{
// 							title: "马云",
// 							url: "http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",
// 							message: "什么鬼，我有支付宝",
// 							time: "15:15",
// 							count: 5,
// 							type: 'user',
// 							stick: false, //是否为置顶状态
// 							disabled: false //是否禁止滑动
// 						},
// 						{
// 							title: "马化腾",
// 							url: "http://img1.3lian.com/gif/more/11/201212/cd1d745ed855bef27f47c8aff0786067.jpg",
// 							message: "哈哈哈，我要一统江湖啦aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
// 							time: "15:15",
// 							count: 22,
// 							type: 'user',
// 							stick: false,
// 							disabled: false
// 						},
// 						{
// 							title: "李彦宏",
// 							url: "http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",
// 							message: "抄袭我的吧，我早都做过了",
// 							time: "12:13",
// 							count: 1,
// 							type: 'user',
// 							stick: false,
// 							disabled: false
// 						},
// 						{
// 							title: "雷军",
// 							url: "http://img1.3lian.com/gif/more/11/201212/cf9d56d05c0cbc1edbf21cf64ad9c341.jpg",
// 							message: "微信给你下线，看你还嘚瑟",
// 							time: "12:11",
// 							count: 0,
// 							stick: false,
// 							disabled: false
// 						},
// 						{
// 							title: "前端开发者",
// 							url: "http://img1.3lian.com/gif/more/11/201212/04b335ead07530a6188a27549fad1a68.jpg",
// 							message: "我们的春天来啦，哈哈哈",
// 							time: "11:35",
// 							count: 0,
// 							stick: false,
// 							disabled: false
// 						},
// 						{
// 							title: "微信小程序",
// 							url: "http://img1.3lian.com/gif/more/11/201212/e10e8faa201671b5a2e8a6146f80d99e.jpg",
// 							message: "谁有内测资格啊啊，300万买一个",
// 							time: "08:23",
// 							count: 0,
// 							stick: false,
// 							disabled: false
// 						},
// 						{
// 							title: "小程序",
// 							url: "http://img1.3lian.com/gif/more/11/201212/3fab6379b6ef53e7c17a1cc772eed0d6.jpg",
// 							message: "这个IDE方便都不要配置了",
// 							time: "03:21",
// 							count: 5,
// 							stick: false,
// 							disabled: false
// 						},
// 						{
// 							title: "微信应用号开发群",
// 							url: "http://img1.3lian.com/gif/more/11/201212/8f3762fb4d791410ec970baa2641344d.jpg",
// 							message: "开发的局限性太大了",
// 							time: "03:08",
// 							count: 99,
// 							stick: false,
// 							disabled: false
// 						},
// 						{
// 							title: "后台",
// 							url: "http://img1.3lian.com/gif/more/11/201212/411cffabcd6e4474b48f1ecac76e1b3f.jpg",
// 							message: "不看好小程序",
// 							time: "02:45",
// 							count: 0,
// 							stick: false,
// 							disabled: false
// 						},
// 						{
// 							title: "闯天下",
// 							url: "http://img1.3lian.com/gif/more/11/201212/04378257474004fcdd62f619d724db0c.jpg",
// 							message: "微信太强大了",
// 							time: "01:09",
// 							count: 0,
// 							stick: false,
// 							disabled: false
// 						},
// 						{
// 							title: "小程序",
// 							url: "http://img1.3lian.com/gif/more/11/201212/58ec7c89b16c529fc9d0dc440a72e14d.jpg",
// 							message: "有快来看直播啦，学习开始啦",
// 							time: "00:24",
// 							count: 2,
// 							stick: false,
// 							disabled: false
// 						}
				]
			};
		},
		onLoad() {
			helper.isLogin();
			this.getAdList();
		},
		onShow() {
			// this.messages = this.chatList;
			this.waitList()
			this.reconnet();
		},
		computed: {
			...mapState(['socketOpen', 'chatList', 'socketError', 'socketLoading', 'socketObj']),
		},
		methods: {
			...mapMutations(['reconnectChat']),
			// 获取广告列表
			getAdList() {
				const _this = this;
				_this.isLoading = true;
				request({
					url: '/wap/api/my.php?action=messageListAd',
					success: (res) => {
						if (res.data.status === 'success') {
							const _data = res.data.content;
							if (_data.length > 0) {
								let _last = _data.length - 1;
								_this.lastAd = _data[_last]
							}
						} else {
							helper.layer('获取优惠活动失败')
						}
					},
					fail: () => {
						helper.layer('获取优惠活动失败')
					},
					complete: () => {
						_this.isLoading = false;
					}

				})
			},
			// 跳转到优惠活动页面
			goAdListPage() {
				if (this.isLoading) return;
				if (!this.lastAd) {
					helper.layer('暂无广告');
					return
				}
				uni.navigateTo({
					url: '/pages/messages/favorable',
				})
			},
			// 重连
			reconnet() {
				const _this = this;
				if (_this.socketLoading) {
					helper.layer('正在重连聊天室,请稍后..');
					return;
				} else if (!_this.socketLoading && _this.socketError) {
					helper.layer('与聊天室断开,为您重连...')
					_this.reconnectChat();
					return;
				}
			},
			// 等待获取列表
			waitList(){
				const _this = this;
				let timer;
				timer = setInterval(()=>{
					_this.messages = _this.chatList;
					if(_this.socketOpen){
						clearInterval(timer);
					}
				},500)
			}
		}
	};
</script>

<style lang="scss" scoped>
	$theme-color: #F05B72;

	.contanier {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;

		.ad_box {
			box-sizing: border-box;
			width: 100%;
			padding: 10upx 16upx;
			display: flex;
			border-bottom: 1px solid #f3f3f3;

			.icon {
				box-sizing: border-box;
				width: 100upx;
				height: 100upx;
				background: $theme-color;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;

				.iconfont {
					display: inline-block;
					font-size: 60upx;
					color: #FFFFFF;
				}
			}

			.content_wrap {
				flex: 1;
				margin-left: 10upx;
				overflow: hidden;

				.title {
					height: 50upx;
					line-height: 50upx;
					font-size: 28upx;
				}

				.content {
					width: 100%;
					height: 50upx;
					line-height: 40upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}

		.system-messages {
			width: 100%;
			height: 160upx;
			box-sizing: border-box;
			border-bottom: 1px solid #ccc;
			display: flex;
			align-items: center;

			.photo {
				width: 100upx;
				height: 100upx;
				border-radius: 50upx;
				background-color: #f8cb4f;
				line-height: 100upx;
				text-align: center;
				margin-right: 26upx;

				.colorbaise {
					font-size: 50upx;
					color: #fff;
				}

				.photo-img {
					width: 100upx;
					height: 100upx;
					border-radius: 50upx;
				}
			}

			.messages-box {
				width: 564upx;
				height: 80upx;

				.system-title {
					font-size: 14px;
				}

				.system-contanier {
					width: 100%;
					height: 40upx;
					color: #b9b9b9;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>
