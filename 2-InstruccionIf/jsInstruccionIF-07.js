function mostrar()
{
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if(edad < 18 && estadoCivil != "Soltero")
	{
		alert("usted es muy pequenio para no ser soltero");
	}
}
/* function mostrar()
{
	let edadingresada;
	let mensaje;
	let par;
	
	edadingresada = document.getElementById("txtIdEdad").value;
	edadingresada = parseInt(edadingresada);
	
	par = edadingresada % 2;
	
	if(edadingresada < 13)
	{
		mensaje = "feliz dia";
	}
	else
	{
		if(edadingresada > 12 && edadingresada < 18 )
		{
			mensaje = "usted es adolescente";
		}
		if(edadingresada == 17)
		{
			mensaje = mensaje + " ultimo año!!";
		}
		else
		{
			if(edadingresada > 17)
			{
				mensaje = "tenes edad de laburar";
			}
			if(edadingresada == 33)
			{
				mensaje = mensaje + " como cristo";
			}
			if(edadingresada > 59)
			{
				mensaje = mensaje + " a jubilarse";
			}
			if(edadingresada == 88)
			{
				mensaje = mensaje + " lindo numero";
			}
		}
	}
	if(par == 0)
	{
		mensaje = mensaje + " sos par!!";
	}
	
	alert(mensaje);
}*/