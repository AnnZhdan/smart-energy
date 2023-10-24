import{f as J}from"./quote-e70db7bc.js";(()=>{document.querySelector(".mobile-menu-header");const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu");document.querySelector(".js-close-menu");const r=document.querySelector(".mob-menu-close"),n=()=>{const g=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!g),t.classList.toggle("is-open")};e.addEventListener("click",n),r.addEventListener("click",n),window.addEventListener("resize",()=>{window.innerWidth>768&&t.classList.remove("is-open")}),document.addEventListener("DOMContentLoaded",function(){const g=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){g.style.display="none"})})})();(()=>{if(!document.querySelector("section.galary"))return;console.log(window.innerWidth);const e=document.querySelector(".galary-list"),r=document.querySelector(".galary-filters-button1"),n=document.querySelector(".galary-filters-button2"),g=document.querySelector(".galary-filters-button3"),c=document.querySelector(".pagination"),y=document.querySelector(".galary-title2 span"),S=document.querySelector(".galary-list"),L=document.querySelector(".galary-title-and-list-wrapper-ex"),w=document.querySelector(".galary-title-and-list-wrapper");let x="Body parts",A=r,f=c.children[0].firstElementChild,h=9;const R=window.screen.availWidth;function H(){if(R>=768)return h=12}H(),k(x,1,h);let B=k;c.classList.add("is-hidden"),r.addEventListener("click",C),n.addEventListener("click",C),g.addEventListener("click",C);function C(s){s.preventDefault(),A.classList.remove("galary-filter-checked"),x=String(this.textContent),this.classList.add("galary-filter-checked"),k(x,1,h),A=this}function k(s,o,a=h){c.classList.add("is-hidden"),e.innerHTML="",J(s,o,a).then(i=>{i&&(e.insertAdjacentHTML("beforeend",l(i.results)),$(i.totalPages,o))});function l(i){return i.map(({filter:d,name:u,imgURL:p})=>`
           <li class="galary-item" data-name="${u}">
              <img
                src="${p}"
                alt="${u}"
                loading="lazy"
                class="galary-item-img"
              />
              <h3 class="galary-item-subtitle">${s}</h3>
              <p class="galery-item-text">${u.charAt(0).toUpperCase()+u.slice(1)}</p>
            </li> `).join("")}}c.addEventListener("click",U);function U(s){var a;const o=s.target.closest(".pagination-button");if(o&&o.classList!==f.classList){o.classList.add("current-page"),f.classList.remove("current-page"),f=o;const l=Number(f.textContent);console.log(l),B(x,l),(a=document.getElementsByClassName("galary-title-and-list-wrapper")[0])==null||a.scrollIntoView({behavior:"smooth"})}}e.addEventListener("click",F);function F(s){console.log(s);const o=s.target.closest(".galary-item");if(!o)return;const a=o.dataset.name;e.innerHTML="",T(a,1,h),x=a,B=T}async function T(s,o,a=h){try{const l=`https://your-energy.b.goit.study/api/exercises?category=${s}&page=${o}&limit=${a}`,i=await fetch(l);if(!i.ok)throw new Error(`Request failed with status ${i.status}`);const d=await i.json();if(!d.results||d.results.length===0){console.log("No results found for your search parameters.");return}$(d.totalPages,o),L.classList.remove("is-hidden"),w.classList.add("is-hidden"),S.insertAdjacentHTML("beforeend",P(d.results)),y.textContent=`${s}`}catch(l){console.error(`Error: ${l.message}`)}}function P(s){return s.map(({name:o,target:a,rating:l,burnedCalories:i,time:d,_id:u,bodyPart:p})=>`
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
              <h3 class="exercise-item-subtitle">${o}</h3>
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
                  Body part:<span class="information-text-span">${p}</span>
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
         `).join("")}document.querySelector(".galary-search-wrapper input").addEventListener("input",W);async function D(s,o,a,l=h){try{const i=`https://your-energy.b.goit.study/api/exercises?bodypart=back&page=${o}&limit=${l}&keyword=${a}`,d=await fetch(i);if(!d.ok)throw new Error(`Request failed with status ${d.status}`);const u=await d.json();if(!u.results||u.results.length===0){console.log("No results found for your search parameters.");return}$(u.totalPages,o),L.classList.remove("is-hidden"),w.classList.add("is-hidden"),S.insertAdjacentHTML("beforeend",P(u.results)),y.textContent=`${s}`}catch(i){console.error(`Error: ${i.message}`)}}function W(s){console.log(s);const o=s.target.value;B=(a,l,i)=>D(a,l,o,i)}function $(s,o=1){var d,u;const a=document.getElementsByClassName("pagination")[0],l=p=>`
      <li>
        <button type="button" class="pagination-button">${p}</button>
      </li>`,i=[];for(let p=1;p<=s;p++)i.push(l(p));a.innerHTML=i.join(`
`),f=(d=c.children[o-1])==null?void 0:d.firstElementChild,(u=f==null?void 0:f.classList)==null||u.add("current-page"),a.classList.remove("is-hidden")}})();const K=document.getElementById("closeModalButton"),Y=document.getElementById("additionalButton2"),z=document.getElementById("closeModalButton2"),m=document.getElementById("myModal"),M=document.getElementById("myModal2");let I=null,j=null;function O(t){m.style.display="block";const e=m.querySelector("img"),r=m.querySelector("h2"),n=m.querySelector(".text-modal"),g=m.querySelector(".burn-modal"),c=m.querySelector(".modal-rating"),y=m.querySelector(".modal-part"),S=m.querySelector(".modal-equipment"),L=m.querySelector(".modal-target"),w=m.querySelector(".modal-popularity");e.src=t.gifUrl,r.textContent=t.name.charAt(0).toUpperCase()+t.name.slice(1),n.textContent=t.description,g.textContent=`${t.burnedCalories}/${t.time} min`,y.textContent=t.bodyPart,S.textContent=t.equipment,L.textContent=t.target,w.textContent=t.popularity,c.textContent=t.rating,I=t}async function G(t){try{const e=await V(t);if(!e){console.error("Не вдалося отримати дані про вправу.");return}O(e),j=t}catch(e){console.error(`Помилка: ${e.message}`)}}async function V(t){try{const e=await fetch(`https://your-energy.b.goit.study/api/exercises/${t}`);if(!e.ok)throw new Error("Помилка запиту до API");return await e.json()}catch(e){return console.error("Помилка при отриманні даних про вправу:",e),null}}document.addEventListener("click",t=>{const e=t.target.closest(".exercise-item-button");if(!e)return;const r=e.getAttribute("id");G(r)});K.addEventListener("click",()=>m.style.display="none");Y.addEventListener("click",()=>{m.style.display="none",I&&j&&(O(I),M.style.display="block")});z.addEventListener("click",()=>M.style.display="none");m.style.display="none";M.style.display="none";const E=document.querySelectorAll(".rating-container label"),v=document.querySelectorAll(".rating-container label svg use");E.forEach((t,e)=>{t.addEventListener("click",r=>{for(let n=0;n<E.length;n++)n<=e?v[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):v[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),t.addEventListener("focus",r=>{for(let n=0;n<=e;n++)v[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let n=e+1;n<E.length;n++)v[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),t.addEventListener("blur",r=>{for(let n=0;n<E.length;n++)v[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const _=document.getElementById("selectedRat");E.forEach((t,e)=>{t.addEventListener("click",r=>{const n=(e+1).toFixed(1);_.textContent=n})});const Q=document.getElementById("ratingForm");document.getElementById("submitRatingButton");const X=document.getElementById("selectedRat"),Z=document.getElementById("emailInput"),ee=document.getElementById("commentInput");Q.addEventListener("submit",t=>{t.preventDefault();const e="64f389465ae26083f39b17df",r=parseFloat(X.textContent),n=Z.value,g=ee.value;if(!n){alert("The email field is required");return}console.log("Exercise ID:",e),console.log("Rate:",r),console.log("Email:",n),console.log("Comment:",g);const c=`https://your-energy.b.goit.study/api/exercises/${e}/rating`;fetch(c,{method:"PATCH",body:JSON.stringify({rate:r,email:n,comment:g}),headers:{"Content-Type":"application/json"}}).then(y=>y.json()).then(y=>{y.success?myModal2.style.display="none":alert(y.message)}).catch(y=>{console.error("Помилка:",y)})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("additionalButton1"),e=document.getElementById("myModal");t.addEventListener("click",()=>{const r={exerciseID:t.getAttribute("data-exercise-id"),exerciseName:e.querySelector(".title-modal").textContent,exerciseDescription:e.querySelector(".text-modal").textContent,exerciseBurned:e.querySelector(".burn-modal").textContent,exerciseRating:e.querySelector(".modal-rating").textContent,exercisePart:e.querySelector(".modal-part").textContent,exerciseEquipment:e.querySelector(".modal-equipment").textContent,exerciseTarget:e.querySelector(".modal-target").textContent,exercisePopularity:e.querySelector(".modal-popularity").textContent};let n=JSON.parse(localStorage.getItem("favoritesList"))||[];n.find(c=>c.exerciseName===r.exerciseName)?(n=n.filter(c=>c.exerciseName!==r.exerciseName),alert("Exercise removed from favorites!")):(n.push(r),alert("Exercise added to favorites!")),localStorage.setItem("favoritesList",JSON.stringify(n))})});const te=document.querySelector(".scroll-up");te.addEventListener("click",()=>{window.scrollTo(0,0)});const N=document.querySelector(".scroll-up");window.onscroll=()=>{window.scrollY>768?N.classList.remove("btn-hidden"):window.scrollY<768&&N.classList.add("btn-hidden")};const q="feedback-form-state",b={form:document.querySelector(".footer-form")};b.form.addEventListener("input",throttle(ne,500));b.form.addEventListener("submit",oe);if(localStorage.getItem(q)){const t=JSON.parse(localStorage.getItem(q));b.form.elements.email.value=t.email}function ne(t){const e={email:b.form.elements.email.value};localStorage.setItem(q,JSON.stringify(e))}function oe(t){t.preventDefault();const e={email:b.form.elements.email.value};console.log(e),t.currentTarget.reset(),localStorage.removeItem(q)}
