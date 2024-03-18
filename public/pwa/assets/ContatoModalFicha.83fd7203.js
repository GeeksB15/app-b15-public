import{_ as h,p as _,o as r,i as n,w as t,f as a,K as v,G as y,A as Q,B as C,C as u,D as d,L as c,E as g,e as f,t as z,aF as b,ai as k,aj as w,ak as p,j as q,ah as F,H as L,y as x}from"./index.fd6a1d5c.js";import D from"./ContatoFicha.a43659eb.js";const I={components:{ContatoFicha:D},data(){return{id:"",contato:{},visivel:!1}},emits:["atualizar"],methods:{fechar(){this.visivel=!1,this.$router.replace({params:{id:null}}).finally(()=>{this.$emit("atualizar")}),this.atualizarLista&&this.atualizarLista()},async duplicarItem(e){try{let o=await $db.item.duplica(e);await this.atualizar(o),$q.notifyPositive("O produto foi duplicado com sucesso.")}catch(o){$q.notifyError("Ocorreu erro ao duplicar Produto",o)}},async atualizar({id:e}){this.id=e;try{this.$q.loading.show()}finally{this.$q.loading.hide()}},async show({id:e}){return this.visivel=!0,this.id=e,this.atualizar({id:e})}},props:{atualizarLista:{required:!1,type:Function}}};function $(e,o,P,V,i,l){const m=_("contatoFicha");return r(),n(x,{modelValue:i.visivel,"onUpdate:modelValue":o[1]||(o[1]=s=>i.visivel=s),maximized:""},{default:t(()=>[a(v,{class:"bg-light",container:""},{default:t(()=>[a(y,{class:"u-container"},{default:t(()=>[a(Q,{class:"bg-gradiente"},{default:t(()=>[a(C,{class:"no-shadow q-px-none q-py-sm",color:"transparent"},{default:t(()=>[u(a(d,{dense:"",flat:"",icon:"arrow_back",round:"",onClick:l.fechar},null,8,["onClick"]),[[c]]),a(g,null,{default:t(()=>[f(z(i.contato.nome||"Contato"),1)]),_:1}),a(d,{dense:"",flat:"",icon:"more_vert",round:"",size:"md"},{default:t(()=>[a(b,null,{default:t(()=>[a(k,{link:"","no-border":"",separator:""},{default:t(()=>[u((r(),n(w,{clickable:"",onClick:o[0]||(o[0]=s=>l.duplicarItem(e.item.id))},{default:t(()=>[a(p,{avatar:""},{default:t(()=>[a(q,{name:"control_point_duplicate"})]),_:1}),a(p,null,{default:t(()=>[a(F,null,{default:t(()=>[f("Duplicar Contato")]),_:1})]),_:1})]),_:1})),[[c]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(L,null,{default:t(()=>[a(m,{ref:"modalContatoFicha",id:i.id},null,8,["id"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}var j=h(I,[["render",$]]);export{j as m};
