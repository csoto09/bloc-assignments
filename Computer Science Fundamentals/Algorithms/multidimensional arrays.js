function countItems(array) {
    let itemCount = 0;

    if (!array.length) return null;

    array.forEach(element => {
        if (element.constructor === Array) {
            count += countItems(element);
        } else {
            count++;
        }
    });
    return itemCount;
}


let test1 = [3, 5, 8, 14, 19];
let test2 = [6, [10, 12], 14, 16, 20, 3, 5, 8, 14, 19];


