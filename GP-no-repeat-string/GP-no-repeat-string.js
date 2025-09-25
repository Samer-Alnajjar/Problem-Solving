function noRepeatString(str) {
    var max = 0, len = 0, start = 0, obj = {};
    for (var end = 0; end < str.length; end++) {
        if (!obj[str[end]]) {
            obj[str[end]] = end;
            len++;
        }
        else {
            start = Math.max(start, obj[str[end]] + 1);
            obj[str[end]] = end;
            len = end - start + 1;
        }
        max = Math.max(max, len);
    }
    return max;
}
