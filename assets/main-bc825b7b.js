(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu");document.getElementById("overlay");const n=()=>{const i=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!i),e.classList.toggle("is-open")};t.addEventListener("click",n),r.addEventListener("click",n),window.addEventListener("resize",()=>{window.innerWidth>768&&e.classList.remove("is-open")}),document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){i.style.display="none"})})})();async function ve(e,t,r){const n=`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=${r}`;try{const i=await fetch(n);if(!i.ok)throw new Error(`Request failed with status ${i.status}`);return await i.json()}catch(i){return console.error("Error fetching data:",i),null}}async function Be(e,t,r,n,i,o){try{const s=`https://your-energy.b.goit.study/api/exercises?category=${e}&muscles=${t}&equipment=${r}&keyword=${n}&page=${i}&limit=${o}`,c=await fetch(s);if(!c.ok)throw new Error(`Request failed with status ${c.status}`);const g=await c.json();if(!g.results||g.results.length===0){console.log("No results found for your search parameters.");return}g.results.forEach((a,d)=>{console.log(`Exercise #${d+1}:`),console.log(`Name: ${a.name}`),console.log(`Description: ${a.description}`),console.log(`GIF URL: ${a.gifUrl}`),console.log(`Burned Calories: ${a.burnedCalories}`),console.log(`Duration: ${a.duration} minutes`),console.log(`Rating: ${a.rating}`),console.log("-----------------------------------")})}catch(s){console.error(`Error: ${s.message}`)}}async function je(e){try{const t=`https://your-energy.b.goit.study/api/exercises/${e}`,r=await fetch(t);if(!r.ok)throw new Error(`Request failed with status ${r.status}`);const n=await r.json();if(!n.results||n.results.length===0){console.log("Exercise not found for the specified exerciseID.");return}const i=document.getElementById("exercise-details"),o=n.results[0];i.innerHTML=`
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
      `}catch(t){console.error(`Error: ${t.message}`)}}async function Oe(){try{const e=await fetch("https://your-energy.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();if(t&&t.author&&t.quote){const r={quote:t.quote,author:t.author};return console.log("Quote of the day:",r),r}else console.log("Failed to get the quote of the day.")}catch(e){console.error("Error while fetching the quote of the day:",e)}}ve("Muscles",1,12).then(e=>{e&&console.log(e)});Be("back","lats","barbell","pull",1,10);je("64f389465ae26083f39b17c2");(()=>{if(!document.querySelector("section.galary"))return;console.log(window.innerWidth);const t=document.querySelector(".galary-list"),r=document.querySelector(".galary-filters-button1"),n=document.querySelector(".galary-filters-button2"),i=document.querySelector(".galary-filters-button3"),o=document.querySelector(".pagination"),s=document.querySelector(".galary-title2 span"),c=document.querySelector(".galary-list"),g=document.querySelector(".galary-title-and-list-wrapper-ex"),a=document.querySelector(".galary-title-and-list-wrapper");let d="Body parts",l=r,u=o.children[0].firstElementChild,w=9;const q=window.screen.availWidth;function k(){if(q>=768)return w=12}k(),y(d,1,w);let v=y;o.classList.add("is-hidden"),r.addEventListener("click",N),n.addEventListener("click",N),i.addEventListener("click",N);function N(p){p.preventDefault(),l.classList.remove("galary-filter-checked"),d=String(this.textContent),this.classList.add("galary-filter-checked"),y(d,1,w),l=this}function y(p,h,b=w){o.classList.add("is-hidden"),t.innerHTML="",ve(p,h,b).then(m=>{m&&(t.insertAdjacentHTML("beforeend",x(m.results)),C(m.totalPages,h))});function x(m){return m.map(({filter:E,name:L,imgURL:T})=>`
           <li class="galary-item" data-name="${L}">
              <img
                src="${T}"
                alt="${L}"
                loading="lazy"
                class="galary-item-img"
              />
              <h3 class="galary-item-subtitle">${p}</h3>
              <p class="galery-item-text">${L.charAt(0).toUpperCase()+L.slice(1)}</p>
            </li> `).join("")}}o.addEventListener("click",Y);function Y(p){var b;const h=p.target.closest(".pagination-button");if(h&&h.classList!==u.classList){h.classList.add("current-page"),u.classList.remove("current-page"),u=h;const x=Number(u.textContent);console.log(x),v(d,x),(b=document.getElementsByClassName("galary-title-and-list-wrapper")[0])==null||b.scrollIntoView({behavior:"smooth"})}}t.addEventListener("click",A);function A(p){console.log(p);const h=p.target.closest(".galary-item");if(!h)return;const b=h.dataset.name;t.innerHTML="",O(b,1,w),d=b,v=O}async function O(p,h,b=w){try{const x=`https://your-energy.b.goit.study/api/exercises?category=${p}&page=${h}&limit=${b}`,m=await fetch(x);if(!m.ok)throw new Error(`Request failed with status ${m.status}`);const E=await m.json();if(!E.results||E.results.length===0){console.log("No results found for your search parameters.");return}C(E.totalPages,h),g.classList.remove("is-hidden"),a.classList.add("is-hidden"),c.insertAdjacentHTML("beforeend",J(E.results)),s.textContent=`${p}`}catch(x){console.error(`Error: ${x.message}`)}}function J(p){return p.map(({name:h,target:b,rating:x,burnedCalories:m,time:E,_id:L,bodyPart:T})=>`
               <li class="exercise-item">
          <div class="exercise-item-wrapper">
            <div class="exercise-item-firth-wrapper">
              <p class="exercise-item-workout">WORKOUT</p>
              <p class="exercise-item-rating">${x}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 100 130"
                class="exercise-item-star"
              >
                <use href="./img/icon-sprite.svg#icon-Star-2"></use>
              </svg>
              <button type="button" class="exercise-item-button" id=${L}>
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
              <h3 class="exercise-item-subtitle">${h}</h3>
            </div>
            <ul class="exercise-item-list">
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Burned calories:<span class="information-text-span"
                    >${m} / ${E} min</span
                  >
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Body part:<span class="information-text-span">${T}</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Target:<span class="information-text-span">${b}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
         `).join("")}document.querySelector(".galary-search-wrapper input").addEventListener("input",I);async function K(p,h,b,x=w){try{const m=`https://your-energy.b.goit.study/api/exercises?bodypart=back&page=${h}&limit=${x}&keyword=${b}`,E=await fetch(m);if(!E.ok)throw new Error(`Request failed with status ${E.status}`);const L=await E.json();if(!L.results||L.results.length===0){console.log("No results found for your search parameters.");return}C(L.totalPages,h),g.classList.remove("is-hidden"),a.classList.add("is-hidden"),c.insertAdjacentHTML("beforeend",J(L.results)),s.textContent=`${p}`}catch(m){console.error(`Error: ${m.message}`)}}function I(p){console.log(p);const h=p.target.value;v=(b,x,m)=>K(b,x,h,m)}function C(p,h=1){var E,L;const b=document.getElementsByClassName("pagination")[0],x=T=>`
      <li>
        <button type="button" class="pagination-button">${T}</button>
      </li>`,m=[];for(let T=1;T<=p;T++)m.push(x(T));b.innerHTML=m.join(`
`),u=(E=o.children[h-1])==null?void 0:E.firstElementChild,(L=u==null?void 0:u.classList)==null||L.add("current-page"),b.classList.remove("is-hidden")}})();const Re=document.getElementById("closeModalButton"),Me=document.getElementById("additionalButton2"),Ae=document.getElementById("closeModalButton2"),S=document.getElementById("myModal"),de=document.getElementById("myModal2");let se=null,be=null;function we(e){S.style.display="block";const t=S.querySelector("img"),r=S.querySelector("h2"),n=S.querySelector(".text-modal"),i=S.querySelector(".burn-modal"),o=S.querySelector(".modal-rating"),s=S.querySelector(".modal-part"),c=S.querySelector(".modal-equipment"),g=S.querySelector(".modal-target"),a=S.querySelector(".modal-popularity");t.src=e.gifUrl,r.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),n.textContent=e.description,i.textContent=`${e.burnedCalories}/${e.time} min`,s.textContent=e.bodyPart,c.textContent=e.equipment,g.textContent=e.target,a.textContent=e.popularity,o.textContent=e.rating,se=e}async function Pe(e){try{const t=await Ne(e);if(!t){console.error("Не вдалося отримати дані про вправу.");return}we(t),be=e}catch(t){console.error(`Помилка: ${t.message}`)}}async function Ne(e){try{const t=await fetch(`https://your-energy.b.goit.study/api/exercises/${e}`);if(!t.ok)throw new Error("Помилка запиту до API");return await t.json()}catch(t){return console.error("Помилка при отриманні даних про вправу:",t),null}}const De=document.querySelectorAll(".exercise-item-button");De.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("id");Pe(t)})});Re.addEventListener("click",()=>S.style.display="none");Me.addEventListener("click",()=>{S.style.display="none",se&&be&&(we(se),de.style.display="block")});Ae.addEventListener("click",()=>de.style.display="none");S.style.display="none";de.style.display="none";const xe="quote",Fe=document.querySelector(".quotes-day-box");async function Ee(){const e=await Oe();if(console.log(e),!e||!e.quote||!e.author)throw new Error("Invalid data received from the server");return Ue(e),He(e),e}try{const e=Ee()}catch(e){console.log(e.message)}function Ue({quote:e,author:t}){Fe.innerHTML=`
        <h3 class="quotes-day-title">Quote of the day</h3>
        <p class="quotes-day-text">${e}</p>
        <p class="quotes-day-author">${t}</p>
    `}function He({quote:e,author:t}){const r={quote:e,author:t,date:new Date().getDate()};try{const n=JSON.stringify(r);localStorage.setItem(xe,n)}catch(n){console.log(n.message)}}async function ze(){try{const e=localStorage.getItem(xe);if(e){let t=JSON.parse(e),r=new Date().getDate();t.date!==r&&await Ee()}}catch(e){console.log(e.message)}}ze();const U=document.querySelectorAll(".rating-container label"),D=document.querySelectorAll(".rating-container label svg use");U.forEach((e,t)=>{e.addEventListener("click",r=>{for(let n=0;n<U.length;n++)n<=t?D[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):D[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("focus",r=>{for(let n=0;n<=t;n++)D[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let n=t+1;n<U.length;n++)D[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("blur",r=>{for(let n=0;n<U.length;n++)D[n].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const We=document.getElementById("selectedRat");U.forEach((e,t)=>{e.addEventListener("click",r=>{const n=(t+1).toFixed(1);We.textContent=n})});const Ye=document.getElementById("ratingForm");document.getElementById("submitRatingButton");const Je=document.getElementById("selectedRat"),Ke=document.getElementById("emailInput"),Ge=document.getElementById("commentInput");Ye.addEventListener("submit",e=>{e.preventDefault();const t="64f389465ae26083f39b17df",r=parseFloat(Je.textContent),n=Ke.value,i=Ge.value;if(!n){alert("The email field is required");return}console.log("Exercise ID:",t),console.log("Rate:",r),console.log("Email:",n),console.log("Comment:",i);const o=`https://your-energy.b.goit.study/api/exercises/${t}/rating`;fetch(o,{method:"PATCH",body:JSON.stringify({rate:r,email:n,comment:i}),headers:{"Content-Type":"application/json"}}).then(s=>s.json()).then(s=>{s.success?myModal2.style.display="none":alert(s.message)}).catch(s=>{console.error("Помилка:",s)})});let V,X;document.addEventListener("DOMContentLoaded",function(){V=document.getElementById("favoritesText"),X=document.getElementById("favoritesIcon");const e=document.getElementById("additionalButton1"),t=document.querySelector(".modal");e.addEventListener("click",()=>{const r=e.getAttribute("data-exercise-id"),n=document.querySelector(".title-modal").textContent,i=document.querySelector(".text-modal").textContent,o=t.querySelector(".burn-modal").textContent,s=t.querySelector(".modal-rating").textContent,c=t.querySelector(".modal-part").textContent,g=t.querySelector(".modal-equipment").textContent,a=t.querySelector(".modal-target").textContent,d=t.querySelector(".modal-popularity").textContent;let l=JSON.parse(localStorage.getItem("favoritesList"))||[];const u=l.findIndex(w=>w.exerciseID===r);u!==-1?(l.splice(u,1),localStorage.setItem("favoritesList",JSON.stringify(l)),alert("Exercise removed from favorites!")):(l.push({exerciseID:r,exerciseName:n,exerciseDescription:i,exerciseBurned:o,exercisePart:c,exerciseEquipment:g,exerciseTarget:a,exercisePopularity:d,exerciseRating:s}),localStorage.setItem("favoritesList",JSON.stringify(l)),alert("Exercise added to favorites!")),console.log("Exercise ID:",r),console.log("Exercise Name:",n),console.log("Exercise Description:",i),console.log("Favorites List:",l)}),additionalButton1.addEventListener("click",()=>{try{V&&(V.textContent="Add to favorites"),X&&X.setAttribute("xlink:href","./img/icon-sprite.svg#heart")}catch(r){console.error("Error while updating favorites:",r)}})});/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function ae(e){return typeof window.Node=="object"?e instanceof window.Node:e!==null&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function Qe(e){var t=Object.prototype.toString.call(e),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&r.test(t)&&(e.length===0||ae(e[0]))}/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function z(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(ae);if(ae(e))return[e];if(Qe(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function ce(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=j();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function j(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function _e(e,t){for(var r=ce(e),n=ce(t),i=[],o=0;o<4;o++)for(var s=[r[o],r[o+4],r[o+8],r[o+12]],c=0;c<4;c++){var g=c*4,a=[n[g],n[g+1],n[g+2],n[g+3]],d=s[0]*a[0]+s[1]*a[1]+s[2]*a[2]+s[3]*a[3];i[o+g]=d}return i}function Ve(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var r=t[2].split(", ").map(parseFloat);return ce(r)}}return j()}function Xe(e){var t=Math.PI/180*e,r=j();return r[5]=r[10]=Math.cos(t),r[6]=r[9]=Math.sin(t),r[9]*=-1,r}function Ze(e){var t=Math.PI/180*e,r=j();return r[0]=r[10]=Math.cos(t),r[2]=r[8]=Math.sin(t),r[2]*=-1,r}function et(e){var t=Math.PI/180*e,r=j();return r[0]=r[5]=Math.cos(t),r[1]=r[4]=Math.sin(t),r[4]*=-1,r}function fe(e,t){var r=j();return r[0]=e,r[5]=typeof t=="number"?t:e,r}function tt(e){var t=j();return t[12]=e,t}function rt(e){var t=j();return t[13]=e,t}/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var $e=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout(function(){return $e(t)},0)}}(),nt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$e;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var Le={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function ot(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function it(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var F={success:it,failure:ot};function Q(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function f(e,t){if(Q(e)){var r=Object.keys(e);return r.forEach(function(n){return t(e[n],n,e)})}if(e instanceof Array)return e.forEach(function(n,i){return t(n,i,e)});throw new TypeError("Expected either an array or object literal.")}function R(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(this.constructor.debug&&console){var n="%cScrollReveal: "+e;t.forEach(function(i){return n+=`
 — `+i}),console.log(n,"color: #ea654b;")}}function Se(){var e=this,t=function(){return{active:[],stale:[]}},r=t(),n=t(),i=t();try{f(z("[data-sr-id]"),function(o){var s=parseInt(o.getAttribute("data-sr-id"));r.active.push(s)})}catch(o){throw o}f(this.store.elements,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),f(r.stale,function(o){return delete e.store.elements[o]}),f(this.store.elements,function(o){i.active.indexOf(o.containerId)===-1&&i.active.push(o.containerId),o.hasOwnProperty("sequence")&&n.active.indexOf(o.sequence.id)===-1&&n.active.push(o.sequence.id)}),f(this.store.containers,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),f(i.stale,function(o){var s=e.store.containers[o].node;s.removeEventListener("scroll",e.delegate),s.removeEventListener("resize",e.delegate),delete e.store.containers[o]}),f(this.store.sequences,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),f(n.stale,function(o){return delete e.store.sequences[o]})}var pe=function(){var e={},t=document.documentElement.style;function r(n,i){if(i===void 0&&(i=t),n&&typeof n=="string"){if(e[n])return e[n];if(typeof i[n]=="string")return e[n]=n;if(typeof i["-webkit-"+n]=="string")return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return e={}},r}();function st(e){var t=window.getComputedStyle(e.node),r=t.position,n=e.config,i={},o=e.node.getAttribute("style")||"",s=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];i.computed=s?s.map(function(I){return I.trim()}).join("; ")+";":"",i.generated=s.some(function(I){return I.match(/visibility\s?:\s?visible/i)})?i.computed:s.concat(["visibility: visible"]).map(function(I){return I.trim()}).join("; ")+";";var c=parseFloat(t.opacity),g=isNaN(parseFloat(n.opacity))?parseFloat(t.opacity):parseFloat(n.opacity),a={computed:c!==g?"opacity: "+c+";":"",generated:c!==g?"opacity: "+g+";":""},d=[];if(parseFloat(n.distance)){var l=n.origin==="top"||n.origin==="bottom"?"Y":"X",u=n.distance;(n.origin==="top"||n.origin==="left")&&(u=/^-/.test(u)?u.substr(1):"-"+u);var w=u.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),q=w[0],k=w[1];switch(k){case"em":u=parseInt(t.fontSize)*q;break;case"px":u=q;break;case"%":u=l==="Y"?e.node.getBoundingClientRect().height*q/100:e.node.getBoundingClientRect().width*q/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}l==="Y"?d.push(rt(u)):d.push(tt(u))}n.rotate.x&&d.push(Xe(n.rotate.x)),n.rotate.y&&d.push(Ze(n.rotate.y)),n.rotate.z&&d.push(et(n.rotate.z)),n.scale!==1&&(n.scale===0?d.push(fe(2e-4)):d.push(fe(n.scale)));var v={};if(d.length){v.property=pe("transform"),v.computed={raw:t[v.property],matrix:Ve(t[v.property])},d.unshift(v.computed.matrix);var N=d.reduce(_e);v.generated={initial:v.property+": matrix3d("+N.join(", ")+");",final:v.property+": matrix3d("+v.computed.matrix.join(", ")+");"}}else v.generated={initial:"",final:""};var y={};if(a.generated||v.generated.initial){y.property=pe("transition"),y.computed=t[y.property],y.fragments=[];var Y=n.delay,A=n.duration,O=n.easing;a.generated&&y.fragments.push({delayed:"opacity "+A/1e3+"s "+O+" "+Y/1e3+"s",instant:"opacity "+A/1e3+"s "+O+" 0s"}),v.generated.initial&&y.fragments.push({delayed:v.property+" "+A/1e3+"s "+O+" "+Y/1e3+"s",instant:v.property+" "+A/1e3+"s "+O+" 0s"});var J=y.computed&&!y.computed.match(/all 0s|none 0s/);J&&y.fragments.unshift({delayed:y.computed,instant:y.computed});var K=y.fragments.reduce(function(I,C,p){return I.delayed+=p===0?C.delayed:", "+C.delayed,I.instant+=p===0?C.instant:", "+C.instant,I},{delayed:"",instant:""});y.generated={delayed:y.property+": "+K.delayed+";",instant:y.property+": "+K.instant+";"}}else y.generated={delayed:"",instant:""};return{inline:i,opacity:a,position:r,transform:v,transition:y}}function P(e,t){t.split(";").forEach(function(r){var n=r.split(":"),i=n[0],o=n.slice(1);i&&o&&(e.style[i.trim()]=o.join(":"))})}function ue(e){var t=this,r;try{f(z(e),function(n){var i=n.getAttribute("data-sr-id");if(i!==null){r=!0;var o=t.store.elements[i];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),P(o.node,o.styles.inline.generated),n.removeAttribute("data-sr-id"),delete t.store.elements[i]}})}catch(n){return R.call(this,"Clean failed.",n.message)}if(r)try{Se.call(this)}catch(n){return R.call(this,"Clean failed.",n.message)}}function at(){var e=this;f(this.store.elements,function(t){P(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),f(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.removeEventListener("scroll",e.delegate),r.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function W(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(Q(e))return f(t,function(n){f(n,function(i,o){Q(i)?((!e[o]||!Q(e[o]))&&(e[o]={}),W(e[o],i)):e[o]=i})}),e;throw new TypeError("Target must be an object literal.")}function _(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var le=function(){var e=0;return function(){return e++}}();function qe(){var e=this;Se.call(this),f(this.store.elements,function(t){var r=[t.styles.inline.generated];t.visible?(r.push(t.styles.opacity.computed),r.push(t.styles.transform.generated.final),t.revealed=!0):(r.push(t.styles.opacity.generated),r.push(t.styles.transform.generated.initial),t.revealed=!1),P(t.node,r.filter(function(n){return n!==""}).join(" "))}),f(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.addEventListener("scroll",e.delegate),r.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function H(e,t){t===void 0&&(t={});var r=t.pristine||this.pristine,n=e.config.useDelay==="always"||e.config.useDelay==="onload"&&r||e.config.useDelay==="once"&&!e.seen,i=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||i)return ct.call(this,e,n);if(t.reset||o)return lt.call(this,e)}function ct(e,t){var r=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?r.push(e.styles.transition.generated.delayed):r.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,P(e.node,r.filter(function(n){return n!==""}).join(" ")),Ie.call(this,e,t)}function lt(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,P(e.node,t.filter(function(r){return r!==""}).join(" ")),Ie.call(this,e)}function Ie(e,t){var r=this,n=t?e.config.duration+e.config.delay:e.config.duration,i=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),i(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&ue.call(r,e.node)},n-s)}}function ke(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return H.call(this,e,{reset:!0});var r=this.store.sequences[e.sequence.id],n=e.sequence.index;if(r){var i=new ge(r,"visible",this.store),o=new ge(r,"revealed",this.store);if(r.models={visible:i,revealed:o},!o.body.length){var s=r.members[i.body[0]],c=this.store.elements[s];if(c)return G.call(this,r,i.body[0],-1,t),G.call(this,r,i.body[0],1,t),H.call(this,c,{reveal:!0,pristine:t})}if(!r.blocked.head&&n===[].concat(o.head).pop()&&n>=[].concat(i.body).shift())return G.call(this,r,n,-1,t),H.call(this,e,{reveal:!0,pristine:t});if(!r.blocked.foot&&n===[].concat(o.foot).shift()&&n<=[].concat(i.body).pop())return G.call(this,r,n,1,t),H.call(this,e,{reveal:!0,pristine:t})}}function dt(e){var t=Math.abs(e);if(!isNaN(t))this.id=le(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function ge(e,t,r){var n=this;this.head=[],this.body=[],this.foot=[],f(e.members,function(i,o){var s=r.elements[i];s&&s[t]&&n.body.push(o)}),this.body.length&&f(e.members,function(i,o){var s=r.elements[i];s&&!s[t]&&(o<n.body[0]?n.head.push(o):n.foot.push(o))})}function G(e,t,r,n){var i=this,o=["head",null,"foot"][1+r],s=e.members[t+r],c=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,c&&ke.call(i,c,n)},e.interval)}function Te(e,t,r){var n=this;t===void 0&&(t={}),r===void 0&&(r=!1);var i=[],o,s=t.interval||Le.interval;try{s&&(o=new dt(s));var c=z(e);if(!c.length)throw new Error("Invalid reveal target.");var g=c.reduce(function(a,d){var l={},u=d.getAttribute("data-sr-id");u?(W(l,n.store.elements[u]),P(l.node,l.styles.inline.computed)):(l.id=le(),l.node=d,l.seen=!1,l.revealed=!1,l.visible=!1);var w=W({},l.config||n.defaults,t);if(!w.mobile&&_()||!w.desktop&&!_())return u&&ue.call(n,l),a;var q=z(w.container)[0];if(!q)throw new Error("Invalid container.");if(!q.contains(d))return a;var k;return k=ut(q,i,n.store.containers),k===null&&(k=le(),i.push({id:k,node:q})),l.config=w,l.containerId=k,l.styles=st(l),o&&(l.sequence={id:o.id,index:o.members.length},o.members.push(l.id)),a.push(l),a},[]);f(g,function(a){n.store.elements[a.id]=a,a.node.setAttribute("data-sr-id",a.id)})}catch(a){return R.call(this,"Reveal failed.",a.message)}f(i,function(a){n.store.containers[a.id]={id:a.id,node:a.node}}),o&&(this.store.sequences[o.id]=o),r!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(qe.bind(this),0))}function ut(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var n=null;return f(t,function(i){f(i,function(o){n===null&&o.node===e&&(n=o.id)})}),n}function ft(){var e=this;f(this.store.history,function(t){Te.call(e,t.target,t.options,!0)}),qe.call(this)}var pt=function(e){return(e>0)-(e<0)||+e},he=Math.sign||pt;function ye(e,t){var r=t?e.node.clientHeight:e.node.offsetHeight,n=t?e.node.clientWidth:e.node.offsetWidth,i=0,o=0,s=e.node;do isNaN(s.offsetTop)||(i+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;while(s);return{bounds:{top:i,right:o+n,bottom:i+r,left:o},height:r,width:n}}function gt(e){var t,r;return e.node===document.documentElement?(t=window.pageYOffset,r=window.pageXOffset):(t=e.node.scrollTop,r=e.node.scrollLeft),{top:t,left:r}}function ht(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(t){var r=Math.max(0,Math.min(1,e.config.viewFactor)),n=e.config.viewOffset,i={top:e.geometry.bounds.top+e.geometry.height*r,right:e.geometry.bounds.right-e.geometry.width*r,bottom:e.geometry.bounds.bottom-e.geometry.height*r,left:e.geometry.bounds.left+e.geometry.width*r},o={top:t.geometry.bounds.top+t.scroll.top+n.top,right:t.geometry.bounds.right+t.scroll.left-n.right,bottom:t.geometry.bounds.bottom+t.scroll.top-n.bottom,left:t.geometry.bounds.left+t.scroll.left+n.left};return i.top<o.bottom&&i.right>o.left&&i.bottom>o.top&&i.left<o.right||e.styles.position==="fixed"}}function yt(e,t){var r=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),nt(function(){var n=e.type==="init"||e.type==="resize";f(r.store.containers,function(i){n&&(i.geometry=ye.call(r,i,!0));var o=gt.call(r,i);i.scroll&&(i.direction={x:he(o.left-i.scroll.left),y:he(o.top-i.scroll.top)}),i.scroll=o}),f(t,function(i){(n||i.geometry===void 0)&&(i.geometry=ye.call(r,i)),i.visible=ht.call(r,i)}),f(t,function(i){i.sequence?ke.call(r,i):H.call(r,i)}),r.pristine=!1})}function mt(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function vt(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var bt="4.0.9",Z,ee,te,re,ne,B,oe,ie;function M(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==M.prototype;if(t)return new M(e);if(!M.isSupported())return R.call(this,"Instantiation failed.","This browser is not supported."),F.failure();var r;try{r=B?W({},B,e):W({},Le,e)}catch(i){return R.call(this,"Invalid configuration.",i.message),F.failure()}try{var n=z(r.container)[0];if(!n)throw new Error("Invalid container.")}catch(i){return R.call(this,i.message),F.failure()}return B=r,!B.mobile&&_()||!B.desktop&&!_()?(R.call(this,"This device is disabled.","desktop: "+B.desktop,"mobile: "+B.mobile),F.failure()):(F.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Z=Z||yt.bind(this),ee=ee||at.bind(this),te=te||Te.bind(this),re=re||ue.bind(this),ne=ne||ft.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Z}}),Object.defineProperty(this,"destroy",{get:function(){return ee}}),Object.defineProperty(this,"reveal",{get:function(){return te}}),Object.defineProperty(this,"clean",{get:function(){return re}}),Object.defineProperty(this,"sync",{get:function(){return ne}}),Object.defineProperty(this,"defaults",{get:function(){return B}}),Object.defineProperty(this,"version",{get:function(){return bt}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),ie||(ie=this))}M.isSupported=function(){return mt()&&vt()};Object.defineProperty(M,"debug",{get:function(){return oe||!1},set:function(e){return oe=typeof e=="boolean"?e:oe}});M();window.addEventListener("load",function(){$(function(){window.sr=M(),$(window).width()<768?($(".timeline-content").hasClass("js--fadeInLeft")&&$(".timeline-content").removeClass("js--fadeInLeft").addClass("js--fadeInRight"),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})):(sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})),sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})});const e="favoritesList",t=document.querySelector(".favorites-box"),r=document.querySelector(".favorites-box-deskription");let n=[];function i(){try{const o=localStorage.getItem(e);o?(r.style.display="none",n=JSON.parse(o),n.forEach(s=>{const c=document.createElement("ul");c.classList.add("galary-list"),c.innerHTML=`
<li class="exercise-item timeline-content js--fadeInLeft">
  <div class="exercise-item-wrapper">
    <div class="exercise-item-firth-wrapper">
      <p class="exercise-item-workout">${s.exerciseName}</p>
      <button type="button" class="button favourite-delete-button" data-card-id="${s.exerciseID}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 32 32"
          class="exercise-item-trash"
        >
          <use xlink:href="./img/icon-sprite.svg#trash"  style="fill: white; stroke: black"></use>
        </svg>
      </button>
      <button type="button" class="exercise-item-button" id="${s.id}">
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
      <h3 class="exercise-item-subtitle">${s.exerciseName}</h3>
    </div>
    <ul class="exercise-item-list">
      <li class="exercise-item-list-information">
        <p class="information-text">
          Burned calories:<span class="information-text-span"
            >${s.exerciseBurned}
          </span>
        </p>
      </li>
      <li class="exercise-item-list-information">
        <p class="information-text">
          Body part:<span class="information-text-span"
            >${s.exercisePart}</span
          >
        </p>
      </li>
      <li class="exercise-item-list-information">
        <p class="information-text">
          Target:<span class="information-text-span"
            >${s.exerciseTrget}</span
          >
        </p>
      </li>
    </ul>
  </div>
</li>
          `,t.appendChild(c)})):r.style.display="block"}catch(o){console.error(o)}}i()});const wt=document.querySelectorAll(".favourite-delete-button");wt.forEach(e=>{e.addEventListener("click",xt)});function xt(e){const t=e.target.getAttribute("data-card-id"),r=favBox.filter(i=>i.id!==t);localStorage.setItem(LS_KEY,JSON.stringify(r));const n=e.target.closest(".exercise-item");n&&n.remove()}const Ce=document.querySelector(".recommend-text-box"),Et=Ce.querySelector(".cover-text");function $t(){Et.style.transform="translateY(0)"}Ce.addEventListener("click",()=>{$t()});const Lt=document.querySelector(".scroll-up");Lt.addEventListener("click",()=>{window.scrollTo(0,0)});const me=document.querySelector(".scroll-up");window.onscroll=()=>{window.scrollY>768?me.classList.remove("btn-hidden"):window.scrollY<768&&me.classList.add("btn-hidden")};
