"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{9546:function(e,n,t){t.d(n,{N:function(){return h}});var r=t(5861),a=t(5671),i=t(3144),s=t(6274),o=t(9359),c=t(4687),u=t.n(c),p=t(2388);p.Z.defaults.baseURL="https://api.themoviedb.org/3/";var d=(0,o.Z)("API_KEY"),l=function(){function e(){(0,a.Z)(this,e),Object.defineProperty(this,d,{writable:!0,value:"663bd5fd8d905b7ce2d57e9867d3492e"}),this.BASE_URL="https://image.tmdb.org/t/p/w500",this.defaultImg="https://m.media-amazon.com/images/M/MV5BMTRkZGE0YWYtMDFhOS00N2I4LTljMTMtYjk0MTI2YmVhOTU4XkEyXkFqcGdeQXVyNjgxNzM0NDI@._V1_.jpg"}return(0,i.Z)(e,[{key:"getPopularMovies",value:function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:(0,s.Z)(this,d)[d],page:n}),e.next=3,p.Z.get("trending/movie/day",{params:t});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getMovieByQuery",value:function(){var e=(0,r.Z)(u().mark((function e(n,t){var r,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:(0,s.Z)(this,d)[d],query:n,page:t,language:"en-US",include_adult:!1}),e.next=3,p.Z.get("/search/movie",{params:r});case 3:return a=e.sent,i=a.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:(0,s.Z)(this,d)[d],language:"en-US",include_adult:!1}),e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?").concat(t)).then((function(e){if(!e.ok)throw new Error("Oops, there is no movie with that name");return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getMovieCast",value:function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:(0,s.Z)(this,d)[d],language:"en-US"}),e.next=3,p.Z.get("movie/".concat(n,"/credits?").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",a.cast);case 6:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getMovieReview",value:function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:(0,s.Z)(this,d)[d],language:"en-US"}),e.next=3,p.Z.get("movie/".concat(n,"/reviews?").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()}]),e}(),h=new l},9257:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r,a,i,s,o,c,u,p,d,l,h=t(9439),f=t(2791),x=t(7689),g=t(9546),v=t(9649),m=t(168),Z=t(6444),w=Z.ZP.div(r||(r=(0,m.Z)(["\n  padding: 0 24px;\n  margin-bottom: 36px;\n"]))),j=Z.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n  font-weight: 500;\n  padding: 36px;\n"]))),y=Z.ZP.div(i||(i=(0,m.Z)(["\n  padding: 24px;\n  font-size: 16px;\n"]))),k=Z.ZP.img(s||(s=(0,m.Z)(["\n  border-radius: 24px;\n"]))),b=Z.ZP.p(o||(o=(0,m.Z)(["\n  text-align: justify;\n"]))),_=Z.ZP.ul(c||(c=(0,m.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 40px;\n  margin: 0;\n  padding-left: 0;\n"]))),P=Z.ZP.div(u||(u=(0,m.Z)(["\n  height: auto;\n  padding: 0 36px;\n  margin-top: 30px;\n  padding-bottom: 30px;\n  border-bottom: 1px solid black;\n  border-top: 1px solid black;\n"]))),U=Z.ZP.ul(p||(p=(0,m.Z)(["\n  display: flex;\n"]))),M=Z.ZP.h2(d||(d=(0,m.Z)(["\n  text-transform: uppercase;\n  letter-spacing: 1.7;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 600px;\n"]))),S=Z.ZP.h3(l||(l=(0,m.Z)(["\n  text-transform: uppercase;\n  letter-spacing: 1.7;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  font-size: 18px;\n  font-weight: 500px;\n"]))),R=t(6954),I=t(184),L=function(){var e,n,t=(0,x.UO)().id,r=(0,f.useState)(null),a=(0,h.Z)(r,2),i=a[0],s=a[1],o=(0,x.TH)();if(console.log(o),(0,f.useEffect)((function(){g.N.getMovieById(t).then(s)}),[t]),!i)return null;var c=i.poster_path,u=i.original_title,p=i.original_name,d=i.release_date,l=i.first_air_date,m=i.vote_average,Z=i.genres,L=i.overview;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(w,{children:(0,I.jsx)(R.rU,{to:null!==(e=null===(n=o.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:"Go back"})}),(0,I.jsxs)(j,{children:[(0,I.jsx)(k,{src:"".concat(g.N.BASE_URL).concat(c),alt:u,width:"300"}),(0,I.jsxs)(y,{children:[(0,I.jsxs)(M,{children:[u||p," (",(0,I.jsx)("span",{children:parseInt(d||l)}),")"]}),(0,I.jsxs)(b,{children:["User Score: ","".concat(Math.round(10*m),"%")]}),(0,I.jsx)(S,{children:"Overview"}),(0,I.jsx)(b,{children:L}),(0,I.jsx)(S,{children:"Genres"}),(0,I.jsx)(U,{children:Z.map((function(e,n){return(0,I.jsx)("li",{style:{marginRight:"10px"},children:e.name},n)}))})]})]}),(0,I.jsxs)(P,{children:[(0,I.jsx)(S,{children:"Additional Information"}),(0,I.jsxs)(_,{children:[(0,I.jsxs)("li",{children:[(0,I.jsx)(R.rU,{to:"cast",state:o.state,children:"Cast"})," "]}),(0,I.jsxs)("li",{children:[(0,I.jsx)(R.rU,{to:"review",state:o.state,children:"Reviews"})," "]})]})]}),(0,I.jsx)(f.Suspense,{fallback:(0,I.jsx)(v.a,{}),children:(0,I.jsx)(x.j3,{})})]})}}}]);
//# sourceMappingURL=257.92a71163.chunk.js.map