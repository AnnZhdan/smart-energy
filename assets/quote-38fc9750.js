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

*/function Oe(e){var t=Object.prototype.toString.call(e),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&r.test(t)&&(e.length===0||K(e[0]))}/*! @license Tealight v0.3.6

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

*/function R(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(K);if(K(e))return[e];if(Oe(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

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
*/function V(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=b();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function b(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function Le(e,t){for(var r=V(e),i=V(t),o=[],n=0;n<4;n++)for(var s=[r[n],r[n+4],r[n+8],r[n+12]],c=0;c<4;c++){var f=c*4,a=[i[f],i[f+1],i[f+2],i[f+3]],d=s[0]*a[0]+s[1]*a[1]+s[2]*a[2]+s[3]*a[3];o[n+f]=d}return o}function Ie(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var r=t[2].split(", ").map(parseFloat);return V(r)}}return b()}function $e(e){var t=Math.PI/180*e,r=b();return r[5]=r[10]=Math.cos(t),r[6]=r[9]=Math.sin(t),r[9]*=-1,r}function je(e){var t=Math.PI/180*e,r=b();return r[0]=r[10]=Math.cos(t),r[2]=r[8]=Math.sin(t),r[2]*=-1,r}function qe(e){var t=Math.PI/180*e,r=b();return r[0]=r[5]=Math.cos(t),r[1]=r[4]=Math.sin(t),r[4]*=-1,r}function oe(e,t){var r=b();return r[0]=e,r[5]=typeof t=="number"?t:e,r}function Pe(e){var t=b();return t[12]=e,t}function Re(e){var t=b();return t[13]=e,t}/*! @license miniraf v1.0.0

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

*/var de=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout(function(){return de(t)},0)}}(),ke=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||de;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var fe={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function Me(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function Ae(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var I={success:Ae,failure:Me};function N(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function l(e,t){if(N(e)){var r=Object.keys(e);return r.forEach(function(i){return t(e[i],i,e)})}if(e instanceof Array)return e.forEach(function(i,o){return t(i,o,e)});throw new TypeError("Expected either an array or object literal.")}function T(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(o){return i+=`
 — `+o}),console.log(i,"color: #ea654b;")}}function ve(){var e=this,t=function(){return{active:[],stale:[]}},r=t(),i=t(),o=t();try{l(R("[data-sr-id]"),function(n){var s=parseInt(n.getAttribute("data-sr-id"));r.active.push(s)})}catch(n){throw n}l(this.store.elements,function(n){r.active.indexOf(n.id)===-1&&r.stale.push(n.id)}),l(r.stale,function(n){return delete e.store.elements[n]}),l(this.store.elements,function(n){o.active.indexOf(n.containerId)===-1&&o.active.push(n.containerId),n.hasOwnProperty("sequence")&&i.active.indexOf(n.sequence.id)===-1&&i.active.push(n.sequence.id)}),l(this.store.containers,function(n){o.active.indexOf(n.id)===-1&&o.stale.push(n.id)}),l(o.stale,function(n){var s=e.store.containers[n].node;s.removeEventListener("scroll",e.delegate),s.removeEventListener("resize",e.delegate),delete e.store.containers[n]}),l(this.store.sequences,function(n){i.active.indexOf(n.id)===-1&&i.stale.push(n.id)}),l(i.stale,function(n){return delete e.store.sequences[n]})}var ne=function(){var e={},t=document.documentElement.style;function r(i,o){if(o===void 0&&(o=t),i&&typeof i=="string"){if(e[i])return e[i];if(typeof o[i]=="string")return e[i]=i;if(typeof o["-webkit-"+i]=="string")return e[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return e={}},r}();function De(e){var t=window.getComputedStyle(e.node),r=t.position,i=e.config,o={},n=e.node.getAttribute("style")||"",s=n.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];o.computed=s?s.map(function(g){return g.trim()}).join("; ")+";":"",o.generated=s.some(function(g){return g.match(/visibility\s?:\s?visible/i)})?o.computed:s.concat(["visibility: visible"]).map(function(g){return g.trim()}).join("; ")+";";var c=parseFloat(t.opacity),f=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),a={computed:c!==f?"opacity: "+c+";":"",generated:c!==f?"opacity: "+f+";":""},d=[];if(parseFloat(i.distance)){var u=i.origin==="top"||i.origin==="bottom"?"Y":"X",p=i.distance;(i.origin==="top"||i.origin==="left")&&(p=/^-/.test(p)?p.substr(1):"-"+p);var w=p.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),y=w[0],x=w[1];switch(x){case"em":p=parseInt(t.fontSize)*y;break;case"px":p=y;break;case"%":p=u==="Y"?e.node.getBoundingClientRect().height*y/100:e.node.getBoundingClientRect().width*y/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}u==="Y"?d.push(Re(p)):d.push(Pe(p))}i.rotate.x&&d.push($e(i.rotate.x)),i.rotate.y&&d.push(je(i.rotate.y)),i.rotate.z&&d.push(qe(i.rotate.z)),i.scale!==1&&(i.scale===0?d.push(oe(2e-4)):d.push(oe(i.scale)));var h={};if(d.length){h.property=ne("transform"),h.computed={raw:t[h.property],matrix:Ie(t[h.property])},d.unshift(h.computed.matrix);var Te=d.reduce(Le);h.generated={initial:h.property+": matrix3d("+Te.join(", ")+");",final:h.property+": matrix3d("+h.computed.matrix.join(", ")+");"}}else h.generated={initial:"",final:""};var v={};if(a.generated||h.generated.initial){v.property=ne("transition"),v.computed=t[v.property],v.fragments=[];var te=i.delay,M=i.duration,A=i.easing;a.generated&&v.fragments.push({delayed:"opacity "+M/1e3+"s "+A+" "+te/1e3+"s",instant:"opacity "+M/1e3+"s "+A+" 0s"}),h.generated.initial&&v.fragments.push({delayed:h.property+" "+M/1e3+"s "+A+" "+te/1e3+"s",instant:h.property+" "+M/1e3+"s "+A+" 0s"});var Ee=v.computed&&!v.computed.match(/all 0s|none 0s/);Ee&&v.fragments.unshift({delayed:v.computed,instant:v.computed});var re=v.fragments.reduce(function(g,D,ie){return g.delayed+=ie===0?D.delayed:", "+D.delayed,g.instant+=ie===0?D.instant:", "+D.instant,g},{delayed:"",instant:""});v.generated={delayed:v.property+": "+re.delayed+";",instant:v.property+": "+re.instant+";"}}else v.generated={delayed:"",instant:""};return{inline:o,opacity:a,position:r,transform:h,transition:v}}function L(e,t){t.split(";").forEach(function(r){var i=r.split(":"),o=i[0],n=i.slice(1);o&&n&&(e.style[o.trim()]=n.join(":"))})}function Z(e){var t=this,r;try{l(R(e),function(i){var o=i.getAttribute("data-sr-id");if(o!==null){r=!0;var n=t.store.elements[o];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),L(n.node,n.styles.inline.generated),i.removeAttribute("data-sr-id"),delete t.store.elements[o]}})}catch(i){return T.call(this,"Clean failed.",i.message)}if(r)try{ve.call(this)}catch(i){return T.call(this,"Clean failed.",i.message)}}function Ce(){var e=this;l(this.store.elements,function(t){L(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),l(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.removeEventListener("scroll",e.delegate),r.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function k(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(N(e))return l(t,function(i){l(i,function(o,n){N(o)?((!e[n]||!N(e[n]))&&(e[n]={}),k(e[n],o)):e[n]=o})}),e;throw new TypeError("Target must be an object literal.")}function B(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var _=function(){var e=0;return function(){return e++}}();function he(){var e=this;ve.call(this),l(this.store.elements,function(t){var r=[t.styles.inline.generated];t.visible?(r.push(t.styles.opacity.computed),r.push(t.styles.transform.generated.final),t.revealed=!0):(r.push(t.styles.opacity.generated),r.push(t.styles.transform.generated.initial),t.revealed=!1),L(t.node,r.filter(function(i){return i!==""}).join(" "))}),l(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.addEventListener("scroll",e.delegate),r.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function j(e,t){t===void 0&&(t={});var r=t.pristine||this.pristine,i=e.config.useDelay==="always"||e.config.useDelay==="onload"&&r||e.config.useDelay==="once"&&!e.seen,o=e.visible&&!e.revealed,n=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||o)return Ne.call(this,e,i);if(t.reset||n)return Be.call(this,e)}function Ne(e,t){var r=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?r.push(e.styles.transition.generated.delayed):r.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,L(e.node,r.filter(function(i){return i!==""}).join(" ")),pe.call(this,e,t)}function Be(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,L(e.node,t.filter(function(r){return r!==""}).join(" ")),pe.call(this,e)}function pe(e,t){var r=this,i=t?e.config.duration+e.config.delay:e.config.duration,o=e.revealed?e.config.beforeReveal:e.config.beforeReset,n=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),o(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){n(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&Z.call(r,e.node)},i-s)}}function ye(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return j.call(this,e,{reset:!0});var r=this.store.sequences[e.sequence.id],i=e.sequence.index;if(r){var o=new se(r,"visible",this.store),n=new se(r,"revealed",this.store);if(r.models={visible:o,revealed:n},!n.body.length){var s=r.members[o.body[0]],c=this.store.elements[s];if(c)return C.call(this,r,o.body[0],-1,t),C.call(this,r,o.body[0],1,t),j.call(this,c,{reveal:!0,pristine:t})}if(!r.blocked.head&&i===[].concat(n.head).pop()&&i>=[].concat(o.body).shift())return C.call(this,r,i,-1,t),j.call(this,e,{reveal:!0,pristine:t});if(!r.blocked.foot&&i===[].concat(n.foot).shift()&&i<=[].concat(o.body).pop())return C.call(this,r,i,1,t),j.call(this,e,{reveal:!0,pristine:t})}}function Fe(e){var t=Math.abs(e);if(!isNaN(t))this.id=_(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function se(e,t,r){var i=this;this.head=[],this.body=[],this.foot=[],l(e.members,function(o,n){var s=r.elements[o];s&&s[t]&&i.body.push(n)}),this.body.length&&l(e.members,function(o,n){var s=r.elements[o];s&&!s[t]&&(n<i.body[0]?i.head.push(n):i.foot.push(n))})}function C(e,t,r,i){var o=this,n=["head",null,"foot"][1+r],s=e.members[t+r],c=this.store.elements[s];e.blocked[n]=!0,setTimeout(function(){e.blocked[n]=!1,c&&ye.call(o,c,i)},e.interval)}function ge(e,t,r){var i=this;t===void 0&&(t={}),r===void 0&&(r=!1);var o=[],n,s=t.interval||fe.interval;try{s&&(n=new Fe(s));var c=R(e);if(!c.length)throw new Error("Invalid reveal target.");var f=c.reduce(function(a,d){var u={},p=d.getAttribute("data-sr-id");p?(k(u,i.store.elements[p]),L(u.node,u.styles.inline.computed)):(u.id=_(),u.node=d,u.seen=!1,u.revealed=!1,u.visible=!1);var w=k({},u.config||i.defaults,t);if(!w.mobile&&B()||!w.desktop&&!B())return p&&Z.call(i,u),a;var y=R(w.container)[0];if(!y)throw new Error("Invalid container.");if(!y.contains(d))return a;var x;return x=He(y,o,i.store.containers),x===null&&(x=_(),o.push({id:x,node:y})),u.config=w,u.containerId=x,u.styles=De(u),n&&(u.sequence={id:n.id,index:n.members.length},n.members.push(u.id)),a.push(u),a},[]);l(f,function(a){i.store.elements[a.id]=a,a.node.setAttribute("data-sr-id",a.id)})}catch(a){return T.call(this,"Reveal failed.",a.message)}l(o,function(a){i.store.containers[a.id]={id:a.id,node:a.node}}),n&&(this.store.sequences[n.id]=n),r!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(he.bind(this),0))}function He(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var i=null;return l(t,function(o){l(o,function(n){i===null&&n.node===e&&(i=n.id)})}),i}function ze(){var e=this;l(this.store.history,function(t){ge.call(e,t.target,t.options,!0)}),he.call(this)}var Ye=function(e){return(e>0)-(e<0)||+e},ae=Math.sign||Ye;function ce(e,t){var r=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,o=0,n=0,s=e.node;do isNaN(s.offsetTop)||(o+=s.offsetTop),isNaN(s.offsetLeft)||(n+=s.offsetLeft),s=s.offsetParent;while(s);return{bounds:{top:o,right:n+i,bottom:o+r,left:n},height:r,width:i}}function We(e){var t,r;return e.node===document.documentElement?(t=window.pageYOffset,r=window.pageXOffset):(t=e.node.scrollTop,r=e.node.scrollLeft),{top:t,left:r}}function Je(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(t){var r=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,o={top:e.geometry.bounds.top+e.geometry.height*r,right:e.geometry.bounds.right-e.geometry.width*r,bottom:e.geometry.bounds.bottom-e.geometry.height*r,left:e.geometry.bounds.left+e.geometry.width*r},n={top:t.geometry.bounds.top+t.scroll.top+i.top,right:t.geometry.bounds.right+t.scroll.left-i.right,bottom:t.geometry.bounds.bottom+t.scroll.top-i.bottom,left:t.geometry.bounds.left+t.scroll.left+i.left};return o.top<n.bottom&&o.right>n.left&&o.bottom>n.top&&o.left<n.right||e.styles.position==="fixed"}}function Qe(e,t){var r=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),ke(function(){var i=e.type==="init"||e.type==="resize";l(r.store.containers,function(o){i&&(o.geometry=ce.call(r,o,!0));var n=We.call(r,o);o.scroll&&(o.direction={x:ae(n.left-o.scroll.left),y:ae(n.top-o.scroll.top)}),o.scroll=n}),l(t,function(o){(i||o.geometry===void 0)&&(o.geometry=ce.call(r,o)),o.visible=Je.call(r,o)}),l(t,function(o){o.sequence?ye.call(r,o):j.call(r,o)}),r.pristine=!1})}function Ue(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function Xe(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var Ge="4.0.9",Y,W,J,Q,U,m,X,G;function E(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==E.prototype;if(t)return new E(e);if(!E.isSupported())return T.call(this,"Instantiation failed.","This browser is not supported."),I.failure();var r;try{r=m?k({},m,e):k({},fe,e)}catch(o){return T.call(this,"Invalid configuration.",o.message),I.failure()}try{var i=R(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(o){return T.call(this,o.message),I.failure()}return m=r,!m.mobile&&B()||!m.desktop&&!B()?(T.call(this,"This device is disabled.","desktop: "+m.desktop,"mobile: "+m.mobile),I.failure()):(I.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Y=Y||Qe.bind(this),W=W||Ce.bind(this),J=J||ge.bind(this),Q=Q||Z.bind(this),U=U||ze.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Y}}),Object.defineProperty(this,"destroy",{get:function(){return W}}),Object.defineProperty(this,"reveal",{get:function(){return J}}),Object.defineProperty(this,"clean",{get:function(){return Q}}),Object.defineProperty(this,"sync",{get:function(){return U}}),Object.defineProperty(this,"defaults",{get:function(){return m}}),Object.defineProperty(this,"version",{get:function(){return Ge}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),G||(G=this))}E.isSupported=function(){return Ue()&&Xe()};Object.defineProperty(E,"debug",{get:function(){return X||!1},set:function(e){return X=typeof e=="boolean"?e:X}});E();function Ke(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}else return Array.from(e)}var ee=!1;if(typeof window<"u"){var le={get passive(){ee=!0}};window.addEventListener("testPassive",null,le),window.removeEventListener("testPassive",null,le)}var F=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),O=[],H=!1,me=-1,q=void 0,S=void 0,P=void 0,be=function(t){return O.some(function(r){return!!(r.options.allowTouchMove&&r.options.allowTouchMove(t))})},z=function(t){var r=t||window.event;return be(r.target)||r.touches.length>1?!0:(r.preventDefault&&r.preventDefault(),!1)},Ve=function(t){if(P===void 0){var r=!!t&&t.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;if(r&&i>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);P=document.body.style.paddingRight,document.body.style.paddingRight=o+i+"px"}}q===void 0&&(q=document.body.style.overflow,document.body.style.overflow="hidden")},_e=function(){P!==void 0&&(document.body.style.paddingRight=P,P=void 0),q!==void 0&&(document.body.style.overflow=q,q=void 0)},Ze=function(){return window.requestAnimationFrame(function(){if(S===void 0){S={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,r=t.scrollY,i=t.scrollX,o=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-r,document.body.style.left=-i,setTimeout(function(){return window.requestAnimationFrame(function(){var n=o-window.innerHeight;n&&r>=o&&(document.body.style.top=-(r+n))})},300)}})},et=function(){if(S!==void 0){var t=-parseInt(document.body.style.top,10),r=-parseInt(document.body.style.left,10);document.body.style.position=S.position,document.body.style.top=S.top,document.body.style.left=S.left,window.scrollTo(r,t),S=void 0}},tt=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},rt=function(t,r){var i=t.targetTouches[0].clientY-me;return be(t.target)?!1:r&&r.scrollTop===0&&i>0||tt(r)&&i<0?z(t):(t.stopPropagation(),!0)},it=function(t,r){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!O.some(function(o){return o.targetElement===t})){var i={targetElement:t,options:r||{}};O=[].concat(Ke(O),[i]),F?Ze():Ve(r),F&&(t.ontouchstart=function(o){o.targetTouches.length===1&&(me=o.targetTouches[0].clientY)},t.ontouchmove=function(o){o.targetTouches.length===1&&rt(o,t)},H||(document.addEventListener("touchmove",z,ee?{passive:!1}:void 0),H=!0))}},ue=function(t){if(!t){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}O=O.filter(function(r){return r.targetElement!==t}),F&&(t.ontouchstart=null,t.ontouchmove=null,H&&O.length===0&&(document.removeEventListener("touchmove",z,ee?{passive:!1}:void 0),H=!1)),F?et():_e()};(()=>{const e=document.getElementById("overlay"),t=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu");let o=!1;const n=()=>{o=!o,r.setAttribute("aria-expanded",o),t.classList.toggle("is-open"),o?(it(document.body),e.style.display="block"):(ue(document.body),e.style.display="none")};r.addEventListener("click",n),i.addEventListener("click",n),window.addEventListener("resize",()=>{window.innerWidth>768&&o&&(t.classList.remove("is-open"),ue(document.body),e.style.display="none")})})();const ot="/smart-energy/assets/icon-sprite-4c9b95a6.svg";window.addEventListener("load",function(){$(function(){window.sr=E(),$(window).width()<768?($(".timeline-content").hasClass("js--fadeInLeft")&&$(".timeline-content").removeClass("js--fadeInLeft").addClass("js--fadeInRight"),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})):(sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})),sr.reveal(".js--fadeInLeft",{origin:"left",distance:"300px",easing:"ease-in-out",duration:800}),sr.reveal(".js--fadeInRight",{origin:"right",distance:"300px",easing:"ease-in-out",duration:800})})});document.addEventListener("DOMContentLoaded",function(){const e="favoritesList",t=document.querySelector(".favorites-box-deskription"),r=document.querySelector(".favorites-list");function i(){r.innerHTML="";const n=JSON.parse(localStorage.getItem(e))||[];n.forEach(c=>{const f=document.createElement("li");f.className="exercise-item favorites-exercise-item timeline-content js--fadeInLeft",f.innerHTML=`
        <div class="exercise-item-wrapper ">
          <div class="exercise-item-firth-wrapper">
            <p class="exercise-item-workout">${c.exerciseName}</p>
            <button type="button" class="button favourite-delete-button" data-card-id="${c.exerciseID}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" class="exercise-item-trash">
                <use xlink:href="${ot}#trash" style="fill: white; stroke: black"></use>
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
      `,r.appendChild(f)}),n.length===0&&(t.style.display="block"),document.querySelectorAll(".favourite-delete-button").forEach(c=>{c.addEventListener("click",function(){const f=c.getAttribute("data-card-id");let a=JSON.parse(localStorage.getItem(e))||[];const d=a.findIndex(u=>u.exerciseID===f);d!==-1&&(a.splice(d,1),localStorage.setItem(e,JSON.stringify(a))),(!a||a.length===0)&&(t.style.display="block"),i()})})}function o(){try{localStorage.getItem(e)?(t.style.display="none",i()):t.style.display="block"}catch(n){console.error(n)}}o()});const we=document.querySelector(".recommend-text-box"),nt=we.querySelector(".cover-text");function st(){nt.style.transform="translateY(0)"}we.addEventListener("click",()=>{st()});async function ft(e,t,r){const i=`https://your-energy.b.goit.study/api/filters?filter=${e}&page=${t}&limit=${r}`;try{const o=await fetch(i);if(!o.ok)throw new Error(`Request failed with status ${o.status}`);return await o.json()}catch(o){return console.error("Error fetching data:",o),null}}async function vt(e,t,r){try{const i=`https://your-energy.b.goit.study/api/exercises/${e}/rating`,o=await fetch(i,{method:"PATCH",headers:{"Content-Type":"application/json"},body:r});if(!o.ok)throw new Error(`Request to set rating failed with status ${o.status}`);const n=await o.json();console.log(`Rating for exercise ${e} has been updated to ${t}.`)}catch(i){console.error(`Error: ${i.message}`)}}async function at(){try{const e=await fetch("https://your-energy.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const t=await e.json();if(t&&t.author&&t.quote){const r={quote:t.quote,author:t.author};return console.log("Quote of the day:",r),r}else console.log("Failed to get the quote of the day.")}catch(e){console.error("Error while fetching the quote of the day:",e)}}const xe="quote",ct=document.querySelector(".quotes-day-box");async function Se(){const e=await at();if(console.log(e),!e||!e.quote||!e.author)throw new Error("Invalid data received from the server");return lt(e),ut(e),e}try{const e=Se()}catch(e){console.log(e.message)}function lt({quote:e,author:t}){ct.innerHTML=`
        <h3 class="quotes-day-title">Quote of the day</h3>
        <p class="quotes-day-text">${e}</p>
        <p class="quotes-day-author">${t}</p>
    `}function ut({quote:e,author:t}){const r={quote:e,author:t,date:new Date().getDate()};try{const i=JSON.stringify(r);localStorage.setItem(xe,i)}catch(i){console.log(i.message)}}async function dt(){try{const e=localStorage.getItem(xe);if(e){let t=JSON.parse(e),r=new Date().getDate();t.date!==r&&await Se()}}catch(e){console.log(e.message)}}dt();export{vt as a,ft as f,ot as s};
