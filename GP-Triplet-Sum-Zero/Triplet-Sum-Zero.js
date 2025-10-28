function tripletSumZero(arr) {
    arr.sort(function (a, b) { return a - b; });
    var triplets = [];
    for (var i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] == arr[i - 1])
            continue; //Skip
        searchFoTriplets(arr, -arr[i], i + 1, triplets);
    }
    return triplets;
}
function searchFoTriplets(arr, target, left, triplets) {
    var right = arr.length - 1;
    while (left < right) {
        var sum = arr[left] + arr[right];
        if (sum === target) {
            triplets.push([-target, arr[left], arr[right]]);
            left += 1;
            right -= 1;
            while (arr[left] === arr[left - 1])
                left += 1;
            while (arr[right] === arr[right + 1])
                right -= 1;
        }
        else if (target > sum) {
            left += 1;
        }
        else {
            right -= 1;
        }
    }
}
// Test cases 
console.log(tripletSumZero([-3, 0, 1, 2, -1, 1, -2]));
console.log(tripletSumZero([-5, 2, -1, -2, 3]));
// Another method (Using just one function)
function findingTriplets(arr) {
    arr.sort(function (a, b) { return a - b; });
    var triplets = [];
    for (var i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] == arr[i + 1])
            continue;
        var right = arr.length - 1;
        var left = i + 1;
        while (left < right) {
            if (arr[left] + arr[right] === -arr[i]) {
                triplets.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
                while (left < right && arr[left] === arr[left - 1])
                    left++;
                while (left < right && arr[right] === arr[right + 1])
                    right--;
            }
            else if (arr[left] + arr[right] < -arr[i]) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return triplets;
}
