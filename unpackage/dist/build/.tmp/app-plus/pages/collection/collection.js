(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/collection/collection"],{"2d98":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"contanier"},t._l(t.groupingList,function(n,a){return e("view",{key:a,staticClass:"group-box",attrs:{eventid:"70495f2e-0-"+a},on:{tap:function(e){t.cilckParticulars(n.cid,n.cname)}}},[e("image",{staticClass:"group-img",attrs:{src:"../../static/images/meitu.jpeg"}}),e("view",{staticClass:"group-name"},[t._v(t._s(n.cname))])])}))},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},4915:function(t,n,e){"use strict";e.r(n);var a=e("c452"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=o.a},6121:function(t,n,e){"use strict";e.r(n);var a=e("2d98"),o=e("4915");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("c045");var c=e("2877"),u=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,"0523efbe",null);n["default"]=u.exports},abc2:function(t,n,e){"use strict";e("83ff");var a=i(e("b0ce")),o=i(e("6121"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},c045:function(t,n,e){"use strict";var a=e("c8b7"),o=e.n(a);o.a},c452:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("942f"),o=i(e("8534"));function i(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{groupingList:null}},onNavigationBarButtonTap:function(n){console.log("11111",n),t.navigateTo({url:"/pages/collection/new_group"})},methods:{cilckParticulars:function(n,e){t.navigateTo({url:"/pages/collection/custom?id=".concat(n,"&title=").concat(e)})},grouping:function(){var n=this;(0,a.request)({url:"/wap/api/my.php?action=favoriteClass",success:function(e){console.log(e),"success"===e.data.status?n.groupingList=e.data.content.item:t.showToast({title:e.data.errorMsg})},fail:function(n){t.showToast({title:n})}})}},onLoad:function(){o.default.isLogin(),this.grouping()},onShow:function(){this.grouping()}};n.default=c}).call(this,e("6e42")["default"])},c8b7:function(t,n,e){}},[["abc2","common/runtime","common/vendor"]]]);