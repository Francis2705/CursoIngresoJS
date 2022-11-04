/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
		var num1;
		var num2;
		var total;
		var mensaje;

		num1=document.getElementById("txtIdNumeroUno").value;
		num2=document.getElementById("txtIdNumeroDos").value;

		num1=parseFloat(num1);
		num2=parseFloat(num2);

		total=num1 + num2;

		mensaje="La suma es " + total;

		alert(mensaje);

}

function restar()
{
		var num1;
		var num2;
		var total;
		var mensaje;

		num1=document.getElementById("txtIdNumeroUno").value;
		num2=document.getElementById("txtIdNumeroDos").value;

		num1=parseFloat(num1);
		num2=parseFloat(num2);

		total=num1 - num2;

		mensaje="La resta es " + total;

		alert(mensaje);
}

function multiplicar()
{ 
		var num1;
		var num2;
		var total;
		var mensaje;

		num1=document.getElementById("txtIdNumeroUno").value;
		num2=document.getElementById("txtIdNumeroDos").value;

		num1=parseFloat(num1);
		num2=parseFloat(num2);

		total=num1 * num2;

		mensaje="La multiplicación es " + total;

		alert(mensaje);
}

function dividir()
{
		var num1;
		var num2;
		var total;
		var mensaje;

		num1=document.getElementById("txtIdNumeroUno").value;
		num2=document.getElementById("txtIdNumeroDos").value;

		num1=parseFloat(num1);
		num2=parseFloat(num2);

		total=num1 / num2;

		mensaje="La división es " + total;

		alert(mensaje);
}
/*Siempre que tengo más de una función, tengo que declarar las variables,
por más que sean las mismas.*/
//Hay que usar let en vez de var
/*El orden de signos en cuanto a prioridad es (lo mismo que en la vida real):
1 Paréntesis
2 Multiplicación, división y resto (módulo)
3 Suma y resta*/