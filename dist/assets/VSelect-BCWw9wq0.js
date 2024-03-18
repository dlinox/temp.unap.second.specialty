import{B as $,b7 as al,b8 as De,E as X,I as te,b9 as nl,r as ee,O as ve,M as j,J as k,P as J,X as _e,N as ye,R as G,ba as Ce,b as u,U as ue,bb as ze,a0 as Q,a$ as Ee,aj as ne,ak as Oe,ar as be,a1 as Le,aU as ol,aH as Me,aB as _,bc as pe,bd as He,H as z,a2 as ul,a7 as me,be as Ge,F as le,q as Y,aV as sl,av as Ue,Y as ce,L as il,aG as cl,Z as he,C as $e,bf as rl,aq as Ve,bg as qe,aO as dl,aP as Ne,bh as Ke,aQ as de,bi as Ie,aX as re,as as je,at as Xe,b5 as xe,aM as vl,am as fl,bj as ml,ap as hl,bk as gl,aN as yl,G as We,bl,au as pl,ax as Vl,aA as Sl,bm as kl,bn as Cl,bo as Il,aC as xl,bp as Pl,a8 as wl,S as ge,aT as Pe,bq as Tl,al as Al,aW as Bl,aw as Rl,br as Fl,aI as ie,bs as Dl,bt as _l,bu as zl,D as El,K as Ol,Q as Ll,v as Ml,x as we,T as Hl,i as Gl}from"./index-CnSf6oKy.js";import{c as Ul,m as $l,u as ql,V as Te}from"./VTextField-BqgT8V0_.js";const Nl=$({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...al({origin:"center center",scrollStrategy:"block",transition:{component:De},zIndex:2400})},"VDialog"),ht=X()({name:"VDialog",props:Nl(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const n=te(e,"modelValue"),{scopeId:o}=nl(),i=ee();function v(l){var b,h;const f=l.relatedTarget,g=l.target;if(f!==g&&((b=i.value)!=null&&b.contentEl)&&((h=i.value)!=null&&h.globalTop)&&![document,i.value.contentEl].includes(g)&&!i.value.contentEl.contains(g)){const I=ze(i.value.contentEl);if(!I.length)return;const y=I[0],x=I[I.length-1];f===y?x.focus():y.focus()}}ve&&j(()=>n.value&&e.retainFocus,l=>{l?document.addEventListener("focusin",v):document.removeEventListener("focusin",v)},{immediate:!0}),j(n,async l=>{var f,g;await ye(),l?(f=i.value.contentEl)==null||f.focus({preventScroll:!0}):(g=i.value.activatorEl)==null||g.focus({preventScroll:!0})});const a=k(()=>G({"aria-haspopup":"dialog","aria-expanded":String(n.value)},e.activatorProps));return J(()=>{const l=Ce.filterProps(e);return u(Ce,G({ref:i,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},l,{modelValue:n.value,"onUpdate:modelValue":f=>n.value=f,"aria-modal":"true",activatorProps:a.value,role:"dialog"},o),{activator:t.activator,default:function(){for(var f=arguments.length,g=new Array(f),b=0;b<f;b++)g[b]=arguments[b];return u(ue,{root:"VDialog"},{default:()=>{var h;return[(h=t.default)==null?void 0:h.call(t,...g)]}})}})}),_e({},i)}}),Ye=Symbol.for("vuetify:selection-control-group"),Qe=$({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:Q,trueIcon:Q,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Ee},...ne(),...Oe(),...be()},"SelectionControlGroup"),Kl=$({...Qe({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),gt=X()({name:"VSelectionControlGroup",props:Kl(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const n=te(e,"modelValue"),o=Le(),i=k(()=>e.id||`v-selection-control-group-${o}`),v=k(()=>e.name||i.value),a=new Set;return ol(Ye,{modelValue:n,forceUpdate:()=>{a.forEach(l=>l())},onForceUpdate:l=>{a.add(l),pe(()=>{a.delete(l)})}}),Me({[e.defaultsTarget]:{color:_(e,"color"),disabled:_(e,"disabled"),density:_(e,"density"),error:_(e,"error"),inline:_(e,"inline"),modelValue:n,multiple:k(()=>!!e.multiple||e.multiple==null&&Array.isArray(n.value)),name:v,falseIcon:_(e,"falseIcon"),trueIcon:_(e,"trueIcon"),readonly:_(e,"readonly"),ripple:_(e,"ripple"),type:_(e,"type"),valueComparator:_(e,"valueComparator")}}),J(()=>{var l;return u("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(l=t.default)==null?void 0:l.call(t)])}),{}}}),Je=$({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...ne(),...Qe()},"VSelectionControl");function jl(e){const d=sl(Ye,void 0),{densityClasses:t}=Ue(e),n=te(e,"modelValue"),o=k(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),i=k(()=>e.falseValue!==void 0?e.falseValue:!1),v=k(()=>!!e.multiple||e.multiple==null&&Array.isArray(n.value)),a=k({get(){const I=d?d.modelValue.value:n.value;return v.value?ce(I).some(y=>e.valueComparator(y,o.value)):e.valueComparator(I,o.value)},set(I){if(e.readonly)return;const y=I?o.value:i.value;let x=y;v.value&&(x=I?[...ce(n.value),y]:ce(n.value).filter(c=>!e.valueComparator(c,o.value))),d?d.modelValue.value=x:n.value=x}}),{textColorClasses:l,textColorStyles:f}=il(k(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:g,backgroundColorStyles:b}=cl(k(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),h=k(()=>a.value?e.trueIcon:e.falseIcon);return{group:d,densityClasses:t,trueValue:o,falseValue:i,model:a,textColorClasses:l,textColorStyles:f,backgroundColorClasses:g,backgroundColorStyles:b,icon:h}}const Ae=X()({name:"VSelectionControl",directives:{Ripple:He},inheritAttrs:!1,props:Je(),emits:{"update:modelValue":e=>!0},setup(e,d){let{attrs:t,slots:n}=d;const{group:o,densityClasses:i,icon:v,model:a,textColorClasses:l,textColorStyles:f,backgroundColorClasses:g,backgroundColorStyles:b,trueValue:h}=jl(e),I=Le(),y=z(!1),x=z(!1),c=ee(),P=k(()=>e.id||`input-${I}`),w=k(()=>!e.disabled&&!e.readonly);o==null||o.onForceUpdate(()=>{c.value&&(c.value.checked=a.value)});function D(S){w.value&&(y.value=!0,he(S.target,":focus-visible")!==!1&&(x.value=!0))}function R(){y.value=!1,x.value=!1}function q(S){S.stopPropagation()}function W(S){w.value&&(e.readonly&&o&&ye(()=>o.forceUpdate()),a.value=S.target.checked)}return J(()=>{var U,N;const S=n.label?n.label({label:e.label,props:{for:P.value}}):e.label,[L,E]=ul(t),M=u("input",G({ref:c,checked:a.value,disabled:!!e.disabled,id:P.value,onBlur:R,onFocus:D,onInput:W,"aria-disabled":!!e.disabled,type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},E),null);return u("div",G({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":y.value,"v-selection-control--focus-visible":x.value,"v-selection-control--inline":e.inline},i.value,e.class]},L,{style:e.style}),[u("div",{class:["v-selection-control__wrapper",l.value],style:f.value},[(U=n.default)==null?void 0:U.call(n,{backgroundColorClasses:g,backgroundColorStyles:b}),me(u("div",{class:["v-selection-control__input"]},[((N=n.input)==null?void 0:N.call(n,{model:a,textColorClasses:l,textColorStyles:f,backgroundColorClasses:g,backgroundColorStyles:b,inputNode:M,icon:v.value,props:{onFocus:D,onBlur:R,id:P.value}}))??u(le,null,[v.value&&u(Y,{key:"icon",icon:v.value},null),M])]),[[Ge("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),S&&u(Ul,{for:P.value,onClick:q},{default:()=>[S]})])}),{isFocused:y,input:c}}}),Xl=$({indeterminate:Boolean,indeterminateIcon:{type:Q,default:"$checkboxIndeterminate"},...Je({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Wl=X()({name:"VCheckboxBtn",props:Xl(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,d){let{slots:t}=d;const n=te(e,"indeterminate"),o=te(e,"modelValue");function i(l){n.value&&(n.value=!1)}const v=k(()=>n.value?e.indeterminateIcon:e.falseIcon),a=k(()=>n.value?e.indeterminateIcon:e.trueIcon);return J(()=>{const l=$e(Ae.filterProps(e),["modelValue"]);return u(Ae,G(l,{modelValue:o.value,"onUpdate:modelValue":[f=>o.value=f,i],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:v.value,trueIcon:a.value,"aria-checked":n.value?"mixed":void 0}),t)}),{}}});function Be(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function Re(e){let{selectedElement:d,containerSize:t,contentSize:n,isRtl:o,currentScrollOffset:i,isHorizontal:v}=e;const a=v?d.clientWidth:d.clientHeight,l=v?d.offsetLeft:d.offsetTop,f=o&&v?n-l-a:l,g=t+i,b=a+f,h=a*.4;return f<=i?i=Math.max(f-h,0):g<=b&&(i=Math.min(i-(g-b-h),n-t)),i}function Yl(e){let{selectedElement:d,containerSize:t,contentSize:n,isRtl:o,isHorizontal:i}=e;const v=i?d.clientWidth:d.clientHeight,a=i?d.offsetLeft:d.offsetTop,l=o&&i?n-a-v/2-t/2:a+v/2-t/2;return Math.min(n-t,Math.max(0,l))}const Ql=Symbol.for("vuetify:v-slide-group"),Ze=$({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ql},nextIcon:{type:Q,default:"$next"},prevIcon:{type:Q,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ne(),...rl(),...Ve(),...qe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Fe=X()({name:"VSlideGroup",props:Ze(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const{isRtl:n}=dl(),{displayClasses:o,mobile:i}=Ne(e),v=Ke(e,e.symbol),a=z(!1),l=z(0),f=z(0),g=z(0),b=k(()=>e.direction==="horizontal"),{resizeRef:h,contentRect:I}=de(),{resizeRef:y,contentRect:x}=de(),c=k(()=>v.selected.value.length?v.items.value.findIndex(r=>r.id===v.selected.value[0]):-1),P=k(()=>v.selected.value.length?v.items.value.findIndex(r=>r.id===v.selected.value[v.selected.value.length-1]):-1);if(ve){let r=-1;j(()=>[v.selected.value,I.value,x.value,b.value],()=>{cancelAnimationFrame(r),r=requestAnimationFrame(()=>{if(I.value&&x.value){const p=b.value?"width":"height";f.value=I.value[p],g.value=x.value[p],a.value=f.value+1<g.value}if(c.value>=0&&y.value){const p=y.value.children[P.value];c.value===0||!a.value?l.value=0:e.centerActive?l.value=Yl({selectedElement:p,containerSize:f.value,contentSize:g.value,isRtl:n.value,isHorizontal:b.value}):a.value&&(l.value=Re({selectedElement:p,containerSize:f.value,contentSize:g.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:b.value}))}})})}const w=z(!1);let D=0,R=0;function q(r){const p=b.value?"clientX":"clientY";R=(n.value&&b.value?-1:1)*l.value,D=r.touches[0][p],w.value=!0}function W(r){if(!a.value)return;const p=b.value?"clientX":"clientY",V=n.value&&b.value?-1:1;l.value=V*(R+D-r.touches[0][p])}function S(r){const p=g.value-f.value;l.value<0||!a.value?l.value=0:l.value>=p&&(l.value=p),w.value=!1}function L(){h.value&&(h.value[b.value?"scrollLeft":"scrollTop"]=0)}const E=z(!1);function M(r){if(E.value=!0,!(!a.value||!y.value)){for(const p of r.composedPath())for(const V of y.value.children)if(V===p){l.value=Re({selectedElement:V,containerSize:f.value,contentSize:g.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:b.value});return}}}function U(r){E.value=!1}function N(r){var p;!E.value&&!(r.relatedTarget&&((p=y.value)!=null&&p.contains(r.relatedTarget)))&&F()}function K(r){y.value&&(b.value?r.key==="ArrowRight"?F(n.value?"prev":"next"):r.key==="ArrowLeft"&&F(n.value?"next":"prev"):r.key==="ArrowDown"?F("next"):r.key==="ArrowUp"&&F("prev"),r.key==="Home"?F("first"):r.key==="End"&&F("last"))}function F(r){var p,V,T,A,H;if(y.value)if(!r)(p=ze(y.value)[0])==null||p.focus();else if(r==="next"){const B=(V=y.value.querySelector(":focus"))==null?void 0:V.nextElementSibling;B?B.focus():F("first")}else if(r==="prev"){const B=(T=y.value.querySelector(":focus"))==null?void 0:T.previousElementSibling;B?B.focus():F("last")}else r==="first"?(A=y.value.firstElementChild)==null||A.focus():r==="last"&&((H=y.value.lastElementChild)==null||H.focus())}function O(r){const p=l.value+(r==="prev"?-1:1)*f.value;l.value=re(p,0,g.value-f.value)}const se=k(()=>{let r=l.value>g.value-f.value?-(g.value-f.value)+Be(g.value-f.value-l.value):-l.value;l.value<=0&&(r=Be(-l.value));const p=n.value&&b.value?-1:1;return{transform:`translate${b.value?"X":"Y"}(${p*r}px)`,transition:w.value?"none":"",willChange:w.value?"transform":""}}),Z=k(()=>({next:v.next,prev:v.prev,select:v.select,isSelected:v.isSelected})),m=k(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!i.value;case!0:return a.value||Math.abs(l.value)>0;case"mobile":return i.value||a.value||Math.abs(l.value)>0;default:return!i.value&&(a.value||Math.abs(l.value)>0)}}),s=k(()=>Math.abs(l.value)>0),C=k(()=>g.value>Math.abs(l.value)+f.value);return J(()=>u(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!b.value,"v-slide-group--has-affixes":m.value,"v-slide-group--is-overflowing":a.value},o.value,e.class],style:e.style,tabindex:E.value||v.selected.value.length?-1:0,onFocus:N},{default:()=>{var r,p,V;return[m.value&&u("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!s.value}],onClick:()=>s.value&&O("prev")},[((r=t.prev)==null?void 0:r.call(t,Z.value))??u(Ie,null,{default:()=>[u(Y,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),u("div",{key:"container",ref:h,class:"v-slide-group__container",onScroll:L},[u("div",{ref:y,class:"v-slide-group__content",style:se.value,onTouchstartPassive:q,onTouchmovePassive:W,onTouchendPassive:S,onFocusin:M,onFocusout:U,onKeydown:K},[(p=t.default)==null?void 0:p.call(t,Z.value)])]),m.value&&u("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!C.value}],onClick:()=>C.value&&O("next")},[((V=t.next)==null?void 0:V.call(t,Z.value))??u(Ie,null,{default:()=>[u(Y,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:v.selected,scrollTo:O,scrollOffset:l,focus:F}}}),el=Symbol.for("vuetify:v-chip-group"),Jl=$({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Ee},...Ze(),...ne(),...qe({selectedClass:"v-chip--selected"}),...Ve(),...be(),...je({variant:"tonal"})},"VChipGroup");X()({name:"VChipGroup",props:Jl(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const{themeClasses:n}=Xe(e),{isSelected:o,select:i,next:v,prev:a,selected:l}=Ke(e,el);return Me({VChip:{color:_(e,"color"),disabled:_(e,"disabled"),filter:_(e,"filter"),variant:_(e,"variant")}}),J(()=>{const f=Fe.filterProps(e);return u(Fe,G(f,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style}),{default:()=>{var g;return[(g=t.default)==null?void 0:g.call(t,{isSelected:o,select:i,next:v,prev:a,selected:l.value})]}})}),{}}});const Zl=$({activeClass:String,appendAvatar:String,appendIcon:Q,closable:Boolean,closeIcon:{type:Q,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:Q,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:xe(),onClickOnce:xe(),...vl(),...ne(),...Oe(),...fl(),...ml(),...hl(),...gl(),...yl(),...Ve({tag:"span"}),...be(),...je({variant:"tonal"})},"VChip"),et=X()({name:"VChip",directives:{Ripple:He},props:Zl(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,d){let{attrs:t,emit:n,slots:o}=d;const{t:i}=We(),{borderClasses:v}=bl(e),{colorClasses:a,colorStyles:l,variantClasses:f}=pl(e),{densityClasses:g}=Ue(e),{elevationClasses:b}=Vl(e),{roundedClasses:h}=Sl(e),{sizeClasses:I}=kl(e),{themeClasses:y}=Xe(e),x=te(e,"modelValue"),c=Cl(e,el,!1),P=Il(e,t),w=k(()=>e.link!==!1&&P.isLink.value),D=k(()=>!e.disabled&&e.link!==!1&&(!!c||e.link||P.isClickable.value)),R=k(()=>({"aria-label":i(e.closeLabel),onClick(S){S.stopPropagation(),x.value=!1,n("click:close",S)}}));function q(S){var L;n("click",S),D.value&&((L=P.navigate)==null||L.call(P,S),c==null||c.toggle())}function W(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),q(S))}return()=>{const S=P.isLink.value?"a":e.tag,L=!!(e.appendIcon||e.appendAvatar),E=!!(L||o.append),M=!!(o.close||e.closable),U=!!(o.filter||e.filter)&&c,N=!!(e.prependIcon||e.prependAvatar),K=!!(N||o.prepend),F=!c||c.isSelected.value;return x.value&&me(u(S,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":D.value,"v-chip--filter":U,"v-chip--pill":e.pill},y.value,v.value,F?a.value:void 0,g.value,b.value,h.value,I.value,f.value,c==null?void 0:c.selectedClass.value,e.class],style:[F?l.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:P.href.value,tabindex:D.value?0:void 0,onClick:q,onKeydown:D.value&&!w.value&&W},{default:()=>{var O;return[xl(D.value,"v-chip"),U&&u(Pl,{key:"filter"},{default:()=>[me(u("div",{class:"v-chip__filter"},[o.filter?u(ue,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):u(Y,{key:"filter-icon",icon:e.filterIcon},null)]),[[wl,c.isSelected.value]])]}),K&&u("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?u(ue,{key:"prepend-defaults",disabled:!N,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):u(le,null,[e.prependIcon&&u(Y,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&u(ge,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),u("div",{class:"v-chip__content","data-no-activator":""},[((O=o.default)==null?void 0:O.call(o,{isSelected:c==null?void 0:c.isSelected.value,selectedClass:c==null?void 0:c.selectedClass.value,select:c==null?void 0:c.select,toggle:c==null?void 0:c.toggle,value:c==null?void 0:c.value.value,disabled:e.disabled}))??e.text]),E&&u("div",{key:"append",class:"v-chip__append"},[o.append?u(ue,{key:"append-defaults",disabled:!L,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):u(le,null,[e.appendIcon&&u(Y,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&u(ge,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),M&&u("button",G({key:"close",class:"v-chip__close",type:"button"},R.value),[o.close?u(ue,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):u(Y,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ge("ripple"),D.value&&e.ripple,null]])}}}),lt=$({renderless:Boolean,...ne()},"VVirtualScrollItem"),tt=X()({name:"VVirtualScrollItem",inheritAttrs:!1,props:lt(),emits:{"update:height":e=>!0},setup(e,d){let{attrs:t,emit:n,slots:o}=d;const{resizeRef:i,contentRect:v}=de(void 0,"border");j(()=>{var a;return(a=v.value)==null?void 0:a.height},a=>{a!=null&&n("update:height",a)}),J(()=>{var a,l;return e.renderless?u(le,null,[(a=o.default)==null?void 0:a.call(o,{itemRef:i})]):u("div",G({ref:i,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(l=o.default)==null?void 0:l.call(o)])})}}),at=-1,nt=1,fe=100,ot=$({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function ut(e,d){const t=Ne(),n=z(0);Pe(()=>{n.value=parseFloat(e.itemHeight||0)});const o=z(0),i=z(Math.ceil((parseInt(e.height)||t.height.value)/(n.value||16))||1),v=z(0),a=z(0),l=ee(),f=ee();let g=0;const{resizeRef:b,contentRect:h}=de();Pe(()=>{b.value=l.value});const I=k(()=>{var s;return l.value===document.documentElement?t.height.value:((s=h.value)==null?void 0:s.height)||parseInt(e.height)||0}),y=k(()=>!!(l.value&&f.value&&I.value&&n.value));let x=Array.from({length:d.value.length}),c=Array.from({length:d.value.length});const P=z(0);let w=-1;function D(s){return x[s]||n.value}const R=Tl(()=>{const s=performance.now();c[0]=0;const C=d.value.length;for(let r=1;r<=C-1;r++)c[r]=(c[r-1]||0)+D(r-1);P.value=Math.max(P.value,performance.now()-s)},P),q=j(y,s=>{s&&(q(),g=f.value.offsetTop,R.immediate(),O(),~w&&ye(()=>{ve&&window.requestAnimationFrame(()=>{Z(w),w=-1})}))});pe(()=>{R.clear()});function W(s,C){const r=x[s],p=n.value;n.value=p?Math.min(n.value,C):C,(r!==C||p!==n.value)&&(x[s]=C,R())}function S(s){return s=re(s,0,d.value.length-1),c[s]||0}function L(s){return st(c,s)}let E=0,M=0,U=0;j(I,(s,C)=>{C&&(O(),s<C&&requestAnimationFrame(()=>{M=0,O()}))});function N(){if(!l.value||!f.value)return;const s=l.value.scrollTop,C=performance.now();C-U>500?(M=Math.sign(s-E),g=f.value.offsetTop):M=s-E,E=s,U=C,O()}function K(){!l.value||!f.value||(M=0,U=0,O())}let F=-1;function O(){cancelAnimationFrame(F),F=requestAnimationFrame(se)}function se(){if(!l.value||!I.value)return;const s=E-g,C=Math.sign(M),r=Math.max(0,s-fe),p=re(L(r),0,d.value.length),V=s+I.value+fe,T=re(L(V)+1,p+1,d.value.length);if((C!==at||p<o.value)&&(C!==nt||T>i.value)){const A=S(o.value)-S(p),H=S(T)-S(i.value);Math.max(A,H)>fe?(o.value=p,i.value=T):(p<=0&&(o.value=p),T>=d.value.length&&(i.value=T))}v.value=S(o.value),a.value=S(d.value.length)-S(i.value)}function Z(s){const C=S(s);!l.value||s&&!C?w=s:l.value.scrollTop=C}const m=k(()=>d.value.slice(o.value,i.value).map((s,C)=>({raw:s,index:C+o.value})));return j(d,()=>{x=Array.from({length:d.value.length}),c=Array.from({length:d.value.length}),R.immediate(),O()},{deep:!0}),{containerRef:l,markerRef:f,computedItems:m,paddingTop:v,paddingBottom:a,scrollToIndex:Z,handleScroll:N,handleScrollend:K,handleItemResize:W}}function st(e,d){let t=e.length-1,n=0,o=0,i=null,v=-1;if(e[t]<d)return t;for(;n<=t;)if(o=n+t>>1,i=e[o],i>d)t=o-1;else if(i<d)v=o,n=o+1;else return i===d?o:n;return v}const it=$({items:{type:Array,default:()=>[]},renderless:Boolean,...ot(),...ne(),...Al()},"VVirtualScroll"),ct=X()({name:"VVirtualScroll",props:it(),setup(e,d){let{slots:t}=d;const n=Bl("VVirtualScroll"),{dimensionStyles:o}=Rl(e),{containerRef:i,markerRef:v,handleScroll:a,handleScrollend:l,handleItemResize:f,scrollToIndex:g,paddingTop:b,paddingBottom:h,computedItems:I}=ut(e,_(e,"items"));return Fl(()=>e.renderless,()=>{function y(){var P,w;const c=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";i.value===document.documentElement?(document[c]("scroll",a,{passive:!0}),document[c]("scrollend",l)):((P=i.value)==null||P[c]("scroll",a,{passive:!0}),(w=i.value)==null||w[c]("scrollend",l))}Dl(()=>{i.value=_l(n.vnode.el,!0),y(!0)}),pe(y)}),J(()=>{const y=I.value.map(x=>u(tt,{key:x.index,renderless:e.renderless,"onUpdate:height":c=>f(x.index,c)},{default:c=>{var P;return(P=t.default)==null?void 0:P.call(t,{item:x.raw,index:x.index,...c})}}));return e.renderless?u(le,null,[u("div",{ref:v,class:"v-virtual-scroll__spacer",style:{paddingTop:ie(b.value)}},null),y,u("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ie(h.value)}},null)]):u("div",{ref:i,class:["v-virtual-scroll",e.class],onScrollPassive:a,onScrollend:l,style:[o.value,e.style]},[u("div",{ref:v,class:"v-virtual-scroll__container",style:{paddingTop:ie(b.value),paddingBottom:ie(h.value)}},[y])])}),{scrollToIndex:g}}});function rt(e,d){const t=z(!1);let n;function o(a){cancelAnimationFrame(n),t.value=!0,n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{t.value=!1})})}async function i(){await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>{if(t.value){const l=j(t,()=>{l(),a()})}else a()})}async function v(a){var g,b;if(a.key==="Tab"&&((g=d.value)==null||g.focus()),!["PageDown","PageUp","Home","End"].includes(a.key))return;const l=(b=e.value)==null?void 0:b.$el;if(!l)return;(a.key==="Home"||a.key==="End")&&l.scrollTo({top:a.key==="Home"?0:l.scrollHeight,behavior:"smooth"}),await i();const f=l.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(a.key==="PageDown"||a.key==="Home"){const h=l.getBoundingClientRect().top;for(const I of f)if(I.getBoundingClientRect().top>=h){I.focus();break}}else{const h=l.getBoundingClientRect().bottom;for(const I of[...f].reverse())if(I.getBoundingClientRect().bottom<=h){I.focus();break}}}return{onListScroll:o,onListKeydown:v}}const dt=$({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:Q,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...zl({itemChildren:!1})},"Select"),vt=$({...dt(),...$e($l({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...El({transition:{component:De}})},"VSelect"),yt=X()({name:"VSelect",props:vt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,d){let{slots:t}=d;const{t:n}=We(),o=ee(),i=ee(),v=ee(),a=te(e,"menu"),l=k({get:()=>a.value,set:m=>{var s;a.value&&!m&&((s=i.value)!=null&&s.ΨopenChildren)||(a.value=m)}}),{items:f,transformIn:g,transformOut:b}=Ol(e),h=te(e,"modelValue",[],m=>g(m===null?[null]:ce(m)),m=>{const s=b(m);return e.multiple?s:s[0]??null}),I=k(()=>typeof e.counterValue=="function"?e.counterValue(h.value):typeof e.counterValue=="number"?e.counterValue:h.value.length),y=ql(),x=k(()=>h.value.map(m=>m.value)),c=z(!1),P=k(()=>l.value?e.closeText:e.openText);let w="",D;const R=k(()=>e.hideSelected?f.value.filter(m=>!h.value.some(s=>s===m)):f.value),q=k(()=>e.hideNoData&&!R.value.length||e.readonly||(y==null?void 0:y.isReadonly.value)),W=k(()=>{var m;return{...e.menuProps,activatorProps:{...((m=e.menuProps)==null?void 0:m.activatorProps)||{},"aria-haspopup":"listbox"}}}),S=ee(),{onListScroll:L,onListKeydown:E}=rt(S,o);function M(m){e.openOnClear&&(l.value=!0)}function U(){q.value||(l.value=!l.value)}function N(m){var V,T;if(!m.key||e.readonly||y!=null&&y.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(m.key)&&m.preventDefault(),["Enter","ArrowDown"," "].includes(m.key)&&(l.value=!0),["Escape","Tab"].includes(m.key)&&(l.value=!1),m.key==="Home"?(V=S.value)==null||V.focus("first"):m.key==="End"&&((T=S.value)==null||T.focus("last"));const s=1e3;function C(A){const H=A.key.length===1,B=!A.ctrlKey&&!A.metaKey&&!A.altKey;return H&&B}if(e.multiple||!C(m))return;const r=performance.now();r-D>s&&(w=""),w+=m.key.toLowerCase(),D=r;const p=f.value.find(A=>A.title.toLowerCase().startsWith(w));p!==void 0&&(h.value=[p])}function K(m){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(e.multiple){const C=h.value.findIndex(r=>e.valueComparator(r.value,m.value));if(s=C===-1,s)h.value=[...h.value,m];else{const r=[...h.value];r.splice(C,1),h.value=r}}else h.value=s?[m]:[],l.value=!1}function F(m){var s;(s=S.value)!=null&&s.$el.contains(m.relatedTarget)||(l.value=!1)}function O(){var m;c.value&&((m=o.value)==null||m.focus())}function se(m){c.value=!0}function Z(m){if(m==null)h.value=[];else if(he(o.value,":autofill")||he(o.value,":-webkit-autofill")){const s=f.value.find(C=>C.title===m);s&&K(s)}else o.value&&(o.value.value="")}return j(l,()=>{if(!e.hideSelected&&l.value&&h.value.length){const m=R.value.findIndex(s=>h.value.some(C=>e.valueComparator(C.value,s.value)));ve&&window.requestAnimationFrame(()=>{var s;m>=0&&((s=v.value)==null||s.scrollToIndex(m))})}}),j(R,(m,s)=>{c.value&&(!m.length&&e.hideNoData&&(l.value=!1),!s.length&&m.length&&(l.value=!0))}),J(()=>{const m=!!(e.chips||t.chip),s=!!(!e.hideNoData||R.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),C=h.value.length>0,r=Te.filterProps(e),p=C||!c.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return u(Te,G({ref:o},r,{modelValue:h.value.map(V=>V.props.value).join(", "),"onUpdate:modelValue":Z,focused:c.value,"onUpdate:focused":V=>c.value=V,validationValue:h.externalValue,counterValue:I.value,dirty:C,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":h.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:p,"onClick:clear":M,"onMousedown:control":U,onBlur:F,onKeydown:N,"aria-label":n(P.value),title:n(P.value)}),{...t,default:()=>u(le,null,[u(Ll,G({ref:i,modelValue:l.value,"onUpdate:modelValue":V=>l.value=V,activator:"parent",contentClass:"v-select__content",disabled:q.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:O},W.value),{default:()=>[s&&u(Ml,G({ref:S,selected:x.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:V=>V.preventDefault(),onKeydown:E,onFocusin:se,onScrollPassive:L,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var V,T,A;return[(V=t["prepend-item"])==null?void 0:V.call(t),!R.value.length&&!e.hideNoData&&(((T=t["no-data"])==null?void 0:T.call(t))??u(we,{title:n(e.noDataText)},null)),u(ct,{ref:v,renderless:!0,items:R.value},{default:H=>{var ke;let{item:B,index:oe,itemRef:ae}=H;const Se=G(B.props,{ref:ae,key:oe,onClick:()=>K(B)});return((ke=t.item)==null?void 0:ke.call(t,{item:B,index:oe,props:Se}))??u(we,G(Se,{role:"option"}),{prepend:ll=>{let{isSelected:tl}=ll;return u(le,null,[e.multiple&&!e.hideSelected?u(Wl,{key:B.value,modelValue:tl,ripple:!1,tabindex:"-1"},null):void 0,B.props.prependAvatar&&u(ge,{image:B.props.prependAvatar},null),B.props.prependIcon&&u(Y,{icon:B.props.prependIcon},null)])}})}}),(A=t["append-item"])==null?void 0:A.call(t)]}})]}),h.value.map((V,T)=>{function A(ae){ae.stopPropagation(),ae.preventDefault(),K(V,!1)}const H={"onClick:close":A,onMousedown(ae){ae.preventDefault(),ae.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},B=m?!!t.chip:!!t.selection,oe=B?Hl(m?t.chip({item:V,index:T,props:H}):t.selection({item:V,index:T})):void 0;if(!(B&&!oe))return u("div",{key:V.value,class:"v-select__selection"},[m?t.chip?u(ue,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:V.title}}},{default:()=>[oe]}):u(et,G({key:"chip",closable:e.closableChips,size:"small",text:V.title,disabled:V.props.disabled},H),null):oe??u("span",{class:"v-select__selection-text"},[V.title,e.multiple&&T<h.value.length-1&&u("span",{class:"v-select__selection-comma"},[Gl(",")])])])})]),"append-inner":function(){var H;for(var V=arguments.length,T=new Array(V),A=0;A<V;A++)T[A]=arguments[A];return u(le,null,[(H=t["append-inner"])==null?void 0:H.call(t,...T),e.menuIcon?u(Y,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),_e({isFocused:c,menu:l,select:K},o)}});export{yt as V,ht as a,ct as b,Wl as c,et as d,Je as e,Ae as f,Qe as g,gt as h,Ze as i,Fe as j,dt as m,rt as u};
