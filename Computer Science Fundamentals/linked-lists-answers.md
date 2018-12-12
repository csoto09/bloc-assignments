## Exercises
1. What are some pros and cons of using linked lists instead of arrays?

2. Come up with a real world example of a linked list.

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