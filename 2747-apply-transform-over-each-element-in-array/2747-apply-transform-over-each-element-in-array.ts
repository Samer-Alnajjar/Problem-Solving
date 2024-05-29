function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let newArr = [];
    let i = 0;

    while(i < arr.length) {
        newArr.push(fn(arr[i], i))
        i++;
    }

    return newArr;
};