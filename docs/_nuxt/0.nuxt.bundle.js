webpackJsonp([0],{149:function(t,e,n){n(170);var r=n(17)(n(159),n(181),null,null);t.exports=r.exports},155:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:{to:String},computed:{path:function(){return this.to}},mounted:function(){}}},156:function(t,e,n){var r=n(17)(n(155),n(157),null,null);t.exports=r.exports},157:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.path}},[t._t("default")],2)},staticRenderFns:[]}},158:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(156),a=n.n(r);e.default={props:{navItems:{type:Array,required:!0},logo:{type:String}},components:{aLink:a.a}}},159:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(176),a=n.n(r),s=n(175),o=n.n(s);e.default={data:function(){return{navItems:[{text:"Home",url:"/"},{text:"Posts",url:"/page/1"},{text:"About",url:"/about"}]}},components:{MyFooter:o.a,WebNav:a.a}}},166:function(t,e){},168:function(t,e){},170:function(t,e){},175:function(t,e,n){n(166);var r=n(17)(null,n(177),null,null);t.exports=r.exports},176:function(t,e,n){n(168);var r=n(17)(n(158),n(179),null,null);t.exports=r.exports},177:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[t._v("\n  Visit our website for more documentation : "),n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank"}},[t._v("nuxtjs.org")])])}]}},179:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-default main-menu"},[n("div",{staticClass:"container"},[n("div",{staticClass:"logo"},[n("a-link",{attrs:{to:"/"}},[n("h2",[t._v("ffe")])])],1),n("div",{staticClass:"nav-item"},[n("ul",{staticClass:"nav navbar-nav navbar-right"},t._l(t.navItems,function(e){return n("li",[n("a-link",{attrs:{to:e.url}},[t._v(t._s(e.text))])],1)}))])])])},staticRenderFns:[]}},181:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("web-nav",{attrs:{"nav-items":t.navItems}}),n("nuxt"),n("my-footer")],1)},staticRenderFns:[]}}});