# Linked Lists

## Exercises

1. What are some pros and cons of using linked lists instead of arrays?
    1. Linked List
        * Pros: variable/dynamic size; ease of insertion/deletion of nodes
        * Cons: No random access - must access values sequentially, poor performance; additional memory needed to save pointer(s)
    1. Arrays
        * Pros: performance; lower memory usage vs linked list (data stored with index, location inherently known and no need for pointers)
        * Cons: requires sequential memory allocation;expensive and slow insertion and deletion; fixed size;
2. Come up with a real world example of a linked list.
    * Music player playlists! Singly linked lists can hold the current song as a node and the following song as a pointer for the following song. Doubly-linked lists can track the prior track as well.
  
## Programming Questions

1. The linked list `push` function should take a value, create a node, and add it to the the end of a list. Below is pseudocode for a `push` function for a singly linked list. However, there is something wrong with it. Submit both an explanation of the bug and a functional implementation of the method.

``` JavaScript
    FUNCTION push(element)
    CREATE node
    SET node.value TO element
    SET node.next TO null

    IF the head node does not exist
    THEN SET head to node
    ELSE
    SET current to head
    SET current.next to node
    END IF
    END FUNCTION
```

**Explanation**
I actually see two things that might be wrong here:
1. if there is no head, we're instructed to set the node we're creating as the head, but our list doesn't have a tail/end. AFAIK linked lists must have a starting node (head) and a finish node (tail). One could infer that if there's no node after head then it is also the tail, but that's not explicitly defined in the code.
2. this might not be a proper bug, but what is "current"? it is not explicitly declared and might cause an error when coding since we're calling a variable that isn't previously declared.

``` JavaScript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this;
    }
}

```


1. Given an unsorted singly linked list, remove all duplicates from the linked list.  
   **Example**  
   Input: `a -> c -> d -> d -> a`  
   Output: `a -> c -> d`

**Explanation**
The solution to this exercise will revolve around two loops. The outer loop traverses our linked list while our inner loop traverses our list a second time, comparing the value of each node to the head of the outer loop. If a match is found, it calls a custom `remove` method to delete duplicates from our loop. Finally, we call `this` to return our updated linked list.

``` JavaScript
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

list.removeDuplicates() //returns a->c->d
```

2. Given an unsorted singly list, reverse it.  
   **Example**  
   Input: `a -> b -> c -> d`  
   Output: `d -> c -> b -> a`

**EXPLANATION**
to solve this problem, we made a custom method within our `LinkedList` class

``` JavaScript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

```