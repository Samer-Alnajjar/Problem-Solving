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
// A better approach is to not create an object, so the space complixity still b O(1)
function removeDuplicates2(arr) {
    var nextNonDuplicates = 1, i = 1;
    while (i < arr.length) {
        if (arr[nextNonDuplicates - 1] !== arr[i]) {
            arr[nextNonDuplicates] = arr[i];
            nextNonDuplicates++;
        }
        i++;
    }
    return nextNonDuplicates;
}
