function minimumBribes(q: number[]):void {
    let bribes = 0;
    for(let i = q.length - 1; i >= 0; i--) {
        if(q[i] != i+1) {
            if(q[i-1] == i+1) {
                let temp = q[i];
                q[i] = q[i-1];
                q[i-1] = temp;
                bribes++;
            } else if(q[i-2] == i+1) {
                let temp = q[i];
                q[i] = q[i-2];
                q[i-2] = q[i-1];
                q[i-1] = temp;
                bribes+=2;
            } else {
                console.log("Too chaotic");
                return;
            }
        }
    }

    console.log(bribes);
}
