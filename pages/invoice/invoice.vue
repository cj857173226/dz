<template>
	<view class="invice_page">
		<view class="tab_wrap">
			<view class="tab_btn" :class="{'tab_btn_on':curTab === '1'}" @tap="changeTab(1)">已发出</view>
			<view class="tab_btn" :class="{'tab_btn_on':curTab === '2'}" @tap="changeTab(2)">未发出</view>
		</view>
		<scroll-view scroll-y class="invice_list_wrap">
			<view class="invice_list">
				
			</view>
			<view class="no_list">
				
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				curTab: '1',   //1 已发出  2 未发出
			};
		},
		onLoad() {},
		onShow() {},
		onNavigationBarButtonTap(e) {
			if(e.index === 0){
				uni.navigateTo({
					url: '/pages/invoice/invoice_head'
				})
			}
		},
		computed:{
			
		},
		methods:{
			changeTab(index){
				let i = index.toString();
				if(i === this.curTab) return;
				this.curTab = i;
			}
		}
	}
</script>
<style>
	page {
		height: 100%;
		background: #f5f6f8;
	}
</style>

<style lang="scss" scoped>
	$theme-color: #F05B72;
	$back-color:#f5f6f8;
	.invice_page{
		box-sizing: border-box;
		height: 100%;
		padding: 20upx 30upx;
		.tab_wrap{
			box-sizing: border-box;
			width: 100%;
			height: 80upx;
			display: flex;
			flex-direction: row;
			.tab_btn{
				font-size: 32upx;
				color: #aaaaaa;
				box-sizing: border-box;
				height: 80upx;
				flex-grow: 1;
				text-align: center;
				line-height: 80upx;
				border-bottom: 1px solid transparent;
				transition: all 0.15s ease-in;
			}
			.tab_btn_on{
				border-bottom: 1px solid $theme-color;
				color: $theme-color;
			}
		}
		.invice_list_wrap{
			box-sizing: border-box;
			width: 100%;
			margin-top: 40upx;
			height: calc(100% - 120upx);
			.invice_list{
				box-sizing: border-box;
				width: 100%;
			}
		}
	}
	
</style>
