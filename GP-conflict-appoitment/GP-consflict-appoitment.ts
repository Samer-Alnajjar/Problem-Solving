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

function canAttend(intervals: Interval[]) {
    intervals.sort((a,b) => a.start-b.start)

    let start = intervals[0].start,
        end = intervals[0].end;

    for(let i = 1; i < intervals.length;i++) {
        if(end >= intervals[i].start) {
            return false
        }
    }

    return true
}


console.log(`Can attend all appointments: ${canAttend([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
])}`);

console.log(`Can attend all appointments: ${canAttend([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(8, 12),
])}`);

console.log(`Can attend all appointments: ${canAttend([
  new Interval(4, 5),
  new Interval(2, 3),
  new Interval(3, 6),
])}`);
