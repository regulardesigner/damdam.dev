(window.webpackJsonp=window.webpackJsonp||[]).push([[13,5],{297:function(t,n,e){var content=e(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(48).default)("41ea9162",content,!0,{sourceMap:!1})},300:function(t,n,e){"use strict";e(297)},301:function(t,n,e){var l=e(47)(!1);l.push([t.i,".navigation[data-v-55ac43c3]{display:flex;justify-content:space-between;align-items:flex-end;margin:2rem 0 4rem}.navigation__head-title[data-v-55ac43c3]{display:inline-block;font-size:2rem}.navigation-item[data-v-55ac43c3]{display:inline-block;padding:0 .4rem}.navigation-item[data-v-55ac43c3]:first-child{padding-left:0}.navigation-item[data-v-55ac43c3]:last-child{padding-right:0}",""]),t.exports=l},303:function(t,n,e){"use strict";e.r(n);e(300);var l=e(31),component=Object(l.a)({},(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"navigation"},[e("h1",{staticClass:"navigation__head-title"},[t._v("damdam.dev")]),t._v(" "),e("ul",{staticClass:"navigation-list"},[e("li",{staticClass:"navigation-item"},[e("a",{staticClass:"navigation-link home-link",attrs:{href:"/"}},[t._v("home")])]),t._v(" "),e("li",{staticClass:"navigation-item"},[e("a",{staticClass:"navigation-link home-link",attrs:{href:"/blog"}},[t._v("articles")])]),t._v(" "),e("li",{staticClass:"navigation-item"},[e("a",{staticClass:"navigation-link home-link",attrs:{href:"/notes"}},[t._v("notes")])])])])}],!1,null,"55ac43c3",null);n.default=component.exports},314:function(t,n,e){var content=e(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(48).default)("b64a6b2a",content,!0,{sourceMap:!1})},322:function(t,n,e){"use strict";e(314)},323:function(t,n,e){var l=e(47)(!1);l.push([t.i,".note-link{padding-bottom:2rem;display:block;text-decoration:none;transition:all .25s}",""]),t.exports=l},347:function(t,n,e){"use strict";e.r(n);var l=e(10),o=(e(49),{layout:"blog",asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function n(){var e,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,t.params,n.next=3,e("notes").only(["title","description","slug"]).sortBy("createdAt","desc").fetch();case 3:return l=n.sent,n.abrupt("return",{notes:l});case 5:case"end":return n.stop()}}),n)})))()},head:function(){return{link:[{rel:"canonical",href:"https://www.damdam.dev".concat(this.$route.path)}]}}}),r=o,c=(e(322),e(31)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("navigation"),t._v(" "),e("ul",t._l(t.notes,(function(n){return e("li",{key:n.slug,staticClass:"note-list"},[e("nuxt-link",{staticClass:"note-link",attrs:{to:{name:"notes-slug",params:{slug:n.slug}}}},[e("h2",{staticClass:"title"},[t._v(t._s(n.title))]),t._v(" "),e("p",{staticClass:"description"},[t._v("➥ "+t._s(n.description))])])],1)})),0)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Navigation:e(303).default})}}]);