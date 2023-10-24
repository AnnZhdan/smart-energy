(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),i=()=>{const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");const n=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",i),r.addEventListener("click",i),window.addEventListener("resize",()=>{window.innerWidth>768&&e.classList.remove("is-open")}),document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){o.style.display="none",overlay.style.display="none"})})})();async function pe(e,t,r){const i=`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=${r}`;try{const o=await fetch(i);if(!o.ok)throw new Error(`Request failed with status ${o.status}`);return await o.json()}catch(o){return console.error("Error fetching data:",o),null}}async function Se(e,t,r,i,o,n){try{const s=`https://your-energy.b.goit.study/api/exercises?category=${e}&muscles=${t}&equipment=${r}&keyword=${i}&page=${o}&limit=${n}`,c=await fetch(s);if(!c.ok)throw new Error(`Request failed with status ${c.status}`);const p=await c.json();if(!p.results||p.results.length===0){console.log("No results found for your search parameters.");return}p.results.forEach((a,d)=>{console.log(`Exercise #${d+1}:`),console.log(`Name: ${a.name}`),console.log(`Description: ${a.description}`),console.log(`GIF URL: ${a.gifUrl}`),console.log(`Burned Calories: ${a.burnedCalories}`),console.log(`Duration: ${a.duration} minutes`),console.log(`Rating: ${a.rating}`),console.log("-----------------------------------")})}catch(s){console.error(`Error: ${s.message}`)}}async function qe(e){try{const t=`https://your-energy.b.goit.study/api/exercises/${e}`,r=await fetch(t);if(!r.ok)throw new Error(`Request failed with status ${r.status}`);const i=await r.json();if(!i.results||i.results.length===0){console.log("Exercise not found for the specified exerciseID.");return}const o=document.getElementById("exercise-details"),n=i.results[0];o.innerHTML=`
          <h2>${n.name}</h2>
          <p><strong>Body Part:</strong> ${n.bodyPart}</p>
          <p><strong>Equipment:</strong> ${n.equipment}</p>
          <p><strong>Target:</strong> ${n.target}</p>
          <p><strong>Description:</strong> ${n.description}</p>
          <p><strong>Burned Calories:</strong> ${n.burnedCalories}</p>
          <p><strong>Duration:</strong> ${n.time} minutes</p>
          <p><strong>Rating:</strong> ${n.rating}</p>
          <p><strong>Popularity:</strong> ${n.popularity}</p>
          <p><strong>GIF URL:</strong> <a href="${n.gifUrl}" target="_blank">View</a></p>
      `}catch(t){console.error(`Error: ${t.message}`)}}async function Ie(){try{const e=await fetch("https://your-energy.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();if(t&&t.author&&t.quote)return console.log(`Quote of the day: "${t.quote}" - ${t.author}`),t;console.log("Failed to get the quote of the day.")}catch(e){console.error("Error while fetching the quote of the day:",e)}}pe("Muscles",1,12).then(e=>{e&&console.log(e)});Se("back","lats","barbell","pull",1,10);qe("64f389465ae26083f39b17c2");(()=>{if(!document.querySelector("section.galary"))return;console.log(window.innerWidth);const t=document.querySelector(".galary-list"),r=document.querySelector(".galary-filters-button1"),i=document.querySelector(".galary-filters-button2"),o=document.querySelector(".galary-filters-button3"),n=document.querySelector(".pagination"),s=document.querySelector(".galary-title2 span"),c=document.querySelector(".galary-list"),p=document.querySelector(".galary-title-and-list-wrapper-ex"),a=document.querySelector(".galary-title-and-list-wrapper");let d="Body parts",l=r,f=n.children[0].firstElementChild,m=9;const E=window.screen.availWidth;function S(){if(E>=768)return m=12}S(),R(d,1,m),n.classList.add("is-hidden"),r.addEventListener("click",g),i.addEventListener("click",g),o.addEventListener("click",g);function g(b){b.preventDefault(),l.classList.remove("galary-filter-checked"),d=String(this.textContent),this.classList.add("galary-filter-checked"),R(d,1,m),l=this}function R(b,L,y){n.classList.add("is-hidden"),t.innerHTML="",pe(b,L,y).then(v=>{if(v)switch(t.insertAdjacentHTML("beforeend",x(v.results)),v.totalPages){case 1:n.classList.remove("is-hidden"),n.children[1].classList.add("is-hidden"),n.children[2].classList.add("is-hidden");break;case 2:n.classList.remove("is-hidden"),n.children[1].classList.remove("is-hidden"),n.children[2].classList.add("is-hidden");break;case 3:n.classList.remove("is-hidden"),n.children[1].classList.remove("is-hidden"),n.children[2].classList.remove("is-hidden");break;default:console.log("Something is wrong!")}});function x(v){return v.map(({filter:j,name:M,imgURL:Y})=>`
           <li class="galary-item">
              <img
                src="${Y}"
                alt="${M}"
                loading="lazy"
                class="galary-item-img"
              />
              <h3 class="galary-item-subtitle">${b}</h3>
              <p class="galery-item-text">${M.charAt(0).toUpperCase()+M.slice(1)}</p>
            </li> `).join("")}}n.children[0].addEventListener("click",h),n.children[1].addEventListener("click",h),n.children[2].addEventListener("click",h);function h(b){if(this.firstElementChild.classList!==f.classList){this.firstElementChild.classList.add("current-page"),f.classList.remove("current-page"),f=this.firstElementChild;let L=Number(f.textContent);console.log(L),R(d,L)}}t.addEventListener("click",z);function z(b){t.innerHTML="",C("back",1,m)}async function C(b,L,y){try{const x=`https://your-energy.b.goit.study/api/exercises?category=${b}&page=${L}&limit=${y}`,v=await fetch(x);if(!v.ok)throw new Error(`Request failed with status ${v.status}`);const j=await v.json();if(!j.results||j.results.length===0){console.log("No results found for your search parameters.");return}p.classList.remove("is-hidden"),a.classList.add("is-hidden"),c.insertAdjacentHTML("beforeend",B(j.results)),s.textContent=`${b}`}catch(x){console.error(`Error: ${x.message}`)}}function B(b){return b.map(({name:L,target:y,rating:x,burnedCalories:v,time:j,id:M,bodyPart:Y})=>`
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
              <button type="button" class="exercise-item-button" id="${M}">
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
              <h3 class="exercise-item-subtitle">${L}</h3>
            </div>
            <ul class="exercise-item-list">
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Burned calories:<span class="information-text-span"
                    >${v} / ${j} min</span
                  >
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Body part:<span class="information-text-span">${Y}</span>
                </p>
              </li>
              <li class="exercise-item-list-information">
                <p class="information-text">
                  Target:<span class="information-text-span">${y}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
         `).join("")}})();const ke=document.getElementById("closeModalButton"),Te=document.getElementById("additionalButton2"),Ce=document.getElementById("closeModalButton2"),w=document.getElementById("myModal"),se=document.getElementById("myModal2");let re=null,he=null;function ge(e){w.style.display="block";const t=w.querySelector("img"),r=w.querySelector("h2"),i=w.querySelector(".text-modal"),o=w.querySelector(".burn-modal"),n=w.querySelector(".modal-rating"),s=w.querySelector(".modal-part"),c=w.querySelector(".modal-equipment"),p=w.querySelector(".modal-target"),a=w.querySelector(".modal-popularity");t.src=e.gifUrl,r.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),i.textContent=e.description,o.textContent=`${e.burnedCalories}/${e.time} min`,s.textContent=e.bodyPart,c.textContent=e.equipment,p.textContent=e.target,a.textContent=e.popularity,n.textContent=e.rating,re=e}async function Be(e){try{const t=await je(e);if(!t){console.error("Не вдалося отримати дані про вправу.");return}ge(t),he=e}catch(t){console.error(`Помилка: ${t.message}`)}}async function je(e){try{const t=await fetch(`https://your-energy.b.goit.study/api/exercises/${e}`);if(!t.ok)throw new Error("Помилка запиту до API");return await t.json()}catch(t){return console.error("Помилка при отриманні даних про вправу:",t),null}}const Oe=document.querySelectorAll(".exercise-item-button");Oe.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("id");Be(t)})});ke.addEventListener("click",()=>w.style.display="none");Te.addEventListener("click",()=>{w.style.display="none",re&&he&&(ge(re),se.style.display="block")});Ce.addEventListener("click",()=>se.style.display="none");w.style.display="none";se.style.display="none";const ye="quote",Re=document.querySelector(".qoute-inside-container");async function Me(){try{const e=await Ie();if(console.log("Server Response:",e),!e||!e.quote||!e.author)throw new Error("Invalid data received from the server");Pe(e),Ae(e)}catch(e){console.log(e.message)}}function Pe({quote:e,author:t}){Re.innerHTML=`<div class="qoute-inside-container">
        <p class="quotes-day-text">${e}</p>
        <p class="quotes-day-author">${t}</p>
    </div>`}function Ae({quote:e,author:t}){const r={quote:e,author:t,date:new Date().getDate()};try{const i=JSON.stringify(r);localStorage.setItem(ye,i)}catch(i){console.log(i.message)}}async function De(){try{const e=localStorage.getItem(ye);if(e){let t=JSON.parse(e),r=new Date().getDate();t.date!==r&&await Me()}}catch(e){console.log(e.message)}}De();const D=document.querySelectorAll(".rating-container label"),P=document.querySelectorAll(".rating-container label svg use");D.forEach((e,t)=>{e.addEventListener("click",r=>{for(let i=0;i<D.length;i++)i<=t?P[i].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):P[i].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("focus",r=>{for(let i=0;i<=t;i++)P[i].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let i=t+1;i<D.length;i++)P[i].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),e.addEventListener("blur",r=>{for(let i=0;i<D.length;i++)P[i].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const Ne=document.getElementById("selectedRat");D.forEach((e,t)=>{e.addEventListener("click",r=>{const i=(t+1).toFixed(1);Ne.textContent=i})});const Fe=document.getElementById("ratingForm");document.getElementById("submitRatingButton");const Ue=document.getElementById("selectedRat"),ze=document.getElementById("emailInput"),He=document.getElementById("commentInput");Fe.addEventListener("submit",e=>{e.preventDefault();const t="64f389465ae26083f39b17df",r=parseFloat(Ue.textContent),i=ze.value,o=He.value;if(!i){alert("The email field is required");return}console.log("Exercise ID:",t),console.log("Rate:",r),console.log("Email:",i),console.log("Comment:",o);const n=`https://your-energy.b.goit.study/api/exercises/${t}/rating`;fetch(n,{method:"PATCH",body:JSON.stringify({rate:r,email:i,comment:o}),headers:{"Content-Type":"application/json"}}).then(s=>s.json()).then(s=>{s.success?myModal2.style.display="none":alert(s.message)}).catch(s=>{console.error("Помилка:",s)})});let G,K;document.addEventListener("DOMContentLoaded",function(){G=document.getElementById("favoritesText"),K=document.getElementById("favoritesIcon");const e=document.getElementById("additionalButton1"),t=document.querySelector(".modal");e.addEventListener("click",()=>{const r=e.getAttribute("data-exercise-id"),i=document.querySelector(".title-modal").textContent,o=document.querySelector(".text-modal").textContent,n=t.querySelector(".burn-modal").textContent,s=t.querySelector(".modal-rating").textContent,c=t.querySelector(".modal-part").textContent,p=t.querySelector(".modal-equipment").textContent,a=t.querySelector(".modal-target").textContent,d=t.querySelector(".modal-popularity").textContent;let l=JSON.parse(localStorage.getItem("favoritesList"))||[];const f=l.findIndex(m=>m.exerciseID===r);f!==-1?(l.splice(f,1),localStorage.setItem("favoritesList",JSON.stringify(l)),alert("Exercise removed from favorites!")):(l.push({exerciseID:r,exerciseName:i,exerciseDescription:o,exerciseBurned:n,exercisePart:c,exerciseEquipment:p,exerciseTarget:a,exercisePopularity:d,exerciseRating:s}),localStorage.setItem("favoritesList",JSON.stringify(l)),alert("Exercise added to favorites!")),console.log("Exercise ID:",r),console.log("Exercise Name:",i),console.log("Exercise Description:",o),console.log("Favorites List:",l)}),additionalButton1.addEventListener("click",()=>{try{G&&(G.textContent="Add to favorites"),K&&K.setAttribute("xlink:href","./img/icon-sprite.svg#heart")}catch(r){console.error("Error while updating favorites:",r)}})});/*! @license is-dom-node v1.0.4

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

*/function ie(e){return typeof window.Node=="object"?e instanceof window.Node:e!==null&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

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

*/function We(e){var t=Object.prototype.toString.call(e),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&r.test(t)&&(e.length===0||ie(e[0]))}/*! @license Tealight v0.3.6

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

*/function F(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(ie);if(ie(e))return[e];if(We(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

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
*/function ne(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=I();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function I(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function Je(e,t){for(var r=ne(e),i=ne(t),o=[],n=0;n<4;n++)for(var s=[r[n],r[n+4],r[n+8],r[n+12]],c=0;c<4;c++){var p=c*4,a=[i[p],i[p+1],i[p+2],i[p+3]],d=s[0]*a[0]+s[1]*a[1]+s[2]*a[2]+s[3]*a[3];o[n+p]=d}return o}function Ye(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var r=t[2].split(", ").map(parseFloat);return ne(r)}}return I()}function Ge(e){var t=Math.PI/180*e,r=I();return r[5]=r[10]=Math.cos(t),r[6]=r[9]=Math.sin(t),r[9]*=-1,r}function Ke(e){var t=Math.PI/180*e,r=I();return r[0]=r[10]=Math.cos(t),r[2]=r[8]=Math.sin(t),r[2]*=-1,r}function Qe(e){var t=Math.PI/180*e,r=I();return r[0]=r[5]=Math.cos(t),r[1]=r[4]=Math.sin(t),r[4]*=-1,r}function ce(e,t){var r=I();return r[0]=e,r[5]=typeof t=="number"?t:e,r}function _e(e){var t=I();return t[12]=e,t}function Xe(e){var t=I();return t[13]=e,t}/*! @license miniraf v1.0.0

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

*/var me=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout(function(){return me(t)},0)}}(),Ve=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||me;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var ve={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function Ze(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function et(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var A={success:et,failure:Ze};function W(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function u(e,t){if(W(e)){var r=Object.keys(e);return r.forEach(function(i){return t(e[i],i,e)})}if(e instanceof Array)return e.forEach(function(i,o){return t(i,o,e)});throw new TypeError("Expected either an array or object literal.")}function k(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(o){return i+=`
 — `+o}),console.log(i,"color: #ea654b;")}}function be(){var e=this,t=function(){return{active:[],stale:[]}},r=t(),i=t(),o=t();try{u(F("[data-sr-id]"),function(n){var s=parseInt(n.getAttribute("data-sr-id"));r.active.push(s)})}catch(n){throw n}u(this.store.elements,function(n){r.active.indexOf(n.id)===-1&&r.stale.push(n.id)}),u(r.stale,function(n){return delete e.store.elements[n]}),u(this.store.elements,function(n){o.active.indexOf(n.containerId)===-1&&o.active.push(n.containerId),n.hasOwnProperty("sequence")&&i.active.indexOf(n.sequence.id)===-1&&i.active.push(n.sequence.id)}),u(this.store.containers,function(n){o.active.indexOf(n.id)===-1&&o.stale.push(n.id)}),u(o.stale,function(n){var s=e.store.containers[n].node;s.removeEventListener("scroll",e.delegate),s.removeEventListener("resize",e.delegate),delete e.store.containers[n]}),u(this.store.sequences,function(n){i.active.indexOf(n.id)===-1&&i.stale.push(n.id)}),u(i.stale,function(n){return delete e.store.sequences[n]})}var le=function(){var e={},t=document.documentElement.style;function r(i,o){if(o===void 0&&(o=t),i&&typeof i=="string"){if(e[i])return e[i];if(typeof o[i]=="string")return e[i]=i;if(typeof o["-webkit-"+i]=="string")return e[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return e={}},r}();function tt(e){var t=window.getComputedStyle(e.node),r=t.position,i=e.config,o={},n=e.node.getAttribute("style")||"",s=n.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];o.computed=s?s.map(function(y){return y.trim()}).join("; ")+";":"",o.generated=s.some(function(y){return y.match(/visibility\s?:\s?visible/i)})?o.computed:s.concat(["visibility: visible"]).map(function(y){return y.trim()}).join("; ")+";";var c=parseFloat(t.opacity),p=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),a={computed:c!==p?"opacity: "+c+";":"",generated:c!==p?"opacity: "+p+";":""},d=[];if(parseFloat(i.distance)){var l=i.origin==="top"||i.origin==="bottom"?"Y":"X",f=i.distance;(i.origin==="top"||i.origin==="left")&&(f=/^-/.test(f)?f.substr(1):"-"+f);var m=f.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),E=m[0],S=m[1];switch(S){case"em":f=parseInt(t.fontSize)*E;break;case"px":f=E;break;case"%":f=l==="Y"?e.node.getBoundingClientRect().height*E/100:e.node.getBoundingClientRect().width*E/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}l==="Y"?d.push(Xe(f)):d.push(_e(f))}i.rotate.x&&d.push(Ge(i.rotate.x)),i.rotate.y&&d.push(Ke(i.rotate.y)),i.rotate.z&&d.push(Qe(i.rotate.z)),i.scale!==1&&(i.scale===0?d.push(ce(2e-4)):d.push(ce(i.scale)));var g={};if(d.length){g.property=le("transform"),g.computed={raw:t[g.property],matrix:Ye(t[g.property])},d.unshift(g.computed.matrix);var R=d.reduce(Je);g.generated={initial:g.property+": matrix3d("+R.join(", ")+");",final:g.property+": matrix3d("+g.computed.matrix.join(", ")+");"}}else g.generated={initial:"",final:""};var h={};if(a.generated||g.generated.initial){h.property=le("transition"),h.computed=t[h.property],h.fragments=[];var z=i.delay,C=i.duration,B=i.easing;a.generated&&h.fragments.push({delayed:"opacity "+C/1e3+"s "+B+" "+z/1e3+"s",instant:"opacity "+C/1e3+"s "+B+" 0s"}),g.generated.initial&&h.fragments.push({delayed:g.property+" "+C/1e3+"s "+B+" "+z/1e3+"s",instant:g.property+" "+C/1e3+"s "+B+" 0s"});var b=h.computed&&!h.computed.match(/all 0s|none 0s/);b&&h.fragments.unshift({delayed:h.computed,instant:h.computed});var L=h.fragments.reduce(function(y,x,v){return y.delayed+=v===0?x.delayed:", "+x.delayed,y.instant+=v===0?x.instant:", "+x.instant,y},{delayed:"",instant:""});h.generated={delayed:h.property+": "+L.delayed+";",instant:h.property+": "+L.instant+";"}}else h.generated={delayed:"",instant:""};return{inline:o,opacity:a,position:r,transform:g,transition:h}}function O(e,t){t.split(";").forEach(function(r){var i=r.split(":"),o=i[0],n=i.slice(1);o&&n&&(e.style[o.trim()]=n.join(":"))})}function ae(e){var t=this,r;try{u(F(e),function(i){var o=i.getAttribute("data-sr-id");if(o!==null){r=!0;var n=t.store.elements[o];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),O(n.node,n.styles.inline.generated),i.removeAttribute("data-sr-id"),delete t.store.elements[o]}})}catch(i){return k.call(this,"Clean failed.",i.message)}if(r)try{be.call(this)}catch(i){return k.call(this,"Clean failed.",i.message)}}function rt(){var e=this;u(this.store.elements,function(t){O(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),u(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.removeEventListener("scroll",e.delegate),r.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function U(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(W(e))return u(t,function(i){u(i,function(o,n){W(o)?((!e[n]||!W(e[n]))&&(e[n]={}),U(e[n],o)):e[n]=o})}),e;throw new TypeError("Target must be an object literal.")}function J(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var oe=function(){var e=0;return function(){return e++}}();function we(){var e=this;be.call(this),u(this.store.elements,function(t){var r=[t.styles.inline.generated];t.visible?(r.push(t.styles.opacity.computed),r.push(t.styles.transform.generated.final),t.revealed=!0):(r.push(t.styles.opacity.generated),r.push(t.styles.transform.generated.initial),t.revealed=!1),O(t.node,r.filter(function(i){return i!==""}).join(" "))}),u(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.addEventListener("scroll",e.delegate),r.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function N(e,t){t===void 0&&(t={});var r=t.pristine||this.pristine,i=e.config.useDelay==="always"||e.config.useDelay==="onload"&&r||e.config.useDelay==="once"&&!e.seen,o=e.visible&&!e.revealed,n=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||o)return it.call(this,e,i);if(t.reset||n)return nt.call(this,e)}function it(e,t){var r=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?r.push(e.styles.transition.generated.delayed):r.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,O(e.node,r.filter(function(i){return i!==""}).join(" ")),xe.call(this,e,t)}function nt(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,O(e.node,t.filter(function(r){return r!==""}).join(" ")),xe.call(this,e)}function xe(e,t){var r=this,i=t?e.config.duration+e.config.delay:e.config.duration,o=e.revealed?e.config.beforeReveal:e.config.beforeReset,n=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),o(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){n(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&ae.call(r,e.node)},i-s)}}function Ee(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return N.call(this,e,{reset:!0});var r=this.store.sequences[e.sequence.id],i=e.sequence.index;if(r){var o=new de(r,"visible",this.store),n=new de(r,"revealed",this.store);if(r.models={visible:o,revealed:n},!n.body.length){var s=r.members[o.body[0]],c=this.store.elements[s];if(c)return H.call(this,r,o.body[0],-1,t),H.call(this,r,o.body[0],1,t),N.call(this,c,{reveal:!0,pristine:t})}if(!r.blocked.head&&i===[].concat(n.head).pop()&&i>=[].concat(o.body).shift())return H.call(this,r,i,-1,t),N.call(this,e,{reveal:!0,pristine:t});if(!r.blocked.foot&&i===[].concat(n.foot).shift()&&i<=[].concat(o.body).pop())return H.call(this,r,i,1,t),N.call(this,e,{reveal:!0,pristine:t})}}function ot(e){var t=Math.abs(e);if(!isNaN(t))this.id=oe(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function de(e,t,r){var i=this;this.head=[],this.body=[],this.foot=[],u(e.members,function(o,n){var s=r.elements[o];s&&s[t]&&i.body.push(n)}),this.body.length&&u(e.members,function(o,n){var s=r.elements[o];s&&!s[t]&&(n<i.body[0]?i.head.push(n):i.foot.push(n))})}function H(e,t,r,i){var o=this,n=["head",null,"foot"][1+r],s=e.members[t+r],c=this.store.elements[s];e.blocked[n]=!0,setTimeout(function(){e.blocked[n]=!1,c&&Ee.call(o,c,i)},e.interval)}function Le(e,t,r){var i=this;t===void 0&&(t={}),r===void 0&&(r=!1);var o=[],n,s=t.interval||ve.interval;try{s&&(n=new ot(s));var c=F(e);if(!c.length)throw new Error("Invalid reveal target.");var p=c.reduce(function(a,d){var l={},f=d.getAttribute("data-sr-id");f?(U(l,i.store.elements[f]),O(l.node,l.styles.inline.computed)):(l.id=oe(),l.node=d,l.seen=!1,l.revealed=!1,l.visible=!1);var m=U({},l.config||i.defaults,t);if(!m.mobile&&J()||!m.desktop&&!J())return f&&ae.call(i,l),a;var E=F(m.container)[0];if(!E)throw new Error("Invalid container.");if(!E.contains(d))return a;var S;return S=st(E,o,i.store.containers),S===null&&(S=oe(),o.push({id:S,node:E})),l.config=m,l.containerId=S,l.styles=tt(l),n&&(l.sequence={id:n.id,index:n.members.length},n.members.push(l.id)),a.push(l),a},[]);u(p,function(a){i.store.elements[a.id]=a,a.node.setAttribute("data-sr-id",a.id)})}catch(a){return k.call(this,"Reveal failed.",a.message)}u(o,function(a){i.store.containers[a.id]={id:a.id,node:a.node}}),n&&(this.store.sequences[n.id]=n),r!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(we.bind(this),0))}function st(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var i=null;return u(t,function(o){u(o,function(n){i===null&&n.node===e&&(i=n.id)})}),i}function at(){var e=this;u(this.store.history,function(t){Le.call(e,t.target,t.options,!0)}),we.call(this)}var ct=function(e){return(e>0)-(e<0)||+e},ue=Math.sign||ct;function fe(e,t){var r=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,o=0,n=0,s=e.node;do isNaN(s.offsetTop)||(o+=s.offsetTop),isNaN(s.offsetLeft)||(n+=s.offsetLeft),s=s.offsetParent;while(s);return{bounds:{top:o,right:n+i,bottom:o+r,left:n},height:r,width:i}}function lt(e){var t,r;return e.node===document.documentElement?(t=window.pageYOffset,r=window.pageXOffset):(t=e.node.scrollTop,r=e.node.scrollLeft),{top:t,left:r}}function dt(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(t){var r=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,o={top:e.geometry.bounds.top+e.geometry.height*r,right:e.geometry.bounds.right-e.geometry.width*r,bottom:e.geometry.bounds.bottom-e.geometry.height*r,left:e.geometry.bounds.left+e.geometry.width*r},n={top:t.geometry.bounds.top+t.scroll.top+i.top,right:t.geometry.bounds.right+t.scroll.left-i.right,bottom:t.geometry.bounds.bottom+t.scroll.top-i.bottom,left:t.geometry.bounds.left+t.scroll.left+i.left};return o.top<n.bottom&&o.right>n.left&&o.bottom>n.top&&o.left<n.right||e.styles.position==="fixed"}}function ut(e,t){var r=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),Ve(function(){var i=e.type==="init"||e.type==="resize";u(r.store.containers,function(o){i&&(o.geometry=fe.call(r,o,!0));var n=lt.call(r,o);o.scroll&&(o.direction={x:ue(n.left-o.scroll.left),y:ue(n.top-o.scroll.top)}),o.scroll=n}),u(t,function(o){(i||o.geometry===void 0)&&(o.geometry=fe.call(r,o)),o.visible=dt.call(r,o)}),u(t,function(o){o.sequence?Ee.call(r,o):N.call(r,o)}),r.pristine=!1})}function ft(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function pt(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var ht="4.0.9",Q,_,X,V,Z,q,ee,te;function T(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==T.prototype;if(t)return new T(e);if(!T.isSupported())return k.call(this,"Instantiation failed.","This browser is not supported."),A.failure();var r;try{r=q?U({},q,e):U({},ve,e)}catch(o){return k.call(this,"Invalid configuration.",o.message),A.failure()}try{var i=F(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(o){return k.call(this,o.message),A.failure()}return q=r,!q.mobile&&J()||!q.desktop&&!J()?(k.call(this,"This device is disabled.","desktop: "+q.desktop,"mobile: "+q.mobile),A.failure()):(A.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Q=Q||ut.bind(this),_=_||rt.bind(this),X=X||Le.bind(this),V=V||ae.bind(this),Z=Z||at.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Q}}),Object.defineProperty(this,"destroy",{get:function(){return _}}),Object.defineProperty(this,"reveal",{get:function(){return X}}),Object.defineProperty(this,"clean",{get:function(){return V}}),Object.defineProperty(this,"sync",{get:function(){return Z}}),Object.defineProperty(this,"defaults",{get:function(){return q}}),Object.defineProperty(this,"version",{get:function(){return ht}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),te||(te=this))}T.isSupported=function(){return ft()&&pt()};Object.defineProperty(T,"debug",{get:function(){return ee||!1},set:function(e){return ee=typeof e=="boolean"?e:ee}});T();window.addEventListener("load",function(){$(function(){window.sr=T(),$(window).width()<768?($(".timeline-content").hasClass("js--fadeInLeft")&&$(".timeline-content").removeClass("js--fadeInLeft").addClass("js--fadeInRight"),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})):(sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})),sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})});const e="favoritesList",t=document.querySelector(".favorites-box"),r=document.querySelector(".favorites-box-deskription");let i=[];function o(){try{const n=localStorage.getItem(e);n?(r.style.display="none",i=JSON.parse(n),i.forEach(s=>{const c=document.createElement("ul");c.classList.add("galary-list"),c.innerHTML=`
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
          `,t.appendChild(c)})):r.style.display="block"}catch(n){console.error(n)}}o()});const gt=document.querySelectorAll(".favourite-delete-button");gt.forEach(e=>{e.addEventListener("click",yt)});function yt(e){const t=e.target.getAttribute("data-card-id"),r=favBox.filter(o=>o.id!==t);localStorage.setItem(LS_KEY,JSON.stringify(r));const i=e.target.closest(".exercise-item");i&&i.remove()}const $e=document.querySelector(".recommend-text-box"),mt=$e.querySelector(".cover-text");function vt(){mt.style.transform="translateY(0)"}$e.addEventListener("click",()=>{vt()});
