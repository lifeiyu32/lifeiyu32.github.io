"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{28983:function(B,b,i){i.d(b,{l:function(){return u}});var u={padding:50,margin:0,minHeight:280,backgroundColor:"#fff",borderRadius:20,boxShadow:"0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)"}},37025:function(B,b,i){i.r(b),i.d(b,{default:function(){return s}});var u=i(68863),M=i(21612),j=i(71230),l=i(15746),S=i(4393),T=i(96074),D=i(40742),I=i(28983),h=i(85893),H=u.Z.Search,W=M.Z.Content,y=["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires."];function d(){for(var f=[],o=0;o<100;o++){var c=new Date(+new Date-Math.floor(Math.random()*1e10)).toISOString().split("T")[0]+" "+new Date().toTimeString().split(" ")[0],C=y[Math.floor(Math.random()*5)];f.push(c+" "+C)}return f}function s(){var f=(0,D.s0)();return(0,h.jsx)(M.Z,{children:(0,h.jsxs)(W,{style:I.l,children:[(0,h.jsx)(j.Z,{style:{marginTop:50,display:"flex",justifyContent:"center"},children:(0,h.jsx)(H,{placeholder:"\u8BF7\u8F93\u5165\u67E5\u8BE2\u4FE1\u606F",allowClear:!0,enterButton:"Search",size:"large",onSearch:function(){},style:{width:500}})}),(0,h.jsxs)(j.Z,{style:{marginTop:50,display:"flex",justifyContent:"space-around"},children:[(0,h.jsx)(l.Z,{span:8,children:(0,h.jsx)(S.Z,{title:"\u6700\u65B0\u5171\u4EAB\u7684\u4FE1\u606F",bodyStyle:{height:600,overflow:"auto"},headStyle:{background:"#1877ff",color:"white"},children:d().map(function(o,c){return(0,h.jsx)(S.Z.Grid,{style:{width:"100%",cursor:"pointer"},onClick:function(){return f("/share")},children:o},c)})})}),(0,h.jsx)(T.Z,{type:"vertical",style:{height:"auto"}}),(0,h.jsx)(l.Z,{span:8,children:(0,h.jsx)(S.Z,{title:"\u6700\u65B0\u53CD\u9988\u7684\u4FE1\u606F",bodyStyle:{height:600,overflow:"auto"},headStyle:{background:"#1877ff",color:"white"},children:d().map(function(o,c){return(0,h.jsx)(S.Z.Grid,{style:{width:"100%",cursor:"pointer"},onClick:function(){return f("/feedback")},children:o},c)})})})]})]})})}},4393:function(B,b,i){i.d(b,{Z:function(){return Z}});var u=i(94184),M=i.n(u),j=i(98423),l=i(67294),S=i(53124),T=i(98675),D=i(21687),I=i(75214),h=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t},W=e=>{var{prefixCls:n,className:t,hoverable:r=!0}=e,a=h(e,["prefixCls","className","hoverable"]);const{getPrefixCls:m}=l.useContext(S.E_),x=m("card",n),z=M()(`${x}-grid`,t,{[`${x}-grid-hoverable`]:r});return l.createElement("div",Object.assign({},a,{className:z}))},y=i(14747),d=i(67968),s=i(45503);const f=e=>{const{antCls:n,componentCls:t,headerHeight:r,cardPaddingBase:a,tabsMarginBottom:m}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:r,marginBottom:-1,padding:`0 ${a}px`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},(0,y.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},y.vS),{[`
          > ${t}-typography,
          > ${t}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${n}-tabs-top`]:{clear:"both",marginBottom:m,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`}}})},o=e=>{const{cardPaddingBase:n,colorBorderSecondary:t,cardShadow:r,lineWidth:a}=e;return{width:"33.33%",padding:n,border:0,borderRadius:0,boxShadow:`
      ${a}px 0 0 0 ${t},
      0 ${a}px 0 0 ${t},
      ${a}px ${a}px 0 0 ${t},
      ${a}px 0 0 0 ${t} inset,
      0 ${a}px 0 0 ${t} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:r}}},c=e=>{const{componentCls:n,iconCls:t,actionsLiMargin:r,cardActionsIconSize:a,colorBorderSecondary:m,actionsBg:x}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:x,borderTop:`${e.lineWidth}px ${e.lineType} ${m}`,display:"flex",borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `},(0,y.dF)()),{"& > li":{margin:r,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.cardActionsIconSize*2,fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${n}-btn), > ${t}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:`${e.fontSize*e.lineHeight}px`,transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${t}`]:{fontSize:a,lineHeight:`${a*e.lineHeight}px`}},"&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${m}`}}})},C=e=>Object.assign(Object.assign({margin:`-${e.marginXXS}px 0`,display:"flex"},(0,y.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},y.vS),"&-description":{color:e.colorTextDescription}}),$=e=>{const{componentCls:n,cardPaddingBase:t,colorFillAlter:r}=e;return{[`${n}-head`]:{padding:`0 ${t}px`,background:r,"&-title":{fontSize:e.fontSize}},[`${n}-body`]:{padding:`${e.padding}px ${t}px`}}},v=e=>{const{componentCls:n}=e;return{overflow:"hidden",[`${n}-body`]:{userSelect:"none"}}},Q=e=>{const{antCls:n,componentCls:t,cardShadow:r,cardHeadPadding:a,colorBorderSecondary:m,boxShadowTertiary:x,cardPaddingBase:z,extraColor:O}=e;return{[t]:Object.assign(Object.assign({},(0,y.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:x},[`${t}-head`]:f(e),[`${t}-extra`]:{marginInlineStart:"auto",color:O,fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:Object.assign({padding:z,borderRadius:` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},(0,y.dF)()),[`${t}-grid`]:o(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${n}-image-mask`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}},[`${t}-actions`]:c(e),[`${t}-meta`]:C(e)}),[`${t}-bordered`]:{border:`${e.lineWidth}px ${e.lineType} ${m}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:r}},[`${t}-contain-grid`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0 `,[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:-e.lineWidth,marginInlineStart:-e.lineWidth,padding:0}},[`${t}-contain-tabs`]:{[`> ${t}-head`]:{minHeight:0,[`${t}-head-title, ${t}-extra`]:{paddingTop:a}}},[`${t}-type-inner`]:$(e),[`${t}-loading`]:v(e),[`${t}-rtl`]:{direction:"rtl"}}},V=e=>{const{componentCls:n,cardPaddingSM:t,headerHeightSM:r,headerFontSizeSM:a}=e;return{[`${n}-small`]:{[`> ${n}-head`]:{minHeight:r,padding:`0 ${t}px`,fontSize:a,[`> ${n}-head-wrapper`]:{[`> ${n}-extra`]:{fontSize:e.fontSize}}},[`> ${n}-body`]:{padding:t}},[`${n}-small${n}-contain-tabs`]:{[`> ${n}-head`]:{[`${n}-head-title, ${n}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}};var L=(0,d.Z)("Card",e=>{const n=(0,s.TS)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[Q(n),V(n)]},e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText})),A=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};function _(e){return e.map((n,t)=>l.createElement("li",{style:{width:`${100/e.length}%`},key:`action-${t}`},l.createElement("span",null,n)))}var q=l.forwardRef((e,n)=>{const{prefixCls:t,className:r,rootClassName:a,style:m,extra:x,headStyle:z={},bodyStyle:O={},title:N,loading:K,bordered:F=!0,size:U,type:X,cover:ne,actions:ee,tabList:J,children:Y,activeTabKey:ae,defaultActiveTabKey:le,tabBarExtraContent:se,hoverable:ce,tabProps:ge={}}=e,he=A(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),{getPrefixCls:fe,direction:ue,card:w}=l.useContext(S.E_),pe=P=>{var E;(E=e.onTabChange)===null||E===void 0||E.call(e,P)},me=l.useMemo(()=>{let P=!1;return l.Children.forEach(Y,E=>{E&&E.type&&E.type===W&&(P=!0)}),P},[Y]),g=fe("card",t),[be,$e]=L(g),ve=l.createElement(D.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},Y),ie=ae!==void 0,xe=Object.assign(Object.assign({},ge),{[ie?"activeKey":"defaultActiveKey"]:ie?ae:le,tabBarExtraContent:se});let oe;const G=(0,T.Z)(U),ye=!G||G==="default"?"large":G,de=J?l.createElement(I.Z,Object.assign({size:ye},xe,{className:`${g}-head-tabs`,onChange:pe,items:J.map(P=>{var{tab:E}=P,Pe=A(P,["tab"]);return Object.assign({label:E},Pe)})})):null;(N||x||de)&&(oe=l.createElement("div",{className:`${g}-head`,style:z},l.createElement("div",{className:`${g}-head-wrapper`},N&&l.createElement("div",{className:`${g}-head-title`},N),x&&l.createElement("div",{className:`${g}-extra`},x)),de));const Se=ne?l.createElement("div",{className:`${g}-cover`},ne):null,Ce=l.createElement("div",{className:`${g}-body`,style:O},K?ve:Y),Oe=ee&&ee.length?l.createElement("ul",{className:`${g}-actions`},_(ee)):null,Ee=(0,j.Z)(he,["onTabChange"]),Me=M()(g,w==null?void 0:w.className,{[`${g}-loading`]:K,[`${g}-bordered`]:F,[`${g}-hoverable`]:ce,[`${g}-contain-grid`]:me,[`${g}-contain-tabs`]:J&&J.length,[`${g}-${G}`]:G,[`${g}-type-${X}`]:!!X,[`${g}-rtl`]:ue==="rtl"},r,a,$e),ze=Object.assign(Object.assign({},w==null?void 0:w.style),m);return be(l.createElement("div",Object.assign({ref:n},Ee,{className:Me,style:ze}),oe,Se,Ce,Oe))}),p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t},k=e=>{const{prefixCls:n,className:t,avatar:r,title:a,description:m}=e,x=p(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:z}=l.useContext(S.E_),O=z("card",n),N=M()(`${O}-meta`,t),K=r?l.createElement("div",{className:`${O}-meta-avatar`},r):null,F=a?l.createElement("div",{className:`${O}-meta-title`},a):null,U=m?l.createElement("div",{className:`${O}-meta-description`},m):null,X=F||U?l.createElement("div",{className:`${O}-meta-detail`},F,U):null;return l.createElement("div",Object.assign({},x,{className:N}),K,X)};const R=q;R.Grid=W,R.Meta=k;var Z=R},15746:function(B,b,i){var u=i(21584);b.Z=u.Z},96074:function(B,b,i){i.d(b,{Z:function(){return y}});var u=i(67294),M=i(94184),j=i.n(M),l=i(53124),S=i(14747),T=i(67968),D=i(45503);const I=d=>{const{componentCls:s,sizePaddingEdgeHorizontal:f,colorSplit:o,lineWidth:c,textPaddingInline:C,orientationMargin:$,verticalMarginInline:v}=d;return{[s]:Object.assign(Object.assign({},(0,S.Wf)(d)),{borderBlockStart:`${c}px solid ${o}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:v,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${c}px solid ${o}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${d.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${s}-with-text`]:{display:"flex",alignItems:"center",margin:`${d.dividerHorizontalWithTextGutterMargin}px 0`,color:d.colorTextHeading,fontWeight:500,fontSize:d.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${o}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${c}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${s}-with-text-left`]:{"&::before":{width:`${$*100}%`},"&::after":{width:`${100-$*100}%`}},[`&-horizontal${s}-with-text-right`]:{"&::before":{width:`${100-$*100}%`},"&::after":{width:`${$*100}%`}},[`${s}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:C},"&-dashed":{background:"none",borderColor:o,borderStyle:"dashed",borderWidth:`${c}px 0 0`},[`&-horizontal${s}-with-text${s}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${s}-dashed`]:{borderInlineStartWidth:c,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${s}-with-text`]:{color:d.colorText,fontWeight:"normal",fontSize:d.fontSize},[`&-horizontal${s}-with-text-left${s}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${s}-inner-text`]:{paddingInlineStart:f}},[`&-horizontal${s}-with-text-right${s}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${s}-inner-text`]:{paddingInlineEnd:f}}})}};var h=(0,T.Z)("Divider",d=>{const s=(0,D.TS)(d,{dividerHorizontalWithTextGutterMargin:d.margin,dividerHorizontalGutterMargin:d.marginLG,sizePaddingEdgeHorizontal:0});return[I(s)]},d=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:d.marginXS})),H=function(d,s){var f={};for(var o in d)Object.prototype.hasOwnProperty.call(d,o)&&s.indexOf(o)<0&&(f[o]=d[o]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,o=Object.getOwnPropertySymbols(d);c<o.length;c++)s.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(d,o[c])&&(f[o[c]]=d[o[c]]);return f},y=d=>{const{getPrefixCls:s,direction:f,divider:o}=u.useContext(l.E_),{prefixCls:c,type:C="horizontal",orientation:$="center",orientationMargin:v,className:Q,rootClassName:V,children:L,dashed:A,plain:_,style:te}=d,q=H(d,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),p=s("divider",c),[re,k]=h(p),R=$.length>0?`-${$}`:$,Z=!!L,e=$==="left"&&v!=null,n=$==="right"&&v!=null,t=j()(p,o==null?void 0:o.className,k,`${p}-${C}`,{[`${p}-with-text`]:Z,[`${p}-with-text${R}`]:Z,[`${p}-dashed`]:!!A,[`${p}-plain`]:!!_,[`${p}-rtl`]:f==="rtl",[`${p}-no-default-orientation-margin-left`]:e,[`${p}-no-default-orientation-margin-right`]:n},Q,V),r=u.useMemo(()=>typeof v=="number"?v:/^\d+$/.test(v)?Number(v):v,[v]),a=Object.assign(Object.assign({},e&&{marginLeft:r}),n&&{marginRight:r});return re(u.createElement("div",Object.assign({className:t,style:Object.assign(Object.assign({},o==null?void 0:o.style),te)},q,{role:"separator"}),L&&C!=="vertical"&&u.createElement("span",{className:`${p}-inner-text`,style:a},L)))}},71230:function(B,b,i){var u=i(92820);b.Z=u.Z}}]);
