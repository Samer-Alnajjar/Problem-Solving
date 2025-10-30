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

function intersection(intervals_a: string | any[], intervals_b: string | any[]) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < intervals_a.length && j < intervals_b.length) {
    let aStart = intervals_a[i].start,
      aEnd = intervals_a[i].end,
      bStart = intervals_b[j].start,
      bEnd = intervals_b[j].end;

    // Check if intervals overlap
    let aOverlapsB = aStart >= bStart && aStart <= bEnd;
    let bOverlapsA = bStart >= aStart && bStart <= aEnd;

    // If they overlap, there is an intersection
    if (aOverlapsB || bOverlapsA) {
      const start = Math.max(aStart, bStart);
      const end = Math.min(aEnd, bEnd);
      result.push(new Interval(start, end));
    }

    // Move the pointer that has the smaller end time
    if (aEnd < bEnd) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

console.log('Intervals Intersection: ');
let result1 = intersection(
  [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]
);
for (let i = 0; i < result1.length; i++) result1[i].print();

// 🧪 Test Case 2
console.log('Intervals Intersection: ');
let result2 = intersection(
  [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
  [new Interval(5, 10)]
);
for (let i = 0; i < result2.length; i++) result2[i].print();