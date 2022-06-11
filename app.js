

// let barrio = prompt("ingrese su barrio").toLowerCase()
// let costoEnvio

// if((barrio == 'flores') || (barrio == 'palermo') ||  (barrio == 'villa urquiza') || (barrio == 'mataderos')) {

// monto = Number(prompt("ingrese el monto de la compra"))    

//     switch (barrio) {
//         case "flores":
//             costoEnvio = 100
//             break
//         case "palermo":
//             costoEnvio = 200
//             break
//         case "villa urquiza":
//             costoEnvio = 150
//             break
//         case "mataderos":
//             costoEnvio = 250
//     }
   
// alert("El precio total con envio al barrio de " + barrio + " es de: " +
// (monto + costoEnvio) + " pesos" )} 
 
// else {
//     alert("No hacemos envios a esa zona")
//  }



//AGREGAR ARRAYS 


class Producto {
    constructor(id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const productos = [
    new Producto(1, "manta rosa", 500),
    new Producto(2, "gorro gris", 300),
    new Producto(3, "frazada azul", 1200),
]


function agregarProducto  () {
    let id = Number(prompt("ingrese id del producto"))
    let nombre = prompt("ingrese nombre del producto")
    let precio = Number(prompt("ingrese el precio"))

    productos.push (new Producto(id, nombre, precio))
}

console.log(productos)

agregarProducto()

console.log(productos)
