const capturarValores = (input) => {
    return input.value
}
const getPizzaById = (id) => {
    return pizzas.find(pizza => pizza.id == id)
}
const isValid = (id) => {
    return pizzas.some((pizza) => pizza.id == id);
}
const renderPizza = (object, div) => {
    const {id, nombre, precio, ingredientes, imagen} = object
    div.innerHTML = `<div class="card-container">
        <img src="${imagen}" alt="">
        <h2>${nombre}</h2>
        <P>Precio: $${precio}</p>
    </div>`

}
const trowErrorMessage = (condition) => {
    if (!condition){
        errorElement.classList.remove('hidden')


    }

}
const resetErrorMessage = () => {
    errorElement.classList.add('hidden')
}
const chargePreviousState = () => {
    const pizzaObject = JSON.parse(localStorage.getItem('pizza'));
    if (pizzaObject) {
        renderPizza(pizzaObject, cardsContainer);
    }
}