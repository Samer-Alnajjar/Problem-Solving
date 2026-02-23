function smallesMissingPositiveNum(arr) {
    var _a;
    var i = 0, smallest = Infinity;
    while (i < arr.length) {
        if (arr[i] !== i + 1) {
            _a = [arr[i], arr[arr[i] - 1]], arr[i] = _a[0], arr[arr[i] - 1] = _a[1];
        }
        else {
            i++;
        }
    }
    i = 0;
    while (i < arr.length) {
        if (arr[i] != i + 1 && arr[i] > 0) {
            smallest = arr[i] < smallest ? arr[i] : smallest;
        }
    }
    return smallest;
}
