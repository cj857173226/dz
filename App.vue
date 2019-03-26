<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
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
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		font-size: 1rem;
		background: #f05b72;
		border-radius: 5px;
		color: #fff;
		border: none;
		padding: 0;
	}

	.my-btn-block:active {
		background: #f05b72 !important;
		opacity: 0.8;
	}
	ul li{
		list-style: none;
	}
</style>
