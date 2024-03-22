import{a6 as v,bo as I,bp as oa,an as ra,bq as ua,ao as ia,ap as sa,br as va,a5 as C,bs as da,bt as Te,bu as ca,bv as fa,bw as ge,a8 as J,bx as ma,af as Fe,a7 as i,ae as U,by as ha,a9 as ya,bz as ga,D as k,bA as ba}from"./index.83d285ce.js";const _a=["gregorian","persian"],Da={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:n=>_a.includes(n),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},wa=["update:modelValue"];function V(n){return n.year+"/"+I(n.month)+"/"+I(n.day)}function qa(n,K){const x=v(()=>n.disable!==!0&&n.readonly!==!0),W=v(()=>x.value===!0?0:-1),q=v(()=>{const m=[];return n.color!==void 0&&m.push(`bg-${n.color}`),n.textColor!==void 0&&m.push(`text-${n.textColor}`),m.join(" ")});function le(){return n.locale!==void 0?{...K.lang.date,...n.locale}:K.lang.date}function _(m){const B=new Date,S=m===!0?null:0;if(n.calendar==="persian"){const $=oa(B);return{year:$.jy,month:$.jm,day:$.jd}}return{year:B.getFullYear(),month:B.getMonth()+1,day:B.getDate(),hour:S,minute:S,second:S,millisecond:S}}return{editable:x,tabindex:W,headerClass:q,getLocale:le,getCurrentDate:_}}const F=20,xa=["Calendar","Years","Months"],Ie=n=>xa.includes(n),be=n=>/^-?[\d]+\/[0-1]\d$/.test(n),z=" \u2014 ";function Y(n){return n.year+"/"+I(n.month)}var Ca=ra({name:"QDate",props:{...Da,...ua,...ia,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:be},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:be},navigationMaxYearMonth:{type:String,validator:be},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Ie}},emits:[...wa,"rangeStart","rangeEnd","navigation"],setup(n,{slots:K,emit:x}){const{proxy:W}=ya(),{$q:q}=W,le=sa(n,q),{getCache:_}=ba(),{tabindex:m,headerClass:B,getLocale:S,getCurrentDate:$}=qa(n,q);let G;const Be=va(n),$e=ga(Be),oe=C(null),j=C(ke()),f=C(S()),Ee=v(()=>ke()),Ae=v(()=>S()),M=v(()=>$()),u=C(He(j.value,f.value)),b=C(n.defaultView),_e=q.lang.rtl===!0?"right":"left",X=C(_e.value),re=C(_e.value),ue=u.value.year,Z=C(ue-ue%F-(ue<0?F:0)),g=C(null),Re=v(()=>{const e=n.landscape===!0?"landscape":"portrait";return`q-date q-date--${e} q-date--${e}-${n.minimal===!0?"minimal":"standard"}`+(le.value===!0?" q-date--dark q-dark":"")+(n.bordered===!0?" q-date--bordered":"")+(n.square===!0?" q-date--square no-border-radius":"")+(n.flat===!0?" q-date--flat no-shadow":"")+(n.disable===!0?" disabled":n.readonly===!0?" q-date--readonly":"")}),O=v(()=>n.color||"primary"),E=v(()=>n.textColor||"white"),p=v(()=>n.emitImmediately===!0&&n.multiple!==!0&&n.range!==!0),ie=v(()=>Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue!==null&&n.modelValue!==void 0?[n.modelValue]:[]),w=v(()=>ie.value.filter(e=>typeof e=="string").map(e=>ce(e,j.value,f.value)).filter(e=>e.dateHash!==null&&e.day!==null&&e.month!==null&&e.year!==null)),A=v(()=>{const e=a=>ce(a,j.value,f.value);return ie.value.filter(a=>da(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:e(a.from),to:e(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ee=v(()=>n.calendar!=="persian"?e=>new Date(e.year,e.month-1,e.day):e=>{const a=Te(e.year,e.month,e.day);return new Date(a.gy,a.gm-1,a.gd)}),se=v(()=>n.calendar==="persian"?V:(e,a,t)=>ca(new Date(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond),a===void 0?j.value:a,t===void 0?f.value:t,e.year,e.timezoneOffset)),L=v(()=>w.value.length+A.value.reduce((e,a)=>e+1+fa(ee.value(a.to),ee.value(a.from)),0)),De=v(()=>{if(n.title!==void 0&&n.title!==null&&n.title.length!==0)return n.title;if(g.value!==null){const t=g.value.init,l=ee.value(t);return f.value.daysShort[l.getDay()]+", "+f.value.monthsShort[t.month-1]+" "+t.day+z+"?"}if(L.value===0)return z;if(L.value>1)return`${L.value} ${f.value.pluralDay}`;const e=w.value[0],a=ee.value(e);return isNaN(a.valueOf())===!0?z:f.value.headerTitle!==void 0?f.value.headerTitle(a,e):f.value.daysShort[a.getDay()]+", "+f.value.monthsShort[e.month-1]+" "+e.day}),Ne=v(()=>w.value.concat(A.value.map(a=>a.from)).sort((a,t)=>a.year-t.year||a.month-t.month)[0]),ze=v(()=>w.value.concat(A.value.map(a=>a.to)).sort((a,t)=>t.year-a.year||t.month-a.month)[0]),we=v(()=>{if(n.subtitle!==void 0&&n.subtitle!==null&&n.subtitle.length!==0)return n.subtitle;if(L.value===0)return z;if(L.value>1){const e=Ne.value,a=ze.value,t=f.value.monthsShort;return t[e.month-1]+(e.year!==a.year?" "+e.year+z+t[a.month-1]+" ":e.month!==a.month?z+t[a.month-1]:"")+" "+a.year}return w.value[0].year}),ae=v(()=>{const e=[q.iconSet.datetime.arrowLeft,q.iconSet.datetime.arrowRight];return q.lang.rtl===!0?e.reverse():e}),qe=v(()=>n.firstDayOfWeek!==void 0?Number(n.firstDayOfWeek):f.value.firstDayOfWeek),We=v(()=>{const e=f.value.daysShort,a=qe.value;return a>0?e.slice(a,7).concat(e.slice(0,a)):e}),H=v(()=>{const e=u.value;return n.calendar!=="persian"?new Date(e.year,e.month,0).getDate():ge(e.year,e.month)}),Le=v(()=>typeof n.eventColor=="function"?n.eventColor:()=>n.eventColor),h=v(()=>{if(n.navigationMinYearMonth===void 0)return null;const e=n.navigationMinYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),y=v(()=>{if(n.navigationMaxYearMonth===void 0)return null;const e=n.navigationMaxYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),ve=v(()=>{const e={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return h.value!==null&&h.value.year>=u.value.year&&(e.year.prev=!1,h.value.year===u.value.year&&h.value.month>=u.value.month&&(e.month.prev=!1)),y.value!==null&&y.value.year<=u.value.year&&(e.year.next=!1,y.value.year===u.value.year&&y.value.month<=u.value.month&&(e.month.next=!1)),e}),te=v(()=>{const e={};return w.value.forEach(a=>{const t=Y(a);e[t]===void 0&&(e[t]=[]),e[t].push(a.day)}),e}),xe=v(()=>{const e={};return A.value.forEach(a=>{const t=Y(a.from),l=Y(a.to);if(e[t]===void 0&&(e[t]=[]),e[t].push({from:a.from.day,to:t===l?a.to.day:void 0,range:a}),t<l){let o;const{year:d,month:r}=a.from,s=r<12?{year:d,month:r+1}:{year:d+1,month:1};for(;(o=Y(s))<=l;)e[o]===void 0&&(e[o]=[]),e[o].push({from:void 0,to:o===l?a.to.day:void 0,range:a}),s.month++,s.month>12&&(s.year++,s.month=1)}}),e}),P=v(()=>{if(g.value===null)return;const{init:e,initHash:a,final:t,finalHash:l}=g.value,[o,d]=a<=l?[e,t]:[t,e],r=Y(o),s=Y(d);if(r!==D.value&&s!==D.value)return;const c={};return r===D.value?(c.from=o.day,c.includeFrom=!0):c.from=1,s===D.value?(c.to=d.day,c.includeTo=!0):c.to=H.value,c}),D=v(()=>Y(u.value)),Pe=v(()=>{const e={};if(n.options===void 0){for(let t=1;t<=H.value;t++)e[t]=!0;return e}const a=typeof n.options=="function"?n.options:t=>n.options.includes(t);for(let t=1;t<=H.value;t++){const l=D.value+"/"+I(t);e[t]=a(l)}return e}),Qe=v(()=>{const e={};if(n.events===void 0)for(let a=1;a<=H.value;a++)e[a]=!1;else{const a=typeof n.events=="function"?n.events:t=>n.events.includes(t);for(let t=1;t<=H.value;t++){const l=D.value+"/"+I(t);e[t]=a(l)===!0&&Le.value(l)}}return e}),Je=v(()=>{let e,a;const{year:t,month:l}=u.value;if(n.calendar!=="persian")e=new Date(t,l-1,1),a=new Date(t,l-1,0).getDate();else{const o=Te(t,l,1);e=new Date(o.gy,o.gm-1,o.gd);let d=l-1,r=t;d===0&&(d=12,r--),a=ge(r,d)}return{days:e.getDay()-qe.value-1,endDay:a}}),Me=v(()=>{const e=[],{days:a,endDay:t}=Je.value,l=a<0?a+7:a;if(l<6)for(let r=t-l;r<=t;r++)e.push({i:r,fill:!0});const o=e.length;for(let r=1;r<=H.value;r++){const s={i:r,event:Qe.value[r],classes:[]};Pe.value[r]===!0&&(s.in=!0,s.flat=!0),e.push(s)}if(te.value[D.value]!==void 0&&te.value[D.value].forEach(r=>{const s=o+r-1;Object.assign(e[s],{selected:!0,unelevated:!0,flat:!1,color:O.value,textColor:E.value})}),xe.value[D.value]!==void 0&&xe.value[D.value].forEach(r=>{if(r.from!==void 0){const s=o+r.from-1,c=o+(r.to||H.value)-1;for(let Q=s;Q<=c;Q++)Object.assign(e[Q],{range:r.range,unelevated:!0,color:O.value,textColor:E.value});Object.assign(e[s],{rangeFrom:!0,flat:!1}),r.to!==void 0&&Object.assign(e[c],{rangeTo:!0,flat:!1})}else if(r.to!==void 0){const s=o+r.to-1;for(let c=o;c<=s;c++)Object.assign(e[c],{range:r.range,unelevated:!0,color:O.value,textColor:E.value});Object.assign(e[s],{flat:!1,rangeTo:!0})}else{const s=o+H.value-1;for(let c=o;c<=s;c++)Object.assign(e[c],{range:r.range,unelevated:!0,color:O.value,textColor:E.value})}}),P.value!==void 0){const r=o+P.value.from-1,s=o+P.value.to-1;for(let c=r;c<=s;c++)e[c].color=O.value,e[c].editRange=!0;P.value.includeFrom===!0&&(e[r].editRangeFrom=!0),P.value.includeTo===!0&&(e[s].editRangeTo=!0)}u.value.year===M.value.year&&u.value.month===M.value.month&&(e[o+M.value.day-1].today=!0);const d=e.length%7;if(d>0){const r=7-d;for(let s=1;s<=r;s++)e.push({i:s,fill:!0})}return e.forEach(r=>{let s="q-date__calendar-item ";r.fill===!0?s+="q-date__calendar-item--fill":(s+=`q-date__calendar-item--${r.in===!0?"in":"out"}`,r.range!==void 0&&(s+=` q-date__range${r.rangeTo===!0?"-to":r.rangeFrom===!0?"-from":""}`),r.editRange===!0&&(s+=` q-date__edit-range${r.editRangeFrom===!0?"-from":""}${r.editRangeTo===!0?"-to":""}`),(r.range!==void 0||r.editRange===!0)&&(s+=` text-${r.color}`)),r.classes=s}),e}),Ue=v(()=>n.disable===!0?{"aria-disabled":"true"}:{});J(()=>n.modelValue,e=>{if(G===e)G=0;else{const a=He(j.value,f.value);R(a.year,a.month,a)}}),J(b,()=>{oe.value!==null&&W.$el.contains(document.activeElement)===!0&&oe.value.focus()}),J(()=>u.value.year+"|"+u.value.month,()=>{x("navigation",{year:u.value.year,month:u.value.month})}),J(Ee,e=>{Oe(e,f.value,"mask"),j.value=e}),J(Ae,e=>{Oe(j.value,e,"locale"),f.value=e});function Ce(){const{year:e,month:a,day:t}=M.value,l={...u.value,year:e,month:a,day:t},o=te.value[Y(l)];(o===void 0||o.includes(l.day)===!1)&&me(l),de(l.year,l.month)}function Ke(e){Ie(e)===!0&&(b.value=e)}function Ge(e,a){["month","year"].includes(e)&&(e==="month"?Ye:fe)(a===!0?-1:1)}function de(e,a){b.value="Calendar",R(e,a)}function Xe(e,a){if(n.range===!1||!e){g.value=null;return}const t=Object.assign({...u.value},e),l=a!==void 0?Object.assign({...u.value},a):t;g.value={init:t,initHash:V(t),final:l,finalHash:V(l)},de(t.year,t.month)}function ke(){return n.calendar==="persian"?"YYYY/MM/DD":n.mask}function ce(e,a,t){return ma(e,a,t,n.calendar,{hour:0,minute:0,second:0,millisecond:0})}function He(e,a){const t=Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue?[n.modelValue]:[];if(t.length===0)return Ve();const l=t[t.length-1],o=ce(l.from!==void 0?l.from:l,e,a);return o.dateHash===null?Ve():o}function Ve(){let e,a;if(n.defaultYearMonth!==void 0){const t=n.defaultYearMonth.split("/");e=parseInt(t[0],10),a=parseInt(t[1],10)}else{const t=M.value!==void 0?M.value:$();e=t.year,a=t.month}return{year:e,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:e+"/"+I(a)+"/01"}}function Ye(e){let a=u.value.year,t=Number(u.value.month)+e;t===13?(t=1,a++):t===0&&(t=12,a--),R(a,t),p.value===!0&&ne("month")}function fe(e){const a=Number(u.value.year)+e;R(a,u.value.month),p.value===!0&&ne("year")}function Ze(e){R(e,u.value.month),b.value=n.defaultView==="Years"?"Months":"Calendar",p.value===!0&&ne("year")}function pe(e){R(u.value.year,e),b.value="Calendar",p.value===!0&&ne("month")}function ea(e,a){const t=te.value[a];(t!==void 0&&t.includes(e.day)===!0?he:me)(e)}function T(e){return{year:e.year,month:e.month,day:e.day}}function R(e,a,t){if(h.value!==null&&e<=h.value.year&&((a<h.value.month||e<h.value.year)&&(a=h.value.month),e=h.value.year),y.value!==null&&e>=y.value.year&&((a>y.value.month||e>y.value.year)&&(a=y.value.month),e=y.value.year),t!==void 0){const{hour:o,minute:d,second:r,millisecond:s,timezoneOffset:c,timeHash:Q}=t;Object.assign(u.value,{hour:o,minute:d,second:r,millisecond:s,timezoneOffset:c,timeHash:Q})}const l=e+"/"+I(a)+"/01";l!==u.value.dateHash&&(X.value=u.value.dateHash<l==(q.lang.rtl!==!0)?"left":"right",e!==u.value.year&&(re.value=X.value),Fe(()=>{Z.value=e-e%F-(e<0?F:0),Object.assign(u.value,{year:e,month:a,day:1,dateHash:l})}))}function Se(e,a,t){const l=e!==null&&e.length===1&&n.multiple===!1?e[0]:e;G=l;const{reason:o,details:d}=je(a,t);x("update:modelValue",l,o,d)}function ne(e){const a=w.value[0]!==void 0&&w.value[0].dateHash!==null?{...w.value[0]}:{...u.value};Fe(()=>{a.year=u.value.year,a.month=u.value.month;const t=n.calendar!=="persian"?new Date(a.year,a.month,0).getDate():ge(a.year,a.month);a.day=Math.min(Math.max(1,a.day),t);const l=N(a);G=l;const{details:o}=je("",a);x("update:modelValue",l,e,o)})}function je(e,a){return a.from!==void 0?{reason:`${e}-range`,details:{...T(a.target),from:T(a.from),to:T(a.to)}}:{reason:`${e}-day`,details:T(a)}}function N(e,a,t){return e.from!==void 0?{from:se.value(e.from,a,t),to:se.value(e.to,a,t)}:se.value(e,a,t)}function me(e){let a;if(n.multiple===!0)if(e.from!==void 0){const t=V(e.from),l=V(e.to),o=w.value.filter(r=>r.dateHash<t||r.dateHash>l),d=A.value.filter(({from:r,to:s})=>s.dateHash<t||r.dateHash>l);a=o.concat(d).concat(e).map(r=>N(r))}else{const t=ie.value.slice();t.push(N(e)),a=t}else a=N(e);Se(a,"add",e)}function he(e){if(n.noUnset===!0)return;let a=null;if(n.multiple===!0&&Array.isArray(n.modelValue)===!0){const t=N(e);e.from!==void 0?a=n.modelValue.filter(l=>l.from!==void 0?l.from!==t.from&&l.to!==t.to:!0):a=n.modelValue.filter(l=>l!==t),a.length===0&&(a=null)}Se(a,"remove",e)}function Oe(e,a,t){const l=w.value.concat(A.value).map(o=>N(o,e,a)).filter(o=>o.from!==void 0?o.from.dateHash!==null&&o.to.dateHash!==null:o.dateHash!==null);x("update:modelValue",(n.multiple===!0?l:l[0])||null,t)}function aa(){if(n.minimal!==!0)return i("div",{class:"q-date__header "+B.value},[i("div",{class:"relative-position"},[i(U,{name:"q-transition--fade"},()=>i("div",{key:"h-yr-"+we.value,class:"q-date__header-subtitle q-date__header-link "+(b.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:m.value,..._("vY",{onClick(){b.value="Years"},onKeyup(e){e.keyCode===13&&(b.value="Years")}})},[we.value]))]),i("div",{class:"q-date__header-title relative-position flex no-wrap"},[i("div",{class:"relative-position col"},[i(U,{name:"q-transition--fade"},()=>i("div",{key:"h-sub"+De.value,class:"q-date__header-title-label q-date__header-link "+(b.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:m.value,..._("vC",{onClick(){b.value="Calendar"},onKeyup(e){e.keyCode===13&&(b.value="Calendar")}})},[De.value]))]),n.todayBtn===!0?i(k,{class:"q-date__header-today self-start",icon:q.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:m.value,onClick:Ce}):null])])}function ye({label:e,type:a,key:t,dir:l,goTo:o,boundaries:d,cls:r}){return[i("div",{class:"row items-center q-date__arrow"},[i(k,{round:!0,dense:!0,size:"sm",flat:!0,icon:ae.value[0],tabindex:m.value,disable:d.prev===!1,..._("go-#"+a,{onClick(){o(-1)}})})]),i("div",{class:"relative-position overflow-hidden flex flex-center"+r},[i(U,{name:"q-transition--jump-"+l},()=>i("div",{key:t},[i(k,{flat:!0,dense:!0,noCaps:!0,label:e,tabindex:m.value,..._("view#"+a,{onClick:()=>{b.value=a}})})]))]),i("div",{class:"row items-center q-date__arrow"},[i(k,{round:!0,dense:!0,size:"sm",flat:!0,icon:ae.value[1],tabindex:m.value,disable:d.next===!1,..._("go+#"+a,{onClick(){o(1)}})})])]}const ta={Calendar:()=>[i("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[i("div",{class:"q-date__navigation row items-center no-wrap"},ye({label:f.value.months[u.value.month-1],type:"Months",key:u.value.month,dir:X.value,goTo:Ye,boundaries:ve.value.month,cls:" col"}).concat(ye({label:u.value.year,type:"Years",key:u.value.year,dir:re.value,goTo:fe,boundaries:ve.value.year,cls:""}))),i("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},We.value.map(e=>i("div",{class:"q-date__calendar-item"},[i("div",e)]))),i("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[i(U,{name:"q-transition--slide-"+X.value},()=>i("div",{key:D.value,class:"q-date__calendar-days fit"},Me.value.map(e=>i("div",{class:e.classes},[e.in===!0?i(k,{class:e.today===!0?"q-date__today":"",dense:!0,flat:e.flat,unelevated:e.unelevated,color:e.color,textColor:e.textColor,label:e.i,tabindex:m.value,..._("day#"+e.i,{onClick:()=>{na(e.i)},onMouseover:()=>{la(e.i)}})},e.event!==!1?()=>i("div",{class:"q-date__event bg-"+e.event}):null):i("div",""+e.i)]))))])])],Months(){const e=u.value.year===M.value.year,a=l=>h.value!==null&&u.value.year===h.value.year&&h.value.month>l||y.value!==null&&u.value.year===y.value.year&&y.value.month<l,t=f.value.monthsShort.map((l,o)=>{const d=u.value.month===o+1;return i("div",{class:"q-date__months-item flex flex-center"},[i(k,{class:e===!0&&M.value.month===o+1?"q-date__today":null,flat:d!==!0,label:l,unelevated:d,color:d===!0?O.value:null,textColor:d===!0?E.value:null,tabindex:m.value,disable:a(o+1),..._("month#"+o,{onClick:()=>{pe(o+1)}})})])});return n.yearsInMonthView===!0&&t.unshift(i("div",{class:"row no-wrap full-width"},[ye({label:u.value.year,type:"Years",key:u.value.year,dir:re.value,goTo:fe,boundaries:ve.value.year,cls:" col"})])),i("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},t)},Years(){const e=Z.value,a=e+F,t=[],l=o=>h.value!==null&&h.value.year>o||y.value!==null&&y.value.year<o;for(let o=e;o<=a;o++){const d=u.value.year===o;t.push(i("div",{class:"q-date__years-item flex flex-center"},[i(k,{key:"yr"+o,class:M.value.year===o?"q-date__today":null,flat:!d,label:o,dense:!0,unelevated:d,color:d===!0?O.value:null,textColor:d===!0?E.value:null,tabindex:m.value,disable:l(o),..._("yr#"+o,{onClick:()=>{Ze(o)}})})]))}return i("div",{class:"q-date__view q-date__years flex flex-center"},[i("div",{class:"col-auto"},[i(k,{round:!0,dense:!0,flat:!0,icon:ae.value[0],tabindex:m.value,disable:l(e),..._("y-",{onClick:()=>{Z.value-=F}})})]),i("div",{class:"q-date__years-content col self-stretch row items-center"},t),i("div",{class:"col-auto"},[i(k,{round:!0,dense:!0,flat:!0,icon:ae.value[1],tabindex:m.value,disable:l(a),..._("y+",{onClick:()=>{Z.value+=F}})})])])}};function na(e){const a={...u.value,day:e};if(n.range===!1){ea(a,D.value);return}if(g.value===null){const t=Me.value.find(o=>o.fill!==!0&&o.i===e);if(n.noUnset!==!0&&t.range!==void 0){he({target:a,from:t.range.from,to:t.range.to});return}if(t.selected===!0){he(a);return}const l=V(a);g.value={init:a,initHash:l,final:a,finalHash:l},x("rangeStart",T(a))}else{const t=g.value.initHash,l=V(a),o=t<=l?{from:g.value.init,to:a}:{from:a,to:g.value.init};g.value=null,me(t===l?a:{target:a,...o}),x("rangeEnd",{from:T(o.from),to:T(o.to)})}}function la(e){if(g.value!==null){const a={...u.value,day:e};Object.assign(g.value,{final:a,finalHash:V(a)})}}return Object.assign(W,{setToday:Ce,setView:Ke,offsetCalendar:Ge,setCalendarTo:de,setEditingRange:Xe}),()=>{const e=[i("div",{class:"q-date__content col relative-position"},[i(U,{name:"q-transition--fade"},ta[b.value])])],a=ha(K.default);return a!==void 0&&e.push(i("div",{class:"q-date__actions"},a)),n.name!==void 0&&n.disable!==!0&&$e(e,"push"),i("div",{class:Re.value,...Ue.value},[aa(),i("div",{ref:oe,class:"q-date__main col column",tabindex:-1},e)])}}});export{Ca as Q,wa as a,qa as b,V as g,Da as u};