"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[264],{895:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,i,o,s,a,c,l,d,p,x,u,f=t(861),h=t(885),g=t(757),m=t.n(g),v=t(791),b=t(689),j=t(829),Z=t(373),w=t(168),k=t(731),_=t(444),y=(0,_.ZP)(k.OL)(r||(r=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 8px 0px 5px 5px;\n  width: 70px;\n  height: 20px;\n  border-radius: 8px;\n  border: 1px solid #ed7230;\n  text-decoration: none;\n  color: black;\n  font-size: 12px;\n  font-weight: 500;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #ed7230;\n    color: white;\n    scale: 0.995;\n    font-weight: 700;\n  }\n"]))),P=t(184),z=function(n){var e=n.to,t=n.state;return(0,P.jsxs)(y,{to:e,className:"GoBackLink",state:{from:t},children:[(0,P.jsx)(Z.D_,{className:"BackIcon",size:11}),"Go back"]})},L=t(55),O=_.ZP.div(i||(i=(0,w.Z)(["\n  display: grid;\n  grid-template-columns: 230px 1fr;\n  width: 100%;\n"]))),U=_.ZP.div(o||(o=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  margin: 0px 15px;\n"]))),C=_.ZP.img(s||(s=(0,w.Z)(["\n  display: block;\n  width: 100%;\n"]))),G=_.ZP.div(a||(a=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]))),B=_.ZP.p(c||(c=(0,w.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n"]))),E=function(n){var e=n.details,t=e.poster_path,r=e.original_title,i=e.vote_average,o=e.overview,s=e.genres,a=(0,L.U)(t),c=(i/10*100).toFixed(),l=s.map((function(n){return n.name})).join(", ");return(0,P.jsxs)(O,{children:[(0,P.jsx)(U,{children:(0,P.jsx)(C,{src:a,alt:r})}),(0,P.jsxs)(G,{children:[(0,P.jsx)("h2",{children:r}),(0,P.jsxs)("p",{children:["User Score:",(0,P.jsxs)("span",{children:[" ",c,"%"]})]}),(0,P.jsx)(B,{children:"Overview"}),(0,P.jsx)("span",{children:o}),(0,P.jsx)(B,{children:"Genres"}),(0,P.jsx)("span",{children:l})]})]})},F=_.ZP.h3(l||(l=(0,w.Z)(["\n  padding-left: 15px;\n  font-weight: 700;\n"]))),I=_.ZP.div(d||(d=(0,w.Z)(["\n  margin-top: 15px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n"]))),N=_.ZP.ul(p||(p=(0,w.Z)(["\n  padding: 10px;\n  margin-left: 30px;\n  list-style: none;\n"]))),S=_.ZP.li(x||(x=(0,w.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),D=(0,_.ZP)(k.OL)(u||(u=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n\n  width: 100px;\n  padding: 1px 8px;\n\n  color: black;\n  text-decoration: none;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 8px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  font-weight: 400;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n  &.active {\n    font-weight: 700;\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"]))),H=function(){var n,e,t=(0,v.useState)(null),r=(0,h.Z)(t,2),i=r[0],o=r[1],s=(0,b.UO)().movieId,a=(0,b.TH)();if((0,v.useEffect)((function(){if(!i){var n=function(){var n=(0,f.Z)(m().mark((function n(){var e;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,j.FL)(s);case 3:e=n.sent,o(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[i,s]),i){var c=null!==(n=null===(e=a.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return console.log(a),(0,P.jsxs)("div",{children:[(0,P.jsx)(z,{to:c,state:{from:a.state.from}}),(0,P.jsx)(E,{details:i}),(0,P.jsxs)(I,{children:[(0,P.jsx)(F,{children:"Editional information"}),(0,P.jsxs)(N,{children:[(0,P.jsx)(S,{children:(0,P.jsx)(D,{to:"cast",state:{from:a.state.from},children:"Cast"})}),(0,P.jsx)(S,{children:(0,P.jsx)(D,{to:"reviews",state:{from:a.state.from},children:"Reviews"})})]})]}),(0,P.jsx)(b.j3,{})]})}}},55:function(n,e,t){t.d(e,{U:function(){return o}});var r="https://image.tmdb.org/t/p/",i="w500/",o=function(n){var e=i;return"".concat(r).concat(e).concat(n)}}}]);
//# sourceMappingURL=264.1f26f909.chunk.js.map