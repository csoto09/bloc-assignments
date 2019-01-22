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
