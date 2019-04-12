import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		isEditAddress:false, // 是编辑了收货地址列表
		isEditCheckIn:false, // 是编辑了 常住人
		isEditInvoiceHead:false, // 是否编辑了发票抬头
		isEditUserInfo:false, // 是否修改个人资料
		isEditStatistics:false, //是否修改了统计账单
	},
	mutations: {
		// 收货地址是否编辑状态更新
		addressEditStatus(state, is){
			state.isEditAddress = is;
		},
		// 常住人编辑状态更新
		checkInEditStatus(state, is){
			state.isEditCheckIn = is;
		},
		// 发票抬头编辑状态更新
		invoiceHeadEditStatus(state, is){
			state.isEditInvoiceHead = is;
		},
		// 个人资料编辑状态更新
		isUserInfoEditStatus(state, is){
			state.isEditUserInfo = is;
		},
		// 统计账单编辑状态更新
		statisticsEditStatus(state,is){
			state.isEditStatistics = is;
		}
	}
})
export default store
