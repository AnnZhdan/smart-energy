(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();/*! @license is-dom-node v1.0.4

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

*/function Q(e){return typeof window.Node=="object"?e instanceof window.Node:e!==null&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

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

*/function Le(e){var t=Object.prototype.toString.call(e),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&r.test(t)&&(e.length===0||Q(e[0]))}/*! @license Tealight v0.3.6

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

*/function I(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(Q);if(Q(e))return[e];if(Le(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

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
*/function X(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=w();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function w(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function qe(e,t){for(var r=X(e),n=X(t),i=[],o=0;o<4;o++)for(var s=[r[o],r[o+4],r[o+8],r[o+12]],c=0;c<4;c++){var f=c*4,a=[n[f],n[f+1],n[f+2],n[f+3]],u=s[0]*a[0]+s[1]*a[1]+s[2]*a[2]+s[3]*a[3];i[o+f]=u}return i}function Se(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var r=t[2].split(", ").map(parseFloat);return X(r)}}return w()}function ke(e){var t=Math.PI/180*e,r=w();return r[5]=r[10]=Math.cos(t),r[6]=r[9]=Math.sin(t),r[9]*=-1,r}function Ie(e){var t=Math.PI/180*e,r=w();return r[0]=r[10]=Math.cos(t),r[2]=r[8]=Math.sin(t),r[2]*=-1,r}function Oe(e){var t=Math.PI/180*e,r=w();return r[0]=r[5]=Math.cos(t),r[1]=r[4]=Math.sin(t),r[4]*=-1,r}function re(e,t){var r=w();return r[0]=e,r[5]=typeof t=="number"?t:e,r}function Me(e){var t=w();return t[12]=e,t}function $e(e){var t=w();return t[13]=e,t}/*! @license miniraf v1.0.0

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

*/var ae=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout(function(){return ae(t)},0)}}(),Te=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ae;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var ce={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function je(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function Re(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var S={success:Re,failure:je};function P(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function l(e,t){if(P(e)){var r=Object.keys(e);return r.forEach(function(n){return t(e[n],n,e)})}if(e instanceof Array)return e.forEach(function(n,i){return t(n,i,e)});throw new TypeError("Expected either an array or object literal.")}function x(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(this.constructor.debug&&console){var n="%cScrollReveal: "+e;t.forEach(function(i){return n+=`
 — `+i}),console.log(n,"color: #ea654b;")}}function de(){var e=this,t=function(){return{active:[],stale:[]}},r=t(),n=t(),i=t();try{l(I("[data-sr-id]"),function(o){var s=parseInt(o.getAttribute("data-sr-id"));r.active.push(s)})}catch(o){throw o}l(this.store.elements,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),l(r.stale,function(o){return delete e.store.elements[o]}),l(this.store.elements,function(o){i.active.indexOf(o.containerId)===-1&&i.active.push(o.containerId),o.hasOwnProperty("sequence")&&n.active.indexOf(o.sequence.id)===-1&&n.active.push(o.sequence.id)}),l(this.store.containers,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),l(i.stale,function(o){var s=e.store.containers[o].node;s.removeEventListener("scroll",e.delegate),s.removeEventListener("resize",e.delegate),delete e.store.containers[o]}),l(this.store.sequences,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),l(n.stale,function(o){return delete e.store.sequences[o]})}var ne=function(){var e={},t=document.documentElement.style;function r(n,i){if(i===void 0&&(i=t),n&&typeof n=="string"){if(e[n])return e[n];if(typeof i[n]=="string")return e[n]=n;if(typeof i["-webkit-"+n]=="string")return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return e={}},r}();function Ce(e){var t=window.getComputedStyle(e.node),r=t.position,n=e.config,i={},o=e.node.getAttribute("style")||"",s=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];i.computed=s?s.map(function(m){return m.trim()}).join("; ")+";":"",i.generated=s.some(function(m){return m.match(/visibility\s?:\s?visible/i)})?i.computed:s.concat(["visibility: visible"]).map(function(m){return m.trim()}).join("; ")+";";var c=parseFloat(t.opacity),f=isNaN(parseFloat(n.opacity))?parseFloat(t.opacity):parseFloat(n.opacity),a={computed:c!==f?"opacity: "+c+";":"",generated:c!==f?"opacity: "+f+";":""},u=[];if(parseFloat(n.distance)){var d=n.origin==="top"||n.origin==="bottom"?"Y":"X",p=n.distance;(n.origin==="top"||n.origin==="left")&&(p=/^-/.test(p)?p.substr(1):"-"+p);var y=p.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),g=y[0],E=y[1];switch(E){case"em":p=parseInt(t.fontSize)*g;break;case"px":p=g;break;case"%":p=d==="Y"?e.node.getBoundingClientRect().height*g/100:e.node.getBoundingClientRect().width*g/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}d==="Y"?u.push($e(p)):u.push(Me(p))}n.rotate.x&&u.push(ke(n.rotate.x)),n.rotate.y&&u.push(Ie(n.rotate.y)),n.rotate.z&&u.push(Oe(n.rotate.z)),n.scale!==1&&(n.scale===0?u.push(re(2e-4)):u.push(re(n.scale)));var v={};if(u.length){v.property=ne("transform"),v.computed={raw:t[v.property],matrix:Se(t[v.property])},u.unshift(v.computed.matrix);var Ee=u.reduce(qe);v.generated={initial:v.property+": matrix3d("+Ee.join(", ")+");",final:v.property+": matrix3d("+v.computed.matrix.join(", ")+");"}}else v.generated={initial:"",final:""};var h={};if(a.generated||v.generated.initial){h.property=ne("transition"),h.computed=t[h.property],h.fragments=[];var Z=n.delay,j=n.duration,R=n.easing;a.generated&&h.fragments.push({delayed:"opacity "+j/1e3+"s "+R+" "+Z/1e3+"s",instant:"opacity "+j/1e3+"s "+R+" 0s"}),v.generated.initial&&h.fragments.push({delayed:v.property+" "+j/1e3+"s "+R+" "+Z/1e3+"s",instant:v.property+" "+j/1e3+"s "+R+" 0s"});var xe=h.computed&&!h.computed.match(/all 0s|none 0s/);xe&&h.fragments.unshift({delayed:h.computed,instant:h.computed});var ee=h.fragments.reduce(function(m,C,te){return m.delayed+=te===0?C.delayed:", "+C.delayed,m.instant+=te===0?C.instant:", "+C.instant,m},{delayed:"",instant:""});h.generated={delayed:h.property+": "+ee.delayed+";",instant:h.property+": "+ee.instant+";"}}else h.generated={delayed:"",instant:""};return{inline:i,opacity:a,position:r,transform:v,transition:h}}function q(e,t){t.split(";").forEach(function(r){var n=r.split(":"),i=n[0],o=n.slice(1);i&&o&&(e.style[i.trim()]=o.join(":"))})}function _(e){var t=this,r;try{l(I(e),function(n){var i=n.getAttribute("data-sr-id");if(i!==null){r=!0;var o=t.store.elements[i];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),q(o.node,o.styles.inline.generated),n.removeAttribute("data-sr-id"),delete t.store.elements[i]}})}catch(n){return x.call(this,"Clean failed.",n.message)}if(r)try{de.call(this)}catch(n){return x.call(this,"Clean failed.",n.message)}}function Ae(){var e=this;l(this.store.elements,function(t){q(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),l(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.removeEventListener("scroll",e.delegate),r.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function O(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(P(e))return l(t,function(n){l(n,function(i,o){P(i)?((!e[o]||!P(e[o]))&&(e[o]={}),O(e[o],i)):e[o]=i})}),e;throw new TypeError("Target must be an object literal.")}function N(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var G=function(){var e=0;return function(){return e++}}();function le(){var e=this;de.call(this),l(this.store.elements,function(t){var r=[t.styles.inline.generated];t.visible?(r.push(t.styles.opacity.computed),r.push(t.styles.transform.generated.final),t.revealed=!0):(r.push(t.styles.opacity.generated),r.push(t.styles.transform.generated.initial),t.revealed=!1),q(t.node,r.filter(function(n){return n!==""}).join(" "))}),l(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.addEventListener("scroll",e.delegate),r.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function k(e,t){t===void 0&&(t={});var r=t.pristine||this.pristine,n=e.config.useDelay==="always"||e.config.useDelay==="onload"&&r||e.config.useDelay==="once"&&!e.seen,i=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||i)return Pe.call(this,e,n);if(t.reset||o)return Be.call(this,e)}function Pe(e,t){var r=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?r.push(e.styles.transition.generated.delayed):r.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,q(e.node,r.filter(function(n){return n!==""}).join(" ")),ue.call(this,e,t)}function Be(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,q(e.node,t.filter(function(r){return r!==""}).join(" ")),ue.call(this,e)}function ue(e,t){var r=this,n=t?e.config.duration+e.config.delay:e.config.duration,i=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),i(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&_.call(r,e.node)},n-s)}}function fe(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return k.call(this,e,{reset:!0});var r=this.store.sequences[e.sequence.id],n=e.sequence.index;if(r){var i=new ie(r,"visible",this.store),o=new ie(r,"revealed",this.store);if(r.models={visible:i,revealed:o},!o.body.length){var s=r.members[i.body[0]],c=this.store.elements[s];if(c)return A.call(this,r,i.body[0],-1,t),A.call(this,r,i.body[0],1,t),k.call(this,c,{reveal:!0,pristine:t})}if(!r.blocked.head&&n===[].concat(o.head).pop()&&n>=[].concat(i.body).shift())return A.call(this,r,n,-1,t),k.call(this,e,{reveal:!0,pristine:t});if(!r.blocked.foot&&n===[].concat(o.foot).shift()&&n<=[].concat(i.body).pop())return A.call(this,r,n,1,t),k.call(this,e,{reveal:!0,pristine:t})}}function Ne(e){var t=Math.abs(e);if(!isNaN(t))this.id=G(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function ie(e,t,r){var n=this;this.head=[],this.body=[],this.foot=[],l(e.members,function(i,o){var s=r.elements[i];s&&s[t]&&n.body.push(o)}),this.body.length&&l(e.members,function(i,o){var s=r.elements[i];s&&!s[t]&&(o<n.body[0]?n.head.push(o):n.foot.push(o))})}function A(e,t,r,n){var i=this,o=["head",null,"foot"][1+r],s=e.members[t+r],c=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,c&&fe.call(i,c,n)},e.interval)}function he(e,t,r){var n=this;t===void 0&&(t={}),r===void 0&&(r=!1);var i=[],o,s=t.interval||ce.interval;try{s&&(o=new Ne(s));var c=I(e);if(!c.length)throw new Error("Invalid reveal target.");var f=c.reduce(function(a,u){var d={},p=u.getAttribute("data-sr-id");p?(O(d,n.store.elements[p]),q(d.node,d.styles.inline.computed)):(d.id=G(),d.node=u,d.seen=!1,d.revealed=!1,d.visible=!1);var y=O({},d.config||n.defaults,t);if(!y.mobile&&N()||!y.desktop&&!N())return p&&_.call(n,d),a;var g=I(y.container)[0];if(!g)throw new Error("Invalid container.");if(!g.contains(u))return a;var E;return E=De(g,i,n.store.containers),E===null&&(E=G(),i.push({id:E,node:g})),d.config=y,d.containerId=E,d.styles=Ce(d),o&&(d.sequence={id:o.id,index:o.members.length},o.members.push(d.id)),a.push(d),a},[]);l(f,function(a){n.store.elements[a.id]=a,a.node.setAttribute("data-sr-id",a.id)})}catch(a){return x.call(this,"Reveal failed.",a.message)}l(i,function(a){n.store.containers[a.id]={id:a.id,node:a.node}}),o&&(this.store.sequences[o.id]=o),r!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(le.bind(this),0))}function De(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var n=null;return l(t,function(i){l(i,function(o){n===null&&o.node===e&&(n=o.id)})}),n}function Fe(){var e=this;l(this.store.history,function(t){he.call(e,t.target,t.options,!0)}),le.call(this)}var ze=function(e){return(e>0)-(e<0)||+e},oe=Math.sign||ze;function se(e,t){var r=t?e.node.clientHeight:e.node.offsetHeight,n=t?e.node.clientWidth:e.node.offsetWidth,i=0,o=0,s=e.node;do isNaN(s.offsetTop)||(i+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;while(s);return{bounds:{top:i,right:o+n,bottom:i+r,left:o},height:r,width:n}}function He(e){var t,r;return e.node===document.documentElement?(t=window.pageYOffset,r=window.pageXOffset):(t=e.node.scrollTop,r=e.node.scrollLeft),{top:t,left:r}}function We(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(t){var r=Math.max(0,Math.min(1,e.config.viewFactor)),n=e.config.viewOffset,i={top:e.geometry.bounds.top+e.geometry.height*r,right:e.geometry.bounds.right-e.geometry.width*r,bottom:e.geometry.bounds.bottom-e.geometry.height*r,left:e.geometry.bounds.left+e.geometry.width*r},o={top:t.geometry.bounds.top+t.scroll.top+n.top,right:t.geometry.bounds.right+t.scroll.left-n.right,bottom:t.geometry.bounds.bottom+t.scroll.top-n.bottom,left:t.geometry.bounds.left+t.scroll.left+n.left};return i.top<o.bottom&&i.right>o.left&&i.bottom>o.top&&i.left<o.right||e.styles.position==="fixed"}}function Ye(e,t){var r=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),Te(function(){var n=e.type==="init"||e.type==="resize";l(r.store.containers,function(i){n&&(i.geometry=se.call(r,i,!0));var o=He.call(r,i);i.scroll&&(i.direction={x:oe(o.left-i.scroll.left),y:oe(o.top-i.scroll.top)}),i.scroll=o}),l(t,function(i){(n||i.geometry===void 0)&&(i.geometry=se.call(r,i)),i.visible=We.call(r,i)}),l(t,function(i){i.sequence?fe.call(r,i):k.call(r,i)}),r.pristine=!1})}function Ue(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function Je(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var Qe="4.0.9",F,z,H,W,Y,b,U,J;function L(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==L.prototype;if(t)return new L(e);if(!L.isSupported())return x.call(this,"Instantiation failed.","This browser is not supported."),S.failure();var r;try{r=b?O({},b,e):O({},ce,e)}catch(i){return x.call(this,"Invalid configuration.",i.message),S.failure()}try{var n=I(r.container)[0];if(!n)throw new Error("Invalid container.")}catch(i){return x.call(this,i.message),S.failure()}return b=r,!b.mobile&&N()||!b.desktop&&!N()?(x.call(this,"This device is disabled.","desktop: "+b.desktop,"mobile: "+b.mobile),S.failure()):(S.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,F=F||Ye.bind(this),z=z||Ae.bind(this),H=H||he.bind(this),W=W||_.bind(this),Y=Y||Fe.bind(this),Object.defineProperty(this,"delegate",{get:function(){return F}}),Object.defineProperty(this,"destroy",{get:function(){return z}}),Object.defineProperty(this,"reveal",{get:function(){return H}}),Object.defineProperty(this,"clean",{get:function(){return W}}),Object.defineProperty(this,"sync",{get:function(){return Y}}),Object.defineProperty(this,"defaults",{get:function(){return b}}),Object.defineProperty(this,"version",{get:function(){return Qe}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),J||(J=this))}L.isSupported=function(){return Ue()&&Je()};Object.defineProperty(L,"debug",{get:function(){return U||!1},set:function(e){return U=typeof e=="boolean"?e:U}});L();let pe=null,Xe=!1;function Ge(e){pe=e}document.getElementById("closeModalButton");const Ke=document.getElementById("additionalButton2"),_e=document.getElementById("closeModalButton2"),M=document.getElementById("myModal"),T=document.getElementById("myModal2");function ve(e,t){t.style.display="block";const r=t.querySelector("img"),n=t.querySelector("h2"),i=t.querySelector(".text-modal"),o=t.querySelector(".burn-modal"),s=t.querySelector(".modal-rating"),c=t.querySelector(".modal-part"),f=t.querySelector(".modal-equipment"),a=t.querySelector(".modal-target"),u=t.querySelector(".modal-popularity");r.src=e.gifUrl,n.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),i.textContent=e.description,o.textContent=`${e.burnedCalories} cal / ${e.time} min`,c.textContent=e.bodyPart,f.textContent=e.equipment,a.textContent=e.target,u.textContent=e.popularity,s.textContent=e.rating,t.addEventListener("click",y=>{y.target===t&&B(t)});const d=y=>{y.key==="Escape"&&t.style.display==="block"&&(B(t),document.removeEventListener("keydown",d))};document.addEventListener("keydown",d),t.querySelector(".close-button").addEventListener("click",()=>{B(t),document.removeEventListener("keydown",d)})}function Ve(){B(M),T.style.display="block",document.addEventListener("keydown",D)}Ke.addEventListener("click",()=>{Ve()});async function ye(e,t){try{const r=await Ze(e);if(!r){console.error("Не вдалося отримати дані про вправу.");return}ve(r,t),pe=e,t===M&&(Xe=!0)}catch(r){console.error(`Помилка: ${r.message}`)}}async function Ze(e){try{const t=await fetch(`https://your-energy.b.goit.study/api/exercises/${e}`);if(!t.ok)throw new Error("Помилка запиту до API");return await t.json()}catch(t){return console.error("Помилка при отриманні даних про вправу:",t),null}}document.addEventListener("click",e=>{const t=e.target.closest(".exercise-item-button");if(!t)return;const r=t.getAttribute("id");ye(r,M)});function B(e){e.style.display="none"}function V(){T.style.display="none"}_e.addEventListener("click",()=>{V(),document.removeEventListener("keydown",D)});T.addEventListener("click",e=>{e.target===T&&V()});const D=e=>{e.key==="Escape"&&T.style.display==="block"&&(V(),document.removeEventListener("keydown",D))};document.addEventListener("keydown",D);window.addEventListener("load",function(){$(function(){window.sr=L(),$(window).width()<768?($(".timeline-content").hasClass("js--fadeInLeft")&&$(".timeline-content").removeClass("js--fadeInLeft").addClass("js--fadeInRight"),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})):(sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})),sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})})});const K=document.querySelector(".js-open-menu"),et=document.querySelector(".js-close-menu"),ge=()=>{const e=K.getAttribute("aria-expanded")==="true"||!1;K.setAttribute("aria-expanded",!e),mobileMenu.classList.toggle("is-open")};K.addEventListener("click",ge);et.addEventListener("click",ge);window.addEventListener("resize",()=>{window.innerWidth>768&&mobileMenu.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){e.style.display="none"})});document.addEventListener("DOMContentLoaded",function(){const e="favoritesList",t=document.querySelector(".favorites-box-deskription"),r=document.querySelector(".favorites-list");function n(){r.innerHTML="";const o=JSON.parse(localStorage.getItem(e))||[];o.forEach(c=>{const f=document.createElement("li");f.className="exercise-item favorites-exercise-item timeline-content js--fadeInLeft",f.innerHTML=`
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
      `;const a=f.querySelector(".exercise-item-button");a.addEventListener("click",()=>{const u=a.getAttribute("id");Ge(u),ye(u,M),ve(exerciseData,M)}),r.appendChild(f)}),o.length===0&&(t.style.display="block"),document.querySelectorAll(".favourite-delete-button").forEach(c=>{c.addEventListener("click",function(){const f=c.getAttribute("data-card-id");let a=JSON.parse(localStorage.getItem(e))||[];const u=a.findIndex(d=>d.exerciseID===f);u!==-1&&(a.splice(u,1),localStorage.setItem(e,JSON.stringify(a)),n())})})}function i(){try{localStorage.getItem(e)?(t.style.display="none",n()):t.style.display="block"}catch(o){console.error(o)}}i()});const me=document.querySelector(".recommend-text-box"),tt=me.querySelector(".cover-text");function rt(){tt.style.transform="translateY(0)"}me.addEventListener("click",()=>{rt()});async function ct(e,t,r){const n=`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=${r}`;try{const i=await fetch(n);if(!i.ok)throw new Error(`Request failed with status ${i.status}`);return await i.json()}catch(i){return console.error("Error fetching data:",i),null}}async function dt(e,t,r){try{const n=`https://your-energy.b.goit.study/api/exercises/${e}/rating`,i=await fetch(n,{method:"PATCH",headers:{"Content-Type":"application/json"},body:r});if(!i.ok)throw new Error(`Request to set rating failed with status ${i.status}`);const o=await i.json();console.log(`Rating for exercise ${e} has been updated to ${t}.`)}catch(n){console.error(`Error: ${n.message}`)}}async function nt(){try{const e=await fetch("https://your-energy.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();if(t&&t.author&&t.quote){const r={quote:t.quote,author:t.author};return console.log("Quote of the day:",r),r}else console.log("Failed to get the quote of the day.")}catch(e){console.error("Error while fetching the quote of the day:",e)}}const be="quote",it=document.querySelector(".quotes-day-box");async function we(){const e=await nt();if(console.log(e),!e||!e.quote||!e.author)throw new Error("Invalid data received from the server");return ot(e),st(e),e}try{const e=we()}catch(e){console.log(e.message)}function ot({quote:e,author:t}){it.innerHTML=`
        <h3 class="quotes-day-title">Quote of the day</h3>
        <p class="quotes-day-text">${e}</p>
        <p class="quotes-day-author">${t}</p>
    `}function st({quote:e,author:t}){const r={quote:e,author:t,date:new Date().getDate()};try{const n=JSON.stringify(r);localStorage.setItem(be,n)}catch(n){console.log(n.message)}}async function at(){try{const e=localStorage.getItem(be);if(e){let t=JSON.parse(e),r=new Date().getDate();t.date!==r&&await we()}}catch(e){console.log(e.message)}}at();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu");document.getElementById("overlay");const n=()=>{const i=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!i),e.classList.toggle("is-open")};t.addEventListener("click",n),r.addEventListener("click",n),window.addEventListener("resize",()=>{window.innerWidth>768&&e.classList.remove("is-open")}),document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){i.style.display="none"})})})();export{pe as c,ct as f,dt as s};
