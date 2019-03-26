<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("static/font/iconfont.css");
	.iconfont{
		font-family: 'iconfont';
		font-size: 24upx;
	}
	html,body{
		font-size: 16px;
	}
	i{
		display: inline;
	}
</style>
