(function(t){function e(e){for(var n,i,l=e[0],A=e[1],c=e[2],u=0,y=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&y.push(s[i][0]),s[i]=0;for(n in A)Object.prototype.hasOwnProperty.call(A,n)&&(t[n]=A[n]);o&&o(e);while(y.length)y.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var A=a[l];0!==s[A]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],A=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var o=A;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"06ff":function(t,e,a){t.exports=a.p+"img/myCard.4ac24b9c.png"},"1bfa":function(t,e,a){},3698:function(t,e,a){t.exports=a.p+"img/deckList.68018164.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("14c6"),a("08c1"),a("4842"),a("d9fc");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i={name:"app",components:{}},l=i,A=(a("034f"),a("2877")),c=Object(A["a"])(l,s,r,!1,null,null,null),o=c.exports,u=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-page"},[a("div",{staticClass:"header-warpper"},[a("TitleBar")],1),a("div",{staticClass:"content-wrapper"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)])},p=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-bar"},[a("div",{staticClass:"container"},[a("h1",[a("a",{attrs:{href:"/"}},[a("img",{staticClass:"logo",attrs:{width:"146",height:"38",src:t.logoUrl}})])]),a("el-menu",{staticClass:"menu",attrs:{"default-active":t.$route.name,mode:"horizontal","active-text-color":"#409EFF"},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"home"}},[t._v("首页")]),a("el-menu-item",{attrs:{index:"changelog"}},[t._v("更新记录")]),a("el-menu-item",{attrs:{index:"download"}},[t._v("下载")]),a("el-menu-item",{attrs:{index:"about"}},[t._v("Github")])],1)],1)])},m=[],v=a("cf05"),f=a.n(v),h={name:"TitleBar",data:function(){return{logoUrl:f.a}},methods:{handleSelect:function(t){this.$router.push({name:t})}},created:function(){}},g=h,w=(a("f94d"),Object(A["a"])(g,d,m,!1,null,null,null)),b=w.exports,C={name:"home",components:{TitleBar:b}},_=C,M=(a("f927"),Object(A["a"])(_,y,p,!1,null,null,null)),x=M.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"home"},[a("div",{staticClass:"home-header"},[a("el-row",[a("el-col",{attrs:{span:10}},[a("h1",[t._v("Mius")]),a("p",[t._v("\n            一个简单的Ygopro大厅客户端，集成多个服务器\n          ")]),a("div",{staticClass:"download-btn"},[a("router-link",{staticClass:"btn",attrs:{to:"/download"}},[a("i",{staticClass:"el-icon-download"}),t._v("下载应用")])],1),a("p",{staticClass:"version-info"},[t._v("当前版本v1.1.5于2019年11月6日发布\n          ")])]),a("el-col",{attrs:{span:14}},[a("img",{staticClass:"screen",attrs:{alt:"Mius",src:t.miusUrl}})])],1)],1),a("div",{staticClass:"server"},[t._m(0),a("div",{staticClass:"text-center"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("h4",[t._v("YGOPro Koishi服")])]),a("el-col",{attrs:{span:6}},[a("h4",[t._v("YGOPro 222DIY服")])]),a("el-col",{attrs:{span:6}},[a("h4",[t._v("萌卡MyCard")])]),a("el-col",{attrs:{span:6}},[a("h4",[t._v("YGOPro 1311服")])])],1)],1)]),a("div",{staticClass:"features"},[t._m(1),a("div",{staticClass:"list text-center"},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:6}},[a("img",{staticClass:"screen",attrs:{alt:"Mius",src:t.miusUrl}}),a("h4",[t._v("服务器房间信息")]),a("p",[t._v("Mius 可以显示服务器上等待玩家加入和决斗中的房间列表")])]),a("el-col",{attrs:{span:6}},[a("img",{staticClass:"screen",attrs:{alt:"Mius",src:t.deckListUrl}}),a("h4",[t._v("卡组列表")]),a("p",[t._v("Mius 可以显示和编辑本地的卡组列表")])]),a("el-col",{attrs:{span:6}},[a("img",{staticClass:"screen",attrs:{alt:"Mius",src:t.myCardUrl}}),a("h4",[t._v("MyCard")]),a("p",[t._v("Mius 可以使用MyCard账号查看竞技排位成绩和竞技场决斗记录以及进行竞技匹配、娱乐匹配、自定义游戏、观战等操作")])])],1)],1)])])])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title text-center"},[a("h1",[a("span",[t._v("服务器列表")])]),a("p",[t._v("Mius 可以使用的服务器列表")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title text-center"},[a("h1",[a("span",[t._v("现有功能")])]),a("p",[t._v("Mius 现在有的一些功能")])])}],j=a("67aa"),U=a.n(j),D=a("3698"),P=a.n(D),E=a("06ff"),R=a.n(E),Y={data:function(){return{miusUrl:U.a,deckListUrl:P.a,myCardUrl:R.a}},methods:{}},L=Y,G=(a("c035"),Object(A["a"])(L,O,B,!1,null,null,null)),k=G.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"download"},[a("div",{staticClass:"download-title"},[t._m(0),a("div",{staticClass:"items-wrap"},[a("div",{staticClass:"item"},[a("img",{attrs:{src:t.winUrl,alt:"windows"}}),a("h5",[t._v("Windows installers")]),a("el-button",{attrs:{type:"primary",round:""},on:{click:t.download}},[t._v("下载")])],1),a("div",{staticClass:"item"},[a("img",{attrs:{src:t.appleUrl,alt:"apple"}}),a("h5",[t._v("Mac installer")]),a("el-button",{attrs:{type:"success",disabled:"",round:""}},[t._v("暂无")])],1),a("div",{staticClass:"item"},[a("img",{attrs:{src:t.linuxUrl,alt:"linux"}}),a("h5",[t._v("Linux zip files")]),a("el-button",{attrs:{type:"success",disabled:"",round:""}},[t._v("暂无")])],1)])])])])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"download-text"},[a("h3",[t._v("下载应用")]),a("p",[t._v("一个简单的YGOPRO大厅客户端")]),a("p",[t._v("集成多个服务器")])])}],Q=a("fb75"),N=a.n(Q),V=a("c32f"),H=a.n(V),W=a("732c"),J=a.n(W),F={data:function(){return{winUrl:N.a,appleUrl:H.a,linuxUrl:J.a}},methods:{download:function(){window.location.href="https://mius-1252282306.cos.ap-shanghai.myqcloud.com/win32/Mius-Setup.exe"}}},z=F,K=(a("ab07"),Object(A["a"])(z,S,T,!1,null,null,null)),I=K.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"changelog"},[a("el-timeline",[a("el-timeline-item",{attrs:{timestamp:"2019/11/12",placement:"top"}},[a("el-card",[a("h3",[t._v("Mius v1.1.6 版本新增功能")]),a("p",[t._v("1. 多语言设置")]),a("p",[t._v("2. 英文环境新增YGOCC以及NO81服务器")])])],1),a("el-timeline-item",{attrs:{timestamp:"2019/11/6",placement:"top"}},[a("el-card",[a("h3",[t._v("Mius v1.1.5 版本新增功能")]),a("p",[t._v("1. 安装包可以选择安装地址")]),a("p",[t._v("2. 自动更新Mius")])])],1),a("el-timeline-item",{attrs:{timestamp:"2019/9/1",placement:"top"}},[a("el-card",[a("h3",[t._v("Mius v1.1.4 版本新增功能")]),a("p",[t._v("1. MyCard竞技场决斗记录")]),a("p",[t._v("2. 卡组信息功能")])])],1),a("el-timeline-item",{attrs:{timestamp:"2019/8/15",placement:"top"}},[a("el-card",[a("h3",[t._v("Mius v1.1.3 版本新增功能")]),a("p",[t._v("1. MyCard房间列表")]),a("p",[t._v("2. MyCard自定义房间")]),a("p",[t._v("3. MyCard竞技匹配")]),a("p",[t._v("4. MyCard娱乐匹配")])])],1),a("el-timeline-item",{attrs:{timestamp:"2019/8/10",placement:"top"}},[a("el-card",[a("h3",[t._v("Mius v1.1.2 版本新增功能")]),a("p",[t._v("1. 增加1311服务器")])])],1),a("el-timeline-item",{attrs:{timestamp:"2019/8/5",placement:"top"}},[a("el-card",[a("h3",[t._v("Mius v1.1.1 版本新增功能")]),a("p",[t._v("1. 增加7210服务器")])])],1),a("el-timeline-item",{attrs:{timestamp:"2019/8/1",placement:"top"}},[a("el-card",[a("h3",[t._v("Mius v1.0.0 版本新增功能")]),a("p",[t._v("1. 增加222服务器")])])],1)],1)],1)])},q=[],Z={},$=Object(A["a"])(Z,X,q,!1,null,null,null),tt=$.exports;n["default"].use(u["a"]);var et=[{path:"/",name:"main",component:x,children:[{path:"/",name:"home",component:k},{path:"/download",name:"download",component:I},{path:"/changelog",name:"changelog",component:tt},{path:"/about",name:"about",beforeEnter:function(){location.href="https://github.com/milluxdev/mius"}}]}],at=new u["a"]({routes:et}),nt=at,st=a("5c96"),rt=a.n(st);a("0fae");n["default"].use(rt.a);var it=a("bc3a"),lt=a.n(it);n["default"].prototype.$axios=lt.a,n["default"].config.productionTip=!1,new n["default"]({router:nt,render:function(t){return t(o)}}).$mount("#app")},"64a9":function(t,e,a){},"67aa":function(t,e,a){t.exports=a.p+"img/mius.71a0e514.png"},"732c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA6CAMAAADFsvruAAAAn1BMVEUAAAAAy94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay95VmymeAAAANHRSTlMA+gwCBvXxcajt6b9o5LkQ0byzoGwgrpOMYlY5HBjc18mjeE1CMRTgmIBcPsyGSC0nxH1PJSYj3gAAAtVJREFUSMeNlteWgjAURW/oHQRFxd57mzn//20jRB2CYNyPsDbJrUq1aOdeHN1mfYW+RDMdcIy2+pUR3vBP8pVjocwPyVlBgHXkygkiXbniQsTWpIqPB8aRIecgVQyc9hMAsULDKFfmcqVH1GHQw2cqZlLFXm3n5CKgdrQsbtmSKuMBcE2QagwRjQFEUmW6BMwxnLs5GeLORqrE27kOx3IAtNNccaTKDDEShdSzxXiSdamyBTOpYJ2iQDoC3VchlC1XLnLFLzpR3ftGUlzNk/b+0XcWRIObfgqph28KM006E7g3zIZ5OPoXXXaAR9q8teUB8GPGHxMQbtiISgyLaJIPhprCqpYpJ2tWTNjDurk2hk3GgGFffdYqnECtN5Qxxm+vfoEPxenWjaDq806r3TQdBtTc+QcFccMhbt2XwPmtWcU20KcaWlzZvBc0A+zaMvcbd20MmFTHmnHFUN5fOFpDp4LTJpE20Ks3eG/iPTkRsGxQPHCYWOfzhyHP8GAkPA4Ag2SK2AHGB8XDg7W4igFoDcoOHF2IRdkAODcoKThToV2Lpojq4leCiY6aztyju04AN3xXlnggXEPzdDskdQZMrhWh+NojFvu50cL+zAH2fChhZO9NuXv05XLq89bywVq71aucOKnVDdIdGQD0PlmsyOkCUSj+sehVlRldTl0vJJrzeVohKC06470t5v+Lb2Qz836OavhiO4MJqb7apWMvATYDooldro+LjdDPK0cckzaOpOjCb8HIYSVF9XRx8WsnuLSAWVmYxuX5PjsiJ3x9YT+Gc6GkOlhb+DvTNHvWlAHCj/hiArZd53k9moewfAwqBI883ID0WuQ1xh0/Np/jc6gqLj9Cx3TwijjbWREDgkzLA3Bxx5kGlpXyHmajYspsT620+MLSYaTebwC0V8or4OsOOA4WLbijusHI0uKj4rZSY+QkTROrHbx+p/rMdCNrUXrwBy4KiwODTFjSAAAAAElFTkSuQmCC"},"75a6":function(t,e,a){},"9c65":function(t,e,a){},ab07:function(t,e,a){"use strict";var n=a("75a6"),s=a.n(n);s.a},c035:function(t,e,a){"use strict";var n=a("f8cf"),s=a.n(n);s.a},c32f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA6CAMAAADBRyrTAAAAjVBMVEUAAAAAy94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay97eGTQiAAAALnRSTlMABNXxkfolyLB0bjczB/Xs5s+ooZyXXk8fFA8L9+Hdw7lmR0Lp2IqEe3liPSkaxPPL1gAAAYNJREFUSMfNldmSgjAQRQMEWQVZBJHVbdz7/z9vSkiLlFPl9W3O8+lKJ+nciA9o2/QgBU7WEFEC66uWHvygvhdSzwb0bwYN3DB/ritfFxhH5aMdFRUvoGEFZ+WbvsCwVMEF9DVz8M8C5N7rQYZf8qP9ZCVg1u5mW35wZo4d1brtvBxLmaeRQWbdnfz3wemIaY59K1oeV/REz7RJBwlN6JyL3NMUa/bSTU0Axu7p7wki8FU/BwJphn0kqL8YetqhfnTnMcPQi8G/gn7Ap7okDJfnOAQ3POdswPwxnC6EcR3DAWPNBSnmG4Kx/0sBleLLe/PHhMNwuCAjDIsLfALx+BswCaPl1IgI5KQKJKGooN0SA64xDwim7V9dTDimyz2h5I9HWuN+2D9UlxjwoZYh6lcqyhwCkTweDeYbhVDkX2UZfBeWNhYUCzRcmevnKd+wC55UzCaYBtHbN68lNLLv0qW9mP4m77iVGhjpDefhSa6J1+IvVvJg6GmuvSy7k61uLT3x5BcbojT9K6wPCwAAAABJRU5ErkJggg=="},cf05:function(t,e,a){t.exports=a.p+"img/logo.dfd40031.png"},f8cf:function(t,e,a){},f927:function(t,e,a){"use strict";var n=a("1bfa"),s=a.n(n);s.a},f94d:function(t,e,a){"use strict";var n=a("9c65"),s=a.n(n);s.a},fb75:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAilBMVEUAAAAAy94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94Ay94dlqKLAAAALXRSTlMAMOBwBPvmaVArJBT28NrTwq+poJaAc141DQjOyLu3kYyIelhHQz0fGd2zo0vNBOGUAAAAxElEQVRIx+3WyQ6CMBAGYMoimyuKUEQRcde+/+s5Vs0crKZjjImh/6Fw+dJOe/ktcvbbrB4NugQR51mazHriFh3B8yY9lQ+hAwsWrMbDjlDlheCwJGqhhnHeyD0c+LeFBnR3G7/GyXVgGEwni74nMJrw/jXQQANbCZkyMcCQvYv183x81H96DgMNNPDrMEux5pGgDGfQr+YHjwYxbrT2l9B+yRDbcwRrSYSYIrwOYJMhDnB2KiiYBPh0AdURPBViJZYXeAFH8I1atxGbYwAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.be2c9245.js.map