(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["4704b74f"],{2970:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-layout",{staticClass:"Item Layout"},[e("barra-topo"),e("q-page-container",[e("q-page",{staticClass:"u-container"},[e("q-toolbar",{staticClass:"q-py-sm",attrs:{color:"none"}},[t.dbItem.selecionado.descricao?e("avatar",{attrs:{imagem:t.dbItem.selecionado.imagem,rotulo:t.dbItem.selecionado.descricao,tamanho:"40"}}):t._e(),e("q-toolbar-title",[t.dbItem.selecionado.descricaoConcatenada||t.dbItem.selecionado.descricao?[t._v("\n            "+t._s(t.dbItem.selecionado.descricaoConcatenada||t.dbItem.selecionado.descricao)+"\n            "),e("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v(t._s(t._f("dinheiro")(t.dbItem.selecionado.valorVenda))+" -\n              "+t._s(t._f("numero")(t.dbItem.selecionado.quantidadeDisponivel,0))+"\n              "+t._s(t.dbItem.selecionado.unidade))])]:t._e()],2),e("q-btn",{attrs:{flat:"",dense:"",icon:"search",round:"",size:"lg"},on:{click:t.buscarItem}},[e("q-tooltip",[t._v("Buscar produto")])],1),t.permissaoFicha?e("q-btn",{attrs:{flat:"",dense:"",icon:"add",round:"",size:"lg"},on:{click:t.abrirModalCriar}},[e("q-tooltip",[t._v("Criar produto")])],1):t._e(),"optisoul"===t.sistemaPai?e("q-btn",{attrs:{icon:"help_outline",flat:"",dense:"",round:"",size:"lg"}},[e("q-popover",[e("q-list",{attrs:{link:"","no-border":"",separator:""}},[e("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}]},[e("q-item-side",{attrs:{icon:"mdi-youtube"}}),e("q-item-main",{attrs:{label:"Videoaula - Cadastro de Produtos"},nativeOn:{click:function(o){t.showHelp("produtos")}}})],1)],1)],1)],1):t._e(),t.permissaoFicha?e("q-btn",{attrs:{flat:"",dense:"",icon:"more_vert",round:"",size:"lg"}},[e("q-popover",[e("q-list",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{link:"","no-border":"",separator:""}},[e("q-item",{nativeOn:{click:function(o){return t.duplicarItem(o)}}},[e("q-item-side",{attrs:{icon:"control_point_duplicate"}}),e("q-item-main",{attrs:{label:"Duplicar Produto/Serviço"}})],1),e("q-item",{nativeOn:{click:function(o){return t.buscarItemExcluido(o)}}},[e("q-item-side",{attrs:{icon:"search"}}),e("q-item-main",{attrs:{label:"Buscar excluídos"}})],1),e("q-item",{nativeOn:{click:function(o){t.modalImportar=!0}}},[e("q-item-side",{attrs:{icon:"import_export"}}),e("q-item-main",{attrs:{label:"Importar produtos"}})],1),e("q-item",{nativeOn:{click:function(o){t.combinarItensModal=!0}}},[e("q-item-side",{attrs:{icon:"compare_arrows"}}),e("q-item-main",{attrs:{label:"Combinar produtos duplicados"}})],1),e("q-item",{nativeOn:{click:function(o){return t.copiarUid(o)}}},[e("q-item-side",{attrs:{icon:"file_copy"}}),e("q-item-main",{attrs:{label:"Copiar código do produto"}}),e("input",{ref:"uid",attrs:{type:"hidden"},domProps:{value:t.dbItem.selecionado.id}})],1)],1)],1)],1):t._e()],1),t.dbItem.selecionado.id?e("MenuAbas",{attrs:{objetoPai:"item"}},[e("router-view",{ref:"componentefilho"})],1):e("div",{staticClass:"bg-white q-pa-xl text-center"},[t._v("\n        Por favor, cadastre ou selecione um Produto ou Serviço.\n\n        "),e("div",{staticClass:"text-center q-mt-sm"},[e("q-btn",{staticClass:"q-ma-sm no-shadow",attrs:{color:"primary",icon:"add",label:"Novo produto/serviço"},on:{click:t.abrirModalCriar}}),e("q-btn",{staticClass:"q-ma-sm no-shadow",attrs:{color:"primary",icon:"search",label:"Buscar produto/serviço"},on:{click:t.buscarItem}})],1)]),e("prompt-item-novo",{attrs:{filtro:{ativo:!0}},on:{selecionarItens:t.abrirItem},model:{value:t.itensModal,callback:function(o){t.itensModal=o},expression:"itensModal"}}),e("prompt-item-novo",{attrs:{filtro:{ativo:!1}},on:{selecionarItens:t.abrirItem},model:{value:t.itensInativosModal,callback:function(o){t.itensInativosModal=o},expression:"itensInativosModal"}}),e("prompt-item-novo",{attrs:{filtro:{ativo:!0}},on:{selecionarItens:t.selecionarCombinarItens},model:{value:t.combinarItensModal,callback:function(o){t.combinarItensModal=o},expression:"combinarItensModal"}}),e("importar-itens",{model:{value:t.modalImportar,callback:function(o){t.modalImportar=o},expression:"modalImportar"}}),e("q-modal",{model:{value:t.criar.modal,callback:function(o){t.$set(t.criar,"modal",o)},expression:"criar.modal"}},[e("div",{staticClass:"q-ma-sm"},[e("form",{on:{submit:function(o){return o.preventDefault(),t.adicionarItem(o)}}},[e("div",{staticClass:"q-ma-md"},[e("div",{staticClass:"row q-headline text-weight-bold"},[t._v("Cadastrar produto")]),e("campo",t._b({staticClass:"row",attrs:{autofocus:""},model:{value:t.criar.descricao,callback:function(o){t.$set(t.criar,"descricao","string"===typeof o?o.trim():o)},expression:"criar.descricao"}},"campo",t.meta.descricao,!1)),e("campo",{staticClass:"row",attrs:{opcoes:t.opcoesTipo,rotulo:"Tipo",tipo:"seletor"},model:{value:t.criar.tipo,callback:function(o){t.$set(t.criar,"tipo",o)},expression:"criar.tipo"}})],1),e("div",{staticClass:"row justify-end"},[e("q-btn",{attrs:{flat:"",color:"primary",label:"Cancelar"},on:{click:function(o){t.criar.modal=!1}}}),e("q-btn",{attrs:{flat:"",color:"primary",label:"Criar",type:"submit"}})],1)])])]),e("q-modal",{attrs:{"content-css":{minWidth:"100vw",minHeight:"100vh"}},model:{value:t.help.show,callback:function(o){t.$set(t.help,"show",o)},expression:"help.show"}},[e("q-modal-layout",{staticStyle:{height:"100vh",width:"100vw"}},[e("iframe",{staticStyle:{height:"100%",width:"100%"},attrs:{src:t.help.src,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e("q-toolbar",{attrs:{slot:"header"},slot:"header"},[e("q-toolbar-title",[t._v(t._s(t.help.title))]),e("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{dense:"",flat:"",icon:"close",round:""}})],1)],1)],1)],1)],1)],1)},r=[];a._withStripped=!0;var i=e("3156"),n=e.n(i),s=(e("96cf"),e("c973")),l=e.n(s),c=(e("ac6a"),e("cadf"),e("456d"),e("df3a")),m=e("01f0"),d=e("88db"),u=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("q-modal",{attrs:{value:t.value},on:{input:t.eventoInput}},[e("div",{staticClass:"q-ma-sm"},[e("form",{on:{submit:function(o){return o.preventDefault(),t.importarItens(o)}}},[e("div",{staticClass:"q-ma-md"},[e("div",{staticClass:"row q-mb-md q-headline text-weight-bold"},[t._v("Importar produtos")]),e("q-uploader",{ref:"campoArquivoImportar",attrs:{"auto-expand":"",color:"none",extensions:".xlsx","float-label":"Selecione o arquivo (.xlsx)","hide-upload-button":"","hide-upload-progress":"","inverted-light":"",url:""},on:{add:t.importarAdicionarArquivo}}),t.importar.erro?e("div",{class:["row","q-pa-sm",t.importar.cor]},[t._v(t._s(t.importar.erro))]):e("div",{staticClass:"row q-mt-md justify-start"},[e("q-btn",{attrs:{color:"primary",flat:"",icon:"cloud_download",label:"Baixar arquivo modelo (.xlsx)"},on:{click:t.importarBaixarArquivo}})],1)],1),e("div",{staticClass:"row justify-end"},[e("q-btn",{attrs:{flat:"",color:"primary",label:"Cancelar"},on:{click:function(o){t.eventoInput(!1)}}}),e("q-btn",{attrs:{flat:"",color:"primary",label:"Importar",type:"submit"}})],1)])])]),e("q-modal",{model:{value:t.importar.modalResultado,callback:function(o){t.$set(t.importar,"modalResultado",o)},expression:"importar.modalResultado"}},[e("div",{staticClass:"q-ma-sm"},[e("div",{staticClass:"q-mx-sm q-my-md"},[e("div",{staticClass:"row q-my-md q-headline text-weight-bold"},[t._v("Importar produtos")]),e("div",{staticClass:"row q-my-md"},[t._v(t._s(t.importar.mensagem))]),e("div",{staticClass:"row items-center q-my-md"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"row q-caption flex-center text-faded"},[t._v("Incluídos")]),e("div",{staticClass:"row q-py-xs flex-center text-positive"},[t._v(t._s(t._f("numero")(t.importar.incluidos,0)))])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"row q-caption flex-center text-faded"},[t._v("Atualizados")]),e("div",{staticClass:"row q-py-xs flex-center text-positive"},[t._v(t._s(t._f("numero")(t.importar.alterados,0)))])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"row q-caption flex-center text-faded"},[t._v("Erros")]),e("div",{staticClass:"row q-py-xs flex-center text-negative"},[t._v(t._s(t._f("numero")(t.importar.erros,0)))])])]),e("div",{class:["row","q-pa-sm",t.importar.corFinal]},[t._v(t._s(t.importar.mensagemFinal))]),e("div"),t.importar.listaErros.length?e("q-list",{staticClass:"row no-border"},[e("q-item",{staticClass:"col-12 q-px-none"},[e("q-item-main",[e("q-item-tile",{attrs:{sublabel:""}},[e("div",{staticClass:"row justify-around"},[e("div",{staticClass:"col-2 q-caption text-center"},[t._v("Linha")]),e("div",{staticClass:"col-10 q-caption"},[t._v("Erro")])])]),e("q-item-separator",{staticClass:"q-my-xs"}),t._l(t.importar.listaErros,function(o,a){return e("div",{key:a},[e("q-item-tile",{attrs:{sublabel:""}},[e("div",{staticClass:"row justify-around"},[e("div",{staticClass:"col-2 text-center"},[t._v(t._s(t._f("numero")(o.linha,0)))]),e("div",{staticClass:"col-10"},[t._v(t._s(o.mensagem))])])]),e("q-item-separator",{staticClass:"q-my-xs"}),e("q-item-tile",{attrs:{sublabel:""}})],1)})],2)],1)],1):t._e()],1),e("div",{staticClass:"row justify-end"},[e("q-btn",{attrs:{flat:"",color:"primary",label:"Fechar"},on:{click:function(o){t.importar.modalResultado=!1}}})],1)])])],1)},p=[];u._withStripped=!0;e("f751"),e("7514"),e("ac4d"),e("8a81"),e("7f7f");var h=e("478f"),v=e("7551"),f=e("3e8a"),b=e("8149"),x=e("ed08"),g={alterados:0,arquivo:null,cor:"text-negative",corFinal:"",erro:"",erros:0,incluidos:0,listaErros:[],mensagem:"",mensagemFinal:"",modalResultado:!1},q={data:function(){return{importar:Object(x["clonarV2"])(g)}},watch:{value:function(){this.value&&(this.importar=Object(x["clonarV2"])(g),this.$refs.campoArquivoImportar.reset())}},methods:{eventoInput:function(t){this.$emit("input",t)},importarAdicionarArquivo:function(t){x["gconsole"].log("ImportarItens","importarAdicionarArquivo"),this.importar.erro="",this.importar.arquivo=t[0]},importarArquivoXlsx:function(){var t=l()(regeneratorRuntime.mark(function t(o){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,x["gconsole"].log("ImportarItens","importarArquivoXlsx",this.importar.arquivo.name),this.importar.modalResultado=!0,this.eventoInput(!1),this.importar.mensagem="Carregando o arquivo .xlsx",t.next=7,Object(f["a"])().item.toArray();case 7:return this.importarLista=t.sent,e={Item:v["a"],ItemFornecedor:v["a"].fornecedor.lista},t.next=11,Object(h["a"])(o.target.result,e,this.importarCallbackParcial,this.importarCallbackErro,this.importarCallbackFinal);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),this.importar.erro=this.$q.notifyError("Ocorreu erro ao importar arquivo xlsx",t.t0);case 16:case"end":return t.stop()}},t,this,[[0,13]])}));return function(o){return t.apply(this,arguments)}}(),importarBaixarArquivo:function(){x["gconsole"].log("ImportarItens","importarBaixarArquivo"),window.open("statics/downloads/B15-Importar-ou-Atualizar-Produtos.xlsx","_self")},importarCallbackErro:function(){var t=l()(regeneratorRuntime.mark(function t(o,e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.importar.erros++,this.importar.listaErros.push({linha:o,mensagem:e});case 2:case"end":return t.stop()}},t,this)}));return function(o,e){return t.apply(this,arguments)}}(),importarCallbackFinal:function(){var t=l()(regeneratorRuntime.mark(function t(o){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:x["gconsole"].log("ImportarItens","Importação concluida"),this.importar.incluidos+this.importar.alterados>0?this.importar.erros>0?(this.importar.corFinal="bg-warning",this.importar.mensagemFinal="Importação realizada parcialmente!"):(this.importar.corFinal="bg-positive text-white",this.importar.mensagemFinal="Importação concluída com sucesso!"):this.importar.erros>0?(this.importar.corFinal="text-negative",this.importar.mensagemFinal="Importação não realizada!"):(this.importar.corFinal="bg-warning",this.importar.mensagemFinal="Importação não realizada!");case 2:case"end":return t.stop()}},t,this)}));return function(o){return t.apply(this,arguments)}}(),acertarFornecedores:function(t){var o=!0,e=!1,a=void 0;try{for(var r,i=(t.atual.fornecedor||[])[Symbol.iterator]();!(o=(r=i.next()).done);o=!0){var n=r.value;n.id=Object(x["uuid"])(),n.idItem=t.atual.id}}catch(t){e=!0,a=t}finally{try{o||null==i.return||i.return()}finally{if(e)throw a}}var s=!0,l=!1,c=void 0;try{for(var m,d=function(){var o=m.value,e=t.atual.fornecedor.find(function(t){return(t.idContato||"")===(o.idContato||"")&&(t.descricao||"")===(o.descricao||"")&&(t.referencia||"")===(o.referencia||"")});e?e.id=o.id:t.atual.fornecedor.push(o)},u=(t.original.fornecedor||[])[Symbol.iterator]();!(s=(m=u.next()).done);s=!0)d()}catch(t){l=!0,c=t}finally{try{s||null==u.return||u.return()}finally{if(l)throw c}}},importarCallbackParcial:function(){var t=l()(regeneratorRuntime.mark(function t(o){var e,a,r,i,s,l,c,m,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=o.Item[0],o.ItemFornecedor&&(e.fornecedor=o.ItemFornecedor),a=o.chaves.length>0?function(t){return o.chaves.reduce(function(o,a){return o&&t[a]===e[a]},!0)}:function(t){return!1},r=this.importarLista.filter(a),!e.referencia){t.next=17;break}if(i=this.importarLista.filter(function(t){return t.referencia===e.referencia}),!(i.length>1)){t.next=10;break}throw new x["ErroValidacao"]("Referência deve ser única (".concat(e.referencia,")"));case 10:if(1!==i.length){t.next=17;break}if(0!==r.length){t.next=15;break}throw new x["ErroValidacao"]("Referência deve ser única (".concat(e.referencia,")"));case 15:if(i[0].id===r[0].id){t.next=17;break}throw new x["ErroValidacao"]("Referência deve ser única (".concat(e.referencia,")"));case 17:if(s=Object(x["dataAtual"])(),0!==r.length){t.next=28;break}return l=n()({},b["a"].item.vazio,{dataCadastro:s,_DataHoraUltimaAlteracao:s},e,{id:Object(x["uuid"])()}),c={atual:l,original:{}},this.acertarFornecedores(c),t.next=24,b["a"].item.grava(c);case 24:this.importarLista.push(l),this.importar.incluidos++,t.next=42;break;case 28:if(1!==r.length){t.next=40;break}return t.next=31,b["a"].item.leCompleto(r[0].id);case 31:return m=t.sent,e.id=m.atual.id,Object.assign(m.atual,e),this.acertarFornecedores(m),t.next=37,b["a"].item.grava(m);case 37:this.importar.alterados++,t.next=42;break;case 40:throw d=o.chaves.map(function(t){return t+": "+e[t]}).join(", "),new x["ErroValidacao"]("Existem ".concat(r.length," produtos no banco com a chave (").concat(d,")"));case 42:case"end":return t.stop()}},t,this)}));return function(o){return t.apply(this,arguments)}}(),importarItens:function(){var t=this;x["gconsole"].log("ImportarItens","importarItens");try{if(this.importar.arquivo){var o=new FileReader;o.onload=this.importarArquivoXlsx,o.onerror=function(){t.importar.erro="Falha na leitura do arquivo",t.$q.notifyError(t.importar.erro)},o.readAsBinaryString(this.importar.arquivo)}else this.importar.erro="Favor selecionar o arquivo para importação"}catch(t){this.importar.erro="Ocorreu erro ao importar produtos",this.$q.notifyError(this.importar.erro,t)}}},props:{value:{required:!0,type:Boolean}},created:function(){x["gconsole"].log("ImportarItens","created()")}},w=q,I=e("2877"),C=Object(I["a"])(w,u,p,!1,null,null,null);C.options.__file="ImportarItens.vue";var y=C.exports,k=e("3c82"),_=e("dc06"),F={components:{Avatar:c["a"],BarraTopo:m["a"],Campo:d["a"],ImportarItens:y,PromptItemNovo:k["a"],MenuAbas:_["a"]},computed:{meta:function(){return v["a"]},opcoesTipo:function(){return b["a"].item.opcoesTipo}},data:function(){return{dbItem:b["a"].item,combinarItensModal:!1,criar:{modal:!1,descricao:"",tipo:"Produto"},itensInativosModal:!1,itensModal:!1,modalImportar:!1,permissaoFicha:!1,help:{show:!1,src:"",title:"",map:{produtos:{src:"https://www.youtube.com/embed/iTV18eYOBSg",title:"Videoaula OptiSoul: Cadastro de produtos"}}},sistemaPai:""}},methods:{showHelp:function(t){this.help.src=this.help.map[t].src,this.help.title=this.help.map[t].title,this.help.show=!0},abrirItem:function(t){try{var o=Object.keys(t)[0];this.$router.push({name:"ItemFicha",params:{id:o}}),this.itensInativosModal=!1,this.itensModal=!1}catch(t){this.$q.notifyError("Ocorreu erro ao abrir produto",t)}},abrirModalCriar:function(){var t=l()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.t0=!!this.$refs.componentefilho&&!!this.$refs.componentefilho.desejaDescartar,!t.t0){t.next=5;break}return t.next=4,this.$refs.componentefilho.desejaDescartar();case 4:t.t0=!t.sent;case 5:if(!t.t0){t.next=7;break}return t.abrupt("return");case 7:this.criar={modal:!0,descricao:"",tipo:"Produto"};case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),adicionarItem:function(){var t=l()(regeneratorRuntime.mark(function t(){var o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$q.loading.show(),t.prev=1,this.criar.descricao){t.next=5;break}return this.criar.modal=!1,t.abrupt("return");case 5:return o=n()({},b["a"].item.vazio,{id:Object(x["uuid"])(),descricao:this.criar.descricao,tipo:this.criar.tipo}),t.next=8,b["a"].item.grava({atual:o});case 8:this.criar.modal=!1,this.$router.push({name:"ItemFicha",params:{id:o.id}}),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),this.$q.notifyError("Ocorreu erro ao adicionar Produto",t.t0);case 15:return t.prev=15,this.$q.loading.hide(),t.finish(15);case 18:case"end":return t.stop()}},t,this,[[1,12,15,18]])}));return function(){return t.apply(this,arguments)}}(),atualizar:function(){var t=l()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,x["gconsole"].log("Item","atualizar"),t.next=4,b["a"].item.le({id:this.$route.params.id});case 4:return b["a"].item.selecionado=t.sent,t.next=7,b["a"].permissao.objeto("item//ficha");case 7:this.permissaoFicha=t.sent,"optisoul"===Object(x["sistemaPai"])()&&(b["a"].item.opcoesTipo=[{rotulo:"Óculos de Sol",valor:"Óculos Sol"},{rotulo:"Óculos Vista (Pronto)",valor:"Óculos Pronto"},{rotulo:"Armação",valor:"Armação"},{rotulo:"Lente Oftálmica",valor:"Lente"},{rotulo:"Lente de Contato",valor:"Lente Contato"},{rotulo:"Tratamento",valor:"Tratamento"},{rotulo:"Equipamento",valor:"Equipamento"},{rotulo:"Ferramenta",valor:"Ferramenta"},{rotulo:"Outro Produto",valor:"Produto"},{rotulo:"Serviço",valor:"Serviço"}]),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),this.$q.notifyError("Ocorreu erro ao consultar produto",t.t0);case 14:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}(),buscarItem:function(){var t=l()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.t0=!!this.$refs.componentefilho&&!!this.$refs.componentefilho.desejaDescartar,!t.t0){t.next=5;break}return t.next=4,this.$refs.componentefilho.desejaDescartar();case 4:t.t0=!t.sent;case 5:if(!t.t0){t.next=7;break}return t.abrupt("return");case 7:this.itensModal=!0;case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),buscarItemExcluido:function(){var t=l()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.t0=!!this.$refs.componentefilho&&!!this.$refs.componentefilho.desejaDescartar,!t.t0){t.next=5;break}return t.next=4,this.$refs.componentefilho.desejaDescartar();case 4:t.t0=!t.sent;case 5:if(!t.t0){t.next=7;break}return t.abrupt("return");case 7:this.itensInativosModal=!0;case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),copiarUid:function(){var t=this.$refs.uid;t.type="text";try{t.select(),document.execCommand("copy"),this.$q.notify({message:"Copiado!",type:"info"})}catch(t){this.$q.notifyError("Ocorreu erro ao copiar",t)}t.type="hidden",window.getSelection().removeAllRanges()},duplicarItem:function(){var t=l()(regeneratorRuntime.mark(function t(){var o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b["a"].item.duplica(this.$route.params.id);case 3:o=t.sent,this.$router.push({name:"ItemFicha",params:{id:o}}),this.$q.notifyPositive("O produto foi duplicado com sucesso."),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.$q.notifyError("Ocorreu erro ao duplicar Produto",t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),selecionarCombinarItens:function(){var t=l()(regeneratorRuntime.mark(function t(o){var e,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=Object.keys(o)[0],this.combinarItensModal=!1,t.prev=2,t.next=5,this.$q.dialog({cancel:!0,color:"negative",message:"Ao continuar você irá combinar todas as informações dos dois produtos em apenas um produto.",ok:"Combinar",title:"Tem certeza?"});case 5:t.next=10;break;case 7:return t.prev=7,t.t0=t["catch"](2),t.abrupt("return");case 10:return this.$q.loading.show(),t.prev=11,a="\n        mutation itemCombinar(\n          $bancoDeDados: String!, \n          $token: String, \n          $idItemCombinar: ID!, \n          $idItemRemover: ID!\n        ) {\n          itemCombinar(\n            bancoDeDados: $bancoDeDados, \n            token: $token, \n            idItemCombinar: $idItemCombinar, \n            idItemRemover: $idItemRemover\n          ) {\n            sucesso\n            mensagem\n            codigo\n          }\n        }",t.next=15,Object(x["executarGraphql"])(a,{idItemCombinar:b["a"].item.selecionado.id,idItemRemover:e});case 15:r=t.sent,Object(x["tratarErroGraphql"])(r,"itemCombinar"),this.$q.notifyPositive("Os produtos foram combinados com sucesso."),t.next=23;break;case 20:t.prev=20,t.t1=t["catch"](11),this.$q.notifyError("Ocorreu um erro ao combinar produtos",t.t1);case 23:return t.prev=23,this.$q.loading.hide(),t.finish(23);case 26:case"end":return t.stop()}},t,this,[[2,7],[11,20,23,26]])}));return function(o){return t.apply(this,arguments)}}()},watch:{"$route.params.id":function(t){localStorage.setItem("itemSelecionado",t),this.atualizar()}},created:function(){x["gconsole"].log("Item","created()",this.$route.params.id),localStorage.setItem("itemSelecionado",this.$route.params.id||"0"),this.sistemaPai=Object(x["sistemaPai"])(),this.atualizar()}},R=F,$=Object(I["a"])(R,a,r,!1,null,null,null);$.options.__file="Item.vue";o["default"]=$.exports},7551:function(t,o,e){"use strict";var a=e("3156"),r=e.n(a),i={descricao:{maxlength:"50",rotulo:"Descrição",tipo:"texto"},idContato:{rotulo:"Nome fornecedor",tipo:"texto"},referencia:{maxlength:"30",rotulo:"Referência",tipo:"texto"}},n={idItemUtilizado:{rotulo:"Produto para composição",tipo:"texto"},ordem:{max:"9999",min:"0",rotulo:"Ordem",tipo:"quantidade"},quantidade:{min:"0",rotulo:"Quantidade",tipo:"decimal",decimals:"4"},temporario:{total:{readonly:!0,rotulo:"Total",tipo:"decimal",decimals:"2"},unidade:{disable:!0,readonly:!0,rotuloFixo:"Unidade",tipo:"texto"},valor:{readonly:!0,rotulo:"Valor",tipo:"decimal",decimals:"2"}}},s={descricao:{maxlength:"8000",rotulo:"Descrição",tipo:"texto"},idItemEquipamento:{rotulo:"Equipamento",tipo:"texto"},idItemFerramenta:{rotulo:"Ferramenta",tipo:"texto"},idItemServico:{rotulo:"Servico",tipo:"texto"},ordem:{max:"9999",min:"0",rotulo:"Ordem",tipo:"quantidade"}},l={descricao:{maxlength:"150",rotulo:"Descrição"},especificacao:{maxlength:"150",rotulo:"Especificação"},limites:{maxlength:"150",rotulo:"Limites"}},c={altura:{rotulo:"Altura",tipo:"decimal",decimals:"0"},armacaoCor:{rotuloFixo:"Cor",tipo:"seletor"},armacaoMaterial:{rotuloFixo:"Material",tipo:"seletor"},diagonal:{rotulo:"Diagonal",tipo:"decimal",decimals:"0"},genero:{class:"col-12 col-md-6",rotuloFixo:"Gênero",tipo:"seletor"},haste:{rotulo:"Haste",tipo:"decimal",decimals:"0"},modelo:{maxlength:"100",rotulo:"Modelo",tipo:"texto"},ponte:{rotulo:"Ponte",tipo:"decimal",decimals:"0"},largura:{maxlength:"100",rotulo:"Largura",tipo:"texto"},tipoMontagem:{rotuloFixo:"Tipo de montagem",tipo:"seletor"}},m={aplicacao:{maxlength:"10000",rotulo:"Aplicação",rows:"2",tipo:"textoArea"},capacidade:{rotulo:"Capacidade",tipo:"decimal",decimals:"2"},capacidadeUnidade:{class:"col-12 col-md-3",maxlength:"20",rotulo:"Un. Capacidade",tipo:"texto"},codigoOrigem:{rotuloFixo:"Origem",tipo:"seletor",tipo2:"numerico"},comprimento:{rotulo:"Comprimento",tipo:"decimal",decimals:"2"},densidade:{rotulo:"Densidade",tipo:"decimal",decimals:"2"},embalagem:{class:"col-12 col-md-3",maxlength:"255",rotulo:"Embalagem",tipo:"texto"},garantiaDescricao:{maxlength:"255",rotulo:"Garantia descrição",tipo:"texto"},garantiaDias:{class:"col-12 col-md-4",min:"0",max:"9999",rotulo:"Garantia (dias)",tipo:"quantidade"},grupo:{rotuloFixo:"Grupo",tipo:"seletor"},idPerfilContabil:{class:"col-12 col-md-4",rotulo:"Perfil contábil",tipo:"seletor"},largura:{rotulo:"Largura",tipo:"decimal",decimals:"2"},observacao:{maxlength:"10000",rotulo:"Observação",rows:"4",tipo:"textoArea"},peso:{rotulo:"Peso",tipo:"decimal",decimals:"2"},subGrupo:{rotuloFixo:"SubGrupo",tipo:"seletor"},unidade:{rotuloFixo:"Unidade",tipo:"seletor"},unidade__:{valorInicial:"UN"},validadeMeses:{class:"col-12 col-md-3",min:"0",max:"9999",rotulo:"Validade (meses)",tipo:"decimal",decimals:"2"}},d={consumoMedio:{min:"0",rotulo:"Consumo médio",tipo:"decimal",decimals:"2"},local:{maxlength:"20",rotulo:"Local",tipo:"texto"},quantidadeMinimaCompra:{min:"0",rotulo:"Qtde compra reposição",tipo:"decimal",decimals:"2"},quantidadeMinimaEstoque:{min:"0",rotulo:"Estoque mínimo",tipo:"decimal",decimals:"2"},tempoMedioReposicao:{min:"0",rotulo:"Tempo médio reposição (dias)",tipo:"quantidade"}},u={codigoBarras:{erroRotulo:"Deve ter 12 ou 13 dígitos",maxlength:"13",rotulo:"Código de barras (GTIN ou EAN)",tipo:"texto"},descricao:{erroRotulo:"O nome deve ter pelo menos 2 caracteres",maxlength:"500",rotulo:"Nome do produto",tipo:"texto"},marca:{rotuloFixo:"Marca",tipo:"seletor"},fabricante:{rotuloFixo:"Fabricante",tipo:"seletor"},ncm:{maxlength:"8",rotulo:"NCM",tipo:"texto"},catalogo:{maxlength:"8",rotulo:"Catálogo Fabricante",tipo:"texto"},percentualMarkup:{rotulo:"Lucro",tipo:"decimal",decimals:"2"},referencia:{erroRotulo:"Referência deve ser única",maxlength:"30",rotulo:"Referência",tipo:"texto"},tipo:{rotuloFixo:"Tipo",tipo:"seletor"},utilizaComposicaoValorReposicao:{tipo:"logico"},utilizaMarkup:{tipo:"logico"},valorCustoReposicao:{rotulo:"Custo de reposição",tipo:"decimal",decimals:"2"},valorVenda:{rotulo:"Valor de venda",tipo:"decimal",decimals:"2"}},p={adicaoFinal:{rotulo:"até",tipo:"decimal",decimals:"2"},adicaoInicial:{rotulo:"Adição",tipo:"decimal",decimals:"2"},alturaMinima:{rotulo:"Altura mínima",tipo:"decimal",decimals:"0"},cilindrico:{rotulo:"Cilíndrico",tipo:"decimal",decimals:"2"},cor:{rotuloFixo:"Cor",tipo:"seletor"},diametro:{rotulo:"Diâmetro",tipo:"decimal",decimals:"0"},eixo:{rotulo:"Eixo",tipo:"decimal",decimals:"2"},eixoFinal:{rotulo:"até",tipo:"decimal",decimals:"2"},esfericoFinal:{rotulo:"até",tipo:"decimal",decimals:"2"},esfericoInicial:{rotulo:"Esférico",tipo:"decimal",decimals:"2"},geometria:{rotulo:"Geometria",tipo:"seletor"},indiceRefracao:{rotulo:"Índice refração",tipo:"decimal",decimals:"2"},lenteTipo:{rotulo:"Tipo de lente",tipo:"seletor"},material:{rotuloFixo:"Material",tipo:"seletor"},RB1:{rotulo:"RB1",tipo:"decimal",decimals:"2"},RB2:{rotulo:"RB2",tipo:"decimal",decimals:"2"},surfacada:{rotulo:"Pronta ou surfaçada",tipo:"seletor"}},h={procedimento:{maxlength:"10000",rotuloFixo:"Procedimento",rows:"3",tipo:"textoArea"},numeroPop:{maxlength:"50",rotulo:"Número Pop",tipo:"texto"}},v={ativo:{tipo:"logico"},consumoMedioReal:{tipo:"quantidade"},percentualMarkupReal:{tipo:"decimal",decimals:"2"},quantidadeDisponivel:{tipo:"quantidade"},tempoMedioReposicaoReal:{tipo:"quantidade"},utilizaComposicaoPedido:{tipo:"logico"},valorCusto:{tipo:"decimal",decimals:"2"},valorCustoMedio:{tipo:"decimal",decimals:"2"},valorCustoUltimo:{tipo:"decimal",decimals:"2"}},f=r()({composicao:{lista:n},fornecedor:{lista:i},producaoFase:{lista:s},qualidade:{lista:l}},c,m,d,u,p,v,h);o["a"]=f}}]);