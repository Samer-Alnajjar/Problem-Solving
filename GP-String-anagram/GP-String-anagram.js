var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function stringAnagram(str, pattern) {
    var start = 0, len = 0, patternObj = {}, copyObj = {}, output = [];
    for (var i = 0; i < pattern.length; i++) {
        patternObj[pattern[i]] = (patternObj[pattern[i]] || 0) + 1;
    }
    copyObj = __assign({}, patternObj);
    for (var end = 0; end < str.length; end++) {
        if (copyObj[str[end]] == undefined) {
            start = 0;
            len = 0;
        }
        else {
            if (copyObj[str[end]] > 0) {
                copyObj[str[end]]--;
                len++;
            }
            else {
                copyObj = __assign({}, patternObj);
                start = end;
                copyObj[str[end]]--;
                len = 1;
            }
            if (len == pattern.length &&
                Math.max.apply(Math, Object.values(copyObj)) === 0) {
                output.push(start);
                copyObj[str[start]]++;
                start++;
                len--;
            }
        }
    }
    return output;
}
