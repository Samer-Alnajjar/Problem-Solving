function findTriplets(arr, target) {
    arr.sort(function (a, b) { return a - b; });
    var count = 0;
    for (var i = 0; i < arr.length - 2; i++) {
        var left = i + 1, right = arr.length - 1;
        while (left < right) {
            if (arr[left] + arr[right] < target - arr[i]) {
                count += right - left;
                left++;
            }
            else {
                right--;
            }
        }
    }
    return count;
}
