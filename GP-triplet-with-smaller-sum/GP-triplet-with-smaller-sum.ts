function tripletSmallerSum(arr: number[], t: number) {
    arr.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += findPairs(arr, t - arr[i], i + 1);
    }

    return count;
}

function findPairs(arr: number[], targetSum: number, left: number) {
    let right = arr.length - 1,
        count = 0;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum < targetSum) {
            count += right - left;
            left++;
        } else {
            right--;
        }
    }
    return count;
}

console.log(tripletSmallerSum([-1, 0, 2, 3], 3)); // Output: 2

// If we want to get the pairs not the count

function tripletSmallerSumPairs(arr: number[], t: number) {
    let triplets: number[][] = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        findPairsNums(arr, t - arr[i], triplets, i + 1);
    }

    return triplets;
}

function findPairsNums(
    arr: number[],
    targetSum: number,
    triplets: number[][],
    left: number,
) {
    let right = arr.length - 1,
        count = 0;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum < targetSum) {
            for (let i = right; i > left; i--) {
                triplets.push([arr[left - 1], arr[left], arr[i]]);
            }
            left++;
        } else {
            right--;
        }
    }
    return count;
}
