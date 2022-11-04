/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;

	num = prompt("Ingrese un número entre el 0 y el 9 inclusive");
	num = parseInt(num);

	while(num < 0 || num > 9)
	{
		alert("El número ingresado no está dentro del rango solicitado");

		num = prompt("Ingrese un número entre el 0 y el 9 inclusive");
		num = parseInt(num);
	}

	document.getElementById("txtIdNumero").value = num;
}