(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/releaseManage/local_set"],{"09e3":function(t,e,i){"use strict";var s=i("188a"),a=i.n(s);a.a},"188a":function(t,e,i){},"2d7e":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=c(i("37cd")),a=i("2f62"),n=c(i("8534")),r=i("942f");function c(t){return t&&t.__esModule?t:{default:t}}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},s=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),s.forEach(function(e){l(t,e,i[e])})}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={data:function(){return{type:"",province:"",city:"",district:"",address:"",number:"",cityVlue:[0,0,0],isSubmiting:!1}},onLoad:function(t){t.type&&(this.type=t.type),"edit"===this.type&&(this.province=this.releaseObj.xz_province,this.city=this.releaseObj.xz_city,this.district=this.releaseObj.xz_district,this.address=this.releaseObj.xz_address,this.number=this.releaseObj.xz_number),this.cityVlue=n.default.getLocalDefaultValue(this.province,this.city,this.district)},onShow:function(){},components:{mpvueCityPicker:s.default},computed:o({},(0,a.mapState)(["createHouseInfo","releaseObj"]),{local:{get:function(){return""===this.province||""===this.city||""===this.district?"":this.province+"-"+this.city+"-"+this.district}},btnIsDis:{get:function(){return""===this.local||""===this.address||""===this.number}}}),methods:o({},(0,a.mapMutations)(["editCreateHouseInfo","editReleaseInfo","clearReleaseInfo","editReleaseInfoStatus"]),{cityPickerShow:function(){this.$refs.localPicker.show()},onConfirm:function(t){var e=t.label.split("-");this.province=e[0],this.city=e[1],this.district=e[2],this.cityVlue=n.default.getLocalDefaultValue(e[0],e[1],e[2])},onCancel:function(t){},completeLocal:function(){if("add"===this.type&&""!==this.local&&""!==this.address&&""!==this.number){var e=this,i=(e.local,e.province),s=e.city,a=e.district,n=e.address,r=e.number;"add"===this.type?(e.editCreateHouseInfo({xz_province:i,xz_city:s,xz_district:a,xz_address:n,xz_number:r}),t.redirectTo({url:"/pages/releaseManage/rent_type?type=add"})):"edit"===this.type&&console.log("保存")}},save:function(){if("edit"===this.type&&!this.isSubmiting){var e=this,i=e.releaseObj.id,s=e.province,a=e.city,c=e.district,o=e.address,l=e.number,u={house_id:i,xz_province:s,xz_city:a,xz_district:c,xz_address:o,xz_number:l};e.isSubmiting=!0,(0,r.request)({url:"/wap/api/fangdong.php?action=improveHouse",method:"POST",data:u,success:function(i){if("success"===i.data.status){var s=i.data.content;e.editReleaseInfo(s),e.editReleaseInfoStatus(!0),t.navigateBack({delta:1})}else n.default.layer(i.data.errorMsg)},complete:function(){e.isSubmiting=!1}})}}})};e.default=u}).call(this,i("6e42")["default"])},"32f2":function(t,e,i){"use strict";i.r(e);var s=i("9a4b"),a=i("fe46");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("cf0e"),i("09e3");var r=i("2877"),c=Object(r["a"])(a["default"],s["a"],s["b"],!1,null,"05dc4464",null);e["default"]=c.exports},4726:function(t,e,i){},"4ebe":function(t,e,i){"use strict";i("83ff");var s=n(i("b0ce")),a=n(i("32f2"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},"9a4b":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"local_set_page"},[i("view",{staticClass:"local_form"},[i("view",{staticClass:"form_item",attrs:{eventid:"2938e9c0-0"},on:{tap:function(e){t.cityPickerShow()}}},[i("view",{staticClass:"left"},[i("view",{staticClass:"label"},[t._v("地区")]),""===t.local?i("view",{staticClass:"empty_data"},[t._v("请选择")]):t._e(),""!==t.local?i("view",{staticClass:"content"},[t._v(t._s(t.local))]):t._e()]),t._m(0)]),i("view",{staticClass:"form_item"},[i("view",{staticClass:"left"},[i("view",{staticClass:"label"},[t._v("详细地址")]),i("view",{staticClass:"textarea_wrap"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{placeholder:"请填写","placeholder-class":"placeholder",maxlength:"100",eventid:"2938e9c0-1"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),i("view",{staticClass:"word_num"},[i("text",{staticClass:"cur",domProps:{textContent:t._s(t.address.length)}}),t._v("/100")])]),i("view",{staticClass:"tips"},[t._v("无需再填写省市。例:中山路阳光小区8号楼2单元")])])]),i("view",{staticClass:"form_item"},[i("view",{staticClass:"left"},[i("view",{staticClass:"label"},[t._v("门牌号")]),i("view",{staticClass:"textarea_wrap"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],attrs:{placeholder:"请填写门牌号","placeholder-class":"placeholder",maxlength:"50",eventid:"2938e9c0-2"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value)}}}),i("view",{staticClass:"word_num"},[i("text",{staticClass:"cur",domProps:{textContent:t._s(t.number.length)}}),t._v("/50")])]),i("view",{staticClass:"tips"},[t._v("房客预定成功后可见。例:201室")])])])]),"add"===t.type?i("button",{staticClass:"my-btn-block",class:{dis_btn:t.btnIsDis},staticStyle:{"margin-top":"40rpx"},attrs:{eventid:"2938e9c0-3"},on:{tap:t.completeLocal}},[t._v("下一步")]):t._e(),"edit"===t.type?i("button",{staticClass:"my-btn-block",class:{dis_btn:t.btnIsDis},staticStyle:{"margin-top":"40rpx"},attrs:{eventid:"2938e9c0-4"},on:{tap:t.save}},[t._v("保存")]):t._e(),i("mpvue-city-picker",{ref:"localPicker",attrs:{pickerValueDefault:t.cityVlue,eventid:"2938e9c0-5",mpcomid:"2938e9c0-0"},on:{onCancel:t.onCancel,onConfirm:t.onConfirm}})],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"after_icon"},[i("text",{staticClass:"iconfont icon-right"})])}];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})},cf0e:function(t,e,i){"use strict";var s=i("4726"),a=i.n(s);a.a},fe46:function(t,e,i){"use strict";i.r(e);var s=i("2d7e"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=a.a}},[["4ebe","common/runtime","common/vendor"]]]);