// Using brute force method
// Time O(n*k)
function average_subarrays(arr, k) {
    var result = [];
    for (var i = 0; i <= arr.length - k; i++) {
        var sum = 0;
        for (var j = i; j < k + i; j++) {
            sum += arr[j];
        }
        result.push(sum / k);
    }
    return result;
}
// Using sliding window method
// Time O(n)
function average_subarray(arr, k) {
    var result = [];
    var windowSum = 0, windowStart = 0;
    for (var windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if (windowEnd >= k - 1) {
            result.push(windowSum / k);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    return result;
}
