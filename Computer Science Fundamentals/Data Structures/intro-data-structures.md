
1. A line of people at an amusement park ride.

   * The line is composed of members, represented as strings.
   * There is a front to the line, as well as a back.
   * When someone enters the line, place them at the end.
   * People may leave the line whenever they see fit, and those behind them take their place.
   * Given the above real-world information, use an array data structure to code the following solution.

    a) Use an array input: ["Vivian", "Ava", "Josh", "Patrick", "Mike"]

    ```JavaScript
    let disney = ["Vivian", "Ava", "Josh", "Patrick", "Mike"]
    ```

    b) Insert a new person, "Mary" at the end of the line. In other words, you should insert Mary after Mike.

    ``` js
    disney.push("Mary");
    ```

    c) Find a person in line named "Josh." This function should return the position of 2 in the array, (recall that arrays are 0-based).

    ``` js
    disney.indexOf("Josh"); //returns 2
    ```

    d) Find a person in line named "Emily." What should your function return if it does not find the item in the array?

    ``` JavaScript
    disney.includes('Emily'); // return true if found, false if not.
    ```

    e) What if Ava wants to allow a friend, "Melissa", to cut in line in front of her? How would you code this so Melissa appears before Ava?

    ``` JavaScript
    disney.splice(1,0,"Melissa"); // add Melissa to queue at index 1.
    console.log(disney); //confirm Melissa is now in front of Ava.
    ```
        
    f) If Patrick wants to leave the line, how would you delete him from the array?

    ``` js
    disney.indexOf('Patrick'); // returns 4
    disney.splice(4,1); //returns removed value of Patrick
    console.log(disney) //confirm Patrick is removed from line
    ```

1. Provide another real-world example that you can model using a data structure.

1. How would your data structure allow developers to access and manipulate the data?
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTMxMjMzODA5N119
-->