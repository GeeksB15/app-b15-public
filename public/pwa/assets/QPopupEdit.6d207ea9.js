import{an as E,a5 as p,a6 as M,b8 as O,af as V,d6 as B,a7 as r,aF as x,a9 as D,D as S}from"./index.fd6a1d5c.js";function f(e,o=new WeakMap){if(Object(e)!==e)return e;if(o.has(e))return o.get(e);const n=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const t=e.valueOf();if(Object(t)!==t){const a=new e.constructor(t);return o.set(e,a),a}}return o.set(e,n),e instanceof Set?e.forEach(t=>{n.add(f(t,o))}):e instanceof Map&&e.forEach((t,a)=>{n.set(a,f(t,o))}),Object.assign(n,...Object.keys(e).map(t=>({[t]:f(e[t],o)})))}var Q=E({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(e,{slots:o,emit:n}){const{proxy:t}=D(),{$q:a}=t,c=p(null),i=p(""),l=p("");let v=!1;const y=M(()=>O({initialValue:i.value,validate:e.validate,set:b,cancel:s,updatePosition:w},"value",()=>l.value,u=>{l.value=u}));function b(){e.validate(l.value)!==!1&&(d()===!0&&(n("save",l.value,i.value),n("update:modelValue",l.value)),g())}function s(){d()===!0&&n("cancel",l.value,i.value),g()}function w(){V(()=>{c.value.updatePosition()})}function d(){return B(l.value,i.value)===!1}function g(){v=!0,c.value.hide()}function h(){v=!1,i.value=f(e.modelValue),l.value=f(e.modelValue),n("beforeShow")}function m(){n("show")}function j(){v===!1&&d()===!0&&(e.autoSave===!0&&e.validate(l.value)===!0?(n("save",l.value,i.value),n("update:modelValue",l.value)):n("cancel",l.value,i.value)),n("beforeHide")}function q(){n("hide")}function C(){const u=o.default!==void 0?[].concat(o.default(y.value)):[];return e.title&&u.unshift(r("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&u.push(r("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[r(S,{flat:!0,color:e.color,label:e.labelCancel||a.lang.label.cancel,onClick:s}),r(S,{flat:!0,color:e.color,label:e.labelSet||a.lang.label.set,onClick:b})])),u}return Object.assign(t,{set:b,cancel:s,show(u){c.value!==null&&c.value.show(u)},hide(u){c.value!==null&&c.value.hide(u)},updatePosition:w}),()=>{if(e.disable!==!0)return r(x,{ref:c,class:"q-popup-edit",cover:e.cover,onBeforeShow:h,onShow:m,onBeforeHide:j,onHide:q,onEscapeKey:s},C)}}});export{Q};
