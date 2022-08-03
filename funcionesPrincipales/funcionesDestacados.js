const mostrarDestacados = () => {
destacados.forEach((destacado) => {
    const div = document.createElement("div");       //primero inyecto el html al doom
    div.classList.add("card");
    div.innerHTML =
                        `<div class="card-image">
                        <img class="card-image" src=${destacado.img}></div>
                        <p class="card-title">${destacado.nombre}</p>
                        <p class="card-title precioProducto">Precio:${destacado.precio}</p>
                        <button id="agregarDestacado${destacado.id2}" class="boton-agregar">Agregar al carro <i class="fas fa-shopping-cart"></i><button>
                        
                    </div>
                    `
    contenedorProductos2.appendChild(div);

    const boton = document.getElementById(`agregarDestacado${destacado.id2}`)


    boton.addEventListener('click', () => {
        agregarDestacados(destacado.id2)     //le agrege el event al boton y ejecuto la funcion agregarAlCarrito
        
    })
})
}


const agregarDestacados = (destaId) => {
    const existe = carrito.find (desta => desta.id2 === destaId) 

    if (existe){ 
        const desta = carrito.map (prod => { 
            if (destaId === prod.id2){
                prod.cantidad++
            }
        })
    } else { 
        const item = destacados.find((desta) => desta.id2 === destaId)
       
        carrito.push(item)
    }
    actualizarDestacado() 
    guardarCarritoStorage(carrito);

    
};

const actualizarDestacado = () => {

       //Cada vez que yo llame a actualizardestacado, lo primero q hago
                                     //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info actualizado
    contenedorCarrito.innerHTML = ""
                                                //lo mismo que en el paso 1 creo como se va a ver dentro del modal con sus respectivas
                                                //propiedades y clases que estan en los estilos, le hago un appendchil
    carrito.forEach((desta) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p><span id="nombre">${desta.nombre}</span></p>
        <p>Precio:$<span id="precio">${desta.precio}</span></p>
        <p>Cantidad: <span id="cantidad">${desta.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${desta.id2})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

    })
    
    contadorCarrito.innerText = carrito.length    //le agrego el contador con un innertext
    
    precioTotal.innerText = carrito.reduce((acc, desta) => acc + desta.cantidad * desta.precio, 0) //suma del total

    

    
    
};