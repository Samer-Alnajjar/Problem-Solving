// Using index logic
// Time: O(n) | Space: O(1)
// function nonConstructableChange(coins: number[]) {
//     let change = 0;
//     coins.sort((a,b) => a-b)
//     for(let i = 0 ; i < coins.length; i++) {
//         if(coins[i] - i <= 2) {
//             change+=1;
//         } else {
//             return change+1
//         }
//     }
//     return change+1
// }

// Using coin logic difference
//  Time: O(n) | Space: O(n)
function nonConstructableChange(coins: number[]) {
    let change = 0;
    coins.sort((a, b) => a-b);
    for(const coin of coins) {
        if(coin > (change + 1)) {
            return change + 1
        }
        change+= coin
    }
    return change++
}

let arr = [5, 7, 1, 1, 2, 3, 22]

console.log(nonConstructableChange(arr))
