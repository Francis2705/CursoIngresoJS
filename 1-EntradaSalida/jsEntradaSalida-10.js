/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe1;
	var descuento;
	var total;
	var porcentaje;

	porcentaje=25;

	importe1=document.getElementById("txtIdImporte").value;

	importe1=parseFloat(importe1);
	
	descuento=importe1 * porcentaje/100;
	
	total= importe1-descuento;

	document.getElementById("txtIdResultado").value=total;
}