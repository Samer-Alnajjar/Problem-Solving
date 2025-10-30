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

function merge(intervals: Interval[]) {
    if(intervals.length < 2) return intervals;
    
    intervals.sort((a, b) => a. start- b.start)

    let mergedInterval = [],
    start = intervals[0].start,
    end = intervals[0].end;

    for(let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        if(interval.start <= end) { //overlap
            end = Math.max(end, interval.end)
        } else { //no overlap
            mergedInterval.push(new Interval(start, end))
            start = interval.start
            end = interval.end
        }
    }

    mergedInterval.push(new Interval(start, end));
    return mergedInterval;
}

console.log('Merged intervals: ');
let result = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
for (let i = 0; i < result.length; i++) result[i].print();
console.log();

console.log('Merged intervals: ');
result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
for (let i = 0; i < result.length; i++) result[i].print();
console.log();

console.log('Merged intervals: ');
result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
for (let i = 0; i < result.length; i++) result[i].print();
console.log();