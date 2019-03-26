
const isLogin = function() {
	const dz_user =	uni.getStorageSync('dz_user');
	if(!dz_user){
		uni.reLaunch({
			url: '/pages/login/login'
		})
	}
}

const phoneReg= function(phone){
	const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if(phoneReg.test(phone)){
		return true
	} else{
		return false
	}
}

export default {  
  isLogin,
  phoneReg
}  