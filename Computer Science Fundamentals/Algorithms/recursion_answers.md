# Recursion

1. Define and compare recursion and iteration.
   * recursive function: function that calls itself again to repeat the code
   * iterative function: a function that loops to repeat some part of its code.
   * recursive functions will likely be more resource intensive and use up more stack space than iterative functions. Iterative functions might be more difficult to implement.
1. Name five algorithms that are commonly implemented by recursion
   * fibonacci
   * finding the length of a binary tree.
   * finding factorials
   * quick sort
   * find a node in a linked list.
1. When should you use recursion and when should you avoid recursion? Give examples
   * Use recursion when:
     * when an algorithm can more easily be expressed recursively (fibonacci is a good example)
     * sometimes it can be easier to write code recursively rather than iteratively.
   * Avoid recursion when:
     * system resources are at a premium
     * when speed is a priority
1. Compare the recursive and iterative solutions to the three algoritms from the checkpoint (`factorial`, `maximum`, `fibonacci`). What is similar, and what is different?
   1. factorial:
      * similarities: both begin by setting a base case if input is less than 0
      * differences: recursive solution provides another simple base case when input is 0 or 1, allowing for a quick escape with those values. After this, code is called only once more and then, simple arithmetic is performed before returning our result. Iterative code achieves the same base case by actually calling a for loop with input 1 and comparing it with the loop clause before returning the result. Otherwise loop iterates n-1 times until i = 2, updating the `result` variable every time until the clause is met.
   1. maximum:
      * similarities: similar in keeping a separate value for a "current maximum".
      * differences: recursive solution is notably more complicated, requiring the use of more variables and mutating our original array to find a solution whereas the iterative version simply loops through each value and compares it to the "current maximum"
   1. fibonacci:
      * similarities: both are similar in that they provide early escape clauses for values below 3. Pseudocode for both is relatively simple and concise.
      * differences: vastly different approaches - recursive simply calls itself twice (*n-2* and *n-1*) before adding up the output, whereas the iterative version needs to set at least 3 temporary variables within the function and relies on constantly reassigning the values until reaching the desired solution.
1. Given a multi-dimensional collection (such as an array) where the number of dimensions is unknown, write a recursive algorithm to count the number of items in the entire collection.

``` JavaScript
function countItems(array) {
    let itemCount = 0;

    if (!array.length) return null;

    array.forEach(element => {
        if (element.constructor === Array) {
            itemCount += countItems(element);
        } else {
            itemCount++;
        }
    });
    return itemCount;
}


let test1 = [3, 5, 8, 14, 19];
let test2 = [6, [10, 12], 14, 16, 20, 3, 5, 8, 14, 19];
let test3 = [6, [10, 12, 3, 5, 8], 14, 16, 20, 3, 5, 8, 14, 19];
let test4 = [4, [5, [7, 9],22], [11, 12, 14], 15, 18, 19];
```

1. A palindrome is a word or phrase whose spelling is the same in either direction (e.g., racecar). Write a recursive algorithm to determine if a given word or phrase is a palindrome.

``` JavaScript
function isPalindrome(word) {
    word = word.toLowerCase();
    let endingIndex = word.length - 1;
//     console.log(`${word} - letters remaining: ${word.length}`)
    if (word.length <= 1) return true;
    if (word[0] === word[endingIndex]) {
        return isPalindrome(word.slice(1, endingIndex))
    }
    return false;
}


isPalindrome('Sarah'); // return false;
isPalindrome('tacocat'); // return true
isPalindrome('Hannah'); // return true
isPalindrome('bottle'); // return false;
isPalindrome('PALINdROme'); // return false;
```

1. Google Easter Egg: Google the term "recursion". Google will prompt you with "Did you mean: **recursion**". Explain why this behavior exhibits properties of recursion.
   * upon initiating the search, user is prompted to run the search again. this calls the same command on the server that's delivering the query.