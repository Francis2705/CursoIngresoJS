function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Cataratas":
		case "Mar del plata":
			mensaje = "calor";
		break;
		default:
			mensaje = "frio";
		break;
	}
	alert(mensaje);
}