import{f as Z,s as G}from"./quote-7882ce2e.js";(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu");document.getElementById("overlay");const o=()=>{const y=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!y),t.classList.toggle("is-open")};e.addEventListener("click",o),s.addEventListener("click",o),window.addEventListener("resize",()=>{window.innerWidth>768&&t.classList.remove("is-open")}),document.addEventListener("DOMContentLoaded",function(){const y=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){y.style.display="none"})})})();(()=>{if(!document.querySelector("section.galary"))return;console.log(window.innerWidth);const e=document.querySelector(".galary-list"),s=document.querySelector(".galary-filters-button1"),o=document.querySelector(".galary-filters-button2"),y=document.querySelector(".galary-filters-button3"),c=document.querySelector(".pagination"),v=document.querySelector(".galary-title2 span"),g=document.querySelector(".galary-list"),L=document.querySelector(".galary-title-and-list-wrapper-ex"),q=document.querySelector(".galary-title-and-list-wrapper");let h="Body parts",x=s,p=c.children[0].firstElementChild,m=9,T=3,N=5,E=[];const j=window.screen.availWidth;function H(){if(j>=768)return T=10,N=15}H();function D(){if(j>=768)return m=12}D(),M(h,1,m);let C=M;c.classList.add("is-hidden"),s.addEventListener("click",$),o.addEventListener("click",$),y.addEventListener("click",$);function $(r){r.preventDefault(),x.classList.remove("galary-filter-checked"),h=String(this.textContent),this.classList.add("galary-filter-checked"),M(h,1,m),x=this}function M(r,n,a=m){c.classList.add("is-hidden"),e.innerHTML="",Z(r,n,a).then(i=>{i&&(e.insertAdjacentHTML("beforeend",l(i.results)),I(i.totalPages,n))});function l(i){return i.map(({filter:d,name:u,imgURL:f})=>`
           <li class="galary-item" data-name="${u}">
              <img
                src="${f}"
                alt="${u}"
                loading="lazy"
                class="galary-item-img"
              />
              <h3 class="galary-item-subtitle">${r}</h3>
              <p class="galery-item-text">${u.charAt(0).toUpperCase()+u.slice(1)}</p>
            </li> `).join("")}}c.addEventListener("click",_);function _(r){var a;const n=r.target.closest(".pagination-button");if(n&&n.classList!==p.classList){n.classList.add("current-page"),p.classList.remove("current-page"),p=n;const l=Number(p.textContent);console.log(l),C(h,l),(a=document.getElementsByClassName("galary-title-and-list-wrapper")[0])==null||a.scrollIntoView({behavior:"smooth"})}}e.addEventListener("click",z);function z(r){console.log(r);const n=r.target.closest(".galary-item");if(!n)return;const a=n.dataset.name;e.innerHTML="",R(a,1,m),h=a,C=R}async function R(r,n,a=m){try{const l=`https://your-energy.b.goit.study/api/exercises?category=${r}&page=${n}&limit=${a}`,i=await fetch(l);if(!i.ok)throw new Error(`Request failed with status ${i.status}`);const d=await i.json();if(!d.results||d.results.length===0){console.log("No results found for your search parameters.");return}I(d.totalPages,n),L.classList.remove("is-hidden"),q.classList.add("is-hidden"),J(d.results),console.log(E),g.insertAdjacentHTML("beforeend",O(E)),v.textContent=`${r}`}catch(l){console.error(`Error: ${l.message}`)}}function J(r){for(let n=0;n<r.length;n++)r[n].target=F(r[n].target,T),r[n].bodyPart=F(r[n].bodyPart,N),E.push(r[n]);console.log(E)}function O(r){return E.map(({name:n,target:a,rating:l,burnedCalories:i,time:d,_id:u,bodyPart:f})=>`
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
              <h3 class="exercise-item-subtitle">${n}</h3>
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
         `).join("")}function F(r,n){return r.length>n&&(r=r.slice(0,n)+"..."),r}document.querySelector(".galary-search-wrapper input").addEventListener("input",V);async function K(r,n,a,l=m){try{const i=`https://your-energy.b.goit.study/api/exercises?bodypart=back&page=${n}&limit=${l}&keyword=${a}`,d=await fetch(i);if(!d.ok)throw new Error(`Request failed with status ${d.status}`);const u=await d.json();if(!u.results||u.results.length===0){console.log("No results found for your search parameters.");return}I(u.totalPages,n),L.classList.remove("is-hidden"),q.classList.add("is-hidden"),g.insertAdjacentHTML("beforeend",O(u.results)),v.textContent=`${r}`}catch(i){console.error(`Error: ${i.message}`)}}function V(r){console.log(r);const n=r.target.value;C=(a,l,i)=>K(a,l,n,i)}function I(r,n=1){var d,u;const a=document.getElementsByClassName("pagination")[0],l=f=>`
      <li>
        <button type="button" class="pagination-button">${f}</button>
      </li>`,i=[];for(let f=1;f<=r;f++)i.push(l(f));a.innerHTML=i.join(`
`),p=(d=c.children[n-1])==null?void 0:d.firstElementChild,(u=p==null?void 0:p.classList)==null||u.add("current-page"),a.classList.remove("is-hidden")}})();let W=null,Y=!1;document.getElementById("closeModalButton");const Q=document.getElementById("additionalButton2"),X=document.getElementById("closeModalButton2"),A=document.getElementById("myModal"),S=document.getElementById("myModal2");function ee(t,e){e.style.display="block";const s=e.querySelector("img"),o=e.querySelector("h2"),y=e.querySelector(".text-modal"),c=e.querySelector(".burn-modal"),v=e.querySelector(".modal-rating"),g=e.querySelector(".modal-part"),L=e.querySelector(".modal-equipment"),q=e.querySelector(".modal-target"),h=e.querySelector(".modal-popularity");s.src=t.gifUrl,o.textContent=t.name.charAt(0).toUpperCase()+t.name.slice(1),y.textContent=t.description,c.textContent=`${t.burnedCalories} cal / ${t.time} min`,g.textContent=t.bodyPart,L.textContent=t.equipment,q.textContent=t.target,h.textContent=t.popularity,v.textContent=t.rating,e.addEventListener("click",m=>{m.target===e&&k(e)});const x=m=>{m.key==="Escape"&&e.style.display==="block"&&(k(e),document.removeEventListener("keydown",x))};document.addEventListener("keydown",x),e.querySelector(".close-button").addEventListener("click",()=>{k(e),document.removeEventListener("keydown",x)})}function te(){k(A),S.style.display="block",document.addEventListener("keydown",B)}Q.addEventListener("click",()=>{te()});async function ne(t,e){try{const s=await se(t);if(!s){console.error("Не вдалося отримати дані про вправу.");return}ee(s,e),W=t,e===A&&(Y=!0)}catch(s){console.error(`Помилка: ${s.message}`)}}async function se(t){try{const e=await fetch(`https://your-energy.b.goit.study/api/exercises/${t}`);if(!e.ok)throw new Error("Помилка запиту до API");return await e.json()}catch(e){return console.error("Помилка при отриманні даних про вправу:",e),null}}document.addEventListener("click",t=>{const e=t.target.closest(".exercise-item-button");if(!e)return;const s=e.getAttribute("id");ne(s,A)});function k(t){t.style.display="none"}function P(){S.style.display="none"}X.addEventListener("click",()=>{P(),document.removeEventListener("keydown",B)});S.addEventListener("click",t=>{t.target===S&&P()});const B=t=>{t.key==="Escape"&&S.style.display==="block"&&(P(),document.removeEventListener("keydown",B))};document.addEventListener("keydown",B);const b=document.querySelectorAll(".rating-container label"),w=document.querySelectorAll(".rating-container label svg use");b.forEach((t,e)=>{t.addEventListener("click",s=>{for(let o=0;o<b.length;o++)o<=e?w[o].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):w[o].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),t.addEventListener("focus",s=>{for(let o=0;o<=e;o++)w[o].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let o=e+1;o<b.length;o++)w[o].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),t.addEventListener("blur",s=>{for(let o=0;o<b.length;o++)w[o].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const re=document.getElementById("selectedRat");b.forEach((t,e)=>{t.addEventListener("click",s=>{const o=(e+1).toFixed(1);re.textContent=o})});const oe=document.getElementById("ratingForm"),ie=document.getElementById("selectedRat"),ae=document.getElementById("emailInput"),ce=document.getElementById("commentInput");oe.addEventListener("submit",async t=>{t.preventDefault();const e=parseFloat(ie.textContent),s=ae.value,o=ce.value;if(!le(s)){alert("Введіть коректний email");return}const c=await de(W);if(c){const g=JSON.stringify({rate:e,email:s,review:o});await G(c,e,g),myModal2.style.display="none"}else alert("Помилка: не вдалося знайти вправу.")});function le(t){return/^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/.test(t)}async function de(t){try{const e=`https://your-energy.b.goit.study/api/exercises/${t}`,s=await fetch(e);if(!s.ok)throw new Error(`Request to get exercise by _id failed with status ${s.status}`);return(await s.json())._id}catch(e){return console.error(`Error: ${e.message}`),null}}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("additionalButton1"),e=document.getElementById("myModal");let s=JSON.parse(localStorage.getItem("favoritesList"))||[];t.addEventListener("click",()=>{const c={exerciseID:t.getAttribute("data-exercise-id"),exerciseName:e.querySelector(".title-modal").textContent,exerciseDescription:e.querySelector(".text-modal").textContent,exerciseBurned:e.querySelector(".burn-modal").textContent,exerciseRating:e.querySelector(".modal-rating").textContent,exercisePart:e.querySelector(".modal-part").textContent,exerciseEquipment:e.querySelector(".modal-equipment").textContent,exerciseTarget:e.querySelector(".modal-target").textContent,exercisePopularity:e.querySelector(".modal-popularity").textContent};s.find(g=>g.exerciseName===c.exerciseName)?(s=s.filter(g=>g.exerciseName!==c.exerciseName),alert("Exercise removed from favorites!"),t.querySelector(".button-name-favorites").textContent="Add to favorites",t.querySelector(".favorites-svg use").setAttribute("xlink:href","./img/icon-sprite.svg#heart")):(s.push(c),alert("Exercise added to favorites!"),t.querySelector(".button-name-favorites").textContent="Remove from favorites",t.querySelector(".favorites-svg use").setAttribute("xlink:href","./img/icon-sprite.svg#trash")),localStorage.setItem("favoritesList",JSON.stringify(s))});const o=e.querySelector(".title-modal").textContent;s.some(c=>c.exerciseName===o)&&(t.querySelector(".button-name-favorites").textContent="Remove from favorites",t.querySelector(".favorites-svg use").setAttribute("xlink:href","./img/icon-sprite.svg#heart-filled"))});const ue=document.querySelector(".scroll-up");ue.addEventListener("click",()=>{window.scrollTo(0,0)});const U=document.querySelector(".scroll-up");window.onscroll=()=>{window.scrollY>768?U.classList.remove("btn-hidden"):window.scrollY<768&&U.classList.add("btn-hidden")};
