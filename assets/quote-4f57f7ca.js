(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const y of s.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function I(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}else return Array.from(t)}var h=!1;if(typeof window<"u"){var b={get passive(){h=!0}};window.addEventListener("testPassive",null,b),window.removeEventListener("testPassive",null,b)}var p=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),c=[],v=!1,S=-1,u=void 0,a=void 0,f=void 0,T=function(e){return c.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(e))})},m=function(e){var o=e||window.event;return T(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},$=function(e){if(f===void 0){var o=!!e&&e.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;if(o&&r>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);f=document.body.style.paddingRight,document.body.style.paddingRight=n+r+"px"}}u===void 0&&(u=document.body.style.overflow,document.body.style.overflow="hidden")},B=function(){f!==void 0&&(document.body.style.paddingRight=f,f=void 0),u!==void 0&&(document.body.style.overflow=u,u=void 0)},P=function(){return window.requestAnimationFrame(function(){if(a===void 0){a={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,o=e.scrollY,r=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-o,document.body.style.left=-r,setTimeout(function(){return window.requestAnimationFrame(function(){var s=n-window.innerHeight;s&&o>=n&&(document.body.style.top=-(o+s))})},300)}})},M=function(){if(a!==void 0){var e=-parseInt(document.body.style.top,10),o=-parseInt(document.body.style.left,10);document.body.style.position=a.position,document.body.style.top=a.top,document.body.style.left=a.left,window.scrollTo(o,e),a=void 0}},A=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},D=function(e,o){var r=e.targetTouches[0].clientY-S;return T(e.target)?!1:o&&o.scrollTop===0&&r>0||A(o)&&r<0?m(e):(e.stopPropagation(),!0)},k=function(e,o){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!c.some(function(n){return n.targetElement===e})){var r={targetElement:e,options:o||{}};c=[].concat(I(c),[r]),p?P():$(o),p&&(e.ontouchstart=function(n){n.targetTouches.length===1&&(S=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&D(n,e)},v||(document.addEventListener("touchmove",m,h?{passive:!1}:void 0),v=!0))}},x=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}c=c.filter(function(o){return o.targetElement!==e}),p&&(e.ontouchstart=null,e.ontouchmove=null,v&&c.length===0&&(document.removeEventListener("touchmove",m,h?{passive:!1}:void 0),v=!1)),p?M():B()};(()=>{const t=document.getElementById("overlay"),e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu");let n=!1;const s=()=>{n=!n,o.setAttribute("aria-expanded",n),e.classList.toggle("is-open"),n?(k(document.body),t.style.display="block"):(x(document.body),t.style.display="none")};o.addEventListener("click",s),r.addEventListener("click",s),window.addEventListener("resize",()=>{window.innerWidth>768&&n&&(e.classList.remove("is-open"),x(document.body),t.style.display="none")})})();const g="/smart-energy/assets/icon-sprite-4c9b95a6.svg";async function Y(t,e,o){const r=`https://your-energy.b.goit.study/api/filters?filter=${t}&page=${e}&limit=${o}`;try{const n=await fetch(r);if(!n.ok)throw new Error(`Request failed with status ${n.status}`);return await n.json()}catch(n){return console.error("Error fetching data:",n),null}}async function Q(t,e,o){try{const r=`https://your-energy.b.goit.study/api/exercises/${t}/rating`,n=await fetch(r,{method:"PATCH",headers:{"Content-Type":"application/json"},body:o});if(!n.ok)throw new Error(`Request to set rating failed with status ${n.status}`);const s=await n.json();console.log(`Rating for exercise ${t} has been updated to ${e}.`)}catch(r){console.error(`Error: ${r.message}`)}}async function C(){try{const t=await fetch("https://your-energy.b.goit.study/api/quote");if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const e=await t.json();if(e&&e.author&&e.quote){const o={quote:e.quote,author:e.author};return console.log("Quote of the day:",o),o}else console.log("Failed to get the quote of the day.")}catch(t){console.error("Error while fetching the quote of the day:",t)}}document.addEventListener("DOMContentLoaded",function(){const t="favoritesList",e=document.querySelector(".favorites-box-deskription"),o=document.querySelector(".favorites-list");function r(){o.innerHTML="";const s=JSON.parse(localStorage.getItem(t))||[];s.forEach(i=>{const l=document.createElement("li");l.className="exercise-item favorites-exercise-item timeline-content js--fadeInLeft",l.innerHTML=`
        <div class="exercise-item-wrapper ">
          <div class="exercise-item-firth-wrapper">
            <p class="exercise-item-workout">${i.exerciseName}</p>
            <button type="button" class="button favourite-delete-button" data-card-id="${i.exerciseID}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" class="exercise-item-trash">
                <use xlink:href="${g}#trash" style="fill: white; stroke: black"></use>
              </svg>
            </button>
            <button type="button" class="exercise-item-button exercise-item-fav" id="${i.exerciseID}">
              Start&nbsp;&nbsp;
              <svg width="16" height="16">
                <use href="${g}#arrow"></use>
              </svg>
            </button>
          </div>
          <div class="exercise-item-second-wrapper">
            <div class="exercise-item-run-box">
              <svg class="exercise-item-run" width="16" height="16">
                <use href="${g}#Group"></use>
              </svg>
            </div>
            <h3 class="exercise-item-subtitle">${i.exerciseName}</h3>
          </div>
          <ul class="exercise-item-list">
            <li class="exercise-item-list-information">
              <p class="information-text">
                Burned calories:<span class="information-text-span">${i.exerciseBurned}</span>
              </p>
            </li>
            <li class="exercise-item-list-information">
              <p class="information-text">
                Body part:<span class="information-text-span">${i.exercisePart}</span>
              </p>
            </li>
            <li class="exercise-item-list-information">
              <p class="information-text">
                Target:<span class="information-text-span">${i.exerciseTarget}</span>
              </p>
            </li>
          </ul>
        </div>
      `,o.appendChild(l)}),s.length===0&&(e.style.display="block"),document.querySelectorAll(".favourite-delete-button").forEach(i=>{i.addEventListener("click",function(){const l=i.getAttribute("data-card-id");let d=JSON.parse(localStorage.getItem(t))||[];const w=d.findIndex(E=>E.exerciseID===l);w!==-1&&(d.splice(w,1),localStorage.setItem(t,JSON.stringify(d))),(!d||d.length===0)&&(e.style.display="block"),r()})})}function n(){try{localStorage.getItem(t)?(e.style.display="none",r()):e.style.display="block"}catch(s){console.error(s)}}n()});const L=document.querySelector(".recommend-text-box"),H=L.querySelector(".cover-text");function N(){H.style.transform="translateY(0)"}L.addEventListener("click",()=>{N()});const q="quote",R=document.querySelector(".qoute-inside-container");async function O(){const t=await C();if(console.log(t),!t||!t.quote||!t.author)throw new Error("Invalid data received from the server");return j(t),F(t),t}try{const t=O()}catch(t){console.log(t.message)}function j({quote:t,author:e}){R.innerHTML=`
        
        <p class="quotes-day-text">${t}</p>
        <p class="quotes-day-author">${e}</p>
    `}function F({quote:t,author:e}){const o={quote:t,author:e,date:new Date().getDate()};try{const r=JSON.stringify(o);localStorage.setItem(q,r)}catch(r){console.log(r.message)}}async function J(){try{const t=localStorage.getItem(q);if(t){let e=JSON.parse(t),o=new Date().getDate();e.date!==o&&await O()}}catch(t){console.log(t.message)}}J();export{Q as a,Y as f,g as s};
