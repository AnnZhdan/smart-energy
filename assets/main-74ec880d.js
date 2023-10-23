(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();async function M(e,t,s){const r=`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=${s}`;try{const n=await fetch(r);if(!n.ok)throw new Error(`Request failed with status ${n.status}`);return await n.json()}catch(n){return console.error("Error fetching data:",n),null}}async function U(e,t,s,r,n,o){try{const i=`https://your-energy.b.goit.study/api/exercises?category=${e}&muscles=${t}&equipment=${s}&keyword=${r}&page=${n}&limit=${o}`,u=await fetch(i);if(!u.ok)throw new Error(`Request failed with status ${u.status}`);const g=await u.json();if(!g.results||g.results.length===0){console.log("No results found for your search parameters.");return}g.results.forEach((c,p)=>{console.log(`Exercise #${p+1}:`),console.log(`Name: ${c.name}`),console.log(`Description: ${c.description}`),console.log(`GIF URL: ${c.gifUrl}`),console.log(`Burned Calories: ${c.burnedCalories}`),console.log(`Duration: ${c.duration} minutes`),console.log(`Rating: ${c.rating}`),console.log("-----------------------------------")})}catch(i){console.error(`Error: ${i.message}`)}}async function F(e){try{const t=`https://your-energy.b.goit.study/api/exercises/${e}`,s=await fetch(t);if(!s.ok)throw new Error(`Request failed with status ${s.status}`);const r=await s.json();if(!r.results||r.results.length===0){console.log("Exercise not found for the specified exerciseID.");return}const n=document.getElementById("exercise-details"),o=r.results[0];n.innerHTML=`
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
        `}catch(t){console.error(`Error: ${t.message}`)}}async function j(){try{const e=await fetch("https://your-energy.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();if(t&&t.author&&t.quote)return console.log(`Quote of the day: "${t.quote}" - ${t.author}`),t;console.log("Failed to get the quote of the day.")}catch(e){console.error("Error while fetching the quote of the day:",e)}}M("Muscles",1,12).then(e=>{e&&console.log(e)});U("back","lats","barbell","pull",1,10);F("64f389465ae26083f39b17c2");(()=>{if(!document.querySelector("section.galary"))return;console.log(window.innerWidth);const t=document.querySelector(".galary-list"),s=document.querySelector(".galary-filters-button1"),r=document.querySelector(".galary-filters-button2"),n=document.querySelector(".galary-filters-button3"),o=document.querySelector(".pagination"),i=document.querySelector(".galary-title2 span"),u=document.querySelector(".galary-list"),g=document.querySelector(".galary-title-and-list-wrapper-ex"),c=document.querySelector(".galary-title-and-list-wrapper");let p="Body parts",m=s,y=o.children[0].firstElementChild,x=9;const D=window.screen.availWidth;function T(){if(D>=768)return x=12}T(),q(p,1,x),o.classList.add("is-hidden"),s.addEventListener("click",S),r.addEventListener("click",S),n.addEventListener("click",S);function S(l){l.preventDefault(),m.classList.remove("galary-filter-checked"),p=String(this.textContent),this.classList.add("galary-filter-checked"),q(p,1,x),m=this}function q(l,f,E){o.classList.add("is-hidden"),t.innerHTML="",M(l,f,E).then(d=>{if(d)switch(t.insertAdjacentHTML("beforeend",h(d.results)),d.totalPages){case 1:o.classList.remove("is-hidden"),o.children[1].classList.add("is-hidden"),o.children[2].classList.add("is-hidden");break;case 2:o.classList.remove("is-hidden"),o.children[1].classList.remove("is-hidden"),o.children[2].classList.add("is-hidden");break;case 3:o.classList.remove("is-hidden"),o.children[1].classList.remove("is-hidden"),o.children[2].classList.remove("is-hidden");break;default:console.log("Something is wrong!")}});function h(d){return d.map(({filter:v,name:w,imgURL:B})=>`
           <li class="galary-item">
              <img
                src="${B}"
                alt="${w}"
                loading="lazy"
                class="galary-item-img"
              />
              <h3 class="galary-item-subtitle">${l}</h3>
              <p class="galery-item-text">${w.charAt(0).toUpperCase()+w.slice(1)}</p>
            </li> `).join("")}}o.children[0].addEventListener("click",b),o.children[1].addEventListener("click",b),o.children[2].addEventListener("click",b);function b(l){if(this.firstElementChild.classList!==y.classList){this.firstElementChild.classList.add("current-page"),y.classList.remove("current-page"),y=this.firstElementChild;let f=Number(y.textContent);console.log(f),q(p,f)}}t.addEventListener("click",O);function O(l){t.innerHTML="",R("back",1,x)}async function R(l,f,E){try{const h=`https://your-energy.b.goit.study/api/exercises?category=${l}&page=${f}&limit=${E}`,d=await fetch(h);if(!d.ok)throw new Error(`Request failed with status ${d.status}`);const v=await d.json();if(!v.results||v.results.length===0){console.log("No results found for your search parameters.");return}g.classList.remove("is-hidden"),c.classList.add("is-hidden"),u.insertAdjacentHTML("beforeend",N(v.results)),i.textContent=`${l}`}catch(h){console.error(`Error: ${h.message}`)}}function N(l){return l.map(({name:f,target:E,rating:h,burnedCalories:d,time:v,id:w,bodyPart:B})=>`
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
              <h3 class="exercise-item-subtitle">${f}</h3>
            </div>
            <ul class="exercise-item-list">
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Burned calories:<span class="information-text-span"
                    >${d} / ${v} min</span
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
         `).join("")}})();const H=document.getElementById("closeModalButton"),J=document.getElementById("additionalButton2"),G=document.getElementById("closeModalButton2"),a=document.getElementById("myModal"),I=document.getElementById("myModal2");function K(e){a.style.display="block";const t=a.querySelector("img"),s=a.querySelector("h2"),r=a.querySelector(".text-modal"),n=a.querySelector(".burn-modal"),o=a.querySelector(".modal-rating"),i=a.querySelector(".modal-part"),u=a.querySelector(".modal-equipment"),g=a.querySelector(".modal-target"),c=a.querySelector(".modal-popularity");t.src=e.gifUrl,s.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),r.textContent=e.description,n.textContent=`${e.burnedCalories}/${e.time} min`,i.textContent=e.bodyPart,u.textContent=e.equipment,g.textContent=e.target,c.textContent=e.popularity,o.textContent=e.rating}async function Q(e){try{const t=await W(e);if(!t){console.error("Не вдалося отримати дані про вправу.");return}K(t)}catch(t){console.error(`Помилка: ${t.message}`)}}async function W(e){try{const t=await fetch(`https://your-energy.b.goit.study/api/exercises/${e}`);if(!t.ok)throw new Error("Помилка запиту до API");return await t.json()}catch(t){return console.error("Помилка при отриманні даних про вправу:",t),null}}const _=document.querySelectorAll(".exercise-item-button");_.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("id");Q(t)})});H.addEventListener("click",()=>a.style.display="none");J.addEventListener("click",()=>{a.style.display="none",I.style.display="block"});G.addEventListener("click",()=>I.style.display="none");a.style.display="none";I.style.display="none";const A="quote",V=document.querySelector(".qoute-inside-container");async function z(){try{const e=await j();if(console.log("Server Response:",e),!e||!e.quote||!e.author)throw new Error("Invalid data received from the server");Y(e),X(e)}catch(e){console.log(e.message)}}function Y({quote:e,author:t}){V.innerHTML=`<div class="qoute-inside-container">
        <p class="quotes-day-text">${e}</p>
        <p class="quotes-day-author">${t}</p>
    </div>`}function X({quote:e,author:t}){const s={quote:e,author:t,date:new Date().getDate()};try{const r=JSON.stringify(s);localStorage.setItem(A,r)}catch(r){console.log(r.message)}}async function Z(){try{const e=localStorage.getItem(A);if(e){let t=JSON.parse(e),s=new Date().getDate();t.date!==s&&await z()}}catch(e){console.log(e.message)}}Z();const $=document.querySelectorAll(".rating-container label"),L=document.querySelectorAll(".rating-container label svg use");$.forEach((e,t)=>{e.addEventListener("click",s=>{for(let r=0;r<$.length;r++)r<=t?L[r].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):L[r].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("focus",s=>{for(let r=0;r<=t;r++)L[r].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let r=t+1;r<$.length;r++)L[r].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("blur",s=>{for(let r=0;r<$.length;r++)L[r].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const ee=document.getElementById("selectedRat");$.forEach((e,t)=>{e.addEventListener("click",s=>{const r=(t+1).toFixed(1);ee.textContent=r})});const P=document.getElementById("ratingForm");document.getElementById("submitRatingButton");P.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(P);fetch("url",{method:"POST",body:t}).then(s=>s.json()).then(s=>{s.success?myModal2.style.display="none":alert(s.message)}).catch(s=>{console.error("Помилка:",s)})});let k,C;document.addEventListener("DOMContentLoaded",function(){k=document.getElementById("favoritesText"),C=document.getElementById("favoritesIcon");const e=document.getElementById("additionalButton1"),t=document.querySelector(".modal");e.addEventListener("click",()=>{const s=e.getAttribute("data-exercise-id"),r=document.querySelector(".title-modal").textContent,n=document.querySelector(".text-modal").textContent,o=t.querySelector(".burn-modal").textContent,i=t.querySelector(".modal-rating").textContent,u=t.querySelector(".modal-part").textContent,g=t.querySelector(".modal-equipment").textContent,c=t.querySelector(".modal-target").textContent,p=t.querySelector(".modal-popularity").textContent;let m=JSON.parse(localStorage.getItem("favoritesList"))||[];const y=m.findIndex(x=>x.exerciseID===s);y!==-1?(m.splice(y,1),localStorage.setItem("favoritesList",JSON.stringify(m)),alert("Exercise removed from favorites!")):(m.push({exerciseID:s,exerciseName:r,exerciseDescription:n,exerciseBurned:o,exercisePart:u,exerciseEquipment:g,exerciseTarget:c,exercisePopularity:p,exerciseRating:i}),localStorage.setItem("favoritesList",JSON.stringify(m)),alert("Exercise added to favorites!")),console.log("Exercise ID:",s),console.log("Exercise Name:",r),console.log("Exercise Description:",n),console.log("Favorites List:",m)}),additionalButton1.addEventListener("click",()=>{try{k&&(k.textContent="Add to favorites"),C&&C.setAttribute("xlink:href","./img/icon-sprite.svg#heart")}catch(s){console.error("Error while updating favorites:",s)}})});
