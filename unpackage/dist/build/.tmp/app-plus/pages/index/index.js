<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"095b":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=l(a("3141")),s=l(a("60c0")),n=a("942f"),c=l(a("8534")),o=a("3c10"),r=l(a("1a45"));function l(t){return t&&t.__esModule?t:{default:t}}var u={components:{calendar:s.default,mpvuePicker:i.default},data:function(){return{number:-1,indicatorDots:!0,autoplay:!0,interval:5e3,duration:500,shortHttp:o.shortHttp,addressName:"",addressNames:"",weather:{hasData:!1,data:[]},contentArray:null,ambitusArray:null,i:null,luId:"",city:"",cityPickerValueDefault:[0,0,1],themeColor:"#007AFF",mode:"selector",deepLength:1,pickerValueDefault:[0],pickerValueArray:[],searchCity:"位置/地名/房源",startTime:"",endTime:"",collectIndex:null,amapPlugin:null,key:"ff60afce471bf105359e78dfc05feed4"}},onLoad:function(){this.amapPlugin=new r.default.AMapWX({key:this.key}),this.collectReqList(),c.default.isLogin(),this.cityGps()},onReady:function(){this.bannerFn(),this.recommended()},onShow:function(){this.collectReqList()},methods:{onDetails:function(e){console.log("id:",e),t.navigateTo({url:"/pages/particulars/particulars?id=".concat(e)})},bannerFn:function(){t.showLoading({title:"加载中"});var e=this;t.request({url:o.shortHttp+o.banner,method:"GET",success:function(a){if("success"===a.data.status){console.log("轮播图",a),t.hideLoading();var i=a.data.content;e.contentArray=i}else t.showToast({title:a.data.errorMsg,icon:"none"})},fail:function(e){t.showToast({title:e,icon:"none"})}})},tapSelect:function(){console.warn("城市",this.city),t.navigateTo({url:"/pages/index/search_city"})},change:function(t){var e=t.choiceDate,a=t.dayCount;console.log("入住从 "+e[0].re+"  到 "+e[1].re+"  共 "+a+" 晚"),this.startTime=e[0].re,this.endTime=e[1].re},clickSelect:function(){var e=this.addressName,a=this.city;console.warn(e),t.navigateTo({url:"/pages/selecteds/selecteds?city=".concat(e,"&site=").concat(a)})},cityGps:function(){var t=this;t.amapPlugin.getRegeo({success:function(e){t.addressName=e[0].regeocodeData.addressComponent.city},fail:function(t){console.log(t)}})},tapOrientation:function(){var t=this;t.amapPlugin.getRegeo({success:function(e){t.city=e[0].name},fail:function(t){console.log(t)}})},recommended:function(){t.showLoading({title:"加载中"});var e=this;(0,n.request)({url:"/wap/api/search.php?action=index",data:{cityName:"广州"},success:function(a){t.hideLoading(),e.ambitusArray=a.data.content.item}})},clickDetails:function(e){t.navigateTo({url:"/pages/particulars/particulars?id=".concat(e)})},clickPhoto:function(e){console.log(e),t.navigateTo({url:"/pages/landlord_introduced/landlord_introduced?id=".concat(e)})},collectReqList:function(){var t=this,e=[];(0,n.request)({url:"/wap/api/my.php?action=favoriteClass",success:function(a){if("success"===a.data.status)for(var i=a.data.content.item,s=0;s<i.length;s++)e.push({label:i[s].cname,value:i[s].cid}),t.pickerValueArray=e}})},onCollect:function(e,a){if(this.pickerValueArray.length>0){var i=this;i.collectIndex=a,i.i=i.ambitusArray[a],i.luId=i.ambitusArray[a].luId;var s=i.ambitusArray[a].isFavorite;console.log("索引",s),!1===s?i.$refs.mpvuePicker.show():(0,n.request)({url:"/wap/api/my.php?action=modifyFavorite",data:{luId:i.luId,favAction:"del"},success:function(e){console.log("取消了:",e),"success"==e.data.status&&(t.showToast({title:"取消收藏",duration:2e3}),i.$set(i.ambitusArray[a],"isFavorite",!1))}})}else t.showToast({title:"请先添加收藏分组",icon:"none"})},onCancel:function(t){this.i.isFavorite=!1},onConfirm:function(e){console.log(e);for(var a,i=this,s=i.collectIndex,c=e.value,o=0;o<c.length;o++)a=c[o];(0,n.request)({url:"/wap/api/my.php?action=modifyFavorite",data:{luId:i.luId,classId:a,favAction:"add"},success:function(e){console.log("收藏：",e),"success"==e.data.status?(t.showToast({title:"收藏成功",duration:2e3}),i.$set(i.ambitusArray[s],"isFavorite",!0)):t.showToast({title:"收藏失败",duration:2e3})}})}},onBackPress:function(){if(this.$refs.mpvuePicker.showPicker)return this.$refs.mpvuePicker.pickerCancel(),!0},onPullDownRefresh:function(){console.log("refresh"),this.bannerFn(),this.recommended(),setTimeout(function(){t.stopPullDownRefresh()},2e3)}};e.default=u}).call(this,a("6e42")["default"])},"0f42":function(t,e,a){},"2b93":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticStyle:{width:"100%"}},[a("view",{staticClass:"order-time",attrs:{eventid:"17d20915-0"},on:{tap:function(e){t.showCalendar()}}},[a("view",{staticClass:"box"},[a("text",{staticClass:"iconfont goInHotel"},[t._v("")]),a("text",{staticClass:"date-wrappper"},[t._v(t._s(t.choiceDate[0].month)+"月"+t._s(t.choiceDate[0].day)+"日")]),t.choiceDate[0].year+""+t.choiceDate[0].month+t.choiceDate[0].day==t.today?a("text",{staticClass:"goInHotel2"},[t._v("今天")]):t._e(),a("text",{staticClass:"left-hotel"},[t._v("-")]),a("text",{staticClass:"date-wrappper"},[t._v(t._s(t.choiceDate[1].month)+"月"+t._s(t.choiceDate[1].day)+"日")]),t.choiceDate[t.choiceDate.length-1].year+""+t.choiceDate[t.choiceDate.length-1].month+t.choiceDate[t.choiceDate.length-1].day==t.tomorrow?a("text",{staticClass:"goInHotel2"},[t._v("明天")]):t._e()]),a("text",{staticClass:"sumCount"},[t._v(t._s(t.dayCount2))])]),a("view",{staticClass:"calendar-layer",class:t.isShow?"show":"hide",attrs:{animation:t.animationData}},[a("view",{staticClass:"layer-content choiceDate"},[a("text",{staticClass:"iconfont shanchu",attrs:{eventid:"17d20915-1"},on:{tap:t.clickClose}},[t._v("")]),a("view",{staticClass:"layer-header"},[a("view",{staticClass:"layer-close",attrs:{eventid:"17d20915-2"},on:{tap:function(e){t.hideCalendar(!1)}}}),a("text",{staticClass:"layer-title"},[t._v("选择日期")])]),a("view",{staticClass:"layer-body"},[a("view",{staticClass:"week-box"},t._l(t.weekNameArr,function(e,i){return a("text",{key:i,staticClass:"week-box-item"},[t._v(t._s(e))])})),a("scroll-view",{staticClass:"layer-list",attrs:{"scroll-y":"true"}},t._l(t.date,function(e,i){return a("view",{key:i,staticClass:"month"},[a("view",{staticClass:"month-title",style:"z-index:"+i,attrs:{id:"m-"+e[0].year+"-"+e[0].month}},[t._v(t._s(e[0].year+"年"+e[0].month+"月"))]),a("view",{staticClass:"month-content"},t._l(e,function(e,s){return a("view",{key:s,staticClass:"day",class:e.dateTime<t.today?"disabled":e.selected?"active"+(e.date==t.choiceDate[0].date?" begin":e.date==t.choiceDate[1].date?" end":""):"",style:0==s?"margin-left:"+(6==t.weeks[i]?0:t.weeks[i])*(100/7)+"%":"",attrs:{"data-index":i,"data-indexs":s,eventid:"17d20915-3-"+i+"-"+s},on:{tap:t.selectday}},[a("view",{staticClass:"day-content"},[a("text",{staticClass:"day-subject"},[t._v(t._s(e.dateTime!=t.today&&e.dateTime!=t.tomorrow&&e.dateTime!=t.afterTomorrow?e.act.subject:""))]),a("text",{staticClass:"day-txt"},[t._v(t._s(e.dateTime==t.today?"今天":e.dateTime==t.tomorrow?"明天":e.dateTime==t.afterTomorrow?"后天":e.day))]),a("text",{staticClass:"day-tip"},[t._v(t._s(e.act.tip))])]),!1===t.choice?a("view",{staticClass:"beginTip"},[t._v("请选择离店日期")]):t._e(),t.choice?a("view",{staticClass:"endTip"},[t._v(t._s(t.dayCount2))]):t._e()])}))])}))],1),a("view",{staticClass:"layer-footer"},[a("view",{staticClass:"submitBtn",attrs:{eventid:"17d20915-4"},on:{tap:t.submitbtn}},[t._v("完成")])])])])])},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},"51ec":function(t,e,a){"use strict";var i=a("f10b"),s=a.n(i);s.a},"60c0":function(t,e,a){"use strict";a.r(e);var i=a("2b93"),s=a("b6d4");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("65ef");var c=a("2877"),o=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,"0bf0499a",null);e["default"]=o.exports},"61e9":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e,a,i,s,n,c){try{var o=t[n](c),r=o.value}catch(l){return void a(l)}o.done?e(r):Promise.resolve(r).then(i,s)}function c(t){return function(){var e=this,a=arguments;return new Promise(function(i,s){var c=t.apply(e,a);function o(t){n(c,i,s,o,r,"next",t)}function r(t){n(c,i,s,o,r,"throw",t)}o(void 0)})}}var o={data:function(){return{date:[],weeks:[],dayCount:1,dayCount2:"共1晚",festival:{101:"元旦",214:"情人节",308:"妇女节",312:"植树节",315:"消费者权益日",401:"愚人节",405:"清明节",501:"劳动节",504:"青年节",512:"护士节",601:"儿童节",701:"建党节",801:"建军节",910:"教师节",928:"孔子诞辰",1001:"国庆节",1006:"老人节",1024:"联合国日",1224:"平安夜",1225:"圣诞节"},haveOrder:[],dateFlag:{},choice:"",today:0,choiceDate:[],choiceDateArr:[],tomorrow:0,afterTomorrow:0,weekNameArr:["日","一","二","三","四","五","六"],animation:null,animationData:null,curScrollTop:0,monthTitleRectList:[],fixedId:"",layerTop:0,bak_date:[],bak_weeks:[],bak_choiceDate:[],bak_choiceDateArr:[],isShow:""}},props:{beginDate:{type:String},endDate:{type:String}},components:{},onLoad:function(){this.animation=t.createAnimation({duration:400,timingFunction:"ease",delay:0}),this.dateData()},created:function(){},methods:{getLayerTop:function(){return new Promise(function(e){var a=t.createSelectorQuery().select(".layer-list");a.boundingClientRect(function(t){e(t.top)}).exec()})},getMonthTitleRectList:function(){return new Promise(function(e){var a=t.createSelectorQuery().selectAll(".month-title");a.boundingClientRect(function(t){e(t)}).exec()})},getRectList:function(){var t=c(i.default.mark(function t(){var e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.layerTop&&!(this.layerTop<0)){t.next=4;break}return t.next=3,this.getLayerTop();case 3:this.layerTop=t.sent;case 4:if(e=!0,!(this.monthTitleRectList&&this.monthTitleRectList.length>0)){t.next=13;break}if(0!=this.monthTitleRectList[0].top){t.next=11;break}return t.next=9,this.getMonthTitleRectList();case 9:this.monthTitleRectList=t.sent,e=!1;case 11:t.next=14;break;case 13:e=!1;case 14:if(0!=e){t.next=18;break}return t.next=17,this.getMonthTitleRectList();case 17:this.monthTitleRectList=t.sent;case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),showCalendar:function(){this.bak_date=JSON.parse(JSON.stringify(this.date)),this.bak_weeks=JSON.parse(JSON.stringify(this.weeks)),this.bak_choiceDate=JSON.parse(JSON.stringify(this.choiceDate)),this.bak_choiceDateArr=JSON.parse(JSON.stringify(this.choiceDateArr)),this.animation.bottom("0px").height("100%").step(),this.animationData=this.animation.export()},hideCalendar:function(t){this.animation.bottom("-100%").height("0upx").step(),this.animationData=this.animation.export(),t||(this.dateFlag={},this.choice="",this.dayCount=1,this.dayCount2="共"+this.dayCount+"晚",this.date=JSON.parse(JSON.stringify(this.bak_date)),this.weeks=JSON.parse(JSON.stringify(this.bak_weeks)),this.choiceDate=JSON.parse(JSON.stringify(this.bak_choiceDate)),this.choiceDateArr=JSON.parse(JSON.stringify(this.bak_choiceDateArr)))},setData:function(t){var e,a,i=this,s=[];Object.keys(t).forEach(function(n){s=n.split("."),e=t[n],a=i.$data,s.forEach(function(t,n){n+1==s.length?i.$set(a,t,e):a[t]||i.$set(a,t,{}),a=a[t]})})},onScroll:function(t){},dateData:function(){var t=[],e=[],a=[],i=new Date,s=(i.getTime(),i.getFullYear()),n=(i.getDay(),[]),c=i.getMonth()+1,o=i.getDate(),r=150,l=0,u=[1,2,3,4,5,6,7,8,9,10,11,12],d=[];this.today=s+"-"+c+"-"+o,this.tomorrow=s+"-"+c+"-"+(o+1),this.afterTomorrow=s+"-"+c+"-"+(o+2);for(var h=c;h<13;h++)d.push(h);for(var f=[s],v=0;v<r/365+2;v++)f.push(s+v+1);for(var p=function(t){return t%4==0&&t%100!=0||t%400==0},m=0;m<f.length;m++){var y=void 0;y=f[m]==s?d:u;for(var g=0;g<y.length;g++){a=[];var C=[31,28+p(f[m]),31,30,31,30,31,31,30,31,30,31],w=[];if(f[m]==s){for(var b=0;b<d.length;b++)w.push(C[y[b]-1]);C=w}else C=[31,28+p(f[m]),31,30,31,30,31,31,30,31,30,31];for(var _=0;_<C[g];_++){l++;var D=void 0;if(!(l<r))break;var x=_+1;x<10&&(x="0"+x);var k=y[g]+""+x,T=(f[m],y[g],this.festival[k]),A=!1,S=new Date(f[m]+"/"+y[g]+"/"+(_+1)),F=S.getTime(),L=0;if(f[m]==s&&y[g]==c){if(_+1>=o&&(D={year:f[m],month:y[g],act:{subject:T,none:A,tip:"",defaultStr:0},day:_+1,date:f[m]+""+y[g]+x,selected:L,re:f[m]+"-"+y[g]+"-"+x,dateTime:F},a.push(D),_+1==o)){var N=new Date(f[m]+"/"+y[g]+"/"+(_+1)),O=N.getDay();n.push(O)}}else if(D={year:f[m],month:y[g],act:{subject:T,none:A,tip:"",defaultStr:0},day:_+1,date:f[m]+""+y[g]+x,selected:L,re:f[m]+"-"+y[g]+"-"+x,dateTime:F},a.push(D),0==_){var P=new Date(f[m]+"/"+y[g]+"/"+(_+1)),R=P.getDay();n.push(R)}}t.push(a)}}for(var I=0;I<t.length;I++)0!=t[I].length&&e.push(t[I]);e[0][0].selected=1,e[0][0].act.tip="入住",e[0][0].act.defaultStr=1,this.choiceDate.push(e[0][0]),e[0][1]?(e[0][1].selected=1,e[0][1].act.tip="离店",e[0][1].act.defaultStr=1,this.choiceDate.push(e[0][1])):(e[1][0].selected=1,e[1][0].act.tip="离店",e[1][0].act.defaultStr=1,this.choiceDate.push(e[1][0])),this.date=e,this.weeks=n,this.choiceDate=this.choiceDate,this.choiceDateArr=this.choiceDate},selectday:function(e){var a=e.currentTarget.dataset.indexs,i=e.currentTarget.dataset.index;if(-1!=a)if(this.date[i][a].selected=1,this.date[i][a].act.tip="入住",this.dateFlag.date&&this.date[i][a].dateTime<this.dateFlag.date.dateTime){var s=this.dateFlag.index,n=this.dateFlag.indexs;this.date[s][n].selected=0,this.date[s][n].act.tip="",this.dateFlag={date:this.date[i][a],index:i,indexs:a},this.choice=!1,this.dayCount=1,this.choiceDate[0]=this.date[i][a]}else if(this.dateFlag&&this.dateFlag.date){if(this.dateFlag.index==i&&this.dateFlag.indexs==a)return;this.date[i][a].act.tip="离店";var c=this,o=c.dateFlag.date.dateTime,r=c.date[i][a].dateTime;c.choiceDateArr=[],c.choiceDateArr.push(c.dateFlag.date);var l=!1,u=[],d=0;if(this.date.forEach(function(t){t.forEach(function(t){t.dateTime>o&&t.dateTime<r&&(t.act.none&&(l=!0,u.push(t.day)),c.choiceDateArr.push(t),t.selected=1,d++)})}),c.choiceDateArr.push(c.date[i][a]),this.choiceDate[0]=c.choiceDateArr[0],this.choiceDate[1]=c.choiceDateArr[c.choiceDateArr.length-1],l){c=this;this.date.forEach(function(t){t.forEach(function(t){t.dateTime!=r?(t.act.tip="",t.selected=0):t.act.tip="入住"})}),this.dateFlag={date:c.date[i][a],index:i,indexs:a},this.choiceDate[0]=c.date[i][a],this.dayCount=1;var h="";u.forEach(function(t,e){h=e!=u.length-1?h+t+"号,":h+t+"号"}),t.showModal({title:"提示",content:"".concat(h,"无房")})}else this.dateFlag={},this.choice=!0,console.log("count",d),this.dayCount=d+1,this.dayCount2="共"+(d+1)+"晚"}else{c=this;this.date.forEach(function(t){t.forEach(function(t){t.act.defaultStr=0,t.dateTime!=c.date[i][a].dateTime?(t.selected=0,t.act.tip=""):t.act.tip="入住"})}),this.dateFlag={date:this.date[i][a],index:i,indexs:a},this.choice=!1,this.dayCount=1,this.choiceDate[0]=this.date[i][a]}},clickClose:function(){console.log("关闭"),this.hideCalendar(!0)},submitbtn:function(){this.choiceDate[0]=this.choiceDateArr[0],this.choiceDate[1]=this.choiceDateArr[this.choiceDateArr.length-1],this.dayCount2="共"+this.dayCount+"晚",this.hideCalendar(!0),this.$emit("change",{choiceDate:this.choiceDate,dayCount:this.dayCount})}}};e.default=o}).call(this,a("6e42")["default"])},"65ef":function(t,e,a){"use strict";var i=a("8a6f"),s=a.n(i);s.a},"6e7c":function(t,e,a){"use strict";var i=a("0f42"),s=a.n(i);s.a},"8a6f":function(t,e,a){},b6d4:function(t,e,a){"use strict";a.r(e);var i=a("61e9"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},b89e:function(t,e,a){"use strict";a.r(e);var i=a("ef8c"),s=a("e896");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("6e7c"),a("51ec");var c=a("2877"),o=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,"10dee6a6",null);e["default"]=o.exports},c3ca:function(t,e,a){"use strict";a("83ff");var i=n(a("b0ce")),s=n(a("b89e"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},e896:function(t,e,a){"use strict";a.r(e);var i=a("095b"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},ef8c:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"container"},[a("view",{staticClass:"uni-padding-wrap"},[a("view",{staticClass:"page-section swiper"},[a("view",{staticClass:"page-section-spacing"},[a("swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,"indicator-color":"#EBEDF3","indicator-active-color":"#E9516A"}},t._l(t.contentArray,function(e,i){return a("swiper-item",{key:i,attrs:{eventid:"b34181ec-0-"+i,mpcomid:"b34181ec-0-"+i},on:{tap:function(a){t.onDetails(e.luid)}}},[a("image",{staticClass:"banner",attrs:{src:t.shortHttp+e.mainimageurl}})])}))],1)])])]),a("view",{staticClass:"containers"},[a("view",{staticClass:"box"},[a("view",{staticClass:"location"},[a("view",{staticClass:"list-box"},[a("i",{staticClass:"iconfont icon-city"},[t._v("")]),a("text",{staticClass:"city"},[t._v(t._s(t.addressName))])],1),a("view",{staticClass:"list-box",attrs:{eventid:"b34181ec-1"},on:{tap:t.tapOrientation}},[a("i",{staticClass:"iconfont icon-place"},[t._v("")]),a("text",{staticClass:"my-place"},[t._v(t._s(""===t.city?"民宿":"我的附近"))])],1)]),a("view",{staticClass:"calendar"},[a("calendar",{ref:"calen",attrs:{eventid:"b34181ec-2",mpcomid:"b34181ec-1"},on:{change:t.change}})],1),a("view",{staticClass:"search",attrs:{eventid:"b34181ec-3"},on:{tap:t.tapSelect}},[a("view",{staticClass:"list-box"},[a("i",{staticClass:"iconfont icon-city"},[t._v("")]),a("text",{staticClass:"city"},[t._v(t._s(""===t.city?t.searchCity:t.city))])],1),a("view",[a("i",{staticClass:"iconfont right"},[t._v("")])],1)]),a("button",{staticClass:"btn",attrs:{type:"primary",eventid:"b34181ec-4"},on:{tap:t.clickSelect}},[t._v("开始搜索")])],1)]),a("view",{staticClass:"circum-box"},[t._m(0),a("view",{staticClass:"subtitle"},[t._v("体验不一样的旅行方式")]),t._l(t.ambitusArray,function(e,i){return a("view",{key:i,staticClass:"recommend-box"},[a("view",{staticClass:"list-box"},[a("image",{staticClass:"list-img",attrs:{src:t.shortHttp+e.landlordheadimgurl,eventid:"b34181ec-5-"+i},on:{tap:function(a){t.clickDetails(e.luId)}}}),a("view",{staticClass:"username-box"},[a("view",{staticClass:"username-img-box",attrs:{eventid:"b34181ec-6-"+i},on:{tap:function(a){t.clickPhoto(e.landlordId)}}},[a("image",{staticClass:"username-img",attrs:{src:t.shortHttp+e.luMainImageUrl}})]),a("view",{staticClass:"username-title-box"},[a("view",{staticClass:"username-house-title"},[t._v(t._s(e.luTitle))]),a("view",{staticClass:"comment"},[a("view",{staticClass:"lightning-box"},[a("i",{staticClass:"iconfont  lightning-icon"},[t._v("")]),a("text",[t._v("速顶")])],1),a("view",{staticClass:"comment-on-box"},[a("i",{staticClass:"iconfont comment-on-icon"},[t._v("")]),a("text",[t._v(t._s(e.luComments)+"条点评")])],1)])])]),a("view",{staticClass:"price"},[t._v("¥"),a("text",{staticClass:"specific-price"},[t._v(t._s(e.showPrice.price))]),t._v("起/晚")]),a("view",{staticClass:"icon-box",attrs:{eventid:"b34181ec-7-"+i},on:{tap:function(a){t.onCollect(e.luId,i)}}},[a("i",{staticClass:"iconfont",class:e.isFavorite?"love-icon-red":"love-icon"},[t._v("")])],1)])])})],2),a("mpvue-picker",{ref:"mpvuePicker",attrs:{themeColor:t.themeColor,mode:t.mode,deepLength:t.deepLength,pickerValueDefault:t.pickerValueDefault,pickerValueArray:t.pickerValueArray,eventid:"b34181ec-8",mpcomid:"b34181ec-2"},on:{onConfirm:t.onConfirm,onCancel:function(e){t.onCancel()}}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"title-box"},[a("view",{staticClass:" line-left"}),a("text",{staticClass:"title-font"},[t._v("周边推荐")]),a("view",{staticClass:"line-right"})])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},f10b:function(t,e,a){}},[["c3ca","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"170d":function(t,e,a){"use strict";var i=a("3272"),s=a.n(i);s.a},"1ab6":function(t,e,a){"use strict";a.r(e);var i=a("24e0"),s=a("8714");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("24e3"),a("4d23");var c=a("2877"),o=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,"0081ef55",null);e["default"]=o.exports},"24e0":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"container"},[a("view",{staticClass:"uni-padding-wrap"},[a("view",{staticClass:"page-section swiper"},[a("view",{staticClass:"page-section-spacing"},[a("swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,"indicator-color":"#EBEDF3","indicator-active-color":"#E9516A"}},t._l(t.contentArray,function(e,i){return a("swiper-item",{key:i,attrs:{eventid:"01e9dcb6-0-"+i,mpcomid:"01e9dcb6-0-"+i},on:{tap:function(a){t.onDetails(e.luid)}}},[a("image",{staticClass:"banner",attrs:{src:t.shortHttp+e.mainimageurl}})])}))],1)])])]),a("view",{staticClass:"containers"},[a("view",{staticClass:"box"},[a("view",{staticClass:"location"},[a("view",{staticClass:"list-box"},[a("i",{staticClass:"iconfont icon-city"},[t._v("")]),a("text",{staticClass:"city"},[t._v(t._s(t.addressName))])],1),a("view",{staticClass:"list-box",attrs:{eventid:"01e9dcb6-1"},on:{tap:t.tapOrientation}},[a("i",{staticClass:"iconfont icon-place"},[t._v("")]),a("text",{staticClass:"my-place"},[t._v(t._s(""===t.city?"民宿":"我的附近"))])],1)]),a("view",{staticClass:"calendar"},[a("calendar",{ref:"calen",attrs:{eventid:"01e9dcb6-2",mpcomid:"01e9dcb6-1"},on:{change:t.change}})],1),a("view",{staticClass:"search",attrs:{eventid:"01e9dcb6-3"},on:{tap:t.tapSelect}},[a("view",{staticClass:"list-box"},[a("i",{staticClass:"iconfont icon-city"},[t._v("")]),a("text",{staticClass:"city"},[t._v(t._s(""===t.city?t.searchCity:t.city))])],1),a("view",[a("i",{staticClass:"iconfont right"},[t._v("")])],1)]),a("button",{staticClass:"btn",attrs:{type:"primary",eventid:"01e9dcb6-4"},on:{tap:t.clickSelect}},[t._v("开始搜索")])],1)]),a("view",{staticClass:"circum-box"},[t._m(0),a("view",{staticClass:"subtitle"},[t._v("体验不一样的旅行方式")]),t._l(t.ambitusArray,function(e,i){return a("view",{key:i,staticClass:"recommend-box"},[a("view",{staticClass:"list-box"},[a("image",{staticClass:"list-img",attrs:{src:t.shortHttp+e.landlordheadimgurl,eventid:"01e9dcb6-5-"+i},on:{tap:function(a){t.clickDetails(e.luId)}}}),a("view",{staticClass:"username-box"},[a("view",{staticClass:"username-img-box",attrs:{eventid:"01e9dcb6-6-"+i},on:{tap:function(a){t.clickPhoto(e.landlordId)}}},[a("image",{staticClass:"username-img",attrs:{src:t.shortHttp+e.luMainImageUrl}})]),a("view",{staticClass:"username-title-box"},[a("view",{staticClass:"username-house-title"},[t._v(t._s(e.luTitle))]),a("view",{staticClass:"comment"},[a("view",{staticClass:"lightning-box"},[a("i",{staticClass:"iconfont  lightning-icon"},[t._v("")]),a("text",[t._v("速顶")])],1),a("view",{staticClass:"comment-on-box"},[a("i",{staticClass:"iconfont comment-on-icon"},[t._v("")]),a("text",[t._v(t._s(e.luComments)+"条点评")])],1)])])]),a("view",{staticClass:"price"},[t._v("¥"),a("text",{staticClass:"specific-price"},[t._v(t._s(e.showPrice.price))]),t._v("起/晚")]),a("view",{staticClass:"icon-box",attrs:{eventid:"01e9dcb6-7-"+i},on:{tap:function(a){t.onCollect(e.luId,i)}}},[a("i",{staticClass:"iconfont",class:e.isFavorite?"love-icon-red":"love-icon"},[t._v("")])],1)])])})],2),a("mpvue-picker",{ref:"mpvuePicker",attrs:{themeColor:t.themeColor,mode:t.mode,deepLength:t.deepLength,pickerValueDefault:t.pickerValueDefault,pickerValueArray:t.pickerValueArray,eventid:"01e9dcb6-8",mpcomid:"01e9dcb6-2"},on:{onConfirm:t.onConfirm,onCancel:function(e){t.onCancel()}}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"title-box"},[a("view",{staticClass:" line-left"}),a("text",{staticClass:"title-font"},[t._v("周边推荐")]),a("view",{staticClass:"line-right"})])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},"24e3":function(t,e,a){"use strict";var i=a("d6a1"),s=a.n(i);s.a},"27ae":function(t,e,a){"use strict";a.r(e);var i=a("64dd"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},"2fdf":function(t,e,a){"use strict";a("fd37");var i=n(a("b0ce")),s=n(a("1ab6"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},3272:function(t,e,a){},"3fa2":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=l(a("57e8")),s=l(a("d408")),n=a("ad14"),c=l(a("57ad")),o=a("a1f6"),r=l(a("62a8"));function l(t){return t&&t.__esModule?t:{default:t}}var d={components:{calendar:s.default,mpvuePicker:i.default},data:function(){return{number:-1,indicatorDots:!0,autoplay:!0,interval:5e3,duration:500,shortHttp:o.shortHttp,addressName:"",addressNames:"",weather:{hasData:!1,data:[]},contentArray:null,ambitusArray:null,i:null,luId:"",city:"",cityPickerValueDefault:[0,0,1],themeColor:"#007AFF",mode:"selector",deepLength:1,pickerValueDefault:[0],pickerValueArray:[],searchCity:"位置/地名/房源",startTime:"",endTime:"",collectIndex:null,amapPlugin:null,key:"ff60afce471bf105359e78dfc05feed4"}},onLoad:function(){this.amapPlugin=new r.default.AMapWX({key:this.key}),this.collectReqList(),c.default.isLogin(),this.cityGps()},onReady:function(){this.bannerFn(),this.recommended(),console.log("开始时间",this.$store.state.startTime)},onShow:function(){this.collectReqList()},methods:{onDetails:function(e){console.log("id:",e),t.navigateTo({url:"/pages/particulars/particulars?id=".concat(e)})},bannerFn:function(){t.showLoading({title:"加载中"});var e=this;t.request({url:o.shortHttp+o.banner,method:"GET",success:function(a){if("success"===a.data.status){console.log("轮播图",a),t.hideLoading();var i=a.data.content;e.contentArray=i}else t.showToast({title:a.data.errorMsg,icon:"none"})},fail:function(e){t.showToast({title:e,icon:"none"})}})},tapSelect:function(){t.navigateTo({url:"/pages/index/search_city?city=".concat(this.addressName)})},change:function(t){var e=t.choiceDate,a=t.dayCount;console.log("入住从 "+e[0].re+"  到 "+e[1].re+"  共 "+a+" 晚"),this.startTime=e[0].re,this.endTime=e[1].re},clickSelect:function(){var e=this.addressName,a=this.city;console.warn(e),t.navigateTo({url:"/pages/selecteds/selecteds?mold=index&city=".concat(e,"&site=").concat(a)})},cityGps:function(){var e=this;e.amapPlugin.getRegeo({success:function(t){var a=t[0].regeocodeData.addressComponent.city;e.addressName=a.substr(0,a.length-1)},fail:function(e){JSON.stringify(e);t.showToast({title:e.errMsg,icon:"none"})}})},tapOrientation:function(){t.showLoading({title:"获取定位中"});var e=this;e.amapPlugin.getRegeo({success:function(a){t.hideLoading(),e.city=a[0].name},fail:function(e){t.showToast({title:e.errMsg,icon:"none"})}})},recommended:function(){t.showLoading({title:"加载中"});var e=this;(0,n.request)({url:"/wap/api/search.php?action=index",data:{cityName:"广州"},success:function(a){t.hideLoading(),e.ambitusArray=a.data.content.item}})},clickDetails:function(e){t.navigateTo({url:"/pages/particulars/particulars?id=".concat(e)})},clickPhoto:function(e){console.log(e),t.navigateTo({url:"/pages/landlord_introduced/landlord_introduced?id=".concat(e)})},collectReqList:function(){var t=this,e=[];(0,n.request)({url:"/wap/api/my.php?action=favoriteClass",success:function(a){if("success"===a.data.status)for(var i=a.data.content.item,s=0;s<i.length;s++)e.push({label:i[s].cname,value:i[s].cid}),t.pickerValueArray=e}})},onCollect:function(e,a){if(this.pickerValueArray.length>0){var i=this;i.collectIndex=a,i.i=i.ambitusArray[a],i.luId=i.ambitusArray[a].luId;var s=i.ambitusArray[a].isFavorite;console.log("索引",s),!1===s?i.$refs.mpvuePicker.show():(0,n.request)({url:"/wap/api/my.php?action=modifyFavorite",data:{luId:i.luId,favAction:"del"},success:function(e){console.log("取消了:",e),"success"==e.data.status&&(t.showToast({title:"取消收藏",duration:2e3}),i.$set(i.ambitusArray[a],"isFavorite",!1))}})}else t.showToast({title:"请先添加收藏分组",icon:"none"})},onCancel:function(t){this.i.isFavorite=!1},onConfirm:function(e){console.log(e);for(var a,i=this,s=i.collectIndex,c=e.value,o=0;o<c.length;o++)a=c[o];(0,n.request)({url:"/wap/api/my.php?action=modifyFavorite",data:{luId:i.luId,classId:a,favAction:"add"},success:function(e){console.log("收藏：",e),"success"==e.data.status?(t.showToast({title:"收藏成功",duration:2e3}),i.$set(i.ambitusArray[s],"isFavorite",!0)):t.showToast({title:"收藏失败",duration:2e3})}})}},onBackPress:function(){if(this.$refs.mpvuePicker.showPicker)return this.$refs.mpvuePicker.pickerCancel(),!0},onPullDownRefresh:function(){console.log("refresh"),this.bannerFn(),this.recommended(),setTimeout(function(){t.stopPullDownRefresh()},2e3)}};e.default=d}).call(this,a("6e42")["default"])},"4d23":function(t,e,a){"use strict";var i=a("67e3"),s=a.n(i);s.a},"64dd":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e,a,i,s,n,c){try{var o=t[n](c),r=o.value}catch(l){return void a(l)}o.done?e(r):Promise.resolve(r).then(i,s)}function c(t){return function(){var e=this,a=arguments;return new Promise(function(i,s){var c=t.apply(e,a);function o(t){n(c,i,s,o,r,"next",t)}function r(t){n(c,i,s,o,r,"throw",t)}o(void 0)})}}var o={data:function(){return{date:[],weeks:[],dayCount:1,dayCount2:"共1晚",festival:{101:"元旦",214:"情人节",308:"妇女节",312:"植树节",315:"消费者权益日",401:"愚人节",405:"清明节",501:"劳动节",504:"青年节",512:"护士节",601:"儿童节",701:"建党节",801:"建军节",910:"教师节",928:"孔子诞辰",1001:"国庆节",1006:"老人节",1024:"联合国日",1224:"平安夜",1225:"圣诞节"},haveOrder:[],dateFlag:{},choice:"",today:0,choiceDate:[],choiceDateArr:[],tomorrow:0,afterTomorrow:0,weekNameArr:["日","一","二","三","四","五","六"],animation:null,animationData:null,curScrollTop:0,monthTitleRectList:[],fixedId:"",layerTop:0,bak_date:[],bak_weeks:[],bak_choiceDate:[],bak_choiceDateArr:[],isShow:""}},props:{beginDate:{type:String},endDate:{type:String}},components:{},onLoad:function(){this.animation=t.createAnimation({duration:400,timingFunction:"ease",delay:0}),this.dateData()},created:function(){},methods:{getLayerTop:function(){return new Promise(function(e){var a=t.createSelectorQuery().select(".layer-list");a.boundingClientRect(function(t){e(t.top)}).exec()})},getMonthTitleRectList:function(){return new Promise(function(e){var a=t.createSelectorQuery().selectAll(".month-title");a.boundingClientRect(function(t){e(t)}).exec()})},getRectList:function(){var t=c(i.default.mark(function t(){var e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.layerTop&&!(this.layerTop<0)){t.next=4;break}return t.next=3,this.getLayerTop();case 3:this.layerTop=t.sent;case 4:if(e=!0,!(this.monthTitleRectList&&this.monthTitleRectList.length>0)){t.next=13;break}if(0!=this.monthTitleRectList[0].top){t.next=11;break}return t.next=9,this.getMonthTitleRectList();case 9:this.monthTitleRectList=t.sent,e=!1;case 11:t.next=14;break;case 13:e=!1;case 14:if(0!=e){t.next=18;break}return t.next=17,this.getMonthTitleRectList();case 17:this.monthTitleRectList=t.sent;case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),showCalendar:function(){this.bak_date=JSON.parse(JSON.stringify(this.date)),this.bak_weeks=JSON.parse(JSON.stringify(this.weeks)),this.bak_choiceDate=JSON.parse(JSON.stringify(this.choiceDate)),this.bak_choiceDateArr=JSON.parse(JSON.stringify(this.choiceDateArr)),this.animation.bottom("0px").height("100%").step(),this.animationData=this.animation.export()},hideCalendar:function(t){this.animation.bottom("-100%").height("0upx").step(),this.animationData=this.animation.export(),t||(this.dateFlag={},this.choice="",this.dayCount=1,this.dayCount2="共"+this.dayCount+"晚",this.date=JSON.parse(JSON.stringify(this.bak_date)),this.weeks=JSON.parse(JSON.stringify(this.bak_weeks)),this.choiceDate=JSON.parse(JSON.stringify(this.bak_choiceDate)),this.choiceDateArr=JSON.parse(JSON.stringify(this.bak_choiceDateArr)))},setData:function(t){var e,a,i=this,s=[];Object.keys(t).forEach(function(n){s=n.split("."),e=t[n],a=i.$data,s.forEach(function(t,n){n+1==s.length?i.$set(a,t,e):a[t]||i.$set(a,t,{}),a=a[t]})})},onScroll:function(t){},dateData:function(){var t=[],e=[],a=[],i=new Date,s=(i.getTime(),i.getFullYear()),n=(i.getDay(),[]),c=i.getMonth()+1,o=i.getDate(),r=150,l=0,d=[1,2,3,4,5,6,7,8,9,10,11,12],u=[];this.today=s+"-"+c+"-"+o,this.tomorrow=s+"-"+c+"-"+(o+1),this.afterTomorrow=s+"-"+c+"-"+(o+2);for(var h=c;h<13;h++)u.push(h);for(var f=[s],v=0;v<r/365+2;v++)f.push(s+v+1);for(var m=function(t){return t%4==0&&t%100!=0||t%400==0},p=0;p<f.length;p++){var y=void 0;y=f[p]==s?u:d;for(var g=0;g<y.length;g++){a=[];var w=[31,28+m(f[p]),31,30,31,30,31,31,30,31,30,31],C=[];if(f[p]==s){for(var b=0;b<u.length;b++)C.push(w[y[b]-1]);w=C}else w=[31,28+m(f[p]),31,30,31,30,31,31,30,31,30,31];for(var _=0;_<w[g];_++){l++;var D=void 0;if(!(l<r))break;var x=_+1;x<10&&(x="0"+x);var k=y[g]+""+x,T=(f[p],y[g],this.festival[k]),A=!1,S=new Date(f[p]+"/"+y[g]+"/"+(_+1)),F=S.getTime(),L=0;if(f[p]==s&&y[g]==c){if(_+1>=o&&(D={year:f[p],month:y[g],act:{subject:T,none:A,tip:"",defaultStr:0},day:_+1,date:f[p]+""+y[g]+x,selected:L,re:f[p]+"-"+y[g]+"-"+x,dateTime:F},a.push(D),_+1==o)){var N=new Date(f[p]+"/"+y[g]+"/"+(_+1)),O=N.getDay();n.push(O)}}else if(D={year:f[p],month:y[g],act:{subject:T,none:A,tip:"",defaultStr:0},day:_+1,date:f[p]+""+y[g]+x,selected:L,re:f[p]+"-"+y[g]+"-"+x,dateTime:F},a.push(D),0==_){var P=new Date(f[p]+"/"+y[g]+"/"+(_+1)),R=P.getDay();n.push(R)}}t.push(a)}}for(var I=0;I<t.length;I++)0!=t[I].length&&e.push(t[I]);e[0][0].selected=1,e[0][0].act.tip="入住",e[0][0].act.defaultStr=1,this.choiceDate.push(e[0][0]),e[0][1]?(e[0][1].selected=1,e[0][1].act.tip="离店",e[0][1].act.defaultStr=1,this.choiceDate.push(e[0][1])):(e[1][0].selected=1,e[1][0].act.tip="离店",e[1][0].act.defaultStr=1,this.choiceDate.push(e[1][0]));var J=this.today,E=this.tomorrow;this.date=e,this.weeks=n,this.choiceDate=this.choiceDate,this.choiceDateArr=this.choiceDate,this.$store.commit("startTimeStatus",J),this.$store.commit("endTimeStatus",E)},selectday:function(e){var a=e.currentTarget.dataset.indexs,i=e.currentTarget.dataset.index;if(-1!=a)if(this.date[i][a].selected=1,this.date[i][a].act.tip="入住",this.dateFlag.date&&this.date[i][a].dateTime<this.dateFlag.date.dateTime){var s=this.dateFlag.index,n=this.dateFlag.indexs;this.date[s][n].selected=0,this.date[s][n].act.tip="",this.dateFlag={date:this.date[i][a],index:i,indexs:a},this.choice=!1,this.dayCount=1,this.choiceDate[0]=this.date[i][a]}else if(this.dateFlag&&this.dateFlag.date){if(this.dateFlag.index==i&&this.dateFlag.indexs==a)return;this.date[i][a].act.tip="离店";var c=this,o=c.dateFlag.date.dateTime,r=c.date[i][a].dateTime;c.choiceDateArr=[],c.choiceDateArr.push(c.dateFlag.date);var l=!1,d=[],u=0;if(this.date.forEach(function(t){t.forEach(function(t){t.dateTime>o&&t.dateTime<r&&(t.act.none&&(l=!0,d.push(t.day)),c.choiceDateArr.push(t),t.selected=1,u++)})}),c.choiceDateArr.push(c.date[i][a]),this.choiceDate[0]=c.choiceDateArr[0],this.choiceDate[1]=c.choiceDateArr[c.choiceDateArr.length-1],l){c=this;this.date.forEach(function(t){t.forEach(function(t){t.dateTime!=r?(t.act.tip="",t.selected=0):t.act.tip="入住"})}),this.dateFlag={date:c.date[i][a],index:i,indexs:a},this.choiceDate[0]=c.date[i][a],this.dayCount=1;var h="";d.forEach(function(t,e){h=e!=d.length-1?h+t+"号,":h+t+"号"}),t.showModal({title:"提示",content:"".concat(h,"无房")})}else this.dateFlag={},this.choice=!0,console.log("count",u),this.dayCount=u+1,this.dayCount2="共"+(u+1)+"晚"}else{c=this;this.date.forEach(function(t){t.forEach(function(t){t.act.defaultStr=0,t.dateTime!=c.date[i][a].dateTime?(t.selected=0,t.act.tip=""):t.act.tip="入住"})}),this.dateFlag={date:this.date[i][a],index:i,indexs:a},this.choice=!1,this.dayCount=1,this.choiceDate[0]=this.date[i][a]}},clickClose:function(){console.log("关闭"),this.hideCalendar(!0)},submitbtn:function(){this.choiceDate[0]=this.choiceDateArr[0],this.choiceDate[1]=this.choiceDateArr[this.choiceDateArr.length-1],this.dayCount2="共"+this.dayCount+"晚",this.hideCalendar(!0),this.$emit("change",{choiceDate:this.choiceDate,dayCount:this.dayCount})}}};e.default=o}).call(this,a("6e42")["default"])},"67e3":function(t,e,a){},8714:function(t,e,a){"use strict";a.r(e);var i=a("3fa2"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},bb18:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticStyle:{width:"100%"}},[a("view",{staticClass:"order-time",attrs:{eventid:"0aeb781a-0"},on:{tap:function(e){t.showCalendar()}}},[a("view",{staticClass:"box"},[a("text",{staticClass:"iconfont goInHotel"},[t._v("")]),a("text",{staticClass:"date-wrappper"},[t._v(t._s(t.choiceDate[0].month)+"月"+t._s(t.choiceDate[0].day)+"日")]),t.choiceDate[0].year+""+t.choiceDate[0].month+t.choiceDate[0].day==t.today?a("text",{staticClass:"goInHotel2"},[t._v("今天")]):t._e(),a("text",{staticClass:"left-hotel"},[t._v("-")]),a("text",{staticClass:"date-wrappper"},[t._v(t._s(t.choiceDate[1].month)+"月"+t._s(t.choiceDate[1].day)+"日")]),t.choiceDate[t.choiceDate.length-1].year+""+t.choiceDate[t.choiceDate.length-1].month+t.choiceDate[t.choiceDate.length-1].day==t.tomorrow?a("text",{staticClass:"goInHotel2"},[t._v("明天")]):t._e()]),a("text",{staticClass:"sumCount"},[t._v(t._s(t.dayCount2))])]),a("view",{staticClass:"calendar-layer",class:t.isShow?"show":"hide",attrs:{animation:t.animationData}},[a("view",{staticClass:"layer-content choiceDate"},[a("text",{staticClass:"iconfont shanchu",attrs:{eventid:"0aeb781a-1"},on:{tap:t.clickClose}},[t._v("")]),a("view",{staticClass:"layer-header"},[a("view",{staticClass:"layer-close",attrs:{eventid:"0aeb781a-2"},on:{tap:function(e){t.hideCalendar(!1)}}}),a("text",{staticClass:"layer-title"},[t._v("选择日期")])]),a("view",{staticClass:"layer-body"},[a("view",{staticClass:"week-box"},t._l(t.weekNameArr,function(e,i){return a("text",{key:i,staticClass:"week-box-item"},[t._v(t._s(e))])})),a("scroll-view",{staticClass:"layer-list",attrs:{"scroll-y":"true"}},t._l(t.date,function(e,i){return a("view",{key:i,staticClass:"month"},[a("view",{staticClass:"month-title",style:"z-index:"+i,attrs:{id:"m-"+e[0].year+"-"+e[0].month}},[t._v(t._s(e[0].year+"年"+e[0].month+"月"))]),a("view",{staticClass:"month-content"},t._l(e,function(e,s){return a("view",{key:s,staticClass:"day",class:e.dateTime<t.today?"disabled":e.selected?"active"+(e.date==t.choiceDate[0].date?" begin":e.date==t.choiceDate[1].date?" end":""):"",style:0==s?"margin-left:"+(6==t.weeks[i]?0:t.weeks[i])*(100/7)+"%":"",attrs:{"data-index":i,"data-indexs":s,eventid:"0aeb781a-3-"+i+"-"+s},on:{tap:t.selectday}},[a("view",{staticClass:"day-content"},[a("text",{staticClass:"day-subject"},[t._v(t._s(e.dateTime!=t.today&&e.dateTime!=t.tomorrow&&e.dateTime!=t.afterTomorrow?e.act.subject:""))]),a("text",{staticClass:"day-txt"},[t._v(t._s(e.dateTime==t.today?"今天":e.dateTime==t.tomorrow?"明天":e.dateTime==t.afterTomorrow?"后天":e.day))]),a("text",{staticClass:"day-tip"},[t._v(t._s(e.act.tip))])]),!1===t.choice?a("view",{staticClass:"beginTip"},[t._v("请选择离店日期")]):t._e(),t.choice?a("view",{staticClass:"endTip"},[t._v(t._s(t.dayCount2))]):t._e()])}))])}))],1),a("view",{staticClass:"layer-footer"},[a("view",{staticClass:"submitBtn",attrs:{eventid:"0aeb781a-4"},on:{tap:t.submitbtn}},[t._v("完成")])])])])])},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},d408:function(t,e,a){"use strict";a.r(e);var i=a("bb18"),s=a("27ae");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("170d");var c=a("2877"),o=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,"5a4737d0",null);e["default"]=o.exports},d6a1:function(t,e,a){}},[["2fdf","common/runtime","common/vendor"]]]);
>>>>>>> 85e1bcbd5b462704f06f21f14baf4250ed2ccd4b
