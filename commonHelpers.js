import"./assets/styles-1e939ed3.js";import{f as S,i as p}from"./assets/vendor-77e16229.js";const a=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]"),o=document.querySelector(".timer");let s=null,i=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(p.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(s=t,n.disabled=!1)}};S(a,b);n.addEventListener("click",()=>{s&&(n.disabled=!0,a.disabled=!0,i=setInterval(()=>{const t=s-new Date;if(t<=0){clearInterval(i),l(0),a.disabled=!1,n.disabled=!0;return}l(t)},1e3))});function l(e){const{days:t,hours:d,minutes:c,seconds:u}=D(e);o.querySelector("[data-days]").textContent=r(t),o.querySelector("[data-hours]").textContent=r(d),o.querySelector("[data-minutes]").textContent=r(c),o.querySelector("[data-seconds]").textContent=r(u)}function D(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%36e5/6e4),y=Math.floor(e%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}function r(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map