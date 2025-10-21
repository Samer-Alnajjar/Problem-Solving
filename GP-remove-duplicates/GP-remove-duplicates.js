function removeDuplicates(arr) {
    var left = 0, right = arr.length - 1, len = 0, obj = {};
    while (right >= left) {
        if (!obj[arr[left]]) {
            obj[arr[left]] = 1;
        }
        else {
            len++;
        }
        if (!obj[arr[right]]) {
            obj[arr[right]] = 1;
        }
        else {
            len++;
        }
        right--;
        left++;
    }
    return len;
}
