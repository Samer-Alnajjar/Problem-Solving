function permutationString(str: string, pattern: string) {
    let start = 0,
        match = 0,
        occ: {[key: string]:number} = {};

    for(let i = 0; i < pattern.length; i++) {
        occ[str[i]] = (occ[str[i]] || 0) + 1
    }

    for(let end = 0 ; end < str.length; end++) {
        if(occ[str[end]] in occ) {
            occ[str[end]]--;

            if(occ[str[end]] === 0) {
                match++;
            }
        }

        if(match === Object.keys(occ).length) {
            return true;
        }

        if(end > pattern.length - 1) {
            let leftChar = str[start];
            if(leftChar in occ) {
                if(occ[leftChar] === 0) {
                    match--;
                }
                occ[leftChar]++;
            }
        }
    }

    return false
}

// Another solution

function permutationString2(str: string, pattern: string) {
    let start = 0,
        objPattern: {[key: string]:number} = {},
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
