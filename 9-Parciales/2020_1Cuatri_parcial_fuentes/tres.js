/*
3)Nos ingresan una cantidad indeterminada de vuelos,
validando los datos ingresados:

nombre del pasajero ,aerolinea ( “Aerolineas
Argentinas”, “JetSmart” o “FlyBondi”),destino(“Bariloche”, “Cataratas”, “Salta”)
cantidad de horas de vuelo (entre 0 y 8).

Informar:
a) La aerolinea más elegida.
b) El nombre del pasajero que más horas viajó.
c) El promedio de horas de vuelo a Bariloche.
*/
function mostrar()
{
	let nombre;
	let aerolinea;
	let destino;
	let cantidadDeHoras;
	let aerolineaMax;
	let nombreMax;
	let horasMax;
	let promedio;
	let contadorBariloche = 0;
	let acumuladorHorasBariloche = 0;
	let contadorJet = 0;
	let contadorAerolineas = 0;
	let contadorFlybondi = 0;
	let flagPasajero = false;
	let respuesta = "si";

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese el nombre del pasajero");

		aerolinea = prompt("Ingrese la aerolínea");
		while(aerolinea != "Aerolineas Argentinas" && aerolinea != "JetSmart" && aerolinea != "FlyBondi")
		{
			aerolinea = prompt("Error. Ingrese una aerolínea válida");
		}

		destino = prompt("Ingrese el destino");
		while(destino != "Bariloche" && destino != "Cataratas" && destino != "Salta")
		{
			destino = prompt("Error. Ingrese el destino");
		}

		cantidadDeHoras = prompt("Ingrese la cantidad de horas");
		cantidadDeHoras = parseFloat(cantidadDeHoras);
		while(cantidadDeHoras <= 0 || cantidadDeHoras >= 8)
		{
			cantidadDeHoras = prompt("Error. Ingrese la cantidad de horas, entre 0 y 8");
			cantidadDeHoras = parseFloat(cantidadDeHoras);
		}

		switch(aerolinea)
		{
			case "Aerolineas Argentinas":
				contadorAerolineas ++;
			break;

			case "FlyBondi":
				contadorFlybondi ++;
			break;

			default:
				contadorJet ++;
			break;
		}

		if(destino == "Bariloche")
		{
			acumuladorHorasBariloche += cantidadDeHoras;
			contadorBariloche ++;
		}

		if(!flagPasajero) //aca esta bien porque no comparo si es hombre o mujer, solo si son pasajeros
		{
			nombreMax = nombre;
			horasMax = cantidadDeHoras;
			flagPasajero = true;
		}
		else
		{
			if(cantidadDeHoras > horasMax)
			{
				nombreMax = nombre;
				horasMax = cantidadDeHoras;
			}
		}
		respuesta = prompt("Ingrese 'si' si quiere cargar mas pasajeros");
	}

	if(contadorAerolineas > contadorFlybondi && contadorAerolineas > contadorJet)
	{
		aerolineaMax = "Aerolinas Argentinas";
	}
	else
	{
		if(contadorFlybondi > contadorJet)
		{
			aerolineaMax = "FlyBondi";
		}
		else
		{
			aerolineaMax = "JetSmart";
		}
	}

	promedio = acumuladorHorasBariloche / contadorBariloche;

	console.log("La Aerolínea más elegida fue " + aerolineaMax);
	console.log("El nombre del pasajero que más horas viajó es " + nombreMax + " con un total de " + horasMax + " horas");
	console.log("El promedio de horas de vuelo a Bariloche es " + promedio);
}

/* Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")
y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
/* function mostrar()
{
	let respuesta = "si";
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let nombreTemperaturaAlta;
	let temperaturaAlta;
	let contadorMayoresViudos = 0;
	let contadorHombresSolterosViudos = 0;
	let contadorMayoresTemperaturaAlta = 0;
	let acumuladorEdadHombres = 0;
	let contadorHombresSolteros = 0;
	let flagPrimero = false;
	let promedio;

	while(respuesta == "si")
	{
		nombre = prompt("ingrese su nombre");

		edad = prompt("ingrese su edad");
		edad = parseInt(edad);
		while(edad < 0 || edad > 130 || isNaN(edad))
		{
			edad = prompt("Error. Ingrese una edad valida");
			edad = parseInt(edad);
		}

		sexo = prompt("ingrese su sexo, siendo 'f' para femenino o 'm' para masculino");
		while(sexo != "f" && sexo != "m" )
		{
			sexo = prompt("Error. Ingrese su sexo, siendo 'f' para femenino o 'm' para masculino");
		}

		estadoCivil = prompt("ingrese su estado civil");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error. Ingrese su estado civil");
		}

		temperatura = prompt("ingrese su temperatura en grados celcius");
		temperatura = parseFloat(temperatura);
		while(temperatura < 30 || temperatura > 45 || isNaN(temperatura))
		{
			temperatura = prompt("Error. Ingrese su temperatura en grados celcius");
			temperatura = parseFloat(temperatura);
		}

		if(!flagPrimero)
		{
			nombreTemperaturaAlta = nombre;
			temperaturaAlta = temperatura;
			flagPrimero = true;
		}
		else
		{
			if(temperatura > temperaturaAlta)
			{
				nombreTemperaturaAlta = nombre;
				temperaturaAlta = temperatura;
			}
		}

		if(edad > 17 && estadoCivil == "viudo")
		{
			contadorMayoresViudos ++;
		}

		if(sexo == "m")
		{
			if(estadoCivil != "casado")
			{
				contadorHombresSolterosViudos ++;
			}
		}

		if(edad > 60 && temperatura > 38)
		{
			contadorMayoresTemperaturaAlta ++;
		}

		if(sexo == "m" && estadoCivil == "soltero")
		{
			acumuladorEdadHombres += edad;
			contadorHombresSolteros ++;
		}


		respuesta = prompt("ingrese 'si' si quiere cargar mas pasajeros");
	}

	promedio = acumuladorEdadHombres / contadorHombresSolteros;

	console.log("El nombre de la persona con mas temperatura es " + nombreTemperaturaAlta + " con una temperatura de "
				 + temperaturaAlta + " grados");
	console.log("La cantidad de mayores de edad que estan viudos son " + contadorMayoresViudos);
	console.log("La cantidad de hombres que son solteros o viudos es " +  contadorHombresSolterosViudos);
	console.log("La cantidad de personas que son de la tercera edad y que tienen mas de 38 de temperatura son " 
				+ contadorMayoresTemperaturaAlta);
	console.log("El promedio de edad entre los hombres solteros es " + promedio);
} */
/* function mostrar()
{
	let respuesta;
	let titular;
	let lugar;
	let temporada;
	let cantidadDeDias;
	let contadorPuerto = 0;
	let contadorVilla = 0;
	let contadorCordoba = 0;
	let lugarElegido;
	let titularMax;
	let cantidadDeDiasMax;
	let flagTitular = false;
	let promedioVerano;
	let contadorVerano = 0;
	let acumuladorVerano = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
		titular = prompt("ingrese el titular");

		lugar = prompt("ingrese el lugar");
		while(lugar != "Puerto Madryn" && lugar != "Villa Gessel" && lugar != "Cordoba")
		{
			lugar = prompt("el lugar ingresado no es valido. Ingrese un nuevo lugar")
		}

		temporada = prompt("ingrese temporada");
		while(temporada != "otonio" && temporada != "invierno" && temporada != "verano" && temporada != "primavera")
		{
			temporada = prompt("la temporada no es valida. Ingrese una nueva temporada");
		}

		cantidadDeDias = prompt("ingrese la cantidad de dias");
		cantidadDeDias = parseInt(cantidadDeDias);
		while(cantidadDeDias < 0 || cantidadDeDias > 100)
		{
			cantidadDeDias = prompt("La cantidad de dias no es valida. Ingrese una cantidad de dias valida");
			cantidadDeDias = parseInt(cantidadDeDias);
		}

		switch(lugar)
		{
			case "Puerto Madryn":
				contadorPuerto++;
			break;
			case "Villa Gessel":
				contadorVilla++;
			break;
			default:
				contadorCordoba++;
			break;
		}

		if(contadorPuerto > contadorVilla && contadorPuerto > contadorCordoba)
		{
			lugarElegido = "Puerto Madryn";
		}
		else
		{
			if(contadorVilla > contadorCordoba && contadorVilla >= contadorPuerto)
			{
				lugarElegido = "Villa Gessel";
			}
			else
			{
				lugarElegido = "Cordoba";
			}
		}
		
		if(!flagTitular)
		{
			titularMax = titular;
			cantidadDeDiasMax = cantidadDeDias;
			flagTitular = true;
		}
		else
		{
			if(cantidadDeDias > cantidadDeDiasMax)
			{
				titularMax = titular;
				cantidadDeDiasMax = cantidadDeDias;
			}
		}

		if(temporada == "verano")
		{
			contadorVerano++;
			acumuladorVerano += cantidadDeDias;
		}


		respuesta = prompt("ingrese 'si' si quiere cargar mas estadias");
	}

	promedioVerano = acumuladorVerano / contadorVerano;

	console.log("El lugar mas elegido fue " + lugarElegido);
	console.log("El nombre del titular que mas dias viaja es " + titularMax + " y viaja " + cantidadDeDiasMax + " dias");
	console.log("El promedio de dias por viaje de la temporada de verano es " + promedioVerano);
} */
/*Nos ingresan una cantidad indeterminada de
estadías de  vacaciones, validando los datos ingresados:

nombre del titular ,lugar ( “Puerto Madryn”,
“Villa Gessel” o “Córdoba”),temporada(“otoño”,“invierno”,
“verano”,“primavera”),cantidad de días que durará el viaje.

informar:

a)el lugar más elegido

b)el nombre del titular que más días viaje.

c)el promedio de días por viaje, de la
temporada verano.*/