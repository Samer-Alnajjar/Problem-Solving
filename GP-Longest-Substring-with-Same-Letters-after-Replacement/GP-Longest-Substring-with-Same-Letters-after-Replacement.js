function longestSubstring(str, k) {
    var start = 0, max = 0, obj = {}, repeatedChars = 0;
    for (var end = 0; end < str.length; end++) {
        obj[str[end]] = (obj[str[end]] || 0) + 1;
        repeatedChars = Math.max(repeatedChars, obj[str[end]]);
        while (end - start + 1 - repeatedChars > k) {
            obj[start]--;
            start++;
        }
        max = Math.max(max, end - start + 1);
    }
    return max;
}
