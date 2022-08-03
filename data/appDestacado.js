const getDestacado = async () =>
{
    try
    {
        const response2 = await fetch("data/data2.json");
        const data2 = await response2.json();
        mostrarDestacados(data2)
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

getDestacado()