(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/messages/messages"],{3007:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"contanier"},[i("view",{staticClass:"ad_box",attrs:{eventid:"80af2aa4-0"},on:{tap:function(e){t.goAdListPage()}}},[t._m(0),i("view",{staticClass:"content_wrap"},[i("view",{staticClass:"title"},[t._v("优惠活动")]),i("view",{staticClass:"content",domProps:{textContent:t._s(t.lastAd?t.lastAd.title:"暂无优惠活动")}})])]),i("wkiwi-swipe-action",{attrs:{options:t.options,messagesList:t.chatList,eventid:"80af2aa4-1",mpcomid:"80af2aa4-0"},on:{"":function(t){}}})],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"icon"},[i("text",{staticClass:"iconfont icon-huodong-"})])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"38c8":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2f62"),s=i("942f"),n=c(i("8534")),o=c(i("fcd7"));function c(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){l(t,e,i[e])})}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={components:{wkiwiSwipeAction:o.default},data:function(){return{focus:!1,isShowView:!0,options:[{text:"删除",style:{backgroundColor:"#f66",color:"#fff"}}],lastAd:null,isLoading:!1,timer:null,messages:[{title:"系统消息",url:"http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",message:"占无系统消息",time:"08:15",count:0,stick:!1,disabled:!1},{title:"优惠活动",url:"http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",message:"占无活动",time:"08:15",count:0,stick:!1,disabled:!1},{title:"马云",url:"http://img1.3lian.com/gif/more/11/201212/0d1252b54be4f2d240b6b7fe4ed35054.jpg",message:"什么鬼，我有支付宝",time:"15:15",count:5,type:"user",stick:!1,disabled:!1},{title:"马化腾",url:"http://img1.3lian.com/gif/more/11/201212/cd1d745ed855bef27f47c8aff0786067.jpg",message:"哈哈哈，我要一统江湖啦aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",time:"15:15",count:22,type:"user",stick:!1,disabled:!1},{title:"李彦宏",url:"http://img1.3lian.com/gif/more/11/201212/c011f2b2ab1a10d79fe931a786503d03.jpg",message:"抄袭我的吧，我早都做过了",time:"12:13",count:1,type:"user",stick:!1,disabled:!1},{title:"雷军",url:"http://img1.3lian.com/gif/more/11/201212/cf9d56d05c0cbc1edbf21cf64ad9c341.jpg",message:"微信给你下线，看你还嘚瑟",time:"12:11",count:0,stick:!1,disabled:!1},{title:"前端开发者",url:"http://img1.3lian.com/gif/more/11/201212/04b335ead07530a6188a27549fad1a68.jpg",message:"我们的春天来啦，哈哈哈",time:"11:35",count:0,stick:!1,disabled:!1},{title:"微信小程序",url:"http://img1.3lian.com/gif/more/11/201212/e10e8faa201671b5a2e8a6146f80d99e.jpg",message:"谁有内测资格啊啊，300万买一个",time:"08:23",count:0,stick:!1,disabled:!1},{title:"小程序",url:"http://img1.3lian.com/gif/more/11/201212/3fab6379b6ef53e7c17a1cc772eed0d6.jpg",message:"这个IDE方便都不要配置了",time:"03:21",count:5,stick:!1,disabled:!1},{title:"微信应用号开发群",url:"http://img1.3lian.com/gif/more/11/201212/8f3762fb4d791410ec970baa2641344d.jpg",message:"开发的局限性太大了",time:"03:08",count:99,stick:!1,disabled:!1},{title:"后台",url:"http://img1.3lian.com/gif/more/11/201212/411cffabcd6e4474b48f1ecac76e1b3f.jpg",message:"不看好小程序",time:"02:45",count:0,stick:!1,disabled:!1},{title:"闯天下",url:"http://img1.3lian.com/gif/more/11/201212/04378257474004fcdd62f619d724db0c.jpg",message:"微信太强大了",time:"01:09",count:0,stick:!1,disabled:!1},{title:"小程序",url:"http://img1.3lian.com/gif/more/11/201212/58ec7c89b16c529fc9d0dc440a72e14d.jpg",message:"有快来看直播啦，学习开始啦",time:"00:24",count:2,stick:!1,disabled:!1}]}},onLoad:function(){n.default.isLogin(),this.getAdList()},onShow:function(){this.timer&&(clearInterval(this.timer),this.timer=null),this.waitList(),this.reconnet()},computed:r({},(0,a.mapState)(["socketOpen","chatList","socketError","socketLoading","socketObj"])),methods:r({},(0,a.mapMutations)(["reconnectChat"]),{getAdList:function(){var t=this;t.isLoading=!0,(0,s.request)({url:"/wap/api/my.php?action=messageListAd",success:function(e){if("success"===e.data.status){var i=e.data.content;if(i.length>0){var a=i.length-1;t.lastAd=i[a]}}else n.default.layer("获取优惠活动失败")},fail:function(){n.default.layer("获取优惠活动失败")},complete:function(){t.isLoading=!1}})},goAdListPage:function(){this.isLoading||(this.lastAd?t.navigateTo({url:"/pages/messages/favorable"}):n.default.layer("暂无广告"))},reconnet:function(){var t=this;if(!t.socketLoading)return!t.socketLoading&&t.socketError?(n.default.layer("与聊天室断开,正在重连..."),void t.reconnectChat()):void 0;n.default.layer("正在重连聊天室,请稍后再试..")},waitList:function(){var t=this;t.messages=t.chatList,this.timer=setInterval(function(){t.messages=t.chatList},500)}})};e.default=u}).call(this,i("6e42")["default"])},"390d":function(t,e,i){"use strict";var a=i("f847"),s=i.n(a);s.a},"42f1":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("2f62"),s=(i("942f"),n(i("8534")));i("3c10");function n(t){return t&&t.__esModule?t:{default:t}}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){c(t,e,i[e])})}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r={name:"wkiwi-swipe-action",props:{options:Array,messagesList:Array},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,transformX:"translateX(0px)",messageIndex:-1}},created:function(){this.direction="",this.startX=0,this.startY=0,this.btnGroupWidth=0,this.isMoving=!1},onReady:function(){},computed:o({},(0,a.mapState)(["socketOpen","chatList","socketError","socketLoading","socketObj"])),methods:o({},(0,a.mapMutations)(["reconnectChat"]),{toMessageDetail:function(e){var i=JSON.stringify(e),a=this;if(!a.socketLoading)return!a.socketLoading&&a.socketError?(s.default.layer("与聊天室断开,为您重连..."),void a.reconnectChat()):void t.navigateTo({url:"/pages/messages/chat?param="+i});s.default.layer("正在重连聊天室,请稍后..")},deleteChat:function(t){var e=this,i={type:"delete",to_id:t};e.socketObj.send({data:JSON.stringify(i),success:function(t){},fail:function(t){},complete:function(t){}})},getSize:function(){this.$nextTick(function(){var e=this;t.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(t){e.btnGroupWidth=t[0]?t[0].width:60})})},bindClickBtn:function(e,i,a){var n=this,o=a.list_id;if(this.messageIndex=-1,console.log(e.text+"message第"+i+"项"),"删除"===e.text){if(n.socketLoading)return void s.default.layer("正在重连聊天室,请稍后..");if(!n.socketLoading&&n.socketError)return s.default.layer("与聊天室断开,为您重连..."),void n.reconnectChat();t.showModal({title:"删除",content:"是否删除该聊天",confirmText:"删除",success:function(t){t.confirm?n.deleteChat(o):t.cancel}})}},touchStart:function(t){this.getSize(),!0!==t.currentTarget.dataset.disabled&&(this.startX=t.touches[0].pageX,this.startY=t.touches[0].pageY)},touchMove:function(t){if("Y"!==this.direction&&!0!==t.currentTarget.dataset.disabled){var e=t.touches[0].pageY-this.startY,i=t.touches[0].pageX-this.startX;!this.isMoving&&Math.abs(e)>Math.abs(i)?this.direction="Y":(this.direction=i>0?"right":"left",this.messageIndex=i<0?t.currentTarget.dataset.index:-1,this.isMoving=!0)}else this.direction=""},touchEnd:function(t){this.isMoving=!1,"right"===this.direction||"left"===this.direction?("right"==this.direction&&(this.messageIndex=-1),this.endMove(t)):this.direction=""},endMove:function(t){"Y"!==this.direction&&!0!==t.currentTarget.dataset.disabled?(-1!==this.messageIndex?(this.transformX="translateX(".concat(-this.btnGroupWidth,"px)"),this.$emit("opened")):(this.transformX="translateX(0px)",this.$emit("closed")),this.direction=""):this.direction=""}})};e.default=r}).call(this,i("6e42")["default"])},"52f0":function(t,e,i){"use strict";i.r(e);var a=i("3007"),s=i("a571");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("390d");var o=i("2877"),c=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"eda62214",null);e["default"]=c.exports},"748a":function(t,e,i){},a38a:function(t,e,i){"use strict";i.r(e);var a=i("42f1"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},a571:function(t,e,i){"use strict";i.r(e);var a=i("38c8"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},b06f:function(t,e,i){"use strict";i("83ff");var a=n(i("b0ce")),s=n(i("52f0"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},e032:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"message-list"},t._l(t.messagesList,function(e,a){return t.messagesList.length>0?i("block",{key:a},[i("view",{staticClass:"uni-swipe-action",attrs:{eventid:"6b8d8e25-2-"+a},on:{tap:function(i){i.stopPropagation(),t.toMessageDetail(e)}}},[i("view",{staticClass:"uni-swipe-action__container",style:{transform:t.messageIndex==a?t.transformX:"translateX(0px)","-webkit-transform":t.messageIndex==a?t.transformX:"translateX(0px)"},attrs:{"data-index":a,"data-disabled":e.disabled,eventid:"6b8d8e25-1-"+a},on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd,touchcancel:t.touchEnd}},[i("view",{staticClass:"uni-swipe-action__content"},[i("view",{staticClass:"item",class:e.stick?"stick":""},[i("view",{staticClass:"item-left"},[i("image",{staticClass:"image",attrs:{src:e.url}})]),i("view",{staticClass:"item-middle"},[i("text",{staticClass:"title"},[t._v(t._s(e.title))]),i("text",{staticClass:"message",domProps:{innerHTML:t._s(e.message)}})]),i("view",{staticClass:"item-right"},[i("view",{staticClass:"time"},[t._v(t._s(e.time))]),e.count>0?i("view",{staticClass:"mark"},[t._v(t._s(e.count))]):t._e()])])]),i("view",{staticClass:"uni-swipe-action__btn-group",attrs:{id:t.elId}},t._l(t.options,function(s,n){return i("div",{key:n,staticClass:"uni-swipe-action--btn",style:{backgroundColor:s.style&&s.style.backgroundColor?s.style.backgroundColor:"#C7C6CD",color:s.style&&s.style.color?s.style.color:"#FFFFFF",fontSize:s.style&&s.style.fontSize?s.style.fontSize:"28upx"},attrs:{eventid:"6b8d8e25-0-"+a+"-"+n},on:{tap:function(i){i.stopPropagation(),t.bindClickBtn(s,n,e)}}},[t._v(t._s(s.text))])}))])])]):t._e()}))},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},ee59:function(t,e,i){"use strict";var a=i("748a"),s=i.n(a);s.a},f847:function(t,e,i){},fcd7:function(t,e,i){"use strict";i.r(e);var a=i("e032"),s=i("a38a");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("ee59");var o=i("2877"),c=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports}},[["b06f","common/runtime","common/vendor"]]]);