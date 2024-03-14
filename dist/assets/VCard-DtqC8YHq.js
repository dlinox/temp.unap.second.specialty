import{bF as k,aZ as V,B as C,aj as v,aq as A,E as f,J as g,bG as T,aH as de,P as h,b as s,ai as I,a0 as b,ak as $,F as w,S as x,q as _,U as S,aM as ce,al as re,am as ue,b2 as oe,an as ve,ao as fe,ap as me,bk as ye,ar as ge,as as be,bd as ke,at as Ce,bl as Se,au as Ve,av as Ae,aw as he,ax as Ie,b3 as Pe,ay as Ne,az as Le,aA as je,bo as we,a7 as xe,be as _e,y as Be,b4 as Ee,aC as Te}from"./index-v34M9sht.js";const p=k.reduce((e,l)=>(e[l]={type:[Boolean,String,Number],default:!1},e),{}),R=k.reduce((e,l)=>{const a="offset"+V(l);return e[a]={type:[String,Number],default:null},e},{}),O=k.reduce((e,l)=>{const a="order"+V(l);return e[a]={type:[String,Number],default:null},e},{}),B={col:Object.keys(p),offset:Object.keys(R),order:Object.keys(O)};function $e(e,l,a){let t=e;if(!(a==null||a===!1)){if(l){const n=l.replace(e,"");t+=`-${n}`}return e==="col"&&(t="v-"+t),e==="col"&&(a===""||a===!0)||(t+=`-${a}`),t.toLowerCase()}}const pe=["auto","start","end","center","baseline","stretch"],Re=C({cols:{type:[Boolean,String,Number],default:!1},...p,offset:{type:[String,Number],default:null},...R,order:{type:[String,Number],default:null},...O,alignSelf:{type:String,default:null,validator:e=>pe.includes(e)},...v(),...A()},"VCol"),Qe=f()({name:"VCol",props:Re(),setup(e,l){let{slots:a}=l;const t=g(()=>{const n=[];let i;for(i in B)B[i].forEach(d=>{const r=e[d],u=$e(i,d,r);u&&n.push(u)});const c=n.some(d=>d.startsWith("v-col-"));return n.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return T(e.tag,{class:[t.value,e.class],style:e.style},(n=a.default)==null?void 0:n.call(a))}}}),P=["start","end","center"],D=["space-between","space-around","space-evenly"];function N(e,l){return k.reduce((a,t)=>{const n=e+V(t);return a[n]=l(),a},{})}const Oe=[...P,"baseline","stretch"],F=e=>Oe.includes(e),G=N("align",()=>({type:String,default:null,validator:F})),De=[...P,...D],M=e=>De.includes(e),U=N("justify",()=>({type:String,default:null,validator:M})),Fe=[...P,...D,"stretch"],K=e=>Fe.includes(e),q=N("alignContent",()=>({type:String,default:null,validator:K})),E={align:Object.keys(G),justify:Object.keys(U),alignContent:Object.keys(q)},Ge={align:"align",justify:"justify",alignContent:"align-content"};function Me(e,l,a){let t=Ge[e];if(a!=null){if(l){const n=l.replace(e,"");t+=`-${n}`}return t+=`-${a}`,t.toLowerCase()}}const Ue=C({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:F},...G,justify:{type:String,default:null,validator:M},...U,alignContent:{type:String,default:null,validator:K},...q,...v(),...A()},"VRow"),Xe=f()({name:"VRow",props:Ue(),setup(e,l){let{slots:a}=l;const t=g(()=>{const n=[];let i;for(i in E)E[i].forEach(c=>{const d=e[c],r=Me(i,c,d);r&&n.push(r)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return T(e.tag,{class:["v-row",t.value,e.class],style:e.style},(n=a.default)==null?void 0:n.call(a))}}}),Ke=f()({name:"VCardActions",props:v(),setup(e,l){let{slots:a}=l;return de({VBtn:{slim:!0,variant:"text"}}),h(()=>{var t;return s("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),qe=I("v-card-subtitle"),ze=I("v-card-title"),He=C({appendAvatar:String,appendIcon:b,prependAvatar:String,prependIcon:b,subtitle:[String,Number],title:[String,Number],...v(),...$()},"VCardItem"),Je=f()({name:"VCardItem",props:He(),setup(e,l){let{slots:a}=l;return h(()=>{var u;const t=!!(e.prependAvatar||e.prependIcon),n=!!(t||a.prepend),i=!!(e.appendAvatar||e.appendIcon),c=!!(i||a.append),d=!!(e.title!=null||a.title),r=!!(e.subtitle!=null||a.subtitle);return s("div",{class:["v-card-item",e.class],style:e.style},[n&&s("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?s(S,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):s(w,null,[e.prependAvatar&&s(x,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s(_,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),s("div",{class:"v-card-item__content"},[d&&s(ze,{key:"title"},{default:()=>{var o;return[((o=a.title)==null?void 0:o.call(a))??e.title]}}),r&&s(qe,{key:"subtitle"},{default:()=>{var o;return[((o=a.subtitle)==null?void 0:o.call(a))??e.subtitle]}}),(u=a.default)==null?void 0:u.call(a)]),c&&s("div",{key:"append",class:"v-card-item__append"},[a.append?s(S,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):s(w,null,[e.appendIcon&&s(_,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s(x,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),We=I("v-card-text"),Ye=C({appendAvatar:String,appendIcon:b,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:b,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ce(),...v(),...$(),...re(),...ue(),...oe(),...ve(),...fe(),...me(),...ye(),...A(),...ge(),...be({variant:"elevated"})},"VCard"),ea=f()({name:"VCard",directives:{Ripple:ke},props:Ye(),setup(e,l){let{attrs:a,slots:t}=l;const{themeClasses:n}=Ce(e),{borderClasses:i}=Se(e),{colorClasses:c,colorStyles:d,variantClasses:r}=Ve(e),{densityClasses:u}=Ae(e),{dimensionStyles:o}=he(e),{elevationClasses:z}=Ie(e),{loaderClasses:H}=Pe(e),{locationStyles:J}=Ne(e),{positionClasses:W}=Le(e),{roundedClasses:Y}=je(e),m=we(e,a),Z=g(()=>e.link!==!1&&m.isLink.value),y=g(()=>!e.disabled&&e.link!==!1&&(e.link||m.isClickable.value));return h(()=>{const Q=Z.value?"a":e.tag,X=!!(t.title||e.title!=null),ee=!!(t.subtitle||e.subtitle!=null),ae=X||ee,te=!!(t.append||e.appendAvatar||e.appendIcon),ne=!!(t.prepend||e.prependAvatar||e.prependIcon),le=!!(t.image||e.image),se=ae||ne||te,ie=!!(t.text||e.text!=null);return xe(s(Q,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":y.value},n.value,i.value,c.value,u.value,z.value,H.value,W.value,Y.value,r.value,e.class],style:[d.value,o.value,J.value,e.style],href:m.href.value,onClick:y.value&&m.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var L;return[le&&s("div",{key:"image",class:"v-card__image"},[t.image?s(S,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(Be,{key:"image-img",cover:!0,src:e.image},null)]),s(Ee,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),se&&s(Je,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),ie&&s(We,{key:"text"},{default:()=>{var j;return[((j=t.text)==null?void 0:j.call(t))??e.text]}}),(L=t.default)==null?void 0:L.call(t),t.actions&&s(Ke,null,{default:t.actions}),Te(y.value,"v-card")]}}),[[_e("ripple"),y.value&&e.ripple]])}),{}}});export{ea as V,Xe as a,Qe as b,Ke as c,qe as d,ze as e,We as f,Je as g};