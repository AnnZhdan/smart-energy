(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();async function M(e,t,n){const s=`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=${n}`;try{const r=await fetch(s);if(!r.ok)throw new Error(`Request failed with status ${r.status}`);return await r.json()}catch(r){return console.error("Error fetching data:",r),null}}async function F(e,t,n,s,r,o){try{const i=`https://your-energy.b.goit.study/api/exercises?category=${e}&muscles=${t}&equipment=${n}&keyword=${s}&page=${r}&limit=${o}`,u=await fetch(i);if(!u.ok)throw new Error(`Request failed with status ${u.status}`);const g=await u.json();if(!g.results||g.results.length===0){console.log("No results found for your search parameters.");return}g.results.forEach((c,p)=>{console.log(`Exercise #${p+1}:`),console.log(`Name: ${c.name}`),console.log(`Description: ${c.description}`),console.log(`GIF URL: ${c.gifUrl}`),console.log(`Burned Calories: ${c.burnedCalories}`),console.log(`Duration: ${c.duration} minutes`),console.log(`Rating: ${c.rating}`),console.log("-----------------------------------")})}catch(i){console.error(`Error: ${i.message}`)}}async function H(e){try{const t=`https://your-energy.b.goit.study/api/exercises/${e}`,n=await fetch(t);if(!n.ok)throw new Error(`Request failed with status ${n.status}`);const s=await n.json();if(!s.results||s.results.length===0){console.log("Exercise not found for the specified exerciseID.");return}const r=document.getElementById("exercise-details"),o=s.results[0];r.innerHTML=`
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
        `}catch(t){console.error(`Error: ${t.message}`)}}async function J(){try{const e=await fetch("https://your-energy.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();if(t&&t.author&&t.quote)return console.log(`Quote of the day: "${t.quote}" - ${t.author}`),t;console.log("Failed to get the quote of the day.")}catch(e){console.error("Error while fetching the quote of the day:",e)}}M("Muscles",1,12).then(e=>{e&&console.log(e)});F("back","lats","barbell","pull",1,10);H("64f389465ae26083f39b17c2");(()=>{if(!document.querySelector("section.galary"))return;console.log(window.innerWidth);const t=document.querySelector(".galary-list"),n=document.querySelector(".galary-filters-button1"),s=document.querySelector(".galary-filters-button2"),r=document.querySelector(".galary-filters-button3"),o=document.querySelector(".pagination"),i=document.querySelector(".galary-title2 span"),u=document.querySelector(".galary-list"),g=document.querySelector(".galary-title-and-list-wrapper-ex"),c=document.querySelector(".galary-title-and-list-wrapper");let p="Body parts",m=n,y=o.children[0].firstElementChild,x=9;const R=window.screen.availWidth;function O(){if(R>=768)return x=12}O(),q(p,1,x),o.classList.add("is-hidden"),n.addEventListener("click",b),s.addEventListener("click",b),r.addEventListener("click",b);function b(l){l.preventDefault(),m.classList.remove("galary-filter-checked"),p=String(this.textContent),this.classList.add("galary-filter-checked"),q(p,1,x),m=this}function q(l,f,E){o.classList.add("is-hidden"),t.innerHTML="",M(l,f,E).then(d=>{if(d)switch(t.insertAdjacentHTML("beforeend",h(d.results)),d.totalPages){case 1:o.classList.remove("is-hidden"),o.children[1].classList.add("is-hidden"),o.children[2].classList.add("is-hidden");break;case 2:o.classList.remove("is-hidden"),o.children[1].classList.remove("is-hidden"),o.children[2].classList.add("is-hidden");break;case 3:o.classList.remove("is-hidden"),o.children[1].classList.remove("is-hidden"),o.children[2].classList.remove("is-hidden");break;default:console.log("Something is wrong!")}});function h(d){return d.map(({filter:v,name:w,imgURL:B})=>`
           <li class="galary-item">
              <img
                src="${B}"
                alt="${w}"
                loading="lazy"
                class="galary-item-img"
              />
              <h3 class="galary-item-subtitle">${l}</h3>
              <p class="galery-item-text">${w.charAt(0).toUpperCase()+w.slice(1)}</p>
            </li> `).join("")}}o.children[0].addEventListener("click",S),o.children[1].addEventListener("click",S),o.children[2].addEventListener("click",S);function S(l){if(this.firstElementChild.classList!==y.classList){this.firstElementChild.classList.add("current-page"),y.classList.remove("current-page"),y=this.firstElementChild;let f=Number(y.textContent);console.log(f),q(p,f)}}t.addEventListener("click",N);function N(l){t.innerHTML="",U("back",1,x)}async function U(l,f,E){try{const h=`https://your-energy.b.goit.study/api/exercises?category=${l}&page=${f}&limit=${E}`,d=await fetch(h);if(!d.ok)throw new Error(`Request failed with status ${d.status}`);const v=await d.json();if(!v.results||v.results.length===0){console.log("No results found for your search parameters.");return}g.classList.remove("is-hidden"),c.classList.add("is-hidden"),u.insertAdjacentHTML("beforeend",j(v.results)),i.textContent=`${l}`}catch(h){console.error(`Error: ${h.message}`)}}function j(l){return l.map(({name:f,target:E,rating:h,burnedCalories:d,time:v,id:w,bodyPart:B})=>`
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
         `).join("")}})();const G=document.getElementById("closeModalButton"),K=document.getElementById("additionalButton2"),Q=document.getElementById("closeModalButton2"),a=document.getElementById("myModal"),P=document.getElementById("myModal2");let k=null,A=null;function T(e){a.style.display="block";const t=a.querySelector("img"),n=a.querySelector("h2"),s=a.querySelector(".text-modal"),r=a.querySelector(".burn-modal"),o=a.querySelector(".modal-rating"),i=a.querySelector(".modal-part"),u=a.querySelector(".modal-equipment"),g=a.querySelector(".modal-target"),c=a.querySelector(".modal-popularity");t.src=e.gifUrl,n.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),s.textContent=e.description,r.textContent=`${e.burnedCalories}/${e.time} min`,i.textContent=e.bodyPart,u.textContent=e.equipment,g.textContent=e.target,c.textContent=e.popularity,o.textContent=e.rating,k=e}async function W(e){try{const t=await _(e);if(!t){console.error("Не вдалося отримати дані про вправу.");return}T(t),A=e}catch(t){console.error(`Помилка: ${t.message}`)}}async function _(e){try{const t=await fetch(`https://your-energy.b.goit.study/api/exercises/${e}`);if(!t.ok)throw new Error("Помилка запиту до API");return await t.json()}catch(t){return console.error("Помилка при отриманні даних про вправу:",t),null}}const V=document.querySelectorAll(".exercise-item-button");V.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("id");W(t)})});G.addEventListener("click",()=>a.style.display="none");K.addEventListener("click",()=>{a.style.display="none",k&&A&&(T(k),P.style.display="block")});Q.addEventListener("click",()=>P.style.display="none");a.style.display="none";P.style.display="none";const D="quote",z=document.querySelector(".qoute-inside-container");async function Y(){try{const e=await J();if(console.log("Server Response:",e),!e||!e.quote||!e.author)throw new Error("Invalid data received from the server");X(e),Z(e)}catch(e){console.log(e.message)}}function X({quote:e,author:t}){z.innerHTML=`<div class="qoute-inside-container">
        <p class="quotes-day-text">${e}</p>
        <p class="quotes-day-author">${t}</p>
    </div>`}function Z({quote:e,author:t}){const n={quote:e,author:t,date:new Date().getDate()};try{const s=JSON.stringify(n);localStorage.setItem(D,s)}catch(s){console.log(s.message)}}async function ee(){try{const e=localStorage.getItem(D);if(e){let t=JSON.parse(e),n=new Date().getDate();t.date!==n&&await Y()}}catch(e){console.log(e.message)}}ee();const L=document.querySelectorAll(".rating-container label"),$=document.querySelectorAll(".rating-container label svg use");L.forEach((e,t)=>{e.addEventListener("click",n=>{for(let s=0;s<L.length;s++)s<=t?$[s].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):$[s].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("focus",n=>{for(let s=0;s<=t;s++)$[s].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let s=t+1;s<L.length;s++)$[s].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("blur",n=>{for(let s=0;s<L.length;s++)$[s].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const te=document.getElementById("selectedRat");L.forEach((e,t)=>{e.addEventListener("click",n=>{const s=(t+1).toFixed(1);te.textContent=s})});const oe=document.getElementById("ratingForm");document.getElementById("submitRatingButton");const se=document.getElementById("selectedRat"),re=document.getElementById("emailInput"),ne=document.getElementById("commentInput");oe.addEventListener("submit",e=>{e.preventDefault();const t="64f389465ae26083f39b17df",n=parseFloat(se.textContent),s=re.value,r=ne.value;if(!s){alert("The email field is required");return}console.log("Exercise ID:",t),console.log("Rate:",n),console.log("Email:",s),console.log("Comment:",r);const o=`https://your-energy.b.goit.study/api/exercises/${t}/rating`;fetch(o,{method:"PATCH",body:JSON.stringify({rate:n,email:s,comment:r}),headers:{"Content-Type":"application/json"}}).then(i=>i.json()).then(i=>{i.success?myModal2.style.display="none":alert(i.message)}).catch(i=>{console.error("Помилка:",i)})});let I,C;document.addEventListener("DOMContentLoaded",function(){I=document.getElementById("favoritesText"),C=document.getElementById("favoritesIcon");const e=document.getElementById("additionalButton1"),t=document.querySelector(".modal");e.addEventListener("click",()=>{const n=e.getAttribute("data-exercise-id"),s=document.querySelector(".title-modal").textContent,r=document.querySelector(".text-modal").textContent,o=t.querySelector(".burn-modal").textContent,i=t.querySelector(".modal-rating").textContent,u=t.querySelector(".modal-part").textContent,g=t.querySelector(".modal-equipment").textContent,c=t.querySelector(".modal-target").textContent,p=t.querySelector(".modal-popularity").textContent;let m=JSON.parse(localStorage.getItem("favoritesList"))||[];const y=m.findIndex(x=>x.exerciseID===n);y!==-1?(m.splice(y,1),localStorage.setItem("favoritesList",JSON.stringify(m)),alert("Exercise removed from favorites!")):(m.push({exerciseID:n,exerciseName:s,exerciseDescription:r,exerciseBurned:o,exercisePart:u,exerciseEquipment:g,exerciseTarget:c,exercisePopularity:p,exerciseRating:i}),localStorage.setItem("favoritesList",JSON.stringify(m)),alert("Exercise added to favorites!")),console.log("Exercise ID:",n),console.log("Exercise Name:",s),console.log("Exercise Description:",r),console.log("Favorites List:",m)}),additionalButton1.addEventListener("click",()=>{try{I&&(I.textContent="Add to favorites"),C&&C.setAttribute("xlink:href","./img/icon-sprite.svg#heart")}catch(n){console.error("Error while updating favorites:",n)}})});
