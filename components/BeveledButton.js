import{j as s,m as e}from"../assets/proxy.js";function c({active:t,children:n,className:a="",...o}){return s.jsx(e.button,{whileTap:{scale:.98},className:`
        px-4 py-1 bg-win-gray font-comic text-sm font-bold
        ${t?"shadow-win-btn-active translate-y-[1px] translate-x-[1px]":"shadow-win-btn"}
        active:shadow-win-btn-active active:translate-y-[1px] active:translate-x-[1px]
        focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 focus:ring-offset-win-gray
        ${a}
      `,...o,children:n})}export{c as B};
