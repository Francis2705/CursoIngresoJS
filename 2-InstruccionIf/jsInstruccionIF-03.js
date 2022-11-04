function mostrar()
{
	let edadingresada;

	edadingresada=document.getElementById("txtIdEdad").value;
	edadingresada=parseInt(edadingresada);

	if(edadingresada>17)
	{

		alert("Usted es mayor de edad");

	}
	else
	{

		alert("Usted es menor de edad");

	}
}