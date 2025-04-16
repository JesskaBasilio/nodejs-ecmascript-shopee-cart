import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];
const myWishList = [];

console.log("Wellcome to your shopee cart!");

//criando três itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);
const item3 = await createItem("mouse", 20.00, 1);

// adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myWishList, item3);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myWishList, item3);

await cartService.displayCart(myCart);
await cartService.displayWishCart(myWishList);

// deletei dois itens ao carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);


await cartService.calculateTotal(myCart);

