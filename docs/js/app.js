(function(t){function e(e){for(var n,u,i=e[0],l=e[1],c=e[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);s&&s(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={app:0},a=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/makepuzz/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var s=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},5654:function(t,e,r){t.exports=r.p+"img/logo_c.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("main",[r("router-view")],1),r("footer",{staticClass:"footer"},[r("b-container",[r("p",{staticClass:"text-center"},[t._v("© 2020 – MakePuzz")])])],1)])},a=[],u={name:"App",mounted:function(){var t=this.$route;this.createTitleDesc(t)},methods:{createTitleDesc:function(t){t.meta.title?document.title="MakePuzz | "+t.meta.title:document.title="MakePuzz"}}},i=u,l=(r("034f"),r("2877")),c=Object(l["a"])(i,o,a,!1,null,null,null),s=c.exports,f=r("5f5b"),p=r("b1e0"),d=r("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",{staticClass:"mx-2 my-5"},[n("b-col",{attrs:{md:"4"}},[n("b-img",{staticClass:"mx-auto d-block",attrs:{src:r("5654"),height:"200",width:"200",alt:"MakePuzz logo"}})],1),n("b-col",{staticClass:"mt-3 mt-md-0",attrs:{md:"8"}},[n("h2",[t._v("We are MakePuzz")]),n("p",[n("i",[t._v("Make a buzz with making a puzzle")])]),n("p",[t._v("当ページは現在メンテナンス中です。お問い合わせは "),n("a",{attrs:{href:"https://twitter.com/MakePuzz_PR"}},[t._v("公式Twitter")]),t._v(" までお願いいたします。")])])],1),n("hr"),n("b-row",{staticClass:"mx-2 my-5"},[n("b-col",{attrs:{md:"7"}},[n("h3",[t._v("What's New")]),n("ul",[n("li",[t._v("2020-11-30：HPを開設しました")])])]),n("b-col",{staticClass:"mt-4 border-left",attrs:{md:"5"}},[n("Twitter")],1)],1)],1)},b=[],h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Timeline",{attrs:{id:t.twitterId,sourceType:"profile",options:{height:600}}})},v=[],w=r("7397"),_={components:{Timeline:w["Timeline"]},data:function(){return{twitterId:"MakePuzz_PR"}}},z=_,y=Object(l["a"])(z,h,v,!1,null,null,null),g=y.exports,P={name:"Home",components:{Twitter:g},data:function(){return{}}},k=P,x=Object(l["a"])(k,m,b,!1,null,null,null),O=x.exports;n["default"].use(d["a"]);var j=new d["a"]({mode:"history",base:"makepuzz/",routes:[{path:"/",name:"Home",component:O,meta:{title:"Home"}}]});r("f9e3"),r("2dd8");n["default"].use(f["a"]),n["default"].use(p["a"]),n["default"].config.productionTip=!1,new n["default"]({router:j,render:function(t){return t(s)}}).$mount("#app")},"85ec":function(t,e,r){}});