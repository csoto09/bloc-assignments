# Time Complexity

1. What is time complexity and what is its relation to algorithms?
1. What is runtime?
1. How is the runtime of an algorithm calculated?
1. Name the six types of algorithm growth rates we saw in this checkpoint and list them in order of most efficient to least efficient. Now Google another algorithmic growth rate not covered and place it in the correct spot in your list.
   1. O(1) - constant growth
   1. O(log n) - logarithmic growth
   1. 0(n^c), where 0 < c <1 - fractional power - **NOT COVERED**
   1. O(n) - linear growth
   1. O(n log n) - log-linear, also known as quasi-linear
   1. O(n^2) - quadratic growth
   1. O(2^n) - exponential growth rate
   1. O(n!) - factorial growth rate - **NOT COVERED**
1. Choose one of the algorithmic growth rates from the last question and make a comparison to a real-life situation.


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

1. Determine the time complexity of the following snippet of code.

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