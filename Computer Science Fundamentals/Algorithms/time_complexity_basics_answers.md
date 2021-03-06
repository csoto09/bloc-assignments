# Time Complexity

1. What is time complexity and what is its relation to algorithms?
    * estimate of the amount of time a program will take to run (in terms of the number of operations per input).
    * in relation to algorithms, TC is an estimate of the overall length of time the algorithm will take to complete all operations per input in its worst case scenario.
1. What is runtime?
    * in strict terms, runtime is the actual time duration of an algorithm. Also considered to be a synonym to Time Complexity (see above).
1. How is the runtime of an algorithm calculated?
    * If referring to runtime as synonymous with time complexity, then we must do the following:
        1. Add how many instructions an algorithm will execute per the size of its input
        1. Simplify the expression to the largest term *(recall we are looking for worst-case scenario)*
        1. drop any constants
    * Runtime is then expressed using Big O notation -- **O(n)**
1. Name the six types of algorithm growth rates we saw in this checkpoint and list them in order of most efficient to least efficient. Now Google another algorithmic growth rate not covered and place it in the correct spot in your list.
   1. O(1) - constant growth
   1. O(log n) - logarithmic growth
   1. 0(n^c), where 0 < c <1 - fractional power - **NOT COVERED**
   1. O(n) - linear growth
   1. O(n log n) - log-linear, also known as quasi-linear
   1. O(n^2) - quadratic growth
   1. Cubic Growth Rate - O(n^3) - **NOT COVERED**
   1. O(2^n) - exponential growth rate
   1. O(n!) - factorial growth rate - **NOT COVERED**
1. Choose one of the algorithmic growth rates from the last question and make a comparison to a real-life situation.
    * Linear growth - food shopping. if avocados cost $1.50 each and I buy 3 avocados, then the price of buying these avocados increases by a factor of *n*, with *n* being the amount of avocadoes I bought to make guacamole for my party.

1. Determine the time complexity of the following snippet of code. It is commonly known as a linear search. - ***O(n)***

```
FUNCTION linearSearch(array, target)
 FOR each number in the array
   IF number = target THEN
     RETURN true
   END IF
 END FOR
 RETURN false
END FUNCTION
```

1. Determine the time complexity of the following snippet of code. - ***O(n^2)***

```
FUNCTION foo(array)
 FOR each number in the array
   FOR each number in the array
     print "Hello"
   END FOR
 END FOR
END FUNCTION
```

1. Determine the time complexity of the following snippet of code. It is commonly known as the Fibonacci sequence.
***IF input is greater than 2, TC should be O(2^n)*** -- oops. i knew this was factorial and not quadratic but wrote the wrong one

```
FUNCTION fibonacci(number)
 IF number < 1 THEN
   ERROR
 ELSE IF number = 1 or 2 THEN
   RETURN 1
 ELSE
   CALL fibonacci WITH number - 2 RETURNING twoBack
   CALL fibonacci WITH number - 1 RETURNING oneBack
   RETURN twoBack + oneBack
 END IF
END FUNCTION
```

1. Out of the code snippets you just saw, which is the most time efficient?
   * Linear search, time complexity of o(n)