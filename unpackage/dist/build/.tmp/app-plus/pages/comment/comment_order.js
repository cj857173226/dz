(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/comment/comment_order"],{"160f":function(t,e,a){},"7a11":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("3dd1")),n=a("942f"),o=a("3c10");function s(t){return t&&t.__esModule?t:{default:t}}var r={components:{uniRate:i.default},data:function(){return{shortHttp:o.shortHttp,goodRate:"",landlordValue:"",number:"0",indentRate:"",number2:"0",orderValue:"",listPicture:[],show:!1,orderId:"",landlordName:"",headPortrait:"",roomUrl:"",roomTitle:"",previewAry:[],submitImgData:[]}},methods:{changPoints:function(t){this.goodRate=t.value},changindent:function(t){this.indentRate=t.value},buleInput:function(t){this.landlordValue=t.detail.value,this.number=t.detail.cursor},buleInputOrder:function(t){this.orderValue=t.detail.value,this.number2=t.detail.cursor},clickAddPicture:function(){var e=this,a=t.getStorageSync("dz_token");t.chooseImage({sizeType:["compressed"],sourceType:["album","camera"],success:function(i){for(var n=i.tempFilePaths,s=0;s<n.length;s++)e.listPicture.push(n[s]),t.uploadFile({url:"".concat(o.shortHttp,"/wap/api/upload.php?type=comment"),header:{Authorization:"Bearer "+a},fileType:"image",filePath:n[s],name:"file",success:function(t){var a=JSON.parse(t.data);console.log("转换",a),e.submitImgData.push(a.content.path)}})},fail:function(e){t.showToast({title:e,icon:"none"})}})},clickDelete:function(t){this.listPicture.splice(t,1)},clickPresent:function(){var e=this;if(""===e.goodRate)t.showToast({title:"请为房东添加评分",icon:"none"});else if(""===e.landlordValue)t.showToast({title:"请为房东添加评价",icon:"none"});else if(""===e.indentRate)t.showToast({title:"请为房间添加评份",icon:"none"});else if(""===e.orderValue)t.showToast({title:"请为房间添加评论",icon:"none"});else{var a=e.submitImgData;if(a.length>0){var i=JSON.stringify(a);console.log("1",i),(0,n.request)({url:"/wap/api/detail.php?action=createComment",method:"POST",data:{dd_id:e.orderId,dd_comment:e.orderValue,landlord_comment:e.landlordValue,dd_start:e.indentRate,land_start:e.goodRate,pictures:i},success:function(e){console.log("提交订单",e),"success"===e.data.status?t.showToast({title:"评论成功",icon:"none"}):t.showToast({title:e.data.errorMsg,icon:"none"})},fail:function(e){t.showToast({title:"系统异常，请稍后再试",icon:"none"})}})}else console.log("2"),(0,n.request)({url:"/wap/api/detail.php?action=createComment",method:"POST",data:{dd_id:e.orderId,dd_comment:e.orderValue,landlord_comment:e.landlordValue,dd_start:e.indentRate,land_start:e.goodRate},success:function(e){console.log("提交订单",e),"success"===e.data.status?t.showToast({title:"评论成功",icon:"none"}):t.showToast({title:e.data.errorMsg,icon:"none"})},fail:function(e){t.showToast({title:"系统异常，请稍后再试",icon:"none"})}})}},tapPreview:function(){var e=this;t.previewImage({indicator:"numbe",loop:!0,urls:e.previewAry})},uploadedPreview:function(e){t.previewImage({indicator:"none",urls:[e]})}},onLoad:function(e){var a=this;a.orderId=e.orderId,t.showLoading({title:"加载中"}),(0,n.request)({url:"/wap/api/detail.php?action=index",data:{luId:e.roomId},success:function(e){if(t.hideLoading(),console.log(e),"success"===e.data.status){a.landlordName=e.data.content.landlord.landlordName,a.headPortrait=e.data.content.landlord.headImageUrl,a.roomUrl=e.data.content.images[0].bigImgUrl,a.roomTitle=e.data.content.luBase.lodgeUnitName;for(var i=[],n=e.data.content.images,o=0;o<n.length;o++)i.push(a.shortHttp+n[o].bigImgUrl);a.previewAry=i}else t.showToast({title:e.data.errorMsg,icon:"none"})},fail:function(e){t.showToast({title:"系统异常，稍后再试",icon:"none"})}})}};e.default=r}).call(this,a("6e42")["default"])},9725:function(t,e,a){"use strict";a.r(e);var i=a("7a11"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},a9b4:function(t,e,a){"use strict";a("83ff");var i=o(a("b0ce")),n=o(a("aead"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},aead:function(t,e,a){"use strict";a.r(e);var i=a("e56d"),n=a("9725");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("bcb3");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"6b6f5ea7",null);e["default"]=r.exports},bcb3:function(t,e,a){"use strict";var i=a("160f"),n=a.n(i);n.a},e56d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"container"},[a("view",{staticClass:"landlord-information"},[a("text",[t._v(t._s(t.landlordName))]),a("view",{staticClass:"photo"},[a("image",{staticClass:"photo-img",attrs:{src:t.shortHttp+t.headPortrait}})]),a("view",{staticClass:"btn"},[t._v("房东")]),a("view",{staticClass:"grade-box"},[a("view",{staticClass:"grade"},[a("uni-rate",{attrs:{margin:"10",value:t.goodRate,eventid:"c3e71b86-0",mpcomid:"c3e71b86-0"},on:{change:t.changPoints}})],1)]),a("view",{staticClass:"comment-box"},[a("textarea",{staticClass:"area",attrs:{maxlength:"200","placeholder-style":"text-algin:left;font-size:14px;",placeholder:"说说哪里好，其他顾客都知道",eventid:"c3e71b86-1"},on:{input:t.buleInput}}),a("text",{staticClass:"number"},[t._v(t._s(t.number)+"/200")])])]),a("view",{staticClass:"list-box"},[a("view",{staticClass:"left-img",attrs:{eventid:"c3e71b86-2"},on:{tap:t.tapPreview}},[a("image",{staticClass:"title-img",attrs:{src:t.shortHttp+t.roomUrl}})]),a("view",{staticClass:"right-title"},[t._v(t._s(t.roomTitle))])]),a("view",{staticClass:"grade-box"},[a("view",{staticClass:"grade"},[a("uni-rate",{attrs:{margin:"10",value:t.indentRate,eventid:"c3e71b86-3",mpcomid:"c3e71b86-1"},on:{change:t.changindent}})],1)]),a("view",{staticClass:"comment-box"},[a("textarea",{staticClass:"area",attrs:{maxlength:"200","placeholder-style":"text-algin:left;font-size:14px;",placeholder:"说说哪里好，其他顾客都知道",eventid:"c3e71b86-4"},on:{input:t.buleInputOrder}}),a("text",{staticClass:"number"},[t._v(t._s(t.number2)+"/200")])]),a("view",{staticClass:"add-picture-box"},[t.listPicture.length>0?a("view",{staticClass:"add-picture"},[t._l(t.listPicture,function(e,i){return a("view",{key:i,staticClass:"add-picture-img-box"},[a("image",{staticClass:"add-picture-img",attrs:{src:e,eventid:"c3e71b86-5-"+i},on:{tap:function(a){a.stopPropagation(),t.uploadedPreview(e)}}}),a("text",{staticClass:"iconfont chacha",attrs:{eventid:"c3e71b86-6-"+i},on:{tap:function(a){a.stopPropagation(),t.clickDelete(e)}}},[t._v("")])])}),a("view",{staticClass:"picture-box",attrs:{eventid:"c3e71b86-7"},on:{tap:t.clickAddPicture}},[a("image",{staticClass:"picture-img",attrs:{src:"../../static/images/tinajia.png",mode:"scaleToFill"}})])],2):a("view",{staticClass:"picture-box",attrs:{eventid:"c3e71b86-8"},on:{tap:t.clickAddPicture}},[a("image",{staticClass:"picture-img",attrs:{src:"../../static/images/tinajia.png"}})])]),a("view",{staticClass:"btn",attrs:{eventid:"c3e71b86-9"},on:{tap:t.clickPresent}},[t._v("提交评论")])])},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})}},[["a9b4","common/runtime","common/vendor"]]]);