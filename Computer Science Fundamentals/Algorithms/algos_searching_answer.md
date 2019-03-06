# Algorithms: Searching

1. What is a real-life scenario that uses linear search?
   * ~~Looking through a phonebook or a rolodex in the listed order.~~
   * not sure why, but the only IRL example I can think of is that of a teacher doing roll call at the beginning of the day. *Could* be done as a binary search, but really is often just done as a sequential call and response between the teacher and their students.
1. What is a real-life scenario that uses binary search?
   * Looking for the right rack to find a library book.
1. Given the alphabetically sorted collection in this checkpoint, how many iterations would it take to find the value *G* using linear search?
   * 7 iterations.
1. Given the alphabetically sorted collection in this checkpoint, how many iterations would it take to find the value *G* using binary search?
   * ~~4 iterations~~. Did this one by hand and made a mistake somewhere - it's **3 iterations**.
1. Given an *unsorted* collection of a million items, which algorithm would you choose between linear search and binary search? Explain your reasoning.
   * linear search - binary search does not work with unsorted collections.
1. Given a *sorted* collection of a million items, which algorithm would you choose between linear search and binary search? Explain your reasoning
   * binary search - binary search takes significantly less time to run with large values than linear.

## Programming Assignment

1. You and a friend have set a wager to see who can find the word "Albatross" in the dictionary the fastest. Write a program to allow you to win the bet.

``` Javascript
function binarySearch(collection, value) {
  value = value.toLowerCase()
  let low = 0;
  let high = collection.length - 1;
  let mid = Math.floor((low + high) / 2);
  while (collection[mid] !== value && low <= high) {
    if (collection[mid] > value) high = mid - 1
    else low = mid + 1
    mid = Math.floor((low + high) / 2)
  }
  return collection[mid] === value ? mid : -1;
}

let dict = [ 'ability', 'absence', 'academy', 'account', 'accused', 'achieve', 'acquire', 'address', 'advance', 'adverse', 'advised', 'against', 'airport', 'albatross', 'alcohol', 'alleged', 'already', 'analyst', 'ancient', 'another', 'anybody', 'applied', 'arrival', 'article', 'assumed', 'attempt', 'attract', 'average', 'backing', 'balance', 'banking', 'bargain', 'barrier', 'baseman', 'battery', 'bearing', 'beating', 'because', 'bedroom', 'believe', 'beneath', 'benefit', 'besides', 'between', 'bidding', 'billing', 'billion', 'binding', 'biology', 'booking', 'breadth', 'brother', 'brought', 'builder', 'burning', 'eastern', 'economy', 'edition', 'elderly', 'elegant', 'element', 'embrace', 'endless', 'enforce', 'engaged', 'enhance', 'episode', 'essence', 'ethical', 'evening', 'evident', 'exactly', 'examine', 'example', 'excited', 'exclude', 'execute', 'exhibit', 'expense', 'explain', 'exploit', 'explore', 'express', 'extract', 'extreme','ideally', 'illegal', 'illness', 'imagery', 'imagine', 'imaging', 'immense', 'impetus', 'impress', 'improve', 'impulse', 'include', 'indices', 'indoors', 'inhibit', 'initial', 'inquiry', 'insider', 'insight', 'inspect', 'inspire', 'install', 'instant', 'instead', 'insulin', 'insured', 'insurer', 'intense', 'interim', 'invalid', 'invoice', 'involve', 'isolate', 'observe', 'obvious', 'offense', 'officer', 'ongoing', 'opening', 'operate', 'opinion', 'optical', 'optimal', 'optimum', 'organic', 'outcome', 'outdoor', 'outline', 'outlook', 'outside', 'overall', 'unarmed', 'unaware', 'uncanny', 'unclear', 'uncover', 'undergo', 'undoing', 'unequal', 'unhappy', 'unheard', 'uniform', 'unitary', 'unknown', 'unleash', 'unlucky', 'unnamed', 'unravel', 'unusual', 'upgrade', 'upright', 'upscale', 'upstart', 'upstate', 'upsurge', 'upswing', 'uptrend', 'uranium', 'urgency', 'urinary', 'useless', 'utility', 'utilize', 'utterly'  ]
  
binarySearch(dict,'albatross') // 13
binarySearch(dict, 'isolate') // 117
binarySearch(dict,"carriage") // -1
```

1. You work at a pet store, and a child has asked you to net the only white-spotted goldfish from the fish tank. Write a program that will help you net the right fish.

``` Javascript
// fixed binarySearch function
function binarySearch(collection, value) {
  let low = 0;
  let high = collection.length - 1;
  let mid = Math.floor((low + high) / 2);
  while (collection[mid] !== value && low <= high) {
    if (collection[mid] > value) {
      high = mid - 1
    }
    else {
      low = mid + 1
    }
    mid = Math.floor((low + high) / 2)
  }

  return collection[mid] === value ? mid : -1;
}

let fishes = [ 'Comet Goldfish', 'Comet Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Fantail Goldfish', 'Fantail Goldfish', 'Fantail Goldfish', 'Fantail Goldfish', 'Fantail Goldfish', 'Oranda Goldfish', 'Oranda Goldfish', 'Oranda Goldfish', 'White-Spotted Goldfish' ]

binarySearch(fishes, "White-Spotted Goldfish") //returns 19
```

Binary or Linear? Why don't we have both?? <https://www.youtube.com/watch?v=n-86ax7TYNM>

``` JavaScript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        return i;
    }
  }
  return -1;
}

// fishies in random order because they're swimming around in the fish tank.
// fishes.sort(function(a, b){return 0.5 - Math.random()})
let fishes = [ 'Comet Goldfish', 'Oranda Goldfish', 'Fantail Goldfish', 'Comet Goldfish', 'Common Goldfish', 'Common Goldfish', 'Fantail Goldfish', 'Common Goldfish', 'White-Spotted Goldfish', 'Common Goldfish', 'Oranda Goldfish', 'Fantail Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Fantail Goldfish', 'Common Goldfish', 'Common Goldfish', 'Oranda Goldfish', 'Fantail Goldfish' ]

linearSearch(fishes, "White-Spotted Goldfish") // returns 8
```