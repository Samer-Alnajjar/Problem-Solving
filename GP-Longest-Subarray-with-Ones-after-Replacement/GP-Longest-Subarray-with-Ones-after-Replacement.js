function GPLongestSubarrayWithOnesAfterReplacement(arr, k) {
    var start = 0, max = 0, maxOnesCount = 0, len = 0;
    for (var end = 0; end < arr.length; end++) {
        if (arr[end] === 1) {
            maxOnesCount++;
        }
        len++;
        while (len - maxOnesCount > k) {
            if (arr[start] == 1) {
                maxOnesCount--;
            }
            len--;
            start++;
        }
        max = Math.max(len, max);
    }
    return max;
}
