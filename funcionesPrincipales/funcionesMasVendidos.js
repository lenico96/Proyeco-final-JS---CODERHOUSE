const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')
const buttons = document.getElementsByClassName("boton-agregar");












//array carrito
let carrito = []
// 1 cards//
const mostrarProductos = () => 
{
    const contenedorProductos = document.getElementById("producto-contenedor");
    productos.forEach((producto) => {
        const div = document.createElement("div");       //primero inyecto el html al doom
        div.classList.add("producto");
        div.innerHTML =
                            `<div class="card-image">
                            <img class="card-image" src=${producto.img}></div>
                            <p class="card-title">${producto.nombre}</p>
                            <p class="card-title precioProducto">Precio:${producto.precio}</p>
                            <button  id="agregar${producto.id}"  class="boton-agregar">Agregar al carro <i class="fas fa-shopping-cart"></i><button>
                            
                        </div>
                        `
        contenedorProductos.appendChild(div);

        const boton = document.getElementById(`agregar${producto.id}`)


        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)     //le agrege el event al boton y ejecuto la funcion agregarAlCarrito

            
            
        })
    });
};


// 2 funcion agregar carro
const agregarAlCarrito = (prodId) => {
    const existe = carrito.find (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = productos.find((prod) => prod.id === prodId)
       
        carrito.push(item)
    }
    actualizarCarrito() 
    

    
};
// 3 funcion actualizar
const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""    //Cada vez que yo llame a actualizarCarrito, lo primero q hago
                                     //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info actualizado

                                                //lo mismo que en el paso 1 creo como se va a ver dentro del modal con sus respectivas
                                                //propiedades y clases que estan en los estilos, le hago un appendchil
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p><span id="nombre">${prod.nombre}</span></p>
        <p>Precio:$<span id="precio">${prod.precio}</span></p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

    })
    contadorCarrito.innerText = carrito.length    //le agrego el contador con un innertext
    
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0) //suma del total

    guardarCarritoStorage(carrito);
    

    
    
};

//4. funcion eliminar carrito
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito() //llamo a la funcion ya que en la funcion anterior en el button cree un evento onclick con el nombre de la funcion
}

//4 boton vaciar
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
    
})






//Storage carrito.

const cantidad = document.getElementById('cantidad')
const precioTotalFinal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

const guardarCarritoStorage = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
    

}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})



