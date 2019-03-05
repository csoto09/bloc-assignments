function binarySearch(collection, value) {
  collection = collection.sort()
  value = value.toLowerCase()
  let low = 0;
  let high = collection.length - 1;

  let mid = Math.floor((low + high) / 2);
  while (collection[mid] !== value && low <= high) {
    if (collection[mid] > value) {
      high = mid - 1
      console.log(`high -- ${collection[high]} - ${high}`);
    }
    else {
      low = mid + 1
      console.log(`low -- ${collection[low]} - ${high}`);
      
    } 
    mid = Math.floor((low + high) / 2)
  }
  console.log(`mid -- ${collection[mid]}`)
  return collection[mid] === value ? mid : -1;
}

let fishes = [ 'Comet Goldfish', 'Comet Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Common Goldfish', 'Fantail Goldfish', 'Fantail Goldfish', 'Fantail Goldfish', 'Fantail Goldfish', 'Fantail Goldfish', 'Oranda Goldfish', 'Oranda Goldfish', 'Oranda Goldfish', 'White-Spotted Goldfish' ]

binarySearch(fishes, "White-Spotted Goldfish")

