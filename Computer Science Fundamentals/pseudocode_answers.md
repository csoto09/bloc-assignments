# Intro to Pseudocode

## Short Answer

1. Why do programmers use pseudocode?
   * to brainstorm what some code should do before beginning to make it.
2. If you run pseudocode on your computer what would happen?
   * Best case scenario, it just won't run. Worst case scenario, things break depending on what you type and run (looking at you, "rm -rf /")

## Programming Assignment

Write the following algorithms in pseudocode:

1. Create a function that takes two numbers and prints out the greater number.

   ```
    INPUT first number
    INPUT second number
    IF first number is greater than second number THEN
        PRINT first number
    ELSE IF second number is greater than first number THEN
        PRINT second number
    END IF
    ```
2. Create a function that prints out the numbers from 1 to 100.
```
    INIT total to 0
    WHILE total is less than 100
        INCREMENT total
        PRINT total
    END WHILE
    ```
3. Create a function that searches for a specific entry in a phonebook.
    ```
    SET query to "Soto, Carlos";
    SET index to 0;
    SET phonebook to [{fullName:'Batchelor, Sarah',phoneNumber:'555-1234'},{fullName:'Chon, Michael',phoneNumber:'555-0987'},{fullName:'Stark, Tony',phoneNumber:'555-5555'},{fullName:'Soto, Carlos', phoneNumber:'867-5309'},{fullName:'Musk, Elon',phoneNumber:'111-1212'}];

    WHILE index is less than (query.length MINUS 1) 
        IF query[index] IS EQUAL TO phonebook.fullName
            return filteredArray containing matching phonebook items
        END IF
        INCREMENT index
    END WHILE
```

1. Using the pseudocode you wrote for the previous question, implement it in any computer language of your choice.

``` JavaScript

 function findNumber(query) {
  let phonebook = [{fullName:'Batchelor, Sarah',phoneNumber:'555-1234'},{fullName:'Chon, Michael',phoneNumber:'555-0987'},{fullName:'Stark, Tony',phoneNumber:'555-5555'},{fullName:'Soto, Carlos', phoneNumber:'867-5309'},{fullName:'Musk, Elon',phoneNumber:'111-1212'}];
  for(let i = 0; i <= query.length-1; i++) {
    if (query === phonebook[i].fullName) {
      return phonebook[i].phoneNumber;
    }
  }
}
console.log(findNumber('Soto, Carlos'));
```
