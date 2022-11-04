/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese un género válido");

	while(sexo != "f" && sexo != "m")
	{
		alert("El sexo ingresado no es válido");

		sexo = prompt("Ingrese un género válido");
	}

	document.getElementById("txtIdSexo").value = sexo;
}
//Recién cuando la condición sea falsa, va a salir del while