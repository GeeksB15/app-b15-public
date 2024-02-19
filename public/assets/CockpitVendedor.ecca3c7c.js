import{_ as z,o as C,d as S,f as o,ax as Q,x as a,J as b,v as Y,l as P,M as J,p as A,w as i,U as $,h as L,j as I,aj as R,X as B,aY as q,ak as j,ah as G,T as W,i as D,D as x,aF as K,C as p,e as c,L as X,s as k,t as d,aB as h,cx as Z,n as M,aK as g,k as T,b9 as E,ba as N,bb as _,aM as H}from"./index.d63e8946.js";import{I as ee}from"./Icone.b08b669a.js";import{o as te}from"./open-url.4057236b.js";import{J as oe}from"./JsonViewer.888bb402.js";const ie={name:"Gauge",data(){return{load:!1,width:300,height:150,widthBefore:210,heightBefore:105}},props:{target:{default:0,type:Number},current:{default:0,type:Number},dg1:{default:"#c0392b",type:String},dg2:{default:"#f1c40f",type:String},dg3:{default:"#1abc9c",type:String},color:{default:"#f2f2f2",type:String},colorCenter:{default:"#fff",type:String}},methods:{scale(){this.width=Number(window.getComputedStyle(this.$refs.gaugeContent).width.replace("px","")),this.height=this.width/2,this.widthBefore=this.width-this.width*(30/100),this.heightBefore=this.height-this.height*(30/100),this.angle(this.current,this.target)},angle(t,r){if(this.$refs.gaugeCircleMask){const u=Number(t),e=Number(r);let s=0;u===0||e===0?s=0:u>e||u===e?s=180:u<e&&(s=u*180/e),this.$refs.gaugeCircleMask.style.transform=`rotate(${s}deg)`,this.$refs.gaugeCircleMask.style["-webkit-transform"]=`rotate(${s}deg)`,this.$refs.gaugeCircleMask.style["-moz-transform"]=`rotate(${s}deg)`}}},mounted(){this.scale(),setTimeout(()=>{this.load=!0},260)},watch:{current:{handler(t){this.angle(t,this.target)},immediate:!0},target:{handler(t){this.angle(this.current,t)},immediate:!0}}},re={ref:"gaugeContent",class:"gaugeContent"};function ae(t,r,l,u,e,s){return C(),S("div",re,[o(Q,{onResize:s.scale},null,8,["onResize"]),a("div",{class:"gaugeMask",style:b(`width:${e.width}px; height:${e.height}px;`)},[a("div",{class:"gaugeCircle",style:b(`width:${e.width}px; height:${e.height}px; background:linear-gradient(to right, ${l.dg1} 0%, ${l.dg2} 50%, ${l.dg3} 100%);`)},[a("div",{class:"gaugeCircle-before",style:b(`width:${e.widthBefore}px; height:${e.heightBefore}px; margin-left:-${e.heightBefore}px; background: ${l.colorCenter};`)},[a("div",{class:"gaugeContentText",style:b(`width:${e.widthBefore}px; height:${e.heightBefore}px; margin-left:-${e.heightBefore}px; background: ${l.colorCenter};`)},[Y(t.$slots,"default",{},void 0,!0)],4)],4)],4),a("div",{ref:"gaugeCircleMask",class:"gaugeCircleMask",style:b(`width:${e.width}px; height:${e.width}px;`)},[e.load?(C(),S("div",{key:0,class:"gaugeCircleMask-before",style:b(`width: ${e.width}px; height: ${e.height}px; background:${l.color};`)},null,4)):P("",!0)],4)],4)],512)}var ne=z(ie,[["render",ae],["__scopeId","data-v-69a1f783"]]);const se={components:{Avatar:J,Icone:ee,JsonViewer:oe,Gauge:ne},computed:{faturamentoProgressBar(){let t,r,l,u,e,s={};return r=this.cockpit.faturamento.periodo||0,l=this.cockpit.faturamento.hoje||0,u=this.cockpit.faturamento.projecao||0,t=$utils.arredondar(u),e=$utils.arredondar((r-l)*100/t),s.periodo="width:"+e+"%",e=$utils.arredondar(l*100/t),s.hoje="width:"+e+"%",e=$utils.arredondar((u-r)*100/t),s.projecao="width:"+e+"%",s},colunas(){return{aniversariantes:[{name:"imagem",label:"",field:"imagem",align:"left"},{name:"nome",label:"Nome",field:"nome",sortable:!0,align:"left"},{name:"telefone",label:"Telefone",field:"telefone",align:"left"},{name:"aniversario",label:"Data",field:"aniversario",align:"left"}],posVenda:[{name:"imagem",label:"",field:"imagem",align:"left"},{name:"nome",label:"Cliente",field:"nome",sortable:!0,align:"left"},{name:"telefone",label:"Telefone",field:"telefone",align:"left"},{name:"nroVenda",label:"Venda",field:"numero",align:"left"},...this.sistemaPai==="optisoul"?[{name:"nroEnvelope",label:"Envelope",field:"numero",align:"left"}]:[],{name:"valor",label:"Valor",field:"valor",align:"left"}]}}},data(){return{sistemaPai:"",metasPermissao:!1,carregando:!0,cockpit:{faturamento:{periodo:0,hoje:0,projecao:0},ticketMedio:{ticketMedioPeriodo:0,ticketMedioPeriodoAnoAnterior:0,percentualTicketPeriodoRelAnterior:0,ticketMedioYeartoDate:0,ticketMedioYeartoDateAnoAnterior:0,percentualTicketMedioYeartoDateRelAnterior:0,maiorVendaPeriodo:0,maiorVendaPeriodoNumeroFatura:0,maiorVendaPeriodoNomeCliente:"",maiorVendaHistoria:0},conversao:{conversoesHoje:0,atendimentosHoje:0,conversoesPeriodo:0,atendimentosPeriodo:0},pendencias:{orcamentos:0,envelopesAtrasados:0,envelopesHoje:0,envelopesAEntregar:0,tarefas:0},parametros:{periodoIni:0,periodoFim:0,periodoIniAnoAnterior:0,periodoFimAnoAnterior:0,ytDDia1:0,ytDHoje:0,ytDAnoAnteriorDia1:0,ytDAnoAnteriorHoje:0},posVenda:[],aniversariantes:[],metas:[]},contato:{},empresas:[],nomesEmpresasSelecionadas:[],filtro:{codigoClienteSistema:"",codigoContatoUsuario:"",empresas:[],periodo:{ini:"",fim:""}}}},props:{usuario:Object},methods:{irParaCockpitVendas(){this.$router.push({name:"CockpitVendas",params:{id:this.$route.params.id,periodo:{ini:this.cockpit.pendencias.orcamentosPeriodoIni,fim:this.cockpit.pendencias.orcamentosPeriodoFim}}})},irParaCockpitEnvelopes(){this.$router.push({name:"CockpitEnvelopes",params:{id:this.$route.params.id,filtroT:JSON.stringify(this.filtro)}})},irParaAtendimentoContato(t){this.$router.push({name:"AtendimentoContato",params:{id:t}})},irParaAtendimentoVenda(t){this.$router.push({name:"AtendimentoVenda",params:{id:t}})},abrirURL:te,async abrirTelefone(t){var u,e,s,v,y,m;if(!(t!=null&&t.telefone))return;let r;t.aniversario&&(r=await $db.configuracoes.le({nome:"cockpit.msg.aniversario"}),r=r.length?r[0].valor:`Parab\xE9ns, ${t.apelido}`,r=r.replace("[Nome]",t.nome),r=r.replace("[Apelido]",t.apelido),r=r.replace("[PrimeiroNome]",(s=(e=(u=t.nome)==null?void 0:u.split(" "))==null?void 0:e[0])!=null?s:""),r=r.replace("[PrimeiroApelido]",(m=(y=(v=t.apelido)==null?void 0:v.split(" "))==null?void 0:y[0])!=null?m:""));const l=t.tipoTelefone==="WhatsApp"?"https://api.whatsapp.com/send?"+(t.aniversario?`text=${r}`:"")+"&phone=":"tel:+";this.abrirURL(l+await $utils.formatarTelefone(t))},telefoneIcone(t){return{Celular:{color:"dark",name:"phone_iphone",size:"18px"},Comercial:{color:"dark",name:"phone",size:"18px"},Fixo:{color:"dark",name:"phone",size:"18px"},Principal:{color:"orange",name:"star",size:"18px"},WhatsApp:{cor:"whatsapp",nome:"whatsapp",tamanho:18}}[t]||{color:"dark",name:"phone",size:"18px"}},async obterContatos(t){let r={};for(const l of t)if(l.idContato&&!r[l.idContato]){const u=await $erp().contato.get(l.idContato);u&&u.id&&(r[l.idContato]={imagem:u.imagem||""})}this.contato=r},async obterConsultaRecente(){await this.criarObjStoreIDB();const t=String(this.codigoClienteSistema)+"_"+String(this.codigoContatoUsuario)+"/vendedor";let r=await this.obterObjIDb(t);if(r){this.filtro={codigoClienteSistema:this.codigoClienteSistema,codigoContatoUsuario:this.codigoContatoUsuario,empresas:r.empresas,dataConsulta:new Date(r.dataConsulta),periodo:r.periodo},this.nomesEmpresasSelecionadas=[];for(const u of this.filtro.empresas){const e=this.empresas.find(s=>s.codigoContato===u);e&&this.nomesEmpresasSelecionadas.push(e.nome)}const l=r.dados;return await this.obterContatos([...l.posVenda,...l.aniversariantes]),this.acertarDatas(l),this.cockpit=l,!0}return!1},async salvarConsultaRecente(){await this.criarObjStoreIDB(),this.salvarObjIDb({id:String(this.filtro.codigoClienteSistema)+"_"+String(this.filtro.codigoContatoUsuario)+"/vendedor",periodo:this.filtro.periodo,dataConsulta:this.filtro.dataConsulta.toISOString(),empresas:this.filtro.empresas,dados:this.cockpit})},async criarObjStoreIDB(){if(!("indexedDB"in window)){console.log("Navegador sem suporte ao IndexedDB");return}let t=indexedDB.open("cockpit",1);return t.onupgradeneeded=function(r){r.target.result.createObjectStore("consultasRecentes",{keyPath:"id"}).createIndex("id","id",{unique:!0})},new Promise((r,l)=>{t.onsuccess=function(u){r()},t.onerror=function(u){r()}})},salvarObjIDb(t){if(!("indexedDB"in window))return;let r,l,u;return r=new Promise((e,s)=>{u=e}),l=indexedDB.open("cockpit",1),l.onsuccess=function(){l=l.result.transaction(["consultasRecentes"],"readwrite").objectStore("consultasRecentes").put($utils.clonarV2(t)),l.onsuccess=function(v){u()},l.onerror=function(v){u()}},r},obterObjIDb(t){if(!("indexedDB"in window))return;let r,l,u;return r=new Promise((e,s)=>{u=e}),l=indexedDB.open("cockpit",1),l.onsuccess=function(){l=l.result.transaction(["consultasRecentes"],"readwrite").objectStore("consultasRecentes").get(t),l.onsuccess=function(v){u(v.target.result)},l.onerror=function(v){u()}},r},async filtrar(){this.carregando=!0,this.contato={},this.filtro.periodo.ini=new Date(this.filtro.periodo.ini).toISOString(),this.filtro.periodo.fim=new Date(this.filtro.periodo.fim).toISOString(),this.filtro.dataConsulta=new Date;let t=await this.$utils.geeksApi({"cockpit-vendedor":{funcao:"4AA26CFA-1FE9-426C-955D-09206DE424CB",codigoClienteSistema:this.filtro.codigoClienteSistema,codigoContatoUsuario:this.filtro.codigoContatoUsuario,codigoUsuario:$db.usuario.logado.codigoUsuario,empresas:$utils.clonarV2(this.filtro.empresas).map(r=>r.codigoContato),periodo:this.filtro.periodo}});t=t.data["cockpit-vendedor"],await this.obterContatos([...t.posVenda,...t.aniversariantes]),this.acertarDatas(t),this.cockpit=t,this.salvarConsultaRecente(),this.carregando=!1},acertarDatas(t){const r=new Date(new Date().setHours(0,0,0,0)).toISOString().replace(/\d{4}-\d{2}-\d{2}/g,"");t.parametros.periodoIni=(t.parametros.periodoIni||"").replace(/T.+$/g,r),t.parametros.periodoFim=(t.parametros.periodoFim||"").replace(/T.+$/g,r),t.parametros.periodoIniAnoAnterior=(t.parametros.periodoIniAnoAnterior||"").replace(/T.+$/g,r),t.parametros.periodoFimAnoAnterior=(t.parametros.periodoFimAnoAnterior||"").replace(/T.+$/g,r),t.parametros.ytDDia1=(t.parametros.ytDDia1||"").replace(/T.+$/g,r),t.parametros.ytDHoje=(t.parametros.ytDHoje||"").replace(/T.+$/g,r),t.parametros.ytDAnoAnteriorDia1=(t.parametros.ytDAnoAnteriorDia1||"").replace(/T.+$/g,r),t.parametros.ytDAnoAnteriorHoje=(t.parametros.ytDAnoAnteriorHoje||"").replace(/T.+$/g,r)},async atualizar(t=!0){try{let r,l,u;u=(await $erp().contato.get(this.usuario.id)||{}).codigoContato,r=JSON.parse(localStorage.getItem("clienteSistema"))||{},l=r.codigoClienteSistema,this.codigoClienteSistema=l,this.codigoContatoUsuario=u;const v=(await $db.contato.ler({filtros:{ativo:!0,empresas:!0}})).data.map(f=>f.id);let y=(await $erp().empresa.toArray()).filter(f=>~v.indexOf(f.idContato));this.empresas=y.map(f=>({codigoContato:f.codigoContato,nome:f!=null&&f.sigla?f==null?void 0:f.sigla:f.apelido+" - "+f.numeroDocumentoNacional,apelido:f.apelido,numeroDocumentoNacional:f.numeroDocumentoNacional}));let m,V;if(m=new Date(new Date(new Date().setDate(1)).setHours(0,0,0,0)),V=new Date(new Date(new Date(m).setMonth(m.getMonth()+1)).setDate(0)),this.nomesEmpresasSelecionadas=[],this.filtro={codigoClienteSistema:this.codigoClienteSistema,codigoContatoUsuario:this.codigoContatoUsuario,empresas:[],dataConsulta:new Date,periodo:{ini:m,fim:V}},t&&await this.obterConsultaRecente()&&(this.carregando=!1,!(new Date-new Date(this.filtro.dataConsulta)>5*6e4)))return;this.filtrar()}catch(r){$q.notifyError("N\xE3o foi poss\xEDvel carregar os dados do cockpit",r)}},async mostrarJsonViewer(){await this.$refs.jsonViewer.show(this)}},watch:{"$route.params.id"(){!~this.$route.name.indexOf("CockpitVendedor")||this.atualizar()},"filtro.periodo.ini"(){console.log("filtro.periodo.ini",this.filtro.periodo.ini)}},async created(){this.sistemaPai=$utils.sistemaPai(),this.metasPermissao=await $db.permissao.objeto("configuracoes/metas"),this.atualizar()}},le={id:"cockipitvendedor"},ce={class:"col-12 col-md-6"},de={class:"col"},ue=a("div",{class:"col-auto",style:{"align-items":"center",display:"flex"}},[a("label",null,"at\xE9")],-1),me={class:"col"},fe={class:"row q-col-gutter-md q-mb-md"},pe={class:"col-12 flex items-center justify-between"},he={style:{"font-size":"70%"}},ge=a("div",null,null,-1),ve={class:"progress"},we={class:"row justify-between"},ke={class:"text-left text-blue-8 q-mt-sm q-pb-none",style:{"line-height":"22px"}},_e={class:"text-h5 text-weight-bold"},Ce={class:"text-center text-blue-8 q-mt-sm q-pb-none",style:{"line-height":"22px"}},be={class:"text-h5 text-weight-bold"},xe={class:"text-right text-positive q-mt-sm q-pb-none",style:{"line-height":"22px"}},ye={class:"text-h5 text-weight-bold"},Ae={key:0,class:"col-12 col-md-4"},De={class:"row justify-center"},Pe={class:"col-11 col-sm-10 col-md-11 col-lg-10"},Se={class:"text-h4 text-weight-bold text-center text-blue-8 q-px-none"},Ve={class:"text-body1 text-tertiary text-weight-regular text-center q-px-none"},je={class:"col-6 col-md-3"},Me={class:"row justify-around items-center"},Te={class:"col"},Be={class:"col"},qe=a("div",null,null,-1),Ie={class:"col-6 col-md-3"},Re=a("br",null,null,-1),Ee={class:"col-6 col-md-3"},Ne={class:"text-tertiary"},He={class:"col-6 col-md-3"},ze={class:"text-tertiary"},Ue={key:1,class:"col-12"},Fe={class:"row justify-around items-center"},Oe={class:"col-4 col-md-auto"},Qe={class:"col-4 col-md-auto"},Ye={class:"col-4 col-md-auto"},Je={class:"col-12 col-md-6"},$e={class:"row items-center justify-between"},Le={class:"row items-center no-wrap"},Ge={class:"row items-center"},We={class:"col-12 col-md-6"},Ke={class:"row items-center no-wrap"};function Xe(t,r,l,u,e,s){const v=A("campo"),y=A("row"),m=A("g-label"),V=A("Gauge"),f=A("avatar"),U=A("JsonViewer");return C(),S("div",le,[o(k,{class:"q-pa-sm no-shadow"},{default:i(()=>[o(y,{class:"q-col-gutter-md items-center"},{default:i(()=>[a("div",ce,[o($,{modelValue:e.filtro.empresas,"onUpdate:modelValue":[r[0]||(r[0]=n=>e.filtro.empresas=n),s.filtrar],options:e.empresas,"option-value":"codigoContato",label:"Filtre por Empresa","option-label":"nome",dense:"",outlined:"","use-chips":"",multiple:""},L({prepend:i(()=>[o(I,{name:"mdi-filter"})]),_:2},[e.empresas.length>1?{name:"option",fn:i(({itemProps:n,opt:w,selected:F,toggleOption:O})=>[o(R,B(q(n)),{default:i(()=>[o(j,null,{default:i(()=>[o(G,{innerHTML:w.nome},null,8,["innerHTML"])]),_:2},1024),o(j,{side:""},{default:i(()=>[o(W,{"model-value":F,"onUpdate:modelValue":Ze=>O(w)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024)]),_:2},1040)]),key:"0"}:void 0]),1032,["modelValue","onUpdate:modelValue","options"])]),a("div",de,[o(v,{modelValue:e.filtro.periodo.ini,"onUpdate:modelValue":r[1]||(r[1]=n=>e.filtro.periodo.ini=n),tipo:"data",onBlur:s.filtrar,outlined:""},null,8,["modelValue","onBlur"])]),ue,a("div",me,[o(v,{modelValue:e.filtro.periodo.fim,"onUpdate:modelValue":r[2]||(r[2]=n=>e.filtro.periodo.fim=n),tipo:"data",onBlur:s.filtrar,outlined:""},null,8,["modelValue","onBlur"])]),a("div",null,[t.$db.usuario.desenvolvedor()?(C(),D(x,{key:0,icon:"more_vert",round:"",flat:""},{default:i(()=>[o(K,null,{default:i(()=>[p((C(),D(R,{clickable:"",onClick:r[3]||(r[3]=n=>s.mostrarJsonViewer())},{default:i(()=>[o(j,{avatar:""},{default:i(()=>[o(I,{name:"mdi-file-replace",size:"sm"})]),_:1}),o(j,null,{default:i(()=>[c("Ver Objeto")]),_:1})]),_:1})),[[X]])]),_:1})]),_:1})):P("",!0)])]),_:1})]),_:1}),a("div",fe,[a("div",pe,[a("span",he,[c(" Atualizado em: "+d(t.$filters.dataHora(this.filtro.dataConsulta))+" ",1),p(o(Z,{color:"primary",size:20},null,512),[[h,e.carregando]])]),o(x,{onClick:r[4]||(r[4]=n=>s.atualizar(!1)),round:"",flat:"",color:"primary",size:"sm",icon:"refresh"})]),a("div",{class:M(["col-12",e.metasPermissao?"col-md-2":"col-md-3"])},[o(k,{color:"white",inline:"",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[c(" Pend\xEAncias ")]),_:1}),p(a("div",null,[o(m,{onClick:s.irParaCockpitVendas,text:"h3 bold center",color:"text-negative",class:"cursor-pointer"},{default:i(()=>[c(d(t.$filters.numero(e.cockpit.pendencias.orcamentos)),1)]),_:1},8,["onClick"]),o(m,{text:"center"},{default:i(()=>[c("Or\xE7amentos")]),_:1})],512),[[h,!e.carregando]]),ge]),_:1})]),_:1})],2),a("div",{class:M(["col-12",e.metasPermissao?"col-md-6":"col-md-9"])},[o(k,{color:"white",inline:"",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[c(" Faturamento ")]),_:1}),p(a("div",null,[a("div",ve,[a("div",{class:"progress-bar bg-primary",style:b(s.faturamentoProgressBar.periodo)},null,4),a("div",{class:"progress-bar progress-bar-striped bg-info",style:b(s.faturamentoProgressBar.hoje)},null,4),a("div",{class:"progress-bar progress-bar-animated progress-bar-striped bg-success",style:b(s.faturamentoProgressBar.projecao)},null,4)]),a("div",we,[a("div",ke,[a("span",_e," R$ "+d(t.$filters.numero(e.cockpit.faturamento.periodo,2)),1),o(m,{text:"body1 regular",color:"text-tertiary"},{default:i(()=>[c("Per\xEDodo")]),_:1})]),a("div",Ce,[a("span",be," R$ "+d(t.$filters.numero(e.cockpit.faturamento.hoje,2)),1),o(m,{text:"body1 regular",color:"text-tertiary"},{default:i(()=>[c("sendo Hoje")]),_:1})]),a("div",xe,[a("span",ye," R$ "+d(t.$filters.numero(e.cockpit.faturamento.projecao,2)),1),o(m,{text:"body1 regular",color:"text-tertiary"},{default:i(()=>[c("Proje\xE7\xE3o Final")]),_:1})])])],512),[[h,!e.carregando]])]),_:1})]),_:1})],2),e.metasPermissao?(C(),S("div",Ae,[o(k,{color:"white",inline:"",class:"fit no-shadow"},{default:i(()=>[o(g,null,{default:i(()=>[o(m,{text:"h6",style:{position:"absolute",top:"15px",left:"16px"}},{default:i(()=>[c("Meta")]),_:1}),a("div",De,[a("div",Pe,[o(V,{current:e.cockpit.metas.metaFaturamentoPeriodo,target:e.cockpit.metas.metaTotal,dg1:"#ef5350",dg2:"#ffb74d",dg3:"#8bc34a",color:"#f2f2f2",colorCenter:"#ffffff"},{default:i(()=>[a("div",Se,d(t.$filters.numero(e.cockpit.metas.metaPercentual,1))+"% ",1),a("div",Ve," R$ "+d(t.$filters.numero(e.cockpit.metas.metaTotal,2)),1)]),_:1},8,["current","target"])])])]),_:1}),o(T,{anchor:"bottom middle",self:"center middle"},{default:i(()=>[c(" R$ "+d(t.$filters.numero(e.cockpit.faturamento.periodo,2)),1)]),_:1})]),_:1})])):P("",!0),a("div",je,[o(k,{color:"white",inline:"",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[c(" Atendimento c/ vendas ")]),_:1}),p(a("div",Me,[a("div",Te,[o(m,{text:"h4 bold center",color:"text-blue-8"},{default:i(()=>[c(d(t.$filters.numero(e.cockpit.conversao.conversoesHoje))+"/"+d(t.$filters.numero(e.cockpit.conversao.atendimentosHoje)),1)]),_:1}),o(m,{text:"center"},{default:i(()=>[c("Hoje")]),_:1})]),a("div",Be,[o(m,{text:"h4 bold center",color:"text-blue-8"},{default:i(()=>[c(d(t.$filters.numero(e.cockpit.conversao.conversoesPeriodo))+"/"+d(t.$filters.numero(e.cockpit.conversao.atendimentosPeriodo)),1)]),_:1}),o(m,{text:"center"},{default:i(()=>[c("Per\xEDodo")]),_:1})])],512),[[h,!e.carregando]]),qe]),_:1})]),_:1})]),a("div",Ie,[o(k,{color:"white",inline:"",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[c(" Maior Venda Per\xEDodo ")]),_:1}),p(o(m,{text:"h4 bold left",color:"text-blue-8"},{default:i(()=>[c(d(t.$filters.numero(e.cockpit.ticketMedio.maiorVendaPeriodo,2))+" ",1),o(x,{icon:"mdi-trophy",color:"amber-7",round:"",unelevated:"",dense:"",class:"float-right"})]),_:1},512),[[h,!e.carregando]]),p(a("small",null,[c(" Recorde Hist\xF3rico "),a("strong",null,d(t.$filters.numero(e.cockpit.ticketMedio.maiorVendaHistoria,2)),1)],512),[[h,!e.carregando]]),o(T,{anchor:"bottom middle",self:"center middle"},{default:i(()=>[c(" Fatura N\xB0. "+d(e.cockpit.ticketMedio.maiorVendaPeriodoNumeroFatura),1),Re,c(" Cliente: "+d(e.cockpit.ticketMedio.maiorVendaPeriodoNomeCliente),1)]),_:1})]),_:1})]),_:1})]),a("div",Ee,[o(k,{color:"white",inline:"",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[c(" Ticket M\xE9dio Per\xEDodo ")]),_:1}),p(o(m,{text:"h4 bold left",color:"text-blue-8"},{default:i(()=>[c(d(t.$filters.numero(e.cockpit.ticketMedio.ticketMedioPeriodo,2))+" ",1),o(x,{icon:"mdi-bell",round:"",dense:"",unelevated:"",class:"float-right",color:e.cockpit.ticketMedio.percentualTicketMedioYeartoDateRelAnterior>=0?"positive":"negative"},null,8,["color"])]),_:1},512),[[h,!e.carregando]]),p(a("small",{class:M(e.cockpit.ticketMedio.percentualTicketPeriodoRelAnterior>=0?"text-positive":"text-negative")},[a("span",Ne,d(t.$filters.numero(e.cockpit.ticketMedio.ticketMedioPeriodoAnoAnterior,2)),1),c(" (\u0394 "+d(t.$filters.numero(e.cockpit.ticketMedio.percentualTicketPeriodoRelAnterior,2))+"%) ",1)],2),[[h,!e.carregando]]),o(T,{anchor:"bottom middle",self:"center middle"},{default:i(()=>[c(d(t.$filters.data(e.cockpit.parametros.periodoIniAnoAnterior))+" "+d(t.$filters.data(e.cockpit.parametros.periodoFimAnoAnterior))+" do ano anterior ",1)]),_:1})]),_:1})]),_:1})]),a("div",He,[o(k,{inline:"",color:"white",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[c(" M\xE9dio YtD ")]),_:1}),p(o(m,{text:"h4 bold left",color:"text-blue-8"},{default:i(()=>[c(d(t.$filters.numero(e.cockpit.ticketMedio.ticketMedioYeartoDate,2))+" ",1),o(x,{icon:"mdi-bell",round:"",unelevated:"",dense:"",class:"float-right",color:e.cockpit.ticketMedio.percentualTicketMedioYeartoDateRelAnterior>=0?"positive":"negative"},null,8,["color"])]),_:1},512),[[h,!e.carregando]]),p(a("small",{class:M(e.cockpit.ticketMedio.percentualTicketMedioYeartoDateRelAnterior>=0?"text-positive":"text-negative")},[a("span",ze,d(t.$filters.numero(e.cockpit.ticketMedio.ticketMedioYeartoDateAnoAnterior,2)),1),c(" (\u0394 "+d(t.$filters.numero(e.cockpit.ticketMedio.percentualTicketMedioYeartoDateRelAnterior,2))+"%) ",1)],2),[[h,!e.carregando]]),o(T,{anchor:"bottom middle",self:"center middle"},{default:i(()=>[c(d(t.$filters.data(e.cockpit.parametros.ytDAnoAnteriorDia1))+" "+d(t.$filters.data(e.cockpit.parametros.ytDAnoAnteriorHoje))+" do ano anterior ",1)]),_:1})]),_:1})]),_:1})]),e.sistemaPai==="optisoul"?(C(),S("div",Ue,[o(k,{inline:"",color:"white",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit column justify-between"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[c(" Envelopes ")]),_:1}),p(a("div",Fe,[a("div",Oe,[a("div",{onClick:r[5]||(r[5]=(...n)=>s.irParaCockpitEnvelopes&&s.irParaCockpitEnvelopes(...n)),class:"text-h4 text-weight-bold text-center text-negative cursor-pointer"},d(t.$filters.numero(e.cockpit.pendencias.envelopesAtrasados)),1),o(g,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[c(" Atrasados ")]),_:1})]),a("div",Qe,[a("div",{onClick:r[6]||(r[6]=(...n)=>s.irParaCockpitEnvelopes&&s.irParaCockpitEnvelopes(...n)),class:"text-h4 text-weight-bold text-center text-negative cursor-pointer"},d(t.$filters.numero(e.cockpit.pendencias.envelopesHoje)),1),o(g,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[c(" Para hoje ")]),_:1})]),a("div",Ye,[a("div",{onClick:r[7]||(r[7]=(...n)=>s.irParaCockpitEnvelopes&&s.irParaCockpitEnvelopes(...n)),class:"text-h4 text-weight-bold text-center text-negative cursor-pointer"},d(t.$filters.numero(e.cockpit.pendencias.envelopesAEntregar)),1),o(g,{class:"q-pa-none text-tertiary text-center"},{default:i(()=>[c(" A Entregar ")]),_:1})])],512),[[h,!e.carregando]])]),_:1})]),_:1})])):P("",!0),a("div",Je,[o(k,{inline:"",color:"white",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[c(" P\xF3s-venda ")]),_:1}),p(o(E,{rows:e.cockpit.posVenda,columns:s.colunas.posVenda,class:"no-shadow text-left"},{body:i(n=>[o(N,{props:n,style:{cursor:"pointer"}},{default:i(()=>[o(_,{key:"imagem",props:n,onClick:w=>s.irParaAtendimentoVenda(n.row.idContato)},{default:i(()=>[a("div",$e,[o(f,{imagem:(e.contato[n.row.idContato]||{}).imagem,rotulo:n.row.nome,tamanho:"40",class:"q-mr-sm"},null,8,["imagem","rotulo"])])]),_:2},1032,["props","onClick"]),o(_,{key:"nome",props:n,onClick:w=>s.irParaAtendimentoVenda(n.row.idContato)},{default:i(()=>[c(d(n.row.nome),1)]),_:2},1032,["props","onClick"]),o(_,{key:"telefone",props:n,onClick:w=>s.abrirTelefone({...n.row}),class:"text-no-wrap"},{default:i(()=>[a("div",Le,[o(x,{color:"none",dense:"",flat:"",round:""},{default:i(()=>[(C(),D(H(n.row.tipoTelefone==="WhatsApp"?"icone":"q-icon"),B(q(s.telefoneIcone(n.row.tipoTelefone))),null,16))]),_:2},1024),c(" "+d(n.row.telefone),1)])]),_:2},1032,["props","onClick"]),o(_,{key:"nroVenda",props:n,onClick:w=>s.irParaAtendimentoVenda(n.row.idContato)},{default:i(()=>[c(" #"+d(n.row.nroVenda),1)]),_:2},1032,["props","onClick"]),n.row.optisoul?(C(),D(_,{key:"nroEnvelope",props:n,onClick:w=>s.irParaAtendimentoVenda(n.row.idContato)},{default:i(()=>[c(" #"+d(n.row.nroEnvelope),1)]),_:2},1032,["props","onClick"])):P("",!0),o(_,{key:"valor",props:n,onClick:w=>s.irParaAtendimentoVenda(n.row.idContato)},{default:i(()=>[a("div",Ge,[o(x,{color:"none",class:"q-mx-xs",dense:"",flat:"",round:"",icon:"shopping_cart"}),c(" "+d(t.$filters.numero(n.row.valor||0,2)),1)])]),_:2},1032,["props","onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),[[h,!e.carregando]])]),_:1})]),_:1})]),a("div",We,[o(k,{inline:"",color:"white",class:"text-tertiary fit no-shadow"},{default:i(()=>[o(g,{class:"d-flex fit"},{default:i(()=>[o(m,{text:"h6",class:"q-pb-md"},{default:i(()=>[c(" Aniversariantes ")]),_:1}),p(o(E,{rows:e.cockpit.aniversariantes,columns:s.colunas.aniversariantes,class:"no-shadow text-left"},{body:i(n=>[o(N,{props:n,style:{cursor:"pointer"}},{default:i(()=>[o(_,{key:"imagem",props:n,onClick:w=>s.irParaAtendimentoContato(n.row.idContato)},{default:i(()=>[o(f,{imagem:(e.contato[n.row.idContato]||{}).imagem,rotulo:n.row.nome,tamanho:"40"},null,8,["imagem","rotulo"])]),_:2},1032,["props","onClick"]),o(_,{key:"nome",props:n,onClick:w=>s.irParaAtendimentoContato(n.row.idContato)},{default:i(()=>[c(d(n.row.nome),1)]),_:2},1032,["props","onClick"]),o(_,{key:"telefone",props:n,onClick:w=>s.abrirTelefone({...n.row,aniversario:!0})},{default:i(()=>[a("div",Ke,[o(x,{color:"none",dense:"",flat:"",round:""},{default:i(()=>[(C(),D(H(n.row.tipoTelefone==="WhatsApp"?"icone":"q-icon"),B(q(s.telefoneIcone(n.row.tipoTelefone))),null,16))]),_:2},1024),c(" "+d(n.row.telefone),1)])]),_:2},1032,["props","onClick"]),o(_,{key:"aniversario",props:n,onClick:w=>s.irParaAtendimentoContato(n.row.idContato)},{default:i(()=>[c(d(n.row.aniversario),1)]),_:2},1032,["props","onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),[[h,!e.carregando]])]),_:1})]),_:1})])]),o(U,{ref:"jsonViewer"},null,512)])}var rt=z(se,[["render",Xe]]);export{rt as default};
