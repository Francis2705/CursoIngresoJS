/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
/*el document me sirve para relacionar la variable con el html,
luego de poner el punto,
me salen todas las opciones que puedo usar*/
/*getElementById dice literalmente tomar un elemento por su identificador*/
/*después del punto de txtIdNombre, me sale lo que puedo usar de
ese elemento citado*/
	nombreIngresado = document.getElementById("txtIdNombre").value;

	alert(nombreIngresado);

}
//txtIdNombre

