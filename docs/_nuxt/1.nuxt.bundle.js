webpackJsonp([1],{152:function(t,e,r){r(172);var n=r(17)(r(162),r(183),null,null);t.exports=n.exports},155:function(t,e,r){"use strict";var n=r(41),o=r.n(n),i={};e.a=o.a.create(i)},156:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={baseUrl:"/nuxt-blog"};e.default={data:function(){return{}},props:{to:String},computed:{path:function(){return n.baseUrl+this.to}},mounted:function(){console.log(this)}}},157:function(t,e,r){var n=r(17)(r(156),r(158),null,null);t.exports=n.exports},158:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:t.path}},[t._t("default")],2)},staticRenderFns:[]}},162:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(166),o=r.n(n),i=r(165),a=r.n(i),c=r(155),u=r(157),s=r.n(u);e.default={data:function(){var t=this;return a()(o.a.mark(function e(){var r,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("/api/posts/new");case 2:return r=t.sent,n=r.data,t.abrupt("return",{newPosts:n});case 5:case"end":return t.stop()}},e,t)}))()},components:{aLink:s.a},head:function(){return{title:"ffe hot post"}}}},165:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(18),i=n(o);e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){function n(o,a){try{var c=e[o](a),u=c.value}catch(t){return void r(t)}return c.done?void t(u):i.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)})}return n("next")})}}},166:function(t,e,r){t.exports=r(174)},172:function(t,e){},174:function(t,e,r){(function(e){var n="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(175),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}).call(e,r(42))},175:function(t,e,r){(function(e,r){!function(e){"use strict";function n(t,e,r,n){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),c=new h(n||[]);return a._invoke=f(t,r,c),a}function o(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function a(){}function c(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function e(r,n,i,a){var c=o(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&g.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},a)}a(c.arg)}function n(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return i=i?i.then(n,n):n()}"object"==typeof r&&r.domain&&(e=r.domain.bind(e));var i;this._invoke=n}function f(t,e,r){var n=E;return function(i,a){if(n===O)throw new Error("Generator is already running");if(n===P){if("throw"===i)throw a;return y()}for(;;){var c=r.delegate;if(c){if("return"===i||"throw"===i&&c.iterator[i]===d){r.delegate=null;var u=c.iterator.return;if(u){var s=o(u,c.iterator,a);if("throw"===s.type){i="throw",a=s.arg;continue}}if("return"===i)continue}var s=o(c.iterator[i],c.iterator,a);if("throw"===s.type){r.delegate=null,i="throw",a=s.arg;continue}i="next",a=d;var f=s.arg;if(!f.done)return n=j,f;r[c.resultName]=f.value,r.next=c.nextLoc,r.delegate=null}if("next"===i)r.sent=r._sent=a;else if("throw"===i){if(n===E)throw n=P,a;r.dispatchException(a)&&(i="next",a=d)}else"return"===i&&r.abrupt("return",a);n=O;var s=o(t,e,r);if("normal"===s.type){n=r.done?P:j;var f={value:s.arg,done:r.done};if(s.arg!==k)return f;r.delegate&&"next"===i&&(a=d)}else"throw"===s.type&&(n=P,i="throw",a=s.arg)}}}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function v(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=d,e.done=!0,e};return n.next=n}}return{next:y}}function y(){return{value:d,done:!0}}var d,m=Object.prototype,g=m.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",_=w.toStringTag||"@@toStringTag",b="object"==typeof t,L=e.regeneratorRuntime;if(L)return void(b&&(t.exports=L));L=e.regeneratorRuntime=b?t.exports:{},L.wrap=n;var E="suspendedStart",j="suspendedYield",O="executing",P="completed",k={},R={};R[x]=function(){return this};var N=Object.getPrototypeOf,G=N&&N(N(v([])));G&&G!==m&&g.call(G,x)&&(R=G);var C=c.prototype=i.prototype=Object.create(R);a.prototype=C.constructor=c,c.constructor=a,c[_]=a.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(C),t},L.awrap=function(t){return{__await:t}},u(s.prototype),L.AsyncIterator=s,L.async=function(t,e,r,o){var i=new s(n(t,e,r,o));return L.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(C),C[_]="Generator",C.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},L.values=v,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=d,this.done=!1,this.delegate=null,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=d)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),c=g.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?this.next=o.finallyLoc:this.complete(i),k},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),p(r),k}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:v(t),resultName:e,nextLoc:r},k}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,r(42),r(67))},183:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"page-wrapper container"},[r("h2",{staticClass:"title"},[t._v("\n      A place to share news and updates about ffe.\n  ")]),r("div",{staticClass:"main-wrap"},[r("ul",t._l(t.newPosts.data,function(e){return r("li",{staticClass:"col-md-6"},[r("div",{staticClass:"box"},[r("div",[r("a-link",{attrs:{to:"/posts/"+e.meta.id}},[r("h3",[t._v(t._s(e.meta.title))])])],1),r("div",{staticClass:"post-meta"},[r("span",[t._v(t._s(e.meta.strTag))]),r("span",[t._v(t._s(e.meta.createTime))])]),r("div",{staticClass:"post-summary",domProps:{innerHTML:t._s(e.summary)}})])])}))])])},staticRenderFns:[]}}});