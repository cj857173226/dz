(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/statistics/bill_note"],{"35d3":function(t,e,n){"use strict";n.r(e);var a=n("6f4f"),o=n("9bae");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("839d"),n("6a11");var i=n("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"1e3d2203",null);e["default"]=u.exports},"4b6c":function(t,e,n){"use strict";n("83ff");var a=c(n("b0ce")),o=c(n("35d3"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},5492:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{noteText:"",maxLength:35}},onLoad:function(t){var e=t.note;this.noteText=e},onShow:function(){},onNavigationBarButtonTap:function(t){0===t.index&&this.saveNote()},computed:{},methods:{saveNote:function(){t.setStorageSync("dz_billNote",this.noteText),t.navigateBack({delta:1})}}};e.default=n}).call(this,n("6e42")["default"])},"6a11":function(t,e,n){"use strict";var a=n("f7fd"),o=n.n(a);o.a},"6f4f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"bill_note_page"},[n("view",{staticClass:"bill_note_wrap"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.noteText,expression:"noteText"}],attrs:{"placeholder-style":"color:#cccccc;",placeholder:"请填写备注",maxlength:t.maxLength,eventid:"f91be242-0"},domProps:{value:t.noteText},on:{input:function(e){e.target.composing||(t.noteText=e.target.value)}}}),n("view",{staticClass:"control"},[n("text",{staticClass:"cur",domProps:{textContent:t._s(t.noteText.length)}}),n("text",{staticClass:"total"},[t._v("/"+t._s(t.maxLength))])])])])},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"839d":function(t,e,n){"use strict";var a=n("cdbf"),o=n.n(a);o.a},"9bae":function(t,e,n){"use strict";n.r(e);var a=n("5492"),o=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=o.a},cdbf:function(t,e,n){},f7fd:function(t,e,n){}},[["4b6c","common/runtime","common/vendor"]]]);