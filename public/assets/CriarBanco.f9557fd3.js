import{_ as j,p as b,o as w,i as B,w as r,H as O,f as i,B as x,E as V,e as G,x as P,l as y,I as M,D as z,z as F}from"./index.2b154a90.js";import{S as I,a as T}from"./SeletorPais.cf5dbaf5.js";const L={components:{SeletorCidade:I,SeletorPais:T},data(){return{dados:{cnpj:"",fantasia:"",razaoSocial:"",baseDados:"",codigoSistema:"",segmento:"",codigo:"",cpfUsuario:"",nomeUsuario:""},cnpjErro:!1,logado:$db.usuario.logado,servidor:{},servidorOptisoul:{codigo:"srv7",ativoSincronismo:1,sysDatabases:"[srv7.b15.com.br].master.sys.databases",ip:"\\\\10.2.2.7",at:"at [srv7.b15.com.br]",drive:"E:\\"},servidorB15:{codigo:"srv5",ativoSincronismo:1,sysDatabases:"sys.databases",ip:"C:\\",at:"",drive:"D:\\"},sistemas:[],sistemasOptisoul:[{valor:"52",rotulo:"Optisoul - Plano Controle"},{valor:"53",rotulo:"Optisoul - Plano Gest\xE3o"},{valor:"57",rotulo:"Optisoul - Plano Venda Melhor"},{valor:"68",rotulo:"Optisoul - Operacional"}],sistemasB15:[{valor:"60",rotulo:"B15 Free"},{valor:"61",rotulo:"B15 Business"},{valor:"62",rotulo:"B15 Enterprise"}]}},methods:{consultarCep(){const a=this.dados.cep.replace(/[^0-9]/g,"");a.length<8||$utils.buscarEndereco(a).then(async({data:o})=>{if(this.dados.bairro=o.bairro,this.dados.complemento=o.complemento,this.dados.ibgeCod=o.ibge,this.dados.logradouro=o.logradouro,this.dados.municipio=o.localidade,this.dados.pais="Brasil",this.dados.codigoPais=1058,this.dados.uf=o.uf,this.dados.ufCod=$utils.mapearEstadoCodigo[o.uf],o.ibge){const p=await $db.cidade.le({cidadeCodIbge:o.ibge.toString(),ativo:!0});this.dados.cidadeCodChave=(p.find(m=>m.cod)||{}).cod,this.dados.idCidade=(p.find(m=>m.cod)||{}).id}})},async selecionarCidade(a,o){this.dados.municipio=a.municipio||"",this.dados.ibgeCod=a.ibgeCod||"",this.dados.uf=a.uf||"",this.dados.ufCod=a.ufCod||"",this.dados.cidadeCodChave=a.cidadeCodChave||"",this.dados.idCidade=a.value||"",this.dados.codigoPais=1058,this.dados.pais="Brasil"},async selecionarPais(a,o){this.dados.pais=a.nome,this.dados.codigoPais=a.codigo},async atualiza(){this.sistemas=this.logado.grupoInterno===2?this.sistemasOptisoul:[...this.sistemasOptisoul,...this.sistemasB15],this.dados.segmento=this.logado.grupoInterno===2?"\xD3tica":"",this.servidor=this.logado.grupoInterno===2?this.servidorOptisoul:this.servidorB15},async criarBanco(){$utils.gconsole.log("CriarBanco","criarBanco()",this.dados);try{(!!this.dados.cnpj||!!this.dados.razaoSocial||!!this.dados.fantasia)&&($utils.verificarErro(!this.dados.cnpj,"CNPJ n\xE3o preenchido"),$utils.verificarErro(!$utils.validarDocumentoNacional(this.dados.cnpj),"CNPJ inv\xE1lido"),$utils.verificarErro(!this.dados.razaoSocial,"Raz\xE3o Social n\xE3o preenchido"),$utils.verificarErro(!this.dados.fantasia,"Fantasia n\xE3o preenchido")),$utils.verificarErro(!this.dados.codigoSistema,"Sistema n\xE3o selecionado"),(!!this.dados.cpfUsuario||!!this.dados.nomeUsuario)&&($utils.verificarErro(!this.dados.cpfUsuario,"CFP do usu\xE1rio n\xE3o preenchido"),$utils.verificarErro(!$utils.validarDocumentoNacional(this.dados.cpfUsuario),"CPF inv\xE1lido"),$utils.verificarErro(!this.dados.nomeUsuario,"Nome do usu\xE1rio n\xE3o preenchido"));const a=this.dados.cnpj||this.dados.cpfUsuario;$utils.verificarErro(!a,"CFP e CNPJ n\xE3o preenchidos"),this.dados.baseDados=this.$utils.removerCaracteresEspeciais(this.dados.baseDados).replace(/ /g,""),$utils.verificarErro(!this.dados.baseDados,"Base de Dados n\xE3o preenchido"),this.$q.loading.show({message:"Criando"});let o;o=`select * from clienteSistema where bancoDeDados = ${$utils.sqlStr(this.dados.baseDados)}`;const p=await $utils.executarSql(o,"GeeksPlat15A");$utils.gconsole.log("CriarBanco","retClienteSistemaCadastrada",p),$utils.verificarErro(!!p&&p.length>0,"Nome da Base de dados j\xE1 existente no sistema"),o=`select * from ${this.servidor.sysDatabases} where name = ${$utils.sqlStr(this.dados.baseDados)}`;const m=await $utils.executarSql(o,"GeeksPlat15A");$utils.gconsole.log("CriarBanco","retBancoCadastrado",m),$utils.verificarErro(!!m&&m.length>0,`Nome da Base de dados j\xE1 existente no servidor ${this.servidor.codigo}`),o=`
            declare @baseDados varchar(250) = ${$utils.sqlStr(this.dados.baseDados)}
            if not exists(Select 1 from ${this.servidor.sysDatabases} where name=@baseDados)
            begin
              declare @sql varchar(max) = ''
              set @sql = 'backup database BaseLimpaMobile to disk=''${this.servidor.ip}\\Geeks\\Backup\\BaseLimpaMobile.bkpsql.bak'' With INIT';
              exec (@sql)
              set @sql = 'create database ' + QUOTENAME(@baseDados)
              exec (@sql) ${this.servidor.at}
              set @sql = 'restore database ' + QUOTENAME(@baseDados) + ' from disk=''C:\\Geeks\\Backup\\BaseLimpaMobile.bkpsql.bak'' WITH FILE = 1,  NOUNLOAD,  REPLACE,  STATS = 5,'
              set @sql = @sql + ' move ''OptiSoul'' to ''${this.servidor.drive}\\SqlData\\'+@baseDados+'.mdf'','
              set @sql = @sql + ' move ''OptiSoul_Log'' to ''${this.servidor.drive}\\SqlData\\'+@baseDados+'_log.ldf'''
              exec (@sql) ${this.servidor.at}
            end
            select @baseDados baseDados`;const e=await $utils.executarSql(o,"GeeksPlat15A");$utils.gconsole.log("CriarBanco","retBackupRestore",e),this.$q.notifyPositive(`Banco ${e[0].baseDados} criado com sucesso`);let c;o=`
            insert into Contato (Nome,Apelido,NumeroDocumentoNacional,TipoDocumentoNacional)
            Select ${$utils.sqlStr(this.dados.razaoSocial||this.dados.nomeUsuario)} Nome, ${$utils.sqlStr(this.dados.fantasia||this.dados.nomeUsuario)} Apelido, ${$utils.sqlStr(a)} NumeroDocumentoNacional, 'CNPJ'
            where not exists(select 1 from contato where NumeroDocumentoNacional = ${$utils.sqlStr(a)})
            select * from contato where NumeroDocumentoNacional = ${$utils.sqlStr(a)}`;const t=await $utils.executarSql(o,"GeeksPlat15A");$utils.gconsole.log("CriarBanco","retContatoPlat",t),$utils.verificarErro(!t||!t.length||!t[0].CodigoContato,"Erro na cria\xE7\xE3o do contato empresa na plataforma"),c=t[0].CodigoContato,o=`
            insert into ClienteSistema (CodigoSistema,CodigoCliente,URLservidor,BancoDeDados)
            Select
              ${$utils.sqlNum(this.dados.codigoSistema)} CodigoSistema,
              ${$utils.sqlNum(c)} CodigoCliente,
              'https://api.b15.com.br/sql/${this.servidor.codigo}' URLServidor,
              ${$utils.sqlStr(this.dados.baseDados)} BancoDeDados
            --where not exists(Select 1 from ClienteSistema where CodigoSistema=${$utils.sqlNum(this.dados.codigoSistema)} and CodigoCliente=${$utils.sqlNum(c)} and BancoDeDados=${$utils.sqlStr(this.dados.baseDados)})
            select * from ClienteSistema where CodigoSistema=${$utils.sqlNum(this.dados.codigoSistema)} and CodigoCliente=${$utils.sqlNum(c)} and BancoDeDados=${$utils.sqlStr(this.dados.baseDados)}`;const u=await $utils.executarSql(o,"GeeksPlat15A");$utils.gconsole.log("CriarBanco","retClienteSistema",u),$utils.verificarErro(!u||!u.length||!u[0].CodigoClienteSistema,"Erro na cria\xE7\xE3o do ClienteSistema");const l=u[0].CodigoClienteSistema;if(this.dados.cpfUsuario){o=`
            insert into Contato (Nome, Apelido, NumeroDocumentoNacional, TipoDocumentoNacional)
            Select ${$utils.sqlStr(this.dados.nomeUsuario)} Nome, ${$utils.sqlStr(this.dados.nomeUsuario)} Apelido, ${$utils.sqlStr(this.dados.cpfUsuario)} NumeroDocumentoNacional, 'CPF'
            --where not exists(select 1 from contato where NumeroDocumentoNacional = ${$utils.sqlStr(this.dados.cpfUsuario)})
            select * from contato where NumeroDocumentoNacional = ${$utils.sqlStr(this.dados.cpfUsuario)}`;const C=await $utils.executarSql(o,this.dados.baseDados);$utils.gconsole.log("CriarBanco","retContatoCpf",C),$utils.verificarErro(!C||!C.length||!C[0].CodigoContato,"Erro na cria\xE7\xE3o do contato");const E=C[0].CodigoContato;let s,h,S;if(this.dados.cnpj){o=`
              insert into Contato (Nome, Apelido, NumeroDocumentoNacional, TipoDocumentoNacional)
              Select ${$utils.sqlStr(this.dados.razaoSocial)} Nome, ${$utils.sqlStr(this.dados.fantasia)} Apelido, ${$utils.sqlStr(this.dados.cnpj)} NumeroDocumentoNacional, 'CNPJ'
              --where not exists(select 1 from contato where NumeroDocumentoNacional = ${$utils.sqlStr(this.dados.cnpj)})
              select * from contato where NumeroDocumentoNacional = ${$utils.sqlStr(this.dados.cnpj)}`;const d=await $utils.executarSql(o,this.dados.baseDados);$utils.gconsole.log("CriarBanco","retContatoCnpj",d),$utils.verificarErro(!d||!d.length||!d[0].CodigoContato,"Erro na cria\xE7\xE3o do contato"),S=d[0].CodigoContato,o=`insert into ContatoEndereco (
                id,
                codigoContato,
                idContato,
                Logradouro,
                Numero,
                Complemento,
                Bairro,
                Cep,
                IbgeCod,
                Municipio,
                cidadeCodChave,
                Uf,
                UFCod,
                Pais,
                codigoPais,
                Grupo
              )
              Select
                ${$utils.sqlStr($utils.uuid())} id, 
                ${$utils.sqlStr(d[0].CodigoContato)} CodigoContato,
                ${$utils.sqlStr(d[0].id)} idContato,
                ${$utils.sqlStr(this.dados.logradouro)} Logradouro,
                ${$utils.sqlStr(this.dados.numero)} Numero,
                ${$utils.sqlStr(this.dados.complemento)} Condominio,
                ${$utils.sqlStr(this.dados.bairro)} Bairro,
                ${$utils.sqlStr(this.dados.cep)} Cep,
                ${$utils.sqlStr(this.dados.ibgeCod)} IbgeCod,
                ${$utils.sqlStr(this.dados.municipio)} Municipio,
                ${$utils.sqlStr(this.dados.cidadeCodChave)} CidadeCodChave,
                ${$utils.sqlStr(this.dados.uf)} Uf,
                ${$utils.sqlStr(this.dados.ufCod)} UFCod,
                ${$utils.sqlStr(this.dados.pais)} Pais,
                ${$utils.sqlStr(this.dados.codigoPais)} codigoPais,
                'Principal' Grupo
              where not exists(select 1 from ContatoEndereco where idContato = ${$utils.sqlStr(d[0].id)})
              select * from ContatoEndereco where idContato = ${$utils.sqlStr(d[0].id)}`;const g=await $utils.executarSql(o,this.dados.baseDados);$utils.gconsole.log("CriarBanco","retEnderecoContato",g),$utils.verificarErro(!g||!g.length||!g[0].CodigoContatoEndereco,"Erro na cria\xE7\xE3o do contato empresa na plataforma"),o=`
              insert into Empresa (Nome, Apelido, NumeroDocumentoNacional, codigoContato, codigoClienteSistema)
              Select
              ${$utils.sqlStr(this.dados.razaoSocial)} Nome,
              ${$utils.sqlStr(this.dados.fantasia)} Apelido,
              ${$utils.sqlStr(this.dados.cnpj)} NumeroDocumentoNacional,
              ${$utils.sqlNum(S)} codigoContato,
              ${$utils.sqlNum(l)} codigoClienteSistema
              --where not exists(select 1 from empresa where NumeroDocumentoNacional = ${$utils.sqlStr(this.dados.cnpj)} and codigoClienteSistema = ${$utils.sqlNum(l)} and codigoContato = ${$utils.sqlNum(S)})
              select * from empresa where NumeroDocumentoNacional = ${$utils.sqlStr(this.dados.cnpj)} and codigoClienteSistema = ${$utils.sqlNum(l)} and codigoContato = ${$utils.sqlNum(S)}`;const N=await $utils.executarSql(o,this.dados.baseDados);$utils.gconsole.log("CriarBanco","retEmpresaErp",N),$utils.verificarErro(!N||!N.length||!N[0].CodigoEmpresa,"Erro na cria\xE7\xE3o da empresa Erp"),s=N[0].CodigoEmpresa;const v=await $utils.executarSql(o,"GeeksPlat15A");$utils.gconsole.log("CriarBanco","retEmpresaPlat",v),$utils.verificarErro(!v||!v.length||!v[0].CodigoEmpresa,"Erro na cria\xE7\xE3o da empresa Plat"),h=v[0].CodigoEmpresa}o=`
            insert into grupo (codigoClienteSistema, Descricao)
            Select ${$utils.sqlNum(l)} codigoClienteSistema, 'Administrador' Descricao
            --where not exists(Select 1 from grupo where codigoClienteSistema= ${$utils.sqlNum(l)} and Descricao='Administrador')
            Select * from grupo where codigoClienteSistema= ${$utils.sqlNum(l)} and Descricao='Administrador'`;const q=await $utils.executarSql(o,"GeeksPlat15A");$utils.gconsole.log("CriarBanco","retGrupo",q),$utils.verificarErro(!q||!q.length||!q[0].CodigoGrupo,"Erro na cria\xE7\xE3o do grupo");const $=q[0].CodigoGrupo;o=`
            insert into usuario (Nome, NumeroDocumentoNacional, senha, codigoContato, codigoGrupo)
            Select
              ${$utils.sqlStr(this.dados.nomeUsuario)} Nome,
              ${$utils.sqlStr(this.dados.cpfUsuario)} NumeroDocumentoNacional,
              '16a492d0689ac993da82e6fc034c12c1' senha,
              ${$utils.sqlNum(E)} codigoContato,
              ${$utils.sqlNum($)} codigoGrupo
            where not exists(select 1 from usuario where NumeroDocumentoNacional = ${$utils.sqlStr(this.dados.cpfUsuario)})
            select * from usuario where NumeroDocumentoNacional = ${$utils.sqlStr(this.dados.cpfUsuario)}-- and codigoGrupo = ${$utils.sqlNum($)}`;const f=await $utils.executarSql(o,"GeeksPlat15A");$utils.gconsole.log("CriarBanco","retUsuario",f),$utils.verificarErro(!f||!f.length||!f[0].CodigoUsuario,"Erro na cria\xE7\xE3o do Usuario");const n=f[0].CodigoUsuario;o=`
            update Contato set codigoUsuario=${$utils.sqlNum(n)}, idUsuario=${$utils.sqlStr(f[0].id)}
            where codigoContato = ${$utils.sqlNum(E)}`;const k=await $utils.executarSql(o,this.dados.baseDados);$utils.gconsole.log("CriarBanco","retUpdateContatoCpf",k),o=`
            insert into usuarioPermissaoSistema (codigoClienteSistema, codigoGrupo, codigoUsuario)
            Select
              ${$utils.sqlNum(l)} codigoClienteSistema,
              ${$utils.sqlNum($)} codigoGrupo,
              ${$utils.sqlNum(n)} codigoUsuario
            --where not exists(select 1 from usuarioPermissaoSistema where codigoClienteSistema = ${$utils.sqlNum(l)} and codigoGrupo = ${$utils.sqlNum($)} and codigoUsuario = ${$utils.sqlNum(n)})
            select * from usuarioPermissaoSistema where codigoClienteSistema = ${$utils.sqlNum(l)} and codigoGrupo = ${$utils.sqlNum($)} and codigoUsuario = ${$utils.sqlNum(n)}`;const D=await $utils.executarSql(o,"GeeksPlat15A");if($utils.gconsole.log("CriarBanco","retUsuarioPermissaoSistema",D),$utils.verificarErro(!D||!D.length,"Erro na cria\xE7\xE3o do UsuarioPermissaoSistema"),!!h&&!!s&&!!S){o=`
              insert into empresaUsuarioPermissao (codigoUsuario, codigoContato, codigoEmpresa)
              Select
              ${$utils.sqlNum(n)} codigoUsuario,
              ${$utils.sqlNum(S)} codigoContato,
              ${$utils.sqlNum(h)} codigoEmpresa
              --where not exists(select 1 from empresaUsuarioPermissao where codigoUsuario = ${$utils.sqlNum(n)} and codigoEmpresa = ${$utils.sqlNum(s)})
              select * from empresaUsuarioPermissao where codigoUsuario = ${$utils.sqlNum(n)} and codigoEmpresa = ${$utils.sqlNum(h)}`;const d=await $utils.executarSql(o,this.dados.baseDados);$utils.gconsole.log("CriarBanco","retEmpresaUsuarioPermissaoErp",d),$utils.verificarErro(!d||!d.length,"Erro na cria\xE7\xE3o da EmpresaUsuarioPermissao Erp"),o=`
              insert into empresaUsuarioPermissao (codigoUsuario, codigoContato, codigoEmpresa)
              Select
              ${$utils.sqlNum(n)} codigoUsuario,
              ${$utils.sqlNum(S)} codigoContato,
              ${$utils.sqlNum(h)} codigoEmpresa
              --where not exists(select 1 from empresaUsuarioPermissao where codigoUsuario = ${$utils.sqlNum(n)} and codigoEmpresa = ${$utils.sqlNum(h)})
              select * from empresaUsuarioPermissao where codigoUsuario = ${$utils.sqlNum(n)} and codigoEmpresa = ${$utils.sqlNum(h)}`;const g=await $utils.executarSql(o,"GeeksPlat15A");$utils.gconsole.log("CriarBanco","retEmpresaUsuarioPermissaoPlat",g),$utils.verificarErro(!g||!g.length,"Erro na cria\xE7\xE3o da EmpresaUsuarioPermissao Plat")}o=`
            insert into grupoPermissao (codigoGrupo, codigoObjeto, permitir)
            Select
              ${$utils.sqlNum($)} codigoGrupo,
              so.codigoObjeto,
              1 permitir
            from sistemaObjeto so
            where codigoSistema = ${$utils.sqlNum(this.dados.codigoSistema)}
              --and not exists(select 1 from grupoPermissao gp where so.codigoObjeto = gp.codigoObjeto and codigoGrupo = ${$utils.sqlNum($)})
            select * from grupoPermissao gp where codigoGrupo = ${$utils.sqlNum($)}`;const U=await $utils.executarSql(o,"GeeksPlat15A");$utils.gconsole.log("CriarBanco","retGrupoPermissao",U),(!U||!U.length)&&this.$q.notifyError("Sistema n\xE3o possui objetos associados para liberar permiss\xF5es"),this.$q.notifyPositive("Usuario, Empresa, Grupo e Permiss\xF5es criados com sucesso"),o=`exec SP_CriarBase_ParametrizacaoInicial ${$utils.sqlNum(this.dados.codigoSistema)}, ${$utils.sqlStr(this.dados.segmento)}`;const A=await $utils.executarSql(o,this.dados.baseDados);$utils.gconsole.log("CriarBanco",o,A),this.$q.notifyPositive("Parametriza\xE7\xE3o inicial realizada com sucesso"),o=`
            declare @baseDados varchar(250) = ${$utils.sqlStr(this.dados.baseDados)}
            declare @ativo int = ${$utils.sqlNum(this.servidor.ativoSincronismo)}
            update sincronismoBanco set ativo=@ativo where bancoDeDados=@baseDados
            if @@Rowcount = 0
            begin
              insert into sincronismoBanco (bancoDeDados, ativo) values (@baseDados, @ativo)
            end`,await $utils.executarSql(o,"GeeksPlat15A"),this.$q.notifyPositive("Sincronismo ativado para o banco")}}catch(a){this.$q.notifyError("Erro na cria\xE7\xE3o do banco",a)}finally{this.$q.loading.hide()}}},watch:{"dados.codigoSistema"(a){this.servidor=this.sistemasOptisoul.find(o=>o.valor===a)?this.servidorOptisoul:this.servidorB15,this.dados.segmento=this.sistemasOptisoul.find(o=>o.valor===a)?"\xD3tica":this.dados.segmento}},async mounted(){this.logado=$db.usuario.logado,await this.atualiza()}},_={class:"u-container"},Q={class:"col-4"},R={class:"col-2"},J={class:"u-container relative-position"};function H(a,o,p,m,e,c){const t=b("campo"),u=b("row"),l=b("card"),C=b("SeletorCidade"),E=b("SeletorPais");return w(),B(F,{onSubmit:c.criarBanco},{default:r(()=>[e.logado.administrador&&[1,2].includes(e.logado.grupoInterno)?(w(),B(O,{key:0},{default:r(()=>[i(x,{class:"bg-gradiente text-white"},{default:r(()=>[i(V,{class:""},{default:r(()=>[G(" Cria\xE7\xE3o de banco para novo cliente ")]),_:1})]),_:1}),P("div",_,[i(l,null,{default:r(()=>[i(u,null,{default:r(()=>[i(t,{col:"3",modelValue:e.dados.cnpj,"onUpdate:modelValue":o[0]||(o[0]=s=>e.dados.cnpj=s),modelModifiers:{trim:!0},rotulo:"CNPJ",mask:"##.###.###/####-##"},null,8,["modelValue"]),i(t,{col:"9",modelValue:e.dados.fantasia,"onUpdate:modelValue":o[1]||(o[1]=s=>e.dados.fantasia=s),modelModifiers:{trim:!0},rotulo:"Fantasia"},null,8,["modelValue"]),i(t,{col:"12",modelValue:e.dados.razaoSocial,"onUpdate:modelValue":o[2]||(o[2]=s=>e.dados.razaoSocial=s),modelModifiers:{trim:!0},rotulo:"Raz\xE3o Social"},null,8,["modelValue"])]),_:1})]),_:1}),i(l,null,{default:r(()=>[i(u,null,{default:r(()=>[G(" Endere\xE7o ")]),_:1}),i(u,null,{default:r(()=>[i(t,{col:"2",modelValue:e.dados.cep,"onUpdate:modelValue":o[3]||(o[3]=s=>e.dados.cep=s),modelModifiers:{trim:!0},rotulo:"CEP",onChange:o[4]||(o[4]=s=>c.consultarCep()),mask:"#####-###",rules:[s=>s&&s.replace(/\D/g,"").length===8||"O CEP est\xE1 muito curto."]},null,8,["modelValue","rules"]),i(t,{col:"5",modelValue:e.dados.logradouro,"onUpdate:modelValue":o[5]||(o[5]=s=>e.dados.logradouro=s),modelModifiers:{trim:!0},rotulo:"Endere\xE7o"},null,8,["modelValue"]),i(t,{col:"2",modelValue:e.dados.numero,"onUpdate:modelValue":o[6]||(o[6]=s=>e.dados.numero=s),modelModifiers:{trim:!0},rotulo:"Numero"},null,8,["modelValue"]),i(t,{col:"3",modelValue:e.dados.complemento,"onUpdate:modelValue":o[7]||(o[7]=s=>e.dados.complemento=s),modelModifiers:{trim:!0},rotulo:"Complemento"},null,8,["modelValue"])]),_:1}),i(u,null,{default:r(()=>[i(t,{col:"5",modelValue:e.dados.bairro,"onUpdate:modelValue":o[8]||(o[8]=s=>e.dados.bairro=s),modelModifiers:{trim:!0},rotulo:"Bairro"},null,8,["modelValue"]),i(t,{col:"1",modelValue:e.dados.uf,"onUpdate:modelValue":o[9]||(o[9]=s=>e.dados.uf=s),modelModifiers:{trim:!0},rotulo:"UF"},null,8,["modelValue"]),P("div",Q,[i(C,{ibgeCod:e.dados.ibgeCod,onSelecionar:o[10]||(o[10]=s=>c.selecionarCidade(s,a.index)),required:"","somente-leitura":!1},null,8,["ibgeCod"])]),P("div",R,[i(E,{codigoPais:e.dados.codigoPais,onSelecionar:o[11]||(o[11]=s=>c.selecionarPais(s,a.index)),required:""},null,8,["codigoPais"])])]),_:1})]),_:1}),i(l,null,{default:r(()=>[i(u,null,{default:r(()=>[i(t,{col:"12",modelValue:e.dados.baseDados,"onUpdate:modelValue":o[12]||(o[12]=s=>e.dados.baseDados=s),modelModifiers:{trim:!0},rotulo:"Base de Dados"},null,8,["modelValue"]),i(t,{col:"6",modelValue:e.dados.codigoSistema,"onUpdate:modelValue":o[13]||(o[13]=s=>e.dados.codigoSistema=s),rotulo:"Sistema",tipo:"seletor",opcoes:e.sistemas},null,8,["modelValue","opcoes"]),i(t,{col:"3",modelValue:e.dados.segmento,"onUpdate:modelValue":o[14]||(o[14]=s=>e.dados.segmento=s),modelModifiers:{trim:!0},rotulo:"Segmento"},null,8,["modelValue"]),i(t,{col:"3",modelValue:e.servidor.codigo,"onUpdate:modelValue":o[15]||(o[15]=s=>e.servidor.codigo=s),rotulo:"Servidor","somente-leitura":""},null,8,["modelValue"])]),_:1})]),_:1}),i(l,null,{default:r(()=>[i(u,null,{default:r(()=>[i(t,{col:"3",modelValue:e.dados.cpfUsuario,"onUpdate:modelValue":o[16]||(o[16]=s=>e.dados.cpfUsuario=s),modelModifiers:{trim:!0},rotulo:"CPF usuario",mask:"###.###.###-##"},null,8,["modelValue"]),i(t,{col:"9",modelValue:e.dados.nomeUsuario,"onUpdate:modelValue":o[17]||(o[17]=s=>e.dados.nomeUsuario=s),modelModifiers:{trim:!0},rotulo:"Nome"},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1})):y("",!0),i(M,{class:"bg-light no-shadow q-pa-sm text-right u-bordaCima"},{default:r(()=>[P("div",J,[i(x,{class:"text-white"},{default:r(()=>[i(V,null,{default:r(()=>[i(z,{flat:"",type:"submit",label:"Criar",class:"bg-primary text-white"})]),_:1})]),_:1})])]),_:1})]),_:1},8,["onSubmit"])}var X=j(L,[["render",H]]);export{X as default};
