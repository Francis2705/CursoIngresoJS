function mostrar()
{
	let num;
	let contadorPar = 0;

	num = parseInt(prompt("ingrese un numero"))

	for(let i = 1; i <= num; i++)
	{
		if(i % 2 == 0)
		{
			contadorPar ++;
			console.log(i);
		}

	}

	console.log("pares encontrados " + contadorPar);
}//FIN DE LA FUNCIÓN