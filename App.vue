<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapState(['islogin'])
		},
		onLaunch: function() {
			console.log('App Launch')
			this.login()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			...mapMutations(['login'])
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
	.my-del-block:active{
		background: #f9f9f9 !important;
		color: #AAAAAA;
	}

	ul li {
		list-style: none;
	}
</style>
