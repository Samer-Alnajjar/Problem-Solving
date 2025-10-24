function squaringSortedArray(arr: number[]) {
    let left = 0,
        right = arr.length - 1,
        output: number[] = [];

    while (right >= left) {
        const sqrRightNum = arr[right] * arr[right];
        const sqrLeftNum = arr[left] * arr[left];

        if (sqrRightNum > sqrLeftNum) {
            output.unshift(sqrRightNum);
            right--;
        } else {
            output.unshift(sqrLeftNum);
            left++;
        }
    }

    return output;
}
