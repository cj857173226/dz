(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0ccc":function(e,t,n){},"2e57":function(e,t,n){"use strict";var i=n("c4f3"),o=n.n(i);o.a},bcab:function(e,t,n){"use strict";var i=n("0ccc"),o=n.n(i);o.a},bfe7:function(e,t,n){"use strict";n("83ff");var i=a(n("b0ce")),o=a(n("dcbd"));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(o.default))},c4f3:function(e,t,n){},c56b:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"page_reg"},[n("view",{staticClass:"reg_form"},[n("view",{staticClass:"input"},[e._m(0),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.username,expression:"username",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"color:#ccc;font-size:14px;",placeholder:"请输入手机号",focus:e.autoFocus,eventid:"c3304af8-0"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})]),n("view",{staticClass:"line"}),n("view",{staticClass:"input"},[e._m(1),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.regCode,expression:"regCode",modifiers:{trim:!0}}],attrs:{"placeholder-style":"color:#ccc;font-size:14px;",placeholder:"动态验证码",eventid:"c3304af8-1"},domProps:{value:e.regCode},on:{input:function(t){t.target.composing||(e.regCode=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),n("view",{staticClass:"get_code"},[n("view",{staticClass:"get_code_btn",class:{dis_btn:!0===e.codeDisable},attrs:{eventid:"c3304af8-2"},on:{tap:function(t){t.stopPropagation(),e.getMsgCode(t)}}},[e._v(e._s(e.codeText))])])]),n("view",{staticClass:"line"}),n("view",{staticClass:"input"},[e._m(2),n("input",{attrs:{type:e.pwdType,value:e.userpwd,"placeholder-style":"color:#ccc;font-size:14px;",placeholder:"请输入密码",eventid:"c3304af8-3"},on:{input:e.inputPwd}}),n("view",{staticClass:"img icon_pwd_switch",attrs:{eventid:"c3304af8-4"},on:{tap:e.switchPwd}},["password"===e.pwdType?n("text",{staticClass:"iconfont icon-yanjing"}):e._e(),"text"===e.pwdType?n("text",{staticClass:"iconfont icon-yanjing1"}):e._e()])])]),n("button",{staticClass:"submit",attrs:{eventid:"c3304af8-5"},on:{tap:e.submitRegsiter}},[e._v("注册")])],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"img"},[n("text",{staticClass:"iconfont icon-dianhua3"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"img"},[n("text",{staticClass:"iconfont icon-yanzhengma"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"img"},[n("text",{staticClass:"iconfont icon-mima"})])}];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},dcbd:function(e,t,n){"use strict";n.r(t);var i=n("c56b"),o=n("ea08");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("bcab"),n("2e57");var s=n("2877"),c=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports},e808:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("8534"));function o(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{username:"",userpwd:"",regCode:"",pwdType:"password",codeDisable:!1,codeText:"获取验证码",codeTimer:null,codeLoad:!1,autoFocus:!0}},methods:{inputUsername:function(e){this.username=e.target.value},inputPwd:function(e){this.userpwd=e.target.value},switchPwd:function(){this.pwdType="text"===this.pwdType?"password":"text"},login:function(){console.log("username:"+this.username+",pwd:"+this.userpwd)},getMsgCode:function(){var t=this.username,n=this,o=60;n.codeDisable||n.codeLoad||(""!==t&&i.default.phoneReg(t)?(n.codeLoad=!0,e.request({url:"http://dz.cdabon.com/e/member/doaction.php",method:"GET",data:{enews:"Rzsj",phone:t},success:function(t){n.codeDisable=!0,n.codeTimer=setInterval(function(){o<=0?(clearInterval(n.codeTimer),n.codeTimer=null,n.codeText="重新获取",n.codeDisable=!1):(n.codeText="".concat(o,"s再获取"),o-=1)},1e3),e.showToast({title:"已发送到手机",duration:1e3,icon:"none"})},fail:function(){e.showToast({title:"发送失败",duration:1e3,icon:"none"})},complete:function(){n.codeLoad=!1}})):e.showToast({title:"请输入正的确手机号",duration:1e3,icon:"none"}))},submitRegsiter:function(){var t=this.username,n=this.userpwd,i=this.regCode;""===t?e.showToast({title:"请输入手机号",duration:1e3,icon:"none"}):""===i?e.showToast({title:"请填写验证码",duration:1e3,icon:"none"}):""===n&&e.showToast({title:"请设置密码",duration:1e3,icon:"none"})}}};t.default=a}).call(this,n("6e42")["default"])},ea08:function(e,t,n){"use strict";n.r(t);var i=n("e808"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a}},[["bfe7","common/runtime","common/vendor"]]]);