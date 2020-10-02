$("input[name=CorteLote]")[0].disabled = false
$("input[name=PosicaoQuadra]")[0].disabled = false
$("input[name=Quadra]")[0].disabled = false

var Zoom= 1
var PosicaoLote = []
var CorteLote = []
var PosicaoQuadra = []
var DragImg= {x:0,y:0,st:0,drag:0}

var interno1721= $("<div></div>");
interno1721.attr("id","interno1721");
currentContainer.find("div[name=sessao_1721]").append(interno1721);
$("#interno1721")[0].style.overflow="auto"
$("#interno1721")[0].style.height="100%"

$("[name=sessao_1722]")[0].style.overflow="auto"
$("[name=sessao_1722]")[0].style.height="100%"

var cDest = $("<canvas id='cDest'></canvas>")
$("#interno1721").append(cDest)
var cDest = $("#cDest")[0]
var cxtDest = cDest.getContext('2d')

var canvas = $("<canvas id='Canvas193'></canvas>")
$("[name=sessao_1722]").append(canvas)
var canvas = $("#Canvas193")[0]
var cxt = canvas.getContext('2d')
$("#Canvas193").hide()

var imgOrig = $("<img id='imgOrig'>") 
$("[name=sessao_1722]").append(imgOrig)
var imgOrig = $("#imgOrig")[0]
$("#imgOrig").hide()

var redraw = function() { 
	
	cDest.width = imgOrig.width* Zoom
	cDest.height = imgOrig.height* Zoom
	
	cxtDest.drawImage(imgOrig, 0, 0,cDest.width,cDest.height);
	
	if (PosicaoLote.length>1) {
		cxtDest.lineWidth = 2;
		cxtDest.beginPath()
		for (i in PosicaoLote) {
			if (i==0) {
				cxtDest.moveTo(PosicaoLote[i].x* Zoom, PosicaoLote[i].y* Zoom);
			} else {
				cxtDest.lineTo(PosicaoLote[i].x* Zoom, PosicaoLote[i].y* Zoom);
			}	
		}
		cxtDest.lineTo(PosicaoLote[0].x* Zoom, PosicaoLote[0].y* Zoom);
		cxtDest.lineJoin = 'round';
		cxtDest.strokeStyle = '#0000ff'
		cxtDest.stroke();
	}
	
	if (PosicaoQuadra.length==2) { 
		cxtDest.beginPath()
		cxtDest.rect(PosicaoQuadra[0].x * Zoom , PosicaoQuadra[0].y * Zoom, (PosicaoQuadra[1].x-PosicaoQuadra[0].x) * Zoom, (PosicaoQuadra[1].y-PosicaoQuadra[0].y) * Zoom )
		cxtDest.lineWidth = 4
		cxtDest.strokeStyle = 'red'
		cxtDest.stroke()
	}
	
	if (CorteLote.length==2) { 
		cxtDest.beginPath()
		cxtDest.rect(CorteLote[0].x * Zoom , CorteLote[0].y * Zoom, (CorteLote[1].x-CorteLote[0].x) * Zoom, (CorteLote[1].y-CorteLote[0].y) * Zoom )
		cxtDest.lineWidth = 4
		cxtDest.strokeStyle = 'green'
		cxtDest.stroke()
	}
		
}

imgOrig.src = "http://erp.b15.online/Reports/OitoBrasil/planta.jpg"

var oZoom = $("#Zoom")
oZoom.attr("min","10")
oZoom.attr("max","200")
oZoom.attr("type","range")
oZoom.change(function(){

	Zoom =parseFloat(oZoom[0].value) / 100
	$("[for=Zoom]").html("Zoom ".concat(parseInt(Zoom*100)," %"))
	
	redraw()
	
})

$('#cDest').on('mousedown', function(e){

	if ($("[name=CorteLote]")[0].style.borderColor=="green") {
		CorteLote = []
		CorteLote.push({x:e.offsetX / Zoom, y:e.offsetY / Zoom})
		currentContainer.find("input[name=CorteLote]").val(JSON.stringify(CorteLote))
		return
	}

	if ($("[name=PosicaoQuadra]")[0].style.borderColor=="red") {
		PosicaoQuadra = []
		PosicaoQuadra.push({x:e.offsetX / Zoom, y:e.offsetY / Zoom})
		currentContainer.find("input[name=PosicaoQuadra]").val(JSON.stringify(PosicaoQuadra))
		return
	}
	
	DragImg.st = $("#interno1721").scrollTop()
	DragImg.sl = $("#interno1721").scrollLeft()
	DragImg.x = e.offsetX
	DragImg.y = e.offsetY

})

$("#cDest").mouseup(function(e) {
	
	if ($("[name=PosicaoLote]")[0].style.borderColor=="blue") {
		PosicaoLote.push({x:e.offsetX / Zoom, y:e.offsetY / Zoom})
		currentContainer.find("input[name=PosicaoLote]").val(JSON.stringify(PosicaoLote))
		redraw()
		return
	}

	if ($("[name=CorteLote]")[0].style.borderColor=="green") {
		CorteLote.push({x:e.offsetX / Zoom, y:e.offsetY / Zoom})
		
		if (CorteLote[0].x > CorteLote[1].x) { return }
		if (CorteLote[0].y > CorteLote[1].y) { return }
			
		currentContainer.find("input[name=CorteLote]").val(JSON.stringify(CorteLote))
		redraw()
		return
	}

	if ($("[name=PosicaoQuadra]")[0].style.borderColor=="red") {
		PosicaoQuadra.push({x:e.offsetX / Zoom, y:e.offsetY / Zoom})
		currentContainer.find("input[name=PosicaoQuadra]").val(JSON.stringify(PosicaoQuadra))
		redraw()
		return
	}	
	
	$("#interno1721").scrollTop(DragImg.st + DragImg.y - e.offsetY)
	$("#interno1721").scrollLeft(DragImg.sl + DragImg.x - e.offsetX)
	
});

// ***** Marcar Posicao Lote
$("[name=PosicaoLote]").click(function(e){
	
	if ($("[name=PosicaoLote]")[0].style.borderColor!="blue") {
		$("[name=PosicaoLote]")[0].style.borderColor=""
		$("[name=PosicaoQuadra]")[0].style.borderColor=""
		$("[name=CorteLote]")[0].style.borderColor=""
		$("[name=PosicaoLote]")[0].style.borderColor="blue"
		PosicaoLote = []
		currentContainer.find("input[name=PosicaoLote]").val(JSON.stringify(PosicaoLote))	
	} else {
		$("[name=PosicaoLote]")[0].style.borderColor=""
		redraw()
	}
	
})

// ***** Marcar Corte Lote
$("[name=CorteLote]").click(function(e){
	if ($("[name=CorteLote]")[0].style.borderColor!="green") {
		$("[name=PosicaoLote]")[0].style.borderColor=""
		$("[name=PosicaoQuadra]")[0].style.borderColor=""
		$("[name=CorteLote]")[0].style.borderColor=""
		$("[name=CorteLote]")[0].style.borderColor="green"
		CorteLote = []
		currentContainer.find("input[name=CorteLote]").val(JSON.stringify(CorteLote))	
	} else {
		$("[name=CorteLote]")[0].style.borderColor=""
		redraw()
	}
	
})

// ***** Marcar Posicao Quadra
$("[name=PosicaoQuadra]").click(function(e){
	if ($("[name=PosicaoQuadra]")[0].style.borderColor!="red") {
		$("[name=PosicaoLote]")[0].style.borderColor=""
		$("[name=PosicaoQuadra]")[0].style.borderColor=""
		$("[name=CorteLote]")[0].style.borderColor=""
		$("[name=PosicaoQuadra]")[0].style.borderColor="red"
		PosicaoQuadra = []
		currentContainer.find("input[name=PosicaoQuadra]").val(JSON.stringify(PosicaoQuadra))	
	} else {
		$("[name=PosicaoQuadra]")[0].style.borderColor=""
		redraw()
		//if (confirm("Salvar posição da Quadra?"){
	}
	
})

$("[name=Quadra]").click(function(e){ ProcessaTodasImagens() })


// ***** Prompt Empreendimento 
currentContainer.find("input[name=CodigoEmpreendimento]").siblings("Img").off();
currentContainer.find("input[name=CodigoEmpreendimento]").siblings("Img").click(function (){	

	var promptSql = "select CodigoEmpreendimento as Codigo, Nome Descricao from Empreendimento"
	var prompt = new Geeks.ERP.PromptB(this, "Empresa", promptSql);
	prompt.Configuracao(1, "Código", 70, 0, "Codigo", "numero","desc");
	prompt.Configuracao(2, "Empreendimento", 250, 0, "Nome", "texto");	
	prompt.Show();	

});	

// ***** Prompt Lote
currentContainer.find("input[name=Lote]").siblings("Img").off();
currentContainer.find("input[name=Lote]").siblings("Img").click(function (){	

	var promptSql = "select Quadra +' ' + right('00' + lote,2) Busca, Quadra,Lote, CodigoLote Codigo,CodigoEmpreendimento,CodigoLote Descricao from Lote"
	var prompt = new Geeks.ERP.PromptB(this, "Lote", promptSql,false, "CodigoEmpreendimento=02");
	
	prompt.Configuracao(1, "Busca", 250, 0, "Busca", "texto");
	prompt.Configuracao(2, "Quadra", 250, 0, "Quadra", "texto");	
	prompt.Configuracao(3, "Lote", 250, 0, "Lote", "texto");	
	prompt.Show(function (obj){
		//currentContainer.find("input[name=Lote]").val();
		//currentContainer.find("input[name=promtpDisplay_Lote]").val();
	
		//alert(obj.Codigo)
		//debugger
		Atu(obj.Codigo);
		
	});	

});

// ***** Botão Gravar
currentContainer.find("a[name=btn_Gravar]").click(function (){ 

	currentContainer.data("GeeksForm").DataSource.Update();
	CodigoLote = currentContainer.find("input[name=CodigoLote]").val()
	Quadra = currentContainer.find("input[name=Quadra]").val()
	
	var Sql = "Update Lote Set PosicaoQuadra=(Select PosicaoQuadra From Lote where CodigoLote=0" + CodigoLote + ") where CodigoEmpreendimento=2 and Quadra='" + Quadra + "'" 
	
	Geeks.ERP.Core.Connection.ExecuteSQL(Sql);
	
	
	//Atu(currentContainer.find("input[name=CodigoLote]").val());
	$.jGrowl("Gravado com sucesso.");

});

// ***** Botão Atualizar
currentContainer.find("[name=btn_Atualizar]").click(function (){ 
	Atu(currentContainer.find("input[name=CodigoLote]").val());
});

VerQuadra = function(){

	if (PosicaoQuadra.length!=2) { return }
	
		if (PosicaoQuadra[0].x > PosicaoQuadra[1].x) {
		x0 = PosicaoQuadra[0].x
		x1 = PosicaoQuadra[1].x
		PosicaoQuadra[0].x = x1
		PosicaoQuadra[1].x = x0
	} 
	if (PosicaoQuadra[0].y > PosicaoQuadra[1].y) {
		y0 = PosicaoQuadra[0].y
		y1 = PosicaoQuadra[1].y
		PosicaoQuadra[0].y = y1
		PosicaoQuadra[1].y = y0
	} 
	
	var Zoom=1
	
	cDest.width = (PosicaoQuadra[1].x-PosicaoQuadra[0].x) * Zoom
	cDest.height = (PosicaoQuadra[1].y-PosicaoQuadra[0].y) * Zoom
	
	var sourceX = PosicaoQuadra[0].x;
	var sourceY = PosicaoQuadra[0].y;
	var sourceWidth = (PosicaoQuadra[1].x-PosicaoQuadra[0].x);
	var sourceHeight = (PosicaoQuadra[1].y-PosicaoQuadra[0].y);
	var destWidth = (PosicaoQuadra[1].x-PosicaoQuadra[0].x) * Zoom
	var destHeight = (PosicaoQuadra[1].y-PosicaoQuadra[0].y) * Zoom
	var destX = 0;
	var destY = 0;

	cxtDest.drawImage(imgOrig, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
	
	if (PosicaoLote.length>1) {
		cxtDest.lineWidth = 2;
		cxtDest.beginPath()
		for (i in PosicaoLote) {
			if (i==0) {
				cxtDest.moveTo((PosicaoLote[i].x-PosicaoQuadra[0].x)* Zoom, (PosicaoLote[i].y-PosicaoQuadra[0].y)* Zoom);
			} else {
				cxtDest.lineTo((PosicaoLote[i].x-PosicaoQuadra[0].x)* Zoom, (PosicaoLote[i].y-PosicaoQuadra[0].y)* Zoom);
			}	
		}
		cxtDest.lineTo((PosicaoLote[0].x-PosicaoQuadra[0].x)* Zoom, (PosicaoLote[0].y-PosicaoQuadra[0].y)* Zoom);
		cxtDest.lineJoin = 'round';
		cxtDest.strokeStyle = '#0000ff'
		cxtDest.stroke();
	}
		
	if (confirm("Gravar Imagem?") == true) {
		debugger
		Img=cDest.toDataURL()
		currentContainer.find("[name=QuadraImgLen]").val(Img.length)
		var Sql = "Update Lote Set QuadraImg='" + Img + "' where CodigoLote=0" + currentContainer.find("input[name=CodigoLote]").val()
		Geeks.ERP.Core.Connection.ExecuteSQL(Sql,false,true,function(){
			$.jGrowl("Imagem quadra gravado com sucesso!");
		});	
	}		
	
	// 	
	
}

// ***** Botão Ver Quadra
currentContainer.find("[name=btn_VerQuadra]").click(function (){ VerQuadra() });

// ***** Botão Imrimir Quadra
currentContainer.find("[name=btn_ImprimirQuadra]").click(function (){ 
	window.open("http://erp.b15.online/Reports/OitoBrasil/impressao.html?CodigoEmpreendimento=2&Quadra=".concat($("[name=Quadra]").val(),"&Lote=",$("[name=Lote]").val(),"&Img=quadra"));
});

// ***** Botão Imrimir Rede de Esgoto
currentContainer.find("[name=btn_ImprimirRedeEsgoto]").click(function (){ 
	window.open("http://erp.b15.online/Reports/OitoBrasil/redeEsgoto.html?Quadra=".concat($("[name=Quadra]").val(),"&Rua=",$("[name=Rua]").val(),"&Lado=",$("[name^=LadoEsgoto]").val(),"&Lote=",$("[name^=Lote]").val()));
});

VerLote = function(){
//	debugger
	if (CorteLote.length!=2) { return }
	
	var Zoom=1
	
	if (CorteLote[0].x > CorteLote[1].x) {
		x0 = CorteLote[0].x
		x1 = CorteLote[1].x
		CorteLote[0].x = x1
		CorteLote[1].x = x0
	} 
	if (CorteLote[0].y > CorteLote[1].y) {
		y0 = CorteLote[0].y
		y1 = CorteLote[1].y
		CorteLote[0].y = y1
		CorteLote[1].y = y0
	} 	
	
	cDest.width = (CorteLote[1].x-CorteLote[0].x) * Zoom
	cDest.height = (CorteLote[1].y-CorteLote[0].y) * Zoom
	
	var sourceX = CorteLote[0].x;
	var sourceY = CorteLote[0].y;
	var sourceWidth = (CorteLote[1].x-CorteLote[0].x);
	var sourceHeight = (CorteLote[1].y-CorteLote[0].y);
	var destWidth = (CorteLote[1].x-CorteLote[0].x) * Zoom
	var destHeight = (CorteLote[1].y-CorteLote[0].y) * Zoom
	var destX = 0;
	var destY = 0;

	cxtDest.drawImage(imgOrig, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
	
	if (PosicaoLote.length>1) {
		cxtDest.lineWidth = 2;
		cxtDest.beginPath()
		for (i in PosicaoLote) {
			if (i==0) {
				cxtDest.moveTo((PosicaoLote[i].x-CorteLote[0].x)* Zoom, (PosicaoLote[i].y-CorteLote[0].y)* Zoom);
			} else {
				cxtDest.lineTo((PosicaoLote[i].x-CorteLote[0].x)* Zoom, (PosicaoLote[i].y-CorteLote[0].y)* Zoom);
			}	
		}
		cxtDest.lineTo((PosicaoLote[0].x-CorteLote[0].x)* Zoom, (PosicaoLote[0].y-CorteLote[0].y)* Zoom);
		cxtDest.lineJoin = 'round';
		cxtDest.strokeStyle = '#0000ff'
		cxtDest.stroke();
	}
	
	
	if (confirm("Gravar Imagem?") == true) {
		debugger
		Img=cDest.toDataURL()
		currentContainer.find("[name=LoteImgLen]").val(Img.length)
		var Sql = "Update Lote Set LoteImg='" + Img + "' where CodigoLote=0" + currentContainer.find("input[name=CodigoLote]").val()
		Geeks.ERP.Core.Connection.ExecuteSQL(Sql,false,true,function(){
			$.jGrowl("Imagem lote gravado com sucesso!");
		});	
	}	
	
	//currentContainer.find("[name=LoteImg]").val(cDest.toDataURL()) 
	
}

// ***** Botão Ver Lote
currentContainer.find("[name=btn_VerLote]").click(function (){ VerLote() });

// ***** Botão Imrimir Lote
currentContainer.find("[name=btn_ImprimirLote]").click(function (){ 
	window.open("http://erp.b15.online/Reports/OitoBrasil/impressao.html?CodigoEmpreendimento=2&Quadra=".concat($("[name=Quadra]").val(),"&Lote=",$("[name=Lote]").val(),"&Img=lote"));
});

// ***** Botão Ver Planta
currentContainer.find("[name=btn_VerPlanta]").click(function (){ redraw()	})

Atu = function(Codigo) {
	currentContainer.data("GeeksForm").DataSource.Fill("CodigoLote = 0" + Codigo);
	
	PosicaoLote = currentContainer.find("input[name=PosicaoLote]").val()
	if (PosicaoLote!="") {PosicaoLote = JSON.parse(PosicaoLote)}
	if (typeof(PosicaoLote) != 'object') {PosicaoLote = [] }
	
	CorteLote = currentContainer.find("input[name=CorteLote]").val()
	if (CorteLote!="") {CorteLote = JSON.parse(CorteLote)}
	if (typeof(CorteLote) != 'object') {CorteLote = [] }
	
	PosicaoQuadra = currentContainer.find("input[name=PosicaoQuadra]").val()
	if (PosicaoQuadra!="") {PosicaoQuadra = JSON.parse(PosicaoQuadra)}
	if (typeof(PosicaoQuadra) != 'object') {PosicaoQuadra = [] }
	
	$("#Zoom").value = Zoom * 100
	//oZoom.change() //
	redraw()
}

imgOrig.onload = function() {
	
	canvas.width = imgOrig.width
	canvas.height = imgOrig.height
	
	Atu(1)

};


function aProcessaTodasImagens() {
	debugger
	var rs = Geeks.ERP.Core.Connection.ExecuteSQL("Select CodigoLote from lote order by CodigoLote").Records;	
	for (i in rs) {
		Atu(rs[i].CodigoLote)
		VerLote()
		alert(rs[i].CodigoLote)
		VerQuadra()
		alert(rs[i].CodigoLote)
	}
}

