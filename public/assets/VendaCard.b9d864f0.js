import{_ as P,M as T,bZ as Q,p as I,o as n,i as m,w as a,f as e,x as v,B as G,E as B,ah as y,e as i,t as u,bc as D,C,b5 as R,j as _,l as h,k as V,am as F,ai as z,d as k,F as g,r as x,aj as b,ak as l,D as q,aF as N,L as w,s as j}from"./index.0c60fad9.js";import{D as K}from"./DocumentosFiscais.e82ebde2.js";import{M as U}from"./ModalHistoricoStatus.1a212e1f.js";import{e as L}from"./emitirNFe.3ad8673b.js";const J={components:{Avatar:T,DocumentosFiscais:K,VendaModal:Q,ModalHistoricoStatus:U},computed:{config(){return $db.configuracoes.valores},podeMigrarFatura(){return!~["Aguardando Estoque","Aguardando Financeiro","Aguardando Aprova\xE7\xE3o","Aguardando Pagamento","Cancelado","N\xE3o Aprovado","Or\xE7amento","Faturado"].indexOf(this.dados.venda.status)}},data(){return{dbUsuario:$db.usuario,dados:{venda:{}},contatos:{},faturasAbertas:[],detalhesVisivel:!1,visibilidade:{botao:{editar:!1,remover:!1}},modalDevolucaoGarantia:{visivel:!1,item:{},orcamento:{}},sistemaPai:"",configImpressaoOrcamento:[],configImpressaoEnvelope:[],documentoItemKit:{}}},emits:["executar"],methods:{async duplicarVenda(){try{await new Promise((o,s)=>{this.$q.dialog({message:"Duplicar este pedido?",cancel:{label:"N\xE3o",push:!0,color:"tertiary",flat:!0},ok:{label:"Sim",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(()=>{o()}).onCancel(()=>{s()})})}catch{return}try{const o=await $db.venda.duplicarVenda(this.id);this.$refs.vendaModal.mostrar({id:o}),this.$q.notify({type:"positive",message:"Pedido duplicado"})}catch(o){let s="N\xE3o foi poss\xEDvel realizar a opera\xE7\xE3o";/^GError:.+/.test(o.message)&&(s=o.message.slice(7)),this.$q.notify({type:"negative",message:s}),console.error(o)}},irParaAtendimentoFatura(o){this.$router.push({name:"AtendimentoFatura",params:{id:o}})},async migrarFatura(o){try{await new Promise((s,c)=>{this.$q.dialog({message:"Esta a\xE7\xE3o ir\xE1 migrar esta venda para outra fatura.",noRefocus:!0,preventClose:!0,title:"Tem certeza?",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Continuar",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(()=>{s()}).onCancel(()=>{c()})})}catch{return}o||(o=$db.fatura.criar(this.dados.venda),await $db.fatura.grava({fatura:o})),o.id?(await $db.venda.grava({venda:{id:this.dados.venda.id,idFatura:o.id},vendaOriginal:this.dados.venda}),localStorage.setItem("idFatura",o.id),this.dados.venda.idContato&&(this.$emit("executar","atualizar"),this.irParaAtendimentoFatura(this.dados.venda.idContato))):this.$q.notify("N\xE3o foi poss\xEDvel realizar a opera\xE7\xE3o")},alternarDetalhes(){this.detalhesVisivel=!this.detalhesVisivel},async atualizar(){const o=await $db.venda.leCompleto(this.id);o.carrinho.sort((c,r)=>new Date(c.dataHoraEmissao)<new Date(r.dataHoraEmissao)?-1:1),o.oss.sort((c,r)=>new Date(c.documento.dataHoraEmissao)<new Date(r.documento.dataHoraEmissao)?-1:1),o.customs.sort((c,r)=>new Date(c.documento.dataHoraEmissao)<new Date(r.documento.dataHoraEmissao)?-1:1),o.kits.sort((c,r)=>new Date(c.documento.dataHoraEmissao)<new Date(r.documento.dataHoraEmissao)?-1:1);for(const c of o.kits){const r=c.documentosItem.find(t=>t.operacaoFator===-1&&t.operacao!=="Manipula\xE7\xE3o");this.documentoItemKit[c.documento.id]=r}if((o.venda||{}).idContato&&(o.venda||{}).idEmpresa){let c=[];c=await $db.fatura.obterAbertas(o.venda.idContato,o.venda.idEmpresa),this.faturasAbertas=c.sort((r,t)=>!r.numero||r.numero<t.numero?-1:1)}const s={};if(o.venda.idContato){const c=o.venda.idContato;s[c]||(s[c]=await $db.contato.le({id:c}))}if(o.venda.idContatoVendedor){const c=o.venda.idContatoVendedor;s[c]||(s[c]=await $db.contato.le({id:c}))}this.configuraImpressaoEnvelope(o.venda.idEmpresa),this.configuraImpressaoOrcamento(o.venda.idEmpresa),this.contatos=s,this.dados=o,await this.$nextTick(),o.venda.id===localStorage.getItem("idVenda")&&(this.$refs.vendaModal.mostrar({id:o.venda.id}),localStorage.removeItem("idVenda"))},async atualizarComDados(){var s,c,r;const o=await $db.venda.preparaDados(this.dadosVenda);o.carrinho.sort((t,f)=>new Date(t.dataHoraEmissao)<new Date(f.dataHoraEmissao)?-1:1),o.oss.sort((t,f)=>new Date(t.documento.dataHoraEmissao)<new Date(f.documento.dataHoraEmissao)?-1:1),o.customs.sort((t,f)=>new Date(t.documento.dataHoraEmissao)<new Date(f.documento.dataHoraEmissao)?-1:1),o.kits.sort((t,f)=>new Date(t.documento.dataHoraEmissao)<new Date(f.documento.dataHoraEmissao)?-1:1);for(const t of o.kits){const f=t.documentosItem.find(H=>H.operacaoFator===-1&&H.operacao!=="Manipula\xE7\xE3o");this.documentoItemKit[t.documento.id]=f}this.faturasAbertas=((c=(s=this.vendasCompletas)==null?void 0:s.faturasAbertas)==null?void 0:c.filter(t=>t.idEmpresa===o.venda.idEmpresa))||[],this.configuraImpressaoEnvelope(o.venda.idEmpresa),this.configuraImpressaoOrcamento(o.venda.idEmpresa),this.contatos=((r=this.vendasCompletas)==null?void 0:r.dadosContatos)||{},this.dados=o,await this.$nextTick(),o.venda.id===localStorage.getItem("idVenda")&&(this.$refs.vendaModal.mostrar({id:o.venda.id}),localStorage.removeItem("idVenda"))},async configuraImpressaoEnvelope(o){const s=await $db.configuracoes.porNome("impressao.envelope",o);this.configImpressaoEnvelope=[...s.length?s.map(c=>({texto:"Imprimir Envelope",...c})):[{valor:"envelope",texto:"Imprimir Envelope"},{valor:"envelopeMini",texto:"Imprimir Envelope Mini"}]]},async configuraImpressaoOrcamento(o){const s=await $db.configuracoes.porNome("impressao.venda",o);this.configImpressaoOrcamento=[...s.length?s.map(c=>({texto:"Imprimir Or\xE7amento",...c})):[{valor:"invoice",texto:"Or\xE7amento/Venda (Invoice)"},this.sistemaPai==="optisoul"?{valor:"orcamento",texto:"Or\xE7amento (Antigo)"}:{},this.sistemaPai==="optisoul"?{valor:"termoGarantia",texto:"Termo de Garantia"}:{}]]},copiarUid(){const o=this.$refs.uid;o.type="text";try{o.select(),document.execCommand("copy"),this.$q.notify({message:"UID copiado para a \xE1rea de transfer\xEAncia.",type:"info"})}catch{this.$q.notify("Erro ao copiar.")}o.type="hidden",window.getSelection().removeAllRanges()},descricaoEnvelope(o){if(o.itens)return o.itens.map(c=>c.descricaoItem).filter(Boolean).join(" | ");let s="";for(const c of this.dados.itensEnvelopes)c.idDocumentoAdicional===o.id&&c.descricaoItem.trim()&&(s+=c.descricaoItem.trim()+" | ");return s.slice(0,-3)},async devolucaoGarantia(o){let s=await $db.hibrido.lista({table:"documento",where:{idContato:$db.contato.selecionado.id,tipo:"Venda",status:"Or\xE7amento"}});if(s=$lodash.orderBy(s,"dataHoraEmissao","desc"),!s.length){this.$q.notify({message:"Crie um or\xE7amento para inclus\xE3o de devolu\xE7\xE3o/garantia.",type:"info"});return}this.modalDevolucaoGarantia={visivel:!0,item:o,orcamento:s[0]}},editar(){this.$refs.vendaModal.mostrar({id:this.dados.venda.id})},executar(o){switch(o){case"atualizar":this.atualizar();break;case"cancelar":case"finalizar":case"reprovar":this.$emit("executar","atualizar");break;case"retornarOrcamento":this.$emit("executar",o);break}},async finalizaDevolucaoGarantia(o,s,c){const r=$utils.clonar(o);s==="devolucao"&&(r.operacao="Devolu\xE7\xE3o de Venda"),s==="garantia"&&(r.operacao="Garantia de Venda",r.motivo=c),r.idDocumentoItemVenda=r.id,r.idDocumentoVenda=r.idDocumento,r.id=$utils.uuid(),r.idDocumento=this.modalDevolucaoGarantia.orcamento.id,r.status="Or\xE7amento",r.operacaoFator=1,r.codigoCfop=20,r.idCfop=(await $db.cfop.le({codigoCfop:20}))[0].id,r.dataHoraEmissao=$utils.dataAtual(),r.dataHoraFinalizado="",r.subTotal=r.subTotal*-1,r.total=r.total*-1,r.valorItem=r.valorItem*-1,r.descontoSubTotal=0,delete r.codigoCfop,delete r.codigoDocumento,delete r.codigoDocumentoItem,delete r.codigoItem,delete r.codigoPlanoContaDestino,delete r.codigoPlanoContaEstoque,await $db.documentoItem.grava({atual:r}),this.$q.notify({message:"Item adicionado ao or\xE7amento.",type:"positive"}),localStorage.setItem("idVenda",this.modalDevolucaoGarantia.orcamento.id),this.$emit("executar","atualizar")},async remover(){this.$q.dialog({message:"Esta a\xE7\xE3o ir\xE1 remover esta venda da fatura",title:"Tem certeza?",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Continuar",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(async()=>{try{await $db.venda.checarConflitoStatus({id:this.dados.venda.id,status:this.dados.venda.status})}catch(s){return $q.notifyError(s.message),!1}let o=$utils.clonar(this.dados.venda);this.dados.venda.idFatura="",await $db.venda.grava({venda:this.dados.venda,vendaOriginal:o}),this.$emit("executar","remover")})}},mixins:[L],props:{id:{required:!0,type:String},dadosVenda:{required:!1,type:Object},vendasCompletas:{required:!1,type:Object},resetarEnvio:{required:!1,type:Function}},watch:{async dados(o){var c;this.visibilidade.botao.editar=!1,this.visibilidade.botao.visualizar=!1,this.visibilidade.botao.remover=!1;let s=(c=this.vendasCompletas)==null?void 0:c.contatosEmpresa;if(!s){const t=(await $db.hibrido.lista({table:"empresa",columns:["idContato"],whereFilter:{ativo:!0}})).map(({idContato:f})=>f);s=await $db.hibrido.lista({table:"contato",columns:["id"],whereIn:{id:t},whereFilter:{ativo:!0}})}!s.find(r=>r.id===o.venda.idEmpresa)||(o.venda.idFatura&&this.faturasAbertas.find(r=>r.id===o.venda.idFatura)&&(this.visibilidade.botao.remover=await $db.permissao.objeto("Diretiva_Vendas_RemoverVendaFatura")),!~["Cancelado","N\xE3o Aprovado"].indexOf(o.venda.status)&&!o.venda.idFatura&&(this.visibilidade.botao.editar=!0),this.visibilidade.botao.editar||(this.visibilidade.botao.visualizar=!0))}},mounted(){this.sistemaPai=$utils.sistemaPai(),this.dadosVenda&&this.vendasCompletas?this.atualizarComDados():this.atualizar()}},Z={class:"col-12 col-md-6 q-pl-none"},W={class:"q-item-section"},X={class:"col-6 col-md hideonmobile"},Y={class:"text-left q-my-none"},$={class:"col-4 col-md hideonmobile"},ee={class:"text-left q-my-none"},ae={class:"col-4 col-md hideonmobile"},te={class:"text-left q-my-none"},oe={class:"col-6 col-md hideonmobile"},se={class:"text-right text-h5 text-positive text-weight-bold q-my-none"},de={class:"text-right text-weight-normal text-tertiary text-body2 q-my-none"},ie={class:"col-12 hideondesktop"},ne={class:"text-left q-my-none"},le={class:"col-12 col-md-6"},re={class:"col-12 col-md-6 full-height items-end hideonmobile"},ue={class:"col-6"},ce={class:"text-left q-my-none"},me={class:"text-left q-my-none"},ve={class:"col-6"},fe={class:"text-right text-weight-normal text-tertiary text-body2 q-my-none"},pe={class:"text-right text-h5 text-positive text-weight-bold q-my-none"},he={class:"col-12 full-height items-end"},_e={class:"col-12 col-md-6"},be={class:"text-subtitle1 text-weight-bold q-ma-none items-center"},ye={class:"q-ma-none"},ke={key:0},ge={key:1},Ce={class:"col-6 col-md-4"},we=v("p",{class:"text-subtitle1 text-weight-bold q-ma-none"}," Faturamento ",-1),xe={class:"q-ma-none"},qe={class:"col-6 col-md-2 text-right"},Ee=v("p",{class:"text-subtitle1 text-weight-bold q-ma-none"}," Desconto ",-1),Ve={class:"q-ma-none"};function De(o,s,c,r,t,f){const H=I("avatar"),O=I("row"),S=I("documentos-fiscais"),A=I("VendaModal"),M=I("modal-historico-status");return t.dados.venda.id?(n(),m(j,{key:0,id:"VendaCard",class:"extratoItem bg-white q-pa-sm no-shadow"},{default:a(()=>[e(O,{class:"items-center justify-between q-mx-none q-px-none q-mb-sm"},{default:a(()=>{var p;return[v("div",Z,[e(G,{class:"q-pa-none"},{default:a(()=>{var d;return[e(H,{imagem:(d=t.contatos[t.dados.venda.idContato])==null?void 0:d.imagem,rotulo:t.dados.venda.descricaoContato,tamanho:"40",style:{float:"left"}},null,8,["imagem","rotulo"]),e(B,null,{default:a(()=>[v("div",W,[e(y,null,{default:a(()=>{var E;return[i(u((E=t.contatos[t.dados.venda.idContato])==null?void 0:E.apelido),1)]}),_:1}),e(y,{caption:""},{default:a(()=>{var E;return[i(u((E=t.contatos[t.dados.venda.idContato])==null?void 0:E.nome),1)]}),_:1})])]),_:1}),e(D,{rounded:"",color:"tertiary",small:""},{default:a(()=>[i(u(t.dados.venda.status),1)]),_:1}),e(D,{class:"q-ml-sm",color:"positive",escuro:"",onClick:f.copiarUid},{default:a(()=>[i(" #"+u(parseInt(t.dados.venda.numero)||(t.dados.venda.id||"").slice(-6))+" ",1),C(v("input",{type:"hidden","onUpdate:modelValue":s[0]||(s[0]=E=>t.dados.venda.id=E),ref:"uid"},null,512),[[R,t.dados.venda.id]])]),_:1},8,["onClick"])]}),_:1})]),v("div",X,[v("p",Y,[t.contatos[t.dados.venda.idContatoVendedor]?(n(),m(_,{key:0,name:"mdi-account-tie"})):h("",!0),i(" "+u((p=t.contatos[t.dados.venda.idContatoVendedor])==null?void 0:p.apelido)+" ",1),e(V,null,{default:a(()=>[i(" Vendedor(a) ")]),_:1})])]),v("div",$,[v("p",ee,[t.dados.venda.dataHoraEmissao?(n(),m(_,{key:0,name:"mdi-calendar-today "})):h("",!0),i(" "+u(o.$filters.data(t.dados.venda.dataHoraEmissao))+" ",1),e(V,null,{default:a(()=>[i(" Emiss\xE3o ")]),_:1})])]),v("div",ae,[v("p",te,[t.dados.venda.dataHoraFinalizado?(n(),m(_,{key:0,name:"mdi-calendar-check"})):h("",!0),i(" "+u(o.$filters.data(t.dados.venda.dataHoraFinalizado))+" ",1),t.dados.venda.dataHoraFinalizado?(n(),m(V,{key:1},{default:a(()=>[i(" Finalizado ")]),_:1})):h("",!0)])]),v("div",oe,[v("p",se,u(o.$filters.numero(t.dados.venda.totalDocumento,2)),1),v("p",de,u(o.$filters.numero(t.dados.venda.subTotal,2)),1)])]}),_:1}),e(F,{class:"hideondesktop q-mb-sm"}),e(O,{class:"q-mx-none q-px-none items-center"},{default:a(()=>{var p;return[v("div",ie,[v("p",ne,[t.contatos[t.dados.venda.idContatoVendedor]?(n(),m(_,{key:0,name:"mdi-account-tie"})):h("",!0),i(" "+u((p=t.contatos[t.dados.venda.idContatoVendedor])==null?void 0:p.apelido)+" ",1),e(V,null,{default:a(()=>[i(" Vendedor(a) ")]),_:1})])]),v("div",le,[e(z,{class:"no-border text-tertiary"},{default:a(()=>[(n(!0),k(g,null,x(t.dados.carrinho,d=>(n(),m(b,{key:d.id,class:"q-pa-none q-mb-xs",style:{"min-height":"auto"}},{default:a(()=>[e(l,{avatar:"",class:"mw80"},{default:a(()=>[e(y,null,{default:a(()=>[i(u(d.quantidade)+"x",1)]),_:2},1024)]),_:2},1024),e(l,null,{default:a(()=>[e(y,null,{default:a(()=>[i(u(d.descricaoItem),1)]),_:2},1024)]),_:2},1024),e(l,{side:"",top:""},{default:a(()=>[e(y,null,{default:a(()=>[i(u(o.$filters.numero(d.total,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(n(!0),k(g,null,x(t.dados.customs,d=>(n(),m(b,{key:d.documento.id,class:"q-pa-none q-mb-xs",style:{"min-height":"auto"}},{default:a(()=>[e(l,{avatar:"",class:"mw80"},{default:a(()=>[e(y,null,{default:a(()=>[i(u(d.documento.numero)+"x ",1)]),_:2},1024)]),_:2},1024),e(l,null,{default:a(()=>[e(y,null,{default:a(()=>[i(u(d.documento.descricao),1)]),_:2},1024)]),_:2},1024),e(l,{side:"",top:""},{default:a(()=>[e(y,null,{default:a(()=>[i(u(o.$filters.numero(d.documento.totalDocumento,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(n(!0),k(g,null,x(t.dados.oss,d=>(n(),m(b,{key:d.documento.id,class:"q-pa-none q-mb-xs",style:{"min-height":"auto"}},{default:a(()=>[e(l,{avatar:"",class:"mw80"},{default:a(()=>[e(y,null,{default:a(()=>[i(" OS "),e(D,{color:"tertiary",small:""},{default:a(()=>[i("#"+u(d.documento.numero),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(l,null,{default:a(()=>[e(y,null,{default:a(()=>[i(u(d.documento.descricao),1)]),_:2},1024)]),_:2},1024),e(l,{avatar:"",class:"mw50"},{default:a(()=>[d.documento.status!=="Or\xE7amento"?(n(),m(D,{key:0,rounded:"",color:"tertiary",small:""},{default:a(()=>[i(u(d.documento.status),1)]),_:2},1024)):h("",!0)]),_:2},1024),e(l,{right:"",top:""},{default:a(()=>[e(y,null,{default:a(()=>[i(u(o.$filters.numero(d.documento.totalDocumento,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(n(!0),k(g,null,x(t.dados.kits,d=>(n(),m(b,{key:d.documento.id,class:"q-pa-none q-mb-xs",style:{"min-height":"auto"}},{default:a(()=>[e(l,{avatar:"",class:"mw80"},{default:a(()=>[e(y,null,{default:a(()=>[i(u(o.$filters.numero(t.documentoItemKit[d.documento.id].quantidade,4))+"x",1)]),_:2},1024)]),_:2},1024),e(l,null,{default:a(()=>[e(y,null,{default:a(()=>[i(u(t.documentoItemKit[d.documento.id].descricaoItem),1)]),_:2},1024)]),_:2},1024),e(l,{side:"",top:""},{default:a(()=>[e(y,null,{default:a(()=>[i(u(o.$filters.numero(t.documentoItemKit[d.documento.id].total,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(n(!0),k(g,null,x(t.dados.envelopes,d=>(n(),m(b,{key:d.id,class:"q-pa-none q-mb-xs",style:{"min-height":"auto"}},{default:a(()=>[e(l,{avatar:"",class:"mw80"},{default:a(()=>[e(y,null,{default:a(()=>[i(" EN "),e(D,{color:"tertiary",small:""},{default:a(()=>[i(" #"+u(parseInt(d.numero)||(d.id||"").slice(-6))+" ",1),e(V,null,{default:a(()=>[i(u(d.tipo)+" - "+u(d.descricaoContato),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(l,null,{default:a(()=>[e(y,null,{default:a(()=>[i(u(f.descricaoEnvelope(d)),1)]),_:2},1024)]),_:2},1024),e(l,{avatar:""},{default:a(()=>[d.status!=="Or\xE7amento"?(n(),m(D,{key:0,rounded:"",color:"tertiary",small:""},{default:a(()=>[i(u(d.status),1)]),_:2},1024)):h("",!0)]),_:2},1024),e(l,{right:"",top:""},{default:a(()=>[e(y,null,{default:a(()=>[i(u(o.$filters.numero(d.totalDocumento,2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),v("div",re,[e(F,{class:"hideondesktop q-mb-sm q-mt-xs"}),e(q,{rounded:"",dense:"",flat:"",icon:"more_vert",color:"tertiary",class:"no-shadow q-mx-xs",size:"md",style:{float:"right"}},{default:a(()=>[e(N,null,{default:a(()=>[C((n(),m(z,{link:"",separator:""},{default:a(()=>[o.$utils.mapearStatus(t.dados.venda).permiteNota?(n(),k(g,{key:0},[C((n(),m(b,{clickable:"",onClick:s[1]||(s[1]=d=>o.emitirNFeV2({idVenda:t.dados.venda.id},1,"Venda"))},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"account_balance"})]),_:1}),e(l,null,{default:a(()=>[i("NFe de Sa\xEDda/Venda")]),_:1})]),_:1})),[[w]]),C((n(),m(b,{clickable:"",onClick:s[2]||(s[2]=d=>o.emitirNFeV2({idVenda:t.dados.venda.id},0,"Devolu\xE7\xE3o"))},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"account_balance"})]),_:1}),e(l,null,{default:a(()=>[i("NFe de Entrada/Devolu\xE7\xE3o")]),_:1})]),_:1})),[[w]]),C((n(),m(b,{clickable:"",onClick:s[3]||(s[3]=d=>o.emitirNFeV2({idVenda:t.dados.venda.id},1,"Remessa"))},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"account_balance"})]),_:1}),e(l,null,{default:a(()=>[i("NFe de Remessa")]),_:1})]),_:1})),[[w]])],64)):h("",!0),f.podeMigrarFatura?(n(),k(g,{key:1},[(n(!0),k(g,null,x(t.faturasAbertas.filter(d=>d.id!==t.dados.venda.idFatura),d=>C((n(),m(b,{clickable:"",key:d.id,onClick:E=>f.migrarFatura(d)},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"mdi-folder-move"})]),_:1}),e(l,null,{default:a(()=>[i(u("Migrar para fatura #"+(d.numero||d.id.slice(-6))),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[w]])),128)),C((n(),m(b,{clickable:"",onClick:s[4]||(s[4]=d=>f.migrarFatura())},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"mdi-folder-move"})]),_:1}),e(l,null,{default:a(()=>[i("Migrar para nova fatura")]),_:1})]),_:1})),[[w]])],64)):h("",!0),e(b,{clickable:"",onClick:s[5]||(s[5]=d=>o.$refs.modalHistoricoStatus.mostrar({idDocumento:t.dados.venda.id}))},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"history"})]),_:1}),e(l,null,{default:a(()=>[i("Hist\xF3rico do Status")]),_:1})]),_:1}),e(b,{clickable:"",onClick:f.duplicarVenda},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"mdi-content-duplicate"})]),_:1}),e(l,null,{default:a(()=>[i("Duplicar Pedido")]),_:1})]),_:1},8,["onClick"]),c.resetarEnvio&&t.dados.venda.rotaJson&&t.dados.venda.rotaJson.length>0?(n(),m(b,{key:2,clickable:"",onClick:s[6]||(s[6]=d=>c.resetarEnvio(t.dados.venda))},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"restart_alt"})]),_:1}),e(l,null,{default:a(()=>[i("Resetar Envio")]),_:1})]),_:1})):h("",!0)]),_:1})),[[w]])]),_:1})]),_:1}),t.visibilidade.botao.remover?(n(),m(q,{key:0,rounded:"",dense:"",flat:"",icon:"clear",color:"tertiary",class:"no-shadow q-mx-xs",size:"md",onClick:f.remover,style:{float:"right"}},null,8,["onClick"])):h("",!0),t.visibilidade.botao.editar?(n(),m(q,{key:1,rounded:"",dense:"",flat:"",icon:"edit",color:"primary",class:"no-shadow q-mx-xs",size:"md",onClick:f.editar,style:{float:"right"}},null,8,["onClick"])):h("",!0),t.visibilidade.botao.visualizar?(n(),m(q,{key:2,rounded:"",dense:"",flat:"",icon:"remove_red_eye",color:"primary",class:"no-shadow q-mx-xs",size:"md",onClick:f.editar,style:{float:"right"}},null,8,["onClick"])):h("",!0),e(q,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",class:"no-shadow q-mx-xs",size:"md",style:{float:"right"}},{default:a(()=>[e(N,null,{default:a(()=>[e(z,{link:"",separator:""},{default:a(()=>[(n(!0),k(g,null,x(t.configImpressaoOrcamento.filter(d=>d.valor),d=>(n(),m(b,{clickable:"",key:d.valor,onClick:E=>o.$imprimir(d.valor,{id:(t.dados.venda||{}).id||"0",Oculto:"0"})},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"print"})]),_:1}),e(l,null,{default:a(()=>[e(y,null,{default:a(()=>[i(u(d.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),t.sistemaPai==="optisoul"?(n(!0),k(g,{key:0},x(t.configImpressaoEnvelope,d=>(n(),m(b,{clickable:"",key:d.valor,onClick:E=>o.$imprimir(d.valor,(t.dados.venda||{}).id||"0")},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"print"})]),_:1}),e(l,null,{default:a(()=>[e(y,null,{default:a(()=>[i(u(d.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)):h("",!0)]),_:1})]),_:1})]),_:1}),e(q,{rounded:"",dense:"",flat:"",icon:t.detalhesVisivel?"keyboard_arrow_up":"keyboard_arrow_down",size:"md",class:"no-shadow q-mx-xs",color:"tertiary",style:{float:"right"},onClick:f.alternarDetalhes},null,8,["icon","onClick"])])]}),_:1}),e(F,{class:"hideondesktop q-mb-sm q-mt-xs"}),e(O,{class:"q-mx-none q-px-none hideondesktop"},{default:a(()=>[v("div",ue,[v("p",ce,[t.dados.venda.dataHoraEmissao?(n(),m(_,{key:0,name:"mdi-calendar-today"})):h("",!0),i(" "+u(o.$filters.data(t.dados.venda.dataHoraEmissao))+" ",1),e(V,null,{default:a(()=>[i(" Emiss\xE3o ")]),_:1})]),v("p",me,[t.dados.venda.dataHoraFinalizado?(n(),m(_,{key:0,name:"mdi-calendar-check"})):h("",!0),i(" "+u(o.$filters.data(t.dados.venda.dataHoraFinalizado))+" ",1),t.dados.venda.dataHoraFinalizado?(n(),m(V,{key:1},{default:a(()=>[i(" Finalizado ")]),_:1})):h("",!0)])]),v("div",ve,[v("p",fe,u(o.$filters.numero(t.dados.venda.subTotal,2)),1),v("p",pe,u(o.$filters.numero(t.dados.venda.totalDocumento,2)),1)]),v("div",he,[e(F,{class:"hideondesktop q-mb-sm q-mt-xs"}),e(q,{rounded:"",dense:"",flat:"",icon:"more_vert",color:"tertiary",class:"no-shadow q-mx-xs",size:"md",style:{float:"right"}},{default:a(()=>[e(N,null,{default:a(()=>[C((n(),m(z,{link:"",separator:""},{default:a(()=>[o.$utils.mapearStatus(t.dados.venda).permiteNota?(n(),k(g,{key:0},[C((n(),m(b,{clickable:"",onClick:s[7]||(s[7]=p=>o.emitirNFeV2({idVenda:t.dados.venda.id},1,"Venda"))},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"account_balance"})]),_:1}),e(l,null,{default:a(()=>[i("NFe de Sa\xEDda/Venda")]),_:1})]),_:1})),[[w]]),C((n(),m(b,{clickable:"",onClick:s[8]||(s[8]=p=>o.emitirNFeV2({idVenda:t.dados.venda.id},0,"Devolu\xE7\xE3o"))},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"account_balance"})]),_:1}),e(l,null,{default:a(()=>[i("NFe de Entrada/Devolu\xE7\xE3o")]),_:1})]),_:1})),[[w]]),C((n(),m(b,{clickable:"",onClick:s[9]||(s[9]=p=>o.emitirNFeV2({idVenda:t.dados.venda.id},1,"Remessa"))},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"account_balance"})]),_:1}),e(l,null,{default:a(()=>[i("NFe de Remessa")]),_:1})]),_:1})),[[w]])],64)):h("",!0),f.podeMigrarFatura?(n(),k(g,{key:1},[(n(!0),k(g,null,x(t.faturasAbertas.filter(p=>p.id!==t.dados.venda.idFatura),p=>C((n(),m(b,{key:p.id,onClick:d=>f.migrarFatura(p)},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"mdi-folder-move"})]),_:1}),e(l,null,{default:a(()=>[i(u("Migrar para fatura #"+(p.numero||p.id.slice(-6))),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[w]])),128)),C((n(),m(b,{onClick:s[10]||(s[10]=p=>f.migrarFatura())},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"mdi-folder-move"})]),_:1}),e(l,null,{default:a(()=>[i("Migrar para nova fatura")]),_:1})]),_:1})),[[w]])],64)):h("",!0),e(b,{clickable:"",onClick:s[11]||(s[11]=p=>o.$refs.modalHistoricoStatus.mostrar({idDocumento:t.dados.venda.id}))},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"history"})]),_:1}),e(l,null,{default:a(()=>[i("Hist\xF3rico do Status")]),_:1})]),_:1})]),_:1})),[[w]])]),_:1})]),_:1}),t.visibilidade.botao.remover?(n(),m(q,{key:0,rounded:"",dense:"",flat:"",icon:"clear",color:"tertiary",class:"no-shadow q-mx-xs",size:"md",onClick:f.remover,style:{float:"right"}},null,8,["onClick"])):h("",!0),t.visibilidade.botao.editar?(n(),m(q,{key:1,rounded:"",dense:"",flat:"",icon:"edit",color:"primary",class:"no-shadow q-mx-xs",size:"md",onClick:f.editar,style:{float:"right"}},null,8,["onClick"])):h("",!0),e(q,{rounded:"",dense:"",flat:"",icon:"print",color:"primary",class:"no-shadow q-mx-xs",size:"md",style:{float:"right"}},{default:a(()=>[e(N,null,{default:a(()=>[e(z,{link:"",separator:""},{default:a(()=>[(n(!0),k(g,null,x(t.configImpressaoOrcamento.filter(p=>p.valor),p=>(n(),m(b,{clickable:"",key:p.valor,onClick:d=>o.$imprimir(p.valor,{id:(t.dados.venda||{}).id||"0",Oculto:"0"})},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"print"})]),_:1}),e(l,null,{default:a(()=>[e(y,null,{default:a(()=>[i(u(p.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),t.sistemaPai==="optisoul"?(n(!0),k(g,{key:0},x(t.configImpressaoEnvelope,p=>(n(),m(b,{clickable:"",key:p.valor,onClick:d=>o.$imprimir(p.valor,(t.dados.venda||{}).id||"0")},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[e(_,{name:"print"})]),_:1}),e(l,null,{default:a(()=>[e(y,null,{default:a(()=>[i(u(p.texto),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128)):h("",!0)]),_:1})]),_:1})]),_:1}),e(q,{rounded:"",dense:"",flat:"",icon:t.detalhesVisivel?"keyboard_arrow_up":"keyboard_arrow_down",size:"md",class:"no-shadow q-mx-xs",color:"tertiary",style:{float:"right"},onClick:f.alternarDetalhes},null,8,["icon","onClick"])])]),_:1}),t.detalhesVisivel?(n(),m(F,{key:0,class:"hideondesktop q-my-sm"})):h("",!0),t.detalhesVisivel?(n(),m(O,{key:1,class:"items-start q-mx-none q-px-none q-mt-md"},{default:a(()=>[v("div",_e,[v("p",be,[e(_,{name:"business"}),i(" "+u(t.dados.venda.descricaoEmpresa),1)]),v("p",ye,[i(u(t.dados.venda.observacao)+" ",1),t.dados.venda.observacaoInterna?(n(),k("br",ke)):h("",!0),i(" "+u(t.dados.venda.observacaoInterna)+" ",1),t.dados.venda.observacaoCancelamento?(n(),k("br",ge)):h("",!0),i(" "+u(t.dados.venda.observacaoCancelamento),1)]),e(S,{idVenda:t.dados.venda.id},null,8,["idVenda"])]),v("div",Ce,[we,v("p",xe,u(t.dados.venda.observacaoFaturamento),1)]),v("div",qe,[Ee,v("p",Ve,u(o.$filters.numero(t.dados.venda.totalDesconto,2)),1)])]),_:1})):h("",!0),e(A,{ref:"vendaModal",onExecutar:f.executar},null,8,["onExecutar"]),e(M,{ref:"modalHistoricoStatus"},null,512)]),_:1})):h("",!0)}var Oe=P(J,[["render",De]]);export{Oe as V};
