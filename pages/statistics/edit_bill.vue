<template>
	<view class="edit_bill_page">
			<view class="edit_bill_form">
			<view class="form_item">
				<view class="icon">
					<text class="iconfont icon-jine"></text>
				</view>
				<view class="label">金额</view>
				<view class="content_wrap">
					<input type="text" placeholder="最高设置金额99999.99" placeholder-style="color:#ccc;" maxlength="10"> 
				</view>
				<view class="unit">元</view>
			</view>
			<view class="form_item">
				<view class="icon">
					<text class="iconfont icon-tongji6" ></text>
				</view>
				<view class="label" v-text="editType==='out'?'成本分类':'收入来源'"></view>
				<view class="content_wrap">
					<view class="no_data">请选择</view>
					<view class="content"></view>
				</view>
				<view class="after-icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="editNote()">
				<view class="icon">
					<text class="iconfont icon-beizhu"></text>
				</view>
				<view class="label">备注</view>
				<view class="content_wrap">
					<view class="no_data">请填写备注内容</view>
					<view class="content"></view>
				</view>
				<view class="after-icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item">
				<view class="icon">
					<text class="iconfont icon-rili"></text>
				</view>
				<view class="label">日期</view>
				<view class="content_wrap">
					<view class="no_data">请选择日期</view>
					<view class="content"></view>
				</view>
				<view class="after-icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
		</view>
		<button class="del_btn my-del-block">删除</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				editType:'',
				editForm:{
					
				}
			}
		},
		onLoad(opt){
			const param = JSON.parse(opt.param)
			this.editType = param.type;
			uni.setNavigationBarTitle({
			title: param.type === 'in'? '编辑收入': '编辑成本'
		});
		},
		onShow(){
			
		},
		computed:{
			
		},
		methods:{
			// 编辑备注
			editNote(){
				uni.navigateTo({
					url:'/pages/statistics/bill_note'
				})
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
	.edit_bill_page{
		box-sizing: border-box;
		padding: 0 20upx;
		.edit_bill_form{
			box-sizing: border-box;
			width: 100%;
			.form_item{
				box-sizing: border-box;
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #eaeaea;
				.icon{
					height: 100%;
					width: 60upx;
					color: #AAAAAA;
					display: flex;
					align-items: center;
					justify-content: center;
					.iconfont{
						font-size: 32upx;
					}
				}
				.label{
					height: 100%;
					width: 140upx;
					display: flex;
					align-items: center;
				}
				.content_wrap{
					box-sizing: border-box;
					width: calc(100% - 260upx);
					.no_data{
						text-align: right;
						color: #cccccc;
					}
					.content{
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						text-align: right
					}
					input{
						text-align: right;
					}
				}
				
				.unit,
				.after-icon{
					height: 100%;
					width: 60upx;
					text-align: center;
				}
				.unit{
					line-height: 86upx;
				}
				.after-icon{
					line-height: 90upx;
					.iconfont{
						display: inline-block;
						margin-top: 4upx;
						font-size:32upx;
						color: #cccccc
					}
				}
			}
		}
		.del_btn{
			color: #AAAAAA;
			margin-top: 40upx;
		}
	}
</style>