(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/statistics/add_bill"],{"0714":function(t,e,i){},2783:function(t,e,i){},"2ecd":function(t,e,i){"use strict";i.r(e);var n=i("b053"),a=i("bc95");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("a1f1"),i("7ecd");var s=i("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"58acda34",null);e["default"]=c.exports},"76f2":function(t,e,i){"use strict";i("fd37");var n=o(i("b0ce")),a=o(i("2ecd"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},"7ecd":function(t,e,i){"use strict";var n=i("0714"),a=i.n(n);a.a},"91eb":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62"),a=i("ad14"),o=s(i("57ad"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){r(t,e,i[e])})}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={data:function(){return{curTab:"out",billForm:{note:"",money:""},defaultVal:[],isAdding:!1}},components:c({},(0,n.mapState)(["isEditStatistics"])),onLoad:function(){t.setStorageSync("dz_billNote","")},onShow:function(){var e=t.getStorageSync("dz_billNote");this.billForm.note=e},onNavigationBarButtonTap:function(t){0===t.index&&this.submitAddBill()},onBackPress:function(){},computed:{},methods:c({},(0,n.mapMutations)(["statisticsEditStatus"]),{changeBillTab:function(t){this.curBillTab!==t&&(this.curTab=t)},editNote:function(){t.navigateTo({url:"/pages/statistics/bill_note?note="+this.billForm.note})},changeMoneyType:function(){var e=this;t.showActionSheet({itemList:["平台","其他"],success:function(t){e.billForm.source=(t.tapIndex+1).toString()},fail:function(t){console.log(t.errMsg)}})},submitAddBill:function(){var e=this;if(!this.isAdding){var i=this,n=i.curTab,s=i.billForm.money,c=i.billForm.note;if(""===s||Number(s).toFixed(2)<.01||Number(s).toFixed(2)>99999.99){var r="";""===s?r="请填写金额":Number(s).toFixed(2)<.01?r="金额不能小于0.01":Number(s).toFixed(2)>99999.99&&(r="金额不能大于99999.99"),o.default.layer(r)}else{var l={money:s,type:n,remark:c};i.isAdding=!0,t.showLoading({title:"添加中...",mask:!0}),(0,a.request)({url:"/wap/api/statistics.php?action=submit",method:"POST",data:l,success:function(i){"success"===i.data.status?(e.statisticsEditStatus(!0),t.navigateBack({delta:1})):o.default.layer("添加账单失败")},complete:function(){i.isAdding=!1,t.hideLoading()}})}}}})};e.default=l}).call(this,i("6e42")["default"])},a1f1:function(t,e,i){"use strict";var n=i("2783"),a=i.n(n);a.a},b053:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"add_bill_page"},[i("view",{staticClass:"tab_wrap"},[i("view",{staticClass:"tab_item",class:{"tab-on":"out"==t.curTab},attrs:{eventid:"596e0ebe-0"},on:{tap:function(e){t.changeBillTab("out")}}},[t._v("成本")]),i("view",{staticClass:"tab_item",class:{"tab-on":"in"==t.curTab},attrs:{eventid:"596e0ebe-1"},on:{tap:function(e){t.changeBillTab("in")}}},[t._v("收入")])]),i("view",{staticClass:"add_bill_form"},[i("view",{staticClass:"form_item"},[t._m(0),i("view",{staticClass:"label"},[t._v("金额")]),i("view",{staticClass:"content_wrap"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.billForm.money,expression:"billForm.money"}],attrs:{type:"number",placeholder:"最高设置金额99999.99","placeholder-style":"color:#ccc;",maxlength:"10",eventid:"596e0ebe-2"},domProps:{value:t.billForm.money},on:{input:function(e){e.target.composing||(t.billForm.money=e.target.value)}}})]),i("view",{staticClass:"unit"},[t._v("元")])]),i("view",{staticClass:"form_item",attrs:{eventid:"596e0ebe-3"},on:{tap:function(e){t.editNote()}}},[t._m(1),i("view",{staticClass:"label"},[t._v("备注")]),i("view",{staticClass:"content_wrap"},[t.billForm.note?i("view",{staticClass:"content"},[t._v(t._s(t.billForm.note))]):i("view",{staticClass:"no_data"},[t._v("请填写备注内容")])]),t._m(2)])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"icon"},[i("text",{staticClass:"iconfont icon-jine"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"icon"},[i("text",{staticClass:"iconfont icon-beizhu"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"after-icon"},[i("text",{staticClass:"iconfont icon-right"})])}];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},bc95:function(t,e,i){"use strict";i.r(e);var n=i("91eb"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a}},[["76f2","common/runtime","common/vendor"]]]);