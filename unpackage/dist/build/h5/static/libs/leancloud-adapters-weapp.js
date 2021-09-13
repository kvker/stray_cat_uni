"use strict";Object.defineProperty(exports,"__esModule",{value:true});var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p]};return extendStatics(d,b)};function __extends(d,b){extendStatics(d,b);function __(){this.constructor=d}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __)}var __assign=function(){__assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}return t};return __assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]]}return t}function __awaiter(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value)})}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})}function __generator(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true}}}var PROVIDER="lc_weapp";var PLATFORM="weixin";function getLoginCode(){return new Promise(function(resolve,reject){wx.login({success:function(res){return res.code?resolve(res.code):reject(new Error(res.errMsg))},fail:function(_a){var errMsg=_a.errMsg;return reject(new Error(errMsg))}})})}var getAuthInfo=function(_a){var _b=_a===void 0?{}:_a,_c=_b.platform,platform=_c===void 0?PLATFORM:_c,_d=_b.preferUnionId,preferUnionId=_d===void 0?false:_d,_e=_b.asMainAccount,asMainAccount=_e===void 0?false:_e;return __awaiter(this,void 0,void 0,function(){var code,authData;return __generator(this,function(_f){switch(_f.label){case 0:return[4,getLoginCode()];case 1:code=_f.sent();authData={code:code};if(preferUnionId){authData.platform=platform;authData.main_account=asMainAccount}return[2,{authData:authData,platform:platform,provider:PROVIDER}]}})})};var storage={getItem:function(key){return wx.getStorageSync(key)},setItem:function(key,value){return wx.setStorageSync(key,value)},removeItem:function(key){return wx.removeStorageSync(key)},clear:function(){return wx.clearStorageSync()}};var extendStatics$1=function(d,b){extendStatics$1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p]};return extendStatics$1(d,b)};function __extends$1(d,b){extendStatics$1(d,b);function __(){this.constructor=d}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __)}var AbortError=function(_super){__extends$1(AbortError,_super);function AbortError(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.name="AbortError";return _this}return AbortError}(Error);var request=function(url,options){if(options===void 0){options={}}var method=options.method,data=options.data,headers=options.headers,signal=options.signal;if(signal===null||signal===void 0?void 0:signal.aborted){return Promise.reject(new AbortError("Request aborted"))}return new Promise(function(resolve,reject){var task=wx.request({url:url,method:method,data:data,header:headers,complete:function(res){signal===null||signal===void 0?void 0:signal.removeEventListener("abort",abortListener);if(!res.statusCode){reject(new Error(res.errMsg));return}resolve({ok:!(res.statusCode>=400),status:res.statusCode,headers:res.header,data:res.data})}});var abortListener=function(){reject(new AbortError("Request aborted"));task.abort()};signal===null||signal===void 0?void 0:signal.addEventListener("abort",abortListener)})};var upload=function(url,file,options){if(options===void 0){options={}}var headers=options.headers,data=options.data,onprogress=options.onprogress,signal=options.signal;if(signal===null||signal===void 0?void 0:signal.aborted){return Promise.reject(new AbortError("Request aborted"))}if(!(file&&file.data&&file.data.uri)){return Promise.reject(new TypeError("File data must be an object like { uri: localPath }."))}return new Promise(function(resolve,reject){var task=wx.uploadFile({url:url,header:headers,filePath:file.data.uri,name:file.field,formData:data,success:function(response){var status=response.statusCode,data=response.data,rest=__rest(response,["statusCode","data"]);resolve(__assign(__assign({},rest),{data:typeof data==="string"?JSON.parse(data):data,status:status,ok:!(status>=400)}))},fail:function(response){reject(new Error(response.errMsg))},complete:function(){signal===null||signal===void 0?void 0:signal.removeEventListener("abort",abortListener)}});var abortListener=function(){reject(new AbortError("Request aborted"));task.abort()};signal===null||signal===void 0?void 0:signal.addEventListener("abort",abortListener);if(onprogress){task.onProgressUpdate(function(event){return onprogress({loaded:event.totalBytesSent,total:event.totalBytesExpectedToSend,percent:event.progress})})}})};const privateData=new WeakMap;const wrappers=new WeakMap;function pd(event){const retv=privateData.get(event);console.assert(retv!=null,"'this' is expected an Event object, but got",event);return retv}function setCancelFlag(data){if(data.passiveListener!=null){if(typeof console!=="undefined"&&typeof console.error==="function"){console.error("Unable to preventDefault inside passive event listener invocation.",data.passiveListener)}return}if(!data.event.cancelable){return}data.canceled=true;if(typeof data.event.preventDefault==="function"){data.event.preventDefault()}}function Event(eventTarget,event){privateData.set(this,{eventTarget:eventTarget,event:event,eventPhase:2,currentTarget:eventTarget,canceled:false,stopped:false,immediateStopped:false,passiveListener:null,timeStamp:event.timeStamp||Date.now()});Object.defineProperty(this,"isTrusted",{value:false,enumerable:true});const keys=Object.keys(event);for(let i=0;i<keys.length;++i){const key=keys[i];if(!(key in this)){Object.defineProperty(this,key,defineRedirectDescriptor(key))}}}Event.prototype={get type(){return pd(this).event.type},get target(){return pd(this).eventTarget},get currentTarget(){return pd(this).currentTarget},composedPath(){const currentTarget=pd(this).currentTarget;if(currentTarget==null){return[]}return[currentTarget]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return pd(this).eventPhase},stopPropagation(){const data=pd(this);data.stopped=true;if(typeof data.event.stopPropagation==="function"){data.event.stopPropagation()}},stopImmediatePropagation(){const data=pd(this);data.stopped=true;data.immediateStopped=true;if(typeof data.event.stopImmediatePropagation==="function"){data.event.stopImmediatePropagation()}},get bubbles(){return Boolean(pd(this).event.bubbles)},get cancelable(){return Boolean(pd(this).event.cancelable)},preventDefault(){setCancelFlag(pd(this))},get defaultPrevented(){return pd(this).canceled},get composed(){return Boolean(pd(this).event.composed)},get timeStamp(){return pd(this).timeStamp},get srcElement(){return pd(this).eventTarget},get cancelBubble(){return pd(this).stopped},set cancelBubble(value){if(!value){return}const data=pd(this);data.stopped=true;if(typeof data.event.cancelBubble==="boolean"){data.event.cancelBubble=true}},get returnValue(){return!pd(this).canceled},set returnValue(value){if(!value){setCancelFlag(pd(this))}},initEvent(){}};Object.defineProperty(Event.prototype,"constructor",{value:Event,configurable:true,writable:true});if(typeof window!=="undefined"&&typeof window.Event!=="undefined"){Object.setPrototypeOf(Event.prototype,window.Event.prototype);wrappers.set(window.Event.prototype,Event)}function defineRedirectDescriptor(key){return{get(){return pd(this).event[key]},set(value){pd(this).event[key]=value},configurable:true,enumerable:true}}function defineCallDescriptor(key){return{value(){const event=pd(this).event;return event[key].apply(event,arguments)},configurable:true,enumerable:true}}function defineWrapper(BaseEvent,proto){const keys=Object.keys(proto);if(keys.length===0){return BaseEvent}function CustomEvent(eventTarget,event){BaseEvent.call(this,eventTarget,event)}CustomEvent.prototype=Object.create(BaseEvent.prototype,{constructor:{value:CustomEvent,configurable:true,writable:true}});for(let i=0;i<keys.length;++i){const key=keys[i];if(!(key in BaseEvent.prototype)){const descriptor=Object.getOwnPropertyDescriptor(proto,key);const isFunc=typeof descriptor.value==="function";Object.defineProperty(CustomEvent.prototype,key,isFunc?defineCallDescriptor(key):defineRedirectDescriptor(key))}}return CustomEvent}function getWrapper(proto){if(proto==null||proto===Object.prototype){return Event}let wrapper=wrappers.get(proto);if(wrapper==null){wrapper=defineWrapper(getWrapper(Object.getPrototypeOf(proto)),proto);wrappers.set(proto,wrapper)}return wrapper}function wrapEvent(eventTarget,event){const Wrapper=getWrapper(Object.getPrototypeOf(event));return new Wrapper(eventTarget,event)}function isStopped(event){return pd(event).immediateStopped}function setEventPhase(event,eventPhase){pd(event).eventPhase=eventPhase}function setCurrentTarget(event,currentTarget){pd(event).currentTarget=currentTarget}function setPassiveListener(event,passiveListener){pd(event).passiveListener=passiveListener}const listenersMap=new WeakMap;const CAPTURE=1;const BUBBLE=2;const ATTRIBUTE=3;function isObject(x){return x!==null&&typeof x==="object"}function getListeners(eventTarget){const listeners=listenersMap.get(eventTarget);if(listeners==null){throw new TypeError("'this' is expected an EventTarget object, but got another value.")}return listeners}function defineEventAttributeDescriptor(eventName){return{get(){const listeners=getListeners(this);let node=listeners.get(eventName);while(node!=null){if(node.listenerType===ATTRIBUTE){return node.listener}node=node.next}return null},set(listener){if(typeof listener!=="function"&&!isObject(listener)){listener=null}const listeners=getListeners(this);let prev=null;let node=listeners.get(eventName);while(node!=null){if(node.listenerType===ATTRIBUTE){if(prev!==null){prev.next=node.next}else if(node.next!==null){listeners.set(eventName,node.next)}else{listeners["delete"](eventName)}}else{prev=node}node=node.next}if(listener!==null){const newNode={listener:listener,listenerType:ATTRIBUTE,passive:false,once:false,next:null};if(prev===null){listeners.set(eventName,newNode)}else{prev.next=newNode}}},configurable:true,enumerable:true}}function defineEventAttribute(eventTargetPrototype,eventName){Object.defineProperty(eventTargetPrototype,`on${eventName}`,defineEventAttributeDescriptor(eventName))}function defineCustomEventTarget(eventNames){function CustomEventTarget(){EventTarget.call(this)}CustomEventTarget.prototype=Object.create(EventTarget.prototype,{constructor:{value:CustomEventTarget,configurable:true,writable:true}});for(let i=0;i<eventNames.length;++i){defineEventAttribute(CustomEventTarget.prototype,eventNames[i])}return CustomEventTarget}function EventTarget(){if(this instanceof EventTarget){listenersMap.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0])){return defineCustomEventTarget(arguments[0])}if(arguments.length>0){const types=new Array(arguments.length);for(let i=0;i<arguments.length;++i){types[i]=arguments[i]}return defineCustomEventTarget(types)}throw new TypeError("Cannot call a class as a function")}EventTarget.prototype={addEventListener(eventName,listener,options){if(listener==null){return}if(typeof listener!=="function"&&!isObject(listener)){throw new TypeError("'listener' should be a function or an object.")}const listeners=getListeners(this);const optionsIsObj=isObject(options);const capture=optionsIsObj?Boolean(options.capture):Boolean(options);const listenerType=capture?CAPTURE:BUBBLE;const newNode={listener:listener,listenerType:listenerType,passive:optionsIsObj&&Boolean(options.passive),once:optionsIsObj&&Boolean(options.once),next:null};let node=listeners.get(eventName);if(node===undefined){listeners.set(eventName,newNode);return}let prev=null;while(node!=null){if(node.listener===listener&&node.listenerType===listenerType){return}prev=node;node=node.next}prev.next=newNode},removeEventListener(eventName,listener,options){if(listener==null){return}const listeners=getListeners(this);const capture=isObject(options)?Boolean(options.capture):Boolean(options);const listenerType=capture?CAPTURE:BUBBLE;let prev=null;let node=listeners.get(eventName);while(node!=null){if(node.listener===listener&&node.listenerType===listenerType){if(prev!==null){prev.next=node.next}else if(node.next!==null){listeners.set(eventName,node.next)}else{listeners["delete"](eventName)}return}prev=node;node=node.next}},dispatchEvent(event){if(event==null||typeof event.type!=="string"){throw new TypeError('"event.type" should be a string.')}const listeners=getListeners(this);const eventName=event.type;let node=listeners.get(eventName);if(node==null){return true}const wrappedEvent=wrapEvent(this,event);let prev=null;while(node!=null){if(node.once){if(prev!==null){prev.next=node.next}else if(node.next!==null){listeners.set(eventName,node.next)}else{listeners["delete"](eventName)}}else{prev=node}setPassiveListener(wrappedEvent,node.passive?node.listener:null);if(typeof node.listener==="function"){try{node.listener.call(this,wrappedEvent)}catch(err){if(typeof console!=="undefined"&&typeof console.error==="function"){console.error(err)}}}else if(node.listenerType!==ATTRIBUTE&&typeof node.listener.handleEvent==="function"){node.listener.handleEvent(wrappedEvent)}if(isStopped(wrappedEvent)){break}node=node.next}setPassiveListener(wrappedEvent,null);setEventPhase(wrappedEvent,0);setCurrentTarget(wrappedEvent,null);return!wrappedEvent.defaultPrevented}};Object.defineProperty(EventTarget.prototype,"constructor",{value:EventTarget,configurable:true,writable:true});if(typeof window!=="undefined"&&typeof window.EventTarget!=="undefined"){Object.setPrototypeOf(EventTarget.prototype,window.EventTarget.prototype)}var WS=function(_super){__extends(WS,_super);function WS(url,protocol){var _this=_super.call(this)||this;_this._readyState=WS.CLOSED;if(!url){throw new TypeError("Failed to construct 'WebSocket': url required")}_this._url=url;_this._protocol=protocol;return _this}Object.defineProperty(WS.prototype,"url",{get:function(){return this._url},enumerable:false,configurable:true});Object.defineProperty(WS.prototype,"protocol",{get:function(){return this._protocol},enumerable:false,configurable:true});Object.defineProperty(WS.prototype,"readyState",{get:function(){return this._readyState},enumerable:false,configurable:true});WS.CONNECTING=0;WS.OPEN=1;WS.CLOSING=2;WS.CLOSED=3;return WS}(EventTarget("open","error","message","close"));var WechatWS=function(_super){__extends(WechatWS,_super);function WechatWS(url,protocol){var _this=_super.call(this,url,protocol)||this;if(protocol&&!(wx.canIUse&&wx.canIUse("connectSocket.object.protocols"))){throw new Error("subprotocol not supported in weapp")}_this._readyState=WS.CONNECTING;var errorHandler=function(event){_this._readyState=WS.CLOSED;_this.dispatchEvent({type:"error",message:event.errMsg})};var socketTask=wx.connectSocket({url:url,protocols:_this._protocol===undefined||Array.isArray(_this._protocol)?_this._protocol:[_this._protocol],fail:function(error){return setTimeout(function(){return errorHandler(error)},0)}});_this._socketTask=socketTask;socketTask.onOpen(function(){_this._readyState=WS.OPEN;_this.dispatchEvent({type:"open"})});socketTask.onError(errorHandler);socketTask.onMessage(function(event){var data=event.data;_this.dispatchEvent({data:data,type:"message"})});socketTask.onClose(function(event){_this._readyState=WS.CLOSED;var code=event.code,reason=event.reason;_this.dispatchEvent({code:code,reason:reason,type:"close"})});return _this}WechatWS.prototype.close=function(){if(this.readyState===WS.CLOSED)return;if(this.readyState===WS.CONNECTING){console.warn("close WebSocket which is connecting might not work")}this._socketTask.close({})};WechatWS.prototype.send=function(data){if(this.readyState!==WS.OPEN){throw new Error("INVALID_STATE_ERR")}if(!(typeof data==="string"||data instanceof ArrayBuffer)){throw new TypeError("only String/ArrayBuffer supported")}this._socketTask.send({data:data})};return WechatWS}(WS);var WebSocket=WechatWS;var platformInfo={name:"Weapp"};exports.WebSocket=WebSocket;exports.getAuthInfo=getAuthInfo;exports.platformInfo=platformInfo;exports.request=request;exports.storage=storage;exports.upload=upload;