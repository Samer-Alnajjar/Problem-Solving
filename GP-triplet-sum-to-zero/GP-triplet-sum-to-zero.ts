function tripletSumToZero(arr: number[]) {
    let triplet: number[][] = [];
    arr.sort((a, b) => a-b)
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) continue;
        findPair(arr, -arr[i], i+1, triplet)
    }

    return triplet;
}

function findPair(arr: number[], targetSum: number, left: number, triplet: number[][]) {
    let right = arr.length-1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === targetSum) {
            triplet.push([-targetSum, arr[left], arr[right]])
            left++;
            right--;

            while(left < right && arr[left] == arr[left-1]) {
                left++;
            }

            while(left < right && arr[right] == arr[right+1]) {
                right--;
            }
        } else if(sum < targetSum) {
            left++;
        } else {
            right--;
        }
    }
}