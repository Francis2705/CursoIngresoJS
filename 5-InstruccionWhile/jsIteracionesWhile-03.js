/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese la clave");

	while(clave != "utn750")
	{
		alert("La clave es incorrecta");
		clave = prompt("Ingrese la clave");
	}
	console.log("La clave es correcta");
}