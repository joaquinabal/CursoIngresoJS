/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaF = parseInt(txtIdTemperatura.value);

    let temperaturaC = temperaturaF - 32;

    alert(temperaturaF + "Fahrenheit son " + temperaturaC + " centigrados.");
}

function CentigradosFahrenheit () 
{
    let temperaturaC = parseInt(txtIdTemperatura.value);

    let temperaturaF = temperaturaC + 32;

    alert(temperaturaF + " centigrados son " + temperaturaC + " Fahrenheit.");
}
