

class Producto {
    constructor(id, nombre, color){
        this.id = id
        this.nombre = nombre
        this.color = color 
    }
}

const productos = [
    new Producto(1, "manta", "rosa"),
    new Producto(2, "gorro",  "gris"),
    new Producto(3, "frazada", "azul"),
    new Producto(4, "manta", "verde"),
]


function agregarProducto  () {
    let id = Number(prompt("ingrese id del producto"))
    let nombre = prompt("ingrese nombre del producto")
    let color = prompt ("Ingrese el color")

    productos.push (new Producto(id, nombre, color))
}

console.log(productos)

agregarProducto()

console.log(productos)




let barrio = prompt("ingrese su barrio").toLowerCase()
let precio =  Number(prompt("ingrese el precio"))  

if((barrio == 'flores') || (barrio == 'palermo') ||  (barrio == 'villa urquiza') || (barrio == 'mataderos')) {
  

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
    alert( "El precio total con envio al barrio de " + barrio + " es de: " +
    (precio + costoEnvio) + " pesos" )
} 

else {
    alert("No hacemos envios a esa zona")
 }


//filtrar solo mantas

const manta = productos.filter( (el) => {
    return (el.nombre === "manta")
})
console.log(manta)


 