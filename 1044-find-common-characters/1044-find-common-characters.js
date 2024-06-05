/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let commonChars = {};

    for(let char of words[0]) {
        commonChars[char] = (commonChars[char] || 0) + 1 
    }

    for(let i = 1; i < words.length; i++) {
        let wordCounter = {};

        for(const char of words[i]) {
            wordCounter[char] = (wordCounter[char] || 0) + 1;
        }

        for(const char in commonChars) {
            if(wordCounter[char]) {
                commonChars[char] = Math.min(wordCounter[char], commonChars[char])
            } else {
                commonChars[char] = 0
            }
        }
    }

    let output = [];
    for(const char in commonChars) {
        if(!commonChars[char]) {
            delete commonChars[char]
        } else {
            let reps = 1;

            while(reps <= commonChars[char]) {
                output.push(char)
                reps++;
            }
        }
    }

    return output;
};