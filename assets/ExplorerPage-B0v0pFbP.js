import{r as e,j as t}from"./react-BZuymhSV.js";import{f as s,l as r,P as i,s as n}from"./index-BFlvfIOT.js";import{u as a}from"./react-i18next-DjQM30kD.js";import{o}from"./react-icons-BdjcCHud.js";import"./react-dom-BYiVop1z.js";import"./scheduler-DhxmCZ7v.js";import"./react-router-dom-BFbt_rfn.js";import"./@remix-run-CmyMgbGZ.js";import"./@gsap-7rUOfEg6.js";import"./gsap-BDVyzZVq.js";import"./i18next-BuDUpmuK.js";import"./split-type-CbOXNKxF.js";import"./axios-XtWrBBVz.js";import"./swiper-bSAY_IpK.js";import"./react-toastify-BQnkcPH4.js";import"./clsx-BeLtu-UY.js";const l={inputQuery:"",options:{available:!1,discount:!1},genres:[],price:{min:0,max:0}},c=()=>{const e=new URLSearchParams(window.location.search);return{inputQuery:e.get("inputQuery")||"",options:{available:"true"===e.get("options[available]"),discount:"true"===e.get("options[discount]")},genres:e.getAll("genres[]"),price:{min:parseInt(e.get("price[min]")||"0"),max:parseInt(e.get("price[max]")||"0")}}},p=e.createContext(null),u=({children:r})=>{const[i,n]=e.useState([]),[a,o]=e.useState(""),[u,d]=e.useState({...l,...c()}),[h,m]=e.useState(0),[_,g]=e.useState({current:1,total:1});return e.useEffect((()=>{m((()=>{var e,t,s,r;let i=0;return u.genres&&(i+=u.genres.length),u.inputQuery&&u.inputQuery.length>0&&i++,(null==(e=u.options)?void 0:e.available)&&i++,(null==(t=u.options)?void 0:t.discount)&&i++,u.price&&(null==(s=u.price)?void 0:s.min)>0&&i++,u.price&&(null==(r=u.price)?void 0:r.max)>0&&i++,u.sort&&u.sort.type.length>0&&i++,i})()),o("fetching"),s(u,_.current,10).then((e=>{e.error?o("error"):(o("fetched"),n(e.products),g((t=>({...t,total:e.totalPages}))))}))}),[u,_.current]),t.jsx(p.Provider,{value:{products:i,filters:u,pageInfo:_,setPageInfo:g,queryState:a,changeFilters:(e,t)=>{e&&d({...u,...e}),((e,t)=>{var s,r,i,n,a;const o=new URLSearchParams;t&&o.set("page",t.toString()),(null==e?void 0:e.inputQuery)&&o.set("inputQuery",e.inputQuery),(null==(s=null==e?void 0:e.options)?void 0:s.available)&&o.set("options[available]",e.options.available.toString()),(null==(r=null==e?void 0:e.options)?void 0:r.discount)&&o.set("options[discount]",e.options.discount.toString()),(null==(i=null==e?void 0:e.genres)?void 0:i.length)&&e.genres.forEach((e=>o.append("genres[]",e))),(null==(n=null==e?void 0:e.price)?void 0:n.min)&&o.set("price[min]",null==e?void 0:e.price.min.toString()),(null==(a=null==e?void 0:e.price)?void 0:a.max)&&o.set("price[max]",null==e?void 0:e.price.max.toString());const l=`${window.location.pathname}?${o.toString()}`;window.history.pushState({},"",l)})(e,t),g({..._,current:t})},filterCount:h},children:r})},d="_input-search-wrapper_1l789_1",h="_input-search_1l789_1",m=({setInputQuery:e,inputQuery:s,applyFilters:r})=>{const{t:i}=a(),n=e=>i(`Catalog.Filter.InputSearch.${e}`);return t.jsxs("div",{className:d,children:[t.jsx("h1",{className:"search-header",children:i(n("searchHeader"))}),t.jsx("input",{className:h,type:"text",placeholder:i(n("searchPlaceholder")),value:s,onChange:t=>e(t.target.value),onKeyUp:e=>{"Enter"===e.key&&r()}})]})},_={options:"_options_y2ixv_1","options-wrapper":"_options-wrapper_y2ixv_6",option:"_option_y2ixv_1"},g=({id:e,label:s,checked:r,onChange:i})=>t.jsxs("div",{className:_.option,children:[t.jsx("input",{type:"checkbox",id:e,checked:r,onChange:i}),t.jsx("label",{htmlFor:e,children:s})]}),x=({options:e,setOptions:s})=>{const i=r("Catalog.Filter.Options")(),n=t=>{s({...e,[t]:!e[t]})};return t.jsxs("div",{className:_.options,children:[t.jsxs("h1",{className:_["options-header"],children:[i("header"),":"]}),t.jsxs("div",{className:_["options-wrapper"],children:[t.jsx(g,{id:"available",label:i("labelAvailable"),checked:e.available,onChange:()=>n("available")}),t.jsx(g,{id:"discount",label:i("labelSale"),checked:e.discount,onChange:()=>n("discount")})]})]})},v="_genres-wrapper_s03pw_1",j="_genres-header_s03pw_6",f="_genres_s03pw_1",y="_genre_s03pw_1",b="_active_s03pw_29",N=({setGenres:e,genres:s})=>t.jsxs("div",{className:v,children:[t.jsx("h1",{className:j,children:"Genres:"}),t.jsx("div",{className:f,children:["rap","trap","hip-hop","R&B","pop","soul","rock","jazz","blues","reggae","swing","country","metal","classical","electronic","funk","disco","latin","techno","indie","dance","alternative"].map(((r,i)=>t.jsx("button",{className:y+` ${s.includes(r.toLowerCase())?b:""}`,onClick:()=>(t=>{const r=t.toLowerCase();s.includes(r)?e(s.filter((e=>e!==r))):e([...s,r])})(r),children:t.jsx("span",{children:r})},i)))})]}),w={"price-filter":"_price-filter_21f23_1","inputs-wrapper":"_inputs-wrapper_21f23_7"},C=({price:e,setPrice:s})=>t.jsxs("div",{className:w["price-filter"],children:[t.jsx("h1",{className:w["price-header"],children:"Price:"}),t.jsxs("div",{className:w["inputs-wrapper"],children:[t.jsx("input",{type:"number",placeholder:"From",min:0,max:1e3,defaultValue:e.min||0,onChange:t=>s({...e,min:Number(t.target.value)})}),t.jsx("input",{type:"number",placeholder:"To",min:0,max:1e3,defaultValue:e.max||0,onChange:t=>s({...e,max:Number(t.target.value)})})]})]}),S="_filter_fykg5_1",k="_filter-btn_fykg5_25",Q="_switch-btn_fykg5_42",P="_switch-close_fykg5_60",$="_open_fykg5_64",E="_close_fykg5_68",F="_sort-wrapper_1ug7v_1",I="_sort-header_1ug7v_7",L="_options_1ug7v_10",q="_option_1ug7v_10",R="_active_1ug7v_30",A="_order-btn_1ug7v_36",G="_order-icon_1ug7v_44",O="_desc_1ug7v_48",U=({setSort:s,sort:r})=>{const[i,n]=e.useState("asc");e.useEffect((()=>{s(r.type,i)}),[i]);return t.jsxs("div",{className:F,children:[t.jsx("h1",{className:I,children:"Sort By:"}),t.jsx("div",{className:L,children:["title","release","discount","price","duration"].map(((e,n)=>t.jsx("button",{className:q+` ${r.type==e.toLowerCase()?R:""}`,onClick:()=>(e=>{r.type!=e.toLowerCase()?s(e.toLowerCase(),i):s("",i)})(e),title:"Sort by",children:t.jsx("span",{children:e})},n)))}),t.jsx("button",{className:A,onClick:()=>{n("asc"==i?"desc":"asc")},title:"Change order",children:t.jsx(o,{className:`${G} ${"asc"==i?O:""}`})})]})},z=()=>{const{filters:s,changeFilters:r,filterCount:i}=e.useContext(p),[n,a]=e.useState(s.sort??{type:"",order:""}),[o,l]=e.useState(!1),[c,u]=e.useState(s.inputQuery??""),[d,h]=e.useState(s.options??{available:!1,discount:!1}),[_,g]=e.useState(s.genres??[]),[v,j]=e.useState(s.price??{min:0,max:0}),f=e.useRef(null);e.useEffect((()=>(document.addEventListener("click",(e=>{f.current&&(f.current.contains(e.target)||l(!1))})),()=>document.removeEventListener("click",(()=>l(!1))))),[]),e.useEffect((()=>{l(!1)}),[s]);const y=()=>r({inputQuery:c,options:d,genres:_,price:v},1);return t.jsxs("div",{id:"filter-ref",ref:f,children:[t.jsxs("div",{className:`${S} ${o?$:E}`,children:[t.jsx(m,{setInputQuery:u,inputQuery:c,applyFilters:y}),t.jsx(U,{setSort:(e,t)=>a({type:e,order:t}),sort:n}),t.jsx(x,{options:d,setOptions:h}),t.jsx(N,{setGenres:g,genres:_}),t.jsx(C,{price:v,setPrice:j}),t.jsx("button",{className:k,onClick:y,children:"Apply"})]}),t.jsx("button",{className:`${Q} ${o&&P} `,onClick:()=>l(!o),children:o?" Close":`Filters ${i||""}`})]})},B="_product-explorer-wrapper_1khay_1",V="_product-explorer_1khay_1",H="_pagination_1khay_27",K="_pagination-btn_1khay_35",T="_info_1khay_58",D=({page:s,disabled:r})=>{const{pageInfo:i,setPageInfo:n}=e.useContext(p);return t.jsx("button",{className:K,onClick:()=>n({...i,current:s}),disabled:r,children:s})},J=()=>{const{products:s,queryState:n,pageInfo:a}=e.useContext(p),o=r("Catalog.ProductExplorer")();if("fetching"===n)return t.jsx("div",{className:T,children:o("queryFetching")});if("error"===n)return t.jsx("div",{className:T,children:o("queryError")});if(0===s.length)return t.jsx("div",{className:T,children:o("listEmpty")});return t.jsxs("div",{className:B,children:[t.jsx("div",{className:V,children:s.map((e=>t.jsx(i,{product:e},e._id)))}),t.jsx("div",{className:H,children:a.total>1&&(()=>{const e=[];for(let s=1;s<=a.total;s++)e.push(t.jsx(D,{page:s,disabled:s===a.current},s));return e})()})]})},M=()=>t.jsx("div",{className:n.page,children:t.jsxs(u,{children:[t.jsx(z,{}),t.jsx(J,{})]})});export{M as ExplorerPage,M as default};