function mostrar()
{
	const PRECIOINICIAL = 15000;
	let estacion;
	let destino;
	let porcentaje;
	let precioFinal;
	let mensaje;
	let mensajeFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	mensaje = "El precio final es $";

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 20;
				break;
				case "Mar del plata":
					porcentaje = -20;
				break;
				default:
					porcentaje = -10;
				break;
			}
		break
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = -20;
				break;
				case "Mar del plata":
					porcentaje = 20;
				break;
				default:
					porcentaje = 10;
				break;
			}
		break
		default:
			switch(destino)
			{
				case "Cordoba":
					porcentaje = 0;
				break;
				default:
					porcentaje = 10;
				break;
			}
		break;
	}
	
	descuentoAumento = PRECIOINICIAL * porcentaje / 100;
	
	precioFinal = PRECIOINICIAL + descuentoAumento;
	
	mensajeFinal = mensaje + precioFinal.toFixed(2);

	alert(mensajeFinal);
}