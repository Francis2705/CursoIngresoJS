/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */

function mostrar()
{
	let mes;
	
	mes = document.getElementById("txtIdMes").value;

	/* En el caso de que la variable mes tome tal cosa,
	hago tal cosa. En el caso en que tome otro dato, hace otra cosa.
	Eso es switch y solamente compara por igualdad, */
	switch(mes)
	{
		/* case es el caso, "en el caso de que pase tal cosa..." o
		"en el caso de que la variable mes tome el valor de, por ejemplo, enero, pasa tal cosa..."
		y el break seria como la llave de cierre del case, ya que este
		"rompe" con el flujo de esta lógica*/
		/*no van condiciones en el switch, solamente la variable*/
		case "Enero":

			alert("que comiences bien el año!!!");

		break;
		case "Marzo":

			alert("a clases!!!");
			
		break;
		case "Julio":

			alert("se vienen las vacaciones!!!");
			
		break;
		case "Diciembre":

			alert("Felices fiesta!!!");
			
		break;
	}
}
/*function mostrar()
{
	let mes;
	
	mes = document.getElementById("txtIdMes").value;
	
	if (mes == "Enero")
	{
		alert("que comiences bien el año!!!");
	}
	else
	{
		if (mes == "Marzo")
		{
			alert("a clases !!!");
		}
		else
		{
			if (mes == "Julio")
			{
				alert("se vienen las vacaciones!!!");
			}
			else
			{
				if (mes == "Diciembre")
				{
					alert("Felices fiesta!!!")
				}
			}
		}
	}
} */