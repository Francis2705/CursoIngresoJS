//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
//o adolescente (entre 13 y 17 años) o niño (entre 5 a 13 años) o es bebe(menor a 4 años)
//o si supera los 60 años de edad es anciano
//tambien la edad ingresada 
function mostrar()
{
	let edadingresada;

	edadingresada=document.getElementById("txtIdEdad").value;
	edadingresada=parseInt(edadingresada);

	alert("Usted tiene "+ edadingresada +" años");

	if(edadingresada > 59)
	{
		alert("y es un anciano");
	}
	else
	{
		if(edadingresada > 17)
		{
			alert("y es adulto");
		}
		else
		{
			if(edadingresada > 12 && edadingresada < 18)
			{
				alert("y es un adolescente");
			}
			else
			{
				if(edadingresada > 4 && edadingresada < 13)
				{
					alert("y es un niño");
				}
				else
				{
					alert("y es un bebé");
				}
			}
		}
	}
}