"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[829],{8829:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r,a,i,s,u,c=n(9439),o=n(2791),p=n(7689),h=n(828),f=n(9546),l=n(168),d=n(6444),v=d.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 36px;\n  font-size: 12px;\n"]))),g=d.ZP.li(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: stretch;\n  gap: 36px;\n"]))),m=d.ZP.p(i||(i=(0,l.Z)(["\n  color: #3939d7;\n  font-weight: 600;\n  font-size: 16px;\n  font-style: italic;\n"]))),w=d.ZP.p(s||(s=(0,l.Z)(["\n  font-size: 12px;\n  text-indent: 5%;\n  text-align: justify;\n"]))),x=d.ZP.p(u||(u=(0,l.Z)(["\n  margin-top: 24px;\n  margin-bottom: 24px;\n"]))),Z=n(184),y=function(){var e=(0,p.UO)().id,t=(0,o.useState)(null),n=(0,c.Z)(t,2),r=n[0],a=n[1];if(console.log(r),(0,o.useEffect)((function(){f.N.getMovieReview(e).then(a)}),[e]),null!==r)return(0,Z.jsx)("div",{children:0!==r.length?(0,Z.jsx)(v,{children:r.map((function(e){return(0,Z.jsxs)(g,{children:[(0,Z.jsxs)(m,{children:["Author: ",e.author," "]}),(0,Z.jsx)(w,{children:e.content})]},e.id)}))}):(0,Z.jsxs)(x,{children:[" ","We don't have any reviews for this movie ",(0,Z.jsx)(h.aVd,{})]})})}},9546:function(e,t,n){n.d(t,{N:function(){return l}});var r=n(5861),a=n(5671),i=n(3144),s=n(6274),u=n(9359),c=n(4687),o=n.n(c),p=n(2388);p.Z.defaults.baseURL="https://api.themoviedb.org/3/";var h=(0,u.Z)("API_KEY"),f=function(){function e(){(0,a.Z)(this,e),Object.defineProperty(this,h,{writable:!0,value:"663bd5fd8d905b7ce2d57e9867d3492e"}),this.BASE_URL="https://image.tmdb.org/t/p/w500",this.defaultImg="https://m.media-amazon.com/images/M/MV5BMTRkZGE0YWYtMDFhOS00N2I4LTljMTMtYjk0MTI2YmVhOTU4XkEyXkFqcGdeQXVyNjgxNzM0NDI@._V1_.jpg"}return(0,i.Z)(e,[{key:"getPopularMovies",value:function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:(0,s.Z)(this,h)[h],page:t}),e.next=3,p.Z.get("trending/movie/day",{params:n});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieByQuery",value:function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:(0,s.Z)(this,h)[h],query:t,page:n,language:"en-US",include_adult:!1}),e.next=3,p.Z.get("/search/movie",{params:r});case 3:return a=e.sent,i=a.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:(0,s.Z)(this,h)[h],language:"en-US",include_adult:!1}),e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?").concat(n)).then((function(e){if(!e.ok)throw new Error("Oops, there is no movie with that name");return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieCast",value:function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:(0,s.Z)(this,h)[h],language:"en-US"}),e.next=3,p.Z.get("movie/".concat(t,"/credits?").concat(n));case 3:return r=e.sent,a=r.data,e.abrupt("return",a.cast);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieReview",value:function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:(0,s.Z)(this,h)[h],language:"en-US"}),e.next=3,p.Z.get("movie/".concat(t,"/reviews?").concat(n));case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),l=new f}}]);
//# sourceMappingURL=829.bd58d3ab.chunk.js.map