// Build a system that allows a store owner to track their store's inventory using a hash table for storage.

//required data: product name, quantity

class Inventory {
    constructor() {
        this.size = 1000;
        this.products = {};
    }

    hash(key) {
        let result = 0;
        for (let i = 0; i < key.length; i++) {
            result += key.charCodeAt(i);
        }
        return result % this.size;
    }

    addProduct(product) {
        let key = product.Name;
        this.products[this.hash(key)] = product;
    }

    search(key) {
        let query = this.products[this.hash(key)];
        let result = "No results found.";
        if (query === undefined) { return result }
        if (query.Name === key) { result = query; }
        return result;
    }
}

let store = new Inventory();

store.addProduct({ Name: '4k Television', Quantity: 25 });
store.addProduct({ Name: 'Bluetooth Soundbar', Quantity: 80 });


console.log(store.products);

console.log(store.search('Wireless Headphones'));
console.log(store.search('Bluetooth Soundbar'));