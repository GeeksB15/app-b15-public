(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3e06980a"],{"306b":function(t,a,e){"use strict";var o=e("bb95"),s=e.n(o);s.a},"321e4":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.equipamentos.length?t._l(t.equipamentos,function(a){return e("div",{key:a.id,staticClass:"bg-white q-mt-md"},[e("div",{staticClass:"row items-start"},[e("div",{staticClass:"col q-pa-md"},[e("div",{staticClass:"row"},[e("strong",[t._v(t._s(a.tipo||"Equipamento"))])])]),e("div",{staticClass:"col-auto"},[e("BadgeCopiarUid",{staticClass:"q-ma-md",attrs:{id:a.id,numero:"",cor:"positive"}})],1),e("div",{staticClass:"col-auto q-py-sm"},[e("q-btn",{attrs:{color:"primary",dense:"",flat:"",icon:"edit",round:""},on:{click:function(e){t.abrirModalEquipamento(a)}}}),e("q-btn",{attrs:{color:"faded",flat:"",icon:"more_vert",round:""}},[e("q-popover",[e("q-list",{attrs:{link:"",separator:""}},[e("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(e){t.duplicarEquipamento(a)}}},[e("q-item-side",{attrs:{icon:"file_copy"}}),e("q-item-main",{attrs:{label:"Duplicar"}})],1),e("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(e){t.removerEquipamento(a)}}},[e("q-item-side",{attrs:{icon:"delete"}}),e("q-item-main",{attrs:{label:"Remover"}})],1)],1)],1)],1)],1)]),e("div",{staticClass:"row q-px-md q-pb-md"},[e("EquipamentoCard",{attrs:{equipamento:a}})],1),e("div",{staticClass:"row q-mx-lg"},t._l(a.oss,function(t){return e("div",{key:t.id,staticClass:"col-12"},[e("OSCard",{staticClass:"q-mb-md",attrs:{os:t}})],1)}))])}):e("div",{staticClass:"bg-white q-pa-xl text-center"},[e("p",[t._v("Não há equipamentos cadastrados para o contato "+t._s((t.dbContato.selecionado.nome||"").trim())+".")]),e("p",{staticClass:"q-caption"},[t._v("Para incluir, utilize o botão de adição.")])]),e("div",{staticClass:"q-ma-xl"}),e("q-btn",{staticClass:"fixed",staticStyle:{right:"18px",bottom:"18px"},attrs:{round:"",color:"primary",icon:"add",size:"lg"},on:{click:function(a){t.abrirModalEquipamento({})}}}),e("EquipamentoModal",{attrs:{modal:t.modalEquipamento},on:{atualizar:t.atualizar}})],2)},s=[];o._withStripped=!0;var i=e("3156"),r=e.n(i),n=(e("ac4d"),e("8a81"),e("ac6a"),e("55dd"),e("96cf"),e("c973")),c=e.n(n),l=e("5ef8"),u=e("ff19"),m=e("c281"),p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("q-card",{staticClass:"card-os q-pa-xs"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6"},[e("div",{staticClass:"q-px-sm"},[e("q-toolbar-title",[t._v("\n            Ordem de serviço\n          ")]),e("q-chip",{staticClass:"q-ma-sm q-my-sm",attrs:{rounded:"",color:"grey",small:""}},[t._v("\n            "+t._s(t.os.status)+"\n          ")]),e("div",[t._v(t._s(t.os.descricao))]),t._.get(t.os,"itens.length")?e("q-list",{staticClass:"no-border"},t._l(t.os.itens,function(a){return e("q-item",{key:a.id,staticClass:"q-pa-none",staticStyle:{"min-height":"auto"}},[e("q-item-side",[e("small",[t._v(t._s(a.quantidade)+"x")])]),e("q-item-main",[e("small",[t._v("\n                  "+t._s(a.descricaoItem)+"\n                ")])]),e("q-item-side",{attrs:{right:""}},[e("small",[t._v(t._s(t._f("numero")(a.total,2)))])])],1)})):t._e()],1)]),e("div",{staticClass:"col-4 col-md-1"},[e("q-tooltip",[t._v("\n          Emissão\n        ")]),e("p",{staticClass:"text-center q-my-none"},[e("small",[t._v(t._s(t._f("mesNome")(t.os.dataHoraEmissao)))])]),e("p",{staticClass:"text-center q-my-none q-headline text-weight-bold"},[e("strong",[t._v(t._s(t._f("dia")(t.os.dataHoraEmissao)))])]),e("p",{staticClass:"text-center q-my-none"},[e("small",[t._v(t._s(t._f("ano")(t.os.dataHoraEmissao)))])])],1),e("div",{staticClass:"col-12 col-md-3"},[e("BadgeCopiarUid",{staticClass:"q-ma-md",attrs:{id:t.os.id,numero:t.os.numero,cor:"positive"}})],1)])])],1)},d=[];p._withStripped=!0;var v=e("3e8a"),q={components:{BadgeCopiarUid:l["a"]},data:function(){return{}},methods:{atualizar:function(){var t=c()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.os.id){t.next=7;break}return t.t0=this,t.t1=this.os,t.next=5,Object(v["a"])().documentoItem.where({idDocumentoAdicional:this.os.id}).toArray();case 5:t.t2=t.sent,t.t0.$set.call(t.t0,t.t1,"itens",t.t2);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},props:{os:{type:Object,required:!0}},mounted:function(){this.atualizar()}},h=q,f=(e("b3d5"),e("2877")),b=Object(f["a"])(h,p,d,!1,null,"06b354ee",null);b.options.__file="OSCard.vue";var _=b.exports,C=e("8149"),g={components:{BadgeCopiarUid:l["a"],EquipamentoCard:u["a"],EquipamentoModal:m["a"],OSCard:_},computed:{dbContato:function(){return C["a"].contato}},data:function(){return{modalEquipamento:{visivel:!1,campos:{}},equipamentos:[]}},methods:{atualizar:function(){var t=c()(regeneratorRuntime.mark(function t(){var a,e,o,s,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.idContato=this.$db.contato.selecionado.id||this.$route.params.id,t.next=4,this.$db.equipamento.le({idContato:this.idContato});case 4:t.t0=function(t,a){return(t.dataCadastro||"z").localeCompare(a.dataCadastro||"z")},this.equipamentos=t.sent.sort(t.t0),this.$utils.gconsole.log("Equipamentos","atualizar",this.equipamentos.length,"linhas"),a=!0,e=!1,o=void 0,t.prev=10,s=this.equipamentos[Symbol.iterator]();case 12:if(a=(i=s.next()).done){t.next=23;break}return r=i.value,t.t1=this,t.t2=r,t.next=18,Object(v["a"])().documento.where({idEquipamento:r.id}).toArray();case 18:t.t3=t.sent,t.t1.$set.call(t.t1,t.t2,"oss",t.t3);case 20:a=!0,t.next=12;break;case 23:t.next=29;break;case 25:t.prev=25,t.t4=t["catch"](10),e=!0,o=t.t4;case 29:t.prev=29,t.prev=30,a||null==s.return||s.return();case 32:if(t.prev=32,!e){t.next=35;break}throw o;case 35:return t.finish(32);case 36:return t.finish(29);case 37:t.next=42;break;case 39:t.prev=39,t.t5=t["catch"](0),this.$q.notifyError("Ocorreu erro ao consultar equipamentos",t.t5);case 42:case"end":return t.stop()}},t,this,[[0,39],[10,25,29,37],[30,,32,36]])}));return function(){return t.apply(this,arguments)}}(),abrirModalEquipamento:function(){var t=c()(regeneratorRuntime.mark(function t(a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.gconsole.log("Equipamentos","abrirModalEquipamento",r()({},a)),this.modalEquipamento={visivel:!0,campos:this.$utils.clonarV2(a),original:this.$utils.clonarV2(a)};case 2:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),duplicarEquipamento:function(){var t=c()(regeneratorRuntime.mark(function t(a){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a||(a=this.modalEquipamento.campos),e=this.$utils.clonarV2(a),e.id=this.$utils.uuid(),delete e.dataCadastro,this.modalEquipamento={visivel:!0,campos:e},this.$q.notifyPositive("Equipamento duplicado com sucesso");case 6:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),removerEquipamento:function(){var t=c()(regeneratorRuntime.mark(function t(a){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$utils.gconsole.log("Equipamentos","removerEquipamento",r()({},a)),t.prev=1,t.next=4,this.$q.dialog({cancel:!0,color:"negative",title:"Tem certeza?",message:"Ao continuar você irá remover o equipamento",ok:"Remover"});case 4:t.next=9;break;case 6:return t.prev=6,t.t0=t["catch"](1),t.abrupt("return");case 9:this.tryLoading(c()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$db.equipamento.remove(a.id);case 2:return t.next=4,e.atualizar();case 4:e.$q.notifyPositive("O equipamento foi removido com sucesso");case 5:case"end":return t.stop()}},t)})),{erro:"Erro ao remover equipamento"});case 10:case"end":return t.stop()}},t,this,[[1,6]])}));return function(a){return t.apply(this,arguments)}}()},watch:{"dbContato.selecionado":function(t){this.$utils.gconsole.log("Equipamentos","watch contato",t),this.idContato!==t.id&&this.atualizar()}},mounted:function(){this.atualizar()}},x=g,w=Object(f["a"])(x,o,s,!1,null,null,null);w.options.__file="Equipamentos.vue";a["default"]=w.exports},"3b18":function(t,a,e){},"5ef8":function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("badge",{attrs:{escuro:"",cor:t.cor},nativeOn:{click:function(a){return t.copiarUid(a)}}},[t._v("\n    #"+t._s(Number(t.numero)||(t.id||"").slice(-6))+"\n    "),e("input",{ref:"badgeUid",attrs:{type:"hidden"},domProps:{value:t.id}})])],1)},s=[];o._withStripped=!0;e("c5f6");var i=e("a0fd"),r={components:{Badge:i["a"]},methods:{copiarUid:function(){var t=this.$refs.badgeUid;t.type="text";try{t.select(),document.execCommand("copy"),this.$q.notify({message:"UID copiado para a área de transferência.",type:"info"})}catch(t){this.$q.notifyError("Erro ao copiar uid",t)}t.type="hidden",window.getSelection().removeAllRanges()}},props:{cor:{required:!1,type:String},numero:{required:!0,type:[Number,String]},id:{required:!0,type:String}}},n=r,c=e("2877"),l=Object(c["a"])(n,o,s,!1,null,null,null);l.options.__file="BadgeCopiarUid.vue";a["a"]=l.exports},b3d5:function(t,a,e){"use strict";var o=e("3b18"),s=e.n(o);s.a},bb95:function(t,a,e){},c281:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-modal",{attrs:{maximized:""},model:{value:t.modal.visivel,callback:function(a){t.$set(t.modal,"visivel",a)},expression:"modal.visivel"}},[e("q-modal-layout",{staticClass:"bg-light"},[e("q-toolbar",{attrs:{slot:"header"},slot:"header"},[e("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{flat:"",round:"",dense:"",icon:"arrow_back"}}),e("q-toolbar-title",[t._v("Equipamento")]),e("q-btn",{staticClass:"q-ml-sm no-shadow",attrs:{color:"white","text-color":"primary",label:"Salvar"},on:{click:function(a){t.tryLoading(t.salvarEquipamento,{erro:"Ocorreu erro ao salvar equipamento"})}}})],1),e("div",{staticClass:"bg-white q-mx-md q-pa-md"},[e("div",{staticClass:"gutter-x-sm items-center row"},[e("campo",{staticClass:"col-12 col-sm-6",attrs:{rotulo:"Tipo",tipo:"seletor",opcoes:t.opcoesTipoEquipamento},model:{value:t.campos.tipo,callback:function(a){t.$set(t.campos,"tipo",a)},expression:"campos.tipo"}}),e("SeletorItem",{staticClass:"col-12 col-sm-6",attrs:{rotulo:"Produto"},model:{value:t.campos.idItem,callback:function(a){t.$set(t.campos,"idItem",a)},expression:"campos.idItem"}}),e("campo",{staticClass:"col-12",attrs:{rotulo:"Descrição"},model:{value:t.campos.descricao,callback:function(a){t.$set(t.campos,"descricao",a)},expression:"campos.descricao"}})],1),e("div",{staticClass:"gutter-x-sm items-center row"},[e("campo",{staticClass:"col-6 col-sm-3",attrs:{rotulo:"Marca"},model:{value:t.campos.marca,callback:function(a){t.$set(t.campos,"marca",a)},expression:"campos.marca"}}),e("campo",{staticClass:"col-6 col-sm-3",attrs:{rotulo:"Modelo"},model:{value:t.campos.modelo,callback:function(a){t.$set(t.campos,"modelo",a)},expression:"campos.modelo"}}),e("campo",{staticClass:"col-6 col-sm-3",attrs:{rotulo:"Cor"},model:{value:t.campos.cor,callback:function(a){t.$set(t.campos,"cor",a)},expression:"campos.cor"}})],1),e("div",{staticClass:"gutter-x-sm items-center row"},["Veículo"===t.campos.tipo?[e("campo",{staticClass:"col-6 col-sm-3",attrs:{rotulo:"Placa"},on:{input:function(a){t.campos.placa=t.campos.placa.toUpperCase()}},model:{value:t.campos.placa,callback:function(a){t.$set(t.campos,"placa",a)},expression:"campos.placa"}}),e("campo",{staticClass:"col-6 col-sm-3",attrs:{rotulo:"Chassi"},model:{value:t.campos.chassi,callback:function(a){t.$set(t.campos,"chassi",a)},expression:"campos.chassi"}})]:[e("campo",{staticClass:"col-6 col-sm-3",attrs:{rotulo:"Número de série"},model:{value:t.campos.numeroSerie,callback:function(a){t.$set(t.campos,"numeroSerie",a)},expression:"campos.numeroSerie"}}),"Ar condicionado"===t.campos.tipo?e("campo",{staticClass:"col-6 col-sm-3",attrs:{rotulo:"BTU"},model:{value:t.campos.btu,callback:function(a){t.$set(t.campos,"btu",a)},expression:"campos.btu"}}):t._e(),e("campo",{staticClass:"col-6 col-sm-3",attrs:{rotulo:"Data de validade",tipo:"data"},model:{value:t.campos.dataValidade,callback:function(a){t.$set(t.campos,"dataValidade",a)},expression:"campos.dataValidade"}})],e("campo",{staticClass:"col-6 col-sm-3",attrs:{rotulo:"Data final garantia",tipo:"data"},model:{value:t.campos.dataFinalGarantia,callback:function(a){t.$set(t.campos,"dataFinalGarantia",a)},expression:"campos.dataFinalGarantia"}})],2),e("div",{staticClass:"gutter-x-sm items-center row"},[e("campo",{staticClass:"col-12",attrs:{rotulo:"Observação"},model:{value:t.campos.observacao,callback:function(a){t.$set(t.campos,"observacao",a)},expression:"campos.observacao"}})],1)]),e("div",{staticClass:"items-center justify-around q-my-lg row"},[t.campos.dataCadastro?e("small",[t._v("Data do cadastro: "+t._s(t._f("dataHora")(t.campos.dataCadastro)))]):t._e()])],1)],1)},s=[];o._withStripped=!0;e("a481"),e("28a5"),e("96cf");var i=e("c973"),r=e.n(i),n=e("7ab0"),c={components:{SeletorItem:n["a"]},computed:{campos:function(){return this.modal.campos}},data:function(){return{opcoesTipoEquipamento:[]}},methods:{atualizar:function(){var t=r()(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$db.configuracoes.leValor("equipamento.tipos","Equipamento");case 3:a=t.sent,this.opcoesTipoEquipamento=a.split(";").filter(function(t){return t}).map(function(t){return{rotulo:t.trim(),valor:t.trim()}}),this.modal.campos.tipo||this.$set(this.modal.campos,"tipo",this.opcoesTipoEquipamento[0].valor),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.$q.notifyError("Erro ao carregar os dados",t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),salvarEquipamento:function(){var t=r()(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=this.$utils.clonarV2(this.modal.campos),this.$utils.gconsole.log("Equipamentos","salvarEquipamento",a),this.$utils.verificarErro(!a.tipo,"Tipo de equipamento não selecionado"),a.id||(a.id=this.$utils.uuid()),a.dataCadastro||(a.dataCadastro=this.$utils.dataAtual()),a.idContato||(a.idContato=this.$db.contato.selecionado.id),"Veículo"===a.tipo?(a.placa=(a.placa||"").replace(/ /g,""),a.numeroSerie="",a.dataValidade=""):(a.chassi="",a.placa=""),"Ar condicionado"!==a.tipo&&(a.btu=""),t.next=10,this.$db.equipamento.grava({atual:a,original:this.modal.original});case 10:this.$q.notifyPositive("Equipamento salvo com sucesso"),this.modal.visivel=!1,this.$emit("atualizar",a);case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},props:{modal:{required:!0,type:Object}},watch:{"modal.visivel":function(t){t&&this.atualizar()}},mounted:function(){this.atualizar()}},l=c,u=(e("306b"),e("2877")),m=Object(u["a"])(l,o,s,!1,null,null,null);m.options.__file="EquipamentoModal.vue";a["a"]=m.exports},ff19:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row gutter-xs"},[t.equipamento.descricao?e("div",{staticClass:"col-12"},[t._v(t._s(t.equipamento.descricao))]):t._e(),e("div",{staticClass:"col-12"},[t._v(" "+t._s(t.marcaModeloCor)+"\n\n  ")]),e("div",{staticClass:"col-12"},[t.equipamento.placa?[e("span",{staticClass:"q-body-1"},[t._v("Placa: ")]),e("strong",{staticClass:"q-pr-md"},[t._v(t._s(t.equipamento.placa))])]:t._e(),t.equipamento.chassi?[e("span",{staticClass:"q-body-1"},[t._v("Chassi: ")]),e("strong",{staticClass:"q-pr-md"},[t._v(t._s(t.equipamento.chassi))])]:t._e(),t.equipamento.btu?[e("span",{staticClass:"q-body-1"},[t._v("BTU: ")]),e("strong",{staticClass:"q-pr-md"},[t._v(t._s(t.equipamento.btu))])]:t._e(),t.equipamento.numeroSerie?[e("span",{staticClass:"q-body-1"},[t._v("Número de série: ")]),e("strong",{staticClass:"q-pr-md"},[t._v(t._s(t.equipamento.numeroSerie))])]:t._e(),t.equipamento.dataValidade?[e("span",{staticClass:"q-body-1"},[t._v("Validade: ")]),e("strong",{staticClass:"q-pr-md"},[t._v(t._s(t._f("data")(t.equipamento.dataValidade)))])]:t._e(),t.equipamento.dataFinalGarantia?[e("span",{staticClass:"q-body-1"},[t._v(" Garantia: ")]),e("strong",{staticClass:"q-pr-md"},[t._v(t._s(t._f("data")(t.equipamento.dataFinalGarantia)))])]:t._e()],2),t.equipamento.observacao?e("div",{staticClass:"col-12"},[e("strong",{staticClass:"q-body-1"},[t._v("Observação: ")]),t._v(t._s(t.equipamento.observacao)+"\n  ")]):t._e()])},s=[];o._withStripped=!0;var i={computed:{marcaModeloCor:function(){var t=this;return["marca","modelo","cor"].map(function(a){return t.equipamento[a]}).filter(function(t){return t}).join(" - ")}},props:{equipamento:{required:!0,type:Object}}},r=i,n=e("2877"),c=Object(n["a"])(r,o,s,!1,null,null,null);c.options.__file="EquipamentoCard.vue";a["a"]=c.exports}}]);