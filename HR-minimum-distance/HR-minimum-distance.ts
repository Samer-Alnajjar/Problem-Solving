type stringKeyValueObj = {
    [key:string]: number;
}

function minimumDistance(a: number[]): number {
    let obj: stringKeyValueObj = {},
        minDistance = -1;

    for(let  i = 0; i < a.length; i++) {
        if(obj.hasOwnProperty(a[i])) {
            let distance = i - obj[a[i]];

            if(minDistance === -1 || distance < minDistance) {
                minDistance = distance;
            }
        }
        obj[a[i]] = i;
    }

    return minDistance;
}
