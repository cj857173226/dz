(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/collection/amend_group"],{"0111":function(t,e,a){"use strict";a.r(e);var n=a("4aae"),i=a("7715");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);a("dfe6");var o=a("2877"),l=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"78c41638",null);e["default"]=l.exports},"25d6":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("ad14"),i={data:function(){return{value:"",id:""}},onLoad:function(t){console.log(t),this.id=t.id},methods:{blurValue:function(t){this.value=t.detail.value},clickSave:function(){console.log(this.value),""==this.value?t.showToast({title:"不能为空"}):(0,n.request)({url:"/wap/api/my.php?action=updateFavorite&type=name",data:{value:this.value,id:this.id},success:function(e){console.log(e),"success"==e.data.status&&(t.showToast({title:"创建成功",duration:1e3}),setTimeout(function(){t.switchTab({url:"/pages/collection/collection"})},2e3))}})}}};e.default=i}).call(this,a("6e42")["default"])},"4aae":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"contanier"},[a("view",{staticClass:"title-box"},[a("text",{staticClass:"title"},[t._v("标题")]),a("view",{staticClass:"input-box"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"起个名字吧","placeholder-style":"font-size:12px",eventid:"7b0859a4-0"},on:{blur:t.blurValue}}),a("view",{staticClass:"btn",attrs:{eventid:"7b0859a4-1"},on:{tap:t.clickSave}},[t._v("保存")])])])])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"60e1":function(t,e,a){},7715:function(t,e,a){"use strict";a.r(e);var n=a("25d6"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},bf9f:function(t,e,a){"use strict";a("fd37");var n=u(a("b0ce")),i=u(a("0111"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},dfe6:function(t,e,a){"use strict";var n=a("60e1"),i=a.n(n);i.a}},[["bf9f","common/runtime","common/vendor"]]]);