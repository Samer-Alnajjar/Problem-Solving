function findFirstKMissPosNums(arr, k) {
    var _a;
    var i = 0, outputs = [], extras = new Set();
    while (i < arr.length) {
        if (arr[i] !== arr[arr[i] - 1] && arr[i] <= arr.length && arr[i] > 0) {
            _a = [arr[arr[i] - 1], arr[i]], arr[i] = _a[0], arr[arr[i] - 1] = _a[1];
        }
        else {
            i++;
        }
    }
    i = 0;
    while (i < arr.length) {
        if (arr[i] !== i + 1) {
            outputs.push(i + 1);
            extras.add(arr[i]);
        }
        if (outputs.length === k) {
            return outputs;
        }
        i++;
    }
    var current = arr.length + 1;
    while (outputs.length < k) {
        if (!extras.has(current)) {
            outputs.push(current);
        }
        current++;
    }
    return outputs;
}
