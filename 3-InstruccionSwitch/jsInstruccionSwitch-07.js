function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Cataratas":
			mensaje = "Este destino se encuentra en el norte del país";
		break;
		case "Mar del plata":
			mensaje = "Este destino se encuentra en el este del país";
		break;
		default:
			mensaje = "Este destino se encuentra al sur del país";
		break;
	}
	alert(mensaje);
}