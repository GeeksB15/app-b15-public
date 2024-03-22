import{_ as P,p as b,o as h,d as y,x as k,f as e,w as a,e as s,j as q,F as C,r as w,i as A,t as F,D as x,l as z,Q as B,n as U,I as E,s as j,B as Q,E as R,C as L,L as O,aS as D,y as S}from"./index.83d285ce.js";import{B as M}from"./BadgeCopiarUid.9f602020.js";import{g as T,a as I,b as J}from"./g-label.15a71a97.js";const $={components:{BadgeCopiarUid:M,"g-row":T,"g-col":I,"g-label":J},data(){return{campanha:{aniversario:{ativo:!1,mensagem:""},receitaVencida:{ativo:!1,mensagem:""},posVenda:[{ativo:!1,mensagem:"",dias:""}],cobranca:[{ativo:!1,mensagem:"",dias:""}]},campanhaAnexos:[],sistemaPai:null,visivel:!1}},methods:{posVenda_remover(n,o){$q.dialog({title:"Remover",message:"Ao continuar voc\xEA ir\xE1 remover este item.",cancel:{label:"N\xE3o",push:!0,color:"tertiary",flat:!0},ok:{label:"Sim",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(()=>{try{n.splice(o,1)}catch(i){i.message&&$q.notifyError("Ocorreu um erro ao remover item",i)}})},cobranca_remover(n,o){$q.dialog({title:"Remover",message:"Ao continuar voc\xEA ir\xE1 remover este item.",cancel:{label:"N\xE3o",push:!0,color:"tertiary",flat:!0},ok:{label:"Sim",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(()=>{try{n.splice(o,1)}catch(i){i.message&&$q.notifyError("Ocorreu um erro ao remover item",i)}})},async getConfiguracoes(){const n={aniversario:{ativo:!1,mensagem:""},receitaVencida:{ativo:!1,mensagem:""},posVenda:[{ativo:!1,mensagem:"",dias:""}],cobranca:[{ativo:!1,mensagem:"",dias:""}]};try{const o=JSON.parse((await $utils.geeksApi({campanhaConfigLer:{funcao:"731956A6-CAD8-474E-8C88-5BD77F755B33"}})).data.campanhaConfigLer.json);this.campanha={...n,...o},this.campanhaAnexos=await this.anexoLer()}catch(o){console.error(o)}},async salvarConfiguracoes(){try{const n=await this.$utils.geeksApi({upinsert:{funcao:"5E40D7B0-13BB-452A-AF19-58AC49F024CA",...this.campanha}});$q.notifyPositive("Campanhas salvas com sucesso!")}catch(n){console.log(n.message),this.$q.notifyError("N\xE3o foi poss\xEDvel salvar as altera\xE7\xF5es.")}},async anexar_click(){this.campanha.id,this.visivel=!0},async anexar(n){const i={anexo:await this.toBase64(n[0]),nomeArquivo:n[0].name},v={id:$utils.uuid(),referencia:"campanha_configuracoes_anexo",observacao:"",json:JSON.stringify(i)};await this.$utils.geeksApi({"anexo-insert":{funcao:"D0B258A0-1FC5-4DB0-A5BA-2DE37102792B",...v}}),await this.getConfiguracoes(),this.visivel=!1},toBase64(n){return console.log("base 64"),new Promise((o,i)=>{const v=new FileReader;v.readAsDataURL(n),v.onload=()=>o(v.result),v.onerror=r=>i(r)})},async anexoLer(){const o=(await $utils.geeksApi({get:{funcao:"69EF7937-5BBD-4228-A5B3-1CD78310B834"}})).data.get;let i=[];return o&&i.push({id:o.id,json:JSON.parse(o.json)}),i},async anexoDownload(n){let o=document.createElement("a");o.href=n.json.anexo,o.download=n.json.nomeArquivo,o.click()},async anexoRemove(n){this.$q.dialog({cancel:{label:"Manter",push:!0,color:"tertiary",flat:!0},title:"Tem certeza?",message:"Ao continuar voc\xEA ir\xE1 perder esse anexo.",ok:{label:"Continuar",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(async()=>{try{this.$q.loading.show(),console.log(`removendo anexo ${n.json.nomeArquivo}`);const o=await $utils.geeksApi({ret:{funcao:"1240E168-BF7F-4B42-A1E7-133372D94A7F",id:n.id}});await this.getConfiguracoes()}finally{this.$q.loading.hide()}})},uploadClick(){this.$refs.Upload.click()},async abrirArquivo(n){const o=this.$refs.Upload.files;if(FileReader&&o&&o.length){var i=new FileReader;i.onload=()=>{},i.readAsDataURL(o[0]),await this.anexar(o)}}},async created(){await this.getConfiguracoes(),this.sistemaPai=$utils.sistemaPai()}},H={class:"u-container"};function G(n,o,i,v,r,g){const p=b("g-label"),l=b("g-col"),_=b("campo"),d=b("badge"),N=b("BadgeCopiarUid"),c=b("g-row");return h(),y(C,null,[k("div",H,[e(c,{gutter:"md",mg:"md-y",items:"center",bg:"bg-white",bordered:"","rounded-borders":""},{default:a(()=>[e(l,{col:"shrink"},{default:a(()=>[e(p,{text:"h6"},{default:a(()=>[s("Aniversariantes")]),_:1})]),_:1}),e(l,{col:"grow"},{default:a(()=>[e(_,{modelValue:r.campanha.aniversario.ativo,"onUpdate:modelValue":o[0]||(o[0]=t=>r.campanha.aniversario.ativo=t),tipo:"logico",noDense:""},null,8,["modelValue"])]),_:1}),e(l,{col:"12"},{default:a(()=>[e(_,{modelValue:r.campanha.aniversario.mensagem,"onUpdate:modelValue":o[1]||(o[1]=t=>r.campanha.aniversario.mensagem=t),tipo:"textoArea",rotulo:"Mensagem",rows:"5",denso:""},null,8,["modelValue"])]),_:1}),e(l,{col:"12"},{default:a(()=>[e(p,{text:"caption"},{default:a(()=>[s(" Voc\xEA pode usar os seguintes argumentos na mensagem para deixar ainda mais personalizado sua campanha: "),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[Nome]")]),_:1}),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[PrimeiroNome]")]),_:1}),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[Apelido]")]),_:1}),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[PrimeiroApelido]")]),_:1})]),_:1})]),_:1}),e(l,{col:"12"},{default:a(()=>[e(p,{onClick:g.uploadClick,text:"medium center",class:"cursor-pointer itemHover",bordered:""},{default:a(()=>[e(q,{name:"image",size:"xs"}),s(" Anexos"),e(q,{name:"add",size:"xs",right:""})]),_:1},8,["onClick"]),k("input",{ref:"Upload",type:"file",id:"Upload",onChange:o[2]||(o[2]=(...t)=>g.abrirArquivo&&g.abrirArquivo(...t)),style:{visibility:"hidden"}},null,544),(h(!0),y(C,null,w(r.campanhaAnexos,t=>(h(),A(c,{key:t,gutter:"none-x none-y",mg:"sm-t",items:"center","no-wrap":"",bordered:"bottom"},{default:a(()=>[e(l,{col:"shrink",text:"center"},{default:a(()=>{var f,u;return[e(N,{id:(f=t==null?void 0:t.id)!=null?f:"",numero:((u=t==null?void 0:t.id)!=null?u:"").slice(-8),cor:"positive"},null,8,["id","numero"])]}),_:2},1024),e(l,{col:"xs",onClick:f=>g.anexoDownload(t)},{default:a(()=>[e(p,{text:"bold",lines:"1",class:"q-mx-xs"},{default:a(()=>[s(F(t.json.nomeArquivo),1)]),_:2},1024)]),_:2},1032,["onClick"]),e(l,{col:"shrink"},{default:a(()=>[e(x,{onClick:f=>g.anexoRemove(t),icon:"delete",size:"md",color:"tertiary",round:"",flat:"",dense:""},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),r.sistemaPai==="optisoul"?(h(),A(c,{key:0,gutter:"md",mg:"md-y",items:"center",bg:"bg-white",bordered:"","rounded-borders":""},{default:a(()=>[e(l,{col:"shrink"},{default:a(()=>[e(p,{text:"h6"},{default:a(()=>[s("Receita Vencida")]),_:1})]),_:1}),e(l,{col:"grow"},{default:a(()=>[e(_,{modelValue:r.campanha.receitaVencida.ativo,"onUpdate:modelValue":o[3]||(o[3]=t=>r.campanha.receitaVencida.ativo=t),tipo:"logico",noDense:""},null,8,["modelValue"])]),_:1}),e(l,{col:"12"},{default:a(()=>[e(_,{modelValue:r.campanha.receitaVencida.mensagem,"onUpdate:modelValue":o[4]||(o[4]=t=>r.campanha.receitaVencida.mensagem=t),tipo:"textoArea",rotulo:"Mensagem",rows:"5",dense:""},null,8,["modelValue"])]),_:1}),e(l,{col:"12"},{default:a(()=>[e(p,{text:"caption"},{default:a(()=>[s(" Voc\xEA pode usar os seguintes argumentos na mensagem para deixar ainda mais personalizado sua campanha: "),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[Nome]")]),_:1}),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[PrimeiroNome]")]),_:1}),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[Apelido]")]),_:1}),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[PrimeiroApelido]")]),_:1})]),_:1})]),_:1})]),_:1})):z("",!0),e(c,{gutter:"md",mg:"md-y",bg:"bg-white",bordered:"","rounded-borders":""},{default:a(()=>{var t,f;return[e(l,{col:"12"},{default:a(()=>[e(p,{text:"h6"},{default:a(()=>[s("P\xF3s Venda")]),_:1})]),_:1}),e(l,{col:"12"},{default:a(()=>[(h(!0),y(C,null,w(r.campanha.posVenda,(u,V)=>(h(),A(c,{gutter:"md",key:V,items:"top",mg:"lg-b",bg:"bg-light","rounded-borders":""},{default:a(()=>[e(l,{col:"grow sm3 md2",order:"0 sm0"},{default:a(()=>[e(c,null,{default:a(()=>[e(l,null,{default:a(()=>[e(_,{modelValue:u.ativo,"onUpdate:modelValue":m=>u.ativo=m,tipo:"logico",dense:"",style:{"margin-bottom":"3.7px"}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(c,null,{default:a(()=>[e(l,null,{default:a(()=>[e(_,{modelValue:u.dias,"onUpdate:modelValue":m=>u.dias=m,min:0,tipo:"quantidade",rotulo:"Dias"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(l,{col:"12 sm-grow",order:"2 sm2"},{default:a(()=>[e(B,{modelValue:u.mensagem,"onUpdate:modelValue":m=>u.mensagem=m,type:"textarea",label:"Mensagem",rows:"3",dense:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(l,{col:"shrink",order:"1 sm3",text:"right"},{default:a(()=>[e(x,{onClick:m=>g.posVenda_remover(this.campanha.posVenda,V),icon:"remove",round:"",size:"sm",color:"negative",outline:"",dense:""},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(l,{col:"12",class:U([((f=(t=r.campanha)==null?void 0:t.posVenda)==null?void 0:f.length)>0?"lg-t-ng":"","q-mb-md"])},{default:a(()=>[e(p,{text:"caption"},{default:a(()=>[s(" Voc\xEA pode usar os seguintes argumentos na mensagem para deixar ainda mais personalizado sua campanha: "),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[Nome]")]),_:1}),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[PrimeiroNome]")]),_:1}),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[Apelido]")]),_:1}),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[PrimeiroApelido]")]),_:1})]),_:1})]),_:1},8,["class"]),e(l,{col:"12",text:"center"},{default:a(()=>[e(x,{onClick:o[5]||(o[5]=()=>{this.campanha.posVenda.push({ativo:!0,mensagem:"",dias:""})}),icon:"add",size:"sm",label:"Adicionar",color:"positive",outline:""})]),_:1})]}),_:1}),e(c,{gutter:"md",mg:"md-y",bg:"bg-white",bordered:"","rounded-borders":""},{default:a(()=>{var t,f;return[e(l,{col:"12"},{default:a(()=>[e(p,{text:"h6"},{default:a(()=>[s("Cobran\xE7a")]),_:1})]),_:1}),e(l,{col:"12"},{default:a(()=>[(h(!0),y(C,null,w(r.campanha.cobranca,(u,V)=>(h(),A(c,{gutter:"md",key:V,items:"top",mg:"lg-b",bg:"bg-light","rounded-borders":""},{default:a(()=>[e(l,{col:"grow sm3 md2",order:"0 sm0"},{default:a(()=>[e(c,null,{default:a(()=>[e(l,null,{default:a(()=>[e(_,{modelValue:u.ativo,"onUpdate:modelValue":m=>u.ativo=m,tipo:"logico",Dense:"",style:{"margin-bottom":"3.7px"}},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(c,null,{default:a(()=>[e(l,null,{default:a(()=>[e(_,{modelValue:u.dias,"onUpdate:modelValue":m=>u.dias=m,min:0,tipo:"quantidade",rotulo:"Dias"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(l,{col:"12 sm-grow",order:"2 sm2"},{default:a(()=>[e(B,{modelValue:u.mensagem,"onUpdate:modelValue":m=>u.mensagem=m,type:"textarea",label:"Mensagem",rows:"3",dense:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(l,{col:"shrink",order:"1 sm3",text:"right"},{default:a(()=>[e(x,{onClick:m=>g.cobranca_remover(this.campanha.cobranca,V),icon:"remove",round:"",size:"sm",color:"negative",outline:"",dense:""},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(l,{col:"12",class:U([((f=(t=r.campanha)==null?void 0:t.cobranca)==null?void 0:f.length)>0?"lg-t-ng":"","q-mb-md"])},{default:a(()=>[e(p,{text:"caption"},{default:a(()=>[s(" Voc\xEA pode usar os seguintes argumentos na mensagem para deixar ainda mais personalizado sua campanha: "),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[Nome]")]),_:1}),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[PrimeiroNome]")]),_:1}),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[Apelido]")]),_:1}),e(d,{class:"q-mr-xs"},{default:a(()=>[s("[PrimeiroApelido]")]),_:1})]),_:1})]),_:1},8,["class"]),e(l,{col:"12",text:"center"},{default:a(()=>[e(x,{onClick:o[6]||(o[6]=()=>{this.campanha.cobranca.push({ativo:!0,mensagem:"",dias:""})}),icon:"add",size:"sm",label:"Adicionar",color:"positive",outline:""})]),_:1})]}),_:1})]),e(E,{class:"bg-light no-shadow q-pa-sm text-right",bordered:""},{default:a(()=>[e(c,{gutter:"sm",class:"u-container"},{default:a(()=>[e(l,null,{default:a(()=>[e(x,{onClick:o[7]||(o[7]=t=>g.salvarConfiguracoes()),label:"Salvar",color:"primary","text-color":"text-white",unelevated:""})]),_:1})]),_:1})]),_:1}),e(S,{modelValue:r.visivel,"onUpdate:modelValue":o[8]||(o[8]=t=>r.visivel=t)},{default:a(()=>[e(j,null,{default:a(()=>[e(Q,null,{default:a(()=>[e(R,null,{default:a(()=>[s("Anexar")]),_:1}),L(e(x,{dense:"",flat:"",icon:"close",round:""},null,512),[[O]])]),_:1}),e(D,{"auto-expand":"",color:"none",class:"mobile-only",label:"Foto","hide-upload-btn":"","hide-upload-progress":"","dark-light":"",factory:g.anexar},null,8,["factory"]),e(D,{"auto-expand":"",color:"none",class:"mobile-hide",extensions:".jpg,.mp3,.mp4",label:"Anexo","hide-upload-btn":"","auto-upload":"","dark-light":"",factory:g.anexar},null,8,["factory"])]),_:1})]),_:1},8,["modelValue"])],64)}var Y=P($,[["render",G],["__scopeId","data-v-2e50d178"]]);export{Y as default};