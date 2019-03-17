# Callbacks and Asynchronicity

1. What is the difference between readdirSync and readdir?
    * Only difference is that readdirSync is a synchronous event that blocks the main thread and prevents execution of any other code at the same time.
1. What is the event loop and how does it handle asynchronous requests?
    * Event loop is what allows node to perform non-blocking operations
    * Node waits for the operating system to notify it when async events are ready to be processed. In the meantime, it continues to process other events in the queue.
1. Given the following code, specify whether the program is asynchronous and non-blocking or synchronous and blocking or synchronous and non-blocking.
   * **Synchronous and blocking**

``` Javascript
const fs = require('fs');
const file = fs.readFileSync('foo.txt');
console.log(file.toString());
```

1. Given the following code, specify whether the program is asynchronous and non-blocking or synchronous and blocking or synchronous and non-blocking.
    * **Asyncrhonous and non-blocking**

``` Javascript
const fs = require('fs');
fs.readFile('foo.txt', (err, file) => {
 if (err) throw err;
 console.log(file.toString());
});
console.log("test");
```

1. In what order will the console.log statements execute in the code below?
   1. `console.log("C")`
   1. `console.log("A")`
   1. `console.log("B")`
1. `setTimeout` is a JavaScript function which calls a function after a set amount of milliseconds. Given the following code, explain in what sequence the functions will run and why.
   * `greeting()` will run first because it was called first, ***but*** the output of `hello()` will print first because of the 100 millisecond timeout called by `setTimeout()`
1. Create a function which utilizes a callback. Make sure to add console.log statements to understand when your callback function is called.

``` Javascript
function greet(name, callback) {
    let greeting = `It's so nice to meet you, ${name}! Let's grab some coffee!`;
    callback(greeting);
}


function logThis(param) {
    console.log(param);
}

greet('Sarah', logThis) // It's so nice to meet you, Sarah! Let's grab some coffee!
```