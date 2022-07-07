const productosContainer = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector('#carrito-contenedor')

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

const btnVaciar = document.getElementById('vaciarCarrito')

let carrito

const carritoenLS = JSON.parse(localStorage.getItem('carrito'))



stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')

    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Color: ${producto.color}</p>
    <p class="precioProducto">Precio: $${producto.precio}</p>
    <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="bi bi-cart"></i></button>   
    `

    productosContainer.append(div)
})


const agregarAlCarrito = (productId) => {
    const itemInCart = carrito.find((producto) => producto.id === productId)
    if(itemInCart){
        itemInCart.cantidad +=1
        showMensaje(itemInCart.nombre)
    } else {
        const {id,nombre,precio} = stockProductos.find((producto) => producto.id === productId)
    
        const itemToCart = {
            id,
            nombre,
            precio, 
            cantidad:1
        }
        carrito.push(itemToCart)
        
    showMensaje(nombre)
    }
   

    localStorage.setItem('carrito', JSON.stringify(carrito))
console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()


}


const removerDelCarrito = (id) => {
    const item = carrito.find((producto) => producto.id === id)
    item.cantidad -=1
    if (item.cantidad === 0){
        const indice = carrito.indexOf(item)
        carrito.splice(indice, 1)
    }
    Toastify({

        text: `Se elimino ${item.nombre} del carrito`,
        duration: 3000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }

    }).showToast();

    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()

}


const vaciarCarrito = () => {


    carrito.length = 0

    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()

}

btnVaciar.addEventListener('click', () => {
    Swal.fire({
        title: 'Estas seguro?',
        text: "Estas por vaciar el carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy seguro',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            vaciarCarrito()
            Swal.fire(
                'Listo!',
                'Tu carrito se vacio con exito',
                'success'
            )
            botonCerrar.click()
        }
    })
})

const renderCarrito = () => {
    carritoContenedor.innerHTML = ''

    carrito.forEach((item) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
        <p>${item.nombre}</p>
        <p>Precio: $${item.precio}</p>
        <p>Cantidad: ${item.cantidad}</p>
        <button onclick="removerDelCarrito(${item.id})" class="boton-eliminar"> <i class="bi bi-trash3"></i></button>`


        carritoContenedor.append(div)
    })
}


const renderCantidad = () => {
    contadorCarrito.innerText = carrito.reduce ((acc,prod)=> acc + prod.cantidad, 0)
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio * producto.cantidad
    })

    precioTotal.innerText = total
}

const showMensaje = (producto) => {
    Toastify({

        text: `Agregaste ${producto} al carrito`,
        duration: 3000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: "linear-gradient(to right, #00b09b, blueviolet)",
        },
onClick: ()=> {botonAbrir.click()}
    }).showToast();

}


if (carritoenLS) {
    carrito = carritoenLS

    renderCarrito()
    renderCantidad()
    renderTotal()

} else {
    carrito = []
}