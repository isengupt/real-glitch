(this["webpackJsonpreal-glitch"]=this["webpackJsonpreal-glitch"]||[]).push([[0],{131:function(e,t,r){},132:function(e,t,r){},133:function(e,t,r){},134:function(e,t,r){"use strict";r.r(t);var i=r(1),n=r(0),c=r.n(n),a=r(67),s=r.n(a),o=(r(83),r.p,r(84),r(7)),l=r(68),d=r(77),j=r(73),u=r(76);function b(e,t){return Math.floor(Math.random()*(t-e)+e)}function m(){var e=b(0,60);return String.fromCharCode(e+65)}var h=function(e){var t=e.play,r=e.setPlay,a=e.text,s=e.speed,o=void 0===s?1:s,l=e.seed,d=void 0===l?1:l,j=e.seedInterval,u=void 0===j?10:j,h=e.step,g=void 0===h?1:h,O=e.stepInterval,f=void 0===O?1:O,p=e.scramble,v=void 0===p?10:p,x=(e.onComplete,c.a.useRef()),S=Object(n.useRef)(0),N=1e3/(60*o),y=Object(n.useRef)(0),T=Object(n.useRef)(0),H=Object(n.useRef)(),_=Object(n.useRef)(),I=function e(t){var r=t-S.current;x.current=requestAnimationFrame(e),r>N&&(S.current=t,k())},k=function(){y.current%u===0&&function(){for(var e=0;e<d;e++){var t=b(T.current,a.length);H.current[t]=H.current[t]||v}}(),y.current%f===0&&function(){for(var e=0;e<g;e++){var t=T.current;H.current[t]=H.current[t]||Math.floor(v),T.current+=1}}();for(var e="",t=0,i=0;i<a.length;i++){var n=H.current[i];switch(!0){case" "===a[i]:e+=" ",t++;break;case n<=0:e+=a[i],t++;break;case n>=0&&i<=T.current:e+=m(),H.current[i]-=1;break;case n>=0:e+=m();break;default:e+="<span>&nbsp;</span>"}}if(_.current.innerHTML=e,t===a.length)return cancelAnimationFrame(x.current),void r(!1);y.current+=1};return c.a.useEffect((function(){y.current=0,T.current=0,H.current=new Array(a.length)}),[a,t]),c.a.useEffect((function(){return t?x.current=requestAnimationFrame(I):cancelAnimationFrame(x.current),function(){cancelAnimationFrame(x.current)}}),[I,t]),Object(i.jsx)("p",{ref:_,children:a})};function g(e){var t=e.paragraph,r=e.startPlay,c=e.fullScramble,a=Object(n.useState)(0),s=Object(o.a)(a,2),l=s[0],d=s[1],j=Object(n.useState)(!1),u=Object(o.a)(j,2),b=u[0],m=u[1];var g=Object(n.useCallback)((function(){setTimeout((function(){d(0===l?1:0)}),850)}),[l]);return Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:Object(i.jsx)(h,{play:c||(r||b),setPlay:m,text:t,speed:1.2,seed:1,seedInterval:10,step:1,stepInterval:1,onComplete:g})})})}r(131);var O=r.p+"static/media/1.80fc943b.gif",f=r.p+"static/media/2.627a9d8b.gif",p=r.p+"static/media/3.5e5ed9e1.gif",v=r.p+"static/media/4.ccef23b7.gif",x=r.p+"static/media/5.24688195.gif",S=r.p+"static/media/6.aeaa19fe.gif",N=[{image:O,title:"Kansas, USA",time:"0:00:14",credits:{creator:"John Smith",title:"Video of tornado during spring",contributor:"Hello World"}},{image:f,title:"Kansas, USA",time:"0:00:14",credits:{creator:"John Smith",title:"Video of tornado during spring",contributor:"Hello World"}},{image:p,title:"Kansas, USA",time:"0:00:14",credits:{creator:"John Smith",title:"Video of tornado during spring",contributor:"Hello World"}},{image:v,title:"Arkansas, USA",time:"0:00:14",credits:{creator:"John Smith",title:"Video of tornado during spring",contributor:"Hello World"}},{image:x,title:"Virginia, USA",time:"0:00:14",credits:{creator:"John Smith",title:"Video of tornado during spring",contributor:"Hello World"}},{image:S,title:"Maryland, USA",time:"0:00:14",credits:{creator:"John Smith",title:"Video of tornado during spring",contributor:"Hello World"}},{image:O,title:"Ohio, USA",time:"0:00:14",credits:{creator:"John Smith",title:"Video of tornado during spring",contributor:"Hello World"}},{image:f,title:"Michigan, USA",time:"0:00:14",credits:{creator:"John Smith",title:"Video of tornado during spring",contributor:"Hello World"}}];var y=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(-1),s=Object(o.a)(a,2),b=s[0],m=s[1],h=Object(n.useState)(O),f=Object(o.a)(h,2),p=f[0],v=f[1],x=Object(n.useState)({creator:"",title:"",contributor:""}),S=Object(o.a)(x,2),y=S[0],T=S[1];function H(e){return r?r&&e===b?1:0:1}return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(l.a,{children:Object(i.jsx)(d.a,{children:Object(i.jsx)(j.a,{children:Object(i.jsxs)("div",{className:"center",children:[Object(i.jsx)("div",{class:"image-container",children:Object(i.jsx)("div",{class:"image-frame",children:Object(i.jsx)("img",{src:p,alt:""})})}),Object(i.jsx)("div",{style:{position:"absolute",minHeight:"100%",minWidth:"100vw",zIndex:"-1",backgroundImage:"url(".concat(p,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}),Object(i.jsx)("div",{className:"glitch__grid",style:{marginTop:"50px"},children:N.map((function(e,t){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{style:{opacity:H(t),alignItems:"center",justifyContent:t%2===1?"center":"flex-start"},className:"glitch__grid__item glitch__center__center",children:Object(i.jsx)(u.a,{children:Object(i.jsxs)("div",{className:"grid__text",onMouseEnter:function(){return function(e,t){console.log(e),console.log(t),m(t),c(!0),v(e.image),T(e.credits)}(e,t)},onMouseLeave:function(){return c(!1),v(O),void T({creator:"",title:"",contributor:""})},children:[Object(i.jsx)("div",{className:"grid__title",children:e.title}),Object(i.jsx)("div",{className:"grid__time",children:e.time})]})})})})}))}),Object(i.jsx)("div",{className:"glitch-info",children:r?Object(i.jsxs)("div",{className:"scramble-container",children:[Object(i.jsx)(g,{paragraph:y.creator,startPlay:!0}),Object(i.jsx)(g,{paragraph:y.title,startPlay:!0}),Object(i.jsx)(g,{paragraph:y.contributor,startPlay:!0})]}):Object(i.jsx)(i.Fragment,{})})]})})})})})},T=[{date:"2020",scores:["Hello my name is","Lorem ipsum genertor","Hello world","Scrambles"],name:"Ooga booga"},{date:"2020",scores:["Hello my name is","Lorem ipsum genertor","Hello world","Scrambles"],name:"Ooga booga"}],H=["A","B","C","D","E"];function _(){var e=c.a.useState(-1),t=Object(o.a)(e,2),r=t[0],n=t[1];return Object(i.jsx)("div",{className:"digit-container",children:Object(i.jsxs)("div",{className:"digit-section",children:[Object(i.jsx)("div",{className:"digit-title",children:Object(i.jsxs)("div",{children:["DISCOVERY ",Object(i.jsx)("span",{class:"blinking-cursor",children:"|"})]})}),T.map((function(e,t){return Object(i.jsxs)("div",{className:"digit-item",children:[Object(i.jsx)("div",{className:"digit-name",children:e.name}),Object(i.jsx)("div",{className:"digit-scores",children:e.scores.map((function(e,c){return Object(i.jsxs)("div",{className:"digit-scramble",onMouseEnter:function(){return function(e){console.log(e),n(e)}(H[t]+c)},onMouseLeave:function(){return n(-1)},children:[Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(i.jsx)("span",{className:"scramble__span",children:c}),Object(i.jsx)(g,{paragraph:e,fullScramble:H[t]+c==r})]}),Object(i.jsx)(g,{paragraph:"0:00:11",fullScramble:H[t]+c==r})]})}))}),Object(i.jsx)("div",{className:"digit-date",children:e.date})]})}))]})})}r(132);var I=[{link:"#",title:"John Smith",description:"The home of john SMITH IN THE FUTURE",year:"2010"},{link:"#",title:"John Smith",description:"The home of john SMITH IN THE FUTURE",year:"2010"},{link:"#",title:"John Smith",description:"The home of john SMITH IN THE FUTURE",year:"2010"},{link:"#",title:"John Smith",description:"The home of john SMITH IN THE FUTURE",year:"2010"},{link:"#",title:"John Smith",description:"The home of john SMITH IN THE FUTURE",year:"2010"}];function k(){return Object(i.jsxs)("div",{className:"main-page",children:[Object(i.jsx)("div",{className:"digit-title",children:Object(i.jsxs)("div",{children:["DISCOVERY ",Object(i.jsx)("span",{class:"blinking-cursor",children:"|"})]})}),Object(i.jsx)("section",{className:"press",children:Object(i.jsx)("div",{className:"press-container",children:I.map((function(e){return Object(i.jsxs)("a",{href:e.link,rel:"noopener",target:"_blank",children:[Object(i.jsx)("span",{className:"press-container__media","aria-label":e.title,children:Object(i.jsx)("span",{"aria-hidden":"true",children:e.title})})," ",Object(i.jsx)("span",{className:"press-container__title","aria-label":e.description,children:Object(i.jsx)("span",{"aria-hidden":"true",children:e.description})})," ",Object(i.jsx)("span",{className:"press-container__year","aria-label":e.year,children:Object(i.jsx)("span",{"aria-hidden":"true",children:e.year})})," "]})}))})})]})}r(133);function A(){return Object(i.jsx)("div",{className:"top-navbar",children:Object(i.jsxs)("div",{className:"navbar-container",children:[Object(i.jsxs)("div",{className:"navbar-left",children:[Object(i.jsx)("div",{className:"navbar-title navbar-item",children:"ISHAN SENGUPTA"}),Object(i.jsxs)("div",{className:"navbar-item ",children:["DIGITAL ",Object(i.jsx)("span",{class:"blinking-cursor",children:"|"})]})]}),Object(i.jsx)("div",{clasName:"navbar-right",children:Object(i.jsx)("div",{className:"navbar-item typing",children:"BUZZWORD"})})]})})}var U=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(A,{}),Object(i.jsx)(y,{}),Object(i.jsx)(_,{}),Object(i.jsx)(k,{})]})},E=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,135)).then((function(t){var r=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),i(e),n(e),c(e),a(e)}))};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(U,{})}),document.getElementById("root")),E()},83:function(e,t,r){},84:function(e,t,r){}},[[134,1,2]]]);
//# sourceMappingURL=main.ad05743e.chunk.js.map