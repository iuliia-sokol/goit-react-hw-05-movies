"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,a,i,s,c,u,o,p=t(9439),h=t(2791),l=t(7689),f=t(828),d=t(9546),g=t(168),v=t(6444),x=v.ZP.div(r||(r=(0,g.Z)(["\n  padding: 36px;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n"]))),m=v.ZP.ul(a||(a=(0,g.Z)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 9px;\n  padding: 0;\n"]))),w=v.ZP.li(i||(i=(0,g.Z)(["\n  padding: 8px;\n  width: calc((100%-90px) / 10);\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  justify-content: space-between;\n  text-align: space-between;\n  font-size: 14px;\n  min-height: 200px;\n  font-weight: 700;\n"]))),Z=v.ZP.img(s||(s=(0,g.Z)(["\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n"]))),y=v.ZP.div(c||(c=(0,g.Z)(["\n  width: 100%;\n  max-height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n"]))),k=v.ZP.div(u||(u=(0,g.Z)(["\n  flex-grow: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 6px;\n"]))),_=v.ZP.p(o||(o=(0,g.Z)([""]))),j=t(184),b=function(){var e=(0,l.UO)().id,n=(0,h.useState)(null),t=(0,p.Z)(n,2),r=t[0],a=t[1];return(0,h.useEffect)((function(){d.N.getMovieCast(e).then(a)}),[e]),r?(0,j.jsx)(x,{children:0!==r.length?(0,j.jsx)(m,{children:r.map((function(e){return(0,j.jsxs)(w,{children:[(0,j.jsx)(y,{children:(0,j.jsx)(Z,{src:e.profile_path?"".concat(d.N.BASE_URL).concat(e.profile_path):d.N.defaultImg,alt:e.name})}),(0,j.jsxs)(k,{children:[(0,j.jsx)("p",{children:e.name}),(0,j.jsxs)("p",{children:["Character: ",e.character]})]})]},e.id)}))}):(0,j.jsxs)(_,{children:[" ","No cast info available for this movie ",(0,j.jsx)(f.aVd,{})]})}):null}},9546:function(e,n,t){t.d(n,{N:function(){return f}});var r=t(5861),a=t(5671),i=t(3144),s=t(6274),c=t(9359),u=t(4687),o=t.n(u),p=t(2388);p.Z.defaults.baseURL="https://api.themoviedb.org/3/";var h=(0,c.Z)("API_KEY"),l=function(){function e(){(0,a.Z)(this,e),Object.defineProperty(this,h,{writable:!0,value:"663bd5fd8d905b7ce2d57e9867d3492e"}),this.BASE_URL="https://image.tmdb.org/t/p/w500",this.defaultImg="https://m.media-amazon.com/images/M/MV5BMTRkZGE0YWYtMDFhOS00N2I4LTljMTMtYjk0MTI2YmVhOTU4XkEyXkFqcGdeQXVyNjgxNzM0NDI@._V1_.jpg"}return(0,i.Z)(e,[{key:"getPopularMovies",value:function(){var e=(0,r.Z)(o().mark((function e(n){var t,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:(0,s.Z)(this,h)[h],page:n}),e.next=3,p.Z.get("trending/movie/day",{params:t});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getMovieByQuery",value:function(){var e=(0,r.Z)(o().mark((function e(n,t){var r,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:(0,s.Z)(this,h)[h],query:n,page:t,language:"en-US",include_adult:!1}),e.next=3,p.Z.get("/search/movie",{params:r});case 3:return a=e.sent,i=a.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:(0,s.Z)(this,h)[h],language:"en-US",include_adult:!1}),e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?").concat(t)).then((function(e){if(!e.ok)throw new Error("Oops, there is no movie with that name");return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getMovieCast",value:function(){var e=(0,r.Z)(o().mark((function e(n){var t,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:(0,s.Z)(this,h)[h],language:"en-US"}),e.next=3,p.Z.get("movie/".concat(n,"/credits?").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",a.cast);case 6:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getMovieReview",value:function(){var e=(0,r.Z)(o().mark((function e(n){var t,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:(0,s.Z)(this,h)[h],language:"en-US"}),e.next=3,p.Z.get("movie/".concat(n,"/reviews?").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()}]),e}(),f=new l}}]);
//# sourceMappingURL=736.bc1416a1.chunk.js.map