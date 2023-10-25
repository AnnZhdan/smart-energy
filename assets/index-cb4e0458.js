import{f as W,s as _}from"./quote-7882ce2e.js";(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu");document.getElementById("overlay");const s=()=>{const y=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!y),t.classList.toggle("is-open")};e.addEventListener("click",s),n.addEventListener("click",s),window.addEventListener("resize",()=>{window.innerWidth>768&&t.classList.remove("is-open")}),document.addEventListener("DOMContentLoaded",function(){const y=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){y.style.display="none"})})})();(()=>{if(!document.querySelector("section.galary"))return;console.log(window.innerWidth);const e=document.querySelector(".galary-list"),n=document.querySelector(".galary-filters-button1"),s=document.querySelector(".galary-filters-button2"),y=document.querySelector(".galary-filters-button3"),c=document.querySelector(".pagination"),h=document.querySelector(".galary-title2 span"),g=document.querySelector(".galary-list"),S=document.querySelector(".galary-title-and-list-wrapper-ex"),L=document.querySelector(".galary-title-and-list-wrapper");let v="Body parts",x=n,p=c.children[0].firstElementChild,m=9;const R=window.screen.availWidth;function O(){if(R>=768)return m=12}O(),$(v,1,m);let B=$;c.classList.add("is-hidden"),n.addEventListener("click",C),s.addEventListener("click",C),y.addEventListener("click",C);function C(o){o.preventDefault(),x.classList.remove("galary-filter-checked"),v=String(this.textContent),this.classList.add("galary-filter-checked"),$(v,1,m),x=this}function $(o,r,a=m){c.classList.add("is-hidden"),e.innerHTML="",W(o,r,a).then(i=>{i&&(e.insertAdjacentHTML("beforeend",l(i.results)),M(i.totalPages,r))});function l(i){return i.map(({filter:d,name:u,imgURL:f})=>`
           <li class="galary-item" data-name="${u}">
              <img
                src="${f}"
                alt="${u}"
                loading="lazy"
                class="galary-item-img"
              />
              <h3 class="galary-item-subtitle">${o}</h3>
              <p class="galery-item-text">${u.charAt(0).toUpperCase()+u.slice(1)}</p>
            </li> `).join("")}}c.addEventListener("click",F);function F(o){var a;const r=o.target.closest(".pagination-button");if(r&&r.classList!==p.classList){r.classList.add("current-page"),p.classList.remove("current-page"),p=r;const l=Number(p.textContent);console.log(l),B(v,l),(a=document.getElementsByClassName("galary-title-and-list-wrapper")[0])==null||a.scrollIntoView({behavior:"smooth"})}}e.addEventListener("click",U);function U(o){console.log(o);const r=o.target.closest(".galary-item");if(!r)return;const a=r.dataset.name;e.innerHTML="",P(a,1,m),v=a,B=P}async function P(o,r,a=m){try{const l=`https://your-energy.b.goit.study/api/exercises?category=${o}&page=${r}&limit=${a}`,i=await fetch(l);if(!i.ok)throw new Error(`Request failed with status ${i.status}`);const d=await i.json();if(!d.results||d.results.length===0){console.log("No results found for your search parameters.");return}M(d.totalPages,r),S.classList.remove("is-hidden"),L.classList.add("is-hidden"),g.insertAdjacentHTML("beforeend",N(d.results)),h.textContent=`${o}`}catch(l){console.error(`Error: ${l.message}`)}}function N(o){return o.map(({name:r,target:a,rating:l,burnedCalories:i,time:d,_id:u,bodyPart:f})=>`
               <li class="exercise-item">
          <div class="exercise-item-wrapper">
            <div class="exercise-item-firth-wrapper">
              <p class="exercise-item-workout">WORKOUT</p>
              <p class="exercise-item-rating">${l}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 100 130"
                class="exercise-item-star"
              >
                <use href="./img/icon-sprite.svg#icon-Star-2"></use>
              </svg>
              <button type="button" class="exercise-item-button" id=${u}>
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
              <h3 class="exercise-item-subtitle">${r}</h3>
            </div>
            <ul class="exercise-item-list">
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Burned calories:<span class="information-text-span"
                    >${i} / ${d} min</span
                  >
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Body part:<span class="information-text-span">${f}</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Target:<span class="information-text-span">${a}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
         `).join("")}document.querySelector(".galary-search-wrapper input").addEventListener("input",D);async function H(o,r,a,l=m){try{const i=`https://your-energy.b.goit.study/api/exercises?bodypart=back&page=${r}&limit=${l}&keyword=${a}`,d=await fetch(i);if(!d.ok)throw new Error(`Request failed with status ${d.status}`);const u=await d.json();if(!u.results||u.results.length===0){console.log("No results found for your search parameters.");return}M(u.totalPages,r),S.classList.remove("is-hidden"),L.classList.add("is-hidden"),g.insertAdjacentHTML("beforeend",N(u.results)),h.textContent=`${o}`}catch(i){console.error(`Error: ${i.message}`)}}function D(o){console.log(o);const r=o.target.value;B=(a,l,i)=>H(a,l,r,i)}function M(o,r=1){var d,u;const a=document.getElementsByClassName("pagination")[0],l=f=>`
      <li>
        <button type="button" class="pagination-button">${f}</button>
      </li>`,i=[];for(let f=1;f<=o;f++)i.push(l(f));a.innerHTML=i.join(`
`),p=(d=c.children[r-1])==null?void 0:d.firstElementChild,(u=p==null?void 0:p.classList)==null||u.add("current-page"),a.classList.remove("is-hidden")}})();let j=null,z=!1;document.getElementById("closeModalButton");const J=document.getElementById("additionalButton2"),K=document.getElementById("closeModalButton2"),I=document.getElementById("myModal"),b=document.getElementById("myModal2");function V(t,e){e.style.display="block";const n=e.querySelector("img"),s=e.querySelector("h2"),y=e.querySelector(".text-modal"),c=e.querySelector(".burn-modal"),h=e.querySelector(".modal-rating"),g=e.querySelector(".modal-part"),S=e.querySelector(".modal-equipment"),L=e.querySelector(".modal-target"),v=e.querySelector(".modal-popularity");n.src=t.gifUrl,s.textContent=t.name.charAt(0).toUpperCase()+t.name.slice(1),y.textContent=t.description,c.textContent=`${t.burnedCalories} cal / ${t.time} min`,g.textContent=t.bodyPart,S.textContent=t.equipment,L.textContent=t.target,v.textContent=t.popularity,h.textContent=t.rating,e.addEventListener("click",m=>{m.target===e&&q(e)});const x=m=>{m.key==="Escape"&&e.style.display==="block"&&(q(e),document.removeEventListener("keydown",x))};document.addEventListener("keydown",x),e.querySelector(".close-button").addEventListener("click",()=>{q(e),document.removeEventListener("keydown",x)})}function Z(){q(I),b.style.display="block",document.addEventListener("keydown",k)}J.addEventListener("click",()=>{Z()});async function G(t,e){try{const n=await Y(t);if(!n){console.error("Не вдалося отримати дані про вправу.");return}V(n,e),j=t,e===I&&(z=!0)}catch(n){console.error(`Помилка: ${n.message}`)}}async function Y(t){try{const e=await fetch(`https://your-energy.b.goit.study/api/exercises/${t}`);if(!e.ok)throw new Error("Помилка запиту до API");return await e.json()}catch(e){return console.error("Помилка при отриманні даних про вправу:",e),null}}document.addEventListener("click",t=>{const e=t.target.closest(".exercise-item-button");if(!e)return;const n=e.getAttribute("id");G(n,I)});function q(t){t.style.display="none"}function A(){b.style.display="none"}K.addEventListener("click",()=>{A(),document.removeEventListener("keydown",k)});b.addEventListener("click",t=>{t.target===b&&A()});const k=t=>{t.key==="Escape"&&b.style.display==="block"&&(A(),document.removeEventListener("keydown",k))};document.addEventListener("keydown",k);const w=document.querySelectorAll(".rating-container label"),E=document.querySelectorAll(".rating-container label svg use");w.forEach((t,e)=>{t.addEventListener("click",n=>{for(let s=0;s<w.length;s++)s<=e?E[s].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):E[s].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),t.addEventListener("focus",n=>{for(let s=0;s<=e;s++)E[s].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let s=e+1;s<w.length;s++)E[s].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),t.addEventListener("blur",n=>{for(let s=0;s<w.length;s++)E[s].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const Q=document.getElementById("selectedRat");w.forEach((t,e)=>{t.addEventListener("click",n=>{const s=(e+1).toFixed(1);Q.textContent=s})});const X=document.getElementById("ratingForm"),ee=document.getElementById("selectedRat"),te=document.getElementById("emailInput"),ne=document.getElementById("commentInput");X.addEventListener("submit",async t=>{t.preventDefault();const e=parseFloat(ee.textContent),n=te.value,s=ne.value;if(!se(n)){alert("Введіть коректний email");return}const c=await re(j);if(c){const g=JSON.stringify({rate:e,email:n,review:s});await _(c,e,g),myModal2.style.display="none"}else alert("Помилка: не вдалося знайти вправу.")});function se(t){return/^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/.test(t)}async function re(t){try{const e=`https://your-energy.b.goit.study/api/exercises/${t}`,n=await fetch(e);if(!n.ok)throw new Error(`Request to get exercise by _id failed with status ${n.status}`);return(await n.json())._id}catch(e){return console.error(`Error: ${e.message}`),null}}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("additionalButton1"),e=document.getElementById("myModal");let n=JSON.parse(localStorage.getItem("favoritesList"))||[];t.addEventListener("click",()=>{const c={exerciseID:t.getAttribute("data-exercise-id"),exerciseName:e.querySelector(".title-modal").textContent,exerciseDescription:e.querySelector(".text-modal").textContent,exerciseBurned:e.querySelector(".burn-modal").textContent,exerciseRating:e.querySelector(".modal-rating").textContent,exercisePart:e.querySelector(".modal-part").textContent,exerciseEquipment:e.querySelector(".modal-equipment").textContent,exerciseTarget:e.querySelector(".modal-target").textContent,exercisePopularity:e.querySelector(".modal-popularity").textContent};n.find(g=>g.exerciseName===c.exerciseName)?(n=n.filter(g=>g.exerciseName!==c.exerciseName),alert("Exercise removed from favorites!"),t.querySelector(".button-name-favorites").textContent="Add to favorites",t.querySelector(".favorites-svg use").setAttribute("xlink:href","./img/icon-sprite.svg#heart")):(n.push(c),alert("Exercise added to favorites!"),t.querySelector(".button-name-favorites").textContent="Remove from favorites",t.querySelector(".favorites-svg use").setAttribute("xlink:href","./img/icon-sprite.svg#trash")),localStorage.setItem("favoritesList",JSON.stringify(n))});const s=e.querySelector(".title-modal").textContent;n.some(c=>c.exerciseName===s)&&(t.querySelector(".button-name-favorites").textContent="Remove from favorites",t.querySelector(".favorites-svg use").setAttribute("xlink:href","./img/icon-sprite.svg#heart-filled"))});const oe=document.querySelector(".scroll-up");oe.addEventListener("click",()=>{window.scrollTo(0,0)});const T=document.querySelector(".scroll-up");window.onscroll=()=>{window.scrollY>768?T.classList.remove("btn-hidden"):window.scrollY<768&&T.classList.add("btn-hidden")};
