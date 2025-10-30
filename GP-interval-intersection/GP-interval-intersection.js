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
function intersection(intervals_a, intervals_b) {
    var result = [];
    var i = 0, j = 0;
    while (i < intervals_a.length && j < intervals_b.length) {
        var aStart = intervals_a[i].start, aEnd = intervals_a[i].end, bStart = intervals_b[j].start, bEnd = intervals_b[j].end;
        // Check if intervals overlap
        var aOverlapsB = aStart >= bStart && aStart <= bEnd;
        var bOverlapsA = bStart >= aStart && bStart <= aEnd;
        // If they overlap, there is an intersection
        if (aOverlapsB || bOverlapsA) {
            var start = Math.max(aStart, bStart);
            var end = Math.min(aEnd, bEnd);
            result.push(new Interval(start, end));
        }
        // Move the pointer that has the smaller end time
        if (aEnd < bEnd) {
            i++;
        }
        else {
            j++;
        }
    }
    return result;
}
console.log('Intervals Intersection: ');
var result1 = intersection([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
for (var i = 0; i < result1.length; i++)
    result1[i].print();
// 🧪 Test Case 2
console.log('Intervals Intersection: ');
var result2 = intersection([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
for (var i = 0; i < result2.length; i++)
    result2[i].print();
