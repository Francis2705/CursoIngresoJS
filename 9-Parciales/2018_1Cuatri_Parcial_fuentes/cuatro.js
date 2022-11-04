function mostrar()
{
    let num1;
    let num2;
    let suma;
    let resta;

    num1 = prompt("Ingrese un número");
    num2 = prompt("Ingrese un número");

    if(num1 == num2)
    {
        alert(num1 + num2);
    }
    else
    {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        suma = num2 + num1;
        resta = num1 - num2;
        
        if(num1 > num2)
        {   
            alert(resta);
        }
        else
        {
            alert(suma);
            
            if(suma > 10)
            {
                alert("La suma es " + suma + " y superó el 10");
            }
        }
    }
}