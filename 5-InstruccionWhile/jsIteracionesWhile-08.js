/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let num;
	let respuesta;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 1;
	let flagNegativos = false;

	do
	{
		num = prompt("ingrese un numero");
		num = parseFloat(num);

		if(num >= 0)
		{
			acumuladorPositivos += num;
		}
		else
		{
			flagNegativos = true;
			acumuladorNegativos *= num;
		}

		respuesta = prompt("quiere ingresar mas numeros?");

	} while(respuesta == "si");

	if(flagNegativos == false)
	{
		acumuladorNegativos = 0;
	}

	document.getElementById("txtIdSuma").value = acumuladorPositivos;
	document.getElementById("txtIdProducto").value = acumuladorNegativos;
}

/* let numeroIngresado;
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
	document.getElementById("txtIdProducto").value = acumuladorNegativos; */