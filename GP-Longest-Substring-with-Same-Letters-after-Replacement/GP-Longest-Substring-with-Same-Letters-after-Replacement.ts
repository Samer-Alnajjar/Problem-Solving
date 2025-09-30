function longestSubString(str: string, k: number) {
    let len = 0,
        start = 0,
        max = 0,
        maxRepeated = 0,
        obj: { [key: string]: number } = {};

    for (let end = 0; end < str.length; end++) {
        obj[str[end]] = (obj[str[end]] || 0) + 1;
        len++;
        maxRepeated = Math.max(maxRepeated, obj[str[end]]);

        while (len - maxRepeated > k) {
            obj[str[start]]--;
            start++;
            len--;
        }

        max = Math.max(max, len);
    }

    return max;
}
