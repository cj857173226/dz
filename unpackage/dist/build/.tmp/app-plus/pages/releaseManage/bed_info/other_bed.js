(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/releaseManage/bed_info/other_bed"],{1083:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"edit_bed_page"},[o("view",{staticClass:"edit_form"},[o("view",{staticClass:"form_item",attrs:{eventid:"d8da5386-0"},on:{tap:t.changeBedType}},[o("view",{staticClass:"label"},[t._v("床铺类型")]),o("view",{staticClass:"content_wrap"},[""!==t.otherBedForm.type?o("text",{staticClass:"content"},["double"===t.otherBedForm.type?o("text",[t._v("双人床")]):"single"===t.otherBedForm.type?o("text",[t._v("单人床")]):"sofa"===t.otherBedForm.type?o("text",[t._v("沙发")]):"canopy"===t.otherBedForm.type?o("text",[t._v("双层床")]):"tatami"===t.otherBedForm.type?o("text",[t._v("榻榻米")]):"other"===t.otherBedForm.type?o("text",[t._v("其他")]):t._e()]):t._e(),""===t.otherBedForm.type?o("text",{staticStyle:{color:"#CCCCCC"}},[t._v("请选择")]):t._e()]),t._m(0)]),o("view",{staticClass:"form_item"},[o("view",{staticClass:"label"},[t._v("宽度")]),o("view",{staticClass:"content_wrap"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.otherBedForm.weight,expression:"otherBedForm.weight"}],staticClass:"ipt",attrs:{type:"number","placeholder-style":"color:#ccc;",placeholder:"0.1-10范围内的数字",maxlength:"4",eventid:"d8da5386-1"},domProps:{value:t.otherBedForm.weight},on:{input:function(e){e.target.composing||(t.otherBedForm.weight=e.target.value)}}})]),o("view",{staticClass:"unit"},[t._v("m")])]),o("view",{staticClass:"form_item"},[o("view",{staticClass:"label"},[t._v("长度")]),o("view",{staticClass:"content_wrap"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.otherBedForm.length,expression:"otherBedForm.length"}],staticClass:"ipt",attrs:{type:"number","placeholder-style":"color:#ccc;",placeholder:"0.1-10范围内的数字",maxlength:"4",eventid:"d8da5386-2"},domProps:{value:t.otherBedForm.length},on:{input:function(e){e.target.composing||(t.otherBedForm.length=e.target.value)}}})]),o("view",{staticClass:"unit"},[t._v("m")])])]),o("button",{staticClass:"add_btn my-btn-block",class:{dis_btn:t.isAllowEdit},attrs:{eventid:"d8da5386-3"},on:{tap:function(e){t.submitEditBed()}}},[t._v("确定")])],1)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"after-icon"},[o("text",{staticClass:"iconfont icon-right"})])}];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r})},2094:function(t,e,o){"use strict";o.r(e);var n=o("be93"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=r.a},"5beb":function(t,e,o){"use strict";var n=o("e71e"),r=o.n(n);r.a},6474:function(t,e,o){},7570:function(t,e,o){"use strict";o("83ff");var n=i(o("b0ce")),r=i(o("ca94"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(r.default))},ae83:function(t,e,o){"use strict";var n=o("6474"),r=o.n(n);r.a},be93:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("2f62");o("942f"),r(o("8534"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){a(t,e,o[e])})}return t}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var s={data:function(){return{handleType:"add",otherBedForm:{type:"",weight:"",length:""}}},onLoad:function(t){this.handleType=t.type,t.param&&(this.otherBedForm=JSON.parse(t.param))},onShow:function(){},computed:i({},(0,n.mapState)(["releaseObj","customBedOption"]),{isAllowEdit:{get:function(){return Number(this.otherBedForm.weight)<.1||Number(this.otherBedForm.weight)>10||Number(this.otherBedForm.length)<.1||Number(this.otherBedForm.length)>10}}}),methods:i({},(0,n.mapMutations)(["eidtCustomBedOption","eidtCurBedOption"]),{submitEditBed:function(){if(!this.isAllowEdit){var e=this.otherBedForm.type,o=Number(this.otherBedForm.length).toFixed(1),n=Number(this.otherBedForm.weight).toFixed(1),r={option:7,length:o,type:e,weight:n};this.eidtCustomBedOption(r),this.eidtCurBedOption(r),t.navigateBack({delta:1})}},changeBedType:function(){var e=this,o=["double","single","sofa","canopy","tatami","other"];t.showActionSheet({itemList:["双人床","单人床","沙发","双层床","榻榻米","其他"],success:function(t){var n=t.tapIndex;e.otherBedForm.type=o[n]},fail:function(t){}})}})};e.default=s}).call(this,o("6e42")["default"])},ca94:function(t,e,o){"use strict";o.r(e);var n=o("1083"),r=o("2094");for(var i in r)"default"!==i&&function(t){o.d(e,t,function(){return r[t]})}(i);o("ae83"),o("5beb");var a=o("2877"),s=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,"2fcb621e",null);e["default"]=s.exports},e71e:function(t,e,o){}},[["7570","common/runtime","common/vendor"]]]);