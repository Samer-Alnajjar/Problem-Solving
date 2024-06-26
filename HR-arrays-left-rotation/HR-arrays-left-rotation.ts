function rotLeft(arr: number[], rotations: number): number[] {
    for(let i = 0; i < rotations; i++) {
        const ele = arr.shift();
        if(ele) {
            arr.push(ele);
        }
    }

    return arr;
}
