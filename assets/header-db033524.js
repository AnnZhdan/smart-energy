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

*/function K(e){return typeof window.Node=="object"?e instanceof window.Node:e!==null&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

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

*/function qe(e){var t=Object.prototype.toString.call(e),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&r.test(t)&&(e.length===0||K(e[0]))}/*! @license Tealight v0.3.6

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

*/function P(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(K);if(K(e))return[e];if(qe(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

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
*/function V(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=b();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function b(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function Ie(e,t){for(var r=V(e),i=V(t),n=[],o=0;o<4;o++)for(var s=[r[o],r[o+4],r[o+8],r[o+12]],c=0;c<4;c++){var f=c*4,a=[i[f],i[f+1],i[f+2],i[f+3]],u=s[0]*a[0]+s[1]*a[1]+s[2]*a[2]+s[3]*a[3];n[o+f]=u}return n}function je(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var r=t[2].split(", ").map(parseFloat);return V(r)}}return b()}function $e(e){var t=Math.PI/180*e,r=b();return r[5]=r[10]=Math.cos(t),r[6]=r[9]=Math.sin(t),r[9]*=-1,r}function Me(e){var t=Math.PI/180*e,r=b();return r[0]=r[10]=Math.cos(t),r[2]=r[8]=Math.sin(t),r[2]*=-1,r}function Pe(e){var t=Math.PI/180*e,r=b();return r[0]=r[5]=Math.cos(t),r[1]=r[4]=Math.sin(t),r[4]*=-1,r}function oe(e,t){var r=b();return r[0]=e,r[5]=typeof t=="number"?t:e,r}function Re(e){var t=b();return t[12]=e,t}function ke(e){var t=b();return t[13]=e,t}/*! @license miniraf v1.0.0

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

*/var fe=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout(function(){return fe(t)},0)}}(),Ae=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||fe;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var ve={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function De(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function Ce(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var q={success:Ce,failure:De};function B(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function d(e,t){if(B(e)){var r=Object.keys(e);return r.forEach(function(i){return t(e[i],i,e)})}if(e instanceof Array)return e.forEach(function(i,n){return t(i,n,e)});throw new TypeError("Expected either an array or object literal.")}function T(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(n){return i+=`
 — `+n}),console.log(i,"color: #ea654b;")}}function he(){var e=this,t=function(){return{active:[],stale:[]}},r=t(),i=t(),n=t();try{d(P("[data-sr-id]"),function(o){var s=parseInt(o.getAttribute("data-sr-id"));r.active.push(s)})}catch(o){throw o}d(this.store.elements,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),d(r.stale,function(o){return delete e.store.elements[o]}),d(this.store.elements,function(o){n.active.indexOf(o.containerId)===-1&&n.active.push(o.containerId),o.hasOwnProperty("sequence")&&i.active.indexOf(o.sequence.id)===-1&&i.active.push(o.sequence.id)}),d(this.store.containers,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),d(n.stale,function(o){var s=e.store.containers[o].node;s.removeEventListener("scroll",e.delegate),s.removeEventListener("resize",e.delegate),delete e.store.containers[o]}),d(this.store.sequences,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),d(i.stale,function(o){return delete e.store.sequences[o]})}var se=function(){var e={},t=document.documentElement.style;function r(i,n){if(n===void 0&&(n=t),i&&typeof i=="string"){if(e[i])return e[i];if(typeof n[i]=="string")return e[i]=i;if(typeof n["-webkit-"+i]=="string")return e[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return e={}},r}();function Be(e){var t=window.getComputedStyle(e.node),r=t.position,i=e.config,n={},o=e.node.getAttribute("style")||"",s=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];n.computed=s?s.map(function(g){return g.trim()}).join("; ")+";":"",n.generated=s.some(function(g){return g.match(/visibility\s?:\s?visible/i)})?n.computed:s.concat(["visibility: visible"]).map(function(g){return g.trim()}).join("; ")+";";var c=parseFloat(t.opacity),f=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),a={computed:c!==f?"opacity: "+c+";":"",generated:c!==f?"opacity: "+f+";":""},u=[];if(parseFloat(i.distance)){var l=i.origin==="top"||i.origin==="bottom"?"Y":"X",p=i.distance;(i.origin==="top"||i.origin==="left")&&(p=/^-/.test(p)?p.substr(1):"-"+p);var w=p.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),y=w[0],x=w[1];switch(x){case"em":p=parseInt(t.fontSize)*y;break;case"px":p=y;break;case"%":p=l==="Y"?e.node.getBoundingClientRect().height*y/100:e.node.getBoundingClientRect().width*y/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}l==="Y"?u.push(ke(p)):u.push(Re(p))}i.rotate.x&&u.push($e(i.rotate.x)),i.rotate.y&&u.push(Me(i.rotate.y)),i.rotate.z&&u.push(Pe(i.rotate.z)),i.scale!==1&&(i.scale===0?u.push(oe(2e-4)):u.push(oe(i.scale)));var h={};if(u.length){h.property=se("transform"),h.computed={raw:t[h.property],matrix:je(t[h.property])},u.unshift(h.computed.matrix);var Le=u.reduce(Ie);h.generated={initial:h.property+": matrix3d("+Le.join(", ")+");",final:h.property+": matrix3d("+h.computed.matrix.join(", ")+");"}}else h.generated={initial:"",final:""};var v={};if(a.generated||h.generated.initial){v.property=se("transition"),v.computed=t[v.property],v.fragments=[];var re=i.delay,k=i.duration,A=i.easing;a.generated&&v.fragments.push({delayed:"opacity "+k/1e3+"s "+A+" "+re/1e3+"s",instant:"opacity "+k/1e3+"s "+A+" 0s"}),h.generated.initial&&v.fragments.push({delayed:h.property+" "+k/1e3+"s "+A+" "+re/1e3+"s",instant:h.property+" "+k/1e3+"s "+A+" 0s"});var Oe=v.computed&&!v.computed.match(/all 0s|none 0s/);Oe&&v.fragments.unshift({delayed:v.computed,instant:v.computed});var ie=v.fragments.reduce(function(g,D,ne){return g.delayed+=ne===0?D.delayed:", "+D.delayed,g.instant+=ne===0?D.instant:", "+D.instant,g},{delayed:"",instant:""});v.generated={delayed:v.property+": "+ie.delayed+";",instant:v.property+": "+ie.instant+";"}}else v.generated={delayed:"",instant:""};return{inline:n,opacity:a,position:r,transform:h,transition:v}}function O(e,t){t.split(";").forEach(function(r){var i=r.split(":"),n=i[0],o=i.slice(1);n&&o&&(e.style[n.trim()]=o.join(":"))})}function ee(e){var t=this,r;try{d(P(e),function(i){var n=i.getAttribute("data-sr-id");if(n!==null){r=!0;var o=t.store.elements[n];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),O(o.node,o.styles.inline.generated),i.removeAttribute("data-sr-id"),delete t.store.elements[n]}})}catch(i){return T.call(this,"Clean failed.",i.message)}if(r)try{he.call(this)}catch(i){return T.call(this,"Clean failed.",i.message)}}function Ne(){var e=this;d(this.store.elements,function(t){O(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),d(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.removeEventListener("scroll",e.delegate),r.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function R(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(B(e))return d(t,function(i){d(i,function(n,o){B(n)?((!e[o]||!B(e[o]))&&(e[o]={}),R(e[o],n)):e[o]=n})}),e;throw new TypeError("Target must be an object literal.")}function N(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var _=function(){var e=0;return function(){return e++}}();function pe(){var e=this;he.call(this),d(this.store.elements,function(t){var r=[t.styles.inline.generated];t.visible?(r.push(t.styles.opacity.computed),r.push(t.styles.transform.generated.final),t.revealed=!0):(r.push(t.styles.opacity.generated),r.push(t.styles.transform.generated.initial),t.revealed=!1),O(t.node,r.filter(function(i){return i!==""}).join(" "))}),d(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.addEventListener("scroll",e.delegate),r.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function I(e,t){t===void 0&&(t={});var r=t.pristine||this.pristine,i=e.config.useDelay==="always"||e.config.useDelay==="onload"&&r||e.config.useDelay==="once"&&!e.seen,n=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||n)return Fe.call(this,e,i);if(t.reset||o)return He.call(this,e)}function Fe(e,t){var r=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?r.push(e.styles.transition.generated.delayed):r.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,O(e.node,r.filter(function(i){return i!==""}).join(" ")),ye.call(this,e,t)}function He(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,O(e.node,t.filter(function(r){return r!==""}).join(" ")),ye.call(this,e)}function ye(e,t){var r=this,i=t?e.config.duration+e.config.delay:e.config.duration,n=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),n(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&ee.call(r,e.node)},i-s)}}function ge(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return I.call(this,e,{reset:!0});var r=this.store.sequences[e.sequence.id],i=e.sequence.index;if(r){var n=new ae(r,"visible",this.store),o=new ae(r,"revealed",this.store);if(r.models={visible:n,revealed:o},!o.body.length){var s=r.members[n.body[0]],c=this.store.elements[s];if(c)return C.call(this,r,n.body[0],-1,t),C.call(this,r,n.body[0],1,t),I.call(this,c,{reveal:!0,pristine:t})}if(!r.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(n.body).shift())return C.call(this,r,i,-1,t),I.call(this,e,{reveal:!0,pristine:t});if(!r.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(n.body).pop())return C.call(this,r,i,1,t),I.call(this,e,{reveal:!0,pristine:t})}}function ze(e){var t=Math.abs(e);if(!isNaN(t))this.id=_(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function ae(e,t,r){var i=this;this.head=[],this.body=[],this.foot=[],d(e.members,function(n,o){var s=r.elements[n];s&&s[t]&&i.body.push(o)}),this.body.length&&d(e.members,function(n,o){var s=r.elements[n];s&&!s[t]&&(o<i.body[0]?i.head.push(o):i.foot.push(o))})}function C(e,t,r,i){var n=this,o=["head",null,"foot"][1+r],s=e.members[t+r],c=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,c&&ge.call(n,c,i)},e.interval)}function me(e,t,r){var i=this;t===void 0&&(t={}),r===void 0&&(r=!1);var n=[],o,s=t.interval||ve.interval;try{s&&(o=new ze(s));var c=P(e);if(!c.length)throw new Error("Invalid reveal target.");var f=c.reduce(function(a,u){var l={},p=u.getAttribute("data-sr-id");p?(R(l,i.store.elements[p]),O(l.node,l.styles.inline.computed)):(l.id=_(),l.node=u,l.seen=!1,l.revealed=!1,l.visible=!1);var w=R({},l.config||i.defaults,t);if(!w.mobile&&N()||!w.desktop&&!N())return p&&ee.call(i,l),a;var y=P(w.container)[0];if(!y)throw new Error("Invalid container.");if(!y.contains(u))return a;var x;return x=Ye(y,n,i.store.containers),x===null&&(x=_(),n.push({id:x,node:y})),l.config=w,l.containerId=x,l.styles=Be(l),o&&(l.sequence={id:o.id,index:o.members.length},o.members.push(l.id)),a.push(l),a},[]);d(f,function(a){i.store.elements[a.id]=a,a.node.setAttribute("data-sr-id",a.id)})}catch(a){return T.call(this,"Reveal failed.",a.message)}d(n,function(a){i.store.containers[a.id]={id:a.id,node:a.node}}),o&&(this.store.sequences[o.id]=o),r!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(pe.bind(this),0))}function Ye(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var i=null;return d(t,function(n){d(n,function(o){i===null&&o.node===e&&(i=o.id)})}),i}function We(){var e=this;d(this.store.history,function(t){me.call(e,t.target,t.options,!0)}),pe.call(this)}var Je=function(e){return(e>0)-(e<0)||+e},ce=Math.sign||Je;function de(e,t){var r=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,n=0,o=0,s=e.node;do isNaN(s.offsetTop)||(n+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;while(s);return{bounds:{top:n,right:o+i,bottom:n+r,left:o},height:r,width:i}}function Qe(e){var t,r;return e.node===document.documentElement?(t=window.pageYOffset,r=window.pageXOffset):(t=e.node.scrollTop,r=e.node.scrollLeft),{top:t,left:r}}function Ue(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(t){var r=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,n={top:e.geometry.bounds.top+e.geometry.height*r,right:e.geometry.bounds.right-e.geometry.width*r,bottom:e.geometry.bounds.bottom-e.geometry.height*r,left:e.geometry.bounds.left+e.geometry.width*r},o={top:t.geometry.bounds.top+t.scroll.top+i.top,right:t.geometry.bounds.right+t.scroll.left-i.right,bottom:t.geometry.bounds.bottom+t.scroll.top-i.bottom,left:t.geometry.bounds.left+t.scroll.left+i.left};return n.top<o.bottom&&n.right>o.left&&n.bottom>o.top&&n.left<o.right||e.styles.position==="fixed"}}function Xe(e,t){var r=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),Ae(function(){var i=e.type==="init"||e.type==="resize";d(r.store.containers,function(n){i&&(n.geometry=de.call(r,n,!0));var o=Qe.call(r,n);n.scroll&&(n.direction={x:ce(o.left-n.scroll.left),y:ce(o.top-n.scroll.top)}),n.scroll=o}),d(t,function(n){(i||n.geometry===void 0)&&(n.geometry=de.call(r,n)),n.visible=Ue.call(r,n)}),d(t,function(n){n.sequence?ge.call(r,n):I.call(r,n)}),r.pristine=!1})}function Ge(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function Ke(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var Ve="4.0.9",Y,W,J,Q,U,m,X,G;function E(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==E.prototype;if(t)return new E(e);if(!E.isSupported())return T.call(this,"Instantiation failed.","This browser is not supported."),q.failure();var r;try{r=m?R({},m,e):R({},ve,e)}catch(n){return T.call(this,"Invalid configuration.",n.message),q.failure()}try{var i=P(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(n){return T.call(this,n.message),q.failure()}return m=r,!m.mobile&&N()||!m.desktop&&!N()?(T.call(this,"This device is disabled.","desktop: "+m.desktop,"mobile: "+m.mobile),q.failure()):(q.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Y=Y||Xe.bind(this),W=W||Ne.bind(this),J=J||me.bind(this),Q=Q||ee.bind(this),U=U||We.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Y}}),Object.defineProperty(this,"destroy",{get:function(){return W}}),Object.defineProperty(this,"reveal",{get:function(){return J}}),Object.defineProperty(this,"clean",{get:function(){return Q}}),Object.defineProperty(this,"sync",{get:function(){return U}}),Object.defineProperty(this,"defaults",{get:function(){return m}}),Object.defineProperty(this,"version",{get:function(){return Ve}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),G||(G=this))}E.isSupported=function(){return Ge()&&Ke()};Object.defineProperty(E,"debug",{get:function(){return X||!1},set:function(e){return X=typeof e=="boolean"?e:X}});E();window.addEventListener("load",function(){$(function(){window.sr=E(),$(window).width()<768?($(".timeline-content").hasClass("js--fadeInLeft")&&$(".timeline-content").removeClass("js--fadeInLeft").addClass("js--fadeInRight"),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})):(sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})),sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})})});const Z=document.querySelector(".js-open-menu"),_e=document.querySelector(".js-close-menu"),be=()=>{const e=Z.getAttribute("aria-expanded")==="true"||!1;Z.setAttribute("aria-expanded",!e),mobileMenu.classList.toggle("is-open")};Z.addEventListener("click",be);_e.addEventListener("click",be);window.addEventListener("resize",()=>{window.innerWidth>768&&mobileMenu.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".fixed-header");document.getElementById("hide-header-button").addEventListener("click",function(){e.style.display="none"})});document.addEventListener("DOMContentLoaded",function(){const e="favoritesList",t=document.querySelector(".favorites-box-deskription"),r=document.querySelector(".favorites-list");function i(){r.innerHTML="";const o=JSON.parse(localStorage.getItem(e))||[];o.forEach(c=>{const f=document.createElement("li");f.className="exercise-item favorites-exercise-item timeline-content js--fadeInLeft",f.innerHTML=`
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
      `,r.appendChild(f)}),o.length===0&&(t.style.display="block"),document.querySelectorAll(".favourite-delete-button").forEach(c=>{c.addEventListener("click",function(){const f=c.getAttribute("data-card-id");let a=JSON.parse(localStorage.getItem(e))||[];const u=a.findIndex(l=>l.exerciseID===f);u!==-1&&(a.splice(u,1),localStorage.setItem(e,JSON.stringify(a)),i())})})}function n(){try{localStorage.getItem(e)?(t.style.display="none",i()):t.style.display="block"}catch(o){console.error(o)}}n()});const we=document.querySelector(".recommend-text-box"),Ze=we.querySelector(".cover-text");function et(){Ze.style.transform="translateY(0)"}we.addEventListener("click",()=>{et()});async function ht(e,t,r){const i=`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=${r}`;try{const n=await fetch(i);if(!n.ok)throw new Error(`Request failed with status ${n.status}`);return await n.json()}catch(n){return console.error("Error fetching data:",n),null}}async function pt(e,t,r){try{const i=`https://your-energy.b.goit.study/api/exercises/${e}/rating`,n=await fetch(i,{method:"PATCH",headers:{"Content-Type":"application/json"},body:r});if(!n.ok)throw new Error(`Request to set rating failed with status ${n.status}`);const o=await n.json();console.log(`Rating for exercise ${e} has been updated to ${t}.`)}catch(i){console.error(`Error: ${i.message}`)}}async function tt(){try{const e=await fetch("https://your-energy.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();if(t&&t.author&&t.quote){const r={quote:t.quote,author:t.author};return console.log("Quote of the day:",r),r}else console.log("Failed to get the quote of the day.")}catch(e){console.error("Error while fetching the quote of the day:",e)}}const xe="quote",rt=document.querySelector(".quotes-day-box");async function Se(){const e=await tt();if(console.log(e),!e||!e.quote||!e.author)throw new Error("Invalid data received from the server");return it(e),nt(e),e}try{const e=Se()}catch(e){console.log(e.message)}function it({quote:e,author:t}){rt.innerHTML=`
        <h3 class="quotes-day-title">Quote of the day</h3>
        <p class="quotes-day-text">${e}</p>
        <p class="quotes-day-author">${t}</p>
    `}function nt({quote:e,author:t}){const r={quote:e,author:t,date:new Date().getDate()};try{const i=JSON.stringify(r);localStorage.setItem(xe,i)}catch(i){console.log(i.message)}}async function ot(){try{const e=localStorage.getItem(xe);if(e){let t=JSON.parse(e),r=new Date().getDate();t.date!==r&&await Se()}}catch(e){console.log(e.message)}}ot();function st(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}else return Array.from(e)}var te=!1;if(typeof window<"u"){var le={get passive(){te=!0}};window.addEventListener("testPassive",null,le),window.removeEventListener("testPassive",null,le)}var F=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),L=[],H=!1,Te=-1,j=void 0,S=void 0,M=void 0,Ee=function(t){return L.some(function(r){return!!(r.options.allowTouchMove&&r.options.allowTouchMove(t))})},z=function(t){var r=t||window.event;return Ee(r.target)||r.touches.length>1?!0:(r.preventDefault&&r.preventDefault(),!1)},at=function(t){if(M===void 0){var r=!!t&&t.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;if(r&&i>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);M=document.body.style.paddingRight,document.body.style.paddingRight=n+i+"px"}}j===void 0&&(j=document.body.style.overflow,document.body.style.overflow="hidden")},ct=function(){M!==void 0&&(document.body.style.paddingRight=M,M=void 0),j!==void 0&&(document.body.style.overflow=j,j=void 0)},dt=function(){return window.requestAnimationFrame(function(){if(S===void 0){S={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,r=t.scrollY,i=t.scrollX,n=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-r,document.body.style.left=-i,setTimeout(function(){return window.requestAnimationFrame(function(){var o=n-window.innerHeight;o&&r>=n&&(document.body.style.top=-(r+o))})},300)}})},lt=function(){if(S!==void 0){var t=-parseInt(document.body.style.top,10),r=-parseInt(document.body.style.left,10);document.body.style.position=S.position,document.body.style.top=S.top,document.body.style.left=S.left,window.scrollTo(r,t),S=void 0}},ut=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},ft=function(t,r){var i=t.targetTouches[0].clientY-Te;return Ee(t.target)?!1:r&&r.scrollTop===0&&i>0||ut(r)&&i<0?z(t):(t.stopPropagation(),!0)},vt=function(t,r){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!L.some(function(n){return n.targetElement===t})){var i={targetElement:t,options:r||{}};L=[].concat(st(L),[i]),F?dt():at(r),F&&(t.ontouchstart=function(n){n.targetTouches.length===1&&(Te=n.targetTouches[0].clientY)},t.ontouchmove=function(n){n.targetTouches.length===1&&ft(n,t)},H||(document.addEventListener("touchmove",z,te?{passive:!1}:void 0),H=!0))}},ue=function(t){if(!t){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}L=L.filter(function(r){return r.targetElement!==t}),F&&(t.ontouchstart=null,t.ontouchmove=null,H&&L.length===0&&(document.removeEventListener("touchmove",z,te?{passive:!1}:void 0),H=!1)),F?lt():ct()};(()=>{const e=document.getElementById("overlay"),t=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu");let n=!1;const o=()=>{n=!n,r.setAttribute("aria-expanded",n),t.classList.toggle("is-open"),n?(vt(document.body),e.style.display="block"):(ue(document.body),e.style.display="none")};r.addEventListener("click",o),i.addEventListener("click",o),window.addEventListener("resize",()=>{window.innerWidth>768&&n&&(t.classList.remove("is-open"),ue(document.body),e.style.display="none")}),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".fixed-header")})})();export{ht as f,pt as s};
