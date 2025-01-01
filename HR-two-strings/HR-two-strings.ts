function twoStrings(s1: string, s2: string): string {
    // Write your code here
    let obj: {[key: string]: number} = {},
    doesShare = false;

    for(let i = 0 ; i < s1.length; i++) {
        obj[s1[i]] = (obj[s1[i]] || 0) + 1;
    };

    for(let i = 0 ; i < s2.length; i++) {
        if(obj[s2[i]]) {
            obj[s2[i]]--;
            doesShare = true;
        }
    }

    if(doesShare) {
        return "YES"
    }

    return "NO"

}
