import{_ as E,p as m,o as d,i as p,w as r,f as e,s as S,B as q,E as N,e as c,x as g,aS as M,d as V,n as O,t as _,D as h,y as Q,M as U,N as z,bd as j,b$ as L,cg as H,Z as R,cn as G,l as y,q as X,k as $,aF as Z,ai as J,C as k,aj as b,ak as u,j as x,ah as v,L as D,b5 as K,H as W}from"./index.83d285ce.js";import{M as Y}from"./ContatoCombinar.f39a6b20.js";import{i as oo}from"./importarArquivoXlsx.c852f0ec.js";import{M as to}from"./MenuAbas.c2add79e.js";import"./xlsx.c23f63f7.js";const ao={id:{tipo:"id"},idContato:{tipo:"id"},logradouro:{tipo:"texto"},numero:{tipo:"texto"},complemento:{tipo:"texto"},condominio:{tipo:"texto"},bairro:{tipo:"texto"},cep:{tipo:"texto"},ibgeCod:{tipo:"texto"},municipio:{tipo:"texto"},uf:{tipo:"texto"},pais:{tipo:"texto"},grupo:{tipo:"texto"},cidadeCodChave:{tipo:"texto"},observacao:{tipo:"texto"},idCidade:{tipo:"id"}},eo={id:{tipo:"id"},tipoTelefone:{tipo:"texto"},telefone:{tipo:"texto"},observacao:{tipo:"texto"},idContato:{tipo:"id"}},A={endereco:{lista:ao},telefone:{lista:eo},id:{tipo:"id"},codigoContato:{tipo:"numerico"},nome:{tipo:"texto"},apelido:{tipo:"texto"},numeroDocumentoNacional:{tipo:"texto"},idContatoAssistente:{tipo:"id"},idContatoIndicacao:{tipo:"id"},idContatoMatriz:{tipo:"id"},idContatoTransportadora:{tipo:"id"},idContatoVendedor:{tipo:"id"},idFormaPagamento:{tipo:"id"},idItemTabelaPreco:{tipo:"id"},idEmpresaCarteira:{tipo:"id"},tipoDocumentoNacional:{tipo:"texto"},numeroDocumentoEstadual:{tipo:"texto"},numeroDocumentoMunicipal:{tipo:"texto"},site:{tipo:"texto"},email:{tipo:"texto"},emailNfe:{tipo:"texto"},sexo:{tipo:"texto"},segmento:{tipo:"texto"},condutaObservacao:{tipo:"texto"},condutaRestricao:{tipo:"texto"},observacao:{tipo:"texto"},observacaoConsulta:{tipo:"texto"},dataAbertura:{tipo:"dataHora"},dataCadastro:{tipo:"dataHora"},dataAlteracao:{tipo:"dataHora"},dataConsulta:{tipo:"dataHora"},codigoContatoVendedor:{tipo:"numerico"},codigoContatoAssistente:{tipo:"numerico"},codigoContatoIndicacao:{tipo:"numerico"},codigoContatoTransportadora:{tipo:"numerico"},codigoItemTabelaPreco:{tipo:"numerico"},codigoFormaPagamento:{tipo:"numerico"},condicaoPagamento:{tipo:"texto"},codigoAntigo:{tipo:"texto"},imagem:{tipo:"texto"},codigoGrupo:{tipo:"numerico"},ativo:{tipo:"logico"},excluido:{tipo:"logico"},codigoContatoPlataforma:{tipo:"numerico"},regime:{tipo:"texto"},observacaoNFE:{tipo:"texto"},limiteCredito:{tipo:"texto"},nSerieCert:{tipo:"texto"},codigoUsuario:{tipo:"texto"},crmCurvaABC:{tipo:"texto"},crmValorTotalVendasPeriodo:{tipo:"texto"},crmValorTotalOrcamentos:{tipo:"texto"},crmDataUltimoOrcamento:{tipo:"dataHora"},crmValorTotalVendasMesAtual:{tipo:"texto"},crmMetaProximaVenda:{tipo:"texto"},crmMargem:{tipo:"texto"},crmDataPrimeraVenda:{tipo:"dataHora"},crmDiasUltimaVenda:{tipo:"texto"},crmFrequenciaVenda:{tipo:"texto"},crmFrequenciaStatus:{tipo:"texto"},crmStatusFinanceiro:{tipo:"texto"},crmAcao:{tipo:"texto"},crmDataUltimoContato:{tipo:"dataHora"},cobrancaDataPrevisao:{tipo:"dataHora"},creditoUtilizado:{tipo:"decimal"},creditoDevolucao:{tipo:"decimal"},creditoDisponivel:{tipo:"decimal"},idUsuario:{tipo:"id"}},ro={alterados:0,arquivo:null,cor:"text-negative",corFinal:"",erro:"",erros:0,incluidos:0,listaErros:[],mensagem:"",mensagemFinal:"",modalResultado:!1},io={data(){return{importar:$utils.clonarV2(ro)}},emits:["update:modelValue"],methods:{beforeShow(){this.importar.arquivo=null,this.importar.mensagem="",this.importar.mensagemFinal="",this.importar.erro=""},hide(){this.$emit("update:modelValue",!1)},async prepareFile(t){const o=i=>new Promise((s,n)=>{const a=new FileReader;a.readAsBinaryString(i),a.onload=()=>s(a.result),a.onerror=l=>n(l)});try{const i=await o(t[0]);await this.importarArquivo(i),this.hide(),this.$q.notify({type:"positive",message:"Importa\xE7\xE3o realizada com sucesso"})}catch(i){this.importar.erro="Ocorreu erro ao importar contatos",this.$q.notifyError(this.importar.erro,i)}},templateDownload(){window.open("/statics/downloads/B15-Importar-ou-Atualizar-Contatos.xlsx","_self")},async importarArquivo(t){try{this.importar.modalResultado=!0,this.importar.mensagem="Carregando o arquivo .xlsx",this.importarLista=await $erp().contato.toArray();const o={Contato:A,ContatoTelefone:A.telefone.lista,ContatoEndereco:A.endereco.lista};await oo(t,o,this.importarCallbackParcial,this.importarCallbackErro,this.importarCallbackFinal)}catch(o){o.name&&o.name==="ErroValidacao"?(this.importar.erro=o.message,this.$q.notifyError(o.message,o)):(this.importar.erro="Ocorreu erro ao importar arquivo xlsx",this.$q.notifyError(this.importar.erro,o))}},async importarCallbackErro(t,o){this.importar.erros++,this.importar.listaErros.length<20&&this.importar.listaErros.push({linha:t,mensagem:o})},async importarCallbackFinal(t){this.importar.incluidos+this.importar.alterados>0?this.importar.erros>0?(this.importar.corFinal="bg-warning",this.importar.mensagemFinal="Importa\xE7\xE3o realizada parcialmente!"):(this.importar.corFinal="bg-positive text-white",this.importar.mensagemFinal="Importa\xE7\xE3o conclu\xEDda com sucesso!"):this.importar.erros>0?(this.importar.corFinal="text-negative",this.importar.mensagemFinal="Importa\xE7\xE3o n\xE3o realizada!"):(this.importar.corFinal="bg-warning",this.importar.mensagemFinal="Importa\xE7\xE3o n\xE3o realizada!")},acertarEnderecos(t){for(const o of t.atual.endereco){o.id=$utils.uuid(),o.idContato=t.atual.id;let i=(o.cep||"").replace(/[^0-9]/g,"");i.length===8&&(o.cep=i.substr(0,5)+"-"+i.substr(5,3)),o.pais||(o.pais="Brasil")}for(const o of t.original.endereco||[]){let i=t.atual.endereco.find(s=>{let n=$utils.diferencaNivel1(s,o);return delete n.id,Object.keys(n).length===0});i?i.id=o.id:t.atual.endereco.push(o)}},acertarTelefones(t){for(const o of t.atual.telefone)o.id=$utils.uuid(),o.idContato=t.atual.id;for(const o of t.original.telefone||[]){let i=t.atual.telefone.find(s=>{let n=$utils.diferencaNivel1(s,o);return delete n.id,Object.keys(n).length===0});i?i.id=o.id:t.atual.telefone.push(o)}},async importarCallbackParcial(t){const o=t.Contato[0];t.ContatoEndereco&&(o.endereco=t.ContatoEndereco),t.ContatoTelefone&&(o.telefone=t.ContatoTelefone);const i=t.chaves.length>0?a=>t.chaves.reduce((l,C)=>l&&a[C]===o[C],!0):a=>!1,s=this.importarLista.filter(i);if(o.numeroDocumentoNacional){const a=this.importarLista.filter(l=>l.numeroDocumentoNacional===o.numeroDocumentoNacional);if(a.length>1)throw new $utils.ErroValidacao(`NumeroDocumentoNacional deve ser \xFAnico (${o.numeroDocumentoNacional})`);if(a.length===1){if(s.length===0)throw new $utils.ErroValidacao(`NumeroDocumentoNacional deve ser \xFAnico (${o.numeroDocumentoNacional})`);if(a[0].id!==s[0].id)throw new $utils.ErroValidacao(`NumeroDocumentoNacional deve ser \xFAnico (${o.numeroDocumentoNacional})`)}}const n=$utils.dataAtual();if(s.length===0){const a={...$db.contato.vazio,dataCadastro:n,dataAlteracao:n,...o,id:$utils.uuid()};let l={atual:a,original:{}};this.acertarEnderecos(l),this.acertarTelefones(l),await $db.contato.gravaImportarContato(l),this.importarLista.push(a),this.importar.incluidos++}else if(s.length===1){let a=await $db.contato.leCompletoV2(s[0].id);o.id=a.atual.id,Object.assign(a.atual,o),this.acertarEnderecos(a),this.acertarTelefones(a),await $db.contato.gravaImportarContato(a),this.importar.alterados++}else{const a=t.chaves.map(l=>l+": "+o[l]).join(", ");throw new $utils.ErroValidacao(`Existem ${s.length} contatos no banco com a chave (${a})`)}}},props:{modelValue:{required:!0,type:Boolean}}},no={class:"q-pa-md"};function so(t,o,i,s,n,a){const l=m("row");return d(),p(Q,{modelValue:i.modelValue,onBeforeShow:a.beforeShow,onHide:a.hide},{default:r(()=>[e(S,null,{default:r(()=>[e(q,{class:"text-tertiary"},{default:r(()=>[e(N,null,{default:r(()=>[c(" Importar contatos ")]),_:1})]),_:1}),g("div",no,[e(M,{label:"Selecione o arquivo (.xlsx)","hide-upload-btn":"","auto-upload":"",factory:a.prepareFile},null,8,["factory"]),n.importar.erro?(d(),V("div",{key:0,class:O(["row","q-pa-sm",n.importar.cor])},_(n.importar.erro),3)):(d(),p(l,{key:1,class:"q-mt-md justify-center"},{default:r(()=>[e(h,{color:"primary",flat:"",icon:"cloud_download",onClick:a.templateDownload,label:"Baixar arquivo modelo (.xlsx)"},null,8,["onClick"])]),_:1}))])]),_:1})]),_:1},8,["modelValue","onBeforeShow","onHide"])}var lo=E(io,[["render",so]]);const co={components:{Avatar:U,Badge:z,Tutorial:j,ModalCombinarContato:Y,ImportarContatos:lo,MenuAbas:to},computed:{badge(){return this.contato.ativo?this.contato.condutaRestricao?{cor:"negative",rotulo:"Restri\xE7\xE3o"}:this.contato.condutaObservacao?{cor:"warning",rotulo:"Observa\xE7\xE3o"}:!1:{cor:"tertiary",rotulo:"Exclu\xEDdo"}},badgeDetalhes(){const{ativo:t,condutaRestricao:o,condutaObservacao:i}=this.contato;return t&&(o||i)||!1},podeAcessar(){return!this.contatoConsumidor&&!!this.contato},telefone(){let t=this.contato.telefone;return!t||!t.length?!1:(t=t.find(o=>o.tipo==="Principal")||t[0],t.telefone)},usuario(){return $db.usuario.logado}},data(){return{contato:$db.contato.vazio,carregando:!1,modalCombinar:!1,contatosInativosModal:!1,modalImportar:!1,contatoConsumidor:!1,sincronismoStatus:L.status}},methods:{async buscarContato(){const t=await $g.promptContato.show({filtro:{ativo:!0,somenteCarteira:!0},placeholder:"Selecione o contato"});$lodash.get(t,"id")&&($db.contato.selecionado=await $db.contato.le({id:t.id}),this.$router.push({name:this.$route.name,params:{id:t.id}}))},async adicionarContato(){!!this.$refs.componentefilho&&!!this.$refs.componentefilho.desejaDescartar&&!await this.$refs.componentefilho.desejaDescartar()||$q.dialog({message:"Qual \xE9 o nome completo?",preventClose:!0,prompt:{type:"text"},title:"Cadastrar contato",cancel:{label:"Cancelar",push:!0,color:"tertiary",flat:!0},ok:{label:"Criar",push:!0,class:"bg-primary",textColor:"white",flat:!0}}).onOk(async t=>{try{$q.loading.show();let o="";const i=($db.usuario.logado.cpf||"").replace(/\D/g,"");if(i){await $db.contato.carregarMemoria();let a;for(const l of $db.contato.contatos)if((l.numeroDocumentoNacional||"").replace(/\D/g,"")===i){a=l.id;break}a&&(await $erp().contatoGrupo.where({idContato:a}).toArray()).find(w=>~["vendedor","vendedora","vendedores","vendedor(a)"].indexOf((w.descricao||"").toLowerCase()))&&(o=a)}const s={id:H(),nome:t,ativo:!0,idContatoVendedor:o};await $db.contato.grava({contato:s});let n="AtendimentoContato";this.$route.name.indexOf("Atendimento")!==-1&&(n=this.$route.name),this.$router.push({name:n,params:{id:s.id}})}catch(o){$q.notifyError("Erro ao cadastrar contato.",o)}finally{$q.loading.hide()}})},async buscarContatoExcluido(){if(!!this.$refs.componentefilho&&!!this.$refs.componentefilho.desejaDescartar&&!await this.$refs.componentefilho.desejaDescartar())return;const t=await $g.promptContato.show({filtro:{ativo:!1,somenteCarteira:!0}});t.id&&this.$router.push({name:this.$route.name,params:{id:t.id}})},async carregarContato(){if(!this.carregando){this.carregando=!0;try{let t=this.$route.params.id;t=t==="0"?null:t;let o={};this.contatoConsumidor=!1,t&&(o=await $db.contato.le({id:t}),t=(o||{}).id);const i=await $db.configuracoes.leValorNumerico("venda.codigoconsumidor");if(o.codigoContato===i)this.contatoConsumidor=!0;else if(!t&&!!i){const s=await R().contato.where({codigoContato:i}).toArray();G(!s.length||!s[0].id,"Contato consumidor n\xE3o encontrado."),o=s[0],t=o.id,this.contatoConsumidor=!0}if(!t)return;this.contato=$db.contato.selecionado=o,localStorage.setItem("contatoSelecionado",t)}catch(t){this.$q.notifyError("Erro ao carregar contato",t)}finally{this.carregando=!1}}},copiarUid(){const t=this.$refs.uid;t.type="text";try{t.select(),document.execCommand("copy"),this.$q.notify({message:"Copiado!",type:"info"})}catch{this.$q.notify("Erro ao copiar.")}t.type="hidden",window.getSelection().removeAllRanges()},async selecionarCombinarContatos(t){}},watch:{"$route.params.id"(t){~this.$route.name.indexOf("Atendimento")&&this.carregarContato()},"sincronismoStatus.concluidoErp"(){~this.$route.name.indexOf("Atendimento")&&this.carregarContato()}},created(){this.carregarContato(),$utils.emitter.off("carregarContatoAtendimentoLayout"),$utils.emitter.on("carregarContatoAtendimentoLayout",this.carregarContato),$utils.emitter.off("adicionarContato"),$utils.emitter.on("adicionarContato",this.adicionarContato)}},mo={class:"u-container"},uo={key:0},po={class:"u-container"},fo={key:0,class:"bg-white q-pa-xl text-center"},ho=g("strong",null,"consumidor",-1),go={class:"text-center q-mt-sm"};function Co(t,o,i,s,n,a){const l=m("avatar"),C=m("badge"),w=m("Tutorial"),I=m("row"),F=m("router-view"),T=m("MenuAbas"),B=m("ImportarContatos"),P=m("ModalCombinarContato");return d(),p(W,{id:"Atendimento",class:"Atendimento"},{default:r(()=>[e(q,{class:"bg-gradiente text-white"},{default:r(()=>[g("div",mo,[e(I,{class:"items-center q-mx-none q-px-none q-py-xs"},{default:r(()=>[e(l,{imagem:n.contato.imagem,rotulo:a.podeAcessar?n.contato.apelido:!1,tamanho:"40"},null,8,["imagem","rotulo"]),e(N,null,{subtitle:r(()=>[a.telefone?(d(),V("span",uo,_(a.telefone),1)):y("",!0)]),default:r(()=>[c(_(n.contato.apelido)+" ",1),a.badge?(d(),p(C,X({key:0,class:"q-ml-sm",denso:"",escuro:""},a.badge),{default:r(()=>[a.badgeDetalhes?(d(),p($,{key:0,class:"Atendimento-badgeDetalhes"},{default:r(()=>[c(_(a.badgeDetalhes),1)]),_:1})):y("",!0)]),_:1},16)):y("",!0)]),_:1}),e(h,{flat:"",dense:"",icon:"search",round:"",size:"md",onClick:a.buscarContato},{default:r(()=>[e($,null,{default:r(()=>[c("Buscar contato")]),_:1})]),_:1},8,["onClick"]),e(h,{flat:"",dense:"",icon:"person_add",round:"",size:"md",onClick:a.adicionarContato},{default:r(()=>[e($,null,{default:r(()=>[c("Criar contato")]),_:1})]),_:1},8,["onClick"]),e(w,{componente:"AtendimentoLayout"}),e(h,{icon:"more_vert",flat:"",dense:"",round:"",size:"md"},{default:r(()=>[e(Z,null,{default:r(()=>[e(J,{link:"","no-border":"",separator:""},{default:r(()=>[k((d(),p(b,{clickable:"",onClick:a.buscarContatoExcluido},{default:r(()=>[e(u,{avatar:""},{default:r(()=>[e(x,{name:"search"})]),_:1}),e(u,null,{default:r(()=>[e(v,null,{default:r(()=>[c("Buscar exclu\xEDdos")]),_:1})]),_:1})]),_:1},8,["onClick"])),[[D]]),k((d(),p(b,{clickable:"",onClick:o[0]||(o[0]=f=>n.modalImportar=!0)},{default:r(()=>[e(u,{avatar:""},{default:r(()=>[e(x,{name:"import_export"})]),_:1}),e(u,null,{default:r(()=>[e(v,null,{default:r(()=>[c("Importar contatos")]),_:1})]),_:1})]),_:1})),[[D]]),e(b,{clickable:"",onClick:o[1]||(o[1]=()=>{this.modalCombinar=!0})},{default:r(()=>[e(u,{avatar:""},{default:r(()=>[e(x,{name:"compare_arrows"})]),_:1}),e(u,null,{default:r(()=>[e(v,null,{default:r(()=>[c("Combinar contatos duplicados")]),_:1})]),_:1})]),_:1}),e(b,{clickable:"",onClick:a.copiarUid},{default:r(()=>[e(u,{avatar:""},{default:r(()=>[e(x,{name:"file_copy"})]),_:1}),e(u,null,{default:r(()=>[e(v,null,{default:r(()=>[c("Copiar c\xF3digo do contato")]),_:1})]),_:1}),k(g("input",{type:"hidden","onUpdate:modelValue":o[2]||(o[2]=f=>n.contato.id=f),ref:"uid"},null,512),[[K,n.contato.id]])]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1}),e(T,{objetoPai:"atendimento"},{default:r(()=>[g("div",po,[!a.podeAcessar&&!["AtendimentoVenda","AtendimentoFatura"].includes(t.$route.name)?(d(),V("div",fo,[c(" N\xE3o \xE9 poss\xEDvel acessar este recurso como "),ho,c(". Por favor, cadastre ou selecione um contato. "),g("div",go,[e(h,{class:"q-ma-sm no-shadow",color:"primary",unelevated:"",icon:"person_add",label:"Novo contato",onClick:a.adicionarContato},null,8,["onClick"]),e(h,{class:"q-ma-sm no-shadow",color:"primary",unelevated:"",icon:"search",label:"Buscar contato",onClick:a.buscarContato},null,8,["onClick"])])])):(d(),p(F,{key:1,ref:"componentefilho"},null,512))])]),_:1}),e(B,{modelValue:n.modalImportar,"onUpdate:modelValue":o[3]||(o[3]=f=>n.modalImportar=f)},null,8,["modelValue"]),e(P,{modelValue:n.modalCombinar,"onUpdate:modelValue":o[4]||(o[4]=f=>n.modalCombinar=f)},null,8,["modelValue"])]),_:1})}var yo=E(co,[["render",Co]]);export{yo as default};