require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{68:function(t,e,n){"use strict";var o=a(n(2)),r=a(n(69));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(r.default))},69:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(71),r=n.n(o),a=n(72),u=!1;var i=function(t){u||n(70)},s=n(0)(r.a,a.a,i,null,null);s.options.__file="..\\..\\..\\..\\data\\work\\ShareChat\\uniapp\\pages\\user\\info.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] info.vue: functional components are not supported with templates, they should use render functions."),e.default=s.exports},70:function(t,e){},71:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=n(3);e.default={computed:o({},(0,r.mapState)(["hasLogin","forcedLogin"])),methods:o({},(0,r.mapMutations)(["logout"]),{bindLogin:function(){t.navigateTo({url:"../user/login"})},bindLogout:function(){this.logout(),this.forcedLogin&&t.reLaunch({url:"../user/login"})}})}}).call(e,n(1).default)},72:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"btn-row"},[t.hasLogin?t._e():n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"W14-0"},on:{tap:t.bindLogin}},[t._v("登录")]),t.hasLogin?n("button",{attrs:{type:"default",eventid:"AzX-1"},on:{tap:t.bindLogout}},[t._v("退出登录")]):t._e()],1)])};o._withStripped=!0;var r={render:o,staticRenderFns:[]};e.a=r}},[68]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/info.js.map