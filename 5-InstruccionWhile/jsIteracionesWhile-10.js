//solo se inicializan los contadores y acumuladores
/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre positivos y negativos, (positvos-negativos).*/
function mostrar()
{
	let num;
	let respuesta;
	let acumuladorNegativos = 0;
	let acumuladorPositivos = 0;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let restaPositivosNegativos;

	do
	{
		num = prompt("ingrese un numero");
		num = parseFloat(num);

		if(num == 0)
		{
			contadorCeros ++;
		}
		else
		{
			if(num > 0)
			{
				acumuladorPositivos += num;
				contadorPositivos ++;
			}
			else
			{
				acumuladorNegativos += num;
				contadorNegativos ++;
			}
		}

		if(num % 2 == 0)
		{
			contadorPares ++;
		}

		respuesta = prompt("quiere ingresar mas numeros?");
	} while(respuesta == "si");

	promedioNegativos = acumuladorNegativos / contadorNegativos;
	promedioPositivos = acumuladorPositivos / contadorPositivos;
	restaPositivosNegativos = acumuladorPositivos - acumuladorNegativos;

	console.log("la suma de los negativos es " + acumuladorNegativos);
	console.log("la suma de los positivos es " + acumuladorPositivos);
	console.log("la cantidad de positivos es " + contadorPositivos);
	console.log("la cantidad de negativos es " + contadorNegativos);
	console.log("la cantidad de ceros es " + contadorCeros);
	console.log("la cantidad de numeros pares es " + contadorPares);
	console.log("el promedio de los numeros positivos es " + promedioPositivos);
	console.log("el promedio de los numeros negativos es " + promedioNegativos);
	console.log("la diferencia entre los positivos y negativos es " + restaPositivosNegativos);
}
/* let respuesta;
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
	console.log("La diferencia entre los números positivos y los negativos es : " + diferencia); */