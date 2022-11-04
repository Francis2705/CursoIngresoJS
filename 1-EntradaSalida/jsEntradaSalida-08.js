/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
	var num2;
	var total;
	var mensaje;

	num1=document.getElementById("txtIdNumeroDividendo").value;
	num2=document.getElementById("txtIdNumeroDivisor").value;
	
	num1=parseInt(num1);
	num2=parseInt(num2);
	
	total= num1%num2;

	mensaje="El resto es " + total;
	
	alert(mensaje);
}