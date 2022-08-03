const getProduct = async () =>
{
    try
    {
        const response = await fetch("data/data.json");
        const data = await response.json();
        mostrarProductos(data)
        for (const btn of buttons)
{
    btn.addEventListener('click', () =>{
        Toastify({
            text: "Agregado con exito !",
            duration: 2000
          
    
        }).showToast()

    })
} 
    }
    catch(error)
    {
        console.log(error);
    }
}

getProduct()