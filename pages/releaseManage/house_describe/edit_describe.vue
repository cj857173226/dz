<template>
	<view class="edit_describe_page">
		<view class="textarea_wrap">
			<textarea placeholder-style="color:#cccccc;font-size:28upx" :placeholder="describeOption.placeholder" :maxlength="describeOption.maxLength" v-model="describeContent"/>
			<view class="control">
				<text class="cur" v-text="describeContent.length"></text>
				<text class="total">/{{describeOption.maxLength}}</text>
			</view>
		</view>
		<view class="tips_wrap">
			<view class="tips" v-for="(d,i) in describeOption.tips" :key="i">
				{{d}}
			</view>
			<view class="tips">
			请不要使用<text>旅馆、旅店、饭店、宾馆、酒店、招待所、客栈、浴池、洗浴、计时休息、酒店式公寓、租界</text>等词汇;
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 描述的内容
				describeContent:'',
				// 当前描述的主题
				describeType: '',
				// 描述页面配置
				describeOption:{
					type:'', //描述的类型
					tips:[],
					maxLength: '', //描述最大字数限制
					placeholder: '', // 文本提示
				},
				// 所有配置数据
				optionsArr:[
					{
						type:'title', //描述的类型
						tips:[
							'建议格式:地标+出租类型+房间形容词,列如:国贸双井10号线地铁阳光充沛的大床房整租;',
							'请不要发布联系方式;'
							],
						maxLength: '22', //描述最大字数限制
						placeholder: '请填写房源标题', // 文本提示
					},
					{
						type:'personality', //描述的类型
						tips:[
							'列如:你将解释一个热情、爱分享、爱读书、喜欢音乐和下厨的IT男生,希望与你一同感受胡同里的有限与自在。',
							],
						maxLength: '2000', //描述最大字数限制
						placeholder: '请填写个性描述', // 文本提示
					},
					{
						type:'inside', //描述的类型
						tips:[
							'列如:欧式田园小清新风格的装饰,配备舒适的大床和床垫,相信您一定会舒适舒服服的睡个好觉!除此之外卧室还有空调、衣柜、挂墙液晶电视、免费百兆wifi、以及独立的卫生间哦(24小时热水是妥妥的)!如果您想做饭、厨房免费提供给您,厨具调料齐备,快来大展厨艺吧!',
							],
						maxLength: '2000', //描述最大字数限制
						placeholder: '请填写内部情况', // 文本提示
					},
					{
						type:'traffic', //描述的类型
						tips:[
							'列如:位于安定门外大街,从安定门地铁口A口5分钟即到。楼下还有27路、119路等多条公交线,十分方便。',
							],
						maxLength: '2000', //描述最大字数限制
						placeholder: '请填写个性描述', // 文本提示
					},
					{
						type:'periphery', //描述的类型
						tips:[
							'列如:楼宇内安装有进口大品牌电梯,楼道干净整洁。同事小区内绿树环抱、清新怡人,在这里您不用担心大都市的吵闹,安静的只有风吹树叶声。物业管理安全有序,24小时保安巡逻,行人出入需刷门禁卡,让您住的安全放心。小区周边设施齐全,餐饮设施有肯德基、永和大王、老上海城隍庙小吃等,金融机构有建设银行、中国银行等,医疗服务有解放军总医院。',
							],
						maxLength: '2000', //描述最大字数限制
						placeholder: '请填写个性描述', // 文本提示
					},
				]
			}
		},
		onLoad(opt) {
			// type 描述类型   title 标题  personality 个性   inside内部   traffic交通  periphery周边
			let navTitle = '';
			console.log(opt)
			const _this = this;
			const describeType = opt.type;
			const describeContent = opt.desc;
			this.describeContent = describeContent;
			switch (describeType) {
				case 'title':
					navTitle = '房源标题'
					break;
				case 'personality':
					navTitle = '个性描述'
					break;
				case 'inside':
					navTitle = '内部情况'
					break;
				case 'traffic':
					navTitle = '交通状况'
					break;
				case 'periphery':
					navTitle = '周边情况'
					break;
			}
			uni.setNavigationBarTitle({
				title: navTitle
			});
			this.describeType = describeType;
			this.optionsArr.forEach(function(item){
				if(item.type === describeType){
					_this.describeOption = item;
				}
			})
		},
		onShow() {

		},
		onNavigationBarButtonTap(e){
			if(e.index === 0){
				this.submitDescribe()
			}
		},
		computed: {

		},
		methods: {
			submitDescribe(){
				console.log(this.describeContent)
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

	.edit_describe_page {
		box-sizing: border-box;
		padding: 40upx 30upx 20upx;
		.textarea_wrap{
			position: relative;
			box-sizing: border-box;
			width: 100%;
			height: 400upx;
			textarea{
				box-sizing: border-box;
				width: 100%;
				height: 100%;
				border: 1px solid #cccccc;
				padding: 10upx;
				font-size: 28upx;
				border-radius: 16upx;
			}
			.control{
				position: absolute;
				right: 10upx;
				bottom: 10upx;
				font-size: 28upx;
				text-align: right;
				.cur{
					color: $theme-color;
				}
				.total{
					color: #cccccc;
				}
			}
		}
		.tips_wrap{
			margin-top: 40upx;
			.tips{
				box-sizing: border-box;
				width: 100%;
				padding: 0 12upx;
				font-size: 28upx;
				margin-bottom:20upx; 
				color: #AAAAAA;
				text{
					color: #000000;
				}
			}
		}
	}
</style>
