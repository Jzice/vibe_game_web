(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[0,1,0,-1],t=[-1,0,1,0],n=e=>e+1&3,r=[`bonk`,`zip`,`boom`,`shove`,`hop`,`twirl`,`pin`,`block`,`keg`],i=[`bonk`,`zip`,`boom`,`shove`,`hop`,`twirl`],a={bonk:0,zip:1,boom:2,shove:3,hop:4,twirl:5,pin:6,block:7,keg:8},o=[`bonk`,`zip`,`boom`,`shove`,`hop`,`twirl`,`pin`,`block`,`keg`],s=0,c=1,l={P:s,E:c,N:2},u=[`P`,`E`,`N`],d=[`win`,`timeout`,`stalemate`],f=0,p=1,m=2,h=3,g=[`bonk`,`shot`,`blast`,`stomp`,`fall`],_=[0,1,0,-1,1,1,-1,-1],v=[-1,0,1,0,-1,1,1,-1];function y(e){let{w:t,h:n}=e,r=new Uint8Array(t*n),i=new Uint8Array(t*n);for(let a=0;a<n;a++){let n=e.map[a]??``;for(let e=0;e<t;e++){let o=n[e]??` `,s=a*t+e;r[s]=o===`#`?1:o===`.`||o===`o`?0:2,o===`o`&&(i[s]=1)}}let o=e.pieces.length,s=new Uint8Array(o),c=new Uint8Array(o),u=new Int16Array(o),d=new Int16Array(o),f=new Uint8Array(o),p=new Uint8Array(o),m=!1,h=new Uint8Array(t*n);e.pieces.forEach((e,r)=>{s[r]=a[e.kind],c[r]=l[e.team],u[r]=e.x,d[r]=e.y,f[r]=e.dir,p[r]=+!!e.crown,e.crown&&e.team===`E`&&(m=!0),e.x>=0&&e.x<t&&e.y>=0&&e.y<n&&(h[e.y*t+e.x]=1)});let g=[];for(let e=0;e<t*n;e++)i[e]&&!h[e]&&g.push(e);let _=new Uint8Array(e.hand.length);return e.hand.forEach((e,t)=>_[t]=a[e]),{level:e,w:t,h:n,terr:r,zone:i,freeZone:g,handKinds:_,nPieces:o,pKind:s,pTeam:c,pX:u,pY:d,pDir:f,pCrown:p,hasCrown:m}}var b=class{c;rec=!1;n=0;nToys=0;kind;team;px;py;dir;alive;isTarget;crown;ids;grid;hist;histHash;qB;qS;qHead=0;qTail=0;resolving=!1;outcome=1;beats=0;maxChain=0;toysLost=0;toysUsed=0;grumpsOut=0;grumpsLeft=0;actor=-1;actKo=0;targetsLeft=0;phases=[];ev=null;curPhase=null;constructor(e){this.c=e;let t=e.level.hand.length+e.nPieces;this.kind=new Uint8Array(t),this.team=new Uint8Array(t),this.px=new Int16Array(t),this.py=new Int16Array(t),this.dir=new Uint8Array(t),this.alive=new Uint8Array(t),this.isTarget=new Uint8Array(t),this.crown=new Uint8Array(t),this.ids=new Int16Array(t),this.grid=new Int16Array(e.w*e.h);let n=Math.max(1,e.level.maxBeats+1);this.hist=new Int32Array(n*Math.max(1,t)),this.histHash=new Int32Array(n),this.qB=new Int32Array(Math.max(1,t)),this.qS=new Int32Array(Math.max(1,t))}run(e,t,n,r){let i=this.c,a=i.w,o=this.grid;o.fill(-1);let l=0;for(let c=0;c<e;c++){let e=t[c],u=n[c];this.kind[l]=i.handKinds[e],this.team[l]=s,this.px[l]=u%a,this.py[l]=u/a|0,this.dir[l]=r[c],this.alive[l]=1,this.crown[l]=0,this.ids[l]=e,this.isTarget[l]=0,o[u]=l,l++}this.nToys=e;let u=0;for(let e=0;e<i.nPieces;e++){let t=i.pTeam[e];this.kind[l]=i.pKind[e],this.team[l]=t,this.px[l]=i.pX[e],this.py[l]=i.pY[e],this.dir[l]=i.pDir[e],this.alive[l]=1,this.crown[l]=i.pCrown[e],this.ids[l]=100+e;let n=+(t===c&&(!i.hasCrown||i.pCrown[e]===1));this.isTarget[l]=n,u+=n,o[i.pY[e]*a+i.pX[e]]=l,l++}this.n=l,this.targetsLeft=u,this.maxChain=0,this.toysLost=0,this.toysUsed=e,this.grumpsOut=0,this.outcome=1,this.beats=i.level.maxBeats,this.rec&&(this.phases=[]);let d=i.level.maxBeats,f=this.kind,p=this.alive,m=!1;for(let t=1;t<=d&&!m;t++){if(this.seenBefore(t-1)){this.outcome=2,this.beats=t-1;break}this.rec&&this.beginPhase(t,`tick`);for(let t=0;t<e;t++)if(p[t]!==0&&(this.act(t),this.targetsLeft===0)){m=!0;break}if(this.rec&&this.endPhase(),m){this.outcome=0,this.beats=t;break}this.rec&&this.beginPhase(t,`tock`);for(let t=e;t<l;t++){if(p[t]===0)continue;let e=f[t];if(e!==6&&e!==7&&e!==8&&(this.act(t),this.targetsLeft===0)){m=!0;break}}this.rec&&this.endPhase(),m&&(this.outcome=0,this.beats=t)}let h=0;for(let t=e;t<l;t++)this.team[t]===c&&p[t]===1&&h++;this.grumpsLeft=h}seenBefore(e){let t=this.n;if(t===0)return e>0;if((e+1)*t>this.hist.length){let e=new Int32Array(this.hist.length*2);e.set(this.hist),this.hist=e;let t=new Int32Array(this.histHash.length*2);t.set(this.histHash),this.histHash=t}let n=this.hist,r=e*t,i=this.c.w,a=0;for(let e=0;e<t;e++){let t=this.alive[e]===1?(this.py[e]*i+this.px[e]<<2)+this.dir[e]+1:0;n[r+e]=t,a=Math.imul(a,31)+t|0}this.histHash[e]=a;for(let i=0;i<e;i++){if(this.histHash[i]!==a)continue;let e=i*t,o=!0;for(let i=0;i<t;i++)if(n[e+i]!==n[r+i]){o=!1;break}if(o)return!0}return!1}beginPhase(e,t){this.curPhase={beat:e,side:t,actions:[],after:[]}}endPhase(){let e=this.curPhase;e.after=this.snapshot(),this.phases.push(e),this.curPhase=null,this.ev=null}snapshot(){let e=Array(this.n);for(let t=0;t<this.n;t++)e[t]={id:this.ids[t],kind:o[this.kind[t]],team:u[this.team[t]],x:this.px[t],y:this.py[t],dir:this.dir[t],alive:this.alive[t]===1,crown:this.crown[t]===1};return e}cell(e){return[this.px[e],this.py[e]]}terrAt(e,t){let n=this.c;return e<0||t<0||e>=n.w||t>=n.h?2:n.terr[t*n.w+e]}act(e){if(this.actor=e,this.actKo=0,this.rec){let t={actor:this.ids[e],events:[]};this.curPhase.actions.push(t),this.ev=t.events}switch(this.kind[e]){case 0:this.actBonk(e);break;case 1:this.actZip(e,this.dir[e],0,!0);break;case 2:this.actBoom(e);break;case 3:this.actShove(e);break;case 4:this.actHop(e);break;case 5:{let t=this.actZip(e,this.dir[e],0,!1);if(this.alive[e]===0)break;let n=this.dir[e],r=n+1&3;this.dir[e]=r,this.rec&&this.ev.push({t:`turn`,s:+!!t,id:this.ids[e],from:n,to:r});break}}this.actKo>this.maxChain&&(this.maxChain=this.actKo)}moveTo(e,t,n,r,i){let a=this.c.w,o=this.px[e],s=this.py[e];this.grid[s*a+o]===e&&(this.grid[s*a+o]=-1),this.grid[n*a+t]=e,this.px[e]=t,this.py[e]=n,this.rec&&this.ev.push({t:`move`,s:i,id:this.ids[e],from:[o,s],to:[t,n],dir:this.dir[e],pushed:r})}bump(e){this.rec&&this.ev.push({t:`bump`,s:0,id:this.ids[e],dir:this.dir[e]})}actBonk(n){let r=this.dir[n],i=this.px[n]+e[r],a=this.py[n]+t[r];if(this.terrAt(i,a)!==0)return this.bump(n);let o=this.grid[a*this.c.w+i];o>=0?(this.rec&&this.ev.push({t:`bonk`,s:0,id:this.ids[n],target:this.ids[o],dir:r}),this.hit(o,f,r,n,1)):this.moveTo(n,i,a,!1,0)}actZip(n,r,i,a){let o=this.c,s=e[r],c=t[r],l=this.px[n],u=this.py[n],d=l+s,f=u+c;for(;d>=0&&f>=0&&d<o.w&&f<o.h;){let e=f*o.w+d,t=o.terr[e];if(t===1)break;if(t===0){let t=this.grid[e];if(t>=0)return this.rec&&this.ev.push({t:`shoot`,s:i,id:this.ids[n],dir:r,from:[l,u],to:[d,f],target:this.ids[t]}),this.hit(t,p,r,n,i+1),!0}d+=s,f+=c}return a&&this.rec&&this.ev.push({t:`idle`,s:i,id:this.ids[n]}),!1}actBoom(n){let r=this.dir[n],i=this.px[n]+e[r],a=this.py[n]+t[r];this.terrAt(i,a)!==0||this.grid[a*this.c.w+i]>=0?this.explode(n,0):this.moveTo(n,i,a,!1,0)}actShove(n){let r=this.c.w,i=this.dir[n],a=e[i],o=t[i],s=this.px[n]+a,c=this.py[n]+o;if(this.terrAt(s,c)!==0)return this.bump(n);if(this.grid[c*r+s]<0){this.moveTo(n,s,c,!1,0);return}let l=s,u=c,d=0;for(;this.terrAt(l,u)===0&&this.grid[u*r+l]>=0;)d++,l+=a,u+=o;let f=this.terrAt(l,u);if(f===1)return this.bump(n);let p=this.rec?this.ev.length:0,m=d-1;if(f===2){let e=s+a*m,t=c+o*m,d=this.grid[t*r+e];this.kill(d),this.rec&&this.ev.push({t:`fall`,s:0,id:this.ids[d],from:[e,t],to:[l,u],dir:i,by:this.ids[n]}),m--}for(;m>=0;m--){let e=s+a*m,t=c+o*m;this.moveTo(this.grid[t*r+e],e+a,t+o,!0,0)}if(this.moveTo(n,s,c,!1,0),this.rec){let e=this.ev,t=e.splice(p).reverse();for(let n of t)e.push(n)}}actHop(n){let r=this.c.w,i=this.dir[n],a=this.px[n],o=this.py[n],s=a+e[i],c=o+t[i],l=s+e[i],u=c+t[i];if(this.terrAt(l,u)!==0||this.terrAt(s,c)===1){this.rec&&this.ev.push({t:`hopfail`,s:0,id:this.ids[n],dir:i});return}let d=u*r+l,f=this.grid[d];this.grid[o*r+a]=-1,this.grid[d]=n,this.px[n]=l,this.py[n]=u,this.rec&&this.ev.push({t:`hop`,s:0,id:this.ids[n],from:[a,o],to:[l,u],dir:i}),f>=0&&this.hit(f,h,-1,n,1)}kill(e){this.alive[e]=0;let t=this.py[e]*this.c.w+this.px[e];this.grid[t]===e&&(this.grid[t]=-1),e!==this.actor&&this.actKo++;let n=this.team[e];n===s?this.toysLost++:n===c&&this.grumpsOut++,this.isTarget[e]===1&&this.targetsLeft--}hit(e,t,n,r,i){let a=this.kind[e];a===3&&n>=0&&n===(this.dir[e]+2&3)?this.rec&&this.ev.push({t:`block`,s:i,id:this.ids[e],cause:g[t],dir:n,by:r>=0?this.ids[r]:null}):a===2||a===8?this.explode(e,i):(this.kill(e),this.rec&&this.ev.push({t:`ko`,s:i,id:this.ids[e],cause:g[t],dir:n>=0?n:null,by:r>=0?this.ids[r]:null,at:this.cell(e)}))}explode(e,t){if(this.kill(e),this.rec&&this.ev.push({t:`boom`,s:t,id:this.ids[e],at:this.cell(e),cells:this.blastCells(e)}),this.qB[this.qTail]=e,this.qS[this.qTail]=t,this.qTail++,this.resolving)return;this.resolving=!0;let n=this.c,r=n.w;for(;this.qHead<this.qTail;){let e=this.qB[this.qHead],t=this.qS[this.qHead];this.qHead++;let i=this.px[e],a=this.py[e],o=this.grid[a*r+i];o>=0&&this.hit(o,m,-1,e,t+1);for(let o=0;o<8;o++){let s=i+_[o],c=a+v[o];if(s<0||c<0||s>=n.w||c>=n.h)continue;let l=this.grid[c*r+s];l<0||this.hit(l,m,o<4?o:-1,e,t+1)}}this.qHead=0,this.qTail=0,this.resolving=!1}blastCells(e){let t=this.c,n=[],r=this.px[e],i=this.py[e];for(let e=i-1;e<=i+1;e++)for(let i=r-1;i<=r+1;i++)i>=0&&e>=0&&i<t.w&&e<t.h&&n.push([i,e]);return n}stats(){return{maxChain:this.maxChain,toysLost:this.toysLost,toysUsed:this.toysUsed,grumpsOut:this.grumpsOut,grumpsLeft:this.grumpsLeft}}goalsMet(e){return x(e,this.outcome===0,this.beats,this.c.level.hand.length,this.toysUsed,this.toysLost,this.maxChain)}};function x(e,t,n,r,i,a,o){return e.map(e=>{if(!t)return!1;switch(e.t){case`beats`:return n<=e.n;case`spare`:return r-i>=e.n;case`safe`:return a===0;case`chain`:return o>=e.n}})}function S(e,t){let n=new Set,r=new Set,i=new Set;for(let t of e.pieces)i.add(t.y*e.w+t.x);for(let a of t){if(!Number.isInteger(a.slot)||a.slot<0||a.slot>=e.hand.length)return`slot ${a.slot} is not in the hand`;if(n.has(a.slot))return`slot ${a.slot} is placed twice`;if(n.add(a.slot),!Number.isInteger(a.x)||!Number.isInteger(a.y)||a.x<0||a.y<0||a.x>=e.w||a.y>=e.h)return`slot ${a.slot} is off the board at (${a.x},${a.y})`;if(e.map[a.y]?.[a.x]!==`o`)return`slot ${a.slot} at (${a.x},${a.y}) is not a zone cell`;let t=a.y*e.w+a.x;if(i.has(t))return`slot ${a.slot} at (${a.x},${a.y}) is on a level piece`;if(r.has(t))return`two toys at (${a.x},${a.y})`;if(r.add(t),a.dir!==0&&a.dir!==1&&a.dir!==2&&a.dir!==3)return`slot ${a.slot} has a bad direction ${String(a.dir)}`;if(!e.rotate&&a.dir!==0)return`slot ${a.slot} must face N on this level`}return null}function C(e,t){let n=[...t].sort((e,t)=>e.slot-t.slot).map(t=>({id:t.slot,kind:e.hand[t.slot],team:`P`,x:t.x,y:t.y,dir:t.dir,alive:!0,crown:!1}));return e.pieces.forEach((e,t)=>n.push({id:100+t,kind:e.kind,team:e.team,x:e.x,y:e.y,dir:e.dir,alive:!0,crown:!!e.crown})),n}var w=new WeakMap;function T(e){let t=w.get(e);if(t&&t.map===e.map&&t.pieces===e.pieces&&t.hand===e.hand&&t.maxBeats===e.maxBeats)return t.runner;let n=new b(y(e));return w.set(e,{map:e.map,pieces:e.pieces,hand:e.hand,maxBeats:e.maxBeats,runner:n}),n}var E=new Int32Array(16),D=new Int32Array(16),O=new Int32Array(16);function k(e,t,n={}){let r=S(e,t);if(r)throw Error(`invalid placements: ${r}`);let i=n.record===!0,a=i?new b(y(e)):T(e),o=t.length>1?[...t].sort((e,t)=>e.slot-t.slot):t,s=o.length,c=s<=16?E:new Int32Array(s),l=s<=16?D:new Int32Array(s),u=s<=16?O:new Int32Array(s);for(let t=0;t<s;t++){let n=o[t];c[t]=n.slot,l[t]=n.y*e.w+n.x,u[t]=n.dir}a.rec=i,a.run(s,c,l,u);let f=a.outcome===0;return{outcome:d[a.outcome],beats:a.beats,phases:i?a.phases:[],initial:C(e,o),final:a.snapshot(),stats:a.stats(),goalsMet:x(e.goals,f,a.beats,e.hand.length,a.toysUsed,a.toysLost,a.maxChain)}}var A=1e3,j=1001,ee=1002,M=1003,te=1004,ne=1005,N=1006,re=1007,ie=1008,ae=1009,oe=1010,se=1011,ce=1012,le=1013,ue=1014,de=1015,fe=1016,pe=1017,me=1018,he=1020,ge=35902,_e=35899,ve=1021,ye=1022,be=1023,xe=1026,Se=1027,Ce=1028,we=1029,Te=1030,Ee=1031,De=1033,Oe=33776,ke=33777,Ae=33778,je=33779,Me=35840,Ne=35841,Pe=35842,Fe=35843,P=36196,Ie=37492,Le=37496,Re=37488,F=37489,ze=37490,I=37491,L=37808,Be=37809,Ve=37810,He=37811,Ue=37812,We=37813,Ge=37814,Ke=37815,qe=37816,Je=37817,Ye=37818,Xe=37819,Ze=37820,Qe=37821,$e=36492,et=36494,tt=36495,nt=36283,rt=36284,it=36285,at=36286,ot=2300,st=2301,ct=2302,lt=2303,ut=2400,dt=2401,ft=2402,pt=3200,mt=`srgb`,ht=`srgb-linear`,gt=`linear`,_t=`srgb`,vt=7680,yt=35044,bt=35048,xt=`300 es`,St=2e3;function Ct(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function wt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Tt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Et(){let e=Tt(`canvas`);return e.style.display=`block`,e}var Dt={};function Ot(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function kt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=kt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=kt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function At(...e){let t=e.join(` `);t in Dt||(Dt[t]=!0,R(...e))}function jt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Mt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Nt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Pt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ft=1234567,It=Math.PI/180,Lt=180/Math.PI;function Rt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pt[e&255]+Pt[e>>8&255]+Pt[e>>16&255]+Pt[e>>24&255]+`-`+Pt[t&255]+Pt[t>>8&255]+`-`+Pt[t>>16&15|64]+Pt[t>>24&255]+`-`+Pt[n&63|128]+Pt[n>>8&255]+`-`+Pt[n>>16&255]+Pt[n>>24&255]+Pt[r&255]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function zt(e,t){return(e%t+t)%t}function Bt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Vt(e,t,n){return e===t?0:(n-e)/(t-e)}function Ht(e,t,n){return(1-n)*e+n*t}function Ut(e,t,n,r){return Ht(e,t,1-Math.exp(-n*r))}function Wt(e,t=1){return t-Math.abs(zt(e,t*2)-t)}function Gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Kt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function qt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Jt(e,t){return e+Math.random()*(t-e)}function Yt(e){return e*(.5-Math.random())}function Xt(e){e!==void 0&&(Ft=e);let t=Ft+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zt(e){return e*It}function Qt(e){return e*Lt}function $t(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function en(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function tn(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function nn(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function rn(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function an(e,t){if(t.constructor===Float32Array)return e;let n=rn(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function on(e,t){if(t.constructor===Float32Array)return e;let n=rn(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var sn={DEG2RAD:It,RAD2DEG:Lt,generateUUID:Rt,clamp:B,euclideanModulo:zt,mapLinear:Bt,inverseLerp:Vt,lerp:Ht,damp:Ut,pingpong:Wt,smoothstep:Gt,smootherstep:Kt,randInt:qt,randFloat:Jt,randFloatSpread:Yt,seededRandom:Xt,degToRad:Zt,radToDeg:Qt,isPowerOfTwo:$t,ceilPowerOfTwo:en,floorPowerOfTwo:tn,setQuaternionFromProperEuler:nn,normalize:on,denormalize:an},V=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(un.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(un.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ln.copy(this).projectOnVector(e),this.sub(ln)}reflect(e){return this.sub(ln.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ln=new H,un=new cn,U=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return At(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(dn.makeScale(e,t)),this}rotate(e){return At(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(dn.makeRotation(-e)),this}translate(e,t){return At(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(dn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dn=new U,fn=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pn=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mn(){let e={enabled:!0,workingColorSpace:ht,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=hn(e.r),e.g=hn(e.g),e.b=hn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=gn(e.r),e.g=gn(e.g),e.b=gn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?gt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ht]:{primaries:t,whitePoint:r,transfer:gt,toXYZ:fn,fromXYZ:pn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:t,whitePoint:r,transfer:_t,toXYZ:fn,fromXYZ:pn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),e}var W=mn();function hn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function gn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var _n,vn=class{static getDataURL(e,t=`image/png`){if(../_offline-stub.js)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_n===void 0&&(_n=Tt(`canvas`)),_n.width=e.width,_n.height=e.height;let t=_n.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=_n}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Tt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=hn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(hn(t[e]/255)*255):t[e]=hn(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},yn=0,bn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yn++}),this.uuid=Rt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(xn(r[t].image)):e.push(xn(r[t]))}else e=xn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function xn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?vn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Sn=0,Cn=new H,wn=class e extends Nt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=j,i=j,a=N,o=ie,s=be,c=ae,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sn++}),this.uuid=Rt(),this.name=``,this.source=new bn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Cn).x}get height(){return this.source.getSize(Cn).y}get depth(){return this.source.getSize(Cn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case A:e.x-=Math.floor(e.x);break;case j:e.x=e.x<0?0:1;break;case ee:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case A:e.y-=Math.floor(e.y);break;case j:e.y=e.y<0?0:1;break;case ee:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null,wn.DEFAULT_MAPPING=300,wn.DEFAULT_ANISOTROPY=1;var Tn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},En=class extends Nt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:N,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tn(0,0,e,t),this.scissorTest=!1,this.viewport=new Tn(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new wn({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:N,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new bn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Dn=class extends En{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},On=class extends wn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=M,this.minFilter=M,this.wrapR=j,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},kn=class extends wn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=M,this.minFilter=M,this.wrapR=j,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},G=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/An.setFromMatrixColumn(e,0).length(),i=1/An.setFromMatrixColumn(e,1).length(),a=1/An.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mn,e,Nn)}lookAt(e,t,n){let r=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Pn.crossVectors(n,In),Pn.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Pn.crossVectors(n,In)),Pn.normalize(),Fn.crossVectors(In,Pn),r[0]=Pn.x,r[4]=Fn.x,r[8]=In.x,r[1]=Pn.y,r[5]=Fn.y,r[9]=In.y,r[2]=Pn.z,r[6]=Fn.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*N,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*N,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*N,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=An.set(r[0],r[1],r[2]).length(),o=An.set(r[4],r[5],r[6]).length(),s=An.set(r[8],r[9],r[10]).length();i<0&&(a=-a),jn.copy(this);let c=1/a,l=1/o,u=1/s;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=l,jn.elements[5]*=l,jn.elements[6]*=l,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=St,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=St,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},An=new H,jn=new G,Mn=new H(0,0,0),Nn=new H(1,1,1),Pn=new H,Fn=new H,In=new H,Ln=new G,Rn=new cn,zn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ln.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ln,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rn.setFromEuler(this),this.setFromQuaternion(Rn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER=`XYZ`;var Bn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Vn=0,Hn=new H,Un=new cn,Wn=new G,Gn=new H,Kn=new H,qn=new H,Jn=new cn,Yn=new H(1,0,0),Xn=new H(0,1,0),Zn=new H(0,0,1),Qn={type:`added`},$n={type:`removed`},er={type:`childadded`,child:null},tr={type:`childremoved`,child:null},nr=class e extends Nt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vn++}),this.uuid=Rt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new zn,r=new cn,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new G},normalMatrix:{value:new U}}),this.matrix=new G,this.matrixWorld=new G,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.multiply(Un),this}rotateOnWorldAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.premultiply(Un),this}rotateX(e){return this.rotateOnAxis(Yn,e)}rotateY(e){return this.rotateOnAxis(Xn,e)}rotateZ(e){return this.rotateOnAxis(Zn,e)}translateOnAxis(e,t){return Hn.copy(e).applyQuaternion(this.quaternion),this.position.add(Hn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yn,e)}translateY(e){return this.translateOnAxis(Xn,e)}translateZ(e){return this.translateOnAxis(Zn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gn.copy(e):Gn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Kn,Gn,this.up):Wn.lookAt(Gn,Kn,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),Un.setFromRotationMatrix(Wn),this.quaternion.premultiply(Un.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qn),er.child=e,this.dispatchEvent(er),er.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($n),tr.child=e,this.dispatchEvent(tr),tr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qn),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,e,qn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,Jn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};nr.DEFAULT_UP=new H(0,1,0),nr.DEFAULT_MATRIX_AUTO_UPDATE=!0,nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rr=class extends nr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ir={type:`move`},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ir)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},or={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},cr={h:0,s:0,l:0};function lr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,W.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=W.workingColorSpace){return this.r=e,this.g=t,this.b=n,W.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=W.workingColorSpace){if(e=zt(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=lr(i,r,e+1/3),this.g=lr(i,r,e),this.b=lr(i,r,e-1/3)}return W.colorSpaceToWorking(this,r),this}setStyle(e,t=mt){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=or[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hn(e.r),this.g=hn(e.g),this.b=hn(e.b),this}copyLinearToSRGB(e){return this.r=gn(e.r),this.g=gn(e.g),this.b=gn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return W.workingToColorSpace(ur.copy(this),e),Math.round(B(ur.r*255,0,255))*65536+Math.round(B(ur.g*255,0,255))*256+Math.round(B(ur.b*255,0,255))}getHexString(e=mt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=W.workingColorSpace){W.workingToColorSpace(ur.copy(this),t);let n=ur.r,r=ur.g,i=ur.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=W.workingColorSpace){return W.workingToColorSpace(ur.copy(this),t),e.r=ur.r,e.g=ur.g,e.b=ur.b,e}getStyle(e=mt){W.workingToColorSpace(ur.copy(this),e);let t=ur.r,n=ur.g,r=ur.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(cr);let n=Ht(sr.h,cr.h,t),r=Ht(sr.s,cr.s,t),i=Ht(sr.l,cr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ur=new K;K.NAMES=or;var dr=class extends nr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fr=new H,pr=new H,mr=new H,hr=new H,gr=new H,_r=new H,vr=new H,yr=new H,br=new H,xr=new H,Sr=new Tn,Cr=new Tn,wr=new Tn,Tr=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),fr.subVectors(e,t),r.cross(fr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){fr.subVectors(r,t),pr.subVectors(n,t),mr.subVectors(e,t);let a=fr.dot(fr),o=fr.dot(pr),s=fr.dot(mr),c=pr.dot(pr),l=pr.dot(mr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hr)!==null&&hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,hr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,hr.x),s.addScaledVector(a,hr.y),s.addScaledVector(o,hr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Sr.setScalar(0),Cr.setScalar(0),wr.setScalar(0),Sr.fromBufferAttribute(e,t),Cr.fromBufferAttribute(e,n),wr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Sr,i.x),a.addScaledVector(Cr,i.y),a.addScaledVector(wr,i.z),a}static isFrontFacing(e,t,n,r){return fr.subVectors(n,t),pr.subVectors(e,t),fr.cross(pr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fr.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),fr.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;gr.subVectors(r,n),_r.subVectors(i,n),yr.subVectors(e,n);let s=gr.dot(yr),c=_r.dot(yr);if(s<=0&&c<=0)return t.copy(n);br.subVectors(e,r);let l=gr.dot(br),u=_r.dot(br);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(gr,a);xr.subVectors(e,i);let f=gr.dot(xr),p=_r.dot(xr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(_r,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return vr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(vr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(gr,a).addScaledVector(_r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Er=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Or.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Or):Or.fromBufferAttribute(r,t),Or.applyMatrix4(e.matrixWorld),this.expandByPoint(Or);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Or),Or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Lr.subVectors(this.max,Ir),Ar.subVectors(e.a,Ir),jr.subVectors(e.b,Ir),Mr.subVectors(e.c,Ir),Nr.subVectors(jr,Ar),Pr.subVectors(Mr,jr),Fr.subVectors(Ar,Mr);let t=[0,-Nr.z,Nr.y,0,-Pr.z,Pr.y,0,-Fr.z,Fr.y,Nr.z,0,-Nr.x,Pr.z,0,-Pr.x,Fr.z,0,-Fr.x,-Nr.y,Nr.x,0,-Pr.y,Pr.x,0,-Fr.y,Fr.x,0];return!Br(t,Ar,jr,Mr,Lr)||(t=[1,0,0,0,1,0,0,0,1],!Br(t,Ar,jr,Mr,Lr))?!1:(Rr.crossVectors(Nr,Pr),t=[Rr.x,Rr.y,Rr.z],Br(t,Ar,jr,Mr,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Or).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Or).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Dr=[new H,new H,new H,new H,new H,new H,new H,new H],Or=new H,kr=new Er,Ar=new H,jr=new H,Mr=new H,Nr=new H,Pr=new H,Fr=new H,Ir=new H,Lr=new H,Rr=new H,zr=new H;function Br(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){zr.fromArray(e,a);let o=i.x*Math.abs(zr.x)+i.y*Math.abs(zr.y)+i.z*Math.abs(zr.z),s=t.dot(zr),c=n.dot(zr),l=r.dot(zr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Vr=new H,Hr=new V,Ur=0,Wr=class extends Nt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ur++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=yt,this.updateRanges=[],this.gpuType=de,this.version=0,this._normalizationScale=e===void 0?void 0:rn(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix4(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyNormalMatrix(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.transformDirection(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?an(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?on(e,this.array):Math.round(e*t)}},Gr=class extends Wr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Kr=class extends Wr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},q=class extends Wr{constructor(e,t,n){super(new Float32Array(e),t,n)}},qr=new Er,Jr=new H,Yr=new H,Xr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?qr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);let t=Jr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Jr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Yr)),this.expandByPoint(Jr.copy(e.center).sub(Yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zr=0,Qr=new G,$r=new nr,ei=new H,ti=new Er,ni=new Er,ri=new H,ii=class e extends Nt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zr++}),this.uuid=Rt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ct(e)?Kr:Gr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qr.makeRotationFromQuaternion(e),this.applyMatrix4(Qr),this}rotateX(e){return Qr.makeRotationX(e),this.applyMatrix4(Qr),this}rotateY(e){return Qr.makeRotationY(e),this.applyMatrix4(Qr),this}rotateZ(e){return Qr.makeRotationZ(e),this.applyMatrix4(Qr),this}translate(e,t,n){return Qr.makeTranslation(e,t,n),this.applyMatrix4(Qr),this}scale(e,t,n){return Qr.makeScale(e,t,n),this.applyMatrix4(Qr),this}lookAt(e){return $r.lookAt(e),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new q(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ti.setFromBufferAttribute(n),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ni.setFromBufferAttribute(n),this.morphTargetsRelative?(ri.addVectors(ti.min,ni.min),ti.expandByPoint(ri),ri.addVectors(ti.max,ni.max),ti.expandByPoint(ri)):(ti.expandByPoint(ni.min),ti.expandByPoint(ni.max))}ti.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ri.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ri));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ri.fromBufferAttribute(a,t),o&&(ei.fromBufferAttribute(e,t),ri.add(ei)),r=Math.max(r,n.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Wr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let l=new H,u=new H,d=new H,f=new V,p=new V,m=new V,h=new H,g=new H;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new H,b=new H,x=new H,S=new H;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Wr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ri.fromBufferAttribute(e,t),ri.normalize(),e.setXYZ(t,ri.x,ri.y,ri.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Wr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ai=new H,oi=new H,si=new U,ci=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ai.subVectors(n,t).cross(oi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ai),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||si.getNormalMatrix(e),r=this.coplanarPoint(ai).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},li=0,ui=class extends Nt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:li++}),this.uuid=Rt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vt,this.stencilZFail=vt,this.stencilZPass=vt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ci().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},di=new H,fi=new H,pi=new H,mi=new H,hi=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fi.copy(e).add(t).multiplyScalar(.5),pi.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(fi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(pi),o=mi.dot(this.direction),s=-mi.dot(pi),c=mi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fi).addScaledVector(pi,d),f}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),r=di.dot(di)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,ne=C/w,N=1/w,re=T-te*D,ie=E-ne*D,ae=O-te*A,oe=k-ne*A,se=j-te*M,ce=ee-ne*M,le=se*oe-ce*ae,ue=re*ce-ie*se,de=ae*ie-oe*re;if(r){if(le<0||ue<0||de<0)return null}else if((le<0||ue<0||de<0)&&(le>0||ue>0||de>0))return null;let fe=le+ue+de;if(fe===0)return null;let pe=N*(le*D+ue*A+de*M);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gi=class extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_i=new G,vi=new hi,yi=new Xr,bi=new H,xi=new H,Si=new H,Ci=new H,wi=new H,Ti=new H,Ei=new H,Di=new H,J=class extends nr{constructor(e=new ii,t=new gi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ti.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(wi.fromBufferAttribute(s,e),a?Ti.addScaledVector(wi,r):Ti.addScaledVector(wi.sub(t),r))}t.add(Ti)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yi.copy(n.boundingSphere),yi.applyMatrix4(i),vi.copy(e.ray).recast(e.near),yi.containsPoint(vi.origin)===!1&&(vi.intersectSphere(yi,bi)===null||vi.origin.distanceToSquared(bi)>(e.far-e.near)**2)||(_i.copy(i).invert(),vi.copy(e.ray).applyMatrix4(_i),(n.boundingBox===null||vi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ki(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ki(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ki(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ki(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Oi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Di.copy(s),Di.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Di);return l<n.near||l>n.far?null:{distance:l,point:Di.clone(),object:e}}function ki(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,xi),e.getVertexPosition(c,Si),e.getVertexPosition(l,Ci);let u=Oi(e,t,n,r,xi,Si,Ci,Ei);if(u){let e=new H;Tr.getBarycoord(Ei,xi,Si,Ci,e),i&&(u.uv=Tr.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=Tr.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=Tr.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};Tr.getNormal(xi,Si,Ci,t.normal),u.face=t,u.barycoord=e}return u}var Ai=class extends wn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=M,l=M,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ji=class extends Wr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mi=new G,Ni=new G,Pi=[],Fi=new Er,Ii=new G,Li=new J,Ri=new Xr,zi=class extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ii)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Fi.copy(e.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Fi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Ri.copy(e.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(Ri)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Li.geometry=this.geometry,Li.material=this.material,Li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ri.copy(this.boundingSphere),Ri.applyMatrix4(n),e.ray.intersectsSphere(Ri)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Mi),Ni.multiplyMatrices(n,Mi),Li.matrixWorld=Ni,Li.raycast(e,Pi);for(let e=0,n=Pi.length;e<n;e++){let n=Pi[e];n.instanceId=i,n.object=this,t.push(n)}Pi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ai(new Float32Array(r*this.count),r,this.count,Ce,de));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bi=new Xr,Vi=new V(.5,.5),Hi=new H,Ui=class{constructor(e=new ci,t=new ci,n=new ci,r=new ci,i=new ci,a=new ci){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=St,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476+Vi.distanceTo(e.center),Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Hi.x=r.normal.x>0?e.max.x:e.min.x,Hi.y=r.normal.y>0?e.max.y:e.min.y,Hi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wi=new G,Gi=class e{constructor(){this.coordinateSystem=St,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Wi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Ui),n[e].setFromProjectionMatrix(Wi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Ui),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Ki=class extends wn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qi=class extends wn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ji=class extends wn{constructor(e,t,n=ue,r,i,a,o=M,s=M,c,l=xe,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Yi=class extends Ji{constructor(e,t=ue,n=301,r,i,a=M,o=M,s,c=xe){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xi=class extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zi=class e extends ii{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new q(c,3)),this.setAttribute(`normal`,new q(l,3)),this.setAttribute(`uv`,new q(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Qi=class e extends ii{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new H,g=new H;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new q(o,3)),this.setAttribute(`normal`,new q(s,3)),this.setAttribute(`uv`,new q(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},$i=class e extends ii{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new q(u,3)),this.setAttribute(`normal`,new q(d,3)),this.setAttribute(`uv`,new q(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ea=class e extends $i{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ta=class e extends ii{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new q(i,3)),this.setAttribute(`normal`,new q(i.slice(),3)),this.setAttribute(`uv`,new q(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},na=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){R(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new V:new H);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,r=[],i=[],a=[],o=new H,s=new G;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new H)}i[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(B(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(B(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ra=class extends na{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new V){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ia=class extends ra{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function aa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var oa=new H,sa=new H,ca=new aa,la=new aa,ua=new aa,da=class extends na{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(sa.subVectors(r[0],r[1]).add(r[0]),c=sa);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(oa.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=oa),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ca.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),la.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ua.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ca.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),la.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ua.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ca.calc(s),la.calc(s),ua.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fa(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function pa(e,t){let n=1-e;return n*n*t}function ma(e,t){return 2*(1-e)*e*t}function ha(e,t){return e*e*t}function ga(e,t,n,r){return pa(e,t)+ma(e,n)+ha(e,r)}function _a(e,t){let n=1-e;return n*n*n*t}function va(e,t){let n=1-e;return 3*n*n*e*t}function ya(e,t){return 3*(1-e)*e*e*t}function ba(e,t){return e*e*e*t}function xa(e,t,n,r,i){return _a(e,t)+va(e,n)+ya(e,r)+ba(e,i)}var Sa=class extends na{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(xa(e,r.x,i.x,a.x,o.x),xa(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ca=class extends na{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(xa(e,r.x,i.x,a.x,o.x),xa(e,r.y,i.y,a.y,o.y),xa(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wa=class extends na{constructor(e=new V,t=new V){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends na{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends na{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ga(e,r.x,i.x,a.x),ga(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends na{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ga(e,r.x,i.x,a.x),ga(e,r.y,i.y,a.y),ga(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends na{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new V){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(fa(o,s.x,c.x,l.x,u.x),fa(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this}},ka=Object.freeze({__proto__:null,ArcCurve:ia,CatmullRomCurve3:da,CubicBezierCurve:Sa,CubicBezierCurve3:Ca,EllipseCurve:ra,LineCurve:wa,LineCurve3:Ta,QuadraticBezierCurve:Ea,QuadraticBezierCurve3:Da,SplineCurve:Oa}),Aa=class extends na{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ka[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ka[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},ja=class extends Aa{constructor(e){super(),this.type=`Path`,this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new wa(this.currentPoint.clone(),new V(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ea(this.currentPoint.clone(),new V(e,t),new V(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Sa(this.currentPoint.clone(),new V(e,t),new V(n,r),new V(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Oa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ra(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ma=class extends ja{constructor(e){super(e),this.uuid=Rt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ja().fromJSON(n))}return this}};function Na(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Pa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Va(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ia(a,o,n,s,c,l,0),o}function Pa(e,t,n,r,i){let a;if(i===fo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=co(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=co(i/r|0,e[i],e[i+1],a);return a&&eo(a,a.next)&&(lo(a),a=a.next),a}function Fa(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(eo(n,n.next)||$a(n.prev,n,n.next)===0)){if(lo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ia(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ka(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ra(e,r,i,a):La(e))t.push(c.i,e.i,l.i),lo(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=za(Fa(e),t),Ia(e,t,n,r,i,a,2)):o===2&&Ba(e,t,n,r,i,a):Ia(Fa(e),t,n,r,i,a,1);break}}}function La(e){let t=e.prev,n=e,r=e.next;if($a(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Za(i,s,a,c,o,l,m.x,m.y)&&$a(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ra(e,t,n,r){let i=e.prev,a=e,o=e.next;if($a(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Ja(p,m,t,n,r),v=Ja(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Za(s,u,c,d,l,f,y.x,y.y)&&$a(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Za(s,u,c,d,l,f,b.x,b.y)&&$a(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Za(s,u,c,d,l,f,y.x,y.y)&&$a(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Za(s,u,c,d,l,f,b.x,b.y)&&$a(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function za(e,t){let n=e;do{let r=n.prev,i=n.next.next;!eo(r,i)&&to(r,n,n.next,i)&&ao(r,i)&&ao(i,r)&&(t.push(r.i,n.i,i.i),lo(n),lo(n.next),n=e=i),n=n.next}while(n!==e);return Fa(n)}function Ba(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Qa(o,e)){let s=so(o,e);o=Fa(o,o.next),s=Fa(s,s.next),Ia(o,t,n,r,i,a,0),Ia(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Va(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Pa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ya(o))}i.sort(Ha);for(let e=0;e<i.length;e++)n=Ua(i[e],n);return n}function Ha(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ua(e,t){let n=Wa(e,t);if(!n)return t;let r=so(n,e);return Fa(r,r.next),Fa(n,n.next)}function Wa(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(eo(e,n))return n;do{if(eo(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Xa(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);ao(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Ga(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Ga(e,t){return $a(e.prev,e,t.prev)<0&&$a(t.next,e,e.next)<0}function Ka(e,t,n,r){let i=e;do i.z===0&&(i.z=Ja(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,qa(i)}function qa(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Ja(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ya(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Xa(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Za(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Xa(e,t,n,r,i,a,o,s)}function Qa(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!io(e,t)&&(ao(e,t)&&ao(t,e)&&oo(e,t)&&($a(e.prev,e,t.prev)||$a(e,t.prev,t))||eo(e,t)&&$a(e.prev,e,e.next)>0&&$a(t.prev,t,t.next)>0)}function $a(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function eo(e,t){return e.x===t.x&&e.y===t.y}function to(e,t,n,r){let i=ro($a(e,t,n)),a=ro($a(e,t,r)),o=ro($a(n,r,e)),s=ro($a(n,r,t));return!!(i!==a&&o!==s||i===0&&no(e,n,t)||a===0&&no(e,r,t)||o===0&&no(n,e,r)||s===0&&no(n,t,r))}function no(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function ro(e){return e>0?1:e<0?-1:0}function io(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&to(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ao(e,t){return $a(e.prev,e,e.next)<0?$a(e,t,e.next)>=0&&$a(e,e.prev,t)>=0:$a(e,t,e.prev)<0||$a(e,e.next,t)<0}function oo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function so(e,t){let n=uo(e.i,e.x,e.y),r=uo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function co(e,t,n,r){let i=uo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function lo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function uo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var po=class{static triangulate(e,t,n=2){return Na(e,t,n)}},mo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];ho(e),go(n,e);let a=e.length;t.forEach(ho);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,go(n,t[e]);let o=po.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function ho(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function go(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var _o=class e extends ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},vo=class e extends ii{constructor(e=[new V(0,-.5),new V(.5,0),new V(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=B(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new H,d=new V,f=new H,p=new H,m=new H,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new q(a,3)),this.setAttribute(`uv`,new q(o,2)),this.setAttribute(`normal`,new q(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},yo=class e extends ta{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},bo=class e extends ii{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new q(p,3)),this.setAttribute(`normal`,new q(m,3)),this.setAttribute(`uv`,new q(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},xo=class e extends ii{constructor(e=new Ma([new V(0,.5),new V(-.5,-.5),new V(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new q(r,3)),this.setAttribute(`normal`,new q(i,3)),this.setAttribute(`uv`,new q(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;mo.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];mo.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=mo.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return So(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function So(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Co=class e extends ii{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new q(p,3)),this.setAttribute(`normal`,new q(m,3)),this.setAttribute(`uv`,new q(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},wo=class e extends ii{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new H,f=new H,p=new H;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new q(c,3)),this.setAttribute(`normal`,new q(l,3)),this.setAttribute(`uv`,new q(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},To=class e extends ii{constructor(e=new Da(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,s=new H,c=new V,l=new H,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new q(u,3)),this.setAttribute(`normal`,new q(d,3)),this.setAttribute(`uv`,new q(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ka[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Eo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Oo(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Oo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Do(e){let t={};for(let n=0;n<e.length;n++){let r=Eo(e[n]);for(let e in r)t[e]=r[e]}return t}function Oo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ko(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ao(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:W.workingColorSpace}var jo={clone:Eo,merge:Do},Mo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,No=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Po=class extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mo,this.fragmentShader=No,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=ko(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Tn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new G().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fo=class extends Po{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Io=class extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lo=class extends Io{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return B(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new K(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new K(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new K(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return At(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){At(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ro=class extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=pt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zo=class extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Vo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ho=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Uo=class extends Ho{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ut,endingEnd:ut}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case dt:i=e,o=2*t-n;break;case ft:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case dt:a=e,s=2*n-t;break;case ft:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Wo=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Go=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ko=class extends Ho{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Yo(n,t,g,y,r);i[p]=qo(x,o,_,b,m)}return i}};function qo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Jo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Yo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=qo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Jo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Xo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Bo(t,this.TimeBufferType),this.values=Bo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bo(e.times,Array),values:Bo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Vo(e.settings)&&(n.settings={inTangents:Bo(e.settings.inTangents,Array),outTangents:Bo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ko(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ot:t=this.InterpolantFactoryMethodDiscrete;break;case st:t=this.InterpolantFactoryMethodLinear;break;case ct:t=this.InterpolantFactoryMethodSmooth;break;case lt:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ot;case this.InterpolantFactoryMethodLinear:return st;case this.InterpolantFactoryMethodSmooth:return ct;case this.InterpolantFactoryMethodBezier:return lt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Vo(this.settings)&&(Zo(this.settings.inTangents,e),Zo(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Vo(this.settings)&&(Qo(this.settings.inTangents,e),Qo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&wt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ct,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Vo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Zo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Qo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Xo.prototype.ValueTypeName=``,Xo.prototype.TimeBufferType=Float32Array,Xo.prototype.ValueBufferType=Float32Array,Xo.prototype.DefaultInterpolation=st;var $o=class extends Xo{constructor(e,t,n){super(e,t,n)}};$o.prototype.ValueTypeName=`bool`,$o.prototype.ValueBufferType=Array,$o.prototype.DefaultInterpolation=ot,$o.prototype.InterpolantFactoryMethodLinear=void 0,$o.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Xo{constructor(e,t,n,r){super(e,t,n,r)}};es.prototype.ValueTypeName=`color`;var ts=class extends Xo{constructor(e,t,n,r){super(e,t,n,r)}};ts.prototype.ValueTypeName=`number`;var ns=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)cn.slerpFlat(i,0,a,c-o,a,c,s);return i}},rs=class extends Xo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ns(this.times,this.values,this.getValueSize(),e)}};rs.prototype.ValueTypeName=`quaternion`,rs.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Xo{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName=`string`,is.prototype.ValueBufferType=Array,is.prototype.DefaultInterpolation=ot,is.prototype.InterpolantFactoryMethodLinear=void 0,is.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Xo{constructor(e,t,n,r){super(e,t,n,r)}};as.prototype.ValueTypeName=`vector`;var os=class extends nr{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ss=class extends os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(nr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},cs=new G,ls=new H,us=new H,ds=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=ae,this.map=null,this.mapPass=null,this.matrix=new G,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new Tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ls.setFromMatrixPosition(e.matrixWorld),t.position.copy(ls),us.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(us),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){cs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(cs,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(cs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fs=new H,ps=new cn,ms=new H,hs=class extends nr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new G,this.projectionMatrix=new G,this.projectionMatrixInverse=new G,this.coordinateSystem=St,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fs,ps,ms),ms.x===1&&ms.y===1&&ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fs,ps,ms.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fs,ps,ms),ms.x===1&&ms.y===1&&ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fs,ps,ms.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gs=new H,_s=new V,vs=new V,ys=class extends hs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(It*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lt*2*Math.atan(Math.tan(It*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,_s,vs),t.subVectors(vs,_s)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(It*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=class extends hs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xs=class extends ds{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(nr.DEFAULT_UP),this.updateMatrix(),this.target=new nr,this.shadow=new xs}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Cs=class extends ii{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},ws=-90,Ts=1,Es=class extends nr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ys(ws,Ts,e,t);r.layers=this.layers,this.add(r);let i=new ys(ws,Ts,e,t);i.layers=this.layers,this.add(i);let a=new ys(ws,Ts,e,t);a.layers=this.layers,this.add(a);let o=new ys(ws,Ts,e,t);o.layers=this.layers,this.add(o);let s=new ys(ws,Ts,e,t);s.layers=this.layers,this.add(s);let c=new ys(ws,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ds=class extends ys{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Os=`\\[\\]\\.:\\/`,ks=RegExp(`[\\[\\]\\.:\\/]`,`g`),As=`[^\\[\\]\\.:\\/]`,js=`[^`+Os.replace(`\\.`,``)+`]`,Ms=`((?:WC+[\\/:])*)`.replace(`WC`,As),Ns=`(WCOD+)?`.replace(`WCOD`,js),Ps=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,As),Fs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,As),Is=RegExp(`^`+Ms+Ns+Ps+Fs+`$`),Ls=[`material`,`materials`,`bones`,`map`],Rs=class{constructor(e,t,n){let r=n||zs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ks,``)}static parseTrackName(e){let t=Is.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ls.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zs.Composite=Rs,zs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},zs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},zs.prototype.GetterByBindingType=[zs.prototype._getValue_direct,zs.prototype._getValue_array,zs.prototype._getValue_arrayElement,zs.prototype._getValue_toArray],zs.prototype.SetterByBindingTypeAndVersioning=[[zs.prototype._setValue_direct,zs.prototype._setValue_direct_setNeedsUpdate,zs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zs.prototype._setValue_array,zs.prototype._setValue_array_setNeedsUpdate,zs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zs.prototype._setValue_arrayElement,zs.prototype._setValue_arrayElement_setNeedsUpdate,zs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zs.prototype._setValue_fromArray,zs.prototype._setValue_fromArray_setNeedsUpdate,zs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bs=new G,Vs=class{constructor(e,t,n=0,r=1/0){this.ray=new hi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Bn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):z(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Bs.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bs),this}intersectObject(e,t=!0,n=[]){return Us(e,this,n,t),n.sort(Hs),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Us(e[r],this,n,t);return n.sort(Hs),n}};function Hs(e,t){return e.distance-t.distance}function Us(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Us(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Ws(e,t,n,r){let i=Gs(r);switch(n){case ve:return e*t;case Ce:return e*t/i.components*i.byteLength;case we:return e*t/i.components*i.byteLength;case Te:return e*t*2/i.components*i.byteLength;case Ee:return e*t*2/i.components*i.byteLength;case ye:return e*t*3/i.components*i.byteLength;case be:return e*t*4/i.components*i.byteLength;case De:return e*t*4/i.components*i.byteLength;case Oe:case ke:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ae:case je:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ne:case Fe:return Math.max(e,16)*Math.max(t,8)/4;case Me:case Pe:return Math.max(e,8)*Math.max(t,8)/2;case P:case Ie:case Re:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Le:case ze:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case L:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Be:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ve:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case He:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ue:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case We:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ge:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ke:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case qe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Je:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ye:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Xe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ze:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Qe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case $e:case et:case tt:return Math.ceil(e/4)*Math.ceil(t/4)*16;case nt:case rt:return Math.ceil(e/4)*Math.ceil(t/4)*8;case it:case at:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Gs(e){switch(e){case ae:case oe:return{byteLength:1,components:1};case ce:case se:case fe:return{byteLength:2,components:1};case pe:case me:return{byteLength:2,components:4};case ue:case le:case de:return{byteLength:4,components:1};case ge:case _e:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Ks(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function qs(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},X={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},Js={basic:{uniforms:Do([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:Do([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:Do([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:Do([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:Do([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new K(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:Do([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:Do([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:Do([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:Do([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:Do([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:Do([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:Do([X.common,X.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:Do([X.lights,X.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};Js.physical={uniforms:Do([Js.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var Ys={r:0,b:0,g:0},Xs=new G,Zs=new U;Zs.set(-1,0,0,0,1,0,0,0,1);function Qs(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new J(new Zi(1,1,1),new Po({name:`BackgroundCubeMaterial`,uniforms:Eo(Js.backgroundCube.uniforms),vertexShader:Js.backgroundCube.vertexShader,fragmentShader:Js.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Xs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zs),l.material.toneMapped=W.getTransfer(i.colorSpace)!==_t,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new J(new bo(2,2),new Po({name:`BackgroundMaterial`,uniforms:Eo(Js.background.uniforms),vertexShader:Js.background.vertexShader,fragmentShader:Js.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=W.getTransfer(i.colorSpace)!==_t,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ys,Ao(e)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function $s(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ec(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function tc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&R(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function nc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ci,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var rc=class extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ki(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zi(5,5,5),i=new Po({name:`CubemapFromEquirect`,uniforms:Eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new J(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=N),new Es(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ic=256,ac=3,oc=20,sc=256,cc=16,lc=3,uc=new H,dc=new K,fc=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Es(1,10,null),this._boxMesh=new J(new Zi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=uc}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(dc));let h=new Es(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ic,tn(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?ic:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=pc(e,!1,!1),n=Math.log2(e)-ac;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=pc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=hc(),this._integrationMaterial=gc());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/cc);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-lc)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(sc*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=_c());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function pc(e,t,n){return new rc(e,{minFilter:ie,generateMipmaps:t,type:fe,colorSpace:ht,depthBuffer:n})}function mc(e,t,n){return new Po({name:e,uniforms:t,vertexShader:Y.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function hc(){return mc(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${sc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gc(){return mc(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function _c(){return mc(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${oc}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function vc(){return mc(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function yc(){return mc(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function bc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new rc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new fc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new fc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function xc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&At(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Sc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Kr:Gr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Cc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function wc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Tc(e,t,n){let r=new WeakMap,i=new Tn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new On(h,p,m,u);g.type=de,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new V(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ec(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Dc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Oc(e,t,n,r,i,a){let o=new Dn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new ii;u.setAttribute(`position`,new q([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new q([0,2,0,0,2,0],2));let d=new Fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new J(u,d),p=new bs(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Dn(t,n,{type:fe,depthBuffer:!1,stencilBuffer:!1}),c=new Dn(t,n,{type:fe,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Ji(t,n),a===!0&&(l.format=Se,l.type=he)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},W.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Dc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var kc=new wn,Ac=new Ji(1,1),jc=new Yi(1),Mc=new On,Nc=new kn,Pc=new Ki,Fc=[],Ic=[],Lc=new Float32Array(16),Rc=new Float32Array(9),zc=new Float32Array(4);function Bc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Fc[i];if(a===void 0&&(a=new Float32Array(i),Fc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Vc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Hc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Uc(e,t){let n=Ic[t];n===void 0&&(n=new Int32Array(t),Ic[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Wc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Vc(n,t))return;e.uniform2fv(this.addr,t),Hc(n,t)}}function Kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Vc(n,t))return;e.uniform3fv(this.addr,t),Hc(n,t)}}function qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Vc(n,t))return;e.uniform4fv(this.addr,t),Hc(n,t)}}function Jc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Vc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Hc(n,t)}else{if(Vc(n,r))return;zc.set(r),e.uniformMatrix2fv(this.addr,!1,zc),Hc(n,r)}}function Yc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Vc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Hc(n,t)}else{if(Vc(n,r))return;Rc.set(r),e.uniformMatrix3fv(this.addr,!1,Rc),Hc(n,r)}}function Xc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Vc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Hc(n,t)}else{if(Vc(n,r))return;Lc.set(r),e.uniformMatrix4fv(this.addr,!1,Lc),Hc(n,r)}}function Zc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Vc(n,t))return;e.uniform2iv(this.addr,t),Hc(n,t)}}function $c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Vc(n,t))return;e.uniform3iv(this.addr,t),Hc(n,t)}}function el(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Vc(n,t))return;e.uniform4iv(this.addr,t),Hc(n,t)}}function tl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Vc(n,t))return;e.uniform2uiv(this.addr,t),Hc(n,t)}}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Vc(n,t))return;e.uniform3uiv(this.addr,t),Hc(n,t)}}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Vc(n,t))return;e.uniform4uiv(this.addr,t),Hc(n,t)}}function al(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function ol(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?al(Ac):kc,n.setTexture2D(t||a,i)}function sl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Nc,i)}function cl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?al(jc):Pc,n.setTextureCube(t||a,i)}function ll(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Mc,i)}function ul(e){switch(e){case 5126:return Wc;case 35664:return Gc;case 35665:return Kc;case 35666:return qc;case 35674:return Jc;case 35675:return Yc;case 35676:return Xc;case 5124:case 35670:return Zc;case 35667:case 35671:return Qc;case 35668:case 35672:return $c;case 35669:case 35673:return el;case 5125:return tl;case 36294:return nl;case 36295:return rl;case 36296:return il;case 35678:case 36198:case 36298:case 36306:case 35682:return ol;case 35679:case 36299:case 36307:return sl;case 35680:case 36300:case 36308:case 36293:return cl;case 36289:case 36303:case 36311:case 36292:return ll}}function dl(e,t){e.uniform1fv(this.addr,t)}function fl(e,t){let n=Bc(t,this.size,2);e.uniform2fv(this.addr,n)}function pl(e,t){let n=Bc(t,this.size,3);e.uniform3fv(this.addr,n)}function ml(e,t){let n=Bc(t,this.size,4);e.uniform4fv(this.addr,n)}function hl(e,t){let n=Bc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function gl(e,t){let n=Bc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function _l(e,t){let n=Bc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function vl(e,t){e.uniform1iv(this.addr,t)}function yl(e,t){e.uniform2iv(this.addr,t)}function bl(e,t){e.uniform3iv(this.addr,t)}function xl(e,t){e.uniform4iv(this.addr,t)}function Sl(e,t){e.uniform1uiv(this.addr,t)}function Cl(e,t){e.uniform2uiv(this.addr,t)}function wl(e,t){e.uniform3uiv(this.addr,t)}function Tl(e,t){e.uniform4uiv(this.addr,t)}function El(e,t,n){let r=this.cache,i=t.length,a=Uc(n,i);Vc(r,a)||(e.uniform1iv(this.addr,a),Hc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?al(Ac):kc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Dl(e,t,n){let r=this.cache,i=t.length,a=Uc(n,i);Vc(r,a)||(e.uniform1iv(this.addr,a),Hc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Nc,a[e])}function Ol(e,t,n){let r=this.cache,i=t.length,a=Uc(n,i);Vc(r,a)||(e.uniform1iv(this.addr,a),Hc(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?al(jc):Pc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function kl(e,t,n){let r=this.cache,i=t.length,a=Uc(n,i);Vc(r,a)||(e.uniform1iv(this.addr,a),Hc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Mc,a[e])}function Al(e){switch(e){case 5126:return dl;case 35664:return fl;case 35665:return pl;case 35666:return ml;case 35674:return hl;case 35675:return gl;case 35676:return _l;case 5124:case 35670:return vl;case 35667:case 35671:return yl;case 35668:case 35672:return bl;case 35669:case 35673:return xl;case 5125:return Sl;case 36294:return Cl;case 36295:return wl;case 36296:return Tl;case 35678:case 36198:case 36298:case 36306:case 35682:return El;case 35679:case 36299:case 36307:return Dl;case 35680:case 36300:case 36308:case 36293:return Ol;case 36289:case 36303:case 36311:case 36292:return kl}}var jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ul(t.type)}},Ml=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Al(t.type)}},Nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Pl=/(\w+)(\])?(\[|\.)?/g;function Fl(e,t){e.seq.push(t),e.map[t.id]=t}function Il(e,t,n){let r=e.name,i=r.length;for(Pl.lastIndex=0;;){let a=Pl.exec(r),o=Pl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Fl(n,l===void 0?new jl(s,e,t):new Ml(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Nl(s),Fl(n,e)),n=e}}}var Ll=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Il(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Rl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var zl=37297,Bl=0;function Vl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Hl=new U;function Ul(e){W._getMatrix(Hl,W.workingColorSpace,e);let t=`mat3( ${Hl.elements.map(e=>e.toFixed(4))} )`;switch(W.getTransfer(e)){case gt:return[t,`LinearTransferOETF`];case _t:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Wl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Vl(e.getShaderSource(t),r)}return i}function Gl(e,t){let n=Ul(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Kl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ql(e,t){let n=Kl[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Jl=new H;function Yl(){return W.getLuminanceCoefficients(Jl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Jl.x.toFixed(4)}, ${Jl.y.toFixed(4)}, ${Jl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Xl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter($l).join(`
`)}function Zl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ql(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function $l(e){return e!==``}function eu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function tu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nu=/^[ \t]*#include +<([\w\d./]+)>/gm;function ru(e){return e.replace(nu,iu)}function iu(e,t){let n=Y[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return ru(n)}var au=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(e){return e.replace(au,su)}function su(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function cu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var lu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function uu(e){return lu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var du={302:`ENVMAP_MODE_REFRACTION`};function fu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:du[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var pu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function mu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:pu[e.combine]||`ENVMAP_BLENDING_NONE`}function hu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=uu(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=fu(n),d=mu(n),f=Xl(n),p=Zl(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter($l).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter($l).join(`
`),g.length>0&&(g+=`
`)):(h=[cu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter($l).join(`
`),g=[cu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:ql(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,Gl(`linearToOutputTexel`,n.outputColorSpace),Yl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter($l).join(`
`)),o=ru(o),o=eu(o,n),o=tu(o,n),s=ru(s),s=eu(s,n),s=tu(s,n),o=ou(o),s=ou(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Rl(i,i.VERTEX_SHADER,v),x=Rl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Wl(i,b,`vertex`),n=Wl(i,x,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Ll(i,m),w=Ql(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,zl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bl++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var gu=0,_u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vu(e),t.set(e,n)),n}},vu=class{constructor(e){this.id=gu++,this.code=e,this.usedTimes=0}};function yu(e){return e===1030||e===37490||e===36285}function bu(e,t,n,r,i,a){let o=new Bn,s=new _u,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Js[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,N=!!b,re=N&&b.isPMREMTexture===!0,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.diffuseRoughness>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=fe&&!!i.anisotropyMap,xe=pe&&!!i.clearcoatMap,Se=pe&&!!i.clearcoatNormalMap,Ce=pe&&!!i.clearcoatRoughnessMap,we=me&&!!i.diffuseRoughnessMap,Te=_e&&!!i.iridescenceMap,Ee=_e&&!!i.iridescenceThicknessMap,De=ve&&!!i.sheenColorMap,Oe=ve&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=ye&&!!i.transmissionMap,Ne=ye&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,P=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Re=e.toneMapping);let F=re?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,ze={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:W.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:N,envMapMode:N&&b.mapping,envMapPMREM:re,envMapMaxLod:re?F.length-1:null,envMapSize:re?F[0].width:null,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&yu(i.normalMap.format),metalnessMap:ue,roughnessMap:de,anisotropy:fe,anisotropyMap:be,clearcoat:pe,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,diffuseRoughness:me,diffuseRoughnessMap:we,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:ye,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:P,alphaHash:Ie,combine:i.combine,mapUv:te&&p(i.map.channel),aoMapUv:ie&&p(i.aoMap.channel),lightMapUv:ae&&p(i.lightMap.channel),bumpMapUv:oe&&p(i.bumpMap.channel),normalMapUv:se&&p(i.normalMap.channel),displacementMapUv:ce&&p(i.displacementMap.channel),emissiveMapUv:le&&p(i.emissiveMap.channel),metalnessMapUv:ue&&p(i.metalnessMap.channel),roughnessMapUv:de&&p(i.roughnessMap.channel),anisotropyMapUv:be&&p(i.anisotropyMap.channel),clearcoatMapUv:xe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Te&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(i.sheenRoughnessMap.channel),specularMapUv:ke&&p(i.specularMap.channel),specularColorMapUv:Ae&&p(i.specularColorMap.channel),specularIntensityMapUv:je&&p(i.specularIntensityMap.channel),transmissionMapUv:Me&&p(i.transmissionMap.channel),thicknessMapUv:Ne&&p(i.thicknessMap.channel),alphaMapUv:Fe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(se||fe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(te||Fe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&W.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&W.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Js[t];n=jo.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new hu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function xu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Su(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Cu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function wu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Su),r.length>1&&r.sort(t||Cu),i.length>1&&i.sort(t||Cu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Tu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new wu,e.set(t,[i])):n>=r.length?(i=new wu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Eu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new K};break;case`SpotLight`:n={position:new H,direction:new H,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Du(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ou=0;function ku(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Au(e){let t=new Eu,n=Du(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new G,o=new G;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(ku);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ou++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ju(e){let t=new Au(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Mu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ju(e),t.set(n,[a])):r>=i.length?(a=new ju(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Nu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fu=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Iu=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Lu=new G,Ru=new H,zu=new H;function Bu(e,t,n){let r=new Ui,i=new V,a=new V,o=new Tn,s=new Ro,c=new zo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Po({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:Nu,fragmentShader:Pu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ii;m.setAttribute(`position`,new Wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new J(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Dn(i.x,i.y,{format:Te,type:fe,minFilter:N,magFilter:N,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ji(i.x,i.y,de),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=xe,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=M,d.map.depthTexture.magFilter=M}else l.isPointLight?(d.map=new rc(i.x),d.map.depthTexture=new Yi(i.x,ue)):(d.map=new Dn(i.x,i.y),d.map.depthTexture=new Ji(i.x,i.y,ue)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=xe,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=N,d.map.depthTexture.magFilter=N):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=M,d.map.depthTexture.magFilter=M);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ru.setFromMatrixPosition(l.matrixWorld),e.position.copy(Ru),zu.copy(e.position),zu.add(Fu[t]),e.up.copy(Iu[t]),e.lookAt(zu),e.updateMatrixWorld(),n.makeTranslation(-Ru.x,-Ru.y,-Ru.z),Lu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Lu,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Dn(i.x,i.y,{format:Te,type:fe}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Vu(e,t){function n(){let t=!1,n=new Tn,r=null,i=new Tn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Mt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let N=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Tn().fromArray(ie),se=new Tn().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),ue(e.CULL_FACE),_e(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(M&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+ee-1),N!==t&&(e.activeTexture(t),N=t)}function Te(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+ee-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Ee(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function P(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function F(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function ze(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function I(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function L(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:Fe,texImage3D:P,pixelStorei:Le,getParameter:Ie,updateUBOMapping:ze,uniformBlockBinding:I,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:Re,viewport:F,reset:L}}function Hu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new V,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):Tt(`canvas`)}function v(e,t,n){let r=1,i=L(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?gt:W.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){ae(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),se(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function ae(e){e.removeEventListener(`dispose`,O),E(e),le(e)}function oe(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ae(t):k(t))}m.clear(),d.clear()}function se(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ce(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function ce(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function le(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let ue=0;function de(){ue=0}function fe(){return ue}function pe(e){ue=e}function me(){let e=ue;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ue+=1,e}function he(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ge(t,i){let a=r.get(t);if(t.isVideoTexture&&ze(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Oe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function _e(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Oe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ve(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Oe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ye(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ke(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let be={[A]:e.REPEAT,[j]:e.CLAMP_TO_EDGE,[ee]:e.MIRRORED_REPEAT},xe={[M]:e.NEAREST,[te]:e.NEAREST_MIPMAP_NEAREST,[ne]:e.NEAREST_MIPMAP_LINEAR,[N]:e.LINEAR,[re]:e.LINEAR_MIPMAP_NEAREST,[ie]:e.LINEAR_MIPMAP_LINEAR},Ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function we(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,be[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,be[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,be[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,xe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,xe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Ce[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function Te(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=he(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ce(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Ee(e,t,n){return Math.floor(Math.floor(e/n)/t)}function De(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Ee(n.start,r.width,4),c=Ee(t.start,r.width,4);n.start<=i+1&&a===c&&Ee(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Oe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=Te(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=I(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);we(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===Se,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&De(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=Ws(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Ws(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=L(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=L(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ke(t,o,s){if(o.image.length!==6)return;let c=Te(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=I(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);we(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===Se,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=L(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ae(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Re(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function je(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?ye(i.depthTexture,0):ge(i.depthTexture,0);let u=c.__webglTexture,d=Re(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ne(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Me(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Me(i.__webglFramebuffer[0],t,0):Me(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),je(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),je(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Pe(t,n,i){let a=r.get(t);n!==void 0&&Ae(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ne(t)}function Fe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&F(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Re(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),je(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),we(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ae(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),we(c,a),Ae(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),we(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ae(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Ne(t)}function P(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Ie=[];function Le(t){if(t.samples>0){if(F(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ie.length=0,Ie.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ie.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ie))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Re(e){return Math.min(i.maxSamples,e.samples)}function F(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ze(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function I(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(W.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function L(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=me,this.resetTextureUnits=de,this.getTextureUnits=fe,this.setTextureUnits=pe,this.setTexture2D=ge,this.setTexture2DArray=_e,this.setTexture3D=ve,this.setTextureCube=ye,this.rebindTextures=Pe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=F,this.dispose=oe}function Uu(e,t){function n(n,r=``){let i,a=W.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Wu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ku=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Po({vertexShader:Wu,fragmentShader:Gu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new bo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qu=class extends Nt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Ku,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new V,C=null,w=null,T=new ys;T.viewport=new Tn;let E=new ys;E.viewport=new Tn;let D=[T,E],O=new Ds,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new ar,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new ar,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new ar,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Se:xe,a=_.stencil?he:ue);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Dn(d.textureWidth,d.textureHeight,{format:be,type:ae,depthTexture:new Ji(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Dn(f.framebufferWidth,f.framebufferHeight,{format:be,type:ae,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function te(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;te(O,i);for(let e=0;e<a.length;e++)te(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ne(e,O,i)};function ne(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let N=null;function re(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new ys,o.layers.enable(n),o.viewport=new Tn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Xi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}N&&N(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ie=new Ks;ie.setAnimationLoop(re),this.setAnimationLoop=function(e){N=e},this.dispose=function(){}}},Ju=new G,Yu=new U;Yu.set(-1,0,0,0,1,0,0,0,1);function Xu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ao(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ju.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Yu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Zu(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Qu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$u=null;function ed(){return $u===null&&($u=new Ai(Qu,16,16,Te,fe),$u.name=`DFG_LUT`,$u.minFilter=N,$u.magFilter=N,$u.wrapS=j,$u.wrapT=j,$u.generateMipmaps=!1,$u.needsUpdate=!0),$u}var td=class{constructor(e={}){let{canvas:t=Et(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ae}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([De,Ee,we]),g=new Set([ae,ue,ce,he,pe,me]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=mt;let j=0,ee=0,M=null,te=-1,ne=null,N=new Tn,re=new Tn,oe=null,se=new K(0),le=0,de=t.width,ge=t.height,_e=1,ve=null,ye=null,be=new Tn(0,0,de,ge),xe=new Tn(0,0,de,ge),Se=!1,Ce=new Ui,Te=new Gi,Oe=!1,ke=!1,Ae=new G,je=new H,Me=new Tn,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?_e:1}let P=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,F,ze,I,L,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),P===null){let t=`webgl2`;if(P=Ie(t,e),P===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}rt()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),z(`WebGLRenderer: `+e.message),e}function rt(){Le=new xc(P),Le.init(),et=new Uu(P,Le),Re=new tc(P,Le,e,et),F=new Vu(P,Le),Re.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),O=P.createFramebuffer(),k=P.createFramebuffer(),A=P.createFramebuffer(),ze=new wc(P),I=new xu,L=new Hu(P,Le,F,I,Re,et,ze),Be=new bc(T),Ve=new qs(P),tt=new $s(P,Ve),He=new Sc(P,Ve,ze,tt),Ue=new Ec(P,He,Ve,tt,ze),Ze=new Tc(P,Re,L),Je=new nc(I),We=new bu(T,Be,Le,Re,tt,Je),Ge=new Xu(T,I),Ke=new Tu,qe=new Mu(Le),Xe=new Qs(T,Be,F,Ue,p,s),Ye=new Bu(T,Ue,Re),nt=new Zu(P,ze,Re,F),Qe=new ec(P,Le,ze),$e=new Cc(P,Le,ze),ze.programs=We.programs,T.capabilities=Re,T.extensions=Le,T.properties=I,T.renderLists=Ke,T.shadowMap=Ye,T.state=F,T.info=ze}m!==1009&&(w=new Oc(m,t.width,t.height,o,r,i));let it=new qu(T,P);this.xr=it,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(de,ge,!1))},this.getSize=function(e){return e.set(de,ge)},this.setSize=function(e,n,r=!0){it.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(de=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(de*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){de=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(N)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),F.viewport(N.copy(be).multiplyScalar(Fe()).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),F.scissor(re.copy(xe).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){F.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Xe.dispose(),Ke.dispose(),qe.dispose(),L.dispose(),I.dispose(),Be.dispose(),Ue.dispose(),He.dispose(),tt.dispose(),nt.dispose(),We.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,ht),it.removeEventListener(`sessionend`,gt),_t.stop()};function at(e){e.preventDefault(),Ot(`WebGLRenderer: Context Lost.`),E=!0}function ot(){Ot(`WebGLRenderer: Context Restored.`),E=!1;let e=ze.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;rt(),ze.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function st(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),I.remove(e)}function ut(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Mt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=Ve.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),Oe===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=qe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ke=this.localClippingEnabled,Oe=Je.init(this.clippingPlanes,ke),Oe===!0&&Je.setGlobalState(this.clippingPlanes,t),D!==null&&Ye.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function ht(){_t.stop()}function gt(){_t.start()}let _t=new Ks;_t.setAnimationLoop(pt),typeof self<`u`&&_t.setContext(self),this.setAnimationLoop=function(e){ft=e,it.setAnimationLoop(e),e===null?_t.stop():_t.start()},it.addEventListener(`sessionstart`,ht),it.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=qe.get(e,C.length),x.init(t),x.state.textureUnits=L.getTextureUnits(),C.push(x),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Te.setFromArrayCamera(t):Ce.setFromProjectionMatrix(Ae,St,t.reversedDepth),ke=this.localClippingEnabled,Oe=Je.init(this.clippingPlanes,ke),b=Ke.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&vt(e,t,-1/0,T.sortObjects)}vt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ve,ye),Pe=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Pe&&Xe.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Je.beginShadows();let i=x.state.shadowsArray;if(Ye.render(i,e,t),Oe===!0&&Je.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];bt(n,r,e,a)}Pe&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];yt(b,e,n,n.viewport)}}else r.length>0&&bt(n,r,e,t),Pe&&Xe.render(e),yt(b,e,t)}M!==null&&ee===0&&(L.updateMultisampleRenderTarget(M),L.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),tt.resetDefaultState(),te=-1,ne=null,C.pop(),C.length>0?(x=C[C.length-1],L.setTextureUnits(x.state.textureUnits),Oe===!0&&Je.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function vt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Te:Ce;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ue.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Me.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Te:Ce;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Me.z,s,t)}}else a.visible&&b.push(e,i,a,n,Me.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)vt(i[e],t,n,r)}function yt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),Oe===!0&&Je.setGlobalState(T.clippingPlanes,n),r&&F.viewport(N.copy(r)),i.length>0&&xt(i,t,n),a.length>0&&xt(a,t,n),o.length>0&&xt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function bt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Dn(1,1,{generateMipmaps:!0,type:e?fe:ae,minFilter:ie,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:W.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||N;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(se),le=T.getClearAlpha(),le<1&&T.setClearColor(16777215,.5),T.clear(),Pe&&Xe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),Oe===!0&&Je.setGlobalState(T.clippingPlanes,r),xt(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(se,le),d!==void 0&&(r.viewport=d),T.toneMapping=u}function xt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function wt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Tt(e,t,n){t.isScene!==!0&&(t=Ne);let r=I.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=We.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),At(e,s),r.needsLights=Pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=wt(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Dt(e,t,n,r,i){let a=I.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Tt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ll.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Mt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:W.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),b=x.state.lights;if(Oe===!0&&(ke===!0||e!==ne)){let t=e===ne&&r.id===te;Je.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===wt(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?Dt(r,t,i,s,h):Tt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(F.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==te&&(te=r.id,O=!0),E||ne!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(P,`projectionMatrix`,e.projectionMatrix),A.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(P,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&A.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(P,`sunShadowMap`,b.state.sunShadowMap,L),b.state.directionalShadowMap.length>0&&A.setValue(P,`directionalShadowMap`,b.state.directionalShadowMap,L),b.state.spotShadowMap.length>0&&A.setValue(P,`spotShadowMap`,b.state.spotShadowMap,L),b.state.pointShadowMap.length>0&&A.setValue(P,`pointShadowMap`,b.state.pointShadowMap,L)),i.isSkinnedMesh){A.setOptional(P,i,`bindMatrix`),A.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(A.setOptional(P,i,`batchingTexture`),A.setValue(P,`batchingTexture`,i._matricesTexture,L),A.setOptional(P,i,`batchingIdTexture`),A.setValue(P,`batchingIdTexture`,i._indirectTexture,L),A.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Ze.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=ed()),O){if(A.setValue(P,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Nt(j,k),a&&r.fog===!0&&Ge.refreshFogUniforms(j,a),Ge.refreshMaterialUniforms(j,r,_e,ge,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}Ll.upload(P,kt(v),j,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ll.upload(P,kt(v),j,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(P,`center`,i.center),A.setValue(P,`modelViewMatrix`,i.modelViewMatrix),A.setValue(P,`normalMatrix`,i.normalMatrix),A.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,w),nt.bind(n,w)}}return w}function Nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),N.copy(e.viewport),re.copy(e.scissor),oe=e.scissorTest,F.viewport(N),F.scissor(re),F.setScissorTest(oe),te=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,N.copy(e.viewport),re.copy(e.scissor),oe=e.scissorTest}else N.copy(be).multiplyScalar(_e).floor(),re.copy(xe).multiplyScalar(_e).floor(),oe=Se;if(n!==0&&(r=O),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(N),F.scissor(re),F.setScissorTest(oe),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}te=-1};function Ft(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Ft(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Ft(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await jt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,k),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,F.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return St}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=W._getDrawingBufferColorSpace(e),t.unpackColorSpace=W._getUnpackColorSpace()}},nd=e=>e<0?0:e>1?1:e,rd=e=>1-(1-e)**3,id=e=>e*e*e,ad=(e,t=1.70158)=>e<=0?0:1+(t+1)*(e-1)**3+t*(e-1)**2,od=e=>Math.sin(nd(e)*Math.PI),sd=(e,t=26,n=9)=>Math.exp(-e*n)*Math.cos(e*t);function cd(e,t){let n=(t-e)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),n}var ld=class{tasks=[];time=0;resolve=null;done;constructor(){this.done=new Promise(e=>this.resolve=e)}add(e){return e.state=0,this.tasks.push(e),e}call(e,t){this.add({at:e,dur:0,begin:t})}get length(){let e=0;for(let t of this.tasks)e=Math.max(e,t.at+t.dur);return e}step(e){this.time+=e;let t=!1;for(let e=0;e<this.tasks.length;e++){let n=this.tasks[e];if(n.state===2)continue;if(this.time<n.at){t=!0;continue}n.state===0&&(n.state=1,n.begin?.());let r=this.time-n.at;n.dur<=0||r>=n.dur?(n.tick?.(1,n.dur),n.state=2,n.end?.()):(n.tick?.(r/n.dur,r),t=!0)}return t||this.finish(),!t}flush(){for(let e of this.tasks)e.state!==2&&(e.state===0&&e.begin?.(),e.tick?.(1,e.dur),e.state=2,e.end?.());this.finish()}finish(){if(this.resolve){let e=this.resolve;this.resolve=null,e()}}},ud=new H;function dd(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;ud.copy(t),ud[r]=0,ud.normalize();let l=.5*o/(o+s),u=1-ud.angleTo(e)/c;return Math.sign(ud[n])===1?u*l:s/(o+s)+l+l*(1-u)}var fd=class e extends Zi{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new H,c=new H,l=new H(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new H,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=dd(m,c,`z`,`y`,i,n),f[a+1]=1-dd(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-dd(m,c,`z`,`y`,i,n),f[a+1]=1-dd(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-dd(m,c,`x`,`z`,i,e),f[a+1]=dd(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-dd(m,c,`x`,`z`,i,e),f[a+1]=1-dd(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-dd(m,c,`x`,`y`,i,e),f[a+1]=1-dd(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=dd(m,c,`x`,`y`,i,e),f[a+1]=1-dd(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function pd(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`);if(!r)throw Error(`2d context unavailable`);return[n,r]}function md(e,t){let n=new qi(e);return n.colorSpace=t?mt:``,n.anisotropy=4,n.needsUpdate=!0,n}var hd=null;function gd(){if(hd)return hd;let[e,t]=pd(128,128),n=t.createImageData(128,128);for(let e=0;e<128;e++)for(let t=0;t<128;t++){let r=(t+.5)/64-1,i=(e+.5)/64-1,a=Math.sqrt(r*r+i*i),o=Math.min(1,Math.max(0,(1-a)/.7)),s=(o*o*(3-2*o))**1.4,c=(e*128+t)*4;n.data[c]=n.data[c+1]=n.data[c+2]=Math.round(s*255),n.data[c+3]=255}return t.putImageData(n,0,0),hd=md(e,!1),hd}function _d(e){let t=Math.sin(e*127.1)*43758.5453;return t-Math.floor(t)}function vd(e,t){let[n,r]=pd(256,256);r.fillStyle=e,r.fillRect(0,0,256,256);for(let e=0;e<9;e++){let n=_d(e+40)*256,i=10+_d(e+50)*30;r.globalAlpha=.1+_d(e+60)*.08,r.fillStyle=e%2?t:`#ffffff`,r.beginPath(),r.moveTo(0,n);for(let t=0;t<=256;t+=8)r.lineTo(t,n+Math.sin(t*.012+e)*8);for(let t=256;t>=0;t-=8)r.lineTo(t,n+i+Math.sin(t*.015+e*2)*8);r.closePath(),r.fill()}r.strokeStyle=t;for(let e=0;e<26;e++){let t=_d(e)*256;r.globalAlpha=.18+_d(e+3)*.2,r.lineWidth=.8+_d(e+9)*1.6,r.beginPath();for(let n=0;n<=256;n+=6){let i=t+Math.sin(n*.02+e)*4+Math.sin(n*.007+e*3)*9;n===0?r.moveTo(n,i):r.lineTo(n,i)}r.stroke()}r.globalAlpha=1;let i=md(n,!0);return i.wrapS=i.wrapT=A,i}function yd(e,t,n){let[r,i]=pd(768,512);for(let r=0;r<6;r++){let a=r%3*256,o=Math.floor(r/3)*256;i.fillStyle=n,i.fillRect(a,o,256,256);let s=t[r%t.length]??`#e04a3a`;i.strokeStyle=s,i.lineWidth=14,bd(i,a+34,o+34,188,188,22),i.stroke(),i.fillStyle=s,i.font=`400 138px "Lilita One", "Arial Rounded MT Bold", system-ui, sans-serif`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillText(e[r%e.length]??`A`,a+128,o+128+7.68)}return md(r,!0)}function bd(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}var xd=null;function Sd(){if(xd)return xd;let[e,t]=pd(256,256);t.fillStyle=`#ffffff`,t.fillRect(0,0,256,256);for(let e=0;e<40;e++){let n=_d(e*1.7)*256,r=_d(e*2.3+4)*256,i=10+_d(e*3.1)*40,a=t.createRadialGradient(n,r,0,n,r,i),o=e%2==0;a.addColorStop(0,o?`rgba(200,180,150,0.35)`:`rgba(255,255,255,0.5)`),a.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=a,t.fillRect(0,0,256,256)}return xd=md(e,!0),xd.wrapS=xd.wrapT=A,xd}function Cd(e){let t=1024,[n,r]=pd(t,t),i=new K(e.table);r.fillStyle=e.table,r.fillRect(0,0,t,t);let a=e=>`#`+i.clone().multiplyScalar(e).getHexString();if(e.tableStyle===`planks`)for(let e=0;e*36<t;e++){let n=-_d(e*5.3)*300;for(;n<t;){let t=260+_d(e*3.7+n)*320;r.fillStyle=a(.9+_d(e*9.1+n*.01)*.16),r.fillRect(e*36,n,36,t),r.globalAlpha=.18,r.fillStyle=a(.78),r.fillRect(e*36+36*(.2+_d(e+n)*.4),n,36*.18,t),r.globalAlpha=1,r.fillStyle=a(.62),r.fillRect(e*36,n+t-2,36,3),n+=t}r.fillStyle=a(.6),r.fillRect(e*36,0,3,t)}else{for(let e=0;e<t;e+=4){let n=Math.sin(e*.06+Math.sin(e*.013)*3);r.fillStyle=a(n>0?1.06:.93),r.globalAlpha=Math.abs(n)*.6,r.beginPath();for(let n=0;n<=t;n+=16)r.lineTo(n,e+Math.sin(n*.01+e*.02)*12);r.lineTo(t,e+6),r.lineTo(0,e+6),r.fill()}r.globalAlpha=1}for(let n=0;n<10;n++){let i=_d(n*3.1+1)*t,a=_d(n*7.7+2)*t,o=t*(.06+_d(n*1.3+5)*.12),s=r.createRadialGradient(i,a,0,i,a,o),c=e.tableSpots[n%e.tableSpots.length]??e.table;s.addColorStop(0,c),s.addColorStop(1,c+`00`),r.globalAlpha=.45,r.fillStyle=s,r.fillRect(0,0,t,t)}r.globalAlpha=1;let o=r.createRadialGradient(t/2,t/2,t*.2,t/2,t/2,t*.5);o.addColorStop(0,e.room+`00`),o.addColorStop(1,e.room),r.fillStyle=o,r.fillRect(0,0,t,t);let s=md(n,!0);return s.anisotropy=8,s}function wd(e,t,n,r){let i=Math.round((t+r*2)*24),a=Math.round((n+r*2)*24),[o,s]=pd(i,a);s.fillStyle=`#000`,s.fillRect(0,0,i,a);for(let i=0;i<n;i++)for(let n=0;n<t;n++){if((e[i]?.[n]??` `)===` `)continue;let t=(n+r+.5)*24,a=(i+r+.5)*24,o=24*1.9,c=s.createRadialGradient(t,a,0,t,a,o);c.addColorStop(0,`rgba(255,255,255,0.32)`),c.addColorStop(1,`rgba(255,255,255,0)`),s.fillStyle=c,s.fillRect(t-o,a-o,o*2,o*2)}return md(o,!1)}var Td=.94,Ed=.6,Dd=.64,Od=.07;function kd(e,t,n){if(t<0||n<0||t>=e.w||n>=e.h)return`void`;let r=e.map[n]?.[t]??` `;return r===`#`?`wall`:r===`o`?`zone`:r===`.`?`floor`:`void`}var Ad={zone:0,valid:1,hover:2,invalid:3,hint:4,selected:5,dim:6},jd=`
attribute vec3 aColor;
attribute vec4 aParams;
varying vec2 vUv;
varying vec3 vColor;
varying vec4 vParams;
void main() {
  vUv = uv;
  vColor = aColor;
  vParams = aParams;
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}`,Md=`
uniform float uTime;
uniform float uOpacity;
varying vec2 vUv;
varying vec3 vColor;
varying vec4 vParams;
float sdRoundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}
void main() {
  vec2 p = vUv - 0.5;
  int style = int(vParams.x + 0.5);
  float d = style == 5 ? length(p) - 0.36 : sdRoundBox(p, vec2(0.395), 0.12);
  float line = exp(-pow(d / (style == 0 ? 0.026 : 0.024), 2.0));
  float halo = exp(-abs(d) / 0.05) * 0.35;
  float inside = d < 0.0 ? 1.0 : 0.0;
  float fill = inside * vParams.z * smoothstep(0.0, -0.08, d);
  float pulse = 0.82 + 0.18 * sin(uTime * 2.6 + vParams.w);
  if (style == 4) {
    float ang = atan(p.y, p.x);
    line *= step(0.45, fract(ang * 10.0 / 6.2831 - uTime * 0.4));
  }
  if (style == 3) {
    float dx = min(abs(p.x - p.y), abs(p.x + p.y)) * 0.7071;
    float xl = exp(-pow(dx / 0.022, 2.0)) * step(max(abs(p.x), abs(p.y)), 0.17);
    line = max(line, xl);
  }
  if (style == 6) {
    // dim: a flat dark wash over a tile the player cannot use right now. No outline.
    line = 0.0;
    halo = 0.0;
    fill = vParams.z * smoothstep(0.02, -0.03, d);
  }
  float a = clamp((line + halo + fill) * vParams.y * (style == 1 || style == 0 ? pulse : 1.0), 0.0, 1.0) * uOpacity;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vColor, a);
}`;function Nd(){return new Po({vertexShader:jd,fragmentShader:Md,uniforms:{uTime:{value:0},uOpacity:{value:1}},transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4})}var Pd=class{toWorld;mesh;material;colors;params;max;constructor(e,t){this.toWorld=t,this.max=e;let n=new bo(1,1).rotateX(-Math.PI/2);this.colors=new ji(new Float32Array(e*3),3),this.params=new ji(new Float32Array(e*4),4),n.setAttribute(`aColor`,this.colors),n.setAttribute(`aParams`,this.params),this.material=Nd(),this.mesh=new zi(n,this.material,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=2}set(e){let t=new G,n=Math.min(e.length,this.max);for(let r=0;r<n;r++){let n=e[r],i=this.toWorld(n.x,n.y);t.makeTranslation(i.x,i.y+.008,i.z),this.mesh.setMatrixAt(r,t),this.colors.setXYZ(r,n.color.r,n.color.g,n.color.b),this.params.setXYZW(r,n.style,n.intensity,n.fill,(n.x*1.7+n.y*2.3)%6.28)}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.colors.needsUpdate=!0,this.params.needsUpdate=!0}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}},Fd=class{group=new rr;level;zone;marks;selection;tiles;walls=null;caps=null;capAnims=[];buildDir=1;tileAnims=[];wallAnims=[];buildT=-1;zoneOn=!1;zoneFade=0;disposables=[];constructor(e,t){this.level=e;let n=[],r=[];for(let t=0;t<e.h;t++)for(let i=0;i<e.w;i++){let a=kd(e,i,t);a!==`void`&&(n.push([i,t]),a===`wall`&&r.push([i,t]))}let i=new fd(Td,Ed,Td,3,.11),a=Vd(t);this.disposables.push(i,a),a.map&&this.disposables.push(a.map),this.tiles=new zi(i,a,Math.max(1,n.length)),this.tiles.count=n.length,this.tiles.receiveShadow=!0,this.tiles.castShadow=!0;let o=new K(t.tileA),s=new K(t.tileB),c=new G,l=new cn,u=new zn;if(n.forEach(([e,t],n)=>{let r=this.cellToWorld(e,t),i=Hd(e,t);u.set((i-.5)*.012,(Hd(t,e)-.5)*.03,(Hd(e+7,t)-.5)*.012),l.setFromEuler(u),c.compose(new H(r.x,-.6/2+(i-.5)*.012,r.z),l,new H(1,1,1)),this.tiles.setMatrixAt(n,c),this.tiles.setColorAt(n,e+t&1?s:o),this.tileAnims.push({index:n,delay:0,base:c.clone()})}),this.group.add(this.tiles),r.length>0){let e=new fd(.84,Dd,.84,3,.1),n=new Lo({map:vd(t.wall,t.wallGrain),roughness:.55,clearcoat:.35,clearcoatRoughness:.35}),i=new fd(.7,Od,.7,3,.03),a=new Lo({roughness:.4,clearcoat:.8,clearcoatRoughness:.15});this.disposables.push(e,n,n.map,i,a),this.walls=new zi(e,n,r.length),this.caps=new zi(i,a,r.length),this.walls.castShadow=!0,this.walls.receiveShadow=!0,this.caps.castShadow=!1,this.caps.receiveShadow=!0;let o=t.wallCaps.map(e=>new K(e));r.forEach(([e,t],n)=>{let r=this.cellToWorld(e,t);u.set(0,(Hd(e*3,t)-.5)*.12,0),l.setFromEuler(u),c.compose(new H(r.x,.323,r.z),l,new H(1,1,1)),this.walls.setMatrixAt(n,c);let i=.92+Hd(e,t*5)*.12;this.walls.setColorAt(n,new K(i,i,i)),this.wallAnims.push({index:n,delay:0,base:c.clone()}),c.compose(new H(r.x,.653,r.z),l,new H(1,1,1)),this.caps.setMatrixAt(n,c),this.caps.setColorAt(n,o[(e*3+t*7)%o.length]),this.capAnims.push({index:n,delay:0,base:c.clone()})}),this.group.add(this.walls,this.caps)}let d=(e,t)=>this.cellToWorld(e,t);this.zone=new Pd(e.w*e.h,d),this.marks=new Pd(e.w*e.h+8,d),this.selection=new Pd(1,d),this.disposables.push(this.zone,this.marks,this.selection);let f=new K(t.zone).multiplyScalar(1.15),p=[];for(let[t,r]of n)kd(e,t,r)===`zone`&&p.push({x:t,y:r,style:Ad.zone,color:f,intensity:1,fill:.26});this.zone.set(p),this.zone.material.uniforms.uOpacity.value=0,this.group.add(this.zone.mesh,this.marks.mesh,this.selection.mesh)}cellToWorld(e,t,n=0){return new H(e-(this.level.w-1)/2,n,t-(this.level.h-1)/2)}worldToCell(e){let t=Math.round(e.x+(this.level.w-1)/2),n=Math.round(e.z+(this.level.h-1)/2);return t<0||n<0||t>=this.level.w||n>=this.level.h?null:[t,n]}terrain(e,t){return kd(this.level,e,t)}setZoneVisible(e){this.zoneOn=e}startBuild(){return this.buildT=0,this.buildDir=1,this.setDelays(.035,.04),this.applyBuild(0),.62}startClear(){return this.buildT=0,this.buildDir=-1,this.setDelays(-.025,.02),this.applyBuild(0),.42}setDelays(e,t){let n=this.level.h,r=[this.tileAnims,this.wallAnims,this.capAnims];for(let i of r)for(let r of i){Rd.setFromMatrixPosition(r.base);let i=Rd.z+(n-1)/2;r.delay=(e>0?i*e:(n-1-i)*-e)+Hd(Rd.x*7,Rd.z*3)*t}for(let e of this.wallAnims)e.delay+=.08;for(let e of this.capAnims)e.delay+=.12}applyBuild(e){let t=(t,n)=>{if(n){for(let r of t){let t=Math.min(1,Math.max(0,(e-r.delay)/.3)),i=this.buildDir>0?t:1-t,a=this.buildDir>0?Ud(i):i*i;r.base.decompose(Rd,zd,Bd);let o=Math.max(1e-4,a);Rd.y-=(1-Math.min(1,i*1.3))*.9,Ld.compose(Rd,zd,Bd.set(o,o,o)),n.setMatrixAt(r.index,Ld)}n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere()}};t(this.tileAnims,this.tiles),t(this.wallAnims,this.walls),t(this.capAnims,this.caps)}update(e,t){this.buildT>=0&&(this.buildT+=e,this.applyBuild(this.buildT),this.buildT>1.2&&(this.buildT=-1,this.applyBuild(99))),this.zoneFade+=(+!!this.zoneOn-this.zoneFade)*(1-Math.exp(-e*8)),this.zone.material.uniforms.uOpacity.value=this.zoneFade,this.zone.mesh.visible=this.zoneFade>.01,this.zone.material.uniforms.uTime.value=t,this.marks.material.uniforms.uTime.value=t,this.selection.material.uniforms.uTime.value=t}get building(){return this.buildT>=0}dispose(){for(let e of this.disposables)e.dispose()}},Id=class e{group=new rr;shadow=null;disposables=[];lights=[];props=[];static TABLE_Y=-7.5;constructor(t){let n=new Io({roughness:.95,color:`#ffffff`}),r=n.map=Cd(t),i=new J(new bo(90,90).rotateX(-Math.PI/2),n);i.position.y=e.TABLE_Y,i.receiveShadow=!1,this.group.add(i),this.disposables.push(i.geometry,n,r),e.TABLE_Y;let a=(e,n,r)=>{let i=new Lo({color:new K(n).lerp(new K(t.table),.45),roughness:.5,clearcoat:.3}),a=new J(e,i);a.userData.lift=r,this.group.add(a),this.props.push(a),this.disposables.push(e,i)};if(a(new Co(1.4,32,24),t.props[0]??`#f07f62`,1.4),a(new fd(2,2,2,3,.25),t.props[1]??`#7cc4e8`,1),a(new fd(1.8,1.8,1.8,3,.22),t.props[2]??`#ffd36a`,.9),a(new $i(1.1,1.1,1.6,32),t.props[3]??`#a4dcc0`,.8),t.fairyLights){let t=new Co(.16,12,8);this.disposables.push(t);let n=new gi({color:new K(`#ffc46b`).multiplyScalar(6)});this.disposables.push(n);for(let r=0;r<26;r++){let i=r/25,a=-11+i*22,o=-10+Math.sin(i*Math.PI)*3,s=e.TABLE_Y+3.2-Math.sin(i*Math.PI*2)*.9,c=new J(t,n);c.position.set(a,s,o),this.group.add(c),this.lights.push(c)}}}setLevel(t,n){if(this.shadow&&=(this.group.remove(this.shadow),this.shadow.material.dispose(),this.shadow.geometry.dispose(),this.shadow.material.alphaMap?.dispose(),null),!t)return;let r=new gi({color:`#2a1414`,transparent:!0,opacity:.8,alphaMap:wd(t.map,t.w,t.h,2),depthWrite:!1}),i=new J(new bo(t.w+4,t.h+4).rotateX(-Math.PI/2),r),a=-e.TABLE_Y/Math.max(.2,n.y);i.position.set(-n.x*a,e.TABLE_Y+.02,-n.z*a),i.scale.setScalar(1.15),this.group.add(i),this.shadow=i}placeProps(t,n=!0){let r=[[-1,.92,0],[1.02,.7,.6],[.95,-.98,-.4],[-1.02,-.8,.2]],i=new Vs,a=new H;this.props.forEach((o,s)=>{let[c,l,u]=r[s%r.length];i.setFromCamera(new V(c,l),t);let d=o.userData.lift??1,f=new ci(new H(0,1,0),-(e.TABLE_Y+d));if(i.ray.intersectPlane(f,a)){let e=o.userData.goal??new H;e.copy(a),o.userData.goal=e,n&&o.position.copy(a),o.rotation.y=u}})}update(e,t=0){let n=1-Math.exp(-t*3);for(let e of this.props){let t=e.userData.goal;t&&e.position.lerp(t,n)}this.lights.forEach((t,n)=>{t.scale.setScalar(.85+.25*Math.sin(e*1.3+n*1.7))})}dispose(){this.setLevel(null,new H(0,1,0));for(let e of this.disposables)e.dispose()}},Ld=new G,Rd=new H,zd=new cn,Bd=new H;function Vd(e){switch(e.tileStyle){case`wood`:return new Lo({map:vd(`#ffffff`,`#c9b08c`),roughness:.55,clearcoat:.4,clearcoatRoughness:.3});case`sand`:return new Lo({map:Sd(),roughness:.95,sheen:.4,sheenRoughness:.8,sheenColor:new K(`#fff4d8`)});case`paint`:return new Lo({map:vd(`#ffffff`,`#d8dcf0`),roughness:.42,clearcoat:.6,clearcoatRoughness:.2});default:return new Lo({roughness:.8,sheen:.5,sheenRoughness:.6,sheenColor:new K(`#ffffff`)})}}function Hd(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Ud(e){return e<=0?0:1+2.70158*(e-1)**3+1.70158*(e-1)**2}var Wd=new ys,Gd=new H,Kd=class{camera;target=new H(0,.25,0);current={elevation:50,yaw:0,distance:20,shiftX:0,shiftY:0};goal={...this.current};orbitYaw=0;orbitPitch=0;driftYaw=0;blendRate=5;distanceScale=1;follow=new H;followGoal=new H;shake=0;shakeT=0;aim=new H;w=390;h=844;snapNext=!0;constructor(e=30){this.camera=new ys(e,390/844,.5,160)}setViewport(e,t){this.w=Math.max(1,e),this.h=Math.max(1,t)}place(e,t,n=0,r=0,i=this.target){let a=r===0?t.elevation:sn.clamp(t.elevation+r,30,62),o=sn.degToRad(sn.clamp(a,10,85)),s=sn.degToRad(t.yaw+n);e.position.set(i.x+Math.sin(s)*Math.cos(o)*t.distance,i.y+Math.sin(o)*t.distance,i.z+Math.cos(s)*Math.cos(o)*t.distance),e.up.set(0,1,0),e.lookAt(i),e.aspect=this.w/this.h,e.setViewOffset(this.w,this.h,t.shiftX,t.shiftY,this.w,this.h),e.updateProjectionMatrix(),e.updateMatrixWorld(!0)}fit(e,t,n,r,i=1){Wd.fov=this.camera.fov,Wd.near=this.camera.near,Wd.far=this.camera.far;let a=Math.max(40,this.w-r.left-r.right),o=Math.max(40,this.h-r.top-r.bottom),s=r=>{this.place(Wd,{elevation:t,yaw:n,distance:r,shiftX:0,shiftY:0});let i=1/0,a=-1/0,o=1/0,s=-1/0;for(let t of e){Gd.copy(t).project(Wd);let e=(Gd.x+1)/2*this.w,n=(1-Gd.y)/2*this.h;i=Math.min(i,e),a=Math.max(a,e),o=Math.min(o,n),s=Math.max(s,n)}return{minX:i,maxX:a,minY:o,maxY:s}},c=2,l=300;for(let e=0;e<40;e++){let e=(c+l)/2,t=s(e);t.maxX-t.minX<=a&&t.maxY-t.minY<=o?l=e:c=e}let u=l/i,d=s(u),f=(d.minX+d.maxX)/2,p=(d.minY+d.maxY)/2,m=r.left+a/2,h=r.top+o/2;return{elevation:t,yaw:n,distance:u,shiftX:f-m,shiftY:p-h}}setGoal(e,t=!1){this.goal={...e},t&&(this.snapNext=!0)}update(e){if(this.follow.lerp(this.followGoal,1-Math.exp(-e*2.5)),this.snapNext)this.current={...this.goal},this.snapNext=!1;else{let t=1-Math.exp(-e*this.blendRate),n=this.current,r=this.goal;n.elevation+=(r.elevation-n.elevation)*t,n.yaw+=(r.yaw-n.yaw)*t,n.distance+=(r.distance-n.distance)*t,n.shiftX+=(r.shiftX-n.shiftX)*t,n.shiftY+=(r.shiftY-n.shiftY)*t}this.aim.copy(this.target).add(this.follow);let t=this.current.distance;if(this.current.distance=t*this.distanceScale,this.place(this.camera,this.current,this.orbitYaw+this.driftYaw,this.orbitPitch,this.aim),this.current.distance=t,this.shake>.001){this.shakeT+=e;let t=this.shakeT*40;this.camera.position.x+=Math.sin(t*1.3)*Math.sin(t*.7+1)*this.shake,this.camera.position.y+=Math.sin(t*1.7+2)*this.shake*.7,this.camera.updateMatrixWorld(!0)}}goalCam=new ys;goalCamera(){let e=this.goalCam;return e.fov=this.camera.fov,e.near=this.camera.near,e.far=this.camera.far,this.place(e,this.goal),e}focusDistance(){return this.camera.position.distanceTo(this.target)}};function qd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new ii;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Jd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Jd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Jd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Wr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}new G;var Yd=new cn,Xd=new zn,Zd=new H,Qd=new H;function Z(e=[0,0,0],t=[0,0,0],n=1){let r=typeof n==`number`?[n,n,n]:n;return Yd.setFromEuler(Xd.set(t[0],t[1],t[2])),new G().compose(Zd.set(e[0],e[1],e[2]),Yd.clone(),Qd.set(r[0],r[1],r[2]))}var $d=class{parts=[];add(e,t,n){let r=e.clone();n&&r.applyMatrix4(n);let i=r.getAttribute(`position`),a=r.getAttribute(`normal`),o=new ii;o.setAttribute(`position`,i),o.setAttribute(`normal`,a);let s=i.count,c=new Float32Array(s*3),l=new K;if(typeof t==`function`){let e=new H,n=new H;for(let r=0;r<s;r++)e.fromBufferAttribute(i,r),n.fromBufferAttribute(a,r),l.set(t(e,n)),c[r*3]=l.r,c[r*3+1]=l.g,c[r*3+2]=l.b}else{l.set(t);for(let e=0;e<s;e++)c[e*3]=l.r,c[e*3+1]=l.g,c[e*3+2]=l.b}return o.setAttribute(`color`,new Wr(c,3)),r.index?o.setIndex(r.index):o.setIndex(Array.from({length:s},(e,t)=>t)),this.parts.push(o),e.dispose(),this}get empty(){return this.parts.length===0}build(){let e=qd(this.parts,!1);if(!e)throw Error(`GeoBuilder: merge failed`);return e.computeBoundingSphere(),e.computeBoundingBox(),e}};function ef(e,t,n,r,i=64){let a=Math.round(i*Math.max(1,n/2)),o=[];for(let r=0;r<=a;r++){let i=r/a,s=i*n*Math.PI*2;o.push(new H(Math.cos(s)*e,i*t,Math.sin(s)*e))}return new To(new da(o),a,r,6,!1)}function tf(e,t,n=24,r=8){return new To(new da(e.map(e=>new H(e[0],e[1],e[2]))),n,t,r,!1)}function nf(e,t=32,n=48){return new vo(new Oa(e.map(([e,t])=>new V(e,t))).getPoints(n).map(e=>new V(Math.max(0,e.x),e.y)),t)}function rf(e,t=20,n=14){return new Co(e,t,n)}function af(e,t,n,r=32){let i=[],a=Math.min(n,e,t/2);i.push(new V(0,-t/2));for(let n=0;n<=6;n++){let r=-Math.PI/2+n/6*(Math.PI/2);i.push(new V(e-a+Math.cos(r)*a,-t/2+a+Math.sin(r)*a))}for(let n=0;n<=6;n++){let r=n/6*(Math.PI/2);i.push(new V(e-a+Math.cos(r)*a,t/2-a+Math.sin(r)*a))}return i.push(new V(0,t/2)),new vo(i,r)}function of(e,t){let n=new K(e),r={h:0,s:0,l:0};return n.getHSL(r),n.setHSL(r.h,r.s,Math.min(1,Math.max(0,r.l*t))),`#`+n.getHexString()}function sf(e,t){return new K(e).multiplyScalar(t)}var cf=class{plastic=new Lo({vertexColors:!0,roughness:.42,metalness:0,clearcoat:.9,clearcoatRoughness:.14,specularIntensity:.6});paint=new Lo({vertexColors:!0,roughness:.5,clearcoat:.5,clearcoatRoughness:.3,specularIntensity:.5});eyeWhite=new Lo({color:`#fbfaf4`,roughness:.18,clearcoat:1,clearcoatRoughness:.05});pupil=new Lo({vertexColors:!0,roughness:.12,clearcoat:1,clearcoatRoughness:.04});grumpEye=new Io({color:`#ffd560`,emissive:new K(`#ffae2a`),emissiveIntensity:2.6,roughness:.3});brass=new Lo({color:`#e0ad55`,metalness:1,roughness:.26,clearcoat:.3});iron=new Io({color:`#3d3540`,metalness:.85,roughness:.38});spark=new gi({color:sf(`#ffb347`,7)});gem=new Io({color:`#ff3d5a`,emissive:new K(`#ff2048`),emissiveIntensity:.6,roughness:.15});contact=new gi({color:`#1e0e14`,transparent:!0,opacity:.72,alphaMap:gd(),depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});flash=new gi({color:sf(`#fff6e0`,2.2)});contactHeld=new gi({color:`#14080c`,transparent:!0,opacity:.85,alphaMap:gd(),depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});ghost=new Po({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new K(`#3f8cf0`)},uRim:{value:sf(`#ffffff`,1.2)},uTime:{value:0}},vertexShader:`
      varying vec3 vN; varying vec3 vV;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uColor; uniform vec3 uRim; uniform float uTime;
      varying vec3 vN; varying vec3 vV;
      void main() {
        float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.0);
        float pulse = 0.85 + 0.15 * sin(uTime * 3.0);
        float a = (0.55 + 0.4 * f) * pulse;
        gl_FragColor = vec4(mix(uColor, uRim, f), a);
      }`});dispose(){for(let e of Object.values(this))e instanceof ui&&e.dispose()}},lf=null;function uf(){return lf||=new cf,lf}var df=[Math.PI,Math.PI/2,0,-Math.PI/2];function ff(){return{squash:1,lean:0,tilt:0,twist:0,lift:0,feetLift:0,headTurn:0,headNod:0,headTilt:0,lookX:0,lookY:0,blink:0,eyeOpen:1,brow:0,gadget:0,keyAngle:0,xEyes:!1}}var pf={bonk:`#ec4636`,zip:`#f9c22b`,boom:`#2a3b78`,shove:`#3b8fe6`,hop:`#f57fb4`,twirl:`#9256dc`,pin:`#f6ead2`,block:`#f4e4c4`,keg:`#e2463a`},mf=`#5a2a52`,hf=`#3a1838`;function gf(e,t){let n=pf[e];if(t===`E`){let t=e===`boom`?`#f28a2a`:e===`pin`||e===`block`?`#e2463a`:n;return{main:mf,belly:of(mf,1.25),dark:hf,accent:t,gadget:t,gadget2:of(t,.7),brow:`#1b0b1a`,horn:`#f1e3c6`}}return{main:n,belly:of(n,1.12),dark:of(n,.62),accent:`#fff4e2`,gadget:e===`bonk`?`#d42f2a`:e===`boom`?`#f28a2a`:`#d6dbe3`,gadget2:`#fff6ea`,brow:of(n,.35),horn:`#f1e3c6`}}var _f=new Map;function vf(e,t){let n=_f.get(e);return n||(n=t(),_f.set(e,n)),n}function yf(e,t,n=!0){let r=new J(e,t);return r.castShadow=n,r.receiveShadow=!0,r}var bf=class{kind;team;crowned;root=new rr;base=new rr;body=new rr;head=new rr;eyes=new rr;gadget=new rr;pupils=null;xEyes=null;browL=null;browR=null;footL=null;footR=null;key=null;mouth=null;crown=null;spark=null;shadow;height=.8;headSphere;alive=!0;idle=!0;pose=ff();seed=Math.random();browBase=[0,0];browY=0;pupilBase=new H;blinkLeft=0;nextBlink=1+Math.random()*3;nextGlance=2+Math.random()*4;look=new V;lookGoal=new V;keyTwitch=0;keyTwitchGoal=0;nextTwitch=Math.random()*2;constructor(e,t,n){this.kind=e,this.team=t,this.crowned=n,this.root.add(this.base,this.body),this.root.rotation.order=`ZXY`,this.body.add(this.head),this.shadow=new J(Sf(),uf().contact),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.006,this.shadow.renderOrder=1,this.base.add(this.shadow)}setPose(e){Object.assign(this.pose,e)}setFacing(e){this.root.rotation.y=df[e]??0}meshes(){let e=[];return this.root.traverse(t=>{t instanceof J&&t!==this.shadow&&e.push(t)}),e}aimYaw=0;aimNod=0;keySpeedTarget=0;droopTarget=0;curYaw=0;curNod=0;keySpeed=0;keyAngle=0;droop=0;squintT=0;flinchT=0;wideT=0;gadgetBase=new H;glove=null;spring=null;flashed=[];flashMats=[];flashGadget(e){if(e){if(this.flashed.length)return;this.gadget.traverse(e=>{e instanceof J&&(this.flashed.push(e),this.flashMats.push(e.material),e.material=uf().flash)})}else this.flashed.forEach((e,t)=>e.material=this.flashMats[t]),this.flashed=[],this.flashMats=[]}squint(e=.7){this.squintT=e}flinch(){this.flinchT=.35,this.blinkLeft=.16}scare(e=1){this.wideT=Math.max(this.wideT,e)}update(e,t){let n=this.pose,r=0,i=0,a=0;if(this.idle){let n=this.seed*6.28;if(r=Math.sin(t*2.3+n)*.022,i=Math.sin(t*1.15+n*1.3)*.03,a=Math.sin(t*.8+n*.7)*.035,this.alive&&(this.nextBlink-=e,this.nextBlink<=0&&(this.blinkLeft=.16,this.nextBlink=1.8+Math.random()*3.5,Math.random()<.15&&(this.nextBlink=.22)),this.nextGlance-=e,this.nextGlance<=0)){this.nextGlance=1.6+Math.random()*4;let e=Math.random();e<.35?this.lookGoal.set(0,.25):e<.55?this.lookGoal.set(0,0):this.lookGoal.set((Math.random()*2-1)*.9,(Math.random()*2-1)*.5)}this.keySpeedTarget===0&&this.keySpeed<.3&&(this.nextTwitch-=e,this.nextTwitch<=0&&(this.nextTwitch=1.2+Math.random()*2.4,this.keyTwitchGoal+=Math.PI/6))}this.blinkLeft=Math.max(0,this.blinkLeft-e),this.squintT=Math.max(0,this.squintT-e),this.flinchT=Math.max(0,this.flinchT-e),this.wideT=Math.max(0,this.wideT-e);let o=this.blinkLeft>0?Math.sin((1-this.blinkLeft/.16)*Math.PI):0,s=1-Math.exp(-e*14);this.look.lerp(this.lookGoal,s),this.keyTwitch+=(this.keyTwitchGoal-this.keyTwitch)*(1-Math.exp(-e*22));let c=this.keySpeedTarget>this.keySpeed?6:1.4;this.keySpeed+=(this.keySpeedTarget-this.keySpeed)*(1-Math.exp(-e*c)),this.keyAngle+=this.keySpeed*e;let l=1-Math.exp(-e*9);this.curYaw+=(this.aimYaw-this.curYaw)*l,this.curNod+=(this.aimNod-this.curNod)*l,this.droop+=(this.droopTarget-this.droop)*(1-Math.exp(-e*2.5));let u=this.flinchT>0?Math.sin((1-this.flinchT/.35)*Math.PI):0,d=Math.max(.2,n.squash*(1+r)*(1-u*.14)*(1-this.droop*.06)),f=1/Math.sqrt(d);this.body.scale.set(f,d,f),this.body.position.y=n.lift,this.body.rotation.set(n.lean+this.droop*.22-u*.12,n.twist,n.tilt),this.head.rotation.set(-n.headNod+i-this.curNod-this.droop*.4,n.headTurn+this.curYaw+a*.6,n.headTilt+a*.4);let p=this.squintT>0?Math.min(1,this.squintT*4):0,m=n.eyeOpen*(this.wideT>0?1.3:1)*(1-p*.42)*(1-this.droop*.45),h=Math.max(.06,m*(1-Math.min(1,o+n.blink+u)));if(this.eyes.scale.set(1,h,1),this.eyes.visible=!n.xEyes,this.xEyes&&(this.xEyes.visible=n.xEyes),this.pupils&&this.pupils.position.set(this.pupilBase.x+(this.look.x+n.lookX)*.024,this.pupilBase.y+(this.look.y+n.lookY)*.02,this.pupilBase.z),this.browL&&this.browR){let e=n.brow-p*.7+this.droop*.6+(this.wideT>0?.5:0);this.browL.rotation.z=this.browBase[0]-e*.35,this.browR.rotation.z=this.browBase[1]+e*.35,this.browL.position.y=this.browR.position.y=this.browY+e*.012+(m-1)*.03}if(this.key&&(this.key.rotation.z=this.keyTwitch+this.keyAngle+n.keyAngle),this.footL&&this.footR&&(this.footL.position.y=n.feetLift,this.footR.position.y=n.feetLift),this.applyGadget(n.gadget),this.spark){let e=.8+.35*Math.sin(t*37+this.seed*10)*Math.sin(t*23);this.spark.scale.setScalar(e)}}applyGadget(e){let t=this.gadgetBase;switch(this.kind){case`bonk`:if(this.glove&&this.spring){let t=e*.5,n=Math.max(0,e)*-.2;this.glove.position.set(n,Math.max(0,e)*.04,t),this.spring.scale.z=Math.max(.3,1+t/.13),this.spring.rotation.y=Math.atan2(n,.27+t)}this.gadget.position.copy(t);break;case`shove`:this.gadget.position.set(t.x,t.y,t.z+e*.14);break;case`hop`:this.gadget.scale.set(1,Math.max(.35,1-e*.5),1);break;case`zip`:case`twirl`:this.gadget.position.set(t.x,t.y,t.z-e*.07)}}addFace(e,t,n,r,i={}){let a=uf(),o=this.team===`E`,s=i.mood??(o?`angry`:`calm`),c=i.head,l=`face:${n}:${r}`,u=vf(`${l}:w`,()=>{let e=new $d;for(let t of[-1,1])e.add(rf(r,18,12),`#ffffff`,Z([t*n,0,-r*.06],[0,0,0],[.84,1.06,.46]));return e.build()});this.eyes.position.set(t[0],t[1],t[2]),this.eyes.add(yf(u,o?a.grumpEye:a.eyeWhite,!1)),e.add(this.eyes);let d=r*(o?.44:.6),f=yf(vf(`${l}:p:${o}`,()=>{let e=new $d;for(let t of[-1,1])e.add(rf(d,14,10),o?`#2a0a12`:`#17121a`,Z([t*n,0,0],[0,0,0],o?[.62,1.2,.4]:[.92,1.08,.45])),o||e.add(rf(d*.32,10,8),`#ffffff`,Z([t*n+d*.3,d*.4,d*.36]));return e.build()}),a.pupil,!1);this.pupilBase.set(0,r*.1,r*.36),f.position.copy(this.pupilBase),this.eyes.add(f),this.pupils=f;let p=r*(o?1.55:.95),m=r*(o?.3:.19),h=vf(`brow:${p}:${m}`,()=>new Qi(m,p,6,12).rotateZ(Math.PI/2)),g=o?this.paintFor(`#1e0c1c`):this.paintFor(`brow`);this.browY=t[1]+r*(o?.78:1.5);let _=s===`angry`?.5:s===`worried`?-.4:-.08;this.browBase=[-_,_];let v=t[2]+r*.5;if(c&&!o){let e=this.browY-c.c[1];v=c.c[2]+Math.sqrt(Math.max(0,c.r*c.r-n*n-e*e))+m*.2}let y=yf(h,g,!1),b=yf(h,g,!1);y.position.set(t[0]-n*(o?1.05:1),this.browY,v),b.position.set(t[0]+n*(o?1.05:1),this.browY,v),e.add(y,b),this.browL=y,this.browR=b;let x=i.mouth??(o?`frown`:`smile`);if(x!==`none`&&c){let n=t[1]-r*1.35,i=n-c.c[1],o=c.c[2]+Math.sqrt(Math.max(0,c.r*c.r-i*i))-.004,s=yf(vf(`mouth:${x}:${r}`,()=>{let e=new $d,t=r*.55,n=r*.13;return x===`smile`?e.add(new wo(t,n,8,20,Math.PI),`#3a1418`,Z([0,t*.5,0],[0,0,Math.PI])):x===`o`?e.add(new wo(t*.42,n*1.1,8,20),`#3a1418`,Z([0,0,0],[0,0,0],[1,1.25,1])):(e.add(new wo(t*1.1,n,8,20,Math.PI),`#1e0c1c`,Z([0,-t*.6,0])),e.add(new ea(n*1.5,n*4.2,10),`#f6ead2`,Z([t*.62,-t*.05,n],[Math.PI,0,0]))),e.build()}),a.pupil,!1);s.position.set(t[0],n,o),s.rotation.x=-Math.asin(Math.max(-1,Math.min(1,i/c.r)))*.9,e.add(s),this.mouth=s}let S=yf(vf(`xeyes:${n}:${r}`,()=>{let e=new $d;for(let t of[-1,1])for(let i of[-1,1])e.add(new fd(r*1.9,r*.42,r*.3,2,r*.15),`#1a1016`,Z([t*n,0,r*.3],[0,0,i*Math.PI/4]));return e.build()}),a.pupil,!1);S.position.set(t[0],t[1],t[2]),S.visible=!1,e.add(S),this.xEyes=S}browMats=new Map;paintFor(e){let t=e===`brow`?gf(this.kind,this.team).brow:e,n=this.browMats.get(t);return n||(n=wf(t),this.browMats.set(t,n)),n}addKey(e,t,n=1.45){let r=uf(),i=yf(vf(`key:${n}`,()=>{let e=new $d,t=n;e.add(new $i(.017*t,.017*t,.09*t,12),`#fff`,Z([0,0,-.045*t],[Math.PI/2,0,0])),e.add(rf(.03*t,14,10),`#fff`,Z([0,0,-.09*t]));for(let n of[-1,1])e.add(new wo(.052*t,.019*t,10,28),`#fff`,Z([0,n*.066*t,-.1*t],[0,Math.PI/2,0],[1,1.12,1]));return e.build()}),this.team===`E`?r.iron:r.brass);i.position.set(t[0],t[1],t[2]),e.add(i),this.key=i}addHorns(e,t,n,r=1){let i=yf(vf(`horns:${n}:${r}`,()=>{let e=new $d,t=[[.052,0],[.047,.04],[.034,.085],[.016,.12],[0,.14]];for(let i of[-1,1])e.add(nf(t,16,16),`#f1e3c6`,Z([i*n,0,0],[.18,0,-i*.5],r));return e.build()}),uf().plastic);i.position.set(t[0],t[1],t[2]),e.add(i)}addCrown(e,t,n=1){let r=uf(),i=new rr,a=vf(`crown`,()=>{let e=new $d,t=.1,n=.125,r=[[t,0],[n,0],[n,.05],[t,.05],[t,0]].map(([e,t])=>new V(e,t));e.add(new vo(r,40),`#fff`);for(let t=0;t<5;t++){let n=t/5*Math.PI*2+Math.PI/2,r=Math.cos(n)*.112,i=Math.sin(n)*.112;e.add(new ea(.036,.085,12),`#fff`,Z([r,.09,i],[0,0,0],[1,1,.55]).multiply(new G().makeRotationY(-n+Math.PI/2))),e.add(rf(.019,10,8),`#fff`,Z([r,.14,i]))}return e.build()});i.add(yf(a,Ef()));let o=yf(vf(`crown:gem`,()=>new yo(.028,0).scale(1,1.3,.6)),r.gem,!1);o.position.set(0,.03,.125),i.add(o),i.position.set(t[0],t[1],t[2]),i.rotation.set(-.1,0,.12),i.scale.setScalar(n*1.25),e.add(i),this.crown=i}addFeet(e,t,n=1,r=.02){let i=vf(`foot:${n}`,()=>rf(.068*n,14,10).scale(1,.62,1.4)),a=uf().plastic,o=vf(`footc:${e}:${n}`,()=>new $d().add(i.clone(),e).build());for(let e of[-1,1]){let i=new rr,s=yf(o,a);s.position.set(e*t,.042*n,r),i.add(s),this.base.add(i),e<0?this.footL=i:this.footR=i}}setContactSize(e,t=e){this.shadow.scale.set(e,t,1),this.shadowBase.set(e,t)}shadowBase=new V(1,1)},xf=null;function Sf(){return xf||=new bo(1,1),xf}var Cf=new Map;function wf(e){let t=Cf.get(e);return t||(t=new Lo({color:e,roughness:.35,clearcoat:.6}),Cf.set(e,t)),t}var Tf=null;function Ef(){return Tf||=new Lo({color:`#ffcc3a`,metalness:.65,roughness:.22,clearcoat:1,clearcoatRoughness:.08,emissive:new K(`#a86400`),emissiveIntensity:.45}),Tf}var Df=new Map;function Of(e){let t=Df.get(e);return t||(t=new Lo({map:e===`E`?yd([``,``,``,``,``,``],[`#e2463a`],mf):e===`P`?yd([`T`,`O`,`Y`,`S`,`A`,`B`],[`#3b8fe6`,`#ec4636`,`#f9b62b`],`#fff3dc`):yd([`A`,`B`,`C`,`D`,`E`,`F`],[`#e2463a`,`#2f7fd8`,`#f2a52a`,`#3fae6a`,`#9256dc`,`#e2463a`],`#f6e6c8`),roughness:.55,clearcoat:.35,clearcoatRoughness:.3}),Df.set(e,t)),t}function kf(e){let t=e.getAttribute(`uv`),n=e.index,r=new Set;return e.groups.forEach((e,i)=>{let a=i%3,o=Math.floor(i/3);for(let i=e.start;i<e.start+e.count;i++){let e=n?n.getX(i):i;if(r.has(e))continue;r.add(e);let s=.04+t.getX(e)*.92,c=.04+t.getY(e)*.92;t.setXY(e,(a+s)/3,(1-o+c)/2)}}),t.needsUpdate=!0,e.clearGroups(),e}function Af(e,t,n,r,i=1.08,a=.95,o=1){e.add(rf(r,26,18),t,Z([0,n,0],[0,0,0],[i,a,o]))}function jf(e,t,n,r,i=0){e.headSphere={c:[0,r*.82,i],r:r*.99};let a=vf(`head:${e.kind}:${e.team}:${r}`,()=>{let n=new $d;return n.add(rf(r,30,22),t.main,Z([0,r*.82,i],[0,0,0],[1.04,.97,1])),e.team!==`E`&&e.kind!==`zip`&&e.kind!==`twirl`&&n.add(rf(r*.5,18,12),t.belly,Z([0,r*.4,i+r*.62],[0,0,0],[1.3,.62,.6])),n.build()});e.head.position.set(0,n,0),e.head.add(yf(a,uf().plastic));let o=r*.93,s=i+r*.84;return e.team===`E`&&e.addHorns(e.head,[0,r*1.45,i-r*.05],r*.6),e.crowned&&e.addCrown(e.head,[0,r*1.62,i-r*.05],r/.24),[0,o,s]}function Mf(e,t,n){let r=yf(vf(`body:${e.kind}:${e.team}`,()=>{let e=new $d;return t(e),e.build()}),n??uf().plastic);return e.body.add(r),r}function Nf(e,t,n,r){let i=yf(vf(`gadget:${t}:${e.kind}:${e.team}`,()=>{let e=new $d;return n(e),e.build()}),r??uf().plastic);return e.gadget.add(i),i}function Pf(e,t){e.addFeet(t.dark,.1),Mf(e,e=>{Af(e,t.main,.22,.2),e.add(new wo(.135,.026,12,40),t.accent,Z([0,.37,0],[Math.PI/2,0,0])),e.add(rf(.055,16,12),t.main,Z([-.2,.22,.05],[0,0,0],[.9,1,1.1]))});let n=jf(e,t,.36,.245);e.addFace(e.head,n,.1,.086,{head:e.headSphere}),e.addKey(e.body,[0,.24,-.2]),e.gadget.position.set(.24,.31,.04),e.spring=Nf(e,`spring`,e=>{e.add(ef(.032,.13,4.5,.011),`#d8dce2`,Z([0,0,0],[Math.PI/2,0,0]))}),e.glove=Nf(e,`glove`,e=>{e.add(rf(.15,22,16),t.gadget,Z([.06,.05,.27],[0,0,0],[1,.95,1.08])),e.add(rf(.054,16,12),t.gadget,Z([-.05,.08,.27],[0,0,.4],[1,1.2,1])),e.add(af(.105,.09,.03,24),t.gadget2,Z([.05,.04,.145],[Math.PI/2,0,0]))}),e.body.add(e.gadget),e.setContactSize(1,1.1)}function Ff(e,t){Mf(e,e=>{e.add(af(.19,.08,.035,36),t.dark,Z([0,.04,0])),e.add(af(.12,.06,.02,30),t.accent,Z([0,.1,0])),Af(e,t.main,.25,.17,1.1,.9,1),e.add(new wo(.12,.024,12,40),t.accent,Z([0,.38,0],[Math.PI/2,0,0]))});let n=jf(e,t,.37,.245);e.addFace(e.head,[n[0],n[1]+.01,n[2]],.1,.086,{head:e.headSphere,mouth:`none`}),e.addKey(e.body,[0,.25,-.17]),e.gadget.position.set(0,.5,.19),e.gadget.rotation.x=-.28,Nf(e,`barrel`,n=>{let r=e.team===`E`?t.gadget:`#2c2c38`,i=e.team===`E`?t.gadget2:`#e0ad55`;n.add(new $i(.055,.062,.27,28),r,Z([0,0,.135],[Math.PI/2,0,0])),n.add(new wo(.058,.02,12,32),i,Z([0,0,.27])),n.add(new wo(.064,.014,10,32),i,Z([0,0,.05])),n.add(new $i(.04,.034,.06,20),`#d6a66a`,Z([0,0,.29],[Math.PI/2,0,0]))}),e.body.add(e.gadget),e.setContactSize(.95)}function If(e,t){e.addFeet(e.team===`E`?t.dark:`#1a2550`,.11,.95);let n=.27,r=.31;Mf(e,e=>{e.add(rf(n,34,24),t.main,Z([0,r,0]))}),e.head.position.set(0,r,0),e.addFace(e.head,[0,.1,n*.86],.104,.088,{mood:e.team===`E`?`angry`:`worried`,head:{c:[0,0,0],r:n},mouth:e.team===`E`?`frown`:`o`}),e.team===`E`&&e.addHorns(e.head,[0,.21,-.02],.17),e.gadget.position.set(0,.26,0),Nf(e,`cap`,e=>{e.add(af(.095,.085,.025,32),`#f28a2a`,Z([0,.02,0])),e.add(new wo(.096,.012,8,32),`#ffb35a`,Z([0,.06,0],[Math.PI/2,0,0])),e.add(tf([[0,.05,0],[0,.11,-.01],[.03,.16,-.04],[.08,.18,-.07]],.014,20,8),`#e8d6b0`)});let i=new J(vf(`spark`,()=>new _o(.03,0)),uf().spark);i.position.set(.085,.185,-.072),e.gadget.add(i),e.spark=i,e.head.add(e.gadget),e.crowned&&e.addCrown(e.head,[-.06,.29,.04],1),e.addKey(e.body,[0,r,-.26]),e.height=.78,e.setContactSize(1.15)}function Lf(e,t){e.addFeet(t.dark,.15,1.05),Mf(e,e=>{e.add(new fd(.5,.3,.36,4,.13),t.main,Z([0,.2,-.02]));for(let n of[-1,1])e.add(rf(.062,16,12),t.main,Z([n*.265,.24,.13]));e.add(new wo(.12,.024,12,40),t.accent,Z([0,.35,-.02],[Math.PI/2,0,0]))});let n=jf(e,t,.35,.225,-.02);e.addFace(e.head,[n[0],n[1]+.01,n[2]],.094,.082,{head:e.headSphere}),e.addKey(e.body,[0,.24,-.2]),e.gadget.position.set(0,.25,.21),Nf(e,`plate`,n=>{let r=e.team===`E`?t.gadget:`#eef0f3`,i=e.team===`E`?t.gadget2:t.main;n.add(new fd(.64,.38,.07,4,.03),i,Z([0,0,.05])),n.add(new fd(.56,.3,.04,4,.02),r,Z([0,0,.075]));for(let e of[-1,1])for(let t of[-1,1])n.add(rf(.018,10,8),i,Z([e*.24,t*.11,.095]))}),e.body.add(e.gadget),e.setContactSize(1.25,1.1)}function Rf(e,t){let n=yf(vf(`hop:pad:${e.team}`,()=>new $d().add(af(.14,.05,.022,32),t.dark,Z([0,.025,0])).build()),uf().plastic);e.base.add(n),e.gadget.position.set(0,.045,0),Nf(e,`spring`,e=>{e.add(ef(.095,.15,4,.019,80),`#dfe3e8`)}),e.base.add(e.gadget),Mf(e,e=>{e.add(af(.12,.035,.015,28),t.accent,Z([0,.2,0])),Af(e,t.main,.34,.17,1.1,.95,1),e.add(new wo(.115,.023,12,40),t.accent,Z([0,.48,0],[Math.PI/2,0,0]));for(let n of[-1,1])e.add(new Qi(.045,.12,6,14),t.main,Z([n*.1,.9500000000000001,-.03],[-.15,0,-n*.22]))});let r=jf(e,t,.47,.23);e.addFace(e.head,r,.094,.084,{head:e.headSphere}),e.addKey(e.body,[0,.35,-.17]),e.height=.95,e.setContactSize(.85)}function zf(e,t){let n=e.team===`E`?t.accent:`#d6b8ff`;Mf(e,e=>{e.add(nf([[0,0],[.03,.012],[.1,.06],[.2,.13],[.265,.19],[.25,.235],[.17,.28],[.08,.31],[0,.315]],30,32),e=>e.y>.165&&e.y<.215?n:e.y<.035?t.dark:t.main)});let r=jf(e,t,.29,.225);e.addFace(e.head,r,.094,.082,{head:e.headSphere,mouth:`none`});let i=yf(vf(`twirl:knob:${e.team}`,()=>{let e=new $d;return e.add(new $i(.022,.022,.08,12),`#d6dbe3`,Z([0,.04,0])),e.add(rf(.042,16,12),n,Z([0,.09,0])),e.build()}),uf().plastic);i.position.set(0,.3825,0),e.team!==`E`&&!e.crowned&&e.head.add(i),e.gadget.position.set(0,.29+.11,.19),Nf(e,`barrel`,e=>{e.add(new $i(.044,.05,.14,24),t.gadget,Z([0,0,.07],[Math.PI/2,0,0])),e.add(new wo(.047,.014,10,28),t.gadget2,Z([0,0,.14])),e.add(new $i(.03,.026,.04,16),`#c89a62`,Z([0,0,.152],[Math.PI/2,0,0]))}),e.body.add(e.gadget),e.addKey(e.body,[0,.21,-.23]),e.setContactSize(.9)}function Bf(e,t){let n=e.team===`E`?mf:e.team===`P`?`#fff6e6`:`#f6e7c8`,r=e.team===`E`?`#e2463a`:e.team===`P`?`#3b8fe6`:`#e2463a`,i=[[0,0],[.11,.004],[.14,.05],[.165,.17],[.15,.29],[.1,.4],[.078,.47],[.09,.54],[.112,.62],[.1,.7],[.05,.74],[0,.748]];if(Mf(e,e=>{e.add(nf(i,28,40),e=>e.y>.425&&e.y<.455||e.y>.478&&e.y<.506?r:n)},uf().paint),e.height=.75,e.head.position.set(0,.6,0),e.team===`E`)e.addFace(e.head,[0,.025,.095],.05,.042),e.addHorns(e.head,[0,.11,0],.07,.7);else{e.alive=!1;let t=vf(`pin:face:${e.team}`,()=>{let e=new $d;for(let t of[-1,1])e.add(rf(.017,12,10),`#2a1c18`,Z([t*.04,.03,.104],[0,0,0],[1,1.3,.4]));e.add(new wo(.03,.007,6,16,Math.PI),`#c83a30`,Z([0,-.005,.106],[0,0,Math.PI]));for(let t of[-1,1])e.add(rf(.016,10,8),`#f4a0a0`,Z([t*.068,0,.088],[0,0,0],[1,.7,.4]));return e.build()});e.head.add(yf(t,uf().paint,!1))}e.crowned&&e.addCrown(e.head,[0,.16,0],.75),e.setContactSize(.78)}function Vf(e,t){let n=.6,r=yf(vf(`block:${e.team}`,()=>kf(new fd(n,n,n,4,.07))),Of(e.team));r.position.y=.305,e.body.add(r),e.height=.62,e.head.position.set(0,n/2,0),e.team===`E`?(e.addFace(e.head,[0,.04,.305],.11,.08),e.addHorns(e.head,[0,n/2-.02,0],.17,1.1)):e.alive=!1,e.crowned&&e.addCrown(e.head,[0,.33999999999999997,0],1.2),e.setContactSize(1.3)}function Hf(e,t){let n=e.team===`E`?mf:e.team===`P`?`#3b8fe6`:`#e2463a`,r=e.team===`E`?`#e2463a`:`#ffd36a`,i=e.team===`E`?`#f0dcc0`:`#fff4e0`;Mf(e,e=>{e.add(af(.25,.44,.06,40),n,Z([0,.225,0])),e.add(new $i(.253,.253,.08,40,1,!0),i,Z([0,.23,0]));for(let t of[.07,.39])e.add(new wo(.252,.02,10,48),r,Z([0,t,0],[Math.PI/2,0,0]));e.add(af(.19,.03,.012,32),of(n,.7),Z([0,.448,0])),e.add(tf([[0,.45,0],[0,.53,0],[.04,.58,-.03],[.09,.6,-.04]],.016,20,8),`#e8d6b0`),e.add(rf(.022,10,8),`#3a2a24`,Z([.095,.6,-.04]))},uf().paint),e.height=.62,e.head.position.set(0,.26,0),e.team===`E`?(e.addFace(e.head,[0,.02,.24],.1,.075),e.addHorns(e.head,[0,.18,0],.16,1)):e.alive=!1,e.crowned&&e.addCrown(e.head,[-.07,.22,.05],1),e.setContactSize(1.15)}var Uf={bonk:Pf,zip:Ff,boom:If,shove:Lf,hop:Rf,twirl:zf,pin:Bf,block:Vf,keg:Hf};function Wf(e,t,n=!1){let r=new bf(e,t,n);return Uf[e](r,gf(e,t)),r.gadgetBase.copy(r.gadget.position),r.update(0,0),r}function Gf(e){let t=uf().ghost;for(let n of e.meshes())n.material=t,n.castShadow=!1,n.receiveShadow=!1;e.shadow.visible=!1}var Kf={bonk:`BONK!`,shot:`POP!`,stomp:`SPLAT!`};function qf(e,t){e.root.position.y=t,e.shadow.position.y=.006-t;let n=1+Math.max(0,t)*.45;e.shadow.scale.x=e.shadowBase.x*n,e.shadow.scale.y=e.shadowBase.y*n}function Jf(e){let t=e.rig.pose;t.squash=1,t.lean=0,t.tilt=0,t.twist=0,t.lift=0,t.feetLift=0,t.headTurn=0,t.headNod=0,t.lookX=0,t.lookY=0,t.brow=0,t.gadget=0,t.eyeOpen=1,qf(e.rig,0)}function Yf(e,t,n,r){let i=null;if(r)for(let e of t.actions)for(let t of e.events)(t.t===`ko`||t.t===`fall`||t.t===`boom`)&&(i=t);let a=new Map,o=0;for(let r of t.actions){let t=o;for(let e of Xf(r))t=Math.max(t,a.get(e)??0);o=t+.05;let s=n.views.get(r.actor);s&&e.call(t,()=>n.focus(s.rig.root.position.x,s.rig.root.position.z));let c=0;for(let e of r.events)c=Math.max(c,e.s);let l={chain:0,pushCued:!1,boomWord:!1,pushes:r.events.some(e=>e.t===`move`&&e.pushed||e.t===`fall`)},u=t;for(let t=0;t<=c;t++){let o=0;for(let s of r.events){if(s.s!==t)continue;let c=u+(s.t===`move`&&s.pushed?.05:0),d=ep(e,s,c,n,r,l,s===i);o=Math.max(o,d.impact);let f=s.id;a.set(f,Math.max(a.get(f)??0,c+d.end))}u+=o>0?o:.12}}}function Xf(e){let t=new Set([e.actor]);for(let n of e.events)t.add(n.id),(n.t===`bonk`||n.t===`shoot`)&&t.add(n.target);return t}function Zf(n){return new H(e[n],0,t[n])}function Qf(e,t,n=0){return new H(e.cellX(t[0]),n,e.cellZ(t[1]))}function $f(e,t,n,r,i){let a=[];for(let o of e.views.values())o.alive&&o.id!==i&&Math.max(Math.abs(o.x-t),Math.abs(o.y-n))<=r&&a.push(o);return a}function ep(n,r,i,a,o,s,c){let l=a.views.get(r.id);if(!l)return{impact:0,end:0};let u=l.rig,d=u.pose;switch(r.t){case`move`:{let e=Qf(a,r.from),t=Qf(a,r.to);if(r.pushed){let a=.24;return n.add({at:i,dur:a,begin:()=>{l.ctl++,u.scare(.5)},tick:n=>{let r=rd(n);u.root.position.set(e.x+(t.x-e.x)*r,u.root.position.y,e.z+(t.z-e.z)*r),d.tilt=Math.sin(n*Math.PI*3)*.2*(1-n),d.lean=-.15*od(n)},end:()=>{l.x=r.to[0],l.y=r.to[1],l.ctl--,Jf(l)}}),{impact:0,end:a}}let o=.3,c=l.kind===`shove`&&s.pushes;return n.add({at:i,dur:o,begin:()=>{l.ctl++,c&&!s.pushCued&&(s.pushCued=!0,a.cue({type:`push`,kind:l.kind,team:l.team,id:l.id,at:r.to}))},tick:n=>{let r=n<.12?0:rd((n-.12)/.88);u.root.position.set(e.x+(t.x-e.x)*r,0,e.z+(t.z-e.z)*r);let i=n<.12?0:od((n-.12)/.75);qf(u,i*.1),d.squash=n<.12?1-.1*od(n/.12):n<.87?1+.08*i:1-.1*od((n-.87)/.13),d.lean=c?.22:.16*i,d.tilt=Math.sin(n*Math.PI*2)*.1,d.gadget=c?.7:0},end:()=>{if(l.x=r.to[0],l.y=r.to[1],l.ctl--,Jf(l),a.cue({type:`step`,kind:l.kind,team:l.team,id:l.id,at:r.to}),l.kind===`boom`)for(let e of $f(a,l.x,l.y,1,l.id))e.rig.scare(1.2)}}),{impact:0,end:o}}case`bump`:{let e=.32;return n.add({at:i,dur:e,begin:()=>{l.ctl++,a.cue({type:`bump`,kind:l.kind,team:l.team,id:l.id,at:[l.x,l.y]})},tick:e=>{qf(u,Math.abs(Math.sin(e*Math.PI*2))*.05),d.lean=.18*Math.sin(e*Math.PI),d.squash=1-.08*Math.abs(Math.sin(e*Math.PI*2)),d.brow=-.3,d.gadget=l.kind===`shove`?.5*od(e):0},end:()=>{l.ctl--,Jf(l)}}),{impact:0,end:e}}case`bonk`:{let o=a.views.get(r.target),s=o?Qf(a,[o.x,o.y],.42):Qf(a,[l.x+e[r.dir],l.y+t[r.dir]],.42);return n.add({at:i,dur:.46,begin:()=>{l.ctl++,o?.rig.scare(.4)},tick:(e,t)=>{if(t<.11){let e=rd(t/.11);d.gadget=-.6*e,d.lean=-.3*e,d.twist=.45*e,d.squash=1+.1*e,d.brow=-.7*e}else if(t<.15){let e=rd((t-.11)/.04);d.gadget=-.6+1.6*e,d.lean=-.3+.55*e,d.twist=.45-.75*e,d.squash=1.1-.2*e}else if(t<.22)d.gadget=1,d.lean=.25,d.twist=-.3,d.squash=.9;else{let e=(t-.22)/.24;d.gadget=1-rd(e)+sd(e*.24,30,14)*.12*(1-e),d.lean=.25*(1-rd(e))-.08*od(e),d.twist=-.3*(1-rd(e)),d.squash=1-.1*(1-e)+.05*od(e),d.brow=-.7*(1-e)}},end:()=>{l.ctl--,Jf(l)}}),n.call(i+.15,()=>{a.cue({type:`bonk`,kind:l.kind,team:l.team,id:l.id,at:[l.x,l.y]}),a.fx.impact(s.x-e[r.dir]*.25,s.y,s.z-t[r.dir]*.25,1.2)}),{impact:.15,end:.44}}case`shoot`:{let e=Zf(r.dir),t=Qf(a,r.from,.5).addScaledVector(e,.48),s=Qf(a,r.to,.44).addScaledVector(e,-.3),c=.04+t.distanceTo(s)*.042,u=null,f=o.events.some(e=>e.t===`block`&&e.s===r.s+1&&e.id===r.target)?.38:0,p=Zf(r.dir).multiplyScalar(-1),m=Math.random()<.5?-1:1;return n.add({at:i,dur:.3,begin:()=>{l.ctl++,a.cue({type:`pop`,kind:l.kind,team:l.team,id:l.id,at:r.from}),a.fx.impact(t.x,t.y,t.z,.6)},tick:e=>{d.gadget=1-rd(e),d.lean=-.12*od(e),d.squash=1-.06*od(e),d.brow=-.4},end:()=>{l.ctl--,Jf(l)}}),n.add({at:i,dur:c+f,begin:()=>{u=a.fx.takeCork(),u.rotation.set(0,df[r.dir],0),u.position.copy(t)},tick:(e,n)=>{if(!u)return;if(n<c){let e=n/c;u.position.lerpVectors(t,s,e),u.position.y+=od(e)*.04,a.fx.trail(u.position.x,u.position.y,u.position.z);return}let r=n-c;u.position.set(s.x+p.x*r*1.6+p.z*m*r*.8,s.y+2.6*r-9*r*r,s.z+p.z*r*1.6+p.x*m*r*.8),u.rotation.x=r*22},end:()=>{u&&a.fx.releaseCork(u),u=null}}),{impact:c,end:Math.max(.3,c)}}case`hop`:{let e=Qf(a,r.from),t=Qf(a,r.to),o=.62;return n.add({at:i,dur:o,begin:()=>{l.ctl++},tick:(n,r)=>{if(r<.1){let t=rd(r/.1);d.squash=1-.22*t,d.gadget=.7*t,u.root.position.set(e.x,0,e.z),qf(u,0)}else if(r<.4){let n=(r-.1)/.3;u.root.position.set(e.x+(t.x-e.x)*n,0,e.z+(t.z-e.z)*n),qf(u,od(n)*.95),d.squash=1+.16*(1-n),d.gadget=-.5*od(n),d.lean=.2*Math.cos(n*Math.PI)}else{let e=(r-.4)/.22;u.root.position.set(t.x,0,t.z),qf(u,0),d.squash=1-.25*Math.exp(-e*5)*Math.cos(e*9),d.gadget=.6*Math.exp(-e*4),d.lean=0}},end:()=>{l.x=r.to[0],l.y=r.to[1],l.ctl--,Jf(l)}}),n.call(i+.1,()=>a.cue({type:`hop`,kind:l.kind,team:l.team,id:l.id,at:r.from})),n.call(i+.4,()=>{a.cue({type:`land`,kind:l.kind,team:l.team,id:l.id,at:r.to}),a.fx.dust(t.x,t.z,1.2)}),{impact:.4,end:o}}case`hopfail`:{let e=.4;return n.add({at:i,dur:e,begin:()=>{l.ctl++},tick:e=>{qf(u,od(e)*.12),d.squash=e<.2?1-.15*od(e/.2):1+.05*od(e),d.gadget=e<.2?.5*od(e/.2):0,d.brow=.7*od(e),d.headNod=.2*od(e)},end:()=>{l.ctl--,Jf(l)}}),{impact:0,end:e}}case`turn`:{let e=df[r.from],t=cd(e,df[r.to]),o=.24;return n.add({at:i,dur:o,begin:()=>{l.ctl++,a.cue({type:`turn`,kind:l.kind,team:l.team,id:l.id,at:[l.x,l.y]})},tick:n=>{u.root.rotation.y=e+t*ad(n,2.4),qf(u,od(n)*.06),d.squash=1+.06*od(n)},end:()=>{l.dir=r.to,u.root.rotation.y=df[r.to],l.ctl--,Jf(l)}}),{impact:0,end:o}}case`boom`:{let e=Qf(a,r.at),t=r.s===0||o.actor===r.id?.12:.06,f=l.id===o.actor?s.chain:++s.chain;return n.add({at:i,dur:t,begin:()=>{l.ctl++,u.scare(1)},tick:e=>{d.squash=1+.3*id(e),u.root.scale.setScalar(1+.18*id(e))},end:()=>{a.fx.boom(e.x,e.z),s.boomWord||(s.boomWord=!0,a.fx.words.show(`BOOM!`,new H(e.x,.6,e.z))),a.cue({type:`boom`,kind:l.kind,team:l.team,id:l.id,at:r.at,chain:f}),c&&a.slowMo(.3,.5),l.alive=!1,u.root.visible=!1,u.root.scale.setScalar(1),l.ctl--,Jf(l);for(let e of $f(a,r.at[0],r.at[1],2,l.id))e.rig.flinch()}}),{impact:t+.02,end:t}}case`block`:{let e=Zf(r.dir+2&3),t=Qf(a,[l.x,l.y],.3).addScaledVector(e,.36),o=r.by===null?void 0:a.views.get(r.by);return n.add({at:i,dur:.36,begin:()=>{l.ctl++,a.cue({type:`tink`,kind:l.kind,team:l.team,id:l.id,at:[l.x,l.y]}),a.fx.tink(t.x,t.y,t.z),a.fx.words.show(`TINK!`,t.clone().setY(.7)),u.flashGadget(!0)},tick:e=>{e>.3&&u.flashGadget(!1),d.lean=-.16*Math.exp(-e*4)*Math.cos(e*14),d.gadget=-.4*Math.exp(-e*5),d.brow=-.4,o&&o.ctl===0&&o.alive&&(o.rig.pose.lean=-.2*od(e),o.rig.pose.eyeOpen=1+.3*od(e))},end:()=>{u.flashGadget(!1),l.ctl--,Jf(l),o&&o.ctl===0&&Jf(o)}}),{impact:0,end:.36}}case`ko`:{s.chain++;let e=s.chain,t=r.dir===null?new H:Zf(r.dir),o=Kf[r.cause];return n.add({at:i,dur:.1,begin:()=>{if(r.dir===null){let e=r.by===null?void 0:a.views.get(r.by);e&&t.set(l.x-e.x,0,l.y-e.y),t.lengthSq()<.01&&t.set(Math.random()-.5,0,Math.random()-.5),t.normalize()}(e===1||c)&&a.hitStop(.06),c&&a.slowMo(.3,.55);let n=a.spawnFlyer(l),i=n.root.position.clone();o&&e===1&&a.fx.words.show(o,i.clone().setY(.75)),a.fx.impact(i.x,.45,i.z,1),a.cue({type:`ko`,kind:l.kind,team:l.team,id:l.id,at:r.at,chain:e});for(let e of $f(a,r.at[0],r.at[1],1,l.id))e.rig.flinch();n.pose.xEyes=!0,n.shadow.visible=!1;let s=9+Math.random()*4,u=0;a.simAnim(e=>{u+=e,n.root.position.set(i.x+t.x*3.4*u,i.y+4.6*u-9*u*u,i.z+t.z*3.4*u);let r=s*u;return n.root.rotation.x=r*t.z,n.root.rotation.z=-r*t.x,n.root.scale.setScalar(u>.5?Math.max(.001,1-(u-.5)/.3):1),n.pose.squash=1+.15*Math.exp(-u*10),u>=.8&&(a.removeFlyer(n),!0)})}}),{impact:0,end:.1}}case`fall`:{s.chain++;let e=s.chain,t=Zf(r.dir),o=Qf(a,r.from),f=o.clone().addScaledVector(t,.42),p=.18;return n.add({at:i,dur:p,begin:()=>{l.ctl++,u.scare(1)},tick:(e,t)=>{u.root.position.lerpVectors(o,f,rd(e)),d.tilt=Math.sin(t*40)*.08},end:()=>{l.ctl--,Jf(l),l.x=r.to[0],l.y=r.to[1],a.cue({type:`fall`,kind:l.kind,team:l.team,id:l.id,at:r.from,chain:e}),c&&a.slowMo(.3,.5);let n=a.spawnFlyer(l);n.shadow.visible=!1,n.pose.eyeOpen=1.3;let i=0;a.simAnim(e=>{i+=e,n.root.position.set(f.x+t.x*i*1.2,-10*i*i,f.z+t.z*i*1.2);let r=Math.min(2.2,i*7);return n.root.rotation.x=r*t.z,n.root.rotation.z=-r*t.x,i>=.7&&(a.removeFlyer(n),!0)})}}),{impact:0,end:p}}case`idle`:{let e=.36;return n.add({at:i,dur:e,begin:()=>{l.ctl++},tick:e=>{d.headTurn=Math.sin(e*Math.PI*2)*.35,d.lookX=Math.sin(e*Math.PI*2)},end:()=>{l.ctl--,Jf(l)}}),{impact:0,end:e}}}return{impact:0,end:0}}function tp(e,t){let n=new dr,r=new J(new Co(10,48,24),new Po({side:1,uniforms:{uTop:{value:new K(t.env.top).multiplyScalar(.7)},uMid:{value:new K(t.env.horizon).multiplyScalar(.6)},uBot:{value:new K(t.env.bottom).multiplyScalar(.5)}},vertexShader:`varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
        uniform vec3 uTop, uMid, uBot; varying vec3 vP;
        void main(){
          float y = vP.y;
          vec3 c = y > 0.0 ? mix(uMid, uTop, smoothstep(0.0, 0.7, y)) : mix(uMid, uBot, smoothstep(0.0, -0.4, y));
          gl_FragColor = vec4(c, 1.0);
        }`}));n.add(r);let i=(e,t,r,i,a)=>{let o=new J(new bo(e,t),new gi({color:new K(r).multiplyScalar(i),side:2}));o.position.copy(a),o.lookAt(0,0,0),n.add(o)},a=sn.degToRad(t.key.azimuth),o=sn.degToRad(t.key.elevation),s=new H(Math.sin(a)*Math.cos(o),Math.sin(o),Math.cos(a)*Math.cos(o));i(1.8,1.4,t.env.softbox,16,s.clone().multiplyScalar(7)),i(8,.6,t.rim.color,5,new H(0,3,-7.5)),i(2,2,`#cfe0ff`,2,new H(7,2,2)),i(3,.6,`#ffffff`,8,new H(-1,8.5,3));let c=new fc(e),l=c.fromScene(n,.03);return c.dispose(),n.traverse(e=>{e instanceof J&&(e.geometry.dispose(),e.material.dispose())}),l.texture}function np(e){let t=sn.degToRad(e.key.azimuth),n=sn.degToRad(e.key.elevation);return new H(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n))}var rp={puff:0,confetti:1,disc:2,ring:3},ip=`
attribute vec3 aPos;
attribute vec4 aCol;
attribute vec4 aParams; // size, rotation, shape, flip
varying vec2 vUv;
varying vec4 vCol;
varying float vShape;
varying float vShade;
void main() {
  vec4 mv = modelViewMatrix * vec4(aPos, 1.0);
  vec2 o = position.xy;
  vShade = 1.0;
  if (aParams.z > 0.5 && aParams.z < 1.5) {
    float f = cos(aParams.w);
    o.y *= 0.6 * (abs(f) * 0.85 + 0.15);
    vShade = 0.7 + 0.3 * f;
  }
  float c = cos(aParams.y);
  float s = sin(aParams.y);
  o = vec2(c * o.x - s * o.y, s * o.x + c * o.y);
  mv.xy += o * aParams.x;
  gl_Position = projectionMatrix * mv;
  vUv = uv;
  vCol = aCol;
  vShape = aParams.z;
}`,ap=`
varying vec2 vUv;
varying vec4 vCol;
varying float vShape;
varying float vShade;
void main() {
  vec2 p = vUv - 0.5;
  float r = length(p) * 2.0;
  float a;
  if (vShape < 0.5) a = smoothstep(1.0, 0.35, r) * (0.75 + 0.25 * smoothstep(0.9, 0.2, r));
  else if (vShape < 1.5) a = 1.0;
  else if (vShape < 2.5) a = smoothstep(1.0, 0.55, r);
  else a = smoothstep(0.12, 0.0, abs(r - 0.8)) ;
  a *= vCol.a;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vCol.rgb * vShade, a);
}`;function op(e,t,n,r){for(let i=0;i<t;i++)e[n*t+i]=e[r*t+i]}var sp=class{mesh;max;n=0;P;V;L;S;C;R;G;aPos;aCol;aParams;geo;constructor(e,t){this.max=e,this.P=new Float32Array(e*3),this.V=new Float32Array(e*3),this.L=new Float32Array(e*3),this.S=new Float32Array(e*4),this.C=new Float32Array(e*3),this.R=new Float32Array(e*4),this.G=new Float32Array(e*3);let n=new bo(1,1);this.geo=new Cs,this.geo.index=n.index,this.geo.setAttribute(`position`,n.getAttribute(`position`)),this.geo.setAttribute(`uv`,n.getAttribute(`uv`)),this.aPos=new ji(new Float32Array(e*3),3),this.aCol=new ji(new Float32Array(e*4),4),this.aParams=new ji(new Float32Array(e*4),4);for(let e of[this.aPos,this.aCol,this.aParams])e.setUsage(bt);this.geo.setAttribute(`aPos`,this.aPos),this.geo.setAttribute(`aCol`,this.aCol),this.geo.setAttribute(`aParams`,this.aParams),this.geo.instanceCount=0;let r=new Po({vertexShader:ip,fragmentShader:ap,transparent:!0,depthWrite:!1,blending:t?2:1});this.mesh=new J(this.geo,r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=t?6:5}spawn(e){let t=this.n;if(t>=this.max){let e=0,n=-1;for(let t=0;t<this.max;t++){let r=this.L[t*3]/Math.max(1e-4,this.L[t*3+1]);r>n&&(n=r,e=t)}t=e}else this.n++;let n=this.P,r=this.V,i=this.L,a=this.S,o=this.C,s=this.R,c=this.G;n[t*3]=e.x,n[t*3+1]=e.y,n[t*3+2]=e.z,r[t*3]=e.vx??0,r[t*3+1]=e.vy??0,r[t*3+2]=e.vz??0,i[t*3]=0,i[t*3+1]=e.life,i[t*3+2]=e.delay??0,a[t*4]=e.size,a[t*4+1]=e.size1??e.size,a[t*4+2]=e.a??1,a[t*4+3]=e.a1??0,o[t*3]=e.r,o[t*3+1]=e.g,o[t*3+2]=e.b,s[t*4]=e.rot??0,s[t*4+1]=e.vrot??0,s[t*4+2]=0,s[t*4+3]=e.vflip??0,c[t*3]=e.gravity??0,c[t*3+1]=e.drag??0,c[t*3+2]=e.shape??0}update(e){let t=this.P,n=this.V,r=this.L,i=this.S,a=this.C,o=this.R,s=this.G,c=this.aPos.array,l=this.aCol.array,u=this.aParams.array,d=0,f=0;for(;d<this.n;){if(r[d*3+2]>0){r[d*3+2]=r[d*3+2]-e,d++;continue}r[d*3]=r[d*3]+e;let p=r[d*3]/r[d*3+1];if(p>=1){this.kill(d);continue}let m=Math.max(0,1-s[d*3+1]*e);n[d*3]=n[d*3]*m,n[d*3+1]=(n[d*3+1]-s[d*3]*e)*m,n[d*3+2]=n[d*3+2]*m,t[d*3]=t[d*3]+n[d*3]*e,t[d*3+1]=t[d*3+1]+n[d*3+1]*e,t[d*3+2]=t[d*3+2]+n[d*3+2]*e,o[d*4]=o[d*4]+o[d*4+1]*e,o[d*4+2]=o[d*4+2]+o[d*4+3]*e,c[f*3]=t[d*3],c[f*3+1]=t[d*3+1],c[f*3+2]=t[d*3+2],l[f*4]=a[d*3],l[f*4+1]=a[d*3+1],l[f*4+2]=a[d*3+2];let h=Math.min(1,p*12);l[f*4+3]=h*(i[d*4+2]+(i[d*4+3]-i[d*4+2])*p),u[f*4]=i[d*4]+(i[d*4+1]-i[d*4])*(1-(1-p)*(1-p)),u[f*4+1]=o[d*4],u[f*4+2]=s[d*3+2],u[f*4+3]=o[d*4+2],f++,d++}this.geo.instanceCount=f,f>0&&(this.aPos.addUpdateRange(0,f*3),this.aCol.addUpdateRange(0,f*4),this.aParams.addUpdateRange(0,f*4),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aParams.needsUpdate=!0)}kill(e){let t=this.n-1;e!==t&&(op(this.P,3,e,t),op(this.V,3,e,t),op(this.L,3,e,t),op(this.S,4,e,t),op(this.C,3,e,t),op(this.R,4,e,t),op(this.G,3,e,t)),this.n--}clear(){this.n=0,this.geo.instanceCount=0}get active(){return this.n}dispose(){this.geo.dispose(),this.mesh.material.dispose()}},cp={"BONK!":{fill:`#ffd23f`,edge:`#3a1420`,tilt:-.12},"POP!":{fill:`#ffffff`,edge:`#1e3a6e`,tilt:.1},"BOOM!":{fill:`#ff8a2a`,edge:`#3a1010`,tilt:-.06},"TINK!":{fill:`#bfe8ff`,edge:`#1d3550`,tilt:.14},"SPLAT!":{fill:`#ff7eb6`,edge:`#3a1030`,tilt:-.1}};function lp(e){let t=document.createElement(`canvas`);t.width=512,t.height=256;let n=t.getContext(`2d`),r=cp[e];n.translate(256,132),n.rotate(r.tilt),n.font=`400 ${e.length>4?124:144}px "Lilita One", "Arial Rounded MT Bold", "Arial Black", system-ui, sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.lineJoin=`round`,n.fillStyle=`rgba(0,0,0,0.25)`,n.fillText(e,6,10),n.strokeStyle=r.edge,n.lineWidth=26,n.strokeText(e,0,0),n.fillStyle=r.fill,n.fillText(e,0,0),n.globalAlpha=.35,n.fillStyle=`#ffffff`,n.save(),n.beginPath(),n.rect(-256,-80,512,52),n.clip(),n.fillText(e,0,0),n.restore();let i=new qi(t);return i.colorSpace=mt,i.anisotropy=4,i}var up=class{scene=new dr;camera=new bs(0,1,1,0,-10,10);mats=new Map;slots=[];tmp=new H;w=1;h=1;constructor(){let e=new bo(1,.5);for(let e of Object.keys(cp))this.mats.set(e,new gi({map:lp(e),transparent:!0,depthTest:!1,depthWrite:!1}));for(let t=0;t<3;t++){let t=new J(e,this.mats.get(`BONK!`));t.visible=!1,this.scene.add(t),this.slots.push({mesh:t,age:0,life:.85,world:new H,active:!1,spin:0})}}refreshFonts(){for(let[e,t]of this.mats)t.map?.dispose(),t.map=lp(e),t.needsUpdate=!0}setSize(e,t){this.w=e,this.h=t,this.camera.left=0,this.camera.right=e,this.camera.top=t,this.camera.bottom=0,this.camera.updateProjectionMatrix()}show(e,t){let n=this.slots.find(e=>!e.active);n||=this.slots.reduce((e,t)=>e.age>t.age?e:t),n.active=!0,n.age=0,n.life=e===`BOOM!`?1:.8,n.world.copy(t),n.spin=(Math.random()-.5)*.25,n.mesh.material=this.mats.get(e),n.mesh.visible=!0}update(e,t){for(let n of this.slots){if(!n.active)continue;n.age+=e;let r=n.age/n.life;if(r>=1){n.active=!1,n.mesh.visible=!1;continue}this.tmp.copy(n.world).project(t);let i=(this.tmp.x+1)/2*this.w,a=(this.tmp.y+1)/2*this.h,o=r<.18?1.25*Math.sin(r/.18*Math.PI*.5):1+.25*Math.exp(-(r-.18)*14)*Math.cos((r-.18)*40),s=Math.min(this.w,this.h)*.27*o*(r>.8?1-(r-.8)*2:1);n.mesh.position.set(i,a+40+r*26,0),n.mesh.scale.set(s,s,1),n.mesh.rotation.z=n.spin,n.mesh.material.opacity=r>.75?1-(r-.75)/.25:1}}clear(){for(let e of this.slots)e.active=!1,e.mesh.visible=!1}get anyVisible(){return this.slots.some(e=>e.active)}dispose(){for(let e of this.mats.values())e.map?.dispose(),e.dispose()}},dp=null;function fp(){if(dp)return dp;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createImageData(128,128);for(let e=0;e<128;e++)for(let t=0;t<128;t++){let r=(t+.5)/64-1,i=(e+.5)/64-1,a=Math.atan2(i,r),o=Math.hypot(r,i)/(.82+.12*Math.sin(a*5)+.06*Math.sin(a*9+1)),s=Math.max(0,Math.min(1,(1-o)*1.6)),c=(e*128+t)*4;n.data[c]=n.data[c+1]=n.data[c+2]=Math.round(s*s*255),n.data[c+3]=255}return t.putImageData(n,0,0),dp=new qi(e),dp}var pp=class{group=new rr;soft=new sp(420,!1);glow=new sp(260,!0);words=new up;scorches=[];corks=[];flash=0;shake=0;constructor(){this.group.add(this.soft.mesh,this.glow.mesh);let e=new bo(1.25,1.25).rotateX(-Math.PI/2);for(let t=0;t<6;t++){let t=new J(e,new gi({color:`#1a0c08`,alphaMap:fp(),transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}));t.visible=!1,t.renderOrder=1,this.group.add(t),this.scorches.push({mesh:t,age:0,active:!1})}let t=new $d().add(new $i(.045,.038,.08,14),`#d6a66a`,Z([0,0,0],[Math.PI/2,0,0])).add(new $i(.046,.046,.012,14),`#b07a44`,Z([0,0,.038],[Math.PI/2,0,0])).build();for(let e=0;e<4;e++){let e=new J(t,uf().paint);e.visible=!1,e.castShadow=!0,this.group.add(e),this.corks.push({mesh:e,active:!1})}}takeCork(){let e=this.corks.find(e=>!e.active);return e||=this.corks[0],e.active=!0,e.mesh.visible=!0,e.mesh}releaseCork(e){let t=this.corks.find(t=>t.mesh===e);t&&(t.active=!1,t.mesh.visible=!1)}scorch(e,t){let n=this.scorches.find(e=>!e.active);n||=this.scorches.reduce((e,t)=>e.age>t.age?e:t),n.active=!0,n.age=0,n.mesh.position.set(e,.01,t),n.mesh.rotation.y=Math.random()*Math.PI*2,n.mesh.visible=!0}dust(e,t,n=1){let r=Math.round(9*n);for(let i=0;i<r;i++){let a=i/r*Math.PI*2+Math.random()*.4,o=.9+Math.random()*.6;this.soft.spawn({x:e+Math.cos(a)*.18,y:.06,z:t+Math.sin(a)*.18,vx:Math.cos(a)*o*n,vy:.35+Math.random()*.3,vz:Math.sin(a)*o*n,drag:5,life:.45+Math.random()*.2,size:.12,size1:.3,r:1,g:.97,b:.92,a:.75,shape:rp.puff})}}boom(e,t){this.flash=Math.max(this.flash,.45),this.shake=Math.max(this.shake,.14),this.glow.spawn({x:e,y:.45,z:t,life:.1,size:.5,size1:1.5,r:3.5,g:2.6,b:1.6,a:1,shape:rp.disc}),this.glow.spawn({x:e,y:.1,z:t,life:.32,size:.4,size1:2.6,r:1.6,g:.7,b:.25,a:.8,shape:rp.ring});for(let n=0;n<14;n++){let n=Math.random()*Math.PI*2,r=Math.random()*1.2,i=1.6+Math.random()*1.6;this.glow.spawn({x:e,y:.4,z:t,vx:Math.cos(n)*Math.cos(r)*i,vy:Math.sin(r)*i+.8,vz:Math.sin(n)*Math.cos(r)*i,drag:4.5,life:.3+Math.random()*.2,size:.38+Math.random()*.18,size1:.08,r:2.6,g:.75+Math.random()*.5,b:.12,a:.9,a1:0,shape:rp.disc})}for(let n=0;n<10;n++){let n=Math.random()*Math.PI*2,r=.6+Math.random()*.9,i=.5+Math.random()*.15;this.soft.spawn({x:e+Math.cos(n)*.2,y:.4+Math.random()*.3,z:t+Math.sin(n)*.2,vx:Math.cos(n)*r,vy:1.1+Math.random()*.8,vz:Math.sin(n)*r,drag:2.4,life:.8+Math.random()*.5,size:.3,size1:.75,r:i,g:i*.95,b:i*.92,a:.55,shape:rp.puff,delay:.05+Math.random()*.1})}for(let n=0;n<10;n++){let n=Math.random()*Math.PI*2,r=3+Math.random()*2.5;this.glow.spawn({x:e,y:.4,z:t,vx:Math.cos(n)*r,vy:2.5+Math.random()*2.5,vz:Math.sin(n)*r,gravity:9,drag:.6,life:.45+Math.random()*.3,size:.06,size1:.03,r:6,g:3.5,b:1.2,a:1,a1:.4,shape:rp.disc})}this.scorch(e,t)}tink(e,t,n){this.glow.spawn({x:e,y:t,z:n,life:.14,size:.25,size1:.75,r:4,g:4.4,b:5,a:1,shape:rp.disc});for(let r=0;r<7;r++){let r=Math.random()*Math.PI*2,i=2+Math.random()*2;this.glow.spawn({x:e,y:t,z:n,vx:Math.cos(r)*i,vy:1.5+Math.random()*2,vz:Math.sin(r)*i,gravity:8,drag:1,life:.3+Math.random()*.15,size:.05,size1:.02,r:5,g:5,b:4,a:1,shape:rp.disc})}}impact(e,t,n,r=1){this.glow.spawn({x:e,y:t,z:n,life:.12,size:.2*r,size1:.6*r,r:3,g:2.8,b:2.3,a:.9,shape:rp.disc});for(let r=0;r<5;r++){let r=Math.random()*Math.PI*2;this.soft.spawn({x:e,y:t,z:n,vx:Math.cos(r)*1.4,vy:.6+Math.random(),vz:Math.sin(r)*1.4,drag:5,life:.35,size:.1,size1:.22,r:1,g:1,b:1,a:.7,shape:rp.puff})}}trail(e,t,n){this.soft.spawn({x:e,y:t,z:n,life:.22,size:.07,size1:.02,r:1,g:1,b:1,a:.7,shape:rp.puff})}confetti(e,t,n,r,i){for(let a=0;a<140;a++){let o=i[a%i.length];this.soft.spawn({x:e+(Math.random()-.5)*n,y:1.6+Math.random()*2.2,z:t+(Math.random()-.5)*r,vx:(Math.random()-.5)*1.2,vy:-.3-Math.random()*.6,vz:(Math.random()-.5)*1.2,gravity:1.4,drag:1.2,life:2.6+Math.random()*1.4,size:.17,size1:.17,r:o.r,g:o.g,b:o.b,a:1,a1:.9,shape:rp.confetti,rot:Math.random()*6.28,vrot:(Math.random()-.5)*8,vflip:6+Math.random()*8,delay:Math.random()*.6})}}update(e,t,n){this.soft.update(e),this.glow.update(e),this.words.update(t,n),this.flash*=Math.exp(-t*9),this.shake*=Math.exp(-t*7);for(let t of this.scorches){if(!t.active)continue;t.age+=e;let n=t.age<.1?t.age/.1:Math.max(0,1-(t.age-1.2)/2.5);t.mesh.material.opacity=.5*n,n<=0&&t.age>1&&(t.active=!1,t.mesh.visible=!1)}}forWarmup(e){for(let t of this.scorches)t.mesh.visible=e;for(let t of this.corks)t.mesh.visible=e;this.words.scene.children.forEach(t=>t.visible=e)}clear(){this.soft.clear(),this.glow.clear(),this.words.clear();for(let e of this.scorches)e.active=!1,e.mesh.visible=!1;for(let e of this.corks)e.active=!1,e.mesh.visible=!1;this.flash=0,this.shake=0}dispose(){this.soft.dispose(),this.glow.dispose(),this.words.dispose()}},mp={dots:0,dashes:1,band:2},hp=`
attribute float aLen;
varying vec2 vUv;
varying float vLen;
void main() {
  vUv = uv;
  vLen = aLen;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,gp=`
uniform vec3 uColor;
uniform float uOpacity;
uniform float uTime;
uniform float uPattern;
uniform float uTotal;
uniform float uStart;
varying vec2 vUv;
varying float vLen;
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float a;
  if (uPattern < 0.5) {
    // Dots that march forward.
    float s = fract(vLen * 3.2 - uTime * 1.6);
    vec2 q = vec2((s - 0.5) / 3.2 * 9.0, across);
    a = smoothstep(1.0, 0.7, length(q));
  } else if (uPattern < 1.5) {
    float s = fract(vLen * 4.0 - uTime * 3.0);
    a = smoothstep(0.0, 0.08, s) * smoothstep(0.62, 0.54, s) * smoothstep(1.0, 0.55, across);
  } else {
    a = smoothstep(1.0, 0.2, across) * (0.55 + 0.45 * smoothstep(0.0, 0.3, fract(vLen * 2.0 - uTime * 1.2)));
  }
  a *= smoothstep(uStart, uStart + 0.25, vLen) * smoothstep(uTotal, uTotal - 0.12, vLen);
  a *= uOpacity;
  if (a < 0.004) discard;
  gl_FragColor = vec4(uColor, a);
}`;function _p(e,t){let n=e.length,r=new Float32Array(n*2*3),i=new Float32Array(n*2*2),a=new Float32Array(n*2),o=new H(0,1,0),s=new H,c=new H,l=0;for(let u=0;u<n;u++){let d=e[u],f=e[Math.max(0,u-1)],p=e[Math.min(n-1,u+1)];s.subVectors(p,f),s.y=0,s.lengthSq()<1e-8&&s.set(0,0,1),s.normalize(),c.crossVectors(o,s).normalize().multiplyScalar(t/2),u>0&&(l+=d.distanceTo(e[u-1]));for(let e=0;e<2;e++){let t=u*2+e,n=e===0?-1:1;r[t*3]=d.x+c.x*n,r[t*3+1]=d.y,r[t*3+2]=d.z+c.z*n,i[t*2]=l,i[t*2+1]=e,a[t]=l}}let u=[];for(let e=0;e<n-1;e++){let t=e*2;u.push(t,t+1,t+2,t+1,t+3,t+2)}let d=new ii;return d.setAttribute(`position`,new Wr(r,3)),d.setAttribute(`uv`,new Wr(i,2)),d.setAttribute(`aLen`,new Wr(a,1)),d.setIndex(u),{geo:d,total:l}}function vp(e,t=.1){let n=[];for(let r=0;r<e.length-1;r++){let i=e[r],a=e[r+1],o=Math.max(1,Math.ceil(i.distanceTo(a)/t));for(let e=0;e<o;e++)n.push(i.clone().lerp(a,e/o))}return e.length&&n.push(e[e.length-1].clone()),n}var yp=class{toWorld;group=new rr;mats=[];geos=[];constructor(e){this.toWorld=e,this.group.renderOrder=3}clear(){for(let e of[...this.group.children])this.group.remove(e);for(let e of this.mats)e.dispose();for(let e of this.geos)e.dispose();this.mats=[],this.geos=[]}ribbon(e,t,n,r,i,a=.25){if(e.length<2)return;let{geo:o,total:s}=_p(vp(e),t),c=new Po({vertexShader:hp,fragmentShader:gp,uniforms:{uColor:{value:r.clone()},uOpacity:{value:i},uTime:{value:0},uPattern:{value:n},uTotal:{value:s},uStart:{value:a}},transparent:!0,depthWrite:!1,side:2}),l=new J(o,c);l.renderOrder=3,this.group.add(l),this.mats.push(c),this.geos.push(o)}chevron(e,t,n,r=.2){let i=new Ma;i.moveTo(0,r),i.lineTo(r*.9,-r*.35),i.lineTo(0,0),i.lineTo(-r*.9,-r*.35),i.closePath();let a=new xo(i).rotateX(-Math.PI/2),o=new gi({color:n,transparent:!0,opacity:.95,depthWrite:!1}),s=new J(a,o);s.position.copy(e),s.rotation.y=Math.atan2(t.x,t.z)+Math.PI,s.renderOrder=3,this.group.add(s),this.geos.push(a),this.mats.push(o)}stopBar(e,t,n){let r=new H(t.z,0,-t.x).multiplyScalar(.2);this.ribbon([e.clone().sub(r),e.clone().add(r)],.07,mp.band,n,1,-1)}show(e,t){this.clear();let n=.03,r=[];for(let i of e){let e=i.intent,a=i.color,o=this.toWorld(i.from[0],i.from[1],n),s=e=>e.map(([e,t])=>this.toWorld(e,t,n));if(e.shape===`path`){let t=[o,...s(e.cells)],n=t[t.length-1],i=t[t.length-2]??o,c=n.clone().sub(i).normalize();(e.end===`piece`||e.end===`wall`||e.end===`edge`)&&(n=n.clone().add(c.clone().multiplyScalar(.42)),t.push(n)),this.ribbon(t,.2,mp.dots,a,.95),e.end===`wall`||e.end===`edge`?this.stopBar(n,c,a):t.length>1&&this.chevron(n.clone().sub(c.clone().multiplyScalar(.2)),c,a,.15),e.blast&&r.push(...e.blast)}else if(e.shape===`line`){let t=[o,...s(e.cells)];this.ribbon(t,.12,mp.dashes,a,1)}else if(e.shape===`hops`){let t=o;for(let[i,o]of e.cells){let e=this.toWorld(i,o,n),s=new H(Math.abs(e.z-t.z)>Math.abs(e.x-t.x)?.45:0,.95,0),c=[];for(let n=0;n<=20;n++){let r=n/20,i=t.clone().lerp(e,r).addScaledVector(s,Math.sin(r*Math.PI));c.push(i)}this.ribbon(c,.11,mp.dashes,a,1,.35),this.ribbon([t.clone(),e.clone()],.06,mp.band,a,.25,.35),r.push([i,o]),t=e}}else e.shape===`sweep`&&e.lines&&e.lines.forEach((e,t)=>{e.length!==0&&this.ribbon([o,...s(e)],.12,mp.dashes,a,1-t*.2)});if(e.target!==null&&e.end===`piece`){let n=t(e.target);n&&r.push(n)}}return r}update(e){for(let t of this.mats)t instanceof Po&&(t.uniforms.uTime.value=e)}dispose(){this.clear()}},bp=`
precision highp float;
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,xp=`
uniform float uNear, uFar, uFocus, uNearRange, uFarRange, uNearScale, uFarScale;
float viewDist(float d) {
  float z = d * 2.0 - 1.0;
  return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear));
}
float cocOf(float depth) {
  float x = viewDist(depth) - uFocus;
  return x > 0.0 ? clamp((x - uFarRange) * uFarScale, 0.0, 1.0) : clamp((-x - uNearRange) * uNearScale, 0.0, 1.0);
}`,Sp=`
precision highp float;
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform vec2 uTexel;
${xp}
in vec2 vUv;
out vec4 outColor;
void main() {
  vec3 acc = vec3(0.0); float wsum = 0.0; float csum = 0.0;
  for (int i = 0; i < 4; i++) {
    vec2 o = vec2(float(i & 1) - 0.5, float(i >> 1) - 0.5) * uTexel;
    vec3 c = texture(tColor, vUv + o).rgb;
    float coc = cocOf(texture(tDepth, vUv + o).r);
    float w = coc * coc + 0.0005;
    acc += c * w; wsum += w; csum += coc;
  }
  outColor = vec4(acc / wsum, csum * 0.25);
}`,Cp=`
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uPow;
in vec2 vUv;
out vec4 outColor;
void tap(vec2 o, float k, inout vec3 acc, inout float ws, inout float cs, inout float ks) {
  vec4 s = texture(tSrc, vUv + o * uTexel);
  // Sharper weights at the wide levels: only truly far pixels feed the background blur.
  float w = k * (pow(s.a, uPow) + 0.0005);
  acc += s.rgb * w; ws += w; cs += s.a * k; ks += k;
}
void main() {
  vec3 acc = vec3(0.0); float ws = 0.0; float cs = 0.0; float ks = 0.0;
  tap(vec2(0.0), 0.125, acc, ws, cs, ks);
  tap(vec2(-1.0, -1.0), 0.125, acc, ws, cs, ks); tap(vec2(1.0, -1.0), 0.125, acc, ws, cs, ks);
  tap(vec2(-1.0, 1.0), 0.125, acc, ws, cs, ks);  tap(vec2(1.0, 1.0), 0.125, acc, ws, cs, ks);
  tap(vec2(-2.0, -2.0), 0.03125, acc, ws, cs, ks); tap(vec2(0.0, -2.0), 0.0625, acc, ws, cs, ks); tap(vec2(2.0, -2.0), 0.03125, acc, ws, cs, ks);
  tap(vec2(-2.0, 0.0), 0.0625, acc, ws, cs, ks); tap(vec2(2.0, 0.0), 0.0625, acc, ws, cs, ks);
  tap(vec2(-2.0, 2.0), 0.03125, acc, ws, cs, ks); tap(vec2(0.0, 2.0), 0.0625, acc, ws, cs, ks); tap(vec2(2.0, 2.0), 0.03125, acc, ws, cs, ks);
  outColor = vec4(acc / ws, cs / ks);
}`,wp=`
precision highp float;
uniform sampler2D tColor;
uniform vec2 uTexel;
uniform float uThreshold;
in vec2 vUv;
out vec4 outColor;
void main() {
  vec3 acc = vec3(0.0);
  for (int i = 0; i < 4; i++) {
    vec2 o = vec2(float(i & 1) - 0.5, float(i >> 1) - 0.5) * uTexel;
    vec3 c = texture(tColor, vUv + o).rgb;
    float l = max(c.r, max(c.g, c.b));
    float knee = 0.5;
    float soft = clamp(l - uThreshold + knee, 0.0, 2.0 * knee);
    soft = soft * soft / (4.0 * knee + 1e-4);
    float contrib = max(soft, l - uThreshold) / max(l, 1e-4);
    acc += c * contrib;
  }
  outColor = vec4(min(acc * 0.25, vec3(32.0)), 1.0);
}`,Tp=`
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uTexel;
in vec2 vUv;
out vec4 outColor;
void main() {
  vec3 a = texture(tSrc, vUv + vec2(-1.0, -1.0) * uTexel).rgb;
  vec3 b = texture(tSrc, vUv + vec2(1.0, -1.0) * uTexel).rgb;
  vec3 c = texture(tSrc, vUv + vec2(-1.0, 1.0) * uTexel).rgb;
  vec3 d = texture(tSrc, vUv + vec2(1.0, 1.0) * uTexel).rgb;
  vec3 e = texture(tSrc, vUv).rgb;
  vec3 f = texture(tSrc, vUv + vec2(-2.0, 0.0) * uTexel).rgb;
  vec3 g = texture(tSrc, vUv + vec2(2.0, 0.0) * uTexel).rgb;
  vec3 h = texture(tSrc, vUv + vec2(0.0, -2.0) * uTexel).rgb;
  vec3 i = texture(tSrc, vUv + vec2(0.0, 2.0) * uTexel).rgb;
  outColor = vec4((a + b + c + d) * 0.125 + e * 0.25 + (f + g + h + i) * 0.0625, 1.0);
}`,Ep=`
precision highp float;
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform sampler2D tDof1;
uniform sampler2D tDof2;
uniform sampler2D tDof3;
uniform sampler2D tDof4;
uniform sampler2D tBloom1;
uniform sampler2D tBloom2;
uniform sampler2D tBloom3;
uniform vec2 uTexel2;
uniform vec2 uTexel3;
uniform vec2 uTexel4;
uniform vec2 uTexelB2;
uniform vec2 uTexelB3;
uniform float uDof;
uniform float uBloom;
uniform float uExposure;
uniform float uFlash;
uniform float uSaturation;
uniform float uContrast;
uniform vec3 uTint;
uniform vec3 uLift;
uniform float uVignette;
uniform float uAspect;
uniform vec2 uVigCenter;
${xp}
in vec2 vUv;
out vec4 outColor;

vec4 tent(sampler2D t, vec2 uv, vec2 texel) {
  vec4 s = texture(t, uv) * 4.0;
  s += texture(t, uv + vec2(texel.x, 0.0)) * 2.0;
  s += texture(t, uv - vec2(texel.x, 0.0)) * 2.0;
  s += texture(t, uv + vec2(0.0, texel.y)) * 2.0;
  s += texture(t, uv - vec2(0.0, texel.y)) * 2.0;
  s += texture(t, uv + texel);
  s += texture(t, uv - texel);
  s += texture(t, uv + vec2(texel.x, -texel.y));
  s += texture(t, uv + vec2(-texel.x, texel.y));
  return s / 16.0;
}

vec3 neutralTonemap(vec3 color) {
  const float startCompression = 0.8 - 0.04;
  const float desaturation = 0.15;
  float x = min(color.r, min(color.g, color.b));
  float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
  color -= offset;
  float peak = max(color.r, max(color.g, color.b));
  if (peak < startCompression) return color;
  float d = 1.0 - startCompression;
  float newPeak = 1.0 - d * d / (peak + d - startCompression);
  color *= newPeak / peak;
  float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0);
  return mix(color, vec3(newPeak), g);
}

vec3 toSRGB(vec3 c) {
  c = max(c, vec3(0.0));
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
}

float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }

void main() {
  vec3 col = texture(tColor, vUv).rgb;
  if (uDof > 0.5) {
    float coc = cocOf(texture(tDepth, vUv).r);
    if (coc > 0.001) {
      float lod = coc * 4.0;
      vec3 blurred;
      if (lod < 1.0) blurred = mix(col, texture(tDof1, vUv).rgb, lod);
      else if (lod < 2.0) blurred = mix(texture(tDof1, vUv).rgb, tent(tDof2, vUv, uTexel2).rgb, lod - 1.0);
      else if (lod < 3.0) blurred = mix(tent(tDof2, vUv, uTexel2).rgb, tent(tDof3, vUv, uTexel3).rgb, lod - 2.0);
      else blurred = mix(tent(tDof3, vUv, uTexel3).rgb, tent(tDof4, vUv, uTexel4).rgb, lod - 3.0);
      col = blurred;
    }
  }
  if (uBloom > 0.0) {
    vec3 bl = texture(tBloom1, vUv).rgb * 0.45 + tent(tBloom2, vUv, uTexelB2).rgb * 0.35 + tent(tBloom3, vUv, uTexelB3).rgb * 0.35;
    col += bl * uBloom;
  }
  col *= uTint * uExposure * (1.0 + uFlash);
  col = neutralTonemap(col);
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(l), col, uSaturation);
  vec3 c = toSRGB(col);
  c = mix(c, c * c * (3.0 - 2.0 * c), uContrast);
  c = c + uLift * (1.0 - c);
  vec2 v = (vUv - uVigCenter) * vec2(uAspect, 1.0);
  float vig = smoothstep(0.95, 0.25, length(v) * 1.15);
  c *= mix(1.0 - uVignette, 1.0, vig);
  c += (ign(gl_FragCoord.xy) - 0.5) / 255.0;
  outColor = vec4(c, 1.0);
}`,Dp=`
precision highp float;
uniform sampler2D tColor;
uniform float uExposure;
in vec2 vUv;
out vec4 outColor;
vec3 neutralTonemap(vec3 color) {
  const float startCompression = 0.8 - 0.04;
  const float desaturation = 0.15;
  float x = min(color.r, min(color.g, color.b));
  float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
  color -= offset;
  float peak = max(color.r, max(color.g, color.b));
  if (peak < startCompression) return color;
  float d = 1.0 - startCompression;
  float newPeak = 1.0 - d * d / (peak + d - startCompression);
  color *= newPeak / peak;
  float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0);
  return mix(color, vec3(newPeak), g);
}
vec3 toSRGB(vec3 c) {
  c = max(c, vec3(0.0));
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
}
void main() {
  vec4 s = texture(tColor, vUv);
  float a = clamp(s.a, 0.0, 1.0);
  vec3 c = a > 0.0 ? s.rgb / a : vec3(0.0);
  c = toSRGB(neutralTonemap(c * uExposure));
  outColor = vec4(c, a);
}`;function Op(e,t){return new Fo({glslVersion:xt,vertexShader:bp,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1})}function kp(e,t,n={}){return new Dn(Math.max(1,e),Math.max(1,t),{type:fe,minFilter:N,magFilter:N,depthBuffer:!1,generateMipmaps:!1,...n})}var Ap=class{opts;sceneRT;dof=[];bloom=[];quadScene=new dr;quadCam=new hs;quad;cocDown;downW;bright;down;composite;finish;w=1;h=1;vignetteCenter=new V(.5,.5);constructor(e){this.opts={...e},this.sceneRT=this.makeSceneRT(1,1);let t=new ii;t.setAttribute(`position`,new q([-1,-1,0,3,-1,0,-1,3,0],3)),this.quad=new J(t),this.quad.frustumCulled=!1,this.quadScene.add(this.quad);let n=()=>({uNear:{value:.1},uFar:{value:100},uFocus:{value:10},uNearRange:{value:1},uFarRange:{value:1},uNearScale:{value:.2},uFarScale:{value:.2}});this.cocDown=Op(Sp,{tColor:{value:null},tDepth:{value:null},uTexel:{value:new V},...n()}),this.downW=Op(Cp,{tSrc:{value:null},uTexel:{value:new V},uPow:{value:1}}),this.bright=Op(wp,{tColor:{value:null},uTexel:{value:new V},uThreshold:{value:1.6}}),this.down=Op(Tp,{tSrc:{value:null},uTexel:{value:new V}}),this.composite=Op(Ep,{tColor:{value:null},tDepth:{value:null},tDof1:{value:null},tDof2:{value:null},tDof3:{value:null},tDof4:{value:null},tBloom1:{value:null},tBloom2:{value:null},tBloom3:{value:null},uTexel2:{value:new V},uTexel3:{value:new V},uTexel4:{value:new V},uTexelB2:{value:new V},uTexelB3:{value:new V},uDof:{value:1},uBloom:{value:.6},uExposure:{value:1},uFlash:{value:0},uSaturation:{value:1},uContrast:{value:0},uTint:{value:new H(1,1,1)},uLift:{value:new H},uVignette:{value:.3},uAspect:{value:1},uVigCenter:{value:this.vignetteCenter},...n()}),this.finish=Op(Dp,{tColor:{value:null},uExposure:{value:1}})}makeSceneRT(e,t){let n=new Ji(e,t);return new Dn(e,t,{type:fe,samples:this.opts.msaa,depthBuffer:!0,depthTexture:n,minFilter:N,magFilter:N,generateMipmaps:!1})}setOptions(e){let t=e.msaa!==this.opts.msaa;this.opts={...e},t&&(this.sceneRT.dispose(),this.sceneRT.depthTexture?.dispose(),this.sceneRT=this.makeSceneRT(this.w,this.h)),this.setSize(this.w,this.h,!0)}setSize(e,t,n=!1){if(n||e!==this.w||t!==this.h){this.w=e,this.h=t,this.sceneRT.setSize(e,t);for(let e of[...this.dof,...this.bloom])e.dispose();if(this.dof=[],this.bloom=[],this.opts.dof)for(let n of[2,4,8,16])this.dof.push(kp(Math.ceil(e/n),Math.ceil(t/n)));if(this.opts.bloom)for(let n of[2,4,8,16])this.bloom.push(kp(Math.ceil(e/n),Math.ceil(t/n)))}}setFocus(e){for(let t of[this.cocDown,this.composite]){let n=t.uniforms;n.uNear.value=e.near,n.uFar.value=e.far,n.uFocus.value=e.focus,n.uNearRange.value=e.nearRange,n.uFarRange.value=e.farRange,n.uNearScale.value=e.nearScale,n.uFarScale.value=e.farScale}}setFlash(e){this.composite.uniforms.uFlash.value=e}overlay(e,t,n){let r=e.autoClear;e.autoClear=!1,e.setRenderTarget(null),e.render(t,n),e.autoClear=r}setGrade(e){let t=this.composite.uniforms,n=e.grade;t.uExposure.value=n.exposure,t.uSaturation.value=n.saturation,t.uContrast.value=n.contrast,t.uTint.value.set(...n.tint),t.uLift.value.set(...n.lift),t.uVignette.value=n.vignette,this.finish.uniforms.uExposure.value=n.exposure}pass(e,t,n){this.quad.material=t,e.setRenderTarget(n),e.render(this.quadScene,this.quadCam)}render(e,t,n){e.setRenderTarget(this.sceneRT),e.clear(),e.render(t,n);let r=this.sceneRT.texture,i=this.sceneRT.depthTexture,a=this.composite.uniforms;if(this.opts.dof&&this.dof.length===4&&i){let[t,n,o,s]=this.dof;this.cocDown.uniforms.tColor.value=r,this.cocDown.uniforms.tDepth.value=i,this.cocDown.uniforms.uTexel.value.set(1/this.w,1/this.h),this.pass(e,this.cocDown,t),this.downW.uniforms.tSrc.value=t.texture,this.downW.uniforms.uTexel.value.set(1/t.width,1/t.height),this.downW.uniforms.uPow.value=2,this.pass(e,this.downW,n),this.downW.uniforms.tSrc.value=n.texture,this.downW.uniforms.uTexel.value.set(1/n.width,1/n.height),this.downW.uniforms.uPow.value=4,this.pass(e,this.downW,o),this.downW.uniforms.tSrc.value=o.texture,this.downW.uniforms.uTexel.value.set(1/o.width,1/o.height),this.downW.uniforms.uPow.value=6,this.pass(e,this.downW,s),a.tDof1.value=t.texture,a.tDof2.value=n.texture,a.tDof3.value=o.texture,a.tDof4.value=s.texture,a.uTexel2.value.set(1/n.width,1/n.height),a.uTexel3.value.set(1/o.width,1/o.height),a.uTexel4.value.set(1/s.width,1/s.height),a.uDof.value=1}else a.uDof.value=0;if(this.opts.bloom&&this.bloom.length===4){let[t,n,i,o]=this.bloom;this.bright.uniforms.tColor.value=r,this.bright.uniforms.uTexel.value.set(1/this.w,1/this.h),this.pass(e,this.bright,t);for(let[r,a]of[[t,n],[n,i],[i,o]])this.down.uniforms.tSrc.value=r.texture,this.down.uniforms.uTexel.value.set(1/r.width,1/r.height),this.pass(e,this.down,a);a.tBloom1.value=n.texture,a.tBloom2.value=i.texture,a.tBloom3.value=o.texture,a.uTexelB2.value.set(1/i.width,1/i.height),a.uTexelB3.value.set(1/o.width,1/o.height),a.uBloom.value=.55}else a.uBloom.value=0;a.tColor.value=r,a.tDepth.value=i,a.uAspect.value=this.w/this.h,this.pass(e,this.composite,null)}finishTo(e,t,n){this.finish.uniforms.tColor.value=t,this.pass(e,this.finish,n)}dispose(){this.sceneRT.depthTexture?.dispose(),this.sceneRT.dispose();for(let e of[...this.dof,...this.bloom])e.dispose();for(let e of[this.cocDown,this.downW,this.bright,this.down,this.composite,this.finish])e.dispose();this.quad.geometry.dispose()}},jp={playmat:{id:`playmat`,tileA:`#8fd3b9`,tileB:`#80c8ad`,zone:`#fff2a0`,wall:`#e9c48f`,wallCaps:[`#e8584a`,`#4a8fe0`,`#f2b632`,`#4fb37c`],tileStyle:`foam`,tableStyle:`planks`,wallGrain:`#c99a62`,table:`#f0bfa0`,tableSpots:[`#f6d2b4`,`#e9a98a`,`#f4c9a8`,`#edb3a0`],room:`#f3c9ad`,props:[`#f07f62`,`#7cc4e8`,`#ffd36a`,`#a4dcc0`],key:{color:`#fff0da`,intensity:4.6,azimuth:-112,elevation:54,softness:3},fill:{sky:`#d9e7ff`,ground:`#f2b99a`,intensity:.55},rim:{color:`#ffd2a0`,intensity:1.5},env:{top:`#fff4e6`,horizon:`#f6cfb2`,bottom:`#d98f74`,softbox:`#ffffff`,intensity:.5},grade:{exposure:.86,saturation:1.08,contrast:.16,tint:[1.02,1,.97],lift:[.02,.01,.025],vignette:.3},fairyLights:!1},workshop:{id:`workshop`,tileA:`#ecd6b0`,tileB:`#e3caa0`,zone:`#6fc3ff`,wall:`#cfa977`,wallCaps:[`#f2a3a0`,`#9ccbe8`,`#f5d27a`,`#a8dcc0`],tileStyle:`wood`,tableStyle:`planks`,wallGrain:`#b08a5c`,table:`#a9bcc6`,tableSpots:[`#bccbd2`,`#93aab6`,`#c7b9a8`,`#b2c3c9`],room:`#b0c2ca`,props:[`#f2a3a0`,`#f5d27a`,`#9ed0b8`,`#c4a6dc`],key:{color:`#fff6e8`,intensity:4.4,azimuth:-112,elevation:54,softness:3},fill:{sky:`#dfeaf2`,ground:`#c9b393`,intensity:.6},rim:{color:`#fff0d8`,intensity:1.2},env:{top:`#f8f6f0`,horizon:`#c9d6dc`,bottom:`#8a9aa2`,softbox:`#ffffff`,intensity:.5},grade:{exposure:1,saturation:1,contrast:.1,tint:[1,1,1],lift:[.02,.025,.035],vignette:.26},fairyLights:!1},sandbox:{id:`sandbox`,tileA:`#e8cf94`,tileB:`#dfc485`,zone:`#7fe6ff`,wall:`#e0b27e`,wallCaps:[`#3fa7c9`,`#ef6f5e`,`#f4d35e`],tileStyle:`sand`,tableStyle:`sand`,wallGrain:`#b07d4a`,table:`#b59a88`,tableSpots:[`#bea492`,`#a8907e`,`#c2ab98`,`#ad9482`],room:`#a99382`,props:[`#8fb0bb`,`#d8c79a`,`#c99a90`,`#a8bfa2`],key:{color:`#fff3d6`,intensity:5.6,azimuth:-118,elevation:60,softness:1.4},fill:{sky:`#cfe4ff`,ground:`#d08a62`,intensity:.45},rim:{color:`#ffd9a8`,intensity:1.3},env:{top:`#e9f2ff`,horizon:`#f0c69a`,bottom:`#b0603f`,softbox:`#ffffff`,intensity:.5},grade:{exposure:.9,saturation:1,contrast:.16,tint:[1.03,1,.95],lift:[.03,.01,0],vignette:.3},fairyLights:!1},attic:{id:`attic`,tileA:`#4a5f9c`,tileB:`#42568f`,zone:`#cfe2ff`,wall:`#9a7656`,wallCaps:[`#c9a227`,`#7a5aa8`,`#b8483e`],tileStyle:`paint`,tableStyle:`planks`,wallGrain:`#6c4f3c`,table:`#3a2c3a`,tableSpots:[`#46344a`,`#2e2232`,`#4f3a3e`,`#3a2e44`],room:`#2a2236`,props:[`#6a4f6e`,`#4f5d86`,`#7d5a4a`,`#5a4466`],key:{color:`#c9d6ff`,intensity:3.6,azimuth:-108,elevation:50,softness:3.4},fill:{sky:`#4d5d9a`,ground:`#4a3040`,intensity:.5},rim:{color:`#ffc98a`,intensity:2},env:{top:`#5d6aa8`,horizon:`#3b3456`,bottom:`#20182a`,softbox:`#d8e2ff`,intensity:.5},grade:{exposure:1.08,saturation:1,contrast:.12,tint:[.98,.99,1.04],lift:[.02,.015,.05],vignette:.36},fairyLights:!0}};function Mp(e){return jp[e??`playmat`]}var Np={high:{dpr:2,msaa:4,shadow:2048,dof:!0,bloom:!0},medium:{dpr:1.5,msaa:4,shadow:1024,dof:!0,bloom:!0},low:{dpr:1,msaa:4,shadow:0,dof:!0,bloom:!1}},Pp={valid:{color:`#fff3a6`,k:1.15,intensity:1,fill:.34},hover:{color:`#fff4b8`,k:1.25,intensity:1,fill:.42},invalid:{color:`#ff5a4a`,k:1,intensity:1,fill:.22},hint:{color:`#ffd24a`,k:1.2,intensity:1,fill:.18},dim:{color:`#2b2140`,k:1,intensity:1,fill:.34}},Fp={P:`#7fd6ff`,E:`#ff7a4a`,N:`#ffffff`},Ip=[`#ff5a4a`,`#ffd23f`,`#4fb3ff`,`#5fd68a`,`#ff7eb6`,`#ffffff`].map(e=>new K(e)),Lp=.8,Rp=class{ext;gl;pending=[];active=null;ms=null;constructor(e){this.gl=e,this.ext=e.getExtension(`EXT_disjoint_timer_query_webgl2`)}begin(){if(!this.ext||this.active||this.pending.length>3)return;let e=this.gl.createQuery();e&&(this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,e),this.active=e)}end(){this.ext&&this.active&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.pending.push(this.active),this.active=null)}poll(){if(!this.ext)return;let e=this.gl;for(;this.pending.length;){let t=this.pending[0];if(!e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE))break;let n=e.getParameter(this.ext.GPU_DISJOINT_EXT),r=e.getQueryParameter(t,e.QUERY_RESULT);n||(this.ms=this.ms===null?r/1e6:this.ms*.9+r/1e6*.1),e.deleteQuery(t),this.pending.shift()}}},zp=class{canvas;renderer;scene=new dr;cameraRig=new Kd(30);stats;onCue;quality;level;post;theme;envMap=null;keyLight=new Ss;rimLight=new Ss;hemi=new ss;backdrop;board=null;levelDef=null;pieces=new Map;viewList=[];pieceGroup=new rr;intents;intentRings=null;ghost=null;selected=null;mode=`plan`;insets;anims=[];simAnims=[];flyers=[];raf=0;running=!1;last=0;time=0;slowFor=0;fastFor=0;steppedUp=!1;gpu;drag=null;iconCache=new Map;resizeObs=null;firstFrameResolve=null;fx=new pp;timeline=null;phaseSpeed=1;phaseToken=0;hitStopLeft=0;slowLeft=0;slowScale=1;modeTime=0;pushT=99;ctx;tmpV=new H;ray=new Vs;plane=new ci(new H(0,1,0),0);ndcV=new V;firstFrame;constructor(e){this.canvas=e.canvas,this.onCue=e.onCue??(()=>{}),this.quality=e.quality??`auto`,this.level=this.quality===`auto`?Bp():this.quality,this.insets={top:110,bottom:170,left:14,right:14,...e.insets},this.firstFrame=new Promise(e=>this.firstFrameResolve=e),this.renderer=new td({canvas:this.canvas,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!1}),this.renderer.autoClear=!0,this.renderer.shadowMap.type=1,this.renderer.info.autoReset=!1,this.gpu=new Rp(this.renderer.getContext());let t=Np[this.level];this.post=new Ap({msaa:t.msaa,dof:t.dof,bloom:t.bloom}),this.stats={quality:this.level,frameMs:16.7,cpuMs:0,gpuMs:null,calls:0,triangles:0,pixelRatio:1,particles:0},this.theme=Mp(e.theme),this.scene.add(this.hemi,this.keyLight,this.keyLight.target,this.rimLight,this.pieceGroup,this.fx.group),this.keyLight.castShadow=!0,this.backdrop=new Id(this.theme),this.scene.add(this.backdrop.group),this.intents=new yp((e,t,n)=>this.cellWorld(e,t,n)),this.scene.add(this.intents.group),this.applyTheme(this.theme),this.applyQuality(),this.resize(),typeof ResizeObserver<`u`&&(this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(this.canvas)),this.ctx={views:this.pieces,cellX:e=>e-((this.levelDef?.w??5)-1)/2,cellZ:e=>e-((this.levelDef?.h??7)-1)/2,fx:this.fx,cue:e=>this.onCue(e),hitStop:e=>{this.hitStopLeft=Math.max(this.hitStopLeft,e)},slowMo:(e,t)=>{this.slowScale=e,this.slowLeft=Math.max(this.slowLeft,t)},focus:(e,t)=>{this.mode===`run`&&this.cameraRig.followGoal.set(e*.07,0,t*.05)},spawnFlyer:e=>{let t=Wf(e.kind,e.team,e.crown);return t.root.position.copy(e.rig.root.position),t.root.rotation.copy(e.rig.root.rotation),t.idle=!1,this.pieceGroup.add(t.root),this.flyers.push(t),e.alive=!1,e.rig.root.visible=!1,t},removeFlyer:e=>{this.pieceGroup.remove(e.root);let t=this.flyers.indexOf(e);t>=0&&this.flyers.splice(t,1)},simAnim:e=>{this.simAnims.push(e)}},typeof document<`u`&&document.fonts&&document.fonts.load(`400 100px "Lilita One"`).then(()=>this.fx.words.refreshFonts()).catch(()=>{}),this.warmup()}start(){if(this.running)return;this.running=!0,this.last=performance.now();let e=t=>{this.running&&(this.raf=requestAnimationFrame(e),this.frozen||this.frame(t))};this.raf=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}frozen=!1;step(e){let t=Math.max(1,Math.round(e*60));for(let e=0;e<t;e++)this.frame(this.last+1e3/60)}resize(){let e=Math.max(1,this.canvas.clientWidth||window.innerWidth),t=Math.max(1,this.canvas.clientHeight||window.innerHeight),n=Math.min(window.devicePixelRatio||1,Np[this.level].dpr);this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.post.setSize(Math.round(e*n),Math.round(t*n)),this.fx.words.setSize(e,t),this.stats.pixelRatio=n,this.cameraRig.setViewport(e,t),this.refit(!0)}setQuality(e){this.quality=e,this.level=e===`auto`?Bp():e,this.fastFor=0,this.steppedUp=!1,this.applyQuality(),this.resize()}setInsets(e){this.insets={...this.insets,...e},this.cameraRig.blendRate=7.5,this.refit(!1)}dispose(){this.stop(),this.resizeObs?.disconnect(),this.timeline?.flush(),this.clearPieces(),this.board?.dispose(),this.backdrop.dispose(),this.intents.dispose(),this.intentRings?.dispose(),this.fx.dispose(),this.post.dispose(),this.envMap?.dispose(),this.renderer.dispose()}applyQuality(){let e=Np[this.level];if(this.stats.quality=this.level,this.post.setOptions({msaa:e.msaa,dof:e.dof,bloom:e.bloom}),this.renderer.shadowMap.enabled=e.shadow>0,e.shadow>0){let t=this.keyLight.shadow;t.mapSize.x!==e.shadow&&(t.mapSize.set(e.shadow,e.shadow),t.map?.dispose(),t.map=null)}this.scene.traverse(e=>{if(e instanceof J){let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.needsUpdate=!0}})}warmup(){this.fx.forWarmup(!0);let e=this.cameraRig.camera;this.renderer.compile(this.scene,e),this.renderer.compile(this.fx.words.scene,this.fx.words.camera),this.scene.traverse(e=>{if(e instanceof J){let t=e.material;t.map&&this.renderer.initTexture(t.map),t.alphaMap&&this.renderer.initTexture(t.alphaMap)}}),this.fx.words.scene.traverse(e=>{if(e instanceof J){let t=e.material;t.map&&this.renderer.initTexture(t.map)}}),this.fx.forWarmup(!1)}setTheme(e){e!==this.theme.id&&(this.theme=Mp(e),this.scene.remove(this.backdrop.group),this.backdrop.dispose(),this.backdrop=new Id(this.theme),this.scene.add(this.backdrop.group),this.backdrop.placeProps(this.cameraRig.goalCamera(),!0),this.applyTheme(this.theme),this.levelDef&&this.rebuildBoard(this.levelDef,!1))}get themeId(){return this.theme.id}applyTheme(e){this.envMap?.dispose(),this.envMap=tp(this.renderer,e),this.scene.environment=this.envMap,this.scene.environmentIntensity=e.env.intensity,this.scene.background=new K(e.room);let t=np(e);this.keyLight.color.set(e.key.color),this.keyLight.intensity=e.key.intensity,this.keyLight.position.copy(t).multiplyScalar(14),this.keyLight.target.position.set(0,0,0);let n=this.keyLight.shadow;n.radius=e.key.softness,n.bias=-4e-4,n.normalBias=.025,n.camera.near=2,n.camera.far=30,this.rimLight.color.set(e.rim.color),this.rimLight.intensity=e.rim.intensity,this.rimLight.position.set(1.5,4,-10),this.hemi.color.set(e.fill.sky),this.hemi.groundColor.set(e.fill.ground),this.hemi.intensity=e.fill.intensity,this.post.setGrade(e),this.backdrop.setLevel(this.levelDef,t),this.fitShadowCamera()}fitShadowCamera(){let e=this.levelDef?.w??5,t=this.levelDef?.h??7,n=Math.hypot(e,t)/2+1,r=this.keyLight.shadow.camera;r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.updateProjectionMatrix()}async setLevel(e,t={}){let n=t.animate??!0;this.timeline?.flush(),this.timeline=null,this.fx.clear(),this.endDragNow(),e.theme&&e.theme!==this.theme.id&&this.setTheme(e.theme),this.clearPieces(),this.rebuildBoard(e,n);let r=n?.55:0;e.pieces.forEach((e,t)=>{let i=this.addPiece({id:100+t,kind:e.kind,team:e.team,x:e.x,y:e.y,dir:e.dir,alive:!0,crown:!!e.crown});n&&this.dropIn(i,r+e.y*.045+Math.random()*.06,1.4,!1)}),this.refit(!0),this.onCue({type:`build`}),this.warmup(),n&&await this.wait(r+e.h*.045+.5)}async clearLevel(){if(this.timeline?.flush(),this.timeline=null,this.endDragNow(),this.showGhost(null),this.intents.clear(),this.intentRings?.set([]),this.board){let e=this.board.startClear();for(let e of this.viewList)this.shrinkAway(e.rig,Math.random()*.08);this.pieces.clear(),this.viewList=[],await this.wait(e+.1)}this.fx.clear(),this.clearPieces(),this.board&&(this.scene.remove(this.board.group),this.board.dispose()),this.board=null,this.levelDef=null,this.backdrop.setLevel(null,np(this.theme))}rebuildBoard(e,t){this.board&&(this.scene.remove(this.board.group),this.board.dispose()),this.levelDef=e,this.board=new Fd(e,this.theme),this.scene.add(this.board.group),this.intentRings?.dispose(),this.intentRings=new Pd(32,(e,t)=>this.cellWorld(e,t)),this.board.group.add(this.intentRings.mesh),t&&this.board.startBuild(),this.backdrop.setLevel(e,np(this.theme)),this.fitShadowCamera()}cellWorld(e,t,n=0){let r=this.levelDef?.w??5,i=this.levelDef?.h??7;return new H(e-(r-1)/2,n,t-(i-1)/2)}addPiece(e){let t=Wf(e.kind,e.team,e.crown),n={...e,rig:t,ctl:0};return this.pieces.set(e.id,n),this.viewList.push(n),this.pieceGroup.add(t.root),this.snapView(n),n}snapView(e){e.rig.root.position.set(this.ctx.cellX(e.x),0,this.ctx.cellZ(e.y)),e.rig.root.rotation.set(0,df[e.dir]??0,0),e.rig.root.scale.setScalar(1),e.rig.root.visible=e.alive}removePiece(e){let t=this.pieces.get(e);if(!t)return;this.pieceGroup.remove(t.rig.root),this.pieces.delete(e);let n=this.viewList.indexOf(t);n>=0&&this.viewList.splice(n,1),this.selected===e&&this.setSelected(null)}clearFlyers(){for(let e of this.flyers)this.pieceGroup.remove(e.root);this.flyers.length=0,this.simAnims.length=0}clearPieces(){this.clearFlyers();for(let e of[...this.pieces.keys()])this.removePiece(e);for(let e of[...this.pieceGroup.children])this.pieceGroup.remove(e)}dropIn(e,t,n,r){let i=-t;e.ctl++,e.rig.root.visible=!1;let a=!1;this.anims.push(t=>{if(i+=t,i<0)return!1;e.rig.root.visible=e.alive;let o=.22;if(i<o){let t=i/o;return qf(e.rig,n*(1-t*t)),e.rig.pose.squash=1.12,!1}if(!a){a=!0,qf(e.rig,0);let t=e.rig.root.position;this.fx.dust(t.x,t.z,.7),r&&this.onCue({type:`place`,kind:e.kind,team:e.team,id:e.id,at:[e.x,e.y]})}let s=i-o;return e.rig.pose.squash=1-.24*Math.exp(-s*9)*Math.cos(s*26),s>.45&&(e.rig.pose.squash=1,e.ctl--,!0)})}shrinkAway(e,t=0){let n=-t;this.anims.push(t=>{if(n+=t,n<0)return!1;let r=Math.min(1,n/.16);return e.root.scale.setScalar(Math.max(.001,1-rd(r))*(1+.15*od(r*2))),e.update(t,this.time),r>=1&&(this.pieceGroup.remove(e.root),!0)})}rig(e){return this.pieces.get(e)?.rig??null}placeToy(e,t,n,r,i,a={}){this.drag?.slot===e&&this.endDragNow();let o=this.pieces.get(e);o&&o.kind!==t&&(this.removePiece(e),o=void 0),o||=this.addPiece({id:e,kind:t,team:`P`,x:n,y:r,dir:i,alive:!0,crown:!1}),o.x=n,o.y=r,o.dir=i,o.alive=!0,o.ctl===0&&this.snapView(o),this.selected===e&&this.setSelected(e),a.drop&&this.dropIn(o,0,.9,!0)}turnToy(e,t){let n=this.pieces.get(e);if(!n)return;let r=n.rig.root.rotation.y,i=cd(r,df[t]);n.dir=t,n.ctl++;let a=0;this.anims.push(e=>{a+=e;let o=Math.min(1,a/.26);return n.rig.root.rotation.y=r+i*ad(o,2.2),qf(n.rig,od(o)*.14),n.rig.pose.squash=o<.15?1-.12*od(o/.15):1+.06*od(o),o>=1&&(Jf(n),n.rig.root.rotation.y=df[t],n.ctl--,!0)}),this.onCue({type:`turn`,kind:n.kind,team:n.team,id:e,at:[n.x,n.y]})}removeToy(e){let t=this.pieces.get(e);if(!t)return;this.drag?.slot===e&&(this.drag=null),this.pieces.delete(e);let n=this.viewList.indexOf(t);n>=0&&this.viewList.splice(n,1),this.selected===e&&this.setSelected(null),this.shrinkAway(t.rig)}beginDrag(e,t){this.endDragNow();let n=this.pieces.get(e);n&&n.kind!==t&&(this.removePiece(e),n=void 0);let r=!!n;n||=this.addPiece({id:e,kind:t,team:`P`,x:-99,y:-99,dir:0,alive:!0,crown:!1}),n.ctl++;let i=n.rig.root.position.clone();this.drag={slot:e,kind:t,view:n,pos:i,vel:new H,goal:i.clone(),lift:0,placed:r,seen:r},n.rig.root.visible=r,this.selected===e&&this.setSelected(null),this.onCue({type:`lift`,kind:t,team:`P`,id:e,at:r?[n.x,n.y]:void 0})}dragTo(e,t){let n=this.drag;if(!n)return{cell:null};let r=this.rayPlane(e,t-46,0);return r?(n.goal.copy(r),n.seen||(n.seen=!0,n.pos.copy(r),n.view.rig.root.visible=!0,n.lift=Lp*.6),{cell:this.cellUnder(r)}):{cell:null}}endDrag(e){let t=this.drag;if(!t)return;this.drag=null;let n=t.view;if(n.ctl--,n.rig.shadow.material=uf().contact,!e){this.removeToy(t.slot);return}n.x=e.x,n.y=e.y,n.dir=e.dir,n.alive=!0;let r=n.rig.root.position.clone(),i=this.cellWorld(e.x,e.y),a=n.rig.root.rotation.y,o=cd(a,df[e.dir]),s=Math.max(.3,t.lift);n.ctl++;let c=0,l=!1;this.anims.push(t=>{c+=t;let u=.17;if(c<u){let e=c/u;return n.rig.root.position.set(r.x+(i.x-r.x)*rd(e),0,r.z+(i.z-r.z)*rd(e)),n.rig.root.rotation.set(0,a+o*rd(e),0),qf(n.rig,s*(1-e*e)),n.rig.pose.squash=1.1,!1}l||(l=!0,n.rig.root.position.copy(i),n.rig.root.rotation.set(0,df[e.dir],0),qf(n.rig,0),this.fx.dust(i.x,i.z,1),this.onCue({type:`place`,kind:n.kind,team:n.team,id:n.id,at:[e.x,e.y]}));let d=c-u;return n.rig.pose.squash=1-.26*Math.exp(-d*9)*Math.cos(d*26),n.rig.pose.feetLift=0,d>.45&&(Jf(n),n.ctl--,!0)})}endDragNow(){let e=this.drag;e&&(this.drag=null,e.view.rig.shadow.material=uf().contact,e.view.ctl=Math.max(0,e.view.ctl-1),Jf(e.view),e.placed?this.snapView(e.view):this.removePiece(e.slot))}updateDrag(e){let t=this.drag;if(!t||!t.seen)return;t.vel.x+=((t.goal.x-t.pos.x)*32*32-64*t.vel.x)*e,t.vel.z+=((t.goal.z-t.pos.z)*32*32-64*t.vel.z)*e,t.pos.x+=t.vel.x*e,t.pos.z+=t.vel.z*e,t.lift+=(Lp-t.lift)*(1-Math.exp(-e*16));let n=t.view.rig;n.root.position.set(t.pos.x,0,t.pos.z),qf(n,t.lift+Math.sin(this.time*3.1)*.03);let r=Math.max(-.5,Math.min(.5,t.vel.z*.05)),i=Math.max(-.5,Math.min(.5,-t.vel.x*.05));n.root.rotation.x+=(r-n.root.rotation.x)*(1-Math.exp(-e*12)),n.root.rotation.z+=(i-n.root.rotation.z)*(1-Math.exp(-e*12)),n.pose.squash=1.04,n.pose.feetLift=0,n.shadow.material=uf().contactHeld,n.shadow.scale.set(n.shadowBase.x*.8,n.shadowBase.y*.8,1)}ndc(e,t){let n=this.canvas.getBoundingClientRect();return this.ndcV.set((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1)}rayPlane(e,t,n){return this.ray.setFromCamera(this.ndc(e,t),this.cameraRig.camera),this.plane.constant=-n,this.ray.ray.intersectPlane(this.plane,new H)}cellUnder(e){if(!this.board)return null;let t=this.board.worldToCell(e);if(!t)return null;let n=this.cellWorld(t[0],t[1]);return Math.abs(e.x-n.x)>.5||Math.abs(e.z-n.z)>.5?null:t}cellAt(e,t){let n=this.rayPlane(e,t,0);return n?this.cellUnder(n):null}pieceAt(e,t){let n=null,r=1/0;for(let i of this.viewList){if(!i.alive||!i.rig.root.visible)continue;let a=this.pieceToClient(i.id);if(!a)continue;let o=this.cellToClient(i.x,i.y,0),s=this.cellToClient(i.x+.5,i.y,0),c=Math.max(22,Math.hypot(s.x-o.x,s.y-o.y)*1.25),l=Math.hypot(e-a.x,t-a.y);l<c&&l<r&&(r=l,n=i.id)}return n}cellToClient(e,t,n=0){let r=this.cellWorld(e,t,n).project(this.cameraRig.camera),i=this.canvas.getBoundingClientRect();return{x:i.left+(r.x+1)/2*i.width,y:i.top+(1-r.y)/2*i.height}}pieceToClient(e){let t=this.pieces.get(e);if(!t)return null;let n=t.rig.root.position.clone();n.y+=t.rig.height*.5,n.project(this.cameraRig.camera);let r=this.canvas.getBoundingClientRect();return{x:r.left+(n.x+1)/2*r.width,y:r.top+(1-n.y)/2*r.height}}setZoneVisible(e){this.board?.setZoneVisible(e)}setCellMarks(e){if(!this.board)return;let t=e.map(e=>{let t=Pp[e.style],n=e.style===`valid`?this.theme.zone:t.color;return{x:e.cell[0],y:e.cell[1],style:Ad[e.style],color:new K(n).multiplyScalar(t.k),intensity:t.intensity,fill:t.fill}});this.board.marks.set(t)}showIntent(e){this.showIntents(e?[e]:[])}showIntents(e){let t=[];for(let n of e){let e=this.pieces.get(n.id);e&&t.push({intent:n,from:[e.x,e.y],color:new K(Fp[e.team]).multiplyScalar(1.1)})}let n=this.intents.show(t,e=>{let t=this.pieces.get(e);return t?[t.x,t.y]:null}),r=t[0]?t[0].color:new K(`#ffffff`),i=new Set(e.flatMap(e=>(e.blast??[]).map(([e,t])=>`${e},${t}`))),a=n.filter(([e,t])=>!i.has(`${e},${t}`)).map(([e,t])=>({x:e,y:t,style:Ad.selected,color:r,intensity:.9,fill:.12}));for(let e of i){let[t,n]=e.split(`,`).map(Number);a.push({x:t,y:n,style:Ad.hover,color:new K(`#ff8a3a`),intensity:.7,fill:.35})}this.intentRings?.set(a)}showGhost(e){if(this.ghost&&=(this.scene.remove(this.ghost.root),null),!e)return;let t=Wf(e.kind,`P`,!1);Gf(t),t.root.position.copy(this.cellWorld(e.x,e.y)),t.setFacing(e.dir),this.scene.add(t.root),this.ghost=t}setSelected(e){if(this.selected=e,!this.board)return;let t=e===null?void 0:this.pieces.get(e);if(!t){this.board.selection.set([]);return}let n=new K(t.team===`P`?`#bfeaff`:t.team===`E`?`#ff9a6a`:`#ffffff`).multiplyScalar(1.2);this.board.selection.set([{x:t.x,y:t.y,style:Ad.selected,color:n,intensity:1,fill:.18}])}setMode(e){let t=this.mode;this.mode=e,this.modeTime=0,e!==`run`&&this.cameraRig.followGoal.set(0,0,0);for(let n of this.viewList){let r=n.rig;r.droopTarget=e===`lose`&&n.team===`P`&&n.alive?1:0,e===`run`&&t!==`run`&&n.team===`P`&&r.squint(.9)}this.cameraRig.blendRate=5,this.refit(!1)}get currentMode(){return this.mode}resetPieces(e){this.phaseToken++,this.timeline?.flush(),this.timeline=null,this.endDragNow(),this.fx.clear(),this.clearFlyers(),this.hitStopLeft=0,this.slowLeft=0,this.sync(e,!0)}sync(e,t){let n=new Set;for(let t of e){n.add(t.id);let e=this.pieces.get(t.id);e&&e.kind===t.kind&&e.team===t.team&&e.crown===t.crown||(e&&this.removePiece(t.id),e=this.addPiece({id:t.id,kind:t.kind,team:t.team,x:t.x,y:t.y,dir:t.dir,alive:t.alive,crown:t.crown})),e.x=t.x,e.y=t.y,e.dir=t.dir,e.alive=t.alive,e.ctl=0,e.rig.pose.xEyes=!1,e.rig.shadow.visible=!0,Jf(e),this.snapView(e)}if(t)for(let e of[...this.viewList])e.id<100&&!n.has(e.id)&&this.removePiece(e.id);this.selected!==null&&this.setSelected(this.selected)}async playPhase(e,t){this.timeline&&=(this.timeline.flush(),null);let n=++this.phaseToken,r=new ld;Yf(r,e,this.ctx,!!t.finale),r.add({at:0,dur:.42}),this.timeline=r,this.phaseSpeed=Math.max(.05,t.speed),this.running||r.flush(),await r.done,this.timeline===r&&(this.timeline=null),n===this.phaseToken&&this.sync(e.after,!1)}skipRun(){this.phaseToken++;let e=this.timeline;this.timeline=null,e?.flush(),this.clearFlyers(),this.fx.clear(),this.hitStopLeft=0,this.slowLeft=0,this.cameraRig.followGoal.set(0,0,0);for(let e of this.viewList)e.ctl=0,Jf(e),e.rig.pose.xEyes=!1,e.rig.shadow.visible=!0,this.snapView(e)}celebrate(){let e=this.levelDef?.w??5,t=this.levelDef?.h??7;this.fx.confetti(0,0,e+1,t+1,Ip),this.onCue({type:`confetti`});for(let e of this.viewList)e.team===`P`&&e.alive&&e.rig.squint(2.5)}orbitBy(e,t){let n=this.cameraRig;n.orbitYaw=sn.clamp(n.orbitYaw-e*.22,-40,40),n.orbitPitch=sn.clamp(n.orbitPitch+t*.14,-24,24)}setOrbit(e,t=0){this.cameraRig.orbitYaw=sn.clamp(e,-40,40),this.cameraRig.orbitPitch=sn.clamp(t,-24,24)}resetCamera(){let e=this.cameraRig,t=e.orbitYaw,n=e.orbitPitch,r=0;this.anims.push(i=>{r+=i;let a=rd(Math.min(1,r/.45));return e.orbitYaw=t*(1-a),e.orbitPitch=n*(1-a),a>=1})}poseFor(e){let t=this.levelDef?.w??5,n=this.levelDef?.h??7,r=Math.max(t,4),i=(e,t)=>{let r=[];for(let i of[-e/2,e/2])for(let e of[-n/2,n/2])r.push(new H(i,t?-Ed:0,e),new H(i,.85,e));return r},a=this.insets;switch(e){case`run`:return this.cameraRig.fit(i(r+.15,!1),40,-6,{...a,left:8,right:8},1);case`win`:return this.cameraRig.fit(i(r,!0),42,-10,a,1);case`lose`:return this.cameraRig.fit(i(r,!0),44,-4,a,1);case`menu`:{let e={...a,top:a.top+120},t=this.cameraRig.fit(i(r,!0),34,0,e,1),n=this.cameraRig.fit(i(r,!0),34,24,e,1),o=t.distance/Math.max(t.distance,n.distance);return{...t,distance:Math.max(t.distance,n.distance),shiftY:t.shiftY*o}}default:return this.cameraRig.fit(i(r,!0),46,0,a,1)}}refit(e){this.cameraRig.setGoal(this.poseFor(this.mode),e),this.mode===`win`&&(this.pushT=0),this.backdrop.placeProps(this.cameraRig.goalCamera(),e)}renderToyIcon(e,t,n){let r=`${e}:${t}:${n}:${this.theme.id}`,i=this.iconCache.get(r);if(i)return i;let a=Math.max(16,Math.round(n)),o=new dr;o.environment=this.envMap,o.environmentIntensity=this.theme.env.intensity;let s=new Ss(this.theme.key.color,this.theme.key.intensity*.9);s.position.set(-2,4,4);let c=new Ss(this.theme.rim.color,this.theme.rim.intensity*1.4);c.position.set(2,3,-4);let l=new ss(this.theme.fill.sky,this.theme.fill.ground,this.theme.fill.intensity);o.add(s,c,l);let u=Wf(e,t,!1);u.idle=!1,u.shadow.visible=!1,u.update(0,0),u.root.rotation.y=-.45,o.add(u.root),u.root.updateMatrixWorld(!0);let d=new Er().setFromObject(u.root),f=d.getCenter(new H),p=d.getSize(new H),m=new ys(24,1,.1,50),h=Math.max(p.x,p.y)*.56/Math.tan(sn.degToRad(12)),g=sn.degToRad(16);m.position.set(f.x,f.y+Math.sin(g)*h,f.z+Math.cos(g)*h),m.lookAt(f);let _=new Dn(a,a,{type:fe,samples:4}),v=new Dn(a,a,{type:ae}),y=this.renderer.getClearColor(new K),b=this.renderer.getClearAlpha(),x=this.renderer.shadowMap.enabled;this.renderer.shadowMap.enabled=!1,this.renderer.setClearColor(0,0),this.renderer.setRenderTarget(_),this.renderer.clear(),this.renderer.render(o,m),this.post.finishTo(this.renderer,_.texture,v);let S=new Uint8Array(a*a*4);this.renderer.readRenderTargetPixels(v,0,0,a,a,S),this.renderer.setRenderTarget(null),this.renderer.setClearColor(y,b),this.renderer.shadowMap.enabled=x,_.dispose(),v.dispose();let C=document.createElement(`canvas`);C.width=C.height=a;let w=C.getContext(`2d`),T=w.createImageData(a,a);for(let e=0;e<a;e++){let t=(a-1-e)*a*4;T.data.set(S.subarray(t,t+a*4),e*a*4)}w.putImageData(T,0,0);let E=C.toDataURL(`image/png`);return this.iconCache.set(r,E),E}wait(e){return new Promise(t=>{if(!this.running){setTimeout(t,e*1e3);return}let n=0;this.anims.push(r=>(n+=r,n>=e&&(t(),!0)))})}aimHeads(){for(let e of this.viewList)e.rig.aimYaw=0,e.rig.aimNod=0}frame(e=performance.now()){let t=(e-this.last)/1e3;this.last=e;let n=Math.min(.1,Math.max(0,t)),r=performance.now(),i=1;this.hitStopLeft>0?(this.hitStopLeft-=n,i=.02):this.slowLeft>0&&(this.slowLeft-=n,i=this.slowLeft>.12?this.slowScale:this.slowScale+(1-this.slowScale)*(1-this.slowLeft/.12));let a=n*i;if(this.time+=a,this.modeTime+=n,this.anims.length){let e=0;for(let t=0;t<this.anims.length;t++){let r=this.anims[t];r(n)||(this.anims[e++]=r)}this.anims.length=e}if(this.updateDrag(n),this.timeline&&this.timeline.step(a*this.phaseSpeed),this.simAnims.length){let e=a*this.phaseSpeed,t=0;for(let n=0;n<this.simAnims.length;n++){let r=this.simAnims[n];r(e)||(this.simAnims[t++]=r)}this.simAnims.length=t}let o=this.mode===`run`||this.mode===`win`,s=this.mode===`win`;for(let e of this.viewList){let t=e.rig;if(e.ctl===0&&(t.root.position.x=this.ctx.cellX(e.x),t.root.position.z=this.ctx.cellZ(e.y),t.root.rotation.y=df[e.dir],s&&e.team===`P`&&e.alive)){let n=this.modeTime<3?.22:.07,r=Math.max(0,Math.sin(this.modeTime*9+e.id*1.7));qf(t,r*n),t.pose.squash=1+.1*r-(r<.1?.08:0)}t.keySpeedTarget=o&&e.alive&&(e.team!==`N`||e.kind===`pin`)?s?4:8:0}this.aimHeads();for(let e of this.viewList)e.rig.update(a,this.time);for(let e of this.flyers)e.update(a,this.time);this.ghost&&this.ghost.update(n,this.time),uf().ghost.uniforms.uTime.value=this.time,this.board?.update(n,this.time),this.backdrop.update(this.time,n),this.intents.update(this.time),this.intentRings&&(this.intentRings.material.uniforms.uTime.value=this.time);let c=this.cameraRig;this.mode===`plan`?c.driftYaw=Math.sin(this.modeTime*.21)*1.2:this.mode===`menu`?c.driftYaw=Math.sin(this.modeTime*.12)*24:this.mode===`win`?c.driftYaw=Math.sin(this.modeTime*.25)*3:c.driftYaw+=(0-c.driftYaw)*(1-Math.exp(-n*2)),this.pushT+=n,c.distanceScale=this.mode===`win`?1+.1*(1-rd(Math.min(1,this.pushT/2.5))):1,c.shake=this.fx.shake,c.update(n),this.fx.update(a,n,c.camera),this.post.setFlash(this.fx.flash);let l=c.camera,u=c.focusDistance(),d=Math.max(this.levelDef?.h??7,5)/2*Math.cos(sn.degToRad(c.current.elevation))+.3;this.post.setFocus({near:l.near,far:l.far,focus:u,nearRange:d*.55,farRange:d*.35,nearScale:.3/(d*.45),farScale:.4/(d*.65)}),this.tmpV.copy(c.target).project(l),this.post.vignetteCenter.set((this.tmpV.x+1)/2,(this.tmpV.y+1)/2),this.renderer.info.reset(),this.gpu.poll(),this.gpu.begin(),this.post.render(this.renderer,this.scene,l),this.fx.words.anyVisible&&this.post.overlay(this.renderer,this.fx.words.scene,this.fx.words.camera),this.gpu.end();let f=performance.now()-r,p=this.stats;p.cpuMs=p.cpuMs*.9+f*.1,t>0&&t<.5&&(p.frameMs=p.frameMs*.92+t*1e3*.08),p.gpuMs=this.gpu.ms,p.calls=this.renderer.info.render.calls,p.triangles=this.renderer.info.render.triangles,p.particles=this.fx.soft.active+this.fx.glow.active,this.autoQuality(t),this.firstFrameResolve&&=(this.firstFrameResolve(),null)}autoQuality(e){if(this.quality!==`auto`||e<=0||e>.5)return;let t=e*1e3;t>20?this.slowFor+=e:this.slowFor=Math.max(0,this.slowFor-e*.5),t<1e3/57&&this.stats.frameMs<1e3/57?this.fastFor+=e:this.fastFor=0;let n=null;this.slowFor>1.5&&this.stats.frameMs>20&&this.level!==`low`?n=this.level===`high`?`medium`:`low`:!this.steppedUp&&this.fastFor>10&&this.level!==`high`&&(n=this.level===`low`?`medium`:`high`,this.steppedUp=!0),n&&(this.level=n,this.slowFor=0,this.fastFor=0,this.applyQuality(),this.resize())}};function Bp(){return typeof navigator>`u`||typeof screen>`u`?`high`:navigator.maxTouchPoints>0&&Math.min(screen.width,screen.height)<820?`medium`:`high`}var Vp=1.1,Hp=.1;function Up(e){let t=Math.floor(e.sampleRate*Vp),n=e.createBuffer(2,t,e.sampleRate);for(let e=0;e<2;e++){let r=n.getChannelData(e),i=777+e*101,a=0;for(let e=0;e<t;e++)i=i*1664525+1013904223>>>0,a+=.35*(i/4294967296*2-1-a),r[e]=a*(1-e/t)**3.5}return n}function Wp(e){let t=e.createGain(),n=e.createGain(),r=e.createGain(),i=e.createGain();i.gain.value=Hp;let a=e.createConvolver();a.buffer=Up(e);let o=e.createDynamicsCompressor();o.threshold.value=-14,o.knee.value=10,o.ratio.value=8,o.attack.value=.003,o.release.value=.2;let s=e.createGain();return s.gain.value=.9,t.connect(r),n.connect(r),t.connect(i),n.connect(i),i.connect(a),a.connect(r),r.connect(o),o.connect(s),s.connect(e.destination),{sfx:t,music:n}}var Gp=1e-4,Kp=new WeakMap,qp=(e,t)=>e+Math.random()*(t-e),Jp=e=>2**(e/12),Yp=e=>440*2**((e-69)/12);function Xp(e){let t=Kp.get(e);if(!t){t=e.createBuffer(1,e.sampleRate,e.sampleRate);let n=t.getChannelData(0),r=12345;for(let e=0;e<n.length;e++)r=r*1664525+1013904223>>>0,n[e]=r/4294967296*2-1;Kp.set(e,t)}return t}function Zp(e,t,n,r,i,a){let o=e.createGain();return o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(r,n+i),o.gain.exponentialRampToValueAtTime(Gp,n+i+a),o.connect(t),o}function Qp(e,t,n,r){let i=r.attack??.002,a=e.createOscillator();return a.type=r.type??`sine`,a.frequency.setValueAtTime(r.f0,n),r.f1!==void 0&&a.frequency.exponentialRampToValueAtTime(r.f1,n+(r.sweep??r.decay)),a.connect(Zp(e,t,n,r.peak,i,r.decay)),a.start(n),a.stop(n+i+r.decay+.03),a}function $p(e,t,n,r){let i=r.attack??.001,a=e.createBufferSource();a.buffer=Xp(e),a.loop=!0;let o=e.createBiquadFilter();o.type=r.type,o.Q.value=r.q??1,o.frequency.setValueAtTime(r.f,n),r.f1!==void 0&&o.frequency.exponentialRampToValueAtTime(r.f1,n+r.dur),a.connect(o),o.connect(Zp(e,t,n,r.peak,i,r.dur)),a.start(n,qp(0,.8)),a.stop(n+i+r.dur+.03)}function em(e,t,n,r,i,a){let o=e.createOscillator();o.frequency.value=r;let s=e.createGain();s.gain.value=i,o.connect(s),s.connect(t.frequency),o.start(n),o.stop(n+a)}var tm=(e,t,n,r,i)=>$p(e,t,n,{type:`bandpass`,f:r,q:4,peak:i,dur:.012}),nm=(e,t,n,r,i,a)=>{let o=e.createOscillator();o.frequency.value=r;let s=e.createOscillator();s.frequency.value=r*3.5;let c=e.createGain();c.gain.setValueAtTime(r*1.2,n),c.gain.exponentialRampToValueAtTime(.01,n+a*.5),s.connect(c),c.connect(o.frequency);let l=e.createGain();l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(i,n+.002),l.gain.exponentialRampToValueAtTime(1e-4,n+a),o.connect(l),l.connect(t);for(let e of[o,s])e.start(n),e.stop(n+a+.03)},rm=(e,t,n,r,i,a,o)=>{for(let s=0;s<i;s++)Qp(e,t,n+qp(0,a),{f0:qp(3e3,6e3)*r,peak:o,decay:.05})},im=(e,t,n,r,i,a)=>{Qp(e,t,n,{f0:r,peak:i,decay:a}),Qp(e,t,n,{f0:r*4,peak:i*.25,decay:.03})},am=(e,t,n,r)=>{Qp(e,t,n,{f0:140*r.pitch,f1:70*r.pitch,sweep:.09,peak:.9,decay:.11});for(let i=0;i<5;i++)tm(e,t,n+.09+i*.035,2500*(1+.07*i)*r.pitch,.5)},om=(e,t,n,r)=>Qp(e,t,n,{f0:300*r.pitch,f1:600*r.pitch,sweep:.06,peak:.5,decay:.09}),sm=(e,t,n,r)=>{tm(e,t,n,2400*r.pitch,.5),Qp(e,t,n+.005,{f0:900*r.pitch,peak:.15,decay:.04})},cm=(e,t,n,r)=>{let i=r.pitch*qp(.9,1.1);$p(e,t,n,{type:`bandpass`,f:800*i,q:5,peak:.5,dur:.025}),Qp(e,t,n,{f0:800*i,peak:.1,decay:.03})},lm=(e,t,n,r)=>Qp(e,t,n,{f0:120*r.pitch,f1:90*r.pitch,peak:.9,decay:.07}),um=(e,t,n,r)=>{Qp(e,t,n,{f0:180*r.pitch,f1:60*r.pitch,sweep:.12,peak:.9,decay:.13}),em(e,Qp(e,t,n,{f0:420*r.pitch,peak:.35,decay:.25}),n,28,30*r.pitch,.3),$p(e,t,n,{type:`bandpass`,f:3e3*r.pitch,q:3,peak:.4,dur:.006})},dm=(e,t,n,r)=>{Qp(e,t,n,{f0:280*r.pitch,f1:900*r.pitch,sweep:.035,peak:.6,decay:.05}),$p(e,t,n,{type:`highpass`,f:1500*r.pitch,peak:.4,dur:.02})},fm=(e,t,n,r)=>{$p(e,t,n,{type:`lowpass`,f:900*r.pitch,f1:120*r.pitch,q:.7,peak:1,dur:.5}),Qp(e,t,n,{f0:90*r.pitch,f1:35*r.pitch,sweep:.4,peak:.9,decay:.5});for(let r=0;r<8;r++)$p(e,t,n+qp(.15,.8),{type:`highpass`,f:2e3,peak:qp(.05,.14),dur:.005})},pm=(e,t,n,r)=>{let i=[.4,.25,.15,.08];[1,2.76,5.4,8.9].forEach((a,o)=>Qp(e,t,n,{f0:900*a*r.pitch,peak:i[o],decay:.18/(1+o*.3)}))},mm=(e,t,n,r)=>{Qp(e,t,n,{f0:700*r.pitch,f1:250*r.pitch,sweep:.16,peak:.5,decay:.18}),Qp(e,t,n+.02,{f0:2200*r.pitch,f1:2800*r.pitch,peak:.08,decay:.03})},hm=(e,t,n,r)=>{em(e,Qp(e,t,n,{f0:1100*r.pitch,f1:250*r.pitch,sweep:.45,peak:.4,attack:.02,decay:.5}),n,6,25,.55),Qp(e,t,n+.65,{f0:500*r.pitch,f1:800*r.pitch,sweep:.04,peak:.06,decay:.06})},gm=(e,t,n,r)=>Qp(e,t,n,{f0:250*r.pitch,f1:520*r.pitch,sweep:.14,peak:.5,decay:.16}),_m=(e,t,n,r)=>{Qp(e,t,n,{f0:120*r.pitch,f1:60*r.pitch,sweep:.08,peak:.7,decay:.1}),Qp(e,t,n,{f0:400*r.pitch,f1:200*r.pitch,sweep:.07,peak:.2,decay:.08})},vm=(e,t,n,r)=>$p(e,t,n,{type:`bandpass`,f:400*r.pitch,q:2,peak:.5,attack:.02,dur:.12}),ym=[1,1.25,1.5],bm={place:am,lift:om,turn:sm,step:cm,bump:lm,bonk:um,pop:dm,boom:fm,tink:pm,ko:mm,fall:hm,hop:gm,land:_m,push:vm,star:(e,t,n,r)=>nm(e,t,n,880*ym[Math.min(2,Math.max(0,r.index))]*r.pitch,.4,.9),confetti:(e,t,n,r)=>{for(let i=0;i<3;i++){let a=n+i*.06;Qp(e,t,a,{f0:400*r.pitch,f1:700*r.pitch,sweep:.02,peak:.25,decay:.03}),$p(e,t,a,{type:`highpass`,f:2e3,peak:.2,dur:.012})}rm(e,t,n+.1,r.pitch,6,.3,.08)},tap:(e,t,n,r)=>{tm(e,t,n,2e3*r.pitch,.3),Qp(e,t,n,{f0:700*r.pitch,peak:.3,decay:.03})},back:(e,t,n,r)=>Qp(e,t,n,{f0:600*r.pitch,f1:400*r.pitch,sweep:.06,peak:.3,decay:.07}),go:(e,t,n,r)=>{let i=n,a=.08;for(let n=0;n<8;n++)tm(e,t,i,(2200+n*150)*r.pitch,.4),i+=a,a*=.8;nm(e,t,i+.02,1318*r.pitch,.35,.5)},heartLost:(e,t,n,r)=>{[660,555,467].forEach((i,a)=>{Qp(e,t,n+a*.16,{f0:i*r.pitch,peak:.4,decay:.35}),Qp(e,t,n+a*.16,{f0:i*2*r.pitch,peak:.08,decay:.2})})},charm:(e,t,n,r)=>{[1,1.25,1.5,2].forEach((i,a)=>nm(e,t,n+a*.07,660*i*r.pitch,.3,.45)),rm(e,t,n+.25,r.pitch,4,.3,.07)},build:(e,t,n,r)=>{[1,9/8,5/4,3/2,5/3,2].forEach((i,a)=>im(e,t,n+a*.05,523*i*r.pitch,.4,.15))}},xm={place:.651,lift:1.044,turn:1.991,step:3.6,bump:.757,bonk:.554,pop:.666,boom:.714,tink:.659,ko:1.033,fall:1.069,hop:1.044,land:.69,push:5.2,star:1.27,confetti:1.044,tap:1.132,back:1.145,go:.879,heartLost:.674,charm:.766,build:.637},Sm={pitch:1,gain:1,pan:0,index:0};function Cm(e,t,n,r,i){let a={...Sm,...i},o=e.createGain();o.gain.value=xm[r]*a.gain;let s=e.createStereoPanner();return s.pan.value=a.pan,o.connect(s),s.connect(t),bm[r](e,o,n,a),o}var wm={place:`place`,lift:`lift`,turn:`turn`,step:`step`,bump:`bump`,bonk:`bonk`,pop:`pop`,boom:`boom`,tink:`tink`,ko:`ko`,fall:`fall`,hop:`hop`,land:`land`,push:`push`,build:`build`,confetti:`confetti`};function Tm(e){return{name:wm[e.type],pitch:2**((e.type===`ko`||e.type===`pop`?Math.min(12,Math.max(0,e.chain??0)*2):0)/12)}}var Em=[0,2,4,5,7,9,11],Dm={playmat:{tonic:72,scale:Em.map(e=>e%12),pent:[0,2,4,7,9],melody:[2,3,4,3,2,1,0,1,2,3,4,5,4,3,1,null],chords:[{root:48,minor:!1},{root:57,minor:!0},{root:53,minor:!1},{root:55,minor:!1}],minorTonic:!1},workshop:{tonic:65,scale:Em.map(e=>(e+5)%12),pent:[0,2,4,7,9],melody:[0,2,3,2,4,3,2,0,0,2,3,4,3,2,1,2],chords:[{root:53,minor:!1},{root:50,minor:!0},{root:58,minor:!1},{root:48,minor:!1}],minorTonic:!1},sandbox:{tonic:67,scale:[0,2,4,5,7,9,10].map(e=>(e+7)%12),pent:[0,2,5,7,10],melody:[3,2,3,5,4,3,2,3,3,2,3,5,4,3,1,null],chords:[{root:55,minor:!1},{root:53,minor:!1},{root:48,minor:!1},{root:50,minor:!0}],minorTonic:!1},attic:{tonic:69,scale:[0,2,3,5,7,9,10].map(e=>(e+9)%12),pent:[0,3,5,7,10],melody:[0,1,2,1,3,2,1,2,0,1,2,3,2,1,0,null],chords:[{root:57,minor:!0},{root:50,minor:!1},{root:55,minor:!1},{root:52,minor:!0}],minorTonic:!0}};function Om(e,t){let n=Math.floor(t/5);return e.tonic+e.pent[t-n*5]+12*n}function km(e){let t=[];for(let n=0;n<4;n++){let{root:r,minor:i}=e.chords[n],a=r+(i?3:4),o=r+7,s=[r,o,a+12,o];for(let r=0;r<4;r++){let i=e.melody[n*4+r];t.push({midi:i===null?null:Om(e,i),vel:r===0?1:r===3?.7:.85}),t.push({midi:s[r],vel:r===0?.8:.6})}}let n=e.tonic;return{scale:e.scale,steps:t,tonicChord:[n,n+(e.minorTonic?3:4),n+7,n+12],fallNotes:[3,2,1,0].map(t=>Om(e,t+5))}}var Am={playmat:km(Dm.playmat),workshop:km(Dm.workshop),sandbox:km(Dm.sandbox),attic:km(Dm.attic)},jm=.25;function Mm(e,t,n,r){let i=Yp(r.midi)*Jp(qp(-4,4)/100),a=r.decay??(r.voice===`melody`?.9:1.4),o=r.droop??1,s=jm*r.vel,c=e.createStereoPanner();c.pan.value=r.pan,c.connect(t);let l=i*o;Qp(e,c,n,{f0:i,f1:o===1?void 0:l,peak:s,decay:a}),Qp(e,c,n,{f0:i*2*Jp(.05),f1:o===1?void 0:l*2,peak:s*.25,decay:a*.8}),Qp(e,c,n,{f0:i*5.4,peak:s*.063,decay:.04})}function Nm(e,t,n,r,i,a=1){let o=(i%32+32)%32,s=Am[r].steps[o];if(s.midi===null)return;let c=o%2==0;Mm(e,t,n,{midi:s.midi,vel:s.vel*a*qp(.92,1.08),voice:c?`melody`:`bass`,pan:(c?.22:-.18)+qp(-.08,.08)})}function Pm(e,t,n,r,i){let a=Am[i];if(r===`win`){a.tonicChord.forEach((r,i)=>Mm(e,t,n+i*.15,{midi:r,vel:.8,voice:`melody`,pan:(i-1.5)*.15}));let r=n+.6;[...a.tonicChord,a.tonicChord[0]+12,a.tonicChord[2]+12].forEach((n,i)=>Mm(e,t,r,{midi:n,vel:.7,voice:`melody`,pan:(i-2)*.12,decay:1.8})),Mm(e,t,r,{midi:a.tonicChord[0]-12,vel:.8,voice:`bass`,pan:0,decay:2});return}let o=[0,.28,.62,1.05];a.fallNotes.forEach((r,i)=>Mm(e,t,n+o[i],{midi:r,vel:.85-i*.08,voice:`melody`,pan:.1,decay:.9+i*.25,droop:1-.03*(i+1)**1.5}))}var Fm=24,Im=2,Lm=.12,Rm=25,zm=.24,Bm=.5,Vm=.7,Hm=.5,Um=class{ctx=null;master=null;sfxOn=!0;musicOn=!0;mood=`off`;theme=`playmat`;timer=null;nextTime=0;nextStep=0;voices=[];unlocked=!1;everUnlocked=!1;onRunningChange=null;constructor(){let e=typeof AudioContext>`u`?null:AudioContext;if(!e)return;this.ctx=new e,this.master=Wp(this.ctx);let t=this.ctx;t.onstatechange=()=>this.syncState(),document.addEventListener(`visibilitychange`,()=>{this.everUnlocked&&(document.hidden?t.suspend().catch(()=>{}):t.resume().catch(()=>{}))})}get running(){return this.ctx?.state===`running`}unlock(){let e=this.ctx;if(!e)return Promise.resolve();if(e.state!==`running`){try{let t=e.createBufferSource();t.buffer=e.createBuffer(1,1,e.sampleRate),t.connect(e.destination),t.start(0)}catch{}let t=e.resume().then(()=>this.syncState(),()=>{});return this.syncState(),Promise.race([t,new Promise(e=>setTimeout(e,300))])}return this.syncState(),Promise.resolve()}syncState(){if(!this.ctx)return;let e=this.unlocked;this.unlocked=this.ctx.state===`running`,this.unlocked&&(this.everUnlocked=!0),this.unlocked!==e&&this.onRunningChange?.(this.unlocked),this.unlocked&&!e&&this.setMood(this.mood)}setSfxOn(e){this.sfxOn=e,this.fade(this.master?.sfx,e)}setMusicOn(e){this.musicOn=e,this.fade(this.master?.music,e)}sfx(e,t){if(!this.ctx||!this.master||!this.sfxOn||!this.unlocked)return;let n=this.ctx.currentTime,r=n+(t?.delay??0);for(this.voices=this.voices.filter(e=>e.end>n);this.voices.length>=Fm;){let e=this.voices.shift();e&&(e.bus.gain.cancelScheduledValues(n),e.bus.gain.setTargetAtTime(0,n,.01))}let i=Cm(this.ctx,this.master.sfx,r,e,t);this.voices.push({bus:i,end:r+Im})}cue(e){let{name:t,pitch:n}=Tm(e);this.sfx(t,{pitch:n})}setMood(e,t){t&&(this.theme=t),this.mood=e,this.stopTimer(),this.ctx&&this.unlocked&&(e===`menu`||e===`plan`)&&(this.nextTime=this.ctx.currentTime+.05,this.nextStep=0,this.timer=setInterval(()=>this.pump(),Rm))}phase(e,t){this.ctx&&this.master&&this.musicOn&&this.unlocked&&this.mood===`run`&&Nm(this.ctx,this.master.music,this.ctx.currentTime+.01,this.theme,t)}resolve(e){this.ctx&&this.master&&this.musicOn&&this.unlocked&&(this.stopTimer(),Pm(this.ctx,this.master.music,this.ctx.currentTime+.02,e,this.theme))}stopTimer(){this.timer!==null&&clearInterval(this.timer),this.timer=null}pump(){if(!this.ctx||!this.master)return;let e=this.ctx.currentTime+Lm;for(;this.nextTime<e;){let e=this.nextStep;this.mood===`menu`?Nm(this.ctx,this.master.music,this.nextTime,this.theme,e,Vm):(e%4==0&&Nm(this.ctx,this.master.music,this.nextTime,this.theme,e,Hm),e%2==0&&$p(this.ctx,this.master.music,this.nextTime,{type:`bandpass`,f:900*qp(.97,1.03),q:5,peak:.08,dur:.025})),this.nextStep=(e+1)%32,this.nextTime+=this.mood===`menu`?zm:Bm}}fade(e,t){this.ctx&&e&&e.gain.setTargetAtTime(+!!t,this.ctx.currentTime,.02)}},Wm={bonk:{name:`Bonk`,rule:`Walks forward. Bonks whatever is in front.`},zip:{name:`Zip`,rule:`Stays put. Pops the first toy it sees.`},boom:{name:`Boom`,rule:`Walks forward. Explodes when it bumps or gets hit.`},shove:{name:`Shove`,rule:`Walks forward and shoves. Its plate blocks hits from the front.`},hop:{name:`Hop`,rule:`Leaps two tiles. Squashes what it lands on.`},twirl:{name:`Twirl`,rule:`Pops the first toy it sees, then turns right.`},pin:{name:`Pin`,rule:`Does nothing.`},block:{name:`Block`,rule:`Does nothing. Breaks when hit.`},keg:{name:`Keg`,rule:`Explodes when hit.`}},Gm={P:`Yours`,E:`Grump`,N:`Prop`};function Km(e){switch(e.t){case`beats`:return`Win in ${e.n} beats`;case`spare`:return`Leave ${e.n} ${e.n===1?`toy`:`toys`} in the tray`;case`safe`:return`Lose no toys`;case`chain`:return`Knock out ${e.n} at once`}}function qm(e){switch(e.t){case`beats`:return`${e.n} beats`;case`spare`:return`Spare ${e.n}`;case`safe`:return`Lose none`;case`chain`:return`${e.n} at once`}}var Jm={spring:{name:`Spare Spring`,text:`One more heart.`},doover:{name:`Do-Over`,text:`The first fail each round is free.`},peek:{name:`Peek`,text:`Once a round, watch the Grumps with no toys placed.`},lucky:{name:`Lucky Bonk`,text:`An extra Bonk in every hand.`},clock:{name:`Slow Clock`,text:`Three more beats.`},goldkey:{name:`Golden Key`,text:`Score x1.5.`},whistle:{name:`Whistle`,text:`One free hint each round.`}},Ym={timeout:`Out of time`,stalemate:`Stuck`,left:e=>e===1?`1 Grump left`:`${e} Grumps left`},Xm=[`Nice work!`,`Tick, tock, bonk!`,`Clean run!`],Zm={back:{body:`<path d="M14.5 5.5 8 12l6.5 6.5"/>`},gear:{body:`<path d="M9.84 4.92 L10.33 2.55 L13.67 2.55 L14.16 4.92 L15.47 5.47 L17.51 4.14 L19.86 6.49 L18.53 8.53 L19.08 9.84 L21.45 10.33 L21.45 13.67 L19.08 14.16 L18.53 15.47 L19.86 17.51 L17.51 19.86 L15.47 18.53 L14.16 19.08 L13.67 21.45 L10.33 21.45 L9.84 19.08 L8.53 18.53 L6.49 19.86 L4.14 17.51 L5.47 15.47 L4.92 14.16 L2.55 13.67 L2.55 10.33 L4.92 9.84 L5.47 8.53 L4.14 6.49 L6.49 4.14 L8.53 5.47Z"/><circle cx="12" cy="12" r="3"/>`},"sound-on":{body:`<path d="M4 9.5h3.2L12 5.8v12.4l-4.8-3.7H4z"/><path d="M15.6 9.2a4 4 0 0 1 0 5.6M18.4 6.6a8 8 0 0 1 0 10.8"/>`},"sound-off":{body:`<path d="M4 9.5h3.2L12 5.8v12.4l-4.8-3.7H4z"/><path d="m16 9.5 5 5M21 9.5l-5 5"/>`},"music-on":{body:`<path d="M9 17.5V6l10-2v11.5"/><circle cx="6.8" cy="17.5" r="2.3"/><circle cx="16.8" cy="15.5" r="2.3"/>`},"music-off":{body:`<path d="M9 17.5V6l10-2v11.5"/><circle cx="6.8" cy="17.5" r="2.3"/><circle cx="16.8" cy="15.5" r="2.3"/><path d="M3.5 3.5l17 17"/>`},star:{body:`<path d="m12 3.6 2.6 5.3 5.8.9-4.2 4.1 1 5.8L12 16.9l-5.2 2.8 1-5.8-4.2-4.1 5.8-.9z"/>`,fill:!0},heart:{body:`<path d="M12 20s-7.4-4.5-7.4-10.2A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.4 2.4C19.4 15.5 12 20 12 20z"/>`,fill:!0},key:{body:`<path d="M12 12.5C7.500 13.500 2.800 12 2.800 8.300 2.800 4.800 7.600 4.300 10.200 6.800c1.200 1.200 1.700 3.200 1.800 5.700z"/><path d="M12 12.500c4.500 1 9.200-.5 9.200-4.200 0-3.500-4.800-4-7.400-1.500-1.200 1.200-1.700 3.200-1.800 5.700z"/><path d="M12 12.500V20M12 20h3.300M12 16.800h2.500"/>`,fill:!0},bulb:{body:`<path d="M9.2 18h5.6M10.2 21h3.6"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3z"/>`},skip:{body:`<path d="M5.5 5.5 14 12l-8.5 6.5z"/><path d="M18.5 5v14"/>`},play:{body:`<path d="m7.5 4.8 11 7.2-11 7.2z"/>`,fill:!0},stop:{body:`<rect x="6" y="6" width="12" height="12" rx="2.5"/>`,fill:!0},replay:{body:`<path d="M19.8 12a7.8 7.8 0 1 1-2.4-5.6"/><path d="M19.6 4v4.6h-4.6"/>`},speed:{body:`<path d="m5.5 6 6 6-6 6M12.5 6l6 6-6 6"/>`},lock:{body:`<rect x="5.5" y="10.5" width="13" height="9.5" rx="2.6"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>`},eye:{body:`<path d="M2.8 12S6.2 6.5 12 6.5 21.2 12 21.2 12 17.8 17.5 12 17.5 2.8 12 2.8 12z"/><circle cx="12" cy="12" r="2.6"/>`},clock:{body:`<circle cx="12" cy="12.5" r="8"/><path d="M12 8v4.8l3 1.7M9.5 2.8h5"/>`},next:{body:`<path d="m9.5 5.5 6.500 6.500-6.500 6.500"/>`},buzz:{body:`<rect x="8" y="3.500" width="8" height="17" rx="2.200"/><path d="M4.500 8.500v7M19.500 8.500v7M1.800 10.500v3M22.200 10.500v3"/>`},"step-back":{body:`<path d="M16 5.5 9.5 12l6.5 6.5"/><path d="M6 5.5v13"/>`},"step-next":{body:`<path d="M8 5.5 14.5 12 8 18.5"/><path d="M18 5.5v13"/>`}};function Qm(e,t=24,n=!1){let r=Zm[e];return`<svg class="ico" width="${t}" height="${t}" viewBox="0 0 24 24" fill="${n||r.fill?`currentColor`:`none`}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${r.body}</svg>`}function Q(e,t=``,n=``,r){let i=document.createElement(e);return t&&(i.className=t),n&&(i.innerHTML=n),r?.appendChild(i),i}function $m(e,t,n,r,i){let a=Q(`button`,`btn ${e}`,t,i);return a.type=`button`,a.setAttribute(`aria-label`,n),a.addEventListener(`click`,r),a}var eh=class{root;body;constructor(e,t){this.root=Q(`section`,`sheet ${t}`,``,e),this.body=Q(`div`,`sheet-body`,``,this.root),this.root.inert=!0}open(){this.root.inert=!1,requestAnimationFrame(()=>requestAnimationFrame(()=>this.root.setAttribute(`data-open`,``)))}close(){this.root.removeAttribute(`data-open`),this.root.inert=!0}get isOpen(){return this.root.hasAttribute(`data-open`)}},th={mode:`plan`,variant:`campaign`,levelName:``,beat:0,maxBeats:10,goals:[],speed:1,canGo:!0,hintReady:!1,hearts:3,maxHearts:3,round:1,score:0,streak:0,tries:1},nh=class{handlers;root;cells=new Map;sig=``;constructor(e,t){this.handlers=t,this.root=Q(`div`,`tray`,``,e)}set(e){let t=e.map(e=>`${e.slot}:${e.kind}`).join(`,`);if(t!==this.sig){this.sig=t,this.root.textContent=``,this.cells.clear();for(let t of e){let e=Q(`div`,`coaster`,``,this.root);e.setAttribute(`role`,`button`),e.setAttribute(`aria-label`,`${Wm[t.kind].name}, toy ${t.order}`),Q(`img`,`coaster-img`,``,e).draggable=!1,Q(`span`,`coaster-order`,``,e),e.addEventListener(`pointerdown`,e=>{e.preventDefault(),this.handlers.onTrayDown(t.slot,e)}),this.cells.set(t.slot,e)}}for(let t of e){let e=this.cells.get(t.slot);if(!e)continue;e.classList.toggle(`placed`,t.placed);let n=e.querySelector(`img`);n&&n.getAttribute(`src`)!==t.icon&&n.setAttribute(`src`,t.icon);let r=e.querySelector(`.coaster-order`);r&&(r.textContent=String(t.order))}this.root.classList.toggle(`empty`,e.length===0),this.root.classList.toggle(`many`,e.length>5)}setSelected(e){for(let[t,n]of this.cells)n.classList.toggle(`selected`,t===e)}},rh=class{handlers;cfg;root;tray;s={...th};q={};chipsKey=``;heartsKey=``;constructor(e,t,n){this.handlers=t,this.cfg=n;let r=this.root=Q(`div`,`hud`,``,e),i=Q(`div`,`hud-top`,``,r);this.q.back=$m(`round`,Qm(`back`),`Back`,()=>t.onBack(),i);let a=Q(`div`,`pill hud-title`,``,i),o=Q(`div`,`hud-line`,``,a);this.q.tag=Q(`span`,`tag`,``,o),this.q.name=Q(`span`,`hud-name`,``,o);let s=Q(`div`,`hud-meter`,``,a),c=Q(`div`,`meter`,`<i></i>`,s);this.q.bar=c.querySelector(`i`),this.q.beat=Q(`span`,`hud-beat num`,``,s),this.q.mute=$m(`round`,``,`Sound`,()=>{let e=!this.cfg.sfx&&!this.cfg.music;t.onSetting({sfx:e,music:e})},i),this.q.stats=Q(`div`,`hud-stats`,``,r),this.q.hearts=Q(`div`,`pill hearts`,``,this.q.stats),this.q.round=Q(`div`,`pill stat`,``,this.q.stats),this.q.score=Q(`div`,`pill stat`,``,this.q.stats),this.q.streak=Q(`div`,`pill stat`,``,this.q.stats),this.q.tries=Q(`div`,`pill stat`,``,this.q.stats),this.q.chips=Q(`div`,`hud-chips`,``,r);let l=Q(`div`,`dock`,``,r);this.tray=new nh(l,t),this.q.speed=$m(`speed`,``,`Speed`,()=>t.onSpeed(this.s.speed===1?2:1),l);let u=Q(`div`,`go-wrap`,``,l);this.q.hint=$m(`round hint`,Qm(`bulb`,26),`Hint`,()=>t.onHint(),u),this.q.go=$m(`go`,``,`Go`,()=>this.s.mode===`plan`?t.onGo():t.onStop(),u),this.render()}update(e){this.s={...this.s,...e},this.render()}refreshMute(){let e=!this.cfg.sfx&&!this.cfg.music;this.q.mute.innerHTML=Qm(e?`sound-off`:`sound-on`),this.q.mute.classList.toggle(`is-off`,e)}render(){let e=this.s,t=this.root;t.dataset.mode=e.mode,t.dataset.variant=e.variant,this.refreshMute(),this.q.tag.textContent=e.variant===`daily`?`Daily`:``,this.q.name.textContent=e.levelName;let n=e.maxBeats>0?Math.min(1,e.beat/e.maxBeats):0;this.q.bar.style.transform=`scaleX(${n})`,this.q.beat.textContent=`${e.beat}/${e.maxBeats}`;let r=`${e.hearts}/${e.maxHearts}`;r!==this.heartsKey&&(this.heartsKey=r,this.q.hearts.innerHTML=Array.from({length:e.maxHearts},(t,n)=>`<span class="heart${n<e.hearts?``:` lost`}">${Qm(`heart`,20)}</span>`).join(``)),this.q.round.innerHTML=`<small>Round</small><b class="num">${e.round}</b>`,this.q.score.innerHTML=`<small>Score</small><b class="num">${e.score.toLocaleString(`en-US`)}</b>`,this.q.streak.innerHTML=`<small>Streak</small><b class="num">${e.streak}</b>`,this.q.tries.innerHTML=`<small>Tries</small><b class="num">${e.tries}</b>`;let i=e.goals.map(e=>`${qm(e.goal)}${+!!e.earned}`).join(`|`);i!==this.chipsKey&&(this.chipsKey=i,this.q.chips.innerHTML=e.goals.map(e=>`<span class="pill chip${e.earned?` earned`:``}">${Qm(`star`,18,e.earned)}<span>${qm(e.goal)}</span></span>`).join(``));let a=e.mode===`run`;this.q.speed.innerHTML=`${Qm(`speed`,22)}<span class="num">${e.speed}x</span>`,this.q.go.innerHTML=a?`${Qm(`stop`,28)}<span>Stop</span>`:`${Qm(`key`,34)}<span>GO</span>`,this.q.go.setAttribute(`aria-label`,a?`Stop`:`Go`),this.q.go.classList.toggle(`stop`,a),this.q.go.disabled=!a&&!e.canGo,this.q.hint.hidden=!(e.hintReady&&!a)}},ih=class{h;win;fail;beat=0;beats=0;dots=null;constructor(e,t){this.h=t,this.win=new eh(e,`win`),this.fail=new eh(e,`fail`)}showWin(e){this.fail.close();let t=this.win.body;t.textContent=``,Q(`h2`,`sheet-title`,Xm[0],t);let n=Q(`div`,`stars`,``,t);e.stars.forEach((e,t)=>{Q(`span`,`star s${t}${e?` on`:``}`,Qm(`star`,58),n).style.setProperty(`--i`,String(t))});let r=Q(`ul`,`goal-lines`,``,t);if(e.goals.forEach((e,t)=>{Q(`li`,e.earned?`earned`:``,`${Qm(`star`,20,e.earned)}<span>${Km(e.goal)}</span>`,r).style.setProperty(`--i`,String(t+1))}),e.daily){let n=e.daily.tries,r=Q(`div`,`daily-line`,``,t);Q(`span`,`pill`,`Solved in <b class="num">${n}</b> ${n===1?`try`:`tries`}`,r),Q(`span`,`pill`,`Streak <b class="num">${e.daily.streak}</b>`,r)}let i=Q(`div`,`sheet-actions`,``,t);$m(`paper`,`${Qm(`replay`,22)}<span>Replay</span>`,`Replay`,()=>this.h.onReplay(),i),$m(`primary grow`,`<span>${e.daily?`Done`:`Next`}</span>${Qm(`next`,22)}`,e.daily?`Done`:`Next`,()=>this.h.onNext(),i),this.win.open()}showFail(e){this.win.close();let t=this.fail.body;t.textContent=``,this.beat=e.beats,this.beats=e.beats,Q(`h2`,`sheet-title`,e.reason,t);let n=Q(`div`,`strip`,``,t);$m(`round flat`,Qm(`back`,22),`Previous beat`,()=>this.stepTo(this.beat-1),n);let r=this.dots=Q(`div`,`dots`,``,n);for(let t=1;t<=e.beats;t++){let e=Q(`button`,`dot`,`<i></i>`,r);e.type=`button`,e.setAttribute(`aria-label`,`Beat ${t}`),e.addEventListener(`click`,()=>this.stepTo(t))}$m(`round flat`,Qm(`next`,22),`Next beat`,()=>this.stepTo(this.beat+1),n),$m(`round flat`,Qm(`play`,22),`Play from here`,()=>this.h.onReplayPlay(this.beat),n);let i=Q(`div`,`sheet-actions`,``,t);$m(`primary grow`,`${Qm(`replay`,22)}<span>Try again</span>`,`Try again`,()=>this.h.onRetry(),i),e.canHint&&$m(`paper`,`${Qm(`bulb`,22)}<span>Hint</span>`,`Hint`,()=>this.h.onHint(),i),e.canSkip&&$m(`paper`,`${Qm(`skip`,22)}<span>Skip</span>`,`Skip`,()=>this.h.onSkip(),i),this.markBeat(),this.fail.open()}setReplayBeat(e){this.beat=Math.max(0,Math.min(this.beats,e)),this.markBeat()}stepTo(e){let t=Math.max(0,Math.min(this.beats,e));this.beat=t,this.markBeat(),this.h.onReplayBeat(t)}markBeat(){this.dots&&([...this.dots.children].forEach((e,t)=>{e.classList.toggle(`on`,t+1===this.beat),e.classList.toggle(`past`,t+1<this.beat)}),this.dots.children[this.beat-1]?.scrollIntoView({block:`nearest`,inline:`nearest`}))}hide(){this.win.close(),this.fail.close()}},ah=class{root;constructor(e){this.root=Q(`div`,`card`,``,e)}show(e){let t=Wm[e.kind];this.root.dataset.team=e.team,this.root.innerHTML=`<div class="card-head"><b>${t.name}</b><span class="tag t-${e.team}">${Gm[e.team]}</span></div><p>${e.rule??t.rule}</p>`;let n=this.root;n.style.visibility=`hidden`,n.classList.remove(`show`,`below`),n.style.left=`0px`,n.style.top=`0px`;let r=n.offsetWidth,i=n.offsetHeight,a=Math.max(12,Math.min(innerWidth-r-12,e.at.x-r/2)),o=e.at.y-i-26,s=o<52;s&&(o=e.at.y+26),n.classList.toggle(`below`,s),n.style.left=`${a}px`,n.style.top=`${o}px`,n.style.setProperty(`--tail`,`${Math.max(18,Math.min(r-18,e.at.x-a))}px`),n.style.visibility=``,requestAnimationFrame(()=>n.classList.add(`show`))}hide(){this.root.classList.remove(`show`)}},oh=class{sheet;constructor(e){this.sheet=new eh(e,`charms`)}pick(e){let t=this.sheet.body;t.textContent=``,Q(`h2`,`sheet-title`,`Pick a charm`,t);let n=Q(`div`,`charm-row`,``,t),r={spring:`heart`,doover:`replay`,peek:`eye`,lucky:`star`,clock:`clock`,goldkey:`key`,whistle:`bulb`},i={spring:`var(--red)`,doover:`var(--blue)`,peek:`var(--mint)`,lucky:`var(--yellow)`,clock:`var(--mint)`,goldkey:`var(--yellow)`,whistle:`var(--blue)`};return new Promise(t=>{e.forEach((e,a)=>{let o=Q(`button`,`charm`,``,n);o.type=`button`,o.style.setProperty(`--i`,String(a)),o.style.setProperty(`--tint`,i[e]),o.innerHTML=`<span class="charm-ico">${Qm(r[e],26)}</span><b>${Jm[e].name}</b><span>${Jm[e].text}</span>`,o.addEventListener(`click`,()=>{this.sheet.close(),t(a)})}),this.sheet.open()})}hide(){this.sheet.close()}},sh=class{h;sheet;constructor(e,t){this.h=t,this.sheet=new eh(e,`runover`)}show(e){let t=this.sheet.body;t.textContent=``,Q(`h2`,`sheet-title`,`Run over`,t),Q(`div`,`big-score num`,e.score.toLocaleString(`en-US`),t);let n=Q(`div`,`daily-line`,``,t);Q(`span`,`pill`,`Round <b class="num">${e.round}</b>`,n),Q(`span`,`pill`,`Best <b class="num">${e.best.toLocaleString(`en-US`)}</b>`,n);let r=Q(`div`,`sheet-actions`,``,t);$m(`paper`,`<span>Menu</span>`,`Menu`,()=>this.h.onExit(),r),$m(`primary grow`,`${Qm(`replay`,22)}<span>Play again</span>`,`Play again`,()=>this.h.onRunAgain(),r),this.sheet.open()}hide(){this.sheet.close()}},ch=class{handlers;root;hud;tray;result;card;charms;runOver;cfg={sfx:!0,music:!0,haptics:!0,quality:`auto`};screens=new Map;hudObj;levelsEl;toyboxList;settingsBody;bannerEl;toastEl;bannerTimer=0;toastTimer=0;confirmReset=!1;current=`none`;menuSub={};constructor(e,t){this.handlers=t,this.root=Q(`div`,`ui-root`,``,e);let n=e=>{let t=Q(`div`,`screen s-${e}`,``,this.root),n=Q(`div`,`col`,``,t);return this.screens.set(e,t),n},r=n(`title`);$m(`round gear`,Qm(`gear`),`Settings`,()=>t.onMenu(`settings`),r).classList.add(`title-gear`);let i=Q(`h1`,`wordmark`,``,r);i.setAttribute(`aria-label`,`Tick Tock Bonk`),i.innerHTML=`<span class="w w1" aria-hidden="true">TICK</span><span class="w w2" aria-hidden="true">TOCK</span><span class="w w3" aria-hidden="true">BONK<svg class="wk" viewBox="0 0 48 72" aria-hidden="true"><g class="wk-spin"><path d="M24 34C14 35 3 31 3 21 3 11 14 10 20 16c3 3 4 9 4 18zM24 34c10 1 21-3 21-13 0-10-11-11-17-5-3 3-4 9-4 18z"/><path class="wk-stem" d="M24 34v26M24 60h10M24 50h8"/></g></svg></span>`;let a=Q(`nav`,`menu`,``,r);$m(`primary big`,`${Qm(`play`,24)}<span>Play</span>`,`Play`,()=>t.onMenu(`play`),a);let o=Q(`div`,`menu-row`,``,a),s=$m(`paper`,`<span>Gauntlet</span>`,`Gauntlet`,()=>t.onMenu(`gauntlet`),o);this.menuSub.gauntlet=Q(`small`,`menu-sub`,``,s);let c=$m(`paper`,`<span>Daily</span>`,`Daily`,()=>t.onMenu(`daily`),o);this.menuSub.daily=Q(`small`,`menu-sub`,``,c),$m(`paper`,`<span>Toybox</span>`,`Toybox`,()=>t.onMenu(`toybox`),o);let l=n(`levels`),u=Q(`div`,`bar`,``,l);$m(`round`,Qm(`back`),`Back`,()=>t.onBack(),u),Q(`h2`,`bar-title`,`Levels`,u),this.levelsEl=Q(`div`,`levels`,``,l);let d=n(`game`);this.hudObj=new rh(d,t,this.cfg),this.hud=this.hudObj,this.tray=this.hudObj.tray,this.bannerEl=Q(`div`,`banner`,``,d),this.result=new ih(d,t),this.charms=new oh(d),this.runOver=new sh(d,t);let f=n(`toybox`),p=Q(`div`,`bar`,``,f);$m(`round`,Qm(`back`),`Back`,()=>t.onBack(),p),Q(`h2`,`bar-title`,`Toybox`,p),this.toyboxList=Q(`div`,`toy-list`,``,f);let m=n(`settings`),h=Q(`div`,`bar`,``,m);$m(`round`,Qm(`back`),`Back`,()=>t.onBack(),h),Q(`h2`,`bar-title`,`Settings`,h),this.settingsBody=Q(`div`,`panel settings`,``,m),this.card=new ah(this.root),this.toastEl=Q(`div`,`toast`,``,this.root),this.toastEl.setAttribute(`role`,`status`),this.renderSettings(),this.hudObj.refreshMute(),this.show(`none`)}show(e,t){this.current=e;for(let[t,n]of this.screens){let r=t===e;n.classList.toggle(`active`,r),n.inert=!r}e!==`game`&&(this.result.hide(),this.charms.hide(),this.runOver.hide(),this.bannerEl.classList.remove(`show`)),this.card.hide(),e===`levels`&&t&&`chapters`in t&&this.renderLevels(t),e===`toybox`&&Array.isArray(t)&&this.renderToybox(t),e===`settings`&&(t&&`quality`in t&&this.setSettings(t),this.confirmReset=!1,this.renderSettings())}get screen(){return this.current}banner(e,t=3200){this.bannerEl.textContent=e,this.bannerEl.classList.add(`show`),clearTimeout(this.bannerTimer),this.bannerTimer=window.setTimeout(()=>this.bannerEl.classList.remove(`show`),t)}setMenuInfo(e){for(let t of[`gauntlet`,`daily`]){let n=this.menuSub[t];n&&(n.textContent=e[t]??``,n.hidden=!e[t])}}hideBanner(){clearTimeout(this.bannerTimer),this.bannerEl.classList.remove(`show`)}toast(e,t=2200){this.toastEl.textContent=e,this.toastEl.classList.add(`show`),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove(`show`),t)}setSettings(e){Object.assign(this.cfg,e),this.hudObj.refreshMute(),this.renderSettings()}renderLevels(e){let t=this.levelsEl;t.textContent=``;let n=e.chapters.filter(e=>!e.locked).flatMap(e=>e.levels).find(e=>!e.locked&&e.stars===0)?.id??null,r=Q(`div`,`pager`,``,t),i=Q(`div`,`pager-dots`,``,t),a=[`var(--mint)`,`var(--yellow)`,`var(--red)`,`var(--blue)`],o=0;e.chapters.forEach((e,t)=>{let s=Q(`div`,`page`,``,r),c=Q(`div`,`chapter${e.locked?` locked`:``}`,``,s);c.style.setProperty(`--accent`,a[t%a.length]),Q(`div`,`chapter-head`,`<h3><span class="chapter-n num">${t+1}</span>${e.name}</h3><span class="pill stars-pill num">${Qm(`star`,18,!0)}${e.stars}/${e.totalStars}</span>`,c);let l=Q(`div`,`studs`,``,c);e.levels.forEach((r,i)=>{let a=Q(`div`,`stud-cell`,``,l),s=Q(`button`,`stud`,``,a);s.type=`button`;let c=r.id===n;c&&(o=t),s.classList.toggle(`done`,r.stars>0),s.classList.toggle(`next`,c),s.classList.toggle(`lock`,r.locked),s.disabled=r.locked||e.locked,s.setAttribute(`aria-label`,`${r.name}, ${r.stars} of 3 stars`),s.innerHTML=r.locked?Qm(`lock`,22):`<span class="num">${i+1}</span>`,s.addEventListener(`click`,()=>this.handlers.onSelectLevel(r.id)),Q(`div`,`mini-stars`,[0,1,2].map(e=>`<span class="${e<r.stars?`on`:``}">${Qm(`star`,14,!0)}</span>`).join(``),a).hidden=r.locked}),e.locked&&Q(`div`,`lock-badge`,`${Qm(`lock`,26)}<b>Earn ${e.unlockStars} stars</b>`,c),Q(`i`,`pdot`,``,i)});let s=()=>{let e=Math.round(r.scrollLeft/Math.max(1,r.clientWidth));[...i.children].forEach((t,n)=>t.classList.toggle(`on`,n===e))};r.addEventListener(`scroll`,s,{passive:!0}),requestAnimationFrame(()=>{r.scrollLeft=o*r.clientWidth,s()})}renderToybox(e){this.toyboxList.textContent=``;let t=new Map(i.map((e,t)=>[e,t])),n=[...e].sort((e,n)=>(t.get(e.kind)??99)-(t.get(n.kind)??99));for(let e of n){let t=Wm[e.kind],n=Q(`div`,`toy-row${e.unlocked?``:` locked`}`,``,this.toyboxList);n.innerHTML=e.unlocked?`<img src="${e.icon}" alt="" draggable="false"><div><b>${t.name}</b><span>${t.rule}</span></div>`:`<img src="${e.icon}" alt="" draggable="false"><div><b>Locked</b><span>Keep playing to find this toy.</span></div>${Qm(`lock`,22)}`}}renderSettings(){let e=this.settingsBody;e.textContent=``;let t=(t,n,r)=>{let i=Q(`button`,`switch`,`<i></i>`,Q(`div`,`set-row`,`<span class="set-ico">${Qm(n,22)}</span><span class="set-label">${t}</span>`,e));i.type=`button`,i.setAttribute(`role`,`switch`),i.setAttribute(`aria-label`,t),i.setAttribute(`aria-checked`,String(this.cfg[r])),i.addEventListener(`click`,()=>{this.cfg[r]=!this.cfg[r],this.handlers.onSetting({[r]:this.cfg[r]}),this.hudObj.refreshMute(),this.renderSettings()})};t(`Sound`,this.cfg.sfx?`sound-on`:`sound-off`,`sfx`),t(`Music`,this.cfg.music?`music-on`:`music-off`,`music`),t(`Haptics`,`buzz`,`haptics`);let n=Q(`div`,`seg`,``,Q(`div`,`set-row col-row`,`<span class="set-label">Quality</span>`,e));for(let e of[`auto`,`low`,`medium`,`high`]){let t=Q(`button`,`seg-b${this.cfg.quality===e?` on`:``}`,e,n);t.type=`button`,t.addEventListener(`click`,()=>{this.cfg.quality=e,this.handlers.onSetting({quality:e}),this.renderSettings()})}let r=Q(`div`,`set-reset`,``,e);if(!this.confirmReset)$m(`paper danger`,`<span>Reset progress</span>`,`Reset progress`,()=>{this.confirmReset=!0,this.renderSettings()},r);else{Q(`p`,`confirm-text`,`Erase all stars and progress?`,r);let e=Q(`div`,`sheet-actions`,``,r);$m(`paper`,`<span>Keep it</span>`,`Keep progress`,()=>{this.confirmReset=!1,this.renderSettings()},e),$m(`primary grow`,`<span>Erase</span>`,`Erase progress`,()=>{this.confirmReset=!1,this.handlers.onResetProgress(),this.renderSettings()},e)}}},lh={"c1-01":[{slot:0,x:1,y:2,dir:0}],"c1-02":[{slot:0,x:1,y:3,dir:0}],"c1-03":[{slot:0,x:2,y:4,dir:0},{slot:1,x:0,y:5,dir:0}],"c1-04":[{slot:0,x:2,y:5,dir:0}],"c1-05":[{slot:0,x:2,y:4,dir:0}],"c1-06":[{slot:0,x:0,y:4,dir:0},{slot:1,x:4,y:4,dir:0},{slot:2,x:2,y:4,dir:0}],"c1-07":[{slot:0,x:0,y:4,dir:0},{slot:1,x:2,y:4,dir:0}],"c1-08":[{slot:0,x:0,y:5,dir:0},{slot:1,x:3,y:5,dir:0}],"c1-09":[{slot:0,x:2,y:4,dir:0},{slot:1,x:2,y:5,dir:0}],"c1-10":[{slot:1,x:2,y:7,dir:0},{slot:2,x:2,y:6,dir:0},{slot:3,x:0,y:7,dir:0},{slot:4,x:3,y:7,dir:0}],"c2-01":[{slot:0,x:2,y:4,dir:0}],"c2-02":[{slot:0,x:0,y:4,dir:1}],"c2-03":[{slot:0,x:1,y:3,dir:1}],"c2-04":[{slot:0,x:2,y:4,dir:0}],"c2-05":[{slot:0,x:2,y:5,dir:0}],"c2-06":[{slot:1,x:0,y:3,dir:1}],"c2-07":[{slot:0,x:2,y:5,dir:0},{slot:1,x:0,y:5,dir:1}],"c2-08":[{slot:0,x:0,y:5,dir:0},{slot:1,x:0,y:4,dir:1}],"c2-09":[{slot:0,x:1,y:5,dir:0},{slot:1,x:3,y:5,dir:0}],"c2-10":[{slot:0,x:2,y:6,dir:0},{slot:1,x:2,y:5,dir:1}],"c3-01":[{slot:0,x:2,y:4,dir:0}],"c3-02":[{slot:0,x:2,y:4,dir:0}],"c3-03":[{slot:1,x:1,y:4,dir:0}],"c3-04":[{slot:0,x:2,y:5,dir:0}],"c3-05":[{slot:0,x:2,y:5,dir:0}],"c3-06":[{slot:0,x:0,y:5,dir:1},{slot:1,x:4,y:5,dir:0}],"c3-07":[{slot:1,x:2,y:7,dir:0}],"c3-08":[{slot:0,x:1,y:5,dir:0},{slot:1,x:3,y:5,dir:0}],"c3-09":[{slot:0,x:1,y:5,dir:0},{slot:1,x:2,y:5,dir:0},{slot:2,x:3,y:5,dir:0}],"c3-10":[{slot:0,x:1,y:6,dir:0},{slot:1,x:3,y:6,dir:0},{slot:2,x:2,y:6,dir:0}],"c4-01":[{slot:0,x:1,y:3,dir:0}],"c4-02":[{slot:0,x:2,y:4,dir:3}],"c4-03":[{slot:0,x:2,y:5,dir:0}],"c4-04":[{slot:0,x:2,y:5,dir:0}],"c4-05":[{slot:1,x:2,y:5,dir:0}],"c4-06":[{slot:1,x:2,y:4,dir:0}],"c4-07":[{slot:0,x:0,y:2,dir:0},{slot:1,x:4,y:2,dir:0}],"c4-08":[{slot:0,x:1,y:4,dir:0},{slot:1,x:3,y:4,dir:0}],"c4-09":[{slot:0,x:0,y:7,dir:1},{slot:1,x:3,y:6,dir:0}],"c4-10":[{slot:0,x:1,y:7,dir:0},{slot:1,x:0,y:6,dir:1}]},uh=0,dh=1,$=2,fh=3,ph=[{id:`c1`,name:`Playmat`,theme:`playmat`,starsToOpen:0,levels:[{id:`c1-01`,name:`Wind Up`,w:3,h:4,map:[`...`,`...`,`.o.`,`.o.`],pieces:[{kind:`pin`,team:`E`,x:1,y:0,dir:$}],hand:[`bonk`],maxBeats:8,rotate:!1,goals:[{t:`beats`,n:2},{t:`safe`}],intro:`Drag Bonk to a glowing tile. Then press GO.`},{id:`c1-02`,name:`Incoming`,w:3,h:5,map:[`...`,`...`,`...`,`.o.`,`.o.`],pieces:[{kind:`bonk`,team:`E`,x:1,y:0,dir:$}],hand:[`bonk`],maxBeats:8,rotate:!1,goals:[{t:`beats`,n:2},{t:`safe`}],intro:`Grumps bonk too. The one who steps close gets bonked first.`},{id:`c1-03`,name:`Two Lanes`,w:3,h:7,map:[`...`,`...`,`...`,`...`,`o.o`,`o.o`,`o.o`],pieces:[{kind:`bonk`,team:`E`,x:2,y:1,dir:$},{kind:`bonk`,team:`E`,x:0,y:2,dir:$}],hand:[`bonk`,`bonk`],maxBeats:10,rotate:!1,goals:[{t:`beats`,n:2},{t:`safe`}],intro:`Two lanes. Pick the right distance in each.`},{id:`c1-04`,name:`Pop`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`.....`,`ooooo`],pieces:[{kind:`bonk`,team:`E`,x:2,y:0,dir:$},{kind:`bonk`,team:`E`,x:2,y:1,dir:$}],hand:[`zip`],maxBeats:10,rotate:!1,goals:[{t:`beats`,n:2},{t:`safe`}],intro:`Zip stays put. It pops the first toy it sees, every beat.`},{id:`c1-05`,name:`Friendly Fire`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`pin`,team:`E`,x:2,y:0,dir:$},{kind:`pin`,team:`E`,x:2,y:1,dir:$}],hand:[`zip`,`bonk`],maxBeats:10,rotate:!1,goals:[{t:`spare`,n:1},{t:`beats`,n:2}],intro:`Zip pops any toy. Friends too.`},{id:`c1-06`,name:`First Strike`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`pin`,team:`E`,x:0,y:0,dir:$},{kind:`zip`,team:`E`,x:2,y:0,dir:$},{kind:`pin`,team:`E`,x:4,y:0,dir:$}],hand:[`bonk`,`bonk`,`zip`],maxBeats:12,rotate:!1,goals:[{t:`beats`,n:4},{t:`safe`}],intro:`Your toys act first. Win the duel.`},{id:`c1-07`,name:`Trip Wire`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`pin`,team:`E`,x:2,y:0,dir:$},{kind:`zip`,team:`E`,x:0,y:2,dir:dh}],hand:[`bonk`,`bonk`],maxBeats:10,rotate:!1,goals:[{t:`beats`,n:4},{t:`safe`}],intro:`A zip that faces sideways guards its whole row.`},{id:`c1-08`,name:`Crossfire`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`bonk`,team:`E`,x:1,y:0,dir:$},{kind:`bonk`,team:`E`,x:3,y:0,dir:$},{kind:`zip`,team:`E`,x:0,y:2,dir:dh}],hand:[`bonk`,`bonk`],maxBeats:10,rotate:!1,goals:[{t:`beats`,n:3},{t:`safe`}],intro:`Grumps pop each other too. Let them.`},{id:`c1-09`,name:`Decoy`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`zip`,team:`E`,x:2,y:1,dir:$},{kind:`zip`,team:`E`,x:2,y:2,dir:$}],hand:[`bonk`,`zip`],maxBeats:10,rotate:!1,goals:[{t:`beats`,n:2},{t:`chain`,n:1}]},{id:`c1-10`,name:`Showdown`,w:5,h:8,map:[`.....`,`.....`,`.....`,`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`bonk`,team:`E`,x:1,y:0,dir:$},{kind:`bonk`,team:`E`,x:3,y:0,dir:$},{kind:`zip`,team:`E`,x:2,y:1,dir:$},{kind:`zip`,team:`E`,x:2,y:2,dir:$},{kind:`zip`,team:`E`,x:0,y:3,dir:dh}],hand:[`bonk`,`zip`,`bonk`,`bonk`,`bonk`],maxBeats:12,rotate:!1,goals:[{t:`spare`,n:1},{t:`beats`,n:4}]}]},{id:`c2`,name:`Workshop`,theme:`workshop`,starsToOpen:8,levels:[{id:`c2-01`,name:`Shove`,w:5,h:5,map:[`.....`,`.....`,`.....`,`.....`,`ooooo`],pieces:[{kind:`bonk`,team:`E`,x:2,y:0,dir:$}],hand:[`shove`],maxBeats:8,rotate:!1,goals:[{t:`beats`,n:4},{t:`safe`}],intro:`Shove pushes. Its plate stops hits from the front.`},{id:`c2-02`,name:`Side Door`,w:5,h:5,map:[`.....`,`.....`,`.....`,`.....`,`ooooo`],pieces:[{kind:`shove`,team:`E`,x:2,y:0,dir:$}],hand:[`zip`],maxBeats:8,rotate:!0,goals:[{t:`beats`,n:5},{t:`safe`}],intro:`Tap an arrow to turn your toy.`},{id:`c2-03`,name:`Overboard`,w:5,h:5,map:[`.....`,`.....`,`.....`,`oo...`,`oo...`],pieces:[{kind:`pin`,team:`E`,x:2,y:3,dir:$},{kind:`pin`,team:`E`,x:3,y:3,dir:$}],hand:[`shove`],maxBeats:8,rotate:!0,goals:[{t:`beats`,n:3},{t:`safe`}]},{id:`c2-04`,name:`Cover`,w:5,h:5,map:[`.....`,`.....`,`.....`,`.....`,`.ooo.`],pieces:[{kind:`zip`,team:`E`,x:2,y:1,dir:$},{kind:`pin`,team:`E`,x:2,y:2,dir:$},{kind:`block`,team:`N`,x:2,y:3,dir:$}],hand:[`zip`],maxBeats:8,rotate:!0,goals:[{t:`beats`,n:2},{t:`safe`}],intro:`A block breaks when hit.`},{id:`c2-05`,name:`Fist`,w:5,h:6,map:[`.....`,`.. ..`,`.....`,`.....`,`.....`,`ooooo`],pieces:[{kind:`bonk`,team:`E`,x:2,y:2,dir:$},{kind:`pin`,team:`E`,x:2,y:4,dir:$}],hand:[`shove`,`bonk`],maxBeats:10,rotate:!0,goals:[{t:`spare`,n:1},{t:`beats`,n:3}],intro:`Pushed into a hole, a toy falls.`},{id:`c2-06`,name:`Wait`,w:5,h:5,map:[`.....`,`.....`,`.....`,`o.o.o`,`o#o#o`],pieces:[{kind:`shove`,team:`E`,x:1,y:1,dir:$},{kind:`shove`,team:`E`,x:3,y:1,dir:$}],hand:[`shove`,`zip`],maxBeats:10,rotate:!0,goals:[{t:`spare`,n:1},{t:`safe`}],intro:`Nothing walks through a wall.`},{id:`c2-07`,name:`Tank`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`.....`,`ooooo`],pieces:[{kind:`shove`,team:`E`,x:1,y:3,dir:$},{kind:`zip`,team:`E`,x:2,y:3,dir:$},{kind:`shove`,team:`E`,x:3,y:3,dir:$}],hand:[`shove`,`zip`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:5},{t:`safe`}]},{id:`c2-08`,name:`Sweep`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`pin`,team:`E`,x:4,y:0,dir:$},{kind:`pin`,team:`E`,x:3,y:1,dir:$},{kind:`pin`,team:`E`,x:2,y:2,dir:$},{kind:`pin`,team:`E`,x:1,y:3,dir:$}],hand:[`shove`,`zip`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:4},{t:`safe`}]},{id:`c2-09`,name:`Hijack`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`.....`,`ooooo`],pieces:[{kind:`pin`,team:`E`,x:1,y:0,dir:$},{kind:`pin`,team:`E`,x:3,y:0,dir:$},{kind:`pin`,team:`E`,x:0,y:1,dir:$},{kind:`pin`,team:`E`,x:4,y:1,dir:$},{kind:`pin`,team:`E`,x:1,y:2,dir:$},{kind:`pin`,team:`E`,x:3,y:2,dir:$},{kind:`zip`,team:`E`,x:1,y:4,dir:fh},{kind:`zip`,team:`E`,x:3,y:4,dir:dh}],hand:[`shove`,`shove`,`zip`],maxBeats:10,rotate:!0,goals:[{t:`spare`,n:1},{t:`safe`}]},{id:`c2-10`,name:`Split Sweep`,w:5,h:7,map:[`.....`,`.....`,`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`pin`,team:`E`,x:1,y:0,dir:$},{kind:`pin`,team:`E`,x:3,y:0,dir:$},{kind:`pin`,team:`E`,x:0,y:1,dir:$},{kind:`pin`,team:`E`,x:4,y:1,dir:$},{kind:`pin`,team:`E`,x:1,y:2,dir:$},{kind:`pin`,team:`E`,x:3,y:2,dir:$},{kind:`zip`,team:`E`,x:2,y:4,dir:fh}],hand:[`shove`,`zip`],maxBeats:12,rotate:!0,goals:[{t:`beats`,n:5},{t:`safe`}]}]},{id:`c3`,name:`Sandbox`,theme:`sandbox`,starsToOpen:20,levels:[{id:`c3-01`,name:`Kaboom`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`..o..`,`..o..`],pieces:[{kind:`pin`,team:`E`,x:1,y:1,dir:$},{kind:`pin`,team:`E`,x:2,y:1,dir:$},{kind:`pin`,team:`E`,x:3,y:1,dir:$}],hand:[`boom`],maxBeats:8,rotate:!0,goals:[{t:`beats`,n:3},{t:`chain`,n:3}],intro:`Boom blows up when it bumps into something.`},{id:`c3-02`,name:`Powder Keg`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`..o..`,`..o..`],pieces:[{kind:`pin`,team:`E`,x:2,y:0,dir:$},{kind:`pin`,team:`E`,x:1,y:1,dir:$},{kind:`keg`,team:`N`,x:2,y:1,dir:$},{kind:`pin`,team:`E`,x:3,y:1,dir:$}],hand:[`zip`],maxBeats:8,rotate:!0,goals:[{t:`beats`,n:1},{t:`safe`}],intro:`Kegs blow up when hit.`},{id:`c3-03`,name:`Fuse`,w:5,h:5,map:[`.....`,`.....`,`.....`,`.....`,`.ooo.`],pieces:[{kind:`pin`,team:`E`,x:0,y:0,dir:$},{kind:`pin`,team:`E`,x:4,y:0,dir:$},{kind:`keg`,team:`N`,x:1,y:1,dir:$},{kind:`keg`,team:`N`,x:3,y:1,dir:$},{kind:`keg`,team:`N`,x:2,y:2,dir:$}],hand:[`zip`,`zip`],maxBeats:8,rotate:!0,goals:[{t:`spare`,n:1},{t:`chain`,n:5}],intro:`One blast sets off the next keg.`},{id:`c3-04`,name:`March`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`.....`,`ooooo`],pieces:[{kind:`bonk`,team:`E`,x:1,y:0,dir:$},{kind:`bonk`,team:`E`,x:2,y:0,dir:$},{kind:`bonk`,team:`E`,x:3,y:0,dir:$}],hand:[`boom`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:3},{t:`chain`,n:3}],intro:`Trade one boom for three Grumps.`},{id:`c3-05`,name:`Plate Up`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`.....`,`ooooo`],pieces:[{kind:`boom`,team:`E`,x:2,y:0,dir:$},{kind:`pin`,team:`E`,x:1,y:2,dir:$},{kind:`pin`,team:`E`,x:3,y:2,dir:$}],hand:[`shove`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:3},{t:`safe`}],intro:`A plate blocks a blast from the front.`},{id:`c3-06`,name:`Bait`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`.....`,`ooooo`],pieces:[{kind:`zip`,team:`E`,x:1,y:3,dir:$},{kind:`zip`,team:`E`,x:3,y:3,dir:$},{kind:`bonk`,team:`E`,x:0,y:4,dir:$},{kind:`keg`,team:`N`,x:2,y:4,dir:$},{kind:`bonk`,team:`E`,x:4,y:4,dir:$}],hand:[`boom`,`zip`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:1},{t:`chain`,n:4}],intro:`A boom also blows up when it gets hit.`},{id:`c3-07`,name:`Keg Ring`,w:5,h:8,map:[`.....`,`.....`,`.....`,`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`pin`,team:`E`,x:2,y:0,dir:$},{kind:`boom`,team:`E`,x:2,y:1,dir:$},{kind:`keg`,team:`N`,x:1,y:2,dir:$},{kind:`keg`,team:`N`,x:3,y:2,dir:$},{kind:`keg`,team:`N`,x:0,y:3,dir:$},{kind:`keg`,team:`N`,x:4,y:3,dir:$},{kind:`zip`,team:`E`,x:1,y:4,dir:$},{kind:`zip`,team:`E`,x:3,y:4,dir:$}],hand:[`boom`,`shove`],maxBeats:12,rotate:!0,goals:[{t:`spare`,n:1},{t:`beats`,n:6}]},{id:`c3-08`,name:`Domino`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`.....`,`ooooo`],pieces:[{kind:`boom`,team:`E`,x:2,y:0,dir:$},{kind:`zip`,team:`E`,x:0,y:2,dir:$},{kind:`zip`,team:`E`,x:4,y:2,dir:$},{kind:`keg`,team:`N`,x:2,y:3,dir:$}],hand:[`boom`,`boom`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:3},{t:`chain`,n:5}]},{id:`c3-09`,name:`Delivery`,w:5,h:6,map:[`.....`,`..#..`,`.....`,`.....`,`.....`,`ooooo`],pieces:[{kind:`zip`,team:`E`,x:0,y:1,dir:dh},{kind:`zip`,team:`E`,x:4,y:1,dir:fh},{kind:`keg`,team:`N`,x:1,y:3,dir:$},{kind:`zip`,team:`E`,x:2,y:3,dir:$},{kind:`keg`,team:`N`,x:3,y:3,dir:$}],hand:[`shove`,`shove`,`shove`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:3},{t:`chain`,n:2}]},{id:`c3-10`,name:`Powder Train`,w:5,h:8,map:[`.....`,`.....`,`.....`,`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`pin`,team:`E`,x:0,y:0,dir:$},{kind:`pin`,team:`E`,x:1,y:0,dir:$},{kind:`pin`,team:`E`,x:2,y:0,dir:$},{kind:`pin`,team:`E`,x:3,y:0,dir:$},{kind:`pin`,team:`E`,x:4,y:0,dir:$},{kind:`keg`,team:`N`,x:2,y:1,dir:$},{kind:`keg`,team:`N`,x:1,y:3,dir:$},{kind:`keg`,team:`N`,x:3,y:3,dir:$}],hand:[`shove`,`shove`,`boom`],maxBeats:12,rotate:!0,goals:[{t:`chain`,n:10},{t:`beats`,n:5}]}]},{id:`c4`,name:`Attic`,theme:`attic`,starsToOpen:34,levels:[{id:`c4-01`,name:`Leapfrog`,w:3,h:5,map:[`...`,`...`,`. .`,`.o.`,`.o.`],pieces:[{kind:`shove`,team:`E`,x:1,y:1,dir:$}],hand:[`hop`],maxBeats:6,rotate:!0,goals:[{t:`beats`,n:1},{t:`safe`}],intro:`Hop leaps two tiles and squashes what it lands on.`},{id:`c4-02`,name:`Spin`,w:5,h:5,map:[`.....`,`.....`,`.....`,`.....`,`.ooo.`],pieces:[{kind:`pin`,team:`E`,x:2,y:0,dir:$},{kind:`pin`,team:`E`,x:0,y:4,dir:$},{kind:`pin`,team:`E`,x:4,y:4,dir:$}],hand:[`twirl`],maxBeats:8,rotate:!0,goals:[{t:`beats`,n:3},{t:`safe`}],intro:`Twirl pops what it sees, then turns right.`},{id:`c4-03`,name:`Look Away`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`.ooo.`,`.ooo.`],pieces:[{kind:`pin`,team:`E`,x:2,y:0,dir:$},{kind:`pin`,team:`E`,x:2,y:1,dir:$},{kind:`pin`,team:`E`,x:0,y:5,dir:$},{kind:`pin`,team:`E`,x:4,y:5,dir:$}],hand:[`twirl`,`zip`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:3},{t:`spare`,n:1}],intro:`Twirl pops friends too. Mind where it looks.`},{id:`c4-04`,name:`Plate Hop`,w:5,h:8,map:[`.....`,`.....`,`.....`,`..o..`,`..o..`,`..o..`,`..o..`,`..o..`],pieces:[{kind:`shove`,team:`E`,x:2,y:0,dir:$}],hand:[`hop`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:2},{t:`safe`}]},{id:`c4-05`,name:`Crowned`,w:5,h:6,map:[`.....`,`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`bonk`,team:`E`,x:0,y:0,dir:$},{kind:`bonk`,team:`E`,x:2,y:0,dir:$,crown:!0},{kind:`bonk`,team:`E`,x:4,y:0,dir:$}],hand:[`bonk`,`bonk`],maxBeats:10,rotate:!0,goals:[{t:`spare`,n:1},{t:`safe`}],intro:`Knock out the crowned Grump to win.`},{id:`c4-06`,name:`Own Goal`,w:5,h:5,map:[`.....`,`.....`,`.....`,`.....`,`ooooo`],pieces:[{kind:`twirl`,team:`E`,x:2,y:1,dir:$},{kind:`block`,team:`N`,x:2,y:2,dir:$}],hand:[`hop`,`bonk`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:3},{t:`spare`,n:1}]},{id:`c4-07`,name:`Face Off`,w:5,h:5,map:[`.....`,`.o.o.`,`oo.oo`,`.o.o.`,`.....`],pieces:[{kind:`pin`,team:`E`,x:0,y:0,dir:$},{kind:`pin`,team:`E`,x:4,y:0,dir:$},{kind:`twirl`,team:`E`,x:2,y:2,dir:$},{kind:`pin`,team:`E`,x:0,y:4,dir:$},{kind:`pin`,team:`E`,x:4,y:4,dir:$}],hand:[`twirl`,`twirl`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:3},{t:`safe`}]},{id:`c4-08`,name:`Side Shot`,w:5,h:5,map:[`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`pin`,team:`E`,x:1,y:0,dir:$},{kind:`pin`,team:`E`,x:3,y:0,dir:$},{kind:`shove`,team:`E`,x:2,y:1,dir:$},{kind:`shove`,team:`E`,x:2,y:2,dir:$}],hand:[`hop`,`twirl`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:4},{t:`safe`}]},{id:`c4-09`,name:`Plate Lock`,w:5,h:8,map:[`.....`,`.....`,`.....`,`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`shove`,team:`E`,x:1,y:3,dir:$},{kind:`shove`,team:`E`,x:3,y:3,dir:$,crown:!0},{kind:`shove`,team:`E`,x:1,y:4,dir:uh},{kind:`shove`,team:`E`,x:3,y:4,dir:uh}],hand:[`zip`,`hop`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:5},{t:`safe`}]},{id:`c4-10`,name:`King Grump`,w:5,h:8,map:[`.....`,`.....`,`.....`,`.....`,`.....`,`.....`,`ooooo`,`ooooo`],pieces:[{kind:`pin`,team:`E`,x:2,y:0,dir:$,crown:!0},{kind:`shove`,team:`E`,x:1,y:2,dir:$},{kind:`shove`,team:`E`,x:2,y:2,dir:$},{kind:`shove`,team:`E`,x:3,y:2,dir:$},{kind:`twirl`,team:`E`,x:2,y:3,dir:$}],hand:[`hop`,`twirl`,`zip`],maxBeats:10,rotate:!0,goals:[{t:`beats`,n:5},{t:`spare`,n:1}]}]}],mh=ph.flatMap(e=>e.levels.map(t=>{let n=t.solution??lh[t.id];return{...t,theme:t.theme??e.theme,...n?{solution:n}:{}}})),hh=`ttb.save.v1`;function gh(){return{v:1,levels:{},gauntlet:{bestScore:0,bestRound:0,runs:0},daily:{streak:0,history:{}},settings:{sfx:!0,music:!0,haptics:!0,quality:`auto`,speed:1},seenKinds:[]}}function _h(){return{won:!1,skipped:!1,stars:[!1,!1,!1],fails:0}}var vh=e=>typeof e==`object`&&!!e&&!Array.isArray(e),yh=(e,t)=>typeof e==`boolean`?e:t,bh=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t;function xh(e){let t=gh();if(!e)return t;let n;try{n=JSON.parse(e)}catch{return t}if(!vh(n)||n.v!==1)return t;if(vh(n.levels))for(let[e,r]of Object.entries(n.levels)){if(!vh(r))continue;let n=Array.isArray(r.stars)?r.stars:[],i={won:yh(r.won,!1),skipped:yh(r.skipped,!1),stars:[n[0]===!0,n[1]===!0,n[2]===!0],fails:Math.max(0,Math.floor(bh(r.fails,0)))};typeof r.bestBeats==`number`&&Number.isFinite(r.bestBeats)&&(i.bestBeats=r.bestBeats),t.levels[e]=i}if(vh(n.gauntlet)){let e=n.gauntlet;t.gauntlet={bestScore:bh(e.bestScore,0),bestRound:bh(e.bestRound,0),runs:bh(e.runs,0)}}if(vh(n.daily)){let e=n.daily;if(t.daily.streak=bh(e.streak,0),typeof e.lastSolved==`string`&&(t.daily.lastSolved=e.lastSolved),vh(e.history))for(let[n,r]of Object.entries(e.history))vh(r)&&(t.daily.history[n]={tries:bh(r.tries,0),solved:yh(r.solved,!1)})}if(vh(n.settings)){let e=n.settings,r=e.quality;t.settings={sfx:yh(e.sfx,!0),music:yh(e.music,!0),haptics:yh(e.haptics,!0),quality:r===`low`||r===`medium`||r===`high`||r===`auto`?r:`auto`,speed:e.speed===2?2:1}}return Array.isArray(n.seenKinds)&&(t.seenKinds=n.seenKinds.filter(e=>typeof e==`string`&&r.includes(e))),t}var Sh=class{m=new Map;getItem(e){return this.m.get(e)??null}setItem(e,t){this.m.set(e,t)}removeItem(e){this.m.delete(e)}};function Ch(){try{let e=globalThis.localStorage;if(!e)return new Sh;let t=`__ttb_probe__`;return e.setItem(t,`1`),e.removeItem(t),e}catch{return new Sh}}var wh=class{data;store;constructor(e=Ch()){this.store=e;let t=null;try{t=e.getItem(hh)}catch{this.store=new Sh}this.data=xh(t)}write(){let e=JSON.stringify(this.data);try{this.store.setItem(hh,e)}catch{this.store=new Sh,this.store.setItem(hh,e)}}level(e){return this.data.levels[e]??_h()}setLevel(e,t){this.data.levels[e]=t,this.write()}reset(){let e=this.data.settings;this.data=gh(),this.data.settings=e,this.write()}};function Th(e){return e?e.stars.filter(Boolean).length:0}function Eh(e){let t=0;for(let n of Object.values(e.levels))t+=Th(n);return t}function Dh(e,t){return Eh(t)>=e.starsToOpen}function Oh(e,t,n){let r=e.flatMap(e=>e.levels.map(t=>({l:t,c:e}))),i=r.findIndex(e=>e.l.id===t);if(i<0||!Dh(r[i].c,n))return!1;if(i===0)return!0;let a=n.levels[r[i-1].l.id];return!!a&&(a.won||a.skipped)}function kh(e,t,n){let r=e.flatMap(e=>e.levels),i=r.findIndex(e=>e.id===t),a=i>=0?r[i+1]:void 0;return a&&Oh(e,a.id,n)?a:null}function Ah(e,t){for(let n of e)for(let r of n.levels){if(!Oh(e,r.id,t))continue;let n=t.levels[r.id];if(!n||!n.won&&!n.skipped)return r.id}return null}function jh(e,t,n){let r=e??_h();return{...r,won:!0,stars:[!0,r.stars[1]||!!t[0],r.stars[2]||!!t[1]],bestBeats:r.bestBeats===void 0?n:Math.min(r.bestBeats,n)}}function Mh(e){let t=e??_h();return{...t,fails:t.fails+1}}function Nh(e,t){return{chapters:e.map(n=>{let r=!Dh(n,t);return{name:n.name,stars:n.levels.reduce((e,n)=>e+Th(t.levels[n.id]),0),totalStars:n.levels.length*3,locked:r,unlockStars:n.starsToOpen,levels:n.levels.map(n=>({id:n.id,name:n.name,stars:Th(t.levels[n.id]),locked:!Oh(e,n.id,t)}))}})}}var Ph=[`spring`,`doover`,`peek`,`lucky`,`clock`,`goldkey`,`whistle`],Fh=new Set([`spring`]);function Ih(e){return Math.min(10,2+Math.floor((e-1)*.75))}function Lh(e){let t=100+20*e.tier;return e.flawless&&(t*=2),t*=1+Math.min(1,.1*Math.max(0,e.streak)),t+=50*Math.max(0,e.spare),t+=25*Math.max(0,e.maxChain-1),e.goldKey&&(t*=1.5),Math.round(t)}function Rh(e){return e>0&&e%3==0}function zh(e,t){let n=Ph.filter(t=>Fh.has(t)||!e.includes(t));for(let e=n.length-1;e>0;e--){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return n.slice(0,3)}function Bh(e,t){let n=t.filter(e=>e===`lucky`).length,r=t.filter(e=>e===`clock`).length;return{...e,hand:[...e.hand,...Array(n).fill(`bonk`)],maxBeats:e.maxBeats+3*r}}function Vh(e){return e.toysPlaced===0&&e.owned.includes(`peek`)&&!e.peekUsed?{heartLost:!1,usedDoOver:!1,usedPeek:!0}:e.owned.includes(`doover`)&&!e.doOverUsed?{heartLost:!1,usedDoOver:!0,usedPeek:!1}:{heartLost:!0,usedDoOver:!1,usedPeek:!1}}function Hh(e,t){let n=(e^Math.imul(t,2654435761))>>>0;return n=Math.imul(n^n>>>16,2246822507)>>>0,n=Math.imul(n^n>>>13,3266489909)>>>0,(n^n>>>16)>>>0}function Uh(e=new Date){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function Wh(e){let[t,n,r]=e.split(`-`).map(Number);return Uh(new Date(t,n-1,r-1))}function Gh(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Kh(e,t){return Gh(e)+t>>>0}function qh(e){let t=0;for(let n=1;n<e.length;n++){let r=e[n],i=e[t],a=r.level.hand.length,o=i.level.hand.length;(a>o||a===o&&(r.winRate??1)<(i.winRate??1))&&(t=n)}return t}function Jh(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`})}function Yh(e,t){let n=e.daily.history[t]??{tries:0,solved:!1};return n.solved||(n.tries+=1),e.daily.history[t]=n,n.tries}function Xh(e,t){let n=e.daily.history[t]??{tries:1,solved:!1};if(!n.solved){n.solved=!0;let r=e.daily.lastSolved;e.daily.streak=r===Wh(t)?e.daily.streak+1:r===t?e.daily.streak:1,e.daily.lastSolved=t}return e.daily.history[t]=n,{tries:n.tries,streak:e.daily.streak}}function Zh(e,t){let n=e.daily.lastSolved;return n===t||n===Wh(t)?e.daily.streak:0}var Qh=class e{s;constructor(e){this.s=$h(e)}next(){let e=this.s=this.s+1831565813|0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}int(e){return Math.floor(this.next()*e)}range(e,t){return e+this.int(t-e+1)}chance(e){return this.next()<e}pick(e){return e[this.int(e.length)]}shuffle(e){for(let t=e.length-1;t>0;t--){let n=this.int(t+1),r=e[t];e[t]=e[n],e[n]=r}return e}fork(){return new e(Math.floor(this.next()*4294967296))}};function $h(e){let t=Math.floor(e)^2654435769;return t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^t>>>16}function eg(...e){let t=305419896;for(let n of e)t=$h(t^Math.imul(Math.floor(n)|0,668265261));return t}var tg=class{level;keep;plans=0;wins=0;emptyWins=!1;minToys=null;minBeats=null;goalsAchievable;winBeats=[];winChains=[];safeWins=0;maxSpare=0;footprints=null;byToys=[];ex=[];constructor(e,t){this.level=e,this.keep=t,this.goalsAchievable=e.goals.map(()=>!1)}add(e,t,n,r,i){this.plans++;let a=this.byToys[t]??={plans:0,wins:0};if(a.plans++,e.outcome!==0)return!1;this.wins++,a.wins++,t===0&&(this.emptyWins=!0),(this.minToys===null||t<this.minToys)&&(this.minToys=t),(this.minBeats===null||e.beats<this.minBeats)&&(this.minBeats=e.beats),this.winBeats[e.beats]=(this.winBeats[e.beats]??0)+1,this.winChains[e.maxChain]=(this.winChains[e.maxChain]??0)+1,e.toysLost===0&&this.safeWins++;let o=this.level.hand.length-t;o>this.maxSpare&&(this.maxSpare=o);let s=e.goalsMet(this.level.goals);for(let e=0;e<s.length;e++)s[e]&&(this.goalsAchievable[e]=!0);if(this.footprints&&this.footprints.size<5e3){let e=[];for(let i=0;i<t;i++)e.push(`${this.level.hand[n[i]]}@${r[i]}`);this.footprints.add(e.sort().join(` `))}return this.keep>0&&this.offerExample(e,t,n,r,i),!0}offerExample(e,t,n,r,i){let a=this.ex,o=(e,t)=>e.toysUsed===t.toysUsed?e.beats>t.beats:e.toysUsed>t.toysUsed,s={toysUsed:t,beats:e.beats};if(a.length>=this.keep&&!o(a[a.length-1],s))return;let c=this.level.w,l=this.level.hand,u=[];for(let e=0;e<t;e++)u.push(`${l[n[e]]}@${r[e]}`);let d=u.sort().join(` `),f=a.findIndex(e=>e.key===d);if(f>=0){if(!o(a[f],s))return;a.splice(f,1)}let p=[];for(let e=0;e<t;e++)p.push({slot:n[e],x:r[e]%c,y:Math.floor(r[e]/c),dir:i[e]});let m={placements:p,beats:e.beats,toysUsed:t,stats:e.stats(),key:d},h=a.findIndex(e=>o(e,s));h<0&&(h=a.length),a.splice(h,0,m),a.length>this.keep&&a.pop()}report(e){return{complete:e,plans:this.plans,wins:this.wins,winRate:this.plans?this.wins/this.plans:0,emptyWins:this.emptyWins,minToys:this.minToys,minBeats:this.minBeats,goalsAchievable:[...this.goalsAchievable],examples:this.ex.map(({key:e,...t})=>t),winBeats:Array.from(this.winBeats,e=>e??0),winChains:Array.from(this.winChains,e=>e??0),safeWins:this.safeWins,maxSpare:this.maxSpare,byToys:Array.from(this.byToys,e=>e??{plans:0,wins:0}),...this.footprints?{distinctWins:this.footprints.size}:{}}}},ng=class{level;runner;slots;cells;dirs;pool;nd;constructor(e){this.level=e,this.runner=new b(y(e));let t=e.hand.length;this.slots=new Int32Array(Math.max(1,t)),this.cells=new Int32Array(Math.max(1,t)),this.dirs=new Int32Array(Math.max(1,t)),this.pool=Int32Array.from(this.runner.c.freeZone),this.nd=e.rotate?4:1}runRandom(e,t,n){let r=this.pool,i=r.length;n>i&&(n=i);for(let a=0;a<n;a++){let n=a+e.int(i-a),o=r[a];r[a]=r[n],r[n]=o,this.slots[a]=t[a],this.cells[a]=r[a],this.dirs[a]=this.nd===1?0:e.int(4)}return this.runner.run(n,this.slots,this.cells,this.dirs),n}runEmpty(){this.runner.run(0,this.slots,this.cells,this.dirs)}},rg=400;function ig(e){let t=(e-1)/9;return[.08*(5e-4/.08)**t,.3*(.006/.3)**t]}var ag=e=>Object.entries(e).flatMap(([e,t])=>Array(t).fill(e));function og(e){let t=Math.max(1,Math.min(10,Math.round(e))),n=ig(t),r={tier:t,band:n,samples:Math.min(1e4,Math.max(800,Math.ceil(5/n[0]))),w:5,zoneRows:2,mirror:.4};switch(t){case 1:return{...r,h:[5,5],walls:[0,0],holes:[0,0],grumps:[1,2],grumpKinds:ag({bonk:3,pin:2}),props:[0,0],propKinds:[],hand:[2,2],handKinds:[`bonk`],rotate:!1,maxBeats:8,theme:`playmat`};case 2:return{...r,h:[5,6],walls:[0,0],holes:[0,0],grumps:[2,3],grumpKinds:ag({bonk:3,pin:2}),props:[0,0],propKinds:[],hand:[2,2],handKinds:[`bonk`],rotate:!1,maxBeats:9,theme:`playmat`};case 3:return{...r,h:[6,6],walls:[0,1],holes:[0,0],grumps:[2,3],grumpKinds:ag({bonk:3,pin:2,zip:2}),props:[0,0],propKinds:[],hand:[2,2],handKinds:[`bonk`,`zip`],rotate:!1,maxBeats:10,theme:`playmat`};case 4:return{...r,h:[6,6],walls:[1,2],holes:[0,1],grumps:[3,4],grumpKinds:ag({bonk:3,pin:1,zip:2,shove:2}),props:[0,1],propKinds:[`block`],hand:[2,3],handKinds:[`bonk`,`zip`,`shove`],rotate:!1,maxBeats:10,theme:`workshop`};case 5:return{...r,h:[6,7],walls:[1,2],holes:[1,2],grumps:[3,4],grumpKinds:ag({bonk:3,pin:1,zip:2,shove:2}),props:[0,1],propKinds:[`block`],hand:[2,3],handKinds:[`bonk`,`zip`,`shove`],rotate:!0,maxBeats:11,theme:`workshop`};case 6:return{...r,h:[7,7],walls:[1,2],holes:[0,2],grumps:[3,5],grumpKinds:ag({bonk:3,pin:1,zip:2,shove:2,boom:2}),props:[1,2],propKinds:ag({keg:2,block:1}),hand:[3,3],handKinds:[`bonk`,`zip`,`shove`,`boom`],rotate:!0,maxBeats:12,theme:`sandbox`};case 7:return{...r,h:[7,7],walls:[1,3],holes:[1,2],grumps:[4,5],grumpKinds:ag({bonk:3,pin:1,zip:2,shove:2,boom:1,hop:2}),props:[1,2],propKinds:ag({keg:2,block:1}),hand:[3,3],handKinds:[`bonk`,`zip`,`shove`,`boom`,`hop`],rotate:!0,maxBeats:12,theme:`sandbox`};case 8:return{...r,h:[7,8],walls:[1,3],holes:[1,3],grumps:[4,6],grumpKinds:ag({bonk:3,pin:1,zip:2,shove:2,boom:1,hop:2}),props:[1,2],propKinds:ag({keg:2,block:1}),hand:[3,4],handKinds:[`bonk`,`zip`,`shove`,`boom`,`hop`],rotate:!0,maxBeats:13,theme:`sandbox`};case 9:return{...r,h:[8,8],walls:[2,3],holes:[1,3],grumps:[5,6],grumpKinds:ag({bonk:3,pin:1,zip:2,shove:2,boom:1,hop:2,twirl:2}),props:[1,2],propKinds:ag({keg:2,block:1}),hand:[3,4],handKinds:[`bonk`,`zip`,`shove`,`boom`,`hop`,`twirl`],rotate:!0,maxBeats:14,theme:`attic`};default:return{...r,h:[8,8],walls:[2,4],holes:[1,3],grumps:[5,7],grumpKinds:ag({bonk:3,pin:1,zip:2,shove:2,boom:1,hop:2,twirl:2}),props:[1,3],propKinds:ag({keg:2,block:1}),hand:[4,4],handKinds:[`bonk`,`zip`,`shove`,`boom`,`hop`,`twirl`],rotate:!0,maxBeats:14,theme:`attic`}}}var sg=new Set([`bonk`,`boom`,`shove`,`hop`]);function cg(n,r){let i=r.w,a=n.range(r.h[0],r.h[1]),o=a-r.zoneRows,s=n.chance(r.mirror),c=(i-1)/2,l=e=>i-1-e,u=[];for(let e=0;e<a;e++)u.push(Array(i).fill(e>=o?`o`:`.`));let d=[];for(let e=0;e<o;e++)for(let t=0;t<i;t++)(!s||t<=c)&&d.push(e*i+t);n.shuffle(d);let f=new Uint8Array(i*a),p=e=>s&&e%i!==l(e%i)?2:1,m=(e,t)=>e<0||t<0||e>=i||t>=a?` `:u[t][e],h=(e,t)=>{let n=m(e,t);return n===`.`||n===`o`},g=(e,t)=>{let n=e;for(let e of d){if(n<=0)break;if(f[e]||p(e)>n)continue;f[e]=1;let r=e%i,a=Math.floor(e/i);u[a][r]=t,s&&(u[a][l(r)]=t),n-=p(e)}};g(n.range(r.walls[0],r.walls[1]),`#`),g(n.range(r.holes[0],r.holes[1]),` `);let _=(e,t)=>{if(s&&t===l(t))return 2;let r=()=>n.chance(.5)?1:3;return sg.has(e)?n.chance(.75)?2:r():e===`zip`?n.chance(.55)?2:t<c?1:t>c?3:r():e===`twirl`?n.int(4):2},v=(n,r,o,s)=>{let c=e[s],l=t[s];if(n===`hop`)return m(r+c,o+l)!==`#`&&h(r+2*c,o+2*l);if(sg.has(n))return h(r+c,o+l);if(n===`zip`){for(let e=r+c,t=o+l;m(e,t)!==`#`&&e>=0&&t>=0&&e<i&&t<a;e+=c,t+=l)if(h(e,t))return!0;return!1}return!0},y=[],b=(e,t,r)=>{let a=e,o=0;for(;a>0&&o<8;){let e=n.pick(t),c=!1;for(let t of d){if(f[t]||p(t)>a)continue;let n=t%i,o=Math.floor(t/i);if(u[o][n]!==`.`)continue;let d=null;for(let t=0;t<4&&d===null;t++){let t=_(e,n);v(e,n,o,t)&&(d=t)}if(d!==null){f[t]=1,y.push({kind:e,team:r,x:n,y:o,dir:d}),s&&n!==l(n)&&y.push({kind:e,team:r,x:l(n),y:o,dir:d===1?3:d===3?1:d}),a-=p(t),c=!0;break}}c||o++}};return b(n.range(r.grumps[0],r.grumps[1]),r.grumpKinds,`E`),r.propKinds.length&&b(n.range(r.props[0],r.props[1]),r.propKinds,`N`),{map:u.map(e=>e.join(``)),pieces:y}}function lg(e,t,n){if(t===0)return[0,1];let r=e/t,i=n*n,a=1+i/t,o=(r+i/(2*t))/a,s=n*Math.sqrt(r*(1-r)/t+i/(4*t*t))/a;return[Math.max(0,o-s),Math.min(1,o+s)]}function ug(e,t,n,r){let i=e.level.hand.length,a=Int32Array.from({length:i},(e,t)=>t),[o,s]=n.band,c=Math.max(100,Math.ceil(n.samples/10)),l=0,u=0;for(;l<n.samples;){let d=Math.min(n.samples,l+c);for(;l<d;l++){let n=e.runRandom(t,a,i);r.add(e.runner,n,e.slots,e.cells,e.dirs)&&u++}if(lg(u,l,2.3)[0]>s)return{verdict:`high`,n:l,wins:u};if(lg(u,l,1.6)[1]<o)return{verdict:`low`,n:l,wins:u}}let d=u/l;return{verdict:d>s?`high`:d>=o&&u>=2?`ok`:`low`,n:l,wins:u}}function dg(e,t,n,r,i){let a=e.level.hand.length,o=new Int32Array(a-1),s=Array(a).fill(0),c=Array(a).fill(0),l=0;for(let n=0;n<r;n++){let r=n%a;for(let e=0,t=0;e<a;e++)e!==r&&(o[t++]=e);let u=e.runRandom(t,o,a-1);c[r]++,i.add(e.runner,u,e.slots,e.cells,e.dirs)&&(s[r]++,l++)}let u=-1,d=.25*n;for(let e=0;e<a;e++){let t=s[e]/Math.max(1,c[e]);s[e]>=2&&t>d&&(u=e,d=t)}return{drop:u,plans:r,wins:l}}function fg(e,t){let n=t.wins;if(!n)return[];let r=[],i=0,a=t.minBeats??0;for(let e=0;e<t.winBeats.length;e++){let r=t.winBeats[e]??0;if(r){if(i===0||(i+r)/n<=.5)i+=r,a=e;else break}}r.push({g:{t:`beats`,n:a},share:i/n}),t.safeWins>0&&r.push({g:{t:`safe`},share:t.safeWins/n});for(let e=4;e>=2;e--){let i=0;for(let n=e;n<t.winChains.length;n++)i+=t.winChains[n]??0;if(i>=3){r.push({g:{t:`chain`,n:e},share:i/n});break}}t.spareWins>0&&r.push({g:{t:`spare`,n:1},share:t.spareWins/n});let o=e.shuffle(r.filter(e=>e.share<=.6)),s=r.filter(e=>e.share>.6).sort((e,t)=>e.share-t.share);return[...o,...s].slice(0,2).map(e=>e.g)}function pg(e,t){let n=og(t),r=new Qh(eg(e,n.tier,32343)),i={},a=e=>i[e]=(i[e]??0)+1,o=0,s=0,c=null;for(;o<rg;){let{map:t,pieces:l}=cg(r,n),u=r.range(n.hand[0],n.hand[1]),d=Array.from({length:u},()=>r.pick(n.handKinds)),f=l.filter(e=>e.team===`E`).length,p={id:`gen-t${n.tier}-${e}`,name:`Tier ${n.tier} #${e}`,w:n.w,h:t.length,map:t,pieces:l,hand:d,maxBeats:n.maxBeats,rotate:n.rotate,goals:[],theme:n.theme};o++;let m=new ng(p);if(m.runEmpty(),s++,m.runner.outcome===0)a(`empty-wins`);else if(m.runner.grumpsOut*3>f)a(`grumps-self-ko`);else for(;;){let t={...p,hand:d},l=new ng(t),u=new tg(t,1),f=ug(l,r,n,u);if(s+=f.n,f.verdict!==`ok`){if(a(f.verdict===`high`?`too-easy`:`too-hard`),f.wins>0){let i=f.wins/f.n,a=Math.abs(Math.log(i/Math.sqrt(n.band[0]*n.band[1])));(!c||a<c.dist)&&(c={result:mg(t,r,u,0,f,n,e),dist:a})}break}let m=f.wins/f.n;if(d.length>=2){let c=new tg(t,0),p=Math.max(400,Math.ceil(f.n/2)),h=dg(l,r,m,p,c);if(s+=p,h.drop>=0){a(`subset-wins`),d=d.filter((e,t)=>t!==h.drop),o++;continue}let g=mg(t,r,u,h.wins,f,n,e);if(g.level.goals.length<2){a(`few-goals`);break}return g.stats.subsetSamples=p,g.stats.subsetWinRate=h.wins/p,hg(g,o,s,i,!0)}let h=mg(t,r,u,0,f,n,e);if(h.level.goals.length<2){a(`few-goals`);break}return hg(h,o,s,i,!0)}}if(c)return hg(c.result,o,s,i,!1);throw Error(`generator found nothing for tier ${n.tier} seed ${e}`)}function mg(e,t,n,r,i,a,o){let s=n.report(!1),c=fg(t,{...s,spareWins:r}),l=s.examples[0]?.placements??[];return{level:{...e,goals:c,solution:l},solution:l,stats:{tier:a.tier,seed:o,winRate:i.wins/i.n,wins:i.wins,samples:i.n,subsetSamples:0,subsetWinRate:0,attempts:0,totalSims:0,band:a.band,rejects:{},accepted:!1}}}function hg(e,t,n,r,i){return e.stats.attempts=t,e.stats.totalSims=n,e.stats.rejects={...r},e.stats.accepted=i,e}var gg="const e=[0,1,0,-1],t=[-1,0,1,0],n={bonk:0,zip:1,boom:2,shove:3,hop:4,twirl:5,pin:6,block:7,keg:8},r=[`bonk`,`zip`,`boom`,`shove`,`hop`,`twirl`,`pin`,`block`,`keg`],i={P:0,E:1,N:2},a=[`P`,`E`,`N`],o=[`bonk`,`shot`,`blast`,`stomp`,`fall`],s=[0,1,0,-1,1,1,-1,-1],c=[-1,0,1,0,-1,1,1,-1];function l(e){let{w:t,h:r}=e,a=new Uint8Array(t*r),o=new Uint8Array(t*r);for(let n=0;n<r;n++){let r=e.map[n]??``;for(let e=0;e<t;e++){let i=r[e]??` `,s=n*t+e;a[s]=i===`#`?1:i===`.`||i===`o`?0:2,i===`o`&&(o[s]=1)}}let s=e.pieces.length,c=new Uint8Array(s),l=new Uint8Array(s),u=new Int16Array(s),d=new Int16Array(s),f=new Uint8Array(s),p=new Uint8Array(s),m=!1,h=new Uint8Array(t*r);e.pieces.forEach((e,a)=>{c[a]=n[e.kind],l[a]=i[e.team],u[a]=e.x,d[a]=e.y,f[a]=e.dir,p[a]=+!!e.crown,e.crown&&e.team===`E`&&(m=!0),e.x>=0&&e.x<t&&e.y>=0&&e.y<r&&(h[e.y*t+e.x]=1)});let g=[];for(let e=0;e<t*r;e++)o[e]&&!h[e]&&g.push(e);let _=new Uint8Array(e.hand.length);return e.hand.forEach((e,t)=>_[t]=n[e]),{level:e,w:t,h:r,terr:a,zone:o,freeZone:g,handKinds:_,nPieces:s,pKind:c,pTeam:l,pX:u,pY:d,pDir:f,pCrown:p,hasCrown:m}}var u=class{c;rec=!1;n=0;nToys=0;kind;team;px;py;dir;alive;isTarget;crown;ids;grid;hist;histHash;qB;qS;qHead=0;qTail=0;resolving=!1;outcome=1;beats=0;maxChain=0;toysLost=0;toysUsed=0;grumpsOut=0;grumpsLeft=0;actor=-1;actKo=0;targetsLeft=0;phases=[];ev=null;curPhase=null;constructor(e){this.c=e;let t=e.level.hand.length+e.nPieces;this.kind=new Uint8Array(t),this.team=new Uint8Array(t),this.px=new Int16Array(t),this.py=new Int16Array(t),this.dir=new Uint8Array(t),this.alive=new Uint8Array(t),this.isTarget=new Uint8Array(t),this.crown=new Uint8Array(t),this.ids=new Int16Array(t),this.grid=new Int16Array(e.w*e.h);let n=Math.max(1,e.level.maxBeats+1);this.hist=new Int32Array(n*Math.max(1,t)),this.histHash=new Int32Array(n),this.qB=new Int32Array(Math.max(1,t)),this.qS=new Int32Array(Math.max(1,t))}run(e,t,n,r){let i=this.c,a=i.w,o=this.grid;o.fill(-1);let s=0;for(let c=0;c<e;c++){let e=t[c],l=n[c];this.kind[s]=i.handKinds[e],this.team[s]=0,this.px[s]=l%a,this.py[s]=l/a|0,this.dir[s]=r[c],this.alive[s]=1,this.crown[s]=0,this.ids[s]=e,this.isTarget[s]=0,o[l]=s,s++}this.nToys=e;let c=0;for(let e=0;e<i.nPieces;e++){let t=i.pTeam[e];this.kind[s]=i.pKind[e],this.team[s]=t,this.px[s]=i.pX[e],this.py[s]=i.pY[e],this.dir[s]=i.pDir[e],this.alive[s]=1,this.crown[s]=i.pCrown[e],this.ids[s]=100+e;let n=+(t===1&&(!i.hasCrown||i.pCrown[e]===1));this.isTarget[s]=n,c+=n,o[i.pY[e]*a+i.pX[e]]=s,s++}this.n=s,this.targetsLeft=c,this.maxChain=0,this.toysLost=0,this.toysUsed=e,this.grumpsOut=0,this.outcome=1,this.beats=i.level.maxBeats,this.rec&&(this.phases=[]);let l=i.level.maxBeats,u=this.kind,d=this.alive,f=!1;for(let t=1;t<=l&&!f;t++){if(this.seenBefore(t-1)){this.outcome=2,this.beats=t-1;break}this.rec&&this.beginPhase(t,`tick`);for(let t=0;t<e;t++)if(d[t]!==0&&(this.act(t),this.targetsLeft===0)){f=!0;break}if(this.rec&&this.endPhase(),f){this.outcome=0,this.beats=t;break}this.rec&&this.beginPhase(t,`tock`);for(let t=e;t<s;t++){if(d[t]===0)continue;let e=u[t];if(e!==6&&e!==7&&e!==8&&(this.act(t),this.targetsLeft===0)){f=!0;break}}this.rec&&this.endPhase(),f&&(this.outcome=0,this.beats=t)}let p=0;for(let t=e;t<s;t++)this.team[t]===1&&d[t]===1&&p++;this.grumpsLeft=p}seenBefore(e){let t=this.n;if(t===0)return e>0;if((e+1)*t>this.hist.length){let e=new Int32Array(this.hist.length*2);e.set(this.hist),this.hist=e;let t=new Int32Array(this.histHash.length*2);t.set(this.histHash),this.histHash=t}let n=this.hist,r=e*t,i=this.c.w,a=0;for(let e=0;e<t;e++){let t=this.alive[e]===1?(this.py[e]*i+this.px[e]<<2)+this.dir[e]+1:0;n[r+e]=t,a=Math.imul(a,31)+t|0}this.histHash[e]=a;for(let i=0;i<e;i++){if(this.histHash[i]!==a)continue;let e=i*t,o=!0;for(let i=0;i<t;i++)if(n[e+i]!==n[r+i]){o=!1;break}if(o)return!0}return!1}beginPhase(e,t){this.curPhase={beat:e,side:t,actions:[],after:[]}}endPhase(){let e=this.curPhase;e.after=this.snapshot(),this.phases.push(e),this.curPhase=null,this.ev=null}snapshot(){let e=Array(this.n);for(let t=0;t<this.n;t++)e[t]={id:this.ids[t],kind:r[this.kind[t]],team:a[this.team[t]],x:this.px[t],y:this.py[t],dir:this.dir[t],alive:this.alive[t]===1,crown:this.crown[t]===1};return e}cell(e){return[this.px[e],this.py[e]]}terrAt(e,t){let n=this.c;return e<0||t<0||e>=n.w||t>=n.h?2:n.terr[t*n.w+e]}act(e){if(this.actor=e,this.actKo=0,this.rec){let t={actor:this.ids[e],events:[]};this.curPhase.actions.push(t),this.ev=t.events}switch(this.kind[e]){case 0:this.actBonk(e);break;case 1:this.actZip(e,this.dir[e],0,!0);break;case 2:this.actBoom(e);break;case 3:this.actShove(e);break;case 4:this.actHop(e);break;case 5:{let t=this.actZip(e,this.dir[e],0,!1);if(this.alive[e]===0)break;let n=this.dir[e],r=n+1&3;this.dir[e]=r,this.rec&&this.ev.push({t:`turn`,s:+!!t,id:this.ids[e],from:n,to:r});break}}this.actKo>this.maxChain&&(this.maxChain=this.actKo)}moveTo(e,t,n,r,i){let a=this.c.w,o=this.px[e],s=this.py[e];this.grid[s*a+o]===e&&(this.grid[s*a+o]=-1),this.grid[n*a+t]=e,this.px[e]=t,this.py[e]=n,this.rec&&this.ev.push({t:`move`,s:i,id:this.ids[e],from:[o,s],to:[t,n],dir:this.dir[e],pushed:r})}bump(e){this.rec&&this.ev.push({t:`bump`,s:0,id:this.ids[e],dir:this.dir[e]})}actBonk(n){let r=this.dir[n],i=this.px[n]+e[r],a=this.py[n]+t[r];if(this.terrAt(i,a)!==0)return this.bump(n);let o=this.grid[a*this.c.w+i];o>=0?(this.rec&&this.ev.push({t:`bonk`,s:0,id:this.ids[n],target:this.ids[o],dir:r}),this.hit(o,0,r,n,1)):this.moveTo(n,i,a,!1,0)}actZip(n,r,i,a){let o=this.c,s=e[r],c=t[r],l=this.px[n],u=this.py[n],d=l+s,f=u+c;for(;d>=0&&f>=0&&d<o.w&&f<o.h;){let e=f*o.w+d,t=o.terr[e];if(t===1)break;if(t===0){let t=this.grid[e];if(t>=0)return this.rec&&this.ev.push({t:`shoot`,s:i,id:this.ids[n],dir:r,from:[l,u],to:[d,f],target:this.ids[t]}),this.hit(t,1,r,n,i+1),!0}d+=s,f+=c}return a&&this.rec&&this.ev.push({t:`idle`,s:i,id:this.ids[n]}),!1}actBoom(n){let r=this.dir[n],i=this.px[n]+e[r],a=this.py[n]+t[r];this.terrAt(i,a)!==0||this.grid[a*this.c.w+i]>=0?this.explode(n,0):this.moveTo(n,i,a,!1,0)}actShove(n){let r=this.c.w,i=this.dir[n],a=e[i],o=t[i],s=this.px[n]+a,c=this.py[n]+o;if(this.terrAt(s,c)!==0)return this.bump(n);if(this.grid[c*r+s]<0){this.moveTo(n,s,c,!1,0);return}let l=s,u=c,d=0;for(;this.terrAt(l,u)===0&&this.grid[u*r+l]>=0;)d++,l+=a,u+=o;let f=this.terrAt(l,u);if(f===1)return this.bump(n);let p=this.rec?this.ev.length:0,m=d-1;if(f===2){let e=s+a*m,t=c+o*m,d=this.grid[t*r+e];this.kill(d),this.rec&&this.ev.push({t:`fall`,s:0,id:this.ids[d],from:[e,t],to:[l,u],dir:i,by:this.ids[n]}),m--}for(;m>=0;m--){let e=s+a*m,t=c+o*m;this.moveTo(this.grid[t*r+e],e+a,t+o,!0,0)}if(this.moveTo(n,s,c,!1,0),this.rec){let e=this.ev,t=e.splice(p).reverse();for(let n of t)e.push(n)}}actHop(n){let r=this.c.w,i=this.dir[n],a=this.px[n],o=this.py[n],s=a+e[i],c=o+t[i],l=s+e[i],u=c+t[i];if(this.terrAt(l,u)!==0||this.terrAt(s,c)===1){this.rec&&this.ev.push({t:`hopfail`,s:0,id:this.ids[n],dir:i});return}let d=u*r+l,f=this.grid[d];this.grid[o*r+a]=-1,this.grid[d]=n,this.px[n]=l,this.py[n]=u,this.rec&&this.ev.push({t:`hop`,s:0,id:this.ids[n],from:[a,o],to:[l,u],dir:i}),f>=0&&this.hit(f,3,-1,n,1)}kill(e){this.alive[e]=0;let t=this.py[e]*this.c.w+this.px[e];this.grid[t]===e&&(this.grid[t]=-1),e!==this.actor&&this.actKo++;let n=this.team[e];n===0?this.toysLost++:n===1&&this.grumpsOut++,this.isTarget[e]===1&&this.targetsLeft--}hit(e,t,n,r,i){let a=this.kind[e];a===3&&n>=0&&n===(this.dir[e]+2&3)?this.rec&&this.ev.push({t:`block`,s:i,id:this.ids[e],cause:o[t],dir:n,by:r>=0?this.ids[r]:null}):a===2||a===8?this.explode(e,i):(this.kill(e),this.rec&&this.ev.push({t:`ko`,s:i,id:this.ids[e],cause:o[t],dir:n>=0?n:null,by:r>=0?this.ids[r]:null,at:this.cell(e)}))}explode(e,t){if(this.kill(e),this.rec&&this.ev.push({t:`boom`,s:t,id:this.ids[e],at:this.cell(e),cells:this.blastCells(e)}),this.qB[this.qTail]=e,this.qS[this.qTail]=t,this.qTail++,this.resolving)return;this.resolving=!0;let n=this.c,r=n.w;for(;this.qHead<this.qTail;){let e=this.qB[this.qHead],t=this.qS[this.qHead];this.qHead++;let i=this.px[e],a=this.py[e],o=this.grid[a*r+i];o>=0&&this.hit(o,2,-1,e,t+1);for(let o=0;o<8;o++){let l=i+s[o],u=a+c[o];if(l<0||u<0||l>=n.w||u>=n.h)continue;let d=this.grid[u*r+l];d<0||this.hit(d,2,o<4?o:-1,e,t+1)}}this.qHead=0,this.qTail=0,this.resolving=!1}blastCells(e){let t=this.c,n=[],r=this.px[e],i=this.py[e];for(let e=i-1;e<=i+1;e++)for(let i=r-1;i<=r+1;i++)i>=0&&e>=0&&i<t.w&&e<t.h&&n.push([i,e]);return n}stats(){return{maxChain:this.maxChain,toysLost:this.toysLost,toysUsed:this.toysUsed,grumpsOut:this.grumpsOut,grumpsLeft:this.grumpsLeft}}goalsMet(e){return d(e,this.outcome===0,this.beats,this.c.level.hand.length,this.toysUsed,this.toysLost,this.maxChain)}};function d(e,t,n,r,i,a,o){return e.map(e=>{if(!t)return!1;switch(e.t){case`beats`:return n<=e.n;case`spare`:return r-i>=e.n;case`safe`:return a===0;case`chain`:return o>=e.n}})}var f=class e{s;constructor(e){this.s=p(e)}next(){let e=this.s=this.s+1831565813|0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}int(e){return Math.floor(this.next()*e)}range(e,t){return e+this.int(t-e+1)}chance(e){return this.next()<e}pick(e){return e[this.int(e.length)]}shuffle(e){for(let t=e.length-1;t>0;t--){let n=this.int(t+1),r=e[t];e[t]=e[n],e[n]=r}return e}fork(){return new e(Math.floor(this.next()*4294967296))}};function p(e){let t=Math.floor(e)^2654435769;return t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^t>>>16}function m(...e){let t=305419896;for(let n of e)t=p(t^Math.imul(Math.floor(n)|0,668265261));return t}var h=class{level;keep;plans=0;wins=0;emptyWins=!1;minToys=null;minBeats=null;goalsAchievable;winBeats=[];winChains=[];safeWins=0;maxSpare=0;footprints=null;byToys=[];ex=[];constructor(e,t){this.level=e,this.keep=t,this.goalsAchievable=e.goals.map(()=>!1)}add(e,t,n,r,i){this.plans++;let a=this.byToys[t]??={plans:0,wins:0};if(a.plans++,e.outcome!==0)return!1;this.wins++,a.wins++,t===0&&(this.emptyWins=!0),(this.minToys===null||t<this.minToys)&&(this.minToys=t),(this.minBeats===null||e.beats<this.minBeats)&&(this.minBeats=e.beats),this.winBeats[e.beats]=(this.winBeats[e.beats]??0)+1,this.winChains[e.maxChain]=(this.winChains[e.maxChain]??0)+1,e.toysLost===0&&this.safeWins++;let o=this.level.hand.length-t;o>this.maxSpare&&(this.maxSpare=o);let s=e.goalsMet(this.level.goals);for(let e=0;e<s.length;e++)s[e]&&(this.goalsAchievable[e]=!0);if(this.footprints&&this.footprints.size<5e3){let e=[];for(let i=0;i<t;i++)e.push(`${this.level.hand[n[i]]}@${r[i]}`);this.footprints.add(e.sort().join(` `))}return this.keep>0&&this.offerExample(e,t,n,r,i),!0}offerExample(e,t,n,r,i){let a=this.ex,o=(e,t)=>e.toysUsed===t.toysUsed?e.beats>t.beats:e.toysUsed>t.toysUsed,s={toysUsed:t,beats:e.beats};if(a.length>=this.keep&&!o(a[a.length-1],s))return;let c=this.level.w,l=this.level.hand,u=[];for(let e=0;e<t;e++)u.push(`${l[n[e]]}@${r[e]}`);let d=u.sort().join(` `),f=a.findIndex(e=>e.key===d);if(f>=0){if(!o(a[f],s))return;a.splice(f,1)}let p=[];for(let e=0;e<t;e++)p.push({slot:n[e],x:r[e]%c,y:Math.floor(r[e]/c),dir:i[e]});let m={placements:p,beats:e.beats,toysUsed:t,stats:e.stats(),key:d},h=a.findIndex(e=>o(e,s));h<0&&(h=a.length),a.splice(h,0,m),a.length>this.keep&&a.pop()}report(e){return{complete:e,plans:this.plans,wins:this.wins,winRate:this.plans?this.wins/this.plans:0,emptyWins:this.emptyWins,minToys:this.minToys,minBeats:this.minBeats,goalsAchievable:[...this.goalsAchievable],examples:this.ex.map(({key:e,...t})=>t),winBeats:Array.from(this.winBeats,e=>e??0),winChains:Array.from(this.winChains,e=>e??0),safeWins:this.safeWins,maxSpare:this.maxSpare,byToys:Array.from(this.byToys,e=>e??{plans:0,wins:0}),...this.footprints?{distinctWins:this.footprints.size}:{}}}},g=class{level;runner;slots;cells;dirs;pool;nd;constructor(e){this.level=e,this.runner=new u(l(e));let t=e.hand.length;this.slots=new Int32Array(Math.max(1,t)),this.cells=new Int32Array(Math.max(1,t)),this.dirs=new Int32Array(Math.max(1,t)),this.pool=Int32Array.from(this.runner.c.freeZone),this.nd=e.rotate?4:1}runRandom(e,t,n){let r=this.pool,i=r.length;n>i&&(n=i);for(let a=0;a<n;a++){let n=a+e.int(i-a),o=r[a];r[a]=r[n],r[n]=o,this.slots[a]=t[a],this.cells[a]=r[a],this.dirs[a]=this.nd===1?0:e.int(4)}return this.runner.run(n,this.slots,this.cells,this.dirs),n}runEmpty(){this.runner.run(0,this.slots,this.cells,this.dirs)}};function _(e){let t=(e-1)/9;return[.08*(5e-4/.08)**t,.3*(.006/.3)**t]}const v=e=>Object.entries(e).flatMap(([e,t])=>Array(t).fill(e));function y(e){let t=Math.max(1,Math.min(10,Math.round(e))),n=_(t),r={tier:t,band:n,samples:Math.min(1e4,Math.max(800,Math.ceil(5/n[0]))),w:5,zoneRows:2,mirror:.4};switch(t){case 1:return{...r,h:[5,5],walls:[0,0],holes:[0,0],grumps:[1,2],grumpKinds:v({bonk:3,pin:2}),props:[0,0],propKinds:[],hand:[2,2],handKinds:[`bonk`],rotate:!1,maxBeats:8,theme:`playmat`};case 2:return{...r,h:[5,6],walls:[0,0],holes:[0,0],grumps:[2,3],grumpKinds:v({bonk:3,pin:2}),props:[0,0],propKinds:[],hand:[2,2],handKinds:[`bonk`],rotate:!1,maxBeats:9,theme:`playmat`};case 3:return{...r,h:[6,6],walls:[0,1],holes:[0,0],grumps:[2,3],grumpKinds:v({bonk:3,pin:2,zip:2}),props:[0,0],propKinds:[],hand:[2,2],handKinds:[`bonk`,`zip`],rotate:!1,maxBeats:10,theme:`playmat`};case 4:return{...r,h:[6,6],walls:[1,2],holes:[0,1],grumps:[3,4],grumpKinds:v({bonk:3,pin:1,zip:2,shove:2}),props:[0,1],propKinds:[`block`],hand:[2,3],handKinds:[`bonk`,`zip`,`shove`],rotate:!1,maxBeats:10,theme:`workshop`};case 5:return{...r,h:[6,7],walls:[1,2],holes:[1,2],grumps:[3,4],grumpKinds:v({bonk:3,pin:1,zip:2,shove:2}),props:[0,1],propKinds:[`block`],hand:[2,3],handKinds:[`bonk`,`zip`,`shove`],rotate:!0,maxBeats:11,theme:`workshop`};case 6:return{...r,h:[7,7],walls:[1,2],holes:[0,2],grumps:[3,5],grumpKinds:v({bonk:3,pin:1,zip:2,shove:2,boom:2}),props:[1,2],propKinds:v({keg:2,block:1}),hand:[3,3],handKinds:[`bonk`,`zip`,`shove`,`boom`],rotate:!0,maxBeats:12,theme:`sandbox`};case 7:return{...r,h:[7,7],walls:[1,3],holes:[1,2],grumps:[4,5],grumpKinds:v({bonk:3,pin:1,zip:2,shove:2,boom:1,hop:2}),props:[1,2],propKinds:v({keg:2,block:1}),hand:[3,3],handKinds:[`bonk`,`zip`,`shove`,`boom`,`hop`],rotate:!0,maxBeats:12,theme:`sandbox`};case 8:return{...r,h:[7,8],walls:[1,3],holes:[1,3],grumps:[4,6],grumpKinds:v({bonk:3,pin:1,zip:2,shove:2,boom:1,hop:2}),props:[1,2],propKinds:v({keg:2,block:1}),hand:[3,4],handKinds:[`bonk`,`zip`,`shove`,`boom`,`hop`],rotate:!0,maxBeats:13,theme:`sandbox`};case 9:return{...r,h:[8,8],walls:[2,3],holes:[1,3],grumps:[5,6],grumpKinds:v({bonk:3,pin:1,zip:2,shove:2,boom:1,hop:2,twirl:2}),props:[1,2],propKinds:v({keg:2,block:1}),hand:[3,4],handKinds:[`bonk`,`zip`,`shove`,`boom`,`hop`,`twirl`],rotate:!0,maxBeats:14,theme:`attic`};default:return{...r,h:[8,8],walls:[2,4],holes:[1,3],grumps:[5,7],grumpKinds:v({bonk:3,pin:1,zip:2,shove:2,boom:1,hop:2,twirl:2}),props:[1,3],propKinds:v({keg:2,block:1}),hand:[4,4],handKinds:[`bonk`,`zip`,`shove`,`boom`,`hop`,`twirl`],rotate:!0,maxBeats:14,theme:`attic`}}}const b=/* @__PURE__ */ new Set([`bonk`,`boom`,`shove`,`hop`]);function x(n,r){let i=r.w,a=n.range(r.h[0],r.h[1]),o=a-r.zoneRows,s=n.chance(r.mirror),c=(i-1)/2,l=e=>i-1-e,u=[];for(let e=0;e<a;e++)u.push(Array(i).fill(e>=o?`o`:`.`));let d=[];for(let e=0;e<o;e++)for(let t=0;t<i;t++)(!s||t<=c)&&d.push(e*i+t);n.shuffle(d);let f=new Uint8Array(i*a),p=e=>s&&e%i!==l(e%i)?2:1,m=(e,t)=>e<0||t<0||e>=i||t>=a?` `:u[t][e],h=(e,t)=>{let n=m(e,t);return n===`.`||n===`o`},g=(e,t)=>{let n=e;for(let e of d){if(n<=0)break;if(f[e]||p(e)>n)continue;f[e]=1;let r=e%i,a=Math.floor(e/i);u[a][r]=t,s&&(u[a][l(r)]=t),n-=p(e)}};g(n.range(r.walls[0],r.walls[1]),`#`),g(n.range(r.holes[0],r.holes[1]),` `);let _=(e,t)=>{if(s&&t===l(t))return 2;let r=()=>n.chance(.5)?1:3;return b.has(e)?n.chance(.75)?2:r():e===`zip`?n.chance(.55)?2:t<c?1:t>c?3:r():e===`twirl`?n.int(4):2},v=(n,r,o,s)=>{let c=e[s],l=t[s];if(n===`hop`)return m(r+c,o+l)!==`#`&&h(r+2*c,o+2*l);if(b.has(n))return h(r+c,o+l);if(n===`zip`){for(let e=r+c,t=o+l;m(e,t)!==`#`&&e>=0&&t>=0&&e<i&&t<a;e+=c,t+=l)if(h(e,t))return!0;return!1}return!0},y=[],x=(e,t,r)=>{let a=e,o=0;for(;a>0&&o<8;){let e=n.pick(t),c=!1;for(let t of d){if(f[t]||p(t)>a)continue;let n=t%i,o=Math.floor(t/i);if(u[o][n]!==`.`)continue;let d=null;for(let t=0;t<4&&d===null;t++){let t=_(e,n);v(e,n,o,t)&&(d=t)}if(d!==null){f[t]=1,y.push({kind:e,team:r,x:n,y:o,dir:d}),s&&n!==l(n)&&y.push({kind:e,team:r,x:l(n),y:o,dir:d===1?3:d===3?1:d}),a-=p(t),c=!0;break}}c||o++}};return x(n.range(r.grumps[0],r.grumps[1]),r.grumpKinds,`E`),r.propKinds.length&&x(n.range(r.props[0],r.props[1]),r.propKinds,`N`),{map:u.map(e=>e.join(``)),pieces:y}}function S(e,t,n){if(t===0)return[0,1];let r=e/t,i=n*n,a=1+i/t,o=(r+i/(2*t))/a,s=n*Math.sqrt(r*(1-r)/t+i/(4*t*t))/a;return[Math.max(0,o-s),Math.min(1,o+s)]}function C(e,t,n,r){let i=e.level.hand.length,a=Int32Array.from({length:i},(e,t)=>t),[o,s]=n.band,c=Math.max(100,Math.ceil(n.samples/10)),l=0,u=0;for(;l<n.samples;){let d=Math.min(n.samples,l+c);for(;l<d;l++){let n=e.runRandom(t,a,i);r.add(e.runner,n,e.slots,e.cells,e.dirs)&&u++}if(S(u,l,2.3)[0]>s)return{verdict:`high`,n:l,wins:u};if(S(u,l,1.6)[1]<o)return{verdict:`low`,n:l,wins:u}}let d=u/l;return{verdict:d>s?`high`:d>=o&&u>=2?`ok`:`low`,n:l,wins:u}}function w(e,t,n,r,i){let a=e.level.hand.length,o=new Int32Array(a-1),s=Array(a).fill(0),c=Array(a).fill(0),l=0;for(let n=0;n<r;n++){let r=n%a;for(let e=0,t=0;e<a;e++)e!==r&&(o[t++]=e);let u=e.runRandom(t,o,a-1);c[r]++,i.add(e.runner,u,e.slots,e.cells,e.dirs)&&(s[r]++,l++)}let u=-1,d=.25*n;for(let e=0;e<a;e++){let t=s[e]/Math.max(1,c[e]);s[e]>=2&&t>d&&(u=e,d=t)}return{drop:u,plans:r,wins:l}}function T(e,t){let n=t.wins;if(!n)return[];let r=[],i=0,a=t.minBeats??0;for(let e=0;e<t.winBeats.length;e++){let r=t.winBeats[e]??0;if(r){if(i===0||(i+r)/n<=.5)i+=r,a=e;else break}}r.push({g:{t:`beats`,n:a},share:i/n}),t.safeWins>0&&r.push({g:{t:`safe`},share:t.safeWins/n});for(let e=4;e>=2;e--){let i=0;for(let n=e;n<t.winChains.length;n++)i+=t.winChains[n]??0;if(i>=3){r.push({g:{t:`chain`,n:e},share:i/n});break}}t.spareWins>0&&r.push({g:{t:`spare`,n:1},share:t.spareWins/n});let o=e.shuffle(r.filter(e=>e.share<=.6)),s=r.filter(e=>e.share>.6).sort((e,t)=>e.share-t.share);return[...o,...s].slice(0,2).map(e=>e.g)}function E(e,t){let n=y(t),r=new f(m(e,n.tier,32343)),i={},a=e=>i[e]=(i[e]??0)+1,o=0,s=0,c=null;for(;o<400;){let{map:t,pieces:l}=x(r,n),u=r.range(n.hand[0],n.hand[1]),d=Array.from({length:u},()=>r.pick(n.handKinds)),f=l.filter(e=>e.team===`E`).length,p={id:`gen-t${n.tier}-${e}`,name:`Tier ${n.tier} #${e}`,w:n.w,h:t.length,map:t,pieces:l,hand:d,maxBeats:n.maxBeats,rotate:n.rotate,goals:[],theme:n.theme};o++;let m=new g(p);if(m.runEmpty(),s++,m.runner.outcome===0)a(`empty-wins`);else if(m.runner.grumpsOut*3>f)a(`grumps-self-ko`);else for(;;){let t={...p,hand:d},l=new g(t),u=new h(t,1),f=C(l,r,n,u);if(s+=f.n,f.verdict!==`ok`){if(a(f.verdict===`high`?`too-easy`:`too-hard`),f.wins>0){let i=f.wins/f.n,a=Math.abs(Math.log(i/Math.sqrt(n.band[0]*n.band[1])));(!c||a<c.dist)&&(c={result:D(t,r,u,0,f,n,e),dist:a})}break}let m=f.wins/f.n;if(d.length>=2){let c=new h(t,0),p=Math.max(400,Math.ceil(f.n/2)),g=w(l,r,m,p,c);if(s+=p,g.drop>=0){a(`subset-wins`),d=d.filter((e,t)=>t!==g.drop),o++;continue}let _=D(t,r,u,g.wins,f,n,e);if(_.level.goals.length<2){a(`few-goals`);break}return _.stats.subsetSamples=p,_.stats.subsetWinRate=g.wins/p,O(_,o,s,i,!0)}let _=D(t,r,u,0,f,n,e);if(_.level.goals.length<2){a(`few-goals`);break}return O(_,o,s,i,!0)}}if(c)return O(c.result,o,s,i,!1);throw Error(`generator found nothing for tier ${n.tier} seed ${e}`)}function D(e,t,n,r,i,a,o){let s=n.report(!1),c=T(t,{...s,spareWins:r}),l=s.examples[0]?.placements??[];return{level:{...e,goals:c,solution:l},solution:l,stats:{tier:a.tier,seed:o,winRate:i.wins/i.n,wins:i.wins,samples:i.n,subsetSamples:0,subsetWinRate:0,attempts:0,totalSims:0,band:a.band,rejects:{},accepted:!1}}}function O(e,t,n,r,i){return e.stats.attempts=t,e.stats.totalSims=n,e.stats.rejects={...r},e.stats.accepted=i,e}const k=self;k.onmessage=e=>{let{id:t,seed:n,tier:r}=e.data;try{let e=E(n,r),i={id:t,ok:!0,level:e.level,solution:e.solution,winRate:e.stats.winRate};k.postMessage(i)}catch(e){let n={id:t,ok:!1,error:String(e)};k.postMessage(n)}};",_g=typeof self<`u`&&self.Blob&&new Blob([`URL.revokeObjectURL(import.meta.url);`,gg],{type:`text/javascript;charset=utf-8`});function vg(e){let t;try{if(t=_g&&(self.URL||self.webkitURL).createObjectURL(_g),!t)throw``;let n=new Worker(t,{type:`module`,name:e?.name});return n.addEventListener(`error`,()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker(`data:text/javascript;charset=utf-8,`+encodeURIComponent(gg),{type:`module`,name:e?.name})}}var yg=class{worker=null;nextId=1;waiting=new Map;cache=new Map;constructor(){try{this.worker=new vg,this.worker.onmessage=e=>{let t=this.waiting.get(e.data.id);t&&(this.waiting.delete(e.data.id),e.data.ok?t.resolve({level:e.data.level,solution:e.data.solution,winRate:e.data.winRate}):t.reject(Error(e.data.error)))},this.worker.onerror=()=>this.failAll()}catch{this.worker=null}}failAll(){this.worker?.terminate(),this.worker=null;for(let[e,t]of this.waiting){this.waiting.delete(e);try{let e=pg(t.seed,t.tier);t.resolve({...e,winRate:e.stats.winRate})}catch(e){t.reject(e instanceof Error?e:Error(String(e)))}}}get(e,t){let n=`${e}:${t}`,r=this.cache.get(n);if(r)return r;let i=new Promise((n,r)=>{if(!this.worker){setTimeout(()=>{try{let r=pg(e,t);n({...r,winRate:r.stats.winRate})}catch(e){r(e instanceof Error?e:Error(String(e)))}},0);return}let i=this.nextId++;this.waiting.set(i,{resolve:n,reject:r,seed:e,tier:t});let a={id:i,seed:e,tier:t};this.worker.postMessage(a)});return this.cache.set(n,i),this.cache.size>8&&this.cache.delete(this.cache.keys().next().value),i}},bg=class{enabled=!0;canVibrate=typeof navigator<`u`&&typeof navigator.vibrate==`function`;buzz(e){if(this.enabled&&this.canVibrate)try{navigator.vibrate(e)}catch{this.canVibrate=!1}}light(){this.buzz(8)}strong(){this.buzz(22)}},xg=class{el;anim=null;key=``;constructor(e){this.el=document.createElement(`div`),this.el.className=`coach`,this.el.innerHTML=`<svg viewBox="0 0 48 56" aria-hidden="true"><path d="M17 30V9a4.5 4.5 0 0 1 9 0v15l11.5 2.2c3.6.7 5.8 4.2 5 7.8L40 46c-.8 3.6-4 6-7.6 6H25c-2.8 0-5.4-1.4-7-3.7L8.7 36c-1.4-2-1-4.8 1-6.3 1.8-1.3 4.3-1.1 5.9.5z"/></svg><i class="coach-ring"></i>`,this.el.hidden=!0,e.appendChild(this.el)}show(e,t){let n=`${Math.round(e.x)},${Math.round(e.y)},${Math.round(t.x)},${Math.round(t.y)}`;if(this.el.hidden=!1,n===this.key&&this.anim)return;this.key=n,this.anim?.cancel();let r=(e,t)=>`translate(${e.x}px, ${e.y}px) scale(${t})`;this.anim=this.el.animate([{offset:0,transform:r(e,1.15),opacity:0},{offset:.1,transform:r(e,1.15),opacity:1},{offset:.2,transform:r(e,.95),opacity:1,easing:`cubic-bezier(.45,0,.25,1)`},{offset:.65,transform:r(t,.95),opacity:1},{offset:.75,transform:r(t,1.15),opacity:1},{offset:.9,transform:r(t,1.15),opacity:0},{offset:1,transform:r(t,1.15),opacity:0}],{duration:2200,iterations:1/0})}hide(){this.el.hidden=!0,this.anim?.cancel(),this.anim=null,this.key=``}get visible(){return!this.el.hidden}},Sg=class{root;body;done=null;constructor(e){this.root=document.createElement(`section`),this.root.className=`sheet newtoy`,this.body=document.createElement(`div`),this.body.className=`sheet-body`,this.root.appendChild(this.body),this.root.inert=!0,e.appendChild(this.root)}show(e){let t=e.every(e=>e.grump)?`New Grump`:e.some(e=>e.grump)?`New faces`:e.length>1?`New toys`:`New toy`;this.body.innerHTML=`<div class="newtoy-tag">${t}</div>`+e.map(e=>{let t=Wm[e.kind],n=e.grump?`${t.name} <small>Grump</small>`:t.name;return`<div class="newtoy-row"><img src="${e.icon}" alt="" draggable="false"><div><h2 class="sheet-title">${n}</h2><p>${t.rule}</p></div></div>`}).join(``);let n=document.createElement(`div`);n.className=`sheet-actions`;let r=document.createElement(`button`);return r.type=`button`,r.className=`btn primary grow`,r.innerHTML=`<span>Got it</span>`,n.appendChild(r),this.body.appendChild(n),this.root.inert=!1,requestAnimationFrame(()=>requestAnimationFrame(()=>this.root.setAttribute(`data-open`,``))),new Promise(e=>{this.done=e,r.addEventListener(`click`,()=>this.close())})}close(){this.root.removeAttribute(`data-open`),this.root.inert=!0;let e=this.done;this.done=null,e?.()}get isOpen(){return this.done!==null}},Cg=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 21 13h-5.5v8h-7v-8H3z"/></svg>`,wg=[`north`,`east`,`south`,`west`],Tg=class{root;btns=[];constructor(e,t){this.root=document.createElement(`div`),this.root.className=`turn-handles`,this.root.hidden=!0;for(let e=0;e<4;e++){let n=document.createElement(`button`);n.type=`button`,n.className=`turn-handle`,n.setAttribute(`aria-label`,`Face ${wg[e]}`),n.innerHTML=Cg,n.addEventListener(`pointerdown`,e=>e.stopPropagation()),n.addEventListener(`click`,n=>{n.stopPropagation(),t(e)}),this.root.appendChild(n),this.btns.push(n)}e.appendChild(this.root)}show(e,t,n){this.root.hidden=!1;let r=this.root.parentElement?.getBoundingClientRect()??{left:0,top:0};e.forEach((e,i)=>{let a=this.btns[i],o=Math.max(22,Math.min(innerWidth-20-2,e.x)),s=Math.max(22,Math.min(innerHeight-20-2,e.y));a.style.transform=`translate(${o-r.left-20}px, ${s-r.top-20}px)`,a.style.setProperty(`--rot`,`${t[i]}deg`),a.classList.toggle(`on`,i===n)})}hide(){this.root.hidden=!0}};function Eg(e){return[...e.entries()].sort((e,t)=>e[0]-t[0]).map(([e,t])=>({slot:e,x:t.x,y:t.y,dir:t.dir}))}function Dg(e){return new Map(e.map(e=>[e.slot,{x:e.x,y:e.y,dir:e.dir}]))}function Og(e,t,n){return t>=0&&n>=0&&t<e.w&&n<e.h&&e.map[n]?.[t]===`o`}function kg(e,t,n){let r=t>=0&&n>=0&&t<e.w&&n<e.h?e.map[n]?.[t]:void 0;return r===`.`||r===`o`}function Ag(e,t){return Og(e,t[0],t[1])?`That tile is taken`:`Toys go on the glowing tiles`}function jg(e,t,n){return e.pieces.some(e=>e.x===t&&e.y===n)}function Mg(e,t,n){for(let[r,i]of e)if(i.x===t&&i.y===n)return r;return null}function Ng(e){let t=[];for(let n=0;n<e.h;n++)for(let r=0;r<e.w;r++)Og(e,r,n)&&!jg(e,r,n)&&t.push([r,n]);return t}function Pg(e,t,n,r){if(!n)return{t:`remove`};let[i,a]=n;if(!Og(e,i,a)||jg(e,i,a))return{t:`invalid`};let o=Mg(t,i,a);return o===null?{t:`place`,x:i,y:a}:{t:`swap`,x:i,y:a,other:o,otherTo:r?{...r,dir:t.get(o).dir}:null}}function Fg(e,t,n,r,i){let a=new Map(e);switch(a.delete(t),n.t){case`remove`:break;case`invalid`:i&&a.set(t,i);break;case`place`:a.set(t,{x:n.x,y:n.y,dir:r});break;case`swap`:n.otherTo?a.set(n.other,n.otherTo):a.delete(n.other),a.set(t,{x:n.x,y:n.y,dir:r})}return a}function Ig(e,t){if(!e)return null;for(let n of[...e].sort((e,t)=>e.slot-t.slot)){let e=t.get(n.slot);if(!e||e.x!==n.x||e.y!==n.y||e.dir!==n.dir)return n}return null}function Lg(e){let t=e%100>=11&&e%100<=13?`th`:[`th`,`st`,`nd`,`rd`][e%10]??`th`;return`${e}${e%10>3?`th`:t}`}var Rg=8,zg=320,Bg=class{stage;canvas;host;plan=new Map;armed=null;level=null;press=null;lift=null;lastTap={t:0,x:0,y:0};onArm=()=>{};constructor(e,t,n){this.stage=e,this.canvas=t,this.host=n,t.addEventListener(`pointerdown`,e=>this.onCanvasDown(e)),window.addEventListener(`pointermove`,e=>this.onMove(e)),window.addEventListener(`pointerup`,e=>this.onUp(e,!1)),window.addEventListener(`pointercancel`,e=>this.onUp(e,!0))}setArmListener(e){this.onArm=e}setLevel(e,t=new Map){this.cancel(),this.level=e,this.plan=t,this.setArmed(null)}get active(){return this.press!==null}get liftedSlot(){return this.lift?.slot??null}cancel(){this.lift&&this.finishLift(null,!0),this.releaseCapture(),this.press=null}setArmed(e){this.armed=e,this.onArm(e)}trayDown(e,t){if(!this.level||this.press||!t.isPrimary||!this.host.enterPlan())return;let n=t.currentTarget instanceof Element?t.currentTarget:t.target instanceof Element?t.target:null;this.startPress(t,`tray`,e,null,n)}onCanvasDown(e){if(!this.level||this.press||!e.isPrimary||e.button!==void 0&&e.button>0||!this.host.enterPlan())return;let t=this.stage.pieceAt(e.clientX,e.clientY);t!==null&&t<100&&this.plan.has(t)?this.startPress(e,`toy`,t,t,this.canvas):t!==null&&t>=100?this.startPress(e,`piece`,-1,t,this.canvas):this.startPress(e,`empty`,-1,null,this.canvas)}startPress(e,t,n,r,i){this.press={pointerId:e.pointerId,x0:e.clientX,y0:e.clientY,lastX:e.clientX,lastY:e.clientY,source:t,slot:n,pieceId:r,dragging:!1,orbiting:!1,capture:i};try{i?.setPointerCapture(e.pointerId)}catch{this.press.capture=null}}releaseCapture(){let e=this.press;if(e?.capture)try{e.capture.hasPointerCapture(e.pointerId)&&e.capture.releasePointerCapture(e.pointerId)}catch{}}onMove(e){let t=this.press;if(!t||e.pointerId!==t.pointerId)return;let n=e.clientX-t.lastX,r=e.clientY-t.lastY;t.lastX=e.clientX,t.lastY=e.clientY,!t.dragging&&!t.orbiting&&Math.hypot(e.clientX-t.x0,e.clientY-t.y0)>=Rg&&(t.source===`tray`||t.source===`toy`?(t.dragging=!0,this.beginLift(t.slot)):t.orbiting=!0),t.dragging?this.moveLift(e.clientX,e.clientY):t.orbiting&&this.stage.orbitBy(n,r)}onUp(e,t){let n=this.press;n&&e.pointerId===n.pointerId&&(this.releaseCapture(),this.press=null,n.dragging?(t||this.moveLift(e.clientX,e.clientY),this.finishLift(this.lift?.cell??null,t)):t||n.orbiting||this.tap(n,e.clientX,e.clientY))}tap(e,t,r){let i=this.level;if(!i)return;if(e.source===`tray`){this.setArmed(this.armed===e.slot?null:e.slot),this.refreshMarks();return}if(e.source===`toy`){let t=this.plan.get(e.slot);if(!t)return;if(this.armed!==null&&this.armed!==e.slot){this.dropArmed([t.x,t.y]);return}if(i.rotate){let r=n(t.dir);this.plan=new Map(this.plan).set(e.slot,{...t,dir:r}),this.stage.turnToy(e.slot,r),this.host.planChanged(this.plan,e.slot)}else this.host.tapped(e.slot,!0);return}if(e.source===`piece`){let n=this.armed===null?null:this.stage.cellAt(t,r);n?this.dropArmed(n):this.host.tapped(e.pieceId,!0);return}let a=this.stage.cellAt(t,r);if(this.armed!==null&&a){this.dropArmed(a);return}let o=performance.now();o-this.lastTap.t<zg&&Math.hypot(t-this.lastTap.x,r-this.lastTap.y)<30?(this.stage.resetCamera(),this.lastTap.t=0):this.lastTap={t:o,x:t,y:r},this.armed!==null&&this.setArmed(null),this.host.tapped(null,!1),this.refreshMarks()}dropArmed(e){let t=this.level,n=this.armed;if(!t||n===null)return;let r=this.plan.get(n)??null,i=new Map(this.plan);i.delete(n);let a=Pg(t,i,e,r);if(a.t===`invalid`){this.host.illegal(Ag(t,e));return}if(a.t===`remove`)return;let o=r?.dir??0;this.plan=Fg(i,n,a,o,r),this.syncStageFor(n,a.t===`swap`?a.other:null),this.setArmed(null),this.host.dragStarted(),this.host.planChanged(this.plan,n),this.refreshMarks()}syncStageFor(e,t){let n=this.level;if(n)for(let r of[e,t]){if(r===null)continue;let t=this.plan.get(r);t?this.stage.placeToy(r,n.hand[r],t.x,t.y,t.dir,{drop:r===e}):this.stage.removeToy(r)}}beginLift(e){let t=this.level;if(!t)return;let n=t.hand[e],r=this.plan.get(e)??null,i=new Map(this.plan);i.delete(e),this.plan=i,this.lift={slot:e,kind:n,dir:r?.dir??0,from:r,cell:null},this.armed!==null&&this.setArmed(null),this.stage.beginDrag(e,n),this.host.dragStarted(),this.host.planChanged(this.plan,null)}moveLift(e,t){this.lift&&(this.lift.cell=this.stage.dragTo(e,t).cell,this.refreshMarks())}finishLift(e,t){let n=this.level,r=this.lift;if(!n||!r)return;this.lift=null;let i=t?{t:`invalid`}:Pg(n,this.plan,e,r.from);this.plan=Fg(this.plan,r.slot,i,r.dir,r.from);let a=this.plan.get(r.slot);if(this.stage.endDrag(a?{x:a.x,y:a.y,dir:a.dir}:null),i.t===`swap`){let e=this.plan.get(i.other);e?this.stage.placeToy(i.other,n.hand[i.other],e.x,e.y,e.dir,{drop:!0}):this.stage.removeToy(i.other)}this.host.planChanged(this.plan,a&&i.t!==`invalid`?r.slot:null),this.refreshMarks(),!t&&i.t===`invalid`&&e&&this.host.illegal(Ag(n,e))}refreshMarks(){let e=this.level;if(!e)return;let t=[],n=this.lift?.cell??null;if(this.lift!==null||this.armed!==null)for(let r=0;r<e.h;r++)for(let i=0;i<e.w;i++)!kg(e,i,r)||n&&n[0]===i&&n[1]===r||t.push({cell:[i,r],style:Og(e,i,r)&&!jg(e,i,r)?`valid`:`dim`});n&&t.push({cell:n,style:Og(e,n[0],n[1])&&!jg(e,n[0],n[1])?`hover`:`invalid`}),this.lift||t.push(...this.host.idleMarks()),this.stage.setCellMarks(t)}turnTo(e,t){let n=this.level,r=this.plan.get(e);n&&r&&n.rotate&&r.dir!==t&&(this.plan=new Map(this.plan).set(e,{...r,dir:t}),this.stage.turnToy(e,t),this.host.planChanged(this.plan,e))}setPlan(e){let t=this.level;if(t){this.cancel();for(let t of this.plan.keys())e.has(t)||this.stage.removeToy(t);this.plan=new Map(e);for(let[e,n]of this.plan)this.stage.placeToy(e,t.hand[e],n.x,n.y,n.dir);this.setArmed(null),this.host.planChanged(this.plan,null),this.refreshMarks()}}toyAt(e,t){return Mg(this.plan,e,t)}},Vg=class{stage;audio;speed=1;pending=null;token=0;constructor(e,t){this.stage=e,this.audio=t}get playing(){return this.pending!==null}async play(e){let t=++this.token,{result:n}=e,r=n.outcome===`win`;for(let i=e.from;i<=e.to;i++){if(t!==this.token)return!1;let a=n.phases[i];e.onPhase(i),this.audio.phase(a.side,i);let o=r&&i===n.phases.length-1,s=this.stage.playPhase(a,{speed:this.speed,finale:o}).then(()=>void 0,()=>void 0);this.pending=s,await s,this.pending===s&&(this.pending=null)}return t===this.token}stop(){this.token++,this.pending&&this.stage.skipRun()}};function Hg(r,i,a){let o=i.find(e=>e.id===a),s={id:a,kind:o?.kind??`pin`,shape:`none`,cells:[],end:`none`,target:null};if(!o||!o.alive)return s;let c=(e,t)=>{if(e<0||t<0||e>=r.w||t>=r.h)return`void`;let n=r.map[t]?.[e]??` `;return n===`#`?`wall`:n===`.`||n===`o`?`floor`:`void`},l=new Map;for(let e of i)e.alive&&e.id!==a&&l.set(e.y*r.w+e.x,e.id);let u=(e,t)=>l.get(t*r.w+e)??null,d=(e,t)=>{let n=[];for(let i=t-1;i<=t+1;i++)for(let t=e-1;t<=e+1;t++)t>=0&&i>=0&&t<r.w&&i<r.h&&n.push([t,i]);return n},f=n=>{let i=[],a=o.x+e[n],s=o.y+t[n];for(;a>=0&&s>=0&&a<r.w&&s<r.h;){let r=c(a,s);if(r===`wall`)return{cells:i,end:`wall`,target:null};if(i.push([a,s]),r===`floor`){let e=u(a,s);if(e!==null)return{cells:i,end:`piece`,target:e}}a+=e[n],s+=t[n]}return{cells:i,end:`edge`,target:null}};switch(o.kind){case`bonk`:case`boom`:case`shove`:{let n=[],r=o.x,i=o.y,s,l=null;for(;;){let a=r+e[o.dir],d=i+t[o.dir],f=c(a,d);if(f===`wall`){s=`wall`;break}if(f===`void`){s=`edge`;break}let p=u(a,d);if(p!==null){s=`piece`,l=p;break}r=a,i=d,n.push([r,i])}let f={id:a,kind:o.kind,shape:`path`,cells:n,end:s,target:l};return o.kind===`boom`&&(f.blast=d(r,i)),f}case`zip`:{let e=f(o.dir);return{id:a,kind:o.kind,shape:`line`,cells:e.cells,end:e.end,target:e.target}}case`hop`:{let n=[],r=o.x,i=o.y;for(;;){let s=r+e[o.dir],l=i+t[o.dir],d=s+e[o.dir],f=l+t[o.dir],p=c(d,f);if(c(s,l)===`wall`||p===`wall`)return{id:a,kind:`hop`,shape:`hops`,cells:n,end:`wall`,target:null};if(p===`void`)return{id:a,kind:`hop`,shape:`hops`,cells:n,end:`edge`,target:null};n.push([d,f]);let m=u(d,f);if(m!==null)return{id:a,kind:`hop`,shape:`hops`,cells:n,end:`piece`,target:m};r=d,i=f}}case`twirl`:{let e=[],t=f(o.dir),r=o.dir;for(let i=0;i<4;i++)e.push(i===0?t.cells:f(r).cells),r=n(r);return{id:a,kind:`twirl`,shape:`sweep`,cells:t.cells,lines:e,end:t.end,target:t.target}}case`keg`:return{...s,blast:d(o.x,o.y)};default:return s}}function Ug(e){switch(e.t){case`ko`:case`boom`:case`fall`:case`bonk`:case`shoot`:case`block`:return!0;case`move`:return e.pushed;default:return!1}}function Wg(e){for(let t=e.phases.length-1;t>=0;t--)for(let n of e.phases[t].actions)if(n.events.some(Ug))return t;return-1}var Gg=new Set([`bonk`,`zip`,`boom`,`shove`,`hop`,`twirl`]),Kg=380,qg=110,Jg=class{level;host;d;state=`intro`;result=null;endIdx=-1;selected=null;hintShown=null;token=0;dragged=!1;coachTimer=0;disposed=!1;handleRaf=0;started=Promise.resolve();built=Promise.resolve();constructor(e,t,n){this.level=e,this.host=t,this.d=n}get plan(){return this.d.planner.plan}async start(e={}){let{stage:t,ui:n,audio:r,planner:i}=this.d;this.state=`intro`,i.setLevel(this.level),n.result.hide(),n.card.hide(),t.showGhost(null),t.showIntents([]),t.setSelected(null),t.resetCamera(),t.setMode(`plan`);let a=t.setLevel(this.level,{animate:e.animate??!0});this.built=a,this.handleRaf=requestAnimationFrame(()=>this.placeHandles()),t.setZoneVisible(!0),r.setMood(`plan`,this.level.theme),this.refreshTray(),this.refreshHud(),requestAnimationFrame(()=>this.fitInsets()),e.plan?.length&&i.setPlan(Dg(e.plan)),await a,this.disposed||(await this.d.meetKinds(this.level),this.disposed||(this.state=`plan`,this.level.intro&&n.banner(this.level.intro,innerHeight<700?2500:4200),this.refreshPlan(),this.fitInsets()))}dispose(){this.disposed=!0,this.token++,this.d.runner.stop(),this.d.planner.setLevel(null),this.d.coach.hide(),clearInterval(this.coachTimer),cancelAnimationFrame(this.handleRaf),this.d.handles.hide(),this.d.ui.card.hide(),this.setDockHidden(!1)}placeHandles(){if(this.disposed)return;this.handleRaf=requestAnimationFrame(()=>this.placeHandles());let{stage:n,ui:r,planner:i,handles:a}=this.d,o=this.selected,s=o!==null&&o<100?this.plan.get(o):void 0,c=[...r.root.querySelectorAll(`.sheet`)].some(e=>!e.inert);if(!s||!this.level.rotate||this.state!==`plan`||i.active||r.screen!==`game`||c){a.hide();return}let l=.3,u=n.cellToClient(s.x,s.y,l),d=[0,1,2,3].map(r=>n.cellToClient(s.x+e[r]*.62,s.y+t[r]*.62,l)),f=d.map(e=>Math.atan2(e.x-u.x,-(e.y-u.y))*180/Math.PI);a.show(d,f,s.dir)}turnTo(e){this.state!==`plan`||this.selected===null||this.selected>=100||this.d.planner.turnTo(this.selected,e)}fitInsets(){let e=this.d.ui.root,t=[...e.querySelectorAll(`.s-game .hud-top, .s-game .hud-stats, .s-game .hud-chips`)].map(e=>e.getBoundingClientRect()).filter(e=>e.height>0).reduce((e,t)=>Math.max(e,t.bottom),0);if(!t)return;let n=qg;if(this.state===`plan`||this.state===`intro`){let t=e.querySelector(`.s-game .dock`)?.getBoundingClientRect();t&&t.height>0&&(n=innerHeight-t.top)}for(let t of e.querySelectorAll(`.sheet`))t.inert||(n=Math.max(n,t.offsetHeight));this.d.stage.setInsets({top:t+10,bottom:n+10})}setDockHidden(e){this.d.ui.root.querySelector(`.s-game .dock`)?.classList.toggle(`ttb-hidden`,e)}enterPlan(){return!this.disposed&&(this.state===`failed`&&this.retry(),this.state===`plan`)}planChanged(e,t){t===null?this.selected!==null&&this.selected<100&&!this.plan.has(this.selected)&&(this.selected=null):this.selected=t,this.hintShown&&!Ig([this.hintShown],this.plan)&&(this.hintShown=null,this.d.stage.showGhost(null)),this.d.ui.card.hide(),this.refreshPlan()}tapped(e,t){let{ui:n,stage:r}=this.d;if(this.selected=e,e===null||!t)n.card.hide();else{let t=this.pieces().find(t=>t.id===e),i=r.pieceToClient(e);t&&i&&n.card.show({kind:t.kind,team:t.team,at:i,rule:this.cardText(t)})}this.refreshPlan()}dragStarted(){this.dragged=!0,this.d.coach.hide(),this.d.ui.card.hide()}illegal(e){this.d.ui.toast(e),this.d.audio.sfx(`bump`),this.d.haptics.light()}idleMarks(){return this.hintShown?[{cell:[this.hintShown.x,this.hintShown.y],style:`hint`}]:[]}pieces(){return C(this.level,Eg(this.plan))}cardText(e){let t=Wm[e.kind].rule;return e.team===`P`?`${t}<span class="card-order">Acts ${Lg(e.id+1)} on the tick</span>`:Gg.has(e.kind)?`${t}<span class="card-order">Acts ${Lg(this.level.pieces.map((e,t)=>({q:e,id:100+t})).filter(e=>Gg.has(e.q.kind)).findIndex(t=>t.id===e.id)+1)} on the tock</span>`:t}intents(){let e=this.pieces(),t=[];for(let n of e)if(n.team===`E`&&n.alive&&n.id!==this.selected&&(n.kind===`zip`&&t.push(Hg(this.level,e,n.id)),n.kind===`twirl`)){let r=Hg(this.level,e,n.id);t.push({...r,shape:`line`,cells:r.lines?.[0]??r.cells,lines:void 0})}return this.selected!==null&&e.some(e=>e.id===this.selected)&&t.unshift(Hg(this.level,e,this.selected)),t.filter(e=>e.shape!==`none`)}refreshPlan(){if(this.state!==`plan`&&this.state!==`intro`)return;let{stage:e,planner:t}=this.d;this.selected!==null&&!this.pieces().some(e=>e.id===this.selected)&&(this.selected=null),e.setSelected(this.selected),e.showIntents(this.intents()),t.refreshMarks(),this.refreshTray(),this.refreshHud(),this.refreshCoach()}refreshTray(){let{ui:e,stage:t,planner:n}=this.d;e.tray.set(this.level.hand.map((e,r)=>({slot:r,kind:e,icon:t.renderToyIcon(e,`P`,128),placed:this.plan.has(r)||n.liftedSlot===r,order:r+1})))}refreshHud(e={}){let t=this.state!==`plan`&&this.state!==`intro`;this.d.ui.hud.update({mode:t?`run`:`plan`,variant:this.host.variant,levelName:this.level.name,maxBeats:this.level.maxBeats,goals:this.host.goals(),speed:this.d.runner.speed,canGo:this.state===`plan`&&this.plan.size>=this.host.minToys()&&this.plan.size<=this.level.hand.length,hintReady:this.state===`plan`&&this.host.canHint()&&!!this.level.solution?.length,...this.state===`plan`||this.state===`intro`?{beat:0}:{},...this.host.hudExtras(),...e})}refreshCoach(){let{coach:e,stage:t,ui:n}=this.d;if(this.level.id!==`c1-01`||this.state!==`plan`||this.plan.size!==0||this.dragged||this.disposed){e.hide(),clearInterval(this.coachTimer),this.coachTimer=0;return}let r=()=>{let r=n.root.querySelector(`.s-game .coaster`),i=Ng(this.level)[0];if(!r||!i)return;let a=r.getBoundingClientRect(),o=n.root.getBoundingClientRect(),s=t.cellToClient(i[0],i[1],0);e.show({x:a.left+a.width/2-o.left,y:a.top+a.height/2-o.top},{x:s.x-o.left,y:s.y+46-o.top})};r(),this.coachTimer||=window.setInterval(r,300)}hint(){if(this.state===`failed`&&this.retry(),this.state!==`plan`||!this.host.canHint())return;let e=Ig(this.level.solution,this.plan);e?(this.hintShown=e,this.d.stage.showGhost({kind:this.level.hand[e.slot],x:e.x,y:e.y,dir:e.dir}),this.d.ui.toast(`${Wm[this.level.hand[e.slot]].name} goes on the glowing tile`),this.host.hinted(),this.refreshPlan()):this.d.ui.toast(`Your plan matches the hint. Press GO!`)}go(){if(this.state!==`plan`)return;let e=Eg(this.plan);if(e.length<this.host.minToys())return;let{stage:t,audio:n,ui:r,planner:i,runner:a,coach:o}=this.d;i.cancel();let s;try{s=k(this.level,e,{record:!0})}catch(e){r.toast(`That plan does not fit`),console.error(e);return}this.host.went(e),n.sfx(`go`),this.result=s;let c=s.phases.length;if(s.outcome===`win`)this.endIdx=c-1;else{let e=Wg(s);this.endIdx=Math.min(c-1,e<0?3:e)}this.selected=null,this.state=`run`,o.hide(),r.card.hide(),r.hideBanner(),t.setSelected(null),t.showIntents([]),t.showGhost(null),t.setCellMarks([]),t.setZoneVisible(!1),t.setMode(`run`),n.setMood(`run`,this.level.theme),this.refreshHud({beat:0}),this.fitInsets(),this.d.runStarted(s),this.play(0,!1)}async play(e,t){let n=this.result;if(!n)return;let r=++this.token;e>this.endIdx?this.finish(!1,t):await this.d.runner.play({result:n,from:e,to:this.endIdx,onPhase:e=>this.d.ui.hud.update({beat:n.phases[e].beat})})&&r===this.token&&!this.disposed&&(this.setDockHidden(!0),n.outcome!==`win`&&await new Promise(e=>setTimeout(e,Kg/this.d.runner.speed)),r!==this.token||this.disposed||this.finish(!1,t))}stop(){if(this.state!==`run`||!this.result)return;this.token++,this.d.runner.stop();let e=this.result;this.applyBoard(e.outcome===`win`?e.final:this.boardAt(this.endIdx)),this.setDockHidden(!0),this.finish(!0,this.replaying)}replaying=!1;finish(e,t){let n=this.result;if(!n)return;let{stage:r,audio:i,ui:a}=this.d;this.replaying=!1,n.outcome===`win`?(this.state=`won`,r.setMode(`win`),r.celebrate(),i.resolve(`win`),this.refreshHud({beat:n.beats}),this.host.won(n),this.fitInsets()):(this.state=`failed`,t||i.resolve(`lose`),r.setMode(`lose`),this.refreshHud({beat:n.phases[this.endIdx]?.beat??0}),t?this.showFailSheet():this.host.failed(n,e)===`none`?(this.state=`over`,this.fitInsets()):e?this.retry():this.showFailSheet())}showFailSheet(){let e=this.result;if(!e)return;let t=e.phases[this.endIdx]?.beat??0;this.d.ui.result.showFail({reason:this.failReason(e),canHint:this.host.canHint()&&!!this.level.solution?.length,canSkip:this.host.canSkip(),beats:t}),this.d.ui.result.setReplayBeat(t),this.fitInsets()}failReason(e){if(e.outcome===`timeout`&&e.beats>=this.level.maxBeats&&this.endIdx===e.phases.length-1)return Ym.timeout;let t=e.final.some(e=>e.team===`E`&&e.crown),n=e.final.filter(e=>e.team===`E`&&e.alive&&(!t||e.crown)).length;return n>0?Ym.left(n):Ym.stalemate}retry(){if(this.state===`plan`||this.state===`intro`)return;let{stage:e,audio:t,ui:n,runner:r}=this.d;this.token++,r.stop(),n.result.hide(),this.replaying=!1,this.state=`plan`,this.result&&this.applyBoard(this.result.initial),e.setMode(`plan`),e.setZoneVisible(!0),t.setMood(`plan`,this.level.theme),this.setDockHidden(!1),this.refreshPlan(),this.fitInsets()}boardAtBeat(e){let t=this.result;if(!t)return this.pieces();if(e<=0)return t.initial;let n=-1;for(let r=0;r<=this.endIdx;r++)t.phases[r].beat<=e&&(n=r);return this.boardAt(n)}boardAt(e){let t=this.result;return e<0?t.initial:t.phases[e].after}replayBeat(e){this.state===`failed`&&this.applyBoard(this.boardAtBeat(e))}replayPlay(e){let t=this.result;if(this.state!==`failed`||!t)return;this.d.ui.result.hide(),this.applyBoard(this.boardAtBeat(e));let n=0;for(;n<=this.endIdx&&t.phases[n].beat<=e;)n++;n>this.endIdx&&(n=0),n===0&&this.applyBoard(t.initial),this.state=`run`,this.replaying=!0,this.d.stage.setMode(`run`),this.d.audio.setMood(`run`,this.level.theme),this.setDockHidden(!1),this.refreshHud({beat:e}),this.fitInsets(),this.d.runStarted(t),this.play(n,!0)}applyBoard(e){this.d.stage.resetPieces(e)}place(e){this.state!==`plan`&&this.state!==`intro`&&this.retry(),this.d.planner.setPlan(Dg(e))}snapTo(e){this.state!==`plan`&&this.retry();let t=Eg(this.plan),n=k(this.level,t,{record:!0});this.result=n,this.endIdx=n.phases.length-1;let r=Math.max(-1,Math.min(e,n.phases.length-1));this.state=`run`,this.d.stage.setSelected(null),this.d.stage.showIntents([]),this.d.stage.setCellMarks([]),this.d.stage.setZoneVisible(!1),this.d.stage.setMode(`run`),this.applyBoard(this.boardAt(r)),this.refreshHud({beat:n.phases[r]?.beat??0})}},Yg=60,Xg=.5,Zg=.26,Qg=class e{stage;audio=new Um;ui;save=new wh;haptics=new bg;gen=new yg;planner;runner;demoRunner;coach;newToy;handles;screen=`title`;session=null;gauntlet=null;demoToken=0;historyDepth=0;ignorePop=0;navToken=0;constructor(e,t){let n=this.save.data.settings;this.stage=new zp({canvas:e,quality:n.quality,onCue:e=>this.onCue(e)}),this.ui=new ch(t,this.handlers()),this.ui.setSettings(this.uiSettings()),this.applySettings(),this.runner=new Vg(this.stage,this.audio),this.runner.speed=n.speed,this.demoRunner=new Vg(this.stage,this.audio),this.coach=new xg(this.ui.root),this.newToy=new Sg(this.ui.root),this.handles=new Tg(this.ui.root,e=>this.session?.turnTo(e));let r={enterPlan:()=>this.newToy.isOpen?!1:this.session?.enterPlan()??!1,planChanged:(e,t)=>this.session?.planChanged(e,t),tapped:(e,t)=>this.session?.tapped(e,t),dragStarted:()=>this.session?.dragStarted(),idleMarks:()=>this.session?.idleMarks()??[],illegal:e=>this.session?.illegal(e)};this.planner=new Bg(this.stage,e,r),this.planner.setArmListener(e=>this.ui.tray.setSelected(e)),this.armAudioUnlock(),this.audio.onRunningChange=e=>{e?this.disarmAudioUnlock():this.armAudioUnlock()},window.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.back()}),window.addEventListener(`popstate`,()=>this.onPop()),window.addEventListener(`resize`,()=>requestAnimationFrame(()=>{this.session?this.session.fitInsets():this.fitMenuInsets()}))}static UNLOCK_EVENTS=[`pointerdown`,`pointerup`,`touchend`,`click`,`keydown`];unlockArmed=!1;onGesture=()=>{this.audio.unlock()};armAudioUnlock(){if(!this.unlockArmed){this.unlockArmed=!0;for(let t of e.UNLOCK_EVENTS)window.addEventListener(t,this.onGesture,{capture:!0})}}disarmAudioUnlock(){if(this.unlockArmed){this.unlockArmed=!1;for(let t of e.UNLOCK_EVENTS)window.removeEventListener(t,this.onGesture,{capture:!0})}}async boot(){this.stage.start(),await this.showTitle(!0),await this.stage.firstFrame}uiSettings(){let e=this.save.data.settings;return{sfx:e.sfx,music:e.music,haptics:e.haptics,quality:e.quality}}applySettings(){let e=this.save.data.settings;this.audio.setSfxOn(e.sfx),this.audio.setMusicOn(e.music),this.haptics.enabled=e.haptics}setSettings(e){let t=this.save.data.settings,n={...t,...e};this.save.data.settings=n,this.save.write(),this.applySettings(),e.quality&&e.quality!==t.quality&&this.stage.setQuality(e.quality),this.ui.setSettings(this.uiSettings())}onCue(e){(this.screen===`game`||this.screen===`gauntlet`||this.screen===`daily`)&&(this.audio.cue(e),e.type===`place`||e.type===`turn`||e.type===`lift`?this.haptics.light():(e.type===`bonk`||e.type===`boom`)&&this.haptics.strong())}handlers(){return{onMenu:e=>{if(this.audio.sfx(`tap`),e===`play`){let e=Object.values(this.save.data.levels).some(e=>e.won||e.skipped)?null:Ah(ph,this.save.data);e?this.startLevel(e):this.showLevels()}else e===`gauntlet`?this.startGauntlet():e===`daily`?this.startDaily():e===`toybox`?this.showToybox():this.showSettings()},onBack:()=>this.back(),onSelectLevel:e=>{this.audio.sfx(`tap`),this.startLevel(e)},onGo:()=>this.session?.go(),onStop:()=>this.session?.stop(),onSpeed:e=>{this.runner.speed=e,this.setSettings({speed:e}),this.session?.refreshHud()},onHint:()=>this.session?.hint(),onSkip:()=>this.skipLevel(),onNext:()=>this.next(),onReplay:()=>this.session?.retry(),onRetry:()=>this.session?.retry(),onTrayDown:(e,t)=>this.planner.trayDown(e,t),onReplayBeat:e=>this.session?.replayBeat(e),onReplayPlay:e=>this.session?.replayPlay(e),onSetting:e=>this.setSettings(e),onResetProgress:()=>{this.save.reset(),this.ui.toast(`Progress erased`)},onRunAgain:()=>void this.startGauntlet(),onExit:()=>void this.showTitle()}}enter(e){if(this.screen===`title`&&e!==`title`&&this.historyDepth===0)try{history.pushState({ttb:1},``),this.historyDepth=1}catch{}this.screen=e}onPop(){this.ignorePop>0?this.ignorePop--:(this.historyDepth=0,this.back(!0))}back(e=!1){this.audio.sfx(`back`),this.newToy.isOpen&&this.newToy.close();let t=this.screen;if(t!==`title`){if(t===`game`?this.showLevels():(t===`gauntlet`&&this.endGauntletEarly(),this.showTitle()),this.screen===`title`)!e&&this.historyDepth>0&&(this.historyDepth=0,this.ignorePop++,history.back());else if(e)try{history.pushState({ttb:1},``),this.historyDepth=1}catch{}}}endSession(){this.session?.dispose(),this.session=null,this.ui.result.hide(),this.ui.charms.hide(),this.ui.runOver.hide()}demoLevel(){return mh.find(e=>e.solution&&e.hand.length>=2&&e.pieces.length>=2)??mh[0]}async showTitle(e=!1){let t=++this.navToken;this.endSession(),this.gauntlet=null,this.screen=`title`,this.ui.show(`title`),this.ui.setMenuInfo(this.menuInfo()),await this.menuBoard(e),t===this.navToken&&this.demoLoop()}menuInfo(){let e=this.save.data,t=Uh(),n=Zh(e,t),r=e.daily.history[t]?.solved===!0;return{gauntlet:e.gauntlet.bestRound>0?`Best: round ${e.gauntlet.bestRound}`:``,daily:`${r?`Solved`:`New puzzle`}${n>=2?`, streak ${n}`:``}`}}menuMood(){this.audio.setMood(`menu`,this.stage.themeId)}async menuBoard(e){if(this.stage.themeId&&this.menuLevel&&this.session===null){this.stopDemo(),this.fitMenuInsets(),this.stage.setMode(`menu`),this.menuMood();return}let t=this.demoLevel();this.menuLevel=t,this.stopDemo(),this.fitMenuInsets(),this.stage.setMode(`menu`),this.stage.setZoneVisible(!1),this.stage.setCellMarks([]),this.stage.showIntents([]),this.stage.showGhost(null),this.stage.setSelected(null);let n=this.stage.setLevel(t,{animate:e});for(let e of t.solution??[])this.stage.placeToy(e.slot,t.hand[e.slot],e.x,e.y,e.dir);this.menuMood(),await n}menuLevel=null;fitMenuInsets(){let e=e=>this.ui.root.querySelector(e)?.getBoundingClientRect()??null,t=null,n=null;this.screen===`title`?(t=e(`.s-title .wordmark`)?.bottom??null,n=e(`.s-title .menu`)?.top??null):this.screen===`levels`&&(t=e(`.s-levels .bar`)?.bottom??null,n=e(`.s-levels .chapter`)?.top??null),t!==null&&n!==null&&n>0&&this.stage.setInsets({top:t-Yg+6,bottom:innerHeight-n+6})}stopDemo(){this.demoToken++,this.demoRunner.stop()}async demoLoop(){let e=this.menuLevel;if(!e?.solution)return;let t=++this.demoToken,n=e=>new Promise(t=>setTimeout(t,e)),r=k(e,e.solution,{record:!0});for(;t===this.demoToken&&(await n(2200),!(t!==this.demoToken||this.screen!==`title`||!await this.demoRunner.play({result:r,from:0,to:r.phases.length-1,onPhase:()=>{}})||t!==this.demoToken||(await n(1800),t!==this.demoToken)));)this.stage.resetPieces(r.initial);this.session===null&&this.menuLevel===e&&this.stage.resetPieces(r.initial)}async showLevels(){++this.navToken;let e=this.session!==null;this.endSession(),this.enter(`levels`),this.ui.show(`levels`,Nh(ph,this.save.data)),e&&(this.menuLevel=null),await this.menuBoard(e),this.navToken}showToybox(){this.stopDemo(),this.enter(`toybox`);let e=new Set(this.save.data.seenKinds),t=r.map(t=>({kind:t,icon:this.stage.renderToyIcon(t,i.includes(t)?`P`:`N`,160),unlocked:e.has(t)}));this.ui.show(`toybox`,t)}showSettings(){this.stopDemo(),this.enter(`settings`),this.ui.show(`settings`,this.uiSettings())}async meetKinds(e){let t=new Set(this.save.data.seenKinds),n=[];for(let r of e.hand)!t.has(r)&&!n.some(e=>e.kind===r)&&n.push({kind:r,team:`P`});for(let r of e.pieces)!t.has(r.kind)&&!n.some(e=>e.kind===r.kind)&&n.push({kind:r.kind,team:r.team});if(!n.length)return;this.save.data.seenKinds=[...this.save.data.seenKinds,...n.map(e=>e.kind)],this.save.write();let r=this.newToy.show(n.map(e=>({kind:e.kind,icon:this.stage.renderToyIcon(e.kind,e.team,192),grump:e.team===`E`})));this.session?.fitInsets(),await r,this.audio.sfx(`tap`)}async openSession(e,t,n,r={}){++this.navToken,this.stopDemo(),this.endSession(),this.menuLevel=null,this.enter(n),this.ui.show(`game`);let i=new Jg(e,t,{stage:this.stage,audio:this.audio,ui:this.ui,planner:this.planner,runner:this.runner,coach:this.coach,handles:this.handles,haptics:this.haptics,meetKinds:e=>this.meetKinds(e),runStarted:e=>this.countRun(e)});return this.session=i,i.started=i.start(r),i}async startLevel(e,t={}){let n=mh.find(t=>t.id===e);return n?this.openSession(n,new $g(this,n),`game`,t):null}next(){let e=this.session;if(!e)return;let t=e.host;if(t instanceof $g){let t=kh(ph,e.level.id,this.save.data);t?this.startLevel(t.id):this.showLevels()}else t instanceof n_?t.run.advance():this.showTitle()}skipLevel(){let e=this.session;if(!e||!(e.host instanceof $g))return;let t=this.save.level(e.level.id);t.fails<5||(this.save.setLevel(e.level.id,{...t,skipped:!0}),this.next())}showWin(e,t,n){this.ui.result.showWin({stars:e,goals:t,daily:n}),e.forEach((e,t)=>{e&&this.audio.sfx(`star`,{index:Math.min(2,t),delay:Xg+t*Zg})})}async startGauntlet(){this.endSession(),this.gauntlet=new t_(this,Math.random()*2**32>>>0),await this.gauntlet.advance()}endGauntletEarly(){let e=this.gauntlet;e&&!e.over&&e.finish(!1),this.gauntlet=null}async openGenerated(e,t,n,r){let i={...e.level,name:t,solution:e.solution};return this.openSession(i,n,r)}loadingToast(){let e=`Winding up a puzzle...`,t=!1,n=setTimeout(()=>{t=!0,this.ui.toast(e,3e4)},250);return()=>{clearTimeout(n),t&&this.ui.toast(e,1)}}async loadPuzzle(e,t){let n=this.loadingToast();try{return await this.gen.get(e,t)}finally{n()}}async startDaily(){let e=Uh(),t=this.loadingToast(),n;try{n=await Promise.all(Array.from({length:6},(t,n)=>this.gen.get(Kh(e,n),10)))}finally{t()}let r=n[qh(n)];await this.openGenerated(r,Jh(e),new e_(this,e),`daily`)}audioCount={phase:0,cue:0,cueTypes:{},expectPhases:0,expectKnockouts:0};countRun(e){let t=this.audioCount;t.phase=0,t.cue=0,t.cueTypes={},t.expectPhases=e.outcome===`win`?e.phases.length:(this.session?.endIdx??e.phases.length-1)+1;let n=0;for(let r of e.phases.slice(0,t.expectPhases))for(let e of r.actions)for(let t of e.events)(t.t===`ko`||t.t===`fall`||t.t===`boom`)&&n++;t.expectKnockouts=n}installAudioCounters(){let e=this.audio,t=e.phase.bind(e),n=e.cue.bind(e);e.phase=(e,n)=>{this.audioCount.phase++,t(e,n)},e.cue=e=>{this.audioCount.cue++,this.audioCount.cueTypes[e.type]=(this.audioCount.cueTypes[e.type]??0)+1,n(e)}}async debugLoad(e){let t=await this.startLevel(e,{animate:!1});return t&&await t.built,t}debugPlace(e){this.session?.place(e)}debugSolve(){let e=this.session;e?.level.solution&&(e.place(e.level.solution),e.go())}debugState(){let e=this.session;return{screen:this.screen,level:e?.level.id??null,state:e?.state??null,plan:e?Eg(e.plan):[],outcome:e?.result?.outcome??null,beats:e?.result?.beats??null,endIdx:e?.endIdx??null,selected:e?.selected??null,speed:this.runner.speed,audio:this.audioCount,gauntlet:this.gauntlet?.snapshot()??null,save:this.save.data,stage:this.stage.stats}}get gauntletRun(){return this.gauntlet}firstUnsolved(){return Ah(ph,this.save.data)}isOpen(e){return Oh(ph,e,this.save.data)}},$g=class{game;level;variant=`campaign`;constructor(e,t){this.game=e,this.level=t}rec(){return this.game.save.level(this.level.id)}goals(){let e=this.rec();return this.level.goals.map((t,n)=>({goal:t,earned:e.stars[n+1]===!0}))}hudExtras(){return{}}minToys(){return 1}canHint(){return this.rec().fails>=3}canSkip(){return this.rec().fails>=5&&!this.rec().won}hinted(){}went(){}won(e){let t=jh(this.rec(),e.goalsMet,e.beats);this.game.save.setLevel(this.level.id,t);let n=this.level.goals.map((e,n)=>({goal:e,earned:t.stars[n+1]===!0}));this.game.session?.refreshHud({goals:n}),this.game.showWin([...t.stars].slice(0,1+this.level.goals.length),n)}failed(){let e=Mh(this.rec());return this.game.save.setLevel(this.level.id,e),e.fails===3&&this.level.solution?.length?this.game.ui.toast(`Hint unlocked`):e.fails===5&&!e.won&&this.game.ui.toast(`Skip unlocked`),this.game.session?.refreshHud(),`sheet`}},e_=class{game;key;variant=`daily`;constructor(e,t){this.game=e,this.key=t}goals(){return[]}hudExtras(){let e=this.game.save.data.daily.history[this.key];return{tries:Math.max(1,(e?.tries??0)+ +!e?.solved)}}minToys(){return 1}canHint(){return!1}canSkip(){return!1}hinted(){}went(){Yh(this.game.save.data,this.key),this.game.save.write()}won(){let e=Xh(this.game.save.data,this.key);this.game.save.write(),this.game.session?.refreshHud({tries:e.tries}),this.game.showWin([!0],[],{tries:e.tries,streak:Zh(this.game.save.data,this.key)})}failed(){return this.game.session?.refreshHud(),`sheet`}},t_=class{game;seed;round=0;hearts=3;maxHearts=3;score=0;streak=0;wins=0;charms=[];over=!1;fails=0;roundWon=!1;doOverUsed=!1;peekUsed=!1;whistleUsed=!1;lastGain=0;charmAt=0;advancing=!1;constructor(e,t){this.game=e,this.seed=t}snapshot(){return{round:this.round,hearts:this.hearts,maxHearts:this.maxHearts,score:this.score,streak:this.streak,wins:this.wins,charms:[...this.charms],over:this.over}}prefetch(e){this.game.gen.get(Hh(this.seed,e),Ih(e))}async advance(){if(!(this.over||this.advancing)){this.advancing=!0;try{await this.advanceNow()}finally{this.advancing=!1}}}async advanceNow(){if(this.round>0&&this.roundWon&&Rh(this.wins)&&this.charmAt!==this.wins&&this.game.gauntletRun===this){this.charmAt=this.wins,this.game.ui.result.hide();let e=zh(this.charms,Math.random),t=this.game.ui.charms.pick(e);this.game.session?.fitInsets();let n=e[await t];this.charms.push(n),n===`spring`&&(this.maxHearts++,this.hearts++),this.game.audio.sfx(`charm`),this.game.ui.toast(`${Jm[n].name}: ${Jm[n].text}`)}if(this.game.gauntletRun!==this)return;this.round++,this.fails=0,this.roundWon=!1,this.doOverUsed=!1,this.peekUsed=!1,this.whistleUsed=!1;let e=Ih(this.round),t=await this.game.loadPuzzle(Hh(this.seed,this.round),e);if(this.game.gauntletRun!==this)return;let n=Bh(t.level,this.charms);await this.game.openGenerated({level:n,solution:t.solution},`Gauntlet`,new n_(this.game,this,e),`gauntlet`),this.prefetch(this.round+1)}finish(e){if(this.over)return;this.over=!0;let t=this.game.save.data.gauntlet,n=Math.max(t.bestScore,this.score);this.game.save.data.gauntlet={bestScore:n,bestRound:Math.max(t.bestRound,this.round),runs:t.runs+1},this.game.save.write(),e&&this.game.ui.runOver.show({score:this.score,round:this.round,best:n})}},n_=class{game;run;tier;variant=`gauntlet`;constructor(e,t,n){this.game=e,this.run=t,this.tier=n}goals(){return[]}hudExtras(){let e=this.run;return{hearts:e.hearts,maxHearts:e.maxHearts,round:e.round,score:e.score,streak:e.streak}}peekReady(){return this.run.charms.includes(`peek`)&&!this.run.peekUsed}minToys(){return+!this.peekReady()}canHint(){return this.run.charms.includes(`whistle`)&&!this.run.whistleUsed}canSkip(){return!1}hinted(){this.run.whistleUsed=!0}went(){}won(e){let t=this.run;if(!t.roundWon){t.roundWon=!0;let n=t.fails===0,r=this.game.session?.level,i=Lh({tier:this.tier,flawless:n,streak:t.streak,spare:(r?.hand.length??0)-e.stats.toysUsed,maxChain:e.stats.maxChain,goldKey:t.charms.includes(`goldkey`)});t.lastGain=i,t.score+=i,t.streak=n?t.streak+1:0,t.wins++,this.game.ui.toast(`+${i.toLocaleString(`en-US`)}${n?`  Flawless!`:``}`)}this.game.session?.refreshHud(),this.game.showWin([!0],[])}failed(e,t){let n=this.run;if(n.roundWon)return`sheet`;let r=Vh({toysPlaced:e.stats.toysUsed,owned:n.charms,doOverUsed:n.doOverUsed,peekUsed:n.peekUsed});return r.usedPeek?(n.peekUsed=!0,this.game.ui.toast(`Peek: free look`)):(n.fails++,n.streak=0,r.usedDoOver?(n.doOverUsed=!0,this.game.ui.toast(`Do-Over: this one is free`)):(n.hearts=Math.max(0,n.hearts-1),this.game.audio.sfx(`heartLost`))),this.game.session?.refreshHud(),n.hearts<=0?(n.finish(!0),`none`):`sheet`}};function r_(e){let t=e=>new Promise(t=>setTimeout(t,e));window.__ttb={game:e,load:async t=>{await e.debugLoad(t)},solve:()=>e.debugSolve(),failPlan:()=>{let t=e.session;if(!t)return null;for(let[e,n]of Ng(t.level)){if(t.level.pieces.some(t=>t.x===e&&t.y===n))continue;let r=[{slot:0,x:e,y:n,dir:0}];if(k(t.level,r).outcome!==`win`)return t.place(r),r}return null},state:()=>e.debugState(),place:t=>e.debugPlace(t),go:()=>e.session?.go(),stop:()=>e.session?.stop(),retry:()=>e.session?.retry(),hint:()=>e.session?.hint(),snap:t=>e.session?.snapTo(t),settle:async(n=2e4)=>{let r=performance.now();for(;e.session?.state===`run`&&performance.now()-r<n;)await t(50);return e.session?.state??null},screen:async t=>{t===`title`?await e.showTitle():t===`levels`?await e.showLevels():t===`toybox`?e.showToybox():e.showSettings()},gauntlet:()=>e.startGauntlet(),daily:()=>e.startDaily(),setFails:(t,n)=>e.save.setLevel(t,{...e.save.level(t),fails:n}),unlockAll:t=>{for(let n of mh){if(t&&n.id===t)break;e.save.data.levels[n.id]={..._h(),won:!0,stars:[!0,!0,!0]}}e.save.write()},seeAll:()=>{e.save.data.seenKinds=[...r],e.save.write()},wipe:()=>{e.save.reset(),e.save.data.seenKinds=[],e.save.write()},cell:(t,n)=>e.stage.cellToClient(t,n,0),grip:(t,n)=>{let r=e.stage.cellToClient(t,n,0);return{x:r.x,y:r.y+46}},coaster:t=>{let n=e.ui.root.querySelectorAll(`.s-game .coaster`)[t];if(!n)return null;let r=n.getBoundingClientRect();return{x:r.left+r.width/2,y:r.top+r.height/2}},wait:t}}window.__ready=!1,document.addEventListener(`dblclick`,e=>e.preventDefault(),{passive:!1}),document.addEventListener(`gesturestart`,e=>e.preventDefault()),document.addEventListener(`contextmenu`,e=>e.preventDefault()),document.addEventListener(`touchmove`,e=>{e.touches.length>1&&e.preventDefault()},{passive:!1});async function i_(){let e=document.getElementById(`c`),t=document.getElementById(`ui`);await Promise.race([Promise.all([document.fonts.load(`400 32px "Lilita One"`),document.fonts.load(`800 16px "Nunito Variable"`)]),new Promise(e=>setTimeout(e,2500))]).catch(()=>{});let n=new Qg(e,t);r_(n),await n.boot(),await document.fonts.ready,document.getElementById(`boot`)?.classList.add(`done`),setTimeout(()=>document.getElementById(`boot`)?.remove(),400),window.__ready=!0}i_().catch(e=>{console.error(e);let t=document.getElementById(`boot`);t&&(t.querySelector(`span`).textContent=`Could not start. Please reload.`),window.__ready=!0});