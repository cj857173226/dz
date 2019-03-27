<template>
	<view class="container">
		<srcolls></srcolls>
		<contactRoomDoor/>
	</view>
</template>

<script>
	import srcolls from '../../components/particulars/srcoll-view.vue' //滚动视图组件
	import contactRoomDoor from '../../components/particulars/Contact-room-door.vue' //联系房东组件
	
	export default {
		components:{
			srcolls,
			contactRoomDoor
			
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 100%;
		background-color: #ededed;
	}
</style>
