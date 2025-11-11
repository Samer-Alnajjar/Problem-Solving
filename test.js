function permutationString(str, pattern) {
    let start = 0,
        objPattern = {},
        len = 0;

    for (let i = 0; i < pattern.length; i++) {
        objPattern[pattern[i]] = (objPattern[pattern[i]] || 0) + 1;
    }

    for (let end = 0; end < str.length; end++) {
        if (objPattern[str[end]] == undefined) {
            start = end;
            len = 0;
        } else {
            if (objPattern[str[end]] > 0) {
                len++;
                objPattern[str[end]]--;
            }
            if (
                Math.max(...Object.values(objPattern)) == 0 &&
                len == pattern.length
            )
                return true;
        }
    }

    return false;
}
