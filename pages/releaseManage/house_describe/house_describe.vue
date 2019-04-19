<template>
	<view class="house_describe_page">
		<view class="describe_form">
			<view class="form_item" @tap="editDescribe('title')">
				<view class="left_wrap">
					<view class="label_wrap">
						<view class="title">房源标题</view>
					</view>
					<view class="content_wrap">
						<view class="no_data" v-if="!title">请完善</view>
						<view class="content" v-if="title">{{title}}</view>
					</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="editDescribe('personality')">
				<view class="left_wrap">
					<view class="label_wrap">
						<view class="title">个性描述</view>
						<view class="tag">选填</view>
					</view>
					<view class="content_wrap">
						<view class="no_data" v-if="!roomServiceIntro">请完善</view>
						<view class="content" v-if="roomServiceIntro">{{roomServiceIntro}}</view>
					</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="editDescribe('inside')">
				<view class="left_wrap">
					<view class="label_wrap">
						<view class="title">内部情况</view>
					</view>
					<view class="content_wrap">
						<view class="no_data" v-if="!roomRoominnerIntro">请完善</view>
						<view class="content" v-if="roomRoominnerIntro">{{roomRoominnerIntro}}</view>
					</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="editDescribe('traffic')">
				<view class="left_wrap">
					<view class="label_wrap">
						<view class="title">交通状况</view>
						<view class="tag">选填</view>
					</view>
					<view class="content_wrap">
						<view class="no_data" v-if="!roomLocationIntro">请完善</view>
						<view class="content" v-if="roomLocationIntro">{{roomLocationIntro}}</view>
					</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="form_item" @tap="editDescribe('periphery')">
				<view class="left_wrap">
					<view class="label_wrap">
						<view class="title">周边情况</view>
						<view class="tag">选填</view>
					</view>
					<view class="content_wrap">
						<view class="no_data" v-if="!roomAroundIntro">请完善</view>
						<view class="content" v-if="roomAroundIntro">{{roomAroundIntro}}</view>
					</view>
				</view>
				<view class="after_icon">
					<text class="iconfont icon-right"></text>
				</view>
			</view>
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
				house_id: '',
				// 房源描述表单
				title: '', //标题
				roomServiceIntro: '', //个性
				roomRoominnerIntro: '', //内部
				roomLocationIntro: '', //交通
				roomAroundIntro: '' //周边
			}
		},
		onLoad() {

		},
		onShow() {
			this.getHouseDecs();
		},
		computed: {
			...mapState(['releaseObj']),
		},
		methods: {
			...mapMutations(['editReleaseInfo', 'clearReleaseInfo', 'editReleaseInfoStatus']),
			// 跳转到编辑描述页面
			// type 描述类型   title 标题  personality 个性   inside内部   traffic交通  periphery周边
			editDescribe(type, desc) {
				const url = '/pages/releaseManage/house_describe/edit_describe?type=' + type;
				uni.navigateTo({
					url: url
				})
			},
			// 获取房源描述
			getHouseDecs() {
				const _this = this;
				const _houseInfo = _this.releaseObj;
				_this.house_id = _houseInfo.id;
				_this.title = _houseInfo.title;
				_this.roomServiceIntro = _houseInfo.roomServiceIntro;
				_this.roomRoominnerIntro = _houseInfo.roomRoominnerIntro;
				_this.roomLocationIntro = _houseInfo.roomLocationIntro;
				_this.roomAroundIntro = _houseInfo.roomAroundIntro;
			},
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

	.house_describe_page {
		box-sizing: border-box;
		padding: 0 30upx;
		width: 100%;

		.describe_form {
			box-sizing: border-box;
			width: 100%;

			.form_item {
				box-sizing: border-box;
				padding: 20upx 0;
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid #eaeaea;

				.left_wrap {
					box-sizing: border-box;
					width: calc(100% - 60upx);

					.label_wrap {
						box-sizing: border-box;
						width: 100%;
						display: flex;
						flex-direction: row;
						align-items: center;
						margin-bottom: 8upx;

						.title {
							font-size: 32upx;
						}

						.tag {
							box-sizing: border-box;
							margin-left: 8upx;
							padding: 0 4upx;
							font-size: 24upx;
							color: #cccccc;
							border: 1px solid #cccccc;
							border-radius: 8upx;
						}
					}

					.content_wrap {
						box-sizing: border-box;
						width: 100%;
						min-height: 76upx;
						font-size: 28upx;

						.no_data {
							color: #cccccc;
						}

						.content {
							box-sizing: border-box;
							width: 100%;
							overflow: hidden;
							color: #000000;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							word-break: break-all;
						}
					}
				}

				.after_icon {
					width: 60upx;
					text-align: right;

					.iconfont {
						font-size: 36upx;
						color: #aaaaaa;
					}
				}
			}
		}
	}
</style>
