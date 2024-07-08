function appendAndDelete(s: string, t: string, k:number): string {
    let commonLength = 0;
    for(let i = 0 ; i < Math.min(s.length, t.length); i++) {
        if(s[i] === t[i]) {
            commonLength++;
        } else {
            break;
        }
    }

    let totalOperations = (s.length - commonLength) + (t.length - commonLength);

    if((k - totalOperations) % 2 === 0 || k >= (s.length + t.length)) {
        return "Yes";
    } else if(k < totalOperations) {
        return "No"
    }

    return "No";
}
