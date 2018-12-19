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
```
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

2. Given an unsorted singly linked list, remove all duplicates from the linked list.  
   **Example**  
   Input: `a -> c -> d -> d -> a`  
   Output: `a -> c -> d`
3. Given an unsorted singly list, reverse it.  
   **Example**  
   Input: `a -> b -> c -> d`  
   Output: `d -> c -> b -> a`