import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		islogin: false,
		token: '',
		avatarUrl: '',
		userName: '',
		isEditAddress:false, // 是编辑了收货地址列表
		isEditCheckIn:false, // 是编辑了 常住人
	},
	mutations: {
		login(state, provider) {
			state.islogin = true
		},
		logout(state) {
			state.islogin = false;
			state.token = '';
			state.userName = '';
			state.avatarUrl = '';
		},
		// 收货地址是否编辑状态更新
		addressEditStatus(state, is){
			state.isEditAddress = is;
		},
		// 常住人编辑状态更新
		checkInEditStatus(state, is){
			state.isEditCheckIn = is;
		}
	}
})
export default store
