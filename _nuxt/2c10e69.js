(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(t,e,o){var content=o(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("0871c9f3",content,!0,{sourceMap:!1})},183:function(t,e,o){var content=o(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("56b15182",content,!0,{sourceMap:!1})},186:function(t,e,o){var content=o(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("21652d60",content,!0,{sourceMap:!1})},202:function(t,e,o){"use strict";var r={},n=(o(278),o(23)),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blog"},[e("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},203:function(t,e,o){"use strict";o(280);var r=o(23),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"default"},[o("themes-checkbox"),t._v(" "),o("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{ThemesCheckbox:o(204).default})},204:function(t,e,o){"use strict";o.r(e);o(24),o(136),o(142),o(14),o(106),o(184);var r={data:function(){return{isDarkTheme:"dark"===this.getCookie("theme")}},methods:{toggleTheme:function(){this.isDarkTheme=!this.isDarkTheme,this.setCookie("theme",this.isDarkTheme?"dark":"light",365)},setCookie:function(t,e,o){var r="";if(o){var n=new Date;n.setTime(n.getTime()+24*o*60*60*1e3),r="; expires="+n.toUTCString()}document.cookie=t+"="+(e||"")+r+"; path=/"},getCookie:function(t){var e=t+"=",o=document.cookie.split(";").find((function(t){return t.trim().startsWith(e)}));if(o)return o.substring(e.length+1);var r="dark";return this.setCookie(t,r,365),r}}},n=(o(295),o(23)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{id:"website-themes",for:"theme-toggle"}},[o("input",{attrs:{id:"theme-toggle",type:"checkbox"},domProps:{checked:t.isDarkTheme},on:{change:t.toggleTheme}}),t._v("\n  Theme switcher ("+t._s(t.isDarkTheme?"dark":"light")+")\n")])}),[],!1,null,null,null);e.default=component.exports},206:function(t,e,o){o(207),t.exports=o(208)},274:function(t,e,o){var content=o(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("5aecda6a",content,!0,{sourceMap:!1})},275:function(t,e,o){var r=o(32)(!1);r.push([t.i,":root{--primary-color:#007bff;--secondary-color:#6c757d;--background-color:#f8f9fa;--text-color:#212529}body[\\:has\\(input\\%23theme-toggle\\[type\\%3D\\%22checkbox\\%22\\]\\:checked\\)]{--primary-color:#6c757d;--secondary-color:#007bff;--background-color:#212529;--text-color:#f8f9fa}body:has(input#theme-toggle[type=checkbox]:checked){--primary-color:#6c757d;--secondary-color:#007bff;--background-color:#212529;--text-color:#f8f9fa}",""]),t.exports=r},278:function(t,e,o){"use strict";o(182)},279:function(t,e,o){var r=o(32)(!1);r.push([t.i,".blog{padding:1.4rem 2rem}@media (min-width:768px){.blog{max-width:768px;margin:0 auto;padding:2rem 4rem}}",""]),t.exports=r},280:function(t,e,o){"use strict";o(183)},281:function(t,e,o){var r=o(32),n=o(282),f=o(283),l=o(284),c=o(285),m=o(286),d=o(287),h=o(288),x=o(289),v=o(290),k=o(291),U=o(292),w=r(!1),y=n(f),_=n(f,{hash:"?#iefix"}),T=n(l),C=n(c),D=n(m),M=n(d,{hash:"#Outfit"}),O=n(h),z=n(h,{hash:"?#iefix"}),j=n(x),E=n(v),$=n(k),J=n(U,{hash:"#Outfit"});w.push([t.i,'@font-face{font-family:"Outfit";font-style:normal;font-weight:400;font-display:swap;-webkit-font-smooth:never;unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd;src:url('+y+');src:local(""),url('+_+') format("embedded-opentype"),url('+T+') format("woff2"),url('+C+') format("woff"),url('+D+') format("truetype"),url('+M+') format("svg")}@font-face{font-family:"Outfit";font-style:normal;font-weight:900;font-display:swap;-webkit-font-smooth:never;unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd;src:url('+O+');src:local(""),url('+z+') format("embedded-opentype"),url('+j+') format("woff2"),url('+E+') format("woff"),url('+$+') format("truetype"),url('+J+') format("svg")}html{font-size:.625em}body{background:var(--background-color);font-size:1.6rem;color:var(--text-color);font-family:"Outfit",sans-serif;font-weight:400}.default{letter-spacing:.05rem;padding:1.4rem 2rem;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.italic{font-style:italic}.stroke{opacity:.6;text-decoration:line-through}a{color:var(--text-color)}.home-link{text-decoration:none;border-bottom:thin dotted var(--text-color)}.home-link:hover{border-bottom:thin dotted transparent;color:var(--text-color);box-shadow:inset 0 -100px 0 #dfd481}h1{font-size:3rem}h2{margin-top:1.4rem;margin-bottom:.2rem;font-size:1.6rem}h1,h2,h3,h4,h5,h6{letter-spacing:.02rem;font-weight:900}.text-current{letter-spacing:.05rem;font-weight:400}.mb-2{margin-bottom:2rem}.mb-3{margin-bottom:3rem}.mb-4{margin-bottom:4rem}@media (min-width:576px){h1{font-size:5rem}h2{margin-top:2rem;margin-bottom:.5rem;font-size:3.4rem}}@media (min-width:768px){.default{max-width:768px;margin:0 auto;padding:2rem 4rem}}',""]),t.exports=w},283:function(t,e,o){t.exports=o.p+"fonts/outfit-v6-latin-regular.319d57e.eot"},284:function(t,e,o){t.exports=o.p+"fonts/outfit-v6-latin-regular.c0e2986.woff2"},285:function(t,e,o){t.exports=o.p+"fonts/outfit-v6-latin-regular.e8b5927.woff"},286:function(t,e,o){t.exports=o.p+"fonts/outfit-v6-latin-regular.e9b6ada.ttf"},287:function(t,e,o){t.exports=o.p+"img/outfit-v6-latin-regular.e89ff24.svg"},288:function(t,e,o){t.exports=o.p+"fonts/outfit-v6-latin-900.cc32969.eot"},289:function(t,e,o){t.exports=o.p+"fonts/outfit-v6-latin-900.fff8267.woff2"},290:function(t,e,o){t.exports=o.p+"fonts/outfit-v6-latin-900.7911d44.woff"},291:function(t,e,o){t.exports=o.p+"fonts/outfit-v6-latin-900.5a6f2be.ttf"},292:function(t,e,o){t.exports=o.p+"img/outfit-v6-latin-900.6c66554.svg"},295:function(t,e,o){"use strict";o(186)},296:function(t,e,o){var r=o(32)(!1);r.push([t.i,"#website-themes{position:fixed;top:1rem;right:1rem;z-index:1000}#theme-toggle{display:none}",""]),t.exports=r}},[[206,16,1,17]]]);