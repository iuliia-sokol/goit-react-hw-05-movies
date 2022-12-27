"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[720],{2940:function(n,t,e){e.d(t,{u:function(){return u}});var r,a=e(168),i=e(6444).ZP.button(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 500;\n  box-shadow: 0px 12px 8px 4px #cab1b14d;\n\n  border: ",";\n\n  background-color: ",";\n\n  color: ",";\n\n  transform: scale(1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n    color: white;\n    background-color: rgba(0, 128, 75, 0.7);\n    border: none;\n    box-shadow: 0px 12px 8px 4px #0b78474d;\n  }\n\n  & > svg {\n    margin-right: 8px;\n  }\n"])),(function(n){return"search"===n.status?"none":"load"===n.status?"1px solid rgba(0, 128, 75, 0.7)":"grey"}),(function(n){return"search"===n.status?"rgba(0, 128, 75, 0.7)":"load"===n.status?"transparent":"grey"}),(function(n){return"search"===n.status?"hsla(0, 0%, 100%, 1)":"load"===n.status?"black":"grey"})),o=e(5585),s=(e(7632),e(184)),u=function(n){var t=n.text,e=n.status,r=n.icon,a=void 0===r?null:r,u=n.disabled,c=void 0!==u&&u,p=n.type,d=void 0===p?"button":p,l=n.onClick,h=void 0===l?null:l,f=n.onLoaderPlay;return(0,s.jsxs)(i,{status:e,type:d,disabled:c,onClick:h,children:[a&&(0,s.jsx)(a,{}),f&&(0,s.jsx)(o.Z,{as:"span",variant:"light",size:"sm",role:"status","aria-hidden":"true",animation:"border"}),t]})}},4146:function(n,t,e){e.d(t,{e:function(){return x}});var r,a,i,o=e(1087),s=e(7689),u=e(9546),c=e(168),p=e(6444),d=p.ZP.ul(r||(r=(0,c.Z)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 16px;\n  margin: 0 auto;\n  padding: 24px;\n"]))),l=p.ZP.li(a||(a=(0,c.Z)(["\n  width: calc((100%-80px) / 6);\n  transform: scale(1);\n  border-radius: 12px;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  &:hover > p {\n    opacity: 1;\n  }\n\n  img {\n    border-radius: 12px;\n    height: 100%;\n  }\n"]))),h=p.ZP.p(i||(i=(0,c.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(16, 178, 108, 0.7);\n  border-radius: 12px;\n  font-size: 10px;\n  color: white;\n  font-weight: 500;\n  padding: 12px;\n  height: 30%;\n  opacity: 0;\n\n  & > span {\n    position: absolute;\n    bottom: -50%;\n    right: 0;\n    transform: translateY(-50%);\n    width: 40px;\n    background-color: rgba(228, 222, 30, 0.8);\n    padding: 10px;\n    border-radius: 12px;\n  }\n"]))),f=e(184),x=function(n){var t=n.movies,e=(0,s.TH)();return(0,f.jsx)(d,{children:t.map((function(n){return(0,f.jsxs)(l,{children:[(0,f.jsxs)(h,{children:[n.title," ",(0,f.jsx)("span",{children:n.vote_average.toFixed(2)})]}),(0,f.jsx)(o.rU,{to:"/movies/".concat(n.id),state:{from:e},children:(0,f.jsx)("img",{src:n.poster_path?"".concat(u.N.BASE_URL).concat(n.poster_path):u.N.defaultImg,alt:n.title,width:"200"})})]},n.id)}))})}},9546:function(n,t,e){e.d(t,{N:function(){return h}});var r=e(5861),a=e(5671),i=e(3144),o=e(6274),s=e(9359),u=e(4687),c=e.n(u),p=e(2388);p.Z.defaults.baseURL="https://api.themoviedb.org/3/";var d=(0,s.Z)("API_KEY"),l=function(){function n(){(0,a.Z)(this,n),Object.defineProperty(this,d,{writable:!0,value:"663bd5fd8d905b7ce2d57e9867d3492e"}),this.BASE_URL="https://image.tmdb.org/t/p/w500",this.defaultImg="https://m.media-amazon.com/images/M/MV5BMTRkZGE0YWYtMDFhOS00N2I4LTljMTMtYjk0MTI2YmVhOTU4XkEyXkFqcGdeQXVyNjgxNzM0NDI@._V1_.jpg"}return(0,i.Z)(n,[{key:"getPopularMovies",value:function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:(0,o.Z)(this,d)[d],page:t}),n.next=3,p.Z.get("trending/movie/day",{params:e});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieByQuery",value:function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URLSearchParams({api_key:(0,o.Z)(this,d)[d],query:t,page:e,language:"en-US",include_adult:!1}),n.next=3,p.Z.get("/search/movie",{params:r});case 3:return a=n.sent,i=a.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n,this)})));return function(t,e){return n.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:(0,o.Z)(this,d)[d],language:"en-US",include_adult:!1}),n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?").concat(e)).then((function(n){if(!n.ok)throw new Error("Oops, there is no movie with that name");return n.json()}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieCast",value:function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:(0,o.Z)(this,d)[d],language:"en-US"}),n.next=3,p.Z.get("movie/".concat(t,"/credits?").concat(e));case 3:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 6:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieReview",value:function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:(0,o.Z)(this,d)[d],language:"en-US"}),n.next=3,p.Z.get("movie/".concat(t,"/reviews?").concat(e));case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()}]),n}(),h=new l},4720:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,i,o=e(3433),s=e(9439),u=e(2791),c=e(1087),p=e(9546),d=e(9126),l=e(168),h=e(6444),f=h.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  position: relative;\n  margin-bottom: 30px;\n  text-transform: uppercase;\n"]))),x=h.ZP.input(a||(a=(0,l.Z)(["\n  padding: 12px 16px;\n  margin-right: 36px;\n  border-radius: 12px;\n  border: 1px solid black;\n  width: 30vw;\n  border: 1px solid rgba(0, 128, 75, 0.7);\n  box-shadow: 0px 12px 8px 4px #cab1b14d;\n\n  &:focus,\n  &:hover {\n    box-shadow: 0px 12px 8px 4px #0b78474d;\n  }\n"]))),g=e(2940),v=e(184),m=function(n){var t=n.onSubmit;return(0,v.jsx)("div",{children:(0,v.jsxs)(f,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.query;t(e.value),n.target.reset()},children:[(0,v.jsx)("label",{children:(0,v.jsx)(x,{type:"text",name:"query"})}),(0,v.jsx)(g.u,{type:"submit",icon:d.dVI,text:"Search",status:"search"})]})})},b=e(4146),y=h.ZP.main(i||(i=(0,l.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n"]))),w=function(){var n,t=(0,u.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1],i=(0,u.useState)(1),d=(0,s.Z)(i,2),l=d[0],h=d[1],f=(0,u.useState)(null),x=(0,s.Z)(f,2),w=x[0],Z=x[1],k=(0,c.lr)(),j=(0,s.Z)(k,2),_=j[0],S=j[1],P=null!==(n=_.get("query"))&&void 0!==n?n:"";if((0,u.useEffect)((function(){""!==P&&p.N.getMovieByQuery(P,l).then((function(n){a((function(t){return[].concat((0,o.Z)(t),(0,o.Z)(n.results))})),Z(n.total_results)}))}),[P,l]),r){return(0,v.jsxs)(y,{children:[(0,v.jsx)(m,{onSubmit:function(n){h(1),a([]),S(""!==n?{query:n}:{})}}),P&&(0,v.jsx)(b.e,{movies:r}),w/12>=l&&(0,v.jsx)(g.u,{text:"Load more",status:"load",onClick:function(){h((function(n){return n+1}))}})]})}}}}]);
//# sourceMappingURL=720.31c3da51.chunk.js.map