import{_ as l,o as s,i,w as c,d as n,x as m,l as d,H as u}from"./index.fd6a1d5c.js";const f={components:{},data(){return{start:!1}},methods:{async menu_click(t){$q.loading.show(),await $utils.dormir(250);const e=new Date;for(this.start||(this.start=!0,localStorage.setItem("plat15message",""),await new Promise(async(a,o)=>{for(;localStorage.getItem("plat15message","")===""&&new Date-e<1e4;)await $utils.dormir(500);a()})),localStorage.setItem("plat15message",""),this.$refs.quadro.contentWindow.postMessage({objeto:t.objeto},"*");localStorage.getItem("plat15message","")===""&&new Date-e<1e4;)await $utils.dormir(500);$q.loading.hide()}},mounted(){}},p={key:0},_={class:"Plataforma15-quadro",ref:"quadro",src:"/statics/plat15/Index.html",frameborder:"0"};function g(t,e,a,o,r,h){return s(),i(u,{class:"Plataforma15"},{default:c(()=>[r.start?(s(),n("div",p,[m("iframe",_,null,512)])):d("",!0)]),_:1})}var $=l(f,[["render",g]]);export{$ as P};
