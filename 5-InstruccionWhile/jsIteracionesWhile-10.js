//solo se inicializan los contadores y acumuladores
function mostrar()
{
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contadorNegativos;
	let contadorPositivos;
	let contadorDeCeros;
	let par;
	let contadorDeNumerosPares;
	let promedioDeNegativos;
	let promedioDePositivos;
	let diferencia;

	respuesta = "Si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorDeCeros = 0;
	contadorDeNumerosPares = 0;

	while(respuesta == "Si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseFloat(numeroIngresado);

		par = numeroIngresado % 2;
		//no hace falta crear una variable, mejor hacer la cuenta directamente adentro (en la condición del if)
		if(par == 0)
		{
			contadorDeNumerosPares++;
		}
		if(numeroIngresado < 0)
		{
			sumaNegativos += numeroIngresado;
			contadorNegativos++;
		}
		else
		{
			if (numeroIngresado == 0)
			{
				contadorDeCeros++;
			}
			else
			{
				sumaPositivos += numeroIngresado;
				contadorPositivos++;
			}
		}

		respuesta = prompt("Ingrese 'Si' en caso de que quiera ingresar otro número o ingrese 'No' en caso contrario");
	}

	promedioDeNegativos = sumaNegativos / contadorNegativos;
	promedioDePositivos = sumaPositivos / contadorPositivos;
	diferencia = sumaPositivos - sumaNegativos;

	console.log("La suma de los números negativos es : " + sumaNegativos);
	console.log("La suma de los números positivos es : " + sumaPositivos);
	console.log("La cantidad de los números negativos es : " + contadorNegativos);
	console.log("La cantidad de los números positivos es : " + contadorPositivos);
	console.log("La cantidad de ceros es : " + contadorDeCeros);
	console.log("La cantidad de números pares es : " + contadorDeNumerosPares);
	console.log("El promedio de los números negativos es  : " + promedioDeNegativos);
	console.log("El promedio de los números positivos es  : " + promedioDePositivos);
	console.log("La diferencia entre los números positivos y los negativos es : " + diferencia);
}