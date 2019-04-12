<template>
	<view class="edit_invoice_head_page">
		<view class="type_change_wrap">
			<view class="type_item" @tap="changeInviceHeadType('common')">
				<view class="chang_radio_wrap">
					<view class="chang_radio" :class="{'chang_radio_on':inviceHeadForm.type==='common'}">
						<view class="radio_circle" v-if="inviceHeadForm.type==='common'"></view>
					</view>
				</view>
				<view class="info">
					<view class="text title">增值税电子普通发票</view>
					<view class="text ">发送至邮箱或自行下载</view>
					<view class="text ">用途及规则同增值税纸质普通发票</view>
					<view class="text ">请务必确认公司可接受该发票类型</view>
				</view>
			</view>
			<view class="t_line"></view>
			<view class="type_item" @tap="changeInviceHeadType('special')">
				<view class="chang_radio_wrap">
					<view class="chang_radio" :class="{'chang_radio_on':inviceHeadForm.type==='special'}">
						<view class="radio_circle" v-if="inviceHeadForm.type==='special'"></view>
					</view>
				</view>
				<view class="info">
					<view class="text title">增值税专用发票</view>
					<view class="text ">需提供专票资质</view>
					<view class="text ">可以抵扣进项税额</view>
					<view class="text ">仅限一般纳税人企业使用</view>
				</view>
			</view>
		</view>
		<view class="invoice_head_form">
			<view class="form-item">
				<view class="label">公司全称</view>
				<view class="input">
					<input type="text" placeholder-style="font-size:14px;color:#cccccc;" placeholder="公司全称" v-model="inviceHeadForm.company">
				</view>
			</view>
			<view class="form-item">
				<view class="label">纳税人识别号</view>
				<view class="input">
					<input type="text" placeholder-style="font-size:14px;color:#cccccc;" placeholder="纳税人识别号" v-model="inviceHeadForm.number">
				</view>
			</view>
			<view class="form-item">
				<view class="label">电子邮箱</view>
				<view class="input">
					<input type="text" placeholder-style="font-size:14px;color:#cccccc;" placeholder="电子邮箱" v-model="inviceHeadForm.email">
				</view>
			</view>
			<view class="form-item" v-if="isSetDefault">
				<view class="label">设置默认抬头</view>
				<view class="input">
					<switch class="o-switch" color="#F05B72" :checked="inviceHeadForm.is_default==='1'" @change="defaultSwitch" />
				</view>
			</view>
		</view>
		<button class="my-del-block" v-if="handleType==='edit'" @tap="deleteInvoiceHead">删除</button>
	</view>
</template>

<script>
	import helper from '../../common/helper.js'
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import {
		request
	} from '../../common/request.js'
	import {
		shortHttp
	} from '../../common/requestUrl.json'
	export default {
		data() {
			return {
				handleType: '',
				isSetDefault: true,
				inviceHeadForm: {
					company: "",
					email: "",
					id: "",
					is_default: "0",
					number: "",
					type: "common",
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
				this.isSetDefault = JSON.parse(option.param).is_default === '1' ? false : true
			}
		},
		onShow() {

		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.saveInvoiceHead()
			}
		},
		computed: {
			...mapState(['islogin', 'token', 'isEditInvoiceHead'])
		},
		methods: {
			...mapMutations(['invoiceHeadEditStatus']),
			// 选择发票抬头类型
			// type---> special:专用发票   common:普通发票
			changeInviceHeadType(type) {
				this.inviceHeadForm.type = type;
			},
			// 保存发票抬头
			saveInvoiceHead() {
				const _this = this;
				const company = _this.inviceHeadForm.company.trim();
				const email = _this.inviceHeadForm.email.trim();
				const number = _this.inviceHeadForm.number.trim();
				const type = _this.inviceHeadForm.type;
				const defaultHead = _this.inviceHeadForm.is_default;
				const id = _this.inviceHeadForm.id;
				if (company === '') {
					uni.showToast({
						title: '公司名称不能为空',
						duration: 1500,
						icon: 'none'
					});
				} else if (number === '') {

					uni.showToast({
						title: '识别号不能为空',
						duration: 1500,
						icon: 'none'
					});

				} else if (email === '') {
					uni.showToast({
						title: '邮箱不能为空',
						duration: 1500,
						icon: 'none'
					});
				} else {
					if (!helper.emailReg(email)) {
						uni.showToast({
							title: '邮箱格式有误',
							duration: 1500,
							icon: 'none'
						});
					} else {
						if (_this.handleType === 'add') {
							let param = {
								type: type,
								company: company,
								number: number,
								email: email,
								is_default: defaultHead
							}
							_this.addInvoiceHead(param)
						} else if (_this.handleType === 'edit') {
							let param = {
								id:id,
								type: type,
								company: company,
								number: number,
								email: email,
								is_default: defaultHead
							}
							_this.editInvoiceHead(param)
						}
					}

				}
			},
			// 添加发票抬头
			addInvoiceHead(par){
				const _this = this;
				uni.showLoading({
					title:'添加中...'
				})
				request({
					url:'/wap/api/my.php?action=SaveInvoice',
					data:par,
					success:(res)=>{
						if(res.data.status ==='success'){
							_this.invoiceHeadEditStatus(true);
							uni.navigateBack({
								delta:1,
							})
						}else{
							helper.layer('添加失败')
						}
					},
					complete:()=>{
						uni.hideLoading()
					}
				})
			},
			// 修改发表抬头
			editInvoiceHead(par){
				const _this = this;
				uni.showLoading({
					title:'添加中...'
				})
				request({
					url:'/wap/api/my.php?action=UpdateInvoice',
					data:par,
					success:(res)=>{
						if(res.data.status ==='success'){
							_this.invoiceHeadEditStatus(true);
							uni.navigateBack({
								delta:1,
							})
						}else{
							helper.layer('修改失败')
						}
					},
					complete:()=>{
						uni.hideLoading()
					}
				})
			},
			//删除发票抬头
			deleteInvoiceHead(){
				 const _this = this;
				 const id = _this.inviceHeadForm.id;
				 uni.showModal({
				 	title: '',
				 	content: '是否删除该发票抬头',
				 	confirmText: '删除',
				 	confirmColor: '#F05B72',
					success:(res)=>{
						if(res.confirm){
							 uni.showLoading({
								title:'删除中...'
							})
							request({
								url:'/wap/api/my.php?action=DeleteInvoice&id='+id,
								success:(res)=>{
									if(res.data.status ==='success'){
										_this.invoiceHeadEditStatus(true);
										uni.navigateBack({
											delta:1,
										})
									}else{
										helper.layer('删除失败')
									}
								},
								complete:()=>{
									uni.hideLoading()
								}
							})
						}
					}
				 })
				
			},
			// 设置默认抬头
			defaultSwitch(e) {
				console.log(e)
				this.inviceHeadForm.is_default = e.detail.value ? '1' : '0'
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

	.edit_invoice_head_page {
		box-sizing: border-box;
		height: 100%;
		padding: 20upx 30upx;

		.type_change_wrap {
			box-sizing: border-box;
			width: 100%;
			padding: 10upx;
			border: 1px solid #eaeaea;
			border-radius: 12upx;
			background: #ffffff;

			.t_line {
				width: 86%;
				height: 1px;
				background: #eaeaea;
				margin: 0 auto;
			}

			.type_item {
				box-sizing: border-box;
				padding: 20upx 10upx;
				display: flex;
				flex-direction: row;

				.chang_radio_wrap {
					width: 40upx;

					.chang_radio {
						box-sizing: border-box;
						margin-top: 4upx;
						width: 36upx;
						height: 36upx;
						display: flex;
						justify-content: center;
						align-items: center;
						border: 1px solid #aaaaaa;
						border-radius: 18upx;

						.radio_circle {
							box-sizing: border-box;
							width: 20upx;
							height: 20upx;
							background: $theme-color;
							border-radius: 10upx;
						}
					}

					.chang_radio_on {
						border: 1px solid $theme-color;
					}


				}

				.info {
					box-sizing: border-box;
					padding-left: 16upx;
					flex-grow: 1;

					.text {
						font-size: 28upx;
						color: #ccc;
						margin-bottom: 4upx;
					}

					.title {
						font-size: 32upx;
						color: #333;
					}
				}
			}
		}

		.invoice_head_form {
			box-sizing: border-box;
			padding: 0 20upx;
			background: #ffffff;
			margin-top: 20upx;
			border-radius: 12upx;

			.form-item {
				box-sizing: border-box;
				padding: 10upx 0;
				height: 100upx;
				border-bottom: 1px solid #eaeaea;
				display: flex;

				&:last-child {
					border-bottom: none;
				}

				.label {
					display: flex;
					align-items: center;
					width: 110px;
					overflow: hidden;
					text-overflow: ellipsis;
					text-align: right;
					font-size: 16px;
				}

				.input {
					display: flex;
					flex-grow: 1;
					align-items: center;
					flex-direction: row-reverse;
					font-size: 14px;

					& input {
						text-align: right;
						font-size: 14px;
					}
				}
			}
		}

		.my-del-block {
			margin-top: 40upx;
		}
	}
</style>
