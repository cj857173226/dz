(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invoice/invoice_head"],{"06f7":function(t,e,i){"use strict";var n=i("51d9"),a=i.n(n);a.a},2256:function(t,e,i){"use strict";i("83ff");var n=o(i("b0ce")),a=o(i("bf8c"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},"51d9":function(t,e,i){},"57e5":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62"),a=i("942f"),o=(i("3c10"),c(i("8534")));function c(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){u(t,e,i[e])})}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r={data:function(){return{listData:[]}},onLoad:function(){this.getInvoiceHeadList()},onShow:function(){this.isEditInvoiceHead&&this.getInvoiceHeadList(),this.invoiceHeadEditStatus(!1)},computed:s({},(0,n.mapState)(["isEditInvoiceHead"])),methods:s({},(0,n.mapMutations)(["invoiceHeadEditStatus"]),{handleInvoiceHead:function(e,i){this.invoiceHeadEditStatus(!1);var n="";if("add"===e)n="/pages/invoice/edit_invoice_head?type=add";else if("edit"===e){var a=JSON.stringify(i);n="/pages/invoice/edit_invoice_head?type=edit&param="+a}this.invoiceHeadEditStatus(!1),t.navigateTo({url:n})},getInvoiceHeadList:function(){var e=this;t.showLoading({title:"获取抬头发票"}),(0,a.request)({url:"/wap/api/my.php?action=InvoiceList",method:"POST",success:function(t){"success"===t.data.status?e.listData=t.data.content:o.default.layer("获取列表失败")},complete:function(){t.hideLoading()}})}})};e.default=r}).call(this,i("6e42")["default"])},"5b2e":function(t,e,i){"use strict";var n=i("8cb2"),a=i.n(n);a.a},"8cb2":function(t,e,i){},"8fee":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"invocie_head_page"},[i("button",{staticClass:"my-btn-block add_btn",attrs:{eventid:"002f853f-0"},on:{tap:function(e){t.handleInvoiceHead("add")}}},[i("text",{staticClass:"iconfont icon-jia"},[t._v("添加")])]),t.listData.length>0?i("scroll-view",{staticClass:"invice_head_list_wrap",attrs:{"scroll-y":""}},[i("view",{staticClass:"invice_head_list"},t._l(t.listData,function(e,n){return i("view",{key:n,staticClass:"list_item"},[i("view",{staticClass:"one_line type"},[t._v("发票类型:"),i("text",{domProps:{textContent:t._s("common"===e.type?"电子普通发票":"专用发票")}})]),i("view",{staticClass:"one_line company"},[t._v("公司全称:"),i("text",[t._v(t._s(e.company))])]),i("view",{staticClass:"one_line number"},[t._v("纳税人识别号:"),i("text",[t._v(t._s(e.number))])]),i("view",{staticClass:"one_line email"},[t._v("电子邮箱:"),i("text",[t._v(t._s(e.email))])]),i("view",{staticClass:"hanle_wrap"},[i("text",{staticClass:"iconfont icon-icon-edit edit_btn",attrs:{eventid:"002f853f-1-"+n},on:{tap:function(i){t.handleInvoiceHead("edit",e)}}},[t._v("编辑")]),"1"===e.is_default?i("view",{staticClass:"default"},[t._v("默认抬头")]):t._e()])])}))]):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},bf8c:function(t,e,i){"use strict";i.r(e);var n=i("8fee"),a=i("d5dd");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("06f7"),i("5b2e");var c=i("2877"),s=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"379262a5",null);e["default"]=s.exports},d5dd:function(t,e,i){"use strict";i.r(e);var n=i("57e5"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a}},[["2256","common/runtime","common/vendor"]]]);