import{_ as r,o as e,i as d,w as a,f as i,B as m,E as u,e as _,x as s,am as c,t as l,D as h,H as p}from"./index.fd6a1d5c.js";const v={data(){return{campos:{subir:"",descer:"",ultimoSincronismo:"",calcular:"",ultimoCalcular:""},dbSincronismo:$db.sincronismo}},methods:{async atualizar(){try{this.$utils.gconsole.log("PainelSincronismo","atualizar"),this.$q.loading.show();const o=await this.$utils.geeksApi({consultarFilas:{funcao:"BC338DFC-2E63-4D26-8688-59CCBDBDEFFE"}});this.campos=o.data.consultarFilas}catch(o){this.$q.notifyError("Erro na comunica\xE7\xE3o com o servidor",o)}finally{this.$q.loading.hide()}}},mounted(){this.$utils.gconsole.log("PainelSincronismo","mounted"),this.atualizar()}},g={class:"u-container"},w={class:"row q-col-gutter-sm q-pb-sm no-shadow"},f={class:"col-12 col-md-2"},q={class:"bg-white q-mt-md fit"},b={class:"row items-start"},C={class:"col q-pa-md"},y=s("div",{class:"row text-body1"},"Processar no servidor",-1),S=s("div",{class:"row q-pt-md"},[s("small",null,"Inf. recebida")],-1),B={class:"row"},x=s("div",{class:"row q-pt-md"},[s("small",null,"Inf. a descer")],-1),E={class:"row"},D=s("div",{class:"row q-pt-md"},[s("small",null,"\xDAltimo sincronismo")],-1),P={class:"row"},$=s("div",{class:"row q-pt-md"},[s("small",null,"Calcular")],-1),k={class:"row"},F=s("div",{class:"row q-pt-md"},[s("small",null,"\xDAltimo c\xE1lculo")],-1),Q={class:"row"},z={class:"col-auto q-py-sm"},T={class:"col-12 col-md-10"},N={class:"bg-white q-mt-md q-pa-md fit"},V=s("div",{class:"row text-body1"},[s("strong",null,"Eventos (log)")],-1);function I(o,A,H,j,t,n){return e(),d(p,null,{default:a(()=>[i(m,{class:"bg-gradiente text-white"},{default:a(()=>[i(u,null,{default:a(()=>[_(" Painel sincronismo ")]),_:1})]),_:1}),s("div",g,[s("div",w,[s("div",f,[s("div",q,[s("div",b,[s("div",C,[y,i(c,{class:"q-mt-md"}),S,s("div",B,[s("strong",null,l(t.campos.subir),1)]),x,s("div",E,[s("strong",null,l(t.campos.descer),1)]),D,s("div",P,[s("strong",null,l(o.$filters.hora(t.campos.ultimoSincronismo)),1)]),$,s("div",k,[s("strong",null,l(t.campos.calcular),1)]),F,s("div",Q,[s("strong",null,l(o.$filters.hora(t.campos.ultimoCalcular)),1)])]),s("div",z,[i(h,{color:"primary",dense:"",flat:"",icon:"refresh",onClick:n.atualizar,round:""},null,8,["onClick"])])])])]),s("div",T,[s("div",N,[V,i(c,{class:"q-mt-md"}),s("pre",null,l(t.dbSincronismo.log),1)])])])])]),_:1})}var J=r(v,[["render",I]]);export{J as default};
