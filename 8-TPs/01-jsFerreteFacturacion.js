/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/



function Sumar () 
{
    let valorUno =	parseInt(txtIdPrecioUno.value);
    let valorDos = parseInt(txtIdPrecioDos.value);
    let valorTres = parseInt(txtIdPrecioTres.value);

    let resultadoSuma = valorUno + valorDos + valorTres;

    alert("La suma es de " + resultadoSuma);
}
function Promedio () 
{
    let valorUno =	parseInt(txtIdPrecioUno.value);
    let valorDos = parseInt(txtIdPrecioDos.value);
    let valorTres = parseInt(txtIdPrecioTres.value);

    let resultadoPromedio = (valorUno + valorDos + valorTres)/3;

    alert("El promedio es de " + resultadoPromedio);
}
function PrecioFinal () 
{
    let valorUno =	parseInt(txtIdPrecioUno.value);
    let valorDos = parseInt(txtIdPrecioDos.value);
    let valorTres = parseInt(txtIdPrecioTres.value);

    let resultadoPrecioFinal = (valorUno + valorDos + valorTres)*1.21;

    alert("El precio final es de " + resultadoPrecioFinal);
}