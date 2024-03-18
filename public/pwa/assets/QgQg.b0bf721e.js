import{_ as b,o as i,d as c,x as e,Y as E,b3 as z,p as f,C as q,aB as A,f as s,cx as R,w as o,aK as d,e as l,i as h,t as r,l as n,s as u,E as g,D as v}from"./index.fd6a1d5c.js";import{C as y}from"./Chart.d4669a65.js";const L={name:"GraficoEstoque",props:{estoqueInicial:{type:Array,required:!0},estoqueFinal:{type:Array,required:!0}},data(){return{graficoFluxo:{type:"bar",data:{labels:["Estoque"],datasets:[{label:"Inicial",type:"bar",data:[this.estoqueInicial],borderColor:"#008ac8",backgroundColor:"rgba(0, 152, 219, 0.75)",borderWidth:3},{label:"Final",type:"bar",data:[this.estoqueFinal],backgroundColor:"rgba(0, 200,186, .5)",borderColor:"#00c8ba",borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1}}}},mounted(){const a=this.$refs.graficoEstoque;new y(a,this.graficoFluxo)}},F={style:{height:"300px"}},V={ref:"graficoEstoque"};function j(a,m,t,p,_,x){return i(),c("div",F,[e("canvas",V,null,512)])}var B=b(L,[["render",j]]);const M={name:"GraficoPublicoAlvoBar",props:{venda:{type:Object,required:!0}},data(){return this.labels=this.venda.sexoFaixaEtaria.filter(a=>{if(a.sexo.length>2)return a.sexo}),{graficoFluxo:{type:"bar",data:{labels:this.venda.sexoFaixaEtaria.map(a=>a.faixaEtaria),datasets:[{label:this.labels.map(a=>{if(a.sexo.length>2)return" "+a.sexo}),type:"bar",backgroundColor:"rgba(75, 192, 192, 0.5)",borderColor:"rgb(75, 192, 192)",borderWidth:1,data:this.venda.sexoFaixaEtaria.map(a=>a.venda)}]},options:{responsive:!0,maintainAspectRatio:!1}}}},mounted(){const a=this.$refs.graficoPublicoAlvoBar;new y(a,this.graficoFluxo)}},S={style:{height:"300px"}},W={ref:"graficoPublicoAlvoBar"};function Q(a,m,t,p,_,x){return i(),c("div",S,[e("canvas",W,null,512)])}var G=b(M,[["render",Q]]);const I={name:"GraficoPublicoSexoPizza",props:{venda:{type:Object,required:!0}},data(){return this.labels=this.venda.sexo,{graficoFluxo:{type:"pie",data:{labels:this.labels.map(a=>a.sexo.length>2?a.sexo:"Outros"),datasets:[{label:"G\xEAnero",backgroundColor:["rgb(75, 192, 192)","rgb(219, 40, 40)"],data:this.venda.sexo.map(a=>a.venda)}]},options:{responsive:!0,maintainAspectRatio:!1}}}},mounted(){const a=this.$refs.graficoPublicoSexoPizza;new y(a,this.graficoFluxo)}},T={style:{height:"300px"}},O={ref:"graficoPublicoSexoPizza"};function N(a,m,t,p,_,x){return i(),c("div",T,[e("canvas",O,null,512)])}var $=b(I,[["render",N]]);const K={name:"GraficoPublicoIdadePizza",props:{venda:{type:Object,required:!0}},data(){return{graficoFluxo:{type:"pie",data:{labels:this.venda.faixaEtaria.map(a=>a.faixaEtaria),datasets:[{label:"Idade",backgroundColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)"],data:this.venda.faixaEtaria.map(a=>a.venda)}],options:{responsive:!0,maintainAspectRatio:!1}}}}},mounted(){const a=this.$refs.graficoPublicoIdadePizza;new y(a,this.graficoFluxo)}},Y={style:{height:"300px"}},H={ref:"graficoPublicoIdadePizza"};function J(a,m,t,p,_,x){return i(),c("div",Y,[e("canvas",H,null,512)])}var U=b(K,[["render",J]]);const X={name:"GraficoLucroPrejuBar",props:{empresa:{type:Object,required:!0}},data(){return console.log(this),{graficoFluxo:{type:"bar",data:{labels:["Per\xEDodo Atual","Per\xEDodo Ano Anterior"],datasets:[{type:"line",label:"Ponto de Equil\xEDbrio",borderColor:"rgb(54, 162, 235)",backgroundColor:"rgba(219, 40, 40, 0)",borderWidth:1,data:[(this.empresa.receitasDespesas||{}).periodoAtualPontoEquilibrio,(this.empresa.receitasDespesas||{}).periodoAnoAnteriorPontoEquilibrio]},{label:"Receita",type:"bar",stack:"Stack 1",backgroundColor:"rgba(219, 40, 40, 0.75)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[(this.empresa.receitasDespesas||{}).periodoAtualReceita,(this.empresa.receitasDespesas||{}).periodoAnoAnteriorReceita]},{label:"Despesa Vari\xE1vel - Proje\xE7\xE3o",type:"bar",stack:"Stack 2",backgroundColor:"rgba(219, 40, 40, 0.5)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[(this.empresa.receitasDespesas||{}).periodoAtualDespVariavelProjecao,(this.empresa.receitasDespesas||{}).periodoAnoAnteriorDespVariavelProjecao]},{label:"Receita - Proje\xE7\xE3o",type:"bar",stack:"Stack 3",backgroundColor:"rgba(219, 40, 40, 0.25)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[(this.empresa.receitasDespesas||{}).periodoAtualReceitaProjecao,(this.empresa.receitasDespesas||{}).periodoAnoAnteriorReceitaProjecao]},{label:"Lucro x Preju\xEDzo",type:"bar",stack:"Stack 4",backgroundColor:"rgba(54, 162, 235, 0.75)",borderColor:"rgb(54, 162, 235)",borderWidth:1,data:[(this.empresa.receitasDespesas||{}).periodoAtualLucroPrejuizo,(this.empresa.receitasDespesas||{}).periodoAnoAnteriorLucroPrejuizo]},{label:"Despesa Vari\xE1vel",type:"bar",stack:"Stack 5",backgroundColor:"rgba(54, 162, 235, 0.5)",borderColor:"rgb(54, 162, 235)",borderWidth:1,data:[(this.empresa.receitasDespesas||{}).periodoAtualDespVariavel,(this.empresa.receitasDespesas||{}).periodoAnoAnteriorDespVariavel]},{label:"Despesa Fixa",type:"bar",stack:"Stack 6",backgroundColor:"rgba(54, 162, 235, 0)",borderColor:"rgba(54, 162, 235, 0)",data:[(this.empresa.receitasDespesas||{}).periodoAtualDespFixa,(this.empresa.receitasDespesas||{}).periodoAnoAnteriorDespFixa]}]},options:{responsive:!0,maintainAspectRatio:!1}}}},mounted(){const a=this.$refs.graficoLucroPrejuBar;new y(a,this.graficoFluxo)}},Z={style:{height:"500px"}},ee={ref:"graficoLucroPrejuBar"};function te(a,m,t,p,_,x){return i(),c("div",Z,[e("canvas",ee,null,512)])}var ae=b(X,[["render",te]]);const se={components:{GraficoEstoque:B,GraficoPublicoAlvoBar:G,GraficoPublicoSexoPizza:$,GraficoPublicoIdadePizza:U,GraficoLucroPrejuBar:ae},computed:{envelopes(){let a=this.dados.empresa.envelopes;return a.sort((m,t)=>m.ordem<t.ordem?-1:1),a},percentualCustoRelAnoAnterior(){return((this.dados.empresa||{}).percentualRelAnoAnterior||{}).custo||0},percentualDescontoRelAnoAnterior(){return((this.dados.empresa||{}).percentualRelAnoAnterior||{}).desconto||0},percentualMargemLucroRelAnoAnterior(){return((this.dados.empresa||{}).percentualRelAnoAnterior||{}).margemLucro||0},percentualPrecoMedioRelAnoAnterior(){return((this.dados.empresa||{}).percentualRelAnoAnterior||{}).precoMedio||0},percentualQtdePDVRelAnoAnterior(){return((this.dados.empresa||{}).percentualRelAnoAnterior||{}).qtdePDV||0},percentualQuantidadeRelAnoAnterior(){return((this.dados.empresa||{}).percentualRelAnoAnterior||{}).quantidade||0},percentualTicketMedioRelAnoAnterior(){return((this.dados.empresa||{}).percentualRelAnoAnterior||{}).ticketMedio||0},percentualValorBrutoRelAnoAnterior(){return((this.dados.empresa||{}).percentualRelAnoAnterior||{}).valorBruto||0},percentualValorLiquidoRelAnoAnterior(){return((this.dados.empresa||{}).percentualRelAnoAnterior||{}).valorLiquido||0},percentualValorMargemLucroRelAnoAnterior(){return((this.dados.empresa||{}).percentualRelAnoAnterior||{}).valorMargemLucro||0},publicoAlvo(){return{genero:{graficoBarras:{labels:["Label 1","label 2"],datasets:[{label:"Masculino",type:"bar",backgroundColor:"rgba(75, 192, 192, 0.5)",borderColor:"rgb(75, 192, 192)",borderWidth:1,data:[20,50,75,30,35,40]},{label:"Feminino",type:"bar",backgroundColor:"rgba(219, 40, 40, 0.25)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[20,50,75,30,35,40]}],cfg:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]},legend:{position:"top"}}},graficoPizza:{type:"pie",labels:["Label 1","label 2"],datasets:[{label:"G\xEAnero",backgroundColor:["rgb(75, 192, 192)","rgb(219, 40, 40)"],data:[50,50]}],cfg:{responsive:!0}}},idade:{graficoPizza:{type:"pie",labels:["Label 1","label 2"],datasets:[{label:"Idade",backgroundColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)"],data:[50,50,50,50,50,50]}],cfg:{responsive:!0}}}}},receitasDespesas(){return{labels:["Per\xEDodo Atual","Per\xEDodo Ano Anterior"],datasets:[{type:"line",label:"Ponto de Equil\xEDbrio",borderColor:"rgb(54, 162, 235)",backgroundColor:"rgba(219, 40, 40, 0)",borderWidth:1,data:[50,50]},{label:"Receita",type:"bar",stack:"Stack 1",backgroundColor:"rgba(219, 40, 40, 0.75)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[50,50]},{label:"Despesa Vari\xE1vel - Proje\xE7\xE3o",type:"bar",stack:"Stack 2",backgroundColor:"rgba(219, 40, 40, 0.5)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[50,50]},{label:"Receita - Proje\xE7\xE3o",type:"bar",stack:"Stack 3",backgroundColor:"rgba(219, 40, 40, 0.25)",borderColor:"rgb(219, 40, 40)",borderWidth:1,data:[50,50]},{label:"Lucro x Preju\xEDzo",type:"bar",stack:"Stack 4",backgroundColor:"rgba(54, 162, 235, 0.75)",borderColor:"rgb(54, 162, 235)",borderWidth:1,data:[50,50]},{label:"Despesa Vari\xE1vel",type:"bar",stack:"Stack 5",backgroundColor:"rgba(54, 162, 235, 0.5)",borderColor:"rgb(54, 162, 235)",borderWidth:1,data:[50,50]},{label:"Despesa Fixa",type:"bar",stack:"Stack 6",backgroundColor:"rgba(54, 162, 235, 0)",borderColor:"rgba(54, 162, 235, 0)",data:[50,50]}],cfg:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]},legend:{position:"top"}}}}},data(){return{permissoes:{},sistemaPai:"",relatorio:{}}},props:{carregando:{default:!0,required:!0,type:Boolean},dados:{default:()=>({}),required:!0,type:Object}},methods:{},mounted(){this.permissoes={envelope:!1},E.permissao.objeto("cockpit/envelope").then(a=>{this.permissoes.envelope=a}),this.sistemaPai=z()}},oe={id:"QgQg"},re={class:"row q-col-gutter-sm q-mt-sm q-pb-md"},ie={class:"col-12",style:{float:"right","text-align":"center","margin-top":"40px"}},le={style:{"font-size":"100%"}},ne={key:0,class:"row q-col-gutter-sm q-mt-sm q-pb-md"},de={class:"col-12 q-mt-sm"},ce={class:"row justify-around"},he={class:"text-h5 text-weight-bold text-right q-mt-sm q-pb-none verde",style:{"line-height":"22px"}},ue=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}}," Recebido ",-1),me={class:"row float-right"},ge=e("div",{class:"graph",style:{"margin-right":"10px"}},[e("div",{class:"graphbar",style:{height:"15px"}}),e("div",{class:"graphbar",style:{height:"10px"}}),e("div",{class:"graphbar",style:{height:"15px"}}),e("div",{class:"graphbar",style:{height:"8px"}}),e("div",{class:"graphbar",style:{height:"17px"}})],-1),be={class:"text-h5 text-weight-bold text-right text-positive q-mt-sm q-pb-none",style:{"line-height":"22px"}},pe={class:"text-h5 text-weight-bold text-right q-mt-sm q-pb-none vermelho",style:{"line-height":"22px"}},_e=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}}," Pago ",-1),xe={class:"row float-right"},fe=e("div",{class:"graph",style:{"margin-right":"10px"}},[e("div",{class:"graphbar",style:{height:"15px"}}),e("div",{class:"graphbar",style:{height:"10px"}}),e("div",{class:"graphbar",style:{height:"15px"}}),e("div",{class:"graphbar",style:{height:"8px"}}),e("div",{class:"graphbar",style:{height:"17px"}})],-1),ve={class:"text-h5 text-weight-bold text-right text-negative q-mt-sm q-pb-none",style:{"line-height":"22px"}},ye={class:"text-h5 text-weight-bold text-right q-mt-sm q-pb-none azul",style:{"line-height":"22px"}},qe=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}}," Saldo (R$) disponivel ",-1),Ae={class:"row float-right"},ke=e("div",{class:"graph",style:{"margin-right":"10px"}},[e("div",{class:"graphbar",style:{height:"15px"}}),e("div",{class:"graphbar",style:{height:"10px"}}),e("div",{class:"graphbar",style:{height:"15px"}}),e("div",{class:"graphbar",style:{height:"8px"}}),e("div",{class:"graphbar",style:{height:"17px"}})],-1),we={class:"text-h5 text-weight-bold text-right text-primary q-mt-sm q-pb-none",style:{"line-height":"22px"}},Pe={class:"text-h5 text-weight-bold text-right q-mt-sm q-pb-none verde",style:{"line-height":"22px"}},Ce=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}}," Receber ",-1),De={class:"row float-right"},Ee=e("div",{class:"graph",style:{"margin-right":"10px"}},[e("div",{class:"graphbar",style:{height:"15px"}}),e("div",{class:"graphbar",style:{height:"10px"}}),e("div",{class:"graphbar",style:{height:"15px"}}),e("div",{class:"graphbar",style:{height:"8px"}}),e("div",{class:"graphbar",style:{height:"17px"}})],-1),ze={class:"text-h5 text-weight-bold text-right text-positive q-mt-sm q-pb-none",style:{"line-height":"22px"}},Re={class:"text-h5 text-weight-bold text-right q-mt-sm q-pb-none vermelho",style:{"line-height":"22px"}},Le=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}}," Pagar ",-1),Fe={class:"row float-right"},Ve=e("div",{class:"graph",style:{"margin-right":"10px"}},[e("div",{class:"graphbar",style:{height:"15px"}}),e("div",{class:"graphbar",style:{height:"10px"}}),e("div",{class:"graphbar",style:{height:"15px"}}),e("div",{class:"graphbar",style:{height:"8px"}}),e("div",{class:"graphbar",style:{height:"17px"}})],-1),je={class:"text-h5 text-weight-bold text-right text-negative q-mt-sm q-pb-none",style:{"line-height":"22px"}},Be={class:"col-12 col-md-4"},Me={class:"row text-weight-bold text-right q-mt-sm q-pb-none"},Se={class:"col-12"},We=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-pa-none",style:{display:"block"}}," Valor Bruto ",-1),Qe={key:0,class:"full-width text-h5 text-weight-bold text-right text-primary q-mt-sm q-mr-sm q-pb-none"},Ge={key:0,class:"text-positive",style:{float:"left","font-weight":"normal","font-size":"12px"}},Ie={class:"text-tertiary",style:{float:"left"}},Te={class:"row text-weight-bold text-right q-mt-sm q-pb-none"},Oe={class:"col-12"},Ne=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-pa-none",style:{display:"block"}}," Desconto ",-1),$e={key:0,class:"full-width text-h5 text-weight-bold text-right text-primary q-mt-sm q-mr-sm q-pb-none"},Ke={key:0,class:"text-positive",style:{float:"left","font-weight":"normal","font-size":"12px"}},Ye={class:"text-tertiary",style:{float:"left"}},He={class:"row text-weight-bold text-right q-mt-sm q-pb-none"},Je={class:"col-12"},Ue=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-pa-none",style:{display:"block"}}," Margem de Lucro ",-1),Xe={key:0,class:"full-width text-h5 text-weight-bold text-right text-primary q-mt-sm q-mr-sm q-pb-none"},Ze={key:0,class:"text-positive",style:{float:"left","font-weight":"normal","font-size":"12px"}},et={class:"text-tertiary",style:{float:"left"}},tt=e("br",null,null,-1),at={class:"text-h4 text-weight-bold"},st={key:1,class:"text-positive",style:{top:"-21px",position:"relative"}},ot={class:"text-tertiary"},rt={class:"col-12 col-md-8"},it={class:"row q-col-gutter-sm"},lt={class:"col-6 col-md-4",style:{"min-height":"180px"}},nt={class:"text-h4 text-weight-bold"},dt={key:1,class:"text-positive"},ct={class:"text-tertiary"},ht=e("br",null,null,-1),ut={class:"col-6 col-md-4",style:{"min-height":"180px"}},mt={class:"text-h4 text-weight-bold"},gt={key:1,class:"text-positive"},bt={class:"text-tertiary"},pt=e("br",null,null,-1),_t={class:"col-6 col-md-4",style:{"min-height":"180px"}},xt={class:"text-h4 text-weight-bold"},ft={key:1,class:"text-positive"},vt={class:"text-tertiary"},yt=e("br",null,null,-1),qt={class:"col-6 col-md-4",style:{"min-height":"180px"}},At={class:"text-h4 text-weight-bold"},kt={key:1,class:"text-positive"},wt={class:"text-tertiary"},Pt=e("br",null,null,-1),Ct={class:"col-6 col-md-4",style:{"min-height":"180px"}},Dt={class:"text-h4 text-weight-bold"},Et={key:1,class:"text-positive"},zt={class:"text-tertiary"},Rt=e("br",null,null,-1),Lt={class:"col-12"},Ft={class:"row justify-around"},Vt={class:"text-h5 text-weight-bold text-center q-mt-sm q-pb-none",style:{"line-height":"22px"}},jt={class:"text-primary"},Bt=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}}," Estoque Final ",-1),Mt=e("div",{class:"text-body1 text-weight-bolder text-center q-mt-sm q-pb-none",style:{"line-height":"22px"}},[e("div",{class:"text-tertiary"},[l(" / "),e("span",{style:{"margin-left":"100px"}},"(")])],-1),St={class:"text-h5 text-weight-bold text-center q-mt-sm q-pb-none",style:{"line-height":"22px"}},Wt={class:"text-primary"},Qt=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}}," CMV ",-1),Gt=e("div",{class:"text-body1 text-weight-bolder text-center q-mt-sm q-pb-none",style:{"line-height":"22px"}},[e("div",{class:"text-tertiary"}," / ")],-1),It={class:"text-h5 text-weight-bold text-center q-mt-sm q-pb-none",style:{"line-height":"22px"}},Tt={class:"text-primary"},Ot=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}}," Dia(s) Trabalhado(s) ",-1),Nt=e("div",{class:"text-body1 text-weight-bolder text-center q-mt-sm q-pb-none",style:{"line-height":"22px"}},[e("div",{class:"text-tertiary"},[e("span",{style:{"margin-right":"100px"}},")"),l(" = ")])],-1),$t={class:"text-h5 text-weight-bold text-center q-mt-sm q-pb-none",style:{"line-height":"22px"}},Kt={class:"text-primary"},Yt=e("small",{class:"text-body1 text-tertiary text-weight-regular q-block q-ma-none q-pa-none",style:{display:"block"}}," Dia(s) ",-1),Ht={class:"col-12"},Jt={class:"col-md-6"},Ut={class:"col-md-6"},Xt={class:"row"},Zt={class:"col-md-4",style:{"padding-left":"15px"}},ea={class:"col-md-8"},ta={class:"col-12"};function aa(a,m,t,p,_,x){const k=f("grafico-estoque"),w=f("grafico-publico-alvo-bar"),P=f("grafico-publico-sexo-pizza"),C=f("grafico-publico-idade-pizza"),D=f("grafico-lucro-preju-bar");return i(),c("div",oe,[e("div",re,[q(e("div",ie,[e("span",le,[s(R,{color:"primary",size:50})])],512),[[A,t.carregando]]),t.dados&&t.dados.empresa?q((i(),c("div",ne,[e("div",de,[s(u,{inline:"",color:"white",class:"fit no-shadow"},{default:o(()=>[s(d,{class:"text-tertiary q-title q-pb-sm"},{default:o(()=>[l("Financeiro")]),_:1}),!t.carregando&&t.dados.empresa&&t.dados.empresa.financeiro?(i(),h(d,{key:0},{default:o(()=>[e("div",ce,[e("div",he,[ue,e("div",me,[ge,e("div",be,r(a.$filters.numero(t.dados.empresa.financeiro.recebido,2)),1)])]),e("div",pe,[_e,e("div",xe,[fe,e("div",ve,r(a.$filters.numero(t.dados.empresa.financeiro.pago,2)),1)])]),e("div",ye,[qe,e("div",Ae,[ke,e("div",we,r(a.$filters.numero(t.dados.empresa.financeiro.saldoFinal,2)),1)])]),e("div",Pe,[Ce,e("div",De,[Ee,e("div",ze,r(a.$filters.numero(t.dados.empresa.financeiro.aReceber,2)),1)])]),e("div",Re,[Le,e("div",Fe,[Ve,e("div",je,r(a.$filters.numero(t.dados.empresa.financeiro.aPagar,2)),1)])])])]),_:1})):n("",!0)]),_:1})]),e("div",Be,[s(u,{inline:"",color:"white",class:"fit no-shadow"},{default:o(()=>[s(d,{class:"d-flex full-height column q-pb-none"},{default:o(()=>[s(d,{class:"text-tertiary q-title q-mx-none q-mt-none q-px-none q-pt-none q-pb-sm"},{default:o(()=>[l("Faturamento ")]),_:1}),e("div",Me,[e("div",Se,[We,t.carregando?n("",!0):(i(),c("div",Qe,[t.carregando?n("",!0):(i(),c("small",Ge,[e("span",Ie,r(a.$filters.numero(t.dados.empresa.vendasAnoAnterior.valorBruto,2)),1),l(" (\u0394 "+r(t.dados.empresa.vendasAnoAnterior.valorBruto?a.$filters.numero(t.dados.empresa.vendasAnoAnterior.valorBruto-t.dados.empresa.vendasEsteAno.valorBruto/100,2):a.$filters.numero(100,2))+" %) ",1)])),l(" "+r(a.$filters.numero(t.dados.empresa.vendasEsteAno.valorBruto,2)),1)]))])]),e("div",Te,[e("div",Oe,[Ne,t.carregando?n("",!0):(i(),c("div",$e,[t.carregando?n("",!0):(i(),c("small",Ke,[e("span",Ye,r(a.$filters.numero(t.dados.empresa.vendasAnoAnterior.desconto,2)),1),l(" (\u0394 "+r(t.dados.empresa.vendasAnoAnterior.desconto?a.$filters.numero(t.dados.empresa.vendasAnoAnterior.desconto-t.dados.empresa.vendasEsteAno.desconto/100,2):a.$filters.numero(100,2))+" %) ",1)])),l(" "+r(a.$filters.numero(t.dados.empresa.vendasEsteAno.desconto,2)),1)]))])]),e("div",He,[e("div",Je,[Ue,t.carregando?n("",!0):(i(),c("div",Xe,[t.carregando?n("",!0):(i(),c("small",Ze,[l(" (\u0394 "+r(t.dados.empresa.vendasAnoAnterior.margemLucro?a.$filters.numero(t.dados.empresa.vendasAnoAnterior.margemLucro-t.dados.empresa.vendasEsteAno.margemLucro/100,2):a.$filters.numero(100,2))+" %) ",1),e("span",et,r(a.$filters.numero(t.dados.empresa.vendasAnoAnterior.margemLucro,2)),1),tt])),l(" "+r(a.$filters.numero(t.dados.empresa.vendasEsteAno.margemLucro,2))+" ",1),e("small",null,"("+r(t.dados.empresa.vendasEsteAno.margemLucro/t.dados.empresa.vendasEsteAno.valorLiquido*100?a.$filters.numero(t.dados.empresa.vendasEsteAno.margemLucro/t.dados.empresa.vendasEsteAno.valorLiquido*100,2):a.$filters.numero(100,2))+"%)",1)]))])]),s(d,{class:"q-pa-none text-tertiary text-right q-mt-sm q-pt-sm",style:{"border-top":"1px solid #eeeeee"}},{default:o(()=>[l(" Valor L\xEDquido ")]),_:1}),t.carregando?n("",!0):(i(),h(g,{key:0,class:"q-display-1 text-weight-bold text-right text-primary q-px-none"},{default:o(()=>[e("span",at,r(a.$filters.numero(t.dados.empresa.vendasEsteAno.valorLiquido,2)),1)]),_:1})),t.carregando?n("",!0):(i(),c("small",st,[e("span",ot,r(a.$filters.numero(t.dados.empresa.vendasAnoAnterior.valorLiquido,2)),1),l(" (\u0394 "+r(t.dados.empresa.vendasAnoAnterior.valorLiquido?a.$filters.numero(t.dados.empresa.vendasAnoAnterior.valorLiquido-t.dados.empresa.vendasEsteAno.valorLiquido/100,2):a.$filters.numero(100,2))+" %) ",1)]))]),_:1})]),_:1})]),e("div",rt,[e("div",it,[e("div",lt,[s(u,{inline:"",color:"white",class:"fit no-shadow"},{default:o(()=>[s(d,{class:"d-flex full-height column"},{default:o(()=>[s(d,{class:"q-pa-none text-tertiary text-left"},{default:o(()=>[l(" Custo ")]),_:1}),t.carregando?n("",!0):(i(),h(g,{key:0,class:"text-left text-primary q-px-none"},{default:o(()=>[e("span",nt,r(a.$filters.numero(t.dados.empresa.vendasEsteAno.custo,2)),1),s(v,{dense:"",round:"",icon:"mdi-bell",color:"positive",class:"no-shadow",style:{float:"right"}})]),_:1})),t.carregando?n("",!0):(i(),c("small",dt,[e("span",ct,r(a.$filters.numero(t.dados.empresa.vendasAnoAnterior.custo,2)),1),l(" (\u0394 "+r(t.dados.empresa.vendasAnoAnterior.custo?a.$filters.numero(t.dados.empresa.vendasAnoAnterior.custo-t.dados.empresa.vendasEsteAno.custo/100,2):a.$filters.numero(100,2))+" %) ",1),ht]))]),_:1})]),_:1})]),e("div",ut,[s(u,{inline:"",color:"white",class:"fit no-shadow"},{default:o(()=>[s(d,{class:"d-flex full-height column"},{default:o(()=>[s(d,{class:"q-pa-none text-tertiary text-left"},{default:o(()=>[l(" Ticket M\xE9dio ")]),_:1}),t.carregando?n("",!0):(i(),h(g,{key:0,class:"text-left text-primary q-px-none"},{default:o(()=>[e("span",mt,r(a.$filters.numero(t.dados.empresa.vendasEsteAno.ticketMedio,2)),1),s(v,{dense:"",round:"",icon:"mdi-bell",color:"positive",class:"no-shadow",style:{float:"right"}})]),_:1})),t.carregando?n("",!0):(i(),c("small",gt,[e("span",bt,r(a.$filters.numero(t.dados.empresa.vendasAnoAnterior.ticketMedio,2)),1),l(" (\u0394 "+r(t.dados.empresa.vendasAnoAnterior.ticketMedio?a.$filters.numero(t.dados.empresa.vendasAnoAnterior.ticketMedio-t.dados.empresa.vendasEsteAno.ticketMedio/100,2):a.$filters.numero(100,2))+" %) ",1),pt]))]),_:1})]),_:1})]),e("div",_t,[s(u,{inline:"",color:"white",class:"fit no-shadow"},{default:o(()=>[s(d,{class:"d-flex full-height column"},{default:o(()=>[s(d,{class:"q-pa-none text-tertiary text-left"},{default:o(()=>[l(" Pre\xE7o M\xE9dio ")]),_:1}),t.carregando?n("",!0):(i(),h(g,{key:0,class:"text-left text-primary q-px-none"},{default:o(()=>[e("span",xt,r(a.$filters.numero(t.dados.empresa.vendasEsteAno.precoMedio,2)),1),s(v,{dense:"",round:"",icon:"mdi-bell",color:"positive",class:"no-shadow",style:{float:"right"}})]),_:1})),t.carregando?n("",!0):(i(),c("small",ft,[e("span",vt,r(a.$filters.numero(t.dados.empresa.vendasAnoAnterior.precoMedio,2)),1),l(" (\u0394 "+r(t.dados.empresa.vendasAnoAnterior.precoMedio?a.$filters.numero(t.dados.empresa.vendasAnoAnterior.precoMedio-t.dados.empresa.vendasEsteAno.precoMedio/100,2):a.$filters.numero(100,2))+" %) ",1),yt]))]),_:1})]),_:1})]),e("div",qt,[s(u,{inline:"",color:"white",class:"fit no-shadow"},{default:o(()=>[s(d,{class:"d-flex full-height column"},{default:o(()=>[s(d,{class:"q-pa-none text-tertiary text-left"},{default:o(()=>[l(" Quantidade PDV ")]),_:1}),t.carregando?n("",!0):(i(),h(g,{key:0,class:"text-left text-primary q-px-none"},{default:o(()=>[e("span",At,r(a.$filters.numero(t.dados.empresa.vendasEsteAno.qtdePDV,2)),1),s(v,{dense:"",round:"",icon:"mdi-bell",color:"positive",class:"no-shadow",style:{float:"right"}})]),_:1})),t.carregando?n("",!0):(i(),c("small",kt,[e("span",wt,r(a.$filters.numero(t.dados.empresa.vendasAnoAnterior.qtdePDV,2)),1),l(" (\u0394 "+r(t.dados.empresa.vendasAnoAnterior.qtdePDV?a.$filters.numero(t.dados.empresa.vendasAnoAnterior.qtdePDV-t.dados.empresa.vendasEsteAno.qtdePDV/100,2):a.$filters.numero(100,2))+" %) ",1),Pt]))]),_:1})]),_:1})]),e("div",Ct,[s(u,{inline:"",color:"white",class:"fit no-shadow"},{default:o(()=>[s(d,{class:"d-flex full-height column"},{default:o(()=>[s(d,{class:"q-pa-none text-tertiary text-left"},{default:o(()=>[l(" Quantidade ")]),_:1}),t.carregando?n("",!0):(i(),h(g,{key:0,class:"text-left text-primary q-px-none"},{default:o(()=>[e("span",Dt,r(a.$filters.numero(t.dados.empresa.vendasEsteAno.quantidade,2)),1),s(v,{dense:"",round:"",icon:"mdi-bell",color:"positive",class:"no-shadow",style:{float:"right"}})]),_:1})),t.carregando?n("",!0):(i(),c("small",Et,[e("span",zt,r(a.$filters.numero(t.dados.empresa.vendasAnoAnterior.quantidade,2)),1),l(" (\u0394 "+r(t.dados.empresa.vendasAnoAnterior.quantidade?a.$filters.numero(t.dados.empresa.vendasAnoAnterior.quantidade-t.dados.empresa.vendasEsteAno.quantidade/100,2):a.$filters.numero(100,2))+" %) ",1),Rt]))]),_:1})]),_:1})])])]),e("div",Lt,[e("div",null,[s(u,{inline:"",color:"white",class:"fit no-shadow"},{default:o(()=>[s(d,{class:"text-tertiary q-title q-pb-sm"},{default:o(()=>[l("Estoque")]),_:1}),t.carregando?n("",!0):(i(),h(d,{key:0},{default:o(()=>[s(k,{class:"col",estoqueInicial:t.dados.empresa.estoque.estoqueInicial,estoqueFinal:t.dados.empresa.estoque.estoqueFinal},null,8,["estoqueInicial","estoqueFinal"])]),_:1}))]),_:1})]),e("div",null,[s(u,{inline:"",color:"white",class:"fit no-shadow"},{default:o(()=>[t.carregando?n("",!0):(i(),h(d,{key:0},{default:o(()=>[e("div",Ft,[e("div",Vt,[e("div",jt,r(a.$filters.numero(t.dados.empresa.estoque.estoqueFinal,2)),1),Bt]),Mt,e("div",St,[e("div",Wt,r(a.$filters.numero(t.dados.empresa.estoque.cmv,2)),1),Qt]),Gt,e("div",It,[e("div",Tt,r(a.$filters.numero(t.dados.empresa.estoque.diasT,2)),1),Ot]),Nt,e("div",$t,[e("div",Kt,r(a.$filters.numero(t.dados.empresa.estoque.dias,2)),1),Yt])])]),_:1}))]),_:1})])]),e("div",Ht,[s(u,{inline:"",color:"white",class:"fit no-shadow"},{default:o(()=>[s(d,{class:"text-tertiary q-title q-pb-sm"},{default:o(()=>[l("P\xFAblico Alvo")]),_:1}),t.carregando?n("",!0):(i(),h(d,{key:0,class:"row"},{default:o(()=>[e("div",Jt,[s(w,{class:"col",venda:t.dados.empresa.venda},null,8,["venda"])]),e("div",Ut,[e("div",Xt,[e("div",Zt,[s(P,{class:"col",venda:t.dados.empresa.venda},null,8,["venda"])]),e("div",ea,[s(C,{class:"col",venda:t.dados.empresa.venda},null,8,["venda"])])])])]),_:1}))]),_:1})]),e("div",ta,[s(u,{inline:"",color:"white",class:"fit no-shadow"},{default:o(()=>[s(d,{class:"text-tertiary q-title q-pb-sm"},{default:o(()=>[l("Lucro / Preju\xEDzo")]),_:1}),t.carregando?n("",!0):(i(),h(d,{key:0,class:"row"},{default:o(()=>[s(D,{class:"col",empresa:t.dados.empresa},null,8,["empresa"])]),_:1}))]),_:1})])],512)),[[A,!t.carregando]]):n("",!0)])])}var ra=b(se,[["render",aa]]);export{ra as default};
