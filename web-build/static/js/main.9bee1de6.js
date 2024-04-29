(()=>{var e={540:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var r=n(6665),o=n(6933),i=n(3668),l=n(5321),a=n(3986),c=n(296),d=n(3929),s=n(8180),u=n(5648),f=n(1914),x=n(2468),p=n(6283),h=n(397),g=i.default.create({container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#000000c0",color:"#f2f2f2",paddingHorizontal:20},text:{backgroundColor:"#f2f2f2f3",padding:"40px",marginBottom:20,textAlign:"center",lineHeight:24,width:"100%",fontSize:"1.2em"},link:{flexWrap:"wrap",width:"180%"},buttonContainer:{flexDirection:"row",justifyContent:"space-between"},button:{margin:"125px"}});const b=function(e){var t=e.link,n=e.func,o=(0,r.useState)(!1),i=(0,c.default)(o,2),l=i[0],a=i[1],u=function(e){var t=document.createRange();t.selectNode(document.getElementById(e)),window.getSelection().removeAllRanges(),window.getSelection().addRange(t);try{document.execCommand("copy"),window.getSelection().removeAllRanges(),alert("Link copiado para a \xe1rea de transfer\xeancia!")}catch(n){alert("N\xe3o foi poss\xedvel copiar!")}};return(0,h.jsxs)(d.default,{style:g.container,children:[(0,h.jsx)(p.default,{style:g.text,id:"copy",children:(0,h.jsx)("a",{href:t,style:{textDecorationLine:"none",color:"#333"},children:t})}),(0,h.jsxs)(d.default,{style:g.buttonContainer,children:[l&&(0,h.jsx)(s.default,{title:"Voltar",color:"orange",onPress:function(){a(!1),n()},style:g.button}),"\xa0\xa0",(0,h.jsx)(s.default,{title:"Copiar Link",onPress:function(){u("copy"),a(!0)},style:g.button,color:"green"})]})]})};var j=f.default.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #090909b3;
`,m=f.default.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
`,w=f.default.View`
  width: 100px;
  height: 40px;
  border-radius: 4px;
`,y=f.default.View`
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`,v=f.default.Text`
  margin-right: 10px;
  color: white;
`,k=f.default.TextInput`
  width: 300px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`,C=f.default.TextInput`
  width: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`,O=f.default.View`
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  background-color: ${function(e){return e.isChecked?"#007bff":"#fff"}};
`,S=f.default.Text`
  color: ${function(e){return e.isChecked?"#fff":"#000"}};
`,T=f.default.TouchableOpacity`
  padding: 10px;
`,P=f.default.Text`
  font-size: 18px;
  color: #fff;
`,_=i.default.create({container:{flex:1},image:{flex:1,justifyContent:"center"},text:{color:"white",fontSize:42,lineHeight:84,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000c0"}});n(5415);const z=function(){var e=(0,r.useState)(""),t=(0,c.default)(e,2),n=t[0],o=t[1],i=(0,r.useState)(""),l=(0,c.default)(i,2),a=l[0],f=l[1],p=(0,r.useState)(!1),g=(0,c.default)(p,2),z=g[0],V=g[1],R=(0,r.useState)(1),A=(0,c.default)(R,2),E=A[0],H=A[1],I=(0,r.useState)(""),M=(0,c.default)(I,2),B=M[0],D=M[1],N=(0,r.useState)(!1),W=(0,c.default)(N,2),L=W[0],q=W[1],$=function(e){H("increment"===e?E+1:E>1?E-1:1)};return(0,h.jsxs)(d.default,{style:_.container,children:[!L&&(0,h.jsxs)(j,{children:[(0,h.jsx)(m,{children:"Cryptlink"}),(0,h.jsx)(y,{children:(0,h.jsx)(k,{placeholder:"www.google.com",placeholderTextColor:"#c0c0c0",value:n,onChangeText:function(e){o(e)}})}),(0,h.jsx)(y,{children:(0,h.jsx)(k,{placeholder:"abel123",placeholderTextColor:"#c0c0c0",secureTextEntry:!0,value:a,onChangeText:function(e){f(e)}})}),(0,h.jsxs)(y,{children:[(0,h.jsx)(u.default,{onPress:function(){V(!z)},children:(0,h.jsx)(O,{isChecked:z,children:z&&(0,h.jsx)(S,{isChecked:z,children:"\u2713"})})}),(0,h.jsx)(v,{children:" Auto Deletar"}),z&&(0,h.jsxs)(y,{style:{paddingTop:20},children:[(0,h.jsx)(d.default,{style:{marginBottom:20}}),(0,h.jsx)(T,{onPress:function(){return $("decrement")},children:(0,h.jsx)(P,{children:"-"})}),(0,h.jsx)(C,{placeholder:"N\xfamero de visualiza\xe7\xf5es",editable:!1,value:E.toString()}),(0,h.jsx)(T,{onPress:function(){return $("increment")},children:(0,h.jsx)(P,{children:"+"})})]})]}),(0,h.jsx)(w,{children:(0,h.jsx)(s.default,{title:"Encriptar",disabled:!n||!a,onPress:function(){x.default.post("https://cryptlink-api.abelcode.dev/encrypt",{url:n,senha:a,auto_delete:z,numero_exibicao:E}).then((function(e){o(""),f(""),V(!1),H(0),D(e.data.url),q(!0)})).catch((function(e){console.log(e),alert(e.message)}))}})})]}),L&&(0,h.jsx)(b,{link:B,func:function(){D(""),q(!1)}})]})};var V=f.default.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #090909b3;
`,R=f.default.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
`,A=f.default.View`
  width: 120px;
  height: 40px;
  border-radius: 4px;
`,E=f.default.View`
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`,H=f.default.TextInput`
  width: 300px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`,I=i.default.create({container:{flex:1},text:{color:"white",fontSize:42,lineHeight:84,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000c0"}});const M=function(){var e=window.location.pathname,t=(0,r.useState)(e.replace("/","")),n=(0,c.default)(t,2),o=n[0],i=(n[1],(0,r.useState)("")),l=(0,c.default)(i,2),a=l[0],u=l[1];return(0,h.jsx)(d.default,{style:I.container,children:(0,h.jsxs)(V,{children:[(0,h.jsx)(R,{children:"Cryptlink"}),(0,h.jsx)(E,{children:(0,h.jsx)(H,{placeholder:"senha para decodificar link",placeholderTextColor:"#c0c0c0",secureTextEntry:!0,value:a,onChangeText:function(e){u(e)}})}),(0,h.jsx)(A,{children:(0,h.jsx)(s.default,{title:"Descriptar",disabled:!a,onPress:function(){x.default.post("https://cryptlink-api.abelcode.dev/decrypt",{link_publico:o,senha:a}).then((function(e){window.location.href=e.data.url})).catch((function(e){u(""),alert(e.response.data.message?e.response.data.message+". Verifique link | senha":"Erro desconhecido. Verifique link | senha")}))}})})]})})};var B=i.default.create({container:{flex:1},image:{flex:1,justifyContent:"center"},text:{color:"white",fontSize:42,lineHeight:84,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000c0"}});const D=function(){var e=n(5415);return(0,h.jsx)(l.BrowserRouter,{children:(0,h.jsx)(o.default,{source:e,resizeMode:"cover",style:B.image,children:(0,h.jsxs)(a.Routes,{children:[(0,h.jsx)(a.Route,{exact:!0,path:"/",element:(0,h.jsx)(z,{})}),(0,h.jsx)(a.Route,{path:"/*",element:(0,h.jsx)(M,{})})]})})})}},5415:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/fundo.ef89592f86dd003af6cf.jpg"},7318:()=>{},5877:()=>{},6785:()=>{},9494:()=>{},415:()=>{}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,i)=>{if(!r){var l=1/0;for(s=0;s<e.length;s++){for(var[r,o,i]=e[s],a=!0,c=0;c<r.length;c++)(!1&i||l>=i)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(a=!1,i<l&&(l=i));if(a){e.splice(s--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var l={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>l[e]=()=>r[e]));return l.default=()=>r,n.d(i,l),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[l,a,c]=r,d=0;if(l.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var s=c(n)}for(t&&t(r);d<l.length;d++)i=l[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var r=n.O(void 0,[274],(()=>n(5819)));r=n.O(r)})();
//# sourceMappingURL=main.9bee1de6.js.map