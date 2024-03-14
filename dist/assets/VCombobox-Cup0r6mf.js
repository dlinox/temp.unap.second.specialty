import{m as Ve,u as Ce,b as ke,c as pe,d as we}from"./VSelect-YZOlI_oo.js";import{m as Se,u as Ie,V as Q}from"./VTextField-IiyxZgeX.js";import{B as Fe,C as De,D as Pe,E as Re,G as Ae,r as N,H as F,I as X,J as y,K as _e,L as Te,af as L,M as D,N as Y,O as Me,P as Ee,b as o,F as O,Q as Ne,R as P,v as Le,x as Z,S as Oe,q as ee,T as Be,U as Ke,i as Ue,W as He,X as je,Y as qe,ag as ze}from"./index-B7ut9uUa.js";import{m as We,u as $e}from"./filter-b54OYVjt.js";function Ge(e,b,R){if(b==null)return e;if(Array.isArray(b))throw new Error("Multiple matches is not implemented");return typeof b=="number"&&~b?o(O,null,[o("span",{class:"v-combobox__unmask"},[e.substr(0,b)]),o("span",{class:"v-combobox__mask"},[e.substr(b,R)]),o("span",{class:"v-combobox__unmask"},[e.substr(b+R)])]):e}const Je=Fe({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...We({filterKeys:["title"]}),...Ve({hideNoData:!0,returnObject:!0}),...De(Se({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Pe({transition:!1})},"VCombobox"),el=Re()({name:"VCombobox",props:Je(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,b){var $;let{emit:R,slots:n}=b;const{t:B}=Ae(),V=N(),h=F(!1),C=F(!0),A=F(!1),q=N(),z=N(),K=X(e,"menu"),r=y({get:()=>K.value,set:l=>{var a;K.value&&!l&&((a=q.value)!=null&&a.ΨopenChildren)||(K.value=l)}}),i=F(-1);let U=!1;const le=y(()=>{var l;return(l=V.value)==null?void 0:l.color}),W=y(()=>r.value?e.closeText:e.openText),{items:te,transformIn:ae,transformOut:ne}=_e(e),{textColorClasses:ue,textColorStyles:oe}=Te(le),u=X(e,"modelValue",[],l=>ae(qe(l)),l=>{const a=ne(l);return e.multiple?a:a[0]??null}),S=Ie(),I=F(e.multiple?"":(($=u.value[0])==null?void 0:$.title)??""),c=y({get:()=>I.value,set:l=>{var a;if(I.value=l??"",e.multiple||(u.value=[L(e,l)]),l&&e.multiple&&((a=e.delimiters)!=null&&a.length)){const s=l.split(new RegExp(`(?:${e.delimiters.join("|")})+`));s.length>1&&(s.forEach(d=>{d=d.trim(),d&&g(L(e,d))}),I.value="")}l||(i.value=-1),C.value=!l}}),ie=y(()=>typeof e.counterValue=="function"?e.counterValue(u.value):typeof e.counterValue=="number"?e.counterValue:e.multiple?u.value.length:c.value.length);D(I,l=>{U?Y(()=>U=!1):h.value&&!r.value&&(r.value=!0),R("update:search",l)}),D(u,l=>{var a;e.multiple||(I.value=((a=l[0])==null?void 0:a.title)??"")});const{filteredItems:_,getMatches:se}=$e(e,te,()=>C.value?"":c.value),m=y(()=>e.hideSelected?_.value.filter(l=>!u.value.some(a=>a.value===l.value)):_.value),re=y(()=>u.value.map(l=>l.value)),T=y(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&c.value===((a=m.value[0])==null?void 0:a.title))&&m.value.length>0&&!C.value&&!A.value}),H=y(()=>e.hideNoData&&!m.value.length||e.readonly||(S==null?void 0:S.isReadonly.value)),j=N(),{onListScroll:ce,onListKeydown:ve}=Ce(j,V);function de(l){U=!0,e.openOnClear&&(r.value=!0)}function fe(){H.value||(r.value=!0)}function me(l){H.value||(h.value&&(l.preventDefault(),l.stopPropagation()),r.value=!r.value)}function be(l){var d;if(ze(l)||e.readonly||S!=null&&S.isReadonly.value)return;const a=V.value.selectionStart,s=u.value.length;if((i.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(r.value=!0),["Escape"].includes(l.key)&&(r.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(T.value&&["Enter","Tab"].includes(l.key)&&g(_.value[0]),C.value=!0),l.key==="ArrowDown"&&T.value&&((d=j.value)==null||d.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(i.value<0){l.key==="Backspace"&&!c.value&&(i.value=s-1);return}const t=i.value,v=u.value[i.value];v&&!v.props.disabled&&g(v,!1),i.value=t>=s-1?s-2:t}if(l.key==="ArrowLeft"){if(i.value<0&&a>0)return;const t=i.value>-1?i.value-1:s-1;u.value[t]?i.value=t:(i.value=-1,V.value.setSelectionRange(c.value.length,c.value.length))}if(l.key==="ArrowRight"){if(i.value<0)return;const t=i.value+1;u.value[t]?i.value=t:(i.value=-1,V.value.setSelectionRange(0,0))}l.key==="Enter"&&c.value&&(g(L(e,c.value)),c.value="")}}function he(){var l;h.value&&(C.value=!0,(l=V.value)==null||l.focus())}function g(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(e.multiple){const s=u.value.findIndex(t=>e.valueComparator(t.value,l.value)),d=a??!~s;if(~s){const t=d?[...u.value,l]:[...u.value];t.splice(s,1),u.value=t}else d&&(u.value=[...u.value,l]);e.clearOnSelect&&(c.value="")}else{const s=a!==!1;u.value=s?[l]:[],I.value=s?l.title:"",Y(()=>{r.value=!1,C.value=!0})}}function ge(l){h.value=!0,setTimeout(()=>{A.value=!0})}function xe(l){A.value=!1}function ye(l){(l==null||l===""&&!e.multiple)&&(u.value=[])}return D(h,(l,a)=>{l||l===a||(i.value=-1,r.value=!1,T.value&&!A.value&&!u.value.some(s=>{let{value:d}=s;return d===m.value[0].value})?g(m.value[0]):e.multiple&&c.value&&g(L(e,c.value)))}),D(r,()=>{if(!e.hideSelected&&r.value&&u.value.length){const l=m.value.findIndex(a=>u.value.some(s=>e.valueComparator(s.value,a.value)));Me&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=z.value)==null||a.scrollToIndex(l))})}}),D(m,(l,a)=>{h.value&&(!l.length&&e.hideNoData&&(r.value=!1),!a.length&&l.length&&(r.value=!0))}),Ee(()=>{const l=!!(e.chips||n.chip),a=!!(!e.hideNoData||m.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),s=u.value.length>0,d=Q.filterProps(e);return o(Q,P({ref:V},d,{modelValue:c.value,"onUpdate:modelValue":[t=>c.value=t,ye],focused:h.value,"onUpdate:focused":t=>h.value=t,validationValue:u.externalValue,counterValue:ie.value,dirty:s,class:["v-combobox",{"v-combobox--active-menu":r.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!n.selection,"v-combobox--selecting-index":i.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,readonly:e.readonly,placeholder:s?void 0:e.placeholder,"onClick:clear":de,"onMousedown:control":fe,onKeydown:be}),{...n,default:()=>o(O,null,[o(Ne,P({ref:q,modelValue:r.value,"onUpdate:modelValue":t=>r.value=t,activator:"parent",contentClass:"v-combobox__content",disabled:H.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:he},e.menuProps),{default:()=>[a&&o(Le,P({ref:j,selected:re.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:t=>t.preventDefault(),onKeydown:ve,onFocusin:ge,onFocusout:xe,onScrollPassive:ce,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var t,v,x;return[(t=n["prepend-item"])==null?void 0:t.call(n),!m.value.length&&!e.hideNoData&&(((v=n["no-data"])==null?void 0:v.call(n))??o(Z,{title:B(e.noDataText)},null)),o(ke,{ref:z,renderless:!0,items:m.value},{default:k=>{var J;let{item:f,index:p,itemRef:w}=k;const G=P(f.props,{ref:w,key:p,active:T.value&&p===0?!0:void 0,onClick:()=>g(f,null)});return((J=n.item)==null?void 0:J.call(n,{item:f,index:p,props:G}))??o(Z,G,{prepend:M=>{let{isSelected:E}=M;return o(O,null,[e.multiple&&!e.hideSelected?o(pe,{key:f.value,modelValue:E,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependAvatar&&o(Oe,{image:f.props.prependAvatar},null),f.props.prependIcon&&o(ee,{icon:f.props.prependIcon},null)])},title:()=>{var M,E;return C.value?f.title:Ge(f.title,(M=se(f))==null?void 0:M.title,((E=c.value)==null?void 0:E.length)??0)}})}}),(x=n["append-item"])==null?void 0:x.call(n)]}})]}),u.value.map((t,v)=>{function x(w){w.stopPropagation(),w.preventDefault(),g(t,!1)}const k={"onClick:close":x,onMousedown(w){w.preventDefault(),w.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},f=l?!!n.chip:!!n.selection,p=f?Be(l?n.chip({item:t,index:v,props:k}):n.selection({item:t,index:v})):void 0;if(!(f&&!p))return o("div",{key:t.value,class:["v-combobox__selection",v===i.value&&["v-combobox__selection--selected",ue.value]],style:v===i.value?oe.value:{}},[l?n.chip?o(Ke,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:t.title}}},{default:()=>[p]}):o(we,P({key:"chip",closable:e.closableChips,size:"small",text:t.title,disabled:t.props.disabled},k),null):p??o("span",{class:"v-combobox__selection-text"},[t.title,e.multiple&&v<u.value.length-1&&o("span",{class:"v-combobox__selection-comma"},[Ue(",")])])])})]),"append-inner":function(){var k;for(var t=arguments.length,v=new Array(t),x=0;x<t;x++)v[x]=arguments[x];return o(O,null,[(k=n["append-inner"])==null?void 0:k.call(n,...v),(!e.hideNoData||e.items.length)&&e.menuIcon?o(ee,{class:"v-combobox__menu-icon",icon:e.menuIcon,onMousedown:me,onClick:He,"aria-label":B(W.value),title:B(W.value)},null):void 0])}})}),je({isFocused:h,isPristine:C,menu:r,search:c,selectionIndex:i,filteredItems:_,select:g},V)}});export{el as V};