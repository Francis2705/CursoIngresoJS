/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let num1;
	let num2;
	let resto;
	let mensaje;

	num1 = document.getElementById("txtIdNumeroDividendo").value;
	num2 = document.getElementById("txtIdNumeroDivisor").value;

	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	resto = num1%num2;
	mensaje = "El resto es " + resto;

	alert(mensaje);
}