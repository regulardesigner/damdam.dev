(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{244:function(t,e,n){var content=n(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("77c37b9f",content,!0,{sourceMap:!1})},245:function(t,e,n){var content=n(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("2441d96d",content,!0,{sourceMap:!1})},246:function(t,e,n){"use strict";n.r(e);n(247);var r=n(30),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("damdam.dev")])])}],!1,null,"fe8a0996",null);e.default=component.exports;installComponents(component,{Header:n(246).default})},247:function(t,e,n){"use strict";n(244)},248:function(t,e,n){var r=n(39)(!1);r.push([t.i,"@media (hover:none) and (pointer:coarse){header[data-v-fe8a0996]{margin-bottom:1rem}}",""]),t.exports=r},249:function(t,e,n){"use strict";n(245)},250:function(t,e,n){var r=n(39)(!1);r.push([t.i,".navigation[data-v-114b129f]{margin:1rem 0;text-align:right}.navigation-item[data-v-114b129f]{display:inline-block;padding:0 .4rem}.navigation-item[data-v-114b129f]:first-child{padding-left:0}.navigation-item[data-v-114b129f]:last-child{padding-right:0}",""]),t.exports=r},252:function(t,e,n){"use strict";n.r(e);n(249);var r=n(30),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navigation"},[n("ul",{staticClass:"navigation-list"},[n("li",{staticClass:"navigation-item"},[n("a",{staticClass:"navigation-link",attrs:{href:"/"}},[t._v("home")])]),t._v(" "),n("li",{staticClass:"navigation-item"},[n("a",{staticClass:"navigation-link",attrs:{href:"/blog"}},[t._v("articles")])]),t._v(" "),n("li",{staticClass:"navigation-item"},[n("a",{staticClass:"navigation-link",attrs:{href:"/notes"}},[t._v("notes")])])])])}],!1,null,"114b129f",null);e.default=component.exports},256:function(t,e,n){var content=n(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("11aa2c8e",content,!0,{sourceMap:!1})},260:function(t,e,n){"use strict";n(256)},261:function(t,e,n){var r=n(39)(!1);r.push([t.i,".article-link{padding-bottom:2rem;display:block;text-decoration:none;transition:all .25s}.article-link:focus,.article-link:hover{background-color:hsla(0,0%,100%,.05);border-radius:1.8rem;padding:1rem 4rem 3rem}.description{font-size:1.6rem}@media (hover:none) and (pointer:coarse){.article-link,.article-link:focus,.article-link:hover{background-color:hsla(0,0%,100%,.05);border-radius:1.8rem;padding:.6rem 2rem 2rem;margin-bottom:2rem}}",""]),t.exports=r},280:function(t,e,n){"use strict";n.r(e);var r=n(6),l=(n(41),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles").only(["title","description","slug"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{link:[{rel:"canonical",href:"https://www.damdam.dev".concat(this.$route.path)}]}}}),o=(n(260),n(30)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{staticClass:"header"}),t._v(" "),n("Navigation"),t._v(" "),n("ul",t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"article-list"},[n("nuxt-link",{staticClass:"article-link",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("h2",{staticClass:"title"},[t._v(t._s(article.title))]),t._v(" "),n("p",{staticClass:"description"},[t._v("➥ "+t._s(article.description))])])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(246).default,Navigation:n(252).default})}}]);