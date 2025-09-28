function noRepeatIndex(str) {
    var max = 0, len = 0, start = 0, obj = {};
    for (var end = 0; end < str.length; end++) {
        if (obj[str[end]] == undefined) {
            obj[str[end]] = end;
            len++;
        }
        else {
            start = Math.max(start, obj[str[end]] + 1);
            obj[str[end]] = end;
            len = end - start + 1;
        }
        max = Math.max(len, max);
    }
    return max;
}
// Second solution using counting + shrinking (slower)
function noRepeatCounting(str) {
    var max = 0, len = 0, start = 0, obj = {};
    for (var end = 0; end < str.length; end++) {
        obj[str[end]] = (obj[str[end]] || 0) + 1;
        len++;
        while (obj[str[end]] > 1) {
            obj[str[end]]--;
            len--;
            start++;
        }
        max = Math.max(len, max);
    }
    return max;
}
// const testString = 'abcdefghijklmnopqrstuvwxyz'.repeat(50000);
// // length = 1.3 million characters
// console.time('Counting+Shrinking');
// console.log('Result:', noRepeatCounting(testString));
// console.timeEnd('Counting+Shrinking');
// console.time('Index-Tracking');
// console.log('Result:', noRepeatIndex(testString));
// console.timeEnd('Index-Tracking');
