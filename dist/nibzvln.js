!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.nibzvln=e():t.nibzvln=e()}(self,(function(){return(()=>{"use strict";var t={282:(t,e,n)=>{function o(t=!1,e=[]){this.chain=e,this.isNot=t}n.d(e,{default:()=>r}),o.prototype.not=function(){return this.isNot=!0,this},o.prototype._takeRule=function(t){return(...e)=>(this.chain.push({fn:t.apply(this,e),isNot:this.isNot}),this.isNot&&(this.isNot=!1),this)},o.prototype.validate=function(t){return this.chain.every((e=>e.isNot?!e.fn.call(this,t):e.fn.call(this,t)))},o.prototype._clone=function(){return new o(this.isNot,this.chain)};const r=o},244:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var o=n(282);const r={numeric:()=>t=>/^\d+$/.test(t),lowercase:()=>t=>/^([a-z]+\s*)+$/.test(t),uppercase:()=>t=>/^([A-Z]+\s*)+$/.test(t),minLength:t=>e=>e.length>=t,maxLength:t=>e=>e.length<=t,email:()=>t=>/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t),emptyOrNull:()=>t=>!t||0===t.length};let i={};function s(t){return new Proxy(t,{get(e,n){if(n in e)return e[n];const o=s(t._clone());return r.hasOwnProperty(n)?o._takeRule(r[n]):i.hasOwnProperty(n)?o._takeRule(i[n]):void 0}})}function u(){return s(new o.default)}u.defineCustomRules=function(t){Object.assign(i,t)},u.clearCustomRules=function(){Object.keys(i).forEach((function(t){delete i[t]}))};const c=u}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(244)})()}));