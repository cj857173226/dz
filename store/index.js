import Vue from 'vue';
import Vuex from 'vuex';
import helper from '../common/helper.js'
import {
	shortHttp
} from '../common/requestUrl.json'
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		isEditAddress: false, // 是编辑了收货地址列表
		isEditCheckIn: false, // 是编辑了 常住人
		isEditInvoiceHead: false, // 是否编辑了发票抬头
		isEditUserInfo: false, // 是否修改个人资料
		isEditStatistics: false, //是否修改了统计账单
		isEditReleaseInfo: false, // 是否修改房源发布信息
		isEditCheck: false, // 下单页面的是否编辑了常住人
		socketOpen: false, // 是否已登录聊天
		chatList: [], // 聊天列表 
		totalCount: 0, // 未读消息总数
		socketError: false, // 是否连接失败
		socketLoading: false, // 是否在重连聊天
		socketCount: 0, // 重连次数
		socketMax: 5, // 重连最大次数
		socketObj: null, // socket对象
		socketOnopen: null,
		socketOnmessage: null,
		socketOnonclose: null,
		socketOnerror: null,
		socketSatus: '',
		socketTimer: null, //socket重连计时器
		// 初始化的创建房源信息(不做修改)
		initCreateHouseInfo: {
			xz_province: '', //省
			xz_city: '', //市
			xz_district: '', //区
			xz_address: '', //详细地址
			xz_number: '', //门牌号
			leasetype: '', //出租类型：1：整套出租；2：独立房间；3：合住房间
		},
		// 创建房源信息
		createHouseInfo: {
			xz_province: '', //省
			xz_city: '', //市
			xz_district: '', //区
			xz_address: '', //详细地址
			xz_number: '', //门牌号
			leasetype: '', //出租类型：1：整套出租；2：独立房间；3：合住房间
		},
		// 初始化的房源发布信息 (不修改)
		initReleaseObj: {
			id: '',
			title: '', //房屋标题
			titlepic: '', // 标题配图
			titlepic: '',
			xz_zb: '', //坐标,
			xz_province: '', //省
			xz_city: '', //市
			xz_district: '', //区
			xz_address: '', //详细地址
			xz_number: '', //门牌号
			xz_local: '', // 地址(全)
			leasetype: '', //出租类型：1：整套出租；2：独立房间；3：合住房间
			tantnum: '', //宜居人数
			roomtype_shi: '0', //房屋类型，室
			roomtype_ting: '0', //房屋类型，厅
			roomtype_wei: '0', //房屋类型，卫
			roomtype_chu: '0', //房屋类型，厨
			roomtype_yt: '0', //房屋类型，阳台
			area: '', //房屋面积
			sameroom: '0', // 同类房源、床位、房间
			toilet: '', // 卫生间：1，共用；2，独立
			livetogether: '', // 是否和房东同居 1:同居 2:不同居
			bed: '', // 床位信息
			bedsheet: '', //被单更换：tenant，每客一换；day，每日一换
			roomServiceIntro: '', //个性表述
			roomRoominnerIntro: '', //内部情况
			roomLocationIntro: '', //交通情况
			roomAroundIntro: '', //周边情况
			sb_list: [], //配套家具列表
			dayrentprice: '', //每日租金
			cashpledge: '', //押金
			addtenant: '', // 是否允许附加租户
			addtionalprice: '', // 加客附加收费说明
			crvp: '', // 订金比
			crvn: '', //下单后退款安全时间,
			crva: '', //退款扣除订金天数
			minday: '', //最少入住天数
			maxday: '', //最大入住天数
			foreigner: '', //是否接受海外用户
			userule: '', //使用规则
			hiddentips: '', //隐藏提示
			pics: '', //图片信息
			renzheng: '', //认证
			addtenanttips: '', //加客费
			status: -1, // 状态 -1待发布，0,待审核1上架2下架
			daohang: '', //定位导航
			is_complete: 0, //是否完成信息
		},
		// 房源发布信息
		releaseObj: {
			id: '',
			title: '', //房屋标题
			titlepic: '', // 标题配图
			// titlepic: '',
			xz_zb: '', //坐标,
			xz_province: '', //省
			xz_city: '', //市
			xz_district: '', //区
			xz_address: '', //详细地址
			xz_number: '', //门牌号
			xz_local: '', // 地址(全)
			leasetype: '', //出租类型：1：整套出租；2：独立房间；3：合住房间
			tantnum: '', //宜居人数
			roomtype_shi: '0', //房屋类型，室
			roomtype_ting: '0', //房屋类型，厅
			roomtype_wei: '0', //房屋类型，卫
			roomtype_chu: '0', //房屋类型，厨
			roomtype_yt: '0', //房屋类型，阳台
			area: '', //房屋面积
			sameroom: '0', // 同类房源、床位、房间
			toilet: '', // 卫生间：1，共用；2，独立
			livetogether: '', // 是否和房东同居 1:同居 2:不同居
			bed: '', // 床位信息
			bedsheet: '', //被单更换：tenant，每客一换；day，每日一换
			roomServiceIntro: '', //个性表述
			roomRoominnerIntro: '', //内部情况
			roomLocationIntro: '', //交通情况
			roomAroundIntro: '', //周边情况
			sb_list: [], //配套家具列表
			dayrentprice: '', //每日租金
			cashpledge: '', //押金
			addtenant: '', // 是否允许加客
			addtionalprice: '', // 加客费用
			crvp: '', // 订金比
			crvn: '', //下单后退款安全时间,
			crva: '', //退款扣除订金天数
			minday: '1', //最少入住天数
			maxday: '', //最大入住天数
			foreigner: '', //是否接受海外用户
			userule: '', //使用规则
			hiddentips: '', //隐藏贴士
			pics: '', //图片信息
			renzheng: '', //认证
			addtenanttips: '', //加客说明
			status: -1, // 状态 -1待发布，0,待审核1上架2下架
			daohang: '', //定位导航
			is_complete: 0, //是否完成信息
		},
		// 自定义床铺组合
		customBedOption: null,
		// 当前选择的床铺
		curBedOption: null,
		// 初始添加入住人勾选获取的索引数组
		addCheckin: [],
		startTime:'', // 开始时间
		endTime:'', // 结束时间
	},
	mutations: {
		// 开始时间
		startTimeStatus(state,str){
			state.startTime = str
			console.log(state,str);
			
		},
		// 结束时间
		endTimeStatus(state,is){
			state.endTime = is
		},
		// 收货地址是否编辑状态更新
		addressEditStatus(state, is) {
			state.isEditAddress = is;
		},
		// 常住人编辑状态更新
		checkInEditStatus(state, is) {
			state.isEditCheckIn = is;
		},
		// 发票抬头编辑状态更新
		invoiceHeadEditStatus(state, is) {
			state.isEditInvoiceHead = is;
		},
		// 个人资料编辑状态更新
		isUserInfoEditStatus(state, is) {
			state.isEditUserInfo = is;
		},
		// 统计账单编辑状态更新
		statisticsEditStatus(state, is) {
			state.isEditStatistics = is;
		},
		// 修改创建房源信息
		editCreateHouseInfo(state, obj) {
			for (let key in obj) {
				if (state.createHouseInfo.hasOwnProperty(key)) {
					state.createHouseInfo[key] = obj[key];
				}
			}
		},
		// 初始化(清空)创建房源信息
		clearCreateHouseInfo(state) {
			state.createHouseInfo = helper.deepCopy(state.initCreateHouseInfo)
		},
		// 修改房源信息
		editReleaseInfo(state, obj) {
			for (let key in obj) {
				if (state.releaseObj.hasOwnProperty(key)) {
					state.releaseObj[key] = obj[key];
				}
			}
		},
		//初始化(清空)房源信息
		clearReleaseInfo(state) {
			state.releaseObj = helper.deepCopy(state.initReleaseObj)
		},
		// 修改房源发布信息修改状态
		editReleaseInfoStatus(state, is) {
			state.isEditReleaseInfo = is;
		},
		// 修改自定义床铺组合
		eidtCustomBedOption(state, bed) {
			state.customBedOption = bed;
		},
		// 清空自定义床铺组合
		clearCustomBedOption(state) {
			state.customBedOption = null;
		},
		// 修改自定义床铺组合
		eidtCurBedOption(state, bed) {
			state.curBedOption = bed;
		},
		// 清空自定义床铺组合
		clearCurBedOption(state) {
			state.curBedOption = null;
		},
		// 修改索引数组的内容
		checkIn(state, ary) {
			state.addCheckin = ary;
		},
		//建立聊天
		createChatSocket(state) {
			const _this = this;
			state.socketObj = uni.connectSocket({
				url: 'ws://woker.abontest.com:7272',
				success: () => {
					if (state.socketLoading) {
						// helper.layer('聊天室已重连')
					}
					state.socketLoading = false;
					state.socketError = false;
				},
				complete: () => {}
			});
			state.socketSatus = state.socketObj.readyState;
			state.socketObj.onOpen(function(res) {
				let userInfo = uni.getStorageSync('dz_userInfo');
				let userid = userInfo.userid;
				let _data = {
					type: 'login',
					client_user_id: userid,
				}
				// 登录 
				state.socketObj.send({
					data: JSON.stringify(_data),
					success: () => {
						console.log('登录')
						state.socketOpen = true;
					},
					fail: () => {},
					complete: (res) => {}
				})
			});
			state.socketObj.onClose(function() {
				state.socketOpen = false;
				state.socketError = true;
				console.log('WebSocket 断开连接');
				_this.commit('reconnectChat')
			});
			state.socketObj.onMessage(function(res) {
				let _data = JSON.parse(res.data);
				if (_data.type === 'list') {
					let total = 0;
					let _chatList = _data.list ? _data.list : [];
					// console.log(_chatList)
					if (_chatList.length > 0) {
						_chatList.map((item, index, self) => {
							total += item.read_count;
							self[index]['title'] = item.realname;
							self[index]['url'] = item.userpic?shortHttp + item.userpic:'';
							self[index]['count'] = item.read_count;
							self[index]['time'] = item.msg_time;
							self[index]['stick'] = false;
							self[index]['disabled'] = true;
							self[index]['message'] = item.message ? item.message.content : '';
						})
					}
					// if (total >= 1 && total < 99) {
					// 	uni.showTabBarRedDot({
					// 		index: 3,
					// 		// text: total.toString()
					// 	})
					// }else if(total>=99){
					// 	uni.showTabBarRedDot({
					// 		index: 3,
					// 		text: '99'
					// 	})
					// } else{
					// 	uni.hideTabBarRedDot({
					// 		index: 3,
					// 	})
					// }
						
					state.totalCount = total;
					state.chatList = _chatList;


				}
			})
		},
		reconnectChat(state) {
			state.socketCount += 1;
			state.socketLoading = true;
			const _this = this;
			const max = state.socketMax;
			if (state.socketCount >= max) {
				state.socketCount = 0;
				state.socketLoading = false;
			} else {
				setTimeout(() => {
					_this.commit('createChatSocket');
					console.log('重连')
				}, 2000)
			}


		},

	}
})
export default store
