(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0b4e5a7c"],{4105:function(t,e,o){},"53a6":function(t,e,o){"use strict";var a=o("4105"),n=o.n(a);n.a},a52f:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{staticClass:"Cockpit"},[o("barra-topo"),o("q-page-container",[o("q-page",{staticClass:"u-container"},[o("q-toolbar",{staticClass:"q-py-sm",attrs:{color:"none"}},[o("avatar",{attrs:{imagem:t.contato.imagem,rotulo:t.contato.apelido,tamanho:"40"}}),o("q-toolbar-title",[t._v("\n          "+t._s(t.contato.nome)+"\n        ")]),t.permissoes.obterUsuario?o("q-btn",{attrs:{flat:"",dense:"",icon:"search",round:"",size:"lg"},on:{click:t.obterContatoViaPrompt}},[o("q-tooltip",[t._v("Buscar vendedor/empresa")])],1):t._e(),o("q-btn",{attrs:{icon:"help_outline",flat:"",dense:"",round:"",size:"lg"},on:{click:function(e){t.showingHelp=!t.showingHelp}}})],1),o("q-tabs",{attrs:{align:"justify",color:"none"}},[t._l(t.abas,function(e){return o("q-route-tab",t._b({key:e.label,staticClass:"Cockpit-aba",attrs:{slot:"title"},slot:"title"},"q-route-tab",e,!1))}),o("router-view")],2),t.promptContato.ativo?o("prompt-contato-novo",{attrs:{filtro:t.promptContato.filtro,placeholder:t.promptContato.placeholder},on:{selecionar:t.obterContatoViaPrompt},model:{value:t.promptContato.visivel,callback:function(e){t.$set(t.promptContato,"visivel",e)},expression:"promptContato.visivel"}}):t._e()],1)],1),o("q-modal",{attrs:{"content-css":{minWidth:"100vw",minHeight:"100vh"}},model:{value:t.showingHelp,callback:function(e){t.showingHelp=e},expression:"showingHelp"}},[o("q-modal-layout",{staticStyle:{height:"100vh",width:"100vw"}},[o("iframe",{staticStyle:{height:"100%",width:"100%"},attrs:{src:"https://www.youtube.com/embed/wAtU7y8UDEw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),o("q-toolbar",{attrs:{slot:"header"},slot:"header"},[o("q-toolbar-title",[t._v("Videoaula - Descubra o cockpit")]),o("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{dense:"",flat:"",icon:"close",round:""}})],1)],1)],1)],1)},n=[];a._withStripped=!0;o("7f7f"),o("7514"),o("551c"),o("96cf");var r=o("c973"),i=o.n(r),s=o("448a"),c=o.n(s),u=o("df3a"),l=o("01f0"),p=o("41ff"),m=o("8149"),d=o("3e8a"),h=o("ed08"),f={components:{Avatar:u["a"],BarraTopo:l["a"],PromptContatoNovo:p["a"]},computed:{abas:function(){return[{icon:"insert_chart",label:"Vendedor",to:{name:"CockpitVendedor",params:{id:this.$route.params.id}}}].concat(c()(m["a"].usuario.logado.desenvolvedor&&m["a"].usuario.logado.desenvolvedor()?[{icon:"multiline_chart",label:"Performance",to:{name:"CockpitPerformance",params:{id:this.$route.params.id}}}]:[]),c()(this.permissoes.vendas?[{icon:"shopping_cart",label:"Vendas",to:{name:"CockpitVendas",params:{id:this.$route.params.id}}}]:[]),c()(this.permissoes.faturas?[{icon:"how_to_vote",label:"Faturas",to:{name:"CockpitFaturas",params:{id:this.$route.params.id}}}]:[]),c()("optisoul"===this.sistemaPai&&this.permissoes.envelope?[{icon:"mail",label:"Envelopes",to:{name:"CockpitEnvelopes",params:{id:this.$route.params.id}}}]:[]))}},data:function(){return{contato:{},permissoes:{},promptContato:{ativo:!1,visivel:!1,filtro:{ativo:!0,usuario:!0,vendedores:!0},placeholder:"Selecione o usuário"},showingHelp:!1,sistemaPai:""}},methods:{atualizar:function(){var t=i()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.obterContatoUsuario();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),this.$q.notifyError("Não foi possível carregar os dados do cockpit",t.t0);case 8:case"end":return t.stop()}},t,this,[[0,5]])}));return function(){return t.apply(this,arguments)}}(),criarObjStoreIDB:function(){var t=i()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("indexedDB"in window){t.next=3;break}return console.log("Navegador sem suporte ao IndexedDB"),t.abrupt("return");case 3:return e=indexedDB.open("cockpit",1),e.onupgradeneeded=function(t){var e=t.target.result,o=e.createObjectStore("consultasRecentes",{keyPath:"id"});o.createIndex("id","id",{unique:!0})},t.abrupt("return",new Promise(function(t,o){e.onsuccess=function(e){t()},e.onerror=function(e){t()}}));case 6:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),salvarObjIDb:function(t){var e,o,a;if("indexedDB"in window)return e=new Promise(function(t,e){a=t}),o=indexedDB.open("cockpit",1),o.onsuccess=function(){var e=o.result.transaction(["consultasRecentes"],"readwrite"),n=e.objectStore("consultasRecentes");o=n.put(t),o.onsuccess=function(t){a()},o.onerror=function(t){a()}},e},obterObjIDb:function(t){var e,o,a;if("indexedDB"in window)return e=new Promise(function(t,e){a=t}),o=indexedDB.open("cockpit",1),o.onsuccess=function(){var e=o.result.transaction(["consultasRecentes"],"readwrite"),n=e.objectStore("consultasRecentes");o=n.get(t),o.onsuccess=function(t){a(t.target.result)},o.onerror=function(t){a()}},e},obterContatoUsuario:function(){var t=i()(regeneratorRuntime.mark(function t(){var e,o,a,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=JSON.parse(localStorage.getItem("usuario"))||{},o=this.$route.params.id,a=e.numeroDocumentoNacional,n={},!a){t.next=18;break}if(!o){t.next=12;break}return t.next=7,Object(d["a"])().contato.get(o);case 7:if(t.t0=t.sent,t.t0){t.next=10;break}t.t0={};case 10:n=t.t0,n.ativo&&!n.excluido&&n.numeroDocumentoNacional===a||(n={});case 12:if(n.id){t.next=17;break}return t.next=15,Object(d["a"])().contato.where({numeroDocumentoNacional:a}).toArray();case 15:r=t.sent,n=r.find(function(t){return t.ativo&&!t.excluido&&t.codigoUsuario})||{};case 17:this.selecionarContato(n);case 18:if(n.id){t.next=22;break}return t.next=21,this.obterContatoViaPrompt();case 21:n=t.sent;case 22:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),obterContatoViaPrompt:function(){var t=i()(regeneratorRuntime.mark(function t(e,o,a){var n,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=8;break}if(n=new Promise(function(t,e){r.resolve||(r.resolve={}),r.resolve["promptContato"]=t}),this.promptContato.ativo){t.next=6;break}return this.promptContato.ativo=!0,t.next=6,this.$nextTick();case 6:return this.promptContato.visivel=!0,t.abrupt("return",n);case 8:this.promptContato.visivel=!1,this.resolve["promptContato"](o),this.selecionarContato(o);case 11:case"end":return t.stop()}},t,this)}));return function(e,o,a){return t.apply(this,arguments)}}(),salvarConsultaRecente:function(){var t=i()(regeneratorRuntime.mark(function t(){var e,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.criarObjStoreIDB();case 2:e=JSON.parse(localStorage.getItem("clienteSistema"))||{},o=e.codigoClienteSistema,this.salvarObjIDb({id:o,idContato:this.contato.id});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),selecionarContato:function(t){t.id&&(this.contato={id:t.id,nome:t.nome||"",apelido:t.apelido||"",imagem:t.imagem||""},this.$router.push({name:"Cockpit"===this.$route.name?"CockpitVendedor":this.$route.name,params:{id:t.id||""}}),this.salvarConsultaRecente())}},mounted:function(){var t=this;this.permissoes={obterUsuario:!1,envelope:!1,vendas:!1,faturas:!1},m["a"].permissao.objeto("Diretiva_Cockpit_MudarUsuario").then(function(e){t.permissoes.obterUsuario=e}),m["a"].permissao.objeto("cockpit/envelope").then(function(e){t.permissoes.envelope=e}),m["a"].permissao.objeto("cockpit/vendas").then(function(e){t.permissoes.vendas=e}),m["a"].permissao.objeto("cockpit/faturas").then(function(e){t.permissoes.faturas=e}),this.sistemaPai=Object(h["sistemaPai"])(),this.atualizar()}},v=f,b=(o("53a6"),o("2877")),w=Object(b["a"])(v,a,n,!1,null,null,null);w.options.__file="Cockpit.vue";e["default"]=w.exports}}]);