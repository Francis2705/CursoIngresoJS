function mostrar()
{
	let edadingresada;

	edadingresada=document.getElementById("txtIdEdad").value;
	edadingresada=parseInt(edadingresada);

	/*La funcionalidad del if, es decir si se va a ejecutar el renglón de abajo (o un bloque)*/
	/*Se puede poner un if, seguido de otro if, eso significa como si fuera un "y"*/
	/*Cualquier cosa que no sea 0, el if no lo detecta, sino detecta un 0, entra al else directamente*/
	
	/* Operadores relacionales
	== compara por igualdad
	> compara si es mayor o igual que
	< compara si es menor o igual que
	>= compara si es mayor o igual que
	<= compara si es menor o igual que
	
	   Operadores lógicos
	&& "y"
	|| "o"
	! "distinto de"
	*/
	if(edadingresada == 15)
	{
		alert("Niña bonita");
	}
 
	alert("Gracias por ingresar su edad");

}