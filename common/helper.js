// 检测是否登录
const isLogin = function() {
	const token = uni.getStorageSync('dz_token');
	if (!token) {
		setTimeout(function() {
			uni.reLaunch({
				url: "/pages/login/login"
			})
		}, 0)
	}
}

//  手机号验证
const phoneReg = function(phone) {
	const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if (phoneReg.test(phone)) {
		return true
	} else {
		return false
	}
}

// 邮箱验证
const emailReg = function(email) {
	const emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;;
	if (emailReg.test(email)) {
		return true
	} else {
		return false
	}
}

// 身份证验证
const idCardReg = function(idCard) {
	const idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	if (idCardReg.test(idCard)) {
		return true
	} else {
		return false
	}
}

// 中文名称验证
const nameRge = function(name) {
	const chineseReg = /^[\u4e00-\u9fa5]+$/; // 汉字验证
	if (chineseReg.test(name)) {
		return true
	} else {
		return false
	}
}

// 对象深拷贝
const deepCopy = function(obj) {
	let result = Array.isArray(obj) ? [] : {};
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (typeof obj[key] === 'object') {
				result[key] = deepCopy(obj[key]); //递归复制
			} else {
				result[key] = obj[key];
			}
		}
	}
	return result;
}
const layer = function(msg) {
	uni.showToast({
		title: msg,
		duration: 1500,
		icon: 'none'
	});

}

const hideIdCard = function(idCard) {
	if (typeof idCard == 'number') {
		idCard = idCard.toString()
	}
	let strArr = idCard.split('');
	for (let i = 5; i < strArr.length - 4; i++) {
		strArr[i] = '*'
	}
	return strArr.join('')
}

export default {
	isLogin,
	
	phoneReg,
	emailReg,
	idCardReg,
	nameRge,
	deepCopy,
	layer,
	hideIdCard
}
