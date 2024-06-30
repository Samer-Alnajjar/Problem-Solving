function minimumSwap(arr: number[]): number {
    let swaps = 0;

    for(let i = 0 ; i < arr.length; i++) {
        if(arr[i] != i+1) {
            let temp = arr[i];
            arr[i] = arr[ arr[i] - 1];
            arr[temp - 1] = temp;
            swaps++;
            i--;
        }
    }

    return swaps;
}
