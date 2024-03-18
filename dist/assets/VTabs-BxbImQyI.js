import{$ as ke,ai as Se,B as te,a0 as Ie,aj as Ae,ak as pe,al as Te,am as we,an as Ee,ao as Pe,ap as he,aq as be,ar as Fe,as as Be,E as le,I as ye,J as G,at as $e,au as ze,av as ge,aw as Le,ax as De,ay as Re,az as Oe,aA as Ge,L as Ce,aB as h,G as Me,b as a,aC as Ue,q as ae,U as oe,h as V,R as K,d as je,s as Ye,r as i,o as B,m as Q,w as t,c as N,e as q,i as d,n as H,z as R,F as W,p as se,x as O,S as Z,t as T,ab as Ne,aa as Y,a as X,f as re,C as qe,aD as He,P as Ve,X as Xe,aE as Je,aF as We,aG as Ke,aH as Qe,aI as Ze,aJ as ea}from"./index-CnSf6oKy.js";import{V as $,a as ee,b as z,e as ie,c as ue}from"./VCard-DBjaqxEr.js";import{d as J,V as aa,a as de,i as ta,j as ce}from"./VSelect-BCWw9wq0.js";import{V as ve}from"./VForm-BSJNEsTb.js";import{V as me}from"./VTextField-BqgT8V0_.js";const la="https://data.segundas.unap.edu.pe/api",M=ke.create({baseURL:la,headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}),xa=async e=>(await M.get("postulants/generals/"+e)).data,na=async e=>(await M.get("postulants/evaluation/"+e)).data,oa=async e=>(await M.post("postulants/evaluation",e)).data,fe=async e=>(await M.post("postulants/evaluation-detail",e)).data,sa=async e=>(await M.post("postulants/experience/minus",e)).data,ra=async e=>(await M.post("postulants/experience/add",e)).data,ia=Se("v-alert-title"),ua=["success","info","warning","error"],da=te({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Ie,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>ua.includes(e)},...Ae(),...pe(),...Te(),...we(),...Ee(),...Pe(),...he(),...be(),...Fe(),...Be({variant:"flat"})},"VAlert"),ca=le()({name:"VAlert",props:da(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{emit:u,slots:n}=r;const y=ye(e,"modelValue"),g=G(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),c=G(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:x}=$e(e),{colorClasses:m,colorStyles:p,variantClasses:F}=ze(c),{densityClasses:_}=ge(e),{dimensionStyles:v}=Le(e),{elevationClasses:P}=De(e),{locationStyles:k}=Re(e),{positionClasses:w}=Oe(e),{roundedClasses:b}=Ge(e),{textColorClasses:U,textColorStyles:C}=Ce(h(e,"borderColor")),{t:f}=Me(),E=G(()=>({"aria-label":f(e.closeLabel),onClick(S){y.value=!1,u("click:close",S)}}));return()=>{const S=!!(n.prepend||g.value),L=!!(n.title||e.title),I=!!(n.close||e.closable);return y.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},x.value,m.value,_.value,P.value,w.value,b.value,F.value,e.class],style:[p.value,v.value,k.value,e.style],role:"alert"},{default:()=>{var D,j;return[Ue(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",U.value],style:C.value},null),S&&a("div",{key:"prepend",class:"v-alert__prepend"},[n.prepend?a(oe,{key:"prepend-defaults",disabled:!g.value,defaults:{VIcon:{density:e.density,icon:g.value,size:e.prominent?44:28}}},n.prepend):a(ae,{key:"prepend-icon",density:e.density,icon:g.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[L&&a(ia,{key:"title"},{default:()=>{var s;return[((s=n.title)==null?void 0:s.call(n))??e.title]}}),((D=n.text)==null?void 0:D.call(n))??e.text,(j=n.default)==null?void 0:j.call(n)]),n.append&&a("div",{key:"append",class:"v-alert__append"},[n.append()]),I&&a("div",{key:"close",class:"v-alert__close"},[n.close?a(oe,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var s;return[(s=n.close)==null?void 0:s.call(n,{props:E.value})]}}):a(V,K({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},E.value),null)])]}})}}}),_a=je({__name:"TabCv",setup(e){const r=Ye(),u=i({indicator:null,description:"",criteria:1,evaluationId:null}),n=i({indicator:{id:3,name:"Certificación",score:1},description:"Años de Experiencia",criteria:2,evaluationId:null}),y=i({indicator:{id:4,name:"Certificación",score:.25},description:"",criteria:3,evaluationId:null}),g=i(null),c=i(0),x=i(null),m=i(0),p=i(null),F=i(0),_=i(0),v=i(!1),P=i(!1),k=i(!1),w=i(!1),b=i(null),U=i([{id:1,name:"Título profesional",score:8},{id:2,name:"Maestría",score:2}]),C=i([{id:1,name:"Formación académica",description:"Formación académica",maxScore:20},{id:2,name:"Experiencia laboral",description:"Experiencia laboral",maxScore:20},{id:3,name:"Capacitaciones",description:"Formación profesional",maxScore:20}]),f=async()=>{let s=await na(r.params.id);b.value=s||null;let o=s.details;g.value=o.filter(l=>l.EvaluationIndicatorId===1||l.EvaluationIndicatorId===2),x.value=o.filter(l=>l.EvaluationIndicatorId===3),p.value=o.filter(l=>l.EvaluationIndicatorId===4),c.value=g.value.reduce((l,A)=>l+parseFloat(A.Score)*parseFloat(A.Amount),0),m.value=x.value.reduce((l,A)=>l+parseFloat(A.Score)*parseFloat(A.Amount),0),F.value=p.value.reduce((l,A)=>l+parseFloat(A.Score)*parseFloat(A.Amount),0),c.value=c.value>10?10:c.value,_.value=c.value+m.value+F.value},E=async()=>{let s={postulantId:r.params.id,callId:1},o=await oa(s);b.value=o?o.evaluacion:null},S=async()=>{try{P.value=!0,u.value.evaluationId=b.value.Id,await fe(u.value),await f(),P.value=!1,u.value.indicator=null,u.value.description="",v.value=!1}catch{alert("Ocurrio un error")}},L=async()=>{try{w.value=!0,y.value.evaluationId=b.value.Id,await fe(y.value),k.value=!1,w.value=!1,y.value.description="",await f()}catch{alert("Ocurrio un error")}},I=async()=>{n.value.evaluationId=b.value.Id,await ra(n.value),await f()},D=async()=>{n.value.evaluationId=b.value.Id,await sa(n.value),await f()};return(async()=>{await f()})(),(s,o)=>(B(),Q(W,null,[a(q,{fluid:""},{default:t(()=>[b.value===null?(B(),N($,{key:0,class:"text-center mx-auto my-5",width:"300"},{default:t(()=>[a(q,null,{default:t(()=>[a(ca,{type:"info",variant:"text",class:"mb-5"},{default:t(()=>[d(" Aún no se ha iniciado la evaluación ")]),_:1}),a(V,{block:"",onClick:E},{default:t(()=>[d(" Iniciar Evaluación ")]),_:1})]),_:1})]),_:1})):(B(),N(ee,{key:1},{default:t(()=>[a(z,{cols:"12"},{default:t(()=>[a($,{rounded:"0",elevation:"0"},{default:t(()=>[a(H,{density:"compact",title:C.value[0].name},{default:t(()=>[a(R),a(V,{"append-icon":"mdi-plus",onClick:o[0]||(o[0]=l=>v.value=!0),variant:"outlined",rounded:"lg",class:"me-4"},{default:t(()=>[d(" Agregar ")]),_:1})]),_:1},8,["title"]),(B(!0),Q(W,null,se(g.value,l=>(B(),N(O,{key:l.Id,class:"border-b py-2"},{prepend:t(()=>[a(Z,null,{default:t(()=>[d(T((parseInt(l.Score)*parseInt(l.Amount)).toFixed(2)),1)]),_:2},1024)]),default:t(()=>[a(Ne,null,{default:t(()=>[d(T(l.EvaluationIndicatorId===1?"Título profesional":"Maestría"),1)]),_:2},1024),a(Y,null,{default:t(()=>[d(T(l.Observations),1)]),_:2},1024)]),_:2},1024))),128)),a(O,{class:"border-b py-2"},{default:t(()=>[a(Y,{class:"text-end"},{default:t(()=>[a(J,{class:"mr-4",label:"",size:"large",color:"primary"},{default:t(()=>[X("strong",null,T(c.value)+" puntos ",1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(z,{cols:"12"},{default:t(()=>[a($,{rounded:"0",elevation:"0"},{default:t(()=>[a(H,{density:"compact",title:C.value[1].name},{default:t(()=>[a(R)]),_:1},8,["title"]),a(O,{class:"py-2 border-b",title:"Año(s) de experiencia"},{prepend:t(()=>[a(Z,null,{default:t(()=>[d(T((parseInt(x.value[0].Score)*parseInt(x.value[0].Amount)).toFixed(2)),1)]),_:1})]),append:t(()=>[a(V,{icon:"",rounded:"lg",size:"small",variant:"tonal",color:"red",onClick:D},{default:t(()=>[a(ae,null,{default:t(()=>[d("mdi-minus")]),_:1})]),_:1}),a(V,{icon:"",size:"small",rounded:"lg",variant:"tonal",color:"blue",onClick:I},{default:t(()=>[a(ae,null,{default:t(()=>[d("mdi-plus")]),_:1})]),_:1})]),_:1}),a(O,{class:"border-b py-2"},{default:t(()=>[a(Y,{class:"text-end"},{default:t(()=>[a(J,{class:"mr-4",label:"",size:"large",color:"primary"},{default:t(()=>[X("strong",null,T(m.value)+" puntos ",1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(z,{cols:"12"},{default:t(()=>[a($,{rounded:"0",elevation:"0"},{default:t(()=>[a(H,{density:"compact",title:C.value[2].name},{default:t(()=>[a(R),a(V,{"append-icon":"mdi-plus",onClick:o[1]||(o[1]=l=>k.value=!0),variant:"outlined",rounded:"lg",class:"me-4"},{default:t(()=>[d(" Agregar ")]),_:1})]),_:1},8,["title"]),(B(!0),Q(W,null,se(p.value,l=>(B(),N(O,{key:l.Id,class:"border-b py-2"},{prepend:t(()=>[a(Z,null,{default:t(()=>[d(T((parseFloat(l.Score)*parseFloat(l.Amount)).toFixed(2)),1)]),_:2},1024)]),default:t(()=>[a(Y,null,{default:t(()=>[d(T(l.Observations),1)]),_:2},1024)]),_:2},1024))),128)),a(O,{class:"border-b py-2"},{default:t(()=>[a(Y,{class:"text-end"},{default:t(()=>[a(J,{class:"mr-4",label:"",size:"large",color:"primary"},{default:t(()=>[X("strong",null,T(F.value)+" puntos ",1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(z,{cols:"12"},{default:t(()=>[a($,{rounded:"0",elevation:"0"},{default:t(()=>[a(H,{title:"Calificación Final"},{default:t(()=>[a(R),a(J,{class:"mr-4",label:"",size:"x-large",color:"blue"},{default:t(()=>[X("strong",null,T(_.value)+" puntos ",1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))]),_:1}),a(de,{modelValue:v.value,"onUpdate:modelValue":o[5]||(o[5]=l=>v.value=l),"max-width":"600"},{default:t(()=>[a(ve,{ref:"formAddFA","lazy-validation":"",onSubmit:re(S,["prevent"])},{default:t(()=>[a($,null,{default:t(()=>[a(ie,null,{default:t(()=>[d(" Agregar Formación Académica ")]),_:1}),a(q,null,{default:t(()=>[a(ee,null,{default:t(()=>[a(z,{cols:"12"},{default:t(()=>[a(aa,{modelValue:u.value.indicator,"onUpdate:modelValue":o[2]||(o[2]=l=>u.value.indicator=l),label:"Indicador",items:U.value,"item-title":"name","item-value":"id","return-object":!0},null,8,["modelValue","items"])]),_:1}),a(z,{cols:"12"},{default:t(()=>[a(me,{modelValue:u.value.description,"onUpdate:modelValue":o[3]||(o[3]=l=>u.value.description=l),label:"Descripción"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(ue,null,{default:t(()=>[a(R),a(V,{variant:"tonal",color:"error",onClick:o[4]||(o[4]=l=>v.value=!1)},{default:t(()=>[d("Cancelar")]),_:1}),a(V,{color:"primary",variant:"flat",type:"submit",loading:P.value},{default:t(()=>[d("Guardar")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512)]),_:1},8,["modelValue"]),a(de,{modelValue:k.value,"onUpdate:modelValue":o[8]||(o[8]=l=>k.value=l),"max-width":"600"},{default:t(()=>[a(ve,{ref:"FormC",onSubmit:re(L,["prevent"])},{default:t(()=>[a($,null,{default:t(()=>[a(ie,null,{default:t(()=>[d(" Agregar Capacitación ")]),_:1}),a(q,null,{default:t(()=>[a(ee,null,{default:t(()=>[a(z,{cols:"12"},{default:t(()=>[a(me,{modelValue:y.value.description,"onUpdate:modelValue":o[6]||(o[6]=l=>y.value.description=l),label:"Descripción"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(ue,null,{default:t(()=>[a(R),a(V,{color:"error",variant:"tonal",onClick:o[7]||(o[7]=l=>k.value=!1)},{default:t(()=>[d("Cancelar")]),_:1}),a(V,{color:"primary",type:"submit",variant:"flat",loading:w.value},{default:t(()=>[d("Guardar")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512)]),_:1},8,["modelValue"])],64))}}),xe=Symbol.for("vuetify:v-tabs"),va=te({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...qe(He({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ma=le()({name:"VTab",props:va(),setup(e,r){let{slots:u,attrs:n}=r;const{textColorClasses:y,textColorStyles:g}=Ce(e,"sliderColor"),c=i(),x=i(),m=G(()=>e.direction==="horizontal"),p=G(()=>{var _,v;return((v=(_=c.value)==null?void 0:_.group)==null?void 0:v.isSelected.value)??!1});function F(_){var P,k;let{value:v}=_;if(v){const w=(k=(P=c.value)==null?void 0:P.$el.parentElement)==null?void 0:k.querySelector(".v-tab--selected .v-tab__slider"),b=x.value;if(!w||!b)return;const U=getComputedStyle(w).color,C=w.getBoundingClientRect(),f=b.getBoundingClientRect(),E=m.value?"x":"y",S=m.value?"X":"Y",L=m.value?"right":"bottom",I=m.value?"width":"height",D=C[E],j=f[E],s=D>j?C[L]-f[L]:C[E]-f[E],o=Math.sign(s)>0?m.value?"right":"bottom":Math.sign(s)<0?m.value?"left":"top":"center",A=(Math.abs(s)+(Math.sign(s)<0?C[I]:f[I]))/Math.max(C[I],f[I])||0,_e=C[I]/f[I]||0,ne=1.5;Je(b,{backgroundColor:[U,"currentcolor"],transform:[`translate${S}(${s}px) scale${S}(${_e})`,`translate${S}(${s/ne}px) scale${S}(${(A-1)/ne+1})`,"none"],transformOrigin:Array(3).fill(o)},{duration:225,easing:We})}}return Ve(()=>{const _=V.filterProps(e);return a(V,K({symbol:xe,ref:c,class:["v-tab",e.class],style:e.style,tabindex:p.value?0:-1,role:"tab","aria-selected":String(p.value),active:!1},_,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":F}),{...u,default:()=>{var v;return a(W,null,[((v=u.default)==null?void 0:v.call(u))??e.text,!e.hideSlider&&a("div",{ref:x,class:["v-tab__slider",y.value],style:g.value},null)])}})}),Xe({},c)}});function fa(e){return e?e.map(r=>ea(r)?r:{text:r,value:r}):[]}const pa=te({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...ta({mandatory:"force"}),...pe(),...be()},"VTabs"),ka=le()({name:"VTabs",props:pa(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:u}=r;const n=ye(e,"modelValue"),y=G(()=>fa(e.items)),{densityClasses:g}=ge(e),{backgroundColorClasses:c,backgroundColorStyles:x}=Ke(h(e,"bgColor"));return Qe({VTab:{color:h(e,"color"),direction:h(e,"direction"),stacked:h(e,"stacked"),fixed:h(e,"fixedTabs"),sliderColor:h(e,"sliderColor"),hideSlider:h(e,"hideSlider")}}),Ve(()=>{const m=ce.filterProps(e);return a(ce,K(m,{modelValue:n.value,"onUpdate:modelValue":p=>n.value=p,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},g.value,c.value,e.class],style:[{"--v-tabs-height":Ze(e.height)},x.value,e.style],role:"tablist",symbol:xe}),{default:()=>[u.default?u.default():y.value.map(p=>a(ma,K(p,{key:p.text}),null))]})}),{}}});export{ka as V,_a as _,ma as a,xa as g};
