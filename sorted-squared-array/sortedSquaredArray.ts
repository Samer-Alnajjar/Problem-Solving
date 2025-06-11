// Using Brute force
// ! Bad practice
// Time complexity: O(n logn) | Space complexity: O(n)
// function sortedSquaredArray(array: number[]): number[] {
//     let newArr: number[] = [];
//     for (const value of array) {
//         newArr.push(value * value);
//     }

//     return newArr.sort((a, b) => a - b);
// }

// Using two pointers
// ! Good practice
// Time complexity: O(n) | Space complexity: O(n)
function sortedSquaredArray(array: number[]) {
    let newArr: number[] = [];
    let leftPointer = 0;
    let rightPointer = array.length - 1;

    while(leftPointer <= rightPointer) {
        if(Math.abs(array[leftPointer]) < Math.abs(array[rightPointer])) {
            newArr.unshift(array[rightPointer] * array[rightPointer]);
            rightPointer--;
        } else if(Math.abs(array[leftPointer]) > Math.abs(array[rightPointer])) {
            newArr.unshift(array[leftPointer] * array[leftPointer]);
            leftPointer++;
        } else {
            newArr.unshift(array[leftPointer] * array[leftPointer]);
            leftPointer++;
        }
    }
    return newArr;
}

console.log(sortedSquaredArray([-7, -3, 2, 3, 11])); // [4, 9, 9, 49, 121]
console.log(sortedSquaredArray([-5, -3, -2, 0, 1, 2])); // [0, 1, 4, 4, 9, 25]
console.log(sortedSquaredArray([-4, -2, 0, 1, 3])); // [0, 1, 4, 9, 16]
console.log(sortedSquaredArray([-10, -5, 0, 5, 10])); // [0, 25, 25, 100, 100]
