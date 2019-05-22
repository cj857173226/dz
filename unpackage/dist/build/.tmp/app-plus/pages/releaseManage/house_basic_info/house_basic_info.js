(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/releaseManage/house_basic_info/house_basic_info"],{"0ac3":function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s("2f62"),i=s("942f"),o=n(s("8534")),u=(s("3c10"),n(s("7753")));function n(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),a.forEach(function(t){c(e,t,s[t])})}return e}function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var l={data:function(){return{leasetype:"",weiTypes:[{value:"1",text:"公共卫生间"},{value:"2",text:"独立卫生间"}],cohabitationData:[{value:"1",text:"是"},{value:"2",text:"否"}],house_id:"",roomtype_shi:"",roomtype_ting:"",roomtype_wei:"",roomtype_chu:"",roomtype_yt:"",houseArea:"",weiType:"",cohabitation:"",liveNumber:"",sameroom:"",deepLength:1,mode:"selector",pickerValueDefault:[0],pickerValueArray:[],houseStatus:""}},onLoad:function(){},onShow:function(){this.getCurPageData()},onBackPress:function(){if(this.$refs.similarPicker.showPicker)return this.$refs.similarPicker.pickerCancel(),!0},components:{mpvuePicker:u.default},computed:r({},(0,a.mapState)(["releaseObj"]),{houseType:{get:function(){return"0"===this.roomtype_shi&&"0"===this.roomtype_ting&&"0"===this.roomtype_wei&&"0"===this.roomtype_chu&&"0"===this.roomtype_yt?"":this.roomtype_shi+"室 "+this.roomtype_ting+"厅 "+this.roomtype_wei+"卫 "+this.roomtype_chu+"厨 "+this.roomtype_yt+"阳台"}}}),methods:r({},(0,a.mapMutations)(["editReleaseInfo","clearReleaseInfo","editReleaseInfoStatus"]),{setHouseType:function(){0!=this.houseStatus&&1!=this.houseStatus&&e.navigateTo({url:"/pages/releaseManage/house_basic_info/house_type"})},setHouseArea:function(){0!=this.houseStatus&&1!=this.houseStatus&&e.navigateTo({url:"/pages/releaseManage/house_basic_info/house_area"})},setPeopleNum:function(){0!=this.houseStatus&&1!=this.houseStatus&&e.navigateTo({url:"/pages/releaseManage/house_basic_info/people_number"})},changeWeiType:function(){if(0!=this.houseStatus&&1!=this.houseStatus){var t=this,s=t.releaseObj.toilet,a=t.house_id;e.showActionSheet({itemList:["公共卫生间","独立卫生间"],success:function(e){var u=t.weiTypes[e.tapIndex].value;s!==u&&(0,i.request)({url:"/wap/api/fangdong.php?action=improveHouse",method:"POST",data:{house_id:a,toilet:u},success:function(e){if("success"===e.data.status){var s=e.data.content;t.editReleaseInfo(s),t.editReleaseInfoStatus(!0)}else o.default.layer("修改失败")},complete:function(){t.getCurPageData()}})},fail:function(e){console.log(e.errMsg)}})}},isLiveTogether:function(){if(0!=this.houseStatus&&1!=this.houseStatus){var t=this,s=t.releaseObj.livetogether,a=t.house_id;e.showActionSheet({itemList:["与房东同居","不与房东同居"],success:function(e){var u=t.cohabitationData[e.tapIndex].value;s!==u&&(0,i.request)({url:"/wap/api/fangdong.php?action=improveHouse",method:"POST",data:{house_id:a,livetogether:u},success:function(e){if("success"===e.data.status){var s=e.data.content;t.editReleaseInfo(s),t.editReleaseInfoStatus(!0)}else o.default.layer("修改失败")},complete:function(){t.getCurPageData()}})},fail:function(e){console.log(e.errMsg)}})}},similarChange:function(){if(0!=this.houseStatus&&1!=this.houseStatus){var e=this.leasetype,t="",s=[];"1"===e?t="套":"2"===e?t="间":"3"===e&&(t="位");for(var a=1;a<=99;a++)s.push({label:a+t,value:a});this.pickerValueArray=s,this.pickerValueDefault=this.sameroom<=0?[0]:[Number(this.sameroom)-1],this.$refs.similarPicker.show()}},similarConfirm:function(e){var t=this,s=this.releaseObj.sameroom,a=e.value[0],u=t.house_id;t.sameroom=a,Number(s)!==a&&(0,i.request)({url:"/wap/api/fangdong.php?action=improveHouse",method:"POST",data:{house_id:u,sameroom:a},success:function(e){if("success"===e.data.status){var s=e.data.content;t.editReleaseInfo(s),t.editReleaseInfoStatus(!0)}else o.default.layer("修改失败")},complete:function(){t.getCurPageData()}})},similarCancel:function(){},getCurPageData:function(){var e=this.releaseObj;this.house_id=e.id,this.leasetype=e.leasetype,this.roomtype_shi=e.roomtype_shi,this.roomtype_ting=e.roomtype_ting,this.roomtype_wei=e.roomtype_wei,this.roomtype_chu=e.roomtype_chu,this.roomtype_yt=e.roomtype_yt,this.houseArea=e.area,this.weiType=e.toilet,this.cohabitation=e.livetogether,this.liveNumber=e.tantnum,this.sameroom=e.sameroom,this.houseStatus=e.status}})};t.default=l}).call(this,s("6e42")["default"])},"12c2":function(e,t,s){"use strict";s.r(t);var a=s("0ac3"),i=s.n(a);for(var o in a)"default"!==o&&function(e){s.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},"1e85":function(e,t,s){},4395:function(e,t,s){"use strict";var a=s("44c7"),i=s.n(a);i.a},"44c7":function(e,t,s){},5625:function(e,t,s){"use strict";s("83ff");var a=o(s("b0ce")),i=o(s("e642"));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(i.default))},cb38:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"house_basic_page"},[s("view",{staticClass:"house_basic_form"},[s("view",{staticClass:"form_item",attrs:{eventid:"55bfafbe-0"},on:{tap:function(t){e.setHouseType()}}},[s("view",{staticClass:"item_left"},[s("view",{staticClass:"label"},[e._v("房屋类型")]),""===e.houseType?s("view",{staticClass:"empty_data"},[e._v("请选择")]):s("view",{staticClass:"result"},[e._v(e._s(e.houseType))])]),-1==e.houseStatus||1==e.houseStatus?s("view",{staticClass:"after_icon"},[s("text",{staticClass:"iconfont icon-right"})]):e._e()]),s("view",{staticClass:"form_item",attrs:{eventid:"55bfafbe-1"},on:{tap:e.setHouseArea}},[s("view",{staticClass:"item_left"},[s("view",{staticClass:"label"},[e._v("出租面积")]),"0"===e.houseArea?s("view",{staticClass:"empty_data"},[e._v("请选择")]):s("view",{staticClass:"result"},[e._v(e._s(e.houseArea)+"㎡")])]),-1==e.houseStatus||1==e.houseStatus?s("view",{staticClass:"after_icon"},[s("text",{staticClass:"iconfont icon-right"})]):e._e()]),s("view",{staticClass:"form_item",attrs:{eventid:"55bfafbe-2"},on:{tap:e.changeWeiType}},[s("view",{staticClass:"item_left"},[s("view",{staticClass:"label"},[e._v("卫生间类型")]),""===e.weiType?s("view",{staticClass:"empty_data"},[e._v("请选择")]):s("view",{staticClass:"result"},["1"===e.weiType?s("text",[e._v("公共卫生间")]):e._e(),"2"===e.weiType?s("text",[e._v("独立卫生间")]):e._e()])]),-1==e.houseStatus||1==e.houseStatus?s("view",{staticClass:"after_icon"},[s("text",{staticClass:"iconfont icon-right"})]):e._e()]),s("view",{staticClass:"form_item",attrs:{eventid:"55bfafbe-3"},on:{tap:e.isLiveTogether}},[s("view",{staticClass:"item_left"},[s("view",{staticClass:"label"},[e._v("与房东同居一套房间内")]),""===e.cohabitation?s("view",{staticClass:"empty_data"},[e._v("请选择")]):s("view",{staticClass:"result"},["1"===e.cohabitation?s("text",[e._v("是")]):e._e(),"2"===e.cohabitation?s("text",[e._v("否")]):e._e()])]),-1==e.houseStatus||1==e.houseStatus?s("view",{staticClass:"after_icon"},[s("text",{staticClass:"iconfont icon-right"})]):e._e()]),s("view",{staticClass:"form_item",attrs:{eventid:"55bfafbe-4"},on:{tap:function(t){e.setPeopleNum()}}},[s("view",{staticClass:"item_left"},[s("view",{staticClass:"label"},[e._v("宜居人数")]),""===e.liveNumber?s("view",{staticClass:"empty_data"},[e._v("请选择")]):s("view",{staticClass:"result"},[e._v(e._s(e.liveNumber)+"人")])]),-1==e.houseStatus||1==e.houseStatus?s("view",{staticClass:"after_icon"},[s("text",{staticClass:"iconfont icon-right"})]):e._e()]),s("view",{staticClass:"form_item",attrs:{eventid:"55bfafbe-5"},on:{tap:e.similarChange}},[s("view",{staticClass:"item_left"},[s("view",{staticClass:"label"},["1"===e.leasetype?s("text",[e._v("同类房源数")]):e._e(),"2"===e.leasetype?s("text",[e._v("同类房间数")]):e._e(),"3"===e.leasetype?s("text",[e._v("同类床位数")]):e._e()]),s("view",{staticClass:"empty_data"}),s("view",{staticClass:"result"},[e._v(e._s(e.sameroom)),"1"===e.leasetype?s("text",[e._v("套")]):e._e(),"2"===e.leasetype?s("text",[e._v("间")]):e._e(),"3"===e.leasetype?s("text",[e._v("位")]):e._e()]),s("view",{staticClass:"tips"},[e._v("你有相同"),"1"===e.leasetype?s("text",[e._v("房源")]):e._e(),"2"===e.leasetype?s("text",[e._v("房间")]):e._e(),"3"===e.leasetype?s("text",[e._v("床位")]):e._e(),e._v("吗")])]),-1==e.houseStatus||1==e.houseStatus?s("view",{staticClass:"after_icon"},[s("text",{staticClass:"iconfont icon-right"})]):e._e()])]),s("mpvue-picker",{ref:"similarPicker",attrs:{mode:e.mode,deepLength:e.deepLength,pickerValueDefault:e.pickerValueDefault,pickerValueArray:e.pickerValueArray,eventid:"55bfafbe-6",mpcomid:"55bfafbe-0"},on:{onConfirm:e.similarConfirm,onCancel:e.similarCancel}})],1)},i=[];s.d(t,"a",function(){return a}),s.d(t,"b",function(){return i})},e642:function(e,t,s){"use strict";s.r(t);var a=s("cb38"),i=s("12c2");for(var o in i)"default"!==o&&function(e){s.d(t,e,function(){return i[e]})}(o);s("fec9"),s("4395");var u=s("2877"),n=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"e6b2b548",null);t["default"]=n.exports},fec9:function(e,t,s){"use strict";var a=s("1e85"),i=s.n(a);i.a}},[["5625","common/runtime","common/vendor"]]]);