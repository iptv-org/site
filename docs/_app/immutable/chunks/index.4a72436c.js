function S(){}const $t=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function Z(){return Object.create(null)}function E(t){t.forEach(st)}function U(t){return typeof t=="function"}function Xt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function Yt(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function xt(t){return Object.keys(t).length===0}function rt(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Zt(t){let e;return rt(t,n=>e=n)(),e}function te(t,e,n){t.$$.on_destroy.push(rt(e,n))}function ee(t,e,n,i){if(t){const s=ot(t,e,n,i);return t[0](s)}}function ot(t,e,n,i){return t[1]&&i?wt(n.ctx.slice(),t[1](i(e))):n.ctx}function ne(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function ie(t,e,n,i,s,l){if(s){const r=ot(e,n,i,l);t.p(r,s)}}function se(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function re(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function oe(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ce(t){return t??""}const ct=typeof window<"u";let bt=ct?()=>window.performance.now():()=>Date.now(),V=ct?t=>requestAnimationFrame(t):S;const A=new Set;function lt(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&V(lt)}function vt(t){let e;return A.size===0&&V(lt),{promise:new Promise(n=>{A.add(e={c:t,f:n})}),abort(){A.delete(e)}}}const le=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let G=!1;function Et(){G=!0}function Tt(){G=!1}function Nt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:Nt(1,s,h=>e[n[h]].claim_order,a))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const f=a<l.length?l[a]:null;t.insertBefore(r[c],f)}}function At(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Mt(t){const e=X("style");return St(at(t),e),e.sheet}function St(t,e){return At(t.head||t,e),e.sheet}function Ct(t,e){if(G){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Dt(t,e,n){t.insertBefore(e,n||null)}function Lt(t,e,n){G&&!n?Ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function P(t){t.parentNode&&t.parentNode.removeChild(t)}function ae(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function ut(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t){return document.createTextNode(t)}function ue(){return Y(" ")}function fe(){return Y("")}function _e(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function de(t){return function(e){return e.preventDefault(),t.call(this,e)}}function he(t){return function(e){e.target===this&&t.call(this,e)}}function Pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const jt=["width","height"];function me(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&jt.indexOf(i)===-1?t[i]=e[i]:Pt(t,i,e[i])}function Ht(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function _t(t,e,n,i,s=!1){ft(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function dt(t,e,n,i){return _t(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function pe(t,e,n){return dt(t,e,n,X)}function ye(t,e,n){return dt(t,e,n,ut)}function Ot(t,e){return _t(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Y(e),!0)}function ge(t){return Ot(t," ")}function tt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function $e(t,e){const n=tt(t,"HTML_TAG_START",0),i=tt(t,"HTML_TAG_END",n);if(n===i)return new et(void 0,e);ft(t);const s=t.splice(n,i-n+1);P(s[0]),P(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new et(l,e)}function we(t,e){e=""+e,t.data!==e&&(t.data=e)}function xe(t,e){t.value=e??""}function be(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ve(t,e,n){t.classList[n?"add":"remove"](e)}function ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Ee(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Rt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ut(n.nodeName):this.e=X(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Dt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(P)}}class et extends Rt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Lt(this.t,this.n[n],e)}}function Te(t,e){return new t(e)}const B=new Map;let z=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:Mt(e),rules:{}};return B.set(t,n),n}function nt(t,e,n,i,s,l,r,o=0){const c=16.666/i;let a=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);a+=y*100+`%{${r(g,1-g)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,_=`__svelte_${qt(f)}_${o}`,h=at(t),{stylesheet:u,rules:d}=B.get(h)||Bt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,z+=1,_}function zt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||Ft())}function Ft(){V(()=>{z||(B.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&P(e)}),B.clear())})}let j;function L(t){j=t}function C(){if(!j)throw new Error("Function called outside component initialization");return j}function Ne(t){C().$$.on_mount.push(t)}function ke(t){C().$$.after_update.push(t)}function Ae(t){C().$$.on_destroy.push(t)}function Me(){const t=C();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=ht(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function Se(t,e){return C().$$.context.set(t,e),e}function Ce(t){return C().$$.context.get(t)}function De(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const k=[],it=[];let M=[];const K=[],mt=Promise.resolve();let Q=!1;function pt(){Q||(Q=!0,mt.then(yt))}function Le(){return pt(),mt}function F(t){M.push(t)}function Pe(t){K.push(t)}const I=new Set;let N=0;function yt(){if(N!==0)return;const t=j;do{try{for(;N<k.length;){const e=k[N];N++,L(e),Gt(e.$$)}}catch(e){throw k.length=0,N=0,e}for(L(null),k.length=0,N=0;it.length;)it.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];I.has(n)||(I.add(n),n())}M.length=0}while(k.length);for(;K.length;)K.pop()();Q=!1,I.clear(),L(t)}function Gt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}function Wt(t){const e=[],n=[];M.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),M=e}let D;function It(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function J(t,e,n){t.dispatchEvent(ht(`${e?"intro":"outro"}${n}`))}const q=new Set;let x;function je(){x={r:0,c:[],p:x}}function He(){x.r||E(x.c),x=x.p}function gt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Jt(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),x.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Kt={duration:0};function Oe(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,a=null;function f(){a&&zt(t,a)}function _(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:y=$t,tick:g=S,css:b}=l||Kt,T={start:bt()+d,b:u};u||(T.group=x,x.r+=1),o||c?c=T:(b&&(f(),a=nt(t,r,u,p,d,y,b)),u&&g(0,1),o=_(T,p),F(()=>J(t,u,"start")),vt(v=>{if(c&&v>c.start&&(o=_(c,p),c=null,J(t,o.b,"start"),b&&(f(),a=nt(t,r,o.b,o.duration,0,y,l.css))),o){if(v>=o.end)g(r=o.b,1-r),J(t,o.b,"end"),c||(o.b?f():--o.group.r||E(o.group.c)),o=null;else if(v>=o.start){const H=v-o.start;r=o.a+o.d*y(H/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(u){U(l)?It().then(()=>{l=l(s),h(u)}):h(u)},end(){f(),o=c=null}}}function Re(t,e){Jt(t,1,1,()=>{e.delete(t.key)})}function qe(t,e,n,i,s,l,r,o,c,a,f,_){let h=t.length,u=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const y=[],g=new Map,b=new Map,T=[];for(d=u;d--;){const m=_(s,l,d),$=n(m);let w=r.get($);w?i&&T.push(()=>w.p(m,e)):(w=a($,m),w.c()),g.set($,y[d]=w),$ in p&&b.set($,Math.abs(d-p[$]))}const v=new Set,H=new Set;function W(m){gt(m,1),m.m(o,f),r.set(m.key,m),f=m.first,u--}for(;h&&u;){const m=y[u-1],$=t[h-1],w=m.key,O=$.key;m===$?(f=m.first,h--,u--):g.has(O)?!r.has(w)||v.has(w)?W(m):H.has(O)?h--:b.get(w)>b.get(O)?(H.add(w),W(m)):(v.add(O),h--):(c($,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,r)}for(;u;)W(y[u-1]);return E(T),y}function Be(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ze(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Fe(t){t&&t.c()}function Ge(t,e){t&&t.l(e)}function Qt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||F(()=>{const r=t.$$.on_mount.map(st).filter(U);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),l.forEach(F)}function Ut(t,e){const n=t.$$;n.fragment!==null&&(Wt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Vt(t,e){t.$$.dirty[0]===-1&&(k.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function We(t,e,n,i,s,l,r,o=[-1]){const c=j;L(t);const a=t.$$={fragment:null,ctx:[],props:l,update:S,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return a.ctx&&s(a.ctx[_],a.ctx[_]=d)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](d),f&&Vt(t,_)),h}):[],a.update(),f=!0,E(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Et();const _=Ht(e.target);a.fragment&&a.fragment.l(_),_.forEach(P)}else a.fragment&&a.fragment.c();e.intro&&gt(t.$$.fragment),Qt(t,e.target,e.anchor,e.customElement),Tt(),yt()}L(c)}class Ie{$destroy(){Ut(this,1),this.$destroy=S}$on(e,n){if(!U(n))return S;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ce as $,Qt as A,Ut as B,ee as C,Ee as D,Ct as E,ie as F,se as G,ne as H,S as I,te as J,$t as K,wt as L,me as M,ve as N,_e as O,Be as P,oe as Q,re as R,Ie as S,De as T,ut as U,ye as V,F as W,Oe as X,Me as Y,Ae as Z,le as _,ue as a,U as a0,E as a1,Se as a2,he as a3,ae as a4,Ce as a5,de as a6,Yt as a7,qe as a8,Re as a9,ze as aa,Pe as ab,xe as ac,et as ad,$e as ae,Zt as af,Lt as b,ge as c,Jt as d,fe as e,He as f,gt as g,P as h,We as i,ke as j,X as k,pe as l,Ht as m,Pt as n,Ne as o,be as p,Y as q,Ot as r,Xt as s,Le as t,we as u,je as v,it as w,Te as x,Fe as y,Ge as z};