type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let value = init;

    for(let i = 0 ; i < nums.length; i++) {
        console.log(value);
        console.log(init);
        value = fn((value || init), nums[i])
    }

    return value;
};