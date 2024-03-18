import{_ as Q,M as N,bW as L,bX as z,bY as H,bZ as J,Y as c,b_ as Z,b$ as D,c0 as G,c1 as Y,c2 as F,Z as O,$ as W,c3 as X,b3 as K,p as b,o as u,d as C,f as a,w as e,B as j,D as q,x as v,l as h,E,aF as A,C as w,i as _,ai as g,aj as i,ak as o,j as d,e as r,L as B,ah as k,t as f,k as U,F as V,r as $,am as aa,A as ea,Q as ta,aL as oa,aB as R,G as sa}from"./index.fd6a1d5c.js";import{P as ra}from"./Plataforma15.3884092b.js";const na={components:{Avatar:N,PromptBuscaOnline:L,UsuarioAlterarSenha:z,MenuGerador:H,VendaModal:J},computed:{chatBotaoCor(){return this.chat?"primary":"tertiary"},config(){return c.configuracoes.valores},termoBuscaInLowerCase(){return(this.termoBusca||"").toLowerCase()},statusBanco(){return s=>{const n="";return!n||n==="100"?"":`${this.$filters.numero(n,2)}%`}},versao(){return Z.versao}},data(){return{dbContato:c.contato,dbUsuario:c.usuario,bancos:[],clienteSistema:{sistema:""},clienteSistemaBaixados:[],campos:{},dialogAlterarSenha:!1,chat:!1,menu:!1,permissoes:{},sincronismoStatus:D.status,sistemaPai:"",termoBusca:"",termoBuscaOnline:""}},methods:{abrirValidCertificadora(){window.open("http://www.validcertificadora.com.br/P/B516DF35-5BC4-4D2D-8A62-CCF42F9BEF71/RD019446","_blank")},abrirEntidadeOnline(s){let n="AtendimentoContato";~this.$route.name.indexOf("Atendimento")&&(n=this.$route.name),this.$router.push({name:n,params:{id:s.id}})},abrirPromptBuscaOnline(){this.$refs.promptBuscaOnline.mostrar()},adicionarContato(){$utils.emitter.emit("adicionarContato")},adicionarOrcamento(){this.$refs.vendaModal.mostrar()},menu_click(s){this.$emit("menuClick",s)},irParaAtendimento(){const s=localStorage.getItem("contatoSelecionado");this.$router.push({name:"Atendimento",params:{id:s||"0"}})},abrirZap(){this.sistemaPai==="optisoul"&&window.open("https://api.whatsapp.com/send?phone=5519986085252&text=Preciso%20de%20uma%20ajuda","_blank"),this.sistemaPai!=="optisoul"&&window.open("https://api.whatsapp.com/send?phone=551621116161&text=Preciso%20de%20uma%20ajuda","_blank")},async sincronizar(){G.log("BarraTopo","sincronizar()"),D.descarregarErp(),D.descarregarPlataforma()},onClickAlterarSenha(){this.dialogAlterarSenha=!0},alternarChat(){this.chat=!this.chat},alternarMenu(){this.menu=!this.menu},desconectar(){c.usuario.desconecta(),window.location.reload()},fecharChat(){this.chat=!1},imprimir:Y,async mostrarTabelas(){let s=await F.getDatabaseNames();s.splice(s.indexOf("plataforma"),1);const n={};for(const p of s){const x=(await O(p).tables).sort((t,l)=>t.name.localeCompare(l.name));for(const t of x){const l=await t.count();n.hasOwnProperty(t.name)||(n[t.name]={}),n[t.name][p]=l}}return console.table(n),n},async restaurar(){if(await W.sincronismoFila.count()>0){this.$q.notifyError("N\xE3o pode restaurar! H\xE1 dados no dispositivo que n\xE3o foram sincronizados.");return}for(const s of this.bancos)if(await O(s.bancoDeDados).sincronismoFila.count()>0){this.$q.notifyError(`N\xE3o pode restaurar! H\xE1 dados do banco '${s.bancoDeDados}' no dispositivo que n\xE3o foram sincronizados.`);return}try{await new Promise((s,n)=>{this.$q.dialog({title:"Tem certeza?",message:"Esta opera\xE7\xE3o vai apagar todos os dados de seu dispositivo! Para confirmar digite a palavra 'RESTAURAR'.",prompt:{model:"",isValid:p=>p.toUpperCase()==="RESTAURAR",type:"text",class:"bg-light"},cancel:{label:"CANCELAR",push:!0,color:"tertiary",flat:!0},ok:{label:"RESTAURAR",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(p=>{s()}).onCancel(()=>{n()})})}catch{return}this.$q.loading.show({message:"Restaurando"});try{const s=await F.getDatabaseNames();for(const p of s)await O(p,"delete");const n=localStorage.getItem("dispositivoCliente");localStorage.clear(),n&&localStorage.setItem("dispositivoCliente",n),window.location.reload()}catch(s){this.$q.notifyError("Erro na opera\xE7\xE3o de restaurar",s)}finally{this.$q.loading.hide()}},async selecionaBancoDados(s){this.clienteSistema=s||{},c.cache.set("reload","1"),c.cache.set("bancoDeDados",s.bancoDeDados||""),c.cache.setJson("clienteSistema",s),this.$router.push({name:"Home"})}},props:{restricao:Boolean},emits:["menuClick"],async mounted(){this.clienteSistemaBaixados=JSON.parse(localStorage.getItem("clienteSistemaBaixados")),this.clienteSistema=JSON.parse(localStorage.getItem("clienteSistema"))||{},this.bancos=await X.sincronismo.le(),this.sistemaPai=K(),this.permissoes={atendimento:await c.permissao.objeto("atendimento"),admCustom:await c.permissao.objeto("admcustom"),admEnvelopes:await c.permissao.objeto("admenvelopes"),admOS:await c.permissao.objeto("admos"),funilVendas:await c.permissao.objeto("crmfunil"),item:await c.permissao.objeto("item"),importarReceita:await c.permissao.objeto("importarReceita"),caixa:await c.permissao.objeto("caixa"),cockpit:await c.permissao.objeto("cockpit"),nfe:await c.permissao.objeto("nfe")}}},la={class:"BarraTopo"},ia={style:{height:"30px"}},ca=v("img",{src:"/assets/b15-white.svg",alt:"B15",style:{height:"30px"},class:"q-mr-md"},null,-1),da={key:0,src:"/assets/optidados-white.svg",alt:"Optidados",style:{height:"30px"},class:"q-mr-md"},ua={class:"q-pa-none q-my-none items-center justify-center full-height column"},ma={class:"q-mt-md q-mx-md"},fa=v("small",null,"\xA92020 Geeks, B15",-1),pa={key:0};function _a(s,n,p,x,t,l){const y=b("avatar"),S=b("row"),P=b("menu-gerador"),T=b("usuario-alterar-senha"),I=b("PromptBuscaOnline"),M=b("VendaModal");return u(),C("div",la,[a(ea,{unelevated:""},{default:e(()=>[a(j,{class:"bg-gradiente text-primary q-px-sm"},{default:e(()=>[a(q,{dense:"",flat:"",icon:"menu",color:"white",round:"",onClick:l.alternarMenu,class:"q-mr-sm"},null,8,["onClick"]),v("div",ia,[ca,t.sistemaPai==="optisoul"?(u(),C("img",da)):h("",!0)]),a(E,{class:"q-px-sm"}),a(q,{dense:"",flat:"",icon:"search",color:"white",round:"",onClick:l.abrirPromptBuscaOnline},null,8,["onClick"]),a(q,{dense:"",flat:"",icon:"add",color:"white"},{default:e(()=>[a(A,null,{default:e(()=>[w((u(),_(g,{link:"","no-border":"",separator:""},{default:e(()=>[a(i,{clickable:"",onClick:l.adicionarContato},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"person",size:"sm"})]),_:1}),a(o,null,{default:e(()=>[r("Contato")]),_:1})]),_:1},8,["onClick"]),a(i,{clickable:"",onClick:l.adicionarOrcamento},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"add_shopping_cart",size:"sm"})]),_:1}),a(o,null,{default:e(()=>[r("Or\xE7amento/Venda")]),_:1})]),_:1},8,["onClick"])]),_:1})),[[B]])]),_:1})]),_:1})]),_:1}),a(j,{class:"bg-gradiente text-white q-py-sm"},{default:e(()=>[a(S,{class:"items-center q-mx-none q-px-none q-py-xs"},{default:e(()=>[v("div",ua,[a(y,{imagem:t.dbUsuario.logado.img,rotulo:t.dbUsuario.logado.nome,tamanho:"40",onClick:l.sincronizar},null,8,["imagem","rotulo","onClick"]),a(A,{class:"BarraTopo-usuarioPopover q-py-sm"},{default:e(()=>[a(g,{"no-border":""},{default:e(()=>[a(i,null,{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(y,{imagem:t.dbUsuario.logado.img,rotulo:t.dbUsuario.logado.nome,tamanho:"38"},null,8,["imagem","rotulo"])]),_:1}),a(o,{class:"q-pl-sm"},{default:e(()=>[a(k,null,{default:e(()=>[r(f(t.dbUsuario.logado.nome),1)]),_:1}),a(k,{caption:""},{default:e(()=>[r(f(t.dbUsuario.logado.cpf),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(g,{class:"q-ma-md bordered",dense:""},{default:e(()=>[a(i,{dense:"",class:"text-tertiary",clickable:""},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"storage"})]),_:1}),a(o,null,{default:e(()=>[a(k,null,{default:e(()=>[r(f(t.clienteSistema.bancoDeDados),1)]),_:1}),a(k,{caption:"",class:"text-caption"},{default:e(()=>[r(f(t.clienteSistema.sistema),1)]),_:1})]),_:1}),a(o,{side:""},{default:e(()=>[r(f(l.statusBanco(t.clienteSistema.bancoDeDados)),1)]),_:1}),a(U,null,{default:e(()=>[r("Base")]),_:1}),a(A,null,{default:e(()=>[a(g,{link:""},{default:e(()=>[(u(!0),C(V,null,$(t.clienteSistemaBaixados,m=>(u(),C(V,{key:m.idClienteSistema},[w((u(),_(i,{clickable:"",class:"text-tertiary q-py-xs",onClick:ka=>l.selecionaBancoDados(m),dense:""},{default:e(()=>[a(o,null,{default:e(()=>[a(k,null,{default:e(()=>[r(f(m.bancoDeDados),1)]),_:2},1024),a(k,{caption:"",class:"text-caption"},{default:e(()=>[r(f(m.sistema),1)]),_:2},1024)]),_:2},1024),a(o,{side:""},{default:e(()=>[r(f(l.statusBanco(m.bancoDeDados)),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[B]]),a(aa)],64))),128)),w((u(),_(i,{to:{name:"AutenticacaoBancos",params:{operacao:"selecionar"}},class:"text-tertiary",clickable:"",dense:""},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"settings"})]),_:1}),a(o,null,{default:e(()=>[a(k,null,{default:e(()=>[r("Selecionar bases")]),_:1})]),_:1})]),_:1})),[[B]])]),_:1})]),_:1})]),_:1}),a(i,{onClick:l.mostrarTabelas,dense:"",class:"text-tertiary"},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"data_usage"})]),_:1}),a(o,null,{default:e(()=>[r("0 gb")]),_:1}),a(U,null,{default:e(()=>[r("Espa\xE7o")]),_:1})]),_:1},8,["onClick"]),a(i,{to:{name:"PainelSincronismo"},dense:"",class:"text-tertiary",clickable:""},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"swap_calls"})]),_:1}),a(o,null,{default:e(()=>[r(f("Fila enviar: "+String(t.sincronismoStatus.tamanhoFila)),1)]),_:1}),a(U,null,{default:e(()=>[r("Fila de sincrinismo para enviar")]),_:1})]),_:1})]),_:1}),w((u(),_(g,null,{default:e(()=>[a(i,{onClick:l.abrirZap,clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"contact_support"})]),_:1}),a(o,null,{default:e(()=>[r("Ajuda")]),_:1})]),_:1},8,["onClick"]),a(i,{onClick:l.abrirValidCertificadora,clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"add_moderator"})]),_:1}),a(o,null,{default:e(()=>[r("Certificado Digital")]),_:1})]),_:1},8,["onClick"]),p.restricao?h("",!0):(u(),_(i,{key:0,to:{name:"Configuracoes"},clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"settings"})]),_:1}),a(o,null,{default:e(()=>[r("Configura\xE7\xF5es")]),_:1})]),_:1})),a(i,{onClick:l.restaurar,clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"warning"})]),_:1}),a(o,null,{default:e(()=>[r("Restaurar e sair")]),_:1})]),_:1},8,["onClick"]),a(i,{onClick:l.onClickAlterarSenha,clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"mdi-lock-open-outline"})]),_:1}),a(o,null,{default:e(()=>[r("Alterar senha")]),_:1})]),_:1},8,["onClick"]),!!t.dbUsuario.logado.administrador&&[1,2].includes(t.dbUsuario.logado.grupoInterno)?(u(),_(i,{key:1,to:{name:"CriarBanco"},clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"mdi-database-plus"})]),_:1}),a(o,null,{default:e(()=>[r("Criar banco")]),_:1})]),_:1})):h("",!0),t.sistemaPai==="b15"?(u(),_(i,{key:2,to:{name:"FaturaB15"},clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"attach_money"})]),_:1}),a(o,null,{default:e(()=>[r("Fatura B-15")]),_:1})]),_:1})):h("",!0),t.sistemaPai==="optisoul"?(u(),_(i,{key:3,to:{name:"FaturaB15Optidados"},clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"attach_money"})]),_:1}),a(o,null,{default:e(()=>[r("Fatura B-15 Optidados")]),_:1})]),_:1})):h("",!0),a(i,{onClick:l.desconectar,clickable:"",dense:"",class:"text-tertiary"},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"exit_to_app"})]),_:1}),a(o,null,{default:e(()=>[r("Sair")]),_:1})]),_:1},8,["onClick"])]),_:1})),[[B]])]),_:1})]),a(E,null,{default:e(()=>[r(f(t.dbUsuario.logado.nome),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(oa,{modelValue:t.menu,"onUpdate:modelValue":n[1]||(n[1]=m=>t.menu=m),behavior:"mobile",elevated:"",side:"left"},{default:e(()=>[v("div",ma,[a(ta,{modelValue:t.termoBusca,"onUpdate:modelValue":n[0]||(n[0]=m=>t.termoBusca=m),debounce:300,color:"none",dense:"",outlined:"",placeholder:"Filtrar",clearable:"","clear-icon":"close"},{prepend:e(()=>[a(d,{name:"mdi-filter"})]),_:1},8,["modelValue"])]),a(P,{termoBusca:l.termoBuscaInLowerCase,onMenuClick:l.menu_click},null,8,["termoBusca","onMenuClick"]),!!t.dbUsuario.logado.desenvolvedor&&t.dbUsuario.logado.desenvolvedor()||t.dbUsuario.logado.grupoInterno===2?(u(),_(g,{key:0,dense:"",link:"","no-border":""})):h("",!0),a(g,{"no-border":""},{default:e(()=>[a(i,{class:"justify-between text-caption row"},{default:e(()=>[fa,t.sistemaPai==="optisoul"?(u(),C("small",pa,"OptiSoul - Optidados")):h("",!0),v("small",null,f(l.versao),1)]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(T,{modelValue:t.dialogAlterarSenha,"onUpdate:modelValue":n[2]||(n[2]=m=>t.dialogAlterarSenha=m)},null,8,["modelValue"]),a(I,{ref:"promptBuscaOnline",onSelecionar:l.abrirEntidadeOnline},null,8,["onSelecionar"]),a(M,{ref:"vendaModal"},null,512)])}var ba=Q(na,[["render",_a]]);const ha={components:{Plataforma15:ra,BarraTopo:ba},data(){return{rota:"",start:!1}},methods:{async menu_click(s){this.$refs.Plataforma15.menu_click(s)}},mounted(){this.$route.name==="Plataforma15"&&!this.$route.redirectedFrom&&this.$refs.Plataforma15.menu_click(JSON.parse(JSON.stringify(this.$route.params)))}};function ga(s,n,p,x,t,l){const y=b("barra-topo"),S=b("Plataforma15"),P=b("router-view");return u(),C(V,null,[a(y,{onMenuClick:l.menu_click},null,8,["onMenuClick"]),a(sa,null,{default:e(()=>[w(a(S,{ref:"Plataforma15"},null,512),[[R,s.$route.name==="Plataforma15"]]),w(a(P,null,null,512),[[R,s.$route.name!=="Plataforma15"]])]),_:1})],64)}var wa=Q(ha,[["render",ga]]);export{wa as default};
