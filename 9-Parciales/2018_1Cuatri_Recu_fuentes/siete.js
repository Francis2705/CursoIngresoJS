/* 
De 6 personas que ingresan a la Administración
Nacional de la Seguridad Social (Anses) pedir y validar los siguientes datos.


nombre , sueldo mensual(entre 0 y 200000), cuantos
días a la semana trabaja(entre 1 y 7, limites incluidos), sexo(f o m) y si está
en relación de dependencia o no:


a)Informar la cantidad de personas que no están
en relación de dependencia que cobran más de 100000 al mes y la cantidad de
personas en relación de dependencia que cobran menos de 60000.

b)El sueldo promedio mensual en total

c)El hombre que trabaja menos días 

y la mujer que
trabaja más días a la semana.
*/

function mostrar()
{
    let nombre;
	let sueldoMensual;
	let diasTrabajo;
	let sexo;
	let relacionDependencia;
    let promedio;
    let diasMin;
    let nombreMin;
    let diasMax;
    let nombreMax;
    let vueltas = 0;
    let contadorNoRelacionDependencia = 0;
    let contadorSiRelacionDependencia = 0;
    let acumuladorSueldo = 0;
    let flagHombreMin = false;
    let flagMujerMax = false;
    
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

        if(relacionDependencia == "no")
		{
			if(sueldoMensual > 100000)
			{
				contadorNoRelacionDependencia ++;
			}
		}
        else
        {
            if(sueldoMensual < 60000)
            {
                contadorSiRelacionDependencia ++;
            }
        }

        if(sexo == "m")
        {
            if(!flagHombreMin)
            {
                nombreMin = nombre;
                diasMin = diasTrabajo;
                flagHombreMin = true;
            }
            else
            {
                if(diasTrabajo < diasMin)
                {
                    nombreMin = nombre;
                    diasMin = diasTrabajo;
                }
            }
        }
        else
        {
            if(!flagMujerMax)
            {
                nombreMax = nombre;
                diasMax = diasTrabajo;
                flagMujerMax = true;
            }
            else
            {
                if(diasTrabajo > diasMax)
                {
                    nombreMax = nombre;
                    diasMax = diasTrabajo;
                }
            }
        }

        acumuladorSueldo += sueldoMensual;
		vueltas ++;
    }
    
    promedio = acumuladorSueldo / vueltas;

    console.log("La cantidad de personas que no están en relación de dependencia que cobran más de 100000 al mes son " + contadorNoRelacionDependencia);
    console.log("La cantidad de personas en relación de dependencia que cobran menos de 60000 son " + contadorSiRelacionDependencia);
    console.log("El sueldo promedio mensual en total es "+ promedio);
    console.log("El hombre que trabaja menos días es " + nombreMin + " con un total de " + diasMin + " días");
    console.log("La mujer que trabaja más días es " + nombreMax + " con un total de " + diasMax + " días");
}

/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6. 
Francisco Martínez Balian
Div C
Recuperatorio 2018 ejercicio 7
*/
/* function mostrar()
{
    let notas;
    let sexo;
    let promedio;
    let notaBaja;
    let sexoBajo;
    let contador = 0;
    let contadorVarones = 0;
    let acumuladorNotas = 0;
    let flagNotaBaja = false;

    while(contador < 5)
    {
        notas = prompt("ingrese la nota");
        notas = parseFloat(notas);
        while(notas < 0  || notas > 10)
        {
            notas = prompt("Error. Ingrese una nota valida, del 0 al 10");
            notas = parseFloat(notas);
        }

        sexo = prompt("ingrese el sexo");
        while(sexo != "f" && sexo != "m")
        {
            sexo = prompt("Error, ingrese un sexo valido");
        }

        if(!flagNotaBaja)
        {
            sexoBajo = sexo;
            notaBaja = notas;
            flagNotaBaja = true;
        }
        else
        {
            if(notas < notaBaja)
            {
                sexoBajo = sexo;
                notaBaja = notas;
            }
        }

        if(sexo = "m" && notas >= 6)
        {
            contadorVarones ++;
        }

        acumuladorNotas += notas;
        contador ++;
    }

    promedio = acumuladorNotas / contador;

    console.log("El promedio de las notas totales es " + promedio);
    console.log("La nota mas baja fue " + notaBaja + " y el sexo de esa persona fue " + sexoBajo);
    console.log("La cantidad de varones que su nota fue mayor o igual a 6 fue " + contadorVarones);
} */