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
			console.log(i);
		}
	}

	console.log("divisores encontrados " + contadorDivisores)
}//FIN DE LA FUNCIÓN