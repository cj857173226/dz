<template>
	<view class="centenr">
		<view class="price-discipline">价格规则</view>
		<view class="list-box" @click="tapPriceManagement">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">日价</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">未设置</text>
			</view>
			<text class="iconfont">&#xe65e;</text>
		</view>
		<view class="list-box" @click="tapPromotion">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">开启新房促销</text>
					<view class="recommend">推荐</view>					
				</view>
				<text class="open">未开启</text>
			</view>
			<text class="iconfont">&#xe65e;</text>
		</view>
		<view class="list-box" @click="cashPledge">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">押金</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">不收取押金</text>
			</view>
			<text class="iconfont">&#xe65e;</text>
		</view>
		<view class="list-box" @click="clean">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">清洁费</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">不收取清洁费</text>
			</view>
			<text class="iconfont">&#xe65e;</text>
		</view>
		<view class="list-box" @click="withGuest">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">加客</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">不允许加客</text>
			</view>
			<text class="iconfont">&#xe65e;</text>
		</view>
		<view class="list-box" @click="rests">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">其他费用选项（选填）</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">对其费用进行描述</text>
			</view>
			<text class="iconfont">&#xe65e;</text>
		</view>
		<view class="price-discipline">入住要求</view>
		<view class="list-box" @click="numbeDays">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">入住天数限制</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">最短一晚</text>
			</view>
			<text class="iconfont">&#xe65e;</text>
		</view>
		<view class="list-box" @tap="whether">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">是否接待境外人士</text>
				</view>
				<text class="open">{{whethers}}</text>
			</view>
			<text class="iconfont">&#xe65e;</text>
		</view>
		<view class="list-box" @tap="otherRequirements">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">其他要求（选填）</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">性别、年龄可接待时间等其他要求</text>
			</view>
			<text class="iconfont">&#xe65e;</text>
		</view>
		<view class="list-box" @tap="hideTheTips">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">隐藏贴士（选填）</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">你可填写WIFI密码等内容</text>
			</view>
			<text class="iconfont">&#xe65e;</text>
		</view>
		<view class="price-discipline">交易规则</view>
		<view class="list-box" @tap='earnest'>
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">定金比</text>
				</view>
				<text class="open">{{earnests}}</text>
			</view>
			<text class="iconfont">&#xe65e;</text>
		</view>
		<view class="list-box" @tap="breakContract">
			<view class="left-box">
				<view class="promotion-recommend-box">
					<text class="promotion">房客违约责任</text>
					<!-- <view class="recommend">推荐</view>					 -->
				</view>
				<text class="open">全额退款天数为一天，违约取消扣款天数为一天</text>
			</view>
			<text class="iconfont">&#xe65e;</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				whethers:'未选择' ,// 是否接待境外人士
				earnests:'未选择' // 定金
			};
		},
		methods: {
			// 跳转页面
			tapPriceManagement:function(){
				uni.navigateTo({
					url:'/pages/releaseManage/price_rule/price_control' //日价管理页面
				})
			},
			tapPromotion:function(){
				uni.navigateTo({
					url:'/pages/releaseManage/price_rule/price_promotion' //促销说明
				})
			},
			cashPledge:function(){
				uni.navigateTo({
					url:'/pages/releaseManage/price_rule/cash_pledge' //押金
				})
			},
			clean:function(){
				uni.navigateTo({
					url:'/pages/releaseManage/price_rule/clean' //清洁费
				})
			},
			withGuest:function () {
				uni.navigateTo({
					url:'/pages/releaseManage/price_rule/with_guest' //加客管理
				})
			},
			rests:function(){
				uni.navigateTo({
					url:'/pages/releaseManage/price_rule/rests' //其他费用
				})
			},
			numbeDays:function(){
				uni.navigateTo({
					url:'/pages/releaseManage/price_rule/numbe_days' //入住天数限制
				})
			},
			otherRequirements:function(){
				uni.navigateTo({
					url:'/pages/releaseManage/price_rule/other_requirements' //其他要求
				})
			},
			whether:function(){ //是否接待境外人士
				const _that = this;
				uni.showActionSheet({
					itemList: ['是', '否'],
					success: function(res) { //成功
						// console.log('这是什么',res);
						// 判断
						if (res.tapIndex === 0) {
							_that.whethers = '是'
						} else {
							_that.whethers = '否'
						}
					},
					fail: function(res) { //失败
						console.log(res.errMsg);
					}
				});
			},
			hideTheTips:function(){
				uni.navigateTo({
					url:'/pages/releaseManage/price_rule/hide_the_tips' //隐藏贴士
				})
			},
			earnest:function(){ //定金比
				const _that = this;
				uni.showActionSheet({
					itemList: ['每日价格的100%', '每日价格的50%', '每日价格的20%'],
					success: function(res) { //成功
						// 判断
						if (res.tapIndex === 0) {
							_that.earnests = '每日价格的100%，作为每日定金'
						} else if (res.tapIndex === 1) {
							_that.earnests = '每日价格的50%，作为每日定金'
						} else {
							_that.earnests = '每日价格的20%，作为每日定金'
						}
					},
					fail: function(res) { //失败
						console.log(res.errMsg);
					}
				});
			},
			breakContract:function(){
				uni.navigateTo({
					url:'/pages/releaseManage/price_rule/break_contract' //隐藏贴士
				})
			}
		}
		
	}
</script>

<style lang="scss" scoped>
.centenr{
	width: 100%;
	box-sizing: border-box;
	font-size: 12px;
	background-color: #F4F4F4;
	.price-discipline{
		width: 100%;
		height: 80upx;
		background-color: #F4F4F4;
		font-size: 12px;
		line-height: 80upx;
		padding: 0 30upx;
		box-sizing: border-box;
	}
	.list-box{
		padding: 20upx 30upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #CACACA;
		background-color: #fff;
		.left-box{
			font-size: 12px;
			.promotion-recommend-box{
				display: flex;
				align-items: center;
				.recommend{
				width: 50upx;
				height: 30upx;
				background-color: #F93578;
				color: #fff;
				border-radius:5upx;
				text-align: center;
				line-height: 30upx; 
				font-size: 12px;
				margin-left: 10upx;
				}
			}
			.open{
				color: #CACACA;
			}
		}
	}
}
</style>
