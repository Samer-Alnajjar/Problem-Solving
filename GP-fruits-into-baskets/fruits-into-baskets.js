function fruitsIntoBaskest(arr) {
    var start = 0, len = 0, max = 0, obj = {};
    for (var end = 0; end < arr.length; end++) {
        obj[arr[end]] = (obj[arr[end]] || 0) + 1;
        len++;
        while (Object.keys(obj).length > 2) {
            obj[arr[start]]--;
            if (obj[arr[start]] == 0)
                delete obj[arr[start]];
            len--;
            start++;
        }
        max = Math.max(max, len);
    }
    return max;
}
