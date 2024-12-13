function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "se encuentra en el sur";
		break;
		case "Cataratas":
			mensaje = "se encuentra en el norte";
		break;
		default:
			mensaje = "se encuentra en el este";
		break;
	}
	alert(mensaje);
}
//txtIdDestino