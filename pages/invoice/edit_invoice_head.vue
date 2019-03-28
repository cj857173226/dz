<template>
	<view class="edit_invoice_head_page">
		<view class="type_change_wrap">
			<view class="type_item">
				<view class="chang_radio_wrap">
					<view class="chang_radio">
						<view class="radio_circle"></view>
					</view>
				</view>
				<view class="info">
					<view class="text title">增值税电子普通发票</view>
					<view class="text title">发送至邮箱或自行下载</view>
					<view class="text title">用途及规则同增值税纸质普通发票</view>
					<view class="text title">请务必确认公司可接受该发票类型</view>
				</view>
			</view>
			<view class="type_item">
				<view class="chang_radio_wrap">
					<view class="chang_radio">
						<view class="radio_circle"></view>
					</view>
				</view>
				<view class="info">
					<view class="text title">增值税专用发票</view>
					<view class="text title">需提供专票资质</view>
					<view class="text title">可以抵扣进项税额</view>
					<view class="text title">仅限一般纳税人企业使用</view>
				</view>
			</view>
		</view>
		<view class="invoice_head_form">
			
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				handleType: '',
				inviceHeadForm:{
					company: "",
					email: "",
					id: "",
					is_default: "",
					number: "",
					type: "",
					user_id: ""
				}
			};
		},
		onLoad(option) {
			this.handleType = option.type;
			if (option.type === 'add') {
				uni.setNavigationBarTitle({
					title: '添加发票抬头'
				});
			} else if (option.type === 'edit') {
				uni.setNavigationBarTitle({
					title: '编辑发票抬头'
				});
				this.inviceHeadForm = JSON.parse(option.param);
			}
		},
		onShow() {

		},
		onNavigationBarButtonTap(e){
			if(e.index === 0){
				console.log('保存')
			}
		},
		computed: {
			...mapState(['islogin', 'token', 'isEditInvoiceHead'])
		},
		methods: {
			...mapMutations(['invoiceHeadEditStatus']),
			saveInvoiceHead(){
				
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
	.edit_invoice_head_page{
		box-sizing: border-box;
		height: 100%;
		padding: 20upx 30upx;
		.type_change_wrap{
			box-sizing: border-box;
			width: 100%;
			padding: 10upx;
			border: 1px solid #eaeaea;
			border-radius: 12upx;
			
		}
	}
</style>
