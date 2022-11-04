/* 
3)Nos ingresan una cantidad indeterminada de vuelos,
validando los datos ingresados:
 
nombre del pasajero ,aerolínea ( “Aerolíneas
Argentinas”, “JetSmart” o “FlyBondi”),destino(“Bariloche”, “Cataratas”, “Salta”)
cantidad de horas de vuelo (entre 0 y 8) y el asiento de ese pasajero (entre 1
y 120, limites incluidos)
Informar:
a) La aerolínea más elegida
b) El nombre del pasajero que menos horas
viajó y su asiento.
c) El promedio de horas de vuelo a Salta.
*/

function mostrar()
{
    let nombre;
	let aerolinea;
	let destino;
	let cantidadDeHoras;
    let asiento;
    let aerolineaMax;
    let nombreMin;
    let horasMin;
    let asientoMin;
    let promedioSalta;
    let contadorSalta = 0;
    let acumuladorSalta = 0;
    let contadorJet = 0;
	let contadorAerolineas = 0;
	let contadorFlybondi = 0;
    let respuesta = "si";
    let flagVuelo = false;

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

        asiento = prompt("Ingrese el asiento");
        asiento = parseInt(asiento);
        while(asiento < 1 || asiento > 120)
        {
            asiento = prompt("Error. Ingrese el asiento, entre 1 y 120");
            asiento = parseInt(asiento);
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

        if(!flagVuelo)
        {
            nombreMin = nombre;
            horasMin = cantidadDeHoras;
            asientoMin = asiento;
            flagVuelo = true;
        }
        else
        {
            if(cantidadDeHoras < horasMin)
            {
                nombreMin = nombre;
                horasMin = cantidadDeHoras;
                asientoMin = asiento;
            }
        }

        if(destino == "Salta")
        {
            contadorSalta ++;
            acumuladorSalta += cantidadDeHoras;
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

    promedioSalta = acumuladorSalta / contadorSalta;

    console.log("La Aerolínea más elegida fue " + aerolineaMax);
    console.log("El nombre del pasajero que menos horas viajó es " + nombreMin + " con un total de " + horasMin + " horas, y su asiento fue el número " + asientoMin);
    console.log("El promedio de horas de vuelo a Salta fue " + promedioSalta);
}






/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
*/
/* function mostrar()
{
    let animal;
    let peso;
    let tempHabitat;
    let tempMax;
    let animalMax;
    let pesoMax;
    let promedio;
    let pesoMaxBajoCero;
    let pesoMinBajoCero;
    let respuesta = "si";
    let contadorTempPar = 0;
    let contadorBajoCero = 0;
    let acumuladorPeso = 0;
    let contadorPeso = 0;
    let flagAnimalPesado = false;
    let flagBajoCero = false;

    while(respuesta == "si")
    {
        animal = prompt("ingrese el animal");

        peso = prompt("ingrese el peso");
        peso = parseFloat(peso);
        while(peso < 1 || peso > 1000)
        {
            peso = prompt("Reingrese el peso, entre 1 y 1000");
            peso = parseFloat(peso);
        }

        tempHabitat = prompt("ingrese la temperatura del habitat");
        tempHabitat = parseFloat(tempHabitat);
        while(tempHabitat < -30 || tempHabitat > 30)
        {
            tempHabitat = prompt("Reingrese la temperatura del habitat, entre -30 y 30");
            tempHabitat = parseFloat(tempHabitat);
        }

        if(tempHabitat % 2 == 0)
        {
            contadorTempPar ++;
        }

        if(!flagAnimalPesado)
        {
            tempMax = tempHabitat;
            animalMax = animal;
            pesoMax = peso;
            flagAnimalPesado = true;
        }
        else
        {
            if(peso > pesoMax)
            {
                tempMax = tempHabitat;
                animalMax = animal;
                pesoMax = peso;
            }
        }

        if(tempHabitat < 0)
        {
            contadorBajoCero ++;

            if(!flagBajoCero)
            {
                pesoMaxBajoCero = peso;
                pesoMinBajoCero = peso;
                flagBajoCero = true;
            }
            else
            {
                if(peso > pesoMaxBajoCero)
                {
                    pesoMaxBajoCero = peso;
                }
                else
                {
                    pesoMinBajoCero = peso;
                }
            }
        }

        acumuladorPeso += peso;
        contadorPeso ++;

        respuesta = prompt("desea ingresar mas animales?");
    }

    promedio = acumuladorPeso / contadorPeso;

    console.log("La cantidad de temperaturas pares es " + contadorTempPar);
    console.log("El nombre del animal mas pesado es " + animalMax + " con una temperatura de " + tempMax + " y un peso de " + pesoMax);
    console.log("La cantidad de animales que viven bajo cero es " + contadorBajoCero);
    console.log("El promedio del peso de todos los animales es " + promedio);
    console.log("El peso maximo de los animales bajo cero es " + pesoMaxBajoCero + " y el peso minimo es " + pesoMinBajoCero);
} */