(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my_information/my_information"],{"1b5c":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2f62"),n=i("ad14"),o=f(i("57ad")),c=f(i("5f19")),r=f(i("b548")),s=i("a1f6");function f(t){return t&&t.__esModule?t:{default:t}}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){u(t,e,i[e])})}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d={components:{mpvuePicker:r.default},data:function(){return{host:s.shortHttp,token:"",storageInfo:{},avatar:"",infoForm:{nickname:"",truename:"",idCard:"",passCard:"",sex:"",birth:"",education:"",province:"",city:"",localIndex:"",birth_code:null},initInfo:{},mode:"selector",cityData:c.default,sexData:["男","女"],educationData:["初中","高中","专科","本科","研究生","博士"],deepLength:2,defaultLocal:[0,0],onfocus:!1,focus:!1,editStatus:0,idLoding:!1}},computed:l({},(0,a.mapState)(["isEditUserInfo"]),{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}}),onLoad:function(){var e=t.getStorageSync("dz_userInfo");this.storageInfo=e,this.token=t.getStorageSync("dz_token"),this.avatar=e.headImgurl;var i=this.initUserInfo(e);this.infoForm=o.default.deepCopy(i),this.initInfo=o.default.deepCopy(i)},onShow:function(){},onNavigationBarButtonTap:function(t){0===t.index&&this.submitInfo()},onBackPress:function(){return this.$refs.ciytPicker.showPicker?(this.$refs.ciytPicker.pickerCancel(),!0):!1===o.default.isObjEqual(this.infoForm,this.initInfo)?(this.userInfoIsEdit(),!0):void 0},methods:l({},(0,a.mapMutations)(["isUserInfoEditStatus"]),{nicknameFocus:function(){var t=this;t.onfocus=!0,t.$nextTick(function(){t.focus=!0})},chooseAvatar:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){var a=i.tempFiles[0].path;t.uploadFile({url:"http://dz.abontest.com/e/extend/uploadify/uploadify.php?dir=duanzu_head_no_mark&type=head_no_mark",filePath:a,name:"Filedata",header:{Authorization:"Bearer "+e.token},success:function(i){var a=JSON.parse(i.data);"success"===a.status?(console.log(a),e.storageInfo.headImgurl=a.content.url,e.avatar=a.content.url,t.setStorageSync("dz_userInfo",e.storageInfo),o.default.layer("上传成功")):o.default.layer("头像上传失败,请稍后再试")},fail:function(){o.default.layer("头像上传失败,请稍后再试")},complete:function(){}})}})},changeSex:function(){var e=this;t.showActionSheet({itemList:this.sexData,success:function(t){e.infoForm.sex=e.sexData[t.tapIndex]},fail:function(t){}})},changeDate:function(t){this.infoForm.birth=t.target.value},changeLocal:function(){var t;""===this.infoForm.localIndex?t=[0,0]:(t=this.infoForm.localIndex.split(","),t.map(function(t,e,i){i[e]=Number(t)})),this.defaultLocal=t,console.log(this.defaultLocal),this.mode="multiLinkageSelector",this.deepLength=2,this.$refs.ciytPicker.show()},confirmLocal:function(t){var e=t.label.split("-");this.infoForm.province=e[0],this.infoForm.city=e[1],this.infoForm.localIndex=t.index.join(",")},cancelLocal:function(t){},changeEducation:function(){var e=this;t.showActionSheet({itemList:this.educationData,success:function(t){e.infoForm.education=e.educationData[t.tapIndex]},fail:function(t){}})},getDate:function(t){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"start"===t?i-=60:"end"===t&&(i=i),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(i,"-").concat(a,"-").concat(n)},pickerDefultTrans:function(t){var e=t.split(",");return e.map(function(t,e,i){i[e]=Number(t)}),e},userInfoIsEdit:function(){var e=this;t.showModal({title:"",content:"是否保存当前编辑",confirmText:"保存",confirmColor:"#F05B72",success:function(i){i.confirm?e.submitInfo():i.cancel&&(e.infoForm=o.default.deepCopy(e.initInfo),t.navigateBack({delta:1}))}})},submitInfo:function(){if(!this.idLoding){var e=this,i=e.infoForm.nickname,a=e.infoForm.truename,c=e.infoForm.idCard,r=e.infoForm.passCard,s=e.infoForm.sex,f=e.infoForm.birth,l=e.infoForm.education,u=e.infoForm.province,d=e.infoForm.city,m=e.infoForm.localIndex,v=e.infoForm.birth_code;if(""===i.trim())o.default.layer("用户名不能为空");else if(""===c.trim()||o.default.idCardReg(c))if(""===a.trim()||o.default.nameRge(a)){this.idLoding=!0;var p={birth:f,birth_code:v,city:d,education:l,idcard:c,passport:r,province:u,province_code:m,realname:a,sex:s,nickname:i};(0,n.request)({url:"/wap/api/my.php?action=updateInfo",method:"POST",data:p,success:function(i){if("success"===i.data.status){var a=t.getStorageSync("dz_userInfo"),n=Object.assign(a,p);t.setStorageSync("dz_userInfo",n),e.initInfo=o.default.deepCopy(e.initUserInfo(n)),e.isUserInfoEditStatus(!0),t.navigateBack({delta:1}),o.default.layer("修改成功")}else o.default.layer("修改失败")},complete:function(){e.idLoding=!1}})}else o.default.layer("姓名必须为中文");else o.default.layer("身份证格式有误")}},initUserInfo:function(t){var e={};return e["nickname"]=t.nickname?t.nickname:"",e["truename"]=t.realname,e["idCard"]=t.idcard,e["passCard"]=t.passport,e["sex"]=t.sex,e["birth"]=t.birth,e["education"]=t.education,e["province"]=t.province,e["city"]=t.city,e["localIndex"]=t.province_code?t.province_code:"",e["birth_code"]=t.birth_code?t.birth_code:"",e}})};e.default=d}).call(this,i("6e42")["default"])},"297e":function(t,e,i){"use strict";i("fd37");var a=o(i("b0ce")),n=o(i("9ee6"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},3380:function(t,e,i){"use strict";var a=i("8dcd"),n=i.n(a);n.a},"5faf":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"my_information_page"},[i("view",{staticClass:"head"},[i("view",{staticClass:"avatar_wrap",attrs:{eventid:"38cb8dc2-0"},on:{tap:t.chooseAvatar}},[i("img",{staticClass:"avatar",attrs:{src:t.avatar?t.host+t.avatar:"/static/images/default_avatar.jpg",alt:""}}),t._m(0)]),i("view",{staticClass:"nick-name"},[t.infoForm.nickname&&!0!==t.onfocus?t._e():i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.infoForm.nickname,expression:"infoForm.nickname",modifiers:{trim:!0}}],ref:"nickname",attrs:{type:"text","placeholder-style":"font-size:36upx;color:#cccccc;",maxlength:"16",placeholder:"请输入用户名",focus:t.focus,eventid:"38cb8dc2-1"},domProps:{value:t.infoForm.nickname},on:{focus:function(e){t.onfocus=!0},blur:[function(e){t.onfocus=!1},function(e){t.$forceUpdate()}],input:function(e){e.target.composing||(t.infoForm.nickname=e.target.value.trim())}}}),""!==t.infoForm.nickname&&!1===t.onfocus?i("view",{staticClass:"show_nickname",attrs:{eventid:"38cb8dc2-2"},on:{tap:function(e){t.nicknameFocus()}}},[t._v(t._s(t.infoForm.nickname)),i("text",{staticClass:"iconfont icon-icon-edit edit-icon"})]):t._e()])]),i("view",{staticClass:"info_form"},[i("view",{staticClass:"form_item"},[i("view",{staticClass:"label"},[t._v("真实姓名")]),i("view",{staticClass:"ipt"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.infoForm.truename,expression:"infoForm.truename",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:28upx;color:#cccccc;",placeholder:"请填写",maxlength:"6",eventid:"38cb8dc2-3"},domProps:{value:t.infoForm.truename},on:{input:function(e){e.target.composing||(t.infoForm.truename=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),i("view",{staticClass:"after_icon"})]),i("view",{staticClass:"form_item"},[i("view",{staticClass:"label"},[t._v("身份证号")]),i("view",{staticClass:"ipt"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.infoForm.idCard,expression:"infoForm.idCard",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:28upx;color:#cccccc;",placeholder:"请填写",maxlength:"18",eventid:"38cb8dc2-4"},domProps:{value:t.infoForm.idCard},on:{input:function(e){e.target.composing||(t.infoForm.idCard=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),i("view",{staticClass:"after_icon"})]),i("view",{staticClass:"form_item"},[i("view",{staticClass:"label"},[t._v("护照号")]),i("view",{staticClass:"ipt"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.infoForm.passCard,expression:"infoForm.passCard",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:28upx;color:#cccccc;",placeholder:"请填写",eventid:"38cb8dc2-5"},domProps:{value:t.infoForm.passCard},on:{input:function(e){e.target.composing||(t.infoForm.passCard=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),i("view",{staticClass:"after_icon"})]),i("view",{staticClass:"form_item",attrs:{eventid:"38cb8dc2-6"},on:{tap:t.changeSex}},[i("view",{staticClass:"label"},[t._v("性别")]),i("view",{staticClass:"ipt"},[""===t.infoForm.sex?i("view",{staticClass:"empty"},[t._v("请选择")]):i("view",{staticClass:"data_box"},[t._v(t._s(t.infoForm.sex))])]),t._m(1)]),i("view",{staticClass:"form_item",attrs:{eventid:"38cb8dc2-7"},on:{click:t.changeLocal}},[i("view",{staticClass:"label"},[t._v("地区")]),i("view",{staticClass:"ipt"},[""===t.infoForm.province||""===t.infoForm.city?i("view",{staticClass:"empty"},[t._v("请选择")]):i("view",{staticClass:"data_box"},[t._v(t._s(t.infoForm.province)+"-"+t._s(t.infoForm.city))])]),t._m(2)]),i("view",{staticClass:"form_item"},[i("view",{staticClass:"label"},[t._v("出生日期")]),i("picker",{staticClass:"ipt",attrs:{mode:"date",value:t.infoForm.birth,start:t.startDate,end:t.endDate,eventid:"38cb8dc2-8"},on:{change:t.changeDate}},[""===t.infoForm.birth?i("view",{staticClass:"empty"},[t._v("请选择")]):t._e(),i("view",{staticClass:"data_box"},[t._v(t._s(t.infoForm.birth))])]),t._m(3)],1),i("view",{staticClass:"form_item",attrs:{eventid:"38cb8dc2-9"},on:{tap:t.changeEducation}},[i("view",{staticClass:"label"},[t._v("教育背景")]),i("view",{staticClass:"ipt"},[""===t.infoForm.education?i("view",{staticClass:"empty"},[t._v("请选择")]):i("view",{staticClass:"data_box"},[t._v(t._s(t.infoForm.education))])]),t._m(4)])]),i("mpvue-picker",{ref:"ciytPicker",attrs:{themeColor:"#F05B72",mode:t.mode,deepLength:t.deepLength,pickerValueDefault:t.defaultLocal,pickerValueArray:t.cityData,eventid:"38cb8dc2-10",mpcomid:"38cb8dc2-0"},on:{onConfirm:t.confirmLocal,onCancel:t.cancelLocal}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"img_icon"},[i("text",{staticClass:"iconfont icon-xiangji"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"after_icon"},[i("text",{staticClass:"iconfont icon-right"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"after_icon"},[i("text",{staticClass:"iconfont icon-right"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"after_icon"},[i("text",{staticClass:"iconfont icon-right"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"after_icon"},[i("text",{staticClass:"iconfont icon-right"})])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"8dcd":function(t,e,i){},"9ee6":function(t,e,i){"use strict";i.r(e);var a=i("5faf"),n=i("a42f");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("d3c0"),i("3380");var c=i("2877"),r=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,"5ae25ee0",null);e["default"]=r.exports},a42f:function(t,e,i){"use strict";i.r(e);var a=i("1b5c"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},b4ee:function(t,e,i){},d3c0:function(t,e,i){"use strict";var a=i("b4ee"),n=i.n(a);n.a}},[["297e","common/runtime","common/vendor"]]]);