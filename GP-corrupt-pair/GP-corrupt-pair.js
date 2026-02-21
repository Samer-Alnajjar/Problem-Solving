function corruptPair(arr) {
    var _a;
    var i = 0;
    while (i < arr.length) {
        if (arr[i] !== i + 1) {
            if (arr[i] === arr[arr[i] - 1]) {
                // Duplicate found !!
                return [arr[i], i + 1];
            }
            // Swap
            _a = [arr[arr[i] - 1], arr[i]], arr[i] = _a[0], arr[arr[i] - 1] = _a[1];
        }
        else {
            i++;
        }
    }
    return [-1, -1];
}
