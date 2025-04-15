//quais ações meu carrinho pode fazer

//casos de uso

// -> ✅ adicionar item no carrinho
async function addItem (userCart, item) {
    userCart.push(item); // adiciona um elemento dentro de um vetor
}

// -> calcular o total 
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}
// -> deletar item do carrinho
async function deleteItem(userCart, name) {
    
}

// -> remover item - diminuir um item
async function removeItem(userCart, index) {
    
} 

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
}

