# Exercises

1. What is a hash table?
   * Data structure used to save key-value pairs. Similar to arrays, but keys are not ordered. Uses a hashing function to determine where to store data in our structure.
1. What is hashing?
   * a function in which we take a piece of data (typically a string) and convert it into a numerical index.  
1. How does a hash table store data?
   * stores data by linking each value to a unique key, similar to JS objects.
1. How are hash tables and objects different?
    * objects store a static number of distinct values of different types. Hash tables are appropriate for an indeterminate number of consistently formatted values, each with an identifier.
1. Determine whether you would use a hash table or an object to store each of the following pieces of data:
   * A list of pets and their unique names. - **Object**
   * The name, age, and the birthday of your best friend. - **OBJECT**  
   * The name and location of every company in a given city. - **HASH**
   * All of the books checked out from a library by a particular individual. - **Hash**
   * The primary and secondary phone numbers for a contact. - **Object**
1. Build a system that allows a sales associate to enter a customer's name, address, and phone number into the system and look up customers using their phone numbers. Store this information in a hash table.

``` JavaScript
class Customer {
    constructor() {
        this.size = 500;
        this.data = {};
    }

    hash(key) {
        let result = 0;
        for (let i = 0; i < key.length; i++) {
            result += key.charCodeAt(i);
        }
        return result % this.size;
    }

    addContact(contact) {
        let key = contact.Phone;
        this.data[this.hash(key)] = contact;
    }

    search(key) {
        let query = this.data[this.hash(key)];
        let result = "No results found.";
        if(query === undefined) {return result}
        if(query.Phone===key){result=query;}
        return result;
    }
}


let phonebook = new Customer();
phonebook.addContact({
    Name: 'Uncle Jesse',
    Phone: '867-5309',
    Address: '1709 Broderick Street'
})

console.log(phonebook.search('555-1212'));
console.log(phonebook.search('867-5309'));

```

1. Build a system that allows a store owner to track their store's inventory using a hash table for storage.

``` JavaScript
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
```

1. Build a system that allows digital copies of newspapers to be entered and searched by publisher and publication date. Use hash tables to store the necessary data.

``` JavaScript
//Build a system that allows digital copies of newspapers to be entered and searched by publisher and publication date. Use hash tables to store the necessary data


// input: Publisher name ('STRING'), publishing date ('YYYY-MM-DD')


class Periodicals {
    constructor() {
        this.size = 1000;
        this.data = {};
    }
    hash(key) {
        let result = 0;
        for (let i = 0; i < key.length; i++) {
            result += key.charCodeAt(i);
        }
        return result % this.size;
    }

    addPaper(paper) {
        let key = `${paper.ReleaseDate}+${paper.Publisher}`;
        this.data[this.hash(key)] = paper;
    }

    searchPeriodicals(date, pub) {
        let key = `${date}+${pub}`;
        let query = this.data[this.hash(key)];
        let result = "No results found.";
        if (query === undefined) { return result }
        if (`${query.ReleaseDate}+${query.Publisher}` === key) { result = query; }
        return result;
    }
}


let archive = new Periodicals()
archive.addPaper({
    Publisher: 'Providence Journal',
    ReleaseDate: '2019-01-22'
})
archive.addPaper({ReleaseDate: '1986-09-10', Publisher: 'El Vocero de Puerto Rico'})
archive.addPaper({ReleaseDate: '2018-05-01', Publisher: 'Attleboro Sun Chronicle'})
archive.data
// should see -->
// {
//     336: {Publisher: "Providence Journal", ReleaseDate: "2019-01-22"}
//     715: {ReleaseDate: "1986-09-10", Publisher: "El Vocero de Puerto Rico"}
//     767: {ReleaseDate: "2018-05-01", Publisher: "Attleboro Sun Chronicle"}
// }

console.log(archive.searchPeriodicals('2019-01-22','Attleboro Sun Chronicle')) // No results found.
console.log(archive.searchPeriodicals('1986-09-10','El Vocero de Puerto Rico')) // should find index 715

```