var J=Object.defineProperty;var X=(r,n,u)=>n in r?J(r,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[n]=u;var k=(r,n,u)=>(X(r,typeof n!="symbol"?n+"":n,u),u);import{p as G,d as $,k as K,q as Q,r as m,o as I,i as A,a,w as t,e as B,u as d,l as W,s as Z,v as R,f as V,c as j,x as U,y as P,t as ee,g as D,b as ae,F as le,j as T}from"./index-i_KC2d37.js";import{P as te,F as oe,_ as ne}from"./FileService-Dr6uA4XX.js";import{i as _,a as ue,b as se,c as re,d as ie,V as me}from"./VForm-D46ju9Yt.js";import{V as b,a as de,b as c,e as ce,c as pe}from"./VCard-BaE9oyD0.js";import{V as ve,a as F}from"./VSelect-BzG2OneL.js";import{V as h}from"./VTextField-CDC1wm75.js";class fe{constructor(){k(this,"http");const n="http://174.138.178.198:8090/api";this.http=G.create({baseURL:n,headers:{"Content-Type":"application/json"}})}async store(n){const u={secuencia:n.paymentId,monto:n.paymentAmount,fecha_pago:n.paymentDate,image_url:n.fileId,id_postulante:n.postulantId};return(await this.http.post("/pago",u)).data}async updateImageUrl(n,u){return(await this.http.put(`/update-image-url/${n}`,{imageUrl:u})).data}}const ye=T("small",null," Voucher ",-1),ge=T("small",null," Ejemplo",-1),Ve={key:0,class:"text-error ms-2"},_e=T("small",null,"Ya inicio la preinscripcion",-1),be=T("p",null,"Ya inicio la preinscripcion, desea continuar?",-1),he=$({__name:"PostulantVoucher",emits:["onSuccess"],setup(r,{emit:n}){const u=K(),f=Q(),i=m(!1),w=new te,q=new fe,L=new oe,N=m(null),C=m(!1),p=m(!1),y=m(""),M=[{id:"001",name:"DOCUMENTO NACIONAL DE IDENTIDAD",shortName:"DNI"},{id:"004",name:"CARNET/CARNÉ DE EXTRANJERÍA",shortName:"CE"}],E=m(null),l=m({documentType:"001",documentNumber:"",paymentId:"",paymentDate:"",paymentAmount:"",paymentVoucher:null,postulantId:null,fileId:null}),v=m(""),O=s=>(v.value="",s?["image/jpeg","image/png","image/jpg","image/gif","image/svg","image/webp"].includes(s.type)?s.size>2e6?"El tamaño de la imagen no debe superar los 2MB":"":"Solo se permiten archivos de imagen (jpeg, png)":"El archivo es requerido"),S=async s=>{if(y.value="",s.length===8&&l.value.documentType==="001"){let e=await w.searchPostulantByDocument(l.value.documentType,s);e&&(y.value=e,p.value=!0)}else if(s.length===12&&l.value.documentType==="004"){let e=await w.searchPostulantByDocument(l.value.documentType,s);e&&(y.value=e,p.value=!0)}},Y=()=>{u.push(`/convocatoria-2024/preinscripcion/${y.value}`)},z=async()=>{const{valid:s}=await E.value.validate();if(l.value.paymentVoucher===null){v.value="El archivo es requerido";return}if(v.value=O(l.value.paymentVoucher),!!s){i.value=!0;try{let e=await w.startPreinscription(l.value);if(e.error){console.log(e),i.value=!1;return}l.value.postulantId=e.id;let o=await L.store(l.value);if(o.error){console.log(o),i.value=!1,x();return}l.value.fileId=o.FileId;let g=await q.updateImageUrl(e.paymentId,o.Path);if(g.error){console.log(g),x(),i.value=!1;return}if(console.log(g),g!==!0)i.value=!1,x();else{i.value=!1;let H=f.params.slug;u.push(`/${H}/preinscripcion/${l.value.postulantId}`)}}catch(e){i.value=!1,console.log(e)}}},x=()=>{console.log("rollback",l.value),console.log("rollback")};return(s,e)=>(I(),A(le,null,[a(me,{ref_key:"formRef",ref:E,onSubmit:ae(z,["prevent"])},{default:t(()=>[a(b,{"max-width":"450",class:"mx-auto my-5",rounded:"lg",elevation:"2"},{default:t(()=>[a(B,null,{default:t(()=>[a(de,{class:"mt-2"},{default:t(()=>[a(c,{cols:"12",md:"4"},{default:t(()=>[a(ve,{modelValue:l.value.documentType,"onUpdate:modelValue":[e[0]||(e[0]=o=>l.value.documentType=o),e[1]||(e[1]=o=>S(l.value.documentNumber))],items:M,label:"Tipo de documento","item-title":"shortName","item-value":"id",rules:[d(_)],density:"compact"},null,8,["modelValue","rules"])]),_:1}),a(c,{cols:"12",md:"8",class:"pb-0"},{default:t(()=>[a(h,{modelValue:l.value.documentNumber,"onUpdate:modelValue":[e[2]||(e[2]=o=>l.value.documentNumber=o),S],label:"N° de documento",required:"",rules:[l.value.documentType==="001"?d(ue):d(se)],autocomplete:"off",counter:l.value.documentType==="001"?8:12,maxLength:l.value.documentType==="001"?8:12},null,8,["modelValue","rules","counter","maxLength"])]),_:1}),a(c,{cols:"12",md:"12"},{default:t(()=>[a(h,{modelValue:l.value.paymentId,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value.paymentId=o),label:"Serie",rules:[d(_),d(re)]},null,8,["modelValue","rules"])]),_:1}),a(c,{cols:"12",md:"12"},{default:t(()=>[a(h,{modelValue:l.value.paymentDate,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.paymentDate=o),label:"Fecha",type:"date",rules:[d(_)]},null,8,["modelValue","rules"])]),_:1}),a(c,{cols:"12",md:"12"},{default:t(()=>[a(h,{modelValue:l.value.paymentAmount,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.paymentAmount=o),label:"Monto",rules:[d(_),d(ie)]},null,8,["modelValue","rules"])]),_:1}),a(c,{cols:"12",md:"12"},{default:t(()=>[a(W,{density:"compact"},{default:t(()=>[a(Z,null,{default:t(()=>[ye]),_:1}),a(R),a(V,{"prepend-icon":"mdi-information-variant-circle-outline",density:"compact",onClick:e[6]||(e[6]=o=>C.value=!0)},{default:t(()=>[ge]),_:1})]),_:1}),a(b,{variant:"tonal",rounded:"0"},{default:t(()=>[a(ne,{"aspect-ratio":1,onOnCropper:e[7]||(e[7]=o=>(N.value=o.blob,l.value.paymentVoucher=o.file))}),N.value?(I(),j(U,{key:0,"aspect-ratio":16/9,src:N.value,height:"250",class:"border"},null,8,["src"])):P("",!0)]),_:1}),v.value?(I(),A("small",Ve,ee(v.value),1)):P("",!0)]),_:1}),a(c,{cols:"12"},{default:t(()=>[a(V,{type:"submit",variant:"flat",block:"",loading:i.value},{default:t(()=>[D(" Iniciar preinscripción ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},512),a(F,{modelValue:C.value,"onUpdate:modelValue":e[8]||(e[8]=o=>C.value=o)},{default:t(()=>[a(b,{width:"300px",class:"mx-auto"},{default:t(()=>[a(U,{src:"http://www.osce.gob.pe/consultasenlinea/rnp/images/ClaveBANBIF.gif"})]),_:1})]),_:1},8,["modelValue"]),a(F,{modelValue:p.value,"onUpdate:modelValue":e[10]||(e[10]=o=>p.value=o)},{default:t(()=>[a(b,{width:"300px",class:"mx-auto"},{default:t(()=>[a(ce,{class:"bg-primary"},{default:t(()=>[_e]),_:1}),a(B,null,{default:t(()=>[be]),_:1}),a(pe,null,{default:t(()=>[a(V,{color:"red",onClick:e[9]||(e[9]=o=>p.value=!1)},{default:t(()=>[D("No")]),_:1}),a(R),a(V,{variant:"tonal",onClick:Y},{default:t(()=>[D("Si")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),Ee=$({__name:"index",setup(r){return(async()=>{})(),(u,f)=>(I(),j(he))}});export{Ee as default};
