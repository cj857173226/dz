(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0ccc":function(e,t,n){},"2e57":function(e,t,n){"use strict";var o=n("c4f3"),a=n.n(o);a.a},bcab:function(e,t,n){"use strict";var o=n("0ccc"),a=n.n(o);a.a},bfe7:function(e,t,n){"use strict";n("83ff");var o=s(n("b0ce")),a=s(n("dcbd"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(a.default))},c4f3:function(e,t,n){},c691:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"page_reg"},[n("view",{staticClass:"reg_form"},[n("view",{staticClass:"input"},[e._m(0),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.username,expression:"username",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-class":"placeholder",placeholder:"请输入手机号",focus:e.autoFocus,eventid:"c3304af8-0"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})]),n("view",{staticClass:"line"}),n("view",{staticClass:"input"},[e._m(1),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.regCode,expression:"regCode",modifiers:{trim:!0}}],attrs:{"placeholder-class":"placeholder",placeholder:"动态验证码",eventid:"c3304af8-1"},domProps:{value:e.regCode},on:{input:function(t){t.target.composing||(e.regCode=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),n("view",{staticClass:"get_code"},[n("view",{staticClass:"get_code_btn",class:{dis_btn:!0===e.codeDisable},attrs:{eventid:"c3304af8-2"},on:{tap:function(t){t.stopPropagation(),e.getMsgCode(t)}}},[e._v(e._s(e.codeText))])])]),n("view",{staticClass:"line"}),n("view",{staticClass:"input"},[e._m(2),n("input",{attrs:{password:"password"===e.pwdType,value:e.userpwd,"placeholder-class":"placeholder",placeholder:"请设置密码",eventid:"c3304af8-3"},on:{input:e.inputPwd}}),n("view",{staticClass:"img icon_pwd_switch",attrs:{eventid:"c3304af8-4"},on:{tap:e.switchPwd}},["password"===e.pwdType?n("text",{staticClass:"iconfont icon-yanjing"}):e._e(),"text"===e.pwdType?n("text",{staticClass:"iconfont icon-yanjing1"}):e._e()])])]),n("button",{staticClass:"submit",class:{dis_btn:!0===e.registerLoad},attrs:{eventid:"c3304af8-5"},domProps:{textContent:e._s(e.registerLoad?"注册中...":"注册")},on:{tap:e.submitRegsiter}})],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"img"},[n("text",{staticClass:"iconfont icon-dianhua3"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"img"},[n("text",{staticClass:"iconfont icon-yanzhengma"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"img"},[n("text",{staticClass:"iconfont icon-mima"})])}];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},dcbd:function(e,t,n){"use strict";n.r(t);var o=n("c691"),a=n("ea08");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("bcab"),n("2e57");var i=n("2877"),r=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},e808:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62"),a=i(n("8534")),s=n("3c10");function i(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{host:s.shortHttp,username:"",userpwd:"",regCode:"",pwdType:"password",codeText:"获取验证码",codeDisable:!1,codeTimer:null,codeLoad:!1,autoFocus:!0,regPhoneLoad:!1,registerLoad:!1}},computed:{},methods:r({},(0,o.mapMutations)(["createChatSocket"]),{inputUsername:function(e){this.username=e.target.value},inputPwd:function(e){this.userpwd=e.target.value},switchPwd:function(){this.pwdType="text"===this.pwdType?"password":"text"},login:function(){console.log("username:"+this.username+",pwd:"+this.userpwd)},getMsgCode:function(){var t=this.username,n=this,o=60;if(!(n.codeDisable||n.codeLoad||n.regPhoneLoad))if(""!==t&&a.default.phoneReg(t))n.regPhoneLoad=!0,e.request({url:n.host+"/wap/api/global.php?action=CheckParams4H5&type=phone",method:"GET",data:{key:t,params:t},success:function(a){"success"===a.data.status?(n.codeLoad=!0,e.request({url:n.host+"/e/member/doaction.php",method:"GET",data:{enews:"Rzsj",phone:t},success:function(t){"success"===t.data.status?(n.codeDisable=!0,n.codeTimer=setInterval(function(){o<=0?(clearInterval(n.codeTimer),n.codeTimer=null,n.codeText="重新获取",n.codeDisable=!1):(n.codeText="".concat(o,"s再获取"),o-=1)},1e3),e.showToast({title:"已发送到手机",duration:1500,icon:"none"})):e.showToast({title:t.data.errorMsg,duration:1500,icon:"none"})},fail:function(){e.showToast({title:"发送失败,请稍后重试",duration:1e3,icon:"none"})},complete:function(){n.codeLoad=!1}})):e.showToast({title:a.data.errorMsg,duration:1500,icon:"none"})},fail:function(){e.showToast({title:"系统异常,请稍后再试",duration:1e3,icon:"none"})},complete:function(){n.regPhoneLoad=!1}});else{var s="";""===t?s="手机号不能为空":a.default.phoneReg(t)||(s="手机号格式有误"),e.showToast({title:s,duration:1500,icon:"none"})}},submitRegsiter:function(){var t=this,n=this.username,o=this.userpwd,a=this.regCode;t.registerLoad||(""===n?e.showToast({title:"请输入手机号",duration:1e3,icon:"none"}):""===a?e.showToast({title:"请填写验证码",duration:1500,icon:"none"}):""===o?e.showToast({title:"请设置密码",duration:1500,icon:"none"}):(t.registerLoad=!0,e.request({url:t.host+"/e/member/ajax/index.php?action=checkregister",method:"POST",data:{password:o,phone:n,code:a},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(n){"success"===n.data.status?(e.setStorageSync("dz_userInfo",n.data.content),e.setStorageSync("dz_token",n.data.content.token),t.createChatSocket(),e.reLaunch({url:"/pages/index/index"})):e.showToast({title:n.data.msg,duration:1500,icon:"none"})},fail:function(){},complete:function(){t.registerLoad=!1}})))}})};t.default=u}).call(this,n("6e42")["default"])},ea08:function(e,t,n){"use strict";n.r(t);var o=n("e808"),a=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);t["default"]=a.a}},[["bfe7","common/runtime","common/vendor"]]]);