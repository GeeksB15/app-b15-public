<html>
<head>
<title>OitoBrasil</title>
</head>
<body>
<h2>Oito Brasil (Como usar:)</h2>

<form action="img.asp" method="get">
  <fieldset>
  <legend>Imagem</legend>
   CodigoEmpreendimento:<input type="text" name="CodigoEmpreendimento" value="<%=CodigoEmpreendimento%>"> <br>
   Quadra:<input type="text" name="Quadra" value="<%=quadra%>"> <br>
   Lote:<input type="text" name="Lote" value="<%=lote%>"> <br>
   Img: <select name="Img">
		<option value="quadra">quadra</option>
		<option value="lote">lote</option>
	</select><br>
	<input type="hidden" name="html" value="1">
   <input type="submit" value="...">
  </fieldset>
</form>
</p>

<fieldset>
	<p>Analise o fonte da pagina</p>
	<p>img src='http://erp.b15.online/Reports/OitoBrasil/img.asp?CodigoEmpreendimento=<%=CodigoEmpreendimento%>&Quadra=<%=quadra%>&Lote=<%=lote%>&Img=<%=Img%>'</p>
	<IMG SRC="http://erp.b15.online/Reports/OitoBrasil/img.asp?CodigoEmpreendimento=<%=CodigoEmpreendimento%>&Quadra=<%=quadra%>&Lote=<%=lote%>&Img=<%=Img%>">
</fieldset>

</body>
</html>
