/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("ingrese un sexo");

	while(sexo != "f" && sexo != "m")
	{
		sexo = prompt("por favor ingrese un sexo valido");
	}

	if(sexo == "f")
	{
		sexo = "femenino";
	}
	else
	{
		sexo = "masculino";
	}

	document.getElementById("txtIdSexo").value = sexo;
}
//Recién cuando la condición sea falsa, va a salir del while