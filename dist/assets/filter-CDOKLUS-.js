import{B as L,r as v,J as j,g as F,aT as w,Y as I,b6 as O}from"./index-CbRD634o.js";const S=(t,c,e)=>t==null||c==null?-1:t.toString().toLocaleLowerCase().indexOf(c.toString().toLocaleLowerCase()),A=L({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function x(t,c,e){var i;const f=[],s=(e==null?void 0:e.default)??S,m=e!=null&&e.filterKeys?I(e.filterKeys):!1,g=Object.keys((e==null?void 0:e.customKeyFilter)??{}).length;if(!(t!=null&&t.length))return f;e:for(let r=0;r<t.length;r++){const[a,M=a]=I(t[r]),y={},u={};let l=-1;if(c&&!(e!=null&&e.noFilter)){if(typeof a=="object"){const K=m||Object.keys(M);for(const n of K){const k=O(M,n),b=(i=e==null?void 0:e.customKeyFilter)==null?void 0:i[n];if(l=b?b(k,c,a):s(k,c,a),l!==-1&&l!==!1)b?y[n]=l:u[n]=l;else if((e==null?void 0:e.filterMode)==="every")continue e}}else l=s(a,c,a),l!==-1&&l!==!1&&(u.title=l);const d=Object.keys(u).length,h=Object.keys(y).length;if(!d&&!h||(e==null?void 0:e.filterMode)==="union"&&h!==g&&!d||(e==null?void 0:e.filterMode)==="intersection"&&(h!==g||!d))continue}f.push({index:r,matches:{...u,...y}})}return f}function B(t,c,e,f){const s=v([]),m=v(new Map),g=j(()=>f!=null&&f.transform?F(c).map(r=>[r,f.transform(r)]):F(c));w(()=>{const r=typeof e=="function"?e():F(e),a=typeof r!="string"&&typeof r!="number"?"":String(r),M=x(g.value,a,{customKeyFilter:{...t.customKeyFilter,...F(f==null?void 0:f.customKeyFilter)},default:t.customFilter,filterKeys:t.filterKeys,filterMode:t.filterMode,noFilter:t.noFilter}),y=F(c),u=[],l=new Map;M.forEach(d=>{let{index:h,matches:K}=d;const n=y[h];u.push(n),l.set(n.value,K)}),s.value=u,m.value=l});function i(r){return m.value.get(r.value)}return{filteredItems:s,filteredMatches:m,getMatches:i}}export{A as m,B as u};
