function mostrar()
{
	let edad;
	let estadocivil;
	
	edad=document.getElementById("txtIdEdad").value;
	estadocivil=document.getElementById("estadoCivil").value;

	edad=parseInt(edad);

	if(edad>17 && estadocivil=="Soltero")
	{
		alert("Es soltero y no es menor");
	}
}