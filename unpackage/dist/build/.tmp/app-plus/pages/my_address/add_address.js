(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my_address/add_address"],{"0aa8":function(e,t,a){"use strict";var s=a("7c16"),i=a.n(s);i.a},1215:function(e,t,a){"use strict";a("83ff");var s=r(a("b0ce")),i=r(a("83af"));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(i.default))},1943:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(a("37cd")),i=a("2f62");function r(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.forEach(function(t){n(e,t,a[t])})}return e}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c={data:function(){return{addressForm:{address:"",addressid:"",city:"",district:"",isdefault:"0",phone:"",province:"",truename:"",local:"",cityVlue:[0,0,1]},cityPickerValueDefault:[0,0,1]}},onLoad:function(){},onShow:function(){},onBackPress:function(e){},components:{mpvueCityPicker:s.default},computed:o({},(0,i.mapState)(["islogin","token","isEditAddress"])),methods:o({},(0,i.mapMutations)(["addressEditStatus"]),{showCityPicker:function(){this.$refs.mpvueCityPicker.show()},onCancel:function(e){console.log(e)},onConfirm:function(e){this.addressForm.cityVlue=e.value,this.addressForm.address=e.label,this.pickerText=JSON.stringify(e)},defaultSwitch:function(e){console.log(e.detail.value),this.addressForm.isdefault=e.detail.value?"1":"0"}})};t.default=c},"1e4c":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"edit_address_page"},[a("view",{staticClass:"edit_address_wrap"},[a("view",{staticClass:"edit_address_form"},[a("view",{staticClass:"form-item"},[a("view",{staticClass:"label"},[e._v("姓名")]),a("view",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model.tirm",value:e.addressForm.truename,expression:"addressForm.truename",modifiers:{tirm:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#cccccc;",placeholder:"收件人姓名",eventid:"21a580d3-0"},domProps:{value:e.addressForm.truename},on:{input:function(t){t.target.composing||(e.addressForm.truename=t.target.value)}}})])]),a("view",{staticClass:"form-item"},[a("view",{staticClass:"label"},[e._v("手机号")]),a("view",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model.tirm",value:e.addressForm.phone,expression:"addressForm.phone",modifiers:{tirm:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#cccccc;",placeholder:"收件人手机号",eventid:"21a580d3-1"},domProps:{value:e.addressForm.phone},on:{input:function(t){t.target.composing||(e.addressForm.phone=t.target.value)}}})])]),a("view",{staticClass:"form-item"},[a("view",{staticClass:"label"},[e._v("所在地区")]),a("view",{staticClass:"input",attrs:{eventid:"21a580d3-2"},on:{click:e.showCityPicker}},[e.addressForm.address?a("span",[e._v(e._s(e.addressForm.address))]):a("span",{staticStyle:{"font-size":"14px",color:"#CCCCCC"}},[e._v("省-市-区")])])]),a("view",{staticClass:"form-item"},[a("view",{staticClass:"label"},[e._v("详细地址")]),a("view",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model.tirm",value:e.addressForm.local,expression:"addressForm.local",modifiers:{tirm:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#cccccc;",placeholder:"详细地址",eventid:"21a580d3-3"},domProps:{value:e.addressForm.local},on:{input:function(t){t.target.composing||(e.addressForm.local=t.target.value)}}})])]),a("view",{staticClass:"form-item"},[a("view",{staticClass:"label"},[e._v("设为默认地址")]),a("view",{staticClass:"input"},[a("switch",{staticClass:"o-switch",attrs:{color:"#F05B72",checked:"1"===e.addressForm.isdefault,eventid:"21a580d3-4"},on:{change:e.defaultSwitch}})])])]),a("view",{staticClass:"handle_btn_wrap"},[a("button",{staticClass:"my-btn-block add-btn"},[e._v("添加")])],1)]),a("mpvue-city-picker",{ref:"mpvueCityPicker",attrs:{pickerValueDefault:e.addressForm.cityVlue,eventid:"21a580d3-5",mpcomid:"21a580d3-0"},on:{onCancel:e.onCancel,onConfirm:e.onConfirm}})],1)},i=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i})},4195:function(e,t,a){},"7c16":function(e,t,a){},"83af":function(e,t,a){"use strict";a.r(t);var s=a("1e4c"),i=a("9b9d");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);a("0aa8"),a("d881");var o=a("2877"),n=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,"312921be",null);t["default"]=n.exports},"9b9d":function(e,t,a){"use strict";a.r(t);var s=a("1943"),i=a.n(s);for(var r in s)"default"!==r&&function(e){a.d(t,e,function(){return s[e]})}(r);t["default"]=i.a},d881:function(e,t,a){"use strict";var s=a("4195"),i=a.n(s);i.a}},[["1215","common/runtime","common/vendor"]]]);