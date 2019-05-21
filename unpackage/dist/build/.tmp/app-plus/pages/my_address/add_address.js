(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my_address/add_address"],{4864:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"edit_address_page"},[s("view",{staticClass:"edit_address_wrap"},[s("view",{staticClass:"edit_address_form"},[s("view",{staticClass:"form-item"},[s("view",{staticClass:"label"},[e._v("姓名")]),s("view",{staticClass:"input"},[s("input",{directives:[{name:"model",rawName:"v-model.tirm",value:e.addressForm.truename,expression:"addressForm.truename",modifiers:{tirm:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#cccccc;",placeholder:"收件人姓名",maxlength:"6",eventid:"bb5ce150-0"},domProps:{value:e.addressForm.truename},on:{input:function(t){t.target.composing||(e.addressForm.truename=t.target.value)}}})])]),s("view",{staticClass:"form-item"},[s("view",{staticClass:"label"},[e._v("手机号")]),s("view",{staticClass:"input"},[s("input",{directives:[{name:"model",rawName:"v-model.tirm",value:e.addressForm.phone,expression:"addressForm.phone",modifiers:{tirm:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#cccccc;",placeholder:"收件人手机号",maxlength:"11",eventid:"bb5ce150-1"},domProps:{value:e.addressForm.phone},on:{input:function(t){t.target.composing||(e.addressForm.phone=t.target.value)}}})])]),s("view",{staticClass:"form-item"},[s("view",{staticClass:"label"},[e._v("所在地区")]),s("view",{staticClass:"input",attrs:{eventid:"bb5ce150-2"},on:{click:e.showCityPicker}},[e.addressForm.local?s("span",[e._v(e._s(e.addressForm.local))]):s("span",{staticStyle:{"font-size":"14px",color:"#CCCCCC"}},[e._v("省-市-区")])])]),s("view",{staticClass:"form-item"},[s("view",{staticClass:"label"},[e._v("详细地址")]),s("view",{staticClass:"input"},[s("input",{directives:[{name:"model",rawName:"v-model.tirm",value:e.addressForm.address,expression:"addressForm.address",modifiers:{tirm:!0}}],attrs:{type:"text","placeholder-style":"font-size:14px;color:#cccccc;",placeholder:"详细地址",eventid:"bb5ce150-3"},domProps:{value:e.addressForm.address},on:{input:function(t){t.target.composing||(e.addressForm.address=t.target.value)}}})])]),s("view",{staticClass:"form-item"},[s("view",{staticClass:"label"},[e._v("设为默认地址")]),s("view",{staticClass:"input"},[s("switch",{staticClass:"o-switch",attrs:{color:"#F05B72",checked:"1"===e.addressForm.isdefault,eventid:"bb5ce150-4"},on:{change:e.defaultSwitch}})])])]),s("view",{staticClass:"handle_btn_wrap"},[s("button",{staticClass:"my-btn-block add-btn",class:{dis_btn:e.isAdding},attrs:{eventid:"bb5ce150-5"},on:{tap:e.addAddress}},[e._v("添加")])],1)]),s("mpvue-city-picker",{ref:"mpvueCityPicker",attrs:{pickerValueDefault:e.addressForm.cityVlue,eventid:"bb5ce150-6",mpcomid:"bb5ce150-0"},on:{onCancel:e.onCancel,onConfirm:e.onConfirm}})],1)},r=[];s.d(t,"a",function(){return a}),s.d(t,"b",function(){return r})},"5eae":function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(s("07e7")),r=s("2f62"),i=o(s("57ad")),d=s("ad14");function o(e){return e&&e.__esModule?e:{default:e}}function n(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),a.forEach(function(t){c(e,t,s[t])})}return e}function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var l={data:function(){return{addressForm:{address:"",city:"",district:"",isdefault:"0",phone:"",province:"",truename:"",local:"",cityVlue:[0,0,0]},isAdding:!1}},onLoad:function(){},onShow:function(){},onBackPress:function(e){if(this.$refs.mpvueCityPicker.showPicker)return this.$refs.mpvueCityPicker.pickerCancel(),!0},components:{mpvueCityPicker:a.default},computed:n({},(0,r.mapState)(["isEditAddress"])),methods:n({},(0,r.mapMutations)(["addressEditStatus"]),{showCityPicker:function(){this.addressForm.cityVlue=this.addressForm.cityVlue.splice(0),this.$refs.mpvueCityPicker.show()},onCancel:function(e){console.log(e)},onConfirm:function(e){this.addressForm.cityVlue=e.value,this.addressForm.local=e.label;var t=e.label.split("-");this.addressForm.province=t[0],this.addressForm.city=t[1],this.addressForm.district=t[2],console.log(this.addressForm)},defaultSwitch:function(e){this.addressForm.isdefault=e.detail.value?"1":"0"},addAddress:function(){if(!this.isAdding){var t=this,s=t.addressForm.truename,a=t.addressForm.phone,r=t.addressForm.province,o=t.addressForm.city,n=t.addressForm.district,c=t.addressForm.address,l=t.addressForm.local,u=t.addressForm.isdefault,m=t.addressForm.cityVlue.join(",");if(""===s)i.default.layer("请填写姓名");else if(i.default.phoneReg(a))if(""===l)i.default.layer("请选择地区");else if(""===c)i.default.layer("请填写详细地址");else{t.isAdding=!0;var f={truename:s,province:r,city:o,district:n,address:c,phone:a,isdefault:u,province_code:m};(0,d.request)({url:"/wap/api/my.php?action=SaveAddress",methods:"POST",data:f,success:function(s){console.log(s),"success"===s.data.status?(t.addressEditStatus(!0),e.navigateBack({delta:1})):i.default.layer("添加失败")},complete:function(){t.isAdding=!1}})}else i.default.layer("请填写正确的手机号")}}})};t.default=l}).call(this,s("6e42")["default"])},"6b29":function(e,t,s){},7089:function(e,t,s){},cb1a:function(e,t,s){"use strict";var a=s("7089"),r=s.n(a);r.a},d2be:function(e,t,s){"use strict";s("fd37");var a=i(s("b0ce")),r=i(s("eb9a"));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(r.default))},df86:function(e,t,s){"use strict";var a=s("6b29"),r=s.n(a);r.a},e382:function(e,t,s){"use strict";s.r(t);var a=s("5eae"),r=s.n(a);for(var i in a)"default"!==i&&function(e){s.d(t,e,function(){return a[e]})}(i);t["default"]=r.a},eb9a:function(e,t,s){"use strict";s.r(t);var a=s("4864"),r=s("e382");for(var i in r)"default"!==i&&function(e){s.d(t,e,function(){return r[e]})}(i);s("df86"),s("cb1a");var d=s("2877"),o=Object(d["a"])(r["default"],a["a"],a["b"],!1,null,"16f7eb0f",null);t["default"]=o.exports}},[["d2be","common/runtime","common/vendor"]]]);