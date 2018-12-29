class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let currentNode = this.head;
        let newTail = currentNode;
        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    // retrieve specific node by its position in list
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let currentNode = this.head;
        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    // change value of existing node
    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    // insert node to list a specific position;
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            this.push(val);
            return true;
        }
        if (index === 0) {
            this.unshift(val);
            return true;
        }
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    // remove node from list at a specific position
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let previousNode = this.get(index - 1);
        let removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;
        // console.log(`removed node ${index}`);
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    removeDuplicates() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        let count = 0
        while (currentHead !== null) {
            let curr = currentHead;
            while (curr.next !== null) {
                count++;
                if (currentHead.val === curr.next.val) {
                    let temp = curr.next;
                    curr.next = temp.next;
                    this.remove(count);
                } else {
                    curr = curr.next;
                }
            }
            currentHead = currentHead.next;
        }
        return this;
    }
}

let list = new LinkedList();
//a -> c -> d -> d -> a
list.push("a");
list.push("c");
list.push("d");
list.push("d");
list.push("a");