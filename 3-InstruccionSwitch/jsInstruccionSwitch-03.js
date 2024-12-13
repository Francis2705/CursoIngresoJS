function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días";
		break;
		default:
			mensaje = "Este mes tiene 30 o más días";
		break;
	}
	
	alert(mensaje);
}