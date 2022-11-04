function mostrar()
{
	let edadingresada;

	edadingresada=document.getElementById("txtIdEdad").value;
	edadingresada=parseInt(edadingresada);

	if(edadingresada<=12 || edadingresada>=18)
	{

		alert("Usted no es adolescente");

	}
}