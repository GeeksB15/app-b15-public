DECLARE @data_de DATE;
SET @data_de = '01-01-2018';

DECLARE @data_ate DATE;
SET @data_ate = '26-02-2018';

DECLARE @Empresa Varchar(10);
SET @Empresa = '%';

DECLARE @Contato Varchar(10);
SET @Contato = '%';

DECLARE @CodigoFatura Varchar(10);
SET @CodigoFatura = '%';

DECLARE @NumeroFatura Varchar(10);
SET @NumeroFatura = '%';

--Select filtros
SELECT
	IsNull(CodigoDocumento, '') as CodigoDocumento
	,IsNull(CodigoFatura, '') as CodigoFatura
	,IsNull(Numero, 0) as Numero
	,IsNull(Convert(varchar(10), DataHoraFinalizado, 103), '') as DataFinalizado
	,IsNull(Convert(varchar(10), DataHoraFinalizado, 103)+ ' ' + Convert(varchar(10), DataHoraFinalizado, 108), '') as DataHoraFinalizado
	,IsNull(Convert(varchar(10), DataHoraEmissao, 103), '') as DataEmissao
	,IsNull(Convert(varchar(10), DataHoraEmissao, 103)+ ' ' + Convert(varchar(10), DataHoraEmissao, 108), '') as DataHoraEmissao
	,IsNull(CodigoContato, '') as CodigoContato
	,IsNull(CodigoEmpresa, '') as CodigoEmpresa
FROM Documento
WHERE
	(Tipo = 'Fatura')
	AND (Operacao = 'Faturamento')
	AND (Status = 'Finalizada')
	AND ( (Convert(Date, DataHoraFinalizado, 103) >= @data_de) AND (Convert(Date, DataHoraFinalizado, 103) <= @data_ate) )
	AND (CodigoEmpresa LIKE @Empresa)
	AND (CodigoContato LIKE @Contato)
	AND (CodigoDocumento LIKE @CodigoFatura)
	AND (Numero LIKE @NumeroFatura)


--Empresa
SELECT
	IsNull(CEmp.CodigoContato, '') as CodigoEmpresa,
	IsNull(CEmp.Nome, '') as NomeEmpresa,
	IsNull(CEmp.NumeroDocumentoNacional, '') as CNPJ,
	IsNull(CEmp.NumeroDocumentoEstadual, '') as InscricaoEstadual,
	IsNull(CEmp.Email, '') as EmailEmpresa,
	IsNull(CEmp.Site, '') as SiteEmpresa,
	(IsNull(CEEmp.Logradouro, ''))+' '+ (IsNull(CEEmp.Numero, ''))+', '+ (IsNull(CEEmp.Bairro, ''))+' - '+ (IsNull(CEEmp.Municipio, ''))+'-'+(IsNull(CEEmp.UF, '')) +' '+(IsNull(CEEmp.Cep, '')) as EnderecoEmpresa,
	IsNull(CTEmp.Telefone, '') as TelefoneEmpresa
FROM Contato as CEmp
	LEFT JOIN ContatoEndereco as CEEmp ON(CEmp.CodigoContato = CEEmp.CodigoContato)
	LEFT JOIN ContatoTelefone as CTEmp ON(CEmp.CodigoContato = CTEmp.CodigoContato)
	--LIGAÇÃO COM SELECT PAI
	JOIN Documento as D ON(CEmp.CodigoContato = D.CodigoEmpresa)


--Clientes
SELECT
	IsNull(CCli.CodigoContato, '') as CodigoCliente,
	IsNull(CCli.Nome, '') as NomeCliente,
	IsNull(CCli.NumeroDocumentoNacional, '') as CPF,
	IsNull(CCli.NumeroDocumentoEstadual, '') as RG,
	IsNull(CCli.Email, '') as EmailCliente,
	IsNull(CCli.DataAbertura, '') as DataNscCliente,
	(IsNull(CECli.Logradouro, ''))+' '+ (IsNull(CECli.Numero, ''))+', '+ (IsNull(CECli.Bairro, ''))+' - '+ (IsNull(CECli.Municipio, ''))+'-'+(IsNull(CECli.UF, '')) +' '+(IsNull(CECli.Cep, '')) as EnderecoCliente,
	IsNull(CTCli.Telefone, '') as TelefoneCliente
FROM Contato as CCli
	LEFT JOIN ContatoEndereco as CECli ON(CCli.CodigoContato = CECli.CodigoContato)
	LEFT JOIN ContatoTelefone as CTCli ON(CCli.CodigoContato = CTCli.CodigoContato)
	--LIGAÇÃO COM SELECT PAI
	JOIN Documento as D ON(CCli.CodigoContato = D.CodigoContato)


--Fatura
SELECT
	IsNull(DFat.CodigoDocumento, '') as CodigoFatura,
	IsNull(DFat.Numero, 0) as NumeroFatura,
	IsNull(DFat.SubTotal, 0.0000) as SubTotalFatura,
	IsNull(DFat.TotalDesconto, 0.0000) as DescontoFatura,
	IsNull(DFat.TotalDocumento, 0.0000) as TotalFatura,
	IsNull(Convert(varchar(10), DFat.DataHoraFinalizado, 103), Convert(varchar(10), DFat.DataHoraEmissao, 103)) as DataFinalizado,
	IsNull(Convert(varchar(10), DFat.DataHoraFinalizado, 103)+ ' ' + Convert(varchar(10), DFat.DataHoraFinalizado, 108), Convert(varchar(10), DFat.DataHoraEmissao, 103)+ ' ' + Convert(varchar(10), DFat.DataHoraEmissao, 108)) DataFinalizadoCompleto
FROM Documento as DFat
	--LIGAÇÃO COM SELECT PAI
	JOIN Documento DocPai ON(DocPai.CodigoFatura = DFat.CodigoDocumento)
ORDER BY
	DataFinalizadoCompleto DESC, NumeroFatura ASC


--Venda
SELECT
	IsNull(Dv.CodigoFatura, '') as CodigoFatura,
	IsNull(Dv.CodigoDocumento, '') as CodigoVenda,
	IsNull(convert(varchar, Dv.Numero), '') as NumeroVenda,
	IsNull(SUM_Dv.SUMQuantidade, 0) + IsNull(SUM_Outros.SUMQuantidade, 0) as Quantidade,
	IsNull(SUM_Dv.SUMValorVendaUnitario, 0.000) + IsNull(SUM_Outros.SUMValorVendaUnitario, 0.000) as ValorVendaUnitario,
	IsNull(SUM_Dv.SUMSubTotal, 0.000) + IsNull(SUM_Outros.SUMSubTotal, 0.000) as SubTotal,
	IsNull(SUM_Dv.SUMDescontoSubTotal, 0.000) + IsNull(SUM_Outros.SUMDescontoSubTotal, 0.000) as DescontoSubTotal,
	IsNull(SUM_Dv.SUMTotal, 0.000) + IsNull(SUM_Outros.SUMTotal, 0.000) as Total
FROM Documento as Dv
	
	--LIGAÇÃO COM SELECT PAI
	JOIN Documento as DocPai ON(Dv.CodigoFatura = DocPai.CodigoDocumento)

	LEFT JOIN(
		SELECT
			IsNull(Dv.CodigoDocumento, '') as CodigoDocumento,
			SUM(IsNull(Ditem.Quantidade, 0)) as SUMQuantidade,
			SUM(CASE WHEN(IsNull(Ditem.Quantidade, 0) > 1) THEN(IsNull(Ditem.Quantidade, 0) * IsNull(It.ValorVenda, 0.0000)) ELSE(IsNull(It.ValorVenda, 0.0000)) END) as SUMValorVendaUnitario,
			SUM(IsNull(Ditem.SubTotal, 0.0000)) as SUMSubTotal,
			SUM(IsNull(Ditem.DescontoSubTotal, 0.0000)) as SUMDescontoSubTotal,
			SUM(IsNull(Ditem.Total, 0.0000)) as SUMTotal
		FROM Documento as Dv
			JOIN Documento as Di ON(Di.CodigoDocumentoAdicional = Dv.CodigoDocumento) 
			JOIN DocumentoItem as Ditem ON(Di.CodigoDocumento = Ditem.CodigoDocumento)
			JOIN Item as It ON(Ditem.CodigoItem = It.CodigoItem)
			
			--LIGAÇÃO COM SELECT PAI
			JOIN Documento as DocPai ON(Dv.CodigoFatura = DocPai.CodigoDocumento)
		WHERE
			(Dv.Tipo = 'Venda')
			AND(Di.Tipo = 'Item Venda')
		GROUP BY Dv.CodigoDocumento
	) as SUM_Dv ON(Dv.CodigoDocumento = SUM_Dv.CodigoDocumento)
	LEFT JOIN(
		SELECT
			IsNull(Dv.CodigoDocumento, '') as CodigoDocumento,
			SUM(IsNull(Ditem.Quantidade, 0)) as SUMQuantidade,
			SUM(CASE WHEN(IsNull(Ditem.Quantidade, 0) > 1) THEN(IsNull(Ditem.Quantidade, 0) * IsNull(It.ValorVenda, 0.0000)) ELSE(IsNull(It.ValorVenda, 0.0000)) END) as SUMValorVendaUnitario,
			SUM(IsNull(Ditem.SubTotal, 0.0000)) as SUMSubtotal,
			SUM(IsNull(Ditem.DescontoSubTotal, 0.0000)) as SUMDescontoSubTotal,
			SUM(IsNull(Ditem.Total, 0.0000)) as SUMTotal
		FROM Documento as Dv
			JOIN DocumentoItem as Ditem ON(Ditem.CodigoDocumento = Dv.CodigoDocumento)
			JOIN Item as It ON(Ditem.CodigoItem = It.CodigoItem)

			--LIGAÇÃO COM SELECT PAI
			JOIN Documento as DocPai ON(Dv.CodigoFatura = DocPai.CodigoDocumento)
		WHERE
			(Dv.Tipo = 'Venda')
		GROUP BY Dv.CodigoDocumento
	) as SUM_Outros ON(Dv.CodigoDocumento = SUM_Outros.CodigoDocumento)
WHERE
	(Dv.Tipo = 'Venda')
ORDER BY NumeroVenda


--Envelope
SELECT
	IsNull(De.CodigoDocumento, '') as CodigoEnvelope,
	(IsNull(convert(varchar, Dv.Numero), '')+'-'+ IsNull(convert(varchar, De.Numero), '')) as NumeroEnvelope
FROM Documento as Dv
	LEFT JOIN Documento as De ON(De.DocumentoCodigo = Dv.CodigoDocumento) AND(De.Tipo = 'Envelope')
	--LIGAÇÃO SELECT PAI
	JOIN Documento as DocPai ON(Dv.CodigoFatura = DocPai.CodigoDocumento) 
WHERE
	(Dv.Tipo = 'Venda')
ORDER BY NumeroEnvelope


--Itens Envelope
SELECT
	IsNull(It.CodigoItem, '') as CodigoItem,
	IsNull(It.CodigoBarras, '') as CodigoBarras,
	IsNull(It.Tipo, '') as Tipo,
	IsNull(It.Marca, '') as Marca,
	IsNull(It.Modelo, '') as Modelo,
	IsNull(convert(varchar, It.Tamanho), '') as Tamanho,
	IsNull(It.AmarcaoCor, '') as ArmacaoCor,
	IsNull(It.Cor, '') as LenteCor,
	(CASE
		WHEN((It.Tipo = 'Armação') OR(It.Tipo = 'Óculos Sol') OR(It.Tipo = 'Óculos Pronto'))
		THEN(CASE
				WHEN((IsNull(It.Modelo, '')+' '+ IsNull(convert(varchar, It.Tamanho), '')+' '+ IsNull(It.AmarcaoCor, '')) = '')
				THEN(IsNull(It.Marca, '')+' '+ IsNull(It.Descricao, ''))
				ELSE(IsNull(It.Marca, '')+' '+ IsNull(It.Modelo, '')+' '+ IsNull(convert(varchar, It.Tamanho), '')+' '+ IsNull(It.AmarcaoCor, ''))
			END)
		ELSE(CASE
				WHEN(IsNull(It.Descricao, '') = '')
				THEN(IsNull(It.Marca, '')+' '+ IsNull(It.Modelo, '')+' '+ IsNull(convert(varchar, It.IndiceRefracao), '')+' '+ IsNull(It.Cor, ''))
				ELSE(IsNull(It.Descricao, ''))
			END)
	END) as DescricaoItem,
	IsNull(Ditem.Quantidade, 0) as Quantidade,
	IsNull(It.ValorVenda, 0.0000) as ValorVendaUnitario,
	IsNull(Ditem.SubTotal, 0.0000) as Subtotal,
	IsNull(Ditem.DescontoSubTotal, 0.0000) as DescontoSubTotal,
	IsNull(Ditem.Total, 0.0000) as Total
FROM Documento as Dv
	JOIN Documento as Di ON(Di.CodigoDocumentoAdicional = Dv.CodigoDocumento)
	JOIN DocumentoItem as Ditem ON(Ditem.CodigoDocumento = Di.CodigoDocumento)
	JOIN Item as It ON(Ditem.CodigoItem = It.CodigoItem)

	--LIGAÇÃO COM SELECT PAI
	JOIN Documento as DocPai ON(Dv.CodigoFatura = DocPai.CodigoDocumento) 
WHERE
	(Dv.Tipo = 'Venda')
	AND(Di.Tipo = 'Item Venda')


--Outros Itens
SELECT
	'OutrosItens' as DescricaoBloco,
	IsNull(It.CodigoItem, '') as CodigoItem,
	IsNull(It.CodigoBarras, '') as CodigoBarras,
	IsNull(It.Tipo, '') as Tipo,
	IsNull(It.Descricao, '') as DescricaoItem,
	IsNull(Ditem.Quantidade, 0) as Quantidade,
	IsNull(It.ValorVenda, 0.0000) as ValorVendaUnitario,
	IsNull(Ditem.SubTotal, 0.0000) as Subtotal,
	IsNull(Ditem.DescontoSubTotal, 0.0000) as DescontoSubTotal,
	IsNull(Ditem.Total, 0.0000) as Total
FROM Documento as DFat
	JOIN Documento as Dv ON(Dv.CodigoFatura = DFat.CodigoDocumento) 
	JOIN DocumentoItem as Ditem ON(Ditem.CodigoDocumento = Dv.CodigoDocumento)
	JOIN Item as It ON(Ditem.CodigoItem = It.CodigoItem)

	--LIGAÇÃO COM SELECT PAI
	JOIN Documento as DocPai ON(Dv.CodigoFatura = DocPai.CodigoDocumento)
WHERE
	(Dv.Tipo = 'Venda')


--Formas de pagamento	
SELECT
	IsNull(DFat.CodigoDocumento, '') as CodigoFatura,
	IsNull(DFat.Numero, '') as NumeroFatura,
	IsNull(DCP.CodigoFormaPagamento, '') as CodigoFormaPagamento,
	(CASE WHEN(IsNull(DCP.Sinal, '') = 'false') THEN('') ELSE('Sinal') END) as Sinal,
	(CASE WHEN(IsNull(DCP.Sinal, '') = 'false') THEN('') ELSE('Sinal') END)+' '+ IsNull(FP.Descricao, '') as FormaPagamento,
	SUM(IsNull(DCP.Valor, 0.0000)) as ValorPagamento,
	(CASE WHEN(count(*) > 1) THEN(convert(varchar, count(*)) +'x') ELSE('') END) as Parcelas
FROM Documento as DFat 
	INNER JOIN DocumentoCondicaoPagamento as DCP ON(DCP.CodigoDocumento = DFat.CodigoDocumento)
	INNER JOIN FormaPagamento as FP ON(DCP.CodigoFormaPagamento = FP.CodigoFormaPagamento)

	--LIGAÇÃO COM SELECT PAI
	JOIN Documento as DocPai ON(DFat.CodigoDocumento = DocPai.CodigoDocumento)
GROUP BY
	DFat.CodigoDocumento, DFat.Numero, DCP.CodigoFormaPagamento, DCP.Sinal, FP.Descricao