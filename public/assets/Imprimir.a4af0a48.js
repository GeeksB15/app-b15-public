import{_ as F,a as N,p as d,o as p,i as f,w as m,f as s,a1 as g,fX as y,c3 as $,A as w,B as _,D as h,E as C,e as k,t as x,l as v,C as V,x as E,b5 as q,G as z,K as j}from"./index.a5b30aa8.js";import{V as M}from"./Visualizador.30848f45.js";import{o as A}from"./open-url.00ace184.js";const L={data(){return{email:{de:"",para:"",assunto:"",mensagem:""},ruleObrigatorio:o=>(o||"").trim().length||"Preenchimento obrigat\xF3rio"}},methods:{async enviarNFeEmail(o){const{showLoading:e,successMsg:a,errorMsg:i}=o!=null?o:{};try{(e==null||e)&&$q.loading.show({message:"Envio de e-mail em andamento...",html:!0,boxClass:"bg-grey-2 text-grey-9",spinnerColor:"primary"});const t=[{name:`danfe_${this.nota.nNF}.pdf`,content:this.html,method:"html2pdf"}];for(const l of this.xmls)t.push({name:`${l.tipo}_${l.nNF}_${l.operacao}${l.nSeqEvento>1?"_"+l.nSeqEvento:""}.xml`,content:l.xmlProt});const r={host:"smtp.gmail.com",port:587,ssl:!0,auth:{user:"auto@geekssolucoes.com.br",pass:"xpto@9@9"},from:this.email.de,to:this.email.para,subject:this.email.assunto,text:this.email.mensagem,attachments:t},n=await N({baseURL:"https://api.b15.com.br",method:"post",url:"/email/v2",data:r});this.$q.notifyPositive((n==null?void 0:n.status)===200&&a?a:n.data.message)}catch(t){this.$q.notifyError(i||"Erro ao enviar e-mail",t)}finally{this.$q.loading.hide()}},async enviarNFeEmailAutomatico(o,e){var a,i,t,r,n,l,c;try{if(this.html=e,this.nota=await $db.hibrido.le({table:"documentoFiscalEletronico",id:o}),this.xmls=await $db.hibrido.lista({table:"documentoFiscalEletronicoXml",where:{idDocumentoFiscalEletronico:o}}),this.json=JSON.parse((a=this.nota.json)!=null?a:null),!((r=(t=(i=this.json)==null?void 0:i.infNFe)==null?void 0:t.dest)!=null&&r.email)){this.$q.notify({type:"warning",message:"Cliente sem e-mail cadastrado. XML e DANFE n\xE3o enviado automaticamente."});return}this.email={de:"Geeks Solu\xE7\xF5es <auto@geekssolucoes.com.br>",para:(c=(l=(n=this.json)==null?void 0:n.infNFe)==null?void 0:l.dest)==null?void 0:c.email,assunto:`Nota Fiscal Eletr\xF4nica N\xBA ${this.nota.nNF}`,mensagem:`Voc\xEA est\xE1 recebendo os arquivos digitais NFe (Nota Fiscal Eletr\xF4nica) da empresa ${this.nota.xFantEmitente}`},this.enviarNFeEmail({successMsg:`XML e DANFE enviados para ${this.email.para} com sucesso.`,errorMsg:"Erro ao enviar e-mail. XML e DANFE n\xE3o enviado automaticamente."})}catch(b){this.$q.notifyError("Erro ao abrir a nota",b)}},async abrirNFeEmail(o,e){try{this.html=e,this.nota=await $db.hibrido.le({table:"documentoFiscalEletronico",id:o}),this.xmls=await $db.hibrido.lista({table:"documentoFiscalEletronicoXml",where:{idDocumentoFiscalEletronico:o}}),this.json=JSON.parse(this.nota.json),this.email={de:"Geeks Solu\xE7\xF5es <auto@geekssolucoes.com.br>",para:this.$lodash.get(this.json,"infNFe.dest.email",""),assunto:`Nota Fiscal Eletr\xF4nica N\xBA ${this.nota.nNF}`,mensagem:`Voc\xEA est\xE1 recebendo os arquivos digitais NFe (Nota Fiscal Eletr\xF4nica) da empresa ${this.nota.xFantEmitente}`},this.$refs.dialogNFeEmail.show()}catch(a){this.$q.notifyError("Erro ao abrir a nota",a)}}},mounted(){$utils.emitter.off("abrirNFeEmail"),$utils.emitter.on("abrirNFeEmail",this.abrirNFeEmail),$utils.emitter.off("enviarNFeEmailAutomatico"),$utils.emitter.on("enviarNFeEmailAutomatico",this.enviarNFeEmailAutomatico)},beforeUnmount(){$utils.emitter.off("enviarNFeEmailAutomatico"),$utils.emitter.off("abrirNFeEmail")}};function S(o,e,a,i,t,r){const n=d("campo"),l=d("row"),c=d("card"),b=d("dialogForm");return p(),f(b,{ref:"dialogNFeEmail",title:"Nota Fiscal / Email",labelButtonSubmit:"Enviar",size:"md",onSubmit:r.enviarNFeEmail},{default:m(()=>[s(c,null,{default:m(()=>[s(l,{class:"q-col-gutter-y-md"},{default:m(()=>[s(n,{modelValue:t.email.de,"onUpdate:modelValue":e[0]||(e[0]=u=>t.email.de=u),col:"12",rotulo:"De","somente-leitura":""},null,8,["modelValue"]),s(n,{modelValue:t.email.para,"onUpdate:modelValue":e[1]||(e[1]=u=>t.email.para=u),col:"12",rotulo:"Para",rules:[t.ruleObrigatorio]},null,8,["modelValue","rules"]),s(n,{modelValue:t.email.assunto,"onUpdate:modelValue":e[2]||(e[2]=u=>t.email.assunto=u),col:"12",rotulo:"Assunto",rules:[t.ruleObrigatorio]},null,8,["modelValue","rules"]),s(n,{modelValue:t.email.mensagem,"onUpdate:modelValue":e[3]||(e[3]=u=>t.email.mensagem=u),col:"12",rotulo:"Mensagem",tipo:"textoArea",autogrow:"",autofocus:"",rules:[t.ruleObrigatorio]},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])}var I=F(L,[["render",S]]);const O={components:{NFeEmail:I,Visualizador:M},computed:{nome(){return this.$route.params.nome},parametro(){const{parametro:o}=this.$route.params;return o?g.decodeFromUrl(o):""}},data(){return{botaoImprimir:!0,componente:null,objeto:{},urlCompartilhamento:""}},methods:{async visualizadorIsMounted(){if(this.nome==="nfe-danfe"&&y()==="emitirNFe"){let o,e=0,a;await new Promise((i,t)=>{o=this.$refs.visualizador.$el.contentWindow.document.body.innerHTML,a=setInterval(()=>{if(e===3){clearInterval(a),i();return}const r=this.$refs.visualizador.$el.contentWindow.document.body.innerHTML;o.length===r.length&&e++,o.length!==r.length&&(e=0),o=r},50)}),$utils.emitter.emit("enviarNFeEmailAutomatico",this.parametro,o)}},abrirNFeEmail(){$utils.emitter.emit("abrirNFeEmail",this.parametro,this.$refs.visualizador.$el.contentWindow.document.body.innerHTML)},async carregarObjeto(o){try{const e=await $.objeto.le({filtros:{nomeObjeto:o,tipo:"vue"}});if(!e||!e[0]||!e[0].codigoPersonalizado)return this.$q.notify("Relat\xF3rio indispon\xEDvel ou sem permiss\xE3o");this.objeto=e[0];const a=JSON.parse(g.decode(e[0].codigoPersonalizado));this.componente={parametro:this.parametro,estilo:a.estilo,script:a.script,template:a.template}}catch(e){throw this.$q.notify("N\xE3o foi poss\xEDvel carregar o relat\xF3rio"),e}},async copiarLink(){const o=this.$refs.urlCompartilhamento;o.type="text",await this.$nextTick();try{o.select(),document.execCommand("copy"),this.$q.notify({message:"Copiado para a \xE1rea de transfer\xEAncia",type:"info"})}catch(e){this.$q.notifyError("Erro ao copiar",e)}o.type="hidden",window.getSelection().removeAllRanges()},async compartilhar(){let o="";try{this.$q.loading.show();const i=this.$refs.visualizador.$el.contentWindow.document.body.innerHTML;o=(await N({baseURL:"https://api.b15.com.br",method:"post",url:"/html2pdf",data:{html:i}})).data.url,this.urlCompartilhamento=o}catch(i){return this.$q.notifyError("Erro ao gerar o link de compartilhamento.",i)}finally{this.$q.loading.hide()}const e=this.objeto.descricao||"Relat\xF3rio",a=[{label:"Copiar link",icon:"link",handler:this.copiarLink},{color:"green",label:"WhatsApp",icon:"message",handler:()=>{const i=encodeURIComponent(`Acesse o *${e}* atrav\xE9s do link: ${o}.`);A(`https://wa.me/?text=${i}`)}}];navigator.share&&a.push({label:"Outros",icon:"more_horiz",handler:()=>{navigator.share({title:e,url:o})}}),this.$q.bottomSheet({grid:!0,title:"Compartilhar",actions:a}).onOk(i=>{console.log("bottomSheet chosen:",i),i.handler()})},imprimirVisualizador(){if(window.cordova&&window.cordova.plugins&&window.cordova.plugins.printer){const o=this.$refs.visualizador.$el.contentWindow.document.body.innerHTML;return cordova.plugins.printer.print(o)}this.$refs.visualizador.$el.contentWindow.print()},voltar(){window&&window.history.back()}},created(){if(this.nome&&this.nome!=="0")return this.carregarObjeto(this.nome);this.$q.notify("Relat\xF3rio inv\xE1lido")}},T={class:"Imprimir-visualizador"};function U(o,e,a,i,t,r){const n=d("visualizador"),l=d("NFeEmail");return p(),f(j,{class:"Imprimir bg-white"},{default:m(()=>[s(w,{class:"Imprimir-barraTopo"},{default:m(()=>[s(_,{color:"primary"},{default:m(()=>[s(h,{dense:"",flat:"",icon:"arrow_back",round:"",onClick:r.voltar},null,8,["onClick"]),s(C,null,{default:m(()=>[k(x(t.objeto.descricao||"Relat\xF3rio"),1)]),_:1}),r.nome==="nfe-danfe"?(p(),f(h,{key:0,color:"white",flat:"",label:"Email",icon:"email",onClick:r.abrirNFeEmail},null,8,["onClick"])):v("",!0),s(h,{color:"white",flat:"",label:"Compartilhar",icon:"share",onClick:e[0]||(e[0]=c=>o.tryLoading(r.compartilhar))}),s(h,{color:"white",flat:"",label:"Imprimir",icon:"print",onClick:r.imprimirVisualizador},null,8,["onClick"]),V(E("input",{ref:"urlCompartilhamento",type:"hidden","onUpdate:modelValue":e[1]||(e[1]=c=>t.urlCompartilhamento=c)},null,512),[[q,t.urlCompartilhamento]])]),_:1})]),_:1}),s(z,{class:"Imprimir-pagina"},{default:m(()=>[E("div",T,[t.componente?(p(),f(n,{key:0,ref:"visualizador",componente:t.componente,onMounted:r.visualizadorIsMounted},null,8,["componente","onMounted"])):v("",!0)])]),_:1}),s(l)]),_:1})}var W=F(O,[["render",U]]);export{W as default};
