function smallestSubArray(arr: number[], s: number) {
    let sum = 0,
        min = arr.length,
        start = 0,
        len = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];
        len++;
        while (sum >= s) {
            min = Math.min(min, len);
            sum -= arr[start];
            len--;
            start++;
        }
    }

    return min;
}
