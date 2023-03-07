"use strict";(self.webpackChunksamuel_aguilar=self.webpackChunksamuel_aguilar||[]).push([[57],{7057:function(e,t,a){a.r(t),a.d(t,{default:function(){return K}});var i=a(890),n=a(493),r=a(9164),o=a(1413),s=a(3366);var c=a(2791),d=a(4554),l=a(6907),u=a(184),p=["children","title"],m=(0,c.forwardRef)((function(e,t){var a=e.children,i=e.title,n=void 0===i?"":i,r=function(e,t){if(null==e)return{};var a,i,n=(0,s.Z)(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}(e,p);return(0,u.jsxs)(d.Z,(0,o.Z)((0,o.Z)({ref:t},r),{},{children:[(0,u.jsx)(l.ql,{children:(0,u.jsx)("title",{children:n})}),a]}))})),v=a(6934),f=a(7064),h=a(5021),x=a(9900),g=a(5597),Z=(0,v.ZP)(f.Z)((function(e){return{minWidth:0,marginRight:e.theme.spacing(.5)}})),b=(0,v.ZP)(g.Z)((function(){return{fontSize:15}}));function y(e){var t=e.text;return(0,u.jsxs)(h.ZP,{children:[(0,u.jsx)(Z,{children:(0,u.jsx)(b,{})}),(0,u.jsx)(x.Z,{primary:t})]})}var j=a(9834),C=a(885),O=a(4942),I=a(7462),F=a(8182),k=a(4419),S=a(2065),w=a(1402),P=a(3701),z=a(162),q=a(2071),G=a(6199),L=a(4065),R=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],N=(0,v.ZP)(P.Z,{shouldForwardProp:function(e){return(0,v.FO)(e)||"classes"===e},name:"MuiListItemButton",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,i=e.ownerState;return(0,I.Z)((t={display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,O.Z)(t,"&.".concat(L.Z.selected),(0,O.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,S.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(L.Z.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,S.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,O.Z)(t,"&.".concat(L.Z.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,S.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,S.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),(0,O.Z)(t,"&.".concat(L.Z.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,O.Z)(t,"&.".concat(L.Z.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),i.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},"flex-start"===i.alignItems&&{alignItems:"flex-start"},!i.disableGutters&&{paddingLeft:16,paddingRight:16},i.dense&&{paddingTop:4,paddingBottom:4})})),E=c.forwardRef((function(e,t){var a=(0,w.Z)({props:e,name:"MuiListItemButton"}),i=a.alignItems,n=void 0===i?"center":i,r=a.autoFocus,o=void 0!==r&&r,d=a.component,l=void 0===d?"div":d,p=a.children,m=a.dense,v=void 0!==m&&m,f=a.disableGutters,h=void 0!==f&&f,x=a.divider,g=void 0!==x&&x,Z=a.focusVisibleClassName,b=a.selected,y=void 0!==b&&b,j=a.className,C=(0,s.Z)(a,R),O=c.useContext(G.Z),S=c.useMemo((function(){return{dense:v||O.dense||!1,alignItems:n,disableGutters:h}}),[n,O.dense,v,h]),P=c.useRef(null);(0,z.Z)((function(){o&&P.current&&P.current.focus()}),[o]);var E=(0,I.Z)({},a,{alignItems:n,dense:S.dense,disableGutters:h,divider:g,selected:y}),M=function(e){var t=e.alignItems,a=e.classes,i=e.dense,n=e.disabled,r={root:["root",i&&"dense",!e.disableGutters&&"gutters",e.divider&&"divider",n&&"disabled","flex-start"===t&&"alignItemsFlexStart",e.selected&&"selected"]},o=(0,k.Z)(r,L.t,a);return(0,I.Z)({},a,o)}(E),V=(0,q.Z)(P,t);return(0,u.jsx)(G.Z.Provider,{value:S,children:(0,u.jsx)(N,(0,I.Z)({ref:V,href:C.href||C.to,component:(C.href||C.to)&&"div"===l?"a":l,focusVisibleClassName:(0,F.Z)(M.focusVisible,Z),ownerState:E,className:(0,F.Z)(M.root,j)},C,{classes:M,children:p}))})})),M=a(6125),V=a(2885),B=a(1131);function W(e){var t=e.item,a=(0,c.useState)(!1),i=(0,C.Z)(a,2),n=i[0],r=i[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(E,{onClick:function(){r((function(e){return!e}))},children:[(0,u.jsx)(x.Z,{primary:t.title}),n?(0,u.jsx)(V.Z,{}):(0,u.jsx)(B.Z,{})]}),(0,u.jsx)(M.Z,{in:n,timeout:"auto",unmountOnExit:!0,children:t.content})]})}function A(e){var t=e.items,a=e.title;return(0,u.jsx)(n.Z,{component:"nav",subheader:(0,u.jsx)(j.Z,{component:"div",id:"nested-list-subheader",children:a}),children:t.map((function(e){return(0,u.jsx)(W,{item:e})}))})}var D=(0,v.ZP)(d.Z)((function(e){e.theme;return{position:"relative"}})),H=(0,v.ZP)((function(e){return(0,u.jsx)(d.Z,(0,o.Z)({component:"img"},e))}))((function(e){e.theme;return{width:"100%",height:"60vh",objectFit:"cover"}})),T=(0,v.ZP)(d.Z)((function(e){return{position:"absolute",top:0,paddingLeft:e.theme.spacing(8),backgroundColor:"rgba(0, 0, 0, 0.4)",width:"100%",height:"100%",display:"flex",alignItems:"center"}})),_=(0,v.ZP)((function(e){return(0,u.jsx)(i.Z,(0,o.Z)({variant:"h1"},e))}))((function(e){return{color:e.theme.palette.common.white,letterSpacing:10}}));function J(e){var t=e.path,a=e.title;return(0,u.jsxs)(D,{children:[(0,u.jsx)(H,{src:""+t,alt:"Contabilidad"}),(0,u.jsx)(T,{children:(0,u.jsx)(_,{children:a})})]})}function K(){var e=[{title:"Servicios de auditor\xeda interna",content:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.Z,{children:"Ponemos a tu disposici\xf3n a nuestros Certified Fraud Examiners y expertos en investigaci\xf3n y contabilidad forense para identificar y cuantificar da\xf1os y riegos que afecten tu patrimonio u operaciones de tu compa\xf1\xeda:"}),(0,u.jsxs)(n.Z,{dense:!0,children:[(0,u.jsx)(y,{text:"Investigaciones de antecedentes de individuos y corporativos con la finalidad de  identificar riesgos en transacciones (laborales o de inversi\xf3n) y de \xedndole reputacional."}),(0,u.jsx)(y,{text:"Contabilidad forense como parte de una investigaci\xf3n de fraude o de un proceso de reclamo de seguro."})]})]})},{title:"Servicios de auditor\xeda interna",content:(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(i.Z,{children:"Ponemos a tu disposici\xf3n a nuestros Certified Fraud Examiners y expertos en investigaci\xf3n y contabilidad forense para identificar y cuantificar da\xf1os y riegos que afecten tu patrimonio u operaciones de tu compa\xf1\xeda:"})})}];return(0,u.jsxs)(m,{title:"Contabilidad | Samuel Aguilar",children:[(0,u.jsx)(J,{path:"/static/accounting.jpeg",title:"Contabilidad"}),(0,u.jsxs)(r.Z,{maxWidth:"lg",sx:{py:2},children:[(0,u.jsx)(i.Z,{variant:"h3",children:"Contabilidad"}),(0,u.jsx)(i.Z,{pt:2,children:"Nuestra experiencia nos permite ofrecer una variedad de servicios respaldados con alianzas de empresas tecnol\xf3gicas que automatizan los procesos por ti. Gestionamos y minimizamos los riesgos a los que tu negocio est\xe1 expuesto en materia de finanzas corporativas, optimizaci\xf3n de recursos, fraude y corrupci\xf3n, y auditor\xeda interna."}),(0,u.jsx)(A,{items:e,title:"Servicios de contabilidad"})]})]})}},2885:function(e,t,a){var i=a(4836);t.Z=void 0;var n=i(a(5649)),r=a(184),o=(0,n.default)((0,r.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.Z=o},1131:function(e,t,a){var i=a(4836);t.Z=void 0;var n=i(a(5649)),r=a(184),o=(0,n.default)((0,r.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=o},5597:function(e,t,a){var i=a(4836);t.Z=void 0;var n=i(a(5649)),r=a(184),o=(0,n.default)((0,r.jsx)("path",{d:"M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57c.25-.35.25-.81 0-1.16l-3.96-5.58C16.26 5.31 15.65 5 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58z"}),"LabelImportantRounded");t.Z=o}}]);
//# sourceMappingURL=57.ad4457c8.chunk.js.map