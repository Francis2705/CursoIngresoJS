/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let contador;

	contador = prompt("Ingrese la contraseña");

	while(contador != "utn750")
	{
		alert("La contraseña es incorrecta");

		contador = prompt("Ingrese la contraseña");
	}
	
	alert("La contraseña es correcta");
}