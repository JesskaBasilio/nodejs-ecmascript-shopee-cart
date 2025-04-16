//quais ações meu carrinho pode fazer

//casos de uso

// -> ✅ adicionar item no carrinho
async function addItem (userCart, item) {
    userCart.push(item); // adiciona um elemento dentro de um vetor
}

// -> ✅ calcular o total 
async function calculateTotal(userCart) {
    console.log("\nShopee cart TOTAL IS:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🛒 Total: ${result}`);
}
// -> ✅ deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1) {
        userCart.splice(index, 1);
    }
}

// -> ✅ remover item - diminuir um item
async function removeItem(userCart, item) {
    //1. encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //2. caso não encontre o item
    if(indexFound == -1){
        console.log("Item não encontrado.");
        return;
    }

    //3. item > 1 subtrair um item, 
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return; //usado para executar uma regra por vez
    }

    //4. item = 1 deletar o item
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return; //usado para executar uma regra por vez
    }

   
} 

// -> função para ver o que tem dentro do carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => { //percorre o que tem dentro do carrinho
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | Qtde: ${item.quantity}x | Subtotal ${item.subtotal()}`);
    });
}

async function displayWishCart(userCart) {
    console.log("\nShopee wish list:");
    userCart.forEach((item, index) => { //percorre o que tem dentro do carrinho
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | Qtde: ${item.quantity}x | Subtotal ${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
    displayWishCart
}

