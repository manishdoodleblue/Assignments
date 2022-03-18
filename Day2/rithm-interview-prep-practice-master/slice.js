
function slice(arr, start, end) {
    let newArr = [];
    // handle end not being passed or being too large
    if (end === undefined || end > arr.length) {
        end = arr.length;
    }
    // slice from start to end
    for (let i = start; i < end; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log (slice([1, 2, 3, 4, 5], 0, 2)); // [1, 2]
console.log(slice([1, 2, 3, 4, 5], 2, 4)); // [3, 4]
console.log(slice([1, 2, 3, 4, 5], 2)); // [3, 4, 5]
console.log(slice([1, 2, 3, 4, 5], 2, 10)); // [3, 4, 5]