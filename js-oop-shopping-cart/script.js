/**
 * 1. Product Class: Blueprint for item data
 */
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

/**
 * 2. ShoppingCartItem Class: Links a product with a quantity
 */
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate total for this specific line item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

/**
 * 3. ShoppingCart Class: Manages the collection of items
 */
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method: Add items
    addItem(product, quantity) {
        const cartItem = new ShoppingCartItem(product, quantity);
        this.items.push(cartItem);
        console.log(`✅ Added: ${product.name}`);
    }

    // Method: Remove items by ID
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        console.log(`❌ Removed Product ID: ${productId}`);
    }

    // Method: Get grand total
    getCartTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Method: Display cart items
    displayCart() {
        console.log("\n--- SHOPPING CART REPORT ---");
        if (this.items.length === 0) {
            console.log("Your cart is empty.");
        } else {
            this.items.forEach(item => {
                console.log(`${item.product.name} (x${item.quantity}) - $${item.getTotalPrice()}`);
            });
            console.log(`TOTAL AMOUNT: $${this.getCartTotal()}`);
        }
        console.log("----------------------------\n");
    }
}

// --- TESTING THE IMPLEMENTATION ---

// 1. Create instances of Products
const prod1 = new Product(1, "Wireless Mouse", 25);
const prod2 = new Product(2, "Mechanical Keyboard", 75);
const prod3 = new Product(3, "Gaming Monitor", 200);

// 2. Initialize the Cart
const myCart = new ShoppingCart();

// 3. Add items
myCart.addItem(prod1, 2); // 2 mice
myCart.addItem(prod2, 1); // 1 keyboard
myCart.addItem(prod3, 1); // 1 monitor

// 4. Display the initial cart
myCart.displayCart();

// 5. Remove an item (the keyboard)
myCart.removeItem(2);

// 6. Display final cart status
myCart.displayCart();