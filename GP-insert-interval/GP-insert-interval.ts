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

    while(i < intervals.length && intervals[i].end < newInterval.start) {
        merged.push(intervals[i]);
        i++;
    }

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