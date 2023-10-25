import{f as z,s as J}from"./quote-534e9576.js";(()=>{document.querySelector(".mobile-menu-header");const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu");document.getElementById("overlay");const n=()=>{const g=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!g),e.classList.toggle("is-open")};t.addEventListener("click",n),s.addEventListener("click",n),window.addEventListener("resize",()=>{window.innerWidth>768&&e.classList.remove("is-open")}),document.addEventListener("DOMContentLoaded",function(){const g=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){g.style.display="none"})})})();(()=>{if(!document.querySelector("section.galary"))return;console.log(window.innerWidth);const t=document.querySelector(".galary-list"),s=document.querySelector(".galary-filters-button1"),n=document.querySelector(".galary-filters-button2"),g=document.querySelector(".galary-filters-button3"),d=document.querySelector(".pagination"),L=document.querySelector(".galary-title2 span"),E=document.querySelector(".galary-list"),k=document.querySelector(".galary-title-and-list-wrapper-ex"),q=document.querySelector(".galary-title-and-list-wrapper");let p="Body parts",w=s,h=d.children[0].firstElementChild,x=9;const U=window.screen.availWidth;function F(){if(U>=768)return x=12}F(),C(p,1,x);let B=C;d.classList.add("is-hidden"),s.addEventListener("click",$),n.addEventListener("click",$),g.addEventListener("click",$);function $(r){r.preventDefault(),w.classList.remove("galary-filter-checked"),p=String(this.textContent),this.classList.add("galary-filter-checked"),C(p,1,x),w=this}function C(r,o,a=x){d.classList.add("is-hidden"),t.innerHTML="",z(r,o,a).then(i=>{i&&(t.insertAdjacentHTML("beforeend",l(i.results)),M(i.totalPages,o))});function l(i){return i.map(({filter:u,name:m,imgURL:f})=>`
           <li class="galary-item" data-name="${m}">
              <img
                src="${f}"
                alt="${m}"
                loading="lazy"
                class="galary-item-img"
              />
              <h3 class="galary-item-subtitle">${r}</h3>
              <p class="galery-item-text">${m.charAt(0).toUpperCase()+m.slice(1)}</p>
            </li> `).join("")}}d.addEventListener("click",H);function H(r){var a;const o=r.target.closest(".pagination-button");if(o&&o.classList!==h.classList){o.classList.add("current-page"),h.classList.remove("current-page"),h=o;const l=Number(h.textContent);console.log(l),B(p,l),(a=document.getElementsByClassName("galary-title-and-list-wrapper")[0])==null||a.scrollIntoView({behavior:"smooth"})}}t.addEventListener("click",D);function D(r){console.log(r);const o=r.target.closest(".galary-item");if(!o)return;const a=o.dataset.name;t.innerHTML="",T(a,1,x),p=a,B=T}async function T(r,o,a=x){try{const l=`https://your-energy.b.goit.study/api/exercises?category=${r}&page=${o}&limit=${a}`,i=await fetch(l);if(!i.ok)throw new Error(`Request failed with status ${i.status}`);const u=await i.json();if(!u.results||u.results.length===0){console.log("No results found for your search parameters.");return}M(u.totalPages,o),k.classList.remove("is-hidden"),q.classList.add("is-hidden"),E.insertAdjacentHTML("beforeend",N(u.results)),L.textContent=`${r}`}catch(l){console.error(`Error: ${l.message}`)}}function N(r){return r.map(({name:o,target:a,rating:l,burnedCalories:i,time:u,_id:m,bodyPart:f})=>`
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
              <button type="button" class="exercise-item-button" id=${m}>
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
                    >${i} / ${u} min</span
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
         `).join("")}document.querySelector(".galary-search-wrapper input").addEventListener("input",_);async function W(r,o,a,l=x){try{const i=`https://your-energy.b.goit.study/api/exercises?bodypart=back&page=${o}&limit=${l}&keyword=${a}`,u=await fetch(i);if(!u.ok)throw new Error(`Request failed with status ${u.status}`);const m=await u.json();if(!m.results||m.results.length===0){console.log("No results found for your search parameters.");return}M(m.totalPages,o),k.classList.remove("is-hidden"),q.classList.add("is-hidden"),E.insertAdjacentHTML("beforeend",N(m.results)),L.textContent=`${r}`}catch(i){console.error(`Error: ${i.message}`)}}function _(r){console.log(r);const o=r.target.value;B=(a,l,i)=>W(a,l,o,i)}function M(r,o=1){var u,m;const a=document.getElementsByClassName("pagination")[0],l=f=>`
      <li>
        <button type="button" class="pagination-button">${f}</button>
      </li>`,i=[];for(let f=1;f<=r;f++)i.push(l(f));a.innerHTML=i.join(`
`),h=(u=d.children[o-1])==null?void 0:u.firstElementChild,(m=h==null?void 0:h.classList)==null||m.add("current-page"),a.classList.remove("is-hidden")}})();let A=null;const O=document.getElementById("closeModalButton"),K=document.getElementById("additionalButton2"),V=document.getElementById("closeModalButton2"),c=document.getElementById("myModal"),y=document.getElementById("myModal2");let I=null;function R(e){c.style.display="block";const t=c.querySelector("img"),s=c.querySelector("h2"),n=c.querySelector(".text-modal"),g=c.querySelector(".burn-modal"),d=c.querySelector(".modal-rating"),L=c.querySelector(".modal-part"),E=c.querySelector(".modal-equipment"),k=c.querySelector(".modal-target"),q=c.querySelector(".modal-popularity");t.src=e.gifUrl,s.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),n.textContent=e.description,g.textContent=`${e.burnedCalories}/${e.time} min`,L.textContent=e.bodyPart,E.textContent=e.equipment,k.textContent=e.target,q.textContent=e.popularity,d.textContent=e.rating,I=e,c.addEventListener("click",w=>{w.target===c&&v(c)});const p=w=>{w.key==="Escape"&&c.style.display==="block"&&(v(c),document.removeEventListener("keydown",p))};document.addEventListener("keydown",p),O.addEventListener("click",()=>{v(c),document.removeEventListener("keydown",p)})}async function Z(e){try{const t=await G(e);if(!t){console.error("Не вдалося отримати дані про вправу.");return}R(t),A=e}catch(t){console.error(`Помилка: ${t.message}`)}}async function G(e){try{const t=await fetch(`https://your-energy.b.goit.study/api/exercises/${e}`);if(!t.ok)throw new Error("Помилка запиту до API");return await t.json()}catch(t){return console.error("Помилка при отриманні даних про вправу:",t),null}}document.addEventListener("click",e=>{const t=e.target.closest(".exercise-item-button");if(!t)return;const s=t.getAttribute("id");Z(s)});function v(e){e.style.display="none"}y.addEventListener("click",e=>{e.target===y&&v(y)});const P=e=>{e.key==="Escape"&&y.style.display==="block"&&(v(y),document.removeEventListener("keydown",P))};document.addEventListener("keydown",P);K.addEventListener("click",()=>{c.style.display="none",I&&A&&(R(I),y.style.display="block",y.addEventListener("click",e=>{e.target===y&&v(y)}))});O.addEventListener("click",()=>{v(c),document.removeEventListener("keydown",closeModalOnEscape)});V.addEventListener("click",()=>{v(y),document.removeEventListener("keydown",P)});const S=document.querySelectorAll(".rating-container label"),b=document.querySelectorAll(".rating-container label svg use");S.forEach((e,t)=>{e.addEventListener("click",s=>{for(let n=0;n<S.length;n++)n<=t?b[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):b[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("focus",s=>{for(let n=0;n<=t;n++)b[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let n=t+1;n<S.length;n++)b[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("blur",s=>{for(let n=0;n<S.length;n++)b[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const Y=document.getElementById("selectedRat");S.forEach((e,t)=>{e.addEventListener("click",s=>{const n=(t+1).toFixed(1);Y.textContent=n})});const Q=document.getElementById("ratingForm"),X=document.getElementById("selectedRat"),ee=document.getElementById("emailInput"),te=document.getElementById("commentInput");Q.addEventListener("submit",async e=>{e.preventDefault();const t=parseFloat(X.textContent),s=ee.value,n=te.value;if(!ne(s)){alert("Введіть коректний email");return}const d=await se(A);if(d){const E=JSON.stringify({rate:t,email:s,review:n});await J(d,t,E),myModal2.style.display="none"}else alert("Помилка: не вдалося знайти вправу.")});function ne(e){return/^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}async function se(e){try{const t=`https://your-energy.b.goit.study/api/exercises/${e}`,s=await fetch(t);if(!s.ok)throw new Error(`Request to get exercise by _id failed with status ${s.status}`);return(await s.json())._id}catch(t){return console.error(`Error: ${t.message}`),null}}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("additionalButton1"),t=document.getElementById("myModal");e.addEventListener("click",()=>{const s={exerciseID:e.getAttribute("data-exercise-id"),exerciseName:t.querySelector(".title-modal").textContent,exerciseDescription:t.querySelector(".text-modal").textContent,exerciseBurned:t.querySelector(".burn-modal").textContent,exerciseRating:t.querySelector(".modal-rating").textContent,exercisePart:t.querySelector(".modal-part").textContent,exerciseEquipment:t.querySelector(".modal-equipment").textContent,exerciseTarget:t.querySelector(".modal-target").textContent,exercisePopularity:t.querySelector(".modal-popularity").textContent};let n=JSON.parse(localStorage.getItem("favoritesList"))||[];n.find(d=>d.exerciseName===s.exerciseName)?(n=n.filter(d=>d.exerciseName!==s.exerciseName),alert("Exercise removed from favorites!")):(n.push(s),alert("Exercise added to favorites!")),localStorage.setItem("favoritesList",JSON.stringify(n))})});const oe=document.querySelector(".scroll-up");oe.addEventListener("click",()=>{window.scrollTo(0,0)});const j=document.querySelector(".scroll-up");window.onscroll=()=>{window.scrollY>768?j.classList.remove("btn-hidden"):window.scrollY<768&&j.classList.add("btn-hidden")};
