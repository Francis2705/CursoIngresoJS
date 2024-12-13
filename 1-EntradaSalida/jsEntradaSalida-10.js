/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe1;
	let descuento;
	let porcentaje = 25;
	let resultado;

	importe1 = document.getElementById("txtIdImporte").value;
	importe1 = parseFloat(importe1);

	descuento = porcentaje/100;

	resultado = importe1 - importe1*descuento;

	document.getElementById("txtIdResultado").value = resultado;
}