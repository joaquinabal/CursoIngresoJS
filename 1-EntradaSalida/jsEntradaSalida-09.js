/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;

	sueldo = txtIdSueldo.value;
	sueldo = parseFloat(sueldo);

	resultado = sueldo * 1.1;

	txtIdResultado.value = resultado.toFixed(2); //.toFixed(n) siendo n la cantidad de decimales que busco
}
