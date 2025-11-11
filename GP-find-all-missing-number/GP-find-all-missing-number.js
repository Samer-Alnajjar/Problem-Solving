function findAllMissingNumbers(arr) {
    var _a;
    var i = 0, missingNumbers = [];
    while (i < arr.length) {
        var index = arr[i];
        if (arr[i] < arr.length && arr[i] !== arr[index]) {
            _a = [arr[index], arr[i]], arr[i] = _a[0], arr[index] = _a[1];
        }
        else {
            i++;
        }
    }
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        if (arr[i_1] !== i_1) {
            missingNumbers.push(i_1);
        }
    }
    return missingNumbers;
}
console.log(findAllMissingNumbers([4, 0, 3, 1]));
console.log(findAllMissingNumbers([8, 3, 5, 2, 4, 6, 0, 1]));
