import{j as e,r as t}from"./react-BZuymhSV.js";import{U as s,H as a,g as i,s as l}from"./index-qeeOPZoT.js";import{u as r}from"./react-router-dom-BFbt_rfn.js";import{m as o,n,M as c,F as d}from"./react-icons-BdjcCHud.js";/* empty css                */import{a as p}from"./axios-XtWrBBVz.js";import{l as m}from"./@stripe-CJpMvJYj.js";import{n as u,c as _,s as x,p as h,a as j,e as y}from"./validators-BtMPgszA.js";import"./react-dom-BYiVop1z.js";import"./scheduler-DhxmCZ7v.js";import"./@gsap-7rUOfEg6.js";import"./gsap-BDVyzZVq.js";import"./i18next-BuDUpmuK.js";import"./split-type-CbOXNKxF.js";import"./react-i18next-DjQM30kD.js";import"./swiper-bSAY_IpK.js";import"./react-toastify-BQnkcPH4.js";import"./clsx-BeLtu-UY.js";import"./@remix-run-CmyMgbGZ.js";const v={"full-width":"_full-width_1l9ck_1",empty:"_empty_1l9ck_5",products:"_products_1l9ck_18","product-item":"_product-item_1l9ck_27","product-info":"_product-info_1l9ck_37",cover:"_cover_1l9ck_42",title:"_title_1l9ck_49","price-wrapper":"_price-wrapper_1l9ck_56",price:"_price_1l9ck_56","original-price":"_original-price_1l9ck_62",controls:"_controls_1l9ck_71","quantity-label":"_quantity-label_1l9ck_80","delete-btn":"_delete-btn_1l9ck_84"},g=({price:t,discount:s,quantityInCart:a})=>{const i=s?(t*(1-s/100)*a).toFixed(2):(t*a).toFixed(2);return e.jsxs("div",{className:v["price-wrapper"],children:[s>0&&e.jsx("p",{className:v["original-price"],children:(t*a).toFixed(2)}),e.jsxs("p",{className:v.price,children:[i," PLN"]})]})},b=({img:t,info:{title:s,price:a,discount:i,_id:l,quantityInCart:o}})=>{const n=r();return e.jsxs("div",{className:v["product-info"],children:[e.jsx("img",{className:v.cover,src:t,alt:`"${s}" cover`,onClick:()=>n(`/product/${l}`)}),e.jsx("h1",{className:v.title,children:s}),e.jsx(g,{price:a,discount:i,quantityInCart:o})]})},N=({event:t,child:s})=>e.jsx("button",{className:v["delete-btn"],onClick:t,children:s}),k=({product:a})=>{const{removeAlbumFromCart:i,updateQuantityInCart:l}=t.useContext(s),r=Number(a.quantityInCart),d=e=>{"+"===e?l({id:a._id,quantity:r+1}):"-"===e&&l({id:a._id,quantity:r-1})};return e.jsxs("div",{className:v.controls,children:[e.jsx("h2",{className:v["quantity-label"],children:`Quantity: ${r}`}),r+1<=a.quantity&&e.jsx(N,{event:()=>d("+"),child:e.jsx(o,{})}),r-1>0&&e.jsx(N,{event:()=>d("-"),child:e.jsx(n,{})}),e.jsx(N,{event:()=>i(a._id),child:e.jsx(c,{})})]})},C=({product:t})=>e.jsxs("div",{className:v["product-item"],children:[e.jsx(b,{img:t.images.small.url,info:t}),e.jsx(k,{product:t})]}),f=({products:t,additionalClass:s})=>0===t.length?e.jsx("div",{className:`${v.empty} ${v[`${s}`]}`,children:"Cart is empty"}):e.jsx("div",{className:v.products,children:t.map((t=>e.jsx(C,{product:t},t._id)))}),w={"options-menu":"_options-menu_1x80l_1",option:"_option_1x80l_1",cost:"_cost_1x80l_21",visa:"_visa_1x80l_35",blik:"_blik_1x80l_38",dpd:"_dpd_1x80l_39",inpost:"_inpost_1x80l_42",finalize:"_finalize_1x80l_46",title:"_title_1x80l_59",form:"_form_1x80l_62","payment-methods":"_payment-methods_1x80l_68","payment-method":"_payment-method_1x80l_68","delivery-methods":"_delivery-methods_1x80l_93","delivery-title":"_delivery-title_1x80l_98",policy:"_policy_1x80l_101","input-wrapper":"_input-wrapper_1x80l_119",error:"_error_1x80l_128",total:"_total_1x80l_143",delivery:"_delivery_1x80l_93",auth:"_auth_1x80l_167"},F=({label:s,setValue:a,validator:i})=>{const[l,r]=t.useState("");return e.jsxs("div",{className:w["input-wrapper"],children:[e.jsx("label",{className:w.label,children:s}),l&&l.length>0&&e.jsx("span",{className:w.error,children:l}),e.jsx("input",{className:w.input,type:"text",onChange:e=>{const t=e.target.value;r(i(t)),a({val:t,err:i(t)})}})]})};p.defaults.withCredentials=!0;const P=async(e,t)=>{
//! If u don't have it yet, create a file called private.ts in the src folder and add the following line:
//! export const stripeKey = 'YOUR_STRIPE_KEY';
await(async()=>{const e=document.createElement("script");e.src="https://js.stripe.com/v3/",e.async=!0,document.body.appendChild(e)})();const s=await m("pk_test_51Q5TUpBTz5FUfniwJt75m2jO7BUFb86xjG0CMhW5XtMQSzqy6LvtA50o3exkR7xrqIhZgFf4DQFTOhkYrzQFPyGE00QHgXDNrw");if(!s)return;const i=e.map((e=>({_id:e._id,quantity:e.quantityInCart}))),l=await p.post(`${a.SHOP}/payment/create-checkout-session`,JSON.stringify({productsToBuy:i,deliveryData:t}),{withCredentials:!0,headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":!0}}),r=await l.data;(await s.redirectToCheckout({sessionId:r.id})).error&&alert("We are sorry, but there was an error processing your payment. Please try again later.")},S=({products:a,isValid:i,deliveryCost:l,getCheckoutData:r})=>{const{clearCart:o}=t.useContext(s),n=a.reduce(((e,t)=>{const s=Number(t.quantityInCart),a=t.discount?(t.price*(1-t.discount/100)).toFixed(2):t.price.toFixed(2);return e+s*Number(a)}),0);return e.jsxs("div",{className:w.total,children:[e.jsxs("p",{className:w.cost,children:[e.jsxs("span",{children:[(n+l).toFixed(2)," PLN"]}),e.jsx("span",{className:w.delivery,children:`${n.toFixed(2)} PLN + delivery: ${l.toFixed(2)} PLN`})]}),e.jsxs("button",{className:"btn-1",disabled:a&&0===a.length||!i,onClick:()=>{o(),sessionStorage.removeItem("orders"),P(a,r)},children:[e.jsx("span",{children:"Checkout"}),e.jsx(d,{})]})]})},$=({payMethod:t,setPayMethod:s})=>e.jsxs("div",{className:w["options-menu"],children:[e.jsx("button",{className:`${w.option} ${w.visa}`,disabled:"card"===t,onClick:()=>s("card"),children:e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png",draggable:"false"})}),e.jsx("button",{className:`${w.option} ${w.blik}`,disabled:"blik"===t,onClick:()=>s("blik"),children:e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Blik_logo.jpg",draggable:"false"})})]}),q=({deliveryMethod:t,setDeliveryMethod:s,setDeliveryCost:a})=>{const i=(e,t)=>{s(e),a(t)};return e.jsxs("div",{className:w["delivery-methods"],children:[e.jsx("h2",{className:w["delivery-methods__title"],children:"Delivery methods:"}),e.jsxs("div",{className:w["options-menu"],children:[e.jsxs("button",{className:`${w.option} ${w.inpost}`,disabled:"inpost"===t,onClick:()=>i("inpost",9.99),children:[e.jsxs("span",{className:w.cost,children:[9.99," PLN"]}),e.jsx("img",{src:"https://inpost.pl/themes/custom/inpost/logo.svg?v3",draggable:"false"})]}),e.jsxs("button",{className:`${w.option} ${w.dpd}`,disabled:"dpd"===t,onClick:()=>i("dpd",14.99),children:[e.jsxs("span",{className:w.cost,children:[14.99," PLN"]}),e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/DPD_logo_%282015%29.svg/2560px-DPD_logo_%282015%29.svg.png",draggable:"false"})]})]})]})},D=({products:a})=>{const{user:i}=t.useContext(s),l=r(),[o,n]=t.useState("card"),[c,d]=t.useState("inpost"),[p,m]=t.useState(9.99),[v,g]=t.useState(M),[b,N]=t.useState(M),[k,C]=t.useState(M),[f,P]=t.useState(M),[D,I]=t.useState(M),[V,z]=t.useState(M),[L,Q]=t.useState(!1),[T,E]=t.useState(!1);if(t.useEffect((()=>{""===v.err&&""===b.err&&""===k.err&&""===f.err&&""===D.err&&""===V.err&&T?Q(!0):Q(!1)}),[v,b,k,f,D,V,T]),!i)return e.jsx("div",{className:w.finalize,children:e.jsxs("div",{className:w.auth,children:[e.jsx("h1",{className:w.title,children:"Please login to finalize your order"}),e.jsx("button",{className:"btn-1",onClick:()=>l("/auth"),children:"Login"})]})});return e.jsxs("div",{className:w.finalize,children:[e.jsx("h1",{className:w.title,children:"Finalize"}),e.jsx($,{payMethod:o,setPayMethod:n}),e.jsx(q,{deliveryMethod:c,setDeliveryMethod:d,setDeliveryCost:m}),e.jsx(F,{label:"Full name*:",setValue:g,validator:u}),e.jsx(F,{label:"City*:",setValue:N,validator:_}),e.jsx(F,{label:"Street*:",setValue:C,validator:x}),e.jsx(F,{label:"Post Code*:",setValue:P,validator:h}),e.jsx(F,{label:"Phone*:",setValue:I,validator:j}),e.jsx(F,{label:"Email*:",setValue:z,validator:y}),e.jsxs("div",{className:w.policy,children:[e.jsx("input",{type:"checkbox",id:"policy",onChange:()=>E(!T)}),e.jsxs("label",{htmlFor:"policy",children:["I accept the"," ",e.jsx("a",{rel:"noreferrer",onClick:()=>l("/policy",{replace:!0}),children:"Privacy Policy"})]})]}),e.jsx(S,{products:a,isValid:L,deliveryCost:p,getCheckoutData:{name:v.val,city:b.val,street:k.val,postalCode:f.val,phone:D.val,email:V.val,payment:o,deliveryMethod:c}})]})},M={val:"",err:"init"},I="_cart_oqsx0_1",V=()=>{const{cart:a}=t.useContext(s),[l,r]=t.useState([]);return t.useEffect((()=>{a&&a.length>0?i(a).then((e=>{e.error||r(e)})):r([])}),[a]),e.jsxs("div",{className:I,children:[e.jsx(f,{products:l,additionalClass:"full-width"}),l.length>0&&e.jsx(D,{products:l})]})},z=()=>e.jsx("div",{className:l.page,children:e.jsx(V,{})});export{z as default};
