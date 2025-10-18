function permutationString(str, pattern) {
    var start = 0, match = 0, occ = {};
    for (var i = 0; i < pattern.length; i++) {
        occ[str[i]] = (occ[str[i]] || 0) + 1;
    }
    for (var end = 0; end < str.length; end++) {
        if (occ[str[end]] in occ) {
            occ[str[end]]--;
            if (occ[str[end]] === 0) {
                match++;
            }
        }
        if (match === Object.keys(occ).length) {
            return true;
        }
        if (end > pattern.length - 1) {
            var leftChar = str[start];
            if (leftChar in occ) {
                if (occ[leftChar] === 0) {
                    match--;
                }
                occ[leftChar]++;
            }
        }
    }
    return false;
}
