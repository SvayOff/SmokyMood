!function(){"use strict";var e=function(e,t,o,s){const n=document.querySelector(e),i=document.querySelectorAll(t),r=document.querySelectorAll(o);if(n&&i.length>=1&&r.length>=1){function c(){r.forEach((e=>{e.classList.add("hide"),e.classList.remove("show")})),i.forEach((e=>{e.classList.remove(s)}))}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;i[e].classList.add(s),r[e].classList.add("show"),r[e].classList.remove("hide")}c(),a(),n.addEventListener("click",(e=>{e.target&&e.target.classList.contains(t.slice(1))&&i.forEach(((t,o)=>{e.target==t&&(c(),a(o))}))}))}};document.addEventListener("DOMContentLoaded",(()=>{(function(){const e=document.querySelector(".header__burger"),t=document.querySelector(".header__content-list"),o=document.querySelectorAll(".header__content-link.drop-down");e.addEventListener("click",(o=>{e.classList.toggle("active"),t.classList.toggle("active")})),o.forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("active")}))}))})(),e(".choose__tabs",".choose__tab",".choose__tab-content","active"),e(".details__tabs",".details__tab",".details__tab-content","active"),function(e,t){const o=document.querySelectorAll(e);for(let e=0;e<o.length;e++){let s=o[e];s.addEventListener("click",(e=>{e.target.getAttribute("data-accord")===s.getAttribute("data-accord")&&s.classList.toggle(t)}))}}(".faq__accordion-item","active"),function(e,t,o,s,n,i){function r(e){const t=Date.parse(e)-Date.parse(new Date);return{days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/6e4%60),seconds:Math.floor(t/1e3%60)}}r(e),function(e,t){const c=document.querySelector(e);if(c){const a=c.querySelector(o),l=c.querySelector(s),d=c.querySelector(n),u=c.querySelector(i),_=setInterval(m,1e3);function m(){const e=r(t);if(a.textContent=h(e.days),l.textContent=h(e.hours),d.textContent=h(e.minutes),u.textContent=h(e.seconds),e<=0)return clearInterval(_)}function h(e){return e<10?`0${e}`:e}m()}}(t,e)}("2023-12-20",".timer__time",".timer__time-days .timer__time-counter",".timer__time-hours .timer__time-counter",".timer__time-minutes .timer__time-counter",".timer__time-seconds .timer__time-counter"),cart()})),$((function(){$(".testimonials__slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,arrows:!1,dots:!0,responsive:[{breakpoint:601,settings:{slidesToShow:1}}]}),$(".sponsors__slider").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,arrows:!1,dots:!1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:901,settings:{slidesToShow:3}},{breakpoint:701,settings:{slidesToShow:2}},{breakpoint:501,settings:{slidesToShow:1}}]})}))}();
//# sourceMappingURL=bundle.js.map