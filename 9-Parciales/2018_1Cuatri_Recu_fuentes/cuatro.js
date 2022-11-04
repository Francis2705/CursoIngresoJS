function mostrar()
{
    let num1;
    let num2;
    let suma;

    num1 = prompt("Ingrese el primer número");
    num2 = prompt("Ingrese el segundo número");

    if(num1 == num2)
    {
        alert(num1 + num2);
    }
    else
    {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if(num1 > num2)
        {
            alert(num1 / num2);
        }
        else
        {
            suma = num1 + num2;
            alert(suma);
        }
    }
    if(suma < 50)
    {
        alert("La suma es " + suma + " y es menor a 50");
    }
}