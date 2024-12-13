 function CalcularPrecio () 
 {
    let cantidadLamparas;
    let precio = 35;
    let precioFinal;
    let precioTotalDescuento;
    let marca;
    let descuento = 0;
    let ingresosBrutos; //puedo sacar esta y dejar solamente 10/100
    let aumentoIngresosBrutos;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidadLamparas = parseInt(cantidadLamparas);

    if(cantidadLamparas > 5)
    {
        descuento = 50/100;
    }
    else
    {
        if(cantidadLamparas == 5)
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = 40/100;
                break;
                default:
                    descuento = 30/100;
                break;
            }
        }
        else
        {
            if(cantidadLamparas == 4)
            {
                switch(marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 25/100;
                    break;
                    default:
                        descuento = 20/100;
                    break;
                }
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                            descuento = 15/100;
                        break;
                        case "FelipeLamparas":
                            descuento = 10/100;
                        break;
                        default:
                            descuento = 5/100;
                        break;
                    }
                }
            }
        }
    }

    precioTotalDescuento = precio - precio * descuento;

    precioFinal = precioTotalDescuento * cantidadLamparas;

    ingresosBrutos = 10/100;
    aumentoIngresosBrutos = precioFinal * ingresosBrutos;

    if(precioFinal > 120)
    {
        precioFinal = precioFinal + aumentoIngresosBrutos;
        alert("usted pago $" + aumentoIngresosBrutos + " de ingresos brutos");
    }

    document.getElementById("txtIdprecioDescuento").value = precioTotalDescuento;

    alert(precioFinal);
 }
 /* function CalcularPrecio () 
 {
     const PRECIO = 35;
     let cantidad;
     let marca;
     let descuento;
     let importeFinal;
     let iibb;
     let precioConDescuento;
 
     cantidad = document.getElementById("txtIdCantidad").value;
     cantidad = parseInt(cantidad);
 
     marca = document.getElementById("Marca").value;
 
     switch(cantidad)
     {
         case 1:
         case 2:
             descuento = 0;    
         break;
         
         case 3:
             switch(marca)
             {
                case "ArgentinaLuz":
                    descuento = 15;
                break;
                case "FelipeLamparas":
                    descuento = 10;
                break;
                default:
                    descuento = 5;
                break;
             }
         break;
         
         case 4:
            switch(marca)
             {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                break;
                default:
                    descuento = 20;
                break;
             }
         break;
         
         case 5:
            switch(marca)
             {
                case "ArgentinaLuz":
                    descuento = 40;
                break;
                default:
                    descuento = 30;
                break;
             }
         break;
 
         default:
             descuento = 50;
         break;
     }
 
     precioConDescuento = PRECIO - PRECIO * descuento / 100;
 
     importeFinal = precioConDescuento * cantidad;

     document.getElementById("txtIdprecioDescuento").value = importeFinal;

     if(importeFinal>120)
     {
         iibb = importeFinal * 10/100;
         importeFinal = importeFinal + iibb;
 
         alert("Total: $ " + importeFinal + ". Usted pagó " + iibb + " de Ingresos Brutos");
     }
     else
     {
         alert("Total: $ " + importeFinal);
     }
 } */

 /* function CalcularPrecio () 
{
    const PRECIO = 35;
    let cantidad;
    let marca;
    let descuento;
    let importeFinal;
    let iibb;
    let precioConDescuento;

    /*El enunciado prioriza la cantidad, ya que empieza por ese punto
    asi que tendría que empezar por ese dato, y después por la marca PONER COMENTARIO
    cantidad = document.getElementById("txtIdCantidad").value;
    cantidad = parseInt(cantidad);

    marca = document.getElementById("Marca").value;

    switch(cantidad)
	{
        /*Los casos son las lamparitas que compra el cliente PONER COMENTARIO
        case 1:
        case 2:
            descuento = 0;    
        break;
        
        case 3:
            if(marca == "ArgentinaLuz")
            {
                descuento = 15;
            }
            else
            {
                if(marca == "FelipeLamparas")
                {
                    descuento = 10;
                }
                else
                {
                    descuento = 5;
                }
            }

        break;
        
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas" )
            {
                descuento = 25;
            }
            else
            {
                descuento = 20;
            }
        break;
        
        case 5:
            if(marca == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
        break;

        default:
            descuento = 50;
        break;
    }

    precioConDescuento = PRECIO - PRECIO * descuento / 100;

    importeFinal = precioConDescuento * cantidad;
    
    document.getElementById("txtIdprecioDescuento").value = importeFinal;
    
    if(importeFinal>120)
    {
        iibb = importeFinal * 10/100;
        importeFinal = importeFinal + iibb;

        alert("Total: $ " + importeFinal + ". Usted pagó " + iibb + " de Ingresos Brutos");
    }
    else
    {
        alert("Total: $ " + importeFinal);
    }
} */
/*const PRECIO = 35;
     let cantidad;
     let marca;
     let descuento;
     let importeFinal;
     let iibb;
     let precioConDescuento;
 
     cantidad = document.getElementById("txtIdCantidad").value;
     cantidad = parseInt(cantidad);
 
     marca = document.getElementById("Marca").value;
 
     if (cantidad == 1 || cantidad == 2)
     {
        descuento = 0;
     }
     else
     {
        if (cantidad == 3)
        {
            switch (marca)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                break;
                case "FelipeLamparas":
                    descuento = 10;
                break;
                default:
                    descuento = 5;
                break;
            }
        }
        else
        {
            if (cantidad == 4)
            {
                switch (marca)
                {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                break;
                default:
                    descuento = 20;
                break;
                }
            }
            else
            {
                if (cantidad == 5)
                {
                    switch (marca)
                    {
                    case "ArgentinaLuz":
                        descuento = 40;
                    break;
                    default:
                        descuento = 30;
                    break;
                    }
                }
                else
                {
                    descuento = 50;
                }

            }
        }
     }
 
     precioConDescuento = PRECIO - PRECIO * descuento / 100;
 
     importeFinal = precioConDescuento * cantidad;
     
     document.getElementById("txtIdprecioDescuento").value = importeFinal;
 
     if(importeFinal > 120)
     {
         iibb = importeFinal * 10/100;
         importeFinal = importeFinal + iibb;
 
         alert("Total: $ " + importeFinal + ". Usted pagó " + iibb + " de Ingresos Brutos");
     }
     else
     {
         alert("Total: $ " + importeFinal);
     }
 */