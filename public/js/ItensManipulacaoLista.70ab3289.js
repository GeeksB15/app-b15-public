"use strict";(self.webpackChunkb15=self.webpackChunkb15||[]).push([[82],{91769:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Ke});var a=o(34182);const i={class:"row"},l={class:"col-12 row q-px-md q-mt-lg"},r=(0,a.createElementVNode)("strong",{class:"col-12 text-body1 text-dark"},"Período de Emissão",-1),s={class:"col-6"},d={class:"col-6"},c={class:"col-12 row q-px-md q-mt-lg"},n=(0,a.createElementVNode)("strong",{class:"col-12 text-body1 text-dark"},"Período de Finalização",-1),m={class:"col-6"},u={class:"col-6"},p={class:"col-12 row q-px-md q-mt-lg"},h={class:"row items-center"},f={class:"text-tertiary q-gutter-xs"},V=(0,a.createTextVNode)(" Origem "),g=(0,a.createTextVNode)(" Destino ");var v=o(26531),x=(o(26891),o(72407));const C={data:()=>({modal:{visivel:!1}}),emits:["excluir"]};var N=o(74260),w=o(39341),b=o(63626),k=o(54553),y=o(47266),q=o(48761),E=o(37617),I=o(83671),_=o(98586),z=o(7518),B=o.n(z);B()(C,"components",{QDialog:w.Z,QLayout:b.Z,QHeader:k.Z,QToolbar:y.Z,QToolbarTitle:q.Z,QBtn:E.Z,QFooter:I.Z}),B()(C,"directives",{ClosePopup:_.Z});const D=(0,a.createTextVNode)("Manipulação de Itens "),T={key:0},F={ref:"form"},S={class:"col-12"},M={class:"col-12"},Z={class:"col-12 col-md-6"},$={class:"q-item-label q-mb-none",style:{color:"#0c0c0c"}},L=(0,a.createTextVNode)(" Origem "),Q=(0,a.createTextVNode)("Adicionar Item"),U=(0,a.createElementVNode)("div",{class:"col-2 col-md"},"Código",-1),A=(0,a.createElementVNode)("div",{class:"col-10 col-md-4"},"Descrição",-1),P=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},"Quantidade",-1),O=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},"Valor",-1),H=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},"Total",-1),R=(0,a.createElementVNode)("div",{class:"col-6 col-md-1 text-right"},"Ações",-1),G={class:"col-2 col-md"},j={class:"col-10 col-md-4"},X={class:"col-6 col-md text-right"},J={class:"col-6 col-md text-right"},K={class:"col-6 col-md text-right"},W={key:0,class:"col-6 col-md-1 text-right"},Y=(0,a.createTextVNode)("Excluir"),ee=(0,a.createElementVNode)("div",{class:"col-2 col-md"},null,-1),te=(0,a.createElementVNode)("div",{class:"col-10 col-md-4"},null,-1),oe=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},null,-1),ae=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},null,-1),ie={class:"col-6 col-md text-right"},le=(0,a.createElementVNode)("div",{class:"col-6 col-md-1 text-right"}," ",-1),re={class:"col-12 col-md-6"},se={class:"q-item-label q-mb-none",style:{color:"#0c0c0c"}},de=(0,a.createTextVNode)(" Destino "),ce=(0,a.createTextVNode)("Adicionar Item"),ne=(0,a.createElementVNode)("div",{class:"col-2 col-md"},"Código",-1),me=(0,a.createElementVNode)("div",{class:"col-10 col-md-4"},"Descrição",-1),ue=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},"Quantidade",-1),pe=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},"Valor",-1),he=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},"Total",-1),fe=(0,a.createElementVNode)("div",{class:"col-6 col-md-1 text-right"},"Ações",-1),Ve={class:"col-2 col-md"},ge={class:"col-10 col-md-4"},ve={class:"col-6 col-md text-right"},xe={class:"col-6 col-md text-right"},Ce={class:"col-6 col-md text-right"},Ne={key:0,class:"col-6 col-md-1 text-right"},we=(0,a.createTextVNode)("Excluir"),be=(0,a.createElementVNode)("div",{class:"col-2 col-md"},null,-1),ke=(0,a.createElementVNode)("div",{class:"col-10 col-md-4"},null,-1),ye=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},null,-1),qe=(0,a.createElementVNode)("div",{class:"col-6 col-md text-right"},null,-1),Ee={class:"col-6 col-md text-right"},Ie=(0,a.createElementVNode)("div",{class:"col-6 col-md-1 text-right"}," ",-1),_e={class:"u-container relative-position"};var ze=o(58294),Be=o(48409),De=o(43119),Te=o(4676);const Fe={components:{Badge:x.Z,BadgeCopiarUid:De.Z,PromptItemV2:Te.Z},data:()=>({itens:[],documentoAnterior:{},documentoItensAnterior:[],documento:{id:"",codigoDocumento:"",idEmpresa:"",codigoEmpresa:"",descricaoEmpresa:"",operacao:"Manipulacao",tipo:"Estoque",status:"",dataEmissao:(0,ze.dataAtual)(),dataFinalizacao:"",observacao:""},documentoItens:[],adicionar:{modal:{name:"",value:!1}},totalOrigem:0,totalDestino:0,visivel:!1,promptItem:{filtros:{}}}),emits:["atualizar"],methods:{zerarCampos(){this.empresa={},this.documentoAnterior={},this.documentoItensAnterior=[],this.documento={id:(0,ze.uuid)(),idEmpresa:"",descricaoEmpresa:"",operacao:"Manipulação",tipo:"Estoque",status:"Digitação",dataHoraEmissao:(0,ze.dataAtual)(),dataHoraFinalizado:"",observacao:""},this.documentoItens=[],this.totalOrigem=0,this.totalDestino=0},async atualizar(e){if(this.zerarCampos(),e)this.documentoAnterior=await $db.itemManipulacao.le({id:e}),this.documento=$utils.clonarV2(this.documentoAnterior),this.documentoItensAnterior=await $db.itemManipulacao.leItens({idDocumento:e}),this.documentoItens=(0,ze.clonarV2)(this.documentoItensAnterior);else{let e=[],t=await $db.contatoBusca.filtrar(null,{ativo:!0,empresas:!0},0);if(t.length&&await(0,Be.X)().empresa.where("idContato").anyOf(t.map((e=>e.id))).each((t=>{e.push(t)})),!e.length)return void this.$q.notify({message:"Não há empresa configurada",timeout:0,type:"negative",closeBtn:!0});let o={};if(e.length>1){const e={ativo:!0,empresas:!0};if(o=await $g.promptContato.show({filtro:e,placeholder:"Selecione"}),!o)return this.visivel=!1,void this.$q.notifyError("Empresa não selecionada.")}else o=e[0];this.empresa=o,this.documento.descricaoEmpresa=o.nome,this.documento.idEmpresa=o.id}this.somarValorTotal()},async salvar(e,t){try{await $db.itemManipulacao.grava({documentoAnterior:this.documentoAnterior,documento:this.documento,documentoItensAnterior:this.documentoItensAnterior,documentoItens:this.documentoItens})}catch(e){this.$q.notifyError("Erro ao salvar",e)}this.atualizar(this.documento.id),this.$emit("atualizar"),this.$q.notify(t),this.visivel=e},finalizar(){if(this.verificarTotal()){this.documento.status="Finalizado",this.documento.dataHoraFinalizado=(0,ze.dataAtual)();for(let e of this.documentoItens)e.status="Finalizado",e.dataHoraFinalizado=(0,ze.dataAtual)();this.salvar(!1,"Produção Finalizada")}},reabrir(){try{this.documento.status="Digitação",this.documento.dataHoraFinalizado="";for(let e of this.documentoItens)e.status="Digitação",e.dataHoraFinalizado="";this.salvar(!0,"Produção reaberta")}catch(e){this.$q.notifyError("Erro ao reabrir",e)}},async excluirItem(e){this.documentoItens=this.documentoItens.filter((t=>t.id!==e)),this.somarValorTotal()},async recalcularTotal(e){console.log(e),e.subTotal=(0,ze.arredondar)(e.quantidade*e.valorItem),e.total=(0,ze.arredondar)(e.quantidade*e.valorItem),1===e.operacaoFator&&await this.verificarComposicao(e.idItem,e.quantidade,{titulo:"Composição",msg:"Deseja recalcular a origem?"}),this.somarValorTotal()},async recalcularQuantidade(e){e.quantidade=(0,ze.arredondar)(e.subTotal/e.valorItem),e.total=e.subTotal,this.somarValorTotal()},async recalcularValorItem(e){e.valorItem=(0,ze.arredondar)(e.subTotal/e.quantidade),e.total=e.subTotal,this.somarValorTotal()},somarValorTotal(){this.totalOrigem=this.documentoItens.filter((e=>-1===e.operacaoFator)).reduce(((e,t)=>e+t.total),0),this.totalDestino=this.documentoItens.filter((e=>1===e.operacaoFator)).reduce(((e,t)=>e+t.total),0)},verificarTotal(){return 0===this.documentoItens.length&&0===this.totalDestino&&0===this.totalOrigem?(this.$q.notifyError("Selecione alguns itens na lista"),!1):this.totalOrigem===this.totalDestino||(this.$q.notifyError("Valores Totais de Origem e Destino devem ser iguais!"),!1)},async abrirModal(e,t=""){let o={},a=[];const i="Destino"===e?1:-1;a=t?this.documentoItens.filter((e=>e.idItem===t)):this.documentoItens.filter((e=>e.operacaoFator===i));for(const e of a)o[e.idItem]={item:await(0,Be.X)().item.get(e.idItem)||{},quantidade:e.quantidade};this.$refs.promptItem.itensSelecionados=o,this.$refs.promptItem.termo=t,this.$refs.promptItem.atualizar(),this.adicionar.modal.value=!0,this.adicionar.modal.name=e},async selecionarItens(e){const t="Destino"===this.adicionar.modal.name?1:-1;for(const o in e){let a=await $db.estoqueSaldoProdutoEmpresa.le({idEmpresa:this.documento.idEmpresa,tipoEstoque:"Disponível",idItem:o});if(a=a[0],!a)return void this.$q.notifyError("Item não disponível no estoque");const i=e[o].item||{},l=e[o].quantidade||0,r=a.valorCustoMedio||i.valorCustoReposicao;let s=this.documentoItens.find((e=>e.idItem===o));s?(s.quantidade=l,s.quantidadeRealizado=l,s.subTotal=(0,ze.arredondar)(l*r),s.total=(0,ze.arredondar)(l*r)):this.documentoItens.push({dataHoraEmissao:(0,ze.dataAtual)(),dataHoraFinalizado:"",descricaoItem:i.descricao,id:(0,ze.uuid)(),idDocumento:this.documento.id,idItem:i.id,operacao:"Manipulação",operacaoFator:t,quantidade:l,quantidadeRealizado:l,status:"Digitação",tipoItem:i.tipoItem,subTotal:(0,ze.arredondar)(l*r),total:(0,ze.arredondar)(l*r),unidade:i.unidade,valorCustoMedio:a.valorCustoMedio,valorItem:r});let d={titulo:"Composição",msg:"O item selecionado possue itens de composição, deseja preencher?"};1===t&&await this.verificarComposicao(i.id,l,d)}this.somarValorTotal()},async verificarComposicao(e,t,o){let a=!1,i=[],l=await $db.item.leCompleto({id:e});for(let e of l.atual.composicao)e.idItemUtilizado&&(e.quantidade=e.quantidade*t,i.push(e),a=!0);const r=i.reduce(((e,t)=>(e[t.idItemUtilizado]||(e[t.idItemUtilizado]=t),e)),{});$q.dialog({title:o.titulo,message:o.msg,cancel:!0,persistent:!0}).onOk((()=>{this.adicionar.modal.name="Origem",this.selecionarItens(r)}))}}};var Se=o(7112),Me=o(24515),Ze=o(83054),$e=o(31106),Le=o(68900),Qe=o(4957),Ue=o(25901),Ae=o(77953),Pe=o(60880),Oe=o(83831);const He=(0,N.Z)(Fe,[["render",function(e,t,o,i,l,r){const s=(0,a.resolveComponent)("q-btn"),d=(0,a.resolveComponent)("q-toolbar-title"),c=(0,a.resolveComponent)("q-toolbar"),n=(0,a.resolveComponent)("q-header"),m=(0,a.resolveComponent)("badge"),u=(0,a.resolveComponent)("BadgeCopiarUid"),p=(0,a.resolveComponent)("campo"),h=(0,a.resolveComponent)("row"),f=(0,a.resolveComponent)("q-card"),V=(0,a.resolveComponent)("q-icon"),g=(0,a.resolveComponent)("q-tooltip"),v=(0,a.resolveComponent)("q-item-label"),x=(0,a.resolveComponent)("q-separator"),C=(0,a.resolveComponent)("q-item-section"),N=(0,a.resolveComponent)("q-item"),w=(0,a.resolveComponent)("q-list"),b=(0,a.resolveComponent)("q-page"),k=(0,a.resolveComponent)("q-footer"),y=(0,a.resolveComponent)("q-page-container"),q=(0,a.resolveComponent)("q-layout"),E=(0,a.resolveComponent)("q-dialog"),I=(0,a.resolveComponent)("PromptItemV2"),_=(0,a.resolveDirective)("close-popup");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(E,{modelValue:l.visivel,"onUpdate:modelValue":t[7]||(t[7]=e=>l.visivel=e),maximized:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(q,{class:"bg-light",container:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(y,{class:"u-container"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(n,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(c,null,{default:(0,a.withCtx)((()=>[(0,a.withDirectives)((0,a.createVNode)(s,{dense:"",flat:"",icon:"arrow_back",round:""},null,512),[[_]]),(0,a.createVNode)(d,null,{default:(0,a.withCtx)((()=>[D])),_:1}),(0,a.createVNode)(s,{class:"q-ml-sm no-shadow",color:"white",unelevated:"","text-color":"primary",label:"Salvar",onClick:t[0]||(t[0]=e=>r.salvar(!1,"Produção salva!"))})])),_:1})])),_:1}),(0,a.createVNode)(b,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(c,{class:"q-pa-none q-ma-none q-my-md",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(d,{class:"text-black q-px-none text-body2"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("Emissão: "+(0,a.toDisplayString)(e.$filters.data(l.documento.dataHoraEmissao))+" ",1),l.documento.dataHoraFinalizado?((0,a.openBlock)(),(0,a.createElementBlock)("span",T,"Cancelamento: "+(0,a.toDisplayString)(e.$filters.data(l.documento.dataHoraFinalizado)),1)):(0,a.createCommentVNode)("",!0)])),_:1}),l.documento.status?((0,a.openBlock)(),(0,a.createBlock)(m,{key:0,cor:"positive",class:"q-mx-sm",icone:"flag",escuro:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(l.documento.status),1)])),_:1})):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(u,{id:l.documento.id,"numero:":"documento.id.slice(-8)",cor:"tertiary"},null,8,["id"])])),_:1}),(0,a.createVNode)(f,{class:"bg-white q-pa-md q-mt-md no-shadow"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("form",F,[(0,a.createVNode)(h,{class:"q-col-gutter-sm"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",S,[(0,a.createVNode)(p,{modelValue:l.documento.descricaoEmpresa,"onUpdate:modelValue":t[1]||(t[1]=e=>l.documento.descricaoEmpresa=e),disable:"",rotulo:"Empresa",tipo:"texto"},null,8,["modelValue"])]),(0,a.createElementVNode)("div",M,[(0,a.createVNode)(p,{modelValue:l.documento.observacao,"onUpdate:modelValue":t[2]||(t[2]=e=>l.documento.observacao=e),rotulo:"Observação",tipo:"texto"},null,8,["modelValue"])])])),_:1})],512)])),_:1}),(0,a.createVNode)(h,{class:"q-col-gutter-x-sm q-mt-md"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",Z,[(0,a.createVNode)(f,{class:"no-shadow bg-white full-width fit q-pa-md"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(c,{class:"q-pa-none q-ma-none q-mb-md",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("p",$,[(0,a.createVNode)(V,{class:"q-mr-md",name:"shopping_cart",size:"24px",style:{color:"#737373"}}),L]),(0,a.createVNode)(d,{class:"q-pa-none q-ma-none",style:{height:"0 !important","min-height":"auto"}}),"Digitação"===l.documento.status?((0,a.openBlock)(),(0,a.createBlock)(s,{key:0,color:"positive",dense:"",flat:"",icon:"add",round:"",size:"md",onClick:t[3]||(t[3]=e=>r.abrirModal("Origem"))},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(g,null,{default:(0,a.withCtx)((()=>[Q])),_:1})])),_:1})):(0,a.createCommentVNode)("",!0)])),_:1}),(0,a.createVNode)(w,{class:"col-12 no-border q-mx-none q-pa-none"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(N,{class:"q-pa-none"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(C,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(v,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{class:"q-col-gutter-md text-weight-bold text-left justify-around"},{default:(0,a.withCtx)((()=>[U,A,P,O,H,R])),_:1})])),_:1}),(0,a.createVNode)(x,{class:"q-my-xs"}),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(l.documentoItens,((e,t)=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:t},[-1===e.operacaoFator?((0,a.openBlock)(),(0,a.createBlock)(v,{key:0,caption:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{class:"text-left justify-around"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",G,(0,a.toDisplayString)(e.codigoItem||"-"),1),(0,a.createElementVNode)("div",j,(0,a.toDisplayString)(e.descricaoItem||"-"),1),(0,a.createElementVNode)("div",X,[(0,a.createVNode)(p,{modelValue:e.quantidade,"onUpdate:modelValue":t=>e.quantidade=t,somenteLeitura:"Finalizado"===l.documento.status,decimals:"4",tipo:"decimal",onBlur:t=>r.recalcularTotal(e)},null,8,["modelValue","onUpdate:modelValue","somenteLeitura","onBlur"])]),(0,a.createElementVNode)("div",J,[(0,a.createVNode)(p,{modelValue:e.valorItem,"onUpdate:modelValue":t=>e.valorItem=t,decimals:"4",disable:"",tipo:"decimal"},null,8,["modelValue","onUpdate:modelValue"])]),(0,a.createElementVNode)("div",K,[(0,a.createVNode)(p,{modelValue:e.subTotal,"onUpdate:modelValue":t=>e.subTotal=t,somenteLeitura:"Finalizado"===l.documento.status,decimals:"4",tipo:"decimal",onBlur:t=>r.recalcularQuantidade(e)},null,8,["modelValue","onUpdate:modelValue","somenteLeitura","onBlur"])]),"Digitação"===l.documento.status?((0,a.openBlock)(),(0,a.createElementBlock)("div",W,[(0,a.createVNode)(s,{dense:"",flat:"",icon:"delete",round:"",size:"md",onClick:t=>r.excluirItem(e.id)},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(g,null,{default:(0,a.withCtx)((()=>[Y])),_:1})])),_:2},1032,["onClick"])])):(0,a.createCommentVNode)("",!0)])),_:2},1024)])),_:2},1024)):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(x,{class:"q-my-xs"}),(0,a.createVNode)(v,{caption:""})])))),128))])),_:1})])),_:1}),(0,a.createVNode)(N,{class:"q-pa-none"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(C,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(v,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{class:"text-weight-bold text-left justify-around"},{default:(0,a.withCtx)((()=>[ee,te,oe,ae,(0,a.createElementVNode)("div",ie,(0,a.toDisplayString)(e.$filters.numero(l.totalOrigem,2)),1),le])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.createVNode)(N,{class:"q-px-none"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(C,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(v,{class:"text-center"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(s,{class:"q-mx-auto",color:"positive",icon:"add",label:"Adicionar item",outline:"",size:"xs",onClick:t[4]||(t[4]=e=>r.abrirModal("Origem"))})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})]),(0,a.createElementVNode)("div",re,[(0,a.createVNode)(f,{class:"no-shadow bg-white full-width fit q-pa-md"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(c,{class:"q-pa-none q-ma-none q-mb-md",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("p",se,[(0,a.createVNode)(V,{class:"q-mr-md",name:"shopping_cart",size:"24px",style:{color:"#737373"}}),de]),(0,a.createVNode)(d,{class:"q-pa-none q-ma-none",style:{height:"0 !important","min-height":"auto"}}),"Digitação"===l.documento.status?((0,a.openBlock)(),(0,a.createBlock)(s,{key:0,color:"positive",dense:"",flat:"",icon:"add",round:"",size:"md",onClick:t[5]||(t[5]=e=>r.abrirModal("Destino"))},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(g,null,{default:(0,a.withCtx)((()=>[ce])),_:1})])),_:1})):(0,a.createCommentVNode)("",!0)])),_:1}),(0,a.createVNode)(w,{class:"col-12 no-border q-mx-none q-pa-none"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(N,{class:"q-pa-none"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(C,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(v,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{class:"q-col-gutter-md text-weight-bold text-left justify-around"},{default:(0,a.withCtx)((()=>[ne,me,ue,pe,he,fe])),_:1})])),_:1}),(0,a.createVNode)(x,{class:"q-my-xs"}),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(l.documentoItens,((e,t)=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:t},[1===e.operacaoFator?((0,a.openBlock)(),(0,a.createBlock)(v,{key:0,caption:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{class:"text-left justify-around"},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",Ve,(0,a.toDisplayString)(e.codigoItem||"-"),1),(0,a.createElementVNode)("div",ge,(0,a.toDisplayString)(e.descricaoItem||"-"),1),(0,a.createElementVNode)("div",ve,[(0,a.createVNode)(p,{modelValue:e.quantidade,"onUpdate:modelValue":t=>e.quantidade=t,somenteLeitura:"Finalizado"===l.documento.status,decimals:"4",tipo:"decimal",onBlur:t=>r.recalcularTotal(e)},null,8,["modelValue","onUpdate:modelValue","somenteLeitura","onBlur"])]),(0,a.createElementVNode)("div",xe,[(0,a.createVNode)(p,{modelValue:e.valorItem,"onUpdate:modelValue":t=>e.valorItem=t,somenteLeitura:"Finalizado"===l.documento.status,class:"col",decimals:"4",tipo:"decimal"},null,8,["modelValue","onUpdate:modelValue","somenteLeitura"])]),(0,a.createElementVNode)("div",Ce,[(0,a.createVNode)(p,{modelValue:e.subTotal,"onUpdate:modelValue":t=>e.subTotal=t,somenteLeitura:"Finalizado"===l.documento.status,decimals:"4",tipo:"decimal",onBlur:t=>r.recalcularValorItem(e)},null,8,["modelValue","onUpdate:modelValue","somenteLeitura","onBlur"])]),"Digitação"===l.documento.status?((0,a.openBlock)(),(0,a.createElementBlock)("div",Ne,[(0,a.createVNode)(s,{dense:"",flat:"",icon:"delete",round:"",size:"md",onClick:t=>r.excluirItem(e.id)},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(g,null,{default:(0,a.withCtx)((()=>[we])),_:1})])),_:2},1032,["onClick"])])):(0,a.createCommentVNode)("",!0)])),_:2},1024)])),_:2},1024)):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(x,{class:"q-my-xs"}),(0,a.createVNode)(v,{caption:""})])))),128))])),_:1})])),_:1}),(0,a.createVNode)(N,{class:"q-pa-none"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(C,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(v,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(h,{class:"text-weight-bold text-left justify-around"},{default:(0,a.withCtx)((()=>[be,ke,ye,qe,(0,a.createElementVNode)("div",Ee,(0,a.toDisplayString)(e.$filters.numero(l.totalDestino,2)),1),Ie])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.createVNode)(N,{class:"q-px-none"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(C,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(v,{class:"text-center"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(s,{class:"q-mx-auto",color:"positive",icon:"add",label:"Adicionar item",outline:"",size:"xs",onClick:t[6]||(t[6]=e=>r.abrirModal("Destino"))})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])])),_:1})])),_:1}),(0,a.createVNode)(k,{class:"bg-light no-shadow q-pa-sm text-right",bordered:""},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",_e,[(0,a.createVNode)(d,{class:"text-right"},{default:(0,a.withCtx)((()=>["Finalizado"===l.documento.status?((0,a.openBlock)(),(0,a.createBlock)(s,{key:0,color:"primary",label:"Reabrir",onClick:r.reabrir},null,8,["onClick"])):(0,a.createCommentVNode)("",!0),"Digitação"===l.documento.status?((0,a.openBlock)(),(0,a.createBlock)(s,{key:1,color:"primary",label:"Finalizar",onClick:r.finalizar},null,8,["onClick"])):(0,a.createCommentVNode)("",!0)])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.createVNode)(I,{modelValue:l.adicionar.modal.value,"onUpdate:modelValue":t[8]||(t[8]=e=>l.adicionar.modal.value=e),filtro:l.promptItem.filtros,habilitarQuantidade:!0,onSelecionarItens:r.selecionarItens,ref:"promptItem"},null,8,["modelValue","filtro","onSelecionarItens"])],64)}]]);B()(Fe,"components",{QDialog:w.Z,QLayout:b.Z,QPageContainer:Se.Z,QHeader:k.Z,QToolbar:y.Z,QBtn:E.Z,QToolbarTitle:q.Z,QPage:Me.Z,QCard:Ze.Z,QItemLabel:$e.Z,QIcon:Le.Z,QTooltip:Qe.Z,QList:Ue.Z,QItem:Ae.Z,QItemSection:Pe.Z,QSeparator:Oe.Z,QFooter:I.Z}),B()(Fe,"directives",{ClosePopup:_.Z});var Re=o(11463),Ge=o(88603);const je={components:{lista:v.Z,Badge:x.Z,ItensManipulacao:He,BadgeCopiarUid:De.Z},data:()=>({paginacao:{atual:1,minimo:1,maximo:1,total:1,limite:25},filtros:{tab:"digitacao",empresa:{selecionada:"",opcoes:[]},periodoEmissao:{ini:"",fim:""},periodoFinalizado:{ini:"",fim:""}},documentos:[],tabs:[{rotulo:"Digitação",value:"digitacao"},{rotulo:"Finalizados",value:"finalizado"},{rotulo:"Todos",value:"Todos"}],tabSelecionada:{valor:"digitacao"},listaLayout:{},confirm:!1,currentId:null,documentoItens:null,showsectionm:!1,buscaCampo:"",checkboxModel:[],carregando:!1,contatosEmpresa:[],dados:{},erroEmpresas:!1,erroPeriodo:!1,modalManipulacao:!1,configImpressao:[]}),watch:{showFilters:function(e){!0===e?this.showList=!1:!0!==this.section&&!0!==this.kanban&&!0!==this.gantt||(this.showList=!0)}},methods:{trocarTab(e){this.paginacao.atual=1,this.filtros.tab=e,this.atualizar()},async atualizar(){this.filtros.tab=this.tabSelecionada.valor;try{this.$q.loading.show();const e=this.paginacao.limite,t=this.paginacao.atual,o="descricao";let a="";"digitacao"===this.filtros.tab?a="Digitação":"finalizado"===this.filtros.tab&&(a="Finalizado");let i=this.filtros.empresa.selecionada.value||"";this.filtros.idEmpresa=i;let l={};if(this.buscaCampo){let i=this.$utils.eliminarVazios(this.filtros);i.termoBusca=this.buscaCampo,i.status=a,l=await this.filtrarCampos(i,e,t,o)}else{let i=this.$utils.eliminarVazios(this.filtros);i.status=a,l=await this.filtrarCampos(i,e,t,o)}this.listaLayout={};for(let e of l.data)this.listaLayout[e.id]={detalhes:!1};this.documentos=l.data,this.paginacao.total=l.total,this.paginacao.maximo=l.totalPages,this.configuraImpressao(this.filtros.idEmpresa)}catch(e){this.$q.notifyError("Erro iniciar",e)}finally{this.$q.loading.hide()}},filtrarCampos:async(e,t,o,a)=>(console.log({filtros:e}),Re.db.itemManipulacao.leRefatorado({filtros:e,limit:t,page:o,sort:a})),limparFiltros_click(){this.filtros={tab:this.tabAtiva,empresa:{selecionada:"",opcoes:[]},periodoEmissao:{ini:"",fim:""},periodoFinalizado:{ini:"",fim:""}},this.atualizar()},async showDetails(e){let t=await Re.db.itemManipulacao.leItens({idDocumento:e.id});e.documentoItens=t,e.showPreviewDetail=!e.showPreviewDetail},async editarManipulacao(e){this.$refs.itensManipulacao.visivel=!0,await this.$refs.itensManipulacao.atualizar(e)},async adicionarManipulacaoItens(){this.$refs.itensManipulacao.visivel=!0,await this.$refs.itensManipulacao.atualizar()},async filtrar(e=1){this.buscaCampo="";const t=(e-1)*this.pageSize;this.documentos.status="digitacao";let o=await Re.db.itemManipulacao.le({periodoEmissao:{ini:this.filtro.periodoEmissao.ini,fim:this.filtro.periodoEmissao.fim},periodoFinalizado:{ini:this.filtro.periodoFinalizado.ini,fim:this.filtro.periodoFinalizado.fim},status:this.page.ativa,idEmpresa:this.filtro.empresas.selected,offset:t,limit:this.pageSize});this.documentos=o[0].map((e=>({...e,showPreviewDetail:!1,documentoItens:[]}))),this.documentos=(0,Ge.orderBy)(this.documentos,["dataHoraFinalizado","dataHoraEmissao"],["desc","desc"]);let a=o[1];this.page.digitacao.max=Math.ceil(a/this.pageSize),this.page.finalizado.max=Math.ceil(a/this.pageSize)},getPage(e){this.page.ativa=e,this.filtrar()},excluir(e){$q.dialog({cancel:{label:"Não",push:!0,color:"tertiary",flat:!0},title:"Remover",message:"Ao continuar você irá remover este item.",ok:{label:"Sim",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk((async()=>{try{$q.loading.show(),await Re.db.itemManipulacao.remove(e),this.atualizar(),$q.notifyPositive("O item foi excluído com sucesso.")}catch(e){$q.notifyError("Ocorreu um erro ao remover item",e)}finally{$q.loading.hide()}}))},async buscar(){setTimeout((async()=>{let e=(await Re.db.item.ler({filtros:{termoBusca:this.buscaCampo}})).data,t=[],o=[];for(let o of e)t=await Re.db.itemManipulacao.leItens({idItem:o.id});for(let e of t){console.log("doc");let t=await Re.db.itemManipulacao.le({id:e.idDocumento});o.push(t)}this.documentos=o.map((e=>({...e,showPreviewDetail:!1,documentoItens:[]})))}),1500)},abrirFiltro(){!0===this.section||!0===this.kanban||!0===this.gantt?this.left=!0:this.left=!1,this.showFilters=!this.showFilters},async empresaOpcoesCarregar(){console.log("carregar empresas"),this.filtros.empresa.opcoes=(await Re.db.empresa.le()).map((e=>({rotulo:e.nome,valor:e.idContato})))},carregaComponent(e){this.showFilters=!1,"list"===e&&(this.left=!1,this.section=!1,this.showList=!1,this.list=!0,this.kanban=!1,this.gantt=!1,this.ganttL=!1,this.kanbanL=!1)},async configuraImpressao(e){const t=await $db.configuracoes.porNome("impressao.documento",e);this.configImpressao=[...t.length?t.map((e=>({texto:"Imprimir Compisição",...e}))):[{valor:"producao",texto:"Produção"},{}]]}},created(){this.atualizar()}};var Xe=o(40320),Je=o(54707);const Ke=(0,N.Z)(je,[["render",function(e,t,o,v,x,C){const N=(0,a.resolveComponent)("campo"),w=(0,a.resolveComponent)("q-select"),b=(0,a.resolveComponent)("BadgeCopiarUid"),k=(0,a.resolveComponent)("q-item-section"),y=(0,a.resolveComponent)("q-item-label"),q=(0,a.resolveComponent)("q-icon"),E=(0,a.resolveComponent)("q-item-labe"),I=(0,a.resolveComponent)("q-tooltip"),_=(0,a.resolveComponent)("badge"),z=(0,a.resolveComponent)("q-btn"),B=(0,a.resolveComponent)("q-item"),D=(0,a.resolveComponent)("q-list"),T=(0,a.resolveComponent)("q-menu"),F=(0,a.resolveComponent)("q-separator"),S=(0,a.resolveComponent)("lista"),M=(0,a.resolveComponent)("ItensManipulacao");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(S,{titulo:"Manipulação de Itens",onCriar_click:C.adicionarManipulacaoItens,showAdd:"false",showToolbar:!1,icone:"mdi-set-center-right",onCheckBoxGeral_click:e.checkBoxGeral_click,onFiltro_change:C.atualizar,onLimparFiltros_click:C.limparFiltros_click,onAbrirTodosPreview:e.abrirTodosPreview,onExportarXLSX_click:e.exportarXLSX_click,onRemoverTodos:e.removerTodos,onRestaurarTodos:e.restaurarTodos,tabSelecionada:x.tabSelecionada,tabs:x.tabs,lista:e.lista,listaLayout:x.listaLayout,paginacao:x.paginacao,filtros:x.filtros,opcoesMarca:e.opcoesMarca,opcoesGrupo:e.opcoesGrupo,opcoesSubGrupo:e.opcoesSubGrupo,opcoesTipo:e.opcoesTipo,buscaCampo:x.buscaCampo,"onUpdate:buscaCampo":t[7]||(t[7]=e=>x.buscaCampo=e),checkboxModel:x.checkboxModel,"onUpdate:checkboxModel":t[8]||(t[8]=e=>x.checkboxModel=e)},{filtroCampos:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",i,[(0,a.createElementVNode)("div",{class:"col-12 q-px-sm",onClick:t[1]||(t[1]=(...e)=>C.empresaOpcoesCarregar&&C.empresaOpcoesCarregar(...e))},[(0,a.createVNode)(N,{modelValue:x.filtros.empresa.selecionada,"onUpdate:modelValue":t[0]||(t[0]=e=>x.filtros.empresa.selecionada=e),opcoes:x.filtros.empresa.opcoes,rotulo:"Por Empresa",tipo:"seletor"},null,8,["modelValue","opcoes"])]),(0,a.createElementVNode)("div",l,[r,(0,a.createElementVNode)("div",s,[(0,a.createVNode)(N,{modelValue:x.filtros.periodoEmissao.ini,"onUpdate:modelValue":t[2]||(t[2]=e=>x.filtros.periodoEmissao.ini=e),after:[{icon:"mdi-close-circle",handler(){x.filtros.periodoEmissao.ini=""}}],class:"no-shadow full-width",rotulo:"De",tipo:"data"},null,8,["modelValue","after"])]),(0,a.createElementVNode)("div",d,[(0,a.createVNode)(N,{modelValue:x.filtros.periodoEmissao.fim,"onUpdate:modelValue":t[3]||(t[3]=e=>x.filtros.periodoEmissao.fim=e),after:[{icon:"mdi-close-circle",handler(){x.filtros.periodoEmissao.fim=""}}],class:"no-shadow full-width",rotulo:"até",tipo:"data"},null,8,["modelValue","after"])])]),(0,a.createElementVNode)("div",c,[n,(0,a.createElementVNode)("div",m,[(0,a.createVNode)(N,{modelValue:x.filtros.periodoFinalizado.ini,"onUpdate:modelValue":t[4]||(t[4]=e=>x.filtros.periodoFinalizado.ini=e),after:[{icon:"mdi-close-circle",handler(){x.filtros.periodoFinalizado.ini=""}}],class:"no-shadow full-width",rotulo:"De",tipo:"data"},null,8,["modelValue","after"])]),(0,a.createElementVNode)("div",u,[(0,a.createVNode)(N,{modelValue:x.filtros.periodoFinalizado.fim,"onUpdate:modelValue":t[5]||(t[5]=e=>x.filtros.periodoFinalizado.fim=e),after:[{icon:"mdi-close-circle",handler(){x.filtros.periodoFinalizado.fim=""}}],class:"no-shadow full-width",rotulo:"até",tipo:"data"},null,8,["modelValue","after"])])]),(0,a.createElementVNode)("div",p,[(0,a.createVNode)(w,{modelValue:x.paginacao.limite,"onUpdate:modelValue":t[6]||(t[6]=e=>x.paginacao.limite=e),options:[10,25,50,100],placeholder:"Quantidade por página"},null,8,["modelValue"])])])])),itemLista:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(x.documentos,(t=>((0,a.openBlock)(),(0,a.createBlock)(D,{key:t.id,class:"q-py-none qListaItems",style:{border:"none !important"}},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(B,{class:"items-center d-flex"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(k,{avatar:"",center:""},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",h,[(0,a.createVNode)(b,{id:t.id,"numero:":"documento.id.slice(-8)",cor:"tertiary"},null,8,["id"])])])),_:2},1024),(0,a.createVNode)(k,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(y,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.descricaoEmpresa),1)])),_:2},1024)])),_:2},1024),(0,a.createVNode)(k,{caption:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(E,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(q,{class:"text-tertiary",name:"event"}),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.$filters.data(t.dataHoraEmissao)),1)])),_:2},1024),(0,a.createVNode)(I,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("Data Emissão "+(0,a.toDisplayString)(e.$filters.dataHora(t.dataHoraEmissao)),1)])),_:2},1024)])),_:2},1024),"digitacao"!==x.tabSelecionada.valor?((0,a.openBlock)(),(0,a.createBlock)(k,{key:0,caption:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(E,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(q,{class:"text-tertiary",name:"event"}),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.$filters.data(t.dataHoraFinalizado)),1)])),_:2},1024),(0,a.createVNode)(I,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("Data Finalizado "+(0,a.toDisplayString)(e.$filters.dataHora(t.dataHoraFinalizado)),1)])),_:2},1024)])),_:2},1024)):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(k,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(_,{class:"q-mr-sm",cor:"warning",escuro:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.status),1)])),_:2},1024)])),_:2},1024),(0,a.createVNode)(k,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(_,{class:"q-mr-sm",cor:"primary",escuro:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.operacao),1)])),_:2},1024)])),_:2},1024),(0,a.createVNode)(k,{side:"",top:""},{default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("div",f,[(0,a.createVNode)(z,{icon:t.showPreviewDetail?"keyboard_arrow_up":"keyboard_arrow_down",class:"buttons",color:"tertiary",dense:"",flat:"",round:"",size:"md",onClick:e=>C.showDetails(t)},null,8,["icon","onClick"]),(0,a.createVNode)(z,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",class:"no-shadow q-mx-xs",size:"md",style:{float:"right"}},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(T,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(D,{link:"",separator:""},{default:(0,a.withCtx)((()=>[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(x.configImpressao.filter((e=>e.valor)),(t=>((0,a.openBlock)(),(0,a.createBlock)(B,{clickable:"",key:t.valor,onClick:o=>e.$imprimir(t.valor,(x.dados.venda||{}).id||"0")},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(k,{avatar:""},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(q,{name:"print"})])),_:1}),(0,a.createVNode)(k,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(y,null,{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(t.texto),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),(0,a.createVNode)(z,{class:"buttons",color:"primary",dense:"",flat:"",icon:"edit",round:"",size:"md",onClick:e=>C.editarManipulacao(t.id)},null,8,["onClick"]),"digitacao"===x.tabSelecionada.valor?((0,a.openBlock)(),(0,a.createBlock)(z,{key:0,class:"buttons",color:"tertiary",dense:"",flat:"",icon:"delete",round:"",size:"md",onClick:e=>C.excluir(t.id)},null,8,["onClick"])):(0,a.createCommentVNode)("",!0)])])),_:2},1024)])),_:2},1024),t.showPreviewDetail?((0,a.openBlock)(),(0,a.createBlock)(B,{key:0,class:"q-pa-md"},{default:(0,a.withCtx)((()=>[(0,a.createVNode)(k,null,{default:(0,a.withCtx)((()=>[V,((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(t.documentoItens,(e=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:e.id},[-1===e.operacaoFator?((0,a.openBlock)(),(0,a.createBlock)(k,{key:0,stamp:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.quantidade)+" "+(0,a.toDisplayString)(e.unidade)+" - "+(0,a.toDisplayString)(e.descricaoItem),1)])),_:2},1024)):(0,a.createCommentVNode)("",!0)])))),128))])),_:2},1024),(0,a.createVNode)(y,null,{default:(0,a.withCtx)((()=>[g,((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(t.documentoItens,(e=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:e.id},[1===e.operacaoFator?((0,a.openBlock)(),(0,a.createBlock)(k,{key:0,stamp:""},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)((0,a.toDisplayString)(e.quantidade)+" "+(0,a.toDisplayString)(e.unidade)+" - "+(0,a.toDisplayString)(e.descricaoItem),1)])),_:2},1024)):(0,a.createCommentVNode)("",!0)])))),128))])),_:2},1024)])),_:2},1024)):(0,a.createCommentVNode)("",!0),(0,a.createVNode)(F)])),_:2},1024)))),128))])),_:1},8,["onCriar_click","onCheckBoxGeral_click","onFiltro_change","onLimparFiltros_click","onAbrirTodosPreview","onExportarXLSX_click","onRemoverTodos","onRestaurarTodos","tabSelecionada","tabs","lista","listaLayout","paginacao","filtros","opcoesMarca","opcoesGrupo","opcoesSubGrupo","opcoesTipo","buscaCampo","checkboxModel"]),(0,a.createVNode)(M,{ref:"itensManipulacao",onAtualizar:C.atualizar},null,8,["onAtualizar"])],64)}]]);B()(je,"components",{QSelect:Xe.Z,QBtn:E.Z,QList:Ue.Z,QItem:Ae.Z,QItemSection:Pe.Z,QItemLabel:$e.Z,QIcon:Le.Z,QTooltip:Qe.Z,QMenu:Je.Z,QSeparator:Oe.Z}),B()(je,"directives",{ClosePopup:_.Z})}}]);