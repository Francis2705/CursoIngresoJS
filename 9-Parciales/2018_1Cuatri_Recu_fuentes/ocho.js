/* 
2)De una compra debes ingresar una cantidad
indeterminada de procesadores
 
modelo, precio(entre 10000 y 60000), cantidad
de núcleos(entre 4 y 10, limites incluidos), fabricante(amd o  intel) y el TDP de este (entre 65 y 120,
limites incluidos)
a)Informar el precio total y 
el TDP promedio de la compra.
b)El modelo del procesador con más núcleos de
los amd.
c)El modelo del procesador con menos núcleos de
los intel.
*/

function mostrar()
{
    let modelo;
    let precio;
    let cantidadNucleos;
    let fabricante;
    let acumulador = 0;
    let flagPrimerAmd = false;
    let modeloMenosNucleos;
    let menosNucleosAmd;
    let flagPrimerIntel = false;
    let modeloMasNucleos;
    let masNucleosIntel;
    let respuesta = "si";

    while(respuesta =="si")
    {
        modelo = prompt("Ingrese el modelo");

        precio = parseInt(prompt("Ingrese el precio (entre 10000 y 60000)"));
        while(precio < 10000 || precio > 60000)
        {
            precio = parseInt(prompt("Ringrese el precio (entre 10000 y 60000)"));
        }

        cantidadNucleos = parseInt(prompt("Ingrese la cantidad de nucleos (entre 4 y 18)"));
        while(cantidadNucleos < 4 || cantidadNucleos > 18)
        {
            cantidadNucleos = parseInt(prompt("Rengrese la cantidad de nucleos (entre 4 y 18)"));
        }

        fabricante = prompt("Ingrese el fabricante (amd o intel)");
        while(fabricante !="amd" && fabricante !="intel")
        {
            fabricante = prompt("Ringrese el fabricante (amd o intel)");
        }

        acumulador += precio;   

        if(fabricante == "amd")         
        {
            if(!flagPrimerAmd)
            {
                flagPrimerAmd = true;
                modeloMenosNucleos = modelo;
                menosNucAmd = cantidadNucleos;
            }
            else
            {
                if(cantidadNucleos < menosNucleosAmd)
                {
                    menosNucleosAmd = cantidadNucleos;
                    modeloMenosNucleos = modelo;
                }
            }
        }
        else
        {
            if(!flagPrimerIntel)     
            {
                flagPrimerIntel = true;
                modeloMasNucleos = modelo;
                masNucleosIntel = cantidadNucleos;
            }
            else
            {
                if(cantidadNucleos > masNucleosIntel)
                {
                    masNucleosIntel = cantidadNucleos;
                    modeloMasNucleos = modelo;
                }
            }
        }


        respuesta = prompt("Desea continuar?");
    }

    console.log("El precio total de la compra es de: "+ acumulador);
    console.log("El modelo del procesador con menos nucleos de los amd es: " + modeloMenosNucleos + " con " + menosNucleosAmd + " nucleos");
    console.log("El modelo del procesador con mas nucleos de los intel es: " + modeloMasNucleos + " con " + masNucleosIntel + " nucleos");
}
/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
Francisco Martínez Balian
Div C
Recuperatorio 2018 ejercicio 8
*/
 /* function mostrar()
{
    let letra;
    let numero;
    let promedioPositivos;
    let letraMin;
    let numeroMin;
    let letraMax;
    let numeroMax;
    let respuesta = "si";
    let contadorPares = 0;
    let contadorImpares = 0;
    let contadorCeros = 0;
    let acumuladorPositivos = 0;
    let contadorPositivos = 0;
    let acumuladorNegativos = 0;
    let flagNumeros = false;

    while(respuesta == "si")
    {
        letra = prompt("ingrese una letra");

        numero = prompt("ingrese un numero");
        numero = parseFloat(numero);
        while(numero < -100 || numero > 100)
        {
            numero = prompt("ingrese un numero entre -100 y 100");
            numero = parseFloat(numero);
        }

        if(numero % 2 == 0)
        {
            contadorPares ++;
        }
        else
        {
            contadorImpares ++;
        }

        if(numero == 0)
        {
            contadorCeros ++;
        }

        if(numero > 0)
        {
            contadorPositivos ++;
            acumuladorPositivos += numero;
        }
        else
        {
            acumuladorNegativos += numero;
        }

        if(!flagNumeros)
        {
            numeroMax = numero;
            letraMax = letra;
            numeroMin = numero;
            letraMin = letra;
            flagNumeros = true;
        }
        else
        {
            if(numero > numeroMax)
            {
                numeroMax = numero;
                letraMax = letra;
            }
            else
            {
                numeroMin = numero;
                letraMin = letra;
            }
        }

        respuesta = prompt("desea ingresar mas datos?");
    }

    promedioPositivos = acumuladorPositivos / contadorPositivos;

    console.log("La cantidad de numeros pares es " + contadorPares);
    console.log("La cantidad de numeros impares es " + contadorImpares);
    console.log("La cantidad de ceros es " + contadorCeros);
    console.log("El promedio de todos los numeros positivos ingresados es " + promedioPositivos);
    console.log("La suma de todos los numeros negativos es " + acumuladorNegativos);
    console.log("El numero maximo fue " + numeroMax + " y su letra fue " + letraMax);
    console.log("El numero minimo fue " + numeroMin + " y su letra fue " + letraMin); 
} */