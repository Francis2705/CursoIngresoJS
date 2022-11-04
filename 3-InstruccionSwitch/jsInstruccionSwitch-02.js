function mostrar()
{
	let mes; 
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno";
		break;
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frío";
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frío ahora calor";
		break;
	}
	alert(mensaje);
}