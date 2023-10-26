(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();/*! @license is-dom-node v1.0.4

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

*/function Y(e){return typeof window.Node=="object"?e instanceof window.Node:e!==null&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

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

*/function ve(e){var t=Object.prototype.toString.call(e),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&r.test(t)&&(e.length===0||Y(e[0]))}/*! @license Tealight v0.3.6

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

*/function q(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(Y);if(Y(e))return[e];if(ve(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

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
*/function W(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=b();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function b(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function ge(e,t){for(var r=W(e),i=W(t),n=[],o=0;o<4;o++)for(var s=[r[o],r[o+4],r[o+8],r[o+12]],c=0;c<4;c++){var f=c*4,a=[i[f],i[f+1],i[f+2],i[f+3]],l=s[0]*a[0]+s[1]*a[1]+s[2]*a[2]+s[3]*a[3];n[o+f]=l}return n}function ye(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var r=t[2].split(", ").map(parseFloat);return W(r)}}return b()}function me(e){var t=Math.PI/180*e,r=b();return r[5]=r[10]=Math.cos(t),r[6]=r[9]=Math.sin(t),r[9]*=-1,r}function be(e){var t=Math.PI/180*e,r=b();return r[0]=r[10]=Math.cos(t),r[2]=r[8]=Math.sin(t),r[2]*=-1,r}function we(e){var t=Math.PI/180*e,r=b();return r[0]=r[5]=Math.cos(t),r[1]=r[4]=Math.sin(t),r[4]*=-1,r}function _(e,t){var r=b();return r[0]=e,r[5]=typeof t=="number"?t:e,r}function xe(e){var t=b();return t[12]=e,t}function Ee(e){var t=b();return t[13]=e,t}/*! @license miniraf v1.0.0

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

*/var re=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout(function(){return re(t)},0)}}(),Le=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||re;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var ie={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function Oe(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function Te(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var T={success:Te,failure:Oe};function A(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function u(e,t){if(A(e)){var r=Object.keys(e);return r.forEach(function(i){return t(e[i],i,e)})}if(e instanceof Array)return e.forEach(function(i,n){return t(i,n,e)});throw new TypeError("Expected either an array or object literal.")}function E(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(n){return i+=`
 — `+n}),console.log(i,"color: #ea654b;")}}function ne(){var e=this,t=function(){return{active:[],stale:[]}},r=t(),i=t(),n=t();try{u(q("[data-sr-id]"),function(o){var s=parseInt(o.getAttribute("data-sr-id"));r.active.push(s)})}catch(o){throw o}u(this.store.elements,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),u(r.stale,function(o){return delete e.store.elements[o]}),u(this.store.elements,function(o){n.active.indexOf(o.containerId)===-1&&n.active.push(o.containerId),o.hasOwnProperty("sequence")&&i.active.indexOf(o.sequence.id)===-1&&i.active.push(o.sequence.id)}),u(this.store.containers,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),u(n.stale,function(o){var s=e.store.containers[o].node;s.removeEventListener("scroll",e.delegate),s.removeEventListener("resize",e.delegate),delete e.store.containers[o]}),u(this.store.sequences,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),u(i.stale,function(o){return delete e.store.sequences[o]})}var V=function(){var e={},t=document.documentElement.style;function r(i,n){if(n===void 0&&(n=t),i&&typeof i=="string"){if(e[i])return e[i];if(typeof n[i]=="string")return e[i]=i;if(typeof n["-webkit-"+i]=="string")return e[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return e={}},r}();function je(e){var t=window.getComputedStyle(e.node),r=t.position,i=e.config,n={},o=e.node.getAttribute("style")||"",s=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];n.computed=s?s.map(function(y){return y.trim()}).join("; ")+";":"",n.generated=s.some(function(y){return y.match(/visibility\s?:\s?visible/i)})?n.computed:s.concat(["visibility: visible"]).map(function(y){return y.trim()}).join("; ")+";";var c=parseFloat(t.opacity),f=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),a={computed:c!==f?"opacity: "+c+";":"",generated:c!==f?"opacity: "+f+";":""},l=[];if(parseFloat(i.distance)){var d=i.origin==="top"||i.origin==="bottom"?"Y":"X",v=i.distance;(i.origin==="top"||i.origin==="left")&&(v=/^-/.test(v)?v.substr(1):"-"+v);var w=v.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),g=w[0],x=w[1];switch(x){case"em":v=parseInt(t.fontSize)*g;break;case"px":v=g;break;case"%":v=d==="Y"?e.node.getBoundingClientRect().height*g/100:e.node.getBoundingClientRect().width*g/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}d==="Y"?l.push(Ee(v)):l.push(xe(v))}i.rotate.x&&l.push(me(i.rotate.x)),i.rotate.y&&l.push(be(i.rotate.y)),i.rotate.z&&l.push(we(i.rotate.z)),i.scale!==1&&(i.scale===0?l.push(_(2e-4)):l.push(_(i.scale)));var p={};if(l.length){p.property=V("transform"),p.computed={raw:t[p.property],matrix:ye(t[p.property])},l.unshift(p.computed.matrix);var he=l.reduce(ge);p.generated={initial:p.property+": matrix3d("+he.join(", ")+");",final:p.property+": matrix3d("+p.computed.matrix.join(", ")+");"}}else p.generated={initial:"",final:""};var h={};if(a.generated||p.generated.initial){h.property=V("transition"),h.computed=t[h.property],h.fragments=[];var X=i.delay,I=i.duration,k=i.easing;a.generated&&h.fragments.push({delayed:"opacity "+I/1e3+"s "+k+" "+X/1e3+"s",instant:"opacity "+I/1e3+"s "+k+" 0s"}),p.generated.initial&&h.fragments.push({delayed:p.property+" "+I/1e3+"s "+k+" "+X/1e3+"s",instant:p.property+" "+I/1e3+"s "+k+" 0s"});var pe=h.computed&&!h.computed.match(/all 0s|none 0s/);pe&&h.fragments.unshift({delayed:h.computed,instant:h.computed});var G=h.fragments.reduce(function(y,R,K){return y.delayed+=K===0?R.delayed:", "+R.delayed,y.instant+=K===0?R.instant:", "+R.instant,y},{delayed:"",instant:""});h.generated={delayed:h.property+": "+G.delayed+";",instant:h.property+": "+G.instant+";"}}else h.generated={delayed:"",instant:""};return{inline:n,opacity:a,position:r,transform:p,transition:h}}function O(e,t){t.split(";").forEach(function(r){var i=r.split(":"),n=i[0],o=i.slice(1);n&&o&&(e.style[n.trim()]=o.join(":"))})}function U(e){var t=this,r;try{u(q(e),function(i){var n=i.getAttribute("data-sr-id");if(n!==null){r=!0;var o=t.store.elements[n];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),O(o.node,o.styles.inline.generated),i.removeAttribute("data-sr-id"),delete t.store.elements[n]}})}catch(i){return E.call(this,"Clean failed.",i.message)}if(r)try{ne.call(this)}catch(i){return E.call(this,"Clean failed.",i.message)}}function qe(){var e=this;u(this.store.elements,function(t){O(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),u(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.removeEventListener("scroll",e.delegate),r.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function S(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(A(e))return u(t,function(i){u(i,function(n,o){A(n)?((!e[o]||!A(e[o]))&&(e[o]={}),S(e[o],n)):e[o]=n})}),e;throw new TypeError("Target must be an object literal.")}function P(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var J=function(){var e=0;return function(){return e++}}();function oe(){var e=this;ne.call(this),u(this.store.elements,function(t){var r=[t.styles.inline.generated];t.visible?(r.push(t.styles.opacity.computed),r.push(t.styles.transform.generated.final),t.revealed=!0):(r.push(t.styles.opacity.generated),r.push(t.styles.transform.generated.initial),t.revealed=!1),O(t.node,r.filter(function(i){return i!==""}).join(" "))}),u(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.addEventListener("scroll",e.delegate),r.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function j(e,t){t===void 0&&(t={});var r=t.pristine||this.pristine,i=e.config.useDelay==="always"||e.config.useDelay==="onload"&&r||e.config.useDelay==="once"&&!e.seen,n=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||n)return Se.call(this,e,i);if(t.reset||o)return $e.call(this,e)}function Se(e,t){var r=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?r.push(e.styles.transition.generated.delayed):r.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,O(e.node,r.filter(function(i){return i!==""}).join(" ")),se.call(this,e,t)}function $e(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,O(e.node,t.filter(function(r){return r!==""}).join(" ")),se.call(this,e)}function se(e,t){var r=this,i=t?e.config.duration+e.config.delay:e.config.duration,n=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),n(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&U.call(r,e.node)},i-s)}}function ae(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return j.call(this,e,{reset:!0});var r=this.store.sequences[e.sequence.id],i=e.sequence.index;if(r){var n=new Z(r,"visible",this.store),o=new Z(r,"revealed",this.store);if(r.models={visible:n,revealed:o},!o.body.length){var s=r.members[n.body[0]],c=this.store.elements[s];if(c)return M.call(this,r,n.body[0],-1,t),M.call(this,r,n.body[0],1,t),j.call(this,c,{reveal:!0,pristine:t})}if(!r.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(n.body).shift())return M.call(this,r,i,-1,t),j.call(this,e,{reveal:!0,pristine:t});if(!r.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(n.body).pop())return M.call(this,r,i,1,t),j.call(this,e,{reveal:!0,pristine:t})}}function Ie(e){var t=Math.abs(e);if(!isNaN(t))this.id=J(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function Z(e,t,r){var i=this;this.head=[],this.body=[],this.foot=[],u(e.members,function(n,o){var s=r.elements[n];s&&s[t]&&i.body.push(o)}),this.body.length&&u(e.members,function(n,o){var s=r.elements[n];s&&!s[t]&&(o<i.body[0]?i.head.push(o):i.foot.push(o))})}function M(e,t,r,i){var n=this,o=["head",null,"foot"][1+r],s=e.members[t+r],c=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,c&&ae.call(n,c,i)},e.interval)}function ce(e,t,r){var i=this;t===void 0&&(t={}),r===void 0&&(r=!1);var n=[],o,s=t.interval||ie.interval;try{s&&(o=new Ie(s));var c=q(e);if(!c.length)throw new Error("Invalid reveal target.");var f=c.reduce(function(a,l){var d={},v=l.getAttribute("data-sr-id");v?(S(d,i.store.elements[v]),O(d.node,d.styles.inline.computed)):(d.id=J(),d.node=l,d.seen=!1,d.revealed=!1,d.visible=!1);var w=S({},d.config||i.defaults,t);if(!w.mobile&&P()||!w.desktop&&!P())return v&&U.call(i,d),a;var g=q(w.container)[0];if(!g)throw new Error("Invalid container.");if(!g.contains(l))return a;var x;return x=ke(g,n,i.store.containers),x===null&&(x=J(),n.push({id:x,node:g})),d.config=w,d.containerId=x,d.styles=je(d),o&&(d.sequence={id:o.id,index:o.members.length},o.members.push(d.id)),a.push(d),a},[]);u(f,function(a){i.store.elements[a.id]=a,a.node.setAttribute("data-sr-id",a.id)})}catch(a){return E.call(this,"Reveal failed.",a.message)}u(n,function(a){i.store.containers[a.id]={id:a.id,node:a.node}}),o&&(this.store.sequences[o.id]=o),r!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(oe.bind(this),0))}function ke(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var i=null;return u(t,function(n){u(n,function(o){i===null&&o.node===e&&(i=o.id)})}),i}function Re(){var e=this;u(this.store.history,function(t){ce.call(e,t.target,t.options,!0)}),oe.call(this)}var Me=function(e){return(e>0)-(e<0)||+e},ee=Math.sign||Me;function te(e,t){var r=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,n=0,o=0,s=e.node;do isNaN(s.offsetTop)||(n+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;while(s);return{bounds:{top:n,right:o+i,bottom:n+r,left:o},height:r,width:i}}function Ae(e){var t,r;return e.node===document.documentElement?(t=window.pageYOffset,r=window.pageXOffset):(t=e.node.scrollTop,r=e.node.scrollLeft),{top:t,left:r}}function Pe(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(t){var r=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,n={top:e.geometry.bounds.top+e.geometry.height*r,right:e.geometry.bounds.right-e.geometry.width*r,bottom:e.geometry.bounds.bottom-e.geometry.height*r,left:e.geometry.bounds.left+e.geometry.width*r},o={top:t.geometry.bounds.top+t.scroll.top+i.top,right:t.geometry.bounds.right+t.scroll.left-i.right,bottom:t.geometry.bounds.bottom+t.scroll.top-i.bottom,left:t.geometry.bounds.left+t.scroll.left+i.left};return n.top<o.bottom&&n.right>o.left&&n.bottom>o.top&&n.left<o.right||e.styles.position==="fixed"}}function Ce(e,t){var r=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),Le(function(){var i=e.type==="init"||e.type==="resize";u(r.store.containers,function(n){i&&(n.geometry=te.call(r,n,!0));var o=Ae.call(r,n);n.scroll&&(n.direction={x:ee(o.left-n.scroll.left),y:ee(o.top-n.scroll.top)}),n.scroll=o}),u(t,function(n){(i||n.geometry===void 0)&&(n.geometry=te.call(r,n)),n.visible=Pe.call(r,n)}),u(t,function(n){n.sequence?ae.call(r,n):j.call(r,n)}),r.pristine=!1})}function Ne(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function De(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var Be="4.0.9",C,N,D,B,F,m,z,H;function L(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==L.prototype;if(t)return new L(e);if(!L.isSupported())return E.call(this,"Instantiation failed.","This browser is not supported."),T.failure();var r;try{r=m?S({},m,e):S({},ie,e)}catch(n){return E.call(this,"Invalid configuration.",n.message),T.failure()}try{var i=q(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(n){return E.call(this,n.message),T.failure()}return m=r,!m.mobile&&P()||!m.desktop&&!P()?(E.call(this,"This device is disabled.","desktop: "+m.desktop,"mobile: "+m.mobile),T.failure()):(T.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,C=C||Ce.bind(this),N=N||qe.bind(this),D=D||ce.bind(this),B=B||U.bind(this),F=F||Re.bind(this),Object.defineProperty(this,"delegate",{get:function(){return C}}),Object.defineProperty(this,"destroy",{get:function(){return N}}),Object.defineProperty(this,"reveal",{get:function(){return D}}),Object.defineProperty(this,"clean",{get:function(){return B}}),Object.defineProperty(this,"sync",{get:function(){return F}}),Object.defineProperty(this,"defaults",{get:function(){return m}}),Object.defineProperty(this,"version",{get:function(){return Be}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),H||(H=this))}L.isSupported=function(){return Ne()&&De()};Object.defineProperty(L,"debug",{get:function(){return z||!1},set:function(e){return z=typeof e=="boolean"?e:z}});L();window.addEventListener("load",function(){$(function(){window.sr=L(),$(window).width()<768?($(".timeline-content").hasClass("js--fadeInLeft")&&$(".timeline-content").removeClass("js--fadeInLeft").addClass("js--fadeInRight"),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})):(sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})),sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})})});const Q=document.querySelector(".js-open-menu"),Fe=document.querySelector(".js-close-menu"),ue=()=>{const e=Q.getAttribute("aria-expanded")==="true"||!1;Q.setAttribute("aria-expanded",!e),mobileMenu.classList.toggle("is-open")};Q.addEventListener("click",ue);Fe.addEventListener("click",ue);window.addEventListener("resize",()=>{window.innerWidth>768&&mobileMenu.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){e.style.display="none"})});document.addEventListener("DOMContentLoaded",function(){const e="favoritesList",t=document.querySelector(".favorites-box-deskription"),r=document.querySelector(".favorites-list");function i(){r.innerHTML="";const o=JSON.parse(localStorage.getItem(e))||[];o.forEach(c=>{const f=document.createElement("li");f.className="exercise-item favorites-exercise-item timeline-content js--fadeInLeft",f.innerHTML=`
        <div class="exercise-item-wrapper ">
          <div class="exercise-item-firth-wrapper">
            <p class="exercise-item-workout">${c.exerciseName}</p>
            <button type="button" class="button favourite-delete-button" data-card-id="${c.exerciseID}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" class="exercise-item-trash">
                <use xlink:href="./img/icon-sprite.svg#trash" style="fill: white; stroke: black"></use>
              </svg>
            </button>
            <button type="button" class="exercise-item-button" id="${c.exerciseID}">
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
            <h3 class="exercise-item-subtitle">${c.exerciseName}</h3>
          </div>
          <ul class="exercise-item-list">
            <li class="exercise-item-list-information">
              <p class="information-text">
                Burned calories:<span class="information-text-span">${c.exerciseBurned}</span>
              </p>
            </li>
            <li class="exercise-item-list-information">
              <p class="information-text">
                Body part:<span class="information-text-span">${c.exercisePart}</span>
              </p>
            </li>
            <li class="exercise-item-list-information">
              <p class="information-text">
                Target:<span class="information-text-span">${c.exerciseTarget}</span>
              </p>
            </li>
          </ul>
        </div>
      `,r.appendChild(f)}),o.length===0&&(t.style.display="block"),document.querySelectorAll(".favourite-delete-button").forEach(c=>{c.addEventListener("click",function(){const f=c.getAttribute("data-card-id");let a=JSON.parse(localStorage.getItem(e))||[];const l=a.findIndex(d=>d.exerciseID===f);l!==-1&&(a.splice(l,1),localStorage.setItem(e,JSON.stringify(a)),i())})})}function n(){try{localStorage.getItem(e)?(t.style.display="none",i()):t.style.display="block"}catch(o){console.error(o)}}n()});const de=document.querySelector(".recommend-text-box"),ze=de.querySelector(".cover-text");function He(){ze.style.transform="translateY(0)"}de.addEventListener("click",()=>{He()});async function Xe(e,t,r){const i=`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=${r}`;try{const n=await fetch(i);if(!n.ok)throw new Error(`Request failed with status ${n.status}`);return await n.json()}catch(n){return console.error("Error fetching data:",n),null}}async function Ge(e,t,r){try{const i=`https://your-energy.b.goit.study/api/exercises/${e}/rating`,n=await fetch(i,{method:"PATCH",headers:{"Content-Type":"application/json"},body:r});if(!n.ok)throw new Error(`Request to set rating failed with status ${n.status}`);const o=await n.json();console.log(`Rating for exercise ${e} has been updated to ${t}.`)}catch(i){console.error(`Error: ${i.message}`)}}async function Ye(){try{const e=await fetch("https://your-energy.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();if(t&&t.author&&t.quote){const r={quote:t.quote,author:t.author};return console.log("Quote of the day:",r),r}else console.log("Failed to get the quote of the day.")}catch(e){console.error("Error while fetching the quote of the day:",e)}}const le="quote",We=document.querySelector(".quotes-day-box");async function fe(){const e=await Ye();if(console.log(e),!e||!e.quote||!e.author)throw new Error("Invalid data received from the server");return Je(e),Qe(e),e}try{const e=fe()}catch(e){console.log(e.message)}function Je({quote:e,author:t}){We.innerHTML=`
        <h3 class="quotes-day-title">Quote of the day</h3>
        <p class="quotes-day-text">${e}</p>
        <p class="quotes-day-author">${t}</p>
    `}function Qe({quote:e,author:t}){const r={quote:e,author:t,date:new Date().getDate()};try{const i=JSON.stringify(r);localStorage.setItem(le,i)}catch(i){console.log(i.message)}}async function Ue(){try{const e=localStorage.getItem(le);if(e){let t=JSON.parse(e),r=new Date().getDate();t.date!==r&&await fe()}}catch(e){console.log(e.message)}}Ue();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu");document.getElementById("overlay");const i=()=>{const n=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")};t.addEventListener("click",i),r.addEventListener("click",i),window.addEventListener("resize",()=>{window.innerWidth>768&&e.classList.remove("is-open")}),document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){n.style.display="none"})})})();export{Xe as f,Ge as s};
