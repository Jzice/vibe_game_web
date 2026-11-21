(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const oh="180",mp=0,Kh=1,gp=2,Gf=1,xp=2,Fi=3,Wi=0,ln=1,Ye=2,Oi=0,mr=1,ci=2,jh=3,Zh=4,_p=5,Ms=100,vp=101,Mp=102,yp=103,Sp=104,wp=200,bp=201,Ep=202,Tp=203,oc=204,ac=205,Ap=206,Cp=207,Rp=208,Pp=209,Lp=210,Ip=211,Dp=212,Up=213,Np=214,lc=0,cc=1,hc=2,Sr=3,uc=4,fc=5,dc=6,pc=7,Hf=0,Fp=1,zp=2,ss=0,Vf=1,Wf=2,Xf=3,ah=4,$f=5,Yf=6,qf=7,Kf=300,wr=301,br=302,mc=303,gc=304,qa=306,Rs=1e3,bs=1001,xc=1002,Gn=1003,Op=1004,Ro=1005,xi=1006,hl=1007,Es=1008,wi=1009,jf=1010,Zf=1011,lo=1012,lh=1013,Ps=1014,_i=1015,Bi=1016,ch=1017,hh=1018,co=1020,Jf=35902,Qf=35899,td=1021,ed=1022,oi=1023,ho=1026,uo=1027,uh=1028,fh=1029,nd=1030,dh=1031,ph=1033,_a=33776,va=33777,Ma=33778,ya=33779,_c=35840,vc=35841,Mc=35842,yc=35843,Sc=36196,wc=37492,bc=37496,Ec=37808,Tc=37809,Ac=37810,Cc=37811,Rc=37812,Pc=37813,Lc=37814,Ic=37815,Dc=37816,Uc=37817,Nc=37818,Fc=37819,zc=37820,Oc=37821,Bc=36492,kc=36494,Gc=36495,Hc=36283,Vc=36284,Wc=36285,Xc=36286,Bp=3200,kp=3201,id=0,Gp=1,es="",Ge="srgb",Er="srgb-linear",Aa="linear",Ue="srgb",Os=7680,Jh=519,Hp=512,Vp=513,Wp=514,sd=515,Xp=516,$p=517,Yp=518,qp=519,$c=35044,Qh="300 es",vi=2e3,Ca=2001;class Ir{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tu=1234567;const gr=Math.PI/180,Tr=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function mh(i,t){return(i%t+t)%t}function Kp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function jp(i,t,e){return i!==t?(e-i)/(t-i):0}function io(i,t,e){return(1-e)*i+e*t}function Zp(i,t,e,n){return io(i,t,1-Math.exp(-e*n))}function Jp(i,t=1){return t-Math.abs(mh(i,t*2)-t)}function Qp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function t0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function e0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function n0(i,t){return i+Math.random()*(t-i)}function i0(i){return i*(.5-Math.random())}function s0(i){i!==void 0&&(tu=i);let t=tu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function r0(i){return i*gr}function o0(i){return i*Tr}function a0(i){return(i&i-1)===0&&i!==0}function l0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function c0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function h0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gh={DEG2RAD:gr,RAD2DEG:Tr,generateUUID:Si,clamp:Se,euclideanModulo:mh,mapLinear:Kp,inverseLerp:jp,lerp:io,damp:Zp,pingpong:Jp,smoothstep:Qp,smootherstep:t0,randInt:e0,randFloat:n0,randFloatSpread:i0,seededRandom:s0,degToRad:r0,radToDeg:o0,isPowerOfTwo:a0,ceilPowerOfTwo:l0,floorPowerOfTwo:c0,setQuaternionFromProperEuler:h0,normalize:Ne,denormalize:si};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),E=Math.atan2(b,p*M);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const v=a*M;if(c=c*m+f*v,l=l*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ul.copy(this).projectOnVector(t),this.sub(ul)}reflect(t){return this.sub(ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ul=new U,eu=new Dr;class ue{constructor(t,e,n,s,r,o,a,c,l){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],x=s[4],v=s[7],b=s[2],E=s[5],C=s[8];return r[0]=o*_+a*M+c*b,r[3]=o*m+a*x+c*E,r[6]=o*p+a*v+c*C,r[1]=l*_+h*M+u*b,r[4]=l*m+h*x+u*E,r[7]=l*p+h*v+u*C,r[2]=f*_+d*M+g*b,r[5]=f*m+d*x+g*E,r[8]=f*p+d*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fl.makeScale(t,e)),this}rotate(t){return this.premultiply(fl.makeRotation(-t)),this}translate(t,e){return this.premultiply(fl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fl=new ue;function rd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function u0(){const i=Ra("canvas");return i.style.display="block",i}const nu={};function fo(i){i in nu||(nu[i]=!0,console.warn(i))}function f0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const iu=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d0(){const i={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ue&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ue&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?Aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Er]:{primaries:t,whitePoint:n,transfer:Aa,toXYZ:iu,fromXYZ:su,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:Ue,toXYZ:iu,fromXYZ:su,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),i}const be=d0();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bs;class p0{static getDataURL(t,e="image/png"){if(../_offline-stub.js)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bs===void 0&&(Bs=Ra("canvas")),Bs.width=t.width,Bs.height=t.height;const s=Bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ra("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let m0=0;class xh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dl(s[o].image)):r.push(dl(s[o]))}else r=dl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?p0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g0=0;const pl=new U;class Sn extends Ir{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,n=bs,s=bs,r=xi,o=Es,a=oi,c=wi,l=Sn.DEFAULT_ANISOTROPY,h=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Si(),this.name="",this.source=new xh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pl).x}get height(){return this.source.getSize(pl).y}get depth(){return this.source.getSize(pl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rs:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case xc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rs:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case xc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Kf;Sn.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,n=0,s=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(d+1)/2,b=(p+1)/2,E=(h+f)/4,C=(u+_)/4,R=(g+m)/4;return x>v&&x>b?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=C/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=R/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=R/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class x0 extends Ir{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Sn(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new xh(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends x0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class od extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _0 extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(t.matrixWorld),this.union(Po)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),Lo.subVectors(this.max,Br),ks.subVectors(t.a,Br),Gs.subVectors(t.b,Br),Hs.subVectors(t.c,Br),$i.subVectors(Gs,ks),Yi.subVectors(Hs,Gs),hs.subVectors(ks,Hs);let e=[0,-$i.z,$i.y,0,-Yi.z,Yi.y,0,-hs.z,hs.y,$i.z,0,-$i.x,Yi.z,0,-Yi.x,hs.z,0,-hs.x,-$i.y,$i.x,0,-Yi.y,Yi.x,0,-hs.y,hs.x,0];return!ml(e,ks,Gs,Hs,Lo)||(e=[1,0,0,0,1,0,0,0,1],!ml(e,ks,Gs,Hs,Lo))?!1:(Io.crossVectors($i,Yi),e=[Io.x,Io.y,Io.z],ml(e,ks,Gs,Hs,Lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pi=[new U,new U,new U,new U,new U,new U,new U,new U],Zn=new U,Po=new Us,ks=new U,Gs=new U,Hs=new U,$i=new U,Yi=new U,hs=new U,Br=new U,Lo=new U,Io=new U,us=new U;function ml(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){us.fromArray(i,r);const a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),c=t.dot(us),l=e.dot(us),h=n.dot(us);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const v0=new Us,kr=new U,gl=new U;class Ns{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):v0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);const e=kr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(kr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(gl)),this.expandByPoint(kr.copy(t.center).sub(gl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Li=new U,xl=new U,Do=new U,qi=new U,_l=new U,Uo=new U,vl=new U;class Ka{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xl.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(xl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Do),a=qi.dot(this.direction),c=-qi.dot(Do),l=qi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xl).addScaledVector(Do,f),d}intersectSphere(t,e){Li.subVectors(t.center,this.origin);const n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,s,r){_l.subVectors(e,t),Uo.subVectors(n,t),vl.crossVectors(_l,Uo);let o=this.direction.dot(vl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,t);const c=a*this.direction.dot(Uo.crossVectors(qi,Uo));if(c<0)return null;const l=a*this.direction.dot(_l.cross(qi));if(l<0||c+l>o)return null;const h=-a*qi.dot(vl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Vs.setFromMatrixColumn(t,0).length(),r=1/Vs.setFromMatrixColumn(t,1).length(),o=1/Vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(M0,t,y0)}lookAt(t,e,n){const s=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Ki.crossVectors(n,Nn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Ki.crossVectors(n,Nn)),Ki.normalize(),No.crossVectors(Nn,Ki),s[0]=Ki.x,s[4]=No.x,s[8]=Nn.x,s[1]=Ki.y,s[5]=No.y,s[9]=Nn.y,s[2]=Ki.z,s[6]=No.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],v=n[11],b=n[15],E=s[0],C=s[4],R=s[8],w=s[12],y=s[1],N=s[5],D=s[9],F=s[13],O=s[2],X=s[6],q=s[10],nt=s[14],G=s[3],j=s[7],dt=s[11],Tt=s[15];return r[0]=o*E+a*y+c*O+l*G,r[4]=o*C+a*N+c*X+l*j,r[8]=o*R+a*D+c*q+l*dt,r[12]=o*w+a*F+c*nt+l*Tt,r[1]=h*E+u*y+f*O+d*G,r[5]=h*C+u*N+f*X+d*j,r[9]=h*R+u*D+f*q+d*dt,r[13]=h*w+u*F+f*nt+d*Tt,r[2]=g*E+_*y+m*O+p*G,r[6]=g*C+_*N+m*X+p*j,r[10]=g*R+_*D+m*q+p*dt,r[14]=g*w+_*F+m*nt+p*Tt,r[3]=M*E+x*y+v*O+b*G,r[7]=M*C+x*N+v*X+b*j,r[11]=M*R+x*D+v*q+b*dt,r[15]=M*w+x*F+v*nt+b*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,x=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,v=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,b=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,E=e*M+n*x+s*v+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=M*C,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*C,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*C,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*C,t[4]=x*C,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*C,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*C,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*C,t[8]=v*C,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*C,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*C,t[12]=b*C,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,M=c*l,x=c*h,v=c*u,b=n.x,E=n.y,C=n.z;return s[0]=(1-(_+p))*b,s[1]=(d+v)*b,s[2]=(g-x)*b,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+x)*C,s[9]=(m-M)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Vs.set(s[0],s[1],s[2]).length();const o=Vs.set(s[4],s[5],s[6]).length(),a=Vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Jn.copy(this);const l=1/r,h=1/o,u=1/a;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=vi,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===vi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ca)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vi,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===vi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ca)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vs=new U,Jn=new fe,M0=new U(0,0,0),y0=new U(1,1,1),Ki=new U,No=new U,Nn=new U,ru=new fe,ou=new Dr;class bi{constructor(t=0,e=0,n=0,s=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let S0=0;const au=new U,Ws=new Dr,Ii=new fe,Fo=new U,Gr=new U,w0=new U,b0=new Dr,lu=new U(1,0,0),cu=new U(0,1,0),hu=new U(0,0,1),uu={type:"added"},E0={type:"removed"},Xs={type:"childadded",child:null},Ml={type:"childremoved",child:null};class Oe extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new U,e=new bi,n=new Dr,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new ue}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(lu,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lu,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fo.copy(t):Fo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Gr,Fo,this.up):Ii.lookAt(Fo,Gr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(E0),Ml.child=t,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,t,w0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,b0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Oe.DEFAULT_UP=new U(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new U,Di=new U,yl=new U,Ui=new U,$s=new U,Ys=new U,fu=new U,Sl=new U,wl=new U,bl=new U,El=new Fe,Tl=new Fe,Al=new Fe;class Bn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qn.subVectors(t,e),s.cross(Qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qn.subVectors(s,e),Di.subVectors(n,e),yl.subVectors(t,e);const o=Qn.dot(Qn),a=Qn.dot(Di),c=Qn.dot(yl),l=Di.dot(Di),h=Di.dot(yl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ui.x),c.addScaledVector(o,Ui.y),c.addScaledVector(a,Ui.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return El.setScalar(0),Tl.setScalar(0),Al.setScalar(0),El.fromBufferAttribute(t,e),Tl.fromBufferAttribute(t,n),Al.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(El,r.x),o.addScaledVector(Tl,r.y),o.addScaledVector(Al,r.z),o}static isFrontFacing(t,e,n,s){return Qn.subVectors(n,e),Di.subVectors(t,e),Qn.cross(Di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Qn.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Bn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;$s.subVectors(s,n),Ys.subVectors(r,n),Sl.subVectors(t,n);const c=$s.dot(Sl),l=Ys.dot(Sl);if(c<=0&&l<=0)return e.copy(n);wl.subVectors(t,s);const h=$s.dot(wl),u=Ys.dot(wl);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector($s,o);bl.subVectors(t,r);const d=$s.dot(bl),g=Ys.dot(bl);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ys,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return fu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(fu,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector($s,o).addScaledVector(Ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},zo={h:0,s:0,l:0};function Cl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=be.workingColorSpace){if(t=mh(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Cl(o,r,t+1/3),this.g=Cl(o,r,t),this.b=Cl(o,r,t-1/3)}return be.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=ad[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return be.workingToColorSpace(vn.copy(this),t),Math.round(Se(vn.r*255,0,255))*65536+Math.round(Se(vn.g*255,0,255))*256+Math.round(Se(vn.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.workingToColorSpace(vn.copy(this),e);const n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=Ge){be.workingToColorSpace(vn.copy(this),t);const e=vn.r,n=vn.g,s=vn.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(zo);const n=io(ji.h,zo.h,e),s=io(ji.s,zo.s,e),r=io(ji.l,zo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new kt;kt.NAMES=ad;let T0=0;class as extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=mr,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=ac,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oc&&(n.blendSrc=this.blendSrc),this.blendDst!==ac&&(n.blendDst=this.blendDst),this.blendEquation!==Ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class le extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const en=new U,Oo=new St;let A0=0;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:A0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$c,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oo.fromBufferAttribute(this,e),Oo.applyMatrix3(t),this.setXY(e,Oo.x,Oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$c&&(t.usage=this.usage),t}}class ld extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cd extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let C0=0;const Xn=new fe,Rl=new Oe,qs=new U,Fn=new Us,Hr=new Us,fn=new U;class Be extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rd(t)?cd:ld)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Fn.min,Hr.min),Fn.expandByPoint(fn),fn.addVectors(Fn.max,Hr.max),Fn.expandByPoint(fn)):(Fn.expandByPoint(Hr.min),Fn.expandByPoint(Hr.max))}Fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)fn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(fn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fn.fromBufferAttribute(a,l),c&&(qs.fromBufferAttribute(t,l),fn.add(qs)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new U,c[R]=new U;const l=new U,h=new U,u=new U,f=new St,d=new St,g=new St,_=new U,m=new U;function p(R,w,y){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(N),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(N),a[R].add(_),a[w].add(_),a[y].add(_),c[R].add(m),c[w].add(m),c[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,w=M.length;R<w;++R){const y=M[R],N=y.start,D=y.count;for(let F=N,O=N+D;F<O;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new U,v=new U,b=new U,E=new U;function C(R){b.fromBufferAttribute(s,R),E.copy(b);const w=a[R];x.copy(w),x.sub(b.multiplyScalar(b.dot(w))).normalize(),v.crossVectors(E,w);const N=v.dot(c[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,N)}for(let R=0,w=M.length;R<w;++R){const y=M[R],N=y.start,D=y.count;for(let F=N,O=N+D;F<O;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new cn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const du=new fe,fs=new Ka,Bo=new Ns,pu=new U,ko=new U,Go=new U,Ho=new U,Pl=new U,Vo=new U,mu=new U,Wo=new U;class ut extends Oe{constructor(t=new Be,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Vo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Pl.fromBufferAttribute(u,t),o?Vo.addScaledVector(Pl,h):Vo.addScaledVector(Pl.sub(e),h))}e.add(Vo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),fs.copy(t.ray).recast(t.near),!(Bo.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Bo,pu)===null||fs.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(du.copy(r).invert(),fs.copy(t.ray).applyMatrix4(du),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,b=x;v<b;v+=3){const E=a.getX(v),C=a.getX(v+1),R=a.getX(v+2);s=Xo(this,p,t,n,l,h,u,E,C,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=Xo(this,o,t,n,l,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,b=x;v<b;v+=3){const E=v,C=v+1,R=v+2;s=Xo(this,p,t,n,l,h,u,E,C,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,v=m+2;s=Xo(this,o,t,n,l,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function R0(i,t,e,n,s,r,o,a){let c;if(t.side===ln?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Wi,a),c===null)return null;Wo.copy(a),Wo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Wo);return l<e.near||l>e.far?null:{distance:l,point:Wo.clone(),object:i}}function Xo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ko),i.getVertexPosition(c,Go),i.getVertexPosition(l,Ho);const h=R0(i,t,e,n,ko,Go,Ho,mu);if(h){const u=new U;Bn.getBarycoord(mu,ko,Go,Ho,u),s&&(h.uv=Bn.getInterpolatedAttribute(s,a,c,l,u,new St)),r&&(h.uv1=Bn.getInterpolatedAttribute(r,a,c,l,u,new St)),o&&(h.normal=Bn.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new U,materialIndex:0};Bn.getNormal(ko,Go,Ho,f.normal),h.face=f,h.barycoord=u}return h}class ie extends Be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2));function g(_,m,p,M,x,v,b,E,C,R,w){const y=v/C,N=b/R,D=v/2,F=b/2,O=E/2,X=C+1,q=R+1;let nt=0,G=0;const j=new U;for(let dt=0;dt<q;dt++){const Tt=dt*N-F;for(let ft=0;ft<X;ft++){const Nt=ft*y-D;j[_]=Nt*M,j[m]=Tt*x,j[p]=O,l.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=E>0?1:-1,h.push(j.x,j.y,j.z),u.push(ft/C),u.push(1-dt/R),nt+=1}}for(let dt=0;dt<R;dt++)for(let Tt=0;Tt<C;Tt++){const ft=f+Tt+X*dt,Nt=f+Tt+X*(dt+1),pt=f+(Tt+1)+X*(dt+1),Pt=f+(Tt+1)+X*dt;c.push(ft,Nt,Pt),c.push(Nt,pt,Pt),G+=6}a.addGroup(d,G,w),d+=G,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ar(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function En(i){const t={};for(let e=0;e<i.length;e++){const n=Ar(i[e]);for(const s in n)t[s]=n[s]}return t}function P0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const po={clone:Ar,merge:En};var L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=I0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=P0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ud extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new U,gu=new St,xu=new St;class Ln extends ud{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,gu,xu),e.subVectors(xu,gu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ks=-90,js=1;class D0 extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(Ks,js,t,e);s.layers=this.layers,this.add(s);const r=new Ln(Ks,js,t,e);r.layers=this.layers,this.add(r);const o=new Ln(Ks,js,t,e);o.layers=this.layers,this.add(o);const a=new Ln(Ks,js,t,e);a.layers=this.layers,this.add(a);const c=new Ln(Ks,js,t,e);c.layers=this.layers,this.add(c);const l=new Ln(Ks,js,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fd extends Sn{constructor(t=[],e=wr,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class U0 extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ie(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Oi});r.uniforms.tEquirect.value=e;const o=new ut(s,r),a=e.minFilter;return e.minFilter===Es&&(e.minFilter=xi),new D0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ze extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N0={type:"move"};class Ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ur{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new Ur(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class F0 extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class z0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$c,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new U;class Pa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Pa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ja extends as{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zs;const Vr=new U,Js=new U,Qs=new U,tr=new St,Wr=new St,dd=new fe,$o=new U,Xr=new U,Yo=new U,_u=new St,Il=new St,vu=new St;class vh extends Oe{constructor(t=new ja){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new Be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new z0(e,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Pa(n,3,0,!1)),Zs.setAttribute("uv",new Pa(n,2,3,!1))}this.geometry=Zs,this.material=t,this.center=new St(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),dd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-Qs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;qo($o.set(-.5,-.5,0),Qs,o,Js,s,r),qo(Xr.set(.5,-.5,0),Qs,o,Js,s,r),qo(Yo.set(.5,.5,0),Qs,o,Js,s,r),_u.set(0,0),Il.set(1,0),vu.set(1,1);let a=t.ray.intersectTriangle($o,Xr,Yo,!1,Vr);if(a===null&&(qo(Xr.set(-.5,.5,0),Qs,o,Js,s,r),Il.set(0,1),a=t.ray.intersectTriangle($o,Yo,Xr,!1,Vr),a===null))return;const c=t.ray.origin.distanceTo(Vr);c<t.near||c>t.far||e.push({distance:c,point:Vr.clone(),uv:Bn.getInterpolation(Vr,$o,Xr,Yo,_u,Il,vu,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function qo(i,t,e,n,s,r){tr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Wr.x=r*tr.x-s*tr.y,Wr.y=s*tr.x+r*tr.y):Wr.copy(tr),i.copy(t),i.x+=Wr.x,i.y+=Wr.y,i.applyMatrix4(dd)}class O0 extends Sn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Gn,h=Gn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mu extends cn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const er=new fe,yu=new fe,Ko=[],Su=new Us,B0=new fe,$r=new ut,Yr=new Ns;class $e extends ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,B0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Us),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,er),Su.copy(t.boundingBox).applyMatrix4(er),this.boundingBox.union(Su)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,er),Yr.copy(t.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),t.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),yu.multiplyMatrices(n,er),$r.matrixWorld=yu,$r.raycast(t,Ko);for(let o=0,a=Ko.length;o<a;o++){const c=Ko[o];c.instanceId=r,c.object=this,e.push(c)}Ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new O0(new Float32Array(s*this.count),s,this.count,uh,_i));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dl=new U,k0=new U,G0=new ue;class xs{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Dl.subVectors(n,e).cross(k0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Dl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||G0.getNormalMatrix(t),s=this.coplanarPoint(Dl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Ns,H0=new St(.5,.5),jo=new U;class Mh{constructor(t=new xs,e=new xs,n=new xs,s=new xs,r=new xs,o=new xs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vi,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],x=r[13],v=r[14],b=r[15];if(s[0].setComponents(l-o,d-h,p-g,b-M).normalize(),s[1].setComponents(l+o,d+h,p+g,b+M).normalize(),s[2].setComponents(l+a,d+u,p+_,b+x).normalize(),s[3].setComponents(l-a,d-u,p-_,b-x).normalize(),n)s[4].setComponents(c,f,m,v).normalize(),s[5].setComponents(l-c,d-f,p-m,b-v).normalize();else if(s[4].setComponents(l-c,d-f,p-m,b-v).normalize(),e===vi)s[5].setComponents(l+c,d+f,p+m,b+v).normalize();else if(e===Ca)s[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){ds.center.set(0,0,0);const e=H0.distanceTo(t.center);return ds.radius=.7071067811865476+e,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(jo.x=s.normal.x>0?t.max.x:t.min.x,jo.y=s.normal.y>0?t.max.y:t.min.y,jo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yc extends as{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const La=new U,Ia=new U,wu=new fe,qr=new Ka,Zo=new Ns,Ul=new U,bu=new U;class V0 extends Oe{constructor(t=new Be,e=new Yc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)La.fromBufferAttribute(e,s-1),Ia.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=La.distanceTo(Ia);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;wu.copy(s).invert(),qr.copy(t.ray).applyMatrix4(wu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=h.getX(_),M=h.getX(_+1),x=Jo(this,t,qr,c,p,M,_);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=Jo(this,t,qr,c,_,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=Jo(this,t,qr,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Jo(this,t,qr,c,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jo(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(La.fromBufferAttribute(a,s),Ia.fromBufferAttribute(a,r),e.distanceSqToSegment(La,Ia,Ul,bu)>n)return;Ul.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ul);if(!(l<t.near||l>t.far))return{distance:l,point:bu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Eu=new U,Tu=new U;class Au extends V0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Eu.fromBufferAttribute(e,s),Tu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eu.distanceTo(Tu);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yh extends as{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cu=new fe,qc=new Ka,Qo=new Ns,ta=new U;class pd extends Oe{constructor(t=new Be,e=new yh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,t.ray.intersectsSphere(Qo)===!1)return;Cu.copy(s).invert(),qc.copy(t.ray).applyMatrix4(Cu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);ta.fromBufferAttribute(u,m),Ru(ta,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)ta.fromBufferAttribute(u,g),Ru(ta,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ru(i,t,e,n,s,r,o){const a=qc.distanceSqToPoint(i);if(a<e){const c=new U;qc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class mn extends Sn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class md extends Sn{constructor(t,e,n=Ps,s,r,o,a=Gn,c=Gn,l,h=ho,u=1){if(h!==ho&&h!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class gd extends Sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sn extends Be{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+r,_=s+1,m=new U,p=new U;for(let M=0;M<=g;M++){let x=0,v=0,b=0,E=0;if(M<=n){const w=M/n,y=w*Math.PI/2;v=-h-t*Math.cos(y),b=t*Math.sin(y),E=-t*Math.cos(y),x=w*u}else if(M<=n+r){const w=(M-n)/r;v=-h+w*e,b=t,E=0,x=u+w*f}else{const w=(M-n-r)/n,y=w*Math.PI/2;v=h+t*Math.sin(y),b=t*Math.cos(y),E=t*Math.sin(y),x=u+f+w*u}const C=Math.max(0,Math.min(1,x/d));let R=0;M===0?R=.5/s:M===g&&(R=-.5/s);for(let w=0;w<=s;w++){const y=w/s,N=y*Math.PI*2,D=Math.sin(N),F=Math.cos(N);p.x=-b*F,p.y=v,p.z=b*D,a.push(p.x,p.y,p.z),m.set(-b*F,E,b*D),m.normalize(),c.push(m.x,m.y,m.z),l.push(y+R,C)}if(M>0){const w=(M-1)*_;for(let y=0;y<s;y++){const N=w+y,D=w+y+1,F=M*_+y,O=M*_+y+1;o.push(N,D,F),o.push(D,O,F)}}}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class rs extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new U,h=new St;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ve extends Be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(d,2));function M(){const v=new U,b=new U;let E=0;const C=(e-t)/n;for(let R=0;R<=r;R++){const w=[],y=R/r,N=y*(e-t)+t;for(let D=0;D<=s;D++){const F=D/s,O=F*c+a,X=Math.sin(O),q=Math.cos(O);b.x=N*X,b.y=-y*n+m,b.z=N*q,u.push(b.x,b.y,b.z),v.set(X,C,q).normalize(),f.push(v.x,v.y,v.z),d.push(F,1-y),w.push(g++)}_.push(w)}for(let R=0;R<s;R++)for(let w=0;w<r;w++){const y=_[w][R],N=_[w+1][R],D=_[w+1][R+1],F=_[w][R+1];(t>0||w!==0)&&(h.push(y,N,F),E+=3),(e>0||w!==r-1)&&(h.push(N,D,F),E+=3)}l.addGroup(p,E,0),p+=E}function x(v){const b=g,E=new St,C=new U;let R=0;const w=v===!0?t:e,y=v===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const N=g;for(let D=0;D<=s;D++){const O=D/s*c+a,X=Math.cos(O),q=Math.sin(O);C.x=w*q,C.y=m*y,C.z=w*X,u.push(C.x,C.y,C.z),f.push(0,y,0),E.x=X*.5+.5,E.y=q*.5*y+.5,d.push(E.x,E.y),g++}for(let D=0;D<s;D++){const F=b+D,O=N+D;v===!0?h.push(O,O+1,F):h.push(O+1,O,F),R+=3}l.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tn extends ve{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new tn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Za extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new U,v=new U,b=new U;for(let E=0;E<e.length;E+=3)d(e[E+0],x),d(e[E+1],v),d(e[E+2],b),c(x,v,b,M)}function c(M,x,v,b){const E=b+1,C=[];for(let R=0;R<=E;R++){C[R]=[];const w=M.clone().lerp(v,R/E),y=x.clone().lerp(v,R/E),N=E-R;for(let D=0;D<=N;D++)D===0&&R===E?C[R][D]=w:C[R][D]=w.clone().lerp(y,D/N)}for(let R=0;R<E;R++)for(let w=0;w<2*(E-R)-1;w++){const y=Math.floor(w/2);w%2===0?(f(C[R][y+1]),f(C[R+1][y]),f(C[R][y])):(f(C[R][y+1]),f(C[R+1][y+1]),f(C[R+1][y]))}}function l(M){const x=new U;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const M=new U;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const v=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;o.push(v,1-b)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){const x=o[M+0],v=o[M+2],b=o[M+4],E=Math.max(x,v,b),C=Math.min(x,v,b);E>.9&&C<.1&&(x<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const M=new U,x=new U,v=new U,b=new U,E=new St,C=new St,R=new St;for(let w=0,y=0;w<r.length;w+=9,y+=6){M.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),E.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),b.copy(M).add(x).add(v).divideScalar(3);const N=m(b);_(E,y+0,M,N),_(C,y+2,x,N),_(R,y+4,v,N)}}function _(M,x,v,b){b<0&&M.x===1&&(o[x]=M.x-1),v.x===0&&v.z===0&&(o[x]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.vertices,t.indices,t.radius,t.details)}}const ea=new U,na=new U,Nl=new U,ia=new Bn;class Pu extends Be{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(gr*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=ia;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),ia.getNormal(Nl),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){const x=(M+1)%3,v=u[M],b=u[x],E=ia[h[M]],C=ia[h[x]],R=`${v}_${b}`,w=`${b}_${v}`;w in f&&f[w]?(Nl.dot(f[w].normal)<=r&&(d.push(E.x,E.y,E.z),d.push(C.x,C.y,C.z)),f[w]=null):R in f||(f[R]={index0:l[M],index1:l[x],normal:Nl.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];ea.fromBufferAttribute(a,_),na.fromBufferAttribute(a,m),d.push(ea.x,ea.y,ea.z),d.push(na.x,na.y,na.z)}this.setAttribute("position",new Me(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new St:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,s=[],r=[],o=[],a=new U,c=new fe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Se(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Se(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Sh extends Ti{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new St){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class W0 extends Sh{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const sa=new U,Fl=new wh,zl=new wh,Ol=new wh;class X0 extends Ti{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(sa.subVectors(s[0],s[1]).add(s[0]),l=sa);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(sa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Fl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),zl.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Ol.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Fl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),zl.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ol.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Fl.calc(c),zl.calc(c),Ol.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function $0(i,t){const e=1-i;return e*e*t}function Y0(i,t){return 2*(1-i)*i*t}function q0(i,t){return i*i*t}function so(i,t,e,n){return $0(i,t)+Y0(i,e)+q0(i,n)}function K0(i,t){const e=1-i;return e*e*e*t}function j0(i,t){const e=1-i;return 3*e*e*i*t}function Z0(i,t){return 3*(1-i)*i*i*t}function J0(i,t){return i*i*i*t}function ro(i,t,e,n,s){return K0(i,t)+j0(i,e)+Z0(i,n)+J0(i,s)}class xd extends Ti{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(t,s.x,r.x,o.x,a.x),ro(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Q0 extends Ti{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(t,s.x,r.x,o.x,a.x),ro(t,s.y,r.y,o.y,a.y),ro(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _d extends Ti{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tm extends Ti{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vd extends Ti{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(so(t,s.x,r.x,o.x),so(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class em extends Ti{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(so(t,s.x,r.x,o.x),so(t,s.y,r.y,o.y),so(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Md extends Ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Lu(a,c.x,l.x,h.x,u.x),Lu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new St().fromArray(s))}return this}}var Iu=Object.freeze({__proto__:null,ArcCurve:W0,CatmullRomCurve3:X0,CubicBezierCurve:xd,CubicBezierCurve3:Q0,EllipseCurve:Sh,LineCurve:_d,LineCurve3:tm,QuadraticBezierCurve:vd,QuadraticBezierCurve3:em,SplineCurve:Md});class nm extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Iu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Iu[s.type]().fromJSON(s))}return this}}class Du extends nm{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _d(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new vd(this.currentPoint.clone(),new St(t,e),new St(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new xd(this.currentPoint.clone(),new St(t,e),new St(n,s),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Md(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Sh(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yd extends Du{constructor(t){super(t),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Du().fromJSON(s))}return this}}function im(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Sd(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=lm(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return mo(r,o,e,a,c,l,0),o}function Sd(i,t,e,n,s){let r;if(s===vm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Uu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Uu(o/n|0,i[o],i[o+1],r);return r&&Cr(r,r.next)&&(xo(r),r=r.next),r}function Ls(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cr(e,e.next)||qe(e.prev,e,e.next)===0)){if(xo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function mo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&dm(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?rm(i,n,s,r):sm(i)){t.push(c.i,i.i,l.i),xo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=om(Ls(i),t),mo(i,t,e,n,s,r,2)):o===2&&am(i,t,e,n,s,r):mo(Ls(i),t,e,n,s,r,1);break}}}function sm(i){const t=i.prev,e=i,n=i.next;if(qe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Qr(s,a,r,c,o,l,g.x,g.y)&&qe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(qe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),_=Math.max(a,c,l),m=Math.max(h,u,f),p=Kc(d,g,t,e,n),M=Kc(_,m,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Qr(a,h,c,u,l,f,x.x,x.y)&&qe(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Qr(a,h,c,u,l,f,v.x,v.y)&&qe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Qr(a,h,c,u,l,f,x.x,x.y)&&qe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Qr(a,h,c,u,l,f,v.x,v.y)&&qe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function om(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Cr(n,s)&&bd(n,e,e.next,s)&&go(n,s)&&go(s,n)&&(t.push(n.i,e.i,s.i),xo(e),xo(e.next),e=i=s),e=e.next}while(e!==i);return Ls(e)}function am(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gm(o,a)){let c=Ed(o,a);o=Ls(o,o.next),c=Ls(c,c.next),mo(o,t,e,n,s,r,0),mo(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function lm(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Sd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(mm(l))}s.sort(cm);for(let r=0;r<s.length;r++)e=hm(s[r],e);return e}function cm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function hm(i,t){const e=um(i,t);if(!e)return t;const n=Ed(e,i);return Ls(n,n.next),Ls(e,e.next)}function um(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Cr(i,e))return e;do{if(Cr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&wd(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);go(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&fm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function fm(i,t){return qe(i.prev,i,t.prev)<0&&qe(t.next,i,i.next)<0}function dm(i,t,e,n){let s=i;do s.z===0&&(s.z=Kc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,pm(s)}function pm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Kc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function mm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function wd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Qr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&wd(i,t,e,n,s,r,o,a)}function gm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!xm(i,t)&&(go(i,t)&&go(t,i)&&_m(i,t)&&(qe(i.prev,i,t.prev)||qe(i,t.prev,t))||Cr(i,t)&&qe(i.prev,i,i.next)>0&&qe(t.prev,t,t.next)>0)}function qe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cr(i,t){return i.x===t.x&&i.y===t.y}function bd(i,t,e,n){const s=oa(qe(i,t,e)),r=oa(qe(i,t,n)),o=oa(qe(e,n,i)),a=oa(qe(e,n,t));return!!(s!==r&&o!==a||s===0&&ra(i,e,t)||r===0&&ra(i,n,t)||o===0&&ra(e,i,n)||a===0&&ra(e,t,n))}function ra(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function oa(i){return i>0?1:i<0?-1:0}function xm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function go(i,t){return qe(i.prev,i,i.next)<0?qe(i,t,i.next)>=0&&qe(i,i.prev,t)>=0:qe(i,t,i.prev)<0||qe(i,i.next,t)<0}function _m(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ed(i,t){const e=jc(i.i,i.x,i.y),n=jc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Uu(i,t,e,n){const s=jc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Mm{static triangulate(t,e,n=2){return im(t,e,n)}}class oo{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return oo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Nu(t),Fu(n,t);let o=t.length;e.forEach(Nu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Fu(n,e[c]);const a=Mm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Nu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Fu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class os extends Za{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new os(t.radius,t.detail)}}class bh extends Za{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bh(t.radius,t.detail)}}class He extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*f-o;for(let x=0;x<l;x++){const v=x*u-r;g.push(v,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const x=M+l*p,v=M+l*(p+1),b=M+1+l*(p+1),E=M+1+l*p;d.push(x,v,E),d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ja extends Be{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,d=new U,g=new St;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,x=M,v=M+n+1,b=M+n+2,E=M+1;a.push(x,v,E),a.push(v,b,E)}}this.setIndex(a),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Eh extends Be{constructor(t=new yd([new St(0,.5),new St(-.5,-.5),new St(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(r,3)),this.setAttribute("uv",new Me(o,2));function l(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;oo.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];oo.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=oo.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){const M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){const M=_[m],x=M[0]+u,v=M[1]+u,b=M[2]+u;n.push(x,v,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ym(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Eh(n,t.curveSegments)}}function ym(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class we extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new U,f=new U,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const E=b/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(E+v,1-x),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=h[p][M+1],v=h[p][M],b=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&d.push(x,v,E),(p!==n-1||c<Math.PI)&&d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ao extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new U,u=new U,f=new U;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Sm extends dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yt extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wm extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bm extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Qa extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class tl extends Qa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Bl=new fe,zu=new U,Ou=new U;class Th{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mh,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(zu),Ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ou),e.updateMatrixWorld(),Bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Em extends Th{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Tr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Tm extends Qa{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Em}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Bu=new fe,Kr=new U,kl=new U;class Am extends Th{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Kr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Kr),kl.copy(n.position),kl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(kl),n.updateMatrixWorld(),s.makeTranslation(-Kr.x,-Kr.y,-Kr.z),Bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu,n.coordinateSystem,n.reversedDepth)}}class Co extends Qa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Am}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ah extends ud{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Cm extends Th{constructor(){super(new Ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class el extends Qa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Cm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Rm extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Td{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const ku=new fe;class Ad{constructor(t,e,n=0,s=1/0){this.ray=new Ka(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _h,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ku.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ku),this}intersectObject(t,e=!0,n=[]){return Zc(t,this,n,e),n.sort(Gu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Zc(t[s],this,n,e);return n.sort(Gu),n}}function Gu(i,t){return i.distance-t.distance}function Zc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Zc(r[o],t,e,!0)}}function Hu(i,t,e,n){const s=Pm(n);switch(e){case td:return i*t;case uh:return i*t/s.components*s.byteLength;case fh:return i*t/s.components*s.byteLength;case nd:return i*t*2/s.components*s.byteLength;case dh:return i*t*2/s.components*s.byteLength;case ed:return i*t*3/s.components*s.byteLength;case oi:return i*t*4/s.components*s.byteLength;case ph:return i*t*4/s.components*s.byteLength;case _a:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ma:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:case yc:return Math.max(i,16)*Math.max(t,8)/4;case _c:case Mc:return Math.max(i,8)*Math.max(t,8)/2;case Sc:case wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bc:case kc:case Gc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Hc:case Vc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pm(i){switch(i){case wi:case jf:return{byteLength:1,components:1};case lo:case Zf:case Bi:return{byteLength:2,components:1};case ch:case hh:return{byteLength:2,components:4};case Ps:case lh:case _i:return{byteLength:4,components:1};case Jf:case Qf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);function Cd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Lm(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dm=`#ifdef USE_ALPHAHASH
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
#endif`,Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
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
#endif`,Bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xm=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eg=`#define PI 3.141592653589793
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
} // validated`,ng=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,ig=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",cg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
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
}`,Mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,bg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Lg=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gg=`#if defined( USE_POINTS_UV )
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
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`#ifdef USE_MORPHTARGETS
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
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tx=`#ifdef USE_NORMALMAP
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
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ox=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ex=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ix=`uniform sampler2D t2D;
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
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
}`,Ox=`#if DEPTH_PACKING == 3200
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
}`,Bx=`#define DISTANCE
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
}`,kx=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,$x=`uniform vec3 diffuse;
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
}`,Yx=`#define LAMBERT
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
}`,qx=`#define LAMBERT
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
}`,Kx=`#define MATCAP
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
}`,jx=`#define MATCAP
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
}`,Zx=`#define NORMAL
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
}`,Jx=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qx=`#define PHONG
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
}`,t_=`#define PHONG
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
}`,e_=`#define STANDARD
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
}`,n_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,i_=`#define TOON
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
}`,s_=`#define TOON
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
}`,r_=`uniform float size;
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
}`,o_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
}`,l_=`uniform vec3 color;
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
}`,c_=`uniform float rotation;
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
}`,h_=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Im,alphahash_pars_fragment:Dm,alphamap_fragment:Um,alphamap_pars_fragment:Nm,alphatest_fragment:Fm,alphatest_pars_fragment:zm,aomap_fragment:Om,aomap_pars_fragment:Bm,batching_pars_vertex:km,batching_vertex:Gm,begin_vertex:Hm,beginnormal_vertex:Vm,bsdfs:Wm,iridescence_fragment:Xm,bumpmap_pars_fragment:$m,clipping_planes_fragment:Ym,clipping_planes_pars_fragment:qm,clipping_planes_pars_vertex:Km,clipping_planes_vertex:jm,color_fragment:Zm,color_pars_fragment:Jm,color_pars_vertex:Qm,color_vertex:tg,common:eg,cube_uv_reflection_fragment:ng,defaultnormal_vertex:ig,displacementmap_pars_vertex:sg,displacementmap_vertex:rg,emissivemap_fragment:og,emissivemap_pars_fragment:ag,colorspace_fragment:lg,colorspace_pars_fragment:cg,envmap_fragment:hg,envmap_common_pars_fragment:ug,envmap_pars_fragment:fg,envmap_pars_vertex:dg,envmap_physical_pars_fragment:bg,envmap_vertex:pg,fog_vertex:mg,fog_pars_vertex:gg,fog_fragment:xg,fog_pars_fragment:_g,gradientmap_pars_fragment:vg,lightmap_pars_fragment:Mg,lights_lambert_fragment:yg,lights_lambert_pars_fragment:Sg,lights_pars_begin:wg,lights_toon_fragment:Eg,lights_toon_pars_fragment:Tg,lights_phong_fragment:Ag,lights_phong_pars_fragment:Cg,lights_physical_fragment:Rg,lights_physical_pars_fragment:Pg,lights_fragment_begin:Lg,lights_fragment_maps:Ig,lights_fragment_end:Dg,logdepthbuf_fragment:Ug,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Fg,logdepthbuf_vertex:zg,map_fragment:Og,map_pars_fragment:Bg,map_particle_fragment:kg,map_particle_pars_fragment:Gg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Wg,morphcolor_vertex:Xg,morphnormal_vertex:$g,morphtarget_pars_vertex:Yg,morphtarget_vertex:qg,normal_fragment_begin:Kg,normal_fragment_maps:jg,normal_pars_fragment:Zg,normal_pars_vertex:Jg,normal_vertex:Qg,normalmap_pars_fragment:tx,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:nx,clearcoat_pars_fragment:ix,iridescence_pars_fragment:sx,opaque_fragment:rx,packing:ox,premultiplied_alpha_fragment:ax,project_vertex:lx,dithering_fragment:cx,dithering_pars_fragment:hx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:px,shadowmap_vertex:mx,shadowmask_pars_fragment:gx,skinbase_vertex:xx,skinning_pars_vertex:_x,skinning_vertex:vx,skinnormal_vertex:Mx,specularmap_fragment:yx,specularmap_pars_fragment:Sx,tonemapping_fragment:wx,tonemapping_pars_fragment:bx,transmission_fragment:Ex,transmission_pars_fragment:Tx,uv_pars_fragment:Ax,uv_pars_vertex:Cx,uv_vertex:Rx,worldpos_vertex:Px,background_vert:Lx,background_frag:Ix,backgroundCube_vert:Dx,backgroundCube_frag:Ux,cube_vert:Nx,cube_frag:Fx,depth_vert:zx,depth_frag:Ox,distanceRGBA_vert:Bx,distanceRGBA_frag:kx,equirect_vert:Gx,equirect_frag:Hx,linedashed_vert:Vx,linedashed_frag:Wx,meshbasic_vert:Xx,meshbasic_frag:$x,meshlambert_vert:Yx,meshlambert_frag:qx,meshmatcap_vert:Kx,meshmatcap_frag:jx,meshnormal_vert:Zx,meshnormal_frag:Jx,meshphong_vert:Qx,meshphong_frag:t_,meshphysical_vert:e_,meshphysical_frag:n_,meshtoon_vert:i_,meshtoon_frag:s_,points_vert:r_,points_frag:o_,shadow_vert:a_,shadow_frag:l_,sprite_vert:c_,sprite_frag:h_},Dt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},mi={basic:{uniforms:En([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:En([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new kt(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:En([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:En([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:En([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new kt(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:En([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:En([Dt.points,Dt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:En([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:En([Dt.common,Dt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:En([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:En([Dt.sprite,Dt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:En([Dt.common,Dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:En([Dt.lights,Dt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};mi.physical={uniforms:En([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const aa={r:0,b:0,g:0},ps=new bi,u_=new fe;function f_(i,t,e,n,s,r,o){const a=new kt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const b=g(x);b===null?p(a,c):b&&b.isColor&&(p(b,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===qa)?(h===void 0&&(h=new ut(new ie(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Ar(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ps.copy(v.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(u_.makeRotationFromEuler(ps)),h.material.toneMapped=be.getTransfer(b.colorSpace)!==Ue,(u!==b||f!==b.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ut(new He(2,2),new dn({name:"BackgroundMaterial",uniforms:Ar(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=be.getTransfer(b.colorSpace)!==Ue,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(aa,hd(i)),n.buffers.color.setClear(aa.r,aa.g,aa.b,v,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:m,dispose:M}}function d_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,N,D,F,O){let X=!1;const q=u(F,D,N);r!==q&&(r=q,l(r.object)),X=d(y,F,D,O),X&&g(y,F,D,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(y,N,D,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,N,D){const F=D.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let X=O[N.id];X===void 0&&(X={},O[N.id]=X);let q=X[F];return q===void 0&&(q=f(c()),X[F]=q),q}function f(y){const N=[],D=[],F=[];for(let O=0;O<e;O++)N[O]=0,D[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:D,attributeDivisors:F,object:y,attributes:{},index:null}}function d(y,N,D,F){const O=r.attributes,X=N.attributes;let q=0;const nt=D.getAttributes();for(const G in nt)if(nt[G].location>=0){const dt=O[G];let Tt=X[G];if(Tt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Tt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Tt=y.instanceColor)),dt===void 0||dt.attribute!==Tt||Tt&&dt.data!==Tt.data)return!0;q++}return r.attributesNum!==q||r.index!==F}function g(y,N,D,F){const O={},X=N.attributes;let q=0;const nt=D.getAttributes();for(const G in nt)if(nt[G].location>=0){let dt=X[G];dt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));const Tt={};Tt.attribute=dt,dt&&dt.data&&(Tt.data=dt.data),O[G]=Tt,q++}r.attributes=O,r.attributesNum=q,r.index=F}function _(){const y=r.newAttributes;for(let N=0,D=y.length;N<D;N++)y[N]=0}function m(y){p(y,0)}function p(y,N){const D=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;D[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),O[y]!==N&&(i.vertexAttribDivisor(y,N),O[y]=N)}function M(){const y=r.newAttributes,N=r.enabledAttributes;for(let D=0,F=N.length;D<F;D++)N[D]!==y[D]&&(i.disableVertexAttribArray(D),N[D]=0)}function x(y,N,D,F,O,X,q){q===!0?i.vertexAttribIPointer(y,N,D,O,X):i.vertexAttribPointer(y,N,D,F,O,X)}function v(y,N,D,F){_();const O=F.attributes,X=D.getAttributes(),q=N.defaultAttributeValues;for(const nt in X){const G=X[nt];if(G.location>=0){let j=O[nt];if(j===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const dt=j.normalized,Tt=j.itemSize,ft=t.get(j);if(ft===void 0)continue;const Nt=ft.buffer,pt=ft.type,Pt=ft.bytesPerElement,B=pt===i.INT||pt===i.UNSIGNED_INT||j.gpuType===lh;if(j.isInterleavedBufferAttribute){const H=j.data,I=H.stride,et=j.offset;if(H.isInstancedInterleavedBuffer){for(let st=0;st<G.locationSize;st++)p(G.location+st,H.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let st=0;st<G.locationSize;st++)m(G.location+st);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let st=0;st<G.locationSize;st++)x(G.location+st,Tt/G.locationSize,pt,dt,I*Pt,(et+Tt/G.locationSize*st)*Pt,B)}else{if(j.isInstancedBufferAttribute){for(let H=0;H<G.locationSize;H++)p(G.location+H,j.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let H=0;H<G.locationSize;H++)m(G.location+H);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let H=0;H<G.locationSize;H++)x(G.location+H,Tt/G.locationSize,pt,dt,Tt*Pt,Tt/G.locationSize*H*Pt,B)}}else if(q!==void 0){const dt=q[nt];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(G.location,dt);break;case 3:i.vertexAttrib3fv(G.location,dt);break;case 4:i.vertexAttrib4fv(G.location,dt);break;default:i.vertexAttrib1fv(G.location,dt)}}}}M()}function b(){R();for(const y in n){const N=n[y];for(const D in N){const F=N[D];for(const O in F)h(F[O].object),delete F[O];delete N[D]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const N=n[y.id];for(const D in N){const F=N[D];for(const O in F)h(F[O].object),delete F[O];delete N[D]}delete n[y.id]}function C(y){for(const N in n){const D=n[N];if(D[y.id]===void 0)continue;const F=D[y.id];for(const O in F)h(F[O].object),delete F[O];delete D[y.id]}}function R(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function p_(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function m_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==oi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const R=C===Bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==wi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_i&&!R)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,maxSamples:E}}function g_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new xs,a=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,x=M*4;let v=p.clippingState||null;c.value=v,v=h(g,f,x,d);for(let b=0;b!==x;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function x_(i){let t=new WeakMap;function e(o,a){return a===mc?o.mapping=wr:a===gc&&(o.mapping=br),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===mc||a===gc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new U0(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const hr=4,Vu=[.125,.215,.35,.446,.526,.582],ys=20,Gl=new Ah,Wu=new kt;let Hl=null,Vl=0,Wl=0,Xl=!1;const _s=(1+Math.sqrt(5))/2,nr=1/_s,Xu=[new U(-_s,nr,0),new U(_s,nr,0),new U(-nr,0,_s),new U(nr,0,_s),new U(0,_s,-nr),new U(0,_s,nr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],__=new U;class $u{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=__}=r;Hl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hl,Vl,Wl),this._renderer.xr.enabled=Xl,t.scissorTest=!1,la(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Bi,format:oi,colorSpace:Er,depthBuffer:!1},s=Yu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v_(r)),this._blurMaterial=M_(r,t,e)}return s}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,Gl)}_sceneToCubeUV(t,e,n,s,r){const c=new Ln(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Wu),u.toneMapping=ss,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new le({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),m=new ut(new ie,_);let p=!1;const M=t.background;M?M.isColor&&(_.color.copy(M),t.background=null,p=!0):(_.color.copy(Wu),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):v===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));const b=this._cubeSize;la(s,v*b,x>2?b:0,b,b),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===wr||t.mapping===br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;la(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Gl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xu[(s-r-1)%Xu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ut(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ys-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ys;m>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);const p=[];let M=0;for(let C=0;C<ys;++C){const R=C/_,w=Math.exp(-R*R/2);p.push(w),C===0?M+=w:C<m&&(M+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[s],b=3*v*(s>x-hr?s-x+hr:0),E=4*(this._cubeSize-v);la(e,b,E,3*v,2*v),c.setRenderTarget(e),c.render(u,Gl)}}function v_(i){const t=[],e=[],n=[];let s=i;const r=i-hr+1+Vu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-hr?c=Vu[o-i+hr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let E=0;E<d;E++){const C=E%3*2/3-1,R=E>2?0:-1,w=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];M.set(w,_*g*E),x.set(f,m*g*E);const y=[E,E,E,E,E,E];v.set(y,p*g*E)}const b=new Be;b.setAttribute("position",new cn(M,_)),b.setAttribute("uv",new cn(x,m)),b.setAttribute("faceIndex",new cn(v,p)),t.push(b),s>hr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yu(i,t,e){const n=new ai(i,t,e);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function M_(i,t,e){const n=new Float32Array(ys),s=new U(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function qu(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ku(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ch(){return`

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
	`}function y_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===mc||c===gc,h=c===wr||c===br;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new $u(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new $u(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function S_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function w_(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,v=M.length;x<v;x+=3){const b=M[x+0],E=M[x+1],C=M[x+2];f.push(b,E,E,C,C,b)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const b=x+0,E=x+1,C=x+2;f.push(b,E,E,C,C,b)}}else return;const m=new(rd(f)?cd:ld)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function b_(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function E_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function T_(i,t,e){const n=new WeakMap,s=new Fe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=a.attributes.position.count*v,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*E*4*u),R=new od(C,b,E,u);R.type=_i,R.needsUpdate=!0;const w=v*4;for(let N=0;N<u;N++){const D=p[N],F=M[N],O=x[N],X=b*E*4*N;for(let q=0;q<D.count;q++){const nt=q*w;g===!0&&(s.fromBufferAttribute(D,q),C[X+nt+0]=s.x,C[X+nt+1]=s.y,C[X+nt+2]=s.z,C[X+nt+3]=0),_===!0&&(s.fromBufferAttribute(F,q),C[X+nt+4]=s.x,C[X+nt+5]=s.y,C[X+nt+6]=s.z,C[X+nt+7]=0),m===!0&&(s.fromBufferAttribute(O,q),C[X+nt+8]=s.x,C[X+nt+9]=s.y,C[X+nt+10]=s.z,C[X+nt+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new St(b,E)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function A_(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Rd=new Sn,ju=new md(1,1),Pd=new od,Ld=new _0,Id=new fd,Zu=[],Ju=[],Qu=new Float32Array(16),tf=new Float32Array(9),ef=new Float32Array(4);function Nr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Zu[s];if(r===void 0&&(r=new Float32Array(s),Zu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function hn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function un(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function nl(i,t){let e=Ju[t];e===void 0&&(e=new Int32Array(t),Ju[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function C_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function R_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2fv(this.addr,t),un(e,t)}}function P_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;i.uniform3fv(this.addr,t),un(e,t)}}function L_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4fv(this.addr,t),un(e,t)}}function I_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;ef.set(n),i.uniformMatrix2fv(this.addr,!1,ef),un(e,n)}}function D_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;tf.set(n),i.uniformMatrix3fv(this.addr,!1,tf),un(e,n)}}function U_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Qu.set(n),i.uniformMatrix4fv(this.addr,!1,Qu),un(e,n)}}function N_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function F_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2iv(this.addr,t),un(e,t)}}function z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;i.uniform3iv(this.addr,t),un(e,t)}}function O_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4iv(this.addr,t),un(e,t)}}function B_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function k_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2uiv(this.addr,t),un(e,t)}}function G_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;i.uniform3uiv(this.addr,t),un(e,t)}}function H_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4uiv(this.addr,t),un(e,t)}}function V_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ju.compareFunction=sd,r=ju):r=Rd,e.setTexture2D(t||r,s)}function W_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ld,s)}function X_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Id,s)}function $_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pd,s)}function Y_(i){switch(i){case 5126:return C_;case 35664:return R_;case 35665:return P_;case 35666:return L_;case 35674:return I_;case 35675:return D_;case 35676:return U_;case 5124:case 35670:return N_;case 35667:case 35671:return F_;case 35668:case 35672:return z_;case 35669:case 35673:return O_;case 5125:return B_;case 36294:return k_;case 36295:return G_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return $_}}function q_(i,t){i.uniform1fv(this.addr,t)}function K_(i,t){const e=Nr(t,this.size,2);i.uniform2fv(this.addr,e)}function j_(i,t){const e=Nr(t,this.size,3);i.uniform3fv(this.addr,e)}function Z_(i,t){const e=Nr(t,this.size,4);i.uniform4fv(this.addr,e)}function J_(i,t){const e=Nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Q_(i,t){const e=Nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tv(i,t){const e=Nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ev(i,t){i.uniform1iv(this.addr,t)}function nv(i,t){i.uniform2iv(this.addr,t)}function iv(i,t){i.uniform3iv(this.addr,t)}function sv(i,t){i.uniform4iv(this.addr,t)}function rv(i,t){i.uniform1uiv(this.addr,t)}function ov(i,t){i.uniform2uiv(this.addr,t)}function av(i,t){i.uniform3uiv(this.addr,t)}function lv(i,t){i.uniform4uiv(this.addr,t)}function cv(i,t,e){const n=this.cache,s=t.length,r=nl(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Rd,r[o])}function hv(i,t,e){const n=this.cache,s=t.length,r=nl(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ld,r[o])}function uv(i,t,e){const n=this.cache,s=t.length,r=nl(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Id,r[o])}function fv(i,t,e){const n=this.cache,s=t.length,r=nl(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pd,r[o])}function dv(i){switch(i){case 5126:return q_;case 35664:return K_;case 35665:return j_;case 35666:return Z_;case 35674:return J_;case 35675:return Q_;case 35676:return tv;case 5124:case 35670:return ev;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return ov;case 36295:return av;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return fv}}class pv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Y_(e.type)}}class mv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dv(e.type)}}class gv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const $l=/(\w+)(\])?(\[|\.)?/g;function nf(i,t){i.seq.push(t),i.map[t.id]=t}function xv(i,t,e){const n=i.name,s=n.length;for($l.lastIndex=0;;){const r=$l.exec(n),o=$l.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){nf(e,l===void 0?new pv(a,i,t):new mv(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new gv(a),nf(e,u)),e=u}}}class Sa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);xv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function sf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const _v=37297;let vv=0;function Mv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const rf=new ue;function yv(i){be._getMatrix(rf,be.workingColorSpace,i);const t=`mat3( ${rf.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(i)){case Aa:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function of(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Mv(i.getShaderSource(t),a)}else return r}function Sv(i,t){const e=yv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wv(i,t){let e;switch(t){case Vf:e="Linear";break;case Wf:e="Reinhard";break;case Xf:e="Cineon";break;case ah:e="ACESFilmic";break;case Yf:e="AgX";break;case qf:e="Neutral";break;case $f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ca=new U;function bv(){be.getLuminanceCoefficients(ca);const i=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function Tv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Av(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function to(i){return i!==""}function af(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(Cv,Pv)}const Rv=new Map;function Pv(i,t){let e=me[t];if(e===void 0){const n=Rv.get(t);if(n!==void 0)e=me[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jc(e)}const Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(i){return i.replace(Lv,Iv)}function Iv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Dv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fi&&(t="SHADOWMAP_TYPE_VSM"),t}function Uv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wr:case br:t="ENVMAP_TYPE_CUBE";break;case qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nv(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===br&&(t="ENVMAP_MODE_REFRACTION"),t}function Fv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hf:t="ENVMAP_BLENDING_MULTIPLY";break;case Fp:t="ENVMAP_BLENDING_MIX";break;case zp:t="ENVMAP_BLENDING_ADD";break}return t}function zv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ov(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Dv(e),l=Uv(e),h=Nv(e),u=Fv(e),f=zv(e),d=Ev(e),g=Tv(r),_=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(to).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(to).join(`
`),p.length>0&&(p+=`
`)):(m=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),p=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ss?"#define TONE_MAPPING":"",e.toneMapping!==ss?me.tonemapping_pars_fragment:"",e.toneMapping!==ss?wv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,Sv("linearToOutputTexel",e.outputColorSpace),bv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(to).join(`
`)),o=Jc(o),o=af(o,e),o=lf(o,e),a=Jc(a),a=af(a,e),a=lf(a,e),o=cf(o),a=cf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+o,v=M+p+a,b=sf(s,s.VERTEX_SHADER,x),E=sf(s,s.FRAGMENT_SHADER,v);s.attachShader(_,b),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(N){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(b)||"",O=s.getShaderInfoLog(E)||"",X=D.trim(),q=F.trim(),nt=O.trim();let G=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,E);else{const dt=of(s,b,"vertex"),Tt=of(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+X+`
`+dt+`
`+Tt)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(q===""||nt==="")&&(j=!1);j&&(N.diagnostics={runnable:G,programLog:X,vertexShader:{log:q,prefix:m},fragmentShader:{log:nt,prefix:p}})}s.deleteShader(b),s.deleteShader(E),R=new Sa(s,_),w=Av(s,_)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,_v)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}let Bv=0;class kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gv(t),e.set(t,n)),n}}class Gv{constructor(t){this.id=Bv++,this.code=t,this.usedTimes=0}}function Hv(i,t,e,n,s,r,o){const a=new _h,c=new kv,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,y,N,D,F){const O=D.fog,X=F.geometry,q=w.isMeshStandardMaterial?D.environment:null,nt=(w.isMeshStandardMaterial?e:t).get(w.envMap||q),G=nt&&nt.mapping===qa?nt.image.height:null,j=g[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Tt=dt!==void 0?dt.length:0;let ft=0;X.morphAttributes.position!==void 0&&(ft=1),X.morphAttributes.normal!==void 0&&(ft=2),X.morphAttributes.color!==void 0&&(ft=3);let Nt,pt,Pt,B;if(j){const Ee=mi[j];Nt=Ee.vertexShader,pt=Ee.fragmentShader}else Nt=w.vertexShader,pt=w.fragmentShader,c.update(w),Pt=c.getVertexShaderID(w),B=c.getFragmentShaderID(w);const H=i.getRenderTarget(),I=i.state.buffers.depth.getReversed(),et=F.isInstancedMesh===!0,st=F.isBatchedMesh===!0,wt=!!w.map,te=!!w.matcap,L=!!nt,Jt=!!w.aoMap,ot=!!w.lightMap,rt=!!w.bumpMap,lt=!!w.normalMap,Vt=!!w.displacementMap,gt=!!w.emissiveMap,K=!!w.metalnessMap,Ot=!!w.roughnessMap,re=w.anisotropy>0,P=w.clearcoat>0,S=w.dispersion>0,Y=w.iridescence>0,$=w.sheen>0,it=w.transmission>0,tt=re&&!!w.anisotropyMap,Lt=P&&!!w.clearcoatMap,mt=P&&!!w.clearcoatNormalMap,Xt=P&&!!w.clearcoatRoughnessMap,qt=Y&&!!w.iridescenceMap,_t=Y&&!!w.iridescenceThicknessMap,Et=$&&!!w.sheenColorMap,Qt=$&&!!w.sheenRoughnessMap,jt=!!w.specularMap,At=!!w.specularColorMap,oe=!!w.specularIntensityMap,k=it&&!!w.transmissionMap,Mt=it&&!!w.thicknessMap,bt=!!w.gradientMap,Wt=!!w.alphaMap,xt=w.alphaTest>0,ct=!!w.alphaHash,Ht=!!w.extensions;let ae=ss;w.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Ae={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:Nt,fragmentShader:pt,defines:w.defines,customVertexShaderID:Pt,customFragmentShaderID:B,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:st,batchingColor:st&&F._colorsTexture!==null,instancing:et,instancingColor:et&&F.instanceColor!==null,instancingMorph:et&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Er,alphaToCoverage:!!w.alphaToCoverage,map:wt,matcap:te,envMap:L,envMapMode:L&&nt.mapping,envMapCubeUVHeight:G,aoMap:Jt,lightMap:ot,bumpMap:rt,normalMap:lt,displacementMap:f&&Vt,emissiveMap:gt,normalMapObjectSpace:lt&&w.normalMapType===Gp,normalMapTangentSpace:lt&&w.normalMapType===id,metalnessMap:K,roughnessMap:Ot,anisotropy:re,anisotropyMap:tt,clearcoat:P,clearcoatMap:Lt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Xt,dispersion:S,iridescence:Y,iridescenceMap:qt,iridescenceThicknessMap:_t,sheen:$,sheenColorMap:Et,sheenRoughnessMap:Qt,specularMap:jt,specularColorMap:At,specularIntensityMap:oe,transmission:it,transmissionMap:k,thicknessMap:Mt,gradientMap:bt,opaque:w.transparent===!1&&w.blending===mr&&w.alphaToCoverage===!1,alphaMap:Wt,alphaTest:xt,alphaHash:ct,combine:w.combine,mapUv:wt&&_(w.map.channel),aoMapUv:Jt&&_(w.aoMap.channel),lightMapUv:ot&&_(w.lightMap.channel),bumpMapUv:rt&&_(w.bumpMap.channel),normalMapUv:lt&&_(w.normalMap.channel),displacementMapUv:Vt&&_(w.displacementMap.channel),emissiveMapUv:gt&&_(w.emissiveMap.channel),metalnessMapUv:K&&_(w.metalnessMap.channel),roughnessMapUv:Ot&&_(w.roughnessMap.channel),anisotropyMapUv:tt&&_(w.anisotropyMap.channel),clearcoatMapUv:Lt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:mt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&_(w.sheenRoughnessMap.channel),specularMapUv:jt&&_(w.specularMap.channel),specularColorMapUv:At&&_(w.specularColorMap.channel),specularIntensityMapUv:oe&&_(w.specularIntensityMap.channel),transmissionMapUv:k&&_(w.transmissionMap.channel),thicknessMapUv:Mt&&_(w.thicknessMap.channel),alphaMapUv:Wt&&_(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(lt||re),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(wt||Wt),fog:!!O,useFog:w.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:I,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:wt&&w.map.isVideoTexture===!0&&be.getTransfer(w.map.colorSpace)===Ue,decodeVideoTextureEmissive:gt&&w.emissiveMap.isVideoTexture===!0&&be.getTransfer(w.emissiveMap.colorSpace)===Ue,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ye,flipSided:w.side===ln,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ht&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&w.extensions.multiDraw===!0||st)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)y.push(N),y.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(M(y,w),x(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function M(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function x(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const y=g[w.type];let N;if(y){const D=mi[y];N=po.clone(D.uniforms)}else N=w.uniforms;return N}function b(w,y){let N;for(let D=0,F=h.length;D<F;D++){const O=h[D];if(O.cacheKey===y){N=O,++N.usedTimes;break}}return N===void 0&&(N=new Ov(i,y,w,r),h.push(N)),N}function E(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:R}}function Vv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Wv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function uf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ff(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||Wv),n.length>1&&n.sort(f||uf),s.length>1&&s.sort(f||uf)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Xv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ff,i.set(n,[o])):s>=r.length?(o=new ff,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $v(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new kt};break;case"SpotLight":e={position:new U,direction:new U,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Yv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let qv=0;function Kv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jv(i){const t=new $v,e=Yv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new fe,o=new fe;function a(l){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,x=0,v=0,b=0,E=0,C=0;l.sort(Kv);for(let w=0,y=l.length;w<y;w++){const N=l[w],D=N.color,F=N.intensity,O=N.distance,X=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=D.r*F,u+=D.g*F,f+=D.b*F;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],F);C++}else if(N.isDirectionalLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const nt=N.shadow,G=e.get(N);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=N.shadow.matrix,M++}n.directional[d]=q,d++}else if(N.isSpotLight){const q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(D).multiplyScalar(F),q.distance=O,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[_]=q;const nt=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,nt.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[_]=nt.matrix,N.castShadow){const G=e.get(N);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=X,v++}_++}else if(N.isRectAreaLight){const q=t.get(N);q.color.copy(D).multiplyScalar(F),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=q,m++}else if(N.isPointLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const nt=N.shadow,G=e.get(N);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,G.shadowCameraNear=nt.camera.near,G.shadowCameraFar=nt.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=N.shadow.matrix,x++}n.point[g]=q,g++}else if(N.isHemisphereLight){const q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(F),q.groundColor.copy(N.groundColor).multiplyScalar(F),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==b||R.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=b,R.numLightProbes=C,n.version=qv++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function df(i){const t=new jv(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Zv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new df(i),t.set(s,[a])):r>=o.length?(a=new df(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qv=`uniform sampler2D shadow_pass;
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
}`;function tM(i,t,e){let n=new Mh;const s=new St,r=new St,o=new Fe,a=new wm({depthPacking:kp}),c=new bm,l={},h=e.maxTextureSize,u={[Wi]:ln,[ln]:Wi,[Ye]:Ye},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Jv,fragmentShader:Qv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gf;let p=this.type;this.render=function(E,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Oi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=p!==Fi&&this.type===Fi,O=p===Fi&&this.type!==Fi;for(let X=0,q=E.length;X<q;X++){const nt=E[X],G=nt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const j=G.getFrameExtents();if(s.multiply(j),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,G.mapSize.y=r.y)),G.map===null||F===!0||O===!0){const Tt=this.type!==Fi?{minFilter:Gn,magFilter:Gn}:{};G.map!==null&&G.map.dispose(),G.map=new ai(s.x,s.y,Tt),G.map.texture.name=nt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const dt=G.getViewportCount();for(let Tt=0;Tt<dt;Tt++){const ft=G.getViewport(Tt);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),D.viewport(o),G.updateMatrices(nt,Tt),n=G.getFrustum(),v(C,R,G.camera,nt,this.type)}G.isPointLightShadow!==!0&&this.type===Fi&&M(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,y,N)};function M(E,C){const R=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ai(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,R,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,R,d,_,null)}function x(E,C,R,w){let y=null;const N=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)y=N;else if(y=R.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=y.uuid,F=C.uuid;let O=l[D];O===void 0&&(O={},l[D]=O);let X=O[F];X===void 0&&(X=y.clone(),O[F]=X,C.addEventListener("dispose",b)),y=X}if(y.visible=C.visible,y.wireframe=C.wireframe,w===Fi?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=i.properties.get(y);D.light=R}return y}function v(E,C,R,w,y){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Fi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const F=t.update(E),O=E.material;if(Array.isArray(O)){const X=F.groups;for(let q=0,nt=X.length;q<nt;q++){const G=X[q],j=O[G.materialIndex];if(j&&j.visible){const dt=x(E,j,w,y);E.onBeforeShadow(i,E,C,R,F,dt,G),i.renderBufferDirect(R,null,F,dt,E,G),E.onAfterShadow(i,E,C,R,F,dt,G)}}}else if(O.visible){const X=x(E,O,w,y);E.onBeforeShadow(i,E,C,R,F,X,null),i.renderBufferDirect(R,null,F,X,E,null),E.onAfterShadow(i,E,C,R,F,X,null)}}const D=E.children;for(let F=0,O=D.length;F<O;F++)v(D[F],C,R,w,y)}function b(E){E.target.removeEventListener("dispose",b);for(const R in l){const w=l[R],y=E.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const eM={[lc]:cc,[hc]:dc,[uc]:pc,[Sr]:fc,[cc]:lc,[dc]:hc,[pc]:uc,[fc]:Sr};function nM(i,t){function e(){let k=!1;const Mt=new Fe;let bt=null;const Wt=new Fe(0,0,0,0);return{setMask:function(xt){bt!==xt&&!k&&(i.colorMask(xt,xt,xt,xt),bt=xt)},setLocked:function(xt){k=xt},setClear:function(xt,ct,Ht,ae,Ae){Ae===!0&&(xt*=ae,ct*=ae,Ht*=ae),Mt.set(xt,ct,Ht,ae),Wt.equals(Mt)===!1&&(i.clearColor(xt,ct,Ht,ae),Wt.copy(Mt))},reset:function(){k=!1,bt=null,Wt.set(-1,0,0,0)}}}function n(){let k=!1,Mt=!1,bt=null,Wt=null,xt=null;return{setReversed:function(ct){if(Mt!==ct){const Ht=t.get("EXT_clip_control");ct?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Mt=ct;const ae=xt;xt=null,this.setClear(ae)}},getReversed:function(){return Mt},setTest:function(ct){ct?H(i.DEPTH_TEST):I(i.DEPTH_TEST)},setMask:function(ct){bt!==ct&&!k&&(i.depthMask(ct),bt=ct)},setFunc:function(ct){if(Mt&&(ct=eM[ct]),Wt!==ct){switch(ct){case lc:i.depthFunc(i.NEVER);break;case cc:i.depthFunc(i.ALWAYS);break;case hc:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case uc:i.depthFunc(i.EQUAL);break;case fc:i.depthFunc(i.GEQUAL);break;case dc:i.depthFunc(i.GREATER);break;case pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Wt=ct}},setLocked:function(ct){k=ct},setClear:function(ct){xt!==ct&&(Mt&&(ct=1-ct),i.clearDepth(ct),xt=ct)},reset:function(){k=!1,bt=null,Wt=null,xt=null,Mt=!1}}}function s(){let k=!1,Mt=null,bt=null,Wt=null,xt=null,ct=null,Ht=null,ae=null,Ae=null;return{setTest:function(Ee){k||(Ee?H(i.STENCIL_TEST):I(i.STENCIL_TEST))},setMask:function(Ee){Mt!==Ee&&!k&&(i.stencilMask(Ee),Mt=Ee)},setFunc:function(Ee,jn,on){(bt!==Ee||Wt!==jn||xt!==on)&&(i.stencilFunc(Ee,jn,on),bt=Ee,Wt=jn,xt=on)},setOp:function(Ee,jn,on){(ct!==Ee||Ht!==jn||ae!==on)&&(i.stencilOp(Ee,jn,on),ct=Ee,Ht=jn,ae=on)},setLocked:function(Ee){k=Ee},setClear:function(Ee){Ae!==Ee&&(i.clearStencil(Ee),Ae=Ee)},reset:function(){k=!1,Mt=null,bt=null,Wt=null,xt=null,ct=null,Ht=null,ae=null,Ae=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,b=null,E=null,C=new kt(0,0,0),R=0,w=!1,y=null,N=null,D=null,F=null,O=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,nt=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=nt>=1):G.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=nt>=2);let j=null,dt={};const Tt=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),Nt=new Fe().fromArray(Tt),pt=new Fe().fromArray(ft);function Pt(k,Mt,bt,Wt){const xt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(k,ct),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<bt;Ht++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,Wt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(Mt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return ct}const B={};B[i.TEXTURE_2D]=Pt(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=Pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=Pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=Pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(i.DEPTH_TEST),o.setFunc(Sr),rt(!1),lt(Kh),H(i.CULL_FACE),Jt(Oi);function H(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function I(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function et(k,Mt){return u[k]!==Mt?(i.bindFramebuffer(k,Mt),u[k]=Mt,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function st(k,Mt){let bt=d,Wt=!1;if(k){bt=f.get(Mt),bt===void 0&&(bt=[],f.set(Mt,bt));const xt=k.textures;if(bt.length!==xt.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Ht=xt.length;ct<Ht;ct++)bt[ct]=i.COLOR_ATTACHMENT0+ct;bt.length=xt.length,Wt=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,Wt=!0);Wt&&i.drawBuffers(bt)}function wt(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const te={[Ms]:i.FUNC_ADD,[vp]:i.FUNC_SUBTRACT,[Mp]:i.FUNC_REVERSE_SUBTRACT};te[yp]=i.MIN,te[Sp]=i.MAX;const L={[wp]:i.ZERO,[bp]:i.ONE,[Ep]:i.SRC_COLOR,[oc]:i.SRC_ALPHA,[Lp]:i.SRC_ALPHA_SATURATE,[Rp]:i.DST_COLOR,[Ap]:i.DST_ALPHA,[Tp]:i.ONE_MINUS_SRC_COLOR,[ac]:i.ONE_MINUS_SRC_ALPHA,[Pp]:i.ONE_MINUS_DST_COLOR,[Cp]:i.ONE_MINUS_DST_ALPHA,[Ip]:i.CONSTANT_COLOR,[Dp]:i.ONE_MINUS_CONSTANT_COLOR,[Up]:i.CONSTANT_ALPHA,[Np]:i.ONE_MINUS_CONSTANT_ALPHA};function Jt(k,Mt,bt,Wt,xt,ct,Ht,ae,Ae,Ee){if(k===Oi){_===!0&&(I(i.BLEND),_=!1);return}if(_===!1&&(H(i.BLEND),_=!0),k!==_p){if(k!==m||Ee!==w){if((p!==Ms||v!==Ms)&&(i.blendEquation(i.FUNC_ADD),p=Ms,v=Ms),Ee)switch(k){case mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ci:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,x=null,b=null,E=null,C.set(0,0,0),R=0,m=k,w=Ee}return}xt=xt||Mt,ct=ct||bt,Ht=Ht||Wt,(Mt!==p||xt!==v)&&(i.blendEquationSeparate(te[Mt],te[xt]),p=Mt,v=xt),(bt!==M||Wt!==x||ct!==b||Ht!==E)&&(i.blendFuncSeparate(L[bt],L[Wt],L[ct],L[Ht]),M=bt,x=Wt,b=ct,E=Ht),(ae.equals(C)===!1||Ae!==R)&&(i.blendColor(ae.r,ae.g,ae.b,Ae),C.copy(ae),R=Ae),m=k,w=!1}function ot(k,Mt){k.side===Ye?I(i.CULL_FACE):H(i.CULL_FACE);let bt=k.side===ln;Mt&&(bt=!bt),rt(bt),k.blending===mr&&k.transparent===!1?Jt(Oi):Jt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Wt=k.stencilWrite;a.setTest(Wt),Wt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):I(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(k){y!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),y=k)}function lt(k){k!==mp?(H(i.CULL_FACE),k!==N&&(k===Kh?i.cullFace(i.BACK):k===gp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):I(i.CULL_FACE),N=k}function Vt(k){k!==D&&(q&&i.lineWidth(k),D=k)}function gt(k,Mt,bt){k?(H(i.POLYGON_OFFSET_FILL),(F!==Mt||O!==bt)&&(i.polygonOffset(Mt,bt),F=Mt,O=bt)):I(i.POLYGON_OFFSET_FILL)}function K(k){k?H(i.SCISSOR_TEST):I(i.SCISSOR_TEST)}function Ot(k){k===void 0&&(k=i.TEXTURE0+X-1),j!==k&&(i.activeTexture(k),j=k)}function re(k,Mt,bt){bt===void 0&&(j===null?bt=i.TEXTURE0+X-1:bt=j);let Wt=dt[bt];Wt===void 0&&(Wt={type:void 0,texture:void 0},dt[bt]=Wt),(Wt.type!==k||Wt.texture!==Mt)&&(j!==bt&&(i.activeTexture(bt),j=bt),i.bindTexture(k,Mt||B[k]),Wt.type=k,Wt.texture=Mt)}function P(){const k=dt[j];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(k){Nt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Nt.copy(k))}function Qt(k){pt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),pt.copy(k))}function jt(k,Mt){let bt=l.get(Mt);bt===void 0&&(bt=new WeakMap,l.set(Mt,bt));let Wt=bt.get(k);Wt===void 0&&(Wt=i.getUniformBlockIndex(Mt,k.name),bt.set(k,Wt))}function At(k,Mt){const Wt=l.get(Mt).get(k);c.get(Mt)!==Wt&&(i.uniformBlockBinding(Mt,Wt,k.__bindingPointIndex),c.set(Mt,Wt))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,dt={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,b=null,E=null,C=new kt(0,0,0),R=0,w=!1,y=null,N=null,D=null,F=null,O=null,Nt.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:I,bindFramebuffer:et,drawBuffers:st,useProgram:wt,setBlending:Jt,setMaterial:ot,setFlipSided:rt,setCullFace:lt,setLineWidth:Vt,setPolygonOffset:gt,setScissorTest:K,activeTexture:Ot,bindTexture:re,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:Y,texImage2D:qt,texImage3D:_t,updateUBOMapping:jt,uniformBlockBinding:At,texStorage2D:mt,texStorage3D:Xt,texSubImage2D:$,texSubImage3D:it,compressedTexSubImage2D:tt,compressedTexSubImage3D:Lt,scissor:Et,viewport:Qt,reset:oe}}function iM(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return d?new OffscreenCanvas(P,S):Ra("canvas")}function _(P,S,Y){let $=1;const it=re(P);if((it.width>Y||it.height>Y)&&($=Y/Math.max(it.width,it.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const tt=Math.floor($*it.width),Lt=Math.floor($*it.height);u===void 0&&(u=g(tt,Lt));const mt=S?g(tt,Lt):u;return mt.width=tt,mt.height=Lt,mt.getContext("2d").drawImage(P,0,0,tt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+tt+"x"+Lt+")."),mt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,S,Y,$,it=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let tt=S;if(S===i.RED&&(Y===i.FLOAT&&(tt=i.R32F),Y===i.HALF_FLOAT&&(tt=i.R16F),Y===i.UNSIGNED_BYTE&&(tt=i.R8)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(tt=i.R8UI),Y===i.UNSIGNED_SHORT&&(tt=i.R16UI),Y===i.UNSIGNED_INT&&(tt=i.R32UI),Y===i.BYTE&&(tt=i.R8I),Y===i.SHORT&&(tt=i.R16I),Y===i.INT&&(tt=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(tt=i.RG32F),Y===i.HALF_FLOAT&&(tt=i.RG16F),Y===i.UNSIGNED_BYTE&&(tt=i.RG8)),S===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(tt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(tt=i.RG16UI),Y===i.UNSIGNED_INT&&(tt=i.RG32UI),Y===i.BYTE&&(tt=i.RG8I),Y===i.SHORT&&(tt=i.RG16I),Y===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),Y===i.UNSIGNED_INT&&(tt=i.RGB32UI),Y===i.BYTE&&(tt=i.RGB8I),Y===i.SHORT&&(tt=i.RGB16I),Y===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(tt=i.RGBA32UI),Y===i.BYTE&&(tt=i.RGBA8I),Y===i.SHORT&&(tt=i.RGBA16I),Y===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&(Y===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),S===i.RGBA){const Lt=it?Aa:be.getTransfer($);Y===i.FLOAT&&(tt=i.RGBA32F),Y===i.HALF_FLOAT&&(tt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(tt=Lt===Ue?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(P,S){let Y;return P?S===null||S===Ps||S===co?Y=i.DEPTH24_STENCIL8:S===_i?Y=i.DEPTH32F_STENCIL8:S===lo&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ps||S===co?Y=i.DEPTH_COMPONENT24:S===_i?Y=i.DEPTH_COMPONENT32F:S===lo&&(Y=i.DEPTH_COMPONENT16),Y}function b(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Gn&&P.minFilter!==xi?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function E(P){const S=P.target;S.removeEventListener("dispose",E),R(S),S.isVideoTexture&&h.delete(S)}function C(P){const S=P.target;S.removeEventListener("dispose",C),y(S)}function R(P){const S=n.get(P);if(S.__webglInit===void 0)return;const Y=P.source,$=f.get(Y);if($){const it=$[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(P),Object.keys($).length===0&&f.delete(Y)}n.remove(P)}function w(P){const S=n.get(P);i.deleteTexture(S.__webglTexture);const Y=P.source,$=f.get(Y);delete $[S.__cacheKey],o.memory.textures--}function y(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let it=0;it<S.__webglFramebuffer[$].length;it++)i.deleteFramebuffer(S.__webglFramebuffer[$][it]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=P.textures;for(let $=0,it=Y.length;$<it;$++){const tt=n.get(Y[$]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(Y[$])}n.remove(P)}let N=0;function D(){N=0}function F(){const P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function O(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function X(P,S){const Y=n.get(P);if(P.isVideoTexture&&K(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(Y,P,S);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function q(P,S){const Y=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){B(Y,P,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function nt(P,S){const Y=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){B(Y,P,S);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function G(P,S){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){H(Y,P,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}const j={[Rs]:i.REPEAT,[bs]:i.CLAMP_TO_EDGE,[xc]:i.MIRRORED_REPEAT},dt={[Gn]:i.NEAREST,[Op]:i.NEAREST_MIPMAP_NEAREST,[Ro]:i.NEAREST_MIPMAP_LINEAR,[xi]:i.LINEAR,[hl]:i.LINEAR_MIPMAP_NEAREST,[Es]:i.LINEAR_MIPMAP_LINEAR},Tt={[Hp]:i.NEVER,[qp]:i.ALWAYS,[Vp]:i.LESS,[sd]:i.LEQUAL,[Wp]:i.EQUAL,[Yp]:i.GEQUAL,[Xp]:i.GREATER,[$p]:i.NOTEQUAL};function ft(P,S){if(S.type===_i&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===xi||S.magFilter===hl||S.magFilter===Ro||S.magFilter===Es||S.minFilter===xi||S.minFilter===hl||S.minFilter===Ro||S.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,j[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,j[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,j[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,dt[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,dt[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Tt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Gn||S.minFilter!==Ro&&S.minFilter!==Es||S.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Nt(P,S){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",E));const $=S.source;let it=f.get($);it===void 0&&(it={},f.set($,it));const tt=O(S);if(tt!==P.__cacheKey){it[tt]===void 0&&(it[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),it[tt].usedTimes++;const Lt=it[P.__cacheKey];Lt!==void 0&&(it[P.__cacheKey].usedTimes--,Lt.usedTimes===0&&w(S)),P.__cacheKey=tt,P.__webglTexture=it[tt].texture}return Y}function pt(P,S,Y){return Math.floor(Math.floor(P/Y)/S)}function Pt(P,S,Y,$){const tt=P.updateRanges;if(tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,Y,$,S.data);else{tt.sort((_t,Et)=>_t.start-Et.start);let Lt=0;for(let _t=1;_t<tt.length;_t++){const Et=tt[Lt],Qt=tt[_t],jt=Et.start+Et.count,At=pt(Qt.start,S.width,4),oe=pt(Et.start,S.width,4);Qt.start<=jt+1&&At===oe&&pt(Qt.start+Qt.count-1,S.width,4)===At?Et.count=Math.max(Et.count,Qt.start+Qt.count-Et.start):(++Lt,tt[Lt]=Qt)}tt.length=Lt+1;const mt=i.getParameter(i.UNPACK_ROW_LENGTH),Xt=i.getParameter(i.UNPACK_SKIP_PIXELS),qt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let _t=0,Et=tt.length;_t<Et;_t++){const Qt=tt[_t],jt=Math.floor(Qt.start/4),At=Math.ceil(Qt.count/4),oe=jt%S.width,k=Math.floor(jt/S.width),Mt=At,bt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,oe,k,Mt,bt,Y,$,S.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,mt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,qt)}}function B(P,S,Y){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const it=Nt(P,S),tt=S.source;e.bindTexture($,P.__webglTexture,i.TEXTURE0+Y);const Lt=n.get(tt);if(tt.version!==Lt.__version||it===!0){e.activeTexture(i.TEXTURE0+Y);const mt=be.getPrimaries(be.workingColorSpace),Xt=S.colorSpace===es?null:be.getPrimaries(S.colorSpace),qt=S.colorSpace===es||mt===Xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let _t=_(S.image,!1,s.maxTextureSize);_t=Ot(S,_t);const Et=r.convert(S.format,S.colorSpace),Qt=r.convert(S.type);let jt=x(S.internalFormat,Et,Qt,S.colorSpace,S.isVideoTexture);ft($,S);let At;const oe=S.mipmaps,k=S.isVideoTexture!==!0,Mt=Lt.__version===void 0||it===!0,bt=tt.dataReady,Wt=b(S,_t);if(S.isDepthTexture)jt=v(S.format===uo,S.type),Mt&&(k?e.texStorage2D(i.TEXTURE_2D,1,jt,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,jt,_t.width,_t.height,0,Et,Qt,null));else if(S.isDataTexture)if(oe.length>0){k&&Mt&&e.texStorage2D(i.TEXTURE_2D,Wt,jt,oe[0].width,oe[0].height);for(let xt=0,ct=oe.length;xt<ct;xt++)At=oe[xt],k?bt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,At.width,At.height,Et,Qt,At.data):e.texImage2D(i.TEXTURE_2D,xt,jt,At.width,At.height,0,Et,Qt,At.data);S.generateMipmaps=!1}else k?(Mt&&e.texStorage2D(i.TEXTURE_2D,Wt,jt,_t.width,_t.height),bt&&Pt(S,_t,Et,Qt)):e.texImage2D(i.TEXTURE_2D,0,jt,_t.width,_t.height,0,Et,Qt,_t.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){k&&Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,jt,oe[0].width,oe[0].height,_t.depth);for(let xt=0,ct=oe.length;xt<ct;xt++)if(At=oe[xt],S.format!==oi)if(Et!==null)if(k){if(bt)if(S.layerUpdates.size>0){const Ht=Hu(At.width,At.height,S.format,S.type);for(const ae of S.layerUpdates){const Ae=At.data.subarray(ae*Ht/At.data.BYTES_PER_ELEMENT,(ae+1)*Ht/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,ae,At.width,At.height,1,Et,Ae)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,At.width,At.height,_t.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,jt,At.width,At.height,_t.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,At.width,At.height,_t.depth,Et,Qt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,jt,At.width,At.height,_t.depth,0,Et,Qt,At.data)}else{k&&Mt&&e.texStorage2D(i.TEXTURE_2D,Wt,jt,oe[0].width,oe[0].height);for(let xt=0,ct=oe.length;xt<ct;xt++)At=oe[xt],S.format!==oi?Et!==null?k?bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,jt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?bt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,At.width,At.height,Et,Qt,At.data):e.texImage2D(i.TEXTURE_2D,xt,jt,At.width,At.height,0,Et,Qt,At.data)}else if(S.isDataArrayTexture)if(k){if(Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,jt,_t.width,_t.height,_t.depth),bt)if(S.layerUpdates.size>0){const xt=Hu(_t.width,_t.height,S.format,S.type);for(const ct of S.layerUpdates){const Ht=_t.data.subarray(ct*xt/_t.data.BYTES_PER_ELEMENT,(ct+1)*xt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,_t.width,_t.height,1,Et,Qt,Ht)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Et,Qt,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,jt,_t.width,_t.height,_t.depth,0,Et,Qt,_t.data);else if(S.isData3DTexture)k?(Mt&&e.texStorage3D(i.TEXTURE_3D,Wt,jt,_t.width,_t.height,_t.depth),bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Et,Qt,_t.data)):e.texImage3D(i.TEXTURE_3D,0,jt,_t.width,_t.height,_t.depth,0,Et,Qt,_t.data);else if(S.isFramebufferTexture){if(Mt)if(k)e.texStorage2D(i.TEXTURE_2D,Wt,jt,_t.width,_t.height);else{let xt=_t.width,ct=_t.height;for(let Ht=0;Ht<Wt;Ht++)e.texImage2D(i.TEXTURE_2D,Ht,jt,xt,ct,0,Et,Qt,null),xt>>=1,ct>>=1}}else if(oe.length>0){if(k&&Mt){const xt=re(oe[0]);e.texStorage2D(i.TEXTURE_2D,Wt,jt,xt.width,xt.height)}for(let xt=0,ct=oe.length;xt<ct;xt++)At=oe[xt],k?bt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Et,Qt,At):e.texImage2D(i.TEXTURE_2D,xt,jt,Et,Qt,At);S.generateMipmaps=!1}else if(k){if(Mt){const xt=re(_t);e.texStorage2D(i.TEXTURE_2D,Wt,jt,xt.width,xt.height)}bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Qt,_t)}else e.texImage2D(i.TEXTURE_2D,0,jt,Et,Qt,_t);m(S)&&p($),Lt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function H(P,S,Y){if(S.image.length!==6)return;const $=Nt(P,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Y);const tt=n.get(it);if(it.version!==tt.__version||$===!0){e.activeTexture(i.TEXTURE0+Y);const Lt=be.getPrimaries(be.workingColorSpace),mt=S.colorSpace===es?null:be.getPrimaries(S.colorSpace),Xt=S.colorSpace===es||Lt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const qt=S.isCompressedTexture||S.image[0].isCompressedTexture,_t=S.image[0]&&S.image[0].isDataTexture,Et=[];for(let ct=0;ct<6;ct++)!qt&&!_t?Et[ct]=_(S.image[ct],!0,s.maxCubemapSize):Et[ct]=_t?S.image[ct].image:S.image[ct],Et[ct]=Ot(S,Et[ct]);const Qt=Et[0],jt=r.convert(S.format,S.colorSpace),At=r.convert(S.type),oe=x(S.internalFormat,jt,At,S.colorSpace),k=S.isVideoTexture!==!0,Mt=tt.__version===void 0||$===!0,bt=it.dataReady;let Wt=b(S,Qt);ft(i.TEXTURE_CUBE_MAP,S);let xt;if(qt){k&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,oe,Qt.width,Qt.height);for(let ct=0;ct<6;ct++){xt=Et[ct].mipmaps;for(let Ht=0;Ht<xt.length;Ht++){const ae=xt[Ht];S.format!==oi?jt!==null?k?bt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,0,0,ae.width,ae.height,jt,ae.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,0,0,ae.width,ae.height,jt,At,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,oe,ae.width,ae.height,0,jt,At,ae.data)}}}else{if(xt=S.mipmaps,k&&Mt){xt.length>0&&Wt++;const ct=re(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,oe,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(_t){k?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Et[ct].width,Et[ct].height,jt,At,Et[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,oe,Et[ct].width,Et[ct].height,0,jt,At,Et[ct].data);for(let Ht=0;Ht<xt.length;Ht++){const Ae=xt[Ht].image[ct].image;k?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,0,0,Ae.width,Ae.height,jt,At,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,oe,Ae.width,Ae.height,0,jt,At,Ae.data)}}else{k?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,jt,At,Et[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,oe,jt,At,Et[ct]);for(let Ht=0;Ht<xt.length;Ht++){const ae=xt[Ht];k?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,0,0,jt,At,ae.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,oe,jt,At,ae.image[ct])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),tt.__version=it.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function I(P,S,Y,$,it,tt){const Lt=r.convert(Y.format,Y.colorSpace),mt=r.convert(Y.type),Xt=x(Y.internalFormat,Lt,mt,Y.colorSpace),qt=n.get(S),_t=n.get(Y);if(_t.__renderTarget=S,!qt.__hasExternalTextures){const Et=Math.max(1,S.width>>tt),Qt=Math.max(1,S.height>>tt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,tt,Xt,Et,Qt,S.depth,0,Lt,mt,null):e.texImage2D(it,tt,Xt,Et,Qt,0,Lt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),gt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,it,_t.__webglTexture,0,Vt(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,it,_t.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(P,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){const $=S.depthTexture,it=$&&$.isDepthTexture?$.type:null,tt=v(S.stencilBuffer,it),Lt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=Vt(S);gt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,tt,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,tt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,P)}else{const $=S.textures;for(let it=0;it<$.length;it++){const tt=$[it],Lt=r.convert(tt.format,tt.colorSpace),mt=r.convert(tt.type),Xt=x(tt.internalFormat,Lt,mt,tt.colorSpace),qt=Vt(S);Y&&gt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Xt,S.width,S.height):gt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,Xt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Xt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const it=$.__webglTexture,tt=Vt(S);if(S.depthTexture.format===ho)gt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(S.depthTexture.format===uo)gt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function wt(P){const S=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",it)};$.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=$}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const $=P.texture.mipmaps;$&&$.length>0?st(S.__webglFramebuffer[0],P):st(S.__webglFramebuffer,P)}else if(Y){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),et(S.__webglDepthbuffer[$],P,!1);else{const it=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,tt)}}else{const $=P.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),et(S.__webglDepthbuffer,P,!1);else{const it=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(P,S,Y){const $=n.get(P);S!==void 0&&I($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&wt(P)}function L(P){const S=P.texture,Y=n.get(P),$=n.get(S);P.addEventListener("dispose",C);const it=P.textures,tt=P.isWebGLCubeRenderTarget===!0,Lt=it.length>1;if(Lt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),tt){Y.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[mt]=[];for(let Xt=0;Xt<S.mipmaps.length;Xt++)Y.__webglFramebuffer[mt][Xt]=i.createFramebuffer()}else Y.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let mt=0;mt<S.mipmaps.length;mt++)Y.__webglFramebuffer[mt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let mt=0,Xt=it.length;mt<Xt;mt++){const qt=n.get(it[mt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&gt(P)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let mt=0;mt<it.length;mt++){const Xt=it[mt];Y.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[mt]);const qt=r.convert(Xt.format,Xt.colorSpace),_t=r.convert(Xt.type),Et=x(Xt.internalFormat,qt,_t,Xt.colorSpace,P.isXRRenderTarget===!0),Qt=Vt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,Et,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),et(Y.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ft(i.TEXTURE_CUBE_MAP,S);for(let mt=0;mt<6;mt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Xt=0;Xt<S.mipmaps.length;Xt++)I(Y.__webglFramebuffer[mt][Xt],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Xt);else I(Y.__webglFramebuffer[mt],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let mt=0,Xt=it.length;mt<Xt;mt++){const qt=it[mt],_t=n.get(qt);let Et=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Et=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,_t.__webglTexture),ft(Et,qt),I(Y.__webglFramebuffer,P,qt,i.COLOR_ATTACHMENT0+mt,Et,0),m(qt)&&p(Et)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(mt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,$.__webglTexture),ft(mt,S),S.mipmaps&&S.mipmaps.length>0)for(let Xt=0;Xt<S.mipmaps.length;Xt++)I(Y.__webglFramebuffer[Xt],P,S,i.COLOR_ATTACHMENT0,mt,Xt);else I(Y.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,mt,0);m(S)&&p(mt),e.unbindTexture()}P.depthBuffer&&wt(P)}function Jt(P){const S=P.textures;for(let Y=0,$=S.length;Y<$;Y++){const it=S[Y];if(m(it)){const tt=M(P),Lt=n.get(it).__webglTexture;e.bindTexture(tt,Lt),p(tt),e.unbindTexture()}}}const ot=[],rt=[];function lt(P){if(P.samples>0){if(gt(P)===!1){const S=P.textures,Y=P.width,$=P.height;let it=i.COLOR_BUFFER_BIT;const tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(P),mt=S.length>1;if(mt)for(let qt=0;qt<S.length;qt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Xt=P.texture.mipmaps;Xt&&Xt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let qt=0;qt<S.length;qt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[qt]);const _t=n.get(S[qt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_t,0)}i.blitFramebuffer(0,0,Y,$,0,0,Y,$,it,i.NEAREST),c===!0&&(ot.length=0,rt.length=0,ot.push(i.COLOR_ATTACHMENT0+qt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ot.push(tt),rt.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let qt=0;qt<S.length;qt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[qt]);const _t=n.get(S[qt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,_t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Vt(P){return Math.min(s.maxSamples,P.samples)}function gt(P){const S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function K(P){const S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function Ot(P,S){const Y=P.colorSpace,$=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Er&&Y!==es&&(be.getTransfer(Y)===Ue?($!==oi||it!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function re(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=nt,this.setTextureCube=G,this.rebindTextures=te,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=I,this.useMultisampledRTT=gt}function sM(i,t){function e(n,s=es){let r;const o=be.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===ch)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jf)return i.BYTE;if(n===Zf)return i.SHORT;if(n===lo)return i.UNSIGNED_SHORT;if(n===lh)return i.INT;if(n===Ps)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===Bi)return i.HALF_FLOAT;if(n===td)return i.ALPHA;if(n===ed)return i.RGB;if(n===oi)return i.RGBA;if(n===ho)return i.DEPTH_COMPONENT;if(n===uo)return i.DEPTH_STENCIL;if(n===uh)return i.RED;if(n===fh)return i.RED_INTEGER;if(n===nd)return i.RG;if(n===dh)return i.RG_INTEGER;if(n===ph)return i.RGBA_INTEGER;if(n===_a||n===va||n===Ma||n===ya)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_c||n===vc||n===Mc||n===yc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sc||n===wc||n===bc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sc||n===wc)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ec||n===Tc||n===Ac||n===Cc||n===Rc||n===Pc||n===Lc||n===Ic||n===Dc||n===Uc||n===Nc||n===Fc||n===zc||n===Oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ec)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ic)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bc||n===kc||n===Gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Bc)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===Vc||n===Wc||n===Xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===co?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const rM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oM=`
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

}`;class aM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new gd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new dn({vertexShader:rM,fragmentShader:oM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new He(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lM extends Ir{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new aM,p={},M=e.getContextAttributes();let x=null,v=null;const b=[],E=[],C=new St;let R=null;const w=new Ln;w.viewport=new Fe;const y=new Ln;y.viewport=new Fe;const N=[w,y],D=new Rm;let F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let H=b[B];return H===void 0&&(H=new Ll,b[B]=H),H.getTargetRaySpace()},this.getControllerGrip=function(B){let H=b[B];return H===void 0&&(H=new Ll,b[B]=H),H.getGripSpace()},this.getHand=function(B){let H=b[B];return H===void 0&&(H=new Ll,b[B]=H),H.getHandSpace()};function X(B){const H=E.indexOf(B.inputSource);if(H===-1)return;const I=b[H];I!==void 0&&(I.update(B.inputSource,B.frame,l||o),I.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",nt);for(let B=0;B<b.length;B++){const H=E[B];H!==null&&(E[B]=null,b[B].disconnect(H))}F=null,O=null,m.reset();for(const B in p)delete p[B];t.setRenderTarget(x),d=null,f=null,u=null,s=null,v=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",q),s.addEventListener("inputsourceschange",nt),M.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let I=null,et=null,st=null;M.depth&&(st=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,I=M.stencil?uo:ho,et=M.stencil?co:Ps);const wt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new ai(f.textureWidth,f.textureHeight,{format:oi,type:wi,depthTexture:new md(f.textureWidth,f.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const I={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,I),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ai(d.framebufferWidth,d.framebufferHeight,{format:oi,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Pt.setContext(s),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(B){for(let H=0;H<B.removed.length;H++){const I=B.removed[H],et=E.indexOf(I);et>=0&&(E[et]=null,b[et].disconnect(I))}for(let H=0;H<B.added.length;H++){const I=B.added[H];let et=E.indexOf(I);if(et===-1){for(let wt=0;wt<b.length;wt++)if(wt>=E.length){E.push(I),et=wt;break}else if(E[wt]===null){E[wt]=I,et=wt;break}if(et===-1)break}const st=b[et];st&&st.connect(I)}}const G=new U,j=new U;function dt(B,H,I){G.setFromMatrixPosition(H.matrixWorld),j.setFromMatrixPosition(I.matrixWorld);const et=G.distanceTo(j),st=H.projectionMatrix.elements,wt=I.projectionMatrix.elements,te=st[14]/(st[10]-1),L=st[14]/(st[10]+1),Jt=(st[9]+1)/st[5],ot=(st[9]-1)/st[5],rt=(st[8]-1)/st[0],lt=(wt[8]+1)/wt[0],Vt=te*rt,gt=te*lt,K=et/(-rt+lt),Ot=K*-rt;if(H.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ot),B.translateZ(K),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),st[10]===-1)B.projectionMatrix.copy(H.projectionMatrix),B.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const re=te+K,P=L+K,S=Vt-Ot,Y=gt+(et-Ot),$=Jt*L/P*re,it=ot*L/P*re;B.projectionMatrix.makePerspective(S,Y,$,it,re,P),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Tt(B,H){H===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(H.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let H=B.near,I=B.far;m.texture!==null&&(m.depthNear>0&&(H=m.depthNear),m.depthFar>0&&(I=m.depthFar)),D.near=y.near=w.near=H,D.far=y.far=w.far=I,(F!==D.near||O!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,O=D.far),D.layers.mask=B.layers.mask|6,w.layers.mask=D.layers.mask&3,y.layers.mask=D.layers.mask&5;const et=B.parent,st=D.cameras;Tt(D,et);for(let wt=0;wt<st.length;wt++)Tt(st[wt],et);st.length===2?dt(D,w,y):D.projectionMatrix.copy(w.projectionMatrix),ft(B,D,et)};function ft(B,H,I){I===null?B.matrix.copy(H.matrixWorld):(B.matrix.copy(I.matrixWorld),B.matrix.invert(),B.matrix.multiply(H.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(H.projectionMatrix),B.projectionMatrixInverse.copy(H.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Tr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(B){c=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(B){return p[B]};let Nt=null;function pt(B,H){if(h=H.getViewerPose(l||o),g=H,h!==null){const I=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let et=!1;I.length!==D.cameras.length&&(D.cameras.length=0,et=!0);for(let L=0;L<I.length;L++){const Jt=I[L];let ot=null;if(d!==null)ot=d.getViewport(Jt);else{const lt=u.getViewSubImage(f,Jt);ot=lt.viewport,L===0&&(t.setRenderTargetTextures(v,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(v))}let rt=N[L];rt===void 0&&(rt=new Ln,rt.layers.enable(L),rt.viewport=new Fe,N[L]=rt),rt.matrix.fromArray(Jt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Jt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(ot.x,ot.y,ot.width,ot.height),L===0&&(D.matrix.copy(rt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),et===!0&&D.cameras.push(rt)}const st=s.enabledFeatures;if(st&&st.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const L=u.getDepthInformation(I[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(st&&st.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<I.length;L++){const Jt=I[L].camera;if(Jt){let ot=p[Jt];ot||(ot=new gd,p[Jt]=ot);const rt=u.getCameraImage(Jt);ot.sourceTexture=rt}}}}for(let I=0;I<b.length;I++){const et=E[I],st=b[I];et!==null&&st!==void 0&&st.update(et,H,l||o)}Nt&&Nt(B,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),g=null}const Pt=new Cd;Pt.setAnimationLoop(pt),this.setAnimationLoop=function(B){Nt=B},this.dispose=function(){}}}const ms=new bi,cM=new fe;function hM(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,ms.copy(v),ms.x*=-1,ms.y*=-1,ms.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.envMapRotation.value.setFromMatrix4(cM.makeRotationFromEuler(ms)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uM(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function l(M,x){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(M,b);const E=t.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function h(M){const x=u();M.__bindingPointIndex=x;const v=i.createBuffer(),b=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=s[M.id],v=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,C=v.length;E<C;E++){const R=Array.isArray(v[E])?v[E]:[v[E]];for(let w=0,y=R.length;w<y;w++){const N=R[w];if(d(N,E,w,b)===!0){const D=N.__offset,F=Array.isArray(N.value)?N.value:[N.value];let O=0;for(let X=0;X<F.length;X++){const q=F[X],nt=_(q);typeof q=="number"||typeof q=="boolean"?(N.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,D+O,N.__data)):q.isMatrix3?(N.__data[0]=q.elements[0],N.__data[1]=q.elements[1],N.__data[2]=q.elements[2],N.__data[3]=0,N.__data[4]=q.elements[3],N.__data[5]=q.elements[4],N.__data[6]=q.elements[5],N.__data[7]=0,N.__data[8]=q.elements[6],N.__data[9]=q.elements[7],N.__data[10]=q.elements[8],N.__data[11]=0):(q.toArray(N.__data,O),O+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,x,v,b){const E=M.value,C=x+"_"+v;if(b[C]===void 0)return typeof E=="number"||typeof E=="boolean"?b[C]=E:b[C]=E.clone(),!0;{const R=b[C];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return b[C]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(M){const x=M.uniforms;let v=0;const b=16;for(let C=0,R=x.length;C<R;C++){const w=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,N=w.length;y<N;y++){const D=w[y],F=Array.isArray(D.value)?D.value:[D.value];for(let O=0,X=F.length;O<X;O++){const q=F[O],nt=_(q),G=v%b,j=G%nt.boundary,dt=G+j;v+=j,dt!==0&&b-dt<nt.storage&&(v+=b-dt),D.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=nt.storage}}}const E=v%b;return E>0&&(v+=b-E),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class fM{constructor(t={}){const{canvas:e=u0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=Ge;let E=0,C=0,R=null,w=-1,y=null;const N=new Fe,D=new Fe;let F=null;const O=new kt(0);let X=0,q=e.width,nt=e.height,G=1,j=null,dt=null;const Tt=new Fe(0,0,q,nt),ft=new Fe(0,0,q,nt);let Nt=!1;const pt=new Mh;let Pt=!1,B=!1;const H=new fe,I=new U,et=new Fe,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function te(){return R===null?G:1}let L=n;function Jt(A,V){return e.getContext(A,V)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oh}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),L===null){const V="webgl2";if(L=Jt(V,A),L===null)throw Jt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ot,rt,lt,Vt,gt,K,Ot,re,P,S,Y,$,it,tt,Lt,mt,Xt,qt,_t,Et,Qt,jt,At,oe;function k(){ot=new S_(L),ot.init(),jt=new sM(L,ot),rt=new m_(L,ot,t,jt),lt=new nM(L,ot),rt.reversedDepthBuffer&&f&&lt.buffers.depth.setReversed(!0),Vt=new E_(L),gt=new Vv,K=new iM(L,ot,lt,gt,rt,jt,Vt),Ot=new x_(v),re=new y_(v),P=new Lm(L),At=new d_(L,P),S=new w_(L,P,Vt,At),Y=new A_(L,S,P,Vt),_t=new T_(L,rt,K),mt=new g_(gt),$=new Hv(v,Ot,re,ot,rt,At,mt),it=new hM(v,gt),tt=new Xv,Lt=new Zv(ot),qt=new f_(v,Ot,re,lt,Y,d,c),Xt=new tM(v,Y,rt),oe=new uM(L,Vt,rt,lt),Et=new p_(L,ot,Vt),Qt=new b_(L,ot,Vt),Vt.programs=$.programs,v.capabilities=rt,v.extensions=ot,v.properties=gt,v.renderLists=tt,v.shadowMap=Xt,v.state=lt,v.info=Vt}k();const Mt=new lM(v,L);this.xr=Mt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(q,nt,!1))},this.getSize=function(A){return A.set(q,nt)},this.setSize=function(A,V,Z=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,nt=V,e.width=Math.floor(A*G),e.height=Math.floor(V*G),Z===!0&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(q*G,nt*G).floor()},this.setDrawingBufferSize=function(A,V,Z){q=A,nt=V,G=Z,e.width=Math.floor(A*Z),e.height=Math.floor(V*Z),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Tt)},this.setViewport=function(A,V,Z,J){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,V,Z,J),lt.viewport(N.copy(Tt).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,V,Z,J){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,V,Z,J),lt.scissor(D.copy(ft).multiplyScalar(G).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(A){lt.setScissorTest(Nt=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){dt=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,Z=!0){let J=0;if(A){let W=!1;if(R!==null){const vt=R.texture.format;W=vt===ph||vt===dh||vt===fh}if(W){const vt=R.texture.type,It=vt===wi||vt===Ps||vt===lo||vt===co||vt===ch||vt===hh,Yt=qt.getClearColor(),Gt=qt.getClearAlpha(),ee=Yt.r,se=Yt.g,Zt=Yt.b;It?(g[0]=ee,g[1]=se,g[2]=Zt,g[3]=Gt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=ee,_[1]=se,_[2]=Zt,_[3]=Gt,L.clearBufferiv(L.COLOR,0,_))}else J|=L.COLOR_BUFFER_BIT}V&&(J|=L.DEPTH_BUFFER_BIT),Z&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),qt.dispose(),tt.dispose(),Lt.dispose(),gt.dispose(),Ot.dispose(),re.dispose(),Y.dispose(),At.dispose(),oe.dispose(),$.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",on),Mt.removeEventListener("sessionend",fi),Ci.stop()};function bt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Wt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=Vt.autoReset,V=Xt.enabled,Z=Xt.autoUpdate,J=Xt.needsUpdate,W=Xt.type;k(),Vt.autoReset=A,Xt.enabled=V,Xt.autoUpdate=Z,Xt.needsUpdate=J,Xt.type=W}function xt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){const V=A.target;V.removeEventListener("dispose",ct),Ht(V)}function Ht(A){ae(A),gt.remove(A)}function ae(A){const V=gt.get(A).programs;V!==void 0&&(V.forEach(function(Z){$.releaseProgram(Z)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Z,J,W,vt){V===null&&(V=st);const It=W.isMesh&&W.matrixWorld.determinant()<0,Yt=_e(A,V,Z,J,W);lt.setMaterial(J,It);let Gt=Z.index,ee=1;if(J.wireframe===!0){if(Gt=S.getWireframeAttribute(Z),Gt===void 0)return;ee=2}const se=Z.drawRange,Zt=Z.attributes.position;let de=se.start*ee,Ce=(se.start+se.count)*ee;vt!==null&&(de=Math.max(de,vt.start*ee),Ce=Math.min(Ce,(vt.start+vt.count)*ee)),Gt!==null?(de=Math.max(de,0),Ce=Math.min(Ce,Gt.count)):Zt!=null&&(de=Math.max(de,0),Ce=Math.min(Ce,Zt.count));const Re=Ce-de;if(Re<0||Re===1/0)return;At.setup(W,J,Yt,Z,Gt);let Le,Ie=Et;if(Gt!==null&&(Le=P.get(Gt),Ie=Qt,Ie.setIndex(Le)),W.isMesh)J.wireframe===!0?(lt.setLineWidth(J.wireframeLinewidth*te()),Ie.setMode(L.LINES)):Ie.setMode(L.TRIANGLES);else if(W.isLine){let zt=J.linewidth;zt===void 0&&(zt=1),lt.setLineWidth(zt*te()),W.isLineSegments?Ie.setMode(L.LINES):W.isLineLoop?Ie.setMode(L.LINE_LOOP):Ie.setMode(L.LINE_STRIP)}else W.isPoints?Ie.setMode(L.POINTS):W.isSprite&&Ie.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)fo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))Ie.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const zt=W._multiDrawStarts,Te=W._multiDrawCounts,pe=W._multiDrawCount,Ve=Gt?P.get(Gt).bytesPerElement:1,xn=gt.get(J).currentProgram.getUniforms();for(let Je=0;Je<pe;Je++)xn.setValue(L,"_gl_DrawID",Je),Ie.render(zt[Je]/Ve,Te[Je])}else if(W.isInstancedMesh)Ie.renderInstances(de,Re,W.count);else if(Z.isInstancedBufferGeometry){const zt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Te=Math.min(Z.instanceCount,zt);Ie.renderInstances(de,Re,Te)}else Ie.render(de,Re)};function Ae(A,V,Z){A.transparent===!0&&A.side===Ye&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,Ut(A,V,Z),A.side=Wi,A.needsUpdate=!0,Ut(A,V,Z),A.side=Ye):Ut(A,V,Z)}this.compile=function(A,V,Z=null){Z===null&&(Z=A),p=Lt.get(Z),p.init(V),x.push(p),Z.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==Z&&A.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const J=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const vt=W.material;if(vt)if(Array.isArray(vt))for(let It=0;It<vt.length;It++){const Yt=vt[It];Ae(Yt,Z,W),J.add(Yt)}else Ae(vt,Z,W),J.add(vt)}),p=x.pop(),J},this.compileAsync=function(A,V,Z=null){const J=this.compile(A,V,Z);return new Promise(W=>{function vt(){if(J.forEach(function(It){gt.get(It).currentProgram.isReady()&&J.delete(It)}),J.size===0){W(A);return}setTimeout(vt,10)}ot.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ee=null;function jn(A){Ee&&Ee(A)}function on(){Ci.stop()}function fi(){Ci.start()}const Ci=new Cd;Ci.setAnimationLoop(jn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){Ee=A,Mt.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},Mt.addEventListener("sessionstart",on),Mt.addEventListener("sessionend",fi),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(V),V=Mt.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,V,R),p=Lt.get(A,x.length),p.init(V),x.push(p),H.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),pt.setFromProjectionMatrix(H,vi,V.reversedDepth),B=this.localClippingEnabled,Pt=mt.init(this.clippingPlanes,B),m=tt.get(A,M.length),m.init(),M.push(m),Mt.enabled===!0&&Mt.isPresenting===!0){const vt=v.xr.getDepthSensingMesh();vt!==null&&zr(vt,V,-1/0,v.sortObjects)}zr(A,V,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(j,dt),wt=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,wt&&qt.addToRenderList(m,A),this.info.render.frame++,Pt===!0&&mt.beginShadows();const Z=p.state.shadowsArray;Xt.render(Z,A,V),Pt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,W=m.transmissive;if(p.setupLights(),V.isArrayCamera){const vt=V.cameras;if(W.length>0)for(let It=0,Yt=vt.length;It<Yt;It++){const Gt=vt[It];z(J,W,A,Gt)}wt&&qt.render(A);for(let It=0,Yt=vt.length;It<Yt;It++){const Gt=vt[It];ll(m,A,Gt,Gt.viewport)}}else W.length>0&&z(J,W,A,V),wt&&qt.render(A),ll(m,A,V);R!==null&&C===0&&(K.updateMultisampleRenderTarget(R),K.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,V),At.resetDefaultState(),w=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],Pt===!0&&mt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function zr(A,V,Z,J){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||pt.intersectsSprite(A)){J&&et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(H);const It=Y.update(A),Yt=A.material;Yt.visible&&m.push(A,It,Yt,Z,et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||pt.intersectsObject(A))){const It=Y.update(A),Yt=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),et.copy(A.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),et.copy(It.boundingSphere.center)),et.applyMatrix4(A.matrixWorld).applyMatrix4(H)),Array.isArray(Yt)){const Gt=It.groups;for(let ee=0,se=Gt.length;ee<se;ee++){const Zt=Gt[ee],de=Yt[Zt.materialIndex];de&&de.visible&&m.push(A,It,de,Z,et.z,Zt)}}else Yt.visible&&m.push(A,It,Yt,Z,et.z,null)}}const vt=A.children;for(let It=0,Yt=vt.length;It<Yt;It++)zr(vt[It],V,Z,J)}function ll(A,V,Z,J){const W=A.opaque,vt=A.transmissive,It=A.transparent;p.setupLightsView(Z),Pt===!0&&mt.setGlobalState(v.clippingPlanes,Z),J&&lt.viewport(N.copy(J)),W.length>0&&Q(W,V,Z),vt.length>0&&Q(vt,V,Z),It.length>0&&Q(It,V,Z),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function z(A,V,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new ai(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Bi:wi,minFilter:Es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const vt=p.state.transmissionRenderTarget[J.id],It=J.viewport||N;vt.setSize(It.z*v.transmissionResolutionScale,It.w*v.transmissionResolutionScale);const Yt=v.getRenderTarget(),Gt=v.getActiveCubeFace(),ee=v.getActiveMipmapLevel();v.setRenderTarget(vt),v.getClearColor(O),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),wt&&qt.render(Z);const se=v.toneMapping;v.toneMapping=ss;const Zt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),Pt===!0&&mt.setGlobalState(v.clippingPlanes,J),Q(A,Z,J),K.updateMultisampleRenderTarget(vt),K.updateRenderTargetMipmap(vt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Ce=0,Re=V.length;Ce<Re;Ce++){const Le=V[Ce],Ie=Le.object,zt=Le.geometry,Te=Le.material,pe=Le.group;if(Te.side===Ye&&Ie.layers.test(J.layers)){const Ve=Te.side;Te.side=ln,Te.needsUpdate=!0,ht(Ie,Z,J,zt,Te,pe),Te.side=Ve,Te.needsUpdate=!0,de=!0}}de===!0&&(K.updateMultisampleRenderTarget(vt),K.updateRenderTargetMipmap(vt))}v.setRenderTarget(Yt,Gt,ee),v.setClearColor(O,X),Zt!==void 0&&(J.viewport=Zt),v.toneMapping=se}function Q(A,V,Z){const J=V.isScene===!0?V.overrideMaterial:null;for(let W=0,vt=A.length;W<vt;W++){const It=A[W],Yt=It.object,Gt=It.geometry,ee=It.group;let se=It.material;se.allowOverride===!0&&J!==null&&(se=J),Yt.layers.test(Z.layers)&&ht(Yt,V,Z,Gt,se,ee)}}function ht(A,V,Z,J,W,vt){A.onBeforeRender(v,V,Z,J,W,vt),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(v,V,Z,J,A,vt),W.transparent===!0&&W.side===Ye&&W.forceSinglePass===!1?(W.side=ln,W.needsUpdate=!0,v.renderBufferDirect(Z,V,J,W,A,vt),W.side=Wi,W.needsUpdate=!0,v.renderBufferDirect(Z,V,J,W,A,vt),W.side=Ye):v.renderBufferDirect(Z,V,J,W,A,vt),A.onAfterRender(v,V,Z,J,W,vt)}function Ut(A,V,Z){V.isScene!==!0&&(V=st);const J=gt.get(A),W=p.state.lights,vt=p.state.shadowsArray,It=W.state.version,Yt=$.getParameters(A,W.state,vt,V,Z),Gt=$.getProgramCacheKey(Yt);let ee=J.programs;J.environment=A.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(A.isMeshStandardMaterial?re:Ot).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,ee===void 0&&(A.addEventListener("dispose",ct),ee=new Map,J.programs=ee);let se=ee.get(Gt);if(se!==void 0){if(J.currentProgram===se&&J.lightsStateVersion===It)return at(A,Yt),se}else Yt.uniforms=$.getUniforms(A),A.onBeforeCompile(Yt,v),se=$.acquireProgram(Yt,Gt),ee.set(Gt,se),J.uniforms=Yt.uniforms;const Zt=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Zt.clippingPlanes=mt.uniform),at(A,Yt),J.needsLights=Hn(A),J.lightsStateVersion=It,J.needsLights&&(Zt.ambientLightColor.value=W.state.ambient,Zt.lightProbe.value=W.state.probe,Zt.directionalLights.value=W.state.directional,Zt.directionalLightShadows.value=W.state.directionalShadow,Zt.spotLights.value=W.state.spot,Zt.spotLightShadows.value=W.state.spotShadow,Zt.rectAreaLights.value=W.state.rectArea,Zt.ltc_1.value=W.state.rectAreaLTC1,Zt.ltc_2.value=W.state.rectAreaLTC2,Zt.pointLights.value=W.state.point,Zt.pointLightShadows.value=W.state.pointShadow,Zt.hemisphereLights.value=W.state.hemi,Zt.directionalShadowMap.value=W.state.directionalShadowMap,Zt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Zt.spotShadowMap.value=W.state.spotShadowMap,Zt.spotLightMatrix.value=W.state.spotLightMatrix,Zt.spotLightMap.value=W.state.spotLightMap,Zt.pointShadowMap.value=W.state.pointShadowMap,Zt.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=se,J.uniformsList=null,se}function Kt(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Sa.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function at(A,V){const Z=gt.get(A);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function _e(A,V,Z,J,W){V.isScene!==!0&&(V=st),K.resetTextureUnits();const vt=V.fog,It=J.isMeshStandardMaterial?V.environment:null,Yt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Er,Gt=(J.isMeshStandardMaterial?re:Ot).get(J.envMap||It),ee=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,se=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Zt=!!Z.morphAttributes.position,de=!!Z.morphAttributes.normal,Ce=!!Z.morphAttributes.color;let Re=ss;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Re=v.toneMapping);const Le=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ie=Le!==void 0?Le.length:0,zt=gt.get(J),Te=p.state.lights;if(Pt===!0&&(B===!0||A!==y)){const wn=A===y&&J.id===w;mt.setState(J,A,wn)}let pe=!1;J.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Te.state.version||zt.outputColorSpace!==Yt||W.isBatchedMesh&&zt.batching===!1||!W.isBatchedMesh&&zt.batching===!0||W.isBatchedMesh&&zt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&zt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&zt.instancing===!1||!W.isInstancedMesh&&zt.instancing===!0||W.isSkinnedMesh&&zt.skinning===!1||!W.isSkinnedMesh&&zt.skinning===!0||W.isInstancedMesh&&zt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&zt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&zt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&zt.instancingMorph===!1&&W.morphTexture!==null||zt.envMap!==Gt||J.fog===!0&&zt.fog!==vt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==mt.numPlanes||zt.numIntersection!==mt.numIntersection)||zt.vertexAlphas!==ee||zt.vertexTangents!==se||zt.morphTargets!==Zt||zt.morphNormals!==de||zt.morphColors!==Ce||zt.toneMapping!==Re||zt.morphTargetsCount!==Ie)&&(pe=!0):(pe=!0,zt.__version=J.version);let Ve=zt.currentProgram;pe===!0&&(Ve=Ut(J,V,W));let xn=!1,Je=!1,Ri=!1;const We=Ve.getUniforms(),Vn=zt.uniforms;if(lt.useProgram(Ve.program)&&(xn=!0,Je=!0,Ri=!0),J.id!==w&&(w=J.id,Je=!0),xn||y!==A){lt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),We.setValue(L,"projectionMatrix",A.projectionMatrix),We.setValue(L,"viewMatrix",A.matrixWorldInverse);const Pn=We.map.cameraPosition;Pn!==void 0&&Pn.setValue(L,I.setFromMatrixPosition(A.matrixWorld)),rt.logarithmicDepthBuffer&&We.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&We.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Je=!0,Ri=!0)}if(W.isSkinnedMesh){We.setOptional(L,W,"bindMatrix"),We.setOptional(L,W,"bindMatrixInverse");const wn=W.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),We.setValue(L,"boneTexture",wn.boneTexture,K))}W.isBatchedMesh&&(We.setOptional(L,W,"batchingTexture"),We.setValue(L,"batchingTexture",W._matricesTexture,K),We.setOptional(L,W,"batchingIdTexture"),We.setValue(L,"batchingIdTexture",W._indirectTexture,K),We.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&We.setValue(L,"batchingColorTexture",W._colorsTexture,K));const Wn=Z.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&_t.update(W,Z,Ve),(Je||zt.receiveShadow!==W.receiveShadow)&&(zt.receiveShadow=W.receiveShadow,We.setValue(L,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Vn.envMap.value=Gt,Vn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(Vn.envMapIntensity.value=V.environmentIntensity),Je&&(We.setValue(L,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&ye(Vn,Ri),vt&&J.fog===!0&&it.refreshFogUniforms(Vn,vt),it.refreshMaterialUniforms(Vn,J,G,nt,p.state.transmissionRenderTarget[A.id]),Sa.upload(L,Kt(zt),Vn,K)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Sa.upload(L,Kt(zt),Vn,K),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&We.setValue(L,"center",W.center),We.setValue(L,"modelViewMatrix",W.modelViewMatrix),We.setValue(L,"normalMatrix",W.normalMatrix),We.setValue(L,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const wn=J.uniformsGroups;for(let Pn=0,cl=wn.length;Pn<cl;Pn++){const cs=wn[Pn];oe.update(cs,Ve),oe.bind(cs,Ve)}}return Ve}function ye(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Hn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,V,Z){const J=gt.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),gt.get(A.texture).__webglTexture=V,gt.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const Z=gt.get(A);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0};const gn=L.createFramebuffer();this.setRenderTarget=function(A,V=0,Z=0){R=A,E=V,C=Z;let J=!0,W=null,vt=!1,It=!1;if(A){const Gt=gt.get(A);if(Gt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Gt.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(Gt.__hasExternalTextures)K.rebindTextures(A,gt.get(A.texture).__webglTexture,gt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Zt=A.depthTexture;if(Gt.__boundDepthTexture!==Zt){if(Zt!==null&&gt.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}const ee=A.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(It=!0);const se=gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(se[V])?W=se[V][Z]:W=se[V],vt=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?W=gt.get(A).__webglMultisampledFramebuffer:Array.isArray(se)?W=se[Z]:W=se,N.copy(A.viewport),D.copy(A.scissor),F=A.scissorTest}else N.copy(Tt).multiplyScalar(G).floor(),D.copy(ft).multiplyScalar(G).floor(),F=Nt;if(Z!==0&&(W=gn),lt.bindFramebuffer(L.FRAMEBUFFER,W)&&J&&lt.drawBuffers(A,W),lt.viewport(N),lt.scissor(D),lt.setScissorTest(F),vt){const Gt=gt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,Gt.__webglTexture,Z)}else if(It){const Gt=V;for(let ee=0;ee<A.textures.length;ee++){const se=gt.get(A.textures[ee]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ee,se.__webglTexture,Z,Gt)}}else if(A!==null&&Z!==0){const Gt=gt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Gt.__webglTexture,Z)}w=-1},this.readRenderTargetPixels=function(A,V,Z,J,W,vt,It,Yt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt){lt.bindFramebuffer(L.FRAMEBUFFER,Gt);try{const ee=A.textures[Yt],se=ee.format,Zt=ee.type;if(!rt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-J&&Z>=0&&Z<=A.height-W&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Yt),L.readPixels(V,Z,J,W,jt.convert(se),jt.convert(Zt),vt))}finally{const ee=R!==null?gt.get(R).__webglFramebuffer:null;lt.bindFramebuffer(L.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(A,V,Z,J,W,vt,It,Yt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt)if(V>=0&&V<=A.width-J&&Z>=0&&Z<=A.height-W){lt.bindFramebuffer(L.FRAMEBUFFER,Gt);const ee=A.textures[Yt],se=ee.format,Zt=ee.type;if(!rt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,de),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Yt),L.readPixels(V,Z,J,W,jt.convert(se),jt.convert(Zt),0);const Ce=R!==null?gt.get(R).__webglFramebuffer:null;lt.bindFramebuffer(L.FRAMEBUFFER,Ce);const Re=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await f0(L,Re,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,de),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.deleteBuffer(de),L.deleteSync(Re),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,Z=0){const J=Math.pow(2,-Z),W=Math.floor(A.image.width*J),vt=Math.floor(A.image.height*J),It=V!==null?V.x:0,Yt=V!==null?V.y:0;K.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,It,Yt,W,vt),lt.unbindTexture()};const ls=L.createFramebuffer(),Or=L.createFramebuffer();this.copyTextureToTexture=function(A,V,Z=null,J=null,W=0,vt=null){vt===null&&(W!==0?(fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=W,W=0):vt=0);let It,Yt,Gt,ee,se,Zt,de,Ce,Re;const Le=A.isCompressedTexture?A.mipmaps[vt]:A.image;if(Z!==null)It=Z.max.x-Z.min.x,Yt=Z.max.y-Z.min.y,Gt=Z.isBox3?Z.max.z-Z.min.z:1,ee=Z.min.x,se=Z.min.y,Zt=Z.isBox3?Z.min.z:0;else{const Wn=Math.pow(2,-W);It=Math.floor(Le.width*Wn),Yt=Math.floor(Le.height*Wn),A.isDataArrayTexture?Gt=Le.depth:A.isData3DTexture?Gt=Math.floor(Le.depth*Wn):Gt=1,ee=0,se=0,Zt=0}J!==null?(de=J.x,Ce=J.y,Re=J.z):(de=0,Ce=0,Re=0);const Ie=jt.convert(V.format),zt=jt.convert(V.type);let Te;V.isData3DTexture?(K.setTexture3D(V,0),Te=L.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(K.setTexture2DArray(V,0),Te=L.TEXTURE_2D_ARRAY):(K.setTexture2D(V,0),Te=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);const pe=L.getParameter(L.UNPACK_ROW_LENGTH),Ve=L.getParameter(L.UNPACK_IMAGE_HEIGHT),xn=L.getParameter(L.UNPACK_SKIP_PIXELS),Je=L.getParameter(L.UNPACK_SKIP_ROWS),Ri=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,se),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Zt);const We=A.isDataArrayTexture||A.isData3DTexture,Vn=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const Wn=gt.get(A),wn=gt.get(V),Pn=gt.get(Wn.__renderTarget),cl=gt.get(wn.__renderTarget);lt.bindFramebuffer(L.READ_FRAMEBUFFER,Pn.__webglFramebuffer),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,cl.__webglFramebuffer);for(let cs=0;cs<Gt;cs++)We&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.get(A).__webglTexture,W,Zt+cs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.get(V).__webglTexture,vt,Re+cs)),L.blitFramebuffer(ee,se,It,Yt,de,Ce,It,Yt,L.DEPTH_BUFFER_BIT,L.NEAREST);lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||gt.has(A)){const Wn=gt.get(A),wn=gt.get(V);lt.bindFramebuffer(L.READ_FRAMEBUFFER,ls),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Or);for(let Pn=0;Pn<Gt;Pn++)We?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Wn.__webglTexture,W,Zt+Pn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Wn.__webglTexture,W),Vn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wn.__webglTexture,vt,Re+Pn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wn.__webglTexture,vt),W!==0?L.blitFramebuffer(ee,se,It,Yt,de,Ce,It,Yt,L.COLOR_BUFFER_BIT,L.NEAREST):Vn?L.copyTexSubImage3D(Te,vt,de,Ce,Re+Pn,ee,se,It,Yt):L.copyTexSubImage2D(Te,vt,de,Ce,ee,se,It,Yt);lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Vn?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Te,vt,de,Ce,Re,It,Yt,Gt,Ie,zt,Le.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,vt,de,Ce,Re,It,Yt,Gt,Ie,Le.data):L.texSubImage3D(Te,vt,de,Ce,Re,It,Yt,Gt,Ie,zt,Le):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,vt,de,Ce,It,Yt,Ie,zt,Le.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,vt,de,Ce,Le.width,Le.height,Ie,Le.data):L.texSubImage2D(L.TEXTURE_2D,vt,de,Ce,It,Yt,Ie,zt,Le);L.pixelStorei(L.UNPACK_ROW_LENGTH,pe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ve),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ri),vt===0&&V.generateMipmaps&&L.generateMipmap(Te),lt.unbindTexture()},this.initRenderTarget=function(A){gt.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),lt.unbindTexture()},this.resetState=function(){E=0,C=0,R=null,lt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}}const wa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const dM=new Ah(-1,1,1,-1,0,1);class pM extends Be{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}}const mM=new pM;class Rh{constructor(t){this._mesh=new ut(mM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,dM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class gM extends Fr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof dn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=po.clone(t.uniforms),this.material=new dn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Rh(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class pf extends Fr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class xM extends Fr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class _M{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new St);this._width=n.width,this._height=n.height,e=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gM(wa),this.copyPass.material.blending=Oi,this.clock=new Td}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}pf!==void 0&&(o instanceof pf?n=!0:o instanceof xM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new St);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vM extends Fr{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new kt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const MM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new kt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Rr extends Fr{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new St(t.x,t.y):new St(256,256),this.clearColor=new kt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ai(r,o,{type:Bi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new ai(r,o,{type:Bi});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new ai(r,o,{type:Bi});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=MM;this.highPassUniforms=po.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new St(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=po.clone(wa.uniforms),this.blendMaterial=new dn({uniforms:this.copyUniforms,vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader,blending:ci,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new kt,this._oldClearAlpha=1,this._basic=new le,this._fsQuad=new Rh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new St(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Rr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Rr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new dn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new St(.5,.5)},direction:{value:new St(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new dn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Rr.BlurDirectionX=new St(1,0);Rr.BlurDirectionY=new St(0,1);const ha={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class yM extends Fr{constructor(){super(),this.uniforms=po.clone(ha.uniforms),this.material=new Sm({name:ha.name,uniforms:this.uniforms,vertexShader:ha.vertexShader,fragmentShader:ha.fragmentShader}),this._fsQuad=new Rh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},be.getTransfer(this._outputColorSpace)===Ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ah?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qf?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===$f&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const SM={title:"AURORA TRAIL",sub:"A night ride in the high Himalaya",how:"Stars have fallen into the valley. Gather them on your bicycle and carry them up to the <em>monastery</em> before dawn. The more you bring in one trip, the bigger the bonus — but land a jump badly and you spill half of them.",brief:"Collect the fallen stars and carry them up to the monastery before dawn.",goal:"MONASTERY",item:"star",icon:"★",colors:[16773288,10479871],glow:"#7dffc8",menuCam:{r:62,h:36}},Is={x:0,z:-70},Ph=16,_r=-4.5,wM=235,Da=24,bM=i=>Math.min(1,Math.max(0,i)),vr=(i,t,e)=>{const n=bM((e-i)/(t-i));return n*n*(3-2*n)};function eo(i,t){let e=Math.imul(i,374761393)+Math.imul(t,668265263)|0;return e=Math.imul(e^e>>>13,1274126177),e^=e>>>16,(e>>>0)/4294967296}function EM(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=eo(e,n),l=eo(e+1,n),h=eo(e,n+1),u=eo(e+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}function _o(i,t){let e=.5,n=0,s=1;for(let r=0;r<4;r++)n+=e*EM(i*s,t*s),s*=2.03,e*=.5;return n/.9375}function il(i,t){const e=Math.hypot(i,t);let n=(_o(i*.012+10,t*.012+10)-.5)*36+(_o(i*.05,t*.05)-.5)*5;const s=vr(150,290,e);n+=s*s*140,n=Math.max(n,_r);const r=Math.hypot(i-Is.x,t-Is.z),o=1-vr(18,78,r);return n+(Ph-n)*o}const Ua=8,ba=new Map;function Dd(i,t){const e=Math.floor(i/Ua),n=Math.floor(t/Ua),s=[];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=ba.get(`${e+r},${n+o}`);a&&s.push(...a)}return s}function TM(i){if(!i.grounded)return 0;let t=0;for(const e of Dd(i.x,i.z)){const n=i.x-e.x,s=i.z-e.z,r=Math.hypot(n,s),o=.75*e.s;r<o&&r>.001&&(i.x=e.x+n/r*o,i.z=e.z+s/r*o,t=Math.abs(i.speed),i.speed*=-.25)}return t}function AM(){const i=Math.random()*Math.PI*2,t=22+Math.sqrt(Math.random())*185,e=Math.cos(i)*t,n=Math.sin(i)*t,s=Math.random()<.3;return{x:e,z:n,high:s,y:il(e,n)+(s?4+Math.random()*2.5:1.2)}}function CM(i){const t=new He(720,720,230,230);t.rotateX(-Math.PI/2);const e=t.attributes.position,n=new Float32Array(e.count*3),s=new kt,r=new kt(1192751),o=new kt(1781824),a=new kt(2832973),c=new kt(12178662);for(let u=0;u<e.count;u++){const f=e.getX(u),d=e.getZ(u),g=il(f,d);e.setY(u,g);const _=_o(f*.08+3,d*.08+7);s.copy(o).lerp(r,vr(_r,_r+3,g)),s.lerp(a,vr(12,24,g+_*6)),s.lerp(c,vr(20,40,g+_*10)),s.multiplyScalar(.8+_*.4),n.set([s.r,s.g,s.b],u*3)}t.setAttribute("color",new cn(n,3)),t.computeVertexNormals();const l=new ut(t,new yt({vertexColors:!0,flatShading:!0,roughness:1}));i.add(l);const h=new ut(new rs(300,48),new yt({color:731706,roughness:.15,metalness:.6,emissive:405562,emissiveIntensity:.5}));h.rotation.x=-Math.PI/2,h.position.y=_r+.06,i.add(h)}function RM(i){const t=[];let e=1;const n=()=>eo(e++,9173);for(let m=0;m<2600&&t.length<800;m++){const p=n()*Math.PI*2,M=12+Math.sqrt(n())*240,x=Math.cos(p)*M,v=Math.sin(p)*M,b=il(x,v);b<_r+.6||b>26||Math.hypot(x-Is.x,v-Is.z)<30||Math.hypot(x,v-40)<12||_o(x*.02+50,v*.02+50)<.5||t.push({x,z:v,h:b,s:.7+n()*.9,rot:n()*6.28})}const s=new tn(1.5,5.2,6);s.translate(0,3.6,0);const r=s.attributes.position,o=new Float32Array(r.count*3),a=new kt(932656),c=new kt(13625586),l=new kt;for(let m=0;m<r.count;m++)l.copy(a).lerp(c,vr(3.6,6.4,r.getY(m))),o.set([l.r,l.g,l.b],m*3);s.setAttribute("color",new cn(o,3));const h=new ve(.2,.28,1.4,5);h.translate(0,.7,0);const u=new $e(s,new yt({vertexColors:!0,flatShading:!0,roughness:1}),t.length),f=new $e(h,new yt({color:2759700,roughness:1}),t.length),d=new fe,g=new Dr,_=new U(0,1,0);t.forEach((m,p)=>{g.setFromAxisAngle(_,m.rot),d.compose(new U(m.x,m.h-.1,m.z),g,new U(m.s,m.s,m.s)),u.setMatrixAt(p,d),f.setMatrixAt(p,d);const M=`${Math.floor(m.x/Ua)},${Math.floor(m.z/Ua)}`;ba.has(M)||ba.set(M,[]),ba.get(M).push(m)}),i.add(u,f)}function PM(i){const t=new ze;t.position.set(Is.x,Ph,Is.z);const e=new yt({color:15328472,roughness:.9}),n=new yt({color:6951968,roughness:.8}),s=new yt({color:14263361,roughness:.35,metalness:.7,emissive:4861952}),r=new le({color:16761963}),o=(C,R,w,y,N,D=0,F=0)=>{const O=new ut(new ie(C,R,w),y);return O.position.set(D,N,F),t.add(O),O};o(14,5,10,e,2.5),o(14.4,1,10.4,n,5.3),o(9,3.4,7,e,7.5),o(9.4,.8,7.4,n,9.5),o(10.6,.35,8.6,s,10.05),o(4,1.8,4,n,11.1);const a=new ut(new tn(3.6,2,4),s);a.rotation.y=Math.PI/4,a.position.y=13,t.add(a);const c=new ut(new we(.4,12,8),new le({color:16769696}));c.position.y=14.4,t.add(c);for(const C of[1,-1]){for(let R=-2;R<=2;R++)C===1&&R===0||o(1,1.5,.12,r,3,R*2.5,C*5.02);for(let R=-1;R<=1;R++)o(.9,1.2,.12,r,7.6,R*2.6,C*3.52);for(let R=-1;R<=1;R++)o(.12,1.5,1,r,3,C*7.02,R*2.8)}o(2,3,.2,n,1.5,0,5.05),o(2.4,.3,.3,s,3.15,0,5.1);const l=new ze;l.position.set(11.5,0,3);const h=new ut(new ie(2.4,1,2.4),e);h.position.y=.5;const u=new ut(new we(1,12,8),e);u.position.y=1.7;const f=new ut(new tn(.3,1.8,8),s);f.position.y=3.4,l.add(h,u,f),t.add(l);const d=[3042262,15921906,14039610,3122010,15254577],g=new He(.55,.42),_=new yt({color:3811868}),m=[];for(let C=0;C<6;C++){const R=C/6*Math.PI*2,w=new U(Math.cos(R)*16.5,3.2,Math.sin(R)*16.5),y=new U(0,13.4,0),N=new ut(new ve(.06,.08,3.2,5),_);N.position.set(w.x,1.6,w.z),t.add(N);for(let D=1;D<22;D++){const F=D/22,O=y.clone().lerp(w,F);O.y-=Math.sin(F*Math.PI)*1.6;const X=new ut(g,new le({color:d[D%5],side:Ye}));X.position.copy(O),X.rotation.y=-R+Math.PI/2,X.userData.ph=D*.7+C,t.add(X),m.push(X)}}const p=[],M=new ve(.22,.14,.5,8),x=new we(.2,8,6),v=new yt({color:9071146,metalness:.6,roughness:.4});for(let C=0;C<Da;C++){const R=C/Da*Math.PI*2,w=new ut(M,v);w.position.set(Math.cos(R)*13,.25,Math.sin(R)*13);const y=new ut(x,new le({color:1709072}));y.position.set(w.position.x,.72,w.position.z),y.scale.y=1.5,t.add(w,y),p.push(y)}const b=new ut(new ve(1.1,1.1,260,16,1,!0),new le({color:9437144,transparent:!0,opacity:.1,blending:ci,depthWrite:!1,fog:!1,side:Ye}));b.position.y=144,t.add(b);const E=new Co(16756832,22,70,1.6);return E.position.set(0,6,9),t.add(E),i.add(t),{lamps:p,beam:b,flags:m}}const LM=`
  uniform float uTime, uDawn, uPower;
  varying vec3 vDir;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }
  float fbm(vec2 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ s+=a*noise(p); p*=2.02; a*=0.5; } return s; }
  void main(){
    vec3 d = normalize(vDir);
    float h = max(d.y, 0.0);
    vec3 night = mix(vec3(0.030,0.075,0.130), vec3(0.004,0.010,0.030), pow(h, 0.5));
    vec3 dawn = mix(vec3(0.98,0.52,0.30), vec3(0.16,0.27,0.52), pow(h, 0.42));
    vec3 col = mix(night, dawn, uDawn);
    if (d.y > 0.02) {
      vec2 p = d.xz / (d.y + 0.28);
      float a = 0.0, w = 0.0;
      for (int i = 0; i < 3; i++) {
        float fi = float(i);
        vec2 q = p * (0.7 + fi*0.4) + vec2(fi*3.1, uTime*0.015*(fi+1.0));
        w = fbm(q*0.8 + vec2(uTime*0.02, 0.0));
        float ribbon = sin(q.x*1.5 + w*6.5 + fi*2.0);
        float band = smoothstep(0.55, 1.0, ribbon);
        float rays = 0.55 + 0.45*noise(vec2(q.x*14.0 + w*8.0, uTime*0.3));
        a += band * rays * (1.0 - fi*0.25);
      }
      float fade = smoothstep(0.02, 0.22, d.y) * (1.0 - smoothstep(0.8, 1.0, d.y));
      vec3 ac = mix(vec3(0.10,1.00,0.55), vec3(0.60,0.28,1.00), smoothstep(0.25, 0.85, d.y + w*0.25));
      col += ac * a * fade * uPower * (1.0 - uDawn*0.9);
    }
    gl_FragColor = vec4(col, 1.0);
  }
`;function IM(i){const t=new ze,e={uTime:{value:0},uDawn:{value:0},uPower:{value:.95}},n=new ut(new we(900,48,24),new dn({uniforms:e,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:LM,side:ln,depthWrite:!1,fog:!1}));n.renderOrder=-2,t.add(n);const s=2200,r=new Float32Array(s*3);for(let h=0;h<s;h++){const u=Math.random()*.95+.03,f=Math.random()*Math.PI*2,d=Math.sqrt(1-u*u);r.set([Math.cos(f)*d*850,u*850,Math.sin(f)*d*850],h*3)}const o=new Be;o.setAttribute("position",new cn(r,3));const a=new yh({color:14675711,size:1.6,sizeAttenuation:!1,transparent:!0,depthWrite:!1,fog:!1}),c=new pd(o,a);c.renderOrder=-1,t.add(c);const l=new ut(new we(26,24,16),new le({color:15986908,fog:!1}));return l.position.set(-420,420,-560),t.add(l),i.add(t),{group:t,uniforms:e,starMat:a}}function DM(i){const n=new Float32Array(4200);for(let o=0;o<1400*3;o++)n[o]=(Math.random()-.5)*2*40;const s=new Be;s.setAttribute("position",new cn(n,3));const r=new pd(s,new yh({color:16777215,size:.12,transparent:!0,opacity:.7,depthWrite:!1}));return r.frustumCulled=!1,i.add(r),{pts:r,arr:n,R:40,n:1400}}function UM(i){i.fog=new Ur(663600,.0036);const t=new tl(8382159,1321530,2.2),e=new el(12571903,2.2);e.position.set(-.5,.7,-.6),i.add(t,e),CM(i),RM(i);const n=PM(i),s=IM(i),r=DM(i),o=new kt(663600),a=new kt(13208184),c=new kt(7329984),l=new kt(16765104);let h=0;return{setDelivered(u){h=Math.min(Da,u),n.lamps.forEach((f,d)=>f.material.color.set(d<h?16757575:1709072)),s.uniforms.uPower.value=.95+Math.min(u,60)*.02},update(u,f,d,g){s.group.position.copy(d.position),s.uniforms.uTime.value=u,s.uniforms.uDawn.value=g,s.starMat.opacity=1-g,i.fog.color.copy(o).lerp(a,g),t.color.copy(c).lerp(l,g),t.intensity=2.2+g*1.2,n.beam.material.opacity=.08+.04*Math.sin(u*2);for(const x of n.flags)x.rotation.x=Math.sin(u*5+x.userData.ph)*.35;for(let x=0;x<h;x++)n.lamps[x].scale.y=1.4+Math.sin(u*9+x)*.25;const{arr:_,R:m,n:p,pts:M}=r;for(let x=0;x<p;x++){let v=_[x*3+1]-f*2.2;v<-m&&(v+=2*m),_[x*3+1]=v,_[x*3]+=Math.sin(u+x)*f*.4}M.geometry.attributes.position.needsUpdate=!0,M.position.copy(d.position)}}}const Lh=Object.freeze(Object.defineProperty({__proto__:null,HILL_H:Ph,INFO:SM,LAKE_Y:_r,LAMP_COUNT:Da,MON:Is,WORLD_R:wM,buildWorld:UM,fbm:_o,heightAt:il,pushOut:TM,starSpot:AM,treesNear:Dd},Symbol.toStringTag,{value:"Module"}));function pn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Be;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=mf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const g=mf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function mf(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new cn(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const NM={title:"PaletteRider",sub:"Chapter 1 · Paul Klee · Castle and Sun · 1928",how:"Little suns are scattered through the streets and over the rooftops. Gather them on your bicycle and carry them to the <em>castle</em> before dawn. Mind the traffic on the busy roads. The more you bring in one trip, the bigger the bonus — but land a jump badly and you spill half of them.",brief:"Collect the little suns and carry them to the castle before dawn.",painting:{file:"castle-and-sun.jpg",alt:"Castle and Sun, a painting by Paul Klee, 1928",button:"Ride into the painting"},goal:"CASTLE",item:"sun",icon:"☀",colors:[16765024,16742972],glow:"#ffc46b",menuCam:{r:80,h:46}},kn={x:0,z:-72},Ih=4,FM=232,Na=24,Ke=36,ua=12,Dh=new Set([-4,-2,2,4]),Uh=new Set([-4,0,2,4]),Ud=[],Fa=["#c8372d","#c8372d","#e2582b","#e2582b","#ee8a2f","#ee8a2f","#f3c13a","#f3c13a","#f1dc8c","#e79a8f","#b8456b","#7a3b22","#8a8a3a","#3f7d5a","#2f6f8f","#2a3f7a","#6a4a8a","#efe2c0"],gi=[13121325,14833707,15632943,15974714,12076395,3108751,15178383],zM=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function Nd(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const ce=Nd(1928),sl=new Map,za=[],Ea=[],As=[];function OM(){const i=()=>{const e=ce();return e<.28?2.6+ce()*1.6:e<.88?7+ce()*9:18+ce()*12};for(let e=-7;e<=6;e++)for(let n=-7;n<=6;n++){const s=(e+.5)*Ke,r=(n+.5)*Ke;if(Math.hypot(s,r)>214||Math.hypot(s-kn.x,r-kn.z)<40)continue;const o=s-ua,a=s+ua,c=r-ua,l=r+ua,h=o+9+ce()*6,u=c+9+ce()*6,f=ce(),g=(f<.2?[[o,a,c,l]]:f<.5?[[o,h,c,l],[h,a,c,l]]:f<.8?[[o,a,c,u],[o,a,u,l]]:[[o,h,c,u],[h,a,c,u],[o,h,u,l],[h,a,u,l]]).map(([_,m,p,M])=>({x0:_,x1:m,z0:p,z1:M,top:i()}));sl.set(`${e},${n}`,g),za.push(...g)}for(const e of za)e.top<5&&Ea.push(e);const t=(e,n,s)=>{ce()>.24||(s?Uh:Dh).has(Math.round((s?n:e)/Ke))||Math.hypot(e,n)>200||Math.hypot(e-kn.x,n-kn.z)<50||Math.hypot(e,n-40)<26||As.push({x:e,z:n,alongX:s,peak:2.6+ce()*.8})};for(let e=-6;e<=6;e++)for(let n=-7;n<=6;n++)t(e*Ke,(n+.5)*Ke,!1),t((n+.5)*Ke,e*Ke,!0)}OM();const vo=7,Mo=3;function Ss(i,t){return Ih*(1-zM(16,40,Math.hypot(i-kn.x,t-kn.z)))}function Nh(i,t){let e=Ss(i,t);for(const n of As){const s=Math.abs(n.alongX?i-n.x:t-n.z),r=Math.abs(n.alongX?t-n.z:i-n.x);s<vo&&r<Mo&&(e+=n.peak*(1-s/vo)*Math.min(1,Mo-r))}return e}function Fd(i,t){const e=sl.get(`${Math.floor(i/Ke)},${Math.floor(t/Ke)}`);if(e){for(const n of e)if(i>n.x0&&i<n.x1&&t>n.z0&&t<n.z1)return n}return null}function BM(i,t,e){let n=Nh(i,t);if(e!==void 0){const s=Fd(i,t);s&&e>=s.top-.6&&(n=Math.max(n,s.top))}return n}function kM(i){const t=sl.get(`${Math.floor(i.x/Ke)},${Math.floor(i.z/Ke)}`);if(!t)return 0;const e=.5;for(const n of t){if(i.y>=n.top-.6||!(i.x>n.x0-e&&i.x<n.x1+e&&i.z>n.z0-e&&i.z<n.z1+e))continue;const s=i.x-(n.x0-e),r=n.x1+e-i.x,o=i.z-(n.z0-e),a=n.z1+e-i.z,c=Math.min(s,r,o,a);let l=0,h=0;if(c===s?(i.x=n.x0-e,l=-1):c===r?(i.x=n.x1+e,l=1):c===o?(i.z=n.z0-e,h=-1):(i.z=n.z1+e,h=1),!i.grounded)return l&&i.vx*l<0&&(i.vx=0),h&&i.vz*h<0&&(i.vz=0),0;const u=Math.sign(i.speed)||1,f=Math.sin(i.yaw)*u,d=Math.cos(i.yaw)*u,g=-(f*l+d*h);if(g<=0)return 0;const _=Math.abs(i.speed)*g;if(g>.85)i.speed*=-.3;else{const m=f+l*g,p=d+h*g;let M=Math.atan2(m*u,p*u)-i.yaw;M=Math.atan2(Math.sin(M),Math.cos(M)),i.yaw+=M*.3,i.speed*=1-.25*g}return _}return 0}function GM(i,t,e){const n=sl.get(`${Math.floor(i/Ke)},${Math.floor(e/Ke)}`);if(n){for(const s of n)if(i>s.x0-.6&&i<s.x1+.6&&e>s.z0-.6&&e<s.z1+.6&&t<s.top+.4)return!0}return!1}function HM(){const i=Math.random();if(i<.22&&Ea.length){const r=Ea[Math.floor(Math.random()*Ea.length)];return{x:r.x0+2+Math.random()*(r.x1-r.x0-4),z:r.z0+2+Math.random()*(r.z1-r.z0-4),y:r.top+1.3,high:!0}}if(i<.4&&As.length){const r=As[Math.floor(Math.random()*As.length)];return{x:r.x,z:r.z,y:r.peak+2.6,high:!0}}const t=Math.floor(Math.random()*13)-6,e=(Math.random()*2-1)*205,n=(Math.random()*2-1)*4,s=Math.random()<.5?{x:t*Ke+n,z:e}:{x:e,z:t*Ke+n};return Math.hypot(s.x,s.z)>208?null:{...s,y:Nh(s.x,s.z)+1.2,high:!1}}function VM(i){const t=Nd(i),e=512,n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");s.fillStyle="#1c120e",s.fillRect(0,0,e,e);const r=()=>Fa[Math.floor(t()*Fa.length)],o=(l,h,u,f)=>{s.fillStyle=r(),s.fillRect(l+2,h+2,u-4,f-4);const d=t();if(d<.18)s.fillStyle=r(),s.beginPath(),s.moveTo(l+4,h+f-4),s.lineTo(l+u/2,h+4),s.lineTo(l+u-4,h+f-4),s.fill();else if(d<.28&&f>50){const g=u*.42,_=f*.6,m=l+(u-g)/2;s.fillStyle="#22140f",s.fillRect(m,h+f-4-_+g/2,g,_-g/2),s.beginPath(),s.arc(m+g/2,h+f-4-_+g/2,g/2,Math.PI,0),s.fill()}else if(d<.4){s.fillStyle=t()<.5?"#22140f":r();const g=Math.min(u,f)*.34;s.fillRect(l+(u-g)/2,h+(f-g)/2,g,g)}},a=(l,h,u,f,d)=>{const g=Math.max(u,f);if(d>0&&(g>150||g>64&&t()<.75)){if(u>f){const _=u*(.35+t()*.3);a(l,h,_,f,d-1),a(l+_,h,u-_,f,d-1)}else{const _=f*(.35+t()*.3);a(l,h,u,_,d-1),a(l,h+_,u,f-_,d-1)}return}o(l,h,u,f)};a(0,0,e,e,6);for(let l=0;l<3500;l++){const h=t()<.5?0:255;s.fillStyle=`rgba(${h},${h},${h},${.03+t()*.05})`,s.fillRect(t()*e,t()*e,3+t()*14,1+t()*3)}const c=new mn(n);return c.wrapS=c.wrapT=Rs,c.colorSpace=Ge,c.anisotropy=4,c}function zd(i,t,e,n){const s=new ie(i,t,e),r=s.attributes.uv,o=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let a=0;a<6;a++){const c=ce(),l=ce();for(let h=0;h<4;h++){const u=a*4+h;r.setXY(u,r.getX(u)*o[a][0]/n+c,r.getY(u)*o[a][1]/n+l)}}return s}function Fh(i,t){const e=new kt(t),n=new Float32Array(i.attributes.position.count*3);for(let s=0;s<n.length;s+=3)n.set([e.r,e.g,e.b],s);return i.setAttribute("color",new cn(n,3)),i}function Qc(i,t,e,n){const s=new tn(Math.SQRT1_2,e,4);return s.rotateY(Math.PI/4),s.scale(i,1,t),s.translate(0,e/2,0),Fh(s,n)}function WM(i,t){const e=t.map(()=>[]),n=[];for(const h of za){const u=h.x1-h.x0,f=h.z1-h.z0,d=(h.x0+h.x1)/2,g=(h.z0+h.z1)/2,_=zd(u,h.top+2,f,10);if(_.translate(d,(h.top-2)/2,g),e[Math.floor(ce()*t.length)].push(_),h.top<6.5)continue;const m=ce(),p=gi[Math.floor(ce()*gi.length)];if(m<.5)n.push(Qc(u*.92,f*.92,2.5+ce()*4,p).translate(d,h.top,g));else if(m<.78){const M=Math.min(u,f)*.4,x=2.5+ce()*3,v=Fh(new ie(M,x,M),gi[Math.floor(ce()*gi.length)]);n.push(v.translate(d,h.top+x/2,g),Qc(M*1.25,M*1.25,M*.9,p).translate(d,h.top+x,g))}}e.forEach((h,u)=>{h.length&&i.add(new ut(pn(h),new yt({map:t[u],roughness:.95})))}),i.add(new ut(pn(n),new yt({vertexColors:!0,flatShading:!0,roughness:.9})));const s=t[0].clone();s.repeat.set(20,20);const r=new He(560,560,140,140);r.rotateX(-Math.PI/2);const o=r.attributes.position;for(let h=0;h<o.count;h++)o.setY(h,Ss(o.getX(h),o.getZ(h)));r.computeVertexNormals(),i.add(new ut(r,new yt({map:s,color:9208960,roughness:1})));const a=As.map(h=>{const u=new He(Mo*2,vo*2,6,14);u.rotateX(-Math.PI/2),h.alongX&&u.rotateY(Math.PI/2),u.translate(h.x,0,h.z);const f=u.attributes.position;for(let d=0;d<f.count;d++)f.setY(d,Nh(f.getX(d),f.getZ(d))+.04);return u.computeVertexNormals(),u});a.length&&i.add(new ut(pn(a),new yt({color:15974714,emissive:4860928,flatShading:!0,roughness:.8})));const c=t[1].clone();c.repeat.set(120,1.5);const l=new ut(new ve(238,238,18,72,1,!0),new yt({map:c,side:ln,roughness:1}));l.position.y=7,i.add(l)}function XM(i,t){const e=new ze;e.position.set(kn.x,Ih,kn.z);const n=t.slice(2,5).map(p=>new yt({map:p,roughness:.9})),s=(p,M,x,v,b,E,C)=>{const R=new ut(zd(p,M,x,6),n[C%n.length]);R.position.set(v,b+M/2,E),e.add(R)},r=new yt({vertexColors:!0,flatShading:!0,roughness:.8}),o=(p,M,x,v,b,E)=>{const C=new ut(Qc(p,p,M,E),r);C.position.set(x,v,b),e.add(C)};s(11,9,11,0,0,0,0),s(7,6,7,0,9,0,1),o(8.4,5,0,15,0,13121325);const a=[15632943,15974714,12076395,14833707];[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([p,M],x)=>{s(3.4,14+x,3.4,p*5.2,0,M*5.2,x+2),o(4.4,4,p*5.2,14+x,M*5.2,a[x])});const c=(p,M)=>{const x=new yd;return x.moveTo(-p/2,0),x.lineTo(-p/2,M-p/2),x.absarc(0,M-p/2,p/2,Math.PI,0,!0),x.lineTo(p/2,0),new Eh(x,16)},l=new ut(c(3.6,5),new le({color:1707274}));l.position.set(0,0,5.53);const h=new ut(c(2.6,4.2),new le({color:16762976}));h.position.set(0,0,5.56),e.add(l,h);const u=[],f=new ve(.07,.1,1.4,6),d=new we(.3,10,8),g=new yt({color:4006936});for(let p=0;p<Na;p++){const M=p/Na*Math.PI*2,x=new ut(f,g);x.position.set(Math.cos(M)*13,.7,Math.sin(M)*13);const v=new ut(d,new le({color:2759188}));v.position.set(x.position.x,1.6,x.position.z),e.add(x,v),u.push(v)}const _=new ut(new ve(1.3,1.3,300,16,1,!0),new le({color:16761963,transparent:!0,opacity:.12,blending:ci,depthWrite:!1,fog:!1,side:Ye}));_.position.y=170,e.add(_);const m=new Co(16756832,30,60,1.6);return m.position.set(0,4,10),e.add(m),i.add(e),{lamps:u,beam:_}}function $M(i){const t=new Oe,e=new kt,n=()=>Fa[Math.floor(ce()*Fa.length)],s=80,r=new sn(.15,.3,4,12);r.scale(1.3,1,.85),r.translate(0,1.2,0);const o=new we(.115,14,12);o.scale(.92,1.12,1),o.translate(0,1.64,0);const a=new we(.125,14,10,0,Math.PI*2,0,Math.PI*.55);a.scale(.95,1.1,1.05),a.translate(0,1.655,-.012);const c=new sn(.045,.5,4,8);c.translate(0,-.29,0);const l=new sn(.07,.72,4,8);l.translate(0,-.43,0);const h=()=>new yt({roughness:.85}),u=new $e(r,h(),s),f=new $e(o,h(),s),d=new $e(a,h(),s),g=new $e(c,h(),s*2),_=new $e(l,h(),s*2),m=[u,f,d,g,_];for(const ot of m)ot.frustumCulled=!1;const p=["#f1c9a5","#e0ac69","#c68642","#8d5524","#a56a43"],M=["#1b1310","#2c1b10","#4a2f1a","#111111","#6b6b6b"],x=["#e8e4da","#3a5a8a","#7a2e2e","#2f6f5a","#c9a23a","#444444","#c8372d","#ee8a2f","#b8456b"],v=["#22283a","#3b3026","#4a4a4a","#1e3a5f","#5a4632"],b=ot=>ot[Math.floor(ce()*ot.length)],E=[];for(let ot=0;ot<s;ot++){E.push({alongX:ce()<.5,line:(Math.floor(ce()*13)-6)*Ke+(ce()<.5?-1:1)*(4+ce()*1.2),s:(ce()*2-1)*195,v:(ce()<.5?-1:1)*(.9+ce()*1.1),h:.88+ce()*.2,walk:ce()*6.28,hop:0});const rt=b(p);u.setColorAt(ot,e.set(b(x))),f.setColorAt(ot,e.set(rt)),d.setColorAt(ot,e.set(b(M)));const lt=b(v);for(const Vt of[0,1])g.setColorAt(ot*2+Vt,e.set(rt)),_.setColorAt(ot*2+Vt,e.set(lt))}i.add(...m);const C=new fe,R=new fe,w=new fe,y=(ot,rt,lt,Vt,gt)=>{R.makeRotationX(gt).setPosition(lt,Vt,0),ot.setMatrixAt(rt,w.multiplyMatrices(C,R))},N=[],D=[],F=[],O=(ot,rt,lt,Vt,gt)=>{const Ot=Math.hypot(lt-ot,Vt-rt),re=(lt-ot)/Ot,P=(Vt-rt)/Ot;for(let S=1;S<11;S++){const Y=S/11,$=ot+(lt-ot)*Y,it=rt+(Vt-rt)*Y,tt=gt-Math.sin(Y*Math.PI)*.8;if(S===5||S===6){S===5&&F.push([$+re*.55,tt-.5,it+P*.55]);continue}N.push($-re*.38,tt,it-P*.38,$+re*.38,tt,it+P*.38,$,tt-.8,it),e.set(n());for(let Lt=0;Lt<3;Lt++)D.push(e.r,e.g,e.b)}};for(let ot=-6;ot<=6;ot++)for(let rt=-7;rt<=6;rt++)for(const lt of[-7,7]){if(ce()>.5)continue;const Vt=ot*Ke,gt=(rt+.5)*Ke+lt,K=(Ot,re)=>{const P=Fd(Ot,re);return P&&P.top>=6.5};K(Vt-7,gt)&&K(Vt+7,gt)&&O(Vt-6,gt,Vt+6,gt,6),K(gt,Vt-7)&&K(gt,Vt+7)&&O(gt,Vt-6,gt,Vt+6,6)}const X=new Be;X.setAttribute("position",new Me(N,3)),X.setAttribute("color",new Me(D,3)),i.add(new ut(X,new le({vertexColors:!0,side:Ye})));const q=new $e(new we(.34,10,8),new le({color:16760944}),F.length);F.forEach(([ot,rt,lt],Vt)=>{t.position.set(ot,rt,lt),t.rotation.set(0,0,0),t.scale.set(1,1.25,1),t.updateMatrix(),q.setMatrixAt(Vt,t.matrix)}),i.add(q);const nt=new Be;nt.setAttribute("position",new Me([0,0,.45,-1,0,-.3,0,0,-.1,0,0,.45,1,0,-.3,0,0,-.1],3));const G=[[-90,60,34],[70,-20,40],[10,130,30],[-40,-150,44]],j=G.length*12,dt=new $e(nt,new le({color:15721152,side:Ye}),j);dt.frustumCulled=!1;const Tt=[];G.forEach(([ot,rt,lt])=>{for(let Vt=0;Vt<12;Vt++)Tt.push({x:ot,z:rt,y:lt+ce()*6,r:14+ce()*22,a:ce()*6.28,w:.25+ce()*.2,ph:ce()*6.28})}),i.add(dt);const ft=[],Nt=new we(5,12,10),pt=new ie(1.6,1.4,1.6);for(let ot=0;ot<6;ot++){const rt=new ze,lt=new ut(Nt,new yt({color:gi[ot%gi.length],flatShading:!0,roughness:.8}));lt.scale.y=1.25;const Vt=new ut(new tn(4.6,4.5,12),new yt({color:gi[(ot+3)%gi.length],flatShading:!0}));Vt.rotation.x=Math.PI,Vt.position.y=-6.6;const gt=new ut(pt,new yt({color:8010530}));gt.position.y=-9.6,rt.add(lt,Vt,gt),i.add(rt),ft.push({g:rt,r:90+ce()*120,a:ce()*6.28,w:(ce()<.5?-1:1)*(.012+ce()*.012),y:50+ce()*28,ph:ce()*6.28})}const Pt=(ot,rt,lt,Vt,gt,K,Ot)=>Fh(new ie(ot,rt,lt),Ot).translate(Vt,gt,K),B=pn([Pt(2,.8,4,0,.75,0,16777215),Pt(1.7,.7,2,0,1.5,-.2,15918788),...[[-1,1.3],[1,1.3],[-1,-1.3],[1,-1.3]].map(([ot,rt])=>Pt(.3,.7,.7,ot,.35,rt,1710618))]),H=pn([Pt(.45,.25,.1,-.6,.8,2.02,16773296),Pt(.45,.25,.1,.6,.8,2.02,16773296),Pt(.45,.2,.1,-.6,.8,-2.02,16724e3),Pt(.45,.2,.1,.6,.8,-2.02,16724e3)]),I=34,et=new $e(B,new yt({vertexColors:!0,flatShading:!0,roughness:.6}),I),st=new $e(H,new le({vertexColors:!0}),I);et.frustumCulled=st.frustumCulled=!1;const wt=[...[...Dh].map(ot=>({alongX:!1,line:ot*Ke})),...[...Uh].map(ot=>({alongX:!0,line:ot*Ke}))],te=ot=>ot.alongX?ot.dir*Math.PI/2:ot.dir>0?0:Math.PI,L=Ud;L.length=0;for(let ot=0;ot<I;ot++){const rt=ce()<.5?-1:1,lt={...wt[ot%wt.length],dir:rt,s:(ce()*2-1)*140,v:0,vmax:7+ce()*5,stuck:0,ghost:0,honk:0};lt.lat=lt.line+rt*2.2,lt.yaw=te(lt),lt.x=lt.alongX?lt.s:lt.lat,lt.z=lt.alongX?lt.lat:lt.s,L.push(lt),et.setColorAt(ot,e.set(gi[Math.floor(ce()*gi.length)]))}i.add(et,st);function Jt(ot,rt,lt){const Vt=gt=>1-Math.exp(-gt*ot);for(let gt=0;gt<I;gt++){const K=L[gt],Ot=K.alongX?K.dir:0,re=K.alongX?0:K.dir;let P=1/0;for(let $=0;$<I;$++){if($===gt)continue;const it=L[$],tt=it.x-K.x,Lt=it.z-K.z,mt=tt*Ot+Lt*re;if(mt<=.5||mt>11||Math.abs(tt*re-Lt*Ot)>2.3)continue;(it.alongX===K.alongX&&it.line===K.line&&it.dir===K.dir||$<gt&&K.ghost<=0)&&(P=Math.min(P,mt))}if(rt){const $=rt.x-K.x,it=rt.z-K.z,tt=$*Ot+it*re,Lt=Math.hypot($,it);tt>.5&&tt<12&&Math.abs($*re-it*Ot)<2.1&&rt.y<Ss(rt.x,rt.z)+2.2&&(P=Math.min(P,tt),K.honk<=0&&K.v>2&&(lt.honk=!0,K.honk=3)),Lt<32&&(!lt.nearCar||Lt<lt.nearCar.dist)&&(lt.nearCar={dist:Lt,speed:K.v})}const S=P===1/0?K.vmax:Math.min(1,Math.max(0,(P-5.5)/5))*K.vmax;K.v+=(S-K.v)*Vt(3),K.stuck=K.v<.4?K.stuck+ot:0,K.stuck>6&&(K.ghost=2.5,K.stuck=0),K.ghost>0&&(K.ghost-=ot),K.honk>0&&(K.honk-=ot),K.s+=K.dir*K.v*ot,K.s*K.dir>0&&Math.hypot(K.x,K.z)>204&&(K.dir=-K.dir,K.v=0),K.lat+=(K.line+K.dir*2.2-K.lat)*Vt(2.5);let Y=te(K)-K.yaw;if(Y=Math.atan2(Math.sin(Y),Math.cos(Y)),K.yaw+=Y*Vt(4),K.x=K.alongX?K.s:K.lat,K.z=K.alongX?K.lat:K.s,rt&&rt.y<Ss(K.x,K.z)+1.9){const $=K.alongX?2.6:1.6,it=K.alongX?1.6:2.6,tt=rt.x-K.x,Lt=rt.z-K.z;if(Math.abs(tt)<$&&Math.abs(Lt)<it){const mt=$-Math.abs(tt)<it-Math.abs(Lt),Xt=mt?Math.sign(tt)||1:0,qt=mt?0:Math.sign(Lt)||1;mt?rt.x=K.x+Xt*$:rt.z=K.z+qt*it;const _t=(rt.grounded?Math.sin(rt.yaw)*rt.speed:rt.vx)-Ot*K.v,Et=(rt.grounded?Math.cos(rt.yaw)*rt.speed:rt.vz)-re*K.v,Qt=-(_t*Xt+Et*qt);Qt>0&&(lt.carHit=Math.max(lt.carHit||0,Qt),rt.grounded?rt.speed*=-.3:Xt?rt.vx=0:rt.vz=0,K.v=0)}}t.position.set(K.x,Ss(K.x,K.z),K.z),t.rotation.set(0,K.yaw,0),t.scale.setScalar(1),t.updateMatrix(),et.setMatrixAt(gt,t.matrix),st.setMatrixAt(gt,t.matrix)}et.instanceMatrix.needsUpdate=st.instanceMatrix.needsUpdate=!0}return(ot,rt,lt)=>{const Vt={};Jt(rt,lt,Vt);let gt=!1;for(let K=0;K<s;K++){const Ot=E[K];Ot.s+=Ot.v*rt;let re=Ot.alongX?Ot.s:Ot.line,P=Ot.alongX?Ot.line:Ot.s;(Math.abs(Ot.s)>198||Math.hypot(re,P)>215||Math.hypot(re-kn.x,P-kn.z)<44)&&(Ot.v=-Ot.v,Ot.s+=Ot.v*rt*2,re=Ot.alongX?Ot.s:Ot.line,P=Ot.alongX?Ot.line:Ot.s),Ot.hop>0?Ot.hop-=rt:lt&&Math.abs(lt.speed)>3&&Math.hypot(re-lt.x,P-lt.z)<3.4&&Math.abs(lt.y-Ss(re,P))<3&&(Ot.hop=.55,gt=!0);const S=Ot.hop>0,Y=S?Math.sin(Ot.hop/.55*Math.PI)*1.1:0;Ot.walk+=Math.abs(Ot.v)*rt*3.4;const $=Math.sin(Ot.walk)*.55,it=Ot.alongX?Ot.v>0?Math.PI/2:-Math.PI/2:Ot.v>0?0:Math.PI;t.position.set(re,Ss(re,P)+Math.abs(Math.sin(Ot.walk))*.03+Y,P),t.rotation.set(0,it,0),t.scale.setScalar(Ot.h),t.updateMatrix(),C.copy(t.matrix),u.setMatrixAt(K,C),f.setMatrixAt(K,C),d.setMatrixAt(K,C),y(_,K*2,-.085,.9,S?-.5:$),y(_,K*2+1,.085,.9,S?.3:-$),y(g,K*2,-.245,1.44,S?-2.7:-$*.8),y(g,K*2+1,.245,1.44,S?-2.7:$*.8)}for(const K of m)K.instanceMatrix.needsUpdate=!0;Tt.forEach((K,Ot)=>{K.a+=K.w*rt,t.position.set(K.x+Math.cos(K.a)*K.r,K.y+Math.sin(ot*.7+K.ph)*1.5,K.z+Math.sin(K.a)*K.r),t.rotation.set(0,-K.a,.3),t.scale.set(.55+.45*Math.abs(Math.sin(ot*6+K.ph)),1,1),t.updateMatrix(),dt.setMatrixAt(Ot,t.matrix)}),dt.instanceMatrix.needsUpdate=!0;for(const K of ft)K.a+=K.w*rt,K.g.position.set(Math.cos(K.a)*K.r,K.y+Math.sin(ot*.3+K.ph)*3,Math.sin(K.a)*K.r);return Vt.hop=gt,Vt}}const Od=490;function YM(i,t){const e=t/Od,n=t/2,s=e;i.save(),i.beginPath(),i.arc(n,n,238*e,0,Math.PI*2),i.clip(),i.fillStyle="#2a1a1c",i.fillRect(0,0,t,t);for(const a of za)i.fillStyle=a.top<5?"#f3c13a":a.top<17?"#b8452f":"#6a2a4a",i.fillRect(n+a.x0*e+.5,n+a.z0*e+.5,(a.x1-a.x0)*e-1,(a.z1-a.z0)*e-1);i.fillStyle="rgba(255,255,255,0.09)";for(const a of Dh)i.fillRect(n+(a*Ke-5)*s,0,10*s,t);for(const a of Uh)i.fillRect(0,n+(a*Ke-5)*s,t,10*s);i.fillStyle="#fff2b0";for(const a of As){const c=(a.alongX?vo:Mo)*e,l=(a.alongX?Mo:vo)*e;i.fillRect(n+a.x*e-c,n+a.z*e-l,c*2,l*2)}const r=n+kn.x*e,o=n+kn.z*e;i.fillStyle="rgba(255,196,107,0.25)",i.beginPath(),i.arc(r,o,30*e,0,Math.PI*2),i.fill(),i.fillStyle="#ffc46b",i.fillRect(r-9*e,o-9*e,18*e,18*e),i.beginPath(),i.moveTo(r-11*e,o-9*e),i.lineTo(r,o-22*e),i.lineTo(r+11*e,o-9*e),i.fill(),i.restore(),i.strokeStyle="#efe2c0",i.lineWidth=Math.max(2,t/170),i.beginPath(),i.arc(n,n,238*e,0,Math.PI*2),i.stroke()}const qM=`
  uniform float uDawn;
  varying vec3 vDir;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  void main(){
    vec3 d = normalize(vDir);
    float h = clamp(d.y, 0.0, 1.0);
    // the sky is a patchwork too
    vec2 cell = floor(vec2(atan(d.z, d.x) * 7.0, asin(clamp(d.y, -1.0, 1.0)) * 9.0));
    float n = hash(cell);
    vec3 night = mix(vec3(0.17, 0.065, 0.07), vec3(0.03, 0.03, 0.09), pow(h, 0.6)) * (0.7 + 0.6 * n);
    night += vec3(0.10, 0.03, 0.0) * step(0.86, n);
    vec3 dawn = mix(vec3(1.0, 0.62, 0.35), vec3(0.35, 0.40, 0.62), pow(h, 0.5)) * (0.9 + 0.2 * n);
    gl_FragColor = vec4(mix(night, dawn, uDawn), 1.0);
  }
`;function KM(i){const t=new ze,e={uDawn:{value:0}},n=new ut(new we(900,48,24),new dn({uniforms:e,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:qM,side:ln,depthWrite:!1,fog:!1}));n.renderOrder=-2;const s=new ut(new we(62,32,20),new le({color:16751150,fog:!1}));return s.position.set(.5,.42,-.76).normalize().multiplyScalar(800),t.add(n,s),i.add(t),{group:t,uniforms:e,sun:s}}function jM(i){i.fog=new Ur(1838866,.0055);const t=new tl(16770760,4860972,2.3),e=new el(16763024,1.8);e.position.set(.5,.6,-.5),i.add(t,e);const n=[11,23,37,41,59,67,73,89].map(VM);WM(i,n);const s=XM(i,n),r=KM(i),o=$M(i),a=new kt(1838866),c=new kt(14262394);let l=0,h=1;return{setDelivered(u){l=Math.min(Na,u),s.lamps.forEach((f,d)=>f.material.color.set(d<l?16757575:2759188)),h=1+Math.min(u,60)*.012},update(u,f,d,g,_){r.group.position.copy(d.position),r.uniforms.uDawn.value=g,r.sun.scale.setScalar(h*(1+Math.sin(u*1.3)*.015)),i.fog.color.copy(a).lerp(c,g),t.intensity=2.3+g*1.2,s.beam.material.opacity=.1+.04*Math.sin(u*2);for(let m=0;m<l;m++)s.lamps[m].scale.setScalar(1+Math.sin(u*8+m)*.12);return o(u,f,_)}}}const ZM=Object.freeze(Object.defineProperty({__proto__:null,HILL_H:Ih,INFO:NM,LAMP_COUNT:Na,MAP_SPAN:Od,MON:kn,WORLD_R:FM,blocked:GM,buildWorld:jM,drawMap:YM,heightAt:BM,pushOut:kM,starSpot:HM,traffic:Ud},Symbol.toStringTag,{value:"Module"})),JM={id:"ch2",title:"PaletteRider",sub:"Chapter 2 · Vincent van Gogh · Café Terrace at Night · 1888",how:"The stars have fallen into the streets of Arles. Gather them on your bicycle and carry them to the <em>café</em> on the square before dawn, and watch them return to the sky. The more you bring in one trip, the bigger the bonus — but land a jump badly and you spill half of them.",brief:"Collect the fallen stars and carry them to the café on the square before dawn.",painting:{file:"cafe-terrace-at-night.jpg",alt:"Café Terrace at Night, a painting by Vincent van Gogh, 1888",button:"Ride into the painting"},goal:"CAFÉ",item:"star",icon:"★",colors:[16774856,11064575],glow:"#ffd24a",menuCam:{r:62,h:34}},QM={x:0,z:-80},t1=0,e1=222,Oa=24,Bd=470,Qe=34,fa=12.5,ts={x:0,z:-68},n1=!0,i1=204,Kn={x:0,z:-80},yn=i=>i,gf=i=>i,kd=[[-4.6,6.4],[-1.6,6.2],[1.6,6.5],[4.6,6.3],[-3.1,8.6],[.1,8.8],[3.3,8.5]],s1=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},Ct=s1(1888),Cn=i=>i[Math.floor(Ct()*i.length)],no=new Map,xf=new Set,zh=[],Gd=[],Gi=[],ns=[],Ba=[];function r1(){for(let n=-7;n<=6;n++)for(let s=-7;s<=6;s++){const r=(n+.5)*Qe,o=(s+.5)*Qe;if(Math.hypot(r,o)>i1||Math.hypot(r-ts.x,o-ts.z)<30)continue;const a=r-fa,c=r+fa,l=o-fa,h=o+fa;Gd.push({x0:a,x1:c,z0:l,z1:h});const u=a+9+Ct()*7,f=l+9+Ct()*7,d=Ct(),_=(d<.15?[[a,c,l,h]]:d<.45?[[a,u,l,h],[u,c,l,h]]:d<.75?[[a,c,l,f],[a,c,f,h]]:[[a,u,l,f],[u,c,l,f],[a,u,f,h],[u,c,f,h]]).map(([m,p,M,x])=>({x0:m,x1:p,z0:M,z1:x,top:7+Ct()*7}));no.set(`${n},${s}`,_),xf.add(`${n},${s}`),zh.push(..._)}const i=(n,s,r)=>{Ct()>.2||Math.hypot(n,s)>190||Math.hypot(n-ts.x,s-ts.z)<52||Math.hypot(n,s-40)<24||Gi.push({x:n,z:s,alongX:r,peak:2.1+Ct()*.7})};for(let n=-7;n<=6;n++)for(let s=-7;s<=6;s++)i(n*Qe,(s+.5)*Qe,!1),i((s+.5)*Qe,n*Qe,!0);const t=(n,s,r,o)=>{n=yn(n),s=yn(s),ns.push({x:n,z:s,yaw:r,end:o});const a=Math.abs(Math.sin(r))>.5,c=a?.65:1.35,l=a?1.35:.65,h=`${Math.floor(n/Qe)},${Math.floor(s/Qe)}`;no.has(h)||no.set(h,[]),no.get(h).push({x0:n-c,x1:n+c,z0:s-l,z1:s+l,top:2.4})};for(const n of[-1,1])for(let s=0;s<4;s++)t(n*(13.2+3.4*s),-56,0,!1),t(n*(13.2+3.4*s),-44,Math.PI,!1);const e=new Set;for(let n=0,s=0;n<400&&s<11;n++){const r=Ct()<.5,o=Ct()<.5?-1:1,a=Math.floor(Ct()*14)-7,c=Math.floor(Ct()*14)-7,l=(((o>0?a:a-1)+7)%14+14)%14-7,h=r?`${c},${l}`:`${l},${c}`;if(!xf.has(h)||e.has(h))continue;const u=(c+.5)*Qe,f=r?u:a*Qe,d=r?a*Qe:u;if(Math.hypot(f,d)>175||Math.hypot(f-ts.x,d-ts.z)<62||Math.hypot(f,d-40)<30||Gi.some(_=>Math.hypot(yn(_.x-f),yn(_.z-d))<14))continue;e.add(h),s++;const g=a*Qe+o*3.55;for(const _ of[-3.4,0,3.4])r?t(u+_,g,o>0?Math.PI:0,!0):t(g,u+_,o>0?-Math.PI/2:Math.PI/2,!0);Ba.push({alongX:r,k:a,side:o,a0:u-6.5,a1:u+6.5})}}r1();const yo=6,So=2.4;function Oh(i,t){let e=0;for(const n of Gi){const s=Math.abs(yn(i-n.x)),r=Math.abs(yn(t-n.z)),o=n.alongX?s:r,a=n.alongX?r:s;o<yo&&a<So&&(e+=n.peak*(1-o/yo)*Math.min(1,(So-a)*1.5))}return e}const Hd=(i,t)=>no.get(`${Math.floor(yn(i)/Qe)},${Math.floor(yn(t)/Qe)}`);function o1(i){const t=i.x-yn(i.x),e=i.z-yn(i.z);i.x-=t,i.z-=e;const n=a1(i);return i.x+=t,i.z+=e,n}function a1(i){const t=Hd(i.x,i.z);if(!t)return 0;const e=.5;for(const n of t){if(i.y>n.top+4||!(i.x>n.x0-e&&i.x<n.x1+e&&i.z>n.z0-e&&i.z<n.z1+e))continue;const s=i.x-(n.x0-e),r=n.x1+e-i.x,o=i.z-(n.z0-e),a=n.z1+e-i.z,c=Math.min(s,r,o,a);let l=0,h=0;if(c===s?(i.x=n.x0-e,l=-1):c===r?(i.x=n.x1+e,l=1):c===o?(i.z=n.z0-e,h=-1):(i.z=n.z1+e,h=1),!i.grounded)return l&&i.vx*l<0&&(i.vx=0),h&&i.vz*h<0&&(i.vz=0),0;const u=Math.sign(i.speed)||1,f=Math.sin(i.yaw)*u,d=Math.cos(i.yaw)*u,g=-(f*l+d*h);if(g<=0)return 0;const _=Math.abs(i.speed)*g;if(g>.85)i.speed*=.2;else{const m=f+l*g,p=d+h*g;let M=Math.atan2(m*u,p*u)-i.yaw;M=Math.atan2(Math.sin(M),Math.cos(M)),i.yaw+=M*.3,i.speed*=1-.25*g}return _}return 0}function l1(i,t,e){const n=Hd(i,e);if(i=yn(i),e=yn(e),n){for(const s of n)if(i>s.x0-.6&&i<s.x1+.6&&e>s.z0-.6&&e<s.z1+.6&&t<s.top+3)return!0}return!1}function c1(){const i=Math.random();if(i<.2&&Gi.length){const o=Gi[Math.floor(Math.random()*Gi.length)];return{x:o.x,z:o.z,y:o.peak+2.6,high:!0}}const t=Math.floor(Math.random()*14)-7,e=(Math.random()*2-1)*195,n=(Math.random()*2-1)*2.4,s=Math.random()<.5?{x:t*Qe+n,z:e}:{x:e,z:t*Qe+n};if(Math.hypot(s.x,s.z)>198)return null;const r=i>.78;return{...s,y:Oh(s.x,s.z)+(r?4.2:1.2),high:r}}function ka(i,t,e,n,s,r,o,a=0){i.save(),i.translate(t,e),i.rotate(r),i.lineCap="round";const c=(l,h,u)=>{i.lineWidth=h,i.strokeStyle=u,i.beginPath(),i.moveTo(-n/2,l),i.quadraticCurveTo(0,l-a,n/2,l),i.stroke()};c(0,s,o),c(-s*.28,Math.max(1,s*.2),"rgba(255,255,255,0.2)"),c(s*.3,Math.max(1,s*.2),"rgba(0,0,30,0.28)"),i.restore()}function th(i,t,e,n,s,r,o,a,c){const l=[e],h=[n],u=s;e<u?l.push(e+t):e>t-u&&l.push(e-t),n<u?h.push(n+t):n>t-u&&h.push(n-t);for(const f of l)for(const d of h)ka(i,f,d,s,r,o,a,c)}function Vd(i,t,e,n,{len:s=30,wid:r=7,ang:o=0,spread:a=.35,curve:c=6}={}){for(let l=0;l<e;l++)th(i,t,Ct()*t,Ct()*t,s*(.7+Ct()*.7),r*(.7+Ct()*.6),o+(Ct()-.5)*a,Cn(n),(Ct()-.5)*c)}const Ga=i=>{const t=new mn(i);return t.wrapS=t.wrapT=Rs,t.colorSpace=Ge,t.anisotropy=8,t},Ha=(i,t)=>{const e=document.createElement("canvas");e.width=e.height=i;const n=e.getContext("2d");return n.fillStyle=t,n.fillRect(0,0,i,i),[e,n]};function In(i,t,e,n=700){const[s,r]=Ha(256,i);return Vd(r,256,n,t,e),Ga(s)}function ir(i,t){const[n,s]=Ha(512,i),[r,o]=Ha(512,"#000");Vd(s,512,2300,t,{len:34,wid:7,ang:Math.PI/2,spread:.4,curve:7});for(let c=0;c<2;c++)for(let l=0;l<3;l++){const h=44+l*171,u=60+c*256,f=78,d=132,g=Ct()<.42;s.save(),s.beginPath(),s.rect(h,u,f,d),s.clip(),s.fillStyle=g?"#f7b83a":"#0c1330",s.fillRect(h,u,f,d);const _=g?["#ffe98a","#ffd24a","#f7a52c","#fff6c8","#f08a2a"]:["#141d48","#0a1030","#23306a","#1a2a5a"];for(let m=0;m<46;m++)ka(s,h+Ct()*f,u+Ct()*d,18+Ct()*14,6+Ct()*4,Math.PI/2+(Ct()-.5)*.5,Cn(_),(Ct()-.5)*5);s.restore(),g&&o.drawImage(n,h,u,f,d,h,u,f,d);for(const m of g?[s,o]:[s])m.strokeStyle=m===s?"#101a44":"#000",m.lineWidth=7,m.lineJoin="round",m.strokeRect(h-2+Ct()*2,u-2+Ct()*2,f+3,d+3),m.lineWidth=4,m.beginPath(),m.moveTo(h+f/2,u),m.lineTo(h+f/2+2,u+d),m.moveTo(h,u+d*.45),m.lineTo(h+f,u+d*.45+2),m.stroke();if(Ct()<.7){const m=["#2f6b4f","#2a5a48","#3b7a52","#1f4a3a","#4a8a5a"];for(const p of[h-32,h+f+8]){s.fillStyle="#1f4a3a",s.fillRect(p,u-4,24,d+8);for(let M=0;M<11;M++)ka(s,p+12,u+2+M*12.5,20,6,(Ct()-.5)*.2,Cn(m),2)}}}const a=Ga(n);return{map:a,emissiveMap:Ga(r),bumpMap:a,bumpScale:1.2}}function h1(){const[t,e]=Ha(1024,"#171b46"),n=["#e39a3c","#f0c95a","#d98a7a","#f2b24a","#c97a4a","#ffe07a"],s=["#9a8fc8","#4f63b8","#8fa6e0","#2a3a8c","#6a6a9a","#3c50a8","#b0a0d8"];let r=0;for(let o=0;o<1024;o+=26,r++)for(let a=r%2*21+Ct()*8;a<1024;a+=36+Ct()*12){const c=.42+.3*Math.sin(a/1024*Math.PI*4)*Math.cos(o/1024*Math.PI*2);th(e,1024,a,o+10,34,6,0,"#0b0f30",-7),th(e,1024,a+(Ct()-.5)*6,o+(Ct()-.5)*5,26+Ct()*10,11+Ct()*5,(Ct()-.5)*.3,Cn(Ct()<c?n:s),6+Ct()*4)}return Ga(t)}function rl(i,t=128){const e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);for(const[r,o]of i)s.addColorStop(r,o);return n.fillStyle=s,n.fillRect(0,0,t,t),e}function u1(){const t=rl([[0,"rgba(255,255,255,1)"],[.1,"rgba(255,252,225,1)"],[.2,"rgba(255,230,140,0.9)"],[.34,"rgba(150,185,255,0.28)"],[1,"rgba(150,185,255,0)"]],256),e=t.getContext("2d");for(const[n,s,r,o,a]of[[46,13,17,8,"rgba(255,250,215,0.95)"],[76,19,18,7,"rgba(200,218,255,0.62)"],[106,25,17,6,"rgba(150,180,255,0.34)"]])for(let c=0;c<s;c++){const l=c/s*Math.PI*2+Ct()*.2;ka(e,256/2+Math.cos(l)*n,256/2+Math.sin(l)*n,r,o,l+Math.PI/2,a,3)}return new mn(t)}function Wd(i,t,e){const n=new ie(i,t,e),s=n.attributes.uv,r=[e,e,i,i,i,i];for(let o=0;o<6;o++){const a=Math.floor(Ct()*3)/3;for(let c=0;c<4;c++){const l=o*4+c;s.setXY(l,s.getX(l)*r[o]/8+a,s.getY(l)*t/8)}}return n}function Hi(i,t){const e=new kt(t),n=new Float32Array(i.attributes.position.count*3);for(let s=0;s<n.length;s+=3)n.set([e.r,e.g,e.b],s);return i.setAttribute("color",new cn(n,3)),i}function Xd(i,t,e,n){const s=new tn(Math.SQRT1_2,e,4);return s.rotateY(Math.PI/4),s.scale(i,1,t),s.translate(0,e/2,0),Hi(s,n)}function f1(i){const t=[ir("#2c3f8f",["#3d55b0","#22306e","#4a67c4","#1b2658"]),ir("#3a3a86",["#5050a8","#2a2a66","#6a5fb5","#22204f"]),ir("#274d7a",["#35689c","#1c3a5e","#3f7fae","#152b47"]),ir("#4a3f78",["#62549a","#352c5a","#7868ad","#281f47"]),ir("#8a7a2c",["#b09a38","#6a5c20","#c9b040","#4d4418"]),ir("#1f2f66",["#2c4288","#17224c","#36509e","#101a3c"])],e=[0,0,1,1,2,3,3,4,5,5,0,5],n=t.map(()=>[]),s=[],r=[1712456,2304604,3813205,4862008,1384512];for(const m of zh){const p=m.x1-m.x0,M=m.z1-m.z0,x=(m.x0+m.x1)/2,v=(m.z0+m.z1)/2;n[Cn(e)].push(Wd(p,m.top,M).translate(x,m.top/2,v)),s.push(Xd(p+.8,M+.8,2.4+Ct()*1.8,Cn(r)).translate(x,m.top,v))}n.forEach((m,p)=>{m.length&&i.add(new ut(pn(m),new yt({...t[p],emissive:16777215,emissiveIntensity:1.15,roughness:.95})))});const o=In("#b8bcd8",["#e0e4ff","#8088b8","#a0a8d8","#6068a0","#c8a8c8"],{len:44,wid:9,ang:0,spread:.3});o.repeat.set(3,2),i.add(new ut(pn(s),new yt({map:o,vertexColors:!0,flatShading:!0,roughness:.9})));const a=h1();a.repeat.set(46,46);const c=new ut(new He(560,560),new yt({map:a,bumpMap:a,bumpScale:1.6,color:12895448,roughness:.8}));c.rotation.x=-Math.PI/2,i.add(c);const l=Gi.map(m=>{const p=new He(So*2,yo*2,4,12);p.rotateX(-Math.PI/2),m.alongX&&p.rotateY(Math.PI/2),p.translate(m.x,0,m.z);const M=p.attributes.position;for(let x=0;x<M.count;x++)M.setY(x,Oh(M.getX(x),M.getZ(x))+.04);return p.computeVertexNormals(),p});l.length&&i.add(new ut(pn(l),new yt({color:11565626,emissive:2758144,flatShading:!0,roughness:.9})));const h=[];for(const m of Gd)h.push([m.x0-.3,m.z0-.3],[m.x1+.3,m.z1+.3]);const u=new Oe,f=new $e(new we(.28,8,6),new le({color:16767370}),h.length),d=new mn(rl([[0,"rgba(255,200,90,0.55)"],[.5,"rgba(255,170,60,0.2)"],[1,"rgba(255,170,60,0)"]])),g=new rs(6,20);g.rotateX(-Math.PI/2);const _=new $e(g,new le({map:d,transparent:!0,depthWrite:!1,blending:ci}),h.length);return h.forEach(([m,p],M)=>{u.position.set(m,4.2,p),u.updateMatrix(),f.setMatrixAt(M,u.matrix),u.position.set(m,.05,p),u.updateMatrix(),_.setMatrixAt(M,u.matrix)}),i.add(f,_),t}function d1(i,t){const e=new ze;e.position.set(Kn.x,0,Kn.z);const n=(F,O,X,q,nt)=>{const G=new ut(F,O);return G.position.set(X,q,nt),e.add(G),G},s=In("#e8c832",["#f4dc4a","#d9b82a","#c9d24a","#f0a83a","#fff08a","#a8c040","#f7e06a"],{len:40,wid:9,ang:Math.PI/2,spread:.4});s.repeat.set(3,1.2);const r=In("#f2b030",["#f7b52c","#ffd24a","#e8902a","#fff0a0","#d98a20"],{len:46,wid:9,ang:0,spread:.25});r.repeat.set(4,1.5);const o=In("#e89448",["#f0a04a","#d97a3a","#ffc070","#c9683a","#f7b25a"],{len:40,wid:9,ang:.1,spread:.3});o.repeat.set(4,2);const a=new yt({map:s,bumpMap:s,bumpScale:1.2,emissive:12093968,emissiveIntensity:.4,roughness:.8}),c=new yt({map:r,emissive:11037192,emissiveIntensity:.35,roughness:.8,side:Ye}),l=new yt({color:2372990,roughness:.9}),h=new yt({color:15659760,emissive:5593674,roughness:.6}),u=new yt({color:13141038,emissive:3809280,roughness:.8});n(new ie(12,4.2,9),a,0,2.1,-.5),n(Wd(12,5.4,9),new yt({...t[0],emissive:16777215,emissiveIntensity:1.15,roughness:.95}),0,6.9,-.5),n(Xd(12.8,9.8,3,1712456),new yt({vertexColors:!0,flatShading:!0}),0,9.6,-.5),n(new ie(12.3,.35,9.3),l,0,4.3,-.5),n(new ie(2.2,3.2,.2),l,-3.6,1.6,4.05),n(new ie(1.7,2.9,.1),new le({color:14256682}),-3.6,1.5,4.12),n(new ie(3.4,2,.1),new le({color:14723130}),2.6,2.1,4.06);const f=n(new ie(12.6,.14,5.9),c,0,3.75,6.8);f.rotation.x=.17;for(let F=0;F<12;F++)n(new tn(.5,.5,3),c,-5.8+F*1.05,3.05,9.7).rotation.x=Math.PI;n(new ie(13,.1,6.2),new yt({map:o,emissive:3808260,roughness:.9}),0,.05,7.1);const d=new ve(.55,.55,.06,16),g=new ve(.04,.04,.75,6),_=new ie(.42,.06,.42),m=new ie(.42,.5,.05);for(const[F,O]of kd){n(d,h,F,.78,O),n(g,u,F,.4,O);for(const X of[-1,1])n(_,u,F+X*.85,.45,O),n(g,u,F+X*.85,.22,O).scale.y=.6,n(m,u,F+X*1.05,.72,O).rotation.y=Math.PI/2}const p=new ze;p.position.set(-.6,0,7.4);const M=(F,O,X)=>{const q=new ut(F,new yt({color:O,emissive:O,emissiveIntensity:.15}));q.position.y=X,p.add(q)};M(new sn(.17,.75,4,10),15921900,.62),M(new sn(.19,.34,4,10),1842210,1.28),M(new we(.12,12,10),14724201,1.68),e.add(p),n(new ie(.08,.08,1.8),l,-1.2,4,4.9),n(new we(.42,14,10),new le({color:16774064}),-1.2,3.55,5.7);const x=new Co(16761418,60,60,1.5),v=[],b=new ve(.06,.09,2.8,6),E=new we(.3,10,8),C=new yt({color:1316922});for(let F=0;F<Oa;F++){const O=F/Oa*Math.PI*2;n(b,C,Math.cos(O)*14.5,1.4,Math.sin(O)*14.5),v.push(n(E,new le({color:1712192}),Math.cos(O)*14.5,3,Math.sin(O)*14.5))}const R=In("#1c5a3c",["#2f8a52","#1a4a34","#6aa84a","#0f3324","#9ac85a","#247048"],{len:34,wid:10,ang:0,spread:3.1,curve:14},900);R.repeat.set(3,2);const w=new yt({map:R,emissive:534548,flatShading:!0,roughness:1}),y=new yt({color:2760752}),N=new os(1,1);for(const[F,O]of[[-31,30],[31,30],[-31,-22],[31,-22],[-33,6],[33,6]]){n(new ve(.3,.42,5,7),y,F,2.5,O);for(const[X,q,nt,G]of[[0,6.2,0,3.2],[1.6,5.4,.8,2.3],[-1.5,5.6,-.6,2.4],[.3,7.6,-.4,2.2]])n(N,w,F+X,q,O+nt).scale.setScalar(G)}const D=n(new ve(1.2,1.2,300,16,1,!0),new le({color:16765514,transparent:!0,opacity:.12,blending:ci,depthWrite:!1,fog:!1,side:Ye}),0,162,0);return i.add(e),{lamps:v,beam:D,glow:x}}function p1(i){if(!ns.length)return;const t=[],e=[],n=[[13123628,15787720],[2910876,15787720],[14262304,8010530],[3832394,15787720],[9058922,15784096]],s=[15237674,14271018,13119530,6989882,9063066,15259824,14244474];for(const l of ns){const h=(d,g,_,m,p,M,x=0)=>{x&&g.rotateX(x),g.translate(m,p,M).rotateY(l.yaw).translate(l.x,0,l.z),d.push(Hi(g,_))},[u,f]=Cn(n);h(t,new ie(2.6,.85,1.1),9067052,0,.425,0),h(t,new ie(2.64,.5,.05),u,0,.58,.57);for(const d of[-.85,0,.85]){h(t,new ie(.72,.16,.8),6964256,d,.93,0);const g=Cn(s);for(let _=0;_<6;_++)h(t,new we(.13,6,5),g,d+(Ct()-.5)*.46,1.07+Ct()*.08,(Ct()-.5)*.54)}for(const d of[-1.35,1.35])for(const g of[-.75,.75])h(t,new ve(.04,.04,2.3,5),3811868,d,1.15,g);for(let d=0;d<6;d++)h(t,new ie(.5,.05,1.9),d%2?f:u,-1.25+.5*d,2.35,0,.2);h(e,new we(.17,8,6),16769696,0,1.95,.72)}i.add(new ut(pn(t),new yt({vertexColors:!0,roughness:.85,emissive:2760724}))),i.add(new ut(pn(e),new le({vertexColors:!0})));const r=new mn(rl([[0,"rgba(255,205,110,0.5)"],[.5,"rgba(255,175,70,0.18)"],[1,"rgba(255,170,60,0)"]])),o=new rs(3.4,18);o.rotateX(-Math.PI/2);const a=new $e(o,new le({map:r,transparent:!0,depthWrite:!1,blending:ci}),ns.length),c=new Oe;ns.forEach((l,h)=>{c.position.set(l.x+Math.sin(l.yaw)*1.1,.06,l.z+Math.cos(l.yaw)*1.1),c.updateMatrix(),a.setMatrixAt(h,c.matrix)}),i.add(a)}function m1(i){const t=In("#10222a",["#17323a","#0c1a24","#1f3f3a","#243a52","#2c4a3a","#0a141e"],{len:46,wid:9,ang:.3,spread:.5,curve:10},900);t.repeat.set(40,40);const e=new ut(new He(2400,2400),new yt({map:t,roughness:1}));e.rotation.x=-Math.PI/2,e.position.y=.02;const n=512,s=document.createElement("canvas");s.width=s.height=n;const r=s.getContext("2d");r.fillStyle="#fff",r.fillRect(0,0,n,n);const o=208/1200*(n/2),a=236/1200*(n/2),c=r.createRadialGradient(n/2,n/2,o,n/2,n/2,a);c.addColorStop(0,"#000"),c.addColorStop(1,"#fff"),r.fillStyle=c,r.beginPath(),r.arc(n/2,n/2,a,0,Math.PI*2),r.fill(),e.material.alphaMap=new mn(s),e.material.transparent=!0,e.material.depthWrite=!1,e.renderOrder=1,i.add(e);const l=[],h=[],u=[993826,1325610,794672,1720368];for(let d=0;d<150;d++){const g=Ct()*Math.PI*2,_=232+Ct()*Ct()*190,m=Math.cos(g)*_,p=Math.sin(g)*_;if(Ct()<.82){const M=9+Ct()*9,x=1.3+Ct()*.9,v=Cn(u),b=(Ct()-.5)*.12;l.push(Hi(new tn(x,M,7).rotateZ(b).translate(m,M/2,p),v)),l.push(Hi(new tn(x*.72,M*.62,7).rotateZ(-b).translate(m+.3,M*.42,p+.2),v))}else{const M=2.2+Ct()*1.2;h.push(Hi(new tn(1.8+Ct()*.8,M,9).translate(m,M/2,p),Cn([9075244,10126384,6970400])))}}const f=In("#9aa8a0",["#c8d8c8","#6a8078","#a8c0a0","#506860"],{len:40,wid:8,ang:Math.PI/2,spread:.35,curve:12},500);f.repeat.set(2,3),i.add(new ut(pn(l),new yt({map:f,vertexColors:!0,flatShading:!0,roughness:1,emissive:266252}))),h.length&&i.add(new ut(pn(h),new yt({vertexColors:!0,flatShading:!0,roughness:1,emissive:1709060})))}function g1(i){const t=["#22264a","#3a2a22","#5a2630","#2f4a3a","#d9c26a","#e8e2d0","#7a3b22","#35407a","#8a3a5a","#3a6a7a"],e=["#f1c9a5","#e0ac69","#c68642","#d9a27a"],n=[],s=[];let r=0;const o=D=>(n.push({h:.9+Ct()*.18,ph:Ct()*6.28,hop:0,walk:Ct()*6.28,g:0,gi:0,gn:1,...D}),n[n.length-1]),a=(D,F,O)=>{r++,D.forEach((X,q)=>{X.g=r,X.gi=q,X.gn=D.length}),s.push({x:F,z:O})};for(let D=0;D<70;D++){const F=Math.floor(Ct()*14)-7,O=Ct()<.5?-1:1;o({mode:"walk",alongX:Ct()<.5,k:F,side:O,off:2.9+Ct()*.8,s:(Ct()*2-1)*185,v:(Ct()<.5?-1:1)*(.8+Ct()*.9)})}kd.forEach(([D,F])=>{const O=[];for(const X of[-1,1])Ct()<.14||O.push(o({mode:"sit",x:Kn.x+D+X*.85,z:Kn.z+F,yaw:X<0?Math.PI/2:-Math.PI/2}));O.length&&a(O,Kn.x+D,Kn.z+F)});for(const D of ns){const F=(q,nt)=>({x:D.x+q*Math.cos(D.yaw)+nt*Math.sin(D.yaw),z:D.z-q*Math.sin(D.yaw)+nt*Math.cos(D.yaw)}),O=[o({mode:"stand",keeper:!0,...D.end?F(1.75,.1):F(0,-.95),yaw:D.yaw})],X=Ct()<.25?0:Ct()<.6?1:2;for(let q=0;q<X;q++)O.push(o({mode:"stand",...F((q?.65:-.45)+(Ct()-.5)*.3,1.25+Ct()*.35),yaw:D.yaw+Math.PI+(Ct()-.5)*.5}));a(O,D.x,D.z)}const c=(D,F)=>{const O=Ct()<.55?2:3,X=Ct()*6.28,q=[];for(let nt=0;nt<O;nt++){const G=X+nt/O*6.28;q.push(o({mode:"stand",x:D+Math.sin(G)*.6,z:F+Math.cos(G)*.6,yaw:G+Math.PI}))}a(q,D,F)};for(let D=0,F=0;D<300&&F<30;D++){const O=Ct()<.5,X=Math.floor(Ct()*14)-7,q=Ct()<.5?-1:1,nt=(Ct()*2-1)*190;if(Math.abs(nt-Math.round(nt/Qe)*Qe)<7)continue;const G=O?nt:X*Qe+q*3.4,j=O?X*Qe+q*3.4:nt;Math.hypot(G,j)>192||Math.hypot(G-ts.x,j-ts.z)<44||Math.hypot(G,j-40)<12||Ba.some(dt=>dt.alongX===O&&dt.k===X&&nt>dt.a0-3&&nt<dt.a1+3)||Gi.some(dt=>Math.hypot(yn(dt.x-G),yn(dt.z-j))<9)||(c(G,j),F++)}for(const[D,F]of[[-9,-63],[10,-61],[-22,-67],[23,-65],[6,-50],[-7,-37],[15,-36],[-27,-50],[27,-51]])c(D,F);const l=n.length,h=n.filter(D=>D.mode==="sit").length,u={torso:new sn(.15,.3,4,12).scale(1.3,1,.85).translate(0,1.2,0),head:new we(.115,14,12).scale(.92,1.12,1).translate(0,1.64,0),hat:new ve(.1,.19,.16,12).translate(0,1.79,0),arm:new sn(.045,.5,4,8).translate(0,-.29,0),leg:new sn(.07,.72,4,8).translate(0,-.43,0)},f=(D,F)=>{const O=new $e(D,new yt({roughness:.85}),F);return O.frustumCulled=!1,i.add(O),O},d=f(u.torso,l),g=f(u.head,l),_=f(u.hat,l),m=f(u.arm,l*2),p=f(u.leg,l*2),M=f(u.leg,Math.max(1,h*2)),x=new kt;let v=0;n.forEach((D,F)=>{const O=D.keeper?Cn(["#e8e2d0","#d9c26a","#7a3b22"]):Cn(t),X=Cn(["#1c1c28","#2a2230","#3a3040"]);d.setColorAt(F,x.set(O)),g.setColorAt(F,x.set(Cn(e))),_.setColorAt(F,x.set(Cn(["#15151c","#3a2a22","#d9c26a","#e8e2d0"])));for(const q of[0,1])m.setColorAt(F*2+q,x.set(O)),p.setColorAt(F*2+q,x.set(X));if(D.mode==="sit"){D.seat=v++;for(const q of[0,1])M.setColorAt(D.seat*2+q,x.set(X))}});const b=new Oe,E=new fe,C=new fe,R=new fe,w=new U,y=(D,F,O,X,q,nt,G=1)=>{C.makeRotationX(nt),G!==1&&C.scale(w.set(1,G,1)),C.setPosition(O,X,q),D.setMatrixAt(F,R.multiplyMatrices(E,C))},N=(D,F,O)=>{C.makeRotationX(O).setPosition(0,1.5-1.5*Math.cos(O),1.5*Math.sin(O)),D.setMatrixAt(F,R.multiplyMatrices(E,C))};return(D,F,O,X)=>{let q=!1;for(let G=0;G<l;G++){const j=n[G];let dt,Tt,ft,Nt=0;if(j.mode==="walk"){j.s+=j.v*F;let et=j.off;for(const wt of Ba)wt.alongX===j.alongX&&wt.k===j.k&&wt.side===j.side&&j.s>wt.a0&&j.s<wt.a1&&(et=1.5);j.offNow=j.offNow===void 0?et:j.offNow+(et-j.offNow)*Math.min(1,F*3);const st=j.k*Qe+j.side*j.offNow;dt=j.alongX?j.s:st,Tt=j.alongX?st:j.s,(Math.hypot(dt,Tt)>198||Math.hypot(dt-Kn.x,Tt-Kn.z-6)<13)&&(j.v=-j.v,j.s+=j.v*F*2,dt=j.alongX?j.s:st,Tt=j.alongX?st:j.s),ft=j.alongX?j.v>0?Math.PI/2:-Math.PI/2:j.v>0?0:Math.PI,j.walk+=Math.abs(j.v)*F*3.4,Nt=Math.abs(Math.sin(j.walk))*.03}else dt=j.x,Tt=j.z,ft=j.yaw;dt=gf(dt,X.x),Tt=gf(Tt,X.z);const pt=j.mode==="sit";j.hop>0?j.hop-=F:!pt&&!j.keeper&&O&&Math.abs(O.speed)>3&&O.y<3&&Math.hypot(dt-O.x,Tt-O.z)<3.2&&(j.hop=.55,q=!0);const Pt=j.hop>0;Pt&&(Nt+=Math.sin(j.hop/.55*Math.PI)*1.1);const B=j.gn>1&&Math.floor(D/2.6+j.g*.37)%j.gn===j.gi;j.mode==="stand"&&(ft+=Math.sin(D*.8+j.ph)*.1),pt&&(Nt=.55-.9*j.h),b.position.set(dt,Nt,Tt),b.rotation.set(0,ft,0),b.scale.setScalar(j.h),b.updateMatrix(),E.copy(b.matrix),d.setMatrixAt(G,E);const H=j.mode==="walk"||Pt?0:B?Math.sin(D*5+j.ph)*.07:.06+Math.sin(D*2.2+j.ph)*.07;N(g,G,H),N(_,G,H);const I=Math.sin(D*5.5+j.ph);if(Pt)y(p,G*2,-.085,.9,0,-.5),y(p,G*2+1,.085,.9,0,.3),y(m,G*2,-.245,1.44,0,-2.7),y(m,G*2+1,.245,1.44,0,-2.7);else if(pt)y(p,G*2,-.085,.9,0,-Math.PI/2,.55),y(p,G*2+1,.085,.9,0,-Math.PI/2,.55),y(M,j.seat*2,-.085,.9,.45,0,.56),y(M,j.seat*2+1,.085,.9,.45,0,.56),y(m,G*2,-.245,1.44,0,B?-1.5-I*.35:-1.05),y(m,G*2+1,.245,1.44,0,-1.05);else if(j.mode==="stand")y(p,G*2,-.085,.9,0,0),y(p,G*2+1,.085,.9,0,0),y(m,G*2,-.245,1.44,0,B?-1-I*.5:-.12),y(m,G*2+1,.245,1.44,0,B?-.5+I*.3:j.keeper?-.9:-.1);else{const et=Math.sin(j.walk)*.5;y(p,G*2,-.085,.9,0,et),y(p,G*2+1,.085,.9,0,-et),y(m,G*2,-.245,1.44,0,-et*.8),y(m,G*2+1,.245,1.44,0,et*.8)}}for(const G of[d,g,_,m,p,M])G.instanceMatrix.needsUpdate=!0;let nt=0;if(O)for(const G of s)nt+=Math.max(0,1-Math.hypot(yn(G.x-O.x),yn(G.z-O.z))/16)**2;return{hopped:q,murmur:Math.min(1,nt*.45)}}}const x1=`
  uniform float uDawn;
  varying vec3 vDir;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }
  // smooth noise that repeats after 'per' cells sideways, so it joins up all the way round the sky
  float pn(vec2 p, float per){
    vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    float x0 = mod(i.x, per), x1 = mod(i.x + 1.0, per);
    return mix(mix(hash(vec2(x0, i.y)), hash(vec2(x1, i.y)), f.x), mix(hash(vec2(x0, i.y + 1.0)), hash(vec2(x1, i.y + 1.0)), f.x), f.y);
  }
  void main(){
    vec3 d = normalize(vDir);
    float h = clamp(d.y, 0.0, 1.0);
    // No grid here: the sky is long, soft strokes of different lengths that rise and dip
    // as they cross it, the way a loaded brush is dragged, with no hard edges between them.
    float u = atan(d.z, d.x) / 6.28318 + 0.5;            // once round the horizon
    float v = asin(clamp(d.y, -1.0, 1.0)) / 1.5708;      // horizon to zenith
    float drift = pn(vec2(u * 10.0, v * 5.0), 10.0);
    float haze = pn(vec2(u * 22.0 + 5.0, v * 9.0 + 3.0), 22.0);
    float vy = v + (drift - 0.5) * 0.14 + (haze - 0.5) * 0.04;
    float broad = pn(vec2(u * 40.0, vy * 110.0), 40.0);
    float mid = pn(vec2(u * 96.0 + 17.0, vy * 300.0 + 4.0), 96.0);
    float fine = pn(vec2(u * 230.0 + 40.0, vy * 640.0 + 9.0), 230.0);
    float stroke = smoothstep(0.28, 0.72, broad * 0.4 + mid * 0.4 + fine * 0.2);
    vec3 deep = vec3(0.022, 0.055, 0.26), cobalt = vec3(0.075, 0.20, 0.60), teal = vec3(0.06, 0.29, 0.52);
    vec3 night = mix(deep, cobalt, stroke);
    night = mix(night, teal, smoothstep(0.6, 0.82, haze) * 0.4);
    night += vec3(0.04, 0.06, 0.11) * smoothstep(0.7, 0.95, fine) * stroke; // flecks of lighter paint
    night *= mix(1.3, 0.8, pow(h, 0.6));
    vec3 dawn = mix(vec3(1.0, 0.66, 0.36), vec3(0.34, 0.46, 0.78), pow(h, 0.5)) * (0.84 + 0.3 * stroke);
    gl_FragColor = vec4(mix(night, dawn, uDawn), 1.0);
  }
`,$d=96,_f=26;function _1(i){const t=new ze,e={uDawn:{value:0}},n=new ut(new we(900,48,24),new dn({uniforms:e,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:x1,side:ln,depthWrite:!1,fog:!1}));n.renderOrder=-2,t.add(n);const s=u1(),r=[];for(let o=0;o<$d;o++){const a=new vh(new ja({map:s,transparent:!0,depthWrite:!1,fog:!1,opacity:0})),c=.12+Ct()*.85,l=Ct()*Math.PI*2,h=Math.sqrt(1-c*c);a.position.set(Math.cos(l)*h*780,c*780,Math.sin(l)*h*780),a.userData.size=60+Ct()*70,a.scale.setScalar(a.userData.size),a.renderOrder=-1,t.add(a),r.push(a)}return i.add(t),{group:t,uniforms:e,stars:r}}function v1(i,t){const e=t/Bd,n=t/2;i.fillStyle="#0b1a26",i.fillRect(0,0,t,t);const s=i.createRadialGradient(n,n,205*e,n,n,232*e);s.addColorStop(0,"#141a40"),s.addColorStop(1,"rgba(20,26,64,0)"),i.fillStyle=s,i.beginPath(),i.arc(n,n,232*e,0,Math.PI*2),i.fill(),i.fillStyle="#3a4c9a";for(const a of zh)i.fillRect(n+a.x0*e+.5,n+a.z0*e+.5,(a.x1-a.x0)*e-1,(a.z1-a.z0)*e-1);i.fillStyle="#d9a85e";for(const a of Gi){const c=(a.alongX?yo:So)*e,l=(a.alongX?So:yo)*e;i.fillRect(n+a.x*e-c,n+a.z*e-l,c*2,l*2)}i.fillStyle="#e8763a";for(const a of ns)i.fillRect(n+a.x*e-2.2,n+a.z*e-2.2,4.4,4.4);const r=n+Kn.x*e,o=n+Kn.z*e;i.fillStyle="rgba(255,210,74,0.28)",i.beginPath(),i.arc(r,o,26*e,0,Math.PI*2),i.fill(),i.fillStyle="#ffd24a",i.fillRect(r-8*e,o-6*e,16*e,12*e),i.fillStyle="#f7a52c",i.fillRect(r-9*e,o+6*e,18*e,6*e)}function M1(i){i.fog=new Ur(791616,.0058);const t=new tl(9414911,2761792,1.9),e=new el(11057407,.9);e.position.set(.4,.8,.3),i.add(t,e);const n=f1(i),s=d1(i,n);p1(i),m1(i),s.glow.position.set(Kn.x,3.2,Kn.z+8),i.add(s.glow);const r=g1(i),o=_1(i),a=new kt(791616),c=new kt(14262394);let l=0,h=_f;return{setDelivered(u){l=Math.min(Oa,u),s.lamps.forEach((f,d)=>f.material.color.set(d<l?16765562:1712192)),h=Math.min($d,_f+u)},update(u,f,d,g,_){const m=_||d.position,p=r(u,f,_,m);o.group.position.copy(d.position),o.uniforms.uDawn.value=g,o.stars.forEach((M,x)=>{const v=x<h?1-g*.85:0;M.material.opacity+=(v-M.material.opacity)*Math.min(1,f*2),M.scale.setScalar(M.userData.size*(1+.08*Math.sin(u*1.7+x)))}),i.fog.color.copy(a).lerp(c,g),t.intensity=1.9+g*1.4,s.beam.material.opacity=.1+.04*Math.sin(u*2);for(let M=0;M<l;M++)s.lamps[M].scale.setScalar(1+Math.sin(u*8+M)*.12);return{hop:p.hopped,murmur:p.murmur}}}}const y1=Object.freeze(Object.defineProperty({__proto__:null,HILL_H:t1,INFO:JM,LAMP_COUNT:Oa,MAP_SPAN:Bd,MON:QM,SOFT_EDGE:n1,WORLD_R:e1,blocked:l1,buildWorld:M1,drawMap:v1,heightAt:Oh,pushOut:o1,spotTexture:rl,stalls:ns,starSpot:c1,strokeTexture:In,tint:Hi,zones:Ba},Symbol.toStringTag,{value:"Module"})),S1={id:"ch3",title:"PaletteRider",sub:"Chapter 3 · Claude Monet · The Water Lily Pond · 1899",how:"Monet's garden is in full bloom. Gather the loose flowers on your bicycle and carry them up to the <em>pink house</em> before dusk, and watch the water lilies open on the pond. Ride over the green bridges, under the rose arches and round the willows. The more you bring in one trip, the bigger the bonus — but land a jump badly and you spill half of them.",brief:"Collect the flowers and carry them to the pink house before dusk. Left of the avenue is the 🧩 Mind Games pavilion: get off your bike and walk in to play.",painting:{file:"water-lily-pond.jpg",alt:"The Water Lily Pond (Bridge over a Pond of Water Lilies), a painting by Claude Monet, 1899",button:"Ride into the painting"},goal:"HOUSE",item:"flower",icon:"✿",colors:[16740264,16769126],glow:"#ffb3cf",timeLabel:"Until dusk",menuCam:{r:70,h:30},spawn:{x:0,z:-70,yaw:0},bloom:.28,exposure:.92},an={x:0,z:-112},w1=0,b1=150,E1=!0,Bh=24,Yd=340,ei={x:-68,z:-67,face:Math.PI/2},qd=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},$t=qd(1899),je=i=>i[Math.floor($t()*i.length)],ne={x:0,z:64,a:52,b:24},Xi=[{x:-18,half:26,peak:3.4,wisteria:!0},{x:26,half:24,peak:2.6,wisteria:!1}],Yn=2.3,Va=[{x:-78,z:-38,r:10,h:2.6},{x:80,z:28,r:9,h:2.3},{x:62,z:-70,r:8,h:2.1}],ur=[-96,-82,-68,-54,-40,-26,-12],Wa=[];for(const i of[-1,1])for(let t=0;t<5;t++)for(const[e,n]of[[-98,-70],[-64,-36],[-30,-2]])Wa.push({x0:i*(8+9*t)-3,x1:i*(8+9*t)+3,z0:e,z1:n});const kh=(i,t)=>((i-ne.x)/ne.a)**2+((t-ne.z)/ne.b)**2,ol=(i,t,e=0)=>Xi.find(n=>Math.abs(i-n.x)<Yn+e&&Math.abs(t-ne.z)<n.half);function Pr(i,t){const e=ol(i,t);if(e)return e.peak*.5*(1+Math.cos(Math.PI*(t-ne.z)/e.half));let n=0;for(const s of Va){const r=Math.hypot(i-s.x,t-s.z);r<s.r&&(n+=s.h*.5*(1+Math.cos(Math.PI*r/s.r)))}return n}function T1(i){const t=ol(i.x,i.z,.5);if(t)return i.y>.25&&(i.x=Math.min(t.x+Yn-.45,Math.max(t.x-Yn+.45,i.x))),0;const e=i.x-an.x,n=i.z-(an.z-.2);if(Math.abs(e)<13.6&&Math.abs(n)<5.8&&i.y<9)return 13.6-Math.abs(e)<5.8-Math.abs(n)?i.x=an.x+Math.sign(e)*13.6:i.z=an.z-.2+Math.sign(n)*5.8,i.grounded&&(i.speed*=.5),0;const s=kh(i.x,i.z);if(s<1&&i.y<1.2){const r=1.012/Math.sqrt(Math.max(s,4e-4));i.x=ne.x+(i.x-ne.x)*r,i.z=ne.z+(i.z-ne.z)*r,i.grounded?i.speed*=.86:(i.vx*=.5,i.vz*=.5)}return 0}function A1(i,t,e){return Math.abs(i-an.x)<13&&Math.abs(e-an.z)<5.5&&t<12}function C1(){const i=Math.random();let t;if(i<.14){const e=Xi[Math.floor(Math.random()*Xi.length)];return t={x:e.x,z:ne.z+(Math.random()*2-1)*e.half*.8},{...t,y:Pr(t.x,t.z)+1.3,high:!1}}if(i<.3)return{x:(Math.random()*2-1)*1.5,z:ur[Math.floor(Math.random()*ur.length)],y:4.3,high:!0};if(i<.38){const e=Va[Math.floor(Math.random()*Va.length)];return{x:e.x,z:e.z,y:e.h+3.6,high:!0}}if(i<.62){const e=Math.random()*Math.PI*2;t={x:ne.x+Math.cos(e)*ne.a*1.1,z:ne.z+Math.sin(e)*ne.b*1.13}}else if(i<.85){const e=Math.floor(Math.random()*6),n=Math.random()<.5?-1:1;t={x:e===0?(Math.random()*2-1)*2:n*(3.5+9*e),z:-100+Math.random()*100}}else{const e=Math.random()*Math.PI*2,n=30+Math.random()*105;if(t={x:Math.cos(e)*n,z:Math.sin(e)*n},kh(t.x,t.z)<1.25||Math.hypot(t.x-ei.x,t.z-ei.z)<13)return null}return ol(t.x,t.z,1)?null:{...t,y:Pr(t.x,t.z)+1.2,high:!1}}const ge=new Oe,Tn=new kt,ws=i=>i.rotateX(-Math.PI/2);function vf(i,t){const e=i.attributes.position,n=i.attributes.uv;for(let s=0;s<e.count;s++)n.setXY(s,e.getX(s)/t,e.getZ(s)/t);return i}const Mf=[[16744368,16757712,15224970,16773365],[11563232,9068496,13674736,15786239],[16767050,16756784,16773280,16747066],[15219258,16738896,13118024,16752784],[16777215,16774360,15788287,16767208],[5933800,8827120,12110079,8022752]];function R1(i){const t=In("#6aa84a",["#7fbf55","#4f8f3c","#93cc62","#3f7a3a","#a8d870","#5a9a60","#86b84a"],{len:30,wid:7,ang:Math.PI/2,spread:.6,curve:8},1100);t.repeat.set(250,250);const e=new ut(ws(new He(1600,1600)),new yt({map:t,roughness:1}));i.add(e);const n=In("#d9c2a0",["#e8d4b4","#c8ae8a","#f0e0c4","#b89a78","#e0b8a8","#d0c4b0"],{len:16,wid:6,ang:0,spread:3.1,curve:3},900),s=[],r=(a,c,l,h)=>s.push(ws(new He(c-a,h-l)).translate((a+c)/2,.03,(l+h)/2));r(-3,3,-104,36);for(const a of[-1,1])for(let c=1;c<=5;c++)r(a*(3.5+9*c)-1.5,a*(3.5+9*c)+1.5,-100,0);for(const a of[-67,-33,3])r(-50,50,a-3,a+3);r(-58,-50,-70,-64),r(-120,120,12,17);for(const a of Xi)r(a.x-2,a.x+2,17,ne.z-a.half+1),r(a.x-2,a.x+2,ne.z+a.half-1,104);r(-70,70,102,106);const o=ws(new Ja(1.03,1.2,72,1)).scale(ne.a,1,ne.b).translate(ne.x,.03,ne.z);s.push(o),i.add(new ut(vf(pn(s),4.5),new yt({map:n,roughness:1})));for(const a of Va){const c=ws(new rs(a.r,28,0,Math.PI*2)),l=new He(a.r*2,a.r*2,20,20);ws(l).translate(a.x,0,a.z);const h=l.attributes.position;for(let u=0;u<h.count;u++)h.setY(u,Pr(h.getX(u),h.getZ(u))+.02);l.computeVertexNormals(),c.dispose(),i.add(new ut(vf(l,1600/250),e.material))}}function P1(i){const t=[];let e=0;for(const g of Wa)t.push(new ie(g.x1-g.x0,.3,g.z1-g.z0).translate((g.x0+g.x1)/2,.15,(g.z0+g.z1)/2)),g.n=Math.round((g.z1-g.z0)*9),e+=g.n;i.add(new ut(pn(t),new yt({color:4876852,roughness:1})));const n=new os(.2,1),s=new os(.36,0),r=new $e(n,new yt({roughness:.75,flatShading:!0}),e),o=new $e(s,new yt({roughness:1,flatShading:!0}),e),a=[4164156,5940808,3108920,7911504];let c=0;for(const g of Wa){const _=je(Mf),m=je(Mf);for(let p=0;p<g.n;p++,c++){const M=g.x0+.35+$t()*(g.x1-g.x0-.7),x=g.z0+.35+$t()*(g.z1-g.z0-.7),v=.55+$t()*$t()*1.1;ge.position.set(M,v,x),ge.rotation.set($t()*3,$t()*3,0),ge.scale.setScalar(.55+$t()*.6),ge.updateMatrix(),r.setMatrixAt(c,ge.matrix),r.setColorAt(c,Tn.set(je($t()<.75?_:m))),ge.position.set(M+($t()-.5)*.5,v*.45,x+($t()-.5)*.5),ge.scale.set(1,.9+v*.5,1),ge.updateMatrix(),o.setMatrixAt(c,ge.matrix),o.setColorAt(c,Tn.set(je(a)))}}i.add(r,o);const l=new yt({color:3111506,roughness:.6}),h=ur.map(g=>new Ao(3.5,.09,6,20,Math.PI).translate(0,.4,g));for(const g of ur)for(const _ of[-3.5,3.5])h.push(new ve(.09,.09,.4,6).translate(_,.2,g));i.add(new ut(pn(h.map(g=>g.toNonIndexed())),l));const u=110,f=new $e(n,r.material,ur.length*u),d=[16740250,15219290,16754880,16773360,14166600,5940808,4164156,5216840,16747184];ur.forEach((g,_)=>{for(let m=0;m<u;m++){const p=$t()*Math.PI,M=3.5+($t()-.5)*.45;ge.position.set(Math.cos(p)*M,.4+Math.sin(p)*M,g+($t()-.5)*.6),ge.rotation.set($t()*3,$t()*3,0),ge.scale.setScalar(.7+$t()*.8),ge.updateMatrix(),f.setMatrixAt(_*u+m,ge.matrix),f.setColorAt(_*u+m,Tn.set(je(d)))}}),i.add(f)}function L1(i){const t=new ze;t.position.set(an.x,0,an.z);const e=(u,f,d,g,_)=>{const m=new ut(u,f);return m.position.set(d,g,_),t.add(m),m},n=In("#eeb0a8",["#f6c4b8","#e89c98","#fad4c8","#e0908c","#f8e0d0","#eaa8b4"],{len:34,wid:8,ang:Math.PI/2,spread:.5,curve:6},900);n.repeat.set(4,1.5);const s=new yt({map:n,roughness:.9}),r=new yt({color:3115605,roughness:.7}),o=new yt({color:8029856,roughness:.8,flatShading:!0}),a=new yt({color:16051408,emissive:6969904,roughness:.4});e(new ie(26,7.4,8),s,0,3.7,-1);const c=new tn(Math.SQRT1_2,3.4,4);c.rotateY(Math.PI/4),c.scale(27.2,1,9.4),e(c,o,0,9.1,-1);for(const u of[-8,8])e(new ie(1,2.2,1),s,u,10,-1);for(const u of[1.9,5.3])for(let f=-4;f<=4;f++){if(u<3&&f===0)continue;const d=f*2.75;e(new ie(1.1,1.8,.1),a,d,u,3.03);for(const g of[-1,1])e(new ie(.5,1.9,.08),r,d+g*.85,u,3.06)}e(new ie(1.5,2.9,.12),r,0,1.45,3.05),e(new ie(26,.3,2.6),new yt({color:14207152,roughness:1}),0,.15,4.3),e(new ie(26,.12,.12),r,0,1.25,5.5);for(let u=-6;u<=6;u++)Math.abs(u)>0&&e(new ie(.1,1.1,.1),r,u*2.1,.75,5.5);const l=new $e(new os(.24,1),new yt({roughness:.8,flatShading:!0}),320);for(let u=0;u<320;u++){const f=je([-12.4,-6.9,6.9,12.4,-1.4,1.4]);ge.position.set(f+($t()-.5)*1.3,.4+$t()*6.6,3.2+$t()*.3),ge.rotation.set($t()*3,$t()*3,0),ge.scale.setScalar(.6+$t()*.7),ge.updateMatrix(),l.setMatrixAt(u,ge.matrix),l.setColorAt(u,Tn.set(je([16740250,16754880,15219290,5216840,4164156,5940808,16773360])))}t.add(l);const h=e(new ve(1.2,1.2,300,16,1,!0),new le({color:16765152,transparent:!0,opacity:.16,blending:ci,depthWrite:!1,fog:!1,side:Ye}),0,160,-1);return i.add(t),{beam:h}}function I1(i){const t=In("#4f8f9a",["#6fb0b8","#3f7a8a","#8ac8c0","#5a9a7a","#a8d8d0","#7a8ac8","#4a8a6a","#c8e8e0","#9a8ad0"],{len:44,wid:7,ang:0,spread:.18,curve:4},1200);t.repeat.set(9,5);const e=new ut(ws(new rs(1,72)).scale(ne.a*1.02,1,ne.b*1.02),new yt({map:t,roughness:.25,metalness:.15,emissive:1194560,emissiveIntensity:.5}));e.position.set(ne.x,.05,ne.z),i.add(e);const n=()=>{for(;;){const x=ne.x+($t()*2-1)*ne.a,v=ne.z+($t()*2-1)*ne.b;if(kh(x,v)<.86)return[x,v]}},s=230,r=new $e(ws(new rs(.8,9,.4,Math.PI*2-.8)),new yt({roughness:.8,side:Ye}),s);for(let x=0;x<s;x++){const[v,b]=n();ge.position.set(v,.09+x%5*.004,b),ge.rotation.set(0,$t()*6.28,0),ge.scale.setScalar(.6+$t()*.9),ge.updateMatrix(),r.setMatrixAt(x,ge.matrix),r.setColorAt(x,Tn.set(je([5216848,6992986,4162632,8831082,5939312])))}i.add(r);const o=new tn(.34,.5,6,1,!0).translate(0,.25,0),a=x=>new yt({color:x,emissive:x,emissiveIntensity:.25,roughness:.6,flatShading:!0,side:Ye}),c=[16777215,16763100,16751296,16773304],l=()=>{const x=new ut(o,a(je(c))),[v,b]=n();return x.position.set(v,.12,b),x.rotation.x=Math.PI,x.position.y=.6,i.add(x),x};for(let x=0;x<26;x++)l();const h=[];for(let x=0;x<Bh;x++){const v=l();v.userData.open=0,v.scale.setScalar(.001),h.push(v)}const u=new yt({color:4168296,roughness:.65}),f=[],d=16;for(const x of Xi){const v=b=>Pr(x.x,b);for(let b=0;b<d;b++){const E=ne.z-x.half+b/d*x.half*2,C=E+x.half*2/d,R=v(E+.001),w=v(C-.001),y=Math.hypot(C-E,w-R),N=-Math.atan2(w-R,C-E),D=(F,O,X)=>f.push(F.rotateX(N).translate(x.x+O,(R+w)/2+X,(E+C)/2));D(new ie(Yn*2,.16,y+.05),0,-.1);for(const F of[-1,1])D(new ie(.1,.1,y+.05),F*(Yn-.1),1.05),D(new ie(.07,.07,y+.05),F*(Yn-.1),.55),f.push(new ie(.1,1.1,.1).translate(x.x+F*(Yn-.1),R+.5,E));if(x.wisteria&&b%2===0){for(const F of[-1,1])f.push(new ie(.09,2.6,.09).translate(x.x+F*(Yn-.1),R+2.3,E));f.push(new ie(Yn*2,.09,.09).translate(x.x,R+3.6,E))}}for(const b of[-1,1])for(const E of[-1,1])f.push(new ie(.16,1.4,.16).translate(x.x+b*(Yn-.1),.7,ne.z+E*x.half))}i.add(new ut(pn(f),u));const g=Xi[0],_=700,m=new $e(new os(.17,1),new yt({roughness:.8,flatShading:!0}),_);for(let x=0;x<_;x++){const v=ne.z+($t()*2-1)*g.half*.95,b=$t()<.6,E=g.x+(b?($t()<.5?-1:1)*(Yn-.1+($t()-.5)*.5):($t()*2-1)*Yn);ge.position.set(E,Pr(g.x,v)+3.65-(b?$t()*$t()*1.3:$t()*.25),v),ge.rotation.set($t()*3,$t()*3,0),ge.scale.set(.8+$t()*.5,1+$t()*1.4,.8+$t()*.5),ge.updateMatrix(),m.setMatrixAt(x,ge.matrix),m.setColorAt(x,Tn.set(je([11832040,10121432,13676788,8018632,5940808,4886592,15259903])))}i.add(m);const p=900,M=new $e(new tn(.09,1,4).translate(0,.5,0),new yt({roughness:.9,flatShading:!0}),p);for(let x=0;x<p;x++){const v=$t()*6.28,b=.97+$t()*.05,E=ne.x+Math.cos(v)*ne.a*b,C=ne.z+Math.sin(v)*ne.b*b;ol(E,C,1.2)?ge.scale.setScalar(.001):ge.scale.set(1,.7+$t()*1.3,1),ge.position.set(E,0,C),ge.rotation.set(($t()-.5)*.3,$t()*3,($t()-.5)*.3),ge.updateMatrix(),M.setMatrixAt(x,ge.matrix),M.setColorAt(x,Tn.set(je([4164156,5940808,3108920,7911504,5216840,6992986,9068496,11563232,16767050])))}return i.add(M),{waterPaint:t,lilies:h}}function D1(i){const t=In("#b8d0a0",["#d8ecc0","#8ab078","#c8e0a0","#6a9860","#e8f0c8","#a0c890"],{len:32,wid:9,ang:Math.PI/2,spread:.6,curve:12},700);t.repeat.set(3,3);const e=new yt({map:t,vertexColors:!0,flatShading:!0,roughness:1}),n=new yt({color:5917242,roughness:1}),s=[],r=[],o=(l,h,u,f,d,g,_)=>s.push(Hi(new we(1,8,6).scale(f,d,g).translate(l,h,u),_)),a=[9091160,10143848,7907408,11063408];for(const[l,h]of[[-60,44],[-52,92],[0,100],[58,88],[62,42],[4,30]]){r.push(new ve(.45,.7,6,7).translate(l,3,h)),o(l,8.4,h,5.4,3.2,5.4,je(a));for(let u=0;u<26;u++){const f=u/26*6.28+$t()*.2,d=4.2+$t()*1.4,g=4.5+$t()*3;s.push(Hi(new tn(.75,g,5).rotateX(Math.PI).translate(l+Math.cos(f)*d,8.2-g/2,h+Math.sin(f)*d),je(a)))}}const c=[5216840,5941328,4162624,7911520,6987840,9091144];for(let l=0;l<170;l++){const h=$t()*6.28,u=122+$t()*$t()*210,f=Math.cos(h)*u,d=Math.sin(h)*u;if(!(Math.hypot(f-an.x,d-an.z)<22))if($t()<.4){const g=12+$t()*9;s.push(Hi(new tn(1.6+$t(),g,7).translate(f,g/2+1.5,d),je(c))),r.push(new ve(.25,.3,2,6).translate(f,1,d))}else{const g=3+$t()*2.6;r.push(new ve(.3,.42,4,6).translate(f,2,d)),o(f,4+g*.8,d,g,g*.85,g,je(c)),o(f+g*.5,4+g*.5,d+g*.3,g*.7,g*.6,g*.7,je(c))}}for(const[l,h]of[[-56,-86],[56,-86],[-58,-50],[58,-50],[-56,-14],[56,-14],[-30,24],[34,24]]){r.push(new ve(.22,.3,3,6).translate(l,1.5,h));const u=je([16761048,16769260,16296136,16774392]);o(l,4.6,h,2.8,2.2,2.8,u),o(l+1.2,4,h+.8,1.8,1.5,1.8,u)}i.add(new ut(pn(s.map(l=>l.index?l.toNonIndexed():l)),e)),i.add(new ut(pn(r),n))}function U1(i){const t=new ze;t.position.set(-44,0,36),t.rotation.y=Math.atan2(Xi[0].x+44,ne.z-36);const e=(o,a,c,l,h)=>{const u=new ut(o,new yt({color:a,roughness:.85}));return u.position.set(c,l,h),t.add(u),u};e(new sn(.2,.5,4,10),15262936,0,1.2,0),e(new sn(.11,.72,4,8),9079440,-.1,.47,0),e(new sn(.11,.72,4,8),9079440,.1,.47,0),e(new we(.14,12,10),15253664,0,1.72,0),e(new we(.15,10,8),15790320,0,1.6,.08).scale.set(1,1.2,.7),e(new ve(.34,.34,.04,16),15259808,0,1.84,0),e(new ve(.15,.17,.14,12),15259808,0,1.9,0);const n=e(new sn(.06,.55,4,8),15262936,.3,1.35,.25);n.rotation.x=-1.2;for(const[o,a,c]of[[-.35,.95,.12],[.35,.95,.12],[0,1.45,-.28]])e(new ve(.025,.025,1.9,5),8018490,o,.95,a).rotation.x=c;const s=e(new ie(.9,.7,.04),16052452,0,1.35,.98);s.rotation.x=-.12;const r=e(new He(.8,.6),16777215,0,1.35,.955);r.rotation.set(-.12+Math.PI,0,Math.PI),r.material=new le({map:In("#5a9a8a",["#7ab8a8","#4f8a6a","#a8d8c0","#3f9a68","#ffc8dc","#8a8ad0"],{len:30,wid:9,ang:0,spread:.4},300)}),i.add(t)}function N1(i){const e={torso:new sn(.15,.3,4,12).scale(1.3,1,.85).translate(0,1.2,0),skirt:new tn(.34,.95,10,1,!0).translate(0,.52,0),head:new we(.115,14,12).scale(.92,1.12,1).translate(0,1.64,0),hat:new ve(.26,.28,.04,14).translate(0,1.76,0),arm:new sn(.045,.5,4,8).translate(0,-.29,0),leg:new sn(.07,.72,4,8).translate(0,-.43,0),parasol:new tn(.75,.3,10,1,!0).translate(0,2.25,.1),stick:new ve(.015,.015,1,4).translate(0,1.75,.1)},n=(v,b,E)=>{const C=new $e(v,new yt({roughness:.85,side:E?Ye:Wi}),b);return C.frustumCulled=!1,i.add(C),C},s=n(e.torso,46),r=n(e.skirt,46,!0),o=n(e.head,46),a=n(e.hat,46),c=n(e.arm,92),l=n(e.leg,92),h=n(e.parasol,46,!0),u=n(e.stick,46),f=["#ffffff","#f4ecd8","#dce8f8","#f8d8e0","#e8e0f4","#f0e8c0","#c8dcf0","#3a4a6a","#5a4a40"],d=["#f1c9a5","#e0ac69","#c68642","#d9a27a"],g=new fe().makeScale(0,0,0),_=[];for(let v=0;v<46;v++){const E={kind:v<18?"ring":v<30?"avenue":v<38?"lane":"bed",s:$t(),v:($t()<.5?-1:1)*(.7+$t()*.7),h:.9+$t()*.18,walk:$t()*6.28,hop:0,off:($t()-.5)*2.2,row:($t()<.5?-1:1)*(3.5+9*(1+Math.floor($t()*5))),dress:$t()<.5,shade:$t()<.4};_.push(E);const C=je(f);s.setColorAt(v,Tn.set(C)),r.setColorAt(v,Tn.set(C)),o.setColorAt(v,Tn.set(je(d))),a.setColorAt(v,Tn.set(je(["#e8d8a0","#f4ecd0","#d8c080","#ffffff"]))),h.setColorAt(v,Tn.set(je(["#ffffff","#fff0c8","#ffd8e4","#d8ecff","#f0d8ff"]))),u.setColorAt(v,Tn.set("#6a5a4a"));for(const R of[0,1])c.setColorAt(v*2+R,Tn.set(C)),l.setColorAt(v*2+R,Tn.set(je(["#e8e4d8","#8a8a90","#5a5a66"])));E.dress||r.setMatrixAt(v,g),E.shade||(h.setMatrixAt(v,g),u.setMatrixAt(v,g))}const m=new fe,p=new fe,M=new fe,x=(v,b,E,C,R)=>{p.makeRotationX(R).setPosition(E,C,0),v.setMatrixAt(b,M.multiplyMatrices(m,p))};return(v,b)=>{let E=!1;for(let C=0;C<46;C++){const R=_[C];let w,y,N;if(R.kind==="ring"){R.s+=R.v*v/250;const O=R.s*6.283,X=ne.a*1.115+R.off*.6,q=ne.b*1.115+R.off*.6+1.2;w=ne.x+Math.cos(O)*X,y=ne.z+Math.sin(O)*q,N=Math.atan2(-Math.sin(O)*X,Math.cos(O)*q)+(R.v<0?Math.PI:0),Xi.some(nt=>Math.abs(w-nt.x)<3.4&&Math.abs(Math.abs(y-ne.z)-nt.half)<5)&&(y+=Math.sign(y-ne.z)*2.2)}else{const[O,X]=R.kind==="avenue"?[-100,10]:R.kind==="lane"?[-110,110]:[-98,-2];R.s+=R.v*v/(X-O),(R.s<0||R.s>1)&&(R.v=-R.v,R.s=Math.min(1,Math.max(0,R.s)));const q=O+R.s*(X-O);R.kind==="lane"?(w=q,y=14.5+R.off,N=R.v>0?Math.PI/2:-Math.PI/2):(w=R.kind==="avenue"?R.off:R.row+R.off*.4,y=q,N=R.v>0?0:Math.PI)}R.hop>0?R.hop-=v:b&&Math.abs(b.speed)>3&&b.y<3&&Math.hypot(w-b.x,y-b.z)<3.2&&(R.hop=.55,E=!0);const D=R.hop>0;R.walk+=Math.abs(R.v)*v*3.4;const F=Math.sin(R.walk)*.45;ge.position.set(w,Math.abs(Math.sin(R.walk))*.03+(D?Math.sin(R.hop/.55*Math.PI)*1.1:0),y),ge.rotation.set(0,N,0),ge.scale.setScalar(R.h),ge.updateMatrix(),m.copy(ge.matrix),s.setMatrixAt(C,m),o.setMatrixAt(C,m),a.setMatrixAt(C,m),R.dress&&r.setMatrixAt(C,m),R.shade&&(h.setMatrixAt(C,m),u.setMatrixAt(C,m)),x(l,C*2,-.085,.9,D?-.5:F),x(l,C*2+1,.085,.9,D?.3:-F),x(c,C*2,-.245,1.44,D?-2.7:-F*.8),x(c,C*2+1,.245,1.44,D?-2.7:R.shade?-1.5:F*.8)}for(const C of[s,r,o,a,c,l,h,u])C.instanceMatrix.needsUpdate=!0;return E}}function F1(i){const t=document.createElement("canvas");t.width=1024,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,"#4f8fe0"),n.addColorStop(.3,"#7fb4ee"),n.addColorStop(.44,"#b4d6f4"),n.addColorStop(.5,"#e6eee0"),n.addColorStop(1,"#e6eee0"),e.fillStyle=n,e.fillRect(0,0,1024,512);const s=qd(77);for(let a=0;a<26;a++){const c=s()*1024,l=90+s()*140,h=40+s()*90;for(let u=0;u<60;u++){e.fillStyle=["rgba(255,255,255,0.55)","rgba(255,246,232,0.5)","rgba(255,230,236,0.35)","rgba(236,244,255,0.45)"][Math.floor(s()*4)];const f=c+(s()-.5)*h*2,d=l+(s()-.5)*h*.45;e.beginPath(),e.ellipse(f,d,10+s()*16,3+s()*4,(s()-.5)*.4,0,Math.PI*2),e.fill(),f>1e3&&(e.beginPath(),e.ellipse(f-1024,d,14,4,0,0,Math.PI*2),e.fill())}}const r=new mn(t);r.colorSpace=Ge,r.wrapS=Rs;const o=new ut(new we(900,40,20),new le({map:r,side:ln,fog:!1,depthWrite:!1}));return o.renderOrder=-2,i.add(o),o}function z1(i,t){const e=t/Yd,n=t/2;i.fillStyle="#3f7a44",i.fillRect(0,0,t,t);const s=i.createRadialGradient(n,n,140*e,n,n,168*e);s.addColorStop(0,"#74b458"),s.addColorStop(1,"rgba(116,180,88,0)"),i.fillStyle=s,i.beginPath(),i.arc(n,n,168*e,0,Math.PI*2),i.fill();const r=(a,c,l,h)=>i.fillRect(n+a*e,n+l*e,(c-a)*e,(h-l)*e);i.fillStyle="#e6d2b0",r(-3,3,-104,36);for(const a of[-67,-33,3])r(-50,50,a-2.5,a+2.5);r(-58,-50,-69.5,-64.5),r(-120,120,12,17),r(-70,70,102,106),i.strokeStyle="#e6d2b0",i.lineWidth=5*e,i.beginPath(),i.ellipse(n+ne.x*e,n+ne.z*e,ne.a*1.11*e,ne.b*1.13*e,0,0,Math.PI*2),i.stroke();const o=["#ff8ab8","#b080e0","#ffd24a","#f05a50","#ffffff","#7aa0f0"];Wa.forEach((a,c)=>{i.fillStyle=o[c%o.length],r(a.x0,a.x1,a.z0,a.z1)}),i.fillStyle="#5aa6b4",i.beginPath(),i.ellipse(n+ne.x*e,n+ne.z*e,ne.a*e,ne.b*e,0,0,Math.PI*2),i.fill(),i.fillStyle="#2f8a5a";for(const a of Xi)r(a.x-2.6,a.x+2.6,ne.z-a.half,ne.z+a.half);i.fillStyle="#f0a8a8",r(an.x-13,an.x+13,an.z-5,an.z+3),i.fillStyle="#7a86a0",r(an.x-13,an.x+13,an.z-5,an.z-3),i.fillStyle="#a56b3c",r(ei.x-6,ei.x+6,ei.z-7,ei.z+7),i.fillStyle="#2f7a52",i.beginPath(),i.arc(n+ei.x*e,n+ei.z*e,17,0,Math.PI*2),i.fill(),i.strokeStyle="#ffffff",i.lineWidth=3,i.stroke(),i.font="20px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("🧩",n+ei.x*e,n+ei.z*e+1)}function O1(i){const t=new kt(13624558),e=new kt(15775888);i.fog=new Ur(t.getHex(),.0026);const n=new tl(15266559,8034904,1.5),s=new el(16773328,1.7);s.position.set(-.5,.9,.35),i.add(n,s);const r=new kt(15266559),o=new kt(16763040),a=new kt(16773328),c=new kt(16751194);R1(i),P1(i);const l=L1(i),h=I1(i);D1(i),U1(i);const u=N1(i),f=F1(i);let d=0;return{setDelivered(g){d=Math.min(Bh,g)},update(g,_,m,p,M){return f.position.copy(m.position),f.rotation.y=g*.004,f.material.color.setRGB(1,1-p*.22,1-p*.42),i.fog.color.copy(t).lerp(e,p),n.color.copy(r).lerp(o,p),s.color.copy(a).lerp(c,p),s.intensity=1.7-p*.6,h.waterPaint.offset.x=g*.004,h.waterPaint.offset.y=Math.sin(g*.3)*.01,h.lilies.forEach((x,v)=>{const b=v<d?1:0;x.userData.open+=(b-x.userData.open)*Math.min(1,_*2.5),x.scale.setScalar(Math.max(.001,x.userData.open*(1.5+.08*Math.sin(g*2+v))))}),l.beam.material.opacity=.13+.04*Math.sin(g*2),{hop:u(_,M)}}}}const B1=Object.freeze(Object.defineProperty({__proto__:null,HILL_H:w1,INFO:S1,LAMP_COUNT:Bh,MAP_SPAN:Yd,MIND:ei,MON:an,SOFT_EDGE:E1,WORLD_R:b1,blocked:A1,buildWorld:O1,drawMap:z1,heightAt:Pr,pushOut:T1,starSpot:C1},Symbol.toStringTag,{value:"Module"})),yf=["wss://broker.emqx.io:8084/mqtt","wss://broker.hivemq.com:8884/mqtt"],Sf="paletterider/v1",wf=7,k1=40,G1=["Amber","Azure","Coral","Crimson","Golden","Indigo","Ivory","Jade","Lilac","Olive","Ochre","Rosy","Ruby","Saffron","Scarlet","Silver","Teal","Umber","Violet","Cobalt"],H1=["Sparrow","Otter","Heron","Fox","Finch","Hare","Kite","Lynx","Robin","Swift","Wren","Koi","Panda","Tiger","Crane","Mynah","Gecko","Bison","Ibis","Lark"],bf=i=>i[Math.floor(Math.random()*i.length)];function V1(){let i=null;try{i=JSON.parse(localStorage.getItem("paletterider-guest"))}catch{}if(!i||!i.name||!Number.isFinite(i.bike)||!Number.isFinite(i.dress)){const t=Math.floor(Math.random()*360);i={name:`Guest ${bf(G1)} ${bf(H1)}`,bike:t,dress:(t+90+Math.floor(Math.random()*180))%360};try{localStorage.setItem("paletterider-guest",JSON.stringify(i))}catch{}}return i.id=Array.from(crypto.getRandomValues(new Uint8Array(6)),t=>t.toString(36).padStart(2,"0")).join(""),i}const Kd=new TextEncoder,Ef=new TextDecoder,ao=i=>{const t=Kd.encode(i);return[t.length>>8,t.length&255,...t]};function Gh(i,t){const e=[];let n=t.length;do{let s=n%128;n=Math.floor(n/128),n>0&&(s|=128),e.push(s)}while(n>0);return new Uint8Array([i,...e,...t])}const W1=(i,t)=>Gh(16,[...ao("MQTT"),4,6,0,30,...ao(i),...ao(t),0,0]),X1=i=>Gh(130,[0,1,...ao(i),0]),Tf=(i,t)=>Gh(48,[...ao(i),...Kd.encode(t)]),gs=(i,t,e)=>Number.isFinite(i)?Math.min(e,Math.max(t,i)):0,$1=i=>String(i??"").replace(/[^\p{L}\p{N} _.-]/gu,"").trim().slice(0,22)||"Guest";function Y1(i){const t=V1(),e=new Map,n=`${Sf}/${i}/${t.id}`;let s=null,r=!1,o=0,a=0,c=new Uint8Array(0),l=0,h=0,u=null;const f=()=>performance.now()/1e3;function d(M,x){const[,,v,b]=M.split("/");if(!b||b===t.id)return;if(!x)return void e.delete(b);let E;try{E=JSON.parse(x)}catch{return}if(!E||typeof E!="object")return;let C=e.get(b);if(!C){if(e.size>=k1)return;C={id:b,fresh:!0},e.set(b,C)}Object.assign(C,{name:$1(E.n),bike:gs(E.b,0,360),dress:gs(E.d,0,360),chapter:v,playing:E.p===1,foot:E.f===1,x:gs(E.x,-5e3,5e3),y:gs(E.y,-500,5e3),z:gs(E.z,-5e3,5e3),yaw:gs(E.h,-1e3,1e3),speed:gs(E.s,0,80),seen:f()})}function g(M){const x=new Uint8Array(c.length+M.length);for(x.set(c),x.set(M,c.length),c=x;;){if(c.length<2)return;let v=0,b=1,E=1;for(;;E++){if(E>=c.length)return;if(v+=(c[E]&127)*b,b*=128,!(c[E]&128)){E++;break}if(E>4)return void s.close()}if(c.length<E+v)return;const C=c[0]>>4,R=c.subarray(E,E+v);if(C===2){if(R[1]!==0)return void s.close();r=!0,a=0,s.send(X1(`${Sf}/+/+`)),u&&p(u,!0)}else if(C===3&&R.length>=2){const w=R[0]<<8|R[1],y=2+w+(c[0]&6?2:0);y<=R.length&&d(Ef.decode(R.subarray(2,2+w)),Ef.decode(R.subarray(y)))}c=c.slice(E+v)}}function _(){try{s=new WebSocket(yf[o%yf.length],"mqtt")}catch{return void m()}s.binaryType="arraybuffer";const M=s;M.onopen=()=>M.send(W1(`pr-${t.id}`,n)),M.onmessage=x=>{M===s&&x.data instanceof ArrayBuffer&&g(new Uint8Array(x.data))},M.onclose=()=>{if(M!==s)return;const x=r;r=!1,c=new Uint8Array(0),x||o++,m()},M.onerror=()=>{}}function m(){a=Math.min(a+1,6),setTimeout(_,1500*a)}function p(M,x){if(u=M,!r||s.readyState!==1)return;const v=f();if(!x&&v-h<(M.p&&M.s>.3?.22:1.5))return;h=v;const b=E=>Math.round(E*100)/100;s.send(Tf(n,JSON.stringify({n:t.name,b:t.bike,d:t.dress,p:M.p?1:0,f:M.f?1:0,x:b(M.x),y:b(M.y),z:b(M.z),h:b(M.h),s:b(M.s)})))}return l=setInterval(()=>{r&&s.readyState===1&&s.send(new Uint8Array([192,0]));const M=f();for(const[x,v]of e)M-v.seen>wf&&e.delete(x)},1e4),addEventListener("pagehide",()=>{r&&s.readyState===1&&s.send(Tf(n,""))}),_(),{me:t,peers:e,send:M=>p(M,!1),connected:()=>r,riding(M){const x=f();let v=M?1:0;for(const b of e.values())b.playing&&x-b.seen<wf&&v++;return v},stop:()=>clearInterval(l)}}const Yl=[{id:"monet",file:"water-lily-pond.jpg",name:"The Water Lily Pond",short:"Monet"},{id:"vangogh",file:"cafe-terrace-at-night.jpg",name:"Café Terrace at Night",short:"Van Gogh"},{id:"klee",file:"castle-and-sun.jpg",name:"Castle and Sun",short:"Klee"}],ql={3:40,4:90,5:160},sr=1.9,Kl=2.08,q1=-.1,jl={};function K1(i){if(jl[i.id])return jl[i.id];const t=document.createElement("canvas");t.width=t.height=1024;const e=t.getContext("2d");e.fillStyle="#1a1f36",e.fillRect(0,0,1024,1024);const n=new mn(t);n.colorSpace=Ge,n.anisotropy=8;const s=new Image;return s.onload=()=>{const r=Math.min(s.width,s.height);e.drawImage(s,(s.width-r)/2,(s.height-r)/2,r,r,0,0,1024,1024),n.needsUpdate=!0},s.src="./"+i.file,jl[i.id]=n,n}function j1({root:i,at:t,toWorld:e,camera:n,renderer:s,tone:r,won:o,mats:a}){const{glow:c,walnut:l,oak:h,brass:u,GOLD:f,AMBER:d}=a,g=(B,H,I,et,st,wt,te,L=i)=>{const Jt=new ut(new ie(B,H,I),et);return Jt.position.set(st,wt,te),L.add(Jt),Jt};g(2.4,.95,1.1,l,t.x,.475,t.z),g(2.44,.035,.035,u,t.x,.96,t.z+.56);const _=new ze;_.position.set(t.x,Kl,t.z-.1),_.rotation.x=q1,i.add(_),g(sr+.3,sr+.3,.1,l,0,0,-.05,_);const m=c(f),p=sr/2+.13;for(const[B,H,I,et]of[[2*p+.04,.04,0,p],[2*p+.04,.04,0,-p],[.04,2*p,-p,0],[.04,2*p,p,0]])g(B,H,.04,m,I,et,0,_);for(const B of[-1,1]){const H=g(.07,1.3,.07,h,t.x+B*.7,1.55,t.z-.35);H.rotation.x=.12}const M=new ut(new He(1.7,.3),new le({transparent:!0,toneMapped:!1}));M.position.set(t.x,.8,t.z+.56),i.add(M);const x={size:4,art:Yl[0],cells:[],empty:0,moves:0,started:!1,time:0,done:!1,par:ql[4]};let v=[],b=null,E=null,C=0;const R=()=>sr/x.size,w=(B,H)=>{const I=x.size,et=R(),st=Math.floor(B/I),wt=B%I;return H.set(-sr/2+wt*et+et/2,sr/2-st*et-et/2,.012)};function y(B){const H=x.size,I=R(),et=Math.floor(B/H),st=B%H,wt=new He(I-.022,I-.022),te=wt.attributes.uv;for(let L=0;L<te.count;L++)te.setXY(L,(st+te.getX(L))/H,1-(et+1-te.getY(L))/H);return wt}function N(){for(const B of v)_.remove(B.mesh),B.mesh.geometry.dispose(),B.mesh.material.dispose();b&&(_.remove(b),b.geometry.dispose(),b.material.dispose()),v=[],b=null,E=null}const D=B=>{const H=x.size,I=Math.floor(B/H),et=B%H,st=[];return I>0&&st.push(B-H),I<H-1&&st.push(B+H),et>0&&st.push(B-1),et<H-1&&st.push(B+1),st},F=()=>x.cells.every((B,H)=>B===H||B===-1&&H===x.cells.length-1);function O(B=x.size,H=x.art){N();const I=B;Object.assign(x,{size:I,art:H,moves:0,started:!1,time:0,done:!1,par:ql[I]}),C=0;const et=K1(H);x.cells=Array.from({length:I*I},(te,L)=>L===I*I-1?-1:L),x.empty=I*I-1;let st=-1;x.trail=[];for(let te=0;te<ql[I]||F();te++){const L=D(x.empty).filter(ot=>ot!==st),Jt=L[Math.floor(Math.random()*L.length)];x.cells[x.empty]=x.cells[Jt],x.cells[Jt]=-1,x.trail.push(x.empty),st=x.empty,x.empty=Jt}const wt=new U;x.cells.forEach((te,L)=>{if(te<0)return;const Jt=new ut(y(te),new le({map:et,toneMapped:!1}));w(L,Jt.position),_.add(Jt),v[te]={id:te,mesh:Jt,at:L,to:w(L,new U)}}),v=v.filter(Boolean),b=new ut(y(I*I-1),new le({map:et,toneMapped:!1,transparent:!0,opacity:0})),w(I*I-1,b.position),b.scale.setScalar(.001),_.add(b),M.material.map?.dispose(),M.material.map=a.neonTexture([H.name.toUpperCase()],{w:768,h:136,size:66}),M.material.needsUpdate=!0,wt.set(0,0,0)}const X=B=>v.find(H=>H.at===B);function q(B){const H=X(B);x.cells[x.empty]=H.id,x.cells[B]=-1,H.at=x.empty,w(x.empty,H.to),x.empty=B,x.moves++}function nt(B){if(x.done||B===x.empty)return;const H=x.size,I=Math.floor(B/H),et=B%H,st=Math.floor(x.empty/H),wt=x.empty%H;if(I!==st&&et!==wt){r(150,.12,.05,"triangle");return}x.started||(x.started=!0,x.time=0);const te=I===st?Math.sign(et-wt):Math.sign(I-st)*H;for(;x.empty!==B;)q(x.empty+te);r(700+Math.random()*120,.12,.05),F()&&(x.done=!0,C=.001,o())}const G=new Ad,j=new St;function dt(B){const H=s.domElement.getBoundingClientRect();j.set((B.clientX-H.left)/H.width*2-1,-((B.clientY-H.top)/H.height)*2+1),n.updateMatrixWorld(),_.updateMatrixWorld(!0),G.setFromCamera(j,n);const I=G.intersectObjects(v.map(et=>et.mesh),!1)[0];return I?v.find(et=>et.mesh===I.object):null}function Tt(B,H){if(x.done)return;const I=dt(H);if(B==="down")I&&nt(I.at);else if(B==="move"){const et=x.size;E=I&&(Math.floor(I.at/et)===Math.floor(x.empty/et)||I.at%et===x.empty%et)?I:null}}function ft(B){if(x.done)return!1;const H=x.size,I=Math.floor(x.empty/H),et=x.empty%H,st={ArrowLeft:et<H-1?x.empty+1:-1,KeyA:et<H-1?x.empty+1:-1,ArrowRight:et>0?x.empty-1:-1,KeyD:et>0?x.empty-1:-1,ArrowUp:I<H-1?x.empty+H:-1,KeyW:I<H-1?x.empty+H:-1,ArrowDown:I>0?x.empty-H:-1,KeyS:I>0?x.empty-H:-1}[B.code];return st===void 0?!1:(B.preventDefault(),st>=0&&nt(st),!0)}function Nt(B,H){for(const I of v){I.mesh.position.lerp(I.to,1-Math.exp(-18*B));const et=I===E&&!x.done?1.04:1;I.mesh.scale.setScalar(I.mesh.scale.x+(et-I.mesh.scale.x)*Math.min(1,B*14)),I.mesh.position.z=.012+(I===E?.03:0)}if(C>0&&b){C+=B;const I=Math.min(1,C/.5);b.material.opacity=I,b.scale.setScalar(Math.max(.001,1.25-.25*I))}m.color.setHex(x.done&&Math.sin(H*8)>0?d:f)}function pt(B,H){const I=Math.tan(gh.degToRad(n.fov/2)),et=Math.max(2.8,1.8/I,1.3/(I*n.aspect));e(t.x,Kl+.2,t.z-.1+et,B),e(t.x,Kl+.2,t.z-.1,H)}O();const Pt=()=>x.moves<=x.par?3:x.moves<=x.par*2?2:1;return{id:"slide",name:"Painting Slide",prompt:"Play Painting Slide",hint:"Put the painting back together. Tap a tile <b>in line with the gap</b> to slide it across. Tap <b>👁 Goal</b> to see the finished painting. The clock starts on your first move.",S:x,bestKey:"paletterider-slide-best",bestId:()=>`${x.art.id}-${x.size}`,bestSub:()=>`${x.size}×${x.size} · ${x.art.short}`,options:()=>[{label:"GRID",value:x.size,choices:[3,4,5].map(B=>({v:B,label:`${B}×${B}`})),set:B=>O(B,x.art)},{label:"PAINTING",value:x.art.id,choices:Yl.map(B=>({v:B.id,label:B.short,img:"./"+B.file})),set:B=>O(x.size,Yl.find(H=>H.id===B))}],refImage:()=>"./"+x.art.file,refName:()=>`${x.art.name} · ${x.art.short}`,hud:()=>({moves:x.moves,max:x.par,label:"MOVES · PAR"}),setup:()=>O(),pointer:Tt,key:ft,update:Nt,cameraPose:pt,tapCell:nt,card:()=>({title:"Painting Slide",chip:`${x.size}×${x.size} · ${x.art.short.toUpperCase()}`,tiles:[["MOVES",String(x.moves),`par ${x.par}`,"mono"],["PAINTING",x.art.short,x.art.name,"ui"],["RATING","★".repeat(Pt())+"☆".repeat(3-Pt()),["","SOLVED","GREAT","PERFECT"][Pt()],"stars"]],focusY:.6,file:`slide-${x.art.id}-${x.size}x${x.size}`,share:B=>`I put ${x.art.name} back together (${x.size}×${x.size}) in ${B} with ${x.moves} moves in PaletteRider.`})}}const jd=[{file:"castle-and-sun.jpg",by:"Klee",cx:.61,cy:.17,s:.2},{file:"castle-and-sun.jpg",by:"Klee",cx:.62,cy:.58,s:.2},{file:"castle-and-sun.jpg",by:"Klee",cx:.2,cy:.16,s:.2},{file:"castle-and-sun.jpg",by:"Klee",cx:.85,cy:.86,s:.22},{file:"castle-and-sun.jpg",by:"Klee",cx:.45,cy:.85,s:.2},{file:"cafe-terrace-at-night.jpg",by:"Van Gogh",cx:.65,cy:.12,s:.3},{file:"cafe-terrace-at-night.jpg",by:"Van Gogh",cx:.38,cy:.3,s:.3},{file:"cafe-terrace-at-night.jpg",by:"Van Gogh",cx:.42,cy:.63,s:.3},{file:"cafe-terrace-at-night.jpg",by:"Van Gogh",cx:.55,cy:.9,s:.3},{file:"cafe-terrace-at-night.jpg",by:"Van Gogh",cx:.86,cy:.4,s:.26},{file:"water-lily-pond.jpg",by:"Monet",cx:.5,cy:.33,s:.35},{file:"water-lily-pond.jpg",by:"Monet",cx:.55,cy:.78,s:.3},{file:"water-lily-pond.jpg",by:"Monet",cx:.2,cy:.12,s:.3},{file:"water-lily-pond.jpg",by:"Monet",cx:.84,cy:.47,s:.28}],Af={"4×3":[4,3],"4×4":[4,4],"5×4":[5,4]},da=2.3,pa=1.95,Zl=2.1,Z1=-.1,J1='"Space Grotesk", ui-sans-serif, system-ui, sans-serif',Cf={},Q1=i=>Cf[i]||(Cf[i]=new Promise(t=>{const e=new Image;e.onload=()=>t(e),e.onerror=()=>t(null),e.src="./"+i})),Jl=[];function ty(i){if(Jl[i])return Jl[i];const t=jd[i],e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle="#2a1a10",n.fillRect(0,0,256,256);const s=new mn(e);return s.colorSpace=Ge,s.anisotropy=8,Q1(t.file).then(r=>{if(!r)return;const o=t.s*r.width,a=Math.min(r.width-o,Math.max(0,t.cx*r.width-o/2)),c=Math.min(r.height-o,Math.max(0,t.cy*r.height-o/2));n.drawImage(r,a,c,o,o,0,0,256,256),n.fillStyle="rgba(30, 18, 8, 0.72)",n.fillRect(0,214,256,42),n.font=`700 22px ${J1}`,n.fillStyle="#f6d27e",n.textAlign="center",n.textBaseline="middle",n.fillText(t.by.toUpperCase(),128,236),n.strokeStyle="#d9a441",n.lineWidth=8,n.strokeRect(4,4,248,248),s.needsUpdate=!0}),Jl[i]=s,s}let jr=null;function ey(){if(jr)return jr;const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,256,256);e.addColorStop(0,"#6b4429"),e.addColorStop(1,"#3e2615"),t.fillStyle=e,t.fillRect(0,0,256,256);for(let n=0;n<40;n++){t.strokeStyle=`rgba(20, 8, 2, ${.05+Math.random()*.08})`,t.lineWidth=1+Math.random()*2;const s=Math.random()*256;t.beginPath(),t.moveTo(0,s),t.bezierCurveTo(80,s+6,170,s-6,256,s+3),t.stroke()}return t.strokeStyle="#d9a441",t.lineWidth=8,t.strokeRect(12,12,232,232),t.lineWidth=3,t.strokeRect(26,26,204,204),t.fillStyle="#d9a441",t.beginPath(),t.moveTo(128,78),t.lineTo(178,128),t.lineTo(128,178),t.lineTo(78,128),t.closePath(),t.fill(),t.fillStyle="#3e2615",t.beginPath(),t.moveTo(128,100),t.lineTo(156,128),t.lineTo(128,156),t.lineTo(100,128),t.closePath(),t.fill(),jr=new mn(i),jr.colorSpace=Ge,jr}function ny({root:i,at:t,toWorld:e,camera:n,renderer:s,tone:r,won:o,mats:a}){const{glow:c,walnut:l,brass:h,GOLD:u,AMBER:f}=a,d=(ft,Nt,pt,Pt,B,H,I,et=i)=>{const st=new ut(new ie(ft,Nt,pt),Pt);return st.position.set(B,H,I),et.add(st),st};d(2.6,.95,1.1,l,t.x,.475,t.z),d(2.64,.035,.035,h,t.x,.96,t.z+.56);const g=new ze;g.position.set(t.x,Zl,t.z-.1),g.rotation.x=Z1,i.add(g),d(da+.3,pa+.3,.1,l,0,0,-.06,g),d(da+.1,pa+.1,.02,a.felt,0,0,-.005,g);const _=c(u),m=da/2+.15,p=pa/2+.15;for(const[ft,Nt,pt,Pt]of[[2*m+.04,.04,0,p],[2*m+.04,.04,0,-p],[.04,2*p,-m,0],[.04,2*p,m,0]])d(ft,Nt,.04,_,pt,Pt,0,g);for(const ft of[-1,1]){const Nt=d(.07,1.3,.07,a.oak,t.x+ft*.8,1.55,t.z-.35);Nt.rotation.x=.12}const M=new ut(new He(1.7,.3),new le({map:a.neonTexture(["MEMORY MATCH"],{w:768,h:136,size:70}),transparent:!0,toneMapped:!1}));M.position.set(t.x,.8,t.z+.56),i.add(M);const x={grid:"4×4",cols:4,rows:4,pairs:8,par:13,moves:0,found:0,started:!1,time:0,done:!1};let v=[],b=[],E=0,C=null,R=-1;const w=new He(1,1),y=new le({map:ey(),toneMapped:!1});function N(){for(const ft of v)g.remove(ft.group,ft.edge),ft.face.material.dispose(),ft.edge.material.dispose();v=[],b=[],E=0,C=null,R=-1}function D(ft=x.grid){N();const[Nt,pt]=Af[ft],Pt=Nt*pt/2;Object.assign(x,{grid:ft,cols:Nt,rows:pt,pairs:Pt,par:Math.round(Pt*1.6),moves:0,found:0,started:!1,time:0,done:!1});const B=jd.map((st,wt)=>wt).sort(()=>Math.random()-.5).slice(0,Pt),H=[...B,...B];for(let st=H.length-1;st>0;st--){const wt=Math.floor(Math.random()*(st+1));[H[st],H[wt]]=[H[wt],H[st]]}const I=Math.min(da/Nt,pa/pt),et=I*.88;H.forEach((st,wt)=>{const te=Math.floor(wt/Nt),L=wt%Nt,Jt=new ze;Jt.position.set((L-(Nt-1)/2)*I,((pt-1)/2-te)*I,.02);const ot=new ut(w,y);ot.scale.setScalar(et);const rt=new ut(w,new le({map:ty(st),toneMapped:!1}));rt.scale.setScalar(et),rt.rotation.y=Math.PI,rt.position.z=-.002;const lt=new ut(w,new le({color:u,transparent:!0,opacity:0,toneMapped:!1}));lt.scale.setScalar(et*1.08),lt.position.set(Jt.position.x,Jt.position.y,.004),Jt.add(ot,rt),g.add(Jt,lt),v.push({k:wt,id:st,group:Jt,back:ot,face:rt,edge:lt,up:!1,flip:0,matched:!1})})}function F(ft){if(x.done||E>0||ft.up||ft.matched||b.length>=2||(x.started||(x.started=!0,x.time=0),ft.up=!0,b.push(ft),r(520+Math.random()*60,.12,.05,"triangle"),b.length<2))return;x.moves++;const[Nt,pt]=b;Nt.id===pt.id?(Nt.matched=pt.matched=!0,b=[],x.found++,[880,1174.66].forEach((Pt,B)=>setTimeout(()=>r(Pt,.5,.07),180+B*90)),x.found===x.pairs&&(x.done=!0,o())):E=.9}const O=new Ad,X=new St;function q(ft){const Nt=s.domElement.getBoundingClientRect();X.set((ft.clientX-Nt.left)/Nt.width*2-1,-((ft.clientY-Nt.top)/Nt.height)*2+1),n.updateMatrixWorld(),g.updateMatrixWorld(!0),O.setFromCamera(X,n);const pt=O.intersectObjects(v.flatMap(Pt=>[Pt.back,Pt.face]),!1)[0];return pt?v.find(Pt=>Pt.back===pt.object||Pt.face===pt.object):null}function nt(ft,Nt){if(x.done)return;const pt=q(Nt);ft==="down"?pt&&F(pt):ft==="move"&&(C=pt&&!pt.up&&!pt.matched?pt:null)}function G(ft){if(x.done)return!1;const Nt=v.length,pt=x.cols,Pt={ArrowLeft:-1,KeyA:-1,ArrowRight:1,KeyD:1,ArrowUp:-pt,KeyW:-pt,ArrowDown:pt,KeyS:pt}[ft.code];return Pt!==void 0?(ft.preventDefault(),R=R<0?0:Math.min(Nt-1,Math.max(0,R+Pt)),!0):ft.code==="Space"||ft.code==="Enter"?(ft.preventDefault(),R<0?R=0:F(v[R]),!0):!1}function j(ft,Nt){if(E>0&&(E-=ft)<=0){for(const pt of b)pt.up=!1;b=[]}for(const pt of v){pt.flip+=((pt.up||pt.matched?1:0)-pt.flip)*Math.min(1,ft*12),pt.group.rotation.y=Math.PI*pt.flip,pt.group.position.z=.02+Math.sin(Math.PI*pt.flip)*.12;const Pt=pt===C&&!x.done?1.05:1;pt.group.scale.setScalar(pt.group.scale.x+(Pt-pt.group.scale.x)*Math.min(1,ft*14));const B=pt.matched?x.done?.55+.35*Math.sin(Nt*6+pt.k):.85:pt.k===R?.9:0;pt.edge.material.opacity+=(B-pt.edge.material.opacity)*Math.min(1,ft*10),pt.edge.material.color.setHex(pt.matched?u:f)}_.color.setHex(x.done&&Math.sin(Nt*8)>0?f:u)}function dt(ft,Nt){const pt=Math.tan(gh.degToRad(n.fov/2)),Pt=Math.max(2.8,1.85/pt,1.42/(pt*n.aspect));e(t.x,Zl+.2,t.z-.1+Pt,ft),e(t.x,Zl+.2,t.z-.1,Nt)}D();const Tt=()=>x.moves<=x.par?3:x.moves<=x.par*1.5?2:1;return{id:"memory",name:"Memory Match",prompt:"Play Memory Match",hint:"Find the pairs. Tap a card to turn it over, then find its <b>twin</b>: each face is a detail from a painting. The clock starts on your first card.",S:x,bestKey:"paletterider-memory-best",bestId:()=>x.grid,bestSub:()=>`${x.grid} · ${x.pairs} pairs`,options:()=>[{label:"GRID",value:x.grid,choices:Object.keys(Af).map(ft=>({v:ft,label:ft})),set:ft=>D(ft)}],hud:()=>({moves:x.moves,max:x.par,label:"TURNS · PAR"}),setup:()=>D(),pointer:nt,key:G,update:j,cameraPose:dt,turnCard:ft=>F(v[ft]),cards:()=>v,card:()=>{const ft=Tt(),Nt=Math.round(x.pairs/Math.max(1,x.moves)*100);return{title:"Memory Match",chip:`${x.grid} · ${x.pairs} PAIRS`,tiles:[["TURNS",String(x.moves),`par ${x.par}`,"mono"],["ACCURACY",`${Nt}%`,"pairs per turn","mono"],["RATING","★".repeat(ft)+"☆".repeat(3-ft),["","SOLVED","GREAT","PERFECT"][ft],"stars"]],focusY:.5,file:`memory-${x.cols}x${x.rows}`,share:pt=>`I matched all ${x.pairs} pairs of painting details (${x.grid}) in ${pt} and ${x.moves} turns in PaletteRider.`}}}}const iy=["#e0344a","#f08a2c","#f4c534","#3fbf86","#2f8ee0","#8a5ad0","#f4ead6"],$n='"Space Grotesk", ui-sans-serif, system-ui, sans-serif',zn='"JetBrains Mono", ui-monospace, Menlo, monospace',ma=16762986,Ql=16751434,tc=.15,Ni=[-1.45,0,1.45],Ta=1.32,pi=1.12,ke=-2.6,ec=pi+Ta+.38,nc="aashishgtbit.github.io/PaletteRider",sy="paletterider-hanoi-best",Ji={x:-5,z:ke},Qi={x:5,z:ke},ic=[],he=i=>document.getElementById(i),Rf=(i,t,e)=>Math.min(e,Math.max(t,i)),Zr=i=>{const t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(1)}`};function ry(i,{w:t=1024,h:e=256,bg:n="#fbf6ec",fg:s="#2a2420",font:r="Georgia, serif",size:o=110,border:a="#2f7a52"}={}){const c=document.createElement("canvas");c.width=t,c.height=e;const l=c.getContext("2d");l.fillStyle=n,l.fillRect(0,0,t,e),a&&(l.strokeStyle=a,l.lineWidth=e*.06,l.strokeRect(e*.05,e*.05,t-e*.1,e-e*.1)),l.fillStyle=s,l.textAlign="center",l.textBaseline="middle",i.forEach((u,f)=>{const d=f===0?o:o*.55;l.font=`${f===0?"bold ":""}${d}px ${r}`;const g=i.length===1?e/2:e*(f===0?.4:.74);l.fillText(u,t/2,g,t*.86)});const h=new mn(c);return h.colorSpace=Ge,h.anisotropy=4,h}function Jr(i,{w:t=1024,h:e=256,size:n=120}={}){const s=document.createElement("canvas");s.width=t,s.height=e;const r=s.getContext("2d");r.textAlign="center",r.textBaseline="middle",i.forEach((a,c)=>{const l=c===0,h=l?n:n*.3;r.font=l?`700 ${h}px ${$n}`:`600 ${h}px ${zn}`;const u=i.length===1?e/2:l?e*.42:e*.82;if(l){const f=r.createLinearGradient(0,u-h/2,0,u+h/2);f.addColorStop(0,"#fff1c4"),f.addColorStop(.5,"#f6c562"),f.addColorStop(1,"#d9952f"),r.fillStyle=f,r.shadowColor="rgba(255, 190, 90, 0.75)",r.shadowBlur=18}else r.fillStyle="#f7e6c2",r.shadowColor="rgba(255, 190, 90, 0.5)",r.shadowBlur=8;l||(r.save(),r.letterSpacing="6px"),r.fillText(a,t/2,u,t*.92),l||r.restore()});const o=new mn(s);return o.colorSpace=Ge,o.anisotropy=4,o}const Zd=(i,t,e)=>(i.colorSpace=Ge,i.wrapS=i.wrapT=Rs,i.repeat.set(t,e),i.anisotropy=8,i);function rr(i,{planks:t=5,rx:e=1,ry:n=1,seam:s=.55}={}){const r=document.createElement("canvas");r.width=r.height=512;const o=r.getContext("2d"),a=new kt(i),c=512/t;let l=i&65535;const h=()=>(l=l*16807%2147483647)/2147483647;for(let u=0;u<t;u++){const f=a.clone().offsetHSL((h()-.5)*.02,(h()-.5)*.08,(h()-.5)*.08);o.fillStyle=`#${f.getHexString()}`,o.fillRect(u*c,0,c,512);for(let d=0;d<26;d++){const g=u*c+h()*c,_=h()<.6;o.strokeStyle=_?`rgba(40, 20, 8, ${.06+h()*.12})`:`rgba(255, 230, 190, ${.04+h()*.08})`,o.lineWidth=.6+h()*1.8,o.beginPath();for(let m=0;m<=512;m+=16)o.lineTo(g+Math.sin(m/(40+h()*30)+d)*2.2,m);o.stroke()}if(h()<.5){const d=u*c+c*(.3+h()*.4),g=h()*512;o.fillStyle="rgba(50, 25, 10, 0.25)",o.beginPath(),o.ellipse(d,g,4+h()*3,9+h()*6,0,0,Math.PI*2),o.fill()}o.fillStyle=`rgba(30, 14, 4, ${s})`,o.fillRect(u*c,0,2,512)}return Zd(new mn(r),e,n)}function oy(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");let e=7;const n=()=>(e=e*16807%2147483647)/2147483647;for(let s=0;s<8;s++)for(let r=-1;r<9;r++){const o=r*32+s%2*16,a=s*32;t.fillStyle=`hsl(${20+n()*10}, ${42+n()*14}%, ${30+n()*12}%)`,t.fillRect(o,a,31,32),t.fillStyle="rgba(20, 8, 2, 0.45)",t.fillRect(o,a+29,32,3)}return Zd(new mn(i),6,4)}function ay(){const i=document.createElement("canvas");i.width=512,i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(256,140,20,256,130,300);e.addColorStop(0,"#2f6e4f"),e.addColorStop(.6,"#1f5039"),e.addColorStop(1,"#143826"),t.fillStyle=e,t.fillRect(0,0,512,256);for(let s=0;s<9e3;s++)t.fillStyle=Math.random()<.5?"rgba(255,255,255,0.025)":"rgba(0,0,0,0.04)",t.fillRect(Math.random()*512,Math.random()*256,1.5,1.5);const n=new mn(i);return n.colorSpace=Ge,n}function ly(i,t,e){const n=document.createElement("canvas");n.width=n.height=256;const s=n.getContext("2d");s.fillStyle=i,s.fillRect(0,0,256,256),s.strokeStyle="rgba(20, 16, 24, 0.9)",s.lineWidth=12,s.beginPath(),s.arc(128,128,122,0,Math.PI*2),s.stroke(),s.fillStyle="#1a1620",s.beginPath(),s.arc(128,128,.07/e*128,0,Math.PI*2),s.fill();const r=128*(.07/e)+(128-128*(.07/e))/2,o=Math.min(78,(128-128*(.07/e))*.9);s.font=`700 ${o}px ${$n}`,s.textAlign="center",s.textBaseline="middle";const a=parseInt(i.slice(1,3),16)+parseInt(i.slice(3,5),16)+parseInt(i.slice(5,7),16)>560;s.fillStyle=a?"#1a1d2e":"#ffffff",s.strokeStyle=a?"rgba(255,255,255,0.5)":"rgba(0,0,0,0.55)",s.lineWidth=6;for(const l of[-1,1])s.save(),s.translate(128+l*r,128),s.rotate(-Math.PI/2),s.strokeText(String(t),0,0),s.fillText(String(t),0,0),s.restore();const c=new mn(n);return c.colorSpace=Ge,c.anisotropy=4,c}function cy({scene:i,at:t,camera:e,renderer:n,composer:s,me:r,tone:o,toast:a,onLeave:c}){const l=t.face??Math.PI/2,h=Math.cos(l),u=Math.sin(l),f=(z,Q,ht,Ut=new U)=>Ut.set(t.x+z*h+ht*u,Q,t.z-z*u+ht*h),d=(z,Q)=>{const ht=z-t.x,Ut=Q-t.z;return{x:ht*h-Ut*u,z:ht*u+Ut*h}},g=(z,Q)=>({x:t.x+z*h+Q*u,z:t.z-z*u+Q*h}),_=new ze;_.position.set(t.x,0,t.z),_.rotation.y=l,i.add(_);const m=(z,Q={})=>new yt({color:z,roughness:.85,...Q}),p=(z,Q,ht,Ut,Kt,at,_e)=>{const ye=new ut(new ie(z,Q,ht),Ut);return ye.position.set(Kt,at,_e),_.add(ye),ye},M=z=>new le({color:z,toneMapped:!1}),x=m(16777215,{map:rr(5978660,{planks:4,rx:1,ry:1}),roughness:.45}),v=m(16777215,{map:rr(10118456,{planks:6,rx:3,ry:1}),roughness:.6}),b=m(16777215,{map:rr(13145696,{planks:6,rx:4,ry:1,seam:.4}),roughness:.55,emissive:3810322,emissiveIntensity:.35}),E=m(14263361,{roughness:.28,metalness:.85}),C=m(16182486,{roughness:.4}),R=m(2054720,{roughness:.95}),w=rr(12158032,{planks:8,rx:3,ry:2.5,seam:.5});w.rotation=Math.PI/2,p(14.4,.12,12.4,m(16777215,{map:w,roughness:.5}),0,.06,0),p(14.4,5.2,.3,v,0,2.6,-6.05),p(14,5,.04,b,0,2.55,-5.88);for(const z of[-1,1]){p(.3,5.2,5.4,v,z*7.05,2.6,-3.5),p(.04,5,5.2,b,z*6.88,2.55,-3.5);for(const Q of[1.6,6])p(.42,5,.42,x,z*7.05,2.6,Q),p(.6,.3,.6,m(13616045,{roughness:1}),z*7.05,.15,Q)}p(15.4,.3,13.4,x,0,5.3,0),p(15,.04,13,b,0,5.14,0);const y=new tn(Math.SQRT1_2,2.6,4,1);y.rotateY(Math.PI/4),y.scale(16.6,1,14.6);const N=new ut(y,m(16777215,{map:oy(),roughness:.85}));N.position.y=6.75,_.add(N),p(15.44,.06,.06,E,0,5.47,6.72),p(15.2,.04,.04,M(ma),0,5.13,6.6);for(const z of[-1,1])p(.06,.06,13.44,E,z*7.72,5.47,0),p(.04,.04,13,M(ma),z*7.6,5.13,0);p(13.9,.04,.04,M(Ql),0,.16,-5.84),p(13.9,.08,.06,E,0,4.55,-5.83);const D=new ut(new He(6.6,2.9),new le({map:ay()}));D.position.set(0,2.2,-5.85),_.add(D);for(const[z,Q,ht,Ut]of[[6.8,.07,0,3.68],[6.8,.07,0,.72],[.07,3.03,-3.37,2.2],[.07,3.03,3.37,2.2]])p(z,Q,.05,E,ht,Ut,-5.82);const F=new Tm(16773336,18,14,.62,.55,1.4);F.position.set(0,4.9,ke+1.4),F.target.position.set(0,pi,ke),_.add(F,F.target);const O=new Co(16767400,7,12,1.5);O.position.set(0,3.2,1.5),_.add(O);for(const z of[-5,0,5]){p(.02,1.1,.02,E,z,4.6,ke+.6);const Q=new ut(new ve(.16,.36,.34,20,1,!0),m(14263361,{roughness:.3,metalness:.85,side:Ye}));Q.position.set(z,3.95,ke+.6),_.add(Q);const ht=new ut(new we(.1,14,10),M(16773320));ht.position.set(z,3.84,ke+.6),_.add(ht)}const X=m(12871487,{roughness:.9}),q=z=>m(z,{roughness:.8,flatShading:!0});for(const[z,Q,ht]of[[-6.2,-5.2,!1],[6.2,-5.2,!1],[-6.4,5.4,!0],[6.4,5.4,!0]]){const Ut=new ut(new ve(.42,.3,.7,18),X);if(Ut.position.set(z,.47,Q),_.add(Ut),p(.86,.05,.86,m(3811866),z,.84,Q).scale.set(.95,1,.95),ht){p(.07,1.4,.07,x,z,1.5,Q);for(let Kt=0;Kt<6;Kt++){const at=new ut(new os(.42,0),q([5933626,7313992,5208628][Kt%3]));at.position.set(z+Math.cos(Kt*1.1)*.35,2.2+Math.sin(Kt*2.3)*.25,Q+Math.sin(Kt*1.1)*.35),_.add(at)}}else for(let Kt=0;Kt<9;Kt++){const at=new ut(new tn(.12,1.1,5),q([4164156,5940808,3108920][Kt%3])),_e=Kt/9*Math.PI*2;at.position.set(z+Math.cos(_e)*.22,1.25,Q+Math.sin(_e)*.22),at.rotation.set(Math.sin(_e)*.7,0,-Math.cos(_e)*.7),_.add(at)}}p(6.6,1.5,.14,x,0,4.42,6.72);for(const z of[5.15,3.69])p(6.66,.05,.16,E,0,z,6.72);const nt=new ut(new He(6.3,1.4),new le({map:Jr(["MIND GAMES","TOWER OF HANOI · PAINTING SLIDE · MEMORY MATCH"]),transparent:!0,toneMapped:!1}));nt.position.set(0,4.42,6.8),_.add(nt);const G=new ut(new ve(.08,.1,10,8),x);G.position.set(8.6,5,6.4),_.add(G);const j=new ut(new we(.16,12,8),E);j.position.set(8.6,10.05,6.4),_.add(j);const dt=new He(2.4,1.3,8,1);dt.translate(1.2,0,0);const Tt=new ut(dt,new yt({map:ry(["🧩"],{w:256,h:140,bg:"#1f5a40",fg:"#ffffff",size:96,border:"#d9a441"}),side:Ye,roughness:.9}));Tt.position.set(8.6,9.2,6.4),_.add(Tt);const ft=dt.attributes.position.array.slice();p(5.2,.1,1.8,x,0,.97,ke),p(5.24,.035,.035,E,0,.93,ke+.91);for(const z of[-1,1])for(const Q of[-1,1])p(.1,.92,.1,x,z*2.4,.46,ke+Q*.75);p(4.6,.1,1.3,R,0,pi-.05,ke),Ni.map(z=>{const Q=new ut(new ve(.045,.055,Ta,16),E);Q.position.set(z,pi+Ta/2,ke),_.add(Q);const ht=new ut(new we(.065,14,10),C);return ht.position.set(z,pi+Ta,ke),_.add(ht),Q});const Nt=Ni.map(z=>{const Q=new ut(new Ja(.62,.7,48).rotateX(-Math.PI/2),new le({color:3073437,transparent:!0,opacity:0,toneMapped:!1}));return Q.position.set(z,pi+.006,ke),_.add(Q),Q}),pt=new ut(new He(1.7,.3),new le({map:Jr(["TOWER OF HANOI"],{w:768,h:136,size:78}),transparent:!0,toneMapped:!1}));pt.position.set(0,.8,ke+.92),_.add(pt);const Pt=[];for(const z of ic){const Q=new ut(new ve(.95,.95,.08,40),x);Q.position.set(z.x,.95,z.z),_.add(Q);const ht=new ut(new Ao(.95,.022,8,48).rotateX(Math.PI/2),E);ht.position.set(z.x,.95,z.z),_.add(ht),p(.12,.9,.12,x,z.x,.45,z.z);const Ut=new ie(.56,.56,.56),Kt=new ut(Ut,m(16777215,{map:rr(12158032,{planks:3}),roughness:.5}));Kt.add(new Au(new Pu(Ut),new Yc({color:16762986}))),Kt.position.set(z.x,1.55,z.z),_.add(Kt),Pt.push(Kt);const at=new ut(new He(1.8,.45),new le({map:Jr(["COMING SOON",z.name.toUpperCase()],{w:768,h:192,size:70}),transparent:!0,toneMapped:!1}));at.position.set(z.x,2.25,z.z+.2),_.add(at)}const B=j1({root:_,at:Ji,toWorld:f,camera:e,renderer:n,tone:o,won:Qt,mats:{glow:M,walnut:x,oak:b,brass:E,GOLD:ma,AMBER:Ql,neonTexture:Jr,woodTexture:rr}}),H=ny({root:_,at:Qi,toWorld:f,camera:e,renderer:n,tone:o,won:Qt,mats:{glow:M,walnut:x,oak:b,brass:E,felt:R,GOLD:ma,AMBER:Ql,neonTexture:Jr}}),I={n:4,pegs:[[],[],[]],discs:[],held:null,from:0,hover:-1,moves:0,started:!1,time:0,done:!1},et=(z,Q)=>.24+(Q>1?z/(Q-1)*.42:.42),st=z=>pi+tc/2+z*tc;function wt(){for(const z of I.discs)_.remove(z.mesh),z.mesh.geometry.dispose(),z.mesh.material.forEach(Q=>{Q.map?.dispose(),Q.dispose()});I.discs=[]}function te(z=I.n){wt(),Object.assign(I,{n:z,pegs:[[],[],[]],held:null,hover:-1,moves:0,started:!1,time:0,done:!1});for(let Q=z-1;Q>=0;Q--){const ht=et(Q,z),Ut=iy[Math.round(Q/Math.max(1,z-1)*6)],Kt=new ve(ht,ht,tc,48),at=Ut==="#f4ead6",_e=new yt({color:at?"#e6dac2":Ut,roughness:.62,metalness:0,emissive:Ut,emissiveIntensity:at?0:.12}),ye=new yt({map:ly(Ut,Q+1,ht),roughness:.62,emissive:16777215,emissiveIntensity:0}),Hn=new yt({color:1316650}),gn=new ut(Kt,[_e,ye,Hn]);gn.add(new Au(new Pu(Kt,20),new Yc({color:1314842}))),gn.position.set(Ni[0],st(I.pegs[0].length),ke),_.add(gn),I.discs[Q]={i:Q,mesh:gn,path:[],shake:0,glow:0,base:at?0:.15},I.pegs[0].push(Q)}}const L=z=>I.pegs[z].length?I.pegs[z][I.pegs[z].length-1]:null,Jt=z=>I.held!==null&&(L(z)===null||L(z)>I.held),ot=(z,...Q)=>{z.path=Q.map(([ht,Ut])=>new U(ht,Ut,ke))};function rt(z){const Q=L(z);if(Q===null){o(196,.15,.06,"triangle");return}I.pegs[z].pop(),I.held=Q,I.from=z,I.hover=z,I.started||(I.started=!0,I.time=0),ot(I.discs[Q],[Ni[z],ec]),o(660+(I.n-Q)*40,.18,.06)}function lt(z){const Q=I.discs[I.held];if(z!==I.from&&!Jt(z)){Q.shake=.4,a("A bigger disc can't go on a smaller one",!0),o(120,.3,.12,"triangle");return}const ht=I.pegs[z].length;I.pegs[z].push(I.held),ot(Q,[Ni[z],ec],[Ni[z],st(ht)]),z!==I.from&&I.moves++,I.held=null,I.hover=-1,o(520+(I.n-Q.i)*30,.22,.07),(I.pegs[1].length===I.n||I.pegs[2].length===I.n)&&(I.done=!0,Qt())}function Vt(z){I.done||z<0||(I.held===null?rt(z):lt(z))}function gt(z){I.held===null||z<0||z===I.hover||(I.hover=z,ot(I.discs[I.held],[Ni[z],ec]))}const K=new U;function Ot(z){const Q=n.domElement.getBoundingClientRect();let ht=-1,Ut=1/0;return Ni.forEach((Kt,at)=>{f(Kt,pi+.6,ke,K).project(e);const _e=Q.left+(K.x+1)/2*Q.width,ye=Math.abs(_e-z);ye<Ut&&(Ut=ye,ht=at)}),ht}let re=-1;const P=()=>I.moves<=2**I.n-1?3:I.moves<=(2**I.n-1)*1.5?2:1,S={id:"hanoi",name:"Tower of Hanoi",prompt:"Play Tower of Hanoi",hint:"Move the whole tower to <b>another peg</b>. Tap a peg to lift its top disc, then tap where it goes. A disc never sits on a smaller one. The clock starts on your first move.",S:I,bestKey:sy,bestId:()=>I.n,bestSub:()=>`${I.n} discs`,options:()=>[{label:"DISCS",value:I.n,choices:[3,4,5,6,7].map(z=>({v:z,label:String(z)})),set:z=>te(z)}],hud:()=>({moves:I.moves,max:2**I.n-1,label:"MOVES"}),setup:()=>te(),pointer(z,Q){if(!I.done){if(z==="down"){const ht=Ot(Q.clientX);I.held===null?(Vt(ht),re=I.held===null?-1:ht):Vt(ht)}else if(z==="move")gt(Ot(Q.clientX));else if(z==="up"&&re>=0){const ht=Ot(Q.clientX);I.held!==null&&ht!==re&&Vt(ht),re=-1}}},key(z){if(I.done)return!1;const Q={Digit1:0,Digit2:1,Digit3:2,Numpad1:0,Numpad2:1,Numpad3:2}[z.code];if(Q!==void 0)Vt(Q);else if(z.code==="ArrowLeft"||z.code==="KeyA")I.held!==null&&gt(Rf(I.hover-1,0,2));else if(z.code==="ArrowRight"||z.code==="KeyD")I.held!==null&&gt(Rf(I.hover+1,0,2));else if(z.code==="Space"||z.code==="Enter"||z.code==="ArrowDown"||z.code==="KeyS")I.held!==null&&Vt(I.hover);else return!1;return!0},leave(){if(I.held===null)return;const z=I.discs[I.held];I.pegs[I.from].push(I.held),ot(z,[Ni[I.from],st(I.pegs[I.from].length-1)]),I.held=null},update(z,Q){for(const ht of I.discs){const Ut=ht.mesh;if(ht.path.length){const ye=ht.path[0],Hn=9*z;K.subVectors(ye,Ut.position);const gn=K.length();gn<=Hn?(Ut.position.copy(ye),ht.path.shift()):Ut.position.addScaledVector(K,Hn/gn)}let Kt=0;ht.shake>0&&(ht.shake-=z,Kt=Math.sin(ht.shake*60)*.06*(ht.shake/.4)),Ut.position.x+=Kt-(ht.lastShake||0),ht.lastShake=Kt;const at=ht.i===I.held,_e=I.done?.35+.25*Math.sin(Q*6+ht.i):0;ht.glow+=((at?.45:_e)-ht.glow)*Math.min(1,z*10),Ut.material[0].emissiveIntensity=ht.base+ht.glow*(ht.base?1:.4),Ut.material[1].emissiveIntensity=ht.glow*.25}Nt.forEach((ht,Ut)=>{const Kt=I.held===null||Ut===I.from?0:.9;ht.material.color.set(Jt(Ut)?3073437:16726876),ht.material.opacity+=(Kt-ht.material.opacity)*Math.min(1,z*10)})},cameraPose(z,Q){const ht=Math.tan(gh.degToRad(e.fov/2)),Ut=e.aspect,Kt=Math.max(5.2,2.45/(ht*Ut),1.6/ht);f(0,pi+.75+Math.min(Kt*.3,Kt>7?1.25:2.9),ke+Kt,z),f(0,pi+.75,ke,Q)},card:()=>{const z=2**I.n-1,Q=P(),ht=Math.round(z/I.moves*100);return{title:"Tower of Hanoi",chip:`${I.n} DISCS`,tiles:[["MOVES",String(I.moves),`fewest ${z}`,"mono"],["EFFICIENCY",`${ht}%`,ht===100?"flawless":"of a perfect run","mono"],["RATING","★".repeat(Q)+"☆".repeat(3-Q),["","SOLVED","GREAT","PERFECT"][Q],"stars"]],focusY:.56,file:`hanoi-${I.n}-discs`,share:Ut=>`I solved the Tower of Hanoi (${I.n} discs) in ${Ut} with ${I.moves} moves in PaletteRider.`}}};te(4);const Y={hanoi:S,slide:B,memory:H};let $=S,it=!1,tt=!1,Lt=0,mt=!1;function Xt(z=$){try{return JSON.parse(localStorage.getItem(z.bestKey))||{}}catch{return{}}}function qt(){const z=Xt()[$.bestId()];he("mindBest").textContent=z?Zr(z.t):"—",he("mindBestMoves").textContent=z?`${z.m} moves`:$.bestSub()}function _t(){const z=he("mindOpts");z.textContent="";for(const Q of $.options()){const ht=document.createElement("span");ht.className="mb-label",ht.textContent=Q.label;const Ut=document.createElement("div");Ut.className="mg-seg";for(const Kt of Q.choices){const at=document.createElement("button");if(at.classList.toggle("on",Kt.v===Q.value),Kt.img){at.className+=" with-img";const _e=document.createElement("img");_e.src=Kt.img,_e.alt="",at.append(_e)}at.append(Kt.label),at.onclick=_e=>{Q.set(Kt.v),Et(),_e.currentTarget.blur()},Ut.append(at)}z.append(ht,Ut)}}function Et(){mt=!1,tt=!1,Lt=0,he("mindDone").classList.remove("on"),he("mindLive").dataset.s="",_t(),qt();const z=$.refImage?.();he("mindRefBox").style.display=z?"":"none",he("mindGoalBtn").style.display=z?"":"none",z&&(he("mindRef").src=z,he("mindPeekImg").src=z,he("mindPeekName").textContent=$.refName?.()||""),Ht(!1)}function Qt(){Lt=1.1;const z=Xt(),Q=z[$.bestId()];if(mt=!Q||$.S.time<Q.t,mt){z[$.bestId()]={t:Math.round($.S.time*10)/10,m:$.S.moves};try{localStorage.setItem($.bestKey,JSON.stringify(z))}catch{}}[523.25,659.25,783.99,1046.5].forEach((ht,Ut)=>setTimeout(()=>o(ht,1.2,.08),Ut*120)),qt()}function jt(z){const Ut=$.S,Kt=document.createElement("canvas");Kt.width=1080,Kt.height=1350;const at=Kt.getContext("2d"),_e=(zt,Te,pe,Ve,xn)=>{at.beginPath(),at.roundRect(zt,Te,pe,Ve,xn)},ye=(zt,Te,pe,Ve,xn,Je="center",Ri=0)=>{at.font=Ve,at.fillStyle=xn,at.textAlign=Je,at.textBaseline="alphabetic",at.letterSpacing=`${Ri}px`,at.fillText(zt,Te,pe),at.letterSpacing="0px"},Hn=at.createLinearGradient(0,0,1080,1350);Hn.addColorStop(0,"#13291f"),Hn.addColorStop(1,"#2b1a0f"),at.fillStyle=Hn,at.fillRect(0,0,1080,1350);for(const[zt,Te,pe,Ve]of[[160,180,520,"rgba(90, 170, 110, 0.22)"],[960,1120,620,"rgba(244, 170, 80, 0.24)"]]){const xn=at.createRadialGradient(zt,Te,0,zt,Te,pe);xn.addColorStop(0,Ve),xn.addColorStop(1,"rgba(0,0,0,0)"),at.fillStyle=xn,at.fillRect(0,0,1080,1350)}at.strokeStyle="rgba(255, 220, 170, 0.05)",at.lineWidth=1;for(let zt=0;zt<=1080;zt+=54)at.beginPath(),at.moveTo(zt,0),at.lineTo(zt,1350),at.stroke();for(let zt=0;zt<=1350;zt+=54)at.beginPath(),at.moveTo(0,zt),at.lineTo(1080,zt),at.stroke();const gn=at.createLinearGradient(60,0,1020,0);gn.addColorStop(0,"#f6d27e"),gn.addColorStop(1,"#e38a4a"),ye("PALETTERIDER  ·  MIND GAMES",64,92,`600 26px ${zn}`,"#f4c562","left",3),ye(z.title,64,160,`700 64px ${$n}`,"#ffffff","left"),_e(820,104,196,58,29),at.fillStyle="rgba(111, 220, 154, 0.14)",at.fill(),at.strokeStyle="#6fdc9a",at.lineWidth=2,at.stroke(),ye("✓ SOLVED",918,143,`700 24px ${zn}`,"#6fdc9a","center",2),s.render();const ls=n.domElement,Or=ls.width,A=ls.height,V=64,Z=200,J=952,W=500,vt=Or>A*1.2?1.45:1,It=Math.max(J/Or,W/A)*vt,Yt=J/It,Gt=W/It;at.save(),at.shadowColor="rgba(244, 197, 98, 0.4)",at.shadowBlur=40,_e(V,Z,J,W,30),at.fillStyle="#000",at.fill(),at.restore(),at.save(),_e(V,Z,J,W,30),at.clip(),at.drawImage(ls,(Or-Yt)/2,Math.min(A-Gt,Math.max(0,A*z.focusY-Gt/2)),Yt,Gt,V,Z,J,W);const ee=at.createLinearGradient(0,Z+W*.6,0,Z+W);ee.addColorStop(0,"rgba(30,20,10,0)"),ee.addColorStop(1,"rgba(30,20,10,0.55)"),at.fillStyle=ee,at.fillRect(V,Z,J,W),at.restore(),_e(V,Z,J,W,30),at.strokeStyle=gn,at.lineWidth=4,at.stroke(),at.font=`700 22px ${zn}`,at.letterSpacing="2px";const se=at.measureText(z.chip).width+48;at.letterSpacing="0px",_e(V+24,Z+W-70,se,46,23),at.fillStyle="rgba(30, 20, 10, 0.8)",at.fill(),ye(z.chip,V+24+se/2,Z+W-38,`700 22px ${zn}`,"#ffffff","center",2),ye("TIME",1080/2,790,`600 24px ${zn}`,"rgba(250, 232, 205, 0.62)","center",8),at.save(),at.shadowColor="rgba(244, 197, 98, 0.6)",at.shadowBlur=36,ye(Zr(Ut.time),1080/2,930,`700 156px ${zn}`,"#fff6e6","center"),at.restore(),mt&&(_e(1080/2-200,960,400,54,27),at.fillStyle=gn,at.fill(),ye("★  NEW PERSONAL BEST",1080/2,996,`700 24px ${zn}`,"#2a1708","center",2));const Zt=1046,de=912/3,Ce=150;z.tiles.forEach(([zt,Te,pe,Ve],xn)=>{const Je=64+xn*(de+20);_e(Je,Zt,de,Ce,22),at.fillStyle="rgba(255, 236, 205, 0.07)",at.fill(),at.strokeStyle="rgba(255, 226, 180, 0.2)",at.lineWidth=2,at.stroke(),ye(zt,Je+26,Zt+42,`600 20px ${zn}`,"rgba(250, 232, 205, 0.62)","left",3);const Ri=Ve==="mono"?`700 54px ${zn}`:Ve==="stars"?`700 46px ${$n}`:`700 44px ${$n}`;at.save(),at.beginPath(),at.rect(Je,Zt,de-10,Ce),at.clip(),ye(Te,Je+26,Zt+100,Ri,Ve==="stars"?"#ffd21f":"#ffffff","left"),ye(pe,Je+26,Zt+132,`500 20px ${$n}`,"rgba(250, 232, 205, 0.55)","left"),at.restore()});const Re=1262,Le=at.createLinearGradient(64,Re-30,124,Re+30);Le.addColorStop(0,`hsl(${r.bike}, 80%, 60%)`),Le.addColorStop(1,`hsl(${r.dress}, 75%, 50%)`),at.fillStyle=Le,at.beginPath(),at.arc(94,Re,30,0,Math.PI*2),at.fill();const Ie=r.name.replace(/^Guest\s+/,"").split(/\s+/).map(zt=>zt[0]).join("").slice(0,2).toUpperCase();return ye(Ie,94,Re+9,`700 24px ${$n}`,"#ffffff"),ye(r.name,140,Re-4,`700 28px ${$n}`,"#ffffff","left"),ye(new Date().toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"}),140,Re+30,`500 22px ${$n}`,"rgba(250, 232, 205, 0.55)","left"),ye("Can you beat it?",1016,Re-4,`700 28px ${$n}`,"#ffffff","right"),ye(nc,1016,Re+30,`600 22px ${zn}`,"#f4c562","right"),at.fillStyle=gn,at.fillRect(0,1340,1080,10),Kt}let At=null,oe=null;async function k(){tt=!0;try{await Promise.race([Promise.all([document.fonts.load(`700 64px ${$n}`),document.fonts.load(`700 64px ${zn}`),document.fonts.load(`500 20px ${$n}`),document.fonts.load(`600 20px ${zn}`)]),new Promise(z=>setTimeout(z,1500))])}catch{}it&&(oe=$.card(),At=jt(oe),he("mindCard").src=At.toDataURL("image/png"),he("mindDone").classList.add("on"),he("mindShare").style.display=navigator.share?"":"none",he("mindSave").classList.toggle("main",!navigator.share))}const Mt=()=>new Promise(z=>At.toBlob(z,"image/png")),bt=()=>`paletterider-${oe.file}-${Zr($.S.time).replace(/[:.]/g,"-")}.png`;async function Wt(){const z=await Mt(),Q=document.createElement("a");Q.href=URL.createObjectURL(z),Q.download=bt(),document.body.append(Q),Q.click(),Q.remove(),setTimeout(()=>URL.revokeObjectURL(Q.href),4e3)}async function xt(){const z=await Mt(),Q=new File([z],bt(),{type:"image/png"}),ht=`${oe.share(Zr($.S.time))} Can you beat it? https://${nc}/`;try{navigator.canShare?.({files:[Q]})?await navigator.share({files:[Q],text:ht}):navigator.share?await navigator.share({text:ht,url:`../_offline-stub.js`}):await Wt()}catch(Ut){Ut?.name!=="AbortError"&&Wt()}}const ct=n.domElement;for(const[z,Q]of[["pointerdown","down"],["pointermove","move"],["pointerup","up"]])ct.addEventListener(z,ht=>{it&&!$.S.done&&$.pointer(Q,ht)});addEventListener("keydown",z=>{if(it){if(z.code==="Escape"){z.stopImmediatePropagation(),he("mindPeek").classList.contains("on")?Ht(!1):Ae();return}if(z.code==="KeyG"){Ht();return}if($.S.done){z.code==="Enter"&&tt&&($.setup(),Et());return}if(z.code==="KeyR"){$.setup(),Et();return}$.key(z)}},!0);const Ht=(z=!he("mindPeek").classList.contains("on"))=>he("mindPeek").classList.toggle("on",z&&!!$.refImage);he("mindGoalBtn").onclick=z=>{Ht(),z.currentTarget.blur()},he("mindRefBox").onclick=()=>Ht(!0),he("mindPeek").onclick=()=>Ht(!1),he("mindRestart").onclick=z=>{$.setup(),Et(),z.currentTarget.blur()},he("mindLeave").onclick=()=>Ae(),he("mindDoneLeave").onclick=()=>Ae(),he("mindAgain").onclick=()=>{$.setup(),Et()},he("mindSave").onclick=Wt,he("mindShare").onclick=xt;function ae(z="hanoi"){it||(it=!0,$=Y[z]||S,he("mindGameName").textContent=$.name,he("mindHint").innerHTML=$.hint,$.setup(),Et(),he("mind").classList.add("on"))}function Ae(){it&&(it=!1,$.leave?.(),Ht(!1),he("mind").classList.remove("on","playing"),he("mindDone").classList.remove("on"),c?.())}function Ee(z,Q){const ht=dt.attributes.position;for(let _e=0;_e<ht.count;_e++){const ye=ft[_e*3];ht.setZ(_e,Math.sin(Q*3-ye*2.2)*.12*(ye/2.4))}if(ht.needsUpdate=!0,Pt.forEach((_e,ye)=>{_e.rotation.set(Q*.4+ye,Q*.6+ye,0),_e.position.y=1.55+Math.sin(Q*1.6+ye*2)*.06}),S.update(z,Q),B.update(z,Q),H.update(z,Q),!it)return;const Ut=$.S;Ut.started&&!Ut.done&&(Ut.time+=z),Ut.done&&!tt&&Lt>0&&(Lt-=z)<=0&&k();const Kt=$.hud();he("mindTime").textContent=Zr(Ut.time),he("mindMoves").textContent=Kt.moves,he("mindMinN").textContent=Kt.max,he("mindMovesLabel").textContent=Kt.label,he("mindBarFill").style.width=`${Math.min(1,Kt.moves/Kt.max)*100}%`,he("mindBarFill").classList.toggle("over",Kt.moves>Kt.max);const at=Ut.done?"solved":Ut.started?"live":"ready";he("mindLive").dataset.s!==at&&(he("mindLive").dataset.s=at,he("mindLive").textContent=at==="solved"?"SOLVED":at==="live"?"LIVE":"READY",he("mind").classList.toggle("playing",at!=="ready"))}const jn=(z,Q)=>$.cameraPose(z,Q),on=.4;function fi(z,Q,ht,Ut,Kt){if(z.x<Q-on||z.x>ht+on||z.z<Ut-on||z.z>Kt+on)return!1;const at=[[z.x-(Q-on),-1,0],[ht+on-z.x,1,0],[z.z-(Ut-on),0,-1],[Kt+on-z.z,0,1]];at.sort((gn,ls)=>gn[0]-ls[0]);const[_e,ye,Hn]=at[0];return z.x+=ye*_e,z.z+=Hn*_e,!0}function Ci(z){if(Math.abs(z.x-t.x)>12||Math.abs(z.z-t.z)>12||z.y>5)return!1;const Q=d(z.x,z.z);let ht=fi(Q,-7.3,7.3,-6.3,-5.8);for(const Ut of[-1,1]){ht=fi(Q,Ut>0?6.8:-7.3,Ut>0?7.3:-6.8,-6.3,-.8)||ht;for(const Kt of[1.6,6])ht=fi(Q,Ut*7.05-.21,Ut*7.05+.21,Kt-.21,Kt+.21)||ht}ht=fi(Q,-2.6,2.6,ke-.9,ke+.9)||ht,ht=fi(Q,Ji.x-1.2,Ji.x+1.2,Ji.z-.55,Ji.z+.55)||ht,ht=fi(Q,Qi.x-1.3,Qi.x+1.3,Qi.z-.55,Qi.z+.55)||ht;for(const Ut of ic)ht=fi(Q,Ut.x-.95,Ut.x+.95,Ut.z-.95,Ut.z+.95)||ht;return ht&&Object.assign(z,g(Q.x,Q.z)),ht}function zr(z){if(Math.abs(z.x-t.x)>12||Math.abs(z.z-t.z)>12)return null;const Q=d(z.x,z.z);if(Math.abs(Q.x)<2.8&&Q.z>ke&&Q.z<ke+4.2)return{kind:"hanoi",label:S.prompt};if(Math.abs(Q.x-Ji.x)<1.7&&Q.z>Ji.z&&Q.z<Ji.z+4)return{kind:"slide",label:B.prompt};if(Math.abs(Q.x-Qi.x)<1.7&&Q.z>Qi.z&&Q.z<Qi.z+4)return{kind:"memory",label:H.prompt};for(const ht of ic)if(Math.hypot(Q.x-ht.x,Q.z-(ht.z+1.2))<1.6)return{kind:"soon",label:`${ht.name}: coming soon`};return Math.abs(Q.x)<7.5&&Q.z>-6&&Q.z<9?{kind:"pavilion"}:null}return{open:ae,leave:Ae,update:Ee,cameraPose:jn,pushOut:Ci,near:zr,doorway:()=>({...g(0,9.5),yaw:l+Math.PI}),active:()=>it,games:Y,game:()=>$}}const Xa=new URLSearchParams(location.search),Pf=3,Ts=[1,2,3].includes(Number(Xa.get("chapter")))?Number(Xa.get("chapter")):1,Ze=Xa.get("world")==="valley"?Lh:Ts===3?B1:Ts===2?y1:ZM,$a="paletterider-best"+(Ze.INFO.id?"-"+Ze.INFO.id:""),Hh="paletterider-help";try{for(const[i,t]of[[$a,$a.replace("paletterider","aurora-trail")],[Hh,"aurora-trail-help"]])localStorage.getItem(i)===null&&localStorage.getItem(t)!==null&&localStorage.setItem(i,localStorage.getItem(t))}catch{}const{buildWorld:hy,heightAt:Mi,MON:rn,HILL_H:Jd,WORLD_R:or,INFO:xe}=Ze,Vi=Ze.WRAP||0,is=(i,t)=>Vi?i+Vi*Math.round((t-i)/Vi):i,Lf={x:rn.x,z:rn.z},eh=Ze===Lh?"valley":"ch"+Ts,li=Math.PI*2,Vh=Ze.INFO.seconds??180,uy=Ze.INFO.starCount??42,Dn=(i,t,e)=>Math.min(e,Math.max(t,i)),Xe=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n)),Rt=i=>document.getElementById(i);function al(){const i=Math.round(window.visualViewport?.height||innerHeight);document.documentElement.style.setProperty("--app-h",`${i}px`)}al();addEventListener("resize",al);addEventListener("orientationchange",()=>setTimeout(al,300));window.visualViewport?.addEventListener("resize",al);const ui=new fM({antialias:!0});ui.setPixelRatio(Math.min(devicePixelRatio,2));ui.setSize(innerWidth,innerHeight);ui.toneMapping=ah;document.body.prepend(ui.domElement);const hi=new F0,An=new Ln(62,innerWidth/innerHeight,.1,2e3),Wh=hy(hi,ui,An);xe.exposure&&(ui.toneMappingExposure=xe.exposure);const Fs=new _M(ui);Fs.addPass(new vM(hi,An));const fy=new Rr(new St(innerWidth,innerHeight),xe.bloom??.65,.7,.8);Fs.addPass(fy);Fs.addPass(new yM);addEventListener("resize",()=>{An.aspect=innerWidth/innerHeight,An.updateProjectionMatrix(),ui.setSize(innerWidth,innerHeight),Fs.setSize(innerWidth,innerHeight)});function Qd({bike:i=42,dress:t=215,lamp:e=!0}={}){const n=(I,et,st)=>new kt().setHSL((I%360+360)%360/360,et,st),s=new ze,r=new ze;r.position.y=.6;const o=new ze;o.position.y=-.6,s.add(r),r.add(o);const a=new ze;o.add(a);const c=new yt({color:n(i,.72,.52),metalness:.6,roughness:.35}),l=new yt({color:1316892,roughness:.9});new yt({color:9051179,roughness:.8});const h=new yt({color:14262906,roughness:.8});new yt({color:15777856,roughness:.9});const u=(I,et,st)=>new U(I,et,st),f=u(0,1,0),d=(I,et,st,wt,te=o)=>{const L=et.clone().sub(I),Jt=new ut(new ve(st,st,L.length(),6),wt);return Jt.position.copy(I).addScaledVector(L,.5),Jt.quaternion.setFromUnitVectors(f,L.normalize()),te.add(Jt),Jt},g=[];for(const I of[-.58,.58]){const et=new ze;et.position.set(0,.38,I);const st=new ut(new Ao(.34,.05,8,20),l);st.rotation.y=Math.PI/2,et.add(st);for(let wt=0;wt<4;wt++){const te=new ut(new ve(.01,.01,.66,4),c);te.rotation.x=wt/4*Math.PI,et.add(te)}o.add(et),g.push(et)}const _=u(0,.95,-.25),m=u(0,.4,0),p=u(0,.98,.42),M=u(0,1.12,.4),x=u(0,.38,-.58),v=u(0,.38,.58);d(m,_,.03,c),d(m,p,.03,c),d(_,p,.03,c),d(m,x,.025,c),d(_,x,.025,c),d(p,v,.03,c),d(p,M,.025,c),d(u(-.28,1.12,.4),u(.28,1.12,.4),.025,l);const b=new yt({color:n(t,.64,.36),roughness:.7}),E=new yt({color:2303534,roughness:.8}),C=new yt({color:15263976,roughness:.6}),R=new yt({color:n(i,.45,.82),roughness:.35}),w=new yt({color:n(t+150,.6,.32),roughness:.8}),y=u(0,0,0),N=(I,et,st,wt,te)=>{const L=new ut(I,et);return L.position.set(st,wt,te),a.add(L),L},D=(I,et)=>N(new ve(I*.82,I,1,10),et,0,0,0),F=(I,et,st)=>{y.subVectors(st,et);const wt=y.length();I.position.copy(et).addScaledVector(y,.5),I.quaternion.setFromUnitVectors(f,y.normalize()),I.scale.set(1,wt,1)},O=N(new sn(.15,.34,4,12),b,0,1.27,-.04);O.scale.set(1.3,1,.9),O.rotation.x=.61;const X=N(new ie(.27,.36,.13),w,0,1.33,-.2);X.rotation.x=.61,d(u(0,1.5,.12),u(0,1.6,.17),.05,h,a),N(new we(.11,16,12),h,0,1.68,.2).scale.set(.92,1.1,1),N(new we(.135,16,10,0,li,0,Math.PI*.55),R,0,1.7,.19).scale.set(1,.95,1.25);for(const I of[-1,1]){const et=u(I*.21,1.46,.1),st=u(I*.27,1.27,.27),wt=u(I*.25,1.15,.4);d(et,st,.052,b,a),d(st,wt,.043,b,a),N(new we(.05,10,8),h,wt.x,wt.y,wt.z)}const G=.46,j=.46,dt=.17,Tt=[-1,1].map(I=>({sd:I,thigh:D(.078,E),shin:D(.058,E),crank:D(.02,l),shoe:N(new ie(.1,.07,.26),C,0,0,0)}));for(const I of Tt)o.add(I.crank);const ft=u(0,0,0),Nt=u(0,0,0),pt=u(0,0,0),Pt=u(0,0,0);let B=0;const H=I=>{B+=I;for(const et of Tt){const st=B+(et.sd>0?Math.PI:0);pt.set(et.sd*.13,.4+Math.sin(st)*dt,Math.cos(st)*dt),ft.set(et.sd*.1,1.02,-.2);const wt=pt.y-ft.y,te=pt.z-ft.z,L=Math.min(Math.hypot(wt,te),G+j-.01),Jt=Math.atan2(wt,te),ot=Math.acos(Dn((G*G+L*L-j*j)/(2*G*L),-1,1));Nt.set(et.sd*.12,ft.y+G*Math.sin(Jt+ot),ft.z+G*Math.cos(Jt+ot)),F(et.thigh,ft,Nt),F(et.shin,Nt,pt),et.shoe.position.set(pt.x,pt.y-.03,pt.z+.05),Pt.set(et.sd*.06,.4,0),F(et.crank,Pt,pt)}};if(H(0),e){const I=new Co(16767392,14,26,1.5);I.position.set(0,1.3,.9),o.add(I)}return{root:s,pitchG:r,rollG:o,riderG:a,wheels:g,pedal:H}}function tp({bike:i=42,dress:t=215}={}){const e=(p,M,x)=>new kt().setHSL((p%360+360)%360/360,M,x),n=new ze,s=new ze;n.add(s);const r=new yt({color:e(t,.64,.36),roughness:.7}),o=new yt({color:2303534,roughness:.8}),a=new yt({color:14262906,roughness:.8}),c=new yt({color:15263976,roughness:.6}),l=new yt({color:e(i,.45,.82),roughness:.35}),h=new yt({color:e(t+150,.6,.32),roughness:.8}),u=(p,M,x,v,b,E)=>{const C=new ut(M,x);return C.position.set(v,b,E),p.add(C),C};u(s,new sn(.16,.36,4,12),r,0,1.22,0).scale.set(1.25,1,.8),u(s,new ie(.28,.38,.14),h,0,1.26,-.17),u(s,new ve(.05,.05,.1,8),a,0,1.53,0),u(s,new we(.115,16,12),a,0,1.66,.01).scale.set(.92,1.1,1),u(s,new we(.135,16,10,0,li,0,Math.PI*.55),l,0,1.69,0).scale.set(1,.95,1.2);const f=(p,M,x,v,b,E)=>{const C=new ze;return C.position.set(p,M,0),s.add(C),u(C,new sn(v,x,4,8),b,0,-x/2-v*.5,0),E?u(C,new ie(.11,.08,.26),c,0,-x-v-.02,.05):u(C,new we(.05,10,8),a,0,-x-v,0),C},d=[f(-.1,.9,.74,.075,o,!0),f(.1,.9,.74,.075,o,!0)],g=[f(-.25,1.44,.52,.05,r,!1),f(.25,1.44,.52,.05,r,!1)];let _=0;const m=(p,M)=>{const x=Dn(p/3.5,0,1);_+=M*(3+p*2.2);const v=Math.sin(_)*.6*x;d[0].rotation.x=v,d[1].rotation.x=-v,g[0].rotation.x=-v*.8,g[1].rotation.x=v*.8,s.position.y=Math.abs(Math.cos(_))*.05*x};return m(0,0),n.visible=!1,{root:n,step:m}}const yi=Y1(eh),Mn=Qd(yi.me);hi.add(Mn.root);const Cs=tp(yi.me);hi.add(Cs.root);function dy(i,t){const e=document.createElement("canvas");e.width=512,e.height=96;const n=e.getContext("2d");n.font="600 44px ui-sans-serif, system-ui, sans-serif";const s=Math.min(492,n.measureText(i).width+56);n.fillStyle="rgba(12, 8, 6, 0.62)",n.beginPath(),n.roundRect((512-s)/2,14,s,68,34),n.fill(),n.fillStyle=`hsl(${t}, 85%, 78%)`,n.textAlign="center",n.textBaseline="middle",n.fillText(i,256,50,440);const r=new mn(e);r.colorSpace=Ge;const o=new vh(new ja({map:r,transparent:!0,depthWrite:!1,toneMapped:!1}));return o.scale.set(4.2,.79,1),o.position.y=2.75,o}const fr=new Map,py=16;function my(i){const t=performance.now()/1e3;let e=0;for(const n of yi.peers.values()){const s=n.playing&&n.chapter===eh&&t-n.seen<7;let r=fr.get(n.id);if(!s||!r&&e>=py)continue;e++,r||(r={bike:Qd({bike:n.bike,dress:n.dress,lamp:!1}),walker:tp({bike:n.bike,dress:n.dress}),name:"",hue:n.bike,x:n.x,y:n.y,z:n.z,yaw:n.yaw},hi.add(r.bike.root,r.walker.root),fr.set(n.id,r)),r.name!==n.name&&(r.tag&&(r.tag.parent?.remove(r.tag),r.tag.material.map.dispose(),r.tag.material.dispose()),r.tag=dy(n.name,n.bike),r.name=n.name);const o=Math.min(t-n.seen,.6)*n.speed,a=is(n.x+Math.sin(n.yaw)*o,T.x),c=is(n.z+Math.cos(n.yaw)*o,T.z);Math.hypot(a-r.x,c-r.z)>30&&(r.x=a,r.z=c,r.y=n.y,r.yaw=n.yaw),r.x=Xe(r.x,a,7,i),r.z=Xe(r.z,c,7,i),r.y=Xe(r.y,n.y,9,i);let l=n.yaw-r.yaw;l=Math.atan2(Math.sin(l),Math.cos(l)),r.yaw+=l*(1-Math.exp(-8*i)),r.bike.root.visible=!n.foot,r.walker.root.visible=!!n.foot;const h=n.foot?r.walker.root:r.bike.root;r.tag.parent!==h&&h.add(r.tag),n.foot&&r.walker.step(n.speed,i),r.bike.root.position.set(r.x,r.y,r.z),r.bike.root.rotation.y=r.yaw,r.walker.root.position.set(r.x,r.y,r.z),r.walker.root.rotation.y=r.yaw,r.bike.rollG.rotation.z=Xe(r.bike.rollG.rotation.z,Dn(-l*1.2,-.4,.4),6,i);const u=n.speed*i/.38;for(const f of r.bike.wheels)f.rotation.x+=u;n.speed>.5&&r.bike.pedal(-u*.4)}for(const[n,s]of fr){const r=yi.peers.get(n);if(!(r&&r.playing&&r.chapter===eh&&t-r.seen<7)){hi.remove(s.bike.root,s.walker.root);for(const o of[s.bike.root,s.walker.root])o.traverse(a=>{a.isMesh&&a.geometry.dispose()});fr.delete(n)}}}let If="";function gy(){const t=Bt.state==="play"||Bt.state==="paused"||Bt.state==="mind";yi.send({p:t&&!Un,f:T.onFoot,x:T.x,y:T.y,z:T.z,h:T.yaw,s:T.grounded?T.speed:Math.hypot(T.vx,T.vz)});const e=yi.riding(t),n=yi.connected()?`${e} riding now`:"";if(n!==If){If=n,Rt("liveCount").textContent=n,Rt("live").classList.toggle("on",!!n);const s=` · you are ${yi.me.name}`;Rt("menuLive").textContent=n?(e>0?`● ${e} riding right now`:"● No one is riding yet, be the first")+s:""}}function xy(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new mn(i)}const _y=xy(),ep=(i,t)=>{const e=new vh(new ja({map:_y,color:i,blending:ci,depthWrite:!1,transparent:!0}));return e.scale.setScalar(t),e},np=new bh(.42);np.scale(.7,1.25,.7);const zs=[];function Xh(i){for(let e=0;e<40;e++){const n=Ze.starSpot();if(n&&(n.x=is(n.x,T.x),n.z=is(n.z,T.z),!(Math.hypot(n.x-rn.x,n.z-rn.z)<28)&&!(Math.hypot(n.x-T.x,n.z-T.z)<15))){Object.assign(i,n);break}}const t=xe.colors[i.high?1:0];i.core.material.color.set(t),i.glow.material.color.set(t),i.group.position.set(i.x,i.y,i.z)}function vy(){for(let i=0;i<uy;i++){const t=new ze,e=new ut(np,new le),n=ep(16777215,3.2);t.add(e,n),hi.add(t);const s={group:t,core:e,glow:n,x:0,y:0,z:0,high:!1,ph:Math.random()*li};zs.push(s)}}const ar=[];for(let i=0;i<14;i++){const t=ep(xe.colors[0],.45);t.visible=!1,hi.add(t),ar.push(t)}let De=null,ni=null,dr=!1;const lr={};function ip(){if(De)return De;De=new AudioContext,ni=De.createGain(),ni.gain.value=dr?0:1,ni.connect(De.destination);const i=De.createBuffer(1,De.sampleRate*2,De.sampleRate),t=i.getChannelData(0);for(let l=0;l<t.length;l++)t[l]=Math.random()*2-1;const e=De.createBufferSource();e.buffer=i,e.loop=!0;const n=De.createBiquadFilter();n.type="bandpass",n.Q.value=.6;const s=De.createGain();s.gain.value=0,e.connect(n).connect(s).connect(ni),e.start();const r=De.createOscillator();r.type="sawtooth",r.frequency.value=55;const o=De.createBiquadFilter();o.type="lowpass",o.frequency.value=240;const a=De.createGain();a.gain.value=0,r.connect(o).connect(a).connect(ni),r.start();const c=De.createGain();c.gain.value=0;for(const[l,h]of[[420,2.3],[760,3.1],[1150,1.7]]){const u=De.createBiquadFilter();u.type="bandpass",u.frequency.value=l,u.Q.value=2.2;const f=De.createGain();f.gain.value=.5;const d=De.createOscillator(),g=De.createGain();d.frequency.value=h,g.gain.value=.45,d.connect(g).connect(f.gain),d.start(),e.connect(u).connect(f).connect(c)}return c.connect(ni),Object.assign(lr,{windFilter:n,windGain:s,engOsc:r,engGain:a,talkGain:c}),wy(De),De}function Rn(i,t=.7,e=.12,n="sine"){if(!dr)try{const s=ip(),r=s.currentTime,o=s.createOscillator(),a=s.createGain();o.type=n,o.frequency.value=i,a.gain.setValueAtTime(e,r),a.gain.exponentialRampToValueAtTime(1e-4,r+t),o.connect(a).connect(ni),o.start(r),o.stop(r+t)}catch{}}function My(){Rn(415,.4,.045,"square"),Rn(523,.4,.045,"square")}function yy(i){if(!De)return;const t=De.currentTime,e=Bt.state==="play",n=e?T.grounded?Math.abs(T.speed):Math.hypot(T.vx,T.vy,T.vz):0;lr.windGain.gain.setTargetAtTime(Math.min(n/40,1)*.1,t,.15),lr.windFilter.frequency.setTargetAtTime(350+n*35,t,.15),lr.talkGain.gain.setTargetAtTime(e?(i.murmur||0)*.16:0,t,.4);const s=e?i.nearCar:null;lr.engGain.gain.setTargetAtTime(s?(1-s.dist/32)**2*.09:0,t,.12),s&&lr.engOsc.frequency.setTargetAtTime(48+s.speed*5,t,.1)}const Df=[[146.83,220,329.63,369.99],[123.47,185,293.66,440],[98,146.83,246.94,369.99],[110,164.81,246.94,277.18]],Uf=[587.33,659.25,739.99,880,987.77,1174.66],Sy=8,Nf=11,On={bus:null,nextChord:0,nextBell:0,chord:0};function wy(i){const t=i.createGain();t.gain.value=.9;const e=i.createBiquadFilter();e.type="lowpass",e.frequency.value=1400;const n=i.createDelay(1);n.delayTime.value=.46;const s=i.createGain();s.gain.value=.42,t.connect(e).connect(ni),e.connect(n).connect(s).connect(n),n.connect(ni),On.bus=t,On.nextChord=i.currentTime+.2,On.nextBell=i.currentTime+4,setInterval(()=>Ff(i),500),Ff(i)}function sc(i,t,e,n,s,r,o,a,c=0){const l=i.createOscillator(),h=i.createGain();l.type=e,l.frequency.value=t,l.detune.value=c,h.gain.setValueAtTime(0,n),h.gain.linearRampToValueAtTime(a,n+s),h.gain.setValueAtTime(a,n+s+r),h.gain.linearRampToValueAtTime(0,n+s+r+o),l.connect(h).connect(On.bus),l.start(n),l.stop(n+s+r+o+.1)}function Ff(i){const t=i.currentTime+4;for(;On.nextChord<t;)Df[On.chord++%Df.length].forEach((n,s)=>{const r=s===0?.05:.026;sc(i,n,"sine",On.nextChord,3.5,Nf-7.5,4,r),sc(i,n,"triangle",On.nextChord,3.5,Nf-7.5,4,r*.45,7)}),On.nextChord+=Sy;for(;On.nextBell<t;)Math.random()<.6&&sc(i,Uf[Math.floor(Math.random()*Uf.length)],"sine",On.nextBell,.03,0,2.6,.035),On.nextBell+=2+Math.random()*1.5}const zf=[587.33,659.25,739.99,880,987.77,1174.66,1318.51,1479.98],T={x:0,y:0,z:40,yaw:Math.PI,speed:0,vx:0,vy:0,vz:0,gvy:0,grounded:!0,pitch:0,roll:0,flip:0,spin:0,air:0,crash:0};xe.spawn&&Object.assign(T,xe.spawn);const Bt={state:"menu",score:0,carried:0,delivered:0,tricks:0,time:Vh,best:0};try{Bt.best=Number(localStorage.getItem($a))||0}catch{}const Ft={up:!1,down:!1,left:!1,right:!1,jump:!1,jumpPressed:!1,ax:0,ay:0,analog:!1},sp={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"jump"};addEventListener("keydown",i=>{if(Bt.state==="mind")return;i.code==="KeyF"&&Bt.state==="play"&&!i.repeat&&Yh(),i.code==="KeyE"&&Bt.state==="play"&&!i.repeat&&ap();const t=sp[i.code];t&&(i.preventDefault(),t==="jump"&&!Ft.jump&&(Ft.jumpPressed=!0),Ft[t]=!0),i.code==="KeyM"&&up(),i.code==="KeyH"&&hp(),(i.code==="KeyP"||i.code==="Escape")&&Lr(Bt.state==="play"),i.code==="Enter"&&(Bt.state==="paused"?Lr(!1):Bt.state!=="play"&&$h())});addEventListener("keyup",i=>{const t=sp[i.code];t&&(Ft[t]=!1)});addEventListener("blur",()=>{for(const i in Ft)Ft[i]=!1});function by(){const i=()=>document.body.classList.add("touch");matchMedia("(pointer: coarse)").matches&&i(),addEventListener("touchstart",i,{once:!0,passive:!0});const t=Rt("stick"),e=Rt("knob"),n=46;let s=null;const r=l=>{const h=t.getBoundingClientRect();let u=l.clientX-(h.left+h.width/2),f=l.clientY-(h.top+h.height/2);const d=Math.hypot(u,f);d>n&&(u*=n/d,f*=n/d),e.style.transform=`translate(${u}px, ${f}px)`;let g=u/n,_=f/n;const m=Math.hypot(g,_),p=.18;if(m<p)g=_=0;else{const M=(m-p)/(1-p)/m;g*=M,_*=M,Math.abs(_)<Math.abs(g)*.6?_=0:Math.abs(g)<Math.abs(_)*.6&&(g=0)}Ft.ax=g,Ft.ay=_,Ft.analog=!0,Ft.left=g<-.3,Ft.right=g>.3,Ft.up=_<-.3,Ft.down=_>.3},o=l=>{l.pointerId===s&&(s=null,e.style.transform="",Ft.left=Ft.right=Ft.up=Ft.down=!1,Ft.ax=Ft.ay=0,Ft.analog=!1)};t.addEventListener("pointerdown",l=>{l.preventDefault(),s=l.pointerId,r(l);try{t.setPointerCapture?.(l.pointerId)}catch{}}),t.addEventListener("pointermove",l=>{l.pointerId===s&&r(l)}),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o);const a=Rt("jumpBtn"),c=()=>{Ft.jump=!1,a.classList.remove("down")};a.addEventListener("pointerdown",l=>{l.preventDefault(),Ft.jump||(Ft.jumpPressed=!0),Ft.jump=!0,a.classList.add("down")}),a.addEventListener("pointerup",c),a.addEventListener("pointercancel",c),a.addEventListener("pointerleave",c),addEventListener("contextmenu",l=>{document.body.classList.contains("touch")&&l.preventDefault()})}by();let nh=0;function Ai(i,t=!1){const e=Rt("toast");e.textContent=i,e.className=t?"on bad":"on",nh=1.8}function wo(i=!1){Un=null,Object.assign(T,{x:0,z:40,yaw:Math.PI,speed:0,vx:0,vy:0,vz:0,gvy:0,grounded:!0,pitch:0,roll:0,flip:0,spin:0,air:0,crash:0,parked:!1,steer:0,refYaw:null}),xe.spawn&&Object.assign(T,xe.spawn),T.y=Mi(T.x,T.z),Ds?.reset(),Ya(!1),dp&&Ei&&(Object.assign(T,Ei.doorway()),Ya(!0),T.y=Mi(T.x,T.z)),Mr=T.yaw,Object.assign(Bt,{state:"play",score:0,carried:0,delivered:0,tricks:0,time:Vh}),zs.forEach(Xh),Wh.setDelivered(0),Rt("menu").classList.contains("entering")||Rt("menu").classList.remove("on"),Rt("over").classList.remove("on"),Rt("pause").classList.remove("on"),Rt("btnPause").textContent="❚❚",De&&De.resume().catch(()=>{}),nn.set(T.x,T.y+5,T.z+10),Object.assign(Pe,{yaw:0,pitch:0,zoom:1}),i||(Rt("hud").classList.add("on"),fp()),Rn(392,1.2,.08)}function rp(){Bt.state="over";const i=Bt.score>Bt.best;if(i){Bt.best=Bt.score;try{localStorage.setItem($a,String(Bt.best))}catch{}}Rt("final").textContent=Bt.score,Rt("summary").innerHTML=`${Bt.delivered} ${xe.item}s carried home · ${Bt.tricks} tricks landed<br>${i?"A new best!":`Best: ${Bt.best}`}`,Rt("hud").classList.remove("on"),Rt("over").classList.add("on"),[523.25,659.25,783.99].forEach((t,e)=>setTimeout(()=>Rn(t,1.6,.08),e*180))}function Lr(i){if(!(i?Bt.state!=="play":Bt.state!=="paused")){Bt.state=i?"paused":"play",Rt("pause").classList.toggle("on",i),Rt("btnPause").textContent=i?"▶":"❚❚";for(const t in Ft)Ft[t]=!1;if(i){const t=Math.max(0,Math.ceil(Bt.time));Rt("pauseInfo").textContent=`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")} left · score ${Bt.score} · carrying ${Bt.carried} ${xe.icon}`}De&&(i?De.suspend():De.resume()).catch(()=>{})}}Rt("resume").onclick=()=>Lr(!1);Rt("restart").onclick=i=>{i.preventDefault(),wo()};document.addEventListener("visibilitychange",()=>{document.hidden&&Lr(!0)});let Un=null;const vs={room:.3,fly:.85,end:3.1,cross:.62};function $h(){const i=Rt("menu");if(Bt.state==="play"||i.classList.contains("entering"))return;if(!i.classList.contains("gallery")||!i.classList.contains("on"))return wo();try{ip()}catch{}i.classList.add("entering"),wo(!0);const t=Math.sin(T.yaw),e=Math.cos(T.yaw),n=Rt("frame").getBoundingClientRect();Un={t:0,from:new U(T.x-t*26,T.y+22,T.z-e*26),fromLook:new U(T.x+t*10,T.y+2,T.z+e*10),to:new U(T.x-t*8.5,T.y+2.7,T.z-e*8.5),toLook:new U(T.x+t*6,T.y+2.6,T.z+e*6),dx:n.left+n.width/2-innerWidth/2,dy:n.top+n.height/2-innerHeight/2}}const Of=i=>i*i*i*(i*(i*6-15)+10);function Ey(i){const t=Un;t.t+=i;const e=Rt("menu"),n=Rt("frame");t.t>vs.room&&e.classList.add("swapped");const s=Dn((t.t-vs.fly)/(vs.end-vs.fly),0,1),r=Of(s);An.position.lerpVectors(t.from,t.to,r),ti.lerpVectors(t.fromLook,t.toLook,r),An.lookAt(ti),nn.copy(An.position);const a=1/Math.max(.015,1-r/vs.cross),c=1-Of(Dn(r/.32,0,1)),l=Dn((a-1.8)/5,0,1);n.style.transform=`translate(${-t.dx*(1-c)}px, ${-t.dy*(1-c)}px) scale(${a})`;const h=l*75,u=4+l*14;n.style.webkitMaskImage=n.style.maskImage=l>0?`radial-gradient(ellipse at 50% 50%, transparent ${h}%, #000 ${h+u}%)`:"",n.style.opacity=r>=vs.cross?0:String(Dn(1.25-l,0,1)),s>=1&&(Un=null,n.style.transform=n.style.maskImage=n.style.webkitMaskImage=n.style.opacity="",e.classList.remove("on","entering","swapped"),Rt("hud").classList.add("on"),fp())}xe.painting&&(Rt("painting").src="./"+xe.painting.file,Rt("painting").alt=xe.painting.alt,Rt("start").textContent=xe.painting.button,Rt("menu").classList.add("gallery"));Rt("start").onclick=$h;Ze!==Lh&&(Rt("chapters").classList.add("on"),Rt("ch"+Ts).classList.add("active"),Rt("nextCh").classList.add("on"),Rt("nextCh").href=`?chapter=${Ts%Pf+1}`,Rt("nextCh").textContent=Ts===Pf?"‹ Back to chapter 1":`Go to chapter ${Ts+1} ›`);Rt("again").onclick=wo;function Bf(i){T.grounded=!1,T.vy=i,T.vx=Math.sin(T.yaw)*T.speed,T.vz=Math.cos(T.yaw)*T.speed,T.flip=0,T.spin=0,T.air=0,T.lockUp=Ft.up,T.lockDown=Ft.down}function op(i){const t=Math.ceil(Bt.carried/2);Bt.carried-=t,T.speed=0,T.pitch=0,T.crash=1.1,Ai(t?`${i} ${t} ${xe.item}${t>1?"s":""} slipped away`:i,!0),Rn(90,.5,.25,"triangle")}function Ty(i){T.y=i,T.grounded=!0;const t=Math.sin(T.yaw),e=Math.cos(T.yaw);T.speed=Math.max(0,T.vx*t+T.vz*e),T.gvy=0;const n=Math.round(T.flip/li),s=Math.round(Math.abs(T.spin)/Math.PI);if(T.air<.3){T.pitch=0;return}if(Math.abs(T.flip-n*li)>1){op("Wipeout!");return}if(T.pitch-=n*li,T.air>.35&&(n||s)){const r=[];n&&r.push(`${n>0?"Front flip":"Backflip"}${Math.abs(n)>1?" ×"+Math.abs(n):""}`),s&&r.push(`${s*180}° spin`);const o=Math.abs(n)*50+s*20;Bt.score+=o,Bt.tricks++,Ai(`${r.join(" + ")}  +${o}`),Rn(1318.5,.5,.08)}}function ih(){const i=Math.hypot(T.x,T.z);if(Ze.SOFT_EDGE){const s=i-(or+6);if(s>0){let r=Math.atan2(-T.x,-T.z)-T.yaw;r=Math.atan2(Math.sin(r),Math.cos(r));const o=Math.min(1,s/30);T.yaw+=r*.05*o,T.grounded||(T.vx-=T.x/i*o*.5,T.vz-=T.z/i*o*.5),T.speed=Math.min(T.speed,30-16*o),s>4&&!T.edgeTold&&(T.edgeTold=!0,Ai("The road ends in the fields. Turning back to town."));const a=or+70;i>a&&(T.x*=a/i,T.z*=a/i)}else s<-12&&(T.edgeTold=!1)}else!Vi&&i>or&&(T.x*=or/i,T.z*=or/i,T.speed*=.5,T.vx*=.5,T.vz*=.5);const t=T.x-rn.x,e=T.z-rn.z,n=Math.hypot(t,e);n<10&&T.y<Jd+12&&(T.x=rn.x+t/n*10,T.z=rn.z+e/n*10,T.speed*=.4,T.vx*=.4,T.vz*=.4),Ze.pushOut(T)>8&&Rn(140,.2,.12,"triangle"),Ei?.pushOut(T)&&!T.onFoot&&(T.speed*=.3)}const kf=6;function Ay(i){if(T.onFoot)return Ry(i);const t=T.crash<=0&&!Un;T.crash>0&&(T.crash-=i);let e=0,n=0,s=0;T.refYaw=null,t&&(Ft.analog&&T.grounded?(e=-Math.sign(Ft.ax)*Math.abs(Ft.ax)**1.6*.75,n=Math.max(0,-Ft.ay),s=Math.max(0,Ft.ay),Ft.ax!==0&&(T.parked=!1)):(e=Ft.analog?-Math.sign(Ft.ax)*Math.abs(Ft.ax)**1.5:(Ft.left?1:0)-(Ft.right?1:0),n=!Ft.analog&&Ft.up?1:0,s=!Ft.analog&&Ft.down?1:0)),T.steer=Xe(T.steer||0,e,Ft.analog?6:14,i);const r=T.steer,o=Ft.jumpPressed;if(Ft.jumpPressed=!1,T.grounded){const c=Math.sin(T.yaw),l=Math.cos(T.yaw),h=(Mi(T.x+c,T.z+l,T.y)-Mi(T.x-c,T.z-l,T.y))/2,u=Math.atan(h);t&&((n>0||!Ft.analog&&(Ft.left||Ft.right))&&(T.parked=!1),s>0&&(T.speed-=32*s*i,T.speed<=.4&&(T.parked=!0)),T.speed+=16*n*i,!T.parked&&s===0&&T.speed<kf&&(T.speed=Math.min(kf,T.speed+9*i))),T.speed-=18*Math.sin(u)*i,T.speed-=T.speed*.5*i,T.speed=Dn(T.speed,0,44);const f=T.parked?0:Math.max(.45,Dn(T.speed/7,0,1));T.yaw+=r*2.4*f*i,T.x+=Math.sin(T.yaw)*T.speed*i,T.z+=Math.cos(T.yaw)*T.speed*i,ih();const d=Mi(T.x,T.z,T.y),g=(d-T.y)/i;t&&o?Bf(Math.max(T.gvy,0)+11):g<T.gvy-24*i-2.5&&Math.abs(T.speed)>6?Bf(T.gvy):(T.y=d,T.gvy=g),T.pitch=Xe(T.pitch,-u,10,i),T.roll=Xe(T.roll,-r*.38*Dn(T.speed/14,-1,1)+(t?0:Math.sin(T.crash*20)*.3),8,i)}else{const c=Ft.jump&&T.vy<0;T.vy-=(c?8:24)*i,c&&(T.vy=Math.max(T.vy,-6)),T.x+=T.vx*i,T.z+=T.vz*i,T.y+=T.vy*i,T.air+=i,Ft.up||(T.lockUp=!1),Ft.down||(T.lockDown=!1);const l=t?((Ft.up&&!T.lockUp?1:0)-(Ft.down&&!T.lockDown?1:0))*8*i:0;T.flip+=l,T.pitch+=l,T.spin+=r*5.5*i,T.yaw+=r*5.5*i,T.roll=Xe(T.roll,0,6,i),ih();const h=Mi(T.x,T.z,T.y);T.y<=h&&Ty(h)}Mn.root.position.set(T.x,T.y,T.z),Mn.root.rotation.y=T.yaw,Mn.pitchG.rotation.x=T.pitch,Mn.rollG.rotation.z=T.roll;const a=(T.grounded?T.speed:Math.hypot(T.vx,T.vz))*i/.38;for(const c of Mn.wheels)c.rotation.x+=a;T.grounded&&T.speed>.5&&s===0&&T.crash<=0&&Mn.pedal(-a*.4)}const di={x:0,y:0,z:0,yaw:0},Cy=4.4;function Ya(i){T.onFoot=i,Cs.root.visible=i,Mn.riderG.visible=!i,document.body.classList.toggle("on-foot",i),Rt("controls").classList.toggle("foot",i),Rt("walkLabel").textContent=i?"🚲 Ride":"🚶 Get off",i||(Mn.rollG.rotation.z=0)}function Yh(){if(!(Bt.state!=="play"||Un||Ds))if(T.onFoot)Math.hypot(di.x-T.x,di.z-T.z)>4?Ai("Your bike was brought round to you"):(T.x=di.x,T.z=di.z,T.yaw=di.yaw),Object.assign(T,{speed:0,parked:!0,refYaw:null,grounded:!0,vx:0,vy:0,vz:0}),T.y=Mi(T.x,T.z,T.y),Mr=T.yaw,Ya(!1),Rn(440,.2,.06);else{if(!T.grounded||T.crash>0)return;Object.assign(di,{x:T.x,y:T.y,z:T.z,yaw:T.yaw}),T.x+=Math.cos(T.yaw)*.9,T.z-=Math.sin(T.yaw)*.9,T.speed=0,T.steer=0,T.roll=0,T.pitch=0,Ya(!0),Mn.root.position.set(di.x,di.y,di.z),Mn.root.rotation.y=di.yaw,Mn.pitchG.rotation.x=0,Mn.rollG.rotation.z=.2,Rn(330,.2,.06)}}let qn=null,rc=!1;function ap(){if(!(!qn||Bt.state!=="play"))if(["hanoi","slide","memory"].includes(qn.kind)){if(!T.onFoot){Yh();return}for(const i in Ft)Ft[i]=!1;Ft.ax=Ft.ay=0,T.speed=0,Bt.state="mind",Rt("hud").classList.remove("on"),Cs.root.visible=!1,Ei.open(qn.kind)}else qn.kind==="soon"&&Ai(qn.label)}function Ry(i){let t,e;Ft.analog?(t=Ft.ax,e=Ft.ay):(t=(Ft.right?1:0)-(Ft.left?1:0),e=(Ft.down?1:0)-(Ft.up?1:0));const n=Math.min(1,Math.hypot(t,e)),s=Math.sin(ri),r=Math.cos(ri),o=Math.cos(ri),a=-Math.sin(ri),c=s*-e+o*-t,l=r*-e+a*-t;if(T.camFollow=!1,n>.05&&!Un){let u=Math.atan2(c,l)-T.yaw;u=Math.atan2(Math.sin(u),Math.cos(u)),T.yaw+=u*(1-Math.exp(-12*i)),T.camFollow=Math.abs(Math.atan2(-t,-e))<.5}T.speed=Xe(T.speed,n>.05&&!Un?Cy*n:0,10,i);const h=Math.hypot(c,l)||1;T.x+=(n>.05?c/h:Math.sin(T.yaw))*T.speed*i,T.z+=(n>.05?l/h:Math.cos(T.yaw))*T.speed*i,T.grounded=!0,ih(),T.y=Mi(T.x,T.z,T.y),Ft.jumpPressed=!1,Cs.root.position.set(T.x,T.y,T.z),Cs.root.rotation.y=T.yaw,Cs.step(T.speed,i)}function Py(){const i=Bt.state==="play"&&!Un&&Ei?Ei.near(T):null;qn=i&&i.kind!=="pavilion"?i:null;const t=Rt("actBtn");if(qn){const e=["hanoi","slide","memory"].includes(qn.kind),n={hanoi:"🧩 ",slide:"🖼️ ",memory:"🃏 "}[qn.kind]||"";Rt("actLabel").textContent=e&&!T.onFoot?"🚶 Get off to play":n+qn.label,t.classList.toggle("soon",qn.kind==="soon")}t.classList.toggle("on",!!qn),i&&!T.onFoot&&!rc&&(rc=!0,Ai("Mind Games: get off your bike to play")),i||(rc=!1),Rt("walkBtn").classList.toggle("on",Bt.state==="play"&&!Un&&!Ds)}function Ly(i,t){Vi&&(rn.x=is(Lf.x,T.x),rn.z=is(Lf.z,T.z));for(const s of zs){if(Vi&&(s.x=is(s.x,T.x),s.z=is(s.z,T.z),s.group.position.x=s.x,s.group.position.z=s.z),s.group.position.y=s.y+Math.sin(i*2+s.ph)*.25,s.core.rotation.y=i*1.5+s.ph,Bt.state!=="play")continue;const r=s.x-T.x,o=s.group.position.y-(T.y+1),a=s.z-T.z;r*r+o*o+a*a<2.6*2.6&&(Bt.carried++,Rn(zf[(Bt.carried-1)%zf.length],.7,.11),Xh(s))}if(Bt.state==="play"&&Bt.carried>0&&Math.hypot(T.x-rn.x,T.z-rn.z)<17){const s=Bt.carried,r=s*100+s*(s-1)*10;Bt.score+=r,Bt.delivered+=s,Bt.carried=0,Wh.setDelivered(Bt.delivered),Ai(`${s} ${xe.item}${s>1?"s":""} delivered  +${r}`),[392,523.25,659.25,783.99].forEach((o,a)=>setTimeout(()=>Rn(o,1.4,.09),a*90))}const e=Math.sin(T.yaw),n=Math.cos(T.yaw);for(let s=0;s<ar.length;s++){const r=ar[s];if(r.visible=Bt.state==="play"&&s<Bt.carried,!r.visible)continue;const o=s===0?T.x-e*1.6:ar[s-1].position.x,a=s===0?T.y+2.9:ar[s-1].position.y,c=s===0?T.z-n*1.6:ar[s-1].position.z;r.position.x=Xe(r.position.x,o,12,t),r.position.y=Xe(r.position.y,a+Math.sin(i*4+s)*.08,12,t),r.position.z=Xe(r.position.z,c,12,t)}}const zi={star:null,dist:0},pr=new ut(new ve(.4,.4,70,10,1,!0),new le({transparent:!0,opacity:.3,blending:ci,depthWrite:!1,fog:!1,side:Ye}));pr.visible=!1;hi.add(pr);function Iy(i){let t=null,e=1/0;for(const n of zs){const s=Math.hypot(n.x-T.x,n.z-T.z);s<e&&(e=s,t=n)}zi.star=t,zi.dist=e,pr.visible=Bt.state==="play"&&!!t,t&&(pr.position.set(t.x,t.y+36,t.z),pr.material.color.set(xe.colors[t.high?1:0]),pr.material.opacity=.26+.12*Math.sin(i*4))}const nn=new U(0,40,0),ga=new U,xa=new U,ti=new U;let Mr=Math.PI,ri=Math.PI;const Pe={yaw:0,pitch:0,zoom:1,idle:0,dragging:!1};function Dy(){const i=ui.domElement;i.style.touchAction="none",i.style.cursor="grab";const t=new Map;let e=0;const n=()=>{const[r,o]=[...t.values()];return Math.hypot(r.x-o.x,r.y-o.y)};i.addEventListener("pointerdown",r=>{Bt.state==="play"&&(t.set(r.pointerId,{x:r.clientX,y:r.clientY}),i.setPointerCapture?.(r.pointerId),t.size===2&&(e=n()),Pe.dragging=!0,i.style.cursor="grabbing")}),i.addEventListener("pointermove",r=>{const o=t.get(r.pointerId);if(!o)return;const a=r.clientX-o.x,c=r.clientY-o.y;if(o.x=r.clientX,o.y=r.clientY,t.size===1)Pe.yaw-=a*.006,Pe.pitch=Dn(Pe.pitch+c*.005,-.12,1.25);else if(t.size===2){const l=n();e>0&&l>0&&(Pe.zoom=Dn(Pe.zoom*e/l,.45,2.6)),e=l}});const s=r=>{t.delete(r.pointerId),t.size===0&&(Pe.dragging=!1,Pe.idle=0,i.style.cursor="grab")};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),i.addEventListener("wheel",r=>{r.preventDefault(),Pe.zoom=Dn(Pe.zoom*Math.exp(r.deltaY*.0012),.45,2.6)},{passive:!1})}Dy();function Uy(i,t){if(Bt.state==="menu"){const c=i*.08;An.position.set(rn.x+Math.sin(c)*xe.menuCam.r,xe.menuCam.h,rn.z+Math.cos(c)*xe.menuCam.r),An.lookAt(rn.x,Jd+7,rn.z);return}if(Un)return Ey(t);if(Ei?.active()){Ei.cameraPose(ga,xa),nn.x=Xe(nn.x,ga.x,4,t),nn.y=Xe(nn.y,ga.y,4,t),nn.z=Xe(nn.z,ga.z,4,t),ti.x=Xe(ti.x,xa.x,5,t),ti.y=Xe(ti.y,xa.y,5,t),ti.z=Xe(ti.z,xa.z,5,t),An.position.copy(nn),An.lookAt(ti);return}let n=(T.grounded||Math.hypot(T.vx,T.vz)<2?T.yaw:Math.atan2(T.vx,T.vz))-Mr;n=Math.atan2(Math.sin(n),Math.cos(n)),(!T.onFoot||T.camFollow)&&(Mr+=n*(1-Math.exp(-(T.onFoot?2.5:T.grounded?9:5)*t))),Pe.dragging||(Pe.idle+=t,Pe.idle>2&&Math.abs(T.speed)>3&&!T.onFoot&&(Pe.yaw=Math.atan2(Math.sin(Pe.yaw),Math.cos(Pe.yaw)),Pe.yaw=Xe(Pe.yaw,0,2.5,t),Pe.pitch=Xe(Pe.pitch,0,2.5,t))),ri=Mr+Pe.yaw;let s=(T.onFoot?5.2:8.5+Math.abs(T.speed)*.06)*Pe.zoom;const r=T.onFoot?2.1:2.7,o=new U;for(;s>1.5;s-=1){const c=s*Math.cos(Pe.pitch);if(o.set(T.x-Math.sin(ri)*c,T.y+r+s*Math.sin(Pe.pitch),T.z-Math.cos(ri)*c),!Ze.blocked?.(o.x,o.y,o.z))break}nn.x=Xe(nn.x,o.x,8,t),nn.y=Xe(nn.y,o.y,5,t),nn.z=Xe(nn.z,o.z,8,t),nn.y=Math.max(nn.y,Mi(nn.x,nn.z)+1.4),An.position.copy(nn);const a=(T.onFoot?3:6)*Math.max(0,1-(Math.abs(Pe.yaw)+Math.abs(Pe.pitch))/.8);ti.set(T.x+Math.sin(ri)*a,T.y+(T.onFoot?1.3:1.6)+a/6,T.z+Math.cos(ri)*a),An.lookAt(ti)}function Ny(i){Rt("score").textContent=Bt.score,Rt("carry").textContent=`${Bt.carried} ${xe.icon}`;const t=Math.max(0,Math.ceil(Bt.time));Rt("time").textContent=`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`;const e=rn.x-T.x,n=rn.z-T.z,s=Math.atan2(e,n)-ri;if(Rt("arrow").style.transform=`rotate(${-s}rad)`,Rt("dist").textContent=`${Math.round(Math.hypot(e,n))} m`,zi.star){const r=Math.atan2(zi.star.x-T.x,zi.star.z-T.z)-ri;Rt("arrowS").style.transform=`rotate(${-r}rad)`,Rt("distS").textContent=`${Math.round(zi.dist)} m`}nh>0&&(nh-=i)<=0&&Rt("toast").classList.remove("on")}const ii=512,lp=Ze.MAP_SPAN??490,bo=Rt("map"),Fy=bo.getContext("2d");bo.width=bo.height=ii;const Eo=document.createElement("canvas");Eo.width=Eo.height=ii;{const i=Eo.getContext("2d");if(Ze.drawMap)Ze.drawMap(i,ii);else{const t=ii/lp,e=ii/2;i.fillStyle="#0c2430",i.beginPath(),i.arc(e,e,or*t,0,li),i.fill(),i.strokeStyle="#9fc2c4",i.lineWidth=3,i.stroke(),i.fillStyle="#ffd27a",i.beginPath(),i.arc(e+rn.x*t,e+rn.z*t,12,0,li),i.fill()}}const qh=()=>bo.classList.toggle("big");bo.addEventListener("click",qh);addEventListener("keydown",i=>{i.code==="Tab"&&(i.preventDefault(),qh())});const zy=i=>"#"+i.toString(16).padStart(6,"0");let Oy=0;function By(){const i=Fy,t=ii/lp,e=ii/2;if(i.clearRect(0,0,ii,ii),i.save(),Vi){i.translate(-T.x*t,-T.z*t);const n=Math.round(T.x/Vi),s=Math.round(T.z/Vi);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++)i.drawImage(Eo,(n+r)*ii,(s+o)*ii)}else i.drawImage(Eo,0,0);for(const n of zs)i.fillStyle=zy(xe.colors[n.high?1:0]),i.strokeStyle="#1c120e",i.lineWidth=2,i.beginPath(),i.arc(e+n.x*t,e+n.z*t,7,0,li),i.fill(),i.stroke();if(zi.star){const n=e+zi.star.x*t,s=e+zi.star.z*t;i.strokeStyle="#ffffff",i.lineWidth=3,i.setLineDash([10,8]),i.beginPath(),i.moveTo(e+T.x*t,e+T.z*t),i.lineTo(n,s),i.stroke(),i.setLineDash([]),i.beginPath(),i.arc(n,s,13+3*Math.sin(performance.now()/200),0,li),i.stroke()}i.fillStyle="#bfe3ff";for(const n of Ze.traffic??[])i.fillRect(e+n.x*t-4,e+n.z*t-4,8,8);for(const n of fr.values())i.fillStyle=`hsl(${n.hue}, 80%, 62%)`,i.strokeStyle="#ffffff",i.lineWidth=3,i.beginPath(),i.arc(e+n.x*t,e+n.z*t,9,0,li),i.fill(),i.stroke();i.save(),i.translate(e+T.x*t,e+T.z*t),i.rotate(Math.PI-T.yaw),i.fillStyle="#ffffff",i.strokeStyle="#1c120e",i.lineWidth=4,i.beginPath(),i.moveTo(0,-20),i.lineTo(13,14),i.lineTo(0,7),i.lineTo(-13,14),i.closePath(),i.stroke(),i.fill(),i.restore(),i.restore()}const To=Rt("controls");xe.controls&&(To.querySelector(".ground").innerHTML=xe.controls.ground,To.querySelector(".air").innerHTML=xe.controls.air,Rt("briefKeys").innerHTML=xe.controls.brief,Rt("briefTouch").textContent=xe.controls.touch);xe.timeLabel&&(Rt("timeLabel").textContent=xe.timeLabel);const ky=[...To.querySelectorAll("kbd[data-k]")];let yr=!1;try{yr=localStorage.getItem(Hh)==="off"}catch{}function cp(){To.classList.toggle("hidden",yr),Rt("btnHelp").classList.toggle("off",yr)}function hp(){yr=!yr;try{localStorage.setItem(Hh,yr?"off":"on")}catch{}cp()}function up(){dr=!dr,ni&&(ni.gain.value=dr?0:1),Rt("btnSound").classList.toggle("off",dr)}function Gy(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.().catch(()=>{})}for(const[i,t]of[["btnPause",()=>Lr(!0)],["btnHelp",hp],["btnSound",up],["btnMap",qh],["btnFull",Gy]])Rt(i).addEventListener("click",e=>{t(),e.currentTarget.blur()});cp();let cr=0;function fp(){Rt("brief").classList.add("on"),cr=9}function Hy(i){for(const t of ky)t.classList.toggle("on",!!Ft[t.dataset.k]);if(To.classList.toggle("air",!T.grounded&&T.air>.12),cr>0){cr-=i;const t=Ft.up||Ft.left||Ft.right||Ft.jump;(cr<=0||cr<8&&t)&&(cr=0,Rt("brief").classList.remove("on"))}}let sh=xe.credit??"";Rt("credit").textContent=sh;const Ds=Ze.makeHero?Ze.makeHero({scene:hi,P:T,keys:Ft,G:Bt,toast:Ai,tone:Rn}):null;Ds&&(Mn.root.visible=!1);const dp=Xa.get("spot")==="mind"&&!!Ze.MIND,Ei=Ze.MIND?cy({scene:hi,at:Ze.MIND,camera:An,renderer:ui,composer:Fs,me:yi.me,tone:Rn,toast:Ai,onLeave(){Bt.state="play",Cs.root.visible=T.onFoot,Rt("hud").classList.add("on"),Mr=T.yaw,Pe.yaw=Pe.pitch=0}}):null;Rt("walkBtn").addEventListener("click",i=>{Yh(),i.currentTarget.blur()});Rt("actBtn").addEventListener("click",i=>{ap(),i.currentTarget.blur()});dp&&(Rt("chMind").classList.add("active"),Rt("ch3").classList.remove("active"));document.title=xe.title;Rt("title").textContent=xe.title;Rt("subtitle").textContent=xe.sub;Rt("how").innerHTML=xe.how;Rt("goal").textContent=xe.goal;Rt("goalS").textContent=xe.icon;Rt("briefLead").textContent=xe.brief;Rt("carry").textContent=`0 ${xe.icon}`;document.documentElement.style.setProperty("--glow",xe.glow);vy();zs.forEach(Xh);T.y=Mi(T.x,T.z);Mn.root.position.set(T.x,T.y,T.z);Mn.root.rotation.y=T.yaw;const rh=new Td;function pp(i,t){Bt.state==="play"&&(Ds?Ds.update(i):Ay(i),Un||(Bt.time-=i),Bt.time<=0&&rp()),(Bt.state==="play"||Bt.state==="mind")&&Ei?.update(i,t),Py(),Ly(t,i),my(i),gy(),Uy(t,i),Iy(t),Bt.state==="play"&&(Ny(i),Hy(i));const e=1-Bt.time/Vh,n=Bt.state==="menu"?0:Dn((e-.72)/.28,0,1),s=Wh.update(t,i,An,n,Bt.state==="play"?T:null)||{};s.credit!==void 0&&s.credit!==sh&&(Rt("credit").textContent=sh=s.credit),s.notice&&Ai(s.notice,!0),s.hop&&Rn(988,.25,.05),s.honk&&My(),s.carHit>1&&(Rn(110,.25,.2,"triangle"),s.carHit>13&&T.crash<=0&&op("Hit a car!")),yy(s),Bt.state==="play"&&Oy++%2===0&&By()}function Vy(){const i=Math.min(rh.getDelta(),.05);Bt.state!=="paused"&&pp(i,rh.elapsedTime),Fs.render()}ui.setAnimationLoop(Vy);window.__aurora={mind:()=>Ei,begin:$h,draw:()=>Fs.render(),net:yi,others:fr,INTRO:vs,introState:()=>Un,setPaused:Lr,hero:Ds,sim:(i,t=1/60)=>{for(let e=0;e<i;e++)pp(t,rh.elapsedTime+e*t)},P:T,G:Bt,keys:Ft,stars:zs,W:Ze,orbit:Pe,music:On,startGame:wo,endGame:rp,audioState:()=>De?.state};
