// 域名
const host = 'http://dz.abontest.com';
// 封装请求方法 （详情可以参考uniapp官方文档）
// opt.url:'请求地址'(不能为空),  opt.data: 参数 , opt.header: '自定义请求头'(有默认值)
// opt.method:'请求的方法(默认为GET)'   opt.dataType: 返回数据类型(默认json) // opt.responseType : 响应数据类型(默认为text)
// opt.success:成功的回调  opt.fail:失败的回调  opt.complete:请求完成的回调
export function request(opt) {
	let token = uni.getStorageSync('dz_token');
	const head = {
		"Authorization": 'Bearer '+token,
		"Content-Type": "application/x-www-form-urlencoded",
	}
	let option = {
		url: '',
		method: 'GET',
		data: {},
		dataType: 'json',
		responseType: 'text',
	}
	opt = Object.assign(option, opt);
	uni.request({
		url: host + opt.url,
		method: opt.method.toUpperCase(),
		header: Object.assign(head,opt.header),
		data:opt.data,
		dataType:opt.dataType,
		responseType:opt.responseType,
		success:opt.success,
		fail:opt.fail,
		complete:opt.complete
	})
}
