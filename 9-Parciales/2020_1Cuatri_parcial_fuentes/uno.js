/*
1)De 6 personas que ingresan a la Administración
Nacional de la Seguridad Social (Anses) pedir y validar los siguientes datos.

nombre , sueldo mensual(entre 0 y 200000), cuantos
días a la semana trabaja(entre 1 y 7, limites incluidos), sexo(f o m) y si está
en relación de dependencia o no:

a)Informar la cantidad de personas en relación
de dependencia que cobran más de 60000 al mes y la cantidad de personas que no
están en relación de dependencia que cobran menos de 100000.

b)El sueldo promedio mensual en total

c)El hombre que trabaja más días

y la mujer que
trabaja menos días a la semana.
*/
/* function mostrar()
{
	let nombre;
	let sueldoMensual;
	let diasTrabajo;
	let sexo;
	let relacionDependencia;
	let promedio;
	let diasMax;
	let hombreMax;
	let diasMin;
	let mujerMin;
	let vueltas = 0;
	let contadorSiRelacionDependencia = 0;
	let contadorNoRelacionDependencia = 0;
	let acumuladorSueldo = 0;
	let flagHombre = false;
	let flagMujer = false;

	while(vueltas < 6)
	{
		nombre = prompt("Ingrese su nombre");

		sueldoMensual = prompt("Ingrese su sueldo mensual");
		sueldoMensual = parseFloat(sueldoMensual);
		while(sueldoMensual < 0 || sueldoMensual > 200000)
		{
			sueldoMensual = prompt("Error. Ingrese su sueldo mensual, entre 0 y 200.000");
			sueldoMensual = parseFloat(sueldoMensual);
		}

		diasTrabajo = prompt("Días a la semana que trabaja");
		diasTrabajo = parseInt(diasTrabajo);
		while(diasTrabajo < 1 || diasTrabajo > 7)
		{
			diasTrabajo = prompt("Error. Ingrese los días a la semana que trabaja, entre 1 y 7");
			diasTrabajo = parseInt(diasTrabajo);
		}

		sexo = prompt("Ingrese su sexo, siendo 'f' para femenino o 'm' para masculino");
		while(sexo != "f" && sexo != "m" )
		{
			sexo = prompt("Error. Ingrese su sexo, siendo 'f' para femenino o 'm' para masculino");
		}

		relacionDependencia = prompt("¿Está en relación de dependencia?");
		while(relacionDependencia != "si" && relacionDependencia != "no")
		{
			relacionDependencia = prompt("Error. ¿Está en relación de dependencia? Conteste sí o no por favor");
		}

		if(relacionDependencia == "si") //pregunto primero por si es si la relacion de dependencia y despues por si es mayor a 60000
		{
			if(sueldoMensual > 60000)
			{
				contadorSiRelacionDependencia ++;
			}
		}
		else
		{
			//no vuelvo a pregunar por relacion de dependencia porque ya se que sino es si, es no
			if(sueldoMensual < 100000)
			{
				contadorNoRelacionDependencia ++;
			}
		}

		if(sexo == "m") // primero comparo por el sexo y despues por la bandera
		{
			if(!flagHombre)
			{
				hombreMax = nombre;
				diasMax = diasTrabajo;
				flagHombre = true;
			}
			else
			{
				if(diasTrabajo > diasMax)
				{
					hombreMax = nombre;
					diasMax = diasTrabajo;
				}
			}
		}
		else // sino es hombre, es mujer, asi que va un else
		{
			if(!flagMujer)
			{
				mujerMin = nombre;
				diasMin = diasTrabajo;
				flagMujer = true;
			}		
			else
			{
				if(diasTrabajo < diasMin)
				{
					mujerMin = nombre;
					diasMin = diasTrabajo;
				}
			}
		}
		acumuladorSueldo += sueldoMensual;
		vueltas ++;
	}

	promedio = acumuladorSueldo / vueltas;

	console.log("La cantidad de personas en relación de dependencia que cobran más de 60000 al mes es " + contadorSiRelacionDependencia);
	console.log("La cantidad de personas que no están en relación de dependencia que cobran menos de 100000 al mes es " + contadorNoRelacionDependencia);
	console.log("El sueldo promedio mensual en total es " + promedio);
	console.log("El hombre que trabaja mas dias es " + hombreMax + " con un total de " + diasMax + " días");
	console.log("La mujer que menos trabaja es " + mujerMin + " con un total de " + diasMin + " días");
} */

function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let precioAlcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let tipoMasUnidades;
	let promedioTipoMasUnidades;
	let acumuladorAlcohol = 0;
	let acumuladorBarbijo = 0;
	let acumuladorJabon = 0;
	let contadorAlcohol = 0;
	let contadorBarbijo = 0;
	let contadorJabon = 0;
	let flagAlcohol = false;

	for(let i = 0; i < 5; i ++)
	{
		tipo = prompt("ingrese un tipo de producto");
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
		{
			tipo = prompt("error, ingrese un tipo de producto");
		}
		precio = parseFloat(prompt("ingrese el precio"));
		while(precio < 100 || precio > 300)
		{
			precio = parseFloat(prompt("error, ingrese el precio"));
		}
		cantidad = parseInt(prompt("ingrese la cantidad"));
		while(cantidad < 0 || cantidad > 1000)
		{
			cantidad = parseInt(prompt("error, ingrese la cantidad"));
		}
		marca = prompt("ingrese la marca");
		fabricante = prompt("ingrese el fabricante");

		switch(tipo)
		{
			case "alcohol":
				acumuladorAlcohol += cantidad;
				contadorAlcohol ++;
				if(flagAlcohol == false)
				{
					precioAlcoholBarato = precio;
					cantidadAlcoholBarato = cantidad;
					fabricanteAlcoholBarato = fabricante;
					flagAlcohol = true;
				}
				else
				{
					if(precioAlcoholBarato > precio)
					{
						precioAlcoholBarato = precio;
						cantidadAlcoholBarato = cantidad;
						fabricanteAlcoholBarato = fabricante;
					}
				}
			break;
			case "jabon":
				acumuladorJabon += cantidad;
				contadorJabon ++;
			break;
			case "barbijo":
				acumuladorBarbijo += cantidad;
				contadorBarbijo ++;
			break;
		}
	}

	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{
		tipoMasUnidades = "alcohol";
		promedioTipoMasUnidades = acumuladorAlcohol / contadorAlcohol;
	}
	else
	{
		if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol)
		{
			tipoMasUnidades = "jabon";
			promedioTipoMasUnidades = acumuladorJabon / contadorJabon;
		}
		else
		{
			tipoMasUnidades = "barbijo";
			promedioTipoMasUnidades = acumuladorBarbijo / contadorBarbijo;
		}
	}

	if(flagAlcohol == true)
	{
		console.log("la cantidad del alcohol mas barato es " + cantidadAlcoholBarato + " y el fabricante es " + fabricanteAlcoholBarato);
	}
	console.log("el tipo con mas unidades es " + tipoMasUnidades + " y el promedio por compra es " + promedioTipoMasUnidades.toFixed(2));
	console.log("en total hay " + acumuladorJabon + " jabones");
}
/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

/* function mostrar()
{
	let contadorPersonas;
	let nombre;
	let latidosPorMinuto;
	let peso;
	let sexo;
	let vacunaSara;
	let contadorVacunados;
	let contadorNoVacunados;
	let acumuladorPeso;
	let promedioPeso;
	let nombreHombreMinimo;
	let latidosMinimo;
	let nombreMujerMax;
	let latidosMaximo;
	let flagHombre;
	let flagMujer;

	flagHombre = false;
	flagMujer = false;
	contadorPersonas = 0;
	contadorVacunados = 0;
	contadorNoVacunados = 0;
	acumuladorPeso = 0;


	while(contadorPersonas < 3)
	{
		nombre = prompt("Ingrese el nombre");
		
		latidosPorMinuto = prompt("Ingrese los latidos por minuto");
		latidosPorMinuto = parseInt(latidosPorMinuto);

		while(latidosPorMinuto < 0 || latidosPorMinuto > 200)
		{
			latidosPorMinuto = prompt("Los latidos ingresados no son validos. Ingrese un numero entre 0 y 200");
			latidosPorMinuto = parseInt(latidosPorMinuto);
		}

		peso = prompt("Ingrese el peso");
		peso = parseFloat(peso);

		while(peso < 0 || peso > 300)
		{
			peso = prompt("El peso ingresado no es valido. Ingrese un numero entre 0 y 300");
			peso = parseFloat(peso);
		}

		sexo = prompt("Ingrese el sexo");

		while(sexo != "f" && sexo != "m" && sexo != "no binario")
		{
			sexo = prompt("El sexo ingresado no es valido. Ingrese 'f' o 'm' o 'no binario'");
		}

		vacunaSara = prompt("esta vacunado contra el sarampion?");

		while(vacunaSara != "si" && vacunaSara != "no")
		{
			vacunaSara = prompt("Ingrese 'si' o 'no' por favor");
		}

		switch(vacunaSara)
		{
			case "si":
				contadorVacunados++
			break;
			default:
				contadorNoVacunados++
			break;
		}

		if(sexo == "m")
		{
			if(!flagHombre)
			{
				latidosMinimo = latidosPorMinuto;
				nombreHombreMinimo = nombre;
				flagHombre = true;
			}
			else
			{
				if(latidosPorMinuto < latidosMinimo)
				{
					latidosMinimo = latidosPorMinuto;
					nombreHombreMinimo = nombre;
				}
			}
		}
		else
		{
			if(sexo == "f")
			{
				if(!flagMujer)
				{
					nombreMujerMax = nombre;
					latidosMaximo = latidosPorMinuto;
					flagMujer = true;
				}
				else
				{
					if(latidosPorMinuto > latidosMaximo)
					{
						nombreMujerMax = nombre;
						latidosMaximo = latidosPorMinuto;
					}
				}
			}
		}

		acumuladorPeso += peso;
		contadorPersonas++;
	}

	promedioPeso = acumuladorPeso / contadorPersonas;

	console.log("La cantidad de personas vacunadas son " + contadorVacunados + " y los no vacunados son " + contadorNoVacunados);
	console.log("El peso promedio en total es " + promedioPeso);
	console.log("El hombre con menos latidos por minuto es " + nombreHombreMinimo + " y la mujer con mas latidos por minuto es " + nombreMujerMax);
} */

/*De 5 
personas que ingresan al hospital se deben tomar y validar los
siguientes datos.

nombre , latidos por minuto (0 y 200), peso (0 y 300), sexo o ("f" o "m" o "no binario")
y si estávacunado o no contra el sarampión:

a)informar la cantidad de personas vacunadas y
no vacunadas.

b)el peso promedio en total

c)el hombre con menos latidos por minuto y la mujer con más latidos por minuto

pedir datos por prompt y mostrar por
document.write o console.log
*/