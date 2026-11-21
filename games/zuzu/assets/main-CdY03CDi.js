(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=`attached`,r=1e3,i=1001,a=1002,o=1003,s=1004,c=1005,l=1006,u=1007,d=1008,f=1009,p=1010,m=1011,h=1012,g=1013,_=1014,v=1015,y=1016,b=1017,x=1018,S=1020,C=35902,w=35899,T=1021,E=1022,D=1023,O=1026,k=1027,A=1028,j=1029,M=1030,N=1031,P=1033,F=33776,I=33777,L=33778,R=33779,ee=35840,te=35841,ne=35842,re=35843,ie=36196,z=37492,ae=37496,oe=37488,se=37489,ce=37490,le=37491,ue=37808,de=37809,fe=37810,pe=37811,me=37812,he=37813,ge=37814,_e=37815,ve=37816,ye=37817,be=37818,xe=37819,Se=37820,Ce=37821,we=36492,Te=36494,Ee=36495,De=36283,Oe=36284,ke=36285,B=36286,Ae=2200,je=2201,Me=2202,V=2300,Ne=2301,Pe=2302,Fe=2303,Ie=2400,Le=2401,Re=2402,ze=2500,Be=2501,Ve=3200,He=`srgb`,Ue=`srgb-linear`,We=`linear`,Ge=`srgb`,Ke=7680,qe=35044,Je=35048,Ye=2e3;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $e(){let e=Qe(`canvas`);return e.style.display=`block`,e}var et={};function tt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function nt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function rt(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function it(...e){let t=e.join(` `);t in et||(et[t]=!0,H(...e))}function at(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ot={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},st=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ct=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),lt=1234567,ut=Math.PI/180,dt=180/Math.PI;function ft(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ct[e&255]+ct[e>>8&255]+ct[e>>16&255]+ct[e>>24&255]+`-`+ct[t&255]+ct[t>>8&255]+`-`+ct[t>>16&15|64]+ct[t>>24&255]+`-`+ct[n&63|128]+ct[n>>8&255]+`-`+ct[n>>16&255]+ct[n>>24&255]+ct[r&255]+ct[r>>8&255]+ct[r>>16&255]+ct[r>>24&255]).toLowerCase()}function pt(e,t,n){return Math.max(t,Math.min(n,e))}function mt(e,t){return(e%t+t)%t}function ht(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function gt(e,t,n){return e===t?0:(n-e)/(t-e)}function _t(e,t,n){return(1-n)*e+n*t}function vt(e,t,n,r){return _t(e,t,1-Math.exp(-n*r))}function yt(e,t=1){return t-Math.abs(mt(e,t*2)-t)}function bt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function xt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function St(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ct(e,t){return e+Math.random()*(t-e)}function wt(e){return e*(.5-Math.random())}function Tt(e){e!==void 0&&(lt=e);let t=lt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Et(e){return e*ut}function Dt(e){return e*dt}function Ot(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function kt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function At(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function jt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:H(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Mt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Nt(e,t){if(t.constructor===Float32Array)return e;let n=Mt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Pt(e,t){if(t.constructor===Float32Array)return e;let n=Mt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var U={DEG2RAD:ut,RAD2DEG:dt,generateUUID:ft,clamp:pt,euclideanModulo:mt,mapLinear:ht,inverseLerp:gt,lerp:_t,damp:vt,pingpong:yt,smoothstep:bt,smootherstep:xt,randInt:St,randFloat:Ct,randFloatSpread:wt,seededRandom:Tt,degToRad:Et,radToDeg:Dt,isPowerOfTwo:Ot,ceilPowerOfTwo:kt,floorPowerOfTwo:At,setQuaternionFromProperEuler:jt,normalize:Pt,denormalize:Nt},W=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return It.copy(this).projectOnVector(e),this.sub(It)}reflect(e){return this.sub(It.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},It=new G,Lt=new Ft,Rt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return it(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(zt.makeScale(e,t)),this}rotate(e){return it(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(zt.makeRotation(-e)),this}translate(e,t){return it(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(zt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zt=new Rt,Bt=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vt=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ht(){let e={enabled:!0,workingColorSpace:Ue,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Wt(e.r),e.g=Wt(e.g),e.b=Wt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Gt(e.r),e.g=Gt(e.g),e.b=Gt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?We:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ue]:{primaries:t,whitePoint:r,transfer:We,toXYZ:Bt,fromXYZ:Vt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Bt,fromXYZ:Vt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),e}var Ut=Ht();function Wt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Gt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Kt,qt=class{static getDataURL(e,t=`image/png`){if(../_offline-stub.js)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kt===void 0&&(Kt=Qe(`canvas`)),Kt.width=e.width,Kt.height=e.height;let t=Kt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Kt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Wt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Wt(t[e]/255)*255):t[e]=Wt(t[e]);return{data:t,width:e.width,height:e.height}}return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Jt=0,Yt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=ft(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Xt(r[t].image)):e.push(Xt(r[t]))}else e=Xt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Xt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?qt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var Zt=0,Qt=new G,$t=class e extends st{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=i,a=i,o=l,s=d,c=D,u=f,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zt++}),this.uuid=ft(),this.name=``,this.source=new Yt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=u,this.offset=new W(0,0),this.repeat=new W(1,1),this.center=new W(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qt).x}get height(){return this.source.getSize(Qt).y}get depth(){return this.source.getSize(Qt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case r:e.x-=Math.floor(e.x);break;case i:e.x=e.x<0?0:1;break;case a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case r:e.y-=Math.floor(e.y);break;case i:e.y=e.y<0?0:1;break;case a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null,$t.DEFAULT_MAPPING=300,$t.DEFAULT_ANISOTROPY=1;var en=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tn=class extends st{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:l,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new $t({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:l,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Yt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},nn=class extends tn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rn=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},an=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},on=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/sn.setFromMatrixColumn(e,0).length(),i=1/sn.setFromMatrixColumn(e,1).length(),a=1/sn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ln,e,un)}lookAt(e,t,n){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),dn.crossVectors(n,pn),dn.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),dn.crossVectors(n,pn)),dn.normalize(),fn.crossVectors(pn,dn),r[0]=dn.x,r[4]=fn.x,r[8]=pn.x,r[1]=dn.y,r[5]=fn.y,r[9]=pn.y,r[2]=dn.z,r[6]=fn.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=sn.set(r[0],r[1],r[2]).length(),o=sn.set(r[4],r[5],r[6]).length(),s=sn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),cn.copy(this);let c=1/a,l=1/o,u=1/s;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=l,cn.elements[5]*=l,cn.elements[6]*=l,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},sn=new G,cn=new on,ln=new G(0,0,0),un=new G(1,1,1),dn=new G,fn=new G,pn=new G,mn=new on,hn=new Ft,gn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-pt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hn.setFromEuler(this),this.setFromQuaternion(hn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER=`XYZ`;var _n=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},vn=0,yn=new G,bn=new Ft,xn=new on,Sn=new G,Cn=new G,wn=new G,Tn=new Ft,En=new G(1,0,0),Dn=new G(0,1,0),On=new G(0,0,1),kn={type:`added`},An={type:`removed`},jn={type:`childadded`,child:null},Mn={type:`childremoved`,child:null},Nn=class e extends st{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vn++}),this.uuid=ft(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new G,n=new gn,r=new Ft,i=new G(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new on},normalMatrix:{value:new Rt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _n,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.multiply(bn),this}rotateOnWorldAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.premultiply(bn),this}rotateX(e){return this.rotateOnAxis(En,e)}rotateY(e){return this.rotateOnAxis(Dn,e)}rotateZ(e){return this.rotateOnAxis(On,e)}translateOnAxis(e,t){return yn.copy(e).applyQuaternion(this.quaternion),this.position.add(yn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(En,e)}translateY(e){return this.translateOnAxis(Dn,e)}translateZ(e){return this.translateOnAxis(On,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sn.copy(e):Sn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Cn,Sn,this.up):xn.lookAt(Sn,Cn,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),bn.setFromRotationMatrix(xn),this.quaternion.premultiply(bn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(rt(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null):rt(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,e,wn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,Tn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Nn.DEFAULT_UP=new G(0,1,0),Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=class extends Nn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Fn={type:`move`},In=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},zn={h:0,s:0,l:0};function Bn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ut.workingColorSpace){if(e=mt(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Bn(i,r,e+1/3),this.g=Bn(i,r,e),this.b=Bn(i,r,e-1/3)}return Ut.colorSpaceToWorking(this,r),this}setStyle(e,t=He){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){let n=Ln[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wt(e.r),this.g=Wt(e.g),this.b=Wt(e.b),this}copyLinearToSRGB(e){return this.r=Gt(e.r),this.g=Gt(e.g),this.b=Gt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return Ut.workingToColorSpace(Vn.copy(this),e),Math.round(pt(Vn.r*255,0,255))*65536+Math.round(pt(Vn.g*255,0,255))*256+Math.round(pt(Vn.b*255,0,255))}getHexString(e=He){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Vn.copy(this),t);let n=Vn.r,r=Vn.g,i=Vn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=He){Ut.workingToColorSpace(Vn.copy(this),e);let t=Vn.r,n=Vn.g,r=Vn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(zn);let n=_t(Rn.h,zn.h,t),r=_t(Rn.s,zn.s,t),i=_t(Rn.l,zn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new K;K.NAMES=Ln;var Hn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new K(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Un=class extends Nn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wn=new G,Gn=new G,Kn=new G,qn=new G,Jn=new G,Yn=new G,Xn=new G,Zn=new G,Qn=new G,$n=new G,er=new en,tr=new en,nr=new en,rr=class e{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wn.subVectors(e,t),r.cross(Wn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Wn.subVectors(r,t),Gn.subVectors(n,t),Kn.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(Gn),s=Wn.dot(Kn),c=Gn.dot(Gn),l=Gn.dot(Kn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qn)!==null&&qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,qn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,qn.x),s.addScaledVector(a,qn.y),s.addScaledVector(o,qn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return er.setScalar(0),tr.setScalar(0),nr.setScalar(0),er.fromBufferAttribute(e,t),tr.fromBufferAttribute(e,n),nr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(er,i.x),a.addScaledVector(tr,i.y),a.addScaledVector(nr,i.z),a}static isFrontFacing(e,t,n,r){return Wn.subVectors(n,t),Gn.subVectors(e,t),Wn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Wn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Jn.subVectors(r,n),Yn.subVectors(i,n),Zn.subVectors(e,n);let s=Jn.dot(Zn),c=Yn.dot(Zn);if(s<=0&&c<=0)return t.copy(n);Qn.subVectors(e,r);let l=Jn.dot(Qn),u=Yn.dot(Qn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Jn,a);$n.subVectors(e,i);let f=Jn.dot($n),p=Yn.dot($n);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Yn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Xn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Xn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Jn,a).addScaledVector(Yn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ir=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=or.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,or):or.fromBufferAttribute(r,t),or.applyMatrix4(e.matrixWorld),this.expandByPoint(or);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),hr.subVectors(this.max,mr),cr.subVectors(e.a,mr),lr.subVectors(e.b,mr),ur.subVectors(e.c,mr),dr.subVectors(lr,cr),fr.subVectors(ur,lr),pr.subVectors(cr,ur);let t=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-pr.z,pr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,pr.z,0,-pr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-pr.y,pr.x,0];return!vr(t,cr,lr,ur,hr)||(t=[1,0,0,0,1,0,0,0,1],!vr(t,cr,lr,ur,hr))?!1:(gr.crossVectors(dr,fr),t=[gr.x,gr.y,gr.z],vr(t,cr,lr,ur,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(or).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ar=[new G,new G,new G,new G,new G,new G,new G,new G],or=new G,sr=new ir,cr=new G,lr=new G,ur=new G,dr=new G,fr=new G,pr=new G,mr=new G,hr=new G,gr=new G,_r=new G;function vr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){_r.fromArray(e,a);let o=i.x*Math.abs(_r.x)+i.y*Math.abs(_r.y)+i.z*Math.abs(_r.z),s=t.dot(_r),c=n.dot(_r),l=r.dot(_r);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var yr=br();function br(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=new Uint32Array(512),i=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function xr(e){Math.abs(e)>65504&&H(`DataUtils.toHalfFloat(): Value out of range.`),e=pt(e,-65504,65504),yr.floatView[0]=e;let t=yr.uint32View[0],n=t>>23&511;return yr.baseTable[n]+((t&8388607)>>yr.shiftTable[n])}function Sr(e){let t=e>>10;return yr.uint32View[0]=yr.mantissaTable[yr.offsetTable[t]+(e&1023)]+yr.exponentTable[t],yr.floatView[0]}var Cr=class{static toHalfFloat(e){return xr(e)}static fromHalfFloat(e){return Sr(e)}},wr=new G,Tr=new W,Er=0,Dr=class extends st{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Er++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=qe,this.updateRanges=[],this.gpuType=v,this.version=0,this._normalizationScale=e===void 0?void 0:Mt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXYZ(t,wr.x,wr.y,wr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix4(e),this.setXYZ(t,wr.x,wr.y,wr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyNormalMatrix(e),this.setXYZ(t,wr.x,wr.y,wr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.transformDirection(e),this.setXYZ(t,wr.x,wr.y,wr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Nt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Pt(e,this.array):Math.round(e*t)}},Or=class extends Dr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},kr=class extends Dr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ar=class extends Dr{constructor(e,t,n){super(new Float32Array(e),t,n)}},jr=new ir,Mr=new G,Nr=new G,Pr=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?jr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);let t=Mr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Mr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Nr)),this.expandByPoint(Mr.copy(e.center).sub(Nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fr=0,Ir=new on,Lr=new Nn,Rr=new G,zr=new ir,Br=new ir,Vr=new G,Hr=class e extends st{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fr++}),this.uuid=ft(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Xe(e)?kr:Or)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Rt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ir.makeRotationFromQuaternion(e),this.applyMatrix4(Ir),this}rotateX(e){return Ir.makeRotationX(e),this.applyMatrix4(Ir),this}rotateY(e){return Ir.makeRotationY(e),this.applyMatrix4(Ir),this}rotateZ(e){return Ir.makeRotationZ(e),this.applyMatrix4(Ir),this}translate(e,t,n){return Ir.makeTranslation(e,t,n),this.applyMatrix4(Ir),this}scale(e,t,n){return Ir.makeScale(e,t,n),this.applyMatrix4(Ir),this}lookAt(e){return Lr.lookAt(e),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ar(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)rt(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];zr.setFromBufferAttribute(n),this.morphTargetsRelative?(Vr.addVectors(this.boundingBox.min,zr.min),this.boundingBox.expandByPoint(Vr),Vr.addVectors(this.boundingBox.max,zr.max),this.boundingBox.expandByPoint(Vr)):(this.boundingBox.expandByPoint(zr.min),this.boundingBox.expandByPoint(zr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)rt(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new G,1/0);else if(e){let n=this.boundingSphere.center;if(zr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Br.setFromBufferAttribute(n),this.morphTargetsRelative?(Vr.addVectors(zr.min,Br.min),zr.expandByPoint(Vr),Vr.addVectors(zr.max,Br.max),zr.expandByPoint(Vr)):(zr.expandByPoint(Br.min),zr.expandByPoint(Br.max))}zr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Vr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Vr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Vr.fromBufferAttribute(a,t),o&&(Rr.fromBufferAttribute(e,t),Vr.add(Rr)),r=Math.max(r,n.distanceToSquared(Vr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Dr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new G,s[e]=new G;let l=new G,u=new G,d=new G,f=new W,p=new W,m=new W,h=new G,g=new G;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new G,b=new G,x=new G,S=new G;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Dr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new G,i=new G,a=new G,o=new G,s=new G,c=new G,l=new G,u=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vr.fromBufferAttribute(e,t),Vr.normalize(),e.setXYZ(t,Vr.x,Vr.y,Vr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Dr(a,r,i)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ur=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=qe,this.updateRanges=[],this.version=0,this.uuid=ft()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Wr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Wr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Wr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=ft()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Gr=new G,Kr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:Mt(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix4(e),this.setXYZ(t,Gr.x,Gr.y,Gr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyNormalMatrix(e),this.setXYZ(t,Gr.x,Gr.y,Gr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.transformDirection(e),this.setXYZ(t,Gr.x,Gr.y,Gr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){tt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Dr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?Nt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Pt(e,this.data.array):Math.round(e*t)}},qr=new G,Jr=new G,Yr=new Rt,Xr=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=qr.subVectors(n,t).cross(Jr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(qr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yr.getNormalMatrix(e),r=this.coplanarPoint(qr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Zr=0,Qr=class extends st{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zr++}),this.uuid=ft(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ke,this.stencilZFail=Ke,this.stencilZPass=Ke,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Xr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new W().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new W().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},$r=class extends Qr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ei,ti=new G,ni=new G,ri=new G,ii=new W,ai=new W,oi=new on,si=new G,ci=new G,li=new G,ui=new W,di=new W,fi=new W,pi=class extends Nn{constructor(e=new $r){if(super(),this.isSprite=!0,this.type=`Sprite`,ei===void 0){ei=new Hr;let e=new Ur(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);ei.setIndex([0,1,2,0,2,3]),ei.setAttribute(`position`,new Kr(e,3,0,!1)),ei.setAttribute(`uv`,new Kr(e,2,3,!1))}this.geometry=ei,this.material=e,this.center=new W(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&rt(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),ni.setFromMatrixScale(this.matrixWorld),oi.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ri.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ni.multiplyScalar(-ri.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;mi(si.set(-.5,-.5,0),ri,a,ni,r,i),mi(ci.set(.5,-.5,0),ri,a,ni,r,i),mi(li.set(.5,.5,0),ri,a,ni,r,i),ui.set(0,0),di.set(1,0),fi.set(1,1);let o=e.ray.intersectTriangle(si,ci,li,!1,ti);if(o===null&&(mi(ci.set(-.5,.5,0),ri,a,ni,r,i),di.set(0,1),o=e.ray.intersectTriangle(si,li,ci,!1,ti),o===null))return;let s=e.ray.origin.distanceTo(ti);s<e.near||s>e.far||t.push({distance:s,point:ti.clone(),uv:rr.getInterpolation(ti,si,ci,li,ui,di,fi,new W),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function mi(e,t,n,r,i,a){ii.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ai.copy(ii):(ai.x=a*ii.x-i*ii.y,ai.y=i*ii.x+a*ii.y),e.copy(t),e.x+=ai.x,e.y+=ai.y,e.applyMatrix4(oi)}var hi=new G,gi=new G,_i=new G,vi=new G,yi=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gi.copy(e).add(t).multiplyScalar(.5),_i.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(gi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(_i),o=vi.dot(this.direction),s=-vi.dot(_i),c=vi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(gi).addScaledVector(_i,d),f}intersectSphere(e,t){if(e.radius<0)return null;hi.subVectors(e.center,this.origin);let n=hi.dot(this.direction),r=hi.dot(hi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,R=E-F*D,ee=O-P*A,te=k-F*A,ne=j-P*N,re=M-F*N,ie=ne*te-re*ee,z=L*re-R*ne,ae=ee*R-te*L;if(r){if(ie<0||z<0||ae<0)return null}else if((ie<0||z<0||ae<0)&&(ie>0||z>0||ae>0))return null;let oe=ie+z+ae;if(oe===0)return null;let se=I*(ie*D+z*A+ae*N);return(oe>0?se<0:se>0)?null:this.at(se/oe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bi=class extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xi=new on,Si=new yi,Ci=new Pr,wi=new G,Ti=new G,Ei=new G,Di=new G,Oi=new G,ki=new G,Ai=new G,ji=new G,q=class extends Nn{constructor(e=new Hr,t=new bi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ki.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Oi.fromBufferAttribute(s,e),a?ki.addScaledVector(Oi,r):ki.addScaledVector(Oi.sub(t),r))}t.add(ki)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ci.copy(n.boundingSphere),Ci.applyMatrix4(i),Si.copy(e.ray).recast(e.near),Ci.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Ci,wi)===null||Si.origin.distanceToSquared(wi)>(e.far-e.near)**2)||(xi.copy(i).invert(),Si.copy(e.ray).applyMatrix4(xi),(n.boundingBox===null||Si.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ni(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ni(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ni(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ni(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Mi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ji.copy(s),ji.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ji);return l<n.near||l>n.far?null:{distance:l,point:ji.clone(),object:e}}function Ni(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ti),e.getVertexPosition(c,Ei),e.getVertexPosition(l,Di);let u=Mi(e,t,n,r,Ti,Ei,Di,Ai);if(u){let e=new G;rr.getBarycoord(Ai,Ti,Ei,Di,e),i&&(u.uv=rr.getInterpolatedAttribute(i,s,c,l,e,new W)),a&&(u.uv1=rr.getInterpolatedAttribute(a,s,c,l,e,new W)),o&&(u.normal=rr.getInterpolatedAttribute(o,s,c,l,e,new G),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new G,materialIndex:0};rr.getNormal(Ti,Ei,Di,t.normal),u.face=t,u.barycoord=e}return u}var Pi=new en,Fi=new en,Ii=new en,Li=new en,Ri=new on,zi=new G,Bi=new Pr,Vi=new on,Hi=new yi,Ui=class extends q{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=n,this.bindMatrix=new on,this.bindMatrixInverse=new on,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ir),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,zi),this.boundingBox.expandByPoint(zi)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,zi),this.boundingSphere.expandByPoint(zi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bi.copy(this.boundingSphere),Bi.applyMatrix4(r),e.ray.intersectsSphere(Bi)!==!1&&(Vi.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(Vi),(this.boundingBox===null||Hi.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Hi)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new en,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():H(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Fi.fromBufferAttribute(r.attributes.skinIndex,e),Ii.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Pi.copy(t),t.set(0,0,0,0)):(Pi.set(t.x,t.y,t.z,1),t.set(0,0,0)),Pi.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Ii.getComponent(e);if(r!==0){let i=Fi.getComponent(e);Ri.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Li.copy(Pi).applyMatrix4(Ri),r)}}return t.isVector4&&(t.w=Pi.w),t.applyMatrix4(this.bindMatrixInverse)}},Wi=class extends Nn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Gi=class extends $t{constructor(e=null,t=1,n=1,r,i,a,s,c,l=o,u=o,d,f){super(null,a,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ki=new on,qi=new on,Ji=class e{constructor(e=[],t=[]){this.uuid=ft(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){H(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new on)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new on;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:qi;Ki.multiplyMatrices(i,t[r]),Ki.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Gi(t,e,e,D,v);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(H(`Skeleton: No bone found with UUID:`,r),i=new Wi),this.bones.push(i),this.boneInverses.push(new on().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Yi=class extends Dr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xi=new on,Zi=new on,Qi=[],$i=new ir,ea=new on,ta=new q,na=new Pr,ra=class extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ea)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ir),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),$i.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union($i)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),na.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(n),e.ray.intersectsSphere(na)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Xi),Zi.multiplyMatrices(n,Xi),ta.matrixWorld=Zi,ta.raycast(e,Qi);for(let e=0,n=Qi.length;e<n;e++){let n=Qi[e];n.instanceId=i,n.object=this,t.push(n)}Qi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gi(new Float32Array(r*this.count),r,this.count,A,v));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ia=new Pr,aa=new W(.5,.5),oa=new G,sa=class{constructor(e=new Xr,t=new Xr,n=new Xr,r=new Xr,i=new Xr,a=new Xr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ye,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ia.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ia.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ia)}intersectsSprite(e){return ia.center.set(0,0,0),ia.radius=.7071067811865476+aa.distanceTo(e.center),ia.applyMatrix4(e.matrixWorld),this.intersectsSphere(ia)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(oa.x=r.normal.x>0?e.max.x:e.min.x,oa.y=r.normal.y>0?e.max.y:e.min.y,oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ca=new on,la=class e{constructor(){this.coordinateSystem=Ye,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];ca.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new sa),n[e].setFromProjectionMatrix(ca,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new sa),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},ua=class extends Qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},da=new G,fa=new G,pa=new on,ma=new yi,ha=new Pr,ga=new G,_a=new G,va=class extends Nn{constructor(e=new Hr,t=new ua){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)da.fromBufferAttribute(t,e-1),fa.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=da.distanceTo(fa);e.setAttribute(`lineDistance`,new Ar(n,1))}else H(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),ha.radius+=i,e.ray.intersectsSphere(ha)===!1)return;pa.copy(r).invert(),ma.copy(e.ray).applyMatrix4(pa);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ya(this,e,ma,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ya(this,e,ma,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ya(this,e,ma,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ya(this,e,ma,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ya(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(da.fromBufferAttribute(s,i),fa.fromBufferAttribute(s,a),n.distanceSqToSegment(da,fa,ga,_a)>r)return;ga.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ga);if(!(c<t.near||c>t.far))return{distance:c,point:_a.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ba=new G,xa=new G,Sa=class extends va{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ba.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ba.distanceTo(xa);e.setAttribute(`lineDistance`,new Ar(n,1))}else H(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ca=class extends va{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},wa=class extends Qr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ta=new on,Ea=new yi,Da=new Pr,Oa=new G,ka=class extends Nn{constructor(e=new Hr,t=new wa){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Da.radius+=i,e.ray.intersectsSphere(Da)===!1)return;Ta.copy(r).invert(),Ea.copy(e.ray).applyMatrix4(Ta);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Oa.fromBufferAttribute(l,n),Aa(Oa,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Oa.fromBufferAttribute(l,a),Aa(Oa,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Aa(e,t,n,r,i,a,o){let s=Ea.distanceSqToPoint(e);if(s<n){let n=new G;Ea.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ja=class extends $t{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ma=class extends $t{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Na=class extends $t{constructor(e,t,n=_,r,i,a,s=o,c=o,l,u=O,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pa=class extends Na{constructor(e,t=_,n=301,r,i,a=o,s=o,c,l=O){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fa=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ia=class e extends Hr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ar(c,3)),this.setAttribute(`normal`,new Ar(l,3)),this.setAttribute(`uv`,new Ar(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new G;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},La=class e extends Hr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new G,g=new G;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new Ar(o,3)),this.setAttribute(`normal`,new Ar(s,3)),this.setAttribute(`uv`,new Ar(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ra=class e extends Hr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new G,l=new W;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Ar(a,3)),this.setAttribute(`normal`,new Ar(o,3)),this.setAttribute(`uv`,new Ar(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},za=class e extends Hr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Ar(u,3)),this.setAttribute(`normal`,new Ar(d,3)),this.setAttribute(`uv`,new Ar(f,2));function _(){let a=new G,_=new G,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new W,m=new G,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ba=class e extends Hr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Ar(i,3)),this.setAttribute(`normal`,new Ar(i.slice(),3)),this.setAttribute(`uv`,new Ar(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new G,r=new G,i=new G;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new G;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new G;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new G,t=new G,n=new G,r=new G,o=new W,s=new W,c=new W;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Va=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){H(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new W:new G);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new G,r=[],i=[],a=[],o=new G,s=new on;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new G)}i[0]=new G,a[0]=new G;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(pt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(pt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ha=class extends Va{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new W){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ua=class extends Ha{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Wa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ga=new G,Ka=new G,qa=new Wa,Ja=new Wa,Ya=new Wa,Xa=class extends Va{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new G){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ka.subVectors(r[0],r[1]).add(r[0]),c=Ka);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ga.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ga),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),qa.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ja.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ya.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(qa.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ja.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ya.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(qa.calc(s),Ja.calc(s),Ya.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Za(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Qa(e,t){let n=1-e;return n*n*t}function $a(e,t){return 2*(1-e)*e*t}function eo(e,t){return e*e*t}function to(e,t,n,r){return Qa(e,t)+$a(e,n)+eo(e,r)}function no(e,t){let n=1-e;return n*n*n*t}function ro(e,t){let n=1-e;return 3*n*n*e*t}function io(e,t){return 3*(1-e)*e*e*t}function ao(e,t){return e*e*e*t}function oo(e,t,n,r,i){return no(e,t)+ro(e,n)+io(e,r)+ao(e,i)}var so=class extends Va{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(oo(e,r.x,i.x,a.x,o.x),oo(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},co=class extends Va{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(oo(e,r.x,i.x,a.x,o.x),oo(e,r.y,i.y,a.y,o.y),oo(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lo=class extends Va{constructor(e=new W,t=new W){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends Va{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends Va{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(to(e,r.x,i.x,a.x),to(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends Va{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(to(e,r.x,i.x,a.x),to(e,r.y,i.y,a.y),to(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends Va{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new W){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Za(o,s.x,c.x,l.x,u.x),Za(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this}},ho=Object.freeze({__proto__:null,ArcCurve:Ua,CatmullRomCurve3:Xa,CubicBezierCurve:so,CubicBezierCurve3:co,EllipseCurve:Ha,LineCurve:lo,LineCurve3:uo,QuadraticBezierCurve:fo,QuadraticBezierCurve3:po,SplineCurve:mo}),go=class extends Va{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ho[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ho[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},_o=class extends go{constructor(e){super(),this.type=`Path`,this.currentPoint=new W,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new lo(this.currentPoint.clone(),new W(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new fo(this.currentPoint.clone(),new W(e,t),new W(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new so(this.currentPoint.clone(),new W(e,t),new W(n,r),new W(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new mo([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ha(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vo=class extends _o{constructor(e){super(e),this.uuid=ft(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new _o().fromJSON(n))}return this}};function yo(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=bo(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Do(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return So(a,o,n,s,c,l,0),o}function bo(e,t,n,r,i){let a;if(i===Zo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Jo(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Jo(i/r|0,e[i],e[i+1],a);return a&&Bo(a,a.next)&&(Yo(a),a=a.next),a}function xo(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Bo(n,n.next)||zo(n.prev,n,n.next)===0)){if(Yo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function So(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Mo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?wo(e,r,i,a):Co(e))t.push(c.i,e.i,l.i),Yo(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=To(xo(e),t),So(e,t,n,r,i,a,2)):o===2&&Eo(e,t,n,r,i,a):So(xo(e),t,n,r,i,a,1);break}}}function Co(e){let t=e.prev,n=e,r=e.next;if(zo(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Lo(i,s,a,c,o,l,m.x,m.y)&&zo(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function wo(e,t,n,r){let i=e.prev,a=e,o=e.next;if(zo(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Po(p,m,t,n,r),v=Po(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Lo(s,u,c,d,l,f,y.x,y.y)&&zo(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Lo(s,u,c,d,l,f,b.x,b.y)&&zo(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Lo(s,u,c,d,l,f,y.x,y.y)&&zo(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Lo(s,u,c,d,l,f,b.x,b.y)&&zo(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function To(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Bo(r,i)&&Vo(r,n,n.next,i)&&Go(r,i)&&Go(i,r)&&(t.push(r.i,n.i,i.i),Yo(n),Yo(n.next),n=e=i),n=n.next}while(n!==e);return xo(n)}function Eo(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ro(o,e)){let s=qo(o,e);o=xo(o,o.next),s=xo(s,s.next),So(o,t,n,r,i,a,0),So(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Do(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=bo(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Fo(o))}i.sort(Oo);for(let e=0;e<i.length;e++)n=ko(i[e],n);return n}function Oo(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ko(e,t){let n=Ao(e,t);if(!n)return t;let r=qo(n,e);return xo(r,r.next),xo(n,n.next)}function Ao(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Bo(e,n))return n;do{if(Bo(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Io(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Go(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&jo(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function jo(e,t){return zo(e.prev,e,t.prev)<0&&zo(t.next,e,e.next)<0}function Mo(e,t,n,r){let i=e;do i.z===0&&(i.z=Po(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,No(i)}function No(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Po(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Fo(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Io(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Lo(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Io(e,t,n,r,i,a,o,s)}function Ro(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Wo(e,t)&&(Go(e,t)&&Go(t,e)&&Ko(e,t)&&(zo(e.prev,e,t.prev)||zo(e,t.prev,t))||Bo(e,t)&&zo(e.prev,e,e.next)>0&&zo(t.prev,t,t.next)>0)}function zo(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Bo(e,t){return e.x===t.x&&e.y===t.y}function Vo(e,t,n,r){let i=Uo(zo(e,t,n)),a=Uo(zo(e,t,r)),o=Uo(zo(n,r,e)),s=Uo(zo(n,r,t));return!!(i!==a&&o!==s||i===0&&Ho(e,n,t)||a===0&&Ho(e,r,t)||o===0&&Ho(n,e,r)||s===0&&Ho(n,t,r))}function Ho(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Uo(e){return e>0?1:e<0?-1:0}function Wo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Vo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Go(e,t){return zo(e.prev,e,e.next)<0?zo(e,t,e.next)>=0&&zo(e,e.prev,t)>=0:zo(e,t,e.prev)<0||zo(e,e.next,t)<0}function Ko(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function qo(e,t){let n=Xo(e.i,e.x,e.y),r=Xo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Jo(e,t,n,r){let i=Xo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Yo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Xo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Qo=class{static triangulate(e,t,n=2){return yo(e,t,n)}},$o=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];es(e),ts(n,e);let a=e.length;t.forEach(es);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,ts(n,t[e]);let o=Qo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function es(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function ts(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var ns=class e extends Hr{constructor(e=new vo([new W(.5,.5),new W(-.5,.5),new W(-.5,-.5),new W(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Ar(r,3)),this.setAttribute(`uv`,new Ar(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?rs:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new G,b=new G,x=new G}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!$o.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];$o.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||rt(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new W(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new W(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=$o.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ne(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);ne(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=$o.triangulateShape(e,t)}let I=F.length,L=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],L):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ne(x.x,x.y,x.z)):ne(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],L):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ne(x.x,x.y,x.z)):ne(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ne(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?ne(i.x,i.y+g[s-1].y,g[s-1].x+n):ne(i.x,i.y,c+n)}}}R(),ee();function R(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<I;e++){let n=F[e];re(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<I;e++){let n=F[e];re(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<I;e++){let t=F[e];re(t[2],t[1],t[0])}for(let e=0;e<I;e++){let t=F[e];re(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ee(){let e=r.length/3,t=0;te(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];te(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function te(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ie(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ne(e,t,n){a.push(e),a.push(t),a.push(n)}function re(e,t,i){z(e),z(t),z(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ae(o[0]),ae(o[1]),ae(o[2])}function ie(e,t,i,a){z(e),z(t),z(a),z(t),z(i),z(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ae(s[0]),ae(s[1]),ae(s[3]),ae(s[1]),ae(s[2]),ae(s[3])}function z(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ae(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return is(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ho[i.type]().fromJSON(i)),new e(r,t.options)}},rs={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new W(a,o),new W(s,c),new W(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new W(o,1-c),new W(l,1-d),new W(f,1-m),new W(h,1-_)]:[new W(s,1-c),new W(u,1-d),new W(p,1-m),new W(g,1-_)]}};function is(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var as=class e extends Ba{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},os=class e extends Hr{constructor(e=[new W(0,-.5),new W(.5,0),new W(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=pt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new G,d=new W,f=new G,p=new G,m=new G,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Ar(a,3)),this.setAttribute(`uv`,new Ar(o,2)),this.setAttribute(`normal`,new Ar(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},ss=class e extends Hr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ar(p,3)),this.setAttribute(`normal`,new Ar(m,3)),this.setAttribute(`uv`,new Ar(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},cs=class e extends Hr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new G,p=new W;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Ar(s,3)),this.setAttribute(`normal`,new Ar(c,3)),this.setAttribute(`uv`,new Ar(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ls=class e extends Hr{constructor(e=new vo([new W(0,.5),new W(-.5,-.5),new W(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Ar(r,3)),this.setAttribute(`normal`,new Ar(i,3)),this.setAttribute(`uv`,new Ar(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;$o.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];$o.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=$o.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return us(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function us(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var ds=class e extends Hr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new G,d=new G,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Ar(p,3)),this.setAttribute(`normal`,new Ar(m,3)),this.setAttribute(`uv`,new Ar(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},fs=class e extends Hr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new G,f=new G,p=new G;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Ar(c,3)),this.setAttribute(`normal`,new Ar(l,3)),this.setAttribute(`uv`,new Ar(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},ps=class e extends Hr{constructor(e=new po(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new G,s=new G,c=new W,l=new G,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Ar(u,3)),this.setAttribute(`normal`,new Ar(d,3)),this.setAttribute(`uv`,new Ar(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ho[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ms(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(gs(i))i.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(gs(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function hs(e){let t={};for(let n=0;n<e.length;n++){let r=ms(e[n]);for(let e in r)t[e]=r[e]}return t}function gs(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function _s(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function vs(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ut.workingColorSpace}var ys={clone:ms,merge:hs},bs=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xs=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ss=class extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bs,this.fragmentShader=xs,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=_s(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new en().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Rt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new on().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Cs=class extends Ss{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ws=class extends Qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ts=class extends ws{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new W(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new K(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new K(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new K(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return it(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){it(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Es=class extends Qr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new K(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ds=class extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ve,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Os=class extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ks(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function As(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function js(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Ms(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Ns(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var Ps=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Fs=class extends Ps{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Le:i=e,o=2*t-n;break;case Re:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Le:a=e,s=2*n-t;break;case Re:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Is=class extends Ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ls=class extends Ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Rs=class extends Ps{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Vs(n,t,g,y,r);i[p]=zs(x,o,_,b,m)}return i}};function zs(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Bs(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Vs(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=zs(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Bs(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Hs=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ks(t,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ks(e.times,Array),values:ks(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),As(e.settings)&&(n.settings={inTangents:ks(e.settings.inTangents,Array),outTangents:ks(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ls(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Is(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Rs(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case V:t=this.InterpolantFactoryMethodDiscrete;break;case Ne:t=this.InterpolantFactoryMethodLinear;break;case Pe:t=this.InterpolantFactoryMethodSmooth;break;case Fe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return V;case this.InterpolantFactoryMethodLinear:return Ne;case this.InterpolantFactoryMethodSmooth:return Pe;case this.InterpolantFactoryMethodBezier:return Fe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;As(this.settings)&&(Us(this.settings.inTangents,e),Us(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;As(this.settings)&&(Ws(this.settings.inTangents,e),Ws(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(rt(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){rt(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){rt(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){rt(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Pe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,As(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Us(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Ws(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Hs.prototype.ValueTypeName=``,Hs.prototype.TimeBufferType=Float32Array,Hs.prototype.ValueBufferType=Float32Array,Hs.prototype.DefaultInterpolation=Ne;var Gs=class extends Hs{constructor(e,t,n){super(e,t,n)}};Gs.prototype.ValueTypeName=`bool`,Gs.prototype.ValueBufferType=Array,Gs.prototype.DefaultInterpolation=V,Gs.prototype.InterpolantFactoryMethodLinear=void 0,Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ks=class extends Hs{constructor(e,t,n,r){super(e,t,n,r)}};Ks.prototype.ValueTypeName=`color`;var qs=class extends Hs{constructor(e,t,n,r){super(e,t,n,r)}};qs.prototype.ValueTypeName=`number`;var Js=class extends Ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ft.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ys=class extends Hs{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Js(this.times,this.values,this.getValueSize(),e)}};Ys.prototype.ValueTypeName=`quaternion`,Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends Hs{constructor(e,t,n){super(e,t,n)}};Xs.prototype.ValueTypeName=`string`,Xs.prototype.ValueBufferType=Array,Xs.prototype.DefaultInterpolation=V,Xs.prototype.InterpolantFactoryMethodLinear=void 0,Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zs=class extends Hs{constructor(e,t,n,r){super(e,t,n,r)}};Zs.prototype.ValueTypeName=`vector`;var Qs=class{constructor(e=``,t=-1,n=[],r=ze){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ft(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(ec(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(Hs.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=js(o);o=Ms(o,1,c),s=Ms(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new qs(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function $s(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return qs;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Zs;case`color`:return Ks;case`quaternion`:return Ys;case`bool`:case`boolean`:return Gs;case`string`:return Xs}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function ec(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=$s(e.type);if(e.times===void 0){let t=[],n=[];Ns(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),As(e.settings)&&(n.settings={inTangents:ks(e.settings.inTangents,Float32Array),outTangents:ks(e.settings.outTangents,Float32Array)}),n}var tc={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(nc(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!nc(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function nc(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var rc=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},ic=class{constructor(e){this.manager=e===void 0?rc:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},this.priority=`auto`,this.cache=`default`,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ic.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ac={},oc=class extends Error{constructor(e,t){super(e),this.response=t}},sc=class extends ic{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=tc.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(ac[e]!==void 0){ac[e].push({onLoad:t,onProgress:n,onError:r});return}ac[e]=[],ac[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&H(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=ac[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new oc(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{tc.add(`file:${e}`,t);let n=ac[e];delete ac[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=ac[e];if(n===void 0)throw this.manager.itemError(e),t;delete ac[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},cc=new WeakMap,lc=class extends ic{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=tc.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=cc.get(a);e===void 0&&(e=[],cc.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Qe(`img`);function s(){l(),t&&t(this);let n=cc.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}cc.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),tc.remove(`image:${e}`);let n=cc.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}cc.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),tc.add(`image:${e}`,o),i.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},uc=class extends ic{constructor(e){super(e)}load(e,t,n,r){let i=new $t,a=new lc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},dc=class extends Nn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fc=class extends dc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},pc=new on,mc=new G,hc=new G,gc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new W(512,512),this.mapType=f,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new W(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(mc),hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){pc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(pc,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_c=new G,vc=new Ft,yc=new G,bc=class extends Nn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_c,vc,yc),yc.x===1&&yc.y===1&&yc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,vc,yc.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_c,vc,yc),yc.x===1&&yc.y===1&&yc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,vc,yc.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xc=new G,Sc=new W,Cc=new W,wc=class extends bc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ut*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dt*2*Math.atan(Math.tan(ut*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xc.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xc.x,xc.y).multiplyScalar(-e/xc.z),xc.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xc.x,xc.y).multiplyScalar(-e/xc.z)}getViewSize(e,t){return this.getViewBounds(e,Sc,Cc),t.subVectors(Cc,Sc)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ut*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tc=class extends gc{constructor(){super(new wc(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=dt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ec=class extends dc{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Tc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Dc=class extends gc{constructor(){super(new wc(90,1,.5,500)),this.isPointLightShadow=!0}},Oc=class extends dc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Dc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},kc=class extends bc{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ac=class extends gc{constructor(){super(new kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jc=class extends dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new Ac}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Mc=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(../_offline-stub.js\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Nc=new WeakMap,Pc=class extends ic{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&H(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&H(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=tc.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{Nc.has(a)===!0?(r&&r(Nc.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!==`anonymous`?`include`:`same-origin`,o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return tc.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),Nc.set(s,t),tc.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});tc.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Fc=-90,Ic=1,Lc=class extends Nn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wc(Fc,Ic,e,t);r.layers=this.layers,this.add(r);let i=new wc(Fc,Ic,e,t);i.layers=this.layers,this.add(i);let a=new wc(Fc,Ic,e,t);a.layers=this.layers,this.add(a);let o=new wc(Fc,Ic,e,t);o.layers=this.layers,this.add(o);let s=new wc(Fc,Ic,e,t);s.layers=this.layers,this.add(s);let c=new wc(Fc,Ic,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Rc=class extends wc{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},zc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,i,a;switch(t){case`quaternion`:r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case`string`:case`bool`:r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=Array(n*5);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,i=e*r+r,a=this.cumulativeWeight;if(a===0){for(let e=0;e!==r;++e)n[i+e]=n[e];a=t}else{a+=t;let e=t/a;this._mixBufferRegion(n,i,0,e,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){let e=t*this._origIndex;this._mixBufferRegion(n,r,e,1-i,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let e=t,i=t+t;e!==i;++e)if(n[e]!==n[e+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let e=n,i=r;e!==i;++e)t[e]=t[r+e%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,i){if(r>=.5)for(let r=0;r!==i;++r)e[t+r]=e[n+r]}_slerp(e,t,n,r){Ft.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,i){let a=this._workIndex*i;Ft.multiplyQuaternionsFlat(e,a,e,t,e,n),Ft.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,i){let a=1-r;for(let o=0;o!==i;++o){let i=t+o;e[i]=e[i]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,i){for(let a=0;a!==i;++a){let i=t+a;e[i]=e[i]+e[n+a]*r}}},Bc=`\\[\\]\\.:\\/`,Vc=RegExp(`[\\[\\]\\.:\\/]`,`g`),Hc=`[^\\[\\]\\.:\\/]`,Uc=`[^`+Bc.replace(`\\.`,``)+`]`,Wc=`((?:WC+[\\/:])*)`.replace(`WC`,Hc),Gc=`(WCOD+)?`.replace(`WCOD`,Uc),Kc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Hc),qc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Hc),Jc=RegExp(`^`+Wc+Gc+Kc+qc+`$`),Yc=[`material`,`materials`,`bones`,`map`],Xc=class{constructor(e,t,n){let r=n||Zc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Vc,``)}static parseTrackName(e){let t=Jc.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Yc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){rt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){rt(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){rt(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){rt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){rt(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){rt(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){rt(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;rt(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){rt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){rt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zc.Composite=Xc,Zc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Zc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Zc.prototype.GetterByBindingType=[Zc.prototype._getValue_direct,Zc.prototype._getValue_array,Zc.prototype._getValue_arrayElement,Zc.prototype._getValue_toArray],Zc.prototype.SetterByBindingTypeAndVersioning=[[Zc.prototype._setValue_direct,Zc.prototype._setValue_direct_setNeedsUpdate,Zc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zc.prototype._setValue_array,Zc.prototype._setValue_array_setNeedsUpdate,Zc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zc.prototype._setValue_arrayElement,Zc.prototype._setValue_arrayElement_setNeedsUpdate,Zc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zc.prototype._setValue_fromArray,Zc.prototype._setValue_fromArray_setNeedsUpdate,Zc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qc=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let i=t.tracks,a=i.length,o=Array(a),s={endingStart:Ie,endingEnd:Ie};for(let e=0;e!==a;++e){let t=i[e].createInterpolant(null);o[e]=t,t.settings=s}this._interpolantSettings=s,this._interpolants=o,this._propertyBindings=Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=je,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let n=this._clip.duration,r=e._clip.duration,i=r/n,a=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,i,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,i=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let s=o.parameterPositions,c=o.sampleValues;return s[0]=i,s[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let i=this._startTime;if(i!==null){let r=(e-i)*n;r<0||n===0?t=0:(this._startTime=null,t=n*r)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let e=this._interpolants,t=this._propertyBindings;switch(this.blendMode){case Be:for(let n=0,r=e.length;n!==r;++n)e[n].evaluate(a),t[n].accumulateAdditive(o);break;case ze:default:for(let n=0,i=e.length;n!==i;++n)e[n].evaluate(a),t[n].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,i=this._loopCount,a=n===Me;if(e===0)return i===-1?r:a&&(i&1)==1?t-r:r;if(n===2200){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));handle_stop:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break handle_stop}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let n=Math.floor(r/t);r-=t*n,i+=Math.abs(n);let o=this.repetitions-i;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e>0?1:-1});else{if(o===1){let t=e<0;this._setEndings(t,!t,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=r,this._mixer.dispatchEvent({type:`loop`,action:this,loopDelta:n})}}else this._loopCount=i,this.time=r;if(a&&(i&1)==1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Le,r.endingEnd=Le):(r.endingStart=e?this.zeroSlopeAtStart?Le:Ie:Re,r.endingEnd=t?this.zeroSlopeAtEnd?Le:Ie:Re)}_scheduleFading(e,t,n){let r=this._mixer,i=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,s=a.sampleValues;return o[0]=i,s[0]=t,o[1]=i+e,s[1]=n,this}},$c=new Float32Array(1),el=class extends st{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,i=r.length,a=e._propertyBindings,o=e._interpolants,s=n.uuid,c=this._bindingsByRootAndName,l=c[s];l===void 0&&(l={},c[s]=l);for(let e=0;e!==i;++e){let i=r[e],c=i.name,u=l[c];if(u!==void 0)++u.referenceCount,a[e]=u;else{if(u=a[e],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,s,c));continue}let r=t&&t._propertyBindings[e].binding.parsedPath;u=new zc(Zc.create(n,c,r),i.ValueTypeName,i.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,s,c),a[e]=u}o[e].resultBuffer=u.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let t=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,t)}let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,i=this._actionsByClip,a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{let t=a.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let i=e._clip.uuid,a=this._actionsByClip,o=a[i],s=o.knownActions,c=s[s.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],s.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,i=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],s=t[t.length-1],c=e._cacheIndex;s._cacheIndex=c,t[c]=s,t.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Is(new Float32Array(2),new Float32Array(2),1,$c),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,i=t[r];e.__cacheIndex=r,t[r]=e,i.__cacheIndex=n,t[n]=i}clipAction(e,t,n){let r=t||this._root,i=r.uuid,a=typeof e==`string`?Qs.findByName(r,e):e,o=a===null?e:a.uuid,s=this._actionsByClip[o],c=null;if(n===void 0&&(n=a===null?ze:a.blendMode),s!==void 0){let e=s.actionByRoot[i];if(e!==void 0&&e.blendMode===n)return e;c=s.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let l=new Qc(this,a,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,i),l}existingAction(e,t){let n=t||this._root,r=n.uuid,i=typeof e==`string`?Qs.findByName(n,e):e,a=i?i.uuid:e,o=this._actionsByClip[a];return o===void 0?null:o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1;for(let o=0;o!==n;++o)t[o]._update(r,e,i,a);let o=this._bindings,s=this._nActiveBindings;for(let e=0;e!==s;++e)o[e].apply(a);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){let e=i.knownActions;for(let n=0,r=e.length;n!==r;++n){let r=e[n];this._deactivateAction(r);let i=r._cacheIndex,a=t[t.length-1];r._cacheIndex=null,r._byClipCacheIndex=null,a._cacheIndex=i,t[i]=a,t.pop(),this._removeInactiveBindingsForAction(r)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let e in n){let r=n[e].actionByRoot[t];r!==void 0&&(this._deactivateAction(r),this._removeInactiveAction(r))}let r=this._bindingsByRootAndName[t];if(r!==void 0)for(let e in r){let t=r[e];t.restoreOriginalState(),this._removeInactiveBinding(t)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},tl=new on,nl=class{constructor(e,t,n=0,r=1/0){this.ray=new yi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new _n,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return tl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tl),this}intersectObject(e,t=!0,n=[]){return il(e,this,n,t),n.sort(rl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)il(e[r],this,n,t);return n.sort(rl),n}};function rl(e,t){return e.distance-t.distance}function il(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)il(r[e],t,n,!0)}}var al=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=pt(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var ol=class extends st{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function sl(e,t,n,r){let i=cl(r);switch(n){case T:return e*t;case A:return e*t/i.components*i.byteLength;case j:return e*t/i.components*i.byteLength;case M:return e*t*2/i.components*i.byteLength;case N:return e*t*2/i.components*i.byteLength;case E:return e*t*3/i.components*i.byteLength;case D:return e*t*4/i.components*i.byteLength;case P:return e*t*4/i.components*i.byteLength;case F:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case L:case R:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case te:case re:return Math.max(e,16)*Math.max(t,8)/4;case ee:case ne:return Math.max(e,8)*Math.max(t,8)/2;case ie:case z:case oe:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ae:case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case we:case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*16;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ke:case B:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function cl(e){switch(e){case f:case p:return{byteLength:1,components:1};case h:case m:case y:return{byteLength:2,components:1};case b:case x:return{byteLength:2,components:4};case _:case g:case v:return{byteLength:4,components:1};case C:case w:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function ll(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ul(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var dl={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},J={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},fl={basic:{uniforms:hs([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:dl.meshbasic_vert,fragmentShader:dl.meshbasic_frag},lambert:{uniforms:hs([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:dl.meshlambert_vert,fragmentShader:dl.meshlambert_frag},phong:{uniforms:hs([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dl.meshphong_vert,fragmentShader:dl.meshphong_frag},standard:{uniforms:hs([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dl.meshphysical_vert,fragmentShader:dl.meshphysical_frag},toon:{uniforms:hs([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new K(0)}}]),vertexShader:dl.meshtoon_vert,fragmentShader:dl.meshtoon_frag},matcap:{uniforms:hs([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:dl.meshmatcap_vert,fragmentShader:dl.meshmatcap_frag},points:{uniforms:hs([J.points,J.fog]),vertexShader:dl.points_vert,fragmentShader:dl.points_frag},dashed:{uniforms:hs([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dl.linedashed_vert,fragmentShader:dl.linedashed_frag},depth:{uniforms:hs([J.common,J.displacementmap]),vertexShader:dl.depth_vert,fragmentShader:dl.depth_frag},normal:{uniforms:hs([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:dl.meshnormal_vert,fragmentShader:dl.meshnormal_frag},sprite:{uniforms:hs([J.sprite,J.fog]),vertexShader:dl.sprite_vert,fragmentShader:dl.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dl.background_vert,fragmentShader:dl.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:dl.backgroundCube_vert,fragmentShader:dl.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dl.cube_vert,fragmentShader:dl.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dl.equirect_vert,fragmentShader:dl.equirect_frag},distance:{uniforms:hs([J.common,J.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dl.distance_vert,fragmentShader:dl.distance_frag},shadow:{uniforms:hs([J.lights,J.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:dl.shadow_vert,fragmentShader:dl.shadow_frag}};fl.physical={uniforms:hs([fl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new W},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:dl.meshphysical_vert,fragmentShader:dl.meshphysical_frag};var pl={r:0,b:0,g:0},ml=new on,hl=new Rt;hl.set(-1,0,0,0,1,0,0,0,1);function gl(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new q(new Ia(1,1,1),new Ss({name:`BackgroundCubeMaterial`,uniforms:ms(fl.backgroundCube.uniforms),vertexShader:fl.backgroundCube.vertexShader,fragmentShader:fl.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ml.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hl),l.material.toneMapped=Ut.getTransfer(i.colorSpace)!==Ge,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new ss(2,2),new Ss({name:`BackgroundMaterial`,uniforms:ms(fl.background.uniforms),vertexShader:fl.background.vertexShader,fragmentShader:fl.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ut.getTransfer(i.colorSpace)!==Ge,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(pl,vs(e)),n.buffers.color.setClear(pl.r,pl.g,pl.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function _l(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function vl(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function yl(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(H(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&H(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function bl(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Xr,s=new Rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var xl=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ja(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ia(5,5,5),i=new Ss({name:`CubemapFromEquirect`,uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=l),new Lc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Sl=256,Cl=3,wl=20,Tl=256,El=16,Dl=3,Ol=new G,kl=new K,Al=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Lc(1,10,null),this._boxMesh=new q(new Ia(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ol}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(kl));let h=new Lc(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Sl,At(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Sl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=jl(e,!1,!1),n=Math.log2(e)-Cl;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=jl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Il()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Nl(),this._integrationMaterial=Pl());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/El);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Dl)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Tl*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Fl());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function jl(e,t,n){return new xl(e,{minFilter:d,generateMipmaps:t,type:y,colorSpace:Ue,depthBuffer:n})}function Ml(e,t,n){return new Ss({name:e,uniforms:t,vertexShader:dl.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Nl(){return Ml(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Tl}u

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
	`)}function Pl(){return Ml(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:El}},`

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
	`)}function Fl(){return Ml(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${wl}
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
	`)}function Il(){return Ml(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

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
	`)}function Ll(){return Ml(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Rl(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new xl(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Al(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Al(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function zl(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&it(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Bl(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?kr:Or)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Vl(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Hl(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:rt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ul(e,t,n){let r=new WeakMap,i=new en;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new rn(h,p,m,u);g.type=v,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new W(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Wl(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Gl={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Kl(e,t,n,r,i,a){let o=new nn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Hr;u.setAttribute(`position`,new Ar([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Ar([0,2,0,0,2,0],2));let d=new Cs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new q(u,d),p=new kc(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,b=[],x=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,x=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&s===null&&(s=new nn(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}),c=new nn(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&b.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Na(t,n),a===!0&&(l.format=k,l.type=S)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<b.length;e++){let i=b[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&b.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Ut.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Gl[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var ql=new $t,Jl=new Na(1,1),Yl=new Pa(1),Xl=new rn,Zl=new an,Ql=new ja,$l=[],eu=[],tu=new Float32Array(16),nu=new Float32Array(9),ru=new Float32Array(4);function iu(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=$l[i];if(a===void 0&&(a=new Float32Array(i),$l[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function au(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ou(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function su(e,t){let n=eu[t];n===void 0&&(n=new Int32Array(t),eu[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function cu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function lu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(au(n,t))return;e.uniform2fv(this.addr,t),ou(n,t)}}function uu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(au(n,t))return;e.uniform3fv(this.addr,t),ou(n,t)}}function du(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(au(n,t))return;e.uniform4fv(this.addr,t),ou(n,t)}}function fu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(au(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ou(n,t)}else{if(au(n,r))return;ru.set(r),e.uniformMatrix2fv(this.addr,!1,ru),ou(n,r)}}function pu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(au(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ou(n,t)}else{if(au(n,r))return;nu.set(r),e.uniformMatrix3fv(this.addr,!1,nu),ou(n,r)}}function mu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(au(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ou(n,t)}else{if(au(n,r))return;tu.set(r),e.uniformMatrix4fv(this.addr,!1,tu),ou(n,r)}}function hu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function gu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(au(n,t))return;e.uniform2iv(this.addr,t),ou(n,t)}}function _u(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(au(n,t))return;e.uniform3iv(this.addr,t),ou(n,t)}}function vu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(au(n,t))return;e.uniform4iv(this.addr,t),ou(n,t)}}function yu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function bu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(au(n,t))return;e.uniform2uiv(this.addr,t),ou(n,t)}}function xu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(au(n,t))return;e.uniform3uiv(this.addr,t),ou(n,t)}}function Su(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(au(n,t))return;e.uniform4uiv(this.addr,t),ou(n,t)}}function Cu(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function wu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Cu(Jl):ql,n.setTexture2D(t||a,i)}function Tu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Zl,i)}function Eu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Cu(Yl):Ql,n.setTextureCube(t||a,i)}function Du(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Xl,i)}function Ou(e){switch(e){case 5126:return cu;case 35664:return lu;case 35665:return uu;case 35666:return du;case 35674:return fu;case 35675:return pu;case 35676:return mu;case 5124:case 35670:return hu;case 35667:case 35671:return gu;case 35668:case 35672:return _u;case 35669:case 35673:return vu;case 5125:return yu;case 36294:return bu;case 36295:return xu;case 36296:return Su;case 35678:case 36198:case 36298:case 36306:case 35682:return wu;case 35679:case 36299:case 36307:return Tu;case 35680:case 36300:case 36308:case 36293:return Eu;case 36289:case 36303:case 36311:case 36292:return Du}}function ku(e,t){e.uniform1fv(this.addr,t)}function Au(e,t){let n=iu(t,this.size,2);e.uniform2fv(this.addr,n)}function ju(e,t){let n=iu(t,this.size,3);e.uniform3fv(this.addr,n)}function Mu(e,t){let n=iu(t,this.size,4);e.uniform4fv(this.addr,n)}function Nu(e,t){let n=iu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Pu(e,t){let n=iu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Fu(e,t){let n=iu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Iu(e,t){e.uniform1iv(this.addr,t)}function Lu(e,t){e.uniform2iv(this.addr,t)}function Ru(e,t){e.uniform3iv(this.addr,t)}function zu(e,t){e.uniform4iv(this.addr,t)}function Bu(e,t){e.uniform1uiv(this.addr,t)}function Vu(e,t){e.uniform2uiv(this.addr,t)}function Hu(e,t){e.uniform3uiv(this.addr,t)}function Uu(e,t){e.uniform4uiv(this.addr,t)}function Wu(e,t,n){let r=this.cache,i=t.length,a=su(n,i);au(r,a)||(e.uniform1iv(this.addr,a),ou(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Cu(Jl):ql;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Gu(e,t,n){let r=this.cache,i=t.length,a=su(n,i);au(r,a)||(e.uniform1iv(this.addr,a),ou(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Zl,a[e])}function Ku(e,t,n){let r=this.cache,i=t.length,a=su(n,i);au(r,a)||(e.uniform1iv(this.addr,a),ou(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Cu(Yl):Ql;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function qu(e,t,n){let r=this.cache,i=t.length,a=su(n,i);au(r,a)||(e.uniform1iv(this.addr,a),ou(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Xl,a[e])}function Ju(e){switch(e){case 5126:return ku;case 35664:return Au;case 35665:return ju;case 35666:return Mu;case 35674:return Nu;case 35675:return Pu;case 35676:return Fu;case 5124:case 35670:return Iu;case 35667:case 35671:return Lu;case 35668:case 35672:return Ru;case 35669:case 35673:return zu;case 5125:return Bu;case 36294:return Vu;case 36295:return Hu;case 36296:return Uu;case 35678:case 36198:case 36298:case 36306:case 35682:return Wu;case 35679:case 36299:case 36307:return Gu;case 35680:case 36300:case 36308:case 36293:return Ku;case 36289:case 36303:case 36311:case 36292:return qu}}var Yu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ou(t.type)}},Xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ju(t.type)}},Zu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Qu=/(\w+)(\])?(\[|\.)?/g;function $u(e,t){e.seq.push(t),e.map[t.id]=t}function ed(e,t,n){let r=e.name,i=r.length;for(Qu.lastIndex=0;;){let a=Qu.exec(r),o=Qu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){$u(n,l===void 0?new Yu(s,e,t):new Xu(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Zu(s),$u(n,e)),n=e}}}var td=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ed(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function nd(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var rd=37297,id=0;function ad(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var od=new Rt;function sd(e){Ut._getMatrix(od,Ut.workingColorSpace,e);let t=`mat3( ${od.elements.map(e=>e.toFixed(4))} )`;switch(Ut.getTransfer(e)){case We:return[t,`LinearTransferOETF`];case Ge:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function cd(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ad(e.getShaderSource(t),r)}return i}function ld(e,t){let n=sd(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var ud={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function dd(e,t){let n=ud[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var fd=new G;function pd(){return Ut.getLuminanceCoefficients(fd),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${fd.x.toFixed(4)}, ${fd.y.toFixed(4)}, ${fd.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function md(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(_d).join(`
`)}function hd(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function gd(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function _d(e){return e!==``}function vd(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function yd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bd=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(e){return e.replace(bd,Sd)}function Sd(e,t){let n=dl[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return xd(n)}var Cd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(e){return e.replace(Cd,Td)}function Td(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ed(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Dd={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Od(e){return Dd[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var kd={302:`ENVMAP_MODE_REFRACTION`};function Ad(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:kd[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var jd={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Md(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:jd[e.combine]||`ENVMAP_BLENDING_NONE`}function Nd(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Od(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Ad(n),d=Md(n),f=md(n),p=hd(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(_d).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(_d).join(`
`),g.length>0&&(g+=`
`)):(h=[Ed(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(_d).join(`
`),g=[Ed(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:dl.tonemapping_pars_fragment,n.toneMapping===0?``:dd(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,dl.colorspace_pars_fragment,ld(`linearToOutputTexel`,n.outputColorSpace),pd(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(_d).join(`
`)),o=xd(o),o=vd(o,n),o=yd(o,n),s=xd(s),s=vd(s,n),s=yd(s,n),o=wd(o),s=wd(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=nd(i,i.VERTEX_SHADER,v),x=nd(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=cd(i,b,`vertex`),n=cd(i,x,`fragment`);rt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):H(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new td(i,m),w=gd(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,rd)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=id++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Pd=0,Fd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Id(e),t.set(e,n)),n}},Id=class{constructor(e){this.id=Pd++,this.code=e,this.usedTimes=0}};function Ld(e){return e===1030||e===37490||e===36285}function Rd(e,t,n,r,i,a){let o=new _n,s=new Fd,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&H(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=fl[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,I=!!b,L=I&&b.isPMREMTexture===!0,R=!!i.aoMap,ee=!!i.lightMap,te=!!i.bumpMap&&i.wireframe===!1,ne=!!i.normalMap,re=!!i.displacementMap,ie=!!i.emissiveMap,z=!!i.metalnessMap,ae=!!i.roughnessMap,oe=i.anisotropy>0,se=i.clearcoat>0,ce=i.diffuseRoughness>0,le=i.dispersion>0,ue=i.retroreflectivity>0,de=i.iridescence>0,fe=i.sheen>0,pe=i.transmission>0,me=oe&&!!i.anisotropyMap,he=se&&!!i.clearcoatMap,ge=se&&!!i.clearcoatNormalMap,_e=se&&!!i.clearcoatRoughnessMap,ve=ce&&!!i.diffuseRoughnessMap,ye=de&&!!i.iridescenceMap,be=de&&!!i.iridescenceThicknessMap,xe=fe&&!!i.sheenColorMap,Se=fe&&!!i.sheenRoughnessMap,Ce=!!i.specularMap,we=!!i.specularColorMap,Te=!!i.specularIntensityMap,Ee=pe&&!!i.transmissionMap,De=pe&&!!i.thicknessMap,Oe=!!i.gradientMap,ke=!!i.alphaMap,B=i.alphaTest>0,Ae=!!i.alphaHash,je=!!i.extensions,Me=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Me=e.toneMapping);let V=L?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ne={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:I,envMapMode:I&&b.mapping,envMapPMREM:L,envMapMaxLod:L?V.length-1:null,envMapSize:L?V[0].width:null,aoMap:R,lightMap:ee,bumpMap:te,normalMap:ne,displacementMap:re,emissiveMap:ie,normalMapObjectSpace:ne&&i.normalMapType===1,normalMapTangentSpace:ne&&i.normalMapType===0,packedNormalMap:ne&&i.normalMapType===0&&Ld(i.normalMap.format),metalnessMap:z,roughnessMap:ae,anisotropy:oe,anisotropyMap:me,clearcoat:se,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,diffuseRoughness:ce,diffuseRoughnessMap:ve,dispersion:le,retroreflection:ue,iridescence:de,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:fe,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:we,specularIntensityMap:Te,transmission:pe,transmissionMap:Ee,thicknessMap:De,gradientMap:Oe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ke,alphaTest:B,alphaHash:Ae,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:R&&p(i.aoMap.channel),lightMapUv:ee&&p(i.lightMap.channel),bumpMapUv:te&&p(i.bumpMap.channel),normalMapUv:ne&&p(i.normalMap.channel),displacementMapUv:re&&p(i.displacementMap.channel),emissiveMapUv:ie&&p(i.emissiveMap.channel),metalnessMapUv:z&&p(i.metalnessMap.channel),roughnessMapUv:ae&&p(i.roughnessMap.channel),anisotropyMapUv:me&&p(i.anisotropyMap.channel),clearcoatMapUv:he&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ve&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:ye&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:be&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Se&&p(i.sheenRoughnessMap.channel),specularMapUv:Ce&&p(i.specularMap.channel),specularColorMapUv:we&&p(i.specularColorMap.channel),specularIntensityMapUv:Te&&p(i.specularIntensityMap.channel),transmissionMapUv:Ee&&p(i.transmissionMap.channel),thicknessMapUv:De&&p(i.thicknessMap.channel),alphaMapUv:ke&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ne||oe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||ke),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ne===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Ut.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ie&&i.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:je&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=fl[t];n=ys.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Nd(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function zd(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Bd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Vd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Hd(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Bd),r.length>1&&r.sort(t||Vd),i.length>1&&i.sort(t||Vd)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ud(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Hd,e.set(t,[i])):n>=r.length?(i=new Hd,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Wd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new G,color:new K};break;case`SpotLight`:n={position:new G,direction:new G,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new G,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new G,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new G,halfWidth:new G,halfHeight:new G}}return e[t.id]=n,n}}}function Gd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Kd=0;function qd(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Jd(e){let t=new Wd,n=Gd(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new G);let i=new G,a=new on,o=new on;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(qd);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Kd++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Yd(e){let t=new Jd(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Xd(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Yd(e),t.set(n,[a])):r>=i.length?(a=new Yd(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qd=`uniform sampler2D shadow_pass;
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
}`,$d=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],ef=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],tf=new on,nf=new G,rf=new G;function af(e,t,n){let r=new sa,i=new W,a=new W,s=new en,c=new Ds,u=new Os,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:Zd,fragmentShader:Qd}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Hr;g.setAttribute(`position`,new Dr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new q(g,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,c){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){H(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new nn(i.x,i.y,{format:M,type:y,minFilter:l,magFilter:l,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Na(i.x,i.y,v),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=O,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o}else d.isPointLight?(p.map=new xl(i.x),p.map.depthTexture=new Pa(i.x,_)):(p.map=new nn(i.x,i.y),p.map.depthTexture=new Na(i.x,i.y,_)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=O,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=l,p.map.depthTexture.magFilter=l):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,c);let S=p.camera.layers.mask&4294967294?p.camera.layers:c.layers;for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),nf.setFromMatrixPosition(d.matrixWorld),e.position.copy(nf),rf.copy(e.position),rf.add($d[t]),e.up.copy(ef[t]),e.lookAt(rf),e.updateMatrixWorld(),n.makeTranslation(-nf.x,-nf.y,-nf.z),tf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(tf,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(s)}r=p.getFrustum(t),T(n,c,i,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,c),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new nn(i.x,i.y,{format:M,type:y}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)T(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function of(e,t){function n(){let t=!1,n=new en,r=null,i=new en(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?z(e.DEPTH_TEST):ae(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ot[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?z(e.STENCIL_TEST):ae(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},R=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),te=new en().fromArray(R),ne=new en().fromArray(ee);function re(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ie={};ie[e.TEXTURE_2D]=re(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=re(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[e.TEXTURE_2D_ARRAY]=re(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ie[e.TEXTURE_3D]=re(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),z(e.DEPTH_TEST),o.setFunc(3),pe(!1),me(1),z(e.CULL_FACE),de(0);function z(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ae(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function oe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function se(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ce(t){return h!==t&&(e.useProgram(t),h=t,!0)}let le={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};le[103]=e.MIN,le[104]=e.MAX;let ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function de(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ae(e.BLEND),g=!1);else if(g===!1&&(z(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:rt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:rt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:rt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:rt(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(le[n],le[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ue[r],ue[i],ue[o],ue[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function fe(t,n){t.side===2?ae(e.CULL_FACE):z(e.CULL_FACE);let r=t.side===1;n&&(r=!r),pe(r),t.blending===1&&t.transparent===!1?de(0):de(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ge(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?z(e.SAMPLE_ALPHA_TO_COVERAGE):ae(e.SAMPLE_ALPHA_TO_COVERAGE)}function pe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function me(t){t===0?ae(e.CULL_FACE):(z(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function he(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ge(t,n,r){t?(z(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ae(e.POLYGON_OFFSET_FILL)}function _e(t){t?z(e.SCISSOR_TEST):ae(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function ye(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||ie[t]),i.type=t,i.texture=n)}function be(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function ke(){try{e.texImage2D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function B(){try{e.texImage3D(...arguments)}catch(e){rt(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Me(t){te.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),te.copy(t))}function V(t){ne.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ne.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Pe(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,te.set(0,0,e.canvas.width,e.canvas.height),ne.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:z,disable:ae,bindFramebuffer:oe,drawBuffers:se,useProgram:ce,setBlending:de,setMaterial:fe,setFlipSided:pe,setCullFace:me,setLineWidth:he,setPolygonOffset:ge,setScissorTest:_e,activeTexture:ve,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:ke,texImage3D:B,pixelStorei:je,getParameter:Ae,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:Me,viewport:V,reset:Fe}}function sf(e,t,n,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new W,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):Qe(`canvas`)}function D(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),H(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function A(t){e.generateMipmap(t)}function j(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?We:Ut.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function N(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function P(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function F(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function I(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function L(e){ee(e.target)}function R(e){te(e.target)}function ee(e){e.removeEventListener(`dispose`,L),I(e),re(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function te(e){e.removeEventListener(`dispose`,R),I(e),z(e)}function ne(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?te(t):ee(t))}C.clear(),b.clear()}function re(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ie(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function ie(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function z(t){let n=f.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&ee(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=f.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(i[t])}f.remove(t)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=p.maxTextures&&H(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function de(t,r){let i=f.get(t);if(t.isVideoTexture&&Ne(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&i.__version!==t.version){let e=t.image;if(e===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(i,t,r);return}}else t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,i.__webglTexture,e.TEXTURE0+r)}function fe(t,r){let i=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version?Se(i,t,r):(t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,i.__webglTexture,e.TEXTURE0+r))}function pe(t,r){let i=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version?Se(i,t,r):n.bindTexture(e.TEXTURE_3D,i.__webglTexture,e.TEXTURE0+r)}function me(t,r){let i=f.get(t);t.version>0&&i.__version!==t.version?Ce(i,t,r):n.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture,e.TEXTURE0+r)}let he={[r]:e.REPEAT,[i]:e.CLAMP_TO_EDGE,[a]:e.MIRRORED_REPEAT},ge={[o]:e.NEAREST,[s]:e.NEAREST_MIPMAP_NEAREST,[c]:e.NEAREST_MIPMAP_LINEAR,[l]:e.LINEAR,[u]:e.LINEAR_MIPMAP_NEAREST,[d]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,he[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,he[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,he[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ge[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ge[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,_e[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,L),F(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=ue(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ie(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=be(n.start,r.width,4),c=be(t.start,r.width,4);n.start<=i+1&&a===c&&be(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Se(t,r,i){let a=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(a=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(a=e.TEXTURE_3D);let o=ye(t,r),s=r.source;n.bindTexture(a,t.__webglTexture,e.TEXTURE0+i);let c=f.get(s);if(s.version!==c.__version||o===!0){if(n.activeTexture(e.TEXTURE0+i),!(typeof ImageBitmap<`u`&&r.image instanceof ImageBitmap)){let t=Ut.getPrimaries(Ut.workingColorSpace),i=r.colorSpace===``?null:Ut.getPrimaries(r.colorSpace),a=r.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let t=D(r.image,!1,p.maxTextureSize);t=Pe(r,t);let l=m.convert(r.format,r.colorSpace),u=m.convert(r.type),d=M(r.internalFormat,l,u,r.normalized,r.colorSpace,r.isVideoTexture);ve(a,r);let f,h=r.mipmaps,g=r.isVideoTexture!==!0,_=c.__version===void 0||o===!0,v=s.dataReady,y=P(r,t);if(r.isDepthTexture)d=N(r.format===k,r.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,d,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,null));else if(r.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data);r.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height),v&&xe(r,t,l,u)):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,t.data)}else if(r.isCompressedTexture){if(r.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(f=h[i],r.format!==1023){if(l!==null){if(g){if(v){if(r.layerUpdates.size>0){let t=sl(f.width,f.height,r.format,r.type);for(let a of r.layerUpdates){let r=f.data.subarray(a*t/f.data.BYTES_PER_ELEMENT,(a+1)*t/f.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,f.width,f.height,1,l,r)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,f.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,f.data,0,0)}else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,u,f.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,l,u,f.data);r.layerUpdates.size>0&&r.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)f=h[t],r.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data):l===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,f.data):n.compressedTexImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,f.data)}}else if(r.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,t.width,t.height,t.depth),v){if(r.layerUpdates.size>0){let i=sl(t.width,t.height,r.format,r.type);for(let a of r.layerUpdates){let r=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,l,u,r)}r.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,d,t.width,t.height,t.depth,0,l,u,t.data)}else if(r.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,d,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)):n.texImage3D(e.TEXTURE_3D,0,d,t.width,t.height,t.depth,0,l,u,t.data);else if(r.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height);else{let r=t.width,i=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,d,r,i,0,l,u,null),r>>=1,i>>=1}}}else if(r.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(r),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Fe(h[0]);n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height)}for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,l,u,f):n.texImage2D(e.TEXTURE_2D,t,d,l,u,f);r.generateMipmaps=!1}else if(g){if(_){let r=Fe(t);n.texStorage2D(e.TEXTURE_2D,y,d,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,l,u,t)}else n.texImage2D(e.TEXTURE_2D,0,d,l,u,t);O(r)&&r.mipmapsAutoUpdate===!0&&A(a),c.__version=s.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function Ce(t,r,i){if(r.image.length!==6)return;let a=ye(t,r),o=r.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+i);let s=f.get(o);if(o.version!==s.__version||a===!0){n.activeTexture(e.TEXTURE0+i);let t=Ut.getPrimaries(Ut.workingColorSpace),c=r.colorSpace===``?null:Ut.getPrimaries(r.colorSpace),l=r.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=r.isCompressedTexture||r.image[0].isCompressedTexture,d=r.image[0]&&r.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!u&&!d?f[e]=D(r.image[e],!0,p.maxCubemapSize):f[e]=d?r.image[e].image:r.image[e],f[e]=Pe(r,f[e]);let h=f[0],g=m.convert(r.format,r.colorSpace),_=m.convert(r.type),v=M(r.internalFormat,g,_,r.normalized,r.colorSpace),y=r.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=P(r,h);ve(e.TEXTURE_CUBE_MAP,r);let C;if(r.isDepthTexture){if(v=N(r.format===k,r.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(u){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let i=0;i<C.length;i++){let a=C[i];r.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,g,_,a.data):g===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,a.data)}}}else{if(C=r.mipmaps,y&&b){C.length>0&&S++;let t=Fe(f[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(d){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}O(r)&&r.mipmapsAutoUpdate===!0&&A(e.TEXTURE_CUBE_MAP),s.__version=o.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function we(t,r,i,a,o,s){let c=m.convert(i.format,i.colorSpace),l=m.convert(i.type),u=M(i.internalFormat,c,l,i.normalized,i.colorSpace),d=f.get(r),p=f.get(i);if(p.__renderTarget=r,!d.__hasExternalTextures){let t=Math.max(1,r.width>>s),i=Math.max(1,r.height>>s);o===e.TEXTURE_3D||o===e.TEXTURE_2D_ARRAY?n.texImage3D(o,s,u,t,i,r.depth,0,c,l,null):n.texImage2D(o,s,u,t,i,0,c,l,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),V(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,a,o,p.__webglTexture,0,Me(r)):(o===e.TEXTURE_2D||o>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&o<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,a,o,p.__webglTexture,s),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=N(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;V(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=M(a.internalFormat,o,s,a.normalized,a.colorSpace);V(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,r,i){let a=r.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let o=f.get(r.depthTexture);o.__renderTarget=r;let s=a?r.depthTexture.image[0]:r.depthTexture.image;o.__webglTexture&&s.width===r.width&&s.height===r.height||(s.width=r.width,s.height=r.height,r.depthTexture.needsUpdate=!0),a?me(r.depthTexture,0):de(r.depthTexture,0);let c=o.__webglTexture,l=Me(r),u=a?e.TEXTURE_CUBE_MAP_POSITIVE_X+i:e.TEXTURE_2D,d=r.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===1026)V(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else if(r.depthTexture.format===1027)V(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let r=f.get(t),i=t.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),e){let t=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),r.__depthDisposeCallback=t}r.__boundDepthTexture=e}if(t.depthTexture&&!r.__autoAllocateDepthBuffer){if(i)for(let e=0;e<6;e++)Ee(r.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Ee(r.__webglFramebuffer[0],t,0):Ee(r.__webglFramebuffer,t,0)}else if(i){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]===void 0)r.__webglDepthbuffer[i]=e.createRenderbuffer(),Te(r.__webglDepthbuffer[i],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=r.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),Te(r.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,i)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,r){let i=f.get(t);n!==void 0&&we(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&De(t)}function ke(t){let r=t.texture,i=f.get(t),a=f.get(r);t.addEventListener(`dispose`,R),F(t);let o=t.textures,s=t.isWebGLCubeRenderTarget===!0,c=o.length>1;if(c||(a.__webglTexture===void 0&&(a.__webglTexture=e.createTexture()),a.__version=r.version,h.memory.textures++),s){i.__webglFramebuffer=[];for(let t=0;t<6;t++)if(r.mipmaps.length>0){i.__webglFramebuffer[t]=[];for(let n=0;n<r.mipmaps.length;n++)i.__webglFramebuffer[t][n]=e.createFramebuffer()}else i.__webglFramebuffer[t]=e.createFramebuffer()}else{if(r.mipmaps.length>0){i.__webglFramebuffer=[];for(let t=0;t<r.mipmaps.length;t++)i.__webglFramebuffer[t]=e.createFramebuffer()}else i.__webglFramebuffer=e.createFramebuffer();if(c)for(let t=0,n=o.length;t<n;t++){let n=f.get(o[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&V(t)===!1){i.__webglMultisampledFramebuffer=e.createFramebuffer(),i.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,i.__webglMultisampledFramebuffer);for(let n=0;n<o.length;n++){let r=o[n];i.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,i.__webglColorRenderbuffer[n]);let a=m.convert(r.format,r.colorSpace),s=m.convert(r.type),c=M(r.internalFormat,a,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,i.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(i.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(i.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(s){n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ve(e.TEXTURE_CUBE_MAP,r);for(let n=0;n<6;n++)if(r.mipmaps.length>0)for(let a=0;a<r.mipmaps.length;a++)we(i.__webglFramebuffer[n][a],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,a);else we(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);O(r)?A(e.TEXTURE_CUBE_MAP):r.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,r.mipmaps.length-1),n.unbindTexture()}else if(c){for(let r=0,a=o.length;r<a;r++){let a=o[r],s=f.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),ve(c,a),we(i.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+r,c,0),O(a)&&A(c)}n.unbindTexture()}else{let o=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(o=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(o,a.__webglTexture),ve(o,r),r.mipmaps.length>0)for(let n=0;n<r.mipmaps.length;n++)we(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,o,n);else we(i.__webglFramebuffer,t,r,e.COLOR_ATTACHMENT0,o,0);O(r)?A(o):r.mipmaps.length>0&&e.texParameteri(o,e.TEXTURE_MAX_LEVEL,r.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&De(t)}function B(e){let t=e.textures;for(let r=0,i=t.length;r<i;r++){let i=t[r];if(O(i)&&i.mipmapsAutoUpdate===!0){let t=j(e),r=f.get(i).__webglTexture;n.bindTexture(t,r),A(t),n.unbindTexture()}}}let Ae=[];function je(t){if(t.samples>0){if(V(t)===!1){let r=t.textures,i=t.width,a=t.height,o=e.COLOR_BUFFER_BIT,s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=f.get(t),l=r.length>1;if(l)for(let t=0;t<r.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let n=0;n<r.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(o|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(o|=e.STENCIL_BUFFER_BIT)),l){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,c.__webglColorRenderbuffer[n]);let t=f.get(r[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,i,a,0,0,i,a,o,e.NEAREST),_===!0&&(Ae.length=0,Ae.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ae.push(s),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),l)for(let t=0;t<r.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,c.__webglColorRenderbuffer[t]);let i=f.get(r[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,i,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Me(e){return Math.min(p.maxSamples,e.samples)}function V(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ne(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ut.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):rt(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=de,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=V,this.dispose=ne}function cf(e,t){function n(n,r=``){let i,a=Ut.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var lf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uf=`
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

}`,df=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ss({vertexShader:lf,fragmentShader:uf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ff=class extends st{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,g=new df,v={},y=t.getContextAttributes(),b=null,x=null,C=[],w=[],T=new W,E=null,A=null,j=new wc;j.viewport=new en;let M=new wc;M.viewport=new en;let N=[j,M],P=new Rc,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new In,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new In,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new In,C[e]=t),t.getHandSpace()};function L(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function R(){r.removeEventListener(`select`,L),r.removeEventListener(`selectstart`,L),r.removeEventListener(`selectend`,L),r.removeEventListener(`squeeze`,L),r.removeEventListener(`squeezestart`,L),r.removeEventListener(`squeezeend`,L),r.removeEventListener(`end`,R),r.removeEventListener(`inputsourceschange`,ee);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}F=null,I=null,g.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),p=null,d=null,u=null,r=null,x=null,z.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?p:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,L),r.addEventListener(`selectstart`,L),r.addEventListener(`selectend`,L),r.addEventListener(`squeeze`,L),r.addEventListener(`squeezestart`,L),r.addEventListener(`squeezeend`,L),r.addEventListener(`end`,R),r.addEventListener(`inputsourceschange`,ee),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?k:O,a=y.stencil?S:_);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new nn(d.textureWidth,d.textureHeight,{format:D,type:f,depthTexture:new Na(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new nn(p.framebufferWidth,p.framebufferHeight,{format:D,type:f,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),z.setContext(r),z.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function te(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(F!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;te(P,i);for(let e=0;e<a.length;e++)te(a[e],i);P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ne(e,P,i)};function ne(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=dt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||p!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let re=null;function ie(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=N[n];o===void 0&&(o=new wc,o.layers.enable(n),o.viewport=new en,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Fa,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}re&&re(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let z=new ll;z.setAnimationLoop(ie),this.setAnimationLoop=function(e){re=e},this.dispose=function(){}}},pf=new on,mf=new Rt;mf.set(-1,0,0,0,1,0,0,0,1);function hf(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,vs(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(pf.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(mf),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function gf(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var _f=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vf=null;function yf(){return vf===null&&(vf=new Gi(_f,16,16,M,y),vf.name=`DFG_LUT`,vf.minFilter=l,vf.magFilter=l,vf.wrapS=i,vf.wrapT=i,vf.generateMipmaps=!1,vf.needsUpdate=!0),vf}var bf=class{constructor(e={}){let{canvas:t=$e(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:m=f}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);g=n.getContextAttributes().alpha}else g=a;let v=m,C=new Set([P,N,j]),w=new Set([f,_,h,S,b,x]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,k=null,A=[],M=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,R=null,ee=null,te=null,ne=null;this._outputColorSpace=He;let re=0,ie=0,z=null,ae=-1,oe=null,se=new en,ce=new en,le=null,ue=new K(0),de=0,fe=t.width,pe=t.height,me=1,he=null,ge=null,_e=new en(0,0,fe,pe),ve=new en(0,0,fe,pe),ye=!1,be=new sa,xe=new la,Se=!1,Ce=!1,we=new on,Te=new G,Ee=new en,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ke(){return z===null?me:1}let B=n;function Ae(e,n){return t.getContext(e,n)}let je,Me,V,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,Ue,We,Ge,Ke,qe,Je,Xe,Ze,Qe,et,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),B===null){let t=`webgl2`;if(B=Ae(t,e),B===null)throw Ae(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),rt(`WebGLRenderer: `+e.message),e}function it(){je=new zl(B),je.init(),Qe=new cf(B,je),Me=new yl(B,je,e,Qe),V=new of(B,je),Me.reversedDepthBuffer&&p&&V.buffers.depth.setReversed(!0),ee=B.createFramebuffer(),te=B.createFramebuffer(),ne=B.createFramebuffer(),Ne=new Hl(B),Pe=new zd,Fe=new sf(B,je,V,Pe,Me,Qe,Ne),Ie=new Rl(I),Le=new ul(B),et=new _l(B,Le),Re=new Bl(B,Le,Ne,et),ze=new Wl(B,Re,Le,et,Ne),Je=new Ul(B,Me,Fe),Ge=new bl(Pe),Be=new Rd(I,Ie,je,Me,et,Ge),Ve=new hf(I,Pe),Ue=new Ud,We=new Xd(je),qe=new gl(I,Ie,V,ze,g,s),Ke=new af(I,ze,Me),nt=new gf(B,Ne,Me,V),Xe=new vl(B,je,Ne),Ze=new Vl(B,je,Ne),Ne.programs=Be.programs,I.capabilities=Me,I.extensions=je,I.properties=Pe,I.renderLists=Ue,I.shadowMap=Ke,I.state=V,I.info=Ne}v!==1009&&(F=new Kl(v,t.width,t.height,o,r,i));let ot=new ff(I,B);this.xr=ot,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=je.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=je.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(e){e!==void 0&&(me=e,this.setSize(fe,pe,!1))},this.getSize=function(e){return e.set(fe,pe)},this.setSize=function(e,n,r=!0){ot.isPresenting?H(`WebGLRenderer: Can't change size while VR device is presenting.`):(fe=e,pe=n,t.width=Math.floor(e*me),t.height=Math.floor(n*me),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(fe*me,pe*me).floor()},this.setDrawingBufferSize=function(e,n,r){fe=e,pe=n,me=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(v===1009)rt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(se)},this.getViewport=function(e){return e.copy(_e)},this.setViewport=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),V.viewport(se.copy(_e).multiplyScalar(ke()).round())},this.getScissor=function(e){return e.copy(ve)},this.setScissor=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),V.scissor(ce.copy(ve).multiplyScalar(ke()).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(e){V.setScissorTest(ye=e)},this.setOpaqueSort=function(e){he=e},this.setTransparentSort=function(e){ge=e},this.getClearColor=function(e){return e.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(z!==null){let t=z.texture.format;e=C.has(t)}if(e){let e=z.texture.type,t=w.has(e),n=qe.getClearColor(),r=qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,B.clearBufferuiv(B.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,B.clearBufferiv(B.COLOR,0,E))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),R=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),qe.dispose(),Ue.dispose(),We.dispose(),Fe.dispose(),Pe.dispose(),Ie.dispose(),ze.dispose(),Re.dispose(),et.dispose(),nt.dispose(),Be.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,gt),ot.removeEventListener(`sessionend`,_t),vt.stop()};function st(e){e.preventDefault(),tt(`WebGLRenderer: Context Lost.`),L=!0}function ct(){tt(`WebGLRenderer: Context Restored.`),L=!1;let e=Ne.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,i=Ke.type;it(),Ne.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=i}function lt(e){rt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),Pe.remove(e)}function ft(e){let t=Pe.get(e).programs;t!==void 0&&(t.forEach(function(e){Be.releaseProgram(e)}),e.isShaderMaterial&&Be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=De);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Re.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Xe;if(c!==null&&(h=Le.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(V.setLineWidth(r.wireframeLinewidth*ke()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*ke()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh){if(je.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Le.get(c).bytesPerElement:1,o=Pe.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){R!==null&&e.isNodeMaterial&&R.setObject(r,e),Se===!0&&Ge.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),R!==null&&R.renderStart(e,t,n),k=We.get(n),k.init(t),M.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),R!==null&&R.updateLights(k.state.lightsArray),Ce=this.localClippingEnabled,Se=Ge.init(this.clippingPlanes,Ce),Se===!0&&Ge.setGlobalState(this.clippingPlanes,t),R!==null&&Ke.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),k=M.pop(),R!==null&&R.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Pe.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}je.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new ll;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,ot.setAnimationLoop(e),e===null?vt.stop():vt.start()},ot.addEventListener(`sessionstart`,gt),ot.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){rt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(L===!0)return;R!==null&&R.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=F!==null&&(z===null||n)&&F.begin(I,z);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,z),k=We.get(e,M.length),k.init(t),k.state.textureUnits=Fe.getTextureUnits(),M.push(k),we.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?xe.setFromArrayCamera(t):be.setFromProjectionMatrix(we,Ye,t.reversedDepth),Ce=this.localClippingEnabled,Se=Ge.init(this.clippingPlanes,Ce),O=Ue.get(e,A.length),O.init(),A.push(O),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,I.sortObjects)}yt(e,t,0,I.sortObjects),O.finish(),R!==null&&R.updateLights(k.state.lightsArray),I.sortObjects===!0&&O.sort(he,ge),Oe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Oe&&qe.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),Se===!0&&Ge.beginShadows();let i=k.state.shadowsArray;if(Ke.render(i,e,t),Se===!0&&Ge.endShadows(),(r&&F.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Oe&&qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(O,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Oe&&qe.render(e),bt(O,e,t)}z!==null&&ie===0&&(Fe.updateMultisampleRenderTarget(z),Fe.updateRenderTargetMipmap(z)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),et.resetDefaultState(),ae=-1,oe=null,M.pop(),M.length>0?(k=M[M.length-1],Fe.setTextureUnits(k.state.textureUnits),Se===!0&&Ge.setGlobalState(I.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,R!==null&&R.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?xe:be;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(we);let i=ze.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Ee.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?xe:be;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=ze.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ee.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ee.copy(e.boundingSphere.center)),Ee.applyMatrix4(e.matrixWorld).applyMatrix4(we)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Ee.z,s,t)}}else a.visible&&O.push(e,i,a,n,Ee.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Se===!0&&Ge.setGlobalState(I.clippingPlanes,n),r&&V.viewport(se.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=je.has(`EXT_color_buffer_half_float`)||je.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new nn(1,1,{generateMipmaps:!0,type:e?y:f,minFilter:d,samples:Math.max(4,Me.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||se;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),c=I.getActiveCubeFace(),l=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(ue),de=I.getClearAlpha(),de<1&&I.setClearColor(16777215,.5),I.clear(),Oe&&qe.render(n);let u=I.toneMapping;I.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Se===!0&&Ge.setGlobalState(I.clippingPlanes,r),St(e,n,r),Fe.updateMultisampleRenderTarget(a),Fe.updateRenderTargetMipmap(a),je.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Fe.updateMultisampleRenderTarget(a),Fe.updateRenderTargetMipmap(a))}I.setRenderTarget(s,c,l),I.setClearColor(ue,de),p!==void 0&&(r.viewport=p),I.toneMapping=u}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){R!==null&&i.isNodeMaterial&&R.setObject(e,i),e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function wt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Tt(e,t,n){t.isScene!==!0&&(t=De);let r=Pe.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Be.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Be.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ie.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=Be.getUniforms(e),R!==null&&e.isNodeMaterial&&R.build(e,n,s),e.onBeforeCompile(s,I),d=Be.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ge.uniform),Ot(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=wt(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Et(e,t,n,r,i){let a=Pe.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Tt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=td.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=Pe.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t,n,r,i){t.isScene!==!0&&(t=De),Fe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=z===null?I.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ut.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ie.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Pe.get(r),y=k.state.lights;if(Se===!0&&(Ce===!0||e!==oe)){let t=e===oe&&r.id===ae;Ge.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ge.numPlanes||v.numIntersection!==Ge.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===wt(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Et(r,t,i,s,h):Tt(r,t,i),R&&r.isNodeMaterial&&R.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(V.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==ae&&(ae=r.id,w=!0),C||oe!==e){V.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(B,`projectionMatrix`,e.projectionMatrix),E.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(B,Te.setFromMatrixPosition(e.matrixWorld)),Me.logarithmicDepthBuffer&&E.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),oe!==e&&(oe=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(B,`sunShadowMap`,y.state.sunShadowMap,Fe),y.state.directionalShadowMap.length>0&&E.setValue(B,`directionalShadowMap`,y.state.directionalShadowMap,Fe),y.state.spotShadowMap.length>0&&E.setValue(B,`spotShadowMap`,y.state.spotShadowMap,Fe),y.state.pointShadowMap.length>0&&E.setValue(B,`pointShadowMap`,y.state.pointShadowMap,Fe)),i.isSkinnedMesh){E.setOptional(B,i,`bindMatrix`),E.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(B,`boneTexture`,e.boneTexture,Fe))}i.isBatchedMesh&&(E.setOptional(B,i,`batchingTexture`),E.setValue(B,`batchingTexture`,i._matricesTexture,Fe),E.setOptional(B,i,`batchingIdTexture`),E.setValue(B,`batchingIdTexture`,i._indirectTexture,Fe),E.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(B,`batchingColorTexture`,i._colorsTexture,Fe));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Je.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(B,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=yf()),w){if(E.setValue(B,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&At(O,T),a&&r.fog===!0&&Ve.refreshFogUniforms(O,a),Ve.refreshMaterialUniforms(O,r,me,pe,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}td.upload(B,Dt(v),O,Fe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(td.upload(B,Dt(v),O,Fe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(B,`center`,i.center),E.setValue(B,`modelViewMatrix`,i.modelViewMatrix),E.setValue(B,`normalMatrix`,i.normalMatrix),E.setValue(B,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,S),nt.bind(n,S)}}return S}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(e,t,n){let r=Pe.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Pe.get(e.texture).__webglTexture=t,Pe.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Pe.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){z=e,re=t,ie=n;let r=null,i=!1,a=!1;if(e){let o=Pe.get(e);if(o.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(B.FRAMEBUFFER,o.__webglFramebuffer),se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest,V.viewport(se),V.scissor(ce),V.setScissorTest(le),ae=-1;return}if(o.__webglFramebuffer===void 0)Fe.setupRenderTarget(e);else if(o.__hasExternalTextures)Fe.rebindTextures(e,Pe.get(e.texture).__webglTexture,Pe.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Pe.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Fe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Pe.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Fe.useMultisampledRTT(e)===!1?Pe.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest}else se.copy(_e).multiplyScalar(me).floor(),ce.copy(ve).multiplyScalar(me).floor(),le=ye;if(n!==0&&(r=ee),V.bindFramebuffer(B.FRAMEBUFFER,r)&&V.drawBuffers(e,r),V.viewport(se),V.scissor(ce),V.setScissorTest(le),i){let r=Pe.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Pe.get(e.textures[t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Pe.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}ae=-1};function Mt(e){let t=Pe.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Me.textureFormatReadable(e.format),t.__typeReadable=Me.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){rt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Pe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){V.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){rt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){rt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&B.readPixels(t,n,r,i,Qe.convert(c),Qe.convert(l),a)}finally{let e=z===null?null:Pe.get(z).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Pe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),B.readPixels(t,n,r,i,Qe.convert(l),Qe.convert(u),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let p=z===null?null:Pe.get(z).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,p);let m=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await at(B,m,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(f),B.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Fe.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Qe.convert(t.format),_=Qe.convert(t.type),v;t.isData3DTexture?(Fe.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Fe.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(Fe.setTexture2D(t,0),v=B.TEXTURE_2D),V.activeTexture(B.TEXTURE0),V.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=V.getParameter(B.UNPACK_ROW_LENGTH),b=V.getParameter(B.UNPACK_IMAGE_HEIGHT),x=V.getParameter(B.UNPACK_SKIP_PIXELS),S=V.getParameter(B.UNPACK_SKIP_ROWS),C=V.getParameter(B.UNPACK_SKIP_IMAGES);V.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),V.pixelStorei(B.UNPACK_SKIP_PIXELS,l),V.pixelStorei(B.UNPACK_SKIP_ROWS,u),V.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Pe.get(e),r=Pe.get(t),h=Pe.get(n.__renderTarget),g=Pe.get(r.__renderTarget);V.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,B.DEPTH_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Pe.has(e)){let n=Pe.get(e),r=Pe.get(t);V.bindFramebuffer(B.READ_FRAMEBUFFER,te),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,B.COLOR_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);V.pixelStorei(B.UNPACK_ROW_LENGTH,y),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),V.pixelStorei(B.UNPACK_SKIP_PIXELS,x),V.pixelStorei(B.UNPACK_SKIP_ROWS,S),V.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&B.generateMipmap(v),V.unbindTexture()},this.initRenderTarget=function(e){Pe.get(e).__webglFramebuffer===void 0&&Fe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Fe.setTextureCube(e,0):e.isData3DTexture?Fe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Fe.setTexture2DArray(e,0):Fe.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){re=0,ie=0,z=null,V.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}};function xf(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Hr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Sf(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Sf(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Sf(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Dr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Cf(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function wf(e){let t=new Map,n=new Map,r=e.clone();return Tf(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function Tf(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)Tf(e.children[r],t.children[r],n)}var Ef=class extends ic{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Nf(e)}),this.register(function(e){return new Pf(e)}),this.register(function(e){return new Ff(e)}),this.register(function(e){return new Wf(e)}),this.register(function(e){return new Gf(e)}),this.register(function(e){return new Kf(e)}),this.register(function(e){return new Lf(e)}),this.register(function(e){return new Rf(e)}),this.register(function(e){return new zf(e)}),this.register(function(e){return new Bf(e)}),this.register(function(e){return new Mf(e)}),this.register(function(e){return new Vf(e)}),this.register(function(e){return new If(e)}),this.register(function(e){return new Uf(e)}),this.register(function(e){return new Hf(e)}),this.register(function(e){return new Af(e)}),this.register(function(e){return new qf(e,kf.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new qf(e,kf.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Jf(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Mc.extractUrlBase(e);a=Mc.resolveURL(t,this.path)}else a=Mc.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new sc(this.manager);s.setPriority(this.priority),s.setCache(this.cache),s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Yf){try{a[kf.KHR_BINARY_GLTF]=new Qf(e)}catch(e){r&&r(e);return}i=JSON.parse(a[kf.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new wp(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case kf.KHR_MATERIALS_UNLIT:a[t]=new jf;break;case kf.KHR_DRACO_MESH_COMPRESSION:a[t]=new $f(i,this.dracoLoader);break;case kf.KHR_TEXTURE_TRANSFORM:a[t]=new ep;break;case kf.KHR_MESH_QUANTIZATION:a[t]=new tp;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function Df(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function Of(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var kf={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DIFFUSE_ROUGHNESS:`KHR_materials_diffuse_roughness`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Af=class{constructor(e){this.parser=e,this.name=kf.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new K(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Ue);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new jc(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new Oc(s),o.distance=c;break;case`spot`:o=new Ec(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),gp(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},jf=class{constructor(){this.name=kf.KHR_MATERIALS_UNLIT}getMaterialType(){return bi}extendParams(e,t,n){let r=[];e.color=new K(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Ue),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,He))}return Promise.all(r)}},Mf=class{constructor(e){this.parser=e,this.name=kf.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Of(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Nf=class{constructor(e){this.parser=e,this.name=kf.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Of(this.parser,e,this.name)===null?null:Ts}extendMaterialParams(e,t){let n=Of(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new W(e,e)}return Promise.all(r)}},Pf=class{constructor(e){this.parser=e,this.name=kf.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Of(this.parser,e,this.name)===null?null:Ts}extendMaterialParams(e,t){let n=Of(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.diffuseRoughness=n.diffuseRoughnessFactor===void 0?0:n.diffuseRoughnessFactor,n.diffuseRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`diffuseRoughnessMap`,n.diffuseRoughnessTexture)),Promise.all(r)}},Ff=class{constructor(e){this.parser=e,this.name=kf.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Of(this.parser,e,this.name)===null?null:Ts}extendMaterialParams(e,t){let n=Of(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},If=class{constructor(e){this.parser=e,this.name=kf.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Of(this.parser,e,this.name)===null?null:Ts}extendMaterialParams(e,t){let n=Of(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Lf=class{constructor(e){this.parser=e,this.name=kf.KHR_MATERIALS_SHEEN}getMaterialType(e){return Of(this.parser,e,this.name)===null?null:Ts}extendMaterialParams(e,t){let n=Of(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new K(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Ue)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,He)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},Rf=class{constructor(e){this.parser=e,this.name=kf.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Of(this.parser,e,this.name)===null?null:Ts}extendMaterialParams(e,t){let n=Of(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},zf=class{constructor(e){this.parser=e,this.name=kf.KHR_MATERIALS_VOLUME}getMaterialType(e){return Of(this.parser,e,this.name)===null?null:Ts}extendMaterialParams(e,t){let n=Of(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new K().setRGB(i[0],i[1],i[2],Ue),Promise.all(r)}},Bf=class{constructor(e){this.parser=e,this.name=kf.KHR_MATERIALS_IOR}getMaterialType(e){return Of(this.parser,e,this.name)===null?null:Ts}extendMaterialParams(e,t){let n=Of(this.parser,e,this.name);return n===null||(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Vf=class{constructor(e){this.parser=e,this.name=kf.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Of(this.parser,e,this.name)===null?null:Ts}extendMaterialParams(e,t){let n=Of(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new K().setRGB(i[0],i[1],i[2],Ue),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,He)),Promise.all(r)}},Hf=class{constructor(e){this.parser=e,this.name=kf.EXT_MATERIALS_BUMP}getMaterialType(e){return Of(this.parser,e,this.name)===null?null:Ts}extendMaterialParams(e,t){let n=Of(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Uf=class{constructor(e){this.parser=e,this.name=kf.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Of(this.parser,e,this.name)===null?null:Ts}extendMaterialParams(e,t){let n=Of(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Wf=class{constructor(e){this.parser=e,this.name=kf.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Gf=class{constructor(e){this.parser=e,this.name=kf.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Kf=class{constructor(e){this.parser=e,this.name=kf.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},qf=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Jf=class{constructor(e){this.name=kf.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==ap.TRIANGLES&&e.mode!==ap.TRIANGLE_STRIP&&e.mode!==ap.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new on,n=new G,a=new Ft,s=new G(1,1,1),c=new ra(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));let l=null;for(let e in o)if(e===`_COLOR_0`){let t=o[e];c.instanceColor=new Yi(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(l===null){let e=c.geometry;l=new Hr,l.name=e.name;for(let t in e.attributes)l.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)l.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&l.setIndex(e.index),l.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)l.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(l.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(l.boundingSphere=e.boundingSphere.clone()),l.drawRange.start=e.drawRange.start,l.drawRange.count=e.drawRange.count,l.userData=Object.assign({},e.userData),c.geometry=l}let t=o[e];l.setAttribute(e,new Yi(t.array,t.itemSize,t.normalized))}Nn.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Yf=`glTF`,Xf=12,Zf={JSON:1313821514,BIN:5130562},Qf=class{constructor(e){this.name=kf.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xf),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yf)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Xf,i=new DataView(e,Xf),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Zf.JSON){let r=new Uint8Array(e,Xf+a,t);this.content=n.decode(r)}else if(r===Zf.BIN){let n=Xf+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},$f=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=kf.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=up[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=up[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=op[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Ue,n)})})}},ep=class{constructor(){this.name=kf.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},tp=class{constructor(){this.name=kf.KHR_MESH_QUANTIZATION}},np=class extends Ps{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},rp=new Ft,ip=class extends np{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return rp.fromArray(i).normalize().toArray(i),i}},ap={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},op={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sp={9728:o,9729:l,9984:s,9985:u,9986:c,9987:d},cp={33071:i,33648:a,10497:r},lp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},up={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},dp={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},fp={CUBICSPLINE:void 0,LINEAR:Ne,STEP:V},pp={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function mp(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new ws({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function hp(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function gp(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function _p(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function vp(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function yp(e){let t,n=e.extensions&&e.extensions[kf.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+bp(n.attributes):e.indices+`:`+bp(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+bp(e.targets[n]);return t}function bp(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function xp(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Sp(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var Cp=new on,wp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Df,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>`u`||n&&r<17||i&&a<98?(this.textureLoader=new uc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Pc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sc(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType(`arraybuffer`),(this.options.withCredentials||this.options.crossOrigin===`use-credentials`)&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return hp(i,a,r),gp(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[kf.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Mc.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=lp[r.type],t=op[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new Dr(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=lp[r.type],o=op[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Ur(f,u/s),t.cache.add(n,c)),p=new Kr(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new Dr(f,a,d);if(r.sparse!==void 0){let t=lp.SCALAR,n=op[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new Dr(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=sp[n.magFilter]||1006,t.minFilter=sp[n.minFilter]||1008,t.wrapS=cp[n.wrapS]||1e3,t.wrapT=cp[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1,l;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)l=n.getDependency(`bufferView`,a.bufferView).then(function(e){return new Promise(function(n,r){t.parse(e,n,r)})});else{if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new $t(e);t.needsUpdate=!0,n(t)}),t.load(Mc.resolveURL(e,i.path),a,void 0,r)})})}let u=l.then(function(e){return c===!0&&o.revokeObjectURL(s),gp(e,a),e.userData.mimeType=a.mimeType||Sp(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[kf.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[kf.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[kf.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new wa,Qr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new ua,Qr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return ws}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[kf.KHR_MATERIALS_UNLIT]){let e=r[kf.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new K(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Ue),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,He)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||pp.OPAQUE;if(l===pp.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===pp.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==bi&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new W(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==bi&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==bi){let e=i.emissiveFactor;o.emissive=new K().setRGB(e[0],e[1],e[2],Ue)}return i.emissiveTexture!==void 0&&a!==bi&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,He)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),gp(n,i),t.associations.set(n,{materials:e}),i.extensions&&hp(r,n,i),n})}createUniqueName(e){let t=Zc.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[kf.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Ep(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=yp(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[kf.KHR_DRACO_MESH_COMPRESSION]?i(o):Ep(new Hr,o,t),o.mode===ap.TRIANGLE_STRIP?e=e.then(e=>Cf(e,1)):o.mode===ap.TRIANGLE_FAN&&(e=e.then(e=>Cf(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?mp(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===ap.TRIANGLES||u.mode===ap.TRIANGLE_STRIP||u.mode===ap.TRIANGLE_FAN||u.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),d=e&&t?new Ui(l,f):new q(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(u.mode===ap.LINES)d=new Sa(l,f);else if(u.mode===ap.LINE_STRIP)d=new va(l,f);else if(u.mode===ap.LINE_LOOP)d=new Ca(l,f);else if(u.mode===ap.POINTS)d=new ka(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&vp(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),gp(d,i),u.extensions&&hp(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&hp(r,c[0],i),c[0];let l=new Pn;i.extensions&&hp(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return n.type===`perspective`?t=new wc(U.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new kc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gp(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new on;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Ji(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new Qs(i,void 0,l);return gp(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,Cp)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new G().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Wi:t.length>1?new Pn:t.length===1?t[0]:new Nn,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),gp(o,i),i.extensions&&hp(n,o,i),i.matrix!==void 0){let e=new on;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new Pn;n.name&&(i.name=r.createUniqueName(n.name)),gp(i,n),n.extensions&&hp(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(wf(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Qr||e instanceof $t)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}dp[i.path]===dp.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(dp[i.path]){case dp.weights:l=qs;break;case dp.rotation:l=Ys;break;case dp.translation:case dp.scale:l=Zs;break;default:switch(n.itemSize){case 1:l=qs;break;default:l=Zs}}let u=r.interpolation===void 0?Ne:fp[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+dp[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=xp(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof Ys?ip:np)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Tp(e,t,n){let r=t.attributes,i=new ir;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new G(t[0],t[1],t[2]),new G(a[0],a[1],a[2])),e.normalized){let t=xp(op[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new G,t=new G;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=xp(op[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new Pr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function Ep(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=up[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return Ut.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ut.workingColorSpace}" not supported.`),gp(e,t),Tp(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:_p(e,t.targets,n)})}var Dp={type:`change`},Op={type:`start`},kp={type:`end`},Ap=new yi,jp=new Xr,Mp=Math.cos(70*U.DEG2RAD),Np=new G,Pp=2*Math.PI,Fp={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ip=1e-6,Lp=class extends ol{constructor(n,r=null){super(n,r),this.state=Fp.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Ft,this._lastTargetPosition=new G,this._quat=new Ft().setFromUnitVectors(n.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new al,this._sphericalDelta=new al,this._scale=1,this._panOffset=new G,this._rotateStart=new W,this._rotateEnd=new W,this._rotateDelta=new W,this._panStart=new W,this._panEnd=new W,this._panDelta=new W,this._dollyStart=new W,this._dollyEnd=new W,this._dollyDelta=new W,this._dollyDirection=new G,this._mouse=new W,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zp.bind(this),this._onPointerDown=Rp.bind(this),this._onPointerUp=Bp.bind(this),this._onContextMenu=qp.bind(this),this._onMouseWheel=Up.bind(this),this._onKeyDown=Wp.bind(this),this._onTouchStart=Gp.bind(this),this._onTouchMove=Kp.bind(this),this._onMouseDown=Vp.bind(this),this._onMouseMove=Hp.bind(this),this._interceptControlDown=Jp.bind(this),this._interceptControlUp=Yp.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Fp.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dp),this.update(),this.state=Fp.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Np.copy(t).sub(this.target),Np.applyQuaternion(this._quat),this._spherical.setFromVector3(Np),this.autoRotate&&this.state===Fp.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Pp:n>Math.PI&&(n-=Pp),r<-Math.PI?r+=Pp:r>Math.PI&&(r-=Pp),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Np.setFromSpherical(this._spherical),Np.applyQuaternion(this._quatInverse),t.copy(this.target).add(Np),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Np.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new G(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new G(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Np.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Ap.origin.copy(this.object.position),Ap.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ap.direction))<Mp?this.object.lookAt(this.target):(jp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ap.intersectPlane(jp,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Ip||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ip||this._lastTargetPosition.distanceToSquared(this.target)>Ip?(this.dispatchEvent(Dp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Pp/60/60*this.autoRotateSpeed:Pp/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Np.setFromMatrixColumn(t,0),Np.multiplyScalar(-e),this._panOffset.add(Np)}_panUp(e,t){this.screenSpacePanning===!0?Np.setFromMatrixColumn(t,1):(Np.setFromMatrixColumn(t,0),Np.crossVectors(this.object.up,Np)),Np.multiplyScalar(e),this._panOffset.add(Np)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Np.copy(r).sub(this.target);let i=Np.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Pp*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pp*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Pp*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Pp*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Pp*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Pp*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Pp*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pp*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new W,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Rp(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function zp(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Bp(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(kp),this.state=Fp.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Vp(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Fp.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Fp.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Fp.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Fp.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Fp.PAN}break;default:this.state=Fp.NONE}this.state!==Fp.NONE&&this.dispatchEvent(Op)}function Hp(e){switch(this.state){case Fp.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Fp.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Fp.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Up(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Fp.NONE&&(e.preventDefault(),this.dispatchEvent(Op),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(kp))}function Wp(e){this.enabled!==!1&&this._handleKeyDown(e)}function Gp(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1){this.state=Fp.NONE;break}this._handleTouchStartRotate(e),this.state=Fp.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1){this.state=Fp.NONE;break}this._handleTouchStartPan(e),this.state=Fp.TOUCH_PAN;break;default:this.state=Fp.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Fp.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Fp.TOUCH_DOLLY_ROTATE;break;default:this.state=Fp.NONE}break;default:this.state=Fp.NONE}this.state!==Fp.NONE&&this.dispatchEvent(Op)}function Kp(e){switch(this._trackPointer(e),this.state){case Fp.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Fp.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Fp.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Fp.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Fp.NONE}}function qp(e){this.enabled!==!1&&e.preventDefault()}function Jp(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Yp(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Xp=(function(){var e=`b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb`,t=`b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb`,n=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),r=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!=`object`)return{supported:!1};var i=WebAssembly.validate(n)?s(t):s(e),a,o=WebAssembly.instantiate(i,{}).then(function(e){a=e.instance,a.exports.__wasm_call_ctors()});function s(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;++n){var i=e.charCodeAt(n);t[n]=i>96?i-97:i>64?i-39:i+4}for(var a=0,n=0;n<e.length;++n)t[a++]=t[n]<60?r[t[n]]:(t[n]-60)*64+t[++n];return t.buffer.slice(0,a)}function c(e,t,n,r,i,a,o){var s=e.exports.sbrk,c=r+3&-4,l=s(c*i),u=s(a.length),d=new Uint8Array(e.exports.memory.buffer);d.set(a,u);var f=t(l,r,i,u,a.length);if(f==0&&o&&o(l,c,i),n.set(d.subarray(l,l+r*i)),s(l-s(0)),f!=0)throw Error(`Malformed buffer data: `+f)}var l={NONE:``,OCTAHEDRAL:`meshopt_decodeFilterOct`,QUATERNION:`meshopt_decodeFilterQuat`,EXPONENTIAL:`meshopt_decodeFilterExp`,COLOR:`meshopt_decodeFilterColor`},u={ATTRIBUTES:`meshopt_decodeVertexBuffer`,TRIANGLES:`meshopt_decodeIndexBuffer`,INDICES:`meshopt_decodeIndexSequence`},d=[],f=0;function p(e){var t={object:new Worker(e),pending:0,requests:{}};return t.object.onmessage=function(e){var n=e.data;t.pending-=n.count,t.requests[n.id][n.action](n.value),delete t.requests[n.id]},t}function m(e){for(var t=`self.ready = WebAssembly.instantiate(new Uint8Array([`+new Uint8Array(i)+`]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = `+g.name+`;`+c.toString()+g.toString(),n=new Blob([t],{type:`text/javascript`}),r=URL.createObjectURL(n),a=d.length;a<e;++a)d[a]=p(r);for(var a=e;a<d.length;++a)d[a].object.postMessage({});d.length=e,URL.revokeObjectURL(r)}function h(e,t,n,r,i){for(var a=d[0],o=1;o<d.length;++o)d[o].pending<a.pending&&(a=d[o]);return new Promise(function(o,s){var c=new Uint8Array(n),l=++f;a.pending+=e,a.requests[l]={resolve:o,reject:s},a.object.postMessage({id:l,count:e,size:t,source:c,mode:r,filter:i},[c.buffer])})}function g(e){var t=e.data;self.ready.then(function(e){if(!t.id)return self.close();try{var n=new Uint8Array(t.count*t.size);c(e,e.exports[t.mode],n,t.count,t.size,t.source,e.exports[t.filter]),self.postMessage({id:t.id,count:t.count,action:`resolve`,value:n},[n.buffer])}catch(e){self.postMessage({id:t.id,count:t.count,action:`reject`,value:e})}})}return{ready:o,supported:!0,useWorkers:function(e){m(e)},decodeVertexBuffer:function(e,t,n,r,i){c(a,a.exports.meshopt_decodeVertexBuffer,e,t,n,r,a.exports[l[i]])},decodeIndexBuffer:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexBuffer,e,t,n,r)},decodeIndexSequence:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexSequence,e,t,n,r)},decodeGltfBuffer:function(e,t,n,r,i,o){c(a,a.exports[u[i]],e,t,n,r,a.exports[l[o]])},decodeGltfBufferAsync:function(e,t,n,r,i){return d.length>0?h(e,t,n,u[r],l[i]):o.then(function(){var o=new Uint8Array(e*t);return c(a,a.exports[u[r]],o,e,t,n,a.exports[l[i]]),o})}}})(),Zp=new G(0,1,0),Qp=.098,$p=.063,em=.06,tm=1.87,nm=54,rm=.02,im=U.clamp,am=U.smoothstep;function om(e=1){return new Ss({transparent:!0,depthWrite:!1,side:0,uniforms:{uOpacity:{value:e},uBody:{value:new K(`#B5E5EF`)},uEdge:{value:new K(`#5F9FB8`)},uLight:{value:new K(`#F6FDFF`)}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vView;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vView = -mv.xyz;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uOpacity;
      uniform vec3 uBody;
      uniform vec3 uEdge;
      uniform vec3 uLight;
      varying vec3 vNormal;
      varying vec3 vView;
      void main() {
        vec3 n = normalize(vNormal);
        vec3 v = normalize(vView);
        float face = dot(n, v);
        float shine = dot(n, normalize(v + vec3(-0.65, 0.9, 0.0)));
        vec3 color = mix(uEdge, uBody, smoothstep(0.32, 0.43, face));
        color = mix(color, uLight, smoothstep(0.88, 0.94, shine));
        gl_FragColor = vec4(color, uOpacity);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function sm(){return new Ss({side:2,toneMapped:!1,uniforms:{uClock:{value:0},uAgeStart:{value:0},uAgeSpan:{value:0},uCrestSpan:{value:1},uCrest:{value:0},uMouthRight:{value:new G(1,0,0)},uMouthUp:{value:new G(0,1,0)},uBody:{value:new K(`#AFE2EC`)},uShade:{value:new K(`#73B8CA`)},uFoam:{value:new K(`#FFFDF2`)}},vertexShader:`
      attribute vec3 aTangent;
      attribute vec2 aOffset;
      attribute float aAperture;
      uniform vec3 uMouthRight;
      uniform vec3 uMouthUp;
      varying vec2 vWaterUv;
      varying float vMirror;

      vec2 projectedAxis(vec3 axis, vec3 point) {
        return isOrthographic ? axis.xy : axis.xy - point.xy * axis.z / point.z;
      }
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vec3 facing = isOrthographic ? vec3(0.0, 0.0, 1.0) : normalize(-mv.xyz);
        vec3 side = cross(mat3(modelViewMatrix) * aTangent, facing);
        // Ease the raised lip toward the upper side of the projected path as the camera orbits.
        vec2 across = length(side.xy) > 0.0001 ? normalize(side.xy) : vec2(1.0, 0.0);
        vMirror = smoothstep(-0.38, 0.38, across.y);
        vec3 offset = vec3(across, 0.0);
        if (aAperture > 0.0) {
          // Near the socket, the width comes from an ellipse in the lip plane.
          vec3 mouthRight = mat3(modelViewMatrix) * uMouthRight;
          vec3 mouthUp = mat3(modelViewMatrix) * uMouthUp * 0.44;
          vec2 ellipse = vec2(dot(across, projectedAxis(mouthRight, mv.xyz)),
            dot(across, projectedAxis(mouthUp, mv.xyz)));
          vec3 edge = (mouthRight * ellipse.x + mouthUp * ellipse.y) / max(length(ellipse), 0.001);
          offset = mix(offset, edge, aAperture);
        }
        mv.xyz += mix(aOffset.x, aOffset.y, vMirror) * offset;
        vWaterUv = uv;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uClock;
      uniform float uAgeStart;
      uniform float uAgeSpan;
      uniform float uCrestSpan;
      uniform float uCrest;
      uniform vec3 uBody;
      uniform vec3 uShade;
      uniform vec3 uFoam;
      varying vec2 vWaterUv;
      varying float vMirror;

      void main() {
        float age = uAgeStart + vWaterUv.x * uAgeSpan;
        float emitted = uClock - age;
        float front = (1.0 - vWaterUv.x) * uAgeSpan / uCrestSpan;
        float y = vWaterUv.y;
        float shadeEdge = 0.71 + 0.06 * sin(emitted * 57.0);
        float shade = mix(smoothstep(shadeEdge - 0.02, shadeEdge + 0.02, y),
          smoothstep(shadeEdge - 0.02, shadeEdge + 0.02, 1.0 - y), vMirror);
        vec3 color = mix(uBody, uShade, shade);

        // The white cap wraps around the raised lip and ends in a hooked point.
        float curl = 1.0 - smoothstep(0.0, 0.35, abs(front - 0.15));
        float foamEdge = 0.24 + 0.40 * curl - 0.29 * smoothstep(0.42, 0.88, front);
        float foam = uCrest * (1.0 - mix(smoothstep(foamEdge - 0.024, foamEdge + 0.024, y),
          smoothstep(foamEdge - 0.024, foamEdge + 0.024, 1.0 - y), vMirror));

        // One shorter stroke follows the cap, leaving broad clear areas between them.
        float beat = (fract(emitted * 9.0) - 0.47) * 3.5;
        float stroke = max(0.0, 1.0 - beat * beat);
        float distanceToStroke = abs(y - (0.41 - 0.10 * stroke)) - 0.085 * stroke;
        float accent = (1.0 - smoothstep(-0.019, 0.019, distanceToStroke))
          * smoothstep(0.08, 0.30, stroke) * smoothstep(0.84, 1.22, front) * smoothstep(0.006, 0.025, age);
        gl_FragColor = vec4(mix(color, uFoam, max(foam, accent)), 1.0);
        #include <colorspace_fragment>
      }`})}function cm(){let e=new Hr,t=new Float32Array(220),n=[];for(let e=0;e<=nm;e++){let r=e*2;t.set([e/nm,0,e/nm,1],r*2),e<nm&&n.push(r,r+1,r+2,r+1,r+3,r+2)}return e.setAttribute(`position`,new Dr(new Float32Array(330),3).setUsage(Je)),e.setAttribute(`aTangent`,new Dr(new Float32Array(330),3).setUsage(Je)),e.setAttribute(`aOffset`,new Dr(new Float32Array(220),2).setUsage(Je)),e.setAttribute(`aAperture`,new Dr(new Float32Array(110),1).setUsage(Je)),e.setAttribute(`uv`,new Dr(t,2)),e.setIndex(n),e}function lm(){return new os([new W(0,-1.4),new W(.12,-.95),new W(.5,-.25),new W(.72,.18),new W(.65,.58),new W(.35,.88),new W(0,1)],12)}function um(){let e=new vo;return e.moveTo(-.035,-.065),e.bezierCurveTo(-.1,-.075,-.173,-.035,-.217,-.005),e.bezierCurveTo(-.277,.031,-.239,.118,-.164,.091),e.quadraticCurveTo(-.103,.069,-.085,.056),e.bezierCurveTo(-.127,.119,-.142,.201,-.087,.225),e.bezierCurveTo(-.011,.255,.015,.163,.024,.095),e.bezierCurveTo(.065,.142,.167,.177,.199,.121),e.bezierCurveTo(.229,.067,.159,.033,.1,.01),e.bezierCurveTo(.122,-.028,.079,-.066,-.035,-.065),e.closePath(),e}function dm(){let e=new Pn;e.name=`Three-petal impact foam`;let t=new ls(um(),9).rotateX(Math.PI/2),n=e=>new bi({color:e,transparent:!0,depthWrite:!1,side:2,toneMapped:!1}),r=new q(t,n(`#88CAD9`)),i=new q(t,n(`#FFFDF2`));return r.position.y=.006,i.position.y=.01,i.renderOrder=5,e.add(r,i),{group:e,update(t,n){let a=1-(1-im(t/.045,0,1))**3,o=am(t,.067,.22),s=1-am(t,Math.max(n,.18),Math.max(n,.18)+.11),c=(.36+.64*a)*(1-.46*o),l=(.3+.7*a)*(1-.64*o);return r.scale.set(c,1,l),i.scale.set(c*.83,1,l*.78),r.material.opacity=(.96-.62*o)*s,i.material.opacity=1-am(t,.097,.195),r.visible=s>0,i.visible=i.material.opacity>0,e.visible=r.visible||i.visible,{lobes:i.visible?3:0,patch:r.visible}}}}function fm(){let e=new cs(.977,1,90);e.rotateX(-Math.PI/2);let t=e.attributes.position;for(let e=0;e<t.count;e++){let n=Math.atan2(t.getZ(e),t.getX(e)),r=1+.035*Math.sin(n*3)+.018*Math.sin(n*5+.7);t.setXYZ(e,t.getX(e)*r,0,t.getZ(e)*r)}return e}function pm({scene:e,resolveImpact:t,start:n=.33,stop:r=.66,actionDuration:i=1,speed:a=13.5,gravity:o=20}){let s=n,c=r,l=new Pn;l.name=`Water gun — stream, droplets, impact and ripples`,e.add(l);let u=new q(cm(),sm());u.name=`White wave stream`,u.frustumCulled=!1;let d=new Pn;d.name=`Water impact`;let f=dm(),p=f.group;p.scale.setScalar(tm);let m=new q(new Ra(1,72),new bi({color:`#548D83`,transparent:!0,depthWrite:!1,opacity:.18,side:2}));m.rotation.x=-Math.PI/2,m.position.y=.001;let h=m.geometry.attributes.position;for(let e=0;e<h.count;e++){let t=Math.atan2(h.getZ(e),h.getX(e)),n=1+.11*Math.sin(t*3+1)+.065*Math.cos(t*5);h.setX(e,h.getX(e)*n),h.setZ(e,h.getZ(e)*n)}let g=[0,1].map(()=>{let e=new q(fm(),new bi({color:`#D1F6FF`,transparent:!0,depthWrite:!1,side:2}));return e.position.y=.006,e});d.add(m,p,...g),l.add(u,d);let _=lm(),v=Array.from({length:2},()=>new q(_,om(.96))),y=Array.from({length:3},()=>new q(_,om(.97)));l.add(...v,...y),l.traverse(e=>{e.isMesh&&(e.renderOrder||=4,e.castShadow=!1)}),m.renderOrder=2,g.forEach(e=>e.renderOrder=5);let b=0;l.traverse(e=>{e.isMesh&&b++});let x=!1,S=0,C=!1,w=!1,T=null,E=.28,D=.45,O=.74,k=1.65,A=new G,j=new G,M=new G,N=new G,P=new G,F=new G,I=!1,L=new G,R=new G,ee=new G,te=new G,ne=new G,re=new G,ie=new G,z=new G,ae=new G,oe={phase:`idle`,emitting:!1,stream:!1,crown:!1,ripples:0,flightDrops:0,splashDrops:0};function se(){l.visible=!1,oe={phase:`idle`,emitting:!1,stream:!1,crown:!1,ripples:0,flightDrops:0,splashDrops:0}}function ce(){x=!1,C=!1,w=!1,T=null,S=0,I=!1,F.set(0,0,0),se()}function le(e,n){x=!0,A.copy(e),L.copy(n).normalize(),j.copy(L).multiplyScalar(a),R.crossVectors(L,Zp).normalize(),R.lengthSq()<.1&&R.set(1,0,0);let r=t(A,j,o);T=r.targetId??null,E=r.time,ee.copy(r.point),te.copy(r.normal).normalize(),D=s+E,O=c+E,k=O+.55,d.position.copy(ee).addScaledVector(te,.002),p.position.y=T===null?0:.036,z.copy(j),z.y-=o*E;let i=z.clone().addScaledVector(te,-z.dot(te));i.lengthSq()<.01&&(i.copy(Math.abs(te.y)<.9?Zp:new G(0,0,1)),i.addScaledVector(te,-i.dot(te))),i.normalize();let l=new G().crossVectors(te,i).normalize();d.quaternion.setFromRotationMatrix(new on().makeBasis(l,te,i)),N.copy(e)}function ue(e,t){return t.copy(A).addScaledVector(j,e),t.y-=.5*o*e*e,t.addScaledVector(P,Math.exp(-e/.035)),t.addScaledVector(F,1-am(e,0,rm)),t.addScaledVector(R,Math.sin(e*35-S*29)*.003*Math.sin(Math.PI*e/E)),t.lerp(ee,am(e,E-.02,E)),t}function de(e,t,n,r,i=1){e.position.copy(t),e.quaternion.setFromUnitVectors(Zp,n.clone().normalize());let a=1+im(n.length()/9,0,1)*.65;e.scale.set(r,r*a,r),e.material.uniforms.uOpacity.value=i,e.visible=!0}function fe(e){if(S=e,l.visible=e<k,u.visible=d.visible=!1,v.forEach(e=>e.visible=!1),y.forEach(e=>e.visible=!1),e>=k){C=!1,x=!1,se();return}P.subVectors(M,A);let t=e>=s&&e<c,n=0,r=0,i=e-D,h=1-am(i,.002,.052),_=Math.max(0,e-c),b=Math.min(e-s,E);if(b-_>.006&&b>0){let i=b-_,a=Math.min(em,i*.79),o=1-.57*am(e,c-.032,O);u.visible=!0;let s=u.material.uniforms;s.uClock.value=e,s.uAgeStart.value=_,s.uAgeSpan.value=i,s.uCrestSpan.value=a,s.uCrest.value=h;let{position:l,aTangent:d,aOffset:f,aAperture:p}=u.geometry.attributes,m=.84+.16*am(i,.006,.033);for(let i=0;i<=nm;i++){let s=i/nm,c=U.lerp(_,b,s);ue(c,ne),ue(Math.max(0,c-.001),re),ue(c+.001,ie),z.subVectors(ie,re).normalize();let u=(c-e)*57,g=am(c,.006,.038),v=I?1-am(c,0,rm):0,y=h*am(c,.01,.041),x=(b-c)/a,S=am(x,.15,.34)*(1-am(x,.41,.96)),C=am(x,.018,.085)*(1-am(x,.12,.25)),w=U.lerp($p,Qp,g),T=1-im(x/.32,0,1),E=Math.sqrt(1-T*T)*(t?1:Math.sqrt(im((c-_)/.021,0,1)))*o*m,D=(w*(1+.13*Math.sin(u)*g)+y*(.115*S+.052*C))*E,O=(w*(1+.12*Math.sin(u+1.55)*g)+.045*y*S)*E,k=(D+O)*.5;n=Math.max(n,k),t&&i===0&&(r=k);let A=i*2;l.setXYZ(A,ne.x,ne.y,ne.z),l.setXYZ(A+1,ne.x,ne.y,ne.z),d.setXYZ(A,z.x,z.y,z.z),d.setXYZ(A+1,z.x,z.y,z.z),f.setXY(A,-D,-O),f.setXY(A+1,O,D),p.setX(A,v),p.setX(A+1,v)}l.needsUpdate=d.needsUpdate=f.needsUpdate=p.needsUpdate=!0}v.forEach((t,n)=>{let r=E*(.39+n*.22),i=e-(s+r+n*.026);if(i<0||i>.17||r+i*.91>=E)return;let a=n===0?1:-1;ne.copy(A).addScaledVector(j,r),ne.addScaledVector(R,a*.115),ne.y-=.5*o*r*r,ae.copy(j).multiplyScalar(.88).addScaledVector(R,a*.56),ae.y+=.27+n*.08-o*r,ne.addScaledVector(ae,i),ne.y-=.5*o*i*i,ne.y<ee.y+.009&&te.y>.6||(ae.y-=o*i,de(t,ne,ae,.025-n*.006,1-am(i,.105,.17)))});let w={lobes:0,patch:!1};i>=0&&(d.visible=!0,w=f.update(i,O-D),m.scale.setScalar(.14+.12*am(i,0,.35)),m.material.opacity=.08*(1-am(e,O+.08,k)),g.forEach((e,t)=>{let n=i-.035-t*.11,r=.55;if(e.visible=te.y>.6&&n>=0&&n<r,!e.visible)return;let a=n/r,o=.09+.35*(1-(1-a)**2);e.scale.set(o,1,o*.94),e.material.opacity=.48*(1-a)**1.6}),y.forEach((e,t)=>{let n=i-.009*t;if(n<0||n>.26)return;let r=new G((t%2==0?1:-1)*(1.38-t*.28),1.19+t*.22,.44+t*.53);if(ae.copy(r).applyQuaternion(d.quaternion),ne.copy(ee).addScaledVector(ae,n),ne.y-=.5*o*n*n,ne.clone().sub(ee).dot(te)<0)return;ae.y-=o*n;let a=1-.61*am(n,.07,.26);de(e,ne,ae,(.038-t*.006)*a,1-am(n,.16,.26))})),oe={phase:e<s?`anticipation`:t?`jet`:e<O?`cutoff`:p.visible?`splash`:`residual`,emitting:t,mouthBead:!1,stream:u.visible,fragments:Number(u.visible),crown:d.visible&&p.visible,ripples:d.visible?g.filter(e=>e.visible).length:0,flightDrops:v.filter(e=>e.visible).length,splashDrops:y.filter(e=>e.visible).length,impactPoint:ee.toArray(),impactNormal:te.toArray(),firstImpact:D,lastImpact:O,targetId:T,time:e,youngestAge:_,oldestAge:b,splashStyle:`white-wave`,splashLobes:w.lobes,contactPatch:w.patch,crest:u.visible?h:0,maximumDiameter:n*2,jetSpeed:a,splashScale:tm,nearMouthDiameter:r*2}}return ce(),{begin(e,t,{defer:n=!1}={}){ce(),w=n,!n&&e&&t&&le(e,t)},cancel:ce,finish:()=>{C=x,S=i},update(e,t,n,r){!x&&w&&e<s?oe={...oe,phase:`anticipation`,time:e}:(x||le(t,n),e<=c&&N.copy(t),r&&(e<=c||!I)&&(I=!0,F.set(0,-.024,-.047).applyQuaternion(r),u.material.uniforms.uMouthRight.value.set(1,0,0).applyQuaternion(r),u.material.uniforms.uMouthUp.value.set(0,1,0).applyQuaternion(r)),M.copy(e<=c?t:N),fe(e))},updateTail(e){C&&fe(S+e)},debug:()=>({...oe,active:l.visible,tail:C,pooledMeshes:b,streamVertices:u.geometry.attributes.position.count,launchOrigin:A.toArray(),launchDirection:L.toArray(),flightTime:E}),dispose(){e.remove(l);let t=new Set,n=new Set;l.traverse(e=>{e.isMesh&&(t.add(e.geometry),n.add(e.material))}),t.forEach(e=>e.dispose()),n.forEach(e=>e.dispose())}}}var mm=13.5,hm=4.4;function gm(e,t){let n=new G().subVectors(t,e),r=Math.hypot(n.x,n.z),i=n.y,a=Math.min(r,hm),o=r>4.4?-Math.max(0,e.y):i,s=mm**2,c=s**2-20*(20*a**2+2*o*s),l=r>.06&&r<=4.4&&c>=0,u=a>.06&&c>=0?Math.atan((s-Math.sqrt(c))/(20*a)):U.clamp(Math.atan2(i,Math.max(r,.01))+.25,-.5,.65),d=new G(n.x,0,n.z);return r<1e-5?d.set(0,0,1):d.divideScalar(r),d.multiplyScalar(Math.cos(u)),d.y=Math.sin(u),{reachable:l,direction:d,angle:u,range:r,time:r/(mm*Math.cos(u))}}function _m(e){let t=0,n=e.map(e=>{let t=new Pn;t.position.y=.145,e.object.add(t),e.object.updateMatrixWorld(!0);for(let n of[...e.object.children])n.isMesh&&!/pedestal|shield badge/i.test(n.name)&&t.attach(n);let n=new Pn;n.position.fromArray(e.hit.center),n.position.z=.105;let r=new bi({color:`#f0fff5`,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,side:2});r.userData.outlineParameters={visible:!1};let i=new q(new cs(.91,1,48),r);n.add(i);let a=new ss(.035,.11),o=Array.from({length:4},(e,t)=>{let i=new q(a,r);return i.rotation.z=-t*Math.PI/2,n.add(i),i});return n.traverse(e=>{e.userData.combatDecoration=!0}),e.object.add(n),n.visible=!1,{record:e,pivot:t,flash:n,ring:i,sparks:o,material:r,age:10,hits:0,kind:`water`,hold:0,direction:new G}});return{hit(e,{kind:r=`water`,direction:i,hold:a=0}={}){let o=n.find(t=>t.record.id===e);return o?(o.age=0,o.hits++,t++,o.kind=r,o.hold=a,i?o.direction.copy(i):o.direction.set(0,0,-1),{id:e,hits:o.hits,total:t}):null},reset(){t=0,n.forEach(e=>{e.age=10,e.hits=0,e.pivot.rotation.set(0,0,0),e.flash.visible=!1})},update(e){for(let t of n){t.age+=e;let n=Math.max(0,t.age-t.hold),r=Math.exp(-7*n),i=t.record.id===`heavy`?.1:.24,a=t.kind===`water`,o=a?1.48:t.kind===`tackle`?1.7:t.kind===`basketball`?1.2:.5,s=n<.8?o*i*Math.sin((a?23:19)*n)*r:0;if(t.pivot.rotation.x=t.direction.z*s,t.pivot.rotation.z=-t.direction.x*s,t.flash.visible=t.kind===`water`&&n<.33,t.flash.visible){let e=n/.33,r=t.record.hit.radius*(.8+e*.65);t.ring.scale.setScalar(r),t.material.opacity=.9*(1-e)**1.4,t.sparks.forEach((t,n)=>{let i=n*Math.PI/2+.4;t.position.set(Math.sin(i)*r*1.18,Math.cos(i)*r*1.18,0),t.rotation.z=-i,t.scale.setScalar(1-e*.7)})}}},debug:()=>({total:t,targets:n.map(e=>({id:e.record.id,hits:e.hits,age:e.age,kind:e.kind,tilt:e.pivot.rotation.x,flash:e.flash.visible}))})}}var vm=`precision highp float;

/**
 * WAVE EQUATION SIMULATION SHADER
 *
 * This shader implements a real-time water wave simulation using the 2D wave equation.
 * The simulation runs on the GPU, with each pixel representing one cell of the water grid.
 *
 * PHYSICS BACKGROUND:
 * The 2D wave equation describes how disturbances propagate across a surface:
 *
 *   ∂²h/∂t² = c² * (∂²h/∂x² + ∂²h/∂z²)
 *
 * Where:
 *   h = height displacement from rest
 *   c = wave propagation speed
 *   The right side (∂²h/∂x² + ∂²h/∂z²) is the Laplacian ∇²h
 *
 * DISCRETIZATION:
 * We store two quantities per cell:
 *   - height (info.r): Current displacement from rest level
 *   - velocity (info.g): Rate of change of height (∂h/∂t)
 *
 * Each timestep:
 *   1. Compute discrete Laplacian using 4-neighbor stencil
 *   2. acceleration = c² * Laplacian
 *   3. velocity += acceleration * dt
 *   4. velocity *= damping (energy loss)
 *   5. height += velocity * dt
 */

// Simulation state texture:
//   R channel: Water height displacement from rest level (h)
//   G channel: Vertical velocity of the water column (∂h/∂t)
//   B channel: (unused in this pass, stores normal.x)
//   A channel: (unused in this pass, stores normal.z)
uniform sampler2D tInput;

// Grid spacing in texture coordinates: vec2(1/width, 1/height)
// Used to sample neighboring cells for Laplacian computation
uniform vec2 delta;

uniform float poolWidth;
uniform float poolLength;

varying vec2 coord;

void main() {
  // Read current cell state
  vec4 info = texture2D(tInput, coord);

  // Define neighbor offset vectors for 4-point stencil
  vec2 dx = vec2(delta.x, 0.0);  // One cell in X direction
  vec2 dy = vec2(0.0, delta.y);  // One cell in Z direction

  /**
   * DISCRETE LAPLACIAN COMPUTATION IN PHYSICAL COORDINATES
   *
   * The continuous Laplacian ∇²h = ∂²h/∂x² + ∂²h/∂z² measures surface curvature.
   * On a non-uniform grid where cells have physical dimensions (2*poolWidth*delta.x)
   * in X and (2*poolLength*delta.y) in Z, the second derivatives are:
   *
   *   ∂²h/∂x² ≈ (H_E - 2*H_C + H_W) / Δx²
   *   ∂²h/∂z² ≈ (H_N - 2*H_C + H_S) / Δz²
   *
   * By scaling the delta grid spacing by poolWidth and poolLength, we make the
   * wave propagation speed c isotropic in physical space.
   */
  float d2h_dx2 = texture2D(tInput, coord + dx).r + texture2D(tInput, coord - dx).r - 2.0 * info.r;
  float d2h_dz2 = texture2D(tInput, coord + dy).r + texture2D(tInput, coord - dy).r - 2.0 * info.r;

  /**
   * VELOCITY UPDATE (Semi-implicit Euler)
   *
   * From physics: acceleration = c² * ∇²h
   *
   * When poolWidth = poolLength = 1.0, this simplifies exactly to:
   *   info.g += 2.0 * (average - info.r)
   * which matches the original isotropic simulation rate.
   */
  float stabilityScale = min(1.0, min(poolWidth * poolWidth, poolLength * poolLength));
  info.g += 0.5 * stabilityScale * (d2h_dx2 / (poolWidth * poolWidth) + d2h_dz2 / (poolLength * poolLength));

  /**
   * DAMPING (Energy Dissipation)
   *
   * Real water loses energy to friction, viscosity, and air resistance.
   * We model this with exponential decay: v(t+dt) = v(t) * damping
   *
   * damping = 0.995 per frame:
   *   - After 60 frames (1 sec @ 60fps): velocity reduced to 0.995^60 ≈ 74%
   *   - After 300 frames (5 sec): velocity reduced to 0.995^300 ≈ 22%
   *
   * This provides gradual settling without abrupt stopping.
   */
  info.g *= 0.995;

  /**
   * HEIGHT UPDATE (Euler Integration)
   *
   * height += velocity * dt
   *
   * Since dt is absorbed into our coefficients, we simply add velocity.
   */
  info.r += info.g;

  gl_FragColor = info;
}
`,ym=`precision highp float;

/**
 * SURFACE NORMAL COMPUTATION SHADER
 *
 * This shader computes the surface normal at each point of the water heightmap.
 * The normals are essential for realistic lighting, reflection, and refraction.
 *
 * MATHEMATICAL BACKGROUND:
 * For a heightfield h(x, z), the surface can be parameterized as:
 *   S(x, z) = (x, h(x, z), z)
 *
 * The tangent vectors are the partial derivatives:
 *   T_x = ∂S/∂x = (1, ∂h/∂x, 0)
 *   T_z = ∂S/∂z = (0, ∂h/∂z, 1)
 *
 * The normal is perpendicular to both tangents:
 *   N = T_z × T_x = (-∂h/∂x, 1, -∂h/∂z)
 *
 * After normalization, we store only x and z components (y can be reconstructed).
 */

// Simulation state texture containing height in R channel
uniform sampler2D tInput;

// Grid spacing for finite difference calculation
uniform float poolWidth;
uniform float poolLength;
uniform vec2 delta;

varying vec2 coord;

void main() {
  vec4 info = texture2D(tInput, coord);

  /**
   * TANGENT VECTOR COMPUTATION
   *
   * We compute tangent vectors using finite differences:
   *
   *   T_x ≈ S(x + Δx) - S(x) = (Δx, h(x+Δx) - h(x), 0)
   *   T_z ≈ S(z + Δz) - S(z) = (0, h(z+Δz) - h(z), Δz)
   *
   * These approximate the partial derivative directions on the surface.
   */

  // Tangent in X direction: (Δx_phys, Δheight_x, 0)
  // Points from current cell toward the right neighbor
  vec3 dx = vec3(
    delta.x * 2.0 * poolWidth, // X component: physical grid spacing
    texture2D(tInput, vec2(coord.x + delta.x, coord.y)).r - info.r, // Y component: height difference
    0.0 // Z component: no change in Z
  );

  // Tangent in Z direction: (0, Δheight_z, Δz_phys)
  // Points from current cell toward the top neighbor (Z mapped to texture Y)
  vec3 dy = vec3(
    0.0, // X component: no change in X
    texture2D(tInput, vec2(coord.x, coord.y + delta.y)).r - info.r, // Y component: height difference
    delta.y * 2.0 * poolLength // Z component: physical grid spacing
  );

  /**
 * * CROSS PRODUCT FOR NORMAL
 *    *
 *    * N = T_z × T_x = dy × dx
 *    *
 *    * Cross product formula:
 *    *   (a × b).x = a.y * b.z - a.z * b.y
 *    *   (a × b).y = a.z * b.x - a.x * b.z
 *    *   (a × b).z = a.x * b.y - a.y * b.x
 *    *
 *    * With our vectors:
 *    *   dy = (0, Δh_z, Δz)
 *    *   dx = (Δx, Δh_x, 0)
 *    *
 *    *   N.x = Δh_z * 0 - Δz * Δh_x = -Δz * Δh_x
 *    *   N.y = Δz * Δx - 0 * 0 = Δz * Δx  (positive, pointing up)
 *    *   N.z = 0 * Δh_x - Δh_z * Δx = -Δh_z * Δx
 *    *
 *    * The result points upward (N.y > 0) for a surface viewed from above.
 *    *
 *    * STORAGE OPTIMIZATION:
 *    * We only store N.x and N.z in the BA channels. N.y can be reconstructed:
 *    *   |N| = 1  →  N.y = sqrt(1 - N.x² - N.z²)
 */
  info.ba = normalize(cross(dy, dx)).xz;

  gl_FragColor = info;
}
`,bm=`precision highp float;

/**
 * DROP/SPLASH CREATION SHADER
 *
 * This shader adds a circular ripple to the water simulation, triggered when
 * the user clicks/touches the water surface or when raindrops fall.
 *
 * The drop profile is carefully designed to create natural-looking ripples:
 * - Smooth edges prevent aliasing and high-frequency noise
 * - Cosine-based profile mimics how water actually displaces in a splash
 * - The shape generates clean outward-propagating circular waves
 */

const float PI = 3.141592653589793;

// Current simulation state (R: height, G: velocity, BA: normal components)
uniform sampler2D tInput;

// Drop center position in NDC (Normalized Device Coordinates) [-1, 1]
uniform vec2 center;

// Radius of the drop effect in physical units
uniform float radius;

// Displacement strength: positive = upward bulge, negative = depression
uniform float strength;

uniform float poolWidth;
uniform float poolLength;

varying vec2 coord;

void main() {
  vec4 info = texture2D(tInput, coord);

  /**
   * DROP PROFILE CALCULATION
   *
   * Step 1: Coordinate transformation
   *   NDC center [-1, 1] → UV space [0, 1]
   *   Formula: UV = NDC * 0.5 + 0.5
   *
   * Step 2: Distance calculation
   *   Compute physical distance from pixel to drop center
   *
   * Step 3: Invert and clamp to [0, 1]
   *   drop = max(0, 1 - d)
   *   Result: 1 at center, 0 at/beyond radius edge
   */
  vec2 physicalDiff = (coord - (center * 0.5 + 0.5)) * 2.0 * vec2(poolWidth, poolLength);
  
  // Scale the physical radius of the drop proportionally to the pool dimensions.
  // This ensures the drop always covers the same number of grid cells on the simulation
  // texture regardless of pool size, maintaining high-fidelity resolution and preventing
  // single-pixel spikes that cause numerical solver splitting (double-ripple artifacts).
  float physRadius = radius * 2.0 * poolLength;
  float drop = max(0.0, 1.0 - length(physicalDiff) / physRadius);

  /**
 * * SMOOTH COSINE PROFILE
 *    *
 *    * A simple linear falloff would create waves with sharp edges, causing
 *    * high-frequency artifacts. Instead, we use a raised cosine profile:
 *    *
 *    *   f(x) = 0.5 - 0.5 * cos(x * π)
 *    *
 *    * This is the "Hann window" function, which has these properties:
 *    *   - f(0) = 0       (zero at the edge)
 *    *   - f(1) = 1       (maximum at the center)
 *    *   - f'(0) = 0      (zero slope at edge - smooth transition)
 *    *   - f'(1) = 0      (zero slope at center - smooth peak)
 *    *
 *    * The smooth derivatives ensure no discontinuities in the wave shape,
 *    * producing clean, natural-looking circular ripples.
 */
  drop = 0.5 - cos(drop * PI) * 0.5;

  // Add displacement to current height
  // Positive strength = upward push (like a drop hitting from below)
  // Negative strength = downward depression (like a raindrop impact)
  info.r += drop * strength;

  gl_FragColor = info;
}
`,xm=`precision highp float;

uniform sampler2D tInput;
uniform vec3 oldCenters[120];
uniform vec3 newCenters[120];
uniform float radii[120];
uniform int sphereCount;
uniform float displacementScale;
uniform float poolWidth;
uniform float poolLength;
varying vec2 coord;

void main() {
  vec4 info = texture2D(tInput, coord);
  vec3 point = vec3(
    (coord.x * 2.0 - 1.0) * poolWidth,
    0.0,
    (coord.y * 2.0 - 1.0) * poolLength
  );
  // Treat the compound samples as a union, not as independent volumes. This
  // prevents overlapping torus samples from amplifying the same water column.
  float oldVolume = 0.0;
  float newVolume = 0.0;
  for (int i = 0; i < 120; i++) {
    if (i >= sphereCount) break;
    float radius = radii[i];
    vec3 oldDelta = point - oldCenters[i];
    vec3 newDelta = point - newCenters[i];
    float oldDy = exp(-pow(length(oldDelta) / radius * 1.5, 6.0));
    float newDy = exp(-pow(length(newDelta) / radius * 1.5, 6.0));
    float oldMin = min(0.0, oldCenters[i].y - oldDy);
    float oldMax = min(max(0.0, oldCenters[i].y + oldDy), oldMin + 2.0 * oldDy);
    float newMin = min(0.0, newCenters[i].y - newDy);
    float newMax = min(max(0.0, newCenters[i].y + newDy), newMin + 2.0 * newDy);
    oldVolume = max(oldVolume, oldMax - oldMin);
    newVolume = max(newVolume, newMax - newMin);
  }
  gl_FragColor = vec4(info.r + (oldVolume - newVolume) * 0.1 * displacementScale, info.gba);
}
`;function Sm(e,{center:t,radii:n,size:r=96}){let i=new nn(r,r,{type:y,minFilter:o,magFilter:o,depthBuffer:!1,stencilBuffer:!1}),a=i.clone(),s=new kc(-1,1,1,-1,0,1),c=new Un,l=`varying vec2 coord;void main(){coord=uv;gl_Position=vec4(position.xy,0.,1.);}`,u=()=>({tInput:{value:null},poolWidth:{value:n[0]},poolLength:{value:n[1]},delta:{value:new W(1/r,1/r)}}),d={step:new Ss({vertexShader:l,fragmentShader:vm.replace(`info.g += 0.5 * stabilityScale`,`info.g += `+(.5*(r/96)**2).toFixed(6)+` * stabilityScale`).replace(`info.g *= 0.995;`,`info.g *= 0.982;`).replace(`gl_FragColor = info;`,`float shore=1.-smoothstep(.82,1.,length(coord*2.-1.));
      info.r=clamp(info.r,-.012,.012);info.rg*=shore;gl_FragColor=info;`),uniforms:u()}),normal:new Ss({vertexShader:l,fragmentShader:ym,uniforms:u()}),drop:new Ss({vertexShader:l,fragmentShader:bm,uniforms:{...u(),center:{value:new W},radius:{value:.04},strength:{value:.008}}}),move:new Ss({vertexShader:l,fragmentShader:xm.replaceAll(`[120]`,`[6]`).replace(`i < 120`,`i < 6`),uniforms:{...u(),oldCenters:{value:Array.from({length:6},()=>new G)},newCenters:{value:Array.from({length:6},()=>new G)},radii:{value:[.28,.28,.085,.085,.08,.08]},sphereCount:{value:6},displacementScale:{value:.055}}})},f=new q(new ss(2,2),d.step);c.add(f);let p=0,m=0,h=0,g=!1,_=Array.from({length:6},()=>new G),v=_.map(()=>new G);function b(t){t.uniforms.tInput.value=i.texture,f.material=t;let n=e.getRenderTarget(),r=e.autoClear;e.autoClear=!0,e.setRenderTarget(a),e.render(c,s),e.setRenderTarget(n),e.autoClear=r,[i,a]=[a,i]}function x(){let t=e.getRenderTarget(),n=e.getClearColor(new K),r=e.getClearAlpha();e.setClearColor(0,0);for(let t of[i,a])e.setRenderTarget(t),e.clear();e.setRenderTarget(t),e.setClearColor(n,r),p=0,g=!1}x();function S(e){let n=d.move.uniforms,r=!1;e.slice(0,6).forEach((e,i)=>{n.oldCenters.value[i].copy(n.newCenters.value[i]),n.newCenters.value[i].set(e.x-t[0],e.y,e.z-t[1]),n.newCenters.value[i].distanceToSquared(n.oldCenters.value[i])>1e-8&&(r=!0)}),g&&r&&(b(d.move),h++),g=!0}function C(e,r=.008,i=.1){let a=d.drop.uniforms;a.center.value.set((e.x-t[0])/n[0],(e.z-t[1])/n[1]),a.strength.value=r,a.radius.value=i/(2*n[1]),b(d.drop)}function w(e,t){if(e<=0)return;p+=Math.min(e,.1);let n=Math.floor((p+1e-8)*120);t&&!g&&(t.forEach((e,t)=>_[t].copy(e)),S(t)),t||(g=!1);for(let e=1;e<=n;e++)t&&(t.forEach((t,r)=>v[r].lerpVectors(_[r],t,e/n)),S(v)),b(d.step),m++,p-=1/120;t&&t.forEach((e,t)=>_[t].copy(e)),b(d.normal)}function T(){let t=new Uint16Array(r*r*4);e.readRenderTargetPixels(i,0,0,r,r,t);let n=0,a=0,o=0;for(let e=0;e<t.length;e+=4){let r=Cr.fromHalfFloat(t[e]);n=Math.max(n,Math.abs(r)),a+=r*r,Math.abs(r)>2e-5&&o++}return{peak:n,energy:a,active:o,finite:Number.isFinite(a)}}return{update:w,drop:C,reset:x,get texture(){return i.texture},sample:T,debug:()=>({size:r,steps:m,displacements:h,renderTargets:2,method:`heightfield-ping-pong`,fixedStep:1/120})}}async function Cm(e,{surfaceHeight:t}){let[n,r]=await Promise.all([new uc().loadAsync(e),fetch(e.replace(/\.png$/,`.json`)).then(e=>{if(!e.ok)throw Error(`水花序列信息加载失败`);return e.json()})]);n.colorSpace=He,n.minFilter=n.magFilter=l,n.generateMipmaps=!1;let i=new Pn;i.name=`Hand drawn water splash flipbooks`;let a=Array.from({length:2},()=>{let e={value:0},t={value:0},r=new $r({map:n,transparent:!0,depthWrite:!1,alphaTest:.12,toneMapped:!1});r.userData.outlineParameters={visible:!1},r.onBeforeCompile=n=>{n.uniforms.uSplashFrame=e,n.uniforms.uSplashFlip=t,n.fragmentShader=`uniform float uSplashFrame,uSplashFlip;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace(`#include <map_fragment>`,`
        vec2 cell=vec2(mod(uSplashFrame,4.),3.-floor(uSplashFrame/4.));
        vec2 localUV=vMapUv;if(uSplashFlip>.5)localUV.x=1.-localUV.x;
        vec2 atlasUV=(cell+localUV*.984375+.0078125)/4.;
        diffuseColor*=texture2D(map,atlasUV);
      `)},r.customProgramCacheKey=()=>`hand-drawn-water-flipbook-v14`;let a=new pi(r);return a.center.set(.5,.14),a.visible=!1,a.renderOrder=3,a.raycast=()=>{},a.userData.combatDecoration=!0,i.add(a),{sprite:a,frame:e,flip:t,born:-100,duration:.64,active:!1,kind:null}}),o=0,s=0,c={entry:0,exit:0};function u(e,{size:n=.55,flip:r=!1,duration:i=.44,kind:l=`entry`}={}){let u=a.find(e=>!e.active)??a.reduce((e,t)=>t.born<e.born?t:e,a[0]);u.sprite.position.set(e.x,t+.014,e.z),u.sprite.scale.set(n,n,1),u.frame.value=0,u.flip.value=Number(r),u.sprite.material.opacity=1,u.born=o,u.duration=i,u.active=u.sprite.visible=!0,u.kind=l,s++,c[l]=(c[l]??0)+1}function d(e){o+=e;for(let e of a){let t=(o-e.born)/e.duration;e.active=e.sprite.visible=t>=0&&t<1,e.active&&(e.frame.value=Math.min(15,Math.floor(t*16)),e.sprite.center.y=r.anchors[e.frame.value],e.sprite.material.opacity=1-U.smoothstep(t,.78,1))}}function f(){a.forEach(e=>{e.born=-100,e.active=e.sprite.visible=!1,e.kind=null})}return{group:i,spawn:u,update:d,reset:f,debug:()=>({active:a.filter(e=>e.active).length,frames:a.filter(e=>e.active).map(e=>e.frame.value),positions:a.filter(e=>e.active).map(e=>e.sprite.position.toArray()),poolSize:a.length,total:s,counts:{...c},frameCount:16,columns:4,rows:4,mode:`transparent-flipbook`})}}var{damp:wm,smoothstep:Tm}=U,Em=4.8,Dm=[.081,.063,.075],Om=[{x:.057,z:.035,height:.095,size:.28,delay:0,duration:.71},{x:.14,z:-.067,height:.12,size:.127,delay:.26,duration:.48}];function km(e,t){let n;if(e.getObjectByName(`Pond_Details`)?.traverse(e=>{e.isMesh&&/lily leaves/i.test(e.material.name)&&(n=e)}),!n)return null;let r=n.geometry,i=r.attributes.position,a=r.index?.array??Array.from({length:i.count},(e,t)=>t),o=Array.from({length:3},()=>new G),s=[],c=new ir;for(let e=0;e<a.length;e+=3)if(o.forEach((t,r)=>t.fromBufferAttribute(i,a[e+r]).applyMatrix4(n.matrixWorld)),(o[0].z+o[1].z+o[2].z)/3>=t)s.push(a[e],a[e+1],a[e+2]);else for(let e of o)c.expandByPoint(e);return c.isEmpty()?null:(n.geometry=r.clone().setIndex(s),c.getCenter(new G))}function Am(e){let t=[],n=[];return{vertex(e,r){t.push(...e),n.push(r.r,r.g,r.b)},finish(){let r=new Hr;return r.setAttribute(`position`,new Ar(t,3)),r.setAttribute(`color`,new Ar(n,3)),r.computeVertexNormals(),new q(r,new Es({name:e,vertexColors:!0}))}}}function jm(){let e=Am(`Floating lily leaf`),t=new K(`#75a765`),n=new K(`#91b879`),r=new K(`#527f50`),i=[0,.009,0],a=[];for(let e=0;e<=40;e++){let t=.27+(2*Math.PI-.54)*e/40,n=1+.025*Math.sin(t*5);a.push([Math.cos(t)*.181*n,0,Math.sin(t)*.15*n])}for(let o=0;o<40;o++){let s=a[o],c=a[o+1];e.vertex(i,n),e.vertex(c,o%7==0?n:t),e.vertex(s,t);let l=[s[0],-.009,s[2]],u=[c[0],-.009,c[2]];for(let t of[s,c,l,l,c,u])e.vertex(t,r)}let o=Am(`Blush water lily flower`),s=new K(`#d88e9c`),c=new K(`#ffebe4`),l=new K(`#f6c15e`);for(let e=0;e<8;e++){let t=e*Math.PI/4,n=Math.cos(t),r=Math.sin(t),i=(e,t,i)=>[-.067+n*e-r*i,t,.018+r*e+n*i],a=i(.006,.009,0),u=i(.036,.034,-.02),d=i(.036,.034,.02),f=i(.071,.051,0),p=i(.035,.023,0);for(let e of[a,d,p,a,p,u,p,d,f,p,f,u])o.vertex(e,e===a||e===p?s:c);o.vertex(i(0,.032,0),l),o.vertex(i(.019,.022,.008),l),o.vertex(i(.019,.022,-.008),l)}let u=new Pn;return u.name=`Interactive water lily`,u.add(e.finish(),o.finish()),u}function Mm(e){let t=document.createElement(`canvas`);t.width=t.height=64,e(t.getContext(`2d`));let n=new Ma(t);return n.colorSpace=He,n}function Nm(){let e=new as(1,2),t=e.attributes.position,n=new Float32Array(t.count*3),r=new K(`#a67449`),i=new K(`#efbe69`),a=new K(`#fff8d4`),o=new K;for(let e=0;e<t.count;e++){let s=t.getY(e),c=s-t.getX(e)*.16+t.getZ(e)*.18;o.copy(r).lerp(i,Tm(s,-.25,.48)).lerp(a,Tm(c,.48,.86)),o.toArray(n,e*3)}e.setAttribute(`color`,new Dr(n,3)),e.scale(.118,.071,.088);let s=new Es({name:`Lily discovery pebble`,vertexColors:!0,emissive:`#ffd382`,emissiveIntensity:0});return s.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
gl_FragColor.a = 0.25;`)},new q(e,s)}function Pm(e,t,n){let r=km(e,t.center[1]);if(!r)return null;r.y=t.height+.014;let i=new G(r.x-.44,t.height,r.z+.13),a=jm(),o=Nm(),s=r.x+.013,c=r.z-.044,l=n?.(s,c)??t.height-.14;o.position.set(s,Math.min(t.height-.09,l+.042),c),o.rotation.y=.6;let u=Mm(e=>{e.beginPath(),e.arc(32,32,23,0,Math.PI*2),e.fillStyle=`rgba(161, 223, 219, .18)`,e.fill(),e.strokeStyle=`#edfdf3`,e.lineWidth=4.5,e.stroke(),e.beginPath(),e.arc(23,21,5,0,Math.PI*2),e.fillStyle=`#ffffff`,e.fill()}),d=Array.from({length:3},()=>new pi(new $r({map:u,transparent:!0,depthWrite:!1}))),f=Mm(e=>{let t=e.createRadialGradient(32,32,3,32,32,31);t.addColorStop(0,`rgba(255, 221, 126, .52)`),t.addColorStop(1,`rgba(255, 221, 126, 0)`),e.fillStyle=t,e.fillRect(0,0,64,64),e.beginPath();for(let[t,n]of[[32,3],[39,24],[58,32],[39,40],[32,61],[25,40],[6,32],[25,24]])e.lineTo(t,n);e.closePath(),e.lineJoin=`round`,e.lineWidth=3,e.strokeStyle=`#dba548`,e.stroke(),e.fillStyle=`#fffbe0`,e.fill()}),p=new Pn,m=Om.map(()=>new pi(new $r({map:f,transparent:!0,depthWrite:!1,toneMapped:!1})));p.add(...m),a.traverse(e=>{e.raycast=()=>{}});for(let e of[o,...m,...d])e.raycast=()=>{};e.add(a,o,p,...d);let h=0,g=0,_=0,v=0;function y(){h=g=_=v=0,a.position.copy(r),a.rotation.set(0,-.36,0),o.visible=!1,o.material.emissiveIntensity=0;for(let e of m)e.visible=!1;for(let e of d)e.visible=!1}function b(e,n,i){if(e<=0)return;h+=e,_=(n&&i?Math.hypot(n.x-r.x,n.z-r.z):1/0)<(_>0?.58:.5)?1.15:Math.max(0,_-e),g=wm(g,+(_>0),_>0?5.8:4,e),a.position.set(r.x-g*.11,r.y+Math.sin(h*2.1)*.004,r.z-g*.245),a.rotation.set(.035*Math.sin(h*2.8)+.18*g*(1-g),-.36+g*.49,.025*Math.cos(h*2.1)),o.visible=g>.32,v=g>.56?v+e:0;let l=v%2.85,u=0;m.forEach((e,n)=>{let{x:r,z:i,height:a,size:o,delay:d,duration:f}=Om[n],p=(l-d)/f;if(e.visible=v>0&&p>0&&p<1,!e.visible)return;let m=Tm(p,0,.18)*(1-Tm(p,.46,1));e.material.opacity=m,e.material.rotation=n===0?.12*p:-.18,e.scale.setScalar(o*(.55+.45*m)),e.position.set(s+r+p*.026,t.height+a+p*.026,c+i),u=Math.max(u,m*(n===0?1:.48))}),o.material.emissiveIntensity=.28+.7*u;let f=(h+Em-1.2)%Em;d.forEach((e,n)=>{let i=f-n*.15;if(e.visible=g<.025&&_===0&&i>=0&&i<.58,!e.visible)return;let a=i/.58;e.position.set(r.x-.09+n*.042+a*.025,t.height+.029+a*.16,r.z+.069+n*.022),e.scale.setScalar(Dm[n]*(.74+a*.29)),e.material.opacity=.93*Tm(a,0,.21)*(1-Tm(a,.63,1))})}function x(e){let t=Math.hypot(e.x-r.x,e.z-r.z)<.2,n=Math.hypot(e.x-a.position.x,e.z-a.position.z)<.16;return t||n?i:e}return y(),{update:b,reset:y,swimTarget:x,surfaceGlints:p,debug:()=>({position:a.position.toArray(),home:r.toArray(),opening:g,bubbles:d.filter(e=>e.visible).length,pebble:o.visible,glint:m.some(e=>e.visible),glow:o.visible?o.material.emissiveIntensity:0})}}async function Fm({environment:e,collider:t,renderer:n,scene:r,atlasURL:i,groundHeight:a,mobileGraphics:o=!1}){let s=e.getObjectByName(`Pond_Water`);if(!s||!t)throw Error(`庭院缺少水池表面或边界`);let c=new ir().setFromObject(s).getCenter(new G),l={center:[...t.center],radii:[...t.radii],height:c.y,inset:.42},u=0;e.getObjectByName(`Pond_Details`)?.traverse(e=>{if(!e.isMesh||!/stones/i.test(e.material.name))return;let t=e.geometry.clone(),n=t.attributes.position,r=t.index?.array??Uint32Array.from({length:n.count},(e,t)=>t),i=Array.from({length:n.count},(e,t)=>t),a=new Map,o=new G,s=e=>{for(;i[e]!==e;)i[e]=i[i[e]],e=i[e];return e},c=(e,t)=>i[s(e)]=s(t);for(let e=0;e<n.count;e++){o.fromBufferAttribute(n,e);let t=[o.x,o.y,o.z].map(e=>e.toFixed(5)).join(`,`);a.has(t)?c(e,a.get(t)):a.set(t,e)}for(let e=0;e<r.length;e+=3)c(r[e],r[e+1]),c(r[e],r[e+2]);let d=new Map;for(let t=0;t<n.count;t++){let r=s(t);d.has(r)||d.set(r,new ir),d.get(r).expandByPoint(o.fromBufferAttribute(n,t).applyMatrix4(e.matrixWorld))}let f=new Set;for(let[e,t]of d){let n=t.getCenter(o);n.x<l.center[0]-l.radii[0]*.72&&Math.abs(n.z-l.center[1])<.7&&(f.add(e),u++)}let p=[];for(let e=0;e<r.length;e+=3)f.has(s(r[e]))||p.push(r[e],r[e+1],r[e+2]);t.setIndex(p),e.geometry=t});let d=o?48:innerWidth<700?64:96,f=Sm(n,{...l,size:d}),p=await Cm(i,{surfaceHeight:l.height});e.add(p.group);let m=Array.from({length:3},()=>new en(0,0,-100,0)),h=new nn(512,512,{depthBuffer:!0});h.depthTexture=new Na(512,512,_);let g={uTime:{value:0},uCenter:{value:new W(...l.center)},uRadii:{value:new W(...l.radii)},uState:{value:f.texture},uGrid:{value:f.debug().size},uScene:{value:h.texture},uDepth:{value:h.depthTexture},uResolution:{value:new W},uNear:{value:.05},uFar:{value:100},uShallow:{value:new K(`#9bcdbd`)},uDeep:{value:new K(`#609fa8`)}};g.uRipples={value:m};let v=`uniform sampler2D uState;uniform float uGrid;
    vec4 stateAt(vec2 uv){vec2 q=uv*uGrid-.5,f=fract(q),base=(floor(q)+.5)/uGrid;
      return mix(mix(texture2D(uState,base),texture2D(uState,base+vec2(1./uGrid,0.)),f.x),
      mix(texture2D(uState,base+vec2(0.,1./uGrid)),texture2D(uState,base+vec2(1./uGrid)),f.x),f.y);}`,y=new Ss({name:`Heightfield cartoon pond`,uniforms:g,side:2,vertexShader:`${v} uniform vec2 uCenter,uRadii;varying vec3 vWorld;varying float vDepth;
      void main(){vec4 world=modelMatrix*vec4(position,1.);vec2 uv=(world.xz-uCenter)/(2.*uRadii)+.5;
        world.y+=stateAt(uv).r;vWorld=world.xyz;vec4 view=viewMatrix*world;vDepth=-view.z;gl_Position=projectionMatrix*view;}`,fragmentShader:`${v}
      uniform float uTime,uNear,uFar;uniform vec2 uCenter,uRadii,uResolution;
      uniform vec4 uRipples[3];
      uniform sampler2D uScene,uDepth;uniform vec3 uShallow,uDeep;varying vec3 vWorld;varying float vDepth;
      float viewDepth(float depth){return uNear*uFar/(uFar-depth*(uFar-uNear));}
      void main(){
        vec2 uv=(vWorld.xz-uCenter)/(2.*uRadii)+.5;vec4 state=stateAt(uv);
        vec2 slope=clamp(state.ba,vec2(-.45),vec2(.45));
        // A millimeter-scale background breeze, not painted foam ribbons.
        slope+=vec2(cos(vWorld.x*5.+uTime*.65),sin(vWorld.z*4.-uTime*.48))*.003;
        vec3 normal=normalize(vec3(slope.x,sqrt(max(.01,1.-dot(slope,slope))),slope.y));
        vec3 eye=normalize(cameraPosition-vWorld);vec2 screen=gl_FragCoord.xy/uResolution;
        float thickness=max(0.,viewDepth(texture2D(uDepth,screen).r)-vDepth);
        vec2 offset=(mat3(viewMatrix)*normal).xy*.022*min(thickness,.35);
        vec2 refracted=clamp(screen+offset,vec2(.001),vec2(.999));
        if(viewDepth(texture2D(uDepth,refracted).r)<vDepth)refracted=screen;
        vec4 underneath=texture2D(uScene,refracted);
        vec3 tint=mix(uShallow,uDeep,smoothstep(.04,.42,thickness));
        float absorption=1.-exp(-thickness*2.5);
        // Preserve the discovery pebble's warm highlight through the same refraction pass.
        float pebble=smoothstep(.12,.25,underneath.a)*(1.-smoothstep(.25,.82,underneath.a));
        vec3 transmission=mix(vec3(.70,.93,.98),vec3(.99,.97,.93),pebble);
        vec3 color=mix(underneath.rgb*transmission,tint,(.42+absorption*.28)*mix(1.,.47,pebble));
        vec3 reflection=mix(vec3(.36,.51,.40),vec3(.78,.88,.83),smoothstep(.02,.7,reflect(-eye,normal).y));
        float fresnel=.09+.45*pow(1.-max(dot(eye,normal),0.),4.);
        color=mix(color,reflection,fresnel);
        color+=vec3(.65,.85,.85)*clamp(dot(state.ba,vec2(-.6,.8)),-.12,.12)*.16;
        vec3 light=normalize(vec3(-.5,1.,.6)),halfway=normalize(light+eye);
        float glint=pow(max(dot(normal,halfway),0.),100.);
        color+=vec3(.90,.96,.87)*glint*.06;
        // Swimming leaves low, spreading surface ripples. No upright splash
        // geometry or billboard animation is involved in this pass.
        float shore=1.-smoothstep(.86,.99,length(uv*2.-1.));
        for(int i=0;i<3;i++){
          vec4 ripple=uRipples[i];float age=uTime-ripple.z;
          if(age>=0.&&age<1.3){
            vec2 relative=vWorld.xz-ripple.xy,forward=vec2(sin(ripple.w),cos(ripple.w));
            vec2 local=vec2(dot(relative,vec2(forward.y,-forward.x)),dot(relative,forward));
            vec2 radius=vec2(.28+age*.28,.34+age*.32);
            float angle=atan(local.y/radius.y,local.x/radius.x);
            float edge=(length(local/radius)-1.)*radius.x+.006*sin(angle*4.+age);
            float width=mix(.012,.006,age/1.3),aa=max(fwidth(edge),.002);
            float line=1.-smoothstep(width,width+aa,abs(edge));
            float arcs=smoothstep(-.65,.25,cos(angle*2.+.55));
            float life=smoothstep(0.,.10,age)*(1.-smoothstep(.45,1.3,age));
            color=mix(color,vec3(.78,.91,.86),line*arcs*life*shore*.60);
          }
        }
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});y.userData.outlineParameters={visible:!1};let b=[],x=[],S=o?24:40,C=o?72:112;for(let e=0;e<=S;e++)for(let t=0;t<C;t++){let n=e/S,r=t/C*Math.PI*2;b.push(l.center[0]+n*l.radii[0]*Math.cos(r),l.height,l.center[1]+n*l.radii[1]*Math.sin(r))}for(let e=0;e<S;e++)for(let t=0;t<C;t++){let n=e*C+t,r=e*C+(t+1)%C,i=n+C,a=r+C;x.push(n,r,i,r,a,i)}let w=new Hr;w.setAttribute(`position`,new Ar(b,3)),w.setIndex(x),w.computeVertexNormals(),s.traverse(e=>{e.isMesh&&(e.geometry=w,e.material=y,e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=2)}),e.traverse(e=>{e.isMesh&&[].concat(e.material).some(e=>/water ripple/i.test(e.name))&&(e.visible=!1)});let T=Pm(e,l,a),E=p.group,D=0,O=!1,k=0,A=-100,j=0,M=!1,N=!o,P=-1/0,F=new G,I=new Ft,L=new on,R=new G,ee=new G,te=new G;function ne(e,t=0){m[k++%m.length].set(e.x,e.z,D,t),A=D}function re(e,t=.4){f.drop(e,.002*t,.15),ne(e)}function ie(e,{kind:t=`entry`}={}){re(e,1),p.spawn(e,{size:t===`exit`?.43:.55,duration:t===`exit`?.36:.44,kind:t})}function z(e,{contacts:t,position:n,yaw:r=0,inWater:i=!1,moving:a=!1}={}){D+=e,g.uTime.value=D,T?.update(e,n,i);let s=!o||i||D-A<4;if(s?f.update(e,i?t:null):N&&f.reset(),N=s,g.uState.value=f.texture,p.update(e),e>0&&n&&i&&a){let e=M?Math.hypot(n.x-R.x,n.z-R.z):0;e<.15&&(j+=e),j>.12&&D-A>.62&&(te.set(Math.sin(r),0,Math.cos(r)),ee.copy(n).addScaledVector(te,-.08),ne(ee,r),j=0),R.copy(n),M=!0}else e>0&&(M=!1,j=0);!i&&O&&p.reset(),O=i}function ae(){f.reset(),g.uState.value=f.texture,p.reset(),T?.reset(),m.forEach(e=>e.z=-100),k=0,A=-100,j=0,M=!1,O=!1,N=!o,P=-1/0}let oe=new W;function se(e,t=performance.now()){n.getDrawingBufferSize(oe),g.uResolution.value.copy(oe);let i=o?Math.min(.4,384/Math.max(oe.x,oe.y)):Math.min(.65,960/oe.x),a=Math.max(1,Math.round(oe.x*i)),c=Math.max(1,Math.round(oe.y*i)),l=h.width!==a||h.height!==c;if(l&&h.setSize(a,c),o&&!O&&!l&&t-P<100&&F.distanceToSquared(e.position)<1e-8&&Math.abs(I.dot(e.quaternion))>1-1e-9&&L.equals(e.projectionMatrix))return;g.uNear.value=e.near,g.uFar.value=e.far;let u=n.getRenderTarget(),d=n.shadowMap.autoUpdate,f=n.shadowMap.enabled;s.visible=!1,E.visible=!1,n.shadowMap.autoUpdate=!1,n.shadowMap.enabled=!1,T&&(T.surfaceGlints.visible=!1);try{n.setRenderTarget(h),n.render(r,e),o&&(P=t,F.copy(e.position),I.copy(e.quaternion),L.copy(e.projectionMatrix))}finally{n.setRenderTarget(u),n.shadowMap.autoUpdate=d,n.shadowMap.enabled=f,s.visible=!0,E.visible=!0,T&&(T.surfaceGlints.visible=!0)}}return{info:l,update:z,ripple:re,splash:ie,reset:ae,prepare:se,swimTarget:e=>T?.swimTarget(e)??e,sampleWaves:f.sample,debug:()=>({time:D,height:l.height,center:l.center,radii:l.radii,clearedStones:u,ripples:m.filter(e=>D-e.z<1.3).length,crestLimit:3,foam:0,droplets:0,cartoonSplash:p.debug(),lily:T?.debug(),shader:`heightfield-refractive-toon`,simulation:f.debug(),extraRenderTargets:3,refractionSize:[h.width,h.height]})}}var Im=24,Lm={berry:`树果`,apple:`苹果`,orange:`橘子`,plum:`李子`};function Rm(e){let t=new ds(1,12,8),n=new ws({color:`#69a844`,name:`Fruit leaf`}),r=new ws({color:`#85513b`,name:`Fruit stem`});function i(e,i,a,o){let s=new Pn;s.name=Lm[e];let c=new q(new os(new mo(i.map(([e,t])=>new W(e,t))).getPoints(30).map(e=>e.setX(Math.max(0,e.x))),28),new ws({color:a,name:Lm[e],roughness:.8}));s.add(c);let l=i.at(-1)[1],u=new q(new za(.004,.006,.029,8),r);u.position.set(0,l+.01,0),u.rotation.z=-.2,s.add(u);let d=new q(t,n);return d.position.set(.027,l+.023,.003),d.scale.set(o,.008,.02),d.rotation.set(.2,-.15,.47),s.add(d),s}return{berry:e,apple:i(`apple`,[[0,.009],[.037,.003],[.065,.019],[.087,.065],[.091,.105],[.075,.145],[.043,.159],[0,.149]],`#e74b56`,.034),orange:i(`orange`,[[0,0],[.049,.009],[.075,.035],[.085,.074],[.08,.114],[.056,.142],[0,.151]],`#f7a237`,.028),plum:i(`plum`,[[0,0],[.034,.012],[.06,.045],[.068,.087],[.058,.131],[.032,.151],[0,.153]],`#8c65bd`,.026)}}function zm({layout:e,environment:t,models:n,groundHeight:r,mobileGraphics:i=!1}){let a=new Map,o=new Map,s=new vo;for(let e=0;e<8;e++){let t=e*Math.PI/4,n=e%2?.24:1;s[e?`lineTo`:`moveTo`](Math.cos(t)*n,Math.sin(t)*n)}let c=new ls(s),l=new cs(i?.18:.128,i?.23:.163,48),u=null,d=t.getObjectByName(`Planting`),f=[];d?.traverse(e=>{e.isMesh&&f.push(e)});for(let i of e?.trees??[]){for(let e of f)e.material.name===i.material&&(e.userData.fruitTree=i.id);let e={...i,fruitScale:i.fruitScale??1,wait:0,fruits:[]};o.set(e.id,e),e.fruits=i.placements.map(({branch:i,landing:o},s)=>{let u=`${e.id}-${s+1}`,d=new G().fromArray(i),[f,p]=o,m=r(f,p);if(m===null)throw Error(`果实落点不在地面上：${u}`);let h=new Pn;h.name=u,h.position.copy(d);let g=n[e.fruit].clone();g.scale.setScalar(e.fruitScale),g.rotation.y=s*2.2,g.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.userData.gardenFruit=u)});let _=new q(c,new bi({color:`#fff3c4`,side:2,transparent:!0,depthWrite:!1}));_.userData.combatDecoration=!0,_.position.set(.076,.165,.032).multiplyScalar(e.fruitScale),_.rotation.x=-Math.PI/3,_.visible=!1;let v=new q(l,new bi({color:`#fff2b9`,transparent:!0,opacity:.75,depthWrite:!1}));v.userData.combatDecoration=!0,v.rotation.x=-Math.PI/2,v.position.y=.01,v.visible=!1,h.add(g,_,v),t.add(h);let y={id:u,tree:e,position:d,landing:new G(f,m+.002,p),object:h,body:g,glint:_,pickupRing:v,index:s,age:0,phase:`hanging`};return a.set(u,y),y})}function p(e){let t=o.get(e)?.fruits.find(e=>e.phase===`hanging`);return t?m(t):null}function m(e){let t=e.object.position.clone();return t.y+=.075*e.tree.fruitScale,t}function h(e){let t=a.get(e);if(t?.phase!==`ground`)return null;let{fruit:n,fruitScale:r}=t.tree;return{id:e,type:n,name:Lm[n],center:m(t).toArray(),scale:r}}function g(e,{maxDistance:t=1/0,radiusPerMeter:n=0,isVisible:r}={}){let i=1/0,o=null;for(let s of a.values()){let a=s.phase===`ground`;if(!a&&(!n||s.phase!==`hanging`))continue;let c=m(s),l=c.clone().sub(e.origin).dot(e.direction);if(l<=0||l>t)continue;let u=n?Math.min(.72,l*n):.24,d=e.distanceSqToPoint(c),f=n?d/l**2:d;if(d>=u**2||f>=i)continue;let p=a?null:s.tree.id;(!r||r(c,s.id,p))&&(i=f,o={fruit:a?h(s.id):null,targetId:p,point:c,distance:l})}return o}function _(e){let t=a.get(e)??null;t!==u&&(u&&(u.pickupRing.material.opacity=.75,u.pickupRing.scale.setScalar(1)),u=t,u&&(u.pickupRing.material.opacity=1,u.pickupRing.scale.setScalar(1.12)))}function v(e){let t=o.get(e);if(!t||!p(e))return null;for(let e of t.fruits)e.phase===`hanging`&&(e.phase=`falling`,e.age=0);return Lm[t.fruit]}function y(e){for(let t of a.values()){if(t.phase===`falling`){t.age+=e;let n=t.age-t.index*.085,r=Math.sqrt((t.position.y-t.landing.y)/5.6),i=U.clamp(n/r,0,1),a=U.clamp((n-r)/.24,0,1);t.object.position.lerpVectors(t.position,t.landing,.87*i+.13*a),t.object.position.y=U.lerp(t.position.y,t.landing.y,i*i)+.2*a*(1-a),t.body.rotation.z=-Math.sin(i*Math.PI)*.73+Math.sin(a*Math.PI*2)*.22,a===1&&(t.phase=`ground`,t.age=0)}else t.phase===`ground`&&(t.age+=e);t.pickupRing.visible=t.phase===`ground`;let n=(t.age+3.9-t.index*.12)%4;if(t.glint.visible=t.phase===`ground`&&n<.48,t.glint.visible){let e=Math.sin(n*Math.PI/.48);t.glint.scale.setScalar(.055*e),t.glint.material.opacity=.88*e}}for(let t of o.values())if(t.fruits.every(e=>e.phase===`eaten`)&&(t.wait+=e,!(t.wait<Im))){t.wait=0;for(let e of t.fruits)e.phase=`hanging`,e.age=0,e.object.position.copy(e.position),e.object.visible=!0}}return{update:y,knockDown:v,aimPoint:p,treeName:e=>o.get(e)?.name,isHanging:e=>a.get(e)?.phase===`hanging`,treeAt:e=>a.get(e)?.tree.id,point:e=>a.has(e)?m(a.get(e)):null,groundFruit:h,nearbyFruit:g,setHover:_,take(e){let t=a.get(e);return t?.phase===`ground`&&(t.phase=`in-meal`,t.object.visible=!1,!0)},finish(e,t){let n=a.get(e);n?.phase===`in-meal`&&(n.phase=t?`eaten`:`ground`,n.object.visible=!t)},debug:()=>[...a.values()].map(e=>({id:e.id,treeId:e.tree.id,type:e.tree.fruit,phase:e.phase,point:m(e).toArray(),pickupCue:e.object.visible&&e.pickupRing.visible}))}}var{clamp:Bm,damp:Vm,smoothstep:Hm}=U,Um=.54,Wm=1.72,Gm=.88,Km=1.15,qm=.66;function Jm(e,t,n){let r=[];function i(e,t){let n=new K(t),i=new Float32Array(e.attributes.position.count*3);for(let e=0;e<i.length;e+=3)n.toArray(i,e);e.setAttribute(`color`,new Dr(i,3)),r.push(e)}function a(t,n,r,a,o){let s=e(t,n)??0;i(new za(.012,.016,r,6).translate(t,s+r/2,n),`#4e8746`);for(let e of[.55,3.5])i(new ds(1,8,5).scale(.066,.013,.028).rotateZ(.28).rotateY(-e).translate(t+.052*Math.cos(e),s+r*.48,n+.052*Math.sin(e)),`#689e4e`);for(let e=0;e<5;e++){let c=e*Math.PI*2/5;i(new ds(1,10,6).scale(.074*a,.021*a,.045*a).rotateY(-c).translate(t+.066*a*Math.cos(c),s+r,n+.066*a*Math.sin(c)),o)}return i(new ds(1,10,6).scale(.047*a,.025*a,.047*a).translate(t,s+r+.014*a,n),`#e8ab49`),new G(t,s+r+.039*a+.021,n)}let o=a(t,n,.23,1,`#fff1c9`);a(t+.24,n+.05,.15,.72,`#edb1a3`),a(t+.13,n+.24,.18,.78,`#fff1c9`);let s=new q(xf(r),new ws({name:`Meadow flowers`,vertexColors:!0}));for(let e of r)e.dispose();return s.name=`Butterfly landing flowers`,s.receiveShadow=!0,s.raycast=()=>{},{flower:s,perch:o}}function Ym(){let e=[[.008,.011],[.034,.077],[.107,.143],[.184,.168],[.233,.137],[.245,.087],[.211,.031],[.165,.004],[.205,-.035],[.202,-.081],[.158,-.116],[.104,-.116],[.058,-.076],[.013,-.039]],t=[],n=[],r=new K(`#b96e3c`),i=new K(`#f8be57`),a=new K(`#fff2aa`),o=[.101,.018],s=e.map(([e,t])=>[e*.87+o[0]*.13,t*.87+o[1]*.13]);function c([e,r],i,a){t.push(e,i,r),n.push(a.r,a.g,a.b)}for(let t=0;t<e.length;t++){let n=(t+1)%e.length;for(let i of[e[t],e[n],s[t],s[t],e[n],s[n]])c(i,0,r);c(o,0,i),c(s[t],0,a),c(s[n],0,a)}for(let e of[-.001,.001]){let t=[.171,.104];for(let n=0;n<8;n++){c(t,e,a);for(let r of[n*Math.PI/4,(n+1)*Math.PI/4])c([t[0]+.034*Math.cos(r),t[1]+.017*Math.sin(r)],e,new K(`#fff9dc`))}}let l=new Hr;l.setAttribute(`position`,new Ar(t,3)),l.setAttribute(`color`,new Ar(n,3));let u=new bi({vertexColors:!0,side:2}),d=new Pn;d.name=`Meadow butterfly`,d.rotation.order=`YXZ`;let f=new q(l,u),p=new q(l,u);f.position.x=.012,p.position.x=-.012,p.scale.x=-1;let m=new q(new La(.021,.107,3,7).rotateX(Math.PI/2),new bi({color:`#694b39`}));d.add(f,p,m);for(let e of d.children)e.userData.combatDecoration=!0,e.raycast=()=>{};return{butterfly:d,right:f,left:p}}function Xm(e,t,n){let{flower:r,perch:i}=Jm(e,t+.93,n+1.03),{butterfly:a,right:o,left:s}=Ym(),c=new Pn;c.add(r,a);let l=new G,u=new G,d=new G,f=new G,p=new G,m=`hidden`,h=0,g=0,_=0;function v(){m=`hidden`,h=g=_=0,a.visible=!1}function y(e,r){u.x=Vm(u.x,Bm(e.x,t-.63,t+.62),9,r),u.z=Vm(u.z,Bm(e.z,n-.66,n+.65),9,r),u.y=Vm(u.y,e.y,9,r)}function b(e){let t=(e-.5)*Math.PI;return p.set(u.x+qm*Math.cos(t),u.y+.78+.065*Math.sin(e*Math.PI),u.z+qm*Math.sin(t))}function x(e,t,n=0){let r=e.x-a.position.x,i=e.z-a.position.z,o=Math.hypot(r,i);if(o>1e-4){let e=Math.atan2(r,i)-a.rotation.y;a.rotation.y+=Math.atan2(Math.sin(e),Math.cos(e))*(1-Math.exp(-12*t))}let s=-Math.atan2(e.y-a.position.y,Math.max(o,.001))*.32*(1-n);a.rotation.x=Vm(a.rotation.x,s,12,t),a.position.copy(e)}function S(r,c,p,S){if(m===`hidden`){if(!p)return;m=`rising`,h=g=0,u.set(Bm(c.x,t-.63,t+.62),c.y,Bm(c.z,n-.66,n+.65));let r=u.x+.19,i=Bm(u.z-.53,n-.72,n+.62);l.set(r,(e(r,i)??c.y)+.18,i),a.position.copy(l),a.rotation.set(0,Math.PI,0),a.visible=!0}h+=r,g+=r;let C=1;if(m===`rising`){y(c,r);let e=Hm(h,0,Um);f.copy(l).lerp(b(0),e),f.y+=.095*Math.sin(Math.PI*e),x(f,r),h>=Um&&(m=`circling`,h=0)}else if(m===`circling`){y(c,r);let e=Hm(h,0,Wm);f.copy(b(e)),f.y+=.052*Math.sin(e*Math.PI*5)*Math.sin(e*Math.PI),x(f,r),h>=Wm&&(d.copy(f),m=`landing`,h=0)}else if(m===`landing`){let e=Hm(h,0,Gm);f.copy(d).lerp(i,e),f.y+=.16*Math.sin(e*Math.PI),C=1-Hm(e,.65,1),x(f,r,1-C),h>=Gm&&(m=`perched`,h=_=0)}else if(m===`perched`)C=0,a.rotation.x=Vm(a.rotation.x,0,14,r),_=S?0:_+r,_>=5&&(m=`returning`,h=0);else if(m===`returning`){let e=Hm(h,0,Km);if(f.copy(i).lerp(l,e),f.y+=.45*Math.sin(e*Math.PI),x(f,r),h>=Km){v();return}}let w=.44+.59*Math.sin(g*Math.PI*2*7),T=.27+.11*Math.sin(g*Math.PI*1.6),E=U.lerp(T,w,C);o.rotation.z=E,s.rotation.z=-E}return v(),{object:c,update:S,reset:v,debug:()=>({phase:m,visible:a.visible,position:a.position.toArray(),perch:i.toArray()})}}var Zm=1.57,Qm=-4.46,$m=[`#4e8c3e`,`#64a447`,`#7eb94e`].map(e=>new K(e)),eh=[{angle:0,height:.45,width:.15,reach:.09,tone:2},{angle:1.3,height:.38,width:.14,reach:.13,tone:1},{angle:2.7,height:.34,width:.13,reach:.15,tone:0},{angle:3.9,height:.41,width:.15,reach:.12,tone:1},{angle:5.1,height:.3,width:.12,reach:.16,tone:0}];function th(e){let t=[],n=[];function r(e){let r=Math.cos(e.angle),i=Math.sin(e.angle),{height:a,width:o,reach:s}=e,c=$m[e.tone];function l(e,t,n){return[r*e-i*n,t,i*e+r*n]}let u=[l(.015,0,-o*.2),l(.015,0,o*.2),l(s*.47,a*.6,-o*.5),l(s*.29,a*.6,0),l(s*.47,a*.6,o*.5),l(s,a,0)],d=[.54,.57,.87,1,1.08,1.17];for(let e of[0,3,2,0,1,3,1,4,3,2,3,5,3,4,5]){t.push(...u[e]);let r=d[e];n.push(c.r*r,c.g*r,c.b*r)}}let i=[];for(let[t,n]of[4,5,5,5,5,4].entries())for(let r=0;r<n;r++){let a=t%2==0?-.07:.07,o=Zm+(r-(n-1)/2)*.32+a,s=Qm+(t-2.5)*.31,c=e(o,s);if(c===null)continue;let l=(r===0||r===n-1||n===4?.88:1)+(t+r*2)%3*.045;i.push({position:new G(o,c-.006,s),scale:new G().setScalar(l),yaw:new Ft().setFromAxisAngle(Nn.DEFAULT_UP,-(t+r)*1.13),bendX:0,bendZ:0})}for(let e of eh)r(e);let a=new Hr;a.setAttribute(`position`,new Ar(t,3)),a.setAttribute(`color`,new Ar(n,3)),a.computeVertexNormals();let o=new ra(a,new ws({name:`Grass beside the cottage`,vertexColors:!0,side:2,roughness:1}),i.length);o.name=`Cottage Meadow`,o.receiveShadow=!0,o.raycast=()=>{},o.instanceMatrix.setUsage(Je);let s=new G,c=new Ft,l=new on,u=new G,d=!1,f=!1,p=Xm(e,Zm,Qm);o.add(p.object);function m(e,t){s.set(e.bendZ,0,-e.bendX).normalize(),c.setFromAxisAngle(s,Math.hypot(e.bendX,e.bendZ)).multiply(e.yaw),o.setMatrixAt(t,l.compose(e.position,c,e.scale))}function h(){for(let[e,t]of i.entries())t.bendX=0,t.bendZ=0,m(t,e);o.instanceMatrix.needsUpdate=!0,f=!1,d=!1,p.reset()}function g(e,t){if(e<=0)return;let n=d&&Math.hypot(t.x-u.x,t.z-u.z)>.001;u.copy(t),d=!0;let r=Math.abs(t.x-Zm)<1.35&&Math.abs(t.z-Qm)<1.47;f=!1;let a=!1;for(let[n,o]of i.entries()){if(!r&&o.bendX===0&&o.bendZ===0)continue;let i=o.position.x-t.x,s=o.position.z-t.z,c=Math.hypot(i,s);f||=c<.23;let l=.84*(1-U.smoothstep(c,.18,.62)),u=c>.015?i/c:n%2==0?1:-1,d=c>.015?s/c:0,p=l>0?18:8,h=U.damp(o.bendX,l*u,p,e),g=U.damp(o.bendZ,l*d,p,e),_=Math.abs(h)<.001?0:h,v=Math.abs(g)<.001?0:g;(_!==o.bendX||v!==o.bendZ)&&(o.bendX=_,o.bendZ=v,m(o,n),a=!0)}a&&(o.instanceMatrix.needsUpdate=!0),p.update(e,t,f&&n,r)}return h(),o.computeBoundingSphere(),o.boundingSphere.radius+=.45,Object.assign(o,{update:g,reset:h,debug:()=>({inside:f,bentTufts:i.filter(e=>Math.hypot(e.bendX,e.bendZ)>.06).length,butterfly:p.debug()})})}var{smoothstep:nh}=U,rh=5.6,ih=1.24,ah=.035;function oh(){let e=[new za(.025,.022,.014,12).translate(0,-.003,0),new fs(.015,.0045,6,14).translate(0,-.024,0)],t=xf(e);for(let t of e)t.dispose();return new q(t,new Es({color:`#8f6840`}))}function sh(e,t){let n=e.attributes.position,r=new Float32Array(n.count*3),i=new G,a=new K;for(let e=0;e<n.count;e++)t(i.fromBufferAttribute(n,e),a),a.toArray(r,e*3);return e.setAttribute(`color`,new Dr(r,3)),e}function ch(){let e=[[0,-.221],[.056,-.231],[.083,-.267],[.093,-.301],[.105,-.308],[.113,-.303],[.116,-.293],[.117,-.281],[.116,-.27],[.112,-.246],[.101,-.217],[.083,-.186],[.058,-.155],[.034,-.137],[.015,-.131],[0,-.13]].map(([e,t])=>new W(e,t)),t=new K(`#d9be93`),n=new K(`#fff5dd`),r=new K(`#5d8084`);return new q(sh(new os(e,32),({y:e},i)=>{let a=nh(e,-.307,-.296)*(1-nh(e,-.283,-.271));i.copy(t).lerp(n,nh(e,-.303,-.16)).lerp(r,.89*a)}),new Es({vertexColors:!0,emissive:`#ffe1aa`,emissiveIntensity:ah}))}function lh(){let e=new K(`#c87966`),t=new K(`#efa990`),n=new K(`#fff0d8`),r=sh(new ss(.103,.249,4,12),({x:r,y:i},a)=>{let o=nh(-i,.075,.091)*(1-nh(-i,.102,.116));a.copy(e).lerp(t,.46+.24*nh(i,-.1,.11)-.22*nh(r,-.018,.04)).lerp(n,.88*o)}),i=r.attributes.position;for(let e=0;e<i.count;e++){let t=i.getX(e),n=i.getY(e),r=1-nh(n,-.123,.085);i.setXYZ(e,t*(1-.17*r),n+r*.012*nh(Math.abs(t),.032,.0515),.026*r+.007*Math.abs(t)/.052)}return r.computeVertexNormals(),r.translate(0,-.232,0),new q(r,new Es({vertexColors:!0,side:2}))}function uh(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);t.beginPath();for(let[e,n]of[[32,3],[38,24],[58,32],[38,40],[32,61],[26,40],[6,32],[26,24]])t.lineTo(e,n);t.closePath(),t.lineWidth=3,t.lineJoin=`round`,t.strokeStyle=`#d6a85a`,t.stroke(),t.fillStyle=`#fff9da`,t.fill();let n=new Ma(e);n.colorSpace=He;let r=new pi(new $r({map:n,transparent:!0,depthWrite:!1,toneMapped:!1}));return r.position.set(.105,-.219,.082),r}function dh(e){if(!e)return null;let t=e.max[2],n=new Pn;n.name=`Cottage window wind chime`,n.position.set(e.max[0]-.025,e.max[1]-.09,t+.321);let r=new Pn;r.position.y=-.039;let i=ch(),a=uh(),o=lh(),s=new Es({color:`#7c5b47`}),c=new q(new za(.006,.006,.137,6).translate(0,-.0685,0),s),l=new Pn;l.position.y=-.261;let u=new q(new za(.0045,.0045,.118,6).translate(0,-.059,0),s),d=new q(new ds(.021,10,6).scale(.77,1,.77).translate(0,-.057,0),s);l.add(u,d,o),r.add(c,i,l,a),n.add(oh(),r),n.traverse(e=>{e.raycast=()=>{}});let f,p,m,h,g,_,v,y;function b(){f=0,p=ih,m=1.95,h=!1,g=!1,_=0,v=null,y=0,r.rotation.set(0,0,0),l.rotation.set(0,0,0),o.rotation.y=-.12,i.material.emissiveIntensity=ah,a.visible=!1}function x(e,s){if(e<=0)return;f+=e;let c=Math.hypot(s.x-n.position.x,s.z-t-.45),u=s.z>t+.3&&c<(h?1.24:.99),d=u&&!h;if(h=u,d&&(m=f+rh,p<=.55?(_=1,v=`approach`):g=!0),h||(g=!1),p>=ih){if(!g&&f<m)return;p=0,y++,_=g?1:.78,v=g?`approach`:`breeze`,g=!1,m=f+rh}p=Math.min(ih,p+e);let b=1-nh(p,.21,ih);r.rotation.z=.25*_*Math.sin(p*11.1)*b,r.rotation.x=.072*_*Math.sin(p*9.4)*b,l.rotation.z=.29*_*Math.sin(p*11.1-.72)*b*nh(p,0,.14),o.rotation.y=-.12+.25*Math.sin(p*10.1)*b;let x=nh(p,.4,.53)*(1-nh(p,.59,.85));a.visible=x>.002,a.material.opacity=x*_,a.scale.setScalar(.058+x*.118),i.material.emissiveIntensity=ah+.32*x*_}return b(),{object:n,reset:b,update:x,debug:()=>({anchor:n.position.clone().add(r.position).toArray(),age:p,cause:v,plays:y,near:h,sway:r.rotation.z,glint:a.visible,shine:i.material.emissiveIntensity})}}async function fh(e,t){let n=new Ef().setMeshoptDecoder(Xp),r=async t=>{let n=await fetch(e+t);if(!n.ok)throw Error(`资源读取失败：${t}`);return n.json()},i=t=>n.loadAsync(e+t),a=await t(r(`manifest.json`)),o=r(a.level),[[s,c],l,[u,d]]=await Promise.all([t(Promise.all([o,a.fruitLevel?r(a.fruitLevel):null])),t(i(a.environment)),t(Promise.all([i(a.props.berry),o.then(e=>Promise.all(e.targets.map(e=>i(e.asset))))]))]);return{manifest:a,layout:s,fruitLayout:c,garden:l,berry:u,targets:d}}async function ph({renderer:e,scene:t,actor:n,model:r,root:i,assets:a,metadata:o,stageColliders:s,toon:c,heartTexture:l,mobileGraphics:u,onWaterContact:d=()=>{}}){let{layout:f,fruitLayout:p,garden:m,berry:h,targets:g}=a,_=new Pn;_.name=`Garden Resources`,_.add(m.scene);let v=f.targets.map((e,t)=>{let n=g[t].scene;return n.name=`Target_${e.id}`,n.position.fromArray(e.position),n.userData.targetId=e.id,n.traverse(t=>{t.isMesh&&(t.userData.aimTarget=e.id,/disc|ring|bullseye/i.test(t.name)&&(t.userData.waterTarget=e.id))}),_.add(n),{...e,object:n}});_.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.geometry.computeBoundingBox())}),_.visible=!1,t.add(_),_.updateMatrixWorld(!0);let y=new ir().setFromObject(_),b=[],x=new G;_.traverse(e=>{if(e.isMesh){let t=e.geometry.attributes.position;for(let n=0;n<t.count;n++)x.fromBufferAttribute(t,n).applyMatrix4(e.matrixWorld),b.push(x.x,x.y,x.z)}});let S=new Float32Array(b),C=m.scene.getObjectByName(`NAV_Ground`);if(!C)throw Error(`庭院缺少可行走地面`);let w=[];C.traverse(e=>{e.isMesh&&[].concat(e.material).some(e=>/Terrain with/.test(e.name))&&w.push(e)});let T=new nl(new G,new G(0,-1,0),0,12);function E(e,t){return T.ray.origin.set(e,8,t),T.intersectObjects(w,!1).find(e=>e.face.normal.y>.5)}function D(e,t){return E(e,t)?.point.y??null}let O=th(D);_.add(O);let k=new G,A=new Rt;function j(e){if(!e)return null;let t=e.object.geometry.attributes.color,n=`grass`;if(t&&e.barycoord){let{a:r,b:i,c:a}=e.face;rr.getInterpolatedAttribute(t,r,i,a,e.barycoord,k),k.x>=k.y&&k.x>.48&&(n=`earth`)}return A.getNormalMatrix(e.object.matrixWorld),{normal:e.face.normal.clone().applyMatrix3(A).normalize(),kind:n}}let M=[],N=m.scene.getObjectByName(`Basket`),P=null,F=null,I=null,L=!1,R=0;if(N){let e=new ir().setFromObject(N),t=e.getCenter(new G),n=e.getSize(new G);P={center:t.toArray(),radius:Math.max(n.x,n.z)/2,food:t.toArray()},M.push({id:`berry-basket`,type:`circle`,center:[t.x,t.z],radius:P.radius})}let ee=Rm(h.scene),te=new Map(Object.entries(ee).map(([e,t])=>{let n=new ir().setFromObject(t);return[e,{object:t,center:n.getCenter(new G),size:n.getSize(new G)}]})),ne=p?.basket?.length?p.basket:[`berry`];if(N&&p){for(let e of[...N.children])/Berry warm peach|Foliage middle/.test(e.material?.name)&&N.remove(e);let e=[[-.085,.185,.055],[.091,.203,.068],[-.095,.187,-.085],[.073,.194,-.096]],[t,,n]=P.center;ne.forEach((r,i)=>{let a=ee[r].clone(),[o,s,c]=e[i];a.position.set(t+o,s,n+c),a.scale.setScalar(.9),a.rotation.y=i*1.8,a.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.userData.basketFruit=!0)}),N.add(a)})}let re=zm({layout:p,environment:_,models:ee,groundHeight:D,mobileGraphics:u}),ie=`berry`,z=h.scene,ae=te.get(`berry`).center,oe=te.get(`berry`).size,se=1;function ce(e,t=1){z.visible=!1,ie=e,se=t,{object:z,center:ae,size:oe}=te.get(e)}function le(e=null){let t=re.groundFruit(e);return e&&(!t||!re.take(e))?!1:(I=e,L=!e,ce(t?.type??ne[R],t?.scale),F=new G().fromArray(t?.center??P.food),!0)}function ue(){re.finish(I,!1),I=null,L=!1,F=null,ce(`berry`)}let de=[];r.traverse(e=>{e.isSkinnedMesh&&de.push(e)});let fe=new G,pe=new G,me=new G,he=new G;function ge(e,t){let n=-1/0;for(let r of de){r.skeleton.update();let i=r.geometry.attributes.position;for(let a=0;a<i.count;a++)fe.fromBufferAttribute(i,a),r.applyBoneTransform(a,fe),fe.applyMatrix4(r.matrixWorld).sub(e),n=Math.max(n,fe.dot(t))}return n}c?.apply(_,`environment`);let _e=dh(f.colliders.find(e=>e.id===`cottage`&&e.type===`box`));_e&&_.add(_e.object);for(let e of Object.values(ee))e.visible=!1,t.add(e),c?.apply(e,`prop`);let ve=await Fm({environment:_,collider:f.colliders.find(e=>e.id===`pond`),renderer:e,scene:t,groundHeight:D,mobileGraphics:u,atlasURL:i+`fx/textures/cartoon-splash-v14.png`}),ye=[`Hips`,`Head`,`LHand`,`RHand`,`LFoot`,`RFoot`].map(e=>r.getObjectByName(e)),be=ye.map(()=>new G);function xe(){return n.updateMatrixWorld(!0),ye.forEach((e,t)=>{e.getWorldPosition(be[t]),be[t].y=U.clamp(be[t].y-ve.info.height,-.035,.12)}),be}let Se=_m(v),Ce=r.getObjectByName(o.socket.mouth);if(!Ce)throw Error(`角色缺少嘴部发射挂点`);let we=`stage`,Te=r,Ee,De,Oe=null,ke=!1,B=new nl,Ae=new G,je=new G,Me=new G;function V(e){for(let t=e.object;t&&t!==_;t=t.parent)if(!t.visible||t.userData.combatDecoration)return!1;return!0}function Ne(e,t,n){Me.subVectors(t,e);let r=Me.length();if(r<1e-8)return null;B.set(e,Me.normalize()),B.near=0,B.far=r;let i=B.intersectObjects(n,!0).find(e=>{let t=e.object.userData.gardenFruit;return V(e)&&(!t||re.isHanging(t))}),a=we===`garden`?De?.intersect(B):null;return a&&(!i||a.distance<i.distance)?a:i??null}function Pe(e){return e.face.normal.clone().applyMatrix3(new Rt().getNormalMatrix(e.object.matrixWorld)).normalize()}function Fe(e,t){_.updateWorldMatrix(!0,!0);let n=Ne(e,t,[_]);if(!n)return null;let r=Pe(n);r.dot(Me)>0&&r.negate();let i=n.object.userData.visitorId??n.object.userData.waterTarget??null,a=n.object.material.name===`Heightfield cartoon pond`?`water`:i?`target`:r.y>.55?`ground`:`surface`;return{point:n.point,normal:r,kind:a,targetId:i,attachment:i?n.object.parent:null}}function Ie(e,n,r){t.updateMatrixWorld(!0);let i=we===`garden`?[_,...s.slice(1)]:s;Ae.copy(e);for(let t=1;t<=45;t++){let a=t*.02;je.copy(e).addScaledVector(n,a),je.y-=.5*r*a*a;let o=Ne(Ae,je,i);if(o){let{visitorId:e,waterTarget:n,fruitTree:r,gardenFruit:i}=o.object.userData,a=r??re.treeAt(i),s=e??n??(re.aimPoint(a)?a:null);return{time:(t-1)*.02+.02*o.distance/Ae.distanceTo(je),point:o.point,normal:Pe(o),targetId:s}}Ae.copy(je)}let a=we===`garden`?0:-.035,o=(n.y+Math.sqrt(n.y**2+2*r*Math.max(0,e.y-a)))/r,c=e.clone().addScaledVector(n,o);return c.y=a,{time:o,point:c,normal:new G(0,1,0)}}let Le=new Map(o.clips.map(e=>[e.name,e])),Re=Le.get(`Eat`),ze=(e,t)=>Re.events.find(t=>t.event===e)?.time??t,Be=ze(`food_consume`,.7),Ve=ze(`satisfied`,2.02),He=new Pn;He.name=`Eating crumbs and satisfied hearts`,t.add(He),He.visible=!1;let Ue=new as(.009,0),We=new bi({color:`#f5d29a`,transparent:!0,depthWrite:!1,toneMapped:!1}),Ge=Array.from({length:3},()=>{let e=new q(Ue,We);return He.add(e),e}),Ke=l?Array.from({length:2},()=>{let e=new pi(new $r({map:l,transparent:!0,depthWrite:!1,toneMapped:!1}));return He.add(e),e}):[],qe=r.getObjectByName(`Head`),Je=new G,Ye=new G,Xe=new G,Ze=null,Qe=Le.get(`WaterShoot`),$e=pm({scene:t,resolveImpact:Ie,start:Qe.events.find(e=>e.event===`water_start`).time,stop:Qe.events.find(e=>e.event===`water_stop`).time,actionDuration:Qe.duration,speed:mm,gravity:20}),et=new G,tt=new G,nt=new Ft,H=new G;function rt(e,t,{delta:r=0,paused:i=!1}={}){if(we===`garden`&&!i&&re.update(r),n.updateMatrixWorld(!0),Ce.getWorldPosition(et),Ce.getWorldQuaternion(nt),tt.set(0,0,1).applyQuaternion(nt).normalize(),Oe&&tt.copy(gm(et,Oe.point).direction),z.visible=e===`Eat`&&t<Be,e===`Eat`&&t>=Be&&(I&&=(re.finish(I,!0),null),L&&=(R=(R+1)%ne.length,!1)),z.visible){let e=Le.get(`Eat`).events.find(e=>e.event===`food_attach`).time,r=se,i=ge(et,tt),a=oe.z*.5*r,o=.004;F?pe.copy(F):pe.set(0,.12,.65).applyQuaternion(n.quaternion).add(n.position),me.copy(et).addScaledVector(tt,i+a+o),z.position.copy(pe).lerp(me,U.smoothstep(t,0,e));let s=he.subVectors(z.position,et).dot(tt);s<i+a+o&&z.position.addScaledVector(tt,i+a+o-s),z.quaternion.copy(nt),z.scale.setScalar(r),z.position.sub(he.copy(ae).multiplyScalar(r).applyQuaternion(nt)),z.updateMatrixWorld(!0)}if(He.visible=e===`Eat`,Ze=e===`Eat`?t<.34?`approach`:t<Be?`bite`:t<1.67?`chew`:t<Ve?`swallow`:`satisfied`:null,Ge.forEach(e=>e.visible=!1),Ke.forEach(e=>e.visible=!1),e===`Eat`){let e=t-Be;e>=0&&e<.3&&(Ye.copy(et).addScaledVector(tt,ge(et,tt)+.015),Ge.forEach((t,n)=>{Xe.set((n-1)*.16,.22+n*.045,.1).applyQuaternion(nt),t.position.copy(Ye).addScaledVector(Xe,e),t.position.y-=2*e*e,t.rotation.set(e*8+n,e*5,e*9),t.scale.setScalar(1-e/.3),t.visible=!0}),We.opacity=1-e/.3),qe.getWorldPosition(Je),Ke.forEach((e,r)=>{let i=t-Ve-r*.13;if(i<0||i>.42)return;let a=new G(r?-.13:.12,.35+i*.2,.02).applyQuaternion(n.quaternion);e.position.copy(Je).add(a),e.scale.setScalar(.075*Math.min(1,i/.07)),e.material.opacity=1-U.smoothstep(i,.22,.42),e.visible=!0})}e===`WaterShoot`?$e.update(t,et,tt,nt):$e.updateTail(i?0:r);let a=$e.debug();if(Oe&&!ke&&a.active&&a.time>=a.firstImpact){ke=!0;let e=new G().fromArray(a.impactPoint),t=ve.info;we===`garden`&&((e.x-t.center[0])/t.radii[0])**2+((e.z-t.center[1])/t.radii[1])**2<1&&Math.abs(e.y-t.height)<.06&&ve.ripple(e,1),d({shotId:Oe.id,targetId:a.targetId,point:e,time:a.time,direction:a.launchDirection})}Se.update(i?0:r)}function it(e,{completed:t=!1,gameShot:r=null}={}){e!==`Eat`&&ue(),He.visible=!1,z.visible=!1,Ze=null,e===`WaterShoot`?(Oe=r,ke=!1,n.updateMatrixWorld(!0),Ce.getWorldPosition(et),Ce.getWorldQuaternion(nt),tt.set(0,0,1).applyQuaternion(nt).normalize(),we===`stage`&&(H.copy(et).addScaledVector(tt.setY(0).normalize(),1.95),H.y=-.035,tt.copy(gm(et,H).direction)),$e.begin(et,tt,{defer:!!r})):Ee===`WaterShoot`&&t?$e.finish():($e.cancel(),Oe=null,ke=!1),Ee=e}function at(e){we=e,_.visible=e===`garden`,$e.cancel(),ve.reset(),Oe=null,ue()}let ot={groups:m.scene.children.length,renderMeshes:0,vertexColorMeshes:0,proceduralWaterMeshes:0,targets:g.length,colliders:f.colliders.length};m.scene.traverse(e=>{e.isMesh&&!e.userData.basketFruit&&(ot.renderMeshes++,e.geometry.attributes.color?ot.vertexColorMeshes++:e.material.isShaderMaterial&&ot.proceduralWaterMeshes++)});function st(e){let t=v.find(t=>t.id===e);return t?t.object.localToWorld(new G().fromArray(t.hit.center).add(new G(0,0,.09))):De?.targetPoint(e)??re.aimPoint(e)}function ct(e,t,n){let r=v.find(t=>t.id===e);if(!r&&!De?.targetPoint(e))return null;let i=t.clone().add(new G(0,.43,0)),a=new G(n.z,0,-n.x),o=new nl(i,n,0,.82);r?.object.updateWorldMatrix(!0,!0);let s;for(let t of[0,-.15,.15]){o.ray.origin.copy(i).addScaledVector(a,t);let n=r?o.intersectObject(r.object,!0).find(V):De.intersect(o,e);n&&(!s||n.distance<s.distance)&&(s=n)}return s?.point??De?.boundaryPoint(e,t)??null}let lt=new nl,ut=new G;function dt(e,{radiusPerMeter:t=0}={}){let n=e.intersectObject(_,!0).find(V),r=De?.intersect(e);if(r&&(!n||r.distance<n.distance)){let e=r.object.userData.visitorId;return{point:st(e),targetId:e,visitor:!0,distance:r.distance}}let i=n&&w.includes(n.object);if(t&&(!n||i)){let n=re.nearbyFruit(e.ray,{radiusPerMeter:t,isVisible(t,n,r){ut.subVectors(t,e.ray.origin),lt.far=ut.length()+.02,lt.set(e.ray.origin,ut.normalize());let i=lt.intersectObjects([_,Te],!0).find(V)?.object.userData;return i?.gardenFruit===n||r&&i?.fruitTree===r}});if(n)return n}else if(i){let t=re.nearbyFruit(e.ray,{maxDistance:n.distance+.1});if(t)return t}if(!n)return null;let{aimTarget:a,fruitTree:o,gardenFruit:s}=n.object.userData,c=re.groundFruit(s),l=re.isHanging(s),u=re.aimPoint(o),d=!1;for(let e=n.object;e;e=e.parent)e===N&&(d=!0);return{point:a?st(a):l?re.point(s):u??n.point,targetId:a??(l?re.treeAt(s):u?o:null),fruit:c,basket:d,distance:n.distance}}function ft(){if(!z.visible)return{visible:!1};let e=1/0;z.traverse(t=>{if(t.isMesh){let n=t.geometry.attributes.position;for(let r=0;r<n.count;r++)fe.fromBufferAttribute(n,r).applyMatrix4(t.matrixWorld).sub(et),e=Math.min(e,fe.dot(tt))}});let t=ge(et,tt);return{visible:!0,separation:e-t,scale:z.scale.x,position:z.position.toArray()}}return{layout:f,stats:ot,bounds:y,fitPoints:S,extraColliders:M,groundHeight:D,hitGround:E,footprintSurface:j,meadow:O,windChime:_e,pondWater:ve,swimContacts:xe,setVisitors(e){De=e},visitorName:e=>De?.targetName(e),setPlayerModel(e){Te=e},pickAim:dt,targetPoint:st,tackleTargetContact:ct,traceGardenProjectile:Fe,targetFeedback:Se,foodContact:ft,basketInfo:P,beginGardenMeal:le,orchard:re,get foodType(){return ie},traceWater:(e,t)=>Ie(e,t.clone().multiplyScalar(mm),20),setView:at,get view(){return we},update:rt,onActionChange:it,debug:()=>({view:we,pond:ve.debug(),mouth:et.toArray(),direction:tt.toArray(),food:z.visible,eating:{phase:Ze,crumbs:He.visible?Ge.filter(e=>e.visible).length:0,hearts:He.visible?Ke.filter(e=>e.visible).length:0},orb:!1,water:$e.debug().stream,waterEffect:$e.debug()}),environment:_}}var mh=class{constructor(e,t={}){this.enabled=!0;let n=t.defaultThickness===void 0?.003:t.defaultThickness,r=new K().fromArray(t.defaultColor===void 0?[0,0,0]:t.defaultColor),i=t.defaultAlpha===void 0?1:t.defaultAlpha,a=t.defaultKeepAlive!==void 0&&t.defaultKeepAlive,o={},s={},c={},l={outlineThickness:{value:n},outlineColor:{value:r},outlineAlpha:{value:i}};function u(){return new Ss({type:`OutlineEffect`,uniforms:ys.merge([J.fog,J.displacementmap,l]),vertexShader:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
uniform float outlineThickness;
vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {
	float thickness = outlineThickness;
	const float ratio = 1.0;
	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );
	vec4 norm = normalize( pos - pos2 );
	return pos + norm * thickness * pos.w * ratio;
}
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	vec3 outlineNormal = - objectNormal;
	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragmentShader:`#include <common>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
uniform vec3 outlineColor;
uniform float outlineAlpha;
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( outlineColor, outlineAlpha );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,side:1})}function d(e){let t=o[e.uuid];return t===void 0&&(t={material:u(),used:!0,keepAlive:a,count:0},o[e.uuid]=t),t.used=!0,t.material}function f(e){let t=d(e);return s[t.uuid]=e,v(t,e),t}function p(e){let t=e.geometry,n=t!==void 0&&t.attributes.normal!==void 0;return e.isMesh===!0&&e.material!==void 0&&n===!0}function m(e){if(p(e)!==!1){if(Array.isArray(e.material))for(let t=0,n=e.material.length;t<n;t++)e.material[t]=f(e.material[t]);else e.material=f(e.material);c[e.uuid]=e.onBeforeRender,e.onBeforeRender=g}}function h(e){if(p(e)!==!1){if(Array.isArray(e.material))for(let t=0,n=e.material.length;t<n;t++)e.material[t]=s[e.material[t].uuid];else e.material=s[e.material.uuid];e.onBeforeRender=c[e.uuid]}}function g(e,t,n,r,i){let a=s[i.uuid];a!==void 0&&_(i,a)}function _(e,t){let n=t.userData.outlineParameters;e.uniforms.outlineAlpha.value=t.opacity,n!==void 0&&(n.thickness!==void 0&&(e.uniforms.outlineThickness.value=n.thickness),n.color!==void 0&&e.uniforms.outlineColor.value.fromArray(n.color),n.alpha!==void 0&&(e.uniforms.outlineAlpha.value=n.alpha)),t.displacementMap&&(e.uniforms.displacementMap.value=t.displacementMap,e.uniforms.displacementScale.value=t.displacementScale,e.uniforms.displacementBias.value=t.displacementBias)}function v(e,t){if(e.name===`invisible`)return;let n=t.userData.outlineParameters;e.fog=t.fog,e.toneMapped=t.toneMapped,e.premultipliedAlpha=t.premultipliedAlpha,e.displacementMap=t.displacementMap,n===void 0?(e.transparent=t.transparent,e.visible=t.visible):(e.visible=t.visible===!1?!1:n.visible===void 0||n.visible,e.transparent=n.alpha!==void 0&&n.alpha<1||t.transparent,n.keepAlive!==void 0&&(o[t.uuid].keepAlive=n.keepAlive)),(t.wireframe===!0||t.depthTest===!1)&&(e.visible=!1),t.clippingPlanes&&(e.clipping=!0,e.clippingPlanes=t.clippingPlanes,e.clipIntersection=t.clipIntersection,e.clipShadows=t.clipShadows),e.version=t.version}function y(){let e;e=Object.keys(s);for(let t=0,n=e.length;t<n;t++)s[e[t]]=void 0;e=Object.keys(c);for(let t=0,n=e.length;t<n;t++)c[e[t]]=void 0;e=Object.keys(o);for(let t=0,n=e.length;t<n;t++){let n=e[t];o[n].used===!1?(o[n].count++,o[n].keepAlive===!1&&o[n].count>60&&delete o[n]):(o[n].used=!1,o[n].count=0)}}this.render=function(t,n){if(this.enabled===!1){e.render(t,n);return}let r=e.autoClear;e.autoClear=this.autoClear,e.render(t,n),e.autoClear=r,this.renderOutline(t,n)},this.renderOutline=function(t,n){let r=e.autoClear,i=t.matrixWorldAutoUpdate,a=t.background,o=e.shadowMap.enabled;t.matrixWorldAutoUpdate=!1,t.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,t.traverse(m),e.render(t,n),t.traverse(h),y(),t.matrixWorldAutoUpdate=i,t.background=a,e.autoClear=r,e.shadowMap.enabled=o},this.setSize=function(t,n){e.setSize(t,n)}}},hh=`
vec3 getGradientIrradiance(vec3 normal,vec3 lightDirection){
  float light=dot(normal,lightDirection);
  float aa=max(fwidth(light)*0.65,0.008);
  vec3 shadow=vec3(0.34,0.46,0.65);
  vec3 midtone=vec3(0.68,0.77,0.88);
  vec3 sunlight=vec3(1.0,0.98,0.93);
  vec3 color=mix(shadow,midtone,smoothstep(-0.12-aa,-0.12+aa,light));
  return mix(color,sunlight,smoothstep(0.48-aa,0.48+aa,light));
}`;function gh({renderer:e,scene:t,ambient:n,key:r,fill:i,mobileGraphics:a=!1}){let o=new K(`#294653`).toArray(),s=new K(`#49644e`).toArray(),c=a?1.5:1,l=.0018*c,u=new mh(e,{defaultThickness:l,defaultColor:o,defaultKeepAlive:!0}),d=new Map,f=0,p=0;e.toneMapping=0,e.toneMappingExposure=1,e.shadowMap.type=1;function m(e,t,n){let r=`${t}:${n}:${e.uuid}`;if(d.has(r))return d.get(r);let i=t===`character`&&/eye/i.test(e.name),a=/pond water|water ripple|window soft reflection/i.test(e.name),u={name:e.name,color:e.color?.clone()??new K(`white`),map:e.map??null,vertexColors:e.vertexColors,side:e.side,transparent:e.transparent,opacity:e.opacity,alphaTest:e.alphaTest,depthWrite:e.depthWrite},m=a?new bi(u):new Es(u);m.userData={...e.userData,style:`anime-cel-v06`},a||(m.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <gradientmap_pars_fragment>`,hh)},m.customProgramCacheKey=()=>`mudkip-anime-cel-v06`);let h=/terrain|earth warm|grass|water|ripple|glass|reflection|flower/i.test(e.name),g=n&&t!==`stage`&&!h&&!i,_=/foliage|forest|pine/i.test(e.name)?.001:65e-5;return m.userData.outlineParameters={visible:g,thickness:t===`character`?l:_*c,color:t===`character`?o:s,keepAlive:!0},d.set(r,m),f++,g&&p++,m}function h(e,t=`environment`,{outlineMesh:n}={}){e.traverse(e=>{if(!e.isMesh||e.userData.combatDecoration)return;let r=n?.(e)??!0;e.material=Array.isArray(e.material)?e.material.map(e=>m(e,t,r)):m(e.material,t,r)})}function g(){t.traverse(e=>{if(e.material)for(let t of[].concat(e.material))t.userData.outlineParameters||(t.userData.outlineParameters={visible:!1})})}function _(e){let a=e===`garden`;t.background.set(a?`#e9efdd`:`#f2f3e4`),t.fog.color.copy(t.background),n.color.set(`#d4e4f6`),n.groundColor.set(`#c5ceaa`),n.intensity=.95,r.color.set(`#fff8f0`),r.intensity=2.2,r.position.set(a?-6:-3,a?12:5,a?8:4),r.shadow.radius=2,i.color.set(`#a8c7ef`),i.intensity=.13}return _(`stage`),{apply:h,excludeUnstyled:g,setView:_,renderFrame:e=>u.render(t,e),debug:()=>({name:`anime-cel-v06`,bands:3,materials:f,outlinedMaterials:p,characterOutline:l,physicalSpecular:!1})}}var _h=1e-9,vh=e=>Array.isArray(e)?{x:e[0],z:e[1]}:{x:e.x,z:e.z},yh=(e,t)=>Math.hypot(e.x-t.x,e.z-t.z),bh=(e,t,n,r)=>e*r-t*n;function xh(e,t,n){let r=n.x-t.x,i=n.z-t.z,a=r*r+i*i,o=a?Math.max(0,Math.min(1,((e.x-t.x)*r+(e.z-t.z)*i)/a)):0;return(e.x-t.x-r*o)**2+(e.z-t.z-i*o)**2}function Sh(e,t,n,r){let i=t.x-e.x,a=t.z-e.z,o=r.x-n.x,s=r.z-n.z,c=bh(i,a,o,s);if(Math.abs(c)>_h){let t=bh(n.x-e.x,n.z-e.z,o,s)/c,r=bh(n.x-e.x,n.z-e.z,i,a)/c;if(t>=0&&t<=1&&r>=0&&r<=1)return 0}return Math.min(xh(e,n,r),xh(t,n,r),xh(n,e,t),xh(r,e,t))}function Ch(e,t){let n=!1,r=!1;for(let i=0;i<t.length;i++){let a=t[i],o=t[(i+1)%t.length],s=bh(o.x-a.x,o.z-a.z,e.x-a.x,e.z-a.z);if(n||=s>_h,r||=s<-1e-9,n&&r)return!1}return!0}var wh=class{values=[];push(e,t){let n={id:e,score:t},r=this.values,i=r.length;for(r.push(n);i;){let e=i-1>>1;if(r[e].score<=t)break;r[i]=r[e],i=e}r[i]=n}pop(){let e=this.values,t=e[0],n=e.pop();if(e.length){let t=0;for(;t*2+1<e.length;){let r=t*2+1;if(r+1<e.length&&e[r+1].score<e[r].score&&r++,e[r].score>=n.score)break;e[t]=e[r],t=r}e[t]=n}return t}};function Th(e,t,n,r){let i=t+n+(e.id===`pond`?r:0);if(e.type===`circle`)return{id:e.id,center:vh(e.center),radius:e.radius+i};if(e.type===`capsule`)return{id:e.id,start:vh(e.start),end:vh(e.end),radius:e.radius+i};let a;if(e.type===`box`){let[t,,n]=e.min,[r,,i]=e.max;a=[{x:t,z:n},{x:r,z:n},{x:r,z:i},{x:t,z:i}]}else if(e.type===`ellipse`){let t=1/Math.cos(Math.PI/48),n=vh(e.center);a=Array.from({length:48},(r,i)=>({x:n.x+e.radii[0]*t*Math.cos(i*Math.PI*2/48),z:n.z+e.radii[1]*t*Math.sin(i*Math.PI*2/48)}))}else throw Error(`Unsupported garden collider: ${e.type}`);return{id:e.id,polygon:a,padding:i,minX:Math.min(...a.map(e=>e.x))-i,maxX:Math.max(...a.map(e=>e.x))+i,minZ:Math.min(...a.map(e=>e.z))-i,maxZ:Math.max(...a.map(e=>e.z))+i}}function Eh(e,{extraColliders:t=[],...n}={}){let r={actorRadius:.4,skin:.04,cellSize:.16,pondShore:.12,...e.navigation,...n},i=r.actorRadius,a=r.skin,o={minX:e.walkableBounds.min[0]+i+a,maxX:e.walkableBounds.max[0]-i-a,minZ:e.walkableBounds.min[1]+i+a,maxZ:e.walkableBounds.max[1]-i-a},s=(e.targets??[]).map(e=>({id:`target-${e.id}`,type:`circle`,center:[e.position[0],e.position[2]],radius:Math.max(.18,e.hit.radius)})),c=[...e.colliders,...s,...t].map(e=>Th(e,i,a,r.pondShore)),l=c.length,u=0;function d(e,t){return e.x>=o.minX+t-_h&&e.x<=o.maxX-t+_h&&e.z>=o.minZ+t-_h&&e.z<=o.maxZ-t+_h}function f(e,t,n=0,r=null){let i=vh(e),a=vh(t);if(![i.x,i.z,a.x,a.z].every(Number.isFinite)||!d(i,n))return`boundary`;for(let e of c){if(e.id===r)continue;if(e.center){if(xh(e.center,i,a)<(e.radius+n)**2-_h)return e.id;continue}if(e.start){if(Sh(i,a,e.start,e.end)<(e.radius+n)**2-_h)return e.id;continue}if(Math.max(i.x,a.x)<e.minX-n||Math.min(i.x,a.x)>e.maxX+n||Math.max(i.z,a.z)<e.minZ-n||Math.min(i.z,a.z)>e.maxZ+n)continue;let t=e.polygon;if(Ch(i,t)||Ch(a,t))return e.id;for(let r=0;r<t.length;r++)if(Sh(i,a,t[r],t[(r+1)%t.length])<(e.padding+n)**2-_h)return e.id}return d(a,n)?null:`boundary`}let p=(e,t)=>f(e,t)===null,m=e=>p(e,e);function h(e,t,n=0,r=null){let i=vh(e),a=vh(t),o=f(i,a,n,r);if(o===null)return{position:a,blockedBy:o};let s=0,c=1;for(let e=0;e<16;e++){let e=(s+c)*.5,t=f(i,{x:i.x+(a.x-i.x)*e,z:i.z+(a.z-i.z)*e},n,r);t===null?s=e:(c=e,o=t)}return{position:{x:i.x+(a.x-i.x)*s,z:i.z+(a.z-i.z)*s},blockedBy:o}}let g=Math.ceil((o.maxX-o.minX)/r.cellSize)+1,_=Math.ceil((o.maxZ-o.minZ)/r.cellSize)+1,v=(o.maxX-o.minX)/(g-1),y=(o.maxZ-o.minZ)/(_-1),b=Array.from({length:g*_},(e,t)=>({x:o.minX+t%g*v,z:o.minZ+Math.floor(t/g)*y})),x=Uint8Array.from(b,e=>Number(m(e)));function S(e){c.splice(l,c.length-l,...e.map(e=>Th(e,i,a,r.pondShore)));for(let e=0;e<b.length;e++)x[e]=Number(m(b[e]));u++}function C(e,t){let n=-1,r=1/0;for(let i=0;i<b.length;i++)if(x[i]){let a=yh(e,b[i]);a<r&&(!t||p(e,b[i]))&&(n=i,r=a)}return n}function w(e,t){let n=vh(e),r=vh(t),i=e=>({ok:!1,reason:e,requested:r,goal:n,waypoints:[],length:0,adjusted:!0,visited:0});if(![n.x,n.z,r.x,r.z].every(Number.isFinite))return i(`invalid`);if(!m(n))return i(`invalid-start`);if(yh(n,r)<.012)return{ok:!0,reason:`arrived`,requested:r,goal:n,waypoints:[],length:0,adjusted:!1,visited:0};if(p(n,r))return{ok:!0,reason:`direct`,requested:r,goal:r,waypoints:[r],length:yh(n,r),adjusted:!1,visited:0};let a=C(n,!0),o=C(r,m(r));if(a<0||o<0)return i(`unreachable`);let s=new wh,c=new Float64Array(b.length).fill(1/0),l=new Int32Array(b.length).fill(-1),u=new Uint8Array(b.length);c[a]=0,s.push(a,yh(b[a],r));let d=a,f=yh(b[a],r),h=0,S=!1;for(;s.values.length;){let{id:e}=s.pop();if(u[e])continue;u[e]=1,h++;let t=yh(b[e],r);if(t<f&&(d=e,f=t),e===o){d=e,S=!0;break}let n=e%g,i=Math.floor(e/g);for(let t=-1;t<=1;t++)for(let a=-1;a<=1;a++){if(!a&&!t||n+a<0||n+a>=g||i+t<0||i+t>=_)continue;let o=(i+t)*g+n+a;if(!x[o]||u[o])continue;let d=c[e]+Math.hypot(a*v,t*y);d>=c[o]||!p(b[e],b[o])||(c[o]=d,l[o]=e,s.push(o,d+yh(b[o],r)))}}let w=[];for(let e=d;e>=0;e=l[e])w.push(b[e]);w.reverse(),w.unshift(n),S&&m(r)&&p(b[d],r)&&w.push(r);let T=[],E=0;for(;E<w.length-1;){let e=w.length-1;for(;e>E+1&&!p(w[E],w[e]);)e--;yh(w[E],w[e])>.001&&T.push({...w[e]}),E=e}let D=T.at(-1)??n;if(yh(D,n)<.02)return i(`unreachable`);let O=0,k=n;for(let e of T)O+=yh(k,e),k=e;return{ok:!0,reason:yh(D,r)>.04?`nearby`:`detour`,requested:r,goal:{...D},waypoints:T,length:O,adjusted:yh(D,r)>.04,visited:h}}return{isWalkable:m,segmentClear:p,sweep:h,plan:w,settings:r,bounds:o,setVisitorColliders:S,canFitVisitor:(e,t,n)=>f(e,e,t-i,n)===null,sweepVisitor:(e,t,n,r)=>h(e,t,n-i,r),get revision(){return u},debug:()=>({radius:i,skin:a,obstacles:c.length,columns:g,rows:_,freeCells:x.reduce((e,t)=>e+t,0)})}}function Dh(e){let t=null,n=0,r=!1,i=e.revision;return{start(a,o){return t=e.plan(a,o),n=0,r=t.ok&&t.waypoints.length>0,i=e.revision,t},cancel(){r=!1},get active(){return r},get waypoint(){return r?t.waypoints[n]:null},remainingDistance(e){if(!r)return 0;let i=0,a=vh(e);for(let e=n;e<t.waypoints.length;e++)i+=yh(a,t.waypoints[e]),a=t.waypoints[e];return i},advance(a,o){let s=vh(a),c=0;if(r&&i!==e.revision){let e=t;if(this.start(a,e.goal),!t.ok)return{position:s,travelled:c,blocked:!0,finished:!1}}for(;r&&o>_h;){let i=t.waypoints[n],a=yh(s,i);if(a<_h){n++,r=n<t.waypoints.length;continue}let l=Math.min(a,o),u={x:s.x+(i.x-s.x)*l/a,z:s.z+(i.z-s.z)*l/a};if(!e.segmentClear(s,u))return r=!1,{position:s,travelled:c,blocked:!0,finished:!1};s.x=u.x,s.z=u.z,c+=l,o-=l,l>=a-_h&&(n++,r=n<t.waypoints.length)}return{position:s,travelled:c,blocked:!1,finished:!r}},debug:()=>({active:r,index:n,plan:t})}}function Oh(e){let t=new Pn;t.name=`Destination marker`,t.visible=!1,e.add(t);let n=new Pn;n.rotation.x=-Math.PI/2,t.add(n);let r=(e,t=1)=>{let n=new bi({color:e,transparent:!0,opacity:t,depthWrite:!1,depthTest:!1,side:2,toneMapped:!1,fog:!1});return n.userData.outlineParameters={visible:!1},n},i=r(`#3BBA92`),a=r(`#FFFFEF`),o=r(`#6AD5AE`,.12),s=r(`#FFFFEF`,.7),c=new q(new Ra(.98,64),o),l=new q(new cs(.66,1.12,64),a),u=new q(new cs(.74,1.02,64),i),d=new q(new Ra(.13,24),i),f=new q(new cs(.98,1.045,64),s);n.add(c,l,u,d,f),[c,l,u,d,f].forEach((e,t)=>{e.renderOrder=20+t,e.position.z=t*.001});let p=0,m=`idle`,h=0,g=0,_=new G,v=new G,y=e=>1-(1-e)**3;return{show(e){t.position.copy(e),p=0,m=`spawn`,t.visible=!0},hide(){t.visible=!1,m=`idle`},arrive(){t.visible&&(m=`arrive`,p=0)},update(e,r,c){if(!t.visible)return;if(p+=e,m===`arrive`&&p>=.28){t.visible=!1,m=`idle`;return}m===`spawn`&&p>.24&&(m=`hold`),r.updateMatrixWorld();let l=-_.copy(t.position).applyMatrix4(r.matrixWorldInverse).z,u=2*Math.tan(U.degToRad(r.fov/2))*l/c,d=.6+.4*y(Math.min(1,p/.18)),b=1+.045*Math.sin(p*Math.PI*2*1.1),x=m===`arrive`?Math.min(1,p/.28):0,S=m===`arrive`?1-.25*x:m===`spawn`?d:b;h=18*u,t.scale.setScalar(h*S),i.opacity=a.opacity=1-x,o.opacity=.12*(1-x),f.visible=m!==`arrive`&&p<.5,f.scale.setScalar(1+y(Math.min(1,p/.5))*.9),s.opacity=.65*(1-Math.min(1,p/.5))**2,t.updateMatrixWorld(!0);let C=1/0,w=-1/0;for(let e=0;e<12;e++){let t=e*Math.PI/6;v.set(Math.cos(t)*1.12,Math.sin(t)*1.12,0).applyMatrix4(n.matrixWorld).project(r);let i=(v.x+1)*r.aspect*c/2;C=Math.min(C,i),w=Math.max(w,i)}g=w-C},debug:()=>({visible:t.visible,phase:m,age:p,worldRadius:h,nominalDiameterPixels:36,pixelWidth:g,position:t.position.toArray()}),dispose(){e.remove(t),n.children.forEach(e=>e.geometry.dispose()),new Set([i,a,o,s]).forEach(e=>e.dispose())}}}var kh={normal:`普通靶`,moving:`滑轨靶`,heavy:`重型靶`};function Ah({actor:e,model:t,preview:n,onShoot:r,onStop:i,onMessage:a,onHit:o}){let s=`move`,c=`idle`,l=null,u=null,d=0,f=null,p=null,m=0,h=t.getObjectByName(`Head`),g=t.getObjectByName(`Socket_Mouth`),_=h.quaternion.clone(),v=!1;function y(){v&&=(h.quaternion.copy(_),!1)}let b=new G,x=new Ft,S=new Ft,C=new Ft,w=new Ft,T=new G(1/0,1/0,1/0),E=new G(1/0,1/0,1/0),D=new G(0,1,0),O=new G,k=e=>n.visitorName?.(e)??n.orchard?.treeName(e)??kh[e];function A(){(u?.startsWith(`visitor:`)||n.orchard?.treeName(u))&&!n.targetPoint(u)&&(y(),l=null,u=null,p=null,c=`idle`)}function j(){if(m=0,!l){p=null;return}e.updateMatrixWorld(!0),g.getWorldPosition(b),T.copy(b),E.copy(l);let t=gm(b,l),r=n.traceWater(b,t.direction),i=u?r.targetId===u:r.point.distanceTo(l)<.35;p={reachable:t.reachable,clear:i,range:t.range,angle:t.angle,contact:r.point.toArray(),blocked:!!u&&t.reachable&&!i}}return{setMode(e){e!==s&&(y(),i(),s=e,c=`idle`,e===`move`&&(l=null,u=null,p=null),a(e===`aim`?`点按水枪喷水，拖动技能键可自由瞄准。`:`点草地移动，点按右下角水枪喷水。`))},aimAt(e,t=null,{predict:r=!0,silent:i=!1}={}){if(c!==`idle`||!e)return!1;if(s!==`aim`&&this.setMode(`aim`),l=e.clone(),u=t,r&&j(),!i){let e=n.orchard?.treeName(t);e&&r&&!p.reachable?a(`${e}离得有点远，走近些再瞄准。`):a(t?`已锁定${k(t)}，点按水枪发射。`:`松开水枪技能键发射。`)}return!0},fire(e=!1){return e||s!==`aim`||!l||c!==`idle`?!1:(c=`turning`,i(),a(`转过身，准备蓄水…`),!0)},cancel(){y(),c=`idle`,l=null,u=null,p=null,f=null},onActionChange(e,{completed:t=!1}={}){e!==`WaterShoot`&&c===`shooting`&&(c=`idle`,t||(f=null),A())},contact(e){if(e.shotId===d){if(f={...e,point:e.point.toArray()},e.targetId){let t=o(e.targetId,e.direction);a(typeof t==`string`?t:`命中${k(e.targetId)}！`),c===`idle`&&A()}else a(`水花落下了，再调整一下准星。`)}},update(t){if(m+=t,c!==`shooting`&&u?.startsWith(`visitor:`)){let e=n.targetPoint(u);e?l.copy(e):A()}if(l&&s===`aim`&&c!==`shooting`){let n=l.x-e.position.x,i=l.z-e.position.z;x.setFromAxisAngle(D,Math.atan2(n,i)),e.quaternion.rotateTowards(x,8*t),c===`turning`&&e.quaternion.angleTo(x)<.035&&(c=`shooting`,d++,f=null,r(l.clone(),d),a(`闭嘴蓄水…`))}},pose(){if(y(),!l||s!==`aim`)return;_.copy(h.quaternion),e.updateMatrixWorld(!0),g.getWorldPosition(b);let t=gm(b,l);O.set(1,0,0).applyQuaternion(e.quaternion),w.setFromAxisAngle(O,-U.clamp(t.angle*.7,-.25,.4)),h.getWorldQuaternion(C),h.parent.getWorldQuaternion(S),h.quaternion.copy(S.invert().multiply(w).multiply(C)),v=!0,e.updateMatrixWorld(!0),g.getWorldPosition(b),m>=.12&&(b.distanceToSquared(T)>4e-4||l.distanceToSquared(E)>.0016||m>=.6)&&j()},restorePose:y,targetName:k,get point(){return l},get mode(){return s},debug:()=>({mode:s,phase:c,point:l?.toArray()??null,targetId:u,targetName:k(u)??`草地`,shot:d,lastContact:f,assessment:p})}}var{clamp:jh}=U;function Mh(e,t,n){let r=[[`LArm`,`LForeArm`,`LHand`],[`RArm`,`RForeArm`,`RHand`],[`LThigh`,`LLeg`,`LFoot`],[`RThigh`,`RLeg`,`RFoot`]].map((e,t)=>{let[r,i,a]=e.map(e=>n.getObjectByName(e));return{upper:r,lower:i,foot:a,front:t<2,length1:i.position.length(),length2:a.position.length(),target:new G,orientation:new Ft}}),[i,a,o,s]=[`Head`,`Feeler1`,`Tail1`,`Tail2`].map(e=>n.getObjectByName(e)),c=[i,a,o,s,...r.flatMap(({upper:e,lower:t,foot:n})=>[e,t,n])],l=c.map(()=>new Ft),u=new G,d=new gn,f=new G,p=new G,m=new G,h=new G,g=new G,_=new G,v=new G,y=new G,b=new G,x=new G,S=new Ft,C=new Ft,w=new Ft,T=!1;function E(e,t){e.parent.getWorldQuaternion(C),w.copy(C).invert().multiply(t).multiply(C),e.quaternion.premultiply(w)}function D({upper:t,lower:n,foot:r,front:i,length1:a,length2:o,target:s,orientation:c},l){t.getWorldPosition(f),r.getWorldPosition(m).lerp(s,l),h.subVectors(m,f);let u=h.length();if(u<1e-6)return;h.multiplyScalar(1/u);let d=jh(u,Math.abs(a-o)+.001,a+o-.001);g.set(0,0,i?-1:1).applyQuaternion(e.quaternion),g.addScaledVector(h,-g.dot(h)).normalize();let y=(a*a-o*o+d*d)/(2*d);p.copy(f).addScaledVector(h,y).addScaledVector(g,Math.sqrt(Math.max(0,a*a-y*y))),m.copy(f).addScaledVector(h,d),n.getWorldPosition(_).sub(f).normalize(),v.subVectors(p,f).normalize(),E(t,S.setFromUnitVectors(_,v)),n.getWorldPosition(p),r.getWorldPosition(_).sub(p).normalize(),v.subVectors(m,p).normalize(),E(n,S.setFromUnitVectors(_,v)),r.parent.getWorldQuaternion(C),r.quaternion.slerp(C.invert().multiply(c),l)}function O(){T&&=(t.position.copy(u),t.rotation.copy(d),c.forEach((e,t)=>e.quaternion.copy(l[t])),!1)}function k({height:n,pitch:f,headPitch:p,finPitch:m,tailPitch:h,lunge:g=0,bank:_=0,planted:v,paws:C,scoop:w}){if(T=!0,u.copy(t.position),d.copy(t.rotation),c.forEach((e,t)=>l[t].copy(e.quaternion)),v>0){b.set(0,0,g).applyQuaternion(e.quaternion);for(let e of r)e.foot.getWorldPosition(e.target).add(b),e.foot.getWorldQuaternion(e.orientation)}if(t.position.y+=n,t.position.z+=g,t.rotation.x+=f,t.rotation.z+=_,y.set(1,0,0).applyQuaternion(e.quaternion),E(i,S.setFromAxisAngle(y,p)),E(a,S.setFromAxisAngle(y,m)),E(o,S.setFromAxisAngle(y,h)),E(s,S.setFromAxisAngle(y,h*.52)),v>0)for(let t of r)w&&t.foot.name===`RHand`?(b.set(-w.side,w.lift,w.reach).applyQuaternion(e.quaternion),t.target.add(b),D(t,1)):D(t,v);else if(C){x.set(0,0,1).applyQuaternion(e.quaternion);for(let e of r){let t=e.front?C.frontReach:C.rearReach;e.foot.getWorldPosition(e.target).addScaledVector(x,t),e.target.y+=e.front?C.frontLift:C.rearLift,e.foot.getWorldQuaternion(e.orientation),D(e,1)}}}return{apply:k,restore:O}}var Nh=.18,Ph=.34,Fh=2,Ih=.045,Lh=.28,{clamp:Rh,lerp:zh,smoothstep:Bh}=U;function Vh({actor:e,pivot:t,model:n,navigation:r,groundHeight:i,targetContact:a,effects:o,onPhase:s,onHit:c}){let l=Mh(e,t,n),u=new G(0,1,0),d=new G,f=new Ft,p=new Ft,m=new G,h=new G,g=new G,_=new G,v=new G,y=`idle`,b=0,x=0,S=0,C=0,w=null,T=null,E=null,D=0,O=0,k=()=>Rh(b/x,0,1);function A(){if(y!==`dash`)return 0;let e=k();return 4*e*(1-e)*C}function j(e){y=e,b=0,s(e,E,T)}function M(t){return y!==`idle`||!r.isWalkable(e.position)?!1:(d.set(0,0,1).applyQuaternion(e.quaternion),t&&Math.hypot(t.x-e.position.x,t.z-e.position.z)>.01&&d.subVectors(t,e.position),d.setY(0).normalize(),p.copy(e.quaternion),f.setFromAxisAngle(u,Math.atan2(d.x,d.z)),w=T=E=null,D=S=C=O=0,j(`windup`),!0)}function N(t,n){let r=i(t,n);e.position.set(t,(r??e.position.y-.005)+.005,n)}function P(){let e=w?.startsWith(`target-`)?w.slice(7):w?.startsWith(`visitor:`)?w:null,t=e?a(e,h,d):null;T=t?e:null,D=0,t&&(_.copy(t),D=Rh((_.x-h.x)*d.x+(_.z-h.z)*d.z-.48,0,.28))}function F(){m.copy(e.position),h.copy(m).addScaledVector(d,Fh);let t=r.sweep(m,h);h.set(t.position.x,i(t.position.x,t.position.z)??m.y,t.position.z),w=t.blockedBy,S=Math.hypot(h.x-m.x,h.z-m.z),P();let n=Rh(S/Fh,0,1),a=T!==null||w===null;x=Ph*(a?zh(.6,1,Math.sqrt(n)):Rh(n,.28,1)),C=a?zh(.155,.28,Math.sqrt(n)):.24*Bh(S,.05,1.8),v.copy(m).addScaledVector(d,-.19),v.y=m.y+.028,o.dust(v,d,`launch`),j(`dash`)}function I(){T?.startsWith(`visitor:`)&&!a(T,e.position,d)&&(w=T=null),T?(E=`hit`,o.hit(_,d),c(T,d,Ih),j(`hitstop`)):(E=w?`blocked`:`miss`,L())}function L(){v.copy(e.position).addScaledVector(d,.21+D),v.y=e.position.y+.035,o.dust(v,d,E===`hit`?`landing`:E),h.copy(e.position);let t=g.copy(h).addScaledVector(d,E===`hit`?-.15:E===`blocked`?-.075:0),n=r.sweep(h,t);g.set(n.position.x,h.y,n.position.z),j(`recover`)}function R(t){if(!(y===`idle`||t<=0)){if(b+=t,y===`windup`)e.quaternion.slerpQuaternions(p,f,Bh(b,0,Nh)),b>=Nh&&F();else if(y===`dash`){let t=k(),n=.22,i=(t<n?t*t/(2*n):t-n/2)/(1-n/2),a=r.sweep(e.position,{x:zh(m.x,h.x,i),z:zh(m.z,h.z,i)});N(a.position.x,a.position.z),O=Math.hypot(e.position.x-m.x,e.position.z-m.z),a.blockedBy&&(w=a.blockedBy,h.copy(e.position),P()),(t>=1||a.blockedBy)&&I()}else if(y===`hitstop`)b>=Ih&&L();else{let e=Bh(b,0,.19);N(zh(h.x,g.x,e),zh(h.z,g.z,e)),b>=Lh&&j(`idle`)}}}function ee(){if(y!==`idle`){if(y===`windup`){let e=Bh(b,0,.145);l.apply({height:-.046*e,pitch:.145*e,headPitch:.15*e,finPitch:-.19*e,tailPitch:.28*e,lunge:0,planted:Bh(e,0,.42)})}else if(y===`dash`){let e=k(),t=Bh(e,0,.2),n=Bh(e,.36,.95),r=Rh(C/.17,0,1),i=Bh(e,.15,.4)*(1-Bh(e,.58,.89))*r,a=Bh(e,.58,.81)*(1-Bh(e,.9,1))*r,o=i+a>.001?{frontLift:.059*i,rearLift:.084*i,frontReach:.059*a-.044*i,rearReach:-.026*i-.019*a}:null;l.apply({height:A()-.046*(1-t)+.024*n,pitch:zh(zh(.145,-.15*r,t),.22,n),headPitch:zh(.15,-.12,t),finPitch:zh(-.19,-.32,t),tailPitch:zh(.28,-.22,t),lunge:D*Bh(e,.35,1),planted:1-Bh(e,0,.15),paws:o})}else if(y===`hitstop`)l.apply({height:.024,pitch:.22,headPitch:-.12,finPitch:-.32,tailPitch:-.22,lunge:D,planted:0});else{let e=Rh(b/Lh,0,1),t=1-Bh(e,.12,1),n=Math.sin(e*Math.PI*2)*t,r=Bh(e,0,.23);l.apply({height:zh(.024,-.018,r)*t,pitch:zh(.22,E===`miss`?.22:-.13,r)*t,headPitch:-.12*(1-r)+.12*n,finPitch:-.32*(1-r)+.34*n,tailPitch:-.22*(1-r)-.24*n,lunge:D*(1-Bh(e,0,.55)),planted:.84*r*t})}}}function te(){l.restore(),o.reset(),y=`idle`,b=O=0,w=T=E=null}return{start:M,update:R,applyPose:ee,restorePose:l.restore,reset:te,get active(){return y!==`idle`},get holding(){return y===`hitstop`},get dashing(){return y===`dash`},get direction(){return d},get flightHeight(){return A()},debug:()=>({phase:y,age:b,travel:O,flightHeight:A(),kind:E,blockedBy:w,hitId:T,contact:T?_.toArray():null})}}var Hh=.65,Uh=.9,Wh=1.25,Gh=1.8,Kh=5,qh=100,Jh=[.28,.44,.55],Yh=new G(0,1,0),Xh=[{time:.035,sound:`tackleGather`,rate:.82,volume:.72},...Jh.map((e,t)=>({time:e,sound:`ironPulse`,rate:.89+t*.11,volume:.73+t*.09})),{time:Hh,sound:`ironRush`}];function Zh({actor:e,navigation:t,groundHeight:n,targetContact:r,effects:i,onPhase:a,onHit:o}){let s=new G,c=new G,l=new G,u=new G,d=new Ft,f=new Ft,p=new Ft,m=`idle`,h=0,g=0,_=0,v=0,y=!1,b=null,x=null,S=0;function C(n){if(m!==`idle`||g>0||!t.isWalkable(e.position))return!1;e.getWorldDirection(c).setY(0).normalize(),n&&Math.hypot(n.x-e.position.x,n.z-e.position.z)>.02&&c.subVectors(n,e.position).setY(0).normalize();let r=Math.atan2(c.x,c.z);return d.copy(e.quaternion),f.setFromAxisAngle(Yh,r-Math.PI/2),p.setFromAxisAngle(Yh,r),s.copy(e.position),h=_=v=S=0,g=Kh,y=!1,b=x=null,m=`charge`,a(m),!0}function w(){let d=U.clamp((h-Hh)/.25,0,1),f=d*(.45+.55*(2-d)*d);l.copy(s).addScaledVector(c,f*Gh);let p=t.sweep(e.position,l),{x:m,z:g}=p.position;if(e.position.set(m,(n(m,g)??e.position.y-.005)+.005,g),v=Math.hypot(m-s.x,g-s.z),!p.blockedBy)return;x=p.blockedBy,y=!0;let C=x.startsWith(`visitor:`)?x:x.startsWith(`target-`)?x.slice(7):null,w=C?r(C,e.position,c):null;w?(b=C,S=U.clamp(l.subVectors(w,e.position).dot(c)-.3,0,.21),_=.055,i.hit(w,c),o(C,c,qh)):(i.dust(u.copy(e.position).addScaledVector(Yh,.025),c,`blocked`),a(`blocked`))}function T(t){if(g=Math.max(0,g-t),m===`idle`||t<=0)return;if(_>0){_=Math.max(0,_-t);return}let n=h;h=Math.min(Wh,h+t);for(let e=0;e<Jh.length;e++)n<Jh[e]&&h>=Jh[e]&&i.pulse(s,e);if(m===`charge`){if(e.quaternion.slerpQuaternions(d,f,U.smoothstep(h,0,.2)),h<Hh)return;m=`dash`,i.dust(u.copy(s).addScaledVector(Yh,.025),c,`launch`),a(m)}m===`dash`&&(y||w(),h>=Uh&&(m=`recover`,y||i.dust(u.copy(e.position).addScaledVector(Yh,.025),c,`miss`),!b&&!x&&a(`miss`))),m===`recover`&&(e.quaternion.slerpQuaternions(f,p,U.smoothstep(h,1,Wh)),h>=Wh&&(m=`idle`,a(m)))}return{start:C,update:T,cancel(){m=`idle`,_=S=0},get active(){return m!==`idle`},get dashing(){return m===`dash`&&!y},get direction(){return c},get time(){return h},get cooldown(){return g},get cooldownRatio(){return g/Kh},get ready(){return m===`idle`&&g<=0},get lunge(){return S*(1-U.smoothstep(h,.88,1.01))},debug:()=>({phase:m,time:h,cooldown:g,travel:v,hitId:b,blockedBy:x,damage:b?qh:0})}}var Qh=.27,$h=.625,eg=.98,tg=1.02,ng=1.57,rg=1.875,ig=2.375,ag=5,og=4.2,sg=10,cg=.079,lg=new G(0,1,0),ug=new G(0,.14,0),{clamp:dg,lerp:fg,smoothstep:pg}=U,mg=[{time:.895/2,sound:`ballBounce`,rate:.96,volume:.65},{time:1.605/2,sound:`ballBounce`,rate:1.08,volume:.61},{time:eg,sound:`ballCatch`,volume:.74},{time:rg,sound:`ballThrow`}];function hg(e){let t=new Pn;t.name=`Dawn basketball`;let n=new ds(cg,28,20),r=new q(n,new ws({color:`#f28837`,roughness:.82})),i=new bi({color:`#422b2b`,toneMapped:!1}),a=new q(n,new bi({color:`#422b2b`,side:1,toneMapped:!1}));a.scale.setScalar(1.045),t.add(r,a);for(let e of[e=>new G(0,Math.cos(e),Math.sin(e)),e=>new G(Math.cos(e),Math.sin(e),0),e=>{let t=.4*Math.sin(2*e);return new G(Math.cos(e)*Math.cos(t),Math.sin(t),Math.sin(e)*Math.cos(t))}]){let n=new Xa(Array.from({length:32},(t,n)=>e(n*Math.PI/16).multiplyScalar(cg)),!0);t.add(new q(new ps(n,48,.0018,4,!0),i))}return t.visible=!1,e.add(t),t}function gg({scene:e,actor:t,groundHeight:n,resolveTarget:r,trace:i,onPhase:a,onContact:o}){let s=hg(e),c=new G,l=new G,u=new Ft,d=new Ft,f=new G,p=new G,m=new G,h=new G,g=new G,_=new G,v=new G,y=new G,b=new G,x=new G,S=null,C=null,w=0,T=0,E=0,D=!1,O=!1,k=!1,A=!1,j=`idle`;function M(e,t,n=1){s.visible=!0,s.position.copy(e),s.rotation.set(.45+t,.55,-.28),s.scale.setScalar(n)}function N(e,n,r){let i=-2*Math.PI*pg(n,tg,ng);if(l.set(0,0,1).applyQuaternion(t.quaternion).applyAxisAngle(lg,i),e.getObjectByName(`HandR`).localToWorld(p.copy(ug)),e.getObjectByName(`HandL`).localToWorld(f.copy(ug)),m.copy(p).addScaledVector(l,.074),n>=Qh&&n<eg){let e=n>=$h,t=e?(n-$h)/.355:(n-Qh)/.355,i=pg(t,0,1);m.lerpVectors(p,f,e?1-i:i).addScaledVector(l,.074+.085*Math.sin(Math.PI*t));let a=r(m.x,m.z);m.y=fg(a+cg,m.y,1-(1-Math.abs(2*t-1))**2)}else if(n>=eg){let e=pg(n,eg,1.16)*(1-pg(n,1.64,rg));m.addScaledVector(l,.037*e+.02*pg(n,1.74,rg)),m.y+=.018*e+.031*pg(n,1.74,rg)}M(m,8*n,fg(.58,1,pg(n,0,.16)))}function P(e){j=e,a(j)}function F(e,n){return D||O||T>0?!1:(c.set(0,0,1).applyQuaternion(t.quaternion).setY(0),e&&Math.hypot(e.x-t.position.x,e.z-t.position.z)>.02&&c.subVectors(e,t.position).setY(0),c.normalize(),u.copy(t.quaternion),d.setFromAxisAngle(lg,Math.atan2(c.x,c.z)),S=n,C=null,w=E=0,D=!0,T=ag,P(`dribble`),!0)}let I=(e,r)=>n(e,r)??t.position.y-.005;function L(){h.copy(s.position),v.copy(h);let e=S?r(S):null;A=(e?Math.hypot(e.x-t.position.x,e.z-t.position.z):0)>og,e&&!A?g.copy(e):(g.copy(t.position).addScaledVector(c,og),g.y=I(g.x,g.z));let n=dg(.39+.095*Math.hypot(g.x-h.x,g.z-h.z),.43,.79);_.subVectors(g,h).divideScalar(n),_.y+=.5*sg*n,O=!0,P(`flight`)}function R(e){E+=e,y.copy(h).addScaledVector(_,E),y.y-=.5*sg*E**2;let t=i(v,y);!t&&E<1.05?(M(y,8*rg+14*E),v.copy(y)):(t??={kind:`miss`,targetId:null,point:y},b.copy(_),b.y-=sg*E,C={kind:t.kind,targetId:t.targetId,point:t.point.toArray()},O=s.visible=!1,P(`recover`),o(t,b,A))}function ee(e,n,r,i){if(T=Math.max(0,T-e),D){let a=w;w=Math.min(ig,w+e),t.quaternion.slerpQuaternions(u,d,pg(w,0,Qh)),a<tg&&w>=tg&&P(`turn`),a<ng&&w>=ng&&P(`shoot`),a<rg&&w>=rg?(r(rg),N(n,rg,I),L(),w>rg&&R(w-rg)):O&&R(e),r(Math.min(w,2.374999)),w<rg&&N(n,w,I),w>=ig&&(D=!1,i())}else O&&R(e);!D&&!O&&j!==`idle`&&P(`idle`)}function te(e,n,r,i){if(n<rg){k=!1,N(e,n,()=>r);return}k||=(i(rg),N(e,rg,()=>r),x.copy(s.position),i(n),!0);let a=n-rg;y.copy(x).addScaledVector(l.set(0,0,1).applyQuaternion(t.quaternion),a*1.9),y.y=Math.max(r+cg,x.y+1.85*a-.5*sg*a**2),M(y,8*rg+14*a)}function ne(){s.visible=!1,k=!1}return{start:F,update:ee,preview:te,hide:ne,cancel(){D=O=!1,j=`idle`,ne()},get active(){return D||O},get playing(){return D},get ready(){return!D&&!O&&T<=0},get cooldown(){return T},get cooldownRatio(){return T/ag},get phase(){return j},debug:()=>({phase:j,age:w,flight:E,cooldown:T,contact:C,bounces:Number(w>=.895/2)+Number(w>=1.605/2),ball:s.visible?s.position.toArray():null})}}function _g(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t,n(r.getContext(`2d`));let i=new Ma(r);return i.colorSpace=He,i}function vg(e){return _g(256,128,t=>{t.font=`900 78px "Microsoft YaHei", "PingFang SC", "Noto Sans CJK SC", sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.lineJoin=`round`,t.strokeStyle=`#4f382e`,t.lineWidth=14,t.strokeText(e,132,76,226),t.fillStyle=`#e39b62`,t.fillText(e,132,76,226),t.lineWidth=11,t.strokeText(e,125,69,226),t.fillStyle=`#fff7dd`,t.fillText(e,125,69,226)})}function yg(e){let t=new pi(new $r({map:vg(`太美`),transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));t.name=`Dawn jump lettering`,t.visible=!1,t.renderOrder=6,e.add(t);let n=new G,r=new G;return{update(e,i,a,o,s){let c=i-a;if(t.visible=c>=-.1&&c<.32,!t.visible)return;let{clamp:l,smoothstep:u}=U,d=u(c,-.1,-.01),f=u(c,-.01,.14),p=1-u(c,.16,.32);e.getObjectByName(`Head`).getWorldPosition(t.position),t.position.y+=.45,o.updateMatrixWorld();let m=-r.copy(t.position).applyMatrix4(o.matrixWorldInverse).z,h=2*Math.max(m,o.near)/(o.projectionMatrix.elements[5]*s),g=l(.66,58*h,188*h)*(.62+.54*d-.16*f);n.setFromMatrixColumn(o.matrixWorld,1),t.position.addScaledVector(n,g*.21+(4+5*f)*h),t.scale.set(g,g*.5,1),t.material.opacity=u(c,-.1,-.045)*p,t.material.rotation=-.12+.075*f},hide(){t.visible=!1},debug:()=>t.visible?t.position.toArray():null}}var bg=`#252137`,{clamp:xg,smoothstep:Sg}=U;function Cg(e,t,n){return _g(256,128,r=>{let i=[[12,62],[35,48],[27,22],[75,30],[96,13],[121,24],[170,13],[181,27],[229,22],[219,45],[242,56],[226,72],[229,96],[198,91],[170,111],[148,101],[83,112],[74,98],[24,101],[37,79]];function a(e,t,n){r.beginPath(),i.forEach(([n,i],a)=>{a===0?r.moveTo(n+e,i+t):r.lineTo(n+e,i+t)}),r.closePath(),r.fillStyle=n,r.fill(),r.stroke()}r.lineJoin=`round`,r.lineWidth=5,r.strokeStyle=bg,a(4,5,n),a(0,0,t),r.textAlign=`center`,r.textBaseline=`middle`,r.font=`italic 900 68px "Arial Black", system-ui, sans-serif`,r.lineWidth=9,r.strokeText(e,129,66,186),r.fillStyle=n,r.fillText(e,129,66,186),r.lineWidth=6,r.strokeText(e,126,62,186),r.fillStyle=`#fff9ed`,r.fillText(e,126,62,186)})}function wg(e){return _g(96,96,t=>{t.lineJoin=`round`,t.lineWidth=5,t.strokeStyle=bg,t.fillStyle=e,t.beginPath(),t.moveTo(43,58),t.lineTo(43,24),t.lineTo(76,15),t.lineTo(76,51),t.bezierCurveTo(76,70,48,70,51,56),t.bezierCurveTo(53,50,59,47,66,47),t.lineTo(66,31),t.lineTo(53,35),t.lineTo(53,63),t.bezierCurveTo(53,82,25,83,28,69),t.bezierCurveTo(29,62,36,58,43,58),t.closePath(),t.fill(),t.stroke(),t.fillStyle=`#fff0af`,t.beginPath(),t.moveTo(18,20),t.lineTo(22,29),t.lineTo(31,33),t.lineTo(22,37),t.lineTo(18,46),t.lineTo(14,37),t.lineTo(5,33),t.lineTo(14,29),t.closePath(),t.fill(),t.stroke()})}function Tg(e,{start:t,interval:n,count:r,vocals:i}){let a={"YO!":Cg(`YO!`,`#bceee9`,`#577fc3`),"HEY!":Cg(`HEY!`,`#efd9fc`,`#a674cd`)};function o(t,n,r){let i=new pi(new $r({map:n,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));return i.name=t,i.visible=!1,i.renderOrder=r,i.raycast=()=>{},e.add(i),i}let s=[-1,1].map(e=>({side:e,sprite:o(`Dawn rap comic word`,a[`YO!`],7),label:null})),c=[wg(`#81e1e7`),wg(`#dbadff`)].map(e=>o(`Dawn rap music notes`,e,6)),l=new G,u=new G,d=new G,f=new G,p=-1;function m(){for(let e of s)e.sprite.visible=!1,e.label=null;for(let e of c)e.visible=!1;p=-1}function h(e,o,h,g){m();let _=Math.floor((o-t)/n);if(_<0||_>=r)return;p=_,e.getObjectByName(`Head`).getWorldPosition(l),l.y+=.3,h.updateMatrixWorld();let v=-f.copy(l).applyMatrix4(h.matrixWorldInverse).z;if(v<=h.near)return;let y=2*v/(h.projectionMatrix.elements[5]*g),b=h.aspect*g,x=(f.copy(l).project(h).x+1)*b*.5;u.setFromMatrixColumn(h.matrixWorld,0),d.setFromMatrixColumn(h.matrixWorld,1);function S(e,t,n,r,i){let a=r*.5+8*y,o=xg(t,a-x*y,(b-x)*y-a);e.position.copy(l).addScaledVector(u,o).addScaledVector(d,n),e.scale.set(r,r*i,1),e.visible=!0}let C=xg(.56,74*y,162*y);for(let e of i){let t=o-e.time;if(t<0||t>=.44)continue;let n=s[e.side<0?0:1],r=Sg(t,0,.065),i=Sg(t,.065,.2),c=C*(.58+.59*r-.17*i);n.label=e.word,n.sprite.material.map=a[e.word],n.sprite.material.opacity=Sg(t,0,.035)*(1-Sg(t,.26,.44)),n.sprite.material.rotation=e.side*(.16-.07*i),S(n.sprite,e.side*(.24+(.48+.12*i)*C),.05+(.19+.12*i)*C,c,.5)}let w=(o-t-_*n)/n,T=xg(.19,28*y,49*y);c.forEach((e,t)=>{let n=w-t*.2;if(n<0||n>=.9)return;let r=(t+_)%2?1:-1;e.material.opacity=Sg(n,0,.12)*(1-Sg(n,.45,.9)),e.material.rotation=r*(.2-.29*n),S(e,r*(.3+(.6+.8*n)*T),-.11+(.15+.95*n)*T,T*(t===0?1:.78)*(.6+.4*Sg(n,0,.15)),1)})}return{update:h,hide:m,debug:()=>({beat:p,words:s.flatMap(e=>e.label?[e.label]:[]),notes:c.filter(e=>e.visible).length})}}var Eg=2*Math.PI,Dg=[55,55,65.4,49,55,55,73.4,65.4],Og={start:.5,interval:.5,count:Dg.length,vocals:[{time:.54,length:.21,pitch:234,word:`YO!`,side:1},{time:1.27,length:.17,pitch:208,word:`HEY!`,side:-1},{time:1.53,length:.2,pitch:255,word:`YO!`,side:1},{time:2.55,length:.19,pitch:246,word:`YO!`,side:-1},{time:3.28,length:.17,pitch:220,word:`HEY!`,side:1},{time:3.55,length:.23,pitch:268,word:`YO!`,side:-1}]};function kg(){let e=new Pn;e.name=`Dawn rap sunglasses`,e.visible=!1;let t=e=>new bi({color:e,toneMapped:!1}),n=t(`#191823`),r=t(`#33334a`),i=t(`#7e83a6`);for(let e of[n,r,i])e.userData.outlineParameters={visible:!1};let a=new vo;a.moveTo(-.084,.064),a.quadraticCurveTo(-.099,.064,-.096,.044),a.lineTo(-.078,-.044),a.quadraticCurveTo(-.074,-.067,-.047,-.067),a.lineTo(.047,-.067),a.quadraticCurveTo(.074,-.067,.078,-.044),a.lineTo(.096,.044),a.quadraticCurveTo(.099,.064,.084,.064),a.closePath();let o=new ns(a,{depth:.008,bevelEnabled:!1,curveSegments:8}),s=new ls(a,8),c=new vo;c.moveTo(-.052,.038),c.lineTo(-.026,.038),c.lineTo(.012,-.043),c.lineTo(-.012,-.043),c.closePath();let l=new ls(c);for(let t of[-1,1]){let a=new Pn;a.position.x=t*.096,a.rotation.y=t*.17,a.add(new q(o,n));let c=new q(s,r);c.position.z=.0084,c.scale.set(.86,.81,1),a.add(c);let u=new q(l,i);u.position.set(.011,.001,.009),a.add(u);let d=new Xa([new G(t*.183,.042,-.007),new G(t*.208,.034,-.063),new G(t*.211,.024,-.129)]);e.add(a,new q(new ps(d,10,.006,6,!1),n))}let u=new q(new Ia(.041,.014,.012),n);return u.position.set(0,.025,.002),e.add(u),e.traverse(e=>{e.isMesh&&(e.raycast=()=>{})}),e}function Ag(e,t){let n=e.sampleRate,r=e.createBuffer(1,Math.ceil(n*t),n),i=r.getChannelData(0),a=1749;function o(){return a=Math.imul(a,1664525)+1013904223>>>0,a/2147483648-1}function s(e,t,r){let a=Math.round(e*n),o=Math.min(i.length-a,Math.round(t*n));for(let e=0;e<o;e++)i[a+e]+=r(e/n)}for(let e=0;e<Dg.length;e++){let t=Og.start+e*Og.interval;e%2==0?s(t,.23,e=>.32*Math.sin(Eg*(51*e+105*(1-Math.exp(-36*e))/36))*Math.exp(-17*e)):s(t,.15,e=>(.13*o()+.065*Math.sin(Eg*182*e))*Math.exp(-29*e)),s(t+.023,.31,t=>.105*Math.sin(Eg*Dg[e]*t)*Math.min(1,60*t)*Math.exp(-6*t));for(let[e,n]of[[0,.048],[.25,.031]]){let r=0;s(t+e,.069,e=>{let t=o(),i=n*(t-r)*Math.exp(-54*e);return r=t,i})}}for(let{time:e,length:t,pitch:n,word:r}of Og.vocals){let i=r===`HEY!`;s(e,t,e=>{let r=U.smoothstep(e,.012,t*.65),a=U.lerp(290,i?585:455,r),o=U.lerp(i?1800:1550,i?1470:920,r),s=n-58*e/t,c=Eg*(n*e-29*e*e/t),l=0;for(let e=1;e<=11;e++){let t=s*e,n=Math.exp(-(((t-a)/165)**2))+.47*Math.exp(-(((t-o)/240)**2));l+=n*Math.sin(e*c)/Math.sqrt(e)}let u=Math.min(1,e/.024)*(1-e/t)**1.6;return .135*l*u})}return r}function jg(e,t){let n=Tg(e,Og),r=kg(),i=new q(new La(.075,.245,4,8),new Es({color:`#ffd574`}));i.name=`Dawn rap pointing finger`,i.raycast=()=>{};let a,o,s=0,c=0;function l(){o&&=(o.stop(),o.disconnect(),null)}function u(e,n,r){let i=t.context;r||!i||i.state!==`running`?l():o&&Math.abs(c+i.currentTime-s-e)<.18||(l(),a??=Ag(i,n),o=i.createBufferSource(),o.buffer=a,o.connect(t.output),s=i.currentTime,c=e,o.start(s,e))}return{stopSound:l,update(e,t,a,o,s,c){let l=U.smoothstep(t,.13,.45),d=U.smoothstep(t,4.19,4.54);if(r.visible=l>0&&d<1,r.visible){let t=e.getObjectByName(`Head`);r.parent!==t&&t.add(r),r.position.set(0,1.66+.66*(1-l)+.35*d,1.67+.23*(1-l)+.18*d),r.rotation.set(.19*(1-l)-.18*d,0,-.18*(1-l)+.19*d),r.scale.setScalar((.79+.21*l-.19*d)/.15)}let f=U.smoothstep(t,.36,.59)*(1-U.smoothstep(t,4.19,4.52));if(i.visible=f>0,i.visible){let t=e.getObjectByName(`HandR`);if(i.parent!==t){let n=e.getObjectByName(`Sleeve_&_mittenL_3`);n&&(i.material=n.material),t.add(i)}i.position.set(-.065,.32+.18*f,.025),i.scale.y=f}u(t,a,o),n.update(e,t,s,c)},hide(){r.visible=!1,r.removeFromParent(),i.visible=!1,i.removeFromParent(),l(),n.hide()},debug:()=>({glasses:r.visible,pointing:i.visible,sound:!!o,effects:n.debug()})}}var Mg=2*Math.PI;function Ng(e,t,n,r,i,a={}){return{at:e,length:t,from:n,to:r,gain:i,...a}}function Pg(e,t,n,r,i,a={}){return{at:e,length:t,low:n,high:r,gain:i,...a}}var Fg={waterCharge:[Pg(0,.26,420,1800,.11,{flutter:29}),Ng(.015,.11,275,510,.1),Ng(.075,.12,420,760,.11),Ng(.145,.125,570,1080,.095)],waterJet:[Pg(0,.34,750,7300,.34,{attack:.021,release:.085,flutter:31}),Pg(.008,.32,270,1900,.19,{attack:.028,release:.072,flutter:45}),Ng(0,.145,400,930,.13,{decay:16,harmonic:.2})],waterSplash:[Pg(0,.23,420,5100,.31,{decay:12,flutter:34}),Ng(.018,.13,540,238,.11),Ng(.045,.11,820,310,.075),Ng(.095,.11,660,416,.055)],tackleGather:[Pg(0,.135,340,2700,.16,{decay:11}),Ng(.018,.125,160,91,.13,{decay:9})],tackleRush:[Pg(0,.23,380,3800,.3,{attack:.035,release:.13}),Ng(.012,.17,190,470,.105,{attack:.025,decay:7})],bodyHit:[Ng(0,.17,138,52,.31,{decay:13,harmonic:.24}),Pg(0,.15,180,2550,.22,{decay:15})],targetHit:[Ng(0,.16,193,92,.27,{decay:15,harmonic:.22}),Ng(.004,.1,690,380,.11,{decay:25}),Pg(0,.084,540,5400,.25,{decay:25})],landing:[Ng(0,.135,115,59,.23,{decay:16}),Pg(0,.112,270,2200,.2,{decay:18}),Ng(.033,.12,104,57,.11,{decay:16})],skid:[Pg(0,.205,370,3150,.2,{decay:7,flutter:43}),Ng(0,.105,122,61,.13,{decay:17})],ironPulse:[Ng(0,.152,111,45,.27,{decay:15,harmonic:.19}),Pg(.005,.082,460,1750,.12,{decay:19})],ironRush:[Pg(0,.22,200,4400,.37,{attack:.035,release:.145}),Ng(.006,.22,110,46,.23,{attack:.021,decay:8,harmonic:.21}),Ng(.028,.135,215,620,.13,{decay:7})],ironHit:[Ng(0,.25,119,37,.44,{decay:10,harmonic:.25}),Pg(.002,.19,260,4400,.32,{decay:15}),Ng(.023,.19,284,85,.16,{decay:14})],mudScrape:[Pg(0,.16,380,3800,.27,{attack:.013,flutter:41}),Ng(.036,.13,135,76,.1,{decay:8})],mudThrow:[Pg(0,.17,240,2800,.24,{attack:.024,release:.081,flutter:32}),Ng(.017,.14,228,560,.14,{decay:10,harmonic:.28})],mudSplat:[Pg(0,.19,160,2260,.36,{decay:13,flutter:48}),Ng(0,.14,184,61,.25,{decay:15,harmonic:.25}),Ng(.043,.12,455,208,.083,{decay:15})],ballBounce:[Ng(0,.145,143,86,.29,{decay:19,harmonic:.3}),Ng(.003,.1,422,292,.14,{decay:26}),Pg(0,.064,660,3800,.15,{decay:28})],ballCatch:[Pg(0,.103,420,3100,.13,{decay:19}),Ng(0,.093,159,112,.17,{decay:19})],ballThrow:[Pg(0,.2,520,4900,.25,{attack:.027,release:.13}),Ng(.022,.17,330,710,.095,{attack:.021,decay:9})],ballImpact:[Ng(0,.2,184,69,.33,{decay:14,harmonic:.27}),Ng(.008,.1,615,272,.14,{decay:22}),Pg(.003,.115,550,4500,.19,{decay:16})],jumpLift:[Ng(0,.26,185,650,.24,{attack:.018,decay:5,harmonic:.22,flutter:19}),Pg(0,.17,440,4200,.17,{attack:.025,release:.095}),Ng(.088,.15,415,915,.085,{decay:8})],jumpChime:[Ng(0,.24,880,880,.16,{decay:10,harmonic:.16}),Ng(.041,.24,1319,1319,.13,{decay:11}),Ng(.088,.24,1760,1760,.1,{decay:13})],danceStep:[Ng(0,.127,216,108,.19,{decay:16}),Pg(.009,.083,800,4600,.15,{decay:22})],danceNote:[Ng(0,.18,523,523,.21,{decay:10,harmonic:.15}),Ng(.026,.14,784,784,.085,{decay:13})],rapGlasses:[Pg(0,.105,520,5400,.2,{decay:17}),Ng(.022,.095,772,565,.13,{decay:20})]};function Ig(e,t){let n=e.sampleRate,r=Math.max(...t.map(e=>e.at+e.length)),i=e.createBuffer(1,Math.ceil(n*r),n),a=i.getChannelData(0),o=29338;for(let e of t){let{at:t,length:r,from:i,to:s,gain:c,low:l=0,high:u=0,attack:d=.006,release:f=.045,decay:p=8,harmonic:m=0,flutter:h=0}=e,g=Math.round(t*n),_=Math.min(a.length-g,Math.round(r*n)),v=1-Math.exp(-Mg*l/n),y=1-Math.exp(-Mg*u/n),b=0,x=0,S=0;for(let e=0;e<_;e++){let t=e/n,l=Math.min(1,t/d,(r-t)/f),u;if(i===void 0){o=Math.imul(o,1664525)+1013904223>>>0;let e=o/2147483648-1;x+=(e-x)*v,S+=(e-S)*y,u=S-x}else b+=Mg*i*(s/i)**(t/r)/n,u=Math.sin(b)+m*Math.sin(2*b);let _=h?.78+.22*Math.sin(Mg*h*t):1;a[g+e]+=u*c*l*Math.exp(-p*t)*_}}return i}function Lg(){let e=new Map,t=new Map,n,r,i=!1;function a(){let e=globalThis.AudioContext??globalThis.webkitAudioContext;if(e&&navigator.userActivation?.hasBeenActive!==!1){if(!n){try{n=new e}catch{return}r=n.createDynamicsCompressor(),r.threshold.value=-11,r.ratio.value=4;let t=n.createGain();t.gain.value=.78,r.connect(t),t.connect(n.destination)}n.state!==`running`&&n.resume().catch(()=>{})}}function o(e){for(let[n,r]of t)e&&r.scope!==e||(n.stop(),r.cleanUp())}return{enable:a,stop:o,get context(){return n},get output(){return r},setPaused(e){i=e,i&&o()},play(a,{rate:o=1,volume:s=1,scope:c=`skill`}={}){if(i||!n)return;e.has(a)||e.set(a,Ig(n,Fg[a]));let l=n.createBufferSource(),u=n.createGain();l.buffer=e.get(a),l.playbackRate.value=o,u.gain.value=s,l.connect(u),u.connect(r);function d(){l.onended=null,l.disconnect(),u.disconnect(),t.delete(l)}l.onended=d,t.set(l,{name:a,scope:c,cleanUp:d}),l.start()},debug:()=>[...t.values()].map(e=>e.name)}}var Rg=(e,t,n)=>({time:e,sound:t,...n}),zg=(e,t,n,r)=>e.map((e,i)=>Rg(e,t,{rate:n[i%n.length],volume:r}));function Bg(e){let t=t=>e.events?.find(e=>e.event===t)?.time;switch(e.name){case`WaterCharge`:return[Rg(.07,`waterCharge`)];case`WaterShoot`:return[Rg(.04,`waterCharge`),Rg(t(`water_start`),`waterJet`)];case`Basketball`:return mg;case`IronShoulder`:return Xh;case`Jump`:return[Rg(.105,`tackleGather`,{volume:.49,rate:1.31}),Rg(t(`jump_takeoff`),`jumpLift`),Rg(t(`jump_apex`),`jumpChime`),Rg(t(`jump_land`),`landing`,{volume:.77})];case`Rap`:return[Rg(.43,`rapGlasses`,{volume:.75}),Rg(4.4,`rapGlasses`,{volume:.61,rate:1.21})];case`DanceA`:return[...zg([.1,.57,1.07,1.57,2.07,2.57,3.06],`danceStep`,[1,1.19,.95,1.34],.68),...zg([.12,1.1,2.1,3.01],`danceNote`,[1,1.12,1.26,1.5],.55),Rg(t(`jump_start`),`jumpLift`,{volume:.63,rate:1.19}),Rg(t(`land`),`landing`,{volume:.69})];case`DanceB`:return[...zg([.1,.47,.84,1.61,1.99,2.39,2.74],`danceStep`,[1.1,.97],.64),...zg([.14,.5,.9,t(`curious_hold`),t(`dance_resume`),2.05,2.49],`danceNote`,[1.12,1.34,1,1.68,1.26,1.5,1.12],.58)];case`DanceC`:return[...zg(e.events.filter(e=>e.event===`step`).filter((e,t)=>t%2==0).map(e=>e.time),`danceStep`,[.94,1.2,1.42],.51),...zg([.33,.98,1.55,2.1,2.7,3.25],`danceNote`,[1,1.26,1.5,1.26,1.5,1.68],.58),Rg(t(`jump_start`),`jumpLift`,{volume:.74,rate:1.14}),Rg(t(`land`),`landing`,{volume:.78}),Rg(4.06,`jumpChime`,{volume:.69,rate:1.12})];default:return[]}}function Vg(e){let t=[],n=-1;return{setClip(r,i){i||e.stop(`clip`),t=Bg(r).filter(e=>Number.isFinite(e.time)).sort((e,t)=>e.time-t.time),n=-1},seek(e){n=e},update(r,i=1){r<n&&(n=-1);for(let{time:a,sound:o,rate:s=1,volume:c}of t)a>n&&a<=r&&e.play(o,{rate:s*i,volume:c,scope:`clip`});n=r},get active(){return t.length>0}}}var{smoothstep:Hg,clamp:Ug}=U,Wg=`#4f382e`;function Gg(){return _g(256,256,e=>{let t=[[15,37],[83,72],[84,20],[117,66],[150,29],[154,76],[232,51],[188,98],[245,112],[200,134],[230,169],[169,163],[178,221],[135,185],[98,237],[96,184],[38,215],[62,163],[13,159],[53,127],[12,105],[72,98]];function n(t){e.beginPath(),t.forEach(([t,n])=>e.lineTo(t,n)),e.closePath()}e.lineJoin=`round`,e.lineWidth=8,e.strokeStyle=Wg,n(t.map(([e,t])=>[e*.95+9,t*.95+12])),e.fillStyle=`#d9894f`,e.fill(),e.stroke(),n(t),e.fillStyle=`#f5bd60`,e.fill(),e.stroke(),n(t.map(([e,t])=>[125+(e-125)*.71,128+(t-128)*.72])),e.fillStyle=`#fff6d5`,e.fill(),e.strokeStyle=`#e2a460`,e.lineWidth=3;for(let t=0;t<3;t++)e.beginPath(),e.moveTo(143+t*9,148+t*3),e.lineTo(158+t*9,156+t*3),e.stroke();e.lineWidth=6,e.strokeStyle=Wg,e.lineCap=`round`,e.beginPath(),e.moveTo(198,202),e.lineTo(217,217),e.moveTo(34,66),e.lineTo(23,59),e.stroke()})}function Kg(){let e=[];for(let[t,n,r,i,a]of[[-.35,.28,.19,.65,.038],[.35,.28,.24,.71,.043],[-.45,.2,0,.44,.025],[.46,.2,.02,.49,.025],[-.27,.38,-.04,.48,.022],[.25,.35,-.08,.39,.021]])e.push(t-a,n,r,t+a,n+.018,r-.07,t,n,r-i);return new q(new Hr().setAttribute(`position`,new Ar(e,3)),new bi({color:`#eafff9`,side:2,transparent:!0,depthWrite:!1}))}function qg(e){let t=new Pn;t.name=`Tackle comic effects`,e.add(t);let n=Kg(),r=new pi(new $r({map:Gg(),transparent:!0,depthWrite:!1,toneMapped:!1})),i=new pi(new $r({map:vg(`砰！`),transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1})),a=new ra(new ds(1,7,4),new bi({color:`#e1c19a`,transparent:!0,depthWrite:!1}),6),o=new q(new cs(.8,1,40),new bi({color:`#ffd087`,side:2,transparent:!0,depthWrite:!1}));o.rotation.x=-Math.PI/2,a.instanceMatrix.setUsage(Je),a.frustumCulled=!1,r.renderOrder=5,i.renderOrder=6,t.add(n,a,r,i,o),t.traverse(e=>{e.raycast=()=>{},e.userData.combatDecoration=!0});let s=new G,c=new G,l=new G,u=new G,d=new G,f=new G,p=new G,m=new Nn,h=10,g=10,_=10,v=1,y=null,b=1,x;function S(){h=g=_=10,y=null,n.visible=a.visible=r.visible=i.visible=o.visible=!1}function C(){if(globalThis.AudioContext){try{x??=new AudioContext}catch{return}x.state===`suspended`&&x.resume().catch(()=>{})}}function w(e,t){if(_=0,v=.66+.12*t,o.position.copy(e),o.position.y+=.015,x?.state!==`running`)return;let n=x.createOscillator(),r=x.createGain(),i=x.currentTime;n.frequency.setValueAtTime(112-8*t,i),n.frequency.exponentialRampToValueAtTime(49,i+.115),r.gain.setValueAtTime(.075+.012*t,i),r.gain.exponentialRampToValueAtTime(.001,i+.14),n.connect(r).connect(x.destination),n.start(i),n.stop(i+.14),n.onended=()=>{n.disconnect(),r.disconnect()}}function T(e,t,n){s.copy(e),c.copy(t),l.set(t.z,0,-t.x),h=0,y=n}function E(e,t){u.copy(e),d.copy(t),g=0}function D(e,t,u,d,f=0){if(e<=0)return;h+=e,g+=e,_+=e,o.visible=_<.23,o.visible&&(o.scale.setScalar(v*(.46+.85*_/.23)),o.material.opacity=.7*(1-Hg(_,.015,.23))),n.visible=d,d&&(n.position.copy(t),n.position.y+=f,n.rotation.y=Math.atan2(u.x,u.z),n.material.opacity=.65);let p=h/.31;if(a.visible=p<1,a.visible){a.count=y===`blocked`||y===`landing`?4:6,a.material.opacity=.76*(1-Hg(p,.2,1));let e=y===`miss`;for(let t=0;t<a.count;t++){let n=t-(a.count-1)/2,r=.044+(.049+t%2*.012)*p,i=(e?-.39:-.15)*p*(.74+t%3*.12)-t%3*.022,o=(.047+t%3*.014)*(.76+.82*p);m.position.copy(s).addScaledVector(l,n*r).addScaledVector(c,i),m.position.y+=(e?.019:.065)*Math.sin(Math.PI*p),m.rotation.y=Math.atan2(c.x,c.z),m.scale.set(o,o*(e?.38:.65),o*(e?1.65:1.1)),m.updateMatrix(),a.setMatrixAt(t,m.matrix)}a.instanceMatrix.needsUpdate=!0}r.visible=g<.19,i.visible=g>.025&&g<.46}function O(e){if(r.visible||i.visible){if(e.updateMatrixWorld(),f.setFromMatrixColumn(e.matrixWorld,0),p.subVectors(e.position,u).normalize(),b=d.dot(f)<-.15?-1:1,r.visible){let e=Hg(g,0,.047),t=1-Hg(g,.09,.19);r.position.copy(u).addScaledVector(p,.21).addScaledVector(d,.065*e),r.position.y+=.065,r.scale.setScalar((.58+.37*e)*(.81+.19*t)),r.material.rotation=b*.22,r.material.opacity=t}if(i.visible){let e=Ug((g-.025)/.435,0,1),t=Hg(e,0,.23),n=Math.sin(t*Math.PI)*.19,r=.87+.45*t+n;i.position.copy(u).addScaledVector(f,b*(.42+e*.18)),i.position.y+=.45+e*.31,i.scale.set(r,r*(.4+.14*t),1),i.material.rotation=-b*.17,i.material.opacity=1-Hg(e,.58,1)}}}return S(),{reset:S,dust:T,hit:E,pulse:w,enableBeatSound:C,update:D,prepare:O,debug:()=>({burst:r.visible,lettering:i.visible,streaks:n.visible,dust:y&&a.visible?y:null})}}var Jg=.105,Yg=.26,Xg=.63,Zg=3,Qg=8.6,$g=20,{lerp:e_,smoothstep:t_}=U;function n_({actor:e,pivot:t,model:n,groundHeight:r,trace:i,resolveTarget:a,effects:o,onRelease:s,onContact:c}){let l=Mh(e,t,n),u=n.getObjectByName(`RHand`),d=new G(0,1,0),f=new G,p=new G,m=new Ft,h=new Ft,g=new G,_=new G,v=new G,y=new G,b=new G,x=new G,S=new G,C=new G,w=null,T=Xg,E=0,D=!1,O=!1,k=!1,A=null;function j(t,n){return T<Xg||D?!1:(f.set(0,0,1).applyQuaternion(e.quaternion),t&&Math.hypot(t.x-e.position.x,t.z-e.position.z)>.01&&f.subVectors(t,e.position),f.setY(0).normalize(),p.set(-f.z,0,f.x),h.copy(e.quaternion),m.setFromAxisAngle(d,Math.atan2(f.x,f.z)),w=n,T=E=0,O=k=!1,A=null,!0)}function M(){k=D=!0,y.copy(g),b.copy(y);let t=w?a(w):null,n=t?Math.hypot(t.x-y.x,t.z-y.z):1/0;if(n>=.24&&n<=Zg)v.copy(t);else{v.copy(y).addScaledVector(f,Zg);let t=r(v.x,v.z);if(t===null){let e=0,n=Zg;for(let t=0;t<8;t++){let t=(e+n)*.5;v.copy(y).addScaledVector(f,t),r(v.x,v.z)===null?n=t:e=t}v.copy(y).addScaledVector(f,Math.max(.16,e-.08)),t=r(v.x,v.z)}v.y=(t??e.position.y-.005)+.015}let i=Math.hypot(v.x-y.x,v.z-y.z)/Qg;S.subVectors(v,y).divideScalar(i),S.y+=.5*$g*i,o.release(y,S),s()}function N(t){if(t<=0||(T<Xg&&(T=Math.min(Xg,T+t),e.quaternion.slerpQuaternions(h,m,t_(T,0,.16))),!D))return;E+=t,x.copy(y).addScaledVector(S,E),x.y-=.5*$g*E*E,C.copy(S),C.y-=$g*E;let n=i(b,x);n?(D=!1,A={kind:n.kind,targetId:n.targetId,point:n.point.toArray()},o.land(n,C),c(n,C)):E>.72?(D=!1,o.hideGlob()):(o.flight(x,C,E),b.copy(x))}function P(){if(T>=Xg)return;let t=k?T:Math.min(T,Yg),n=t_(t,0,.115)*(1-t_(t,.19,.38)),i=t_(t,.06,.145)*(1-t_(t,.16,.232)),a=t_(t,.164,Yg)*(1-t_(t,.285,.46)),s=1-t_(t,.46,Xg);l.apply({height:-.037*n+.018*a,pitch:.15*n-.1*a,bank:-.15*i+.17*a,headPitch:.18*n-.095*a,finPitch:-.17*i+.19*a,tailPitch:.19*i-.24*a,planted:s,scoop:{reach:-.049*i+.124*a,lift:.043*i+.118*a,side:.026*i+.091*a}}),k||(u.getWorldPosition(g),T>=Jg&&!O&&(O=!0,_.copy(g).addScaledVector(f,.09),_.y=(r(_.x,_.z)??e.position.y)+.027,o.scrape(_,f)),T<Jg||(g.addScaledVector(p,.048+.105*a).addScaledVector(f,.064+.109*a),g.y+=.028+.055*a,T>=Yg?M():o.scoop(g,f,t_(T,Jg,Yg))))}function F(){l.restore(),o.reset(),w=null,T=Xg,E=0,D=O=k=!1,A=null}return{start:j,update:N,applyPose:P,restorePose:l.restore,reset:F,get active(){return T<Xg},get ready(){return T>=Xg&&!D},debug:()=>({phase:T<Yg?`scoop`:D?`flight`:T<Xg?`recover`:`idle`,age:T,flight:E,lastContact:A})}}var{clamp:r_,smoothstep:i_}=U,a_=1.55;function o_(){let e=new ds(1,18,12),t=e.attributes.position,n=new Float32Array(t.count*3),r=new K(`#673f2a`),i=new K(`#ae693d`),a=new K(`#edb877`),o=new K;for(let e=0;e<t.count;e++){let s=t.getX(e),c=t.getY(e),l=t.getZ(e),u=1+.1*Math.sin(6*s+4*c)*Math.cos(5*l),d=.82+.18*i_(l,-1,.62);t.setXYZ(e,s*u*d,c*u*d,l*u);let f=(1-i_((s+.32)**2+(l-.28)**2,.025,.23))*i_(c,.31,.84);o.copy(r).lerp(i,i_(c,-.58,.69)).lerp(a,f*.87).toArray(n,e*3)}return e.setAttribute(`color`,new Dr(n,3)),e.computeVertexNormals(),e}function s_(){let e=[],t=(e,t)=>[.05*Math.sin(e*Math.PI),.032+.14*Math.sin(e*Math.PI)+t*.024*Math.sin(e*Math.PI),-.24+.55*e];for(let n=0;n<10;n++){let r=n/10,i=(n+1)/10;e.push(...t(r,1),...t(r,-1),...t(i,1),...t(r,-1),...t(i,-1),...t(i,1))}return new Hr().setAttribute(`position`,new Ar(e,3))}function c_(){return _g(192,192,e=>{e.beginPath(),e.moveTo(83,72),e.bezierCurveTo(76,57,48,58,29,45),e.bezierCurveTo(8,29,25,13,49,22),e.bezierCurveTo(67,28,75,46,92,55),e.bezierCurveTo(110,63,111,38,124,25),e.bezierCurveTo(143,8,165,24,149,45),e.bezierCurveTo(140,56,127,65,133,78),e.bezierCurveTo(144,89,162,81,175,91),e.bezierCurveTo(188,105,178,121,157,118),e.bezierCurveTo(147,116,133,109,129,121),e.bezierCurveTo(124,136,148,150,141,166),e.bezierCurveTo(134,183,111,175,108,154),e.bezierCurveTo(106,141,101,133,88,138),e.bezierCurveTo(76,145,74,165,55,170),e.bezierCurveTo(39,173,29,158,44,144),e.bezierCurveTo(52,136,65,127,59,118),e.bezierCurveTo(50,110,28,126,17,113),e.bezierCurveTo(1,95,23,85,46,88),e.bezierCurveTo(60,91,79,84,83,72),e.closePath(),e.lineJoin=`round`,e.lineWidth=5,e.strokeStyle=`#5d3728`,e.stroke(),e.fillStyle=`#935635`,e.fill(),e.beginPath(),e.moveTo(68,98),e.bezierCurveTo(71,77,102,71,125,84),e.bezierCurveTo(139,96,122,119,102,123),e.bezierCurveTo(82,130,61,120,68,98),e.closePath(),e.fillStyle=`#ad6e42`,e.fill(),e.beginPath(),e.moveTo(82,93),e.bezierCurveTo(92,84,105,83,113,89),e.bezierCurveTo(102,89,94,91,88,96),e.bezierCurveTo(84,98,80,96,82,93),e.fillStyle=`#d39a64`,e.fill()})}function l_(e){let t=new Pn;t.name=`Garden mud throw effects`,e.add(t);let n=o_(),r=new Es({vertexColors:!0}),i=new q(n,r),a=new q(s_(),new bi({color:`#f7d39b`,transparent:!0,side:2,depthWrite:!1})),o=new ra(n,r,6);o.frustumCulled=!1,o.instanceMatrix.setUsage(Je);let s=new pi(new $r({map:vg(`啪嗒！`),transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}));s.renderOrder=6;let c=c_(),l=Array.from({length:3},()=>{let e=new q(new ss(1,1),new bi({map:c,transparent:!0,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}));return e.renderOrder=3,{mark:e,age:a_,size:0}});t.add(i,a,o,s,...l.map(({mark:e})=>e)),t.traverse(e=>{e.raycast=()=>{},e.userData.combatDecoration=!0});let u=new G(0,0,1),d=new G(0,1,0),f=new G,p=new G,m=new G,h=new G,g=new G,_=new on,v=new G,y=new Nn,b=null,x=0,S=10,C=!1,w=0;function T(){b=null,x=0,S=10,C=!1,w=0,i.visible=a.visible=o.visible=s.visible=!1;for(let e of l)t.add(e.mark),e.mark.visible=!1,e.age=a_}function E(e,t,n,r){i.visible=!0,i.position.copy(e),i.quaternion.setFromUnitVectors(u,f.copy(t).normalize()),i.scale.set(n,n*.91,n*r)}function D(e,t){p.copy(e),h.copy(t),g.set(t.z,0,-t.x),m.copy(d),b=`scrape`,x=0}function O(e,t){b=`flight`,x=0,S=0,a.position.copy(e),a.rotation.y=Math.atan2(t.x,t.z),k(e,t,0)}function k(e,t,n){E(e,t,.145,1+.48*(1-i_(n,0,.12))+.23*i_(n,.21,.42)),p.copy(e),h.copy(t).normalize(),g.crossVectors(d,h).normalize()}function A(){i.visible=!1,b===`flight`&&(b=null)}function j(e,n){if(A(),b=`impact`,x=0,C=e.kind===`target`,p.copy(e.point),m.copy(e.normal),h.copy(n).addScaledVector(m,-n.dot(m)),h.lengthSq()<1e-4&&h.crossVectors(Math.abs(m.y)<.95?d:u,m),h.normalize(),g.crossVectors(h,m).normalize(),e.kind===`water`)return;let r=l[w++%l.length],i=r.mark;t.add(i),_.makeBasis(g,h,m),i.quaternion.setFromRotationMatrix(_),i.position.copy(e.point).addScaledVector(m,C?.017:.008),i.scale.setScalar(.15),i.material.opacity=1,i.visible=!0,r.age=0,r.size=C?.51:.6,e.attachment&&e.attachment.attach(i)}function M(e){if(!(e<=0)){x+=e,S+=e,a.visible=S<.12,a.visible&&(a.material.opacity=.79*(1-i_(S,.035,.12)),a.scale.setScalar(.85+S*1.9));for(let t of l){if(!t.mark.visible)continue;t.age+=e,t.mark.visible=t.age<a_;let n=i_(t.age,0,.1),r=Math.sin(n*Math.PI)*.12;t.mark.scale.setScalar(t.size*(.31+.69*n+r)),t.mark.material.opacity=.94*(1-i_(t.age,.96,a_))}if(s.visible=b===`impact`&&C&&x>.028&&x<.45,o.visible=b===`scrape`&&x<.21||b===`impact`&&x<.28||b===`flight`&&i.visible&&x>.018,o.visible){o.count=b===`flight`?2:b===`scrape`?3:5;for(let e=0;e<o.count;e++){let t=e%2==0?1:-1,n;if(y.position.copy(p),b===`flight`)y.position.addScaledVector(h,-.24-e*.17).addScaledVector(g,t*(.062+e*.035)),y.position.y-=.045+e*.029,n=.043-e*.009;else{let r=r_(x/(b===`scrape`?.21:.28),0,1),i=b===`impact`&&e<2,a=b===`scrape`?.12:i?.36:.46;y.position.addScaledVector(g,t*a*r*(.72+.15*e)).addScaledVector(h,a*r*(.3+e*.19)),y.position.addScaledVector(m,(i?.12:.16)*Math.sin(Math.PI*r)),n=(i?.091:.045+e*.004)*Math.sqrt(1-r)}y.quaternion.setFromUnitVectors(u,f.copy(h).normalize()),y.scale.set(n,n*.77,n*(e<2?1.48:1.12)),y.updateMatrix(),o.setMatrixAt(e,y.matrix)}o.instanceMatrix.needsUpdate=!0}}}function N(e){if(!s.visible)return;v.setFromMatrixColumn(e.matrixWorld,0);let t=h.dot(v)<-.12?-1:1,n=(x-.028)/.422,r=i_(n,0,.2),i=.86+.55*r+Math.sin(r*Math.PI)*.16;s.position.copy(p).addScaledVector(v,t*(.48+n*.15)),s.position.y+=.43+n*.29,s.scale.set(i,i*(.36+.14*r),1),s.material.rotation=-t*.14,s.material.opacity=1-i_(n,.56,1)}return T(),{reset:T,scrape:D,release:O,flight:k,land:j,hideGlob:A,update:M,prepare:N,scoop:(e,t,n)=>E(e,t,.043+.087*n,.87+n*.25),debug:()=>({glob:i.visible,position:i.visible?i.position.toArray():null,mode:b,lettering:s.visible,stains:l.filter(e=>e.mark.visible).map(e=>e.mark.getWorldPosition(new G).toArray())})}}function u_({button:e,canStart:t,onStart:n,onDrag:r,onRelease:i,onCancel:a,onTap:o}){let s=null;function c(t=!1){if(!s)return;let n=s;s=null,e.hasPointerCapture?.(n.id)&&e.releasePointerCapture(n.id),t?a():i({dragging:n.dragging})}return e.addEventListener(`pointerdown`,r=>{!s&&r.isPrimary!==!1&&r.button===0&&t()&&(r.preventDefault(),r.stopPropagation(),s={id:r.pointerId,x:r.clientX,y:r.clientY,dragging:!1,dx:0,dy:0},e.setPointerCapture(r.pointerId),n())}),e.addEventListener(`pointermove`,e=>{if(!s||s.id!==e.pointerId)return;e.preventDefault();let t=e.clientX-s.x,n=e.clientY-s.y;Math.hypot(t,n)<8||(s.dragging=!0,s.dx=t,s.dy=n,r({x:t,y:n}))}),window.addEventListener(`pointerup`,e=>{s?.id===e.pointerId&&(e.preventDefault(),c())},!0),window.addEventListener(`pointercancel`,e=>{s?.id===e.pointerId&&c(!0)},!0),e.addEventListener(`lostpointercapture`,()=>c(!0)),window.addEventListener(`pointermove`,e=>{s?.id===e.pointerId&&[`mouse`,`pen`].includes(e.pointerType)&&e.buttons===0&&c(!0)},!0),document.addEventListener(`pointerdown`,t=>{s&&t.isPrimary&&t.button===0&&!e.contains(t.target)&&c(!0)},!0),e.addEventListener(`click`,e=>{!s&&e.detail===0&&t()&&o()}),e.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`blur`,()=>c(!0)),document.addEventListener(`visibilitychange`,()=>{document.hidden&&c(!0)}),{cancel:()=>c(!0),debug:()=>({active:!!s,dragging:s?.dragging??!1,offset:s?[s.dx,s.dy]:[0,0]})}}function d_({actor:e,pond:t,walkTo:n,isWalking:r,groundHeight:i,onClip:a,canAnimate:o,onStop:s,onMessage:c,onSplash:l,stroke:u=()=>0,onMotion:d=()=>{},onLand:f=()=>{}}){let[p,m]=t.center,[h,g]=t.radii,_={land:new G(p-h-.6,0,m),water:new G(p-(h-t.inset)*.7,0,m)};_.land.y=(i(_.land.x,_.land.z)??0)+.005;let v=t.height-.19;_.water.y=v;let y=new G(0,1,0),b=new Ft,x=`land`,S=null,C=null,w=0,T=0,E=0,D=new G,O=!1,k=new G,A=new G,j=0,M=0,N=e=>((e.x-p)/h)**2+((e.z-m)/g)**2<=1.08**2;function P(e){let n=new W((e.x-p)/(h-t.inset),(e.z-m)/(g-t.inset));return n.length()>1&&n.normalize(),new G(p+n.x*(h-t.inset),v,m+n.y*(g-t.inset))}function F(e){o()&&a(e)}function I(){s(),x=`exiting`,w=0,D.copy(e.position),O=!1,E=0,k.set(0,0,0),F(`Swim`),c(`游回岸边，准备上岸。`)}function L(e){if(N(e)){if(S=P(e),C=null,x===`exiting`&&(C=()=>L(e)),x===`land`){let e=n(_.land);return e?.ok?(x=`approaching`,c(`去岸边，准备下水。`),{handled:!0,plan:e}):(c(`岸边暂时过不去，换个位置再试试。`),{handled:!0,plan:e})}if(x===`swimming`){let e=E;s(),E=e,F(`Swim`)}return{handled:!0,plan:{ok:!0,goal:{x:S.x,z:S.z},waypoints:[],swimming:!0}}}return x===`land`||x===`approaching`?(x=`land`,S=null,{handled:!1}):(C=()=>n(e),x===`swimming`&&I(),{handled:!0,plan:{ok:!0,goal:{x:e.x,z:e.z},waypoints:[],swimming:!0}})}function R(t){if(T+=t,x===`approaching`&&!r()){if(e.position.distanceTo(_.land)>.08){ee();return}x=`entering`,w=0,D.copy(e.position),s(),F(`Swim`),O=!1}if(x===`entering`||x===`exiting`){w=Math.min(1,w+t/(x===`entering`?.95:1.15));let n=x===`entering`?_.water:_.land,r=U.smoothstep(w,0,1);if(e.position.lerpVectors(D,n,r),e.position.y+=Math.sin(w*Math.PI)*.025,e.position.y=Math.max(e.position.y,(i(e.position.x,e.position.z)??e.position.y)+.005),b.setFromAxisAngle(y,Math.atan2(n.x-D.x,n.z-D.z)),e.quaternion.rotateTowards(b,5*t),!O){let t=Math.hypot((e.position.x-p)/h,(e.position.z-m)/g);if(x===`entering`&&w>.5)l(e.position,{kind:`entry`}),O=!0;else if(x===`exiting`&&t>=.9){let n=e.position.clone();n.x=p+(n.x-p)*.9/t,n.z=m+(n.z-m)*.9/t,l(n,{kind:`exit`}),O=!0}}if(w===1){if(x===`entering`)x=`swimming`,k.set(0,0,0),c(`下水啦！点水面游泳，点草地上岸。`),C&&I();else{x=`land`,S=null,f(),F(`Idle`);let e=C;C=null,e?e():c(`回到岸上啦。`)}}return}if(x!==`swimming`)return;let n=Math.min(.004,E*.005);if(M+=(n-j)*35*t-M*9*t,j+=M*t,e.position.y=v+j,!o())return;let a=S?e.position.clone().setY(v).distanceTo(S):0;if(a>.012){let n=S.clone().sub(e.position);n.y=0,n.normalize(),A.set(0,0,1).applyQuaternion(e.quaternion);let r=Math.atan2(new G().crossVectors(A,n).y,A.dot(n));b.setFromAxisAngle(y,Math.atan2(n.x,n.z)),e.quaternion.rotateTowards(b,2.8*t),A.set(0,0,1).applyQuaternion(e.quaternion);let i=Math.max(0,A.dot(n)),o=.92+.08*Math.sin(u()*Math.PI*4-.5),s=Math.min(.65*o,Math.sqrt(1.7*a))*i,c=E;E=U.clamp(s,E-1.2*t,E+.85*t),k.lerp(A.multiplyScalar(E),1-Math.exp(-t*9)),k.length()*t>=a?(e.position.copy(S),S=null,E=0,k.set(0,0,0)):e.position.addScaledVector(k,t);let l=P(e.position);e.position.x=l.x,e.position.z=l.z,d({turn:r,speed:E,acceleration:(E-c)/Math.max(t,.001)}),F(`Swim`)}else S=null,E=U.damp(E,0,10,t),k.multiplyScalar(Math.exp(-t*12)),d({turn:0,speed:0,acceleration:0}),F(`SwimIdle`)}function ee(){x=`land`,S=null,C=null,w=0,E=0,k.set(0,0,0),j=M=0}return{request:L,update:R,reset:ee,contains:N,hold:()=>{x===`swimming`&&(S=null,E=0)},leave(e){return x!==`land`&&(C=e,x===`approaching`?(ee(),e()):x===`swimming`&&I(),!0)},get inWater(){return[`swimming`,`entering`,`exiting`].includes(x)},get busy(){return x===`entering`||x===`exiting`},get moving(){return x===`swimming`&&E>.04},debug:()=>({phase:x,progress:w,speed:E,velocity:k.toArray(),heave:j,goal:S?.toArray()??null,entry:{land:_.land.toArray(),water:_.water.toArray()},waterY:v})}}var f_=16,p_=5,m_={grass:{color:new K(`#3b6a40`),opacity:.29,life:1.6},earth:{color:new K(`#98583e`),opacity:.53,life:2.2},wet:{color:new K(`#306f79`),opacity:.62,life:2}};function h_(){let e=document.createElement(`canvas`);e.width=32,e.height=32;let t=e.getContext(`2d`);t.fillStyle=`#ffffff`,t.beginPath(),t.moveTo(7,16),t.bezierCurveTo(4,11,8,7,12,11),t.bezierCurveTo(12,5,20,5,20,11),t.bezierCurveTo(24,7,28,11,25,16),t.bezierCurveTo(24,18,25,19,25,21),t.bezierCurveTo(25,28,7,28,7,21),t.bezierCurveTo(7,19,8,18,7,16),t.closePath(),t.fill();let n=new Ma(e);return n.colorSpace=He,n}function g_({scene:e,actor:t,model:n,clips:r,sampleSurface:i,isWater:a}){let o={LFoot:n.getObjectByName(`LFoot`),RFoot:n.getObjectByName(`RFoot`)},s=new Map(r.filter(e=>e.name===`Walk`||e.name===`Run`).map(e=>[e.name,{duration:e.duration,steps:e.events.flatMap(e=>{let t=e.feet?.find(e=>o[e])??e.foot;return e.event===`step`&&o[t]?[{time:e.time,paw:t}]:[]})}])),c=new Map,l=new ss(1,1),u=new Yi(new Float32Array(48),3);u.setUsage(Je),l.setAttribute(`instanceTiming`,u);let d={value:0},f=new bi({map:h_(),transparent:!0,alphaTest:.008,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2,toneMapped:!1});f.userData.outlineParameters={visible:!1},f.onBeforeCompile=e=>{e.uniforms.footprintClock=d,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec3 instanceTiming; uniform float footprintClock; varying float vPrintOpacity;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
float age = max(0.0, footprintClock - instanceTiming.x);
vPrintOpacity = instanceTiming.z * (1.0 - smoothstep(instanceTiming.y * 0.24, instanceTiming.y, age));`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vPrintOpacity;`).replace(`#include <alphatest_fragment>`,`diffuseColor.a *= vPrintOpacity;
#include <alphatest_fragment>`)};let p=new ra(l,f,f_);p.name=`Garden paw prints`,p.frustumCulled=!1,p.visible=!1,p.renderOrder=2,p.count=0,p.instanceMatrix.setUsage(Je),e.add(p);let m=Array(f_).fill(null),h=new G,g=new G,_=new G,v=new G,y=new on,b=new G(.152,.172,1),x=0,S=null,C=0,w=0,T=0,E=0;function D(e,n){if(t.getWorldDirection(g).setY(0).normalize(),o[e].getWorldPosition(h).addScaledVector(g,.018),a(h))return;let r=c.get(e);if(r&&Math.hypot(h.x-r.x,h.z-r.z)<.077)return;let s=i(n);if(!s||s.normal.y<.92)return;let l=d.value<T&&E>0,f=m_[l?`wet`:s.kind],{normal:x}=s;_.copy(g).addScaledVector(x,-g.dot(x)).normalize(),v.crossVectors(_,x).normalize();let S=n.point;h.y=S.y+(x.x*(S.x-h.x)+x.z*(S.z-h.z))/x.y,h.addScaledVector(x,.006),y.makeBasis(v,_,x).scale(b).setPosition(h);let D=C%f_;p.setMatrixAt(D,y),p.setColorAt(D,f.color),p.instanceMatrix.needsUpdate=!0,p.instanceColor.needsUpdate=!0;let O=l?f.opacity*(.7+.3*E/p_):f.opacity;l&&E--,u.setXYZ(D,d.value,f.life,O),u.needsUpdate=!0,m[D]={paw:e,kind:l?`wet`:s.kind,point:h.toArray(),born:d.value,life:f.life,strength:O},c.set(e,h.clone()),w=Math.max(w,d.value+f.life),C++,p.count=Math.min(C,f_),p.visible=!0}function O({name:e,time:t,action:n,distance:r,groundHit:i}){let a=s.get(e);if(a){if(n===S&&r>.001&&i){let e=t<x?t+a.duration:t;if(e-x>1e-7)for(let t of a.steps)(t.time<=x?t.time+a.duration:t.time)<=e+1e-7&&D(t.paw,i)}x=t,S=n}}function k(e){d.value+=e,d.value>=w&&(p.visible=!1)}return{update:k,step:O,stop(){S=null},wet(){E=p_,T=d.value+5},reset(){m.fill(null),p.visible=!1,p.count=0,c.clear(),C=0,S=null,T=0,E=0,w=0,d.value=0},debug:()=>({total:C,capacity:f_,wetTime:Math.max(0,T-d.value),marks:m.flatMap(e=>{if(!e)return[];let t=d.value-e.born;return t>=e.life?[]:[{...e,age:t,opacity:e.strength*(1-U.smoothstep(t,e.life*.24,e.life))}]})})}}function __(e){if(!e)return;let t=e.ownerDocument,n=t.defaultView,r=e=>e?.nodeType===1?e:e?.parentElement;function i(e){let t=r(e);if(!t)return null;if(t.isContentEditable)return t.closest(`[contenteditable]`);let n=t.closest(`textarea,input,select`);return n&&(n.tagName!==`INPUT`||[`text`,`search`,`url`,`email`,`tel`,`password`,`number`].includes(n.type))?n:t.closest(`[data-selectable]`)}let a=n=>{let i=r(n);return i&&(e.contains(i)||i===t.body||i===t.documentElement)};function o(){let t=n.getSelection();if(!t||t.isCollapsed)return;let r=i(t.anchorNode);if(!(r&&r===i(t.focusNode))){for(let n=0;n<t.rangeCount;n++)if(t.getRangeAt(n).intersectsNode(e)){t.removeAllRanges();return}}}function s(e){r(e.target)?.closest(`#scene`)||a(e.target)&&!i(e.target)&&e.preventDefault()}t.addEventListener(`selectstart`,s),t.addEventListener(`dragstart`,s),t.addEventListener(`pointerdown`,e=>{a(e.target)&&!i(e.target)&&o()},!0),t.addEventListener(`keydown`,e=>{!e.ctrlKey&&!e.metaKey||e.shiftKey||e.altKey||e.code!==`KeyA`&&e.key?.toLowerCase()!==`a`||!a(e.target)||i(e.target)||(e.preventDefault(),o())},!0),t.addEventListener(`selectionchange`,o),n.addEventListener(`focus`,o),o()}function v_(e,t){let n=new Map;e.traverse(e=>{if(e.isMesh)for(let t of[].concat(e.material)){if(!/eye/i.test(t.name)||!t.map||n.has(t.map.uuid))continue;let e=t.map;n.set(e.uuid,{texture:e,base:e.offset.clone()})}});let r=`open`;function i(e,i){r=t?.tracks?.[e]?.find(e=>i>=e.start&&i<e.end)?.state??`open`;let a=t?.states?.[r]?.uvOffset??[0,0];for(let{texture:e,base:t}of n.values())e.offset.set(t.x+a[0],t.y+a[1]),e.updateMatrix()}return{update:i,debug:()=>({state:r,maps:n.size,offsets:[...n.values()].map(({texture:e})=>e.offset.toArray())})}}function y_(e,t){let n=window.visualViewport,r=()=>document.body.classList.contains(`garden-active`),i=!1;function a(){let i=r()&&(n?.scale??1)>1.01;if(e.toggleAttribute(`data-page-zoomed`,i),t.hidden=!i,i){let e=n.offsetLeft+n.width/2,r=n.offsetTop+12/n.scale;t.style.transform=`translate(${e}px, ${r}px) scale(${1/n.scale}) translateX(-50%)`}}function o(t){t.type===`gesturestart`&&(i=e.hasAttribute(`data-page-zoomed`)),r()&&!i&&t.cancelable&&t.preventDefault()}return e.addEventListener(`gesturestart`,o,{passive:!1}),e.addEventListener(`gesturechange`,o,{passive:!1}),e.addEventListener(`gestureend`,()=>{i=!1}),n?.addEventListener(`resize`,a),n?.addEventListener(`scroll`,a),a}var b_=.52,x_=.76,S_=[[0,0,0,0,0,0,0,0,0,0],[.07,.12,.1,.008,0,.75,.14,0,0,-.11],[.16,.43,.4,.038,.02,1,.54,.02,0,-.17],[.28,1.26,.84,.015,.04,.62,.68,.09,0,.04],[.34,1.58,.97,0,.04,.25,.56,.13,0,.19],[.4,1.49,1,.012,.04,.13,.38,.17,0,.09],[b_,1.55,1,0,.05,.04,.25,.18,0,.055],[.66,1.55,1,0,.07,.03,.28,.24,0,.065]],C_=[...S_,[x_,1.48,1,0,.19,.03,.48,.55,.03,.13],[.94,1.19,1,0,.52,.02,.83,1,.18,.23],[1.1,.8,1,0,.67,.02,.85,.99,.64,.24],[1.26,.42,1,0,.64,.02,.57,.74,1,.12],[1.45,.1,1,0,.49,0,.22,.25,.43,-.06],[1.58,-.03,1,0,.28,0,.04,.04,.08,-.04],[1.72,0,1,0,0,0,0,0,0,0]],w_=[...S_,[x_,1.5,1,0,.13,.02,.5,.34,0,.1],[.89,1.18,1,0,.26,.01,.78,.61,0,.13],[1,.7,1,0,.55,0,.93,.92,.06,.1],[1.1,.3,1,0,.8,0,.94,1,.18,.05],[1.2,.16,1,0,.96,0,.91,.96,.34,.08],[1.32,.15,1,0,1,0,.76,.76,.68,.1],[1.45,.1,1,0,1,0,.47,.47,.93,.04],[1.55,.03,1,0,1,0,.25,.31,1,-.08],[1.68,-.02,1,0,.93,0,.07,.11,.45,-.1],[1.8,0,1,0,.84,0,.01,.02,.07,-.025],[1.9,0,1,0,.84,0,0,0,0,0]];function T_(e){return e.map((t,n)=>t.slice(1).map((r,i)=>{if(n===0||n===e.length-1)return 0;let a=e[n-1],o=e[n+1],s=(r-a[i+1])/(t[0]-a[0]),c=(o[i+1]-r)/(o[0]-t[0]);return s*c>0?2*s*c/(s+c):0}))}var E_=T_(C_),D_=T_(w_);function O_(e){let t=new ir().setFromObject(e,!0),n=t.getCenter(new G),r=t.getSize(new G),i=[],a=Math.max(r.x,r.z)/2,o=0,s=a,c=new G;if(e.traverse(e=>{let t=e.geometry?.getAttribute(`position`);if(!e.isMesh||!t)return;let r=Math.max(1,Math.floor(t.count/180));for(let l=0;l<t.count;l+=r)e.getVertexPosition(l,c).applyMatrix4(e.matrixWorld),a=Math.max(a,Math.hypot(c.x,c.z)),c.sub(n),o=Math.max(o,Math.hypot(c.x,c.z)),s=Math.max(s,c.length()),i.push(c.x,c.y,c.z)}),!i.length)throw Error(`访客模型缺少可用网格`);let l=Math.hypot(n.x,n.z);return a=Math.max(a+.055,o+l+.025),{bounds:t,center:n,size:r,points:new Float32Array(i),standingRadius:a,tumbleRadius:Math.max(a,s+l+.055)}}function k_(e,t,n,r,i=!1){let{center:a,size:o}=e,s=!!r?.groundRecovery,c=s?w_:C_,l=s?D_:E_,u=c.at(-1)[0],d=Math.atan2(t.x,t.z),f=t.x<-.05?-1:1,p=U.euclideanModulo(f*.3-d+Math.PI,2*Math.PI)-Math.PI,m=new G,h=new G,g=new Float32Array(C_[0].length-1),_=new G,v=new G,y=!1,b=0;function x(t,x){if(b=Math.min(u,b+x),b===u)return!1;let S=c.findIndex(e=>e[0]>b),C=c[S-1],w=c[S],T=w[0]-C[0],E=(b-C[0])/T,D=E*E*(3-2*E);for(let e=0;e<g.length;e++){let t=E*(1-E)*T*((1-E)*l[S-1][e]-E*l[S][e]);g[e]=U.lerp(C[e+1],w[e+1],D)+t}let[O,k,A,j,M,N,P,F,I]=g,L=i?O*.38:O,R=d+p*j,ee=Math.sin(R),te=Math.cos(R);m.set(te,0,-ee);let ne=r?.pose({age:b,axis:m,supportSide:f,flail:i?M*.55:M,tuck:N,brace:P,push:F,nod:I,quadruped:s})??e.points,re=Math.sin(L),ie=Math.cos(L);t.quaternion.setFromAxisAngle(m,L);let z=s?a.y*.84*re*U.smoothstep(b,.79,1.07):0;function ae(r){let i=1/0;for(let e=0;e<r.length;e+=3){let t=r[e]*ee+r[e+2]*te;i=Math.min(i,r[e+1]*ie-t*re)}h.copy(a).applyQuaternion(t.quaternion);let s=o.y*.003*Math.abs(re);t.position.set(a.x+n.x*k+ee*z,e.bounds.min.y+n.y*k+A*o.y+s-i,a.z+n.z*k+te*z).sub(h)}if(ae(ne),s&&b>=1.01){let e=U.smoothstep(b,1.02,1.22)*(1-U.smoothstep(b,1.38,1.64));t.position.y-=o.y*.063*e,r.groundRecovery(b,f,n,ae)}else if(!s&&!i&&b>=.75&&b<1.18&&r?.palmPosition(f,_)){if(b<.86||!y)v.copy(_),y=!0;else{let e=U.smoothstep(b,.86,.93)*(1-U.smoothstep(b,1.02,1.18));_.x=U.lerp(_.x,v.x,e),_.z=U.lerp(_.z,v.z,e);let t=r.bracePalm(f,_);t&&ae(t)}}return!0}return{update:x,get phase(){return b<b_?`falling`:b<x_?`down`:`getting-up`}}}var A_=new G(1,0,0),j_=e=>e.toLowerCase().replace(/[^a-z0-9]/g,``).replace(/^mixamorig/,``);function M_(e,t,n,{quadruped:r=!1}={}){let i=new Map,a=[],o=t.getWorldQuaternion(new Ft),s=new Ft,c=0;if(e.traverse(e=>{if(e.isBone&&i.set(j_(e.name),{node:e,position:e.position.clone(),rotation:e.quaternion.clone(),scale:e.scale.clone(),frame:e.getWorldQuaternion(s).invert().multiply(o).clone(),fromPosition:new G,fromRotation:new Ft,fromScale:new G}),!e.isMesh)return;let t=e.geometry.getAttribute(`position`)?.count??0,n=Math.max(1,Math.floor(t/(r?360:84)));a.push({node:e,count:t,stride:n}),c+=Math.ceil(t/n)}),!i.size)return null;let l=[...i.values()],u=[[1,`l`,`left`],[-1,`r`,`right`]].map(([e,t,n])=>{let r=(...e)=>e.map(e=>i.get(e+t)??i.get(t+e)??i.get(n+e)).find(Boolean);return{sign:e,upper:r(`upperarm`,`arm`),elbow:r(`forearm`,`lowerarm`),hand:r(`hand`,`wrist`),thigh:r(`thigh`,`upleg`,`upperleg`),shin:r(`shin`,`leg`,`lowerleg`),foot:r(`boot`,`foot`)}}),d=i.get(`chest`)??i.get(`spine2`),f=i.get(`head`),p=i.get(`tail1`),m=i.get(`tail2`),h=o.clone().invert(),g=r?u.flatMap(({sign:e,upper:t,elbow:n,hand:r,thigh:i,shin:a,foot:o})=>[{sign:e,fore:!0,start:t,joint:n,end:r},{sign:e,fore:!1,start:i,joint:a,end:o}]).filter(({start:e,joint:t,end:n})=>e&&t?.node.parent===e.node&&n?.node.parent===t.node).map(e=>({...e,rest:t.worldToLocal(e.end.node.getWorldPosition(new G)),restRotation:h.clone().multiply(e.end.node.getWorldQuaternion(new Ft)),target:new G,contact:0})):[],_=new Ft,v=new Ft,y=new G,b=new G,x=new G,S=new Float32Array(c*3),C=new G,w=new on,T=new on,E=new G,D=new G,O=new G,k=new G,A=new G,j=new Ft;function M(){for(let e of l)e.node.position.copy(e.position),e.node.quaternion.copy(e.rotation),e.node.scale.copy(e.scale)}function N(e,t,n){e&&(y.copy(t).applyQuaternion(e.frame),e.node.quaternion.multiply(_.setFromAxisAngle(y,n)))}function P(e,t,n){b.copy(t.node.position).applyQuaternion(e.node.quaternion).normalize(),_.setFromUnitVectors(b,x.normalize()),e.node.quaternion.premultiply(v.identity().slerp(_,n))}function F(e,t,n,r,i,a){e&&t&&t.node.parent===e.node&&(e.node.parent.getWorldQuaternion(s).invert().multiply(o),x.set(n,r,i).applyQuaternion(s),P(e,t,a))}function I(e,n,r){e.node.parent.updateWorldMatrix(!0,!1),w.copy(e.node.parent.matrixWorld).invert().multiply(t.matrixWorld),x.copy(r).applyMatrix4(w).sub(e.node.position),P(e,n,1)}function L(){t.updateMatrixWorld(!0),T.copy(t.matrixWorld).invert();let e=0;for(let{node:t,count:r,stride:i}of a){w.multiplyMatrices(T,t.matrixWorld);for(let a=0;a<r;a+=i)t.getVertexPosition(a,C).applyMatrix4(w).sub(n).toArray(S,e),e+=3}return S}function R(e,n,r,i){t.updateWorldMatrix(!0,!1),T.copy(t.matrixWorld).invert(),e.node.getWorldPosition(E).applyMatrix4(T),n.node.getWorldPosition(D).applyMatrix4(T),r.node.getWorldPosition(O).applyMatrix4(T);let a=D.distanceTo(E),o=O.distanceTo(D);k.copy(i).applyMatrix4(T.copy(t.matrix).invert()).sub(E);let s=k.length();if(s<1e-6||a<1e-6||o<1e-6)return!1;let c=U.clamp(s,Math.abs(a-o)+1e-5,.999*(a+o));if(k.divideScalar(s),A.subVectors(D,E),A.addScaledVector(k,-A.dot(k)),A.lengthSq()<1e-9)return!1;let l=(a**2-o**2+c**2)/(2*c),u=Math.sqrt(Math.max(0,a**2-l**2));return D.copy(E).addScaledVector(k,l).addScaledVector(A.normalize(),u),O.copy(E).addScaledVector(k,c),I(e,n,D),I(n,r,O),!0}function ee(e,n,r,i){for(let i of g){let a=i.sign===n,o=i.fore?a?1.01:1.13:a?1.26:1.39,s=U.smoothstep(e,o,o+.17),c=t.parent.worldToLocal(i.end.node.getWorldPosition(i.target));x.copy(i.rest).add(r),c.lerp(x,s),i.fore||(c.y+=.028*Math.sin(Math.PI*s));let l=c.y-x.y;i.contact=Math.max(s,1-U.smoothstep(l,0,.025)),c.y=Math.max(c.y,x.y)}for(let e=0;e<2;e++){for(let e of g)e.contact&&R(e.start,e.joint,e.end,e.target)&&(e.end.node.parent.getWorldQuaternion(s).invert().multiply(o),j.copy(s).multiply(e.restRotation),e.end.node.quaternion.slerp(j,e.contact));e===0&&i(L())}}return{begin(){t.parent.getWorldQuaternion(o);for(let e of l)e.fromPosition.copy(e.node.position),e.fromRotation.copy(e.node.quaternion),e.fromScale.copy(e.node.scale)},reset:M,groundRecovery:g.length===4?ee:null,palmPosition(e,n){let r=u[e>0?0:1].hand;return r?t.parent.worldToLocal(r.node.getWorldPosition(n)):null},bracePalm(e,t){let{upper:n,elbow:r,hand:i}=u[e>0?0:1];return!n||!r||!i||r.node.parent!==n.node||i.node.parent!==r.node?null:R(n,r,i,t)?L():null},pose({age:e,axis:n,supportSide:r,flail:i,tuck:a,brace:o,push:s,nod:c,quadruped:h}){if(t.position.set(0,0,0),t.quaternion.identity(),t.scale.setScalar(1),t.updateWorldMatrix(!0,!1),M(),N(d,A_,.21*o-.09*i),N(f,A_,c),N(f,n,-.19*i+.12*a-.12*s),h){let t=U.smoothstep(e,.71,1.03)*(1-U.smoothstep(e,1.4,1.82));N(p,A_,.23*t-.045*s),N(m,A_,.19*t),N(d,A_,.12*o-.11*s)}for(let{sign:e,upper:t,elbow:n,hand:c,thigh:l,shin:d,foot:f}of u){let u=e===r,p=a*(u?.85:1.14);N(l,A_,-.72*p),N(d,A_,1.08*p),N(f,A_,-.48*p+.12*i*e);let m=Math.min(1,.88*i+(u?.98:.72)*o+.14*a);F(t,n,e*(u?.48+.36*o:.56+.33*i-.32*o),-.61+(u?.43:.82)*i+.16*o,.2+.38*i+.32*o,m),F(n,c,e*(u?.27+.4*o:.24-.41*o),-.39+(u?.66:1)*i-.33*s,.39+.39*o,m)}let g=1-U.smoothstep(e,0,.115);if(g>0)for(let e of l)e.node.position.lerp(e.fromPosition,g),e.node.quaternion.slerp(e.fromRotation,g),e.node.scale.lerp(e.fromScale,g);return L()}}}var N_=`visitor:`,P_={water:{duration:.53,tilt:.26,slide:.074,hop:.052,message:`被水花吓了一跳！`},mud:{duration:.46,tilt:.19,slide:.052,hop:.038,message:`被泥团弄脏啦！`},iron:{duration:.55,tilt:.37,slide:0,hop:.09,message:`被击退！`}},F_=.24;function I_({scene:e,characters:t,playerId:n,host:r,actor:i,camera:a,preview:o,navigation:s,loadCharacter:c,portrait:l,feedback:u,onOpen:d,onLeave:f,onControl:p}){let m=document.getElementById(`garden-friends`),h=document.getElementById(`garden-invite`),g=document.getElementById(`garden-invite-panel`),_=document.getElementById(`garden-invite-list`),v=document.getElementById(`garden-invite-status`),y=document.getElementById(`garden-party`),b=document.getElementById(`garden-reserves`),x=document.getElementById(`garden-switch-hint`);x.hidden=Object.keys(t).length<2;let S=new Pn;S.name=`Garden visitors`,S.visible=!1,e.add(S);let C=new Map,w=new Map,T=new Map,E=new WeakMap,D=n,O=0,k=new G().fromArray(o.layout.spawn.position),A=new G(0,1,0),j=new ds(1,16,12),M=new bi({visible:!1}),N=s.settings.actorRadius;function P(){let e=C.size>1;y.toggleAttribute(`data-multiple`,e),b.hidden=!e,x.textContent=e?`点头像切换`:`邀请后可切换`;let t=document.activeElement,n=!1;for(let e of C.values()){let r=e.id===D;e.avatar.setAttribute(`aria-pressed`,String(r));let i=r?y:b;e.avatar.parentNode!==i&&(i.append(e.avatar),e.avatar===t&&(n=!0))}n&&t.focus({preventScroll:!0})}function F(e){let t=w.get(e);return t?.id===D?null:t}function I(){let e=[...C.values()].filter(e=>e.id!==D);s.setVisitorColliders(e.map(e=>{let t=e.reaction?.push;if(t)return{id:e.targetId,type:`capsule`,start:[t.start.x,t.start.z],end:[t.end.x,t.end.z],radius:e.radius};let n=e.knockdown?.landing??e.object.position;return{id:e.targetId,type:`circle`,center:[n.x,n.z],radius:e.knockdown?.footprint??e.radius}}))}function L(e,t=!1){let n=S.visible?i.position:k,r=[n,k],a=s.settings.actorRadius+s.settings.skin+e+.09;for(let i of t?[k]:[n,k])for(let t of[1.1,1.65,2.2])for(let n=0;n<8;n++){let c=n*Math.PI/4,l=i.x+t*Math.cos(c),u=i.z+t*Math.sin(c);if(r.some(e=>Math.hypot(l-e.x,u-e.z)<a)||!s.canFitVisitor([l,u],e))continue;let d=o.groundHeight(l,u);if(d!==null)return new G(l,d+.005,u)}return null}function R(e,r,i,o,s){let{gltf:c}=r,u=`${N_}${e}:${++O}`,d=new Pn;d.name=`Visitor_${e}`,d.visible=e!==D,d.position.copy(s),d.rotation.y=Math.atan2(a.position.x-s.x,a.position.z-s.z);let f=new Pn;f.add(i),d.add(f);let{bounds:m,center:h,size:g,standingRadius:_}=o,v=M_(i,f,h,{quadruped:e===`mudkip`}),y=h.clone();y.y=m.min.y+g.y*.58;let b=[];for(let[e,t,n,r]of[[.7,.49,.29,.46],[.29,.43,.29,.43]]){let i=new q(j,M);i.position.set(h.x,m.min.y+g.y*e,h.z),i.scale.set(g.x*t,g.y*n,g.z*r),i.userData.visitorId=u,i.visible=!1,f.add(i),b.push(i)}let x=new el(i),T=c.animations.find(e=>e.name===`Idle`),E=c.animations.find(t=>t.name===(e===n?`PetReaction`:`Wave`)),k=T&&x.clipAction(T),A=E&&x.clipAction(E).setLoop(2200,1),F=k;function L(e){e&&(F?.stop(),F=e.reset().play())}A&&(A.clampWhenFinished=!0,x.addEventListener(`finished`,e=>{e.action===A&&L(k)})),d.visible&&(L(A||k),x.update(0));let R=document.createElement(`button`),ee=t[e].name;R.type=`button`,R.className=`buddy-stamp`,R.setAttribute(`aria-label`,`操控 ${ee}`),R.title=`操控 ${ee}`,R.append(l(e)??ee),R.addEventListener(`click`,()=>p(e));let te={id:e,asset:r,avatar:R,object:d,guest:i,pivot:f,mixer:x,colliders:b,aim:y,body:o,targetId:u,name:ee,radius:e===n?N:Math.max(_,N),reaction:null,knockdown:null,knockdownRig:v,hits:0,lastHit:null,greet(){F===A&&A?.isRunning()||L(A)},idle(){F!==k&&L(k)},rest(){F?.stop(),F=null},get action(){return F?.getClip().name}};C.set(e,te),w.set(u,te),S.add(d),P(),d.visible&&I()}let ee=wf(r.gltf.scene);R(n,r,ee,O_(ee),k);function te(){let{object:e}=C.get(D);e.position.copy(i.position),e.quaternion.copy(i.quaternion)}function ne(){let{object:e}=C.get(D);return C.size<2||!s.isWalkable(e.position)?!1:(i.position.copy(e.position),i.quaternion.copy(e.quaternion),!0)}function re(e,t){let n=e.object.position,r=new G().subVectors(n,i.position).setY(0);r.lengthSq()<1e-6&&r.copy(t).setY(0),r.normalize();let a=ie(e,r),o=a?.landing??n.clone(),s=a?e.body.tumbleRadius:e.radius,c=-e.object.rotation.y,l=o.clone().sub(n).applyAxisAngle(A,c),u=(a?.direction??r).applyAxisAngle(A,c);e.knockdownRig?.begin(),e.rest(),e.reaction=null,e.knockdown={landing:o,footprint:s,motion:k_(e.body,u,l,e.knockdownRig,!a)},I()}function ie(e,t){let n=e.object.position,r=e.body.tumbleRadius,a=r+N+s.settings.skin;for(let c of[0,-.6,.6,-1.2,1.2]){let l=t.clone().applyAxisAngle(A,c),u=n.clone().addScaledVector(l,r-e.radius+.002);if(Math.hypot(i.position.x-u.x,i.position.z-u.z)<a||!s.canFitVisitor(u,r,e.targetId)||s.sweepVisitor(n,u,e.radius,e.targetId).blockedBy)continue;let d=o.groundHeight(u.x,u.z);if(d!==null)return u.y=d+.005,{landing:u,direction:l}}return null}function z(e,t){let n=e.object.position.clone(),{x:r,z:i}=s.sweepVisitor(n,n.clone().addScaledVector(t,.7),e.radius,e.targetId).position;return Math.hypot(r-n.x,i-n.z)<.01?null:{start:n,end:new G(r,(o.groundHeight(r,i)??n.y-.005)+.005,i)}}function ae(e){if(e===D&&(p(n),e===D))return!1;let{object:t,guest:r,mixer:i,targetId:a,avatar:o}=C.get(e);i.stopAllAction(),i.uncacheRoot(r);let s=new Set;r.traverse(e=>{e.isSkinnedMesh&&s.add(e.skeleton)});for(let e of s)e.dispose();return t.removeFromParent(),o.remove(),C.delete(e),w.delete(a),I(),P(),f(a),!0}function oe(e=!1){return!g.hidden&&(g.hidden=!0,h.setAttribute(`aria-expanded`,`false`),e&&h.focus(),!0)}for(let[e,r]of Object.entries(t)){if(e===n)continue;let t=document.createElement(`li`),i=document.createElement(`button`);i.type=`button`,i.className=`garden-friend-option`;let a=document.createElement(`span`);a.textContent=r.name;let o=document.createElement(`span`);o.className=`garden-friend-action`,i.append(l(e)??document.createElement(`span`),a,o),t.append(i),_.append(t);let s=!1;function d(){let t=C.has(e);o.textContent=s?`邀请中…`:t?`送别`:`邀请`,i.setAttribute(`aria-label`,`${t?`送别`:`邀请`} ${r.name}`),i.setAttribute(`aria-disabled`,String(s)),i.toggleAttribute(`data-visiting`,t)}function f(e){S.visible&&g.hidden?u(e):v.textContent=e}async function p(){if(!S.visible||s)return!1;if(C.has(e))return!0;s=!0,v.textContent=``,d();try{let t=await c(e),{gltf:n}=t,i=wf(n.scene),a=E.get(n.scene);a||(a=O_(i),E.set(n.scene,a));let o=L(Math.max(a.standingRadius,N));return o?(R(e,t,i,a,o),S.visible&&u(`${r.name} 来庭院做客啦！`),!0):(f(`附近没有空地，换个位置再邀请。`),!1)}catch(e){return f(`${r.name} 暂时没能到访，请再试一次。`),console.warn(e),!1}finally{s=!1,d()}}T.set(e,p),d(),i.addEventListener(`click`,()=>{!s&&S.visible&&(C.has(e)?ae(e)&&(d(),v.textContent=``,u(`和 ${r.name} 说再见啦。`)):p())})}return _.childElementCount||(v.textContent=`目前没有可邀请的角色。`),h.addEventListener(`click`,()=>{oe()||(d(),g.hidden=!1,h.setAttribute(`aria-expanded`,`true`))}),document.addEventListener(`pointerdown`,e=>{m.contains(e.target)||oe()}),{close:oe,invite:e=>T.get(e)?.()??!1,setView(e){!e&&S.visible&&s.isWalkable(i.position)&&te(),S.visible=e,e||oe()},get controlled(){return D},get controlledName(){return C.get(D).name},restorePlayer:ne,resetPoint(){return s.isWalkable(k)?k:L(N,!0)},control(e,t){let n=C.get(e);if(!S.visible||!n||e===D)return!1;if(n.knockdown)return u(`${n.name} 还在爬起来，等一下再切换。`),!1;let r=C.get(D),a=n.object.position,o=r.radius+N+s.settings.skin;return Math.hypot(i.position.x-a.x,i.position.z-a.z)<o-1e-4?(u(`先走开一点，再切换角色。`),!1):(t(n.asset),te(),r.object.visible=!0,r.idle(),r.mixer.update(0),n.object.visible=!1,n.rest(),n.reaction=null,n.pivot.position.set(0,0,0),n.pivot.quaternion.identity(),i.position.copy(a),i.quaternion.copy(n.object.quaternion),D=e,I(),P(),!0)},targetPoint(e){let t=F(e);return!S.visible||!t?null:(t.knockdown?t.pivot:t.object).localToWorld(t.aim.clone())},targetName(e){return F(e)?.name??null},boundaryPoint(e,t){let n=F(e);if(!S.visible||!n)return null;let r=n.knockdown?.landing??n.object.position,i=n.knockdown?.footprint??n.radius,a=new G(t.x-r.x,0,t.z-r.z).normalize().multiplyScalar(i-.035).add(r);return a.y=(n.knockdown?n.pivot:n.object).localToWorld(n.aim.clone()).y,a},intersect(e,t){if(!S.visible)return null;let n=t?[F(t)].filter(Boolean):C.values(),r=null;for(let t of n){if(t.id===D)continue;t.pivot.updateWorldMatrix(!0,!1);for(let e of t.colliders)e.updateWorldMatrix(!1,!1);let[n]=e.intersectObjects(t.colliders,!1);n&&(!r||n.distance<r.distance)&&(r=n)}return r},greet(e){let t=F(e);t&&!t.reaction&&!t.knockdown&&t.greet()},hit(e,t,n){let r=F(e);if(!S.visible||!r)return null;if(r.hits++,r.lastHit=t,r.knockdown)return`${r.name} 还在爬起来。`;let i=!!r.reaction?.push;if(t===`tackle`||t===`basketball`)return re(r,n),t===`basketball`?`篮球命中，${r.name} 倒地了！`:`${r.name} 被撞倒了！`;let a=n.clone().setY(0).normalize(),o=a.clone().applyAxisAngle(A,-r.object.rotation.y);r.idle();let s=t===`iron`?z(r,a):null;return r.reaction={age:0,profile:P_[t],impulse:o,push:s},(i||s)&&I(),t===`iron`&&!s?`${r.name} 挡住了冲势！`:`${r.name} ${P_[t].message}`},update(e){let t=!1;for(let n of C.values()){if(n.id===D)continue;if(n.knockdown){let{motion:r,landing:i}=n.knockdown;r.update(n.pivot,e)||(n.knockdownRig?.reset(),n.object.position.copy(i),n.pivot.position.set(0,0,0),n.pivot.quaternion.identity(),n.pivot.scale.setScalar(1),n.knockdown=null,n.idle(),n.mixer.update(0),t=!0);continue}n.mixer.update(e);let r=n.reaction;if(!r)continue;let{profile:i,impulse:a}=r;if(r.age+=e,r.push){let e=Math.min(1,r.age/F_);n.object.position.lerpVectors(r.push.start,r.push.end,1-(1-e)**2),e===1&&(r.push=null,t=!0)}let o=Math.min(1,r.age/i.duration),s=Math.sin(Math.PI*o)*(1-o),c=Math.sin(Math.PI*3*o)*(1-o),l=o<1?s*1.9:0,u=o<1?i.tilt*c:0;n.pivot.position.copy(a).multiplyScalar(i.slide*l),n.pivot.position.y=i.hop*l,n.pivot.rotation.set(a.z*u,0,-a.x*u),o===1&&(n.reaction=null)}t&&I()},debug(){return{visible:S.visible,visitors:[...C.values()].filter(e=>e.id!==n).map(e=>({id:e.id,targetId:e.targetId,position:(e.id===D?i.position:e.object.position).toArray(),radius:e.radius,action:e.action,hits:e.hits,lastHit:e.lastHit,reacting:!!(e.reaction||e.knockdown),knockdown:e.knockdown?.motion.phase??null,tilt:2*Math.acos(Math.min(1,Math.abs(e.pivot.quaternion.w)))}))}}}}__(document.getElementById(`app`));var Y=e=>document.getElementById(e),L_=document.body.dataset.pack===`game`,R_=`/assets/game/`,z_=`mudkip.garden.aimIntroSeen`,B_=!1;if(L_)try{B_=localStorage.getItem(z_)===`1`}catch{}var V_=Y(`garden-loading`),H_=matchMedia(`(pointer: coarse)`).matches,U_=L_?y_(Y(`app`),Y(`garden-zoom-notice`)):null;function W_(){let e=Y(`garden-load-progress`);e.value+=1,Y(`garden-load-percent`).textContent=`${Math.round(100*e.position)}%`}async function G_(e){let t=await e;return W_(),t}function K_(){V_&&(V_.hidden=!0,Y(`app`).inert=!1)}function q_(e){K_(),Y(`error`).hidden=!1,Y(`error`).textContent=`加载失败：${e.message}。请刷新页面重试。`,Y(`status`).textContent=`加载失败`}var J_={clips:[{name:`Idle`,loop:!0},{name:`Walk`,loop:!0},{name:`PetReaction`,loop:!1}],locomotion:{Walk:{speed:.13/.496}}},Y_=new Map(J_.clips.map(e=>[e.name,e])),X_=e=>J_.locomotion?.[e],Z_=Lg(),Q_=Vg(Z_),X,$_,ev,tv,nv,rv,iv,av,ov,sv,cv,lv,uv,dv,fv,pv,mv,hv,gv=null,_v=0,vv=0,yv=3,bv=7,xv=()=>uy===`Jump`||uy===`Rap`,Sv=()=>!!(cv?.active||uv?.active||fv?.active||pv?.active||xv()),Cv=null,wv=0,Tv=[`DanceA`,`DanceB`,`DanceC`],Ev=[],Dv=null,Ov=null,kv=0,Av={DanceA:0,DanceB:0,DanceC:0},jv=Y(`garden-dance`),Mv=Y(`garden-dance-effects`),Nv=new G,Pv,Fv=!1,Iv=!1,Lv=!1,Rv=null,zv=new Un;zv.background=new K(`#e6eee6`),zv.fog=new Hn(`#e6eee6`,5,12);var Bv;try{Bv=new bf({antialias:!0,alpha:!1})}catch(e){throw q_(e),e}Bv.setPixelRatio(Math.min(devicePixelRatio,H_?1.25:2)),Bv.outputColorSpace=He,Bv.toneMapping=4,Bv.toneMappingExposure=1.15,Bv.shadowMap.enabled=!0,Bv.shadowMap.type=1,Y(`scene`).appendChild(Bv.domElement),Bv.domElement.tabIndex=0,Bv.domElement.draggable=!1;var Vv=`庭院：点击草地移动，双指缩放，点击 ZUZU 或按跳舞键跳舞，点按水枪键喷水，拖动技能键瞄准`;Bv.domElement.setAttribute(`aria-label`,Vv);var Hv=36,Z=new wc(Hv,1,.05,40),Uv=e=>Math.tan(U.degToRad(e/2)),Wv=()=>Uv(Hv)/Uv(Z.fov),Gv=new Lp(Z,Bv.domElement);Gv.enableDamping=!0,Gv.dampingFactor=H_?.1:.05,Gv.enablePan=!1,Gv.touches.TWO=t.DOLLY_PAN,Gv.minDistance=1.9,Gv.maxDistance=6,Gv.minPolarAngle=.25,Gv.maxPolarAngle=Math.PI/2-.04;function Kv(){iv?.cancel(),Gv.enabled=!0,Gv.enableDamping=!1,Gv.update(),Gv.enableDamping=!0;let e=X?.view===`garden`;if(Gv.zoomToCursor=e&&H_,Z.fov=e?X.layout.camera.fov??Hv:Hv,Z.near=.05,Z.far=40,Z.clearViewOffset(),e){let e=Y(`garden-dock`).getBoundingClientRect(),t=e.width>0,n=t&&innerHeight>=innerWidth,r=n?8:t?12:Math.min(48,innerWidth*.06),i=U.lerp(72,36,U.smoothstep(innerHeight,650,1e3)),a=Math.min(i,innerHeight*.13),o=innerWidth-r,s=a,c=innerHeight-a;t&&(s=Math.max(...[`garden-score`,`garden-music`,`garden-menu-toggle`,`garden-invite`,`view-hint`].map(e=>Y(e).getBoundingClientRect().bottom))+12,innerWidth>innerHeight&&innerHeight<=500?(o=e.left-12,c=innerHeight-12):c=e.top-12);let l=Math.max(1,o-r),u=Math.max(1,c-s),d=r+l/2,f=s+u/2,p=new G().fromArray(X.layout.camera.position).sub(new G().fromArray(X.layout.camera.target));p.y*=n?1.15:.73,p.normalize();let m=new G().crossVectors(Z.up,p).normalize(),h=new G().crossVectors(p,m),g=X.bounds,_=g.getCenter(new G),v=X.fitPoints,y=new Float32Array(v.length),b=new G,x=0;for(let e=0;e<v.length;e+=3)b.set(v[e],v[e+1],v[e+2]).sub(_),y[e]=b.dot(m),y[e+1]=b.dot(h),y[e+2]=b.dot(p),x=Math.max(x,y[e+2]+.1);let S=innerHeight/(2*Uv(Z.fov)),C=g.getSize(new G).length(),w=x+C*S/Math.min(l,u),T=e=>{let t=1/0,n=-1/0,r=1/0,i=-1/0;for(let a=0;a<y.length;a+=3){let o=e-y[a+2],s=y[a]/o,c=y[a+1]/o;t=Math.min(t,s),n=Math.max(n,s),r=Math.min(r,c),i=Math.max(i,c)}return{width:(n-t)*S,height:(i-r)*S,centerX:innerWidth/2+(t+n)*S/2,centerY:innerHeight/2-(r+i)*S/2}};for(let e=0;e<15;e++){let e=(x+w)/2,t=T(e);t.width>l||t.height>u?x=e:w=e}let E=w*1.02,D=T(E),O=Wv();Gv.minDistance=5*O,Gv.maxDistance=Math.max(80*O,E*1.15),Z.near=.05*O,Z.far=Gv.maxDistance+Math.max(20,C*1.5),zv.fog.near=Z.far,zv.fog.far=Z.far+50*O,Gv.target.copy(_),Z.position.copy(_).addScaledVector(p,E),Z.setViewOffset(innerWidth,innerHeight,D.centerX-d,D.centerY-f,innerWidth,innerHeight),Gv.update();return}Gv.minDistance=1.9;let t=innerWidth<700;if(L_&&(zv.fog.near=5,zv.fog.far=12,Gv.maxDistance=6),L_&&Fv){if(Z.position.set(t?6.1:3.8,t?2.5:2,t?6.4:4.65),Gv.target.set(t?0:-.22,t?-1:.32,t?1.05:.9),Gv.maxDistance=10,t){let e=document.querySelector(`.view-hint`).getBoundingClientRect().bottom+10,t=document.querySelector(`.controls`).getBoundingClientRect().top-12,n=[[-.36,.13,-.46],[.36,.13,-.46],[0,.91,0],[0,.16,.4],[-.24,-.035,2.49],[.24,-.035,2.49]];function r(){Z.lookAt(Gv.target),Z.updateMatrixWorld();let e=1/0,t=-1/0,r=1/0,i=-1/0;for(let a of n){let n=new G().fromArray(a).project(Z),o=(1+n.x)*innerWidth/2,s=(1-n.y)*innerHeight/2;e=Math.min(e,o),t=Math.max(t,o),r=Math.min(r,s),i=Math.max(i,s)}return{left:e,right:t,upper:r,lower:i}}let i=r(),a=Math.max(1,(i.right-i.left)/Math.max(1,innerWidth-32),(i.lower-i.upper)/Math.max(68,t-e));Z.position.sub(Gv.target).multiplyScalar(a).add(Gv.target),Gv.maxDistance=Math.max(10,Z.position.distanceTo(Gv.target)*1.1);let{left:o,right:s,upper:c,lower:l}=r();Z.setViewOffset(innerWidth,innerHeight,(o+s-innerWidth)/2,(c+l-e-t)/2,innerWidth,innerHeight)}else{let e=Math.max(1,570/(innerWidth-440));Z.position.sub(Gv.target).multiplyScalar(e).add(Gv.target),Z.setViewOffset(innerWidth,innerHeight,-210,0,innerWidth,innerHeight)}Gv.update()}else if(L_&&t){let e=document.querySelector(`.view-hint`).getBoundingClientRect().bottom,t=(Lv?Math.max(e,Y(`enter-garden`).getBoundingClientRect().bottom):e)+12,n=document.querySelector(`.controls`).getBoundingClientRect().top-12,r=Math.max(120,n-t),i=innerHeight*(Lv?1.48:.95)/(2*Uv(Z.fov)*r);Gv.target.set(0,Lv?.7:.43,0),Z.position.copy(Gv.target).addScaledVector((Iv?new G(2.45,.85,2.55):new G(1.55,.85,3.25)).normalize(),i),Z.setViewOffset(innerWidth,innerHeight,0,innerHeight/2-(t+n)/2,innerWidth,innerHeight),Gv.maxDistance=Math.max(10,i*1.5),zv.fog.near=Math.max(5,i+1.5),zv.fog.far=zv.fog.near+7,Gv.update()}else L_&&Iv?(Z.position.set(2.45,1.25,2.55),Gv.target.set(-.3,.43,0),Gv.update()):(Z.position.set(t?L_?1.8:1.5:1.55,t?L_?1.25:1.4:1.35,t?L_?4.6:3.8:3.25),Gv.target.set(t?0:-.3,t?L_?-.3:.05:.45,0),Gv.update())}Kv(),Y(`reset-view`).addEventListener(`click`,Kv);var qv=new fc(`#eef9ff`,`#b5c498`,2.5);zv.add(qv);var Jv=new jc(`#fff1d9`,3.1);Jv.position.set(-2.5,4.5,3),Jv.castShadow=!0,Object.assign(Jv.shadow.camera,{left:-2.3,right:2.3,top:2.3,bottom:-2.3,near:.1,far:10});var Yv=H_?1024:2048;Jv.shadow.mapSize.set(Yv,Yv),Jv.shadow.normalBias=.012,Jv.shadow.bias=-15e-5,Jv.shadow.radius=3,zv.add(Jv);var Xv=new jc(`#e1efff`,1.1);Xv.position.set(3,2,-2),zv.add(Xv);var Zv=L_?gh({renderer:Bv,scene:zv,ambient:qv,key:Jv,fill:Xv,mobileGraphics:H_}):null,Qv=new q(new ss(200,200),new ws({color:`#d5dfca`,roughness:1}));Qv.rotation.x=-Math.PI/2,Qv.position.y=-.035,Qv.receiveShadow=!0,zv.add(Qv);var $v=new q(new za(1.53,1.55,.035,96),new ws({color:`#e6e8cb`,roughness:.95}));$v.position.y=-.0175,$v.receiveShadow=!0,zv.add($v);var ey=new q(new cs(1.46,1.485,96),new bi({color:`#b5c6a6`,side:2}));ey.rotation.x=-Math.PI/2,ey.position.y=.001,zv.add(ey);var ty=new Pn;for(let e=0;e<32;e++){let t=e/32*Math.PI*2,n=new q(new Ra(.008,6),new bi({color:`#c6d2b6`}));n.rotation.x=-Math.PI/2,n.position.set(Math.sin(t)*1.36,.0015,Math.cos(t)*1.36),ty.add(n)}zv.add(ty),Zv&&(Zv.apply(Qv,`stage`),Zv.apply($v,`stage`));var ny=new q(new cs(.065,.083,48),new bi({color:`#6c9c80`,transparent:!0,opacity:.8,side:2}));ny.rotation.x=-Math.PI/2,ny.visible=!1,zv.add(ny);var ry=L_?Oh(zv):null,Q=new Pn;Q.position.y=.005,zv.add(Q);var iy=new Pn;Q.add(iy);var ay={speed:0,bank:0,pitch:0},oy=1.25,sy,cy,ly,uy,dy=null,fy=`mudkip`,py=()=>fy===`mudkip`,my=new Map,hy=()=>my.has(`IronShoulder`),gy=()=>my.has(`Basketball`),_y=()=>my.has(`Jump`),vy=()=>my.has(`Rap`),yy=()=>hy()||gy(),by={dribble:`运球`,turn:`转身`,shoot:`投篮`,flight:`投篮`,recover:`收势`},xy=e=>Y_.get(`Jump`).events.find(t=>t.event===e).time,Sy=()=>uy===`Jump`?ly.time<xy(`jump_takeoff`)?`crouch`:ly.time<xy(`jump_land`)?`air`:`land`:`idle`,Cy={crouch:`蓄力`,air:`展翅`,land:`落地`},$={loaded:!1,paused:!1,rate:1,waterRate:1,movement:!1,travelGait:`Run`,transitions:0},wy={Idle:`待机 · 轻轻呼吸`,Walk:`走路 · 小步慢走`,PetReaction:`摸头 · 开心摇尾`};L_&&Object.assign(wy,{Walk:`走路 · 轻快小步`,Run:`小跑 · 蹬地轻跳`,Eat:`进食 · 低头咀嚼`,WaterCharge:`蓄力 · 稳住身体`,WaterShoot:`喷水 · 张嘴发射`,Swim:`游泳 · 划水摆尾`,SwimIdle:`漂浮 · 轻轻踩水`,DanceA:`跳舞 · 摇摇踏踏舞`,DanceB:`跳舞 · 扭扭尾巴舞`,DanceC:`庆祝 · 转圈庆祝舞`});var Ty=new nl,Ey=new W,Dy=new Xr(new G(0,1,0),0);function Oy(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.fillStyle=`#ee9e98`,t.beginPath(),t.moveTo(64,110),t.bezierCurveTo(45,94,12,67,12,40),t.bezierCurveTo(12,5,56,6,64,33),t.bezierCurveTo(72,6,116,5,116,40),t.bezierCurveTo(116,67,83,94,64,110),t.fill();let n=new Ma(e);return n.colorSpace=He,n}var ky=Oy(),Ay=[];function jy(){My();for(let e=0;e<3;e++){let t=new pi(new $r({map:ky,transparent:!0,depthWrite:!1,toneMapped:!1}));t.scale.setScalar(.1+e*.012);let n=Q.position.clone().add(new G((e-1)*.16,1.03+e*.045,.05));t.position.copy(n),zv.add(t),Ay.push({sprite:t,start:n,age:-e*.12})}}function My(){for(let e of Ay)zv.remove(e.sprite),e.sprite.material.dispose();Ay.length=0}function Ny({arrived:e=!1}={}){sv?.stop(),dy=null,nv?.cancel(),ay.speed=0,ay.bank=0,ay.pitch=0,e?ry?.arrive():ry?.hide(),ny.visible=!1}function Py(e,t){let n=Y(e);n&&n.textContent!==t&&(n.textContent=t)}function Fy(e){Py(`garden-feedback`,e)}function Iy(){return X?.view===`garden`&&Tv.includes(uy)}function Ly(){Mv&&!Mv.hidden&&(Pv.getWorldPosition(Nv),Nv.y+=.17,Nv.project(Z),Mv.style.visibility=Math.abs(Nv.z)<=1?``:`hidden`,Mv.style.transform=`translate(${(Nv.x+1)*innerWidth/2}px, ${(1-Nv.y)*innerHeight/2}px)`)}function Ry(){Ov=null}function zy(){if(!Ev.length){Ev=[...Tv];for(let e=Ev.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[Ev[e],Ev[t]]=[Ev[t],Ev[e]]}Ev[0]===Dv&&([Ev[0],Ev[1]]=[Ev[1],Ev[0]])}return Dv=Ev.shift(),Av[Dv]++,Dv}function By({completedMeal:e=!1}={}){if(!$.loaded||X?.view!==`garden`)return;Ry(),e&&cb(`Idle`,{completed:!0}),Uy(),iv?.cancel(),rv?.setMode(`move`),rv?.cancel(),Ny(),My();let t=zy();$.paused=!1,ub(),cb(t,{force:!0}),Fy({DanceA:`摇摇踏踏，跳支舞给你看～`,DanceB:`扭扭尾巴，跟上节奏～`,DanceC:`转个圈，开心庆祝一下！`}[t])}function Vy(){if(py()&&$.loaded&&X?.view===`garden`&&!Sv()){if(Z_.enable(),$.paused=!1,ub(),Iy())Fy(`这支还没跳完，等我一下～`);else if(Ov)Fy(Ov.kind===`meal`?`吃完这颗果子就跳给你看～`:`上岸后就跳给你看～`);else if(Cv?.phase===`eating`)Ov={kind:`meal`},Fy(`吃完这颗果子就跳给你看～`);else if(ov&&ov.debug().phase!==`land`){let e=Ov={kind:`shore`};Uy(),Fy(`上岸后就跳给你看～`),ov.leave(()=>{Ov===e&&X?.view===`garden`&&By()})}else By()}}function Hy(e){let t=Y(`garden-menu-toggle`);if(!t)return;e&&ev?.close(),t.setAttribute(`aria-expanded`,String(e));let n=e?`收起菜单`:`展开菜单`;t.setAttribute(`aria-label`,n),t.title=n,Y(`garden-menu-panel`).hidden=!e}document.addEventListener(`pointerdown`,e=>{Y(`garden-menu`)?.contains(e.target)||Hy(!1)});function Uy(){Cv=null}var Wy=new Ft,Gy=new G(0,1,0),Ky=new G,qy=U.degToRad(72);function Jy(e,t){let n=Math.atan2(Z.position.x-Q.position.x,Z.position.z-Q.position.z),r;if(t){let[e,,t]=Cv.center;r=Math.atan2(e-Q.position.x,t-Q.position.z)}else Ky.set(0,0,1).applyQuaternion(Q.quaternion),r=Math.atan2(Ky.x,Ky.z);let i=U.euclideanModulo(r-n+Math.PI,2*Math.PI)-Math.PI;return!t&&Math.abs(i)<=qy||(Wy.setFromAxisAngle(Gy,n+U.clamp(i,-qy,qy)),Q.quaternion.rotateTowards(Wy,(t?7:4.5)*e),Q.quaternion.angleTo(Wy)<.025)}function Yy(e=null){if(!py()||!$.loaded||X?.view!==`garden`||Sv())return;let t=e?X.orchard.groundFruit(e):X.basketInfo;if(!t||Cv?.phase===`eating`||Cv&&Cv.fruitId===e||(Ry(),$.paused=!1,ub(),ov?.leave(()=>Yy(e))))return;let n=new G().fromArray(t.center),r=e?.42:t.radius+tv.settings.actorRadius+tv.settings.skin+.07,i=Z.position.clone().sub(n).setY(0).normalize(),a=null;for(let e=0;e<32;e++){let t=e*Math.PI/16,o={x:n.x+Math.sin(t)*r,z:n.z+Math.cos(t)*r};if(!tv.isWalkable(o))continue;let s=tv.plan(Q.position,o);if(!s.ok||Math.hypot(s.goal.x-o.x,s.goal.z-o.z)>=.025)continue;let c=((n.x-o.x)*i.x+(n.z-o.z)*i.z)/r,l=s.length+2.5*Math.max(0,.5-c);(!a||l<a.score)&&(a={goal:o,score:l})}if(!a){Fy(`暂时走不到果子旁，换个位置再试试。`);return}let o=mb(new G(a.goal.x,0,a.goal.z));if(!o?.ok)return;let s=Y_.get(`Eat`).events.find(e=>e.event===`food_consume`)?.time??.7;Cv={phase:o.waypoints.length?`walking`:`settling`,wait:0,center:t.center,fruitId:e,biteTime:s},Fy(e?`这就过去吃${t.name}！`:`去果篮旁吃一颗果子，等我一下。`)}function Xy(e){if(!my.has(e)||!X_(e))return;$.travelGait=e;let t=Y(`garden-gait`);t&&(t.setAttribute(`aria-checked`,String(e===`Run`)),t.title=e===`Run`?`切换为轻快走`:`切换为小跑`),dy&&X?.view===`garden`&&!ov?.inWater&&cb(e)}function Zy(){Z_.stop(),Ry(),ov?.reset(),cv?.reset(),uv?.reset(),fv?.cancel(),pv?.cancel(),xv()&&cb(`Idle`,{immediate:!0}),gv=null,sv?.reset(),Uy(),iv?.cancel(),rv?.cancel(),Ny(),My(),iy.rotation.set(0,0,0),iy.position.set(0,0,0)}function Qy(e=!1){if(Zy(),X?.pondWater.reset(),X?.meadow.reset(),X?.windChime?.reset(),X?.view===`garden`){if(!e||!ev.restorePlayer()){let e=ev.resetPoint();if(!e){Fy(`起点附近没有空地。`);return}Q.position.copy(e),Q.position.y=(X.groundHeight(Q.position.x,Q.position.z)??Q.position.y)+.005,Q.rotation.set(0,X.layout.spawn.yaw,0)}Fy(py()?`回到起点啦，按跳舞键一起玩吧～`:`回到起点啦，点草地继续散步。`)}else Q.position.set(0,.005,0),Q.quaternion.identity()}function $y(e,t){let n=new el(e.scene),r=new Map(t.clips.map(e=>[e.name,e])),i=new Map(e.animations.map(e=>[e.name,n.clipAction(e)]));for(let e of r.keys())if(!i.has(e))throw Error(`GLB 缺少 ${e} 动作`);return n.addEventListener(`finished`,e=>{if(e.action!==ly||e.action.loop!==2200)return;if(uy===`Eat`&&Ov?.kind===`meal`&&X?.view===`garden`){By({completedMeal:!0});return}let t=Iy();t&&kv++,cb(ov?.inWater?`SwimIdle`:`Idle`,{completed:!0}),t&&Fy(`跳完啦，再按一次跳舞键吧～`)}),{model:e.scene,mixer:n,actions:i,metadata:t,clipSettings:r}}var eb=()=>gy()?`待机时挥手 · 动作可逐帧查看。`:`十二段动作 · 可以逐帧查看。`,tb={mudkip:`mudkip-avatar-user-v1.png`,dawn:`dawn-avatar.png`};function nb(e){let t=tb[e];if(!t)return null;let n=document.createElement(`img`);return n.src=`/assets/ui/${t}`,n.alt=``,n.draggable=!1,n}function rb(e){return/^(Hood_shell|Round_ear|Romper_torso|Rounded_boot|Sleeve_&_mitten|Bill_|Bow_(knot|wing)|Backpack_strap|Satchel_(body|flap)$)/.test(e.name)}function ib(e,t){let n=new Map;async function r(n){let r=e[n],[i,a]=await Promise.all([t.loadAsync(R_+r.model),fetch(R_+r.animations).then(e=>{if(!e.ok)throw Error(`动画配置加载失败`);return e.json()})]);return i.scene.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),Zv.apply(i.scene,`character`,{outlineMesh:n===`dawn`?rb:void 0}),{gltf:i,config:a}}return e=>(n.has(e)||n.set(e,r(e).catch(t=>{throw n.delete(e),t})),n.get(e))}function ab(e,t){let n=Y(`character-roster`),r=new Map([[`mudkip`,{model:sy,mixer:cy,actions:my,metadata:J_,clipSettings:Y_}]]),i=new Map,a=`mudkip`,o=0,s=!1;for(let[t,r]of Object.entries(e)){let e=document.createElement(`button`);e.type=`button`,e.className=`character-avatar`,e.title=r.name,e.setAttribute(`aria-label`,r.name),e.setAttribute(`aria-pressed`,String(t===fy)),e.append(nb(t)??r.name),e.addEventListener(`click`,()=>d(t)),i.set(t,e),n.append(e)}function c(e){s=e,n.setAttribute(`aria-busy`,String(s));for(let e of i.values())e.setAttribute(`aria-disabled`,String(s))}function l(t){if(t!==fy){cy.stopAllAction(),iy.remove(sy),{model:sy,mixer:cy,actions:my,metadata:J_,clipSettings:Y_}=r.get(t),iy.add(sy),fy=t;for(let[e,n]of i)n.setAttribute(`aria-pressed`,String(e===t));uy=ly=null,Y(`resource-title`).textContent=`和 ${e[t].name} 玩一会儿`;for(let e of document.querySelectorAll(`[data-clip]`))e.hidden=!my.has(e.dataset.clip)}}function u(e,{gltf:t,config:n}){r.has(e)||r.set(e,$y({...t,scene:wf(t.scene)},n))}async function d(n){if(!i.has(n)||n===a||X.view!==`stage`||s)return;let d=++o,f=e[n];c(!0),Y(`resource-hint`).textContent=`正在加载 ${f.name}…`;try{if(!r.has(n)){let e=await t(n);if(d!==o)return;u(n,e)}if(d!==o)return;a=n,l(n),Fv=!1,Qy(),$.paused=!1,ub(),cb(`Idle`,{immediate:!0,force:!0}),pb(),Y(`resource-hint`).textContent=eb(),Kv()}catch(e){if(d!==o)return;Y(`resource-hint`).textContent=`${f.name} 加载失败，请重新选择。`,console.warn(e)}finally{d===o&&c(!1)}}return{select:d,activateGarden(e,t){u(e,t),l(e)},setView(e,t){o++,c(!1),l(e?t:a)}}}function ob(e){let t=e&&!py();Y(`garden-score`).hidden=!e||t&&!yy();for(let e of[`garden-water-slot`,`garden-mud`,`garden-tackle`])Y(e).hidden=t;jv.hidden=t,Y(`garden-iron`).hidden=!t||!hy(),Y(`garden-basketball`).hidden=!t||!gy(),Y(`garden-jump`).hidden=!t||!_y(),Y(`garden-rap`).hidden=!t||!vy(),Y(`garden-gait`).hidden=t&&!(my.has(`Run`)&&X_(`Run`)&&my.has(`Walk`)&&X_(`Walk`)),Py(`garden-speaker`,ev.controlledName),Bv.domElement.setAttribute(`aria-label`,t?`庭院：点击草地移动 ${ev.controlledName}，点击角色或练习靶瞄准`:Vv),e?Bv.domElement.setAttribute(`aria-describedby`,`garden-lock-hint`):Bv.domElement.removeAttribute(`aria-describedby`),X.setPlayerModel(sy)}function sb(e){if(!$.loaded||X.view!==`garden`||e===ev.controlled)return;function t(){X.view===`garden`&&ev.control(e,t=>{rv.setMode(`move`),Zy(),py()&&Rv?.update(`Idle`,0),$_.activateGarden(e,t)})&&(ob(!0),cb(`Idle`,{immediate:!0,force:!0}),Fy(`现在操控 ${ev.controlledName}，点草地移动。`),jb())}py()&&ov.inWater?($.paused=!1,ub(),ov.leave(t),Fy(`上岸后就切换角色。`)):t()}function cb(e,{immediate:t=!1,force:n=!1,completed:r=!1,gameShot:i=null}={}){if(!$.loaded||!n&&e===uy)return;Cv?.phase===`eating`&&e!==`Eat`&&(r&&uy===`Eat`&&(wv++,Fy(`吃完啦！可以接着点下一颗。`)),Uy()),rv?.restorePose(),cv?.restorePose(),uv?.restorePose();let a=my.get(e);if(!a)throw Error(`Missing animation: ${e}`);let o=ly;for(let e of my.values())e!==o&&e!==a&&e.stop();let s=e===`WaterShoot`||e===`WaterCharge`,c=!!Y_.get(e).loop&&!(X?.view===`garden`&&Tv.includes(e));a.setLoop(c?je:Ae,c?1/0:1),a.clampWhenFinished=!c;let l=L_&&(X_(e)||X_(uy))?J_.locomotionTransition??.12:.22;if(a.stopFading().reset().setEffectiveWeight(1).setEffectiveTimeScale(X_(e)?$.rate:s?$.waterRate:1).play(),o&&o!==a&&!t)o.stopFading().fadeOut(l),a.fadeIn(l);else if(t)for(let e of my.values())e!==a&&e.stop();if(ly=a,uy=e,Q_.setClip(Y_.get(e),r),Q_.active&&Z_.enable(),e!==`Basketball`&&!pv?.active&&pv?.hide(),e!==`Jump`&&mv?.hide(),e===`Rap`?hv??=jg(zv,Z_):hv?.hide(),Mv){let t=Iy();Mv.hidden=!t,jv.setAttribute(`aria-busy`,String(t||X?.view===`garden`&&e===`Wave`))}py()&&Rv?.update(e,0);let u=Iv;if(Iv=e===`DanceB`,X?.onActionChange(e,{completed:r,gameShot:i}),rv?.onActionChange(e,{completed:r}),L_&&X?.view===`stage`){let t=Lv;Lv=e===`Jump`||r&&Lv;let n=u!==Iv&&!r||t!==Lv&&innerWidth<700;s&&!Fv?(Fv=!0,Kv()):!s&&!r&&Fv?(Fv=!1,Kv()):n&&Kv()}let d=L_&&(Fv||s);document.querySelector(`label[for="rate"]`).textContent=d?`喷水播放速度`:L_?`走路 / 小跑步频`:`走路步频`,Object.assign(Y(`rate`),d?{min:.25,max:1,step:.25,value:$.waterRate}:{min:.5,max:1.8,step:.1,value:$.rate}),Y(`rate-value`).value=`${(d?$.waterRate:$.rate).toFixed(2).replace(/0$/,``)}×`,$.transitions++,Y(`clip-label`).textContent=Y_.get(e).label??wy[e],Y(`duration`).textContent=`${a.getClip().duration.toFixed(1)} s`,Y(`playback-note`).textContent=c?`循环播放`:`结束后回到待机`,document.querySelectorAll(`[data-clip]`).forEach(t=>t.setAttribute(`aria-pressed`,String(t.dataset.clip===e)))}function lb(){$.loaded&&(my.has(`Wave`)?(Ny(),$.paused=!1,ub(),cb(`Wave`,{force:!0})):my.has(`PetReaction`)&&(Ry(),ov?.busy||(ov?.hold(),Ny(),Uy(),iv?.cancel(),rv?.cancel(),$.paused=!1,ub(),cb(`PetReaction`,{force:!0}),jy())))}function ub(){Z_.setPaused($.paused),$.paused?(iv?.cancel(),hv?.stopSound()):(Q_.active||Sv())&&Z_.enable(),Mv?.toggleAttribute(`data-paused`,$.paused);let e=$.paused?`继续`:`暂停`;Y(`pause`).textContent=e,Y(`garden-pause`)&&(Y(`garden-pause`).setAttribute(`aria-label`,e),Y(`garden-pause`).title=e,Y(`garden-pause`).setAttribute(`aria-pressed`,String($.paused)),Y(`garden-pause-icon`).setAttribute(`href`,$.paused?`#ui-play`:`#ui-pause`),Y(`garden-pause-caption`).textContent=e)}document.querySelectorAll(`[data-clip]`).forEach(e=>e.addEventListener(`click`,()=>{e.dataset.clip===`PetReaction`?lb():([`Walk`,`Run`].includes(e.dataset.clip)&&Xy(e.dataset.clip),Ny(),My(),$.paused=!1,ub(),cb(e.dataset.clip,{force:!0}))})),Y(`pause`).addEventListener(`click`,()=>{$.paused=!$.paused,ub()}),Y(`rate`).addEventListener(`input`,e=>{L_&&(Fv||uy===`WaterShoot`||uy===`WaterCharge`)?($.waterRate=Number(e.target.value),Y(`rate-value`).value=`${$.waterRate.toFixed(2).replace(/0$/,``)}×`,my.get(`WaterShoot`)?.setEffectiveTimeScale($.waterRate),my.get(`WaterCharge`)?.setEffectiveTimeScale($.waterRate)):($.rate=Number(e.target.value),Y(`rate-value`).value=`${$.rate.toFixed(1)}×`,my.get(`Walk`)?.setEffectiveTimeScale($.rate),my.get(`Run`)?.setEffectiveTimeScale($.rate))}),Y(`movement`).addEventListener(`change`,e=>{$.movement=e.target.checked,Ny(),$.movement&&X?.view!==`garden`?mb(new G(Q.position.x>0?-.6:.6,0,-.3)):cb(`Idle`)});function db(e){if(ly){rv?.restorePose(),$.paused=!0,ub();for(let e of my.values())e!==ly&&e.stop();ly.stopFading().setEffectiveWeight(1),fb(U.clamp(e,0,ly.getClip().duration-1e-7)),Q_.seek(ly.time),py()&&Rv?.update(uy,ly.time),sy.updateMatrixWorld(!0),pb()}}function fb(e){ly.time=e,cy.update(0)}Y(`timeline`).addEventListener(`input`,e=>db(Number(e.target.value)/1e3*ly.getClip().duration));function pb(){if(!ly)return;let e=ly.getClip().duration;Y(`timeline`).value=Math.round(ly.time/e*1e3),Y(`time`).value=`${ly.time.toFixed(2)} / ${e.toFixed(2)} s`}function mb(e,{fromSwimming:t=!1}={}){if($.loaded&&!Sv()){if(Ry(),X?.view===`garden`){if(Uy(),gv=null,iv?.cancel(),rv?.setMode(`move`),rv?.cancel(),jb(),py()&&!t){let t=ov?.request(X.pondWater.swimTarget(e));if(t?.handled)return $.paused=!1,ub(),t.plan}let n=my.has($.travelGait)&&X_($.travelGait)?$.travelGait:`Walk`;if(!my.has(n)||!X_(n))return;let r=nv.start(Q.position,e);return r.ok?r.waypoints.length?(dy=new G(r.goal.x,0,r.goal.z),ry.show(new G(r.goal.x,(X.groundHeight(r.goal.x,r.goal.z)??0)+.025,r.goal.z)),Fy(r.adjusted?`那里有障碍，会停在附近的草地。`:r.waypoints.length>1?`找到路线啦，绕过去看看。`:`正在过去啦…`),$.paused=!1,ub(),My(),cb(n),r):(Ny(),cb(`Idle`),r):(Ny(),Fy(`这里暂时走不过去，试试旁边的草地。`),cb(`Idle`),r)}dy=e.clone(),dy.y=0,dy.length()>1.05&&dy.setLength(1.05),ny.position.copy(dy),ny.position.y=.003,ry?ry.show(ny.position):ny.visible=!0,ny.scale.setScalar(1),$.paused=!1,ub(),My(),cb(uy===`Run`?`Run`:`Walk`)}}var hb;function gb(e){let t=Bv.domElement.getBoundingClientRect();Ey.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),Z.updateMatrixWorld(),Ty.setFromCamera(Ey,Z)}function _b(e,t){return e&&(!t||e.distance<=t.distance+.01)}function vb(e){X?.orchard.setHover(e),Bv.domElement.style.cursor=e?`pointer`:``}function yb(){Gv.enabled=!iv?.debug().active}Bv.domElement.addEventListener(`pointerdown`,()=>{yb(),vb()},!0),Bv.domElement.addEventListener(`pointerdown`,e=>{hb=e.isPrimary?{x:e.clientX,y:e.clientY,button:e.button,id:e.pointerId}:null}),Bv.domElement.addEventListener(`pointermove`,e=>{if(hb?.id===e.pointerId&&!hb.dragged&&Math.hypot(e.clientX-hb.x,e.clientY-hb.y)>6&&(hb.dragged=!0),hb||e.buttons||e.pointerType!==`mouse`||X?.view!==`garden`)return;if(gb(e),!X.orchard.nearbyFruit(Ty.ray)&&!ev.intersect(Ty)){vb();return}let t=X.pickAim(Ty),n=_b((t?.fruit||t?.visitor)&&Ty.intersectObject(sy,!0)[0],t);vb(n?null:t?.fruit?.id),t?.visitor&&!n&&(Bv.domElement.style.cursor=`pointer`)}),Bv.domElement.addEventListener(`pointerleave`,()=>vb()),Bv.domElement.addEventListener(`pointercancel`,()=>{hb=null,vb()}),Bv.domElement.addEventListener(`lostpointercapture`,()=>{hb=null}),Bv.domElement.addEventListener(`pointerup`,e=>{let t=hb;if(hb=null,!t||t.dragged||t.id!==e.pointerId||t.button!==0||Math.hypot(e.clientX-t.x,e.clientY-t.y)>6||!$.loaded)return;gb(e);let n=Ty.intersectObject(sy,!0);if(X?.view===`garden`){if(Sv())return;let t=e.pointerType===`touch`?32*Uv(Z.fov)/Bv.domElement.clientHeight:0,r=X.pickAim(Ty,{radiusPerMeter:t});if(_b(n[0],r)){Vy();return}if(!py()){if(r?.visitor&&ev.greet(r.targetId),r?.targetId&&yy()&&(r.visitor||X.layout.targets.some(e=>e.id===r.targetId))){Cb(r.point,r.targetId);return}if(r?.visitor)return;$.movement&&r&&mb(r.point);return}if(r?.fruit){Yy(r.fruit.id);return}if(r?.basket){Yy();return}if(r?.targetId){Cb(r.point,r.targetId);return}$.movement&&r&&mb(r.point)}else if(n.length)lb();else if($.movement){let e=new G;Ty.ray.intersectPlane(Dy,e)&&e.length()<1.5&&mb(e)}});function bb(){let e=new G(0,0,1).applyQuaternion(Q.quaternion);e.y=0,e.normalize();let t=Q.position.clone().addScaledVector(e,2.8);return t.y=(X.groundHeight(t.x,t.z)??Q.position.y-.005)+.02,t}function xb(){if(!py()||!rv||X.view!==`garden`||$.paused||ov?.busy||Sv()||rv.debug().phase!==`idle`)return!1;Z_.enable(),rv.debug().targetId||rv.aimAt(bb(),null,{silent:!0});let e=rv.fire($.paused);return jb(),e}function Sb(){if(!B_){B_=!0;try{localStorage.setItem(z_,`1`)}catch{}}}function Cb(e,t){if(e&&!Sv()){if(py()){if(Ry(),rv.aimAt(e,t)){t&&Sb();let e=ev.targetName(t);e&&ev.greet(t),(e||X.layout.targets.some(e=>e.id===t))&&Fy(`可喷水或掷泥，靠近可撞击。`)}jb()}else{if(!yy())return;gv=t,t&&Sb(),Ny(),cb(`Idle`),Fy(hy()&&gy()?`靠近可用铁山靠，也可以投篮球。`:`点技能键施放。`),jb()}}}function wb(e){if(!py()||!e||X.view!==`garden`||$.paused||Sv()||ov.inWater||iv?.debug().active||e===uv&&!uv.ready)return!1;let t=rv.debug();if(t.phase!==`idle`)return!1;let n=ev.targetName(t.targetId)||X.layout.targets.some(e=>e.id===t.targetId)?t.targetId:null;Z_.enable(),Ry(),Uy(),ov.reset(),Ny(),My(),rv.restorePose(),cb(`Idle`,{immediate:!0});let r=e.start(n?X.targetPoint(n):null,n);return r&&e===uv&&Fy(`用前爪刨一点泥…`),jb(),r}var Tb=()=>wb(cv),Eb=()=>wb(uv);function Db(){if(X?.view!==`garden`||!hy()||$.paused||Sv()||!fv?.ready)return!1;let e=gv?X.targetPoint(gv):null;return fv.start(e)?(Ny(),My(),cb(`IronShoulder`,{immediate:!0,force:!0}),jb(),!0):!1}function Ob(){if(X?.view!==`garden`||!gy()||$.paused||Sv()||!pv?.ready)return!1;let e=gv?X.targetPoint(gv):null;return pv.start(e,gv)?(Ny(),My(),cb(`Basketball`,{immediate:!0,force:!0}),jb(),!0):!1}function kb(){return X?.view!==`garden`||!_y()||$.paused||Sv()||_v>0?!1:(Ny(),My(),_v=yv,cb(`Jump`,{immediate:!0,force:!0}),Fy(`起跳展翅！`),jb(),!0)}function Ab(){return X?.view!==`garden`||!vy()||$.paused||Sv()||vv>0?!1:(Ny(),My(),vv=bv,cb(`Rap`,{immediate:!0,force:!0}),Fy(`Yo！跟着节拍摇起来。`),jb(),!0)}function jb(){if(!rv)return;let e=rv.debug(),t=X.view===`garden`&&py(),n=e.phase!==`idle`,r=X.view===`garden`&&hy(),i=X.view===`garden`&&gy(),a=X.view===`garden`&&_y(),o=X.view===`garden`&&vy(),s=r||i,c=!!cv?.active,l=Sv(),u=iv?.debug()??{active:!1,dragging:!1,offset:[0,0]},d=X.basketInfo;if(Y(`garden-basket`).hidden=!t||!d,t&&d){let e=new G().fromArray(d.center).project(Z);Y(`garden-basket`).hidden=e.z>1||Math.abs(e.x)>1||Math.abs(e.y)>1,Y(`garden-basket`).style.left=`${(e.x+1)*innerWidth/2}px`,Y(`garden-basket`).style.top=`${(1-e.y)*innerHeight/2}px`,Y(`garden-basket`).setAttribute(`aria-pressed`,String(!!Cv&&!Cv.fruitId)),Y(`garden-basket`).dataset.paused=String($.paused)}let f=!t||$.paused||n||l||!!ov?.inWater||u.active;Y(`garden-fire`).disabled=!t||$.paused||n||l||!!ov?.busy,jv.disabled!==l&&(jv.disabled=l),Y(`garden-tackle`).disabled=f,Y(`garden-mud`).disabled=f||!uv?.ready;let p=Y(`garden-iron`);if(p.disabled=!r||$.paused||l||!fv?.ready,r){let{phase:e}=fv.debug();p.setAttribute(`aria-busy`,String(fv.active)),p.style.setProperty(`--cooldown`,`${(1-fv.cooldownRatio)*360}deg`),Py(`iron-title`,e===`charge`?`蓄力`:e===`dash`?`靠击`:e===`recover`?`收势`:fv.ready?`铁山靠`:`${Math.ceil(fv.cooldown)}s`)}let m=Y(`garden-basketball`);m.disabled=!i||$.paused||l||!pv?.ready,i&&(m.setAttribute(`aria-busy`,String(pv.active)),m.style.setProperty(`--cooldown`,`${(1-pv.cooldownRatio)*360}deg`),Py(`basketball-title`,by[pv.phase]??(pv.ready?`篮球`:`${Math.ceil(pv.cooldown)}s`)));let h=Y(`garden-jump`);h.disabled=!a||$.paused||l||_v>0,a&&(h.setAttribute(`aria-busy`,String(uy===`Jump`)),h.style.setProperty(`--cooldown`,`${(1-_v/yv)*360}deg`),Py(`jump-title`,Cy[Sy()]??(_v>0?`${Math.ceil(_v)}s`:`跳`)));let g=Y(`garden-rap`);g.disabled=!o||$.paused||l||vv>0,o&&(g.setAttribute(`aria-busy`,String(uy===`Rap`)),g.style.setProperty(`--cooldown`,`${(1-vv/bv)*360}deg`),Py(`rap-title`,uy===`Rap`?`踩拍`:vv>0?`${Math.ceil(vv)}s`:`RAP`)),Y(`garden-tackle`).dataset.busy=String(c),Y(`garden-tackle`).setAttribute(`aria-busy`,String(c)),Y(`garden-mud`).dataset.busy=String(!uv?.ready),Y(`garden-mud`).setAttribute(`aria-busy`,String(!uv?.ready)),Y(`garden-fire`).dataset.busy=String(n),Y(`garden-fire`).dataset.aiming=String(u.active),Y(`garden-fire`).setAttribute(`aria-busy`,String(n)),Py(`skill-title`,e.phase===`turning`?`转身`:e.phase===`shooting`?ly.time<.33?`蓄水`:ly.time<.66?`喷水`:`恢复`:`水枪`),Py(`skill-caption`,$.paused?`已暂停`:ov?.busy?ov.debug().phase===`entering`?`正在入水…`:`正在上岸…`:u.active?`松手喷水`:n?`准备下一发…`:`点按喷水 · 拖动瞄准`);let _=Math.hypot(...u.offset),v=_>0?Math.min(_,22)/_:0;Y(`skill-thumb`).style.transform=`translate(${u.offset[0]*v}px,${u.offset[1]*v}px)`,Y(`skill-stick`).hidden=!u.active,Y(`garden-fire`).style.setProperty(`--cooldown`,`${n&&e.phase===`shooting`?Math.min(1,ly.time)*360:360}deg`),e.phase===`shooting`&&!e.lastContact&&Fy(ly.time<.33?`闭嘴蓄水…`:ly.time<.66?`水枪发射！`:`水流正在飞向目标…`),Py(`garden-hit-count`,String(X.targetFeedback.debug().total).padStart(2,`0`));let y=s?gv:t?e.targetId:null,b=y?rv.targetName(y):null;Y(`garden-lock-hint`).hidden=!b,Py(`garden-lock-label`,b?`已锁定 ${b}`:``),Y(`garden-aim-intro`).hidden=B_||!(t||s)||l||n||u.active||!!dy;let x=s&&gv?X.targetPoint(gv):t&&e.point?new G().fromArray(e.point):null;if(Y(`aim-reticle`).hidden=!x||l,x&&!l){let t=x.project(Z),a=t.z<1&&t.z>-1&&Math.abs(t.x)<1&&Math.abs(t.y)<1;Y(`aim-reticle`).hidden=!a,Y(`aim-reticle`).style.left=`${(t.x+1)*innerWidth/2}px`,Y(`aim-reticle`).style.top=`${(1-t.y)*innerHeight/2}px`;let o=s?r&&fv.ready||i&&pv.ready:e.assessment?.reachable&&e.assessment?.clear;Y(`aim-reticle`).dataset.ready=String(o),Y(`aim-reticle`).dataset.firing=String(n);let c=u.active?`松手喷水`:e.assessment?.blocked?`被遮挡`:e.assessment?.reachable?e.targetId?`可命中`:`已瞄准`:`距离太远`;Py(`aim-label`,s?`${b??`练习靶`} · 已锁定`:`${e.targetName} · ${c}`)}let S=X.targetFeedback.debug(),C=S.targets.filter(e=>e.hits&&e.age<.75).sort((e,t)=>e.age-t.age)[0];Y(`garden-score`).dataset.hit=String(!!C&&C.age<.3);let w=C?.kind===`water`&&C.age>=.1;if(Y(`hit-pop`).hidden=!t||!w,t&&w){let e=X.targetPoint(C.id).add(new G(0,.25+C.age*.5,0)).project(Z);Y(`hit-pop`).style.left=`${(e.x+1)*innerWidth/2}px`,Y(`hit-pop`).style.top=`${(1-e.y)*innerHeight/2}px`,Y(`hit-pop`).style.opacity=String(1-U.smoothstep(C.age,.45,.75))}for(let e of document.querySelectorAll(`[data-aim-target]`)){let n=e.dataset.aimTarget,r=X.targetPoint(n).project(Z);e.hidden=!(t||s)||r.z>1||Math.abs(r.x)>1||Math.abs(r.y)>1,e.style.left=`${(r.x+1)*innerWidth/2}px`,e.style.top=`${(1-r.y)*innerHeight/2}px`,e.setAttribute(`aria-pressed`,String(y===n)),e.dataset.hits=S.targets.find(e=>e.id===n).hits}}window.addEventListener(`keydown`,e=>{if(!(X?.view!==`garden`||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))&&(e.code!==`Space`||e.target.tagName!==`BUTTON`||e.target.id===`garden-fire`)&&(e.code===`Space`&&py()&&(e.preventDefault(),!e.repeat&&!iv?.debug().active&&xb()),e.code===`Space`&&hy()&&(e.preventDefault(),e.repeat||Db()),e.code===`KeyB`&&gy()&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&(e.preventDefault(),e.repeat||Ob()),e.code===`KeyJ`&&_y()&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&(e.preventDefault(),e.repeat||kb()),e.code===`KeyR`&&vy()&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&(e.preventDefault(),e.repeat||Ab()),e.code===`Escape`)){if(ev?.close(!0))return;Hy(!1),iv?.cancel(),Sv()||(rv.setMode(`move`),gv=null),jb()}});var Mb={ready:!1,version:`187`,errors:[]};window.__mudkipTest={diagnostics:Mb,renderStats:()=>({geometries:Bv.info.memory.geometries,textures:Bv.info.memory.textures,programs:Bv.info.programs.length}),camera:()=>({enabled:Gv.enabled,position:Z.position.toArray(),target:Gv.target.toArray()}),facing:()=>Q.getWorldDirection(new G).toArray(),footprints:()=>sv?.debug(),meadow:()=>X?.meadow.debug(),friends:()=>ev?.debug(),windChime:()=>X?.windChime?.debug(),expression:()=>Rv?.debug(),dance:()=>({playing:Iy(),pending:Ov?.kind??null,last:Dv,counts:{...Av},completed:kv}),characterPoint:()=>sy.getObjectByName(`Head`).getWorldPosition(new G).add(new G(0,.14,0)).toArray(),tailPose:()=>[`Hips`,`Tail1`,`Tail2`].map(e=>({name:e,position:sy.getObjectByName(e).getWorldPosition(new G).toArray(),quaternion:sy.getObjectByName(e).getWorldQuaternion(new Ft).toArray()})),resources:()=>X?{...X.stats,...X.debug()}:null,foodContact:()=>X?.foodContact(),basket:()=>({info:X?.basketInfo,interaction:Cv,mealsEaten:wv}),orchard:()=>({fruits:X?.orchard.debug(),mealType:X?.foodType}),swimming:()=>ov?.debug(),waves:()=>X?.pondWater.sampleWaves(),disturbPond:(e,t,n=1)=>X?.pondWater.ripple(new G(e,0,t),n),splashPond:(e,t)=>X?.pondWater.splash(new G(e,0,t)),viewPond:()=>{let e=X.pondWater.info;Z.clearViewOffset(),Gv.target.set(e.center[0],.1,e.center[1]);let t=Wv();Z.position.copy(Gv.target).addScaledVector(new G(1.9,2.4,3.2),t),Gv.minDistance=1.9*t,Gv.update()},style:()=>Zv?.debug(),poseState:()=>({head:sy.getObjectByName(`Head`).quaternion.toArray(),headWorld:sy.getObjectByName(`Head`).getWorldQuaternion(new Ft).toArray(),jaw:sy.getObjectByName(`Jaw`).quaternion.toArray(),mouth:sy.getObjectByName(`Socket_Mouth`).getWorldPosition(new G).toArray(),feet:[`LHand`,`RHand`,`LFoot`,`RFoot`].map(e=>({name:e,position:sy.getObjectByName(e).getWorldPosition(new G).toArray()}))}),combat:()=>rv?{...rv.debug(),feedback:X.targetFeedback.debug()}:null,skill:()=>iv?.debug(),tackle:()=>cv?{...cv.debug(),effects:lv.debug()}:null,iron:()=>fv?{...fv.debug(),effects:lv.debug(),targetId:gv}:null,basketball:()=>pv?{...pv.debug(),targetId:gv}:null,jump:()=>({phase:Sy(),cooldown:_v,lettering:mv?.debug()??null}),rap:()=>({active:uy===`Rap`,cooldown:vv,glasses:!1,pointing:!1,sound:!1,...hv?.debug()}),skillAudio:Z_.debug,mud:()=>uv?{...uv.debug(),effects:dv.debug()}:null,castTackle:Tb,castMud:Eb,castSkill:xb,aimAt:(e,t,n,r=null)=>rv?.aimAt(new G(e,t,n),r),aimTarget:e=>rv?.aimAt(X.targetPoint(e),e),fire:()=>rv?.fire($.paused),destination:()=>{let e=0;return zv.traverse(t=>{t.isLine&&e++}),ry?{...ry.debug(),routeLines:e}:null},navigation:()=>tv?{...tv.debug(),...nv.debug(),ground:X.groundHeight(Q.position.x,Q.position.z)}:null,snapshot:()=>({...$,character:fy,speed:ay.speed,visualLean:[iy.rotation.x,iy.rotation.z],clip:uy,time:ly?.time,position:Q.position.toArray(),target:dy?.toArray()??null,actions:[...my].map(([e,t])=>({name:e,weight:t.isScheduled()?t.getEffectiveWeight():0,scheduled:t.isScheduled(),running:t.isRunning()})),hearts:Ay.length}),play:(e,t=!1)=>{Ry(),Uy(),Ny(),My(),$.paused=!1,ub(),cb(e,{immediate:t,force:!0})},seek:db,moveTo:(e,t)=>($.movement=!0,Y(`movement`).checked=!0,mb(new G(e,0,t))),pause:e=>{$.paused=e,ub()},resetPosition:Qy,advanceMovement:e=>{let t=[],n=Math.max(0,Math.min(60,e));for(;n>1e-7;){let e=Math.min(n,.05);Fb(e),t.push(Q.position.toArray()),n-=e}return Q.updateMatrixWorld(!0),X&&ly&&X.update(uy,ly.time,{paused:$.paused}),t},project:(e,t,n)=>{Z.updateMatrixWorld();let r=new G(e,t,n).project(Z);return{x:(r.x+1)/2*innerWidth,y:(1-r.y)/2*innerHeight}},sample:(e,t)=>{iy.rotation.set(0,0,0),cb(e,{force:!0,immediate:!0}),db(t);let n=[],r=1/0;sy.traverse(e=>{if(e.isSkinnedMesh){e.skeleton.update();let t=e.geometry.attributes.position;for(let i=0;i<t.count;i++){let a=new G().fromBufferAttribute(t,i);e.applyBoneTransform(i,a),n.push(...a),r=Math.min(r,a.applyMatrix4(e.matrixWorld).y)}}});let i=sy.getObjectByName(`MotionRoot`);return{positions:n,minimumWorldY:r,jawQuaternion:sy.getObjectByName(`Jaw`).quaternion.toArray(),rootPosition:i.getWorldPosition(new G).sub(Q.position).toArray(),rootQuaternion:i.getWorldQuaternion(new Ft).toArray(),feet:[`LHand`,`RHand`,`LFoot`,`RFoot`].map(e=>({name:e,position:sy.getObjectByName(e).getWorldPosition(new G).toArray(),quaternion:sy.getObjectByName(e).getWorldQuaternion(new Ft).toArray()}))}}};try{let e,t,n=new Ef;if(L_){let r=fetch(R_+`characters/mudkip/animations.json`).then(e=>{if(!e.ok)throw Error(`动画配置加载失败`);return e.json()});[e,J_,t]=await Promise.all([G_(n.loadAsync(R_+`characters/mudkip/mudkip.glb`)),G_(r),fh(R_,G_)])}else e=await n.loadAsync(`/assets/mudkip.glb`);sy=e.scene,iy.add(sy),Zv?.apply(sy,`character`),L_&&(Rv=v_(sy,J_.expressions),Pv=sy.getObjectByName(`Head`));let r=[],i=new Set,a=new Set;sy.traverse(e=>{if(e.isMesh){e.castShadow=!0,e.receiveShadow=!1,r.push(e);for(let t of Array.isArray(e.material)?e.material:[e.material])t.map&&i.add(t.map)}e.isSkinnedMesh&&a.add(e.skeleton)}),{mixer:cy,actions:my,clipSettings:Y_}=$y(e,J_);for(let e of Object.keys(wy))if(!my.has(e))throw Error(`GLB 缺少 ${e} 动作`);if(L_){if(X=await ph({renderer:Bv,scene:zv,actor:Q,model:sy,root:R_,assets:t,metadata:J_,stageColliders:[$v,Qv],toon:Zv,heartTexture:ky,mobileGraphics:H_,onWaterContact:e=>{Z_.play(`waterSplash`,{volume:e.targetId?1:.78}),rv?.contact(e)}}),sv=g_({scene:zv,actor:Q,model:sy,clips:J_.clips,sampleSurface:X.footprintSurface,isWater:e=>ov?.contains(e)}),rv=Ah({actor:Q,model:sy,preview:X,onStop:()=>{Ry(),Uy(),ov?.hold(),Ny(),My(),$.loaded&&cb(ov?.inWater?`SwimIdle`:`Idle`)},onShoot:(e,t)=>{Ny(),My(),cb(`WaterShoot`,{force:!0,gameShot:{point:e,id:t}})},onMessage:Fy,onHit:(e,t)=>{let n=new G().fromArray(t??[0,0,1]);if(e.startsWith(`visitor:`))return ev.hit(e,`water`,n)??`水花落下了。`;let r=X.orchard.knockDown(e);if(r)return`${r}掉下来啦，点地上的果子就能吃！`;X.targetFeedback.hit(e,{direction:t?n.setY(0).normalize():void 0})}}),tv=Eh(X.layout,{extraColliders:X.extraColliders}),nv=Dh(tv),lv=qg(X.environment),fv=Zh({actor:Q,navigation:tv,groundHeight:X.groundHeight,targetContact:X.tackleTargetContact,effects:lv,onPhase:e=>{e===`idle`?(iy.position.x=0,cb(`Idle`,{immediate:!0})):(e===`blocked`&&Z_.play(`targetHit`,{rate:.79,volume:.83}),e===`miss`&&Z_.play(`skid`,{rate:.83}),Fy({charge:`侧身抖肩蓄力…`,dash:`铁山靠！`,blocked:`碰到障碍，收住了。`,miss:`冲空了。`}[e]))},onHit:(e,t,n)=>{if(Z_.play(`ironHit`),e.startsWith(`visitor:`)){let r=ev.hit(e,`iron`,t);r&&Fy(`${r}物理伤害 ${n}`)}else X.targetFeedback.hit(e,{kind:`tackle`,direction:t,hold:.055}),Fy(`铁山靠命中练习靶，物理伤害 ${n}。`)}}),pv=gg({scene:zv,actor:Q,groundHeight:X.groundHeight,resolveTarget:X.targetPoint,trace:X.traceGardenProjectile,onPhase:e=>{let t={dribble:`交叉运球…`,turn:`转身收球！`,flight:`投篮！`}[e];t&&Fy(t)},onContact:(e,t,n)=>{let r=t.clone().setY(0).normalize(),i=e.targetId;if((i||e.kind===`surface`)&&Z_.play(`ballImpact`,{volume:i?1:.72}),e.kind===`ground`&&Z_.play(`ballBounce`,{rate:.86,volume:.63}),e.kind===`water`&&Z_.play(`waterSplash`,{rate:.77}),i){if(lv.hit(e.point,r),i.startsWith(`visitor:`)){let e=ev.hit(i,`basketball`,r);e&&Fy(e)}else X.targetFeedback.hit(i,{kind:`basketball`,direction:r}),Fy(`篮球命中练习靶！`)}else e.kind===`water`?(X.pondWater.ripple(e.point,.44),Fy(`篮球落进水里了。`)):e.kind===`surface`?Fy(`篮球被障碍挡住了。`):Fy(n?`目标太远，走近一点再投。`:e.kind===`ground`?`篮球落地了。`:`投空了。`)}}),cv=Vh({actor:Q,pivot:iy,model:sy,navigation:tv,groundHeight:X.groundHeight,targetContact:X.tackleTargetContact,effects:lv,onPhase:(e,t,n)=>{e===`windup`&&(Z_.play(`tackleGather`),Fy(`压低身体，准备撞击…`)),e===`dash`&&(Z_.play(`tackleRush`),Fy(`蹬地，扑击！`)),e===`hitstop`&&!ev.targetName(n)&&Fy(`砰！撞中靶子了。`),e===`recover`&&(Z_.play(t===`blocked`?`targetHit`:t===`miss`?`skid`:`landing`,{volume:t===`hit`?.55:.86}),cb(`Idle`),t===`miss`&&Fy(`急刹！走近靶子再试一次。`),t===`blocked`&&Fy(`前面有障碍，刹住啦。`))},onHit:(e,t,n)=>{if(Z_.play(e.startsWith(`visitor:`)?`bodyHit`:`targetHit`),e.startsWith(`visitor:`)){let n=ev.hit(e,`tackle`,t);n&&Fy(n)}else X.targetFeedback.hit(e,{kind:`tackle`,direction:t,hold:n})}}),dv=l_(X.environment),uv=n_({actor:Q,pivot:iy,model:sy,groundHeight:X.groundHeight,trace:X.traceGardenProjectile,resolveTarget:X.targetPoint,effects:{...dv,scrape:(e,t)=>{dv.scrape(e,t),Z_.play(`mudScrape`)}},onRelease:()=>{Z_.play(`mudThrow`),Fy(`把泥团甩出去！`)},onContact:(e,t)=>{if(Z_.play(e.kind===`water`?`waterSplash`:`mudSplat`,{volume:e.targetId?1:.81}),e.targetId?.startsWith(`visitor:`)){let n=ev.hit(e.targetId,`mud`,t);n&&Fy(n)}else e.targetId?(X.targetFeedback.hit(e.targetId,{kind:`mud`,direction:t.clone().setY(0).normalize()}),Fy(`啪嗒！泥团粘在靶上了。`)):e.kind===`water`?(X.pondWater.ripple(e.point,.35),Fy(`泥团落进水里了。`)):Fy(`泥团落下了。`)}}),ov=d_({actor:Q,pond:X.pondWater.info,walkTo:e=>mb(e,{fromSwimming:!0}),isWalking:()=>nv.active,groundHeight:X.groundHeight,onClip:e=>cb(e),canAnimate:()=>![`PetReaction`,`WaterShoot`,`Eat`,...Tv].includes(uy),stroke:()=>uy===`Swim`?ly.time/ly.getClip().duration:0,onMotion:({turn:e,speed:t,acceleration:n})=>{ay.bank=-U.clamp(e,-1,1)*.065,ay.pitch=U.clamp(n,-1,1)*.015,my.get(`Swim`)?.setEffectiveTimeScale(.75+.25*Math.min(t/.65,1))},onStop:()=>{Ny(),Uy(),rv.cancel(),ay.bank=ay.pitch=0},onMessage:Fy,onSplash:(e,t)=>X.pondWater.splash(e,t),onLand:()=>sv.wet()}),!tv.isWalkable([X.layout.spawn.position[0],X.layout.spawn.position[2]]))throw Error(`庭院出生点位于障碍内`);Zv.excludeUnstyled();let r=t.manifest.characters??{mudkip:{name:`ZUZU`}},i=ib(r,n);$_=ab(r,i),ev=I_({scene:zv,characters:r,playerId:fy,actor:Q,camera:Z,preview:X,navigation:tv,loadCharacter:i,host:{gltf:e,config:J_},onControl:sb,portrait:nb,feedback:Fy,onOpen:()=>Hy(!1),onLeave:e=>{gv===e&&(gv=null);let t=rv.debug();t.targetId===e&&t.phase!==`shooting`&&rv.cancel(),jb()}}),X.setVisitors(ev);let a=Y(`garden-bgm`),o=Y(`garden-music`);a.volume=.25;let s=()=>{o.setAttribute(`aria-pressed`,String(!a.paused))};a.addEventListener(`playing`,s),a.addEventListener(`pause`,s),o.addEventListener(`click`,async()=>{if(!a.paused)a.pause();else try{a.error&&a.load(),await a.play()}catch(e){if(e.name===`AbortError`)return;a.pause(),s(),Fy(`音乐播放失败，点开关重试。`)}});let c=`双指缩放 · 拖动旋转`;H_&&(Y(`view-hint`).textContent=c),Y(`scene-view`).disabled=!1,Y(`scene-view`).addEventListener(`change`,e=>{let t=e.target.value===`garden`;o.hidden=!t,Y(`garden-menu`).hidden=!t,Y(`garden-dock`).hidden=!t,t||a.pause(),Hy(!1),vb(),iv.cancel(),Gv.enabled=!0,t&&($.waterRate=1),rv.setMode(`move`),rv.cancel(),document.body.classList.toggle(`garden-active`,t),U_(),X.setView(e.target.value),ev.setView(t),$_.setView(t,ev.controlled),ob(t),Fv=!1,Lv=!1,Ny(),My(),cb(`Idle`,{immediate:!0}),$.paused=!1,ub(),$.movement=t,Y(`movement`).checked=t,Y(`movement`).disabled=!1,[$v,ey,ty].forEach(e=>e.visible=!t),Qv.position.y=t?-.54:-.035,Qy(t),t&&Fy(py()?`点果树再按水枪，试试把果子打下来！`:`现在操控 ${ev.controlledName}，点草地移动。`);let n=t?7:2.3;Object.assign(Jv.shadow.camera,{left:-n,right:n,top:n,bottom:-n,far:t?30:10}),Jv.shadow.camera.updateProjectionMatrix(),Jv.position.set(t?-6:-2.5,t?12:4.5,t?8:3),Zv.setView(t?`garden`:`stage`),Y(`resource-hint`).textContent=t?`点果树瞄准 · 用水枪打落果子。`:eb(),Y(`view-hint`).textContent=t?H_?`点地移动 · 双指缩放`:`点草地移动 · 拖动旋转`:H_?c:`拖动旋转 · 滚轮缩放`,Kv(),jb()});let l=e=>{Y(`scene-view`).value=e,Y(`scene-view`).dispatchEvent(new Event(`change`))};Y(`enter-garden`).addEventListener(`click`,()=>l(`garden`)),Y(`enter-garden`).disabled=!1,Y(`garden-back`).addEventListener(`click`,()=>l(`stage`)),Y(`garden-menu-toggle`).addEventListener(`click`,()=>Hy(Y(`garden-menu-toggle`).getAttribute(`aria-expanded`)!==`true`)),Y(`garden-reset`).addEventListener(`click`,()=>{Qy(),$.paused=!1,ub(),cb(`Idle`)}),Y(`garden-camera`).addEventListener(`click`,Kv);let u=Y(`garden-recenter`),d=()=>{Hy(!1),Kv()};u.addEventListener(`click`,d),u.addEventListener(`touchend`,e=>{let t=e.changedTouches[0];!e.touches.length&&t&&u.contains(document.elementFromPoint(t.clientX,t.clientY))&&(e.preventDefault(),d())},{passive:!1}),Y(`garden-pause`).addEventListener(`click`,()=>{$.paused=!$.paused,ub(),jb()}),Y(`garden-gait`).addEventListener(`click`,()=>Xy($.travelGait===`Run`?`Walk`:`Run`)),jv.addEventListener(`click`,Vy),document.querySelectorAll(`[data-aim-target]`).forEach(e=>e.addEventListener(`click`,()=>{Cb(X.targetPoint(e.dataset.aimTarget),e.dataset.aimTarget),Bv.domElement.focus({preventScroll:!0})})),Y(`garden-basket`).addEventListener(`click`,()=>{Yy(),Bv.domElement.focus({preventScroll:!0})}),Y(`garden-tackle`).addEventListener(`click`,Tb),Y(`garden-mud`).addEventListener(`click`,Eb),Y(`garden-iron`).addEventListener(`click`,Db),Y(`garden-basketball`).addEventListener(`click`,Ob),Y(`garden-jump`).addEventListener(`click`,kb),Y(`garden-rap`).addEventListener(`click`,Ab),iv=u_({button:Y(`garden-fire`),canStart:()=>py()&&X.view===`garden`&&!$.paused&&!ov.busy&&!Sv()&&rv.debug().phase===`idle`,onStart:()=>{Ry(),av=rv.debug(),Gv.enabled=!1,av.targetId||rv.aimAt(bb(),null,{silent:!0}),jb()},onDrag:({x:e,y:t})=>{let n=new G;Z.getWorldDirection(n),n.y=0,n.normalize();let r=new G().crossVectors(n,new G(0,1,0)).normalize().multiplyScalar(e).addScaledVector(n,-t).normalize(),i=Q.position.clone().addScaledVector(r,2.8);i.y=(X.groundHeight(i.x,i.z)??Q.position.y-.005)+.02,rv.aimAt(i,null,{predict:!1,silent:!0}),Fy(`拖动调整方向，松手喷水。`),jb()},onRelease:()=>{Gv.enabled=!0,Z_.enable(),rv.fire($.paused),jb()},onCancel:()=>{Gv.enabled=!0,av?.point?rv.aimAt(new G().fromArray(av.point),av.targetId,{silent:!0}):(rv.setMode(`move`),rv.cancel()),Fy(`已取消瞄准。`),jb()},onTap:xb}),Y(`garden-clear-hits`).addEventListener(`click`,()=>{X.targetFeedback.reset(),Fy(`命中次数清零啦，再来一轮。`),jb()})}$.loaded=!0,Mb.clips=e.animations.map(e=>({name:e.name,duration:e.duration,tracks:e.tracks.length})),Mb.meshes=r.length,Mb.bones=[...a].map(e=>e.bones.length),Mb.textures=[...i].map(e=>({name:e.name,width:e.image.width,height:e.image.height,colorSpace:e.colorSpace})),document.querySelectorAll(`.controls button, .controls input`).forEach(e=>e.disabled=!1),Y(`status`).textContent=L_?`小伙伴准备好啦`:`GLB 已加载 · ${e.animations.length} 段动作 · ${[...a][0].bones.length} 根骨骼`,cb(`Idle`,{immediate:!0});let o=new URLSearchParams(location.search),s=o.get(`character`),c=o.get(`clip`),l=s===`dawn`&&!c,u=o.get(`scene`)??(l||location.pathname===`/`?`garden`:`stage`);L_&&u===`garden`&&(Y(`scene-view`).value=`garden`,Y(`scene-view`).dispatchEvent(new Event(`change`)),s&&await ev.invite(s)&&sb(s)),L_&&X.view===`stage`&&s&&await $_.select(s),L_&&X.view===`stage`&&my.has(c)&&cb(c,{immediate:!0}),L_&&W_()}catch(e){$.loaded=!1,Mb.errors.push(e.message),q_(e),console.error(e)}function Nb(){Bv.setSize(innerWidth,innerHeight),Z.aspect=innerWidth/innerHeight,Z.updateProjectionMatrix(),L_&&Kv()}window.addEventListener(`resize`,Nb),Nb();var Pb;function Fb(e){let t=X?.view===`garden`;if(cy&&!$.paused){if(t&&py()&&sv?.update(e),rv?.restorePose(),cv?.restorePose(),uv?.restorePose(),t&&py()&&(Sv()||rv.update(e),cv.update(e),uv.update(e)),t&&(_v=Math.max(0,_v-e),vv=Math.max(0,vv-e),fv?.update(e),pv?.update(e,sy,fb,()=>cb(`Idle`,{immediate:!0}))),t&&fv?.active?(fb(fv.time),iy.position.x=fv.lunge):pv?.playing||cy.update(cv?.holding?0:e),Q_.active&&Q_.update(ly.time,uy.startsWith(`Water`)?$.waterRate:1),t&&py()&&ov?.update(e),dy&&X_(uy)){let t=X?.view===`garden`?nv.waypoint:dy,n=new G(t?.x??dy.x,Q.position.y,t?.z??dy.z).sub(Q.position);n.y=0;let r=n.length(),i=ly.getEffectiveWeight(),a=X_(uy).speed*$.rate*i*e;if(r<1e-5&&!nv?.active)Ny(),cb(`Idle`);else{n.normalize();let t=new Ft().setFromAxisAngle(new G(0,1,0),Math.atan2(n.x,n.z));if(X?.view===`garden`){let r=new G(0,0,1).applyQuaternion(Q.quaternion),a=Math.atan2(new G().crossVectors(r,n).y,r.dot(n));Q.quaternion.rotateTowards(t,(uy===`Run`?9:7)*e);let o=new G(0,0,1).applyQuaternion(Q.quaternion).dot(n),s=X_(uy),c=nv.remainingDistance(Q.position),l=s.speed*$.rate*(uy===`Run`&&py()?oy:1),u=Math.min(l,Math.sqrt(2*(s.deceleration??6)*c))*Math.max(.2,(o+1)/2),d=ay.speed,f=(u>d?s.acceleration??7:s.deceleration??6)*e;ay.speed=U.clamp(u,d-f,d+f),ly.setEffectiveTimeScale(ay.speed/s.speed),ay.bank=-U.clamp(a,-1,1)*.085*Math.min(1,ay.speed/1.5),ay.pitch=.018*Math.min(1,ay.speed/1.5)+U.clamp((ay.speed-d)/Math.max(e,.001),-5,5)*.003;let p=nv.advance(Q.position,ay.speed*i*e),m=Math.hypot(p.position.x-Q.position.x,p.position.z-Q.position.z),h=X.hitGround(p.position.x,p.position.z);if(Q.position.set(p.position.x,(h?.point.y??Q.position.y-.005)+.005,p.position.z),py()&&sv.step({name:uy,time:ly.time,action:$.transitions,distance:m,groundHit:h}),p.finished||p.blocked){let e=nv.debug().plan?.adjusted;Ny({arrived:!p.blocked}),cb(`Idle`),Cv&&!p.blocked?(Cv.phase=`settling`,Cv.wait=0,Fy(`到果子旁啦，站稳吃一颗。`)):(Uy(),Fy(p.blocked?`前面走不过去，选一块别的草地吧。`:e?`到附近的草地啦。`:`到啦，再选一块草地吧。`))}}else Q.quaternion.slerp(t,1-Math.exp(-e/.12)),Q.position.addScaledVector(n,Math.min(r,a)),r<=a+1e-5&&(Ny(),cb(`Idle`))}}L_&&(iy.rotation.x=U.damp(iy.rotation.x,ay.pitch,18,e),iy.rotation.z=U.damp(iy.rotation.z,ay.bank,14,e)),Cv?.phase===`settling`?(Cv.wait+=e,Jy(e,!0)&&Cv.wait>=.16&&Math.abs(iy.rotation.x)+Math.abs(iy.rotation.z)<.01&&(X.beginGardenMeal(Cv.fruitId)?(ry.hide(),Cv.phase=`eating`,cb(`Eat`,{force:!0}),Fy(`咬一口，慢慢嚼…`)):Uy())):Cv?.phase===`eating`&&ly.time>=Cv.biteTime&&Jy(e,!1),X?.view===`garden`&&(X.meadow.update(e,Q.position),X.windChime?.update(e,Q.position),ev.update(e),py()&&(cv.active?cv.applyPose():uv.active?uv.applyPose():rv.pose()),lv.update(e,Q.position,fv.active?fv.direction:cv.direction,fv.active?fv.dashing:cv.dashing,fv.active?0:cv.flightHeight),dv.update(e));for(let t=Ay.length-1;t>=0;t--){let n=Ay[t];n.age+=e,n.sprite.visible=n.age>=0,n.sprite.position.y=n.start.y+Math.max(0,n.age)*.23,n.sprite.material.opacity=Math.max(0,1-Math.max(0,n.age-.5)/.8),n.age>1.3&&(zv.remove(n.sprite),n.sprite.material.dispose(),Ay.splice(t,1))}}X?.view===`stage`&&uy===`Basketball`&&pv.preview(sy,ly.time,Qv.position.y,fb),uy===`Jump`&&(mv??=yg(zv),mv.update(sy,ly.time,xy(`jump_apex`),Z,innerHeight)),uy===`Rap`&&hv.update(sy,ly.time,ly.getClip().duration,$.paused,Z,innerHeight),X&&ly&&X.update(uy,ly.time,{delta:$.paused?0:e*$.waterRate,paused:$.paused}),ly&&py()&&Rv?.update(uy,ly.time),t&&X.pondWater.update($.paused?0:e,{contacts:py()?X.swimContacts():[],position:Q.position,yaw:Q.rotation.y,inWater:py()&&ov?.inWater,moving:py()&&ov?.moving})}Bv.setAnimationLoop(e=>{if(H_&&Pb!==void 0&&e-Pb<1e3/30-1)return;let t=Pb===void 0?0:Math.min((e-Pb)/1e3,.05);Pb=e,Fb(t),pb(),yb(),Gv.update(),jb(),ry?.update($.paused?0:t,Z,innerHeight),X?.view===`garden`&&(X.pondWater.prepare(Z,e),lv.prepare(Z),dv.prepare(Z)),Zv?Zv.renderFrame(Z):Bv.render(zv,Z),Ly(),$.loaded&&!Mb.ready&&(Mb.ready=!0,L_&&(W_(),K_()))});