(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my_information/my_information"],{"00fa":function(e,l,a){"use strict";a.r(l);var i=a("72ab"),u=a("e73a");for(var t in u)"default"!==t&&function(e){a.d(l,e,function(){return u[e]})}(t);a("de7e"),a("0639");var r=a("2877"),v=Object(r["a"])(u["default"],i["a"],i["b"],!1,null,"7cd28324",null);l["default"]=v.exports},"04c0":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=t(a("e94f")),u=t(a("7753"));function t(e){return e&&e.__esModule?e:{default:e}}var r={components:{mpvuePicker:u.default},data:function(){return{infoForm:{avatar:"",nickname:"",truename:"",idCard:"",passCard:"",sex:"",local:"",date:"",education:"",province:"",city:"",localIndex:[0,0]},mode:"selector",cityData:i.default,sexData:["男","女"],educationData:["初中","高中","专科","本科","研究生","博士"],deepLength:2,localIndex:[0,0],onfocus:!1}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onLoad:function(){},onShow:function(){},onReachBottom:function(){},onBackPress:function(){if(this.$refs.ciytPicker.showPicker)return this.$refs.ciytPicker.pickerCancel(),!0},methods:{chooseAvatar:function(){var l=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(e.tempFiles),l.infoForm.avatar=e.tempFiles[0].path,console.log(JSON.stringify(e.tempFilePaths))}})},changeSex:function(){var l=this;e.showActionSheet({itemList:this.sexData,success:function(e){l.infoForm.sex=l.sexData[e.tapIndex]},fail:function(e){}})},changeDate:function(e){this.infoForm.date=e.target.value},changeLocal:function(){this.mode="multiLinkageSelector",this.deepLength=2,this.$refs.ciytPicker.show()},confirmLocal:function(e){var l=e.label.split("-");this.infoForm.province=l[0],this.infoForm.city=l[1],this.infoForm.localIndex=e.index,this.localIndex=e.index},cancelLocal:function(e){},changeEducation:function(){var l=this;e.showActionSheet({itemList:this.educationData,success:function(e){l.infoForm.education=l.educationData[e.tapIndex]},fail:function(e){}})},getDate:function(e){var l=new Date,a=l.getFullYear(),i=l.getMonth()+1,u=l.getDate();return"start"===e?a-=60:"end"===e&&(a=a),i=i>9?i:"0"+i,u=u>9?u:"0"+u,"".concat(a,"-").concat(i,"-").concat(u)}}};l.default=r}).call(this,a("6e42")["default"])},"0639":function(e,l,a){"use strict";var i=a("26a8"),u=a.n(i);u.a},"26a8":function(e,l,a){},"2a39":function(e,l,a){"use strict";var i=a("70a6"),u=a.n(i);u.a},3974:function(e,l,a){"use strict";function i(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u={data:function(){return{pickerChangeValue:[],pickerValue:[],pickerValueArrayChange:!0,modeChange:!1,pickerValueSingleArray:[],pickerValueHour:[],pickerValueMinute:[],pickerValueMulArray:[],pickerValueMulTwoOne:[],pickerValueMulTwoTwo:[],pickerValueMulThreeOne:[],pickerValueMulThreeTwo:[],pickerValueMulThreeThree:[],showPicker:!1}},props:{mode:{type:String,default:"selector"},pickerValueArray:{type:Array,default:function(){return[]}},pickerValueDefault:{type:Array,default:function(){return[]}},deepLength:{type:Number,default:2},themeColor:String},watch:i({pickerValueArray:function(e,l){this.pickerValueArrayChange=!0},mode:function(e,l){this.modeChange=!0}},"pickerValueArray",function(e){this.initPicker(e)}),methods:{initPicker:function(e){var l=e;if(this.pickerValue=this.pickerValueDefault,"selector"===this.mode)this.pickerValueSingleArray=e;else if("timeSelector"===this.mode){this.modeChange=!1;for(var a=[],i=[],u=0;u<24;u++)a.push({value:u,label:u>9?"".concat(u," 时"):"0".concat(u," 时")});for(var t=0;t<60;t++)i.push({value:t,label:t>9?"".concat(t," 分"):"0".concat(t," 分")});this.pickerValueHour=a,this.pickerValueMinute=i}else if("multiSelector"===this.mode)this.pickerValueMulArray=e;else if("multiLinkageSelector"===this.mode&&2===this.deepLength){for(var r=[],v=[],c=0,n=l.length;c<n;c++)r.push(l[c]);if(2===this.pickerValueDefault.length)for(var s=this.pickerValueDefault[0],o=0,b=l[s].children.length;o<b;o++)v.push(l[s].children[o]);else for(var h=0,p=l[0].children.length;h<p;h++)v.push(l[0].children[h]);this.pickerValueMulTwoOne=r,this.pickerValueMulTwoTwo=v}else if("multiLinkageSelector"===this.mode&&3===this.deepLength){for(var d=[],f=[],m=[],k=0,g=l.length;k<g;k++)d.push(l[k]);if(this.pickerValueDefault=3===this.pickerValueDefault.length?this.pickerValueDefault:[0,0,0],3===this.pickerValueDefault.length){for(var _=this.pickerValueDefault[0],w=0,V=l[_].children.length;w<V;w++)f.push(l[_].children[w]);for(var C=this.pickerValueDefault[1],y=0,T=l[_].children[C].children.length;y<T;y++)m.push(l[_].children[C].children[y])}this.pickerValueMulThreeOne=d,this.pickerValueMulThreeTwo=f,this.pickerValueMulThreeThree=m}},show:function(){var e=this;setTimeout(function(){e.pickerValueArrayChange||e.modeChange?(e.initPicker(e.pickerValueArray),e.showPicker=!0,e.pickerValueArrayChange=!1,e.modeChange=!1):e.showPicker=!0},0)},maskClick:function(){this.pickerCancel()},pickerCancel:function(){this.showPicker=!1,this._initPickerVale();var e={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onCancel",e)},pickerConfirm:function(e){this.showPicker=!1,this._initPickerVale();var l={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onConfirm",l)},showPickerView:function(){this.showPicker=!0},pickerChange:function(e){this.pickerValue=e.mp.detail.value;var l={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",l)},pickerChangeMul:function(e){if(2===this.deepLength){var l=this.pickerValueArray,a=e.mp.detail.value;if(a[0]!==this.pickerValue[0]){for(var i=[],u=0,t=l[a[0]].children.length;u<t;u++)i.push(l[a[0]].children[u]);this.pickerValueMulTwoTwo=i,a[1]=0}this.pickerValue=a}else if(3===this.deepLength){var r=this.pickerValueArray,v=e.mp.detail.value,c=[],n=[];if(v[0]!==this.pickerValue[0]){this.pickerValueMulThreeTwo=[];for(var s=0,o=r[v[0]].children.length;s<o;s++)c.push(r[v[0]].children[s]);for(var b=0,h=r[v[0]].children[0].children.length;b<h;b++)n.push(r[v[0]].children[0].children[b]);v[1]=0,v[2]=0,this.pickerValueMulThreeTwo=c,this.pickerValueMulThreeThree=n}else if(v[1]!==this.pickerValue[1]){this.pickerValueMulThreeThree=[],c=this.pickerValueMulThreeTwo;for(var p=0,d=r[v[0]].children[v[1]].children.length;p<d;p++)n.push(r[v[0]].children[v[1]].children[p]);v[2]=0,this.pickerValueMulThreeThree=n}this.pickerValue=v}var f={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",f)},_getPickerLabelAndValue:function(e,l){var a,i=[];if("selector"===l)a=this.pickerValueSingleArray[e].label,i.push(this.pickerValueSingleArray[e].value);else if("timeSelector"===l)a="".concat(this.pickerValueHour[e[0]].label,"-").concat(this.pickerValueMinute[e[1]].label),i.push(this.pickerValueHour[e[0]].value),i.push(this.pickerValueHour[e[1]].value);else if("multiSelector"===l)for(var u=0;u<e.length;u++)u>0?a+=this.pickerValueMulArray[u][e[u]].label+(u===e.length-1?"":"-"):a=this.pickerValueMulArray[u][e[u]].label+"-",i.push(this.pickerValueMulArray[u][e[u]].value);else"multiLinkageSelector"===l&&(a=2===this.deepLength?"".concat(this.pickerValueMulTwoOne[e[0]].label,"-").concat(this.pickerValueMulTwoTwo[e[1]].label):"".concat(this.pickerValueMulThreeOne[e[0]].label,"-").concat(this.pickerValueMulThreeTwo[e[1]].label,"-").concat(this.pickerValueMulThreeThree[e[2]].label),2===this.deepLength?(i.push(this.pickerValueMulTwoOne[e[0]].value),i.push(this.pickerValueMulTwoTwo[e[1]].value)):(i.push(this.pickerValueMulThreeOne[e[0]].value),i.push(this.pickerValueMulThreeTwo[e[1]].value),i.push(this.pickerValueMulThreeThree[e[2]].value)));return{label:a,value:i}},_initPickerVale:function(){0===this.pickerValue.length&&("selector"===this.mode?this.pickerValue=[0]:"multiSelector"===this.mode?this.pickerValue=new Int8Array(this.pickerValueArray.length):"multiLinkageSelector"===this.mode&&2===this.deepLength?this.pickerValue=[0,0]:"multiLinkageSelector"===this.mode&&3===this.deepLength&&(this.pickerValue=[0,0,0]))}}};l.default=u},"6f5f":function(e,l,a){"use strict";a("83ff");var i=t(a("b0ce")),u=t(a("00fa"));function t(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(u.default))},"70a6":function(e,l,a){},"72ab":function(e,l,a){"use strict";var i=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("view",{staticClass:"my_information_page"},[a("view",{staticClass:"head"},[a("view",{staticClass:"avatar_wrap",attrs:{eventid:"15549178-0"},on:{tap:e.chooseAvatar}},[a("img",{staticClass:"avatar",attrs:{src:e.infoForm.avatar?e.infoForm.avatar:"/static/images/default_avatar.jpg",alt:""}}),e._m(0)]),a("view",{staticClass:"nick-name"},[""===e.infoForm.nickname||!0===e.onfocus?a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.infoForm.nickname,expression:"infoForm.nickname",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:36upx;color:#cccccc;",maxlength:"16",placeholder:"请输入用户名",eventid:"15549178-1"},domProps:{value:e.infoForm.nickname},on:{focus:function(l){e.onfocus=!0},blur:[function(l){e.onfocus=!1},function(l){e.$forceUpdate()}],input:function(l){l.target.composing||(e.infoForm.nickname=l.target.value.trim())}}}):e._e(),""!==e.infoForm.nickname&&!1===e.onfocus?a("view",{staticClass:"show_nickname",attrs:{eventid:"15549178-2"},on:{tap:function(l){e.onfocus=!0}}},[e._v(e._s(e.infoForm.nickname)),a("text",{staticClass:"iconfont icon-icon-edit edit-icon"})]):e._e()])]),a("view",{staticClass:"info_form"},[a("view",{staticClass:"form_item"},[a("view",{staticClass:"label"},[e._v("真实姓名")]),a("view",{staticClass:"ipt"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.infoForm.truename,expression:"infoForm.truename",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:28upx;color:#cccccc;",placeholder:"请填写",eventid:"15549178-3"},domProps:{value:e.infoForm.truename},on:{input:function(l){l.target.composing||(e.infoForm.truename=l.target.value.trim())},blur:function(l){e.$forceUpdate()}}})]),a("view",{staticClass:"after_icon"})]),a("view",{staticClass:"form_item"},[a("view",{staticClass:"label"},[e._v("身份证号")]),a("view",{staticClass:"ipt"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.infoForm.idCard,expression:"infoForm.idCard",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:28upx;color:#cccccc;",placeholder:"请填写",eventid:"15549178-4"},domProps:{value:e.infoForm.idCard},on:{input:function(l){l.target.composing||(e.infoForm.idCard=l.target.value.trim())},blur:function(l){e.$forceUpdate()}}})]),a("view",{staticClass:"after_icon"})]),a("view",{staticClass:"form_item"},[a("view",{staticClass:"label"},[e._v("护照号")]),a("view",{staticClass:"ipt"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.infoForm.passCard,expression:"infoForm.passCard",modifiers:{trim:!0}}],attrs:{type:"text","placeholder-style":"font-size:28upx;color:#cccccc;",placeholder:"请填写",eventid:"15549178-5"},domProps:{value:e.infoForm.passCard},on:{input:function(l){l.target.composing||(e.infoForm.passCard=l.target.value.trim())},blur:function(l){e.$forceUpdate()}}})]),a("view",{staticClass:"after_icon"})]),a("view",{staticClass:"form_item",attrs:{eventid:"15549178-6"},on:{tap:e.changeSex}},[a("view",{staticClass:"label"},[e._v("性别")]),a("view",{staticClass:"ipt"},[""===e.infoForm.sex?a("view",{staticClass:"empty"},[e._v("请选择")]):a("view",{staticClass:"data_box"},[e._v(e._s(e.infoForm.sex))])]),e._m(1)]),a("view",{staticClass:"form_item",attrs:{eventid:"15549178-7"},on:{click:e.changeLocal}},[a("view",{staticClass:"label"},[e._v("地区")]),a("view",{staticClass:"ipt"},[""===e.infoForm.province&&""===e.infoForm.city?a("view",{staticClass:"empty"},[e._v("请选择")]):a("view",{staticClass:"data_box"},[e._v(e._s(e.infoForm.province)+"-"+e._s(e.infoForm.city))])]),e._m(2)]),a("view",{staticClass:"form_item"},[a("view",{staticClass:"label"},[e._v("出生日期")]),a("picker",{staticClass:"ipt",attrs:{mode:"date",value:e.infoForm.date,start:e.startDate,end:e.endDate,eventid:"15549178-8"},on:{change:e.changeDate}},[""===e.infoForm.date?a("view",{staticClass:"empty"},[e._v("请选择")]):e._e(),a("view",{staticClass:"data_box"},[e._v(e._s(e.infoForm.date))])]),e._m(3)],1),a("view",{staticClass:"form_item",attrs:{eventid:"15549178-9"},on:{tap:e.changeEducation}},[a("view",{staticClass:"label"},[e._v("教育背景")]),a("view",{staticClass:"ipt"},[""===e.infoForm.education?a("view",{staticClass:"empty"},[e._v("请选择")]):a("view",{staticClass:"data_box"},[e._v(e._s(e.infoForm.education))])]),e._m(4)])]),a("mpvue-picker",{ref:"ciytPicker",attrs:{themeColor:"#F05B72",mode:e.mode,deepLength:e.deepLength,pickerValueDefault:e.localIndex,pickerValueArray:e.cityData,eventid:"15549178-10",mpcomid:"15549178-0"},on:{onConfirm:e.confirmLocal,onCancel:e.cancelLocal}})],1)},u=[function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("view",{staticClass:"img_icon"},[a("text",{staticClass:"iconfont icon-xiangji"})])},function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("view",{staticClass:"after_icon"},[a("text",{staticClass:"iconfont icon-right"})])},function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("view",{staticClass:"after_icon"},[a("text",{staticClass:"iconfont icon-right"})])},function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("view",{staticClass:"after_icon"},[a("text",{staticClass:"iconfont icon-right"})])},function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("view",{staticClass:"after_icon"},[a("text",{staticClass:"iconfont icon-right"})])}];a.d(l,"a",function(){return i}),a.d(l,"b",function(){return u})},"738d":function(e,l,a){},7753:function(e,l,a){"use strict";a.r(l);var i=a("8758"),u=a("a93c");for(var t in u)"default"!==t&&function(e){a.d(l,e,function(){return u[e]})}(t);a("2a39");var r=a("2877"),v=Object(r["a"])(u["default"],i["a"],i["b"],!1,null,null,null);l["default"]=v.exports},8758:function(e,l,a){"use strict";var i=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("view",{staticClass:"mpvue-picker"},[a("view",{class:{pickerMask:e.showPicker},attrs:{catchtouchmove:"true",eventid:"777b84d3-0"},on:{click:e.maskClick}}),a("view",{staticClass:"mpvue-picker-content ",class:{"mpvue-picker-view-show":e.showPicker}},[a("view",{staticClass:"mpvue-picker__hd",attrs:{catchtouchmove:"true"}},[a("view",{staticClass:"mpvue-picker__action",attrs:{eventid:"777b84d3-1"},on:{click:e.pickerCancel}},[e._v("取消")]),a("view",{staticClass:"mpvue-picker__action",style:{color:e.themeColor},attrs:{eventid:"777b84d3-2"},on:{click:e.pickerConfirm}},[e._v("确定")])]),"selector"===e.mode&&e.pickerValueSingleArray.length>0?a("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"777b84d3-3"},on:{change:e.pickerChange}},[a("block",[a("picker-view-column",{attrs:{mpcomid:"777b84d3-0"}},e._l(e.pickerValueSingleArray,function(l,i){return a("view",{key:i,staticClass:"picker-item"},[e._v(e._s(l.label))])}))],1)],1):e._e(),"timeSelector"===e.mode?a("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"777b84d3-4"},on:{change:e.pickerChange}},[a("block",[a("picker-view-column",{attrs:{mpcomid:"777b84d3-1"}},e._l(e.pickerValueHour,function(l,i){return a("view",{key:i,staticClass:"picker-item"},[e._v(e._s(l.label))])})),a("picker-view-column",{attrs:{mpcomid:"777b84d3-2"}},e._l(e.pickerValueMinute,function(l,i){return a("view",{key:i,staticClass:"picker-item"},[e._v(e._s(l.label))])}))],1)],1):e._e(),"multiSelector"===e.mode?a("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"777b84d3-5"},on:{change:e.pickerChange}},e._l(e.pickerValueMulArray.length,function(l,i){return a("block",{key:i},[a("picker-view-column",{attrs:{mpcomid:"777b84d3-3-"+i}},e._l(e.pickerValueMulArray[l],function(l,i){return a("view",{key:i,staticClass:"picker-item"},[e._v(e._s(l.label))])}))],1)})):e._e(),"multiLinkageSelector"===e.mode&&2===e.deepLength?a("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"777b84d3-6"},on:{change:e.pickerChangeMul}},[a("block",[a("picker-view-column",{attrs:{mpcomid:"777b84d3-4"}},e._l(e.pickerValueMulTwoOne,function(l,i){return a("view",{key:i,staticClass:"picker-item"},[e._v(e._s(l.label))])})),a("picker-view-column",{attrs:{mpcomid:"777b84d3-5"}},e._l(e.pickerValueMulTwoTwo,function(l,i){return a("view",{key:i,staticClass:"picker-item"},[e._v(e._s(l.label))])}))],1)],1):e._e(),"multiLinkageSelector"===e.mode&&3===e.deepLength?a("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"777b84d3-7"},on:{change:e.pickerChangeMul}},[a("block",[a("picker-view-column",{attrs:{mpcomid:"777b84d3-6"}},e._l(e.pickerValueMulThreeOne,function(l,i){return a("view",{key:i,staticClass:"picker-item"},[e._v(e._s(l.label))])})),a("picker-view-column",{attrs:{mpcomid:"777b84d3-7"}},e._l(e.pickerValueMulThreeTwo,function(l,i){return a("view",{key:i,staticClass:"picker-item"},[e._v(e._s(l.label))])})),a("picker-view-column",{attrs:{mpcomid:"777b84d3-8"}},e._l(e.pickerValueMulThreeThree,function(l,i){return a("view",{key:i,staticClass:"picker-item"},[e._v(e._s(l.label))])}))],1)],1):e._e()],1)])},u=[];a.d(l,"a",function(){return i}),a.d(l,"b",function(){return u})},a93c:function(e,l,a){"use strict";a.r(l);var i=a("3974"),u=a.n(i);for(var t in i)"default"!==t&&function(e){a.d(l,e,function(){return i[e]})}(t);l["default"]=u.a},de7e:function(e,l,a){"use strict";var i=a("738d"),u=a.n(i);u.a},e73a:function(e,l,a){"use strict";a.r(l);var i=a("04c0"),u=a.n(i);for(var t in i)"default"!==t&&function(e){a.d(l,e,function(){return i[e]})}(t);l["default"]=u.a},e94f:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=[{value:11e4,label:"北京市",children:[{value:110101,label:"东城区"},{value:110102,label:"西城区"},{value:110105,label:"朝阳区"},{value:110106,label:"丰台区"},{value:110107,label:"石景山区"},{value:110108,label:"海淀区"},{value:110109,label:"门头沟区"},{value:110111,label:"房山区"},{value:110112,label:"通州区"},{value:110113,label:"顺义区"},{value:110114,label:"昌平区"},{value:110115,label:"大兴区"},{value:110116,label:"怀柔区"},{value:110117,label:"平谷区"},{value:110118,label:"密云区"},{value:110119,label:"延庆区"}]},{value:12e4,label:"天津市",children:[{value:120101,label:"和平区"},{value:120102,label:"河东区"},{value:120103,label:"河西区"},{value:120104,label:"南开区"},{value:120105,label:"河北区"},{value:120106,label:"红桥区"},{value:120110,label:"东丽区"},{value:120111,label:"西青区"},{value:120112,label:"津南区"},{value:120113,label:"北辰区"},{value:120114,label:"武清区"},{value:120115,label:"宝坻区"},{value:120116,label:"滨海新区"},{value:120117,label:"宁河区"},{value:120118,label:"静海区"},{value:120119,label:"蓟州区"}]},{value:13e4,label:"河北省",children:[{value:130100,label:"石家庄市"},{value:130200,label:"唐山市"},{value:130300,label:"秦皇岛市"},{value:130400,label:"邯郸市"},{value:130500,label:"邢台市"},{value:130600,label:"保定市"},{value:130700,label:"张家口市"},{value:130800,label:"承德市"},{value:130900,label:"沧州市"},{value:131e3,label:"廊坊市"},{value:131100,label:"衡水市"},{value:139e3,label:"省直辖县级行政区划"}]},{value:14e4,label:"山西省",children:[{value:140100,label:"太原市"},{value:140200,label:"大同市"},{value:140300,label:"阳泉市"},{value:140400,label:"长治市"},{value:140500,label:"晋城市"},{value:140600,label:"朔州市"},{value:140700,label:"晋中市"},{value:140800,label:"运城市"},{value:140900,label:"忻州市"},{value:141e3,label:"临汾市"},{value:141100,label:"吕梁市"}]},{value:15e4,label:"内蒙古自治区",children:[{value:150100,label:"呼和浩特市"},{value:150200,label:"包头市"},{value:150300,label:"乌海市"},{value:150400,label:"赤峰市"},{value:150500,label:"通辽市"},{value:150600,label:"鄂尔多斯市"},{value:150700,label:"呼伦贝尔市"},{value:150800,label:"巴彦淖尔市"},{value:150900,label:"乌兰察布市"},{value:152200,label:"兴安盟"},{value:152500,label:"锡林郭勒盟"},{value:152900,label:"阿拉善盟"}]},{value:21e4,label:"辽宁省",children:[{value:210100,label:"沈阳市"},{value:210200,label:"大连市"},{value:210300,label:"鞍山市"},{value:210400,label:"抚顺市"},{value:210500,label:"本溪市"},{value:210600,label:"丹东市"},{value:210700,label:"锦州市"},{value:210800,label:"营口市"},{value:210900,label:"阜新市"},{value:211e3,label:"辽阳市"},{value:211100,label:"盘锦市"},{value:211200,label:"铁岭市"},{value:211300,label:"朝阳市"},{value:211400,label:"葫芦岛市"}]},{value:22e4,label:"吉林省",children:[{value:220100,label:"长春市"},{value:220200,label:"吉林市"},{value:220300,label:"四平市"},{value:220400,label:"辽源市"},{value:220500,label:"通化市"},{value:220600,label:"白山市"},{value:220700,label:"松原市"},{value:220800,label:"白城市"},{value:222400,label:"延边朝鲜族自治州"}]},{value:23e4,label:"黑龙江省",children:[{value:230100,label:"哈尔滨市"},{value:230200,label:"齐齐哈尔市"},{value:230300,label:"鸡西市"},{value:230400,label:"鹤岗市"},{value:230500,label:"双鸭山市"},{value:230600,label:"大庆市"},{value:230700,label:"伊春市"},{value:230800,label:"佳木斯市"},{value:230900,label:"七台河市"},{value:231e3,label:"牡丹江市"},{value:231100,label:"黑河市"},{value:231200,label:"绥化市"},{value:232700,label:"大兴安岭地区"}]},{value:31e4,label:"上海市",children:[{value:310101,label:"黄浦区"},{value:310104,label:"徐汇区"},{value:310105,label:"长宁区"},{value:310106,label:"静安区"},{value:310107,label:"普陀区"},{value:310109,label:"虹口区"},{value:310110,label:"杨浦区"},{value:310112,label:"闵行区"},{value:310113,label:"宝山区"},{value:310114,label:"嘉定区"},{value:310115,label:"浦东新区"},{value:310116,label:"金山区"},{value:310117,label:"松江区"},{value:310118,label:"青浦区"},{value:310120,label:"奉贤区"},{value:310151,label:"崇明区"}]},{value:32e4,label:"江苏省",children:[{value:320100,label:"南京市"},{value:320200,label:"无锡市"},{value:320300,label:"徐州市"},{value:320400,label:"常州市"},{value:320500,label:"苏州市"},{value:320600,label:"南通市"},{value:320700,label:"连云港市"},{value:320800,label:"淮安市"},{value:320900,label:"盐城市"},{value:321e3,label:"扬州市"},{value:321100,label:"镇江市"},{value:321200,label:"泰州市"},{value:321300,label:"宿迁市"}]},{value:33e4,label:"浙江省",children:[{value:330100,label:"杭州市"},{value:330200,label:"宁波市"},{value:330300,label:"温州市"},{value:330400,label:"嘉兴市"},{value:330500,label:"湖州市"},{value:330600,label:"绍兴市"},{value:330700,label:"金华市"},{value:330800,label:"衢州市"},{value:330900,label:"舟山市"},{value:331e3,label:"台州市"},{value:331100,label:"丽水市"}]},{value:34e4,label:"安徽省",children:[{value:340100,label:"合肥市"},{value:340200,label:"芜湖市"},{value:340300,label:"蚌埠市"},{value:340400,label:"淮南市"},{value:340500,label:"马鞍山市"},{value:340600,label:"淮北市"},{value:340700,label:"铜陵市"},{value:340800,label:"安庆市"},{value:341e3,label:"黄山市"},{value:341100,label:"滁州市"},{value:341200,label:"阜阳市"},{value:341300,label:"宿州市"},{value:341500,label:"六安市"},{value:341600,label:"亳州市"},{value:341700,label:"池州市"},{value:341800,label:"宣城市"}]},{value:35e4,label:"福建省",children:[{value:350100,label:"福州市"},{value:350200,label:"厦门市"},{value:350300,label:"莆田市"},{value:350400,label:"三明市"},{value:350500,label:"泉州市"},{value:350600,label:"漳州市"},{value:350700,label:"南平市"},{value:350800,label:"龙岩市"},{value:350900,label:"宁德市"}]},{value:36e4,label:"江西省",children:[{value:360100,label:"南昌市"},{value:360200,label:"景德镇市"},{value:360300,label:"萍乡市"},{value:360400,label:"九江市"},{value:360500,label:"新余市"},{value:360600,label:"鹰潭市"},{value:360700,label:"赣州市"},{value:360800,label:"吉安市"},{value:360900,label:"宜春市"},{value:361e3,label:"抚州市"},{value:361100,label:"上饶市"}]},{value:37e4,label:"山东省",children:[{value:370100,label:"济南市"},{value:370200,label:"青岛市"},{value:370300,label:"淄博市"},{value:370400,label:"枣庄市"},{value:370500,label:"东营市"},{value:370600,label:"烟台市"},{value:370700,label:"潍坊市"},{value:370800,label:"济宁市"},{value:370900,label:"泰安市"},{value:371e3,label:"威海市"},{value:371100,label:"日照市"},{value:371200,label:"莱芜市"},{value:371300,label:"临沂市"},{value:371400,label:"德州市"},{value:371500,label:"聊城市"},{value:371600,label:"滨州市"},{value:371700,label:"菏泽市"}]},{value:41e4,label:"河南省",children:[{value:410100,label:"郑州市"},{value:410200,label:"开封市"},{value:410300,label:"洛阳市"},{value:410400,label:"平顶山市"},{value:410500,label:"安阳市"},{value:410600,label:"鹤壁市"},{value:410700,label:"新乡市"},{value:410800,label:"焦作市"},{value:410900,label:"濮阳市"},{value:411e3,label:"许昌市"},{value:411100,label:"漯河市"},{value:411200,label:"三门峡市"},{value:411300,label:"南阳市"},{value:411400,label:"商丘市"},{value:411500,label:"信阳市"},{value:411600,label:"周口市"},{value:411700,label:"驻马店市"},{value:419e3,label:"省直辖县级行政区划"}]},{value:42e4,label:"湖北省",children:[{value:420100,label:"武汉市"},{value:420200,label:"黄石市"},{value:420300,label:"十堰市"},{value:420500,label:"宜昌市"},{value:420600,label:"襄阳市"},{value:420700,label:"鄂州市"},{value:420800,label:"荆门市"},{value:420900,label:"孝感市"},{value:421e3,label:"荆州市"},{value:421100,label:"黄冈市"},{value:421200,label:"咸宁市"},{value:421300,label:"随州市"},{value:422800,label:"恩施土家族苗族自治州"},{value:429e3,label:"省直辖县级行政区划"}]},{value:43e4,label:"湖南省",children:[{value:430100,label:"长沙市"},{value:430200,label:"株洲市"},{value:430300,label:"湘潭市"},{value:430400,label:"衡阳市"},{value:430500,label:"邵阳市"},{value:430600,label:"岳阳市"},{value:430700,label:"常德市"},{value:430800,label:"张家界市"},{value:430900,label:"益阳市"},{value:431e3,label:"郴州市"},{value:431100,label:"永州市"},{value:431200,label:"怀化市"},{value:431300,label:"娄底市"},{value:433100,label:"湘西土家族苗族自治州"}]},{value:44e4,label:"广东省",children:[{value:440100,label:"广州市"},{value:440200,label:"韶关市"},{value:440300,label:"深圳市"},{value:440400,label:"珠海市"},{value:440500,label:"汕头市"},{value:440600,label:"佛山市"},{value:440700,label:"江门市"},{value:440800,label:"湛江市"},{value:440900,label:"茂名市"},{value:441200,label:"肇庆市"},{value:441300,label:"惠州市"},{value:441400,label:"梅州市"},{value:441500,label:"汕尾市"},{value:441600,label:"河源市"},{value:441700,label:"阳江市"},{value:441800,label:"清远市"},{value:441900,label:"东莞市"},{value:442e3,label:"中山市"},{value:445100,label:"潮州市"},{value:445200,label:"揭阳市"},{value:445300,label:"云浮市"}]},{value:45e4,label:"广西壮族自治区",children:[{value:450100,label:"南宁市"},{value:450200,label:"柳州市"},{value:450300,label:"桂林市"},{value:450400,label:"梧州市"},{value:450500,label:"北海市"},{value:450600,label:"防城港市"},{value:450700,label:"钦州市"},{value:450800,label:"贵港市"},{value:450900,label:"玉林市"},{value:451e3,label:"百色市"},{value:451100,label:"贺州市"},{value:451200,label:"河池市"},{value:451300,label:"来宾市"},{value:451400,label:"崇左市"}]},{value:46e4,label:"海南省",children:[{value:460100,label:"海口市"},{value:460200,label:"三亚市"},{value:460300,label:"三沙市"},{value:460400,label:"儋州市"},{value:469e3,label:"省直辖县级行政区划"}]},{value:5e5,label:"重庆市",children:[{value:500101,label:"万州区"},{value:500102,label:"涪陵区"},{value:500103,label:"渝中区"},{value:500104,label:"大渡口区"},{value:500105,label:"江北区"},{value:500106,label:"沙坪坝区"},{value:500107,label:"九龙坡区"},{value:500108,label:"南岸区"},{value:500109,label:"北碚区"},{value:500110,label:"綦江区"},{value:500111,label:"大足区"},{value:500112,label:"渝北区"},{value:500113,label:"巴南区"},{value:500114,label:"黔江区"},{value:500115,label:"长寿区"},{value:500116,label:"江津区"},{value:500117,label:"合川区"},{value:500118,label:"永川区"},{value:500119,label:"南川区"},{value:500120,label:"璧山区"},{value:500151,label:"铜梁区"},{value:500152,label:"潼南区"},{value:500153,label:"荣昌区"},{value:500154,label:"开州区"}]},{value:51e4,label:"四川省",children:[{value:510100,label:"成都市"},{value:510300,label:"自贡市"},{value:510400,label:"攀枝花市"},{value:510500,label:"泸州市"},{value:510600,label:"德阳市"},{value:510700,label:"绵阳市"},{value:510800,label:"广元市"},{value:510900,label:"遂宁市"},{value:511e3,label:"内江市"},{value:511100,label:"乐山市"},{value:511300,label:"南充市"},{value:511400,label:"眉山市"},{value:511500,label:"宜宾市"},{value:511600,label:"广安市"},{value:511700,label:"达州市"},{value:511800,label:"雅安市"},{value:511900,label:"巴中市"},{value:512e3,label:"资阳市"},{value:513200,label:"阿坝藏族羌族自治州"},{value:513300,label:"甘孜藏族自治州"},{value:513400,label:"凉山彝族自治州"}]},{value:52e4,label:"贵州省",children:[{value:520100,label:"贵阳市"},{value:520200,label:"六盘水市"},{value:520300,label:"遵义市"},{value:520400,label:"安顺市"},{value:520500,label:"毕节市"},{value:520600,label:"铜仁市"},{value:522300,label:"黔西南布依族苗族自治州"},{value:522600,label:"黔东南苗族侗族自治州"},{value:522700,label:"黔南布依族苗族自治州"}]},{value:53e4,label:"云南省",children:[{value:530100,label:"昆明市"},{value:530300,label:"曲靖市"},{value:530400,label:"玉溪市"},{value:530500,label:"保山市"},{value:530600,label:"昭通市"},{value:530700,label:"丽江市"},{value:530800,label:"普洱市"},{value:530900,label:"临沧市"},{value:532300,label:"楚雄彝族自治州"},{value:532500,label:"红河哈尼族彝族自治州"},{value:532600,label:"文山壮族苗族自治州"},{value:532800,label:"西双版纳傣族自治州"},{value:532900,label:"大理白族自治州"},{value:533100,label:"德宏傣族景颇族自治州"},{value:533300,label:"怒江傈僳族自治州"},{value:533400,label:"迪庆藏族自治州"}]},{value:54e4,label:"西藏自治区",children:[{value:540100,label:"拉萨市"},{value:540200,label:"日喀则市"},{value:540300,label:"昌都市"},{value:540400,label:"林芝市"},{value:540500,label:"山南市"},{value:542400,label:"那曲地区"},{value:542500,label:"阿里地区"}]},{value:61e4,label:"陕西省",children:[{value:610100,label:"西安市"},{value:610200,label:"铜川市"},{value:610300,label:"宝鸡市"},{value:610400,label:"咸阳市"},{value:610500,label:"渭南市"},{value:610600,label:"延安市"},{value:610700,label:"汉中市"},{value:610800,label:"榆林市"},{value:610900,label:"安康市"},{value:611e3,label:"商洛市"}]},{value:62e4,label:"甘肃省",children:[{value:620100,label:"兰州市"},{value:620200,label:"嘉峪关市"},{value:620300,label:"金昌市"},{value:620400,label:"白银市"},{value:620500,label:"天水市"},{value:620600,label:"武威市"},{value:620700,label:"张掖市"},{value:620800,label:"平凉市"},{value:620900,label:"酒泉市"},{value:621e3,label:"庆阳市"},{value:621100,label:"定西市"},{value:621200,label:"陇南市"},{value:622900,label:"临夏回族自治州"},{value:623e3,label:"甘南藏族自治州"}]},{value:63e4,label:"青海省",children:[{value:630100,label:"西宁市"},{value:630200,label:"海东市"},{value:632200,label:"海北藏族自治州"},{value:632300,label:"黄南藏族自治州"},{value:632500,label:"海南藏族自治州"},{value:632600,label:"果洛藏族自治州"},{value:632700,label:"玉树藏族自治州"},{value:632800,label:"海西蒙古族藏族自治州"}]},{value:64e4,label:"宁夏回族自治区",children:[{value:640100,label:"银川市"},{value:640200,label:"石嘴山市"},{value:640300,label:"吴忠市"},{value:640400,label:"固原市"},{value:640500,label:"中卫市"}]},{value:65e4,label:"新疆维吾尔自治区",children:[{value:650100,label:"乌鲁木齐市"},{value:650200,label:"克拉玛依市"},{value:650400,label:"吐鲁番市"},{value:650500,label:"哈密市"},{value:652300,label:"昌吉回族自治州"},{value:652700,label:"博尔塔拉蒙古自治州"},{value:652800,label:"巴音郭楞蒙古自治州"},{value:652900,label:"阿克苏地区"},{value:653e3,label:"克孜勒苏柯尔克孜自治州"},{value:653100,label:"喀什地区"},{value:653200,label:"和田地区"},{value:654e3,label:"伊犁哈萨克自治州"},{value:654200,label:"塔城地区"},{value:654300,label:"阿勒泰地区"},{value:659e3,label:"自治区直辖县级行政区划"}]},{value:71e4,label:"台湾省",children:[{value:"710100",label:"台北市"},{value:"710200",label:"高雄市"},{value:"710300",label:"台南市"},{value:"710400",label:"台中市"},{value:"710500",label:"金门县"},{value:"710600",label:"南投县"},{value:"710700",label:"基隆市"},{value:"710800",label:"新竹市"},{value:"710900",label:"嘉义市"},{value:"711100",label:"新北市"},{value:"711200",label:"宜兰县"},{value:"711300",label:"新竹县"},{value:"711400",label:"桃园县"},{value:"711500",label:"苗栗县"},{value:"711700",label:"彰化县"},{value:"711900",label:"嘉义县"},{value:"712100",label:"云林县"},{value:"712400",label:"屏东县"},{value:"712500",label:"台东县"},{value:"712600",label:"花莲县"},{value:"712700",label:"澎湖县"}]},{value:81e4,label:"香港特别行政区",children:[{value:"810100",label:"香港岛"},{value:"810200",label:"九龙"},{value:"810300",label:"新界"}]},{value:82e4,label:"澳门特别行政区",children:[{value:"820100",label:"澳门半岛"},{value:"820200",label:"氹仔岛"},{value:"820300",label:"路环岛"}]}];l.default=i}},[["6f5f","common/runtime","common/vendor"]]]);