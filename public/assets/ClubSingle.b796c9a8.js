import{Q as j}from"./QSpinnerDots.573b0bce.js";import{_ as k,o as l,i as h,w as d,f as c,K as A,A as F,B as T,C as O,D as P,L as E,E as N,e as L,t as g,G as Q,s as D,aK as x,x as a,y as M,d as f,a7 as u,an as U,bL as W,bM as H,a5 as G,aX as J,bN as X,p as v,l as m,aG as Y,F as C,r as y,aH as K,aL as Z,Q as $,j as ee,am as te,I as oe,aC as se,aD as re}from"./index.83d285ce.js";import{Q as S,a as V}from"./QCarousel.f0aaed8c.js";import{F as ae,B as ie,C as ne}from"./RodapeSite.ebd82f31.js";import"./open-url.0da0aeaf.js";import"./QBtnGroup.8964cb6f.js";const le={data(){return{estaAberto:!1,exibeBotaoAddNoCarrinho:!1,produto:{},produtosParaComprarJunto:{}}},methods:{abrir(o,t,s,r){console.log(r),this.produto={...o,urlImagem:r},this.produtosParaComprarJunto={...t},this.exibeBotaoAddNoCarrinho=s,this.estaAberto=!0,this.$emit("abriu",o.id)},salvarNoCarrinho(){this.$emit("salvarNoCarrinho",{produtoSelecionado:this.produto,outrosProdutos:this.produtosParaComprarJunto})}}},de=["src"],ce={class:"text-subtitle1"},ue={class:"text-h5 q-mb-none"};function he(o,t,s,r,e,i){return l(),h(M,{modelValue:e.estaAberto,"onUpdate:modelValue":t[0]||(t[0]=_=>e.estaAberto=_),maximized:o.$q.platform.is.mobile,onHide:t[1]||(t[1]=_=>o.$emit("fechou"))},{default:d(()=>[c(A,{container:"",class:"bg-white"},{default:d(()=>[c(F,null,{default:d(()=>[c(T,null,{default:d(()=>[O(c(P,{icon:"arrow_back",flat:"",round:"",dense:""},null,512),[[E]]),c(N,null,{default:d(()=>[L(g(e.produto.descricao),1)]),_:1})]),_:1})]),_:1}),c(Q,null,{default:d(()=>[c(D,null,{default:d(()=>[c(x,null,{default:d(()=>[c(D,{class:"q-ma-sm bg-white full-height no-shadow q-pa-none"},{default:d(()=>[c(x,{class:"full-width q-pa-none self-start cursor-pointer arredondadoT"},{default:d(()=>[a("img",{src:e.produto.urlImagem,style:{width:"100%",margin:"0 auto",display:"block"},class:"arredondadoT"},null,8,de)]),_:1}),c(x,{class:"q-my-md q-py-xs full-width self-start cursor-pointer"},{default:d(()=>[a("div",ce,g(e.produto.observacao),1)]),_:1}),c(x,{class:"full-width q-py-xs self-start text-right cursor-pointer"},{default:d(()=>[a("p",ue,[a("strong",null,"R$ "+g(o.$filters.numero(e.produto.valorVenda,2)),1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])}var pe=k(le,[["render",he]]);const me={},fe=a("h5",null," IMAGEM DE CLUB INATIVO VAI AQUI ",-1),ge=[fe];function be(o,t){return l(),f("div",null,ge)}var _e=k(me,[["render",be]]);const ve=[u("rect",{y:"10",width:"15",height:"120",rx:"6"},[u("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),u("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),u("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6"},[u("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),u("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),u("rect",{x:"60",width:"15",height:"140",rx:"6"},[u("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),u("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),u("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6"},[u("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),u("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]),u("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6"},[u("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),u("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})])];var Ce=U({name:"QSpinnerBars",props:W,setup(o){const{cSize:t,classes:s}=H(o);return()=>u("svg",{class:s.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 135 140",xmlns:"http://www.w3.org/2000/svg"},ve)}});const we={components:{FooterSite:ae,BarraTopoEmpresa:ie,CarrinhoCompras:ne,DetalhesDoProduto:pe,ClubInativo:_e},data(){return{slide:G("1"),dados:{},banco:"",contatos:[],contatoPrincipal:{telefone:{}},gruposItens:{},filterSelect:"",filterOptions:[],openedF:!1,mostrarLogo:!1,qtd:{},contato:[],formasPagamento:[],item:[],urlImagemItem:{},carrinhoItens:{},carregando:!0,possuiWhatsapp:!1,possuiCarrinho:!1,searchText:""}},methods:{searchProduct(o){console.log("value: ",o),console.log("gruposItens: ",this.gruposItens);const t=$utils.tratamentoCompletoString(o).split(" ");let s=$utils.clonarV2(this.gruposItensOriginal),r={};if(t.length>0||(r=s),t.length>0)for(const e in s)for(const i of s[e]){const _=$utils.tratamentoCompletoString(i.descricaoConcatenada);let I=!0;for(const q of t)if(!~_.indexOf(q)){I=!1;break}!I||(r[e]||(r[e]=[]),r[e].push(i))}this.gruposItens=r},injetarIdDoProdutoNaURL(o){const t=`${window.location.protocol}//${window.location.host}${window.location.pathname}?produtoId=${o}`;window.history.pushState({path:t},"",t)},limparIdDoProdutoDaURL(){const o=`${window.location.protocol}//${window.location.host}${window.location.pathname}`;window.history.pushState({path:o},"",o)},abrirProdutoInjetadoNaURL(){const{produtoId:o}=this.$route.query;if(!o)return;const t=this.item.find(s=>s.id===o);!t||this.verDetalhesDoProduto(t)},async atualizar(){var r;const o=await $db.vitrine.ler();this.banco=o.find(e=>`/${e.url}`===this.$route.path).banco;const t=await this.$utils.geeksApi({site:{funcao:"639A3247-947F-41F7-97E3-296A8C5BCFED"},itens:{funcao:"6AA367D8-5683-48B5-8F35-75B4FF37DEFD"}},{bancoDeDados:this.banco,convidado:!0});this.dados=t.data.site,(r=this.dados.carrossel)!=null&&r.length&&(this.slide=this.dados.carrossel[0].id),this.carregando=!1,this.contatoPrincipal=this.dados.contatoPrincipal,this.possuiWhatsapp=!!this.dados.telefoneWhatsapp,this.contatos=this.dados.contatoEmpresasSite,this.dados.formasPagamento.map(e=>{e.ativoSite&&this.formasPagamento.push({rotulo:e.descricao,valor:e.id})});for(const e of this.dados.itens){const i=`https://southamerica-east1-b15node-178618.cloudfunctions.net/storage/${this.banco}/vitrine/${e}`;this.urlImagemItem[e]=i}const s=t.data.itens;this.montarGrupos(s)},zerarProdutosQueEstavamNoCarrinho(o){for(const t of o)this.qtd[t]=0;this.carrinhoItens={},this.openedF=!1},updateCart(o,t){this.$refs.carrinho.atualizarCarrinho(o,t),this.carrinhoItens[o.id]={...o,quantidade:t};const s=Object.keys(this.carrinhoItens).length;this.openedF=!this.$q.platform.is.mobile&&!!s,Object.keys(this.carrinhoItens).reduce((r,e)=>r+this.carrinhoItens[e].quantidade,0)!==0?this.possuiCarrinho=!0:this.possuiCarrinho=!1},carrinhoAtualizado(o){this.carrinhoItens=o;for(const s of Object.keys(o))this.qtd[s]=o[s].quantidade;const t=Object.keys(this.carrinhoItens).length;this.openedF=!this.$q.platform.is.mobile&&!!t,Object.keys(this.carrinhoItens).reduce((s,r)=>s+this.carrinhoItens[r].quantidade,0)!==0?this.possuiCarrinho=!0:this.possuiCarrinho=!1},removerItemDoCarrinho(o){this.qtd[o]=0,delete this.carrinhoItens[o],Object.keys(this.carrinhoItens).length||(this.openedF=!1),Object.keys(this.carrinhoItens).reduce((t,s)=>t+this.carrinhoItens[s].quantidade,0)!==0?this.possuiCarrinho=!0:this.possuiCarrinho=!1},onFilterChange(){this.goToAnchor(this.filterSelect)},montarGrupos(o){let t=[];for(const r of this.dados.itens){const e=o.find(i=>i.id===r);!e||t.push(e)}this.item=t,o=J.exports.orderBy(this.item,"descricao","asc");let s={};o.map(r=>{const e=(r==null?void 0:r.grupo)||"Outros";s[e]||(s[e]=[],this.filterOptions.push({label:e,value:this.criarSlug(e)})),s[e].push(r)}),this.gruposItens=s,this.gruposItensOriginal=$utils.clonarV2(s);for(const r of t)this.qtd[r.id]=0;for(const r of Object.keys(this.carrinhoItens))this.qtd[r]=this.carrinhoItens[r].quantidade;Object.keys(this.carrinhoItens).reduce((r,e)=>r+this.carrinhoItens[e].quantidade,0)!==0?this.possuiCarrinho=!0:this.possuiCarrinho=!1},verDetalhesDoProduto(o){const t=this.pegarProdutosRandomicosParaComprarJunto(o),s={...o,quantidade:this.qtd[o.id]};this.$refs.detalhesDoProduto.abrir(s,t,this.possuiWhatsapp,this.urlImagemItem[o.id])},salvarProdutosDaModalDeDetalhes(o){const{produtoSelecionado:t,outrosProdutos:s}=o;this.carrinhoItens[t.id]=t,this.qtd[t.id]=t.quantidade,this.updateCart(t,t.quantidade);for(const r of Object.keys(s)){const e=s[r];this.carrinhoItens[e.id]=e,this.qtd[e.id]=e.quantidade,this.updateCart(e,e.quantidade)}},pegarProdutosRandomicosParaComprarJunto(o){const t=this.item.sort((e,i)=>.5-Math.random()),s={};let r=0;for(const e of t){if(r>3)break;e.id!==o.id&&!this.qtd[e.id]&&(s[e.id]={...e,quantidade:0},r++)}return s},irParaProdutos(){const o=this.filterOptions[0].value;this.goToAnchor(o)},criarSlug(o){return X(o.replace(" ",""))},goToAnchor(o){document.getElementById(o).scrollIntoView({behavior:"smooth"})},injetarTags(){const{codigoTagHead:o,codigoTagBody:t}=this.dados.marketingDigital;o&&document.head.insertAdjacentHTML("beforeend",o),t&&document.body.insertAdjacentHTML("afterend",t)},pesquisaPorVozExiste(){return!!(window.SpeechRecognition||window.webkitSpeechRecognition)},pesquisaPorVoz(){$q.loading.show({spinner:Ce,spinnerColor:"primary",spinnerSize:140,backgroundColor:"white"});const o=window.SpeechRecognition||window.webkitSpeechRecognition;if(!o)return;const t=new o;t.continuous=!0,t.start(),t.onresult=s=>{const r=s.resultIndex,e=s.results[r][0].transcript;this.searchText=e,this.searchProduct(e)},setTimeout(()=>{t.stop(),$q.loading.hide()},5e3)}},async created(){await this.atualizar(),this.injetarTags(),this.abrirProdutoInjetadoNaURL()}},ye=o=>(se("data-v-57004264"),o=o(),re(),o),Ie={class:"u-container q-px-sm"},xe={class:"u-container q-px-none"},qe={class:"hideonmobile"},Pe={class:"hideondesktop"},ke={class:"bg-light q-pb-md q-pt-xl"},De={class:"u-container"},Se={id:"slogan"},Ve={class:"q-display-1 text-primary q-mt-lg q-mb-xl text-center"},Ae={class:"text-subtitle1 text-tertiary q-mb-xl text-center",style:{"font-weight":"400"}},Fe={class:"q-pa-md q-my-none q-mx-auto",style:{"max-width":"999px"}},Te={id:"produtos"},Ne=["id"],Qe={class:"text-h6 text-tertiary q-ma-none"},Be={class:"row q-col-gutter-md items-stretch q-py-md products"},ze={class:"row full-height bg-white rounded-borders overflow-hidden shadow-14 arredondado"},Re=["onClick"],je=["src"],Oe=["onClick"],Ee=["onClick"],Le={class:"text-h5 text-right text-tertiary"},Me={class:"col-12 self-end q-px-sm"},Ue={id:"mapaD"},We={class:"row"},He=ye(()=>a("div",{class:"text-body1 q-mr-sm"},"Total",-1)),Ge={class:"text-body1 q-mr-sm"};function Je(o,t,s,r,e,i){const _=v("carrinho-compras"),I=v("BarraTopoEmpresa"),q=v("campo"),B=v("FooterSite"),z=v("DetalhesDoProduto"),R=v("ClubInativo");return l(),f(C,null,[e.carregando?(l(),h(j,{key:0,color:"primary",size:"10em",style:{"-moz-transform":"translateX(-50%) translateY(-50%)","-webkit-transform":"translateX(-50%) translateY(-50%)","-o-transform":"translateX(-50%) translateY(-50%)","-ms-transform":"translateX(-50%) translateY(-50%)",transform:"translateX(-50%) translateY(-50%)",position:"fixed",top:"50%",left:"50%"}})):m("",!0),e.dados.ativo?(l(),h(A,{key:1,class:"Club",id:"ClubeSingle",view:"lHr lpR lFr"},{default:d(()=>[c(F,null,{default:d(()=>[a("div",Ie,[e.mostrarLogo?m("",!0):(l(),h(Y,{key:0,"inline-label":"","indicator-color":"transparent","mobile-arrows":"","outside-arrows":"",align:"left",class:"bg-primary text-white no-shadow"},{default:d(()=>[(l(!0),f(C,null,y(e.filterOptions,(n,b)=>(l(),h(K,{flat:"","text-color":"white",name:n.label,label:n.label,key:b,onClick:p=>i.goToAnchor(n.value)},null,8,["name","label","onClick"]))),128))]),_:1}))])]),_:1}),e.possuiWhatsapp?(l(),h(Z,{key:0,modelValue:e.openedF,"onUpdate:modelValue":t[0]||(t[0]=n=>e.openedF=n),side:"right",bordered:""},{default:d(()=>[c(_,{ref:"carrinho",onCarrinhoAtualizado:i.carrinhoAtualizado,onItemRemovido:i.removerItemDoCarrinho,onCarrinhoLimpado:i.zerarProdutosQueEstavamNoCarrinho,formasPagamento:e.formasPagamento,contatoPrincipal:e.contatoPrincipal,banco:e.banco},null,8,["onCarrinhoAtualizado","onItemRemovido","onCarrinhoLimpado","formasPagamento","contatoPrincipal","banco"])]),_:1},8,["modelValue"])):m("",!0),c(Q,null,{default:d(()=>[a("div",xe,[c(I,{contatoPrincipal:e.contatoPrincipal,onVerProdutos:i.irParaProdutos,onVerEndereco:t[1]||(t[1]=n=>i.goToAnchor("mapaD"))},null,8,["contatoPrincipal","onVerProdutos"])]),a("div",qe,[e.dados.carrossel&&e.dados.carrossel.length?(l(),h(S,{key:0,modelValue:e.slide,"onUpdate:modelValue":t[2]||(t[2]=n=>e.slide=n),"transition-prev":"scale","transition-next":"scale","control-color":"white",height:"480px",class:"bg-primary text-white no-shadow hideonmobile",swipeable:"",animated:"",navigation:"",padding:"",arrows:""},{default:d(()=>[(l(!0),f(C,null,y(e.dados.carrossel,n=>(l(),h(V,{key:n.id,name:n.id,"img-src":n.imagemB64,class:"column no-wrap flex-center"},null,8,["name","img-src"]))),128))]),_:1},8,["modelValue"])):m("",!0)]),a("div",Pe,[e.dados.carrossel&&e.dados.carrossel.length?(l(),h(S,{key:0,modelValue:e.slide,"onUpdate:modelValue":t[3]||(t[3]=n=>e.slide=n),"transition-prev":"scale","transition-next":"scale","control-color":"white",height:"280px",class:"bg-primary text-white shadow-1 rounded-borders",swipeable:"",animated:"",navigation:"",padding:"",arrows:""},{default:d(()=>[(l(!0),f(C,null,y(e.dados.carrossel,n=>(l(),h(V,{key:n.id,name:n.id,"img-src":n.imagemB64,class:"column no-wrap flex-center"},null,8,["name","img-src"]))),128))]),_:1},8,["modelValue"])):m("",!0)]),a("div",ke,[a("div",De,[a("div",Se,[a("div",Ve,g(e.dados.slogan),1),a("div",Ae,g(e.dados.descricao),1)]),a("div",Fe,[c($,{debounce:500,outlined:"",modelValue:e.searchText,"onUpdate:modelValue":[t[4]||(t[4]=n=>e.searchText=n),i.searchProduct],placeholder:"Pesquisar por produto",class:"bg-white"},{append:d(()=>[i.pesquisaPorVozExiste?(l(),h(P,{key:0,onClick:i.pesquisaPorVoz,icon:"mic",size:"lg",flat:"",round:"",dense:"",color:"primary"},null,8,["onClick"])):m("",!0),c(ee,{name:"search",size:"md",color:"primary",class:"q-mr-sm"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),a("div",Te,[(l(!0),f(C,null,y(e.gruposItens,(n,b)=>(l(),f("section",{key:b,id:i.criarSlug(b),class:"q-px-sm q-pb-none q-pt-xl"},[a("div",Qe,g(b),1),a("div",Be,[(l(!0),f(C,null,y(n,p=>(l(),f("div",{class:"col-6 col-sm-4 col-md-2 q-mb-md",key:p.id},[a("div",ze,[a("div",{onClick:w=>i.verDetalhesDoProduto(p),class:"col-12 self-start cursor-pointer"},[a("img",{src:this.urlImagemItem[p.id],style:{width:"100%",margin:"0 auto",display:"block"}},null,8,je)],8,Re),a("div",{onClick:w=>i.verDetalhesDoProduto(p),class:"col-12 self-start text-tertiary q-pt-sm q-px-sm cursor-pointer",style:{"min-height":"50px"}},g(p.descricao),9,Oe),a("div",{onClick:w=>i.verDetalhesDoProduto(p),class:"col-12 self-end q-pt-sm q-pb-xs q-px-sm cursor-pointer"},[a("div",Le,[a("b",null,"R$ "+g(o.$filters.numero(p.valorVenda,2)),1)])],8,Ee),a("div",Me,[e.possuiWhatsapp?(l(),h(te,{key:0,class:"full-width"})):m("",!0),e.possuiWhatsapp?(l(),h(q,{key:1,modelValue:e.qtd[p.id],"onUpdate:modelValue":[w=>e.qtd[p.id]=w,w=>i.updateCart(p,e.qtd[p.id])],min:"0",tipo:"quantidade",borderless:"",dense:""},null,8,["modelValue","onUpdate:modelValue"])):m("",!0)])])]))),128))])],8,Ne))),128))])])]),a("div",Ue,[c(B,{"contato-principal":e.contatoPrincipal},null,8,["contato-principal"])])]),_:1}),e.possuiWhatsapp&&e.possuiCarrinho?(l(),h(oe,{key:1,class:"mobile-only",bordered:"",color:"primary"},{default:d(()=>[c(T,null,{default:d(()=>[c(N,null,{default:d(()=>[a("div",We,[He,a("div",Ge,"R$ "+g(o.$filters.numero(Object.keys(e.carrinhoItens).reduce((n,b)=>n+e.carrinhoItens[b].quantidade*e.carrinhoItens[b].valorVenda,0),2)),1)])]),_:1}),c(P,{label:"Finalizar",color:"white","text-color":"primary",onClick:t[5]||(t[5]=n=>e.openedF=!e.openedF),unelevated:""})]),_:1})]),_:1})):m("",!0)]),_:1})):m("",!0),c(z,{ref:"detalhesDoProduto",onSalvarNoCarrinho:i.salvarProdutosDaModalDeDetalhes,onAbriu:i.injetarIdDoProdutoNaURL,onFechou:i.limparIdDoProdutoDaURL},null,8,["onSalvarNoCarrinho","onAbriu","onFechou"]),!e.dados.ativo&&!e.carregando?(l(),h(R,{key:2})):m("",!0)],64)}var tt=k(we,[["render",Je],["__scopeId","data-v-57004264"]]);export{tt as default};