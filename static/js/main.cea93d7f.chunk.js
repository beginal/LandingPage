(this.webpackJsonplandingpage=this.webpackJsonplandingpage||[]).push([[0],{132:function(n,e,t){},133:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(7),o=t.n(i),l=(t(82),t(14)),c=t(3),u=t(135),m=t(4);function d(){var n=Object(c.a)(["\n  position: absolute;\n  top:640px;\n  background: rgba(157,191,228,0.8);\n  border:none;\n  width: 100%;\n  z-index:999;\n  padding-left: 0;\n  margin:0;\n  transition:position 2s;\n  * {\n    float:right;\n  }\n  .Logo {\n    float:left;\n    padding: 0;\n    img {\n      width: 60px;\n    }\n  }\n"]);return d=function(){return n},n}function s(){var n=Object(c.a)(["\n.TopPoint {\n  position:relative;\n}\n.fixedMenu {\n  position: fixed;\n  top: 0px;\n  left:0px;\n}\n"]);return s=function(){return n},n}Object(m.a)(s()),Object(m.b)(u.a)(d());var f=t(76);function p(){var n=Object(c.a)(["\n  background: #bae7f5;\n  width: 100%;\n  height: 40rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition:background 2s;\n  h1 {\n    text-align: center;\n    font-size: 6vw;\n  }\n  p {\n    font-size: 1.5rem;\n  }\n"]);return p=function(){return n},n}function g(){var n=Object(c.a)(["\n  .header-bb {\n    position: relative;\n    background: none;\n    &:after {\n      background-image: url('https://www.10wallpaper.com/wallpaper/1366x768/1206/city_night_fantasy-Dreamy_and_Fantasy_wallpaper_1366x768.jpg');\n      background-repeat: no-repeat;\n      background-attachment: fixed;\n      background-size:cover;\n      top:0;\n      left:0;\n      position:absolute;\n      opacity:0.5!important;\n      filter:alpha(opacity=50);\n      z-index:-1;\n      content:\"\";\n      width:100%;\n      height:100%;\n      }\n  } \n"]);return g=function(){return n},n}var b=Object(m.a)(g()),h=m.b.div(p()),x=function(){var n=Object(r.useState)(!1),e=Object(l.a)(n,2),t=e[0],i=e[1];return Object(r.useEffect)((function(){setTimeout((function(){i(!0)}),3e3)}),[t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null),a.a.createElement(h,{className:"".concat(t?"header-bb":"")},a.a.createElement(f.a,{loop:1,wrapper:"h1",steps:["Frontend",200,"Frontend Developer"]}),a.a.createElement("p",null,"Junho-Ham")))},v=function(){var n=Object(r.useRef)(),e=Object(r.useCallback)((function(e){var t=Object(l.a)(e,1)[0],r=n.current;t.isIntersecting&&(r.style.transitionProperty="opacity transform",r.style.transitionDuration="1s",r.style.transitionTimingFunction="cubic-bezier(0, 0, 0.2, 1)",r.style.transitionDelay="0s",r.style.opacity=1,r.style.transform="translate3d(0, 0, 0)")}),[]);return Object(r.useEffect)((function(){var t,r=n.current;if(r)return(t=new IntersectionObserver(e,{threshold:.3})).observe(r),function(){return t&&t.disconnect()}}),[e]),{ref:n,style:{opacity:0,transform:"translate3d(0,50%,0)"}}};function E(){var n=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  justify-content:center;\n  .intro {\n    width: 600px;\n    margin: 2rem 0;\n    background:gray;\n    border-radius: 5px;\n    margin-top: 3px;\n    padding: 2rem;\n    display: flex;\n    align-items: center;\n    ul {\n      padding: 0 20px;\n      li {\n        text-align:left;\n        font-size: 1.2rem;\n        font-weight: 500;\n        margin-bottom: 5px;\n      }\n      p {\n        margin-bottom: 0;\n        text-align: left;\n      }\n    }\n    img {\n      width: 150px;\n      height:200px;\n    }\n  @media (max-width: 700px) {\n    width: 300px;\n    flex-direction:column;\n    padding: 1rem;\n    ul {\n      padding: 0px;\n      li {\n        text-align:center;\n        font-size: 1rem;\n        font-weight: 500;\n      }\n      p {\n        text-align: center;\n        font-size: 0.8rem\n      }\n    }\n    img {\n      margin:10px 0;\n      width: 100px;\n      height: 130px;\n    }\n  }\n  }\n\n  \n"]);return E=function(){return n},n}function w(){var n=Object(c.a)(["\n  background: white;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content:center;\n  align-items: center;\n  .profile_h2 > h2 {\n    color: pink;\n    margin-top: 2rem;\n    font-size: 5vw;\n  }\n  "]);return w=function(){return n},n}function k(){var n=Object(c.a)(["\n\n"]);return k=function(){return n},n}var y=Object(m.a)(k()),j=m.b.div(w()),O=m.b.div(E()),z=function(){var n=v();return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null),a.a.createElement(j,null,a.a.createElement("div",{className:"profile_h2"},a.a.createElement("h2",null,"Who's this guy?")),a.a.createElement(O,n,a.a.createElement("div",{className:"intro"},a.a.createElement("img",{src:"http://placehold.it/150x200",alt:""}),a.a.createElement("ul",null,a.a.createElement("li",null,"Ham Jun Ho"),a.a.createElement("li",null,"1995-10-26"),a.a.createElement("p",null,"\ub098\ub294 \ub108\uc758 \ub2e4\uc6b4\ud0c0\uc6b4 \ubca0\uc774\ube44\uc57c"))))))};function N(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 1rem;\n  justify-content: center;\n  align-items: center;\n  img {\n    width: 100%;\n  }\n  * {\n  flex-wrap: wrap;\n  }\n"]);return N=function(){return n},n}function F(){var n=Object(c.a)(["\n  color: ",";\n"]);return F=function(){return n},n}function S(){var n=Object(c.a)(["\n  margin-top: 1.5rem;\n  color: ",";\n  font-size: 2rem;\n  font-weight: 600;\n  div {\n    border-bottom: 3px solid ",";\n  }\n"]);return S=function(){return n},n}m.b.h2(S(),(function(n){return n.color||"black"}),(function(n){return n.color||"black"})),m.b.p(F(),(function(n){return n.color||"black"})),m.b.div(N());function T(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return T=function(){return n},n}function _(){var n=Object(c.a)(["\n    width: 170px;\n    height: 230px;\n    margin: 5px;\n    background: ",";\n    border: 2px solid black;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 1;\n    transition: border .3s;\n    span {\n      font-size: 1.3rem;\n  }\n  &:hover {\n    border: 2px solid #dddddd;\n    overflow: 1;\n  }\n  "]);return _=function(){return n},n}function I(){var n=Object(c.a)(["\n  display: flex;\n  justify-content:center;\n  overflow: auto;\n  flex-wrap: wrap;\n  width: 100vw;\n  height: 500px;\n  padding-bottom: 1rem;\n"]);return I=function(){return n},n}function C(){var n=Object(c.a)(["\n    img {\n      width:24px;\n      height:24px;\n      margin: 0 6px;\n    }\n    text-align:left;\n    padding: 3px 0;\n    color: black;\n    margin: 3px 4px;\n    & + & {\n      border-top: 1px solid #333333\n\n    }"]);return C=function(){return n},n}function L(){var n=Object(c.a)(["\n  background: white;\n  width: 250px;\n"]);return L=function(){return n},n}function M(){var n=Object(c.a)(["\n  color: ",";\n"]);return M=function(){return n},n}function J(){var n=Object(c.a)(["\n  margin-top: 1.5rem;\n  color: ",";\n  font-size: 2rem;\n  font-weight: 600;\n  div {\n    border-bottom: 3px solid ",";\n  }\n"]);return J=function(){return n},n}var P=m.b.h2(J(),(function(n){return n.color||"black"}),(function(n){return n.color||"black"})),B=m.b.p(M(),(function(n){return n.color||"black"})),D=m.b.div(L()),H=m.b.div(C()),W=(m.b.div(I()),m.b.div(_(),(function(n){return n.background||"none"})),m.b.div(T())),Y=function(){return a.a.createElement(W,null,a.a.createElement(P,null,a.a.createElement("div",null,"SKILL")),a.a.createElement(B,null,"\ub204\ub974\uba74 \ubc14\ub00c\ub294 \ub0b4\uc6a9"),a.a.createElement(D,null,a.a.createElement(H,null,a.a.createElement("img",{src:"http://placehold.it/24x24",alt:""}),a.a.createElement("span",null,"HTML / CSS ")),a.a.createElement(H,null,a.a.createElement("img",{src:"http://placehold.it/24x24",alt:""}),a.a.createElement("span",null,"JavaScript")),a.a.createElement(H,null,a.a.createElement("img",{src:"https://cdn.worldvectorlogo.com/logos/react-1.svg",alt:""}),a.a.createElement("span",null,"React")),a.a.createElement(H,null,a.a.createElement("img",{src:"http://placehold.it/24x24",alt:""}),a.a.createElement("span",null,"Node")),a.a.createElement(H,null,a.a.createElement("img",{src:"http://placehold.it/24x24",alt:""}),a.a.createElement("span",null,"Git"))))},K=function(){return a.a.createElement(W,null,a.a.createElement(P,{color:"white"},a.a.createElement("div",null,"PortFolio")),a.a.createElement(B,{color:"white"},"\ub0b4\uc6a9\ub0b4\uc6a9"))},R=function(){return a.a.createElement(W,null,a.a.createElement(P,null,a.a.createElement("div",null,"\ucd08\ub85d\uc0c9 \ud0c0\uc774\ud2c0")),a.a.createElement(B,null,"~~~~~~~~"))};function A(){var n=Object(c.a)(["\n  background: ",";\n  opacity: 0.5;\n  color: white;\n  width: 70px;\n  outline:none;\n  border: none;\n  text-align:left;\n  border-radius: 2px 0 0 5px;\n  margin: 2px;\n    &:hover {\n      cursor:pointer;\n      opacity: 1;\n    }\n    &:focus {\n      z-index: 1;\n      opacity: 1;\n    }\n    & + & {\n      margin-top: 5px;\n    }\n"]);return A=function(){return n},n}function G(){var n=Object(c.a)(["\n  width:100%;\n  height: 500px;\n  border-radius: 2px;\n  background: ",";\n  text-align:center;\n  margin: 0 3rem;\n  transform: skewY(5deg);\n  transition: background 0.3s;\n  @media (max-width: 700px) {\n    margin: 1rem;\n  }\n    .Buttons {\n      position: absolute;\n      display: flex;\n      top: 1rem;\n      left: 9rem;\n      transform: skewY(-5deg);\n      flex-direction: column;\n      transition: top 1s, left 1s; \n      @media (max-width: 700px) {\n        top: -1.6rem;\n        left: 2rem;\n      }\n      @media (max-width: 425px) {\n        top: -1.3rem;\n        left: 2rem;\n      }\n    }\n    .InText {\n      padding: 20px;\n      overflow:hidden;\n    }\n"]);return G=function(){return n},n}function $(){var n=Object(c.a)(["\n  display: flex;\n  justify-content:center;\n  align-items: center;\n  margin: 2rem 0;\n  height: 600px;\n  transform: skewY(-5deg);\n  background: ",";\n  transition: background 0.3s;\n  position: relative;\n"]);return $=function(){return n},n}var q=m.b.div($(),(function(n){return n.background||"#4f2ddf"})),Q=m.b.div(G(),(function(n){return n.background})),U=m.b.button(A(),(function(n){return n.background||"white"})),V=function(){var n=Object(r.useState)("#4f2ddf"),e=Object(l.a)(n,2),t=e[0],i=e[1];Object(r.useEffect)((function(){console.log(t)}),[t]);var o=function(n){i(n.target.name)};return a.a.createElement(q,{background:t},a.a.createElement(Q,null,a.a.createElement("div",{className:"InText"},a.a.createElement("div",{className:"Buttons"},a.a.createElement(U,{background:"#ffbbbb",name:"#ffbbbb",onClick:o},"SKILL"),a.a.createElement(U,{background:"#4f2ddf",name:"#4f2ddf",onClick:o},"PortFolio"),a.a.createElement(U,{background:"green",name:"green",onClick:o},"None")),function(){switch(t){case"red":return a.a.createElement(Y,null);case"#4f2ddf":return a.a.createElement(K,null);case"green":return a.a.createElement(R,null);default:return a.a.createElement(Y,null)}}())))};function X(){var n=Object(c.a)(["\n  background: black;\n  display: flex;\n  margin-top: 6rem;\n  padding: 2rem 0rem 3rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 99;\n  p {\n    margin-bottom: 2px;\n  }\n  h2 {\n    font-size:1.5rem;\n    padding-bottom: 3px;\n    border-bottom : 2px solid white;\n  }\n  * {\n    color: white;\n  }\n  .links {\n    display: flex;\n    .moveit {\n      margin: 0.5rem;\n      background: white;\n      width: 64px;\n      height: 64px;\n      border-radius:50px;\n      display: flex;\n      align-items:center;\n      justify-content: center;\n      transition: background 2s;\n       &:hover {\n         background: #454545;\n         cursor:pointer;\n       }\n    }\n  }\n"]);return X=function(){return n},n}var Z=m.b.div(X()),nn=function(){return a.a.createElement(Z,null,a.a.createElement("h2",null,"CONTANT"),a.a.createElement("p",null,a.a.createElement("span",null,"Phone : "),"010-1234-5678"),a.a.createElement("p",null,a.a.createElement("span",null,"Mail : "),"MyMail@gmail.com"),a.a.createElement("div",{className:"links"},a.a.createElement("a",{href:"https://github.com/beginal",target:"blank"},a.a.createElement("div",{className:"moveit"},a.a.createElement("img",{src:"http://placehold.it/30x30",alt:"github"}))),a.a.createElement("a",{href:"/"},a.a.createElement("div",{className:"moveit"},a.a.createElement("img",{src:"http://placehold.it/30x30",alt:""})))))},en=(t(132),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,null),a.a.createElement(z,null),a.a.createElement(V,null),a.a.createElement(nn,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(en,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},77:function(n,e,t){n.exports=t(133)},82:function(n,e,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.cea93d7f.chunk.js.map