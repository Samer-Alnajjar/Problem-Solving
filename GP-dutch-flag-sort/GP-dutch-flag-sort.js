function dutchFlagSort(arr) {
    var _a, _b;
    var i = 0, low = 0, high = arr.length - 1;
    while (i <= high) {
        if (arr[i] === 0) {
            _a = [arr[low], arr[i]], arr[i] = _a[0], arr[low] = _a[1];
            i++;
            low++;
        }
        else if (arr[i] === 1) {
            i++;
        }
        else if (arr[i] === 2) {
            _b = [arr[high], arr[i]], arr[i] = _b[0], arr[high] = _b[1];
            high--;
        }
    }
}
