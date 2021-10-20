"use strict";(self.webpackChunkb15=self.webpackChunkb15||[]).push([[919],{99030:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Pe});var a=o(34182);(0,a.pushScopeId)("data-v-18cde87a");const l={class:"row items-center"},i=["onClick"],r={key:0,class:"col-12"},n=(0,a.createTextVNode)("Data Emissão"),c={key:1,class:"col-12"},d=(0,a.createTextVNode)("Data Finalização"),s=(0,a.createTextVNode)("Data Emissão"),m=(0,a.createTextVNode)("Data Finalização"),u=(0,a.createTextVNode)("Valor do Contrato"),p={class:"text-tertiary q-col-gutter-xs"},h=(0,a.createTextVNode)(" Remover"),V=(0,a.createTextVNode)("Restaurar"),C=(0,a.createTextVNode)("Duplicar Produto/Serviço"),f=(0,a.createTextVNode)(" Estoque "),x=(0,a.createTextVNode)(" Fornecedor: "),v={class:"col-12 col-lg"},N={style:{"white-space":"pre-line"}},k=["onClick"],w={key:0,class:"col-10 col-lg"},g={key:1,class:"col-12 col-lg"},y={key:2,class:"col-10 col-lg"},b={key:3,class:"col-12 col-lg-auto q-pt-md",style:{"min-width":"115px !important"}};(0,a.popScopeId)();var I=o(11463),_=o(63875),B=o(72407);o(39810);const q=(0,a.createTextVNode)("Contrato"),E={key:0},D={key:3},S={ref:"form"},T={class:"col-12 col-md"},z={class:"col-auto"},A={class:"col"},M={class:"col-12 col-md"},L={class:"col-auto"},Z={class:"col"},F={class:"col-12 col-md"},$=(0,a.createTextVNode)(" Produtos e Serviços "),Q=(0,a.createTextVNode)("Adicionar Item"),U=(0,a.createElementVNode)("div",{class:"col-2 col-md"},"Código",-1),P=(0,a.createElementVNode)("div",{class:"col-10 col-md-4 "},"Descrição",-1),R=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},"Quantidade",-1),H=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},"Valor",-1),G=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},"Total",-1),X=(0,a.createElementVNode)("div",{class:"col-6 col-md-1 text-right"},"Ações",-1),j={class:"col-2 col-md "},O={class:"col-10 col-md-4 "},J={class:"col-6 col-md text-right row"},K={class:"col-2"},W={class:"col-6 col-md text-right"},Y={class:"col-6 col-md text-right"},ee={class:"col-6 col-md-1 text-right"},te=(0,a.createTextVNode)("Editar"),oe=(0,a.createTextVNode)("Excluir"),ae=(0,a.createElementVNode)("div",{class:"col-2 col-md"},null,-1),le=(0,a.createElementVNode)("div",{class:"col-10 col-md-4 "},null,-1),ie=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},null,-1),re=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},null,-1),ne={class:"col-6 col-md text-right"},ce=(0,a.createElementVNode)("div",{class:"col-6 col-md-1 text-right"}," ",-1);var de=o(48409),se=o(64589),me=o(26891),ue=o(42138),pe=o(60357),he=o(15358);const Ve={components:{Badge:B.Z,Campo:me.Z,PromptItemNovo:ue.Z,Avatar:he.Z,PromptContatoNovo:pe.Z},data:()=>({cliente:{},emitente:{},diaVencimento:"",documentoAnterior:{},documentoItensAnterior:[],documento:{id:(0,se.uuid)(),dataHoraEmissao:(0,se.dataAtual)(),numero:"",descricaoContato:"",idContato:"",descricaoEmpresa:"",idEmpresa:"",numeroVolumeTransporte:"",status:"Ativo",tipo:"Contrato"},documentoItens:[],totalItens:0,visibilidade:{modal:!1},itensModal:!1,carregando:!0,contatosModal:!1,emitenteModal:!1,empresas:[],configImpressaoContrato:[]}),emits:["atualizar"],methods:{async atualizar(e){e?(this.documentoAnterior=await I.db.contrato.le({id:e}),this.documento=(0,se.clonarV2)(this.documentoAnterior),this.documentoItensAnterior=await I.db.itemManipulacao.leItens({idDocumento:e}),this.documentoItens=(0,se.clonarV2)(this.documentoItensAnterior),this.cliente.id=this.documento.idContato,this.cliente.nome=this.documento.descricaoContato,this.emitente.id=this.documento.idEmpresa,this.emitente.nome=this.documento.descricaoEmpresa,this.diaVencimento=this.documento.numeroVolumeTransporte):(this.limparCampos(),this.emitenteModal=!0);const t=await I.db.item.ler();this.itens=t.data,this.empresas=await I.db.empresa.le(),this.somarValorTotal(),this.configuraImpressaoContrato(this.documento.idEmpresa)},async mostrar(){await(0,se.dormir)(500),this.carregando=!1},async configuraImpressaoContrato(e){const t=await I.db.configuracoes.porNome("impressao.contrato",e);this.configImpressaoContrato=t},fechar(){this.carregando=!0},limparCampos(){this.documentoAnterior={},this.documento={id:(0,se.uuid)(),dataHoraEmissao:(0,se.dataAtual)(),numero:"",descricaoContato:"",idContato:"",descricaoEmpresa:"",idEmpresa:"",numeroVolumeTransporte:"",status:"Ativo",tipo:"Contrato"},this.documentoItensAnterior=[],this.documentoItens=[],this.cliente.id="",this.cliente.nome="",this.emitente.id="",this.emitente.nome="",this.diaVencimento=""},async abrirModal(e=""){let t={},o=[];o=e?this.documentoItens.filter((t=>t.idItem===e)):this.documentoItens;for(const e of o)t[e.idItem]={item:await(0,de.X)().item.get(e.idItem)||{},quantidade:e.quantidade};this.$refs.promptItem.itensSelecionados=t,this.$refs.promptItem.termo=e,this.$refs.promptItem.atualizar(),this.itensModal=!0},recalcularTotal(e){e.subTotal=(0,se.arredondar)(e.quantidade*e.valorItem),e.total=(0,se.arredondar)(e.quantidade*e.valorItem),this.somarValorTotal()},aoSelecionarCliente(e,t){this.cliente=(0,se.clonarV2)(t),this.contatosModal=!1,this.documento.idContato=this.cliente.id,this.documento.descricaoContato=this.cliente.nome},async selecionarEmitente(e,t){e?(this.emitente=(0,se.clonarV2)(t),this.emitenteModal=!1,this.documento.idEmpresa=this.emitente.id,this.documento.descricaoEmpresa=this.emitente.nome):this.emitenteModal=!1},aoSelecionarVencimento(){this.documento.numeroVolumeTransporte=this.diaVencimento},selecionarItens:function(e){for(const t in e){const o=e[t].item||{},a=e[t].quantidade||0;let l=this.documentoItens.find((e=>e.idItem===t));l?(l.quantidade=a,l.quantidadeRealizado=a,l.total=(0,se.arredondar)(a*o.valorVenda)):this.documentoItens.push({dataHoraEmissao:(0,se.dataAtual)(),descricaoItem:o.descricao,id:(0,se.uuid)(),idDocumento:this.documento.id,idItem:o.id,operacao:"-",quantidade:a,unidade:o.unidade,quantidadeRealizado:a,tipoItem:o.tipo,total:(0,se.arredondar)(a*o.valorVenda),valorItem:o.valorVenda})}this.somarValorTotal()},somarValorTotal(){this.totalItens=this.documentoItens.reduce(((e,t)=>e+t.total),0)},excluirItem(e){this.documentoItens=this.documentoItens.filter((t=>t.id!==e)),this.somarValorTotal()},validaDia(){if(this.diaVencimento<1||this.diaVencimento>28)return this.$q.notifyAlert("O dia deve ser um valor entre 1 e 28"),void(this.diaVencimento="");this.aoSelecionarVencimento()},async gravar(e=!1){if(this.cliente.id)if(this.emitente.id)if(this.diaVencimento)if(this.totalItens)try{await I.db.contrato.grava({documentoAnterior:this.documentoAnterior,documento:this.documento,documentoItensAnterior:this.documentoItensAnterior,documentoItens:this.documentoItens}),this.visibilidade.modal=e,this.atualizar(this.documento.id),this.$emit("atualizar")}catch(e){this.$q.notifyError("Erro ao salvar",e)}else this.$q.notifyAlert("Adicione alguns itens ao contrato");else this.$q.notifyAlert("Selecione um dia de Vencimento");else this.$q.notifyAlert("Selecione um Emitente");else this.$q.notifyAlert("Selecione um Cliente")},cancelar(){this.documento.status="Cancelado",this.documento.dataHoraFinalizado=(0,se.dataAtual)(),this.gravar(!1)},ativar(){this.documento.status="Ativo",this.documento.dataHoraFinalizado="",this.gravar(!0)}},async created(){console.log("created")}};var Ce=o(39341),fe=o(63626),xe=o(7112),ve=o(54553),Ne=o(47266),ke=o(76210),we=o(48761),ge=o(24515),ye=o(4957),be=o(54707),Ie=o(25901),_e=o(77953),Be=o(60880),qe=o(31106),Ee=o(83054),De=o(68900),Se=o(83831),Te=o(83671),ze=o(98586),Ae=o(7518),Me=o.n(Ae);Ve.render=function(e,t,o,l,i,r){const n=(0,a.resolveComponent)("q-btn"),c=(0,a.resolveComponent)("q-toolbar-title"),d=(0,a.resolveComponent)("q-toolbar"),s=(0,a.resolveComponent)("q-header"),m=(0,a.resolveComponent)("badge"),u=(0,a.resolveComponent)("q-tooltip"),p=(0,a.resolveComponent)("q-item-section"),h=(0,a.resolveComponent)("q-item-label"),V=(0,a.resolveComponent)("q-item"),C=(0,a.resolveComponent)("q-list"),f=(0,a.resolveComponent)("q-menu"),x=(0,a.resolveComponent)("avatar"),v=(0,a.resolveComponent)("campo"),N=(0,a.resolveComponent)("row"),k=(0,a.resolveComponent)("q-card"),w=(0,a.resolveComponent)("q-icon"),g=(0,a.resolveComponent)("q-separator"),y=(0,a.resolveComponent)("prompt-item-novo"),b=(0,a.resolveComponent)("prompt-contato-novo"),I=(0,a.resolveComponent)("q-page"),_=(0,a.resolveComponent)("q-footer"),B=(0,a.resolveComponent)("q-page-container"),de=(0,a.resolveComponent)("q-layout"),se=(0,a.resolveComponent)("q-dialog"),me=(0,a.resolveDirective)("close-popup");return(0,a.openBlock)(),(0,a.createBlock)(se,{modelValue:i.visibilidade.modal,"onUpdate:modelValue":t[11]||(t[11]=e=>i.visibilidade.modal=e),maximized:"",onShow:r.mostrar,onHide:r.fechar},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(de,{class:"bg-light",container:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(B,{class:"u-container"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(s,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(d,null,{default:(0,a.withCtx)((()=>[(0,a.withDirectives)((0,a.createVNode)(n,{dense:"",flat:"",icon:"arrow_back",round:""},null,512),[[me]]),(0,a.createVNode)(c,null,{default:(0,a.withCtx)((()=>[q])),_:1}),(0,a.createVNode)(n,{class:"no-shadow",unelevated:"",color:"white","text-color":"primary",label:"Salvar",onClick:t[0]||(t[0]=e=>r.gravar(!1))})])),_:1})])),_:1}),(0,a.createVNode)(I,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(d,{class:"q-pa-none q-ma-none q-my-md ",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(c,{class:"text-black q-px-none text-body2 "},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("Emissão: "+(0,a.toDisplayString)(e.$filters.data(i.documento.dataHoraEmissao))+" ",1),i.documento.dataHoraFinalizado?((0,a.openBlock)(),(0,a.createElementBlock)("span",E,"Cancelamento: "+(0,a.toDisplayString)(e.$filters.data(i.documento.dataHoraFinalizado)),1)):(0,a.createCommentVNode)("",!0)])),_:1}),"Ativo"===i.documento.status?((0,a.openBlock)(),(0,a.createBlock)(m,{key:0,cor:"positive",class:"q-mx-sm ",icone:"flag",escuro:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(i.documento.status),1)])),_:1})):(0,a.createCommentVNode)("",!0),"Cancelado"===i.documento.status?((0,a.openBlock)(),(0,a.createBlock)(m,{key:1,cor:"negative",class:"q-mx-xs ",icone:"flag",escuro:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(i.documento.status),1)])),_:1})):(0,a.createCommentVNode)("",!0),i.documento.numero?((0,a.openBlock)(),(0,a.createBlock)(m,{key:2,cor:"tertiary",escuro:"",icone:"playlist_add_check",class:"q-mx-xs "},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)(" #"+(0,a.toDisplayString)(i.documento.numero)+" ",1),i.documento.codigoDocumento?((0,a.openBlock)(),(0,a.createBlock)(u,{key:0},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("Código: "+(0,a.toDisplayString)(i.documento.codigoDocumento),1)])),_:1})):(0,a.createCommentVNode)("",!0)])),_:1})):(0,a.createCommentVNode)("",!0),i.documento.numero?((0,a.openBlock)(),(0,a.createElementBlock)("div",D,[i.configImpressaoContrato.length>1?((0,a.openBlock)(),(0,a.createBlock)(n,{key:0,class:"q-ml-xs",color:"primary",icon:"print",flat:"",dense:"",round:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(f,{self:"top middle",anchor:"bottom middle"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(C,{link:"",separator:""},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(i.configImpressaoContrato.filter((e=>e.valor)),(t=>((0,a.openBlock)(),(0,a.createBlock)(V,{key:t.valor,onClick:o=>e.$imprimir(t.valor,{id:(i.documento||{}).id||"0",Oculto:"0"})},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(p,{icon:"print"}),(0,a.createVNode)(h,{label:t.texto},null,8,["label"])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})):((0,a.openBlock)(),(0,a.createBlock)(n,{key:1,class:"q-ml-xs",color:"primary",icon:"print",flat:"",dense:"",round:"",onClick:t[1]||(t[1]=t=>e.$imprimir(i.configImpressaoContrato[0].valor,{id:(i.documento||{}).id||"0",Oculto:"0"}))}))])):(0,a.createCommentVNode)("",!0)])),_:1}),(0,a.createVNode)(k,{class:"bg-white q-pa-md  q-mt-md no-shadow"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("form",S,[(0,a.createVNode)(N,{class:" q-col-gutter-sm"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",T,[(0,a.createVNode)(N,null,{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",z,[(0,a.createVNode)(x,{imagem:i.emitente.imagem,rotulo:i.emitente.nome,tamanho:"30",style:{float:"left"},class:"q-mr-sm"},null,8,["imagem","rotulo"])]),(0,a.createElementVNode)("div",A,[(0,a.createVNode)(v,{rotulo:"Emitente",tipo:"texto",class:"col-10",modelValue:i.emitente.nome,"onUpdate:modelValue":t[2]||(t[2]=e=>i.emitente.nome=e),disable:""},null,8,["modelValue"])])])),_:1})]),(0,a.createElementVNode)("div",M,[(0,a.createVNode)(N,null,{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",L,[(0,a.createVNode)(x,{imagem:i.cliente.imagem,rotulo:i.cliente.nome,tamanho:"30",style:{float:"left"},class:"q-mr-sm"},null,8,["imagem","rotulo"])]),(0,a.createElementVNode)("div",Z,[(0,a.createVNode)(v,{placeholder:"Cliente",rotulo:"Cliente",tipo:"texto",after:[{icon:"edit",handler(){i.contatosModal=!0}}],modelValue:i.cliente.nome,"onUpdate:modelValue":[t[3]||(t[3]=e=>i.cliente.nome=e),r.aoSelecionarCliente],onClick:t[4]||(t[4]=e=>i.contatosModal="Cancelado"!==i.documento.status),disabled:"Cancelado"===i.documento.status,somenteLeitura:"Cancelado"===i.documento.status},null,8,["after","modelValue","onUpdate:modelValue","disabled","somenteLeitura"])])])),_:1})]),(0,a.createElementVNode)("div",F,[(0,a.createVNode)(v,{class:"col-12 col-md ",rotulo:"Dia de Vencimento",modelValue:i.diaVencimento,"onUpdate:modelValue":t[5]||(t[5]=e=>i.diaVencimento=e),opcoes:{minimumValue:1,maximumValue:28},placeholder:"Dia Vencimento",tipo:"numero",onBlur:r.validaDia,erroRotulo:"Dia entre 1 e 28",erro:i.diaVencimento>28||i.diaVencimento<1},null,8,["modelValue","onBlur","erro"])])])),_:1})],512)])),_:1}),(0,a.createVNode)(k,{class:"bg-white q-pa-md  q-mt-md no-shadow"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(d,{class:"q-pa-none q-ma-none q-mb-md",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(w,{name:"shopping_cart",size:"24px",style:{color:"#737373"}}),(0,a.createVNode)(c,null,{default:(0,a.withCtx)((()=>[$])),_:1}),"Cancelado"!==i.documento.status?((0,a.openBlock)(),(0,a.createBlock)(n,{key:0,color:"positive",flat:"",dense:"",icon:"add",round:"",size:"md",onClick:t[6]||(t[6]=e=>r.abrirModal())},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(u,null,{default:(0,a.withCtx)((()=>[Q])),_:1})])),_:1})):(0,a.createCommentVNode)("",!0)])),_:1}),(0,a.createVNode)(C,{class:"col-12 no-border q-mx-none q-pa-none"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(V,{class:"q-pa-none"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(p,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(N,{class:"q-col-gutter-md text-weight-bold text-left justify-around"},{default:(0,a.withCtx)((()=>[U,P,R,H,G,X])),_:1})])),_:1}),(0,a.createVNode)(g,{class:"q-my-xs"}),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(i.documentoItens,((t,o)=>((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:o},[(0,a.createVNode)(h,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(N,{class:"q-col-gutter-md text-weight-bold text-left justify-around"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",j,(0,a.toDisplayString)(t.codigoItem||"-"),1),(0,a.createElementVNode)("div",O,(0,a.toDisplayString)(t.descricaoItem||"-"),1),(0,a.createElementVNode)("div",J,[(0,a.createVNode)(v,{class:"col-10",modelValue:t.quantidade,"onUpdate:modelValue":e=>t.quantidade=e,tipo:"decimal",decimals:"4",onBlur:e=>r.recalcularTotal(t)},null,8,["modelValue","onUpdate:modelValue","onBlur"]),(0,a.createElementVNode)("span",K,(0,a.toDisplayString)(t.unidade||"-"),1)]),(0,a.createElementVNode)("div",W,[(0,a.createVNode)(v,{class:"col-10",modelValue:t.valorItem,"onUpdate:modelValue":e=>t.valorItem=e,tipo:"decimal",decimals:"4",onBlur:e=>r.recalcularTotal(t)},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),(0,a.createElementVNode)("div",Y,(0,a.toDisplayString)(e.$filters.numero(t.total,2)),1),(0,a.createElementVNode)("div",ee,[(0,a.createVNode)(n,{flat:"",dense:"",icon:"edit",round:"",size:"md",onClick:e=>r.abrirModal(t.idItem)},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(u,null,{default:(0,a.withCtx)((()=>[te])),_:1})])),_:2},1032,["onClick"]),(0,a.createVNode)(n,{flat:"",dense:"",icon:"delete",round:"",size:"md",onClick:e=>r.excluirItem(t.id)},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(u,null,{default:(0,a.withCtx)((()=>[oe])),_:1})])),_:2},1032,["onClick"])])])),_:2},1024)])),_:2},1024),(0,a.createVNode)(g,{class:"q-my-xs"})],64)))),128))])),_:1})])),_:1}),(0,a.createVNode)(V,{class:"q-px-none"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(p,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(N,{class:"q-col-gutter-md text-weight-bold text-left justify-around"},{default:(0,a.withCtx)((()=>[ae,le,ie,re,(0,a.createElementVNode)("div",ne,(0,a.toDisplayString)(e.$filters.numero(i.totalItens,2)),1),ce])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.createVNode)(V,{class:"q-px-none"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(p,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{class:"text-center"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(n,{color:"positive",icon:"add",class:"q-mx-auto",label:"Adicionar item",outline:"",size:"xs",onClick:t[7]||(t[7]=e=>r.abrirModal())})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.createVNode)(y,{modelValue:i.itensModal,"onUpdate:modelValue":t[8]||(t[8]=e=>i.itensModal=e),filtro:{ativo:!0,idEmpresa:i.documento.idEmpresa},onSelecionarItens:r.selecionarItens,habilitarQuantidade:!0,ref:"promptItem"},null,8,["modelValue","filtro","onSelecionarItens"]),(0,a.createVNode)(b,{modelValue:i.contatosModal,"onUpdate:modelValue":t[9]||(t[9]=e=>i.contatosModal=e),filtro:{ativo:!0},placeholder:"Seleciona o Cliente",onSelecionar:r.aoSelecionarCliente},null,8,["modelValue","onSelecionar"]),(0,a.createVNode)(b,{modelValue:i.emitenteModal,"onUpdate:modelValue":t[10]||(t[10]=e=>i.emitenteModal=e),filtro:{ativo:!0,empresas:!0},placeholder:"Seleciona a empresa emitente",onSelecionar:r.selecionarEmitente},null,8,["modelValue","onSelecionar"])])),_:1}),(0,a.createVNode)(_,null,{default:(0,a.withCtx)((()=>[i.documento.numero?((0,a.openBlock)(),(0,a.createBlock)(d,{key:0,class:"footer",style:{background:"#eeeeee !important"}},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(c,{class:"text-right"},{default:(0,a.withCtx)((()=>["Ativo"===i.documento.status?((0,a.openBlock)(),(0,a.createBlock)(n,{key:0,class:"q-mx-md",color:"negative",flat:"",label:"Cancelar",onClick:r.cancelar},null,8,["onClick"])):(0,a.createCommentVNode)("",!0),"Cancelado"===i.documento.status?((0,a.openBlock)(),(0,a.createBlock)(n,{key:1,color:"primary",label:"Ativar",unelevated:"",onClick:r.ativar},null,8,["onClick"])):(0,a.createCommentVNode)("",!0)])),_:1})])),_:1})):(0,a.createCommentVNode)("",!0)])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","onShow","onHide"])};const Le=Ve;Me()(Ve,"components",{QDialog:Ce.Z,QLayout:fe.Z,QPageContainer:xe.Z,QHeader:ve.Z,QToolbar:Ne.Z,QBtn:ke.Z,QToolbarTitle:we.Z,QPage:ge.Z,QTooltip:ye.Z,QMenu:be.Z,QList:Ie.Z,QItem:_e.Z,QItemSection:Be.Z,QItemLabel:qe.Z,QCard:Ee.Z,QIcon:De.Z,QSeparator:Se.Z,QFooter:Te.Z}),Me()(Ve,"directives",{ClosePopup:ze.Z});const Ze={components:{lista:_.Z,Badge:B.Z,ContratoModal:Le},data:()=>({paginacao:{atual:1,minimo:1,maximo:1,total:1,limite:25},filtros:{tab:"Ativo",empresa:{selecionada:"",opcoes:[]},periodo:{emissao:{ini:"",fim:""},finalizado:{ini:"",fim:""}}},documentos:[],tabs:[{rotulo:"Ativos",value:"Ativo"},{rotulo:"Cancelados",value:"Cancelado"},{rotulo:"Todos",value:"Todos"}],checkboxModel:!1,showAllPreviewDetail:!1,listaItensLayout:{},showFilters:!1,filtrosDrawer:{ativo:null,descricaoAplicacao:null,codIdRef:null,codigoBarras:null,marca:null,fornecedor:null,grupo:null,subGrupo:null,estoque:null,tipo:null,codigoCompra:null},buscaCampo:"",opcoesMarca:[],opcoesGrupo:[],opcoesSubGrupo:[],opcoesTipo:["Produto"]}),methods:{async criarContrato(){this.$refs.contratoModal.visibilidade.modal=!0,await this.$refs.contratoModal.atualizar()},selecionarTodosXCheckBox(){for(let e of this.listaItens)this.listaItensLayout[e.id].remover=this.checkboxModel},trocarTab(e){this.paginacao.atual=1,this.filtros.tab=e,this.atualizar()},async cancelarTodosContratos(){},async ativarTodosContratos(){},gerarListaItensLayout(e){console.log({lista:e});for(let t of e)this.listaItensLayout[t.id]={detalhes:!1,remover:!1};this.documentos=(0,se.clonarV2)(e)},async abrirItem(e){this.$refs.contratoModal.visibilidade=!0,await this.$refs.contratoModal.atualizar(e)},abrirTodosPreview(){if(this.showAllPreviewDetail=!this.showAllPreviewDetail,this.showAllPreviewDetail)for(let e in this.documentos)this.documentos[e].showPreviewDetail=!0;else for(let e in this.documentos)this.documentos[e].showPreviewDetail=!1},async adicionarContrato(){this.$refs.contrato.visibilidade.modal=!0,await this.$refs.contrato.atualizar()},async buscar(){if(""!==this.buscaCampo){let e=[],t=[],o=(await I.db.item.ler({filtros:{termoBusca:this.buscaCampo}})).data;if(o){for(let t of o){let o=await I.db.contrato.leItens({idItem:t.id});e.push(o)}e=e.flat(),console.log({documentosItem:e});for(let o of e){let e=await I.db.contrato.le({id:o.idDocumento});t.push({...e})}}console.log({documentosFiltrados:t});let a=await I.db.contatoBusca.filtrar(this.buscaCampo,{},0);if(a)for(let e of a){let o=await I.db.contrato.le({idContato:e.id});t.push(...o[0])}t=t.flat(),this.documentos=t.map((e=>({...e,showPreviewDetail:!1,documentoItens:[]}))),console.log(t,this.documentos)}},limparBusca(){this.buscaCampo||this.atualizar()},abrirFiltro(){!0===this.section||!0===this.kanban||!0===this.gantt?this.left=!0:this.left=!1,this.showFilters=!this.showFilters},getPage(e){this.page.ativa=e,this.filtrar()},async editar(e){await this.$refs.contrato.atualizar(e),this.$refs.contrato.visibilidade.modal=!0},async excluir(e){await this.$q.dialog({message:"Deseja mesmo cancelar esse Constrato?",title:"Cancelar Contrato?",cancel:{label:"Não",push:!0,color:"tertiary",flat:!0},ok:{label:"Sim",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).then((async()=>{let t=(0,se.clonarV2)(e);t.status="Cancelado",t.dataHoraFinalizado=(0,se.dataAtual)(),console.log({documentoOriginal:e,documentoAtualizado:t}),await I.db.contrato.grava({documentoAnterior:e,documento:t}),this.atualizar()}))},async showDetails(e){let t=await I.db.contrato.leItens({idDocumento:e.id});e.documentoItens=t,e.showPreviewDetail=!e.showPreviewDetail},async atualizar(){try{this.$q.loading.show();const e=this.paginacao.limite,t=this.paginacao.atual,o="descricao";let a="";"Ativo"===this.filtros.tab?a="Ativo":"Cancelado"===this.filtros.tab&&(a="Cancelado");let l=this.filtros.empresa.selecionada.value||"";this.filtros.idEmpresa=l;let i={};if(this.buscaCampo);else{let l=this.$utils.eliminarVazios(this.filtros);l.status=a,i=await this.filtrarCampos(l,e,t,o)}this.gerarListaItensLayout(i.data),this.paginacao.total=i.total,this.paginacao.maximo=i.totalPages}catch(e){this.$q.notifyError("Erro iniciar",e)}finally{this.$q.loading.hide()}},filtrarCampos:async(e,t,o,a)=>I.db.contrato.leRefatorado({filtros:e,limit:t,page:o,sort:a}),async filtrar(e=1){this.buscaCampo="";const t=(e-1)*this.pageSize;let o=await I.db.contrato.le({periodoEmissao:{ini:this.filtro.periodo.emissao.ini,fim:this.filtro.periodo.emissao.fim},diaVencimento:{ini:this.filtro.periodo.cancelado.ini,fim:this.filtro.periodo.cancelado.fim},status:this.page.ativa,idEmpresa:this.filtro.empresas.selected,offset:t,limit:this.pageSize});this.documentos=o[0].map((e=>({...e,showPreviewDetail:!1,documentoItens:[]})));let a=o[1];this.page.ativo.max=Math.ceil(a/this.pageSize),this.page.cancelado.max=Math.ceil(a/this.pageSize)},async empresaOpcoesCarregar(){this.filtro.empresas.options=(await I.db.empresa.le()).map((e=>({label:e.nome,value:e.idContato})))}},created(){this.atualizar()}};var Fe=o(46924),$e=o(15031),Qe=o(81312),Ue=o(95277);Ze.render=function(e,t,o,I,_,B){const q=(0,a.resolveComponent)("campo"),E=(0,a.resolveComponent)("q-checkbox"),D=(0,a.resolveComponent)("badge"),S=(0,a.resolveComponent)("q-item-section"),T=(0,a.resolveComponent)("q-item-label"),z=(0,a.resolveComponent)("q-icon"),A=(0,a.resolveComponent)("q-tooltip"),M=(0,a.resolveComponent)("row"),L=(0,a.resolveComponent)("q-btn"),Z=(0,a.resolveComponent)("q-item"),F=(0,a.resolveComponent)("q-list"),$=(0,a.resolveComponent)("q-menu"),Q=(0,a.resolveComponent)("q-toggle"),U=(0,a.resolveComponent)("q-field"),P=(0,a.resolveComponent)("q-separator"),R=(0,a.resolveComponent)("lista"),H=(0,a.resolveComponent)("ContratoModal"),G=(0,a.resolveDirective)("close-popup");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(R,{titulo:"Contratos",onCriar_click:B.criarContrato,showAdd:"false",onCheckBoxGeral_click:e.checkBoxGeral_click,onFiltro_change:B.atualizar,onLimparFiltros_click:e.limparFiltros_click,icone:"gavel",onAbrirTodosPreview:B.abrirTodosPreview,onExportarXLSX_click:e.exportarXLSX_click,onRemoverTodos:e.removerTodos,onRestaurarTodos:e.restaurarTodos,tabSelecionada:e.tabSelecionada,tabs:_.tabs,lista:e.lista,listaLayout:e.listaLayout,paginacao:_.paginacao,filtros:_.filtros,opcoesMarca:_.opcoesMarca,opcoesGrupo:_.opcoesGrupo,opcoesSubGrupo:_.opcoesSubGrupo,opcoesTipo:_.opcoesTipo,buscaCampo:_.buscaCampo,"onUpdate:buscaCampo":t[3]||(t[3]=e=>_.buscaCampo=e),checkboxModel:_.checkboxModel,"onUpdate:checkboxModel":t[4]||(t[4]=e=>_.checkboxModel=e)},{filtroCampos:(0,a.withCtx)((()=>[(0,a.createVNode)(q,{modelValue:_.filtrosDrawer.descricaoAplicacao,"onUpdate:modelValue":t[0]||(t[0]=e=>_.filtrosDrawer.descricaoAplicacao=e),rotulo:"Descrição/Aplicação",dense:""},null,8,["modelValue"]),(0,a.createVNode)(q,{modelValue:_.filtrosDrawer.codIdRef,"onUpdate:modelValue":t[1]||(t[1]=e=>_.filtrosDrawer.codIdRef=e),rotulo:"Código/ID/Referência",dense:""},null,8,["modelValue"]),(0,a.createVNode)(q,{modelValue:_.filtrosDrawer.codigoBarras,"onUpdate:modelValue":t[2]||(t[2]=e=>_.filtrosDrawer.codigoBarras=e),rotulo:"Cód. Barras",dense:""},null,8,["modelValue"])])),itemLista:(0,a.withCtx)((()=>[(0,a.createVNode)(F,{class:"rounded-borders"},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(_.documentos,(t=>((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:t.id},[(0,a.createVNode)(Z,{clickable:"",class:"items-center d-flex q-pa-xs"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(S,{avatar:"",center:"",class:"mw120 hideonmobile"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",l,[(0,a.createVNode)(E,{modelValue:_.listaItensLayout[t.id].remover,"onUpdate:modelValue":e=>_.listaItensLayout[t.id].remover=e},null,8,["modelValue","onUpdate:modelValue"]),"Cancelado"===t.status?((0,a.openBlock)(),(0,a.createBlock)(D,{key:0,class:"q-mr-sm hideonmobile",cor:"tertiary",escuro:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)(" #"+(0,a.toDisplayString)((t.codigoDocumento||0).toString().padStart(3,"0")),1)])),_:2},1024)):((0,a.openBlock)(),(0,a.createBlock)(D,{key:1,class:"q-mr-sm hideonmobile",cor:"positive",escuro:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)(" #"+(0,a.toDisplayString)((t.codigoDocumento||0).toString().padStart(3,"0")),1)])),_:2},1024))])])),_:2},1024),(0,a.createVNode)(S,{clickable:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(M,{class:"items-center  q-col-gutter-x-sm"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(E,{modelValue:_.listaItensLayout[t.id].remover,"onUpdate:modelValue":e=>_.listaItensLayout[t.id].remover=e,class:"q-ma-none q-pa-none hideondesktop"},null,8,["modelValue","onUpdate:modelValue"]),(0,a.createElementVNode)("div",{class:"col",onClick:e=>B.abrirItem(t.id)},[t.descricaoContato?((0,a.openBlock)(),(0,a.createBlock)(T,{key:0,class:"text-tertiary text-weight-bold"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.descricaoContato),1)])),_:2},1024)):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(M,{class:"hideondesktop items-center q-my-sm"},{default:(0,a.withCtx)((()=>[t.dataHoraEmissao?((0,a.openBlock)(),(0,a.createElementBlock)("div",r,[(0,a.createVNode)(M,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(z,{class:"text-tertiary",name:"today"}),(0,a.createVNode)(T,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$filters.data(t.dataHoraEmissao)),1)])),_:2},1024),(0,a.createVNode)(A,null,{default:(0,a.withCtx)((()=>[n])),_:1})])),_:2},1024)])):(0,a.createCommentVNode)("",!0),t.dataHoraFinalizado?((0,a.openBlock)(),(0,a.createElementBlock)("div",c,[(0,a.createVNode)(M,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(z,{class:"text-tertiary",name:"today"}),(0,a.createVNode)(T,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$filters.data(t.dataHoraFinalizado)),1)])),_:2},1024),(0,a.createVNode)(A,null,{default:(0,a.withCtx)((()=>[d])),_:1})])),_:2},1024)])):(0,a.createCommentVNode)("",!0)])),_:2},1024)],8,i)])),_:2},1024)])),_:2},1024),(0,a.createVNode)(S,{onClick:e=>B.abrirItem(t.id),class:"hideonmobile"},{default:(0,a.withCtx)((()=>[t.dataHoraEmissao?((0,a.openBlock)(),(0,a.createBlock)(M,{key:0},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(z,{class:"text-tertiary",name:"today"}),(0,a.createVNode)(T,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$filters.data(t.dataHoraEmissao)),1)])),_:2},1024),(0,a.createVNode)(A,null,{default:(0,a.withCtx)((()=>[s])),_:1})])),_:2},1024)):(0,a.createCommentVNode)("",!0)])),_:2},1032,["onClick"]),(0,a.createVNode)(S,{onClick:e=>B.abrirItem(t.id),class:"hideonmobile"},{default:(0,a.withCtx)((()=>[t.dataHoraFinalizado?((0,a.openBlock)(),(0,a.createBlock)(M,{key:0},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(z,{class:"text-tertiary",name:"today"}),(0,a.createVNode)(T,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$filters.data(t.dataHoraFinalizado)),1)])),_:2},1024),(0,a.createVNode)(A,null,{default:(0,a.withCtx)((()=>[m])),_:1})])),_:2},1024)):(0,a.createCommentVNode)("",!0)])),_:2},1032,["onClick"]),(0,a.createVNode)(S,{onClick:e=>B.abrirItem(t.id)},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(T,{caption:"",class:"text-right text-tertiary"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.$filters.numero(t.totalContrato,2))+" ",1),(0,a.createVNode)(A,null,{default:(0,a.withCtx)((()=>[u])),_:1})])),_:2},1024)])),_:2},1032,["onClick"]),(0,a.createVNode)(S,{side:"",top:""},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",p,[(0,a.createVNode)(L,{icon:_.listaItensLayout[t.id].detalhes?"keyboard_arrow_up":"keyboard_arrow_down",class:"buttons",color:"tertiary",dense:"",flat:"",round:"",size:"md",onClick:e=>B.showDetails(t)},null,8,["icon","onClick"]),(0,a.createVNode)(L,{class:"buttons",color:"primary",dense:"",flat:"",icon:"edit",round:"",size:"md",onClick:e=>B.abrirItem(t.id)},null,8,["onClick"]),(0,a.createVNode)(L,{dense:"",flat:"",icon:"more_vert",round:"",size:"md"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)($,null,{default:(0,a.withCtx)((()=>[(0,a.withDirectives)((0,a.createVNode)(F,{class:"q-py-none",link:"","no-border":"",separator:""},{default:(0,a.withCtx)((()=>["Excluidos"!==_.filtros.tab?((0,a.openBlock)(),(0,a.createBlock)(Z,{key:0,onClick:o=>e.removerItem(t)},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(S,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(z,{name:"delete"})])),_:1}),(0,a.createVNode)(S,null,{default:(0,a.withCtx)((()=>[h])),_:1})])),_:2},1032,["onClick"])):(0,a.createCommentVNode)("",!0),"Excluidos"===_.filtros.tab?((0,a.openBlock)(),(0,a.createBlock)(Z,{key:1,onClick:o=>e.restaurarItem(t)},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(S,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(z,{name:"restore_from_trash"})])),_:1}),(0,a.createVNode)(S,null,{default:(0,a.withCtx)((()=>[V])),_:1})])),_:2},1032,["onClick"])):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(Z,{onClick:o=>e.duplicarItem(t.id)},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(S,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(z,{name:"control_point_duplicate"})])),_:1}),(0,a.createVNode)(S,null,{default:(0,a.withCtx)((()=>[C])),_:1})])),_:2},1032,["onClick"])])),_:2},1536),[[G]])])),_:2},1024)])),_:2},1024)])])),_:2},1024)])),_:2},1024),_.listaItensLayout[t.id].detalhes?((0,a.openBlock)(),(0,a.createBlock)(Z,{key:0,class:"collumnOnMobile q-px-md q-py-xs",onClick:e=>B.abrirItem(t.id)},{default:(0,a.withCtx)((()=>[t.grupo?((0,a.openBlock)(),(0,a.createBlock)(S,{key:0,class:"row full-width"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(T,{caption:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.grupo),1)])),_:2},1024),(0,a.createVNode)(T,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.subGrupo),1)])),_:2},1024)])),_:2},1024)):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(S,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(D,{class:"q-mr-sm",cor:"primary",escuro:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.tipo),1)])),_:2},1024)])),_:2},1024),(0,a.createVNode)(S,null,{default:(0,a.withCtx)((()=>[t.quantidadeDisponivel?((0,a.openBlock)(),(0,a.createBlock)(T,{key:0,stamp:""},{default:(0,a.withCtx)((()=>[f,(0,a.createElementVNode)("strong",null,(0,a.toDisplayString)(t.quantidadeDisponivel),1),(0,a.createVNode)(D,{class:"q-ml-sm",cor:"tertiary",escuro:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.unidade),1)])),_:2},1024)])),_:2},1024)):(0,a.createCommentVNode)("",!0)])),_:2},1024),(0,a.createVNode)(S,null,{default:(0,a.withCtx)((()=>[_.listaItensLayout[t.id].fornecedor?((0,a.openBlock)(),(0,a.createBlock)(T,{key:0,stamp:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(z,{class:"q-mr-xs",name:"business"}),x,((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(_.listaItensLayout[t.id].fornecedor,(e=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:e.idContato},(0,a.toDisplayString)(e.contato.nome),1)))),128))])),_:2},1024)):(0,a.createCommentVNode)("",!0)])),_:2},1024),(0,a.createElementVNode)("div",v,[t.codigoBarras?((0,a.openBlock)(),(0,a.createBlock)(S,{key:0,stamp:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(z,{class:"q-mr-xs",name:"mdi-barcode"}),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(t.codigoBarras),1)])),_:2},1024)):(0,a.createCommentVNode)("",!0),t.address?((0,a.openBlock)(),(0,a.createBlock)(S,{key:1,stamp:""},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("span",N,(0,a.toDisplayString)(t.address),1)])),_:2},1024)):(0,a.createCommentVNode)("",!0)])])),_:2},1032,["onClick"])):(0,a.createCommentVNode)("",!0),_.listaItensLayout[t.id].detalhes?((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:1,class:"row q-col-gutter-x-md q-pa-md pointer",onClick:e=>B.abrirItem(t.id)},[(0,a.createVNode)(U,{class:"col-2 col-lg-auto"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(Q,{modelValue:_.listaItensLayout[t.id].utilizaComposicaoValorReposicaoInvertido,"onUpdate:modelValue":e=>_.listaItensLayout[t.id].utilizaComposicaoValorReposicaoInvertido=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),e.permissaoFicha?((0,a.openBlock)(),(0,a.createElementBlock)("div",w,[(0,a.createVNode)(q,(0,a.mergeProps)({modelValue:t.valorCustoReposicao,"onUpdate:modelValue":e=>t.valorCustoReposicao=e},e.meta.valorCustoReposicao,{ajuda:_.listaItensLayout[t.id].utilizaComposicaoValorReposicaoInvertido?"":"Total da composição",disable:!_.listaItensLayout[t.id].utilizaComposicaoValorReposicaoInvertido,readonly:!_.listaItensLayout[t.id].utilizaComposicaoValorReposicaoInvertido,class:"no-shadow full-width "}),null,16,["modelValue","onUpdate:modelValue","ajuda","disable","readonly"])])):(0,a.createCommentVNode)("",!0),e.permissaoFicha?((0,a.openBlock)(),(0,a.createElementBlock)("div",g,[(0,a.createVNode)(q,(0,a.mergeProps)({modelValue:_.listaItensLayout[t.id].percentualMarkup,"onUpdate:modelValue":e=>_.listaItensLayout[t.id].percentualMarkup=e},e.meta.percentualMarkup,{disable:_.listaItensLayout[t.id].utilizaMarkupInvertido,readonly:_.listaItensLayout[t.id].utilizaMarkupInvertido,class:"no-shadow full-width ",decimals:"2",rotulo:"Lucro",tipo:"decimal"}),null,16,["modelValue","onUpdate:modelValue","disable","readonly"])])):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(U,{class:"col-2 col-lg-auto"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(Q,{modelValue:_.listaItensLayout[t.id].utilizaMarkupInvertido,"onUpdate:modelValue":e=>_.listaItensLayout[t.id].utilizaMarkupInvertido=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),e.permissaoFicha?((0,a.openBlock)(),(0,a.createElementBlock)("div",y,[(0,a.createVNode)(q,(0,a.mergeProps)({modelValue:t.valorVenda,"onUpdate:modelValue":e=>t.valorVenda=e},e.meta.valorVenda,{disable:!_.listaItensLayout[t.id].utilizaMarkupInvertido,readonly:!_.listaItensLayout[t.id].utilizaMarkupInvertido,class:"no-shadow full-width "}),null,16,["modelValue","onUpdate:modelValue","disable","readonly"])])):(0,a.createCommentVNode)("",!0),e.permissaoFicha?((0,a.openBlock)(),(0,a.createElementBlock)("div",b,[(0,a.createVNode)(L,{class:"full-width no-shadow",color:"primary",label:"Salvar",size:"sm",onClick:o=>e.salvarItem(t)},null,8,["onClick"])])):(0,a.createCommentVNode)("",!0)],8,k)):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(P)],64)))),128))])),_:1})])),_:1},8,["onCriar_click","onCheckBoxGeral_click","onFiltro_change","onLimparFiltros_click","onAbrirTodosPreview","onExportarXLSX_click","onRemoverTodos","onRestaurarTodos","tabSelecionada","tabs","lista","listaLayout","paginacao","filtros","opcoesMarca","opcoesGrupo","opcoesSubGrupo","opcoesTipo","buscaCampo","checkboxModel"]),(0,a.createVNode)(H,{ref:"contratoModal",onAtualizar:B.atualizar},null,8,["onAtualizar"])],64)},Ze.__scopeId="data-v-18cde87a";const Pe=Ze;Me()(Ze,"components",{QList:Ie.Z,QItem:_e.Z,QItemSection:Be.Z,QCheckbox:Fe.Z,QItemLabel:qe.Z,QIcon:De.Z,QTooltip:ye.Z,QBtn:ke.Z,QMenu:be.Z,QField:$e.Z,QToggle:Qe.Z,QSeparator:Se.Z,QDrawer:Ue.Z}),Me()(Ze,"directives",{ClosePopup:ze.Z})}}]);