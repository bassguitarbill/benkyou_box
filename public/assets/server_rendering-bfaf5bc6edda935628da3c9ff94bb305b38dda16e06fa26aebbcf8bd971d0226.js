!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){(function(e){var t=r(2),n=r(12),o=r(4),i=r(6);e.React=t,e.ReactDOMServer=n,e.createReactClass=o,e.PropTypes=i}).call(t,function(){return this}())},function(e,t){/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,u,l=r(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var c in n)i.call(n,c)&&(l[c]=n[c]);if(o){u=o(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(l[u[f]]=n[u[f]])}}return l}},function(e,t,r){"use strict";e.exports=r(8)},function(e,t,r){"use strict";function n(e,t,r,n,o,i,a,u){if(s(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,i,a,u],f=0;l=new Error(t.replace(/%s/g,function(){return c[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}function o(e){return e}function i(e,t,r){function i(e,t){var r=g.hasOwnProperty(t)?g[t]:null;_.hasOwnProperty(t)&&n("OVERRIDE_BASE"===r,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&n("DEFINE_MANY"===r||"DEFINE_MANY_MERGED"===r,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function a(e,r){if(r){n("function"!=typeof r,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),n(!t(r),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,a=o.__reactAutoBindPairs;r.hasOwnProperty(c)&&E.mixins(e,r.mixins);for(var u in r)if(r.hasOwnProperty(u)&&u!==c){var l=r[u],s=o.hasOwnProperty(u);if(i(s,u),E.hasOwnProperty(u))E[u](e,l);else{var f=g.hasOwnProperty(u),d="function"==typeof l,y=d&&!f&&!s&&r.autobind!==!1;if(y)a.push(u,l),o[u]=l;else if(s){var m=g[u];n(f&&("DEFINE_MANY_MERGED"===m||"DEFINE_MANY"===m),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",m,u),"DEFINE_MANY_MERGED"===m?o[u]=p(o[u],l):"DEFINE_MANY"===m&&(o[u]=h(o[u],l))}else o[u]=l}}}}function s(e,t){if(t)for(var r in t){var o=t[r];if(t.hasOwnProperty(r)){var i=r in E;n(!i,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',r);var a=r in e;if(a){var u=w.hasOwnProperty(r)?w[r]:null;return n("DEFINE_MANY_MERGED"===u,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",r),void(e[r]=p(e[r],o))}e[r]=o}}}function f(e,t){n(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var r in t)t.hasOwnProperty(r)&&(n(void 0===e[r],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",r),e[r]=t[r]);return e}function p(e,t){return function(){var r=e.apply(this,arguments),n=t.apply(this,arguments);if(null==r)return n;if(null==n)return r;var o={};return f(o,r),f(o,n),o}}function h(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function d(e,t){var r=t.bind(e);return r}function y(e){for(var t=e.__reactAutoBindPairs,r=0;r<t.length;r+=2){var n=t[r],o=t[r+1];e[n]=d(e,o)}}function m(e){var t=o(function(e,o,i){this.__reactAutoBindPairs.length&&y(this),this.props=e,this.context=o,this.refs=l,this.updater=i||r,this.state=null;var a=this.getInitialState?this.getInitialState():null;n("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new S,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],v.forEach(a.bind(null,t)),a(t,x),a(t,e),a(t,b),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),n(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var i in g)t.prototype[i]||(t.prototype[i]=null);return t}var v=[],g={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},w={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},E={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var r=0;r<t.length;r++)a(e,t[r])},childContextTypes:function(e,t){e.childContextTypes=u({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=u({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=u({},e.propTypes,t)},statics:function(e,t){s(e,t)},autobind:function(){}},x={componentDidMount:function(){this.__isMounted=!0}},b={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},S=function(){};return u(S.prototype,e.prototype,_),m}var a,u=r(1),l={},s=function(e){},c="mixins";a={},e.exports=i},function(e,t,r){"use strict";var n=r(2),o=r(3);if("undefined"==typeof n)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var i=(new n.Component).updater;e.exports=o(n.Component,n.isValidElement,i)},function(e,t,r){"use strict";function n(){}function o(){}var i=r(7);o.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,o,a){if(a!==i){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return r.PropTypes=r,r}},function(e,t,r){e.exports=r(5)()},function(e,t){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(e,t,r){/** @license React v16.14.0
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
"use strict";function n(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e,t,r){this.props=e,this.context=t,this.refs=A,this.updater=r||R}function i(){}function a(e,t,r){this.props=e,this.context=t,this.refs=A,this.updater=r||R}function u(e,t,r){var n,o={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)$.call(t,n)&&!U.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:b,type:e,key:i,ref:a,props:o,_owner:T.current}}function l(e,t){return{$$typeof:b,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function s(e){return"object"==typeof e&&null!==e&&e.$$typeof===b}function c(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function f(e,t,r,n){if(Y.length){var o=Y.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function p(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>Y.length&&Y.push(e)}function h(e,t,r,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case b:case _:a=!0}}if(a)return r(o,e,""===t?"."+y(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){i=e[u];var l=t+y(i,u);a+=h(i,l,r,o)}else if(null===e||"object"!=typeof e?l=null:(l=M&&e[M]||e["@@iterator"],l="function"==typeof l?l:null),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)i=i.value,l=t+y(i,u++),a+=h(i,l,r,o);else if("object"===i)throw r=""+e,Error(n(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return a}function d(e,t,r){return null==e?0:h(e,"",t,r)}function y(e,t){return"object"==typeof e&&null!==e&&null!=e.key?c(e.key):t.toString(36)}function m(e,t){e.func.call(e.context,t,e.count++)}function v(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?g(e,n,r,function(e){return e}):null!=e&&(s(e)&&(e=l(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(W,"$&/")+"/")+r)),n.push(e))}function g(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(W,"$&/")+"/"),t=f(t,i,n,o),d(e,v,t),p(t)}function w(){var e=L.current;if(null===e)throw Error(n(321));return e}var E=r(1),x="function"==typeof Symbol&&Symbol.for,b=x?Symbol.for("react.element"):60103,_=x?Symbol.for("react.portal"):60106,S=x?Symbol.for("react.fragment"):60107,k=x?Symbol.for("react.strict_mode"):60108,C=x?Symbol.for("react.profiler"):60114,D=x?Symbol.for("react.provider"):60109,N=x?Symbol.for("react.context"):60110,F=x?Symbol.for("react.forward_ref"):60112,I=x?Symbol.for("react.suspense"):60113,O=x?Symbol.for("react.memo"):60115,P=x?Symbol.for("react.lazy"):60116,M="function"==typeof Symbol&&Symbol.iterator,R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A={};o.prototype.isReactComponent={},o.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(n(85));this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=o.prototype;var j=a.prototype=new i;j.constructor=a,E(j,o.prototype),j.isPureReactComponent=!0;var T={current:null},$=Object.prototype.hasOwnProperty,U={key:!0,ref:!0,__self:!0,__source:!0},W=/\/+/g,Y=[],L={current:null},V={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:T,IsSomeRendererActing:{current:!1},assign:E};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return g(e,n,null,t,r),n},forEach:function(e,t,r){return null==e?e:(t=f(null,null,t,r),d(e,m,t),void p(t))},count:function(e){return d(e,function(){return null},null)},toArray:function(e){var t=[];return g(e,t,null,function(e){return e}),t},only:function(e){if(!s(e))throw Error(n(143));return e}},t.Component=o,t.Fragment=S,t.Profiler=C,t.PureComponent=a,t.StrictMode=k,t.Suspense=I,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error(n(267,e));var o=E({},e.props),i=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=T.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)$.call(t,s)&&!U.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:b,type:e.type,key:i,ref:a,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),e={$$typeof:N,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:D,_context:e},e.Consumer=e},t.createElement=u,t.createFactory=function(e){var t=u.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:F,render:e}},t.isValidElement=s,t.lazy=function(e){return{$$typeof:P,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:O,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return w().useCallback(e,t)},t.useContext=function(e,t){return w().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return w().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return w().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return w().useLayoutEffect(e,t)},t.useMemo=function(e,t){return w().useMemo(e,t)},t.useReducer=function(e,t,r){return w().useReducer(e,t,r)},t.useRef=function(e){return w().useRef(e)},t.useState=function(e){return w().useState(e)},t.version="16.14.0"},function(e,t,r){/** @license React v16.14.0
	 * react-dom-server.browser.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
"use strict";function n(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){if(-1===e._status){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)},function(t){0===e._status&&(e._status=2,e._result=t)})}}function i(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case P:return"Fragment";case O:return"Portal";case R:return"Profiler";case M:return"StrictMode";case U:return"Suspense";case W:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case j:return"Context.Consumer";case A:return"Context.Provider";case $:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case Y:return i(e.type);case V:return i(e.render);case L:if(e=1===e._status?e._result:null)return i(e)}return null}function a(e,t){for(var r=0|e._threadCount;r<=t;r++)e[r]=e._currentValue2,e._threadCount=r+1}function u(e,t,r,n){if(n&&(n=e.contextType,"object"==typeof n&&null!==n))return a(n,r),n[r];if(e=e.contextTypes){r={};for(var o in e)r[o]=t[o];t=r}else t=B;return t}function l(e){return!!X.call(Q,e)||!X.call(J,e)&&(K.test(e)?Q[e]=!0:(J[e]=!0,!1))}function s(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),"data-"!==e&&"aria-"!==e));default:return!1}}function c(e,t,r,n){if(null===t||"undefined"==typeof t||s(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function f(e,t,r,n,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i}function p(e){return e[1].toUpperCase()}function h(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=re.exec(e);if(t){var r,n="",o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}function d(e,t){var r,n=ee.hasOwnProperty(e)?ee[e]:null;return(r="style"!==e)&&(r=null!==n?0===n.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),r||c(e,t,n,!1)?"":null!==n?(e=n.attributeName,r=n.type,3===r||4===r&&!0===t?e+'=""':(n.sanitizeURL&&(t=""+t),e+'="'+(h(t)+'"'))):l(e)?e+'="'+(h(t)+'"'):""}function y(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t}function m(){if(null===oe)throw Error(n(321));return oe}function v(){if(0<ce)throw Error(n(312));return{memoizedState:null,queue:null,next:null}}function g(){return null===ae?null===ie?(ue=!1,ie=ae=v()):(ue=!0,ae=ie):null===ae.next?(ue=!1,ae=ae.next=v()):(ue=!0,ae=ae.next),ae}function w(e,t,r,n){for(;le;)le=!1,ce+=1,ae=null,r=e(t,n);return ie=oe=null,ce=0,ae=se=null,r}function E(e,t){return"function"==typeof t?t(e):t}function x(e,t,r){if(oe=m(),ae=g(),ue){var n=ae.queue;if(t=n.dispatch,null!==se&&(r=se.get(n),void 0!==r)){se.delete(n),n=ae.memoizedState;do n=e(n,r.action),r=r.next;while(null!==r);return ae.memoizedState=n,[n,t]}return[ae.memoizedState,t]}return e=e===E?"function"==typeof t?t():t:void 0!==r?r(t):t,ae.memoizedState=e,e=ae.queue={last:null,dispatch:null},e=e.dispatch=b.bind(null,oe,e),[ae.memoizedState,e]}function b(e,t,r){if(!(25>ce))throw Error(n(301));if(e===oe)if(le=!0,e={action:r,next:null},null===se&&(se=new Map),r=se.get(t),void 0===r)se.set(t,e);else{for(t=r;null!==t.next;)t=t.next;t.next=e}}function _(){}function S(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function k(e){if(void 0===e||null===e)return e;var t="";return F.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}function C(e,t){if(void 0===e)throw Error(n(152,i(t)||"Component"))}function D(e,t,r){function o(o,a){var l=a.prototype&&a.prototype.isReactComponent,s=u(a,t,r,l),c=[],f=!1,p={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===c)return null},enqueueReplaceState:function(e,t){f=!0,c=[t]},enqueueSetState:function(e,t){return null===c?null:void c.push(t)}};if(l){if(l=new a(o.props,s,p),"function"==typeof a.getDerivedStateFromProps){var h=a.getDerivedStateFromProps.call(null,o.props,l.state);null!=h&&(l.state=N({},l.state,h))}}else if(oe={},l=a(o.props,s,p),l=w(a,o.props,l,s),null==l||null==l.render)return e=l,void C(e,a);if(l.props=o.props,l.context=s,l.updater=p,p=l.state,void 0===p&&(l.state=p=null),"function"==typeof l.UNSAFE_componentWillMount||"function"==typeof l.componentWillMount)if("function"==typeof l.componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&l.UNSAFE_componentWillMount(),c.length){p=c;var d=f;if(c=null,f=!1,d&&1===p.length)l.state=p[0];else{h=d?p[0]:l.state;var y=!0;for(d=d?1:0;d<p.length;d++){var m=p[d];m="function"==typeof m?m.call(l,h,o.props,s):m,null!=m&&(y?(y=!1,h=N({},h,m)):N(h,m))}l.state=h}}else c=null;if(e=l.render(),C(e,a),"function"==typeof l.getChildContext&&(o=a.childContextTypes,"object"==typeof o)){var v=l.getChildContext();for(var g in v)if(!(g in o))throw Error(n(108,i(a)||"Unknown",g))}v&&(t=N({},t,v))}for(;F.isValidElement(e);){var a=e,l=a.type;if("function"!=typeof l)break;o(a,l)}return{child:e,context:t}}var N=r(1),F=r(2),I="function"==typeof Symbol&&Symbol.for,O=I?Symbol.for("react.portal"):60106,P=I?Symbol.for("react.fragment"):60107,M=I?Symbol.for("react.strict_mode"):60108,R=I?Symbol.for("react.profiler"):60114,A=I?Symbol.for("react.provider"):60109,j=I?Symbol.for("react.context"):60110,T=I?Symbol.for("react.concurrent_mode"):60111,$=I?Symbol.for("react.forward_ref"):60112,U=I?Symbol.for("react.suspense"):60113,W=I?Symbol.for("react.suspense_list"):60120,Y=I?Symbol.for("react.memo"):60115,L=I?Symbol.for("react.lazy"):60116,V=I?Symbol.for("react.block"):60121,z=I?Symbol.for("react.fundamental"):60117,q=I?Symbol.for("react.scope"):60119,H=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;H.hasOwnProperty("ReactCurrentDispatcher")||(H.ReactCurrentDispatcher={current:null}),H.hasOwnProperty("ReactCurrentBatchConfig")||(H.ReactCurrentBatchConfig={suspense:null});for(var B={},G=new Uint16Array(16),Z=0;15>Z;Z++)G[Z]=Z+1;G[15]=0;var K=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,X=Object.prototype.hasOwnProperty,J={},Q={},ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new f(e,0,!1,e,null,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new f(t,1,!1,e[1],null,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new f(e,2,!1,e.toLowerCase(),null,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new f(e,2,!1,e,null,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new f(e,3,!1,e.toLowerCase(),null,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new f(e,3,!0,e,null,!1)}),["capture","download"].forEach(function(e){ee[e]=new f(e,4,!1,e,null,!1)}),["cols","rows","size","span"].forEach(function(e){ee[e]=new f(e,6,!1,e,null,!1)}),["rowSpan","start"].forEach(function(e){ee[e]=new f(e,5,!1,e.toLowerCase(),null,!1)});var te=/[\-:]([a-z])/g;"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(te,p);ee[t]=new f(t,1,!1,e,null,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(te,p);ee[t]=new f(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(te,p);ee[t]=new f(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)}),["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new f(e,1,!1,e.toLowerCase(),null,!1)}),ee.xlinkHref=new f("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach(function(e){ee[e]=new f(e,1,!1,e.toLowerCase(),null,!0)});var re=/["'&<>]/,ne="function"==typeof Object.is?Object.is:y,oe=null,ie=null,ae=null,ue=!1,le=!1,se=null,ce=0,fe=0,pe={readContext:function(e){var t=fe;return a(e,t),e[t]},useContext:function(e){m();var t=fe;return a(e,t),e[t]},useMemo:function(e,t){if(oe=m(),ae=g(),t=void 0===t?null:t,null!==ae){var r=ae.memoizedState;if(null!==r&&null!==t){e:{var n=r[1];if(null===n)n=!1;else{for(var o=0;o<n.length&&o<t.length;o++)if(!ne(t[o],n[o])){n=!1;break e}n=!0}}if(n)return r[0]}}return e=e(),ae.memoizedState=[e,t],e},useReducer:x,useRef:function(e){oe=m(),ae=g();var t=ae.memoizedState;return null===t?(e={current:e},ae.memoizedState=e):t},useState:function(e){return x(E,e)},useLayoutEffect:function(){},useCallback:function(e){return e},useImperativeHandle:_,useEffect:_,useDebugValue:_,useResponder:function(e,t){return{props:t,responder:e}},useDeferredValue:function(e){return m(),e},useTransition:function(){return m(),[function(e){e()},!1]}},he={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},de={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ye=N({menuitem:!0},de),me={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ve=["Webkit","ms","Moz","O"];Object.keys(me).forEach(function(e){ve.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),me[t]=me[e]})});var ge=/([A-Z])/g,we=/^ms-/,Ee=F.Children.toArray,xe=H.ReactCurrentDispatcher,be={listing:!0,pre:!0,textarea:!0},_e=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Se={},ke={},Ce=Object.prototype.hasOwnProperty,De={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null},Ne=function(){function e(e,t){F.isValidElement(e)?e.type!==P?e=[e]:(e=e.props.children,e=F.isValidElement(e)?[e]:Ee(e)):e=Ee(e),e={type:null,domNamespace:he.html,children:e,childIndex:0,context:B,footer:""};var r=G[0];if(0===r){var o=G;r=o.length;var i=2*r;if(!(65536>=i))throw Error(n(304));var a=new Uint16Array(i);for(a.set(o),G=a,G[0]=r+1,o=r;o<i-1;o++)G[o]=o+1;G[i-1]=0}else G[0]=G[r];this.threadID=r,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;G[e]=G[0],G[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,r=e.type._context,n=this.threadID;a(r,n);var o=r[n];this.contextStack[t]=r,this.contextValueStack[t]=o,r[n]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],r=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=r},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=fe;fe=this.threadID;var r=xe.current;xe.current=pe;try{for(var o=[""],i=!1;o[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var a=this.threadID;G[a]=G[0],G[0]=a;break}var u=this.stack[this.stack.length-1];if(i||u.childIndex>=u.children.length){var l=u.footer;if(""!==l&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===u.type)this.currentSelectValue=null;else if(null!=u.type&&null!=u.type.type&&u.type.type.$$typeof===A)this.popProvider(u.type);else if(u.type===U){this.suspenseDepth--;var s=o.pop();if(i){i=!1;var c=u.fallbackFrame;if(!c)throw Error(n(303));this.stack.push(c),o[this.suspenseDepth]+="<!--$!-->";continue}o[this.suspenseDepth]+=s}o[this.suspenseDepth]+=l}else{var f=u.children[u.childIndex++],p="";try{p+=this.render(f,u.context,u.domNamespace)}catch(e){if(null!=e&&"function"==typeof e.then)throw Error(n(294));throw e}finally{}o.length<=this.suspenseDepth&&o.push(""),o[this.suspenseDepth]+=p}}return o[0]}finally{xe.current=r,fe=t}},t.render=function(e,t,r){if("string"==typeof e||"number"==typeof e)return r=""+e,""===r?"":this.makeStaticMarkup?h(r):this.previousWasTextNode?"<!-- -->"+h(r):(this.previousWasTextNode=!0,h(r));if(t=D(e,t,this.threadID),e=t.child,t=t.context,null===e||!1===e)return"";if(!F.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if(r=e.$$typeof,r===O)throw Error(n(257));throw Error(n(258,r.toString()))}return e=Ee(e),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}var i=e.type;if("string"==typeof i)return this.renderDOM(e,t,r);switch(i){case M:case T:case R:case W:case P:return e=Ee(e.props.children),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case U:throw Error(n(294))}if("object"==typeof i&&null!==i)switch(i.$$typeof){case $:oe={};var u=i.render(e.props,e.ref);return u=w(i.render,e.props,u,e.ref),u=Ee(u),this.stack.push({type:null,domNamespace:r,children:u,childIndex:0,context:t,footer:""}),"";case Y:return e=[F.createElement(i.type,N({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case A:return i=Ee(e.props.children),r={type:e,domNamespace:r,children:i,childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(r),"";case j:i=e.type,u=e.props;var l=this.threadID;return a(i,l),i=Ee(u.children(i[l])),this.stack.push({type:e,domNamespace:r,children:i,childIndex:0,context:t,footer:""}),"";case z:throw Error(n(338));case L:switch(i=e.type,o(i),i._status){case 1:return e=[F.createElement(i._result,N({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case 2:throw i._result;default:throw Error(n(295))}case q:throw Error(n(343))}throw Error(n(130,null==i?i:typeof i,""))},t.renderDOM=function(e,t,r){var o=e.type.toLowerCase();if(r===he.html&&S(o),!Se.hasOwnProperty(o)){if(!_e.test(o))throw Error(n(65,o));Se[o]=!0}var i=e.props;if("input"===o)i=N({type:void 0},i,{defaultChecked:void 0,defaultValue:void 0,value:null!=i.value?i.value:i.defaultValue,checked:null!=i.checked?i.checked:i.defaultChecked});else if("textarea"===o){var a=i.value;if(null==a){a=i.defaultValue;var u=i.children;if(null!=u){if(null!=a)throw Error(n(92));if(Array.isArray(u)){if(!(1>=u.length))throw Error(n(93));u=u[0]}a=""+u}null==a&&(a="")}i=N({},i,{value:void 0,children:""+a})}else if("select"===o)this.currentSelectValue=null!=i.value?i.value:i.defaultValue,i=N({},i,{value:void 0});else if("option"===o){u=this.currentSelectValue;var s=k(i.children);if(null!=u){var c=null!=i.value?i.value+"":s;if(a=!1,Array.isArray(u)){for(var f=0;f<u.length;f++)if(""+u[f]===c){a=!0;break}}else a=""+u===c;i=N({selected:void 0,children:void 0},i,{selected:a,children:s})}}if(a=i){if(ye[o]&&(null!=a.children||null!=a.dangerouslySetInnerHTML))throw Error(n(137,o,""));if(null!=a.dangerouslySetInnerHTML){if(null!=a.children)throw Error(n(60));if(!("object"==typeof a.dangerouslySetInnerHTML&&"__html"in a.dangerouslySetInnerHTML))throw Error(n(61))}if(null!=a.style&&"object"!=typeof a.style)throw Error(n(62,""))}a=i,u=this.makeStaticMarkup,s=1===this.stack.length,c="<"+e.type;for(x in a)if(Ce.call(a,x)){var p=a[x];if(null!=p){if("style"===x){f=void 0;var y="",m="";for(f in p)if(p.hasOwnProperty(f)){var v=0===f.indexOf("--"),g=p[f];if(null!=g){if(v)var w=f;else if(w=f,ke.hasOwnProperty(w))w=ke[w];else{var E=w.replace(ge,"-$1").toLowerCase().replace(we,"-ms-");w=ke[w]=E}y+=m+w+":",m=f,v=null==g||"boolean"==typeof g||""===g?"":v||"number"!=typeof g||0===g||me.hasOwnProperty(m)&&me[m]?(""+g).trim():g+"px",y+=v,m=";"}}p=y||null}f=null;e:if(v=o,g=a,-1===v.indexOf("-"))v="string"==typeof g.is;else switch(v){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":v=!1;break e;default:v=!0}v?De.hasOwnProperty(x)||(f=x,f=l(f)&&null!=p?f+'="'+(h(p)+'"'):""):f=d(x,p),f&&(c+=" "+f)}}u||s&&(c+=' data-reactroot=""');var x=c;a="",de.hasOwnProperty(o)?x+="/>":(x+=">",a="</"+e.type+">");e:{if(u=i.dangerouslySetInnerHTML,null!=u){if(null!=u.__html){u=u.__html;break e}}else if(u=i.children,"string"==typeof u||"number"==typeof u){u=h(u);break e}u=null}return null!=u?(i=[],be.hasOwnProperty(o)&&"\n"===u.charAt(0)&&(x+="\n"),x+=u):i=Ee(i.children),e=e.type,r=null==r||"http://www.w3.org/1999/xhtml"===r?S(e):"http://www.w3.org/2000/svg"===r&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":r,this.stack.push({domNamespace:r,type:o,children:i,childIndex:0,context:t,footer:a}),this.previousWasTextNode=!1,x},e}(),Fe={renderToString:function(e){e=new Ne(e,!1);try{return e.read(1/0)}finally{e.destroy()}},renderToStaticMarkup:function(e){e=new Ne(e,!0);try{return e.read(1/0)}finally{e.destroy()}},renderToNodeStream:function(){throw Error(n(207))},renderToStaticNodeStream:function(){throw Error(n(208))},version:"16.14.0"};e.exports=Fe.default||Fe},,,function(e,t,r){"use strict";e.exports=r(9)}]);
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-dom"), require("react"), require("react-dom/server"));
	else if(typeof define === 'function' && define.amd)
		define(["react-dom", "react", "react-dom/server"], factory);
	else if(typeof exports === 'object')
		exports["ReactRailsUJS"] = factory(require("react-dom"), require("react"), require("react-dom/server"));
	else
		root["ReactRailsUJS"] = factory(root["ReactDOM"], root["React"], root["ReactDOMServer"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// Assume className is simple and can be found at top-level (window).
// Fallback to eval to handle cases like 'My.React.ComponentName'.
// Also, try to gracefully import Babel 6 style default exports
var topLevel = typeof window === "undefined" ? this : window;

module.exports = function(className) {
  var constructor;
  // Try to access the class globally first
  constructor = topLevel[className];

  // If that didn't work, try eval
  if (!constructor) {
    constructor = eval(className);
  }

  // Lastly, if there is a default attribute try that
  if (constructor && constructor['default']) {
    constructor = constructor['default'];
  }

  return constructor;
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var nativeEvents = __webpack_require__(8)
var pjaxEvents = __webpack_require__(9)
var turbolinksEvents = __webpack_require__(10)
var turbolinksClassicDeprecatedEvents = __webpack_require__(12)
var turbolinksClassicEvents = __webpack_require__(11)

// see what things are globally available
// and setup event handlers to those things
module.exports = function(ujs) {
  if (ujs.handleEvent) {
    // We're calling this a second time -- remove previous handlers
    if (typeof Turbolinks !== "undefined" && typeof Turbolinks.EVENTS !== "undefined") {
      turbolinksClassicEvents.teardown(ujs);
    }
    turbolinksEvents.teardown(ujs);
    turbolinksClassicDeprecatedEvents.teardown(ujs);
    pjaxEvents.teardown(ujs);
    nativeEvents.teardown(ujs);
  }

  if ('addEventListener' in window) {
    ujs.handleEvent = function(eventName, callback) {
      document.addEventListener(eventName, callback);
    };
    ujs.removeEvent = function(eventName, callback) {
      document.removeEventListener(eventName, callback);
    };
  } else {
    ujs.handleEvent = function(eventName, callback) {
      window.attachEvent(eventName, callback);
    };
    ujs.removeEvent = function(eventName, callback) {
      window.detachEvent(eventName, callback);
    };
  }

  // Detect which kind of events to set up:
  if (typeof Turbolinks !== 'undefined' && Turbolinks.supported) {
    if (typeof Turbolinks.EVENTS !== 'undefined') {
      // Turbolinks.EVENTS is in classic version 2.4.0+
      turbolinksClassicEvents.setup(ujs)
    } else if (typeof Turbolinks.controller !== "undefined") {
      // Turbolinks.controller is in version 5+
      turbolinksEvents.setup(ujs);
    } else {
      turbolinksClassicDeprecatedEvents.setup(ujs);
    }
  } else if (typeof $ !== "undefined" && typeof $.pjax === 'function') {
    pjaxEvents.setup(ujs);
  } else {
    nativeEvents.setup(ujs);
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Make a function which:
// - First tries to require the name
// - Then falls back to global lookup
var fromGlobal = __webpack_require__(0)
var fromRequireContext = __webpack_require__(13)

module.exports = function(reqctx) {
  var fromCtx = fromRequireContext(reqctx)
  return function(className) {
    var component;
    try {
      // `require` will raise an error if this className isn't found:
      component = fromCtx(className)
    } catch (firstErr) {
      // fallback to global:
      try {
        component = fromGlobal(className)
      } catch (secondErr) {
        console.error(firstErr)
        console.error(secondErr)
      }
    }
    return component
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["supportsHydration"] = supportsHydration;
/* harmony export (immutable) */ __webpack_exports__["reactHydrate"] = reactHydrate;
/* harmony export (immutable) */ __webpack_exports__["createReactRootLike"] = createReactRootLike;
const ReactDOM = __webpack_require__(1)

function supportsHydration() {
  return typeof ReactDOM.hydrate === "function" || typeof ReactDOM.hydrateRoot === "function"
}

function reactHydrate(node, component) {
  if (typeof ReactDOM.hydrateRoot === "function") {
    return ReactDOM.hydrateRoot(node, component)
  } else {
    return ReactDOM.hydrate(component, node)
  }
}

function createReactRootLike(node) {
  return ReactDOM.createRoot ? ReactDOM.createRoot(node) : legacyReactRootLike(node)
}

function legacyReactRootLike(node) {
  const root = {
    render(component) {
      return ReactDOM.render(component, node)
    }
  }
  return root
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(5)
var ReactDOM = __webpack_require__(1)
var ReactDOMServer = __webpack_require__(6)

var detectEvents = __webpack_require__(2)
var constructorFromGlobal = __webpack_require__(0)
var constructorFromRequireContextWithGlobalFallback = __webpack_require__(3)
const { supportsHydration, reactHydrate, createReactRootLike } = __webpack_require__(4)

var ReactRailsUJS = {
  // This attribute holds the name of component which should be mounted
  // example: `data-react-class="MyApp.Items.EditForm"`
  CLASS_NAME_ATTR: 'data-react-class',

  // This attribute holds JSON stringified props for initializing the component
  // example: `data-react-props="{\"item\": { \"id\": 1, \"name\": \"My Item\"} }"`
  PROPS_ATTR: 'data-react-props',

  // This attribute holds which method to use between: ReactDOM.hydrate, ReactDOM.render
  RENDER_ATTR: 'data-hydrate',

  // A unique identifier to identify a node
  CACHE_ID_ATTR: "data-react-cache-id",

  TURBOLINKS_PERMANENT_ATTR: "data-turbolinks-permanent",

  // If jQuery is detected, save a reference to it for event handlers
  jQuery: (typeof window !== 'undefined') && (typeof window.jQuery !== 'undefined') && window.jQuery,

  components: {},

  // helper method for the mount and unmount methods to find the
  // `data-react-class` DOM elements
  findDOMNodes: function(searchSelector) {
    var classNameAttr = ReactRailsUJS.CLASS_NAME_ATTR
    // we will use fully qualified paths as we do not bind the callbacks
    var selector, parent;

    switch (typeof searchSelector) {
      case 'undefined':
        selector = '[' + classNameAttr + ']';
        parent = document;
        break;
      case 'object':
        selector = '[' + classNameAttr + ']';
        parent = searchSelector;
        break;
      case 'string':
        selector = searchSelector + '[' + classNameAttr + '], ' +
                   searchSelector + ' [' + classNameAttr + ']';
        parent = document;
        break
      default:
        break;
    }

    if (ReactRailsUJS.jQuery) {
      return ReactRailsUJS.jQuery(selector, parent);
    } else {
      return parent.querySelectorAll(selector);
    }
  },

  // Get the constructor for a className (returns a React class)
  // Override this function to lookup classes in a custom way,
  // the default is ReactRailsUJS.ComponentGlobal
  getConstructor: constructorFromGlobal,

  // Given a Webpack `require.context`,
  // try finding components with `require`,
  // then falling back to global lookup.
  useContext: function(requireContext) {
    this.getConstructor = constructorFromRequireContextWithGlobalFallback(requireContext)
  },

  // Render `componentName` with `props` to a string,
  // using the specified `renderFunction` from `react-dom/server`.
  serverRender: function(renderFunction, componentName, props) {
    var componentClass = this.getConstructor(componentName)
    var element = React.createElement(componentClass, props)
    return ReactDOMServer[renderFunction](element)
  },

  // Within `searchSelector`, find nodes which should have React components
  // inside them, and mount them with their props.
  mountComponents: function(searchSelector) {
    var ujs = ReactRailsUJS
    var nodes = ujs.findDOMNodes(searchSelector);

    for (var i = 0; i < nodes.length; ++i) {
      var node = nodes[i];
      var className = node.getAttribute(ujs.CLASS_NAME_ATTR);
      var constructor = ujs.getConstructor(className);
      var propsJson = node.getAttribute(ujs.PROPS_ATTR);
      var props = propsJson && JSON.parse(propsJson);
      var hydrate = node.getAttribute(ujs.RENDER_ATTR);
      var cacheId = node.getAttribute(ujs.CACHE_ID_ATTR);
      var turbolinksPermanent = node.hasAttribute(ujs.TURBOLINKS_PERMANENT_ATTR);

      if (!constructor) {
        var message = "Cannot find component: '" + className + "'"
        if (console && console.log) {
          console.log("%c[react-rails] %c" + message + " for element", "font-weight: bold", "", node)
        }
        throw new Error(message + ". Make sure your component is available to render.")
      } else {
        var component = this.components[cacheId];
        if(component === undefined) {
          component = React.createElement(constructor, props);
          if(turbolinksPermanent) {
            this.components[cacheId] = component;
          }
        }

        if (hydrate && supportsHydration()) {
          component = reactHydrate(node, component);
        } else {
          const root = createReactRootLike(node)
          component = root.render(component);
        }
      }
    }
  },

  // Within `searchSelector`, find nodes which have React components
  // inside them, and unmount those components.
  unmountComponents: function(searchSelector) {
    var nodes = ReactRailsUJS.findDOMNodes(searchSelector);

    for (var i = 0; i < nodes.length; ++i) {
      var node = nodes[i];
      ReactDOM.unmountComponentAtNode(node);
    }
  },

  // Check the global context for installed libraries
  // and figure out which library to hook up to (pjax, Turbolinks, jQuery)
  // This is called on load, but you can call it again if needed
  // (It will unmount itself)
  detectEvents: function() {
    detectEvents(this)
  },
}

// These stable references are so that handlers can be added and removed:
ReactRailsUJS.handleMount = function(e) {
  var target = undefined;
  if (e && e.target) {
    target = e.target;
  }
  ReactRailsUJS.mountComponents(target);
}
ReactRailsUJS.handleUnmount = function(e) {
  var target = undefined;
  if (e && e.target) {
    target = e.target;
  }
  ReactRailsUJS.unmountComponents(target);
}


if (typeof window !== "undefined") {
  // Only setup events for browser (not server-rendering)
  ReactRailsUJS.detectEvents()
}

// It's a bit of a no-no to populate the global namespace,
// but we really need it!
// We need access to this object for server rendering, and
// we can't do a dynamic `require`, so we'll grab it from here:
self.ReactRailsUJS = ReactRailsUJS

module.exports = ReactRailsUJS


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  // Attach handlers to browser events to mount
  // (There are no unmount handlers since the page is destroyed on navigation)
  setup: function(ujs) {
    if ('addEventListener' in window) {
      ujs.handleEvent('DOMContentLoaded', ujs.handleMount);
    } else {
      // add support to IE8 without jQuery
      ujs.handleEvent('onload', ujs.handleMount);
    }
  },

  teardown: function(ujs) {
    ujs.removeEvent('DOMContentLoaded', ujs.handleMount);
    ujs.removeEvent('onload', ujs.handleMount);
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  // pjax support
  setup: function(ujs) {
    ujs.handleEvent('ready', ujs.handleMount);
    ujs.handleEvent('pjax:end', ujs.handleMount);
    ujs.handleEvent('pjax:beforeReplace', ujs.handleUnmount);
  },

  teardown: function(ujs) {
    ujs.removeEvent('ready', ujs.handleMount);
    ujs.removeEvent('pjax:end', ujs.handleMount);
    ujs.removeEvent('pjax:beforeReplace', ujs.handleUnmount);
  },
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  // Turbolinks 5+ got rid of named events (?!)
  setup: function(ujs) {
  	ujs.handleEvent('turbolinks:load', ujs.handleMount);
  },

  teardown: function(ujs) {
  	ujs.removeEvent('turbolinks:load', ujs.handleMount);
  },
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  // Attach handlers to Turbolinks-Classic events
  // for mounting and unmounting components
  setup: function(ujs) {
    ujs.handleEvent(Turbolinks.EVENTS.CHANGE, ujs.handleMount);
    ujs.handleEvent(Turbolinks.EVENTS.BEFORE_UNLOAD, ujs.handleUnmount);
  },
  teardown: function(ujs) {
    ujs.removeEvent(Turbolinks.EVENTS.CHANGE, ujs.handleMount);
    ujs.removeEvent(Turbolinks.EVENTS.BEFORE_UNLOAD, ujs.handleUnmount);
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  // Before Turbolinks 2.4.0, Turbolinks didn't
  // have named events and didn't have a before-unload event.
  // Also, it didn't work with the Turbolinks cache, see
  // https://github.com/reactjs/react-rails/issues/87
  setup: function(ujs) {
    Turbolinks.pagesCached(0)
    ujs.handleEvent('page:change', ujs.handleMount);
    ujs.handleEvent('page:receive', ujs.handleUnmount);
  },
  teardown: function(ujs) {
    ujs.removeEvent('page:change', ujs.handleMount);
    ujs.removeEvent('page:receive', ujs.handleUnmount);
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// Load React components by requiring them from "components/", for example:
//
// - "pages/index" -> `require("components/pages/index")`
// - "pages/show.Header" -> `require("components/pages/show").Header`
// - "pages/show.Body.Content" -> `require("components/pages/show").Body.Content`
//
module.exports = function(reqctx) {
  return function(className) {
    var parts = className.split(".")
    var filename = parts.shift()
    var keys = parts
    // Load the module:
    var component = reqctx("./" + filename)
    // Then access each key:
    keys.forEach(function(k) {
      component = component[k]
    })
    // support `export default`
    if (component.__esModule) {
      component = component["default"]
    }
    return component
  }
}


/***/ })
/******/ ]);
});



//
// By default, this file is loaded for server-side rendering.
// It should require your components and any dependencies.;