webpackJsonp([2],{151:function(t,e,s){s(179);var a=s(17)(s(164),s(190),null,null);t.exports=a.exports},156:function(t,e,s){"use strict";var a=s(41),n=s.n(a),r={};e.a=n.a.create(r)},157:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={baseUrl:"/nuxt-blog"};e.default={data:function(){return{}},props:{to:String},computed:{path:function(){return a.baseUrl+this.to}},mounted:function(){}}},158:function(t,e,s){var a=s(17)(s(157),s(159),null,null);t.exports=a.exports},159:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:t.path}},[t._t("default")],2)},staticRenderFns:[]}},160:function(t,e,s){"use strict";e.a=function(t){return function(e){t.history&&history.pushState&&history.pushState(null,null,e)}}},164:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(156),n=s(160),r=s(158),i=s.n(r),u=void 0;e.default={data:function(t){var e=t.params,s=t.error;return a.a.get("/api/ask/"+e.id).then(function(t){return{issues:t.data,pageSize:10,currentPage:1,path:""}}).catch(function(t){s({statusCode:404,message:"Posts not found"})})},computed:{renderIssues:function(){var t=(this.currentPage-1)*this.pageSize,e=this.currentPage*this.pageSize;return this.issues.slice(t,e)},preClass:function(){return{previous:!0,disabled:1==this.currentPage}},nextClass:function(){var t=this.issues.length/this.pageSize,e=parseFloat(t)>parseInt(t)?parseInt(t)+1:parseInt(t);return{next:!0,disabled:this.currentPage==e}},hasPre:function(){return 1==this.currentPage},hasNext:function(){var t=this.issues.length/this.pageSize,e=parseFloat(t)>parseInt(t)?parseInt(t)+1:parseInt(t);return this.currentPage==e}},methods:{onPrePage:function(){if(!this.hasPre){this.currentPage-=1;var t=this.path+"?currentPage="+this.currentPage;u(t)}},onNextPage:function(){if(!this.hasNext){this.currentPage+=1;var t=this.path+"?currentPage="+this.currentPage;u(t)}}},components:{aLink:i.a},head:function(){return{title:"Asked questions"}},watch:{},mounted:function(){this.currentPage=Number(this.$route.query.currentPage||1),this.path=window.location.pathname,u=s.i(n.a)(window)}}},179:function(t,e){},190:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"page-wrapper container"},[s("h2",{staticClass:"title"},[t._v("\n      A place to discuss questions about web.\n  ")]),s("div",{staticClass:"main-wrap"},[s("ul",t._l(t.renderIssues,function(e){return s("li",{},[s("div",{staticClass:"box"},[s("div",{staticClass:"box-title"},[s("a-link",{attrs:{to:"/comments/"+e.number+"?title="+e.title}},[s("h3",[t._v(t._s(e.title))])])],1),s("div",{staticClass:"post-meta"}),s("div",{staticClass:"post-summary",domProps:{innerHTML:t._s(e.body)}})])])})),s("div",{staticClass:"footer"},[s("nav",{attrs:{"aria-label":""}},[s("ul",{staticClass:"pager"},[s("li",{class:t.preClass},[s("a",{attrs:{href:"javascript:void(0);"},on:{click:t.onPrePage}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("←")]),t._v(" Pre")])]),s("li",{class:t.nextClass},[s("a",{attrs:{href:"javascript:void(0);"},on:{click:t.onNextPage}},[t._v("Next "),s("span",{attrs:{"aria-hidden":"true"}},[t._v("→")])])])])])])])])},staticRenderFns:[]}}});