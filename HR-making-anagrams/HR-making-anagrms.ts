function makingAnagrams(a: string, b: string): number {
    let obj: {[key: string]: number} = {},
        deletions = 0;

    for(const char of a) {
        obj[char] = (obj[char] || 0) + 1
    }

    for(const char of b) {
        if(!obj[char]) {
            deletions++
        } else {
            obj[char]--;
        }
    }

    for(const char in obj) {
        if(obj[char] != 0) {
            deletions+= obj[char]
        }
    }

    return deletions;
}
