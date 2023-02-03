/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;

	importe = txtIdImporte.value;
	importe = parseFloat(importe);

	resultado = importe * 0.75;

	txtIdResultado.value = resultado.toFixed(2); //.toFixed(n) siendo n la cantidad de decimales que busco
}
