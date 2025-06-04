// Using for loop
//! Time complexity: O(n)  | Space complexity: O(1)
// function validateSubsequence(arr: number[], sub: number[]) {
//    let subIdx = 0;
//    for (const val of arr) {
//         if(subIdx === sub.length) break;
//         if(val === sub[subIdx]) subIdx++;
//    }
//    return subIdx === sub.length;
// }

// While loop
//! Time complexity: O(n)  | Space complexity: O(1)
function validateSubsequence(arr: number[], sub: number[]) {
    let arrIdx = 0;
    let subIdx = 0;

    while(arrIdx < arr.length && subIdx < sub.length) {
        if(arr[arrIdx] === sub[subIdx]) subIdx++;
        arrIdx++;
    }
    return subIdx === sub.length;
}

console.log(validateSubsequence([1, 2, 3, 4, 5], [2, 4])); // true
console.log(validateSubsequence([1, 2, 3, 4, 5], [2, 5])); // false
console.log(validateSubsequence([1, 2, 3, 4, 5], [1, 3, 6])); // true
