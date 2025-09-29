function longestSubstring(str: string, k: number): number {
    let start = 0,
        max = 0,
        obj: { [key: string]: number } = {},
        repeatedChars = 0;

    for (let end = 0; end < str.length; end++) {
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
