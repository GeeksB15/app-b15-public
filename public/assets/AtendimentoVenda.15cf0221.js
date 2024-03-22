import{_ as K,p as _,o as u,i as b,w as l,f as n,s as W,B as aa,E as ea,e as f,C as Z,D as R,L as X,x as v,V as ta,cq as J,l as g,y as oa,M as ia,bZ as na,d as p,j as S,aF as sa,ai as Y,aj as U,ak as y,ah as Q,u as N,aJ as z,F as B,r as M,ba as da,bb as k,t as C,k as la,b9 as ra}from"./index.83d285ce.js";import{n as ma}from"./nfePrincipal.5a1b17ca.js";import{V as ca}from"./VendaCard.68ed3372.js";import{G as ua}from"./GChipsV2.bd99259f.js";import{o as va}from"./open-url.0da0aeaf.js";import"./compactarValidarNFe.e05e6837.js";import"./obterItens.9414379c.js";import"./codigosANP.a6c1a264.js";import"./BadgeCopiarUid.9f602020.js";import"./DocumentosFiscais.84b0c1f5.js";import"./Campo.2385924b.js";import"./ModalHistoricoStatus.357f17c3.js";import"./emitirNFe.3ad8673b.js";const ha={data(){return{motivo:"",motivos:[],tipo:"devolucao",visivel:!1}},emits:["executa"],methods:{async atualizar(){this.motivo="",this.tipo="devolucao";const o=await $db.configuracoes.le({nome:"vendas.garantia.motivo"});this.motivos=o.map(e=>e.valor)},executa(){if(this.tipo==="garantia"&&!this.motivo){this.$q.notify({message:"Selecione o motivo",type:"negative"});return}this.visivel=!1,this.$emit("executa",{tipo:this.tipo,motivo:this.motivo})},async mostrar(){await this.atualizar(),this.visivel=!0}}},ga={class:"layout-padding"},pa={class:"q-mt-lg text-center"};function fa(o,e,r,c,a,s){const i=_("campo");return u(),b(oa,{modelValue:a.visivel,"onUpdate:modelValue":e[5]||(e[5]=d=>a.visivel=d),"content-css":{minWidth:"30vw"}},{default:l(()=>[n(W,{class:"q-dialog-plugin"},{default:l(()=>[n(aa,{class:"bg-primary text-white"},{default:l(()=>[n(ea,null,{default:l(()=>[f("Devolu\xE7\xE3o/Garantia")]),_:1}),Z(n(R,{dense:"",flat:"",icon:"close",round:""},null,512),[[X]])]),_:1}),v("div",ga,[v("form",{class:"q-pa-md",onSubmit:e[4]||(e[4]=ta((...d)=>s.executa&&s.executa(...d),["prevent"]))},[n(J,{modelValue:a.tipo,"onUpdate:modelValue":[e[0]||(e[0]=d=>a.tipo=d),e[1]||(e[1]=d=>a.motivo="")],class:"q-mr-sm",label:"Devolu\xE7\xE3o",val:"devolucao"},null,8,["modelValue"]),n(J,{modelValue:a.tipo,"onUpdate:modelValue":e[2]||(e[2]=d=>a.tipo=d),label:"Garantia",val:"garantia"},null,8,["modelValue"]),a.tipo==="garantia"?(u(),b(i,{key:0,modelValue:a.motivo,"onUpdate:modelValue":e[3]||(e[3]=d=>a.motivo=d),rotulo:"Motivo",tipo:"seletor",opcoes:a.motivos},null,8,["modelValue","opcoes"])):g("",!0),v("div",pa,[n(R,{color:"primary",class:"q-ml-sm no-shadow",label:"Continua",type:"submit"})])],32)])]),_:1})]),_:1},8,["modelValue"])}var Ca=K(ha,[["render",fa]]);const ba={components:{Avatar:ia,NfePrincipal:ma,VendaCard:ca,VendaDevolucaoGarantia:Ca,VendaModal:na,GChipsV2:ua},computed:{temVendasAbertas(){return!!this.vendasAbertas.length},temVendasCanceladas(){return!!this.vendasCanceladas.length},temVendasFinalizadas(){return!!this.vendasFinalizadas.length},temRegistros(){return this.temVendasAbertas||this.temVendasCanceladas||this.temVendasFinalizadas}},data(){return{grupos:[],documentos:{},itens:{},documentosItens:[],vendasCompletas:{},vendasAbertas:[],vendasFinalizadas:[],vendasCanceladas:[],totalVendasAbertas:0,totalVendasFinalizadas:0,totalVendasCanceladas:0,filtro:{},tipoLista:"documentos",dataIni:null,dataFim:null,carregando:!1,colunas:[{name:"descricao",label:"Descri\xE7\xE3o",align:"left"},{name:"documento",label:"Documento",align:"left"},{name:"valorUnitario",label:"Valor Unit\xE1rio",align:"right"},{name:"quantidade",label:"Quantidade",align:"right"},{name:"valorTotal",label:"Valor Total",align:"right"},{name:"botao",label:"",align:"right"}],contato:null,tablePagination:{page:1,rowsPerPage:25},vendaCardPagination:{maxPages:7,perPage:5,vendasAbertas:{page:1,min:1,max:1},vendasFinalizadas:{page:1,min:1,max:1},vendasCanceladas:{page:1,min:1,max:1}},documentoItemDevolucaoGarantia:{},modalVenda:{visivel:!1,orcamento:{}},urlHistoricoCliente:""}},methods:{abrirHistoricoCliente(){va(this.urlHistoricoCliente)},adicionarOrcamento(){this.$refs.modalVenda.mostrar({idContato:this.$route.params.id})},abrirModalDevolucaoGarantia(o){this.documentoItemDevolucaoGarantia=o,this.$refs.modalDevolucaoGarantia.mostrar()},alternarLista(){this.tipoLista=this.tipoLista==="documentos"?"itens":"documentos",this.atualizar()},fechouNFe(o){o&&$utils.emitter.emit("atualizarDocumentosFiscais")},async finalizaDevolucaoGarantia(o){var P,D;let e,r;if(r=this.documentoItemDevolucaoGarantia||{},r.idDocumento&&(e=await $db.hibrido.le({table:"documento",id:r.idDocumento})),!e.id){this.$q.notify("Venda original n\xE3o encontrada");return}let c={};if(this.documentoItemDevolucaoGarantia.idItem&&(c=await $erp().item.get(this.documentoItemDevolucaoGarantia.idItem)||{}),!c.id){this.$q.notify("Erro na recupera\xE7\xE3o do item");return}if(!e.idContato){this.$q.notify("Destinat\xE1rio n\xE3o encontrado");return}if(!e.idEmpresa){this.$q.notify("Emitente n\xE3o encontrado");return}const a=await $erp().documento.where({idContato:e.idContato,idEmpresa:e.idEmpresa,tipo:"Venda",status:"Or\xE7amento"}).toArray();a.sort((F,t)=>new Date(F.dataHoraEmissao)<new Date(t.dataHoraEmissao)?1:-1);const s=await $utils.selecionarCfop({ncm:c.ncm,idItem:c.id,itemTipo:c.tipo,codigoDocumentoOperacao:((P=a[0])==null?void 0:P.codigoDocumentoOperacao)||e.codigoDocumentoOperacao,idContatoDestinatario:e.idContato,idContatoEmitente:e.idEmpresa,operacaoFator:1});if(!s){this.$q.notifyError("CFOP n\xE3o encontrado");return}let i={};const d=$utils.removerAcentos((this.documentoItemDevolucaoGarantia.tipoItem||"").toLowerCase())==="servico";o.tipo==="devolucao"&&(i.operacao=d?"Devolu\xE7\xE3o de Servi\xE7o":"Devolu\xE7\xE3o de Venda"),o.tipo==="garantia"&&(i.operacao=d?"Garantia de Servi\xE7o":"Garantia de Venda",i.motivo=o.motivo),i.id=$utils.uuid(),i.dataHoraFinalizado="",i.idDocumentoItemVenda=this.documentoItemDevolucaoGarantia.id,i.idDocumentoVenda=this.documentoItemDevolucaoGarantia.idDocumento,i.idItem=this.documentoItemDevolucaoGarantia.idItem,i.idPlanoContaDestino=this.documentoItemDevolucaoGarantia.idPlanoContaDestino,i.idPlanoContaEstoque=this.documentoItemDevolucaoGarantia.idPlanoContaEstoque,i.tipoItem=this.documentoItemDevolucaoGarantia.tipoItem,i.descricaoItem=this.documentoItemDevolucaoGarantia.descricaoItem,i.status="Or\xE7amento",i.quantidade=this.documentoItemDevolucaoGarantia.quantidade||1,i.operacaoFator=s==null?void 0:s.fator,i.idCfop=s==null?void 0:s.id;const I=this.documentoItemDevolucaoGarantia.descontoItem,w=this.documentoItemDevolucaoGarantia.descontoTotalRateado/this.documentoItemDevolucaoGarantia.quantidade,x=this.documentoItemDevolucaoGarantia.descontoFaturaRateado/this.documentoItemDevolucaoGarantia.quantidade,V=$utils.arredondar(I+w+x,4);i.descontoItem=$utils.arredondar(V*-1,4),i.descontoPercentualItem=$utils.arredondar(i.descontoItem/this.documentoItemDevolucaoGarantia.valorItem*100,2),i.descontoTotalRateado=0,i.descontoFaturaRateado=0,i.descontoSubTotal=this.documentoItemDevolucaoGarantia.descontoSubTotal,i.valorCustoMedio=this.documentoItemDevolucaoGarantia.valorCustoMedio,i.valorCustoReposicao=this.documentoItemDevolucaoGarantia.valorCustoReposicao,i.valorOriginal=this.documentoItemDevolucaoGarantia.valorOriginal*-1,i.valorItem=this.documentoItemDevolucaoGarantia.valorItem*-1,i.subTotal=$utils.arredondar((this.documentoItemDevolucaoGarantia.valorItem-V)*-i.quantidade,2),i.total=i.subTotal,i.valorReal=$utils.arredondar((this.documentoItemDevolucaoGarantia.valorItem-V)*-1,4),i.valorRealTotal=i.subTotal,i.valorIpi=this.documentoItemDevolucaoGarantia.valorIpi*-1,i.valorIcms=this.documentoItemDevolucaoGarantia.valorIcms*-1,i.valorIcmsSt=this.documentoItemDevolucaoGarantia.valorIcmsSt*-1,i.valorDifal=this.documentoItemDevolucaoGarantia.valorDifal*-1,localStorage.setItem("documentoItemDevolucao",JSON.stringify(i)),a.length&&(i.idDocumento=a[0].id,i.dataHoraEmissao=$utils.dataAtual(),await $db.documentoItem.grava({atual:i}),this.$q.notify({message:"Item adicionado ao or\xE7amento.",type:"positive"})),this.$refs.modalVenda.mostrar({id:(D=a[0])==null?void 0:D.id,idContato:this.$route.params.id})},async atualizar(){this.documentos={},this.itens={},this.documentosItens=[],this.vendasCompletas={},this.tablePagination={page:1,rowsPerPage:25};let o,e;e=JSON.parse(localStorage.getItem("clienteSistema"))||{},o="https://rel.storage.b15.com.br/Relatorios/OptiSoul/historico-cliente.html?",o+="CodigoCliente="+this.contato.codigoContato,o+="&BancoDeDados="+e.bancoDeDados,o+="&URLServidor="+e.urlServidor,this.urlHistoricoCliente=o,await this.atualizarVendas()},async carregarImagensItens(o){const e=Object.keys(o);if(!!e.length){await $utils.dormir(200);try{const r=await $db.hibrido.lista({table:"item",columns:["id","descricao","imagem"],whereIn:{id:e}});for(const c of r)o[c.id].imagem=c.imagem||""}catch(r){console.error("Erro ao ler imagens de itens - ",r)}}},async carregarImagensContatos(o){const e=Object.keys(o);if(!!e.length){await $utils.dormir(200);try{const r=await $db.hibrido.lista({table:"contato",columns:["id","apelido","imagem"],whereIn:{id:e}});for(const c of r)o[c.id].imagem=c.imagem||""}catch(r){console.error("Erro ao carregar imagens de contatos - ",r)}}},executar(){this.atualizar()},async atualizarVendas(){var e,r,c;const o=$utils.logarIni("AtendimentoVenda");await $tryLoading(async()=>{$db.hibrido.isOnline()?this.tipoLista==="itens"?await this.atualizarVendasItensOnline():await this.atualizarVendasOnline():this.tipoLista==="itens"?await this.atualizarVendasItensOffline():await this.atualizarVendasOffline()},{mensagem:"Carregando vendas...",erro:"Ocorreu um erro ao consultar vendas",carregando:a=>this.carregando=a}),$utils.logarFim(o,(((e=this.vendasAbertas)==null?void 0:e.length)||0)+(((r=this.vendasFinalizadas)==null?void 0:r.length)||0)+(((c=this.totalVendasCanceladas)==null?void 0:c.length)||0))},async atualizarVendasOnline(){var i,d,I,w,x,V;if(!this.contato.id){console.error("id contato n\xE3o fornecido em atualizarVendasOnline");return}const{vendasAbertas:o,vendasFinalizadas:e,vendasCanceladas:r}=await $db.venda.leListaCompletaOnline({where:{idContato:this.contato.id,periodo:{dataIni:this.dataIni,dataFim:this.dataFim},grupos:this.grupos},vendaCardPagination:this.vendaCardPagination}),c=[...o.data.vendas,...e.data.vendas,...r.data.vendas],a={...o.data.itens,...e.data.itens,...r.data.itens},s={...o.data.contatos,...e.data.contatos,...r.data.contatos};for(const P of c)for(const D of P.carrinho)D.item=a[D.idItem];this.vendasCompletas={dadosContatos:s,contatosEmpresa:e.data.contatosEmpresa,faturasAbertas:e.data.faturasAbertas},this.vendaCardPagination.vendasAbertas.max=(i=o.totalPages)!=null?i:0,this.vendaCardPagination.vendasFinalizadas.max=(d=e.totalPages)!=null?d:0,this.vendaCardPagination.vendasCanceladas.max=(I=r.totalPages)!=null?I:0,this.vendasAbertas=o.data.vendas,this.vendasFinalizadas=e.data.vendas,this.vendasCanceladas=r.data.vendas,this.totalVendasAbertas=$filters.numero((w=o.somaTotalDocumento)!=null?w:0,2),this.totalVendasFinalizadas=$filters.numero((x=e.somaTotalDocumento)!=null?x:0,2),this.totalVendasCanceladas=$filters.numero((V=r.somaTotalDocumento)!=null?V:0,2),this.carregarImagensContatos(this.vendasCompletas.dadosContatos)},async atualizarVendasItensOnline(){if(!this.contato.id){console.error("id contato n\xE3o fornecido em atualizarVendasItensOnline");return}const{vendasFinalizadas:o}=await $db.venda.leListaCompletaItensOnline({where:{idContato:this.contato.id,periodo:{dataIni:this.dataIni,dataFim:this.dataFim},grupos:this.grupos},vendaCardPagination:this.vendaCardPagination}),e={},r=[];for(const c of o.data.vendas)e[c.id]=c,r.push(...c.carrinho);this.documentos=e,this.itens=o.data.itens,this.documentosItens=r.sort((c,a)=>new Date(a.dataHoraFinalizado||a.DataHoraEmissao||0)-new Date(c.dataHoraFinalizado||c.DataHoraEmissao||0)),this.carregarImagensItens(this.itens)},async atualizarVendasItensOffline(){const o=await $db.venda.leListaCompletaOffline({where:{idContato:this.contato.id,periodo:{dataIni:this.dataIni,dataFim:this.dataFim},status:"finalizada",grupos:this.grupos},page:this.vendaCardPagination.vendasFinalizadas.page,limit:1e3}),e={},r={},c=o.data.map(({id:d})=>d),a=await $db.hibrido.lista({table:"documentoItem",whereIn:{idDocumento:c}});await $db.hibrido.lista({table:"documento",whereIn:{documentoId:c}});const s=a.filter(({idItem:d})=>d).map(({idItem:d})=>d),i=await $db.hibrido.lista({table:"item",whereIn:{id:s}});for(const d of i)r[d.id]=d;for(const d of o.data)e[d.id]=d;this.documentos=e,this.itens=r,this.documentosItens=a.sort((d,I)=>new Date(I.dataHoraFinalizado||I.DataHoraEmissao||0)-new Date(d.dataHoraFinalizado||d.DataHoraEmissao||0))},async atualizarVendasOffline(){var q,E,O,T,L,j;const o=await $db.venda.leListaCompletaOffline({where:{idContato:this.contato.id,periodo:{dataIni:this.dataIni,dataFim:this.dataFim},status:"aberta",grupos:this.grupos},page:this.vendaCardPagination.vendasAbertas.page,limit:5}),e=await $db.venda.leListaCompletaOffline({where:{idContato:this.contato.id,periodo:{dataIni:this.dataIni,dataFim:this.dataFim},status:"finalizada",grupos:this.grupos},page:this.vendaCardPagination.vendasFinalizadas.page,limit:5}),r=await $db.venda.leListaCompletaOffline({where:{idContato:this.contato.id,periodo:{dataIni:this.dataIni,dataFim:this.dataFim},status:"cancelada",grupos:this.grupos},page:this.vendaCardPagination.vendasCanceladas.page,limit:5}),c=[...o.data,...e.data,...r.data],a=c.map(({id:m})=>m),s=await $db.hibrido.lista({table:"documentoItem",whereIn:{idDocumento:a}}),i=await $db.hibrido.lista({table:"documento",whereIn:{documentoId:a}}),d=c.map(({idContato:m})=>m),I=c.map(({idContatoVendedor:m})=>m),w=[...d,...I].filter(Boolean),x=await $db.hibrido.lista({table:"contato",whereIn:{id:w}}),V={};for(const m of x)V[m.id]=m;const D=(await $db.hibrido.lista({table:"empresa",columns:["idContato"],whereFilter:{ativo:!0}})).map(({idContato:m})=>m),F=await $db.hibrido.lista({table:"contato",columns:["id"],whereIn:{id:D},whereFilter:{ativo:!0}}),t=(await $db.hibrido.lista({table:"documento",where:{tipo:"Fatura",idContato:this.contato.id},whereFilter:{status:"Aberta"}})).sort((m,h)=>!m.numero||m.numero<h.numero?-1:1),G=s.filter(({idItem:m})=>m).map(({idItem:m})=>m),H=await $db.hibrido.lista({table:"item",whereIn:{id:G}}),A={};for(const m of H)A[m.id]=m;for(const m of c){m.carrinho=s.filter(({idDocumento:h})=>h===m.id),m.envelopes=i.filter(h=>h.documentoId===m.id&&h.tipo==="Envelope"),m.customs=i.filter(h=>h.documentoId===m.id&&h.tipo==="Custom"),m.oss=i.filter(h=>h.documentoId===m.id&&h.tipo==="Ordem de Servi\xE7o"),m.kits=i.filter(h=>h.documentoId===m.id&&h.tipo==="Venda Kit");for(const h of m.carrinho)h.item=A[h.idItem];for(const h of m.envelopes)h.itens=m.carrinho.filter(({idDocumentoAdicional:$})=>$===h.id)}this.vendasCompletas={dadosContatos:V,contatosEmpresa:F,faturasAbertas:t},this.vendaCardPagination.vendasAbertas.max=(q=o.totalPages)!=null?q:0,this.vendaCardPagination.vendasFinalizadas.max=(E=e.totalPages)!=null?E:0,this.vendaCardPagination.vendasCanceladas.max=(O=r.totalPages)!=null?O:0,this.vendasAbertas=o.data,this.vendasFinalizadas=e.data,this.vendasCanceladas=r.data,this.totalVendasAbertas=$filters.numero((T=o.somaTotalDocumento)!=null?T:0,2),this.totalVendasFinalizadas=$filters.numero((L=e.somaTotalDocumento)!=null?L:0,2),this.totalVendasCanceladas=$filters.numero((j=r.somaTotalDocumento)!=null?j:0,2)},async limparFiltro(){this.grupos=[],this.dataFim=new Date;const o=new Date;if(o.setFullYear(o.getFullYear()-2),this.dataIni=o,this.contato.codigoContato){const e=await $db.configuracoes.leValorNumerico("venda.codigoconsumidor");this.contato.codigoContato===e&&(this.dataIni=this.dataFim)}}},watch:{"$route.params.id"(){const o=this.$route.params.id;!o||$db.contato.le({id:o}).then(e=>{this.contato=e,this.tipoLista="documentos",this.limparFiltro().then(()=>{this.atualizar()})})}},created(){$utils.emitter.off("atualizarAtendimentoVenda"),$utils.emitter.on("atualizarAtendimentoVenda",this.atualizar)},mounted(){const o=this.$route.params.id;!o||$db.contato.le({id:o}).then(e=>{this.contato=e,this.limparFiltro().then(()=>{this.atualizar()})})}},Ia={class:"AtendimentoVenda q-pb-md"},Va={class:"row q-mt-md",style:{display:"flex","align-items":"center"}},wa={class:"col"},Da={class:"col-12 col-md-6"},_a={class:"col"},xa=v("div",{class:"col-auto",style:{"align-items":"center",display:"flex"}},[v("label",null,"at\xE9")],-1),Pa={class:"col"},Fa={class:"col-auto q-ml-xs"},ya={key:0,class:"row justify-end q-mb-md"},za={class:"row"},ka={key:1,class:"row justify-end q-mb-md"},Ga={key:0,class:"row justify-end q-mb-md"},Aa={class:"row"},qa={key:1,class:"row justify-end q-mb-md"},Ea={key:0,class:"col-12",style:{"margin-bottom":"50px"}},Oa={key:1,class:"col-12",style:{"margin-bottom":"50px"}},Ta={class:"row items-center",style:{"min-width":"180px","max-width":"100%"}},La={class:"col-auto hideonmobile"},Ra={class:"col",style:{"word-break":"break-word","white-space":"initial"}},Ha=v("br",null,null,-1),Sa=v("br",null,null,-1),Ua=v("br",null,null,-1),Qa=v("br",null,null,-1),Na=v("br",null,null,-1),Ba={key:0,style:{"text-decoration":"line-through"}},Ma={key:2,class:"q-pa-lg text-center"},ja=v("p",null,[v("small",null,"Registros n\xE3o encontrados")],-1),Ja=[ja];function Ya(o,e,r,c,a,s){var F;const i=_("GChipsV2"),d=_("campo"),I=_("row"),w=_("venda-card"),x=_("avatar"),V=_("VendaModal"),P=_("VendaDevolucaoGarantia"),D=_("NfePrincipal");return u(),p("div",Ia,[v("div",Va,[v("div",wa,[n(W,{class:"q-pa-sm q-ml-sm no-shadow"},{default:l(()=>[n(I,{class:"items-center q-col-gutter-md"},{default:l(()=>[v("div",Da,[n(i,{modelValue:a.grupos,"onUpdate:modelValue":[e[0]||(e[0]=t=>a.grupos=t),s.atualizarVendas],placeholder:"Filtre por Produto, Marca, N\xFAmero..."},{prepend:l(()=>[n(S,{name:"mdi-filter"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),v("div",_a,[n(d,{modelValue:a.dataIni,"onUpdate:modelValue":e[1]||(e[1]=t=>a.dataIni=t),tipo:"data",onBlur:s.atualizar,dense:"",outlined:""},null,8,["modelValue","onBlur"])]),xa,v("div",Pa,[n(d,{modelValue:a.dataFim,"onUpdate:modelValue":e[2]||(e[2]=t=>a.dataFim=t),tipo:"data",onBlur:s.atualizar,dense:"",outlined:""},null,8,["modelValue","onBlur"])])]),_:1})]),_:1})]),v("div",Fa,[n(R,{round:"",dense:"",flat:"",icon:"more_vert",color:"primary",size:"md"},{default:l(()=>[n(sa,null,{default:l(()=>[Z((u(),b(Y,{link:"","no-border":"",separator:""},{default:l(()=>[a.tipoLista==="itens"?(u(),b(U,{key:0,onClick:s.alternarLista,clickable:""},{default:l(()=>[n(y,{avatar:""},{default:l(()=>[n(S,{name:"view_stream"})]),_:1}),n(y,null,{default:l(()=>[n(Q,null,{default:l(()=>[f("Vendas")]),_:1})]),_:1})]),_:1},8,["onClick"])):g("",!0),a.tipoLista==="documentos"?(u(),b(U,{key:1,onClick:s.alternarLista,clickable:""},{default:l(()=>[n(y,{avatar:""},{default:l(()=>[n(S,{name:"view_list"})]),_:1}),n(y,null,{default:l(()=>[n(Q,null,{default:l(()=>[f("Produtos e Servi\xE7o")]),_:1})]),_:1})]),_:1},8,["onClick"])):g("",!0),n(U,{clickable:"",onClick:s.abrirHistoricoCliente},{default:l(()=>[n(y,{avatar:""},{default:l(()=>[n(S,{name:"mdi-account"})]),_:1}),n(y,null,{default:l(()=>[n(Q,null,{default:l(()=>[f("Hist\xF3rico do Cliente")]),_:1})]),_:1})]),_:1},8,["onClick"])]),_:1})),[[X]])]),_:1})]),_:1})])]),!a.carregando&&s.temRegistros&&a.tipoLista==="documentos"?(u(),b(Y,{key:0,class:"no-border"},{default:l(()=>[s.temVendasAbertas?(u(),b(N,{key:0,"model-value":!0,label:`Abertas (Total R$ ${a.totalVendasAbertas})`,group:"vendasAbertas"},{default:l(()=>[a.vendaCardPagination.vendasAbertas.max>1?(u(),p("div",ya,[n(z,{modelValue:a.vendaCardPagination.vendasAbertas.page,"onUpdate:modelValue":e[3]||(e[3]=t=>a.vendaCardPagination.vendasAbertas.page=t),min:a.vendaCardPagination.vendasAbertas.min,unelevated:"",max:a.vendaCardPagination.vendasAbertas.max,ellipses:"","max-pages":a.vendaCardPagination.maxPages,class:"float-right",onClick:s.atualizarVendas},null,8,["modelValue","min","max","max-pages","onClick"])])):g("",!0),v("div",za,[(u(!0),p(B,null,M(a.vendasAbertas,t=>(u(),p("div",{class:"q-px-sm full-width",key:t.id},[n(w,{id:t.id,dadosVenda:t,vendasCompletas:a.vendasCompletas,onExecutar:s.executar,class:"q-mb-md"},null,8,["id","dadosVenda","vendasCompletas","onExecutar"])]))),128))]),a.vendaCardPagination.vendasAbertas.max>1?(u(),p("div",ka,[n(z,{modelValue:a.vendaCardPagination.vendasAbertas.page,"onUpdate:modelValue":e[4]||(e[4]=t=>a.vendaCardPagination.vendasAbertas.page=t),min:a.vendaCardPagination.vendasAbertas.min,unelevated:"",max:a.vendaCardPagination.vendasAbertas.max,ellipses:"","max-pages":a.vendaCardPagination.maxPages,class:"float-right",onClick:s.atualizarVendas},null,8,["modelValue","min","max","max-pages","onClick"])])):g("",!0)]),_:1},8,["label"])):g("",!0),s.temVendasFinalizadas?(u(),b(N,{key:1,"model-value":!0,label:`Finalizadas (Total R$ ${a.totalVendasFinalizadas})`,group:"vendasFinalizadas"},{default:l(()=>[a.vendaCardPagination.vendasFinalizadas.max>1?(u(),p("div",Ga,[n(z,{modelValue:a.vendaCardPagination.vendasFinalizadas.page,"onUpdate:modelValue":e[5]||(e[5]=t=>a.vendaCardPagination.vendasFinalizadas.page=t),unelevated:"",min:a.vendaCardPagination.vendasFinalizadas.min,max:a.vendaCardPagination.vendasFinalizadas.max,ellipses:"","max-pages":a.vendaCardPagination.maxPages,class:"float-right",onClick:s.atualizarVendas},null,8,["modelValue","min","max","max-pages","onClick"])])):g("",!0),v("div",Aa,[(u(!0),p(B,null,M(a.vendasFinalizadas,t=>(u(),p("div",{class:"q-px-sm full-width",key:t.id},[n(w,{id:t.id,dadosVenda:t,vendasCompletas:a.vendasCompletas,onExecutar:s.executar,class:"q-mb-md"},null,8,["id","dadosVenda","vendasCompletas","onExecutar"])]))),128))]),a.vendaCardPagination.vendasFinalizadas.max>1?(u(),p("div",qa,[n(z,{modelValue:a.vendaCardPagination.vendasFinalizadas.page,"onUpdate:modelValue":e[6]||(e[6]=t=>a.vendaCardPagination.vendasFinalizadas.page=t),min:a.vendaCardPagination.vendasFinalizadas.min,max:a.vendaCardPagination.vendasFinalizadas.max,ellipses:"",unelevated:"","max-pages":a.vendaCardPagination.maxPages,class:"float-right",onClick:s.atualizarVendas},null,8,["modelValue","min","max","max-pages","onClick"])])):g("",!0)]),_:1},8,["label"])):g("",!0),s.temVendasCanceladas?(u(),b(N,{key:2,"model-value":!0,label:`Canceladas (Total R$ ${a.totalVendasCanceladas})`,group:"vendasCanceladas"},{default:l(()=>[a.vendaCardPagination.vendasCanceladas.max>1?(u(),p("div",Ea,[n(z,{modelValue:a.vendaCardPagination.vendasCanceladas.page,"onUpdate:modelValue":e[7]||(e[7]=t=>a.vendaCardPagination.vendasCanceladas.page=t),min:a.vendaCardPagination.vendasCanceladas.min,max:a.vendaCardPagination.vendasCanceladas.max,ellipses:"","max-pages":a.vendaCardPagination.maxPages,class:"float-right",onClick:s.atualizarVendas},null,8,["modelValue","min","max","max-pages","onClick"])])):g("",!0),(u(!0),p(B,null,M(a.vendasCanceladas,t=>(u(),p("div",{key:t.id},[n(w,{id:t.id,dadosVenda:t,vendasCompletas:a.vendasCompletas,onExecutar:s.executar,class:"q-mb-md"},null,8,["id","dadosVenda","vendasCompletas","onExecutar"])]))),128)),a.vendaCardPagination.vendasCanceladas.max>1?(u(),p("div",Oa,[n(z,{modelValue:a.vendaCardPagination.vendasCanceladas.page,"onUpdate:modelValue":e[8]||(e[8]=t=>a.vendaCardPagination.vendasCanceladas.page=t),min:a.vendaCardPagination.vendasCanceladas.min,max:a.vendaCardPagination.vendasCanceladas.max,ellipses:"","max-pages":a.vendaCardPagination.maxPages,class:"float-right",onClick:s.atualizarVendas},null,8,["modelValue","min","max","max-pages","onClick"])])):g("",!0)]),_:1},8,["label"])):g("",!0)]),_:1})):g("",!0),!a.carregando&&s.temRegistros&&a.tipoLista==="itens"?(u(),b(ra,{key:1,rows:a.documentosItens,columns:a.colunas,pagination:a.tablePagination,"onUpdate:pagination":e[9]||(e[9]=t=>a.tablePagination=t),class:"no-shadow text-left q-mt-md my-sticky-header-column-table"},{body:l(t=>[n(da,{props:t},{default:l(()=>[n(k,{key:"descricao",props:t},{default:l(()=>{var G,H,A,q,E,O,T,L;return[v("div",Ta,[v("div",La,[n(x,{imagem:(G=a.itens[t.row.idItem])==null?void 0:G.imagem,rotulo:(H=a.itens[t.row.idItem])==null?void 0:H.descricaoConcatenada,tamanho:"40",class:"q-mr-sm"},null,8,["imagem","rotulo"])]),v("div",Ra,[f(C(t.row.idItem?(A=a.itens[t.row.idItem])==null?void 0:A.descricaoConcatenada:""),1),Ha,f(" "+C(t.row.idItem&&(q=a.itens[t.row.idItem])!=null&&q.referencia?"Ref. "+((E=a.itens[t.row.idItem])==null?void 0:E.referencia):""),1),Sa,f(" "+C(t.row.idItem&&(O=a.itens[t.row.idItem])!=null&&O.codigoItem?"#"+((T=a.itens[t.row.idItem])==null?void 0:T.codigoItem):""),1),Ua,f(" "+C(t.row.idItem&&((L=a.itens[t.row.idItem])==null?void 0:L.marca)||""),1)])])]}),_:2},1032,["props"]),n(k,{key:"documento",props:t},{default:l(()=>[f(C(a.documentos[t.row.idDocumento].tipo)+" #"+C(parseInt(a.documentos[t.row.idDocumento].numero)||(a.documentos[t.row.idDocumento].id||"").slice(-6)),1),Qa,f(" "+C(a.documentos[t.row.idDocumento].status),1),Na,f(" "+C(o.$filters.dataHora(a.documentos[t.row.idDocumento].dataHoraFinalizado||a.documentos[t.row.idDocumento].dataHoraEmissao)),1)]),_:2},1032,["props"]),n(k,{key:"valorUnitario",props:t},{default:l(()=>[t.row.valorReal!==t.row.valorItem?(u(),p("span",Ba,C(o.$filters.numero(t.row.valorItem,2)),1)):g("",!0),f(" "+C(o.$filters.numero(t.row.valorReal,2)),1)]),_:2},1032,["props"]),n(k,{key:"quantidade",props:t},{default:l(()=>[f(C(t.row.quantidade*t.row.operacaoFator*-1),1)]),_:2},1032,["props"]),n(k,{key:"valorTotal",props:t},{default:l(()=>[f(C(o.$filters.numero(t.row.valorRealTotal,2)),1)]),_:2},1032,["props"]),n(k,{key:"botao",props:t},{default:l(()=>[t.row.operacaoFator===-1?(u(),b(R,{key:0,clickable:"",class:"q-ml-sm",color:"warning",dense:"",flat:"",icon:"replay",round:"",onClick:G=>s.abrirModalDevolucaoGarantia(t.row)},{default:l(()=>[n(la,null,{default:l(()=>[f("Devolu\xE7\xE3o/Garantia")]),_:1})]),_:2},1032,["onClick"])):g("",!0)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"])):g("",!0),!a.carregando&&!s.temRegistros?(u(),p("div",Ma,Ja)):g("",!0),(F=a.contato)!=null&&F.ativo?(u(),b(R,{key:3,round:"",color:"primary",class:"fixed",icon:"add",size:"lg",style:{right:"18px",bottom:"18px"},onClick:s.adicionarOrcamento},null,8,["onClick"])):g("",!0),n(V,{ref:"modalVenda",onExecutar:s.executar},null,8,["onExecutar"]),n(P,{ref:"modalDevolucaoGarantia",onExecuta:s.finalizaDevolucaoGarantia},null,8,["onExecuta"]),n(D,{onFechar:s.fechouNFe},null,8,["onFechar"])])}var le=K(ba,[["render",Ya]]);export{le as default};