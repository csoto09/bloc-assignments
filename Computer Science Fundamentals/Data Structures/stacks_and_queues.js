// 1. Reverse a string

// let oldString = "sunset";

// function reverseString(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {

//         newString += str[i]
//     }
//     return newString;
// }
// console.log(reverseString(oldString));

// 2. pop

let groceryList = ['apples', 'bananas', 'cheese', 'deli meats'];

function popQueue(arr) {
  const newList = [];
  const pop = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
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

// 3. queue using a class

class Queue {
  constructor(arr, item) {
    this.arr = [arr];
    this.item = item;
  }

  enqueue(item) {
    return this.arr.unshift(item);
  } // end enqueue()

  dequeue() {
    return this.arr.shift();
  } // end dequeue()
}
