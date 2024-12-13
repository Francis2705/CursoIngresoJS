/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	let mensaje;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	mensaje = "La suma es ";
	resultado = num1 + num2;

	alert(mensaje + resultado);
}
/*  function sumar()
{
	let dolaroficial;
	let dolarblue;
	let diferencia;
	let porcentaje;
	let total;

	dolaroficial = document.getElementById("txtIdNumeroUno").value;
	dolarblue = document.getElementById("txtIdNumeroDos").value;

	dolaroficial = parseFloat(dolaroficial);
	dolarblue = parseFloat(dolarblue);

	diferencia = dolaroficial - dolarblue;
	porcentaje = (diferencia / dolaroficial * 100);
	porcentaje = Math.abs(porcentaje);
	porcentaje = porcentaje.toFixed(2);

	alert ("La diferencia de porcentaje es " + porcentaje + " %");
} */