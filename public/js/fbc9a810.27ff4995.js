(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fbc9a810"],{"64f5":function(t,e,a){"use strict";var s,r,o=a("1fca"),i={extends:o["b"],props:{dados:{default:null,type:Object},opcoes:{default:null,type:Object}},watch:{dados:function(){this.renderChart(this.dados,this.opcoes)}},mounted:function(){this.renderChart(this.dados,this.opcoes)}},n=i,l=a("2877"),d=Object(l["a"])(n,s,r,!1,null,null,null);d.options.__file="GraficoPizza.vue";e["a"]=d.exports},"66f1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row gutter-sm q-mt-sm q-pb-md"},[a("div",{staticClass:"col-12",staticStyle:{float:"right"}},[a("span",{staticStyle:{"font-size":"70%"}},[a("q-spinner",{directives:[{name:"show",rawName:"v-show",value:t.carregando,expression:"carregando"}],attrs:{color:"primary",size:20}})],1)]),a("div",{staticClass:"col-12 q-mt-sm"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-title",{staticClass:"text-tertiary q-title q-pb-sm"},[t._v("Financeiro")]),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].financeiro?a("q-card-main",[a("div",{staticClass:"row justify-around"},[a("div",{staticClass:"q-headline text-weight-bold text-right q-mt-sm q-pb-none verde",staticStyle:{"line-height":"22px"}},[a("small",{staticClass:"q-body-2 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",staticStyle:{display:"block"}},[t._v("\n                Recebido\n              ")]),a("div",{staticClass:"row float-right"},[a("div",{staticClass:"graph",staticStyle:{"margin-right":"10px"}},[a("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"10px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"8px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"17px"}})]),a("div",{staticClass:"q-headline text-weight-bold text-right text-positive q-mt-sm q-pb-none",staticStyle:{"line-height":"22px"}},[t._v("\n                  "+t._s(t._f("numero")(t.dados["empresa"].financeiro.recebido,2))+"\n                ")])])]),a("div",{staticClass:"q-headline text-weight-bold text-right q-mt-sm q-pb-none vermelho",staticStyle:{"line-height":"22px"}},[a("small",{staticClass:"q-body-2 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",staticStyle:{display:"block"}},[t._v("\n                Pago\n              ")]),a("div",{staticClass:"row float-right"},[a("div",{staticClass:"graph",staticStyle:{"margin-right":"10px"}},[a("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"10px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"8px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"17px"}})]),a("div",{staticClass:"q-headline text-weight-bold text-right text-negative q-mt-sm q-pb-none",staticStyle:{"line-height":"22px"}},[t._v("\n                  "+t._s(t._f("numero")(t.dados["empresa"].financeiro.pago,2))+"\n                ")])])]),a("div",{staticClass:"q-headline text-weight-bold text-right q-mt-sm q-pb-none azul",staticStyle:{"line-height":"22px"}},[a("small",{staticClass:"q-body-2 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",staticStyle:{display:"block"}},[t._v("\n                Saldo (R$) disponivel\n              ")]),a("div",{staticClass:"row float-right"},[a("div",{staticClass:"graph",staticStyle:{"margin-right":"10px"}},[a("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"10px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"8px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"17px"}})]),a("div",{staticClass:"q-headline text-weight-bold text-right text-primary q-mt-sm q-pb-none",staticStyle:{"line-height":"22px"}},[t._v("\n                  "+t._s(t._f("numero")(t.dados["empresa"].financeiro.saldoHoje,2))+"\n                ")])])]),a("div",{staticClass:"q-headline text-weight-bold text-right q-mt-sm q-pb-none verde",staticStyle:{"line-height":"22px"}},[a("small",{staticClass:"q-body-2 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",staticStyle:{display:"block"}},[t._v("\n                Receber\n              ")]),a("div",{staticClass:"row float-right"},[a("div",{staticClass:"graph",staticStyle:{"margin-right":"10px"}},[a("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"10px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"8px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"17px"}})]),a("div",{staticClass:"q-headline text-weight-bold text-right text-positive q-mt-sm q-pb-none",staticStyle:{"line-height":"22px"}},[t._v("\n                  "+t._s(t._f("numero")(t.dados["empresa"].financeiro.aReceber,2))+"\n                ")])])]),a("div",{staticClass:"q-headline text-weight-bold text-right q-mt-sm q-pb-none vermelho",staticStyle:{"line-height":"22px"}},[a("small",{staticClass:"q-body-2 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",staticStyle:{display:"block"}},[t._v("\n                Pagar\n              ")]),a("div",{staticClass:"row float-right"},[a("div",{staticClass:"graph",staticStyle:{"margin-right":"10px"}},[a("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"10px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"8px"}}),a("div",{staticClass:"graphbar",staticStyle:{height:"17px"}})]),a("div",{staticClass:"q-headline text-weight-bold text-right text-negative q-mt-sm q-pb-none",staticStyle:{"line-height":"22px"}},[t._v("\n                  "+t._s(t._f("numero")(t.dados["empresa"].financeiro.aPagar,2))+"\n                ")])])])])]):t._e()],1)],1),"optisoul"===t.sistemaPai&&t.permissoes.envelope?a("div",{staticClass:"col-12"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-title",{staticClass:"text-tertiary q-title q-pb-sm"},[t._v("Envelopes")]),!t.carregando&&t.dados["empresa"].envelopes&&t.dados["empresa"].envelope?a("q-card-main",[a("div",{staticClass:"row justify-around"},[t._l(t.envelopes,function(e,s){return a("div",{key:s,staticClass:"row text-weight-bold text-right q-mt-sm q-pb-none"},[a("div",[a("small",{staticClass:"q-body-2 text-tertiary text-weight-regular q-block q-mr-sm q-pa-none",staticStyle:{display:"block"}},[t._v("\n                  "+t._s(e.status)+"\n                ")]),a("div",{staticClass:"float-right q-headline text-weight-bold text-right text-primary q-mt-sm q-mr-sm q-pb-none"},[t._v("\n                  "+t._s(t._f("numero")((e.verde||0)+(e.amarelo||0)+(e.vermelho||0),0))+"\n                ")])]),a("div",{staticClass:"text-left"},[a("small",{staticClass:"q-caption col text-faded"},[a("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_available",color:"positive"}}),t._v("\n                  "+t._s(t._f("numero")(e.verde,0))),a("br"),a("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_note",color:"amber"}}),t._v("\n                  "+t._s(t._f("numero")(e.amarelo,0))),a("br"),a("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_busy",color:"negative"}}),t._v("\n                  "+t._s(t._f("numero")(e.vermelho,0))+"\n                ")],1)])])}),a("div",{staticClass:"row text-weight-bold text-right q-mt-sm q-pb-none"},[a("div",[a("small",{staticClass:"q-body-2 text-tertiary text-weight-regular q-block q-mr-sm q-pa-none",staticStyle:{display:"block"}},[t._v("\n                  PME (Dias)\n                  "),a("q-tooltip",[t._v("\n                    Prazo Médio de Entrega\n                  ")])],1),a("div",{staticClass:"float-right q-headline text-weight-bold text-right text-primary q-mt-sm q-mr-sm q-pb-none"},[t._v("\n                  "+t._s(t._f("numero")(t.dados["empresa"].envelope.pme,0))+"\n                ")])])])],2)]):t._e()],1)],1):t._e(),a("div",{staticClass:"col-6 col-lg-3"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-main",{staticClass:"d-flex full-height column"},[a("q-card-main",{staticClass:"q-pa-none text-tertiary text-left"},[t._v("\n            Custo\n          ")]),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasEsteAno?a("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-left text-blue-8 q-px-none"},[t._v("\n            "+t._s(t._f("numero")(((t.dados["empresa"]||{}).vendasEsteAno||{}).custo,2))+"\n            "),a("q-btn",{staticClass:"no-shadow",staticStyle:{float:"right"},attrs:{dense:"",round:"",icon:"mdi-bell",color:t.percentualCustoRelAnoAnterior>=0?"positive":"negative"}})],1):t._e(),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasAnoAnterior?a("small",{class:t.percentualCustoRelAnoAnterior>=0?"text-positive":"text-negative"},[a("span",{staticClass:"text-tertiary"},[t._v("\n              "+t._s(t._f("numero")(t.dados["empresa"].vendasAnoAnterior.custo,2))+"\n            ")]),t._v("\n            (Δ "+t._s(t._f("numero")(t.percentualCustoRelAnoAnterior,2))+"%)\n            "),a("br")]):t._e()],1)],1)],1),a("div",{staticClass:"col-6 col-lg-3"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-main",{staticClass:"d-flex full-height column"},[a("q-card-main",{staticClass:"q-pa-none text-tertiary text-left"},[t._v("\n            Desconto\n          ")]),!t.carregando&&t.dados["empresa"].vendasEsteAno?a("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-left text-blue-8 q-px-none"},[t._v("\n            "+t._s(t._f("numero")(t.dados["empresa"].vendasEsteAno.desconto,2))+"\n            "),a("q-btn",{staticClass:"no-shadow",staticStyle:{float:"right"},attrs:{dense:"",round:"",icon:"mdi-bell",color:t.percentualDescontoRelAnoAnterior>=0?"positive":"negative"}})],1):t._e(),!t.carregando&&t.dados["empresa"].vendasAnoAnterior?a("small",{class:t.percentualDescontoRelAnoAnterior>=0?"text-positive":"text-negative"},[a("span",{staticClass:"text-tertiary"},[t._v("\n              "+t._s(t._f("numero")(t.dados["empresa"].vendasAnoAnterior.desconto,2))+"\n            ")]),t._v("\n            (Δ "+t._s(t._f("numero")(t.percentualDescontoRelAnoAnterior,2))+"%)\n            "),a("br")]):t._e()],1)],1)],1),a("div",{staticClass:"col-6 col-lg-3"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-main",{staticClass:"d-flex full-height column"},[a("q-card-main",{staticClass:"q-pa-none text-tertiary text-left"},[t._v("\n            Margem de Lucro\n          ")]),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasEsteAno?a("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-left text-blue-8 q-px-none"},[t._v("\n            "+t._s(t._f("numero")(((t.dados["empresa"]||{}).vendasEsteAno||{}).margemLucro,2))+"\n            "),a("q-btn",{staticClass:"no-shadow",staticStyle:{float:"right"},attrs:{dense:"",round:"",icon:"mdi-bell",color:t.percentualMargemLucroRelAnoAnterior>=0?"positive":"negative"}})],1):t._e(),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasAnoAnterior?a("small",{class:t.percentualMargemLucroRelAnoAnterior>=0?"text-positive":"text-negative"},[a("span",{staticClass:"text-tertiary"},[t._v("\n              "+t._s(t._f("numero")(t.dados["empresa"].vendasAnoAnterior.margemLucro,2))+"\n            ")]),t._v("\n            (Δ "+t._s(t._f("numero")(t.percentualMargemLucroRelAnoAnterior,2))+"%)\n            "),a("br")]):t._e()],1)],1)],1),a("div",{staticClass:"col-6 col-lg-3"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-main",{staticClass:"d-flex full-height column"},[a("q-card-main",{staticClass:"q-pa-none text-tertiary text-left"},[t._v("\n            Preço Médio\n          ")]),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasEsteAno?a("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-left text-blue-8 q-px-none"},[t._v("\n            "+t._s(t._f("numero")(((t.dados["empresa"]||{}).vendasEsteAno||{}).precoMedio,2))+"\n            "),a("q-btn",{staticClass:"no-shadow",staticStyle:{float:"right"},attrs:{dense:"",round:"",icon:"mdi-bell",color:t.percentualPrecoMedioRelAnoAnterior>=0?"positive":"negative"}})],1):t._e(),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasAnoAnterior?a("small",{class:t.percentualPrecoMedioRelAnoAnterior>=0?"text-positive":"text-negative"},[a("span",{staticClass:"text-tertiary"},[t._v("\n              "+t._s(t._f("numero")(t.dados["empresa"].vendasAnoAnterior.precoMedio,2))+"\n            ")]),t._v("\n            (Δ "+t._s(t._f("numero")(t.percentualPrecoMedioRelAnoAnterior,2))+"%)\n            "),a("br")]):t._e()],1)],1)],1),a("div",{staticClass:"col-6 col-lg-3"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-main",{staticClass:"d-flex full-height column"},[a("q-card-main",{staticClass:"q-pa-none text-tertiary text-left"},[t._v("\n            Quantidade PDV\n          ")]),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasEsteAno?a("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-left text-blue-8 q-px-none"},[t._v("\n            "+t._s(t._f("numero")(((t.dados["empresa"]||{}).vendasEsteAno||{}).qtdePDV,2))+"\n            "),a("q-btn",{staticClass:"no-shadow",staticStyle:{float:"right"},attrs:{dense:"",round:"",icon:"mdi-bell",color:t.percentualQtdePDVRelAnoAnterior>=0?"positive":"negative"}})],1):t._e(),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasAnoAnterior?a("small",{class:t.percentualQtdePDVRelAnoAnterior>=0?"text-positive":"text-negative"},[a("span",{staticClass:"text-tertiary"},[t._v("\n              "+t._s(t._f("numero")(t.dados["empresa"].vendasAnoAnterior.qtdePDV,2))+"\n            ")]),t._v("\n            (Δ "+t._s(t._f("numero")(t.percentualQtdePDVRelAnoAnterior,2))+"%)\n            "),a("br")]):t._e()],1)],1)],1),a("div",{staticClass:"col-6 col-lg-3"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-main",{staticClass:"d-flex full-height column"},[a("q-card-main",{staticClass:"q-pa-none text-tertiary text-left"},[t._v("\n            Quantidade\n          ")]),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasEsteAno?a("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-left text-blue-8 q-px-none"},[t._v("\n            "+t._s(t._f("numero")(((t.dados["empresa"]||{}).vendasEsteAno||{}).quantidade,2))+"\n            "),a("q-btn",{staticClass:"no-shadow",staticStyle:{float:"right"},attrs:{dense:"",round:"",icon:"mdi-bell",color:t.percentualQuantidadeRelAnoAnterior>=0?"positive":"negative"}})],1):t._e(),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasAnoAnterior?a("small",{class:t.percentualQuantidadeRelAnoAnterior>=0?"text-positive":"text-negative"},[a("span",{staticClass:"text-tertiary"},[t._v("\n              "+t._s(t._f("numero")(t.dados["empresa"].vendasAnoAnterior.quantidade,2))+"\n            ")]),t._v("\n            (Δ "+t._s(t._f("numero")(t.percentualQuantidadeRelAnoAnterior,2))+"%)\n            "),a("br")]):t._e()],1)],1)],1),a("div",{staticClass:"col-6 col-lg-3"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-main",{staticClass:"d-flex full-height column"},[a("q-card-main",{staticClass:"q-pa-none text-tertiary text-left"},[t._v("\n            Ticket Médio\n          ")]),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasEsteAno?a("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-left text-blue-8 q-px-none"},[t._v("\n            "+t._s(t._f("numero")(((t.dados["empresa"]||{}).vendasEsteAno||{}).ticketMedio,2))+"\n            "),a("q-btn",{staticClass:"no-shadow",staticStyle:{float:"right"},attrs:{dense:"",round:"",icon:"mdi-bell",color:t.percentualTicketMedioRelAnoAnterior>=0?"positive":"negative"}})],1):t._e(),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasAnoAnterior?a("small",{class:t.percentualTicketMedioRelAnoAnterior>=0?"text-positive":"text-negative"},[a("span",{staticClass:"text-tertiary"},[t._v("\n              "+t._s(t._f("numero")(t.dados["empresa"].vendasAnoAnterior.ticketMedio,2))+"\n            ")]),t._v("\n            (Δ "+t._s(t._f("numero")(t.percentualTicketMedioRelAnoAnterior,2))+"%)\n            "),a("br")]):t._e()],1)],1)],1),a("div",{staticClass:"col-6 col-lg-3"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-main",{staticClass:"d-flex full-height column"},[a("q-card-main",{staticClass:"q-pa-none text-tertiary text-left"},[t._v("\n            Valor Bruto\n          ")]),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasEsteAno?a("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-left text-blue-8 q-px-none"},[t._v("\n            "+t._s(t._f("numero")(((t.dados["empresa"]||{}).vendasEsteAno||{}).valorBruto,2))+"\n            "),a("q-btn",{staticClass:"no-shadow",staticStyle:{float:"right"},attrs:{dense:"",round:"",icon:"mdi-bell",color:t.percentualValorBrutoRelAnoAnterior>=0?"positive":"negative"}})],1):t._e(),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasAnoAnterior?a("small",{class:t.percentualValorBrutoRelAnoAnterior>=0?"text-positive":"text-negative"},[a("span",{staticClass:"text-tertiary"},[t._v("\n              "+t._s(t._f("numero")(t.dados["empresa"].vendasAnoAnterior.valorBruto,2))+"\n            ")]),t._v("\n            (Δ "+t._s(t._f("numero")(t.percentualValorBrutoRelAnoAnterior,2))+"%)\n            "),a("br")]):t._e()],1)],1)],1),a("div",{staticClass:"col-6 col-lg-3"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-main",{staticClass:"d-flex full-height column"},[a("q-card-main",{staticClass:"q-pa-none text-tertiary text-left"},[t._v("\n            Valor Líquido\n          ")]),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasEsteAno?a("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-left text-blue-8 q-px-none"},[t._v("\n            "+t._s(t._f("numero")(((t.dados["empresa"]||{}).vendasEsteAno||{}).valorLiquido,2))+"\n            "),a("q-btn",{staticClass:"no-shadow",staticStyle:{float:"right"},attrs:{dense:"",round:"",icon:"mdi-bell",color:t.percentualValorLiquidoRelAnoAnterior>=0?"positive":"negative"}})],1):t._e(),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasAnoAnterior?a("small",{class:t.percentualValorLiquidoRelAnoAnterior>=0?"text-positive":"text-negative"},[a("span",{staticClass:"text-tertiary"},[t._v("\n              "+t._s(t._f("numero")(t.dados["empresa"].vendasAnoAnterior.valorLiquido,2))+"\n            ")]),t._v("\n            (Δ "+t._s(t._f("numero")(t.percentualValorLiquidoRelAnoAnterior,2))+"%)\n            "),a("br")]):t._e()],1)],1)],1),a("div",{staticClass:"col-6 col-lg-3"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-main",{staticClass:"d-flex full-height column"},[a("q-card-main",{staticClass:"q-pa-none text-tertiary text-left"},[t._v("\n            Valor Margem de Lucro\n          ")]),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasEsteAno?a("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-left text-blue-8 q-px-none"},[t._v("\n            "+t._s(t._f("numero")(((t.dados["empresa"]||{}).vendasEsteAno||{}).valorMargemLucro,2))+"\n            "),a("q-btn",{staticClass:"no-shadow",staticStyle:{float:"right"},attrs:{dense:"",round:"",icon:"mdi-bell",color:t.percentualValorMargemLucroRelAnoAnterior>=0?"positive":"negative"}})],1):t._e(),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].vendasAnoAnterior?a("small",{class:t.percentualValorMargemLucroRelAnoAnterior>=0?"text-positive":"text-negative"},[a("span",{staticClass:"text-tertiary"},[t._v("\n              "+t._s(t._f("numero")(t.dados["empresa"].vendasAnoAnterior.valorMargemLucro,2))+"\n            ")]),t._v("\n            (Δ "+t._s(t._f("numero")(t.percentualValorMargemLucroRelAnoAnterior,2))+"%)\n            "),a("br")]):t._e()],1)],1)],1),a("div",{staticClass:"col-12"},[a("div",[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-title",{staticClass:"text-tertiary q-title q-pb-sm"},[t._v("Estoque")]),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].estoque?a("q-card-main",[a("grafico-barras",{staticClass:"col",attrs:{dados:t.estoque.grafico,opcoes:t.estoque.grafico.cfg}})],1):t._e()],1)],1),a("div",[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].estoque?a("q-card-main",[a("div",{staticClass:"row justify-around"},[a("div",{staticClass:"q-headline text-weight-bold text-center q-mt-sm q-pb-none",staticStyle:{"line-height":"22px"}},[a("div",{staticClass:"text-primary"},[t._v("\n                  "+t._s(t._f("numero")(t.dados["empresa"].estoque.estoqueFinal,2))+"\n                ")]),a("small",{staticClass:"q-body-2 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",staticStyle:{display:"block"}},[t._v("\n                  Estoque Final\n                ")])]),a("div",{staticClass:"q-body-2 text-weight-bolder text-center q-mt-sm q-pb-none",staticStyle:{"line-height":"22px"}},[a("div",{staticClass:"text-faded"},[t._v("\n                  /\n                  "),a("span",{staticStyle:{"margin-left":"100px"}},[t._v("(")])])]),a("div",{staticClass:"q-headline text-weight-bold text-center q-mt-sm q-pb-none",staticStyle:{"line-height":"22px"}},[a("div",{staticClass:"text-primary"},[t._v("\n                  "+t._s(t._f("numero")(t.dados["empresa"].estoque.cmv,2))+"\n                ")]),a("small",{staticClass:"q-body-2 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",staticStyle:{display:"block"}},[t._v("\n                  CMV\n                ")])]),a("div",{staticClass:"q-body-2 text-weight-bolder text-center q-mt-sm q-pb-none",staticStyle:{"line-height":"22px"}},[a("div",{staticClass:"text-faded"},[t._v("\n                  /\n                ")])]),a("div",{staticClass:"q-headline text-weight-bold text-center q-mt-sm q-pb-none",staticStyle:{"line-height":"22px"}},[a("div",{staticClass:"text-primary"},[t._v("\n                  "+t._s(t._f("numero")(t.dados["empresa"].estoque.diasT,0))+"\n                ")]),a("small",{staticClass:"q-body-2 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",staticStyle:{display:"block"}},[t._v("\n                  Dia(s) Trabalhado(s)\n                ")])]),a("div",{staticClass:"q-body-2 text-weight-bolder text-center q-mt-sm q-pb-none",staticStyle:{"line-height":"22px"}},[a("div",{staticClass:"text-faded"},[a("span",{staticStyle:{"margin-right":"100px"}},[t._v(")")]),t._v("\n                  =\n                ")])]),a("div",{staticClass:"q-headline text-weight-bold text-center q-mt-sm q-pb-none",staticStyle:{"line-height":"22px"}},[a("div",{staticClass:"text-primary"},[t._v("\n                  "+t._s(t._f("numero")(t.dados["empresa"].estoque.dias,1))+"\n                ")]),a("small",{staticClass:"q-body-2 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",staticStyle:{display:"block"}},[t._v("\n                  Dia(s)\n                ")])])])]):t._e()],1)],1)]),a("div",{staticClass:"col-12"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-title",{staticClass:"text-tertiary q-title q-pb-sm"},[t._v("Público Alvo")]),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].venda?a("q-card-main",{staticClass:"row"},[a("grafico-barras",{staticClass:"col-12 col-md-6",attrs:{dados:t.publicoAlvo.genero.graficoBarras,opcoes:t.publicoAlvo.genero.graficoBarras.cfg}}),a("grafico-pizza",{staticClass:"col-12 col-md-3",attrs:{dados:t.publicoAlvo.genero.graficoPizza,opcoes:t.publicoAlvo.genero.graficoPizza.cfg}}),a("grafico-pizza",{staticClass:"col-12 col-md-3",attrs:{dados:t.publicoAlvo.idade.graficoPizza,opcoes:t.publicoAlvo.idade.graficoPizza.cfg}})],1):t._e()],1)],1),a("div",{staticClass:"col-12"},[a("q-card",{staticClass:"fit no-shadow",attrs:{inline:"",color:"white"}},[a("q-card-title",{staticClass:"text-tertiary q-title q-pb-sm"},[t._v("Lucro / Prejuízo")]),!t.carregando&&t.dados["empresa"]&&t.dados["empresa"].receitasDespesas?a("q-card-main",{staticClass:"row"},[a("grafico-barras",{staticClass:"col",attrs:{dados:t.receitasDespesas,opcoes:t.receitasDespesas.cfg}})],1):t._e()],1)],1)])])},r=[];s._withStripped=!0;a("55dd");var o=a("b258"),i=a("64f5"),n=a("8149"),l=a("ed08"),d={components:{GraficoBarras:o["a"],GraficoPizza:i["a"]},computed:{envelopes:function(){var t=this.dados["empresa"].envelopes;return t.sort(function(t,e){return t.ordem<e.ordem?-1:1}),t},estoque:function(){return{grafico:{labels:["Estoque"],datasets:[{type:"bar",label:"Inicial",borderColor:"rgb(54, 162, 235)",backgroundColor:"rgba(54, 162, 235, 0.75)",borderWidth:2,fill:!1,data:[this.dados["empresa"].estoque.estoqueInicial]},{label:"Final",type:"bar",backgroundColor:"rgba(75, 192, 192, 0.75)",borderColor:"rgb(75, 192, 192)",borderWidth:1,data:[this.dados["empresa"].estoque.estoqueFinal]}],cfg:{responsive:!0,maintainAspectRatio:!1,legend:{position:"top"}}}}},percentualCustoRelAnoAnterior:function(){return((this.dados["empresa"]||{}).percentualRelAnoAnterior||{}).custo||0},percentualDescontoRelAnoAnterior:function(){return((this.dados["empresa"]||{}).percentualRelAnoAnterior||{}).desconto||0},percentualMargemLucroRelAnoAnterior:function(){return((this.dados["empresa"]||{}).percentualRelAnoAnterior||{}).margemLucro||0},percentualPrecoMedioRelAnoAnterior:function(){return((this.dados["empresa"]||{}).percentualRelAnoAnterior||{}).precoMedio||0},percentualQtdePDVRelAnoAnterior:function(){return((this.dados["empresa"]||{}).percentualRelAnoAnterior||{}).qtdePDV||0},percentualQuantidadeRelAnoAnterior:function(){return((this.dados["empresa"]||{}).percentualRelAnoAnterior||{}).quantidade||0},percentualTicketMedioRelAnoAnterior:function(){return((this.dados["empresa"]||{}).percentualRelAnoAnterior||{}).ticketMedio||0},percentualValorBrutoRelAnoAnterior:function(){return((this.dados["empresa"]||{}).percentualRelAnoAnterior||{}).valorBruto||0},percentualValorLiquidoRelAnoAnterior:function(){return((this.dados["empresa"]||{}).percentualRelAnoAnterior||{}).valorLiquido||0},percentualValorMargemLucroRelAnoAnterior:function(){return((this.dados["empresa"]||{}).percentualRelAnoAnterior||{}).valorMargemLucro||0},publicoAlvo:function(){return{genero:{graficoBarras:{labels:this.dados["empresa"].venda.sexoFaixaEtaria.map(function(t){return t.faixaEtaria}),datasets:[{label:this.dados["empresa"].venda.sexoFaixaEtaria.map(function(t){return t.sexo}),type:"bar",backgroundColor:"rgba(75, 192, 192, 0.5)",borderColor:"rgb(75, 192, 192)",borderWidth:1,data:this.dados["empresa"].venda.sexoFaixaEtaria.map(function(t){return t.venda})}],cfg:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]},legend:{position:"top"}}},graficoPizza:{type:"pie",labels:this.dados["empresa"].venda.sexo.map(function(t){return t.sexo}),datasets:[{label:"Gênero",backgroundColor:["rgb(75, 192, 192)","rgb(219, 40, 40)"],data:this.dados["empresa"].venda.sexo.map(function(t){return t.venda})}],cfg:{responsive:!0}}},idade:{graficoPizza:{type:"pie",labels:this.dados["empresa"].venda.faixaEtaria.map(function(t){return t.faixaEtaria}),datasets:[{label:"Idade",backgroundColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)"],data:this.dados["empresa"].venda.faixaEtaria.map(function(t){return t.venda})}],cfg:{responsive:!0}}}}},receitasDespesas:function(){return{labels:["Período Atual","Período Ano Anterior"],datasets:[{type:"line",label:"Ponto de Equilíbrio",borderColor:"rgb(54, 162, 235)",backgroundColor:"rgba(219, 40, 40, 0)",borderWidth:1,data:[(this.dados["empresa"].receitasDespesas||{}).periodoAtualPontoEquilibrio,(this.dados["empresa"].receitasDespesas||{}).periodoAnoAnteriorPontoEquilibrio]},{label:"Receita",type:"bar",stack:"Stack 1",backgroundColor:"rgba(219, 40, 40, 0.75)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[(this.dados["empresa"].receitasDespesas||{}).periodoAtualReceita,(this.dados["empresa"].receitasDespesas||{}).periodoAnoAnteriorReceita]},{label:"Despesa Variável - Projeção",type:"bar",stack:"Stack 2",backgroundColor:"rgba(219, 40, 40, 0.5)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[(this.dados["empresa"].receitasDespesas||{}).periodoAtualDespVariavelProjecao,(this.dados["empresa"].receitasDespesas||{}).periodoAnoAnteriorDespVariavelProjecao]},{label:"Receita - Projeção",type:"bar",stack:"Stack 3",backgroundColor:"rgba(219, 40, 40, 0.25)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[(this.dados["empresa"].receitasDespesas||{}).periodoAtualReceitaProjecao,(this.dados["empresa"].receitasDespesas||{}).periodoAnoAnteriorReceitaProjecao]},{label:"Lucro x Prejuízo",type:"bar",stack:"Stack 4",backgroundColor:"rgba(54, 162, 235, 0.75)",borderColor:"rgb(54, 162, 235)",borderWidth:1,data:[(this.dados["empresa"].receitasDespesas||{}).periodoAtualLucroPrejuizo,(this.dados["empresa"].receitasDespesas||{}).periodoAnoAnteriorLucroPrejuizo]},{label:"Despesa Variável",type:"bar",stack:"Stack 5",backgroundColor:"rgba(54, 162, 235, 0.5)",borderColor:"rgb(54, 162, 235)",borderWidth:1,data:[(this.dados["empresa"].receitasDespesas||{}).periodoAtualDespVariavel,(this.dados["empresa"].receitasDespesas||{}).periodoAnoAnteriorDespVariavel]},{label:"Despesa Fixa",type:"bar",stack:"Stack 6",backgroundColor:"rgba(54, 162, 235, 0)",borderColor:"rgba(54, 162, 235, 0)",data:[(this.dados["empresa"].receitasDespesas||{}).periodoAtualDespFixa,(this.dados["empresa"].receitasDespesas||{}).periodoAnoAnteriorDespFixa]}],cfg:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]},legend:{position:"top"}}}}},data:function(){return{permissoes:{},sistemaPai:""}},props:{carregando:{default:!0,required:!0,type:Boolean},dados:{default:function(){return{}},required:!0,type:Object}},mounted:function(){var t=this;this.permissoes={envelope:!1},n["a"].permissao.objeto("cockpit/envelope").then(function(e){t.permissoes.envelope=e}),this.sistemaPai=Object(l["sistemaPai"])()}},c=d,p=(a("8f38"),a("2877")),m=Object(p["a"])(c,s,r,!1,null,"2225b4b1",null);m.options.__file="QgQg.vue";e["default"]=m.exports},"74d6":function(t,e,a){},"8f38":function(t,e,a){"use strict";var s=a("74d6"),r=a.n(s);r.a},b258:function(t,e,a){"use strict";var s,r,o=a("1fca"),i={extends:o["a"],props:{dados:{default:null,type:Object},opcoes:{default:null,type:Object}},mounted:function(){this.renderChart(this.dados,this.opcoes)}},n=i,l=a("2877"),d=Object(l["a"])(n,s,r,!1,null,null,null);d.options.__file="GraficoBarras.vue";e["a"]=d.exports}}]);