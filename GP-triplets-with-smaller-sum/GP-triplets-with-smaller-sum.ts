function findTriplets(arr: number[], target: number) {
    arr.sort((a, b) => a-b)
    let count = 0;
    for(let i = 0 ; i < arr.length-2; i++) {
        let left = i+1,
            right = arr.length - 1;

        while(left < right) {
            if(arr[left] + arr[right] < target - arr[i]) {
                count += right-left;
                left++
            } else {
                right--;
            }
        }
    }
    return count
}


