var Interval = /** @class */ (function () {
    function Interval(start, end) {
        this.start = start;
        this.end = end;
    }
    Interval.prototype.print = function () {
        console.log("[".concat(this.start, ", ").concat(this.end, "]"));
    };
    return Interval;
}());
function canAttend(intervals) {
    intervals.sort(function (a, b) { return a.start - b.start; });
    var start = intervals[0].start, end = intervals[0].end;
    for (var i = 1; i < intervals.length; i++) {
        if (end >= intervals[i].start) {
            return false;
        }
    }
    return true;
}
console.log("Can attend all appointments: ".concat(canAttend([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
])));
console.log("Can attend all appointments: ".concat(canAttend([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
])));
console.log("Can attend all appointments: ".concat(canAttend([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
])));
