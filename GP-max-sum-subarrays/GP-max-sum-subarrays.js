function maxSumSubArray(arr, k) {
    var max = 0, sum = 0, start = 0;
    for (var end = 0; end < arr.length; end++) {
        sum += arr[end];
        if (end >= k - 1) {
            max = Math.max(sum, max);
            sum -= arr[start];
            start++;
        }
    }
    return max;
}
