(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/check_in/check_in"],{2554:function(t,e,n){},"3e44":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2f62"),i=s(n("57ad")),c=n("ad14");function s(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={data:function(){return{listData:[]}},computed:r({},(0,a.mapState)(["isEditCheckIn"])),onLoad:function(t){this.getChckList()},onShow:function(){console.log(this.isEditCheckIn),!0===this.isEditCheckIn&&this.getChckList(),this.checkInEditStatus(!1)},methods:r({},(0,a.mapMutations)(["checkInEditStatus"]),{handleCheck:function(e,n){this.checkInEditStatus(!1);var a="";if("add"===e)a="/pages/check_in/edit_check_in?type=add";else if("edit"===e){var i=JSON.stringify(n);a="/pages/check_in/edit_check_in?type=edit&param="+i}t.navigateTo({url:a})},getChckList:function(){var e=this;t.showLoading({title:"加载中",mask:!1}),(0,c.request)({url:"/wap/api/my.php?action=ContactList",method:"GET",success:function(t){if("success"===t.data.status){var n=t.data.content;n.length>0?(n.map(function(t,e,n){n[e]["_idcard"]=i.default.hideIdCard(t.idcardno)}),e.listData=n):e.listData=[]}else i.default.layer(t.data.errorMsg)},fail:function(t){i.default.layer("系统异常,请稍后再试")},complete:function(e){"success"===e.data.status?t.hideLoading():i.default.layer("获取地址列表失败")}})}})};e.default=u}).call(this,n("6e42")["default"])},"3f28":function(t,e,n){},"7d33":function(t,e,n){"use strict";n.r(e);var a=n("cb06"),i=n("eb40");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("f55b"),n("f7f5");var s=n("2877"),r=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"1917602e",null);e["default"]=r.exports},"9e70":function(t,e,n){"use strict";n("fd37");var a=c(n("b0ce")),i=c(n("7d33"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},cb06:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"check_in_page"},[n("view",{staticClass:"add_btn",attrs:{eventid:"4c2d38ff-0"},on:{tap:function(e){t.handleCheck("add")}}},[n("text",{staticClass:"iconfont icon-icon-test"}),t._v("添加入住人")]),n("scroll-view",{staticClass:"check_list_wrap",attrs:{"scroll-y":""}},[t.listData.length>0?n("view",{staticClass:"check_list"},t._l(t.listData,function(e,a){return n("view",{key:a,staticClass:"check_item",attrs:{eventid:"4c2d38ff-1-"+a},on:{tap:function(n){t.handleCheck("edit",e)}}},[n("view",{staticClass:"user_info"},[n("p",{staticClass:"name"},[t._v(t._s(e.name))]),n("p",{staticClass:"id_card"},[t._v("身份证 "+t._s(e._idcard))])],1),n("view",{staticClass:"after_icon"},[n("text",{staticClass:"iconfont icon-right"})])])})):t._e()])],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},eb40:function(t,e,n){"use strict";n.r(e);var a=n("3e44"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},f55b:function(t,e,n){"use strict";var a=n("2554"),i=n.n(a);i.a},f7f5:function(t,e,n){"use strict";var a=n("3f28"),i=n.n(a);i.a}},[["9e70","common/runtime","common/vendor"]]]);