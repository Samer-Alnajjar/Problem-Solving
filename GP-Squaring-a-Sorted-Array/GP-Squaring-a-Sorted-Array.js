function squaringSortedArray(arr) {
    var left = 0, right = arr.length - 1, output = [];
    while (right >= left) {
        var sqrRightNum = arr[right] * arr[right];
        var sqrLeftNum = arr[left] * arr[left];
        if (sqrRightNum > sqrLeftNum) {
            output.unshift(sqrRightNum);
            right--;
        }
        else {
            output.unshift(sqrLeftNum);
            left++;
        }
    }
    return output;
}
