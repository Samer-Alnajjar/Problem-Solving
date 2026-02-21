function corruptPair(arr: number[]) {
    let i = 0;

    while (i < arr.length) {
        if (arr[i] !== i + 1) {
            // Swap
            [arr[i], arr[arr[i] - 1]] = [arr[arr[i] - 1], arr[i]]
        } else {
            i++;
        }
    }

    for(let j = 0; j < arr.length; j++) {
        if(arr[j] !== j+1) {
            return [arr[j], j+1]
        }
    }

    return [-1, -1]
}