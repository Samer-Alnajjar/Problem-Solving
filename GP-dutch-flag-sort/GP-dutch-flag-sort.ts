function dutchFlagSort(arr: number[]) {
    let i = 0, low = 0, high = arr.length - 1;
    while(i <= high) {
        if(arr[i] === 0) {
            [arr[i], arr[low]] = [arr[low], arr[i]]
            i++;
            low++;
        } else if (arr[i] === 1) {
            i++;
        } else if (arr[i] === 2) {
            [arr[i], arr[high]] = [arr[high], arr[i]];
            high--;
        }
    }
}
