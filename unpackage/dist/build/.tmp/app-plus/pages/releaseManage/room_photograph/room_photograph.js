(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/releaseManage/room_photograph/room_photograph"],{"0a73":function(t,e,s){"use strict";var i=s("bfec"),a=s.n(i);a.a},3338:function(t,e,s){"use strict";s("83ff");var i=o(s("b0ce")),a=o(s("51bf"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},"51bf":function(t,e,s){"use strict";s.r(e);var i=s("7a02"),a=s("62b0");for(var o in a)"default"!==o&&function(t){s.d(e,t,function(){return a[t]})}(o);s("0a73");var n=s("2877"),c=Object(n["a"])(a["default"],i["a"],i["b"],!1,null,"172adc0e",null);e["default"]=c.exports},"62b0":function(t,e,s){"use strict";s.r(e);var i=s("cac5"),a=s.n(i);for(var o in i)"default"!==o&&function(t){s.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"7a02":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"contanier"},[s("view",{staticClass:"title"},[t._v("上传房源照片要求")]),t._m(0),s("view",{staticClass:"bedroom-box"},[t._m(1),t._m(2),s("view",{staticClass:"image_wrap"},[t._l(t.bedRoomImages,function(e,i){return t.bedRoomImages.length>0?s("view",{key:i,staticClass:"img_item"},[s("image",{attrs:{src:"/static/images/meitu1.jpg"}}),t._m(3,!0)]):t._e()}),t._l(t.bedRoomPics,function(e,i){return t.bedRoomPics.length>0&&t.isUploading?s("view",{key:i,staticClass:"img_item2"},[s("image",{attrs:{src:"/static/images/meitu1.jpg"}}),t._m(4,!0)]):t._e()}),s("view",{staticClass:"choose_img",attrs:{eventid:"cbef73a6-0"},on:{tap:function(e){e.stopPropagation(),t.chooseImg("bedroom")}}},[s("text",{staticClass:"iconfont icon-jia"})])],2)]),s("view",{staticClass:"bedroom-box"},[t._m(5),s("view",{staticClass:"hint-bedroom"},[t._v("建议上传。站在厅角拍摄，事业会更广阔。")]),s("view",{staticClass:"image_wrap"},[t._l(t.liveRoomImages,function(e,i){return t.liveRoomImages.length>0?s("view",{key:i,staticClass:"img_item"},[s("image",{attrs:{src:"/static/images/meitu1.jpg"}})]):t._e()}),t._m(6)],2)]),s("view",{staticClass:"bedroom-box"},[t._m(7),t._m(8),s("view",{staticClass:"image_wrap"},[t._l(t.toiletImages,function(e,i){return t.toiletImages.length>0?s("view",{key:i,staticClass:"img_item"},[s("image",{attrs:{src:"/static/images/meitu1.jpg"}})]):t._e()}),t._m(9)],2)]),s("view",{staticClass:"bedroom-box"},[t._m(10),s("view",{staticClass:"hint-bedroom"},[t._v("建议上传。")]),s("view",{staticClass:"image_wrap"},[t._l(t.kitchenImages,function(e,i){return t.kitchenImages.length>0?s("view",{key:i,staticClass:"img_item"},[s("image",{attrs:{src:"/static/images/meitu1.jpg"}})]):t._e()}),t._m(11)],2)]),s("view",{staticClass:"bedroom-box"},[t._m(12),s("view",{staticClass:"hint-bedroom"},[t._v("建议上传。可以是其他室内空间、物件、小区周边环境等。更多的照片往往能吸引更多的房客。")]),s("view",{staticClass:"image_wrap"},[t._l(t.otherImages,function(e,i){return t.otherImages.length>0?s("view",{key:i,staticClass:"img_item"},[s("image",{attrs:{src:"/static/images/meitu1.jpg"}})]):t._e()}),t._m(13)],2)]),s("view",{staticClass:"btn"},[t._v("保存")])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"demand-box"},[s("text",[t._v("1.无明显修改")]),s("text",[t._v("2.无拉伸变形")]),s("text",[t._v("3.无水印")]),s("text",[t._v("4.不能出现联系方式或品牌宣传")]),s("view",{staticStyle:{color:"#F05B72"}},[t._v("5.图片大小不超过20M,尺寸800*800以上,必须是png/jpg格式!!!")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"top-bedroom"},[s("text",{staticStyle:{"font-weight":"700"}},[t._v("卧室")]),s("view",{staticClass:"example"},[t._v("范例"),s("text",{staticClass:"iconfont"},[t._v("")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"hint-bedroom"},[t._v("填写户型和床铺信息后将有更多要求处理。请确保"),s("text",{staticClass:"hint-bedroom-color"},[t._v("卧室、床铺、床单、枕头展示齐全")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"del_img"},[s("text",{staticClass:"iconfont icon-duomeitiicon-"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"mask"},[s("text",{staticClass:"progress"},[s("text",{staticClass:"num"},[t._v("100")]),t._v("%")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"top-bedroom"},[s("text",{staticStyle:{"font-weight":"700"}},[t._v("客厅")]),s("view",{staticClass:"example"},[t._v("范例"),s("text",{staticClass:"iconfont"},[t._v("")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"choose_img"},[s("text",{staticClass:"iconfont icon-jia"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"top-bedroom"},[s("text",{staticStyle:{"font-weight":"700"}},[t._v("卫生间")]),s("view",{staticClass:"example"},[t._v("范例"),s("text",{staticClass:"iconfont"},[t._v("")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"hint-bedroom"},[t._v("必须上传卫生间照片。请确保"),s("text",{staticClass:"hint-bedroom-color"},[t._v("马桶卫浴、地面细节完整。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"choose_img"},[s("text",{staticClass:"iconfont icon-jia"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"top-bedroom"},[s("text",{staticStyle:{"font-weight":"700"}},[t._v("厨房")]),s("view",{staticClass:"example"},[t._v("范例"),s("text",{staticClass:"iconfont"},[t._v("")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"choose_img"},[s("text",{staticClass:"iconfont icon-jia"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"top-bedroom"},[s("text",{staticStyle:{"font-weight":"700"}},[t._v("其他")]),s("view",{staticClass:"example"},[t._v("范例"),s("text",{staticClass:"iconfont"},[t._v("")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"choose_img"},[s("text",{staticClass:"iconfont icon-jia"})])}];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})},bfec:function(t,e,s){},cac5:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s("2f62");s("942f"),a(s("8534"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},i=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),i.forEach(function(e){n(t,e,s[e])})}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var c={data:function(){return{house_id:"",pics:{},bedRoomImages:[],liveRoomImages:[],toiletImages:[],kitchenImages:[],otherImages:[],bedRoomPics:[],liveRoomPics:[],toiletPics:[],kitchenPics:[],otherPics:[],isUploading:!1}},onLoad:function(){this.getCurData()},onShow:function(){},computed:o({},(0,i.mapState)(["releaseObj"])),methods:o({},(0,i.mapMutations)(["editReleaseInfo","clearReleaseInfo","editReleaseInfoStatus"]),{chooseImg:function(e){var s=this;t.chooseImage({count:9,sizeType:["original"],sourceType:["album","camera"],success:function(t){var e=t.tempFiles;console.log(e),e.forEach(function(t,e){var i=t.path;s.uploadImg(i,e)})}})},uploadImg:function(e,s){var i=t.getStorageSync("dz_token"),a=t.uploadFile({url:"http://dz.abontest.com/wap/api/upload.php",filePath:e,name:"file",header:{Authorization:"Bearer "+i},success:function(t){console.log(t.data)},fail:function(){},complete:function(t){console.log(t)}});a.onProgressUpdate(function(t){console.log("第".concat(s+1,"张图上传进度:").concat(t.progress)),console.log("第".concat(s+1,"张图已经上传的数据长度:").concat(t.totalBytesSent)),console.log("第".concat(s+1,"张图预期需要上传的数据总长度:").concat(t.totalBytesExpectedToSend))})},getImgInfo:function(e){var s={};return t.getImageInfo({src:e.path,success:function(t){s={width:t.width,height:t.height,path:t.path?t.path:"",size:e.size/1024/1024}}}),s},getCurData:function(){var t=this.releaseObj;this.house_id=t.id;var e=t.pics?JSON.parse(t.pics):{};this.pics=e,this.bedRoomImages=e.bedroom,this.liveRoomImages=e.liveroom,this.toiletImages=e.toilet,this.kitchenImages=e.kitchen,this.otherImages=e.other}})};e.default=c}).call(this,s("6e42")["default"])}},[["3338","common/runtime","common/vendor"]]]);