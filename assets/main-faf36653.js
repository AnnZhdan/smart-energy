(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),o=()=>{const n=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");const s=n?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[s](document.body)};t.addEventListener("click",o),r.addEventListener("click",o),window.addEventListener("resize",()=>{window.innerWidth>768&&e.classList.remove("is-open")}),document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){n.style.display="none",overlay.style.display="none"})})})();async function P(e,t,r){const o=`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=${r}`;try{const n=await fetch(o);if(!n.ok)throw new Error(`Request failed with status ${n.status}`);return await n.json()}catch(n){return console.error("Error fetching data:",n),null}}async function F(e,t,r,o,n,s){try{const i=`https://your-energy.b.goit.study/api/exercises?category=${e}&muscles=${t}&equipment=${r}&keyword=${o}&page=${n}&limit=${s}`,u=await fetch(i);if(!u.ok)throw new Error(`Request failed with status ${u.status}`);const m=await u.json();if(!m.results||m.results.length===0){console.log("No results found for your search parameters.");return}m.results.forEach((c,l)=>{console.log(`Exercise #${l+1}:`),console.log(`Name: ${c.name}`),console.log(`Description: ${c.description}`),console.log(`GIF URL: ${c.gifUrl}`),console.log(`Burned Calories: ${c.burnedCalories}`),console.log(`Duration: ${c.duration} minutes`),console.log(`Rating: ${c.rating}`),console.log("-----------------------------------")})}catch(i){console.error(`Error: ${i.message}`)}}async function H(e){try{const t=`https://your-energy.b.goit.study/api/exercises/${e}`,r=await fetch(t);if(!r.ok)throw new Error(`Request failed with status ${r.status}`);const o=await r.json();if(!o.results||o.results.length===0){console.log("Exercise not found for the specified exerciseID.");return}const n=document.getElementById("exercise-details"),s=o.results[0];n.innerHTML=`
          <h2>${s.name}</h2>
          <p><strong>Body Part:</strong> ${s.bodyPart}</p>
          <p><strong>Equipment:</strong> ${s.equipment}</p>
          <p><strong>Target:</strong> ${s.target}</p>
          <p><strong>Description:</strong> ${s.description}</p>
          <p><strong>Burned Calories:</strong> ${s.burnedCalories}</p>
          <p><strong>Duration:</strong> ${s.time} minutes</p>
          <p><strong>Rating:</strong> ${s.rating}</p>
          <p><strong>Popularity:</strong> ${s.popularity}</p>
          <p><strong>GIF URL:</strong> <a href="${s.gifUrl}" target="_blank">View</a></p>
      `}catch(t){console.error(`Error: ${t.message}`)}}async function J(){try{const e=await fetch("https://your-energy.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();if(t&&t.author&&t.quote)return console.log(`Quote of the day: "${t.quote}" - ${t.author}`),t;console.log("Failed to get the quote of the day.")}catch(e){console.error("Error while fetching the quote of the day:",e)}}P("Muscles",1,12).then(e=>{e&&console.log(e)});F("back","lats","barbell","pull",1,10);H("64f389465ae26083f39b17c2");(()=>{if(!document.querySelector("section.galary"))return;console.log(window.innerWidth);const t=document.querySelector(".galary-list"),r=document.querySelector(".galary-filters-button1"),o=document.querySelector(".galary-filters-button2"),n=document.querySelector(".galary-filters-button3"),s=document.querySelector(".pagination"),i=document.querySelector(".galary-title2 span"),u=document.querySelector(".galary-list"),m=document.querySelector(".galary-title-and-list-wrapper-ex"),c=document.querySelector(".galary-title-and-list-wrapper");let l="Body parts",a=r,g=s.children[0].firstElementChild,v=9;const N=window.screen.availWidth;function O(){if(N>=768)return v=12}O(),$(l,1,v),s.classList.add("is-hidden"),r.addEventListener("click",S),o.addEventListener("click",S),n.addEventListener("click",S);function S(p){p.preventDefault(),a.classList.remove("galary-filter-checked"),l=String(this.textContent),this.classList.add("galary-filter-checked"),$(l,1,v),a=this}function $(p,y,E){s.classList.add("is-hidden"),t.innerHTML="",P(p,y,E).then(f=>{if(f)switch(t.insertAdjacentHTML("beforeend",h(f.results)),f.totalPages){case 1:s.classList.remove("is-hidden"),s.children[1].classList.add("is-hidden"),s.children[2].classList.add("is-hidden");break;case 2:s.classList.remove("is-hidden"),s.children[1].classList.remove("is-hidden"),s.children[2].classList.add("is-hidden");break;case 3:s.classList.remove("is-hidden"),s.children[1].classList.remove("is-hidden"),s.children[2].classList.remove("is-hidden");break;default:console.log("Something is wrong!")}});function h(f){return f.map(({filter:x,name:w,imgURL:B})=>`
           <li class="galary-item">
              <img
                src="${B}"
                alt="${w}"
                loading="lazy"
                class="galary-item-img"
              />
              <h3 class="galary-item-subtitle">${p}</h3>
              <p class="galery-item-text">${w.charAt(0).toUpperCase()+w.slice(1)}</p>
            </li> `).join("")}}s.children[0].addEventListener("click",q),s.children[1].addEventListener("click",q),s.children[2].addEventListener("click",q);function q(p){if(this.firstElementChild.classList!==g.classList){this.firstElementChild.classList.add("current-page"),g.classList.remove("current-page"),g=this.firstElementChild;let y=Number(g.textContent);console.log(y),$(l,y)}}t.addEventListener("click",R);function R(p){t.innerHTML="",j("back",1,v)}async function j(p,y,E){try{const h=`https://your-energy.b.goit.study/api/exercises?category=${p}&page=${y}&limit=${E}`,f=await fetch(h);if(!f.ok)throw new Error(`Request failed with status ${f.status}`);const x=await f.json();if(!x.results||x.results.length===0){console.log("No results found for your search parameters.");return}m.classList.remove("is-hidden"),c.classList.add("is-hidden"),u.insertAdjacentHTML("beforeend",U(x.results)),i.textContent=`${p}`}catch(h){console.error(`Error: ${h.message}`)}}function U(p){return p.map(({name:y,target:E,rating:h,burnedCalories:f,time:x,id:w,bodyPart:B})=>`
               <li class="exercise-item">
          <div class="exercise-item-wrapper">
            <div class="exercise-item-firth-wrapper">
              <p class="exercise-item-workout">WORKOUT</p>
              <p class="exercise-item-rating">${h}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 100 130"
                class="exercise-item-star"
              >
                <use href="./img/icon-sprite.svg#icon-Star-2"></use>
              </svg>
              <button type="button" class="exercise-item-button" id="${w}">
                Start&nbsp;&nbsp;
                <svg width="16" height="16">
                  <use href="./img/icon-sprite.svg#arrow"></use>
                </svg>
              </button>
            </div>
            <div class="exercise-item-second-wrapper">
              <div class="exercise-item-run-box">
                <svg class="exercise-item-run" width="16" height="16">
                  <use href="./img/icon-sprite.svg#Group"></use>
                </svg>
              </div>
              <h3 class="exercise-item-subtitle">${y}</h3>
            </div>
            <ul class="exercise-item-list">
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Burned calories:<span class="information-text-span"
                    >${f} / ${x} min</span
                  >
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Body part:<span class="information-text-span">${B}</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Target:<span class="information-text-span">${E}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
         `).join("")}})();const G=document.getElementById("closeModalButton"),K=document.getElementById("additionalButton2"),W=document.getElementById("closeModalButton2"),d=document.getElementById("myModal"),M=document.getElementById("myModal2");let C=null,A=null;function T(e){d.style.display="block";const t=d.querySelector("img"),r=d.querySelector("h2"),o=d.querySelector(".text-modal"),n=d.querySelector(".burn-modal"),s=d.querySelector(".modal-rating"),i=d.querySelector(".modal-part"),u=d.querySelector(".modal-equipment"),m=d.querySelector(".modal-target"),c=d.querySelector(".modal-popularity");t.src=e.gifUrl,r.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),o.textContent=e.description,n.textContent=`${e.burnedCalories}/${e.time} min`,i.textContent=e.bodyPart,u.textContent=e.equipment,m.textContent=e.target,c.textContent=e.popularity,s.textContent=e.rating,C=e}async function Q(e){try{const t=await _(e);if(!t){console.error("Не вдалося отримати дані про вправу.");return}T(t),A=e}catch(t){console.error(`Помилка: ${t.message}`)}}async function _(e){try{const t=await fetch(`https://your-energy.b.goit.study/api/exercises/${e}`);if(!t.ok)throw new Error("Помилка запиту до API");return await t.json()}catch(t){return console.error("Помилка при отриманні даних про вправу:",t),null}}const z=document.querySelectorAll(".exercise-item-button");z.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("id");Q(t)})});G.addEventListener("click",()=>d.style.display="none");K.addEventListener("click",()=>{d.style.display="none",C&&A&&(T(C),M.style.display="block")});W.addEventListener("click",()=>M.style.display="none");d.style.display="none";M.style.display="none";const D="quote",V=document.querySelector(".qoute-inside-container");async function Y(){try{const e=await J();if(console.log("Server Response:",e),!e||!e.quote||!e.author)throw new Error("Invalid data received from the server");X(e),Z(e)}catch(e){console.log(e.message)}}function X({quote:e,author:t}){V.innerHTML=`<div class="qoute-inside-container">
        <p class="quotes-day-text">${e}</p>
        <p class="quotes-day-author">${t}</p>
    </div>`}function Z({quote:e,author:t}){const r={quote:e,author:t,date:new Date().getDate()};try{const o=JSON.stringify(r);localStorage.setItem(D,o)}catch(o){console.log(o.message)}}async function ee(){try{const e=localStorage.getItem(D);if(e){let t=JSON.parse(e),r=new Date().getDate();t.date!==r&&await Y()}}catch(e){console.log(e.message)}}ee();const L=document.querySelectorAll(".rating-container label"),b=document.querySelectorAll(".rating-container label svg use");L.forEach((e,t)=>{e.addEventListener("click",r=>{for(let o=0;o<L.length;o++)o<=t?b[o].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):b[o].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("focus",r=>{for(let o=0;o<=t;o++)b[o].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let o=t+1;o<L.length;o++)b[o].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("blur",r=>{for(let o=0;o<L.length;o++)b[o].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const te=document.getElementById("selectedRat");L.forEach((e,t)=>{e.addEventListener("click",r=>{const o=(t+1).toFixed(1);te.textContent=o})});const se=document.getElementById("ratingForm");document.getElementById("submitRatingButton");const oe=document.getElementById("selectedRat"),ne=document.getElementById("emailInput"),re=document.getElementById("commentInput");se.addEventListener("submit",e=>{e.preventDefault();const t="64f389465ae26083f39b17df",r=parseFloat(oe.textContent),o=ne.value,n=re.value;if(!o){alert("The email field is required");return}console.log("Exercise ID:",t),console.log("Rate:",r),console.log("Email:",o),console.log("Comment:",n);const s=`https://your-energy.b.goit.study/api/exercises/${t}/rating`;fetch(s,{method:"PATCH",body:JSON.stringify({rate:r,email:o,comment:n}),headers:{"Content-Type":"application/json"}}).then(i=>i.json()).then(i=>{i.success?myModal2.style.display="none":alert(i.message)}).catch(i=>{console.error("Помилка:",i)})});let k,I;document.addEventListener("DOMContentLoaded",function(){k=document.getElementById("favoritesText"),I=document.getElementById("favoritesIcon");const e=document.getElementById("additionalButton1"),t=document.querySelector(".modal");e.addEventListener("click",()=>{const r=e.getAttribute("data-exercise-id"),o=document.querySelector(".title-modal").textContent,n=document.querySelector(".text-modal").textContent,s=t.querySelector(".burn-modal").textContent,i=t.querySelector(".modal-rating").textContent,u=t.querySelector(".modal-part").textContent,m=t.querySelector(".modal-equipment").textContent,c=t.querySelector(".modal-target").textContent,l=t.querySelector(".modal-popularity").textContent;let a=JSON.parse(localStorage.getItem("favoritesList"))||[];const g=a.findIndex(v=>v.exerciseID===r);g!==-1?(a.splice(g,1),localStorage.setItem("favoritesList",JSON.stringify(a)),alert("Exercise removed from favorites!")):(a.push({exerciseID:r,exerciseName:o,exerciseDescription:n,exerciseBurned:s,exercisePart:u,exerciseEquipment:m,exerciseTarget:c,exercisePopularity:l,exerciseRating:i}),localStorage.setItem("favoritesList",JSON.stringify(a)),alert("Exercise added to favorites!")),console.log("Exercise ID:",r),console.log("Exercise Name:",o),console.log("Exercise Description:",n),console.log("Favorites List:",a)}),additionalButton1.addEventListener("click",()=>{try{k&&(k.textContent="Add to favorites"),I&&I.setAttribute("xlink:href","./img/icon-sprite.svg#heart")}catch(r){console.error("Error while updating favorites:",r)}})});window.addEventListener("load",function(){const e=document.querySelectorAll(".nav-list li"),t=e[0],r=e[1],o=window.location.href;function n(){o.includes("favorites.html")&&(t.classList.remove("active"),r.classList.add("active"))}n();const s="favoritesList",i=document.querySelector(".favorites-box"),u=document.querySelector(".favorites-box-deskription");let m=[];function c(){try{const l=localStorage.getItem(s);l?(u.style.display="none",m=JSON.parse(l),m.forEach(a=>{const g=document.createElement("ul");g.classList.add("galary-list"),g.innerHTML=`
<li class="exercise-item">
  <div class="exercise-item-wrapper">
    <div class="exercise-item-firth-wrapper">
      <p class="exercise-item-workout">${a.exerciseName}</p>
      <button type="button" class="button favourite-delete-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 32 32"
          class="exercise-item-trash"
        >
          <use xlink:href="./img/icon-sprite.svg#trash"></use>
        </svg>
      </button>
      <button type="button" class="exercise-item-button" id="${a.id}">
        Start&nbsp;&nbsp;
        <svg width="16" height="16">
          <use href="./img/icon-sprite.svg#arrow"></use>
        </svg>
      </button>
    </div>
    <div class="exercise-item-second-wrapper">
      <div class="exercise-item-run-box">
        <svg class="exercise-item-run" width="16" height="16">
          <use href="./img/icon-sprite.svg#Group"></use>
        </svg>
      </div>
      <h3 class="exercise-item-subtitle">${a.exerciseName}</h3>
    </div>
    <ul class="exercise-item-list">
      <li class="exercise-item-list-information">
        <p class="information-text">
          Burned calories:<span class="information-text-span"
            >${a.exerciseBurned}
          </span>
        </p>
      </li>
      <li class="exercise-item-list-information">
        <p class="information-text">
          Body part:<span class="information-text-span"
            >${a.exercisePart}</span
          >
        </p>
      </li>
      <li class="exercise-item-list-information">
        <p class="information-text">
          Target:<span class="information-text-span"
            >${a.exerciseTrget}</span
          >
        </p>
      </li>
    </ul>
  </div>
</li>
          `,i.appendChild(g)})):u.style.display="block"}catch(l){console.error(l)}}c()});const ie=document.querySelectorAll(".favourite-delete-button");ie.forEach(e=>{e.addEventListener("click",ae)});function ae(e){}
