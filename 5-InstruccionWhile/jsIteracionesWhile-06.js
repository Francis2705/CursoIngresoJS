function mostrar()
{
	let contador = 0;
	let acumulador = 0; //acumulador siempre tiene que tener un 0, ya que es neutro
	let numeroIngresado;

	while(contador < 5)
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseFloat(numeroIngresado);

		//el acumulador funciona como si fuese la suma, algo similar al caso de abajo que está sin while
		acumulador += numeroIngresado;
		//Hago todo lo que quiero, y al final pongo el contador
		contador ++;
	}
	
	//lo que no se repite y se muestra una sola vez, va afuera del while
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;
}
/* function mostrar()
{
	let num1;
	let num2;
	let num3;
	let num4;
	let num5;
	let suma;
	let promedio;

	num1 = prompt("Ingrese el primer número");
	num1 = parseFloat(num1);
	num2 = prompt("Ingrese el segundo número");
	num2 = parseFloat(num2);
	num3 = prompt("Ingrese el tercer número");
	num3 = parseFloat(num3);
	num4 = prompt("Ingrese el cuarto número");
	num4 = parseFloat(num4);
	num5 = prompt("Ingrese el quinto número");
	num5 = parseFloat(num5);

	suma = num1 + num2 + num3 + num4 + num5;
	promedio = suma / 5;
	
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
} */