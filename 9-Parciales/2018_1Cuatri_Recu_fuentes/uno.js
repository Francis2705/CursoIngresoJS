function mostrar()
{
    let ancho;
    let largo;
    let per;

    ancho = prompt("Ingrese el ancho del rectángulo");
    largo = prompt("Ingrese el largo del rectángulo");

    ancho = parseFloat(ancho);
    largo = parseFloat (largo);

    per = 2 * ancho + 2 * largo;
    
    alert("El perímetro del rectángulo es " + per);
}
