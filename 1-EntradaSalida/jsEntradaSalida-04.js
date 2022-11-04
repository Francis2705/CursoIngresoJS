/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var datos;
//guardo en la variable lo que el usuario me introdujo en el prompt
	datos = prompt("Ingrese su dato");
//lo de la derecha se asigna a lo de la izquierda mediante el igual
//copio el dato que tengo guardado en la variable datos dentro de la caja de texto txtIdNombre
	document.getElementById("txtIdNombre").value = datos;

}

//txtIdNombre