import{d as b,r as s,o as k,c as U,w as a,b as e,a as _,t as C,z as h,h as m,i,Q as D,m as F,n as j,F as q,$ as V,x as A,q as S,e as G}from"./index-CbRD634o.js";import{g as M,c as w,V as $,e as z,a as L,b as Q}from"./VCard-CqELSRV0.js";import{V as H}from"./VDataTableServer-Ca4TdhRY.js";import{V as J}from"./VDialog-Kws0AWcV.js";import{c as K}from"./VSelect-CemnQd4H.js";import{V as W}from"./VTextField-Dvac0z3s.js";import"./filter-CDOKLUS-.js";const X={class:"text-overline mb-1"},Y={class:"text-caption"},Z=b({__name:"DialogConfirm",props:{title:{type:String,default:"CONFIRMAR"},text:{type:String,default:"¿Está segura de que desea eliminar este elemento?"}},emits:["onConfirm"],setup(x,{emit:p}){const d=s(!1),f=s(!1);return(g,l)=>(k(),U(D,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=v=>d.value=v),"close-on-content-click":!1,location:"top right",activator:"parent"},{default:a(()=>[e($,null,{default:a(()=>[e(M,null,{default:a(()=>[_("div",null,[_("div",X,C(x.title),1),_("div",Y,C(x.text),1)])]),_:1}),e(w,null,{default:a(()=>[e(h),e(m,{variant:"tonal",color:"secondary",onClick:l[0]||(l[0]=v=>d.value=!1)},{default:a(()=>[i(" No ")]),_:1}),e(m,{loading:f.value,variant:"tonal",class:"ml-1",color:"red",onClick:l[1]||(l[1]=v=>(g.$emit("onConfirm"),d.value=!1))},{default:a(()=>[i(" Si ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),ee={class:"headline"},de=b({__name:"index",setup(x){const p=s(!1),d=s([]),f=s(5),g=s(0),l=s([]),v=s(""),r=s(!1),n=s({}),y=s({Name:"",Status:!0}),c=s(-1),O=async({page:o,itemsPerPage:u,sortBy:t,search:N})=>{p.value=!0;let I=await(await V.post("http://127.0.0.1:8000/api/document-types/data",{page:o,itemsPerPage:u,sortBy:t,search:N})).data;d.value=I.headers,g.value=I.items.total,l.value=I.items.data,console.log("page",o),console.log("itemsPerPage",u),console.log("sortBy",t),p.value=!1},P=o=>{c.value=l.value.indexOf(o),n.value=Object.assign({},o),r.value=!0},T=()=>{c.value=-1,n.value=Object.assign({},y.value),r.value=!0},B=()=>{c.value=-1,n.value=Object.assign({},y.value),r.value=!1},E=async()=>{if(c.value===-1){let o=await V.post("http://127.0.0.1:8000/api/document-types/",{Name:n.value.Name,Status:n.value.Status});l.value.push({Status:1,...o.data.documentType}),r.value=!1}else{console.log("editedItem",n.value);let o=await V.put("http://127.0.0.1:8000/api/document-types/"+n.value.Id,{Name:n.value.Name,Status:n.value.Status});l.value[c.value]=o.data.documentType,r.value=!1,console.log("update record")}},R=async o=>{await V.delete("http://127.0.0.1:8000/api/document-types/"+o.Id),l.value.splice(l.value.indexOf(o),1)};return(o,u)=>(k(),F(q,null,[e(j,null,{default:a(()=>[e(A,{subtitle:"Gestion de tipos de documentos",title:"Tipo de documentos"}),e(h),e(m,{"prepend-icon":"mdi-plus",variant:"tonal",onClick:T},{default:a(()=>[i(" Nuevo ")]),_:1})]),_:1}),e(H,{class:"border","items-per-page":f.value,"onUpdate:itemsPerPage":u[0]||(u[0]=t=>f.value=t),headers:d.value,"items-length":g.value,items:l.value,loading:p.value,search:v.value,"item-value":"Name","items-per-page-options":[1,5,10,25,50],"onUpdate:options":O},{"item.Status":a(({item:t})=>[e(K,{color:t.Status?"blue":"error",dark:"",label:"",small:""},{default:a(()=>[i(C(t.Status?"Activo":"Inactivo"),1)]),_:2},1032,["color"])]),"item.actions":a(({item:t})=>[e(m,{icon:"",onClick:N=>P(t),class:"mr-2",color:"teal darken-1",density:"compact",variant:"tonal"},{default:a(()=>[e(S,null,{default:a(()=>[i("mdi-pencil")]),_:1})]),_:2},1032,["onClick"]),e(m,{icon:"",color:"red",density:"compact",variant:"tonal"},{default:a(()=>[e(Z,{onOnConfirm:N=>R(t),title:`Eliminar ${t.Name}`,text:`¿Está seguro de que desea eliminar el tipo de documento ${t.Name}?`},null,8,["onOnConfirm","title","text"]),e(S,null,{default:a(()=>[i("mdi-delete")]),_:1})]),_:2},1024)]),_:2},1032,["items-per-page","headers","items-length","items","loading","search"]),e(J,{modelValue:r.value,"onUpdate:modelValue":u[2]||(u[2]=t=>r.value=t),"max-width":"500px"},{default:a(()=>[e($,null,{default:a(()=>[e(z,null,{default:a(()=>[_("span",ee,C(c.value===-1?"Nuevo":"Editar"),1)]),_:1}),e(G,null,{default:a(()=>[e(L,null,{default:a(()=>[e(Q,{cols:"12"},{default:a(()=>[e(W,{modelValue:n.value.Name,"onUpdate:modelValue":u[1]||(u[1]=t=>n.value.Name=t),label:"Nombre"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(w,null,{default:a(()=>[e(h),e(m,{color:"red darken-1",onClick:B},{default:a(()=>[i("Cancelar")]),_:1}),e(m,{variant:"tonal",onClick:E},{default:a(()=>[i("Guardar")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});export{de as default};
