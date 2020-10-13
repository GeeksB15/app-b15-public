(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["16b38f80"],{"04ea":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"Qg2Dashboard"},[s("q-card",{staticClass:" shadow-3 row no-shadow"},[s("div",{staticClass:"col-12 q-pt-md"},[s("q-toolbar",{staticClass:"no-shadow q-pa-none",attrs:{"text-color":"black",color:"transparent"}},[s("q-toolbar-title",{staticClass:"q-pa-none"},[s("div",{staticClass:"filters row q-pa-sm q-ma-md gutter-x-sm bg-white",staticStyle:{"border-radius":"5px","min-height":"50px"}},[s("q-btn",{staticClass:"no-shadow",attrs:{icon:"date_range",round:"",color:"faded"}}),s("q-select",{staticClass:"q-mx-sm q-body-1 col-12 col-lg",attrs:{placeholder:"Vencimento",options:t.selectDataTipo},model:{value:t.selectedDataTipo,callback:function(a){t.selectedDataTipo=a},expression:"selectedDataTipo"}}),s("q-btn",{staticClass:"no-shadow",attrs:{icon:"keyboard_arrow_left",round:"",color:"grey-5"}}),s("q-datetime",{staticClass:"col q-mx-sm",attrs:{type:"date"},model:{value:t.dataIni,callback:function(a){t.dataIni=a},expression:"dataIni"}}),s("label",{staticClass:"q-mx-md col-auto"},[t._v("até")]),s("q-datetime",{staticClass:"col q-mx-sm",attrs:{type:"date"},model:{value:t.dataFin,callback:function(a){t.dataFin=a},expression:"dataFin"}}),s("q-btn",{staticClass:"no-shadow",attrs:{icon:"keyboard_arrow_right",round:"",color:"grey-5"}})],1)])],1)],1)]),s("grid-layout",{attrs:{layout:t.layout,"col-num":12,"row-height":30,"is-draggable":t.draggable,"is-resizable":t.resizable,margin:[30,30],"vertical-compact":!0,"use-css-transforms":!0}},t._l(t.layout,function(t){return s("grid-item",{key:t.i,attrs:{x:t.x,y:t.y,w:t.w,h:t.h,i:t.i,"drag-allow-from":".vue-draggable-handle","drag-ignore-from":".no-drag"}},[s("q-card",{staticClass:"text bg-white no-shadow row borderRadiusBottom"},[s("div",{staticClass:"vue-draggable-handle"}),s("div",{staticClass:"no-drag col-12"},[s(t.i,{tag:"component"})],1)])],1)}))],1)},o=[];e._withStripped=!0;var r=s("7be8"),i=s.n(r),l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"q-px-md q-pb-md faded "},[s("q-toolbar",{staticClass:"q-ma-none",attrs:{color:"transparent"}},[s("q-toolbar-title",{staticClass:"text-faded q-title q-pa-none"},[t._v("Vendas x Margem\n      "),s("section")])],1),s("div",{staticClass:"row"},[s("scatter-barras",{staticClass:"col",attrs:{dados:t.graficoFluxo,opcoes:t.graficoOpcoesFluxo}})],1)],1)},c=[];l._withStripped=!0;var n,d,b=s("1fca"),p={extends:b["c"],props:{dados:{default:null,type:Object},opcoes:{default:null,type:Object}},mounted:function(){this.renderChart(this.dados,this.opcoes)}},g=p,h=s("2877"),u=Object(h["a"])(g,n,d,!1,null,null,null);u.options.__file="ScatterBarras.vue";var v=u.exports,x={components:{ScatterBarras:v},data:function(){return{chartColors:{red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(75, 192, 192)",blue:"rgb(54, 162, 235)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},graficoFluxo:{datasets:[{label:"Loja 1",data:[{x:27,y:5e4}],pointRadius:[13],borderColor:"#2196f3",backgroundColor:"#2196f3"},{label:"Loja 2",data:[{x:37,y:29e3}],pointRadius:[11],borderColor:"rgb(153, 102, 255)",backgroundColor:"rgb(153, 102, 255)"},{label:"Loja 3",data:[{x:42,y:6e4}],pointRadius:[25],borderColor:"rgb(75, 192, 192)",backgroundColor:"rgb(75, 192, 192)"},{label:"Loja 4",data:[{x:28,y:75e3}],pointRadius:[21],borderColor:"rgb(255, 165, 0)",backgroundColor:"rgb(255, 165, 0)"}]},graficoOpcoesFluxo:{scales:{xAxes:[{type:"linear",position:"bottom"}]},responsive:!0,maintainAspectRatio:!1}}}},m=x,C=(s("d6cf"),Object(h["a"])(m,l,c,!1,null,null,null));C.options.__file="Qg2DashboardVendas.vue";var q=C.exports,f=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"q-px-md q-pb-md azul faded"},[s("q-toolbar",{staticClass:"q-ma-none",attrs:{color:"transparent"}},[s("q-toolbar-title",{staticClass:"text-faded q-title q-pa-none"},[t._v("Envelopes")]),s("q-btn",{attrs:{rounded:"",flat:"",dense:"",color:"faded",icon:"remove_red_eye"}})],1),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6 col-lg blocks"},[s("q-card-main",{staticClass:"q-pa-none text-tertiary text-right"},[t._v("\n        Processando\n      ")]),s("div",{staticClass:"row"},[s("small",{staticClass:"q-caption col text-faded",staticStyle:{"line-height":"12px"}},[s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_available",color:"positive"}}),t._v("14"),s("br"),s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_note",color:"amber"}}),t._v("30"),s("br"),s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_busy",color:"negative"}}),t._v("20\n          ")],1),s("div",{staticClass:"col q-display-1 text-weight-bold text-right text-primary"},[t._v("64")])])],1),s("div",{staticClass:"col-12 col-md-6 col-lg blocks"},[s("q-card-main",{staticClass:"q-pa-none text-tertiary text-right"},[t._v("\n        Outros\n      ")]),s("div",{staticClass:"row"},[s("small",{staticClass:"q-caption col",staticStyle:{"line-height":"12px"}},[s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_available",color:"positive"}}),t._v("5"),s("br"),s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_note",color:"amber"}}),t._v("5"),s("br"),s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_busy",color:"negative"}}),t._v("5\n          ")],1),s("div",{staticClass:"col q-display-1 text-weight-bold text-right text-primary"},[t._v("15")])])],1),s("div",{staticClass:"col-12 col-md-6 col-lg blocks"},[s("q-card-main",{staticClass:"q-pa-none text-tertiary text-right"},[t._v("\n        Pronto para Entrega\n      ")]),s("div",{staticClass:"row"},[s("small",{staticClass:"q-caption col text-faded",staticStyle:{"line-height":"12px"}},[s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_available",color:"positive"}}),t._v("14"),s("br"),s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_note",color:"amber"}}),t._v("2"),s("br"),s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_busy",color:"negative"}}),t._v("20\n          ")],1),s("div",{staticClass:"col q-display-1 text-weight-bold text-right text-primary"},[t._v("36")])])],1),s("div",{staticClass:"col-12 col-md-6 col-lg blocks"},[s("q-card-main",{staticClass:"q-pa-none text-tertiary text-right"},[t._v("\n        Cliente Informado\n      ")]),s("div",{staticClass:"row"},[s("small",{staticClass:"q-caption col text-faded",staticStyle:{"line-height":"12px"}},[s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_available",color:"positive"}}),t._v("4"),s("br"),s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_note",color:"amber"}}),t._v("7"),s("br"),s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_busy",color:"negative"}}),t._v("3\n          ")],1),s("div",{staticClass:"col q-display-1 text-weight-bold text-right text-primary"},[t._v("14")])])],1),s("div",{staticClass:"col-12 col-md-6 col-lg blocks"},[s("q-card-main",{staticClass:"q-pa-none text-tertiary text-right"},[t._v("\n        Entregues\n      ")]),s("div",{staticClass:"row"},[s("small",{staticClass:"q-caption col text-faded",staticStyle:{"line-height":"12px"}},[s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_available",color:"positive"}}),t._v("1"),s("br"),s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_note",color:"amber"}}),t._v("2"),s("br"),s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"event_busy",color:"negative"}}),t._v("1\n          ")],1),s("div",{staticClass:"col q-display-1 text-weight-bold text-right text-primary"},[t._v("4")])])],1),s("div",{staticClass:"col-12 col-md-6 col-lg blocks"},[s("q-card-main",{staticClass:"q-pa-none text-tertiary text-right q-mx-sm"},[t._v("\n        TME (Dias)\n      ")]),s("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-right text-primary"},[t._v("\n\n        15\n      ")])],1)])],1)},y=[];f._withStripped=!0;var _={},w=_,k=(s("41da"),Object(h["a"])(w,f,y,!1,null,null,null));k.options.__file="Qg2DashboardPagar.vue";var j=k.exports,S=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"q-px-md q-pb-md faded"},[s("q-toolbar",{staticClass:"q-ma-none",attrs:{color:"transparent"}},[s("q-toolbar-title",{staticClass:"text-faded q-title q-pa-none"},[t._v("Lucro / Prejuizo\n      "),s("section")])],1),s("div",{staticClass:"row"},[s("grafico-barras",{staticClass:"col",attrs:{dados:t.graficoFluxo,opcoes:t.graficoOpcoesFluxo}})],1)],1)},F=[];S._withStripped=!0;var O=s("b258"),L={components:{GraficoBarras:O["a"]},data:function(){return{graficoFluxo:{labels:["Loja 1","Loja 2","Loja 3","Loja 4"],datasets:[{type:"line",label:"Equilibrio",borderColor:"rgb(54, 162, 235)",backgroundColor:"rgba(219, 40, 40, 0)",borderWidth:1,data:[98148,84324,54285,139285]},{label:"Despesa Fixa",type:"bar",stack:"Stack 0",backgroundColor:"rgba(219, 40, 40, 0.75)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[26500,33200,22800,39e3]},{label:"Despesa Variavel",type:"bar",stack:"Stack 0",backgroundColor:"rgba(219, 40, 40, 0.5)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[13500,4070,25200,21e3]},{label:"Despesa Projeção",type:"bar",stack:"Stack 0",backgroundColor:"rgba(219, 40, 40, 0.25)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[27e3,8140,50400,42e3]},{label:"Venda",type:"bar",stack:"Stack 1",backgroundColor:"rgba(54, 162, 235, 0.75)",borderColor:"rgb(54, 162, 235)",borderWidth:1,data:[5e4,11e3,6e4,75e3]},{label:"Projeção",type:"bar",stack:"Stack 1",backgroundColor:"rgba(54, 162, 235, 0.5)",borderColor:"rgb(54, 162, 235)",borderWidth:1,data:[1e5,22e3,12e4,15e4]},{label:"",type:"bar",stack:"Stack 2",backgroundColor:"rgba(54, 162, 235, 0)",borderColor:"rgba(54, 162, 235, 0)",data:[67e3,0,98400,102e3]},{label:"Lucro",type:"bar",stack:"Stack 2",backgroundColor:"rgba(33, 186, 69, 0.5)",borderColor:"rgb(33, 186, 69)",borderWidth:1,data:[83e3,0,81600,123e3]},{label:"Prejuízo",type:"bar",stack:"Stack 2",backgroundColor:"rgba(33, 186, 69, 0.5)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[0,-10410,0,0]}]},graficoOpcoesFluxo:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]},legend:{position:"top"}}}}},z=L,D=(s("61fa"),Object(h["a"])(z,S,F,!1,null,null,null));D.options.__file="Qg2DashboardEquilibrio.vue";var E=D.exports,Q=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"q-px-md q-pb-md faded"},[s("q-toolbar",{staticClass:"q-ma-none",attrs:{color:"transparent"}},[s("q-toolbar-title",{staticClass:"text-faded q-title q-pa-none"},[t._v("Estoque\n      "),s("section")])],1),s("div",{staticClass:"row"},[s("grafico-barras",{staticClass:"col",attrs:{dados:t.graficoFluxo,opcoes:t.graficoOpcoesFluxo}})],1),s("q-toolbar",{staticClass:"q-ma-none",attrs:{color:"transparent"}},[s("q-toolbar-title",{staticClass:"text-faded q-title q-pa-none"},[t._v("Em dias\n      "),s("section")])],1),s("div",{staticClass:"row q-px-lg"},[s("div",{staticClass:"col-12 col-md-6 col-lg blocks azul"},[s("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-center text-primary"},[t._v("15      ")]),s("q-card-main",{staticClass:"q-pa-none text-tertiary text-center q-mx-sm"},[t._v("\n        loja 01\n      ")])],1),s("div",{staticClass:"col-12 col-md-6 col-lg blocks azul"},[s("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-center text-primary"},[t._v("360      ")]),s("q-card-main",{staticClass:"q-pa-none text-tertiary text-center q-mx-sm"},[t._v("\n        Loja 02\n      ")])],1),s("div",{staticClass:"col-12 col-md-6 col-lg blocks azul"},[s("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-center text-primary"},[t._v("47      ")]),s("q-card-main",{staticClass:"q-pa-none text-tertiary text-center q-mx-sm"},[t._v("\n        Loja 03\n      ")])],1),s("div",{staticClass:"col-12 col-md-6 col-lg blocks azul"},[s("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-center text-primary"},[t._v("92      ")]),s("q-card-main",{staticClass:"q-pa-none text-tertiary text-center q-mx-sm"},[t._v("\n        Loja 04\n      ")])],1)])],1)},P=[];Q._withStripped=!0;var R={components:{GraficoBarras:O["a"]},data:function(){return{graficoFluxo:{labels:["Loja 01","Loja 02","Loja 03","Loja 04"],datasets:[{type:"bar",label:"Inicial",borderColor:"rgb(54, 162, 235)",backgroundColor:"rgba(54, 162, 235, 0.75)",borderWidth:2,fill:!1,data:[115e3,15e4,12e4,13e4]},{label:"Final",type:"bar",backgroundColor:"rgba(75, 192, 192, 0.75)",borderColor:"rgb(75, 192, 192)",borderWidth:1,data:[117e3,165e3,135e3,112e3]}]},graficoOpcoesFluxo:{responsive:!0,maintainAspectRatio:!1,legend:{position:"top"}}}}},W=R,G=(s("cd8b"),Object(h["a"])(W,Q,P,!1,null,null,null));G.options.__file="Qg2DashboardEstoque.vue";var A=G.exports,I=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"q-px-md q-pb-md faded"},[s("q-toolbar",{staticClass:"q-ma-none",attrs:{color:"transparent"}},[s("q-toolbar-title",{staticClass:"text-faded q-title q-pa-none"},[t._v("Ticket Médio\n      "),s("section")])],1),s("div",{staticClass:"row"},[s("grafico-barras",{staticClass:"col-12 col-md-6",attrs:{dados:t.graficoFluxo,opcoes:t.graficoOpcoesFluxo}}),s("grafico-barras",{staticClass:"col-12 col-md-6",attrs:{dados:t.graficoFluxo2,opcoes:t.graficoOpcoesFluxo}})],1)],1)},T=[];I._withStripped=!0;var $={components:{GraficoBarras:O["a"]},data:function(){return{graficoFluxo:{labels:["Loja 01","Loja 02","Loja 03","Loja 04"],datasets:[{type:"bar",label:"Valor",borderColor:"rgb(54, 162, 235)",backgroundColor:"rgba(54, 162, 235, 0.75)",borderWidth:1,data:[42,72,86,65]}]},graficoFluxo2:{labels:["Loja 01","Loja 02","Loja 03","Loja 04"],datasets:[{label:"Quantidade",type:"bar",backgroundColor:"rgba(219, 40, 40, 0.75)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[42,72,86,65]}]},graficoOpcoesFluxo:{responsive:!0,maintainAspectRatio:!1,legend:{position:"top"}}}}},B=$,V=(s("6dca"),Object(h["a"])(B,I,T,!1,null,null,null));V.options.__file="Qg2DashboardTicket.vue";var M=V.exports,H=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"q-px-md q-pb-md faded"},[s("q-toolbar",{staticClass:"q-ma-none",attrs:{color:"transparent"}},[s("q-toolbar-title",{staticClass:"text-faded q-title q-pa-none"},[t._v("Média de vendas (dia)\n      "),s("section")])],1),s("div",{staticClass:"row"},[s("grafico-barras",{staticClass:"col-12",attrs:{dados:t.graficoFluxo,opcoes:t.graficoOpcoesFluxo}})],1)],1)},J=[];H._withStripped=!0;var K={components:{GraficoBarras:O["a"]},data:function(){return{graficoFluxo:{labels:["Loja 01","Loja 02","Loja 03","Loja 04"],datasets:[{type:"bar",label:"Valor",borderColor:"rgb(54, 162, 235)",backgroundColor:"rgba(54, 162, 235, 0.75)",borderWidth:1,data:[42,35,51,48]}]},graficoOpcoesFluxo:{responsive:!0,maintainAspectRatio:!1,legend:{position:"top"}}}}},N=K,U=(s("c804"),Object(h["a"])(N,H,J,!1,null,null,null));U.options.__file="Qg2DashboardMedia.vue";var X=U.exports,Y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"q-px-md q-pb-md faded"},[s("q-toolbar",{staticClass:"q-ma-none",attrs:{color:"transparent"}},[s("q-toolbar-title",{staticClass:"text-faded q-title q-pa-none"},[t._v("Público Alvo\n      "),s("section")])],1),s("div",{staticClass:"row"},[s("grafico-barras",{staticClass:"col-12 col-md-6",attrs:{dados:t.graficoFluxo,opcoes:t.graficoOpcoesFluxo}}),s("grafico-pizza",{staticClass:"col-12 col-md-3",attrs:{dados:t.graficoGenero,opcoes:t.graficoOpcoesPizza}}),s("grafico-pizza",{staticClass:"col-12 col-md-3",attrs:{dados:t.graficoIdade,opcoes:t.graficoOpcoesPizza}})],1)],1)},Z=[];Y._withStripped=!0;var tt=s("64f5"),at={components:{GraficoBarras:O["a"],GraficoPizza:tt["a"]},data:function(){return{graficoGenero:{type:"pie",labels:["Masculino","Feminino"],datasets:[{label:"Gênero",backgroundColor:["rgb(75, 192, 192)","rgb(219, 40, 40)"],data:[60,40]}]},graficoFluxo:{labels:["0 a 10","11 a 18","18 a 25","26 a 40","41 a 60","> 60"],datasets:[{label:"Masculino",type:"bar",backgroundColor:"rgba(75, 192, 192, 0.5)",borderColor:"rgb(75, 192, 192)",borderWidth:1,data:[60,35,74,81,35,40]},{label:"Feminino",type:"bar",backgroundColor:"rgba(219, 40, 40, 0.25)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[20,50,75,30,35,40]}]},graficoIdade:{type:"pie",labels:["0 a 10","11 a 18","18 a 25","26 a 40","41 a 60","> 60"],datasets:[{label:"Idade",backgroundColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)"],data:[5,10,15,30,20,20]}]},graficoOpcoesPizza:{responsive:!0},graficoOpcoesFluxo:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]},legend:{position:"top"}}}}},st=at,et=(s("a047"),Object(h["a"])(st,Y,Z,!1,null,null,null));et.options.__file="Qg2DashboardPublico.vue";var ot=et.exports,rt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"q-px-md q-pb-md faded"},[s("q-toolbar",{staticClass:"q-ma-none",attrs:{color:"transparent"}},[s("q-toolbar-title",{staticClass:"text-faded q-title q-pa-none"},[t._v("Financeiro")])],1),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6 col-lg blocks verde"},[s("q-card-main",{staticClass:"q-pa-none text-tertiary text-right q-mx-sm"},[t._v("\n        Recebido\n      ")]),s("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-right text-positive"},[s("div",{staticClass:"graph"},[s("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"10px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"8px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"17px"}})]),t._v("\n        15.320,00\n      ")])],1),s("div",{staticClass:"col-12 col-md-6 col-lg blocks vermelho"},[s("q-card-main",{staticClass:"q-pa-none text-tertiary text-right q-mx-sm"},[t._v("\n        Pago\n      ")]),s("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-right text-negative"},[s("div",{staticClass:"graph"},[s("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"10px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"8px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"17px"}})]),t._v("\n        12.290,00\n      ")])],1),s("div",{staticClass:"col-12 col-md-6 col-lg blocks azul"},[s("q-card-main",{staticClass:"q-pa-none text-tertiary text-right q-mx-sm"},[t._v("\n        Saldo (R$) disponivel\n      ")]),s("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-right text-primary"},[s("div",{staticClass:"graph"},[s("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"10px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"8px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"17px"}})]),t._v("\n        7.900,00\n      ")])],1),s("div",{staticClass:"col-12 col-md-6 col-lg blocks verde"},[s("q-card-main",{staticClass:"q-pa-none text-tertiary text-right q-mx-sm"},[t._v("\n        Receber\n      ")]),s("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-right text-positive"},[s("div",{staticClass:"graph"},[s("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"10px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"8px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"17px"}})]),t._v("\n        6.200,00\n      ")])],1),s("div",{staticClass:"col-12 col-md-6 col-lg blocks vermelho"},[s("q-card-main",{staticClass:"q-pa-none text-tertiary text-right q-mx-sm"},[t._v("\n        Pagar\n      ")]),s("q-toolbar-title",{staticClass:"q-display-1 text-weight-bold text-right text-negative"},[s("div",{staticClass:"graph"},[s("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"10px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"15px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"8px"}}),s("div",{staticClass:"graphbar",staticStyle:{height:"17px"}})]),t._v("\n        6.752,00\n      ")])],1)])],1)},it=[];rt._withStripped=!0;var lt={},ct=lt,nt=(s("22e5"),Object(h["a"])(ct,rt,it,!1,null,null,null));nt.options.__file="Qg2DashboardHoje.vue";var dt=nt.exports,bt={components:{GridLayout:i.a.GridLayout,GridItem:i.a.GridItem,Qg2DashboardVendas:q,Qg2DashboardPagar:j,Qg2DashboardEquilibrio:E,Qg2DashboardEstoque:A,Qg2DashboardTicket:M,Qg2DashboardMedia:X,Qg2DashboardPublico:ot,Qg2DashboardHoje:dt},data:function(){return{grupos:[],dataIni:"",dataFin:"",selectedDataTipo:"",selectDataTipo:[{label:"Vencimento",value:"goog"},{label:"Outro",value:"fb"}],layout:[],draggable:!0,resizable:!0,responsive:!0,mirrored:!0,index:0}},methods:{handleResize:function(){window.innerWidth<768?this.layout=[{x:0,y:0,w:12,h:9,i:dt},{x:0,y:9,w:12,h:9,i:q},{x:0,y:18,w:12,h:11,i:j},{x:0,y:29,w:12,h:9,i:E},{x:0,y:39,w:12,h:15,i:M},{x:0,y:54,w:12,h:8,i:X},{x:0,y:20,w:12,h:15,i:A},{x:0,y:70,w:12,h:17,i:ot}]:window.innerWidth<=997?this.layout=[{x:0,y:0,w:12,h:6,i:dt},{x:0,y:3,w:12,h:9,i:q},{x:0,y:10,w:12,h:6,i:j},{x:0,y:14,w:12,h:8,i:E},{x:0,y:20,w:12,h:8,i:M},{x:8,y:20,w:12,h:8,i:X},{x:8,y:28,w:12,h:12,i:A},{x:0,y:40,w:12,h:9,i:ot}]:this.layout=[{x:0,y:0,w:12,h:3,i:dt},{x:0,y:3,w:12,h:9,i:q},{x:0,y:10,w:12,h:3,i:j},{x:0,y:13,w:12,h:8,i:E},{x:0,y:20,w:8,h:9,i:M},{x:8,y:20,w:4,h:9,i:X},{x:0,y:28,w:12,h:11,i:A},{x:0,y:40,w:12,h:9,i:ot}]}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()}},pt=bt,gt=(s("e3ba"),Object(h["a"])(pt,e,o,!1,null,null,null));gt.options.__file="Qg2Dashboard.vue";a["default"]=gt.exports},"22e5":function(t,a,s){"use strict";var e=s("33ad"),o=s.n(e);o.a},"321e":function(t,a,s){},"33ad":function(t,a,s){},"41da":function(t,a,s){"use strict";var e=s("bcc6"),o=s.n(e);o.a},"61fa":function(t,a,s){"use strict";var e=s("b261"),o=s.n(e);o.a},"64f5":function(t,a,s){"use strict";var e,o,r=s("1fca"),i={extends:r["b"],props:{dados:{default:null,type:Object},opcoes:{default:null,type:Object}},watch:{dados:function(){this.renderChart(this.dados,this.opcoes)}},mounted:function(){this.renderChart(this.dados,this.opcoes)}},l=i,c=s("2877"),n=Object(c["a"])(l,e,o,!1,null,null,null);n.options.__file="GraficoPizza.vue";a["a"]=n.exports},"6dca":function(t,a,s){"use strict";var e=s("94d5"),o=s.n(e);o.a},8723:function(t,a,s){},"94d5":function(t,a,s){},a047:function(t,a,s){"use strict";var e=s("a352"),o=s.n(e);o.a},a352:function(t,a,s){},b258:function(t,a,s){"use strict";var e,o,r=s("1fca"),i={extends:r["a"],props:{dados:{default:null,type:Object},opcoes:{default:null,type:Object}},mounted:function(){this.renderChart(this.dados,this.opcoes)}},l=i,c=s("2877"),n=Object(c["a"])(l,e,o,!1,null,null,null);n.options.__file="GraficoBarras.vue";a["a"]=n.exports},b261:function(t,a,s){},b750:function(t,a,s){},bcc6:function(t,a,s){},c804:function(t,a,s){"use strict";var e=s("b750"),o=s.n(e);o.a},cd8b:function(t,a,s){"use strict";var e=s("321e"),o=s.n(e);o.a},d1bf:function(t,a,s){},d6cf:function(t,a,s){"use strict";var e=s("d1bf"),o=s.n(e);o.a},e3ba:function(t,a,s){"use strict";var e=s("8723"),o=s.n(e);o.a}}]);