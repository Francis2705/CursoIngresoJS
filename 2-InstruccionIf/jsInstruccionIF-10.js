function mostrar()
{
	let random;
	let mensaje;
	
	random=Math.floor(Math.random() * 10) + 1;
	random=parseInt(random);

	alert(random);

	if(random == 9 || random == 10)
	{
		mensaje = "Excelente";
	}
	else
	{
		if(random > 3)
		{
			mensaje = "Aprobó";
		}
		else
		{
			mensaje = "Vamos, la próxima se puede";
		}
	}
	alert(mensaje);
}