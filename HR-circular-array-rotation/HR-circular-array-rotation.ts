function circularArrayRotation(a: number[], k: number, quiries: number[]) {
    let arr: number[] = []
    
    for(let i = 0; i < k; i++) {
        a.unshift(a[a.length-1]);
        a.splice(a.length - 1, 1);
    }

    for(let j = 0; j < quiries.length; j++) {
        arr.push(a[quiries[j]]);
    }

    return arr;
}