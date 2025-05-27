// SOLUTION: O(n^2) time complexity, O(1) space complexity
// ! BAD PRACTICE: This solution is not efficient for large arrays.
function twoNumbSum(arr: number[], a: number): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === a) {
                return [arr[i], arr[j]];
            }
        }
    }

    return [];
}

console.log(twoNumbSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [4, 5]

// SOLUTION: O(n) time complexity, O(n) space complexity
// ! GOOD PRACTICE: This solution is efficient for large arrays.
function twoNumSum2(arr: number[], a: number): number[] {
    let obj: { [key: string]: number } = {};
    for (let i = 0; i < arr.length; i++) {
        if (a - arr[i] === obj[a - arr[i]]) {
            return [arr[i], obj[a - arr[i]]];
        }
        if (!obj[arr[i]]) obj[arr[i]] = arr[i];
    }

    return [];
}

console.log(twoNumSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [4, 5]

// SOLUTION: O(nlogn) time complexity, O(1) space complexity
// ! Best PRACTICE: This solution is efficient for large arrays and uses sorting.
function twoNumSum3(arr: number[], a: number): number[] {
    let sortedArr = arr.sort((a, b) => a - b);
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    while (leftPointer < rightPointer) {
        let sum = sortedArr[leftPointer] + sortedArr[rightPointer];
        if (sum === a) {
            return [sortedArr[leftPointer], sortedArr[rightPointer]];
        } else if (sum < a) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }

    return [];
}

console.log(twoNumSum3([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [4, 5]
