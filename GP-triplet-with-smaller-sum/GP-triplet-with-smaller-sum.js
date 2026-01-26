function tripletSmallerSum(arr, t) {
    arr.sort(function (a, b) { return a - b; });
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        count += findPairs(arr, t - arr[i], i + 1);
    }
    return count;
}
function findPairs(arr, targetSum, left) {
    var right = arr.length - 1, count = 0;
    while (left < right) {
        var sum = arr[left] + arr[right];
        if (sum < targetSum) {
            count += right - left;
            left++;
        }
        else {
            right--;
        }
    }
    return count;
}
console.log(tripletSmallerSum([-1, 0, 2, 3], 3)); // Output: 2
// If we want to get the pairs not the count
function tripletSmallerSumPairs(arr, t) {
    var triplets = [];
    arr.sort(function (a, b) { return a - b; });
    for (var i = 0; i < arr.length; i++) {
        findPairsNums(arr, t - arr[i], triplets, i + 1);
    }
    return triplets;
}
function findPairsNums(arr, targetSum, triplets, left) {
    var right = arr.length - 1, count = 0;
    while (left < right) {
        var sum = arr[left] + arr[right];
        if (sum < targetSum) {
            for (var i = right; i > left; i--) {
                triplets.push([arr[left - 1], arr[left], arr[i]]);
            }
            left++;
        }
        else {
            right--;
        }
    }
    return count;
}
