import{_ as O,N as G,p as A,o as u,i as b,w as i,f as t,K as J,A as K,B as T,C as W,D as w,L as X,E as S,e as d,G as Y,H as Z,x as s,j as V,t as c,U as aa,d as q,cy as oa,l as v,aK as D,k as P,n as H,s as I,bj as U,ai as E,F as z,r as $,aj as M,I as ea,a$ as ta,y as ia,M as sa,bc as Q,aF as ra,ak as N,ah as B,u as R}from"./index.a5b30aa8.js";import{C as na}from"./CaixaFechar.b77576c9.js";import{G as la}from"./GChipsV2.c7017ad7.js";const da={components:{Badge:G,CaixaFechar:na},data(){return{documentoCaixa:{},mostrarDinheiro:!1,documentoStatusSelecionado:{},documentoStatus:[],caixa:{},campos:{},dinheiro:{},acertoDinheiro:0,acertos:[],totalAcertos:0,totalDinheiro:0,formasPagamento:[],totaisFormasPagamento:{},outrasFormasPagamento:{},condicoesPagamentoFechamento:{},valorAberturaSistema:0,valorFundoCaixa:0,valorFundoCaixaSistema:0,valorFechamento:0,diferencaFundo:0,diferencaAbertura:0,contatos:{},usuarios:{},documentos:{},mostrarSangrias:!1,sangrias:[],totalSangrias:0,observacoesSangrias:{},mostrarDespesas:!1,despesas:[],totalDespesas:0,mostrarSuprimentos:!1,suprimentos:[],totalSuprimentos:0,visivel:!1,edicao:!1,carregando:!0,faturaModal:{visivel:!1,id:""},vendaModal:{visivel:!1,id:""},visibilidade:{botao:{reabrir:!1,finalizar:!1}},atualizarAoFecharModal:!1}},emits:["executar","update:modelValue"],methods:{aoFecharModal(){this.atualizarAoFecharModal&&this.$emit("executar","atualizar")},obterDivergencias(){let r=[],n=$utils.arredondar(this.diferencaAbertura-this.diferencaFundo);if(n){let f=this.formasPagamento.filter(C=>C.tipo===1);f.length&&(f=f[0],r.push({...f,diferenca:n}))}for(const f of this.formasPagamento.filter(C=>C.tipo!==1&&C.tipoFinanceiro==="T\xEDtulo Liquidado")){let C=(this.totaisFormasPagamento[f.id]||{}).totalSistema||0,a=(this.totaisFormasPagamento[f.id]||{}).totalInformadoUsuario||0;n=$utils.arredondar(C-a),n&&r.push({...f,diferenca:n})}return r},cor(r,n,f){let C=(this.totaisFormasPagamento[f]||{}).totalSistema||0,a=(this.totaisFormasPagamento[f]||{}).totalInformadoUsuario||0,g=$utils.arredondar(C-a);if(n==="card"){switch(r){case"outraFormaPagamento":if(g)return"itemError";break}return"itemOk"}switch(r){case"abertura":if(this.diferencaAbertura)return"text-negative";break;case"fundo":if(this.diferencaFundo)return"text-negative";break;case"outraFormaPagamento":if(g)return"text-negative";break}return"text-blue-8"},async atualizar(){var r,n;try{this.$q.loading.show({message:"Processando..."}),this.documentoCaixa=await $db.hibrido.le({table:"documento",id:this.idDocumentoCaixa}),this.caixa=await $db.caixa.le({id:this.documentoCaixa.idCaixa});const f=await $db.contato.le({id:this.documentoCaixa.idEmpresa}),C=(await $db.contato.ler({filtros:{id:this.documentoCaixa.idContato}})).data[0];let a=await $db.documentoStatus.le({idDocumento:this.documentoCaixa.id});switch(a=$lodash.orderBy(a,"dataHoraEmissao","desc"),a.pop(),this.visibilidade={botao:{reabrir:!1,finalizar:!1,fechar:!1}},a[0].statusFinalizado){case"Aguardando Confer\xEAncia":this.visibilidade.botao.reabrir=!0,this.visibilidade.botao.finalizar=!0;break;case"Reaberto":this.visibilidade.botao.fechar=!0;break;case"Fechado":this.visibilidade.botao.reabrir=!0;break}let g={};this.documentoStatus=[];for(let h of a){const y=[];let _,k,j;_=h.cpfUsuario,_&&(k=await $erp().contato.where({numeroDocumentoNacional:_}).toArray(),Array.prototype.push.apply(y,k)),_=(r=h.cpfUsuario)==null?void 0:r.replace(/\D/g,""),_&&_!==h.cpfUsuario&&(k=await $erp().contato.where({numeroDocumentoNacional:_}).toArray(),Array.prototype.push.apply(y,k)),j=y[0],this.documentoStatus.push({label:`${h.statusFinalizado} - ${this.$filters.dataHora(h.dataHoraEmissao)} - ${(n=j==null?void 0:j.nome)!=null?n:"Usu\xE1rio n\xE3o identificado"}`,value:h.id,statusFinalizado:h.statusFinalizado})}this.documentoStatusSelecionado=this.documentoStatus[0],this.campos.caixaEmpresaNome=f.nome,this.campos.dataHoraAbertura=this.documentoCaixa.dataHoraEmissao,this.campos.nomeUsuarioAbertura=C.nome,this.valorAberturaSistema=0;const p=`declare @codigoFinanceiroPlanoConta int = (select codigoFinanceiroPlanoConta from financeiroPlanoConta where id = ${$utils.sqlStr(this.caixa.idPlanoConta)})
            declare @codigoEmpresa int = (select codigoEmpresa from documento where id = ${$utils.sqlStr(this.documentoCaixa.id)})
            declare @dataAbertura varchar(10) = (select format(cast(dataHoraEmissao as date), 'dd/MM/yyyy') dataAbertura from documento where id = ${$utils.sqlStr(this.documentoCaixa.id)})

          if (@codigoFinanceiroPlanoConta is not null and @codigoEmpresa is not null and @dataAbertura is not null)
          begin
            exec sp_financeiroMovimentacao_calcula_saldoPeriodo @codigoFinanceiroPlanoConta, @codigoEmpresa, 'DataPagamento', @dataAbertura, @dataAbertura, 0
          end`;let m=new Date(this.documentoCaixa.dataHoraEmissao).setMilliseconds(0);m=new Date(m);let x=await $utils.executarSql(p);x=$lodash.orderBy(x,"Ordem","asc"),x=x.filter(h=>!h.DataMovimento||new Date(h.DataMovimento)<m);const e=x[x.length-1];this.valorAberturaSistema=$utils.arredondar(e.ValorSaldo||0),this.diferencaAbertura=$utils.arredondar(((this.documentoCaixa||{}).valorAbertura||0)-this.valorAberturaSistema),this.$q.loading.hide(),this.visivel=!0,this.preencherConferencia()}catch(f){this.$q.notifyError("N\xE3o foi poss\xEDvel abrir a confer\xEAncia.",f)}finally{this.$q.loading.hide()}},fechar(){this.$refs.Fechar.mostrar({idDocumentoCaixa:this.documentoCaixa.id})},async finalizar(){try{let r=this.obterDivergencias(),n="Deseja finalizar a confer\xEAncia?",f="Deseja finalizar a confer\xEAncia e lan\xE7ar movimenta\xE7\xF5es financeiras para acertar as diverg\xEAncias?";try{await new Promise((e,h)=>{this.$q.dialog({message:r.length?f:n,noRefocus:!0,preventClose:!0,title:"Tem certeza?",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Continuar",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(()=>{e()}).onCancel(()=>{h()})}),this.$q.loading.show({message:"Processando..."})}catch{return}const C=$utils.dataAtual(),a=[],g=[];if(r.length){let e=await $db.documentoStatus.le({idDocumento:this.documentoCaixa.id});e=e.filter(_=>_.operacao==="Fechamento Caixa"&&_.statusFinalizado==="Aguardando Confer\xEAncia"&&_.statusOriginal==="Aberto");const h=e.length?e[0].dataHoraEmissao:C;let y=await $db.configuracoes.le({nome:"financeiro.planocontas.diferencacaixa"});if(y.length){const _=parseInt(y[0].valor);Number.isInteger(_)&&(y=await $db.financeiroPlanoConta.le({codigoFinanceiroPlanoConta:_}))}if(!(y||{}).id){this.$q.notify("Faltando par\xE2metro da conta Diferen\xE7a de Caixa.");return}for(const _ of r){const k=$utils.uuid();g.push(k),a.push({id:$utils.uuid(),idFinanceiroMovimentacaoN:k,idEmpresa:this.documentoCaixa.idEmpresa,idContato:$db.usuario.logado.id,idFinanceiroPlanoConta:y.id,valorDebito:_.diferenca>0?_.diferenca:0,valorCredito:_.diferenca<0?Math.abs(_.diferenca):0,dataEmissao:C,dataCompetencia:h,dataVencimento:h,dataMovimento:h,descricao:`Acerto do caixa #${this.documentoCaixa.id} Conta ${_.descricao}`,observacao:"Transfer\xEAncia entre contas",documentoTipo:"Acerto",documentoId:this.documentoCaixa.id,idDocumentoCaixa:this.documentoCaixa.id}),a.push({id:$utils.uuid(),idFinanceiroMovimentacaoN:k,idEmpresa:this.documentoCaixa.idEmpresa,idContato:$db.usuario.logado.id,idFinanceiroPlanoConta:_.tipo===1?this.documentoCaixa.idFinanceiroPlanoContaCaixa:_.idFinanceiroPlanoConta,valorDebito:_.diferenca<0?Math.abs(_.diferenca):0,valorCredito:_.diferenca>0?_.diferenca:0,dataEmissao:C,dataCompetencia:h,dataVencimento:h,dataMovimento:h,descricao:`Acerto do caixa #${this.documentoCaixa.id} Conta ${_.descricao}`,observacao:"Transfer\xEAncia entre contas",documentoTipo:"Acerto",documentoId:this.documentoCaixa.id,idDocumentoCaixa:this.documentoCaixa.id})}}const p={id:$utils.uuid(),idDocumento:this.documentoCaixa.id,operacao:"Confer\xEAncia Finalizada",statusOriginal:"Aguardando Confer\xEAncia",statusFinalizado:"Fechado",dataHoraEmissao:C,cpfUsuario:$db.usuario.logado.numeroDocumentoNacional,idDocumentoCaixa:this.documentoCaixa.id};let m=$utils.clonar(this.documentoCaixa);m.status="Fechado";let x=await $db.caixaConsolidacao2.le({idDocumentoStatus:this.documentoStatus[0].value});x=x.map(e=>({...e,id:$utils.uuid(),idDocumentoStatus:p.id,dataHoraEmissao:C})),await $db.documento.grava({atual:m,original:this.documentoCaixa}),await $db.documentoStatus.grava({atual:p});for(const e of g)await $db.financeiroMovimentacaoN.grava({atual:{id:e}});for(const e of a)x.push({id:$utils.uuid(),idDocumentoCaixa:m.id,idDocumentoStatus:p.id,tabela:"financeiroMovimentacao",idTabela:e.id,json:JSON.stringify(e),dataHoraEmissao:C}),await $db.financeiroMovimentacao.grava({atual:e});for(const e of x)await $db.caixaConsolidacao2.grava({atual:e});this.$q.loading.hide(),this.$emit("executar","atualizar"),this.visivel=!1,this.$q.notify({message:"Confer\xEAncia finalizada.",type:"positive"})}catch(r){this.$q.notifyError("N\xE3o foi poss\xEDvel finalizar a confer\xEAncia.",r)}finally{this.$q.loading.hide()}},async preencherConferencia(){var k,j;this.carregando=!0,await $utils.dormir(500),this.refreshData();const r=this.documentoStatusSelecionado.value;let n=await $db.caixaConsolidacao2.le({idDocumentoStatus:r});if(!n.length)try{const o=await $utils.geeksApi({caixaConsolidacao2:{funcao:"6B2B2761-B645-4818-BAC0-5DB6D946FDA1",idDocumentoStatus:r}});n=(k=o==null?void 0:o.data)==null?void 0:k.caixaConsolidacao2}catch(o){$q.notify({message:"N\xE3o foi poss\xEDvel obter informa\xE7\xF5es do servidor. Por favor, verifique sua conex\xE3o e tente novamente.",type:"negative"}),console.error(o)}n=n.map(o=>({...o,json:JSON.parse(o.json)}));let f={},C={};for(let o of n)if((j=o.json)!=null&&j.idContato){const l=await $db.contato.le({id:o.json.idContato}),F=await $db.usuario.le({id:o.json.idContato});l!=null&&l.id&&(f[l.id]=l),F!=null&&F.id&&(C[F.id]=F)}this.contatos=f,this.usuarios=C;let a=n.filter(o=>o.tabela==="financeiroMovimentacao"&&o.json.documentoTipo==="Acerto").map(o=>o.json);const g=n.filter(o=>o.tabela==="financeiroTitulo").map(o=>o.json),p=n.filter(o=>o.tabela==="financeiroMovimentacao").map(o=>o.json);this.sangrias=p.filter(o=>["Sangria","Sangria Final"].includes(o.documentoTipo)&&o.valorCredito>0),this.totalSangrias=$utils.arredondar(this.sangrias.reduce((o,l)=>o+(l.valorCredito||0),0)),this.carregarObservacoesSangrias(),this.suprimentos=p.filter(o=>o.documentoTipo==="Suprimento"&&o.valorDebito>0),this.totalSuprimentos=$utils.arredondar(this.suprimentos.reduce((o,l)=>o+(l.valorDebito||0),0));const m=p.filter(o=>o.documentoTipo==="DespesaSimples"&&o.valorCredito>0);this.despesas=g.filter(o=>m.find(l=>l.idFinanceiroMovimentacaoN===o.idFinanceiroMovimentacaoAgrupamento)),this.totalDespesas=$utils.arredondar(this.despesas.reduce((o,l)=>o+(l.valorRealizado||0),0)),this.formasPagamento=(await $db.formaPagamento.le()).map(o=>({id:o.id,idFinanceiroPlanoConta:o.idFinanceiroPlanoConta,tipoFinanceiro:o.tipoFinanceiro,tipo:o.tipo,descricao:o.descricao,mostrar:!1}));const x=n.filter(o=>o.tabela==="documentoCondicaoPagamento"&&o.json.ordem).map(o=>o.json);this.valorFechamento=$utils.arredondar(x.reduce((o,l)=>(this.formasPagamento.find(F=>F.id===l.idFormaPagamento&&F.idFinanceiroPlanoConta===this.caixa.idPlanoConta)&&(o+=l.valor||0),o),0)),this.condicoesPagamentoFechamento=x.reduce((o,l)=>(o[l.idFormaPagamento]=l,o),{});let e=n.filter(o=>o.tabela==="documentoCondicaoPagamento"&&!o.json.ordem).map(o=>o.json);this.dinheiro=e.reduce((o,l)=>(this.formasPagamento.find(F=>F.id===l.idFormaPagamento&&F.idFinanceiroPlanoConta===this.caixa.idPlanoConta)&&o.push(l),o),[]),this.totalDinheiro=$utils.arredondar(this.dinheiro.reduce((o,l)=>o+(l.valor||0),0)),this.valorFundoCaixa=$utils.arredondar(this.valorFechamento-this.sangrias.filter(o=>o.documentoTipo==="Sangria Final").reduce((o,l)=>o+(l.valorCredito||0),0));const h=this.valorAberturaSistema+this.totalDinheiro-this.totalSangrias-this.totalDespesas+this.totalSuprimentos;this.diferencaFundo=$utils.arredondar(this.valorFundoCaixa-h),this.acertoDinheiro=a.filter(o=>o.idFinanceiroPlanoConta===this.documentoCaixa.idFinanceiroPlanoContaCaixa).reduce((o,l)=>o+(l.valorDebito||0)-(l.valorCredito||0),0),this.valorFundoCaixaSistema=$utils.arredondar(h+this.acertoDinheiro),this.acertoDinheiro=$utils.arredondar(this.acertoDinheiro*-1),this.outrasFormasPagamento=e.reduce((o,l)=>(!o[l.idFormaPagamento]&&this.formasPagamento.find(F=>F.id===l.idFormaPagamento&&F.idFinanceiroPlanoConta!==this.caixa.idPlanoConta)&&(o[l.idFormaPagamento]=[]),o[l.idFormaPagamento]&&o[l.idFormaPagamento].push(l),o),{});let y=e.reduce((o,l)=>(o[l.idFormaPagamento]||(o[l.idFormaPagamento]={totalInformadoUsuario:0}),o[l.idFormaPagamento]&&(o[l.idFormaPagamento].totalSistema===void 0?o[l.idFormaPagamento].totalSistema=l.valor||0:o[l.idFormaPagamento].totalSistema+=l.valor||0),o),{});y=x.reduce((o,l)=>(o[l.idFormaPagamento]||(o[l.idFormaPagamento]={totalSistema:0}),o[l.idFormaPagamento]&&(o[l.idFormaPagamento].totalInformadoUsuario===void 0?o[l.idFormaPagamento].totalInformadoUsuario=l.valor||0:o[l.idFormaPagamento].totalInformadoUsuario+=l.valor||0),o),y);for(const o in y)y[o].totalSistema=$utils.arredondar(y[o].totalSistema),y[o].totalInformadoUsuario=$utils.arredondar(y[o].totalInformadoUsuario);this.totaisFormasPagamento=y;let _=e.reduce((o,l)=>(o[l.idDocumento]||(o[l.idDocumento]={}),o),{});for(let o in _)_[o]=await $db.hibrido.le({table:"documento",id:o});this.documentos=_,this.acertos=a.filter(o=>o.idFinanceiroPlanoConta!==this.documentoCaixa.idFinanceiroPlanoContaCaixa).reduce((o,l)=>{const F=this.formasPagamento.find(L=>L.idFinanceiroPlanoConta===l.idFinanceiroPlanoConta);return F&&o.push({descricao:F.descricao,valor:$utils.arredondar((l.valorCredito||0)-(l.valorDebito||0))}),o},[]),this.totalAcertos=$utils.arredondar(this.acertos.reduce((o,l)=>o+l.valor,0)),this.carregando=!1},async reabrir(){try{try{await new Promise((m,x)=>{this.$q.dialog({message:"Deseja reabrir o caixa para corre\xE7\xE3o?",noRefocus:!0,preventClose:!0,title:"Tem certeza?",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Continuar",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(()=>{m()}).onCancel(()=>{x()})}),this.$q.loading.show({message:"Processando..."})}catch{return}const r=$utils.dataAtual();let n=$utils.clonar(this.documentoCaixa),f=await $db.caixaConsolidacao2.le({idDocumentoStatus:this.documentoStatus[0].value});f=f.map(m=>({...m,json:JSON.parse(m.json)}));let C=f.filter(m=>m.tabela==="financeiroMovimentacao").map(m=>m.json);const a=C.filter(m=>m.documentoTipo==="Sangria Final"),g=C.filter(m=>m.documentoTipo==="Acerto"),p={id:$utils.uuid(),idDocumento:n.id,operacao:"Fechamento Caixa",statusOriginal:this.documentoStatus[0].statusFinalizado,statusFinalizado:"Reaberto",dataHoraEmissao:r,cpfUsuario:$db.usuario.logado.numeroDocumentoNacional,idDocumentoCaixa:n.id};f=f.filter(m=>!["Sangria Final","Acerto"].includes(m.json.documentoTipo)),f=f.map(m=>({...m,id:$utils.uuid(),idDocumentoStatus:p.id,dataHoraEmissao:r,json:JSON.stringify(m.json)})),n.status="Reaberto",n.dataHoraFinalizado="",await $db.documento.grava({atual:n,original:this.documentoCaixa}),await $db.documentoStatus.grava({atual:p}),await $db.financeiroMovimentacao.remove([...a,...g]);for(const m of f)await $db.caixaConsolidacao2.grava({atual:m});this.atualizar(),this.atualizarAoFecharModal=!0,this.$q.loading.hide()}catch(r){this.$q.notifyError("N\xE3o foi poss\xEDvel abrir a confer\xEAncia.",r)}finally{this.$q.loading.hide()}},refreshData(){this.mostrarDinheiro=!1,this.dinheiro={},this.acertoDinheiro=0,this.acertos=[],this.totalAcertos=0,this.formasPagamento=[],this.totaisFormasPagamento={},this.outrasFormasPagamento={},this.condicoesPagamentoFechamento={},this.valorFechamento=0,this.diferencaFundo=0,this.contatos={},this.usuarios={},this.documentos={},this.mostrarSangrias=!1,this.sangrias=[],this.totalSangrias=0,this.mostrarDespesas=!1,this.despesas=[],this.totalDespesas=0,this.mostrarSuprimentos=!1,this.suprimentos=[],this.totalSuprimentos=0,this.mostrarDivergencias=!1,this.divergencias=[],this.totalDivergencias=0,this.edicao=!1,this.faturaModal={visivel:!1,id:""},this.vendaModal={visivel:!1,id:""}},async carregarObservacoesSangrias(){const r=await $db.hibrido.lista({table:"documento",whereIn:{id:this.sangrias.map(n=>n.documentoId)}});for(const n of r)this.observacoesSangrias[n.id]=n.observacao}},props:{idDocumentoCaixa:{required:!0,type:String},modelValue:{required:!0,type:Boolean}},watch:{modelValue(r){r&&(this.atualizar(),this.refreshData())},visivel(r){this.$emit("update:modelValue",r)}}},ca={class:"layout-padding q-pa-none q-pb-md"},ua={class:"q-pt-md"},ma={class:"bg-white round-borders q-pa-md"},ha={class:"col-12 col-lg-8 text-tertiary"},fa={class:"Faturamento-historico col-12 col-lg-4 text-caption text-tertiary text-right"},pa=s("br",null,null,-1),ga={key:0,class:"q-mt-lg text-center"},_a={key:1},va={class:"col-auto"},xa={class:"col-auto"},ba={key:0,class:"col-auto"},Ca={class:"col-auto"},ya={class:"q-pr-md q-pl-xs q-pt-md"},qa={class:"q-pa-xs"},Fa={class:"text-right text-h5 text-positive text-weight-bold q-mb-sm"},wa={key:0,class:"q-px-md q-pb-md"},Da={class:"col-9 col-lg-10 q-pl-sm"},Sa={class:"row"},ka={class:"col-12 col-sm"},Pa={class:"col-12 col-sm"},Aa={class:"col-12 col-sm"},za={class:"col-12 col-sm"},$a={class:"q-pr-md q-pl-xs q-pt-md"},Ea={class:"row"},Va={class:"q-pa-xs"},Ia={class:"text-right text-h5 text-positive text-weight-bold q-mb-sm"},Ma={key:0,class:"q-px-md q-pb-md"},ja={class:"col-9 col-lg-10 q-pl-sm"},Ha={class:"row"},Ua={class:"col-12 col-sm"},Na={class:"col-12 col-sm"},Ta={class:"col-12 col-sm"},Oa={class:"col-12 col-sm"},Qa={class:"q-pr-md q-pl-xs q-pt-md"},Ba={class:"row"},Ra={class:"q-pa-xs"},La={class:"text-right text-h5 text-positive text-weight-bold q-mb-sm"},Ga={key:1,class:"q-px-md q-pb-md"},Ja={class:"col-9 col-lg-10 q-pl-sm"},Ka={class:"row"},Wa={class:"col-12 col-sm"},Xa=s("div",{class:"col-12 col-sm"}," Dinheiro ",-1),Ya={class:"col-12 col-sm"},Za={class:"col-12 col-sm"},ao={class:"q-pr-md q-pl-xs q-pt-md"},oo={class:"row"},eo={class:"q-pa-xs"},to={class:"text-right text-h5 text-positive text-weight-bold q-mb-sm"},io={key:0,class:"q-px-md q-pb-md"},so={class:"col-9 col-lg-10 q-pl-sm"},ro={class:"row"},no={class:"col-12 col-sm"},lo={class:"col-12 col-sm"},co={class:"col-12 col-sm"},uo={class:"col-12 col-sm"},mo={class:"col-12 col-sm"},ho={key:3,class:"q-title"},fo={class:"q-pr-md q-pl-xs q-pt-md"},po={class:"row"},go={class:"text-right text-h5 text-warning text-weight-bold q-mb-sm"},_o={class:"q-px-md q-pb-md"},vo={class:"col-9 col-lg-10 q-pl-sm"},xo={class:"row"},bo={class:"col-12 col-sm"},Co={class:"col-12 col-sm"},yo={class:"q-pr-md q-pl-xs q-pt-md"},qo={class:"row"},Fo={class:"q-pa-xs"},wo={class:"text-weight-normal text-tertiary text-body2 q-pa-none q-ma-none"},Do={key:1,class:"q-px-md q-pb-md"},So={class:"col-9 col-lg-10 q-pl-sm"},ko={class:"row"},Po={class:"col-12 col-sm"},Ao={class:"col-12 col-sm"},zo={class:"col-12 col-sm"};function $o(r,n,f,C,a,g){const p=A("row"),m=A("badge"),x=A("CaixaFechar");return u(),b(ia,{modelValue:a.visivel,"onUpdate:modelValue":n[9]||(n[9]=e=>a.visivel=e),onHide:g.aoFecharModal,maximized:"",class:"caixaconferir"},{default:i(()=>[t(J,{view:"hHh LpR fFf",container:"",class:"bg-light"},{default:i(()=>[t(K,null,{default:i(()=>[t(T,{class:"bg-primary text-white"},{default:i(()=>[W(t(w,{icon:"arrow_back",round:"",flat:"",dense:""},null,512),[[X]]),t(S,null,{default:i(()=>[d("Conferir caixa")]),_:1})]),_:1})]),_:1}),t(Y,null,{default:i(()=>[t(Z,{class:"u-container"},{default:i(()=>[s("div",ca,[s("div",ua,[s("div",ma,[t(p,{class:"items-center q-col-gutter-md"},{default:i(()=>[s("div",ha,[t(V,{name:"place"}),d(" "+c(a.campos.caixaEmpresaNome),1)]),s("div",fa,[s("div",null,[d(c(r.$filters.dataHora(a.campos.dataHoraAbertura))+" ",1),t(V,{name:"calendar_today"}),pa,d(" "+c(a.campos.nomeUsuarioAbertura)+" ",1),t(V,{name:"person"})])]),t(aa,{modelValue:a.documentoStatusSelecionado,"onUpdate:modelValue":[n[0]||(n[0]=e=>a.documentoStatusSelecionado=e),g.preencherConferencia],label:"Hist\xF3rico",options:a.documentoStatus,filter:"",style:{"white-space":"pre-wrap !important"}},null,8,["modelValue","options","onUpdate:modelValue"])]),_:1}),a.carregando?(u(),q("div",ga,[t(oa,{color:"tertiary",size:50})])):v("",!0),a.carregando?v("",!0):(u(),q("div",_a,[t(p,{class:"q-col-gutter-md justify-around"},{default:i(()=>[s("div",va,[t(D,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[d(c(r.$filters.numero(a.valorAberturaSistema,2))+" ",1),t(P,null,{default:i(()=>[d("Valor no sistema")]),_:1})]),_:1}),t(S,{class:H(["q-display-1 text-weight-bold text-center",g.cor("abertura")])},{default:i(()=>[d(c(r.$filters.numero(a.documentoCaixa.valorAbertura,2))+" ",1),t(P,null,{default:i(()=>[d("Valor digitado pelo usu\xE1rio")]),_:1})]),_:1},8,["class"]),t(D,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[d(c(r.$filters.numero(a.diferencaAbertura,2))+" ",1),t(P,null,{default:i(()=>[d("Diferen\xE7a")]),_:1})]),_:1}),t(D,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[d(" Abertura ")]),_:1})]),s("div",xa,[t(D,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[d("\xA0")]),_:1}),t(S,{class:H(["q-display-1 text-weight-bold text-center",g.cor("fundo")])},{default:i(()=>[d(c(r.$filters.numero(a.valorFechamento,2))+" ",1),t(P,null,{default:i(()=>[d("Valor digitado pelo usu\xE1rio")]),_:1})]),_:1},8,["class"]),t(D,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[d("\xA0")]),_:1}),t(D,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[d(" Fechamento ")]),_:1})]),a.acertoDinheiro?(u(),q("div",ba,[t(D,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[d("\xA0")]),_:1}),t(S,{class:"q-display-1 text-weight-bold text-center text-warning"},{default:i(()=>[d(c(r.$filters.numero(a.acertoDinheiro,2)),1)]),_:1}),t(D,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[d("\xA0")]),_:1}),t(D,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[d(" Acerto ")]),_:1})])):v("",!0),s("div",Ca,[t(D,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[d(c(r.$filters.numero(a.valorFundoCaixaSistema,2))+" ",1),t(P,null,{default:i(()=>[d("Valor no sistema")]),_:1})]),_:1}),t(S,{class:H(["q-display-1 text-weight-bold text-center",g.cor("fundo")])},{default:i(()=>[d(c(r.$filters.numero(a.valorFundoCaixa,2)),1)]),_:1},8,["class"]),t(D,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[d(c(r.$filters.numero(a.diferencaFundo,2))+" ",1),t(P,null,{default:i(()=>[d("Diferen\xE7a")]),_:1})]),_:1}),t(D,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[d(" Fundo Caixa ")]),_:1})])]),_:1}),a.suprimentos.length?(u(),b(I,{key:0,class:"itemOk q-mt-md"},{default:i(()=>[s("div",ya,[t(p,{class:""},{default:i(()=>[t(S,null,{default:i(()=>[d(" Suprimentos ")]),_:1}),s("div",qa,[t(m,{cor:"primary",escuro:"",class:"q-mr-sm"},{default:i(()=>[d(c(a.suprimentos.length),1)]),_:1})]),s("div",Fa,c(r.$filters.numero(a.totalSuprimentos,2)),1)]),_:1})]),t(U,{class:"content-center justify-center q-mt-lg"},{default:i(()=>[a.mostrarSuprimentos?(u(),b(w,{key:0,outline:"",size:"sm",icon:"keyboard_arrow_up",class:"no-shadow q-ma-xs",color:"grey",style:{"margin-top":"-30px"},label:"Ocultar Detalhes",onClick:n[1]||(n[1]=e=>a.mostrarSuprimentos=!a.mostrarSuprimentos)})):v("",!0),a.mostrarSuprimentos?v("",!0):(u(),b(w,{key:1,outline:"",size:"sm",icon:"keyboard_arrow_down",class:"no-shadow q-ma-xs",color:"grey",style:{"margin-top":"-30px"},label:"Ver Detalhes",onClick:n[2]||(n[2]=e=>a.mostrarSuprimentos=!a.mostrarSuprimentos)}))]),_:1}),a.mostrarSuprimentos?(u(),q("div",wa,[t(E,{highlight:"",class:"q-pa-none"},{default:i(()=>[(u(!0),q(z,null,$(a.suprimentos,e=>(u(),b(M,{key:e.id,class:"row u-separador q-my-none q-pa-xs"},{default:i(()=>{var h,y;return[s("div",Da,[s("div",Sa,[s("div",ka,c(((h=a.contatos[e.idContato])==null?void 0:h.nome)||((y=a.usuarios[e.idContato])==null?void 0:y.nome)||"Nome n\xE3o encontrado"),1),s("div",Pa,c(e.documentoTipo),1),s("div",Aa,c(r.$filters.numero(e.valorDebito,2)),1),s("div",za,c(r.$filters.dataHora(e.dataMovimento)),1)])])]}),_:2},1024))),128))]),_:1})])):v("",!0)]),_:1})):v("",!0),a.despesas.length?(u(),b(I,{key:1,class:"itemOk q-mt-md"},{default:i(()=>[s("div",$a,[s("div",Ea,[t(S,null,{default:i(()=>[d(" Despesas ")]),_:1}),s("div",Va,[t(m,{cor:"primary",escuro:"",class:"q-mr-sm"},{default:i(()=>[d(c(a.despesas.length),1)]),_:1})]),s("div",Ia,c(r.$filters.numero(a.totalDespesas,2)),1)])]),t(U,{class:"content-center justify-center q-mt-lg"},{default:i(()=>[a.mostrarDespesas?(u(),b(w,{key:0,outline:"",size:"sm",icon:"keyboard_arrow_up",class:"no-shadow q-ma-xs",color:"grey",style:{"margin-top":"-30px"},label:"Ocultar Detalhes",onClick:n[3]||(n[3]=e=>a.mostrarDespesas=!a.mostrarDespesas)})):v("",!0),a.mostrarDespesas?v("",!0):(u(),b(w,{key:1,outline:"",size:"sm",icon:"keyboard_arrow_down",class:"no-shadow q-ma-xs",color:"grey",style:{"margin-top":"-30px"},label:"Ver Detalhes",onClick:n[4]||(n[4]=e=>a.mostrarDespesas=!a.mostrarDespesas)}))]),_:1}),a.mostrarDespesas?(u(),q("div",Ma,[t(E,{highlight:"",class:"q-pa-none"},{default:i(()=>[(u(!0),q(z,null,$(a.despesas,e=>(u(),b(M,{key:e.id,class:"row u-separador q-my-none q-pa-xs"},{default:i(()=>[s("div",ja,[s("div",Ha,[s("div",Ua,c((a.contatos[e.idContato]||{}).nome||"Nome n\xE3o encontrado"),1),s("div",Na,c(e.documentoTipo),1),s("div",Ta,c(r.$filters.numero(e.valorRealizado,2)),1),s("div",Oa,c(r.$filters.dataHora(e.dataMovimento)),1)])])]),_:2},1024))),128))]),_:1})])):v("",!0)]),_:1})):v("",!0),t(I,{class:"itemOk q-my-md"},{default:i(()=>[s("div",Qa,[s("div",Ba,[t(S,null,{default:i(()=>[d(" Dinheiro ")]),_:1}),s("div",Ra,[t(m,{cor:"primary",escuro:"",class:"q-mr-sm"},{default:i(()=>[d(c(a.dinheiro.length),1)]),_:1})]),s("div",La,c(r.$filters.numero((a.totaisFormasPagamento[(a.dinheiro[0]||{}).idFormaPagamento]||{}).totalSistema,2)),1)])]),a.dinheiro.length?(u(),b(U,{key:0,class:"content-center justify-center q-mt-lg"},{default:i(()=>[a.mostrarDinheiro?(u(),b(w,{key:0,outline:"",size:"sm",icon:"keyboard_arrow_up",class:"no-shadow q-ma-xs",color:"grey",style:{"margin-top":"-30px"},label:"Ocultar Detalhes",onClick:n[5]||(n[5]=e=>a.mostrarDinheiro=!a.mostrarDinheiro)})):v("",!0),a.mostrarDinheiro?v("",!0):(u(),b(w,{key:1,outline:"",size:"sm",icon:"keyboard_arrow_down",class:"no-shadow q-ma-xs",color:"grey",style:{"margin-top":"-30px"},label:"Ver Detalhes",onClick:n[6]||(n[6]=e=>a.mostrarDinheiro=!a.mostrarDinheiro)}))]),_:1})):v("",!0),a.mostrarDinheiro?(u(),q("div",Ga,[t(E,{highlight:"",class:"q-pa-none"},{default:i(()=>[(u(!0),q(z,null,$(a.dinheiro,e=>(u(),b(M,{key:e.id,class:"row u-separador q-my-none q-pa-xs"},{default:i(()=>[s("div",Ja,[s("div",Ka,[s("div",Wa,[d(c(a.documentos[e.idDocumento].descricaoContato)+" ",1),t(m,{cor:"primary",escuro:"",class:"q-mx-sm"},{default:i(()=>[d("#"+c(a.documentos[e.idDocumento].numero),1)]),_:2},1024)]),Xa,s("div",Ya,c(r.$filters.numero(e.valor,2)),1),s("div",Za,c(r.$filters.data(e.dataVencimento)),1)])])]),_:2},1024))),128))]),_:1})])):v("",!0)]),_:1}),a.sangrias.length?(u(),b(I,{key:2,class:"itemOk q-my-md q-mb-xl"},{default:i(()=>[s("div",ao,[s("div",oo,[t(S,null,{default:i(()=>[d(" Sangrias ")]),_:1}),s("div",eo,[t(m,{cor:"primary",escuro:"",class:"q-mr-sm"},{default:i(()=>[d(c(a.sangrias.length),1)]),_:1})]),s("div",to,c(r.$filters.numero(a.totalSangrias,2)),1)])]),t(U,{class:"content-center justify-center q-mt-lg"},{default:i(()=>[a.mostrarSangrias?(u(),b(w,{key:0,outline:"",size:"sm",icon:"keyboard_arrow_up",class:"no-shadow q-ma-xs",color:"grey",style:{"margin-top":"-30px"},label:"Ocultar Detalhes",onClick:n[7]||(n[7]=e=>a.mostrarSangrias=!a.mostrarSangrias)})):v("",!0),a.mostrarSangrias?v("",!0):(u(),b(w,{key:1,outline:"",size:"sm",icon:"keyboard_arrow_down",class:"no-shadow q-ma-xs",color:"grey",style:{"margin-top":"-30px"},label:"Ver Detalhes",onClick:n[8]||(n[8]=e=>a.mostrarSangrias=!a.mostrarSangrias)}))]),_:1}),a.mostrarSangrias?(u(),q("div",io,[t(E,{highlight:"",class:"q-pa-none"},{default:i(()=>[(u(!0),q(z,null,$(a.sangrias,e=>(u(),b(M,{key:e.id,class:"row u-separador q-my-none q-pa-xs"},{default:i(()=>{var h,y;return[s("div",so,[s("div",ro,[s("div",no,c(((h=a.contatos[e.idContato])==null?void 0:h.nome)||((y=a.usuarios[e.idContato])==null?void 0:y.nome)||"Nome n\xE3o encontrado"),1),s("div",lo,c(e.documentoTipo),1),s("div",co,c(r.$filters.numero(e.valorCredito,2)),1),s("div",uo,c(r.$filters.dataHora(e.dataMovimento)),1),s("div",mo,c(a.observacoesSangrias[e.documentoId]),1)])])]}),_:2},1024))),128))]),_:1})])):v("",!0)]),_:1})):v("",!0),a.acertos.length||a.formasPagamento.filter(e=>e.tipo!==1&&(a.outrasFormasPagamento[e.id]||(a.totaisFormasPagamento[e.id]||{}).totalInformadoUsuario)).length?(u(),q("div",ho," Outras formas de pagamento ")):v("",!0),a.acertos.length?(u(),b(I,{key:4,class:"itemWarning q-mt-md"},{default:i(()=>[s("div",fo,[s("div",po,[t(S,null,{default:i(()=>[d(" Acertos ")]),_:1}),s("div",go,c(r.$filters.numero(a.totalAcertos,2)),1)])]),s("div",_o,[t(E,{highlight:"",class:"q-pa-none"},{default:i(()=>[(u(!0),q(z,null,$(a.acertos,(e,h)=>(u(),b(M,{key:h,class:"row u-separador q-my-none q-pa-xs"},{default:i(()=>[s("div",vo,[s("div",xo,[s("div",bo,c(e.descricao),1),s("div",Co,c(r.$filters.numero(e.valor,2)),1)])])]),_:2},1024))),128))]),_:1})])]),_:1})):v("",!0),(u(!0),q(z,null,$(a.formasPagamento.filter(e=>e.tipo!==1&&(a.outrasFormasPagamento[e.id]||(a.totaisFormasPagamento[e.id]||{}).totalInformadoUsuario)),e=>(u(),b(I,{key:e.id,class:H(["q-mt-md",g.cor("outraFormaPagamento","card",e.id)])},{default:i(()=>[s("div",yo,[s("div",qo,[t(S,null,{default:i(()=>[d(c(e.descricao),1)]),_:2},1024),s("div",Fo,[t(m,{cor:"primary",escuro:"",class:"q-mr-sm"},{default:i(()=>[d(c(a.outrasFormasPagamento[e.id]?(a.outrasFormasPagamento[e.id]||[]).length:0),1)]),_:2},1024)]),s("div",{class:H(["text-right text-h5 text-weight-bold q-mb-sm",g.cor("outraFormaPagamento","",e.id)])},[s("span",null,[d(c(r.$filters.numero((a.totaisFormasPagamento[e.id]||{}).totalInformadoUsuario,2))+" ",1),t(P,null,{default:i(()=>[d("Digitado pelo usu\xE1rio")]),_:1})]),s("p",wo,[d(c(r.$filters.numero((a.totaisFormasPagamento[e.id]||{}).totalSistema-(a.totaisFormasPagamento[e.id]||{}).totalInformadoUsuario,2))+" ",1),t(P,null,{default:i(()=>[d("Diferen\xE7a")]),_:1})])],2)])]),a.outrasFormasPagamento[e.id]?(u(),b(U,{key:0,class:"content-center justify-center q-mt-lg"},{default:i(()=>[e.mostrar?(u(),b(w,{key:0,outline:"",size:"sm",icon:"keyboard_arrow_up",class:"no-shadow q-ma-xs",color:"grey",style:{"margin-top":"-30px"},label:"Ocultar Detalhes",onClick:h=>e.mostrar=!e.mostrar},null,8,["onClick"])):v("",!0),e.mostrar?v("",!0):(u(),b(w,{key:1,outline:"",size:"sm",icon:"keyboard_arrow_down",class:"no-shadow q-ma-xs",color:"grey",style:{"margin-top":"-30px"},label:"Ver Detalhes",onClick:h=>e.mostrar=!e.mostrar},null,8,["onClick"]))]),_:2},1024)):v("",!0),e.mostrar?(u(),q("div",Do,[t(E,{highlight:"",class:"q-pa-none"},{default:i(()=>[(u(!0),q(z,null,$(a.outrasFormasPagamento[e.id],h=>(u(),b(M,{key:h.id,class:"row u-separador q-my-none q-pa-xs"},{default:i(()=>[s("div",So,[s("div",ko,[s("div",Po,[d(c(a.documentos[h.idDocumento].descricaoContato)+" ",1),t(m,{cor:"primary",escuro:"",class:"q-mx-sm"},{default:i(()=>[d(" #"+c(a.documentos[h.idDocumento].id.slice(-6)),1)]),_:2},1024)]),s("div",Ao,c(r.$filters.numero(h.valor,2)),1),s("div",zo,c(r.$filters.data(h.dataVencimento)),1)])])]),_:2},1024))),128))]),_:2},1024)])):v("",!0)]),_:2},1032,["class"]))),128))]))])])])]),_:1})]),_:1}),t(ea,{class:"bg-light",bordered:""},{default:i(()=>[t(T,{class:"bg-light text-tertiary q-pa-sm u-container"},{default:i(()=>[t(ta),a.visibilidade.botao.reabrir?(u(),b(w,{key:0,onClick:g.reabrir,color:"negative",flat:"",label:"Reabrir",unelevated:""},null,8,["onClick"])):v("",!0),a.visibilidade.botao.finalizar?(u(),b(w,{key:1,onClick:g.finalizar,label:"finalizar",color:"primary",class:"q-ml-sm",unelevated:""},null,8,["onClick"])):v("",!0),a.visibilidade.botao.fechar?(u(),b(w,{key:2,onClick:g.fechar,color:"primary",label:"refechar caixa",class:"q-ml-sm",unelevated:""},null,8,["onClick"])):v("",!0)]),_:1})]),_:1})]),_:1}),t(x,{ref:"Fechar",onFechado:g.atualizar},null,8,["onFechado"])]),_:1},8,["modelValue","onHide"])}var Eo=O(da,[["render",$o]]);const Vo={components:{Avatar:sa,CaixaConferir:Eo},data(){return{empresa:{},contato:{},caixaConferirModal:{visivel:!1}}},emits:["atualizar"],methods:{abrirCaixaConferirModal(){this.caixaConferirModal.visivel=!0},async atualizar(){this.empresa=await $db.contato.le({id:this.documento.idEmpresa}),this.contato=await $db.contato.le({id:this.documento.idContato})},executar(r){switch(r){case"atualizar":this.atualizar(),this.$emit("atualizar")}}},props:{documento:{required:!0,type:Object}},mounted(){this.atualizar()}},Io={id:"CaixaCard",class:"q-mb-md"},Mo={class:"col-12 col-md-6 q-pl-none"},jo={class:"col-12 col-md"},Ho={class:"text-left q-my-none"},Uo={class:"text-weight-bold"},No=s("br",null,null,-1),To={class:"col-6 col-md-auto"},Oo={class:"text-left q-my-none"},Qo={class:"col-6 col-md-auto"},Bo={class:"text-left q-my-none"},Ro={class:"col-6 col-md"},Lo={class:"text-right text-h5 text-positive text-weight-bold q-my-none"},Go={class:"text-right text-weight-normal text-tertiary text-body2 q-my-none"},Jo={class:"col-6 col-md-auto"};function Ko(r,n,f,C,a,g){const p=A("avatar"),m=A("row"),x=A("CaixaConferir");return u(),q("div",Io,[t(I,{class:"extratoItem bg-white q-pa-sm no-shadow"},{default:i(()=>[t(m,{class:"items-center q-mx-none q-px-none q-mb-sm"},{default:i(()=>[s("div",Mo,[t(T,{class:"q-pa-none"},{default:i(()=>[t(p,{imagem:a.contato.imagem,rotulo:a.contato.nome,tamanho:"40",style:{float:"left"}},null,8,["imagem","rotulo"]),t(S,null,{default:i(()=>[d(c(a.contato.apelido),1)]),_:1}),t(Q,{rounded:"",color:"grey",small:"",class:"q-ma-sm"},{default:i(()=>[d(c(f.documento.status),1)]),_:1}),t(Q,{class:"q-mr-sm",rounded:"",color:"positive"},{default:i(()=>[d(" #"+c(parseInt(f.documento.numero)||(f.documento.id||"").slice(-6)),1)]),_:1})]),_:1})]),s("div",jo,[s("p",Ho,[s("span",Uo,[t(V,{name:"business "}),d(" "+c(a.empresa.apelido),1)]),No,d(" "+c(a.empresa.nome),1)])]),s("div",To,[s("p",Oo,[f.documento.dataHoraEmissao?(u(),b(V,{key:0,name:"mdi-calendar-today "})):v("",!0),d(" "+c(r.$filters.data(f.documento.dataHoraEmissao))+" ",1),t(P,null,{default:i(()=>[d(" Abertura ")]),_:1})])]),s("div",Qo,[s("p",Bo,[f.documento.dataHoraEmissao?(u(),b(V,{key:0,name:"mdi-calendar-today"})):v("",!0),d(" "+c(r.$filters.data(f.documento.dataHoraFinalizado))+" ",1),t(P,null,{default:i(()=>[d(" Fechamento ")]),_:1})])]),s("div",Ro,[s("p",Lo,c(r.$filters.numero(f.documento.totalDocumento,2)),1),s("p",Go,c(r.$filters.numero(f.documento.subTotal,2)),1)]),s("div",Jo,[t(w,{rounded:"",dense:"",flat:"",icon:"edit",class:"no-shadow q-ma-xs",size:"md",color:"primary",style:{float:"right"},onClick:g.abrirCaixaConferirModal},{default:i(()=>[t(P,null,{default:i(()=>[d(" Abrir confer\xEAncia ")]),_:1})]),_:1},8,["onClick"]),t(w,{rounded:"",dense:"",flat:"",icon:"print",class:"no-shadow q-ma-xs",size:"md",color:"primary",style:{float:"right"}},{default:i(()=>[t(ra,null,{default:i(()=>[t(E,{link:"",separator:""},{default:i(()=>[t(M,{clickable:"",onClick:n[0]||(n[0]=e=>{r.$imprimir("fechamento-de-caixa",f.documento.id)})},{default:i(()=>[t(N,{avatar:""},{default:i(()=>[t(V,{name:"print"})]),_:1}),t(N,null,{default:i(()=>[t(B,null,{default:i(()=>[d("Imprimir Fechamento")]),_:1})]),_:1})]),_:1}),t(M,{clickable:"",onClick:n[1]||(n[1]=e=>{r.$imprimir("conferencia-de-caixa",f.documento.id)})},{default:i(()=>[t(N,{avatar:""},{default:i(()=>[t(V,{name:"print"})]),_:1}),t(N,null,{default:i(()=>[t(B,null,{default:i(()=>[d("Imprimir Confer\xEAncia")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),t(x,{modelValue:a.caixaConferirModal.visivel,"onUpdate:modelValue":n[2]||(n[2]=e=>a.caixaConferirModal.visivel=e),idDocumentoCaixa:f.documento.id,onExecutar:g.executar},null,8,["modelValue","idDocumentoCaixa","onExecutar"])])}var Wo=O(Vo,[["render",Ko]]);const Xo={components:{CaixaCard:Wo,GChipsV2:la},data(){return{documentosCaixaConferencia:[],documentosCaixaFechado:[],dataIni:"",dataFim:"",termosPesquisa:[]}},methods:{async filtrar(){let r=[];const n=(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data;let f=new Date(new Date(this.dataIni).toDateString()),C=new Date(new Date(this.dataFim).toDateString());for(const p of n)(await $db.hibrido.lista({table:"documento",where:{tipo:"Caixa",idEmpresa:p.id}})).forEach(x=>{const e=new Date(new Date(x.dataHoraEmissao).toDateString());e<=C&&e>=f&&r.push(x)});r.sort((p,m)=>new Date(p.dataHoraEmissao)>new Date(m.dataHoraEmissao)?-1:1);for(let p of this.termosPesquisa)p=p.normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase(),/^#\d+$/gi.test(p)?r=r.filter(m=>m.numero===Number(p.slice(1))):r=r.filter(m=>{const x=n.find(e=>e.id===m.idEmpresa);return((x.nome||"")+(x.apelido||"")).normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase().search(p)!==-1});let a=r.filter(p=>p.status==="Aguardando Confer\xEAncia"),g=r.filter(p=>p.status==="Fechado");this.documentosCaixaConferencia=a,this.documentosCaixaFechado=g}},mounted(){const r=new Date(new Date().toDateString()),n=new Date(r);n.setDate(n.getDate()-7),this.dataIni=n,this.dataFim=r,this.filtrar()}},Yo={class:"CaixaTesouraria"},Zo={class:"col-12 col-md-6"},ae={class:"col"},oe=s("div",{class:"col-auto",style:{"align-items":"center",display:"flex"}},[s("label",null,"at\xE9")],-1),ee={class:"col"},te={class:"q-pa-sm"};function ie(r,n,f,C,a,g){const p=A("GChipsV2"),m=A("campo"),x=A("row"),e=A("caixa-card");return u(),q("div",Yo,[t(I,{class:"q-pa-sm q-mx-sm no-shadow"},{default:i(()=>[t(x,{class:"items-center q-col-gutter-md"},{default:i(()=>[s("div",Zo,[t(p,{modelValue:a.termosPesquisa,"onUpdate:modelValue":[n[0]||(n[0]=h=>a.termosPesquisa=h),g.filtrar],class:"q-px-none",placeholder:"Termo de pesquisa"},{prepend:i(()=>[t(V,{name:"mdi-filter"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),s("div",ae,[t(m,{modelValue:a.dataIni,"onUpdate:modelValue":n[1]||(n[1]=h=>a.dataIni=h),tipo:"data",onInput:g.filtrar,dense:"",outlined:""},null,8,["modelValue","onInput"])]),oe,s("div",ee,[t(m,{modelValue:a.dataFim,"onUpdate:modelValue":n[2]||(n[2]=h=>a.dataFim=h),tipo:"data",onInput:g.filtrar,dense:"",outlined:""},null,8,["modelValue","onInput"])])]),_:1})]),_:1}),s("div",te,[t(E,{class:"no-border"},{default:i(()=>[t(R,{"default-opened":"",label:"Aguardando Confer\xEAncia"},{default:i(()=>[(u(!0),q(z,null,$(a.documentosCaixaConferencia,h=>(u(),q("div",{key:h.id},[t(e,{documento:h,onAtualizar:g.filtrar},null,8,["documento","onAtualizar"])]))),128))]),_:1})]),_:1}),t(E,{class:"no-border"},{default:i(()=>[t(R,{"default-opened":"",label:"Fechado"},{default:i(()=>[(u(!0),q(z,null,$(a.documentosCaixaFechado,h=>(u(),q("div",{key:h.id},[t(e,{documento:h,onAtualizar:g.filtrar},null,8,["documento","onAtualizar"])]))),128))]),_:1})]),_:1})])])}var le=O(Xo,[["render",ie]]);export{le as default};
