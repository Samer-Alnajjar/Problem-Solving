function cyclicSort(arr: number[]) {
    let i = 0;

    while (i < arr.length) {
        const index = arr[i] - 1;
        if (arr[i] !== arr[index]) {
            [arr[index], arr[i]] = [arr[i], arr[index]];
        } else {
            i++;
        }
    }
    return arr;
}

// ✅ Correct test cases
console.log(cyclicSort([3, 1, 5, 4, 2]));
console.log(cyclicSort([2, 6, 4, 3, 1, 5]));
console.log(cyclicSort([1, 5, 6, 4, 3, 2]));
