//rest-medium.js
// Gathering multiple arrays into one 'allCarts' nested array
function mergeCarts(...allCarts) {
    let masterCart = [];
    
    allCarts.forEach(cart => {
        // We use spread (...) to push items from each cart into the master
        masterCart.push(...cart);
    });

    return masterCart;
}

const electronics = ["Phone", "Laptop"];
const gaming = ["PS5", "Steam Deck"];
const office = ["Chair", "Monitor"];

const finalShoppingList = mergeCarts(electronics, gaming, office);
console.log("Master Shopping List:", finalShoppingList);
// Output: ["Phone", "Laptop", "PS5", "Steam Deck", "Chair", "Monitor"]