

let barrio = prompt("ingrese su barrio").toLowerCase()
let costoEnvio

if((barrio == 'flores') || (barrio == 'palermo') ||  (barrio == 'villa urquiza') || (barrio == 'mataderos')) {

monto = Number(prompt("ingrese el monto de la compra"))    

    switch (barrio) {
        case "flores":
            costoEnvio = 100
            break
        case "palermo":
            costoEnvio = 200
            break
        case "villa urquiza":
            costoEnvio = 150
            break
        case "mataderos":
            costoEnvio = 250
    }
   
alert("El precio total con envio al barrio de " + barrio + " es de: " +
(monto + costoEnvio) + " pesos" )} 
 
else {
    alert("No hacemos envios a esa zona")
 }
