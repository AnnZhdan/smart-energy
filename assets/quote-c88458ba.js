(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();/*! @license is-dom-node v1.0.4

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

*/function ye(e){var t=Object.prototype.toString.call(e),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&r.test(t)&&(e.length===0||Y(e[0]))}/*! @license Tealight v0.3.6

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

*/function O(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(Y);if(Y(e))return[e];if(ye(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

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
*/function J(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=m();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function m(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function be(e,t){for(var r=J(e),i=J(t),o=[],n=0;n<4;n++)for(var s=[r[n],r[n+4],r[n+8],r[n+12]],l=0;l<4;l++){var h=l*4,a=[i[h],i[h+1],i[h+2],i[h+3]],f=s[0]*a[0]+s[1]*a[1]+s[2]*a[2]+s[3]*a[3];o[n+h]=f}return o}function me(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var r=t[2].split(", ").map(parseFloat);return J(r)}}return m()}function we(e){var t=Math.PI/180*e,r=m();return r[5]=r[10]=Math.cos(t),r[6]=r[9]=Math.sin(t),r[9]*=-1,r}function $e(e){var t=Math.PI/180*e,r=m();return r[0]=r[10]=Math.cos(t),r[2]=r[8]=Math.sin(t),r[2]*=-1,r}function xe(e){var t=Math.PI/180*e,r=m();return r[0]=r[5]=Math.cos(t),r[1]=r[4]=Math.sin(t),r[4]*=-1,r}function V(e,t){var r=m();return r[0]=e,r[5]=typeof t=="number"?t:e,r}function Ee(e){var t=m();return t[12]=e,t}function Te(e){var t=m();return t[13]=e,t}/*! @license miniraf v1.0.0

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

*/var oe=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout(function(){return oe(t)},0)}}(),qe=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||oe;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var ne={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function je(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function Ie(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var j={success:Ie,failure:je};function C(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function c(e,t){if(C(e)){var r=Object.keys(e);return r.forEach(function(i){return t(e[i],i,e)})}if(e instanceof Array)return e.forEach(function(i,o){return t(i,o,e)});throw new TypeError("Expected either an array or object literal.")}function E(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(o){return i+=`
 — `+o}),console.log(i,"color: #ea654b;")}}function se(){var e=this,t=function(){return{active:[],stale:[]}},r=t(),i=t(),o=t();try{c(O("[data-sr-id]"),function(n){var s=parseInt(n.getAttribute("data-sr-id"));r.active.push(s)})}catch(n){throw n}c(this.store.elements,function(n){r.active.indexOf(n.id)===-1&&r.stale.push(n.id)}),c(r.stale,function(n){return delete e.store.elements[n]}),c(this.store.elements,function(n){o.active.indexOf(n.containerId)===-1&&o.active.push(n.containerId),n.hasOwnProperty("sequence")&&i.active.indexOf(n.sequence.id)===-1&&i.active.push(n.sequence.id)}),c(this.store.containers,function(n){o.active.indexOf(n.id)===-1&&o.stale.push(n.id)}),c(o.stale,function(n){var s=e.store.containers[n].node;s.removeEventListener("scroll",e.delegate),s.removeEventListener("resize",e.delegate),delete e.store.containers[n]}),c(this.store.sequences,function(n){i.active.indexOf(n.id)===-1&&i.stale.push(n.id)}),c(i.stale,function(n){return delete e.store.sequences[n]})}var Z=function(){var e={},t=document.documentElement.style;function r(i,o){if(o===void 0&&(o=t),i&&typeof i=="string"){if(e[i])return e[i];if(typeof o[i]=="string")return e[i]=i;if(typeof o["-webkit-"+i]=="string")return e[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return e={}},r}();function Oe(e){var t=window.getComputedStyle(e.node),r=t.position,i=e.config,o={},n=e.node.getAttribute("style")||"",s=n.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];o.computed=s?s.map(function(y){return y.trim()}).join("; ")+";":"",o.generated=s.some(function(y){return y.match(/visibility\s?:\s?visible/i)})?o.computed:s.concat(["visibility: visible"]).map(function(y){return y.trim()}).join("; ")+";";var l=parseFloat(t.opacity),h=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),a={computed:l!==h?"opacity: "+l+";":"",generated:l!==h?"opacity: "+h+";":""},f=[];if(parseFloat(i.distance)){var u=i.origin==="top"||i.origin==="bottom"?"Y":"X",g=i.distance;(i.origin==="top"||i.origin==="left")&&(g=/^-/.test(g)?g.substr(1):"-"+g);var w=g.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),v=w[0],x=w[1];switch(x){case"em":g=parseInt(t.fontSize)*v;break;case"px":g=v;break;case"%":g=u==="Y"?e.node.getBoundingClientRect().height*v/100:e.node.getBoundingClientRect().width*v/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}u==="Y"?f.push(Te(g)):f.push(Ee(g))}i.rotate.x&&f.push(we(i.rotate.x)),i.rotate.y&&f.push($e(i.rotate.y)),i.rotate.z&&f.push(xe(i.rotate.z)),i.scale!==1&&(i.scale===0?f.push(V(2e-4)):f.push(V(i.scale)));var p={};if(f.length){p.property=Z("transform"),p.computed={raw:t[p.property],matrix:me(t[p.property])},f.unshift(p.computed.matrix);var ge=f.reduce(be);p.generated={initial:p.property+": matrix3d("+ge.join(", ")+");",final:p.property+": matrix3d("+p.computed.matrix.join(", ")+");"}}else p.generated={initial:"",final:""};var d={};if(a.generated||p.generated.initial){d.property=Z("transition"),d.computed=t[d.property],d.fragments=[];var K=i.delay,R=i.duration,S=i.easing;a.generated&&d.fragments.push({delayed:"opacity "+R/1e3+"s "+S+" "+K/1e3+"s",instant:"opacity "+R/1e3+"s "+S+" 0s"}),p.generated.initial&&d.fragments.push({delayed:p.property+" "+R/1e3+"s "+S+" "+K/1e3+"s",instant:p.property+" "+R/1e3+"s "+S+" 0s"});var ve=d.computed&&!d.computed.match(/all 0s|none 0s/);ve&&d.fragments.unshift({delayed:d.computed,instant:d.computed});var X=d.fragments.reduce(function(y,k,_){return y.delayed+=_===0?k.delayed:", "+k.delayed,y.instant+=_===0?k.instant:", "+k.instant,y},{delayed:"",instant:""});d.generated={delayed:d.property+": "+X.delayed+";",instant:d.property+": "+X.instant+";"}}else d.generated={delayed:"",instant:""};return{inline:o,opacity:a,position:r,transform:p,transition:d}}function q(e,t){t.split(";").forEach(function(r){var i=r.split(":"),o=i[0],n=i.slice(1);o&&n&&(e.style[o.trim()]=n.join(":"))})}function W(e){var t=this,r;try{c(O(e),function(i){var o=i.getAttribute("data-sr-id");if(o!==null){r=!0;var n=t.store.elements[o];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),q(n.node,n.styles.inline.generated),i.removeAttribute("data-sr-id"),delete t.store.elements[o]}})}catch(i){return E.call(this,"Clean failed.",i.message)}if(r)try{se.call(this)}catch(i){return E.call(this,"Clean failed.",i.message)}}function Le(){var e=this;c(this.store.elements,function(t){q(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),c(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.removeEventListener("scroll",e.delegate),r.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function L(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(C(e))return c(t,function(i){c(i,function(o,n){C(o)?((!e[n]||!C(e[n]))&&(e[n]={}),L(e[n],o)):e[n]=o})}),e;throw new TypeError("Target must be an object literal.")}function N(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var Q=function(){var e=0;return function(){return e++}}();function ae(){var e=this;se.call(this),c(this.store.elements,function(t){var r=[t.styles.inline.generated];t.visible?(r.push(t.styles.opacity.computed),r.push(t.styles.transform.generated.final),t.revealed=!0):(r.push(t.styles.opacity.generated),r.push(t.styles.transform.generated.initial),t.revealed=!1),q(t.node,r.filter(function(i){return i!==""}).join(" "))}),c(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.addEventListener("scroll",e.delegate),r.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function I(e,t){t===void 0&&(t={});var r=t.pristine||this.pristine,i=e.config.useDelay==="always"||e.config.useDelay==="onload"&&r||e.config.useDelay==="once"&&!e.seen,o=e.visible&&!e.revealed,n=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||o)return Re.call(this,e,i);if(t.reset||n)return Se.call(this,e)}function Re(e,t){var r=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?r.push(e.styles.transition.generated.delayed):r.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,q(e.node,r.filter(function(i){return i!==""}).join(" ")),ce.call(this,e,t)}function Se(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,q(e.node,t.filter(function(r){return r!==""}).join(" ")),ce.call(this,e)}function ce(e,t){var r=this,i=t?e.config.duration+e.config.delay:e.config.duration,o=e.revealed?e.config.beforeReveal:e.config.beforeReset,n=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),o(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){n(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&W.call(r,e.node)},i-s)}}function le(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return I.call(this,e,{reset:!0});var r=this.store.sequences[e.sequence.id],i=e.sequence.index;if(r){var o=new ee(r,"visible",this.store),n=new ee(r,"revealed",this.store);if(r.models={visible:o,revealed:n},!n.body.length){var s=r.members[o.body[0]],l=this.store.elements[s];if(l)return P.call(this,r,o.body[0],-1,t),P.call(this,r,o.body[0],1,t),I.call(this,l,{reveal:!0,pristine:t})}if(!r.blocked.head&&i===[].concat(n.head).pop()&&i>=[].concat(o.body).shift())return P.call(this,r,i,-1,t),I.call(this,e,{reveal:!0,pristine:t});if(!r.blocked.foot&&i===[].concat(n.foot).shift()&&i<=[].concat(o.body).pop())return P.call(this,r,i,1,t),I.call(this,e,{reveal:!0,pristine:t})}}function ke(e){var t=Math.abs(e);if(!isNaN(t))this.id=Q(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function ee(e,t,r){var i=this;this.head=[],this.body=[],this.foot=[],c(e.members,function(o,n){var s=r.elements[o];s&&s[t]&&i.body.push(n)}),this.body.length&&c(e.members,function(o,n){var s=r.elements[o];s&&!s[t]&&(n<i.body[0]?i.head.push(n):i.foot.push(n))})}function P(e,t,r,i){var o=this,n=["head",null,"foot"][1+r],s=e.members[t+r],l=this.store.elements[s];e.blocked[n]=!0,setTimeout(function(){e.blocked[n]=!1,l&&le.call(o,l,i)},e.interval)}function ue(e,t,r){var i=this;t===void 0&&(t={}),r===void 0&&(r=!1);var o=[],n,s=t.interval||ne.interval;try{s&&(n=new ke(s));var l=O(e);if(!l.length)throw new Error("Invalid reveal target.");var h=l.reduce(function(a,f){var u={},g=f.getAttribute("data-sr-id");g?(L(u,i.store.elements[g]),q(u.node,u.styles.inline.computed)):(u.id=Q(),u.node=f,u.seen=!1,u.revealed=!1,u.visible=!1);var w=L({},u.config||i.defaults,t);if(!w.mobile&&N()||!w.desktop&&!N())return g&&W.call(i,u),a;var v=O(w.container)[0];if(!v)throw new Error("Invalid container.");if(!v.contains(f))return a;var x;return x=Pe(v,o,i.store.containers),x===null&&(x=Q(),o.push({id:x,node:v})),u.config=w,u.containerId=x,u.styles=Oe(u),n&&(u.sequence={id:n.id,index:n.members.length},n.members.push(u.id)),a.push(u),a},[]);c(h,function(a){i.store.elements[a.id]=a,a.node.setAttribute("data-sr-id",a.id)})}catch(a){return E.call(this,"Reveal failed.",a.message)}c(o,function(a){i.store.containers[a.id]={id:a.id,node:a.node}}),n&&(this.store.sequences[n.id]=n),r!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(ae.bind(this),0))}function Pe(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var i=null;return c(t,function(o){c(o,function(n){i===null&&n.node===e&&(i=n.id)})}),i}function Ce(){var e=this;c(this.store.history,function(t){ue.call(e,t.target,t.options,!0)}),ae.call(this)}var De=function(e){return(e>0)-(e<0)||+e},te=Math.sign||De;function re(e,t){var r=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,o=0,n=0,s=e.node;do isNaN(s.offsetTop)||(o+=s.offsetTop),isNaN(s.offsetLeft)||(n+=s.offsetLeft),s=s.offsetParent;while(s);return{bounds:{top:o,right:n+i,bottom:o+r,left:n},height:r,width:i}}function Ne(e){var t,r;return e.node===document.documentElement?(t=window.pageYOffset,r=window.pageXOffset):(t=e.node.scrollTop,r=e.node.scrollLeft),{top:t,left:r}}function Ae(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(t){var r=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,o={top:e.geometry.bounds.top+e.geometry.height*r,right:e.geometry.bounds.right-e.geometry.width*r,bottom:e.geometry.bounds.bottom-e.geometry.height*r,left:e.geometry.bounds.left+e.geometry.width*r},n={top:t.geometry.bounds.top+t.scroll.top+i.top,right:t.geometry.bounds.right+t.scroll.left-i.right,bottom:t.geometry.bounds.bottom+t.scroll.top-i.bottom,left:t.geometry.bounds.left+t.scroll.left+i.left};return o.top<n.bottom&&o.right>n.left&&o.bottom>n.top&&o.left<n.right||e.styles.position==="fixed"}}function Me(e,t){var r=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),qe(function(){var i=e.type==="init"||e.type==="resize";c(r.store.containers,function(o){i&&(o.geometry=re.call(r,o,!0));var n=Ne.call(r,o);o.scroll&&(o.direction={x:te(n.left-o.scroll.left),y:te(n.top-o.scroll.top)}),o.scroll=n}),c(t,function(o){(i||o.geometry===void 0)&&(o.geometry=re.call(r,o)),o.visible=Ae.call(r,o)}),c(t,function(o){o.sequence?le.call(r,o):I.call(r,o)}),r.pristine=!1})}function Fe(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function Be(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var ze="4.0.9",A,M,F,B,z,b,U,H;function T(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==T.prototype;if(t)return new T(e);if(!T.isSupported())return E.call(this,"Instantiation failed.","This browser is not supported."),j.failure();var r;try{r=b?L({},b,e):L({},ne,e)}catch(o){return E.call(this,"Invalid configuration.",o.message),j.failure()}try{var i=O(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(o){return E.call(this,o.message),j.failure()}return b=r,!b.mobile&&N()||!b.desktop&&!N()?(E.call(this,"This device is disabled.","desktop: "+b.desktop,"mobile: "+b.mobile),j.failure()):(j.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,A=A||Me.bind(this),M=M||Le.bind(this),F=F||ue.bind(this),B=B||W.bind(this),z=z||Ce.bind(this),Object.defineProperty(this,"delegate",{get:function(){return A}}),Object.defineProperty(this,"destroy",{get:function(){return M}}),Object.defineProperty(this,"reveal",{get:function(){return F}}),Object.defineProperty(this,"clean",{get:function(){return B}}),Object.defineProperty(this,"sync",{get:function(){return z}}),Object.defineProperty(this,"defaults",{get:function(){return b}}),Object.defineProperty(this,"version",{get:function(){return ze}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),H||(H=this))}T.isSupported=function(){return Fe()&&Be()};Object.defineProperty(T,"debug",{get:function(){return U||!1},set:function(e){return U=typeof e=="boolean"?e:U}});T();window.addEventListener("load",function(){$(function(){window.sr=T(),$(window).width()<768?($(".timeline-content").hasClass("js--fadeInLeft")&&$(".timeline-content").removeClass("js--fadeInLeft").addClass("js--fadeInRight"),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})):(sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})),sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})})});const D="favoritesList",G=document.querySelector(".favorites-box-deskription"),ie=document.querySelector(".favorites-list");function fe(){ie.innerHTML="";const e=JSON.parse(localStorage.getItem(D))||[];e.forEach(r=>{const i=document.createElement("li");i.className="exercise-item favorites-exercise-item timeline-content js--fadeInLeft",i.innerHTML=`
      <div class="exercise-item-wrapper ">
        <div class="exercise-item-firth-wrapper">
          <p class="exercise-item-workout">${r.exerciseName}</p>
          <button type="button" class="button favourite-delete-button" data-card-id="${r.exerciseID}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" class="exercise-item-trash">
              <use xlink:href="./img/icon-sprite.svg#trash" style="fill: white; stroke: black"></use>
            </svg>
          </button>
          <button type="button" class="exercise-item-button" id="${r.exerciseID}">
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
          <h3 class="exercise-item-subtitle">${r.exerciseName}</h3>
        </div>
        <ul class="exercise-item-list">
          <li class="exercise-item-list-information">
            <p class="information-text">
              Burned calories:<span class="information-text-span">${r.exerciseBurned}</span>
            </p>
          </li>
          <li class="exercise-item-list-information">
            <p class="information-text">
              Body part:<span class="information-text-span">${r.exercisePart}</span>
            </p>
          </li>
          <li class="exercise-item-list-information">
            <p class="information-text">
              Target:<span class="information-text-span">${r.exerciseTarget}</span>
            </p>
          </li>
        </ul>
      </div>
    `,ie.appendChild(i)}),e.length===0&&(G.style.display="block"),document.querySelectorAll(".favourite-delete-button").forEach(r=>{r.addEventListener("click",function(){const i=r.getAttribute("data-card-id");let o=JSON.parse(localStorage.getItem(D))||[];const n=o.findIndex(s=>s.exerciseID===i);n!==-1&&(o.splice(n,1),localStorage.setItem(D,JSON.stringify(o)),fe())})})}function Ue(){try{localStorage.getItem(D)?(G.style.display="none",fe()):G.style.display="block"}catch(e){console.error(e)}}Ue();const de=document.querySelector(".recommend-text-box"),He=de.querySelector(".cover-text");function Ye(){He.style.transform="translateY(0)"}de.addEventListener("click",()=>{Ye()});async function Je(e,t,r){const i=`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=${r}`;try{const o=await fetch(i);if(!o.ok)throw new Error(`Request failed with status ${o.status}`);return await o.json()}catch(o){return console.error("Error fetching data:",o),null}}async function Qe(e,t,r,i,o,n){try{const s=`https://your-energy.b.goit.study/api/exercises?category=${e}&muscles=${t}&equipment=${r}&keyword=${i}&page=${o}&limit=${n}`,l=await fetch(s);if(!l.ok)throw new Error(`Request failed with status ${l.status}`);const h=await l.json();if(!h.results||h.results.length===0){console.log("No results found for your search parameters.");return}h.results.forEach((a,f)=>{console.log(`Exercise #${f+1}:`),console.log(`Name: ${a.name}`),console.log(`Description: ${a.description}`),console.log(`GIF URL: ${a.gifUrl}`),console.log(`Burned Calories: ${a.burnedCalories}`),console.log(`Duration: ${a.duration} minutes`),console.log(`Rating: ${a.rating}`),console.log("-----------------------------------")})}catch(s){console.error(`Error: ${s.message}`)}}async function Ge(e){try{const t=`https://your-energy.b.goit.study/api/exercises/${e}`,r=await fetch(t);if(!r.ok)throw new Error(`Request failed with status ${r.status}`);const i=await r.json();if(!i.results||i.results.length===0){console.log("Exercise not found for the specified exerciseID.");return}const o=document.getElementById("exercise-details"),n=i.results[0];o.innerHTML=`
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
      `}catch(t){console.error(`Error: ${t.message}`)}}async function Ze(e,t,r){try{const i=`https://your-energy.b.goit.study/api/exercises/${e}/rating`,o=await fetch(i,{method:"PATCH",headers:{"Content-Type":"application/json"},body:r});if(!o.ok)throw new Error(`Request to set rating failed with status ${o.status}`);const n=await o.json();console.log(`Rating for exercise ${e} has been updated to ${t}.`)}catch(i){console.error(`Error: ${i.message}`)}}async function We(){try{const e=await fetch("https://your-energy.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();if(t&&t.author&&t.quote){const r={quote:t.quote,author:t.author};return console.log("Quote of the day:",r),r}else console.log("Failed to get the quote of the day.")}catch(e){console.error("Error while fetching the quote of the day:",e)}}Je("Muscles",1,12).then(e=>{e&&console.log(e)});Qe("back","lats","barbell","pull",1,10);Ge("64f389465ae26083f39b17c2");const he="quote",Ke=document.querySelector(".quotes-day-box");async function pe(){const e=await We();if(console.log(e),!e||!e.quote||!e.author)throw new Error("Invalid data received from the server");return Xe(e),_e(e),e}try{const e=pe()}catch(e){console.log(e.message)}function Xe({quote:e,author:t}){Ke.innerHTML=`
        <h3 class="quotes-day-title">Quote of the day</h3>
        <p class="quotes-day-text">${e}</p>
        <p class="quotes-day-author">${t}</p>
    `}function _e({quote:e,author:t}){const r={quote:e,author:t,date:new Date().getDate()};try{const i=JSON.stringify(r);localStorage.setItem(he,i)}catch(i){console.log(i.message)}}async function Ve(){try{const e=localStorage.getItem(he);if(e){let t=JSON.parse(e),r=new Date().getDate();t.date!==r&&await pe()}}catch(e){console.log(e.message)}}Ve();export{Je as f,Ze as s};
