require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{93:function(t,e,o){"use strict";var n=a(o(2)),i=a(o(94));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},94:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(96),i=o.n(n),a=o(97),r=!1;var s=function(t){r||o(95)},u=o(0)(i.a,a.a,s,null,null);u.options.__file="..\\..\\..\\..\\data\\work\\ShareChat\\uniapp\\pages\\user\\idauth.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] idauth.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},95:function(t,e){},96:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},i=o(3);e.default={onLoad:function(t){},onShow:function(){var e=this.app;if(!e.isLogin()&&this.gotoLogin)this.gotoLogin=!1,t.navigateTo({url:"../user/login"});else{var o=e.globalData.userInfo;this.userInfo=o||{},this.gotoLogin=!1}},data:function(){return{userInfo:{},gotoLogin:!0}},computed:n({},(0,i.mapState)(["hasLogin","forcedLogin"])),methods:n({},(0,i.mapMutations)(["logout"]),{bindLogin:function(){this.gotoLogin=!1,t.navigateTo({url:"../user/login"})},bindLogout:function(){this.userInfo={},this.app.updateUserInfo({}),this.logout(),this.forcedLogin&&t.reLaunch({url:"../user/login"})},gotoTaskAdd:function(e){t.navigateTo({url:"/pages/task/add"})},gotoUserEdit:function(e){t.navigateTo({url:"/pages/user/edit"})}})}}).call(e,o(1).default)},97:function(t,e,o){"use strict";var n=function(){var t=this.$createElement;this._self._c;return this._m(0)};n._withStripped=!0;var i={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"page"},[e("view",{staticClass:"uni-card"},[e("text",[this._v("实名认证")])])])}]};e.a=i}},[93]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/idauth.js.map