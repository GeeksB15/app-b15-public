import{_ as y,o as d,i as v,w as s,f as t,aj as L,X,aY as Y,ak as k,ah as I,e as g,t as M,U as H,p as u,s as P,B as q,E as A,C as D,D as C,L as _,aK as z,x as m,V as G,d as x,y as O,z as T,cJ as $,cn as U,ch as Z,cg as V,cK as aa,cL as F,F as E,r as w,u as S,ai as N,l as Q}from"./index.fd6a1d5c.js";import{C as oa}from"./CaixaFechar.8d0954c3.js";import{F as ea}from"./FaturaCard.97e00100.js";import{V as ia}from"./VendaCard.67cde7f9.js";import"./QSpinnerHourglass.508287ce.js";import"./QSpinnerDots.18744fcc.js";import"./DocumentosFiscais.e9fa3985.js";import"./Campo.1afe924c.js";import"./compactarValidarNFe.f5175039.js";import"./obterItens.fbc2a5f7.js";import"./codigosANP.a6c1a264.js";import"./emitirNFe.3ad8673b.js";import"./FaturaModal.9c519b64.js";import"./ModalHistoricoStatus.c069f569.js";const ta={data(){return{opcoes:[]}},emits:["update:modelValue"],methods:{async atualizar(o,a,n){let r=await $db.financeiroPlanoConta.le(this.filtro);r=r.map(e=>({id:e.id,apelido:e.apelido||"",descricao:e.descricao||"",caminho:e.caminho||"",codigoFinanceiroPlanoConta:e.codigoFinanceiroPlanoConta,textoPesquisa:($utils.removerAcentos((e.descricao||"").trim()+" "+(e.apelido||"").trim())+" "+String(e.codigoFinanceiroPlanoConta)).toLowerCase()})),o&&(r=r.filter(e=>e.textoPesquisa.includes(o))),r.sort((e,i)=>e.textoPesquisa<i.textoPesquisa?-1:1),this.opcoes=r,typeof a=="function"&&a()},selecionar(o){console.log(o),this.$emit("update:modelValue",o)}},props:{modelValue:{default:"",type:String},somenteLeitura:{type:Boolean},filtro:{default:()=>({}),type:Object},rotulo:{default:"",type:String}},created(){this.atualizar()}};function na(o,a,n,r,e,i){return d(),v(H,{"model-value":n.modelValue,options:e.opcoes,"option-value":"id","option-label":"descricao",onFilter:i.atualizar,"onUpdate:modelValue":i.selecionar,"emit-value":"","map-options":"","use-input":"","input-debounce":"400",label:n.rotulo},{option:s(l=>[t(L,X(Y(l.itemProps)),{default:s(()=>[t(k,null,{default:s(()=>[t(I,{header:""},{default:s(()=>[g(M((l.opt.apelido||"").trim()+" - "+(l.opt.descricao||"").trim()),1)]),_:2},1024),t(I,{caption:""},{default:s(()=>[g(M(l.opt.caminho),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),"no-option":s(()=>[t(L,null,{default:s(()=>[t(k,{class:"text-grey"},{default:s(()=>[g(" Resultado n\xE3o encontrado ")]),_:1})]),_:1})]),_:1},8,["model-value","options","onFilter","onUpdate:modelValue","label"])}var ra=y(ta,[["render",na]]);const sa={computed:{documentosCaixaEncontrados(){return!!this.documentosCaixa.filter(o=>o.valor).length}},data(){return{abrindo:!1,documentosCaixa:[],empresa:{},idDocumentoCaixa:"",msg:"",periodo:{},visivel:!1}},methods:{async abrir(){this.idDocumentoCaixa&&(this.abrindo=!0,this.$imprimir("conferencia-de-caixa",this.idDocumentoCaixa),this.visivel=!1)},async abrirModalContatoEmpresas(){if(this.abrindo)return;const o=await $g.promptContato.show({filtro:{ativo:!0,empresas:!0},placeholder:"Selecione a empresa"});this.selecionarEmpresa((o||{}).id)},async getDocumentosCaixa(){try{if(!this.empresa.id)return;this.documentosCaixa=[],this.idDocumentoCaixa="",this.msg="Carregando caixas...",await $utils.dormir(500);const o=await $db.hibrido.lista({table:"documento",where:{tipo:"Caixa",idEmpresa:this.empresa.id}}),a=new Date(new Date(this.periodo.de).toDateString()),n=new Date(new Date(this.periodo.ate).toDateString());let r=o.filter(e=>{const i=new Date(new Date(e.dataHoraFinalizado).toDateString());return["Aguardando Confer\xEAncia","Fechado"].includes(e.status)&&i>=a&&i<=n});r=$lodash.orderBy(r,"dataHoraFinalizado","desc");for(const e of r)e.rotulo=((await $db.caixa.le({id:e.idCaixa})||{}).descricao||"")+" - Fechado em "+this.$filters.dataHora(e.dataHoraFinalizado),e.valor=e.id;this.documentosCaixa=[{rotulo:"Selecione um caixa",valor:""},...r],this.documentosCaixaEncontrados||(this.msg="Nenhum caixa encontrado para este filtro")}catch{this.$q.notifyError("Erro ao carregar caixas.")}},limparSeletor(){this.documentosCaixa=this.documentosCaixa.filter(o=>o.valor)},async selecionarEmpresa(o){try{if(!o)return;const a=await $db.empresa.le({idContato:o});$utils.verificarErro(!a.length||!a[0].id,"N\xE3o foi poss\xEDvel recuperar os dados da empresa."),this.empresa={id:o,descricao:a[0].nome||"Empresa sem nome"},this.getDocumentosCaixa()}catch(a){this.limpar(),this.$q.notifyError("Erro ao selecionar a empresa.",a)}},mostrar(){this.visivel=!0},onShow(){this.limpar()},limpar(){this.abrindo=!1,this.empresa={id:"",descricao:""},this.idDocumentoCaixa="",this.documentosCaixa=[];const o=new Date;this.periodo={de:new Date(o.setDate(o.getDate()-7)),ate:new Date},this.msg="Preencha o filtro para buscar caixas"}}},la={class:"row"},ca={class:"col-6"},da={class:"col-6"},ma={key:1,class:"text-center q-mt-md"},ua={style:{"font-size":"80%"}},pa={class:"q-mt-lg text-center"};function ha(o,a,n,r,e,i){const l=u("campo");return d(),v(O,{modelValue:e.visivel,"onUpdate:modelValue":a[7]||(a[7]=c=>e.visivel=c),onShow:i.onShow,"content-css":{minWidth:"30vw"}},{default:s(()=>[t(P,null,{default:s(()=>[t(q,{class:"bg-primary text-white"},{default:s(()=>[t(A,null,{default:s(()=>[g("Confer\xEAncia de Caixa")]),_:1}),D(t(C,{dense:"",flat:"",icon:"close",round:""},null,512),[[_]])]),_:1}),t(z,null,{default:s(()=>[m("form",{class:"layout-padding",onSubmit:a[6]||(a[6]=G((...c)=>i.abrir&&i.abrir(...c),["prevent"]))},[t(l,{modelValue:e.empresa.descricao,"onUpdate:modelValue":a[0]||(a[0]=c=>e.empresa.descricao=c),before:[{icon:"search",handler:i.abrirModalContatoEmpresas}],placeholder:"Selecione","rotulo-fixo":e.empresa.descricao?"Empresa":"","somente-leitura":"",disable:e.abrindo},null,8,["modelValue","before","rotulo-fixo","disable"]),m("div",la,[m("div",ca,[t(l,{modelValue:e.periodo.de,"onUpdate:modelValue":[a[1]||(a[1]=c=>e.periodo.de=c),a[2]||(a[2]=c=>i.getDocumentosCaixa())],tipo:"data",rotulo:"De",disable:e.abrindo},null,8,["modelValue","disable"])]),m("div",da,[t(l,{modelValue:e.periodo.ate,"onUpdate:modelValue":[a[3]||(a[3]=c=>e.periodo.ate=c),a[4]||(a[4]=c=>i.getDocumentosCaixa())],tipo:"data",rotulo:"At\xE9",disable:e.abrindo},null,8,["modelValue","disable"])])]),i.documentosCaixaEncontrados?(d(),v(l,{key:0,modelValue:e.idDocumentoCaixa,"onUpdate:modelValue":[a[5]||(a[5]=c=>e.idDocumentoCaixa=c),i.limparSeletor],opcoes:e.documentosCaixa,tipo:"seletor",disable:e.abrindo},null,8,["modelValue","opcoes","disable","onUpdate:modelValue"])):(d(),x("div",ma,[m("span",ua,M(e.msg),1)])),m("div",pa,[t(C,{loading:e.abrindo,color:"primary",class:"q-ml-sm no-shadow",label:"Abrir",type:"submit",disable:!e.idDocumentoCaixa},null,8,["loading","disable"])])],32)]),_:1})]),_:1})]),_:1},8,["modelValue","onShow"])}var fa=y(sa,[["render",ha]]);const va={data(){return{visivel:!1,campos:{},contaOrigem:"",contaDestino:""}},methods:{async atualizar(){try{let o={},a={};o=await $db.hibrido.le({table:"documento",id:this.idDocumentoCaixa}),$utils.verificarAlerta(!(o.tipo==="Caixa"&&o.status==="Aberto"),"Selecione um caixa aberto"),$utils.verificarErro(!o.idEmpresa,"Caixa sem empresa"),a=await $db.caixa.le({id:o.idCaixa}),$utils.verificarErro(!a.id,"Caixa n\xE3o existe"),this.contaOrigem=await $db.financeiroPlanoConta.le({id:a.idPlanoConta}),this.contaDestino=await $db.financeiroPlanoConta.le({id:a.idPlanoContaSangria}),this.campos.valor=0,this.campos.descricao=`Transf. de ${this.contaOrigem.descricao.trim()||""} para ${this.contaDestino.descricao.trim()||""}`,this.idContatoEmpresa=o.idEmpresa;const n=await $db.empresa.le({idContato:this.idContatoEmpresa});$utils.verificarErro(!n||!n.length||!n[0].id,"Caixa sem empresa v\xE1lida"),this.idEmpresa=n[0].idContato,this.visivel=!0}catch(o){this.$q.notifyError("Erro no lancamento de Sangria",o)}},async lancar(){try{$q.loading.show({message:"Processando..."});const o=$utils.dataAtual(),a=(await $db.contato.le({numeroDocumentoNacional:$db.usuario.logado.numeroDocumentoNacional}))[0];$utils.verificarAlerta(!a,"Usu\xE1rio n\xE3o cadastrado"),$utils.verificarAlerta(!this.campos.valor,"Valor n\xE3o preenchido");const n={id:$utils.uuid(),idEmpresa:this.idEmpresa,tipo:"Financeiro",operacao:"Sangria",status:"Finalizado",dataHoraEmissao:o,dataHoraFinalizado:o,totalDocumento:this.campos.valor,idContato:a.id,descricao:`Sangria de ${a.nome} no Caixa #${this.idDocumentoCaixa}`,observacao:this.campos.observacao,idDocumentoAdicional:this.idDocumentoCaixa,idDocumentoOperacao:""},r=$utils.uuid(),e={id:$utils.uuid(),idFinanceiroMovimentacaoN:r,idEmpresa:this.idEmpresa,idContato:a.id,idFinanceiroPlanoConta:this.contaOrigem.id,dataEmissao:o,dataCompetencia:o,dataVencimento:o,dataMovimento:o,valorDebito:0,valorCredito:this.campos.valor,descricao:`${n.observacao?n.observacao+" | ":""}Sangria de ${a.nome} no Caixa #${this.idDocumentoCaixa}`,observacao:"Transfer\xEAncia entre contas",documentoTipo:"Sangria",documentoId:n.id,idDocumentoCaixa:this.idDocumentoCaixa},i={id:$utils.uuid(),idFinanceiroMovimentacaoN:r,idEmpresa:this.idEmpresa,idContato:a.id,idFinanceiroPlanoConta:this.contaDestino.id,dataEmissao:o,dataCompetencia:o,dataVencimento:o,dataMovimento:o,valorDebito:this.campos.valor,valorCredito:0,descricao:`${n.observacao?n.observacao+" | ":""}Sangria de ${a.nome} no Caixa #${this.idDocumentoCaixa}`,observacao:"Transfer\xEAncia entre contas",documentoTipo:"Sangria",documentoId:n.id,idDocumentoCaixa:this.idDocumentoCaixa};$db.financeiroMovimentacaoN.grava({atual:{id:r}}),$db.documento.grava({atual:n}),$db.financeiroMovimentacao.grava({atual:e}),$db.financeiroMovimentacao.grava({atual:i}),this.visivel=!1,$q.notifyPositive("Sangria lan\xE7ada com sucesso"),this.$imprimir("recibo-sangria-suprimento",{id:e.id})}catch(o){$q.notifyError("Erro no lancamento de Sangria",o)}finally{$q.loading.hide()}},mostrar(o){const{idDocumentoCaixa:a}=o;this.campos={valor:0,descricao:""},this.contaOrigem="",this.contaDestino="",this.idDocumentoCaixa=a,this.atualizar()}}},Ca={class:"col-12"},xa={class:"col-12"},ba={class:"q-mt-lg text-right"};function ga(o,a,n,r,e,i){const l=u("campo"),c=u("row");return d(),v(O,{modelValue:e.visivel,"onUpdate:modelValue":a[2]||(a[2]=p=>e.visivel=p)},{default:s(()=>[t(P,null,{default:s(()=>[t(q,{class:"bg-primary text-white"},{default:s(()=>[t(A,null,{default:s(()=>[g("Lan\xE7ar Sangria")]),_:1}),D(t(C,{dense:"",flat:"",icon:"close",round:""},null,512),[[_]])]),_:1}),t(z,null,{default:s(()=>[t(T,{onSubmit:i.lancar},{default:s(()=>[t(c,{class:"q-col-gutter-md"},{default:s(()=>[m("div",Ca,[t(l,{modelValue:e.campos.valor,"onUpdate:modelValue":a[0]||(a[0]=p=>e.campos.valor=p),before:[{icon:"attach_money"}],rotulo:"Valor",tipo:"decimal",decimals:"2"},null,8,["modelValue"])]),m("div",xa,[t(l,{modelValue:e.campos.observacao,"onUpdate:modelValue":a[1]||(a[1]=p=>e.campos.observacao=p),before:[{icon:"message"}],rotulo:"Observa\xE7\xE3o",tipo:"textoArea",rows:"3"},null,8,["modelValue"])])]),_:1}),m("div",ba,[D(t(C,{color:"tertiary",flat:"",label:"Cancelar"},null,512),[[_]]),t(C,{color:"primary",class:"q-ml-sm",unelevated:"",label:"Lan\xE7ar",type:"submit"})])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var Da=y(va,[["render",ga]]);const _a={data(){return{visivel:!1,campos:{},contaOrigem:"",contaDestino:"",idDocumentoCaixa:""}},methods:{async atualizar(){try{let o={},a={};o=await $db.hibrido.le({table:"documento",id:this.idDocumentoCaixa}),$utils.verificarAlerta(!(o.tipo==="Caixa"&&o.status==="Aberto"),"Selecione um caixa aberto"),$utils.verificarErro(!o.idEmpresa,"Caixa sem empresa"),a=await $db.caixa.le({id:o.idCaixa}),$utils.verificarErro(!a.id,"Caixa n\xE3o existe"),this.contaOrigem=await $db.financeiroPlanoConta.le({id:a.idPlanoContaSangria}),this.contaDestino=await $db.financeiroPlanoConta.le({id:a.idPlanoConta}),this.campos.valor=0,this.campos.descricao=`Transf. de ${this.contaOrigem.descricao.trim()||""} para ${this.contaDestino.descricao.trim()||""}`,this.idContatoEmpresa=o.idEmpresa;const n=await $db.empresa.le({idContato:this.idContatoEmpresa});$utils.verificarErro(!n||!n.length||!n[0].id,"Caixa sem empresa v\xE1lida"),this.idEmpresa=n[0].idContato,this.visivel=!0}catch(o){this.$q.notifyError("Erro no lancamento de Suprimento",o),this.eventoInput(!1)}},async lancar(o){o.preventDefault();try{$q.loading.show({message:"Processando..."});const a=$utils.dataAtual(),n=(await $db.contato.le({numeroDocumentoNacional:$db.usuario.logado.numeroDocumentoNacional}))[0];$utils.verificarAlerta(!n,"Usu\xE1rio n\xE3o cadastrado"),$utils.verificarAlerta(!this.campos.valor,"Valor n\xE3o preenchido");const r={id:$utils.uuid(),idEmpresa:this.idEmpresa,tipo:"Financeiro",operacao:"Suprimento",status:"Finalizado",dataHoraEmissao:a,dataHoraFinalizado:a,totalDocumento:this.campos.valor,idContato:n.id,descricao:`Suprimento de ${n.nome} no Caixa #${this.idDocumentoCaixa}`,observacao:this.campos.observacao,idDocumentoAdicional:this.idDocumentoCaixa,idDocumentoOperacao:""},e=$utils.uuid(),i={id:$utils.uuid(),idFinanceiroMovimentacaoN:e,idEmpresa:this.idEmpresa,idContato:n.id,idFinanceiroPlanoConta:this.contaOrigem.id,dataEmissao:a,dataCompetencia:a,dataVencimento:a,dataMovimento:a,valorDebito:0,valorCredito:this.campos.valor,descricao:`${r.observacao?r.observacao+" | ":""}Suprimento de ${n.nome} no Caixa #${this.idDocumentoCaixa}`,observacao:"Transfer\xEAncia entre contas",documentoTipo:"Suprimento",documentoId:r.id,idDocumentoCaixa:this.idDocumentoCaixa},l={id:$utils.uuid(),idFinanceiroMovimentacaoN:e,idEmpresa:this.idEmpresa,idContato:n.id,idFinanceiroPlanoConta:this.contaDestino.id,dataEmissao:a,dataCompetencia:a,dataVencimento:a,dataMovimento:a,valorDebito:this.campos.valor,valorCredito:0,descricao:`${r.observacao?r.observacao+" | ":""}Suprimento de ${n.nome} no Caixa #${this.idDocumentoCaixa}`,observacao:"Transfer\xEAncia entre contas",documentoTipo:"Suprimento",documentoId:r.id,idDocumentoCaixa:this.idDocumentoCaixa};$db.financeiroMovimentacaoN.grava({atual:{id:e}}),$db.documento.grava({atual:r}),$db.financeiroMovimentacao.grava({atual:i}),$db.financeiroMovimentacao.grava({atual:l}),this.visivel=!1,$q.notifyPositive("Suprimento lan\xE7ado com sucesso"),this.$imprimir("recibo-sangria-suprimento",{id:i.id})}catch(a){$q.notifyError("Erro no lancamento de Suprimento",a)}finally{$q.loading.hide()}},mostrar(o){const{idDocumentoCaixa:a}=o;this.campos={valor:0,descricao:""},this.contaOrigem="",this.contaDestino="",this.idDocumentoCaixa=a,this.atualizar()}}},$a={class:"col-12"},ya={class:"col-12"},Ea={class:"q-mt-lg text-right"};function wa(o,a,n,r,e,i){const l=u("campo"),c=u("row");return d(),v(O,{modelValue:e.visivel,"onUpdate:modelValue":a[2]||(a[2]=p=>e.visivel=p),"content-css":{minWidth:"30vw"}},{default:s(()=>[t(P,null,{default:s(()=>[t(q,{class:"bg-primary text-white"},{default:s(()=>[t(A,null,{default:s(()=>[g("Lan\xE7ar Suprimento")]),_:1}),D(t(C,{dense:"",flat:"",icon:"close",round:""},null,512),[[_]])]),_:1}),t(z,null,{default:s(()=>[t(T,{onSubmit:i.lancar},{default:s(()=>[t(c,{class:"q-col-gutter-md"},{default:s(()=>[m("div",$a,[t(l,{modelValue:e.campos.valor,"onUpdate:modelValue":a[0]||(a[0]=p=>e.campos.valor=p),before:[{icon:"attach_money"}],rotulo:"Valor",tipo:"decimal",decimals:"2"},null,8,["modelValue"])]),m("div",ya,[t(l,{modelValue:e.campos.observacao,"onUpdate:modelValue":a[1]||(a[1]=p=>e.campos.observacao=p),before:[{icon:"message"}],rotulo:"Observa\xE7\xE3o",tipo:"textoArea",rows:"3"},null,8,["modelValue"])])]),_:1}),m("div",Ea,[D(t(C,{color:"tertiary",flat:"",label:"Cancelar"},null,512),[[_]]),t(C,{color:"primary",class:"q-ml-sm",unelevated:"",label:"Lan\xE7ar",type:"submit"})])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var Va=y(_a,[["render",wa]]);const Fa={components:{seletorFinContas:ra},data(){return{campos:{idFinanceiroPlanoConta:"",valor:0,descricao:""},contaOrigem:{},contato:{nome:""},idEmpresa:"",idContatoEmpresa:"",idDocumentoCaixa:"",visivel:!1}},methods:{async atualizar(){try{let o=await $db.hibrido.le({table:"documento",id:this.idDocumentoCaixa});$(!(o.tipo==="Caixa"&&o.status==="Aberto"),"Selecione um caixa aberto"),U(!o.idEmpresa,"Caixa sem empresa");let a=await $db.caixa.le({id:o.idCaixa});U(!a.id,"Caixa n\xE3o existe"),this.contaOrigem=await $db.financeiroPlanoConta.le({id:a.idPlanoConta}),this.contato={},this.campos.valor=0,this.campos.descricao="",this.idContatoEmpresa=o.idEmpresa;const n=await $db.empresa.le({idContato:this.idContatoEmpresa});U(!n||!n.length||!n[0].id,"Caixa sem empresa v\xE1lida"),this.idEmpresa=n[0].idContato,this.visivel=!0}catch(o){this.$q.notifyError("Erro no lancamento de Despesa",o)}},async lancar(){try{$q.loading.show({message:"Processando..."});const o=Z(),a=V(),n=await $db.configuracoes.le({nome:"financeiro.planocontas.duplicatapagar"});$(!n||!n.length,"Falta configura\xE7\xE3o para 'financeiro.planocontas.duplicatapagar'");const r=await $db.financeiroPlanoConta.le({codigoFinanceiroPlanoConta:Number(n[0].valor)});$(!r||!r.id,"Falta plano de conta para 'financeiro.planocontas.duplicatapagar'"),$(!this.campos.idFinanceiroPlanoConta,"Conta destino n\xE3o selecionada"),$(!this.contato||!this.contato.id,"Contato para pagamento n\xE3o selecionado"),$(!this.campos.valor,"Valor n\xE3o preenchido");const e={id:V(),idEmpresa:this.idEmpresa,idContato:this.contato.id,idFinanceiroPlanoConta:this.campos.idFinanceiroPlanoConta,dataEmissao:o,dataCompetencia:o,dataVencimento:o,dataVencimentoOriginal:o,dataPagamento:o,dataMovimento:o,valor:this.campos.valor,descricao:(this.campos.descricao||"").substr(0,100),observacao:this.campos.descricao||"",receberPagar:0,valorOriginal:this.campos.valor,valorTotal:this.campos.valor,valorARealizar:this.campos.valor,valorRealizado:this.campos.valor,documentoTipo:"DespesaSimples",formaDePagamento:"Caixa",documentoId:this.idDocumentoCaixa,idDocumentoCaixa:this.idDocumentoCaixa,idDocumentoCaixaLiquidacao:this.idDocumentoCaixa,idFinanceiroMovimentacaoAgrupamento:a},i={id:V(),idFinanceiroMovimentacaoN:a,idEmpresa:this.idEmpresa,idFinanceiroPlanoConta:r.id,dataEmissao:o,dataCompetencia:o,dataVencimento:o,dataMovimento:o,valorDebito:this.campos.valor,valorCredito:0,descricao:`Pagamento de despesa simples por ${$db.usuario.logado.nome} no Caixa #${this.idDocumentoCaixa}`,observacao:"Liquida\xE7\xE3o Despesa Simples - T\xEDtulo",documentoTipo:"DespesaSimples",automatico:0,liquidando:0,documentoId:this.idDocumentoCaixa,idDocumentoCaixa:this.idDocumentoCaixa},l={id:V(),idFinanceiroMovimentacaoN:a,idEmpresa:this.idEmpresa,idFinanceiroPlanoConta:this.contaOrigem.id,dataEmissao:o,dataCompetencia:o,dataVencimento:o,dataMovimento:o,valorDebito:0,valorCredito:this.campos.valor,descricao:`Pagamento de despesa simples por ${$db.usuario.logado.nome} no Caixa #${this.idDocumentoCaixa}`,observacao:"Liquida\xE7\xE3o Despesa Simples - T\xEDtulo",documentoTipo:"DespesaSimples",automatico:0,liquidando:0,documentoId:this.idDocumentoCaixa,idDocumentoCaixa:this.idDocumentoCaixa};$db.financeiroMovimentacaoN.grava({atual:{id:a}}),$db.financeiroTitulo.grava({atual:e}),$db.financeiroMovimentacao.grava({atual:i}),$db.financeiroMovimentacao.grava({atual:l}),$q.notifyPositive("Despesa lan\xE7ada com sucesso"),this.$imprimir("titulo-recibo",e.id),this.visivel=!1}catch(o){$q.notifyError("Erro no lancamento de Despesa",o)}finally{$q.loading.hide()}},async abrirModalFinanceiroContas(){this.modalFinanceiroContas.filtros.despesa={idContatoEmpresa:this.idContatoEmpresa}},async abrirModalContato(){const o=await $g.promptContato.show({filtro:{ativo:!0},placeholder:"Selecione "});$lodash.get(o,"id")&&(this.contato=o)},mostrar(o){const{idDocumentoCaixa:a}=o;this.campos={idFinanceiroPlanoConta:"",valor:0,descricao:""},this.contaOrigem={},this.contato={nome:""},this.idEmpresa="",this.idContatoEmpresa="",this.idDocumentoCaixa=a,this.atualizar()}}},Sa={class:"col-12"},Pa={class:"col-12"},qa={class:"col-12"},Aa={class:"col-12"},za={class:"q-mt-lg text-right"};function Oa(o,a,n,r,e,i){const l=u("seletorFinContas"),c=u("campo"),p=u("row");return d(),v(O,{modelValue:e.visivel,"onUpdate:modelValue":a[4]||(a[4]=h=>e.visivel=h),"content-css":{minWidth:"30vw"}},{default:s(()=>[t(P,null,{default:s(()=>[t(q,{class:"bg-primary text-white"},{default:s(()=>[t(A,null,{default:s(()=>[g("Lan\xE7ar Despesa")]),_:1}),D(t(C,{dense:"",flat:"",icon:"close",round:""},null,512),[[_]])]),_:1}),t(z,null,{default:s(()=>[t(T,{onSubmit:i.lancar},{default:s(()=>[t(p,{class:"q-col-gutter-md"},{default:s(()=>[m("div",Sa,[t(l,{modelValue:e.campos.idFinanceiroPlanoConta,"onUpdate:modelValue":a[0]||(a[0]=h=>e.campos.idFinanceiroPlanoConta=h),class:"q-pb-none",rules:[h=>h&&h.length>2||"obrigat\xF3rio."],rotulo:"Destino",filtro:{despesa:{idContatoEmpresa:e.idContatoEmpresa}}},null,8,["modelValue","rules","filtro"])]),m("div",Pa,[t(H,{dense:"",rounded:"",modelValue:e.contato.nome,"onUpdate:modelValue":a[1]||(a[1]=h=>e.contato.nome=h),label:"Pagar a",options:["a","b"],onFilter:i.abrirModalContato},null,8,["modelValue","onFilter"])]),m("div",qa,[t(c,{modelValue:e.campos.valor,"onUpdate:modelValue":a[2]||(a[2]=h=>e.campos.valor=h),before:[{icon:"attach_money"}],rotulo:"Valor",tipo:"decimal",decimals:"2"},null,8,["modelValue"])]),m("div",Aa,[t(c,{modelValue:e.campos.descricao,"onUpdate:modelValue":a[3]||(a[3]=h=>e.campos.descricao=h),before:[{icon:"message"}],rotulo:"Descri\xE7\xE3o",tipo:"texto",autogrow:""},null,8,["modelValue"])])]),_:1}),m("div",za,[D(t(C,{color:"tertiary",flat:"",label:"Cancelar"},null,512),[[_]]),t(C,{color:"primary",class:"q-ml-sm",unelevated:"",label:"Lan\xE7ar",type:"submit"})])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var Ua=y(Fa,[["render",Oa]]);const Ma={components:{CaixaAbrir:aa,CaixaConferencia:fa,CaixaFechar:oa,CaixaSangriaLancar:Da,CaixaSuprimentoLancar:Va,CaixaDespesaLancar:Ua,FaturaCard:ea,VendaCard:ia},data(){return{idDocumentoCaixa:"",caixas:[],vendas:{},faturas:{},intervaloAtualizar:void 0,intervaloCarregaCaixas:void 0,menuFaturamento:[{icone:"lock_open",rotulo:"Abrir caixa",manipulador:()=>{this.$refs.Abrir.mostrar()}},{icone:"attach_money",rotulo:"Suprimento",manipulador:()=>{this.$refs.Suprimento.mostrar({idDocumentoCaixa:this.idDocumentoCaixa})}},{icone:"money_off",rotulo:"Sangria",manipulador:()=>{this.$refs.Sangria.mostrar({idDocumentoCaixa:this.idDocumentoCaixa})}},{icone:"payment",rotulo:"Despesa",manipulador:()=>{this.$refs.Despesa.mostrar({idDocumentoCaixa:this.idDocumentoCaixa})}},{icone:"lock",rotulo:"Fechar caixa",manipulador:()=>{this.$refs.Fechar.mostrar({idDocumentoCaixa:this.idDocumentoCaixa})}}]}},methods:{async admTef(){let o,a,n;o=await F.oper("adm"),o.fileContent&&(a=await F.extrairCampo("mensagemOperador",o.fileContent),n=await F.extrairComprovante(o.fileContent),n&&await F.oper("print",{content:n,opts:{txt:!0}}),a&&$q.notify({message:a,type:"positive"}))},async atualizar(){const o=await $erp().formaPagamento.toArray();!this.menuFaturamento.find(a=>a.rotulo==="Imprimir Confer\xEAncia de caixa")&&await $db.permissao.objeto("Diretiva_Caixa_ImprimirConferenciaCaixa")&&(this.menuFaturamento=[...this.menuFaturamento,{icone:"print",rotulo:"Imprimir Confer\xEAncia de caixa",manipulador:()=>{this.idDocumentoCaixa?this.$imprimir("conferencia-de-caixa",this.idDocumentoCaixa):this.$q.notifyError("Caixa n\xE3o selecionada")}}]),!this.menuFaturamento.find(a=>a.rotulo==="Reimprimir Confer\xEAncia de caixa")&&await $db.permissao.objeto("Diretiva_Caixa_VisualizaDiferenca")&&(this.menuFaturamento=[...this.menuFaturamento,{icone:"print",rotulo:"Reimprimir Confer\xEAncia de caixa",manipulador:()=>{this.$refs.Conferencia.mostrar()}}]),o.some(a=>a.ativo&&a.tef)&&(this.menuFaturamento=[...this.menuFaturamento,{icone:"payment",rotulo:"TEF",manipulador:async()=>{await this.admTef()}}]),this.vendas={},this.faturas={},this.idDocumentoCaixa="",this.caixas=[],await this.carregaCaixas(),this.idDocumentoCaixa=(this.caixas[0]||{}).valor||"",this.idDocumentoCaixa&&this.carregarDocumentos()},async carregaCaixas(){let o;$db.usuario.logado.cpf&&(o=(await $db.contato.ler({filtros:{termoBusca:$db.usuario.logado.cpf}})).data.find(e=>{var i;return e.numeroDocumentoNacional.replace(/\D/g,"")===((i=$db.usuario.logado.cpf)==null?void 0:i.replace(/\D/g,""))}));try{await $db.permissao.objeto("Diretiva_Caixa_LivreUtilizacao")&&(o=null)}catch{this.$q.notify("N\xE3o foi poss\xEDvel recuperar informa\xE7\xF5es de permiss\xE3o.")}let a=(await $db.caixa.le({aberto:!0})).filter(r=>!o||r.idContato===(o==null?void 0:o.id)),n=(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data.map(r=>r.id);if(a=a.filter(r=>n.includes(r.idEmpresa)),a.length)for(const r of a)r.rotulo=((await $db.caixa.le({id:r.idCaixa})||{}).descricao||"")+" - Aberto em "+this.$filters.dataHora(r.dataHoraEmissao)+(r.status==="Reaberto"?" - Reaberto":""),r.valor=r.id;this.caixas=a.length?$lodash.orderBy(a,"dataHoraEmissao","desc"):[{rotulo:"N\xE3o h\xE1 caixas abertos",valor:""}]},carregarDocumentos(){$db.hibrido.lista({table:"documentoCondicaoPagamento",where:{idDocumentoCaixa:this.idDocumentoCaixa}}).then(async o=>{const a=[];o.reduce((i,l)=>(i.includes(l.idDocumento)||(i.push(l.idDocumento),a.push($db.hibrido.le({table:"documento",id:l.idDocumento}))),i),[]);let n=[];for await(const i of a)n.push(i);n=$lodash.orderBy(n,"dataHoraEmissao","desc");const r={},e={};for(const i of n)i.tipo==="Venda"&&i.status&&(r[i.status]||(r[i.status]=[]),r[i.status].push(i)),i.tipo==="Fatura"&&i.status&&(e[i.status]||(e[i.status]=[]),e[i.status].push(i));this.vendas=r,this.vendas.encontradas=!!Object.keys(r).length,this.vendas.status=Object.keys(r).filter(i=>i!=="encontradas"),this.faturas=e,this.faturas.encontradas=!!Object.keys(e).length,this.faturas.status=Object.keys(e).filter(i=>i!=="encontradas")})}},async mounted(){this.caixas=[{rotulo:"Carregando caixas...",valor:""}];let o=!1,a=(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data;if(a.length)this.atualizar(),o=!0;else{let i=0;this.intervaloAtualizar=setInterval(async()=>{i++,(i>60||a.length)&&(clearInterval(this.intervaloAtualizar),this.atualizar(),o=!0),a=(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data},1e3)}let n=0,r=500;const e=()=>{this.intervaloCarregaCaixas=setInterval(async()=>{o&&(n++,n>5&&(r=5e3,clearInterval(this.intervaloCarregaCaixas),e()),await this.carregaCaixas(),this.caixas.find(l=>l.valor===this.idDocumentoCaixa)||(this.idDocumentoCaixa=(this.caixas[0]||{}).valor||"",this.idDocumentoCaixa&&await this.carregarDocumentos()))},r)};e()},beforeUnmount(){this.intervaloAtualizar&&clearInterval(this.intervaloAtualizar),this.intervaloCarregaCaixas&&clearInterval(this.intervaloCarregaCaixas)}},Ta={class:"CaixaEmpresas"},La={class:"q-pb-md"},ka={class:"no-shadow"};function Ia(o,a,n,r,e,i){const l=u("campo"),c=u("row"),p=u("venda-card"),h=u("fatura-card"),B=u("caixa-abrir"),j=u("CaixaFechar"),R=u("caixa-sangria-lancar"),W=u("caixa-suprimento-lancar"),K=u("caixa-despesa-lancar"),J=u("caixa-conferencia");return d(),x("div",Ta,[m("div",La,[t(l,{modelValue:e.idDocumentoCaixa,"onUpdate:modelValue":[a[0]||(a[0]=f=>e.idDocumentoCaixa=f),i.carregarDocumentos],opcoes:e.caixas,class:"q-mx-md",tipo:"seletor"},null,8,["modelValue","opcoes","onUpdate:modelValue"]),t(c,{class:"q-col-gutter-md q-pa-md"},{default:s(()=>[(d(!0),x(E,null,w(e.menuFaturamento,(f,b)=>(d(),x("div",{class:"col-6 col-md",key:b},[t(C,{class:"botaoAcesso full-width",color:"primary",outline:"",icon:f.icone,onClick:f.manipulador,label:f.rotulo,size:"lg"},null,8,["icon","onClick","label"])]))),128))]),_:1}),m("div",ka,[e.vendas.encontradas?(d(),v(N,{key:0},{default:s(()=>[t(S,{"default-opened":"",label:"Vendas"},{default:s(()=>[(d(!0),x(E,null,w(e.vendas.status,f=>(d(),v(S,{key:f,"default-opened":"",label:f},{default:s(()=>[(d(!0),x(E,null,w(e.vendas[f],b=>(d(),v(p,{key:b.id,id:b.id,onAtualizar:i.atualizar,class:"q-mb-md q-mx-md"},null,8,["id","onAtualizar"]))),128))]),_:2},1032,["label"]))),128))]),_:1})]),_:1})):Q("",!0),e.faturas.encontradas?(d(),v(N,{key:1},{default:s(()=>[t(S,{"default-opened":"",label:"Faturas"},{default:s(()=>[(d(!0),x(E,null,w(e.faturas.status,f=>(d(),v(S,{key:f,"default-opened":"",label:f},{default:s(()=>[(d(!0),x(E,null,w(e.faturas[f],b=>(d(),v(h,{key:b.id,id:b.id,onAtualizar:i.atualizar,class:"q-mb-md q-mx-md"},null,8,["id","onAtualizar"]))),128))]),_:2},1032,["label"]))),128))]),_:1})]),_:1})):Q("",!0)])]),t(B,{ref:"Abrir",onAberto:i.atualizar},null,8,["onAberto"]),t(j,{ref:"Fechar",onFechado:i.atualizar},null,8,["onFechado"]),t(R,{ref:"Sangria"},null,512),t(W,{ref:"Suprimento"},null,512),t(K,{ref:"Despesa"},null,512),t(J,{ref:"Conferencia"},null,512)])}var oo=y(Ma,[["render",Ia]]);export{oo as default};
