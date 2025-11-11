function findDuplicate(arr: number[]) {
    let i = 0;

    while (i < arr.length) {
        if (arr[i] !== i + 1) {
            const index = arr[i] - 1;
            if (arr[i] !== arr[index]) {
                [arr[i], arr[index]] = [arr[index], arr[i]];
            } else {
                return arr[i];
            }
        } else {
            i++;
        }
    }

    return -1;
}

console.log(findDuplicate([1, 4, 4, 3, 2]));
console.log(findDuplicate([2, 1, 3, 3, 5, 4]));
console.log(findDuplicate([2, 4, 1, 4, 4]));
