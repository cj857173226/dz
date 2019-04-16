<script>
	export default {
		data() {
			return {

			}
		},
		computed: {},

		onLaunch: function() {
			console.log('App Launch')
			let token = uni.getStorageSync('dz_token');
			if (!token) {
				setTimeout(function() {
					uni.reLaunch({
						url: "/pages/login/login"
					})
				}, 0)
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("static/font/iconfont.css");

	.iconfont {
		font-family: 'iconfont';
		font-size: 24upx;
	}

	html,
	body {
		font-size: 16px;
	}

	i {
		display: inline;
	}

	.dis_btn {
		pointer-events: none;
		background: #CCCCCC !important;
	}

	.padding15-wrap {
		padding: 30upx;
	}

	.my-btn-block {
		box-sizing: border-box;
		display: block;
		width: 100%;
		height: 90upx;
		line-height: 90upx;
		text-align: center;
		font-size: 16px;
		background: #f05b72;
		border-radius: 5px;
		color: #fff;
		border: none;
		padding: 0;
		transition: all 0.2s;
	}

	.my-btn-block:active {
		background: #f05b72 !important;
		opacity: 0.8;
	}

	.my-del-block {
		box-sizing: border-box;
		display: block;
		width: 100%;
		height: 90upx;
		line-height: 90upx;
		text-align: center;
		font-size: 16px;
		background: #FFFFFF;
		border-radius: 5px;
		color: #333;
		border: none;
		padding: 0;
		transition: all 0.2s;
	}

	.my-del-block:active {
		background: #f9f9f9 !important;
		color: #AAAAAA;
	}
	
	.placeholder{
		color: #CCCCCC;
		font-size: 28upx;;
	}

	ul li {
		list-style: none;
	}

	uni-picker .uni-picker-action.uni-picker-action-confirm {
		color: #f05b72;
	}
</style>
