(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invoice/edit_invoice_head"],{"240a":function(e,t,i){},2831:function(e,t,i){"use strict";var a=i("ec37"),n=i.n(a);n.a},"75e7":function(e,t,i){"use strict";i("83ff");var a=c(i("b0ce")),n=c(i("ba49"));function c(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(n.default))},"9a4f":function(e,t,i){"use strict";i.r(t);var a=i("9b2d"),n=i.n(a);for(var c in a)"default"!==c&&function(e){i.d(t,e,function(){return a[e]})}(c);t["default"]=n.a},"9b2d":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(i("8534")),n=i("2f62"),c=i("942f");i("3c10");function o(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){l(e,t,i[t])})}return e}function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var r={data:function(){return{handleType:"",isSetDefault:!0,inviceHeadForm:{company:"",email:"",id:"",is_default:"0",number:"",type:"common",user_id:""}}},onLoad:function(t){this.handleType=t.type,"add"===t.type?e.setNavigationBarTitle({title:"添加发票抬头"}):"edit"===t.type&&(e.setNavigationBarTitle({title:"编辑发票抬头"}),this.inviceHeadForm=JSON.parse(t.param),this.isSetDefault="1"!==JSON.parse(t.param).is_default)},onShow:function(){},onNavigationBarButtonTap:function(e){0===e.index&&this.saveInvoiceHead()},computed:s({},(0,n.mapState)(["islogin","token","isEditInvoiceHead"])),methods:s({},(0,n.mapMutations)(["invoiceHeadEditStatus"]),{changeInviceHeadType:function(e){this.inviceHeadForm.type=e},saveInvoiceHead:function(){var t=this,i=t.inviceHeadForm.company.trim(),n=t.inviceHeadForm.email.trim(),c=t.inviceHeadForm.number.trim(),o=t.inviceHeadForm.type,s=t.inviceHeadForm.is_default,l=t.inviceHeadForm.id;if(""===i)e.showToast({title:"公司名称不能为空",duration:1500,icon:"none"});else if(""===c)e.showToast({title:"识别号不能为空",duration:1500,icon:"none"});else if(""===n)e.showToast({title:"邮箱不能为空",duration:1500,icon:"none"});else if(a.default.emailReg(n)){if("add"===t.handleType){var r={type:o,company:i,number:c,email:n,is_default:s};t.addInvoiceHead(r)}else if("edit"===t.handleType){var d={id:l,type:o,company:i,number:c,email:n,is_default:s};t.editInvoiceHead(d)}}else e.showToast({title:"邮箱格式有误",duration:1500,icon:"none"})},addInvoiceHead:function(t){var i=this;e.showLoading({title:"添加中..."}),(0,c.request)({url:"/wap/api/my.php?action=SaveInvoice",data:t,success:function(t){"success"===t.data.status?(i.invoiceHeadEditStatus(!0),e.navigateBack({delta:1})):a.default.layer("添加失败")},complete:function(){e.hideLoading()}})},editInvoiceHead:function(t){var i=this;e.showLoading({title:"添加中..."}),(0,c.request)({url:"/wap/api/my.php?action=UpdateInvoice",data:t,success:function(t){"success"===t.data.status?(i.invoiceHeadEditStatus(!0),e.navigateBack({delta:1})):a.default.layer("修改失败")},complete:function(){e.hideLoading()}})},deleteInvoiceHead:function(){var t=this,i=t.inviceHeadForm.id;e.showModal({title:"",content:"是否删除该发票抬头",confirmText:"删除",confirmColor:"#F05B72",success:function(n){n.confirm&&(e.showLoading({title:"删除中..."}),(0,c.request)({url:"/wap/api/my.php?action=DeleteInvoice&id="+i,success:function(i){"success"===i.data.status?(t.invoiceHeadEditStatus(!0),e.navigateBack({delta:1})):a.default.layer("删除失败")},complete:function(){e.hideLoading()}}))}})},defaultSwitch:function(e){console.log(e),this.inviceHeadForm.is_default=e.detail.value?"1":"0"}})};t.default=r}).call(this,i("6e42")["default"])},a49f:function(e,t,i){"use strict";var a=i("240a"),n=i.n(a);n.a},ba49:function(e,t,i){"use strict";i.r(t);var a=i("f103"),n=i("9a4f");for(var c in n)"default"!==c&&function(e){i.d(t,e,function(){return n[e]})}(c);i("2831"),i("a49f");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"2f4151d6",null);t["default"]=s.exports},ec37:function(e,t,i){},f103:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"edit_invoice_head_page"},[i("view",{staticClass:"type_change_wrap"},[i("view",{staticClass:"type_item",attrs:{eventid:"1612f65a-0"},on:{tap:function(t){e.changeInviceHeadType("common")}}},[i("view",{staticClass:"chang_radio_wrap"},[i("view",{staticClass:"chang_radio",class:{chang_radio_on:"common"===e.inviceHeadForm.type}},["common"===e.inviceHeadForm.type?i("view",{staticClass:"radio_circle"}):e._e()])]),e._m(0)]),i("view",{staticClass:"t_line"}),i("view",{staticClass:"type_item",attrs:{eventid:"1612f65a-1"},on:{tap:function(t){e.changeInviceHeadType("special")}}},[i("view",{staticClass:"chang_radio_wrap"},[i("view",{staticClass:"chang_radio",class:{chang_radio_on:"special"===e.inviceHeadForm.type}},["special"===e.inviceHeadForm.type?i("view",{staticClass:"radio_circle"}):e._e()])]),e._m(1)])]),i("view",{staticClass:"invoice_head_form"},[i("view",{staticClass:"form-item"},[i("view",{staticClass:"label"},[e._v("公司全称")]),i("view",{staticClass:"input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.inviceHeadForm.company,expression:"inviceHeadForm.company"}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#cccccc;",placeholder:"公司全称",eventid:"1612f65a-2"},domProps:{value:e.inviceHeadForm.company},on:{input:function(t){t.target.composing||(e.inviceHeadForm.company=t.target.value)}}})])]),i("view",{staticClass:"form-item"},[i("view",{staticClass:"label"},[e._v("纳税人识别号")]),i("view",{staticClass:"input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.inviceHeadForm.number,expression:"inviceHeadForm.number"}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#cccccc;",placeholder:"纳税人识别号",eventid:"1612f65a-3"},domProps:{value:e.inviceHeadForm.number},on:{input:function(t){t.target.composing||(e.inviceHeadForm.number=t.target.value)}}})])]),i("view",{staticClass:"form-item"},[i("view",{staticClass:"label"},[e._v("电子邮箱")]),i("view",{staticClass:"input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.inviceHeadForm.email,expression:"inviceHeadForm.email"}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#cccccc;",placeholder:"电子邮箱",eventid:"1612f65a-4"},domProps:{value:e.inviceHeadForm.email},on:{input:function(t){t.target.composing||(e.inviceHeadForm.email=t.target.value)}}})])]),e.isSetDefault?i("view",{staticClass:"form-item"},[i("view",{staticClass:"label"},[e._v("设置默认抬头")]),i("view",{staticClass:"input"},[i("switch",{staticClass:"o-switch",attrs:{color:"#F05B72",checked:"1"===e.inviceHeadForm.is_default,eventid:"1612f65a-5"},on:{change:e.defaultSwitch}})])]):e._e()]),"edit"===e.handleType?i("button",{staticClass:"my-del-block",attrs:{eventid:"1612f65a-6"},on:{tap:e.deleteInvoiceHead}},[e._v("删除")]):e._e()],1)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"info"},[i("view",{staticClass:"text title"},[e._v("增值税电子普通发票")]),i("view",{staticClass:"text "},[e._v("发送至邮箱或自行下载")]),i("view",{staticClass:"text "},[e._v("用途及规则同增值税纸质普通发票")]),i("view",{staticClass:"text "},[e._v("请务必确认公司可接受该发票类型")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"info"},[i("view",{staticClass:"text title"},[e._v("增值税专用发票")]),i("view",{staticClass:"text "},[e._v("需提供专票资质")]),i("view",{staticClass:"text "},[e._v("可以抵扣进项税额")]),i("view",{staticClass:"text "},[e._v("仅限一般纳税人企业使用")])])}];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})}},[["75e7","common/runtime","common/vendor"]]]);