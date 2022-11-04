/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	var mensaje;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	
	mensaje="Usted se llama " + nombre + " y tiene " + edad + " años";

	//el + concatena y suma (en operaciones matemáticas), y tengo q dejar espacios extras cuando escribo entre comillas
	alert(mensaje);
}
//txtIdNombre
//txtIdEdad