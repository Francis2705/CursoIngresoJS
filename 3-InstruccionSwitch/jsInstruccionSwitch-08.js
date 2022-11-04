function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Cataratas":
		case "Mar del plata":
			mensaje = "En este destino hace calor";
		break;
		default:
			mensaje = "En este destino hace frío";
		break;
	}
	alert(mensaje);
}