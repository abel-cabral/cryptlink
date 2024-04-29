(()=>{var e={540:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var r=n(6665),o=n(6933),i=n(3668),a=n(5321),l=n(3986),c=n(296),d=n(3929),s=n(8180),u=n(5648),f=n(1914),x=n(2468),p=n(6283),h=n(397),g=i.default.create({container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#000000c0",color:"#f2f2f2",paddingHorizontal:20},text:{backgroundColor:"#f2f2f2f3",padding:"40px",marginBottom:20,textAlign:"center",lineHeight:24,width:"100%",fontSize:"1.2em"},link:{flexWrap:"wrap",width:"180%"},buttonContainer:{flexDirection:"row",justifyContent:"space-between"},button:{margin:"125px"}});const b=function(e){var t=e.link,n=e.func,o=(0,r.useState)(!1),i=(0,c.default)(o,2),a=i[0],l=i[1],u=function(e){var t=document.getElementById(e);if(t){t.innerText.trim().replace(/\s+/g," ");var n=document.createRange();n.selectNode(t),window.getSelection().removeAllRanges(),window.getSelection().addRange(n);try{document.execCommand("copy"),window.getSelection().removeAllRanges(),alert("Link copiado para a \xe1rea de transfer\xeancia!")}catch(r){alert("N\xe3o foi poss\xedvel copiar!")}}else alert("Elemento n\xe3o encontrado!")};return(0,h.jsxs)(d.default,{style:g.container,children:[(0,h.jsx)(p.default,{style:g.text,id:"copy",children:(0,h.jsx)("a",{href:t,style:{textDecorationLine:"none",color:"#333"},children:t})}),(0,h.jsxs)(d.default,{style:g.buttonContainer,children:[a&&(0,h.jsx)(s.default,{title:"Voltar",color:"orange",onPress:function(){l(!1),n()},style:g.button}),"\xa0\xa0",(0,h.jsx)(s.default,{title:"Copiar Link",onPress:function(){l(!0),u("copy")},style:g.button,color:"green"})]})]})};var j=f.default.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #090909b3;
`,m=f.default.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
`,y=f.default.View`
  width: 100px;
  height: 40px;
  border-radius: 4px;
`,w=f.default.View`
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
`,S=f.default.View`
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  background-color: ${function(e){return e.isChecked?"#007bff":"#fff"}};
`,T=f.default.Text`
  color: ${function(e){return e.isChecked?"#fff":"#000"}};
`,O=f.default.TouchableOpacity`
  padding: 10px;
`,P=f.default.Text`
  font-size: 18px;
  color: #fff;
`,_=i.default.create({container:{flex:1},image:{flex:1,justifyContent:"center"},text:{color:"white",fontSize:42,lineHeight:84,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000c0"}});n(5415);const z=function(){var e=(0,r.useState)(""),t=(0,c.default)(e,2),n=t[0],o=t[1],i=(0,r.useState)(""),a=(0,c.default)(i,2),l=a[0],f=a[1],p=(0,r.useState)(!1),g=(0,c.default)(p,2),z=g[0],V=g[1],E=(0,r.useState)(1),R=(0,c.default)(E,2),A=R[0],H=R[1],I=(0,r.useState)(""),M=(0,c.default)(I,2),B=M[0],D=M[1],N=(0,r.useState)(!1),W=(0,c.default)(N,2),L=W[0],q=W[1],$=(0,r.useState)(!1),F=(0,c.default)($,2),G=F[0],J=F[1],K=function(e){H("increment"===e?A+1:A>1?A-1:1)};return(0,h.jsxs)(d.default,{style:_.container,children:[!L&&(0,h.jsxs)(j,{children:[(0,h.jsx)(m,{children:"Cryptlink"}),(0,h.jsx)(w,{children:(0,h.jsx)(k,{placeholder:"www.google.com",placeholderTextColor:"#c0c0c0",value:n,onChangeText:function(e){o(e)}})}),(0,h.jsx)(w,{children:(0,h.jsx)(k,{placeholder:"abel123",placeholderTextColor:"#c0c0c0",secureTextEntry:!0,value:l,onChangeText:function(e){f(e)}})}),(0,h.jsxs)(w,{children:[(0,h.jsx)(u.default,{onPress:function(){V(!z)},children:(0,h.jsx)(S,{isChecked:z,children:z&&(0,h.jsx)(T,{isChecked:z,children:"\u2713"})})}),(0,h.jsx)(v,{children:" Auto Deletar"}),z&&(0,h.jsxs)(w,{style:{paddingTop:20},children:[(0,h.jsx)(d.default,{style:{marginBottom:20}}),(0,h.jsx)(O,{onPress:function(){return K("decrement")},children:(0,h.jsx)(P,{children:"-"})}),(0,h.jsx)(C,{placeholder:"N\xfamero de visualiza\xe7\xf5es",editable:!1,value:A.toString()}),(0,h.jsx)(O,{onPress:function(){return K("increment")},children:(0,h.jsx)(P,{children:"+"})})]})]}),(0,h.jsx)(y,{children:(0,h.jsx)(s.default,{title:"Encriptar",disabled:!n||!l||G,onPress:function(){J(!0),x.default.post("https://cryptlink-api.abelcode.dev/encrypt",{url:n,senha:l,auto_delete:z,numero_exibicao:A}).then((function(e){o(""),f(""),V(!1),H(0),J(!1),D("https://cryptlink.abelcode.dev/"+e.data.id),q(!0)})).catch((function(e){J(!1),console.log(e),alert(e.response.data.message?e.response.data.message:"Erro desconhecido.")}))}})})]}),L&&(0,h.jsx)(b,{link:B,func:function(){D(""),q(!1)}})]})};var V=f.default.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #090909b3;
`,E=f.default.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
`,R=f.default.View`
  width: 120px;
  height: 40px;
  border-radius: 4px;
`,A=f.default.View`
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
`,I=i.default.create({container:{flex:1},text:{color:"white",fontSize:42,lineHeight:84,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000c0"}});const M=function(){var e=window.location.pathname,t=(0,r.useState)(e.replace("/","")),n=(0,c.default)(t,2),o=n[0],i=(n[1],(0,r.useState)("")),a=(0,c.default)(i,2),l=a[0],u=a[1];return(0,h.jsx)(d.default,{style:I.container,children:(0,h.jsxs)(V,{children:[(0,h.jsx)(E,{children:"Cryptlink"}),(0,h.jsx)(A,{children:(0,h.jsx)(H,{placeholder:"senha para decodificar link",placeholderTextColor:"#c0c0c0",secureTextEntry:!0,value:l,onChangeText:function(e){u(e)}})}),(0,h.jsx)(R,{children:(0,h.jsx)(s.default,{title:"Descriptar",disabled:!l,onPress:function(){x.default.post("https://cryptlink-api.abelcode.dev/decrypt",{link_publico:o,senha:l}).then((function(e){window.location.href=e.data.url})).catch((function(e){u(""),alert(e.response.data.message?e.response.data.message+". Verifique link | senha":"Erro desconhecido. Verifique link | senha")}))}})})]})})};var B=i.default.create({container:{flex:1},image:{flex:1,justifyContent:"center"},text:{color:"white",fontSize:42,lineHeight:84,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000c0"}});const D=function(){var e=n(5415);return(0,h.jsx)(a.BrowserRouter,{children:(0,h.jsx)(o.default,{source:e,resizeMode:"cover",style:B.image,children:(0,h.jsxs)(l.Routes,{children:[(0,h.jsx)(l.Route,{exact:!0,path:"/",element:(0,h.jsx)(z,{})}),(0,h.jsx)(l.Route,{path:"/*",element:(0,h.jsx)(M,{})})]})})})}},5415:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/fundo.ef89592f86dd003af6cf.jpg"},7318:()=>{},5877:()=>{},6785:()=>{},9494:()=>{},415:()=>{}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,o,i]=e[s],l=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(s--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,l,c]=r,d=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var s=c(n)}for(t&&t(r);d<a.length;d++)i=a[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var r=n.O(void 0,[274],(()=>n(5819)));r=n.O(r)})();
//# sourceMappingURL=main.65bfaffe.js.map