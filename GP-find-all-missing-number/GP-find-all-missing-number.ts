function findAllMissingNumbers(arr: number[]) {
    let i = 0,
        missingNumbers = [];

    while (i < arr.length) {
        const index = arr[i];
        if (arr[i] < arr.length && arr[i] !== arr[index]) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
        } else {
            i++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}

console.log(findAllMissingNumbers([4, 0, 3, 1]));
console.log(findAllMissingNumbers([8, 3, 5, 2, 4, 6, 0, 1]));
