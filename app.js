const productosContainer = document.querySelector('#contenedor-productos')
const carritoContenedor  = document.querySelector('#carrito-contenedor')

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')
 

const carrito = []


stockProductos.forEach ((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')

    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Color: ${producto.color}</p>
    <p class="precioProducto">Precio: $${producto.precio}</p>
    <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    
    `

    productosContainer.append(div)
})


const agregarAlCarrito = (id) => {
    const item = stockProductos.find ( (producto) => producto.id === id)
    carrito.push(item)

    renderCarrito()
    renderCantidad()
    renderTotal()

    console.log(carrito)
}

const renderCarrito = () => {
    carritoContenedor.innerHTML = ''

    carrito.forEach ( (item) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
        <p>${item.nombre}</p>
                    <p>Precio: $${item.precio}</p>`

    
    carritoContenedor.append(div)
    })
}


const renderCantidad = () => {
    contadorCarrito.innerText = carrito.length
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio
    })

    precioTotal.innerText = total
}
