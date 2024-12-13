function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("usted es mayor de edad");
	}
	else
	{
		alert("usted es menor de edad");
	}

}