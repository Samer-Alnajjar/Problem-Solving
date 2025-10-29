// O(1)
function findHappyNumber(num) {
    var slow = num, fast = num;
    while (true) {
        slow = findSqrNum(slow);
        fast = findSqrNum(findSqrNum(fast));
        if (slow == fast)
            break;
    }
    return slow == 1;
}
function findSqrNum(num) {
    var sum = 0;
    while (num > 0) {
        var digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
// Other method O(n)
function findHappyNumber(num) {
    var seen = new set();
    while (num !== 1 && !seen.has(num)) {
        seen.add(num);
        num = sqrNum(num);
    }
    return num === 1;
}
function sqrNum(num) {
    var sum = 0;
    while (num > 0) {
        var digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
