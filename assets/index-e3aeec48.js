import{f as J}from"./quote-30209c56.js";(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu");document.getElementById("overlay");const n=()=>{const u=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!u),t.classList.toggle("is-open")};e.addEventListener("click",n),o.addEventListener("click",n),window.addEventListener("resize",()=>{window.innerWidth>768&&t.classList.remove("is-open")}),document.addEventListener("DOMContentLoaded",function(){const u=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){u.style.display="none"})})})();(()=>{if(!document.querySelector("section.galary"))return;console.log(window.innerWidth);const e=document.querySelector(".galary-list"),o=document.querySelector(".galary-filters-button1"),n=document.querySelector(".galary-filters-button2"),u=document.querySelector(".galary-filters-button3"),p=document.querySelector(".pagination"),m=document.querySelector(".galary-title2 span"),E=document.querySelector(".galary-list"),b=document.querySelector(".galary-title-and-list-wrapper-ex"),w=document.querySelector(".galary-title-and-list-wrapper");let v="Body parts",f=o,y=p.children[0].firstElementChild,h=9;const D=window.screen.availWidth;function F(){if(D>=768)return h=12}F(),C(v,1,h);let q=C;p.classList.add("is-hidden"),o.addEventListener("click",B),n.addEventListener("click",B),u.addEventListener("click",B);function B(r){r.preventDefault(),f.classList.remove("galary-filter-checked"),v=String(this.textContent),this.classList.add("galary-filter-checked"),C(v,1,h),f=this}function C(r,s,a=h){p.classList.add("is-hidden"),e.innerHTML="",J(r,s,a).then(i=>{i&&(e.insertAdjacentHTML("beforeend",l(i.results)),I(i.totalPages,s))});function l(i){return i.map(({filter:c,name:d,imgURL:x})=>`
           <li class="galary-item" data-name="${d}">
              <img
                src="${x}"
                alt="${d}"
                loading="lazy"
                class="galary-item-img"
              />
              <h3 class="galary-item-subtitle">${r}</h3>
              <p class="galery-item-text">${d.charAt(0).toUpperCase()+d.slice(1)}</p>
            </li> `).join("")}}p.addEventListener("click",H);function H(r){var a;const s=r.target.closest(".pagination-button");if(s&&s.classList!==y.classList){s.classList.add("current-page"),y.classList.remove("current-page"),y=s;const l=Number(y.textContent);console.log(l),q(v,l),(a=document.getElementsByClassName("galary-title-and-list-wrapper")[0])==null||a.scrollIntoView({behavior:"smooth"})}}e.addEventListener("click",O);function O(r){console.log(r);const s=r.target.closest(".galary-item");if(!s)return;const a=s.dataset.name;e.innerHTML="",T(a,1,h),v=a,q=T}async function T(r,s,a=h){try{const l=`https://your-energy.b.goit.study/api/exercises?category=${r}&page=${s}&limit=${a}`,i=await fetch(l);if(!i.ok)throw new Error(`Request failed with status ${i.status}`);const c=await i.json();if(!c.results||c.results.length===0){console.log("No results found for your search parameters.");return}I(c.totalPages,s),b.classList.remove("is-hidden"),w.classList.add("is-hidden"),E.insertAdjacentHTML("beforeend",P(c.results)),m.textContent=`${r}`}catch(l){console.error(`Error: ${l.message}`)}}function P(r){return r.map(({name:s,target:a,rating:l,burnedCalories:i,time:c,_id:d,bodyPart:x})=>`
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
              <button type="button" class="exercise-item-button" id=${d}>
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
              <h3 class="exercise-item-subtitle">${s}</h3>
            </div>
            <ul class="exercise-item-list">
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Burned calories:<span class="information-text-span"
                    >${i} / ${c} min</span
                  >
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Body part:<span class="information-text-span">${x}</span>
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
         `).join("")}document.querySelector(".galary-search-wrapper input").addEventListener("input",W);async function U(r,s,a,l=h){try{const i=`https://your-energy.b.goit.study/api/exercises?bodypart=back&page=${s}&limit=${l}&keyword=${a}`,c=await fetch(i);if(!c.ok)throw new Error(`Request failed with status ${c.status}`);const d=await c.json();if(!d.results||d.results.length===0){console.log("No results found for your search parameters.");return}I(d.totalPages,s),b.classList.remove("is-hidden"),w.classList.add("is-hidden"),E.insertAdjacentHTML("beforeend",P(d.results)),m.textContent=`${r}`}catch(i){console.error(`Error: ${i.message}`)}}function W(r){console.log(r);const s=r.target.value;q=(a,l,i)=>U(a,l,s,i)}function I(r,s=1){var c,d;const a=document.getElementsByClassName("pagination")[0],l=x=>`
      <li>
        <button type="button" class="pagination-button">${x}</button>
      </li>`,i=[];for(let x=1;x<=r;x++)i.push(l(x));a.innerHTML=i.join(`
`),y=(c=p.children[s-1])==null?void 0:c.firstElementChild,(d=y==null?void 0:y.classList)==null||d.add("current-page"),a.classList.remove("is-hidden")}})();const K=document.getElementById("closeModalButton"),z=document.getElementById("additionalButton2"),G=document.getElementById("closeModalButton2"),g=document.getElementById("myModal"),A=document.getElementById("myModal2");let M=null,N=null;function R(t){g.style.display="block";const e=g.querySelector("img"),o=g.querySelector("h2"),n=g.querySelector(".text-modal"),u=g.querySelector(".burn-modal"),p=g.querySelector(".modal-rating"),m=g.querySelector(".modal-part"),E=g.querySelector(".modal-equipment"),b=g.querySelector(".modal-target"),w=g.querySelector(".modal-popularity");e.src=t.gifUrl,o.textContent=t.name.charAt(0).toUpperCase()+t.name.slice(1),n.textContent=t.description,u.textContent=`${t.burnedCalories}/${t.time} min`,m.textContent=t.bodyPart,E.textContent=t.equipment,b.textContent=t.target,w.textContent=t.popularity,p.textContent=t.rating,M=t}async function V(t){try{const e=await Y(t);if(!e){console.error("Не вдалося отримати дані про вправу.");return}R(e),N=t}catch(e){console.error(`Помилка: ${e.message}`)}}async function Y(t){try{const e=await fetch(`https://your-energy.b.goit.study/api/exercises/${t}`);if(!e.ok)throw new Error("Помилка запиту до API");return await e.json()}catch(e){return console.error("Помилка при отриманні даних про вправу:",e),null}}document.addEventListener("click",t=>{const e=t.target.closest(".exercise-item-button");if(!e)return;const o=e.getAttribute("id");V(o)});K.addEventListener("click",()=>g.style.display="none");z.addEventListener("click",()=>{g.style.display="none",M&&N&&(R(M),A.style.display="block")});G.addEventListener("click",()=>A.style.display="none");g.style.display="none";A.style.display="none";const S=document.querySelectorAll(".rating-container label"),L=document.querySelectorAll(".rating-container label svg use");S.forEach((t,e)=>{t.addEventListener("click",o=>{for(let n=0;n<S.length;n++)n<=e?L[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):L[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),t.addEventListener("focus",o=>{for(let n=0;n<=e;n++)L[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let n=e+1;n<S.length;n++)L[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),t.addEventListener("blur",o=>{for(let n=0;n<S.length;n++)L[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const Q=document.getElementById("selectedRat");S.forEach((t,e)=>{t.addEventListener("click",o=>{const n=(e+1).toFixed(1);Q.textContent=n})});const X=document.getElementById("ratingForm");document.getElementById("submitRatingButton");const Z=document.getElementById("selectedRat"),_=document.getElementById("emailInput"),ee=document.getElementById("commentInput");X.addEventListener("submit",t=>{t.preventDefault();const e="64f389465ae26083f39b17df",o=parseFloat(Z.textContent),n=_.value,u=ee.value;if(!n){alert("The email field is required");return}console.log("Exercise ID:",e),console.log("Rate:",o),console.log("Email:",n),console.log("Comment:",u);const p=`https://your-energy.b.goit.study/api/exercises/${e}/rating`;fetch(p,{method:"PATCH",body:JSON.stringify({rate:o,email:n,comment:u}),headers:{"Content-Type":"application/json"}}).then(m=>m.json()).then(m=>{m.success?myModal2.style.display="none":alert(m.message)}).catch(m=>{console.error("Помилка:",m)})});let k,$;document.addEventListener("DOMContentLoaded",function(){k=document.getElementById("favoritesText"),$=document.getElementById("favoritesIcon");const t=document.getElementById("additionalButton1"),e=document.querySelector(".modal");t.addEventListener("click",()=>{const o=t.getAttribute("data-exercise-id"),n=document.querySelector(".title-modal").textContent,u=document.querySelector(".text-modal").textContent,p=e.querySelector(".burn-modal").textContent,m=e.querySelector(".modal-rating").textContent,E=e.querySelector(".modal-part").textContent,b=e.querySelector(".modal-equipment").textContent,w=e.querySelector(".modal-target").textContent,v=e.querySelector(".modal-popularity").textContent;let f=JSON.parse(localStorage.getItem("favoritesList"))||[];const y=f.findIndex(h=>h.exerciseID===o);y!==-1?(f.splice(y,1),localStorage.setItem("favoritesList",JSON.stringify(f)),alert("Exercise removed from favorites!")):(f.push({exerciseID:o,exerciseName:n,exerciseDescription:u,exerciseBurned:p,exercisePart:E,exerciseEquipment:b,exerciseTarget:w,exercisePopularity:v,exerciseRating:m}),localStorage.setItem("favoritesList",JSON.stringify(f)),alert("Exercise added to favorites!")),console.log("Exercise ID:",o),console.log("Exercise Name:",n),console.log("Exercise Description:",u),console.log("Favorites List:",f)}),additionalButton1.addEventListener("click",()=>{try{k&&(k.textContent="Add to favorites"),$&&$.setAttribute("xlink:href","./img/icon-sprite.svg#heart")}catch(o){console.error("Error while updating favorites:",o)}})});const te=document.querySelector(".scroll-up");te.addEventListener("click",()=>{window.scrollTo(0,0)});const j=document.querySelector(".scroll-up");window.onscroll=()=>{window.scrollY>768?j.classList.remove("btn-hidden"):window.scrollY<768&&j.classList.add("btn-hidden")};
