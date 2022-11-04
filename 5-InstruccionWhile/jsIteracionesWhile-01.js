function mostrar()
{
	let contador = 0 ;
	//let acumulador = 0;

	//while es mientras. Mientras que la condición se cumpla, hacé tal cosa...
	/*Si contador es menor a 10, entonces entra en el while.
	Después se repite la operación hasta que la condición deje de ser verdadera.
	Cuando contador sea mayor o igual a 10, ya no va a entrar al while*/
	while(contador < 10) 
	/*usando el mayor o menor que solamente (sin igual), el número,
	en este caso el 10, me dice las veces que se va a repetir el while,
	siempre y cuando el contador esté en 0 (que es como tendría que programar siempre)*/
	{
		contador ++; //contador = contador + 1;
		
		//alert(contador);
		console.log(contador);
	}
}
//primer parte: inicializar el contador en 0
//segunda parte: lógica
//tercera parte: sumarle al contador uno