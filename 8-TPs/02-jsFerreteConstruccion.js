/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
function Rectangulo () 
{
    let altura;
    let lado;
    let perimetro;
    let totalAlambre;

    altura = document.getElementById("txtIdLargo").value;
    lado = document.getElementById("txtIdAncho").value;

    altura = parseFloat(altura);
    lado = parseFloat(lado);

    perimetro = altura*2 + lado*2;
    totalAlambre = perimetro*3;

    alert("La cantidad de metros de alambre a comprar es " + totalAlambre);
}
function Circulo () 
{
    let radio;
    let perimetro;
    let totalAlambre;
    const PI = 3.14;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);

    perimetro = 2*PI*radio;
    totalAlambre = perimetro*3;

    alert("La cantidad de metros de alambre a comprar es " + totalAlambre)
} //en la misma linea que declaro la constante le asigno el valor
function Materiales () 
{
    let lado1;
    let lado2;
    let perimetro;
    let totalCal;
    let totalCemento;

    lado1 = document.getElementById("txtIdLargo").value;
    lado2 = document.getElementById("txtIdAncho").value;

    lado1 = parseFloat(lado1);
    lado2 = parseFloat(lado2);

    perimetro = lado1*lado2;
    totalCal = perimetro*3;
    totalCemento = perimetro*2;

    alert("Para un contrapiso de " + perimetro + " m2, necesito comprar " + totalCal + " bolsas de cal y " + totalCemento + " bolsas de cemento");
}
/* El perímetro de una figura es la suma de todos sus lados
El del rectángulo es 2*altura+2*lado
El del cuadrado es 4*l */