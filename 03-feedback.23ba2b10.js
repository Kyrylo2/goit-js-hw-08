var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o.register("cknVS",(function(t,n){var r=9007199254740991,o="[object Map]",i="[object Promise]",u="[object Set]",c="[object WeakMap]",a="[object DataView]",f=/^\[object .+?Constructor\]$/,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,p=l||s||Function("return this")(),v=n&&!n.nodeType&&n,d=v&&t&&!t.nodeType&&t,y=d&&d.exports===v;var b,m,g,j=Function.prototype,O=Object.prototype,h=p["__core-js_shared__"],w=(b=/[^.]+$/.exec(h&&h.keys&&h.keys.IE_PROTO||""))?"Symbol(src)_1."+b:"",x=j.toString,S=O.hasOwnProperty,T=O.toString,k=RegExp("^"+x.call(S).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),E=y?p.Buffer:void 0,_=O.propertyIsEnumerable,$=E?E.isBuffer:void 0,M=(m=Object.keys,g=Object,function(e){return m(g(e))}),N=C(p,"DataView"),A=C(p,"Map"),D=C(p,"Promise"),F=C(p,"Set"),I=C(p,"WeakMap"),P=!_.call({valueOf:1},"valueOf"),q=U(N),W=U(A),R=U(D),V=U(F),B=U(I);function L(e){if(!X(e)||function(e){return!!w&&w in e}(e))return!1;var t=Q(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?k:f;return t.test(U(e))}function C(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return L(n)?n:void 0}var J=function(e){return T.call(e)};function U(e){if(null!=e){try{return x.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function z(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&H(e)}(e)&&S.call(e,"callee")&&(!_.call(e,"callee")||"[object Arguments]"==T.call(e))}(N&&J(new N(new ArrayBuffer(1)))!=a||A&&J(new A)!=o||D&&J(D.resolve())!=i||F&&J(new F)!=u||I&&J(new I)!=c)&&(J=function(e){var t=T.call(e),n="[object Object]"==t?e.constructor:void 0,r=n?U(n):void 0;if(r)switch(r){case q:return a;case W:return o;case R:return i;case V:return u;case B:return c}return t});var G=Array.isArray;function H(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}(e.length)&&!Q(e)}var K=$||function(){return!1};function Q(e){var t=X(e)?T.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function X(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}t.exports=function(e){if(H(e)&&(G(e)||"string"==typeof e||"function"==typeof e.splice||K(e)||z(e)))return!e.length;var t=J(e);if(t==o||t==u)return!e.size;if(P||function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||O)}(e))return!M(e).length;for(var n in e)if(S.call(e,n))return!1;return!0}}));var i,u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,v=s||p||Function("return this")(),d=Object.prototype.toString,y=Math.max,b=Math.min,m=function(){return v.Date.now()};function g(e,t,n){var r,o,i,u,c,a,f=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,i=o;return r=o=void 0,f=t,u=e.apply(i,n)}function d(e){return f=e,c=setTimeout(h,t),l?v(e):u}function g(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-f>=i}function h(){var e=m();if(g(e))return w(e);c=setTimeout(h,function(e){var n=t-(e-a);return s?b(n,i-(e-f)):n}(e))}function w(e){return c=void 0,p&&r?v(e):(r=o=void 0,u)}function x(){var e=m(),n=g(e);if(r=arguments,o=this,a=e,n){if(void 0===c)return d(a);if(s)return c=setTimeout(h,t),v(a)}return void 0===c&&(c=setTimeout(h,t)),u}return t=O(t)||0,j(n)&&(l=!!n.leading,i=(s="maxWait"in n)?y(O(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==c&&clearTimeout(c),f=0,r=a=o=c=void 0},x.flush=function(){return void 0===c?u:w(m())},x}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=a.test(e);return n||f.test(e)?l(e.slice(2),n?2:8):c.test(e)?NaN:+e}i=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var h=o("cknVS");let w={};const x={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),textArea:document.querySelector(".feedback-form textarea")};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!t(h)(e)){const{email:t,message:n}=e;x.email.value=null!=t?t:"",x.textArea.value=null!=n?n:""}}(),x.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(t(h)(w)?"Please fill all fields":w),e.currentTarget.reset(),w={},localStorage.removeItem("feedback-form-state")})),x.form.addEventListener("input",t(i)((function(e){w[e.target.name]=e.target.value;const t=JSON.stringify(w);localStorage.setItem("feedback-form-state",t)}),500));
//# sourceMappingURL=03-feedback.23ba2b10.js.map
