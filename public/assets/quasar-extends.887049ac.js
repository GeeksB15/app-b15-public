import{b as o}from"./index.83d285ce.js";import{Q as i,P as r,a as m,b as d,D as p,c as D,d as _,e as l,M as I,f as N,g as T,h as f,i as y,H as c,F as g,j as M,k as u,l as E,m as O,T as S,n as k,t as v,o as A,p as W,q as L,r as b,s as R,v as Y,u as H,w as P,x as h,y as U,z as q,A as w,B as x,C,E as F,G as $,I as B,J as X,K as j,L as K,N as V,O as G,R as Q,S as z,U as J,V as Z,W as aa,X as ea,Y as sa,Z as ta,_ as ia,$ as na,a0 as oa,a1 as ra,a2 as ma,a3 as da,a4 as pa,a5 as Da,a6 as _a,a7 as la,a8 as Ia,a9 as Na,aa as Ta,ab as fa,ac as ya,ad as ca,ae as ga,af as Ma,ag as ua,ah as Ea,ai as Oa,aj as Sa,ak as ka,al as va,am as Aa,an as Wa,ao as La,ap as ba,aq as Ra}from"./QCalendarDay.d2a95f23.js";const Ya="4.0.0-beta.16";var Ha={version:Ya,QCalendarDay:i,PARSE_REGEX:r,PARSE_DATE:m,PARSE_TIME:d,DAYS_IN_MONTH:p,DAYS_IN_MONTH_LEAP:D,DAYS_IN_MONTH_MIN:_,DAYS_IN_MONTH_MAX:l,MONTH_MAX:I,MONTH_MIN:N,DAY_MIN:T,DAYS_IN_WEEK:f,MINUTES_IN_HOUR:y,HOURS_IN_DAY:c,FIRST_HOUR:g,MILLISECONDS_IN_MINUTE:M,MILLISECONDS_IN_HOUR:u,MILLISECONDS_IN_DAY:E,MILLISECONDS_IN_WEEK:O,Timestamp:S,TimeObject:k,today:v,getStartOfWeek:A,getEndOfWeek:W,getStartOfMonth:L,getEndOfMonth:b,parseTime:R,validateTimestamp:Y,parsed:H,parseTimestamp:P,parseDate:h,getDayIdentifier:U,getTimeIdentifier:q,getDayTimeIdentifier:w,diffTimestamp:x,updateRelative:C,updateMinutes:F,updateWeekday:$,updateDayOfYear:B,updateWorkWeek:X,updateDisabled:j,updateFormatted:K,getDayOfYear:V,getWorkWeek:G,getWeekday:Q,isLeapYear:z,daysInMonth:J,copyTimestamp:Z,padNumber:aa,getDate:ea,getTime:sa,getDateTime:ta,nextDay:ia,prevDay:na,moveRelativeDays:oa,relativeDays:ra,findWeekday:ma,getWeekdaySkips:da,createDayList:pa,createIntervalList:Da,createNativeLocaleFormatter:_a,makeDate:la,makeDateTime:Ia,validateNumber:Na,maxTimestamp:Ta,minTimestamp:fa,isBetweenDates:ya,isOverlappingDates:ca,daysBetween:ga,weeksBetween:Ma,addToDate:ua,compareTimestamps:Ea,compareDate:Oa,compareTime:Sa,compareDateTime:ka,getWeekdayFormatter:va,getWeekdayNames:Aa,getMonthFormatter:Wa,getMonthNames:La,convertToUnit:ba,indexOf:Ra,install(t){t.component(i.name,i)}};var Ua=o(({app:t})=>{t.use(Ha);const e=t.config.globalProperties.$q;e.notifyAlert=function(a){return e.notify({message:a,type:"warning"})},e.notifyError=function(a,s={}){const n=s&&s.name&&["Alerta","ErroValidacao"].includes(s.name);return n&&(a=s.message),n||!s.stack?console.error("Mensagem ao usu\xE1rio:",a):console.error("Mensagem ao usu\xE1rio:",a,`
`,s.stack),e.notify({message:a,type:s.name==="Alerta"?"warning":"negative"}),a},e.notifyPositive=function(a){return e.notify({message:a,type:"positive"})},t.config.globalProperties.$q=e,globalThis.$q=e});export{Ua as default};