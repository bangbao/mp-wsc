require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([12],{58:function(t,e,a){"use strict";var n=s(a(2)),i=s(a(59));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},59:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(61),i=a.n(n),s=a(62),o=!1;var l=function(t){o||a(60)},u=a(0)(i.a,s.a,l,null,null);u.options.__file="..\\..\\..\\..\\data\\work\\ShareChat\\uniapp\\pages\\task\\edit.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},60:function(t,e){},61:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{taskInfo:{stime:null,etime:null,title:"",content:""},taskId:null}},onLoad:function(t){this.task_id=t.id,this.taskInfo=this.app.globalData.taskInfo},methods:{resetPageData:function(){var t=this.app,e={stime:t.getToday(),etime:t.getDeltaDay(1),title:"",content:""};this.taskInfo=e},bindChangeValue:function(t){var e=t.detail.value,a=t.currentTarget.dataset.name;this.taskInfo[a]=e},applySubmit:function(e){var a=this.taskInfo,n=a.title.length,i=a.content.length;if(console.log(n,i),n<2|n>20){var s="标题字数应为2~20字";t.showToast({title:s,icon:"none"})}else if(i<2|i>100){s="内容字数应为2~100字";t.showToast({title:s,icon:"none"})}else if(a.stime>a.etime)t.showToast({title:"有效期中开始时间不能小于结束时间",icon:"none"});else{this.app.httpPut("/api/task/modify",a,function(e){var a=e.data.data.id;t.showToast({title:"修改成功"}),t.redirectTo({url:"/pages/task/info?id="+a})})}}}}}).call(e,a(1).default)},62:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"container container-gray"},[a("view",{staticClass:"group"},[a("view",{staticClass:"group-header"},[t._v("基本信息")]),a("view",{staticClass:"group-body"},[a("view",{staticClass:"input-list"},[a("view",{staticClass:"input-item"},[a("text",{staticClass:"input-item-label"},[t._v("标题:")]),a("view",{staticClass:"input-item-content"},[a("input",{attrs:{"data-name":"title",placeholder:"请输入标题, 2~20字",maxlength:"20",value:t.taskInfo.title,eventid:"65o-0"},on:{input:t.bindChangeValue}})])]),a("view",{staticClass:"input-item input-item-full"},[a("text",{staticClass:"input-item-label"},[t._v("内容:")]),a("textarea",{attrs:{"data-name":"content",placeholder:"请输入内容, 2~100字",maxlength:"100",value:t.taskInfo.content,eventid:"vqw-1"},on:{input:t.bindChangeValue}})]),a("view",{staticClass:"input-item"},[a("text",{staticClass:"input-item-label"},[t._v("有效期:")]),a("picker",{staticClass:"input-item-content",attrs:{"data-name":"stime",value:t.stime,mode:"date",eventid:"4cb-2"},on:{change:t.bindChangeValue}},[t._v(t._s(t.taskInfo.stime))]),a("picker",{staticClass:"input-item-content",attrs:{"data-name":"etime",value:t.etime,mode:"date",eventid:"GQI-3"},on:{change:t.bindChangeValue}},[t._v(t._s(t.taskInfo.etime))])],1)])])]),a("view",{staticClass:"btn-submit"},[a("button",{staticClass:"btn-block btn-green",attrs:{eventid:"R9K-4"},on:{tap:t.applySubmit}},[t._v("提交")])],1)])};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i}},[58]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/task/edit.js.map