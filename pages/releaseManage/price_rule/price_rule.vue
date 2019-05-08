<template>
	<view class="centenr">
		<view class="price-discipline">价格规则</view>
		<view class="list-box" @click="tapPriceManagement">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">日价</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">
					<text v-if="dayPrice ===''">未设置</text>
					<text v-else>{{dayPrice}}元/每晚</text>
				</text>
			</view>
			<text class="after_icon iconfont">&#xe65e;</text>
		</view>
		<!-- <view class="list-box" @click="tapPromotion">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">开启新房促销</text>
					<view class="recommend">推荐</view>
				</view>
				<text class="open">未开启</text>
			</view>
			<text class="after_icon iconfont">&#xe65e;</text>
		</view> -->
		<view class="list-box" @click="cashPledge">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">押金</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">
					<text v-if="cashpledge===''">不收取押金</text>
					<text v-else>{{cashpledge}}元</text>
				</text>
			</view>
			<text class="after_icon iconfont">&#xe65e;</text>
		</view>
		<!-- 	<view class="list-box" @click="clean">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">清洁费</text>
				</view>
				<text class="open">不收取清洁费</text>
			</view>
			<text class="after_icon iconfont">&#xe65e;</text>
		</view> -->
		<view class="list-box" @click="withGuest">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">加客</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">
					<text v-if="addtenant==='0'">不允许加客</text>
					<text v-else>
						<text>允许加客</text>
						<text v-if="addtionalprice>0">,{{addtionalprice}}/每位每晚</text>
						<text v-if="addtenanttips!==''">,{{addtenanttips}}</text>
					</text>
				</text>
			</view>
			<text class="after_icon iconfont">&#xe65e;</text>
		</view>
		<!-- <view class="list-box" @click="rests">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">其他费用选项（选填）</text>
				</view>
				<text class="open">对其费用进行描述</text>
			</view>
			<text class="after_icon iconfont">&#xe65e;</text>
		</view> -->
		<view class="price-discipline">入住要求</view>
		<view class="list-box" @click="numbeDays">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">入住天数限制</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">
					<text>最短{{minday}}晚</text>
					<text v-if="maxday!==''">,最多{{maxday}}晚</text>
				</text>
			</view>
			<text class="after_icon iconfont">&#xe65e;</text>
		</view>
		<view class="list-box" @tap="whether">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">是否接待境外人士</text>
				</view>
				<text class="open">
					<text v-text="foreigner ==='1'?'是':'否'"></text>
				</text>
			</view>
			<text class="after_icon iconfont">&#xe65e;</text>
		</view>
		<view class="list-box" @tap="otherRequirements">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">其他要求（选填）</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">
					<text v-if="!other">性别、年龄可接待时间等其他要求</text>
					<text v-else>{{other}}</text>
				</text>
			</view>
			<text class="after_icon iconfont">&#xe65e;</text>
		</view>
		<view class="list-box" @tap="hideTheTips">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">隐藏贴士（选填）</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">
					<text v-if="!hiddentips">你可填写wifi密码等内容</text>
					<text v-else>{{hiddentips}}</text>
				</text>
			</view>
			<text class="after_icon iconfont">&#xe65e;</text>
		</view>
		<view class="price-discipline">交易规则</view>
		<view class="list-box" @tap='earnest'>
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">定金比</text>
				</view>
				<text class="open">每日价格的{{crvp}}%,作为每日定金</text>
			</view>
			<text class="after_icon iconfont">&#xe65e;</text>
		</view>
		<view class="list-box" @tap="breakContract">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">房客违约责任</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">全额退款天数为{{crvn}}天，违约取消扣款天数为{{crva}}天</text>
			</view>
			<text class="after_icon iconfont">&#xe65e;</text>
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
	} from '../../../common/request.js'
	import helper from '../../../common/helper.js'
	export default {
		data() {
			return {
				house_id: '', //房源id
				dayPrice: '', //日价
				cashpledge: '', // 押金
				addtenant: '0', //是否允许加客
				addtionalprice: '', // 加客费用
				addtenanttips: '', // 加客说明
				minday: '', // 最小入住天数
				maxday: '', // 最大入住天数
				foreigner: '', // 是否接待境外人士
				hiddentips: '', //隐藏贴士
				other: '', //其他要求
				crvp: '', // 定金比
				crvn: '', // 全额退款天数
				crva: '', // 违约扣款天数
				isCrvping: false, // 是否正在修改 定金比
				isForeignering: false, // 是否正在修改 接待境外人士
			};
		},
		onLoad() {

		},
		onShow() {
			this.getCurData();
		},
		computed: {
			...mapState(['releaseObj']),
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus']),
			// 跳转页面
			tapPriceManagement: function() {
				uni.navigateTo({
					url: '/pages/releaseManage/price_rule/price_control' //日价管理页面
				})
			},
			tapPromotion: function() {
				uni.navigateTo({
					url: '/pages/releaseManage/price_rule/price_promotion' //促销说明
				})
			},
			cashPledge: function() {
				uni.navigateTo({
					url: '/pages/releaseManage/price_rule/cash_pledge' //押金
				})
			},
			clean: function() {
				uni.navigateTo({
					url: '/pages/releaseManage/price_rule/clean' //清洁费
				})
			},
			withGuest: function() {
				uni.navigateTo({
					url: '/pages/releaseManage/price_rule/with_guest' //加客管理
				})
			},
			rests: function() {
				uni.navigateTo({
					url: '/pages/releaseManage/price_rule/rests' //其他费用
				})
			},
			numbeDays: function() {
				uni.navigateTo({
					url: '/pages/releaseManage/price_rule/numbe_days' //入住天数限制
				})
			},
			otherRequirements: function() {
				uni.navigateTo({
					url: '/pages/releaseManage/price_rule/other_requirements' //其他要求
				})
			},
			whether: function() { //是否接待境外人士
				if (this.isForeignering) return;
				const _this = this;
				const id = _this.house_id;
				uni.showActionSheet({
					itemList: ['是', '否'],
					success: function(res) { //成功
						let _val;
						// 判断
						if (res.tapIndex === 0) {
							_this.foreigner = '1';
							_val = '1';
						} else {
							_this.foreigner = '0';
							_val = '0';
						}
						let param = {
							house_id: id,
							foreigner: _val,
						}
						_this.isForeignering = true;
						request({
							url: '/wap/api/fangdong.php?action=improveHouse',
							method: 'POST',
							data: param,
							success: (res) => {
								if (res.data.status === 'success') {
									let _data = res.data.content;
									_this.editReleaseInfo(_data);
									_this.editReleaseInfoStatus(true);
								} else {
									helper.layer('保存失败')
								}
							},
							complete: () => {
								_this.isForeignering = false;
								_this.getCurData()
							}
						})
					},
					fail: function(res) { //失败
						console.log(res.errMsg);
					}
				});
			},
			hideTheTips: function() {
				uni.navigateTo({
					url: '/pages/releaseManage/price_rule/hide_the_tips' //隐藏贴士
				})
			},
			earnest: function() { //定金比
				if (this.isCrvping) return;
				const _this = this;
				const id = _this.house_id;
				const old = _this.crvp;
				uni.showActionSheet({
					itemList: ['每日价格的100%', '每日价格的50%', '每日价格的20%'],
					success: function(res) { //成功
						// 判断
						let _val = '';
						if (res.tapIndex === 0) {
							_this.crvp = '100';
							_val = '100';
						} else if (res.tapIndex === 1) {
							_this.crvp = '50';
							_val = '50';
						} else if (res.tapIndex === 2) {
							_this.crvp = '20';
							_val = '20';
						}
						let param = {
							house_id: id,
							crvp: _val,
						}
						_this.isCrvping = true;
						request({
							url: '/wap/api/fangdong.php?action=improveHouse',
							method: 'POST',
							data: param,
							success: (res) => {
								if (res.data.status === 'success') {
									let _data = res.data.content;
									_this.editReleaseInfo(_data);
									_this.editReleaseInfoStatus(true);
								} else {
									helper.layer('保存失败')
								}
							},
							complete: () => {
								_this.isCrvping = false;
								_this.getCurData()
							}
						})
					},
					fail: function(res) { //失败
						console.log(res.errMsg);
					}
				});
			},
			breakContract: function() {
				uni.navigateTo({
					url: '/pages/releaseManage/price_rule/break_contract' //隐藏贴士
				})
			},
			// 获取当前数据
			getCurData() {
				const releaseObj = this.releaseObj;
				this.house_id = releaseObj.id; //房源id
				this.dayPrice = releaseObj.dayrentprice == "0" ? "" : releaseObj.dayrentprice; // 日价
				this.cashpledge = releaseObj.cashpledge == "0" ? "" : releaseObj.cashpledge; // 押金
				this.addtenant = releaseObj.addtenant=== '1' ? '1' : '0'; // 允许加客
				this.addtionalprice = releaseObj.addtionalprice ? releaseObj.addtionalprice : ""; // 加客费用
				this.addtenanttips = releaseObj.addtenanttips; // 加客说明
				this.minday = releaseObj.minday; // 最短入住天数
				this.maxday = releaseObj.maxday == '0' ? '' : releaseObj.maxday; // 最大入住天数
				this.foreigner = releaseObj.foreigner ==='1' ? '1' : '0'; // 是否接待境外人士
				this.other = releaseObj.userule; //  其他说明
				this.hiddentips = releaseObj.hiddentips; // 隐藏贴士
				this.crvp = releaseObj.crvp; // 定金比
				this.crvn = releaseObj.crvn; // 全额退款天数
				this.crva = releaseObj.crva; // 违约扣款天数
			},
		}

	}
</script>

<style lang="scss" scoped>
	.centenr {
		width: 100%;
		box-sizing: border-box;
		font-size: 12px;
		background-color: #F4F4F4;

		.price-discipline {
			width: 100%;
			height: 80upx;
			background-color: #F4F4F4;
			font-size: 32upx;
			line-height: 80upx;
			padding: 0 30upx;
			box-sizing: border-box;
		}

		.list-box {
			padding: 16upx 30upx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #eaeaea;
			background-color: #fff;

			.left-box {
				box-sizing: border-box;
				width: calc(100% - 60upx);

				.promotion-recommend-box {
					display: flex;
					align-items: center;
					font-size: 32upx;
					margin-bottom: 8upx;

					.recommend {
						padding: 0 8upx;
						height: 30upx;
						background-color: #F05B72;
						color: #fff;
						border-radius: 5upx;
						text-align: center;
						line-height: 30upx;
						font-size: 12px;
						margin-left: 10upx;
					}
				}

				.open {
					display: inline-block;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					word-break: break-all;
					width: 100%;
					color: #cccccc;
					font-size: 28upx;
				}
			}

			.after_icon {
				text-align: right;
				width: 60upx;
				font-size: 36upx;
				color: #cccccc;
			}
		}
	}
</style>
