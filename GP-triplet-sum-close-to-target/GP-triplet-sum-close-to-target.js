function searchTriplet(arr, targetSum) {
    // Sort the array 
    arr.sort(function (a, b) { return a - b; });
    var smallestDifference = Infinity;
    for (var i = 0; i < arr.length - 2; i++) {
        var left = i + 1;
        var right = arr.length - 1;
        while (left < right) {
            var targetDiff = targetSum - arr[i] - arr[left] - arr[right];
            // If exact match, return the sum immediately 
            if (targetDiff === 0) {
                return targetSum; // exact sum found 
            } // Update the closest difference 
            if (Math.abs(targetDiff) < Math.abs(smallestDifference)) {
                smallestDifference = targetDiff;
            }
            // Move pointers 
            if (targetDiff > 0) {
                left++; // we need a bigger sum 
            }
            else {
                right--; // we need a smaller sum 
            }
        }
    }
    // Return the sum of the triplet closest to target 
    return targetSum - smallestDifference;
}
