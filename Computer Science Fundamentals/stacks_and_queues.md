# Stacks and Queues

1. What's the main difference between a stack and a queue?
    * The order in which the data is processed: a stack uses LIFO (last one added is the first one to be processed), while queues use FIFO (first one added is the first one to be processed - like standing in line to check out at the grocery store).
2. What are the similarities between stacks and queues?
    *
3. Imagine you are an engineer tasked with implementing the UNDO and REDO options in a word processor such as Microsoft Word. Which data structure would you use for each option and why?
    * For undoing, queueing would not work because in that situation, the first item would be the oldest tracked action in an array of steps. Using FIFO would return the steps out of order (assuming we would want to undo by moving incrementally backwards in time). Thus we would use LIFO/stack.
    * I think that redoing a step would also require us to use LIFO. Traversing an array of steps that were "undone" using the UNDO command would be easier with LIFO as it would take less operations to find the next step than with FIFO.

## Programming Questions

1. Given a string, reverse it using a stack. For example, the string `"Bloc!"` should be converted to `"!colB"`.

``` JavaScript
let oldString = "sunset";

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {

        newString += str[i]
    }
    return newString;
}
console.log(reverseString(oldString));
```

1. Implement the `pop` method of a stack using one queue. Make a FIFO data structure mirror the functionality of a LIFO data structure. Since the internal list is not the same as defined in the checkpoint, it may help to rewrite the pseudocode first.

... I think I understand this question.

```JavaScript
let groceryList = ["apples", "bananas", "cheese", "deli meats"]

function popQueue(arr) {
    let newList = [];
    let pop = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == arr[0]) {
            pop.push(arr[i]);
        } else {
            newList.push(arr[i]);
        }
        groceryList = newList;
    }
    return pop;
}

console.log(popQueue(groceryList));
console.log(groceryList);
```

1. Implement the `enqueue` and `dequeue` methods in the checkpoint inside your own `Queue` class.

```JavaScript

class Queue

```