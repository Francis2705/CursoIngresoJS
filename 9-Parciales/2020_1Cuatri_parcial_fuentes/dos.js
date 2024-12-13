/*
2)De una compra debes ingresar una cantidad
indeterminada de procesadores

modelo, precio(entre 10000 y 60000), cantidad
de núcleos(entre 4 y 18,limites incluidos), fabricante(amd o  intel).

a)Informar el precio total de la compra.

b)El modelo del procesador con menos hilos de
los amd.

c)El modelo del procesador con más hilos de
los intel.
*/
/*function mostrar()
{
	let modelo;
	let precio;
	let cantidadNucleos;
	let fabricante;
    let modeloMinAmd;
    let cantidadNucleosMin;
    let modeloMaxIntel;
    let cantidadNucleosMax;
	let respuesta = "si";
	let acumuladroPrecio = 0;
    let flagAmd = false;
    let flagIntel = false;

    while(respuesta == "si")
	{
        modelo = prompt("Ingrese el modelo");

        precio = prompt("Ingrese el precio");
        precio = parseFloat(precio);
        while(precio < 10000 || precio > 60000)
        {
            precio = prompt("Error. Ingrese el precio");
            precio = parseFloat(precio);
        }

        cantidadNucleos = prompt("Ingrese la cantidad de núcleos");
        cantidadNucleos = parseInt(cantidadNucleos);
        while(cantidadNucleos < 4 || cantidadNucleos > 18)
        {
            cantidadNucleos = prompt("Error. Ingrese la cantidad de núcleos");
            cantidadNucleos = parseInt(cantidadNucleos);
        }

        fabricante = prompt("Ingrese el fabricante");
        while(fabricante != "amd" && fabricante != "intel")
        {
            fabricante = prompt("Error. Ingrese un fabricante válido");
        }

        //modificar lo mismo que en el uno

        if(fabricante == "amd")
        {
            if(!flagAmd)
            {
                modeloMinAmd = modelo;
                cantidadNucleosMin = cantidadNucleos;
                flagAmd = true;
            }
            else
            {
                if(cantidadNucleos < cantidadNucleosMin)
                {
                    modeloMinAmd = modelo;
                    cantidadNucleosMin = cantidadNucleos;
                }   
            }
        }
        else
        {
            if(!flagIntel)
            {
                modeloMaxIntel = modelo;
                cantidadNucleosMax = cantidadNucleos;
                flagIntel = true;
            }
            else
            {
                if(cantidadNucleos > cantidadNucleosMax)
                {
                    modeloMaxIntel = modelo;
                    cantidadNucleosMax = cantidadNucleos;
                }
            }
        }

        acumuladroPrecio += precio;
        respuesta = prompt("¿Desea agregar más productos?");
    }

    console.log("El precio total de la compra es " + acumuladroPrecio);
    console.log("El modelo del procesador con menos hilos de los amd es " + modeloMinAmd + " con unos hilos de " + cantidadNucleosMin);
    console.log("El modelo del procesador con más hilos de los intel es " + modeloMaxIntel + " con unos hilos de " + cantidadNucleosMax);
}*/

/* Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */
function mostrar()
{
    let tipo;
    let cantidadDeBolsas;
    let precioBolsas;
    let totalPagarUnidad;
    let totalPagarUnidadSinDescuento;
    let descuento;
    let pagoFinal;
    let pagoFinalSinDescuento;
    let tipoMax;
    let cantidadDeBolsasMax;
    let tipoCaro;
    let precioCaro;
    let acumuladorPrecioBolsas = 0;
    let acumuladorCantidadBolsas = 0;
    let flagEntrada = false;
    let respuesta = "si";

    while(respuesta == "si")
	{
        tipo = prompt("ingrese el tipo de producto; arena, cal o cemento");
        while(tipo != "arena" && tipo != "cal" && tipo != "cemento")
        {
            tipo = prompt("tipo ingresado invalido. Ingrese el tipo de producto; arena, cal o cemento");
        }

        cantidadDeBolsas = prompt("ingrese la cantidad de bolsas");
        cantidadDeBolsas = parseInt(cantidadDeBolsas);

        precioBolsas = prompt("ingrese el precio por bolsa");
        precioBolsas = parseFloat(precioBolsas);
        while(precioBolsas <= 0)
        {
            precioBolsas = prompt("error. Ingrese un precio mayor que 0");
            precioBolsas = parseFloat(precioBolsas);
        }

        acumuladorCantidadBolsas += cantidadDeBolsas;
        acumuladorPrecioBolsas += precioBolsas;

        if(!flagEntrada)
        {
            tipoMax = tipo;
            cantidadDeBolsasMax = cantidadDeBolsas;
            flagTipoBolsas = true;
        }
        else
        {
            if(cantidadDeBolsas > cantidadDeBolsasMax)
            {
                tipoMax = tipo;
                cantidadDeBolsasMax = cantidadDeBolsas;
            }
        }

        if(!flagEntrada)
        {
            tipoCaro = tipo;
            precioCaro = precioBolsas;
            flagTipoPrecio = true;
        }
        else
        {
            if(precioBolsas > precioCaro)
            {
                tipoCaro = tipo;
                precioCaro = precioBolsas;
            }
        }

        respuesta = prompt("desea agregar mas productos?");
    }
    
    if(acumuladorCantidadBolsas > 10)
    {
        descuento = 15;
    }
    else
    {
        if(acumuladorCantidadBolsas > 30)
        {
            descuento = 25;
        }
    }
        
    totalPagarUnidad = acumuladorPrecioBolsas - acumuladorPrecioBolsas * descuento/100;
    totalPagarUnidadSinDescuento = acumuladorPrecioBolsas;
    
    pagoFinal = totalPagarUnidad * cantidadDeBolsas;
    pagoFinalSinDescuento = totalPagarUnidadSinDescuento * cantidadDeBolsas;


    console.log("El total a pagar con descuento es " + pagoFinal);
    console.log("El total a pagar sin descuento es " + pagoFinalSinDescuento);
    console.log("El tipo con mas cantidad de bolsas es " + tipoMax + " con una cantidad de " + cantidadDeBolsasMax + " de bolsas");
    console.log("El tipo mas caro es " + tipoCaro + " con un precio por bolsa de $" + precioCaro);
}
/* function mostrar()
{
  let respuesta;
  let contadorCortes;
  let nombreCorte;
  let precio;
  let peso;
  let tipo;
  let acumuladorPeso;
  let nombreCorteMaxSh;
  let precioMax;
  let nombreCorteMinimo;
  let pesoMinimo;
  let flagHueso;
  let flagSinHueso;

  contadorCortes = 0;
  acumuladorPeso = 0;
  flagHueso = false;
  flagSinHueso = false;

  respuesta = "si";

  while(respuesta == "si")
  {
    nombreCorte = prompt("Ingrese el nombre del corte");

    precio = prompt("Ingrese el precio");
    precio = parseFloat(precio);

    while(precio < 0)
    {
      precio = prompt("El precio ingresado no es valido. Ingrese un precio mayor a 0");
      precio = parseFloat(precio);
    }
    
    peso = prompt("Ingrese el peso");
		peso = parseFloat(peso);

		while(peso < 0 || peso > 300)
		{
			peso = prompt("El peso ingresado no es valido. Ingrese un numero entre 0 y 300");
			peso = parseFloat(peso);
		}

    tipo = prompt("Ingrese el tipo");
    
    while(tipo != "con hueso" && tipo != "sin hueso")
		{
			tipo = prompt("El tipo ingresado no es valido. Ingrese 'con hueso' o 'sin hueso' ");
		}

    if(tipo == "sin hueso")
		{
			if(!flagSinHueso)
      {
        nombreCorteMaxSh = nombreCorte;
			  precioMax = precio;
        flagSinHueso = true;
      }
      else
      {
        if(precio > precioMax)
        {
          nombreCorteMaxSh = nombreCorte;
			    precioMax = precio;
        }
      }
		}
    else
    {
    
      if(tipo == "con hueso")
      {
        if(!flagHueso)
        {
          nombreCorteMinimo = nombreCorte;
          pesoMinimo = peso;
          flagHueso = true;
        }
        else
        {
          if(peso < pesoMinimo)
          {
            nombreCorteMinimo = nombreCorte;
            pesoMinimo = peso;
          }
        }
      }
    }
    acumuladorPeso += peso;
    contadorCortes ++;
    respuesta = prompt("desea seguir ingresando cortes? ingrese 'si', si es el caso")
  }


  console.log("El peso total de la compra es " + acumuladorPeso);
  console.log("El nombre del corte mas caro de los sin hueso es " + nombreCorteMaxSh + " y su precio es " + precioMax);
  console.log("El nombre mas liviano del corte mas liviano de los con hueso es " + nombreCorteMinimo + " y su peso es " + pesoMinimo);
} */
/*De una compra debes ingresar una cantidad
indeterminada de cortes de carne vacuna,

 validando los siguientes datos:

nombre del corte, precio, peso en kilogramos,
tipo(con hueso o sin hueso)

a)informar el peso total de la compra.

b)el nombre del corte más caro de los sin hueso.

c)el nombre del corte más liviano de los con
hueso.
*/