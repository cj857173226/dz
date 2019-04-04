<template>
	<view class="bill_note_page">
		<view class="bill_note_wrap">
			<textarea placeholder-style="color:#cccccc;" placeholder="请填写备注" :maxlength="maxLength"/>
			<view class="control">
				<text class="cur" v-text="noteText.length"></text>
				<text class="total">/{{maxLength}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				noteText:'',
				maxLength: 35,
			}
		},
		onLoad(){
			
		},
		onShow(){
			
		},
		computed:{
			
		},
		methods:{
			
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
	.bill_note_page{
		box-sizing: border-box;
		padding: 40upx 30upx 20upx;
		.bill_note_wrap{
			position: relative;
			box-sizing: border-box;
			height: 360upx;
			border: 1px solid #cccccc;
			border-radius: 8upx;
			textarea{
				box-sizing: border-box;
				width: 100%;
				height: 100%;
				padding: 20upx;
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
	}
</style>