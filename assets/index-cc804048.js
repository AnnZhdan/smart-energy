(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const m=document.getElementById("openModalButton"),f=document.getElementById("closeModalButton"),y=document.getElementById("additionalButton2"),g=document.getElementById("closeModalButton2"),d=document.getElementById("myModal"),a=document.getElementById("myModal2");function p(){d.style.display="block",a.style.display="none"}function h(){a.style.display="block",d.style.display="none"}m.addEventListener("click",p);f.addEventListener("click",()=>d.style.display="none");y.addEventListener("click",h);g.addEventListener("click",()=>a.style.display="none");const s=document.querySelectorAll(".rating-container label"),l=document.querySelectorAll(".rating-container label svg use");s.forEach((r,i)=>{r.addEventListener("click",n=>{for(let e=0;e<s.length;e++)e<=i?l[e].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2"):l[e].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),r.addEventListener("focus",n=>{for(let e=0;e<=i;e++)l[e].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-2");for(let e=i+1;e<s.length;e++)l[e].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")}),r.addEventListener("blur",n=>{for(let e=0;e<s.length;e++)l[e].setAttribute("xlink:href","./img/icon-sprite.svg#icon-Star-1")})});const u=document.getElementById("ratingForm");document.getElementById("submitRatingButton");u.addEventListener("submit",r=>{r.preventDefault();const i=new FormData(u);fetch("url",{method:"POST",body:i}).then(n=>n.json()).then(n=>{n.success?myModal2.style.display="none":alert(n.message)}).catch(n=>{console.error("Помилка:",n)})});
