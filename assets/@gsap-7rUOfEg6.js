import{r as e}from"./react-BZuymhSV.js";import{g as r}from"./gsap-BDVyzZVq.js";
/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let t="undefined"!=typeof window?e.useLayoutEffect:e.useEffect,n=e=>e&&!Array.isArray(e)&&"object"==typeof e,c=[],s={},u=r;const d=(r,d=c)=>{let o=s;n(r)?(o=r,r=null,d="dependencies"in o?o.dependencies:c):n(d)&&(o=d,d="dependencies"in o?o.dependencies:c);const{scope:f,revertOnUpdate:a}=o,i=e.useRef(!1),p=e.useRef(u.context((()=>{}),f)),l=e.useRef((e=>p.current.add(null,e))),y=d&&d.length&&!a;return t((()=>{if(r&&p.current.add(r,f),!y||!i.current)return()=>p.current.revert()}),d),y&&t((()=>(i.current=!0,()=>p.current.revert())),c),{context:p.current,contextSafe:l.current}};d.register=e=>{u=e},d.headless=!0;export{d as u};
