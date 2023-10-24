import{f as D}from"./quote-f7f6d335.js";(()=>{document.querySelector(".mobile-menu-header");const n=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu");document.querySelector(".js-close-menu");const r=document.querySelector(".mob-menu-close"),t=()=>{const g=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!g),n.classList.toggle("is-open")};e.addEventListener("click",t),r.addEventListener("click",t),window.addEventListener("resize",()=>{window.innerWidth>768&&n.classList.remove("is-open")}),document.addEventListener("DOMContentLoaded",function(){const g=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){g.style.display="none"})})})();(()=>{if(!document.querySelector("section.galary"))return;console.log(window.innerWidth);const e=document.querySelector(".galary-list"),r=document.querySelector(".galary-filters-button1"),t=document.querySelector(".galary-filters-button2"),g=document.querySelector(".galary-filters-button3"),c=document.querySelector(".pagination"),y=document.querySelector(".galary-title2 span"),b=document.querySelector(".galary-list"),w=document.querySelector(".galary-title-and-list-wrapper-ex"),S=document.querySelector(".galary-title-and-list-wrapper");let x="Body parts",I=r,f=c.children[0].firstElementChild,h=9;const N=window.screen.availWidth;function R(){if(N>=768)return h=12}R(),B(x,1,h);let L=B;c.classList.add("is-hidden"),r.addEventListener("click",q),t.addEventListener("click",q),g.addEventListener("click",q);function q(s){s.preventDefault(),I.classList.remove("galary-filter-checked"),x=String(this.textContent),this.classList.add("galary-filter-checked"),B(x,1,h),I=this}function B(s,o,a=h){c.classList.add("is-hidden"),e.innerHTML="",D(s,o,a).then(i=>{i&&(e.insertAdjacentHTML("beforeend",l(i.results)),C(i.totalPages,o))});function l(i){return i.map(({filter:d,name:u,imgURL:p})=>`
           <li class="galary-item" data-name="${u}">
              <img
                src="${p}"
                alt="${u}"
                loading="lazy"
                class="galary-item-img"
              />
              <h3 class="galary-item-subtitle">${s}</h3>
              <p class="galery-item-text">${u.charAt(0).toUpperCase()+u.slice(1)}</p>
            </li> `).join("")}}c.addEventListener("click",H);function H(s){var a;const o=s.target.closest(".pagination-button");if(o&&o.classList!==f.classList){o.classList.add("current-page"),f.classList.remove("current-page"),f=o;const l=Number(f.textContent);console.log(l),L(x,l),(a=document.getElementsByClassName("galary-title-and-list-wrapper")[0])==null||a.scrollIntoView({behavior:"smooth"})}}e.addEventListener("click",U);function U(s){console.log(s);const o=s.target.closest(".galary-item");if(!o)return;const a=o.dataset.name;e.innerHTML="",M(a,1,h),x=a,L=M}async function M(s,o,a=h){try{const l=`https://your-energy.b.goit.study/api/exercises?category=${s}&page=${o}&limit=${a}`,i=await fetch(l);if(!i.ok)throw new Error(`Request failed with status ${i.status}`);const d=await i.json();if(!d.results||d.results.length===0){console.log("No results found for your search parameters.");return}C(d.totalPages,o),w.classList.remove("is-hidden"),S.classList.add("is-hidden"),b.insertAdjacentHTML("beforeend",A(d.results)),y.textContent=`${s}`}catch(l){console.error(`Error: ${l.message}`)}}function A(s){return s.map(({name:o,target:a,rating:l,burnedCalories:i,time:d,_id:u,bodyPart:p})=>`
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
         `).join("")}document.querySelector(".galary-search-wrapper input").addEventListener("input",O);async function F(s,o,a,l=h){try{const i=`https://your-energy.b.goit.study/api/exercises?bodypart=back&page=${o}&limit=${l}&keyword=${a}`,d=await fetch(i);if(!d.ok)throw new Error(`Request failed with status ${d.status}`);const u=await d.json();if(!u.results||u.results.length===0){console.log("No results found for your search parameters.");return}C(u.totalPages,o),w.classList.remove("is-hidden"),S.classList.add("is-hidden"),b.insertAdjacentHTML("beforeend",A(u.results)),y.textContent=`${s}`}catch(i){console.error(`Error: ${i.message}`)}}function O(s){console.log(s);const o=s.target.value;L=(a,l,i)=>F(a,l,o,i)}function C(s,o=1){var d,u;const a=document.getElementsByClassName("pagination")[0],l=p=>`
      <li>
        <button type="button" class="pagination-button">${p}</button>
      </li>`,i=[];for(let p=1;p<=s;p++)i.push(l(p));a.innerHTML=i.join(`
`),f=(d=c.children[o-1])==null?void 0:d.firstElementChild,(u=f==null?void 0:f.classList)==null||u.add("current-page"),a.classList.remove("is-hidden")}})();const W=document.getElementById("closeModalButton"),J=document.getElementById("additionalButton2"),K=document.getElementById("closeModalButton2"),m=document.getElementById("myModal"),$=document.getElementById("myModal2");let k=null,T=null;function j(n){m.style.display="block";const e=m.querySelector("img"),r=m.querySelector("h2"),t=m.querySelector(".text-modal"),g=m.querySelector(".burn-modal"),c=m.querySelector(".modal-rating"),y=m.querySelector(".modal-part"),b=m.querySelector(".modal-equipment"),w=m.querySelector(".modal-target"),S=m.querySelector(".modal-popularity");e.src=n.gifUrl,r.textContent=n.name.charAt(0).toUpperCase()+n.name.slice(1),t.textContent=n.description,g.textContent=`${n.burnedCalories}/${n.time} min`,y.textContent=n.bodyPart,b.textContent=n.equipment,w.textContent=n.target,S.textContent=n.popularity,c.textContent=n.rating,k=n}async function z(n){try{const e=await G(n);if(!e){console.error("Не вдалося отримати дані про вправу.");return}j(e),T=n}catch(e){console.error(`Помилка: ${e.message}`)}}async function G(n){try{const e=await fetch(`https://your-energy.b.goit.study/api/exercises/${n}`);if(!e.ok)throw new Error("Помилка запиту до API");return await e.json()}catch(e){return console.error("Помилка при отриманні даних про вправу:",e),null}}document.addEventListener("click",n=>{const e=n.target.closest(".exercise-item-button");if(!e)return;const r=e.getAttribute("id");z(r)});W.addEventListener("click",()=>m.style.display="none");J.addEventListener("click",()=>{m.style.display="none",k&&T&&(j(k),$.style.display="block")});K.addEventListener("click",()=>$.style.display="none");m.style.display="none";$.style.display="none";const E=document.querySelectorAll(".rating-container label"),v=document.querySelectorAll(".rating-container label svg use");E.forEach((n,e)=>{n.addEventListener("click",r=>{for(let t=0;t<E.length;t++)t<=e?v[t].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):v[t].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),n.addEventListener("focus",r=>{for(let t=0;t<=e;t++)v[t].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let t=e+1;t<E.length;t++)v[t].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),n.addEventListener("blur",r=>{for(let t=0;t<E.length;t++)v[t].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const V=document.getElementById("selectedRat");E.forEach((n,e)=>{n.addEventListener("click",r=>{const t=(e+1).toFixed(1);V.textContent=t})});const Y=document.getElementById("ratingForm");document.getElementById("submitRatingButton");const Q=document.getElementById("selectedRat"),X=document.getElementById("emailInput"),Z=document.getElementById("commentInput");Y.addEventListener("submit",n=>{n.preventDefault();const e="64f389465ae26083f39b17df",r=parseFloat(Q.textContent),t=X.value,g=Z.value;if(!t){alert("The email field is required");return}console.log("Exercise ID:",e),console.log("Rate:",r),console.log("Email:",t),console.log("Comment:",g);const c=`https://your-energy.b.goit.study/api/exercises/${e}/rating`;fetch(c,{method:"PATCH",body:JSON.stringify({rate:r,email:t,comment:g}),headers:{"Content-Type":"application/json"}}).then(y=>y.json()).then(y=>{y.success?myModal2.style.display="none":alert(y.message)}).catch(y=>{console.error("Помилка:",y)})});document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("additionalButton1"),e=document.getElementById("myModal");n.addEventListener("click",()=>{const r={exerciseID:n.getAttribute("data-exercise-id"),exerciseName:e.querySelector(".title-modal").textContent,exerciseDescription:e.querySelector(".text-modal").textContent,exerciseBurned:e.querySelector(".burn-modal").textContent,exerciseRating:e.querySelector(".modal-rating").textContent,exercisePart:e.querySelector(".modal-part").textContent,exerciseEquipment:e.querySelector(".modal-equipment").textContent,exerciseTarget:e.querySelector(".modal-target").textContent,exercisePopularity:e.querySelector(".modal-popularity").textContent};let t=JSON.parse(localStorage.getItem("favoritesList"))||[];t.find(c=>c.exerciseName===r.exerciseName)?(t=t.filter(c=>c.exerciseName!==r.exerciseName),alert("Exercise removed from favorites!")):(t.push(r),alert("Exercise added to favorites!")),localStorage.setItem("favoritesList",JSON.stringify(t))})});const _=document.querySelector(".scroll-up");_.addEventListener("click",()=>{window.scrollTo(0,0)});const P=document.querySelector(".scroll-up");window.onscroll=()=>{window.scrollY>768?P.classList.remove("btn-hidden"):window.scrollY<768&&P.classList.add("btn-hidden")};
