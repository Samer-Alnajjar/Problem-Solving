function findAllDuplicate(arr) {
    var _a;
    var i = 0, duplicates = [];
    while (i < arr.length) {
        var index = arr[i] - 1;
        if (arr[i] !== arr[index]) {
            _a = [arr[index], arr[i]], arr[i] = _a[0], arr[index] = _a[1];
        }
        else {
            i++;
        }
    }
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        if (arr[i_1] !== i_1 + 1) {
            duplicates.push(arr[i_1]);
        }
    }
    return duplicates;
}
function findAllDuplicate2(arr) {
    var _a;
    var i = 0;
    var duplicates = [];
    while (i < arr.length) {
        if (arr[i] !== i + 1) {
            var index = arr[i] - 1;
            if (arr[i] !== arr[index]) {
                _a = [arr[index], arr[i]], arr[i] = _a[0], arr[index] = _a[1];
            }
            else {
                if (!duplicates.includes(arr[i])) {
                    duplicates.push(arr[i]);
                }
                i++;
            }
        }
        else {
            i++;
        }
    }
    return duplicates;
}
console.log(findAllDuplicate2([3, 4, 4, 5, 5]));
console.log(findAllDuplicate2([5, 4, 7, 2, 3, 5, 3]));
