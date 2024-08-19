function subStrCount(n: number, s: string): number {
    let count = 0;

    count+= n;

    for(let i = 0; i < n-1; i++) {
        let repeatedStr = 0;

        while(i+1 < n && s[i] == s[i+1]) {
            repeatedStr++;
            i++;
        }

        count+= repeatedStr * (repeatedStr + 1) / 2;


        let pointer = 1;

        while(i - pointer >= 0 && i+ pointer < n && s[i-pointer] == s[i+pointer] && s[i-1] == s[i-pointer]) {
            count++;
            pointer++
        }
    }

    return count;
}
