(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["231c1f4e"],{a650:function(t,a,e){},bbb4:function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ConfiguracoesUsuarios"},[e("div",{staticClass:"q-pb-md"},[e("q-card",{staticClass:" shadow-3 row no-shadow"},[e("div",{staticClass:"col-12 q-pt-md"},[e("q-toolbar",{staticClass:"no-shadow q-pa-none",attrs:{"text-color":"black",color:"transparent"}},[e("q-toolbar-title",{staticClass:"q-pa-none"},[e("div",{staticClass:"filters row q-pa-sm q-ma-md gutter-x-sm bg-white",staticStyle:{"border-radius":"5px","min-height":"50px"}},[e("div",{staticClass:"col-12 col-md q-pl-none"},[e("div",{staticClass:"row "},[e("q-btn",{staticClass:"no-shadow",attrs:{icon:"filter_list",round:"",color:"faded"}}),e("q-chips-input",{staticClass:"col q-mx-sm",attrs:{color:"faded"},model:{value:t.grupos,callback:function(a){t.grupos=a},expression:"grupos"}})],1)])])])],1)],1)]),e("div",{staticClass:"no-shadow"},[e("div",{staticClass:"row gutter-sm"},[e("div",{staticClass:"col-12 col-lg-8"},[e("q-list",[e("q-collapsible",{attrs:{opened:"",label:"Usuários"}},[e("q-list",[e("q-collapsible",{attrs:{opened:"",label:"Administrador"}},[e("q-card",{staticClass:"extratoItem bg-white q-mb-md q-pa-md"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-lg"},[e("img",{staticClass:"avatar float-left",staticStyle:{"max-width":"40px",height:"auto",float:"left"},attrs:{src:"https://i.pinimg.com/originals/a9/38/09/a938091f6fdca06fc6e829688f2dbe88.jpg"}}),e("q-toolbar-title",[e("div",[t._v("Ricardo Floriano\n                            ")]),e("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("\n                              Ricardo Floriano da Silva\n                            ")])])],1),e("div",{staticClass:"col-10 offset-1 q-pl-md col-lg"},[e("q-toolbar-title",[e("div",[t._v("018.594.415.99")]),e("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("\n                              Administrador\n                            ")])])],1),e("div",{staticClass:"col-12 col-lg",staticStyle:{"text-align":"right"}},[e("q-btn",{staticClass:"no-shadow q-ma-xs",attrs:{rounded:"",dense:"",flat:"",icon:"vpn_lock",color:"primary",size:"md"},on:{click:function(a){t.openedTitulo=!0}}}),e("q-btn",{staticClass:"no-shadow q-ma-xs",attrs:{rounded:"",dense:"",flat:"",icon:"edit",color:"primary",size:"md"},on:{click:function(a){t.openedEditar=!0}}}),e("q-btn",{staticClass:"no-shadow q-ma-xs",attrs:{rounded:"",dense:"",flat:"",icon:"delete",color:"grey",size:"md"}})],1)])])],1),e("div",{staticClass:"q-mt-md text-center"},[e("q-btn",{attrs:{color:"positive",icon:"add",label:"Usuário",outline:"",size:"sm"}})],1)],1)],1)],1)],1),e("div",{staticClass:"col-12 col-lg"},[e("q-list",[e("q-collapsible",{attrs:{opened:"",label:"Grupos"}},[e("q-card",{staticClass:"extratoItem bg-white q-mb-md q-pa-md"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-toolbar-title",[e("div",[t._v("Administrador\n                            ")])])],1),e("q-btn",{staticClass:"no-shadow q-ma-xs",attrs:{rounded:"",dense:"",flat:"",icon:"vpn_lock",color:"primary",size:"md"},on:{click:function(a){t.openedTitulo=!0}}}),e("q-btn",{staticClass:"no-shadow q-ma-xs",attrs:{rounded:"",dense:"",flat:"",icon:"edit",color:"primary",size:"md"},on:{click:function(a){t.openedEditar=!0}}}),e("q-btn",{staticClass:"no-shadow q-ma-xs",attrs:{rounded:"",dense:"",flat:"",icon:"delete",color:"grey",size:"md"}})],1)])],1),e("div",{staticClass:"q-mt-md text-center"},[e("q-btn",{attrs:{color:"positive",icon:"add",label:"Grupo",outline:"",size:"sm"}})],1)],1)],1)])])],1),e("q-modal",{attrs:{"content-css":{width:"80vw",maxWidth:"480px"}},model:{value:t.openedEditar,callback:function(a){t.openedEditar=a},expression:"openedEditar"}},[e("q-modal-layout",[e("q-toolbar",{attrs:{slot:"header"},slot:"header"},[e("q-toolbar-title",[t._v("Nome do Usuário")])],1),e("form",[e("div",{staticClass:"layout-padding"},[e("q-select",{staticClass:"q-body-1",attrs:{placeholder:"Grupo",radio:"",color:"green-7",options:t.selectOptionsPC},model:{value:t.selectPC,callback:function(a){t.selectPC=a},expression:"selectPC"}}),e("campo",{attrs:{maxlength:"50",rotulo:"Senha"}}),e("campo",{attrs:{maxlength:"50",rotulo:"Tela Inicial"}})],1),e("q-toolbar",{attrs:{slot:"footer",color:"light"},slot:"footer"},[e("q-toolbar-title",[e("div",{staticClass:"row justify-end"},[e("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{flat:"",color:"primary",label:"Cancelar"}}),e("q-btn",{attrs:{flat:"",color:"primary",type:"submit",label:"Salvar"}})],1)])],1)],1)],1)],1),e("q-modal",{staticClass:"bg-cinza",attrs:{maximized:""},model:{value:t.openedTitulo,callback:function(a){t.openedTitulo=a},expression:"openedTitulo"}},[e("q-layout-header",{attrs:{reveal:""}},[e("q-toolbar",{staticClass:"BarraTopo"},[e("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{flat:"",round:"",dense:"",icon:"arrow_back"}}),e("q-toolbar-title",[t._v("\n            Alterar Permissões\n          ")]),e("q-btn",{staticClass:"no-shadow",attrs:{color:"primary",label:"Salvar"}})],1)],1),e("q-modal-layout",[e("div",{staticClass:" row justify-center"},[e("div",{staticStyle:{width:"1280px","max-width":"100%"}},[e("div",{staticClass:"no-shadow q-mb-md row gutter-sm q-mx-none q-mt-xl "},[e("q-card",{staticClass:"col-12 bg-white q-pb-md no-shadow reverse"},[e("q-tree",{attrs:{nodes:t.tickable,color:"primary","default-expand-all":"",ticked:t.ticked,"tick-strategy":t.tickStrategy,filter:t.tickFilter,"node-key":"label"},on:{"update:ticked":function(a){t.ticked=a}}})],1)],1)])])])],1)],1)},o=[];l._withStripped=!0;var s=e("88db"),i={components:{Campo:s["a"]},data:function(){return{checkedVO:!1,checkedDetails:!1,checkedTitulo:!1,showMoreDetails:!1,openedSangria:!1,openedEditar:!1,openedTitulo:!1,showchat:!1,openedC:!1,showing:!1,dataIni:"",dataFin:"",grupos:[],tickable:[{label:"Empresas",icon:"business",children:[{label:"Geeks"},{label:"Carlos"}]},{label:"Telas e Diretivas",children:[{label:"Geeks"},{label:"Pleasant surroundings",icon:"photo",children:[{label:"Pleasing decor"}]},{label:"Extra information (has no tick)",icon:"photo"},{label:'Forced tick strategy (to "strict" in this case)',tickStrategy:"strict",icon:"school",children:[{label:"Happy atmosphere"},{label:"Good table presentation"},{label:"Very pleasing decor"}]}]}],ticked:[],tickStrategy:"leaf",tickFilter:null,simple:[{label:"Satisfied customers",children:[{label:"Good food",children:[{label:"Quality ingredients"},{label:"Good recipe"}]},{label:"Good service (disabled node)",disabled:!0,children:[{label:"Prompt attention"},{label:"Professional waiter"}]},{label:"Pleasant surroundings",children:[{label:"Happy atmosphere"},{label:"Good table presentation"},{label:"Pleasing decor"}]}]}],selectListOptions:[{label:"Nome do banco",inset:!0,sublabel:"Enables communication",stamp:"Saldo",value:"fb1"},{label:"Nome do banco",inset:!0,sublabel:"Enables communication",stamp:"Saldo",value:"fb2"}],selectPC:"",selectedDataTipo:"",selectDataTipo:[{label:"Vencimento",value:"goog"},{label:"Outro",value:"fb"}],selectOptionsPC:[{label:"Google",value:"goog"},{label:"Facebook",value:"fb"}],dados:{fonetipo:[{label:"Principal",value:"Principal"},{label:"Celular",value:"Celular"},{label:"Fixo",value:"Fixo"},{label:"WhatsApp",value:"WhatsApp"}]}}}},r=i,n=(e("d039"),e("2877")),c=Object(n["a"])(r,l,o,!1,null,null,null);c.options.__file="ConfiguracoesUsuarios.vue";a["default"]=c.exports},d039:function(t,a,e){"use strict";var l=e("a650"),o=e.n(l);o.a}}]);