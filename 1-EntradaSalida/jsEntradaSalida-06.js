/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno = txtIdNumeroUno.value;
	let numeroDos = txtIdNumeroDos.value;

	let intNumeroUno = parseInt(numeroUno);
	let intNumeroDos = parseInt(numeroDos);

	let sumaNumeros = intNumeroUno + intNumeroDos;

	alert("la suma es " + sumaNumeros);
}

