(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/releaseManage/price_rule/price_rule"],{"084b":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a("2f62"),i=a("ad14"),n=o(a("57ad"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),s.forEach(function(e){c(t,e,a[e])})}return t}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={data:function(){return{house_id:"",dayPrice:"",cashpledge:"",addtenant:"0",addtionalprice:"",addtenanttips:"",minday:"",maxday:"",foreigner:"",hiddentips:"",other:"",crvp:"",crvn:"",crva:"",isCrvping:!1,isForeignering:!1,houseStatus:""}},onLoad:function(){},onShow:function(){this.getCurData()},computed:r({},(0,s.mapState)(["releaseObj"])),methods:r({},(0,s.mapMutations)(["editReleaseInfo","clearReleaseInfo","editReleaseInfoStatus"]),{tapPriceManagement:function(){t.navigateTo({url:"/pages/releaseManage/price_rule/price_control"})},tapPromotion:function(){t.navigateTo({url:"/pages/releaseManage/price_rule/price_promotion"})},cashPledge:function(){t.navigateTo({url:"/pages/releaseManage/price_rule/cash_pledge"})},clean:function(){t.navigateTo({url:"/pages/releaseManage/price_rule/clean"})},withGuest:function(){t.navigateTo({url:"/pages/releaseManage/price_rule/with_guest"})},rests:function(){t.navigateTo({url:"/pages/releaseManage/price_rule/rests"})},numbeDays:function(){t.navigateTo({url:"/pages/releaseManage/price_rule/numbe_days"})},otherRequirements:function(){t.navigateTo({url:"/pages/releaseManage/price_rule/other_requirements"})},whether:function(){if(0!=this.houseStatus&&1!=this.houseStatus&&!this.isForeignering){var e=this,a=e.house_id;t.showActionSheet({itemList:["是","否"],success:function(t){var s;0===t.tapIndex?(e.foreigner="1",s="1"):(e.foreigner="0",s="0");var o={house_id:a,foreigner:s};e.isForeignering=!0,(0,i.request)({url:"/wap/api/fangdong.php?action=improveHouse",method:"POST",data:o,success:function(t){if("success"===t.data.status){var a=t.data.content;e.editReleaseInfo(a),e.editReleaseInfoStatus(!0)}else n.default.layer("保存失败")},complete:function(){e.isForeignering=!1,e.getCurData()}})},fail:function(t){console.log(t.errMsg)}})}},hideTheTips:function(){t.navigateTo({url:"/pages/releaseManage/price_rule/hide_the_tips"})},earnest:function(){if(0!=this.houseStatus&&1!=this.houseStatus&&!this.isCrvping){var e=this,a=e.house_id;e.crvp;t.showActionSheet({itemList:["每日价格的100%","每日价格的50%","每日价格的20%"],success:function(t){var s="";0===t.tapIndex?(e.crvp="100",s="100"):1===t.tapIndex?(e.crvp="50",s="50"):2===t.tapIndex&&(e.crvp="20",s="20");var o={house_id:a,crvp:s};e.isCrvping=!0,(0,i.request)({url:"/wap/api/fangdong.php?action=improveHouse",method:"POST",data:o,success:function(t){if("success"===t.data.status){var a=t.data.content;e.editReleaseInfo(a),e.editReleaseInfoStatus(!0)}else n.default.layer("保存失败")},complete:function(){e.isCrvping=!1,e.getCurData()}})},fail:function(t){console.log(t.errMsg)}})}},breakContract:function(){t.navigateTo({url:"/pages/releaseManage/price_rule/break_contract"})},getCurData:function(){var t=this.releaseObj;this.house_id=t.id,this.houseStatus=t.status,this.dayPrice="0"==t.dayrentprice?"":t.dayrentprice,this.cashpledge="0"==t.cashpledge?"":t.cashpledge,this.addtenant="1"===t.addtenant?"1":"0",this.addtionalprice=t.addtionalprice?t.addtionalprice:"",this.addtenanttips=t.addtenanttips,this.minday=t.minday,this.maxday="0"==t.maxday?"":t.maxday,this.foreigner="1"===t.foreigner?"1":"0",this.other=t.userule,this.hiddentips=t.hiddentips,this.crvp=t.crvp,this.crvn=t.crvn,this.crva=t.crva}})};e.default=l}).call(this,a("6e42")["default"])},"112a":function(t,e,a){"use strict";a("fd37");var s=n(a("b0ce")),i=n(a("d2d6"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},"151d":function(t,e,a){"use strict";var s=a("3c48"),i=a.n(s);i.a},"30bc":function(t,e,a){"use strict";a.r(e);var s=a("084b"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);e["default"]=i.a},"3c48":function(t,e,a){},"540c":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"centenr"},[a("view",{staticClass:"price-discipline"},[t._v("价格规则")]),a("view",{staticClass:"list-box",attrs:{eventid:"100820fc-0"},on:{click:t.tapPriceManagement}},[a("view",{staticClass:"left-box"},[t._m(0),a("text",{staticClass:"open"},[""===t.dayPrice?a("text",[t._v("未设置")]):a("text",[t._v(t._s(t.dayPrice)+"元/每晚")])])]),a("text",{staticClass:"after_icon iconfont"},[t._v("")])]),a("view",{staticClass:"list-box",attrs:{eventid:"100820fc-1"},on:{click:t.cashPledge}},[a("view",{staticClass:"left-box"},[t._m(1),a("text",{staticClass:"open"},[""===t.cashpledge?a("text",[t._v("不收取押金")]):a("text",[t._v(t._s(t.cashpledge)+"元")])])]),a("text",{staticClass:"after_icon iconfont"},[t._v("")])]),a("view",{staticClass:"list-box",attrs:{eventid:"100820fc-2"},on:{click:t.withGuest}},[a("view",{staticClass:"left-box"},[t._m(2),a("text",{staticClass:"open"},["0"===t.addtenant?a("text",[t._v("不允许加客")]):a("text",[a("text",[t._v("允许加客")]),t.addtionalprice>0?a("text",[t._v(","+t._s(t.addtionalprice)+"/每位每晚")]):t._e(),""!==t.addtenanttips?a("text",[t._v(","+t._s(t.addtenanttips))]):t._e()])])]),a("text",{staticClass:"after_icon iconfont"},[t._v("")])]),a("view",{staticClass:"price-discipline"},[t._v("入住要求")]),a("view",{staticClass:"list-box",attrs:{eventid:"100820fc-3"},on:{click:t.numbeDays}},[a("view",{staticClass:"left-box"},[t._m(3),a("text",{staticClass:"open"},[a("text",[t._v("最短"+t._s(t.minday)+"晚")]),""!==t.maxday?a("text",[t._v(",最多"+t._s(t.maxday)+"晚")]):t._e()])]),a("text",{staticClass:"after_icon iconfont"},[t._v("")])]),a("view",{staticClass:"list-box",attrs:{eventid:"100820fc-4"},on:{tap:t.whether}},[a("view",{staticClass:"left-box"},[t._m(4),a("text",{staticClass:"open"},[a("text",{domProps:{textContent:t._s("1"===t.foreigner?"是":"否")}})])]),a("text",{staticClass:"after_icon iconfont"},[t._v("")])]),a("view",{staticClass:"list-box",attrs:{eventid:"100820fc-5"},on:{tap:t.otherRequirements}},[a("view",{staticClass:"left-box"},[t._m(5),a("text",{staticClass:"open"},[t.other?a("text",[t._v(t._s(t.other))]):a("text",[t._v("性别、年龄可接待时间等其他要求")])])]),a("text",{staticClass:"after_icon iconfont"},[t._v("")])]),a("view",{staticClass:"list-box",attrs:{eventid:"100820fc-6"},on:{tap:t.hideTheTips}},[a("view",{staticClass:"left-box"},[t._m(6),a("text",{staticClass:"open"},[t.hiddentips?a("text",[t._v(t._s(t.hiddentips))]):a("text",[t._v("你可填写wifi密码等内容")])])]),a("text",{staticClass:"after_icon iconfont"},[t._v("")])]),a("view",{staticClass:"price-discipline"},[t._v("交易规则")]),a("view",{staticClass:"list-box",attrs:{eventid:"100820fc-7"},on:{tap:t.earnest}},[a("view",{staticClass:"left-box"},[t._m(7),a("text",{staticClass:"open"},[t._v("每日价格的"+t._s(t.crvp)+"%,作为每日定金")])]),a("text",{staticClass:"after_icon iconfont"},[t._v("")])]),a("view",{staticClass:"list-box",attrs:{eventid:"100820fc-8"},on:{tap:t.breakContract}},[a("view",{staticClass:"left-box"},[t._m(8),a("text",{staticClass:"open"},[t._v("全额退款天数为"+t._s(t.crvn)+"天，违约取消扣款天数为"+t._s(t.crva)+"天")])]),a("text",{staticClass:"after_icon iconfont"},[t._v("")])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"promotion-recommend-box"},[a("text",{staticClass:"promotion"},[t._v("日价")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"promotion-recommend-box"},[a("text",{staticClass:"promotion"},[t._v("押金")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"promotion-recommend-box"},[a("text",{staticClass:"promotion"},[t._v("加客")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"promotion-recommend-box"},[a("text",{staticClass:"promotion"},[t._v("入住天数限制")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"promotion-recommend-box"},[a("text",{staticClass:"promotion"},[t._v("是否接待境外人士")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"promotion-recommend-box"},[a("text",{staticClass:"promotion"},[t._v("其他要求（选填）")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"promotion-recommend-box"},[a("text",{staticClass:"promotion"},[t._v("隐藏贴士（选填）")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"promotion-recommend-box"},[a("text",{staticClass:"promotion"},[t._v("定金比")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"promotion-recommend-box"},[a("text",{staticClass:"promotion"},[t._v("房客违约责任")])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})},d2d6:function(t,e,a){"use strict";a.r(e);var s=a("540c"),i=a("30bc");for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a("151d");var o=a("2877"),r=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,"2acddd08",null);e["default"]=r.exports}},[["112a","common/runtime","common/vendor"]]]);