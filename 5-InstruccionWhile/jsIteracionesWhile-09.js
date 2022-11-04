/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let vuelta;
	let respuesta;
	
	vuelta = 0;
	respuesta = 'Si';
	
	while(respuesta == "Si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseFloat(numeroIngresado);

		if(vuelta == 0)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			vuelta = 1;
		}
		else
		{
			//Va a preguntar los dos if y después va a seguir con el flujo de datos, pero sí o sí los va a cetear
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado
			}
			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado
			}
		}

		respuesta = prompt("¿Desea continuar?");
	}
	
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}