(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function hc(i,t){const e=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)e[n[r]]=!0;return t?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const ne={},Rs=[],An=()=>{},_m=()=>!1,gm=/^on[^a-z]/,pa=i=>gm.test(i),fc=i=>i.startsWith("onUpdate:"),Te=Object.assign,dc=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},vm=Object.prototype.hasOwnProperty,jt=(i,t)=>vm.call(i,t),Nt=Array.isArray,Cs=i=>ma(i)==="[object Map]",xm=i=>ma(i)==="[object Set]",Vt=i=>typeof i=="function",we=i=>typeof i=="string",pc=i=>typeof i=="symbol",ge=i=>i!==null&&typeof i=="object",Xf=i=>ge(i)&&Vt(i.then)&&Vt(i.catch),Mm=Object.prototype.toString,ma=i=>Mm.call(i),ym=i=>ma(i).slice(8,-1),Sm=i=>ma(i)==="[object Object]",mc=i=>we(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,ko=hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},Em=/-(\w)/g,Kr=_a(i=>i.replace(Em,(t,e)=>e?e.toUpperCase():"")),Tm=/\B([A-Z])/g,as=_a(i=>i.replace(Tm,"-$1").toLowerCase()),Yf=_a(i=>i.charAt(0).toUpperCase()+i.slice(1)),Da=_a(i=>i?`on${Yf(i)}`:""),$o=(i,t)=>!Object.is(i,t),Ua=(i,t)=>{for(let e=0;e<i.length;e++)i[e](t)},Zo=(i,t,e)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value:e})},bm=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let _u;const Cl=()=>_u||(_u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _c(i){if(Nt(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],r=we(n)?Cm(n):_c(n);if(r)for(const s in r)t[s]=r[s]}return t}else{if(we(i))return i;if(ge(i))return i}}const Am=/;(?![^(]*\))/g,wm=/:([^]+)/,Rm=/\/\*[^]*?\*\//g;function Cm(i){const t={};return i.replace(Rm,"").split(Am).forEach(e=>{if(e){const n=e.split(wm);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function gc(i){let t="";if(we(i))t=i;else if(Nt(i))for(let e=0;e<i.length;e++){const n=gc(i[e]);n&&(t+=n+" ")}else if(ge(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const Pm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lm=hc(Pm);function qf(i){return!!i||i===""}let yn;class Dm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=yn,!t&&yn&&(this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=yn;try{return yn=this,t()}finally{yn=e}}}on(){yn=this}off(){yn=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Um(i,t=yn){t&&t.active&&t.effects.push(i)}function Im(){return yn}const vc=i=>{const t=new Set(i);return t.w=0,t.n=0,t},jf=i=>(i.w&Ri)>0,Kf=i=>(i.n&Ri)>0,Om=({deps:i})=>{if(i.length)for(let t=0;t<i.length;t++)i[t].w|=Ri},Nm=i=>{const{deps:t}=i;if(t.length){let e=0;for(let n=0;n<t.length;n++){const r=t[n];jf(r)&&!Kf(r)?r.delete(i):t[e++]=r,r.w&=~Ri,r.n&=~Ri}t.length=e}},Pl=new WeakMap;let Ss=0,Ri=1;const Ll=30;let En;const $i=Symbol(""),Dl=Symbol("");class xc{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Um(this,n)}run(){if(!this.active)return this.fn();let t=En,e=yi;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=En,En=this,yi=!0,Ri=1<<++Ss,Ss<=Ll?Om(this):gu(this),this.fn()}finally{Ss<=Ll&&Nm(this),Ri=1<<--Ss,En=this.parent,yi=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){En===this?this.deferStop=!0:this.active&&(gu(this),this.onStop&&this.onStop(),this.active=!1)}}function gu(i){const{deps:t}=i;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(i);t.length=0}}let yi=!0;const $f=[];function ls(){$f.push(yi),yi=!1}function cs(){const i=$f.pop();yi=i===void 0?!0:i}function Ke(i,t,e){if(yi&&En){let n=Pl.get(i);n||Pl.set(i,n=new Map);let r=n.get(e);r||n.set(e,r=vc()),Zf(r)}}function Zf(i,t){let e=!1;Ss<=Ll?Kf(i)||(i.n|=Ri,e=!jf(i)):e=!i.has(En),e&&(i.add(En),En.deps.push(i))}function ni(i,t,e,n,r,s){const o=Pl.get(i);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(e==="length"&&Nt(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(e!==void 0&&a.push(o.get(e)),t){case"add":Nt(i)?mc(e)&&a.push(o.get("length")):(a.push(o.get($i)),Cs(i)&&a.push(o.get(Dl)));break;case"delete":Nt(i)||(a.push(o.get($i)),Cs(i)&&a.push(o.get(Dl)));break;case"set":Cs(i)&&a.push(o.get($i));break}if(a.length===1)a[0]&&Ul(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ul(vc(l))}}function Ul(i,t){const e=Nt(i)?i:[...i];for(const n of e)n.computed&&vu(n);for(const n of e)n.computed||vu(n)}function vu(i,t){(i!==En||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Fm=hc("__proto__,__v_isRef,__isVue"),Jf=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(pc)),Bm=Mc(),zm=Mc(!1,!0),Hm=Mc(!0),xu=Gm();function Gm(){const i={};return["includes","indexOf","lastIndexOf"].forEach(t=>{i[t]=function(...e){const n=$t(this);for(let s=0,o=this.length;s<o;s++)Ke(n,"get",s+"");const r=n[t](...e);return r===-1||r===!1?n[t](...e.map($t)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{i[t]=function(...e){ls();const n=$t(this)[t].apply(this,e);return cs(),n}}),i}function km(i){const t=$t(this);return Ke(t,"has",i),t.hasOwnProperty(i)}function Mc(i=!1,t=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&s===(i?t?r_:id:t?nd:ed).get(n))return n;const o=Nt(n);if(!i){if(o&&jt(xu,r))return Reflect.get(xu,r,s);if(r==="hasOwnProperty")return km}const a=Reflect.get(n,r,s);return(pc(r)?Jf.has(r):Fm(r))||(i||Ke(n,"get",r),t)?a:Ge(a)?o&&mc(r)?a:a.value:ge(a)?i?rd(a):Ec(a):a}}const Vm=Qf(),Wm=Qf(!0);function Qf(i=!1){return function(e,n,r,s){let o=e[n];if(Hs(o)&&Ge(o)&&!Ge(r))return!1;if(!i&&(!Il(r)&&!Hs(r)&&(o=$t(o),r=$t(r)),!Nt(e)&&Ge(o)&&!Ge(r)))return o.value=r,!0;const a=Nt(e)&&mc(n)?Number(n)<e.length:jt(e,n),l=Reflect.set(e,n,r,s);return e===$t(s)&&(a?$o(r,o)&&ni(e,"set",n,r):ni(e,"add",n,r)),l}}function Xm(i,t){const e=jt(i,t);i[t];const n=Reflect.deleteProperty(i,t);return n&&e&&ni(i,"delete",t,void 0),n}function Ym(i,t){const e=Reflect.has(i,t);return(!pc(t)||!Jf.has(t))&&Ke(i,"has",t),e}function qm(i){return Ke(i,"iterate",Nt(i)?"length":$i),Reflect.ownKeys(i)}const td={get:Bm,set:Vm,deleteProperty:Xm,has:Ym,ownKeys:qm},jm={get:Hm,set(i,t){return!0},deleteProperty(i,t){return!0}},Km=Te({},td,{get:zm,set:Wm}),yc=i=>i,ga=i=>Reflect.getPrototypeOf(i);function ao(i,t,e=!1,n=!1){i=i.__v_raw;const r=$t(i),s=$t(t);e||(t!==s&&Ke(r,"get",t),Ke(r,"get",s));const{has:o}=ga(r),a=n?yc:e?Ac:bc;if(o.call(r,t))return a(i.get(t));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(t)}function lo(i,t=!1){const e=this.__v_raw,n=$t(e),r=$t(i);return t||(i!==r&&Ke(n,"has",i),Ke(n,"has",r)),i===r?e.has(i):e.has(i)||e.has(r)}function co(i,t=!1){return i=i.__v_raw,!t&&Ke($t(i),"iterate",$i),Reflect.get(i,"size",i)}function Mu(i){i=$t(i);const t=$t(this);return ga(t).has.call(t,i)||(t.add(i),ni(t,"add",i,i)),this}function yu(i,t){t=$t(t);const e=$t(this),{has:n,get:r}=ga(e);let s=n.call(e,i);s||(i=$t(i),s=n.call(e,i));const o=r.call(e,i);return e.set(i,t),s?$o(t,o)&&ni(e,"set",i,t):ni(e,"add",i,t),this}function Su(i){const t=$t(this),{has:e,get:n}=ga(t);let r=e.call(t,i);r||(i=$t(i),r=e.call(t,i)),n&&n.call(t,i);const s=t.delete(i);return r&&ni(t,"delete",i,void 0),s}function Eu(){const i=$t(this),t=i.size!==0,e=i.clear();return t&&ni(i,"clear",void 0,void 0),e}function uo(i,t){return function(n,r){const s=this,o=s.__v_raw,a=$t(o),l=t?yc:i?Ac:bc;return!i&&Ke(a,"iterate",$i),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function ho(i,t,e){return function(...n){const r=this.__v_raw,s=$t(r),o=Cs(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=e?yc:t?Ac:bc;return!t&&Ke(s,"iterate",l?Dl:$i),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function li(i){return function(...t){return i==="delete"?!1:this}}function $m(){const i={get(s){return ao(this,s)},get size(){return co(this)},has:lo,add:Mu,set:yu,delete:Su,clear:Eu,forEach:uo(!1,!1)},t={get(s){return ao(this,s,!1,!0)},get size(){return co(this)},has:lo,add:Mu,set:yu,delete:Su,clear:Eu,forEach:uo(!1,!0)},e={get(s){return ao(this,s,!0)},get size(){return co(this,!0)},has(s){return lo.call(this,s,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:uo(!0,!1)},n={get(s){return ao(this,s,!0,!0)},get size(){return co(this,!0)},has(s){return lo.call(this,s,!0)},add:li("add"),set:li("set"),delete:li("delete"),clear:li("clear"),forEach:uo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=ho(s,!1,!1),e[s]=ho(s,!0,!1),t[s]=ho(s,!1,!0),n[s]=ho(s,!0,!0)}),[i,e,t,n]}const[Zm,Jm,Qm,t_]=$m();function Sc(i,t){const e=t?i?t_:Qm:i?Jm:Zm;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(jt(e,r)&&r in n?e:n,r,s)}const e_={get:Sc(!1,!1)},n_={get:Sc(!1,!0)},i_={get:Sc(!0,!1)},ed=new WeakMap,nd=new WeakMap,id=new WeakMap,r_=new WeakMap;function s_(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function o_(i){return i.__v_skip||!Object.isExtensible(i)?0:s_(ym(i))}function Ec(i){return Hs(i)?i:Tc(i,!1,td,e_,ed)}function a_(i){return Tc(i,!1,Km,n_,nd)}function rd(i){return Tc(i,!0,jm,i_,id)}function Tc(i,t,e,n,r){if(!ge(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=o_(i);if(o===0)return i;const a=new Proxy(i,o===2?n:e);return r.set(i,a),a}function kr(i){return Hs(i)?kr(i.__v_raw):!!(i&&i.__v_isReactive)}function Hs(i){return!!(i&&i.__v_isReadonly)}function Il(i){return!!(i&&i.__v_isShallow)}function sd(i){return kr(i)||Hs(i)}function $t(i){const t=i&&i.__v_raw;return t?$t(t):i}function od(i){return Zo(i,"__v_skip",!0),i}const bc=i=>ge(i)?Ec(i):i,Ac=i=>ge(i)?rd(i):i;function l_(i){yi&&En&&(i=$t(i),Zf(i.dep||(i.dep=vc())))}function c_(i,t){i=$t(i);const e=i.dep;e&&Ul(e)}function Ge(i){return!!(i&&i.__v_isRef===!0)}function u_(i){return Ge(i)?i.value:i}const h_={get:(i,t,e)=>u_(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const r=i[t];return Ge(r)&&!Ge(e)?(r.value=e,!0):Reflect.set(i,t,e,n)}};function ad(i){return kr(i)?i:new Proxy(i,h_)}class f_{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new xc(t,()=>{this._dirty||(this._dirty=!0,c_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const t=$t(this);return l_(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function d_(i,t,e=!1){let n,r;const s=Vt(i);return s?(n=i,r=An):(n=i.get,r=i.set),new f_(n,r,s||!r,e)}function Si(i,t,e,n){let r;try{r=n?i(...n):i()}catch(s){va(s,t,e)}return r}function wn(i,t,e,n){if(Vt(i)){const s=Si(i,t,e,n);return s&&Xf(s)&&s.catch(o=>{va(o,t,e)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(wn(i[s],t,e,n));return r}function va(i,t,e,n=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=e;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){Si(l,null,10,[i,o,a]);return}}p_(i,e,r,n)}function p_(i,t,e,n=!0){console.error(i)}let Gs=!1,Ol=!1;const Pe=[];let In=0;const Vr=[];let $n=null,Yi=0;const ld=Promise.resolve();let wc=null;function m_(i){const t=wc||ld;return i?t.then(this?i.bind(this):i):t}function __(i){let t=In+1,e=Pe.length;for(;t<e;){const n=t+e>>>1;ks(Pe[n])<i?t=n+1:e=n}return t}function Rc(i){(!Pe.length||!Pe.includes(i,Gs&&i.allowRecurse?In+1:In))&&(i.id==null?Pe.push(i):Pe.splice(__(i.id),0,i),cd())}function cd(){!Gs&&!Ol&&(Ol=!0,wc=ld.then(hd))}function g_(i){const t=Pe.indexOf(i);t>In&&Pe.splice(t,1)}function v_(i){Nt(i)?Vr.push(...i):(!$n||!$n.includes(i,i.allowRecurse?Yi+1:Yi))&&Vr.push(i),cd()}function Tu(i,t=Gs?In+1:0){for(;t<Pe.length;t++){const e=Pe[t];e&&e.pre&&(Pe.splice(t,1),t--,e())}}function ud(i){if(Vr.length){const t=[...new Set(Vr)];if(Vr.length=0,$n){$n.push(...t);return}for($n=t,$n.sort((e,n)=>ks(e)-ks(n)),Yi=0;Yi<$n.length;Yi++)$n[Yi]();$n=null,Yi=0}}const ks=i=>i.id==null?1/0:i.id,x_=(i,t)=>{const e=ks(i)-ks(t);if(e===0){if(i.pre&&!t.pre)return-1;if(t.pre&&!i.pre)return 1}return e};function hd(i){Ol=!1,Gs=!0,Pe.sort(x_);const t=An;try{for(In=0;In<Pe.length;In++){const e=Pe[In];e&&e.active!==!1&&Si(e,null,14)}}finally{In=0,Pe.length=0,ud(),Gs=!1,wc=null,(Pe.length||Vr.length)&&hd()}}function M_(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||ne;let r=e;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||ne;f&&(r=e.map(p=>we(p)?p.trim():p)),h&&(r=e.map(bm))}let a,l=n[a=Da(t)]||n[a=Da(Kr(t))];!l&&s&&(l=n[a=Da(as(t))]),l&&wn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,wn(c,i,6,r)}}function fd(i,t,e=!1){const n=t.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Vt(i)){const l=c=>{const u=fd(c,t,!0);u&&(a=!0,Te(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(ge(i)&&n.set(i,null),null):(Nt(s)?s.forEach(l=>o[l]=null):Te(o,s),ge(i)&&n.set(i,o),o)}function xa(i,t){return!i||!pa(t)?!1:(t=t.slice(2).replace(/Once$/,""),jt(i,t[0].toLowerCase()+t.slice(1))||jt(i,as(t))||jt(i,t))}let Nn=null,dd=null;function Jo(i){const t=Nn;return Nn=i,dd=i&&i.type.__scopeId||null,t}function y_(i,t=Nn,e){if(!t||i._n)return i;const n=(...r)=>{n._d&&Iu(-1);const s=Jo(t);let o;try{o=i(...r)}finally{Jo(s),n._d&&Iu(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Ia(i){const{type:t,vnode:e,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:_}=i;let m,d;const E=Jo(i);try{if(e.shapeFlag&4){const x=r||n;m=Dn(u.call(x,x,h,s,p,f,g)),d=l}else{const x=t;m=Dn(x.length>1?x(s,{attrs:l,slots:a,emit:c}):x(s,null)),d=t.props?l:S_(l)}}catch(x){va(x,i,1),m=Zi(Vs)}let v=m;if(d&&_!==!1){const x=Object.keys(d),{shapeFlag:T}=v;x.length&&T&7&&(o&&x.some(fc)&&(d=E_(d,o)),v=$r(v,d))}return e.dirs&&(v=$r(v),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition&&(v.transition=e.transition),m=v,Jo(E),m}const S_=i=>{let t;for(const e in i)(e==="class"||e==="style"||pa(e))&&((t||(t={}))[e]=i[e]);return t},E_=(i,t)=>{const e={};for(const n in i)(!fc(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function T_(i,t,e){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?bu(n,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!xa(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?bu(n,o,c):!0:!!o;return!1}function bu(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(t[s]!==i[s]&&!xa(e,s))return!0}return!1}function b_({vnode:i,parent:t},e){for(;t&&t.subTree===i;)(i=t.vnode).el=e,t=t.parent}const A_=i=>i.__isSuspense;function w_(i,t){t&&t.pendingBranch?Nt(i)?t.effects.push(...i):t.effects.push(i):v_(i)}const fo={};function Oa(i,t,e){return pd(i,t,e)}function pd(i,t,{immediate:e,deep:n,flush:r,onTrack:s,onTrigger:o}=ne){var a;const l=Im()===((a=Le)==null?void 0:a.scope)?Le:null;let c,u=!1,h=!1;if(Ge(i)?(c=()=>i.value,u=Il(i)):kr(i)?(c=()=>i,n=!0):Nt(i)?(h=!0,u=i.some(x=>kr(x)||Il(x)),c=()=>i.map(x=>{if(Ge(x))return x.value;if(kr(x))return Fr(x);if(Vt(x))return Si(x,l,2)})):Vt(i)?t?c=()=>Si(i,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),wn(i,l,3,[p])}:c=An,t&&n){const x=c;c=()=>Fr(x())}let f,p=x=>{f=E.onStop=()=>{Si(x,l,4)}},g;if(Ws)if(p=An,t?e&&wn(t,l,3,[c(),h?[]:void 0,p]):c(),r==="sync"){const x=Sg();g=x.__watcherHandles||(x.__watcherHandles=[])}else return An;let _=h?new Array(i.length).fill(fo):fo;const m=()=>{if(E.active)if(t){const x=E.run();(n||u||(h?x.some((T,w)=>$o(T,_[w])):$o(x,_)))&&(f&&f(),wn(t,l,3,[x,_===fo?void 0:h&&_[0]===fo?[]:_,p]),_=x)}else E.run()};m.allowRecurse=!!t;let d;r==="sync"?d=m:r==="post"?d=()=>Ve(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),d=()=>Rc(m));const E=new xc(c,d);t?e?m():_=E.run():r==="post"?Ve(E.run.bind(E),l&&l.suspense):E.run();const v=()=>{E.stop(),l&&l.scope&&dc(l.scope.effects,E)};return g&&g.push(v),v}function R_(i,t,e){const n=this.proxy,r=we(i)?i.includes(".")?md(n,i):()=>n[i]:i.bind(n,n);let s;Vt(t)?s=t:(s=t.handler,e=t);const o=Le;Zr(this);const a=pd(r,s.bind(n),e);return o?Zr(o):Ji(),a}function md(i,t){const e=t.split(".");return()=>{let n=i;for(let r=0;r<e.length&&n;r++)n=n[e[r]];return n}}function Fr(i,t){if(!ge(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),Ge(i))Fr(i.value,t);else if(Nt(i))for(let e=0;e<i.length;e++)Fr(i[e],t);else if(xm(i)||Cs(i))i.forEach(e=>{Fr(e,t)});else if(Sm(i))for(const e in i)Fr(i[e],t);return i}function Ni(i,t,e,n){const r=i.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(ls(),wn(l,e,8,[i.el,a,i,t]),cs())}}function C_(i,t){return Vt(i)?(()=>Te({name:i.name},t,{setup:i}))():i}const Vo=i=>!!i.type.__asyncLoader,_d=i=>i.type.__isKeepAlive;function P_(i,t){gd(i,"a",t)}function L_(i,t){gd(i,"da",t)}function gd(i,t,e=Le){const n=i.__wdc||(i.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Ma(t,n,e),e){let r=e.parent;for(;r&&r.parent;)_d(r.parent.vnode)&&D_(n,t,e,r),r=r.parent}}function D_(i,t,e,n){const r=Ma(t,i,n,!0);xd(()=>{dc(n[t],r)},e)}function Ma(i,t,e=Le,n=!1){if(e){const r=e[i]||(e[i]=[]),s=t.__weh||(t.__weh=(...o)=>{if(e.isUnmounted)return;ls(),Zr(e);const a=wn(t,e,i,o);return Ji(),cs(),a});return n?r.unshift(s):r.push(s),s}}const si=i=>(t,e=Le)=>(!Ws||i==="sp")&&Ma(i,(...n)=>t(...n),e),U_=si("bm"),vd=si("m"),I_=si("bu"),O_=si("u"),N_=si("bum"),xd=si("um"),F_=si("sp"),B_=si("rtg"),z_=si("rtc");function H_(i,t=Le){Ma("ec",i,t)}const G_=Symbol.for("v-ndc"),Nl=i=>i?Cd(i)?Ic(i)||i.proxy:Nl(i.parent):null,Ps=Te(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Nl(i.parent),$root:i=>Nl(i.root),$emit:i=>i.emit,$options:i=>Cc(i),$forceUpdate:i=>i.f||(i.f=()=>Rc(i.update)),$nextTick:i=>i.n||(i.n=m_.bind(i.proxy)),$watch:i=>R_.bind(i)}),Na=(i,t)=>i!==ne&&!i.__isScriptSetup&&jt(i,t),k_={get({_:i},t){const{ctx:e,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return n[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Na(n,t))return o[t]=1,n[t];if(r!==ne&&jt(r,t))return o[t]=2,r[t];if((c=i.propsOptions[0])&&jt(c,t))return o[t]=3,s[t];if(e!==ne&&jt(e,t))return o[t]=4,e[t];Fl&&(o[t]=0)}}const u=Ps[t];let h,f;if(u)return t==="$attrs"&&Ke(i,"get",t),u(i);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==ne&&jt(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,jt(f,t))return f[t]},set({_:i},t,e){const{data:n,setupState:r,ctx:s}=i;return Na(r,t)?(r[t]=e,!0):n!==ne&&jt(n,t)?(n[t]=e,!0):jt(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(s[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!e[o]||i!==ne&&jt(i,o)||Na(t,o)||(a=s[0])&&jt(a,o)||jt(n,o)||jt(Ps,o)||jt(r.config.globalProperties,o)},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:jt(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function Au(i){return Nt(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let Fl=!0;function V_(i){const t=Cc(i),e=i.proxy,n=i.ctx;Fl=!1,t.beforeCreate&&wu(t.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:E,destroyed:v,unmounted:x,render:T,renderTracked:w,renderTriggered:b,errorCaptured:L,serverPrefetch:M,expose:R,inheritAttrs:$,components:J,directives:F,filters:k}=t;if(c&&W_(c,n,null),o)for(const B in o){const G=o[B];Vt(G)&&(n[B]=G.bind(e))}if(r){const B=r.call(e,e);ge(B)&&(i.data=Ec(B))}if(Fl=!0,s)for(const B in s){const G=s[B],ht=Vt(G)?G.bind(e,e):Vt(G.get)?G.get.bind(e,e):An,rt=!Vt(G)&&Vt(G.set)?G.set.bind(e):An,V=Mg({get:ht,set:rt});Object.defineProperty(n,B,{enumerable:!0,configurable:!0,get:()=>V.value,set:Y=>V.value=Y})}if(a)for(const B in a)Md(a[B],n,e,B);if(l){const B=Vt(l)?l.call(e):l;Reflect.ownKeys(B).forEach(G=>{$_(G,B[G])})}u&&wu(u,i,"c");function Z(B,G){Nt(G)?G.forEach(ht=>B(ht.bind(e))):G&&B(G.bind(e))}if(Z(U_,h),Z(vd,f),Z(I_,p),Z(O_,g),Z(P_,_),Z(L_,m),Z(H_,L),Z(z_,w),Z(B_,b),Z(N_,E),Z(xd,x),Z(F_,M),Nt(R))if(R.length){const B=i.exposed||(i.exposed={});R.forEach(G=>{Object.defineProperty(B,G,{get:()=>e[G],set:ht=>e[G]=ht})})}else i.exposed||(i.exposed={});T&&i.render===An&&(i.render=T),$!=null&&(i.inheritAttrs=$),J&&(i.components=J),F&&(i.directives=F)}function W_(i,t,e=An){Nt(i)&&(i=Bl(i));for(const n in i){const r=i[n];let s;ge(r)?"default"in r?s=Wo(r.from||n,r.default,!0):s=Wo(r.from||n):s=Wo(r),Ge(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[n]=s}}function wu(i,t,e){wn(Nt(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function Md(i,t,e,n){const r=n.includes(".")?md(e,n):()=>e[n];if(we(i)){const s=t[i];Vt(s)&&Oa(r,s)}else if(Vt(i))Oa(r,i.bind(e));else if(ge(i))if(Nt(i))i.forEach(s=>Md(s,t,e,n));else{const s=Vt(i.handler)?i.handler.bind(e):t[i.handler];Vt(s)&&Oa(r,s,i)}}function Cc(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!n?l=t:(l={},r.length&&r.forEach(c=>Qo(l,c,o,!0)),Qo(l,t,o)),ge(t)&&s.set(t,l),l}function Qo(i,t,e,n=!1){const{mixins:r,extends:s}=t;s&&Qo(i,s,e,!0),r&&r.forEach(o=>Qo(i,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=X_[o]||e&&e[o];i[o]=a?a(i[o],t[o]):t[o]}return i}const X_={data:Ru,props:Cu,emits:Cu,methods:Es,computed:Es,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:Es,directives:Es,watch:q_,provide:Ru,inject:Y_};function Ru(i,t){return t?i?function(){return Te(Vt(i)?i.call(this,this):i,Vt(t)?t.call(this,this):t)}:t:i}function Y_(i,t){return Es(Bl(i),Bl(t))}function Bl(i){if(Nt(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function Fe(i,t){return i?[...new Set([].concat(i,t))]:t}function Es(i,t){return i?Te(Object.create(null),i,t):t}function Cu(i,t){return i?Nt(i)&&Nt(t)?[...new Set([...i,...t])]:Te(Object.create(null),Au(i),Au(t??{})):t}function q_(i,t){if(!i)return t;if(!t)return i;const e=Te(Object.create(null),i);for(const n in t)e[n]=Fe(i[n],t[n]);return e}function yd(){return{app:null,config:{isNativeTag:_m,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let j_=0;function K_(i,t){return function(n,r=null){Vt(n)||(n=Te({},n)),r!=null&&!ge(r)&&(r=null);const s=yd(),o=new Set;let a=!1;const l=s.app={_uid:j_++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Eg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Vt(c.install)?(o.add(c),c.install(l,...u)):Vt(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Zi(n,r);return f.appContext=s,u&&t?t(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Ic(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){ta=l;try{return c()}finally{ta=null}}};return l}}let ta=null;function $_(i,t){if(Le){let e=Le.provides;const n=Le.parent&&Le.parent.provides;n===e&&(e=Le.provides=Object.create(n)),e[i]=t}}function Wo(i,t,e=!1){const n=Le||Nn;if(n||ta){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:ta._context.provides;if(r&&i in r)return r[i];if(arguments.length>1)return e&&Vt(t)?t.call(n&&n.proxy):t}}function Z_(i,t,e,n=!1){const r={},s={};Zo(s,Sa,1),i.propsDefaults=Object.create(null),Sd(i,t,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);e?i.props=n?r:a_(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function J_(i,t,e,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=$t(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(xa(i.emitsOptions,f))continue;const p=t[f];if(l)if(jt(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=Kr(f);r[g]=zl(l,a,g,p,i,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Sd(i,t,r,s)&&(c=!0);let u;for(const h in a)(!t||!jt(t,h)&&((u=as(h))===h||!jt(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(r[h]=zl(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!jt(t,h))&&(delete s[h],c=!0)}c&&ni(i,"set","$attrs")}function Sd(i,t,e,n){const[r,s]=i.propsOptions;let o=!1,a;if(t)for(let l in t){if(ko(l))continue;const c=t[l];let u;r&&jt(r,u=Kr(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:xa(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=$t(e),c=a||ne;for(let u=0;u<s.length;u++){const h=s[u];e[h]=zl(r,l,h,c[h],i,!jt(c,h))}}return o}function zl(i,t,e,n,r,s){const o=i[e];if(o!=null){const a=jt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Vt(l)){const{propsDefaults:c}=r;e in c?n=c[e]:(Zr(r),n=c[e]=l.call(null,t),Ji())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===as(e))&&(n=!0))}return n}function Ed(i,t,e=!1){const n=t.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Vt(i)){const u=h=>{l=!0;const[f,p]=Ed(h,t,!0);Te(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return ge(i)&&n.set(i,Rs),Rs;if(Nt(s))for(let u=0;u<s.length;u++){const h=Kr(s[u]);Pu(h)&&(o[h]=ne)}else if(s)for(const u in s){const h=Kr(u);if(Pu(h)){const f=s[u],p=o[h]=Nt(f)||Vt(f)?{type:f}:Te({},f);if(p){const g=Uu(Boolean,p.type),_=Uu(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||jt(p,"default"))&&a.push(h)}}}const c=[o,a];return ge(i)&&n.set(i,c),c}function Pu(i){return i[0]!=="$"}function Lu(i){const t=i&&i.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:i===null?"null":""}function Du(i,t){return Lu(i)===Lu(t)}function Uu(i,t){return Nt(t)?t.findIndex(e=>Du(e,i)):Vt(t)&&Du(t,i)?0:-1}const Td=i=>i[0]==="_"||i==="$stable",Pc=i=>Nt(i)?i.map(Dn):[Dn(i)],Q_=(i,t,e)=>{if(t._n)return t;const n=y_((...r)=>Pc(t(...r)),e);return n._c=!1,n},bd=(i,t,e)=>{const n=i._ctx;for(const r in i){if(Td(r))continue;const s=i[r];if(Vt(s))t[r]=Q_(r,s,n);else if(s!=null){const o=Pc(s);t[r]=()=>o}}},Ad=(i,t)=>{const e=Pc(t);i.slots.default=()=>e},tg=(i,t)=>{if(i.vnode.shapeFlag&32){const e=t._;e?(i.slots=$t(t),Zo(t,"_",e)):bd(t,i.slots={})}else i.slots={},t&&Ad(i,t);Zo(i.slots,Sa,1)},eg=(i,t,e)=>{const{vnode:n,slots:r}=i;let s=!0,o=ne;if(n.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:(Te(r,t),!e&&a===1&&delete r._):(s=!t.$stable,bd(t,r)),o=t}else t&&(Ad(i,t),o={default:1});if(s)for(const a in r)!Td(a)&&!(a in o)&&delete r[a]};function Hl(i,t,e,n,r=!1){if(Nt(i)){i.forEach((f,p)=>Hl(f,t&&(Nt(t)?t[p]:t),e,n,r));return}if(Vo(n)&&!r)return;const s=n.shapeFlag&4?Ic(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=t&&t.r,u=a.refs===ne?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(we(c)?(u[c]=null,jt(h,c)&&(h[c]=null)):Ge(c)&&(c.value=null)),Vt(l))Si(l,a,12,[o,u]);else{const f=we(l),p=Ge(l);if(f||p){const g=()=>{if(i.f){const _=f?jt(h,l)?h[l]:u[l]:l.value;r?Nt(_)&&dc(_,s):Nt(_)?_.includes(s)||_.push(s):f?(u[l]=[s],jt(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,jt(h,l)&&(h[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Ve(g,e)):g()}}}const Ve=w_;function ng(i){return ig(i)}function ig(i,t){const e=Cl();e.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=An,insertStaticContent:g}=i,_=(y,D,N,q=null,X=null,ut=null,ct=!1,Q=null,lt=!!D.dynamicChildren)=>{if(y===D)return;y&&!ps(y,D)&&(q=Pt(y),Y(y,X,ut,!0),y=null),D.patchFlag===-2&&(lt=!1,D.dynamicChildren=null);const{type:ot,ref:Tt,shapeFlag:A}=D;switch(ot){case ya:m(y,D,N,q);break;case Vs:d(y,D,N,q);break;case Fa:y==null&&E(D,N,q,ct);break;case Jn:J(y,D,N,q,X,ut,ct,Q,lt);break;default:A&1?T(y,D,N,q,X,ut,ct,Q,lt):A&6?F(y,D,N,q,X,ut,ct,Q,lt):(A&64||A&128)&&ot.process(y,D,N,q,X,ut,ct,Q,lt,Ht)}Tt!=null&&X&&Hl(Tt,y&&y.ref,ut,D||y,!D)},m=(y,D,N,q)=>{if(y==null)n(D.el=a(D.children),N,q);else{const X=D.el=y.el;D.children!==y.children&&c(X,D.children)}},d=(y,D,N,q)=>{y==null?n(D.el=l(D.children||""),N,q):D.el=y.el},E=(y,D,N,q)=>{[y.el,y.anchor]=g(y.children,D,N,q,y.el,y.anchor)},v=({el:y,anchor:D},N,q)=>{let X;for(;y&&y!==D;)X=f(y),n(y,N,q),y=X;n(D,N,q)},x=({el:y,anchor:D})=>{let N;for(;y&&y!==D;)N=f(y),r(y),y=N;r(D)},T=(y,D,N,q,X,ut,ct,Q,lt)=>{ct=ct||D.type==="svg",y==null?w(D,N,q,X,ut,ct,Q,lt):M(y,D,X,ut,ct,Q,lt)},w=(y,D,N,q,X,ut,ct,Q)=>{let lt,ot;const{type:Tt,props:A,shapeFlag:S,transition:O,dirs:nt}=y;if(lt=y.el=o(y.type,ut,A&&A.is,A),S&8?u(lt,y.children):S&16&&L(y.children,lt,null,q,X,ut&&Tt!=="foreignObject",ct,Q),nt&&Ni(y,null,q,"created"),b(lt,y,y.scopeId,ct,q),A){for(const st in A)st!=="value"&&!ko(st)&&s(lt,st,null,A[st],ut,y.children,q,X,At);"value"in A&&s(lt,"value",null,A.value),(ot=A.onVnodeBeforeMount)&&Ln(ot,q,y)}nt&&Ni(y,null,q,"beforeMount");const it=(!X||X&&!X.pendingBranch)&&O&&!O.persisted;it&&O.beforeEnter(lt),n(lt,D,N),((ot=A&&A.onVnodeMounted)||it||nt)&&Ve(()=>{ot&&Ln(ot,q,y),it&&O.enter(lt),nt&&Ni(y,null,q,"mounted")},X)},b=(y,D,N,q,X)=>{if(N&&p(y,N),q)for(let ut=0;ut<q.length;ut++)p(y,q[ut]);if(X){let ut=X.subTree;if(D===ut){const ct=X.vnode;b(y,ct,ct.scopeId,ct.slotScopeIds,X.parent)}}},L=(y,D,N,q,X,ut,ct,Q,lt=0)=>{for(let ot=lt;ot<y.length;ot++){const Tt=y[ot]=Q?pi(y[ot]):Dn(y[ot]);_(null,Tt,D,N,q,X,ut,ct,Q)}},M=(y,D,N,q,X,ut,ct)=>{const Q=D.el=y.el;let{patchFlag:lt,dynamicChildren:ot,dirs:Tt}=D;lt|=y.patchFlag&16;const A=y.props||ne,S=D.props||ne;let O;N&&Fi(N,!1),(O=S.onVnodeBeforeUpdate)&&Ln(O,N,D,y),Tt&&Ni(D,y,N,"beforeUpdate"),N&&Fi(N,!0);const nt=X&&D.type!=="foreignObject";if(ot?R(y.dynamicChildren,ot,Q,N,q,nt,ut):ct||G(y,D,Q,null,N,q,nt,ut,!1),lt>0){if(lt&16)$(Q,D,A,S,N,q,X);else if(lt&2&&A.class!==S.class&&s(Q,"class",null,S.class,X),lt&4&&s(Q,"style",A.style,S.style,X),lt&8){const it=D.dynamicProps;for(let st=0;st<it.length;st++){const xt=it[st],ft=A[xt],j=S[xt];(j!==ft||xt==="value")&&s(Q,xt,ft,j,X,y.children,N,q,At)}}lt&1&&y.children!==D.children&&u(Q,D.children)}else!ct&&ot==null&&$(Q,D,A,S,N,q,X);((O=S.onVnodeUpdated)||Tt)&&Ve(()=>{O&&Ln(O,N,D,y),Tt&&Ni(D,y,N,"updated")},q)},R=(y,D,N,q,X,ut,ct)=>{for(let Q=0;Q<D.length;Q++){const lt=y[Q],ot=D[Q],Tt=lt.el&&(lt.type===Jn||!ps(lt,ot)||lt.shapeFlag&70)?h(lt.el):N;_(lt,ot,Tt,null,q,X,ut,ct,!0)}},$=(y,D,N,q,X,ut,ct)=>{if(N!==q){if(N!==ne)for(const Q in N)!ko(Q)&&!(Q in q)&&s(y,Q,N[Q],null,ct,D.children,X,ut,At);for(const Q in q){if(ko(Q))continue;const lt=q[Q],ot=N[Q];lt!==ot&&Q!=="value"&&s(y,Q,ot,lt,ct,D.children,X,ut,At)}"value"in q&&s(y,"value",N.value,q.value)}},J=(y,D,N,q,X,ut,ct,Q,lt)=>{const ot=D.el=y?y.el:a(""),Tt=D.anchor=y?y.anchor:a("");let{patchFlag:A,dynamicChildren:S,slotScopeIds:O}=D;O&&(Q=Q?Q.concat(O):O),y==null?(n(ot,N,q),n(Tt,N,q),L(D.children,N,Tt,X,ut,ct,Q,lt)):A>0&&A&64&&S&&y.dynamicChildren?(R(y.dynamicChildren,S,N,X,ut,ct,Q),(D.key!=null||X&&D===X.subTree)&&wd(y,D,!0)):G(y,D,N,Tt,X,ut,ct,Q,lt)},F=(y,D,N,q,X,ut,ct,Q,lt)=>{D.slotScopeIds=Q,y==null?D.shapeFlag&512?X.ctx.activate(D,N,q,ct,lt):k(D,N,q,X,ut,ct,lt):H(y,D,lt)},k=(y,D,N,q,X,ut,ct)=>{const Q=y.component=pg(y,q,X);if(_d(y)&&(Q.ctx.renderer=Ht),mg(Q),Q.asyncDep){if(X&&X.registerDep(Q,Z),!y.el){const lt=Q.subTree=Zi(Vs);d(null,lt,D,N)}return}Z(Q,y,D,N,X,ut,ct)},H=(y,D,N)=>{const q=D.component=y.component;if(T_(y,D,N))if(q.asyncDep&&!q.asyncResolved){B(q,D,N);return}else q.next=D,g_(q.update),q.update();else D.el=y.el,q.vnode=D},Z=(y,D,N,q,X,ut,ct)=>{const Q=()=>{if(y.isMounted){let{next:Tt,bu:A,u:S,parent:O,vnode:nt}=y,it=Tt,st;Fi(y,!1),Tt?(Tt.el=nt.el,B(y,Tt,ct)):Tt=nt,A&&Ua(A),(st=Tt.props&&Tt.props.onVnodeBeforeUpdate)&&Ln(st,O,Tt,nt),Fi(y,!0);const xt=Ia(y),ft=y.subTree;y.subTree=xt,_(ft,xt,h(ft.el),Pt(ft),y,X,ut),Tt.el=xt.el,it===null&&b_(y,xt.el),S&&Ve(S,X),(st=Tt.props&&Tt.props.onVnodeUpdated)&&Ve(()=>Ln(st,O,Tt,nt),X)}else{let Tt;const{el:A,props:S}=D,{bm:O,m:nt,parent:it}=y,st=Vo(D);if(Fi(y,!1),O&&Ua(O),!st&&(Tt=S&&S.onVnodeBeforeMount)&&Ln(Tt,it,D),Fi(y,!0),A&&Ot){const xt=()=>{y.subTree=Ia(y),Ot(A,y.subTree,y,X,null)};st?D.type.__asyncLoader().then(()=>!y.isUnmounted&&xt()):xt()}else{const xt=y.subTree=Ia(y);_(null,xt,N,q,y,X,ut),D.el=xt.el}if(nt&&Ve(nt,X),!st&&(Tt=S&&S.onVnodeMounted)){const xt=D;Ve(()=>Ln(Tt,it,xt),X)}(D.shapeFlag&256||it&&Vo(it.vnode)&&it.vnode.shapeFlag&256)&&y.a&&Ve(y.a,X),y.isMounted=!0,D=N=q=null}},lt=y.effect=new xc(Q,()=>Rc(ot),y.scope),ot=y.update=()=>lt.run();ot.id=y.uid,Fi(y,!0),ot()},B=(y,D,N)=>{D.component=y;const q=y.vnode.props;y.vnode=D,y.next=null,J_(y,D.props,q,N),eg(y,D.children,N),ls(),Tu(),cs()},G=(y,D,N,q,X,ut,ct,Q,lt=!1)=>{const ot=y&&y.children,Tt=y?y.shapeFlag:0,A=D.children,{patchFlag:S,shapeFlag:O}=D;if(S>0){if(S&128){rt(ot,A,N,q,X,ut,ct,Q,lt);return}else if(S&256){ht(ot,A,N,q,X,ut,ct,Q,lt);return}}O&8?(Tt&16&&At(ot,X,ut),A!==ot&&u(N,A)):Tt&16?O&16?rt(ot,A,N,q,X,ut,ct,Q,lt):At(ot,X,ut,!0):(Tt&8&&u(N,""),O&16&&L(A,N,q,X,ut,ct,Q,lt))},ht=(y,D,N,q,X,ut,ct,Q,lt)=>{y=y||Rs,D=D||Rs;const ot=y.length,Tt=D.length,A=Math.min(ot,Tt);let S;for(S=0;S<A;S++){const O=D[S]=lt?pi(D[S]):Dn(D[S]);_(y[S],O,N,null,X,ut,ct,Q,lt)}ot>Tt?At(y,X,ut,!0,!1,A):L(D,N,q,X,ut,ct,Q,lt,A)},rt=(y,D,N,q,X,ut,ct,Q,lt)=>{let ot=0;const Tt=D.length;let A=y.length-1,S=Tt-1;for(;ot<=A&&ot<=S;){const O=y[ot],nt=D[ot]=lt?pi(D[ot]):Dn(D[ot]);if(ps(O,nt))_(O,nt,N,null,X,ut,ct,Q,lt);else break;ot++}for(;ot<=A&&ot<=S;){const O=y[A],nt=D[S]=lt?pi(D[S]):Dn(D[S]);if(ps(O,nt))_(O,nt,N,null,X,ut,ct,Q,lt);else break;A--,S--}if(ot>A){if(ot<=S){const O=S+1,nt=O<Tt?D[O].el:q;for(;ot<=S;)_(null,D[ot]=lt?pi(D[ot]):Dn(D[ot]),N,nt,X,ut,ct,Q,lt),ot++}}else if(ot>S)for(;ot<=A;)Y(y[ot],X,ut,!0),ot++;else{const O=ot,nt=ot,it=new Map;for(ot=nt;ot<=S;ot++){const dt=D[ot]=lt?pi(D[ot]):Dn(D[ot]);dt.key!=null&&it.set(dt.key,ot)}let st,xt=0;const ft=S-nt+1;let j=!1,P=0;const at=new Array(ft);for(ot=0;ot<ft;ot++)at[ot]=0;for(ot=O;ot<=A;ot++){const dt=y[ot];if(xt>=ft){Y(dt,X,ut,!0);continue}let mt;if(dt.key!=null)mt=it.get(dt.key);else for(st=nt;st<=S;st++)if(at[st-nt]===0&&ps(dt,D[st])){mt=st;break}mt===void 0?Y(dt,X,ut,!0):(at[mt-nt]=ot+1,mt>=P?P=mt:j=!0,_(dt,D[mt],N,null,X,ut,ct,Q,lt),xt++)}const yt=j?rg(at):Rs;for(st=yt.length-1,ot=ft-1;ot>=0;ot--){const dt=nt+ot,mt=D[dt],Lt=dt+1<Tt?D[dt+1].el:q;at[ot]===0?_(null,mt,N,Lt,X,ut,ct,Q,lt):j&&(st<0||ot!==yt[st]?V(mt,N,Lt,2):st--)}}},V=(y,D,N,q,X=null)=>{const{el:ut,type:ct,transition:Q,children:lt,shapeFlag:ot}=y;if(ot&6){V(y.component.subTree,D,N,q);return}if(ot&128){y.suspense.move(D,N,q);return}if(ot&64){ct.move(y,D,N,Ht);return}if(ct===Jn){n(ut,D,N);for(let A=0;A<lt.length;A++)V(lt[A],D,N,q);n(y.anchor,D,N);return}if(ct===Fa){v(y,D,N);return}if(q!==2&&ot&1&&Q)if(q===0)Q.beforeEnter(ut),n(ut,D,N),Ve(()=>Q.enter(ut),X);else{const{leave:A,delayLeave:S,afterLeave:O}=Q,nt=()=>n(ut,D,N),it=()=>{A(ut,()=>{nt(),O&&O()})};S?S(ut,nt,it):it()}else n(ut,D,N)},Y=(y,D,N,q=!1,X=!1)=>{const{type:ut,props:ct,ref:Q,children:lt,dynamicChildren:ot,shapeFlag:Tt,patchFlag:A,dirs:S}=y;if(Q!=null&&Hl(Q,null,N,y,!0),Tt&256){D.ctx.deactivate(y);return}const O=Tt&1&&S,nt=!Vo(y);let it;if(nt&&(it=ct&&ct.onVnodeBeforeUnmount)&&Ln(it,D,y),Tt&6)vt(y.component,N,q);else{if(Tt&128){y.suspense.unmount(N,q);return}O&&Ni(y,null,D,"beforeUnmount"),Tt&64?y.type.remove(y,D,N,X,Ht,q):ot&&(ut!==Jn||A>0&&A&64)?At(ot,D,N,!1,!0):(ut===Jn&&A&384||!X&&Tt&16)&&At(lt,D,N),q&&gt(y)}(nt&&(it=ct&&ct.onVnodeUnmounted)||O)&&Ve(()=>{it&&Ln(it,D,y),O&&Ni(y,null,D,"unmounted")},N)},gt=y=>{const{type:D,el:N,anchor:q,transition:X}=y;if(D===Jn){_t(N,q);return}if(D===Fa){x(y);return}const ut=()=>{r(N),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(y.shapeFlag&1&&X&&!X.persisted){const{leave:ct,delayLeave:Q}=X,lt=()=>ct(N,ut);Q?Q(y.el,ut,lt):lt()}else ut()},_t=(y,D)=>{let N;for(;y!==D;)N=f(y),r(y),y=N;r(D)},vt=(y,D,N)=>{const{bum:q,scope:X,update:ut,subTree:ct,um:Q}=y;q&&Ua(q),X.stop(),ut&&(ut.active=!1,Y(ct,y,D,N)),Q&&Ve(Q,D),Ve(()=>{y.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},At=(y,D,N,q=!1,X=!1,ut=0)=>{for(let ct=ut;ct<y.length;ct++)Y(y[ct],D,N,q,X)},Pt=y=>y.shapeFlag&6?Pt(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),Rt=(y,D,N)=>{y==null?D._vnode&&Y(D._vnode,null,null,!0):_(D._vnode||null,y,D,null,null,null,N),Tu(),ud(),D._vnode=y},Ht={p:_,um:Y,m:V,r:gt,mt:k,mc:L,pc:G,pbc:R,n:Pt,o:i};let ce,Ot;return t&&([ce,Ot]=t(Ht)),{render:Rt,hydrate:ce,createApp:K_(Rt,ce)}}function Fi({effect:i,update:t},e){i.allowRecurse=t.allowRecurse=e}function wd(i,t,e=!1){const n=i.children,r=t.children;if(Nt(n)&&Nt(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=pi(r[s]),a.el=o.el),e||wd(o,a)),a.type===ya&&(a.el=o.el)}}function rg(i){const t=i.slice(),e=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=e[e.length-1],i[r]<c){t[n]=r,e.push(n);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,i[e[a]]<c?s=a+1:o=a;c<i[e[s]]&&(s>0&&(t[n]=e[s-1]),e[s]=n)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}const sg=i=>i.__isTeleport,Jn=Symbol.for("v-fgt"),ya=Symbol.for("v-txt"),Vs=Symbol.for("v-cmt"),Fa=Symbol.for("v-stc");let Br=null,Lc=1;function Iu(i){Lc+=i}function og(i){return i?i.__v_isVNode===!0:!1}function ps(i,t){return i.type===t.type&&i.key===t.key}const Sa="__vInternal",Rd=({key:i})=>i??null,Xo=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?we(i)||Ge(i)||Vt(i)?{i:Nn,r:i,k:t,f:!!e}:i:null);function ag(i,t=null,e=null,n=0,r=null,s=i===Jn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&Rd(t),ref:t&&Xo(t),scopeId:dd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Nn};return a?(Dc(l,e),s&128&&i.normalize(l)):e&&(l.shapeFlag|=we(e)?8:16),Lc>0&&!o&&Br&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Br.push(l),l}const Zi=lg;function lg(i,t=null,e=null,n=0,r=null,s=!1){if((!i||i===G_)&&(i=Vs),og(i)){const a=$r(i,t,!0);return e&&Dc(a,e),Lc>0&&!s&&Br&&(a.shapeFlag&6?Br[Br.indexOf(i)]=a:Br.push(a)),a.patchFlag|=-2,a}if(xg(i)&&(i=i.__vccOpts),t){t=cg(t);let{class:a,style:l}=t;a&&!we(a)&&(t.class=gc(a)),ge(l)&&(sd(l)&&!Nt(l)&&(l=Te({},l)),t.style=_c(l))}const o=we(i)?1:A_(i)?128:sg(i)?64:ge(i)?4:Vt(i)?2:0;return ag(i,t,e,n,r,o,s,!0)}function cg(i){return i?sd(i)||Sa in i?Te({},i):i:null}function $r(i,t,e=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=t?hg(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Rd(a),ref:t&&t.ref?e&&r?Nt(r)?r.concat(Xo(t)):[r,Xo(t)]:Xo(t):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==Jn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&$r(i.ssContent),ssFallback:i.ssFallback&&$r(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function ug(i=" ",t=0){return Zi(ya,null,i,t)}function Dn(i){return i==null||typeof i=="boolean"?Zi(Vs):Nt(i)?Zi(Jn,null,i.slice()):typeof i=="object"?pi(i):Zi(ya,null,String(i))}function pi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:$r(i)}function Dc(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(Nt(t))e=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),Dc(i,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!(Sa in t)?t._ctx=Nn:r===3&&Nn&&(Nn.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else Vt(t)?(t={default:t,_ctx:Nn},e=32):(t=String(t),n&64?(e=16,t=[ug(t)]):e=8);i.children=t,i.shapeFlag|=e}function hg(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=gc([t.class,n.class]));else if(r==="style")t.style=_c([t.style,n.style]);else if(pa(r)){const s=t[r],o=n[r];o&&s!==o&&!(Nt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=n[r])}return t}function Ln(i,t,e,n=null){wn(i,t,7,[e,n])}const fg=yd();let dg=0;function pg(i,t,e){const n=i.type,r=(t?t.appContext:i.appContext)||fg,s={uid:dg++,vnode:i,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ed(n,r),emitsOptions:fd(n,r),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:n.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=M_.bind(null,s),i.ce&&i.ce(s),s}let Le=null,Uc,dr,Ou="__VUE_INSTANCE_SETTERS__";(dr=Cl()[Ou])||(dr=Cl()[Ou]=[]),dr.push(i=>Le=i),Uc=i=>{dr.length>1?dr.forEach(t=>t(i)):dr[0](i)};const Zr=i=>{Uc(i),i.scope.on()},Ji=()=>{Le&&Le.scope.off(),Uc(null)};function Cd(i){return i.vnode.shapeFlag&4}let Ws=!1;function mg(i,t=!1){Ws=t;const{props:e,children:n}=i.vnode,r=Cd(i);Z_(i,e,r,t),tg(i,n);const s=r?_g(i,t):void 0;return Ws=!1,s}function _g(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=od(new Proxy(i.ctx,k_));const{setup:n}=e;if(n){const r=i.setupContext=n.length>1?vg(i):null;Zr(i),ls();const s=Si(n,i,0,[i.props,r]);if(cs(),Ji(),Xf(s)){if(s.then(Ji,Ji),t)return s.then(o=>{Nu(i,o,t)}).catch(o=>{va(o,i,0)});i.asyncDep=s}else Nu(i,s,t)}else Pd(i,t)}function Nu(i,t,e){Vt(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:ge(t)&&(i.setupState=ad(t)),Pd(i,e)}let Fu;function Pd(i,t,e){const n=i.type;if(!i.render){if(!t&&Fu&&!n.render){const r=n.template||Cc(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Te(Te({isCustomElement:s,delimiters:a},o),l);n.render=Fu(r,c)}}i.render=n.render||An}Zr(i),ls(),V_(i),cs(),Ji()}function gg(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(t,e){return Ke(i,"get","$attrs"),t[e]}}))}function vg(i){const t=e=>{i.exposed=e||{}};return{get attrs(){return gg(i)},slots:i.slots,emit:i.emit,expose:t}}function Ic(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(ad(od(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ps)return Ps[e](i)},has(t,e){return e in t||e in Ps}}))}function xg(i){return Vt(i)&&"__vccOpts"in i}const Mg=(i,t)=>d_(i,t,Ws),yg=Symbol.for("v-scx"),Sg=()=>Wo(yg),Eg="3.3.4",Tg="http://www.w3.org/2000/svg",qi=typeof document<"u"?document:null,Bu=qi&&qi.createElement("template"),bg={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const r=t?qi.createElementNS(Tg,i):qi.createElement(i,e?{is:e}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>qi.createTextNode(i),createComment:i=>qi.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>qi.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Bu.innerHTML=n?`<svg>${i}</svg>`:i;const a=Bu.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}};function Ag(i,t,e){const n=i._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}function wg(i,t,e){const n=i.style,r=we(e);if(e&&!r){if(t&&!we(t))for(const s in t)e[s]==null&&Gl(n,s,"");for(const s in e)Gl(n,s,e[s])}else{const s=n.display;r?t!==e&&(n.cssText=e):t&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const zu=/\s*!important$/;function Gl(i,t,e){if(Nt(e))e.forEach(n=>Gl(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=Rg(i,t);zu.test(e)?i.setProperty(as(n),e.replace(zu,""),"important"):i[n]=e}}const Hu=["Webkit","Moz","ms"],Ba={};function Rg(i,t){const e=Ba[t];if(e)return e;let n=Kr(t);if(n!=="filter"&&n in i)return Ba[t]=n;n=Yf(n);for(let r=0;r<Hu.length;r++){const s=Hu[r]+n;if(s in i)return Ba[t]=s}return t}const Gu="http://www.w3.org/1999/xlink";function Cg(i,t,e,n,r){if(n&&t.startsWith("xlink:"))e==null?i.removeAttributeNS(Gu,t.slice(6,t.length)):i.setAttributeNS(Gu,t,e);else{const s=Lm(t);e==null||s&&!qf(e)?i.removeAttribute(t):i.setAttribute(t,s?"":e)}}function Pg(i,t,e,n,r,s,o){if(t==="innerHTML"||t==="textContent"){n&&o(n,r,s),i[t]=e??"";return}const a=i.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){i._value=e;const c=a==="OPTION"?i.getAttribute("value"):i.value,u=e??"";c!==u&&(i.value=u),e==null&&i.removeAttribute(t);return}let l=!1;if(e===""||e==null){const c=typeof i[t];c==="boolean"?e=qf(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{i[t]=e}catch{}l&&i.removeAttribute(t)}function Lg(i,t,e,n){i.addEventListener(t,e,n)}function Dg(i,t,e,n){i.removeEventListener(t,e,n)}function Ug(i,t,e,n,r=null){const s=i._vei||(i._vei={}),o=s[t];if(n&&o)o.value=n;else{const[a,l]=Ig(t);if(n){const c=s[t]=Fg(n,r);Lg(i,a,c,l)}else o&&(Dg(i,a,o,l),s[t]=void 0)}}const ku=/(?:Once|Passive|Capture)$/;function Ig(i){let t;if(ku.test(i)){t={};let n;for(;n=i.match(ku);)i=i.slice(0,i.length-n[0].length),t[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):as(i.slice(2)),t]}let za=0;const Og=Promise.resolve(),Ng=()=>za||(Og.then(()=>za=0),za=Date.now());function Fg(i,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;wn(Bg(n,e.value),t,5,[n])};return e.value=i,e.attached=Ng(),e}function Bg(i,t){if(Nt(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(n=>r=>!r._stopped&&n&&n(r))}else return t}const Vu=/^on[a-z]/,zg=(i,t,e,n,r=!1,s,o,a,l)=>{t==="class"?Ag(i,n,r):t==="style"?wg(i,e,n):pa(t)?fc(t)||Ug(i,t,e,n,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hg(i,t,n,r))?Pg(i,t,n,s,o,a,l):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),Cg(i,t,n,r))};function Hg(i,t,e,n){return n?!!(t==="innerHTML"||t==="textContent"||t in i&&Vu.test(t)&&Vt(e)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA"||Vu.test(t)&&we(e)?!1:t in i}const Gg=Te({patchProp:zg},bg);let Wu;function kg(){return Wu||(Wu=ng(Gg))}const Vg=(...i)=>{const t=kg().createApp(...i),{mount:e}=t;return t.mount=n=>{const r=Wg(n);if(!r)return;const s=t._component;!Vt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Wg(i){return we(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="155",pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xg=0,Xu=1,Yg=2,Nc=1,qg=2,Kn=3,Ci=0,ke=1,ti=2,Ei=0,Wr=1,ea=2,Yu=3,qu=4,jg=5,Ir=100,Kg=101,$g=102,ju=103,Ku=104,Zg=200,Jg=201,Qg=202,t0=203,Ld=204,Dd=205,e0=206,n0=207,i0=208,r0=209,s0=210,o0=0,a0=1,l0=2,kl=3,c0=4,u0=5,h0=6,f0=7,Ud=0,d0=1,p0=2,Ti=0,m0=1,_0=2,g0=3,v0=4,x0=5,Id=300,Jr=301,Qr=302,Vl=303,Wl=304,Ea=306,Xl=1e3,Tn=1001,Yl=1002,He=1003,$u=1004,Ha=1005,un=1006,M0=1007,Xs=1008,bi=1009,y0=1010,S0=1011,Fc=1012,Od=1013,_i=1014,gi=1015,Ys=1016,Nd=1017,Fd=1018,Qi=1020,E0=1021,bn=1023,T0=1024,b0=1025,tr=1026,ts=1027,A0=1028,Bd=1029,w0=1030,zd=1031,Hd=1033,Ga=33776,ka=33777,Va=33778,Wa=33779,Zu=35840,Ju=35841,Qu=35842,th=35843,R0=36196,eh=37492,nh=37496,ih=37808,rh=37809,sh=37810,oh=37811,ah=37812,lh=37813,ch=37814,uh=37815,hh=37816,fh=37817,dh=37818,ph=37819,mh=37820,_h=37821,Xa=36492,C0=36283,gh=36284,vh=36285,xh=36286,Gd=3e3,er=3001,P0=3200,L0=3201,D0=0,U0=1,nr="",zt="srgb",zn="srgb-linear",kd="display-p3",Ya=7680,I0=519,O0=512,N0=513,F0=514,B0=515,z0=516,H0=517,G0=518,k0=519,Mh=35044,yh="300 es",ql=1035,ei=2e3,na=2001;class ur{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sh=1234567;const Ls=Math.PI/180,qs=180/Math.PI;function us(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Bc(i,t){return(i%t+t)%t}function V0(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function W0(i,t,e){return i!==t?(e-i)/(t-i):0}function Ds(i,t,e){return(1-e)*i+e*t}function X0(i,t,e,n){return Ds(i,t,1-Math.exp(-e*n))}function Y0(i,t=1){return t-Math.abs(Bc(i,t*2)-t)}function q0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function j0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function K0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function $0(i,t){return i+Math.random()*(t-i)}function Z0(i){return i*(.5-Math.random())}function J0(i){i!==void 0&&(Sh=i);let t=Sh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Q0(i){return i*Ls}function tv(i){return i*qs}function jl(i){return(i&i-1)===0&&i!==0}function ev(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ia(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nv(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),p=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Or(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Nr={DEG2RAD:Ls,RAD2DEG:qs,generateUUID:us,clamp:ye,euclideanModulo:Bc,mapLinear:V0,inverseLerp:W0,lerp:Ds,damp:X0,pingpong:Y0,smoothstep:q0,smootherstep:j0,randInt:K0,randFloat:$0,randFloatSpread:Z0,seededRandom:J0,degToRad:Q0,radToDeg:tv,isPowerOfTwo:jl,ceilPowerOfTwo:ev,floorPowerOfTwo:ia,setQuaternionFromProperEuler:nv,normalize:Be,denormalize:Or};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,r,s,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=r[0],m=r[3],d=r[6],E=r[1],v=r[4],x=r[7],T=r[2],w=r[5],b=r[8];return s[0]=o*_+a*E+l*T,s[3]=o*m+a*v+l*w,s[6]=o*d+a*x+l*b,s[1]=c*_+u*E+h*T,s[4]=c*m+u*v+h*w,s[7]=c*d+u*x+h*b,s[2]=f*_+p*E+g*T,s[5]=f*m+p*v+g*w,s[8]=f*d+p*x+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=e*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new kt;function Vd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Eh={};function Us(i){i in Eh||(Eh[i]=!0,console.warn(i))}function Xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ja(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const iv=new kt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),rv=new kt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function sv(i){return i.convertSRGBToLinear().applyMatrix3(rv)}function ov(i){return i.applyMatrix3(iv).convertLinearToSRGB()}const av={[zn]:i=>i,[zt]:i=>i.convertSRGBToLinear(),[kd]:sv},lv={[zn]:i=>i,[zt]:i=>i.convertLinearToSRGB(),[kd]:ov},gn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return zn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=av[t],r=lv[e];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let _r;class Wd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_r===void 0&&(_r=ra("canvas")),_r.width=t.width,_r.height=t.height;const n=_r.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_r}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ra("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xr(e[n]/255)*255):e[n]=Xr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cv=0;class Xd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=us(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ka(r[o].image)):s.push(Ka(r[o]))}else s=Ka(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uv=0;class nn extends ur{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=Tn,r=Tn,s=un,o=Xs,a=bn,l=bi,c=nn.DEFAULT_ANISOTROPY,u=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=us(),this.name="",this.source=new Xd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===er?zt:nr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Id)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xl:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xl:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?er:Gd}set encoding(t){Us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===er?zt:nr}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Id;nn.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,r=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(p+1)/2,T=(d+1)/2,w=(u+f)/4,b=(h+_)/4,L=(g+m)/4;return v>x&&v>T?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=w/n,s=b/n):x>T?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=w/r,s=L/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=b/s,r=L/s),this.set(n,r,s,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hv extends ur{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Us("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===er?zt:nr),this.texture=new nn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:un,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends hv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yd extends nn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fv extends nn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*_,E=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const T=Math.sqrt(v),w=Math.atan2(T,d*E);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const x=a*E;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Th.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*r-a*n,u=l*n+a*e-s*r,h=l*r+s*n-o*e,f=-s*e-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new I,Th=new lr;class hr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox),gr.applyMatrix4(t.matrixWorld),this.union(gr);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Vn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Vn)}else r.boundingBox===null&&r.computeBoundingBox(),gr.copy(r.boundingBox),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const n=t.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),po.subVectors(this.max,ms),vr.subVectors(t.a,ms),xr.subVectors(t.b,ms),Mr.subVectors(t.c,ms),ci.subVectors(xr,vr),ui.subVectors(Mr,xr),Bi.subVectors(vr,Mr);let e=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Bi.z,Bi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Bi.z,0,-Bi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Bi.y,Bi.x,0];return!Za(e,vr,xr,Mr,po)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,vr,xr,Mr,po))?!1:(mo.crossVectors(ci,ui),e=[mo.x,mo.y,mo.z],Za(e,vr,xr,Mr,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new I,new I,new I,new I,new I,new I,new I,new I],Vn=new I,gr=new hr,vr=new I,xr=new I,Mr=new I,ci=new I,ui=new I,Bi=new I,ms=new I,po=new I,mo=new I,zi=new I;function Za(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){zi.fromArray(i,s);const a=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),u=n.dot(zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dv=new hr,_s=new I,Ja=new I;class hs{constructor(t=new I,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dv.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(_s,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Ja)),this.expandByPoint(_s.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new I,Qa=new I,_o=new I,hi=new I,tl=new I,go=new I,el=new I;class zc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Qa.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(Qa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=hi.dot(this.direction),l=-hi.dot(_o),c=hi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Qa).addScaledVector(_o,f),p}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),r=Wn.dot(Wn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,r,s){tl.subVectors(e,t),go.subVectors(n,t),el.crossVectors(tl,go);let o=this.direction.dot(el),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);const l=a*this.direction.dot(go.crossVectors(hi,go));if(l<0)return null;const c=a*this.direction.dot(tl.cross(hi));if(c<0||l+c>o)return null;const u=-a*hi.dot(el);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,r,s,o,a,l,c,u,h,f,p,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,p,g,_,m)}set(t,e,n,r,s,o,a,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/yr.setFromMatrixColumn(t,0).length(),s=1/yr.setFromMatrixColumn(t,1).length(),o=1/yr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pv,t,mv)}lookAt(t,e,n){const r=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),fi.crossVectors(n,Je),fi.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),fi.crossVectors(n,Je)),fi.normalize(),vo.crossVectors(Je,fi),r[0]=fi.x,r[4]=vo.x,r[8]=Je.x,r[1]=fi.y,r[5]=vo.y,r[9]=Je.y,r[2]=fi.z,r[6]=vo.z,r[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],E=n[3],v=n[7],x=n[11],T=n[15],w=r[0],b=r[4],L=r[8],M=r[12],R=r[1],$=r[5],J=r[9],F=r[13],k=r[2],H=r[6],Z=r[10],B=r[14],G=r[3],ht=r[7],rt=r[11],V=r[15];return s[0]=o*w+a*R+l*k+c*G,s[4]=o*b+a*$+l*H+c*ht,s[8]=o*L+a*J+l*Z+c*rt,s[12]=o*M+a*F+l*B+c*V,s[1]=u*w+h*R+f*k+p*G,s[5]=u*b+h*$+f*H+p*ht,s[9]=u*L+h*J+f*Z+p*rt,s[13]=u*M+h*F+f*B+p*V,s[2]=g*w+_*R+m*k+d*G,s[6]=g*b+_*$+m*H+d*ht,s[10]=g*L+_*J+m*Z+d*rt,s[14]=g*M+_*F+m*B+d*V,s[3]=E*w+v*R+x*k+T*G,s[7]=E*b+v*$+x*H+T*ht,s[11]=E*L+v*J+x*Z+T*rt,s[15]=E*M+v*F+x*B+T*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*p-n*l*p)+_*(+e*l*p-e*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+e*c*h-e*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+d*(-r*a*u-e*l*h+e*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],E=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,v=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,x=u*_*c-g*h*c+g*a*p-o*_*p-u*a*d+o*h*d,T=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,w=e*E+n*v+r*x+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=E*b,t[1]=(_*f*s-h*m*s-_*r*p+n*m*p+h*r*d-n*f*d)*b,t[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*d+n*l*d)*b,t[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*b,t[4]=v*b,t[5]=(u*m*s-g*f*s+g*r*p-e*m*p-u*r*d+e*f*d)*b,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*d-e*l*d)*b,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*p+e*l*p)*b,t[8]=x*b,t[9]=(g*h*s-u*_*s-g*n*p+e*_*p+u*n*d-e*h*d)*b,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*d+e*a*d)*b,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*p-e*a*p)*b,t[12]=T*b,t[13]=(u*_*r-g*h*r+g*n*f-e*_*f-u*n*m+e*h*m)*b,t[14]=(g*a*r-o*_*r-g*n*l+e*_*l+o*n*m-e*a*m)*b,t[15]=(o*h*r-u*a*r+u*n*l-e*h*l-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,_=o*u,m=o*h,d=a*h,E=l*c,v=l*u,x=l*h,T=n.x,w=n.y,b=n.z;return r[0]=(1-(_+d))*T,r[1]=(p+x)*T,r[2]=(g-v)*T,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(f+d))*w,r[6]=(m+E)*w,r[7]=0,r[8]=(g+v)*b,r[9]=(m-E)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=yr.set(r[0],r[1],r[2]).length();const o=yr.set(r[4],r[5],r[6]).length(),a=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],vn.copy(this);const c=1/s,u=1/o,h=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,e.setFromRotationMatrix(vn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=ei){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let p,g;if(a===ei)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===na)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=ei){const l=this.elements,c=1/(e-t),u=1/(n-r),h=1/(o-s),f=(e+t)*c,p=(n+r)*u;let g,_;if(a===ei)g=(o+s)*h,_=-2*h;else if(a===na)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yr=new I,vn=new ie,pv=new I(0,0,0),mv=new I(1,1,1),fi=new I,vo=new I,Je=new I,bh=new ie,Ah=new lr;class eo{constructor(t=0,e=0,n=0,r=eo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}eo.DEFAULT_ORDER="XYZ";class qd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _v=0;const wh=new I,Sr=new lr,Xn=new ie,xo=new I,gs=new I,gv=new I,vv=new lr,Rh=new I(1,0,0),Ch=new I(0,1,0),Ph=new I(0,0,1),xv={type:"added"},Lh={type:"removed"};class Ee extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new I,e=new eo,n=new lr,r=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ie},normalMatrix:{value:new kt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Sr.setFromAxisAngle(t,e),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(t,e){return Sr.setFromAxisAngle(t,e),this.quaternion.premultiply(Sr),this}rotateX(t){return this.rotateOnAxis(Rh,t)}rotateY(t){return this.rotateOnAxis(Ch,t)}rotateZ(t){return this.rotateOnAxis(Ph,t)}translateOnAxis(t,e){return wh.copy(t).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rh,t)}translateY(t){return this.translateOnAxis(Ch,t)}translateZ(t){return this.translateOnAxis(Ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xo.copy(t):xo.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(gs,xo,this.up):Xn.lookAt(xo,gs,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),Sr.setFromRotationMatrix(Xn),this.quaternion.premultiply(Sr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(xv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Lh)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,gv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,vv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ee.DEFAULT_UP=new I(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new I,Yn=new I,nl=new I,qn=new I,Er=new I,Tr=new I,Dh=new I,il=new I,rl=new I,sl=new I;let Mo=!1;class Sn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),xn.subVectors(t,e),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){xn.subVectors(r,e),Yn.subVectors(n,e),nl.subVectors(t,e);const o=xn.dot(xn),a=xn.dot(Yn),l=xn.dot(nl),c=Yn.dot(Yn),u=Yn.dot(nl),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,qn),qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(t,e,n,r,s,o,a,l){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),this.getInterpolation(t,e,n,r,s,o,a,l)}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,qn),l.setScalar(0),l.addScaledVector(s,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l}static isFrontFacing(t,e,n,r){return xn.subVectors(n,e),Yn.subVectors(t,e),xn.cross(Yn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),xn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),Sn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}getInterpolation(t,e,n,r,s){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Er.subVectors(r,n),Tr.subVectors(s,n),il.subVectors(t,n);const l=Er.dot(il),c=Tr.dot(il);if(l<=0&&c<=0)return e.copy(n);rl.subVectors(t,r);const u=Er.dot(rl),h=Tr.dot(rl);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Er,o);sl.subVectors(t,s);const p=Er.dot(sl),g=Tr.dot(sl);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Tr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Dh.subVectors(s,r),a=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(Dh,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(Er,o).addScaledVector(Tr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Mv=0;class no extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Wr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Dd,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=I0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},yo={h:0,s:0,l:0};function ol(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,gn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=gn.workingColorSpace){return this.r=t,this.g=e,this.b=n,gn.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=gn.workingColorSpace){if(t=Bc(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ol(o,s,t+1/3),this.g=ol(o,s,t),this.b=ol(o,s,t-1/3)}return gn.toWorkingColorSpace(this,r),this}setStyle(t,e=zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zt){const n=jd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}copyLinearToSRGB(t){return this.r=ja(t.r),this.g=ja(t.g),this.b=ja(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zt){return gn.fromWorkingColorSpace(Ce.copy(this),t),Math.round(ye(Ce.r*255,0,255))*65536+Math.round(ye(Ce.g*255,0,255))*256+Math.round(ye(Ce.b*255,0,255))}getHexString(t=zt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=gn.workingColorSpace){gn.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,r=Ce.g,s=Ce.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=gn.workingColorSpace){return gn.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=zt){gn.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,r=Ce.b;return t!==zt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),Mn.h+=t,Mn.s+=e,Mn.l+=n,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(yo);const n=Ds(Mn.h,yo.h,e),r=Ds(Mn.s,yo.s,e),s=Ds(Mn.l,yo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Zt;Zt.NAMES=jd;class Is extends no{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new I,So=new wt;class Rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mh,this.updateRange={offset:0,count:-1},this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Or(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Or(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Or(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Or(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Or(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),r=Be(r,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mh&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Kd extends Rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $d extends Rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends Rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yv=0;const an=new ie,al=new Ee,br=new I,Qe=new hr,vs=new hr,Me=new I;class _n extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vd(t)?$d:Kd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return al.lookAt(t),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _e(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Qe.min,vs.min),Qe.expandByPoint(Me),Me.addVectors(Qe.max,vs.max),Qe.expandByPoint(Me)):(Qe.expandByPoint(vs.min),Qe.expandByPoint(vs.max))}Qe.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Me.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Me.fromBufferAttribute(a,c),l&&(br.fromBufferAttribute(t,c),Me.add(br)),r=Math.max(r,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new I,u[R]=new I;const h=new I,f=new I,p=new I,g=new wt,_=new wt,m=new wt,d=new I,E=new I;function v(R,$,J){h.fromArray(r,R*3),f.fromArray(r,$*3),p.fromArray(r,J*3),g.fromArray(o,R*2),_.fromArray(o,$*2),m.fromArray(o,J*2),f.sub(h),p.sub(h),_.sub(g),m.sub(g);const F=1/(_.x*m.y-m.x*_.y);isFinite(F)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(F),E.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(F),c[R].add(d),c[$].add(d),c[J].add(d),u[R].add(E),u[$].add(E),u[J].add(E))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let R=0,$=x.length;R<$;++R){const J=x[R],F=J.start,k=J.count;for(let H=F,Z=F+k;H<Z;H+=3)v(n[H+0],n[H+1],n[H+2])}const T=new I,w=new I,b=new I,L=new I;function M(R){b.fromArray(s,R*3),L.copy(b);const $=c[R];T.copy($),T.sub(b.multiplyScalar(b.dot($))).normalize(),w.crossVectors(L,$);const F=w.dot(u[R])<0?-1:1;l[R*4]=T.x,l[R*4+1]=T.y,l[R*4+2]=T.z,l[R*4+3]=F}for(let R=0,$=x.length;R<$;++R){const J=x[R],F=J.start,k=J.count;for(let H=F,Z=F+k;H<Z;H+=3)M(n[H+0]),M(n[H+1]),M(n[H+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Rn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uh=new ie,Hi=new zc,Eo=new hs,Ih=new I,Ar=new I,wr=new I,Rr=new I,ll=new I,To=new I,bo=new wt,Ao=new wt,wo=new wt,Oh=new I,Nh=new I,Fh=new I,Ro=new I,Co=new I;class Xe extends Ee{constructor(t=new _n,e=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){To.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ll.fromBufferAttribute(h,t),o?To.addScaledVector(ll,u):To.addScaledVector(ll.sub(e),u))}e.add(To)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Hi.copy(t.ray).recast(t.near),!(Eo.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Eo,Ih)===null||Hi.origin.distanceToSquared(Ih)>(t.far-t.near)**2))&&(Uh.copy(s).invert(),Hi.copy(t.ray).applyMatrix4(Uh),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,T=v;x<T;x+=3){const w=a.getX(x),b=a.getX(x+1),L=a.getX(x+2);r=Po(this,d,t,n,c,u,h,w,b,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=Po(this,o,t,n,c,u,h,E,v,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,T=v;x<T;x+=3){const w=x,b=x+1,L=x+2;r=Po(this,d,t,n,c,u,h,w,b,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=m,v=m+1,x=m+2;r=Po(this,o,t,n,c,u,h,E,v,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Sv(i,t,e,n,r,s,o,a){let l;if(t.side===ke?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Ci,a),l===null)return null;Co.copy(a),Co.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:i}}function Po(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Ar),i.getVertexPosition(l,wr),i.getVertexPosition(c,Rr);const u=Sv(i,t,e,n,Ar,wr,Rr,Ro);if(u){r&&(bo.fromBufferAttribute(r,a),Ao.fromBufferAttribute(r,l),wo.fromBufferAttribute(r,c),u.uv=Sn.getInterpolation(Ro,Ar,wr,Rr,bo,Ao,wo,new wt)),s&&(bo.fromBufferAttribute(s,a),Ao.fromBufferAttribute(s,l),wo.fromBufferAttribute(s,c),u.uv1=Sn.getInterpolation(Ro,Ar,wr,Rr,bo,Ao,wo,new wt),u.uv2=u.uv1),o&&(Oh.fromBufferAttribute(o,a),Nh.fromBufferAttribute(o,l),Fh.fromBufferAttribute(o,c),u.normal=Sn.getInterpolation(Ro,Ar,wr,Rr,Oh,Nh,Fh,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};Sn.getNormal(Ar,wr,Rr,h.normal),u.face=h}return u}class io extends _n{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(h,2));function g(_,m,d,E,v,x,T,w,b,L,M){const R=x/b,$=T/L,J=x/2,F=T/2,k=w/2,H=b+1,Z=L+1;let B=0,G=0;const ht=new I;for(let rt=0;rt<Z;rt++){const V=rt*$-F;for(let Y=0;Y<H;Y++){const gt=Y*R-J;ht[_]=gt*E,ht[m]=V*v,ht[d]=k,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[d]=w>0?1:-1,u.push(ht.x,ht.y,ht.z),h.push(Y/b),h.push(1-rt/L),B+=1}}for(let rt=0;rt<L;rt++)for(let V=0;V<b;V++){const Y=f+V+H*rt,gt=f+V+H*(rt+1),_t=f+(V+1)+H*(rt+1),vt=f+(V+1)+H*rt;l.push(Y,gt,vt),l.push(gt,_t,vt),G+=6}a.addGroup(p,G,M),p+=G,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=es(i[e]);for(const r in n)t[r]=n[r]}return t}function Ev(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zd(i){return i.getRenderTarget()===null?i.outputColorSpace:zn}const Tv={clone:es,merge:ze};var bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends no{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bv,this.fragmentShader=Av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=Ev(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jd extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends Jd{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cr=-90,Pr=1;class wv extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new hn(Cr,Pr,t,e);r.layers=this.layers,this.add(r);const s=new hn(Cr,Pr,t,e);s.layers=this.layers,this.add(s);const o=new hn(Cr,Pr,t,e);o.layers=this.layers,this.add(o);const a=new hn(Cr,Pr,t,e);a.layers=this.layers,this.add(a);const l=new hn(Cr,Pr,t,e);l.layers=this.layers,this.add(l);const c=new hn(Cr,Pr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=t.getRenderTarget(),h=t.xr.enabled;t.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,r),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=f,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Qd extends nn{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Jr,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rv extends ar{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Us("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===er?zt:nr),this.texture=new Qd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new io(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Ei});s.uniforms.tEquirect.value=e;const o=new Xe(r,s),a=e.minFilter;return e.minFilter===Xs&&(e.minFilter=un),new wv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const cl=new I,Cv=new I,Pv=new kt;class mi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=cl.subVectors(n,e).cross(Cv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(cl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pv.getNormalMatrix(t),r=this.coplanarPoint(cl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new hs,Lo=new I;class Hc{constructor(t=new mi,e=new mi,n=new mi,r=new mi,s=new mi,o=new mi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],E=r[13],v=r[14],x=r[15];if(n[0].setComponents(l-s,f-c,m-p,x-d).normalize(),n[1].setComponents(l+s,f+c,m+p,x+d).normalize(),n[2].setComponents(l+o,f+u,m+g,x+E).normalize(),n[3].setComponents(l-o,f-u,m-g,x-E).normalize(),n[4].setComponents(l-a,f-h,m-_,x-v).normalize(),e===ei)n[5].setComponents(l+a,f+h,m+_,x+v).normalize();else if(e===na)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Lo.x=r.normal.x>0?t.max.x:t.min.x,Lo.y=r.normal.y>0?t.max.y:t.min.y,Lo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tp(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Lv(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(e?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Gc extends _n{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const E=d*f-o;for(let v=0;v<c;v++){const x=v*h-s;g.push(x,-E,0),_.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const v=E+c*d,x=E+c*(d+1),T=E+1+c*(d+1),w=E+1+c*d;p.push(v,x,w),p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ex=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",ax=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ux=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ex=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Cx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Px=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ux=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ix=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fx=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,tM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_M=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,gM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,FM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VM=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$M=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ty=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ny=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ry=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ay=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Dv,alphahash_pars_fragment:Uv,alphamap_fragment:Iv,alphamap_pars_fragment:Ov,alphatest_fragment:Nv,alphatest_pars_fragment:Fv,aomap_fragment:Bv,aomap_pars_fragment:zv,begin_vertex:Hv,beginnormal_vertex:Gv,bsdfs:kv,iridescence_fragment:Vv,bumpmap_pars_fragment:Wv,clipping_planes_fragment:Xv,clipping_planes_pars_fragment:Yv,clipping_planes_pars_vertex:qv,clipping_planes_vertex:jv,color_fragment:Kv,color_pars_fragment:$v,color_pars_vertex:Zv,color_vertex:Jv,common:Qv,cube_uv_reflection_fragment:tx,defaultnormal_vertex:ex,displacementmap_pars_vertex:nx,displacementmap_vertex:ix,emissivemap_fragment:rx,emissivemap_pars_fragment:sx,colorspace_fragment:ox,colorspace_pars_fragment:ax,envmap_fragment:lx,envmap_common_pars_fragment:cx,envmap_pars_fragment:ux,envmap_pars_vertex:hx,envmap_physical_pars_fragment:Ex,envmap_vertex:fx,fog_vertex:dx,fog_pars_vertex:px,fog_fragment:mx,fog_pars_fragment:_x,gradientmap_pars_fragment:gx,lightmap_fragment:vx,lightmap_pars_fragment:xx,lights_lambert_fragment:Mx,lights_lambert_pars_fragment:yx,lights_pars_begin:Sx,lights_toon_fragment:Tx,lights_toon_pars_fragment:bx,lights_phong_fragment:Ax,lights_phong_pars_fragment:wx,lights_physical_fragment:Rx,lights_physical_pars_fragment:Cx,lights_fragment_begin:Px,lights_fragment_maps:Lx,lights_fragment_end:Dx,logdepthbuf_fragment:Ux,logdepthbuf_pars_fragment:Ix,logdepthbuf_pars_vertex:Ox,logdepthbuf_vertex:Nx,map_fragment:Fx,map_pars_fragment:Bx,map_particle_fragment:zx,map_particle_pars_fragment:Hx,metalnessmap_fragment:Gx,metalnessmap_pars_fragment:kx,morphcolor_vertex:Vx,morphnormal_vertex:Wx,morphtarget_pars_vertex:Xx,morphtarget_vertex:Yx,normal_fragment_begin:qx,normal_fragment_maps:jx,normal_pars_fragment:Kx,normal_pars_vertex:$x,normal_vertex:Zx,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:tM,clearcoat_pars_fragment:eM,iridescence_pars_fragment:nM,opaque_fragment:iM,packing:rM,premultiplied_alpha_fragment:sM,project_vertex:oM,dithering_fragment:aM,dithering_pars_fragment:lM,roughnessmap_fragment:cM,roughnessmap_pars_fragment:uM,shadowmap_pars_fragment:hM,shadowmap_pars_vertex:fM,shadowmap_vertex:dM,shadowmask_pars_fragment:pM,skinbase_vertex:mM,skinning_pars_vertex:_M,skinning_vertex:gM,skinnormal_vertex:vM,specularmap_fragment:xM,specularmap_pars_fragment:MM,tonemapping_fragment:yM,tonemapping_pars_fragment:SM,transmission_fragment:EM,transmission_pars_fragment:TM,uv_pars_fragment:bM,uv_pars_vertex:AM,uv_vertex:wM,worldpos_vertex:RM,background_vert:CM,background_frag:PM,backgroundCube_vert:LM,backgroundCube_frag:DM,cube_vert:UM,cube_frag:IM,depth_vert:OM,depth_frag:NM,distanceRGBA_vert:FM,distanceRGBA_frag:BM,equirect_vert:zM,equirect_frag:HM,linedashed_vert:GM,linedashed_frag:kM,meshbasic_vert:VM,meshbasic_frag:WM,meshlambert_vert:XM,meshlambert_frag:YM,meshmatcap_vert:qM,meshmatcap_frag:jM,meshnormal_vert:KM,meshnormal_frag:$M,meshphong_vert:ZM,meshphong_frag:JM,meshphysical_vert:QM,meshphysical_frag:ty,meshtoon_vert:ey,meshtoon_frag:ny,points_vert:iy,points_frag:ry,shadow_vert:sy,shadow_frag:oy,sprite_vert:ay,sprite_frag:ly},Mt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Un={basic:{uniforms:ze([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:ze([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:ze([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:ze([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:ze([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:ze([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:ze([Mt.points,Mt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:ze([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:ze([Mt.common,Mt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:ze([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:ze([Mt.sprite,Mt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:ze([Mt.common,Mt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:ze([Mt.lights,Mt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Un.physical={uniforms:ze([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Do={r:0,b:0,g:0};function cy(i,t,e,n,r,s,o){const a=new Zt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,d){let E=!1,v=d.isScene===!0?d.background:null;switch(v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),E=!0),i.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),E=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),E=!0;break}(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ea)?(u===void 0&&(u=new Xe(new io(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:es(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=v.colorSpace!==zt,(h!==v||f!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xe(new Gc(2,2),new Pi({name:"BackgroundMaterial",uniforms:es(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=v.colorSpace!==zt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(Do,Zd(i)),n.buffers.color.setClear(Do.r,Do.g,Do.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function uy(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(k,H,Z,B,G){let ht=!1;if(o){const rt=_(B,Z,H);c!==rt&&(c=rt,p(c.object)),ht=d(k,B,Z,G),ht&&E(k,B,Z,G)}else{const rt=H.wireframe===!0;(c.geometry!==B.id||c.program!==Z.id||c.wireframe!==rt)&&(c.geometry=B.id,c.program=Z.id,c.wireframe=rt,ht=!0)}G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(ht||u)&&(u=!1,L(k,H,Z,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(k){return n.isWebGL2?i.bindVertexArray(k):s.bindVertexArrayOES(k)}function g(k){return n.isWebGL2?i.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function _(k,H,Z){const B=Z.wireframe===!0;let G=a[k.id];G===void 0&&(G={},a[k.id]=G);let ht=G[H.id];ht===void 0&&(ht={},G[H.id]=ht);let rt=ht[B];return rt===void 0&&(rt=m(f()),ht[B]=rt),rt}function m(k){const H=[],Z=[],B=[];for(let G=0;G<r;G++)H[G]=0,Z[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:B,object:k,attributes:{},index:null}}function d(k,H,Z,B){const G=c.attributes,ht=H.attributes;let rt=0;const V=Z.getAttributes();for(const Y in V)if(V[Y].location>=0){const _t=G[Y];let vt=ht[Y];if(vt===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(vt=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(vt=k.instanceColor)),_t===void 0||_t.attribute!==vt||vt&&_t.data!==vt.data)return!0;rt++}return c.attributesNum!==rt||c.index!==B}function E(k,H,Z,B){const G={},ht=H.attributes;let rt=0;const V=Z.getAttributes();for(const Y in V)if(V[Y].location>=0){let _t=ht[Y];_t===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(_t=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(_t=k.instanceColor));const vt={};vt.attribute=_t,_t&&_t.data&&(vt.data=_t.data),G[Y]=vt,rt++}c.attributes=G,c.attributesNum=rt,c.index=B}function v(){const k=c.newAttributes;for(let H=0,Z=k.length;H<Z;H++)k[H]=0}function x(k){T(k,0)}function T(k,H){const Z=c.newAttributes,B=c.enabledAttributes,G=c.attributeDivisors;Z[k]=1,B[k]===0&&(i.enableVertexAttribArray(k),B[k]=1),G[k]!==H&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,H),G[k]=H)}function w(){const k=c.newAttributes,H=c.enabledAttributes;for(let Z=0,B=H.length;Z<B;Z++)H[Z]!==k[Z]&&(i.disableVertexAttribArray(Z),H[Z]=0)}function b(k,H,Z,B,G,ht,rt){rt===!0?i.vertexAttribIPointer(k,H,Z,G,ht):i.vertexAttribPointer(k,H,Z,B,G,ht)}function L(k,H,Z,B){if(n.isWebGL2===!1&&(k.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const G=B.attributes,ht=Z.getAttributes(),rt=H.defaultAttributeValues;for(const V in ht){const Y=ht[V];if(Y.location>=0){let gt=G[V];if(gt===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(gt=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(gt=k.instanceColor)),gt!==void 0){const _t=gt.normalized,vt=gt.itemSize,At=e.get(gt);if(At===void 0)continue;const Pt=At.buffer,Rt=At.type,Ht=At.bytesPerElement,ce=n.isWebGL2===!0&&(Rt===i.INT||Rt===i.UNSIGNED_INT||gt.gpuType===Od);if(gt.isInterleavedBufferAttribute){const Ot=gt.data,y=Ot.stride,D=gt.offset;if(Ot.isInstancedInterleavedBuffer){for(let N=0;N<Y.locationSize;N++)T(Y.location+N,Ot.meshPerAttribute);k.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let N=0;N<Y.locationSize;N++)x(Y.location+N);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let N=0;N<Y.locationSize;N++)b(Y.location+N,vt/Y.locationSize,Rt,_t,y*Ht,(D+vt/Y.locationSize*N)*Ht,ce)}else{if(gt.isInstancedBufferAttribute){for(let Ot=0;Ot<Y.locationSize;Ot++)T(Y.location+Ot,gt.meshPerAttribute);k.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Ot=0;Ot<Y.locationSize;Ot++)x(Y.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let Ot=0;Ot<Y.locationSize;Ot++)b(Y.location+Ot,vt/Y.locationSize,Rt,_t,vt*Ht,vt/Y.locationSize*Ot*Ht,ce)}}else if(rt!==void 0){const _t=rt[V];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(Y.location,_t);break;case 3:i.vertexAttrib3fv(Y.location,_t);break;case 4:i.vertexAttrib4fv(Y.location,_t);break;default:i.vertexAttrib1fv(Y.location,_t)}}}}w()}function M(){J();for(const k in a){const H=a[k];for(const Z in H){const B=H[Z];for(const G in B)g(B[G].object),delete B[G];delete H[Z]}delete a[k]}}function R(k){if(a[k.id]===void 0)return;const H=a[k.id];for(const Z in H){const B=H[Z];for(const G in B)g(B[G].object),delete B[G];delete H[Z]}delete a[k.id]}function $(k){for(const H in a){const Z=a[H];if(Z[k.id]===void 0)continue;const B=Z[k.id];for(const G in B)g(B[G].object),delete B[G];delete Z[k.id]}}function J(){F(),u=!0,c!==l&&(c=l,p(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:F,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:x,disableUnusedAttributes:w}}function hy(i,t,e,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),e.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function fy(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,x=o||t.has("OES_texture_float"),T=v&&x,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:T,maxSamples:w}}function dy(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new mi,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,v=E*4;let x=d.clippingState||null;l.value=x,x=u(g,f,v,p);for(let T=0;T!==v;++T)x[T]=e[T];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,x=p;v!==_;++v,x+=4)o.copy(h[v]).applyMatrix4(E,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function py(i){let t=new WeakMap;function e(o,a){return a===Vl?o.mapping=Jr:a===Wl&&(o.mapping=Qr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Vl||a===Wl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rv(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ep extends Jd{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zr=4,Bh=[.125,.215,.35,.446,.526,.582],ji=20,ul=new ep,zh=new Zt;let hl=null;const Wi=(1+Math.sqrt(5))/2,Lr=1/Wi,Hh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Wi,Lr),new I(0,Wi,-Lr),new I(Lr,0,Wi),new I(-Lr,0,Wi),new I(Wi,Lr,0),new I(-Wi,Lr,0)];class Gh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){hl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hl),t.scissorTest=!1,Uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Jr||t.mapping===Qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hl=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ys,format:bn,colorSpace:zn,depthBuffer:!1},r=kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=my(s)),this._blurMaterial=_y(s,t,e)}return r}_compileMaterial(t){const e=new Xe(this._lodPlanes[0],t);this._renderer.compile(e,ul)}_sceneToCubeUV(t,e,n,r){const a=new hn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(zh),u.toneMapping=Ti,u.autoClear=!1;const p=new Is({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new Xe(new io,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(zh),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Uo(r,E*v,d>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Jr||t.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Uo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ul)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Hh[(r-1)%Hh.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xe(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ji-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ji;m>ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const d=[];let E=0;for(let b=0;b<ji;++b){const L=b/_,M=Math.exp(-L*L/2);d.push(M),b===0?E+=M:b<m&&(E+=2*M)}for(let b=0;b<d.length;b++)d[b]=d[b]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const x=this._sizeLods[r],T=3*x*(r>v-zr?r-v+zr:0),w=4*(this._cubeSize-x);Uo(e,T,w,3*x,2*x),l.setRenderTarget(e),l.render(h,ul)}}function my(i){const t=[],e=[],n=[];let r=i;const s=i-zr+1+Bh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-zr?l=Bh[o-i+zr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),v=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,L=w>2?0:-1,M=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];E.set(M,_*g*w),v.set(f,m*g*w);const R=[w,w,w,w,w,w];x.set(R,d*g*w)}const T=new _n;T.setAttribute("position",new Rn(E,_)),T.setAttribute("uv",new Rn(v,m)),T.setAttribute("faceIndex",new Rn(x,d)),t.push(T),r>zr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kh(i,t,e){const n=new ar(i,t,e);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function _y(i,t,e){const n=new Float32Array(ji),r=new I(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Vh(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Wh(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vl||l===Wl,u=l===Jr||l===Qr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Gh(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new Gh(i));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vy(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function xy(i,t,e,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let v=0,x=E.length;v<x;v+=3){const T=E[v+0],w=E[v+1],b=E[v+2];f.push(T,w,w,b,b,T)}}else if(g!==void 0){const E=g.array;_=g.version;for(let v=0,x=E.length/3-1;v<x;v+=3){const T=v+0,w=v+1,b=v+2;f.push(T,w,w,b,b,T)}}else return;const m=new(Vd(f)?$d:Kd)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function My(i,t,e,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(s,p,a,f*l),e.update(p,s,1)}function h(f,p,g){if(g===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,f*l,g),e.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function yy(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Sy(i,t){return i[0]-t[0]}function Ey(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Ty(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,o=new Se,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let H=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),T===!0&&(M=3);let R=u.attributes.position.count*M,$=1;R>t.maxTextureSize&&($=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const J=new Float32Array(R*$*4*_),F=new Yd(J,R,$,_);F.type=gi,F.needsUpdate=!0;const k=M*4;for(let Z=0;Z<_;Z++){const B=w[Z],G=b[Z],ht=L[Z],rt=R*$*4*Z;for(let V=0;V<B.count;V++){const Y=V*k;v===!0&&(o.fromBufferAttribute(B,V),J[rt+Y+0]=o.x,J[rt+Y+1]=o.y,J[rt+Y+2]=o.z,J[rt+Y+3]=0),x===!0&&(o.fromBufferAttribute(G,V),J[rt+Y+4]=o.x,J[rt+Y+5]=o.y,J[rt+Y+6]=o.z,J[rt+Y+7]=0),T===!0&&(o.fromBufferAttribute(ht,V),J[rt+Y+8]=o.x,J[rt+Y+9]=o.y,J[rt+Y+10]=o.z,J[rt+Y+11]=ht.itemSize===4?o.w:1)}}m={count:_,texture:F,size:new wt(R,$)},s.set(u,m),u.addEventListener("dispose",H)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const E=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[u.id]=_}for(let x=0;x<g;x++){const T=_[x];T[0]=x,T[1]=f[x]}_.sort(Ey);for(let x=0;x<8;x++)x<g&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Sy);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let E=0;for(let x=0;x<8;x++){const T=a[x],w=T[0],b=T[1];w!==Number.MAX_SAFE_INTEGER&&b?(m&&u.getAttribute("morphTarget"+x)!==m[w]&&u.setAttribute("morphTarget"+x,m[w]),d&&u.getAttribute("morphNormal"+x)!==d[w]&&u.setAttribute("morphNormal"+x,d[w]),r[x]=b,E+=b):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),d&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const v=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function by(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const np=new nn,ip=new Yd,rp=new fv,sp=new Qd,Xh=[],Yh=[],qh=new Float32Array(16),jh=new Float32Array(9),Kh=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Xh[r];if(s===void 0&&(s=new Float32Array(r),Xh[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ta(i,t){let e=Yh[t];e===void 0&&(e=new Int32Array(t),Yh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ay(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function Ry(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Cy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function Py(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Kh.set(n),i.uniformMatrix2fv(this.addr,!1,Kh),xe(e,n)}}function Ly(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;jh.set(n),i.uniformMatrix3fv(this.addr,!1,jh),xe(e,n)}}function Dy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;qh.set(n),i.uniformMatrix4fv(this.addr,!1,qh),xe(e,n)}}function Uy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Iy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Oy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Ny(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Fy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function By(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function zy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Hy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Gy(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2D(t||np,r)}function ky(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||rp,r)}function Vy(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||sp,r)}function Wy(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ip,r)}function Xy(i){switch(i){case 5126:return Ay;case 35664:return wy;case 35665:return Ry;case 35666:return Cy;case 35674:return Py;case 35675:return Ly;case 35676:return Dy;case 5124:case 35670:return Uy;case 35667:case 35671:return Iy;case 35668:case 35672:return Oy;case 35669:case 35673:return Ny;case 5125:return Fy;case 36294:return By;case 36295:return zy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Wy}}function Yy(i,t){i.uniform1fv(this.addr,t)}function qy(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function jy(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function Ky(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function $y(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zy(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jy(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qy(i,t){i.uniform1iv(this.addr,t)}function tS(i,t){i.uniform2iv(this.addr,t)}function eS(i,t){i.uniform3iv(this.addr,t)}function nS(i,t){i.uniform4iv(this.addr,t)}function iS(i,t){i.uniform1uiv(this.addr,t)}function rS(i,t){i.uniform2uiv(this.addr,t)}function sS(i,t){i.uniform3uiv(this.addr,t)}function oS(i,t){i.uniform4uiv(this.addr,t)}function aS(i,t,e){const n=this.cache,r=t.length,s=Ta(e,r);ve(n,s)||(i.uniform1iv(this.addr,s),xe(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||np,s[o])}function lS(i,t,e){const n=this.cache,r=t.length,s=Ta(e,r);ve(n,s)||(i.uniform1iv(this.addr,s),xe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||rp,s[o])}function cS(i,t,e){const n=this.cache,r=t.length,s=Ta(e,r);ve(n,s)||(i.uniform1iv(this.addr,s),xe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||sp,s[o])}function uS(i,t,e){const n=this.cache,r=t.length,s=Ta(e,r);ve(n,s)||(i.uniform1iv(this.addr,s),xe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ip,s[o])}function hS(i){switch(i){case 5126:return Yy;case 35664:return qy;case 35665:return jy;case 35666:return Ky;case 35674:return $y;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return Qy;case 35667:case 35671:return tS;case 35668:case 35672:return eS;case 35669:case 35673:return nS;case 5125:return iS;case 36294:return rS;case 36295:return sS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return aS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return uS}}class fS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Xy(e.type)}}class dS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=hS(e.type)}}class pS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const fl=/(\w+)(\])?(\[|\.)?/g;function $h(i,t){i.seq.push(t),i.map[t.id]=t}function mS(i,t,e){const n=i.name,r=n.length;for(fl.lastIndex=0;;){const s=fl.exec(n),o=fl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$h(e,c===void 0?new fS(a,i,t):new dS(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new pS(a),$h(e,h)),e=h}}}class Yo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);mS(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Zh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let _S=0;function gS(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function vS(i){switch(i){case zn:return["Linear","( value )"];case zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Jh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+gS(i.getShaderSource(t),o)}else return r}function xS(i,t){const e=vS(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function MS(i,t){let e;switch(t){case m0:e="Linear";break;case _0:e="Reinhard";break;case g0:e="OptimizedCineon";break;case v0:e="ACESFilmic";break;case x0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function yS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function SS(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ES(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ts(i){return i!==""}function Qh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const TS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(i){return i.replace(TS,AS)}const bS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AS(i,t){let e=Bt[t];if(e===void 0){const n=bS.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Kl(e)}const wS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(i){return i.replace(wS,RS)}function RS(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nf(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function CS(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qg?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function PS(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Jr:case Qr:t="ENVMAP_TYPE_CUBE";break;case Ea:t="ENVMAP_TYPE_CUBE_UV";break}return t}function LS(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qr:t="ENVMAP_MODE_REFRACTION";break}return t}function DS(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ud:t="ENVMAP_BLENDING_MULTIPLY";break;case d0:t="ENVMAP_BLENDING_MIX";break;case p0:t="ENVMAP_BLENDING_ADD";break}return t}function US(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function IS(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=CS(e),c=PS(e),u=LS(e),h=DS(e),f=US(e),p=e.isWebGL2?"":yS(e),g=SS(s),_=r.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),d.length>0&&(d+=`
`)):(m=[nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),d=[p,nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Ti?MS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,xS("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),o=Kl(o),o=Qh(o,e),o=tf(o,e),a=Kl(a),a=Qh(a,e),a=tf(a,e),o=ef(o),a=ef(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=E+m+o,x=E+d+a,T=Zh(r,r.VERTEX_SHADER,v),w=Zh(r,r.FRAGMENT_SHADER,x);if(r.attachShader(_,T),r.attachShader(_,w),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),R=r.getShaderInfoLog(T).trim(),$=r.getShaderInfoLog(w).trim();let J=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,w);else{const k=Jh(r,T,"vertex"),H=Jh(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+k+`
`+H)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||$==="")&&(F=!1);F&&(this.diagnostics={runnable:J,programLog:M,vertexShader:{log:R,prefix:m},fragmentShader:{log:$,prefix:d}})}r.deleteShader(T),r.deleteShader(w);let b;this.getUniforms=function(){return b===void 0&&(b=new Yo(r,_)),b};let L;return this.getAttributes=function(){return L===void 0&&(L=ES(r,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_S++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let OS=0;class NS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new FS(t),e.set(t,n)),n}}class FS{constructor(t){this.id=OS++,this.code=t,this.usedTimes=0}}function BS(i,t,e,n,r,s,o){const a=new qd,l=new NS,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,R,$,J,F){const k=J.fog,H=F.geometry,Z=M.isMeshStandardMaterial?J.environment:null,B=(M.isMeshStandardMaterial?e:t).get(M.envMap||Z),G=B&&B.mapping===Ea?B.image.height:null,ht=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,V=rt!==void 0?rt.length:0;let Y=0;H.morphAttributes.position!==void 0&&(Y=1),H.morphAttributes.normal!==void 0&&(Y=2),H.morphAttributes.color!==void 0&&(Y=3);let gt,_t,vt,At;if(ht){const ee=Un[ht];gt=ee.vertexShader,_t=ee.fragmentShader}else gt=M.vertexShader,_t=M.fragmentShader,l.update(M),vt=l.getVertexShaderID(M),At=l.getFragmentShaderID(M);const Pt=i.getRenderTarget(),Rt=F.isInstancedMesh===!0,Ht=!!M.map,ce=!!M.matcap,Ot=!!B,y=!!M.aoMap,D=!!M.lightMap,N=!!M.bumpMap,q=!!M.normalMap,X=!!M.displacementMap,ut=!!M.emissiveMap,ct=!!M.metalnessMap,Q=!!M.roughnessMap,lt=M.anisotropy>0,ot=M.clearcoat>0,Tt=M.iridescence>0,A=M.sheen>0,S=M.transmission>0,O=lt&&!!M.anisotropyMap,nt=ot&&!!M.clearcoatMap,it=ot&&!!M.clearcoatNormalMap,st=ot&&!!M.clearcoatRoughnessMap,xt=Tt&&!!M.iridescenceMap,ft=Tt&&!!M.iridescenceThicknessMap,j=A&&!!M.sheenColorMap,P=A&&!!M.sheenRoughnessMap,at=!!M.specularMap,yt=!!M.specularColorMap,dt=!!M.specularIntensityMap,mt=S&&!!M.transmissionMap,Lt=S&&!!M.thicknessMap,Yt=!!M.gradientMap,U=!!M.alphaMap,St=M.alphaTest>0,K=!!M.alphaHash,pt=!!M.extensions,Et=!!H.attributes.uv1,Gt=!!H.attributes.uv2,Kt=!!H.attributes.uv3;let te=Ti;return M.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(te=i.toneMapping),{isWebGL2:u,shaderID:ht,shaderType:M.type,shaderName:M.name,vertexShader:gt,fragmentShader:_t,defines:M.defines,customVertexShaderID:vt,customFragmentShaderID:At,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Rt,instancingColor:Rt&&F.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:zn,map:Ht,matcap:ce,envMap:Ot,envMapMode:Ot&&B.mapping,envMapCubeUVHeight:G,aoMap:y,lightMap:D,bumpMap:N,normalMap:q,displacementMap:f&&X,emissiveMap:ut,normalMapObjectSpace:q&&M.normalMapType===U0,normalMapTangentSpace:q&&M.normalMapType===D0,metalnessMap:ct,roughnessMap:Q,anisotropy:lt,anisotropyMap:O,clearcoat:ot,clearcoatMap:nt,clearcoatNormalMap:it,clearcoatRoughnessMap:st,iridescence:Tt,iridescenceMap:xt,iridescenceThicknessMap:ft,sheen:A,sheenColorMap:j,sheenRoughnessMap:P,specularMap:at,specularColorMap:yt,specularIntensityMap:dt,transmission:S,transmissionMap:mt,thicknessMap:Lt,gradientMap:Yt,opaque:M.transparent===!1&&M.blending===Wr,alphaMap:U,alphaTest:St,alphaHash:K,combine:M.combine,mapUv:Ht&&_(M.map.channel),aoMapUv:y&&_(M.aoMap.channel),lightMapUv:D&&_(M.lightMap.channel),bumpMapUv:N&&_(M.bumpMap.channel),normalMapUv:q&&_(M.normalMap.channel),displacementMapUv:X&&_(M.displacementMap.channel),emissiveMapUv:ut&&_(M.emissiveMap.channel),metalnessMapUv:ct&&_(M.metalnessMap.channel),roughnessMapUv:Q&&_(M.roughnessMap.channel),anisotropyMapUv:O&&_(M.anisotropyMap.channel),clearcoatMapUv:nt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:j&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:P&&_(M.sheenRoughnessMap.channel),specularMapUv:at&&_(M.specularMap.channel),specularColorMapUv:yt&&_(M.specularColorMap.channel),specularIntensityMapUv:dt&&_(M.specularIntensityMap.channel),transmissionMapUv:mt&&_(M.transmissionMap.channel),thicknessMapUv:Lt&&_(M.thicknessMap.channel),alphaMapUv:U&&_(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(q||lt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:Gt,vertexUv3s:Kt,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Ht||U),fog:!!k,useFog:M.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Y,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,useLegacyLights:i._useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ti,flipSided:M.side===ke,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pt&&M.extensions.derivatives===!0,extensionFragDepth:pt&&M.extensions.fragDepth===!0,extensionDrawBuffers:pt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const $ in M.defines)R.push($),R.push(M.defines[$]);return M.isRawShaderMaterial===!1&&(E(R,M),v(R,M),R.push(i.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function E(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function v(M,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),M.push(a.mask)}function x(M){const R=g[M.type];let $;if(R){const J=Un[R];$=Tv.clone(J.uniforms)}else $=M.uniforms;return $}function T(M,R){let $;for(let J=0,F=c.length;J<F;J++){const k=c[J];if(k.cacheKey===R){$=k,++$.usedTimes;break}}return $===void 0&&($=new IS(i,R,M,s),c.push($)),$}function w(M){if(--M.usedTimes===0){const R=c.indexOf(M);c[R]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:L}}function zS(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function HS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function rf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function sf(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||HS),n.length>1&&n.sort(f||rf),r.length>1&&r.sort(f||rf)}function u(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function GS(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new sf,i.set(n,[o])):r>=s.length?(o=new sf,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function kS(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Zt};break;case"SpotLight":e={position:new I,direction:new I,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function VS(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let WS=0;function XS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function YS(i,t){const e=new kS,n=VS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new ie,a=new ie;function l(u,h){let f=0,p=0,g=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let _=0,m=0,d=0,E=0,v=0,x=0,T=0,w=0,b=0,L=0;u.sort(XS);const M=h===!0?Math.PI:1;for(let $=0,J=u.length;$<J;$++){const F=u[$],k=F.color,H=F.intensity,Z=F.distance,B=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=k.r*H*M,p+=k.g*H*M,g+=k.b*H*M;else if(F.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(F.sh.coefficients[G],H);else if(F.isDirectionalLight){const G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const ht=F.shadow,rt=n.get(F);rt.shadowBias=ht.bias,rt.shadowNormalBias=ht.normalBias,rt.shadowRadius=ht.radius,rt.shadowMapSize=ht.mapSize,r.directionalShadow[_]=rt,r.directionalShadowMap[_]=B,r.directionalShadowMatrix[_]=F.shadow.matrix,x++}r.directional[_]=G,_++}else if(F.isSpotLight){const G=e.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(k).multiplyScalar(H*M),G.distance=Z,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,r.spot[d]=G;const ht=F.shadow;if(F.map&&(r.spotLightMap[b]=F.map,b++,ht.updateMatrices(F),F.castShadow&&L++),r.spotLightMatrix[d]=ht.matrix,F.castShadow){const rt=n.get(F);rt.shadowBias=ht.bias,rt.shadowNormalBias=ht.normalBias,rt.shadowRadius=ht.radius,rt.shadowMapSize=ht.mapSize,r.spotShadow[d]=rt,r.spotShadowMap[d]=B,w++}d++}else if(F.isRectAreaLight){const G=e.get(F);G.color.copy(k).multiplyScalar(H),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),r.rectArea[E]=G,E++}else if(F.isPointLight){const G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity*M),G.distance=F.distance,G.decay=F.decay,F.castShadow){const ht=F.shadow,rt=n.get(F);rt.shadowBias=ht.bias,rt.shadowNormalBias=ht.normalBias,rt.shadowRadius=ht.radius,rt.shadowMapSize=ht.mapSize,rt.shadowCameraNear=ht.camera.near,rt.shadowCameraFar=ht.camera.far,r.pointShadow[m]=rt,r.pointShadowMap[m]=B,r.pointShadowMatrix[m]=F.shadow.matrix,T++}r.point[m]=G,m++}else if(F.isHemisphereLight){const G=e.get(F);G.skyColor.copy(F.color).multiplyScalar(H*M),G.groundColor.copy(F.groundColor).multiplyScalar(H*M),r.hemi[v]=G,v++}}E>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_FLOAT_1,r.rectAreaLTC2=Mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_HALF_1,r.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==E||R.hemiLength!==v||R.numDirectionalShadows!==x||R.numPointShadows!==T||R.numSpotShadows!==w||R.numSpotMaps!==b)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=E,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+b-L,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=L,R.directionalLength=_,R.pointLength=m,R.spotLength=d,R.rectAreaLength=E,R.hemiLength=v,R.numDirectionalShadows=x,R.numPointShadows=T,R.numSpotShadows=w,R.numSpotMaps=b,r.version=WS++)}function c(u,h){let f=0,p=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let E=0,v=u.length;E<v;E++){const x=u[E];if(x.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),f++}else if(x.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),g++}else if(x.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),a.identity(),o.copy(x.matrixWorld),o.premultiply(d),a.extractRotation(o),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function of(i,t){const e=new YS(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function qS(i,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new of(i,t),e.set(s,[l])):o>=a.length?(l=new of(i,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class jS extends no{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class KS extends no{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JS(i,t,e){let n=new Hc;const r=new wt,s=new wt,o=new Se,a=new jS({depthPacking:L0}),l=new KS,c={},u=e.maxTextureSize,h={[Ci]:ke,[ke]:Ci,[ti]:ti},f=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:$S,fragmentShader:ZS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let d=this.type;this.render=function(T,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const L=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Ei),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const J=d!==Kn&&this.type===Kn,F=d===Kn&&this.type!==Kn;for(let k=0,H=T.length;k<H;k++){const Z=T[k],B=Z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const G=B.getFrameExtents();if(r.multiply(G),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,B.mapSize.y=s.y)),B.map===null||J===!0||F===!0){const rt=this.type!==Kn?{minFilter:He,magFilter:He}:{};B.map!==null&&B.map.dispose(),B.map=new ar(r.x,r.y,rt),B.map.texture.name=Z.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const ht=B.getViewportCount();for(let rt=0;rt<ht;rt++){const V=B.getViewport(rt);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),$.viewport(o),B.updateMatrices(Z,rt),n=B.getFrustum(),x(w,b,B.camera,Z,this.type)}B.isPointLightShadow!==!0&&this.type===Kn&&E(B,b),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(L,M,R)};function E(T,w){const b=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ar(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,b,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,b,p,_,null)}function v(T,w,b,L){let M=null;const R=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)M=R;else if(M=b.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=M.uuid,J=w.uuid;let F=c[$];F===void 0&&(F={},c[$]=F);let k=F[J];k===void 0&&(k=M.clone(),F[J]=k),M=k}if(M.visible=w.visible,M.wireframe=w.wireframe,L===Kn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const $=i.properties.get(M);$.light=b}return M}function x(T,w,b,L,M){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const J=t.update(T),F=T.material;if(Array.isArray(F)){const k=J.groups;for(let H=0,Z=k.length;H<Z;H++){const B=k[H],G=F[B.materialIndex];if(G&&G.visible){const ht=v(T,G,L,M);i.renderBufferDirect(b,null,J,ht,T,B)}}}else if(F.visible){const k=v(T,F,L,M);i.renderBufferDirect(b,null,J,k,T,null)}}const $=T.children;for(let J=0,F=$.length;J<F;J++)x($[J],w,b,L,M)}}function QS(i,t,e){const n=e.isWebGL2;function r(){let U=!1;const St=new Se;let K=null;const pt=new Se(0,0,0,0);return{setMask:function(Et){K!==Et&&!U&&(i.colorMask(Et,Et,Et,Et),K=Et)},setLocked:function(Et){U=Et},setClear:function(Et,Gt,Kt,te,ai){ai===!0&&(Et*=te,Gt*=te,Kt*=te),St.set(Et,Gt,Kt,te),pt.equals(St)===!1&&(i.clearColor(Et,Gt,Kt,te),pt.copy(St))},reset:function(){U=!1,K=null,pt.set(-1,0,0,0)}}}function s(){let U=!1,St=null,K=null,pt=null;return{setTest:function(Et){Et?Pt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(Et){St!==Et&&!U&&(i.depthMask(Et),St=Et)},setFunc:function(Et){if(K!==Et){switch(Et){case o0:i.depthFunc(i.NEVER);break;case a0:i.depthFunc(i.ALWAYS);break;case l0:i.depthFunc(i.LESS);break;case kl:i.depthFunc(i.LEQUAL);break;case c0:i.depthFunc(i.EQUAL);break;case u0:i.depthFunc(i.GEQUAL);break;case h0:i.depthFunc(i.GREATER);break;case f0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=Et}},setLocked:function(Et){U=Et},setClear:function(Et){pt!==Et&&(i.clearDepth(Et),pt=Et)},reset:function(){U=!1,St=null,K=null,pt=null}}}function o(){let U=!1,St=null,K=null,pt=null,Et=null,Gt=null,Kt=null,te=null,ai=null;return{setTest:function(ee){U||(ee?Pt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(ee){St!==ee&&!U&&(i.stencilMask(ee),St=ee)},setFunc:function(ee,Pn,Oe){(K!==ee||pt!==Pn||Et!==Oe)&&(i.stencilFunc(ee,Pn,Oe),K=ee,pt=Pn,Et=Oe)},setOp:function(ee,Pn,Oe){(Gt!==ee||Kt!==Pn||te!==Oe)&&(i.stencilOp(ee,Pn,Oe),Gt=ee,Kt=Pn,te=Oe)},setLocked:function(ee){U=ee},setClear:function(ee){ai!==ee&&(i.clearStencil(ee),ai=ee)},reset:function(){U=!1,St=null,K=null,pt=null,Et=null,Gt=null,Kt=null,te=null,ai=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,E=null,v=null,x=null,T=null,w=null,b=null,L=null,M=!1,R=null,$=null,J=null,F=null,k=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,B=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(G)[1]),Z=B>=1):G.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Z=B>=2);let ht=null,rt={};const V=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),gt=new Se().fromArray(V),_t=new Se().fromArray(Y);function vt(U,St,K,pt){const Et=new Uint8Array(4),Gt=i.createTexture();i.bindTexture(U,Gt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<K;Kt++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(St,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(St+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Gt}const At={};At[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(At[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pt(i.DEPTH_TEST),l.setFunc(kl),X(!1),ut(Xu),Pt(i.CULL_FACE),N(Ei);function Pt(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function Rt(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function Ht(U,St){return p[U]!==St?(i.bindFramebuffer(U,St),p[U]=St,n&&(U===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=St),U===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=St)),!0):!1}function ce(U,St){let K=_,pt=!1;if(U)if(K=g.get(St),K===void 0&&(K=[],g.set(St,K)),U.isWebGLMultipleRenderTargets){const Et=U.texture;if(K.length!==Et.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Gt=0,Kt=Et.length;Gt<Kt;Gt++)K[Gt]=i.COLOR_ATTACHMENT0+Gt;K.length=Et.length,pt=!0}}else K[0]!==i.COLOR_ATTACHMENT0&&(K[0]=i.COLOR_ATTACHMENT0,pt=!0);else K[0]!==i.BACK&&(K[0]=i.BACK,pt=!0);pt&&(e.isWebGL2?i.drawBuffers(K):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Ot(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const y={[Ir]:i.FUNC_ADD,[Kg]:i.FUNC_SUBTRACT,[$g]:i.FUNC_REVERSE_SUBTRACT};if(n)y[ju]=i.MIN,y[Ku]=i.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(y[ju]=U.MIN_EXT,y[Ku]=U.MAX_EXT)}const D={[Zg]:i.ZERO,[Jg]:i.ONE,[Qg]:i.SRC_COLOR,[Ld]:i.SRC_ALPHA,[s0]:i.SRC_ALPHA_SATURATE,[i0]:i.DST_COLOR,[e0]:i.DST_ALPHA,[t0]:i.ONE_MINUS_SRC_COLOR,[Dd]:i.ONE_MINUS_SRC_ALPHA,[r0]:i.ONE_MINUS_DST_COLOR,[n0]:i.ONE_MINUS_DST_ALPHA};function N(U,St,K,pt,Et,Gt,Kt,te){if(U===Ei){d===!0&&(Rt(i.BLEND),d=!1);return}if(d===!1&&(Pt(i.BLEND),d=!0),U!==jg){if(U!==E||te!==M){if((v!==Ir||w!==Ir)&&(i.blendEquation(i.FUNC_ADD),v=Ir,w=Ir),te)switch(U){case Wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ea:i.blendFunc(i.ONE,i.ONE);break;case Yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ea:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,T=null,b=null,L=null,E=U,M=te}return}Et=Et||St,Gt=Gt||K,Kt=Kt||pt,(St!==v||Et!==w)&&(i.blendEquationSeparate(y[St],y[Et]),v=St,w=Et),(K!==x||pt!==T||Gt!==b||Kt!==L)&&(i.blendFuncSeparate(D[K],D[pt],D[Gt],D[Kt]),x=K,T=pt,b=Gt,L=Kt),E=U,M=!1}function q(U,St){U.side===ti?Rt(i.CULL_FACE):Pt(i.CULL_FACE);let K=U.side===ke;St&&(K=!K),X(K),U.blending===Wr&&U.transparent===!1?N(Ei):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const pt=U.stencilWrite;c.setTest(pt),pt&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Q(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Pt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(U){R!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),R=U)}function ut(U){U!==Xg?(Pt(i.CULL_FACE),U!==$&&(U===Xu?i.cullFace(i.BACK):U===Yg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),$=U}function ct(U){U!==J&&(Z&&i.lineWidth(U),J=U)}function Q(U,St,K){U?(Pt(i.POLYGON_OFFSET_FILL),(F!==St||k!==K)&&(i.polygonOffset(St,K),F=St,k=K)):Rt(i.POLYGON_OFFSET_FILL)}function lt(U){U?Pt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function ot(U){U===void 0&&(U=i.TEXTURE0+H-1),ht!==U&&(i.activeTexture(U),ht=U)}function Tt(U,St,K){K===void 0&&(ht===null?K=i.TEXTURE0+H-1:K=ht);let pt=rt[K];pt===void 0&&(pt={type:void 0,texture:void 0},rt[K]=pt),(pt.type!==U||pt.texture!==St)&&(ht!==K&&(i.activeTexture(K),ht=K),i.bindTexture(U,St||At[U]),pt.type=U,pt.texture=St)}function A(){const U=rt[ht];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function P(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(U){gt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),gt.copy(U))}function dt(U){_t.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),_t.copy(U))}function mt(U,St){let K=h.get(St);K===void 0&&(K=new WeakMap,h.set(St,K));let pt=K.get(U);pt===void 0&&(pt=i.getUniformBlockIndex(St,U.name),K.set(U,pt))}function Lt(U,St){const pt=h.get(St).get(U);u.get(St)!==pt&&(i.uniformBlockBinding(St,pt,U.__bindingPointIndex),u.set(St,pt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ht=null,rt={},p={},g=new WeakMap,_=[],m=null,d=!1,E=null,v=null,x=null,T=null,w=null,b=null,L=null,M=!1,R=null,$=null,J=null,F=null,k=null,gt.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pt,disable:Rt,bindFramebuffer:Ht,drawBuffers:ce,useProgram:Ot,setBlending:N,setMaterial:q,setFlipSided:X,setCullFace:ut,setLineWidth:ct,setPolygonOffset:Q,setScissorTest:lt,activeTexture:ot,bindTexture:Tt,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:P,texImage3D:at,updateUBOMapping:mt,uniformBlockBinding:Lt,texStorage2D:ft,texStorage3D:j,texSubImage2D:nt,texSubImage3D:it,compressedTexSubImage2D:st,compressedTexSubImage3D:xt,scissor:yt,viewport:dt,reset:Yt}}function tE(i,t,e,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,S){return d?new OffscreenCanvas(A,S):ra("canvas")}function v(A,S,O,nt){let it=1;if((A.width>nt||A.height>nt)&&(it=nt/Math.max(A.width,A.height)),it<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const st=S?ia:Math.floor,xt=st(it*A.width),ft=st(it*A.height);_===void 0&&(_=E(xt,ft));const j=O?E(xt,ft):_;return j.width=xt,j.height=ft,j.getContext("2d").drawImage(A,0,0,xt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xt+"x"+ft+")."),j}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return jl(A.width)&&jl(A.height)}function T(A){return a?!1:A.wrapS!==Tn||A.wrapT!==Tn||A.minFilter!==He&&A.minFilter!==un}function w(A,S){return A.generateMipmaps&&S&&A.minFilter!==He&&A.minFilter!==un}function b(A){i.generateMipmap(A)}function L(A,S,O,nt,it=!1){if(a===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let st=S;return S===i.RED&&(O===i.FLOAT&&(st=i.R32F),O===i.HALF_FLOAT&&(st=i.R16F),O===i.UNSIGNED_BYTE&&(st=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(st=i.R8UI),O===i.UNSIGNED_SHORT&&(st=i.R16UI),O===i.UNSIGNED_INT&&(st=i.R32UI),O===i.BYTE&&(st=i.R8I),O===i.SHORT&&(st=i.R16I),O===i.INT&&(st=i.R32I)),S===i.RG&&(O===i.FLOAT&&(st=i.RG32F),O===i.HALF_FLOAT&&(st=i.RG16F),O===i.UNSIGNED_BYTE&&(st=i.RG8)),S===i.RGBA&&(O===i.FLOAT&&(st=i.RGBA32F),O===i.HALF_FLOAT&&(st=i.RGBA16F),O===i.UNSIGNED_BYTE&&(st=nt===zt&&it===!1?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)),(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(A,S,O){return w(A,O)===!0||A.isFramebufferTexture&&A.minFilter!==He&&A.minFilter!==un?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){return A===He||A===$u||A===Ha?i.NEAREST:i.LINEAR}function $(A){const S=A.target;S.removeEventListener("dispose",$),F(S),S.isVideoTexture&&g.delete(S)}function J(A){const S=A.target;S.removeEventListener("dispose",J),H(S)}function F(A){const S=n.get(A);if(S.__webglInit===void 0)return;const O=A.source,nt=m.get(O);if(nt){const it=nt[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&k(A),Object.keys(nt).length===0&&m.delete(O)}n.remove(A)}function k(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const O=A.source,nt=m.get(O);delete nt[S.__cacheKey],o.memory.textures--}function H(A){const S=A.texture,O=n.get(A),nt=n.get(S);if(nt.__webglTexture!==void 0&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(O.__webglFramebuffer[it]))for(let st=0;st<O.__webglFramebuffer[it].length;st++)i.deleteFramebuffer(O.__webglFramebuffer[it][st]);else i.deleteFramebuffer(O.__webglFramebuffer[it]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[it])}else{if(Array.isArray(O.__webglFramebuffer))for(let it=0;it<O.__webglFramebuffer.length;it++)i.deleteFramebuffer(O.__webglFramebuffer[it]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let it=0;it<O.__webglColorRenderbuffer.length;it++)O.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[it]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let it=0,st=S.length;it<st;it++){const xt=n.get(S[it]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(S[it])}n.remove(S),n.remove(A)}let Z=0;function B(){Z=0}function G(){const A=Z;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Z+=1,A}function ht(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function rt(A,S){const O=n.get(A);if(A.isVideoTexture&&ot(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const nt=A.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(O,A,S);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}function V(A,S){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Ht(O,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)}function Y(A,S){const O=n.get(A);if(A.version>0&&O.__version!==A.version){Ht(O,A,S);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)}function gt(A,S){const O=n.get(A);if(A.version>0&&O.__version!==A.version){ce(O,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)}const _t={[Xl]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Yl]:i.MIRRORED_REPEAT},vt={[He]:i.NEAREST,[$u]:i.NEAREST_MIPMAP_NEAREST,[Ha]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[M0]:i.LINEAR_MIPMAP_NEAREST,[Xs]:i.LINEAR_MIPMAP_LINEAR},At={[O0]:i.NEVER,[k0]:i.ALWAYS,[N0]:i.LESS,[B0]:i.LEQUAL,[F0]:i.EQUAL,[G0]:i.GEQUAL,[z0]:i.GREATER,[H0]:i.NOTEQUAL};function Pt(A,S,O){if(O?(i.texParameteri(A,i.TEXTURE_WRAP_S,_t[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,_t[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,_t[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,vt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,vt[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Tn||S.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,R(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==He&&S.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,At[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===He||S.minFilter!==Ha&&S.minFilter!==Xs||S.type===gi&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ys&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Rt(A,S){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",$));const nt=S.source;let it=m.get(nt);it===void 0&&(it={},m.set(nt,it));const st=ht(S);if(st!==A.__cacheKey){it[st]===void 0&&(it[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),it[st].usedTimes++;const xt=it[A.__cacheKey];xt!==void 0&&(it[A.__cacheKey].usedTimes--,xt.usedTimes===0&&k(S)),A.__cacheKey=st,A.__webglTexture=it[st].texture}return O}function Ht(A,S,O){let nt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(nt=i.TEXTURE_3D);const it=Rt(A,S),st=S.source;e.bindTexture(nt,A.__webglTexture,i.TEXTURE0+O);const xt=n.get(st);if(st.version!==xt.__version||it===!0){e.activeTexture(i.TEXTURE0+O),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ft=T(S)&&x(S.image)===!1;let j=v(S.image,ft,!1,u);j=Tt(S,j);const P=x(j)||a,at=s.convert(S.format,S.colorSpace);let yt=s.convert(S.type),dt=L(S.internalFormat,at,yt,S.colorSpace);Pt(nt,S,P);let mt;const Lt=S.mipmaps,Yt=a&&S.isVideoTexture!==!0,U=xt.__version===void 0||it===!0,St=M(S,j,P);if(S.isDepthTexture)dt=i.DEPTH_COMPONENT,a?S.type===gi?dt=i.DEPTH_COMPONENT32F:S.type===_i?dt=i.DEPTH_COMPONENT24:S.type===Qi?dt=i.DEPTH24_STENCIL8:dt=i.DEPTH_COMPONENT16:S.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===tr&&dt===i.DEPTH_COMPONENT&&S.type!==Fc&&S.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=_i,yt=s.convert(S.type)),S.format===ts&&dt===i.DEPTH_COMPONENT&&(dt=i.DEPTH_STENCIL,S.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Qi,yt=s.convert(S.type))),U&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,dt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,dt,j.width,j.height,0,at,yt,null));else if(S.isDataTexture)if(Lt.length>0&&P){Yt&&U&&e.texStorage2D(i.TEXTURE_2D,St,dt,Lt[0].width,Lt[0].height);for(let K=0,pt=Lt.length;K<pt;K++)mt=Lt[K],Yt?e.texSubImage2D(i.TEXTURE_2D,K,0,0,mt.width,mt.height,at,yt,mt.data):e.texImage2D(i.TEXTURE_2D,K,dt,mt.width,mt.height,0,at,yt,mt.data);S.generateMipmaps=!1}else Yt?(U&&e.texStorage2D(i.TEXTURE_2D,St,dt,j.width,j.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,at,yt,j.data)):e.texImage2D(i.TEXTURE_2D,0,dt,j.width,j.height,0,at,yt,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Yt&&U&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,dt,Lt[0].width,Lt[0].height,j.depth);for(let K=0,pt=Lt.length;K<pt;K++)mt=Lt[K],S.format!==bn?at!==null?Yt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,mt.width,mt.height,j.depth,at,mt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,dt,mt.width,mt.height,j.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,mt.width,mt.height,j.depth,at,yt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,dt,mt.width,mt.height,j.depth,0,at,yt,mt.data)}else{Yt&&U&&e.texStorage2D(i.TEXTURE_2D,St,dt,Lt[0].width,Lt[0].height);for(let K=0,pt=Lt.length;K<pt;K++)mt=Lt[K],S.format!==bn?at!==null?Yt?e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,mt.width,mt.height,at,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,dt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage2D(i.TEXTURE_2D,K,0,0,mt.width,mt.height,at,yt,mt.data):e.texImage2D(i.TEXTURE_2D,K,dt,mt.width,mt.height,0,at,yt,mt.data)}else if(S.isDataArrayTexture)Yt?(U&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,dt,j.width,j.height,j.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,at,yt,j.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,j.width,j.height,j.depth,0,at,yt,j.data);else if(S.isData3DTexture)Yt?(U&&e.texStorage3D(i.TEXTURE_3D,St,dt,j.width,j.height,j.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,at,yt,j.data)):e.texImage3D(i.TEXTURE_3D,0,dt,j.width,j.height,j.depth,0,at,yt,j.data);else if(S.isFramebufferTexture){if(U)if(Yt)e.texStorage2D(i.TEXTURE_2D,St,dt,j.width,j.height);else{let K=j.width,pt=j.height;for(let Et=0;Et<St;Et++)e.texImage2D(i.TEXTURE_2D,Et,dt,K,pt,0,at,yt,null),K>>=1,pt>>=1}}else if(Lt.length>0&&P){Yt&&U&&e.texStorage2D(i.TEXTURE_2D,St,dt,Lt[0].width,Lt[0].height);for(let K=0,pt=Lt.length;K<pt;K++)mt=Lt[K],Yt?e.texSubImage2D(i.TEXTURE_2D,K,0,0,at,yt,mt):e.texImage2D(i.TEXTURE_2D,K,dt,at,yt,mt);S.generateMipmaps=!1}else Yt?(U&&e.texStorage2D(i.TEXTURE_2D,St,dt,j.width,j.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,yt,j)):e.texImage2D(i.TEXTURE_2D,0,dt,at,yt,j);w(S,P)&&b(nt),xt.__version=st.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ce(A,S,O){if(S.image.length!==6)return;const nt=Rt(A,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const st=n.get(it);if(it.version!==st.__version||nt===!0){e.activeTexture(i.TEXTURE0+O),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const xt=S.isCompressedTexture||S.image[0].isCompressedTexture,ft=S.image[0]&&S.image[0].isDataTexture,j=[];for(let K=0;K<6;K++)!xt&&!ft?j[K]=v(S.image[K],!1,!0,c):j[K]=ft?S.image[K].image:S.image[K],j[K]=Tt(S,j[K]);const P=j[0],at=x(P)||a,yt=s.convert(S.format,S.colorSpace),dt=s.convert(S.type),mt=L(S.internalFormat,yt,dt,S.colorSpace),Lt=a&&S.isVideoTexture!==!0,Yt=st.__version===void 0||nt===!0;let U=M(S,P,at);Pt(i.TEXTURE_CUBE_MAP,S,at);let St;if(xt){Lt&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,U,mt,P.width,P.height);for(let K=0;K<6;K++){St=j[K].mipmaps;for(let pt=0;pt<St.length;pt++){const Et=St[pt];S.format!==bn?yt!==null?Lt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,Et.width,Et.height,yt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,mt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,Et.width,Et.height,yt,dt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,mt,Et.width,Et.height,0,yt,dt,Et.data)}}}else{St=S.mipmaps,Lt&&Yt&&(St.length>0&&U++,e.texStorage2D(i.TEXTURE_CUBE_MAP,U,mt,j[0].width,j[0].height));for(let K=0;K<6;K++)if(ft){Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,j[K].width,j[K].height,yt,dt,j[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,mt,j[K].width,j[K].height,0,yt,dt,j[K].data);for(let pt=0;pt<St.length;pt++){const Gt=St[pt].image[K].image;Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,Gt.width,Gt.height,yt,dt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,mt,Gt.width,Gt.height,0,yt,dt,Gt.data)}}else{Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,yt,dt,j[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,mt,yt,dt,j[K]);for(let pt=0;pt<St.length;pt++){const Et=St[pt];Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,yt,dt,Et.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,mt,yt,dt,Et.image[K])}}}w(S,at)&&b(i.TEXTURE_CUBE_MAP),st.__version=it.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ot(A,S,O,nt,it,st){const xt=s.convert(O.format,O.colorSpace),ft=s.convert(O.type),j=L(O.internalFormat,xt,ft,O.colorSpace);if(!n.get(S).__hasExternalTextures){const at=Math.max(1,S.width>>st),yt=Math.max(1,S.height>>st);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,st,j,at,yt,S.depth,0,xt,ft,null):e.texImage2D(it,st,j,at,yt,0,xt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),lt(S)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,it,n.get(O).__webglTexture,0,Q(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,it,n.get(O).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function y(A,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let nt=i.DEPTH_COMPONENT16;if(O||lt(S)){const it=S.depthTexture;it&&it.isDepthTexture&&(it.type===gi?nt=i.DEPTH_COMPONENT32F:it.type===_i&&(nt=i.DEPTH_COMPONENT24));const st=Q(S);lt(S)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,nt,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,st,nt,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,nt,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const nt=Q(S);O&&lt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,S.width,S.height):lt(S)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const nt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let it=0;it<nt.length;it++){const st=nt[it],xt=s.convert(st.format,st.colorSpace),ft=s.convert(st.type),j=L(st.internalFormat,xt,ft,st.colorSpace),P=Q(S);O&&lt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,P,j,S.width,S.height):lt(S)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P,j,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function D(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),rt(S.depthTexture,0);const nt=n.get(S.depthTexture).__webglTexture,it=Q(S);if(S.depthTexture.format===tr)lt(S)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(S.depthTexture.format===ts)lt(S)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function N(A){const S=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");D(S.__webglFramebuffer,A)}else if(O){S.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[nt]),S.__webglDepthbuffer[nt]=i.createRenderbuffer(),y(S.__webglDepthbuffer[nt],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),y(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(A,S,O){const nt=n.get(A);S!==void 0&&Ot(nt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&N(A)}function X(A){const S=A.texture,O=n.get(A),nt=n.get(S);A.addEventListener("dispose",J),A.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=S.version,o.memory.textures++);const it=A.isWebGLCubeRenderTarget===!0,st=A.isWebGLMultipleRenderTargets===!0,xt=x(A)||a;if(it){O.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(a&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ft]=[];for(let j=0;j<S.mipmaps.length;j++)O.__webglFramebuffer[ft][j]=i.createFramebuffer()}else O.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)O.__webglFramebuffer[ft]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(st)if(r.drawBuffers){const ft=A.texture;for(let j=0,P=ft.length;j<P;j++){const at=n.get(ft[j]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&lt(A)===!1){const ft=st?S:[S];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let j=0;j<ft.length;j++){const P=ft[j];O.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[j]);const at=s.convert(P.format,P.colorSpace),yt=s.convert(P.type),dt=L(P.internalFormat,at,yt,P.colorSpace,A.isXRRenderTarget===!0),mt=Q(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,dt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,O.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),y(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,S,xt);for(let ft=0;ft<6;ft++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Ot(O.__webglFramebuffer[ft][j],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,j);else Ot(O.__webglFramebuffer[ft],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);w(S,xt)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){const ft=A.texture;for(let j=0,P=ft.length;j<P;j++){const at=ft[j],yt=n.get(at);e.bindTexture(i.TEXTURE_2D,yt.__webglTexture),Pt(i.TEXTURE_2D,at,xt),Ot(O.__webglFramebuffer,A,at,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,0),w(at,xt)&&b(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ft=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,nt.__webglTexture),Pt(ft,S,xt),a&&S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Ot(O.__webglFramebuffer[j],A,S,i.COLOR_ATTACHMENT0,ft,j);else Ot(O.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ft,0);w(S,xt)&&b(ft),e.unbindTexture()}A.depthBuffer&&N(A)}function ut(A){const S=x(A)||a,O=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let nt=0,it=O.length;nt<it;nt++){const st=O[nt];if(w(st,S)){const xt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ft=n.get(st).__webglTexture;e.bindTexture(xt,ft),b(xt),e.unbindTexture()}}}function ct(A){if(a&&A.samples>0&&lt(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],O=A.width,nt=A.height;let it=i.COLOR_BUFFER_BIT;const st=[],xt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(A),j=A.isWebGLMultipleRenderTargets===!0;if(j)for(let P=0;P<S.length;P++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let P=0;P<S.length;P++){st.push(i.COLOR_ATTACHMENT0+P),A.depthBuffer&&st.push(xt);const at=ft.__ignoreDepthValues!==void 0?ft.__ignoreDepthValues:!1;if(at===!1&&(A.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),j&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[P]),at===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[xt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[xt])),j){const yt=n.get(S[P]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,yt,0)}i.blitFramebuffer(0,0,O,nt,0,0,O,nt,it,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let P=0;P<S.length;P++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,ft.__webglColorRenderbuffer[P]);const at=n.get(S[P]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}}function Q(A){return Math.min(h,A.samples)}function lt(A){const S=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ot(A){const S=o.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function Tt(A,S){const O=A.colorSpace,nt=A.format,it=A.type;return A.isCompressedTexture===!0||A.format===ql||O!==zn&&O!==nr&&(O===zt?a===!1?t.has("EXT_sRGB")===!0&&nt===bn?(A.format=ql,A.minFilter=un,A.generateMipmaps=!1):S=Wd.sRGBToLinear(S):(nt!==bn||it!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=rt,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=gt,this.rebindTextures=q,this.setupRenderTarget=X,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=lt}function eE(i,t,e){const n=e.isWebGL2;function r(s,o=nr){let a;if(s===bi)return i.UNSIGNED_BYTE;if(s===Nd)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Fd)return i.UNSIGNED_SHORT_5_5_5_1;if(s===y0)return i.BYTE;if(s===S0)return i.SHORT;if(s===Fc)return i.UNSIGNED_SHORT;if(s===Od)return i.INT;if(s===_i)return i.UNSIGNED_INT;if(s===gi)return i.FLOAT;if(s===Ys)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===E0)return i.ALPHA;if(s===bn)return i.RGBA;if(s===T0)return i.LUMINANCE;if(s===b0)return i.LUMINANCE_ALPHA;if(s===tr)return i.DEPTH_COMPONENT;if(s===ts)return i.DEPTH_STENCIL;if(s===ql)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===A0)return i.RED;if(s===Bd)return i.RED_INTEGER;if(s===w0)return i.RG;if(s===zd)return i.RG_INTEGER;if(s===Hd)return i.RGBA_INTEGER;if(s===Ga||s===ka||s===Va||s===Wa)if(o===zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ga)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ga)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Va)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zu||s===Ju||s===Qu||s===th)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Zu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ju)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===th)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===R0)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===eh||s===nh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===eh)return o===zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===nh)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===ch||s===uh||s===hh||s===fh||s===dh||s===ph||s===mh||s===_h)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ih)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rh)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sh)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===oh)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ah)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lh)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ch)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===uh)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hh)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fh)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dh)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ph)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mh)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_h)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xa)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Xa)return o===zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===C0||s===gh||s===vh||s===xh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Xa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===gh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class nE extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class bs extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iE={type:"move"};class dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new bs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class rE extends nn{constructor(t,e,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:tr,u!==tr&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===tr&&(n=_i),n===void 0&&u===ts&&(n=Qi),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class sE extends ur{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=e.getContextAttributes();let m=null,d=null;const E=[],v=[],x=new hn;x.layers.enable(1),x.viewport=new Se;const T=new hn;T.layers.enable(2),T.viewport=new Se;const w=[x,T],b=new nE;b.layers.enable(1),b.layers.enable(2);let L=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=E[V];return Y===void 0&&(Y=new dl,E[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=E[V];return Y===void 0&&(Y=new dl,E[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=E[V];return Y===void 0&&(Y=new dl,E[V]=Y),Y.getHandSpace()};function R(V){const Y=v.indexOf(V.inputSource);if(Y===-1)return;const gt=E[Y];gt!==void 0&&(gt.update(V.inputSource,V.frame,c||o),gt.dispatchEvent({type:V.type,data:V.inputSource}))}function $(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",J);for(let V=0;V<E.length;V++){const Y=v[V];Y!==null&&(v[V]=null,E[V].disconnect(Y))}L=null,M=null,t.setRenderTarget(m),p=null,f=null,h=null,r=null,d=null,rt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",$),r.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,Y),r.updateRenderState({baseLayer:p}),d=new ar(p.framebufferWidth,p.framebufferHeight,{format:bn,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,gt=null,_t=null;_.depth&&(_t=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=_.stencil?ts:tr,gt=_.stencil?Qi:_i);const vt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(vt),r.updateRenderState({layers:[f]}),d=new ar(f.textureWidth,f.textureHeight,{format:bn,type:bi,depthTexture:new rE(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const At=t.properties.get(d);At.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),rt.setContext(r),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(V){for(let Y=0;Y<V.removed.length;Y++){const gt=V.removed[Y],_t=v.indexOf(gt);_t>=0&&(v[_t]=null,E[_t].disconnect(gt))}for(let Y=0;Y<V.added.length;Y++){const gt=V.added[Y];let _t=v.indexOf(gt);if(_t===-1){for(let At=0;At<E.length;At++)if(At>=v.length){v.push(gt),_t=At;break}else if(v[At]===null){v[At]=gt,_t=At;break}if(_t===-1)break}const vt=E[_t];vt&&vt.connect(gt)}}const F=new I,k=new I;function H(V,Y,gt){F.setFromMatrixPosition(Y.matrixWorld),k.setFromMatrixPosition(gt.matrixWorld);const _t=F.distanceTo(k),vt=Y.projectionMatrix.elements,At=gt.projectionMatrix.elements,Pt=vt[14]/(vt[10]-1),Rt=vt[14]/(vt[10]+1),Ht=(vt[9]+1)/vt[5],ce=(vt[9]-1)/vt[5],Ot=(vt[8]-1)/vt[0],y=(At[8]+1)/At[0],D=Pt*Ot,N=Pt*y,q=_t/(-Ot+y),X=q*-Ot;Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(X),V.translateZ(q),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const ut=Pt+q,ct=Rt+q,Q=D-X,lt=N+(_t-X),ot=Ht*Rt/ct*ut,Tt=ce*Rt/ct*ut;V.projectionMatrix.makePerspective(Q,lt,ot,Tt,ut,ct),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Z(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;b.near=T.near=x.near=V.near,b.far=T.far=x.far=V.far,(L!==b.near||M!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,M=b.far);const Y=V.parent,gt=b.cameras;Z(b,Y);for(let _t=0;_t<gt.length;_t++)Z(gt[_t],Y);gt.length===2?H(b,x,T):b.projectionMatrix.copy(x.projectionMatrix),B(V,b,Y)};function B(V,Y,gt){gt===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(gt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const _t=V.children;for(let vt=0,At=_t.length;vt<At;vt++)_t[vt].updateMatrixWorld(!0);V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=qs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let G=null;function ht(V,Y){if(u=Y.getViewerPose(c||o),g=Y,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let _t=!1;gt.length!==b.cameras.length&&(b.cameras.length=0,_t=!0);for(let vt=0;vt<gt.length;vt++){const At=gt[vt];let Pt=null;if(p!==null)Pt=p.getViewport(At);else{const Ht=h.getViewSubImage(f,At);Pt=Ht.viewport,vt===0&&(t.setRenderTargetTextures(d,Ht.colorTexture,f.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(d))}let Rt=w[vt];Rt===void 0&&(Rt=new hn,Rt.layers.enable(vt),Rt.viewport=new Se,w[vt]=Rt),Rt.matrix.fromArray(At.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(At.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),vt===0&&(b.matrix.copy(Rt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),_t===!0&&b.cameras.push(Rt)}}for(let gt=0;gt<E.length;gt++){const _t=v[gt],vt=E[gt];_t!==null&&vt!==void 0&&vt.update(_t,Y,c||o)}G&&G(V,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const rt=new tp;rt.setAnimationLoop(ht),this.setAnimationLoop=function(V){G=V},this.dispose=function(){}}}function oE(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Zd(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,v,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ke&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ke&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ke&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function aE(i,t,e,n){let r={},s={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){const x=v.program;n.uniformBlockBinding(E,x)}function c(E,v){let x=r[E.id];x===void 0&&(g(E),x=u(E),r[E.id]=x,E.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(E,T);const w=t.render.frame;s[E.id]!==w&&(f(E),s[E.id]=w)}function u(E){const v=h();E.__bindingPointIndex=v;const x=i.createBuffer(),T=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const v=r[E.id],x=E.uniforms,T=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,b=x.length;w<b;w++){const L=x[w];if(p(L,w,T)===!0){const M=L.__offset,R=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let J=0;J<R.length;J++){const F=R[J],k=_(F);typeof F=="number"?(L.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,M+$,L.__data)):F.isMatrix3?(L.__data[0]=F.elements[0],L.__data[1]=F.elements[1],L.__data[2]=F.elements[2],L.__data[3]=F.elements[0],L.__data[4]=F.elements[3],L.__data[5]=F.elements[4],L.__data[6]=F.elements[5],L.__data[7]=F.elements[0],L.__data[8]=F.elements[6],L.__data[9]=F.elements[7],L.__data[10]=F.elements[8],L.__data[11]=F.elements[0]):(F.toArray(L.__data,$),$+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,L.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,v,x){const T=E.value;if(x[v]===void 0){if(typeof T=="number")x[v]=T;else{const w=Array.isArray(T)?T:[T],b=[];for(let L=0;L<w.length;L++)b.push(w[L].clone());x[v]=b}return!0}else if(typeof T=="number"){if(x[v]!==T)return x[v]=T,!0}else{const w=Array.isArray(x[v])?x[v]:[x[v]],b=Array.isArray(T)?T:[T];for(let L=0;L<w.length;L++){const M=w[L];if(M.equals(b[L])===!1)return M.copy(b[L]),!0}}return!1}function g(E){const v=E.uniforms;let x=0;const T=16;let w=0;for(let b=0,L=v.length;b<L;b++){const M=v[b],R={boundary:0,storage:0},$=Array.isArray(M.value)?M.value:[M.value];for(let J=0,F=$.length;J<F;J++){const k=$[J],H=_(k);R.boundary+=H.boundary,R.storage+=H.storage}if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,b>0){w=x%T;const J=T-w;w!==0&&J-R.boundary<0&&(x+=T-w,M.__offset=x)}x+=R.storage}return w=x%T,w>0&&(x+=T-w),E.__size=x,E.__cache={},this}function _(E){const v={boundary:0,storage:0};return typeof E=="number"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){const v=E.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}function lE(){const i=ra("canvas");return i.style.display="block",i}class op{constructor(t={}){const{canvas:e=lE(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;const v=this;let x=!1,T=0,w=0,b=null,L=-1,M=null;const R=new Se,$=new Se;let J=null;const F=new Zt(0);let k=0,H=e.width,Z=e.height,B=1,G=null,ht=null;const rt=new Se(0,0,H,Z),V=new Se(0,0,H,Z);let Y=!1;const gt=new Hc;let _t=!1,vt=!1,At=null;const Pt=new ie,Rt=new wt,Ht=new I,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ot(){return b===null?B:1}let y=n;function D(C,W){for(let et=0;et<C.length;et++){const z=C[et],tt=e.getContext(z,W);if(tt!==null)return tt}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oc}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",pt,!1),y===null){const W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),y=D(W,C),y===null)throw D(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),y.getShaderPrecisionFormat===void 0&&(y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let N,q,X,ut,ct,Q,lt,ot,Tt,A,S,O,nt,it,st,xt,ft,j,P,at,yt,dt,mt,Lt;function Yt(){N=new vy(y),q=new fy(y,N,t),N.init(q),dt=new eE(y,N,q),X=new QS(y,N,q),ut=new yy(y),ct=new zS,Q=new tE(y,N,X,ct,q,dt,ut),lt=new py(v),ot=new gy(v),Tt=new Lv(y,q),mt=new uy(y,N,Tt,q),A=new xy(y,Tt,ut,mt),S=new by(y,A,Tt,ut),P=new Ty(y,q,Q),xt=new dy(ct),O=new BS(v,lt,ot,N,q,mt,xt),nt=new oE(v,ct),it=new GS,st=new qS(N,q),j=new cy(v,lt,ot,X,S,f,l),ft=new JS(v,S,q),Lt=new aE(y,ut,q,X),at=new hy(y,N,ut,q),yt=new My(y,N,ut,q),ut.programs=O.programs,v.capabilities=q,v.extensions=N,v.properties=ct,v.renderLists=it,v.shadowMap=ft,v.state=X,v.info=ut}Yt();const U=new sE(v,y);this.xr=U,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const C=N.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=N.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(H,Z,!1))},this.getSize=function(C){return C.set(H,Z)},this.setSize=function(C,W,et=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,Z=W,e.width=Math.floor(C*B),e.height=Math.floor(W*B),et===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(H*B,Z*B).floor()},this.setDrawingBufferSize=function(C,W,et){H=C,Z=W,B=et,e.width=Math.floor(C*et),e.height=Math.floor(W*et),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(rt)},this.setViewport=function(C,W,et,z){C.isVector4?rt.set(C.x,C.y,C.z,C.w):rt.set(C,W,et,z),X.viewport(R.copy(rt).multiplyScalar(B).floor())},this.getScissor=function(C){return C.copy(V)},this.setScissor=function(C,W,et,z){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,W,et,z),X.scissor($.copy(V).multiplyScalar(B).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(C){X.setScissorTest(Y=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){ht=C},this.getClearColor=function(C){return C.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(C=!0,W=!0,et=!0){let z=0;if(C){let tt=!1;if(b!==null){const bt=b.texture.format;tt=bt===Hd||bt===zd||bt===Bd}if(tt){const bt=b.texture.type,Ct=bt===bi||bt===_i||bt===Fc||bt===Qi||bt===Nd||bt===Fd,Ut=j.getClearColor(),It=j.getClearAlpha(),Wt=Ut.r,Dt=Ut.g,Ft=Ut.b;Ct?(p[0]=Wt,p[1]=Dt,p[2]=Ft,p[3]=It,y.clearBufferuiv(y.COLOR,0,p)):(g[0]=Wt,g[1]=Dt,g[2]=Ft,g[3]=It,y.clearBufferiv(y.COLOR,0,g))}else z|=y.COLOR_BUFFER_BIT}W&&(z|=y.DEPTH_BUFFER_BIT),et&&(z|=y.STENCIL_BUFFER_BIT),y.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),it.dispose(),st.dispose(),ct.dispose(),lt.dispose(),ot.dispose(),S.dispose(),mt.dispose(),Lt.dispose(),O.dispose(),U.dispose(),U.removeEventListener("sessionstart",ee),U.removeEventListener("sessionend",Pn),At&&(At.dispose(),At=null),Oe.stop()};function St(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=ut.autoReset,W=ft.enabled,et=ft.autoUpdate,z=ft.needsUpdate,tt=ft.type;Yt(),ut.autoReset=C,ft.enabled=W,ft.autoUpdate=et,ft.needsUpdate=z,ft.type=tt}function pt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Et(C){const W=C.target;W.removeEventListener("dispose",Et),Gt(W)}function Gt(C){Kt(C),ct.remove(C)}function Kt(C){const W=ct.get(C).programs;W!==void 0&&(W.forEach(function(et){O.releaseProgram(et)}),C.isShaderMaterial&&O.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,et,z,tt,bt){W===null&&(W=ce);const Ct=tt.isMesh&&tt.matrixWorld.determinant()<0,Ut=fm(C,W,et,z,tt);X.setMaterial(z,Ct);let It=et.index,Wt=1;if(z.wireframe===!0){if(It=A.getWireframeAttribute(et),It===void 0)return;Wt=2}const Dt=et.drawRange,Ft=et.attributes.position;let oe=Dt.start*Wt,ue=(Dt.start+Dt.count)*Wt;bt!==null&&(oe=Math.max(oe,bt.start*Wt),ue=Math.min(ue,(bt.start+bt.count)*Wt)),It!==null?(oe=Math.max(oe,0),ue=Math.min(ue,It.count)):Ft!=null&&(oe=Math.max(oe,0),ue=Math.min(ue,Ft.count));const on=ue-oe;if(on<0||on===1/0)return;mt.setup(tt,z,Ut,et,It);let Gn,fe=at;if(It!==null&&(Gn=Tt.get(It),fe=yt,fe.setIndex(Gn)),tt.isMesh)z.wireframe===!0?(X.setLineWidth(z.wireframeLinewidth*Ot()),fe.setMode(y.LINES)):fe.setMode(y.TRIANGLES);else if(tt.isLine){let Xt=z.linewidth;Xt===void 0&&(Xt=1),X.setLineWidth(Xt*Ot()),tt.isLineSegments?fe.setMode(y.LINES):tt.isLineLoop?fe.setMode(y.LINE_LOOP):fe.setMode(y.LINE_STRIP)}else tt.isPoints?fe.setMode(y.POINTS):tt.isSprite&&fe.setMode(y.TRIANGLES);if(tt.isInstancedMesh)fe.renderInstances(oe,on,tt.count);else if(et.isInstancedBufferGeometry){const Xt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Ra=Math.min(et.instanceCount,Xt);fe.renderInstances(oe,on,Ra)}else fe.render(oe,on)},this.compile=function(C,W){function et(z,tt,bt){z.transparent===!0&&z.side===ti&&z.forceSinglePass===!1?(z.side=ke,z.needsUpdate=!0,oo(z,tt,bt),z.side=Ci,z.needsUpdate=!0,oo(z,tt,bt),z.side=ti):oo(z,tt,bt)}m=st.get(C),m.init(),E.push(m),C.traverseVisible(function(z){z.isLight&&z.layers.test(W.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(v._useLegacyLights),C.traverse(function(z){const tt=z.material;if(tt)if(Array.isArray(tt))for(let bt=0;bt<tt.length;bt++){const Ct=tt[bt];et(Ct,C,z)}else et(tt,C,z)}),E.pop(),m=null};let te=null;function ai(C){te&&te(C)}function ee(){Oe.stop()}function Pn(){Oe.start()}const Oe=new tp;Oe.setAnimationLoop(ai),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(C){te=C,U.setAnimationLoop(C),C===null?Oe.stop():Oe.start()},U.addEventListener("sessionstart",ee),U.addEventListener("sessionend",Pn),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(W),W=U.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,W,b),m=st.get(C,E.length),m.init(),E.push(m),Pt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),gt.setFromProjectionMatrix(Pt),vt=this.localClippingEnabled,_t=xt.init(this.clippingPlanes,vt),_=it.get(C,d.length),_.init(),d.push(_),uu(C,W,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,ht),this.info.render.frame++,_t===!0&&xt.beginShadows();const et=m.state.shadowsArray;if(ft.render(et,C,W),_t===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(_,C),m.setupLights(v._useLegacyLights),W.isArrayCamera){const z=W.cameras;for(let tt=0,bt=z.length;tt<bt;tt++){const Ct=z[tt];hu(_,C,Ct,Ct.viewport)}}else hu(_,C,W);b!==null&&(Q.updateMultisampleRenderTarget(b),Q.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(v,C,W),mt.resetDefaultState(),L=-1,M=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function uu(C,W,et,z){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)et=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||gt.intersectsSprite(C)){z&&Ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Pt);const Ct=S.update(C),Ut=C.material;Ut.visible&&_.push(C,Ct,Ut,et,Ht.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||gt.intersectsObject(C))){const Ct=S.update(C),Ut=C.material;if(z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ht.copy(C.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Ht.copy(Ct.boundingSphere.center)),Ht.applyMatrix4(C.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ut)){const It=Ct.groups;for(let Wt=0,Dt=It.length;Wt<Dt;Wt++){const Ft=It[Wt],oe=Ut[Ft.materialIndex];oe&&oe.visible&&_.push(C,Ct,oe,et,Ht.z,Ft)}}else Ut.visible&&_.push(C,Ct,Ut,et,Ht.z,null)}}const bt=C.children;for(let Ct=0,Ut=bt.length;Ct<Ut;Ct++)uu(bt[Ct],W,et,z)}function hu(C,W,et,z){const tt=C.opaque,bt=C.transmissive,Ct=C.transparent;m.setupLightsView(et),_t===!0&&xt.setGlobalState(v.clippingPlanes,et),bt.length>0&&hm(tt,bt,W,et),z&&X.viewport(R.copy(z)),tt.length>0&&so(tt,W,et),bt.length>0&&so(bt,W,et),Ct.length>0&&so(Ct,W,et),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function hm(C,W,et,z){const tt=q.isWebGL2;At===null&&(At=new ar(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?Ys:bi,minFilter:Xs,samples:tt?4:0})),v.getDrawingBufferSize(Rt),tt?At.setSize(Rt.x,Rt.y):At.setSize(ia(Rt.x),ia(Rt.y));const bt=v.getRenderTarget();v.setRenderTarget(At),v.getClearColor(F),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear();const Ct=v.toneMapping;v.toneMapping=Ti,so(C,et,z),Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At);let Ut=!1;for(let It=0,Wt=W.length;It<Wt;It++){const Dt=W[It],Ft=Dt.object,oe=Dt.geometry,ue=Dt.material,on=Dt.group;if(ue.side===ti&&Ft.layers.test(z.layers)){const Gn=ue.side;ue.side=ke,ue.needsUpdate=!0,fu(Ft,et,z,oe,ue,on),ue.side=Gn,ue.needsUpdate=!0,Ut=!0}}Ut===!0&&(Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At)),v.setRenderTarget(bt),v.setClearColor(F,k),v.toneMapping=Ct}function so(C,W,et){const z=W.isScene===!0?W.overrideMaterial:null;for(let tt=0,bt=C.length;tt<bt;tt++){const Ct=C[tt],Ut=Ct.object,It=Ct.geometry,Wt=z===null?Ct.material:z,Dt=Ct.group;Ut.layers.test(et.layers)&&fu(Ut,W,et,It,Wt,Dt)}}function fu(C,W,et,z,tt,bt){C.onBeforeRender(v,W,et,z,tt,bt),C.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),tt.onBeforeRender(v,W,et,z,C,bt),tt.transparent===!0&&tt.side===ti&&tt.forceSinglePass===!1?(tt.side=ke,tt.needsUpdate=!0,v.renderBufferDirect(et,W,z,tt,C,bt),tt.side=Ci,tt.needsUpdate=!0,v.renderBufferDirect(et,W,z,tt,C,bt),tt.side=ti):v.renderBufferDirect(et,W,z,tt,C,bt),C.onAfterRender(v,W,et,z,tt,bt)}function oo(C,W,et){W.isScene!==!0&&(W=ce);const z=ct.get(C),tt=m.state.lights,bt=m.state.shadowsArray,Ct=tt.state.version,Ut=O.getParameters(C,tt.state,bt,W,et),It=O.getProgramCacheKey(Ut);let Wt=z.programs;z.environment=C.isMeshStandardMaterial?W.environment:null,z.fog=W.fog,z.envMap=(C.isMeshStandardMaterial?ot:lt).get(C.envMap||z.environment),Wt===void 0&&(C.addEventListener("dispose",Et),Wt=new Map,z.programs=Wt);let Dt=Wt.get(It);if(Dt!==void 0){if(z.currentProgram===Dt&&z.lightsStateVersion===Ct)return du(C,Ut),Dt}else Ut.uniforms=O.getUniforms(C),C.onBuild(et,Ut,v),C.onBeforeCompile(Ut,v),Dt=O.acquireProgram(Ut,It),Wt.set(It,Dt),z.uniforms=Ut.uniforms;const Ft=z.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ft.clippingPlanes=xt.uniform),du(C,Ut),z.needsLights=pm(C),z.lightsStateVersion=Ct,z.needsLights&&(Ft.ambientLightColor.value=tt.state.ambient,Ft.lightProbe.value=tt.state.probe,Ft.directionalLights.value=tt.state.directional,Ft.directionalLightShadows.value=tt.state.directionalShadow,Ft.spotLights.value=tt.state.spot,Ft.spotLightShadows.value=tt.state.spotShadow,Ft.rectAreaLights.value=tt.state.rectArea,Ft.ltc_1.value=tt.state.rectAreaLTC1,Ft.ltc_2.value=tt.state.rectAreaLTC2,Ft.pointLights.value=tt.state.point,Ft.pointLightShadows.value=tt.state.pointShadow,Ft.hemisphereLights.value=tt.state.hemi,Ft.directionalShadowMap.value=tt.state.directionalShadowMap,Ft.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Ft.spotShadowMap.value=tt.state.spotShadowMap,Ft.spotLightMatrix.value=tt.state.spotLightMatrix,Ft.spotLightMap.value=tt.state.spotLightMap,Ft.pointShadowMap.value=tt.state.pointShadowMap,Ft.pointShadowMatrix.value=tt.state.pointShadowMatrix);const oe=Dt.getUniforms(),ue=Yo.seqWithValue(oe.seq,Ft);return z.currentProgram=Dt,z.uniformsList=ue,Dt}function du(C,W){const et=ct.get(C);et.outputColorSpace=W.outputColorSpace,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function fm(C,W,et,z,tt){W.isScene!==!0&&(W=ce),Q.resetTextureUnits();const bt=W.fog,Ct=z.isMeshStandardMaterial?W.environment:null,Ut=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:zn,It=(z.isMeshStandardMaterial?ot:lt).get(z.envMap||Ct),Wt=z.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Dt=!!et.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ft=!!et.morphAttributes.position,oe=!!et.morphAttributes.normal,ue=!!et.morphAttributes.color;let on=Ti;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(on=v.toneMapping);const Gn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,fe=Gn!==void 0?Gn.length:0,Xt=ct.get(z),Ra=m.state.lights;if(_t===!0&&(vt===!0||C!==M)){const Ze=C===M&&z.id===L;xt.setState(z,C,Ze)}let de=!1;z.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Ra.state.version||Xt.outputColorSpace!==Ut||tt.isInstancedMesh&&Xt.instancing===!1||!tt.isInstancedMesh&&Xt.instancing===!0||tt.isSkinnedMesh&&Xt.skinning===!1||!tt.isSkinnedMesh&&Xt.skinning===!0||tt.isInstancedMesh&&Xt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Xt.instancingColor===!1&&tt.instanceColor!==null||Xt.envMap!==It||z.fog===!0&&Xt.fog!==bt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==xt.numPlanes||Xt.numIntersection!==xt.numIntersection)||Xt.vertexAlphas!==Wt||Xt.vertexTangents!==Dt||Xt.morphTargets!==Ft||Xt.morphNormals!==oe||Xt.morphColors!==ue||Xt.toneMapping!==on||q.isWebGL2===!0&&Xt.morphTargetsCount!==fe)&&(de=!0):(de=!0,Xt.__version=z.version);let Ii=Xt.currentProgram;de===!0&&(Ii=oo(z,W,tt));let pu=!1,ds=!1,Ca=!1;const Ne=Ii.getUniforms(),Oi=Xt.uniforms;if(X.useProgram(Ii.program)&&(pu=!0,ds=!0,Ca=!0),z.id!==L&&(L=z.id,ds=!0),pu||M!==C){if(Ne.setValue(y,"projectionMatrix",C.projectionMatrix),q.logarithmicDepthBuffer&&Ne.setValue(y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,ds=!0,Ca=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Ze=Ne.map.cameraPosition;Ze!==void 0&&Ze.setValue(y,Ht.setFromMatrixPosition(C.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ne.setValue(y,"isOrthographic",C.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||tt.isSkinnedMesh)&&Ne.setValue(y,"viewMatrix",C.matrixWorldInverse)}if(tt.isSkinnedMesh){Ne.setOptional(y,tt,"bindMatrix"),Ne.setOptional(y,tt,"bindMatrixInverse");const Ze=tt.skeleton;Ze&&(q.floatVertexTextures?(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ne.setValue(y,"boneTexture",Ze.boneTexture,Q),Ne.setValue(y,"boneTextureSize",Ze.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Pa=et.morphAttributes;if((Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0&&q.isWebGL2===!0)&&P.update(tt,et,Ii),(ds||Xt.receiveShadow!==tt.receiveShadow)&&(Xt.receiveShadow=tt.receiveShadow,Ne.setValue(y,"receiveShadow",tt.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Oi.envMap.value=It,Oi.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ds&&(Ne.setValue(y,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&dm(Oi,Ca),bt&&z.fog===!0&&nt.refreshFogUniforms(Oi,bt),nt.refreshMaterialUniforms(Oi,z,B,Z,At),Yo.upload(y,Xt.uniformsList,Oi,Q)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Yo.upload(y,Xt.uniformsList,Oi,Q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ne.setValue(y,"center",tt.center),Ne.setValue(y,"modelViewMatrix",tt.modelViewMatrix),Ne.setValue(y,"normalMatrix",tt.normalMatrix),Ne.setValue(y,"modelMatrix",tt.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ze=z.uniformsGroups;for(let La=0,mm=Ze.length;La<mm;La++)if(q.isWebGL2){const mu=Ze[La];Lt.update(mu,Ii),Lt.bind(mu,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function dm(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function pm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,W,et){ct.get(C.texture).__webglTexture=W,ct.get(C.depthTexture).__webglTexture=et;const z=ct.get(C);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=et===void 0,z.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){const et=ct.get(C);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,et=0){b=C,T=W,w=et;let z=!0,tt=null,bt=!1,Ct=!1;if(C){const It=ct.get(C);It.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(y.FRAMEBUFFER,null),z=!1):It.__webglFramebuffer===void 0?Q.setupRenderTarget(C):It.__hasExternalTextures&&Q.rebindTextures(C,ct.get(C.texture).__webglTexture,ct.get(C.depthTexture).__webglTexture);const Wt=C.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ct=!0);const Dt=ct.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Dt[W])?tt=Dt[W][et]:tt=Dt[W],bt=!0):q.isWebGL2&&C.samples>0&&Q.useMultisampledRTT(C)===!1?tt=ct.get(C).__webglMultisampledFramebuffer:Array.isArray(Dt)?tt=Dt[et]:tt=Dt,R.copy(C.viewport),$.copy(C.scissor),J=C.scissorTest}else R.copy(rt).multiplyScalar(B).floor(),$.copy(V).multiplyScalar(B).floor(),J=Y;if(X.bindFramebuffer(y.FRAMEBUFFER,tt)&&q.drawBuffers&&z&&X.drawBuffers(C,tt),X.viewport(R),X.scissor($),X.setScissorTest(J),bt){const It=ct.get(C.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+W,It.__webglTexture,et)}else if(Ct){const It=ct.get(C.texture),Wt=W||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,It.__webglTexture,et||0,Wt)}L=-1},this.readRenderTargetPixels=function(C,W,et,z,tt,bt,Ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=ct.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){X.bindFramebuffer(y.FRAMEBUFFER,Ut);try{const It=C.texture,Wt=It.format,Dt=It.type;if(Wt!==bn&&dt.convert(Wt)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ft=Dt===Ys&&(N.has("EXT_color_buffer_half_float")||q.isWebGL2&&N.has("EXT_color_buffer_float"));if(Dt!==bi&&dt.convert(Dt)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===gi&&(q.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-z&&et>=0&&et<=C.height-tt&&y.readPixels(W,et,z,tt,dt.convert(Wt),dt.convert(Dt),bt)}finally{const It=b!==null?ct.get(b).__webglFramebuffer:null;X.bindFramebuffer(y.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(C,W,et=0){const z=Math.pow(2,-et),tt=Math.floor(W.image.width*z),bt=Math.floor(W.image.height*z);Q.setTexture2D(W,0),y.copyTexSubImage2D(y.TEXTURE_2D,et,0,0,C.x,C.y,tt,bt),X.unbindTexture()},this.copyTextureToTexture=function(C,W,et,z=0){const tt=W.image.width,bt=W.image.height,Ct=dt.convert(et.format),Ut=dt.convert(et.type);Q.setTexture2D(et,0),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,et.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,et.unpackAlignment),W.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,z,C.x,C.y,tt,bt,Ct,Ut,W.image.data):W.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,z,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Ct,W.mipmaps[0].data):y.texSubImage2D(y.TEXTURE_2D,z,C.x,C.y,Ct,Ut,W.image),z===0&&et.generateMipmaps&&y.generateMipmap(y.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(C,W,et,z,tt=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const bt=C.max.x-C.min.x+1,Ct=C.max.y-C.min.y+1,Ut=C.max.z-C.min.z+1,It=dt.convert(z.format),Wt=dt.convert(z.type);let Dt;if(z.isData3DTexture)Q.setTexture3D(z,0),Dt=y.TEXTURE_3D;else if(z.isDataArrayTexture)Q.setTexture2DArray(z,0),Dt=y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,z.unpackAlignment);const Ft=y.getParameter(y.UNPACK_ROW_LENGTH),oe=y.getParameter(y.UNPACK_IMAGE_HEIGHT),ue=y.getParameter(y.UNPACK_SKIP_PIXELS),on=y.getParameter(y.UNPACK_SKIP_ROWS),Gn=y.getParameter(y.UNPACK_SKIP_IMAGES),fe=et.isCompressedTexture?et.mipmaps[0]:et.image;y.pixelStorei(y.UNPACK_ROW_LENGTH,fe.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,fe.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,C.min.x),y.pixelStorei(y.UNPACK_SKIP_ROWS,C.min.y),y.pixelStorei(y.UNPACK_SKIP_IMAGES,C.min.z),et.isDataTexture||et.isData3DTexture?y.texSubImage3D(Dt,tt,W.x,W.y,W.z,bt,Ct,Ut,It,Wt,fe.data):et.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),y.compressedTexSubImage3D(Dt,tt,W.x,W.y,W.z,bt,Ct,Ut,It,fe.data)):y.texSubImage3D(Dt,tt,W.x,W.y,W.z,bt,Ct,Ut,It,Wt,fe),y.pixelStorei(y.UNPACK_ROW_LENGTH,Ft),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,oe),y.pixelStorei(y.UNPACK_SKIP_PIXELS,ue),y.pixelStorei(y.UNPACK_SKIP_ROWS,on),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Gn),tt===0&&z.generateMipmaps&&y.generateMipmap(Dt),X.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Q.setTextureCube(C,0):C.isData3DTexture?Q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Q.setTexture2DArray(C,0):Q.setTexture2D(C,0),X.unbindTexture()},this.resetState=function(){T=0,w=0,b=null,X.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?er:Gd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===er?zt:zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class cE extends op{}cE.prototype.isWebGL1Renderer=!0;class uE extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class af extends Rn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Dr=new ie,lf=new ie,Io=[],cf=new hr,hE=new ie,xs=new Xe,Ms=new hs;class fE extends Xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new af(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,hE)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Dr),cf.copy(t.boundingBox).applyMatrix4(Dr),this.boundingBox.union(cf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Dr),Ms.copy(t.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,r=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),t.ray.intersectsSphere(Ms)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Dr),lf.multiplyMatrices(n,Dr),xs.matrixWorld=lf,xs.raycast(t,Io);for(let o=0,a=Io.length;o<a;o++){const l=Io[o];l.instanceId=s,l.object=this,e.push(l)}Io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new af(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ap extends no{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const uf=new I,hf=new I,ff=new ie,pl=new zc,Oo=new hs;class dE extends Ee{constructor(t=new _n,e=new ap){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)uf.fromBufferAttribute(e,r-1),hf.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=uf.distanceTo(hf);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(r),Oo.radius+=s,t.ray.intersectsSphere(Oo)===!1)return;ff.copy(r).invert(),pl.copy(t.ray).applyMatrix4(ff);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,f=new I,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let v=d,x=E-1;v<x;v+=p){const T=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(m,T),u.fromBufferAttribute(m,w),pl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(f);L<t.near||L>t.far||e.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),E=Math.min(m.count,o.start+o.count);for(let v=d,x=E-1;v<x;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),pl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(f);w<t.near||w>t.far||e.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const df=new I,pf=new I;class pE extends dE{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)df.fromBufferAttribute(e,r),pf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+df.distanceTo(pf);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new wt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,r=[],s=[],o=[],a=new I,l=new ie;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ye(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(ye(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lp extends oi{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new wt,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class mE extends lp{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Vc(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const No=new I,ml=new Vc,_l=new Vc,gl=new Vc;class _E extends oi{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new I){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(No.subVectors(r[0],r[1]).add(r[0]),c=No);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(No.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=No),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ml.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),_l.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),gl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),_l.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),gl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(ml.calc(l),_l.calc(l),gl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new I().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function mf(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function gE(i,t){const e=1-i;return e*e*t}function vE(i,t){return 2*(1-i)*i*t}function xE(i,t){return i*i*t}function Os(i,t,e,n){return gE(i,t)+vE(i,e)+xE(i,n)}function ME(i,t){const e=1-i;return e*e*e*t}function yE(i,t){const e=1-i;return 3*e*e*i*t}function SE(i,t){return 3*(1-i)*i*i*t}function EE(i,t){return i*i*i*t}function Ns(i,t,e,n,r){return ME(i,t)+yE(i,e)+SE(i,n)+EE(i,r)}class TE extends oi{constructor(t=new wt,e=new wt,n=new wt,r=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new wt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ns(t,r.x,s.x,o.x,a.x),Ns(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cp extends oi{constructor(t=new I,e=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new I){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ns(t,r.x,s.x,o.x,a.x),Ns(t,r.y,s.y,o.y,a.y),Ns(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bE extends oi{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class AE extends oi{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wE extends oi{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Os(t,r.x,s.x,o.x),Os(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class up extends oi{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Os(t,r.x,s.x,o.x),Os(t,r.y,s.y,o.y),Os(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class RE extends oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(mf(a,l.x,c.x,u.x,h.x),mf(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new wt().fromArray(r))}return this}}var CE=Object.freeze({__proto__:null,ArcCurve:mE,CatmullRomCurve3:_E,CubicBezierCurve:TE,CubicBezierCurve3:cp,EllipseCurve:lp,LineCurve:bE,LineCurve3:AE,QuadraticBezierCurve:wE,QuadraticBezierCurve3:up,SplineCurve:RE});class Wc extends _n{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new I,u=new wt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=n+h/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class sa extends _n{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,f=new I,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const E=[],v=d/n;let x=0;d===0&&o===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){const w=T/e;h.x=-t*Math.cos(r+w*s)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(r+w*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+x,1-v),E.push(c++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const v=u[d][E+1],x=u[d][E],T=u[d+1][E],w=u[d+1][E+1];(d!==0||o>0)&&p.push(v,x,w),(d!==n-1||l<Math.PI)&&p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xc extends _n{constructor(t=new up(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new wt;let u=new I;const h=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(p,2));function _(){for(let v=0;v<e;v++)m(v);m(s===!1?e:0),E(),d()}function m(v){u=t.getPointAt(v/e,u);const x=o.normals[v],T=o.binormals[v];for(let w=0;w<=r;w++){const b=w/r*Math.PI*2,L=Math.sin(b),M=-Math.cos(b);l.x=M*x.x+L*T.x,l.y=M*x.y+L*T.y,l.z=M*x.z+L*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function d(){for(let v=1;v<=e;v++)for(let x=1;x<=r;x++){const T=(r+1)*(v-1)+(x-1),w=(r+1)*v+(x-1),b=(r+1)*v+x,L=(r+1)*(v-1)+x;g.push(T,w,L),g.push(w,b,L)}}function E(){for(let v=0;v<=e;v++)for(let x=0;x<=r;x++)c.x=v/e,c.y=x/r,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Xc(new CE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class PE extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const vl=new ie,_f=new I,gf=new I;class LE{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hc,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_f.setFromMatrixPosition(t.matrixWorld),e.position.copy(_f),gf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gf),e.updateMatrixWorld(),vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class DE extends LE{constructor(){super(new ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vf extends PE{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new DE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xf{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class UE extends pE{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new _n;r.setAttribute("position",new _e(e,3)),r.setAttribute("color",new _e(n,3));const s=new ap({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,n){const r=new Zt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);const Mf={type:"change"},xl={type:"start"},yf={type:"end"},Fo=new zc,Sf=new mi,IE=Math.cos(70*Nr.DEG2RAD);class OE extends ur{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:mr.ROTATE,TWO:mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",S),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Mf),n.update(),s=r.NONE},this.update=function(){const P=new I,at=new lr().setFromUnitVectors(t.up,new I(0,1,0)),yt=at.clone().invert(),dt=new I,mt=new lr,Lt=new I,Yt=2*Math.PI;return function(){const St=n.object.position;P.copy(St).sub(n.target),P.applyQuaternion(at),a.setFromVector3(P),n.autoRotate&&s===r.NONE&&$(M()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let K=n.minAzimuthAngle,pt=n.maxAzimuthAngle;isFinite(K)&&isFinite(pt)&&(K<-Math.PI?K+=Yt:K>Math.PI&&(K-=Yt),pt<-Math.PI?pt+=Yt:pt>Math.PI&&(pt-=Yt),K<=pt?a.theta=Math.max(K,Math.min(pt,a.theta)):a.theta=a.theta>(K+pt)/2?Math.max(K,a.theta):Math.min(pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&w||n.object.isOrthographicCamera?a.radius=ht(a.radius):a.radius=ht(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(yt),St.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Et=!1;if(n.zoomToCursor&&w){let Gt=null;if(n.object.isPerspectiveCamera){const Kt=P.length();Gt=ht(Kt*c);const te=Kt-Gt;n.object.position.addScaledVector(x,te),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Kt=new I(T.x,T.y,0);Kt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Et=!0;const te=new I(T.x,T.y,0);te.unproject(n.object),n.object.position.sub(te).add(Kt),n.object.updateMatrixWorld(),Gt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Gt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Gt).add(n.object.position):(Fo.origin.copy(n.object.position),Fo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Fo.direction))<IE?t.lookAt(n.target):(Sf.setFromNormalAndCoplanarPoint(n.object.up,n.target),Fo.intersectPlane(Sf,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Et=!0);return c=1,w=!1,Et||dt.distanceToSquared(n.object.position)>o||8*(1-mt.dot(n.object.quaternion))>o||Lt.distanceToSquared(n.target)>0?(n.dispatchEvent(Mf),dt.copy(n.object.position),mt.copy(n.object.quaternion),Lt.copy(n.target),Et=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",it),n.domElement.removeEventListener("pointerdown",ct),n.domElement.removeEventListener("pointercancel",lt),n.domElement.removeEventListener("wheel",A),n.domElement.removeEventListener("pointermove",Q),n.domElement.removeEventListener("pointerup",lt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",S),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new xf,l=new xf;let c=1;const u=new I,h=new wt,f=new wt,p=new wt,g=new wt,_=new wt,m=new wt,d=new wt,E=new wt,v=new wt,x=new I,T=new wt;let w=!1;const b=[],L={};function M(){return 2*Math.PI/60/60*n.autoRotateSpeed}function R(){return Math.pow(.95,n.zoomSpeed)}function $(P){l.theta-=P}function J(P){l.phi-=P}const F=function(){const P=new I;return function(yt,dt){P.setFromMatrixColumn(dt,0),P.multiplyScalar(-yt),u.add(P)}}(),k=function(){const P=new I;return function(yt,dt){n.screenSpacePanning===!0?P.setFromMatrixColumn(dt,1):(P.setFromMatrixColumn(dt,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(yt),u.add(P)}}(),H=function(){const P=new I;return function(yt,dt){const mt=n.domElement;if(n.object.isPerspectiveCamera){const Lt=n.object.position;P.copy(Lt).sub(n.target);let Yt=P.length();Yt*=Math.tan(n.object.fov/2*Math.PI/180),F(2*yt*Yt/mt.clientHeight,n.object.matrix),k(2*dt*Yt/mt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(yt*(n.object.right-n.object.left)/n.object.zoom/mt.clientWidth,n.object.matrix),k(dt*(n.object.top-n.object.bottom)/n.object.zoom/mt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(P){if(!n.zoomToCursor)return;w=!0;const at=n.domElement.getBoundingClientRect(),yt=P.clientX-at.left,dt=P.clientY-at.top,mt=at.width,Lt=at.height;T.x=yt/mt*2-1,T.y=-(dt/Lt)*2+1,x.set(T.x,T.y,1).unproject(t).sub(t.position).normalize()}function ht(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function rt(P){h.set(P.clientX,P.clientY)}function V(P){G(P),d.set(P.clientX,P.clientY)}function Y(P){g.set(P.clientX,P.clientY)}function gt(P){f.set(P.clientX,P.clientY),p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const at=n.domElement;$(2*Math.PI*p.x/at.clientHeight),J(2*Math.PI*p.y/at.clientHeight),h.copy(f),n.update()}function _t(P){E.set(P.clientX,P.clientY),v.subVectors(E,d),v.y>0?Z(R()):v.y<0&&B(R()),d.copy(E),n.update()}function vt(P){_.set(P.clientX,P.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(_),n.update()}function At(P){G(P),P.deltaY<0?B(R()):P.deltaY>0&&Z(R()),n.update()}function Pt(P){let at=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),at=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),at=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),at=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),at=!0;break}at&&(P.preventDefault(),n.update())}function Rt(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const P=.5*(b[0].pageX+b[1].pageX),at=.5*(b[0].pageY+b[1].pageY);h.set(P,at)}}function Ht(){if(b.length===1)g.set(b[0].pageX,b[0].pageY);else{const P=.5*(b[0].pageX+b[1].pageX),at=.5*(b[0].pageY+b[1].pageY);g.set(P,at)}}function ce(){const P=b[0].pageX-b[1].pageX,at=b[0].pageY-b[1].pageY,yt=Math.sqrt(P*P+at*at);d.set(0,yt)}function Ot(){n.enableZoom&&ce(),n.enablePan&&Ht()}function y(){n.enableZoom&&ce(),n.enableRotate&&Rt()}function D(P){if(b.length==1)f.set(P.pageX,P.pageY);else{const yt=j(P),dt=.5*(P.pageX+yt.x),mt=.5*(P.pageY+yt.y);f.set(dt,mt)}p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const at=n.domElement;$(2*Math.PI*p.x/at.clientHeight),J(2*Math.PI*p.y/at.clientHeight),h.copy(f)}function N(P){if(b.length===1)_.set(P.pageX,P.pageY);else{const at=j(P),yt=.5*(P.pageX+at.x),dt=.5*(P.pageY+at.y);_.set(yt,dt)}m.subVectors(_,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(_)}function q(P){const at=j(P),yt=P.pageX-at.x,dt=P.pageY-at.y,mt=Math.sqrt(yt*yt+dt*dt);E.set(0,mt),v.set(0,Math.pow(E.y/d.y,n.zoomSpeed)),Z(v.y),d.copy(E)}function X(P){n.enableZoom&&q(P),n.enablePan&&N(P)}function ut(P){n.enableZoom&&q(P),n.enableRotate&&D(P)}function ct(P){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",Q),n.domElement.addEventListener("pointerup",lt)),st(P),P.pointerType==="touch"?O(P):ot(P))}function Q(P){n.enabled!==!1&&(P.pointerType==="touch"?nt(P):Tt(P))}function lt(P){xt(P),b.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",Q),n.domElement.removeEventListener("pointerup",lt)),n.dispatchEvent(yf),s=r.NONE}function ot(P){let at;switch(P.button){case 0:at=n.mouseButtons.LEFT;break;case 1:at=n.mouseButtons.MIDDLE;break;case 2:at=n.mouseButtons.RIGHT;break;default:at=-1}switch(at){case pr.DOLLY:if(n.enableZoom===!1)return;V(P),s=r.DOLLY;break;case pr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;Y(P),s=r.PAN}else{if(n.enableRotate===!1)return;rt(P),s=r.ROTATE}break;case pr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;rt(P),s=r.ROTATE}else{if(n.enablePan===!1)return;Y(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(xl)}function Tt(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;gt(P);break;case r.DOLLY:if(n.enableZoom===!1)return;_t(P);break;case r.PAN:if(n.enablePan===!1)return;vt(P);break}}function A(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(xl),At(P),n.dispatchEvent(yf))}function S(P){n.enabled===!1||n.enablePan===!1||Pt(P)}function O(P){switch(ft(P),b.length){case 1:switch(n.touches.ONE){case mr.ROTATE:if(n.enableRotate===!1)return;Rt(),s=r.TOUCH_ROTATE;break;case mr.PAN:if(n.enablePan===!1)return;Ht(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case mr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ot(),s=r.TOUCH_DOLLY_PAN;break;case mr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;y(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(xl)}function nt(P){switch(ft(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;D(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;N(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;X(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ut(P),n.update();break;default:s=r.NONE}}function it(P){n.enabled!==!1&&P.preventDefault()}function st(P){b.push(P)}function xt(P){delete L[P.pointerId];for(let at=0;at<b.length;at++)if(b[at].pointerId==P.pointerId){b.splice(at,1);return}}function ft(P){let at=L[P.pointerId];at===void 0&&(at=new wt,L[P.pointerId]=at),at.set(P.pageX,P.pageY)}function j(P){const at=P.pointerId===b[0].pointerId?b[1]:b[0];return L[at.pointerId]}n.domElement.addEventListener("contextmenu",it),n.domElement.addEventListener("pointerdown",ct),n.domElement.addEventListener("pointercancel",lt),n.domElement.addEventListener("wheel",A,{passive:!1}),this.update()}}var Yc=Math.PI,Ef=Yc/2,Bo=180/Yc,zo=Yc/180,Tf=Math.atan2,Ho=Math.cos,di=Math.sin,bf=Math.sqrt;function NE(i){return i>1?Ef:i<-1?-Ef:Math.asin(i)}function Af(i){return(i=di(i/2))*i}function FE(i,t){var e=i[0]*zo,n=i[1]*zo,r=t[0]*zo,s=t[1]*zo,o=Ho(n),a=di(n),l=Ho(s),c=di(s),u=o*Ho(e),h=o*di(e),f=l*Ho(r),p=l*di(r),g=2*NE(bf(Af(s-n)+o*l*Af(r-e))),_=di(g),m=g?function(d){var E=di(d*=g)/_,v=di(g-d)/_,x=v*u+E*f,T=v*h+E*p,w=v*a+E*c;return[Tf(T,x)*Bo,Tf(w,bf(x*x+T*T))*Bo]}:function(){return[e*Bo,n*Bo]};return m.distance=g,m}function Zn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function hp(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ns={duration:.5,overwrite:!1,delay:0},qc,Ue,ae,fn=1e8,Qt=1/fn,$l=Math.PI*2,BE=$l/4,zE=0,fp=Math.sqrt,HE=Math.cos,GE=Math.sin,be=function(t){return typeof t=="string"},le=function(t){return typeof t=="function"},ii=function(t){return typeof t=="number"},jc=function(t){return typeof t>"u"},Hn=function(t){return typeof t=="object"},Ye=function(t){return t!==!1},Kc=function(){return typeof window<"u"},Go=function(t){return le(t)||be(t)},dp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ie=Array.isArray,Zl=/(?:-?\.?\d|\.)+/gi,pp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ml=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mp=/[+-]=-?[.\d]+/,_p=/[^,'"\[\]\s]+/gi,kE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,re,cn,Jl,$c,sn={},oa={},gp,vp=function(t){return(oa=cr(t,sn))&&$e},Zc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},aa=function(t,e){return!e&&console.warn(t)},xp=function(t,e){return t&&(sn[t]=e)&&oa&&(oa[t]=e)||sn},js=function(){return 0},VE={suppressEvents:!0,isStart:!0,kill:!1},qo={suppressEvents:!0,kill:!1},WE={suppressEvents:!0},Jc={},Ai=[],Ql={},Mp,tn={},yl={},wf=30,jo=[],Qc="",tu=function(t){var e=t[0],n,r;if(Hn(e)||le(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=jo.length;r--&&!jo[r].targetTest(e););n=jo[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Wp(t[r],n)))||t.splice(r,1);return t},ir=function(t){return t._gsap||tu(dn(t))[0]._gsap},yp=function(t,e,n){return(n=t[e])&&le(n)?t[e]():jc(n)&&t.getAttribute&&t.getAttribute(e)||n},qe=function(t,e){return(t=t.split(",")).forEach(e)||t},he=function(t){return Math.round(t*1e5)/1e5||0},Ae=function(t){return Math.round(t*1e7)/1e7||0},Yr=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},XE=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},la=function(){var t=Ai.length,e=Ai.slice(0),n,r;for(Ql={},Ai.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Sp=function(t,e,n,r){Ai.length&&!Ue&&la(),t.render(e,n,r||Ue&&e<0&&(t._initted||t._startAt)),Ai.length&&!Ue&&la()},Ep=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(_p).length<2?e:be(t)?t.trim():t},Tp=function(t){return t},mn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},YE=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},cr=function(t,e){for(var n in e)t[n]=e[n];return t},Rf=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Hn(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},ca=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Fs=function(t){var e=t.parent||re,n=t.keyframes?YE(Ie(t.keyframes)):mn;if(Ye(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},qE=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},bp=function(t,e,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},ba=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Li=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},rr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},jE=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},tc=function(t,e,n,r){return t._startAt&&(Ue?t._startAt.revert(qo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},KE=function i(t){return!t||t._ts&&i(t.parent)},Cf=function(t){return t._repeat?is(t._tTime,t=t.duration()+t._rDelay)*t:0},is=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ua=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Aa=function(t){return t._end=Ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||Qt)||0))},wa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ae(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Aa(t),n._dirty||rr(n,t)),t},Ap=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ua(t.rawTime(),e),(!e._dur||ro(0,e.totalDuration(),n)-e._tTime>Qt)&&e.render(n,!0)),rr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Qt}},On=function(t,e,n,r){return e.parent&&Li(e),e._start=Ae((ii(n)?n:n||t!==re?ln(t,n,e):t._time)+e._delay),e._end=Ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),bp(t,e,"_first","_last",t._sort?"_start":0),ec(e)||(t._recent=e),r||Ap(t,e),t._ts<0&&wa(t,t._tTime),t},wp=function(t,e){return(sn.ScrollTrigger||Zc("scrollTrigger",e))&&sn.ScrollTrigger.create(e,t)},Rp=function(t,e,n,r,s){if(nu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ue&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Mp!==en.frame)return Ai.push(t),t._lazy=[s,r],1},$E=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},ec=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},ZE=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&$E(t)&&!(!t._initted&&ec(t))||(t._ts<0||t._dp._ts<0)&&!ec(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ro(0,t._tDur,e),u=is(l,a),t._yoyo&&u&1&&(o=1-o),u!==is(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ue||r||t._zTime===Qt||!e&&t._zTime){if(!t._initted&&Rp(t,e,r,n,l))return;for(h=t._zTime,t._zTime=e||(n?Qt:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&tc(t,e,n,!0),t._onUpdate&&!n&&pn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&pn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Li(t,1),!n&&!Ue&&(pn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},JE=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},rs=function(t,e,n,r){var s=t._repeat,o=Ae(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ae(o*(s+1)+t._rDelay*s):o,a>0&&!r&&wa(t,t._tTime=t._tDur*a),t.parent&&Aa(t),n||rr(t.parent,t),t},Pf=function(t){return t instanceof We?rr(t):rs(t,t._dur)},QE={_start:0,endTime:js,totalDuration:js},ln=function i(t,e,n){var r=t.labels,s=t._recent||QE,o=t.duration()>=fn?s.endTime(!1):t._dur,a,l,c;return be(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ie(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Bs=function(t,e,n){var r=ii(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ye(l.vars.inherit)&&l.parent;o.immediateRender=Ye(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new me(e[0],o,e[s+1])},Ui=function(t,e){return t||t===0?e(t):e},ro=function(t,e,n){return n<t?t:n>e?e:n},De=function(t,e){return!be(t)||!(e=kE.exec(t))?"":e[1]},tT=function(t,e,n){return Ui(n,function(r){return ro(t,e,r)})},nc=[].slice,Cp=function(t,e){return t&&Hn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Hn(t[0]))&&!t.nodeType&&t!==cn},eT=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return be(r)&&!e||Cp(r,1)?(s=n).push.apply(s,dn(r)):n.push(r)})||n},dn=function(t,e,n){return ae&&!e&&ae.selector?ae.selector(t):be(t)&&!n&&(Jl||!ss())?nc.call((e||$c).querySelectorAll(t),0):Ie(t)?eT(t,n):Cp(t)?nc.call(t,0):t?[t]:[]},ic=function(t){return t=dn(t)[0]||aa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return dn(e,n.querySelectorAll?n:n===t?aa("Invalid scope")||$c.createElement("div"):t)}},Pp=function(t){return t.sort(function(){return .5-Math.random()})},Lp=function(t){if(le(t))return t;var e=Hn(t)?t:{each:t},n=sr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,h=r;return be(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,p,g){var _=(g||e).length,m=o[_],d,E,v,x,T,w,b,L,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,fn])[1],!M){for(b=-fn;b<(b=g[M++].getBoundingClientRect().left)&&M<_;);M--}for(m=o[_]=[],d=l?Math.min(M,_)*u-.5:r%M,E=M===fn?0:l?_*h/M-.5:r/M|0,b=0,L=fn,w=0;w<_;w++)v=w%M-d,x=E-(w/M|0),m[w]=T=c?Math.abs(c==="y"?x:v):fp(v*v+x*x),T>b&&(b=T),T<L&&(L=T);r==="random"&&Pp(m),m.max=b-L,m.min=L,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=De(e.amount||e.each)||0,n=n&&_<0?Gp(n):n}return _=(m[f]-m.min)/m.max||0,Ae(m.b+(n?n(_):_)*m.v)+m.u}},rc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Ae(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(ii(n)?0:De(n))}},Dp=function(t,e){var n=Ie(t),r,s;return!n&&Hn(t)&&(r=n=t.radius||fn,t.values?(t=dn(t.values),(s=!ii(t[0]))&&(r*=r)):t=rc(t.increment)),Ui(e,n?le(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=fn,u=0,h=t.length,f,p;h--;)s?(f=t[h].x-a,p=t[h].y-l,f=f*f+p*p):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?t[u]:o,s||u===o||ii(o)?u:u+De(o)}:rc(t))},Up=function(t,e,n,r){return Ui(Ie(t)?!e:n===!0?!!(n=0):!r,function(){return Ie(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},nT=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},iT=function(t,e){return function(n){return t(parseFloat(n))+(e||De(n))}},rT=function(t,e,n){return Op(t,e,0,1,n)},Ip=function(t,e,n){return Ui(n,function(r){return t[~~e(r)]})},sT=function i(t,e,n){var r=e-t;return Ie(t)?Ip(t,i(0,t.length),e):Ui(n,function(s){return(r+(s-t)%r)%r+t})},oT=function i(t,e,n){var r=e-t,s=r*2;return Ie(t)?Ip(t,i(0,t.length-1),e):Ui(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Ks=function(t){for(var e=0,n="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?_p:Zl),n+=t.substr(e,r-e)+Up(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Op=function(t,e,n,r,s){var o=e-t,a=r-n;return Ui(s,function(l){return n+((l-t)/o*a||0)})},aT=function i(t,e,n,r){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var o=be(t),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(Ie(t)&&!Ie(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(i(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else r||(t=cr(Ie(t)?[]:{},t));if(!u){for(l in e)eu.call(a,t,l,"get",e[l]);s=function(g){return su(g,a)||(o?t.p:t)}}}return Ui(n,s)},Lf=function(t,e,n){var r=t.labels,s=fn,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},pn=function(t,e,n){var r=t.vars,s=r[e],o=ae,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Ai.length&&la(),a&&(ae=a),u=l?s.apply(c,l):s.call(c),ae=o,u},As=function(t){return Li(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ue),t.progress()<1&&pn(t,"onInterrupt"),t},Gr,Np=[],Fp=function(t){if(Kc()&&t){t=!t.name&&t.default||t;var e=t.name,n=le(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:js,render:su,add:eu,kill:ET,modifier:ST,rawVars:0},o={targetTest:0,get:0,getSetter:ru,aliases:{},register:0};if(ss(),t!==r){if(tn[e])return;mn(r,mn(ca(t,s),o)),cr(r.prototype,cr(s,ca(t,o))),tn[r.prop=e]=r,t.targetTest&&(jo.push(r),Jc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}xp(e,r),t.register&&t.register($e,r,je)}else t&&Np.push(t)},Jt=255,ws={aqua:[0,Jt,Jt],lime:[0,Jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Jt],navy:[0,0,128],white:[Jt,Jt,Jt],olive:[128,128,0],yellow:[Jt,Jt,0],orange:[Jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Jt,0,0],pink:[Jt,192,203],cyan:[0,Jt,Jt],transparent:[Jt,Jt,Jt,0]},Sl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Jt+.5|0},Bp=function(t,e,n){var r=t?ii(t)?[t>>16,t>>8&Jt,t&Jt]:0:ws.black,s,o,a,l,c,u,h,f,p,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ws[t])r=ws[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Jt,r&Jt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Jt,t&Jt]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(Zl),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Sl(l+1/3,s,o),r[1]=Sl(l,s,o),r[2]=Sl(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(pp),n&&r.length<4&&(r[3]=1),r}else r=t.match(Zl)||ws.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/Jt,o=r[1]/Jt,a=r[2]/Jt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},zp=function(t){var e=[],n=[],r=-1;return t.split(wi).forEach(function(s){var o=s.match(Hr)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},Df=function(t,e,n){var r="",s=(t+r).match(wi),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Bp(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=zp(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(wi,"1").split(Hr),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(wi),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},wi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ws)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),lT=/hsl[a]?\(/,Hp=function(t){var e=t.join(" "),n;if(wi.lastIndex=0,wi.test(e))return n=lT.test(e),t[1]=Df(t[1],n),t[0]=Df(t[0],n,zp(t[1])),!0},$s,en=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,p,g=function _(m){var d=i()-r,E=m===!0,v,x,T,w;if(d>t&&(n+=d-e),r+=d,T=r-n,v=T-o,(v>0||E)&&(w=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,o+=v+(v>=s?4:s-v),x=1),E||(l=c(_)),x)for(p=0;p<a.length;p++)a[p](T,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){gp&&(!Jl&&Kc()&&(cn=Jl=window,$c=cn.document||{},sn.gsap=$e,(cn.gsapVersions||(cn.gsapVersions=[])).push($e.version),vp(oa||cn.GreenSockGlobals||!cn.gsap&&cn||{}),u=cn.requestAnimationFrame,Np.forEach(Fp)),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},$s=1,g(2))},sleep:function(){(u?cn.cancelAnimationFrame:clearTimeout)(l),$s=0,c=js},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,d,E){var v=d?function(x,T,w,b){m(x,T,w,b),h.remove(v)}:m;return h.remove(m),a[E?"unshift":"push"](v),ss(),v},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},h}(),ss=function(){return!$s&&en.wake()},qt={},cT=/^[\d.\-M][\d.\-,\s]/,uT=/["']/g,hT=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(uT,"").trim():+c,r=l.substr(a+1).trim();return e},fT=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},dT=function(t){var e=(t+"").split("("),n=qt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[hT(e[1])]:fT(t).split(",").map(Ep)):qt._CE&&cT.test(t)?qt._CE("",t):n},Gp=function(t){return function(e){return 1-t(1-e)}},kp=function i(t,e){for(var n=t._first,r;n;)n instanceof We?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},sr=function(t,e){return t&&(le(t)?t:qt[t]||dT(t))||e},fr=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return qe(t,function(a){qt[a]=sn[a]=s,qt[o=a.toLowerCase()]=n;for(var l in s)qt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qt[a+"."+l]=s[l]}),s},Vp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},El=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/$l*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*GE((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Vp(a);return s=$l/s,l.config=function(c,u){return i(t,c,u)},l},Tl=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Vp(n);return r.config=function(s){return i(t,s)},r};qe("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;fr(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});qt.Linear.easeNone=qt.none=qt.Linear.easeIn;fr("Elastic",El("in"),El("out"),El());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};fr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);fr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});fr("Circ",function(i){return-(fp(1-i*i)-1)});fr("Sine",function(i){return i===1?1:-HE(i*BE)+1});fr("Back",Tl("in"),Tl("out"),Tl());qt.SteppedEase=qt.steps=sn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-Qt;return function(a){return((r*ro(0,o,a)|0)+s)*n}}};ns.ease=qt["quad.out"];qe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Qc+=i+","+i+"Params,"});var Wp=function(t,e){this.id=zE++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:yp,this.set=e?e.getSetter:ru},Zs=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,rs(this,+e.duration,1,1),this.data=e.data,ae&&(this._ctx=ae,ae.data.push(this)),$s||en.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,rs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(ss(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(wa(this,n),!s._dp||s.parent||Ap(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&On(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Qt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sp(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Cf(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Cf(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?is(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Qt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ua(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Qt?0:this._rts,this.totalTime(ro(-Math.abs(this._delay),this._tDur,r),!0),Aa(this),jE(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ss(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Qt&&(this._tTime-=Qt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&On(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ye(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ua(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=WE);var r=Ue;return Ue=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ue=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Pf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Pf(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(ln(this,n),Ye(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Ye(r))},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Qt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Qt,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Qt)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this;return new Promise(function(s){var o=le(n)?n:Tp,a=function(){var c=r.then;r.then=null,le(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){As(this)},i}();mn(Zs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Qt,_prom:0,_ps:!1,_rts:1});var We=function(i){hp(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ye(n.sortChildren),re&&On(n.parent||re,Zn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&wp(Zn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Bs(0,arguments,this),this},e.from=function(r,s,o){return Bs(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Bs(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,Fs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new me(r,s,ln(this,o),1),this},e.call=function(r,s,o){return On(this,me.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new me(r,o,ln(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Fs(o).immediateRender=Ye(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Fs(a).immediateRender=Ye(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ae(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,p,g,_,m,d,E,v,x,T,w,b;if(this!==re&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,x=this._start,v=this._ts,d=!v,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ae(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),T=is(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),w&&_&1&&(f=c-f,b=1),_!==T&&!this._lock){var L=w&&T&1,M=L===(w&&_&1);if(_<T&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Ae(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&pn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;kp(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=JE(this,Ae(a),Ae(f)),E&&(u-=f-(f=E._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!_&&(pn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&E!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!d){E=0,g&&(u+=this._zTime=-Qt);break}}p=g}else{p=this._last;for(var R=r<0?r:f;p;){if(g=p._prev,(p._act||R<=p._end)&&p._ts&&E!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(R-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(R-p._start)*p._ts,s,o||Ue&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){E=0,g&&(u+=this._zTime=R?-Qt:Qt);break}}p=g}}if(E&&!s&&(this.pause(),E.render(f>=a?0:-Qt)._zTime=f>=a?1:-1,this._ts))return this._start=x,Aa(this),this.render(r,s,o);this._onUpdate&&!s&&pn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Li(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(pn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(ii(s)||(s=ln(this,s,r)),!(r instanceof Zs)){if(Ie(r))return r.forEach(function(a){return o.add(a,s)}),this;if(be(r))return this.addLabel(r,s);if(le(r))r=me.delayedCall(0,r);else return this}return this!==r?On(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-fn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof me?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return be(r)?this.removeLabel(r):le(r)?this.killTweensOf(r):(ba(this,r),r===this._recent&&(this._recent=this._last),rr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ae(en.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=ln(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=me.delayedCall(0,s||js,o);return a.data="isPause",this._hasPause=1,On(this,a,ln(this,r))},e.removePause=function(r){var s=this._first;for(r=ln(this,r);s;)s._start===r&&s.data==="isPause"&&Li(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)vi!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=dn(r),l=this._first,c=ii(s),u;l;)l instanceof me?XE(l._targets,a)&&(c?(!vi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=ln(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=me.to(o,mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Qt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&rs(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,mn({startAt:{time:ln(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Lf(this,ln(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Lf(this,ln(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Qt)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return rr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),rr(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=fn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,On(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;rs(o,o===re&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(re._ts&&(Sp(re,ua(r,re)),Mp=en.frame),en.frame>=wf){wf+=rn.autoSleep||120;var s=re._first;if((!s||!s._ts)&&rn.autoSleep&&en._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||en.sleep()}}},t}(Zs);mn(We.prototype,{_lock:0,_hasPause:0,_forcing:0});var pT=function(t,e,n,r,s,o,a){var l=new je(this._pt,t,e,0,1,$p,null,s),c=0,u=0,h,f,p,g,_,m,d,E;for(l.b=n,l.e=r,n+="",r+="",(d=~r.indexOf("random("))&&(r=Ks(r)),o&&(E=[n,r],o(E,t,e),n=E[0],r=E[1]),f=n.match(Ml)||[];h=Ml.exec(r);)g=h[0],_=r.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Yr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Ml.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(mp.test(r)||d)&&(l.e=0),this._pt=l,l},eu=function(t,e,n,r,s,o,a,l,c,u){le(r)&&(r=r(s||0,t,o));var h=t[e],f=n!=="get"?n:le(h)?c?t[e.indexOf("set")||!le(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=le(h)?c?xT:jp:iu,g;if(be(r)&&(~r.indexOf("random(")&&(r=Ks(r)),r.charAt(1)==="="&&(g=Yr(f,r)+(De(f)||0),(g||g===0)&&(r=g))),!u||f!==r||sc)return!isNaN(f*r)&&r!==""?(g=new je(this._pt,t,e,+f||0,r-(f||0),typeof h=="boolean"?yT:Kp,0,p),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&Zc(e,r),pT.call(this,t,e,f,r,p,l||rn.stringFilter,c))},mT=function(t,e,n,r,s){if(le(t)&&(t=zs(t,s,e,n,r)),!Hn(t)||t.style&&t.nodeType||Ie(t)||dp(t))return be(t)?zs(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=zs(t[a],s,e,n,r);return o},Xp=function(t,e,n,r,s,o){var a,l,c,u;if(tn[t]&&(a=new tn[t]).init(s,a.rawVars?e[t]:mT(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new je(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Gr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},vi,sc,nu=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,h=r.callbackScope,f=r.runBackwards,p=r.yoyoEase,g=r.keyframes,_=r.autoRevert,m=t._dur,d=t._startAt,E=t._targets,v=t.parent,x=v&&v.data==="nested"?v.vars.targets:E,T=t._overwrite==="auto"&&!qc,w=t.timeline,b,L,M,R,$,J,F,k,H,Z,B,G,ht;if(w&&(!g||!s)&&(s="none"),t._ease=sr(s,ns.ease),t._yEase=p?Gp(sr(p===!0?s:p,ns.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!w&&!!r.runBackwards,!w||g&&!r.stagger){if(k=E[0]?ir(E[0]).harness:0,G=k&&r[k.prop],b=ca(r,Jc),d&&(d._zTime<0&&d.progress(1),e<0&&f&&a&&!_?d.render(-1,!0):d.revert(f&&m?qo:VE),d._lazy=0),o){if(Li(t._startAt=me.set(E,mn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!d&&Ye(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ue||!a&&!_)&&t._startAt.revert(qo),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&m&&!d){if(e&&(a=!1),M=mn({overwrite:!1,data:"isFromStart",lazy:a&&!d&&Ye(l),immediateRender:a,stagger:0,parent:v},b),G&&(M[k.prop]=G),Li(t._startAt=me.set(E,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ue?t._startAt.revert(qo):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,Qt,Qt);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Ye(l)||l&&!m,L=0;L<E.length;L++){if($=E[L],F=$._gsap||tu(E)[L]._gsap,t._ptLookup[L]=Z={},Ql[F.id]&&Ai.length&&la(),B=x===E?L:x.indexOf($),k&&(H=new k).init($,G||b,t,B,x)!==!1&&(t._pt=R=new je(t._pt,$,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(rt){Z[rt]=R}),H.priority&&(J=1)),!k||G)for(M in b)tn[M]&&(H=Xp(M,b,t,B,$,x))?H.priority&&(J=1):Z[M]=R=eu.call(t,$,M,"get",b[M],B,x,0,r.stringFilter);t._op&&t._op[L]&&t.kill($,t._op[L]),T&&t._pt&&(vi=t,re.killTweensOf($,Z,t.globalTime(e)),ht=!t.parent,vi=0),t._pt&&l&&(Ql[F.id]=1)}J&&Zp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!ht,g&&e<=0&&w.render(fn,!0,!0)},_T=function(t,e,n,r,s,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return sc=1,t.vars[e]="+=0",nu(t,a),sc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=he(n)+De(u.e)),u.b&&(u.b=c.s+De(u.b))},gT=function(t,e){var n=t[0]?ir(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=cr({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},vT=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(Ie(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},zs=function(t,e,n,r,s){return le(t)?t.call(e,n,r,s):be(t)&&~t.indexOf("random(")?Ks(t):t},Yp=Qc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",qp={};qe(Yp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return qp[i]=1});var me=function(i){hp(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Fs(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,E=r.parent||re,v=(Ie(n)||dp(n)?ii(n[0]):"length"in r)?[n]:dn(n),x,T,w,b,L,M,R,$;if(a._targets=v.length?tu(v):aa("GSAP target "+n+" not found. https://greensock.com",!rn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||Go(c)||Go(u)){if(r=a.vars,x=a.timeline=new We({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:v}),x.kill(),x.parent=x._dp=Zn(a),x._start=0,f||Go(c)||Go(u)){if(b=v.length,R=f&&Lp(f),Hn(f))for(L in f)~Yp.indexOf(L)&&($||($={}),$[L]=f[L]);for(T=0;T<b;T++)w=ca(r,qp),w.stagger=0,d&&(w.yoyoEase=d),$&&cr(w,$),M=v[T],w.duration=+zs(c,Zn(a),T,M,v),w.delay=(+zs(u,Zn(a),T,M,v)||0)-a._delay,!f&&b===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),x.to(M,w,R?R(T,M,v):0),x._ease=qt.none;x.duration()?c=u=0:a.timeline=0}else if(g){Fs(mn(x.vars.defaults,{ease:"none"})),x._ease=sr(g.ease||r.ease||"none");var J=0,F,k,H;if(Ie(g))g.forEach(function(Z){return x.to(v,Z,">")}),x.duration();else{w={};for(L in g)L==="ease"||L==="easeEach"||vT(L,g[L],w,g.easeEach);for(L in w)for(F=w[L].sort(function(Z,B){return Z.t-B.t}),J=0,T=0;T<F.length;T++)k=F[T],H={ease:k.e,duration:(k.t-(T?F[T-1].t:0))/100*c},H[L]=k.v,x.to(v,H,J),J+=H.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return p===!0&&!qc&&(vi=Zn(a),re.killTweensOf(v),vi=0),On(E,Zn(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===Ae(E._time)&&Ye(h)&&KE(Zn(a))&&E.data!=="nested")&&(a._tTime=-Qt,a.render(Math.max(0,-u)||0)),m&&wp(Zn(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Qt&&!u?l:r<Qt?0:r,f,p,g,_,m,d,E,v,x;if(!c)ZE(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=Ae(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===h/_&&(f=c,g--),f>c&&(f=c)),d=this._yoyo&&g&1,d&&(x=this._yEase,f=c-f),m=is(this._tTime,_),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(v&&this._yEase&&kp(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=o=1,this.render(Ae(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Rp(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(x||this._ease)(f/c),this._from&&(this.ratio=E=1-E),f&&!a&&!s&&!g&&(pn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(E,p.d),p=p._next;v&&v.render(r<0?r:!f&&d?-Qt:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&tc(this,r,s,o),pn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&pn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&tc(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Li(this,1),!s&&!(u&&!a)&&(h||a||d)&&(pn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a){$s||en.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||nu(this,l),c=this._ease(l/this._dur),_T(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(wa(this,0),this.parent||bp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?As(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,vi&&vi.vars.overwrite!==!0)._first||As(this),this.parent&&o!==this.timeline.totalDuration()&&rs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?dn(r):a,c=this._ptLookup,u=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&qE(a,l))return s==="all"&&(this._pt=0),As(this);for(h=this._op=this._op||[],s!=="all"&&(be(s)&&(_={},qe(s,function(E){return _[E]=1}),s=_),s=gT(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=c[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ba(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&As(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Bs(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Bs(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return re.killTweensOf(r,s,o)},t}(Zs);mn(me.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});qe("staggerTo,staggerFrom,staggerFromTo",function(i){me[i]=function(){var t=new We,e=nc.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var iu=function(t,e,n){return t[e]=n},jp=function(t,e,n){return t[e](n)},xT=function(t,e,n,r){return t[e](r.fp,n)},MT=function(t,e,n){return t.setAttribute(e,n)},ru=function(t,e){return le(t[e])?jp:jc(t[e])&&t.setAttribute?MT:iu},Kp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},yT=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},$p=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},su=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},ST=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},ET=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?ba(this,e,"_pt"):e.dep||(n=1),e=r;return!n},TT=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Zp=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},je=function(){function i(e,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Kp,this.d=l||this,this.set=c||iu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=TT,this.m=n,this.mt=s,this.tween=r},i}();qe(Qc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Jc[i]=1});sn.TweenMax=sn.TweenLite=me;sn.TimelineLite=sn.TimelineMax=We;re=new We({sortChildren:!1,defaults:ns,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});rn.stringFilter=Hp;var or=[],Ko={},bT=[],Uf=0,AT=0,bl=function(t){return(Ko[t]||bT).map(function(e){return e()})},oc=function(){var t=Date.now(),e=[];t-Uf>2&&(bl("matchMediaInit"),or.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=cn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),bl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Uf=t,bl("matchMedia"))},Jp=function(){function i(e,n){this.selector=n&&ic(n),this.data=[],this._r=[],this.isReverted=!1,this.id=AT++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){le(n)&&(s=r,r=n,n=le);var o=this,a=function(){var c=ae,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=ic(s)),ae=o,h=r.apply(o,arguments),le(h)&&o._r.push(h),ae=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===le?a(o):n?o[n]=a:a},t.ignore=function(n){var r=ae;ae=null,n(this),ae=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof me&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof me)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var a=or.length;a--;)or[a].id===this.id&&or.splice(a,1)},t.revert=function(n){this.kill(n||{})},i}(),wT=function(){function i(e){this.contexts=[],this.scope=e}var t=i.prototype;return t.add=function(n,r,s){Hn(n)||(n={matches:n});var o=new Jp(0,s||this.scope),a=o.conditions={},l,c,u;ae&&!o.selector&&(o.selector=ae.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=cn.matchMedia(n[c]),l&&(or.indexOf(o)<0&&or.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(oc):l.addEventListener("change",oc)));return u&&r(o),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ha={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return Fp(r)})},timeline:function(t){return new We(t)},getTweensOf:function(t,e){return re.getTweensOf(t,e)},getProperty:function(t,e,n,r){be(t)&&(t=dn(t)[0]);var s=ir(t||{}).get,o=n?Tp:Ep;return n==="native"&&(n=""),t&&(e?o((tn[e]&&tn[e].get||s)(t,e,n,r)):function(a,l,c){return o((tn[a]&&tn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=dn(t),t.length>1){var r=t.map(function(u){return $e.quickSetter(u,e,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var o=tn[e],a=ir(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Gr._pt=0,h.init(t,n?u+n:u,Gr,0,[t]),h.render(1,h),Gr._pt&&su(1,Gr)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var r,s=$e.to(t,cr((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=sr(t.ease,ns.ease)),Rf(ns,t||{})},config:function(t){return Rf(rn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!tn[a]&&!sn[a]&&aa(e+" effect requires "+a+" plugin.")}),yl[e]=function(a,l,c){return n(dn(a),mn(l||{},s),c)},o&&(We.prototype[e]=function(a,l,c){return this.add(yl[e](a,Hn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){qt[t]=sr(e)},parseEase:function(t,e){return arguments.length?sr(t,e):qt},getById:function(t){return re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new We(t),r,s;for(n.smoothChildTiming=Ye(t.smoothChildTiming),re.remove(n),n._dp=0,n._time=n._tTime=re._time,r=re._first;r;)s=r._next,(e||!(!r._dur&&r instanceof me&&r.vars.onComplete===r._targets[0]))&&On(n,r,r._start-r._delay),r=s;return On(re,n,0),n},context:function(t,e){return t?new Jp(t,e):ae},matchMedia:function(t){return new wT(t)},matchMediaRefresh:function(){return or.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||oc()},addEventListener:function(t,e){var n=Ko[t]||(Ko[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ko[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:sT,wrapYoyo:oT,distribute:Lp,random:Up,snap:Dp,normalize:rT,getUnit:De,clamp:tT,splitColor:Bp,toArray:dn,selector:ic,mapRange:Op,pipe:nT,unitize:iT,interpolate:aT,shuffle:Pp},install:vp,effects:yl,ticker:en,updateRoot:We.updateRoot,plugins:tn,globalTimeline:re,core:{PropTween:je,globals:xp,Tween:me,Timeline:We,Animation:Zs,getCache:ir,_removeLinkedListItem:ba,reverting:function(){return Ue},context:function(t){return t&&ae&&(ae.data.push(t),t._ctx=ae),ae},suppressOverwrites:function(t){return qc=t}}};qe("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ha[i]=me[i]});en.add(We.updateRoot);Gr=ha.to({},{duration:0});var RT=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},CT=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=RT(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},Al=function(t,e){return{name:t,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(be(s)&&(l={},qe(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}CT(a,s)}}}},$e=ha.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ue?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Al("roundProps",rc),Al("modifiers"),Al("snap",Dp))||ha;me.version=We.version=$e.version="3.12.2";gp=1;Kc()&&ss();qt.Power0;qt.Power1;qt.Power2;qt.Power3;qt.Power4;qt.Linear;qt.Quad;qt.Cubic;qt.Quart;qt.Quint;qt.Strong;qt.Elastic;qt.Back;qt.SteppedEase;qt.Bounce;qt.Sine;qt.Expo;qt.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var If,xi,qr,ou,Ki,Of,au,PT=function(){return typeof window<"u"},ri={},Xi=180/Math.PI,jr=Math.PI/180,Ur=Math.atan2,Nf=1e8,lu=/([A-Z])/g,LT=/(left|right|width|margin|padding|x)/i,DT=/[\s,\(]\S/,Fn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ac=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},UT=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},IT=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},OT=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Qp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},tm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},NT=function(t,e,n){return t.style[e]=n},FT=function(t,e,n){return t.style.setProperty(e,n)},BT=function(t,e,n){return t._gsap[e]=n},zT=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},HT=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},GT=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},se="transform",Cn=se+"Origin",kT=function i(t,e){var n=this,r=this.target,s=r.style;if(t in ri&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Fn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Qn(r,o)}):this.tfm[t]=r._gsap.x?r._gsap[t]:Qn(r,t);else return Fn.transform.split(",").forEach(function(o){return i.call(n,o,e)});if(this.props.indexOf(se)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Cn,e,"")),t=se}(s||e)&&this.props.push(t,e,s[t])},em=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},VT=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(lu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=au(),(!s||!s.isStart)&&!n[se]&&(em(n),r.uncache=1)}},nm=function(t,e){var n={target:t,props:[],revert:VT,save:kT};return t._gsap||$e.core.getCache(t),e&&e.split(",").forEach(function(r){return n.save(r)}),n},im,lc=function(t,e){var n=xi.createElementNS?xi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):xi.createElement(t);return n.style?n:xi.createElement(t)},Bn=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(lu,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,os(e)||e,1)||""},Ff="O,Moz,ms,Ms,Webkit".split(","),os=function(t,e,n){var r=e||Ki,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ff[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Ff[o]:"")+t},cc=function(){PT()&&window.document&&(If=window,xi=If.document,qr=xi.documentElement,Ki=lc("div")||{style:{}},lc("div"),se=os(se),Cn=se+"Origin",Ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",im=!!os("perspective"),au=$e.core.reverting,ou=1)},wl=function i(t){var e=lc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(qr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),qr.removeChild(e),this.style.cssText=s,o},Bf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},rm=function(t){var e;try{e=t.getBBox()}catch{e=wl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===wl||(e=wl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Bf(t,["x","cx","x1"])||0,y:+Bf(t,["y","cy","y1"])||0,width:0,height:0}:e},sm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&rm(t))},Js=function(t,e){if(e){var n=t.style;e in ri&&e!==Cn&&(e=se),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(lu,"-$1").toLowerCase())):n.removeAttribute(e)}},Mi=function(t,e,n,r,s,o){var a=new je(t._pt,e,n,0,1,o?tm:Qp);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},zf={deg:1,rad:1,turn:1},WT={grid:1,flex:1},Di=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ki.style,l=LT.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,_,m,d;return r===o||!s||zf[r]||zf[o]?s:(o!=="px"&&!f&&(s=i(t,e,n,"px")),d=t.getCTM&&sm(t),(p||o==="%")&&(ri[e]||~e.indexOf("adius"))?(g=d?t.getBBox()[l?"width":"height"]:t[u],he(p?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(f?o:r),_=~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===xi||!_.appendChild)&&(_=xi.body),m=_._gsap,m&&p&&m.width&&l&&m.time===en.time&&!m.uncache?he(s/m.width*h):((p||o==="%")&&!WT[Bn(_,"display")]&&(a.position=Bn(t,"position")),_===t&&(a.position="static"),_.appendChild(Ki),g=Ki[u],_.removeChild(Ki),a.position="absolute",l&&p&&(m=ir(_),m.time=en.time,m.width=_[u]),he(f?g*s/h:g&&s?h/g*s:0))))},Qn=function(t,e,n,r){var s;return ou||cc(),e in Fn&&e!=="transform"&&(e=Fn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ri[e]&&e!=="transform"?(s=to(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:da(Bn(t,Cn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=fa[e]&&fa[e](t,e,n)||Bn(t,e)||yp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Di(t,e,s,n)+n:s},XT=function(t,e,n,r){if(!n||n==="none"){var s=os(e,t,1),o=s&&Bn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Bn(t,"borderTopColor"))}var a=new je(this._pt,t.style,e,0,1,$p),l=0,c=0,u,h,f,p,g,_,m,d,E,v,x,T;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(t.style[e]=r,r=Bn(t,e)||r,t.style[e]=n),u=[n,r],Hp(u),n=u[0],r=u[1],f=n.match(Hr)||[],T=r.match(Hr)||[],T.length){for(;h=Hr.exec(r);)m=h[0],E=r.substring(l,h.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,x=_.substr((p+"").length),m.charAt(1)==="="&&(m=Yr(p,m)+x),d=parseFloat(m),v=m.substr((d+"").length),l=Hr.lastIndex-v.length,v||(v=v||rn.units[e]||x,l===r.length&&(r+=v,a.e+=v)),x!==v&&(p=Di(t,e,_,v)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?tm:Qp;return mp.test(r)&&(a.e=0),this._pt=a,a},Hf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},YT=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=Hf[n]||n,e[1]=Hf[r]||r,e.join(" ")},qT=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ri[a]&&(l=1,a=a==="transformOrigin"?Cn:se),Js(n,a);l&&(Js(n,se),o&&(o.svg&&n.removeAttribute("transform"),to(n,1),o.uncache=1,em(r)))}},fa={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new je(t._pt,e,n,0,0,qT);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},Qs=[1,0,0,1,0,0],om={},am=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Gf=function(t){var e=Bn(t,se);return am(e)?Qs:e.substr(7).match(pp).map(he)},cu=function(t,e){var n=t._gsap||ir(t),r=t.style,s=Gf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Qs:s):(s===Qs&&!t.offsetParent&&t!==qr&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,qr.appendChild(t)),s=Gf(t),l?r.display=l:Js(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):qr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},uc=function(t,e,n,r,s,o){var a=t._gsap,l=s||cu(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],E=l[5],v=e.split(" "),x=parseFloat(v[0])||0,T=parseFloat(v[1])||0,w,b,L,M;n?l!==Qs&&(b=p*m-g*_)&&(L=x*(m/b)+T*(-_/b)+(_*E-m*d)/b,M=x*(-g/b)+T*(p/b)-(p*E-g*d)/b,x=L,T=M):(w=rm(t),x=w.x+(~v[0].indexOf("%")?x/100*w.width:x),T=w.y+(~(v[1]||v[0]).indexOf("%")?T/100*w.height:T)),r||r!==!1&&a.smooth?(d=x-c,E=T-u,a.xOffset=h+(d*p+E*_)-d,a.yOffset=f+(d*g+E*m)-E):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=T,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[Cn]="0px 0px",o&&(Mi(o,a,"xOrigin",c,x),Mi(o,a,"yOrigin",u,T),Mi(o,a,"xOffset",h,a.xOffset),Mi(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+T)},to=function(t,e){var n=t._gsap||new Wp(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Bn(t,Cn)||"0",u,h,f,p,g,_,m,d,E,v,x,T,w,b,L,M,R,$,J,F,k,H,Z,B,G,ht,rt,V,Y,gt,_t,vt;return u=h=f=_=m=d=E=v=x=0,p=g=1,n.svg=!!(t.getCTM&&sm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[se]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[se]!=="none"?l[se]:"")),r.scale=r.rotate=r.translate="none"),b=cu(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),uc(t,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,b)),T=n.xOrigin||0,w=n.yOrigin||0,b!==Qs&&($=b[0],J=b[1],F=b[2],k=b[3],u=H=b[4],h=Z=b[5],b.length===6?(p=Math.sqrt($*$+J*J),g=Math.sqrt(k*k+F*F),_=$||J?Ur(J,$)*Xi:0,E=F||k?Ur(F,k)*Xi+_:0,E&&(g*=Math.abs(Math.cos(E*jr))),n.svg&&(u-=T-(T*$+w*F),h-=w-(T*J+w*k))):(vt=b[6],gt=b[7],rt=b[8],V=b[9],Y=b[10],_t=b[11],u=b[12],h=b[13],f=b[14],L=Ur(vt,Y),m=L*Xi,L&&(M=Math.cos(-L),R=Math.sin(-L),B=H*M+rt*R,G=Z*M+V*R,ht=vt*M+Y*R,rt=H*-R+rt*M,V=Z*-R+V*M,Y=vt*-R+Y*M,_t=gt*-R+_t*M,H=B,Z=G,vt=ht),L=Ur(-F,Y),d=L*Xi,L&&(M=Math.cos(-L),R=Math.sin(-L),B=$*M-rt*R,G=J*M-V*R,ht=F*M-Y*R,_t=k*R+_t*M,$=B,J=G,F=ht),L=Ur(J,$),_=L*Xi,L&&(M=Math.cos(L),R=Math.sin(L),B=$*M+J*R,G=H*M+Z*R,J=J*M-$*R,Z=Z*M-H*R,$=B,H=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=he(Math.sqrt($*$+J*J+F*F)),g=he(Math.sqrt(Z*Z+vt*vt)),L=Ur(H,Z),E=Math.abs(L)>2e-4?L*Xi:0,x=_t?1/(_t<0?-_t:_t):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!am(Bn(t,se)),B&&t.setAttribute("transform",B))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(p*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=he(p),n.scaleY=he(g),n.rotation=he(_)+a,n.rotationX=he(m)+a,n.rotationY=he(d)+a,n.skewX=E+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[Cn]=da(c)),n.xOffset=n.yOffset=0,n.force3D=rn.force3D,n.renderTransform=n.svg?KT:im?lm:jT,n.uncache=0,n},da=function(t){return(t=t.split(" "))[0]+" "+t[1]},Rl=function(t,e,n){var r=De(e);return he(parseFloat(e)+parseFloat(Di(t,"x",n+"px",r)))+r},jT=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,lm(t,e)},ki="0deg",ys="0px",Vi=") ",lm=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,E=n.target,v=n.zOrigin,x="",T=d==="auto"&&t&&t!==1||d===!0;if(v&&(h!==ki||u!==ki)){var w=parseFloat(u)*jr,b=Math.sin(w),L=Math.cos(w),M;w=parseFloat(h)*jr,M=Math.cos(w),o=Rl(E,o,b*M*-v),a=Rl(E,a,-Math.sin(w)*-v),l=Rl(E,l,L*M*-v+v)}m!==ys&&(x+="perspective("+m+Vi),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(T||o!==ys||a!==ys||l!==ys)&&(x+=l!==ys||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Vi),c!==ki&&(x+="rotate("+c+Vi),u!==ki&&(x+="rotateY("+u+Vi),h!==ki&&(x+="rotateX("+h+Vi),(f!==ki||p!==ki)&&(x+="skew("+f+", "+p+Vi),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Vi),E.style[se]=x||"translate(0, 0)"},KT=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,E=n.forceCSS,v=parseFloat(o),x=parseFloat(a),T,w,b,L,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=jr,c*=jr,T=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(u*=jr,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,L*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),T*=M,w*=M)),T=he(T),w=he(w),b=he(b),L=he(L)):(T=h,L=f,w=b=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=Di(p,"x",o,"px"),x=Di(p,"y",a,"px")),(g||_||m||d)&&(v=he(v+g-(g*T+_*b)+m),x=he(x+_-(g*w+_*L)+d)),(r||s)&&(M=p.getBBox(),v=he(v+r/100*M.width),x=he(x+s/100*M.height)),M="matrix("+T+","+w+","+b+","+L+","+v+","+x+")",p.setAttribute("transform",M),E&&(p.style[se]=M)},$T=function(t,e,n,r,s){var o=360,a=be(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Xi:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Nf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Nf)%o-~~(c/o)*o)),t._pt=f=new je(t._pt,e,n,r,c,UT),f.e=u,f.u="deg",t._props.push(n),f},kf=function(t,e){for(var n in e)t[n]=e[n];return t},ZT=function(t,e,n){var r=kf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,p,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[se]=e,a=to(n,1),Js(n,se),n.setAttribute("transform",c)):(c=getComputedStyle(n)[se],o[se]=e,a=to(n,1),o[se]=c);for(l in ri)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=De(c),g=De(u),h=p!==g?Di(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new je(t._pt,a,l,h,f-h,ac),t._pt.u=g||0,t._props.push(l));kf(a,r)};qe("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});fa[t>1?"border"+i:i]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return Qn(a,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,h)}});var cm={name:"css",register:cc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,p,g,_,m,d,E,v,x,T,w,b,L;ou||cc(),this.styles=this.styles||nm(t),L=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(tn[_]&&Xp(_,e,n,r,t,s)))){if(p=typeof u,g=fa[_],p==="function"&&(u=u.call(n,r,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Ks(u)),g)g(this,t,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",wi.lastIndex=0,wi.test(c)||(m=De(c),d=De(u)),d?m!==d&&(c=Di(t,_,c,d)+d):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],be(c)&&~c.indexOf("random(")&&(c=Ks(c)),De(c+"")||(c+=rn.units[_]||De(Qn(t,_))||""),(c+"").charAt(1)==="="&&(c=Qn(t,_))):c=Qn(t,_),f=parseFloat(c),E=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),_ in Fn&&(_==="autoAlpha"&&(f===1&&Qn(t,"visibility")==="hidden"&&h&&(f=0),L.push("visibility",0,a.visibility),Mi(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Fn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in ri,v){if(this.styles.save(_),x||(T=t._gsap,T.renderTransform&&!e.parseTransform||to(t,e.parseTransform),w=e.smoothOrigin!==!1&&T.smooth,x=this._pt=new je(this._pt,a,se,0,1,T.renderTransform,T,0,-1),x.dep=1),_==="scale")this._pt=new je(this._pt,T,"scaleY",T.scaleY,(E?Yr(T.scaleY,E+h):h)-T.scaleY||0,ac),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Cn,0,a[Cn]),u=YT(u),T.svg?uc(t,u,0,w,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==T.zOrigin&&Mi(this,T,"zOrigin",T.zOrigin,d),Mi(this,a,_,da(c),da(u)));continue}else if(_==="svgOrigin"){uc(t,u,1,w,0,this);continue}else if(_ in om){$T(this,T,_,f,E?Yr(f,E+u):u);continue}else if(_==="smoothOrigin"){Mi(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){ZT(this,u,t);continue}}else _ in a||(_=os(_)||_);if(v||(h||h===0)&&(f||f===0)&&!DT.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),d=De(u)||(_ in rn.units?rn.units[_]:m),m!==d&&(f=Di(t,_,c,d)),this._pt=new je(this._pt,v?T:a,_,f,(E?Yr(f,E+h):h)-f,!v&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?OT:ac),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=IT);else if(_ in a)XT.call(this,t,_,c,E?E+u:u);else if(_ in t)this.add(t,_,c||t[_],E?E+u:u,r,s);else if(_!=="parseTransform"){Zc(_,u);continue}v||(_ in a?L.push(_,0,a[_]):L.push(_,1,c||t[_])),o.push(_)}}b&&Zp(this)},render:function(t,e){if(e.tween._time||!au())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Qn,aliases:Fn,getSetter:function(t,e,n){var r=Fn[e];return r&&r.indexOf(",")<0&&(e=r),e in ri&&e!==Cn&&(t._gsap.x||Qn(t,"x"))?n&&Of===n?e==="scale"?zT:BT:(Of=n||{})&&(e==="scale"?HT:GT):t.style&&!jc(t.style[e])?NT:~e.indexOf("-")?FT:ru(t,e)},core:{_removeProperty:Js,_getMatrix:cu}};$e.utils.checkPrefix=os;$e.core.getStyleSaver=nm;(function(i,t,e,n){var r=qe(i+","+t+","+e,function(s){ri[s]=1});qe(t,function(s){rn.units[s]="deg",om[s]=1}),Fn[r[13]]=i+","+t,qe(n,function(s){var o=s.split(":");Fn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");qe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){rn.units[i]="px"});$e.registerPlugin(cm);var um=$e.registerPlugin(cm)||$e;um.core.Tween;const JT="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",QT="varying vec3 vertexNormal;void main(){float intensity=pow(0.5-dot(vertexNormal,vec3(0,0,1.0)),2.0);gl_FragColor=vec4(0.8,0.8,0.8,1.0)*intensity;}",jn=25,tb=200,eb=.095,nb=12,ib=12,Vf=64,Wf=8,rb=.1,sb=C_({__name:"App",setup(i){let t=document.querySelector("#app"),e,n,r,s,o;vd(()=>{e=new uE,e.updateMatrixWorld(!0),n=new hn(45,window.innerWidth/window.innerHeight,.1,200),r=new op({antialias:!0,alpha:!0}),r.setPixelRatio(window.devicePixelRatio?window.devicePixelRatio:1),r.setSize(window.innerWidth,window.innerHeight),r.shadowMap.enabled=!0,r.shadowMap.type=Nc,t&&t.appendChild(r.domElement),s=new bs;const d=new eo(.3,4.6,.05),E=new Date().getTimezoneOffset()||0;d.y=d.y+Math.PI*(E/720),e.add(s);const v=new OE(n,r.domElement);v.maxDistance=120,v.minDistance=10,new UE(100);const x=new sa(jn,64,32),T=new Is({color:2448046,transparent:!0,side:2}),w=new Xe(x,T);e.add(w);const b=new sa(jn,64,32),L=new Pi({vertexShader:JT,fragmentShader:QT,side:ke,blending:ea,transparent:!0}),M=new Xe(b,L);M.scale.set(1.25,1.25,1.25),e.add(M),o=new Image,o.src="./assets/glob-map.png",o.onload=()=>a();const R=[-33.865143,151.2099,34.052235,-118.243683],$=new Is({blending:ea,transparent:!1,color:8509947,opacity:1}),J=l(R,$),F=new Xe;F.add(J),e.add(F);const k=new vf(16777215,2);k.position.set(0,0,200),k.scale.set(10,10,10);const H=new vf(16777215,2);H.position.set(0,0,-200),H.scale.set(10,10,10),n.position.set(0,0,80),e.add(n),_()});const a=()=>{const d=new Ee,E=p(o),v=[];for(let b=-90;b<=90;b+=180/tb){const M=Math.cos(Math.abs(b)*Nr.DEG2RAD)*jn*Math.PI*2*2;for(let R=0;R<M;R++){const $=360*R/M-180;if(f(b,$,E)){const J=g(b,$,jn);d.position.set(J.x,J.y,J.z);const F=g(b,$,jn+5);d.lookAt(F.x,F.y,F.z),d.updateMatrix(),v.push(d.matrix.clone())}}}const x=new Wc(eb,8),T=new Is({color:16777215,transparent:!0,opacity:.6}),w=new fE(x,T,v.length);for(let b=0;b<v.length;b++)w.setMatrixAt(b,v[b]);w.renderOrder=3,s.add(w)},l=(d,E)=>{const{spline:v}=u(d),x=new Xc(v,Vf,rb,Wf,!1);return x.setDrawRange(0),um.to(x.drawRange,{count:6*Wf*Vf,duration:1}),new Xe(x,E)},c=(d,E,v)=>{const x=(90-d)*Nr.DEG2RAD,T=(E+180)*Nr.DEG2RAD;return new I(-v*Math.sin(x)*Math.cos(T),v*Math.cos(x),v*Math.sin(x)*Math.sin(T))},u=d=>{const E=d[0],v=d[1],x=d[2],T=d[3],w=c(E,v,jn),b=c(x,T,jn),L=h(w.distanceTo(b)*.75,nb,ib),M=FE([v,E],[T,x]),R=M(.3),$=M(.7),J=c(R[1],R[0],jn+L),F=c($[1],$[0],jn+L);return{start:w,end:b,spline:new cp(w,J,F,b)}},h=(d,E,v)=>d<=E?E:d>=v?v:d;function f(d,E,v){const x=4*v.width,T=parseInt(String((E+180)/360*v.width+.5)),w=v.height-parseInt(String((d+90)/180*v.height-.5)),b=parseInt(String(x*(w-1)+4*T))+3;return v.data[b]>90}const p=d=>{const E=document.createElement("canvas").getContext("2d");if(E)return E.canvas.width=d.width,E.canvas.height=d.height,E.drawImage(d,0,0,d.width,d.height),E.getImageData(0,0,d.width,d.height)},g=(d,E,v)=>{const x=new I,T=(90-d)*Nr.DEG2RAD,w=(E+180)*Nr.DEG2RAD;return x.set(-v*Math.sin(T)*Math.cos(w),v*Math.cos(T),v*Math.sin(T)*Math.sin(w)),x},_=()=>{requestAnimationFrame(_),m()},m=()=>{r.render(e,n)};return(d,E)=>null}});Vg(sb).mount("#app");
