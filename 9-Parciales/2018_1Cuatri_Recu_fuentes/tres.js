function mostrar()
{
    let precio;
    let porcentaje;
    let precioFinal;

    precio = prompt("Ingrese un precio");
    porcentaje = prompt("Ingrese un porcentaje");

    precio = parseFloat(precio);
    porcentaje = parseFloat(porcentaje);

    precioFinal = precio - (precio * porcentaje / 100);

    document.getElementById("elPrecioFinal").value = precioFinal;
}