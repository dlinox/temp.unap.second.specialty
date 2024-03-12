import{d as x,u as k,s as S,r as s,o as A,m as O,b as e,w as a,e as _,g as V,h as u,i as y,f as P,v as B,x as m,y as U,z as $,F as L,a as w,c as M}from"./index-CbRD634o.js";import{i as F,a as J,b as X}from"./validations-DhuTPWDk.js";import{P as q}from"./PostulantService-D4jBPiUD.js";import{V as c,a as Y,b as g,e as z,c as G}from"./VCard-CqELSRV0.js";import{V as H}from"./VSelect-CemnQd4H.js";import{V as j}from"./VTextField-Dvac0z3s.js";import{V as K}from"./VForm-Czsv9jaY.js";import{V as T}from"./VDialog-Kws0AWcV.js";const Q=w("small",null,"Ya inicio la preinscripcion",-1),W=w("p",null,"Ya inicio la preinscripcion,¿ desea continuar?",-1),Z=x({__name:"PostulantVoucher",emits:["onSuccess"],setup(E,{emit:h}){const p=k(),f=S(),r=s(!1),v=new q,N=s(!1),i=s(!1),d=s(""),I=[{id:"001",name:"DOCUMENTO NACIONAL DE IDENTIDAD",shortName:"DNI"},{id:"003",name:"CARNET/CARNÉ DE EXTRANJERÍA",shortName:"CE"}],b=s(null),l=s({documentType:"001",documentNumber:"",paymentId:"",paymentDate:"",paymentAmount:"",paymentVoucher:null,postulantId:null,fileId:null}),C=async n=>{if(d.value="",n.length===8&&l.value.documentType==="001"){let t=await v.searchPostulantByDocument(l.value.documentType,n);t&&(d.value=t,i.value=!0)}else if(n.length===12&&l.value.documentType==="004"){let t=await v.searchPostulantByDocument(l.value.documentType,n);t&&(d.value=t,i.value=!0)}},R=()=>{let n=f.params.slug;p.push(`/${n}/preinscripcion/${d.value}`)},D=async()=>{const{valid:n}=await b.value.validate();if(n){r.value=!0;try{let t=await v.startPreinscription(l.value);if(t.error){r.value=!1;return}if(l.value.postulantId=t.id,t.id){let o=f.params.slug;p.push(`/${o}/preinscripcion/${l.value.postulantId}`)}}catch{r.value=!1}}};return(n,t)=>(A(),O(L,null,[e(K,{ref_key:"formRef",ref:b,onSubmit:P(D,["prevent"])},{default:a(()=>[e(c,{"max-width":"450",class:"mx-auto my-5",rounded:"lg",elevation:"2"},{default:a(()=>[e(_,null,{default:a(()=>[e(Y,{class:"mt-2"},{default:a(()=>[e(g,{cols:"12",md:"12"},{default:a(()=>[e(H,{modelValue:l.value.documentType,"onUpdate:modelValue":[t[0]||(t[0]=o=>l.value.documentType=o),t[1]||(t[1]=o=>C(l.value.documentNumber))],items:I,label:"Tipo de documento","item-title":"shortName","item-value":"id",rules:[V(F)],density:"compact"},null,8,["modelValue","rules"])]),_:1}),e(g,{cols:"12",md:"12",class:"pb-0"},{default:a(()=>[e(j,{modelValue:l.value.documentNumber,"onUpdate:modelValue":[t[2]||(t[2]=o=>l.value.documentNumber=o),C],label:"N° de documento",required:"",rules:[l.value.documentType==="001"?V(J):V(X)],autocomplete:"off",counter:l.value.documentType==="001"?8:12,maxLength:l.value.documentType==="001"?8:12},null,8,["modelValue","rules","counter","maxLength"])]),_:1}),e(g,{cols:"12"},{default:a(()=>[e(u,{type:"submit",variant:"flat",block:"",loading:r.value},{default:a(()=>[y(" Iniciar preinscripción ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},512),e(_,null,{default:a(()=>[e(c,{"max-width":"800",class:"mx-auto my-5"},{default:a(()=>[e(B,{lines:"two"},{default:a(()=>[e(m,{subtitle:"Cronograma Programas de Segunda Especialidad UNA"},{append:a(()=>[e(u,{color:"primary",variant:"outlined",link:"",href:"/uploads/anexos/ANEXO 03 A - CRONOGRAMA.pdf",target:"_blank",icon:"mdi-download",density:"comfortable"})]),_:1}),e(m,{subtitle:"Instrumento de Entrevista Personal"},{append:a(()=>[e(u,{color:"primary",variant:"outlined",link:"",href:"/uploads/anexos/ANEXO 04 - INSTRUMENTO DE ENTREVISTA.pdf",target:"_blank",icon:"mdi-download",density:"comfortable"})]),_:1}),e(m,{subtitle:"Carta de Compromiso"},{append:a(()=>[e(u,{color:"primary",variant:"outlined",link:"",href:"/uploads/anexos/CARTA DE COMPROMISO.pdf",target:"_blank",icon:"mdi-download",density:"comfortable"})]),_:1}),e(m,{subtitle:"Declaración Jurada"},{append:a(()=>[e(u,{color:"primary",variant:"outlined",link:"",href:"/uploads/anexos/DECLARACION JURADA.pdf",target:"_blank",icon:"mdi-download",density:"comfortable"})]),_:1})]),_:1})]),_:1})]),_:1}),e(T,{modelValue:N.value,"onUpdate:modelValue":t[3]||(t[3]=o=>N.value=o)},{default:a(()=>[e(c,{width:"300px",class:"mx-auto"},{default:a(()=>[e(U,{src:"http://www.osce.gob.pe/consultasenlinea/rnp/images/ClaveBANBIF.gif"})]),_:1})]),_:1},8,["modelValue"]),e(T,{modelValue:i.value,"onUpdate:modelValue":t[5]||(t[5]=o=>i.value=o)},{default:a(()=>[e(c,{width:"300px",class:"mx-auto"},{default:a(()=>[e(z,{class:"bg-primary"},{default:a(()=>[Q]),_:1}),e(_,null,{default:a(()=>[W]),_:1}),e(G,null,{default:a(()=>[e(u,{color:"red",onClick:t[4]||(t[4]=o=>i.value=!1)},{default:a(()=>[y("No")]),_:1}),e($),e(u,{variant:"tonal",onClick:R},{default:a(()=>[y("Si")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),ie=x({__name:"index",setup(E){return(async()=>{})(),(p,f)=>(A(),M(Z))}});export{ie as default};
