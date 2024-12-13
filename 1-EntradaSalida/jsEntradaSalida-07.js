/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	let num1;
	let num2;
	let resultado;
	let mensaje;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 + num2;
	mensaje = "La suma es " + resultado;

	alert(mensaje);
}

function restar()
{
	let num1;
	let num2;
	let resultado;
	let mensaje;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 - num2;
	mensaje = "La resta es " + resultado;

	alert(mensaje);
}

function multiplicar()
{ 
	let num1;
	let num2;
	let resultado;
	let mensaje;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 * num2;
	mensaje = "La multiplicacion es " + resultado;

	alert(mensaje);
}

function dividir()
{
	let num1;
	let num2;
	let resultado;
	let mensaje;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	resultado = num1 / num2;
	mensaje = "La division es " + resultado;

	alert(mensaje);
}
/*Siempre que tengo más de una función, tengo que declarar las variables,
por más que sean las mismas.*/
//Hay que usar let en vez de var
/*El orden de signos en cuanto a prioridad es (lo mismo que en la vida real):
1 Paréntesis
2 Multiplicación, división y resto (módulo)
3 Suma y resta*/