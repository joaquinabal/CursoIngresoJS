/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo = parseInt(txtIdLargo.value);
    let ancho = parseInt(txtIdAncho.value);
    let radio = parseInt(txtIdRadio.value);

    let rectangulo = ancho * largo * 3;
    alert("se necesitará de alambre: " + rectangulo + "m.");
}
function Circulo () 
{
    let largo = parseInt(txtIdLargo.value);
    let ancho = parseInt(txtIdAncho.value);
    let radio = parseInt(txtIdRadio.value);

    let circunferencia = radio * 2 * 3.14 * 3;

    alert("se necesitará de alambre " + circunferencia + "m.");
}
function Materiales () 
{
    let largo = parseInt(txtIdLargo.value);
    let ancho = parseInt(txtIdAncho.value);
    let radio = parseInt(txtIdRadio.value);

    let areaRectangulo = ancho * largo;

    let bolsaCemento = areaRectangulo * 2;
    let bolsaCal = areaRectangulo * 3;

    alert("se necesitará " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal.")
}