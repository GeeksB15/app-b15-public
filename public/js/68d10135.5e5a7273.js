(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["68d10135"],{"1c2e":function(e,t,r){},"1c4c":function(e,t,r){"use strict";var a=r("9b43"),o=r("5ca1"),n=r("4bf8"),i=r("1fa8"),s=r("33a4"),c=r("9def"),u=r("f1ae"),l=r("27ee");o(o.S+o.F*!r("5cc5")(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,o,d,p=n(e),f="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,g=void 0!==h,b=0,v=l(p);if(g&&(h=a(h,m>2?arguments[2]:void 0,2)),void 0==v||f==Array&&s(v))for(t=c(p.length),r=new f(t);t>b;b++)u(r,b,g?h(p[b],b):p[b]);else for(d=v.call(p),r=new f;!(o=d.next()).done;b++)u(r,b,g?i(d,h,[o.value,b],!0):o.value);return r.length=b,r}})},"492a":function(e,t,r){"use strict";var a=r("1c2e"),o=r.n(a);o.a},dc06:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-tabs",{attrs:{align:"justify",color:"none"},model:{value:e.abaSelecionada,callback:function(t){e.abaSelecionada=t},expression:"abaSelecionada"}},[e._l(e.abas,function(t,a){return r("q-tab",{key:a,staticClass:"Layout-aba",attrs:{slot:"title",name:t.to.name,label:t.label,icon:t.icon},on:{click:function(r){e.irPara(t.to)}},slot:"title"})}),e._t("default")],2)},o=[];a._withStripped=!0;var n=r("3156"),i=r.n(n),s=(r("7f7f"),r("ac4d"),r("8a81"),r("ac6a"),r("55dd"),r("7514"),r("96cf"),r("c973")),c=r.n(s),u=r("8149"),l=r("3e8a"),d={data:function(){return{abaSelecionada:"",abas:[]}},methods:{atualizar:function(){var e=c()(regeneratorRuntime.mark(function e(){var t,r,a,o,n,i,s,c,d,p,f,m;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.abas=[],this.abaSelecionada="",t=JSON.parse(localStorage.getItem("clienteSistema"))||{},(t||{}).idSistema){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,l["b"].objeto.where({nomeObjeto:this.objetoPai}).toArray();case 7:if(e.t0=function(e){return e.id},r=e.sent.find(e.t0),(r||{}).id){e.next=11;break}return e.abrupt("return");case 11:return e.next=13,l["b"].sistemaObjeto.where({idPai:r.id,idSistema:t.idSistema}).toArray();case 13:if(a=e.sent,a.length){e.next=16;break}return e.abrupt("return");case 16:return e.next=18,l["b"].objeto.where("id").anyOf(a.map(function(e){return e.idObjeto})).toArray();case 18:if(o=e.sent,o.length){e.next=21;break}return e.abrupt("return");case 21:a=a.sort(function(e,t){return(e.ordem||0)>(t.ordem||0)?1:-1}),n=[],i=!0,s=!1,c=void 0,e.prev=26,d=regeneratorRuntime.mark(function e(){var t,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=f.value,r=o.find(function(e){return e.id===t.idObjeto}),a=JSON.parse(r.rota||null)||{},e.next=5,u["a"].permissao.objeto(r.nomeObjeto);case 5:if(e.sent){e.next=7;break}return e.abrupt("return","continue");case 7:if("componente"===r.tipo&&!r.menuPrincipal){e.next=9;break}return e.abrupt("return","continue");case 9:if(!r.menuDesenvolvimento||u["a"].usuario.logado.desenvolvedor&&u["a"].usuario.logado.desenvolvedor()){e.next=11;break}return e.abrupt("return","continue");case 11:n.push({icon:r.icone||"",label:r.descricao||"",to:{name:a.name||""}});case 12:case"end":return e.stop()}},e)}),p=a[Symbol.iterator]();case 29:if(i=(f=p.next()).done){e.next=37;break}return e.delegateYield(d(),"t1",31);case 31:if(m=e.t1,"continue"!==m){e.next=34;break}return e.abrupt("continue",34);case 34:i=!0,e.next=29;break;case 37:e.next=43;break;case 39:e.prev=39,e.t2=e["catch"](26),s=!0,c=e.t2;case 43:e.prev=43,e.prev=44,i||null==p.return||p.return();case 46:if(e.prev=46,!s){e.next=49;break}throw c;case 49:return e.finish(46);case 50:return e.finish(43);case 51:this.abas=n;case 52:case"end":return e.stop()}},e,this,[[26,39,43,51],[44,,46,50]])}));return function(){return e.apply(this,arguments)}}(),irPara:function(e){this.$router.push(i()({},e,this.$route.params.id?{params:{id:this.$route.params.id}}:{})),this.abaSelecionada=e.name}},props:{objetoPai:{type:String,required:!0}},created:function(){this.atualizar()},updated:function(){var e=this;if(this.abas.find(function(t){return t.to.name===e.$route.name}))this.abaSelecionada=this.$route.name;else{if(!this.abas.length)return;this.irPara(this.abas[0].to)}}},p=d,f=r("2877"),m=Object(f["a"])(p,a,o,!1,null,null,null);m.options.__file="MenuAbas.vue";t["a"]=m.exports},f1ae:function(e,t,r){"use strict";var a=r("86cc"),o=r("4630");e.exports=function(e,t,r){t in e?a.f(e,t,o(0,r)):e[t]=r}},fb8a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-layout",{staticClass:"Qg"},[r("barra-topo"),r("q-page-container",[r("q-page",{staticClass:"u-container"},[r("q-toolbar",{staticClass:"q-py-sm topo",attrs:{color:"none"}},[e.filtro.empresas.length>1?r("q-icon",{attrs:{size:"1.7rem",name:"business",rounded:""}}):r("avatar",{attrs:{imagem:(e.contatosEmpresa.find(function(t){return t.codigoContato===e.filtro.empresas[0]})||{}).imagem,rotulo:(e.contatosEmpresa.find(function(t){return t.codigoContato===e.filtro.empresas[0]})||{}).apelido,tamanho:"40"}}),r("q-toolbar-title",[r("div",{staticClass:"row q-subheading"},[r("div",{staticClass:"bg-tertiary text-white round-borders q-pa-sm q-mx-xs"},[e._v("\n              "+e._s(e.textoEmpresasSelecionadas)+"\n            ")])])]),r("q-btn",{attrs:{icon:"help_outline",size:"lg",flat:"",dense:"",round:""},on:{click:function(t){e.showingHelp=!e.showingHelp}}}),r("q-btn",{staticClass:"no-shadow q-mr-xs",attrs:{icon:"mdi-refresh",size:"lg",flat:"",dense:""},on:{click:e.filtrar}},[r("q-tooltip",[e._v("\n            Atualizado em: "+e._s(e._f("dataHora")(this.filtro.dataConsulta))+"\n          ")])],1),r("q-btn",{staticClass:"no-shadow",attrs:{icon:"mdi-filter",size:"lg",flat:"",dense:""},on:{click:function(t){e.showFilters=!e.showFilters}}})],1),r("q-layout-drawer",{attrs:{overlay:"",side:"right"},model:{value:e.showFilters,callback:function(t){e.showFilters=t},expression:"showFilters"}},[r("q-toolbar",{attrs:{color:"white","text-color":"faded"}},[r("q-icon",{attrs:{name:"mdi-filter",color:"faded"}}),r("q-toolbar-title",[e._v("Filtrar")]),r("q-btn",{attrs:{dense:"",flat:"",icon:"close",round:""},on:{click:function(t){e.showFilters=!e.showFilters}}})],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 row q-px-md"},[r("h1",{staticClass:"col-12 q-subheading text-dark"},[e._v("Empresas")]),r("campo",{staticClass:"col-12",attrs:{opcoes:e.empresas.options,tipo:"seletor",multiple:"",chips:"",erro:e.erroEmpresas},on:{input:e.checarEmpresasSelecionadas},model:{value:e.empresas.selected,callback:function(t){e.$set(e.empresas,"selected",t)},expression:"empresas.selected"}})],1),r("div",{staticClass:"col-12 row q-px-md q-mt-lg"},[r("h1",{staticClass:"col-12 q-subheading text-dark"},[e._v("Período")]),r("campo",{staticClass:"col-12 q-mt-sm",attrs:{tipo:"data",placeholder:"De",erro:e.erroPeriodo},on:{input:e.checarPeriodo},model:{value:e.filtro.periodo.ini,callback:function(t){e.$set(e.filtro.periodo,"ini",t)},expression:"filtro.periodo.ini"}}),r("campo",{staticClass:"col-12 q-mt-sm",attrs:{tipo:"data",placeholder:"Até",erro:e.erroPeriodo},on:{input:e.checarPeriodo},model:{value:e.filtro.periodo.fim,callback:function(t){e.$set(e.filtro.periodo,"fim",t)},expression:"filtro.periodo.fim"}})],1),r("div",{staticClass:"col-12 row q-px-md q-mt-lg"},[r("div",{staticClass:"col-12 q-mt-md",staticStyle:{float:"left"}},[r("span",{staticStyle:{"font-size":"70%"}},[e._v("\n                Atualizado em: "+e._s(e._f("dataHora")(this.filtro.dataConsulta))+"\n                "),r("q-spinner",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{color:"primary",size:20}})],1)]),r("q-btn",{staticClass:"col-12",attrs:{color:"primary",label:"Filtrar"},on:{click:e.filtrar}})],1)])],1),r("MenuAbas",{attrs:{objetoPai:"qg"}},[r("router-view",{attrs:{dados:e.dados,carregando:e.carregando}})],1)],1)],1)],1)},o=[];a._withStripped=!0;r("ac6a"),r("cadf"),r("4f7f"),r("1c4c"),r("7514"),r("551c"),r("96cf");var n=r("c973"),i=r.n(n),s=r("df3a"),c=r("01f0"),u=r("88db"),l=r("dc06"),d=r("8149"),p=r("3e8a"),f=r("ed08"),m={components:{Avatar:s["a"],BarraTopo:c["a"],Campo:u["a"],MenuAbas:l["a"]},computed:{textoEmpresasSelecionadas:function(){return 1===this.empresasSelecionadas.length?this.empresasSelecionadas[0]:this.empresasSelecionadas.length+" empresas"}},data:function(){return{carregando:!1,contatosEmpresa:[],dados:{},empresas:this.renovarEmpresas(),empresasSelecionadas:[],erroEmpresas:!1,erroPeriodo:!1,filtro:this.renovarFiltro(),showingHelp:!1,showFilters:!1}},methods:{checarEmpresasSelecionadas:function(){this.empresas.selected.length?this.erroEmpresas=!1:this.erroEmpresas=!0},checarPeriodo:function(){new Date(this.filtro.periodo.ini)<=new Date(this.filtro.periodo.fim)?this.erroPeriodo=!1:this.erroPeriodo=!0},atualizar:function(){var e=i()(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new Date(new Date((new Date).setDate(1)).setHours(0,0,0,0)),r=new Date(new Date(new Date(t).setMonth(t.getMonth()+1)).setDate(0)),e.next=4,this.obterCodigoContatoUsuario();case 4:return e.next=6,this.obterCodigoClienteSistema();case 6:return e.next=8,this.obterEmpresas();case 8:return this.filtro={codigoClienteSistema:this.codigoClienteSistema,codigoContatoUsuario:this.codigoContatoUsuario,dataConsulta:new Date,empresas:this.empresas.selected,periodo:{ini:t,fim:r}},e.next=11,this.obterConsultaRecente();case 11:if(!e.sent){e.next=15;break}if(this.carregando=!1,new Date-new Date(this.filtro.dataConsulta)>3e5){e.next=15;break}return e.abrupt("return");case 15:this.filtrar();case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),criarObjStoreIDB:function(){var e=i()(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("indexedDB"in window){e.next=3;break}return console.log("Navegador sem suporte ao IndexedDB"),e.abrupt("return");case 3:return t=indexedDB.open("qg",1),t.onupgradeneeded=function(e){var t=e.target.result,r=t.createObjectStore("consultasRecentes",{keyPath:"id"});r.createIndex("id","id",{unique:!0})},e.abrupt("return",new Promise(function(e,r){t.onsuccess=function(t){e()},t.onerror=function(t){e()}}));case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),filtrar:function(){var e=i()(regeneratorRuntime.mark(function e(){var t,r,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.empresas.selected.length){e.next=3;break}return this.erroEmpresas=!0,e.abrupt("return");case 3:if(!(new Date(this.filtro.periodo.ini)>new Date(this.filtro.periodo.fim))){e.next=6;break}return this.erroPeriodo=!0,e.abrupt("return");case 6:return this.showFilters=!1,this.carregando=!0,this.filtro.periodo.ini=new Date(this.filtro.periodo.ini).toISOString(),this.filtro.periodo.fim=new Date(this.filtro.periodo.fim).toISOString(),this.filtro.dataConsulta=new Date,this.filtro.empresas=this.empresas.selected,this.empresasSelecionadas=this.empresas.options.filter(function(e){return a.empresas.selected.find(function(t){return e.valor===t})}).map(function(e){return e.rotulo}),e.next=15,this.$utils.geeksApi({"qg-empresa":{funcao:"9E4CD702-00E3-4200-8642-AC1CE9F0EF77",codigoContatoUsuario:this.filtro.codigoContatoUsuario,empresas:this.filtro.empresas,periodo:this.filtro.periodo}});case 15:return t=e.sent,this.dados["empresa"]=t.data["qg-empresa"],e.next=19,d["a"].contatoBusca.filtrar(null,{ativo:!0,usuario:!0},0);case 19:return r=e.sent,e.t0=r,e.next=23,d["a"].contatoBusca.filtrar(null,{ativo:!0,vendedores:!0},0);case 23:return e.t1=e.sent,r=e.t0.concat.call(e.t0,e.t1),e.next=27,this.$utils.geeksApi({"qg-equipe":{funcao:"5EA3C6F8-CF77-4692-A2E2-B8DC2592E2B7",codigoContatoUsuario:Array.from(new Set(r.map(function(e){return e.codigoContato}))),codigoClienteSistema:this.filtro.codigoClienteSistema,empresas:this.filtro.empresas,periodo:this.filtro.periodo}});case 27:return t=e.sent,this.dados["equipe"]=t.data["qg-equipe"],e.next=31,this.$utils.geeksApi({"qg-estoque":{funcao:"C2166CBA-1FE6-4A52-9098-6EC9E386A53A",codigoContatoUsuario:r.map(function(e){return e.codigoContato}),codigoClienteSistema:this.filtro.codigoClienteSistema,empresas:this.filtro.empresas,periodo:this.filtro.periodo}});case 31:t=e.sent,this.dados["estoque"]=t.data["qg-estoque"],this.salvarConsultaRecente(),this.carregando=!1;case 35:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),obterConsultaRecente:function(){var e=i()(regeneratorRuntime.mark(function e(){var t,r,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.criarObjStoreIDB();case 2:return t=String(this.codigoClienteSistema)+"_"+String(this.codigoContatoUsuario)+"/usuario",e.next=5,this.obterObjIDb(t);case 5:if(r=e.sent,!r){e.next=12;break}return this.filtro={codigoClienteSistema:this.codigoClienteSistema,codigoContatoUsuario:this.codigoContatoUsuario,empresas:r.empresas,dataConsulta:new Date(r.dataConsulta),periodo:r.periodo},this.empresasSelecionadas=this.empresas.options.filter(function(e){return a.filtro.empresas.find(function(t){return e.valor===t})}).map(function(e){return e.rotulo}),this.empresas.selected=this.filtro.empresas,this.dados=r.dados,e.abrupt("return",!0);case 12:return e.abrupt("return",!1);case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),obterCodigoClienteSistema:function(){var e=i()(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=JSON.parse(localStorage.getItem("clienteSistema"))||{},r=t.codigoClienteSistema,Object(f["verificarErro"])(!r,"Cliente Sistema não encontrado"),this.codigoClienteSistema=r;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),obterCodigoContatoUsuario:function(){var e=i()(regeneratorRuntime.mark(function e(){var t,r,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("usuario"))||{},r=t.numeroDocumentoNacional,a={},!r){e.next=8;break}return e.next=6,Object(p["a"])().contato.where({numeroDocumentoNacional:r}).toArray();case 6:o=e.sent,a=o.find(function(e){return e.ativo&&!e.excluido&&e.codigoUsuario})||{};case 8:Object(f["verificarErro"])(!a.id,"Contato não encontrado"),this.codigoContatoUsuario=a.codigoContato;case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),obterEmpresas:function(){var e=i()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["a"].contatoBusca.filtrar(null,{ativo:!0,empresas:!0},0);case 2:this.contatosEmpresa=e.sent,this.empresas.options=this.contatosEmpresa.map(function(e){return{rotulo:e.apelido,valor:e.codigoContato}}),this.empresas.selected=this.empresas.options.map(function(e){return e.valor});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),obterObjIDb:function(e){var t,r,a;if("indexedDB"in window)return t=new Promise(function(e,t){a=e}),r=indexedDB.open("qg",1),r.onsuccess=function(){var t=r.result.transaction(["consultasRecentes"],"readwrite"),o=t.objectStore("consultasRecentes");r=o.get(e),r.onsuccess=function(e){a(e.target.result)},r.onerror=function(e){a()}},t},renovarEmpresas:function(){return{selected:[],options:[]}},renovarFiltro:function(){return{codigoClienteSistema:"",codigoContatoUsuario:"",dataConsulta:"",empresas:[],periodo:{ini:"",fim:""}}},salvarConsultaRecente:function(){var e=i()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.criarObjStoreIDB();case 2:this.salvarObjIDb({id:String(this.filtro.codigoClienteSistema)+"_"+String(this.filtro.codigoContatoUsuario)+"/usuario",periodo:this.filtro.periodo,dataConsulta:this.filtro.dataConsulta.toISOString(),empresas:this.empresas.selected,dados:this.dados});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),salvarObjIDb:function(e){var t,r,a;if("indexedDB"in window)return t=new Promise(function(e,t){a=e}),r=indexedDB.open("qg",1),r.onsuccess=function(){var t=r.result.transaction(["consultasRecentes"],"readwrite"),o=t.objectStore("consultasRecentes");r=o.put(e),r.onsuccess=function(e){a()},r.onerror=function(e){a()}},t}},created:function(){this.atualizar()}},h=m,g=(r("492a"),r("2877")),b=Object(g["a"])(h,a,o,!1,null,null,null);b.options.__file="Qg.vue";t["default"]=b.exports}}]);