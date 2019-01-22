# Exercises

1. What is a hash table?
   * Data structure used to save key-value pairs. Similar to arrays, but keys are not ordered. Uses a hashing function to determine where to store data in our structure.
2. What is hashing?
   * a function in which we take a piece of data (typically a string) and convert it into a numerical index.  
3. How does a hash table store data?
   * stores data by linking each value to a unique key, similar to JS objects.
4. How are hash tables and objects different?
    * objects store a static number of distinct values of different types. Hash tables are appropriate for an indeterminate number of consistently formatted values, each with an identifier.
5. Determine whether you would use a hash table or an object to store each of the following pieces of data:
   * A list of pets and their unique names. - **Object**
   * The name, age, and the birthday of your best friend. - **OBJECT**  
   * The name and location of every company in a given city. - **HASH**
   * All of the books checked out from a library by a particular individual. - **Hash**
   * The primary and secondary phone numbers for a contact. - **Object**
6. Build a system that allows a sales associate to enter a customer's name, address, and phone number into the system and look up customers using their phone numbers. Store this information in a hash table.

``` JavaScript
let hash = function (str) {
    let result = 0;
    for(let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i);
    }
    return result;
}

class Customer {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    
}

```
7. Build a system that allows a store owner to track their store's inventory using a hash table for storage.
8. Build a system that allows digital copies of newspapers to be entered and searched by publisher and publication date. Use hash tables to store the necessary data.