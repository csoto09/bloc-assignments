# Core Libraries

1. Why is the `fs` core module important for Node development?
   * `fs` provides file system access. without this, we would be unable to read or write code or act on requests from the client. 
1. What is the difference between sync and non-sync methods in the `fs` module?
   * blocking vs non-blocking: sync methods are handled in sequential order. The program waits for the line of code to finish executing before moving on. Non-sync or asynchronous methods are handled as they arrive and they do not wait for the current command to finish executing before moving onto the next line of code.
1. Why are modules used?
   * to keep unrelated and reusable pieces of code isolated from one another and maintain separation of concerns. using modules allows us to call them in as needed without otherwise cluttering our code 
1. Why are libraries such as `fs` used in Node programming?
    * To provide functionality not otherwise provided out-of-the-box with nodejs. Using libraries allows us to add functionality and versatility to our code without having to write this from scratch.