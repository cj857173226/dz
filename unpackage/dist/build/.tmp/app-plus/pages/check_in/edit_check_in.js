(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/check_in/edit_check_in"],{"0fc1":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("2f62");function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){c(e,t,i[t])})}return e}function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var r={data:function(){return{handleType:"",checkForm:{addtime:"",birth:"",bookorderid:"",buyinsuranceyype:"",id:"",idcardauthstate:"",idcardno:"",mobile:"",mobilecode:"",name:"",nation:"",oversea:"",passportno:"",sex:"",userid:""}}},computed:o({},(0,a.mapState)(["islogin","token","isEditCheckIn"])),onLoad:function(t){this.handleType=t.type,"add"===t.type?e.setNavigationBarTitle({title:"添加入住人"}):"edit"===t.type&&(e.setNavigationBarTitle({title:"编辑入住人"}),this.checkForm=JSON.parse(t.param))},onShow:function(){},methods:o({},(0,a.mapMutations)(["checkInEditStatus"]))};t.default=r}).call(this,i("6e42")["default"])},"2fb1":function(e,t,i){"use strict";i.r(t);var a=i("0fc1"),o=i.n(a);for(var c in a)"default"!==c&&function(e){i.d(t,e,function(){return a[e]})}(c);t["default"]=o.a},"5a6b":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"edite_check_page"},[i("view",{staticClass:"head_title"},[e._v("身份证信息(必填)")]),i("view",{staticClass:"check_form"},[i("view",{staticClass:"form_item"},[i("view",{staticClass:"label"},[e._v("姓名")]),i("view",{staticClass:"ipt"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.checkForm.name,expression:"checkForm.name",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#ccc;",placeholder:"确保信息真实",eventid:"7b99cf2e-0"},domProps:{value:e.checkForm.name},on:{input:function(t){t.target.composing||(e.checkForm.name=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])]),i("view",{staticClass:"form_item"},[i("view",{staticClass:"label"},[e._v("身份证")]),i("view",{staticClass:"ipt"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.checkForm.idcardno,expression:"checkForm.idcardno",modifiers:{trim:!0}}],attrs:{type:"idcard","placeholder-style":"font-size:14px;color:#ccc;",placeholder:"确保信息真实",eventid:"7b99cf2e-1"},domProps:{value:e.checkForm.idcardno},on:{input:function(t){t.target.composing||(e.checkForm.idcardno=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])])]),i("view",{staticClass:"head_title"},[e._v("其他信息选填(必填)")]),i("view",{staticClass:"check_form"},[i("view",{staticClass:"form_item"},[i("view",{staticClass:"label"},[e._v("手机号")]),i("view",{staticClass:"ipt"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.checkForm.mobile,expression:"checkForm.mobile",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#ccc;",placeholder:"确保信息真实",eventid:"7b99cf2e-2"},domProps:{value:e.checkForm.mobile},on:{input:function(t){t.target.composing||(e.checkForm.mobile=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])]),i("view",{staticClass:"form_item"},[i("view",{staticClass:"label"},[e._v("护照号")]),i("view",{staticClass:"ipt"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.checkForm.passportno,expression:"checkForm.passportno",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#ccc;",placeholder:"确保信息真实",eventid:"7b99cf2e-3"},domProps:{value:e.checkForm.passportno},on:{input:function(t){t.target.composing||(e.checkForm.passportno=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])])]),i("view",{staticClass:"handle_btn_wrap"},["edit"===e.handleType?i("button",{staticClass:"my-del-block"},[e._v("删除")]):e._e(),i("button",{staticClass:"my-btn-block",domProps:{textContent:e._s("edit"===e.handleType?"保存":"添加")}})],1)])},o=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return o})},"691b":function(e,t,i){"use strict";var a=i("f170"),o=i.n(a);o.a},8142:function(e,t,i){},b565:function(e,t,i){"use strict";var a=i("8142"),o=i.n(a);o.a},bcaa:function(e,t,i){"use strict";i("83ff");var a=c(i("b0ce")),o=c(i("e587"));function c(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(o.default))},e587:function(e,t,i){"use strict";i.r(t);var a=i("5a6b"),o=i("2fb1");for(var c in o)"default"!==c&&function(e){i.d(t,e,function(){return o[e]})}(c);i("b565"),i("691b");var r=i("2877"),n=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"3f0bffa8",null);t["default"]=n.exports},f170:function(e,t,i){}},[["bcaa","common/runtime","common/vendor"]]]);