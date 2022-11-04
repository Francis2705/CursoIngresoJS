function mostrar()
{
    let dia;
    let mensaje;

    dia = prompt("Ingrese un dia");

    switch(dia)
    {
        case "sabado":
        case "domingo":
            mensaje = "buen finde";
        break;
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            mensaje = "a trabajar";
        break;
        default:
            mensaje = "no es un dia valido";
        break;
    }
    alert(mensaje);
}