function minimumSwaps(arr: number[]): number {
    let swaps = 0;

    for(let i = 0 ; i < arr.length-1; i++) {
        if(arr[i] != i+1) {
            let temp = arr[arr[i] - 1];
            arr[arr[i]-1] = arr[i];
            arr[i] = temp;
            swaps++;
            i--;
        }
    }

    return swaps;
}
