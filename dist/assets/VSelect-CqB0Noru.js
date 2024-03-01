import{z as $,aQ as al,aR as _e,D as W,H as te,aS as nl,r as ee,N as ve,L as j,I as k,O as Z,Y as ze,M as ye,Q as U,aT as Ce,a as u,W as ue,aU as De,a1 as Q,aH as Ee,ae as ne,aj as Oe,ao as be,a2 as Le,az as ol,at as Me,aw as z,aV as pe,aW as He,G as D,a3 as ul,ab as me,aX as Ue,F as le,n as Y,aA as il,aY as Ge,Z as ce,K as sl,aM as cl,_ as he,B as $e,aZ as rl,an as Se,a_ as qe,aq as dl,as as Ke,a$ as Ne,au as de,b0 as Ie,aC as re,ap as je,ar as We,aO as xe,ai as vl,ak as fl,b1 as ml,al as hl,b2 as gl,am as yl,E as Xe,b3 as bl,b4 as pl,b5 as Sl,b6 as Vl,b7 as kl,b8 as Cl,b9 as Il,ba as xl,bb as Pl,ac as wl,T as ge,ay as Pe,bc as Tl,bd as Al,aB as Bl,be as Rl,bf as Fl,aE as se,bg as _l,bh as zl,bi as Dl,C as El,J as Ol,P as Ll,R as Ml,S as we,U as Hl,g as Ul}from"./index-Bz0SPH8P.js";import{c as Gl,m as $l,u as ql,V as Te}from"./VTextField-CwWLSS5Z.js";const Kl=$({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...al({origin:"center center",scrollStrategy:"block",transition:{component:_e},zIndex:2400})},"VDialog"),ht=W()({name:"VDialog",props:Kl(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const n=te(e,"modelValue"),{scopeId:o}=nl(),s=ee();function v(l){var b,h;const f=l.relatedTarget,g=l.target;if(f!==g&&((b=s.value)!=null&&b.contentEl)&&((h=s.value)!=null&&h.globalTop)&&![document,s.value.contentEl].includes(g)&&!s.value.contentEl.contains(g)){const I=De(s.value.contentEl);if(!I.length)return;const y=I[0],x=I[I.length-1];f===y?x.focus():y.focus()}}ve&&j(()=>n.value&&e.retainFocus,l=>{l?document.addEventListener("focusin",v):document.removeEventListener("focusin",v)},{immediate:!0}),j(n,async l=>{var f,g;await ye(),l?(f=s.value.contentEl)==null||f.focus({preventScroll:!0}):(g=s.value.activatorEl)==null||g.focus({preventScroll:!0})});const a=k(()=>U({"aria-haspopup":"dialog","aria-expanded":String(n.value)},e.activatorProps));return Z(()=>{const l=Ce.filterProps(e);return u(Ce,U({ref:s,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},l,{modelValue:n.value,"onUpdate:modelValue":f=>n.value=f,"aria-modal":"true",activatorProps:a.value,role:"dialog"},o),{activator:t.activator,default:function(){for(var f=arguments.length,g=new Array(f),b=0;b<f;b++)g[b]=arguments[b];return u(ue,{root:"VDialog"},{default:()=>{var h;return[(h=t.default)==null?void 0:h.call(t,...g)]}})}})}),ze({},s)}}),Ye=Symbol.for("vuetify:selection-control-group"),Qe=$({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:Q,trueIcon:Q,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Ee},...ne(),...Oe(),...be()},"SelectionControlGroup"),Nl=$({...Qe({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),gt=W()({name:"VSelectionControlGroup",props:Nl(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const n=te(e,"modelValue"),o=Le(),s=k(()=>e.id||`v-selection-control-group-${o}`),v=k(()=>e.name||s.value),a=new Set;return ol(Ye,{modelValue:n,forceUpdate:()=>{a.forEach(l=>l())},onForceUpdate:l=>{a.add(l),pe(()=>{a.delete(l)})}}),Me({[e.defaultsTarget]:{color:z(e,"color"),disabled:z(e,"disabled"),density:z(e,"density"),error:z(e,"error"),inline:z(e,"inline"),modelValue:n,multiple:k(()=>!!e.multiple||e.multiple==null&&Array.isArray(n.value)),name:v,falseIcon:z(e,"falseIcon"),trueIcon:z(e,"trueIcon"),readonly:z(e,"readonly"),ripple:z(e,"ripple"),type:z(e,"type"),valueComparator:z(e,"valueComparator")}}),Z(()=>{var l;return u("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(l=t.default)==null?void 0:l.call(t)])}),{}}}),Ze=$({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...ne(),...Qe()},"VSelectionControl");function jl(e){const d=il(Ye,void 0),{densityClasses:t}=Ge(e),n=te(e,"modelValue"),o=k(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),s=k(()=>e.falseValue!==void 0?e.falseValue:!1),v=k(()=>!!e.multiple||e.multiple==null&&Array.isArray(n.value)),a=k({get(){const I=d?d.modelValue.value:n.value;return v.value?ce(I).some(y=>e.valueComparator(y,o.value)):e.valueComparator(I,o.value)},set(I){if(e.readonly)return;const y=I?o.value:s.value;let x=y;v.value&&(x=I?[...ce(n.value),y]:ce(n.value).filter(c=>!e.valueComparator(c,o.value))),d?d.modelValue.value=x:n.value=x}}),{textColorClasses:l,textColorStyles:f}=sl(k(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:g,backgroundColorStyles:b}=cl(k(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),h=k(()=>a.value?e.trueIcon:e.falseIcon);return{group:d,densityClasses:t,trueValue:o,falseValue:s,model:a,textColorClasses:l,textColorStyles:f,backgroundColorClasses:g,backgroundColorStyles:b,icon:h}}const Ae=W()({name:"VSelectionControl",directives:{Ripple:He},inheritAttrs:!1,props:Ze(),emits:{"update:modelValue":e=>!0},setup(e,d){let{attrs:t,slots:n}=d;const{group:o,densityClasses:s,icon:v,model:a,textColorClasses:l,textColorStyles:f,backgroundColorClasses:g,backgroundColorStyles:b,trueValue:h}=jl(e),I=Le(),y=D(!1),x=D(!1),c=ee(),P=k(()=>e.id||`input-${I}`),w=k(()=>!e.disabled&&!e.readonly);o==null||o.onForceUpdate(()=>{c.value&&(c.value.checked=a.value)});function _(V){w.value&&(y.value=!0,he(V.target,":focus-visible")!==!1&&(x.value=!0))}function R(){y.value=!1,x.value=!1}function q(V){V.stopPropagation()}function X(V){w.value&&(e.readonly&&o&&ye(()=>o.forceUpdate()),a.value=V.target.checked)}return Z(()=>{var G,K;const V=n.label?n.label({label:e.label,props:{for:P.value}}):e.label,[L,E]=ul(t),M=u("input",U({ref:c,checked:a.value,disabled:!!e.disabled,id:P.value,onBlur:R,onFocus:_,onInput:X,"aria-disabled":!!e.disabled,type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},E),null);return u("div",U({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":y.value,"v-selection-control--focus-visible":x.value,"v-selection-control--inline":e.inline},s.value,e.class]},L,{style:e.style}),[u("div",{class:["v-selection-control__wrapper",l.value],style:f.value},[(G=n.default)==null?void 0:G.call(n,{backgroundColorClasses:g,backgroundColorStyles:b}),me(u("div",{class:["v-selection-control__input"]},[((K=n.input)==null?void 0:K.call(n,{model:a,textColorClasses:l,textColorStyles:f,backgroundColorClasses:g,backgroundColorStyles:b,inputNode:M,icon:v.value,props:{onFocus:_,onBlur:R,id:P.value}}))??u(le,null,[v.value&&u(Y,{key:"icon",icon:v.value},null),M])]),[[Ue("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),V&&u(Gl,{for:P.value,onClick:q},{default:()=>[V]})])}),{isFocused:y,input:c}}}),Wl=$({indeterminate:Boolean,indeterminateIcon:{type:Q,default:"$checkboxIndeterminate"},...Ze({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Xl=W()({name:"VCheckboxBtn",props:Wl(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,d){let{slots:t}=d;const n=te(e,"indeterminate"),o=te(e,"modelValue");function s(l){n.value&&(n.value=!1)}const v=k(()=>n.value?e.indeterminateIcon:e.falseIcon),a=k(()=>n.value?e.indeterminateIcon:e.trueIcon);return Z(()=>{const l=$e(Ae.filterProps(e),["modelValue"]);return u(Ae,U(l,{modelValue:o.value,"onUpdate:modelValue":[f=>o.value=f,s],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:v.value,trueIcon:a.value,"aria-checked":n.value?"mixed":void 0}),t)}),{}}});function Be(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function Re(e){let{selectedElement:d,containerSize:t,contentSize:n,isRtl:o,currentScrollOffset:s,isHorizontal:v}=e;const a=v?d.clientWidth:d.clientHeight,l=v?d.offsetLeft:d.offsetTop,f=o&&v?n-l-a:l,g=t+s,b=a+f,h=a*.4;return f<=s?s=Math.max(f-h,0):g<=b&&(s=Math.min(s-(g-b-h),n-t)),s}function Yl(e){let{selectedElement:d,containerSize:t,contentSize:n,isRtl:o,isHorizontal:s}=e;const v=s?d.clientWidth:d.clientHeight,a=s?d.offsetLeft:d.offsetTop,l=o&&s?n-a-v/2-t/2:a+v/2-t/2;return Math.min(n-t,Math.max(0,l))}const Ql=Symbol.for("vuetify:v-slide-group"),Je=$({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ql},nextIcon:{type:Q,default:"$next"},prevIcon:{type:Q,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ne(),...rl(),...Se(),...qe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Fe=W()({name:"VSlideGroup",props:Je(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const{isRtl:n}=dl(),{displayClasses:o,mobile:s}=Ke(e),v=Ne(e,e.symbol),a=D(!1),l=D(0),f=D(0),g=D(0),b=k(()=>e.direction==="horizontal"),{resizeRef:h,contentRect:I}=de(),{resizeRef:y,contentRect:x}=de(),c=k(()=>v.selected.value.length?v.items.value.findIndex(r=>r.id===v.selected.value[0]):-1),P=k(()=>v.selected.value.length?v.items.value.findIndex(r=>r.id===v.selected.value[v.selected.value.length-1]):-1);if(ve){let r=-1;j(()=>[v.selected.value,I.value,x.value,b.value],()=>{cancelAnimationFrame(r),r=requestAnimationFrame(()=>{if(I.value&&x.value){const p=b.value?"width":"height";f.value=I.value[p],g.value=x.value[p],a.value=f.value+1<g.value}if(c.value>=0&&y.value){const p=y.value.children[P.value];c.value===0||!a.value?l.value=0:e.centerActive?l.value=Yl({selectedElement:p,containerSize:f.value,contentSize:g.value,isRtl:n.value,isHorizontal:b.value}):a.value&&(l.value=Re({selectedElement:p,containerSize:f.value,contentSize:g.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:b.value}))}})})}const w=D(!1);let _=0,R=0;function q(r){const p=b.value?"clientX":"clientY";R=(n.value&&b.value?-1:1)*l.value,_=r.touches[0][p],w.value=!0}function X(r){if(!a.value)return;const p=b.value?"clientX":"clientY",S=n.value&&b.value?-1:1;l.value=S*(R+_-r.touches[0][p])}function V(r){const p=g.value-f.value;l.value<0||!a.value?l.value=0:l.value>=p&&(l.value=p),w.value=!1}function L(){h.value&&(h.value[b.value?"scrollLeft":"scrollTop"]=0)}const E=D(!1);function M(r){if(E.value=!0,!(!a.value||!y.value)){for(const p of r.composedPath())for(const S of y.value.children)if(S===p){l.value=Re({selectedElement:S,containerSize:f.value,contentSize:g.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:b.value});return}}}function G(r){E.value=!1}function K(r){var p;!E.value&&!(r.relatedTarget&&((p=y.value)!=null&&p.contains(r.relatedTarget)))&&F()}function N(r){y.value&&(b.value?r.key==="ArrowRight"?F(n.value?"prev":"next"):r.key==="ArrowLeft"&&F(n.value?"next":"prev"):r.key==="ArrowDown"?F("next"):r.key==="ArrowUp"&&F("prev"),r.key==="Home"?F("first"):r.key==="End"&&F("last"))}function F(r){var p,S,T,A,H;if(y.value)if(!r)(p=De(y.value)[0])==null||p.focus();else if(r==="next"){const B=(S=y.value.querySelector(":focus"))==null?void 0:S.nextElementSibling;B?B.focus():F("first")}else if(r==="prev"){const B=(T=y.value.querySelector(":focus"))==null?void 0:T.previousElementSibling;B?B.focus():F("last")}else r==="first"?(A=y.value.firstElementChild)==null||A.focus():r==="last"&&((H=y.value.lastElementChild)==null||H.focus())}function O(r){const p=l.value+(r==="prev"?-1:1)*f.value;l.value=re(p,0,g.value-f.value)}const ie=k(()=>{let r=l.value>g.value-f.value?-(g.value-f.value)+Be(g.value-f.value-l.value):-l.value;l.value<=0&&(r=Be(-l.value));const p=n.value&&b.value?-1:1;return{transform:`translate${b.value?"X":"Y"}(${p*r}px)`,transition:w.value?"none":"",willChange:w.value?"transform":""}}),J=k(()=>({next:v.next,prev:v.prev,select:v.select,isSelected:v.isSelected})),m=k(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!s.value;case!0:return a.value||Math.abs(l.value)>0;case"mobile":return s.value||a.value||Math.abs(l.value)>0;default:return!s.value&&(a.value||Math.abs(l.value)>0)}}),i=k(()=>Math.abs(l.value)>0),C=k(()=>g.value>Math.abs(l.value)+f.value);return Z(()=>u(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!b.value,"v-slide-group--has-affixes":m.value,"v-slide-group--is-overflowing":a.value},o.value,e.class],style:e.style,tabindex:E.value||v.selected.value.length?-1:0,onFocus:K},{default:()=>{var r,p,S;return[m.value&&u("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!i.value}],onClick:()=>i.value&&O("prev")},[((r=t.prev)==null?void 0:r.call(t,J.value))??u(Ie,null,{default:()=>[u(Y,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),u("div",{key:"container",ref:h,class:"v-slide-group__container",onScroll:L},[u("div",{ref:y,class:"v-slide-group__content",style:ie.value,onTouchstartPassive:q,onTouchmovePassive:X,onTouchendPassive:V,onFocusin:M,onFocusout:G,onKeydown:N},[(p=t.default)==null?void 0:p.call(t,J.value)])]),m.value&&u("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!C.value}],onClick:()=>C.value&&O("next")},[((S=t.next)==null?void 0:S.call(t,J.value))??u(Ie,null,{default:()=>[u(Y,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:v.selected,scrollTo:O,scrollOffset:l,focus:F}}}),el=Symbol.for("vuetify:v-chip-group"),Zl=$({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Ee},...Je(),...ne(),...qe({selectedClass:"v-chip--selected"}),...Se(),...be(),...je({variant:"tonal"})},"VChipGroup");W()({name:"VChipGroup",props:Zl(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const{themeClasses:n}=We(e),{isSelected:o,select:s,next:v,prev:a,selected:l}=Ne(e,el);return Me({VChip:{color:z(e,"color"),disabled:z(e,"disabled"),filter:z(e,"filter"),variant:z(e,"variant")}}),Z(()=>{const f=Fe.filterProps(e);return u(Fe,U(f,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style}),{default:()=>{var g;return[(g=t.default)==null?void 0:g.call(t,{isSelected:o,select:s,next:v,prev:a,selected:l.value})]}})}),{}}});const Jl=$({activeClass:String,appendAvatar:String,appendIcon:Q,closable:Boolean,closeIcon:{type:Q,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:Q,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:xe(),onClickOnce:xe(),...vl(),...ne(),...Oe(),...fl(),...ml(),...hl(),...gl(),...yl(),...Se({tag:"span"}),...be(),...je({variant:"tonal"})},"VChip"),et=W()({name:"VChip",directives:{Ripple:He},props:Jl(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,d){let{attrs:t,emit:n,slots:o}=d;const{t:s}=Xe(),{borderClasses:v}=bl(e),{colorClasses:a,colorStyles:l,variantClasses:f}=pl(e),{densityClasses:g}=Ge(e),{elevationClasses:b}=Sl(e),{roundedClasses:h}=Vl(e),{sizeClasses:I}=kl(e),{themeClasses:y}=We(e),x=te(e,"modelValue"),c=Cl(e,el,!1),P=Il(e,t),w=k(()=>e.link!==!1&&P.isLink.value),_=k(()=>!e.disabled&&e.link!==!1&&(!!c||e.link||P.isClickable.value)),R=k(()=>({"aria-label":s(e.closeLabel),onClick(V){V.stopPropagation(),x.value=!1,n("click:close",V)}}));function q(V){var L;n("click",V),_.value&&((L=P.navigate)==null||L.call(P,V),c==null||c.toggle())}function X(V){(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),q(V))}return()=>{const V=P.isLink.value?"a":e.tag,L=!!(e.appendIcon||e.appendAvatar),E=!!(L||o.append),M=!!(o.close||e.closable),G=!!(o.filter||e.filter)&&c,K=!!(e.prependIcon||e.prependAvatar),N=!!(K||o.prepend),F=!c||c.isSelected.value;return x.value&&me(u(V,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":_.value,"v-chip--filter":G,"v-chip--pill":e.pill},y.value,v.value,F?a.value:void 0,g.value,b.value,h.value,I.value,f.value,c==null?void 0:c.selectedClass.value,e.class],style:[F?l.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:P.href.value,tabindex:_.value?0:void 0,onClick:q,onKeydown:_.value&&!w.value&&X},{default:()=>{var O;return[xl(_.value,"v-chip"),G&&u(Pl,{key:"filter"},{default:()=>[me(u("div",{class:"v-chip__filter"},[o.filter?u(ue,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):u(Y,{key:"filter-icon",icon:e.filterIcon},null)]),[[wl,c.isSelected.value]])]}),N&&u("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?u(ue,{key:"prepend-defaults",disabled:!K,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):u(le,null,[e.prependIcon&&u(Y,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&u(ge,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),u("div",{class:"v-chip__content","data-no-activator":""},[((O=o.default)==null?void 0:O.call(o,{isSelected:c==null?void 0:c.isSelected.value,selectedClass:c==null?void 0:c.selectedClass.value,select:c==null?void 0:c.select,toggle:c==null?void 0:c.toggle,value:c==null?void 0:c.value.value,disabled:e.disabled}))??e.text]),E&&u("div",{key:"append",class:"v-chip__append"},[o.append?u(ue,{key:"append-defaults",disabled:!L,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):u(le,null,[e.appendIcon&&u(Y,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&u(ge,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),M&&u("button",U({key:"close",class:"v-chip__close",type:"button"},R.value),[o.close?u(ue,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):u(Y,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ue("ripple"),_.value&&e.ripple,null]])}}}),lt=$({renderless:Boolean,...ne()},"VVirtualScrollItem"),tt=W()({name:"VVirtualScrollItem",inheritAttrs:!1,props:lt(),emits:{"update:height":e=>!0},setup(e,d){let{attrs:t,emit:n,slots:o}=d;const{resizeRef:s,contentRect:v}=de(void 0,"border");j(()=>{var a;return(a=v.value)==null?void 0:a.height},a=>{a!=null&&n("update:height",a)}),Z(()=>{var a,l;return e.renderless?u(le,null,[(a=o.default)==null?void 0:a.call(o,{itemRef:s})]):u("div",U({ref:s,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(l=o.default)==null?void 0:l.call(o)])})}}),at=-1,nt=1,fe=100,ot=$({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function ut(e,d){const t=Ke(),n=D(0);Pe(()=>{n.value=parseFloat(e.itemHeight||0)});const o=D(0),s=D(Math.ceil((parseInt(e.height)||t.height.value)/(n.value||16))||1),v=D(0),a=D(0),l=ee(),f=ee();let g=0;const{resizeRef:b,contentRect:h}=de();Pe(()=>{b.value=l.value});const I=k(()=>{var i;return l.value===document.documentElement?t.height.value:((i=h.value)==null?void 0:i.height)||parseInt(e.height)||0}),y=k(()=>!!(l.value&&f.value&&I.value&&n.value));let x=Array.from({length:d.value.length}),c=Array.from({length:d.value.length});const P=D(0);let w=-1;function _(i){return x[i]||n.value}const R=Tl(()=>{const i=performance.now();c[0]=0;const C=d.value.length;for(let r=1;r<=C-1;r++)c[r]=(c[r-1]||0)+_(r-1);P.value=Math.max(P.value,performance.now()-i)},P),q=j(y,i=>{i&&(q(),g=f.value.offsetTop,R.immediate(),O(),~w&&ye(()=>{ve&&window.requestAnimationFrame(()=>{J(w),w=-1})}))});pe(()=>{R.clear()});function X(i,C){const r=x[i],p=n.value;n.value=p?Math.min(n.value,C):C,(r!==C||p!==n.value)&&(x[i]=C,R())}function V(i){return i=re(i,0,d.value.length-1),c[i]||0}function L(i){return it(c,i)}let E=0,M=0,G=0;j(I,(i,C)=>{C&&(O(),i<C&&requestAnimationFrame(()=>{M=0,O()}))});function K(){if(!l.value||!f.value)return;const i=l.value.scrollTop,C=performance.now();C-G>500?(M=Math.sign(i-E),g=f.value.offsetTop):M=i-E,E=i,G=C,O()}function N(){!l.value||!f.value||(M=0,G=0,O())}let F=-1;function O(){cancelAnimationFrame(F),F=requestAnimationFrame(ie)}function ie(){if(!l.value||!I.value)return;const i=E-g,C=Math.sign(M),r=Math.max(0,i-fe),p=re(L(r),0,d.value.length),S=i+I.value+fe,T=re(L(S)+1,p+1,d.value.length);if((C!==at||p<o.value)&&(C!==nt||T>s.value)){const A=V(o.value)-V(p),H=V(T)-V(s.value);Math.max(A,H)>fe?(o.value=p,s.value=T):(p<=0&&(o.value=p),T>=d.value.length&&(s.value=T))}v.value=V(o.value),a.value=V(d.value.length)-V(s.value)}function J(i){const C=V(i);!l.value||i&&!C?w=i:l.value.scrollTop=C}const m=k(()=>d.value.slice(o.value,s.value).map((i,C)=>({raw:i,index:C+o.value})));return j(d,()=>{x=Array.from({length:d.value.length}),c=Array.from({length:d.value.length}),R.immediate(),O()},{deep:!0}),{containerRef:l,markerRef:f,computedItems:m,paddingTop:v,paddingBottom:a,scrollToIndex:J,handleScroll:K,handleScrollend:N,handleItemResize:X}}function it(e,d){let t=e.length-1,n=0,o=0,s=null,v=-1;if(e[t]<d)return t;for(;n<=t;)if(o=n+t>>1,s=e[o],s>d)t=o-1;else if(s<d)v=o,n=o+1;else return s===d?o:n;return v}const st=$({items:{type:Array,default:()=>[]},renderless:Boolean,...ot(),...ne(),...Al()},"VVirtualScroll"),ct=W()({name:"VVirtualScroll",props:st(),setup(e,d){let{slots:t}=d;const n=Bl("VVirtualScroll"),{dimensionStyles:o}=Rl(e),{containerRef:s,markerRef:v,handleScroll:a,handleScrollend:l,handleItemResize:f,scrollToIndex:g,paddingTop:b,paddingBottom:h,computedItems:I}=ut(e,z(e,"items"));return Fl(()=>e.renderless,()=>{function y(){var P,w;const c=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";s.value===document.documentElement?(document[c]("scroll",a,{passive:!0}),document[c]("scrollend",l)):((P=s.value)==null||P[c]("scroll",a,{passive:!0}),(w=s.value)==null||w[c]("scrollend",l))}_l(()=>{s.value=zl(n.vnode.el,!0),y(!0)}),pe(y)}),Z(()=>{const y=I.value.map(x=>u(tt,{key:x.index,renderless:e.renderless,"onUpdate:height":c=>f(x.index,c)},{default:c=>{var P;return(P=t.default)==null?void 0:P.call(t,{item:x.raw,index:x.index,...c})}}));return e.renderless?u(le,null,[u("div",{ref:v,class:"v-virtual-scroll__spacer",style:{paddingTop:se(b.value)}},null),y,u("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:se(h.value)}},null)]):u("div",{ref:s,class:["v-virtual-scroll",e.class],onScrollPassive:a,onScrollend:l,style:[o.value,e.style]},[u("div",{ref:v,class:"v-virtual-scroll__container",style:{paddingTop:se(b.value),paddingBottom:se(h.value)}},[y])])}),{scrollToIndex:g}}});function rt(e,d){const t=D(!1);let n;function o(a){cancelAnimationFrame(n),t.value=!0,n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{t.value=!1})})}async function s(){await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>{if(t.value){const l=j(t,()=>{l(),a()})}else a()})}async function v(a){var g,b;if(a.key==="Tab"&&((g=d.value)==null||g.focus()),!["PageDown","PageUp","Home","End"].includes(a.key))return;const l=(b=e.value)==null?void 0:b.$el;if(!l)return;(a.key==="Home"||a.key==="End")&&l.scrollTo({top:a.key==="Home"?0:l.scrollHeight,behavior:"smooth"}),await s();const f=l.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(a.key==="PageDown"||a.key==="Home"){const h=l.getBoundingClientRect().top;for(const I of f)if(I.getBoundingClientRect().top>=h){I.focus();break}}else{const h=l.getBoundingClientRect().bottom;for(const I of[...f].reverse())if(I.getBoundingClientRect().bottom<=h){I.focus();break}}}return{onListScroll:o,onListKeydown:v}}const dt=$({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:Q,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Dl({itemChildren:!1})},"Select"),vt=$({...dt(),...$e($l({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...El({transition:{component:_e}})},"VSelect"),yt=W()({name:"VSelect",props:vt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,d){let{slots:t}=d;const{t:n}=Xe(),o=ee(),s=ee(),v=ee(),a=te(e,"menu"),l=k({get:()=>a.value,set:m=>{var i;a.value&&!m&&((i=s.value)!=null&&i.ΨopenChildren)||(a.value=m)}}),{items:f,transformIn:g,transformOut:b}=Ol(e),h=te(e,"modelValue",[],m=>g(m===null?[null]:ce(m)),m=>{const i=b(m);return e.multiple?i:i[0]??null}),I=k(()=>typeof e.counterValue=="function"?e.counterValue(h.value):typeof e.counterValue=="number"?e.counterValue:h.value.length),y=ql(),x=k(()=>h.value.map(m=>m.value)),c=D(!1),P=k(()=>l.value?e.closeText:e.openText);let w="",_;const R=k(()=>e.hideSelected?f.value.filter(m=>!h.value.some(i=>i===m)):f.value),q=k(()=>e.hideNoData&&!R.value.length||e.readonly||(y==null?void 0:y.isReadonly.value)),X=k(()=>{var m;return{...e.menuProps,activatorProps:{...((m=e.menuProps)==null?void 0:m.activatorProps)||{},"aria-haspopup":"listbox"}}}),V=ee(),{onListScroll:L,onListKeydown:E}=rt(V,o);function M(m){e.openOnClear&&(l.value=!0)}function G(){q.value||(l.value=!l.value)}function K(m){var S,T;if(!m.key||e.readonly||y!=null&&y.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(m.key)&&m.preventDefault(),["Enter","ArrowDown"," "].includes(m.key)&&(l.value=!0),["Escape","Tab"].includes(m.key)&&(l.value=!1),m.key==="Home"?(S=V.value)==null||S.focus("first"):m.key==="End"&&((T=V.value)==null||T.focus("last"));const i=1e3;function C(A){const H=A.key.length===1,B=!A.ctrlKey&&!A.metaKey&&!A.altKey;return H&&B}if(e.multiple||!C(m))return;const r=performance.now();r-_>i&&(w=""),w+=m.key.toLowerCase(),_=r;const p=f.value.find(A=>A.title.toLowerCase().startsWith(w));p!==void 0&&(h.value=[p])}function N(m){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(e.multiple){const C=h.value.findIndex(r=>e.valueComparator(r.value,m.value));if(i=C===-1,i)h.value=[...h.value,m];else{const r=[...h.value];r.splice(C,1),h.value=r}}else h.value=i?[m]:[],l.value=!1}function F(m){var i;(i=V.value)!=null&&i.$el.contains(m.relatedTarget)||(l.value=!1)}function O(){var m;c.value&&((m=o.value)==null||m.focus())}function ie(m){c.value=!0}function J(m){if(m==null)h.value=[];else if(he(o.value,":autofill")||he(o.value,":-webkit-autofill")){const i=f.value.find(C=>C.title===m);i&&N(i)}else o.value&&(o.value.value="")}return j(l,()=>{if(!e.hideSelected&&l.value&&h.value.length){const m=R.value.findIndex(i=>h.value.some(C=>e.valueComparator(C.value,i.value)));ve&&window.requestAnimationFrame(()=>{var i;m>=0&&((i=v.value)==null||i.scrollToIndex(m))})}}),j(R,(m,i)=>{c.value&&(!m.length&&e.hideNoData&&(l.value=!1),!i.length&&m.length&&(l.value=!0))}),Z(()=>{const m=!!(e.chips||t.chip),i=!!(!e.hideNoData||R.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),C=h.value.length>0,r=Te.filterProps(e),p=C||!c.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return u(Te,U({ref:o},r,{modelValue:h.value.map(S=>S.props.value).join(", "),"onUpdate:modelValue":J,focused:c.value,"onUpdate:focused":S=>c.value=S,validationValue:h.externalValue,counterValue:I.value,dirty:C,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":h.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:p,"onClick:clear":M,"onMousedown:control":G,onBlur:F,onKeydown:K,"aria-label":n(P.value),title:n(P.value)}),{...t,default:()=>u(le,null,[u(Ll,U({ref:s,modelValue:l.value,"onUpdate:modelValue":S=>l.value=S,activator:"parent",contentClass:"v-select__content",disabled:q.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:O},X.value),{default:()=>[i&&u(Ml,U({ref:V,selected:x.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:S=>S.preventDefault(),onKeydown:E,onFocusin:ie,onScrollPassive:L,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var S,T,A;return[(S=t["prepend-item"])==null?void 0:S.call(t),!R.value.length&&!e.hideNoData&&(((T=t["no-data"])==null?void 0:T.call(t))??u(we,{title:n(e.noDataText)},null)),u(ct,{ref:v,renderless:!0,items:R.value},{default:H=>{var ke;let{item:B,index:oe,itemRef:ae}=H;const Ve=U(B.props,{ref:ae,key:oe,onClick:()=>N(B)});return((ke=t.item)==null?void 0:ke.call(t,{item:B,index:oe,props:Ve}))??u(we,U(Ve,{role:"option"}),{prepend:ll=>{let{isSelected:tl}=ll;return u(le,null,[e.multiple&&!e.hideSelected?u(Xl,{key:B.value,modelValue:tl,ripple:!1,tabindex:"-1"},null):void 0,B.props.prependAvatar&&u(ge,{image:B.props.prependAvatar},null),B.props.prependIcon&&u(Y,{icon:B.props.prependIcon},null)])}})}}),(A=t["append-item"])==null?void 0:A.call(t)]}})]}),h.value.map((S,T)=>{function A(ae){ae.stopPropagation(),ae.preventDefault(),N(S,!1)}const H={"onClick:close":A,onMousedown(ae){ae.preventDefault(),ae.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},B=m?!!t.chip:!!t.selection,oe=B?Hl(m?t.chip({item:S,index:T,props:H}):t.selection({item:S,index:T})):void 0;if(!(B&&!oe))return u("div",{key:S.value,class:"v-select__selection"},[m?t.chip?u(ue,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:S.title}}},{default:()=>[oe]}):u(et,U({key:"chip",closable:e.closableChips,size:"small",text:S.title,disabled:S.props.disabled},H),null):oe??u("span",{class:"v-select__selection-text"},[S.title,e.multiple&&T<h.value.length-1&&u("span",{class:"v-select__selection-comma"},[Ul(",")])])])})]),"append-inner":function(){var H;for(var S=arguments.length,T=new Array(S),A=0;A<S;A++)T[A]=arguments[A];return u(le,null,[(H=t["append-inner"])==null?void 0:H.call(t,...T),e.menuIcon?u(Y,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),ze({isFocused:c,menu:l,select:N},o)}});export{yt as V,ht as a,ct as b,Xl as c,et as d,Ze as e,Ae as f,Qe as g,gt as h,dt as m,rt as u};
