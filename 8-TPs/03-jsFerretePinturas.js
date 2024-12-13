/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let pasaje;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);

    pasaje = (temperatura - 32)*5/9;
    
    alert(temperatura + " grados Fahrenheit son " + pasaje.toFixed(2) + " grados celcius");
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let pasaje;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);

    pasaje = temperatura*9/5 + 32;

    alert(temperatura + " grados celcius son " + pasaje.toFixed(2) + " grados Fahrenheit");
}