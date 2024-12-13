/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    resultado = precio1 + precio2 + precio3;

    alert("La suma es " + resultado);
}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let promedio;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    promedio = (precio1 + precio2 + precio3) / 3;

    alert("El promedio es " + promedio.toFixed(2));
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultado;
    let iva = 21;
    let resultadoIVA;
    let resultadoFinal;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    resultado = precio1 + precio2 + precio3;
    resultadoIVA = resultado * iva/100;
    resultadoFinal = resultado + resultadoIVA;

    alert("El precio final con IVA es " + resultadoFinal);
}
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres