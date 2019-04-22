// 城市数据
import provinceData from '../common/city-data/province.js'
import cityData from '../common/city-data/city.js'
import areaData from '../common/city-data/area.js'


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

// 正整数验证
const intNumReg = function(num){
	const intReg = /^[0-9]\d*$/;
	if(intReg.test(num)){
		return true
	} else {
		return false;
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
// 隐藏身份证中间部分
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
// 对比两个对象是否相同

const isObjEqual = function(a, b) {
	if (a === b) {
		//判断是否为0和-0
		return a !== 0 || 1 / a === 1 / b;
	}
	//判断是否为null和undefined
	if (a == null || b == null) {
		return a === b;
	}
	//接下来判断a和b的数据类型
	var classNameA = toString.call(a),
		classNameB = toString.call(b);
	//如果数据类型不相等，则返回false
	if (classNameA !== classNameB) {
		return false;
	}
	//如果数据类型相等，再根据不同数据类型分别判断
	switch (classNameA) {
		case '[object RegExp]':
		case '[object String]':
			//进行字符串转换比较
			return '' + a === '' + b;
		case '[object Number]':
			//进行数字转换比较,判断是否为NaN
			if (+a !== +a) {
				return +b !== +b;
			}
			//判断是否为0或-0
			return +a === 0 ? 1 / +a === 1 / b : +a === +b;
		case '[object Date]':
		case '[object Boolean]':
			return +a === +b;
	}
	//如果是对象类型
	if (classNameA == '[object Object]') {
		//获取a和b的属性长度
		var propsA = Object.getOwnPropertyNames(a),
			propsB = Object.getOwnPropertyNames(b);
		if (propsA.length != propsB.length) {
			return false;
		}
		for (var i = 0; i < propsA.length; i++) {
			var propName = propsA[i];
			//如果对应属性对应值不相等，则返回false
			if ((a[propName] !== b[propName]) && propName !== '__ob__') {
				return false;
			}
		}
		return true;
	}
	//如果是数组类型
	if (classNameA == '[object Array]') {
		if (a.toString() == b.toString()) {
			return true;
		}
		return false;
	}
}
// 获取当前时间
const getCurTime = function() {
	var date = new Date();
	var year = date.getFullYear();
	var month = (date.getMonth() + 1) > 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
	var day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();
	return {
		year: year.toString(),
		month: month.toString(),
		day: day.toString()
	}
};

// 获取三级联动城市选择默认值
const getLocalDefaultValue = function(province, city, district) {
	let p_val = 0, // 省 索引
		c_val = 0, // 市 索引
		d_val = 0; // 区 索引
	// 筛选省
	if (!province) {
		p_val = 0;
	} else {
		provinceData.forEach((item, index) => {
			if (item.label === province) {
				p_val = index;
			}
		})
	}
	// 筛选市
	if (!city) {
		p_val = 0;
	} else {
		cityData[p_val].forEach((item, index) => {
			if (item.label === city) {
				c_val = index;
			}
		})
	}
	// 筛选区
	if (!district) {
		p_val = 0;
	} else {
		areaData[p_val][c_val].forEach((item, index) => {
			if (item.label === district) {
				d_val = index;
			}
		})
	}
	return [p_val, c_val, d_val];
}
export default {
	isLogin,
	phoneReg,
	intNumReg,
	emailReg,
	idCardReg,
	nameRge,
	deepCopy,
	layer,
	hideIdCard,
	isObjEqual,
	getCurTime,
	getLocalDefaultValue
}
