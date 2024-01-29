import{_ as O,N as K,b2 as Y,M as Z,ch as U,ci as M,cj as L,ck as $,cl as D,p as k,o as n,i as h,w as o,f as e,K as ee,G as oe,A as te,B as F,C as X,D as I,L as J,E as S,e as d,H as ae,t as u,d as f,l as m,k as q,aF as W,ai as E,F as z,r as T,aj as w,ak as p,ah as b,s as R,x as c,j as V,am as B,I as le,y as se,aE as G,aA as N,T as j,q as Q}from"./index.870f25bc.js";import{l as ie}from"./listaV3.f8724b67.js";import{C as ne}from"./Campo.610f56c1.js";import{P as re}from"./PromptContatoV2.4583ed61.js";import"./QBtnDropdown.1de1c18b.js";import"./QBtnGroup.bc589903.js";import"./QDate.3941133c.js";import"./QPopupEdit.4229f2c9.js";import"./xlsx.206e2a34.js";const de={components:{Badge:K,Campo:ne,PromptItemV2:Y,Avatar:Z,PromptContatoV2:re},data(){return{cliente:{},emitente:{},diaVencimento:"",documentoAnterior:{},documentoItensAnterior:[],documento:{id:U(),dataHoraEmissao:M(),numero:"",descricaoContato:"",idContato:"",descricaoEmpresa:"",idEmpresa:"",numeroVolumeTransporte:"",status:"Ativo",tipo:"Contrato"},documentoItens:[],totalItens:0,visibilidade:{modal:!1},itensModal:!1,carregando:!0,contatosModal:!1,emitenteModal:!1,empresas:[],configImpressaoContrato:[]}},emits:["atualizar"],methods:{async atualizar(a){if(a=a!=null?a:this.$route.params.id,a)this.documentoAnterior=await $db.hibrido.le({table:"documento",id:a}),this.documento=L(this.documentoAnterior),this.documentoItensAnterior=await $db.hibrido.lista({table:"documentoItem",where:{idDocumento:a}}),this.documentoItens=L(this.documentoItensAnterior),this.cliente.id=this.documento.idContato,this.cliente.nome=this.documento.descricaoContato,this.emitente.id=this.documento.idEmpresa,this.emitente.nome=this.documento.descricaoEmpresa,this.diaVencimento=this.documento.numeroVolumeTransporte;else{this.limparCampos();const i=await $g.promptContato.show({filtro:{ativo:!0,empresas:!0},placeholder:"Selecione"});this.emitente=L(i),this.documento.idEmpresa=this.emitente.id,this.documento.descricaoEmpresa=this.emitente.nome}this.empresas=await $db.hibrido.listaTodos({table:"empresa"}),this.somarValorTotal(),this.configuraImpressaoContrato(this.documento.idEmpresa)},async mostrar(){await $(500),this.carregando=!1},async configuraImpressaoContrato(a){const i=await $db.configuracoes.porNome("impressao.contrato",a);this.configImpressaoContrato=i},fechar(){this.$router.replace({params:{id:""}}),this.carregando=!0},limparCampos(){this.documentoAnterior={},this.documento={id:U(),dataHoraEmissao:M(),numero:"",descricaoContato:"",idContato:"",descricaoEmpresa:"",idEmpresa:"",numeroVolumeTransporte:"",status:"Ativo",tipo:"Contrato"},this.documentoItensAnterior=[],this.documentoItens=[],this.cliente.id="",this.cliente.nome="",this.emitente.id="",this.emitente.nome="",this.diaVencimento=""},async abrirModal(a=""){let i={},v=[];a?v=this.documentoItens.filter(_=>_.idItem===a):v=this.documentoItens;for(const _ of v)i[_.idItem]={item:await $db.hibrido.le({table:"item",id:_.idItem}),quantidade:_.quantidade};this.$refs.promptItem.itensSelecionados=i,this.$refs.promptItem.termo=a,this.$refs.promptItem.atualizar(),this.itensModal=!0},recalcularTotal(a){a.subTotal=D(a.quantidade*a.valorItem),a.total=D(a.quantidade*a.valorItem),this.somarValorTotal()},aoSelecionarCliente(a,i){},async selecionarCliente(){if(this.documento.status!=="Cancelado"){const a=await $g.promptContato.show({filtro:{ativo:!0},placeholder:"Selecione"});this.cliente=L(a),this.contatosModal=!1,this.documento.idContato=this.cliente.id,this.documento.descricaoContato=this.cliente.nome}},async selecionarEmitente(a,i){if(!a){this.emitenteModal=!1;return}this.emitente=L(i),this.emitenteModal=!1,this.documento.idEmpresa=this.emitente.id,this.documento.descricaoEmpresa=this.emitente.nome},aoSelecionarVencimento(){this.documento.numeroVolumeTransporte=this.diaVencimento},selecionarItens:function(a){for(const i in a){const v=a[i].item||{},_=a[i].quantidade||0;let t=this.documentoItens.find(r=>r.idItem===i);t?(t.quantidade=_,t.quantidadeRealizado=_,t.total=D(_*v.valorVenda)):this.documentoItens.push({dataHoraEmissao:M(),descricaoItem:v.descricao,id:U(),idDocumento:this.documento.id,idItem:v.id,operacao:"-",quantidade:_,unidade:v.unidade,quantidadeRealizado:_,tipoItem:v.tipo,total:D(_*v.valorVenda),valorItem:v.valorVenda})}this.somarValorTotal()},somarValorTotal(){this.totalItens=this.documentoItens.reduce((a,i)=>a+=i.total,0)},excluirItem(a){this.documentoItens=this.documentoItens.filter(i=>i.id!==a),this.somarValorTotal()},validaDia(){if(this.diaVencimento<1||this.diaVencimento>28){this.$q.notifyAlert("O dia deve ser um valor entre 1 e 28"),this.diaVencimento="";return}this.aoSelecionarVencimento()},async gravar(a=!1){if(!this.cliente.id){this.$q.notifyAlert("Selecione um Cliente");return}if(!this.emitente.id){this.$q.notifyAlert("Selecione um Emitente");return}if(!this.diaVencimento){this.$q.notifyAlert("Selecione um dia de Vencimento");return}if(!this.totalItens){this.$q.notifyAlert("Adicione alguns itens ao contrato");return}try{await $db.contrato.grava({documentoAnterior:this.documentoAnterior,documento:this.documento,documentoItensAnterior:this.documentoItensAnterior,documentoItens:this.documentoItens}),this.visibilidade.modal=a,this.atualizar(this.documento.id),this.$emit("atualizar")}catch(i){this.$q.notifyError("Erro ao salvar",i)}},cancelar(){this.documento.status="Cancelado",this.documento.dataHoraFinalizado=M(),this.gravar(!0),$q.notifyPositive("Contrato Cancelado")},ativar(){this.documento.status="Ativo",this.documento.dataHoraFinalizado="",this.gravar(!0),$q.notifyPositive("Contrato Reativado")}},async created(){}},ce={key:0},ue={key:3},me={ref:"form"},pe={class:"col-12 col-md"},he={class:"col-auto"},fe={class:"col"},ve={class:"col-12 col-md"},_e={class:"col-auto"},ye={class:"col"},Ce={class:"col-12 col-md"},be=c("div",{class:"col-2 col-md"},"C\xF3digo",-1),Ie=c("div",{class:"col-10 col-md-4"},"Descri\xE7\xE3o",-1),ge=c("div",{class:"col-6 col-md text-right"},"Quantidade",-1),Ve=c("div",{class:"col-6 col-md text-right"},"Valor",-1),ke=c("div",{class:"col-6 col-md text-right"},"Total",-1),we=c("div",{class:"col-6 col-md-1 text-right"},"A\xE7\xF5es",-1),qe={class:"col-2 col-md"},xe={class:"col-10 col-md-4"},Ae={class:"col-6 col-md text-right row"},ze={class:"col-2"},Le={class:"col-6 col-md text-right"},Me={class:"col-6 col-md text-right"},De={class:"col-6 col-md-1 text-right"},Se=c("div",{class:"col-2 col-md"},null,-1),Ee=c("div",{class:"col-10 col-md-4"},null,-1),Te=c("div",{class:"col-6 col-md text-right"},null,-1),Pe=c("div",{class:"col-6 col-md text-right"},null,-1),Ue={class:"col-6 col-md text-right"},Fe=c("div",{class:"col-6 col-md-1 text-right"},"\xA0",-1),Qe={class:"u-container relative-position"};function Be(a,i,v,_,t,r){const y=k("badge"),C=k("avatar"),g=k("campo"),x=k("row"),P=k("PromptItemV2"),l=k("PromptContatoV2");return n(),h(se,{modelValue:t.visibilidade.modal,"onUpdate:modelValue":i[10]||(i[10]=s=>t.visibilidade.modal=s),maximized:"",onShow:r.mostrar,onHide:r.fechar},{default:o(()=>[e(ee,{class:"bg-light",container:""},{default:o(()=>[e(oe,{class:"u-container"},{default:o(()=>[e(te,null,{default:o(()=>[e(F,null,{default:o(()=>[X(e(I,{dense:"",flat:"",icon:"arrow_back",round:""},null,512),[[J]]),e(S,null,{default:o(()=>[d("Contrato")]),_:1}),e(I,{class:"no-shadow",unelevated:"",color:"white","text-color":"primary",label:"Salvar",onClick:i[0]||(i[0]=s=>r.gravar(!1))})]),_:1})]),_:1}),e(ae,null,{default:o(()=>[e(F,{class:"q-pa-none q-ma-none q-my-md",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:o(()=>[e(S,{class:"text-black q-px-none text-body2"},{default:o(()=>[d("Emiss\xE3o: "+u(a.$filters.data(t.documento.dataHoraEmissao))+" ",1),t.documento.dataHoraFinalizado?(n(),f("span",ce,"Cancelamento: "+u(a.$filters.data(t.documento.dataHoraFinalizado)),1)):m("",!0)]),_:1}),t.documento.status==="Ativo"?(n(),h(y,{key:0,cor:"positive",class:"q-mx-sm",icone:"flag",escuro:""},{default:o(()=>[d(u(t.documento.status),1)]),_:1})):m("",!0),t.documento.status==="Cancelado"?(n(),h(y,{key:1,cor:"negative",class:"q-mx-xs",icone:"flag",escuro:""},{default:o(()=>[d(u(t.documento.status),1)]),_:1})):m("",!0),t.documento.numero?(n(),h(y,{key:2,cor:"tertiary",escuro:"",icone:"playlist_add_check",class:"q-mx-xs"},{default:o(()=>[d(" #"+u(t.documento.numero)+" ",1),t.documento.codigoDocumento?(n(),h(q,{key:0},{default:o(()=>[d("C\xF3digo: "+u(t.documento.codigoDocumento),1)]),_:1})):m("",!0)]),_:1})):m("",!0),t.documento.numero?(n(),f("div",ue,[t.configImpressaoContrato.length>1?(n(),h(I,{key:0,class:"q-ml-xs",color:"primary",icon:"print",flat:"",dense:"",round:""},{default:o(()=>[e(W,{self:"top middle",anchor:"bottom middle"},{default:o(()=>[e(E,{link:"",separator:""},{default:o(()=>[(n(!0),f(z,null,T(t.configImpressaoContrato.filter(s=>s.valor),s=>(n(),h(w,{key:s.valor,onClick:H=>a.$imprimir(s.valor,{id:(t.documento||{}).id||"0",Oculto:"0"})},{default:o(()=>[e(p,{icon:"print"}),e(b,{label:s.texto},null,8,["label"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})):(n(),h(I,{key:1,class:"q-ml-xs",color:"primary",icon:"print",flat:"",dense:"",round:"",onClick:i[1]||(i[1]=s=>a.$imprimir(t.configImpressaoContrato[0].valor,{id:(t.documento||{}).id||"0",Oculto:"0"}))}))])):m("",!0)]),_:1}),e(R,{class:"bg-white q-pa-md q-mt-md no-shadow"},{default:o(()=>[c("form",me,[e(x,{class:"q-col-gutter-sm"},{default:o(()=>[c("div",pe,[e(x,null,{default:o(()=>[c("div",he,[e(C,{imagem:t.emitente.imagem,rotulo:t.emitente.nome,tamanho:"30",style:{float:"left"},class:"q-mr-sm"},null,8,["imagem","rotulo"])]),c("div",fe,[e(g,{rotulo:"Emitente",tipo:"texto",class:"col-10",modelValue:t.emitente.nome,"onUpdate:modelValue":i[2]||(i[2]=s=>t.emitente.nome=s),disable:""},null,8,["modelValue"])])]),_:1})]),c("div",ve,[e(x,null,{default:o(()=>[c("div",_e,[e(C,{imagem:t.cliente.imagem,rotulo:t.cliente.nome,tamanho:"30",style:{float:"left"},class:"q-mr-sm"},null,8,["imagem","rotulo"])]),c("div",ye,[e(g,{placeholder:"Cliente",rotulo:"Cliente",tipo:"texto",after:[{icon:"edit",handler(){r.selecionarCliente()}}],modelValue:t.cliente.nome,"onUpdate:modelValue":[i[3]||(i[3]=s=>t.cliente.nome=s),r.aoSelecionarCliente],onClick:r.selecionarCliente,somenteLeitura:t.documento.status==="Cancelado"},null,8,["after","modelValue","onClick","onUpdate:modelValue","somenteLeitura"])])]),_:1})]),c("div",Ce,[e(g,{class:"col-12 col-md",rotulo:"Dia de Vencimento",modelValue:t.diaVencimento,"onUpdate:modelValue":i[4]||(i[4]=s=>t.diaVencimento=s),opcoes:{minimumValue:1,maximumValue:28},placeholder:"Dia Vencimento",tipo:"numero",onBlur:r.validaDia,errorMessage:"Dia entre 1 e 28",error:t.diaVencimento>28||t.diaVencimento<1},null,8,["modelValue","onBlur","error"])])]),_:1})],512)]),_:1}),e(R,{class:"bg-white q-pa-md q-mt-md no-shadow"},{default:o(()=>[e(F,{class:"q-pa-none q-ma-none q-mb-md",color:"none","text-color":"black",style:{"min-height":"auto"}},{default:o(()=>[e(V,{name:"shopping_cart",size:"24px",style:{color:"#737373"}}),e(S,null,{default:o(()=>[d(" Produtos e Servi\xE7os ")]),_:1}),t.documento.status!=="Cancelado"?(n(),h(I,{key:0,color:"positive",flat:"",dense:"",icon:"add",round:"",size:"md",onClick:i[5]||(i[5]=s=>r.abrirModal())},{default:o(()=>[e(q,null,{default:o(()=>[d("Adicionar Item")]),_:1})]),_:1})):m("",!0)]),_:1}),e(E,{class:"col-12 no-border q-mx-none q-pa-none"},{default:o(()=>[e(w,{class:"q-pa-none"},{default:o(()=>[e(p,null,{default:o(()=>[e(b,null,{default:o(()=>[e(x,{class:"q-col-gutter-md text-weight-bold text-left justify-around"},{default:o(()=>[be,Ie,ge,Ve,ke,we]),_:1})]),_:1}),e(B,{class:"q-my-xs"}),(n(!0),f(z,null,T(t.documentoItens,(s,H)=>(n(),f(z,{key:H},[e(b,null,{default:o(()=>[e(x,{class:"q-col-gutter-md text-weight-bold text-left justify-around"},{default:o(()=>[c("div",qe,u(s.codigoItem||"-"),1),c("div",xe,u(s.descricaoItem||"-"),1),c("div",Ae,[e(g,{class:"col-10",modelValue:s.quantidade,"onUpdate:modelValue":A=>s.quantidade=A,tipo:"decimal",decimals:"4",onBlur:A=>r.recalcularTotal(s)},null,8,["modelValue","onUpdate:modelValue","onBlur"]),c("span",ze,u(s.unidade||"-"),1)]),c("div",Le,[e(g,{class:"col-10",modelValue:s.valorItem,"onUpdate:modelValue":A=>s.valorItem=A,tipo:"decimal",decimals:"4",onBlur:A=>r.recalcularTotal(s)},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),c("div",Me,u(a.$filters.numero(s.total,2)),1),c("div",De,[e(I,{flat:"",dense:"",icon:"edit",round:"",size:"md",onClick:A=>r.abrirModal(s.idItem)},{default:o(()=>[e(q,null,{default:o(()=>[d("Editar")]),_:1})]),_:2},1032,["onClick"]),e(I,{flat:"",dense:"",icon:"delete",round:"",size:"md",onClick:A=>r.excluirItem(s.id)},{default:o(()=>[e(q,null,{default:o(()=>[d("Excluir")]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024),e(B,{class:"q-my-xs"})],64))),128))]),_:1})]),_:1}),e(w,{class:"q-px-none"},{default:o(()=>[e(p,null,{default:o(()=>[e(b,null,{default:o(()=>[e(x,{class:"q-col-gutter-md text-weight-bold text-left justify-around"},{default:o(()=>[Se,Ee,Te,Pe,c("div",Ue,u(a.$filters.numero(t.totalItens,2)),1),Fe]),_:1})]),_:1})]),_:1})]),_:1}),e(w,{class:"q-px-none"},{default:o(()=>[e(p,null,{default:o(()=>[e(b,{class:"text-center"},{default:o(()=>[e(I,{color:"positive",icon:"add",class:"q-mx-auto",label:"Adicionar item",outline:"",size:"xs",onClick:i[6]||(i[6]=s=>r.abrirModal())})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(P,{modelValue:t.itensModal,"onUpdate:modelValue":i[7]||(i[7]=s=>t.itensModal=s),filtro:{ativo:!0,idEmpresa:t.documento.idEmpresa},onSelecionarItens:r.selecionarItens,habilitarQuantidade:!0,ref:"promptItem"},null,8,["modelValue","filtro","onSelecionarItens"]),e(l,{modelValue:t.contatosModal,"onUpdate:modelValue":i[8]||(i[8]=s=>t.contatosModal=s),filtro:{ativo:!0},placeholder:"Seleciona o Cliente",onSelecionar:r.aoSelecionarCliente},null,8,["modelValue","onSelecionar"]),e(l,{modelValue:t.emitenteModal,"onUpdate:modelValue":i[9]||(i[9]=s=>t.emitenteModal=s),filtro:{ativo:!0,empresas:!0},placeholder:"Seleciona a empresa emitente",onSelecionar:r.selecionarEmitente},null,8,["modelValue","onSelecionar"])]),_:1}),e(le,{class:"bg-light no-shadow q-pa-sm text-right",bordered:""},{default:o(()=>[c("div",Qe,[e(S,{class:"text-right"},{default:o(()=>[t.documento.status==="Cancelado"?(n(),h(I,{key:0,color:"primary",label:"Ativar",unelevated:"",onClick:r.ativar},null,8,["onClick"])):m("",!0),t.documento.status==="Ativo"?(n(),h(I,{key:1,class:"q-mx-md",color:"negative",flat:"",label:"Cancelar",onClick:r.cancelar},null,8,["onClick"])):m("",!0)]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onShow","onHide"])}var He=O(de,[["render",Be]]);const Re={components:{lista:ie,Badge:K,ContratoModal:He},data(){return{paginacao:{atual:1,minimo:1,maximo:1,total:1,limite:25},filtros:{status:"Ativo",empresa:{selecionada:"",opcoes:[]},periodoEmissao:{ini:"",fim:""},periodoFinalizado:{ini:"",fim:""}},documentos:[],tabs:[{rotulo:"Ativos",value:"Ativos"},{rotulo:"Cancelados",value:"Cancelados"},{rotulo:"Todos",value:"Todos"}],tabSelecionada:{valor:"Ativos"},checkboxModel:!1,showAllPreviewDetail:!1,listaItensLayout:{},showFilters:!1,filtrosDrawer:{ativo:null,descricaoAplicacao:null,codIdRef:null,codigoBarras:null,marca:null,fornecedor:null,grupo:null,subGrupo:null,estoque:null,tipo:null,codigoCompra:null},buscaCampo:"",opcoesMarca:[],opcoesGrupo:[],opcoesSubGrupo:[],opcoesTipo:["Produto"]}},methods:{async criarContrato(){await this.$refs.contratoModal.atualizar(),this.$refs.contratoModal.visibilidade.modal=!0},selecionarTodosXCheckBox(){for(let a of this.listaItens)this.listaItensLayout[a.id].remover=this.checkboxModel},async abrirItem(a){this.$router.replace({params:{id:a}}),await this.$refs.contratoModal.atualizar(a),this.$refs.contratoModal.visibilidade.modal=!0},abrirTodosPreview(){if(this.showAllPreviewDetail=!this.showAllPreviewDetail,this.showAllPreviewDetail)for(let a in this.listaItensLayout)this.listaItensLayout[a].showPreviewDetail=!0,this.listaItensLayout[a].detalhes=!0;else for(let a in this.listaItensLayout)this.listaItensLayout[a].showPreviewDetail=!1,this.listaItensLayout[a].detalhes=!1},async showDetails(a){let i=await $db.hibrido.le({table:"documentoItem",idDocumento:a.id});a.documentoItens=i,a.showAllPreviewDetail=!a.showAllPreviewDetail,a.detalhes=!a.detalhes,this.listaItensLayout[a.id].detalhes=!this.listaItensLayout[a.id].detalhes},async atualizar(){var i,v;const a=$utils.logarIni("ContratosLista");await $tryLoading(async()=>{const _=this.paginacao.limite,t=this.paginacao.atual,r=["codigoDocumento"];this.tabSelecionada.valor==="Ativos"?this.filtros.status="Ativo":this.tabSelecionada.valor==="Cancelados"&&(this.filtros.status="Cancelado"),this.filtros.idEmpresa=this.filtros.empresa.selecionada.value||"";let y={total:0,totalPages:0,data:[]};if(!this.buscaCampo){const C=$utils.eliminarVazios(this.filtros);y=await $db.contrato.leListaCompleta({where:C,limit:_,page:t,sort:r})}for(let C of y.data)$db.hibrido.isOnline()||(C.documentoItens=await $db.hibrido.lista({table:"documentoItem",where:{idDocumento:C.id}})),C.totalContrato=$utils.somar(C.documentoItens,"total"),this.listaItensLayout[C.id]={detalhes:!1,showPreviewDetail:!1,remover:!1};this.documentos=L(y.data),this.paginacao.total=y.total,this.paginacao.maximo=y.totalPages}),$utils.logarFim(a,(v=(i=this.paginacao)==null?void 0:i.total)!=null?v:1)},async gerarLoteNFSe(){await this.$q.dialog({title:"Gerar lote de NFS-e",message:"Deseja gerar as notas de servi\xE7o a partir dos contratos?",cancel:{label:"N\xE3o",push:!0,color:"tertiary",flat:!0},ok:{label:"Sim",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(async()=>{await $db.contrato.gerarNFSEapartirContrato(),$q.notifyPositive("Exporta\xE7\xE3o das notas finalizada.")}).onCancel(()=>{}).onDismiss(()=>{})}},created(){this.atualizar()},mounted(){this.$route.params.id&&this.$route.params.id.length&&this.abrirItem(this.$route.params.id)}},Ge={class:"row items-center"},Ne=["onClick"],je={key:0,class:"col-12"},Oe={key:1,class:"col-12"},Ke={class:"text-tertiary q-col-gutter-xs"},Xe={class:"col-12 col-lg"},Je={style:{"white-space":"pre-line"}},We=["onClick"],Ye={key:0,class:"col-10 col-lg"},Ze={key:1,class:"col-12 col-lg"},$e={key:2,class:"col-10 col-lg"},eo={key:3,class:"col-12 col-lg-auto q-pt-md",style:{"min-width":"115px !important"}};function oo(a,i,v,_,t,r){const y=k("campo"),C=k("badge"),g=k("row"),x=k("lista"),P=k("ContratoModal");return n(),f("div",null,[e(x,{buscaCampo:t.buscaCampo,"onUpdate:buscaCampo":i[4]||(i[4]=l=>t.buscaCampo=l),checkboxModel:t.checkboxModel,"onUpdate:checkboxModel":i[5]||(i[5]=l=>t.checkboxModel=l),filtros:t.filtros,opcoesGrupo:t.opcoesGrupo,opcoesMarca:t.opcoesMarca,opcoesSubGrupo:t.opcoesSubGrupo,opcoesTipo:t.opcoesTipo,paginacao:t.paginacao,tabSelecionada:t.tabSelecionada,tabs:t.tabs,icone:"gavel",showAdd:!1,titulo:"Contratos",onAbrirTodosPreview:r.abrirTodosPreview,onCriar_click:r.criarContrato,onFiltro_change:r.atualizar},{menuExtras:o(()=>[e(w,{clickable:"",onClick:i[0]||(i[0]=l=>r.gerarLoteNFSe())},{default:o(()=>[e(p,{avatar:""},{default:o(()=>[e(V,{name:"mdi-file-replace",size:"sm"})]),_:1}),e(p,null,{default:o(()=>[d("Gerar notas de servi\xE7o")]),_:1})]),_:1})]),filtroCampos:o(()=>[e(y,{modelValue:t.filtrosDrawer.descricaoAplicacao,"onUpdate:modelValue":i[1]||(i[1]=l=>t.filtrosDrawer.descricaoAplicacao=l),dense:"",rotulo:"Descri\xE7\xE3o/Aplica\xE7\xE3o"},null,8,["modelValue"]),e(y,{modelValue:t.filtrosDrawer.codIdRef,"onUpdate:modelValue":i[2]||(i[2]=l=>t.filtrosDrawer.codIdRef=l),dense:"",rotulo:"C\xF3digo/ID/Refer\xEAncia"},null,8,["modelValue"]),e(y,{modelValue:t.filtrosDrawer.codigoBarras,"onUpdate:modelValue":i[3]||(i[3]=l=>t.filtrosDrawer.codigoBarras=l),dense:"",rotulo:"C\xF3d. Barras"},null,8,["modelValue"])]),itemLista:o(()=>[e(E,{class:""},{default:o(()=>[(n(!0),f(z,null,T(t.documentos,l=>(n(),f(z,{key:l.id},[e(w,{class:"items-center d-flex q-pa-xs",clickable:""},{default:o(()=>[e(p,{avatar:"",center:"",class:"mw120 hideonmobile"},{default:o(()=>[c("div",Ge,[e(G,{modelValue:t.listaItensLayout[l.id].remover,"onUpdate:modelValue":s=>t.listaItensLayout[l.id].remover=s},null,8,["modelValue","onUpdate:modelValue"]),l.status==="Cancelado"?(n(),h(C,{key:0,class:"q-mr-sm hideonmobile",cor:"tertiary",escuro:""},{default:o(()=>[d(" #"+u((l.codigoDocumento||0).toString().padStart(3,"0")),1)]),_:2},1024)):(n(),h(C,{key:1,class:"q-mr-sm hideonmobile",cor:"positive",escuro:""},{default:o(()=>[d(" #"+u((l.codigoDocumento||0).toString().padStart(3,"0")),1)]),_:2},1024))])]),_:2},1024),e(p,{clickable:""},{default:o(()=>[e(g,{class:"items-center q-col-gutter-x-sm"},{default:o(()=>[e(G,{modelValue:t.listaItensLayout[l.id].remover,"onUpdate:modelValue":s=>t.listaItensLayout[l.id].remover=s,class:"q-ma-none q-pa-none hideondesktop"},null,8,["modelValue","onUpdate:modelValue"]),c("div",{class:"col",onClick:s=>r.abrirItem(l.id)},[l.descricaoContato?(n(),h(b,{key:0,class:"text-tertiary text-weight-bold"},{default:o(()=>[d(u(l.descricaoContato),1)]),_:2},1024)):m("",!0),e(g,{class:"hideondesktop items-center q-my-sm"},{default:o(()=>[l.dataHoraEmissao?(n(),f("div",je,[e(g,null,{default:o(()=>[e(V,{class:"text-tertiary",name:"today"}),e(b,null,{default:o(()=>[d(u(a.$filters.data(l.dataHoraEmissao)),1)]),_:2},1024),e(q,null,{default:o(()=>[d("Data Emiss\xE3o")]),_:1})]),_:2},1024)])):m("",!0),l.dataHoraFinalizado?(n(),f("div",Oe,[e(g,null,{default:o(()=>[e(V,{class:"text-tertiary",name:"today"}),e(b,null,{default:o(()=>[d(u(a.$filters.data(l.dataHoraFinalizado)),1)]),_:2},1024),e(q,null,{default:o(()=>[d("Data Finaliza\xE7\xE3o")]),_:1})]),_:2},1024)])):m("",!0)]),_:2},1024)],8,Ne)]),_:2},1024)]),_:2},1024),e(p,{class:"hideonmobile",onClick:s=>r.abrirItem(l.id)},{default:o(()=>[l.dataHoraEmissao?(n(),h(g,{key:0},{default:o(()=>[e(V,{class:"text-tertiary",name:"today"}),e(b,null,{default:o(()=>[d(u(a.$filters.data(l.dataHoraEmissao)),1)]),_:2},1024),e(q,null,{default:o(()=>[d("Data Emiss\xE3o")]),_:1})]),_:2},1024)):m("",!0)]),_:2},1032,["onClick"]),e(p,{class:"hideonmobile",onClick:s=>r.abrirItem(l.id)},{default:o(()=>[l.dataHoraFinalizado?(n(),h(g,{key:0},{default:o(()=>[e(V,{class:"text-tertiary",name:"today"}),e(b,null,{default:o(()=>[d(u(a.$filters.data(l.dataHoraFinalizado)),1)]),_:2},1024),e(q,null,{default:o(()=>[d("Data Finaliza\xE7\xE3o")]),_:1})]),_:2},1024)):m("",!0)]),_:2},1032,["onClick"]),e(p,{onClick:s=>r.abrirItem(l.id)},{default:o(()=>[e(b,{caption:"",class:"text-right text-tertiary"},{default:o(()=>[d(u(a.$filters.numero(l.totalContrato,2))+" ",1),e(q,null,{default:o(()=>[d("Valor do Contrato")]),_:1})]),_:2},1024)]),_:2},1032,["onClick"]),e(p,{side:"",top:""},{default:o(()=>[c("div",Ke,[e(I,{icon:t.listaItensLayout[l.id].detalhes?"keyboard_arrow_up":"keyboard_arrow_down",class:"buttons",color:"tertiary",dense:"",flat:"",round:"",size:"md",onClick:s=>r.showDetails(l)},null,8,["icon","onClick"]),e(I,{class:"buttons",color:"primary",dense:"",flat:"",icon:"edit",round:"",size:"md",onClick:s=>r.abrirItem(l.id)},null,8,["onClick"]),e(I,{dense:"",flat:"",icon:"more_vert",round:"",size:"md"},{default:o(()=>[e(W,null,{default:o(()=>[X((n(),h(E,{class:"q-py-none",link:"","no-border":"",separator:""},{default:o(()=>[l.status==="Ativo"?(n(),f(z,{key:0},[e(w,{onClick:s=>a.removerItem(l)},{default:o(()=>[e(p,{avatar:""},{default:o(()=>[e(V,{name:"delete"})]),_:1}),e(p,null,{default:o(()=>[d(" Remover")]),_:1})]),_:2},1032,["onClick"]),e(w,{onClick:s=>a.restaurarItem(l)},{default:o(()=>[e(p,{avatar:""},{default:o(()=>[e(V,{name:"restore_from_trash"})]),_:1}),e(p,null,{default:o(()=>[d("Restaurar")]),_:1})]),_:2},1032,["onClick"])],64)):m("",!0),e(w,{onClick:s=>a.duplicarItem(l.id)},{default:o(()=>[e(p,{avatar:""},{default:o(()=>[e(V,{name:"control_point_duplicate"})]),_:1}),e(p,null,{default:o(()=>[d("Duplicar Produto/Servi\xE7o")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)),[[J]])]),_:2},1024)]),_:2},1024)])]),_:2},1024)]),_:2},1024),t.listaItensLayout[l.id].detalhes?(n(),h(w,{key:0,class:"collumnOnMobile q-px-md q-py-xs",onClick:s=>r.abrirItem(l.id)},{default:o(()=>[l.grupo?(n(),h(p,{key:0,class:"row full-width"},{default:o(()=>[e(b,{caption:""},{default:o(()=>[d(u(l.grupo),1)]),_:2},1024),e(b,null,{default:o(()=>[d(u(l.subGrupo),1)]),_:2},1024)]),_:2},1024)):m("",!0),e(p,{avatar:""},{default:o(()=>[e(C,{class:"q-mr-sm",cor:"primary",escuro:""},{default:o(()=>[d(u(l.tipo),1)]),_:2},1024)]),_:2},1024),e(p,null,{default:o(()=>[l.quantidadeDisponivel?(n(),h(b,{key:0,stamp:""},{default:o(()=>[d(" Estoque "),c("strong",null,u(l.quantidadeDisponivel),1),e(C,{class:"q-ml-sm",cor:"tertiary",escuro:""},{default:o(()=>[d(u(l.unidade),1)]),_:2},1024)]),_:2},1024)):m("",!0)]),_:2},1024),e(p,null,{default:o(()=>[t.listaItensLayout[l.id].fornecedor?(n(),h(b,{key:0,stamp:""},{default:o(()=>[e(V,{class:"q-mr-xs",name:"business"}),d(" Fornecedor: "),(n(!0),f(z,null,T(t.listaItensLayout[l.id].fornecedor,s=>(n(),f("div",{key:s.idContato},u(s.contato.nome),1))),128))]),_:2},1024)):m("",!0)]),_:2},1024),c("div",Xe,[l.codigoBarras?(n(),h(p,{key:0,stamp:""},{default:o(()=>[e(V,{class:"q-mr-xs",name:"mdi-barcode"}),d(" "+u(l.codigoBarras),1)]),_:2},1024)):m("",!0),l.address?(n(),h(p,{key:1,stamp:""},{default:o(()=>[c("span",Je,u(l.address),1)]),_:2},1024)):m("",!0)])]),_:2},1032,["onClick"])):m("",!0),t.listaItensLayout[l.id].detalhes?(n(),f("div",{key:1,class:"row q-col-gutter-x-md q-pa-md pointer",onClick:s=>r.abrirItem(l.id)},[e(N,{class:"col-2 col-lg-auto"},{default:o(()=>[e(j,{modelValue:t.listaItensLayout[l.id].utilizaComposicaoValorReposicaoInvertido,"onUpdate:modelValue":s=>t.listaItensLayout[l.id].utilizaComposicaoValorReposicaoInvertido=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a.permissaoFicha?(n(),f("div",Ye,[e(y,Q({modelValue:l.valorCustoReposicao,"onUpdate:modelValue":s=>l.valorCustoReposicao=s,ajuda:t.listaItensLayout[l.id].utilizaComposicaoValorReposicaoInvertido?"":"Total da composi\xE7\xE3o",disable:!t.listaItensLayout[l.id].utilizaComposicaoValorReposicaoInvertido,readonly:!t.listaItensLayout[l.id].utilizaComposicaoValorReposicaoInvertido,class:"no-shadow full-width"},a.meta.valorCustoReposicao),null,16,["modelValue","onUpdate:modelValue","ajuda","disable","readonly"])])):m("",!0),a.permissaoFicha?(n(),f("div",Ze,[e(y,Q({modelValue:t.listaItensLayout[l.id].percentualMarkup,"onUpdate:modelValue":s=>t.listaItensLayout[l.id].percentualMarkup=s,disable:t.listaItensLayout[l.id].utilizaMarkupInvertido,readonly:t.listaItensLayout[l.id].utilizaMarkupInvertido,class:"no-shadow full-width",decimals:"2",rotulo:"Lucro",tipo:"decimal"},a.meta.percentualMarkup),null,16,["modelValue","onUpdate:modelValue","disable","readonly"])])):m("",!0),e(N,{class:"col-2 col-lg-auto"},{default:o(()=>[e(j,{modelValue:t.listaItensLayout[l.id].utilizaMarkupInvertido,"onUpdate:modelValue":s=>t.listaItensLayout[l.id].utilizaMarkupInvertido=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a.permissaoFicha?(n(),f("div",$e,[e(y,Q({modelValue:l.valorVenda,"onUpdate:modelValue":s=>l.valorVenda=s,disable:!t.listaItensLayout[l.id].utilizaMarkupInvertido,readonly:!t.listaItensLayout[l.id].utilizaMarkupInvertido,class:"no-shadow full-width"},a.meta.valorVenda),null,16,["modelValue","onUpdate:modelValue","disable","readonly"])])):m("",!0),a.permissaoFicha?(n(),f("div",eo,[e(I,{class:"full-width no-shadow",color:"primary",label:"Salvar",size:"sm",onClick:s=>a.salvarItem(l)},null,8,["onClick"])])):m("",!0)],8,We)):m("",!0),e(B)],64))),128))]),_:1})]),_:1},8,["buscaCampo","checkboxModel","filtros","opcoesGrupo","opcoesMarca","opcoesSubGrupo","opcoesTipo","paginacao","tabSelecionada","tabs","onAbrirTodosPreview","onCriar_click","onFiltro_change"]),e(P,{ref:"contratoModal",onAtualizar:r.atualizar},null,8,["onAtualizar"])])}var mo=O(Re,[["render",oo],["__scopeId","data-v-9edc8e46"]]);export{mo as default};
