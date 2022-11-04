/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe1;
	var aumento;
	var total;
	var porcentaje;

	porcentaje=10;

	importe1=document.getElementById("txtIdSueldo").value;

	importe1=parseFloat(importe1);

	aumento=importe1 * porcentaje/100;
	
	total= importe1+aumento;

	document.getElementById("txtIdResultado").value=total;


}
