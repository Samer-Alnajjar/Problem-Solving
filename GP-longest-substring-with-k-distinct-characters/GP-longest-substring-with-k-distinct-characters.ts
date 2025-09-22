function longestSubString(str: string, k: number) {
    var max = 0,
        start = 0,
        sub: { [key: string]: number } = {};
    for (var end = 0; end < str.length; end++) {
        sub[str[end]] = (sub[str[end]] || 0) + 1;
        while (Object.keys(sub).length > k) {
            sub[str[start]]--;
            if (sub[str[start]] <= 0) delete sub[str[start]];
            start++;
            max = Math.max(max, end - start + 1);
        }
    }
    return max;
}
