/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno = parseInt(txtIdNumeroUno.value);
	let numeroDos = parseInt(txtIdNumeroDos.value);

	let sumaNumeros = numeroUno + numeroDos;

	alert("la suma es " + sumaNumeros);
}

