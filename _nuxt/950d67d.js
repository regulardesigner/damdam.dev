(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4,5,6],{292:function(t,e,n){var content=n(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("6f96938e",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n(292)},294:function(t,e,n){var r=n(32)(!1);r.push([t.i,".navigation[data-v-f1f9dfda]{display:flex;justify-content:space-between;align-items:flex-end;margin:2rem 0 4rem}.navigation__head-title[data-v-f1f9dfda]{display:inline-block;font-size:2rem}.navigation-item[data-v-f1f9dfda]{display:inline-block;padding:0 .4rem}.navigation-item[data-v-f1f9dfda]:first-child{padding-left:0}.navigation-item[data-v-f1f9dfda]:last-child{padding-right:0}",""]),t.exports=r},295:function(t,e,n){"use strict";n.r(e);n(293);var r=n(23),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navigation"},[n("h1",{staticClass:"navigation__head-title"},[t._v("damdam.dev")]),t._v(" "),n("ul",{staticClass:"navigation-list"},[n("li",{staticClass:"navigation-item"},[n("router-link",{staticClass:"navigation-link home-link",attrs:{to:"/"}},[t._v("home")])],1),t._v(" "),n("li",{staticClass:"navigation-item"},[n("router-link",{staticClass:"navigation-link home-link",attrs:{to:"/blog"}},[t._v("articles")])],1),t._v(" "),n("li",{staticClass:"navigation-item"},[n("router-link",{staticClass:"navigation-link home-link",attrs:{to:"/notes"}},[t._v("notes")])],1),t._v(" "),n("li",{staticClass:"navigation-item"},[n("router-link",{staticClass:"navigation-link home-link",attrs:{to:"/how-i-read-it"}},[t._v("how I read it")])],1),t._v(" "),n("li",{staticClass:"navigation-item"},[n("router-link",{staticClass:"navigation-link home-link",attrs:{to:"/timeline"}},[t._v("timeline")])],1)]),t._v(" "),n("themes-checkbox")],1)}),[],!1,null,"f1f9dfda",null);e.default=component.exports;installComponents(component,{ThemesCheckbox:n(202).default})},296:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("77c37b9f",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n.r(e);n(299);var r=n(23),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("damdam.dev")])])}],!1,null,"fe8a0996",null);e.default=component.exports;installComponents(component,{Header:n(297).default})},298:function(t,e,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("621ad7bf",content,!0,{sourceMap:!1})},299:function(t,e,n){"use strict";n(296)},300:function(t,e,n){var r=n(32)(!1);r.push([t.i,"@media (hover:none) and (pointer:coarse){header[data-v-fe8a0996]{margin-bottom:1rem}}",""]),t.exports=r},301:function(t,e,n){"use strict";n(298)},302:function(t,e,n){var r=n(32)(!1);r.push([t.i,".prev-next-section[data-v-7a7fa50e]{border-top:1px dashed hsla(0,0%,100%,.2);margin-top:2rem;padding-top:2rem;display:flex;justify-content:space-between}.next[data-v-7a7fa50e],.prev[data-v-7a7fa50e]{font-weight:700;font-size:1.2rem;border-radius:1rem;padding:1rem;background-color:#fff;color:#262a36;text-decoration:none}.next[data-v-7a7fa50e]:hover,.prev[data-v-7a7fa50e]:hover{text-decoration:underline}.down-left[data-v-7a7fa50e]{display:inline-block;transform:rotate(180deg)}",""]),t.exports=r},304:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},l=(n(301),n(23)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"prev-next-section"},[t.prev?n("NuxtLink",{staticClass:"prev",attrs:{to:{params:{slug:t.prev.slug}},title:t.prev.title}},[t._v("\n    Previous "),n("span",{staticClass:"curved-arrrow down-left"},[t._v("➦")])]):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"next",attrs:{to:{params:{slug:t.next.slug}},title:t.next.title}},[n("span",{staticClass:"curved-arrrow up-right"},[t._v("➥")]),t._v(" Next\n  ")]):n("span",[t._v(" ")])],1)}),[],!1,null,"7a7fa50e",null);e.default=component.exports},312:function(t,e,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("083745fe",content,!0,{sourceMap:!1})},325:function(t,e,n){"use strict";n(312)},326:function(t,e,n){var r=n(32)(!1);r.push([t.i,".article-title{border:4px solid #fff;padding:1.4rem;margin-bottom:2rem;-o-border-image:linear-gradient(45deg,#f8546b 25%,#ffdb60 50%,#00a093) 100;border-image:linear-gradient(45deg,#f8546b 25%,#ffdb60 50%,#00a093) 100}.category{font-size:1.4rem;background-color:#f0f0f0;color:#262a36;padding:.4rem;border-radius:.4rem}",""]),t.exports=r},351:function(t,e,n){"use strict";n.r(e);var r=n(22),l=n(10),o=(n(49),{layout:"blog",asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,article,o,c,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,l=t.params,e.next=3,n("articles",l.slug).fetch();case 3:return article=e.sent,e.next=6,n("articles").only(["title","slug","category"]).sortBy("createdAt","asc").surround(l.slug).fetch();case 6:return o=e.sent,c=Object(r.a)(o,2),d=c[0],f=c[1],e.abrupt("return",{article:article,prev:d,next:f});case 11:case"end":return e.stop()}}),e)})))()},head:function(){return{link:[{rel:"canonical",href:"https://www.damdam.dev".concat(this.$route.path)}]}},methods:{publicationDate:function(t){var e=new Date(t);return new Intl.DateTimeFormat("fr-FR").format(e)}}}),c=(n(325),n(23)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("Navigation")],1),t._v(" "),n("article",[n("h1",{staticClass:"article-title"},[t._v(t._s(t.article.title)+" "),n("small",{staticClass:"category"},[t._v(t._s(t.article.category))])]),t._v(" "),n("p",[t._v(t._s(t.article.description))]),t._v(" "),n("nuxt-content",{attrs:{document:t.article}}),t._v(" "),n("small",[t._v("Published: "+t._s(t.publicationDate(t.article.createdAt)))]),t._v(" "),n("prev-next-article",{attrs:{prev:t.prev,next:t.next}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(295).default,Header:n(297).default,PrevNextArticle:n(304).default})}}]);