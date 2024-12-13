/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;
	let repetir;

	/*el do while, me sirve para estos casos, donde no tendría que inicializar la variable para que el flujo
	de datos entre en el while. El do while lo que hace es que el flujo siga lineal, entre en el do al menos una vez,
	y mientras (en este caso) la variable repetir sigan siendo "Si", entonces va a volver a repetir el código.
	Cuando deje de tener ese valor, va a salir del ciclo */
	do
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseFloat(numeroIngresado);

		acumulador += numeroIngresado;
		contador ++;

		/*como recién aca le doy un valor a repetir, abajo se va a verificar si se ingresó si u otra cosa*/
		repetir = prompt("Ingrese 'Si' en caso de que quiera ingresar otro número o ingrese 'No' en caso contrario");

	} while(repetir == "Si"); //cierra con punto y coma, es la única estructura de programación que cierra así
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;
}
/* function mostrar()
{
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;
	let repetir = 'Si';

	while(repetir == "Si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseFloat(numeroIngresado);

		acumulador += numeroIngresado;
		contador ++;

		repetir = prompt("Ingrese 'Si' en caso de que quiera ingresar otro número o ingrese 'No' en caso contrario");
	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;
} */