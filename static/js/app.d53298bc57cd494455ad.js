webpackJsonp([10],{HlNW:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("Dd8w"),o=n.n(a),s=n("NYxO"),i=n("Pfph");window.auth=i.a;var u={name:"Header",data:function(){return{}},computed:o()({},Object(s.c)(["isLogin","user"])),created:function(){this.checkLogin()},methods:o()({},Object(s.b)(["checkLogin","logout"]),{onLogout:function(){this.logout(),this.$router.push({path:"/"})}})},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:{login:t.isLogin,"no-login":!t.isLogin}},[t.isLogin?t._e():[n("h1",[t._v("Study Together")]),t._v(" "),n("p",[t._v("博客")]),t._v(" "),n("div",{staticClass:"btns"},[n("router-link",{attrs:{to:"/login"}},[n("el-button",{staticClass:"btn"},[t._v("用户登陆")])],1),t._v(" "),n("router-link",{attrs:{to:"/register"}},[n("el-button",{staticClass:"btn"},[t._v("注册账户")])],1)],1)],t._v(" "),t.isLogin?[n("h1",[n("router-link",{attrs:{to:"/"}},[t._v("Study Together")])],1),t._v(" "),n("router-link",{attrs:{to:"/create",alt:"创建新博客"}},[n("i",{staticClass:"edit el-icon-plus"})]),t._v(" "),n("div",{staticClass:"user"},[n("img",{staticClass:"avatar",attrs:{src:t.user.avatar,title:t.user.name,alt:t.user.username}}),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/my"}},[t._v("我的")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"#"},on:{click:t.onLogout}},[t._v("注销")])])])])]:t._e()],2)},staticRenderFns:[]};var l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("This Is Footer")])])}]};var d={name:"App",components:{Header:n("VU/8")(u,c,!1,function(t){n("ozcH")},"data-v-5fcc33b0",null).exports,Footer:n("VU/8")({name:"Footer",data:function(){return{msg:"Welcome to Your Vue.js App"}}},l,!1,function(t){n("HlNW")},"data-v-56fe3925",null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("meta",{attrs:{"http-equiv":"Content-Security-Policy",content:"upgrade-insecure-requests"}}),this._v(" "),e("Header",{attrs:{id:"header"}}),this._v(" "),e("main",{attrs:{id:"main"}},[e("router-view")],1),this._v(" "),e("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var h=n("VU/8")(d,f,!1,function(t){n("jkV9")},null,null).exports,p=n("/ocq"),g=n("Xxa5"),m=n.n(g),v=n("exGp"),b=n.n(v),w={state:{user:null,isLogin:!1},getters:{user:function(t){return t.user},isLogin:function(t){return t.isLogin}},mutations:{setUser:function(t,e){t.user=e.user},setLogin:function(t,e){t.isLogin=e.isLogin}},actions:{login:function(t,e){var n=t.commit,r=e.username,a=e.password;return i.a.login({username:r,password:a}).then(function(t){n("setUser",{user:t.data}),n("setLogin",{isLogin:!0})})},register:function(t,e){var n=this,r=t.commit,a=e.username,o=e.password;return b()(m.a.mark(function t(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.register({username:a,password:o});case 2:return e=t.sent,r("setUser",{user:e.data}),r("setLogin",{isLogin:!0}),t.abrupt("return",e.data);case 6:case"end":return t.stop()}},t,n)}))()},logout:function(t){var e=this,n=t.commit;t.state;return b()(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.logout();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1}),console.log(localStorage.token),localStorage.token=void 0,console.log(localStorage.token);case 7:case"end":return t.stop()}},t,e)}))()},checkLogin:function(t){var e=this,n=t.commit,r=t.state;return b()(m.a.mark(function t(){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.isLogin){t.next=2;break}return t.abrupt("return",!0);case 2:return t.next=4,i.a.getInfo();case 4:if(a=t.sent,n("setLogin",{isLogin:a.isLogin}),a.isLogin){t.next=8;break}return t.abrupt("return",!1);case 8:return n("setUser",{user:a.data}),t.abrupt("return",!0);case 10:case"end":return t.stop()}},t,e)}))()}}},L=n("aWad");r.default.use(s.a);var k=new s.a.Store({modules:{auth:w,blog:L.a}});window.store=k,r.default.use(p.a);var _=new p.a({routes:[{path:"/",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"OtQl"))}},{path:"/index",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"OtQl"))}},{path:"/login",component:function(){return n.e(4).then(n.bind(null,"F/pk"))}},{path:"/create",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"JVne"))},meta:{requiresAuth:!0}},{path:"/detail/:blogId",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"wD2d"))}},{path:"/edit/:blogId",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"RHcW"))},meta:{requiresAuth:!0}},{path:"/my",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"CrqJ"))},meta:{requiresAuth:!0}},{path:"/register",component:function(){return n.e(3).then(n.bind(null,"xVOn"))}},{path:"/user/:userId",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"x7Nh"))},meta:{requiresAuth:!0}}]});_.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?k.dispatch("checkLogin").then(function(e){k.getters.isLogin?n():n({path:"/login",query:{redirect:t.fullPath}})}).catch(function(){n({path:"/login",query:{redirect:t.fullPath}})}):n()});var x=_,y=n("zL8q"),P=n.n(y),q=(n("tvR6"),n("pFYg")),O=n.n(q);function S(t){var e=("object"==("undefined"==typeof dateStr?"undefined":O()(dateStr))?t:new Date(t)).getTime(),n=Date.now()-e,r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/6e7)+"小时前";break;default:r=Math.floor(n/864e5)+"天前"}return r}var j={install:function(t,e){t.prototype.friendlyDate=S}};r.default.config.productionTip=!1,r.default.use(P.a),r.default.use(j),new r.default({el:"#app",router:x,store:k,components:{App:h},template:"<App/>"})},Pfph:function(t,e,n){"use strict";var r=n("p+dL"),a="/auth/register",o="/auth/login",s="/auth/logout",i="/auth";e.a={register:function(t){var e=t.username,n=t.password;return Object(r.a)(a,"POST",{username:e,password:n})},login:function(t){var e=t.username,n=t.password;return Object(r.a)(o,"POST",{username:e,password:n})},logout:function(){return Object(r.a)(s)},getInfo:function(){return Object(r.a)(i)}}},aWad:function(t,e,n){"use strict";e.a={state:{},getters:{},mutations:{},actions:{}}},jkV9:function(t,e){},ozcH:function(t,e){},"p+dL":function(t,e,n){"use strict";e.a=u;var r=n("//Fk"),a=n.n(r),o=n("mtWM"),s=n.n(o),i=n("zL8q");n.n(i);function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(r,a){var o={url:t,method:e};"get"===e.toLocaleLowerCase()?o.params=n:o.data=n,localStorage.token&&(s.a.defaults.headers.common.Authorization=localStorage.token),s()(o).then(function(t){console.log(t.data),"ok"===t.data.status?(t.data.token&&(localStorage.token=t.data.token),r(t.data)):(Object(i.Message)({message:t.data.msg,type:"warning"}),console.log(t.data.msg),a(t.data))}).catch(function(t){i.Message.error("网络异常"),a({msg:"网络异常"})})})}s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.defaults.baseURL="http://blog-server.hunger-valley.com/",window.request=u},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d53298bc57cd494455ad.js.map