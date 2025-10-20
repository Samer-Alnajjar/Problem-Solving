function pairWithTargetSum(arr, target) {
    var right = arr.length - 1;
    for (var left = 0; left < arr.length - 1; left++) {
        if (arr[left] + arr[right] == target) {
            return [left, right];
        }
        else if (arr[left] + arr[right] > target) {
            right--;
            left--;
        }
    }
}
// Another method (using while)
function pairWithTargetSum2(arr, target) {
    var left = 0, right = arr.length - 1;
    while (right > left) {
        var sum = arr[left] + arr[right];
        if (sum == target) {
            return [left, right];
        }
        else if (sum > target) {
            right--;
        }
        else {
            left++;
        }
    }
    return [-1, -1];
}
// Another method (Using hash table)
function pairWithTargetSum3(arr, target) {
    var nums = {};
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (target - num in nums) {
            return [nums[target - num], i];
        }
        nums[num] = i;
    }
    return [-1, -1];
}
