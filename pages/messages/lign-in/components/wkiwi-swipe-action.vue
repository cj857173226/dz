<template>
	<view class="message-list">
		<block v-for="(it,i) of messagesList" :key="i" v-if="messagesList.length>0">
			<view class="uni-swipe-action" @tap.stop="toMessageDetail(it)">
				<view class="uni-swipe-action__container" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"
				 @touchcancel="touchEnd" :style="{'transform':messageIndex == i ? transformX : 'translateX(0px)','-webkit-transform':messageIndex == i ? transformX : 'translateX(0px)'}"
				 :data-index="i" :data-disabled="it.disabled">
					<view class="uni-swipe-action__content">
						<view class="item" :class="it.stick  ? 'stick' : ''">
							<view class="item-left">
								
								<image :src="it.url?it.url:'/static/images/default_avatar.jpg'" class="image" />
							</view>
							<view class="item-middle">
								<text class="title">{{it.title}}</text>
								<text class="message" v-html="it.message"></text>
							</view>
							<view class="item-right">
								<view class="time">{{it.time}}</view>
								<view class="mark" v-if="it.count>0">{{it.count}}</view>
							</view>
						</view>
					</view>
					<view class="uni-swipe-action__btn-group" :id="elId">
						<div v-for="(item,index) in options" :key="index" class="uni-swipe-action--btn" :style="{backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',color: item.style && item.style.color ? item.style.color : '#FFFFFF',fontSize: item.style && item.style.fontSize ? item.style.fontSize : '28upx'}"
						 @tap.stop="bindClickBtn(item,index,it)">
							{{item.text }}
						</div>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import {
		request
	} from '../../../../common/request.js'
	import helper from '../../../../common/helper.js'
	import {
		shortHttp
	} from '../../../../common/requestUrl.json'
	export default {
		name: 'wkiwi-swipe-action',
		props: {
			options: Array,
			messagesList: Array,
		},

		data() {
			const elId = `Uni_${Math.ceil(Math.random() * 10e5).toString(36)}`
			return {
				elId: elId,
				transformX: 'translateX(0px)',
				messageIndex: -1,
			}
		},
		created() {
			this.direction = ''
			this.startX = 0
			this.startY = 0
			this.btnGroupWidth = 0
			this.isMoving = false
		},
		// #ifdef H5
		mounted() {
			// this.getSize();
			
		},
		// #endif
		// #ifndef H5
		onReady() {
			// this.getSize();
		},
		// #endif
		computed: {
			...mapState(['socketOpen', 'chatList', 'socketError', 'socketLoading', 'socketObj'])
		},
		methods: {
			...mapMutations(['reconnectChat']),
			// 和某人聊天
			toMessageDetail(item) {
				let param = JSON.stringify(item);
				const _this = this;
				if (_this.socketLoading) {
					helper.layer('正在重连聊天室,请稍后..');
					return;
				} else if (!_this.socketLoading && _this.socketError) {
					helper.layer('与聊天室断开,为您重连...')
					_this.reconnectChat();
					return;
				}
				uni.navigateTo({
					url: '/pages/messages/chat?param=' + param,
				})
			},
			// 删除和某人聊天
			deleteChat(id) {
				const _this = this;
				let param = {
					type: 'delete',
					to_id: id,
				}
				_this.socketObj.send({
					data: JSON.stringify(param),
					success: (res) => {},
					fail: (res) => {},
					complete: (res) => {}
				})
			},
			getSize() {
				this.$nextTick(function() {
					uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
						this.btnGroupWidth = ret[0]?ret[0].width:60;
					});
				})
			},
			bindClickBtn(item, index, it) {
				const _this = this;
				let to_id = it.list_id;
				this.messageIndex = -1;
				console.log(item.text + 'message第' + index + '项');
				if (item.text === '删除') {
					if (_this.socketLoading) {
						helper.layer('正在重连聊天室,请稍后..');
						return;
					} else if (!_this.socketLoading && _this.socketError) {
						helper.layer('与聊天室断开,为您重连...')
						_this.reconnectChat();
						return;
					}
					uni.showModal({
						title: '删除',
						content: '是否删除该聊天',
						confirmText:'删除',
						success: function(res) {
							if (res.confirm) {
								_this.deleteChat(to_id);
							} else if (res.cancel) {
							}
						}
					});
				}

			},
			touchStart(event) {
				this.getSize();
				if (event.currentTarget.dataset.disabled === true) {
					return;
				}
				this.startX = event.touches[0].pageX;
				this.startY = event.touches[0].pageY;
			},
			touchMove(event) {
				if (this.direction === 'Y' || event.currentTarget.dataset.disabled === true) {
					this.direction = '';
					return;
				}
				var moveY = event.touches[0].pageY - this.startY,
					moveX = event.touches[0].pageX - this.startX;
				if (!this.isMoving && Math.abs(moveY) > Math.abs(moveX)) { //纵向滑动
					this.direction = 'Y';
					return;
				}
				this.direction = moveX > 0 ? 'right' : 'left';
				this.messageIndex = moveX < 0 ? event.currentTarget.dataset.index : -1;
				this.isMoving = true;
			},
			touchEnd(event) {
				this.isMoving = false;
				if (this.direction !== 'right' && this.direction !== 'left') {
					this.direction = '';
					return;
				}
				if (this.direction == 'right') {
					this.messageIndex = -1;
				}
				this.endMove(event)
			},
			endMove(event) {
				if (this.direction === 'Y' || event.currentTarget.dataset.disabled === true) {
					this.direction = '';
					return;
				}
				if (this.messageIndex !== -1) {
					this.transformX = `translateX(${-this.btnGroupWidth}px)`;
					this.$emit('opened');
				} else {
					this.transformX = 'translateX(0px)';
					this.$emit('closed');
				}
				this.direction = '';
			}
		}
	}
</script>

<style lang="scss">
	.uni-swipe-action {
		width: 100%;
		overflow: hidden;

		&__container {
			background-color: #FFFFFF;
			width: 200%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			transition: transform 350ms cubic-bezier(.165, .84, .44, 1);
		}

		&__content {
			width: 50%;
		}

		&__btn-group {
			display: flex;
			flex-direction: row;
		}

		&--btn {
			padding: 0 32upx;
			color: #FFFFFF;
			background-color: #C7C6CD;
			font-size: 28upx;
			display: inline-flex;
			text-align: center;
			flex-direction: row;
			align-items: center;
		}
	}

	.item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 10upx 16upx;
		background-color: #fff;
		border-bottom: 1px solid rgb(243, 243, 243);

		&.stick {
			background-color: rgba(243, 236, 221, .5);
		}

		.item-left {
			text-align: center;

			.image {
				width: 100upx;
				height: 100upx;
				border-radius: 50upx;
				background-color: #eee;
			}
		}

		.item-middle {
			display: flex;
			flex: 1;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: flex-start;
			margin-left: 10upx;
			overflow: hidden;

			.title {
				width: 100%;
				color: #000;
				font-family: "微软雅黑";
				font-weight: 400;
				font-size: 30upx;
				height: 50upx;
				line-height: 60upx;
				overflow: hidden;
				/*自动隐藏文字*/
				text-overflow: ellipsis;
				/*文字隐藏后添加省略号*/
				white-space: nowrap;
				/**强制不换行*/
			}

			.message {
				width: 100%;
				font-family: "微软雅黑";
				color: #808080;
				height: 50upx;
				line-height: 40upx;
				font-size: 28upx;
				overflow: hidden;
				/**自动隐藏文字*/
				text-overflow: ellipsis;
				/**文字隐藏后添加省略号*/
				white-space: nowrap;
				/**强制不换行*/
			}
		}

		.item-right {
			overflow: hidden;
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			.time {
				color: #808080;
				font-size: 28upx;
				height: 60upx;
				line-height: 60upx;
			}

			.mark {
				background-color: #f74c31;
				line-height: 35upx;
				text-align: center;
				font-size: 18upx;
				min-width: 35upx;
				min-height: 35upx;
				border-radius: 18upx;
				color: #fff;
			}
		}
	}
</style>
