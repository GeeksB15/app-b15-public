import{_ as D,c3 as h,o as e,i as B,w as r,s as v,f as d,aK as q,x as m,t as s,j as g,l as z,d as c,F as u,B as p,E as y,r as S,e as f,H as _}from"./index.83d285ce.js";let i=1;const b={components:{},data(){return{animacao:"",atualizou:!1,mensagemBancoBloqueado:"",statusBancos:{}}},methods:{animar(){i++,i===10&&(i=1),i<5?this.animacao="<".repeat(i)+""+">".repeat(i):this.animacao="<".repeat(10-i)+""+">".repeat(10-i)},async atualizar(){if(await this.verificarRedirecionamento())return!0;try{this.$q.loading.show();const a=await h.sincronismo.le();for(const t of a){const n=this.statusBancos[t.bancoDeDados]||{};this.statusBancos[t.bancoDeDados]={bancoDeDados:t.bancoDeDados,status:t.status,percentagem:0,quantidadeRestantePeriodico:0,...n}}this.atualizou=!0}catch(a){this.$q.notifyError("Erro ao atualizar",a)}finally{this.$q.loading.hide()}this.atualizarPeriodico()},async atualizarPeriodico(){this.cotadorInterval=(this.cotadorInterval||0)+1,this.animar();try{const a=this.cotadorInterval%5!==1?await h.sincronismo.le({bancoDeDados:$db.cache.get("bancoDeDados")}):await h.sincronismo.le();for(const t of a){if(t.bancoDeDados===$db.cache.get("bancoDeDados")&&await this.verificarRedirecionamento(t))return!0;const n=this.statusBancos[t.bancoDeDados];n||(this.statusBancos[t.bancoDeDados]={...t}),n.ultimo<t.ultimo&&(this.statusBancos[t.bancoDeDados]={...n,...t})}}catch(a){this.$q.notifyError("Erro ao atualizar",a)}},async atualizarStatusSincronismo(a,t){if(this.animar(),this.statusBancos[a]={...this.statusBancos[a]||{},...t},t.status==="normal"&&await this.verificarRedirecionamento())return!0},async atualizarStatusSincronismoPeriodico(a,t){this.animar(),this.statusBancos[a]&&t&&(this.statusBancos[a].quantidadeRestantePeriodico-=t)},async verificarRedirecionamento(){try{if(this.mensagemBancoBloqueado=await h.sincronismo.verificaBloqueio(),!this.mensagemBancoBloqueado){const a=await $db.permissao.telaInicial();return $utils.gconsole.log("Home","redirecionando para a tela inicial",JSON.stringify(a)),await this.$router.push(a),!0}}catch(a){this.$q.notifyError("Erro ao verificar banco selecionado",a)}return!1}},async created(){},async mounted(){if($db.cache.get("reload")==="1"){$utils.gconsole.log("Home","reload()"),$db.cache.set("reload","0"),window.location.reload();return}$utils.emitter.on("atualizarStatusSincronismo",this.atualizarStatusSincronismo),$utils.emitter.on("atualizarStatusSincronismoPeriodico",this.atualizarStatusSincronismoPeriodico),!await this.atualizar()&&(this.interval=setInterval(this.atualizarPeriodico,3e4))},beforeUnmount(){this.interval&&clearInterval(this.interval),$utils.emitter.off("atualizarStatusSincronismo"),$utils.emitter.off("atualizarStatusSincronismoPeriodico")}},$={class:"text-body1 q-mr-sm"},w={class:"text-caption"},x=m("div",{class:"text-body1 q-mt-md text-white text-center q-px-md"}," Voc\xEA pode usar a parte online do sistema enquanto trazemos os dados para seu dispositivo! ",-1),P=m("div",{class:"text-caption"}," Atualizando ... ",-1);function k(a,t,n,E,l,I){return e(),B(_,{class:"u-container",id:"home"},{default:r(()=>[l.mensagemBancoBloqueado?(e(),B(v,{key:0,color:"negative",class:"q-mb-md"},{default:r(()=>[d(q,{class:"q-py-xs"},{default:r(()=>[m("span",$,s(l.mensagemBancoBloqueado),1),d(g,{name:"alarm",color:"white"})]),_:1})]),_:1})):z("",!0),l.atualizou?(e(),c(u,{key:1},[d(p,{class:"q-py-sm",color:"none"},{default:r(()=>[d(y,{class:"text-center text-white"},{default:r(()=>[(e(!0),c(u,null,S(l.statusBancos,o=>(e(),c("p",{key:o.bancoDeDados},[o.status?o.status==="sincronismoInicial"?(e(),c(u,{key:1},[f(s(o.bancoDeDados)+" - "+s(a.$filters.numero(o.percentagem,2))+" % ",1)],64)):(e(),c(u,{key:2},[f(s(o.bancoDeDados)+" "+s(a.$filters.dataHora(o.dataHoraServidor))+" - "+s(a.$filters.numero(o.quantidadeRestantePeriodico,0))+" quantidade restante ",1)],64)):(e(),c(u,{key:0},[f(s(o.bancoDeDados)+" - verificando ... ",1)],64))]))),128)),m("div",w,[m("div",null,s(l.animacao),1),f(" Sincronizando ")])]),_:1})]),_:1}),x],64)):(e(),B(p,{key:2,class:"q-py-sm",color:"none"},{default:r(()=>[d(y,{class:"text-center"},{default:r(()=>[P]),_:1})]),_:1}))]),_:1})}var H=D(b,[["render",k]]);export{H as default};