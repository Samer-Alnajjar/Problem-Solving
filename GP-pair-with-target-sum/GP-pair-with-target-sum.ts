function pairWithTargetSum(arr: number[], target: number) {
    let right = arr.length - 1;

    for (let left = 0; left < arr.length - 1; left++) {
        if (arr[left] + arr[right] == target) {
            return [left, right];
        } else if (arr[left] + arr[right] > target) {
            right--;
            left--;
        }
    }
}

// Another method (using while)

function pairWithTargetSum2(arr: number[], target: number) {
    let left = 0,
        right = arr.length - 1;

    while (right > left) {
        const sum = arr[left] + arr[right];

        if (sum == target) {
            return [left, right];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }

    return [-1, -1];
}

// Another method (Using hash table)

function pairWithTargetSum3(arr: number[], target: number) {
    let nums: { [key: string]: number } = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (target - num in nums) {
            return [nums[target - num], i];
        }

        nums[num] = i;
    }

    return [-1, -1];
}
