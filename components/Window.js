import{u as y,r,j as o,m as j}from"../assets/proxy.js";class k{constructor(){this.componentControls=new Set}subscribe(e){return this.componentControls.add(e),()=>this.componentControls.delete(e)}start(e,s){this.componentControls.forEach(n=>{n.start(e.nativeEvent||e,s)})}}const v=()=>new k;function N(){return y(v)}/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,n)=>n?n.toUpperCase():s.toLowerCase()),f=t=>{const e=$(t);return e.charAt(0).toUpperCase()+e.slice(1)},p=(...t)=>t.filter((e,s,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===s).join(" ").trim(),A=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=r.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:a="",children:i,iconNode:c,...l},h)=>r.createElement("svg",{ref:h,...E,width:e,height:e,stroke:t,strokeWidth:n?Number(s)*24/Number(e):s,className:p("lucide",a),...!i&&!A(l)&&{"aria-hidden":"true"},...l},[...c.map(([u,w])=>r.createElement(u,w)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(t,e)=>{const s=r.forwardRef(({className:n,...a},i)=>r.createElement(W,{ref:i,iconNode:e,className:p(`lucide-${M(f(t))}`,`lucide-${t}`,n),...a}));return s.displayName=f(t),s};/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M5 12h14",key:"1ays0h"}]],L=m("minus",_);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],D=m("square",z);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],I=m("x",R);function S({title:t,children:e,defaultPosition:s={x:0,y:0},defaultSize:n={width:400,height:"auto"},onClose:a,className:i="",icon:c,zIndex:l=10,onFocus:h}){const[u,w]=r.useState(!1),[d,g]=r.useState(!1),x=N(),b=r.useRef(null);return u?null:o.jsxs(j.div,{ref:b,drag:!d,dragControls:x,dragListener:!1,dragMomentum:!1,initial:s,onMouseDown:h,style:{zIndex:l},animate:d?{x:0,y:0,width:"100%",height:"100%"}:{width:n.width,height:n.height},className:`
        absolute bg-win-gray shadow-win-out p-[3px] flex flex-col
        ${d?"fixed inset-0 !w-full !h-full":""}
        ${i}
      `,children:[o.jsxs("div",{className:"bg-titlebar text-white px-1 py-[2px] flex justify-between items-center cursor-default select-none",onPointerDown:C=>x.start(C),children:[o.jsxs("div",{className:"flex items-center gap-1 font-comic font-bold text-sm tracking-wide",children:[c&&o.jsx("span",{className:"w-4 h-4 flex items-center justify-center",children:c}),t]}),o.jsxs("div",{className:"flex gap-[2px]",children:[o.jsx("button",{onClick:()=>w(!0),className:"w-4 h-4 bg-win-gray shadow-win-btn active:shadow-win-btn-active flex items-center justify-center text-black",children:o.jsx(L,{size:12,strokeWidth:3})}),o.jsx("button",{onClick:()=>g(!d),className:"w-4 h-4 bg-win-gray shadow-win-btn active:shadow-win-btn-active flex items-center justify-center text-black",children:o.jsx(D,{size:10,strokeWidth:3})}),o.jsx("button",{onClick:a,className:"w-4 h-4 bg-win-gray shadow-win-btn active:shadow-win-btn-active flex items-center justify-center text-black ml-1",children:o.jsx(I,{size:12,strokeWidth:3})})]})]}),o.jsx("div",{className:"flex-1 bg-white shadow-win-in mt-[2px] overflow-auto p-2",children:e})]})}export{S as W,m as c};
