(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{303:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("544d5cca",content,!0,{sourceMap:!1})},304:function(t,e,n){"use strict";n(303)},305:function(t,e,n){var l=n(32)(!1);l.push([t.i,".navigation[data-v-488b7ee3]{display:flex;justify-content:space-between;align-items:flex-end;margin:2rem 0 4rem}.navigation__head-title[data-v-488b7ee3]{display:inline-block;font-size:2rem}.navigation-item[data-v-488b7ee3]{display:inline-block;padding:0 .4rem}.navigation-item[data-v-488b7ee3]:first-child{padding-left:0}.navigation-item[data-v-488b7ee3]:last-child{padding-right:0}",""]),t.exports=l},306:function(t,e,n){"use strict";n.r(e);n(304);var l=n(23),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navigation"},[n("h1",{staticClass:"navigation__head-title"},[t._v("damdam.dev")]),t._v(" "),t._m(0),t._v(" "),n("themes-checkbox")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"navigation-list"},[n("li",{staticClass:"navigation-item"},[n("a",{staticClass:"navigation-link home-link",attrs:{href:"/"}},[t._v("home")])]),t._v(" "),n("li",{staticClass:"navigation-item"},[n("a",{staticClass:"navigation-link home-link",attrs:{href:"/blog"}},[t._v("articles")])]),t._v(" "),n("li",{staticClass:"navigation-item"},[n("a",{staticClass:"navigation-link home-link",attrs:{href:"/notes"}},[t._v("notes")])]),t._v(" "),n("li",{staticClass:"navigation-item"},[n("a",{staticClass:"navigation-link home-link",attrs:{href:"/how-i-read-it"}},[t._v("how I read it")])]),t._v(" "),n("li",{staticClass:"navigation-item"},[n("a",{staticClass:"navigation-link home-link",attrs:{href:"/timeline"}},[t._v("timeline")])])])}],!1,null,"488b7ee3",null);e.default=component.exports;installComponents(component,{ThemesCheckbox:n(202).default})},319:function(t,e,n){var content=n(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("11aa2c8e",content,!0,{sourceMap:!1})},328:function(t,e,n){"use strict";n(319)},329:function(t,e,n){var l=n(32)(!1);l.push([t.i,".article-link{padding-bottom:2rem;display:block;text-decoration:none;transition:all .25s}.article-link:hover .title{text-decoration:underline}.description{font-size:1.6rem}@media (hover:none) and (pointer:coarse){.article-link,.article-link:focus,.article-link:hover{background-color:hsla(0,0%,100%,.05);border-radius:1.8rem;padding:.6rem 2rem 2rem;margin-bottom:2rem}}",""]),t.exports=l},358:function(t,e,n){"use strict";n.r(e);var l=n(10),r=(n(49),{layout:"blog",asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles").only(["title","description","slug"]).sortBy("createdAt","desc").fetch();case 3:return l=e.sent,e.abrupt("return",{articles:l});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{link:[{rel:"canonical",href:"https://www.damdam.dev".concat(this.$route.path)}]}}}),o=(n(328),n(23)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navigation"),t._v(" "),n("ul",t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"article-list"},[n("nuxt-link",{staticClass:"article-link",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("h2",{staticClass:"title"},[t._v(t._s(article.title))]),t._v(" "),n("p",{staticClass:"description"},[t._v("➥ "+t._s(article.description))])])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(306).default})}}]);