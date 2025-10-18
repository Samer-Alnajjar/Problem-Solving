function stringAnagram(str: string, pattern: string) {
    let start = 0,
        len = 0,
        patternObj: { [key: string]: number } = {},
        copyObj: { [key: string]: number } = {},
        output: number[] = [];

    for (let i = 0; i < pattern.length; i++) {
        patternObj[pattern[i]] = (patternObj[pattern[i]] || 0) + 1;
    }

    copyObj = { ...patternObj };

    for (let end = 0; end < str.length; end++) {
        if (copyObj[str[end]] == undefined) {
            start = 0;
            len = 0;
        } else {
            if (copyObj[str[end]] > 0) {
                copyObj[str[end]]--;
                len++;
            } else {
                copyObj = { ...patternObj };
                start = end;
                copyObj[str[end]]--;
                len = 1;
            }

            if (
                len == pattern.length &&
                Math.max(...Object.values(copyObj)) === 0
            ) {
                output.push(start);
                copyObj[str[start]]++;
                start++;
                len--;
            }
        }
    }

    return output;
}
