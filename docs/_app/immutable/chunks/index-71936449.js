function S(){}const ht=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function V(){return Object.create(null)}function C(t){t.forEach(Z)}function K(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function Wt(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function pt(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t){let e;return tt(t,n=>e=n)(),e}function It(t,e,n){t.$$.on_destroy.push(tt(e,n))}function Jt(t,e,n,i){if(t){const r=et(t,e,n,i);return t[0](r)}}function et(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Qt(t,e,n,i,r,l){if(r){const s=et(e,n,i,l);t.p(s,r)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Vt(t){return t??""}const nt=typeof window<"u";let yt=nt?()=>window.performance.now():()=>Date.now(),Q=nt?t=>requestAnimationFrame(t):S;const A=new Set;function it(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&Q(it)}function gt(t){let e;return A.size===0&&Q(it),{promise:new Promise(n=>{A.add(e={c:t,f:n})}),abort(){A.delete(e)}}}let F=!1;function $t(){F=!0}function bt(){F=!1}function wt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:wt(1,r,h=>e[n[h]].claim_order,u))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,r=Math.max(_,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(s[c],f)}}function vt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=ot("style");return Nt(rt(t),e),e.sheet}function Nt(t,e){return vt(t.head||t,e),e.sheet}function kt(t,e){if(F){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Xt(t,e,n){F&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function st(t){t.parentNode&&t.parentNode.removeChild(t)}function Yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function U(t){return document.createTextNode(t)}function Zt(){return U(" ")}function te(){return U("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ne(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ie(t){return function(e){e.target===this&&t.call(this,e)}}function re(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t){return Array.from(t.childNodes)}function Ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,r=!1){Ct(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function lt(t,e,n,i){return ct(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function se(t,e,n){return lt(t,e,n,ot)}function oe(t,e,n){return lt(t,e,n,At)}function Dt(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>U(e),!0)}function ce(t){return Dt(t," ")}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ue(t,e){t.value=e??""}function ae(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function fe(t,e,n){t.classList[n?"add":"remove"](e)}function ut(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function _e(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function de(t,e){return new t(e)}const z=new Map;let B=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:Et(e),rules:{}};return z.set(t,n),n}function X(t,e,n,i,r,l,s,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);u+=y*100+`%{${s(g,1-g)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,_=`__svelte_${Mt(f)}_${o}`,h=rt(t),{stylesheet:a,rules:d}=z.get(h)||Tt(h,t);d[_]||(d[_]=!0,a.insertRule(`@keyframes ${_} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${r}ms 1 both`,B+=1,_}function jt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),B-=r,B||Pt())}function Pt(){Q(()=>{B||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&st(e)}),z.clear())})}let P;function j(t){P=t}function D(){if(!P)throw new Error("Function called outside component initialization");return P}function he(t){D().$$.on_mount.push(t)}function me(t){D().$$.after_update.push(t)}function pe(t){D().$$.on_destroy.push(t)}function ye(){const t=D();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=ut(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function ge(t,e){return D().$$.context.set(t,e),e}function $e(t){return D().$$.context.get(t)}function be(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const k=[],Y=[],q=[],I=[],at=Promise.resolve();let J=!1;function ft(){J||(J=!0,at.then(_t))}function we(){return ft(),at}function H(t){q.push(t)}function xe(t){I.push(t)}const W=new Set;let N=0;function _t(){if(N!==0)return;const t=P;do{try{for(;N<k.length;){const e=k[N];N++,j(e),Ot(e.$$)}}catch(e){throw k.length=0,N=0,e}for(j(null),k.length=0,N=0;Y.length;)Y.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];W.has(n)||(W.add(n),n())}q.length=0}while(k.length);for(;I.length;)I.pop()();J=!1,W.clear(),j(t)}function Ot(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let T;function Rt(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function G(t,e,n){t.dispatchEvent(ut(`${e?"intro":"outro"}${n}`))}const L=new Set;let w;function ve(){w={r:0,c:[],p:w}}function Ee(){w.r||C(w.c),w=w.p}function dt(t,e){t&&t.i&&(L.delete(t),t.i(e))}function qt(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),w.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Lt={duration:0};function Ne(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),s=i?0:1,o=null,c=null,u=null;function f(){u&&jt(t,u)}function _(a,d){const p=a.b-s;return d*=Math.abs(p),{a:s,b:a.b,d:p,duration:d,start:a.start,end:a.start+d,group:a.group}}function h(a){const{delay:d=0,duration:p=300,easing:y=ht,tick:g=S,css:x}=l||Lt,E={start:yt()+d,b:a};a||(E.group=w,w.r+=1),o||c?c=E:(x&&(f(),u=X(t,s,a,p,d,y,x)),a&&g(0,1),o=_(E,p),H(()=>G(t,a,"start")),gt(v=>{if(c&&v>c.start&&(o=_(c,p),c=null,G(t,o.b,"start"),x&&(f(),u=X(t,s,o.b,o.duration,0,y,l.css))),o){if(v>=o.end)g(s=o.b,1-s),G(t,o.b,"end"),c||(o.b?f():--o.group.r||C(o.group.c)),o=null;else if(v>=o.start){const M=v-o.start;s=o.a+o.d*y(M/o.duration),g(s,1-s)}}return!!(o||c)}))}return{run(a){K(l)?Rt().then(()=>{l=l(r),h(a)}):h(a)},end(){f(),o=c=null}}}const ke=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ae(t,e){qt(t,1,1,()=>{e.delete(t.key)})}function Se(t,e,n,i,r,l,s,o,c,u,f,_){let h=t.length,a=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const y=[],g=new Map,x=new Map;for(d=a;d--;){const m=_(r,l,d),$=n(m);let b=s.get($);b?i&&b.p(m,e):(b=u($,m),b.c()),g.set($,y[d]=b),$ in p&&x.set($,Math.abs(d-p[$]))}const E=new Set,v=new Set;function M(m){dt(m,1),m.m(o,f),s.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=y[a-1],$=t[h-1],b=m.key,O=$.key;m===$?(f=m.first,h--,a--):g.has(O)?!s.has(b)||E.has(b)?M(m):v.has(O)?h--:x.get(b)>x.get(O)?(v.add(b),M(m)):(E.add(O),h--):(c($,s),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,s)}for(;a;)M(y[a-1]);return y}function Ce(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function De(t){t&&t.c()}function Me(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||H(()=>{const s=t.$$.on_mount.map(Z).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...s):C(s),t.$$.on_mount=[]}),l.forEach(H)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(k.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Te(t,e,n,i,r,l,s,o=[-1]){const c=P;j(t);const u=t.$$={fragment:null,ctx:[],props:l,update:S,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:V(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(_,h,...a)=>{const d=a.length?a[0]:h;return u.ctx&&r(u.ctx[_],u.ctx[_]=d)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](d),f&&Ht(t,_)),h}):[],u.update(),f=!0,C(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){$t();const _=St(e.target);u.fragment&&u.fragment.l(_),_.forEach(st)}else u.fragment&&u.fragment.c();e.intro&&dt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),bt(),_t()}j(c)}class je{$destroy(){Bt(this,1),this.$destroy=S}$on(e,n){if(!K(n))return S;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{$e as $,Bt as A,we as B,S as C,Jt as D,_e as E,kt as F,Qt as G,Ut as H,Kt as I,It as J,ht as K,ee as L,ye as M,pe as N,ke as O,Vt as P,fe as Q,K as R,je as S,H as T,Ne as U,C as V,ge as W,At as X,oe as Y,ie as Z,Yt as _,Zt as a,be as a0,ne as a1,Wt as a2,Se as a3,Ae as a4,Ce as a5,xe as a6,ue as a7,Gt as a8,Xt as b,ce as c,Ee as d,te as e,dt as f,ve as g,st as h,Te as i,me as j,ot as k,se as l,St as m,re as n,he as o,ae as p,U as q,Dt as r,Ft as s,qt as t,le as u,Y as v,de as w,De as x,Me as y,zt as z};