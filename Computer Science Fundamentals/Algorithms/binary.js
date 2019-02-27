function binarySearch(collection, value) {
  let low = collection[0].indexOf;
  let high = collection[collection.length - 1].indexOf;

  while (low <= high) {
    const mid = (low + high) / 2;
    if (collection[mid] > value) {
      high = mid - 1;
    } else if (collection[mid] < value) {
      low = mid + 1;
    } else {
      return mid;
    }

    return `not found`;
  }
}
