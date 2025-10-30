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
function merge(intervals) {
    if (intervals.length < 2)
        return intervals;
    intervals.sort(function (a, b) { return a.start - b.start; });
    var mergedInterval = [], start = intervals[0].start, end = intervals[0].end;
    for (var i = 1; i < intervals.length; i++) {
        var interval = intervals[i];
        if (interval.start <= end) { //overlap
            end = Math.max(end, interval.end);
        }
        else { //no overlap
            mergedInterval.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    }
    mergedInterval.push(new Interval(start, end));
    return mergedInterval;
}
console.log('Merged intervals: ');
var result = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
for (var i = 0; i < result.length; i++)
    result[i].print();
console.log();
console.log('Merged intervals: ');
result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
for (var i = 0; i < result.length; i++)
    result[i].print();
console.log();
console.log('Merged intervals: ');
result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
for (var i = 0; i < result.length; i++)
    result[i].print();
console.log();
