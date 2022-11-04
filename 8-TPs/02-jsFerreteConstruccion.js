/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
function Rectangulo () 
{
    let ancho;
    let largo;
    let perímetro;
    let alambre;

    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    largo=parseFloat(largo);
    ancho=parseFloat(ancho);

    perímetro=(largo+ancho)*2;

    alambre=perímetro*3;

    alert("Se necesita comprar " +alambre+ " metros de alambre");
}
function Circulo () 
{
	let perímetro;
    let radio;
    let alambre;
    const PI=3.14;

    radio=document.getElementById("txtIdRadio").value;
    radio=parseFloat(radio);
    
    perímetro=2*PI*radio;

    alambre=perímetro*3;

    alert("Se necesita comprar " +alambre+ " metros de alambre");


//en la misma linea que declaro la constante le asigno el valor
}
function Materiales () 
{
	let ancho;
    let largo;
    let superficie;
    let cemento;
    let cal;

    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    largo=parseFloat(largo);
    ancho=parseFloat(ancho);
    
    superficie=largo*ancho;

    cemento=superficie*2;
    cal=superficie*3;

    alert("Para un contrapiso de "+superficie+"m2, necesito comprar "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
}
/* El perímetro de una figura es la suma de todos sus lados
El del rectángulo es 2*altura+2*lado
El del cuadrado es 4*l */