function checkMagazine(magazine: string[], note: string[]): void {
    // Write your code here
    let obj: {[key: string]: number} = {};

    for(let i = 0 ; i < note.length; i++) {
        obj[note[i]] = (obj[note[i]] || 0) + 1;
    }

    for(let i = 0; i < magazine.length; i++) {
        if(obj[magazine[i]]) {
            obj[magazine[i]]--;
            if(obj[magazine[i]] < 0) {
                console.log("No");
                return;
            }
        }
    }

    for(const key in obj) {
        if(obj[key] > 0) {
            console.log('No');
            return;
        }
    }

    console.log("Yes");

}
