(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/check_in/edit_check_in"],{"0fc1":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("2f62"),c=n(a("8534")),o=a("942f");function n(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),i.forEach(function(t){s(e,t,a[t])})}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l={data:function(){return{handleType:"",checkForm:{addtime:"",birth:"",bookorderid:"",buyinsuranceyype:"",id:"",idcardauthstate:"",idcardno:"",mobile:"",mobilecode:"",name:"",nation:"",oversea:"",passportno:"",sex:"",userid:""},isLoding:!1,isDeling:!1}},computed:r({},(0,i.mapState)(["isEditCheckIn"])),onLoad:function(t){this.handleType=t.type,"add"===t.type?e.setNavigationBarTitle({title:"添加入住人"}):"edit"===t.type&&(e.setNavigationBarTitle({title:"编辑入住人"}),this.checkForm=JSON.parse(t.param))},onShow:function(){},methods:r({},(0,i.mapMutations)(["checkInEditStatus"]),{submitCheck:function(){if(!this.isLoding){var t=this,a=t.handleType,i=t.checkForm.id,n=t.checkForm.name,r=t.checkForm.idcardno,s=t.checkForm.mobile,l=t.checkForm.passportno;if(""!==n&&c.default.nameRge(n))if(""!==r&&c.default.idCardReg(r))if(""===s||c.default.phoneReg(s)){if("add"===a){t.isLoding=!0;var d={name:n,mobile:s,idcardno:r,passportno:l};(0,o.request)({url:"/wap/api/my.php?action=SaveContact",method:"GET",data:d,success:function(a){"success"===a.data.status?(c.default.layer("添加成功"),t.checkInEditStatus(!0),e.navigateBack({delta:1})):c.default.layer(a.data.errorMsg)},fail:function(e){c.default.layer("系统异常,请稍后再试")},complete:function(){t.isLoding=!1}})}else if("edit"===a){t.isLoding=!0;var u={id:i,name:n,mobile:s,idcardno:r,passportno:l};(0,o.request)({url:"/wap/api/my.php?action=UpdateContact",method:"GET",data:u,success:function(a){"success"===a.data.status?(c.default.layer("修改成功"),t.checkInEditStatus(!0),e.navigateBack({delta:1})):c.default.layer(a.data.errorMsg)},fail:function(e){c.default.layer("系统异常,请稍后再试")},complete:function(){t.isLoding=!1}})}}else c.default.layer("手机号格式有误");else{var f="";f=""===r?"请填写身份证":"身份证格式有误",c.default.layer(f)}else{var m="";m=""===n?"请填写入住人姓名":"姓名只能为中文",c.default.layer(m)}}},delCheck:function(){if(!this.isDeling){var t=this,a=t.checkForm.id;e.showModal({title:"",content:"是否删除该入住人",confirmText:"删除",confirmColor:"#F05B72",success:function(i){i.confirm&&(t.isDeling=!0,console.log("用户点击确定"),(0,o.request)({url:"/wap/api/my.php?action=DeleteContact",method:"GET",data:{id:a},success:function(a){"success"===a.data.status?(c.default.layer("删除成功"),t.checkInEditStatus(!0),e.navigateBack({delta:1})):c.default.layer(a.data.errorMsg)},fail:function(e){c.default.layer("系统异常,请稍后再试")},complete:function(){t.isDeling=!1}}))}})}}})};t.default=l}).call(this,a("6e42")["default"])},"2fb1":function(e,t,a){"use strict";a.r(t);var i=a("0fc1"),c=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=c.a},5832:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"edite_check_page"},[a("view",{staticClass:"head_title"},[e._v("身份证信息(必填)")]),a("view",{staticClass:"check_form"},[a("view",{staticClass:"form_item"},[a("view",{staticClass:"label"},[e._v("姓名")]),a("view",{staticClass:"ipt"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.checkForm.name,expression:"checkForm.name",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#ccc;",placeholder:"确保信息真实",maxlength:"6",eventid:"7b99cf2e-0"},domProps:{value:e.checkForm.name},on:{input:function(t){t.target.composing||(e.checkForm.name=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])]),a("view",{staticClass:"form_item"},[a("view",{staticClass:"label"},[e._v("身份证")]),a("view",{staticClass:"ipt"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.checkForm.idcardno,expression:"checkForm.idcardno",modifiers:{trim:!0}}],attrs:{type:"idcard","placeholder-style":"font-size:14px;color:#ccc;",placeholder:"确保信息真实",eventid:"7b99cf2e-1"},domProps:{value:e.checkForm.idcardno},on:{input:function(t){t.target.composing||(e.checkForm.idcardno=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])])]),a("view",{staticClass:"head_title"},[e._v("其他信息选填(选填)")]),a("view",{staticClass:"check_form"},[a("view",{staticClass:"form_item"},[a("view",{staticClass:"label"},[e._v("手机号")]),a("view",{staticClass:"ipt"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.checkForm.mobile,expression:"checkForm.mobile",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#ccc;",placeholder:"确保信息真实",eventid:"7b99cf2e-2"},domProps:{value:e.checkForm.mobile},on:{input:function(t){t.target.composing||(e.checkForm.mobile=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])]),a("view",{staticClass:"form_item"},[a("view",{staticClass:"label"},[e._v("护照号")]),a("view",{staticClass:"ipt"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.checkForm.passportno,expression:"checkForm.passportno",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#ccc;",placeholder:"确保信息真实",eventid:"7b99cf2e-3"},domProps:{value:e.checkForm.passportno},on:{input:function(t){t.target.composing||(e.checkForm.passportno=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])])]),a("view",{staticClass:"handle_btn_wrap"},["edit"===e.handleType?a("button",{staticClass:"my-del-block",attrs:{eventid:"7b99cf2e-4"},on:{tap:e.delCheck}},[e._v("删除")]):e._e(),a("button",{staticClass:"my-btn-block",class:{dis_btn:e.isLoding},attrs:{eventid:"7b99cf2e-5"},domProps:{textContent:e._s("edit"===e.handleType?"保存":"添加")},on:{tap:function(t){e.submitCheck()}}})],1)])},c=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return c})},8142:function(e,t,a){},"9f2e":function(e,t,a){"use strict";var i=a("c966"),c=a.n(i);c.a},b565:function(e,t,a){"use strict";var i=a("8142"),c=a.n(i);c.a},bcaa:function(e,t,a){"use strict";a("83ff");var i=o(a("b0ce")),c=o(a("e587"));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(c.default))},c966:function(e,t,a){},e587:function(e,t,a){"use strict";a.r(t);var i=a("5832"),c=a("2fb1");for(var o in c)"default"!==o&&function(e){a.d(t,e,function(){return c[e]})}(o);a("b565"),a("9f2e");var n=a("2877"),r=Object(n["a"])(c["default"],i["a"],i["b"],!1,null,"38e9af04",null);t["default"]=r.exports}},[["bcaa","common/runtime","common/vendor"]]]);