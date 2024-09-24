const input_id = document.querySelector('#input_id_pizza')
const boton_agregar = document.querySelector('#agregar_boton')
const cardsContainer = document.querySelector('.contenedor_cards')
const errorElement = document.querySelector('.error')



const agregarProducto = () => {
    resetErrorMessage() 
    idCaptured = capturarValores(input_id)  
    validation = isValid(idCaptured)
    trowErrorMessage(validation)
     pizza = getPizzaById(idCaptured)
     localStorage.setItem('pizza', JSON.stringify(pizza))
    renderPizza(pizza, cardsContainer)
    
}




const eventListenners = () => {
    boton_agregar.addEventListener('click', agregarProducto)
    document.addEventListener('DOMContentLoaded', () => {
        console.log("Documento cargado");
        chargePreviousState();
    });
    
}

const init = () => {
    eventListenners();
}


init()