(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/particulars/editor_check_in"],{4161:function(e,t,a){"use strict";var i=a("9c4a"),c=a.n(i);c.a},"43b9":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"edite_check_page"},[a("view",{staticClass:"head_title"},[e._v("身份证信息(必填)")]),a("view",{staticClass:"check_form"},[a("view",{staticClass:"form_item"},[a("view",{staticClass:"label"},[e._v("姓名")]),a("view",{staticClass:"ipt"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.checkForm.name,expression:"checkForm.name",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#ccc;",placeholder:"确保信息真实",maxlength:"6",eventid:"5deac3bc-0"},domProps:{value:e.checkForm.name},on:{input:function(t){t.target.composing||(e.checkForm.name=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])]),a("view",{staticClass:"form_item"},[a("view",{staticClass:"label"},[e._v("身份证")]),a("view",{staticClass:"ipt"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.checkForm.idcardno,expression:"checkForm.idcardno",modifiers:{trim:!0}}],attrs:{type:"idcard","placeholder-style":"font-size:14px;color:#ccc;",placeholder:"确保信息真实",eventid:"5deac3bc-1"},domProps:{value:e.checkForm.idcardno},on:{input:function(t){t.target.composing||(e.checkForm.idcardno=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])])]),a("view",{staticClass:"head_title"},[e._v("其他信息选填(选填)")]),a("view",{staticClass:"check_form"},[a("view",{staticClass:"form_item"},[a("view",{staticClass:"label"},[e._v("手机号")]),a("view",{staticClass:"ipt"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.checkForm.mobile,expression:"checkForm.mobile",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#ccc;",placeholder:"确保信息真实",eventid:"5deac3bc-2"},domProps:{value:e.checkForm.mobile},on:{input:function(t){t.target.composing||(e.checkForm.mobile=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])]),a("view",{staticClass:"form_item"},[a("view",{staticClass:"label"},[e._v("护照号")]),a("view",{staticClass:"ipt"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.checkForm.passportno,expression:"checkForm.passportno",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#ccc;",placeholder:"确保信息真实",eventid:"5deac3bc-3"},domProps:{value:e.checkForm.passportno},on:{input:function(t){t.target.composing||(e.checkForm.passportno=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])])]),a("view",{staticClass:"handle_btn_wrap"},[a("button",{staticClass:"my-btn-block",class:{dis_btn:e.isLoding},attrs:{eventid:"5deac3bc-4"},on:{tap:function(t){e.submitCheck()}}},[e._v("确认")])],1)])},c=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return c})},9502:function(e,t,a){"use strict";var i=a("996b"),c=a.n(i);c.a},"996b":function(e,t,a){},"9c4a":function(e,t,a){},b0d9:function(e,t,a){"use strict";a.r(t);var i=a("ebd2"),c=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=c.a},cda3:function(e,t,a){"use strict";a.r(t);var i=a("43b9"),c=a("b0d9");for(var o in c)"default"!==o&&function(e){a.d(t,e,function(){return c[e]})}(o);a("9502"),a("4161");var r=a("2877"),n=Object(r["a"])(c["default"],i["a"],i["b"],!1,null,"122a0c25",null);t["default"]=n.exports},ebd2:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(a("8534")),c=a("942f");function o(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{checkForm:{id:"",idcardno:"",name:"",mobile:"",passportno:""},type:"",isLoding:!1}},onLoad:function(e){console.log(e),this.checkForm.id=e.id,this.checkForm.name=e.name,this.checkForm.idcardno=e.idcardno,this.type=e.type},onShow:function(){},methods:{submitCheck:function(){if(!this.isLoding){var t=this,a=t.checkForm.id,o=t.checkForm.name,r=t.checkForm.idcardno,n=t.checkForm.mobile,s=t.checkForm.passportno;if(""!==o&&i.default.nameRge(o))if(""!==r&&i.default.idCardReg(r))if(""===n||i.default.phoneReg(n)){if("indent"==t.type){t.isLoding=!0;var l={id:a,name:o,mobile:n,idcardno:r,passportno:s};(0,c.request)({url:"/wap/api/my.php?action=UpdateContact",method:"GET",data:l,success:function(c){if("success"===c.data.status){for(var o=t.$store.state.addCheckin,r=0;r<o.length;r++)o[r].id===a&&(o[r].name=t.checkForm.name,o[r].idcardno=t.checkForm.idcardno,t.$store.commit("checkIn",o));i.default.layer("修改成功"),setTimeout(function(){e.navigateBack({delta:1})},1e3)}else i.default.layer(c.data.errorMsg)},fail:function(e){i.default.layer("系统异常,请稍后再试")},complete:function(){t.isLoding=!1}})}else if("list"==this.type){console.log("哈哈哈哈"),t.isLoding=!0;var d={id:a,name:o,mobile:n,idcardno:r,passportno:s};(0,c.request)({url:"/wap/api/my.php?action=UpdateContact",method:"GET",data:d,success:function(t){"success"===t.data.status?(i.default.layer("修改成功"),setTimeout(function(){e.navigateTo({url:"/pages/particulars/selectors"})},1e3)):i.default.layer(t.data.errorMsg)},fail:function(e){i.default.layer("系统异常,请稍后再试")},complete:function(){t.isLoding=!1}})}}else i.default.layer("手机号格式有误");else{var u="";u=""===r?"请填写身份证":"身份证格式有误",i.default.layer(u)}else{var m="";m=""===o?"请填写入住人姓名":"姓名只能为中文",i.default.layer(m)}}}}};t.default=r}).call(this,a("6e42")["default"])},f1a5:function(e,t,a){"use strict";a("83ff");var i=o(a("b0ce")),c=o(a("cda3"));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(c.default))}},[["f1a5","common/runtime","common/vendor"]]]);