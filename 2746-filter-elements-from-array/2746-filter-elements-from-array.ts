type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): any {
    let newArr = [];
    for(let i = 0 ; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            newArr[newArr.length] = arr[i]
        }
    }

    return newArr;
};