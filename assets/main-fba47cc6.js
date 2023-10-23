(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{const s=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!s),e.classList.toggle("is-open");const o=s?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};t.addEventListener("click",n),r.addEventListener("click",n),window.addEventListener("resize",()=>{window.innerWidth>768&&e.classList.remove("is-open")}),document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){s.style.display="none",overlay.style.display="none"})})})();async function P(e,t,r){const n=`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=${r}`;try{const s=await fetch(n);if(!s.ok)throw new Error(`Request failed with status ${s.status}`);return await s.json()}catch(s){return console.error("Error fetching data:",s),null}}async function F(e,t,r,n,s,o){try{const i=`https://your-energy.b.goit.study/api/exercises?category=${e}&muscles=${t}&equipment=${r}&keyword=${n}&page=${s}&limit=${o}`,u=await fetch(i);if(!u.ok)throw new Error(`Request failed with status ${u.status}`);const m=await u.json();if(!m.results||m.results.length===0){console.log("No results found for your search parameters.");return}m.results.forEach((c,p)=>{console.log(`Exercise #${p+1}:`),console.log(`Name: ${c.name}`),console.log(`Description: ${c.description}`),console.log(`GIF URL: ${c.gifUrl}`),console.log(`Burned Calories: ${c.burnedCalories}`),console.log(`Duration: ${c.duration} minutes`),console.log(`Rating: ${c.rating}`),console.log("-----------------------------------")})}catch(i){console.error(`Error: ${i.message}`)}}async function H(e){try{const t=`https://your-energy.b.goit.study/api/exercises/${e}`,r=await fetch(t);if(!r.ok)throw new Error(`Request failed with status ${r.status}`);const n=await r.json();if(!n.results||n.results.length===0){console.log("Exercise not found for the specified exerciseID.");return}const s=document.getElementById("exercise-details"),o=n.results[0];s.innerHTML=`
            <h2>${o.name}</h2>
            <p><strong>Body Part:</strong> ${o.bodyPart}</p>
            <p><strong>Equipment:</strong> ${o.equipment}</p>
            <p><strong>Target:</strong> ${o.target}</p>
            <p><strong>Description:</strong> ${o.description}</p>
            <p><strong>Burned Calories:</strong> ${o.burnedCalories}</p>
            <p><strong>Duration:</strong> ${o.time} minutes</p>
            <p><strong>Rating:</strong> ${o.rating}</p>
            <p><strong>Popularity:</strong> ${o.popularity}</p>
            <p><strong>GIF URL:</strong> <a href="${o.gifUrl}" target="_blank">View</a></p>
        `}catch(t){console.error(`Error: ${t.message}`)}}async function J(){try{const e=await fetch("https://your-energy.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();if(t&&t.author&&t.quote)return console.log(`Quote of the day: "${t.quote}" - ${t.author}`),t;console.log("Failed to get the quote of the day.")}catch(e){console.error("Error while fetching the quote of the day:",e)}}P("Muscles",1,12).then(e=>{e&&console.log(e)});F("back","lats","barbell","pull",1,10);H("64f389465ae26083f39b17c2");(()=>{if(!document.querySelector("section.galary"))return;console.log(window.innerWidth);const t=document.querySelector(".galary-list"),r=document.querySelector(".galary-filters-button1"),n=document.querySelector(".galary-filters-button2"),s=document.querySelector(".galary-filters-button3"),o=document.querySelector(".pagination"),i=document.querySelector(".galary-title2 span"),u=document.querySelector(".galary-list"),m=document.querySelector(".galary-title-and-list-wrapper-ex"),c=document.querySelector(".galary-title-and-list-wrapper");let p="Body parts",g=r,f=o.children[0].firstElementChild,v=9;const O=window.screen.availWidth;function R(){if(O>=768)return v=12}R(),q(p,1,v),o.classList.add("is-hidden"),r.addEventListener("click",S),n.addEventListener("click",S),s.addEventListener("click",S);function S(l){l.preventDefault(),g.classList.remove("galary-filter-checked"),p=String(this.textContent),this.classList.add("galary-filter-checked"),q(p,1,v),g=this}function q(l,y,E){o.classList.add("is-hidden"),t.innerHTML="",P(l,y,E).then(d=>{if(d)switch(t.insertAdjacentHTML("beforeend",h(d.results)),d.totalPages){case 1:o.classList.remove("is-hidden"),o.children[1].classList.add("is-hidden"),o.children[2].classList.add("is-hidden");break;case 2:o.classList.remove("is-hidden"),o.children[1].classList.remove("is-hidden"),o.children[2].classList.add("is-hidden");break;case 3:o.classList.remove("is-hidden"),o.children[1].classList.remove("is-hidden"),o.children[2].classList.remove("is-hidden");break;default:console.log("Something is wrong!")}});function h(d){return d.map(({filter:x,name:L,imgURL:B})=>`
           <li class="galary-item">
              <img
                src="${B}"
                alt="${L}"
                loading="lazy"
                class="galary-item-img"
              />
              <h3 class="galary-item-subtitle">${l}</h3>
              <p class="galery-item-text">${L.charAt(0).toUpperCase()+L.slice(1)}</p>
            </li> `).join("")}}o.children[0].addEventListener("click",$),o.children[1].addEventListener("click",$),o.children[2].addEventListener("click",$);function $(l){if(this.firstElementChild.classList!==f.classList){this.firstElementChild.classList.add("current-page"),f.classList.remove("current-page"),f=this.firstElementChild;let y=Number(f.textContent);console.log(y),q(p,y)}}t.addEventListener("click",N);function N(l){t.innerHTML="",j("back",1,v)}async function j(l,y,E){try{const h=`https://your-energy.b.goit.study/api/exercises?category=${l}&page=${y}&limit=${E}`,d=await fetch(h);if(!d.ok)throw new Error(`Request failed with status ${d.status}`);const x=await d.json();if(!x.results||x.results.length===0){console.log("No results found for your search parameters.");return}m.classList.remove("is-hidden"),c.classList.add("is-hidden"),u.insertAdjacentHTML("beforeend",U(x.results)),i.textContent=`${l}`}catch(h){console.error(`Error: ${h.message}`)}}function U(l){return l.map(({name:y,target:E,rating:h,burnedCalories:d,time:x,id:L,bodyPart:B})=>`
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
              <button type="button" class="exercise-item-button" id="${L}">
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
                    >${d} / ${x} min</span
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
         `).join("")}})();const W=document.getElementById("closeModalButton"),G=document.getElementById("additionalButton2"),K=document.getElementById("closeModalButton2"),a=document.getElementById("myModal"),M=document.getElementById("myModal2");let C=null,A=null;function D(e){a.style.display="block";const t=a.querySelector("img"),r=a.querySelector("h2"),n=a.querySelector(".text-modal"),s=a.querySelector(".burn-modal"),o=a.querySelector(".modal-rating"),i=a.querySelector(".modal-part"),u=a.querySelector(".modal-equipment"),m=a.querySelector(".modal-target"),c=a.querySelector(".modal-popularity");t.src=e.gifUrl,r.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),n.textContent=e.description,s.textContent=`${e.burnedCalories}/${e.time} min`,i.textContent=e.bodyPart,u.textContent=e.equipment,m.textContent=e.target,c.textContent=e.popularity,o.textContent=e.rating,C=e}async function Q(e){try{const t=await _(e);if(!t){console.error("Не вдалося отримати дані про вправу.");return}D(t),A=e}catch(t){console.error(`Помилка: ${t.message}`)}}async function _(e){try{const t=await fetch(`https://your-energy.b.goit.study/api/exercises/${e}`);if(!t.ok)throw new Error("Помилка запиту до API");return await t.json()}catch(t){return console.error("Помилка при отриманні даних про вправу:",t),null}}const z=document.querySelectorAll(".exercise-item-button");z.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("id");Q(t)})});W.addEventListener("click",()=>a.style.display="none");G.addEventListener("click",()=>{a.style.display="none",C&&A&&(D(C),M.style.display="block")});K.addEventListener("click",()=>M.style.display="none");a.style.display="none";M.style.display="none";const T="quote",V=document.querySelector(".qoute-inside-container");async function Y(){try{const e=await J();if(console.log("Server Response:",e),!e||!e.quote||!e.author)throw new Error("Invalid data received from the server");X(e),Z(e)}catch(e){console.log(e.message)}}function X({quote:e,author:t}){V.innerHTML=`<div class="qoute-inside-container">
        <p class="quotes-day-text">${e}</p>
        <p class="quotes-day-author">${t}</p>
    </div>`}function Z({quote:e,author:t}){const r={quote:e,author:t,date:new Date().getDate()};try{const n=JSON.stringify(r);localStorage.setItem(T,n)}catch(n){console.log(n.message)}}async function ee(){try{const e=localStorage.getItem(T);if(e){let t=JSON.parse(e),r=new Date().getDate();t.date!==r&&await Y()}}catch(e){console.log(e.message)}}ee();const b=document.querySelectorAll(".rating-container label"),w=document.querySelectorAll(".rating-container label svg use");b.forEach((e,t)=>{e.addEventListener("click",r=>{for(let n=0;n<b.length;n++)n<=t?w[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):w[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("focus",r=>{for(let n=0;n<=t;n++)w[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let n=t+1;n<b.length;n++)w[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("blur",r=>{for(let n=0;n<b.length;n++)w[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const te=document.getElementById("selectedRat");b.forEach((e,t)=>{e.addEventListener("click",r=>{const n=(t+1).toFixed(1);te.textContent=n})});const oe=document.getElementById("ratingForm");document.getElementById("submitRatingButton");const ne=document.getElementById("selectedRat"),se=document.getElementById("emailInput"),re=document.getElementById("commentInput");oe.addEventListener("submit",e=>{e.preventDefault();const t="64f389465ae26083f39b17df",r=parseFloat(ne.textContent),n=se.value,s=re.value;if(!n){alert("The email field is required");return}console.log("Exercise ID:",t),console.log("Rate:",r),console.log("Email:",n),console.log("Comment:",s);const o=`https://your-energy.b.goit.study/api/exercises/${t}/rating`;fetch(o,{method:"PATCH",body:JSON.stringify({rate:r,email:n,comment:s}),headers:{"Content-Type":"application/json"}}).then(i=>i.json()).then(i=>{i.success?myModal2.style.display="none":alert(i.message)}).catch(i=>{console.error("Помилка:",i)})});let I,k;document.addEventListener("DOMContentLoaded",function(){I=document.getElementById("favoritesText"),k=document.getElementById("favoritesIcon");const e=document.getElementById("additionalButton1"),t=document.querySelector(".modal");e.addEventListener("click",()=>{const r=e.getAttribute("data-exercise-id"),n=document.querySelector(".title-modal").textContent,s=document.querySelector(".text-modal").textContent,o=t.querySelector(".burn-modal").textContent,i=t.querySelector(".modal-rating").textContent,u=t.querySelector(".modal-part").textContent,m=t.querySelector(".modal-equipment").textContent,c=t.querySelector(".modal-target").textContent,p=t.querySelector(".modal-popularity").textContent;let g=JSON.parse(localStorage.getItem("favoritesList"))||[];const f=g.findIndex(v=>v.exerciseID===r);f!==-1?(g.splice(f,1),localStorage.setItem("favoritesList",JSON.stringify(g)),alert("Exercise removed from favorites!")):(g.push({exerciseID:r,exerciseName:n,exerciseDescription:s,exerciseBurned:o,exercisePart:u,exerciseEquipment:m,exerciseTarget:c,exercisePopularity:p,exerciseRating:i}),localStorage.setItem("favoritesList",JSON.stringify(g)),alert("Exercise added to favorites!")),console.log("Exercise ID:",r),console.log("Exercise Name:",n),console.log("Exercise Description:",s),console.log("Favorites List:",g)}),additionalButton1.addEventListener("click",()=>{try{I&&(I.textContent="Add to favorites"),k&&k.setAttribute("xlink:href","./img/icon-sprite.svg#heart")}catch(r){console.error("Error while updating favorites:",r)}})});
