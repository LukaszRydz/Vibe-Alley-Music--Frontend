const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CartPage-DhPlbX8s.js","assets/react-BZuymhSV.js","assets/react-router-dom-BFbt_rfn.js","assets/react-dom-BYiVop1z.js","assets/scheduler-DhxmCZ7v.js","assets/@remix-run-CmyMgbGZ.js","assets/react-icons-BdjcCHud.js","assets/axios-XtWrBBVz.js","assets/@stripe-CJpMvJYj.js","assets/validators-BtMPgszA.js","assets/@gsap-7rUOfEg6.js","assets/gsap-BDVyzZVq.js","assets/i18next-BuDUpmuK.js","assets/split-type-CbOXNKxF.js","assets/react-i18next-DjQM30kD.js","assets/swiper-bSAY_IpK.js","assets/swiper-CpiP4Om6.css","assets/react-toastify-BQnkcPH4.js","assets/clsx-BeLtu-UY.js","assets/react-toastify-Baz21aud.css","assets/CartPage-nbornHrs.css","assets/buttons-CQBCpKFt.css","assets/ExplorerPage-B0v0pFbP.js","assets/ExplorerPage-CbXLF4fN.css","assets/ProductPage-CKcn7wMR.js","assets/ProductPage-n_5SwoXq.css","assets/AuthPage-Dz2VxJmq.js","assets/AuthPage-C9tEH5Vm.css","assets/SettingsPage-RUyJjSbP.js","assets/SettingsPage-BeM7B2Yk.css","assets/PolicyPage-Dtb3-89h.js","assets/PolicyPage-iG7qs0t7.css","assets/ContactPage-CZUR27VD.js","assets/ContactPage-7YQKGXnK.css","assets/OrdersPage-BMSNSvxj.js","assets/OrdersPage-BUag14SA.css"])))=>i.map(i=>d[i]);
var e=Object.defineProperty,t=(t,r,s)=>((t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s)(t,"symbol"!=typeof r?r+"":r,s);import{j as r,r as s,R as a}from"./react-BZuymhSV.js";import{c as n}from"./react-dom-BYiVop1z.js";import{u as o,a as i,B as c,R as l,b as d}from"./react-router-dom-BFbt_rfn.js";import{u}from"./@gsap-7rUOfEg6.js";import{i as m}from"./i18next-BuDUpmuK.js";import{g as p}from"./gsap-BDVyzZVq.js";import{S as g}from"./split-type-CbOXNKxF.js";import{a as h}from"./axios-XtWrBBVz.js";import{i as _,u as y}from"./react-i18next-DjQM30kD.js";import{I as f,F as j,a as x,b as v,c as w,A as b,d as N,B as S,e as E,f as k,g as C,h as P,i as I,j as $,k as L,l as z}from"./react-icons-BdjcCHud.js";import{S as O,P as T,a as A}from"./swiper-bSAY_IpK.js";import{B as q,Q as R}from"./react-toastify-BQnkcPH4.js";import"./scheduler-DhxmCZ7v.js";import"./@remix-run-CmyMgbGZ.js";import"./clsx-BeLtu-UY.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const D={},M=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),r=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));s=Promise.allSettled(t.map((e=>{if((e=function(e){return"/Vibe-Alley-Music--Frontend/"+e}(e))in D)return;D[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":"modulepreload",t||(a.as="script"),a.crossOrigin="",a.href=e,r&&a.setAttribute("nonce",r),document.head.appendChild(a),t?new Promise(((t,r)=>{a.addEventListener("load",t),a.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function a(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return s.then((t=>{for(const e of t||[])"rejected"===e.status&&a(e.reason);return e().catch(a)}))},F={navbar:"_navbar_11t6s_5","catalog-btn":"_catalog-btn_11t6s_24","nav-btn-wrapper":"_nav-btn-wrapper_11t6s_40","nav-btn":"_nav-btn_11t6s_40",icon:"_icon_11t6s_62","nav-btn-text":"_nav-btn-text_11t6s_69","cart-counter":"_cart-counter_11t6s_73",searcher:"_searcher_11t6s_88",logo:"_logo_11t6s_119","navbar-product-page":"_navbar-product-page_11t6s_127","search-opened":"_search-opened_11t6s_149"},B=()=>{const e=o();return r.jsx("h1",{className:F.logo,onClick:()=>e("/"),children:"VAM"})},V=s.createContext(null),H=({children:e})=>{const[t,a]=s.useState(m.language);return r.jsx(V.Provider,{value:{language:t,setLanguage:a},children:e})};class K{}t(K,"SHOP","http://localhost:5000/shop"),t(K,"CLIENT","http://localhost:5000/client"),t(K,"ADMIN","http://localhost:5000/admin"),t(K,"BOT","http://localhost:5000/bot"),t(K,"SPOTIFY","http://localhost:5000/spotify"),t(K,"FRONT","http://localhost:5173"),h.defaults.withCredentials=!0;const U=async(e,t,r)=>{if(t!==r)return{error:"Passwords do not match"};try{const s=await h.post(`${K.CLIENT}/auth/register`,{email:e,password:t,cpassword:r});return 201!==s.status&&200!==s.status?{error:"Error during registration"}:s.data}catch(s){return{error:"Error during registration"}}},J=async(e,t)=>{try{const r=await h.post(`${K.CLIENT}/auth/login`,{email:e,password:t});return 200!==r.status?{error:"Error during sign in"}:(localStorage.setItem("auto-login",JSON.stringify("true")),r.data)}catch(r){return{error:"Error during sign in"}}},W=async(e,t)=>{try{const r=await h.patch(`${K.CLIENT}/account/change-password`,{newPassword:e,cNewPassword:t});return 200!==r.status?{error:"Error during password change"}:r.data}catch(r){return{error:"Error during password change"}}},Z=async(e,t)=>{try{const r=await h.post(`${K.CLIENT}/auth/one-time-login`,{email:e,key:t});return 200!==r.status?{error:"Error during one time login"}:(localStorage.setItem("auto-login",JSON.stringify("true")),r.data)}catch(r){if(h.isAxiosError(r)&&r.response){return{error:r.response.data.error||r.response.data.message||"Error during one time login"}}return{error:"Error during one time login"}}},Q=async e=>{try{const t=await h.post(`${K.CLIENT}/auth/one-time-login-key`,{email:e});return 200!==t.status?{error:"Error during one time login"}:t.data}catch(t){return{error:"Error during one time login"}}},Y=`${K.SHOP}/client/products-page`,G=`${K.SHOP}/client/product/products-full-info`,X=async(e,t,r)=>{try{const s=await h.get(Y+`?page=${t}&limit=${r}`,{params:e});return 200!==s.status?{error:"Error fetching products"}:s.data}catch(s){return{error:"Error fetching products"}}},ee=async e=>{try{const t=await h.get(G,{params:{ids:e}});return 200!==t.status?{error:"Error fetching products Info"}:t.data}catch(t){return{error:"Error fetching products"}}},te=async e=>{try{const t=await h.get(`${K.SHOP}/client/product/cart`,{params:{cartItems:e}});return 200!==t.status?{error:"Error fetching cart items"}:t.data}catch(t){return{error:"Error fetching cart items"}}},re={async addInDatabase(e){try{const t=await(async e=>{try{const t=await h.post(`${K.CLIENT}/account/add-to-cart`,{products:e});return 200!==t.status?{error:"Error adding product to cart"}:t.data}catch(t){return{error:"Error adding product to cart"}}})(e);return t.error?void 0:t}catch(t){}},async updateInDatabase(e){const t=await(async(e,t)=>{try{const r=await h.patch(`${K.CLIENT}/account/update-cart`,{id:e,quantity:t});return 200!==r.status?{error:"Error updating product in cart"}:r.data}catch(r){return{error:"Error updating product in cart"}}})(e.id,e.quantity);return t.error,t},async removeInDatabase(e){const t=await(async e=>{try{const t=await h.delete(`${K.CLIENT}/account/remove-from-cart`,{params:{id:e}});return 200!==t.status?{error:"Error removing product from cart"}:t.data}catch(t){return{error:"Error removing product from cart"}}})(e);return t.error,t},updateLocally(e,t){const r=[...e],s=r.findIndex((e=>e.id===t.id));return-1!==s?(r[s].quantity=t.quantity,r):e},deleteLocally:(e,t)=>e.filter((e=>e.id!==t)),addLocally(e,t){const r=e.findIndex((e=>e.id===t.id));if(-1!==r){const s=[...e];return s[r].quantity+=t.quantity,s}return[...e,t]},async mergeCarts(e,t){if(e&&e.length<1)return t;const r=await re.addInDatabase(e);return localStorage.removeItem("cart"),r},countItems:e=>e.reduce(((e,t)=>e+t.quantity),0),setLocalStorage(e){e&&e.length>0&&localStorage.setItem("cart",JSON.stringify(e))},getLocalStorage:()=>JSON.parse(localStorage.getItem("cart")||"[]")},se=s.createContext(null),ae=({children:e})=>{var t;const[a,n]=s.useState(null),[o,i]=s.useState([]),c=(null==(t=null==a?void 0:a.spotify)?void 0:t.favAlbums.titles)||[];s.useEffect((()=>{JSON.parse(localStorage.getItem("auto-login")||"false")?(async()=>{try{const e=await h.get(`${K.CLIENT}/account`);return 200!==e.status?{error:"Error during auto login"}:e.data}catch(e){return{error:"Error during auto login"}}})().then((e=>{e.error?localStorage.removeItem("auto-login"):(n(e),re.mergeCarts(re.getLocalStorage(),e.cart).then((e=>i(e))))})):i(re.getLocalStorage())}),[]),s.useEffect((()=>{!(null==a?void 0:a._id)&&re.setLocalStorage(o)}),[o]);return r.jsx(se.Provider,{value:{user:a,spotifyFavAlbums:c,setUser:n,cart:o,clearCart:()=>{re.setLocalStorage([]),(async()=>{try{const e=await h.delete(`${K.CLIENT}/account/clear-cart`);return 200!==e.status?{error:"Error clearing cart"}:e.data}catch(e){return{error:"Error clearing cart"}}})().then((()=>i([])))},setCart:i,addAlbumToCart:async e=>{e.id&&e.quantity&&(re.countItems(o)>=20||((null==a?void 0:a._id)?await re.addInDatabase([e]).then((e=>i(e))):await i(re.addLocally(o,e))))},updateQuantityInCart:e=>{if(!e.id||!e.quantity)return;const t=o.find((t=>t.id===e.id));!t&&re.countItems(o)>=20||t&&t.quantity<e.quantity&&re.countItems(o)>=20||((null==a?void 0:a._id)?re.updateInDatabase(e).then((e=>!e.error&&i(e))):i(re.updateLocally(o,e)))},removeAlbumFromCart:e=>{e&&((null==a?void 0:a._id)?re.removeInDatabase(e).then((e=>!e.error&&i(e))):i(re.deleteLocally(o,e)))},removeUserInformation:()=>{n(null),i([])},logOut:()=>{localStorage.removeItem("auto-login"),(async()=>{try{const e=await h.get(`${K.CLIENT}/auth/logout`);return 200!==e.status?{error:"Error during logout"}:e}catch(e){return{error:"Error during logout"}}})()}},children:e})},ne=({icon:e,text:t,clickEvent:a,isSearchOpen:n,children:o})=>{const{language:i}=s.useContext(V),{user:c}=s.useContext(se),l=s.useRef(null);return u((()=>{if(l.current){const e=(e=>{if("on"!==document.documentElement.getAttribute("animations"))return;const t=e.querySelector("span"),r=new g(t),s=p.timeline({paused:!0}).fromTo(r.chars,{opacity:0,display:"none"},{opacity:1,display:"inline-block",duration:.5,stagger:.03}),a=()=>window.innerWidth>=450;return e.addEventListener("mouseover",(()=>{a()&&s.play()})),e.addEventListener("mouseout",(()=>{a()&&s.reverse()})),()=>{e.removeEventListener("mouseover",(()=>s.play())),e.removeEventListener("mouseout",(()=>s.reverse()))}})(l.current);return()=>e&&e()}}),[i,c]),r.jsxs("li",{ref:l,className:`${F["nav-btn"]} ${n?F["search-opened"]:""}`,onClick:a,children:[e,o,t&&r.jsx("span",{className:F["nav-btn-text"],children:t})]})},oe={HomePage:{"template-title":"Strona główna"},Navbar:{btnCart:"Koszyk",btnLogin:"Zaloguj",btnAccount:"Konto",btnSearch:"Szukaj",btnCatalog:"Otwórz katalog"},Catalog:{ProductExplorer:{queryFetching:"Pobieranie produktów...",queryError:"Wystąpił błąd podczas pobierania produktów.",listEmpty:"Nie znaleziono produktów."},Filter:{InputSearch:{searchHeader:"Szukaj",searchPlaceholder:"Szukaj produktów..."},Options:{header:"Opcje",labelAvailable:"Dostępne",labelSale:"Wyprzedaż"}}},ProductCard:{addToCart:"Dodaj do koszyka",soldOut:"Wyprzedane",fav:"Lubisz to!"},Auth:{RegisterForm:{header:"Rejestracja",email:"Email",password:"Hasło",confirmPassword:"Potwierdź hasło",btnSubmit:"Zarejestruj się",emailError:"Wprowadź poprawny adres email.",passwordError:"Hasło musi mieć co najmniej 6 znaków."},SignInForm:{header:"Logowanie",email:"Email",password:"Hasło",btnSubmit:"Zaloguj",emailError:"Wprowadź poprawny adres email.",passwordError:"Hasło musi mieć co najmniej 6 znaków."},ForgotPasswordForm:{header:"Jednorazowe logowanie",email:"Email",getKeyBtn:"Stwórz klucz",loginBtn:"Zaloguj",iHaveKey:"Masz już klucz? Kliknij tutaj.",emailError:"Wprowadź poprawny adres email.",keyError:"Wprowadź poprawny klucz (8 znaków).",key:"Klucz"},signUp:"Zarejestruj się",signIn:"Zaloguj się",forgotPassword:"Zapomniałeś hasła?"},Orders:{returnInfo:"Do każdej paczki z zamówieniem dołączamy kartę zwrotu oraz szczegółową instrukcję zwrotu, które pomogą Ci w szybkim i wygodnym dokonaniu zwrotu. Zachęcamy do zapoznania się z nimi po otrzymaniu przesyłki.",delivery:"Dostawca",payment:"Płatność",total:"Koszt całkowity",id:"Numer zamówienia",title:"Tytuł",createdAt:"Data zamówienia"},ChatBot:{responseReportInfo:"Asystent wirtualny jest wciąż w fazie rozwoju. Prosimy o zgłaszanie wszelkich problemów związanych z asystentem zespołowi wsparcia, klikając poniższy przycisk. Zgłoszenie jest anonimowe!"}},ie={HomePage:{"template-title":"Home Page"},Navbar:{btnCart:"Cart",btnLogin:"Login",btnAccount:"Account",btnSearch:"Search",btnCatalog:"Go to catalog"},Catalog:{ProductExplorer:{queryFetching:"Fetching products...",queryError:"Something went wrong while fetching products.",listEmpty:"No products found."},Filter:{InputSearch:{searchHeader:"Search",searchPlaceholder:"Search products..."},Options:{header:"Options",labelAvailable:"Available",labelSale:"Sale"}}},ProductCard:{addToCart:"Add to cart",soldOut:"Sold out",fav:"You like it!"},Auth:{RegisterForm:{header:"Register",email:"Email",password:"Password",confirmPassword:"Confirm password",btnSubmit:"Register",emailError:"Please enter a valid email address.",passwordError:"Password must be at least 6 characters long.",confirmPasswordError:"Passwords do not match."},SignInForm:{header:"Login",email:"Email",password:"Password",btnSubmit:"Login",emailError:"Please enter a valid email address.",passwordError:"Password must be at least 6 characters long."},ForgotPasswordForm:{header:"One-time login",email:"Email",getKeyBtn:"Create Key",loginBtn:"Login",iHaveKey:"Already have a key? Click here.",emailError:"Please enter a valid email address.",keyError:"Please enter a valid key (8 characters).",key:"Key"},signUp:"Sign up",signIn:"Sign in",forgotPassword:"Forgot password?"},Orders:{returnInfo:"Each order includes a return form and a detailed return instruction sheet to ensure a quick and hassle-free return process. Please review them upon receiving your package.",delivery:"Delivery",payment:"Payment",total:"Total",id:"Order ID",title:"Title",createdAt:"Created at"},ChatBot:{responseReportInfo:"Virtual assistant is still in development. Please report any issues to the support team by clicking the button below. This report is anonymous!"}};m.use(_).init({resources:{en:{translation:ie},pl:{translation:oe}},lng:"pl"===navigator.language.split(/[-_]/)[0]?"pl":"en",interpolation:{escapeValue:!1}});const ce=e=>()=>{const{t:t}=y();return r=>t(`${e}.${r}`)},le=()=>{const{cart:e}=s.useContext(se);return r.jsx("div",{className:F["cart-counter"],children:e&&0!==e.length?e.reduce(((e,t)=>e+t.quantity),0):0})},de=({toggleSearch:e})=>{const[t,a]=s.useState(""),n=s.useRef(null),i=o(),c=()=>{t.trim()&&(e(),i(`/catalog?inputQuery=${encodeURIComponent(t)}`))};return s.useEffect((()=>{var e;return null==(e=n.current)||e.addEventListener("keydown",(e=>{"Enter"===e.key&&(c(),a(""))})),()=>{var e;null==(e=n.current)||e.removeEventListener("keydown",(e=>{"Enter"===e.key&&(c(),a(""))}))}}),[]),r.jsxs("div",{className:F.searcher,children:[r.jsx("input",{type:"text",placeholder:"Search...",onChange:e=>a(e.target.value),onKeyUp:e=>"Enter"===e.key&&c(),value:t}),r.jsx("button",{className:F.searchBtn,onClick:e,children:r.jsx(f,{className:F.icon})})]})},ue=()=>{const{user:e}=s.useContext(se),[t,a]=s.useState(!1),n=o(),{pathname:c}=i(),l=ce("Navbar")();s.useEffect((()=>{window.scrollTo({top:0,behavior:"smooth"})}),[c]);const d=()=>a(!t);return r.jsxs("div",{className:`${F.navbar} ${c.includes("product")&&F["navbar-product-page"]}`,children:[r.jsx(B,{}),r.jsxs("ul",{className:F["nav-btn-wrapper"],children:[c.includes("catalog")?null:t?r.jsx(de,{toggleSearch:d}):r.jsx(ne,{icon:r.jsx(w,{className:F.icon}),text:l("btnSearch"),clickEvent:d}),r.jsx(ne,{icon:r.jsx(j,{className:F.icon}),text:l("btnCart"),isSearchOpen:t,children:r.jsx(le,{}),clickEvent:()=>n("/cart")}),e?r.jsx(ne,{icon:r.jsx(x,{className:F.icon}),isSearchOpen:t,clickEvent:()=>n("/settings")}):!e&&r.jsx(ne,{icon:r.jsx(v,{className:F.icon}),text:l("btnLogin"),isSearchOpen:t,clickEvent:()=>n("/auth")})]}),!window.location.href.includes("catalog")&&r.jsxs("button",{className:F["catalog-btn"],onClick:()=>n("/catalog"),children:[l("btnCatalog")," ",">"]})]})},me={page:"_page_qhtne_1","loading-page":"_loading-page_qhtne_8","loading-icon":"_loading-icon_qhtne_16",rotation:"_rotation_qhtne_1"},pe=()=>r.jsx("div",{className:me["loading-page"],children:r.jsx(b,{className:me["loading-icon"]})}),ge="_placeholder_122k4_1",he={"product-card":"_product-card_p5dv9_6","cover-wrapper":"_cover-wrapper_p5dv9_14",cover:"_cover_p5dv9_14","old-album":"_old-album_p5dv9_24",fav:"_fav_p5dv9_43",icon:"_icon_p5dv9_60",info:"_info_p5dv9_64",title:"_title_p5dv9_68",price:"_price_p5dv9_74",discount:"_discount_p5dv9_77","btn-add-to-cart":"_btn-add-to-cart_p5dv9_94","sold-out-badge":"_sold-out-badge_p5dv9_114","discount-badge":"_discount-badge_p5dv9_114","similar-product-style":"_similar-product-style_p5dv9_135","products-list-style":"_products-list-style_p5dv9_147",fetching:"_fetching_p5dv9_151"},_e=({card:e,src:t,fav:a,releaseDate:n})=>{const o=new Date(n)<new Date("2000-01-01"),i=(({src:e,className:t,alt:a="Product"})=>{const[n,o]=s.useState(!0),i=s.useRef(null);return s.useEffect((()=>{const t=new Image;return t.src=e,t.onload=()=>o(!1),t.onerror=()=>o(!1),()=>{t.onload=null,t.onerror=null}}),[e]),u((()=>{if(n&&i.current){const e=p.timeline({repeat:-1,yoyo:!0});return e.fromTo(i.current,{opacity:.5},{opacity:1,duration:.5}),()=>e.kill()}}),[n]),n?r.jsx("div",{ref:i,className:ge,children:r.jsx("span",{style:{color:"var(--text-color)"},children:"Loading..."})}):r.jsx("img",{src:e,className:`${t}`,alt:a,loading:"lazy"})})({src:t,className:`${he.cover} ${o?he["old-album"]:""}`}),c=s.useRef(null),l=ce("ProductCard")();return u((()=>{if(e.current&&c.current&&c.current.querySelector("img")){c.current.style.setProperty("--background-image",`url(${t})`);const r=((e,t)=>{if("on"!==document.documentElement.getAttribute("animations"))return;const r="light"===(document.documentElement.getAttribute("data-theme")||"light")?"rgba(0, 0, 0, 0.8)":"rgba(255, 255, 255, 0.8",s=e.querySelector("img"),a=t.querySelectorAll(".shadow-anim"),n=t.querySelectorAll(".badges_anim"),o=t.querySelectorAll(".badges_anim_bottom"),i=p.timeline({paused:!0,duration:1,ease:"power2.out"});return i.fromTo(s,{scale:1},{scale:.95},0).fromTo(a,{filter:`drop-shadow(0px 0px 0px ${r})`},{filter:`drop-shadow(5px 5px 4px ${r})`},0).fromTo(e,{"--before-cover-opacity":"0"},{"--before-cover-opacity":"1"},0),n.length>0&&i.fromTo(n,{opacity:1,y:0},{opacity:0,y:-10,duration:.2},0),o.length>0&&i.fromTo(o,{opacity:1,y:0},{opacity:0,y:10,duration:.2},0),t.addEventListener("mouseover",(()=>{i.play()})),t.addEventListener("mouseout",(()=>{i.reverse()})),()=>{t.removeEventListener("mouseover",(()=>i.play())),t.removeEventListener("mouseout",(()=>i.reverse())),i.kill()}})(c.current,e.current);return()=>r&&r()}}),[i]),r.jsxs("div",{ref:c,className:he["cover-wrapper"],children:[i,a&&r.jsxs("div",{className:`${he.fav} badges_anim_bottom`,children:[r.jsx(N,{className:he.icon}),l("fav")]})]})},ye=({t:e,quantity:t})=>t?null:r.jsx("div",{className:`${he["sold-out-badge"]} badges_anim`,children:r.jsx("span",{children:e("soldOut")})}),fe=/https?:\/\/[^\s.]+/g,je=/<br\s*\/?>/g,xe=(e,t)=>{const r=e?t*((100-e)/100):null;return(null==r?void 0:r.toFixed(2))||null},ve=({discount:e})=>0===e?null:r.jsx("div",{className:`${he["discount-badge"]} badges_anim`,children:r.jsx("span",{children:`-${e}%`})}),we=({product:e,customClass:t})=>{var a,n;const{addAlbumToCart:i,user:c}=s.useContext(se),[l,d]=s.useState(!1),[u,m]=s.useState(!1),p=o(),g=s.useRef(null),h=ce("ProductCard")(),_=xe(e.discount,e.price),y=null==(n=null==(a=null==c?void 0:c.spotify)?void 0:a.favAlbums)?void 0:n.titles;c&&y&&(e.fav=y.includes(e.title));return r.jsxs("div",{className:`${he["product-card"]} ${l&&he.fetching} ${he[t||""]}`,id:e._id,ref:g,onClick:()=>{d(!0);if(sessionStorage.getItem(`product_${e._id}`))return d(!1),void p(`/product/${e._id}`);ee([e._id]).then((t=>{if(t.error);else{const r=new Image;r.src=t[0].images.large.url,r.onload=()=>{d(!1),sessionStorage.setItem(`product_${e._id}`,JSON.stringify(t[0])),p(`/product/${e._id}`)},r.onerror=()=>{d(!1)}}}))},children:[r.jsx(_e,{card:g,src:e.images.medium.url,fav:e.fav,releaseDate:e.releaseDate}),r.jsxs("div",{className:he.info,children:[r.jsx("h1",{className:`${he.title} shadow-anim`,title:e.title,children:e.title}),r.jsxs("h2",{className:`${he.price} shadow-anim`,children:[_||e.price,_&&r.jsxs("span",{className:he.discount,children:["/",e.price]})," PLN"]})]}),r.jsx("button",{className:`${he["btn-add-to-cart"]} shadow-anim`,disabled:0===e.quantity||u,onClick:async t=>{t.stopPropagation(),m(!0),await i({id:e._id,quantity:1}),m(!1)},children:e.quantity?h("addToCart"):h("soldOut")}),r.jsx(ye,{t:h,quantity:e.quantity}),r.jsx(ve,{discount:e.discount})]},e._id)},be="_products-wrapper_1uhfl_1",Ne="_upper-section_1uhfl_8",Se="_header_1uhfl_13",Ee="_show-more-btn_1uhfl_16",ke="_mySwiper_1uhfl_29",Ce=({genre:e})=>{const t=o();return r.jsxs("button",{className:Ee,onClick:()=>t(`/catalog?1&genres%5B%5D=${e}`),children:["Show more ",">"]})},Pe=({genre:e,title:t})=>{const[a,n]=s.useState([]);s.useEffect((()=>{const t=sessionStorage.getItem(`albums_homePage_${e}`);t&&JSON.parse(t).length>0?n(JSON.parse(t)):o().then((t=>{t&&(sessionStorage.setItem(`albums_homePage_${e}`,JSON.stringify(t)),n(t))}))}),[]);const o=async()=>{try{const t=await X({genres:[e]},1,5);if(t.error)return[];const r=window.location.pathname.split("/").pop();return t.products.filter((e=>e._id!==r))}catch(t){return[]}};return a.length?r.jsxs("div",{className:be,children:[r.jsxs("div",{className:Ne,children:[r.jsxs("h1",{className:Se,children:[t,":"]}),r.jsx(Ce,{genre:e})]}),r.jsx(O,{spaceBetween:0,modules:[T],className:ke,pagination:!0,initialSlide:0,breakpoints:{300:{slidesPerView:2},480:{slidesPerView:3},660:{slidesPerView:4},768:{slidesPerView:3},1140:{slidesPerView:4},1512:{slidesPerView:5}},children:a&&a.map((e=>r.jsx(A,{children:r.jsx(we,{product:e,customClass:"products-list-style"},e._id)},e._id)))})]}):null},Ie=({children:e})=>{const t=s.useRef(null),a=s.useRef(null),n=()=>{o(),t.current=setInterval((()=>{a.current.swiper.isEnd?a.current.swiper.slideTo(0):a.current.swiper.slideNext()}),4500)},o=()=>{t.current&&(clearInterval(t.current),t.current=null)};s.useEffect((()=>{if(a.current)return a.current.addEventListener("mouseenter",o),a.current.addEventListener("mouseleave",n),n(),()=>{o(),a.current.removeEventListener("mouseenter",o),a.current.removeEventListener("mouseleave",n)}}),[]);return r.jsx(O,{ref:a,centeredSlides:!0,pagination:{clickable:!0,renderBullet:(e,t)=>`<span class="${t}">${e+1}</span>`},navigation:!0,modules:[T],grabCursor:!0,className:"bannerSwiper",children:e})},$e="_banner_1hgi7_1",Le="_header_1hgi7_7",ze="_icon_1hgi7_21",Oe="_banner-element_1hgi7_26",Te="_cover-wrapper_1hgi7_39",Ae="_go-to__btn_1hgi7_39",qe="_price_1hgi7_53",Re="_cover_1hgi7_39",De="_released_1hgi7_71",Me="_title_1hgi7_81",Fe=({product:e})=>{const t=o();return r.jsxs("div",{className:Oe,style:{backgroundImage:`url(${e.images.medium.url})`},children:[r.jsxs("div",{className:Te,children:[r.jsxs("button",{className:Ae,onClick:()=>t(`/product/${e._id}`),children:["Go to product ",">",r.jsx("span",{className:qe,children:"9.99 PLN"})]}),r.jsx("img",{src:e.images.medium.url,alt:"album cover",className:Re}),r.jsxs("span",{className:De,children:["// Released: ",e.releaseDate.split("T")[0]]})]}),r.jsx("h1",{className:Me,children:e.title})]})},Be="_logo-banner_vthce_1",Ve="_logo-banner__text_vthce_10",He=()=>r.jsxs("div",{className:Be,children:[r.jsx("span",{className:Ve,children:"Vibe Alley Music, the best music in town!"}),r.jsx("span",{className:Ve,children:"Vibe Alley Music, the best music in town!"}),r.jsx("span",{className:Ve,children:"Vibe Alley Music, the best music in town!"}),r.jsx("span",{className:Ve,children:"Vibe Alley Music, the best music in town!"})]}),Ke=({filters:e,elements:t,header:a,sessionPrefix:n,specialType:o})=>{const[i,c]=s.useState([]);return s.useEffect((()=>{const r=sessionStorage.getItem(`${n}_banner_products`);r&&JSON.parse(r).length>0?c(JSON.parse(r)):X(e,1,t).then((e=>{sessionStorage.setItem(`${n}banner_products`,JSON.stringify(e.products||[])),c(e.products)})).catch((e=>{}))}),[]),i&&0!==i.length?r.jsxs("section",{className:$e,children:[r.jsxs("h1",{className:Le,children:["spotify"===o&&r.jsx(N,{className:ze}),a]}),r.jsx(Ie,{children:i&&i.map((e=>r.jsx(A,{children:r.jsx(Fe,{product:e})},e._id)))}),r.jsx(He,{})]}):null},Ue="_home_av0gy_1",Je=()=>{const{spotifyFavAlbums:e}=s.useContext(se);return r.jsxs("div",{className:Ue,children:[r.jsx(Pe,{genre:"rap",title:"Rap"}),r.jsx(Pe,{genre:"pop",title:"Pop"}),r.jsx(Ke,{filters:{sort:{type:"release",order:"desc"}},elements:6,header:"Newest Albums",sessionPrefix:"genre"}),r.jsx(Pe,{genre:"rock",title:"Rock"}),r.jsx(Pe,{genre:"soul",title:"Soul"}),e.length>0&&r.jsx(Ke,{filters:{favAlbumsArr:e},elements:7,header:"You like it!",sessionPrefix:"spotify_fav",specialType:"spotify"}),r.jsx(Pe,{genre:"dance",title:"Dance"})]})},We=()=>r.jsx("div",{className:`${me.page} ${me.home}`,children:r.jsx(Je,{})}),Ze="_footer-container_13nbe_143",Qe="_hr_13nbe_146",Ye="_footer_13nbe_143",Ge="_switcher-wrapper_13nbe_164",Xe="_switcher_13nbe_164",et="_icon_13nbe_183",tt="_icon-off_13nbe_191",rt="_language_13nbe_194",st="_product-card-footer_13nbe_201",at=()=>{const[e,t]=s.useState(""),[a,n]=s.useState(m.language),{setLanguage:o}=s.useContext(V);s.useEffect((()=>{t(localStorage.getItem("animations")||"on")}),[]);return r.jsxs("div",{className:Ge,children:[r.jsx("button",{className:`${Xe}`,onClick:()=>{"off"===e?(document.documentElement.setAttribute("animations","on"),localStorage.setItem("animations","on"),t("on")):(document.documentElement.setAttribute("animations","off"),localStorage.setItem("animations","off"),t("off")),window.location.reload()},title:"On/off animations",children:r.jsx(S,{className:`${et} ${"off"===e?tt:""}`})}),r.jsx("button",{className:`${Xe} ${rt}`,onClick:()=>{const e="en"===a?"pl":"en";m.changeLanguage(e),n(e),o(e)},children:a.toUpperCase()})]})},nt={"footer-menu":"_footer-menu_17xyh_1","footer-menu__list":"_footer-menu__list_17xyh_6","footer-menu__item":"_footer-menu__item_17xyh_15"},ot=({location:e})=>{const t=o(),s=e=>{t(e)};return r.jsx("div",{className:`${nt["footer-menu"]} ${e.includes("/product")&&nt["product-card-footer"]}`,children:r.jsxs("ul",{className:nt["footer-menu__list"],children:[r.jsx("li",{className:nt["footer-menu__item"],children:r.jsx("a",{href:"#",onClick:()=>s("/"),children:"Home Page"})}),r.jsx("li",{className:nt["footer-menu__item"],children:r.jsx("a",{href:"#",onClick:()=>s("/catalog"),children:"Products"})}),r.jsx("li",{className:nt["footer-menu__item"],children:r.jsx("a",{href:"#",onClick:()=>s("/contact"),children:"Contact"})}),r.jsx("li",{className:nt["footer-menu__item"],children:r.jsx("a",{href:"#",onClick:()=>s("/policy"),children:"Policy"})})]})})},it=()=>{const e=i();return r.jsxs("div",{className:`${Ze} ${e.pathname.includes("/product")&&st}`,children:[r.jsx("hr",{className:Qe}),r.jsx(ot,{location:e.pathname}),r.jsxs("footer",{className:`${Ye} `,children:[r.jsxs("p",{children:["© ",`${(new Date).getFullYear()} Vibe Alley Music`]}),r.jsx(at,{})]})]})},ct=()=>{const{removeUserInformation:e}=s.useContext(se);s.useEffect((()=>{const s=h.interceptors.response.use((t=>{var r;return"true"===t.headers["music-store-cookie_deleted"]&&(e(),q.info("Your session has expired, you have been logged out.")),"true"!=t.data.showSuccess&&1!=t.data.showSuccess||((null==(r=t.data)?void 0:r.message)?q.success(t.data.message):q.success("Operation completed successfully.")),t}),(s=>{var a,n,o;if("ERR_NETWORK"===s.code)q.error(r.jsxs("div",{children:[r.jsx("span",{children:`Server ${t(s.config.url)} error`}),r.jsx("br",{}),r.jsx("hr",{style:{width:"100%",color:"#e74c3c",border:".5px solid",margin:".3rem 0"}}),r.jsx("span",{children:"Server is not responding"})]},Math.random()));else{const e=(null==(n=null==(a=s.response)?void 0:a.data)?void 0:n.error)||s.message||"Unknown error occurred";q.error(r.jsxs("div",{children:[r.jsx("span",{children:`Server ${t(s.config.url)} error`}),r.jsx("br",{}),r.jsx("hr",{style:{width:"100%",color:"#e74c3c",border:".5px solid",margin:".3rem 0"}}),r.jsx("span",{children:e})]},Math.random()))}return"true"===(null==(o=s.response)?void 0:o.headers["music-store-cookie_deleted"])&&(e(),q.info("Your session has expired, you have been logged out.")),Promise.reject(s)}));return()=>h.interceptors.response.eject(s)}),[e]);const t=e=>{switch(e.split(":")[2].split("/")[0]){case"5010":return"Bot";case"5000":return"Spotify";case"8080":return"Client";case"8050":return"Shop";default:return e}};return r.jsx(r.Fragment,{children:r.jsx(R,{position:"top-right",theme:"dark",newestOnTop:!0,autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,className:"toast-container",draggable:!0})})},lt="_chat_open_btn_1ymny_1",dt="_icon_1ymny_18",ut="_chat_1ymny_1",mt="_chat-header_1ymny_45",pt="_chat-header_icon_1ymny_56",gt="_messages_1ymny_65",ht="_no-messages_1ymny_80",_t="_message-wrapper_1ymny_88",yt="_message_1ymny_65",ft="_link_1ymny_103",jt="_hovered_1ymny_112",xt="_hidden_1ymny_118",vt="_controls_1ymny_121",wt="_message_writing_1ymny_136",bt="_message_user_1ymny_139",Nt="_message_bot_1ymny_144",St="_avatar_1ymny_148",Et="_writing_1ymny_156",kt="_dot_1ymny_163",Ct="_report-info_1ymny_169",Pt="_bot_1ymny_177",It="_input-wrapper_1ymny_180",$t=({addMessage:e,setShowed:t,model_name:s})=>r.jsxs("div",{className:mt,children:[r.jsxs("h1",{children:["Connected to ",s]}),r.jsx(E,{className:pt,onClick:()=>{e({id:(Math.random()+1).toString(36).substring(7),from:"none",content:`\n                You can ask me a question, and I will do my best\n                to answer it by analyzing its content.\n                If I'm unable to provide an answer, I will apologize\n                and try to learn the answer in the future.\n                Here's an example of a conversation:<br>\n                User: Can you recommend a rap album?<br>\n                Bot: Of course! I recommend the album 'UTOPIA,' which you can check out\n                by clicking here -> ${K.FRONT}/product/66e5a5eb48c04617c5e86a31. Ask another question, and I will do my best to answer it.\n            `},!0);document.querySelector(`.${pt}`).style.display="none"}}),r.jsx(f,{className:pt,onClick:()=>t(!1)})]}),Lt=({setMessage:e})=>{if(!("webkitSpeechRecognition"in window))return;const t=new webkitSpeechRecognition;t.continuous=!1,t.interimResults=!1,t.lang="pl-PL";return t.onresult=t=>{const r=t.results.length-1,s=t.results[r][0].transcript;e(s)},t.onerror=function(e){},t.onend=function(){},r.jsx("button",{children:r.jsx(k,{className:dt,onClick:()=>t.start()})})},zt=({addMessage:e})=>{const[t,a]=s.useState(""),n=()=>{t&&(e({id:(Math.random()+1).toString(36).substring(7),from:"user",content:t}),a(""))};return r.jsxs("div",{className:It,children:[r.jsx("input",{type:"text",placeholder:"Type a message",value:t,onChange:e=>a(e.target.value),onKeyDown:e=>{"Enter"===e.key&&n()}}),r.jsxs("div",{className:vt,children:[r.jsx(Lt,{setMessage:a}),r.jsx("button",{onClick:n,children:r.jsx(C,{className:dt})})]})]})},Ot=({message:e,lang:t})=>{const[a,n]=s.useState(!1),[o,i]=s.useState(!1);s.useEffect((()=>{"on"!==document.documentElement.getAttribute("auto-read")||o||c()}),[]);const c=()=>{const r=e.replace(fe,"Hidden Link"),s=new SpeechSynthesisUtterance(r);s.lang="pl"===t?"pl-PL":"en-US",s.onend=()=>{n(!1)},window.speechSynthesis.speak(s),n(!0),i(!0)};return r.jsx(r.Fragment,{children:a?r.jsx(P,{className:dt,onClick:()=>{window.speechSynthesis.cancel(),n(!1)}}):r.jsx(I,{className:dt,onClick:c})})},Tt=({message:e})=>{const t=o(),s=e=>r.jsxs("a",{className:ft,onClick:()=>(e=>{const r=window.location.host;e&&(e.includes(r)?t(e.split(r)[1],{replace:!0}):window.open(e,"_blank"))})(e),children:[r.jsx("span",{className:xt,children:"Link"}),r.jsx("span",{className:jt,children:e})]},(Math.random()+1).toString(36).substring(7));return e.split(new RegExp(`(${fe.source}|${je.source})`)).map(((e,t)=>e.match(fe)?s(e):e.match(je)?r.jsx("br",{},t):e))};h.defaults.withCredentials=!0;const At=({userQuestion:e,message:t,lang:a})=>{const n=s.useRef(null);return r.jsx("div",{className:vt,ref:n,children:r.jsx($,{className:dt,onClick:()=>{const r={userMess:e,botMess:t,lang:a,date:(new Date).toLocaleDateString()};n.current&&(n.current.style.display="none"),(async e=>{await h.post(`${K.BOT}/report`,e)})(r)},title:"Report a response anonymously"})})},qt="_link_54fx5_1",Rt="_hovered_54fx5_10",Dt="_hidden_54fx5_16",Mt=({link:e})=>{const t=o();return r.jsxs("a",{className:qt,onClick:()=>{const r=window.location.host;e&&(e.includes(r)?t(e.split(r)[1],{replace:!0}):window.open(e,"_blank"))},children:[r.jsx("span",{className:Dt,children:"Link"}),r.jsx("span",{className:Rt,children:e})]})},Ft={"custom-list":"_custom-list_12q2e_1",title:"_title_12q2e_8","redirect-btn":"_redirect-btn_12q2e_12"},Bt=({tag:e})=>{const t=o(),r=Object.keys(e)[0]||"none",s=e[r]||[];switch(r){case"list":return Vt(s);case"redirect":return Ht((()=>t(String(s),{replace:!0})))}return null},Vt=e=>r.jsx("ul",{className:Ft["custom-list"],children:e.map(((e,t)=>{const s=e.split("-"),a=s[0];return r.jsxs("li",{children:[r.jsx("span",{className:Ft.title,children:a})," - ",(n=s[1],/https?:\/\/[^\s]+/.test(n)?r.jsx(Mt,{link:s[1]}):r.jsx("span",{className:Ft.description,children:s[1]}))]},t);var n}))}),Ht=e=>r.jsx("button",{className:Ft["redirect-btn"],onClick:()=>e(),children:r.jsxs("span",{children:["Redirect ",">"]})}),Kt=({message:e,customTag:t,from:a,isLast:n,lang:o,userQuestion:i})=>{const c=ce("ChatBot")(),l=s.useRef(null);return s.useEffect((()=>{n&&l.current&&l.current.scrollIntoView({behavior:"smooth"})}),[]),r.jsxs("div",{className:`${_t} ${("bot"===a||"none"===a)&&Pt}`,ref:l,children:["user"===a?r.jsx(v,{className:St}):r.jsx(L,{className:St}),r.jsxs("div",{className:`${yt} ${"user"===a?bt:Nt}`,children:[r.jsx("p",{children:Tt({message:e})}),t&&r.jsx(Bt,{tag:t}),"bot"===a&&r.jsxs("div",{className:Ct,children:[r.jsx("hr",{}),r.jsx("p",{children:c("responseReportInfo")})]}),r.jsxs("div",{className:vt,children:["bot"===a&&r.jsx(At,{message:e,userQuestion:i,lang:o||"en"}),"user"!==a&&r.jsx(Ot,{message:e,lang:o||"en"})]})]})]})},Ut=()=>{const e=s.useRef(null);return u((()=>{var t;const r=null==(t=e.current)?void 0:t.querySelectorAll(`.${kt}`);if(r){p.timeline({repeat:-1}).to(r,{marginBottom:"8px",duration:.4,stagger:.2}).to(r,{marginBottom:"0px",duration:.5,stagger:.2},.4)}})),r.jsxs("div",{className:`${_t} ${Pt}`,children:[r.jsx(L,{className:St}),r.jsx("div",{className:`${yt} ${Nt} ${wt}`,children:r.jsxs("div",{className:Et,ref:e,children:[r.jsx("span",{className:kt}),r.jsx("span",{className:kt}),r.jsx("span",{className:kt})]})})]})},Jt=({messages:e,isResponding:t})=>r.jsxs("div",{className:gt,children:[e.length>0?e.map(((t,s)=>{const a=s===e.length-1;return r.jsx(Kt,{isLast:a,lang:t.lang,message:t.content,userQuestion:t.userQuestion||"",from:t.from,status:t.status,customTag:t.customTag},t.id)})):r.jsx("p",{className:ht,children:"No messages yet"}),t&&r.jsx(Ut,{})]}),Wt=()=>{const[e,t]=s.useState([]),[a,n]=s.useState(!1),[o,i]=s.useState({chatStatus:!1,model_name:""}),[c,l]=s.useState(!1);s.useEffect((()=>{(async()=>{try{const e=await h.get(`${K.BOT}/is-online`,{withCredentials:!0});return{chatStatus:200===e.status,model_name:e.data.name}}catch(e){return{chatStatus:!1,model_name:""}}})().then((e=>{i(e)}))}),[]);const d=(e,r)=>{const s=e;if(e.id||(e.id=(Math.random()+1).toString(36).substring(7)),t((t=>[...t,e])),r)return;l(!0);const a=setTimeout((()=>{t((e=>[...e,Zt.wait]))}),3e3);(async e=>{try{return(await h.post(`${K.BOT}/chat`,{message:e,withCredentials:!0})).data}catch(t){return!1}})(e.content).then((e=>{if(clearTimeout(a),!e)return l(!1),void t((e=>[...e,Zt.error]));const r=e.response.message?e.response.message:"There was an error processing your request. Please try again later. 🙁";t((t=>[...t,{id:(Math.random()+1).toString(36).substring(7),from:"bot",content:r,status:e.status,customTag:e.response.customTag||null,lang:e.response.lang||"en",userQuestion:s.content}])),l(!1)})).catch((()=>{l(!1)}))};return o.chatStatus?a?r.jsxs("div",{className:ut,children:[r.jsx($t,{addMessage:d,setShowed:n,model_name:o.model_name}),r.jsx(Jt,{messages:e,isResponding:c}),!c&&r.jsx(zt,{addMessage:d})]}):r.jsx("div",{className:lt,onClick:()=>n(!0),children:r.jsx(z,{className:dt})}):null},Zt={wait:{id:(Math.random()+1).toString(36).substring(7),from:"none",content:"Model is currently loading to memory. Please wait a moment. ⏳",status:"error"},error:{id:(Math.random()+1).toString(36).substring(7),from:"bot",content:"There was an error processing your request. Please try again later. 🙁",status:"error"}},Qt=a.lazy((()=>M((()=>import("./CartPage-DhPlbX8s.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])))),Yt=a.lazy((()=>M((()=>import("./ExplorerPage-B0v0pFbP.js")),__vite__mapDeps([22,1,14,6,3,4,2,5,10,11,12,13,7,15,16,17,18,19,23])))),Gt=a.lazy((()=>M((()=>import("./ProductPage-CKcn7wMR.js")),__vite__mapDeps([24,1,2,3,4,5,15,16,6,10,11,12,13,7,14,17,18,19,25,21])))),Xt=a.lazy((()=>M((()=>import("./AuthPage-Dz2VxJmq.js")),__vite__mapDeps([26,1,9,2,3,4,5,10,11,12,13,7,14,6,15,16,17,18,19,27])))),er=a.lazy((()=>M((()=>import("./SettingsPage-RUyJjSbP.js")),__vite__mapDeps([28,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,29])))),tr=a.lazy((()=>M((()=>import("./PolicyPage-Dtb3-89h.js")),__vite__mapDeps([30,1,3,4,2,5,10,11,12,13,7,14,6,15,16,17,18,19,31])))),rr=a.lazy((()=>M((()=>import("./ContactPage-CZUR27VD.js")),__vite__mapDeps([32,1,9,7,3,4,2,5,10,11,12,13,14,6,15,16,17,18,19,33])))),sr=a.lazy((()=>M((()=>import("./OrdersPage-BMSNSvxj.js")),__vite__mapDeps([34,1,7,2,3,4,5,10,11,12,13,14,6,15,16,17,18,19,35])))),ar=()=>(document.documentElement.setAttribute("data-theme",localStorage.getItem("theme")||"dark"),document.documentElement.setAttribute("animations",localStorage.getItem("animations")||"on"),document.documentElement.setAttribute("auto-read",localStorage.getItem("auto-read")||"off"),r.jsx(H,{children:r.jsx(ae,{children:r.jsxs(c,{children:[r.jsxs("div",{className:"app",children:[r.jsx(ct,{}),r.jsx(ue,{}),r.jsx("div",{className:"app_content",children:r.jsx(s.Suspense,{fallback:r.jsx(pe,{}),children:r.jsxs(l,{children:[r.jsx(d,{path:"/",element:r.jsx(We,{})}),r.jsx(d,{path:"/auth",element:r.jsx(Xt,{})}),r.jsx(d,{path:"/cart",element:r.jsx(Qt,{})}),r.jsx(d,{path:"/catalog",element:r.jsx(Yt,{})}),r.jsx(d,{path:"/product/:id",element:r.jsx(Gt,{})}),r.jsx(d,{path:"/settings",element:r.jsx(er,{})}),r.jsx(d,{path:"/policy",element:r.jsx(tr,{})}),r.jsx(d,{path:"/contact",element:r.jsx(rr,{})}),r.jsx(d,{path:"/orders",element:r.jsx(sr,{})}),r.jsx(d,{path:"*",element:r.jsx(We,{})})]})})})]}),r.jsx(Wt,{}),r.jsx(it,{})]})})}));n.createRoot(document.getElementById("root")).render(r.jsx(a.StrictMode,{children:r.jsx(ar,{})}));export{re as C,K as H,pe as L,we as P,se as U,ee as a,J as b,Q as c,xe as d,W as e,X as f,te as g,ce as l,Z as o,U as r,me as s};
