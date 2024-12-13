/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;

	num = prompt("ingrese un numero en 0 y 9 inclusive");
	num = parseInt(num);

	while(num < 0 || num > 9)
	{
		num = prompt("numero erroneo, por favor ingrese un numero en 0 y 9 inclusive");
		num = parseInt(num);
	}

	document.getElementById("txtIdNumero").value = num;
}