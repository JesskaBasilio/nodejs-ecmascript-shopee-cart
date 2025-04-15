import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];
const myWhishList = [];



const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWhishList, item2);

console.log("Shopee cart TOTAL IS:");
await cartService.calculateTotal(myCart);