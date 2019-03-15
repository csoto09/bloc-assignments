1. What is a Node module?
   * a set of functions to include in your application. similar to a js library.
1. What is the main difference between `exports` and `module.exports`?
   * `exports` is a reference to `module.exports`. any reassignments of `exports` are not available outside of the module.
1. Why is using `exports` recommended?
   * safer to work with than `module.exports` as it is just a reference to the `module.exports` object.