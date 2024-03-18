import{an as Q,bD as m,bE as k,a5 as h,bF as V,a6 as r,bG as x,a8 as v,ad as I,a7 as i,j as M,aF as O,by as P,D as s,a9 as _,bH as j}from"./index.fd6a1d5c.js";import{Q as R}from"./QBtnGroup.e25d70c2.js";const L=Object.keys(m),z=e=>L.reduce((o,a)=>{const l=e[a];return l!==void 0&&(o[a]=l),o},{});var W=Q({name:"QBtnDropdown",props:{...m,...k,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:o,emit:a}){const{proxy:l}=_(),u=h(e.modelValue),t=h(null),c=V(),b=r(()=>{const n={"aria-expanded":u.value===!0?"true":"false","aria-haspopup":"true","aria-controls":c,"aria-label":e.toggleAriaLabel||l.$q.lang.label[u.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),B=r(()=>"q-btn-dropdown__arrow"+(u.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),f=r(()=>x(e)),w=r(()=>z(e));v(()=>e.modelValue,n=>{t.value!==null&&t.value[n?"show":"hide"]()}),v(()=>e.split,d);function S(n){u.value=!0,a("beforeShow",n)}function D(n){a("show",n),a("update:modelValue",!0)}function q(n){u.value=!1,a("beforeHide",n)}function C(n){a("hide",n),a("update:modelValue",!1)}function A(n){a("click",n)}function y(n){j(n),d(),a("click",n)}function H(n){t.value!==null&&t.value.toggle(n)}function g(n){t.value!==null&&t.value.show(n)}function d(n){t.value!==null&&t.value.hide(n)}return Object.assign(l,{show:g,hide:d,toggle:H}),I(()=>{e.modelValue===!0&&g()}),()=>{const n=[i(M,{class:B.value,name:e.dropdownIcon||l.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(i(O,{ref:t,id:c,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:S,onShow:D,onBeforeHide:q,onHide:C},o.default)),e.split===!1?i(s,{class:"q-btn-dropdown q-btn-dropdown--simple",...w.value,...b.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:A},{default:()=>P(o.label,[]).concat(n),loading:o.loading}):i(R,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...f.value,glossy:e.glossy,stretch:e.stretch},()=>[i(s,{class:"q-btn-dropdown--current",...w.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:y},{default:o.label,loading:o.loading}),i(s,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...b.value,...f.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}});export{W as Q};
