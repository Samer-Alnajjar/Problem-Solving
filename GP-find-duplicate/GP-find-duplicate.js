function findDuplicate(arr) {
    var _a;
    var i = 0;
    while (i < arr.length) {
        if (arr[i] !== i + 1) {
            var index = arr[i] - 1;
            if (arr[i] !== arr[index]) {
                _a = [arr[index], arr[i]], arr[i] = _a[0], arr[index] = _a[1];
            }
            else {
                return arr[i];
            }
        }
        else {
            i++;
        }
    }
    return -1;
}
console.log(findDuplicate([1, 4, 4, 3, 2]));
console.log(findDuplicate([2, 1, 3, 3, 5, 4]));
console.log(findDuplicate([2, 4, 1, 4, 4]));
