webpackJsonp([0xd2a57dc1d883],{208:function(n,e,o){"use strict";function t(n,e,o){var t=a.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function r(n,e,o){return a.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=r;var a=[{plugin:o(447),options:{plugins:[]}},{plugin:o(449),options:{plugins:[],pathToConfigModule:"src/utils/typography"}},{plugin:o(444),options:{plugins:[],trackingId:"UA-86079311-1"}},{plugin:o(450),options:{plugins:[]}},{plugin:o(446),options:{plugins:[]}},{plugin:o(287),options:{plugins:[]}}]},279:function(n,e,o){"use strict";var t;e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(405),"component---src-templates-with-sidebar-js":o(411),"component---src-pages-index-js":o(410),"component---src-pages-contact-js":o(409)},e.json=(t={"layout-index.json":o(185),"offline-plugin-app-shell-fallback.json":o(440),"layout-sidebar-layout.json":o(10),"blog-2017-12-05-journal.json":o(413)},t["layout-sidebar-layout.json"]=o(10),t["blog-2018-01-04-machine-learning.json"]=o(416),t["layout-sidebar-layout.json"]=o(10),t["blog-2017-12-05-letsdothis.json"]=o(414),t["layout-sidebar-layout-with-products.json"]=o(412),t["blog-2017-12-21-gatsby-stripe.json"]=o(415),t["layout-sidebar-layout.json"]=o(10),t["blog-2018-01-22-colour-selection.json"]=o(417),t["layout-sidebar-layout.json"]=o(10),t["docs-api-reference-context.json"]=o(420),t["layout-sidebar-layout.json"]=o(10),t["docs-api-reference-event.json"]=o(421),t["layout-sidebar-layout.json"]=o(10),t["docs-getting-started.json"]=o(422),t["layout-sidebar-layout.json"]=o(10),t["docs-guides-commands.json"]=o(423),t["layout-sidebar-layout.json"]=o(10),t["docs-guides-error-handling.json"]=o(425),t["layout-sidebar-layout.json"]=o(10),t["docs-guides-deployment.json"]=o(424),t["layout-sidebar-layout.json"]=o(10),t["docs-guides-intents.json"]=o(426),t["layout-sidebar-layout.json"]=o(10),t["docs-guides-middleware.json"]=o(427),t["layout-sidebar-layout.json"]=o(10),t["docs-guides-session.json"]=o(429),t["layout-sidebar-layout.json"]=o(10),t["docs-guides-server.json"]=o(428),t["layout-sidebar-layout.json"]=o(10),t["docs-guides-testing.json"]=o(430),t["layout-sidebar-layout.json"]=o(10),t["docs-platforms-line.json"]=o(432),t["layout-sidebar-layout.json"]=o(10),t["docs-platforms-messenger.json"]=o(433),t["layout-sidebar-layout.json"]=o(10),t["docs-platforms-telegram.json"]=o(435),t["layout-sidebar-layout.json"]=o(10),t["docs-platforms-slack.json"]=o(434),t["layout-sidebar-layout.json"]=o(10),t["docs-new-gatsby-sites.json"]=o(431),t["layout-sidebar-layout.json"]=o(10),t["ref.json"]=o(441),t["layout-sidebar-layout.json"]=o(10),t["exploring.json"]=o(436),t["layout-sidebar-layout.json"]=o(10),t["exploring-visual-studio-mac.json"]=o(437),t["layout-sidebar-layout.json"]=o(10),t["exploring-what-is-grav.json"]=o(438),t["layout-sidebar-layout.json"]=o(10),t["ref-git-how-to-stash-create-new-branch-and-pop.json"]=o(442),t["layout-sidebar-layout.json"]=o(10),t["ref-git-squashing-commits.json"]=o(443),t["layout-sidebar-layout.json"]=o(10),t["client-bentley-copse-reports.json"]=o(418),t["layout-index.json"]=o(185),t["index.json"]=o(439),t["layout-index.json"]=o(185),t["contact.json"]=o(419),t),e.layouts={"component---src-layouts-index-js":o(406),"component---src-layouts-sidebar-layout-js":o(407),"component---src-layouts-sidebar-layout-with-products-js":o(408)}},280:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function s(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(2),c=t(i),l=o(1),d=t(l),p=o(209),f=t(p),m=o(132),h=t(m),g=o(208),y=function(n){var e=n.children;return c.default.createElement("div",null,e())},b=function(n){function e(o){r(this,e);var t=a(this,n.call(this));return t.state={location:o.location,pageResources:f.default.getResourcesForPathname(o.location.pathname)},t}return s(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=f.default.getResourcesForPathname(n.location.pathname);o?this.setState({location:n.location,pageResources:o}):f.default.getResourcesForPathname(n.location.pathname,function(o){e.setState({location:n.location,pageResources:o})})}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){e.page.path===f.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:this.props}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,u({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,u({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);b.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},e.default=b,n.exports=e.default},132:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(615),a=t(r),s=(0,a.default)();n.exports=s},281:function(n,e,o){"use strict";var t=o(145),r={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var a=decodeURIComponent(o),s=a.slice(e.length);if(s.split("#").length>1&&(s=s.split("#").slice(0,-1).join("")),s.split("?").length>1&&(s=s.split("?").slice(0,-1).join("")),r[s])return r[s];var u=void 0;return n.some(function(n){if(n.matchPath){if((0,t.matchPath)(s,{path:n.path})||(0,t.matchPath)(s,{path:n.matchPath}))return u=n,r[s]=n,!0}else{if((0,t.matchPath)(s,{path:n.path,exact:!0}))return u=n,r[s]=n,!0;if((0,t.matchPath)(s,{path:n.path+"index.html"}))return u=n,r[s]=n,!0}return!1}),u}}},413:function(n,e,o){o(6),n.exports=function(n){return o.e(38666822724695,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(472)})})}},414:function(n,e,o){o(6),n.exports=function(n){return o.e(0xe50e06a57940,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(473)})})}},415:function(n,e,o){o(6),n.exports=function(n){return o.e(49951374107245,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(474)})})}},416:function(n,e,o){o(6),n.exports=function(n){return o.e(0x74e1573e9a2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(475)})})}},417:function(n,e,o){o(6),n.exports=function(n){return o.e(45222582534192,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(476)})})}},418:function(n,e,o){o(6),n.exports=function(n){return o.e(0x6c8ccd92d695,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(477)})})}},419:function(n,e,o){o(6),n.exports=function(n){return o.e(0xa7f31e1aeaea,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(478)})})}},420:function(n,e,o){o(6),n.exports=function(n){return o.e(21208922568419,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(479)})})}},421:function(n,e,o){o(6),n.exports=function(n){return o.e(0xd010cb940411,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(480)})})}},422:function(n,e,o){o(6),n.exports=function(n){return o.e(82999037019505,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(481)})})}},423:function(n,e,o){o(6),n.exports=function(n){return o.e(0x5c1635df931f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(482)})})}},424:function(n,e,o){o(6),n.exports=function(n){return o.e(0xa27245402cee,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(483)})})}},425:function(n,e,o){o(6),n.exports=function(n){return o.e(0x82b1da1934dc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(484)})})}},426:function(n,e,o){o(6),n.exports=function(n){return o.e(23194109765310,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(485)})})}},427:function(n,e,o){o(6),n.exports=function(n){return o.e(0xfbec223d1a99,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(486)})})}},428:function(n,e,o){o(6),n.exports=function(n){return o.e(0x690c9d87b331,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(487)})})}},429:function(n,e,o){o(6),n.exports=function(n){return o.e(30531634831716,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(488)})})}},430:function(n,e,o){o(6),n.exports=function(n){return o.e(0xc472dbdae3f8,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(489)})})}},431:function(n,e,o){o(6),n.exports=function(n){return o.e(0x8dad14d50b44,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(490)})})}},432:function(n,e,o){o(6),n.exports=function(n){return o.e(29402239515122,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(491)})})}},433:function(n,e,o){o(6),n.exports=function(n){return o.e(66887383499563,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(492)})})}},434:function(n,e,o){o(6),n.exports=function(n){return o.e(0x5cb5f4c9f25d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(493)})})}},435:function(n,e,o){o(6),n.exports=function(n){return o.e(87932082906105,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(494)})})}},437:function(n,e,o){o(6),n.exports=function(n){return o.e(0xdc41bd238296,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(495)})})}},438:function(n,e,o){o(6),n.exports=function(n){return o.e(0x972ce3da2a42,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(496)})})}},436:function(n,e,o){o(6),n.exports=function(n){return o.e(19738158441333,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(497)})})}},439:function(n,e,o){o(6),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(498)})})}},185:function(n,e,o){o(6),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(191)})})}},412:function(n,e,o){o(6),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(192)})})}},10:function(n,e,o){o(6),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(193)})})}},440:function(n,e,o){o(6),n.exports=function(n){return o.e(0xbf4c176e203a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(499)})})}},442:function(n,e,o){o(6),n.exports=function(n){return o.e(0xeddd8f54de06,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(500)})})}},443:function(n,e,o){o(6),n.exports=function(n){return o.e(59798392746605,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(501)})})}},441:function(n,e,o){o(6),n.exports=function(n){return o.e(0x5f341f2d4aa6,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(502)})})}},406:function(n,e,o){o(6),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(282)})})}},408:function(n,e,o){o(6),n.exports=function(n){return o.e(32613545653754,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(283)})})}},407:function(n,e,o){o(6),n.exports=function(n){return o.e(0x853f67124e44,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(284)})})}},209:function(n,e,o){(function(e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(2),a=(t(r),o(281)),s=t(a),u=o(132),i=t(u),c=void 0,l={},d={},p={},f={},m={},h=[],g=[],y={},b=[],j={},w=function(n){return n&&n.default||n},P=void 0,v=!0;P=o(285)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){x(n,function(){b=b.filter(function(e){return e!==n}),P.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){P.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){P.onPostLoadPageResources(n)});var C=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},N=function(n,e){return y[n]>y[e]?1:y[n]<y[e]?-1:0},x=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(f[n])e.nextTick(function(){o(null,f[n])});else{var t="component---"===n.slice(0,12)?d.components[n]||d.layouts[n]:d.json[n];t(function(e,t){f[n]=t,o(e,t)})}},R=function(n,o){m[n]?e.nextTick(function(){o(null,m[n])}):x(n,function(e,t){if(e)o(e);else{var r=w(t());m[n]=r,o(e,r)}})},k=1,_={empty:function(){g=[],y={},j={},b=[],h=[]},addPagesArray:function(n){h=n;var e="";e="",c=(0,s.default)(n,e)},addDevRequires:function(n){l=n},addProdRequires:function(n){d=n},dequeue:function(n){return g.pop()},enqueue:function(n){if(!h.some(function(e){return e.path===n}))return!1;var e=1/k;k+=1,y[n]?y[n]+=1:y[n]=1,_.has(n)||g.unshift(n),g.sort(N);var o=c(n);return o.jsonName&&(j[o.jsonName]?j[o.jsonName]+=1+e:j[o.jsonName]=1+e,b.indexOf(o.jsonName)!==-1||f[o.jsonName]||b.unshift(o.jsonName)),o.componentChunkName&&(j[o.componentChunkName]?j[o.componentChunkName]+=1+e:j[o.componentChunkName]=1+e,b.indexOf(o.componentChunkName)!==-1||f[o.jsonName]||b.unshift(o.componentChunkName)),b.sort(C),P.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:j}},getPages:function(){return{pathArray:g,pathCount:y}},getPage:function(n){return c(n)},has:function(n){return g.some(function(e){return e===n})},getResourcesForPathname:function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};v&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(n)||navigator.serviceWorker.getRegistrations().then(function(n){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var r;if(o){if(t>=e.length)break;r=e[t++]}else{if(t=e.next(),t.done)break;r=t.value}var a=r;a.unregister()}window.location.reload()})),v=!1;var t=c(n);if(!t)return void console.log("A page wasn't found for \""+n+'"');if(n=t.path,p[n])return e.nextTick(function(){o(p[n]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:p[n]})}),p[n];i.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,s=void 0,u=function(){if(r&&a&&(!t.layoutComponentChunkName||s)){p[n]={component:r,json:a,layout:s,page:t};var e={component:r,json:a,layout:s,page:t};o(e),i.default.emit("onPostLoadPageResources",{page:t,pageResources:e})}};return R(t.componentChunkName,function(n,e){n&&console.log("Loading the component for "+t.path+" failed"),r=e,u()}),R(t.jsonName,function(n,e){n&&console.log("Loading the JSON for "+t.path+" failed"),a=e,u()}),void(t.layoutComponentChunkName&&R(t.layoutComponentChunkName,function(n,e){n&&console.log("Loading the Layout for "+t.path+" failed"),s=e,u()}))},peek:function(n){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(n){return g.length-g.indexOf(n)-1}};n.exports=_}).call(e,o(619))},503:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"blog-2017-12-05-journal.json",path:"/blog/2017/12/05/journal"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"blog-2018-01-04-machine-learning.json",path:"/blog/2018/01/04/machine-learning"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"blog-2017-12-05-letsdothis.json",path:"/blog/2017/12/05/letsdothis"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout-with-products",layoutComponentChunkName:"component---src-layouts-sidebar-layout-with-products-js",jsonName:"blog-2017-12-21-gatsby-stripe.json",path:"/blog/2017/12/21/gatsby-stripe"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"blog-2018-01-22-colour-selection.json",path:"/blog/2018/01/22/colour-selection"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-api-reference-context.json",path:"/docs/APIReference-Context"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-api-reference-event.json",path:"/docs/APIReference-Event"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-getting-started.json",path:"/docs/GettingStarted"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-guides-commands.json",path:"/docs/Guides-Commands"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-guides-error-handling.json",path:"/docs/Guides-ErrorHandling"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-guides-deployment.json",path:"/docs/Guides-Deployment"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-guides-intents.json",path:"/docs/Guides-Intents"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-guides-middleware.json",path:"/docs/Guides-Middleware"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-guides-session.json",path:"/docs/Guides-Session"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-guides-server.json",path:"/docs/Guides-Server"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-guides-testing.json",path:"/docs/Guides-Testing"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-platforms-line.json",path:"/docs/Platforms-LINE"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-platforms-messenger.json",path:"/docs/Platforms-Messenger"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-platforms-telegram.json",path:"/docs/Platforms-Telegram"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-platforms-slack.json",path:"/docs/Platforms-Slack"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"docs-new-gatsby-sites.json",path:"/docs/new-gatsby-sites"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"ref.json",path:"/ref"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"exploring.json",path:"/exploring"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"exploring-visual-studio-mac.json",path:"/exploring/visual-studio-mac"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"exploring-what-is-grav.json",path:"/exploring/what-is-grav"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"ref-git-how-to-stash-create-new-branch-and-pop.json",path:"/ref/git/how-to-stash-create-new-branch-and-pop"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"ref-git-squashing-commits.json",path:"/ref/git/squashing-commits"},{componentChunkName:"component---src-templates-with-sidebar-js",layout:"sidebar-layout",layoutComponentChunkName:"component---src-layouts-sidebar-layout-js",jsonName:"client-bentley-copse-reports.json",path:"/client/bentley-copse/reports"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-contact-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact/"}]},285:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],r=[],a=function(){var n=e();n&&(r.push(n),o(n))},s=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(n){s({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){s({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){s({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){s({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},a=o(208),s=o(2),u=t(s),i=o(125),c=t(i),l=o(145),d=o(454),p=o(189),f=t(p),m=o(395),h=t(m),g=o(132),y=t(g),b=o(503),j=t(b),w=o(504),P=t(w),v=o(280),C=t(v),N=o(279),x=t(N),R=o(209),k=t(R);o(387),window.___emitter=y.default,k.default.addPagesArray(j.default),k.default.addProdRequires(x.default),window.asyncRequires=x.default,window.___loader=k.default,window.matchPath=l.matchPath;var _=(0,f.default)(),E=P.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),I=function(n){var e=E[n];return null!=e&&(_.replace(e.toPath),!0)};I(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,e){I(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var o=e.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var r=n.location.pathname;if(r===o)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&o(286);var t=function(n){function e(o){o.page.path===k.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(t),window.___history.push(n))}var o=E[n];if(o&&(n=o.toPath),window.location.pathname!==n){var t=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);k.default.getResourcesForPathname(n)?(clearTimeout(t),window.___history.push(n)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,a.apiRunner)("onRouteUpdate",{location:_.location,action:_.action});var i=(0,a.apiRunner)("replaceRouterComponent",{history:_})[0],p=function(n){var e=n.children;return u.default.createElement(l.Router,{history:_},e)},f=(0,l.withRouter)(C.default);k.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,s.createElement)(i?i:p,null,(0,s.createElement)(d.ScrollContext,{shouldUpdateScroll:e},(0,s.createElement)(f,{layout:!0,children:function(e){return(0,s.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return k.default.getPage(t.location.pathname)?(0,s.createElement)(C.default,r({page:!0},t)):(0,s.createElement)(C.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,h.default)(function(){return c.default.render(u.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},504:function(n,e){n.exports=[{fromPath:"/docs/APIReference-Context/",isPermanent:!1,toPath:"/docs/APIReference-Context",redirectInBrowser:!0},{fromPath:"/docs/APIReference-Event/",isPermanent:!1,toPath:"/docs/APIReference-Event",redirectInBrowser:!0},{fromPath:"/docs/GettingStarted/",isPermanent:!1,toPath:"/docs/GettingStarted",redirectInBrowser:!0},{fromPath:"/docs/Guides-Commands/",isPermanent:!1,toPath:"/docs/Guides-Commands",redirectInBrowser:!0},{fromPath:"/docs/Guides-ErrorHandling/",isPermanent:!1,toPath:"/docs/Guides-ErrorHandling",redirectInBrowser:!0},{fromPath:"/docs/Guides-Deployment/",isPermanent:!1,toPath:"/docs/Guides-Deployment",redirectInBrowser:!0},{fromPath:"/docs/Guides-Intents/",isPermanent:!1,toPath:"/docs/Guides-Intents",redirectInBrowser:!0},{fromPath:"/docs/Guides-Middleware/",isPermanent:!1,toPath:"/docs/Guides-Middleware",redirectInBrowser:!0},{fromPath:"/docs/Guides-Session/",isPermanent:!1,toPath:"/docs/Guides-Session",redirectInBrowser:!0},{fromPath:"/docs/Guides-Server/",isPermanent:!1,toPath:"/docs/Guides-Server",redirectInBrowser:!0},{fromPath:"/docs/Guides-Testing/",isPermanent:!1,toPath:"/docs/Guides-Testing",redirectInBrowser:!0},{fromPath:"/docs/Platforms-LINE/",isPermanent:!1,toPath:"/docs/Platforms-LINE",redirectInBrowser:!0},{fromPath:"/docs/Platforms-Messenger/",isPermanent:!1,toPath:"/docs/Platforms-Messenger",redirectInBrowser:!0},{fromPath:"/docs/Platforms-Telegram/",isPermanent:!1,toPath:"/docs/Platforms-Telegram",redirectInBrowser:!0},{fromPath:"/docs/Platforms-Slack/",isPermanent:!1,toPath:"/docs/Platforms-Slack",redirectInBrowser:!0},{fromPath:"/docs/new-gatsby-sites/",isPermanent:!1,toPath:"/docs/new-gatsby-sites",redirectInBrowser:!0},{fromPath:"/ref/",isPermanent:!1,toPath:"/ref",redirectInBrowser:!0},{fromPath:"/exploring/",isPermanent:!1,toPath:"/exploring",redirectInBrowser:!0},{fromPath:"/exploring/visual-studio-mac/",isPermanent:!1,toPath:"/exploring/visual-studio-mac",redirectInBrowser:!0},{fromPath:"/exploring/what-is-grav/",isPermanent:!1,toPath:"/exploring/what-is-grav",redirectInBrowser:!0},{fromPath:"/ref/git/how-to-stash-create-new-branch-and-pop/",isPermanent:!1,toPath:"/ref/git/how-to-stash-create-new-branch-and-pop",redirectInBrowser:!0},{fromPath:"/ref/git/squashing-commits/",isPermanent:!1,toPath:"/ref/git/squashing-commits",redirectInBrowser:!0},{fromPath:"/client/bentley-copse/reports/",isPermanent:!1,toPath:"/client/bentley-copse/reports",redirectInBrowser:!0},{fromPath:"/blog/",isPermanent:!1,toPath:"/blog/2018/01/22/colour-selection/",redirectInBrowser:!0},{fromPath:"/blog",isPermanent:!1,toPath:"/blog/2018/01/22/colour-selection/",redirectInBrowser:!0}]},286:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(132),a=t(r),s="/";s="/","serviceWorker"in navigator&&navigator.serviceWorker.register(s+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},287:function(n,e){"use strict"},395:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return a||o.addEventListener(r,n=function(){for(o.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},6:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),r=o.e,a=o.s;
o.e=function(t,s){var u=!1,i=!0,c=function(n){s&&(s(o,n),s=null)};return!a&&e&&e[t]?void c(!0):(r(t,function(){u||(u=!0,i?setTimeout(function(){c()}):c())}),void(u||(i=!1,n(function(){u||(u=!0,a?a[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},444:function(n,e,o){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",(e||{}).pathname),window.ga("send","pageview"))}},405:function(n,e,o){o(6),n.exports=function(n){return o.e(99219681209289,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(445)})})}},446:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},447:function(n,e,o){"use strict";o(325),o(326)},448:function(n,e,o){n.exports=o(19)},449:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(448);t(r)},450:function(n,e,o){"use strict";var t=function(n){setTimeout(function(){var e=window.location.hash.replace("#","");if(""!==e){var o=document.getElementById(e);if(o){var t=o.offsetTop;window.scrollTo(0,t-n)}}},10)};e.onClientEntry=function(n,e){var o=0;e.offsetY&&(o=e.offsetY)},e.onRouteUpdate=function(n,e){var o=0;e.offsetY&&(o=e.offsetY),t(o)}},615:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).map(function(n){n(o)}),(n["*"]||[]).map(function(n){n(e,o)})}}}n.exports=o},619:function(n,e){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(d===clearTimeout)return clearTimeout(n);if((d===t||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(n);try{return d(n)}catch(e){try{return d.call(null,n)}catch(e){return d.call(this,n)}}}function s(){h&&f&&(h=!1,f.length?m=f.concat(m):g=-1,m.length&&u())}function u(){if(!h){var n=r(s);h=!0;for(var e=m.length;e;){for(f=m,m=[];++g<e;)f&&f[g].run();g=-1,e=m.length}f=null,h=!1,a(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,d,p=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(n){l=o}try{d="function"==typeof clearTimeout?clearTimeout:t}catch(n){d=t}}();var f,m=[],h=!1,g=-1;p.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];m.push(new i(n,e)),1!==m.length||h||r(u)},i.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(n){return[]},p.binding=function(n){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(n){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},409:function(n,e,o){o(6),n.exports=function(n){return o.e(70144966829960,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(306)})})}},410:function(n,e,o){o(6),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(307)})})}},411:function(n,e,o){o(6),n.exports=function(n){return o.e(0x9a9e78767ae5,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(310)})})}}});
//# sourceMappingURL=app-f42e46ade68b71fe255c.js.map