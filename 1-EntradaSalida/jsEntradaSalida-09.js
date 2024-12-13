/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe1;
	let aumento;
	let porcentaje = 10;
	let resultado;

	importe1 = document.getElementById("txtIdSueldo").value;
	importe1 = parseFloat(importe1);

	aumento = porcentaje/100;

	resultado = importe1 + importe1*aumento;

	document.getElementById("txtIdResultado").value = resultado;
}
