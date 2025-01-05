import{r as e,a as t}from"./react-BZuymhSV.js";import"./react-dom-BYiVop1z.js";import{i as r,g as n,r as a,j as o,p as l,m as i,A as u,s,a as c,c as d}from"./@remix-run-CmyMgbGZ.js";
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}const h=e.createContext(null),m=e.createContext(null),v=e.createContext(null),f=e.createContext(null),g=e.createContext({outlet:null,matches:[],isDataRoute:!1}),E=e.createContext(null);function y(){return null!=e.useContext(f)}function C(){return y()||r(!1),e.useContext(f).location}function x(t){e.useContext(v).static||e.useLayoutEffect(t)}function b(){let{isDataRoute:t}=e.useContext(g);return t?function(){let{router:t}=function(){let t=e.useContext(h);return t||r(!1),t}(F.UseNavigateStable),n=P(D.UseNavigateStable),a=e.useRef(!1);return x((()=>{a.current=!0})),e.useCallback((function(e,r){void 0===r&&(r={}),a.current&&("number"==typeof e?t.navigate(e):t.navigate(e,p({fromRouteId:n},r)))}),[t,n])}():function(){y()||r(!1);let t=e.useContext(h),{basename:l,future:i,navigator:u}=e.useContext(v),{matches:s}=e.useContext(g),{pathname:c}=C(),d=JSON.stringify(n(s,i.v7_relativeSplatPath)),p=e.useRef(!1);return x((()=>{p.current=!0})),e.useCallback((function(e,r){if(void 0===r&&(r={}),!p.current)return;if("number"==typeof e)return void u.go(e);let n=a(e,JSON.parse(d),c,"path"===r.relative);null==t&&"/"!==l&&(n.pathname="/"===n.pathname?l:o([l,n.pathname])),(r.replace?u.replace:u.push)(n,r.state,r)}),[l,u,d,c,t])}()}function R(t,n){return function(t,n,a,s){y()||r(!1);let{navigator:c}=e.useContext(v),{matches:d}=e.useContext(g),h=d[d.length-1],m=h?h.params:{};!h||h.pathname;let E=h?h.pathnameBase:"/";h&&h.route;let x,b=C();if(n){var R;let e="string"==typeof n?l(n):n;"/"===E||(null==(R=e.pathname)?void 0:R.startsWith(E))||r(!1),x=e}else x=b;let S=x.pathname||"/",F=S;if("/"!==E){let e=E.replace(/^\//,"").split("/");F="/"+S.replace(/^\//,"").split("/").slice(e.length).join("/")}let D=i(t,{pathname:F}),P=function(t,n,a,o){var l;void 0===n&&(n=[]);void 0===a&&(a=null);void 0===o&&(o=null);if(null==t){var i;if(!a)return null;if(a.errors)t=a.matches;else{if(!(null!=(i=o)&&i.v7_partialHydration&&0===n.length&&!a.initialized&&a.matches.length>0))return null;t=a.matches}}let u=t,s=null==(l=a)?void 0:l.errors;if(null!=s){let e=u.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||r(!1),u=u.slice(0,Math.min(u.length,e+1))}let c=!1,d=-1;if(a&&o&&o.v7_partialHydration)for(let e=0;e<u.length;e++){let t=u[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(d=e),t.route.id){let{loaderData:e,errors:r}=a,n=t.route.loader&&void 0===e[t.route.id]&&(!r||void 0===r[t.route.id]);if(t.route.lazy||n){c=!0,u=d>=0?u.slice(0,d+1):[u[0]];break}}}return u.reduceRight(((t,r,o)=>{let l,i=!1,p=null,h=null;a&&(l=s&&r.route.id?s[r.route.id]:void 0,p=r.route.errorElement||U,c&&(d<0&&0===o?(i=!0,h=null):d===o&&(i=!0,h=r.route.hydrateFallbackElement||null)));let m=n.concat(u.slice(0,o+1)),v=()=>{let n;return n=l?p:i?h:r.route.Component?e.createElement(r.route.Component,null):r.route.element?r.route.element:t,e.createElement(k,{match:r,routeContext:{outlet:t,matches:m,isDataRoute:null!=a},children:n})};return a&&(r.route.ErrorBoundary||r.route.errorElement||0===o)?e.createElement(B,{location:a.location,revalidation:a.revalidation,component:p,error:l,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()}),null)}(D&&D.map((e=>Object.assign({},e,{params:Object.assign({},m,e.params),pathname:o([E,c.encodeLocation?c.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?E:o([E,c.encodeLocation?c.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),d,a,s);if(n&&P)return e.createElement(f.Provider,{value:{location:p({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:u.Pop}},P);return P}(t,n)}function S(){let t=function(){var t;let n=e.useContext(E),a=function(){let t=e.useContext(m);return t||r(!1),t}(D.UseRouteError),o=P(D.UseRouteError);if(void 0!==n)return n;return null==(t=a.errors)?void 0:t[o]}(),n=c(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),a?e.createElement("pre",{style:o},a):null,null)}const U=e.createElement(S,null);class B extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?e.createElement(g.Provider,{value:this.props.routeContext},e.createElement(E.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function k(t){let{routeContext:r,match:n,children:a}=t,o=e.useContext(h);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),e.createElement(g.Provider,{value:r},a)}var F=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(F||{}),D=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(D||{});function P(t){let n=function(){let t=e.useContext(g);return t||r(!1),t}(),a=n.matches[n.matches.length-1];return a.route.id||r(!1),a.route.id}function j(e){r(!1)}function N(t){let{basename:n="/",children:a=null,location:o,navigationType:i=u.Pop,navigator:c,static:d=!1,future:h}=t;y()&&r(!1);let m=n.replace(/^\/*/,"/"),g=e.useMemo((()=>({basename:m,navigator:c,static:d,future:p({v7_relativeSplatPath:!1},h)})),[m,h,c,d]);"string"==typeof o&&(o=l(o));let{pathname:E="/",search:C="",hash:x="",state:b=null,key:R="default"}=o,S=e.useMemo((()=>{let e=s(E,m);return null==e?null:{location:{pathname:e,search:C,hash:x,state:b,key:R},navigationType:i}}),[m,E,C,x,b,R,i]);return null==S?null:e.createElement(v.Provider,{value:g},e.createElement(f.Provider,{children:a,value:S}))}function w(e){let{children:t,location:r}=e;return R(L(t),r)}function L(t,n){void 0===n&&(n=[]);let a=[];return e.Children.forEach(t,((t,o)=>{if(!e.isValidElement(t))return;let l=[...n,o];if(t.type===e.Fragment)return void a.push.apply(a,L(t.props.children,l));t.type!==j&&r(!1),t.props.index&&t.props.children&&r(!1);let i={id:t.props.id||l.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(i.children=L(t.props.children,l)),a.push(i)})),a}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */new Promise((()=>{}));try{window.__reactRouterVersion="6"}catch(A){}const O=t.startTransition;function T(t){let{basename:r,children:n,future:a,window:o}=t,l=e.useRef();null==l.current&&(l.current=d({window:o,v5Compat:!0}));let i=l.current,[u,s]=e.useState({action:i.action,location:i.location}),{v7_startTransition:c}=a||{},p=e.useCallback((e=>{c&&O?O((()=>s(e))):s(e)}),[s,c]);return e.useLayoutEffect((()=>i.listen(p)),[i,p]),e.createElement(N,{basename:r,children:n,location:u.location,navigationType:u.action,navigator:i,future:a})}var _,I,M,z;(I=_||(_={})).UseScrollRestoration="useScrollRestoration",I.UseSubmit="useSubmit",I.UseSubmitFetcher="useSubmitFetcher",I.UseFetcher="useFetcher",I.useViewTransitionState="useViewTransitionState",(z=M||(M={})).UseFetcher="useFetcher",z.UseFetchers="useFetchers",z.UseScrollRestoration="useScrollRestoration";export{T as B,w as R,C as a,j as b,b as u};