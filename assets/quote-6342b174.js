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

*/function he(e){var t=Object.prototype.toString.call(e),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&r.test(t)&&(e.length===0||Y(e[0]))}/*! @license Tealight v0.3.6

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

*/function I(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(Y);if(Y(e))return[e];if(he(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

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
*/function H(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=m();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function m(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function pe(e,t){for(var r=H(e),i=H(t),n=[],o=0;o<4;o++)for(var s=[r[o],r[o+4],r[o+8],r[o+12]],f=0;f<4;f++){var c=f*4,a=[i[c],i[c+1],i[c+2],i[c+3]],d=s[0]*a[0]+s[1]*a[1]+s[2]*a[2]+s[3]*a[3];n[o+c]=d}return n}function ge(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var r=t[2].split(", ").map(parseFloat);return H(r)}}return m()}function ve(e){var t=Math.PI/180*e,r=m();return r[5]=r[10]=Math.cos(t),r[6]=r[9]=Math.sin(t),r[9]*=-1,r}function ye(e){var t=Math.PI/180*e,r=m();return r[0]=r[10]=Math.cos(t),r[2]=r[8]=Math.sin(t),r[2]*=-1,r}function be(e){var t=Math.PI/180*e,r=m();return r[0]=r[5]=Math.cos(t),r[1]=r[4]=Math.sin(t),r[4]*=-1,r}function X(e,t){var r=m();return r[0]=e,r[5]=typeof t=="number"?t:e,r}function me(e){var t=m();return t[12]=e,t}function we(e){var t=m();return t[13]=e,t}/*! @license miniraf v1.0.0

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

*/var te=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout(function(){return te(t)},0)}}(),$e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var re={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function xe(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function Ee(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var O={success:Ee,failure:xe};function D(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function l(e,t){if(D(e)){var r=Object.keys(e);return r.forEach(function(i){return t(e[i],i,e)})}if(e instanceof Array)return e.forEach(function(i,n){return t(i,n,e)});throw new TypeError("Expected either an array or object literal.")}function E(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(n){return i+=`
 — `+n}),console.log(i,"color: #ea654b;")}}function ie(){var e=this,t=function(){return{active:[],stale:[]}},r=t(),i=t(),n=t();try{l(I("[data-sr-id]"),function(o){var s=parseInt(o.getAttribute("data-sr-id"));r.active.push(s)})}catch(o){throw o}l(this.store.elements,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),l(r.stale,function(o){return delete e.store.elements[o]}),l(this.store.elements,function(o){n.active.indexOf(o.containerId)===-1&&n.active.push(o.containerId),o.hasOwnProperty("sequence")&&i.active.indexOf(o.sequence.id)===-1&&i.active.push(o.sequence.id)}),l(this.store.containers,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),l(n.stale,function(o){var s=e.store.containers[o].node;s.removeEventListener("scroll",e.delegate),s.removeEventListener("resize",e.delegate),delete e.store.containers[o]}),l(this.store.sequences,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),l(i.stale,function(o){return delete e.store.sequences[o]})}var _=function(){var e={},t=document.documentElement.style;function r(i,n){if(n===void 0&&(n=t),i&&typeof i=="string"){if(e[i])return e[i];if(typeof n[i]=="string")return e[i]=i;if(typeof n["-webkit-"+i]=="string")return e[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return e={}},r}();function Te(e){var t=window.getComputedStyle(e.node),r=t.position,i=e.config,n={},o=e.node.getAttribute("style")||"",s=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];n.computed=s?s.map(function(y){return y.trim()}).join("; ")+";":"",n.generated=s.some(function(y){return y.match(/visibility\s?:\s?visible/i)})?n.computed:s.concat(["visibility: visible"]).map(function(y){return y.trim()}).join("; ")+";";var f=parseFloat(t.opacity),c=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),a={computed:f!==c?"opacity: "+f+";":"",generated:f!==c?"opacity: "+c+";":""},d=[];if(parseFloat(i.distance)){var u=i.origin==="top"||i.origin==="bottom"?"Y":"X",p=i.distance;(i.origin==="top"||i.origin==="left")&&(p=/^-/.test(p)?p.substr(1):"-"+p);var w=p.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),v=w[0],x=w[1];switch(x){case"em":p=parseInt(t.fontSize)*v;break;case"px":p=v;break;case"%":p=u==="Y"?e.node.getBoundingClientRect().height*v/100:e.node.getBoundingClientRect().width*v/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}u==="Y"?d.push(we(p)):d.push(me(p))}i.rotate.x&&d.push(ve(i.rotate.x)),i.rotate.y&&d.push(ye(i.rotate.y)),i.rotate.z&&d.push(be(i.rotate.z)),i.scale!==1&&(i.scale===0?d.push(X(2e-4)):d.push(X(i.scale)));var g={};if(d.length){g.property=_("transform"),g.computed={raw:t[g.property],matrix:ge(t[g.property])},d.unshift(g.computed.matrix);var fe=d.reduce(pe);g.generated={initial:g.property+": matrix3d("+fe.join(", ")+");",final:g.property+": matrix3d("+g.computed.matrix.join(", ")+");"}}else g.generated={initial:"",final:""};var h={};if(a.generated||g.generated.initial){h.property=_("transition"),h.computed=t[h.property],h.fragments=[];var J=i.delay,R=i.duration,S=i.easing;a.generated&&h.fragments.push({delayed:"opacity "+R/1e3+"s "+S+" "+J/1e3+"s",instant:"opacity "+R/1e3+"s "+S+" 0s"}),g.generated.initial&&h.fragments.push({delayed:g.property+" "+R/1e3+"s "+S+" "+J/1e3+"s",instant:g.property+" "+R/1e3+"s "+S+" 0s"});var de=h.computed&&!h.computed.match(/all 0s|none 0s/);de&&h.fragments.unshift({delayed:h.computed,instant:h.computed});var W=h.fragments.reduce(function(y,k,K){return y.delayed+=K===0?k.delayed:", "+k.delayed,y.instant+=K===0?k.instant:", "+k.instant,y},{delayed:"",instant:""});h.generated={delayed:h.property+": "+W.delayed+";",instant:h.property+": "+W.instant+";"}}else h.generated={delayed:"",instant:""};return{inline:n,opacity:a,position:r,transform:g,transition:h}}function q(e,t){t.split(";").forEach(function(r){var i=r.split(":"),n=i[0],o=i.slice(1);n&&o&&(e.style[n.trim()]=o.join(":"))})}function G(e){var t=this,r;try{l(I(e),function(i){var n=i.getAttribute("data-sr-id");if(n!==null){r=!0;var o=t.store.elements[n];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),q(o.node,o.styles.inline.generated),i.removeAttribute("data-sr-id"),delete t.store.elements[n]}})}catch(i){return E.call(this,"Clean failed.",i.message)}if(r)try{ie.call(this)}catch(i){return E.call(this,"Clean failed.",i.message)}}function qe(){var e=this;l(this.store.elements,function(t){q(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),l(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.removeEventListener("scroll",e.delegate),r.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function L(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(D(e))return l(t,function(i){l(i,function(n,o){D(n)?((!e[o]||!D(e[o]))&&(e[o]={}),L(e[o],n)):e[o]=n})}),e;throw new TypeError("Target must be an object literal.")}function N(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var Q=function(){var e=0;return function(){return e++}}();function oe(){var e=this;ie.call(this),l(this.store.elements,function(t){var r=[t.styles.inline.generated];t.visible?(r.push(t.styles.opacity.computed),r.push(t.styles.transform.generated.final),t.revealed=!0):(r.push(t.styles.opacity.generated),r.push(t.styles.transform.generated.initial),t.revealed=!1),q(t.node,r.filter(function(i){return i!==""}).join(" "))}),l(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.addEventListener("scroll",e.delegate),r.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function j(e,t){t===void 0&&(t={});var r=t.pristine||this.pristine,i=e.config.useDelay==="always"||e.config.useDelay==="onload"&&r||e.config.useDelay==="once"&&!e.seen,n=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||n)return Oe.call(this,e,i);if(t.reset||o)return je.call(this,e)}function Oe(e,t){var r=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?r.push(e.styles.transition.generated.delayed):r.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,q(e.node,r.filter(function(i){return i!==""}).join(" ")),ne.call(this,e,t)}function je(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,q(e.node,t.filter(function(r){return r!==""}).join(" ")),ne.call(this,e)}function ne(e,t){var r=this,i=t?e.config.duration+e.config.delay:e.config.duration,n=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),n(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&G.call(r,e.node)},i-s)}}function se(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return j.call(this,e,{reset:!0});var r=this.store.sequences[e.sequence.id],i=e.sequence.index;if(r){var n=new V(r,"visible",this.store),o=new V(r,"revealed",this.store);if(r.models={visible:n,revealed:o},!o.body.length){var s=r.members[n.body[0]],f=this.store.elements[s];if(f)return P.call(this,r,n.body[0],-1,t),P.call(this,r,n.body[0],1,t),j.call(this,f,{reveal:!0,pristine:t})}if(!r.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(n.body).shift())return P.call(this,r,i,-1,t),j.call(this,e,{reveal:!0,pristine:t});if(!r.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(n.body).pop())return P.call(this,r,i,1,t),j.call(this,e,{reveal:!0,pristine:t})}}function Ie(e){var t=Math.abs(e);if(!isNaN(t))this.id=Q(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function V(e,t,r){var i=this;this.head=[],this.body=[],this.foot=[],l(e.members,function(n,o){var s=r.elements[n];s&&s[t]&&i.body.push(o)}),this.body.length&&l(e.members,function(n,o){var s=r.elements[n];s&&!s[t]&&(o<i.body[0]?i.head.push(o):i.foot.push(o))})}function P(e,t,r,i){var n=this,o=["head",null,"foot"][1+r],s=e.members[t+r],f=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,f&&se.call(n,f,i)},e.interval)}function ae(e,t,r){var i=this;t===void 0&&(t={}),r===void 0&&(r=!1);var n=[],o,s=t.interval||re.interval;try{s&&(o=new Ie(s));var f=I(e);if(!f.length)throw new Error("Invalid reveal target.");var c=f.reduce(function(a,d){var u={},p=d.getAttribute("data-sr-id");p?(L(u,i.store.elements[p]),q(u.node,u.styles.inline.computed)):(u.id=Q(),u.node=d,u.seen=!1,u.revealed=!1,u.visible=!1);var w=L({},u.config||i.defaults,t);if(!w.mobile&&N()||!w.desktop&&!N())return p&&G.call(i,u),a;var v=I(w.container)[0];if(!v)throw new Error("Invalid container.");if(!v.contains(d))return a;var x;return x=Le(v,n,i.store.containers),x===null&&(x=Q(),n.push({id:x,node:v})),u.config=w,u.containerId=x,u.styles=Te(u),o&&(u.sequence={id:o.id,index:o.members.length},o.members.push(u.id)),a.push(u),a},[]);l(c,function(a){i.store.elements[a.id]=a,a.node.setAttribute("data-sr-id",a.id)})}catch(a){return E.call(this,"Reveal failed.",a.message)}l(n,function(a){i.store.containers[a.id]={id:a.id,node:a.node}}),o&&(this.store.sequences[o.id]=o),r!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(oe.bind(this),0))}function Le(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var i=null;return l(t,function(n){l(n,function(o){i===null&&o.node===e&&(i=o.id)})}),i}function Re(){var e=this;l(this.store.history,function(t){ae.call(e,t.target,t.options,!0)}),oe.call(this)}var Se=function(e){return(e>0)-(e<0)||+e},Z=Math.sign||Se;function ee(e,t){var r=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,n=0,o=0,s=e.node;do isNaN(s.offsetTop)||(n+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;while(s);return{bounds:{top:n,right:o+i,bottom:n+r,left:o},height:r,width:i}}function ke(e){var t,r;return e.node===document.documentElement?(t=window.pageYOffset,r=window.pageXOffset):(t=e.node.scrollTop,r=e.node.scrollLeft),{top:t,left:r}}function Pe(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(t){var r=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,n={top:e.geometry.bounds.top+e.geometry.height*r,right:e.geometry.bounds.right-e.geometry.width*r,bottom:e.geometry.bounds.bottom-e.geometry.height*r,left:e.geometry.bounds.left+e.geometry.width*r},o={top:t.geometry.bounds.top+t.scroll.top+i.top,right:t.geometry.bounds.right+t.scroll.left-i.right,bottom:t.geometry.bounds.bottom+t.scroll.top-i.bottom,left:t.geometry.bounds.left+t.scroll.left+i.left};return n.top<o.bottom&&n.right>o.left&&n.bottom>o.top&&n.left<o.right||e.styles.position==="fixed"}}function De(e,t){var r=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),$e(function(){var i=e.type==="init"||e.type==="resize";l(r.store.containers,function(n){i&&(n.geometry=ee.call(r,n,!0));var o=ke.call(r,n);n.scroll&&(n.direction={x:Z(o.left-n.scroll.left),y:Z(o.top-n.scroll.top)}),n.scroll=o}),l(t,function(n){(i||n.geometry===void 0)&&(n.geometry=ee.call(r,n)),n.visible=Pe.call(r,n)}),l(t,function(n){n.sequence?se.call(r,n):j.call(r,n)}),r.pristine=!1})}function Ne(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function Ae(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var Ce="4.0.9",A,C,M,F,B,b,z,U;function T(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==T.prototype;if(t)return new T(e);if(!T.isSupported())return E.call(this,"Instantiation failed.","This browser is not supported."),O.failure();var r;try{r=b?L({},b,e):L({},re,e)}catch(n){return E.call(this,"Invalid configuration.",n.message),O.failure()}try{var i=I(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(n){return E.call(this,n.message),O.failure()}return b=r,!b.mobile&&N()||!b.desktop&&!N()?(E.call(this,"This device is disabled.","desktop: "+b.desktop,"mobile: "+b.mobile),O.failure()):(O.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,A=A||De.bind(this),C=C||qe.bind(this),M=M||ae.bind(this),F=F||G.bind(this),B=B||Re.bind(this),Object.defineProperty(this,"delegate",{get:function(){return A}}),Object.defineProperty(this,"destroy",{get:function(){return C}}),Object.defineProperty(this,"reveal",{get:function(){return M}}),Object.defineProperty(this,"clean",{get:function(){return F}}),Object.defineProperty(this,"sync",{get:function(){return B}}),Object.defineProperty(this,"defaults",{get:function(){return b}}),Object.defineProperty(this,"version",{get:function(){return Ce}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),U||(U=this))}T.isSupported=function(){return Ne()&&Ae()};Object.defineProperty(T,"debug",{get:function(){return z||!1},set:function(e){return z=typeof e=="boolean"?e:z}});T();window.addEventListener("load",function(){$(function(){window.sr=T(),$(window).width()<768?($(".timeline-content").hasClass("js--fadeInLeft")&&$(".timeline-content").removeClass("js--fadeInLeft").addClass("js--fadeInRight"),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})):(sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})),sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})});const e="favoritesList",t=document.querySelector(".favorites-box"),r=document.querySelector(".favorites-box-deskription");let i=[];function n(){try{const o=localStorage.getItem(e);if(o){let f=function(c){const a=c.target.getAttribute("data-card-id"),d=i.filter(p=>p.id!==a);localStorage.setItem(e,JSON.stringify(d));const u=c.target.closest(".exercise-item");u&&u.remove()};r.style.display="none",i=JSON.parse(o),i.forEach(c=>{const a=document.createElement("ul");a.classList.add("galary-list"),a.innerHTML=`
<li class="exercise-item timeline-content js--fadeInLeft">
  <div class="exercise-item-wrapper">
    <div class="exercise-item-firth-wrapper">
      <p class="exercise-item-workout">${c.exerciseName}</p>
      <button type="button" class="button favourite-delete-button" data-card-id="${c.exerciseID}">
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
      <button type="button" class="exercise-item-button" id="${c.id}">
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
          Burned calories:<span class="information-text-span"
            >${c.exerciseBurned}
          </span>
        </p>
      </li>
      <li class="exercise-item-list-information">
        <p class="information-text">
          Body part:<span class="information-text-span"
            >${c.exercisePart}</span
          >
        </p>
      </li>
      <li class="exercise-item-list-information">
        <p class="information-text">
          Target:<span class="information-text-span"
            >${c.exerciseTrget}</span
          >
        </p>
      </li>
    </ul>
  </div>
</li>
          `,t.appendChild(a)}),document.querySelectorAll(".favourite-delete-button").forEach(c=>{c.addEventListener("click",f)})}else r.style.display="block"}catch(o){console.error(o)}}n()});const ce=document.querySelector(".recommend-text-box"),Me=ce.querySelector(".cover-text");function Fe(){Me.style.transform="translateY(0)"}ce.addEventListener("click",()=>{Fe()});async function Be(e,t,r){const i=`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=${r}`;try{const n=await fetch(i);if(!n.ok)throw new Error(`Request failed with status ${n.status}`);return await n.json()}catch(n){return console.error("Error fetching data:",n),null}}async function ze(e,t,r,i,n,o){try{const s=`https://your-energy.b.goit.study/api/exercises?category=${e}&muscles=${t}&equipment=${r}&keyword=${i}&page=${n}&limit=${o}`,f=await fetch(s);if(!f.ok)throw new Error(`Request failed with status ${f.status}`);const c=await f.json();if(!c.results||c.results.length===0){console.log("No results found for your search parameters.");return}c.results.forEach((a,d)=>{console.log(`Exercise #${d+1}:`),console.log(`Name: ${a.name}`),console.log(`Description: ${a.description}`),console.log(`GIF URL: ${a.gifUrl}`),console.log(`Burned Calories: ${a.burnedCalories}`),console.log(`Duration: ${a.duration} minutes`),console.log(`Rating: ${a.rating}`),console.log("-----------------------------------")})}catch(s){console.error(`Error: ${s.message}`)}}async function Ue(e){try{const t=`https://your-energy.b.goit.study/api/exercises/${e}`,r=await fetch(t);if(!r.ok)throw new Error(`Request failed with status ${r.status}`);const i=await r.json();if(!i.results||i.results.length===0){console.log("Exercise not found for the specified exerciseID.");return}const n=document.getElementById("exercise-details"),o=i.results[0];n.innerHTML=`
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
      `}catch(t){console.error(`Error: ${t.message}`)}}async function Ye(){try{const e=await fetch("https://your-energy.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();if(t&&t.author&&t.quote){const r={quote:t.quote,author:t.author};return console.log("Quote of the day:",r),r}else console.log("Failed to get the quote of the day.")}catch(e){console.error("Error while fetching the quote of the day:",e)}}Be("Muscles",1,12).then(e=>{e&&console.log(e)});ze("back","lats","barbell","pull",1,10);Ue("64f389465ae26083f39b17c2");const le="quote",He=document.querySelector(".quotes-day-box");async function ue(){const e=await Ye();if(console.log(e),!e||!e.quote||!e.author)throw new Error("Invalid data received from the server");return Qe(e),Ge(e),e}try{const e=ue()}catch(e){console.log(e.message)}function Qe({quote:e,author:t}){He.innerHTML=`
        <h3 class="quotes-day-title">Quote of the day</h3>
        <p class="quotes-day-text">${e}</p>
        <p class="quotes-day-author">${t}</p>
    `}function Ge({quote:e,author:t}){const r={quote:e,author:t,date:new Date().getDate()};try{const i=JSON.stringify(r);localStorage.setItem(le,i)}catch(i){console.log(i.message)}}async function Je(){try{const e=localStorage.getItem(le);if(e){let t=JSON.parse(e),r=new Date().getDate();t.date!==r&&await ue()}}catch(e){console.log(e.message)}}Je();export{Be as f};
