import"./assets/styles-e2e2daf4.js";import{f as p,i as u}from"./assets/vendor-77e16229.js";let d,s;const t=document.querySelector("[data-start]"),c=document.querySelector("#datetime-picker"),S=document.querySelector("[data-days]"),I=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]"),q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){d=e[0],v()}};p(c,q);t.addEventListener("click",()=>{t.disabled||T()});function v(){d>new Date?(t.disabled=!1,u.destroy()):(t.disabled=!0,u.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}))}function T(){t.disabled=!0,c.disabled=!0,s=setInterval(()=>{const e=d-new Date;if(e<=0)clearInterval(s),C();else{const{days:n,hours:o,minutes:r,seconds:i}=M(e);l(n,o,r,i)}},1e3)}function C(){clearInterval(s),t.disabled=!1,c.disabled=!1,l(0,0,0,0)}function l(e,n,o,r){S.textContent=a(e),I.textContent=a(n),b.textContent=a(o),D.textContent=a(r)}function a(e){return String(e).padStart(2,"0")}function M(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}
//# sourceMappingURL=commonHelpers.js.map
