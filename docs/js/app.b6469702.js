(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav"),n("Camera")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"relative"},attrs:{id:"video_container"}},[n("video",{ref:"video",staticStyle:{position:"absolute"},attrs:{width:"720",height:"560",autoplay:"",muted:""},domProps:{muted:!0}})])},c=[],u=(n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),s=n("ab39"),l={mounted:function(){var e=this.$refs.video;Promise.all([s["f"].tinyFaceDetector.loadFromUri("../models"),s["f"].faceLandmark68Net.loadFromUri("../models"),s["f"].faceRecognitionNet.loadFromUri("../models"),s["f"].faceExpressionNet.loadFromUri("../models")]).then(this.startVideo()),e.addEventListener("play",(function(){var t=s["b"](e);document.querySelector("#video_container").append(t);var n={width:e.width,height:e.height};s["e"](t,n),setInterval(Object(u["a"])(regeneratorRuntime.mark((function r(){var o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,s["c"](e,new s["a"]).withFaceLandmarks().withFaceExpressions();case 2:o=r.sent,i=s["g"](o,n),t.getContext("2d").clearRect(0,0,t.width,t.height),s["d"].drawDetections(t,i),s["d"].drawFaceLandmarks(t,i),s["d"].drawFaceExpressions(t,i);case 8:case"end":return r.stop()}}),r)}))),100)}))},methods:{startVideo:function(){var e=this.$refs.video;navigator.getUserMedia({video:{}},(function(t){return e.srcObject=t}),(function(e){return console.error(e)}))}}},d=l,f=(n("6b63"),n("2877")),p=Object(f["a"])(d,a,c,!1,null,null,null),v=p.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("h1",[e._v("Face Detector")])])}],b={},w=b,g=(n("7d62"),Object(f["a"])(w,h,m,!1,null,"6c8356d5",null)),y=g.exports,_={name:"App",components:{Camera:v,Nav:y}},O=_,x=(n("034f"),Object(f["a"])(O,o,i,!1,null,null,null)),j=x.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)}}).$mount("#app")},"6b63":function(e,t,n){"use strict";n("6cf6")},"6cf6":function(e,t,n){},"7d62":function(e,t,n){"use strict";n("913c")},"85ec":function(e,t,n){},"913c":function(e,t,n){}});
//# sourceMappingURL=app.b6469702.js.map