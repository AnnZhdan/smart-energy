/* empty css               */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const y=document.getElementById("openModalButton"),h=document.getElementById("closeModalButton"),E=document.getElementById("additionalButton2"),$=document.getElementById("closeModalButton2"),a=document.getElementById("myModal"),f=document.getElementById("myModal2");function w(n){a.style.display="block";const e=a.querySelector("img"),s=a.querySelector("h2"),t=a.querySelector("p"),o=a.querySelector(".modal-rating");e.src=n.gifUrl,e.alt=n.name,s.textContent=n.name,t.textContent=n.description,o.innerHTML="";for(let r=0;r<n.rating;r++){const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("width","25"),i.setAttribute("height","25");const l=document.createElementNS("http://www.w3.org/2000/svg","use");l.setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"),i.appendChild(l),o.appendChild(i)}}async function b(n){try{const e=await v(n);if(!e){console.error("Не вдалося отримати дані про вправу.");return}w(e)}catch(e){console.error(`Помилка: ${e.message}`)}}async function v(n){try{const e=await fetch(`https://your-energy.b.goit.study/api/exercises/${n}`);if(!e.ok)throw new Error("Помилка запиту до API");return await e.json()}catch(e){return console.error("Помилка при отриманні даних про вправу:",e),null}}y.addEventListener("click",()=>{b("64f389465ae26083f39b17c2")});h.addEventListener("click",()=>a.style.display="none");E.addEventListener("click",()=>f.style.display="block");$.addEventListener("click",()=>f.style.display="none");const d=document.querySelectorAll(".rating-container label"),u=document.querySelectorAll(".rating-container label svg use");d.forEach((n,e)=>{n.addEventListener("click",s=>{for(let t=0;t<d.length;t++)t<=e?u[t].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):u[t].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),n.addEventListener("focus",s=>{for(let t=0;t<=e;t++)u[t].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let t=e+1;t<d.length;t++)u[t].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),n.addEventListener("blur",s=>{for(let t=0;t<d.length;t++)u[t].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const p=document.getElementById("ratingForm");document.getElementById("submitRatingButton");p.addEventListener("submit",n=>{n.preventDefault();const e=new FormData(p);fetch("url",{method:"POST",body:e}).then(s=>s.json()).then(s=>{s.success?myModal2.style.display="none":alert(s.message)}).catch(s=>{console.error("Помилка:",s)})});async function B(n,e,s){const t=`https://your-energy.b.goit.study/api/filters?filter=${n}&page=${e}&limit=${s}`;try{const o=await fetch(t);if(!o.ok)throw new Error(`Request failed with status ${o.status}`);return(await o.json()).results}catch(o){return console.error("Error fetching data:",o),null}}async function k(n,e,s,t,o,r){try{const i=`https://your-energy.b.goit.study/api/exercises?category=${n}&muscles=${e}&equipment=${s}&keyword=${t}&page=${o}&limit=${r}`,l=await fetch(i);if(!l.ok)throw new Error(`Request failed with status ${l.status}`);const g=await l.json();if(!g.results||g.results.length===0){console.log("No results found for your search parameters.");return}g.results.forEach((c,m)=>{console.log(`Exercise #${m+1}:`),console.log(`Name: ${c.name}`),console.log(`Description: ${c.description}`),console.log(`GIF URL: ${c.gifUrl}`),console.log(`Burned Calories: ${c.burnedCalories}`),console.log(`Duration: ${c.duration} minutes`),console.log(`Rating: ${c.rating}`),console.log("-----------------------------------")})}catch(i){console.error(`Error: ${i.message}`)}}async function I(n){try{const e=`https://your-energy.b.goit.study/api/exercises/${n}`,s=await fetch(e);if(!s.ok)throw new Error(`Request failed with status ${s.status}`);const t=await s.json();if(!t.results||t.results.length===0){console.log("Exercise not found for the specified exerciseID.");return}const o=document.getElementById("exercise-details"),r=t.results[0];o.innerHTML=`
            <h2>${r.name}</h2>
            <p><strong>Body Part:</strong> ${r.bodyPart}</p>
            <p><strong>Equipment:</strong> ${r.equipment}</p>
            <p><strong>Target:</strong> ${r.target}</p>
            <p><strong>Description:</strong> ${r.description}</p>
            <p><strong>Burned Calories:</strong> ${r.burnedCalories}</p>
            <p><strong>Duration:</strong> ${r.duration} minutes</p>
            <p><strong>Rating:</strong> ${r.rating}</p>
            <p><strong>Popularity:</strong> ${r.popularity}</p>
            <p><strong>GIF URL:</strong> <a href="${r.gifUrl}" target="_blank">View</a></p>
        `}catch(e){console.error(`Error: ${e.message}`)}}B("Muscles",1,12).then(n=>{n&&console.log(n)});k("back","lats","barbell","pull",1,10);I("64f389465ae26083f39b17c2");
