webpackJsonp([4],{"+4wp":function(t,a){},"4jfe":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Dd8w"),r=e.n(s),i=e("NYxO"),u={name:"Column",data:function(){return{userName:"",userAvatar:"",articles:[]}},computed:r()({},Object(i.b)(["user"]),{articleNum:function(){return this.articles.length}}),beforeRouteEnter:function(t,a,e){e(function(a){a.setDataByParams(t.params)})},watch:{$route:function(t){this.setDataByParams(t.params)}},methods:{setDataByParams:function(t){var a=t.user,e=t.articleId,s=this.$store.getters.getArticleById(e);if(s)this.userName=s.uname,this.userAvatar=s.uavatar,this.articles=this.$store.getters.getArticlesByUid(null,s.uname);else if(a){var r=this.$store.getters.getArticlesByUid(null,a);r.length?(this.userName=r[0].uname,this.userAvatar=r[0].uavatar):this.user&&(this.userName=this.user.name,this.userAvatar=this.user.avatar),this.articles=r}}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"blog-container"},[e("div",{staticClass:"blog-pages"},[e("router-view"),t._v(" "),e("div",{staticClass:"col-md-3 main-col pull-left"},[e("div",{staticClass:"panel panel-default corner-radius"},[e("div",{staticClass:"panel-body text-center topic-author-box blog-info"},[e("div",{staticClass:"image blog-cover"},[e("router-link",{attrs:{to:"/"+t.userName}},[e("img",{staticClass:"avatar-112 avatar img-thumbnail",attrs:{src:t.userAvatar}})])],1),t._v(" "),e("div",{staticClass:"blog-name"},[e("h4",[e("router-link",{attrs:{to:"/"+t.userName}},[t._v(t._s(t.userName)+" 的专栏")])],1)]),t._v(" "),e("hr"),t._v(" "),e("router-link",{attrs:{to:"/"+t.userName}},[e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"text-md fa fa-list-ul"}),t._v(" 专栏文章 ("+t._s(t.articleNum)+")")])])],1)])])],1)])},staticRenderFns:[]};var n=e("VU/8")(u,l,!1,function(t){e("+4wp")},"data-v-6730cc95",null);a.default=n.exports}});
//# sourceMappingURL=4.39bc7ce37f021eff025e.js.map