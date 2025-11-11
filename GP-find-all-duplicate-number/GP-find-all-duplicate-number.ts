function findAllDuplicate(arr: number[]) {
    let i = 0,
        duplicates: number[] = [];

    while (i < arr.length) {
        const index = arr[i] - 1;
        if (arr[i] !== arr[index]) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
        } else {
            i++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            duplicates.push(arr[i]);
        }
    }

    return duplicates;
}

function findAllDuplicate2(arr: number[]): number[] {
    let i = 0;
    const duplicates: number[] = [];

    while (i < arr.length) {
        if (arr[i] !== i + 1) {
            const index = arr[i] - 1;

            if (arr[i] !== arr[index]) {
                [arr[i], arr[index]] = [arr[index], arr[i]];
            } else {
                if (!duplicates.includes(arr[i])) {
                    duplicates.push(arr[i]);
                }
                i++;
            }
        } else {
            i++;
        }
    }

    return duplicates;
}

console.log(findAllDuplicate2([3, 4, 4, 5, 5]));
console.log(findAllDuplicate2([5, 4, 7, 2, 3, 5, 3]));
