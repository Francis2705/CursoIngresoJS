/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let acumuladorPositivos;
	let acumuladorNegativos;
	let respuesta = "Si";
	let contadorNegativos;

	acumuladorNegativos = 1;
	acumuladorPositivos = 0;
	contadorNegativos = 0;

	while(respuesta == "Si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseFloat(numeroIngresado);

		if(numeroIngresado < 0)
		{
			acumuladorNegativos *= numeroIngresado;
			contadorNegativos++;
		}
		else
		{
			acumuladorPositivos += numeroIngresado;
		}

		respuesta = prompt("Ingrese 'Si' en caso de que quiera ingresar otro número o ingrese 'No' en caso contrario");
	}
	if (contadorNegativos == 0)
	{
		acumuladorNegativos = 0;
	}
	
	document.getElementById("txtIdSuma").value = acumuladorPositivos;
	document.getElementById("txtIdProducto").value = acumuladorNegativos;
}