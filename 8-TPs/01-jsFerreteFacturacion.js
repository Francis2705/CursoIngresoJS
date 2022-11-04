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

    precio1=document.getElementById("txtIdPrecioUno").value;
    precio2=document.getElementById("txtIdPrecioDos").value;
    precio3=document.getElementById("txtIdPrecioTres").value;

    precio1=parseFloat(precio1);
    precio2=parseFloat(precio2);
    precio3=parseFloat(precio3);

    resultado=precio1+precio2+precio3;
    
    resultado=resultado.toFixed(2);
    
    alert("La suma de los tres valores ingresados es "+resultado);
}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let promedio;

    precio1=document.getElementById("txtIdPrecioUno").value;
    precio2=document.getElementById("txtIdPrecioDos").value;
    precio3=document.getElementById("txtIdPrecioTres").value;

    precio1=parseFloat(precio1);
    precio2=parseFloat(precio2);
    precio3=parseFloat(precio3);

    suma=precio1+precio2+precio3;

    promedio=suma/3;

    promedio=promedio.toFixed(2);
    
    alert("El promedio de los tres valores ingresados es "+promedio);
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let preciofinal;
    let iva;
    let sumaiva;
    let suma;

    iva=21;

    precio1=document.getElementById("txtIdPrecioUno").value;
    precio2=document.getElementById("txtIdPrecioDos").value;
    precio3=document.getElementById("txtIdPrecioTres").value;

    precio1=parseFloat(precio1);
    precio2=parseFloat(precio2);
    precio3=parseFloat(precio3);

    suma=precio1+precio2+precio3;
    
    sumaiva=suma*iva/100;

    preciofinal=suma+sumaiva;

    preciofinal=preciofinal.toFixed(2);
    
    alert("El precio final de los tres valores ingresados es "+preciofinal);
}
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres