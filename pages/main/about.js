require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([19],{78:function(e,t,n){"use strict";var i=o(n(2)),s=o(n(79));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(s.default))},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(81),s=n.n(i),o=n(82),a=!1;var r=function(e){a||n(80)},c=n(0)(s.a,o.a,r,null,null);c.options.__file="..\\..\\..\\..\\data\\work\\ShareChat\\uniapp\\pages\\main\\about.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] about.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},80:function(e,t){},81:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{providerList:[],version:this.app.envConfig.VERSION}},onLoad:function(){var t=this;e.getProvider({service:"share",success:function(e){for(var n=[],i=0;i<e.provider.length;i++)switch(e.provider[i]){case"weixin":n.push({name:"分享到微信好友",id:"weixin"}),n.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":n.push({name:"分享到QQ",id:"qq"})}t.providerList=n},fail:function(e){console.log("获取登录通道失败"+JSON.stringify(e))}})},methods:{save:function(){e.showActionSheet({itemList:["保存图片到相册"],success:function(){plus.gallery.save("https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/app_download.png",function(){e.showToast({title:"保存成功",icon:"none"})},function(){e.showToast({title:"保存失败，请重试！",icon:"none"})})}})},share:function(t){var n=this;if(0!==this.providerList.length){var i=this.providerList.map(function(e){return e.name});e.showActionSheet({itemList:i,success:function(t){e.share({provider:n.providerList[t.tapIndex].id,scene:n.providerList[t.tapIndex].type&&"WXSenceTimeline"===n.providerList[t.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"欢迎使用<享事>",summary:"享事是一个专注分享事息的工具",imageUrl:"http://walle.h2ome.cn/static/icons/48x48.png",href:"http://walle.h2ome.cn/static/apidoc/index.html",success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(t){e.showModal({content:t.errMsg,showCancel:!1})}})}})}else e.showModal({title:"当前环境无分享渠道!",showCancel:!1})},checkUpdate:function(){var t=this.app,n={v:t.envConfig.VERSION,p:t.envConfig.PALTFORM};t.httpGet("/api/version/check",n,function(t){if(t.data.data.need_update){var n=t.data.data.download_url,i=t.data.data.detail;e.showModal({title:"更新提示",content:i,success:function(e){e.confirm&&plus.runtime.openURL(n)}})}else e.showToast({title:"已经是最新版本",icon:"none"})})}}}}).call(t,n(1).default)},82:function(e,t,n){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"about"},[t("view",{staticClass:"content"},[t("view",{staticClass:"version"},[this._v("\n          当前版本："),t("text",{staticClass:"code"},[this._v(" "+this._s(this.version)+" ")])]),t("button",{attrs:{type:"primary",eventid:"Ow2-0"},on:{tap:this.checkUpdate}},[this._v("检查更新")])],1)])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};t.a=s}},[78]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/main/about.js.map