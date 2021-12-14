"use strict";(self.webpackChunkb15=self.webpackChunkb15||[]).push([[987],{64139:(e,t,o)=>{o.r(t),o.d(t,{default:()=>me});var a=o(34182);const i=(0,a.createElementVNode)("span",{class:"col-12 text-body1 text-dark"},"Período de Emissão",-1),r=(0,a.createElementVNode)("span",{class:"col-12 text-body1 text-dark"},"Período de Finalização",-1);var d=o(26531);const l={class:"col-auto q-pl-none items-center"},n={class:"col"},s={class:"col-12"},c=(0,a.createTextVNode)(" Finalizado "),m=(0,a.createTextVNode)(" Emissão "),u=(0,a.createTextVNode)(" Vendedor(a) "),p=(0,a.createTextVNode)("Valor total"),f=(0,a.createTextVNode)("NFe de Saída/Venda"),h=(0,a.createTextVNode)("NFe de Entrada/Devolução"),V=(0,a.createTextVNode)("NFe de Remessa"),v=(0,a.createTextVNode)("Migrar para nova fatura"),g=(0,a.createTextVNode)("Histórico do Status"),C={class:"col-12 col-md-4"},x=(0,a.createTextVNode)(" OS "),N=(0,a.createTextVNode)("OS "),w={class:"col-12 col-md-4"},k={class:"q-px-sm"},b={class:"q-mt-sm"},y={style:{display:"block"}},_=(0,a.createElementVNode)("br",null,null,-1),E={class:"round-borders"},D={class:"col-12 col-md-4"},S={class:"q-px-sm"},I=(0,a.createTextVNode)(" Faturamento "),B={class:"q-mt-sm"},F={style:{display:"block"}},T={class:"q-px-sm text-right"},q={class:"q-mt-none text-right"},z=(0,a.createElementVNode)("small",{class:"q-mr-xs"},"Desconto",-1),M={class:"text-subtitle1"};var A=o(15358),$=o(72407),U=o(40480),H=o(79815),Z=o(68337),O=o(11463),L=o(58294),P=o(88603);const R={components:{Avatar:A.Z,Badge:$.Z,DocumentosFiscais:U.Z,VendaModal:Z.Z,ModalHistoricoStatus:H.Z},computed:{config:()=>O.db.configuracoes.valores,podeMigrarFatura(){return!["Aguardando Estoque","Aguardando Financeiro","Aguardando Aprovação","Aguardando Pagamento","Cancelado","Não Aprovado","Orçamento","Faturado"].includes(this.dados.venda.status)}},data:()=>({dbUsuario:O.db.usuario,dados:{venda:{}},contatos:{},faturasAbertas:[],detalhesVisivel:!1,visibilidade:{botao:{editar:!1,remover:!1}},modalDevolucaoGarantia:{visivel:!1,item:{},orcamento:{}},sistemaPai:"",configImpressaoOrcamento:[],configImpressaoEnvelope:[]}),emits:["executar"],methods:{irParaAtendimentoFatura(e){this.$router.push({name:"AtendimentoFatura",params:{id:e}})},async migrarFatura(e){try{await this.$q.dialog({message:"Esta ação irá migrar esta venda para outra fatura.",noRefocus:!0,preventClose:!0,title:"Tem certeza?",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Continuar",push:!0,class:"bg-primary",textColor:"white",flat:!0}})}catch(e){return}e||(e=O.db.fatura.criar(this.dados.venda),await O.db.fatura.grava({fatura:e})),e.id?(await O.db.venda.grava({venda:{id:this.dados.venda.id,idFatura:e.id},vendaOriginal:this.dados.venda}),localStorage.setItem("idFatura",e.id),this.dados.venda.idContato&&(this.$emit("executar","atualizar"),this.irParaAtendimentoFatura(this.dados.venda.idContato))):this.$q.notify("Não foi possível realizar a operação")},alternarDetalhes(){this.detalhesVisivel=!this.detalhesVisivel},async atualizar(){const e=await O.db.venda.leCompleto(this.id);if(e.carrinho.sort(((e,t)=>new Date(e.dataHoraEmissao)<new Date(t.dataHoraEmissao)?-1:1)),e.oss.sort(((e,t)=>new Date(e.documento.dataHoraEmissao)<new Date(t.documento.dataHoraEmissao)?-1:1)),e.customs.sort(((e,t)=>new Date(e.documento.dataHoraEmissao)<new Date(t.documento.dataHoraEmissao)?-1:1)),(e.venda||{}).idContato&&(e.venda||{}).idEmpresa){let t=[];t=await O.db.fatura.obterAbertas(e.venda.idContato,e.venda.idEmpresa),this.faturasAbertas=t.sort(((e,t)=>!e.numero||e.numero<t.numero?-1:1))}const t={};if(e.venda.idContato){const o=e.venda.idContato;t[o]||(t[o]=await O.db.contato.le({id:o}))}if(e.venda.idContatoVendedor){const o=e.venda.idContatoVendedor;t[o]||(t[o]=await O.db.contato.le({id:o}))}this.configuraImpressaoEnvelope(e.venda.idEmpresa),this.configuraImpressaoOrcamento(e.venda.idEmpresa),this.contatos=t,this.dados=e,await this.$nextTick(),e.venda.id===localStorage.getItem("idVenda")&&(this.$refs.vendaModal.mostrar({id:e.venda.id}),localStorage.removeItem("idVenda"))},async configuraImpressaoEnvelope(e){const t=await O.db.configuracoes.porNome("impressao.envelope",e);this.configImpressaoEnvelope=[...t.length?t.map((e=>({texto:"Imprimir Envelope",...e}))):[{valor:"envelope",texto:"Imprimir Envelope"},{valor:"envelopeMini",texto:"Imprimir Envelope Mini"}]]},async configuraImpressaoOrcamento(e){const t=await O.db.configuracoes.porNome("impressao.venda",e);this.configImpressaoOrcamento=[...t.length?t.map((e=>({texto:"Imprimir Orçamento",...e}))):[{valor:"invoice",texto:"Orçamento/Venda (Invoice)"},"optisoul"===this.sistemaPai?{valor:"orcamento",texto:"Orçamento (Antigo)"}:{}]]},copiarUid(){const e=this.$refs.uid;e.type="text";try{e.select(),document.execCommand("copy"),this.$q.notify({message:"UID copiado para a área de transferência.",type:"info"})}catch(e){this.$q.notify("Erro ao copiar.")}e.type="hidden",window.getSelection().removeAllRanges()},descricaoEnvelope(e){let t="";for(const o of this.dados.itensEnvelopes)o.idDocumentoAdicional===e&&o.descricaoItem.trim()&&(t+=o.descricaoItem.trim()+" | ");return t.slice(0,-3)},async devolucaoGarantia(e){let t=await O.db.documento.le({idContato:O.db.contato.selecionado.id,tipo:"Venda",status:"Orçamento"});t=(0,P.orderBy)(t,"dataHoraEmissao","desc"),t.length?this.modalDevolucaoGarantia={visivel:!0,item:e,orcamento:t[0]}:this.$q.notify({message:"Crie um orçamento para inclusão de devolução/garantia.",type:"info"})},editar(){this.$refs.vendaModal.mostrar({id:this.dados.venda.id})},executar(e){switch(e){case"atualizar":this.atualizar();break;case"cancelar":case"finalizar":case"reprovar":this.$emit("executar","atualizar");break;case"retornarOrcamento":this.$emit("executar",e)}},async finalizaDevolucaoGarantia(e,t,o){const a=(0,L.clonar)(e);"devolucao"===t&&(a.operacao="Devolução de Venda"),"garantia"===t&&(a.operacao="Garantia de Venda",a.motivo=o),a.idDocumentoItemVenda=a.id,a.idDocumentoVenda=a.idDocumento,a.id=(0,L.uuid)(),a.idDocumento=this.modalDevolucaoGarantia.orcamento.id,a.status="Orçamento",a.operacaoFator=1,a.codigoCfop=20,a.idCfop=(await O.db.cfop.le({codigoCfop:20}))[0].id,a.dataHoraEmissao=(0,L.dataAtual)(),a.dataHoraFinalizado="",a.subTotal=-1*a.subTotal,a.total=-1*a.total,a.valorItem=-1*a.valorItem,a.descontoSubTotal=0,delete a.codigoCfop,delete a.codigoDocumento,delete a.codigoDocumentoItem,delete a.codigoItem,delete a.codigoPlanoContaDestino,delete a.codigoPlanoContaEstoque,await O.db.documentoItem.grava({atual:a}),this.$q.notify({message:"Item adicionado ao orçamento.",type:"positive"}),localStorage.setItem("idVenda",this.modalDevolucaoGarantia.orcamento.id),this.$emit("executar","atualizar")},async remover(){this.$q.dialog({message:"Esta ação irá remover esta venda da fatura",title:"Tem certeza?",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Continuar",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk((async()=>{let e=(0,L.clonar)(this.dados.venda);this.dados.venda.idFatura="",await O.db.venda.grava({venda:this.dados.venda,vendaOriginal:e}),this.$emit("executar","remover")}))}},props:{id:{required:!0,type:String}},watch:{async dados(e){this.visibilidade.botao.editar=!1,this.visibilidade.botao.remover=!1,(await O.db.contatoBusca.filtrar(null,{ativo:!0,empresas:!0},0)).find((t=>t.id===e.venda.idEmpresa))&&(e.venda.idFatura&&this.faturasAbertas.find((t=>t.id===e.venda.idFatura))&&(this.visibilidade.botao.remover=!0),["Cancelado","Não Aprovado"].includes(e.venda.status)||e.venda.idFatura||(this.visibilidade.botao.editar=!0))}},mounted(){this.sistemaPai=(0,L.sistemaPai)(),this.atualizar()}};var G=o(74260),Q=o(77953),X=o(60880),W=o(31106),j=o(76106),J=o(4957),K=o(37617),Y=o(54707),ee=o(25901),te=o(68900),oe=o(48761),ae=o(83831),ie=o(98586),re=o(7518),de=o.n(re);const le=(0,G.Z)(R,[["render",function(e,t,o,i,r,d){const A=(0,a.resolveComponent)("badge"),$=(0,a.resolveComponent)("q-item-section"),U=(0,a.resolveComponent)("avatar"),H=(0,a.resolveComponent)("q-item-label"),Z=(0,a.resolveComponent)("q-badge"),O=(0,a.resolveComponent)("row"),L=(0,a.resolveComponent)("q-tooltip"),P=(0,a.resolveComponent)("q-btn"),R=(0,a.resolveComponent)("q-icon"),G=(0,a.resolveComponent)("q-item"),Q=(0,a.resolveComponent)("q-list"),X=(0,a.resolveComponent)("q-menu"),W=(0,a.resolveComponent)("q-toolbar-title"),j=(0,a.resolveComponent)("documentos-fiscais"),J=(0,a.resolveComponent)("q-separator"),K=(0,a.resolveComponent)("VendaModal"),Y=(0,a.resolveComponent)("modal-historico-status"),ee=(0,a.resolveDirective)("close-popup");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[r.dados.venda.id?((0,a.openBlock)(),(0,a.createBlock)(G,{key:0,id:"VendaCard","manual-focus":"",clickable:"",class:"items-center d-flex q-pa-xs"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,{avatar:"",center:"",class:"mw100",onClick:d.editar},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(A,{class:"q-mr-sm",escuro:"",cor:"positive",onClick:d.copiarUid},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)(" #"+(0,a.toDisplayString)(parseInt(r.dados.venda.numero)||(r.dados.venda.id||"").slice(-6))+" ",1),(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"hidden","onUpdate:modelValue":t[0]||(t[0]=e=>r.dados.venda.id=e),ref:"uid"},null,512),[[a.vModelText,r.dados.venda.id]])])),_:1},8,["onClick"])])),_:1},8,["onClick"]),(0,a.createVNode)($,{onClick:d.editar},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(O,{class:"items-center"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",l,[(0,a.createVNode)(U,{imagem:(r.contatos[r.dados.venda.idContato]||{}).imagem,rotulo:r.dados.venda.descricaoContato,tamanho:"40",style:{float:"left"}},null,8,["imagem","rotulo"])]),(0,a.createElementVNode)("div",n,[(0,a.createVNode)(H,{class:"text-tertiary text-weight-bold"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(r.dados.venda.descricaoContato),1)])),_:1}),(0,a.createVNode)(O,{class:"hideondesktop items-center q-my-sm"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",s,[(0,a.createVNode)(Z,{color:"tertiary"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(r.dados.venda.status),1)])),_:1})])])),_:1})])])),_:1})])),_:1},8,["onClick"]),(0,a.createVNode)($,{onClick:d.editar,class:"hideonmobile"},{default:(0,a.withCtx)((()=>[r.dados.venda.dataHoraFinalizado?((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:0},[(0,a.createTextVNode)((0,a.toDisplayString)(e.$filters.data(r.dados.venda.dataHoraFinalizado))+" ",1),(0,a.createVNode)(L,null,{default:(0,a.withCtx)((()=>[c])),_:1})],64)):((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:1},[(0,a.createTextVNode)((0,a.toDisplayString)(e.$filters.data(r.dados.venda.dataHoraEmissao))+" ",1),(0,a.createVNode)(L,null,{default:(0,a.withCtx)((()=>[m])),_:1})],64))])),_:1},8,["onClick"]),(0,a.createVNode)($,{onClick:d.editar,class:"hideonmobile"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)((r.contatos[r.dados.venda.idContatoVendedor]||{}).apelido)+" ",1),(0,a.createVNode)(L,null,{default:(0,a.withCtx)((()=>[u])),_:1})])),_:1},8,["onClick"]),(0,a.createVNode)($,{avatar:"",class:"mw240 hideonmobile"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(Z,{color:"tertiary"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(r.dados.venda.status),1)])),_:1})])),_:1}),(0,a.createVNode)($,{onClick:d.editar},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,{caption:"",class:"text-right text-tertiary text-weight-bold"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$filters.numero(r.dados.venda.totalDocumento,2))+" ",1),(0,a.createVNode)(L,null,{default:(0,a.withCtx)((()=>[p])),_:1})])),_:1})])),_:1},8,["onClick"]),(0,a.createVNode)($,{side:"",top:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(O,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(P,{rounded:"",dense:"",flat:"",icon:r.detalhesVisivel?"keyboard_arrow_up":"keyboard_arrow_down",size:"md",unelevated:"",class:"hideonmobile q-mx-xs",color:"tertiary",style:{float:"right"},onClick:d.alternarDetalhes},null,8,["icon","onClick"]),(0,a.createVNode)(P,{rounded:"",dense:"",flat:"",icon:"clear",color:"tertiary",unelevated:"",class:"hideonmobile q-mx-xs",size:"md",onClick:d.remover,style:{float:"right"}},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(L,{anchor:"top left",self:"bottom start"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)(" Remover da fatura #"+(0,a.toDisplayString)(parseInt(r.dados.venda.numero)||(r.dados.venda.id||"").slice(-6)),1)])),_:1})])),_:1},8,["onClick"]),(0,a.createVNode)(P,{rounded:"",dense:"",flat:"",icon:"edit",color:"primary",unelevated:"",class:"hideonmobile q-mx-xs",size:"md",onClick:d.editar,style:{float:"right"}},null,8,["onClick"]),(0,a.createVNode)(P,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",unelevated:"",class:"hideonmobile q-mx-xs",size:"md",style:{float:"right"}},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(X,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(Q,{link:"",separator:""},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(r.configImpressaoOrcamento.filter((e=>e.valor)),(t=>((0,a.openBlock)(),(0,a.createBlock)(G,{clickable:"",key:t.valor,onClick:o=>e.$imprimir(t.valor,{id:(r.dados.venda||{}).id||"0",Oculto:"0"})},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(R,{name:"print"})])),_:1}),(0,a.createVNode)($,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.texto),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128)),"optisoul"===r.sistemaPai?((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,{key:0},(0,a.renderList)(r.configImpressaoEnvelope,(t=>((0,a.openBlock)(),(0,a.createBlock)(G,{clickable:"",key:t.valor,onClick:o=>e.$imprimir(t.valor,(r.dados.venda||{}).id||"0")},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(R,{name:"print"})])),_:1}),(0,a.createVNode)($,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.texto),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128)):(0,a.createCommentVNode)("",!0)])),_:1})])),_:1})])),_:1}),(0,a.createVNode)(P,{rounded:"",dense:"",flat:"",icon:"more_vert",color:"tertiary",unelevated:"",class:"q-mx-xs",size:"md",style:{float:"right"}},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(X,null,{default:(0,a.withCtx)((()=>[(0,a.withDirectives)((0,a.createVNode)(Q,{link:"",separator:""},{default:(0,a.withCtx)((()=>[e.$utils.mapearStatus(r.dados.venda).permiteNota?((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:0},[(0,a.withDirectives)((0,a.createVNode)(G,{clickable:"",onClick:t[1]||(t[1]=t=>e.emitirNFeV2({idVenda:r.dados.venda.id},1,"Venda"))},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(R,{name:"account_balance"})])),_:1}),(0,a.createVNode)($,null,{default:(0,a.withCtx)((()=>[f])),_:1})])),_:1},512),[[ee]]),(0,a.withDirectives)((0,a.createVNode)(G,{clickable:"",onClick:t[2]||(t[2]=t=>e.emitirNFeV2({idVenda:r.dados.venda.id},0,"Devolução"))},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(R,{name:"account_balance"})])),_:1}),(0,a.createVNode)($,null,{default:(0,a.withCtx)((()=>[h])),_:1})])),_:1},512),[[ee]]),(0,a.withDirectives)((0,a.createVNode)(G,{clickable:"",onClick:t[3]||(t[3]=t=>e.emitirNFeV2({idVenda:r.dados.venda.id},1,"Remessa"))},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(R,{name:"account_balance"})])),_:1}),(0,a.createVNode)($,null,{default:(0,a.withCtx)((()=>[V])),_:1})])),_:1},512),[[ee]])],64)):(0,a.createCommentVNode)("",!0),d.podeMigrarFatura?((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:1},[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(r.faturasAbertas.filter((e=>e.id!==r.dados.venda.idFatura)),(e=>(0,a.withDirectives)(((0,a.openBlock)(),(0,a.createBlock)(G,{key:e.id,onClick:t=>d.migrarFatura(e)},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(R,{name:"mdi-folder-move"})])),_:1}),(0,a.createVNode)($,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)("Migrar para fatura #"+(e.numero||e.id.slice(-6))),1)])),_:2},1024)])),_:2},1032,["onClick"])),[[ee]]))),128)),(0,a.withDirectives)((0,a.createVNode)(G,{onClick:t[4]||(t[4]=e=>d.migrarFatura())},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(R,{name:"mdi-folder-move"})])),_:1}),(0,a.createVNode)($,null,{default:(0,a.withCtx)((()=>[v])),_:1})])),_:1},512),[[ee]])],64)):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(G,{clickable:"",onClick:t[5]||(t[5]=t=>e.$refs.modalHistoricoStatus.mostrar({idDocumento:r.dados.venda.id}))},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(R,{name:"history"})])),_:1}),(0,a.createVNode)($,null,{default:(0,a.withCtx)((()=>[g])),_:1})])),_:1})])),_:1},512),[[ee]])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):(0,a.createCommentVNode)("",!0),r.detalhesVisivel?((0,a.openBlock)(),(0,a.createBlock)(O,{key:1,class:"q-col-gutter-md q-pt-md"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",C,[r.detalhesVisivel?((0,a.openBlock)(),(0,a.createBlock)(Q,{key:0},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(r.dados.carrinho,(t=>((0,a.openBlock)(),(0,a.createBlock)(G,{class:"fullWidth",key:t.id},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,{avatar:"",class:"w120"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.quantidade)+"x",1)])),_:2},1024)])),_:2},1024),(0,a.createVNode)($,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.descricaoItem),1)])),_:2},1024)])),_:2},1024),(0,a.createVNode)($,{side:"",top:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$filters.numero(t.total,2)),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(r.dados.customs,(t=>((0,a.openBlock)(),(0,a.createBlock)(G,{class:"fullWidth",key:t.documento.id},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,{avatar:"",class:"w120"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.documento.numero)+"x ",1)])),_:2},1024)])),_:2},1024),(0,a.createVNode)($,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.documento.descricao),1)])),_:2},1024)])),_:2},1024),(0,a.createVNode)($,{side:"",top:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$filters.numero(t.documento.totalDocumento,2)),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(r.dados.oss,(t=>((0,a.openBlock)(),(0,a.createBlock)(G,{class:"fullWidth",key:t.documento.id},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,{avatar:"",class:"w120"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,null,{default:(0,a.withCtx)((()=>["Orçamento"!==t.documento.status?((0,a.openBlock)(),(0,a.createBlock)(A,{key:0,class:"q-mx-sm",escuro:"",cor:"grey-5",denso:"",round:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.documento.status)+" ",1),(0,a.createVNode)(L,null,{default:(0,a.withCtx)((()=>[x])),_:1})])),_:2},1024)):((0,a.openBlock)(),(0,a.createBlock)(A,{key:1},{default:(0,a.withCtx)((()=>[N])),_:1}))])),_:2},1024)])),_:2},1024),(0,a.createVNode)($,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.documento.descricao),1)])),_:2},1024)])),_:2},1024),(0,a.createVNode)($,{right:"",top:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$filters.numero(t.documento.totalDocumento,2)),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(r.dados.envelopes,(t=>((0,a.openBlock)(),(0,a.createBlock)(G,{class:"fullWidth",key:t.id},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,{avatar:"",class:"w120"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(A,{class:"q-mx-sm",escuro:"",cor:"grey-5",denso:"",round:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)(" #"+(0,a.toDisplayString)(parseInt(t.numero)||(t.id||"").slice(-6))+" ",1),(0,a.createVNode)(L,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.tipo)+" - "+(0,a.toDisplayString)(t.descricaoContato),1)])),_:2},1024)])),_:2},1024),"Orçamento"!==t.status?((0,a.openBlock)(),(0,a.createBlock)(A,{key:0,class:"q-mx-sm",escuro:"",cor:"grey-5",denso:"",round:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.status),1)])),_:2},1024)):(0,a.createCommentVNode)("",!0)])),_:2},1024),(0,a.createVNode)($,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(d.descricaoEnvelope(t.id)),1)])),_:2},1024)])),_:2},1024),(0,a.createVNode)($,{right:"",top:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(H,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$filters.numero(t.totalDocumento,2)),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,a.createCommentVNode)("",!0)]),(0,a.createElementVNode)("div",w,[(0,a.createElementVNode)("div",k,[(0,a.createVNode)(W,{class:"q-mx-none q-mt-sm q-px-none"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(R,{name:"business"}),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(r.dados.venda.descricaoEmpresa),1)])),_:1}),(0,a.createElementVNode)("p",b,[(0,a.createElementVNode)("small",y,[(0,a.createTextVNode)((0,a.toDisplayString)(r.dados.venda.observacao)+" ",1),_,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(r.dados.venda.observacaoInterna),1)])]),(0,a.createElementVNode)("div",E,[(0,a.createVNode)(j,{idVenda:r.dados.venda.id},null,8,["idVenda"])])])]),(0,a.createElementVNode)("div",D,[(0,a.createElementVNode)("div",S,[(0,a.createVNode)(W,{class:"q-mx-none q-mt-sm q-px-none"},{default:(0,a.withCtx)((()=>[I])),_:1}),(0,a.createElementVNode)("p",B,[(0,a.createElementVNode)("small",F,(0,a.toDisplayString)(r.dados.venda.observacaoFaturamento),1)])]),(0,a.createElementVNode)("div",T,[(0,a.createElementVNode)("dl",q,[(0,a.createElementVNode)("dd",null,[z,(0,a.createElementVNode)("span",M,[(0,a.createElementVNode)("strong",null,(0,a.toDisplayString)(e.$filters.numero(r.dados.venda.totalDesconto,2)),1)])])])])])])),_:1})):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(J),(0,a.createVNode)(K,{ref:"vendaModal",onExecutar:d.executar},null,8,["onExecutar"]),(0,a.createVNode)(Y,{ref:"modalHistoricoStatus"},null,512)],64)}]]);de()(R,"components",{QItem:Q.Z,QItemSection:X.Z,QItemLabel:W.Z,QBadge:j.Z,QTooltip:J.Z,QBtn:K.Z,QMenu:Y.Z,QList:ee.Z,QIcon:te.Z,QToolbarTitle:oe.Z,QSeparator:ae.Z}),de()(R,"directives",{ClosePopup:ie.Z});var ne=o(60357);const se={components:{lista:d.Z,VendaCard:le,PromptContatoNovo:ne.Z,VendaModal:Z.Z},data:()=>({tabSelecionada:{valor:"Ativos"},tabs:[{rotulo:"Ativos",value:"Ativos"},{rotulo:"Canceladas",value:"Canceladas"},{rotulo:"Finalizadas",value:"Finalizadas"},{rotulo:"Todas",value:"Todas"}],page:{digitacao:{current:1,min:0,max:0},finalizado:{current:1,min:0,max:0},ativa:"Digitação"},status:[],operacoes:[],pageSize:10,grupos:[],buscaCampo:"",empresas:[],empresa:{},contatosModal:!1,vendedorModal:!1,digitadorModal:!1,filtro:{status:"",operacao:"",grupos:[],empresa:{id:""},cliente:{id:""},vendedor:{id:""},digitador:{id:""},periodo:{emissao:{ini:"",fim:""},finalizado:{ini:"",fim:""}}},paginacao:{atual:1,maximo:1,total:1,limite:25},dbContato:O.db.contato,documentos:null,showFilters:!1,itens:[],documentoItens:[]}),methods:{async filtrar(){let e=[];try{e=await O.db.venda.leNew({periodoEmissao:{ini:this.filtro.periodo.emissao.ini,fim:this.filtro.periodo.emissao.fim},periodoFinalizado:{ini:this.filtro.periodo.finalizado.ini,fim:this.filtro.periodo.finalizado.fim},status:this.filtro.status,operacao:this.filtro.operacao,idEmpresa:this.filtro.empresa.id,idContato:this.filtro.cliente.id,idContatoVendedor:this.filtro.vendedor.id,idContatoDigitador:this.filtro.digitador.id}),this.documentos=e}catch(e){this.$q.notify("Erro ao filtrar")}let t=[];for(const o of e){const e=await O.db.documentoItem.leNew({idDocumento:o.id});t=[...t,...e.filter((e=>e.idItem))]}let o=[],a={};for(const e of t)if(e.idItem&&!o.filter((t=>t.id===e.idItem)).length){const t=await O.db.item.leNew({id:e.idItem});o.push(t)}if(!this.filtro.grupos.length){e=(0,P.orderBy)(e,["dataHoraFinalizado","dataHoraEmissao"],["desc","desc"]),this.documentos=e.reduce(((e,t)=>(e[t.id]||(e[t.id]=t),e)),{});for(const e of t)if(!a[e.idItem]){const t=o.filter((t=>t.id===e.idItem));t.length&&(a[e.idItem]=t[0])}return this.itens=a,void(this.documentosItens=(0,P.orderBy)(t,["dataHoraFinalizado","dataHoraEmissao"],["desc","desc"]))}const i=(0,L.clonarV2)(this.filtro.grupos).map((e=>(0,L.removerAcentos)(e)));let r=e.filter((e=>{if(!e.numero)return!1;const t=String(e.numero);for(const e of i){const o=new RegExp(e,"gi");if(t.match(o))return!0}})),d=[],l=t.filter((e=>{if(!e.idItem&&!e.descricaoItem)return!1;const t=(0,L.removerAcentos)(e.descricaoItem);for(const o of i){const a=new RegExp(o,"gi");if(t.match(a))return d.push(e.id),!0}}));a=o.filter((e=>{const t=e.marca||"",o=e.referencia||"",a=e.codigoItem?String(e.codigoItem):"",r=e.codigoBarras||"",d=(0,L.removerAcentos)(t+o+a+r);for(const e of i){const t=new RegExp(e,"gi");if(d.match(t))return!0}}));for(const e of r){const o=t.filter((t=>{if(t.idItem&&t.idDocumento===e.id&&!d.includes(t.id))return d.push(t.id),!0}));l=[...l,...o]}for(const e of a){const o=t.filter((t=>{if(t.idItem===e.id&&!d.includes(t.id))return d.push(t.id),!0}));l=[...l,...o]}l=l.filter((t=>{let a=(0,L.clonarV2)(i),r=e.filter((e=>e.id===t.idDocumento)),d=o.filter((e=>e.id===t.idItem));r=r.length?r[0]:{},d=d.length?d[0]:{};let l=r.numero?String(r.numero):"";if(l+=t.descricaoItem||"",l+=d.marca||"",l+=d.referencia||"",l+=d.codigoItem?String(d.codigoItem):"",l+=d.codigoBarras||"",l)for(const e of i){const t=new RegExp(e,"gi");l.match(t)&&(a=a.filter((t=>t!==e)))}if(!a.length)return!0}));let n=[];r=[],a={};for(const t of l)if(n.includes(t.idDocumento)||(n.push(t.idDocumento),r=[...r,...e.filter((e=>e.id===t.idDocumento))]),!a[t.idItem]){const e=o.filter((e=>e.id===t.idItem));e.length&&(a[t.idItem]=e[0])}e=(0,P.orderBy)(r,["dataHoraFinalizado","dataHoraEmissao"],["desc","desc"]),this.documentos=r.reduce(((e,t)=>(e[t.id]||(e[t.id]=t),e)),{}),this.itens=a,this.documentosItens=(0,P.orderBy)(l,["dataHoraFinalizado","dataHoraEmissao"],["desc","desc"])},aoSelecionarEmpresa(){this.filtro.empresa=this.empresas.filter((e=>e.id===this.empresa.id))[0]},aoSelecionarCliente(e,t){e&&(this.filtro.cliente=(0,L.clonarV2)(t),this.contatosModal=!1)},aoSelecionarVendedor(e,t){e&&(this.filtro.vendedor=(0,L.clonarV2)(t),this.vendedorModal=!1)},aoSelecionarDigitador(e,t){e&&(this.filtro.digitador=(0,L.clonarV2)(t),this.digitadorModal=!1)},adicionarVenda(){this.$refs.modalVenda.mostrar()},async buscar(){let e=await O.db.venda.leNew(),t=[];for(const o of e){const e=await O.db.documentoItem.leNew({idDocumento:o.id});t=[...t,...e.filter((e=>e.idItem))]}let o=[],a={};for(const e of t)if(e.idItem&&!o.filter((t=>t.id===e.idItem)).length){const t=await O.db.item.leNew({id:e.idItem});o.push(t)}const i=[(0,L.removerAcentos)(this.buscaCampo)];let r=e.filter((e=>{if(!e.numero)return!1;const t=String(e.numero);for(const e of i){const o=new RegExp(e,"gi");if(t.match(o))return!0}})),d=[],l=t.filter((e=>{if(!e.idItem&&!e.descricaoItem)return!1;const t=(0,L.removerAcentos)(e.descricaoItem);for(const o of i){const a=new RegExp(o,"gi");if(t.match(a))return d.push(e.id),!0}}));a=o.filter((e=>{const t=e.marca||"",o=e.referencia||"",a=e.codigoItem?String(e.codigoItem):"",r=e.codigoBarras||"",d=(0,L.removerAcentos)(t+o+a+r);for(const e of i){const t=new RegExp(e,"gi");if(d.match(t))return!0}}));for(const e of r){const o=t.filter((t=>{if(t.idItem&&t.idDocumento===e.id&&!d.includes(t.id))return d.push(t.id),!0}));l=[...l,...o]}for(const e of a){const o=t.filter((t=>{if(t.idItem===e.id&&!d.includes(t.id))return d.push(t.id),!0}));l=[...l,...o]}l=l.filter((t=>{let a=(0,L.clonarV2)(i),r=e.filter((e=>e.id===t.idDocumento)),d=o.filter((e=>e.id===t.idItem));r=r.length?r[0]:{},d=d.length?d[0]:{};let l=r.numero?String(r.numero):"";if(l+=t.descricaoItem||"",l+=d.marca||"",l+=d.referencia||"",l+=d.codigoItem?String(d.codigoItem):"",l+=d.codigoBarras||"",l)for(const e of i){const t=new RegExp(e,"gi");l.match(t)&&(a=a.filter((t=>t!==e)))}if(!a.length)return!0}));let n=[];r=[],a={};for(const t of l)if(n.includes(t.idDocumento)||(n.push(t.idDocumento),r=[...r,...e.filter((e=>e.id===t.idDocumento))]),!a[t.idItem]){const e=o.filter((e=>e.id===t.idItem));e.length&&(a[t.idItem]=e[0])}e=(0,P.orderBy)(r,["dataHoraFinalizado","dataHoraEmissao"],["desc","desc"]),this.documentos=r.reduce(((e,t)=>(e[t.id]||(e[t.id]=t),e)),{}),this.itens=a,this.documentosItens=(0,P.orderBy)(l,["dataHoraFinalizado","dataHoraEmissao"],["desc","desc"])},async abrirEdicao(e){console.log(e);let t=await O.db.venda.leCompleto({codigoDocumento:e.codigoDocumento});console.log({leCompleto:t})},filtraDebounce(){(0,P.debounce)(this.refazFiltro,700)()},refazFiltro(){L.gconsole.log("FunilVendas","refazFiltro()",this.fraseFiltro,this.empresaSelecionada);const e=(0,L.removerAcentos)((this.fraseFiltro||"").toUpperCase()).split(" ").filter((e=>""!==e)),t={};for(const o in this.listas)for(const a of this.listas[o]){const o=(0,L.removerAcentos)((a.id||"").toUpperCase()+(a.nomeCliente||"").toUpperCase()+(a.nomeDigitador||"").toUpperCase()+(a.nomeVendedor||"").toUpperCase()+" "+String(a.numeroVenda||"")+" ");let i=!0;for(const t of e)i=isNaN(Number(t))?i&&o.includes(t):i&&o.includes(" "+t+" ");this.empresaSelecionada&&(i=i&&this.empresaSelecionada===a.codigoEmpresa),a.mostra=i,a.mostra&&(t[a.crmFunilStatus]=(t[a.crmFunilStatus]||0)+(a.totalDocumento||0))}this.total=t},async atualizar(){this.documentos=await O.db.venda.leNew(),this.empresas=await O.db.empresa.le(),this.documentos.map((e=>{this.status.includes(e.status)||this.status.push(e.status),this.operacoes.includes(e.operacao)||this.operacoes.push(e.operacao)})),await this.filtrar()}},watch:{filtro(e,t){console.log(e,t),this.filtrar()},"filtro.status"(e,t){console.log("status",e,t)}},created(){L.gconsole.log("FunilVendas","created()"),this.atualizar()}};var ce=o(67280);const me=(0,G.Z)(se,[["render",function(e,t,o,d,l,n){const s=(0,a.resolveComponent)("q-chips-input"),c=(0,a.resolveComponent)("campo"),m=(0,a.resolveComponent)("row"),u=(0,a.resolveComponent)("venda-card"),p=(0,a.resolveComponent)("q-list"),f=(0,a.resolveComponent)("lista"),h=(0,a.resolveComponent)("prompt-contato-novo"),V=(0,a.resolveComponent)("VendaModal");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createElementVNode)("div",null,[(0,a.createVNode)(f,{titulo:"Vendas",onCriar_click:n.adicionarVenda,onCheckBoxGeral_click:e.checkBoxGeral_click,showAdd:"false",icone:"mdi-cart-arrow-up",showToolbar:"false",onFiltro_change:n.atualizar,onLimparFiltros_click:e.limparFiltros_click,onAbrirTodosPreview:e.abrirTodosPreview,onExportarXLSX_click:e.exportarXLSX_click,onRemoverTodos:e.removerTodos,onRestaurarTodos:e.restaurarTodos,tabSelecionada:l.tabSelecionada,tabs:l.tabs,lista:e.lista,listaLayout:e.listaLayout,paginacao:l.paginacao,filtros:l.filtro,opcoesMarca:e.opcoesMarca,opcoesGrupo:e.opcoesGrupo,opcoesSubGrupo:e.opcoesSubGrupo,opcoesTipo:e.opcoesTipo,buscaCampo:l.buscaCampo,"onUpdate:buscaCampo":t[14]||(t[14]=e=>l.buscaCampo=e),checkboxModel:e.checkboxModel,"onUpdate:checkboxModel":t[15]||(t[15]=t=>e.checkboxModel=t)},{filtroCampos:(0,a.withCtx)((()=>[(0,a.createVNode)(s,{modelValue:l.filtro.grupos,"onUpdate:modelValue":t[0]||(t[0]=e=>l.filtro.grupos=e),color:"tertiary",class:"col-12",placeholder:"Filtre por Produto, Marca, Número..."},null,8,["modelValue","placeholder"]),(0,a.createVNode)(c,{tipo:"seletor",dense:"",modelValue:l.empresa.id,"onUpdate:modelValue":[t[1]||(t[1]=e=>l.empresa.id=e),n.aoSelecionarEmpresa],options:l.empresas.map((e=>({label:e.nome,value:e.id}))),clearable:"",rotulo:"Por empresa"},null,8,["modelValue","options","onUpdate:modelValue"]),(0,a.createVNode)(c,{tipo:"seletor",dense:"",modelValue:l.filtro.status,"onUpdate:modelValue":t[2]||(t[2]=e=>l.filtro.status=e),options:l.status.map((e=>({label:e,value:e}))),clearable:"",rotulo:"Status"},null,8,["modelValue","options"]),(0,a.createVNode)(c,{tipo:"seletor",dense:"",modelValue:l.filtro.operacao,"onUpdate:modelValue":t[3]||(t[3]=e=>l.filtro.operacao=e),options:l.operacoes.map((e=>({label:e,value:e}))),clearable:"",rotulo:"Operação"},null,8,["modelValue","options"]),(0,a.createVNode)(c,{rotulo:"Cliente",tipo:"texto",before:[{icon:"search"}],modelValue:l.filtro.cliente.nome,"onUpdate:modelValue":[t[4]||(t[4]=e=>l.filtro.cliente.nome=e),n.aoSelecionarCliente],onClick:t[5]||(t[5]=e=>l.contatosModal=!0),dense:""},null,8,["modelValue","onUpdate:modelValue"]),(0,a.createVNode)(c,{rotulo:"Vendedor",tipo:"texto",before:[{icon:"search"}],modelValue:l.filtro.vendedor.nome,"onUpdate:modelValue":[t[6]||(t[6]=e=>l.filtro.vendedor.nome=e),n.aoSelecionarVendedor],onClick:t[7]||(t[7]=e=>l.vendedorModal=!0),dense:""},null,8,["modelValue","onUpdate:modelValue"]),(0,a.createVNode)(c,{rotulo:"Digitador",tipo:"texto",before:[{icon:"search"}],modelValue:l.filtro.digitador.nome,"onUpdate:modelValue":[t[8]||(t[8]=e=>l.filtro.digitador.nome=e),n.aoSelecionarDigitador],onClick:t[9]||(t[9]=e=>l.digitadorModal=!0),dense:""},null,8,["modelValue","onUpdate:modelValue"]),(0,a.createVNode)(m,{class:"q-col-gutter-md q-mt-md"},{default:(0,a.withCtx)((()=>[i,(0,a.createVNode)(c,{modelValue:l.filtro.periodo.emissao.ini,"onUpdate:modelValue":t[10]||(t[10]=e=>l.filtro.periodo.emissao.ini=e),tipo:"data",class:"no-shadow full-width",rotulo:"De",col:"12",after:[{icon:"mdi-close-circle",handler(){l.filtro.periodo.emissao.ini=""}}],dense:""},null,8,["modelValue","after"]),(0,a.createVNode)(c,{modelValue:l.filtro.periodo.emissao.fim,"onUpdate:modelValue":t[11]||(t[11]=e=>l.filtro.periodo.emissao.fim=e),tipo:"data",class:"no-shadow full-width",rotulo:"até",col:"12",after:[{icon:"mdi-close-circle",handler(){l.filtro.periodo.emissao.fim=""}}],dense:""},null,8,["modelValue","after"])])),_:1}),(0,a.createVNode)(m,{class:"q-col-gutter-md q-mt-md"},{default:(0,a.withCtx)((()=>[r,(0,a.createVNode)(c,{modelValue:l.filtro.periodo.finalizado.ini,"onUpdate:modelValue":t[12]||(t[12]=e=>l.filtro.periodo.finalizado.ini=e),tipo:"data",class:"no-shadow full-width",rotulo:"De",col:"12",after:[{icon:"mdi-close-circle",handler(){l.filtro.periodo.finalizado.ini=""}}],dense:""},null,8,["modelValue","after"]),(0,a.createVNode)(c,{modelValue:l.filtro.periodo.finalizado.fim,"onUpdate:modelValue":t[13]||(t[13]=e=>l.filtro.periodo.finalizado.fim=e),tipo:"data",class:"no-shadow full-width",rotulo:"até",col:"12",after:[{icon:"mdi-close-circle",handler(){l.filtro.periodo.finalizado.fim=""}}],dense:""},null,8,["modelValue","after"])])),_:1})])),itemLista:(0,a.withCtx)((()=>[(0,a.createVNode)(p,{class:"rounded-borders"},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(l.documentos,(e=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:e.id,class:"itemHover fullWidth q-px-sm"},[(0,a.createVNode)(u,{id:e.id,class:"q-mb-md"},null,8,["id"])])))),128))])),_:1})])),_:1},8,["onCriar_click","onCheckBoxGeral_click","onFiltro_change","onLimparFiltros_click","onAbrirTodosPreview","onExportarXLSX_click","onRemoverTodos","onRestaurarTodos","tabSelecionada","tabs","lista","listaLayout","paginacao","filtros","opcoesMarca","opcoesGrupo","opcoesSubGrupo","opcoesTipo","buscaCampo","checkboxModel"])]),(0,a.createVNode)(h,{modelValue:l.contatosModal,"onUpdate:modelValue":t[16]||(t[16]=e=>l.contatosModal=e),filtro:{ativo:!0},onSelecionar:n.aoSelecionarCliente},null,8,["modelValue","onSelecionar"]),(0,a.createVNode)(h,{modelValue:l.vendedorModal,"onUpdate:modelValue":t[17]||(t[17]=e=>l.vendedorModal=e),filtro:{ativo:!0,vendedores:!0},onSelecionar:n.aoSelecionarVendedor},null,8,["modelValue","onSelecionar"]),(0,a.createVNode)(h,{modelValue:l.digitadorModal,"onUpdate:modelValue":t[18]||(t[18]=e=>l.digitadorModal=e),filtro:{ativo:!0},onSelecionar:n.aoSelecionarDigitador},null,8,["modelValue","onSelecionar"]),(0,a.createVNode)(V,{ref:"modalVenda",onExecutar:e.executar},null,8,["onExecutar"])],64)}]]);de()(se,"components",{QChip:ce.Z,QList:ee.Z})}}]);