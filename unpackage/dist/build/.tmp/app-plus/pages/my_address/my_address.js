(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my_address/my_address"],{"075b":function(t,e,s){"use strict";var a=s("524a"),n=s.n(a);n.a},"524a":function(t,e,s){},"5c44":function(t,e,s){"use strict";s("fd37");var a=i(s("b0ce")),n=i(s("a75f"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},"7f62":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"address-page"},[s("scroll-view",{staticClass:"adress-list-wrap",attrs:{"scroll-y":"true"}},[t.addressList.length>0?s("view",{staticClass:"adress-list"},t._l(t.addressList,function(e,a){return s("view",{key:a,staticClass:"adress-item"},[s("view",{staticClass:"user-info"},[t._v(t._s(e.truename)+" "+t._s(e.phone))]),s("view",{staticClass:"loca-ifon"},[t._v(t._s(e.local))]),s("view",{staticClass:"status-wrap"},[s("text",{staticClass:"iconfont icon-icon-edit edit-btn",attrs:{eventid:"1218371f-0-"+a},on:{tap:function(s){t.editAddress(e)}}},[t._v("编辑")]),1==e.isdefault?s("view",{staticClass:"default-address"},[t._v("默认地址")]):t._e()])])})):t._e()])],1)},n=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return n})},"8b4b":function(t,e,s){},"9bee":function(t,e,s){"use strict";var a=s("8b4b"),n=s.n(a);n.a},a75f:function(t,e,s){"use strict";s.r(e);var a=s("7f62"),n=s("d8b5");for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);s("075b"),s("9bee");var r=s("2877"),d=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"6456491d",null);e["default"]=d.exports},ca45:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s("2f62"),n=r(s("57ad")),i=s("ad14");function r(t){return t&&t.__esModule?t:{default:t}}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),a.forEach(function(e){u(t,e,s[e])})}return t}function u(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o={data:function(){return{addressList:[]}},onLoad:function(){this.getAddressList()},onShow:function(){this.isEditAddress&&this.getAddressList(),this.addressEditStatus(!1)},onNavigationBarButtonTap:function(t){"添加"===t.text&&this.addAddress()},computed:d({},(0,a.mapState)(["isEditAddress"])),methods:d({},(0,a.mapMutations)(["addressEditStatus"]),{editAddress:function(e){this.addressEditStatus(!1);var s=JSON.stringify(e);t.navigateTo({url:"/pages/my_address/edit_address?param="+s})},addAddress:function(){this.addressEditStatus(!1),t.navigateTo({url:"/pages/my_address/add_address"})},getAddressList:function(){var e=this;t.showLoading({title:"加载中",mask:!1}),(0,i.request)({url:"/wap/api/my.php?action=AddressesList",success:function(t){if("success"===t.data.status){var s=t.data.content;s.length>0?(s.map(function(t,e,s){s[e]["local"]=t.province+"-"+t.city+"-"+t.district+"   "+t.address}),e.addressList=s):e.addressList=[]}else n.default.layer(t.data.errorMsg)},fail:function(){},complete:function(e){"success"===e.data.status?t.hideLoading():n.default.layer("获取地址列表失败")}})}})};e.default=o}).call(this,s("6e42")["default"])},d8b5:function(t,e,s){"use strict";s.r(e);var a=s("ca45"),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);e["default"]=n.a}},[["5c44","common/runtime","common/vendor"]]]);