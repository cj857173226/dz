(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/releaseManage/room_photograph/room_photograph"],{3338:function(t,e,s){"use strict";s("83ff");var a=o(s("b0ce")),i=o(s("51bf"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"51bf":function(t,e,s){"use strict";s.r(e);var a=s("d6ef"),i=s("62b0");for(var o in i)"default"!==o&&function(t){s.d(e,t,function(){return i[t]})}(o);s("d6ed");var n=s("2877"),r=Object(n["a"])(i["default"],a["a"],a["b"],!1,null,"738310a4",null);e["default"]=r.exports},"62b0":function(t,e,s){"use strict";s.r(e);var a=s("cac5"),i=s.n(a);for(var o in a)"default"!==o&&function(t){s.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},9778:function(t,e,s){},cac5:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s("2f62"),i=s("942f"),o=r(s("8534")),n=s("3c10");function r(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),a.forEach(function(e){u(t,e,s[e])})}return t}function u(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var l={data:function(){return{host:n.shortHttp,house_id:"",pics:[],bedRoomImages:[],liveRoomImages:[],toiletImages:[],kitchenImages:[],otherImages:[],temporaryUpload:[],isUploading:!1,curUploadType:"",progressAll:[],uploadErrStatus:[],errTips:[],upLoadSuccessStatus:[],successTimer:null,uploadTotal:0,curUploadNum:0,uploadIsComplete:!1,uploadSuccessPic:[],isDeling:!1,isSetMaining:!1,houseStatus:""}},onLoad:function(){this.getCurData()},onShow:function(){},computed:c({},(0,a.mapState)(["releaseObj"])),methods:c({},(0,a.mapMutations)(["editReleaseInfo","clearReleaseInfo","editReleaseInfoStatus"]),{chooseImg:function(e){if(this.isUploading)o.default.layer("图片正在上传中..");else{var s=this;s.init(),t.chooseImage({count:9,sizeType:["original"],sourceType:["album","camera"],success:function(t){var a=t.tempFiles;s.uploadTotal=a.length,s.isUploading=!0,s.curUploadType=e,s.temporaryUpload=a,a.forEach(function(t,a){var i=t.path;s.progressAll[a]=0,s.uploadErrStatus[a]=!1,s.upLoadSuccessStatus[a]=!1,s.uploadImg(i,a,e)})}})}},uploadImg:function(e,s,a){var i=this,o=t.getStorageSync("dz_token"),n=t.uploadFile({url:"http://dz.abontest.com/wap/api/upload.php",filePath:e,name:"file",header:{Authorization:"Bearer "+o},success:function(t){var e=JSON.parse(t.data);if("success"===e.status){var a=Object.assign(e.content,{index:s});i.uploadSuccessPic.push(a)}else i.$set(i.errTips,s,e.errorMsg),i.$set(i.uploadErrStatus,s,!0)},fail:function(t){i.$set(i.errTips,s,"上传发生异常"),i.$set(i.uploadErrStatus,s,!0),i.curUploadNum===i.uploadTotal&&(i.isUploading=!1)},complete:function(t){if(i.$set(i.upLoadSuccessStatus,s,!0),i.$set(i,"curUploadNum",i.curUploadNum+1),i.curUploadNum===i.uploadTotal){var e=i.picsSort(a);i.savePics(e)}}});n.onProgressUpdate(function(t){i.$set(i.progressAll,s,t.progress)})},setMainPic:function(t,e){var s=this,a=s.house_id;if(!s.isDeling&&!s.isSetMaining)if(s.isUploading)o.default.layer("图片上传中,不能进行删除操作...");else if(1!==t.is_main)if(1!==t.is_transverse)o.default.layer("非横图,不能设置为首图");else{var n=s.pics.slice();n.map(function(t,e,s){s[e]["is_main"]=0}),s.isSetMaining=!0,n[e].is_main=1;var r={house_id:a,pictures:JSON.stringify(n)};(0,i.request)({url:"/wap/api/fangdong.php?action=improveHouse",method:"POST",data:r,success:function(t){if("success"===t.data.status){var e=t.data.content;s.editReleaseInfo(e),s.editReleaseInfoStatus(!0),s.getCurData()}else o.default.layer("设置失败!")},complete:function(){s.isSetMaining=!1}})}},previewPic:function(e){var s=this;t.previewImage({current:s.host+e.path,urls:[s.host+e.path]})},del_img:function(e){var s=this,a=s.house_id;s.isDeling||s.isSetMaining||(s.isUploading?o.default.layer("图片上传中,不能进行删除操作..."):t.showModal({title:"",content:"是否删除这张图片",confirmText:"删除",success:function(n){if(n.confirm){s.isDeling=!0;var r=s.pics.slice();r.splice(e,1);var c={house_id:a,pictures:JSON.stringify(r)};t.showLoading({title:"删除中...",mask:!0}),(0,i.request)({url:"/wap/api/fangdong.php?action=improveHouse",method:"POST",data:c,success:function(t){if("success"===t.data.status){var e=t.data.content;s.editReleaseInfo(e),s.editReleaseInfoStatus(!0),s.getCurData()}else o.default.layer("删除图片失败")},complete:function(){s.isDeling=!1,t.hideLoading()}})}else n.cancel}}))},savePics:function(t){var e=this;t&&0!==t.length||(e.successTimer=setTimeout(function(){e.isUploading=!1,clearTimeout(e.successTimer),e.successTimer=null},1e3));var s=e.pics.slice(0),a=e.house_id,n=s.concat(t),r={house_id:a,pictures:JSON.stringify(n)};(0,i.request)({url:"/wap/api/fangdong.php?action=improveHouse",method:"POST",data:r,success:function(t){if("success"===t.data.status){var s=t.data.content;e.editReleaseInfo(s),e.editReleaseInfoStatus(!0)}else o.default.layer("照片上传失败")},complete:function(){e.successTimer=setTimeout(function(){e.isUploading=!1,e.getCurData(),clearTimeout(e.successTimer),e.successTimer=null},1e3)}})},hasMainPics:function(){var t=this,e=t.pics.slice(0);if(e.length>0)for(var s=0;s<e.length;s++)if(1==e[s].is_main)return!0;return!1},picsSort:function(t){var e=this,s=e.hasMainPics(),a=e.uploadSuccessPic,i="";if(a.sort(function(t,e){return t.index-e.index}),a.forEach(function(e){e.hasOwnProperty("index")&&(e["is_main"]=0,e["type"]=t,e["val"]=e.path,delete e.index)}),!s)for(var o=0;o<a.length;o++)if(1===a[o].is_transverse){i=o;break}return""!==i&&(a[i]["is_main"]=1),a},init:function(){var t=this;t.progressAll=[],t.temporaryUpload=[],t.uploadErrStatus=[],t.errTips=[],t.upLoadSuccessStatus=[],t.uploadIsComplete=!1,t.uploadTotal=0,t.curUploadNum=0,t.uploadSuccessPic=[],t.success_pics=[]},getCurData:function(){var t=this.releaseObj;this.house_id=t.id,this.houseStatus=t.status;var e=t.pics?t.pics:[];this.pics=e}})};e.default=l}).call(this,s("6e42")["default"])},d6ed:function(t,e,s){"use strict";var a=s("9778"),i=s.n(a);i.a},d6ef:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"contanier"},[s("view",{staticClass:"title"},[t._v("上传房源照片要求")]),t._m(0),s("view",{staticClass:"bedroom-box"},[t._m(1),t._m(2),s("view",{staticClass:"image_wrap"},[t._l(t.pics,function(e,a){return t.pics.length>0&&"bedroom"===e.type?s("view",{key:a,staticClass:"img_item",attrs:{eventid:"3f57b723-2-"+a},on:{tap:function(s){s.stopPropagation(),t.previewPic(e)}}},[s("image",{attrs:{src:t.host+e.val}}),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"del_img",attrs:{eventid:"3f57b723-0-"+a},on:{tap:function(e){e.stopPropagation(),t.del_img(a)}}},[s("text",{staticClass:"iconfont icon-duomeitiicon-"})]):t._e(),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"set_main",attrs:{eventid:"3f57b723-1-"+a},on:{tap:function(s){s.stopPropagation(),t.setMainPic(e,a)}}},[s("text",{domProps:{textContent:t._s(1===e.is_main?"首图":"设置为首图")}})]):t._e(),0!=t.houseStatus&&1!=t.houseStatus||1!==e.is_main?t._e():s("view",{staticClass:"set_main"},[s("text",[t._v("首图")])])]):t._e()}),t._l(t.temporaryUpload,function(e,a){return t.temporaryUpload.length>0&&t.isUploading&&"bedroom"===t.curUploadType?s("view",{key:e.path,staticClass:"img_item2"},[s("image",{attrs:{src:e.path}}),s("view",{staticClass:"mask"},[t.uploadErrStatus[a]&&0!=t.uploadErrStatus[a]?t._e():s("text",{staticClass:"progress"},[s("text",{staticClass:"num"},[t._v(t._s(t.progressAll[a]))]),t._v("%")]),!0===t.uploadErrStatus[a]?s("text",{staticClass:"err"},[t._v(t._s(t.errTips[a]))]):t._e()])]):t._e()}),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"choose_img",attrs:{eventid:"3f57b723-3"},on:{tap:function(e){e.stopPropagation(),t.chooseImg("bedroom")}}},[s("text",{staticClass:"iconfont icon-jia"})]):t._e()],2)]),s("view",{staticClass:"bedroom-box"},[t._m(3),s("view",{staticClass:"hint-bedroom"},[t._v("建议上传。站在厅角拍摄，事业会更广阔。")]),s("view",{staticClass:"image_wrap"},[t._l(t.pics,function(e,a){return t.pics.length>0&&"liveroom"===e.type?s("view",{key:a,staticClass:"img_item",attrs:{eventid:"3f57b723-6-"+a},on:{tap:function(s){s.stopPropagation(),t.previewPic(e)}}},[s("image",{attrs:{src:t.host+e.val}}),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"del_img",attrs:{eventid:"3f57b723-4-"+a},on:{tap:function(e){e.stopPropagation(),t.del_img(a)}}},[s("text",{staticClass:"iconfont icon-duomeitiicon-"})]):t._e(),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"set_main",attrs:{eventid:"3f57b723-5-"+a},on:{tap:function(s){s.stopPropagation(),t.setMainPic(e,a)}}},[s("text",{domProps:{textContent:t._s(1===e.is_main?"首图":"设置为首图")}})]):t._e(),0!=t.houseStatus&&1!=t.houseStatus||1!==e.is_main?t._e():s("view",{staticClass:"set_main"},[s("text",[t._v("首图")])])]):t._e()}),t._l(t.temporaryUpload,function(e,a){return t.temporaryUpload.length>0&&t.isUploading&&"liveroom"===t.curUploadType?s("view",{key:e.path,staticClass:"img_item2"},[s("image",{attrs:{src:e.path}}),s("view",{staticClass:"mask"},[t.uploadErrStatus[a]&&0!=t.uploadErrStatus[a]?t._e():s("text",{staticClass:"progress"},[s("text",{staticClass:"num"},[t._v(t._s(t.progressAll[a]))]),t._v("%")]),!0===t.uploadErrStatus[a]?s("text",{staticClass:"err"},[t._v(t._s(t.errTips[a]))]):t._e()])]):t._e()}),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"choose_img",attrs:{eventid:"3f57b723-7"},on:{tap:function(e){e.stopPropagation(),t.chooseImg("liveroom")}}},[s("text",{staticClass:"iconfont icon-jia"})]):t._e()],2)]),s("view",{staticClass:"bedroom-box"},[t._m(4),t._m(5),s("view",{staticClass:"image_wrap"},[t._l(t.pics,function(e,a){return t.pics.length>0&&"toilet"===e.type?s("view",{key:a,staticClass:"img_item",attrs:{eventid:"3f57b723-10-"+a},on:{tap:function(s){s.stopPropagation(),t.previewPic(e)}}},[s("image",{attrs:{src:t.host+e.val}}),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"del_img",attrs:{eventid:"3f57b723-8-"+a},on:{tap:function(e){e.stopPropagation(),t.del_img(a)}}},[s("text",{staticClass:"iconfont icon-duomeitiicon-"})]):t._e(),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"set_main",attrs:{eventid:"3f57b723-9-"+a},on:{tap:function(s){s.stopPropagation(),t.setMainPic(e,a)}}},[s("text",{domProps:{textContent:t._s(1===e.is_main?"首图":"设置为首图")}})]):t._e(),0!=t.houseStatus&&1!=t.houseStatus||1!==e.is_main?t._e():s("view",{staticClass:"set_main"},[s("text",[t._v("首图")])])]):t._e()}),t._l(t.temporaryUpload,function(e,a){return t.temporaryUpload.length>0&&t.isUploading&&"toilet"===t.curUploadType?s("view",{key:e.path,staticClass:"img_item2"},[s("image",{attrs:{src:e.path}}),s("view",{staticClass:"mask"},[t.uploadErrStatus[a]&&0!=t.uploadErrStatus[a]?t._e():s("text",{staticClass:"progress"},[s("text",{staticClass:"num"},[t._v(t._s(t.progressAll[a]))]),t._v("%")]),!0===t.uploadErrStatus[a]?s("text",{staticClass:"err"},[t._v(t._s(t.errTips[a]))]):t._e()])]):t._e()}),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"choose_img",attrs:{eventid:"3f57b723-11"},on:{tap:function(e){e.stopPropagation(),t.chooseImg("toilet")}}},[s("text",{staticClass:"iconfont icon-jia"})]):t._e()],2)]),s("view",{staticClass:"bedroom-box"},[t._m(6),s("view",{staticClass:"hint-bedroom"},[t._v("建议上传。")]),s("view",{staticClass:"image_wrap"},[t._l(t.pics,function(e,a){return t.pics.length>0&&"kitchen"===e.type?s("view",{key:a,staticClass:"img_item",attrs:{eventid:"3f57b723-14-"+a},on:{tap:function(s){s.stopPropagation(),t.previewPic(e)}}},[s("image",{attrs:{src:t.host+e.val}}),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"del_img",attrs:{eventid:"3f57b723-12-"+a},on:{tap:function(e){e.stopPropagation(),t.del_img(a)}}},[s("text",{staticClass:"iconfont icon-duomeitiicon-"})]):t._e(),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"set_main",attrs:{eventid:"3f57b723-13-"+a},on:{tap:function(s){s.stopPropagation(),t.setMainPic(e,a)}}},[s("text",{domProps:{textContent:t._s(1===e.is_main?"首图":"设置为首图")}})]):t._e(),0!=t.houseStatus&&1!=t.houseStatus||1!==e.is_main?t._e():s("view",{staticClass:"set_main"},[s("text",[t._v("首图")])])]):t._e()}),t._l(t.temporaryUpload,function(e,a){return t.temporaryUpload.length>0&&t.isUploading&&"kitchen"===t.curUploadType?s("view",{key:e.path,staticClass:"img_item2"},[s("image",{attrs:{src:e.path}}),s("view",{staticClass:"mask"},[t.uploadErrStatus[a]&&0!=t.uploadErrStatus[a]?t._e():s("text",{staticClass:"progress"},[s("text",{staticClass:"num"},[t._v(t._s(t.progressAll[a]))]),t._v("%")]),!0===t.uploadErrStatus[a]?s("text",{staticClass:"err"},[t._v(t._s(t.errTips[a]))]):t._e()])]):t._e()}),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"choose_img",attrs:{eventid:"3f57b723-15"},on:{tap:function(e){e.stopPropagation(),t.chooseImg("kitchen")}}},[s("text",{staticClass:"iconfont icon-jia"})]):t._e()],2)]),s("view",{staticClass:"bedroom-box"},[t._m(7),s("view",{staticClass:"hint-bedroom"},[t._v("建议上传。可以是其他室内空间、物件、小区周边环境等。更多的照片往往能吸引更多的房客。")]),s("view",{staticClass:"image_wrap"},[t._l(t.pics,function(e,a){return t.pics.length>0&&"other"===e.type?s("view",{key:a,staticClass:"img_item",attrs:{eventid:"3f57b723-18-"+a},on:{tap:function(s){s.stopPropagation(),t.previewPic(e)}}},[s("image",{attrs:{src:t.host+e.val}}),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"del_img",attrs:{eventid:"3f57b723-16-"+a},on:{tap:function(e){e.stopPropagation(),t.del_img(a)}}},[s("text",{staticClass:"iconfont icon-duomeitiicon-"})]):t._e(),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"set_main",attrs:{eventid:"3f57b723-17-"+a},on:{tap:function(s){s.stopPropagation(),t.setMainPic(e,a)}}},[s("text",{domProps:{textContent:t._s(1===e.is_main?"首图":"设置为首图")}})]):t._e(),0!=t.houseStatus&&1!=t.houseStatus||1!==e.is_main?t._e():s("view",{staticClass:"set_main"},[s("text",[t._v("首图")])])]):t._e()}),t._l(t.temporaryUpload,function(e,a){return t.temporaryUpload.length>0&&t.isUploading&&"other"===t.curUploadType?s("view",{key:e.path,staticClass:"img_item2"},[s("image",{attrs:{src:e.path}}),s("view",{staticClass:"mask"},[t.uploadErrStatus[a]&&0!=t.uploadErrStatus[a]?t._e():s("text",{staticClass:"progress"},[s("text",{staticClass:"num"},[t._v(t._s(t.progressAll[a]))]),t._v("%")]),!0===t.uploadErrStatus[a]?s("text",{staticClass:"err"},[t._v(t._s(t.errTips[a]))]):t._e()])]):t._e()}),-1==t.houseStatus||2==t.houseStatus?s("view",{staticClass:"choose_img",attrs:{eventid:"3f57b723-19"},on:{tap:function(e){e.stopPropagation(),t.chooseImg("other")}}},[s("text",{staticClass:"iconfont icon-jia"})]):t._e()],2)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"demand-box"},[s("text",[t._v("1.无明显修改")]),s("text",[t._v("2.无拉伸变形")]),s("text",[t._v("3.无水印")]),s("text",[t._v("4.不能出现联系方式或品牌宣传")]),s("view",{staticStyle:{color:"#F05B72"}},[t._v("5.卧室、卫生间必传,并且照片总数大于五张。")]),s("view",{staticStyle:{color:"#F05B72"}},[t._v("6.图片大小不超过20M,尺寸800*800以上,必须是png/jpg格式!!!")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"top-bedroom"},[s("text",{staticStyle:{"font-weight":"700"}},[t._v("卧室")]),s("view",{staticClass:"example"},[t._v("范例"),s("text",{staticClass:"iconfont"},[t._v("")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"hint-bedroom"},[t._v("填写户型和床铺信息后将有更多要求处理。请确保"),s("text",{staticClass:"hint-bedroom-color"},[t._v("卧室、床铺、床单、枕头展示齐全")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"top-bedroom"},[s("text",{staticStyle:{"font-weight":"700"}},[t._v("客厅")]),s("view",{staticClass:"example"},[t._v("范例"),s("text",{staticClass:"iconfont"},[t._v("")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"top-bedroom"},[s("text",{staticStyle:{"font-weight":"700"}},[t._v("卫生间")]),s("view",{staticClass:"example"},[t._v("范例"),s("text",{staticClass:"iconfont"},[t._v("")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"hint-bedroom"},[t._v("必须上传卫生间照片。请确保"),s("text",{staticClass:"hint-bedroom-color"},[t._v("马桶卫浴、地面细节完整。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"top-bedroom"},[s("text",{staticStyle:{"font-weight":"700"}},[t._v("厨房")]),s("view",{staticClass:"example"},[t._v("范例"),s("text",{staticClass:"iconfont"},[t._v("")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"top-bedroom"},[s("text",{staticStyle:{"font-weight":"700"}},[t._v("其他")]),s("view",{staticClass:"example"},[t._v("范例"),s("text",{staticClass:"iconfont"},[t._v("")])])])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})}},[["3338","common/runtime","common/vendor"]]]);