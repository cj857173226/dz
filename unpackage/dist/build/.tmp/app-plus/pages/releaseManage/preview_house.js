(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/releaseManage/preview_house"],{"150e":function(e,t,s){"use strict";var i=s("ac40"),a=s.n(i);a.a},"39ff":function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s("2f62"),a=(s("942f"),c(s("8534")),s("3c10"));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},i=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),i.forEach(function(t){n(e,t,s[t])})}return e}function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var o={data:function(){return{host:a.shortHttp,userInfo:{},sbList:[{type:1,title:"卫浴"},{type:2,label:"热水淋浴",checked:!1,value:"shower",icon:"icon-reshui"},{type:2,label:"浴缸",checked:!1,value:"hotbathtub",icon:"icon-yugang"},{type:2,label:"拖鞋",checked:!1,value:"slippers",icon:"icon-tuoxie"},{type:2,label:"手纸",checked:!1,value:"toiletpaper",icon:"icon-weishengzhi_"},{type:2,label:"牙具",checked:!1,value:"toothbrush",icon:"icon-yaju"},{type:2,label:"毛巾",checked:!1,value:"towel",icon:"icon-maojin_"},{type:2,label:"浴液 洗发水",checked:!1,value:"toiletries",icon:"icon-muyulu"},{type:2,label:"香皂",checked:!1,value:"soap",icon:"icon-xiangzao_"},{type:1,title:"电器"},{type:2,label:"空调",checked:!1,value:"aircondition",icon:"icon-kongdiao"},{type:2,label:"电视",checked:!1,value:"tv",icon:"icon-dianshi"},{type:2,label:"洗衣机",checked:!1,value:"washer",icon:"icon-xiyiji"},{type:2,label:"冰箱",checked:!1,value:"icebox",icon:"icon-bingxiang"},{type:2,label:"饮水设备",checked:!1,value:"drinking",icon:"icon-yinshuiji"},{type:1,title:"设施"},{type:2,label:"无线网络",checked:!1,value:"wireless",icon:"icon-wuxianwangluo"},{type:2,label:"电梯",checked:!1,value:"elevator",icon:"icon-icon_lift"},{type:2,label:"门禁系统",checked:!1,value:"accesssys",icon:"icon-webiconmenjinxitong"},{type:2,label:"停车位",checked:!1,value:"parkingspace",icon:"icon-tingche"},{type:2,label:"暖气",checked:!1,value:"heater",icon:"icon-nuanqi"},{type:2,label:"有线网络",checked:!1,value:"wired",icon:"icon-youxianwangluo"},{type:1,title:"要求"},{type:2,label:"允许做饭",checked:!1,value:"iscook",icon:"icon-kezuofan"},{type:2,label:"允许吸烟",checked:!1,value:"smoke",icon:"icon-kexiyan"},{type:2,label:"允许聚餐",checked:!1,value:"meet",icon:"icon-faci_juhui"},{type:2,label:"允许带宠物",checked:!1,value:"pet",icon:"icon-yunxudaichongwu"}]}},onLoad:function(){this.userInfo=e.getStorageSync("dz_userInfo"),this.getCheckedFacilities(),console.log(this.releaseObj)},onShow:function(){},computed:l({},(0,i.mapState)(["releaseObj"]),{local:{get:function(){return this.releaseObj.xz_province+this.releaseObj.xz_city+this.releaseObj.xz_district+"  "+this.releaseObj.xz_address+"  "+this.releaseObj.xz_number}},cashpledge:{get:function(){return"0"==this.releaseObj.cashpledge?"":this.releaseObj.cashpledge}},addtenant:{get:function(){return"1"===this.releaseObj.addtenant?"1":"0"}},addtionalprice:{get:function(){return this.releaseObj.addtionalprice?this.releaseObj.addtionalprice:""}},foreigner:{get:function(){return"1"===this.releaseObj.foreigner?"1":"0"}},bedroomPics:{get:function(){var e=[];return this.releaseObj["pics"].forEach(function(t){"bedroom"===t.type&&e.push(t)}),e}},liverommPics:{get:function(){var e=[];return this.releaseObj["pics"].forEach(function(t){"liveroom"===t.type&&e.push(t)}),e}},toiletPics:{get:function(){var e=[];return this.releaseObj["pics"].forEach(function(t){"toilet"===t.type&&e.push(t)}),e}},kitchenPics:{get:function(){var e=[];return this.releaseObj["pics"].forEach(function(t){"kitchen"===t.type&&e.push(t)}),e}},otherPics:{get:function(){var e=[];return this.releaseObj["pics"].forEach(function(t){"other"===t.type&&e.push(t)}),e}}}),methods:{previewPic:function(t){var s=this;e.previewImage({current:s.host+t.path,urls:[s.host+t.path]})},getCheckedFacilities:function(){var e=this.releaseObj.sb_list?this.releaseObj.sb_list:[];this.sbList.map(function(t,s,i){2===t.type&&-1!=e.indexOf(t.value)&&(i[s].checked=!0)})}}};t.default=o}).call(this,s("6e42")["default"])},"64fe":function(e,t,s){"use strict";s.r(t);var i=s("39ff"),a=s.n(i);for(var c in i)"default"!==c&&function(e){s.d(t,e,function(){return i[e]})}(c);t["default"]=a.a},"92f3":function(e,t,s){},a851:function(e,t,s){"use strict";s("83ff");var i=c(s("b0ce")),a=c(s("d6d7"));function c(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(a.default))},ac40:function(e,t,s){},b1a1:function(e,t,s){"use strict";var i=s("92f3"),a=s.n(i);a.a},caf3:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"preview_house_page"},[s("view",{staticClass:"title_pic"},[s("img",{attrs:{src:e.host+e.releaseObj.titlepic,alt:""}}),s("view",{staticClass:"day_price"},[e._v("￥"),s("text",{staticClass:"num"},[e._v(e._s(e.releaseObj.dayrentprice))]),e._v("元/晚")])]),s("view",{staticClass:"container-contact-box"},[s("view",{staticClass:"contact-box"},[s("view",{staticClass:"title"},[e._v(e._s(e.releaseObj.title))]),s("view",{staticClass:"rent-type"},["1"===e.releaseObj.leasetype?s("text",[e._v("整套房屋")]):e._e(),"2"===e.releaseObj.leasetype?s("text",[e._v("独立房间")]):e._e(),"3"===e.releaseObj.leasetype?s("text",[e._v("合住房间")]):e._e()]),s("view",{staticClass:"local"},[s("text",{staticClass:"iconfont icon-dizhi-01"}),e._v(e._s(e.local))]),s("view",{staticClass:"comment"},[s("view",{staticClass:"lightning-box"},[s("i",{staticClass:"iconfont  lightning-icon"},[e._v("")]),s("text",[e._v("速顶")])],1),s("view",{staticClass:"comment-on-box"},[s("i",{staticClass:"iconfont comment-on-icon"},[e._v("")]),s("text",[e._v("0条点评")])],1)]),s("view",{staticClass:"img-box"},[s("image",{staticClass:"img",attrs:{src:e.host+e.userInfo.headImgurl}})]),s("view",{staticClass:"autonym"},[s("view",{staticClass:"name"},[e._v(e._s(e.userInfo.userInfo))]),s("view",{staticClass:"attestation"},[e._v("实名认证")])])]),s("view",{staticClass:"basic-info-box"},[s("view",{staticClass:"title"},[e._v("基本信息")]),s("view",{staticClass:"content-wrap"},[s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("房屋类型")]),s("view",{staticClass:"data-box"},[e._v(e._s(e.releaseObj.roomtype_shi)+"室"+e._s(e.releaseObj.roomtype_ting)+"厅"+e._s(e.releaseObj.roomtype_wei)+"卫"+e._s(e.releaseObj.roomtype_chu)+"厨"+e._s(e.releaseObj.roomtype_yt)+"阳台")])]),s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("出租面积")]),s("view",{staticClass:"data-box"},[e._v(e._s(e.releaseObj.area)+"㎡")])]),s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("卫生间类型")]),s("view",{staticClass:"data-box"},["1"===e.releaseObj.toilet?s("text",[e._v("公共卫生间")]):e._e(),"2"===e.releaseObj.toilet?s("text",[e._v("独立卫生间")]):e._e()])]),s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("与房东同居一套房内")]),s("view",{staticClass:"data-box"},["1"===e.releaseObj.livetogether?s("text",[e._v("是")]):e._e(),"2"===e.releaseObj.livetogether?s("text",[e._v("否")]):e._e()])]),s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("宜居人数")]),s("view",{staticClass:"data-box"},[e._v(e._s(e.releaseObj.tantnum)+"人")])]),s("view",{staticClass:"row"},[s("view",{staticClass:"label"},["1"===e.releaseObj.leasetype?s("text",[e._v("同类房源数")]):e._e(),"2"===e.releaseObj.leasetype?s("text",[e._v("同类房间数")]):e._e(),"3"===e.releaseObj.leasetype?s("text",[e._v("同类床位数")]):e._e()]),s("view",{staticClass:"data-box"},[e._v(e._s(e.releaseObj.sameroom)),"1"===e.releaseObj.leasetype?s("text",[e._v("套")]):e._e(),"2"===e.releaseObj.leasetype?s("text",[e._v("间")]):e._e(),"3"===e.releaseObj.leasetype?s("text",[e._v("位")]):e._e()])])])]),s("view",{staticClass:"bed-info-box"},[s("view",{staticClass:"title"},[e._v("床铺信息")]),s("view",{staticClass:"content-wrap"},e._l(e.releaseObj.bed,function(t,i){return s("view",{key:i,staticClass:"row"},[s("view",{staticClass:"bed"},["double"===t.type?s("text",[e._v("双人床")]):"single"===t.type?s("text",[e._v("单人床")]):"canopy"===t.type?s("text",[e._v("双层床")]):"sofa"===t.type?s("text",[e._v("沙发")]):"tatami"===t.type?s("text",[e._v("榻榻米")]):"other"===t.type?s("text",[e._v("其他")]):e._e(),s("text",{staticClass:"bed-size"},[e._v("宽"+e._s(t.weight)+"米 长"+e._s(t.length)+"米")])]),s("view",{staticClass:"number"},[e._v(e._s(t.num)+"张")])])}))]),s("view",{staticClass:"house-pic-box"},[s("view",{staticClass:"title"},[e._v("房屋照片")]),s("view",{staticClass:"content-wrap"},[e.bedroomPics.length>0?s("view",{staticClass:"pics-type"},[s("view",{staticClass:"p-title"},[e._v("卧室")]),s("view",{staticClass:"pics-box"},e._l(e.bedroomPics,function(t,i){return s("view",{key:i,staticClass:"img-item",attrs:{eventid:"2b7f7b1b-0-"+i},on:{tap:function(s){s.stopPropagation(),e.previewPic(t)}}},[s("image",{attrs:{src:e.host+t.path}})])}))]):e._e(),e.liverommPics.length>0?s("view",{staticClass:"pics-type"},[s("view",{staticClass:"p-title"},[e._v("客厅")]),s("view",{staticClass:"pics-box"},e._l(e.liverommPics,function(t,i){return s("view",{key:i,staticClass:"img-item",attrs:{eventid:"2b7f7b1b-1-"+i},on:{tap:function(s){s.stopPropagation(),e.previewPic(t)}}},[s("image",{attrs:{src:e.host+t.path}})])}))]):e._e(),e.toiletPics.length>0?s("view",{staticClass:"pics-type"},[s("view",{staticClass:"p-title"},[e._v("卫生间")]),s("view",{staticClass:"pics-box"},e._l(e.toiletPics,function(t,i){return s("view",{key:i,staticClass:"img-item",attrs:{eventid:"2b7f7b1b-2-"+i},on:{tap:function(s){s.stopPropagation(),e.previewPic(t)}}},[s("image",{attrs:{src:e.host+t.path}})])}))]):e._e(),e.kitchenPics.length>0?s("view",{staticClass:"pics-type"},[s("view",{staticClass:"p-title"},[e._v("厨房")]),s("view",{staticClass:"pics-box"},e._l(e.kitchenPics,function(t,i){return s("view",{key:i,staticClass:"img-item",attrs:{eventid:"2b7f7b1b-3-"+i},on:{tap:function(s){s.stopPropagation(),e.previewPic(t)}}},[s("image",{attrs:{src:e.host+t.path}})])}))]):e._e(),e.otherPics.length>0?s("view",{staticClass:"pics-type"},[s("view",{staticClass:"p-title"},[e._v("其他")]),s("view",{staticClass:"pics-box"},e._l(e.otherPics,function(t,i){return s("view",{key:i,staticClass:"img-item",attrs:{eventid:"2b7f7b1b-4-"+i},on:{tap:function(s){s.stopPropagation(),e.previewPic(t)}}},[s("image",{attrs:{src:e.host+t.path}})])}))]):e._e()])]),s("view",{staticClass:"facilities-box"},[s("view",{staticClass:"title"},[e._v("配套设施")]),s("view",{staticClass:"content-wrap"},e._l(e.sbList,function(t,i){return 2===t.type?s("view",{key:i,staticClass:"sb-item"},[t.checked?s("text",{staticClass:"sb-icon iconfont active",class:t.icon}):s("text",{staticClass:"sb-icon iconfont",class:t.icon}),s("text",{staticClass:"name",class:{"name-on":t.checked}},[e._v(e._s(t.label))])]):e._e()}))]),s("view",{staticClass:"describe-info-box"},[s("view",{staticClass:"title"},[e._v("房源描述")]),s("view",{staticClass:"content-wrap"},[s("view",{staticClass:"desc-box"},[s("view",{staticClass:"d-title"},[e._v("内部情况")]),e.releaseObj.roomRoominnerIntro?s("view",{staticClass:"content"},[e._v(e._s(e.releaseObj.roomRoominnerIntro))]):s("view",{staticClass:"no-data"},[e._v("无内部情况描述")])]),s("view",{staticClass:"desc-box"},[s("view",{staticClass:"d-title"},[e._v("个性描述")]),e.releaseObj.roomServiceIntro?s("view",{staticClass:"content"},[e._v(e._s(e.releaseObj.roomServiceIntro))]):s("view",{staticClass:"no-data"},[e._v("无个性描述")])]),s("view",{staticClass:"desc-box"},[s("view",{staticClass:"d-title"},[e._v("交通情况")]),e.releaseObj.roomLocationIntro?s("view",{staticClass:"content"},[e._v(e._s(e.releaseObj.roomLocationIntro))]):s("view",{staticClass:"no-data"},[e._v("无交通情况描述")])]),s("view",{staticClass:"desc-box"},[s("view",{staticClass:"d-title"},[e._v("周边情况")]),e.releaseObj.roomAroundIntro?s("view",{staticClass:"content"},[e._v(e._s(e.releaseObj.roomAroundIntro))]):s("view",{staticClass:"no-data"},[e._v("无周边情况描述")])])])]),s("view",{staticClass:"price-rule-box"},[s("view",{staticClass:"title"},[e._v("价格规则")]),s("view",{staticClass:"content-wrap"},[s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("日价")]),s("view",{staticClass:"content"},[e._v(e._s(e.releaseObj.dayrentprice)+"元/每晚")])]),s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("押金")]),s("view",{staticClass:"content"},[""===e.cashpledge?s("text",[e._v("不收取押金")]):s("text",[e._v(e._s(e.cashpledge)+"元")])])]),s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("加客")]),s("view",{staticClass:"content"},["0"===e.addtenant?s("text",[e._v("不允许加客")]):s("text",[s("text",[e._v("允许加客")]),e.addtionalprice>0?s("text",[e._v(","+e._s(e.addtionalprice)+"/每位每晚")]):e._e(),""!==e.releaseObj.addtenanttips?s("text",[e._v(","+e._s(e.releaseObj.addtenanttips))]):e._e()])])])])]),s("view",{staticClass:"price-rule-box"},[s("view",{staticClass:"title"},[e._v("入住要求")]),s("view",{staticClass:"content-wrap"},[s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("入住天数限制")]),s("view",{staticClass:"content"},[s("text",[e._v("最短"+e._s(e.releaseObj.minday)+"晚,最多"+e._s(e.releaseObj.maxday)+"晚")])])]),s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("是否接待境外人士")]),s("view",{staticClass:"content"},[s("text",{domProps:{textContent:e._s("1"===e.foreigner?"是":"否")}})])]),s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("其他要求")]),s("view",{staticClass:"content",domProps:{textContent:e._s(e.releaseObj.other?e.releaseObj.other:"无!")}})]),s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("隐藏贴士")]),s("view",{staticClass:"content",domProps:{textContent:e._s(e.releaseObj.hiddentips?e.releaseObj.hiddentips:"无!")}})])])]),s("view",{staticClass:"price-rule-box"},[s("view",{staticClass:"title"},[e._v("交易规则")]),s("view",{staticClass:"content-wrap"},[s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("定金比")]),s("view",{staticClass:"content"},[e._v("每日价格的"+e._s(e.releaseObj.crvp)+"%,作为每日定金")])]),s("view",{staticClass:"row"},[s("view",{staticClass:"label"},[e._v("房客违约责任")]),s("view",{staticClass:"content"},[e._v("全额退款天数为"+e._s(e.releaseObj.crvn)+"天，违约取消扣款天数为"+e._s(e.releaseObj.crva)+"天")]),s("view",{staticClass:"step_wrap"},[e._m(0),s("view",{staticClass:"step_item"},[s("view",{staticClass:"s_title"},[s("text",{staticClass:"iconfont icon-solid-time"}),e._v("入住前"+e._s(e.releaseObj.crvn)+"天14:00")]),s("view",{staticClass:"content"},[e._v("如取消订单,扣除前"+e._s(e.releaseObj.crvn)+"天的定金")])]),s("view",{staticClass:"step_item"},[e._m(1),s("view",{staticClass:"content"},[e._v("如果提前退房,扣除未消费的前"+e._s(e.releaseObj.crva)+"天的定金,定金不足以实际定金为准。(包括未入住和提前退房两类情况)")])]),e._m(2)])])])])])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"step_item"},[s("view",{staticClass:"s_title"},[s("text",{staticClass:"iconfont icon-solid-time"})]),s("view",{staticClass:"content"},[e._v("如果取消订单,定金全部退还")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"s_title"},[s("text",{staticClass:"iconfont icon-solid-time"}),e._v("入住当天14:00")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"step_item"},[s("view",{staticClass:"s_title"},[s("text",{staticClass:"iconfont icon-solid-time"}),e._v("退房当天12:00")])])}];s.d(t,"a",function(){return i}),s.d(t,"b",function(){return a})},d6d7:function(e,t,s){"use strict";s.r(t);var i=s("caf3"),a=s("64fe");for(var c in a)"default"!==c&&function(e){s.d(t,e,function(){return a[e]})}(c);s("150e"),s("b1a1");var l=s("2877"),n=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,"f103bcec",null);t["default"]=n.exports}},[["a851","common/runtime","common/vendor"]]]);