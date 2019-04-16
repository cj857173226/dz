<template>
	<view class="local_set_page">
		<view class="local_form">
			<view class="form_item" @tap="cityPickerShow()">
				<view class="left">
					<view class="label">地区</view>
					<view class="empty_data" v-if="local ===''">请选择</view>
					<view class="content" v-if="local !==''">{{local}}</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="left">
					<view class="label">详细地址</view>
					<view class="textarea_wrap">
						<textarea placeholder="请填写" placeholder-class="placeholder" maxlength="100" v-model="address" />
						<view class="word_num"><text class="cur" v-text="address.length"></text>/100</view>
					</view>
					<view class="tips">无需再填写省市。例:中山路阳光小区8号楼2单元</view>
				</view>
			</view>
	
			<view class="form_item">
				<view class="left">
					<view class="label">门牌号</view>
					<view class="textarea_wrap">
						<textarea placeholder="请填写门牌号" placeholder-class="placeholder" maxlength="50" v-model="number"/>
						<view class="word_num"><text class="cur" v-text="number.length"></text>/50</view>
					</view>
					<view class="tips">房客预定成功后可见。例:201室</view>
				</view>
			</view>
		</view>
		<button class="my-btn-block" :class="{'dis_btn':btnIsDis}" style="margin-top: 40upx ;" v-text="type==='add'?'下一步':'保存'" @tap="completeLocal"></button>
		<mpvue-city-picker ref="localPicker" :pickerValueDefault="cityVlue" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'

	import {
		mapState,
		mapMutations
	} from 'vuex'
	import helper from '../../common/helper.js'
	import {
		request
	} from '../../common/request.js'
	export default{
		data(){
			return{
				type:'', // 页面编辑类型 add添加  edit 编辑
				province:'', // 省
				city:'',// 市
				district:'', // 区
				address:'', // 详细地址
				number:'', // 门牌号
				// 城市选择 默认值
				cityVlue:[0,0,0],
			}
		},
		onLoad(e){
			this.type = e.type;
			helper.getLocalDefaultValue(this.province, this.city, this.district);
		},
		onShow(){
			
		},
		components:{
			mpvueCityPicker
		},
		computed:{
			// 根据省市区 返回地址
			local:{
				get:function(){
					if(this.province===''||this.city===''||this.district===''){
						return '';
					}else{
						return this.province+'-'+this.city+'-'+this.district;
					}
				}
			},
			// 计算按钮是否被禁用
			btnIsDis:{
				get:function(){
					if(this.local === ''|| this.address ==='' || this.number ===''){
						return true;
					} else{
						return false
					}
				}
			},
		},
		methods:{
			// 弹出城市选择器
			cityPickerShow(){
				this.$refs.localPicker.show();
			},
			// 确认选择城市
			onConfirm(e){
				console.log(e)
				const _local = e.label.split('-');
				this.province = _local[0];
				this.city = _local[1];
				this.district = _local[2];
				this.cityVlue = helper.getLocalDefaultValue(_local[0],_local[1],_local[2])
			},
			// 取消选择城市
			onCancel(e){
				
			},
			// 下一步或保存
			completeLocal(){
				if(this.local === ''|| this.address ==='' || this.number ==='') return;
				if(this.type === 'add'){
					uni.navigateTo({
						url:'/pages/releaseManage/rent_type?type=add',
					})
				} else if(this.type === 'edit'){
					console.log('保存')
				}
			}
		}
	}
</script>

<style>
	page{
		height: 100%;
	}
</style>
<style lang="scss" scoped>
	$theme-color: #F05B72;
	.local_set_page{
		box-sizing: border-box;
		min-height: 100%;
		padding: 20upx 30upx;
		
		.local_form{
			box-sizing: border-box;
			width: 100%;
			.form_item{
				box-sizing: border-box;
				width:100%;
				padding: 20upx 0;
				border-bottom: 1px solid #eaeaea;
				box-sizing: border-box;
				display: flex;
				flex-direction: row;
				.left{
					flex-grow: 1;
					.label{
						font-size: 32upx;
						margin-bottom: 20upx;
					}
					.empty_data{
						font-size: 28upx;
						color: #cccccc;
					}
					.content{
						font-size: 28upx;
					}
					.textarea_wrap{
						position: relative;
						box-sizing: border-box;
						width: 100%;
						height: 240upx;
						padding: 20upx;
						border: 1px solid #cccccc;
						border-radius: 12upx;
						textarea{
							width: 100%;
							height: 100%;
							font-size: 28upx;
						}
						.word_num{
							position: absolute;
							right: 20upx;
							bottom: 20upx;
							font-size: 28upx;
							.cur{
								color: $theme-color;
							}
						}
					}
					.tips{
						font-size: 28upx;
						color: #aaaaaa;
						margin-top: 20upx;
					}
				}
				.after_icon{
					width: 40upx;
					display: flex;
					justify-content: center;
					align-items: center;
					.iconfont{
						font-size: 36upx;
						color: #cccccc;
					}
				}
			}
		}
	}
</style>
