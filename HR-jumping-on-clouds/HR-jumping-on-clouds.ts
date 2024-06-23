function jumpingOnClouds(c: number[]): number {
    let jumps = 0;

    for(let i = 1; i < c.length-1; i++) {
        if(c[i+1] === 0) {
            jumps++;
            i++;
        } else if(c[i] === 0) {
            jumps++
        }
    }

    return jumps;
}
