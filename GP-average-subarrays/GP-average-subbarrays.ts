// Using brute force method
// Time O(n*k)
function average_subarrays(arr, k) {
    const result: Number[] = []
    for(let i = 0; i <= arr.length - k; i++) {
        let sum = 0;

        for(let j = i; j < k+i; j++) {
            sum+=arr[j]
        }
        result.push(sum/k)
    }
    return result;
}

// Using sliding window method
// Time O(n)

function average_subarray(arr, k) {
    const result:Number[] = [];
    let windowSum = 0,
        windowStart = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum+= arr[windowEnd];

        if(windowEnd >= k-1) {
            result.push(windowSum/k)
            windowSum-=arr[windowStart]
            windowStart++;
        }
    }
    return result
}