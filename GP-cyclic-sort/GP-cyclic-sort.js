function cyclicSort(arr) {
    var _a;
    var i = 0;
    while (i < arr.length) {
        var index = arr[i] - 1;
        if (arr[i] !== arr[index]) {
            _a = [arr[i], arr[index]], arr[index] = _a[0], arr[i] = _a[1];
        }
        else {
            i++;
        }
    }
    return arr;
}
// ✅ Correct test cases
console.log(cyclicSort([3, 1, 5, 4, 2]));
console.log(cyclicSort([2, 6, 4, 3, 1, 5]));
console.log(cyclicSort([1, 5, 6, 4, 3, 2]));
