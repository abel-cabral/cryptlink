(()=>{var e={1719:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var n=r(296),o=r(6665),i=r(3929),a=r(1690),c=r(8180),l=r(5648),d=r(6933),u=r(3668),f=r(7146),s=r(1914),h=r(2468),p=r(397),x=s.default.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #090909b3;
`,b=s.default.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
`,g=s.default.View`
  width: 100px;
  height: 40px;
  border-radius: 4px;
`,j=s.default.View`
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`,v=s.default.Text`
  margin-right: 10px;
  color: white;
`,m=s.default.TextInput`
  width: 300px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`,y=s.default.TextInput`
  width: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`,w=s.default.View`
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  background-color: ${function(e){return e.isChecked?"#007bff":"#fff"}};
`,O=s.default.Text`
  color: ${function(e){return e.isChecked?"#fff":"#000"}};
`,k=s.default.TouchableOpacity`
  padding: 10px;
`,T=s.default.Text`
  font-size: 18px;
  color: #fff;
`,S=u.default.create({container:{flex:1},image:{flex:1,justifyContent:"center"},text:{color:"white",fontSize:42,lineHeight:84,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000c0"}}),_={uri:"https://img.freepik.com/vetores-gratis/abstratos-tecnologia-tabua-circuito_1035-14043.jpg?w=1380&t=st=1714104332~exp=1714104932~hmac=4e4eb8e1b51336d9160550f638bf8a0e3e08c1d1dfb2566967c3b53f49c50099"};const P=function(){var e=(0,o.useState)(""),t=(0,n.default)(e,2),r=t[0],u=t[1],s=(0,o.useState)(""),P=(0,n.default)(s,2),C=P[0],z=P[1],M=(0,o.useState)(!1),A=(0,n.default)(M,2),E=A[0],I=A[1],V=(0,o.useState)(1),L=(0,n.default)(V,2),N=L[0],$=L[1],q=function(e){$("increment"===e?N+1:N>1?N-1:1)};return(0,p.jsx)(i.default,{style:S.container,children:(0,p.jsx)(d.default,{source:_,resizeMode:"cover",style:S.image,children:(0,p.jsxs)(x,{children:[(0,p.jsx)(b,{children:"Abel's Short Link"}),(0,p.jsx)(j,{children:(0,p.jsx)(m,{placeholder:"Insira a URL",value:r,onChangeText:function(e){u(e)}})}),(0,p.jsx)(j,{children:(0,p.jsx)(m,{placeholder:"Insira a senha",secureTextEntry:!0,value:C,onChangeText:function(e){z(e)}})}),(0,p.jsxs)(j,{children:[(0,p.jsx)(l.default,{onPress:function(){I(!E)},children:(0,p.jsx)(w,{isChecked:E,children:E&&(0,p.jsx)(O,{isChecked:E,children:"\u2713"})})}),(0,p.jsx)(v,{children:" Auto Deletar"})]}),E&&(0,p.jsxs)(j,{children:[(0,p.jsx)(i.default,{style:{marginBottom:20}}),(0,p.jsx)(k,{onPress:function(){return q("decrement")},children:(0,p.jsx)(T,{children:"-"})}),(0,p.jsx)(y,{placeholder:"N\xfamero de visualiza\xe7\xf5es",editable:!1,value:N.toString()}),(0,p.jsx)(k,{onPress:function(){return q("increment")},children:(0,p.jsx)(T,{children:"+"})})]}),(0,p.jsx)(g,{children:(0,p.jsx)(c.default,{title:"Enviar",onPress:function(){h.default.post("https://abel-s-secret-link-4966f322aa8c.herokuapp.com/encrypt",{url:r,senha:C,auto_delete:E,numero_exibicao:N}).then((function(e){f.default.setString(e.id),a.default.alert("Sucesso","Link encurtado copiado")})).catch((function(e){console.error("There was a problem with your Axios request:",e)}))}})})]})})})}},7318:()=>{},5877:()=>{},6785:()=>{},9494:()=>{},415:()=>{}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,o,i]=e[u],c=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,r.d(i,a),i}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,c,l]=n,d=0;if(a.some((t=>0!==e[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(l)var u=l(r)}for(t&&t(n);d<a.length;d++)i=a[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var n=r.O(void 0,[908],(()=>r(5819)));n=r.O(n)})();
//# sourceMappingURL=main.c62685e4.js.map