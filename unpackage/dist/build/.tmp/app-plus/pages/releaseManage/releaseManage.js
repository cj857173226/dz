(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/releaseManage/releaseManage"],{"1ccb":function(t,e,s){},"1d08":function(t,e,s){"use strict";s("83ff");var a=n(s("b0ce")),i=n(s("45b1"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"45b1":function(t,e,s){"use strict";s.r(e);var a=s("4db3"),i=s("d2be");for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);s("9380"),s("b2f1");var o=s("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"b0504440",null);e["default"]=c.exports},"4db3":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"releaseManage_page"},[t.listData.length>0?s("view",{staticClass:"house_list"},t._l(t.listData,function(e,a){return s("view",{key:a,staticClass:"list_item"},[s("view",{staticClass:"item_head"},[s("view",{staticClass:"hous_local"},[s("text",{staticClass:"iconfont icon-dizhi-01 "}),t._v(t._s(e.xz_local))]),s("button",{staticClass:"modify_local_btn"},[t._v("修改地址")])],1),s("view",{staticClass:"item_body"},[""!==e.titlepic?s("img",{staticClass:"house_pic",attrs:{src:e.titlepic,alt:""}}):t._e(),""===e.titlepic?s("view",{staticClass:"no_pic"},[t._v("无房源图片")]):t._e(),0==e.is_complete?s("view",{staticClass:"rent-status"},[t._v("未完成发布")]):t._e(),1==e.is_complete?s("view",{staticClass:"rent-status"},[-1==e.status?s("view",[t._v("待发布")]):0==e.status?s("view",[t._v("待审核")]):1==e.status?s("view",[t._v("已上架")]):2==e.status?s("view",[t._v("已下架")]):t._e()]):t._e()]),s("view",{staticClass:"item_foot"},[s("view",{staticClass:"foot_left"},[s("view",{staticClass:"house_title"},[t._v(t._s(e.title))]),s("view",{staticClass:"rent-type"},[1==e.leasetype?s("view",[t._v("整套出租")]):2==e.leasetype?s("view",[t._v("独立房间")]):3==e.leasetype?s("view",[t._v("合住房间")]):t._e()])]),1==e.is_complete&&1==e.status?s("button",{staticClass:"house-handle-btn lower-shelf-btn"},[t._v("下架")]):t._e(),0==e.is_complete&&2==e.status?s("button",{staticClass:"house-handle-btn upper-shelf-btn"},[t._v("上架")]):t._e(),0==e.is_complete&&-1==e.status?s("button",{staticClass:"house-handle-btn house-update-btn",attrs:{eventid:"9a7a9904-0-"+a},on:{click:function(e){e.stopPropagation(),t.toPage("set-house-detail")}}},[t._v("修改")]):t._e()],1)])})):t._e()])},i=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},"8ce3":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{listData:[{title:"这是一个大房子啊",titlepic:"/static/images/landlordguide/banner1.jpg",xz_zb:"",xz_province:"",xz_city:"",xz_district:"",xz_address:"",xz_number:"",xz_local:"北京东城区某某街,200号",leasetype:1,tantnum:10,roomtype_shi:1,roomtype_ting:1,roomtype_wei:1,roomtype_chu:1,roomtype_yt:1,area:100,sameroom:2,toilet:1,livetogether:1,bed:"",bedsheet:"",roomServiceIntro:"",roomRoominnerIntro:"",roomLocationIntro:"",roomAroundIntro:"",sb_list:[],dayrentprice:"",cashpledge:"",addtenant:"",addtionalprice:"",crvp:"",crvn:"",crva:"",minday:"",maxday:"",foreigner:"",userule:"",hiddentips:"",pics:"",renzheng:"",addtenanttips:"",status:-1,daohang:"",is_complete:0}]}}};e.default=a},9380:function(t,e,s){"use strict";var a=s("1ccb"),i=s.n(a);i.a},b2f1:function(t,e,s){"use strict";var a=s("c2e8"),i=s.n(a);i.a},c2e8:function(t,e,s){},d2be:function(t,e,s){"use strict";s.r(e);var a=s("8ce3"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e["default"]=i.a}},[["1d08","common/runtime","common/vendor"]]]);