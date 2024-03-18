import{_ as B,d4 as I,d5 as R,p as w,o as m,d as C,x as i,F,r as A,i as v,w as r,f as l,B as M,E as N,t as y,e as V,bc as P,l as f,D as c,s as k,aG as H,aH as O,am as L,aZ as K,a_ as x,aK as _,z as E,U as j,C as q,L as D,b9 as J,ba as G,bb as Q,Q as T,aQ as W,V as p,j as b,y as Z}from"./index.fd6a1d5c.js";import{Q as X}from"./QPopupEdit.6d207ea9.js";const Y={components:{PromptItemTabelaPrecoNovo:I,PromptDocumentoOperacao:R},computed:{dateExpirationAccessToken(){var o;const a=(o=this.modal.campos.json.auth.dateExpirationAccessToken)!=null?o:"";return a?`Expira em ${$filters.dataHora(a)}`:""},dateExpirationRefreshToken(){var o;const a=(o=this.modal.campos.json.auth.dateExpirationRefreshToken)!=null?o:"";return a?`Expira em ${$filters.dataHora(a)}`:""},habilitarBotaoObterToken(){return!!(this.modal.campos.json.auth.authorizationCode&&this.modal.campos.json.auth.apiHost)}},data(){return{eCommerce:[],modal:{}}},methods:{async atualizar(){try{const a=await $db.eCommerce.ler();this.eCommerceOriginal=$utils.clonarV2(a),a.sort((o,t)=>new Date(o.dataHoraCriacao)<new Date(t.dataHoraCriacao)?-1:1),a.forEach(o=>{o.json=JSON.parse(o.json)}),this.eCommerce=a}catch(a){$q.notifyError("Erro ao consultar dados de e-commerce",a)}},criar(){this.limparModal();const a={id:$utils.uuid(),parceiro:"Tray",descricao:null,json:{auth:{},idTabelaPreco:null,idEmpresa:null,idDocumentoOperacao:null,sincronismo:{produtos:"desativado",chaves:["referencia"],dePara:{codigoItem:"id",referencia:"reference",codigoBarras:"ean",descricao:"name",ncm:"ncm",valorVenda:"price",valorCustoReposicao:"cost_price",marca:"brand",quantidadeDisponivel:"stock",ativo:"available"}}},ativo:!1};this.modal={...this.modal,campos:a},this.modal.dePara.rows=this.getRowsFromObj(this.modal.campos.json.sincronismo.dePara),this.modal.visivel=!0},async editar(a){var o,t,d;if(this.limparModal(),this.modal.campos=$utils.clonarV2(a),this.modal.campos.json.idEmpresa){const s=await $erp().contato.get(this.modal.campos.json.idEmpresa);this.modal.descricaoEmpresa=(o=s==null?void 0:s.nome)!=null?o:""}if(this.modal.campos.json.idTabelaPreco){const s=await $erp().itemTabelaPreco.get(this.modal.campos.json.idTabelaPreco);this.modal.descricaoTabelaPreco=(t=s==null?void 0:s.descricao)!=null?t:""}if(this.modal.campos.json.idDocumentoOperacao){const s=await $db.hibrido.le({table:"documentoOperacao",id:this.modal.campos.json.idDocumentoOperacao});this.modal.descricaoOperacao=(d=s==null?void 0:s.descricao)!=null?d:""}this.modal.dePara.rows=this.getRowsFromObj(this.modal.campos.json.sincronismo.dePara),this.modal.visivel=!0},getRowsFromObj(a){const o=[];for(const t in a)o.push({de:t,para:a[t]});return o},setObjFromRows(a){const o={};for(const t of a)o[t.de]=t.para;return o},limparEmpresa(){this.modal.campos.json.idEmpresa=null,this.modal.descricaoEmpresa=""},limparTabelaPreco(){this.modal.campos.json.idTabelaPreco=null,this.modal.descricaoTabelaPreco=""},limparOperacao(){this.modal.campos.json.idDocumentoOperacao=null,this.modal.descricaoOperacao=""},limparModal(){this.modal={visivel:!1,tab:"autenticacao",campos:{},dePara:{columns:[{name:"de",style:"min-width: 160px; width: 160px",align:"left",label:"De",field:"de"},{name:"para",style:"min-width: 200px; width: 200px",align:"left",label:"Para",field:"para"}],rows:[]},descricaoEmpresa:"",descricaoTabelaPreco:"",descricaoOperacao:"",optsParceiro:[{label:"Tray",value:"Tray"}],optsSincronismoProdutos:[{label:"Desativado",value:"desativado"},{label:"B15 <- Tray",value:"importacao"},{label:"B15 -> Tray",value:"exportacao"},{label:"B15 <-> Tray",value:"importacao_exportacao"}]}},async obterToken(){var a;try{$q.loading.show();const o=await $db.eCommerce.obterToken({eCommerce:this.modal.campos});this.modal.campos.json.auth={...this.modal.campos.json.auth,...(a=o==null?void 0:o.data)==null?void 0:a.autenticacao},$q.notify({type:"positive",message:"Chave de acesso obtida"})}catch(o){this.$q.notifyError("N\xE3o foi poss\xEDvel obter a chave de acesso neste momento, tente novamente em instantes!",o)}finally{$q.loading.hide()}},async remover(a){try{await new Promise((o,t)=>{$q.dialog({cancel:{label:"N\xE3o",push:!0,color:"tertiary",flat:!0},title:"Remover",message:"Deseja remover este item?",ok:{label:"Sim",push:!0,class:"bg-negative",textColor:"white",flat:!0}}).onOk(()=>{o()}).onCancel(()=>{t()})})}catch{return}try{$q.loading.show(),await $db.eCommerce.remover(a),await this.atualizar()}catch(o){$q.notifyError("Erro ao remover dados de e-commerce",o)}finally{$q.loading.hide()}},async salvar(){try{$q.loading.show();const a=$utils.clonarV2(this.modal.campos),o=this.eCommerceOriginal.find(t=>t.id===this.modal.campos.id);a.json.sincronismo.dePara=this.setObjFromRows(this.modal.dePara.rows),a.json=JSON.stringify(a.json),await $db.eCommerce.gravar({atual:a,original:o}),await this.atualizar(),this.modal.visivel=!1,$q.notify({type:"positive",message:"Configura\xE7\xF5es salvas"})}catch(a){$q.notifyError("Erro ao salvar dados de e-commerce",a)}finally{$q.loading.hide()}},async selecionarEmpresa(){var t,d;const a={filtro:{ativo:!0,empresas:!0},placeholder:"Selecione a empresa"},o=await $g.promptContato.show(a);this.modal.campos.json.idEmpresa=(t=o==null?void 0:o.id)!=null?t:null,this.modal.descricaoEmpresa=(d=o==null?void 0:o.nome)!=null?d:""},async selecionarItemTabelaPreco(a,o){var t,d;a||(this.$refs.promptItemTabelaPreco.placeholder="Selecione a tabela de pre\xE7o",this.$refs.promptItemTabelaPreco.filtro={tabelaMaster:!0,idContatoEmpresa:o},this.$refs.promptItemTabelaPreco.mostrar()),this.modal.campos.json.idTabelaPreco=(t=a==null?void 0:a.id)!=null?t:null,this.modal.descricaoTabelaPreco=(d=a==null?void 0:a.descricao)!=null?d:""},async selecionarDocumentoOperacao(a){var o,t;a||(this.$refs.promptDocumentoOperacao.placeholder="Selecione a opera\xE7\xE3o",this.$refs.promptDocumentoOperacao.mostrar()),this.modal.campos.json.idDocumentoOperacao=(o=a==null?void 0:a.id)!=null?o:null,this.modal.descricaoOperacao=(t=a==null?void 0:a.descricao)!=null?t:""}},async created(){this.limparModal(),await this.atualizar()}},$={class:"u-container"},oo={class:"q-mt-md no-shadow"},eo={class:"col text-body1"},ao={class:"q-pr-md"},so={class:"q-mt-md text-center"},lo={class:"col-12"},ro={class:"col-12"},to={class:"col-12"},io={class:"row col-12"},no={class:"row col-12 q-gutter-sm"},mo={class:"col-12"},co={class:"col-12"},po={class:"col-12"},uo={class:"q-mt-lg text-right"},ho={class:"col-12"},vo={class:"col-12"},bo={class:"col-12"},fo={class:"col-12"},wo={class:"col-12"},yo={class:"col-12"},Vo={class:"q-mt-lg text-right"};function To(a,o,t,d,s,n){const g=w("row"),u=w("campo"),S=w("prompt-item-tabela-preco-novo"),U=w("prompt-documento-operacao");return m(),C("div",$,[i("div",oo,[(m(!0),C(F,null,A(s.eCommerce,e=>(m(),v(k,{class:"bg-white q-mb-md q-pa-md",key:e.id},{default:r(()=>[l(M,null,{default:r(()=>[l(N,null,{default:r(()=>[i("div",null,y(e.descricao),1),l(g,{class:"q-col-gutter-md"},{default:r(()=>[i("div",eo,[i("span",ao,[V("Parceiro: "),i("strong",null,y(e.parceiro),1)]),e.ativo?(m(),v(P,{key:0,class:"q-ml-sm",color:"positive",escuro:""},{default:r(()=>[V("Ativo")]),_:1})):f("",!0),e.ativo?f("",!0):(m(),v(P,{key:1,class:"q-ml-sm",color:"negative",escuro:""},{default:r(()=>[V("Desativado")]),_:1}))])]),_:2},1024)]),_:2},1024),l(c,{rounded:"",dense:"",flat:"",icon:"edit",color:"tertiary",class:"no-shadow q-ma-xs",size:"md",onClick:h=>n.editar(e)},null,8,["onClick"]),l(c,{rounded:"",dense:"",flat:"",icon:"delete",color:"tertiary",class:"no-shadow q-ma-xs",size:"md",onClick:h=>n.remover(e.id)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128)),i("div",so,[l(c,{color:"positive",icon:"add",label:"E-COMMERCE",outline:"",size:"sm",onClick:o[0]||(o[0]=e=>n.criar())})])]),l(Z,{modelValue:s.modal.visivel,"onUpdate:modelValue":o[27]||(o[27]=e=>s.modal.visivel=e),"content-css":{minWidth:"50vw"}},{default:r(()=>[l(k,null,{default:r(()=>[l(H,{modelValue:s.modal.tab,"onUpdate:modelValue":o[1]||(o[1]=e=>s.modal.tab=e)},{default:r(()=>[l(O,{name:"autenticacao",label:"Autentica\xE7\xE3o"}),l(O,{name:"regrasOperacao",label:"Regras de Opera\xE7\xE3o"})]),_:1},8,["modelValue"]),l(L),l(K,{modelValue:s.modal.tab,"onUpdate:modelValue":o[26]||(o[26]=e=>s.modal.tab=e),animated:""},{default:r(()=>[l(x,{name:"autenticacao"},{default:r(()=>[l(_,null,{default:r(()=>[l(E,{onSubmit:o[10]||(o[10]=e=>n.salvar())},{default:r(()=>[l(g,{class:"q-col-gutter-md"},{default:r(()=>[i("div",lo,[l(j,{readonly:"","transition-show":"jump-up","transition-hide":"jump-up",dense:"",modelValue:s.modal.campos.parceiro,"onUpdate:modelValue":o[2]||(o[2]=e=>s.modal.campos.parceiro=e),"emit-value":"","map-options":"",options:s.modal.optsParceiro,hint:"Parceiro"},null,8,["modelValue","options"])]),i("div",ro,[l(u,{maxlength:"250",modelValue:s.modal.campos.descricao,"onUpdate:modelValue":o[3]||(o[3]=e=>s.modal.campos.descricao=e),class:"row",tipo:"texto",rotulo:"Descri\xE7\xE3o"},null,8,["modelValue"])]),i("div",to,[l(u,{maxlength:"250",modelValue:s.modal.campos.json.auth.authorizationCode,"onUpdate:modelValue":o[4]||(o[4]=e=>s.modal.campos.json.auth.authorizationCode=e),class:"row",tipo:"texto",rotulo:"C\xF3digo de autoriza\xE7\xE3o da Loja"},null,8,["modelValue"])]),i("div",io,[l(u,{maxlength:"250",modelValue:s.modal.campos.json.auth.apiHost,"onUpdate:modelValue":o[5]||(o[5]=e=>s.modal.campos.json.auth.apiHost=e),tipo:"texto",rotulo:"URL da API"},null,8,["modelValue"])]),i("div",no,[l(c,{color:"positive",class:"no-shadow",unelevated:"",label:"Obter Chave de Acesso",type:"button",disable:!n.habilitarBotaoObterToken,onClick:o[6]||(o[6]=e=>n.obterToken())},null,8,["disable"])]),i("div",mo,[l(u,{maxlength:"250",modelValue:s.modal.campos.json.auth.accessToken,"onUpdate:modelValue":o[7]||(o[7]=e=>s.modal.campos.json.auth.accessToken=e),class:"row",tipo:"texto","somente-leitura":"",rotulo:"Chave de Acesso",ajuda:n.dateExpirationAccessToken},null,8,["modelValue","ajuda"])]),i("div",co,[l(u,{maxlength:"250",modelValue:s.modal.campos.json.auth.refreshToken,"onUpdate:modelValue":o[8]||(o[8]=e=>s.modal.campos.json.auth.refreshToken=e),class:"row",tipo:"texto","somente-leitura":"",rotulo:"Chave de Atualiza\xE7\xE3o",ajuda:n.dateExpirationRefreshToken},null,8,["modelValue","ajuda"])]),i("div",po,[l(u,{modelValue:s.modal.campos.ativo,"onUpdate:modelValue":o[9]||(o[9]=e=>s.modal.campos.ativo=e),class:"col-12",rotulo:"Ativo",tipo:"logico"},null,8,["modelValue"])])]),_:1}),i("div",uo,[q(l(c,{color:"tertiary",flat:"",label:"Cancelar"},null,512),[[D]]),l(c,{color:"primary",class:"q-ml-sm no-shadow",unelevated:"",label:"Salvar",type:"submit"})])]),_:1})]),_:1})]),_:1}),l(x,{name:"regrasOperacao"},{default:r(()=>[l(_,null,{default:r(()=>[l(E,{onSubmit:o[25]||(o[25]=e=>n.salvar())},{default:r(()=>[l(g,{class:"q-col-gutter-md"},{default:r(()=>[i("div",ho,[l(j,{label:"Sincronismo de produtos","emit-value":"","map-options":"","transition-show":"jump-up","transition-hide":"jump-up",dense:"",modelValue:s.modal.campos.json.sincronismo.produtos,"onUpdate:modelValue":o[11]||(o[11]=e=>s.modal.campos.json.sincronismo.produtos=e),options:s.modal.optsSincronismoProdutos},null,8,["modelValue","options"])]),i("div",vo,[l(j,{label:"Campos-chave",modelValue:s.modal.campos.json.sincronismo.chaves,"onUpdate:modelValue":o[12]||(o[12]=e=>s.modal.campos.json.sincronismo.chaves=e),"use-input":"","use-chips":"",multiple:"","hide-dropdown-icon":"","input-debounce":"0","new-value-mode":"add-unique"},null,8,["modelValue"])]),i("div",bo,[l(J,{rows:s.modal.dePara.rows,columns:s.modal.dePara.columns,title:"Mapeamento de campos","rows-per-page-options":[0],"hide-header":"","hide-bottom":"","row-key":"name","wrap-cells":"",separator:"cell","virtual-scroll":"",style:{height:"200px"}},{body:r(e=>[l(G,{props:e},{default:r(()=>[l(Q,{key:"de",props:e},{default:r(()=>[V(y(e.row.de),1)]),_:2},1032,["props"]),l(Q,{key:"para",props:e},{default:r(()=>[i("div",null,y(e.row.para),1),l(X,{buttons:"",modelValue:e.row.para,"onUpdate:modelValue":h=>e.row.para=h},{default:r(h=>[l(T,{type:"textarea",modelValue:h.value,"onUpdate:modelValue":z=>h.value=z,autofocus:"",autogrow:"",onKeyup:o[13]||(o[13]=W(p(()=>{},["stop"]),["enter"]))},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),i("div",fo,[l(T,{dense:"",rounded:"",readonly:"",modelValue:s.modal.descricaoEmpresa,"onUpdate:modelValue":o[16]||(o[16]=e=>s.modal.descricaoEmpresa=e),label:"Empresa",onFilter:o[17]||(o[17]=e=>n.selecionarEmpresa())},{append:r(()=>[s.modal.campos.json.idEmpresa?(m(),v(b,{key:0,name:"close",onClick:o[14]||(o[14]=p(e=>n.limparEmpresa(),["stop"])),class:"cursor-pointer"})):f("",!0),l(b,{name:"search",onClick:o[15]||(o[15]=p(e=>n.selecionarEmpresa(),["stop"])),class:"cursor-pointer"})]),_:1},8,["modelValue"])]),i("div",wo,[l(T,{dense:"",rounded:"",readonly:"",modelValue:s.modal.descricaoTabelaPreco,"onUpdate:modelValue":o[20]||(o[20]=e=>s.modal.descricaoTabelaPreco=e),label:"Tabela de Pre\xE7o",onFilter:o[21]||(o[21]=e=>n.selecionarItemTabelaPreco())},{append:r(()=>[s.modal.campos.json.idTabelaPreco?(m(),v(b,{key:0,name:"close",onClick:o[18]||(o[18]=p(e=>n.limparTabelaPreco(),["stop"])),class:"cursor-pointer"})):f("",!0),l(b,{name:"search",onClick:o[19]||(o[19]=p(e=>n.selecionarItemTabelaPreco(),["stop"])),class:"cursor-pointer"})]),_:1},8,["modelValue"])]),i("div",yo,[l(T,{dense:"",rounded:"",readonly:"",modelValue:s.modal.descricaoOperacao,"onUpdate:modelValue":o[23]||(o[23]=e=>s.modal.descricaoOperacao=e),label:"Opera\xE7\xE3o",onFilter:o[24]||(o[24]=e=>n.selecionarDocumentoOperacao())},{append:r(()=>[s.modal.campos.json.idDocumentoOperacao?(m(),v(b,{key:0,name:"close",onClick:p(n.limparOperacao,["stop"]),class:"cursor-pointer"},null,8,["onClick"])):f("",!0),l(b,{name:"search",onClick:o[22]||(o[22]=p(e=>n.selecionarDocumentoOperacao(),["stop"])),class:"cursor-pointer"})]),_:1},8,["modelValue"])])]),_:1}),i("div",Vo,[q(l(c,{color:"tertiary",flat:"",label:"Cancelar"},null,512),[[D]]),l(c,{color:"primary",class:"q-ml-sm no-shadow",unelevated:"",label:"Salvar",type:"submit"})])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),l(S,{ref:"promptItemTabelaPreco",onSelecionar:n.selecionarItemTabelaPreco},null,8,["onSelecionar"]),l(U,{ref:"promptDocumentoOperacao",onSelecionar:n.selecionarDocumentoOperacao},null,8,["onSelecionar"])])}var Co=B(Y,[["render",To]]);export{Co as default};
