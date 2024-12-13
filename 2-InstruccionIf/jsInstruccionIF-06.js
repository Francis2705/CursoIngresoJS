//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
//o adolescente (entre 13 y 17 años) o niño (entre 5 a 13 años) o es bebe(menor a 4 años)
//o si supera los 60 años de edad es anciano
//tambien la edad ingresada 
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 5)
	{
		alert("usted es un bebe");
	}
	else
	{
		if(edad > 4 && edad < 13)
		{
			alert("usted es un nino");
		}
		else
		{
			if(edad > 12 && edad < 18)
			{
				alert("usted es un adolescente");
			}
			else
			{
				if(edad > 17 && edad < 61)
				{
					alert("usted es un adulto");
				}
				else
				{
					alert("usted es un anciano");
				}
			}
		}
	}

	alert("la edad ingresada es " + edad);
}