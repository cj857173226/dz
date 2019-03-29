// 检测是否登录
const isLogin = function() {
	const dz_user =	uni.getStorageSync('dz_user');
	if(!dz_user){
		uni.reLaunch({
			url: '/pages/login/login'
		})
	}
}

//  手机号验证
const phoneReg= function(phone){
	const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if(phoneReg.test(phone)){
		return true
	} else{
		return false
	}
}

// 邮箱验证
const emailReg = function(email){
	const emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;;
	if(emailReg.test(email)){
		return true
	} else{
		return false
	}
}

// 身份证验证
const idCardReg = function(idCard){
	const idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	if(idCardReg.test(idCard)){
		return true
	} else{
		return false
	}
}

// 中文名称验证
const nameRge = function (name){
	const chineseReg = /^[\u4e00-\u9fa5]+$/; // 汉字验证
	if(chineseReg.test(name)){
		return true
	} else{
		return false
	}
}

// 对象深拷贝
const deepCopy = function(obj) {
    let result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                result[key] = deepCopy(obj[key]);   //递归复制
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

export default {  
  isLogin,
  phoneReg,
  emailReg,
  idCardReg,
  nameRge,
  deepCopy
}  