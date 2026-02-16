class Interval {
    start: number
    end: number 

    constructor( start:number,  end:number) {
        this.start = start;
        this.end = end;
    }

    print() {
        console.log(`[${this.start}, ${this.end}]`)
    }
} 


function insert(intervals: Interval[], newInterval: Interval) {
    let merged = [],
        i = 0;

    // No overlap
    while(i < intervals.length && intervals[i].end < newInterval.start) {
        merged.push(intervals[i]);
        i++;
    }

    // There is an overlap
    while(i < intervals.length && intervals[i].start <= newInterval.end) {
        newInterval.start = Math.min(newInterval.start, intervals[i].start)
        newInterval.end = Math.max(newInterval.end, intervals[i].end)
        i++
    }

    merged.push(newInterval);

    while(i < intervals.length) {
        merged.push(intervals[i]);
        i++
    }

    return merged
}

function insertInterval(interval: Interval[], newInt: Interval) {
    let mergedInterval = [];

    for (let i = 0; i < interval.length; i++) {
        // No overlap, insert before
        if (interval[i].end < newInt.start) {
            mergedInterval.push(interval[i])
        } else if (newInt.end < interval[i].start) {
            // No overlap, insert after
            mergedInterval.push(newInt);
            newInt = interval[i];
        } else {
            // There is an overlap
            newInt.start = Math.min(newInt.start, interval[i].start);
            newInt.end = Math.max(newInt.end, interval[i].end);
        }
    }

    mergedInterval.push(newInt)

    return mergedInterval;
}

console.log('Intervals after inserting the new interval: ');
let result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
);
for (let i = 0; i < result.length; i++) result[i].print();

console.log('Intervals after inserting the new interval: ');
result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 10)
);
for (let i = 0; i < result.length; i++) result[i].print();

console.log('Intervals after inserting the new interval: ');
result = insert(
  [new Interval(2, 3), new Interval(5, 7)],
  new Interval(1, 4)
);
for (let i = 0; i < result.length; i++) result[i].print();