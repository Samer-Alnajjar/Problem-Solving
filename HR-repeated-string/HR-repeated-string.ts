function repeatedString(s: string, n: number): number {
    if(s.length === 1 && s[0] === '1') return n;
    if(s.length === 1 && s[0] != '1') return 0;

    let repeatedStr = Math.floor(n / s.length),
        remaining = n % s.length,
        repeated = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'a') repeated++;
    }

    repeated*= repeatedStr;

    for(let i = 0; i < remaining; i++) {
        if(s[i] === 'a') repeated++;
    }

    return repeated;
}
