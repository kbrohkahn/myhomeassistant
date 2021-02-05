/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,n,s){var i,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,n,o):i(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,r=new RegExp(`${s}|${i}`);class o{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],o=document.createTreeWalker(e.content,133,null,!1);let c=0,h=-1,u=0;const{strings:p,values:{length:m}}=t;for(;u<m;){const t=o.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)a(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=p[u],n=d.exec(e)[2],s=n.toLowerCase()+"$lit$",i=t.getAttribute(s);t.removeAttribute(s);const o=i.split(r);this.parts.push({type:"attribute",index:h,name:n,strings:o}),u+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,i=e.split(r),o=i.length-1;for(let e=0;e<o;e++){let n,r=i[e];if(""===r)n=l();else{const t=d.exec(r);null!==t&&a(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(r)}s.insertBefore(n,t),this.parts.push({type:"node",index:++h})}""===i[o]?(s.insertBefore(l(),t),n.push(t)):t.data=i[o],u+=o}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&h!==c||(h++,e.insertBefore(l(),t)),c=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(n.push(t),h--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const a=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:n},parts:s}=t,i=document.createTreeWalker(n,133,null,!1);let r=p(s),o=s[r],a=-1,c=0;const l=[];let d=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-c,r=p(s,r),o=s[r]}l.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},p=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(c(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),g={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,l=i.nextNode();for(;o<s.length;)if(r=s[o],c(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(n.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=n.pop(),l=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),S=` ${s} `;class w{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const a=d.exec(t);e+=null===a?t+(n?S:i):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),C=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!C(t))return t}let s="";for(let i=0;i<e;i++){s+=t[i];const e=n[i];if(void 0!==e){const t=e.value;if(b(t)||!C(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||b(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class N{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):C(t)?this.__commitIterable(t):t===_?(this.value=_,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const n=new y(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)n=e[s],void 0===n&&(n=new N(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class M{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class k extends x{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends P{}let A=!1;(()=>{try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class E{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=V(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const V=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function j(t){let e=D.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},D.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(s);return n=e.keyString.get(i),void 0===n&&(n=new o(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const D=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,s){const i=e[0];if("."===i){return new k(t,e.slice(1),n).parts}if("@"===i)return[new E(t,e.slice(1),s.eventContext)];if("?"===i)return[new M(t,e.slice(1),n)];return new x(t,e,n).parts}handleTextExpression(t){return new N(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const $=(t,...e)=>new w(t,e,"html",U)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,Y=(t,e)=>`${t}--${e}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const R=t=>e=>{const n=Y(e.type,t);let i=D.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},D.set(n,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(s);if(r=i.keyString.get(a),void 0===r){const n=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(n,t),r=new o(e,n),i.keyString.set(a,r)}return i.stringsArray.set(e.strings,r),r},z=["html","svg"],I=new Set,F=(t,e,n)=>{I.add(t);const s=n?n.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(s,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=i[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{z.forEach(e=>{const n=D.get(Y(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),h(t,n)})})})(t);const a=s.content;n?function(t,e,n=null){const{element:{content:s},parts:i}=t;if(null==n)return void s.appendChild(e);const r=document.createTreeWalker(s,133,null,!1);let o=p(i),a=0,c=-1;for(;r.nextNode();){c++;for(r.currentNode===n&&(a=u(e),n.parentNode.insertBefore(e,n));-1!==o&&i[o].index===c;){if(a>0){for(;-1!==o;)i[o].index+=a,o=p(i,o);return}o=p(i,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),h(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const L={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},q=(t,e)=>e!==t&&(e==e||t==t),B={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:q};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const s=this._attributeNameForProperty(n,e);void 0!==s&&(this._attributeToPropertyMap.set(s,n),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=B){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,n,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdateInternal(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||B}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=q){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,s=e.converter||L,i="function"==typeof s?s:s.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,s=e.converter;return(s&&s.toAttribute||L.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=B){const s=this.constructor,i=s._attributeNameForProperty(t,n);if(void 0!==i){const t=s._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,s=n._attributeToPropertyMap.get(t);if(void 0!==s){const t=n.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let s=!0;if(void 0!==t){const i=this.constructor;n=n||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:s}=e;return{kind:n,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),K=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Z(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):K(t,e)}function G(t){return Z({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class tt{constructor(t,e){if(e!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const n=e.reduce((e,n,s)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[s+1],t[0]);return new tt(n,X)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const nt={};class st extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),s=[];n.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new tt(String(e),X)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==nt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return nt}}st.finalized=!0,st.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,r=O.has(e),o=H&&11===e.nodeType&&!!e.host,a=o&&!I.has(i),c=a?document.createDocumentFragment():e;if(((t,e,s)=>{let i=O.get(e);void 0===i&&(n(e,e.firstChild),O.set(e,i=new N(Object.assign({templateFactory:j},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,c,Object.assign({templateFactory:R(i)},s)),a){const t=O.get(c);O.delete(c);const s=t.value instanceof y?t.value.template:void 0;F(i,c,s),n(e,e.firstChild),e.appendChild(c),O.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};const it=["","十","百","千"];var rt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ot="[^\\s]+",at=/\[([^]*?)\]/gm;function ct(t,e){for(var n=[],s=0,i=t.length;s<i;s++)n.push(t[s].substr(0,e));return n}var lt=function(t){return function(e,n){var s=n[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return s>-1?s:null}};function dt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var s=0,i=e;s<i.length;s++){var r=i[s];for(var o in r)t[o]=r[o]}return t}var ht=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ut=["January","February","March","April","May","June","July","August","September","October","November","December"],pt=ct(ut,3),mt={dayNamesShort:ct(ht,3),dayNames:ht,monthNamesShort:pt,monthNames:ut,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},ft=dt({},mt),gt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},_t={D:function(t){return String(t.getDate())},DD:function(t){return gt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return gt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return gt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return gt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return gt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return gt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return gt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return gt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return gt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return gt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return gt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+gt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+gt(Math.floor(Math.abs(e)/60),2)+":"+gt(Math.abs(e)%60,2)}},yt=function(t){return+t-1},vt=[null,"[1-9]\\d?"],St=[null,ot],wt=["isPm",ot,function(t,e){var n=t.toLowerCase();return n===e.amPm[0]?0:n===e.amPm[1]?1:null}],bt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var n=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?n:-n}return 0}],Ct=(lt("monthNamesShort"),lt("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var xt=function(t,e,n){if(void 0===e&&(e=Ct.default),void 0===n&&(n={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var s=[];e=(e=Ct[e]||e).replace(at,(function(t,e){return s.push(e),"@@@"}));var i=dt(dt({},ft),n);return(e=e.replace(rt,(function(e){return _t[e](t,i)}))).replace(/@@@/g,(function(){return s.shift()}))},Pt=(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t,e,n,s){s=s||{},n=null==n?{}:n;var i=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return i.detail=n,t.dispatchEvent(i),i});let Nt=class extends st{setConfig(t){this._config=t}configChanged(t){this._config&&this.hass&&Pt(this,"config-changed",{config:t})}get _use_24h(){var t;return(null===(t=this._config)||void 0===t?void 0:t.use_24h)||!1}get _invert_date(){var t;return(null===(t=this._config)||void 0===t?void 0:t.invert_date)||!1}get _short_weekdays(){var t;return(null===(t=this._config)||void 0===t?void 0:t.short_weekdays)||!0}get _kanji_numbers(){var t;return(null===(t=this._config)||void 0===t?void 0:t.kanji_numbers)||!1}render(){return this.hass?$`
      <div class="card-config">
        <div class="options">
          <div class="option">
            <ha-switch
              .checked=${this._use_24h}
              .configValue="${"use_24h"}"
              @change="${this._valueChanged}"
            ></ha-switch>
            <span class="label">Use 24 Clock</span>
          </div>
          <div class="option">
            <ha-switch
              .checked=${this._invert_date}
              .configValue="${"invert_date"}"
              @change="${this._valueChanged}"
            ></ha-switch>
            <span class="label">Invert date order</span>
            <span class="help">Use d日m月Y年 instead of the standard Y年m月d日</span>
          </div>
          <div class="option">
            <ha-switch
              .checked=${this._short_weekdays}
              .configValue="${"short_weekdays"}"
              @change="${this._valueChanged}"
            ></ha-switch>
            <span class="label">Use short weekdateformat</span>
            <span class="help">eg. (火) instead of 火曜日</span>
          </div>
          <div class="option">
            <ha-switch
              .checked=${this._kanji_numbers}
              .configValue="${"kanji_numbers"}"
              @change="${this._valueChanged}"
            ></ha-switch>
            <span class="label">Show numbers as Kanji</span>
          </div>
        </div>
      </div>
    `:$``}static get styles(){return et`
      .options {
        display: grid;
      }

      .option {
        display: flex;
        margin: 1rem 0;
        align-items: center;
      }

      .option .label {
        margin: 0 1rem;
      }

      .option .help {
        color: var(--secondary-text-color);
      }
    `}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),Pt(this,"config-changed",{config:this._config}))}};t([Z({attribute:!1})],Nt.prototype,"hass",void 0),t([G()],Nt.prototype,"_config",void 0),Nt=t([W("kanji-clock-card-editor")],Nt),window.customCards=window.customCards||[],window.customCards.push({type:"kanji-clock-card",name:"Kanji Clock Card",description:"A simple clock widget using Japanese Kanji for time and date"});const Mt=t=>!1===t||!0===t;let kt=class extends st{constructor(){super(...arguments),this._handle=0}static async getConfigElement(){return document.createElement("kanji-clock-card-editor")}static getStubConfig(){return{use_24h:!1,invert_date:!1,short_weekdays:!0,kanji_numbers:!1}}connectedCallback(){super.connectedCallback(),this._handle=window.setInterval(this.requestUpdate.bind(this),500)}disconnectedCallback(){clearInterval(this._handle)}setConfig(t){this.config=Object.assign(Object.assign({},t),{name:"Kanji Clock",use_24h:!!Mt(t.use_24h)&&t.use_24h,invert_date:!!Mt(t.invert_date)&&t.invert_date,short_weekdays:!Mt(t.short_weekdays)||t.short_weekdays,kanji_numbers:!!Mt(t.kanji_numbers)&&t.kanji_numbers})}numberToKanji(t){if(!0!==this.config.kanji_numbers)return t.toString();let e="";for(let n=t.toString().length-1;n>=0;n--){const s=Math.pow(10,n),i=t%s,r=Math.floor(t/s);r>1&&r<10&&(e+="霊一二三四五六七八九"[r]),r>0&&(e+=it[n]),i>0&&i<10&&(e+="霊一二三四五六七八九"[i])}return e}render(){const t=new Date;let e=t.getHours();const n=t.getMinutes(),s=this.numberToKanji(t.getDate()),i=this.numberToKanji(t.getFullYear()),r=this.numberToKanji(t.getMonth()+1);let o,a="";this.config.use_24h||(e>12&&(e-=12),a=e>=12?"午前":"午後"),o=this.config.use_24h||0!==n?30===n?"半":this.numberToKanji(n)+"分":"";let c=!0===this.config.invert_date?`${s}日${r}月${i}年`:`${i}年${r}月${s}日`;const l="日月火水木金土"[t.getDay()];return c+=" "+(this.config.short_weekdays?`(${l})`:l+"曜日"),$`
      <ha-card>
        <div class="content" id="content">
          <div class="time"><span>${a}</span>${this.numberToKanji(e)}時${o}</div>
          <div class="date">${c}</div>
        </div>
      </ha-card>
    `}static get cardSize(){return 3}static get styles(){return et`
      .content {
        padding: 1.5rem;
        text-align: center;
        font-family: 'Sarasa UI J', 'Noto Sans JP', Helvetica, Arial, sans-serif;
      }
      .time {
        font-size: 3.2rem;
        line-height: 1em;
        font-weight: 400;
        line-height: 1em;
        font-weight: 400;
        padding-bottom: 0.2em;
        color: var(--primary-text-color);
      }
      .time span {
        font-weight: 300;
        color: var(--secondary-text-color);
      }
      .date {
        color: var(--primary-color);
        font-size: var(--paper-font-headline_-_font-size);
      }
    `}};t([Z({attribute:!1})],kt.prototype,"hass",void 0),t([G()],kt.prototype,"config",void 0),kt=t([W("kanji-clock-card")],kt);export{kt as KanjiClockCard};
