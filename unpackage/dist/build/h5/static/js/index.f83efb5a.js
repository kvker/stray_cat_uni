(function(e){function n(n){for(var i,o,l=n[0],u=n[1],d=n[2],c=0,g=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&g.push(a[o][0]),a[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);s&&s(n);while(g.length)g.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],i=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(i=!1)}i&&(r.splice(n--,1),e=l(l.s=t[0]))}return e}var i={},a={index:0},r=[];function o(e){return l.p+"static/js/"+({"pages-detail-detail":"pages-detail-detail","pages-edit-edit":"pages-edit-edit","pages-index-index":"pages-index-index","pages-login-login":"pages-login-login"}[e]||e)+"."+{"pages-detail-detail":"77b03f65","pages-edit-edit":"2ec817af","pages-index-index":"ba6d3840","pages-login-login":"3b8dfe35"}[e]+".js"}function l(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise((function(n,i){t=a[e]=[n,i]}));n.push(t[2]=i);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e);var d=new Error;r=function(n){u.onerror=u.onload=null,clearTimeout(c);var t=a[e];if(0!==t){if(t){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,t[1](d)}a[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(n)},l.m=e,l.c=i,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)l.d(t,i,function(n){return e[n]}.bind(null,i));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="./",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var s=d;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("9eab")},"0755":function(e,n,t){"use strict";t.r(n);var i=t("212e"),a=t("dbdf");for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t("effb");var o,l=t("f0c5"),u=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);n["default"]=u.exports},"212e":function(e,n,t){"use strict";var i;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return i}));var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},r=[]},"3f7f":function(e,n,t){"use strict";(function(e){var n=t("4ea4"),i=n(t("e143"));e["____700AA22____"]=!0,delete e["____700AA22____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"街猫档案",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.compilerVersion="3.2.3",e.__uniConfig.router={mode:"hash",base:"./"},e.__uniConfig.publicPath="./",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=t.e,i.default.component("pages-index-index",(function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("b234"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-detail-detail",(function(e){var n={component:t.e("pages-detail-detail").then(function(){return e(t("f232"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-login-login",(function(e){var n={component:t.e("pages-login-login").then(function(){return e(t("18b0"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-edit-edit",(function(e){var n={component:t.e("pages-edit-edit").then(function(){return e(t("1859"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{enablePullDownRefresh:!0})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/detail/detail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-detail-detail",{slot:"page"})])}},meta:{name:"pages-detail-detail",isNVue:!1,maxWidth:0,pagePath:"pages/detail/detail",windowTop:44}},{path:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"管理员登录"})},[e("pages-login-login",{slot:"page"})])}},meta:{name:"pages-login-login",isNVue:!1,maxWidth:0,pagePath:"pages/login/login",windowTop:44}},{path:"/pages/edit/edit",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"上传猫信息"})},[e("pages-edit-edit",{slot:"page"})])}},meta:{name:"pages-edit-edit",isNVue:!1,maxWidth:0,pagePath:"pages/edit/edit",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))},"723f":function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t/*每个页面公共css */*{box-sizing:border-box}h1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nol,\r\nul{margin:0;padding:0}ol,\r\nul{list-style:none;padding:0}html{--main_length:200px;--main_size:44px;--main_gray:#d8d8d8;--main_gap:10px;--main_color:green;--main_radius:8px;--border_line:1px solid #999;color:#333;font-size:14px}html,\r\nbody{height:100%}uni-page-body{--main_length:%?400?%;--main_size:%?88?%;--main_gray:#d8d8d8;--main_gap:%?20?%;--main_color:#394f3e;--main_orange:#db6d28;--top_color:#999;--middle_color:#999;--lower_color:#999;--bg_color:#f4efe9;--main_radius:%?16?%;--main_line:%?2?% solid #999;color:#333;font-size:%?28?%;height:100%}uni-page-body,\r\nuni-view,\r\nuni-navigator,\r\nuni-scroll-view,\r\nuni-cover-view,\r\nuni-button,\r\nuni-input,\r\nuni-textarea,\r\nuni-form{box-sizing:border-box}uni-button,\r\n.button,\r\nuni-input,\r\nuni-textarea{cursor:pointer;outline:none;resize:none}uni-input,\r\nuni-textarea{cursor:text;padding:var(--main_gap);border:var(--main_line);border-radius:var(--main_radius)}uni-input{padding:0 var(--main_gap)}uni-button{margin:0;padding:0;background-color:initial}uni-button:after{border:none}.button{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:var(--main_size);border-radius:calc(var(--main_size) / 2);color:#fff;background-color:var(--main_color)}.color-3{color:var(--top_color)}.color-6{color:var(--middle_color)}.color-9{color:var(--lower_color)}.cp{cursor:pointer}\r\n  /* 方块 */.square{width:var(--main_size);height:var(--main_size)}\r\n  /* 定位 */.relative{position:relative}.absolute{position:absolute;top:0;left:0;width:100%;height:100%}.center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\r\n  /* 布局 */.flex{display:-webkit-box;display:-webkit-flex;display:flex}.flex-column{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flex-wrap{-webkit-flex-wrap:wrap;flex-wrap:wrap}.flex.jcfe,\r\n.flex-column.jcfe{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.flex.jcsb,\r\n.flex-column.jcsb{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.flex.jcsa,\r\n.flex-column.jcsa{-webkit-justify-content:space-around;justify-content:space-around}.flex.jcse,\r\n.flex-column.jcse{-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly}.flex.jcc,\r\n.flex-column.jcc{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flex.aic,\r\n.flex-column.aic{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex.aifs,\r\n.flex-column.aifs{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.flex.aife,\r\n.flex-column.aife{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.f1{-webkit-box-flex:1;-webkit-flex:1;flex:1}.min-font-size{font-size:%?24?%}.none{display:none}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}.h-10{height:10%}.h-20{height:20%}.h-30{height:30%}.h-40{height:40%}.h-50{height:50%}.h-60{height:60%}.h-70{height:70%}.h-80{height:80%}.h-90{height:90%}.h-100{height:100%}.p-0{padding:0}.px-0{padding-left:0;padding-right:0}.py-0{padding-top:0;padding-bottom:0}.pt-0{padding-top:0}.pr-0{padding-right:0}.pb-0{padding-bottom:0}.pl-0{padding-left:0}.p-10{padding:%?10?%}.px-10{padding:0 %?10?%}.py-10{padding:%?10?% 0}.pt-10{padding-top:%?10?%}.pr-10{padding-right:%?10?%}.pb-10{padding-bottom:%?10?%}.pl-10{padding-left:%?10?%}.p-20{padding:%?20?%}.px-20{padding:0 %?20?%}.py-20{padding:%?20?% 0}.pt-20{padding-top:%?20?%}.pr-20{padding-right:%?20?%}.pb-20{padding-bottom:%?20?%}.pl-20{padding-left:%?20?%}.p-40{padding:%?40?%}.px-40{padding:0 %?40?%}.py-40{padding:%?40?% 0}.pt-40{padding-top:%?40?%}.pr-40{padding-right:%?40?%}.pb-40{padding-bottom:%?40?%}.pl-40{padding-left:%?40?%}.p-40{padding:%?40?%}.px-80{padding:0 %?80?%}.py-80{padding:%?80?% 0}.pt-80{padding-top:%?80?%}.pr-80{padding-right:%?80?%}.pb-80{padding-bottom:%?80?%}.pl-80{padding-left:%?80?%}.p-160{padding:%?160?%}.px-160{padding:0 %?160?%}.py-160{padding:%?160?% 0}.pt-160{padding-top:%?160?%}.pr-160{padding-right:%?160?%}.pb-160{padding-bottom:%?160?%}.pl-160{padding-left:%?160?%}m-0{margin:0}.mx-0{margin-left:0;margin-right:0}.my-0{margin-top:0;margin-bottom:0}.mt-0{margin-top:0}.mr-0{margin-right:0}.mb-0{margin-bottom:0}.ml-0{margin-left:0}.m-10{margin:%?10?%}.mx-10{margin:0 %?10?%}.my-10{margin:%?10?% 0}.mt-10{margin-top:%?10?%}.mr-10{margin-right:%?10?%}.mb-10{margin-bottom:%?10?%}.ml-10{margin-left:%?10?%}.m-20{margin:%?20?%}.mx-20{margin:0 %?20?%}.my-20{margin:%?20?% 0}.mt-20{margin-top:%?20?%}.mr-20{margin-right:%?20?%}.mb-20{margin-bottom:%?20?%}.ml-20{margin-left:%?20?%}.m-40{margin:%?40?%}.mx-40{margin:0 %?40?%}.my-40{margin:%?40?% 0}.mt-40{margin-top:%?40?%}.mr-40{margin-right:%?40?%}.mb-40{margin-bottom:%?40?%}.ml-40{margin-left:%?40?%}.m-80{margin:%?80?%}.mx-80{margin:0 %?80?%}.my-80{margin:%?80?% 0}.mt-80{margin-top:%?80?%}.mr-80{margin-right:%?80?%}.mb-80{margin-bottom:%?80?%}.ml-80{margin-left:%?80?%}.m-160{margin:%?160?%}.mx-160{margin:0 %?160?%}.my-160{margin:%?160?% 0}.mt-160{margin-top:%?160?%}.mr-160{margin-right:%?160?%}.mb-160{margin-bottom:%?160?%}.ml-160{margin-left:%?160?%}.min-font-size{font-size:%?24?%}",""]),e.exports=n},"9eab":function(e,n,t){"use strict";var i=t("4ea4"),a=i(t("5530"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("3f7f"),t("1c31");var r=i(t("e143")),o=i(t("0755")),l=i(t("e166")),u=i(t("e72c"));r.default.config.productionTip=!1,r.default.prototype.$av=l.default,r.default.prototype.$util=u.default,r.default.prototype.$is_dev=!1,r.default.prototype.$showToast=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"错误",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";uni.showToast({title:e,icon:n})},r.default.prototype.$showLoading=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"进行中...";uni.showLoading({title:e}),setTimeout((function(){uni.hideLoading()}),3e4)},o.default.mpType="app";var d=new r.default((0,a.default)({},o.default));d.$mount()},adee:function(e,n,t){var i=t("723f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("4f06").default;a("65a779b8",i,!0,{sourceMap:!1,shadowMode:!1})},d7bd:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=i},dbdf:function(e,n,t){"use strict";t.r(n);var i=t("d7bd"),a=t.n(i);for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);n["default"]=a.a},e166:function(e,n,t){"use strict";var i=t("4ea4");t("7db0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("fca8"));if(!a.default.applicationId||!a.default.applicationKey&&!a.default.masterKey){var r={appId:"Yb6JjWHktmSuFXDLSwsTPMQA-gzGzoHsz",appKey:"EK1cUSUvfzqXzazC7YidGFbp",serverURL:"https://catdocument.ilovecats.cn"};a.default.init(r)}var o={createAll:function(e){return a.default.Object.saveAll(e)},deleteAll:function(e){return a.default.Object.destroyAll(e)},updateAll:function(e){return a.default.Object.fetchAll(e)},saveAll:function(e){try{return a.default.Object.saveAll(e)}catch(n){wx.showToast({title:n.message})}},create:function(e,n){try{return(new(a.default.Object.extend(e))).set(n).save()}catch(t){wx.showToast({title:t.message})}},read:function(e,n){var t=new a.default.Query(e);if(n){var i=n(t);i&&(t=i)}return t.find()},update:function(e,n,t){var i=a.default.Object.createWithoutData(e,n);for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];i.set(r,o)}return i.save()},delete:function(e,n){var t=a.default.Object.createWithoutData(e,n);return t.destroy()},upload:function(e){return new a.default.File(e,{blob:{uri:e}}).save()},count:function(e,n){var t=new a.default.Query(e);return n&&n(t),t.count()},login:function(e,n){return a.default.User.logIn(e,n)},loginWithEmail:function(e,n){return a.default.User.loginWithEmail(e,n)},regist:function(e,n){var t=new a.default.User;return t.setUsername(e),t.setPassword(n),t.signUp()},registWithEmail:function(e,n){var t=new a.default.User;return t.setUsername(e),t.setPassword(n),t.setEmail(e),t.signUp()},currentUser:function(){return a.default.User.current()}};n.default=o},e72c:function(e,n,t){"use strict";var i=t("4ea4");t("99af"),t("4160"),t("a630"),t("a15b"),t("4d63"),t("ac1f"),t("25f0"),t("3ca3"),t("5319"),t("1276"),t("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,r=i(t("90df")),o=[],l=500,u={dayjs:r.default,doAsyncLast:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;if("function"!==typeof e)throw"执行doLast函数报错：需要传入函数！";clearTimeout(a),a=setTimeout((function(){var e=o[o.length-1];e(),o=[],clearTimeout(a),a=null}),n),o.push(e)},doSyncLast:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;if("function"!==typeof e)throw"执行doLast函数报错：需要传入函数！";a||(a=setTimeout((function(){var e=o[o.length-1];e(),o=[],clearTimeout(a),a=null}),n)),o.push(e)},pointLeftNumberLength:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if("number"===typeof e){var t=String(e),i=t.split(".")[0].length;if(n>i){var a=n-i,r=Array.from({length:a},(function(){return"0"})).join("");t=r+t}return t}throw"传数字类型!"},formatDate:function(e,n){return(0,r.default)(e).format(n||"YYYY-MM-DD")},formatDateDayByDay:function(e){var n,t=(0,r.default)(),i=(0,r.default)(e).diff(t,"day");if(Math.abs(i)>2)return(0,r.default)(e).format("YYYY-MM-DD");switch(i){case 2:n="后天";break;case 1:n="明天";break;case 0:n="今天";break;case-1:n="昨天";break;case-2:n="前天";break}return n},replaceStar:function(e,n,t){var i=new RegExp("^(.{".concat(n,"}).{").concat(t,"}(.*)$"),"g");return e.replace(i,"$1".concat(Array.from({length:t},(function(){return"*"})).join(""),"$2"))},getCurrentPageUrl:function(){var e=getCurrentPages(),n=e[e.length-1],t="/".concat(n.route);return t},getCurrentPageUrlWithArgs:function(){var e=getCurrentPages(),n=e[e.length-1],t=n.route,i=n.options,a="/".concat(t,"?");for(var r in i){var o=i[r];a+="".concat(r,"=").concat(o,"&")}return a=a.substring(0,a.length-1),a},getPathParams:function(e){var n=e.split("?")[1];if(n){var t=n.split("&"),i={};return t.forEach((function(e){var n=e.split("=");i[n[0]]=n[1]})),i}return{}},getLingyangLevelLabel:function(e){var n;switch(e){case 0:n="超不适合";break;case 1:n="较不适合";break;case 2:n="一般";break;case 3:n="较适合";break;case 4:n="超适合";break;default:n="其他"}return n},getCategoryLabel:function(e){var n=["其他","奶牛","橘猫","三花","狸花","玳瑁","白猫","玄猫","狸花白"];return n[e]||"其他"}};n.default=u},effb:function(e,n,t){"use strict";var i=t("adee"),a=t.n(i);a.a}});