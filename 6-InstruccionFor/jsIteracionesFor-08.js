function mostrar()
{
	let num;
	let contadorDivisores = 0;

	num = parseInt(prompt("ingrese un numero"))

	for(let i = 1; i <= num; i++)
	{
		if(num % i == 0)
		{
			contadorDivisores ++; 
		}
	}

	if(contadorDivisores == 2) //q sea igual a dos ya q el numero primo solo es divisible por el 1 y por si mismo
	{
		console.log(num + " es primo");
	}
	else
	{
		console.log("no es primo");
	}
}//FIN DE LA FUNCIÓN