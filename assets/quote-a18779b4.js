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

*/function J(e){return typeof window.Node=="object"?e instanceof window.Node:e!==null&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

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

*/function ye(e){var t=Object.prototype.toString.call(e),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&r.test(t)&&(e.length===0||J(e[0]))}/*! @license Tealight v0.3.6

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

*/function I(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(J);if(J(e))return[e];if(ye(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

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
*/function Q(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=m();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function m(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function be(e,t){for(var r=Q(e),i=Q(t),n=[],o=0;o<4;o++)for(var s=[r[o],r[o+4],r[o+8],r[o+12]],f=0;f<4;f++){var v=f*4,c=[i[v],i[v+1],i[v+2],i[v+3]],d=s[0]*c[0]+s[1]*c[1]+s[2]*c[2]+s[3]*c[3];n[o+v]=d}return n}function me(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var r=t[2].split(", ").map(parseFloat);return Q(r)}}return m()}function we(e){var t=Math.PI/180*e,r=m();return r[5]=r[10]=Math.cos(t),r[6]=r[9]=Math.sin(t),r[9]*=-1,r}function xe(e){var t=Math.PI/180*e,r=m();return r[0]=r[10]=Math.cos(t),r[2]=r[8]=Math.sin(t),r[2]*=-1,r}function Ee(e){var t=Math.PI/180*e,r=m();return r[0]=r[5]=Math.cos(t),r[1]=r[4]=Math.sin(t),r[4]*=-1,r}function V(e,t){var r=m();return r[0]=e,r[5]=typeof t=="number"?t:e,r}function Te(e){var t=m();return t[12]=e,t}function $e(e){var t=m();return t[13]=e,t}/*! @license miniraf v1.0.0

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

*/var ne=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout(function(){return ne(t)},0)}}(),Oe=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ne;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var oe={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function je(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function qe(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var j={success:qe,failure:je};function N(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function a(e,t){if(N(e)){var r=Object.keys(e);return r.forEach(function(i){return t(e[i],i,e)})}if(e instanceof Array)return e.forEach(function(i,n){return t(i,n,e)});throw new TypeError("Expected either an array or object literal.")}function E(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(n){return i+=`
 — `+n}),console.log(i,"color: #ea654b;")}}function se(){var e=this,t=function(){return{active:[],stale:[]}},r=t(),i=t(),n=t();try{a(I("[data-sr-id]"),function(o){var s=parseInt(o.getAttribute("data-sr-id"));r.active.push(s)})}catch(o){throw o}a(this.store.elements,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),a(r.stale,function(o){return delete e.store.elements[o]}),a(this.store.elements,function(o){n.active.indexOf(o.containerId)===-1&&n.active.push(o.containerId),o.hasOwnProperty("sequence")&&i.active.indexOf(o.sequence.id)===-1&&i.active.push(o.sequence.id)}),a(this.store.containers,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),a(n.stale,function(o){var s=e.store.containers[o].node;s.removeEventListener("scroll",e.delegate),s.removeEventListener("resize",e.delegate),delete e.store.containers[o]}),a(this.store.sequences,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),a(i.stale,function(o){return delete e.store.sequences[o]})}var Z=function(){var e={},t=document.documentElement.style;function r(i,n){if(n===void 0&&(n=t),i&&typeof i=="string"){if(e[i])return e[i];if(typeof n[i]=="string")return e[i]=i;if(typeof n["-webkit-"+i]=="string")return e[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return e={}},r}();function Ie(e){var t=window.getComputedStyle(e.node),r=t.position,i=e.config,n={},o=e.node.getAttribute("style")||"",s=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];n.computed=s?s.map(function(y){return y.trim()}).join("; ")+";":"",n.generated=s.some(function(y){return y.match(/visibility\s?:\s?visible/i)})?n.computed:s.concat(["visibility: visible"]).map(function(y){return y.trim()}).join("; ")+";";var f=parseFloat(t.opacity),v=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),c={computed:f!==v?"opacity: "+f+";":"",generated:f!==v?"opacity: "+v+";":""},d=[];if(parseFloat(i.distance)){var l=i.origin==="top"||i.origin==="bottom"?"Y":"X",p=i.distance;(i.origin==="top"||i.origin==="left")&&(p=/^-/.test(p)?p.substr(1):"-"+p);var w=p.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),g=w[0],x=w[1];switch(x){case"em":p=parseInt(t.fontSize)*g;break;case"px":p=g;break;case"%":p=l==="Y"?e.node.getBoundingClientRect().height*g/100:e.node.getBoundingClientRect().width*g/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}l==="Y"?d.push($e(p)):d.push(Te(p))}i.rotate.x&&d.push(we(i.rotate.x)),i.rotate.y&&d.push(xe(i.rotate.y)),i.rotate.z&&d.push(Ee(i.rotate.z)),i.scale!==1&&(i.scale===0?d.push(V(2e-4)):d.push(V(i.scale)));var h={};if(d.length){h.property=Z("transform"),h.computed={raw:t[h.property],matrix:me(t[h.property])},d.unshift(h.computed.matrix);var ve=d.reduce(be);h.generated={initial:h.property+": matrix3d("+ve.join(", ")+");",final:h.property+": matrix3d("+h.computed.matrix.join(", ")+");"}}else h.generated={initial:"",final:""};var u={};if(c.generated||h.generated.initial){u.property=Z("transition"),u.computed=t[u.property],u.fragments=[];var G=i.delay,L=i.duration,R=i.easing;c.generated&&u.fragments.push({delayed:"opacity "+L/1e3+"s "+R+" "+G/1e3+"s",instant:"opacity "+L/1e3+"s "+R+" 0s"}),h.generated.initial&&u.fragments.push({delayed:h.property+" "+L/1e3+"s "+R+" "+G/1e3+"s",instant:h.property+" "+L/1e3+"s "+R+" 0s"});var ge=u.computed&&!u.computed.match(/all 0s|none 0s/);ge&&u.fragments.unshift({delayed:u.computed,instant:u.computed});var K=u.fragments.reduce(function(y,k,_){return y.delayed+=_===0?k.delayed:", "+k.delayed,y.instant+=_===0?k.instant:", "+k.instant,y},{delayed:"",instant:""});u.generated={delayed:u.property+": "+K.delayed+";",instant:u.property+": "+K.instant+";"}}else u.generated={delayed:"",instant:""};return{inline:n,opacity:c,position:r,transform:h,transition:u}}function O(e,t){t.split(";").forEach(function(r){var i=r.split(":"),n=i[0],o=i.slice(1);n&&o&&(e.style[n.trim()]=o.join(":"))})}function X(e){var t=this,r;try{a(I(e),function(i){var n=i.getAttribute("data-sr-id");if(n!==null){r=!0;var o=t.store.elements[n];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),O(o.node,o.styles.inline.generated),i.removeAttribute("data-sr-id"),delete t.store.elements[n]}})}catch(i){return E.call(this,"Clean failed.",i.message)}if(r)try{se.call(this)}catch(i){return E.call(this,"Clean failed.",i.message)}}function Se(){var e=this;a(this.store.elements,function(t){O(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),a(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.removeEventListener("scroll",e.delegate),r.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function S(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(N(e))return a(t,function(i){a(i,function(n,o){N(n)?((!e[o]||!N(e[o]))&&(e[o]={}),S(e[o],n)):e[o]=n})}),e;throw new TypeError("Target must be an object literal.")}function C(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var U=function(){var e=0;return function(){return e++}}();function ae(){var e=this;se.call(this),a(this.store.elements,function(t){var r=[t.styles.inline.generated];t.visible?(r.push(t.styles.opacity.computed),r.push(t.styles.transform.generated.final),t.revealed=!0):(r.push(t.styles.opacity.generated),r.push(t.styles.transform.generated.initial),t.revealed=!1),O(t.node,r.filter(function(i){return i!==""}).join(" "))}),a(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.addEventListener("scroll",e.delegate),r.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function q(e,t){t===void 0&&(t={});var r=t.pristine||this.pristine,i=e.config.useDelay==="always"||e.config.useDelay==="onload"&&r||e.config.useDelay==="once"&&!e.seen,n=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||n)return Le.call(this,e,i);if(t.reset||o)return Re.call(this,e)}function Le(e,t){var r=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?r.push(e.styles.transition.generated.delayed):r.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,O(e.node,r.filter(function(i){return i!==""}).join(" ")),ce.call(this,e,t)}function Re(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,O(e.node,t.filter(function(r){return r!==""}).join(" ")),ce.call(this,e)}function ce(e,t){var r=this,i=t?e.config.duration+e.config.delay:e.config.duration,n=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),n(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&X.call(r,e.node)},i-s)}}function le(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return q.call(this,e,{reset:!0});var r=this.store.sequences[e.sequence.id],i=e.sequence.index;if(r){var n=new ee(r,"visible",this.store),o=new ee(r,"revealed",this.store);if(r.models={visible:n,revealed:o},!o.body.length){var s=r.members[n.body[0]],f=this.store.elements[s];if(f)return P.call(this,r,n.body[0],-1,t),P.call(this,r,n.body[0],1,t),q.call(this,f,{reveal:!0,pristine:t})}if(!r.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(n.body).shift())return P.call(this,r,i,-1,t),q.call(this,e,{reveal:!0,pristine:t});if(!r.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(n.body).pop())return P.call(this,r,i,1,t),q.call(this,e,{reveal:!0,pristine:t})}}function ke(e){var t=Math.abs(e);if(!isNaN(t))this.id=U(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function ee(e,t,r){var i=this;this.head=[],this.body=[],this.foot=[],a(e.members,function(n,o){var s=r.elements[n];s&&s[t]&&i.body.push(o)}),this.body.length&&a(e.members,function(n,o){var s=r.elements[n];s&&!s[t]&&(o<i.body[0]?i.head.push(o):i.foot.push(o))})}function P(e,t,r,i){var n=this,o=["head",null,"foot"][1+r],s=e.members[t+r],f=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,f&&le.call(n,f,i)},e.interval)}function ue(e,t,r){var i=this;t===void 0&&(t={}),r===void 0&&(r=!1);var n=[],o,s=t.interval||oe.interval;try{s&&(o=new ke(s));var f=I(e);if(!f.length)throw new Error("Invalid reveal target.");var v=f.reduce(function(c,d){var l={},p=d.getAttribute("data-sr-id");p?(S(l,i.store.elements[p]),O(l.node,l.styles.inline.computed)):(l.id=U(),l.node=d,l.seen=!1,l.revealed=!1,l.visible=!1);var w=S({},l.config||i.defaults,t);if(!w.mobile&&C()||!w.desktop&&!C())return p&&X.call(i,l),c;var g=I(w.container)[0];if(!g)throw new Error("Invalid container.");if(!g.contains(d))return c;var x;return x=Pe(g,n,i.store.containers),x===null&&(x=U(),n.push({id:x,node:g})),l.config=w,l.containerId=x,l.styles=Ie(l),o&&(l.sequence={id:o.id,index:o.members.length},o.members.push(l.id)),c.push(l),c},[]);a(v,function(c){i.store.elements[c.id]=c,c.node.setAttribute("data-sr-id",c.id)})}catch(c){return E.call(this,"Reveal failed.",c.message)}a(n,function(c){i.store.containers[c.id]={id:c.id,node:c.node}}),o&&(this.store.sequences[o.id]=o),r!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(ae.bind(this),0))}function Pe(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var i=null;return a(t,function(n){a(n,function(o){i===null&&o.node===e&&(i=o.id)})}),i}function Ne(){var e=this;a(this.store.history,function(t){ue.call(e,t.target,t.options,!0)}),ae.call(this)}var Ae=function(e){return(e>0)-(e<0)||+e},te=Math.sign||Ae;function re(e,t){var r=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,n=0,o=0,s=e.node;do isNaN(s.offsetTop)||(n+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;while(s);return{bounds:{top:n,right:o+i,bottom:n+r,left:o},height:r,width:i}}function Ce(e){var t,r;return e.node===document.documentElement?(t=window.pageYOffset,r=window.pageXOffset):(t=e.node.scrollTop,r=e.node.scrollLeft),{top:t,left:r}}function Me(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(t){var r=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,n={top:e.geometry.bounds.top+e.geometry.height*r,right:e.geometry.bounds.right-e.geometry.width*r,bottom:e.geometry.bounds.bottom-e.geometry.height*r,left:e.geometry.bounds.left+e.geometry.width*r},o={top:t.geometry.bounds.top+t.scroll.top+i.top,right:t.geometry.bounds.right+t.scroll.left-i.right,bottom:t.geometry.bounds.bottom+t.scroll.top-i.bottom,left:t.geometry.bounds.left+t.scroll.left+i.left};return n.top<o.bottom&&n.right>o.left&&n.bottom>o.top&&n.left<o.right||e.styles.position==="fixed"}}function De(e,t){var r=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),Oe(function(){var i=e.type==="init"||e.type==="resize";a(r.store.containers,function(n){i&&(n.geometry=re.call(r,n,!0));var o=Ce.call(r,n);n.scroll&&(n.direction={x:te(o.left-n.scroll.left),y:te(o.top-n.scroll.top)}),n.scroll=o}),a(t,function(n){(i||n.geometry===void 0)&&(n.geometry=re.call(r,n)),n.visible=Me.call(r,n)}),a(t,function(n){n.sequence?le.call(r,n):q.call(r,n)}),r.pristine=!1})}function Fe(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function ze(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var Be="4.0.9",M,D,F,z,B,b,H,Y;function T(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==T.prototype;if(t)return new T(e);if(!T.isSupported())return E.call(this,"Instantiation failed.","This browser is not supported."),j.failure();var r;try{r=b?S({},b,e):S({},oe,e)}catch(n){return E.call(this,"Invalid configuration.",n.message),j.failure()}try{var i=I(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(n){return E.call(this,n.message),j.failure()}return b=r,!b.mobile&&C()||!b.desktop&&!C()?(E.call(this,"This device is disabled.","desktop: "+b.desktop,"mobile: "+b.mobile),j.failure()):(j.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,M=M||De.bind(this),D=D||Se.bind(this),F=F||ue.bind(this),z=z||X.bind(this),B=B||Ne.bind(this),Object.defineProperty(this,"delegate",{get:function(){return M}}),Object.defineProperty(this,"destroy",{get:function(){return D}}),Object.defineProperty(this,"reveal",{get:function(){return F}}),Object.defineProperty(this,"clean",{get:function(){return z}}),Object.defineProperty(this,"sync",{get:function(){return B}}),Object.defineProperty(this,"defaults",{get:function(){return b}}),Object.defineProperty(this,"version",{get:function(){return Be}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Y||(Y=this))}T.isSupported=function(){return Fe()&&ze()};Object.defineProperty(T,"debug",{get:function(){return H||!1},set:function(e){return H=typeof e=="boolean"?e:H}});T();window.addEventListener("load",function(){$(function(){window.sr=T(),$(window).width()<768?($(".timeline-content").hasClass("js--fadeInLeft")&&$(".timeline-content").removeClass("js--fadeInLeft").addClass("js--fadeInRight"),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})):(sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})),sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})})});const A="favoritesList",W=document.querySelector(".favorites-box-deskription"),ie=document.querySelector(".favorites-list");function fe(){ie.innerHTML="";const e=JSON.parse(localStorage.getItem(A))||[];e.forEach(r=>{const i=document.createElement("li");i.className="exercise-item favorites-exercise-item timeline-content js--fadeInLeft",i.innerHTML=`
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
    `,ie.appendChild(i)}),e.length===0&&(W.style.display="block"),document.querySelectorAll(".favourite-delete-button").forEach(r=>{r.addEventListener("click",function(){const i=r.getAttribute("data-card-id");let n=JSON.parse(localStorage.getItem(A))||[];const o=n.findIndex(s=>s.exerciseID===i);o!==-1&&(n.splice(o,1),localStorage.setItem(A,JSON.stringify(n)),fe())})})}function He(){try{localStorage.getItem(A)?(W.style.display="none",fe()):W.style.display="block"}catch(e){console.error(e)}}He();const de=document.querySelector(".recommend-text-box"),Ye=de.querySelector(".cover-text");function Je(){Ye.style.transform="translateY(0)"}de.addEventListener("click",()=>{Je()});async function Ke(e,t,r){const i=`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=${r}`;try{const n=await fetch(i);if(!n.ok)throw new Error(`Request failed with status ${n.status}`);return await n.json()}catch(n){return console.error("Error fetching data:",n),null}}async function _e(e,t,r){try{const i=`https://your-energy.b.goit.study/api/exercises/${e}/rating`,n=await fetch(i,{method:"PATCH",headers:{"Content-Type":"application/json"},body:r});if(!n.ok)throw new Error(`Request to set rating failed with status ${n.status}`);const o=await n.json();console.log(`Rating for exercise ${e} has been updated to ${t}.`)}catch(i){console.error(`Error: ${i.message}`)}}async function Qe(){try{const e=await fetch("https://your-energy.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();if(t&&t.author&&t.quote){const r={quote:t.quote,author:t.author};return console.log("Quote of the day:",r),r}else console.log("Failed to get the quote of the day.")}catch(e){console.error("Error while fetching the quote of the day:",e)}}const he="quote",Ue=document.querySelector(".quotes-day-box");async function pe(){const e=await Qe();if(console.log(e),!e||!e.quote||!e.author)throw new Error("Invalid data received from the server");return We(e),Xe(e),e}try{const e=pe()}catch(e){console.log(e.message)}function We({quote:e,author:t}){Ue.innerHTML=`
        <h3 class="quotes-day-title">Quote of the day</h3>
        <p class="quotes-day-text">${e}</p>
        <p class="quotes-day-author">${t}</p>
    `}function Xe({quote:e,author:t}){const r={quote:e,author:t,date:new Date().getDate()};try{const i=JSON.stringify(r);localStorage.setItem(he,i)}catch(i){console.log(i.message)}}async function Ge(){try{const e=localStorage.getItem(he);if(e){let t=JSON.parse(e),r=new Date().getDate();t.date!==r&&await pe()}}catch(e){console.log(e.message)}}Ge();export{Ke as f,_e as s};
