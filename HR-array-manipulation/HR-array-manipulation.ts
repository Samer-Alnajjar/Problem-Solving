function arrayManipulation(n: number, queries: number[][]): number {
    let arr = new Array(n+1).fill(0);

    for(let i = 0; i < queries.length; i++) {
        const [a,b,k] = queries[i];
        arr[a-1] += k;
        arr[b] -= k;
    }

    let current = 0,
        max = 0;

    for(let i = 0; i < n; i++) {
        current+= arr[i];
        if(current > max) {
            max = current;
        }
    }

    return max;
}
