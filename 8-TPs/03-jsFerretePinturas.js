/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let gradosf;
    let gradosc;

    gradosf=document.getElementById("txtIdTemperatura").value;

    gradosf=parseFloat(gradosf);

    gradosc=(gradosf-32)*5/9;

    alert(gradosf+" grados fahrenheit son "+gradosc.toFixed(2)+" grados centígrados");
}

function CentigradosFahrenheit () 
{
	let gradosc;
    let gradosf;

    gradosc=document.getElementById("txtIdTemperatura").value;

    gradosc=parseFloat(gradosc);

    gradosf=gradosc*9/5+32;

    alert(gradosc+" grados centígrados son "+gradosf.toFixed(2)+ " grados fahrenheit");
}
