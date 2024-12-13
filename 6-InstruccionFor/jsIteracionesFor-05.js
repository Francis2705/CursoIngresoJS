function mostrar()
{
	let num;

	for(; ;) //bucle infinito
	{
		num = prompt("ingrese un numero");
		num = parseInt(num);

		if(num == 9)
		{
			break;
		}

		console.log(num)
	}
	
}//FIN DE LA FUNCIÓN